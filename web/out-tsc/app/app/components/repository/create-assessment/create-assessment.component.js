import { Component, ViewChild, HostListener, SecurityContext } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Validators } from '@angular/forms';
import $ from 'jquery';
import { parse, stringify } from 'flatted';
import { GraphComponentComponent } from '../../auth/graph-component/graph-component.component';
import { ViewEncapsulation } from '@angular/core';
import { TreeviewContentfolderComponent } from '../../auth/treeview-contentfolder/treeview-contentfolder.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/creator.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/forms";
import * as i5 from "../../../shared/service/newsubject.service";
import * as i6 from "@angular/platform-browser";
import * as i7 from "../../../shared/service/configuration.service";
import * as i8 from "@ng-bootstrap/ng-bootstrap";
import * as i9 from "../../../shared/service/class.service";
import * as i10 from "ngx-toastr";
import * as i11 from "../../../shared/service/common.service";
import * as i12 from "../../../shared/service/validation.service";
import * as i13 from "../../../shared/service/nav.service";
import * as i14 from "@angular/common";
import * as i15 from "@ng-select/ng-select";
import * as i16 from "ngx-chips";
import * as i17 from "@angular/cdk/drag-drop";
import * as i18 from "ng2-pdf-viewer";
import * as i19 from "../../../shared/components/remove-annatation/remove-annatation.component";
import * as i20 from "../../auth/graph-component/graph-component.component";
import * as i21 from "../../auth/tiny-mice/tiny-mice.component";
import * as i22 from "../../auth/confirm-content-assign/confirm-content-assign.component";
import * as i23 from "../../auth/treeview-contentfolder/treeview-contentfolder.component";
import * as i24 from "../../auth/other-link/other-link.component";
import * as i25 from "../../auth/source-link/source-link.component";
import * as i26 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
const _c0 = ["pdfPage"];
const _c1 = ["canvas"];
const _c2 = ["pencilCanvas"];
const _c3 = ["multiChoice"];
const _c4 = ["fillIn"];
const _c5 = ["dropdown"];
const _c6 = ["trueFalse"];
const _c7 = ["essay"];
const _c8 = ["delete"];
const _c9 = ["numeric"];
const _c10 = ["graph"];
const _c11 = ["viewGraph"];
const _c12 = ["deleteAlert"];
const _c13 = ["deleteSectionPopup"];
const _c14 = ["deleteSvgDraw"];
const _c15 = ["class"];
const _c16 = ["viewExplain"];
const _c17 = ["viewPdf"];
const _c18 = ["uploadPdf"];
const _c19 = ["mathShow"];
const _c20 = ["addBulk"];
const _c21 = ["attachmentsnew"];
const _c22 = ["attachments1"];
const _c23 = ["attachments2"];
const _c24 = ["assignContentToClass"];
const _c25 = ["assignTemplate"];
const _c26 = a0 => ({ "active1": a0 });
const _c27 = (a0, a1) => ({ "active1": a0, "div-disable": a1 });
const _c28 = () => ["add", "edit"];
const _c29 = () => ["publish", "update"];
const _c30 = () => [];
const _c31 = () => ({ standalone: true });
const _c32 = a0 => ({ "div-disable": a0 });
const _c33 = a0 => ({ "selectColor": a0 });
function CreateAssessmentComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1, "CREATE ASSESSMENT");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1, "EDIT ASSESSMENT - ");
    i0.ɵɵelementStart(2, "span", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.contentName);
} }
function CreateAssessmentComponent_div_0_h4_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1, "CREATE ASSIGNMENT");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_h4_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4");
    i0.ɵɵtext(1, "EDIT ASSIGNMENT - ");
    i0.ɵɵelementStart(2, "span", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.contentName);
} }
function CreateAssessmentComponent_div_0_div_15_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_15_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.assign("edit")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("title", ctx_r1.assessmentType == "edit" && ctx_r1.draftAdd == "update" ? "Update" : "Publish");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.assessmentType == "edit" && ctx_r1.draftAdd == "update" ? "Update" : "Publish", " ");
} }
function CreateAssessmentComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_0_div_15_button_1_Template, 2, 2, "button", 47);
    i0.ɵɵelementStart(2, "button", 48);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_15_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.draft("edit")); });
    i0.ɵɵtext(3, "Save As Draft");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(1, _c28).includes(ctx_r1.assessmentType) && i0.ɵɵpureFunction0(2, _c29).includes(ctx_r1.draftAdd));
} }
function CreateAssessmentComponent_div_0_div_19_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 91);
} }
function CreateAssessmentComponent_div_0_div_19_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 92);
} }
function CreateAssessmentComponent_div_0_div_19_img_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 93);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r1.sanitized.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + ctx_r1.imagepath), i0.ɵɵsanitizeUrl);
} }
function CreateAssessmentComponent_div_0_div_19_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 94);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_i_8_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteImg()); });
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_div_22_em_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 97);
    i0.ɵɵtext(1, "Assignment Name is required");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 95)(1, "input", 96);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_0_div_19_div_22_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.formChanged()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, CreateAssessmentComponent_div_0_div_19_div_22_em_2_Template, 2, 0, "em", 69);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.multiform.get("classname").valid && (ctx_r1.multiform.get("classname").dirty || ctx_r1.multiform.get("classname").touched));
} }
function CreateAssessmentComponent_div_0_div_19_div_23_em_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 97);
    i0.ɵɵtext(1, "Assessment Name is required");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 95)(1, "input", 98);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_0_div_19_div_23_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.formChanged()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, CreateAssessmentComponent_div_0_div_19_div_23_em_2_Template, 2, 0, "em", 69);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.multiform.get("classname").valid && (ctx_r1.multiform.get("classname").dirty || ctx_r1.multiform.get("classname").touched));
} }
function CreateAssessmentComponent_div_0_div_19_em_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 97);
    i0.ɵɵtext(1, "Grade is required");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_em_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 97);
    i0.ɵɵtext(1, "Subject is required");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_option_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 99);
    i0.ɵɵtext(1, "Access to all within Org ");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_option_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 100);
    i0.ɵɵtext(1, "Access only for you");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_option_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 101);
    i0.ɵɵtext(1, "Access within corporate");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_em_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 97);
    i0.ɵɵtext(1, "Class Name is required");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_div_50_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 108);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_50_i_4_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.editPrimaryLink()); });
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_div_50_app_source_link_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-source-link", 109);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("setHeight", false)("showWithIcon", false)("pdfPath", ctx_r1.getpdf);
} }
function CreateAssessmentComponent_div_0_div_19_div_50_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 110)(1, "input", 111);
    i0.ɵɵtwoWayListener("ngModelChange", function CreateAssessmentComponent_div_0_div_19_div_50_div_6_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.editLinkVal, $event) || (ctx_r1.editLinkVal = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "i", 112);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_50_div_6_Template_i_click_2_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.updatePrimaryLink("icon")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.editLinkVal);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c31));
} }
function CreateAssessmentComponent_div_0_div_19_div_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 102)(1, "div", 103)(2, "h4", 104);
    i0.ɵɵtext(3, "Source Link");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CreateAssessmentComponent_div_0_div_19_div_50_i_4_Template, 1, 0, "i", 105);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CreateAssessmentComponent_div_0_div_19_div_50_app_source_link_5_Template, 1, 3, "app-source-link", 106)(6, CreateAssessmentComponent_div_0_div_19_div_50_div_6_Template, 3, 3, "div", 107);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.editSourceLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.editSourceLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.editSourceLink);
} }
function CreateAssessmentComponent_div_0_div_19_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 121)(1, "input", 122);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_53_div_1_Template_input_click_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.allowAnswerKey($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, "\u00A0");
    i0.ɵɵelementStart(3, "span", 123);
    i0.ɵɵtext(4, "Allow Answer Key to view");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r1.showAnswerKey);
} }
function CreateAssessmentComponent_div_0_div_19_div_53_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 124);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_53_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.saveAndExit()); });
    i0.ɵɵtext(1, "Save ");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 113);
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_0_div_19_div_53_div_1_Template, 5, 1, "div", 114);
    i0.ɵɵelementStart(2, "input", 115, 13);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_0_div_19_div_53_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.encodePdfFileAsURL($event, 2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 116);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_53_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r12); const hiddenfileinput1_r14 = i0.ɵɵreference(4); return i0.ɵɵresetView(hiddenfileinput1_r14.click()); });
    i0.ɵɵelement(6, "i", 117);
    i0.ɵɵtext(7, " Answer Key Upload ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 115, 14);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_0_div_19_div_53_Template_input_change_8_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.encodePdfFileAsURL($event, 3)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 116);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_53_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r12); const hiddenfileinput2_r15 = i0.ɵɵreference(10); return i0.ɵɵresetView(hiddenfileinput2_r15.click()); });
    i0.ɵɵelement(12, "i", 117);
    i0.ɵɵtext(13, " Teacher Version ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, CreateAssessmentComponent_div_0_div_19_div_53_button_14_Template, 2, 0, "button", 118);
    i0.ɵɵelementStart(15, "button", 119);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_53_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.description()); });
    i0.ɵɵtext(16, "Next ");
    i0.ɵɵelement(17, "i", 120);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.answerpdfpath.length != 0);
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngIf", ctx_r1.assessmentType != "add");
} }
function CreateAssessmentComponent_div_0_div_19_div_57_div_1_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 104);
    i0.ɵɵtext(1, "ASSIGNMENT PDF");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_div_57_div_1_h4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 104);
    i0.ɵɵtext(1, "ASSESSMENT PDF");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_div_57_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 137);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_57_div_1_img_4_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r18); const file_r19 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail(file_r19)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("title", file_r19.name);
} }
function CreateAssessmentComponent_div_0_div_19_div_57_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 138);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_57_div_1_img_5_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r20); const file_r19 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail(file_r19)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r19 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("title", file_r19.name);
} }
function CreateAssessmentComponent_div_0_div_19_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 127);
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_0_div_19_div_57_div_1_h4_1_Template, 2, 0, "h4", 128)(2, CreateAssessmentComponent_div_0_div_19_div_57_div_1_h4_2_Template, 2, 0, "h4", 128);
    i0.ɵɵelementStart(3, "div", 129);
    i0.ɵɵtemplate(4, CreateAssessmentComponent_div_0_div_19_div_57_div_1_img_4_Template, 1, 1, "img", 130)(5, CreateAssessmentComponent_div_0_div_19_div_57_div_1_img_5_Template, 1, 1, "img", 131);
    i0.ɵɵelement(6, "br");
    i0.ɵɵelementStart(7, "h6", 132);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 133)(10, "div", 134)(11, "button", 135);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_57_div_1_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.pdfUpload()); });
    i0.ɵɵelement(12, "i", 117);
    i0.ɵɵtext(13, " Upload ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 134)(15, "button", 136);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_57_div_1_Template_button_click_15_listener() { const file_r19 = i0.ɵɵrestoreView(_r17).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail(file_r19)); });
    i0.ɵɵtext(16, "Preview ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const file_r19 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "assignment" && ctx_r1.assessmentType == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "assessment" && ctx_r1.assessmentType == "edit");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "assignment");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "assessment");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(file_r19.image);
} }
function CreateAssessmentComponent_div_0_div_19_div_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 125);
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_0_div_19_div_57_div_1_Template, 17, 5, "div", 126);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.showpdf);
} }
function CreateAssessmentComponent_div_0_div_19_div_58_h4_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 104);
    i0.ɵɵtext(1, " ASSIGNMENT PDF");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_div_58_h4_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 104);
    i0.ɵɵtext(1, " ASSESSMENT PDF");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_div_58_img_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 143);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_58_img_5_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail(ctx_r1.getpdf)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("title", ctx_r1.getpdf.name);
} }
function CreateAssessmentComponent_div_0_div_19_div_58_img_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 144);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_58_img_6_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail(ctx_r1.getpdf)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("title", ctx_r1.getpdf.name);
} }
function CreateAssessmentComponent_div_0_div_19_div_58_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 125)(1, "div", 139);
    i0.ɵɵtemplate(2, CreateAssessmentComponent_div_0_div_19_div_58_h4_2_Template, 2, 0, "h4", 128)(3, CreateAssessmentComponent_div_0_div_19_div_58_h4_3_Template, 2, 0, "h4", 128);
    i0.ɵɵelementStart(4, "div", 129);
    i0.ɵɵtemplate(5, CreateAssessmentComponent_div_0_div_19_div_58_img_5_Template, 1, 1, "img", 140)(6, CreateAssessmentComponent_div_0_div_19_div_58_img_6_Template, 1, 1, "img", 141);
    i0.ɵɵelement(7, "br");
    i0.ɵɵelementStart(8, "h6", 142);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_58_Template_h6_click_8_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.viewDetail(ctx_r1.getpdf)); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "assignment");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "assessment");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "assignment");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "assessment");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getpdf.image);
} }
function CreateAssessmentComponent_div_0_div_19_div_59_div_1_div_3_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 149);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_59_div_1_div_3_img_3_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.deletePdf()); });
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_div_59_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 129)(1, "img", 147);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_59_div_1_div_3_Template_img_click_1_listener() { i0.ɵɵrestoreView(_r24); const file_r25 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail(file_r25)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "br");
    i0.ɵɵtemplate(3, CreateAssessmentComponent_div_0_div_19_div_59_div_1_div_3_img_3_Template, 1, 0, "img", 148);
    i0.ɵɵelementStart(4, "h6", 142);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_59_div_1_div_3_Template_h6_click_4_listener() { i0.ɵɵrestoreView(_r24); const file_r25 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail(file_r25)); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const file_r25 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", file_r25.image);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.answerpdfpath != "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(file_r25.image);
} }
function CreateAssessmentComponent_div_0_div_19_div_59_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 139)(1, "h4", 104);
    i0.ɵɵtext(2, "Answer PDF");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CreateAssessmentComponent_div_0_div_19_div_59_div_1_div_3_Template, 6, 3, "div", 146);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.answerpdfpath.length > 0);
} }
function CreateAssessmentComponent_div_0_div_19_div_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 125);
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_0_div_19_div_59_div_1_Template, 4, 1, "div", 145);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.answerpdfpath);
} }
function CreateAssessmentComponent_div_0_div_19_div_60_div_1_div_3_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 152);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_60_div_1_div_3_img_3_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r29); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.deleteVersion()); });
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_19_div_60_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 129)(1, "img", 150);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_60_div_1_div_3_Template_img_click_1_listener() { i0.ɵɵrestoreView(_r27); const file_r28 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail(file_r28)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "br");
    i0.ɵɵtemplate(3, CreateAssessmentComponent_div_0_div_19_div_60_div_1_div_3_img_3_Template, 1, 0, "img", 151);
    i0.ɵɵelementStart(4, "h6", 142);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_div_60_div_1_div_3_Template_h6_click_4_listener() { i0.ɵɵrestoreView(_r27); const file_r28 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewDetail(file_r28)); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const file_r28 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", file_r28.image);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (ctx_r1.teacherVersion == null ? null : ctx_r1.teacherVersion.length) != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(file_r28.image);
} }
function CreateAssessmentComponent_div_0_div_19_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 139)(1, "h4", 104);
    i0.ɵɵtext(2, "Teacher version PDF");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CreateAssessmentComponent_div_0_div_19_div_60_div_1_div_3_Template, 6, 3, "div", 146);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (ctx_r1.teacherVersion == null ? null : ctx_r1.teacherVersion.length) > 0);
} }
function CreateAssessmentComponent_div_0_div_19_div_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 125);
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_0_div_19_div_60_div_1_Template, 4, 1, "div", 145);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.teacherVersion);
} }
function CreateAssessmentComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50)(1, "form", 51)(2, "div", 52)(3, "div", 53)(4, "div", 54);
    i0.ɵɵtemplate(5, CreateAssessmentComponent_div_0_div_19_img_5_Template, 1, 0, "img", 55)(6, CreateAssessmentComponent_div_0_div_19_img_6_Template, 1, 0, "img", 56)(7, CreateAssessmentComponent_div_0_div_19_img_7_Template, 1, 1, "img", 57)(8, CreateAssessmentComponent_div_0_div_19_i_8_Template, 1, 0, "i", 58);
    i0.ɵɵelementStart(9, "div", 59)(10, "input", 60, 12);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_0_div_19_Template_input_change_10_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.encodeImageFileAsURL($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 61);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_19_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r5); const addAssignment_r7 = i0.ɵɵreference(11); return i0.ɵɵresetView(addAssignment_r7.click()); });
    i0.ɵɵelement(13, "i", 62);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(14, "div", 63)(15, "div")(16, "h6")(17, "b");
    i0.ɵɵtext(18, "Created By");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 20)(20, "div", 64);
    i0.ɵɵelement(21, "input", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(22, CreateAssessmentComponent_div_0_div_19_div_22_Template, 3, 1, "div", 66)(23, CreateAssessmentComponent_div_0_div_19_div_23_Template, 3, 1, "div", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 20)(25, "div", 67)(26, "ng-select", 68);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_0_div_19_Template_ng_select_change_26_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.formChanged()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(27, CreateAssessmentComponent_div_0_div_19_em_27_Template, 2, 0, "em", 69);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 64)(29, "ng-select", 70);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_0_div_19_Template_ng_select_change_29_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.formChanged()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(30, CreateAssessmentComponent_div_0_div_19_em_30_Template, 2, 0, "em", 69);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 64)(32, "select", 71);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_0_div_19_Template_select_change_32_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.formChanged()); });
    i0.ɵɵtemplate(33, CreateAssessmentComponent_div_0_div_19_option_33_Template, 2, 0, "option", 72)(34, CreateAssessmentComponent_div_0_div_19_option_34_Template, 2, 0, "option", 73)(35, CreateAssessmentComponent_div_0_div_19_option_35_Template, 2, 0, "option", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(36, CreateAssessmentComponent_div_0_div_19_em_36_Template, 2, 0, "em", 69);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 20)(38, "div", 75);
    i0.ɵɵelement(39, "textarea", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 77);
    i0.ɵɵelement(41, "app-treeview-contentfolder", 78);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div", 20)(43, "div", 79)(44, "div", 80)(45, "input", 81);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_0_div_19_Template_input_change_45_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.formChanged()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "label", 82);
    i0.ɵɵtext(47, "Download Content");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(48, "div", 83)(49, "tag-input", 84);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_0_div_19_Template_tag_input_change_49_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.formChanged()); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(50, CreateAssessmentComponent_div_0_div_19_div_50_Template, 7, 3, "div", 85);
    i0.ɵɵelementStart(51, "div", 86);
    i0.ɵɵelement(52, "app-other-link", 87);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(53, CreateAssessmentComponent_div_0_div_19_div_53_Template, 18, 2, "div", 88);
    i0.ɵɵelement(54, "hr");
    i0.ɵɵelementStart(55, "div", 89)(56, "div", 20);
    i0.ɵɵtemplate(57, CreateAssessmentComponent_div_0_div_19_div_57_Template, 2, 1, "div", 90)(58, CreateAssessmentComponent_div_0_div_19_div_58_Template, 10, 5, "div", 90)(59, CreateAssessmentComponent_div_0_div_19_div_59_Template, 2, 1, "div", 90)(60, CreateAssessmentComponent_div_0_div_19_div_60_Template, 2, 1, "div", 90);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.multiform);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.imagepath && ctx_r1.uploadType == "assessment");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.imagepath && ctx_r1.uploadType == "assignment");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.imagepath);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.imagepath);
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "assignment");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "assessment");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r1.gradeData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.multiform.get("grade").valid && (ctx_r1.multiform.get("grade").dirty || ctx_r1.multiform.get("grade").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r1.subjectData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.multiform.get("subject").valid && (ctx_r1.multiform.get("subject").dirty || ctx_r1.multiform.get("subject").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.roleid != "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.roleid != "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.roleid == "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.multiform.get("option").valid && (ctx_r1.multiform.get("option").dirty || ctx_r1.multiform.get("option").touched));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("type", ctx_r1.assessmentType)("content_id", ctx_r1.type == "add" ? "" : ctx_r1.editData == null ? null : ctx_r1.editData.content_id)("selectedbatch", ctx_r1.assessmentType == "edit" ? ctx_r1.editData.batch_id : i0.ɵɵpureFunction0(32, _c30));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("secondaryPlaceholder", "Enter tags")("placeholder", "Add tags")("editable", true)("clearOnBlur", true)("addOnPaste", true)("addOnBlur", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.getpdf.original_image_url == undefined);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("showLink", true)("arrayValue", ctx_r1.getpdf == null ? null : ctx_r1.getpdf.links);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "Description");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.assessmentType == "edit" && ctx_r1.getpdf.original_image_url != undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.getpdf != "" && ctx_r1.assessmentType != "edit" && ctx_r1.getpdf.original_image_url != undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.answerpdfpath.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.teacherVersion == null ? null : ctx_r1.teacherVersion.length) != 0);
} }
function CreateAssessmentComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 153)(1, "div", 154)(2, "div", 155)(3, "img", 156);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_22_Template_img_click_3_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.incrementZoom(0.1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "img", 157);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_22_Template_img_click_4_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.incrementZoom(-0.1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "img", 158);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_22_Template_img_click_5_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteSvg()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 159)(7, "i", 160);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_22_Template_i_click_7_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.decrementPage()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 161);
    i0.ɵɵtwoWayListener("ngModelChange", function CreateAssessmentComponent_div_0_div_22_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.pageVariable, $event) || (ctx_r1.pageVariable = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "i", 160);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_22_Template_i_click_9_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.incrementPage()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 162)(11, "div", 163)(12, "img", 164);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_22_Template_img_click_12_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.backToQuestion(); return i0.ɵɵresetView(ctx_r1.tools("select", "auto")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "img", 165);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_22_Template_img_click_13_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.backToQuestion(); return i0.ɵɵresetView(ctx_r1.tools("rect", "crosshair")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "img", 166);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_22_Template_img_click_14_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.backToQuestion(); return i0.ɵɵresetView(ctx_r1.tools("eraser", "auto")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "img", 167);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_22_Template_img_click_15_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.backToQuestion(); return i0.ɵɵresetView(ctx_r1.tools("math", "auto")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "img", 168);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_22_Template_img_click_16_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.backToQuestion(); return i0.ɵɵresetView(ctx_r1.tools("text", "auto")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "img", 169);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_22_Template_img_click_17_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.backToQuestion(); return i0.ɵɵresetView(ctx_r1.tools("highlight", "crosshair")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "img", 170);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_22_Template_img_click_18_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.backToQuestion(); return i0.ɵɵresetView(ctx_r1.tools("path", "crosshair")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 171);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_22_Template_input_click_19_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.backToQuestion()); });
    i0.ɵɵtwoWayListener("ngModelChange", function CreateAssessmentComponent_div_0_div_22_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.svgColor, $event) || (ctx_r1.svgColor = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "select", 172);
    i0.ɵɵtwoWayListener("ngModelChange", function CreateAssessmentComponent_div_0_div_22_Template_select_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.textFontSize, $event) || (ctx_r1.textFontSize = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(21, "option", 173);
    i0.ɵɵtext(22, "--Font Size--");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "option", 174);
    i0.ɵɵtext(24, "6");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 175);
    i0.ɵɵtext(26, "7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "option", 176);
    i0.ɵɵtext(28, "8");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "option", 177);
    i0.ɵɵtext(30, "9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "option", 178);
    i0.ɵɵtext(32, "10");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "option", 179);
    i0.ɵɵtext(34, "11");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "option", 180);
    i0.ɵɵtext(36, "12");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "option", 181);
    i0.ɵɵtext(38, "13");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "option", 182);
    i0.ɵɵtext(40, "14");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "option", 183);
    i0.ɵɵtext(42, "15");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "option", 184);
    i0.ɵɵtext(44, "16");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "option", 185);
    i0.ɵɵtext(46, "17");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "option", 186);
    i0.ɵɵtext(48, "18");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "option", 187);
    i0.ɵɵtext(50, "19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "option", 188);
    i0.ɵɵtext(52, "20");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", ctx_r1.selectedDeleteIcon ? "deleteIcon" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("fa fa-minus py-2 px-3 border rounded-left ", ctx_r1.pageVariable > 1 ? "color-primary" : "color-grey", "");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.pageVariable);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("fa fa-plus py-2 px-3 border rounded-right ", ctx_r1.pageVariable == ctx_r1.totalPdfPage ? "color-grey" : "color-primary", "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "select" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "rect" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "eraser" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "math" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "text" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "highlight" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "path" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.svgColor);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.textFontSize);
} }
function CreateAssessmentComponent_div_0_div_24_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 193);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_24_img_1_Template_img_click_0_listener() { const item_r33 = i0.ɵɵrestoreView(_r32).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.question(item_r33.question_type_id)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("title", item_r33.question_type);
    i0.ɵɵproperty("src", ctx_r1.sanitized.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + item_r33.icon_path), i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("data-target", "#log" + item_r33.question_type_id);
} }
function CreateAssessmentComponent_div_0_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 189);
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_0_div_24_img_1_Template, 1, 3, "img", 190);
    i0.ɵɵelementStart(2, "img", 191);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_24_Template_img_click_2_listener() { i0.ɵɵrestoreView(_r31); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.question("40")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "img", 192);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_24_Template_img_click_3_listener() { i0.ɵɵrestoreView(_r31); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addSec("")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.icons);
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-target", "#log40");
} }
function CreateAssessmentComponent_div_0_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 194)(1, "button", 195);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_25_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r34); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addBulkQuestion()); });
    i0.ɵɵtext(2, "Add bulk");
    i0.ɵɵelementEnd()();
} }
function CreateAssessmentComponent_div_0_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 199);
    i0.ɵɵelement(1, "img", 200);
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 196, 15);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_27_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.mouseEvent($event)); })("dblclick", function CreateAssessmentComponent_div_0_div_27_Template_div_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.editText($event)); })("mousemove", function CreateAssessmentComponent_div_0_div_27_Template_div_mousemove_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.mouseEvent($event)); })("mouseover", function CreateAssessmentComponent_div_0_div_27_Template_div_mouseover_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.mouseOver($event)); })("mousedown", function CreateAssessmentComponent_div_0_div_27_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.mouseEvent($event)); })("mouseenter", function CreateAssessmentComponent_div_0_div_27_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.mouseEnter()); })("mouseleave", function CreateAssessmentComponent_div_0_div_27_Template_div_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.mouseOut($event)); })("input", function CreateAssessmentComponent_div_0_div_27_Template_div_input_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.keyPressfunction($event)); })("mouseup", function CreateAssessmentComponent_div_0_div_27_Template_div_mouseup_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.mouseEvent($event)); });
    i0.ɵɵtemplate(2, CreateAssessmentComponent_div_0_div_27_div_2_Template, 2, 0, "div", 197);
    i0.ɵɵelementStart(3, "pdf-viewer", 198);
    i0.ɵɵlistener("text-layer-rendered", function CreateAssessmentComponent_div_0_div_27_Template_pdf_viewer_text_layer_rendered_3_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.textRender($event)); })("after-load-complete", function CreateAssessmentComponent_div_0_div_27_Template_pdf_viewer_after_load_complete_3_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.callBackFn($event)); })("error", function CreateAssessmentComponent_div_0_div_27_Template_pdf_viewer_error_3_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onerror($event)); })("pagechanging", function CreateAssessmentComponent_div_0_div_27_Template_pdf_viewer_pagechanging_3_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.pagechanging($event)); });
    i0.ɵɵtwoWayListener("pageChange", function CreateAssessmentComponent_div_0_div_27_Template_pdf_viewer_pageChange_3_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.pageVariable, $event) || (ctx_r1.pageVariable = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("page-rendered", function CreateAssessmentComponent_div_0_div_27_Template_pdf_viewer_page_rendered_3_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.pageRendered($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.customPdfLoader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.pdfTemplate)("zoom", ctx_r1.zoom)("original-size", true)("fit-to-page", true)("render-text", ctx_r1.shapesType == "select")("show-all", true);
    i0.ɵɵtwoWayProperty("page", ctx_r1.pageVariable);
} }
function CreateAssessmentComponent_div_0_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 201);
    i0.ɵɵelement(1, "app-source-link", 202);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("pdfPath", ctx_r1.getpdf);
} }
function CreateAssessmentComponent_div_0_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 203);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_button_32_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.backToQuestion()); });
    i0.ɵɵtext(1, "Back ");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "app-remove-annatation", 204);
    i0.ɵɵlistener("undoDeleteAnnatation", function CreateAssessmentComponent_div_0_ng_container_33_Template_app_remove_annatation_undoDeleteAnnatation_1_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.undoDeleteAnnatation($event)); })("hoverremoveItem", function CreateAssessmentComponent_div_0_ng_container_33_Template_app_remove_annatation_hoverremoveItem_1_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.hoverRemoveItemEnter($event)); })("hoverleaveremoveItem", function CreateAssessmentComponent_div_0_ng_container_33_Template_app_remove_annatation_hoverleaveremoveItem_1_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.hoverLeaveRemoveItemEnter($event)); })("removeItem", function CreateAssessmentComponent_div_0_ng_container_33_Template_app_remove_annatation_removeItem_1_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.removeAnnatation($event)); })("openDeleteDialog", function CreateAssessmentComponent_div_0_ng_container_33_Template_app_remove_annatation_openDeleteDialog_1_listener() { i0.ɵɵrestoreView(_r37); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteAction()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.itemSelect);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 231);
    i0.ɵɵlistener("mousedown", function CreateAssessmentComponent_div_0_div_36_div_12_div_1_span_3_Template_span_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r41); const i_r39 = i0.ɵɵnextContext(3).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dragQueCount($event, i_r39)); })("mousemove", function CreateAssessmentComponent_div_0_div_36_div_12_div_1_span_3_Template_span_mousemove_0_listener($event) { i0.ɵɵrestoreView(_r41); const i_r39 = i0.ɵɵnextContext(3).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dragQueCount($event, i_r39)); })("dropped", function CreateAssessmentComponent_div_0_div_36_div_12_div_1_span_3_Template_span_dropped_0_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onDrop($event)); })("mouseup", function CreateAssessmentComponent_div_0_div_36_div_12_div_1_span_3_Template_span_mouseup_0_listener($event) { i0.ɵɵrestoreView(_r41); const i_r39 = i0.ɵɵnextContext(3).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dragQueCount($event, i_r39)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r42 = i0.ɵɵnextContext(2).$implicit;
    const i_r39 = i0.ɵɵnextContext().index;
    i0.ɵɵpropertyInterpolate("id", list_r42.sub + "dropId" + i_r39);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r42.sub);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 232);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r42 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r42.sub);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 233)(1, "div", 234)(2, "label");
    i0.ɵɵtext(3, "Question: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "span", 235);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext(2);
    const list_r42 = ctx_r42.$implicit;
    const j_r44 = ctx_r42.index;
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate1("id", "", j_r44, "+ 'show'");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 3, list_r42.question), i0.ɵɵsanitizeHtml);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_13_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 238);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r45 = ctx.$implicit;
    const list_r42 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c33, items_r45.toLowerCase() === list_r42.answer.toString().toLowerCase()));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(items_r45);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 236);
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_13_span_1_Template, 2, 4, "span", 237);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r42 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r42.array);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 236)(1, "div", 20);
    i0.ɵɵelement(2, "input", 239);
    i0.ɵɵelementStart(3, "h4", 240);
    i0.ɵɵtext(4, "True");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 239);
    i0.ɵɵelementStart(6, "h4", 240);
    i0.ɵɵtext(7, "False");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r42 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", list_r42.answer.toString() == "true");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", list_r42.answer.toString() == "false");
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_15_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 243);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const chc_r46 = ctx.$implicit;
    const list_r42 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("selected", chc_r46.choice == list_r42.answer.toString());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(chc_r46.choice);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 236)(1, "select", 241);
    i0.ɵɵtemplate(2, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_15_option_2_Template, 2, 2, "option", 242);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r42 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r42.array);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 245)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "textarea", 246);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const answer_r47 = ctx.$implicit;
    const k_r48 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Answer ", k_r48 + 1, ": ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", answer_r47);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 233);
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_16_div_1_Template, 4, 2, "div", 244);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r42 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r42 == null ? null : list_r42.answer);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 247)(1, "label");
    i0.ɵɵtext(2, "Free text");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "textarea", 248);
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 245)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 250);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const answer_r49 = ctx.$implicit;
    const k_r50 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Answer ", k_r50 + 1, ": ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 2, answer_r49), i0.ɵɵsanitizeHtml);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 249);
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_18_div_1_Template, 5, 4, "div", 244);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r42 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r42 == null ? null : list_r42.answer);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 233);
    i0.ɵɵelement(1, "h4", 252);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r42 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, list_r42.editor), i0.ɵɵsanitizeHtml);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 251)(1, "button", 119);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_19_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r51); const list_r42 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.graphDetail(list_r42.answer)); });
    i0.ɵɵtext(2, "view graph ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_19_div_3_Template, 3, 3, "div", 226);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r42 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r42.editor != "");
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "textarea", 254);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r52 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", opt_r52.value);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 247);
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_20_div_1_Template, 2, 1, "div", 253);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r42 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r42.answer);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 233)(1, "div", 255)(2, "label", 45);
    i0.ɵɵtext(3, "Explanation");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 256);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r42 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 1, list_r42.explain), i0.ɵɵsanitizeHtml);
} }
function CreateAssessmentComponent_div_0_div_36_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 216)(1, "div", 20)(2, "div", 217);
    i0.ɵɵtemplate(3, CreateAssessmentComponent_div_0_div_36_div_12_div_1_span_3_Template, 2, 2, "span", 218)(4, CreateAssessmentComponent_div_0_div_36_div_12_div_1_span_4_Template, 2, 1, "span", 219);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 155);
    i0.ɵɵelement(6, "img", 220)(7, "img", 221)(8, "img", 222);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 223)(10, "img", 224);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_36_div_12_div_1_Template_img_click_10_listener() { i0.ɵɵrestoreView(_r40); const list_r42 = i0.ɵɵnextContext().$implicit; const i_r39 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteAlertView(list_r42.sub, i_r39, list_r42.quesId)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "img", 225);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_36_div_12_div_1_Template_img_click_11_listener() { i0.ɵɵrestoreView(_r40); const ctx_r42 = i0.ɵɵnextContext(); const list_r42 = ctx_r42.$implicit; const j_r44 = ctx_r42.index; const i_r39 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.editAction(list_r42, ctx_r1.subQuestion, ctx_r1.totalsub, i_r39, j_r44)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_12_Template, 6, 5, "div", 226)(13, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_13_Template, 2, 1, "div", 227)(14, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_14_Template, 8, 2, "div", 227)(15, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_15_Template, 3, 1, "div", 227)(16, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_16_Template, 2, 1, "div", 226)(17, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_17_Template, 4, 0, "div", 228)(18, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_18_Template, 2, 1, "div", 229)(19, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_19_Template, 4, 1, "div", 230)(20, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_20_Template, 2, 1, "div", 228)(21, CreateAssessmentComponent_div_0_div_36_div_12_div_1_div_21_Template, 6, 3, "div", 226);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r42 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.type != "Preview");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "Preview");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("hidden", list_r42.autoGrade == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", list_r42.matchCase == "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", list_r42.typeId != "30");
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.type != "Workspace");
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-target", "#log" + list_r42.typeId);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r42.question != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r42.typeId == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r42.typeId == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r42.typeId == "9");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r42.typeId == "10");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r42.typeId == "20");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r42.typeId == "30");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r42.typeId == "40");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r42.typeId == "54");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r42.explain != "");
} }
function CreateAssessmentComponent_div_0_div_36_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 214);
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_0_div_36_div_12_div_1_Template, 22, 17, "div", 215);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showdropdown);
} }
function CreateAssessmentComponent_div_0_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 205)(1, "div", 206)(2, "div", 207)(3, "div")(4, "input", 208);
    i0.ɵɵlistener("input", function CreateAssessmentComponent_div_0_div_36_Template_input_input_4_listener() { const i_r39 = i0.ɵɵrestoreView(_r38).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.validation(i_r39, ctx_r1.secHeadingArray[i_r39])); });
    i0.ɵɵtwoWayListener("ngModelChange", function CreateAssessmentComponent_div_0_div_36_Template_input_ngModelChange_4_listener($event) { const i_r39 = i0.ɵɵrestoreView(_r38).index; const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.secHeadingArray[i_r39], $event) || (ctx_r1.secHeadingArray[i_r39] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 209)(6, "div", 210)(7, "img", 211);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_div_36_Template_img_click_7_listener() { const i_r39 = i0.ɵɵrestoreView(_r38).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteSection(i_r39)); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(8, "em", 212);
    i0.ɵɵtext(9, "Section heading should not be same");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "em", 212);
    i0.ɵɵtext(11, "Section heading should not be empty");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, CreateAssessmentComponent_div_0_div_36_div_12_Template, 2, 1, "div", 213);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    const i_r39 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate2("col-md-", ctx_r1.type == "Preview" ? 12 : 11, " ", ctx_r1.type == "Preview" ? "px-0" : "pl-0", "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("id", "section", i_r39, "");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.secHeadingArray[i_r39]);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c32, ctx_r1.type == "Preview"))("placeholder", ctx_r1.type != "Preview" ? "Enter section heading..." : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.type == "Preview");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("id", "subHeading", i_r39, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "headingNull", i_r39, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r53.section);
} }
function CreateAssessmentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "div", 20)(2, "div", 21);
    i0.ɵɵtemplate(3, CreateAssessmentComponent_div_0_h4_3_Template, 2, 0, "h4", 22)(4, CreateAssessmentComponent_div_0_h4_4_Template, 4, 1, "h4", 22)(5, CreateAssessmentComponent_div_0_h4_5_Template, 2, 0, "h4", 22)(6, CreateAssessmentComponent_div_0_h4_6_Template, 4, 1, "h4", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 20)(8, "div", 23)(9, "button", 24);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.classList(1)); });
    i0.ɵɵtext(10, "Description ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 25);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.checkField(2)); });
    i0.ɵɵtext(12, "Workspace ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 25);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_0_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.checkField(3)); });
    i0.ɵɵtext(14, "Preview ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(15, CreateAssessmentComponent_div_0_div_15_Template, 4, 3, "div", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 27)(17, "div", 28)(18, "div", 29);
    i0.ɵɵtemplate(19, CreateAssessmentComponent_div_0_div_19_Template, 61, 33, "div", 30);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 31)(21, "div", 32);
    i0.ɵɵtemplate(22, CreateAssessmentComponent_div_0_div_22_Template, 53, 17, "div", 33);
    i0.ɵɵelementStart(23, "div", 34);
    i0.ɵɵtemplate(24, CreateAssessmentComponent_div_0_div_24_Template, 4, 2, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(25, CreateAssessmentComponent_div_0_div_25_Template, 3, 0, "div", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 20);
    i0.ɵɵtemplate(27, CreateAssessmentComponent_div_0_div_27_Template, 4, 8, "div", 37)(28, CreateAssessmentComponent_div_0_div_28_Template, 2, 1, "div", 38);
    i0.ɵɵelementStart(29, "div", 39)(30, "div", 20)(31, "div", 40);
    i0.ɵɵtemplate(32, CreateAssessmentComponent_div_0_button_32_Template, 2, 0, "button", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(33, CreateAssessmentComponent_div_0_ng_container_33_Template, 2, 1, "ng-container", 22);
    i0.ɵɵelementContainerStart(34, 42);
    i0.ɵɵelementStart(35, "div", 43);
    i0.ɵɵtemplate(36, CreateAssessmentComponent_div_0_div_36_Template, 13, 17, "div", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "assessment" && ctx_r1.assessmentType == "add");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "assessment" && ctx_r1.assessmentType == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "assignment" && ctx_r1.assessmentType == "add");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.uploadType == "assignment" && ctx_r1.assessmentType == "edit");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(21, _c26, ctx_r1.type == "Description"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(23, _c27, ctx_r1.type == "Workspace", !ctx_r1.functionCalled && ctx_r1.assessmentType != "edit"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(26, _c27, ctx_r1.type == "Preview", !ctx_r1.functionCalled && ctx_r1.assessmentType != "edit"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "Workspace" || ctx_r1.type == "Preview");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "Description");
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.type == "Description");
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.type != "Workspace");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isPdfAvailable);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "Workspace");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "Workspace");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isPdfAvailable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isPdfAvailable);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.deleteAnnatation);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.deleteAnnatation);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.deleteAnnatation);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.deleteAnnatation);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.totalsub);
} }
function CreateAssessmentComponent_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 280);
    i0.ɵɵlistener("mouseover", function CreateAssessmentComponent_div_1_div_17_Template_div_mouseover_0_listener() { i0.ɵɵrestoreView(_r55); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSpanTo()); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.countList);
} }
function CreateAssessmentComponent_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 281);
    i0.ɵɵlistener("mouseout", function CreateAssessmentComponent_div_1_div_18_Template_div_mouseout_0_listener() { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeInputTo()); });
    i0.ɵɵelementStart(1, "input", 282);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_1_div_18_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CreateAssessmentComponent_div_1_div_18_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.countList, $event) || (ctx_r1.countList = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.countList);
    i0.ɵɵproperty("value", ctx_r1.countList);
} }
function CreateAssessmentComponent_div_1_select_20_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 285);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    const i_r59 = ctx.index;
    i0.ɵɵpropertyInterpolate("value", i_r59);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r58);
} }
function CreateAssessmentComponent_div_1_select_20_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 283);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_1_select_20_Template_select_change_0_listener() { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSection("multichoices", "1")); });
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_1_select_20_option_1_Template, 2, 2, "option", 284);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("selectedIndex", ctx_r1.sectionCount);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.secHeadingArray);
} }
function CreateAssessmentComponent_div_1_small_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 286);
    i0.ɵɵtext(1, "question no already exist");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_1_div_27_span_30_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 310);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_1_div_27_span_30_Template_span_click_0_listener($event) { const j_r63 = i0.ɵɵrestoreView(_r62).index; const i_r61 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.gettingChoiceList($event, i_r61, j_r63)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r64 = ctx.$implicit;
    const j_r63 = ctx.index;
    const i_r61 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c33, ctx_r1.multiform["controls"].repeatlink["controls"][i_r61]["controls"]["active"].value === j_r63));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r64);
} }
function CreateAssessmentComponent_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 287)(1, "div", 288)(2, "div", 20)(3, "div", 289)(4, "div", 290)(5, "span", 291);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 292)(8, "div", 293);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_1_div_27_Template_div_click_8_listener() { const i_r61 = i0.ɵɵrestoreView(_r60).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteSub(ctx_r1.multiform.get("repeatlink"), i_r61)); });
    i0.ɵɵelement(9, "img", 294);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 295)(11, "div", 205)(12, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_1_div_27_Template_app_tiny_mice_emitEditorValue_12_listener($event) { const i_r61 = i0.ɵɵrestoreView(_r60).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getQuestionValue($event, i_r61, ctx_r1.multiform.get("repeatlink")["controls"])); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 20)(14, "div", 297)(15, "label")(16, "b");
    i0.ɵɵtext(17, "Options");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "input", 298);
    i0.ɵɵlistener("input", function CreateAssessmentComponent_div_1_div_27_Template_input_input_18_listener($event) { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getOptionVal($event)); })("keyup", function CreateAssessmentComponent_div_1_div_27_Template_input_keyup_18_listener($event) { const i_r61 = i0.ɵɵrestoreView(_r60).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.createSpace(i_r61, $event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 299)(20, "label")(21, "b");
    i0.ɵɵtext(22, "Points");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "input", 300);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_1_div_27_Template_input_keypress_23_listener($event) { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 20)(25, "div", 40)(26, "label", 301)(27, "b");
    i0.ɵɵtext(28, "Correct answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 302);
    i0.ɵɵtemplate(30, CreateAssessmentComponent_div_1_div_27_span_30_Template, 2, 4, "span", 303);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "div", 295)(32, "div", 205)(33, "label")(34, "b");
    i0.ɵɵtext(35, "Explanation");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "div", 205)(37, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_1_div_27_Template_app_tiny_mice_emitEditorValue_37_listener($event) { const i_r61 = i0.ɵɵrestoreView(_r60).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getExplanationValue($event, i_r61, ctx_r1.multiform.get("repeatlink")["controls"])); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "div", 295)(39, "div", 304);
    i0.ɵɵelement(40, "input", 305);
    i0.ɵɵelementStart(41, "label", 306);
    i0.ɵɵtext(42, "Autograde");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "div", 307)(44, "label", 308);
    i0.ɵɵtext(45, "Page No");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(46, "input", 309);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const i_r61 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r61);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", ctx_r1.hide == true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((i_r61 + 1 + 9).toString(36).toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.hide == true);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", i_r61 + "multiQues" + ctx_r1.ransom)("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(18);
    i0.ɵɵproperty("ngForOf", ctx_r1.multiform["controls"].repeatlink["controls"][i_r61]["controls"]["array"].value);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", i_r61 + "explainMulti" + ctx_r1.ransom)("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("id", "multiChoice", i_r61, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("for", "multiChoice", i_r61, "");
} }
function CreateAssessmentComponent_div_1_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 311);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_1_button_29_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r65); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitMulti(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-dismiss", ctx_r1.multiform.get("repeatlink").valid == true && !ctx_r1.quesNoInvalid ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.submitType == "add" ? "Submit" : "Update");
} }
function CreateAssessmentComponent_div_1_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 312);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_1_button_30_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r66); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitMulti(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r1.multiform.get("repeatlink").valid || ctx_r1.quesNoInvalid);
    i0.ɵɵattribute("data-dismiss", ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "Finish" : "Next");
} }
function CreateAssessmentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 257)(1, "div", 258)(2, "div", 259)(3, "div", 260)(4, "div", 19)(5, "form", 51)(6, "div", 261)(7, "div", 262)(8, "h5", 263)(9, "b");
    i0.ɵɵtext(10, "Multiple Choice");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 264)(12, "i", 265);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_1_Template_i_click_12_listener() { i0.ɵɵrestoreView(_r54); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDialog()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(13, "hr");
    i0.ɵɵelementStart(14, "div", 266)(15, "div", 20)(16, "div", 267);
    i0.ɵɵtemplate(17, CreateAssessmentComponent_div_1_div_17_Template, 3, 1, "div", 268)(18, CreateAssessmentComponent_div_1_div_18_Template, 2, 2, "div", 269);
    i0.ɵɵelementStart(19, "div", 270);
    i0.ɵɵtemplate(20, CreateAssessmentComponent_div_1_select_20_Template, 2, 2, "select", 271);
    i0.ɵɵelementStart(21, "button", 272);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_1_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r54); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.add()); });
    i0.ɵɵelement(22, "i", 273);
    i0.ɵɵtext(23, " Sub Question ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 205);
    i0.ɵɵtemplate(25, CreateAssessmentComponent_div_1_small_25_Template, 2, 0, "small", 274);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 275);
    i0.ɵɵtemplate(27, CreateAssessmentComponent_div_1_div_27_Template, 47, 19, "div", 276);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 277);
    i0.ɵɵtemplate(29, CreateAssessmentComponent_div_1_button_29_Template, 2, 2, "button", 278)(30, CreateAssessmentComponent_div_1_button_30_Template, 2, 3, "button", 279);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("id", "log", 1, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.multiform);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.totalsub.length > 1 && ctx_r1.submitType != "edit");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.quesNoInvalid);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.multiform.get("repeatlink")["controls"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isBulkUpload);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isBulkUpload);
} }
function CreateAssessmentComponent_div_2_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 280);
    i0.ɵɵlistener("mouseover", function CreateAssessmentComponent_div_2_div_17_Template_div_mouseover_0_listener() { i0.ɵɵrestoreView(_r68); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSpanTo()); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.countList);
} }
function CreateAssessmentComponent_div_2_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 281);
    i0.ɵɵlistener("mouseout", function CreateAssessmentComponent_div_2_div_18_Template_div_mouseout_0_listener() { i0.ɵɵrestoreView(_r69); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeInputTo()); });
    i0.ɵɵelementStart(1, "input", 282);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_2_div_18_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CreateAssessmentComponent_div_2_div_18_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.countList, $event) || (ctx_r1.countList = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.countList);
    i0.ɵɵproperty("value", ctx_r1.countList);
} }
function CreateAssessmentComponent_div_2_select_20_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 285);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r71 = ctx.$implicit;
    const i_r72 = ctx.index;
    i0.ɵɵpropertyInterpolate("value", i_r72);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r71);
} }
function CreateAssessmentComponent_div_2_select_20_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 317);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_2_select_20_Template_select_change_0_listener() { i0.ɵɵrestoreView(_r70); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSection("truefalse", "3")); });
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_2_select_20_option_1_Template, 2, 2, "option", 284);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("selectedIndex", ctx_r1.sectionCount);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.secHeadingArray);
} }
function CreateAssessmentComponent_div_2_small_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 286);
    i0.ɵɵtext(1, "question no already exist");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_2_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 318)(1, "div", 288)(2, "div", 20)(3, "div", 289)(4, "div", 290)(5, "span", 319);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 292)(8, "div", 293);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_2_div_27_Template_div_click_8_listener() { const i_r74 = i0.ɵɵrestoreView(_r73).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteSub(ctx_r1.multiform.get("repeatchoose"), i_r74)); });
    i0.ɵɵelement(9, "img", 294);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 295)(11, "div", 205)(12, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_2_div_27_Template_app_tiny_mice_emitEditorValue_12_listener($event) { const i_r74 = i0.ɵɵrestoreView(_r73).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getQuestionValue($event, i_r74, ctx_r1.multiform.get("repeatchoose")["controls"])); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 20)(14, "div", 297)(15, "label")(16, "b");
    i0.ɵɵtext(17, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 320)(19, "div", 321)(20, "label", 322);
    i0.ɵɵelement(21, "input", 323);
    i0.ɵɵtext(22, "True");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 321)(24, "label", 324);
    i0.ɵɵelement(25, "input", 325);
    i0.ɵɵtext(26, "False");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(27, "div", 299)(28, "label")(29, "b");
    i0.ɵɵtext(30, "Points");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "input", 326);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_2_div_27_Template_input_keypress_31_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "div", 295)(33, "div", 205)(34, "label")(35, "b");
    i0.ɵɵtext(36, "Explanation");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "div", 205)(38, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_2_div_27_Template_app_tiny_mice_emitEditorValue_38_listener($event) { const i_r74 = i0.ɵɵrestoreView(_r73).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getExplanationValue($event, i_r74, ctx_r1.multiform.get("repeatchoose")["controls"])); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(39, "div", 295)(40, "div", 304);
    i0.ɵɵelement(41, "input", 305);
    i0.ɵɵelementStart(42, "label", 327);
    i0.ɵɵtext(43, "Autograde");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div", 307)(45, "label", 308);
    i0.ɵɵtext(46, "Page No");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(47, "input", 309);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const i_r74 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r74);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", ctx_r1.hide == true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((i_r74 + 1 + 9).toString(36).toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.hide == true);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", i_r74 + "chooseQues" + ctx_r1.ransom)("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(8);
    i0.ɵɵpropertyInterpolate1("for", "trueOption", i_r74, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("id", "trueOption", i_r74, "");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("for", "falseOption", i_r74, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("id", "falseOption", i_r74, "");
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", i_r74 + "explainTrue" + ctx_r1.ransom)("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("id", "textOrFalse", i_r74, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("for", "textOrFalse", i_r74, "");
} }
function CreateAssessmentComponent_div_2_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 311);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_2_button_29_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r75); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitchoose(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-dismiss", ctx_r1.multiform.get("repeatchoose").valid == true && !ctx_r1.quesNoInvalid ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.submitType == "add" ? "Submit" : "Update");
} }
function CreateAssessmentComponent_div_2_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r76 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 312);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_2_button_30_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r76); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitchoose(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r1.multiform.get("repeatchoose").valid || ctx_r1.quesNoInvalid);
    i0.ɵɵattribute("data-dismiss", ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "Finish" : "Next");
} }
function CreateAssessmentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 257)(1, "div", 258)(2, "div", 259)(3, "div", 260)(4, "div", 19)(5, "form", 51)(6, "div", 261)(7, "div", 262)(8, "h5", 263)(9, "b");
    i0.ɵɵtext(10, "True or False");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 264)(12, "i", 265);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_2_Template_i_click_12_listener() { i0.ɵɵrestoreView(_r67); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDialog()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(13, "hr");
    i0.ɵɵelementStart(14, "div", 28)(15, "div", 27)(16, "div", 267);
    i0.ɵɵtemplate(17, CreateAssessmentComponent_div_2_div_17_Template, 3, 1, "div", 268)(18, CreateAssessmentComponent_div_2_div_18_Template, 2, 2, "div", 269);
    i0.ɵɵelementStart(19, "div", 270);
    i0.ɵɵtemplate(20, CreateAssessmentComponent_div_2_select_20_Template, 2, 2, "select", 313);
    i0.ɵɵelementStart(21, "button", 314);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_2_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r67); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addTrue()); });
    i0.ɵɵelement(22, "i", 273);
    i0.ɵɵtext(23, " Sub Question ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 205);
    i0.ɵɵtemplate(25, CreateAssessmentComponent_div_2_small_25_Template, 2, 0, "small", 274);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 275);
    i0.ɵɵtemplate(27, CreateAssessmentComponent_div_2_div_27_Template, 48, 26, "div", 315);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(28, "div", 316);
    i0.ɵɵtemplate(29, CreateAssessmentComponent_div_2_button_29_Template, 2, 2, "button", 278)(30, CreateAssessmentComponent_div_2_button_30_Template, 2, 3, "button", 279);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("id", "log", 3, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.multiform);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.totalsub.length > 1 && ctx_r1.submitType != "edit");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.quesNoInvalid);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.multiform.get("repeatchoose")["controls"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isBulkUpload);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isBulkUpload);
} }
function CreateAssessmentComponent_div_3_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 280);
    i0.ɵɵlistener("mouseover", function CreateAssessmentComponent_div_3_div_17_Template_div_mouseover_0_listener() { i0.ɵɵrestoreView(_r78); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSpanTo()); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.countList);
} }
function CreateAssessmentComponent_div_3_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 281);
    i0.ɵɵlistener("mouseout", function CreateAssessmentComponent_div_3_div_18_Template_div_mouseout_0_listener() { i0.ɵɵrestoreView(_r79); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeInputTo()); });
    i0.ɵɵelementStart(1, "input", 282);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_3_div_18_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r79); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CreateAssessmentComponent_div_3_div_18_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r79); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.countList, $event) || (ctx_r1.countList = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.countList);
    i0.ɵɵproperty("value", ctx_r1.countList);
} }
function CreateAssessmentComponent_div_3_select_20_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 285);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r81 = ctx.$implicit;
    const i_r82 = ctx.index;
    i0.ɵɵpropertyInterpolate("value", i_r82);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r81);
} }
function CreateAssessmentComponent_div_3_select_20_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 331);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_3_select_20_Template_select_change_0_listener() { i0.ɵɵrestoreView(_r80); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSection("drop", "9")); });
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_3_select_20_option_1_Template, 2, 2, "option", 284);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("selectedIndex", ctx_r1.sectionCount);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.secHeadingArray);
} }
function CreateAssessmentComponent_div_3_small_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 286);
    i0.ɵɵtext(1, "question no already exist");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_3_div_27_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 345)(1, "div", 346)(2, "div", 347)(3, "input", 348);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_3_div_27_div_19_Template_input_change_3_listener() { i0.ɵɵrestoreView(_r85); const i_r84 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.gettingQuestionChoiceList(i_r84)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 349)(5, "span", 350)(6, "i", 351);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_3_div_27_div_19_Template_i_click_6_listener() { const j_r86 = i0.ɵɵrestoreView(_r85).index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.removechoiceList(j_r86)); });
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const j_r86 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", j_r86);
} }
function CreateAssessmentComponent_div_3_div_27_option_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 285);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r88 = ctx.$implicit;
    i0.ɵɵproperty("value", list_r88.choice);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r88.choice);
} }
function CreateAssessmentComponent_div_3_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 332)(1, "div", 288)(2, "div", 20)(3, "div", 289)(4, "div", 290)(5, "span", 333);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 292)(8, "div", 293);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_3_div_27_Template_div_click_8_listener() { const i_r84 = i0.ɵɵrestoreView(_r83).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteSub(ctx_r1.multiform.get("repeatplus"), i_r84)); });
    i0.ɵɵelement(9, "img", 294);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 295)(11, "div", 205)(12, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_3_div_27_Template_app_tiny_mice_emitEditorValue_12_listener($event) { const i_r84 = i0.ɵɵrestoreView(_r83).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getQuestionValue($event, i_r84, ctx_r1.multiform.get("repeatplus")["controls"])); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 20)(14, "div", 40)(15, "label", 334)(16, "b");
    i0.ɵɵtext(17, "Choices");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 335);
    i0.ɵɵtemplate(19, CreateAssessmentComponent_div_3_div_27_div_19_Template, 7, 1, "div", 336);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 337)(21, "button", 338);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_3_div_27_Template_button_click_21_listener() { const list_r87 = i0.ɵɵrestoreView(_r83).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addPlus(list_r87.controls.choiceList)); });
    i0.ɵɵtext(22, "Add Choice ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 27)(24, "div", 339)(25, "label")(26, "b");
    i0.ɵɵtext(27, " Correct Answer ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "select", 340);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_3_div_27_Template_select_change_28_listener($event) { const i_r84 = i0.ɵɵrestoreView(_r83).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.gettingChoiceAnswer($event, i_r84)); })("mouseenter", function CreateAssessmentComponent_div_3_div_27_Template_select_mouseenter_28_listener($event) { const i_r84 = i0.ɵɵrestoreView(_r83).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.disableSelect(i_r84, $event)); });
    i0.ɵɵelementStart(29, "option", 341);
    i0.ɵɵtext(30, "Select Answer ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(31, CreateAssessmentComponent_div_3_div_27_option_31_Template, 2, 2, "option", 284);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 342)(33, "label")(34, "b");
    i0.ɵɵtext(35, " Points ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "input", 343);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_3_div_27_Template_input_keypress_36_listener($event) { i0.ɵɵrestoreView(_r83); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "div", 295)(38, "div", 205)(39, "label")(40, "b");
    i0.ɵɵtext(41, "Explanation");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "div", 205)(43, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_3_div_27_Template_app_tiny_mice_emitEditorValue_43_listener($event) { const i_r84 = i0.ɵɵrestoreView(_r83).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getExplanationValue($event, i_r84, ctx_r1.multiform.get("repeatplus")["controls"])); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "div", 295)(45, "div", 304);
    i0.ɵɵelement(46, "input", 344);
    i0.ɵɵelementStart(47, "label", 240);
    i0.ɵɵtext(48, "Autograde");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "div", 307)(50, "label", 308);
    i0.ɵɵtext(51, "Page No");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(52, "input", 309);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const list_r87 = ctx.$implicit;
    const i_r84 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r84);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", ctx_r1.hide == true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((i_r84 + 1 + 9).toString(36).toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.hide == true);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", i_r84 + "dropDownQues" + ctx_r1.ransom)("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", list_r87.get("choiceList")["controls"]);
    i0.ɵɵadvance(9);
    i0.ɵɵpropertyInterpolate1("id", "dropdown", i_r84, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("selected", ctx_r1.submitType != "edit")("value", "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.multiform["controls"].repeatplus["controls"][i_r84]["controls"]["optionList"].value);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", i_r84 + "explainDrop" + ctx_r1.ransom)("showDropBtn", false)("showInputBtn", false);
} }
function CreateAssessmentComponent_div_3_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 311);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_3_button_29_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r89); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitChoice(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-dismiss", ctx_r1.multiform.get("repeatplus").valid == true && !ctx_r1.quesNoInvalid ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.submitType == "add" ? "Submit" : "Update");
} }
function CreateAssessmentComponent_div_3_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 312);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_3_button_30_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r90); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitChoice(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r1.multiform.get("repeatplus").valid || ctx_r1.quesNoInvalid);
    i0.ɵɵattribute("data-dismiss", ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "Finish" : "Next");
} }
function CreateAssessmentComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 257)(1, "div", 258)(2, "div", 259)(3, "div", 260)(4, "div", 19)(5, "form", 51)(6, "div", 261)(7, "div", 262)(8, "h5", 263)(9, "b");
    i0.ɵɵtext(10, "Question Dropdown");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 264)(12, "i", 265);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_3_Template_i_click_12_listener() { i0.ɵɵrestoreView(_r77); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDialog()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(13, "hr");
    i0.ɵɵelementStart(14, "div", 28)(15, "div", 295)(16, "div", 267);
    i0.ɵɵtemplate(17, CreateAssessmentComponent_div_3_div_17_Template, 3, 1, "div", 268)(18, CreateAssessmentComponent_div_3_div_18_Template, 2, 2, "div", 269);
    i0.ɵɵelementStart(19, "div", 270);
    i0.ɵɵtemplate(20, CreateAssessmentComponent_div_3_select_20_Template, 2, 2, "select", 328);
    i0.ɵɵelementStart(21, "button", 314);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_3_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r77); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.plus()); });
    i0.ɵɵelement(22, "i", 273);
    i0.ɵɵtext(23, " Sub Question ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 205);
    i0.ɵɵtemplate(25, CreateAssessmentComponent_div_3_small_25_Template, 2, 0, "small", 274);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 275);
    i0.ɵɵtemplate(27, CreateAssessmentComponent_div_3_div_27_Template, 53, 20, "div", 329);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(28, "div", 330);
    i0.ɵɵtemplate(29, CreateAssessmentComponent_div_3_button_29_Template, 2, 2, "button", 278)(30, CreateAssessmentComponent_div_3_button_30_Template, 2, 3, "button", 279);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("id", "log", 9, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.multiform);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.totalsub.length > 1 && ctx_r1.submitType != "edit");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.quesNoInvalid);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.multiform.get("repeatplus")["controls"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isBulkUpload);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isBulkUpload);
} }
function CreateAssessmentComponent_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r92 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 280);
    i0.ɵɵlistener("mouseover", function CreateAssessmentComponent_div_4_div_17_Template_div_mouseover_0_listener() { i0.ɵɵrestoreView(_r92); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSpanTo()); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.countList);
} }
function CreateAssessmentComponent_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 281);
    i0.ɵɵlistener("mouseout", function CreateAssessmentComponent_div_4_div_18_Template_div_mouseout_0_listener() { i0.ɵɵrestoreView(_r93); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeInputTo()); });
    i0.ɵɵelementStart(1, "input", 282);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_4_div_18_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r93); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CreateAssessmentComponent_div_4_div_18_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r93); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.countList, $event) || (ctx_r1.countList = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.countList);
    i0.ɵɵproperty("value", ctx_r1.countList);
} }
function CreateAssessmentComponent_div_4_select_20_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 285);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r95 = ctx.$implicit;
    const i_r96 = ctx.index;
    i0.ɵɵpropertyInterpolate("value", i_r96);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r95);
} }
function CreateAssessmentComponent_div_4_select_20_Template(rf, ctx) { if (rf & 1) {
    const _r94 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 354);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_4_select_20_Template_select_change_0_listener() { i0.ɵɵrestoreView(_r94); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSection("fillin", "10")); });
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_4_select_20_option_1_Template, 2, 2, "option", 284);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("selectedIndex", ctx_r1.sectionCount);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.secHeadingArray);
} }
function CreateAssessmentComponent_div_4_small_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 286);
    i0.ɵɵtext(1, "question no already exist");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_4_div_27_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r99 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 369);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_4_div_27_button_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r99); const list_r100 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addNewCorrectAnswerForTextEntry(list_r100)); });
    i0.ɵɵelement(1, "i", 370);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r100 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Add (", list_r100.get("repeatEntryCorrect")["controls"].length, " / ", ctx_r1.maximumAllowedCount, ") ");
} }
function CreateAssessmentComponent_div_4_div_27_div_20_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r101 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 378)(1, "div", 293);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_4_div_27_div_20_div_7_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r101); const j_r102 = i0.ɵɵnextContext().index; const list_r100 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteCorrectAnswerTextEntry(list_r100.get("repeatEntryCorrect"), j_r102)); });
    i0.ɵɵelement(2, "img", 294);
    i0.ɵɵelementEnd()();
} }
function CreateAssessmentComponent_div_4_div_27_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 371)(1, "div", 372)(2, "div", 373)(3, "span", 374);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 375);
    i0.ɵɵelement(6, "textarea", 376);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CreateAssessmentComponent_div_4_div_27_div_20_div_7_Template, 3, 0, "div", 377);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const first_r103 = ctx.first;
    const j_r102 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", j_r102);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(j_r102 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", first_r103 ? "w-96" : "w-93");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !first_r103);
} }
function CreateAssessmentComponent_div_4_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r97 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 355)(1, "div", 288)(2, "div", 20)(3, "div", 289)(4, "div", 290)(5, "span", 356);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 292)(8, "div", 293);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_4_div_27_Template_div_click_8_listener() { const i_r98 = i0.ɵɵrestoreView(_r97).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteSub(ctx_r1.multiform.get("repeatentry"), i_r98)); });
    i0.ɵɵelement(9, "img", 294);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 20)(11, "div", 205)(12, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_4_div_27_Template_app_tiny_mice_emitEditorValue_12_listener($event) { const i_r98 = i0.ɵɵrestoreView(_r97).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getQuestionValue($event, i_r98, ctx_r1.multiform.get("repeatentry")["controls"])); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 20)(14, "div", 357)(15, "label", 334)(16, "b");
    i0.ɵɵtext(17, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(18, CreateAssessmentComponent_div_4_div_27_button_18_Template, 3, 2, "button", 358);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 40);
    i0.ɵɵtemplate(20, CreateAssessmentComponent_div_4_div_27_div_20_Template, 8, 4, "div", 359);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 295)(22, "div", 205)(23, "label")(24, "b");
    i0.ɵɵtext(25, "Explanation");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 205)(27, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_4_div_27_Template_app_tiny_mice_emitEditorValue_27_listener($event) { const i_r98 = i0.ɵɵrestoreView(_r97).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getExplanationValue($event, i_r98, ctx_r1.multiform.get("repeatentry")["controls"])); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 360)(29, "div", 361)(30, "div", 205);
    i0.ɵɵelement(31, "input", 362);
    i0.ɵɵelementStart(32, "label", 363);
    i0.ɵɵtext(33, "Match Case");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 364);
    i0.ɵɵelement(35, "input", 365);
    i0.ɵɵelementStart(36, "label", 366);
    i0.ɵɵtext(37, "Autograde");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "div", 361)(39, "label")(40, "b");
    i0.ɵɵtext(41, "Page No");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(42, "input", 367);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "div", 361)(44, "label")(45, "b");
    i0.ɵɵtext(46, "Points");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "input", 368);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_4_div_27_Template_input_keypress_47_listener($event) { i0.ɵɵrestoreView(_r97); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const list_r100 = ctx.$implicit;
    const i_r98 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r98);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", ctx_r1.hide == true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((i_r98 + 1 + 9).toString(36).toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.hide == true);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", i_r98 + "entryQues" + ctx_r1.ransom)("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", list_r100.get("repeatEntryCorrect")["controls"].length < ctx_r1.maximumAllowedCount);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r100.get("repeatEntryCorrect")["controls"]);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", i_r98 + "explainEntry" + ctx_r1.ransom)("showDropBtn", false)("showInputBtn", false);
} }
function CreateAssessmentComponent_div_4_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r104 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 311);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_4_button_29_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r104); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitEntry(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-dismiss", ctx_r1.multiform.get("repeatentry").valid == true && !ctx_r1.quesNoInvalid ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.submitType == "add" ? "Submit" : "Update");
} }
function CreateAssessmentComponent_div_4_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r105 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 312);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_4_button_30_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r105); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitEntry(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r1.multiform.get("repeatentry").valid || ctx_r1.quesNoInvalid);
    i0.ɵɵattribute("data-dismiss", ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "Finish" : "Next");
} }
function CreateAssessmentComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r91 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 257)(1, "div", 258)(2, "div", 259)(3, "div", 260)(4, "div", 19)(5, "form", 51)(6, "div", 261)(7, "div", 262)(8, "h5", 263)(9, "b");
    i0.ɵɵtext(10, "Text Entry");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 264)(12, "i", 265);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_4_Template_i_click_12_listener() { i0.ɵɵrestoreView(_r91); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDialog()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(13, "hr");
    i0.ɵɵelementStart(14, "div", 28)(15, "div", 295)(16, "div", 267);
    i0.ɵɵtemplate(17, CreateAssessmentComponent_div_4_div_17_Template, 3, 1, "div", 268)(18, CreateAssessmentComponent_div_4_div_18_Template, 2, 2, "div", 269);
    i0.ɵɵelementStart(19, "div", 270);
    i0.ɵɵtemplate(20, CreateAssessmentComponent_div_4_select_20_Template, 2, 2, "select", 352);
    i0.ɵɵelementStart(21, "button", 314);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_4_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r91); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addEntry()); });
    i0.ɵɵelement(22, "i", 273);
    i0.ɵɵtext(23, " Sub Question ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 205);
    i0.ɵɵtemplate(25, CreateAssessmentComponent_div_4_small_25_Template, 2, 0, "small", 274);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 275);
    i0.ɵɵtemplate(27, CreateAssessmentComponent_div_4_div_27_Template, 48, 16, "div", 353);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(28, "div", 316);
    i0.ɵɵtemplate(29, CreateAssessmentComponent_div_4_button_29_Template, 2, 2, "button", 278)(30, CreateAssessmentComponent_div_4_button_30_Template, 2, 3, "button", 279);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("id", "log", 10, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.multiform);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.totalsub.length > 1 && ctx_r1.submitType != "edit");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.quesNoInvalid);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.multiform.get("repeatentry")["controls"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isBulkUpload);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isBulkUpload);
} }
function CreateAssessmentComponent_div_5_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r107 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 280);
    i0.ɵɵlistener("mouseover", function CreateAssessmentComponent_div_5_div_17_Template_div_mouseover_0_listener() { i0.ɵɵrestoreView(_r107); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSpanTo()); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.countList);
} }
function CreateAssessmentComponent_div_5_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r108 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 281);
    i0.ɵɵlistener("mouseout", function CreateAssessmentComponent_div_5_div_18_Template_div_mouseout_0_listener() { i0.ɵɵrestoreView(_r108); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeInputTo()); });
    i0.ɵɵelementStart(1, "input", 282);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_5_div_18_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r108); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CreateAssessmentComponent_div_5_div_18_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r108); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.countList, $event) || (ctx_r1.countList = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.countList);
    i0.ɵɵproperty("value", ctx_r1.countList);
} }
function CreateAssessmentComponent_div_5_select_20_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 285);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r110 = ctx.$implicit;
    const i_r111 = ctx.index;
    i0.ɵɵpropertyInterpolate("value", i_r111);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r110);
} }
function CreateAssessmentComponent_div_5_select_20_Template(rf, ctx) { if (rf & 1) {
    const _r109 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 382);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_5_select_20_Template_select_change_0_listener() { i0.ɵɵrestoreView(_r109); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSection("essays", "20")); });
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_5_select_20_option_1_Template, 2, 2, "option", 284);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("selectedIndex", ctx_r1.sectionCount);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.secHeadingArray);
} }
function CreateAssessmentComponent_div_5_small_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 286);
    i0.ɵɵtext(1, "question no already exist");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_5_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r112 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 383)(1, "div", 288)(2, "div", 20)(3, "div", 289)(4, "div", 290)(5, "span", 384);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 292)(8, "div", 293);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_5_div_27_Template_div_click_8_listener() { const i_r113 = i0.ɵɵrestoreView(_r112).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteSub(ctx_r1.multiform.get("repeatessay"), i_r113)); });
    i0.ɵɵelement(9, "img", 294);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 295)(11, "div", 205)(12, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_5_div_27_Template_app_tiny_mice_emitEditorValue_12_listener($event) { const i_r113 = i0.ɵɵrestoreView(_r112).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getQuestionValue($event, i_r113, ctx_r1.multiform.get("repeatessay")["controls"])); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 27)(14, "div", 339)(15, "label")(16, "b");
    i0.ɵɵtext(17, "Minimum Line Height");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "input", 385);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_5_div_27_Template_input_keypress_18_listener($event) { i0.ɵɵrestoreView(_r112); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 342)(20, "label")(21, "b");
    i0.ɵɵtext(22, "Points");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "input", 343);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_5_div_27_Template_input_keypress_23_listener($event) { i0.ɵɵrestoreView(_r112); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 295)(25, "div", 205)(26, "label")(27, "b");
    i0.ɵɵtext(28, "Explanation");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "div", 205)(30, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_5_div_27_Template_app_tiny_mice_emitEditorValue_30_listener($event) { const i_r113 = i0.ɵɵrestoreView(_r112).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getExplanationValue($event, i_r113, ctx_r1.multiform.get("repeatessay")["controls"])); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "div", 386)(32, "div", 307)(33, "label", 308);
    i0.ɵɵtext(34, "Page No");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(35, "input", 309);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const i_r113 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r113);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", ctx_r1.hide == true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((i_r113 + 1 + 9).toString(36).toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.hide == true);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", i_r113 + "essayQues" + ctx_r1.ransom)("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(18);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", i_r113 + "explainEssay" + ctx_r1.ransom)("showDropBtn", false)("showInputBtn", false);
} }
function CreateAssessmentComponent_div_5_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r114 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 311);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_5_button_29_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r114); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitEssay(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-dismiss", ctx_r1.multiform.get("repeatessay").valid == true && !ctx_r1.quesNoInvalid ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.submitType == "add" ? "Submit" : "Update");
} }
function CreateAssessmentComponent_div_5_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r115 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 312);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_5_button_30_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r115); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitEssay(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r1.multiform.get("repeatessay").valid || ctx_r1.quesNoInvalid);
    i0.ɵɵattribute("data-dismiss", ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "Finish" : "Next");
} }
function CreateAssessmentComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r106 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 257)(1, "div", 258)(2, "div", 259)(3, "div", 260)(4, "div", 19)(5, "form", 51)(6, "div", 261)(7, "div", 262)(8, "h5", 263)(9, "b");
    i0.ɵɵtext(10, "Free Text");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 264)(12, "i", 265);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_5_Template_i_click_12_listener() { i0.ɵɵrestoreView(_r106); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDialog()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(13, "hr");
    i0.ɵɵelementStart(14, "div", 28)(15, "div", 295)(16, "div", 267);
    i0.ɵɵtemplate(17, CreateAssessmentComponent_div_5_div_17_Template, 3, 1, "div", 268)(18, CreateAssessmentComponent_div_5_div_18_Template, 2, 2, "div", 269);
    i0.ɵɵelementStart(19, "div", 270);
    i0.ɵɵtemplate(20, CreateAssessmentComponent_div_5_select_20_Template, 2, 2, "select", 379);
    i0.ɵɵelementStart(21, "button", 314);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_5_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r106); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addEssay()); });
    i0.ɵɵelement(22, "i", 273);
    i0.ɵɵtext(23, " Sub Question ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 205);
    i0.ɵɵtemplate(25, CreateAssessmentComponent_div_5_small_25_Template, 2, 0, "small", 274);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 380);
    i0.ɵɵtemplate(27, CreateAssessmentComponent_div_5_div_27_Template, 36, 14, "div", 381);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(28, "div", 316);
    i0.ɵɵtemplate(29, CreateAssessmentComponent_div_5_button_29_Template, 2, 2, "button", 278)(30, CreateAssessmentComponent_div_5_button_30_Template, 2, 3, "button", 279);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("id", "log", 20, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.multiform);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.totalsub.length > 1 && ctx_r1.submitType != "edit");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.quesNoInvalid);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.multiform.get("repeatessay")["controls"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isBulkUpload);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isBulkUpload);
} }
function CreateAssessmentComponent_div_6_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r117 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 280);
    i0.ɵɵlistener("mouseover", function CreateAssessmentComponent_div_6_div_16_Template_div_mouseover_0_listener() { i0.ɵɵrestoreView(_r117); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSpanTo()); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.countList);
} }
function CreateAssessmentComponent_div_6_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r118 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 281);
    i0.ɵɵlistener("mouseout", function CreateAssessmentComponent_div_6_div_17_Template_div_mouseout_0_listener() { i0.ɵɵrestoreView(_r118); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeInputTo()); });
    i0.ɵɵelementStart(1, "input", 282);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_6_div_17_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r118); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CreateAssessmentComponent_div_6_div_17_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r118); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.countList, $event) || (ctx_r1.countList = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.countList);
    i0.ɵɵproperty("value", ctx_r1.countList);
} }
function CreateAssessmentComponent_div_6_select_19_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 285);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r120 = ctx.$implicit;
    const i_r121 = ctx.index;
    i0.ɵɵpropertyInterpolate("value", i_r121);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r120);
} }
function CreateAssessmentComponent_div_6_select_19_Template(rf, ctx) { if (rf & 1) {
    const _r119 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 389);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_6_select_19_Template_select_change_0_listener() { i0.ɵɵrestoreView(_r119); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSection("math", "30")); });
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_6_select_19_option_1_Template, 2, 2, "option", 284);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("selectedIndex", ctx_r1.sectionCount);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.secHeadingArray);
} }
function CreateAssessmentComponent_div_6_small_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 286);
    i0.ɵɵtext(1, "question no already exist");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_6_div_26_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r124 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 369);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_6_div_26_button_21_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r124); const list_r125 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addNewCorrectAnswerForNumericEntry(list_r125)); });
    i0.ɵɵelement(1, "i", 370);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r125 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Add (", list_r125.get("repeatNumericCorrect")["controls"].length, " / ", ctx_r1.maximumAllowedCount, ") ");
} }
function CreateAssessmentComponent_div_6_div_26_div_23_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r128 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 378)(1, "div", 293);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_6_div_26_div_23_div_7_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r128); const j_r127 = i0.ɵɵnextContext().index; const list_r125 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteCorrectAnswerNumericEntry(list_r125.get("repeatNumericCorrect"), j_r127)); });
    i0.ɵɵelement(2, "img", 294);
    i0.ɵɵelementEnd()();
} }
function CreateAssessmentComponent_div_6_div_26_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r126 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 394)(1, "div", 372)(2, "div", 373)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 375)(6, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_6_div_26_div_23_Template_app_tiny_mice_emitEditorValue_6_listener($event) { const j_r127 = i0.ɵɵrestoreView(_r126).index; const i_r123 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getNumericAnswerValue($event, i_r123, j_r127)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, CreateAssessmentComponent_div_6_div_26_div_23_div_7_Template, 3, 0, "div", 377);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const first_r129 = ctx.first;
    const j_r127 = ctx.index;
    const i_r123 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", j_r127);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(j_r127 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", first_r129 ? "w-96" : "w-93");
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", j_r127 + "numericAns" + ctx_r1.ransom + "multi" + i_r123)("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !first_r129);
} }
function CreateAssessmentComponent_div_6_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r122 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 390)(1, "div", 288)(2, "div", 20)(3, "div", 289)(4, "div", 290)(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 292)(8, "div", 293);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_6_div_26_Template_div_click_8_listener() { const i_r123 = i0.ɵɵrestoreView(_r122).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteSub(ctx_r1.multiform.get("repeatnumeric"), i_r123)); });
    i0.ɵɵelement(9, "img", 294);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 295)(11, "div", 391)(12, "label")(13, "b");
    i0.ɵɵtext(14, "Question");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_6_div_26_Template_app_tiny_mice_emitEditorValue_15_listener($event) { const i_r123 = i0.ɵɵrestoreView(_r122).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getQuestionValue($event, i_r123, ctx_r1.multiform.get("repeatnumeric")["controls"])); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 20)(17, "div", 357)(18, "label", 334)(19, "b");
    i0.ɵɵtext(20, "Correct Answer");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(21, CreateAssessmentComponent_div_6_div_26_button_21_Template, 3, 2, "button", 358);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 40);
    i0.ɵɵtemplate(23, CreateAssessmentComponent_div_6_div_26_div_23_Template, 8, 9, "div", 392);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 295)(25, "div", 205)(26, "label")(27, "b");
    i0.ɵɵtext(28, "Explanation");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "div", 205)(30, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_6_div_26_Template_app_tiny_mice_emitEditorValue_30_listener($event) { const i_r123 = i0.ɵɵrestoreView(_r122).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getExplanationValue($event, i_r123, ctx_r1.multiform.get("repeatnumeric")["controls"])); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "div", 393)(32, "div", 304);
    i0.ɵɵelement(33, "input", 305);
    i0.ɵɵelementStart(34, "label", 327);
    i0.ɵɵtext(35, "Autograde");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div", 361)(37, "label")(38, "b");
    i0.ɵɵtext(39, "Page no");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(40, "input", 309);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "div", 342)(42, "label")(43, "b");
    i0.ɵɵtext(44, "Points");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "input", 343);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_6_div_26_Template_input_keypress_45_listener($event) { i0.ɵɵrestoreView(_r122); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const list_r125 = ctx.$implicit;
    const i_r123 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r123);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", ctx_r1.hide == true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((i_r123 + 1 + 9).toString(36).toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.hide == true);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", i_r123 + "numericQues" + ctx_r1.ransom)("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", list_r125.get("repeatNumericCorrect")["controls"].length < ctx_r1.maximumAllowedCount);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r125.get("repeatNumericCorrect")["controls"]);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", i_r123 + "explainNumeric" + ctx_r1.ransom)("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("id", "numericAutoGrade", i_r123, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("for", "numericAutoGrade", i_r123, "");
} }
function CreateAssessmentComponent_div_6_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r130 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 311);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_6_button_28_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r130); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitNumeric(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-dismiss", ctx_r1.multiform.get("repeatnumeric").valid == true && !ctx_r1.quesNoInvalid ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.submitType == "add" ? "Submit" : "Update");
} }
function CreateAssessmentComponent_div_6_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r131 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 312);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_6_button_29_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r131); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitNumeric(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r1.multiform.get("repeatnumeric").valid || ctx_r1.quesNoInvalid);
    i0.ɵɵattribute("data-dismiss", ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "Finish" : "Next");
} }
function CreateAssessmentComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r116 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 257)(1, "div", 258)(2, "div", 259)(3, "div", 260)(4, "form", 51)(5, "div", 261)(6, "div", 262)(7, "h5", 263)(8, "b");
    i0.ɵɵtext(9, "Numeric Entry");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 264)(11, "i", 265);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_6_Template_i_click_11_listener() { i0.ɵɵrestoreView(_r116); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDialog()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(12, "hr");
    i0.ɵɵelementStart(13, "div", 28)(14, "div", 295)(15, "div", 267);
    i0.ɵɵtemplate(16, CreateAssessmentComponent_div_6_div_16_Template, 3, 1, "div", 268)(17, CreateAssessmentComponent_div_6_div_17_Template, 2, 2, "div", 269);
    i0.ɵɵelementStart(18, "div", 270);
    i0.ɵɵtemplate(19, CreateAssessmentComponent_div_6_select_19_Template, 2, 2, "select", 387);
    i0.ɵɵelementStart(20, "button", 314);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_6_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r116); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addNumeric()); });
    i0.ɵɵelement(21, "i", 273);
    i0.ɵɵtext(22, " Sub Question ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 205);
    i0.ɵɵtemplate(24, CreateAssessmentComponent_div_6_small_24_Template, 2, 0, "small", 274);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 380);
    i0.ɵɵtemplate(26, CreateAssessmentComponent_div_6_div_26_Template, 46, 20, "div", 388);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 277);
    i0.ɵɵtemplate(28, CreateAssessmentComponent_div_6_button_28_Template, 2, 2, "button", 278)(29, CreateAssessmentComponent_div_6_button_29_Template, 2, 3, "button", 279);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("id", "log", 30, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r1.multiform);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.totalsub.length > 1 && ctx_r1.submitType != "edit");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.quesNoInvalid);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.multiform.get("repeatnumeric")["controls"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isBulkUpload);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isBulkUpload);
} }
function CreateAssessmentComponent_div_7_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r133 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 280);
    i0.ɵɵlistener("mouseover", function CreateAssessmentComponent_div_7_div_16_Template_div_mouseover_0_listener() { i0.ɵɵrestoreView(_r133); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSpanTo()); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.countList);
} }
function CreateAssessmentComponent_div_7_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r134 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 281);
    i0.ɵɵlistener("mouseout", function CreateAssessmentComponent_div_7_div_17_Template_div_mouseout_0_listener() { i0.ɵɵrestoreView(_r134); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeInputTo()); });
    i0.ɵɵelementStart(1, "input", 282);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_7_div_17_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r134); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CreateAssessmentComponent_div_7_div_17_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r134); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.countList, $event) || (ctx_r1.countList = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.countList);
    i0.ɵɵproperty("value", ctx_r1.countList);
} }
function CreateAssessmentComponent_div_7_select_19_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 285);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = ctx.$implicit;
    const i_r137 = ctx.index;
    i0.ɵɵpropertyInterpolate("value", i_r137);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r136);
} }
function CreateAssessmentComponent_div_7_select_19_Template(rf, ctx) { if (rf & 1) {
    const _r135 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 400);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_7_select_19_Template_select_change_0_listener() { i0.ɵɵrestoreView(_r135); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSection("graph", "40")); });
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_7_select_19_option_1_Template, 2, 2, "option", 284);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("selectedIndex", ctx_r1.sectionCount);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.secHeadingArray);
} }
function CreateAssessmentComponent_div_7_small_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 286);
    i0.ɵɵtext(1, "question no already exist");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_7_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 401);
    i0.ɵɵelement(1, "img", 402);
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_7_div_23_app_graph_component_12_Template(rf, ctx) { if (rf & 1) {
    const _r139 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-graph-component", 408);
    i0.ɵɵlistener("emitItem", function CreateAssessmentComponent_div_7_div_23_app_graph_component_12_Template_app_graph_component_emitItem_0_listener($event) { i0.ɵɵrestoreView(_r139); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.getEmitedValue($event)); })("valueChange", function CreateAssessmentComponent_div_7_div_23_app_graph_component_12_Template_app_graph_component_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r139); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.getGraphAnswerValue($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("editMode", true)("editPatchValue", false)("graphId", ctx_r1.sectionCount + "graph" + "id" + ctx_r1.countList + ctx_r1.random)("questionType", "40");
} }
function CreateAssessmentComponent_div_7_div_23_app_graph_component_13_Template(rf, ctx) { if (rf & 1) {
    const _r140 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-graph-component", 408);
    i0.ɵɵlistener("emitItem", function CreateAssessmentComponent_div_7_div_23_app_graph_component_13_Template_app_graph_component_emitItem_0_listener($event) { i0.ɵɵrestoreView(_r140); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.getEmitedValue($event)); })("valueChange", function CreateAssessmentComponent_div_7_div_23_app_graph_component_13_Template_app_graph_component_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r140); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.getGraphAnswerValue($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("editMode", true)("editPatchValue", ctx_r1.graphBoardValue)("graphId", ctx_r1.sectionCount + "Editgraph" + "id" + ctx_r1.countList)("questionType", "40");
} }
function CreateAssessmentComponent_div_7_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r138 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 380)(1, "div", 295)(2, "div", 391)(3, "div")(4, "b");
    i0.ɵɵtext(5, "Question");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_7_div_23_Template_app_tiny_mice_emitEditorValue_6_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getGraphQuestionValue($event, 0)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 295)(8, "div", 403)(9, "div")(10, "b");
    i0.ɵɵtext(11, "Correct Answers");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, CreateAssessmentComponent_div_7_div_23_app_graph_component_12_Template, 1, 4, "app-graph-component", 404)(13, CreateAssessmentComponent_div_7_div_23_app_graph_component_13_Template, 1, 4, "app-graph-component", 404);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 295)(15, "div", 205)(16, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_7_div_23_Template_app_tiny_mice_emitEditorValue_16_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getEditorAnswerValue($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 295)(18, "div", 205)(19, "label")(20, "b");
    i0.ɵɵtext(21, "Explanation");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "div", 205)(23, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_7_div_23_Template_app_tiny_mice_emitEditorValue_23_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getGraphExplain($event, 0)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 405)(25, "div", 361)(26, "label")(27, "b");
    i0.ɵɵtext(28, "Page No");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(29, "input", 309);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 406);
    i0.ɵɵelement(31, "input", 344);
    i0.ɵɵelementStart(32, "label", 407);
    i0.ɵɵtext(33, "Autograde");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 361)(35, "label")(36, "b");
    i0.ɵɵtext(37, "Points");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "input", 343);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_7_div_23_Template_input_keypress_38_listener($event) { i0.ɵɵrestoreView(_r138); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", "numericQues")("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.submitType != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.submitType == "edit");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", "editorGragh")("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", "explain")("showDropBtn", false)("showInputBtn", false);
} }
function CreateAssessmentComponent_div_7_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r141 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 311);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_7_button_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r141); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateGraphValue(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-dismiss", ctx_r1.graphBoardValue && !ctx_r1.quesNoInvalid ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.submitType == "add" ? "Submit" : "Update");
} }
function CreateAssessmentComponent_div_7_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r142 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 312);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_7_button_26_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r142); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateGraphValue(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r1.graphBoardValue == undefined || ctx_r1.graphBoardValue == "" || ctx_r1.quesNoInvalid);
    i0.ɵɵattribute("data-dismiss", ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "Finish" : "Next");
} }
function CreateAssessmentComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r132 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 257)(1, "div", 395)(2, "div", 259)(3, "div", 260)(4, "form", 51)(5, "div", 261)(6, "div", 262)(7, "h5", 263)(8, "b");
    i0.ɵɵtext(9, "Graph");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 264)(11, "i", 265);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_7_Template_i_click_11_listener() { i0.ɵɵrestoreView(_r132); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDialog()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(12, "hr", 396);
    i0.ɵɵelementStart(13, "div", 28)(14, "div", 295)(15, "div", 267);
    i0.ɵɵtemplate(16, CreateAssessmentComponent_div_7_div_16_Template, 3, 1, "div", 268)(17, CreateAssessmentComponent_div_7_div_17_Template, 2, 2, "div", 269);
    i0.ɵɵelementStart(18, "div", 270);
    i0.ɵɵtemplate(19, CreateAssessmentComponent_div_7_select_19_Template, 2, 2, "select", 397);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 205);
    i0.ɵɵtemplate(21, CreateAssessmentComponent_div_7_small_21_Template, 2, 0, "small", 274);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(22, CreateAssessmentComponent_div_7_div_22_Template, 2, 0, "div", 398)(23, CreateAssessmentComponent_div_7_div_23_Template, 39, 17, "div", 399);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 277);
    i0.ɵɵtemplate(25, CreateAssessmentComponent_div_7_button_25_Template, 2, 2, "button", 278)(26, CreateAssessmentComponent_div_7_button_26_Template, 2, 3, "button", 279);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("id", "log", 40, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r1.graphform);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.totalsub.length > 1 && ctx_r1.submitType != "edit");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.quesNoInvalid);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showGraph);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showGraph);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isBulkUpload);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isBulkUpload);
} }
function CreateAssessmentComponent_div_8_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r144 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 280);
    i0.ɵɵlistener("mouseover", function CreateAssessmentComponent_div_8_div_17_Template_div_mouseover_0_listener() { i0.ɵɵrestoreView(_r144); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSpanTo()); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.countList);
} }
function CreateAssessmentComponent_div_8_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r145 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 281);
    i0.ɵɵlistener("mouseout", function CreateAssessmentComponent_div_8_div_18_Template_div_mouseout_0_listener() { i0.ɵɵrestoreView(_r145); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeInputTo()); });
    i0.ɵɵelementStart(1, "input", 282);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_8_div_18_Template_input_keypress_1_listener($event) { i0.ɵɵrestoreView(_r145); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CreateAssessmentComponent_div_8_div_18_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r145); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.countList, $event) || (ctx_r1.countList = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.countList);
    i0.ɵɵproperty("value", ctx_r1.countList);
} }
function CreateAssessmentComponent_div_8_select_20_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 285);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r147 = ctx.$implicit;
    const i_r148 = ctx.index;
    i0.ɵɵpropertyInterpolate("value", i_r148);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r147);
} }
function CreateAssessmentComponent_div_8_select_20_Template(rf, ctx) { if (rf & 1) {
    const _r146 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 331);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_div_8_select_20_Template_select_change_0_listener() { i0.ɵɵrestoreView(_r146); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSection("drop", "9")); });
    i0.ɵɵtemplate(1, CreateAssessmentComponent_div_8_select_20_option_1_Template, 2, 2, "option", 284);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("selectedIndex", ctx_r1.sectionCount);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.secHeadingArray);
} }
function CreateAssessmentComponent_div_8_small_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 286);
    i0.ɵɵtext(1, "question no already exist");
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_div_8_div_27_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r151 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 345)(1, "div")(2, "div", 347)(3, "textarea", 412);
    i0.ɵɵtwoWayListener("ngModelChange", function CreateAssessmentComponent_div_8_div_27_div_16_Template_textarea_ngModelChange_3_listener($event) { const property_r152 = i0.ɵɵrestoreView(_r151).$implicit; i0.ɵɵtwoWayBindingSet(property_r152.value, $event) || (property_r152.value = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const property_r152 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", property_r152.value);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c31));
} }
function CreateAssessmentComponent_div_8_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r149 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 410)(1, "div", 288)(2, "div", 20)(3, "div", 289)(4, "div", 290)(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 292)(8, "div", 293);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_8_div_27_Template_div_click_8_listener() { const i_r150 = i0.ɵɵrestoreView(_r149).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteSub(ctx_r1.multiform.get("repeatblanks"), i_r150)); });
    i0.ɵɵelement(9, "img", 294);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 295)(11, "div", 205)(12, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_8_div_27_Template_app_tiny_mice_emitEditorValue_12_listener($event) { const i_r150 = i0.ɵɵrestoreView(_r149).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getFillinQuestionValue($event, i_r150)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 20)(14, "div", 40)(15, "div");
    i0.ɵɵtemplate(16, CreateAssessmentComponent_div_8_div_27_div_16_Template, 4, 3, "div", 336);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 295)(18, "div", 205)(19, "label")(20, "b");
    i0.ɵɵtext(21, "Explanation");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "div", 205)(23, "app-tiny-mice", 296);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_div_8_div_27_Template_app_tiny_mice_emitEditorValue_23_listener($event) { const i_r150 = i0.ɵɵrestoreView(_r149).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getExplanationValue($event, i_r150, ctx_r1.multiform.get("repeatblanks")["controls"])); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 27)(25, "div", 304);
    i0.ɵɵelement(26, "input", 305);
    i0.ɵɵelementStart(27, "label", 411);
    i0.ɵɵtext(28, "Autograde");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 361)(30, "label")(31, "b");
    i0.ɵɵtext(32, "Page No");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(33, "input", 309);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div", 342)(35, "label")(36, "b");
    i0.ɵɵtext(37, " Points ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "input", 343);
    i0.ɵɵlistener("keypress", function CreateAssessmentComponent_div_8_div_27_Template_input_keypress_38_listener($event) { i0.ɵɵrestoreView(_r149); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const i_r150 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r150);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", ctx_r1.hide == true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((i_r150 + 1 + 9).toString(36).toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.hide == true);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", i_r150 + "blanks" + ctx_r1.ransom)("showDropBtn", false)("showInputBtn", true);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.fillInArray[i_r150] == null ? null : ctx_r1.fillInArray[i_r150].input);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("editorPatchValue", false)("height", 250)("id", i_r150 + "explainBlanks" + ctx_r1.ransom)("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("id", "fillInArrayAutoGrade", i_r150, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("for", "fillInArrayAutoGrade", i_r150, "");
} }
function CreateAssessmentComponent_div_8_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r153 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 311);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_8_button_29_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r153); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitBlanks(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("data-dismiss", ctx_r1.multiform.get("repeatblanks").valid && ctx_r1.blankValid && !ctx_r1.quesNoInvalid ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.submitType == "add" ? "Submit" : "Update");
} }
function CreateAssessmentComponent_div_8_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r154 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 312);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_8_button_30_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r154); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitBlanks(ctx_r1.submitType)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r1.multiform.get("repeatblanks").valid || !ctx_r1.blankValid || ctx_r1.quesNoInvalid);
    i0.ɵɵattribute("data-dismiss", ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "modal" : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.bulkFormData.noOfQuestions == ctx_r1.bulkAddingCount + 1 ? "Finish" : "Next");
} }
function CreateAssessmentComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r143 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 257)(1, "div", 258)(2, "div", 259)(3, "div", 260)(4, "div", 19)(5, "form", 51)(6, "div", 261)(7, "div", 262)(8, "h5", 263)(9, "b");
    i0.ɵɵtext(10, "Fill in the blanks");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 264)(12, "i", 265);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_8_Template_i_click_12_listener() { i0.ɵɵrestoreView(_r143); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDialog()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(13, "hr");
    i0.ɵɵelementStart(14, "div", 28)(15, "div", 295)(16, "div", 267);
    i0.ɵɵtemplate(17, CreateAssessmentComponent_div_8_div_17_Template, 3, 1, "div", 268)(18, CreateAssessmentComponent_div_8_div_18_Template, 2, 2, "div", 269);
    i0.ɵɵelementStart(19, "div", 270);
    i0.ɵɵtemplate(20, CreateAssessmentComponent_div_8_select_20_Template, 2, 2, "select", 328);
    i0.ɵɵelementStart(21, "button", 314);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_div_8_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r143); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addBlanks()); });
    i0.ɵɵelement(22, "i", 273);
    i0.ɵɵtext(23, " Sub Question ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 205);
    i0.ɵɵtemplate(25, CreateAssessmentComponent_div_8_small_25_Template, 2, 0, "small", 274);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 275);
    i0.ɵɵtemplate(27, CreateAssessmentComponent_div_8_div_27_Template, 39, 19, "div", 409);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(28, "div", 330);
    i0.ɵɵtemplate(29, CreateAssessmentComponent_div_8_button_29_Template, 2, 2, "button", 278)(30, CreateAssessmentComponent_div_8_button_30_Template, 2, 3, "button", 279);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("id", "log", 54, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.multiform);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.changeInput == true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.totalsub.length > 1 && ctx_r1.submitType != "edit");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.quesNoInvalid);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.multiform.get("repeatblanks")["controls"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isBulkUpload);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isBulkUpload);
} }
function CreateAssessmentComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r155 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 260)(1, "div", 295)(2, "div", 262)(3, "h5", 263)(4, "b");
    i0.ɵɵtext(5, "Graph");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 264)(7, "i", 265);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_9_Template_i_click_7_listener() { i0.ɵɵrestoreView(_r155); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDialog()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 403);
    i0.ɵɵelement(9, "app-graph-component", 413);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 414);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_9_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r155); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(11, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r1.graphShow)("graphId", "previewGraph")("questionType", "40");
} }
function CreateAssessmentComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r156 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 415)(1, "h4", 416);
    i0.ɵɵtext(2, "Delete Question");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 260)(4, "div", 19)(5, "div", 20)(6, "div", 21)(7, "p", 334);
    i0.ɵɵtext(8, "Are you sure you want to delete this question?");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(9, "div", 417)(10, "button", 418);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_11_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r156); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteCancel()); });
    i0.ɵɵtext(11, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 311);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_11_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r156); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteQues(ctx_r1.deleteID, ctx_r1.delSection, [ctx_r1.questionId])); });
    i0.ɵɵtext(13, "Ok ");
    i0.ɵɵelementEnd()();
} }
function CreateAssessmentComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r157 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 415)(1, "h4", 416);
    i0.ɵɵtext(2, "Delete Section");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 260)(4, "div", 19)(5, "div", 20)(6, "div", 21)(7, "p", 334);
    i0.ɵɵtext(8, "Are you sure you want to delete this section?");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(9, "div", 417)(10, "button", 418);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_13_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r157); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteCancel()); });
    i0.ɵɵtext(11, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 311);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_13_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r157); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteSectionConfirm(ctx_r1.delSection)); });
    i0.ɵɵtext(13, "Ok");
    i0.ɵɵelementEnd()();
} }
function CreateAssessmentComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r158 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 415)(1, "h4", 416);
    i0.ɵɵtext(2, "Delete Question");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 260)(4, "div", 19)(5, "div", 20)(6, "div", 21)(7, "p", 334);
    i0.ɵɵtext(8, "Are you sure you want to delete this question?");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(9, "div", 417)(10, "button", 418);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_15_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r158); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteCancel()); });
    i0.ɵɵtext(11, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 311);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_15_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r158); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteQues(ctx_r1.deleteID, ctx_r1.delSection, ctx_r1.questionId)); });
    i0.ɵɵtext(13, "Ok");
    i0.ɵɵelementEnd()();
} }
function CreateAssessmentComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r159 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 419)(1, "div", 19)(2, "div", 20)(3, "div", 420)(4, "i", 421);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_17_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r159); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 422)(6, "h3", 423);
    i0.ɵɵtext(7, "Delete All Annotation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 28)(9, "h5", 424);
    i0.ɵɵtext(10, "Are you sure want to delete All Annotations ?");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(11, "div", 425)(12, "button", 426);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_17_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r159); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteAllAnnotation()); });
    i0.ɵɵtext(13, "Yes");
    i0.ɵɵelementEnd()();
} }
function CreateAssessmentComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r160 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 427)(1, "h4");
    i0.ɵɵtext(2, "Explanation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 428);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_19_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r160); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 260)(5, "div", 19)(6, "div", 20)(7, "div", 429);
    i0.ɵɵelement(8, "p", 250);
    i0.ɵɵpipe(9, "sanitizeHtml");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(9, 1, ctx_r1.ExplanationPopupValue), i0.ɵɵsanitizeHtml);
} }
function CreateAssessmentComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r161 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 430)(1, "h4", 431);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 432);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_21_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r161); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 260)(5, "div", 205);
    i0.ɵɵelement(6, "pdf-viewer", 433);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.pdfName);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", ctx_r1.pdfTemplate);
} }
function CreateAssessmentComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r162 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 415)(1, "h5", 434);
    i0.ɵɵtext(2, "Upload PDF");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 260)(4, "div", 20)(5, "div", 205)(6, "h5");
    i0.ɵɵtext(7, "Are you sure want to upload because previously uploaded pdf & data will be removed");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(8, "div", 425)(9, "button", 435);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_23_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r162); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(10, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 115, 16);
    i0.ɵɵlistener("change", function CreateAssessmentComponent_ng_template_23_Template_input_change_11_listener($event) { i0.ɵɵrestoreView(_r162); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.encodePdfFileAsURL($event, 1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 436);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_23_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r162); const hiddenfileinput_r163 = i0.ɵɵreference(13); return i0.ɵɵresetView(hiddenfileinput_r163.click()); });
    i0.ɵɵtext(15, "Confirm ");
    i0.ɵɵelementEnd()();
} }
function CreateAssessmentComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r164 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 415)(1, "h4");
    i0.ɵɵtext(2, "Enter values");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 419)(4, "div", 19)(5, "div", 20)(6, "div", 21)(7, "app-tiny-mice", 437);
    i0.ɵɵlistener("emitEditorValue", function CreateAssessmentComponent_ng_template_25_Template_app_tiny_mice_emitEditorValue_7_listener($event) { i0.ɵɵrestoreView(_r164); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mathValue($event)); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(8, "div", 425)(9, "button", 426);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_25_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r164); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mathAnnotation()); });
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.editMathValue == "" ? false : ctx_r1.editMathValue.rect.text)("height", 250)("id", "multiQues")("imageToolHide", true)("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.editMathValue == "" ? "Done" : "Update");
} }
function CreateAssessmentComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r165 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 415)(1, "h5", 434);
    i0.ɵɵtext(2, "Assign Content");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 260)(4, "div", 20)(5, "div", 205)(6, "h5")(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, "? ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 425)(11, "button", 435);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_27_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r165); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.dontAssign()); });
    i0.ɵɵtext(12, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 438);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_27_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r165); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assignContent()); });
    i0.ɵɵtext(14, "Yes ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Do you want to assign this content to the Class ", ctx_r1.contentCreatedForm != "class" ? "or Content Folder" : "", "");
} }
function CreateAssessmentComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    const _r166 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-confirm-content-assign", 439);
    i0.ɵɵlistener("closePopUp", function CreateAssessmentComponent_ng_template_29_Template_app_confirm_content_assign_closePopUp_0_listener() { i0.ɵɵrestoreView(_r166); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeAssignPopUp()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("classData", ctx_r1.classDetails)("contentDetails", ctx_r1.assignData);
} }
function CreateAssessmentComponent_ng_template_31_option_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 285);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r168 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", item_r168.question_type_id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r168.question_type);
} }
function CreateAssessmentComponent_ng_template_31_div_17_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 285);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r169 = ctx.$implicit;
    const i_r170 = ctx.index;
    i0.ɵɵpropertyInterpolate("value", i_r170);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r169);
} }
function CreateAssessmentComponent_ng_template_31_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "select", 450)(2, "option", 445);
    i0.ɵɵtext(3, "Select Section *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "option", 451);
    i0.ɵɵtext(5, "New Section");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CreateAssessmentComponent_ng_template_31_div_17_option_6_Template, 2, 2, "option", 284);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("col-", ctx_r1.bulkQuestionForm.controls.section.value === "" ? "6" : "12", " mt-3");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.secHeadingArray);
} }
function CreateAssessmentComponent_ng_template_31_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 452);
    i0.ɵɵelement(1, "input", 453);
    i0.ɵɵelementEnd();
} }
function CreateAssessmentComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r167 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 427)(1, "h4");
    i0.ɵɵtext(2, "Add Bulk Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 421);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_31_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r167); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 419)(5, "form", 51)(6, "div", 19)(7, "div", 440)(8, "div", 441);
    i0.ɵɵelement(9, "input", 442);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 443)(11, "select", 444)(12, "option", 445);
    i0.ɵɵtext(13, "Select Question Type *");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, CreateAssessmentComponent_ng_template_31_option_14_Template, 2, 2, "option", 284);
    i0.ɵɵelementStart(15, "option", 446);
    i0.ɵɵtext(16, "Graph Questions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(17, CreateAssessmentComponent_ng_template_31_div_17_Template, 7, 4, "div", 447)(18, CreateAssessmentComponent_ng_template_31_div_18_Template, 2, 0, "div", 448);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(19, "div", 425)(20, "button", 449);
    i0.ɵɵlistener("click", function CreateAssessmentComponent_ng_template_31_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r167); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.createBulkQues()); });
    i0.ɵɵtext(21, "Create ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.bulkQuestionForm);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r1.icons);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.secHeadingArray.length > 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.bulkQuestionForm.value.section === "");
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-target", "#log" + ctx_r1.bulkQuestionForm.value.questionType);
} }
export class CreateAssessmentComponent {
    onResize(event) {
        const svg = document.getElementsByTagName('rect');
    }
    constructor(auth, creator, activateRoute, formBuilder, newSubject, sanitized, confi, modalService, classService, toastr, common, cdr, validationService, router, navServices) {
        this.auth = auth;
        this.creator = creator;
        this.activateRoute = activateRoute;
        this.formBuilder = formBuilder;
        this.newSubject = newSubject;
        this.sanitized = sanitized;
        this.confi = confi;
        this.modalService = modalService;
        this.classService = classService;
        this.toastr = toastr;
        this.common = common;
        this.cdr = cdr;
        this.validationService = validationService;
        this.router = router;
        this.navServices = navServices;
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
        this.lastMousePosition = { x: 0, y: 0 };
        this.canvasPosition = { x: 0, y: 0 };
        this.mousePosition = { x: 0, y: 0 };
        this.mouseDownFlag = false;
        this.pagePosition = { x: 0, y: 0 };
        this.show = false;
        this.shapesType = 'select';
        this.showAnswerKey = false;
        this.pageVariable = 1;
        this.mathDelayer = false;
        this.eraserActive = false;
        this.headingSame = false;
        this.headingEmpty = false;
        this.functionCalled = false;
        this.pdfChanged = false;
        // public allowChanged = false;
        this.graphDialog = false;
        this.multiDialog = false;
        this.trueDialog = false;
        this.choiceDialog = false;
        this.entryDialog = false;
        this.essayDialog = false;
        this.numericDialog = false;
        this.blankDialog = false;
        this.quesNoInvalid = false;
        this.editTextInput = false;
        this.editMathInput = false;
        this.element = null;
        this.areaInfo = [];
        this.showPopup = false;
        this.listRectangleId = '';
        this.count = 0;
        this.choices = [];
        this.changeInput = false;
        this.quesNoChanged = false;
        this.isBulkUpload = false;
        this.isPdfAvailable = false;
        this.sliced = false;
        this.zoom = 1.0;
        this.totalPdfPage = 1;
        this.getTag = [];
        this.getNewlinks = [];
        this.detailData = [];
        this.secHeadingArray = [];
        this.gradeSplit = [];
        this.subjectSplit = [];
        this.slicedQuesNo = 0;
        this.sectionCount = 0;
        this.subQuestion = [];
        this.subQuestionMulti = [];
        this.subQuestionChoice = [];
        this.subQuestionChoose = [];
        this.subQuestionEntry = [];
        this.subQuestionEssay = [];
        this.subQuestionNumeric = [];
        this.subQuestionGraph = [];
        this.subQuestionBlanks = [];
        this.itemsList = [];
        this.totalsub = [];
        this.fillInArray = [];
        this.random = '0';
        this.selectedDeleteIcon = false;
        this.dragCount = [];
        this.dragQuestionsList = [];
        this.draftAdd = 'update';
        this.currentPage = 1;
        this.itemSelect = [];
        this.redoListArray = [];
        this.numericQuestion = [];
        this.numericAnswer = [];
        this.numericExplain = [];
        this.graphQuestion = [];
        this.teacherVersion = [];
        this.resourceArray = [];
        this.blankValid = true;
        this.pdfName = '';
        this.deleteFillBlanks = false;
        this.customPdfLoader = true;
        this.resourceLinks = [];
        this.editSourceLink = false;
        this.editLinkVal = '';
        this.answerpdfpath = [];
        this.allowEdit = false;
        this.classDetails = [];
        this.contentCreatedForm = '';
        this.bulkAddingCount = 0;
        this.showGraph = true;
        this.showPage = false;
        this.pdfWidth = 0;
        this.pdfHeight = 0;
        this.maximumAllowedCount = 10;
        this.shapeTypeChanged = false;
        this.getIcons();
        this.mathEditor = false;
        this.roleid = this.auth.getRoleId();
        this.activateRoute.params.forEach((params) => {
            this.assessmentType = params.type;
        });
        this.classList(1);
        this.teachername = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
        if (this.assessmentType == 'add') {
            this.showdropdown = false;
            this.dragCount = [];
            this.getpdf = JSON.parse(this.auth.getSessionData('pdf'))[0];
            this.resourceLinks = this.getpdf.links;
            console.log(this.getpdf, 'getpdf');
            this.areaInfo = [];
            this.showPage = true;
        }
        else if (this.assessmentType == 'edit') {
            const getAnnotation = JSON.parse(this.auth.getSessionData('editor'));
            this.listDetails(getAnnotation);
            // this.allowChanged = true;
        }
        this.uploadType = this.auth.getSessionData('upload-type');
        this.getlinks = JSON.parse(this.auth.getSessionData('links'));
        this.hide = true;
        this.valueChanged = false;
        this.svgColor = '#ff0000';
        this.disable = true;
        this.showInput = true;
        this.savaText = false;
        this.queDrag = false;
        this.deleteAnnatation = false;
        this.textFontSize = '16';
        this.queNum = [];
        this.schoolId = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.webhost = this.confi.getimgUrl();
        this.strPath = '';
        this.multiform = this.formBuilder.group({
            classname: ['', Validators.required],
            tname: this.teachername,
            head: '',
            index: '',
            option: ['1', Validators.required],
            description: '',
            resourcesLink: '',
            tag: '',
            grade: ['', Validators.required],
            subject: ['', Validators.required],
            downloadContent: '',
            repeatlink: this.formBuilder.array([this.createlink()]),
            repeatplus: this.formBuilder.array([this.truelink()]),
            repeatblanks: this.formBuilder.array([this.createblanks()]),
            totalrepeatplus: this.formBuilder.array([this.addlink()]),
            repeatchoose: this.formBuilder.array([this.createchoose()]),
            repeatentry: this.formBuilder.array([this.createentry()]),
            repeatessay: this.formBuilder.array([this.createessay()]),
            repeatnumeric: this.formBuilder.array([this.createnumeric()]),
        });
        this.graphform = this.formBuilder.group({
            head: '',
            index: '',
            answer: '',
            question: '',
            explain: '',
            answerId: '0',
            page: '0',
            autograde: false,
            points: ['1', Validators.required],
            editorAnswer: ''
        });
        this.bulkQuestionForm = this.formBuilder.group({
            noOfQuestions: ['', Validators.required],
            section: this.sectionCount,
            sectionName: '',
            questionType: [null, Validators.required]
        });
        this.alphabets = [];
        this.buffer = [];
        for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
            this.alphabets.push(String.fromCharCode(i));
        }
        this.itemsList = [{ value: 'true' },
            { value: 'false' },
        ];
    }
    ngOnInit() {
        this.allowSelect = true;
        this.newSubject.allowSchoolChange(this.allowSelect);
        if (this.assessmentType == 'edit') {
        }
        else {
            this.multiform.controls.classname.patchValue('');
            this.multiform.controls.description.patchValue('');
            this.multiform.controls.resourcesLink.patchValue('');
            this.multiform.controls.tag.patchValue('');
            this.multiform.controls.grade.patchValue('');
            this.multiform.controls.subject.patchValue('');
            if (this.auth.getRoleId() == '6') {
                this.multiform.controls.option.patchValue('4');
            }
            else {
                this.multiform.controls.option.patchValue('1');
            }
        }
        this.openmenu = true;
        // this.creator.changeViewList(this.openmenu);
        // this.navServices.collapseSidebar = true;
        this.gradeList();
        this.subjectList();
        this.classList(1);
        this.preventScroll();
        this.contentCreatedForm = this.auth.getSessionData('assignedForm');
    }
    ngOnDestroy() {
        this.allowScroll();
    }
    onEditorReady(event) {
        console.log(Array.from(event.ui.componentFactory.names()));
        const toolbarItems = Array.from(event.ui.componentFactory.names());
        console.log(toolbarItems, 'toolbarss');
        // // this.editorConfig.toolbar.items = [];
        // console.log(this.editorConfig.toolbar.items ,'item')
        // toolbarItems.forEach((item) => {
        //     console.log(item ,'item')
        //     this.editorConfig.toolbar.items.push(item);
        // });
        // console.log(this.editorConfig);
    }
    onDrop(event) {
        console.log(event);
    }
    incrementZoom(amount) {
        this.zoom += amount;
    }
    incrementPage() {
        if (this.pageVariable != this.totalPdfPage) {
            this.pageVariable += 1;
        }
    }
    decrementPage() {
        if (this.pageVariable > 1) {
            this.pageVariable -= 1;
        }
    }
    tools(type, pointerType) {
        this.elem.style.cursor = pointerType;
        if (this.shapesType === type) {
            this.shapesType = '';
            this.allowScroll();
            if (document.getElementById('customArea') && this.shapesType != 'text') {
                document.getElementById('customArea').remove();
            }
            this.showInput = true;
            this.editTextInput = false;
        }
        else {
            this.shapeTypeChanged = this.shapesType == 'select' ? type != 'select' : type == 'select';
            this.shapesType = type;
            if (document.getElementById('customArea') && this.shapesType != 'text') {
                document.getElementById('customArea').remove();
            }
            this.showInput = true;
            this.editTextInput = false;
            // this.elem.style.cursor = pointerType;
            this.preventScroll();
        }
        // this.shapesType = type;
        this.elem.style.cursor = pointerType;
        // document.getElementById("customText").remove();
    }
    callBackFn(pdf) {
        this.totalPdfPage = pdf._pdfInfo.numPages;
        this.customPdfLoader = false;
        this.allowScroll();
        // do anything with "pdf"
    }
    onerror(error) {
        this.customPdfLoader = false;
        this.toastr.error(error.message);
    }
    mouseOut(event) {
        this.mouseDownFlag = false;
        this.buffer = [];
        this.rect.d = this.strPath;
        this.rect.text = this.textValue;
        if (this.shapesType == 'rect') {
            if (this.rect.x1 !== 0 && this.rect.x2 !== this.rect.x1) {
                this.save();
            }
        }
        else {
            // if(this.rect.x1 !== 0 && this.rect.x1 != this.rect.x2){
            if (this.rect.x1 !== 0 && this.rect.x2 !== 0) {
                this.save();
            }
        }
    }
    mouseOver(event) {
        const split = event.target.id.split('-');
        if (split[0] == 'text' && this.shapesType != 'eraser') {
            event.target.style.cursor = 'move';
        }
        else if (this.shapesType == 'eraser') {
            event.target.style.cursor = 'default';
        }
    }
    mouseEnter() {
        if (document.getElementById('customText') && this.shapesType == 'text') {
            document.getElementById('customText').focus();
        }
    }
    getMousePosition(evt) {
        if (evt.target.tagName != 'DIV') {
            let CTM;
            console.log(evt, 'target files');
            if (evt.target.tagName == 'svg') {
                CTM = evt.target.getScreenCTM();
            }
            else {
                // const element = this.getParentRecurrsive(evt.target, 'svg');
                const svgElem = this.getParentRecurrsive(evt.target, 'svg');
                CTM = svgElem.getScreenCTM();
            }
            // for (let i = 0; i < evt.path.length; i++) {
            //
            // }
            if (CTM != undefined) {
                return {
                    x: (evt.clientX - CTM.e) / CTM.a,
                    y: (evt.clientY - CTM.f) / CTM.d
                };
            }
        }
        else {
            this.mouseDownFlag = false;
            this.offsetter = null;
            this.areaInfo.forEach((val) => {
                if (this.selectedElement.id == val.rectangleId) {
                    val.rect.x1 = this.selectedElement.x.baseVal.value;
                    val.rect.y1 = this.selectedElement.y.baseVal.value;
                }
            });
            this.selectedElement = null;
        }
    }
    mathValue(event) {
        this.mathVal = event.content;
    }
    mathAnnotation() {
        this.close();
        if (this.mathVal != '') {
            let rectId;
            this.element = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            if (this.editMathInput) {
                this.element.id = this.editMathValue.rectangleId;
                this.element.setAttribute('x', this.editMathValue.rect.x1);
                this.element.setAttribute('y', this.editMathValue.rect.y1);
            }
            else {
                rectId = Math.random().toFixed(6);
                this.element.id = 'math-' + rectId;
                this.element.setAttribute('x', this.textPosition.x);
                this.element.setAttribute('y', this.textPosition.y);
            }
            this.element.setAttribute('fill', this.svgColor);
            this.element.setAttribute('stroke-width', 'none');
            this.element.setAttribute('stroke', 'none');
            this.element.style.fontSize = this.textFontSize + 'px';
            this.element.style.width = 'auto';
            this.element.style.height = '20px';
            this.element.style.overflow = 'visible';
            this.element.style.cursor = 'move';
            const userInput = this.sanitized.sanitize(SecurityContext.HTML, this.sanitized.bypassSecurityTrustHtml(this.mathVal));
            const mathBody = document.createElement('DIV');
            if (this.editMathInput) {
                mathBody.id = this.editMathValue.rectangleId;
            }
            else {
                mathBody.id = 'math-' + rectId;
            }
            mathBody.innerHTML = userInput;
            this.element.appendChild(mathBody);
            if (this.editMathInput) {
                document.getElementById(this.editMathValue.rectangleId).remove();
                this.element.children[0].children.forEach((value) => value.id = this.editMathValue.rectangleId);
                document.getElementById(this.editMathValue.pageNumber).appendChild(this.element);
                this.areaInfo.forEach((value) => {
                    if (value.rectangleId == this.editMathValue.rectangleId) {
                        value.rect.text = this.mathVal;
                    }
                });
                console.log(this.areaInfo, 'final get');
            }
            else {
                this.rect.x1 = this.textPosition.x;
                this.rect.y1 = this.textPosition.y;
                this.rect.text = this.mathVal;
                this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                const path = this.composedPath(this.mathInputEvent);
                this.element.children[0].children.forEach((value) => value.id = 'math-' + rectId);
                path.find(p => p.className == 'page').children[1].appendChild(this.element);
                this.save();
            }
            this.mathVal = '';
            this.element = null;
            this.editMathInput = false;
            this.editMathValue = '';
            this.clickEvent();
        }
        this.eraserActive = false;
    }
    mouseEvent(event) {
        // eraser code open//
        if (event.type === 'mousemove' && this.shapesType == 'eraser') {
            if (this.eraserActive) {
                event.preventDefault();
                let math = null;
                if (event.target.tagName == 'span' || event.target.tagName.toLowerCase() == 'p') {
                    math = this.getParentRecurrsive(event.target, 'foreignObject');
                }
                // if (event.path != undefined) {
                //     for (let i = 0; i < event.path.length; i++) {
                //         if (event.path[i].tagName == 'foreignObject') {
                //             math = document.getElementById(event.path[i].id);
                //         }
                //     }
                // }
                console.log(math, 'math val');
                if ((document.getElementById(event.target.id) || math != null) && event.target.tagName != 'DIV') {
                    let id;
                    if (math != null) {
                        id = math;
                    }
                    else {
                        id = event.target.id;
                    }
                    for (let i = 0; i < this.areaInfo.length; i++) {
                        if (this.areaInfo[i].rectangleId == id && this.areaInfo[i].isTeacherCorrection) {
                            this.areaInfo.splice(i, 1);
                            document.getElementById(id).remove();
                        }
                    }
                }
            }
        }
        // eraser code close//
        ////drag and drop text opens////
        if (event.type == 'mousedown' && this.shapesType != 'eraser' && !this.editTextInput) {
            this.textPathData = null;
            console.log(event, 'press event');
            // if (event.target.parentElement.tagName == 'foreignObject') {
            //     this.textPathData = document.getElementById(event.target.parentElement.id);
            // }
            let id;
            if (event.target.tagName != 'svg') {
                id = this.getParentRecurrsive(event.target, 'foreignObject');
                this.textPathData = document.getElementById(id);
            }
            // if (event.path != undefined) {
            //     for (let i = 0; i < event.path.length; i++) {
            //         if (event.path[i].tagName == 'foreignObject') {
            //             // let data = event.path[i];
            //             this.textPathData = document.getElementById(event.path[i].id);
            //             console.log(this.textPathData, 'event.target.id');
            //         }
            //     }
            // }
            console.log(id, 'id');
            this.areaInfo.forEach((value) => {
                if (value.rectangleId == this.textPathData?.id) {
                    if (value.isTeacherCorrection) {
                        this.selectedElement = this.textPathData;
                        this.selectedElement.style.cursor = 'move';
                        this.offsetter = this.getMousePosition(event);
                        this.offsetter.x -= parseFloat(this.selectedElement.getAttributeNS(null, 'x'));
                        this.offsetter.y -= parseFloat(this.selectedElement.getAttributeNS(null, 'y'));
                        this.mouseDownFlag = true;
                    }
                }
            });
        }
        //////drag and drop closes///
        if (event.type === 'click' && this.shapesType != 'eraser') {
            this.dragpaths = this.composedPath(event.target);
            const drageventPath = this.dragpaths?.find(p => p.className == 'page');
        }
        if (this.queDrag) {
            // console.log($('#drag' + this.selectedQueNum).length, 'length')
            if ($('#' + this.selectedDragSection + 'drag' + this.selectedQueNum).length == 0) {
                // Exists.
                this.dragpaths = this.composedPath(event.target);
                let drageventPath = this.dragpaths.find(p => p.className == 'page');
                if (drageventPath) {
                    console.log(drageventPath.getAttribute('data-page-number'), 'dragenvrfrf');
                    let num = drageventPath.getAttribute('data-page-number');
                    this.dragPageNumber = parseInt(num);
                    // get id of page
                    let dragtoDrawRectangle = document.getElementById('pdf-page').getElementsByTagName('svg');
                    for (let i = 0; i < dragtoDrawRectangle.length; i++) {
                        if (dragtoDrawRectangle[i].id == num) {
                            this.svgId = i;
                        }
                    }
                    let dragpageOffset = dragtoDrawRectangle[this.svgId].getBoundingClientRect();
                    this.pagePosition = {
                        x: dragpageOffset.left,
                        y: dragpageOffset.top
                    };
                    this.lastMousePosition = {
                        x: event.clientX - this.pagePosition.x,
                        y: event.clientY - this.pagePosition.y
                    };
                    if (event.type === 'mousemove') {
                        // document.getElementById(this.selectedQueNum + 'dropId').style.position = 'fixed';
                    }
                    if (event.type == 'mouseup') {
                        document.getElementById(this.selectedQueNum + 'dropId' + this.selectedDragSection).style.position = 'absolute';
                        this.queNum.push(event.target.innerText);
                        document.getElementById(this.selectedQueNum + 'dropId' + this.selectedDragSection).style.transform = 'none';
                        this.dragButton = document.createElement('span');
                        this.dragButton.id = this.selectedDragSection + 'drag' + this.selectedQueNum;
                        this.dragButton.style.position = 'absolute';
                        this.dragButton.style.left = this.lastMousePosition.x + 'px';
                        this.dragButton.style.top = this.lastMousePosition.y + 'px';
                        this.dragButton.style.fontSize = '14px';
                        this.dragButton.style.minWidth = '27px';
                        this.dragButton.style.background = '#e6baea';
                        this.dragButton.style.padding = "6px";
                        this.dragButton.style.borderRadius = "4px";
                        this.dragButton.style.textAlign = "center";
                        this.dragButton.innerHTML = this.selectedQueNum;
                        this.dragQuestionsList.push({
                            id: this.selectedQueNum + 'dropId' + this.selectedDragSection,
                            text: this.selectedQueNum,
                            pageNumber: this.dragPageNumber,
                            dragButton: {
                                id: this.selectedDragSection + 'drag' + this.selectedQueNum,
                                x: this.lastMousePosition.x,
                                y: this.lastMousePosition.y
                            }
                        });
                        this.dragpaths.find(p => p.className == 'page').appendChild(this.dragButton);
                        this.queDrag = false;
                    }
                }
            }
            else if ($('#' + this.selectedDragSection + 'drag' + this.selectedQueNum).length > 0) {
                const dragList = [];
                this.dragQuestionsList.forEach((item) => {
                    if (item.id !== this.selectedQueNum + 'dropId' + this.selectedDragSection) {
                        dragList.push(item);
                    }
                });
                this.dragQuestionsList = dragList;
                let elem = document.getElementById(this.selectedDragSection + 'drag' + this.selectedQueNum);
                elem.remove();
            }
        }
        if (event.type == 'mousedown' && this.shapesType != 'text' && this.shapesType != 'eraser' && this.editTextInput) {
            const path = this.composedPath(event.target);
            this.appendTextAreaInput(event, path);
        }
        if (!this.showPopup && this.shapesType != undefined && this.shapesType != '' && this.shapesType != 'select' && this.selectedElement == null && !this.queDrag) {
            if (event.type === 'mousemove' && this.shapesType != 'eraser' && this.shapesType != 'text') {
                event.preventDefault();
                this.mousePosition = {
                    x: event.clientX - this.pagePosition.x,
                    y: event.clientY - this.pagePosition.y,
                };
                if (this.mouseDownFlag) {
                    const width = (this.mousePosition.x / this.scale) - (this.lastMousePosition.x / this.scale);
                    const height = (this.mousePosition.y / this.scale) - (this.lastMousePosition.y / this.scale);
                    this.rect = {
                        x1: (this.lastMousePosition.x / this.scale),
                        y1: (this.lastMousePosition.y / this.scale),
                        x2: (this.mousePosition.x / this.scale),
                        y2: (this.mousePosition.y / this.scale),
                        d: '',
                        text: '',
                        width,
                        height
                    };
                    if (this.element != null) {
                        this.element.style.width = width + 'px';
                        this.element.style.height = height + 'px';
                        if (this.shapesType != 'path') {
                            if (this.rect.width < 0 || this.rect.height < 0) {
                                if (document.getElementById(this.element.id)) {
                                    document.getElementById(this.element.id).remove();
                                }
                            }
                            else {
                                document.getElementById('pdf-page').getElementsByTagName('svg')[this.svgId].appendChild(this.element);
                            }
                        }
                        else if (this.shapesType == 'path') {
                            document.getElementById('pdf-page').getElementsByTagName('svg')[this.svgId].appendChild(this.element);
                        }
                    }
                    if (this.shapesType == 'path') {
                        this.mousePosition = {
                            x: (event.clientX - this.pagePosition.x) / this.scale,
                            y: (event.clientY - this.pagePosition.y) / this.scale,
                        };
                        this.appendToBuffer(this.mousePosition);
                        this.updateSvgPath();
                    }
                }
            }
            if (event.type === 'mousedown' && event.target.tagName != 'DIV') {
                this.eraserActive = true;
                this.mouseDownFlag = true;
                const path = this.composedPath(event.target);
                const eventPath = path.find(p => p.className == 'page');
                // const toDrawRectangle = document.getElementById('pdf-page').getElementsByTagName('svg');
                if (typeof eventPath !== 'undefined') {
                    this.dataPageNumber = parseInt(eventPath.getAttribute('data-page-number')); // get id of page
                    const toDrawRectangle = document.getElementById('pdf-page').getElementsByTagName('svg');
                    for (let i = 0; i < toDrawRectangle.length; i++) {
                        if (toDrawRectangle[i].id == this.dataPageNumber?.toString()) {
                            this.svgId = i;
                        }
                    }
                    const pageOffset = toDrawRectangle[this.svgId].getBoundingClientRect();
                    console.log(pageOffset, 'pageofff');
                    this.pagePosition = {
                        x: pageOffset.left,
                        y: pageOffset.top
                    };
                    this.lastMousePosition = {
                        x: event.clientX - this.pagePosition.x,
                        y: event.clientY - this.pagePosition.y
                    };
                    // let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;
                    // let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;
                    if (this.shapesType != 'text' && this.shapesType != 'math') {
                        this.element = document.createElementNS('http://www.w3.org/2000/svg', this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType);
                        this.element.setAttribute('stroke-width', '2');
                        this.element.setAttribute('stroke', this.svgColor);
                        this.element.setAttribute('fill', 'none');
                    }
                    if (this.shapesType == 'rect') {
                        // let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;
                        const rectId = Math.random().toFixed(6);
                        this.element.id = 'rect-' + rectId;
                        this.element.setAttribute('x', this.lastMousePosition.x / this.scale);
                        this.element.setAttribute('y', this.lastMousePosition.y / this.scale);
                    }
                    if (this.shapesType == 'circle') {
                        // let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;
                        const rectId = Math.random().toFixed(6);
                        this.element.id = 'circle-' + rectId;
                        this.element.setAttribute('cx', (this.lastMousePosition.x / this.scale));
                        this.element.setAttribute('cy', (this.lastMousePosition.y / this.scale));
                        this.element.setAttribute('r', (this.lastMousePosition.x / this.scale) - (this.lastMousePosition.y / this.scale));
                    }
                    if (this.shapesType == 'path') {
                        // let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;
                        const rectId = Math.random().toFixed(6);
                        this.element.id = 'path-' + rectId;
                        this.strPath = 'M' + (this.lastMousePosition.x / this.scale) + ' ' + (this.lastMousePosition.y / this.scale);
                        this.element.setAttribute('d', this.strPath);
                    }
                    if (this.shapesType == 'rectMask') {
                        // let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;
                        const rectId = Math.random().toFixed(6);
                        this.element.id = 'rectMask-' + rectId;
                        this.element.setAttribute('stroke-width', '0');
                        this.element.setAttribute('fill', '#fff');
                        this.element.setAttribute('x', (this.lastMousePosition.x / this.scale));
                        this.element.setAttribute('y', (this.lastMousePosition.y / this.scale));
                    }
                    if (this.shapesType == 'highlight') {
                        // let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;
                        const rectId = Math.random().toFixed(6);
                        this.element.id = 'highlight-' + rectId;
                        this.element.setAttribute('stroke-width', '0');
                        // this.element.setAttribute("fill", "yellow");
                        this.element.setAttribute('fill', this.svgColor);
                        this.element.setAttribute('fill-opacity', '0.2');
                        this.element.setAttribute('x', (this.lastMousePosition.x / this.scale));
                        this.element.setAttribute('y', (this.lastMousePosition.y / this.scale));
                    }
                    if (this.shapesType == 'line') {
                        // let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;
                        const rectId = Math.random().toFixed(6);
                        this.element.id = 'line-' + rectId;
                        this.element.setAttribute('x2', (this.lastMousePosition.x / this.scale));
                        this.element.setAttribute('y2', (this.lastMousePosition.y / this.scale));
                    }
                    if (this.shapesType == 'math' && !this.editTextInput && !this.editMathInput) {
                        this.editMathValue = '';
                        this.modalRef = this.modalService.open(this.mathShow, { size: 'lg', backdrop: 'static' });
                        this.mathInputEvent = event.target;
                        this.lastMousePosition = {
                            x: event.clientX - this.pagePosition.x,
                            y: event.clientY - this.pagePosition.y
                        };
                        this.textPosition = {
                            x: this.lastMousePosition.x / this.scale,
                            y: this.lastMousePosition.y / this.scale,
                        };
                    }
                    if (this.shapesType == 'text') {
                        this.appendTextAreaInput(event, path);
                    }
                }
                if (this.element) {
                    this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                }
            }
            if (event.type === 'mouseup') {
                this.eraserActive = false;
                this.mouseDownFlag = false;
                this.buffer = [];
                this.rect.d = this.strPath;
                this.rect.text = this.textValue;
                if (this.shapesType == 'text') {
                    if (document.getElementById('customText')) {
                        document.getElementById('customText').focus();
                    }
                }
                else if (this.shapesType == 'rect') {
                    if (this.rect.x1 !== 0 && this.rect.x2 !== this.rect.x1) {
                        this.save();
                    }
                }
                else if (this.shapesType != 'math') {
                    if (this.rect.x1 !== 0 && this.rect.x2 !== 0) {
                        this.save();
                    }
                }
            }
        }
        else if (this.selectedElement && !this.editTextInput) {
            if (event.type == 'mousemove' && this.mouseDownFlag) {
                event.preventDefault();
                const dragX = event.clientX;
                const dragY = event.clientY;
                const coord = this.getMousePosition(event);
                this.selectedElement.setAttributeNS(null, 'x', coord.x - this.offsetter.x);
                this.selectedElement.setAttributeNS(null, 'y', coord.y - this.offsetter.y);
            }
            if (event.type == 'mouseup') {
                this.mouseDownFlag = false;
                this.areaInfo.forEach((val) => {
                    if (this.selectedElement.id == val.rectangleId) {
                        val.rect.x1 = this.selectedElement.x.baseVal.value;
                        val.rect.y1 = this.selectedElement.y.baseVal.value;
                        console.log(this.selectedElement);
                        console.log(val);
                        // this.areaInfo[index] = this.selectedElement;
                    }
                });
                this.offsetter = null;
                this.selectedElement = null;
            }
        }
    }
    createWrappingText(text, x, y, height, width, id, color) {
        // const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        svgText.setAttributeNS(null, 'x', x);
        svgText.setAttributeNS(null, 'y', y);
        let post = document.createElement('pre');
        post.setAttribute('id', id);
        post.className = 'textInput';
        post.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
        post.textContent = text;
        post.innerHTML = post.innerHTML.replace(/\n/g, '<br>\n');
        post.style.width = width;
        this.rect.width = width;
        this.rect.height = height;
        // tslint:disable-next-line:no-unused-expression
        post.style.fontFamily = 'sans-serif', 'Arial', 'Verdana', 'Trebuchet MS', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        post.style.whiteSpace = 'normal';
        post.style.color = color;
        post.style.fontSize = this.textFontSize;
        post.style.overflowWrap = 'break-word';
        svgText.style.width = width;
        svgText.style.height = height;
        svgText.style.overflow = 'visible';
        svgText.appendChild(post);
        return svgText;
    }
    getParentRecurrsive(val, tagName) {
        if (val.parentElement.tagName === tagName) {
            console.log(val.parentElement.id, 'val.parentElement.id');
            if (tagName == 'svg') {
                return val.parentElement;
            }
            else {
                return val.parentElement.id;
            }
        }
        else {
            if (val.parentElement.localName == 'html') {
                return null;
            }
            else {
                console.log(val.parentElement.localName, 'recurrence tag');
                return this.getParentRecurrsive(val.parentElement, tagName);
            }
        }
    }
    editText(event) {
        let id = null;
        // event.path.forEach((value, index) => {
        //     if (value.tagName == 'foreignObject') {
        //         id = index;
        //     }
        // });
        id = this.getParentRecurrsive(event.target, 'foreignObject');
        if (id != null) {
            let split = id.split('-');
            if (split[0] == 'text') {
                this.areaInfo.forEach((value) => {
                    if (value.rectangleId == id && value.isTeacherCorrection) {
                        this.editingTextValue = value;
                        this.appendTextArea(event, event.path, value.rect.width, value.rect.height);
                        this.inputElement.children[0].innerHTML = event.target.innerText;
                        this.inputElement.style.left = value.rect.x1 > 520 ? (value.rect.x1 - 200).toString() + 'px' : (value.rect.x1).toString() + 'px';
                        this.inputElement.style.top = (value.rect.y1).toString() + 'px';
                        this.inputElement.style.width = 'auto';
                        this.inputElement.style.position = 'absolute';
                        this.textPosition = {
                            x: value.rect.x1 / this.scale,
                            y: value.rect.y1 / this.scale,
                        };
                        const paths = this.composedPath(event.target);
                        paths?.find(p => p.className == 'page').appendChild(this.inputElement);
                        this.editTextInput = true;
                    }
                });
            }
            else if (split[0] == 'math') {
                this.mathInputEvent = document.getElementById(id);
                this.areaInfo.forEach((value) => {
                    if (value.rectangleId == id && value.isTeacherCorrection) {
                        this.editMathValue = value;
                        this.editMathInput = true;
                        this.modalRef = this.modalService.open(this.mathShow, { size: 'md', backdrop: 'static' });
                    }
                });
            }
        }
    }
    keyPressfunction(event) {
        const textValue = [];
        event.target.value.split(/^/gm).forEach((items) => {
            textValue.push(items.length);
        });
        const textAreaValue = document.getElementById('customText');
        const textAreaHeight = textAreaValue.style.height.split('px');
        if (['insertText'].indexOf(event.inputType) > -1 && event.data == null) {
            textAreaValue.style.height = (Number(textAreaHeight[0]) + 20).toString() + 'px';
        }
        else {
            console.log(textValue, 'textValue');
            if (textValue.length != 0) {
                const maxCharacterLength = textValue.reduce((a, b) => Math.max(a, b));
                console.log(maxCharacterLength, 'character');
                const calculatedWidth = ((maxCharacterLength - 1) * 6) + 60;
                const leftPosition = this.inputElement.style.left.toString().split('px')[0];
                const allowedPdfWidth = this.pdfWidth - 10 - Math.round(leftPosition);
                if (allowedPdfWidth > calculatedWidth) {
                    textAreaValue.style.width = calculatedWidth.toString() + 'px';
                }
                if (['deleteContentBackward'].indexOf(event.inputType) > -1 && event.data == null) {
                    textAreaValue.style.height = (((textValue.length - 1) * 20) + 50).toString() + 'px';
                }
            }
        }
    }
    appendTextArea(event, path, width, height) {
        this.inputElement = null;
        if (document.getElementById('customArea')) {
            document.getElementById('customArea').remove();
            this.editTextInput = false;
            this.inputElement = null;
            this.showInput = true;
            this.element = null;
        }
        this.inputElement = document.createElement('DIV');
        const text = document.createElement('TEXTAREA');
        text.className = 'form-control';
        text.setAttribute('type', 'text');
        text.setAttribute('name', 'customText');
        text.setAttribute('Placeholder', 'Text');
        text.style.resize = 'both';
        text.style.height = height == '' || height == '0' ? '50px' : height;
        text.style.width = width == '' || width == '0' ? '60px' : width;
        text.id = 'customText';
        this.inputElement.id = 'customArea';
        this.inputElement.appendChild(text);
    }
    appendTextAreaInput(event, path) {
        this.pdfWidth = parseInt((document.getElementById('pdf-page').getElementsByTagName('svg')[0].style.width).split('px')[0]);
        this.pdfHeight = parseInt((document.getElementById('pdf-page').getElementsByTagName('svg')[0].style.height).split('px')[0]);
        console.log(this.pdfWidth, 'pdfWidth');
        // if (event.target.tagName != "TEXTAREA" && event.target.tagName != 'I') {
        if (event.target.tagName != 'TEXTAREA') {
            if (document.getElementById('customArea') != null) {
                const customTextElement = document.querySelector('textarea[name="customText"]');
                console.log(customTextElement, 'customTextElement');
                if (customTextElement && customTextElement.value == '') {
                    document.getElementById('customArea')?.remove();
                    this.showInput = true;
                }
                else {
                    this.showInput = false;
                }
            }
        }
        if (event.target.tagName != 'TEXTAREA' && event.target.tagName != 'I') {
            if (this.showInput) {
                this.appendTextArea(event, path, '60px', '50px');
                this.lastMousePosition = {
                    x: event.clientX - this.pagePosition.x,
                    y: event.clientY - this.pagePosition.y
                };
                console.log(this.lastMousePosition.x, 'this.lastMousePosition.x');
                this.inputElement.style.left = (this.lastMousePosition.x / this.scale) > 560 ? ((this.lastMousePosition.x) - 60).toString() + 'px' : (this.lastMousePosition.x).toString() + 'px';
                this.inputElement.style.top = (this.lastMousePosition.y / this.scale) > 920 ? ((this.lastMousePosition.y) - 50).toString() + 'px' : (this.lastMousePosition.y).toString() + 'px';
                this.inputElement.style.width = 'auto';
                this.inputElement.style.position = 'absolute';
                // this.inputElement.style.display = 'block';
                this.textPosition = {
                    x: this.lastMousePosition.x / this.scale,
                    y: this.lastMousePosition.y / this.scale,
                };
                const paths = this.composedPath(event.target);
                if (event.target.name != 'customArea') {
                    // this.inputElement.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                    paths?.find(p => p.className == 'page').appendChild(this.inputElement);
                }
            }
            if (!this.showInput) {
                let rectId;
                let idd;
                if (!this.editTextInput) {
                    rectId = Math.random().toFixed(6);
                    idd = 'text-' + rectId;
                    const customTextElement = document.querySelector('textarea[name="customText"]');
                    this.textValue = customTextElement.value;
                    if (this.textValue != '') {
                        // this.element = this.createSVGtext(this.textValue, this.textPosition.x, this.textPosition.y);
                        const height = document.getElementById('customText').style.height;
                        const width = document.getElementById('customText').style.width;
                        this.element = this.createWrappingText(this.textValue, this.textPosition.x, this.textPosition.y, height, width, idd, this.svgColor);
                        this.element.id = 'text-' + rectId;
                        this.element.setAttribute('fill', this.svgColor);
                        this.element.style.fontSize = this.textFontSize + 'px';
                        this.element.style.flexWrap = 'wrap';
                        this.element.style.cursor = 'move';
                        this.rect.x1 = this.textPosition.x;
                        this.rect.y1 = this.textPosition.y;
                        this.rect.text = this.textValue;
                        this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                        let push = path.find(p => p.className == 'page').children;
                        for (let i = 0; i < push.length; i++) {
                            if (push[i].tagName == 'svg') {
                                push[i].appendChild(this.element);
                            }
                        }
                        document.getElementById('customArea').remove();
                        this.save();
                    }
                }
                else {
                    const customTextElement = document.querySelector('textarea[name="customText"]');
                    this.textValue = customTextElement.value;
                    if (this.textValue != '') {
                        const height = document.getElementById('customText').style.height;
                        const width = document.getElementById('customText').style.width;
                        this.element = this.createWrappingText(this.textValue, this.editingTextValue.rect.x1, this.editingTextValue.rect.y1, height, width, this.editingTextValue.rectangleId, this.svgColor);
                        this.element.id = this.editingTextValue.rectangleId;
                        this.element.setAttribute('fill', this.editingTextValue.color);
                        this.element.style.fontSize = this.textFontSize + 'px';
                        this.element.style.flexWrap = 'wrap';
                        this.element.style.cursor = 'move';
                        // this.editingTextValue.rect.x1 = this.textPosition.x;
                        // this.editingTextValue.rect.y1 = this.textPosition.y;
                        this.editingTextValue.rect.text = this.textValue;
                        this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                        for (let i = 0; i < this.areaInfo.length; i++) {
                            if (this.areaInfo[i].rectangleId == this.editingTextValue.rectangleId) {
                                this.areaInfo[i].rect.text = this.editingTextValue.rect.text;
                                this.areaInfo[i].rect.width = this.rect.width;
                                this.areaInfo[i].rect.height = this.rect.height;
                                console.log(this.areaInfo[i], 'this.areaInfo[i]');
                            }
                        }
                        document.getElementById(this.editingTextValue.rectangleId).remove();
                        let push = path.find(p => p.className == 'page').children;
                        for (let i = 0; i < push.length; i++) {
                            if (push[i].tagName == 'svg') {
                                push[i].appendChild(this.element);
                            }
                        }
                        document.getElementById('customArea').remove();
                    }
                }
                this.textValue = '';
                this.showInput = true;
                this.element = null;
                this.editTextInput = false;
                // this.inputElement.children[1].innerText = this.textValue;
                // this.lastMousePosition = {
                //   x: event.clientX - this.pagePosition.x,
                //   y: event.clientY - this.pagePosition.y
                // };
                //
                // this.inputElement.style.left = (this.lastMousePosition.x).toString() + 'px';
                // this.inputElement.style.top = (this.lastMousePosition.y).toString() + 'px';
                // this.inputElement.style.width = '200px';
                // this.inputElement.style.height = '20px';
                // this.inputElement.style.overflow = 'visible';
                // this.inputElement.style.position = 'absolute';
                // this.textPosition = {
                //   x: this.lastMousePosition.x / this.scale,
                //   y: this.lastMousePosition.y / this.scale,
                // };
            }
        }
    }
    backToQuestion() {
        // console.log(this.dragQuestionsList, 'dragQuestionsList');
        this.selectedDeleteIcon = false;
        this.deleteAnnatation = false;
    }
    deleteSvg() {
        // this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
        //    return value.pageNumber == this.currentPage;
        //  });
        // this.itemSelect = this.selectedPageAnnatation;
        // this.deleteAnnatation = true;
        this.modalRef = this.modalService.open(this.deleteClass, { size: 'md', backdrop: 'static' });
    }
    deleteAllAnnotation() {
        for (let i = 0; i < this.areaInfo.length; i++) {
            if (document.getElementById(this.areaInfo[i].rectangleId)) {
                // if (this.currentPage == this.areaInfo[i].pageNumber) {
                this.areaInfo[i].isDelete = true;
                // this.areaInfo.splice(i, 1);
                this.redoListArray.push(this.areaInfo[i]);
                document.getElementById(this.areaInfo[i].rectangleId).remove();
                // }
            }
        }
        // this.areaInfo = [];
        this.selectedPageAnnatation = this.areaInfo.filter((value, id, array) => {
            return value.pageNumber == this.currentPage;
        });
        this.itemSelect = this.selectedPageAnnatation;
        this.close();
    }
    deleteCurrentPageAnnotation() {
        console.log(this.currentPage, 'pageeee');
        for (let i = 0; i < this.areaInfo.length; i++) {
            if (this.currentPage == this.areaInfo[i].pageNumber) {
                if (document.getElementById(this.areaInfo[i].rectangleId)) {
                    this.areaInfo[i].isDelete = true;
                    this.redoListArray.push(this.areaInfo[i]);
                    document.getElementById(this.areaInfo[i].rectangleId).remove();
                }
            }
        }
        // this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
        //     return value.pageNumber !== this.currentPage;
        // });
        //
        // this.itemSelect = this.selectedPageAnnatation;
        this.close();
    }
    saveAnnatation() {
        this.backToQuestion();
    }
    getAveragePoint(offset) {
        const len = this.buffer.length;
        if (len % 2 === 1 || len >= 8) {
            let totalX = 0;
            let totalY = 0;
            let pt;
            let i;
            let count = 0;
            for (i = offset; i < len; i++) {
                count++;
                pt = this.buffer[i];
                totalX += pt.x;
                totalY += pt.y;
            }
            return {
                x: totalX / count,
                y: totalY / count
            };
        }
        return null;
    }
    updateSvgPath() {
        let pt = this.getAveragePoint(0);
        if (pt) {
            // Get the smoothed part of the path that will not change
            this.strPath += ' L' + pt.x + ' ' + pt.y;
            // Get the last part of the path (close to the current mouse position)
            // This part will change if the mouse moves again
            let tmpPath = '';
            for (let offset = 10; offset < this.buffer.length; offset += 5) {
                pt = this.getAveragePoint(offset);
                tmpPath += ' L' + pt.x + ' ' + pt.y;
            }
            // Set the complete current path coordinates
            this.element.setAttribute('d', this.strPath + tmpPath);
        }
    }
    // added new div with rects when pages rendered
    appendToBuffer(pt) {
        this.buffer.push(pt);
        while (this.buffer.length > 8) {
            this.buffer.shift();
        }
    }
    textRender(event) {
        let path = this.composedPath(event.source.textLayerDiv);
        path.find(p => p.className == 'page').appendChild(event.source.textLayerDiv);
    }
    pagechanging(event) {
        console.log(event);
        this.currentPage = event.pageNumber;
        if (this.deleteAnnatation) {
            this.selectedPageAnnatation = this.areaInfo.filter((value, id, array) => {
                return value.pageNumber == this.currentPage;
            });
            this.itemSelect = this.selectedPageAnnatation;
        }
    }
    removeAnnatation(event) {
        for (let i = 0; i < this.areaInfo.length; i++) {
            if (event.rectangleId == this.areaInfo[i].rectangleId) {
                this.areaInfo[i].isDelete = true;
                // this.areaInfo.splice(i, 1);
                this.redoListArray.push(this.areaInfo[i]);
            }
        }
        console.log(event, 'eventeventevent');
        const joinString = event.rectangleId;
        // setTimeout(() => {
        document.getElementById(joinString).remove();
        // }, 100);
        this.selectedPageAnnatation = this.areaInfo.filter((value, id, array) => {
            return value.pageNumber == this.currentPage;
        });
        console.log(this.selectedPageAnnatation, 'selected paginaion');
        this.itemSelect = this.selectedPageAnnatation;
    }
    undoDeleteAnnatation(event) {
        console.log(event, 'eventeventevent in rec');
        for (let i = 0; i < this.redoListArray.length; i++) {
            if (event.rectangleId == this.redoListArray[i].rectangleId) {
                // this.areaInfo.splice(i, 1);
                this.redoPageRendered(this.redoListArray[i]);
                this.redoListArray.splice(i, 1);
            }
        }
        for (let i = 0; i < this.areaInfo.length; i++) {
            if (event.rectangleId == this.areaInfo[i].rectangleId) {
                this.areaInfo[i].isDelete = false;
                // this.areaInfo.splice(i, 1);
                // this.redoListArray.slice(i , 1);
            }
        }
        this.selectedPageAnnatation = this.areaInfo.filter((value) => {
            return value.pageNumber == this.currentPage;
        });
        this.itemSelect = this.selectedPageAnnatation;
    }
    addQuestionButtonInPdf(value) {
        // Exists.
        // this.dragpaths = this.composedPath(event.target);
        // let drageventPath = this.dragpaths.find(p => p.className == 'page');
        // if (drageventPath) {
        if (this.dragQuestionsList) {
            console.log(this.dragQuestionsList, 'this.dragQuestionsList');
            this.dragQuestionsList.forEach((item) => {
                console.log(item, 'item');
                console.log(document.getElementById(item.id), 'document.getElementById(item.id)');
                console.log(item.dragButton.id, 'button id');
                console.log(this.scale, 'scale');
                if (document.getElementById(item.id)) {
                    if ($('#' + item.dragButton.id).length == 0) {
                        document.getElementById(item.id).style.position = 'absolute';
                        document.getElementById(item.id).style.transform = 'none';
                        this.dragButton = document.createElement('span');
                        this.dragButton.id = item.dragButton.id;
                        this.dragButton.style.transform = 'scale(' + this.zoom.toString() + ') rotate(0) translate(0, 0)';
                        // this.dragButton.style.left = item.dragButton.x + 'px';
                        // this.dragButton.style.top = item.dragButton.y + 'px';
                        // this.dragButton.style.fontSize = '14px';
                        // this.dragButton.style.width = '27px';
                        // this.dragButton.style.background = "#e6baea";
                        // this.dragButton.style.padding = "6px";
                        // this.dragButton.style.borderRadius = "4px";
                        // this.dragButton.style.textAlign = "center";
                        ///
                        console.log(item.dragButton.x * this.scale, 'item.dragButton.x * this.scale');
                        this.dragButton.style.left = (item.dragButton.x * this.scale) + 'px';
                        this.dragButton.style.top = (item.dragButton.y * this.scale) + 'px';
                        this.dragButton.style.fontSize = (14 * this.scale).toString() + 'px';
                        this.dragButton.style.minWidth = (27 * this.scale).toString() + 'px';
                        this.dragButton.style.background = '#e6baea';
                        this.dragButton.style.padding = (6 * this.scale).toString() + 'px';
                        this.dragButton.style.borderRadius = (4 * this.scale).toString() + 'px';
                        this.dragButton.style.textAlign = 'center';
                        this.dragButton.style.position = 'absolute';
                        this.dragButton.innerHTML = item.text;
                        const path = document.getElementsByClassName('page')[item.pageNumber - 1];
                        // path.children[2].appendChild(this.dragButton);
                        console.log(path);
                        path.appendChild(this.dragButton);
                        // this.dragpaths.find(p => p.className == 'page').appendChild(this.dragButton);
                    }
                }
                // else if ($('#' + item.dragButton.id).length > 0) {
                //     console.log(item.dragButton.id, 'button id repeat');
                //     // document.getElementById(this.selectedQueNum + 'dropId').style.position = 'fixed';
                //
                //     const dragList = [];
                //     this.dragQuestionsList.forEach((item1: any) => {
                //         if (item1.id !== item.id) {
                //             dragList.push(item1);
                //         }
                //     });
                //     let elem = document.getElementById(item.dragButton.id);
                //     elem.remove();
                //     this.dragQuestionsList = dragList;
                //
                // }
            });
        }
    }
    redoPageRendered(value) {
        let path = document.getElementsByClassName('page')[value.pageNumber - 1];
        let path1 = document.getElementsByClassName('page')[value.pageNumber - 1].getAttribute('data-page-number');
        $('.textLayer').addClass('disable-textLayer');
        // let rectId = document.getElementById('pdf-page').getElementsByTagName(value.shape == 'rectMask' ? 'rect' : value.shape == 'highlight' ? 'rect' : value.shape).length + 1;
        const rectId = value.rectangleId;
        let rect = document.createElementNS('http://www.w3.org/2000/svg', value.shape == 'rectMask' ? 'rect' : value.shape == 'highlight' ? 'rect' : value.shape);
        rect.setAttribute('stroke-width', '2');
        rect.setAttribute('stroke', 'red');
        // rect.setAttribute('fill', 'none');
        rect.setAttribute('fill', 'none');
        rect.style.width = value.rect.width + 'px';
        rect.style.height = value.rect.height + 'px';
        if (value.shape == 'rect') {
            // rect.id = 'rect-' + rectId;
            rect.id = rectId;
            rect.setAttribute('x', value.rect.x1.toString());
            rect.setAttribute('y', value.rect.y1.toString());
        }
        if (value.shape == 'circle') {
            // rect.id = 'circle-' + rectId;
            rect.id = rectId;
            rect.setAttribute('cx', value.rect.x1.toString());
            rect.setAttribute('cy', value.rect.y1.toString());
            rect.setAttribute('r', '50');
        }
        if (value.shape == 'path') {
            // rect.id = 'path-' + rectId;
            rect.id = rectId;
            rect.setAttribute('d', value.rect.d);
        }
        if (value.shape == 'text') {
            // rect.id = 'text-' + rectId;
            rect.id = rectId;
            rect.setAttribute('fill', 'red');
            rect.setAttribute('stroke-width', 'none');
            rect.setAttribute('stroke', 'none');
            rect.setAttribute('x', value.rect.x1.toString());
            rect.setAttribute('y', value.rect.y1.toString());
            rect.appendChild(document.createTextNode(value.rect.text.toString()));
            rect.style.fontSize = value.fontSize + 'px';
        }
        if (value.shape == 'rectMask') {
            // rect.id = 'rectMask-' + rectId;
            rect.id = rectId;
            rect.setAttribute('fill', '#fff');
            rect.setAttribute('stroke-width', '0');
            rect.setAttribute('x', value.rect.x1.toString());
            rect.setAttribute('y', value.rect.y1.toString());
        }
        if (value.shape == 'highlight') {
            // rect.id = 'highlight-' + rectId;
            rect.id = rectId;
            rect.setAttribute('stroke-width', '0');
            // rect.setAttribute('fill', "yellow");
            rect.setAttribute('fill', value.color);
            rect.setAttribute('fill-opacity', '0.2');
            rect.setAttribute('x', value.rect.x1.toString());
            rect.setAttribute('y', value.rect.y1.toString());
        }
        rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
        // path.children[1].appendChild(rect);
        // let pagePath = path.find(p => p.className == 'page');
        const lengthofChilds = path.children.length;
        for (let i = 0; i < lengthofChilds; i++) {
            if (path.children[i].tagName == 'svg') {
                rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                path.children[i].appendChild(rect);
            }
        }
    }
    hoverRemoveItemEnter(event) {
        console.log(event, 'evetn in hoverrr');
        // this.elem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // this.elem.style.position = 'absolute';
        // this.elem.style.left = 0 + 'px';
        // this.elem.style.top = 0 + 'px';
        // this.elem.style.right = 0 + 'px';
        // this.elem.style.bottom = 0 + 'px';
        // this.elem.style.cursor = 'auto';
        // this.elem.style.width = 100 + '%';
        // this.elem.style.height = 100 + '%';
        // let path = this.composedPath(event.source.div);
        // this.globalPdfViewerPath = path;
        this.globalPdfViewerPath.find(p => p.className == 'page').appendChild(this.elem);
        $('.textLayer').addClass('disable-textLayer');
        console.log(this.areaInfo, 'infro in hover');
        this.areaInfo.forEach((value) => {
            console.log(value, 'value in hoverrrr loop');
            const eventsvgPath = document.getElementById(event.rectangleId);
            const valuesvgPath = document.getElementById(value.rectangleId);
            // console.log(eventsvgPath , 'eventsvgPath')
            // console.log(valuesvgPath, 'valuesvgPath')
            if (value.pageNumber == event.pageNumber) {
                if (eventsvgPath == valuesvgPath) {
                    let rect = valuesvgPath;
                    if (rect) {
                        if (value.shape == 'rect') {
                            rect.style.animation = 'blinkStroke 0.8s infinite';
                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'circle') {
                            rect.style.animation = 'blinkStroke 0.8s infinite';
                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'path') {
                            rect.style.animation = 'blinkStroke 0.8s infinite';
                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'text') {
                            rect.style.animation = 'blinkFill 0.8s infinite';
                            rect.setAttribute('fill', value.color);
                            rect.setAttribute('stroke-width', 'none');
                            rect.setAttribute('stroke', 'none');
                            // rect.setAttribute('x', value.rect.x1.toString());
                            // rect.setAttribute('y', value.rect.y1.toString());
                            // rect.appendChild(document.createTextNode(value.rect.text.toString()));
                            // rect.style.fontSize = value.fontSize + 'px';
                        }
                        if (value.shape == 'rectMask') {
                            rect.style.animation = 'blinkFill 0.8s infinite';
                            // rect.setAttribute('fill', '#fff');
                            rect.setAttribute('fill', value.color);
                            rect.setAttribute('stroke-width', '0');
                        }
                        if (value.shape == 'highlight') {
                            rect.style.animation = 'blinkFill 0.8s infinite';
                            rect.setAttribute('stroke-width', '0');
                            // rect.setAttribute('fill', "yellow");
                            rect.setAttribute('fill', value.color);
                            rect.setAttribute('fill-opacity', '0.2');
                        }
                    }
                }
            }
        });
    }
    hoverLeaveRemoveItemEnter(event) {
        console.log(event, 'evetn in leave mouse');
        // this.elem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // this.elem.style.position = 'absolute';
        // this.elem.style.left = 0 + 'px';
        // this.elem.style.top = 0 + 'px';
        // this.elem.style.right = 0 + 'px';
        // this.elem.style.bottom = 0 + 'px';
        // this.elem.style.cursor = 'auto';
        // this.elem.style.width = 100 + '%';
        // this.elem.style.height = 100 + '%';
        this.globalPdfViewerPath.find(p => p.className == 'page').appendChild(this.elem);
        $('.textLayer').addClass('disable-textLayer');
        this.areaInfo.forEach((value, index, arr) => {
            const eventsvgPath = document.getElementById(event.rectangleId);
            const valuesvgPath = document.getElementById(value.rectangleId);
            if (value.pageNumber == event.pageNumber) {
                if (eventsvgPath == valuesvgPath) {
                    let rect = valuesvgPath;
                    if (rect) {
                        rect.style.animation = '';
                        if (value.shape == 'rect') {
                            rect.setAttribute('stroke-width', '2');
                            // rect.setAttribute('stroke', "red");
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'circle') {
                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'path') {
                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'text') {
                            rect.setAttribute('fill', value.color);
                            // rect.setAttribute('stroke-width', );
                            rect.setAttribute('stroke-width', 'none');
                            rect.setAttribute('stroke', 'none');
                            // rect.setAttribute('x', value.rect.x1.toString());
                            // rect.setAttribute('y', value.rect.y1.toString());
                            // rect.appendChild(document.createTextNode(value.rect.text.toString()));
                            // rect.style.fontSize = value.fontSize + 'px';
                        }
                        if (value.shape == 'rectMask') {
                            rect.setAttribute('fill', '#fff');
                            // rect.setAttribute('fill', '#fff');
                            rect.setAttribute('stroke-width', '0');
                        }
                        if (value.shape == 'highlight') {
                            rect.setAttribute('stroke-width', '0');
                            // rect.setAttribute('fill', "yellow");
                            rect.setAttribute('fill', value.color);
                            rect.setAttribute('fill-opacity', '0.2');
                        }
                    }
                }
            }
        });
    }
    scrollToPage(pageNum) {
        const container = document.querySelector('.ng2-pdf-viewer-container') || document.querySelector('pdf-viewer');
        const pageElement = container?.querySelector(`[data-page-number="${pageNum}"]`);
        if (pageElement) {
            pageElement.scrollIntoView({ behavior: 'smooth' });
        }
        this.shapeTypeChanged = false;
    }
    pageRendered(event) {
        this.scale = event.source.scale;
        this.elem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.elem.style.position = 'absolute';
        this.elem.setAttribute('id', event.pageNumber);
        this.elem.style.left = 0 + 'px';
        this.elem.style.top = 0 + 'px';
        this.elem.style.right = 0 + 'px';
        this.elem.style.bottom = 0 + 'px';
        this.elem.style.cursor = 'auto';
        this.elem.style.width = event.source.width + 'px';
        this.elem.style.height = event.source.height + 'px';
        // this.elem.draggable({ minX: -4000, minY: -4000, maxX: 4000, maxY: 4000 });
        const path = this.composedPath(event.source.div);
        this.globalPdfViewerPath = path;
        path.find(p => p.className == 'page').appendChild(this.elem);
        this.areaInfo.forEach((value) => {
            if (value.pageNumber == event.pageNumber && !value.isDelete) {
                const rectId = value.rectangleId;
                let rect;
                if (value.shape != 'text') {
                    rect = document.createElementNS('http://www.w3.org/2000/svg', value.shape == 'rectMask' ? 'rect' : value.shape == 'highlight' ? 'rect' : value.shape);
                    rect.setAttribute('stroke-width', '2');
                    rect.setAttribute('stroke', value.color);
                    rect.setAttribute('fill', 'none');
                    rect.style.width = value.rect.width + 'px';
                    rect.style.height = value.rect.height + 'px';
                }
                else {
                    // rect = this.createSVGtext(value.rect.text, value.rect.x1, value.rect.y1);
                    rect = this.createWrappingText(value.rect.text, value.rect.x1, value.rect.y1, 'auto', value.rect.width, value.rectangleId, value.color);
                }
                if (value.shape == 'rect') {
                    rect.id = rectId;
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
                }
                if (value.shape == 'circle') {
                    rect.id = rectId;
                    rect.setAttribute('cx', value.rect.x1.toString());
                    rect.setAttribute('cy', value.rect.y1.toString());
                    rect.setAttribute('r', '50');
                }
                if (value.shape == 'path') {
                    rect.id = rectId;
                    rect.setAttribute('d', value.rect.d);
                }
                if (value.shape == 'foreignObject') {
                    rect.id = rectId;
                    rect.setAttribute('fill', value.color);
                    rect.setAttribute('stroke-width', 'none');
                    rect.setAttribute('stroke', 'none');
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
                    rect.style.width = 'auto';
                    rect.style.height = '20px';
                    rect.style.overflow = 'visible';
                    rect.style.flexWrap = 'wrap';
                    rect.style.cursor = 'move';
                    const userInput = this.sanitized.sanitize(SecurityContext.HTML, this.sanitized.bypassSecurityTrustHtml(value.rect.text));
                    const mathBody = document.createElement('DIV');
                    mathBody.innerHTML = userInput;
                    rect.appendChild(mathBody);
                }
                if (value.shape == 'text') {
                    rect.id = rectId;
                    rect.setAttribute('fill', value.color);
                    rect.setAttribute('stroke-width', 'none');
                    rect.setAttribute('stroke', 'none');
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
                    //
                    // if (typeof value.rect.text == "string") {
                    //   rect.appendChild(document.createTextNode(value.rect.text));
                    // }
                    // else {
                    //   rect.appendChild(document.createTextNode(value.rect.text?.toString()));
                    // }
                    rect.style.fontSize = value.fontSize + 'px';
                }
                if (value.shape == 'rectMask') {
                    rect.id = rectId;
                    rect.setAttribute('fill', '#fff');
                    rect.setAttribute('stroke-width', '0');
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
                }
                if (value.shape == 'highlight') {
                    rect.id = rectId;
                    // rect.id = 'highlight-' + rectId;
                    rect.setAttribute('stroke-width', '0');
                    // rect.setAttribute('fill', "yellow");
                    rect.setAttribute('fill', value.color);
                    rect.setAttribute('fill-opacity', '0.2');
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
                }
                // get to-draw-rectangle div and add rectangle
                rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                const pagePath = path.find(p => p.className == 'page');
                const lengthofChilds = path.find(p => p.className == 'page').children.length;
                for (let i = 0; i < lengthofChilds; i++) {
                    if (pagePath.children[i].tagName == 'svg') {
                        rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                        pagePath.children[i].appendChild(rect);
                    }
                }
                // path.find(p => p.className == 'page').appendChild(rect);
            }
        });
        this.shapeTypeChanged && this.pageVariable > 1 ? this.scrollToPage(this.pageVariable) : '';
        this.clickEvent();
        this.addQuestionButtonInPdf(event);
    }
    composedPath(el) {
        // el.style.position = 'relative';
        // el.style.zIndex = '1';
        let path = [];
        while (el) {
            path.push(el);
            if (el.tagName === 'HTML') {
                path.push(document);
                path.push(window);
                return path;
            }
            el = el.parentElement;
        }
    }
    getStyle() {
        if (this.showPopup) {
            return 'block';
        }
        else {
            return 'none';
        }
    }
    save() {
        const path = document.getElementById(this.element.id);
        console.log(path, 'path');
        if (path) {
            this.areaInfo.push({
                rectangleId: this.element.id,
                pageNumber: this.dataPageNumber,
                rect: this.rect,
                isDelete: false,
                isTeacherCorrection: true,
                shape: this.shapesType == 'math' ? 'foreignObject' : this.shapesType,
                color: this.svgColor,
                fontSize: this.textFontSize
            });
            console.log(this.rect, 'this.rect');
            console.log(this.areaInfo, 'a save');
            this.showPopup = false;
            this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
            this.selectedPageAnnatation = this.areaInfo.filter((value, id, array) => {
                return value.pageNumber == this.currentPage;
            });
            this.itemSelect = this.selectedPageAnnatation;
        }
        else {
            console.log('no dom elemente');
        }
    }
    cancel() {
        const rectId = this.element.getAttribute('id');
        $('#' + rectId).remove();
        this.showPopup = false;
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
    }
    delete(list) {
        document.getElementById(list.rectangleId).remove();
        this.areaInfo.find(f => f.rectangleId === list.rectangleId).isDelete = true;
        this.areaInfo = this.areaInfo.filter(f => f.isDelete === false);
    }
    moveTo(list) {
        if (this.listRectangleId != '') {
            if (document.getElementById(this.listRectangleId)) {
                document.getElementById(this.listRectangleId).style.background = 'transparent';
                document.getElementById(this.listRectangleId).style.opacity = '1';
            }
        }
        if (this.listRectangleId !== list.rectangleId) {
            document.getElementById(list.rectangleId).scrollIntoView({ block: 'start', behavior: 'smooth' });
            document.getElementById(list.rectangleId).style.background = 'red';
            document.getElementById(list.rectangleId).style.opacity = '0.4';
            this.listRectangleId = list.rectangleId;
        }
    }
    dragQueCount(event, section) {
        this.selectedQueNum = event.target.innerText;
        this.selectedDragSection = section;
        if (event.type === 'mousedown') {
            console.log('mousedown');
            // alert('down');
            this.queDrag = true;
        }
        // if(event.type === 'mouseup'){
        //     // alert('up')
        //     console.log('mouseup')
        //     this.queNum.push(event.target.innerText);
        //     document.getElementById('dropId').style.transform = 'none';
        //
        //     console.log(event , 'innertext');
        //     console.log(event.target.innerText , 'innertext');
        //     this.dragButton = document.createElement('span');
        //     this.dragButton.id = 'drag';
        //     this.dragButton.style.position = 'absolute';
        //     this.dragButton.style.right = this.lastMousePosition.x + 'px';
        //     this.dragButton.style.top = this.lastMousePosition.y + 'px';
        //     this.dragButton.style.fontSize = '14px';
        //     this.dragButton.style.width = '27px';
        //     this.dragButton.style.background = "#e6baea";
        //     this.dragButton.style.padding = "6px";
        //     this.dragButton.style.borderRadius = "4px";
        //     this.dragButton.style.textAlign = "center";
        //     this.dragButton.innerHTML = event.target.innerText;
        //
        //
        //     console.log(this.dragpaths)
        //     this.dragpaths.find(p => p.className == 'page').appendChild(this.dragButton);
        //     this.queDrag = false;
        // }
    }
    dragQuestionRevise(finalLength, changedQuesNo) {
        let id = 0;
        for (let z = 0; z < this.totalsub[this.sectionNo].section.length; z++) {
            if (changedQuesNo == this.totalsub[this.sectionNo].section[z].quesNo) {
                id += 1;
                const sub = (id + 9).toString(36).toLowerCase();
                if (this.InitialArrayLength == 1 && this.InitialArrayLength <= finalLength && id == 1) {
                    let changed = '';
                    if (finalLength == 1) {
                        changed = changedQuesNo;
                    }
                    else {
                        changed = changedQuesNo + sub;
                    }
                    if (document.getElementById(this.sectionNo + 'drag' + this.editQuesNo)) {
                        document.getElementById(this.sectionNo + 'drag' + this.editQuesNo).innerText = changed;
                        document.getElementById(this.sectionNo + 'drag' + this.editQuesNo).id = this.sectionNo + 'drag' + changed;
                        this.dragQuestionsList.forEach((val) => {
                            if (val.id == this.editQuesNo + 'dropId' + this.sectionNo) {
                                val.id = changed + 'dropId' + this.sectionNo;
                                val.dragButton.id = this.sectionNo + 'drag' + changed;
                                val.text = changed;
                            }
                        });
                    }
                }
                else if (this.InitialArrayLength > finalLength) {
                    for (let j = 0; j < this.InitialArrayLength; j++) {
                        const alpha = ((j + 1) + 9).toString(36).toLowerCase();
                        if ((j + 1) > finalLength) {
                            if (document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + alpha)) {
                                for (let k = 0; k < this.dragQuestionsList.length; k++) {
                                    if (this.dragQuestionsList[k].id == this.editQuesNo + alpha + 'dropId' + this.sectionNo) {
                                        this.dragQuestionsList.splice(k, 1);
                                    }
                                }
                                document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + alpha).remove();
                            }
                        }
                        if (finalLength == 1) {
                            if (document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + 'a')) {
                                document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + 'a').innerText = changedQuesNo;
                                document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + 'a').id = this.sectionNo + 'drag' + changedQuesNo;
                                this.dragQuestionsList.forEach((val) => {
                                    if (val.id == this.editQuesNo + 'a' + 'dropId' + this.sectionNo) {
                                        val.id = changedQuesNo + 'dropId' + this.sectionNo;
                                        val.dragButton.id = this.sectionNo + 'drag' + changedQuesNo;
                                        val.text = changedQuesNo;
                                    }
                                });
                            }
                        }
                        else {
                            if (document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + alpha)) {
                                document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + alpha).innerText = changedQuesNo + alpha;
                                document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + alpha).id = this.sectionNo + 'drag' + changedQuesNo + alpha;
                                this.dragQuestionsList.forEach((val) => {
                                    if (val.id == this.editQuesNo + alpha + 'dropId' + this.sectionNo + 'a') {
                                        val.id = changedQuesNo + alpha + 'dropId' + this.sectionNo;
                                        val.dragButton.id = this.sectionNo + 'drag' + changedQuesNo + alpha;
                                        val.text = changedQuesNo + alpha;
                                    }
                                });
                            }
                        }
                    }
                }
            }
        }
    }
    createlink() {
        const def = ['a', 'b', 'c', 'd'];
        return this.formBuilder.group({
            points: ['1', Validators.required],
            option: ['a b c d ', Validators.required],
            array: [def],
            subQuestion: '',
            correct: ['', Validators.required],
            sub: '',
            page: ['0', Validators.required],
            active: ['', Validators.required],
            question: '',
            explain: '',
            answerId: '0',
            autograde: true,
        });
    }
    createchoose() {
        return this.formBuilder.group({
            optradio: ['', Validators.required],
            points1: ['1', Validators.required],
            question: '',
            explain: '',
            answerId: '0',
            autograde: true,
            page: ['0', Validators.required],
        });
    }
    createnumeric() {
        return this.formBuilder.group({
            answer: [''],
            question: '',
            explain: '',
            answerId: '0',
            autograde: false,
            page: ['0', Validators.required],
            points: ['1', Validators.required],
            repeatNumericCorrect: this.formBuilder.array([this.createNewCorrectAnswerForNumericEntry()])
        });
    }
    createNewCorrectAnswerForNumericEntry(value = '') {
        return this.formBuilder.group({
            correct: [value, Validators.required],
        });
    }
    createentry() {
        return this.formBuilder.group({
            correct: [''],
            matchCase: '',
            explain: '',
            points: ['1', Validators.required],
            question: '',
            answerId: '0',
            page: ['0', Validators.required],
            autograde: false,
            repeatEntryCorrect: this.formBuilder.array([this.createNewCorrectAnswerForTextEntry()])
        });
    }
    createNewCorrectAnswerForTextEntry(value = '') {
        return this.formBuilder.group({
            correct: [value, Validators.required],
        });
    }
    createessay() {
        return this.formBuilder.group({
            lines: '',
            points: ['1', Validators.required],
            question: '',
            explain: '',
            answerId: '0',
            page: ['0', Validators.required],
            autograde: false,
        });
    }
    truelink() {
        return this.formBuilder.group({
            choice: '',
            points: ['1', Validators.required],
            optionList: '',
            answer: ['', Validators.required],
            question: '',
            explain: '',
            active: '',
            answerId: '0',
            autograde: true,
            page: ['0', Validators.required],
            choiceList: this.formBuilder.array([this.addlink()])
        });
    }
    createblanks() {
        return this.formBuilder.group({
            choice: '',
            points: ['1', Validators.required],
            answer: '',
            explain: '',
            question: ['', Validators.required],
            autograde: false,
            blankList: '',
            page: ['0', Validators.required],
            answerId: '0',
        });
    }
    addlink() {
        return this.formBuilder.group({
            choice: ['', Validators.required]
        });
    }
    addFillin() {
        return this.formBuilder.group({
            choice: ['', Validators.required]
        });
    }
    add() {
        this.ransom = this.getRandrom();
        this.repeatlink = this.multiform.get('repeatlink');
        this.repeatlink.push(this.createlink());
        this.hide = false;
    }
    addTrue() {
        this.ransom = this.getRandrom();
        this.repeatchoose = this.multiform.get('repeatchoose');
        this.repeatchoose.push(this.createchoose());
        this.hide = false;
    }
    addBlanks() {
        this.ransom = this.getRandrom();
        this.repeatblanks = this.multiform.get('repeatblanks');
        this.repeatblanks.push(this.createblanks());
        this.hide = false;
    }
    addEntry() {
        this.ransom = this.getRandrom();
        this.repeatentry = this.multiform.get('repeatentry');
        this.repeatentry.push(this.createentry());
        this.hide = false;
    }
    addNewCorrectAnswerForTextEntry(data) {
        console.log(data, 'daat');
        this.repeatEntryCorrect = data.get('repeatEntryCorrect');
        this.repeatEntryCorrect.push(this.createNewCorrectAnswerForTextEntry());
    }
    addNewCorrectAnswerForNumericEntry(data) {
        console.log(data, 'daat');
        this.repeatNumericCorrect = data.get('repeatNumericCorrect');
        this.repeatNumericCorrect.push(this.createNewCorrectAnswerForNumericEntry());
    }
    addEssay() {
        this.ransom = this.getRandrom();
        this.repeatessay = this.multiform.get('repeatessay');
        this.repeatessay.push(this.createessay());
        this.hide = false;
    }
    addNumeric() {
        this.ransom = this.getRandrom();
        this.repeatnumeric = this.multiform.get('repeatnumeric');
        this.repeatnumeric.push(this.createnumeric());
        this.hide = false;
    }
    plus() {
        this.ransom = this.getRandrom();
        this.repeatplus = this.multiform.get('repeatplus');
        this.repeatplus.push(this.truelink());
        this.hide = false;
    }
    addPlus(value) {
        value.push(this.addlink());
    }
    addFill(value) {
        value.push(this.addFillin());
    }
    formChanged() {
        if (this.assessmentType != 'add') {
            this.valueChanged = true;
        }
    }
    allowAnswerKey(event) {
        this.showAnswerKey = event.target.checked;
    }
    checkExplain(val) {
        if (val != '') {
            const openingTagSplit = val.split('<p>');
            const closingTagSplit = openingTagSplit[1].split('</p>');
            const spaceSplit = closingTagSplit[0].split('&nbsp');
            let check = false;
            spaceSplit.forEach((item) => {
                if (item != '' || item != '<p>/n</p>') {
                    check = true;
                }
            });
            return check;
        }
        else {
            return false;
        }
    }
    nextService() {
        const getAnnotation = JSON.parse(this.auth.getSessionData('editresources'));
        console.log(getAnnotation, 'getAnnotation');
        if (getAnnotation.status == '1') {
            this.assign('edit');
        }
        else if (getAnnotation.status == '2') {
            this.draft('edit');
        }
    }
    saveAndExit() {
        const grade = this.multiform.controls.grade.value;
        const subject = this.multiform.controls.subject.value;
        const cname = this.multiform.controls.classname.value;
        if (grade != '' && subject != '' && cname != '') {
            this.pdfChanged = false;
            this.valueChanged = false;
            this.nextService();
        }
        else {
            this.validationService.validateAllFormFields(this.multiform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    description() {
        const grade = this.multiform.controls.grade.value;
        const subject = this.multiform.controls.subject.value;
        const cname = this.multiform.controls.classname.value;
        if (grade != '' && subject != '' && cname != '') {
            this.disable = false;
            if (this.assessmentType == 'add') {
                if (this.functionCalled == false) {
                    this.draft('add');
                }
                else {
                    this.classList(2);
                }
            }
            else if (this.assessmentType == 'edit') {
                if (this.pdfChanged) {
                    this.areaInfo = [];
                    this.nextService();
                }
                else if (this.valueChanged) {
                    this.nextService();
                }
                else {
                    this.pdfTemplate = this.webhost + '/' + this.getpdf?.original_image_url;
                    this.classList(2);
                }
            }
        }
        else {
            this.validationService.validateAllFormFields(this.multiform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    checkField(id) {
        if (document.getElementById('customArea')) {
            document.getElementById('customArea').remove();
            this.editTextInput = false;
            this.inputElement = null;
            this.showInput = true;
            this.element = null;
        }
        const grade = this.multiform.controls.grade.value;
        const subject = this.multiform.controls.subject.value;
        const cname = this.multiform.controls.classname.value;
        if (grade != '' && subject != '' && cname != '') {
            if (this.pdfChanged && this.assessmentType != 'add') {
                this.areaInfo = [];
                this.nextService();
            }
            else {
                if (id == 2) {
                    this.type = 'Workspace';
                }
                else if (id == 3) {
                    this.type = 'Preview';
                }
            }
        }
        else {
            this.validationService.validateAllFormFields(this.multiform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    encodeImageFileAsURL(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            const imgDetails = event.target.files[0];
            // console.log(imgDetails, 'IMGDETAILS');
            const reader = new FileReader();
            reader.onload = (event) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                // console.log(getUrl, 'geturl');
                const pic = imgDetails.type.split('/');
                // console.log(pic, 'Type');
                if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] == 'jpg') {
                    this.onUploadKYCFinished(getUrl, imgDetails);
                }
                else {
                    this.toastr.error('JPEG ,PNG & JPG are the required type');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }
    onUploadKYCFinished(getUrlEdu, imageList) {
        this.recordBase64Url = getUrlEdu[1];
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: [{
                    image: this.recordBase64Url,
                    size: imageList.size,
                    type: imageList.type,
                    name: imageList.name
                }],
            uploadtype: 'profile'
        };
        this.common.fileUpload(data).subscribe((successData) => {
            this.uploadSuccess(successData);
            // console.log(successData, 'successData');
        }, (error) => {
            this.uploadFailure(error);
            console.log(error, 'wrongFormat');
        });
    }
    uploadSuccess(successData) {
        // this.settings.loadingSpinner = false;
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            // console.log(this.imagepath, 'This image');
            this.imagepath = successData.ResponseObject.imagepath[0].original_image_url;
            this.imagepaththumb = successData.ResponseObject.imagepath[0].resized_url;
            // if (typing == 1) {
            // for (let i = 0; i < successData.ResponseObject.imagepath.length; i++) {
            //   this.imagepath.push(successData.ResponseObject.imagepath[i].original_image_url);
            //   this.imagepaththumb.push(successData.ResponseObject.imagepath[i].resized_url);
            //
            // }
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    uploadFailure(error) {
        // this.toastr.error('Invalid File Format');
        console.log(error, 'error');
    }
    submitMulti(value) {
        setTimeout(() => {
            if (this.multiform['controls'].repeatlink.valid && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionMulti = [];
                let list;
                const changedQuesNo = this.countList;
                for (let i = 0; i < this.multiform['controls'].repeatlink.value.length; i++) {
                    console.log(this.multiform['controls'].repeatlink['controls'][i]['controls']['question'].value, 'question val ');
                    const list11 = ((i + 1) + 9).toString(36).toLowerCase();
                    list = {
                        options: this.multiform['controls'].repeatlink['controls'][i]['controls']['option'].value,
                        auto_grade: this.multiform['controls'].repeatlink['controls'][i]['controls']['autograde'].value == true ? '1' : '0',
                        points: this.multiform['controls'].repeatlink['controls'][i]['controls']['points'].value,
                        answer: [this.multiform['controls'].repeatlink['controls'][i]['controls']['correct'].value],
                        array: this.multiform['controls'].repeatlink['controls'][i]['controls']['array'].value,
                        question: this.multiform['controls'].repeatlink['controls'][i]['controls']['question'].value,
                        answer_id: this.multiform['controls'].repeatlink['controls'][i]['controls']['answerId'].value,
                        answer_explanation: this.multiform['controls'].repeatlink['controls'][i]['controls']['explain'].value,
                        question_no: this.countList,
                        sub_question_no: this.hide == false ? this.countList + list11 : this.countList,
                        question_type_id: '1',
                        page_no: this.multiform['controls'].repeatlink['controls'][i]['controls']['page'].value,
                        // difficulty: value == 'edit' ? this.randomValue[i] : Math.random().toFixed(6),
                        difficulty: '0',
                        allow_exact_match: '0',
                        allow_any_text: '0',
                        match_case: '0',
                        minimum_line: '0'
                    };
                    console.log(list, 'updatedList');
                    this.subQuestionMulti.push(list);
                    if (value == 'add') {
                        if (this.totalsub[this.sectionCount] == null) {
                            this.totalsub[this.sectionCount] = { heading: '', section: [] };
                        }
                        console.log(this.totalsub, 'this.totalsub add');
                        this.totalsub[this.sectionCount].section.push({
                            sub: list.sub_question_no,
                            answer: list.answer,
                            quesId: '0',
                            typeId: list.question_type_id,
                            quesNo: list.question_no,
                            pageNo: list.page_no,
                            explain: list.answer_explanation,
                            autoGrade: list.auto_grade,
                            matchCase: list.match_case,
                            option: list.options,
                            array: list.array,
                            question: list.question
                        });
                        // let random = Math.random().toFixed(6);
                        // document.getElementById(list.sub_question_no + 'dropId' + this.sectionCount).setAttribute('uniqueId', random);
                    }
                }
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = { heading: '', section: [] };
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: this.multiform['controls'].repeatlink.value.length == 1 ? 0 : 1,
                        sub_questions: this.subQuestionMulti
                    });
                    console.log(this.subQuestion, 'subQuestion');
                }
                else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = { heading: this.secHeadingArray[i], section: [] };
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: this.multiform['controls'].repeatlink.value.length == 1 ? 0 : 1,
                                        sub_questions: this.subQuestionMulti
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    const list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({
                                        sub: list.sub_question_no,
                                        answer: list.answer,
                                        quesId: list.answer_id,
                                        typeId: list.question_type_id,
                                        autoGrade: list.auto_grade,
                                        matchCase: list.match_case,
                                        pageNo: list.page_no,
                                        explain: list.answer_explanation,
                                        editor: list?.editor_answer,
                                        quesNo: list.question_no,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question
                                    });
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatlink.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                    console.log(this.subQuestion, 'this.subQuestionEdit');
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseFloat(a.quesNo) - parseFloat(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseFloat(a.sub_questions[0].question_no) - parseFloat(b.sub_questions[0].question_no));
                }
                console.log(this.totalsub[this.sectionCount].section, 'after sorted');
                const controlmulti = this.multiform.controls['repeatlink'];
                for (let i = controlmulti.length; i >= 1; i--) {
                    controlmulti.reset();
                    this.multiform['controls'].repeatlink['controls'][0]['controls']['points'].patchValue('1');
                    this.multiform['controls'].repeatlink['controls'][0]['controls']['page'].patchValue('0');
                    this.multiform['controls'].repeatlink['controls'][0]['controls']['option'].patchValue('a b c ');
                    this.multiform['controls'].repeatlink['controls'][0]['controls']['array'].patchValue(['a', 'b', 'c']);
                    this.multiform['controls'].repeatlink['controls'][0]['controls']['autograde'].patchValue(true);
                    controlmulti.removeAt(i);
                }
                // if (this.quesNoChanged == false) {
                //     this.dragCount = [];
                //     for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                //         const num = i + 1;
                //         this.dragCount.push(num);
                //     }
                // }
                this.hide = true;
                if (this.isBulkUpload) {
                    this.multiform.get('repeatlink').reset();
                    this.bulkAddingCount++;
                    if (this.bulkAddingCount === this.bulkFormData.noOfQuestions) {
                        this.multiDialog = false;
                        this.isBulkUpload = false;
                    }
                    else {
                        this.question('1');
                    }
                }
                else {
                    this.multiDialog = false;
                }
                this.clickEvent();
            }
            else {
                this.toastr.error('Enter all mandatory fields');
            }
        }, 500);
    }
    gettingChoiceList(event, id, option) {
        console.log(id, 'id');
        console.log(option, 'option');
        for (let i = 0; i < this.multiform['controls'].repeatlink['controls'].length; i++) {
            if (id == i) {
                console.log(event.target.innerText, 'event.target.innerText');
                this.multiform['controls'].repeatlink['controls'][i]['controls']['correct'].patchValue(event.target.innerText);
                this.multiform['controls'].repeatlink['controls'][i]['controls']['active'].patchValue(option);
            }
        }
    }
    submitChoice(value) {
        setTimeout(() => {
            if (this.multiform['controls'].repeatplus.valid && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionChoice = [];
                const changedQuesNo = this.countList;
                let list;
                for (let i = 0; i < this.multiform['controls'].repeatplus.value.length; i++) {
                    const list11 = ((i + 1) + 9).toString(36).toLowerCase();
                    list = {
                        options: '',
                        points: this.multiform['controls'].repeatplus['controls'][i]['controls']['points'].value,
                        auto_grade: this.multiform['controls'].repeatplus['controls'][i]['controls']['autograde'].value == true ? '1' : '0',
                        question_no: this.countList,
                        sub_question_no: this.hide == false ? this.countList + list11 : this.countList,
                        question_type_id: '9',
                        answer: [this.multiform['controls'].repeatplus['controls'][i]['controls']['answer'].value],
                        answer_id: this.multiform['controls'].repeatplus['controls'][i]['controls']['answerId'].value,
                        difficulty: '0',
                        allow_exact_match: '0',
                        allow_any_text: '0',
                        match_case: '0',
                        minimum_line: '0',
                        array: this.multiform['controls'].repeatplus['controls'][i]['controls']['optionList'].value,
                        question: this.multiform['controls'].repeatplus['controls'][i]['controls']['question'].value,
                        page_no: this.multiform['controls'].repeatplus['controls'][i]['controls']['page'].value,
                        answer_explanation: this.multiform['controls'].repeatplus['controls'][i]['controls']['explain'].value,
                    };
                    this.subQuestionChoice.push(list);
                    if (value == 'add') {
                        if (this.totalsub[this.sectionCount] == null) {
                            this.totalsub[this.sectionCount] = { heading: '', section: [] };
                        }
                        this.totalsub[this.sectionCount].section.push({
                            sub: list.sub_question_no,
                            answer: list.answer,
                            typeId: list.question_type_id,
                            quesId: '0',
                            quesNo: list.question_no,
                            autoGrade: list.auto_grade,
                            matchCase: list.match_case,
                            pageNo: list.page_no,
                            explain: list.answer_explanation,
                            option: list.array,
                            array: list.array,
                            question: list.question
                        });
                        console.log(this.subQuestionChoice, 'this.subQuestionChoice');
                    }
                    console.log(this.totalsub, 'this.totalsub array value');
                }
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = { heading: '', section: [] };
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: this.multiform['controls'].repeatplus.value.length == 1 ? 0 : 1,
                        sub_questions: this.subQuestionChoice
                    });
                    console.log(this.subQuestion, 'subQuestion');
                }
                else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = { heading: this.secHeadingArray[i], section: [] };
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: this.multiform['controls'].repeatplus.value.length == 1 ? 0 : 1,
                                        sub_questions: this.subQuestionChoice
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    const list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({
                                        sub: list.sub_question_no,
                                        answer: list.answer,
                                        quesId: list.answer_id,
                                        typeId: list.question_type_id,
                                        autoGrade: list.auto_grade,
                                        matchCase: list.match_case,
                                        pageNo: list.page_no,
                                        editor: list?.editor_answer,
                                        explain: list.answer_explanation,
                                        quesNo: list.question_no,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question
                                    });
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatplus.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                    console.log(this.subQuestion, 'this.subQuestionEdit');
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseFloat(a.quesNo) - parseFloat(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseFloat(a.sub_questions[0].question_no) - parseFloat(b.sub_questions[0].question_no));
                }
                console.log(this.subQuestion, 'subQuestion');
                const controlPlus = this.multiform.controls['repeatplus'];
                for (let i = controlPlus.length; i >= 1; i--) {
                    const controls = controlPlus['controls'][0]['controls']['choiceList'];
                    for (let j = controls.length; j >= 1; j--) {
                        controls.removeAt(j);
                    }
                    controlPlus.reset();
                    this.multiform['controls'].repeatplus['controls'][0]['controls']['points'].patchValue('1');
                    this.multiform['controls'].repeatplus['controls'][0]['controls']['autograde'].patchValue(true);
                    controlPlus.removeAt(i);
                }
                this.hide = true;
                if (this.isBulkUpload) {
                    this.multiform.get('repeatplus').reset();
                    this.bulkAddingCount++;
                    if (this.bulkAddingCount === this.bulkFormData.noOfQuestions) {
                        this.choiceDialog = false;
                        this.isBulkUpload = false;
                    }
                    else {
                        this.question('9');
                    }
                }
                else {
                    this.choiceDialog = false;
                }
                this.clickEvent();
            }
            else {
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }, 500);
    }
    gettingQuestionChoiceList(id) {
        for (let i = 0; i < this.multiform['controls'].repeatplus['controls'].length; i++) {
            if (id == i) {
                let arr = [];
                console.log(this.multiform['controls'].repeatplus['controls'][id]['controls']['choiceList']['controls'][0], 'enter as');
                for (let j = 0; j < this.multiform['controls'].repeatplus['controls'][id]['controls']['choiceList'].length; j++) {
                    arr.push(this.multiform['controls'].repeatplus['controls'][id]['controls']['choiceList']['controls'][j].value);
                }
                console.log(arr, 'choice');
                this.multiform['controls'].repeatplus['controls'][id]['controls']['optionList'].patchValue(arr);
                console.log(this.multiform['controls'].repeatplus['controls'][id]['controls']['optionList'].value, 'listData');
            }
        }
        // this.multiform['controls'].repeatplus['controls'][li]['controls']['optionList']['controls'][id]['controls'].patchValue(array.get('choiceList')['controls'][id]['controls'].value);
    }
    gettingChoiceAnswer(event, id) {
        console.log(event, 'event index');
        console.log(event.target, 'event index target');
        console.log(event.target.value);
        const val = this.multiform['controls'].repeatplus['controls'][id]['controls']['optionList'].value;
        for (let j = 0; j < val.length; j++) {
            if (event.target.value == val[j].choice) {
                this.multiform['controls'].repeatplus['controls'][id]['controls']['answer'].patchValue(val[j].choice);
                this.multiform['controls'].repeatplus['controls'][id]['controls']['active'].patchValue(j + 1);
                console.log(this.multiform['controls'].repeatplus['controls'][id]['controls']['answer'].value, 'ans value');
                console.log(this.multiform['controls'].repeatplus['controls'][id]['controls']['active'].value, 'active value');
            }
        }
        // for (let i = 0; i < this.multiform['controls'].repeatplus['controls'].length; i++) {
        //
        // }
    }
    submitchoose(value) {
        setTimeout(() => {
            if (this.multiform['controls'].repeatchoose.valid && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionChoose = [];
                let list;
                const changedQuesNo = this.countList;
                console.log(this.multiform['controls'].repeatchoose.value, 'listlist');
                for (let i = 0; i < this.multiform['controls'].repeatchoose.value.length; i++) {
                    const list11 = ((i + 1) + 9).toString(36).toLowerCase();
                    const trueVal = this.multiform['controls'].repeatchoose['controls'][i]['controls']['optradio'].value;
                    list = {
                        options: 'true, false',
                        points: this.multiform['controls'].repeatchoose['controls'][i]['controls']['points1'].value,
                        auto_grade: this.multiform['controls'].repeatchoose['controls'][i]['controls']['autograde'].value == true ? '1' : '0',
                        question: this.multiform['controls'].repeatchoose['controls'][i]['controls']['question'].value,
                        answer_explanation: this.multiform['controls'].repeatchoose['controls'][i]['controls']['explain'].value,
                        answer_id: this.multiform['controls'].repeatchoose['controls'][i]['controls']['answerId'].value,
                        page_no: this.multiform['controls'].repeatchoose['controls'][i]['controls']['page'].value,
                        question_no: this.countList,
                        sub_question_no: this.hide == false ? this.countList + list11 : this.countList,
                        question_type_id: '3',
                        difficulty: '0',
                        allow_exact_match: '0',
                        allow_any_text: '0',
                        match_case: '0',
                        array: [],
                        minimum_line: '0',
                        answer: [trueVal],
                    };
                    this.subQuestionChoose.push(list);
                    if (value == 'add') {
                        if (this.totalsub[this.sectionCount] == null) {
                            this.totalsub[this.sectionCount] = { heading: '', section: [] };
                        }
                        this.totalsub[this.sectionCount].section.push({
                            sub: list.sub_question_no,
                            answer: list.answer,
                            quesId: '0',
                            typeId: list.question_type_id,
                            autoGrade: list.auto_grade,
                            matchCase: list.match_case,
                            pageNo: list.page_no,
                            explain: list.answer_explanation,
                            quesNo: list.question_no,
                            option: list.options,
                            array: list.array,
                            question: list.question
                        });
                        console.log(this.totalsub, 'this.totalsub add');
                    }
                }
                console.log(this.subQuestionChoose, 'subQuestionChoose');
                console.log(this.multiform['controls'].repeatchoose.value, 'subQuestionMulti');
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = { heading: '', section: [] };
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: this.multiform['controls'].repeatchoose.value.length == 1 ? 0 : 1,
                        sub_questions: this.subQuestionChoose
                    });
                    console.log(this.subQuestion, 'subQuestion');
                }
                else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = { heading: this.secHeadingArray[i], section: [] };
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: this.multiform['controls'].repeatchoose.value.length == 1 ? 0 : 1,
                                        sub_questions: this.subQuestionChoose
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    const list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({
                                        sub: list.sub_question_no,
                                        answer: list.answer,
                                        quesId: list.answer_id,
                                        typeId: list.question_type_id,
                                        quesNo: list.question_no,
                                        autoGrade: list.auto_grade,
                                        editor: list?.editor_answer,
                                        pageNo: list.page_no,
                                        explain: list.answer_explanation,
                                        matchCase: list.match_case,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question
                                    });
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatchoose.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                    console.log(this.subQuestion, 'this.subQuestionEdit');
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseFloat(a.quesNo) - parseFloat(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseFloat(a.sub_questions[0].question_no) - parseFloat(b.sub_questions[0].question_no));
                }
                const controlChoose = this.multiform.controls['repeatchoose'];
                for (let i = controlChoose.length; i >= 1; i--) {
                    controlChoose.reset();
                    this.multiform['controls'].repeatchoose['controls'][0]['controls']['points1'].patchValue('1');
                    this.multiform['controls'].repeatchoose['controls'][0]['controls']['autograde'].patchValue(true);
                    controlChoose.removeAt(i);
                }
                this.hide = true;
                if (this.isBulkUpload) {
                    this.multiform.get('repeatchoose').reset();
                    this.bulkAddingCount++;
                    if (this.bulkAddingCount === this.bulkFormData.noOfQuestions) {
                        this.trueDialog = false;
                        this.isBulkUpload = false;
                    }
                    else {
                        this.question('3');
                    }
                }
                else {
                    this.trueDialog = false;
                }
                this.clickEvent();
            }
            else {
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }, 500);
    }
    submitEntry(value) {
        setTimeout(() => {
            if (this.multiform['controls'].repeatentry.valid && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionEntry = [];
                let list;
                const changedQuesNo = this.countList;
                console.log(this.multiform['controls'].repeatentry.value, 'listlist');
                for (let i = 0; i < this.multiform['controls'].repeatentry.value.length; i++) {
                    const list11 = ((i + 1) + 9).toString(36).toLowerCase();
                    const answer = [];
                    for (let j = 0; j < this.multiform['controls'].repeatentry['controls'][i]['controls'].repeatEntryCorrect.value.length; j++) {
                        answer.push(this.multiform['controls'].repeatentry['controls'][i]['controls'].repeatEntryCorrect['controls'][j]['controls']['correct'].value);
                    }
                    console.log(answer, 'answer');
                    list = {
                        match_case: this.multiform['controls'].repeatentry['controls'][i]['controls']['matchCase'].value == true ? '1' : '0',
                        points: this.multiform['controls'].repeatentry['controls'][i]['controls']['points'].value,
                        answer,
                        question: this.multiform['controls'].repeatentry['controls'][i]['controls']['question'].value,
                        answer_explanation: this.multiform['controls'].repeatentry['controls'][i]['controls']['explain'].value,
                        answer_id: this.multiform['controls'].repeatentry['controls'][i]['controls']['answerId'].value,
                        page_no: this.multiform['controls'].repeatentry['controls'][i]['controls']['page'].value,
                        auto_grade: this.multiform['controls'].repeatentry['controls'][i]['controls']['autograde'].value == true ? '1' : '0',
                        question_no: this.countList,
                        sub_question_no: this.hide == false ? this.countList + list11 : this.countList,
                        question_type_id: '10',
                        difficulty: '0',
                        allow_exact_match: '0',
                        allow_any_text: '0',
                        minimum_line: '0',
                        array: [],
                        options: '',
                    };
                    this.subQuestionEntry.push(list);
                    if (value == 'add') {
                        if (this.totalsub[this.sectionCount] == null) {
                            this.totalsub[this.sectionCount] = { heading: '', section: [] };
                        }
                        this.totalsub[this.sectionCount].section.push({
                            sub: list.sub_question_no,
                            answer: list.answer,
                            quesId: '0',
                            typeId: list.question_type_id,
                            autoGrade: list.auto_grade,
                            matchCase: list.match_case,
                            quesNo: list.question_no,
                            explain: list.answer_explanation,
                            pageNo: list.page_no,
                            option: list.options,
                            array: list.array,
                            question: list.question
                        });
                        console.log(this.totalsub, 'this.totalsub add');
                    }
                }
                // this.subQuestionMulti = list;
                console.log(this.subQuestionEntry, 'subQuestionEntry1');
                // console.log(this.multiform['controls'].repeatentry.value, 'subQuestionEntry');
                // this.showdropdown = true;
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = { heading: '', section: [] };
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: this.multiform['controls'].repeatentry.value.length == 1 ? 0 : 1,
                        sub_questions: this.subQuestionEntry
                    });
                    console.log(this.subQuestion, 'subQuestion');
                }
                else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = { heading: this.secHeadingArray[i], section: [] };
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: this.multiform['controls'].repeatentry.value.length == 1 ? 0 : 1,
                                        sub_questions: this.subQuestionEntry
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    const list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({
                                        sub: list.sub_question_no,
                                        answer: list.answer,
                                        new_answer: list.new_answer,
                                        quesId: list.answer_id,
                                        autoGrade: list.auto_grade,
                                        matchCase: list.match_case,
                                        typeId: list.question_type_id,
                                        quesNo: list.question_no,
                                        pageNo: list.page_no,
                                        explain: list.answer_explanation,
                                        editor: list?.editor_answer,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question
                                    });
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatentry.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseFloat(a.quesNo) - parseFloat(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseFloat(a.sub_questions[0].question_no) - parseFloat(b.sub_questions[0].question_no));
                }
                console.log(this.subQuestion, 'subQuestion');
                const controlEntry = this.multiform.controls['repeatentry'];
                for (let i = controlEntry.length; i >= 1; i--) {
                    controlEntry.reset();
                    this.multiform['controls'].repeatentry['controls'][0]['controls']['points'].patchValue('1');
                    this.multiform['controls'].repeatentry['controls'][0]['controls']['autograde'].patchValue(false);
                    const correctAnswer = this.multiform.controls['repeatentry']['controls'][0]['controls']['repeatEntryCorrect'];
                    for (let j = correctAnswer.controls.length; j >= 1; j--) {
                        correctAnswer.removeAt(j);
                    }
                    controlEntry.removeAt(i);
                }
                this.hide = true;
                if (this.isBulkUpload) {
                    this.multiform.get('repeatentry').reset();
                    this.bulkAddingCount++;
                    if (this.bulkAddingCount === this.bulkFormData.noOfQuestions) {
                        this.entryDialog = false;
                        this.isBulkUpload = false;
                    }
                    else {
                        this.question('10');
                    }
                }
                else {
                    this.entryDialog = false;
                }
                this.clickEvent();
            }
            else {
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }, 500);
    }
    submitBlanks(value) {
        this.blankValid = true;
        console.log(this.fillInArray, 'this.fillInArray');
        for (let i = 0; i < this.fillInArray.length; i++) {
            if (this.fillInArray[i].input.length != 0) {
                this.fillInArray[i].input.forEach((val) => {
                    if (val.value == '') {
                        this.blankValid = false;
                    }
                    else {
                        val.value = val.value.trim();
                    }
                });
            }
            else {
                this.blankValid = false;
            }
        }
        setTimeout(() => {
            if (this.multiform['controls'].repeatblanks.valid && this.blankValid && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionBlanks = [];
                let list;
                const changedQuesNo = this.countList;
                console.log(this.multiform['controls'].repeatblanks.value.length, 'blank array length');
                for (let i = 0; i < this.multiform['controls'].repeatblanks.value.length; i++) {
                    const list11 = ((i + 1) + 9).toString(36).toLowerCase();
                    list = {
                        match_case: '0',
                        points: this.multiform['controls'].repeatblanks['controls'][i]['controls']['points'].value,
                        answer: this.fillInArray[i].input,
                        question: this.multiform['controls'].repeatblanks['controls'][i]['controls']['question'].value,
                        answer_explanation: this.multiform['controls'].repeatblanks['controls'][i]['controls']['explain'].value,
                        answer_id: this.multiform['controls'].repeatblanks['controls'][i]['controls']['answerId'].value,
                        page_no: this.multiform['controls'].repeatblanks['controls'][i]['controls']['page'].value,
                        auto_grade: this.multiform['controls'].repeatblanks['controls'][i]['controls']['autograde'].value == true ? '1' : '0',
                        question_no: this.countList,
                        sub_question_no: this.hide == false ? this.countList + list11 : this.countList,
                        question_type_id: '54',
                        difficulty: '0',
                        allow_exact_match: '0',
                        allow_any_text: '0',
                        minimum_line: '0',
                        array: [],
                        options: '',
                    };
                    this.subQuestionBlanks.push(list);
                    if (value == 'add') {
                        if (this.totalsub[this.sectionCount] == null) {
                            this.totalsub[this.sectionCount] = { heading: '', section: [] };
                        }
                        this.totalsub[this.sectionCount].section.push({
                            sub: list.sub_question_no,
                            answer: list.answer,
                            quesId: '0',
                            typeId: list.question_type_id,
                            autoGrade: list.auto_grade,
                            explain: list.answer_explanation,
                            matchCase: list.match_case,
                            quesNo: list.question_no,
                            pageNo: list.page_no,
                            option: list.options,
                            array: list.array,
                            question: list.question
                        });
                        console.log(this.totalsub, 'this.totalsub add');
                    }
                }
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = { heading: '', section: [] };
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: this.multiform['controls'].repeatblanks.value.length == 1 ? 0 : 1,
                        sub_questions: this.subQuestionBlanks
                    });
                }
                else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = { heading: this.secHeadingArray[i], section: [] };
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: this.multiform['controls'].repeatblanks.value.length == 1 ? 0 : 1,
                                        sub_questions: this.subQuestionBlanks
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    let list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({
                                        sub: list.sub_question_no,
                                        answer: list.answer,
                                        quesId: list.answer_id,
                                        autoGrade: list.auto_grade,
                                        matchCase: list.match_case,
                                        pageNo: list.page_no,
                                        typeId: list.question_type_id,
                                        explain: list.answer_explanation,
                                        quesNo: list.question_no,
                                        editor: list?.editor_answer,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question
                                    });
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatblanks.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseFloat(a.quesNo) - parseFloat(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseFloat(a.sub_questions[0].question_no) - parseFloat(b.sub_questions[0].question_no));
                }
                console.log(this.subQuestion, 'subQuestion');
                const controlBlanks = this.multiform.controls['repeatblanks'];
                for (let i = controlBlanks.length; i >= 1; i--) {
                    controlBlanks.reset();
                    this.multiform['controls'].repeatblanks['controls'][0]['controls']['points'].patchValue('1');
                    this.multiform['controls'].repeatblanks['controls'][0]['controls']['autograde'].patchValue(false);
                    controlBlanks.removeAt(i);
                }
                this.hide = true;
                if (this.isBulkUpload) {
                    this.multiform.get('repeatblanks').reset();
                    this.bulkAddingCount++;
                    if (this.bulkAddingCount === this.bulkFormData.noOfQuestions) {
                        this.blankDialog = false;
                        this.isBulkUpload = false;
                    }
                    else {
                        this.question('54');
                    }
                }
                else {
                    this.blankDialog = false;
                }
                this.fillInArray = [];
                this.clickEvent();
            }
            else if (!this.blankValid) {
                this.toastr.error('Question and Answers are Mandatory Fields');
            }
            else {
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }, 500);
    }
    getSub(event) {
        this.subtype = event.target.textContent;
        console.log(this.subtype, 'ssub');
    }
    deleteImg() {
        this.imagepath = '';
    }
    submitEssay(value) {
        setTimeout(() => {
            if (this.multiform['controls'].repeatessay.valid && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionEssay = [];
                let list;
                const changedQuesNo = this.countList;
                console.log(this.multiform['controls'].repeatessay.value, 'listlist');
                for (let i = 0; i < this.multiform['controls'].repeatessay.value.length; i++) {
                    const list11 = ((i + 1) + 9).toString(36).toLowerCase();
                    list = {
                        options: this.multiform['controls'].repeatessay['controls'][i]['controls']['lines'].value,
                        points: this.multiform['controls'].repeatessay['controls'][i]['controls']['points'].value,
                        question_no: this.countList,
                        sub_question_no: this.hide == false ? this.countList + list11 : this.countList,
                        question_type_id: '20',
                        answer: [this.multiform['controls'].repeatessay['controls'][i]['controls']['lines'].value],
                        page_no: this.multiform['controls'].repeatessay['controls'][i]['controls']['page'].value,
                        difficulty: '0',
                        allow_exact_match: '0',
                        allow_any_text: '0',
                        match_case: '0',
                        minimum_line: this.multiform['controls'].repeatessay['controls'][i]['controls']['lines'].value,
                        question: this.multiform['controls'].repeatessay['controls'][i]['controls']['question'].value,
                        answer_explanation: this.multiform['controls'].repeatessay['controls'][i]['controls']['explain'].value,
                        answer_id: this.multiform['controls'].repeatessay['controls'][i]['controls']['answerId'].value,
                        auto_grade: this.multiform['controls'].repeatessay['controls'][i]['controls']['autograde'].value == true ? '1' : '0',
                        array: []
                    };
                    this.subQuestionEssay.push(list);
                    if (value == 'add') {
                        if (this.totalsub[this.sectionCount] == null) {
                            this.totalsub[this.sectionCount] = { heading: '', section: [] };
                        }
                        this.totalsub[this.sectionCount].section.push({
                            sub: list.sub_question_no,
                            answer: list.answer,
                            typeId: list.question_type_id,
                            quesNo: list.question_no,
                            quesId: '0',
                            autoGrade: list.auto_grade,
                            explain: list.answer_explanation,
                            matchCase: list.match_case,
                            pageNo: list.page_no,
                            option: list.options,
                            array: list.array,
                            question: list.question
                        });
                        console.log(this.totalsub, 'this.totalsub add');
                    }
                }
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = { heading: '', section: [] };
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: this.multiform['controls'].repeatessay.value.length == 1 ? 0 : 1,
                        sub_questions: this.subQuestionEssay
                    });
                    console.log(this.subQuestion, 'subQuestion');
                }
                else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = { heading: this.secHeadingArray[i], section: [] };
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: this.multiform['controls'].repeatessay.value.length == 1 ? 0 : 1,
                                        sub_questions: this.subQuestionEssay
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    let list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({
                                        sub: list.sub_question_no,
                                        answer: list.answer,
                                        quesId: list.answer_id,
                                        typeId: list.question_type_id,
                                        quesNo: list.question_no,
                                        autoGrade: list.auto_grade,
                                        pageNo: list.page_no,
                                        explain: list.answer_explanation,
                                        matchCase: list.match_case,
                                        editor: list?.editor_answer,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question
                                    });
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatessay.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseFloat(a.quesNo) - parseFloat(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseFloat(a.sub_questions[0].question_no) - parseFloat(b.sub_questions[0].question_no));
                }
                console.log(this.subQuestion, 'subQuestion');
                const controlEssay = this.multiform.controls['repeatessay'];
                for (let i = controlEssay.length; i >= 1; i--) {
                    controlEssay.reset();
                    this.multiform['controls'].repeatessay['controls'][0]['controls']['points'].patchValue('1');
                    this.multiform['controls'].repeatessay['controls'][0]['controls']['autograde'].patchValue(false);
                    controlEssay.removeAt(i);
                }
                this.hide = true;
                if (this.isBulkUpload) {
                    this.multiform.get('repeatessay').reset();
                    this.bulkAddingCount++;
                    if (this.bulkAddingCount === this.bulkFormData.noOfQuestions) {
                        this.essayDialog = false;
                        this.isBulkUpload = false;
                    }
                    else {
                        this.question('20');
                    }
                }
                else {
                    this.essayDialog = false;
                }
                this.clickEvent();
            }
            else {
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }, 500);
    }
    submitNumeric(value) {
        this.numericAnswer.forEach((items, index) => {
            items.forEach((secondItem, secondIndex) => {
                if (this.multiform['controls'].repeatnumeric['controls'][index]) {
                    if (this.multiform['controls'].repeatnumeric['controls'][index]['controls']['repeatNumericCorrect']['controls'][secondIndex]) {
                        this.multiform['controls'].repeatnumeric['controls'][index]['controls']['repeatNumericCorrect']['controls'][secondIndex]['controls']['correct'].patchValue(secondItem.content);
                    }
                }
            });
        });
        setTimeout(() => {
            console.log(this.multiform['controls'].repeatnumeric.value, 'this.multiform[\'controls\'].repeatnumeric.valid');
            if (this.multiform['controls'].repeatnumeric.valid && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionNumeric = [];
                let list;
                const changedQuesNo = this.countList;
                for (let i = 0; i < this.multiform['controls'].repeatnumeric.value.length; i++) {
                    const list11 = ((i + 1) + 9).toString(36).toLowerCase();
                    const answer = [];
                    for (let j = 0; j < this.multiform['controls'].repeatnumeric['controls'][i]['controls'].repeatNumericCorrect.value.length; j++) {
                        answer.push(this.multiform['controls'].repeatnumeric['controls'][i]['controls'].repeatNumericCorrect['controls'][j]['controls']['correct'].value);
                    }
                    console.log(answer, 'answer');
                    list = {
                        options: '',
                        points: this.multiform['controls'].repeatnumeric['controls'][i]['controls']['points'].value,
                        question_no: this.countList,
                        sub_question_no: this.hide == false ? this.countList + list11 : this.countList,
                        question_type_id: '30',
                        answer,
                        page_no: this.multiform['controls'].repeatnumeric['controls'][i]['controls']['page'].value,
                        difficulty: '0',
                        allow_exact_match: '0',
                        allow_any_text: '0',
                        match_case: '0',
                        minimum_line: '0',
                        question: this.multiform['controls'].repeatnumeric['controls'][i]['controls']['question'].value,
                        answer_explanation: this.multiform['controls'].repeatnumeric['controls'][i]['controls']['explain'].value,
                        answer_id: this.multiform['controls'].repeatnumeric['controls'][i]['controls']['answerId'].value,
                        auto_grade: this.multiform['controls'].repeatnumeric['controls'][i]['controls']['autograde'].value == true ? '1' : '0',
                        array: []
                    };
                    this.subQuestionNumeric.push(list);
                    if (value == 'add') {
                        if (this.totalsub[this.sectionCount] == null) {
                            this.totalsub[this.sectionCount] = { heading: '', section: [] };
                        }
                        this.totalsub[this.sectionCount].section.push({
                            sub: list.sub_question_no,
                            answer: list.answer,
                            quesId: '0',
                            typeId: list.question_type_id,
                            autoGrade: list.auto_grade,
                            matchCase: list.match_case,
                            quesNo: list.question_no,
                            pageNo: list.page_no,
                            explain: list.answer_explanation,
                            option: list.options,
                            array: list.array,
                            question: list.question
                        });
                    }
                }
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = { heading: '', section: [] };
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: this.multiform['controls'].repeatnumeric.value.length == 1 ? 0 : 1,
                        sub_questions: this.subQuestionNumeric
                    });
                }
                else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = { heading: this.secHeadingArray[i], section: [] };
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: this.multiform['controls'].repeatnumeric.value.length == 1 ? 0 : 1,
                                        sub_questions: this.subQuestionNumeric
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    const list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({
                                        sub: list.sub_question_no,
                                        answer: list.answer,
                                        quesId: list.answer_id,
                                        typeId: list.question_type_id,
                                        autoGrade: list.auto_grade,
                                        editor: list?.editor_answer,
                                        matchCase: list.match_case,
                                        quesNo: list.question_no,
                                        pageNo: list.page_no,
                                        explain: list.answer_explanation,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question
                                    });
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatnumeric.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseFloat(a.quesNo) - parseFloat(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseFloat(a.sub_questions[0].question_no) - parseFloat(b.sub_questions[0].question_no));
                }
                const controlNumeric = this.multiform.controls['repeatnumeric'];
                for (let i = controlNumeric.length; i >= 1; i--) {
                    controlNumeric.reset();
                    this.multiform['controls'].repeatnumeric['controls'][0]['controls']['points'].patchValue('1');
                    this.multiform['controls'].repeatnumeric['controls'][0]['controls']['autograde'].patchValue(true);
                    const correctAnswer = this.multiform.controls['repeatnumeric']['controls'][0]['controls']['repeatNumericCorrect'];
                    for (let j = correctAnswer.controls.length; j >= 1; j--) {
                        correctAnswer.removeAt(j);
                    }
                    controlNumeric.removeAt(i);
                }
                this.hide = true;
                if (this.isBulkUpload) {
                    this.multiform.get('repeatnumeric').reset();
                    this.bulkAddingCount++;
                    if (this.bulkAddingCount === this.bulkFormData.noOfQuestions) {
                        this.numericDialog = false;
                        this.isBulkUpload = false;
                    }
                    else {
                        this.question('30');
                    }
                }
                else {
                    this.numericDialog = false;
                }
                this.clickEvent();
            }
            else {
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }, 500);
    }
    clickEvent() {
        if (!this.mathDelayer) {
            this.mathDelayer = true;
            setTimeout(() => {
                document.getElementById('myDiv').click();
            }, 1000);
        }
        setTimeout(() => {
            this.mathDelayer = false;
        }, 1500);
    }
    submitGraph(value) {
        setTimeout(() => {
            if (this.graphform.valid && this.graphBoardValue.attr && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionGraph = [];
                let list;
                let changedQuesNo = this.countList;
                let objects = {};
                for (let el in this.graphBoardValue.objects) {
                    let inherit = [];
                    this.graphBoardValue.objects[el].inherits.forEach((item) => {
                        inherit.push({ name: item.name });
                    });
                    objects[el] = {
                        elType: this.graphBoardValue.objects[el].elType,
                        coords: this.graphBoardValue.objects[el].coords,
                        name: this.graphBoardValue.objects[el].name,
                        inherits: inherit,
                        parents: this.graphBoardValue.objects[el].parents,
                        splinePoints: this.graphBoardValue.objects[el].splinePoints,
                        quadraticform: this.graphBoardValue.objects[el].quadraticform,
                    };
                }
                const graph = {
                    attr: this.graphBoardValue.attr,
                    objects
                };
                this.graphform.controls.answer.patchValue(stringify(graph));
                list = {
                    options: '',
                    points: this.graphform.controls.points.value,
                    question_no: this.countList,
                    sub_question_no: this.countList,
                    question_type_id: '40',
                    answer: this.graphform.controls.answer.value,
                    difficulty: '0',
                    allow_exact_match: '0',
                    allow_any_text: '0',
                    match_case: '0',
                    minimum_line: '0',
                    editor_answer: this.graphform.controls.editorAnswer.value,
                    question: this.graphform.controls.question.value,
                    page_no: this.graphform.controls.page.value,
                    answer_explanation: this.graphform.controls.explain.value,
                    answer_id: this.graphform.controls.answerId.value,
                    auto_grade: '0',
                    array: []
                };
                this.subQuestionGraph.push(list);
                if (value == 'add') {
                    if (this.totalsub[this.sectionCount] == null) {
                        this.totalsub[this.sectionCount] = { heading: '', section: [] };
                    }
                    this.totalsub[this.sectionCount].section.push({
                        sub: list.sub_question_no,
                        answer: list.answer,
                        quesId: '0',
                        typeId: list.question_type_id,
                        autoGrade: list.auto_grade,
                        explain: list.answer_explanation,
                        matchCase: list.match_case,
                        quesNo: list.question_no,
                        pageNo: list.page_no,
                        option: list.options,
                        array: list.array,
                        editor: list.editor_answer,
                        question: list.question
                    });
                }
                // }
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = { heading: '', section: [] };
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: 0,
                        sub_questions: this.subQuestionGraph
                    });
                }
                else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = { heading: this.secHeadingArray[i], section: [] };
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: 0,
                                        sub_questions: this.subQuestionGraph
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    let list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({
                                        sub: list.sub_question_no,
                                        answer: list.answer,
                                        quesId: list.answer_id,
                                        typeId: list.question_type_id,
                                        autoGrade: list.auto_grade,
                                        matchCase: list.match_case,
                                        editor: list?.editor_answer,
                                        explain: list.answer_explanation,
                                        quesNo: list.question_no,
                                        pageNo: list.page_no,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question
                                    });
                                }
                                this.dragQuestionRevise(1, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseFloat(a.quesNo) - parseFloat(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseFloat(a.sub_questions[0].question_no) - parseFloat(b.sub_questions[0].question_no));
                }
                this.hide = true;
                if (this.isBulkUpload) {
                    this.showGraph = false;
                    this.graphform.reset();
                    this.bulkAddingCount++;
                    if (this.bulkAddingCount === this.bulkFormData.noOfQuestions) {
                        this.graphDialog = false;
                        this.showGraph = true;
                    }
                    else {
                        // $('#log40').attr('data-target');
                        // $('#log40').attr('data-toggle', 'modal');
                        this.question('40');
                        setTimeout(() => {
                            this.showGraph = true;
                        });
                    }
                }
                else {
                    this.graphDialog = false;
                }
                this.clickEvent();
            }
            else {
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }, 500);
    }
    updateGraphValue(type) {
        // this.childGraph.submitValue();
        this.submitGraph(type);
    }
    graphDetail(val) {
        this.graphShow = parse(val);
        this.modalRef = this.modalService.open(this.viewGraph, { size: 'xl', backdrop: 'static' });
    }
    deletePdf() {
        this.answerpdfpath = [];
        this.attachment1.nativeElement.value = '';
    }
    deleteVersion() {
        this.teacherVersion = [];
        this.attachment2.nativeElement.value = '';
    }
    getEmitedValue(event) {
        this.markType = event;
    }
    getGraphQuestionValue(event, id) {
        this.graphQuestion[id] = event;
        this.graphform.controls.question.patchValue(event.content);
    }
    getGraphAnswerValue(event) {
        this.graphBoardValue = event;
    }
    getEditorAnswerValue(event) {
        this.graphEditorAnswerValue = event;
        if (this.graphform.controls) {
            this.graphform.controls.editorAnswer.patchValue(event.content);
        }
    }
    getQuestionValue(event, id, formarray) {
        this.numericQuestion[id] = event;
        if (formarray[id]) {
            formarray[id]['controls']['question'].patchValue(event.content);
        }
    }
    getExplanationValue(event, id, formarray) {
        this.numericExplain[id] = event;
        if (formarray[id]) {
            formarray[id]['controls']['explain'].patchValue(event.content);
        }
    }
    getGraphExplain(event, id) {
        this.numericExplain[id] = event;
        if (this.graphform.controls) {
            this.graphform.controls.explain.patchValue(event.content);
        }
    }
    getFillinQuestionValue(event, id) {
        if (!this.deleteFillBlanks) {
            this.numericQuestion[id] = event;
            if (this.multiform.get('repeatblanks')['controls'][id]) {
                this.multiform.get('repeatblanks')['controls'][id]['controls']['question'].patchValue(this.numericQuestion[id].content);
            }
            // this.multiform?.controls?.repeatblanks[id]?.controls?.question.patchValue(event.content);
            let val = event.content.split(' ');
            let count = 0;
            if (this.fillInArray[id]) {
            }
            else {
                this.fillInArray[id] = { input: [] };
            }
            val.forEach((item, index) => {
                if (item == 'class="inputValue"') {
                    count += 1;
                    if (count > this.fillInArray[id].input.length) {
                        this.fillInArray[id].input.push({ id: index + '-input', index, value: '' });
                    }
                }
            });
            const spl = this.fillInArray[id].input.length - count;
            if (spl != 0) {
                this.fillInArray[id].input.splice(this.fillInArray[id].input.length - 1, spl);
            }
        }
    }
    getNumericAnswerValue(event, id, index) {
        if (!this.numericAnswer[id]) {
            this.numericAnswer[id] = [];
        }
        this.numericAnswer[id][index] = event;
        if (this.multiform['controls']?.repeatnumeric['controls'][id]) {
            this.multiform['controls'].repeatnumeric['controls'][id]['controls']['repeatNumericCorrect']['controls'][index]?.controls['correct'].patchValue(event.content);
        }
    }
    addBulkQuestion() {
        this.modalRef = this.modalService.open(this.addBulk, { size: 'lg', backdrop: 'static' });
    }
    createBulkQues() {
        if (this.bulkQuestionForm.valid) {
            this.isBulkUpload = true;
            this.bulkFormData = this.bulkQuestionForm.value;
            this.bulkAddingCount = 0;
            const questionType = this.bulkQuestionForm.controls.questionType.value;
            console.log(this.bulkFormData, 'bulkFormData');
            if (this.bulkFormData.section === '') {
                this.addSec(this.bulkFormData.sectionName);
            }
            else if (this.bulkFormData.section !== undefined && this.bulkFormData.section !== null) {
                this.sectionCount = this.bulkFormData.section;
                if (this.bulkQuestionForm.controls.questionType.value != '40') {
                    this.multiform.controls.head.patchValue(this.sectionCount);
                }
                else {
                    this.graphform.controls.head.patchValue(this.sectionCount);
                }
            }
            this.modalRef.close();
            this.question(questionType);
            setTimeout(() => {
                this.bulkQuestionForm.reset();
            }, 500);
        }
        else {
            this.toastr.error('Please Enter Mandatory Fields');
        }
    }
    async editAction(list, event, data, section, index) {
        const id = list.typeId;
        this.numericQuestion = [];
        this.numericExplain = [];
        this.deleteFillBlanks = false;
        // this.shapesType = '';
        this.fillInArray = [];
        this.submitType = 'edit';
        this.editIndexValue = index;
        this.editQuesNo = list.quesNo;
        this.sectionNo = section;
        this.countList = list.quesNo;
        if (id == '1') {
            this.multiDialog = true;
            this.showdropdown = true;
            const controlmulti = this.multiform.controls['repeatlink'];
            for (let i = controlmulti.length; i >= 0; i--) {
                controlmulti.reset();
                controlmulti.removeAt(i);
            }
        }
        else if (id == '3') {
            // this.countList = this.dragCount.length + 1;
            this.trueDialog = true;
            this.showdropdown = true;
            const controlChoose = this.multiform.controls['repeatchoose'];
            for (let i = controlChoose.length; i >= 0; i--) {
                controlChoose.reset();
                controlChoose.removeAt(i);
            }
        }
        else if (id == '9') {
            // this.countList = this.dragCount.length + 1;
            this.choiceDialog = true;
            this.showdropdown = true;
            const controlPlus = this.multiform.controls['repeatplus'];
            for (let i = controlPlus.length; i >= 0; i--) {
                controlPlus.reset();
                controlPlus.removeAt(i);
            }
        }
        else if (id == '10') {
            // this.countList = this.dragCount.length + 1;
            this.entryDialog = true;
            this.showdropdown = true;
            const controlEntry = this.multiform.controls['repeatentry'];
            for (let i = controlEntry.length; i >= 0; i--) {
                controlEntry.reset();
                controlEntry.removeAt(i);
            }
        }
        else if (id == '20') {
            // this.countList = this.dragCount.length + 1;
            this.essayDialog = true;
            this.showdropdown = true;
            const controlEssay = this.multiform.controls['repeatessay'];
            for (let i = controlEssay.length; i >= 0; i--) {
                controlEssay.removeAt(i);
            }
        }
        else if (id == '30') {
            // this.modalRef = this.modalService.open(this.numericData,  {size: 'md', backdrop: 'static'});
            this.numericDialog = true;
            this.showdropdown = true;
            const controlNumeric = this.multiform.controls['repeatnumeric'];
            for (let i = controlNumeric.length; i >= 0; i--) {
                controlNumeric.removeAt(i);
            }
        }
        else if (id == '40') {
            this.graphDialog = true;
            this.graphBoardValue = '';
            // this.modalRef = this.modalService.open(this.graph,  {size: 'lg', backdrop: 'static'});
            this.showdropdown = true;
        }
        else if (id == '54') {
            this.showdropdown = true;
            this.blankDialog = true;
            const controlBlanks = this.multiform.controls['repeatblanks'];
            for (let i = controlBlanks.length; i >= 0; i--) {
                controlBlanks.removeAt(i);
            }
        }
        let valid = 0;
        console.log(event, 'event');
        console.log(section, 'section');
        console.log(list.quesNo, 'list.quesNo');
        for (let i = 0; i < event.length; i++) {
            valid += 1;
            if (section == i) {
                for (let x = 0; x < event[i].section.length; x++) {
                    for (let j = 0; j < event[i].section[x].sub_questions.length; j++) {
                        if (list.quesNo == event[i].section[x].sub_questions[j].question_no) {
                            this.InitialArrayLength = event[i].section[x].sub_questions.length;
                            if (event[i].section[x].sub_questions.length > 1) {
                                this.hide = false;
                            }
                            if (id == '1') {
                                this.repeatlink = this.multiform.get('repeatlink');
                                this.repeatlink.push(this.createlink());
                                this.multiform['controls'].repeatlink['controls'][j]['controls']['option'].patchValue(event[i].section[x].sub_questions[j].options);
                                this.multiform['controls'].repeatlink['controls'][j]['controls']['answerId'].patchValue(event[i].section[x].sub_questions[j].answer_id);
                                this.multiform['controls'].repeatlink['controls'][j]['controls']['points'].patchValue(event[i].section[x].sub_questions[j].points);
                                this.multiform['controls'].repeatlink['controls'][j]['controls']['page'].patchValue(event[i].section[x].sub_questions[j].page_no);
                                this.multiform['controls'].repeatlink['controls'][j]['controls']['array'].patchValue(event[i].section[x].sub_questions[j].array);
                                this.multiform['controls'].repeatlink['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                this.multiform['controls'].repeatlink['controls'][j]['controls']['autograde'].patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                                this.multiform['controls'].repeatlink['controls'][j]['controls']['array'].value.forEach((val, activid) => {
                                    event[i].section[x].sub_questions[j].answer.forEach((items) => {
                                        if (val.toLowerCase() == items.toLowerCase()) {
                                            this.multiform['controls'].repeatlink['controls'][j]['controls']['active'].patchValue(activid);
                                            this.multiform['controls'].repeatlink['controls'][j]['controls']['correct'].patchValue(val);
                                        }
                                    });
                                });
                            }
                            else if (id == '3') {
                                this.repeatchoose = this.multiform.get('repeatchoose');
                                this.repeatchoose.push(this.createchoose());
                                this.multiform['controls'].repeatchoose['controls'][j]['controls']['optradio'].patchValue(event[i].section[x].sub_questions[j].answer[0]);
                                this.multiform['controls'].repeatchoose['controls'][j]['controls']['points1'].patchValue(event[i].section[x].sub_questions[j].points);
                                this.multiform['controls'].repeatchoose['controls'][j]['controls']['page'].patchValue(event[i].section[x].sub_questions[j].page_no);
                                this.multiform['controls'].repeatchoose['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                this.multiform['controls'].repeatchoose['controls'][j]['controls']['answerId'].patchValue(event[i].section[x].sub_questions[j].answer_id);
                                this.multiform['controls'].repeatchoose['controls'][j]['controls']['autograde'].patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                            }
                            else if (id == '9') {
                                this.repeatplus = this.multiform.get('repeatplus');
                                this.repeatplus.push(this.truelink());
                                this.repeattotalplus = this.multiform['controls'].repeatplus['controls'][j]['controls']['choiceList']['controls'];
                                for (let k = 0; k < event[i].section[x].sub_questions[j].array.length - 1; k++) {
                                    this.repeattotalplus.push(this.addlink());
                                }
                                const answerOptionList = [];
                                for (let k = 0; k < event[i].section[x].sub_questions[j].array.length; k++) {
                                    const val = event[i].section[x].sub_questions[j].array[k].choice;
                                    this.repeattotalplus[k]['controls'].choice.patchValue(val);
                                    answerOptionList.push({ choice: val });
                                }
                                this.multiform['controls'].repeatplus['controls'][j]['controls']['optionList']['controls'] = [];
                                this.multiform['controls'].repeatplus['controls'][j]['controls']['autograde'].patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                                this.multiform['controls'].repeatplus['controls'][j]['controls'].optionList.patchValue(answerOptionList);
                                for (let z = 0; z < this.multiform['controls'].repeatplus['controls'][j]['controls']['optionList'].value.length; z++) {
                                    const correct = this.multiform['controls'].repeatplus['controls'][j]['controls']['optionList'].value[z];
                                    event[i].section[x].sub_questions[j].answer.forEach((items) => {
                                        if (correct.choice == items) {
                                            this.multiform['controls'].repeatplus['controls'][j]['controls']['active'].patchValue(z);
                                            this.multiform['controls'].repeatplus['controls'][j]['controls']['answer'].patchValue(items);
                                        }
                                    });
                                }
                                this.multiform['controls'].repeatplus['controls'][j]['controls']['points'].patchValue(event[i].section[x].sub_questions[j].points);
                                this.multiform['controls'].repeatplus['controls'][j]['controls']['page'].patchValue(event[i].section[x].sub_questions[j].page_no);
                                this.multiform['controls'].repeatplus['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                this.multiform['controls'].repeatplus['controls'][j]['controls']['answerId'].patchValue(event[i].section[x].sub_questions[j].answer_id);
                            }
                            else if (id == '10') {
                                this.repeatentry = this.multiform.get('repeatentry');
                                this.repeatentry.push(this.createentry());
                                const answer = event[i].section[x].sub_questions[j].answer;
                                console.log(answer, 'aswer_new');
                                for (let k = 0; k < answer.length; k++) {
                                    if (k == 0) {
                                        this.multiform['controls'].repeatentry['controls'][j]['controls']['repeatEntryCorrect']['controls'][k]['controls']['correct'].patchValue(answer[k]);
                                    }
                                    else {
                                        this.multiform['controls'].repeatentry['controls'][j]['controls']['repeatEntryCorrect'].push(this.createNewCorrectAnswerForTextEntry(answer[k]));
                                    }
                                }
                                this.multiform['controls'].repeatentry['controls'][j]['controls']['points'].patchValue(event[i].section[x].sub_questions[j].points);
                                this.multiform['controls'].repeatentry['controls'][j]['controls']['page'].patchValue(event[i].section[x].sub_questions[j].page_no);
                                this.multiform['controls'].repeatentry['controls'][j]['controls']['matchCase'].patchValue(event[i].section[x].sub_questions[j].match_case == '1');
                                this.multiform['controls'].repeatentry['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                this.multiform['controls'].repeatentry['controls'][j]['controls']['answerId'].patchValue(event[i].section[x].sub_questions[j].answer_id);
                                this.multiform['controls'].repeatentry['controls'][j]['controls']['autograde'].patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                            }
                            else if (id == '20') {
                                this.repeatessay = this.multiform.get('repeatessay');
                                this.repeatessay.push(this.createessay());
                                this.multiform['controls'].repeatessay['controls'][j]['controls']['lines'].patchValue(event[i].section[x].sub_questions[j].minimum_line);
                                this.multiform['controls'].repeatessay['controls'][j]['controls']['points'].patchValue(event[i].section[x].sub_questions[j].points);
                                this.multiform['controls'].repeatessay['controls'][j]['controls']['page'].patchValue(event[i].section[x].sub_questions[j].page_no);
                                this.multiform['controls'].repeatessay['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                this.multiform['controls'].repeatessay['controls'][j]['controls']['answerId'].patchValue(event[i].section[x].sub_questions[j].answer_id);
                                this.multiform['controls'].repeatessay['controls'][j]['controls']['autograde'].patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                            }
                            else if (id == '30') {
                                this.repeatnumeric = this.multiform.get('repeatnumeric');
                                this.repeatnumeric.push(this.createnumeric());
                                const answer = event[i].section[x].sub_questions[j].answer;
                                console.log(answer, 'aswer_new');
                                for (let k = 0; k < answer.length; k++) {
                                    if (k == 0) {
                                        this.multiform['controls'].repeatnumeric['controls'][j]['controls']['repeatNumericCorrect']['controls'][k]['controls']['correct'].patchValue(answer[k]);
                                        console.log(this.multiform['controls'].repeatnumeric['controls'][j]['controls']['repeatNumericCorrect']['controls'][k]['controls']['correct'].value, 'correct_id');
                                    }
                                    else {
                                        this.multiform['controls'].repeatnumeric['controls'][j]['controls']['repeatNumericCorrect'].push(this.createNewCorrectAnswerForNumericEntry(answer[k]));
                                        console.log(this.multiform['controls'].repeatnumeric['controls'][j]['controls']['repeatNumericCorrect']['controls'][k]['controls']['correct'].value, 'correct_else');
                                    }
                                }
                                // this.multiform['controls'].repeatnumeric['controls'][j]['controls']['answer'].patchValue(event[i].section[x].sub_questions[j].answer);
                                this.multiform['controls'].repeatnumeric['controls'][j]['controls']['points'].patchValue(event[i].section[x].sub_questions[j].points);
                                this.multiform['controls'].repeatnumeric['controls'][j]['controls']['page'].patchValue(event[i].section[x].sub_questions[j].page_no);
                                this.multiform['controls'].repeatnumeric['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                this.multiform['controls'].repeatnumeric['controls'][j]['controls']['answerId'].patchValue(event[i].section[x].sub_questions[j].answer_id);
                                this.multiform['controls'].repeatnumeric['controls'][j]['controls']['autograde'].patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                            }
                            else if (id == '40') {
                                this.graphBoardValue = parse(event[i].section[x].sub_questions[j].answer);
                                this.graphform.controls.answer.patchValue(event[i].section[x].sub_questions[j].answer);
                                this.graphform.controls.points.patchValue(event[i].section[x].sub_questions[j].points);
                                this.graphform.controls.page.patchValue(event[i].section[x].sub_questions[j].page_no);
                                this.graphform.controls.question.patchValue(event[i].section[x].sub_questions[j].question);
                                this.graphform.controls.answerId.patchValue(event[i].section[x].sub_questions[j].answer_id);
                                this.graphform.controls.editorAnswer.patchValue(event[i].section[x].sub_questions[j].editor_answer);
                                this.graphform.controls.autograde.patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                            }
                            else if (id == '54') {
                                this.repeatblanks = this.multiform.get('repeatblanks');
                                this.repeatblanks.push(this.createblanks());
                                this.multiform['controls'].repeatblanks['controls'][j]['controls']['answer'].patchValue(event[i].section[x].sub_questions[j].answer);
                                this.multiform['controls'].repeatblanks['controls'][j]['controls']['points'].patchValue(event[i].section[x].sub_questions[j].points);
                                this.multiform['controls'].repeatblanks['controls'][j]['controls']['page'].patchValue(event[i].section[x].sub_questions[j].page_no);
                                this.multiform['controls'].repeatblanks['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                this.multiform['controls'].repeatblanks['controls'][j]['controls']['answerId'].patchValue(event[i].section[x].sub_questions[j].answer_id);
                                this.multiform['controls'].repeatblanks['controls'][j]['controls']['autograde'].patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                            }
                        }
                    }
                }
            }
        }
        if (valid == event.length) {
            this.secondFunction(list.quesNo, id, event, data, section, index);
        }
    }
    //2. Create an async function
    async secondFunction(no, id, event, data, section, index) {
        //3. Await for the first function to complete
        // let result = await this.firstFunction(no, id, event, data, section, index)
        this.patchNumereic(no, id, event, data, section, index);
    }
    async patchNumereic(no, id, event, data, section, index) {
        setTimeout(() => {
            for (let i = 0; i < event.length; i++) {
                if (section == i) {
                    for (let x = 0; x < event[i].section.length; x++) {
                        for (let j = 0; j < event[i].section[x].sub_questions.length; j++) {
                            if (no == event[i].section[x].sub_questions[j].question_no) {
                                if (id != '40') {
                                    this.numericQuestion[j]?.editor.setContent(event[i].section[x].sub_questions[j].question);
                                }
                                else {
                                    this.graphEditorAnswerValue.editor.setContent(event[i].section[x].sub_questions[j].editor_answer);
                                    this.graphQuestion[j].editor.setContent(event[i].section[x].sub_questions[j].question);
                                    this.graphQuestion[j].content = event[i].section[x].sub_questions[j].question;
                                }
                                if (id == '30') {
                                    for (let k = 0; k < event[i].section[x].sub_questions[j].answer.length; k++) {
                                        this.numericAnswer[j][k].editor.setContent(event[i].section[x].sub_questions[j].answer[k]);
                                        // this.numericAnswer[k].content = event[i].section[x].sub_questions[j].question;
                                        this.numericAnswer[j][k].content = event[i].section[x].sub_questions[j].answer[k];
                                        console.log('valuePathcjed');
                                    }
                                }
                                else if (id == '54') {
                                    this.deleteFillBlanks = false;
                                    this.getFillinQuestionValue(this.numericQuestion[j], j);
                                }
                                this.numericExplain[j]?.editor.setContent(event[i].section[x].sub_questions[j].answer_explanation);
                                if (id == '1') {
                                    this.multiform['controls'].repeatlink['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                    this.multiform['controls'].repeatlink['controls'][j]['controls']['explain'].patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                }
                                else if (id == '3') {
                                    this.multiform['controls'].repeatchoose['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                    this.multiform['controls'].repeatchoose['controls'][j]['controls']['explain'].patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                }
                                else if (id == '9') {
                                    this.multiform['controls'].repeatplus['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                    this.multiform['controls'].repeatplus['controls'][j]['controls']['explain'].patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                }
                                else if (id == '10') {
                                    this.multiform['controls'].repeatentry['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                    this.multiform['controls'].repeatentry['controls'][j]['controls']['explain'].patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                }
                                else if (id == '20') {
                                    this.multiform['controls'].repeatessay['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                    this.multiform['controls'].repeatessay['controls'][j]['controls']['explain'].patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                }
                                else if (id == '30') {
                                    this.multiform['controls'].repeatnumeric['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                    this.multiform['controls'].repeatnumeric['controls'][j]['controls']['answer'].patchValue(event[i].section[x].sub_questions[j].answer);
                                    this.multiform['controls'].repeatnumeric['controls'][j]['controls']['explain'].patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                }
                                else if (id == '40') {
                                    this.graphform.controls.question.patchValue(event[i].section[x].sub_questions[j].question);
                                    this.graphform.controls.explain.patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                    this.graphform.controls.editorAnswer.patchValue(event[i].section[x].sub_questions[j].editor_answer);
                                }
                                else if (id == '54') {
                                    this.multiform['controls'].repeatblanks['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                    this.fillInArray[j].input = event[i].section[x].sub_questions[j].answer;
                                    this.multiform['controls'].repeatblanks['controls'][j]['controls']['answer'].patchValue(event[i].section[x].sub_questions[j].answer);
                                    this.multiform['controls'].repeatblanks['controls'][j]['controls']['explain'].patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                }
                            }
                        }
                    }
                }
            }
        }, 3000);
    }
    deleteAlertView(no, section, id) {
        this.modalRef = this.modalService.open(this.deleteAlert, { size: 'md', backdrop: 'static' });
        this.deleteID = no;
        this.delSection = section;
        console.log(id, 'quesId');
        this.questionId = id;
    }
    deleteSection(section) {
        // this.shapesType = '';
        this.modalRef = this.modalService.open(this.deleteSectionPopup, { size: 'md', backdrop: 'static' });
        this.delSection = section;
    }
    deleteSectionConfirm(section) {
        const ides = [];
        for (let i = 0; i < this.subQuestion[section].section.length; i++) {
            for (let j = 0; j < this.subQuestion[section].section[i].sub_questions.length; j++) {
                const id = this.subQuestion[section].section[i].sub_questions[j].answer_id;
                if (id != '0') {
                    ides.push(id);
                }
            }
        }
        this.deleteQuestion(ides);
        this.totalsub.splice(section, 1);
        this.subQuestion.splice(section, 1);
        this.secHeadingArray.splice(section, 1);
        this.modalRef.close();
        this.clickEvent();
    }
    deleteCancel() {
        this.close();
    }
    deleteCorrectAnswerTextEntry(array, index) {
        this.repeatEntryCorrect = array;
        this.repeatEntryCorrect.removeAt(index);
    }
    deleteCorrectAnswerNumericEntry(array, index) {
        this.repeatNumericCorrect = array;
        this.repeatNumericCorrect.removeAt(index);
    }
    deleteSub(array, id) {
        this.deleteFillBlanks = true;
        this.repeatlink = array;
        console.log(this.repeatlink.value[id].answerId, 'this.repeatlink[id]');
        if (this.repeatlink.value[id].answerId != '0') {
            this.deleteQuestion([this.repeatlink.value[id].answerId]);
        }
        this.repeatlink.removeAt(id);
        this.numericQuestion.splice(id, 1);
        if (array == this.multiform.get('repeatblanks')) {
            setTimeout(() => {
                let val = this.fillInArray.filter((item, index) => {
                    if (index == id) {
                        item.input = [];
                    }
                    return index != id;
                });
                this.fillInArray = [];
                this.fillInArray = [...val];
                this.deleteFillBlanks = false;
                console.log(this.fillInArray, 'splice');
            }, 100);
            this.cdr.markForCheck();
        }
        else {
            this.numericAnswer.splice(id, 1);
        }
        if (array.length == 1) {
            this.hide = true;
        }
        this.cdr.markForCheck();
    }
    deleteQues(no, section, id) {
        this.sliced = false;
        for (let i = 0; i < this.subQuestion.length; i++) {
            if (i == section) {
                for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                    if (this.sliced == false) {
                        this.sliceNo = x + 10;
                    }
                    for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                        if (no == this.subQuestion[i].section[x].sub_questions[j].sub_question_no) {
                            this.slicedQuesNo = this.subQuestion[i].section[x].sub_questions[j].question_no;
                            this.subQuestion[i].section[x].sub_questions.splice(j, 1);
                            this.sliceNo = x;
                            this.sliced = true;
                        }
                    }
                    if (this.subQuestion[i].section[x].sub_questions.length == 0) {
                        this.subQuestion[i].section.splice(x, 1);
                        this.sliceNo = -1;
                    }
                    if (this.sliceNo == x) {
                        if (this.subQuestion[i].section[x] != null) {
                            for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                let sub = ((j + 1) + 9).toString(36).toLowerCase();
                                this.subQuestion[i].section[x].sub_questions[j].sub_question_no = this.subQuestion[i].section[x].sub_questions.length == 1 ? (this.slicedQuesNo) : (this.slicedQuesNo) + sub;
                                this.subQuestion[i].section[x].sub_questions[j].question_no = this.slicedQuesNo;
                            }
                        }
                    }
                }
            }
        }
        for (let i = 0; i < this.subQuestion.length; i++) {
            if (this.subQuestion[i].section.length == 0) {
                this.subQuestion.splice(i, 1);
                this.secHeadingArray.splice(i, 1);
                if (this.subQuestion.length != 0) {
                    this.sectionCount -= 1;
                }
                else {
                    this.sectionCount = 0;
                }
            }
        }
        this.totalsub = [];
        if (this.subQuestion.length != 0) {
            for (let i = 0; i < this.subQuestion.length; i++) {
                if (this.totalsub[i] == null) {
                    this.totalsub[i] = { heading: '', section: [] };
                }
                for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                    for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                        const list = this.subQuestion[i].section[x].sub_questions[j];
                        this.totalsub[i].section.push({
                            sub: list.sub_question_no,
                            answer: list.answer,
                            typeId: list.question_type_id,
                            quesId: list.answer_id,
                            autoGrade: list.auto_grade,
                            matchCase: list.match_case,
                            quesNo: list.question_no,
                            editor: list?.editor_answer,
                            explain: list.answer_explanation,
                            option: list.options,
                            array: list.array,
                            question: list.question
                        });
                    }
                }
            }
            if (section != this.sectionCount) {
                this.dragCount = [];
                for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                    this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                }
                for (let i = 0; i < this.reloadQues; i++) {
                    const num = i + 1;
                    this.dragCount.push(num);
                }
            }
        }
        if (id !== '0') {
            this.deleteQuestion(id);
        }
        this.modalRef.close();
        this.clickEvent();
    }
    deleteQuestion(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            answer_id: id
        };
        this.creator.deleteQuestion(data).subscribe((successData) => {
            this.deleteQuestionSuccess(successData);
        }, (error) => {
            this.deleteQuestionFailure(error);
        });
    }
    deleteQuestionSuccess(successData) {
        if (successData.isSuccess) {
            console.log(successData.responseObject);
        }
    }
    deleteQuestionFailure(error) {
        console.log(error);
    }
    close() {
        this.modalRef.close();
    }
    closeDialog() {
        this.multiDialog = false;
        this.trueDialog = false;
        this.choiceDialog = false;
        this.entryDialog = false;
        this.essayDialog = false;
        this.numericDialog = false;
        this.graphDialog = false;
        this.blankDialog = false;
        this.isBulkUpload = false;
        this.hide = true;
        this.dragCount = [];
        if (this.subQuestion[this.sectionCount] != null) {
            console.log(this.subQuestion[this.sectionCount], 'in');
            for (let i = 0; i < this.countList - 1; i++) {
                const num = i + 1;
                this.dragCount.push(num);
            }
        }
        const controlEntry = this.multiform.controls['repeatentry'];
        for (let i = controlEntry.length; i >= 1; i--) {
            controlEntry.reset();
            this.multiform['controls'].repeatentry['controls'][0]['controls']['points'].patchValue('1');
            this.multiform['controls'].repeatentry['controls'][0]['controls']['autograde'].patchValue(false);
            const correctAnswer = this.multiform.controls['repeatentry']['controls'][0]['controls']['repeatEntryCorrect'];
            for (let j = correctAnswer.controls.length; j >= 1; j--) {
                correctAnswer.removeAt(j);
            }
            controlEntry.removeAt(i);
        }
        const controlNumeric = this.multiform.controls['repeatnumeric'];
        for (let i = controlNumeric.length; i >= 1; i--) {
            controlNumeric.reset();
            this.multiform['controls'].repeatnumeric['controls'][0]['controls']['points'].patchValue('1');
            this.multiform['controls'].repeatnumeric['controls'][0]['controls']['autograde'].patchValue(true);
            const correctAnswer = this.multiform.controls['repeatnumeric']['controls'][0]['controls']['repeatNumericCorrect'];
            for (let j = correctAnswer.controls.length; j >= 1; j--) {
                correctAnswer.removeAt(j);
            }
            controlNumeric.removeAt(i);
        }
        this.numericQuestion = [];
    }
    truefunction(id, index) {
        for (let i = 0; i < this.multiform['controls'].repeatchoose['controls'].length; i++) {
            if (index == i) {
                this.multiform['controls'].repeatchoose['controls'][index]['controls']['optradio'].patchValue(id.target.checked);
            }
        }
    }
    falsefunction(id, value) {
        console.log(id, value, 'Valueeee');
    }
    classList(id) {
        if (id == '1') {
            this.type = 'Description';
        }
        else if (id == '2') {
            this.type = 'Workspace';
        }
        else if (id == '3') {
            this.type = 'Preview';
        }
    }
    deleteAction() {
        this.modalRef = this.modalService.open(this.deleteClass, { size: 'md', backdrop: 'static' });
    }
    getIcons() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
        };
        this.creator.iconList(data).subscribe((successData) => {
            this.iconListSuccess(successData);
        }, (error) => {
            console.log(error, 'error_icons');
        });
    }
    iconListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            console.log(successData, 'error');
            this.icons = successData.ResponseObject;
            this.icons = this.icons.filter(item => item.question_type_id != '55');
            console.log(this.icons, 'icons');
        }
    }
    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.classService.subjectList(data).subscribe((successData) => {
            this.subjectListSuccess(successData);
        }, (error) => {
            console.log(error, 'error_subject');
        });
    }
    subjectListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
    }
    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.classService.gradeList(data).subscribe((successData) => {
            this.gradeListSuccess(successData);
        }, (error) => {
            console.log(error, 'error_grade');
        });
    }
    gradeListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
        }
    }
    listDetails(event) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: event.content_id,
            content_format: event.content_format,
            content_type: event.content_type,
            school_id: event.school_id
        };
        this.creator.repositoryDetail(data).subscribe((successData) => {
            this.detailsSuccess(successData);
        }, (error) => {
            console.log(error, 'error_contentDetails');
        });
    }
    detailsSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.editData = successData.ResponseObject;
            console.log(this.editData.batch_id, 'batch');
            this.contentName = this.editData.name;
            this.areaInfo = this.editData.annotation;
            this.dragQuestionsList = this.editData.questionAnnotation;
            this.showdropdown = true;
            if (this.editData.status == 5) {
                this.draftAdd = 'publish';
            }
            this.subQuestion = this.editData.answers;
            for (let i = 0; i < this.subQuestion.length; i++) {
                this.subQuestion[i].section.sort((a, b) => parseFloat(a.sub_questions[0].question_no) - parseFloat(b.sub_questions[0].question_no));
            }
            this.showpdf = this.common.convertBase64(this.editData.file_path);
            console.log(this.showpdf, 'showpdf');
            this.getpdf = this.showpdf[0];
            if (this.getpdf.links == undefined) {
                this.getpdf.links = [];
            }
            this.resourceLinks = this.getpdf?.links;
            this.answerpdfpath = this.common.convertBase64(this.editData.answerkey_path);
            this.showAnswerKey = this.editData.allow_answer_key == '1';
            this.teacherVersion = this.editData.teacher_version || [];
            for (let i = 0; i < this.editData.answers.length; i++) {
                this.sectionCount = i;
                this.totalsub[i] = { heading: '', section: [] };
                this.secHeadingArray[i] = this.editData.answers[i].heading;
                for (let x = 0; x < this.editData.answers[i].section.length; x++) {
                    let ans = this.editData.answers[i].section[x];
                    const num = x + 1;
                    for (let j = 0; j < ans.sub_questions.length; j++) {
                        if (ans.sub_questions[j].question_type_id == '3') {
                            this.totalsub[i].section.push({
                                answer: ans.sub_questions[j].answer,
                                sub: ans.sub_questions[j].sub_question_no,
                                quesId: ans.sub_questions[j].answer_id,
                                pageNo: ans.sub_questions[j].page_no,
                                typeId: ans.sub_questions[j].question_type_id,
                                autoGrade: ans.sub_questions[j].auto_grade,
                                matchCase: ans.sub_questions[j].match_case,
                                explain: ans.sub_questions[j].answer_explanation,
                                quesNo: ans.sub_questions[j].question_no,
                                question: ans.sub_questions[j].question,
                                array: ans.sub_questions[j].array
                            });
                        }
                        else {
                            this.totalsub[i].section.push({
                                answer: ans.sub_questions[j].answer,
                                sub: ans.sub_questions[j].sub_question_no,
                                quesId: ans.sub_questions[j].answer_id,
                                pageNo: ans.sub_questions[j].page_no,
                                typeId: ans.sub_questions[j].question_type_id,
                                autoGrade: ans.sub_questions[j].auto_grade,
                                matchCase: ans.sub_questions[j].match_case,
                                explain: ans.sub_questions[j].answer_explanation,
                                editor: ans?.sub_questions[j]?.editor_answer,
                                quesNo: ans.sub_questions[j].question_no,
                                question: ans.sub_questions[j].question,
                                array: ans.sub_questions[j].array
                            });
                        }
                    }
                    this.reloadQues = this.editData.answers[i].section[x].sub_questions[0].question_no;
                }
            }
            for (let i = 0; i < this.reloadQues; i++) {
                const num = i + 1;
                this.dragCount.push(num);
            }
            if (this.getpdf.original_image_url != undefined) {
                this.isPdfAvailable = true;
                this.pdfTemplate = this.webhost + '/' + this.getpdf?.original_image_url;
            }
            else {
                this.isPdfAvailable = false;
            }
            this.multiform.controls.classname.patchValue(this.editData.name);
            this.multiform.controls.description.patchValue(this.editData.description);
            this.getNewlinks = [];
            if (this.editData.links != '') {
                const links = this.editData.links;
                links.forEach((item) => {
                    this.getNewlinks.push({ display: item, value: item });
                });
            }
            this.multiform.controls.resourcesLink.patchValue(this.getNewlinks);
            if (this.editData.tags != '') {
                const tag = this.editData.tags.split(',');
                for (let i = 0; i < tag.length; i++) {
                    this.getTag.push({ display: tag[i], value: tag[i] });
                }
            }
            this.multiform.controls.tag.patchValue(this.getTag);
            if (this.editData.grade != '') {
                this.gradeSplit = [];
                const grade = this.editData.grade.split(',');
                this.gradeSplit = [...grade];
            }
            if (this.editData.subject != '') {
                this.subjectSplit = [];
                const subject = this.editData.subject.split(',');
                for (let i = 0; i < subject.length; i++) {
                    this.subjectSplit.push(subject[i]);
                }
            }
            this.multiform.controls.grade.patchValue(this.gradeSplit);
            this.multiform.controls.subject.patchValue(this.subjectSplit);
            this.multiform.controls.option.patchValue(this.editData.access);
            if (this.editData.download == '1') {
                this.multiform.controls.downloadContent.patchValue(true);
            }
            else if (this.editData.download == '0') {
                this.multiform.controls.downloadContent.patchValue(false);
            }
            this.showPage = true;
            this.clickEvent();
            console.log('finish');
        }
    }
    assign(value) {
        this.headingSame = false;
        this.headingEmpty = false;
        this.updatePrimaryLink();
        const corporate = this.roleid == 6 ? this.auth.getSessionData('corporate_id') : undefined;
        console.log(this.treeviewCompoent, 'treeViewComponenet');
        const batchId = this.treeviewCompoent?.batchid;
        if (this.multiform.controls.tag.value != '') {
            this.tagArray = [];
            const tags = this.multiform.controls.tag.value;
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
        }
        if (this.subQuestion.length != 0) {
            for (let i = 0; i < this.subQuestion.length; i++) {
                if (this.subQuestion.length > 1) {
                    if (this.secHeadingArray[i] != null && this.secHeadingArray[i] != '') {
                        this.subQuestion[i].heading = this.secHeadingArray[i];
                    }
                    else if (this.secHeadingArray[i] == null || this.secHeadingArray[i] == '') {
                        document.getElementById('headingNull' + i).hidden = false;
                    }
                    if (document.getElementById('subHeading' + i).hidden == false) {
                        this.headingSame = true;
                    }
                    if (document.getElementById('headingNull' + i).hidden == false) {
                        this.headingEmpty = true;
                    }
                }
                else {
                    if (this.secHeadingArray[i] != null) {
                        this.subQuestion[i].heading = this.secHeadingArray[i];
                    }
                }
            }
        }
        let areaInfoData = this.areaInfo;
        console.log(areaInfoData, 'area');
        if (areaInfoData) {
            areaInfoData = areaInfoData.filter(item => !item.isDelete);
        }
        if (this.multiform.controls.resourcesLink.value != '') {
            this.resourceArray = [];
            const video = this.multiform.controls.resourcesLink.value;
            for (let i = 0; i < video.length; i++) {
                this.resourceArray.push(video[i].value);
            }
        }
        console.log(this.getpdf, 'getDpd');
        this.getpdf.links = this.getpdf.links.filter((item) => item.link !== '');
        const checkForValidResourceLink = this.getpdf.links.some((item) => item.name == '');
        if (!checkForValidResourceLink) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                name: this.multiform.controls.classname.value,
                description: this.multiform.controls.description.value,
                grade: this.multiform.controls.grade.value,
                subject: this.multiform.controls.subject.value,
                school_id: this.auth.getSessionData('school_id'),
                file_path: [this.getpdf],
                links: this.resourceArray,
                file_text: '',
                content_type: this.uploadType == 'assessment' ? '3' : '2',
                tags: this.multiform.controls.tag.value != '' ? this.tagArray : [],
                annotation: areaInfoData,
                questionAnnotation: this.dragQuestionsList,
                assign: '0',
                classdetails: [],
                content_format: this.getpdf.length != 0 ? '1' : '2',
                status: '1',
                profile_url: this.imagepath,
                answerkey_path: this.answerpdfpath,
                allow_answer_key: this.showAnswerKey == true ? '1' : '0',
                teacher_version: this.teacherVersion,
                profile_thumb_url: this.imagepaththumb,
                access: this.multiform.controls.option.value,
                answers: this.subQuestion,
                editor_type: '',
                corporate_id: corporate,
                download: this.multiform.controls.downloadContent.value == true ? '1' : '0',
                batch_id: batchId == undefined ? '' : batchId
            };
            if (this.headingEmpty == false) {
                if (this.headingSame == false) {
                    if (value != 'edit') {
                        this.creator.assignAnnotation(data).subscribe((successData) => {
                            this.assignSuccess(successData);
                        }, (error) => {
                            this.assignFailure(error);
                        });
                    }
                    else if (value == 'edit') {
                        data['content_id'] = this.editData.content_id;
                        this.creator.editAssignResourse(data).subscribe((successData) => {
                            this.assignSuccess(successData);
                        }, (error) => {
                            this.assignFailure(error);
                        });
                    }
                    // if (this.uploadType == 'assessment') {
                    //     console.log(this.subQuestion, 'subQuestion');
                    //
                    // } else {
                    //     if (value != 'edit') {
                    //         this.creator.assignAnnotation(data).subscribe((successData) => {
                    //                 this.assignSuccess(successData);
                    //             },
                    //             (error) => {
                    //                 this.assignFailure(error);
                    //             });
                    //     } else if (value == 'edit') {
                    //         data['content_id'] = this.editData.content_id;
                    //         this.creator.editAssignResourse(data).subscribe((successData) => {
                    //                 this.assignSuccess(successData);
                    //             },
                    //             (error) => {
                    //                 this.assignFailure(error);
                    //             });
                    //     }
                    // }
                }
                else {
                    this.toastr.error('Sub heading should not be same');
                }
            }
            else {
                this.toastr.error('Sub heading should not be Empty');
            }
        }
        else {
            this.getpdf.links.forEach(item => item.error = item.name == '' && item.link != '');
            setTimeout(() => {
                const element = document.getElementById('otherLink');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            this.toastr.error('Name is mandatory for each additional resource links');
        }
    }
    assignSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.assignData = successData.Contentdetails;
            if (this.assessmentType == 'add') {
                this.toastr.success('Content Created Successfully');
                this.modalRef = this.modalService.open(this.assignContentToClass, { size: 'md', backdrop: 'static' });
            }
            else {
                if (this.pdfChanged || this.valueChanged) {
                    this.multiform.controls.resourcesLink.patchValue('');
                    this.resourceArray = [];
                    this.listDetails(successData.Contentdetails);
                    this.classList(2);
                    this.pdfChanged = false;
                    this.valueChanged = false;
                }
                else {
                    this.toastr.success(successData.ResponseObject);
                    this.modalRef = this.modalService.open(this.assignContentToClass, { size: 'md', backdrop: 'static' });
                    this.auth.removeSessionData('editor');
                }
            }
        }
        else {
            this.toastr.error(successData.ResponseObject);
        }
    }
    assignFailure(error) {
        console.log(error, 'error');
        if (this.assessmentType == 'add') {
            this.toastr.error('Assessment publish failed');
        }
        else {
            this.toastr.error('Assessment update failed');
        }
    }
    draft(value) {
        this.headingSame = false;
        this.headingEmpty = false;
        this.updatePrimaryLink();
        let corporate;
        if (this.roleid == 6) {
            corporate = this.auth.getSessionData('corporate_id');
        }
        else {
            corporate = undefined;
        }
        if (this.multiform.controls.tag.value != '') {
            this.tagArray = [];
            const tags = this.multiform.controls.tag.value;
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
        }
        if (this.subQuestion.length != 0) {
            for (let i = 0; i < this.subQuestion.length; i++) {
                document.getElementById('headingNull' + i).hidden = true;
                if (this.subQuestion.length > 1) {
                    if (this.secHeadingArray[i] != null && this.secHeadingArray[i] != '') {
                        this.subQuestion[i].heading = this.secHeadingArray[i];
                    }
                    else if (this.secHeadingArray[i] == null || this.secHeadingArray[i] == '') {
                        document.getElementById('headingNull' + i).hidden = false;
                    }
                    if (document.getElementById('subHeading' + i).hidden == false) {
                        this.headingSame = true;
                    }
                    if (document.getElementById('headingNull' + i).hidden == false) {
                        this.headingEmpty = true;
                    }
                }
                else {
                    if (this.secHeadingArray[i] != null) {
                        this.subQuestion[i].heading = this.secHeadingArray[i];
                    }
                }
            }
        }
        if (this.multiform.controls.resourcesLink.value != '') {
            this.resourceArray = [];
            const video = this.multiform.controls.resourcesLink.value;
            for (let i = 0; i < video.length; i++) {
                this.resourceArray.push(video[i].value);
            }
        }
        this.getpdf.links = this.getpdf.links.filter((item) => item.link !== '');
        const checkForValidResourceLink = this.getpdf.links.some((item) => item.name == '');
        if (!checkForValidResourceLink) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                name: this.multiform.controls.classname.value,
                description: this.multiform.controls.description.value,
                grade: this.multiform.controls.grade.value,
                subject: this.multiform.controls.subject.value,
                school_id: this.auth.getSessionData('school_id'),
                file_path: [this.getpdf],
                answerkey_path: this.answerpdfpath,
                allow_answer_key: this.showAnswerKey == true ? '1' : '0',
                teacher_version: this.teacherVersion,
                links: this.multiform.controls.resourcesLink.value != '' ? this.resourceArray : [],
                file_text: '',
                content_type: this.uploadType == 'assessment' ? '3' : '2',
                tags: this.multiform.controls.tag.value != '' ? this.tagArray : [],
                annotation: this.areaInfo,
                assign: '0',
                classdetails: [],
                content_format: this.getpdf.length != 0 ? '1' : '2',
                status: '5',
                profile_url: this.imagepath,
                profile_thumb_url: this.imagepaththumb,
                access: this.multiform.controls.option.value,
                answers: this.subQuestion,
                editor_type: '',
                corporate_id: corporate,
                download: this.multiform.controls.downloadContent.value == true ? '1' : '0'
            };
            if (this.headingEmpty == false) {
                if (this.headingSame == false) {
                    if (value != 'edit') {
                        this.creator.addDraftResourse(data).subscribe((successData) => {
                            this.draftSuccess(successData);
                        }, (error) => {
                            this.draftFailure(error);
                        });
                    }
                    else if (value == 'edit') {
                        data['content_id'] = this.editData.content_id;
                        this.creator.editDraftResourse(data).subscribe((successData) => {
                            this.draftSuccess(successData);
                        }, (error) => {
                            this.draftFailure(error);
                        });
                    }
                }
                else {
                    this.toastr.error('Sub heading should not be same');
                }
            }
            else {
                this.toastr.error('Sub heading should not be empty');
            }
        }
        else {
            this.getpdf.links.forEach(item => item.error = item.name == '' && item.link != '');
            setTimeout(() => {
                const element = document.getElementById('otherLink');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            this.toastr.error('Name is mandatory for each additional resource links');
        }
    }
    draftSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            if (this.assessmentType == 'add') {
                if (this.functionCalled == true) {
                    this.toastr.success('Draft created successfully');
                    this.router.navigate(['repository/content-home']);
                }
                console.log(successData.ResponseObject, 'see what');
                this.listDetails(successData.Contentdetails);
                this.functionCalled = true;
                this.classList(2);
            }
            else {
                if (this.pdfChanged == true || this.valueChanged) {
                    this.multiform.controls.resourcesLink.patchValue('');
                    this.resourceArray = [];
                    this.listDetails(successData.Contentdetails);
                    this.classList(2);
                    this.pdfChanged = false;
                    this.valueChanged = false;
                    // this.allowChanged = true;
                }
                else {
                    this.toastr.success('Draft updated successfully');
                    this.auth.removeSessionData('editor');
                    this.router.navigate(['repository/content-home']);
                }
            }
            console.log(successData, 'vetri');
        }
        else {
            this.toastr.error(successData.ResponseObject);
        }
    }
    draftFailure(error) {
        console.log(error, 'error');
        if (this.assessmentType == 'add') {
            this.toastr.error('Draft creation failed');
        }
        else {
            this.toastr.error('Draft update failed');
        }
    }
    getRandrom() {
        return Math.random().toFixed(7);
    }
    editPrimaryLink() {
        this.editLinkVal = this.getpdf.link;
        this.editSourceLink = true;
    }
    updatePrimaryLink(calledFrom) {
        if (this.editLinkVal != '') {
            this.getpdf.link = this.editLinkVal.includes('http') ? this.editLinkVal : 'https://' + this.editLinkVal;
            this.editSourceLink = false;
        }
        else if (this.editLinkVal == '' && calledFrom == 'icon') {
            this.toastr.error('Sourec Link should not be empty');
        }
    }
    viewDetail(value) {
        this.pdfName = value.image;
        if (value.base64_data) {
            this.pdfTemplate = value.base64_data == '' ? this.webhost + '/' + value.original_image_url : this.common.convertBase64PdfPath(value.base64_data);
        }
        else {
            this.pdfTemplate = this.webhost + '/' + value.original_image_url;
        }
        this.modalRef = this.modalService.open(this.viewPdf, { size: 'xl' });
    }
    pdfUpload() {
        this.modalRef = this.modalService.open(this.uploadPdf, { size: 'md' });
    }
    encodePdfFileAsURL(event, type) {
        const images = [];
        const imageLength = event.target.files.length;
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
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
        let pdftype;
        if (type == '1') {
            pdftype = 'content';
        }
        else if (type == '2') {
            pdftype = 'answerkey';
        }
        else {
            pdftype = 'teacheranswerkey';
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: getUrlEdu,
            uploadtype: pdftype
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
            this.pdfChanged = true;
            this.response = successData.ResponseObject;
            if (type == '1') {
                let resourceLink = this.getpdf.links;
                this.showpdf = [];
                this.pdfpaththumb = [];
                for (let i = 0; i < this.response.imagepath.length; i++) {
                    this.showpdf.push(this.response.imagepath[i]);
                    this.pdfpaththumb.push(this.response.imagepath[i].resized_url);
                }
                this.getpdf = this.showpdf[0];
                this.getpdf['links'] = resourceLink;
                this.auth.setSessionData('pdf', JSON.stringify(this.showpdf));
                this.modalRef.close();
            }
            else if (type == '2') {
                console.log('in');
                this.answerpdfpath = [];
                this.attachment1.nativeElement.value = '';
                this.answerpdfpath.push(this.response.imagepath[0]);
            }
            else {
                this.teacherVersion = [];
                this.attachment2.nativeElement.value = '';
                this.teacherVersion[0] = this.response.imagepath[0];
            }
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    pdfuploadFailure(error) {
        console.log(error, 'error');
    }
    question(id) {
        console.log(id, 'dsdas');
        this.random = Math.random().toFixed(3);
        this.deleteFillBlanks = false;
        this.quesNoInvalid = false;
        console.log(this.numericQuestion, 'numric');
        if (id == '1') {
            this.multiDialog = true;
            const controlmulti = this.multiform.controls['repeatlink'];
            for (let i = controlmulti.length; i >= 1; i--) {
                controlmulti.reset();
                this.multiform['controls'].repeatlink['controls'][0]['controls']['points'].patchValue('1');
                this.multiform['controls'].repeatlink['controls'][0]['controls']['page'].patchValue('0');
                this.multiform['controls'].repeatlink['controls'][0]['controls']['autograde'].patchValue(true);
                this.multiform['controls'].repeatlink['controls'][0]['controls']['option'].patchValue('a b c d ');
                this.multiform['controls'].repeatlink['controls'][0]['controls']['array'].patchValue(['a', 'b', 'c', 'd']);
                this.multiform['controls'].repeatlink['controls'][0]['controls']['explain'].patchValue('');
                controlmulti.removeAt(i);
            }
        }
        else if (id == '3') {
            this.trueDialog = true;
            const controlChoose = this.multiform.controls['repeatchoose'];
            for (let i = controlChoose.length; i >= 1; i--) {
                controlChoose.reset();
                this.multiform['controls'].repeatchoose['controls'][0]['controls']['points1'].patchValue('1');
                this.multiform['controls'].repeatchoose['controls'][0]['controls']['page'].patchValue('0');
                this.multiform['controls'].repeatchoose['controls'][0]['controls']['autograde'].patchValue(true);
                this.multiform['controls'].repeatchoose['controls'][0]['controls']['explain'].patchValue('');
                controlChoose.removeAt(i);
            }
        }
        else if (id == '9') {
            this.choiceDialog = true;
            const controlPlus = this.multiform.controls['repeatplus'];
            for (let i = controlPlus.length; i >= 1; i--) {
                const controls = controlPlus['controls'][0]['controls']['choiceList'];
                for (let j = controls.length; j >= 1; j--) {
                    controls.removeAt(j);
                }
                controlPlus.reset();
                this.multiform['controls'].repeatplus['controls'][0]['controls']['points'].patchValue('1');
                this.multiform['controls'].repeatplus['controls'][0]['controls']['page'].patchValue('0');
                this.multiform['controls'].repeatplus['controls'][0]['controls']['autograde'].patchValue(true);
                this.multiform['controls'].repeatplus['controls'][0]['controls']['explain'].patchValue('');
                controlPlus.removeAt(i);
            }
        }
        else if (id == '10') {
            this.entryDialog = true;
            const controlEntry = this.multiform.controls['repeatentry'];
            for (let i = controlEntry.length; i >= 1; i--) {
                controlEntry.reset();
                this.multiform['controls'].repeatentry['controls'][0]['controls']['points'].patchValue('1');
                this.multiform['controls'].repeatentry['controls'][0]['controls']['page'].patchValue('0');
                this.multiform['controls'].repeatentry['controls'][0]['controls']['autograde'].patchValue(false);
                this.multiform['controls'].repeatentry['controls'][0]['controls']['explain'].patchValue('');
                controlEntry.removeAt(i);
            }
        }
        else if (id == '20') {
            this.essayDialog = true;
            const controlEssay = this.multiform.controls['repeatessay'];
            for (let i = controlEssay.length; i >= 1; i--) {
                controlEssay.reset();
                this.multiform['controls'].repeatessay['controls'][0]['controls']['points'].patchValue('1');
                this.multiform['controls'].repeatessay['controls'][0]['controls']['page'].patchValue('0');
                this.multiform['controls'].repeatessay['controls'][0]['controls']['autograde'].patchValue(false);
                this.multiform['controls'].repeatessay['controls'][0]['controls']['explain'].patchValue('');
                controlEssay.removeAt(i);
            }
        }
        else if (id == '30') {
            this.numericDialog = true;
            const controlNumeric = this.multiform.controls['repeatnumeric'];
            for (let i = controlNumeric.length; i >= 1; i--) {
                controlNumeric.reset();
                this.multiform['controls'].repeatnumeric['controls'][0]['controls']['points'].patchValue('1');
                this.multiform['controls'].repeatnumeric['controls'][0]['controls']['page'].patchValue('0');
                this.multiform['controls'].repeatnumeric['controls'][0]['controls']['autograde'].patchValue(false);
                this.multiform['controls'].repeatnumeric['controls'][0]['controls']['explain'].patchValue('');
                controlNumeric.removeAt(i);
            }
        }
        else if (id == '40') {
            this.graphDialog = true;
        }
        else if (id == '54') {
            this.fillInArray = [];
            this.blankDialog = true;
            const controlBlanks = this.multiform.controls['repeatblanks'];
            for (let i = controlBlanks.length; i >= 1; i--) {
                controlBlanks.reset();
                this.multiform['controls'].repeatblanks['controls'][0]['controls']['points'].patchValue('1');
                this.multiform['controls'].repeatblanks['controls'][0]['controls']['page'].patchValue('0');
                this.multiform['controls'].repeatblanks['controls'][0]['controls']['autograde'].patchValue(false);
                this.multiform['controls'].repeatblanks['controls'][0]['controls']['explain'].patchValue('');
                controlBlanks.removeAt(i);
            }
        }
        this.hide = true;
        // this.shapesType = '';
        if (this.subQuestion.length != 0 && !this.isBulkUpload) {
            this.sectionCount = this.subQuestion.length - 1;
        }
        console.log(id);
        this.submitType = 'add';
        console.log(this.subQuestion, 'this.subQuestion');
        this.dragCount = [];
        console.log(this.sectionCount, 'this.sectionCount');
        if (this.subQuestion[this.sectionCount] != null) {
            if (this.subQuestion[this.sectionCount].section.length > 0) {
                console.log('in');
                for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                    this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                }
                for (let i = 0; i < this.reloadQues; i++) {
                    const num = i + 1;
                    this.dragCount.push(num);
                }
            }
        }
        console.log(this.dragCount, 'this.dragCount');
        this.countList = this.dragCount.length + 1;
        this.dragCount.push(this.countList);
        this.numericQuestion[0]?.editor.setContent('');
        if (id == '40') {
            this.graphQuestion[0]?.editor.setContent('');
            this.graphform.controls.question.patchValue('');
            this.graphform.controls.answer.patchValue('');
            this.graphform.controls.points.patchValue('1');
            this.graphform.controls.page.patchValue('0');
            this.graphBoardValue = '';
        }
        else if (id == '30') {
            if (this.numericAnswer.length > 1) {
                const indexCount = this.numericAnswer.length - 1;
                this.numericAnswer.splice(1, indexCount);
            }
            this.numericAnswer.forEach((item) => {
                item.forEach((items) => {
                    items.editor.setContent('');
                });
            });
        }
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
    createSpace(id, event) {
        console.log(event, 'event');
        let list;
        if (this.choices != '') {
            this.choices = [];
        }
        if (event.key != 'Backspace') {
            this.multiform['controls'].repeatlink['controls'][id]['controls']['option'].patchValue(this.multiform['controls'].repeatlink['controls'][id]['controls']['option'].value + ' ');
        }
        this.options = this.multiform['controls'].repeatlink['controls'][id]['controls']['option'].value;
        const choose = this.options.split(' ');
        for (let i = 0; i < choose.length; i++) {
            if (choose[i] != null && choose[i] != '') {
                this.choices.push(choose[i]);
                console.log(this.choices, 'this.choices123');
                list = this.choices.filter((val, index) => this.choices.indexOf(val) == index);
                list.forEach((item) => {
                    this.filterListChoices = item.toString().length;
                });
                // this.filterListChoices = 'Not allowed duplicate options';
                console.log(this.filterListChoices, 'this.filterListChoices');
            }
        }
        for (let i = 0; i < this.multiform['controls'].repeatlink['controls'].length; i++) {
            if (id == i) {
                this.multiform['controls'].repeatlink['controls'][id]['controls']['array'].patchValue(list);
            }
            else {
            }
        }
    }
    subQues(id) {
        for (let i = 0; i < this.multiform['controls'].repeatlink['controls'].length; i++) {
            for (let j = 0; j < this.alphabets.length; j++) {
                if (id == j) {
                    this.multiform['controls'].repeatlink['controls'][id]['controls']['subQuestion'].patchValue(this.alphabets[j]);
                }
            }
        }
    }
    //question List
    // number Validation
    numberValidate(event) {
        this.validationService.numberValidate(event);
    }
    getOptionVal(event) {
        console.log(event.target.value, 'gfjgdghdjhg');
    }
    removechoiceList(index) {
        let remove4 = this.multiform.get('repeatplus');
        for (let i = 0; i < this.multiform['controls'].repeatplus['controls'].length; i++) {
            console.log(this.multiform['controls'].repeatplus['controls'][i]['controls'].optionList.length, 'choicerwrewtreytr');
            if (this.multiform['controls'].repeatplus['controls'][i]['controls'].choiceList.length > 1) {
                this.multiform['controls'].repeatplus['controls'][i]['controls'].choiceList.removeAt(index);
                this.multiform['controls'].repeatplus['controls'][i]['controls'].optionList.value.splice(index, 1);
            }
        }
    }
    addSec(val) {
        if (this.subQuestion.length != 0) {
            this.sectionCount = this.subQuestion.length - 1;
            console.log(this.subQuestion, 'subQuesww');
            console.log(this.sectionCount, 'count');
            if (this.subQuestion[this.sectionCount] != null) {
                if (this.subQuestion[this.sectionCount].section.length != 0) {
                    this.dragCount = [];
                    this.sectionCount += 1;
                    console.log(this.sectionCount, 'count');
                    this.totalsub[this.sectionCount] = { heading: val, section: [] };
                    this.subQuestion[this.sectionCount] = { heading: val, section: [] };
                    this.secHeadingArray[this.sectionCount] = val;
                    console.log(this.subQuestion, 'this.subQuestion');
                }
            }
            setTimeout(() => document.getElementById('section' + this.sectionCount).focus());
        }
    }
    changeSpanTo() {
        this.changeInput = true;
        if (!this.quesNoChanged) {
            this.spanQuesVal = this.editQuesNo;
        }
    }
    changeInputTo() {
        this.quesNoInvalid = false;
        this.changeInput = false;
        if (this.spanQuesVal != this.countList) {
            this.quesNoChanged = true;
            for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                if (this.countList == this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no) {
                    this.quesNoInvalid = true;
                }
            }
        }
        this.dragCount = [];
        for (let i = 0; i < this.countList; i++) {
            const num = i + 1;
            this.dragCount.push(num);
        }
    }
    validation(id, value) {
        document.getElementById('subHeading' + id).hidden = true;
        document.getElementById('headingNull' + id).hidden = true;
        console.log(value, 'typedVal');
        console.log(id, 'id');
        console.log(this.secHeadingArray, 'this.secHeadingArray');
        for (let i = 0; i < this.secHeadingArray.length; i++) {
            if (value == '' && this.secHeadingArray.length > 1) {
                document.getElementById('headingNull' + id).hidden = false;
            }
            if (id != i) {
                console.log(i, 'ideee');
                if (value == this.secHeadingArray[i]) {
                    if (value != '') {
                        console.log('in');
                        console.log(id, 'viewId');
                        document.getElementById('subHeading' + id).hidden = false;
                    }
                }
            }
        }
    }
    changeSection(id, no) {
        this.quesNoInvalid = false;
        if (no == '40') {
            this.sectionCount = this.graphform.controls.head.value;
        }
        else {
            this.sectionCount = this.multiform.controls.head.value;
        }
        console.log(this.graphform.controls.head.value, 'selectbox val');
        document.getElementById(id).setAttribute('selected', this.sectionCount);
        console.log(this.sectionCount, 'sectionCount');
        this.dragCount = [];
        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
        }
        for (let i = 0; i < this.reloadQues; i++) {
            const num = i + 1;
            this.dragCount.push(num);
        }
        this.countList = this.subQuestion[this.sectionCount].section.length == 0 ? 1 : this.dragCount.length + 1;
    }
    openExplanationPopup(value) {
        this.ExplanationPopupValue = value;
        this.modalRef = this.modalService.open(this.viewExplain);
        this.clickEvent();
    }
    preventScroll() {
        // document.body.style.overflow = 'hidden';
    }
    allowScroll() {
        // document.body.style.overflow = 'scroll';
    }
    disableSelect(id, event) {
        console.log(event);
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
        this.modalRef.close();
        const assignedFrom = this.auth.getSessionData('assignedForm');
        if (assignedFrom && assignedFrom == 'class') {
            this.auth.removeSessionData('content_assign');
            this.router.navigate(['class/topicsAndCurriculum/1']);
        }
        else if (this.auth.getSessionData('assignedForm') == 'classRoom') {
            this.router.navigate(['classroom/list-classroom']);
        }
        else {
            this.router.navigate(['/repository/content-home']);
        }
    }
    static { this.ɵfac = function CreateAssessmentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CreateAssessmentComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.CreatorService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i5.NewsubjectService), i0.ɵɵdirectiveInject(i6.DomSanitizer), i0.ɵɵdirectiveInject(i7.ConfigurationService), i0.ɵɵdirectiveInject(i8.NgbModal), i0.ɵɵdirectiveInject(i9.ClassService), i0.ɵɵdirectiveInject(i10.ToastrService), i0.ɵɵdirectiveInject(i11.CommonService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i12.ValidationService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i13.NavService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CreateAssessmentComponent, selectors: [["app-create-assessment"]], viewQuery: function CreateAssessmentComponent_Query(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵviewQuery(_c12, 5);
            i0.ɵɵviewQuery(_c13, 5);
            i0.ɵɵviewQuery(_c14, 5);
            i0.ɵɵviewQuery(_c15, 5);
            i0.ɵɵviewQuery(_c16, 5);
            i0.ɵɵviewQuery(GraphComponentComponent, 5);
            i0.ɵɵviewQuery(_c17, 5);
            i0.ɵɵviewQuery(_c18, 5);
            i0.ɵɵviewQuery(_c19, 5);
            i0.ɵɵviewQuery(_c20, 5);
            i0.ɵɵviewQuery(_c21, 5);
            i0.ɵɵviewQuery(_c22, 5);
            i0.ɵɵviewQuery(_c23, 5);
            i0.ɵɵviewQuery(_c24, 5);
            i0.ɵɵviewQuery(_c25, 5);
            i0.ɵɵviewQuery(TreeviewContentfolderComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pdfPage = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvas = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pencilCanvas = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.multiChoice = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fillIn = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdown = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.trueFalse = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.essay = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleted = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.numericData = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.graph = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewGraph = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteAlert = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteSectionPopup = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteSvgDraw = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewExplain = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.childGraph = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewPdf = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.uploadPdf = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mathShow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addBulk = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.attachmentsnew = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.attachment1 = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.attachment2 = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignContentToClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeviewCompoent = _t.first);
        } }, hostBindings: function CreateAssessmentComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function CreateAssessmentComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
        } }, decls: 33, vars: 9, consts: [["viewGraph", ""], ["deleteAlert", ""], ["deleteSectionPopup", ""], ["deleteSvgDraw", ""], ["class", ""], ["viewExplain", ""], ["viewPdf", ""], ["uploadPdf", ""], ["mathShow", ""], ["assignContentToClass", ""], ["assignTemplate", ""], ["addBulk", ""], ["addAssignment", ""], ["attachments1", "", "hiddenfileinput1", ""], ["attachments2", "", "hiddenfileinput2", ""], ["pdfPage", ""], ["attachmentsnew", "", "hiddenfileinput", ""], ["class", "container-fluid", 4, "ngIf"], ["cdkDrag", "", "class", "modal fade overflow-visible", "role", "dialog", 3, "id", 4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [4, "ngIf"], [1, "pdf-nav", "col-8"], ["type", "button", "aria-pressed", "true", 1, "btn", "btn-outline-primary", "pull-left", 3, "click", "ngClass"], [1, "btn", "btn-outline-primary", "pull-left", 3, "click", "ngClass"], ["class", "pdf-assign-btn col-4", 4, "ngIf"], [1, "row", "mt-2"], [1, "col-sm-12"], [1, "card", "tab2-card"], ["class", "card-body tab2-card", 4, "ngIf"], [1, "col-md-12", 3, "hidden"], [1, "row", "d-flex", "flex-wrap", "justify-content-end", "mt-1", 3, "hidden"], ["class", "col-md-8 d-flex mb-2 px-0", 4, "ngIf"], [1, "col-md-4", "px-0"], ["class", "d-flex justify-content-between", "style", "flex-wrap: wrap", 4, "ngIf"], ["class", "col-12 px-0 mt-2 d-flex justify-content-end", 4, "ngIf"], ["class", "col-md-8", "id", "pdf-page", 3, "click", "dblclick", "mousemove", "mouseover", "mousedown", "mouseenter", "mouseleave", "input", "mouseup", 4, "ngIf"], ["class", "col-md-8", 4, "ngIf"], [1, "col-md-4", "pr-0"], [1, "col-md-12", "mt-2"], ["class", "btn btn-primary w-100 mb-3", "type", "button", 3, "click", 4, "ngIf"], [3, "hidden"], [1, "row", "mt-1", "scrollPanel1", 3, "hidden"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "color-primary"], [1, "pdf-assign-btn", "col-4"], ["class", "btn btn-primary pull-right ml-3", 3, "title", "click", 4, "ngIf"], [1, "btn", "btn-primary", "pull-right", "ml-3", 3, "click"], [1, "btn", "btn-primary", "pull-right", "ml-3", 3, "click", "title"], [1, "card-body", "tab2-card"], [3, "formGroup"], [1, "col-md-12", "d-flex", "mb-4"], [1, "col-sm-12", "col-md-4", "px-0"], [1, "image-container-left"], ["src", "assets/images/ristaschool/assessment.png", "class", "w-100", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/assignment.png", "class", "w-100", "alt", "", 4, "ngIf"], ["class", "w-100", "alt", "", 3, "src", 4, "ngIf"], ["class", "fa fa-times close-button", "title", "close", 3, "click", 4, "ngIf"], [1, "profileUrl"], ["type", "file", "accept", ".png, .jpeg, .jpg", 1, "custom-upload-input", 2, "display", "none", 3, "change"], ["type", "button", "title", "upload Image", 1, "btn", "btn-light", "btn-circle", "border-rista", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-upload", "fa-2x", "mb-3"], [1, "col-sm-12", "col-md-8"], [1, "col-md-4", "form-group"], ["readonly", "", "formControlName", "tname", "type", "text", "placeholder", "Teacher Name", 1, "form-control"], ["class", "col-md-8 form-group", 4, "ngIf"], [1, "col-4", "form-group"], ["bindLabel", "grade_name", "bindValue", "grade_id", "formControlName", "grade", "placeholder", "Select Grade *", "typeToSearchText", "", "multiple", "true", 3, "change", "items"], ["class", "error", 4, "ngIf"], ["bindLabel", "subject_name", "bindValue", "subject_id", "formControlName", "subject", "placeholder", "Select Subject *", "typeToSearchText", "", "multiple", "true", "clearable", "false", 3, "change", "items"], ["formControlName", "option", 1, "form-control", 3, "change"], ["value", "1", 4, "ngIf"], ["value", "2", 4, "ngIf"], ["value", "4", 4, "ngIf"], [1, "form-group", "col-md-12"], ["name", "", "id", "", "placeholder", "Enter Description", "formControlName", "description", 2, "width", "100%", "height", "100px", "padding", "4px"], [1, "col-7", "col-xl-7", "col-md-7", "px-0"], [3, "type", "content_id", "selectedbatch"], [1, "col-md-6", "form-group", "align-self-center", "mt-2"], [1, "col-12", 2, "position", "relative", "font-size", "15px", "left", "0.4rem"], ["type", "checkbox", "id", "download", "formControlName", "downloadContent", 1, "form-check-input", "cursor", 3, "change"], ["for", "download"], [1, "col-md-6", "form-group"], ["formControlName", "tag", "theme", "bootstrap", 3, "change", "secondaryPlaceholder", "placeholder", "editable", "clearOnBlur", "addOnPaste", "addOnBlur"], ["class", "col-12 mb-3", 4, "ngIf"], [1, "col-12", "py-1"], [3, "showLink", "arrayValue"], ["class", "col-md-12 d-flex justify-content-end mb-3", 4, "ngIf"], [1, "col-md-12", "mt-5"], ["class", "col-md-4 d-flex justify-content-center", 4, "ngIf"], ["src", "assets/images/ristaschool/assessment.png", "alt", "", 1, "w-100"], ["src", "assets/images/ristaschool/assignment.png", "alt", "", 1, "w-100"], ["alt", "", 1, "w-100", 3, "src"], ["title", "close", 1, "fa", "fa-times", "close-button", 3, "click"], [1, "col-md-8", "form-group"], ["id", "validationCustom1", "formControlName", "classname", "type", "text", "placeholder", "Assignment Name *", "required", "", 1, "form-control", 3, "change"], [1, "error"], ["id", "validationCustom2", "formControlName", "classname", "type", "text", "placeholder", "Assessment Name *", "required", "", 1, "form-control", 3, "change"], ["value", "1"], ["value", "2"], ["value", "4"], [1, "col-12", "mb-3"], [1, "col-md-12", "px-0", "d-flex", "justify-content-between"], [2, "color", "black", "font-weight", "bold"], ["class", "fa fa-edit f-22px ml-3 cursor", 3, "click", 4, "ngIf"], [3, "setHeight", "showWithIcon", "pdfPath", 4, "ngIf"], ["class", "col-md-12 d-flex justify-content-center align-items-center p-4 link-card", 4, "ngIf"], [1, "fa", "fa-edit", "f-22px", "ml-3", "cursor", 3, "click"], [3, "setHeight", "showWithIcon", "pdfPath"], [1, "col-md-12", "d-flex", "justify-content-center", "align-items-center", "p-4", "link-card"], ["type", "text", "placeholder", "Source Link", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "fa", "fa-check-circle", "color-green", "fa-2x", "ml-3", "cursor", 3, "click"], [1, "col-md-12", "d-flex", "justify-content-end", "mb-3"], ["class", "col-4 d-flex justify-content-end", 4, "ngIf"], ["accept", ".pdf", "type", "file", 2, "display", "none", 3, "change"], ["aria-describedby", "inputGroupFileAddon11", "type", "file", 1, "btn", "btn-primary", "mr-2", 3, "click"], [1, "fa", "fa-upload"], ["class", "btn btn-outline-primary mr-2", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-right", "fa-1x"], [1, "col-4", "d-flex", "justify-content-end"], ["type", "checkbox", 1, "align-self-center", 3, "click", "checked"], [1, "align-self-center"], [1, "btn", "btn-outline-primary", "mr-2", 3, "click"], [1, "col-md-4", "d-flex", "justify-content-center"], ["class", "form-group card-resource ml-4", 4, "ngFor", "ngForOf"], [1, "form-group", "card-resource", "ml-4"], ["style", "color: black; font-weight: bold", 4, "ngIf"], [1, "delete-icon", "w-100"], ["class", "img-path", "src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", "alt", "", 3, "title", "click", 4, "ngIf"], ["class", "img-path", "src", "assets/images/ristaschool/assessment.png", "alt", "", 3, "title", "click", 4, "ngIf"], [1, "mt-2", "classresource"], [1, "row", "mt-5"], [1, "col-md-6"], [1, "btn", "btn-primary", "col-md-12", 3, "click"], [1, "btn", "btn-outline-primary", "col-md-12", 3, "click"], ["src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", "alt", "", 1, "img-path", 3, "click", "title"], ["src", "assets/images/ristaschool/assessment.png", "alt", "", 1, "img-path", 3, "click", "title"], [1, "form-group", "card-resource"], ["alt", "", "class", "img-path", "src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", 3, "title", "click", 4, "ngIf"], ["alt", "", "class", "img-path", "src", "assets/images/ristaschool/assessment.png", 3, "title", "click", 4, "ngIf"], [1, "mt-2", "cursor", "classresource", 3, "click"], ["alt", "", "src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", 1, "img-path", 3, "click", "title"], ["alt", "", "src", "assets/images/ristaschool/assessment.png", 1, "img-path", 3, "click", "title"], ["class", "form-group card-resource", 4, "ngFor", "ngForOf"], ["class", "delete-icon w-100", 4, "ngIf"], ["src", "assets/images/ristaschool/answerkey.jpg", "alt", "", 1, "cursor", "img-path", 3, "click", "title"], ["class", "img-icon mt-2 float-right", "src", "assets/images/pdf-icons/Icon material-delete@2x.png", "alt", "", 3, "click", 4, "ngIf"], ["src", "assets/images/pdf-icons/Icon material-delete@2x.png", "alt", "", 1, "img-icon", "mt-2", "float-right", 3, "click"], ["alt", "", "src", "assets/images/ristaschool/teacherVersion.png", 1, "cursor", "img-path", 3, "click", "title"], ["alt", "", "class", "img-icon mt-2 float-right", "src", "assets/images/pdf-icons/Icon material-delete@2x.png", 3, "click", 4, "ngIf"], ["alt", "", "src", "assets/images/pdf-icons/Icon material-delete@2x.png", 1, "img-icon", "mt-2", "float-right", 3, "click"], [1, "col-md-8", "d-flex", "mb-2", "px-0"], [1, "pdf-assign-btn", "pdf-tools", "col-md-5", "d-flex", "pl-0"], [1, "col-md-6", "px-0"], ["src", "assets/images/pdf-icons/add-circle.png", "title", "Zoom-in", "alt", "", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/pdf-icons/minus-circle.png", "title", "Zoom-out", "alt", "", 2, "cursor", "pointer", 3, "click"], ["alt", "", "src", "assets/images/pdf-icons/Icon material-delete-1.png", "title", "Delete", 2, "cursor", "pointer", 3, "click", "ngClass"], [1, "col-md-6", "pl-0", "d-flex", "align-items-center"], [3, "click"], ["readonly", "", "type", "text", 1, "form-control", "text-center", "col-4", 3, "ngModelChange", "ngModel"], [1, "pdf-assign-btn", "pdf-tools", "col-md-7", "pr-2", "px-0", "d-flex", "justify-content-end"], [1, "col-md-12", "pr-2", "px-0", "d-flex", "justify-content-end"], ["alt", "", "src", "assets/images/pdf-icons/cursor (2).png", "title", "Mark", 1, "pull-right", 2, "width", "8%", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/stop.png", "title", "Extract", 1, "pull-right", 2, "width", "8%", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/eraser@2x.png", "title", "Eraser", 1, "pull-right", 2, "width", "8%", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/math2.png", "title", "Math", 1, "pull-right", 2, "width", "8%", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/Text.png", "title", "Text", 1, "pull-right", 2, "width", "8%", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/highlighter-icon.png", "title", "Highlighter", 1, "pull-right", 2, "width", "8%", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/Icon awesome-pencil-alt.png", "title", "Sketch", 1, "pull-right", 2, "width", "8%", 3, "click", "ngClass"], ["name", "favcolor", "title", "Color", "type", "color", 1, "pull-right", "mr-2", 2, "margin-top", "6px", "width", "11%", 3, "click", "ngModelChange", "ngModel"], ["title", "Font size", 1, "form-control", "pull-right", 2, "width", "15%", 3, "ngModelChange", "ngModel"], ["disabled", "", "selected", "", "value", ""], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "19"], ["value", "20"], [1, "d-flex", "justify-content-between", 2, "flex-wrap", "wrap"], ["alt", "", "class", "card-img img-thumbnail question-type", "data-toggle", "modal", 3, "src", "title", "click", 4, "ngFor", "ngForOf"], ["alt", "", "data-toggle", "modal", "src", "assets/images/pdf-icons/graph_2x.png", "title", "Graph Question", 1, "card-img", "img-thumbnail", "question-type", 3, "click"], ["title", "Add section", "src", "assets/images/pdf-icons/add-section.png", "alt", "", 1, "card-img", "img-thumbnail", "question-type", 3, "click"], ["alt", "", "data-toggle", "modal", 1, "card-img", "img-thumbnail", "question-type", 3, "click", "src", "title"], [1, "col-12", "px-0", "mt-2", "d-flex", "justify-content-end"], [1, "btn-sm", "cancel", 3, "click"], ["id", "pdf-page", 1, "col-md-8", 3, "click", "dblclick", "mousemove", "mouseover", "mousedown", "mouseenter", "mouseleave", "input", "mouseup"], ["id", "custom-pdf-loader", "style", "height: 100vh;", 4, "ngIf"], [2, "display", "block", 3, "text-layer-rendered", "after-load-complete", "error", "pagechanging", "pageChange", "page-rendered", "src", "zoom", "original-size", "fit-to-page", "render-text", "show-all", "page"], ["id", "custom-pdf-loader", 2, "height", "100vh"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", ""], [1, "col-md-8"], [3, "pdfPath"], ["type", "button", 1, "btn", "btn-primary", "w-100", "mb-3", 3, "click"], [1, "scrollPanel", 3, "undoDeleteAnnatation", "hoverremoveItem", "hoverleaveremoveItem", "removeItem", "openDeleteDialog", "items"], [1, "col-md-12"], [1, "form-group", "col-md-12", "pb-3", "px-0"], [1, "col-md-12", "d-flex", "justify-content-between", "px-0"], ["type", "text", 1, "input-custom-modal", 3, "input", "ngModelChange", "ngModel", "ngClass", "placeholder", "id"], [1, "col-md-1", "px-0", 3, "hidden"], [1, "pull-right", "delete-border"], ["alt", "", "src", "assets/images/pdf-icons/delete2.png", "title", "Delete section", 3, "click"], ["hidden", "", 1, "error", "mt-2", 3, "id"], ["class", "col-md-12 card mx-0 px-4", 4, "ngFor", "ngForOf"], [1, "col-md-12", "card", "mx-0", "px-4"], ["class", "card-header ant-card-small", 4, "ngIf"], [1, "card-header", "ant-card-small"], [1, "col-md-2", "px-0"], ["style", "cursor: all-scroll", "cdkDrag", "", "class", "pull-left question-no col-md-10 mr-2", 3, "id", "mousedown", "mousemove", "dropped", "mouseup", 4, "ngIf"], ["class", "pull-left question-no col-md-10 mr-2", 4, "ngIf"], ["alt", "", "src", "assets/images/pdf-icons/auto-grade.png", "title", "auto graded", 1, "mr-2", 3, "hidden"], ["alt", "", "src", "assets/images/pdf-icons/match-case.png", "title", "match case", 1, "mr-2", "mt-2", "border", 3, "hidden"], ["alt", "", "src", "assets/images/pdf-icons/math-icon.png", "title", "math question", 1, "mr-2", 3, "hidden"], [1, "col-md-4", "px-0", 3, "hidden"], ["alt", "", "src", "assets/images/pdf-icons/Icon material-delete.png", "title", "Delete", 1, "pull-right", "ml-3", "mt-2", "cursor", 3, "click"], ["alt", "", "data-toggle", "modal", "src", "assets/images/pdf-icons/draw.png", "title", "Edit", 1, "pull-right", "mt-2", 3, "click"], ["class", "col-md-12 mt-3 px-0", 4, "ngIf"], ["class", "col-md-12 mt-3 mb-2 px-0", 4, "ngIf"], ["class", "col-md-12 px-0 mb-2", 4, "ngIf"], ["class", "col-md-12 mt-3 px-0", "style", "overflow-y: auto;", 4, "ngIf"], ["class", "col-md-12 mt-3 px-0 mb-2", 4, "ngIf"], ["cdkDrag", "", 1, "pull-left", "question-no", "col-md-10", "mr-2", 2, "cursor", "all-scroll", 3, "mousedown", "mousemove", "dropped", "mouseup", "id"], [1, "pull-left", "question-no", "col-md-10", "mr-2"], [1, "col-md-12", "mt-3", "px-0"], [1, "col-md-12", "overflow-auto", "px-0", 2, "max-height", "30rem", "overflow-y", "auto"], [1, "div-disable", 3, "innerHTML", "id"], [1, "col-md-12", "mt-3", "mb-2", "px-0"], ["class", "multichoice-option", "style", "line-height: 4", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "multichoice-option", 2, "line-height", "4", 3, "ngClass"], ["type", "radio", 1, "ml-4", 2, "pointer-events", "none", 3, "checked"], [1, "ml-2", "mb-0"], [1, "form-control"], ["disabled", "", 3, "selected", 4, "ngFor", "ngForOf"], ["disabled", "", 3, "selected"], ["class", "col-12 px-0 mb-3", 4, "ngFor", "ngForOf"], [1, "col-12", "px-0", "mb-3"], ["readonly", "", 1, "form-control", 3, "value"], [1, "col-md-12", "px-0", "mb-2"], ["cols", "30", "readonly", "", "rows", "2", 1, "form-control"], [1, "col-md-12", "mt-3", "px-0", 2, "overflow-y", "auto"], [3, "innerHTML"], [1, "col-md-12", "mt-3", "px-0", "mb-2"], [1, "graphEditorDiv", 3, "innerHTML"], [4, "ngFor", "ngForOf"], ["readonly", "", "rows", "1", 1, "form-control", "mb-2", 3, "value"], [1, "col-md-12", "px-0"], [1, "col-md-12", "custom-card", 3, "innerHTML"], ["cdkDrag", "", "role", "dialog", 1, "modal", "fade", "overflow-visible", 3, "id"], ["role", "document", 1, "modal-dialog", 2, "max-width", "85% !important"], [1, "modal-content"], [1, "modal-body"], ["cdkDragHandle", "", 1, "row", "cursor-move"], [1, "col-sm-11"], [1, "text-center", "mb-0"], [1, "col-sm-1", "text-right", "align-self-center"], ["data-dismiss", "modal", 1, "fa", "fa-times-circle", "text-right", "color-red", "cursor", 2, "font-size", "1.75em !important", 3, "click"], [1, "col-sm-12", "mt-3"], [1, "col-12", "d-flex"], ["class", "question-no col-md-1", 3, "mouseover", 4, "ngIf"], ["class", "col-md-1 px-0", 3, "mouseout", 4, "ngIf"], [1, "col-md-11", "p-0", "d-flex", "justify-content-end"], ["class", "form-control col-md-6", "formControlName", "head", "id", "multichoices", 3, "selectedIndex", "change", 4, "ngIf"], ["type", "button", 1, "btn-sm", "btn-primary", "pull-right", "ml-2", 3, "click"], [1, "fa", "fa-plus-circle"], ["class", "errormessage", 4, "ngIf"], [1, "col-md-12", "dropDownScroll"], ["formArrayName", "repeatlink", 4, "ngFor", "ngForOf"], [1, "modal-footer", "d-flex", "justify-content-right", "mt-1", 2, "border-top", "none"], ["class", "btn btn-primary", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", "type", "button", 3, "disabled", "click", 4, "ngIf"], [1, "question-no", "col-md-1", 3, "mouseover"], [1, "col-md-1", "px-0", 3, "mouseout"], ["formControlName", "index", "type", "text", 1, "form-control", "px-1", 3, "keypress", "ngModelChange", "ngModel", "value"], ["formControlName", "head", "id", "multichoices", 1, "form-control", "col-md-6", 3, "change", "selectedIndex"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "errormessage"], ["formArrayName", "repeatlink"], [1, "mb-1", 3, "formGroupName"], [1, "col-12", "d-flex", "justify-content-between", "mt-2"], [1, "sub-question-no", "col-md-1", "mt-0", 3, "hidden"], ["id", "subMulti"], [1, "col-md-2", "px-0", 3, "hidden"], [1, "pull-right", "border", "p-2", 3, "click"], ["alt", "", "src", "assets/images/pdf-icons/delete2.png", "title", "Delete"], [1, "row", "mt-3"], [3, "emitEditorValue", "editorPatchValue", "height", "id", "showDropBtn", "showInputBtn"], [1, "col-md-10", "mt-2"], ["formControlName", "option", "type", "text", 1, "form-control", 3, "input", "keyup"], [1, "col-md-2", "mt-2"], ["formControlName", "points", "type", "text", 1, "form-control", 2, "margin-right", "1rem", 3, "keypress"], [1, "w-100"], [1, "row", "mb-2"], ["class", "multichoice-option1", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-md-6", "d-flex", "align-items-center"], ["formControlName", "autograde", "type", "checkbox", 3, "id"], [1, "cursor", "ml-2", "mb-0", 3, "for"], [1, "col-md-6", "d-flex", "justify-content-end"], [1, "mr-2", "align-self-center", "mb-0"], ["formControlName", "page", "type", "input", 1, "form-control", "col-4", "text-center"], [1, "multichoice-option1", 3, "click", "ngClass"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "form-control col-md-6", "formControlName", "head", "id", "truefalse", 3, "selectedIndex", "change", 4, "ngIf"], [1, "btn-sm", "btn-primary", "pull-right", "ml-2", 3, "click"], ["formArrayName", "repeatchoose", 4, "ngFor", "ngForOf"], [1, "modal-footer", "d-flex", "justify-content-right", "mt-2", 2, "border-top", "none"], ["formControlName", "head", "id", "truefalse", 1, "form-control", "col-md-6", 3, "change", "selectedIndex"], ["formArrayName", "repeatchoose"], ["id", "subChoose"], [1, "mt-2", "d-flex", "flex-row"], [1, "form-check-inline"], [1, "form-check-label", "cursor", 3, "for"], ["formControlName", "optradio", "type", "radio", "value", "true", 1, "form-check-input", "pl-0", 3, "id"], [1, "form-check-label", "ml-2", "cursor", 3, "for"], ["formControlName", "optradio", "type", "radio", "value", "false", 1, "form-check-input", "ml-2", 3, "id"], ["formControlName", "points1", "type", "text", 1, "form-control", 3, "keypress"], [1, "ml-2", "mb-0", "cursor", 3, "for"], ["class", "form-control col-md-6", "formControlName", "head", "id", "drop", 3, "selectedIndex", "change", 4, "ngIf"], ["formArrayName", "repeatplus", 4, "ngFor", "ngForOf"], [1, "modal-footer", "d-flex", "justify-content-right", 2, "border-top", "none"], ["formControlName", "head", "id", "drop", 1, "form-control", "col-md-6", 3, "change", "selectedIndex"], ["formArrayName", "repeatplus"], ["id", "subChoice"], [1, "mb-0"], ["formArrayName", "choiceList"], ["class", "mt-2", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mt-3", "text-center"], ["type", "button", 1, "btn", "btn-outline-primary", "choiceAdd", 3, "click"], [1, "col-md-10"], ["formControlName", "answer", 1, "form-control", 3, "change", "mouseenter", "id"], [3, "selected", "value"], [1, "col-md-2"], ["formControlName", "points", "type", "text", 1, "form-control", 3, "keypress"], ["formControlName", "autograde", "type", "checkbox"], [1, "mt-2"], [3, "formGroupName"], [1, "input-group"], ["aria-describedby", "basic-addon2", "aria-label", "Recipient's username", "formControlName", "choice", "placeholder", "Choice", "type", "text", 1, "form-control", 3, "change"], [1, "input-group-append"], ["id", "basic-addon2", 1, "form-control", 2, "background-color", "gainsboro"], [1, "fa", "fa-trash", 2, "background-color", "#cccccc", 3, "click"], ["class", "form-control col-md-6", "formControlName", "head", "id", "fillin", 3, "selectedIndex", "change", 4, "ngIf"], ["formArrayName", "repeatentry", 4, "ngFor", "ngForOf"], ["formControlName", "head", "id", "fillin", 1, "form-control", "col-md-6", 3, "change", "selectedIndex"], ["formArrayName", "repeatentry"], ["id", "subEntry"], [1, "col-md-12", "my-3", "d-flex", "align-items-center", "justify-content-between"], ["class", "btn btn-outline-primary pull-right", 3, "click", 4, "ngIf"], ["formArrayName", "repeatEntryCorrect", 4, "ngFor", "ngForOf"], [1, "row", "ml-1", "mt-2"], [1, "col-md-4"], ["formControlName", "matchCase", "id", "exampleCheck1", "type", "checkbox", 1, "form-check-input", "cursor"], ["for", "exampleCheck1", 1, "form-check-label", "cursor"], [1, "col-md-12", "mt-3"], ["id", "exampleCheck2", "formControlName", "autograde", "type", "checkbox", 1, "form-check-input", "cursor"], ["for", "exampleCheck2", 1, "form-check-label", "cursor"], ["formControlName", "page", "type", "text", 1, "form-control", "col-4", "text-center"], ["formControlName", "points", "type", "text", 1, "form-control", 2, "width", "60px", 3, "keypress"], [1, "btn", "btn-outline-primary", "pull-right", 3, "click"], [1, "fa", "fa-plus-circle", "mr-1"], ["formArrayName", "repeatEntryCorrect"], [1, "mb-3", "row", "px-3", 3, "formGroupName"], [1, "sub-question-no", "mt-0", "w-4", 2, "height", "36px !important"], ["id", "subEntry1"], [1, "px-2", 3, "ngClass"], ["formControlName", "correct", "placeholder", "Type answer here", "rows", "3", 1, "form-control"], ["class", "w-3", 4, "ngIf"], [1, "w-3"], ["class", "form-control col-md-6", "formControlName", "head", "id", "essays", 3, "selectedIndex", "change", 4, "ngIf"], [1, "col-12", "dropDownScroll"], ["formArrayName", "repeatessay", 4, "ngFor", "ngForOf"], ["formControlName", "head", "id", "essays", 1, "form-control", "col-md-6", 3, "change", "selectedIndex"], ["formArrayName", "repeatessay"], ["id", "sub"], ["formControlName", "lines", "placeholder", "Number of Lines", "type", "text", 1, "form-control", 3, "keypress"], [1, "row", "mt-3", "d-flex", "justify-content-end"], ["class", "form-control col-md-6", "formControlName", "head", "id", "math", 3, "selectedIndex", "change", 4, "ngIf"], ["formArrayName", "repeatnumeric", 4, "ngFor", "ngForOf"], ["formControlName", "head", "id", "math", 1, "form-control", "col-md-6", 3, "change", "selectedIndex"], ["formArrayName", "repeatnumeric"], [1, "col-md-12", "d-flex", "flex-column"], ["formArrayName", "repeatNumericCorrect", 4, "ngFor", "ngForOf"], [1, "row", "mb-2", "mt-2"], ["formArrayName", "repeatNumericCorrect"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "my-1"], ["class", "form-control col-md-6", "formControlName", "head", "id", "graph", 3, "selectedIndex", "change", 4, "ngIf"], ["id", "custom-pdf-loader", "style", "height: 60vh;", 4, "ngIf"], ["class", "col-12 dropDownScroll", 4, "ngIf"], ["formControlName", "head", "id", "graph", 1, "form-control", "col-md-6", 3, "change", "selectedIndex"], ["id", "custom-pdf-loader", 2, "height", "60vh"], ["alt", "", "src", "assets/images/pre-loader/loader-01.svg"], [1, "col-12", "d-flex", "flex-column"], [3, "editMode", "editPatchValue", "graphId", "questionType", "emitItem", "valueChange", 4, "ngIf"], [1, "row", "mt-3", "d-flex", "justify-content-between"], ["hidden", "", 1, "col-md-4"], [1, "ml-2"], [3, "emitItem", "valueChange", "editMode", "editPatchValue", "graphId", "questionType"], ["formArrayName", "repeatblanks", 4, "ngFor", "ngForOf"], ["formArrayName", "repeatblanks"], [1, "ml-2", "cursor", "mb-0", 3, "for"], ["aria-describedby", "basic-addon2", "placeholder", "Enter input answer", "rows", "1", "type", "text", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "editMode", "editPatchValue", "graphId", "questionType"], ["type", "button", 1, "btn", "btn-primary", "pull-right", "mt-4", 3, "click"], [1, "modal-header"], [1, "modal-title", "letter"], [1, "modal-footer", "d-flex", "justify-content-right", "mt-2"], ["type", "button", 1, "btn", "btn-primary-outline", 3, "click"], [1, "modal-body", 2, "border", "0"], [1, "col-sm-12", "text-right"], [1, "fa", "fa-close", "cursor", 2, "font-size", "1rem", 3, "click"], [1, "col-sm-12", "text-center"], [1, "modal-title", "headerText"], [1, "text-center", "mt-3"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "modal-header", "d-flex", "justify-content-between"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "col-md-12", "overflow-auto"], [1, "modal-header", "align-items-center"], [1, "modal-title", "font-weight-bold"], [1, "fa", "fa-close", "cursor", "align-self-center", 2, "font-size", "1.2rem", 3, "click"], [2, "display", "block", 3, "src"], [1, "contenttext", "text-center", "mb-0"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "file", "aria-describedby", "inputGroupFileAddon01", 1, "btn", "btn-primary", 3, "click"], [3, "emitEditorValue", "editorPatchValue", "height", "id", "imageToolHide", "showDropBtn", "showInputBtn"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [3, "closePopUp", "classData", "contentDetails"], [1, "col-12", "d-flex", "flex-wrap"], [1, "col-4"], ["type", "number", "formControlName", "noOfQuestions", "placeholder", "No of Questions *", 1, "form-control"], [1, "col-8"], ["formControlName", "questionType", 1, "form-control"], ["value", "null", "selected", "", "disabled", ""], ["value", "40"], [3, "class", 4, "ngIf"], ["class", "col-6 mt-3", 4, "ngIf"], ["data-toggle", "modal", "type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["formControlName", "section", 1, "form-control"], ["value", ""], [1, "col-6", "mt-3"], ["type", "text", "formControlName", "sectionName", "placeholder", "Enter Section Name", 1, "form-control"]], template: function CreateAssessmentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CreateAssessmentComponent_div_0_Template, 37, 29, "div", 17)(1, CreateAssessmentComponent_div_1_Template, 31, 10, "div", 18)(2, CreateAssessmentComponent_div_2_Template, 31, 10, "div", 18)(3, CreateAssessmentComponent_div_3_Template, 31, 10, "div", 18)(4, CreateAssessmentComponent_div_4_Template, 31, 10, "div", 18)(5, CreateAssessmentComponent_div_5_Template, 31, 10, "div", 18)(6, CreateAssessmentComponent_div_6_Template, 30, 10, "div", 18)(7, CreateAssessmentComponent_div_7_Template, 27, 11, "div", 18)(8, CreateAssessmentComponent_div_8_Template, 31, 10, "div", 18)(9, CreateAssessmentComponent_ng_template_9_Template, 12, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(11, CreateAssessmentComponent_ng_template_11_Template, 14, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(13, CreateAssessmentComponent_ng_template_13_Template, 14, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(15, CreateAssessmentComponent_ng_template_15_Template, 14, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(17, CreateAssessmentComponent_ng_template_17_Template, 14, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(19, CreateAssessmentComponent_ng_template_19_Template, 10, 3, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(21, CreateAssessmentComponent_ng_template_21_Template, 7, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(23, CreateAssessmentComponent_ng_template_23_Template, 16, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor)(25, CreateAssessmentComponent_ng_template_25_Template, 11, 7, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor)(27, CreateAssessmentComponent_ng_template_27_Template, 15, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor)(29, CreateAssessmentComponent_ng_template_29_Template, 1, 2, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor)(31, CreateAssessmentComponent_ng_template_31_Template, 22, 5, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showPage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.multiDialog);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.trueDialog);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.choiceDialog);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.entryDialog);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.essayDialog);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.numericDialog);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.graphDialog);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.blankDialog);
        } }, dependencies: [i14.NgClass, i14.NgForOf, i14.NgIf, i15.NgSelectComponent, i4.ɵNgNoValidate, i4.NgSelectOption, i4.ɵNgSelectMultipleOption, i4.DefaultValueAccessor, i4.NumberValueAccessor, i4.CheckboxControlValueAccessor, i4.SelectControlValueAccessor, i4.RadioControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.NgModel, i16.TagInputComponent, i4.FormGroupDirective, i4.FormControlName, i4.FormGroupName, i4.FormArrayName, i17.CdkDrag, i17.CdkDragHandle, i18.PdfViewerComponent, i19.RemoveAnnatationComponent, i20.GraphComponentComponent, i21.TinyMiceComponent, i22.ConfirmContentAssignComponent, i23.TreeviewContentfolderComponent, i24.OtherLinkComponent, i25.SourceLinkComponent, i26.SanitizeHtmlPipe], styles: ["//svg {\n//  cursor: crosshair;\n//  border: 1px solid #000000;\n//}\n//\n//rect {\n//  fill: none;\n//  stroke: #000000;\n//  stroke-width: 10;\n//}\n\n@keyframes blinkStroke {\n  100%,\n  0% {\n    stroke: #500;\n  }\n  30% {\n    stroke: deeppink;\n  }\n  60% {\n    stroke: yellow;\n  }\n  100% {\n    stroke: black;\n  }\n}\n\n@keyframes blinkFill {\n  100%,\n  0% {\n    fill: #500;\n  }\n  30% {\n    fill: deeppink;\n  }\n  60% {\n    fill: yellow;\n  }\n  100% {\n    fill: black;\n  }\n}\n\n.deleteIcon{\n  background: #e6baea !important;\n}\n\n\n\n.rectangle {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  &.move-to {\n    background-color: red;\n  }\n}\n\n\n\n.header {\n  h2 {\n    padding: 10px;\n    color: #37474f;\n  }\n  .link {\n    border-bottom: 1px solid black;\n    padding: 10px;\n    font-size: 11px;\n    a {\n      color: #673ab7;\n    }\n  }\n}\n\n.list {\n  display: flex;\n  flex-direction: column;\n  &-row {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    cursor: pointer;\n    position: relative;\n    &:hover {\n      background-color: #d5d5d5;\n    }\n    .delete-btn {\n      position: absolute;\n      top: 0;\n      right: 0;\n      .icon {\n        font-size: 16px;\n      }\n    }\n    pre {\n      .pre-title {\n        text-align: left;\n      }\n    }\n    .page-number {\n      text-align: right;\n      font-size: 12px;\n    }\n  }\n}\n.selectColor{\n  background: purple;\n  color: #fff;\n}\npdf-viewer {\n  /* define height */\n  height: 70vh;\n  /* or use flex for example */\n  flex: 1;\n}\n\n//@media screen {\n//  :host {\n//    display: block;\n//  }\n//}\n\n\n\n//.ck-editor__editable_inline {\n//  min-height: 400px;\n//}\n"], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateAssessmentComponent, [{
        type: Component,
        args: [{ selector: 'app-create-assessment', encapsulation: ViewEncapsulation.None, template: "<div class=\"container-fluid\" *ngIf=\"showPage\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <h4 *ngIf=\"uploadType == 'assessment' && assessmentType == 'add'\">CREATE ASSESSMENT</h4>\n            <h4 *ngIf=\"uploadType == 'assessment' && assessmentType == 'edit'\">EDIT ASSESSMENT - <span\n                    class=\"color-primary\">{{contentName}}</span></h4>\n            <h4 *ngIf=\"uploadType == 'assignment' && assessmentType == 'add'\">CREATE ASSIGNMENT</h4>\n            <h4 *ngIf=\"uploadType == 'assignment' && assessmentType == 'edit'\">EDIT ASSIGNMENT - <span\n                    class=\"color-primary\">{{contentName}}</span></h4>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"pdf-nav col-8\">\n            <button type=\"button\" [ngClass]=\"{'active1': type == 'Description'}\"\n                    class=\"btn btn-outline-primary pull-left\" aria-pressed=\"true\" (click)=\"classList(1)\">Description\n            </button>\n            <button (click)=\"checkField(2)\"\n                    [ngClass]=\"{'active1': type == 'Workspace', 'div-disable': (!functionCalled && assessmentType != 'edit')}\"\n                    class=\"btn btn-outline-primary pull-left\">Workspace\n            </button>\n            <button (click)=\"checkField(3)\"\n                    [ngClass]=\"{'active1': type == 'Preview', 'div-disable': (!functionCalled && assessmentType != 'edit')}\"\n                    class=\"btn btn-outline-primary pull-left\">Preview\n            </button>\n        </div>\n\n        <div class=\"pdf-assign-btn col-4\" *ngIf=\"type == 'Workspace' || type == 'Preview'\">\n<!--            <button class=\"btn btn-primary pull-right ml-3\" *ngIf=\"assessmentType == 'add' && draftAdd == 'update'\"-->\n<!--                    (click)=\"assign('edit')\">Publish-->\n<!--            </button>-->\n<!--            <button (click)=\"assign('edit')\" *ngIf=\"assessmentType == 'add' && draftAdd == 'publish'\"-->\n<!--                    class=\"btn btn-primary pull-right ml-3\">Publish-->\n<!--            </button>-->\n<!--            <button  *ngIf=\"assessmentType == 'edit' && draftAdd == 'publish'\"-->\n<!--                     class=\"btn btn-primary pull-right ml-3\" (click)=\"assign('edit')\">Publish-->\n<!--            </button>-->\n<!--            <button class=\"btn btn-primary pull-right ml-3\" title=\"Publish\"-->\n<!--                    *ngIf=\"assessmentType == 'edit' && draftAdd == 'update'\" (click)=\"assign('edit')\">Update-->\n<!--            </button>-->\n\n            <button class=\"btn btn-primary pull-right ml-3\" [title]=\"assessmentType == 'edit' && draftAdd == 'update' ? 'Update' : 'Publish'\"\n                    *ngIf=\"['add', 'edit'].includes(assessmentType) && ['publish', 'update'].includes(draftAdd)\" (click)=\"assign('edit')\">\n                {{assessmentType == 'edit' && draftAdd == 'update' ? 'Update' : 'Publish'}}\n            </button>\n            <!--            <button class=\"btn btn-primary pull-right ml-3\" *ngIf=\"assessmentType == 'add'\" (click)=\"draft('edit')\">Save As Draft</button>-->\n            <button class=\"btn btn-primary pull-right ml-3\" (click)=\"draft('edit')\">Save As Draft</button>\n\n            <!--            <img class=\"pull-right ml-3\" title=\"Draft\" src=\"assets/images/pdf-icons/floppy-disk.png\" *ngIf=\"assessmentType == 'add'\" (click)=\"draft('edit')\" alt=\"\">-->\n            <!--            <img class=\"pull-right ml-3\" title=\"Draft\" src=\"assets/images/pdf-icons/floppy-disk.png\" *ngIf=\"assessmentType == 'edit'\" (click)=\"draft('edit')\" alt=\"\">-->\n            <!--            <button class=\"btn btn-primary pull-right ml-3\" title=\"Add Bulk Question\" (click)=\"addBulkQuestion()\">Add Bulk</button>-->\n        </div>\n    </div>\n    <div class=\"row mt-2\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-body tab2-card\" *ngIf=\"type == 'Description'\">\n                    <form [formGroup]=\"multiform\">\n                        <div class=\"col-md-12 d-flex mb-4\">\n                            <div class=\"col-sm-12 col-md-4 px-0\">\n                                <div class=\"image-container-left\">\n                                    <img *ngIf=\"!imagepath && uploadType == 'assessment'\"\n                                         src=\"assets/images/ristaschool/assessment.png\" class=\"w-100\" alt=\"\">\n                                    <img *ngIf=\"!imagepath && uploadType == 'assignment'\"\n                                         src=\"assets/images/ristaschool/assignment.png\" class=\"w-100\" alt=\"\">\n                                    <img *ngIf=\"imagepath\" class=\"w-100\"\n                                         [src]=\"sanitized.bypassSecurityTrustResourceUrl(webhost + '/' + imagepath)\"\n                                         alt=\"\">\n                                    <i *ngIf=\"imagepath\" class=\"fa fa-times close-button\" title=\"close\"\n                                       (click)=\"deleteImg()\"></i>\n                                    <div class=\"profileUrl\">\n                                        <input style=\"display: none\" type=\"file\" class=\"custom-upload-input\"\n                                               (change)=\"encodeImageFileAsURL($event)\" #addAssignment\n                                               accept=\".png, .jpeg, .jpg\">\n                                        <button type=\"button\" class=\"btn btn-light btn-circle border-rista\"\n                                                title=\"upload Image\" (click)=\"addAssignment.click()\"><i\n                                                class=\"fa fa-upload fa-2x mb-3\" aria-hidden=\"true\"></i></button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-12 col-md-8\">\n                                <div>\n                                    <h6><b>Created By</b></h6>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-4 form-group\">\n                                        <input readonly class=\"form-control\" formControlName=\"tname\" type=\"text\"\n                                               placeholder=\"Teacher Name\">\n                                    </div>\n                                    <div class=\"col-md-8 form-group\" *ngIf=\"uploadType == 'assignment'\">\n                                        <input class=\"form-control\" id=\"validationCustom1\" formControlName=\"classname\"\n                                               type=\"text\" placeholder=\"Assignment Name *\" required=\"\"\n                                               (change)=\"formChanged()\">\n                                        <em class=\"error\"\n                                            *ngIf=\"!multiform.get('classname').valid && (multiform.get('classname').dirty || multiform.get('classname').touched)\">Assignment\n                                            Name is required</em>\n                                    </div>\n                                    <div class=\"col-md-8 form-group\" *ngIf=\"uploadType == 'assessment'\">\n                                        <input class=\"form-control\" id=\"validationCustom2\" formControlName=\"classname\"\n                                               type=\"text\" placeholder=\"Assessment Name *\" required=\"\"\n                                               (change)=\"formChanged()\">\n                                        <em class=\"error\"\n                                            *ngIf=\"!multiform.get('classname').valid && (multiform.get('classname').dirty || multiform.get('classname').touched)\">Assessment\n                                            Name is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-4 form-group\">\n                                        <ng-select [items]=\"gradeData\"\n                                                   bindLabel=\"grade_name\"\n                                                   bindValue=\"grade_id\"\n                                                   formControlName=\"grade\"\n                                                   placeholder=\"Select Grade *\"\n                                                   typeToSearchText=\"\"\n                                                   multiple=\"true\"\n                                                   (change)=\"formChanged()\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\"\n                                            *ngIf=\"!multiform.get('grade').valid && (multiform.get('grade').dirty || multiform.get('grade').touched)\">Grade\n                                            is required</em>\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                        <ng-select\n                                                [items]=\"subjectData\"\n                                                bindLabel=\"subject_name\"\n                                                bindValue=\"subject_id\"\n                                                formControlName=\"subject\"\n                                                placeholder=\"Select Subject *\"\n                                                typeToSearchText=\"\"\n                                                multiple=\"true\"\n                                                clearable=\"false\"\n                                                (change)=\"formChanged()\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\"\n                                            *ngIf=\"!multiform.get('subject').valid && (multiform.get('subject').dirty || multiform.get('subject').touched)\">Subject\n                                            is required</em>\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                        <select class=\"form-control\" formControlName=\"option\" (change)=\"formChanged()\">\n                                            <option *ngIf=\"roleid != '6'\" value=\"1\">Access to all within Org\n                                            </option>\n                                            <option *ngIf=\"roleid != '6'\" value=\"2\">Access only for you</option>\n                                            <option *ngIf=\"roleid == '6'\" value=\"4\">Access within corporate</option>\n                                            <!-- <option *ngIf=\"roleid != '6'\" value=\"3\">Public</option> -->\n                                        </select>\n                                        <em class=\"error\"\n                                            *ngIf=\"!multiform.get('option').valid && (multiform.get('option').dirty || multiform.get('option').touched)\">Class\n                                            Name is required</em>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"form-group col-md-12\">\n                                        <textarea name=\"\" id=\"\" placeholder=\"Enter Description\"\n                                                  formControlName=\"description\"\n                                                  style=\"width: 100%; height: 100px; padding: 4px\"></textarea>\n                                    </div>\n                                    <div class=\"col-7 col-xl-7 col-md-7 px-0\">\n                                        <app-treeview-contentfolder\n                                                [type]=\"assessmentType\"\n                                                [content_id]=\"type == 'add' ?  '' : editData?.content_id\"\n                                                [selectedbatch]=\"assessmentType == 'edit' ? editData.batch_id : []\">\n                                        </app-treeview-contentfolder>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"col-md-6 form-group align-self-center mt-2\">\n                                        <div class=\"col-12\" style=\"position: relative; font-size: 15px; left: 0.4rem\">\n                                            <input type=\"checkbox\" class=\"form-check-input cursor\" id=\"download\"\n                                                   (change)=\"formChanged()\" formControlName=\"downloadContent\"><label\n                                                for=\"download\">Download Content</label>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6 form-group\">\n                                        <tag-input\n                                                formControlName=\"tag\"\n                                                [secondaryPlaceholder]=\"'Enter tags'\"\n                                                [placeholder]=\"'Add tags'\"\n                                                [editable]='true'\n                                                [clearOnBlur]=\"true\"\n                                                [addOnPaste]=\"true\"\n                                                [addOnBlur]=\"true\"\n                                                theme='bootstrap'\n                                                (change)=\"formChanged()\"\n                                        ></tag-input>\n                                    </div>\n                                </div>\n                                <!-- <div class=\"row\">\n                                    <div class=\"col-md-12 form-group\">\n                                        <tag-input formControlName=\"resourcesLink\"\n                                                   [secondaryPlaceholder]=\"'Enter Resources link'\"\n                                                   [placeholder]=\"'Add Resources'\"\n                                                   [editable]='true'\n                                                   [clearOnBlur]=\"true\"\n                                                   [addOnPaste]=\"true\"\n                                                   [addOnBlur]=\"true\"\n                                                   [pasteSplitPattern]=\"' '\"\n                                                   (change)=\"formChanged()\"\n                                                   theme='bootstrap'>\n                                        </tag-input>\n                                    </div>\n                                </div> -->\n                            </div>\n                        </div>\n                        <div class=\"col-12 mb-3\" *ngIf=\"getpdf.original_image_url == undefined\">\n                            <div class=\"col-md-12 px-0 d-flex justify-content-between\">\n                                <h4 style=\"color: black; font-weight: bold\">Source Link</h4>\n                                <i *ngIf=\"!editSourceLink\" class=\"fa fa-edit f-22px ml-3 cursor\"\n                                   (click)=\"editPrimaryLink()\"></i>\n                            </div>\n                            <app-source-link [setHeight]=\"false\" [showWithIcon]=\"false\" *ngIf=\"!editSourceLink\"\n                                             [pdfPath]=\"getpdf\"></app-source-link>\n\n                            <div *ngIf=\"editSourceLink\"\n                                 class=\"col-md-12 d-flex justify-content-center align-items-center p-4 link-card\">\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editLinkVal\"\n                                       [ngModelOptions]=\"{standalone: true}\" placeholder=\"Source Link\">\n                                <i class=\"fa fa-check-circle color-green fa-2x ml-3 cursor\"\n                                   (click)=\"updatePrimaryLink('icon')\"></i>\n                            </div>\n                        </div>\n\n                        <div class=\"col-12 py-1\">\n                            <app-other-link [showLink]=\"true\" [arrayValue]=\"getpdf?.links\"></app-other-link>\n                        </div>\n                        <div *ngIf=\"type == 'Description'\" class=\"col-md-12 d-flex justify-content-end mb-3\">\n                            <div *ngIf=\"answerpdfpath.length != 0\" class=\"col-4 d-flex justify-content-end\">\n                                <input (click)=\"allowAnswerKey($event)\" [checked]=\"showAnswerKey\"\n                                       class=\"align-self-center\" type=\"checkbox\">&nbsp;<span class=\"align-self-center\">Allow Answer Key to view</span>\n                            </div>\n                            <input #attachments1 #hiddenfileinput1 (change)=\"encodePdfFileAsURL($event, 2)\"\n                                   accept=\".pdf\" style=\"display: none\" type=\"file\">\n                            <button (click)=\"hiddenfileinput1.click()\" aria-describedby=\"inputGroupFileAddon11\"\n                                    class=\"btn btn-primary mr-2\"\n                                    type=\"file\"><i class=\"fa fa-upload\"></i> Answer Key Upload\n                            </button>\n                            <input #attachments2 #hiddenfileinput2 (change)=\"encodePdfFileAsURL($event, 3)\"\n                                   accept=\".pdf\" style=\"display: none\" type=\"file\">\n                            <button (click)=\"hiddenfileinput2.click()\" aria-describedby=\"inputGroupFileAddon11\"\n                                    class=\"btn btn-primary mr-2\"\n                                    type=\"file\"><i class=\"fa fa-upload\"></i> Teacher Version\n                            </button>\n                            <button (click)=\"saveAndExit()\" *ngIf=\"assessmentType != 'add'\"\n                                    class=\"btn btn-outline-primary mr-2\">Save\n                            </button>\n                            <button (click)=\"description()\" class=\"btn btn-primary\">Next <i aria-hidden=\"true\"\n                                                                                            class=\"fa fa-long-arrow-right fa-1x\"></i>\n                            </button>\n                        </div>\n                        <hr>\n                        <div class=\"col-md-12 mt-5\">\n                            <div class=\"row\">\n\n                                <div class=\"col-md-4 d-flex justify-content-center\"\n                                     *ngIf=\"assessmentType == 'edit' && getpdf.original_image_url != undefined\">\n                                    <div class=\"form-group card-resource ml-4\"\n                                         *ngFor=\"let file of showpdf; let i= index\">\n                                        <h4 *ngIf=\"uploadType == 'assignment' && assessmentType == 'edit'\"\n                                            style=\"color: black; font-weight: bold\">ASSIGNMENT PDF</h4>\n                                        <h4 *ngIf=\"uploadType == 'assessment' && assessmentType == 'edit'\"\n                                            style=\"color: black; font-weight: bold\">ASSESSMENT PDF</h4>\n                                        <div class=\"delete-icon w-100\">\n                                            <img *ngIf=\"uploadType == 'assignment'\" class=\"img-path\"\n                                                 src=\"assets/images/ristaschool/option-writing-checkbox-concepts-survey.png\"\n                                                 title=\"{{file.name}}\" (click)=\"viewDetail(file)\" alt=\"\">\n                                            <img *ngIf=\"uploadType == 'assessment'\" class=\"img-path\"\n                                                 src=\"assets/images/ristaschool/assessment.png\" title=\"{{file.name}}\"\n                                                 (click)=\"viewDetail(file)\" alt=\"\">\n                                            <br/>\n                                            <h6 class=\"mt-2 classresource\">{{file.image}}</h6>\n                                        </div>\n                                        <div class=\"row mt-5\">\n                                            <div class=\"col-md-6\">\n                                                <button class=\"btn btn-primary col-md-12\" (click)=\"pdfUpload()\"><i\n                                                        class=\"fa fa-upload\"></i> Upload\n                                                </button>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <button class=\"btn btn-outline-primary col-md-12\"\n                                                        (click)=\"viewDetail(file)\">Preview\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"getpdf != '' && assessmentType != 'edit' && getpdf.original_image_url != undefined\"\n                                     class=\"col-md-4 d-flex justify-content-center\">\n                                    <div class=\"form-group card-resource\">\n                                        <h4 *ngIf=\"uploadType == 'assignment'\" style=\"color: black; font-weight: bold\">\n                                            ASSIGNMENT PDF</h4>\n                                        <h4 *ngIf=\"uploadType == 'assessment'\" style=\"color: black; font-weight: bold\">\n                                            ASSESSMENT PDF</h4>\n                                        <div class=\"delete-icon w-100\">\n                                            <img (click)=\"viewDetail(getpdf)\" *ngIf=\"uploadType == 'assignment'\" alt=\"\"\n                                                 class=\"img-path\"\n                                                 src=\"assets/images/ristaschool/option-writing-checkbox-concepts-survey.png\"\n                                                 title=\"{{getpdf.name}}\">\n                                            <img (click)=\"viewDetail(getpdf)\" *ngIf=\"uploadType == 'assessment'\" alt=\"\"\n                                                 class=\"img-path\" src=\"assets/images/ristaschool/assessment.png\"\n                                                 title=\"{{getpdf.name}}\"> <br/>\n                                            <!--                                                <img *ngIf=\"getpdf != ''\" class=\"img-icon mt-2 float-right\" (click)=\"deletePdf()\" src=\"assets/images/pdf-icons/Icon material-delete@2x.png\"  alt=\"\">-->\n                                            <h6 (click)=\"viewDetail(getpdf)\"\n                                                class=\"mt-2 cursor classresource\">{{getpdf.image}}</h6>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"answerpdfpath.length != 0\" class=\"col-md-4 d-flex justify-content-center\">\n                                    <div class=\"form-group card-resource\"\n                                         *ngFor=\"let file of answerpdfpath; let i= index\">\n                                        <h4 style=\"color: black; font-weight: bold\">Answer PDF</h4>\n                                        <div class=\"delete-icon w-100\" *ngIf=\"answerpdfpath.length > 0\">\n                                            <img class=\"cursor img-path\" src=\"assets/images/ristaschool/answerkey.jpg\"\n                                                 title=\"{{file.image}}\" (click)=\"viewDetail(file)\" alt=\"\">\n                                            <br/>\n                                            <img *ngIf=\"answerpdfpath != ''\" class=\"img-icon mt-2 float-right\"\n                                                 (click)=\"deletePdf()\"\n                                                 src=\"assets/images/pdf-icons/Icon material-delete@2x.png\" alt=\"\">\n                                            <h6 (click)=\"viewDetail(file)\"\n                                                class=\"mt-2 cursor classresource\">{{file.image}}</h6>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"teacherVersion?.length != 0\" class=\"col-md-4 d-flex justify-content-center\">\n                                    <div *ngFor=\"let file of teacherVersion; let i= index\"\n                                         class=\"form-group card-resource\">\n                                        <h4 style=\"color: black; font-weight: bold\">Teacher version PDF</h4>\n                                        <div *ngIf=\"teacherVersion?.length > 0\" class=\"delete-icon w-100\">\n                                            <img (click)=\"viewDetail(file)\" alt=\"\" class=\"cursor img-path\"\n                                                 src=\"assets/images/ristaschool/teacherVersion.png\"\n                                                 title=\"{{file.image}}\">\n                                            <br/>\n                                            <img (click)=\"deleteVersion()\" *ngIf=\"teacherVersion?.length != 0\" alt=\"\"\n                                                 class=\"img-icon mt-2 float-right\"\n                                                 src=\"assets/images/pdf-icons/Icon material-delete@2x.png\">\n                                            <h6 (click)=\"viewDetail(file)\"\n                                                class=\"mt-2 cursor classresource\">{{file.image}}</h6>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div [hidden]=\"type == 'Description'\" class=\"col-md-12\">\n        <div [hidden]=\"type != 'Workspace'\" class=\"row d-flex flex-wrap justify-content-end mt-1\">\n            <div class=\"col-md-8 d-flex mb-2 px-0\" *ngIf=\"isPdfAvailable\">\n                <div class=\"pdf-assign-btn pdf-tools col-md-5 d-flex pl-0\">\n                    <div class=\"col-md-6 px-0\">\n                        <img src=\"assets/images/pdf-icons/add-circle.png\" style=\"cursor: pointer\" title=\"Zoom-in\"\n                             (click)=\"incrementZoom(0.1)\" alt=\"\">\n                        <img src=\"assets/images/pdf-icons/minus-circle.png\" style=\"cursor: pointer\" title=\"Zoom-out\"\n                             (click)=\"incrementZoom(-0.1)\" alt=\"\">\n                        <img (click)=\"deleteSvg()\" [ngClass]=\"selectedDeleteIcon ? 'deleteIcon': ''\" alt=\"\"\n                             src=\"assets/images/pdf-icons/Icon material-delete-1.png\" style=\"cursor: pointer\"\n                             title=\"Delete\">\n                    </div>\n                    <div class=\"col-md-6 pl-0 d-flex align-items-center\">\n                        <i (click)=\"decrementPage()\"\n                           class=\"fa fa-minus py-2 px-3 border rounded-left {{pageVariable > 1 ? 'color-primary' : 'color-grey'}}\"></i>\n                        <input [(ngModel)]=\"pageVariable\" class=\"form-control text-center col-4\" readonly type=\"text\">\n                        <i (click)=\"incrementPage()\"\n                           class=\"fa fa-plus py-2 px-3 border rounded-right {{pageVariable == totalPdfPage ? 'color-grey' : 'color-primary'}}\"></i>\n                    </div>\n                </div>\n                <div class=\"pdf-assign-btn pdf-tools col-md-7 pr-2 px-0 d-flex justify-content-end\">\n                    <div class=\"col-md-12 pr-2 px-0 d-flex justify-content-end\">\n                        <img style=\"width: 8%\" (click)=\"backToQuestion();tools('select', 'auto')\"\n                             [ngClass]=\"shapesType == 'select' ? 'selected-tool-color': ''\" alt=\"\" class=\"pull-right\"\n                             src=\"assets/images/pdf-icons/cursor (2).png\" title=\"Mark\">\n                        <img style=\"width: 8%\" (click)=\"backToQuestion();tools('rect', 'crosshair')\"\n                             [ngClass]=\"shapesType == 'rect'? 'selected-tool-color': ''\" alt=\"\" class=\"pull-right\"\n                             src=\"assets/images/pdf-icons/stop.png\" title=\"Extract\">\n                        <img style=\"width: 8%\" (click)=\"backToQuestion();tools('eraser', 'auto')\"\n                             [ngClass]=\"shapesType == 'eraser'? 'selected-tool-color': ''\" alt=\"\" class=\"pull-right\"\n                             src=\"assets/images/pdf-icons/eraser@2x.png\" title=\"Eraser\">\n                        <img style=\"width: 8%\" (click)=\"backToQuestion();tools('math', 'auto')\"\n                             [ngClass]=\"shapesType == 'math'? 'selected-tool-color': ''\" alt=\"\" class=\"pull-right\"\n                             src=\"assets/images/pdf-icons/math2.png\" title=\"Math\">\n                        <img style=\"width: 8%\" (click)=\"backToQuestion();tools('text', 'auto')\"\n                             [ngClass]=\"shapesType == 'text'? 'selected-tool-color': ''\" alt=\"\" class=\"pull-right\"\n                             src=\"assets/images/pdf-icons/Text.png\" title=\"Text\">\n                        <img style=\"width: 8%\" (click)=\"backToQuestion();tools('highlight', 'crosshair')\"\n                             [ngClass]=\"shapesType == 'highlight'? 'selected-tool-color': ''\" alt=\"\" class=\"pull-right\"\n                             src=\"assets/images/pdf-icons/highlighter-icon.png\" title=\"Highlighter\">\n                        <img style=\"width: 8%\" (click)=\"backToQuestion();tools('path', 'crosshair')\"\n                             [ngClass]=\"shapesType == 'path'? 'selected-tool-color': ''\" alt=\"\" class=\"pull-right\"\n                             src=\"assets/images/pdf-icons/Icon awesome-pencil-alt.png\" title=\"Sketch\">\n                        <input (click)=\"backToQuestion()\" [(ngModel)]=\"svgColor\" class=\"pull-right mr-2\" name=\"favcolor\"\n                               style=\"margin-top: 6px;width: 11%\" title=\"Color\" type=\"color\">\n                        <select [(ngModel)]=\"textFontSize\" class=\"form-control pull-right\" style=\"width: 15%\"\n                                title=\"Font size\">\n                            <option disabled selected value=\"\">--Font Size--</option>\n                            <option value=\"6\">6</option>\n                            <option value=\"7\">7</option>\n                            <option value=\"8\">8</option>\n                            <option value=\"9\">9</option>\n                            <option value=\"10\">10</option>\n                            <option value=\"11\">11</option>\n                            <option value=\"12\">12</option>\n                            <option value=\"13\">13</option>\n                            <option value=\"14\">14</option>\n                            <option value=\"15\">15</option>\n                            <option value=\"16\">16</option>\n                            <option value=\"17\">17</option>\n                            <option value=\"18\">18</option>\n                            <option value=\"19\">19</option>\n                            <option value=\"20\">20</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4 px-0\">\n                <div *ngIf=\"type == 'Workspace'\" class=\"d-flex justify-content-between\" style=\"flex-wrap: wrap\">\n                    <img *ngFor=\"let item of icons;\" (click)=\"question(item.question_type_id)\"\n                         [attr.data-target]=\"'#log' + item.question_type_id\"\n                         [src]=\"sanitized.bypassSecurityTrustResourceUrl(webhost + '/' + item.icon_path)\" alt=\"\"\n                         class=\"card-img img-thumbnail question-type\" data-toggle=\"modal\"\n                         title=\"{{item.question_type}}\">\n                    <img (click)=\"question('40')\" [attr.data-target]=\"'#log40'\" alt=\"\" data-toggle=\"modal\"\n                         class=\"card-img img-thumbnail question-type\"\n                         src=\"assets/images/pdf-icons/graph_2x.png\" title=\"Graph Question\">\n                    <img class=\"card-img img-thumbnail question-type\" title=\"Add section\"\n                         src=\"assets/images/pdf-icons/add-section.png\"\n                         alt=\"\" (click)=\"addSec('')\">\n                </div>\n            </div>\n            <div class=\"col-12 px-0 mt-2 d-flex justify-content-end\" *ngIf=\"type == 'Workspace'\">\n                <button class=\"btn-sm cancel\" (click)=\"addBulkQuestion()\">Add bulk</button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\" id=\"pdf-page\" #pdfPage\n                 *ngIf=\"isPdfAvailable\"\n                 (click)=\"mouseEvent($event)\"\n                 (dblclick)=\"editText($event)\"\n                 (mousemove)=\"mouseEvent($event)\"\n                 (mouseover)=\"mouseOver($event)\"\n                 (mousedown)=\"mouseEvent($event)\"\n                 (mouseenter)=\"mouseEnter()\"\n                 (mouseleave)=\"mouseOut($event)\"\n                 (input)=\"keyPressfunction($event)\"\n                 (mouseup)=\"mouseEvent($event)\">\n                <div id=\"custom-pdf-loader\" *ngIf=\"customPdfLoader\" style=\"height: 100vh;\">\n                    <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">\n                </div>\n                <pdf-viewer [src]=\"pdfTemplate\" [zoom]=\"zoom\"\n                            [original-size]=\"true\"\n                            [fit-to-page]=\"true\"\n                            [render-text]=\"shapesType == 'select'\"\n                            (text-layer-rendered)=\"textRender($event)\"\n                            (after-load-complete)=\"callBackFn($event)\"\n                            (error)=\"onerror($event)\"\n                            [show-all]=\"true\" (pagechanging)=\"pagechanging($event)\"\n                            [(page)]=\"pageVariable\" (page-rendered)=\"pageRendered($event)\"\n                            style=\"display: block\"></pdf-viewer>\n            </div>\n            <div class=\"col-md-8\" *ngIf=\"!isPdfAvailable\">\n                <app-source-link [pdfPath]=\"getpdf\"></app-source-link>\n            </div>\n            <div class=\"col-md-4 pr-0\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 mt-2\">\n                        <button (click)=\"backToQuestion()\" *ngIf=\"deleteAnnatation\" class=\"btn btn-primary w-100 mb-3\"\n                                type=\"button\">Back\n                        </button>\n                    </div>\n                    <ng-container *ngIf=\"deleteAnnatation\">\n                        <app-remove-annatation [items]=\"itemSelect\"\n                                               (undoDeleteAnnatation)=\"undoDeleteAnnatation($event)\"\n                                               (hoverremoveItem)=\"hoverRemoveItemEnter($event)\"\n                                               (hoverleaveremoveItem)=\"hoverLeaveRemoveItemEnter($event)\"\n                                               (removeItem)=\"removeAnnatation($event)\"\n                                               (openDeleteDialog)=\"deleteAction()\"\n                                               class=\"scrollPanel\"></app-remove-annatation>\n                    </ng-container>\n                    <ng-container [hidden]=\"deleteAnnatation\">\n                        <div [hidden]=\"deleteAnnatation\" class=\"row mt-1 scrollPanel1\">\n                            <div *ngFor=\"let item of totalsub; let i = index\" class=\"col-md-12\">\n                                <div class=\"form-group col-md-12 pb-3 px-0\">\n                                    <div class=\"col-md-12 d-flex justify-content-between px-0\">\n                                        <div class=\"col-md-{{type == 'Preview' ? 12 : 11}} {{type == 'Preview' ? 'px-0' : 'pl-0'}}\">\n                                            <input (input)=\"validation(i, secHeadingArray[i])\"\n                                                   [(ngModel)]=\"secHeadingArray[i]\"\n                                                   [ngClass]=\"{'div-disable': type == 'Preview'}\"\n                                                   [placeholder]=\"type != 'Preview' ? 'Enter section heading...' : ''\"\n                                                   class=\"input-custom-modal\" id=\"section{{i}}\" type=\"text\">\n                                        </div>\n                                        <div [hidden]=\"type == 'Preview'\" class=\"col-md-1 px-0\">\n                                            <div class=\"pull-right delete-border\">\n                                                <img (click)=\"deleteSection(i)\" alt=\"\"\n                                                     src=\"assets/images/pdf-icons/delete2.png\" title=\"Delete section\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <em class=\"error mt-2\" hidden id=\"subHeading{{i}}\">Section heading should not be\n                                        same</em>\n                                    <em class=\"error mt-2\" hidden id=\"headingNull{{i}}\">Section heading should not be\n                                        empty</em>\n                                </div>\n                                <div *ngFor=\"let list of item.section; let j = index\" class=\"col-md-12 card mx-0 px-4\">\n                                    <div *ngIf=\"showdropdown\" class=\"card-header ant-card-small\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-2 px-0\">\n                                    <span (mousedown)=\"dragQueCount($event, i)\" (mousemove)=\"dragQueCount($event, i)\"\n                                          *ngIf=\"type != 'Preview'\"\n                                          style=\"cursor: all-scroll\"\n                                          (dropped)=\"onDrop($event)\"\n                                          (mouseup)=\"dragQueCount($event, i)\"\n                                          cdkDrag\n                                          class=\"pull-left question-no col-md-10 mr-2\"\n                                          id=\"{{list.sub + 'dropId' + i}}\">{{list.sub}}</span>\n                                                <span *ngIf=\"type == 'Preview'\"\n                                                      class=\"pull-left question-no col-md-10 mr-2\">{{list.sub}}</span>\n                                            </div>\n                                            <div class=\"col-md-6 px-0\">\n                                                <img [hidden]=\"list.autoGrade == '0'\" alt=\"\" class=\"mr-2\"\n                                                     src=\"assets/images/pdf-icons/auto-grade.png\" title=\"auto graded\">\n                                                <img [hidden]=\"list.matchCase == '0'\" alt=\"\" class=\"mr-2 mt-2 border\"\n                                                     src=\"assets/images/pdf-icons/match-case.png\" title=\"match case\">\n                                                <img [hidden]=\"list.typeId != '30'\" alt=\"\" class=\"mr-2\"\n                                                     src=\"assets/images/pdf-icons/math-icon.png\" title=\"math question\">\n                                            </div>\n                                            <div [hidden]=\"type != 'Workspace'\" class=\"col-md-4 px-0\">\n                                                <img (click)=\"deleteAlertView(list.sub, i, list.quesId)\" alt=\"\"\n                                                     class=\"pull-right ml-3 mt-2 cursor\"\n                                                     src=\"assets/images/pdf-icons/Icon material-delete.png\"\n                                                     title=\"Delete\">\n                                                <img (click)=\"editAction(list, subQuestion, totalsub, i, j)\"\n                                                     [attr.data-target]=\"'#log' + list.typeId\" alt=\"\"\n                                                     class=\"pull-right mt-2\" data-toggle=\"modal\"\n                                                     src=\"assets/images/pdf-icons/draw.png\" title=\"Edit\">\n                                            </div>\n                                            <!--                                <div *ngIf=\"(list.question != '' && list.question != null) && (list.typeId != '30' && list.typeId != '40')\"  class=\"col-md-12 mt-3 px-0\">-->\n                                            <!--                                    <label>{{list.question}}</label>-->\n                                            <!--                                </div>-->\n                                            <div *ngIf=\"list.question != ''\" class=\"col-md-12 mt-3 px-0\">\n                                                <div class=\"col-md-12 overflow-auto px-0\"\n                                                     style=\"max-height: 30rem;overflow-y: auto;\">\n                                                    <label>Question: </label>\n                                                    <span [innerHTML]=\"list.question | sanitizeHtml\" class=\"div-disable\"\n                                                          id=\"{{j}}+ 'show'\"></span>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"list.typeId == '1'\" class=\"col-md-12 mt-3 mb-2 px-0\">\n                                                <span *ngFor=\"let items of list.array\"\n                                                      [ngClass]=\"{'selectColor' : items.toLowerCase() === list.answer.toString().toLowerCase()}\"\n                                                      class=\"multichoice-option\" style=\"line-height: 4\">{{items}}</span>\n                                            </div>\n                                            <div *ngIf=\"list.typeId == '3'\" class=\"col-md-12 mt-3 mb-2 px-0\">\n                                                <div class=\"row\">\n                                                    <input [checked]=\"list.answer.toString() == 'true'\" class=\"ml-4\"\n                                                           style=\"pointer-events: none\" type=\"radio\"><h4\n                                                        class=\"ml-2 mb-0\">True</h4>\n                                                    <input [checked]=\"list.answer.toString() == 'false'\" class=\"ml-4\"\n                                                           style=\"pointer-events: none\" type=\"radio\"><h4\n                                                        class=\"ml-2 mb-0\">False</h4>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"list.typeId == '9'\" class=\"col-md-12 mt-3 mb-2 px-0\">\n                                                <select class=\"form-control\">\n                                                    <option *ngFor=\"let chc of list.array\"\n                                                            [selected]=\"chc.choice == list.answer.toString()\" disabled\n                                                    >{{chc.choice}}</option>\n                                                </select>\n                                            </div>\n                                            <div *ngIf=\"list.typeId == '10'\" class=\"col-md-12 mt-3 px-0\">\n                                                <div class=\"col-12 px-0 mb-3\"\n                                                     *ngFor=\"let answer of list?.answer; let k  = index\">\n                                                    <label>Answer {{k + 1}}: </label>\n                                                    <textarea [value]=\"answer\" class=\"form-control\" readonly></textarea>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"list.typeId == '20'\" class=\"col-md-12 px-0 mb-2\">\n                                                <label>Free text</label>\n                                                <textarea class=\"form-control\" cols=\"30\" readonly rows=\"2\"></textarea>\n                                            </div>\n                                            <div *ngIf=\"list.typeId == '30'\" class=\"col-md-12 mt-3 px-0\"\n                                                 style=\"overflow-y: auto;\">\n                                                <div class=\"col-12 px-0 mb-3\"\n                                                     *ngFor=\"let answer of list?.answer; let k  = index\">\n                                                    <label>Answer {{k + 1}}: </label>\n                                                    <span [innerHTML]=\"answer | sanitizeHtml\"></span>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"list.typeId == '40'\" class=\"col-md-12 mt-3 px-0 mb-2\">\n                                                <button (click)=\"graphDetail(list.answer)\" class=\"btn btn-primary\">view\n                                                    graph\n                                                </button>\n                                                <div *ngIf=\"list.editor != ''\" class=\"col-md-12 mt-3 px-0\">\n                                                    <h4 [innerHTML]=\"list.editor | sanitizeHtml\"\n                                                        class=\"graphEditorDiv\"></h4>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"list.typeId == '54'\" class=\"col-md-12 px-0 mb-2\">\n                                                <div *ngFor=\"let opt of list.answer\">\n                                                    <textarea [value]=\"opt.value\" class=\"form-control mb-2\" readonly\n                                                              rows=\"1\"></textarea>\n                                                </div>\n                                            </div>\n                                            <div *ngIf=\"list.explain != ''\" class=\"col-md-12 mt-3 px-0\">\n                                                <!--                                                <div class=\"col-md-12 overflow-auto px-0\" style=\"max-height: 30rem;overflow-y: auto;\">-->\n                                                <!--                                                    <button (click)=\"openExplanationPopup(list.explain)\" class=\"btn-outline-primary btn-sm\">view explanation</button>-->\n                                                <!--                                                </div>-->\n                                                <div class=\"col-md-12 px-0\">\n                                                    <label class=\"color-primary\">Explanation</label>\n                                                    <div [innerHTML]=\"list.explain | sanitizeHtml\"\n                                                         class=\"col-md-12 custom-card\"></div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"multiDialog\" cdkDrag class=\"modal fade overflow-visible\" id=\"log{{1}}\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\" style=\"max-width: 85% !important;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <!-- Container-fluid starts-->\n                <div class=\"container-fluid\">\n                    <form [formGroup]=\"multiform\">\n                        <div cdkDragHandle class=\"row cursor-move\">\n                            <div class=\"col-sm-11\">\n                                <h5 class=\"text-center mb-0\"><b>Multiple Choice</b></h5>\n                            </div>\n                            <div class=\"col-sm-1 text-right align-self-center\">\n                                <i style=\"font-size: 1.75em !important;\" data-dismiss=\"modal\"\n                                   class=\"fa fa-times-circle text-right color-red cursor\" (click)=\"closeDialog()\"></i>\n                            </div>\n                        </div>\n                        <hr>\n                        <div class=\"col-sm-12 mt-3\">\n                            <div class=\"row\">\n                                <div class=\"col-12 d-flex\">\n                                    <div (mouseover)=\"changeSpanTo()\" *ngIf=\"changeInput == false\"\n                                         class=\"question-no col-md-1\">\n                                        <span>{{countList}}</span>\n                                    </div>\n                                    <div (mouseout)=\"changeInputTo()\" *ngIf=\"changeInput == true\" class=\"col-md-1 px-0\">\n                                        <input (keypress)=\"numberValidate($event)\" [(ngModel)]=\"countList\"\n                                               [value]=\"countList\" class=\"form-control px-1\" formControlName=\"index\"\n                                               type=\"text\">\n                                    </div>\n                                    <div class=\"col-md-11 p-0 d-flex justify-content-end\">\n                                        <select (change)=\"changeSection('multichoices', '1')\"\n                                                *ngIf=\"totalsub.length > 1 && submitType != 'edit'\"\n                                                [selectedIndex]=\"sectionCount\" class=\"form-control col-md-6\"\n                                                formControlName=\"head\" id=\"multichoices\">\n                                            <option *ngFor=\"let item of secHeadingArray; let i = index\"\n                                                    value=\"{{i}}\">{{item}}</option>\n                                        </select>\n                                        <button (click)=\"add()\" class=\"btn-sm btn-primary pull-right ml-2\"\n                                                type=\"button\"><i class=\"fa fa-plus-circle\"></i> Sub Question\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <small *ngIf=\"quesNoInvalid\" class=\"errormessage\">question no already exist</small>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 dropDownScroll\">\n                            <div *ngFor=\"let list of multiform.get('repeatlink')['controls']; let i=index\"\n                                 formArrayName=\"repeatlink\">\n                                <div [formGroupName]=\"i\" class=\"mb-1\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 d-flex justify-content-between mt-2\">\n                                            <div [hidden]=\"hide == true\" class=\"sub-question-no col-md-1 mt-0\">\n                                                <span id=\"subMulti\">{{((i + 1) + 9).toString(36).toLowerCase()}}</span>\n                                            </div>\n                                            <div [hidden]=\"hide == true\" class=\"col-md-2 px-0\">\n                                                <div (click)=\"deleteSub(multiform.get('repeatlink'), i)\"\n                                                     class=\"pull-right border p-2\">\n                                                    <img alt=\"\" src=\"assets/images/pdf-icons/delete2.png\"\n                                                         title=\"Delete\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3\">\n                                        <div class=\"col-md-12\">\n                                            <app-tiny-mice\n                                                    (emitEditorValue)=\"getQuestionValue($event, i, multiform.get('repeatlink')['controls'])\"\n                                                    [editorPatchValue]=\"false\"\n                                                    [height]=\"250\"\n                                                    [id]=\"i+'multiQues'+ransom\"\n                                                    [showDropBtn]=\"false\"\n                                                    [showInputBtn]=\"false\">\n                                            </app-tiny-mice>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-10 mt-2\">\n                                            <label><b>Options</b></label>\n                                            <input (input)=\"getOptionVal($event)\" (keyup)=\"createSpace(i, $event)\"\n                                                   class=\"form-control\" formControlName=\"option\" type=\"text\">\n                                        </div>\n                                        <div class=\"col-md-2 mt-2\">\n                                            <label><b>Points</b></label>\n                                            <input (keypress)=\"numberValidate($event)\" class=\"form-control\"\n                                                   formControlName=\"points\" style=\"margin-right: 1rem\" type=\"text\">\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12 mt-2\">\n                                            <label class=\"w-100\"><b>Correct answer</b></label>\n                                            <div class=\"row mb-2\">\n                                                <!--<span *ngFor=\"let list of multiform['controls'].repeatlink['controls'][i]['controls']['array'].value; let j=index\" class=\"multichoice-option mt-2\" (click)=\"gettingChoiceList($event, i, j);\"  [ngClass]=\"[(list.length > 1)?'multichoice-option1':'multichoice-option', {'selectColor' : multiform['controls'].repeatlink['controls'][i]['controls']['active'].value === j}]\">{{list}}</span>-->\n                                                <span (click)=\"gettingChoiceList($event, i, j)\"\n                                                      *ngFor=\"let list of multiform['controls'].repeatlink['controls'][i]['controls']['array'].value; let j=index\"\n                                                      [ngClass]=\"{'selectColor' : multiform['controls'].repeatlink['controls'][i]['controls']['active'].value === j}\"\n                                                      class=\"multichoice-option1\">{{list}}</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3\">\n                                        <div class=\"col-md-12\">\n                                            <label><b>Explanation</b></label>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                            <app-tiny-mice\n                                                    (emitEditorValue)=\"getExplanationValue($event, i, multiform.get('repeatlink')['controls'])\"\n                                                    [editorPatchValue]=\"false\"\n                                                    [height]=\"250\"\n                                                    [id]=\"i+'explainMulti'+ransom\"\n                                                    [showDropBtn]=\"false\"\n                                                    [showInputBtn]=\"false\">\n                                            </app-tiny-mice>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3\">\n                                        <div class=\"col-md-6 d-flex align-items-center\">\n                                            <input id=\"multiChoice{{i}}\" formControlName=\"autograde\" type=\"checkbox\">\n                                            <label for=\"multiChoice{{i}}\" class=\"cursor ml-2 mb-0\">Autograde</label>\n                                        </div>\n                                        <div class=\"col-md-6 d-flex justify-content-end\">\n                                            <label class=\"mr-2 align-self-center mb-0\">Page No</label><input\n                                                class=\"form-control col-4 text-center\" formControlName=\"page\"\n                                                type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                    <!-- Container-fluid Ends-->\n                </div>\n                <div class=\"modal-footer d-flex justify-content-right mt-1\" style=\"border-top: none\">\n                    <button (click)=\"submitMulti(submitType)\" *ngIf=\"!isBulkUpload\"\n                            [attr.data-dismiss]=\"multiform.get('repeatlink').valid == true && !quesNoInvalid ? 'modal' : ''\"\n                            class=\"btn btn-primary\" type=\"button\">{{submitType == 'add' ? 'Submit' : 'Update'}}</button>\n                    <button (click)=\"submitMulti(submitType)\" *ngIf=\"isBulkUpload\"\n                            [attr.data-dismiss]=\"bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'modal' : ''\"\n                            [disabled]=\"!multiform.get('repeatlink').valid || quesNoInvalid\" class=\"btn btn-primary\"\n                            type=\"button\">{{bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'Finish' : 'Next'}}</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"trueDialog\" cdkDrag class=\"modal fade overflow-visible\" id=\"log{{3}}\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\" style=\"max-width: 85% !important;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <!-- Container-fluid starts-->\n                <div class=\"container-fluid\">\n                    <form [formGroup]=\"multiform\">\n                        <div cdkDragHandle class=\"row cursor-move\">\n                            <div class=\"col-sm-11\">\n                                <h5 class=\"text-center mb-0\"><b>True or False</b></h5>\n                            </div>\n                            <div class=\"col-sm-1 text-right align-self-center\">\n                                <i style=\"font-size: 1.75em !important;\" data-dismiss=\"modal\"\n                                   class=\"fa fa-times-circle text-right color-red cursor\" (click)=\"closeDialog()\"></i>\n                            </div>\n                        </div>\n                        <hr>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row mt-2\">\n                                <div class=\"col-12 d-flex\">\n                                    <div (mouseover)=\"changeSpanTo()\" *ngIf=\"changeInput == false\"\n                                         class=\"question-no col-md-1\">\n                                        <span>{{countList}}</span>\n                                    </div>\n                                    <div (mouseout)=\"changeInputTo()\" *ngIf=\"changeInput == true\" class=\"col-md-1 px-0\">\n                                        <input (keypress)=\"numberValidate($event)\" [(ngModel)]=\"countList\"\n                                               [value]=\"countList\" class=\"form-control px-1\" formControlName=\"index\"\n                                               type=\"text\">\n                                    </div>\n                                    <div class=\"col-md-11 p-0 d-flex justify-content-end\">\n                                        <select (change)=\"changeSection('truefalse', '3')\"\n                                                *ngIf=\"totalsub.length > 1 && submitType != 'edit'\"\n                                                [selectedIndex]=\"sectionCount\" class=\"form-control col-md-6\"\n                                                formControlName=\"head\" id=\"truefalse\">\n                                            <option *ngFor=\"let item of secHeadingArray; let i = index\"\n                                                    value=\"{{i}}\">{{item}}</option>\n                                        </select>\n                                        <button (click)=\"addTrue()\" class=\"btn-sm btn-primary pull-right ml-2\"><i\n                                                class=\"fa fa-plus-circle\"></i> Sub Question\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <small *ngIf=\"quesNoInvalid\" class=\"errormessage\">question no already exist</small>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 dropDownScroll\">\n                            <div *ngFor=\"let list of multiform.get('repeatchoose')['controls']; let i=index\"\n                                 formArrayName=\"repeatchoose\">\n                                <div [formGroupName]=\"i\" class=\"mb-1\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 d-flex justify-content-between mt-2\">\n                                            <div [hidden]=\"hide == true\" class=\"sub-question-no col-md-1 mt-0\">\n                                                <span id=\"subChoose\">{{((i + 1) + 9).toString(36).toLowerCase()}}</span>\n                                            </div>\n                                            <div [hidden]=\"hide == true\" class=\"col-md-2 px-0\">\n                                                <div (click)=\"deleteSub(multiform.get('repeatchoose'), i)\"\n                                                     class=\"pull-right border p-2\">\n                                                    <img alt=\"\" src=\"assets/images/pdf-icons/delete2.png\"\n                                                         title=\"Delete\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3\">\n                                        <div class=\"col-md-12\">\n                                            <app-tiny-mice\n                                                    (emitEditorValue)=\"getQuestionValue($event, i, multiform.get('repeatchoose')['controls'])\"\n                                                    [editorPatchValue]=\"false\"\n                                                    [height]=\"250\"\n                                                    [id]=\"i+'chooseQues'+ransom\"\n                                                    [showDropBtn]=\"false\"\n                                                    [showInputBtn]=\"false\">\n                                            </app-tiny-mice>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-10 mt-2\">\n                                            <label><b>Correct Answer</b></label>\n                                            <div class=\"mt-2 d-flex flex-row\">\n                                                <div class=\"form-check-inline\">\n                                                    <label class=\"form-check-label cursor\" for=\"trueOption{{i}}\">\n                                                        <input class=\"form-check-input pl-0\" formControlName=\"optradio\"\n                                                               id=\"trueOption{{i}}\" type=\"radio\"\n                                                               value=\"true\">True</label>\n                                                </div>\n                                                <div class=\"form-check-inline\">\n                                                    <label class=\"form-check-label ml-2 cursor\" for=\"falseOption{{i}}\">\n                                                        <input class=\"form-check-input ml-2\" formControlName=\"optradio\"\n                                                               id=\"falseOption{{i}}\" type=\"radio\"\n                                                               value=\"false\">False</label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-2 mt-2\">\n                                            <label><b>Points</b></label>\n                                            <input (keypress)=\"numberValidate($event)\" class=\"form-control\"\n                                                   formControlName=\"points1\" type=\"text\">\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3\">\n                                        <div class=\"col-md-12\">\n                                            <label><b>Explanation</b></label>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                            <app-tiny-mice\n                                                    (emitEditorValue)=\"getExplanationValue($event, i, multiform.get('repeatchoose')['controls'])\"\n                                                    [editorPatchValue]=\"false\"\n                                                    [height]=\"250\"\n                                                    [id]=\"i+'explainTrue'+ransom\"\n                                                    [showDropBtn]=\"false\"\n                                                    [showInputBtn]=\"false\">\n                                            </app-tiny-mice>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3\">\n                                        <div class=\"col-md-6 d-flex align-items-center\">\n                                            <input id=\"textOrFalse{{i}}\" formControlName=\"autograde\" type=\"checkbox\">\n                                            <label for=\"textOrFalse{{i}}\" class=\"ml-2 mb-0 cursor\">Autograde</label>\n                                        </div>\n                                        <div class=\"col-md-6 d-flex justify-content-end\">\n                                            <label class=\"mr-2 align-self-center mb-0\">Page No</label><input\n                                                class=\"form-control col-4 text-center\" formControlName=\"page\"\n                                                type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-right mt-2\" style=\"border-top: none\">\n                <button (click)=\"submitchoose(submitType)\" *ngIf=\"!isBulkUpload\"\n                        [attr.data-dismiss]=\"multiform.get('repeatchoose').valid == true && !quesNoInvalid ? 'modal' : ''\"\n                        class=\"btn btn-primary\" type=\"button\">{{submitType == 'add' ? 'Submit' : 'Update'}}</button>\n                <button (click)=\"submitchoose(submitType)\" *ngIf=\"isBulkUpload\"\n                        [attr.data-dismiss]=\"bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'modal' : ''\"\n                        [disabled]=\"!multiform.get('repeatchoose').valid || quesNoInvalid\" class=\"btn btn-primary\"\n                        type=\"button\">{{bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'Finish' : 'Next'}}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"choiceDialog\" cdkDrag class=\"modal fade overflow-visible\" id=\"log{{9}}\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\" style=\"max-width: 85% !important;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <!-- Container-fluid starts-->\n                <div class=\"container-fluid\">\n                    <form [formGroup]=\"multiform\">\n                        <div cdkDragHandle class=\"row cursor-move\">\n                            <div class=\"col-sm-11\">\n                                <h5 class=\"text-center mb-0\"><b>Question Dropdown</b></h5>\n                            </div>\n                            <div class=\"col-sm-1 text-right align-self-center\">\n                                <i style=\"font-size: 1.75em !important;\" data-dismiss=\"modal\"\n                                   class=\"fa fa-times-circle text-right color-red cursor\" (click)=\"closeDialog()\"></i>\n                            </div>\n                        </div>\n                        <hr>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row mt-3\">\n                                <div class=\"col-12 d-flex\">\n                                    <div (mouseover)=\"changeSpanTo()\" *ngIf=\"changeInput == false\"\n                                         class=\"question-no col-md-1\">\n                                        <span>{{countList}}</span>\n                                    </div>\n                                    <div (mouseout)=\"changeInputTo()\" *ngIf=\"changeInput == true\" class=\"col-md-1 px-0\">\n                                        <input (keypress)=\"numberValidate($event)\" [(ngModel)]=\"countList\"\n                                               [value]=\"countList\" class=\"form-control px-1\" formControlName=\"index\"\n                                               type=\"text\">\n                                    </div>\n                                    <div class=\"col-md-11 p-0 d-flex justify-content-end\">\n                                        <select (change)=\"changeSection('drop', '9')\"\n                                                *ngIf=\"totalsub.length > 1 && submitType != 'edit'\"\n                                                [selectedIndex]=\"sectionCount\" class=\"form-control col-md-6\"\n                                                formControlName=\"head\" id=\"drop\">\n                                            <option *ngFor=\"let item of secHeadingArray; let i = index\"\n                                                    value=\"{{i}}\">{{item}}</option>\n                                        </select>\n                                        <button (click)=\"plus()\" class=\"btn-sm btn-primary pull-right ml-2\"><i\n                                                class=\"fa fa-plus-circle\"></i> Sub Question\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <small *ngIf=\"quesNoInvalid\" class=\"errormessage\">question no already exist</small>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 dropDownScroll\">\n                            <div *ngFor=\"let list of multiform.get('repeatplus')['controls']; let i=index\"\n                                 formArrayName=\"repeatplus\">\n                                <div [formGroupName]=\"i\" class=\"mb-1\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 d-flex justify-content-between mt-2\">\n                                            <div [hidden]=\"hide == true\" class=\"sub-question-no col-md-1 mt-0\">\n                                                <span id=\"subChoice\">{{((i + 1) + 9).toString(36).toLowerCase()}}</span>\n                                            </div>\n                                            <div [hidden]=\"hide == true\" class=\"col-md-2 px-0\">\n                                                <div (click)=\"deleteSub(multiform.get('repeatplus'), i)\"\n                                                     class=\"pull-right border p-2\">\n                                                    <img alt=\"\" src=\"assets/images/pdf-icons/delete2.png\"\n                                                         title=\"Delete\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3\">\n                                        <div class=\"col-md-12\">\n                                            <app-tiny-mice\n                                                    (emitEditorValue)=\"getQuestionValue($event, i, multiform.get('repeatplus')['controls'])\"\n                                                    [editorPatchValue]=\"false\"\n                                                    [height]=\"250\"\n                                                    [id]=\"i+'dropDownQues'+ransom\"\n                                                    [showDropBtn]=\"false\"\n                                                    [showInputBtn]=\"false\">\n                                            </app-tiny-mice>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12 mt-2\">\n                                            <label class=\"mb-0\"><b>Choices</b></label>\n                                            <div formArrayName=\"choiceList\">\n                                                <div *ngFor=\"let property of list.get('choiceList')['controls']; let j=index\"\n                                                     class=\"mt-2\">\n                                                    <div [formGroupName]=\"j\">\n                                                        <div class=\"input-group\">\n                                                            <input (change)=\"gettingQuestionChoiceList(i)\"\n                                                                   aria-describedby=\"basic-addon2\"\n                                                                   aria-label=\"Recipient's username\"\n                                                                   class=\"form-control\" formControlName=\"choice\"\n                                                                   placeholder=\"Choice\" type=\"text\">\n                                                            <div class=\"input-group-append\">\n                                                            <span class=\"form-control\" id=\"basic-addon2\"\n                                                                  style=\"background-color: gainsboro\">\n                                                                <i (click)=\"removechoiceList(j)\" class=\"fa fa-trash\"\n                                                                   style=\"background-color: #cccccc\"></i>\n                                                            </span>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-12 mt-3 text-center\">\n                                            <button (click)=\"addPlus(list.controls.choiceList)\"\n                                                    class=\"btn btn-outline-primary choiceAdd\" type=\"button\">Add Choice\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-2\">\n                                        <div class=\"col-md-10\">\n                                            <label><b> Correct Answer </b></label>\n                                            <select (change)=\"gettingChoiceAnswer($event, i)\"\n                                                    (mouseenter)=\"disableSelect(i, $event)\" class=\"form-control\"\n                                                    formControlName=\"answer\" id=\"dropdown{{i}}\">\n                                                <option [selected]=\"submitType != 'edit'\" [value]=\"''\">Select Answer\n                                                </option>\n                                                <option *ngFor=\"let list of multiform['controls'].repeatplus['controls'][i]['controls']['optionList'].value; let j=index\"\n                                                        [value]=\"list.choice\">{{list.choice}}</option>\n                                            </select>\n                                        </div>\n                                        <div class=\"col-md-2\">\n                                            <label><b> Points </b></label>\n                                            <input (keypress)=\"numberValidate($event)\" class=\"form-control\"\n                                                   formControlName=\"points\" type=\"text\">\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3\">\n                                        <div class=\"col-md-12\">\n                                            <label><b>Explanation</b></label>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                            <app-tiny-mice\n                                                    (emitEditorValue)=\"getExplanationValue($event, i, multiform.get('repeatplus')['controls'])\"\n                                                    [editorPatchValue]=\"false\"\n                                                    [height]=\"250\"\n                                                    [id]=\"i+'explainDrop'+ransom\"\n                                                    [showDropBtn]=\"false\"\n                                                    [showInputBtn]=\"false\">\n                                            </app-tiny-mice>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3\">\n                                        <div class=\"col-md-6 d-flex align-items-center\">\n                                            <input formControlName=\"autograde\" type=\"checkbox\"><label class=\"ml-2 mb-0\">Autograde</label>\n                                        </div>\n                                        <div class=\"col-md-6 d-flex justify-content-end\">\n                                            <label class=\"mr-2 align-self-center mb-0\">Page No</label><input\n                                                class=\"form-control col-4 text-center\" formControlName=\"page\"\n                                                type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-right\" style=\"border-top: none\">\n                <button (click)=\"submitChoice(submitType)\" *ngIf=\"!isBulkUpload\"\n                        [attr.data-dismiss]=\"multiform.get('repeatplus').valid == true && !quesNoInvalid ? 'modal' : ''\"\n                        class=\"btn btn-primary\" type=\"button\">{{submitType == 'add' ? 'Submit' : 'Update'}}</button>\n                <button (click)=\"submitChoice(submitType)\" *ngIf=\"isBulkUpload\"\n                        [attr.data-dismiss]=\"bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'modal' : ''\"\n                        [disabled]=\"!multiform.get('repeatplus').valid || quesNoInvalid\" class=\"btn btn-primary\"\n                        type=\"button\">{{bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'Finish' : 'Next'}}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"entryDialog\" cdkDrag class=\"modal fade overflow-visible\" id=\"log{{10}}\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\" style=\"max-width: 85% !important;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <!-- Container-fluid starts-->\n                <div class=\"container-fluid\">\n                    <form [formGroup]=\"multiform\">\n                        <div cdkDragHandle class=\"row cursor-move\">\n                            <div class=\"col-sm-11\">\n                                <h5 class=\"text-center mb-0\"><b>Text Entry</b></h5>\n                            </div>\n                            <div class=\"col-sm-1 text-right align-self-center\">\n                                <i style=\"font-size: 1.75em !important;\" data-dismiss=\"modal\"\n                                   class=\"fa fa-times-circle text-right color-red cursor\" (click)=\"closeDialog()\"></i>\n                            </div>\n                        </div>\n                        <hr>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row mt-3\">\n                                <div class=\"col-12 d-flex\">\n                                    <div (mouseover)=\"changeSpanTo()\" *ngIf=\"changeInput == false\"\n                                         class=\"question-no col-md-1\">\n                                        <span>{{countList}}</span>\n                                    </div>\n                                    <div (mouseout)=\"changeInputTo()\" *ngIf=\"changeInput == true\" class=\"col-md-1 px-0\">\n                                        <input (keypress)=\"numberValidate($event)\" [(ngModel)]=\"countList\"\n                                               [value]=\"countList\" class=\"form-control px-1\" formControlName=\"index\"\n                                               type=\"text\">\n                                    </div>\n                                    <div class=\"col-md-11 p-0 d-flex justify-content-end\">\n                                        <select (change)=\"changeSection('fillin', '10')\"\n                                                *ngIf=\"totalsub.length > 1 && submitType != 'edit'\"\n                                                [selectedIndex]=\"sectionCount\" class=\"form-control col-md-6\"\n                                                formControlName=\"head\" id=\"fillin\">\n                                            <option *ngFor=\"let item of secHeadingArray; let i = index\"\n                                                    value=\"{{i}}\">{{item}}</option>\n                                        </select>\n                                        <button (click)=\"addEntry()\" class=\"btn-sm btn-primary pull-right ml-2\"><i\n                                                class=\"fa fa-plus-circle\"></i> Sub Question\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <small *ngIf=\"quesNoInvalid\" class=\"errormessage\">question no already exist</small>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 dropDownScroll\">\n                            <div *ngFor=\"let list of multiform.get('repeatentry')['controls']; let i=index\"\n                                 formArrayName=\"repeatentry\">\n                                <div [formGroupName]=\"i\" class=\"mb-1\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 d-flex justify-content-between mt-2\">\n                                            <div [hidden]=\"hide == true\" class=\"sub-question-no col-md-1 mt-0\">\n                                                <span id=\"subEntry\">{{((i + 1) + 9).toString(36).toLowerCase()}}</span>\n                                            </div>\n                                            <div [hidden]=\"hide == true\" class=\"col-md-2 px-0\">\n                                                <div (click)=\"deleteSub(multiform.get('repeatentry'), i)\"\n                                                     class=\"pull-right border p-2\">\n                                                    <img alt=\"\" src=\"assets/images/pdf-icons/delete2.png\"\n                                                         title=\"Delete\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <app-tiny-mice\n                                                    (emitEditorValue)=\"getQuestionValue($event, i, multiform.get('repeatentry')['controls'])\"\n                                                    [editorPatchValue]=\"false\"\n                                                    [height]=\"250\"\n                                                    [id]=\"i+'entryQues'+ransom\"\n                                                    [showDropBtn]=\"false\"\n                                                    [showInputBtn]=\"false\">\n                                            </app-tiny-mice>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12 my-3 d-flex align-items-center justify-content-between\">\n                                            <label class=\"mb-0\"><b>Correct Answer</b></label>\n                                            <button *ngIf=\"list.get('repeatEntryCorrect')['controls'].length < maximumAllowedCount\"\n                                                    class=\"btn btn-outline-primary pull-right\"\n                                                    (click)=\"addNewCorrectAnswerForTextEntry(list)\">\n                                                <i class=\"fa fa-plus-circle mr-1\"></i>Add\n                                                ({{list.get('repeatEntryCorrect')['controls'].length}}\n                                                / {{maximumAllowedCount}})\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-12 mt-2\">\n                                            <div *ngFor=\"let item of list.get('repeatEntryCorrect')['controls']; let first = first;  let j=index\"\n                                                 formArrayName=\"repeatEntryCorrect\">\n                                                <div [formGroupName]=\"j\" class=\"mb-3 row px-3\">\n                                                    <div class=\"sub-question-no mt-0 w-4\"\n                                                         style=\"height: 36px !important;\">\n                                                        <span id=\"subEntry1\">{{j + 1}}</span>\n                                                    </div>\n                                                    <div class=\"px-2\" [ngClass]=\"first ? 'w-96' : 'w-93'\">\n                                                        <textarea class=\"form-control\" formControlName=\"correct\"\n                                                                  placeholder=\"Type answer here\" rows=\"3\"></textarea>\n                                                    </div>\n                                                    <div *ngIf=\"!first\" class=\"w-3\">\n                                                        <div (click)=\"deleteCorrectAnswerTextEntry(list.get('repeatEntryCorrect'), j)\"\n                                                             class=\"pull-right border p-2\">\n                                                            <img alt=\"\" src=\"assets/images/pdf-icons/delete2.png\"\n                                                                 title=\"Delete\">\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3\">\n                                        <div class=\"col-md-12\">\n                                            <label><b>Explanation</b></label>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                            <app-tiny-mice\n                                                    (emitEditorValue)=\"getExplanationValue($event, i, multiform.get('repeatentry')['controls'])\"\n                                                    [editorPatchValue]=\"false\"\n                                                    [height]=\"250\"\n                                                    [id]=\"i+'explainEntry'+ransom\"\n                                                    [showDropBtn]=\"false\"\n                                                    [showInputBtn]=\"false\">\n                                            </app-tiny-mice>\n                                        </div>\n                                    </div>\n                                    <div class=\"row ml-1 mt-2\">\n                                        <div class=\"col-md-4\">\n                                            <div class=\"col-md-12\">\n                                                <input class=\"form-check-input cursor\" formControlName=\"matchCase\"\n                                                       id=\"exampleCheck1\" type=\"checkbox\">\n                                                <label class=\"form-check-label cursor\" for=\"exampleCheck1\">Match\n                                                    Case</label>\n                                            </div>\n                                            <div class=\"col-md-12 mt-3\">\n                                                <input class=\"form-check-input cursor\" id=\"exampleCheck2\"\n                                                       formControlName=\"autograde\" type=\"checkbox\">\n                                                <label class=\"form-check-label cursor\"\n                                                       for=\"exampleCheck2\">Autograde</label>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <label><b>Page No</b></label>\n                                            <input class=\"form-control col-4 text-center\" formControlName=\"page\"\n                                                   type=\"text\">\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <label><b>Points</b></label>\n                                            <input (keypress)=\"numberValidate($event)\" class=\"form-control\"\n                                                   formControlName=\"points\" style=\"width: 60px\" type=\"text\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <!-- Container-fluid Ends-->\n            </div>\n            <div class=\"modal-footer d-flex justify-content-right mt-2\" style=\"border-top: none\">\n                <button (click)=\"submitEntry(submitType)\" *ngIf=\"!isBulkUpload\"\n                        [attr.data-dismiss]=\"multiform.get('repeatentry').valid == true && !quesNoInvalid ? 'modal' : ''\"\n                        class=\"btn btn-primary\" type=\"button\">{{submitType == 'add' ? 'Submit' : 'Update'}}</button>\n                <button (click)=\"submitEntry(submitType)\" *ngIf=\"isBulkUpload\"\n                        [attr.data-dismiss]=\"bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'modal' : ''\"\n                        [disabled]=\"!multiform.get('repeatentry').valid || quesNoInvalid\" class=\"btn btn-primary\"\n                        type=\"button\">{{bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'Finish' : 'Next'}}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"essayDialog\" cdkDrag class=\"modal fade overflow-visible\" id=\"log{{20}}\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\" style=\"max-width: 85% !important;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <!-- Container-fluid starts-->\n                <div class=\"container-fluid\">\n                    <form [formGroup]=\"multiform\">\n                        <div cdkDragHandle class=\"row cursor-move\">\n                            <div class=\"col-sm-11\">\n                                <h5 class=\"text-center mb-0\"><b>Free Text</b></h5>\n                            </div>\n                            <div class=\"col-sm-1 text-right align-self-center\">\n                                <i style=\"font-size: 1.75em !important;\" data-dismiss=\"modal\"\n                                   class=\"fa fa-times-circle text-right color-red cursor\" (click)=\"closeDialog()\"></i>\n                            </div>\n                        </div>\n                        <hr>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row mt-3\">\n                                <div class=\"col-12 d-flex\">\n                                    <div (mouseover)=\"changeSpanTo()\" *ngIf=\"changeInput == false\"\n                                         class=\"question-no col-md-1\">\n                                        <span>{{countList}}</span>\n                                    </div>\n                                    <div (mouseout)=\"changeInputTo()\" *ngIf=\"changeInput == true\" class=\"col-md-1 px-0\">\n                                        <input (keypress)=\"numberValidate($event)\" [(ngModel)]=\"countList\"\n                                               [value]=\"countList\" class=\"form-control px-1\" formControlName=\"index\"\n                                               type=\"text\">\n                                    </div>\n                                    <div class=\"col-md-11 p-0 d-flex justify-content-end\">\n                                        <select (change)=\"changeSection('essays', '20')\"\n                                                *ngIf=\"totalsub.length > 1 && submitType != 'edit'\"\n                                                [selectedIndex]=\"sectionCount\" class=\"form-control col-md-6\"\n                                                formControlName=\"head\" id=\"essays\">\n                                            <option *ngFor=\"let item of secHeadingArray; let i = index\"\n                                                    value=\"{{i}}\">{{item}}</option>\n                                        </select>\n                                        <button (click)=\"addEssay()\" class=\"btn-sm btn-primary pull-right ml-2\"><i\n                                                class=\"fa fa-plus-circle\"></i> Sub Question\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <small *ngIf=\"quesNoInvalid\" class=\"errormessage\">question no already exist</small>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-12 dropDownScroll\">\n                            <div *ngFor=\"let list of multiform.get('repeatessay')['controls']; let i=index\"\n                                 formArrayName=\"repeatessay\">\n                                <div [formGroupName]=\"i\" class=\"mb-1\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 d-flex justify-content-between mt-2\">\n                                            <div [hidden]=\"hide == true\" class=\"sub-question-no col-md-1 mt-0\">\n                                                <span id=\"sub\">{{((i + 1) + 9).toString(36).toLowerCase()}}</span>\n                                            </div>\n                                            <div [hidden]=\"hide == true\" class=\"col-md-2 px-0\">\n                                                <div (click)=\"deleteSub(multiform.get('repeatessay'), i)\"\n                                                     class=\"pull-right border p-2\">\n                                                    <img alt=\"\" src=\"assets/images/pdf-icons/delete2.png\"\n                                                         title=\"Delete\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3\">\n                                        <div class=\"col-md-12\">\n                                            <app-tiny-mice\n                                                    (emitEditorValue)=\"getQuestionValue($event, i, multiform.get('repeatessay')['controls'])\"\n                                                    [editorPatchValue]=\"false\"\n                                                    [height]=\"250\"\n                                                    [id]=\"i+'essayQues'+ransom\"\n                                                    [showDropBtn]=\"false\"\n                                                    [showInputBtn]=\"false\">\n                                            </app-tiny-mice>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-2\">\n                                        <div class=\"col-md-10\">\n                                            <label><b>Minimum Line Height</b></label>\n                                            <input (keypress)=\"numberValidate($event)\" class=\"form-control\"\n                                                   formControlName=\"lines\" placeholder=\"Number of Lines\" type=\"text\">\n                                        </div>\n                                        <div class=\"col-md-2\">\n                                            <label><b>Points</b></label>\n                                            <input (keypress)=\"numberValidate($event)\" class=\"form-control\"\n                                                   formControlName=\"points\" type=\"text\">\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3\">\n                                        <div class=\"col-md-12\">\n                                            <label><b>Explanation</b></label>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                            <app-tiny-mice\n                                                    (emitEditorValue)=\"getExplanationValue($event, i, multiform.get('repeatessay')['controls'])\"\n                                                    [editorPatchValue]=\"false\"\n                                                    [height]=\"250\"\n                                                    [id]=\"i+'explainEssay'+ransom\"\n                                                    [showDropBtn]=\"false\"\n                                                    [showInputBtn]=\"false\">\n                                            </app-tiny-mice>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3 d-flex justify-content-end\">\n                                        <!--                                        <div class=\"col-md-6\" [hidden]=\"true\">-->\n                                        <!--                                            <input formControlName=\"autograde\" type=\"checkbox\"><label class=\"ml-2 mb-0\">Autograde</label>-->\n                                        <!--                                        </div>-->\n                                        <div class=\"col-md-6 d-flex justify-content-end\">\n                                            <label class=\"mr-2 align-self-center mb-0\">Page No</label><input\n                                                class=\"form-control col-4 text-center\" formControlName=\"page\"\n                                                type=\"input\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <!-- Container-fluid Ends-->\n            </div>\n            <div class=\"modal-footer d-flex justify-content-right mt-2\" style=\"border-top: none\">\n                <button (click)=\"submitEssay(submitType)\" *ngIf=\"!isBulkUpload\"\n                        [attr.data-dismiss]=\"multiform.get('repeatessay').valid == true && !quesNoInvalid ? 'modal' : ''\"\n                        class=\"btn btn-primary\" type=\"button\">{{submitType == 'add' ? 'Submit' : 'Update'}}</button>\n                <button (click)=\"submitEssay(submitType)\" *ngIf=\"isBulkUpload\"\n                        [attr.data-dismiss]=\"bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'modal' : ''\"\n                        [disabled]=\"!multiform.get('repeatessay').valid || quesNoInvalid\" class=\"btn btn-primary\"\n                        type=\"button\">{{bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'Finish' : 'Next'}}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"numericDialog\" cdkDrag class=\"modal fade overflow-visible\" id=\"log{{30}}\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\" style=\"max-width: 85% !important;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <form [formGroup]=\"multiform\">\n                    <div cdkDragHandle class=\"row cursor-move\">\n                        <div class=\"col-sm-11\">\n                            <h5 class=\"text-center mb-0\"><b>Numeric Entry</b></h5>\n                        </div>\n                        <div class=\"col-sm-1 text-right align-self-center\">\n                            <i style=\"font-size: 1.75em !important;\" data-dismiss=\"modal\"\n                               class=\"fa fa-times-circle text-right color-red cursor\" (click)=\"closeDialog()\"></i>\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"col-sm-12\">\n                        <div class=\"row mt-3\">\n                            <div class=\"col-12 d-flex\">\n                                <div (mouseover)=\"changeSpanTo()\" *ngIf=\"changeInput == false\"\n                                     class=\"question-no col-md-1\">\n                                    <span>{{countList}}</span>\n                                </div>\n                                <div (mouseout)=\"changeInputTo()\" *ngIf=\"changeInput == true\" class=\"col-md-1 px-0\">\n                                    <input (keypress)=\"numberValidate($event)\" [(ngModel)]=\"countList\"\n                                           [value]=\"countList\" class=\"form-control px-1\" formControlName=\"index\"\n                                           type=\"text\">\n                                </div>\n                                <div class=\"col-md-11 p-0 d-flex justify-content-end\">\n                                    <select (change)=\"changeSection('math', '30')\"\n                                            *ngIf=\"totalsub.length > 1 && submitType != 'edit'\"\n                                            [selectedIndex]=\"sectionCount\" class=\"form-control col-md-6\"\n                                            formControlName=\"head\" id=\"math\">\n                                        <option *ngFor=\"let item of secHeadingArray; let i = index\"\n                                                value=\"{{i}}\">{{item}}</option>\n                                    </select>\n                                    <button (click)=\"addNumeric()\" class=\"btn-sm btn-primary pull-right ml-2\"><i\n                                            class=\"fa fa-plus-circle\"></i> Sub Question\n                                    </button>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <small *ngIf=\"quesNoInvalid\" class=\"errormessage\">question no already exist</small>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12 dropDownScroll\">\n                        <div *ngFor=\"let list of multiform.get('repeatnumeric')['controls']; let i=index\"\n                             formArrayName=\"repeatnumeric\">\n                            <div [formGroupName]=\"i\" class=\"mb-1\">\n                                <div class=\"row\">\n                                    <div class=\"col-12 d-flex justify-content-between mt-2\">\n                                        <div [hidden]=\"hide == true\" class=\"sub-question-no col-md-1 mt-0\">\n                                            <span>{{((i + 1) + 9).toString(36).toLowerCase()}}</span>\n                                        </div>\n                                        <div [hidden]=\"hide == true\" class=\"col-md-2 px-0\">\n                                            <div (click)=\"deleteSub(multiform.get('repeatnumeric'), i)\"\n                                                 class=\"pull-right border p-2\">\n                                                <img alt=\"\" src=\"assets/images/pdf-icons/delete2.png\" title=\"Delete\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row mt-3\">\n                                    <div class=\"col-md-12 d-flex flex-column\">\n                                        <label><b>Question</b></label>\n                                        <app-tiny-mice\n                                                (emitEditorValue)=\"getQuestionValue($event, i, multiform.get('repeatnumeric')['controls'])\"\n                                                [editorPatchValue]=\"false\"\n                                                [height]=\"250\"\n                                                [id]=\"i+'numericQues'+ransom\"\n                                                [showDropBtn]=\"false\"\n                                                [showInputBtn]=\"false\">\n                                        </app-tiny-mice>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12 my-3 d-flex align-items-center justify-content-between\">\n                                        <label class=\"mb-0\"><b>Correct Answer</b></label>\n                                        <button *ngIf=\"list.get('repeatNumericCorrect')['controls'].length < maximumAllowedCount\"\n                                                class=\"btn btn-outline-primary pull-right\"\n                                                (click)=\"addNewCorrectAnswerForNumericEntry(list)\">\n                                            <i class=\"fa fa-plus-circle mr-1\"></i>Add\n                                            ({{list.get('repeatNumericCorrect')['controls'].length}}\n                                            / {{maximumAllowedCount}})\n                                        </button>\n                                    </div>\n                                    <div class=\"col-md-12 mt-2\">\n                                        <div *ngFor=\"let item of list.get('repeatNumericCorrect')['controls']; let first = first; let j=index\"\n                                             formArrayName=\"repeatNumericCorrect\">\n                                            <div [formGroupName]=\"j\" class=\"mb-3 row px-3\">\n                                                <div class=\"sub-question-no mt-0 w-4\" style=\"height: 36px !important\">\n                                                    <span>{{j + 1}}</span>\n                                                </div>\n                                                <div class=\"px-2\" [ngClass]=\"first ? 'w-96' : 'w-93'\">\n                                                    <app-tiny-mice\n                                                            (emitEditorValue)=\"getNumericAnswerValue($event ,i, j)\"\n                                                            [editorPatchValue]=\"false\"\n                                                            [height]=\"250\"\n                                                            [id]=\"j+'numericAns'+ransom+'multi'+i\"\n                                                            [showDropBtn]=\"false\"\n                                                            [showInputBtn]=\"false\">\n                                                    </app-tiny-mice>\n                                                </div>\n                                                <div *ngIf=\"!first\" class=\"w-3\">\n                                                    <div (click)=\"deleteCorrectAnswerNumericEntry(list.get('repeatNumericCorrect'), j)\"\n                                                         class=\"pull-right border p-2\">\n                                                        <img alt=\"\" src=\"assets/images/pdf-icons/delete2.png\"\n                                                             title=\"Delete\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row mt-3\">\n                                    <div class=\"col-md-12\">\n                                        <label><b>Explanation</b></label>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <app-tiny-mice\n                                                (emitEditorValue)=\"getExplanationValue($event, i, multiform.get('repeatnumeric')['controls'])\"\n                                                [editorPatchValue]=\"false\"\n                                                [height]=\"250\"\n                                                [id]=\"i+'explainNumeric'+ransom\"\n                                                [showDropBtn]=\"false\"\n                                                [showInputBtn]=\"false\">\n                                        </app-tiny-mice>\n                                    </div>\n                                </div>\n                                <div class=\"row mb-2 mt-2\">\n                                    <div class=\"col-md-6 d-flex align-items-center\">\n                                        <input id=\"numericAutoGrade{{i}}\" formControlName=\"autograde\" type=\"checkbox\">\n                                        <label for=\"numericAutoGrade{{i}}\" class=\"ml-2 mb-0 cursor\">Autograde</label>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <label><b>Page no</b></label>\n                                        <input class=\"form-control col-4 text-center\" formControlName=\"page\"\n                                               type=\"input\">\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                        <label><b>Points</b></label>\n                                        <input (keypress)=\"numberValidate($event)\" class=\"form-control\"\n                                               formControlName=\"points\" type=\"text\">\n                                    </div>\n                                </div>\n                                <!--                                <div class=\"row mb-2 mt-2\">-->\n                                <!--                                    <div class=\"col-md-6\">-->\n                                <!--                                       -->\n                                <!--                                    </div>-->\n                                <!--                                    <div class=\"col-md-6 d-flex justify-content-end\">-->\n                                <!--                                        <label class=\"mr-2 align-self-center mb-0\">Page No</label><input formControlName=\"page\" type=\"input\" class=\"form-control col-4 text-center\">-->\n                                <!--                                    </div>-->\n                                <!--                                </div>-->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-right mt-1\" style=\"border-top: none\">\n                <button (click)=\"submitNumeric(submitType)\" *ngIf=\"!isBulkUpload\"\n                        [attr.data-dismiss]=\"multiform.get('repeatnumeric').valid == true && !quesNoInvalid ? 'modal' : ''\"\n                        class=\"btn btn-primary\" type=\"button\">{{submitType == 'add' ? 'Submit' : 'Update'}}</button>\n                <button (click)=\"submitNumeric(submitType)\" *ngIf=\"isBulkUpload\"\n                        [attr.data-dismiss]=\"bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'modal' : ''\"\n                        [disabled]=\"!multiform.get('repeatnumeric').valid || quesNoInvalid\" class=\"btn btn-primary\"\n                        type=\"button\">{{bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'Finish' : 'Next'}}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"graphDialog\" cdkDrag class=\"modal fade overflow-visible\" id=\"log{{40}}\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <form [formGroup]=\"graphform\">\n                    <div cdkDragHandle class=\"row cursor-move\">\n                        <div class=\"col-sm-11\">\n                            <h5 class=\"text-center mb-0\"><b>Graph</b></h5>\n                        </div>\n                        <div class=\"col-sm-1 text-right align-self-center\">\n                            <i style=\"font-size: 1.75em !important;\" data-dismiss=\"modal\"\n                               class=\"fa fa-times-circle text-right color-red cursor\" (click)=\"closeDialog()\"></i>\n                        </div>\n                    </div>\n                    <hr class=\"my-1\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"row mt-3\">\n                            <div class=\"col-12 d-flex\">\n                                <div (mouseover)=\"changeSpanTo()\" *ngIf=\"changeInput == false\"\n                                     class=\"question-no col-md-1\">\n                                    <span>{{countList}}</span>\n                                </div>\n                                <div (mouseout)=\"changeInputTo()\" *ngIf=\"changeInput == true\" class=\"col-md-1 px-0\">\n                                    <input (keypress)=\"numberValidate($event)\" [(ngModel)]=\"countList\"\n                                           [value]=\"countList\" class=\"form-control px-1\" formControlName=\"index\"\n                                           type=\"text\">\n                                </div>\n                                <div class=\"col-md-11 p-0 d-flex justify-content-end\">\n                                    <select (change)=\"changeSection('graph', '40')\"\n                                            *ngIf=\"totalsub.length > 1 && submitType != 'edit'\"\n                                            [selectedIndex]=\"sectionCount\" class=\"form-control col-md-6\"\n                                            formControlName=\"head\" id=\"graph\">\n                                        <option *ngFor=\"let item of secHeadingArray; let i = index\"\n                                                value=\"{{i}}\">{{item}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <small *ngIf=\"quesNoInvalid\" class=\"errormessage\">question no already exist</small>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"!showGraph\" id=\"custom-pdf-loader\" style=\"height: 60vh;\">\n                        <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">\n                    </div>\n                    <div class=\"col-12 dropDownScroll\" *ngIf=\"showGraph\">\n                        <div class=\"row mt-3\">\n                            <div class=\"col-md-12  d-flex flex-column\">\n                                <div><b>Question</b></div>\n                                <app-tiny-mice (emitEditorValue)=\"getGraphQuestionValue($event, 0)\"\n                                               [editorPatchValue]=\"false\"\n                                               [height]=\"250\"\n                                               [id]=\"'numericQues'\"\n                                               [showDropBtn]=\"false\"\n                                               [showInputBtn]=\"false\">\n                                </app-tiny-mice>\n                            </div>\n                        </div>\n                        <div class=\"row mt-3\">\n                            <div class=\"col-12 d-flex flex-column\">\n                                <div><b>Correct Answers</b></div>\n                                <app-graph-component (emitItem)=\"getEmitedValue($event)\"\n                                                     (valueChange)=\"getGraphAnswerValue($event)\"\n                                                     *ngIf=\"submitType != 'edit'\"\n                                                     [editMode]=\"true\"\n                                                     [editPatchValue]=\"false\"\n                                                     [graphId]=\"sectionCount+'graph'+'id'+ countList + random\"\n                                                     [questionType]=\"'40'\"></app-graph-component>\n                                <app-graph-component (emitItem)=\"getEmitedValue($event)\"\n                                                     (valueChange)=\"getGraphAnswerValue($event)\"\n                                                     *ngIf=\"submitType == 'edit'\"\n                                                     [editMode]=\"true\"\n                                                     [editPatchValue]=\"graphBoardValue\"\n                                                     [graphId]=\"sectionCount+'Editgraph'+'id'+countList\"\n                                                     [questionType]=\"'40'\"></app-graph-component>\n                            </div>\n                        </div>\n                        <div class=\"row mt-3\">\n                            <div class=\"col-md-12\">\n                                <app-tiny-mice (emitEditorValue)=\"getEditorAnswerValue($event)\"\n                                               [editorPatchValue]=\"false\"\n                                               [height]=\"250\"\n                                               [id]=\"'editorGragh'\"\n                                               [showDropBtn]=\"false\"\n                                               [showInputBtn]=\"false\">\n                                </app-tiny-mice>\n                            </div>\n                        </div>\n                        <div class=\"row mt-3\">\n                            <div class=\"col-md-12\">\n                                <label><b>Explanation</b></label>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <app-tiny-mice (emitEditorValue)=\"getGraphExplain($event, 0)\"\n                                               [editorPatchValue]=\"false\"\n                                               [height]=\"250\"\n                                               [id]=\"'explain'\"\n                                               [showDropBtn]=\"false\"\n                                               [showInputBtn]=\"false\">\n                                </app-tiny-mice>\n                            </div>\n                        </div>\n                        <div class=\"row mt-3 d-flex justify-content-between\">\n                            <div class=\"col-md-4\">\n                                <label><b>Page No</b></label>\n                                <input class=\"form-control col-4 text-center\" formControlName=\"page\" type=\"input\">\n                            </div>\n                            <div class=\"col-md-4\" hidden>\n                                <input formControlName=\"autograde\" type=\"checkbox\"><label class=\"ml-2\">Autograde</label>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <label><b>Points</b></label>\n                                <input (keypress)=\"numberValidate($event)\" class=\"form-control\" formControlName=\"points\"\n                                       type=\"text\">\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-right mt-1\" style=\"border-top: none\">\n                <button (click)=\"updateGraphValue(submitType)\" *ngIf=\"!isBulkUpload\"\n                        [attr.data-dismiss]=\"graphBoardValue && !quesNoInvalid ? 'modal' : ''\" class=\"btn btn-primary\"\n                        type=\"button\">{{submitType == 'add' ? 'Submit' : 'Update'}}</button>\n                <button (click)=\"updateGraphValue(submitType)\" *ngIf=\"isBulkUpload\"\n                        [attr.data-dismiss]=\"bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'modal' : ''\"\n                        [disabled]=\"graphBoardValue == undefined || graphBoardValue == '' || quesNoInvalid\"\n                        class=\"btn btn-primary\"\n                        type=\"button\">{{bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'Finish' : 'Next'}}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"blankDialog\" cdkDrag class=\"modal fade overflow-visible\" id=\"log{{54}}\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\" style=\"max-width: 85% !important;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                <!-- Container-fluid starts-->\n                <div class=\"container-fluid\">\n                    <form [formGroup]=\"multiform\">\n                        <div cdkDragHandle class=\"row cursor-move\">\n                            <div class=\"col-sm-11\">\n                                <h5 class=\"text-center mb-0\"><b>Fill in the blanks</b></h5>\n                            </div>\n                            <div class=\"col-sm-1 text-right align-self-center\">\n                                <i style=\"font-size: 1.75em !important;\" data-dismiss=\"modal\"\n                                   class=\"fa fa-times-circle text-right color-red cursor\" (click)=\"closeDialog()\"></i>\n                            </div>\n                        </div>\n                        <hr>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row mt-3\">\n                                <div class=\"col-12 d-flex\">\n                                    <div (mouseover)=\"changeSpanTo()\" *ngIf=\"changeInput == false\"\n                                         class=\"question-no col-md-1\">\n                                        <span>{{countList}}</span>\n                                    </div>\n                                    <div (mouseout)=\"changeInputTo()\" *ngIf=\"changeInput == true\" class=\"col-md-1 px-0\">\n                                        <input (keypress)=\"numberValidate($event)\" [(ngModel)]=\"countList\"\n                                               [value]=\"countList\" class=\"form-control px-1\" formControlName=\"index\"\n                                               type=\"text\">\n                                    </div>\n                                    <div class=\"col-md-11 p-0 d-flex justify-content-end\">\n                                        <select (change)=\"changeSection('drop', '9')\"\n                                                *ngIf=\"totalsub.length > 1 && submitType != 'edit'\"\n                                                [selectedIndex]=\"sectionCount\" class=\"form-control col-md-6\"\n                                                formControlName=\"head\" id=\"drop\">\n                                            <option *ngFor=\"let item of secHeadingArray; let i = index\"\n                                                    value=\"{{i}}\">{{item}}</option>\n                                        </select>\n                                        <button (click)=\"addBlanks()\" class=\"btn-sm btn-primary pull-right ml-2\"><i\n                                                class=\"fa fa-plus-circle\"></i> Sub Question\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <small *ngIf=\"quesNoInvalid\" class=\"errormessage\">question no already exist</small>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 dropDownScroll\">\n                            <div *ngFor=\"let list of multiform.get('repeatblanks')['controls']; let i=index\"\n                                 formArrayName=\"repeatblanks\">\n                                <div [formGroupName]=\"i\" class=\"mb-1\">\n                                    <div class=\"row\">\n                                        <div class=\"col-12 d-flex justify-content-between mt-2\">\n                                            <div [hidden]=\"hide == true\" class=\"sub-question-no col-md-1 mt-0\">\n                                                <span>{{((i + 1) + 9).toString(36).toLowerCase()}}</span>\n                                            </div>\n                                            <div [hidden]=\"hide == true\" class=\"col-md-2 px-0\">\n                                                <div (click)=\"deleteSub(multiform.get('repeatblanks'), i)\"\n                                                     class=\"pull-right border p-2\">\n                                                    <img alt=\"\" src=\"assets/images/pdf-icons/delete2.png\"\n                                                         title=\"Delete\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3\">\n                                        <div class=\"col-md-12\">\n                                            <app-tiny-mice (emitEditorValue)=\"getFillinQuestionValue($event, i)\"\n                                                           [editorPatchValue]=\"false\"\n                                                           [height]=\"250\"\n                                                           [id]=\"i+'blanks'+ransom\"\n                                                           [showDropBtn]=\"false\"\n                                                           [showInputBtn]=\"true\">\n                                            </app-tiny-mice>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12 mt-2\">\n                                            <div>\n                                                <div *ngFor=\"let property of fillInArray[i]?.input; let j=index\"\n                                                     class=\"mt-2\">\n                                                    <div>\n                                                        <div class=\"input-group\">\n                                                            <textarea [(ngModel)]=\"property.value\"\n                                                                      [ngModelOptions]=\"{standalone: true}\"\n                                                                      aria-describedby=\"basic-addon2\"\n                                                                      class=\"form-control\"\n                                                                      placeholder=\"Enter input answer\" rows=\"1\"\n                                                                      type=\"text\"></textarea>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-3\">\n                                        <div class=\"col-md-12\">\n                                            <label><b>Explanation</b></label>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                            <app-tiny-mice\n                                                    (emitEditorValue)=\"getExplanationValue($event, i, multiform.get('repeatblanks')['controls'])\"\n                                                    [editorPatchValue]=\"false\"\n                                                    [height]=\"250\"\n                                                    [id]=\"i+'explainBlanks'+ransom\"\n                                                    [showDropBtn]=\"false\"\n                                                    [showInputBtn]=\"false\">\n                                            </app-tiny-mice>\n                                        </div>\n                                    </div>\n                                    <div class=\"row mt-2\">\n                                        <div class=\"col-md-6 d-flex align-items-center\">\n                                            <input id=\"fillInArrayAutoGrade{{i}}\" formControlName=\"autograde\"\n                                                   type=\"checkbox\"><label\n                                                for=\"fillInArrayAutoGrade{{i}}\"\n                                                class=\"ml-2 cursor mb-0\">Autograde</label>\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <label><b>Page No</b></label>\n                                            <input class=\"form-control col-4 text-center\" formControlName=\"page\"\n                                                   type=\"input\">\n                                        </div>\n                                        <div class=\"col-md-2\">\n                                            <label><b> Points </b></label>\n                                            <input (keypress)=\"numberValidate($event)\" class=\"form-control\"\n                                                   formControlName=\"points\" type=\"text\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"modal-footer d-flex justify-content-right\" style=\"border-top: none\">\n                <button (click)=\"submitBlanks(submitType)\" *ngIf=\"!isBulkUpload\"\n                        [attr.data-dismiss]=\"(multiform.get('repeatblanks').valid && blankValid && !quesNoInvalid) ? 'modal' : ''\"\n                        class=\"btn btn-primary\" type=\"button\">{{submitType == 'add' ? 'Submit' : 'Update'}}</button>\n                <button (click)=\"submitBlanks(submitType)\" *ngIf=\"isBulkUpload\"\n                        [attr.data-dismiss]=\"bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'modal' : ''\"\n                        [disabled]=\"!multiform.get('repeatblanks').valid || !blankValid || quesNoInvalid\"\n                        class=\"btn btn-primary\"\n                        type=\"button\">{{bulkFormData.noOfQuestions == bulkAddingCount + 1 ? 'Finish' : 'Next'}}</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #viewGraph let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-11\">\n                <h5 class=\"text-center mb-0\"><b>Graph</b></h5>\n            </div>\n            <div class=\"col-sm-1 text-right align-self-center\">\n                <i style=\"font-size: 1.75em !important;\" data-dismiss=\"modal\"\n                   class=\"fa fa-times-circle text-right color-red cursor\" (click)=\"closeDialog()\"></i>\n            </div>\n            <div class=\"col-12 d-flex flex-column\">\n                <app-graph-component [editMode]=\"false\"\n                                     [editPatchValue]=\"graphShow\"\n                                     [graphId]=\"'previewGraph'\"\n                                     [questionType]=\"'40'\"></app-graph-component>\n            </div>\n        </div>\n        <button (click)=\"close()\" class=\"btn btn-primary pull-right mt-4\" type=\"button\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #deleteAlert let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Delete Question</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <p class=\"mb-0\">Are you sure you want to delete this question?</p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal-footer d-flex justify-content-right mt-2\">\n        <button type=\"button\" class=\"btn btn-primary-outline\" (click)=\"deleteCancel()\">Cancel</button>\n        <button (click)=\"deleteQues(deleteID, delSection, [questionId])\" class=\"btn btn-primary\" type=\"button\">Ok\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #deleteSectionPopup let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Delete Section</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <p class=\"mb-0\">Are you sure you want to delete this section?</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer d-flex justify-content-right mt-2\">\n        <button (click)=\"deleteCancel()\" class=\"btn btn-primary-outline\" type=\"button\">Cancel</button>\n        <button (click)=\"deleteSectionConfirm(delSection)\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #deleteSvgDraw let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Delete Question</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <p class=\"mb-0\">Are you sure you want to delete this question?</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer d-flex justify-content-right mt-2\">\n        <button type=\"button\" class=\"btn btn-primary-outline\" (click)=\"deleteCancel()\">Cancel</button>\n        <button (click)=\"deleteQues(deleteID, delSection, questionId)\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #class let-c=\"close\" let-d=\"dismiss\">\n\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 text-right\">\n                    <i (click)=\"close()\" class=\"fa fa-close cursor\" style=\"font-size: 1rem\"></i>\n                </div>\n                <div class=\"col-sm-12 text-center\">\n                    <h3 class=\"modal-title headerText\">Delete All Annotation</h3>\n                </div>\n\n                <div class=\"col-sm-12\">\n                    <h5 class=\"text-center mt-3\">Are you sure want to delete All Annotations ?</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"deleteAllAnnotation()\" class=\"btn btn-outline-primary\" type=\"button\">Yes</button>\n        <!--            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"deleteCurrentPageAnnotation()\">This Page</button>-->\n    </div>\n</ng-template>\n\n<ng-template #viewExplain let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <h4>Explanation</h4>\n        <i (click)=\"close()\" class=\"fa fa-close cursor\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-12 overflow-auto\">\n                    <p [innerHTML]=\"ExplanationPopupValue | sanitizeHtml\"></p>\n                </div>\n            </div>\n            <!-- Container-fluid Ends-->\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #viewPdf let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title font-weight-bold\">{{pdfName}}</h4>\n        <i class=\"fa fa-close cursor align-self-center\" style=\"font-size: 1.2rem\" (click)=\"close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-md-12\">\n            <pdf-viewer [src]=\"pdfTemplate\" style=\"display: block;\"></pdf-viewer>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #uploadPdf let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Upload PDF</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5>Are you sure want to upload because previously uploaded pdf & data will be removed</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"close()\">Cancel</button>\n        <input accept=\".pdf\" style=\"display: none\" type=\"file\" #attachmentsnew (change)=\"encodePdfFileAsURL($event, 1)\"\n               #hiddenfileinput>\n        <button class=\"btn btn-primary\" type=\"file\" aria-describedby=\"inputGroupFileAddon01\"\n                (click)=\"hiddenfileinput.click()\">Confirm\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #mathShow let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4>Enter values</h4>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <!--                <div class=\"col-12 text-right\">-->\n                <!--                    <i class=\"fa fa-close cursor\" style=\"font-size: 2rem\" (click)=\"close()\"></i>-->\n                <!--                </div>-->\n                <!--                <div class=\"col-12 text-center\">-->\n                <!--                    <h3 class=\"modal-title headerText\">Delete Annotation</h3>-->\n                <!--                </div>-->\n                <div class=\"col-12\">\n                    <app-tiny-mice (emitEditorValue)=\"mathValue($event)\"\n                                   [editorPatchValue]=\"editMathValue == '' ? false : editMathValue.rect.text\"\n                                   [height]=\"250\"\n                                   [id]=\"'multiQues'\"\n                                   [imageToolHide]=\"true\"\n                                   [showDropBtn]=\"false\"\n                                   [showInputBtn]=\"false\">\n                    </app-tiny-mice>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"mathAnnotation()\" class=\"btn btn-outline-primary\"\n                type=\"button\">{{editMathValue == '' ? 'Done' : 'Update'}}</button>\n    </div>\n</ng-template>\n\n<ng-template #assignContentToClass let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Assign Content</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5>\n                    <span>Do you want to assign this content to the Class {{contentCreatedForm != 'class' ? 'or Content Folder' : ''}}</span>?\n                </h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"dontAssign()\">No</button>\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"assignContent()\"\n        >Yes\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #assignTemplate let-c=\"close\" let-d=\"dismiss\">\n    <app-confirm-content-assign\n            [classData]=\"classDetails\"\n            [contentDetails]=\"assignData\"\n            (closePopUp)=\"closeAssignPopUp()\"\n    >\n    </app-confirm-content-assign>\n</ng-template>\n\n<ng-template #addBulk let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <h4>Add Bulk Questions</h4>\n        <i (click)=\"close()\" class=\"fa fa-close cursor\" style=\"font-size: 1rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <form [formGroup]=\"bulkQuestionForm\">\n            <div class=\"container-fluid\">\n                <div class=\"col-12 d-flex flex-wrap\">\n                    <div class=\"col-4\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"noOfQuestions\"\n                               placeholder=\"No of Questions *\">\n                    </div>\n                    <div class=\"col-8\">\n                        <select class=\"form-control\" formControlName=\"questionType\">\n                            <option value=\"null\" selected disabled>Select Question Type *</option>\n                            <option value=\"{{item.question_type_id}}\"\n                                    *ngFor=\"let item of icons; let i = index\">{{item.question_type}}</option>\n                            <option value=\"40\">Graph Questions</option>\n                        </select>\n                    </div>\n                    <div class=\"col-{{bulkQuestionForm.controls.section.value === '' ? '6' : '12'}} mt-3\"\n                         *ngIf=\"secHeadingArray.length > 1\">\n                        <select class=\"form-control\" formControlName=\"section\">\n                            <option value=\"null\" selected disabled>Select Section *</option>\n                            <option value=\"\">New Section</option>\n                            <option value=\"{{i}}\" *ngFor=\"let item of secHeadingArray; let i = index\">{{item}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-6 mt-3\" *ngIf=\"bulkQuestionForm.value.section === ''\">\n                        <input type=\"text\" formControlName=\"sectionName\" class=\"form-control\"\n                               placeholder=\"Enter Section Name\">\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"createBulkQues()\" [attr.data-target]=\"'#log' + bulkQuestionForm.value.questionType\"\n                data-toggle=\"modal\" class=\"btn btn-outline-primary\" type=\"button\">Create\n        </button>\n    </div>\n</ng-template>\n", styles: ["//svg {\n//  cursor: crosshair;\n//  border: 1px solid #000000;\n//}\n//\n//rect {\n//  fill: none;\n//  stroke: #000000;\n//  stroke-width: 10;\n//}\n\n@keyframes blinkStroke {\n  100%,\n  0% {\n    stroke: #500;\n  }\n  30% {\n    stroke: deeppink;\n  }\n  60% {\n    stroke: yellow;\n  }\n  100% {\n    stroke: black;\n  }\n}\n\n@keyframes blinkFill {\n  100%,\n  0% {\n    fill: #500;\n  }\n  30% {\n    fill: deeppink;\n  }\n  60% {\n    fill: yellow;\n  }\n  100% {\n    fill: black;\n  }\n}\n\n.deleteIcon{\n  background: #e6baea !important;\n}\n\n\n\n.rectangle {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  &.move-to {\n    background-color: red;\n  }\n}\n\n\n\n.header {\n  h2 {\n    padding: 10px;\n    color: #37474f;\n  }\n  .link {\n    border-bottom: 1px solid black;\n    padding: 10px;\n    font-size: 11px;\n    a {\n      color: #673ab7;\n    }\n  }\n}\n\n.list {\n  display: flex;\n  flex-direction: column;\n  &-row {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    cursor: pointer;\n    position: relative;\n    &:hover {\n      background-color: #d5d5d5;\n    }\n    .delete-btn {\n      position: absolute;\n      top: 0;\n      right: 0;\n      .icon {\n        font-size: 16px;\n      }\n    }\n    pre {\n      .pre-title {\n        text-align: left;\n      }\n    }\n    .page-number {\n      text-align: right;\n      font-size: 12px;\n    }\n  }\n}\n.selectColor{\n  background: purple;\n  color: #fff;\n}\npdf-viewer {\n  /* define height */\n  height: 70vh;\n  /* or use flex for example */\n  flex: 1;\n}\n\n//@media screen {\n//  :host {\n//    display: block;\n//  }\n//}\n\n\n\n//.ck-editor__editable_inline {\n//  min-height: 400px;\n//}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.CreatorService }, { type: i3.ActivatedRoute }, { type: i4.FormBuilder }, { type: i5.NewsubjectService }, { type: i6.DomSanitizer }, { type: i7.ConfigurationService }, { type: i8.NgbModal }, { type: i9.ClassService }, { type: i10.ToastrService }, { type: i11.CommonService }, { type: i0.ChangeDetectorRef }, { type: i12.ValidationService }, { type: i3.Router }, { type: i13.NavService }], { pdfPage: [{
            type: ViewChild,
            args: ['pdfPage']
        }], canvas: [{
            type: ViewChild,
            args: ['canvas', { static: false }]
        }], pencilCanvas: [{
            type: ViewChild,
            args: ['pencilCanvas', { static: false }]
        }], multiChoice: [{
            type: ViewChild,
            args: ['multiChoice']
        }], fillIn: [{
            type: ViewChild,
            args: ['fillIn']
        }], dropdown: [{
            type: ViewChild,
            args: ['dropdown']
        }], trueFalse: [{
            type: ViewChild,
            args: ['trueFalse']
        }], essay: [{
            type: ViewChild,
            args: ['essay']
        }], deleted: [{
            type: ViewChild,
            args: ['delete']
        }], numericData: [{
            type: ViewChild,
            args: ['numeric']
        }], graph: [{
            type: ViewChild,
            args: ['graph']
        }], viewGraph: [{
            type: ViewChild,
            args: ['viewGraph']
        }], deleteAlert: [{
            type: ViewChild,
            args: ['deleteAlert']
        }], deleteSectionPopup: [{
            type: ViewChild,
            args: ['deleteSectionPopup']
        }], deleteSvgDraw: [{
            type: ViewChild,
            args: ['deleteSvgDraw']
        }], deleteClass: [{
            type: ViewChild,
            args: ['class']
        }], viewExplain: [{
            type: ViewChild,
            args: ['viewExplain']
        }], childGraph: [{
            type: ViewChild,
            args: [GraphComponentComponent]
        }], viewPdf: [{
            type: ViewChild,
            args: ['viewPdf']
        }], uploadPdf: [{
            type: ViewChild,
            args: ['uploadPdf']
        }], mathShow: [{
            type: ViewChild,
            args: ['mathShow']
        }], addBulk: [{
            type: ViewChild,
            args: ['addBulk']
        }], attachmentsnew: [{
            type: ViewChild,
            args: ['attachmentsnew']
        }], attachment1: [{
            type: ViewChild,
            args: ['attachments1']
        }], attachment2: [{
            type: ViewChild,
            args: ['attachments2']
        }], assignContentToClass: [{
            type: ViewChild,
            args: ['assignContentToClass']
        }], assignTemplate: [{
            type: ViewChild,
            args: ['assignTemplate']
        }], treeviewCompoent: [{
            type: ViewChild,
            args: [TreeviewContentfolderComponent, { static: false }]
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CreateAssessmentComponent, { className: "CreateAssessmentComponent" }); })();
//# sourceMappingURL=create-assessment.component.js.map