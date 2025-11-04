import { Component, Injectable, ViewChild, HostListener } from '@angular/core';
import { Validators } from '@angular/forms';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { parse } from 'flatted';
import { TreeviewContentfolderComponent } from '../../auth/treeview-contentfolder/treeview-contentfolder.component';
import { TreeviewComponent } from '@soy-andrey-semyonov/ngx-treeview';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/common-data.service";
import * as i2 from "@angular/router";
import * as i3 from "../../../shared/service/creator.service";
import * as i4 from "../../../shared/service/auth.service";
import * as i5 from "@angular/forms";
import * as i6 from "ngx-toastr";
import * as i7 from "@angular/platform-browser";
import * as i8 from "../../../shared/service/newsubject.service";
import * as i9 from "../../../shared/service/configuration.service";
import * as i10 from "../../../shared/service/common.service";
import * as i11 from "../../../shared/service/class.service";
import * as i12 from "../../../shared/service/validation.service";
import * as i13 from "@ng-bootstrap/ng-bootstrap";
import * as i14 from "@angular/common";
import * as i15 from "@ng-select/ng-select";
import * as i16 from "ngx-chips";
import * as i17 from "@angular/cdk/drag-drop";
import * as i18 from "../../auth/graph-component/graph-component.component";
import * as i19 from "../../auth/tiny-mice/tiny-mice.component";
import * as i20 from "../../auth/confirm-content-assign/confirm-content-assign.component";
import * as i21 from "../../auth/treeview-contentfolder/treeview-contentfolder.component";
import * as i22 from "../../auth/other-link/other-link.component";
import * as i23 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
const _c0 = ["myInput"];
const _c1 = ["multiChoiceDetail"];
const _c2 = ["matchTableDetail"];
const _c3 = ["dropDownDetail"];
const _c4 = ["text"];
const _c5 = ["highlight"];
const _c6 = ["matchOrder"];
const _c7 = ["deleteQuestion"];
const _c8 = ["passage"];
const _c9 = ["graphDetail"];
const _c10 = ["assignContentToClass"];
const _c11 = ["assignTemplate"];
const _c12 = ["addBranch"];
const _c13 = a0 => ({ "show-scroll": a0 });
const _c14 = a0 => ({ "selectColor": a0 });
const _c15 = () => ["20"];
const _c16 = () => ["21", "22"];
const _c17 = () => ["55"];
function TextAssignmentComponent_div_0_h4_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.contentName);
} }
function TextAssignmentComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 26);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TextAssignmentComponent_div_0_h4_3_span_2_Template, 2, 1, "span", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r0.type + " " + ctx_r0.textType, " ", ctx_r0.type == "edit" ? "-" : "", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.type == "edit");
} }
function TextAssignmentComponent_div_0_h4_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 29);
    i0.ɵɵtext(1, "Add Description");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_10_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 36);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_10_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.assignNext("edit", "addQuestion")); });
    i0.ɵɵtext(1, "Add Questions");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_10_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 37);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_10_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.assign(ctx_r0.type != "edit" ? "add" : "edit")); });
    i0.ɵɵtext(1, "Publish");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r0.detailData.length == 0);
} }
function TextAssignmentComponent_div_0_div_10_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 38);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_10_img_3_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.draft(ctx_r0.type != "edit" ? "add" : "edit")); });
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_10_button_1_Template, 2, 0, "button", 31)(2, TextAssignmentComponent_div_0_div_10_button_2_Template, 2, 1, "button", 32)(3, TextAssignmentComponent_div_0_div_10_img_3_Template, 1, 0, "img", 33);
    i0.ɵɵelementStart(4, "button", 34);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_10_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.assignNext("edit", "backButton")); });
    i0.ɵɵelement(5, "i", 35);
    i0.ɵɵtext(6, " Back");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isSingleQnsWithFeedbackType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.type == "edit" || ctx_r0.type != "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.type == "edit" || ctx_r0.type != "edit");
} }
function TextAssignmentComponent_div_0_div_14_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 79);
} }
function TextAssignmentComponent_div_0_div_14_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 80);
} }
function TextAssignmentComponent_div_0_div_14_img_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 81);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r0.sanitizer.bypassSecurityTrustResourceUrl(ctx_r0.webhost + "/" + ctx_r0.imagepath), i0.ɵɵsanitizeUrl);
} }
function TextAssignmentComponent_div_0_div_14_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 82);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_14_i_8_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.deleteImg()); });
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_14_em_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 83);
    i0.ɵɵtext(1, "Resource Name is required");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_14_em_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 83);
    i0.ɵɵtext(1, "Grade is required");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_14_em_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 83);
    i0.ɵɵtext(1, "Subject is required");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_14_option_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 84);
    i0.ɵɵtext(1, "Access to all within Org");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_14_option_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 85);
    i0.ɵɵtext(1, "Access only for you");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_14_option_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 86);
    i0.ɵɵtext(1, "Access within corporate");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_14_em_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 83);
    i0.ɵɵtext(1, "Access is required");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_14_em_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 83);
    i0.ɵɵtext(1, "Content Duration is required");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_14_em_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 83);
    i0.ɵɵtext(1, "Description is required");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_14_button_53_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 87);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_14_button_53_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.assignNext(ctx_r0.type, "nextButton")); });
    i0.ɵɵtext(1, "Next ");
    i0.ɵɵelement(2, "i", 88);
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_14_button_54_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 89);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_14_button_54_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.saveAndExit()); });
    i0.ɵɵtext(1, "Save");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "form", 40)(2, "div", 41)(3, "div", 42)(4, "div", 43);
    i0.ɵɵtemplate(5, TextAssignmentComponent_div_0_div_14_img_5_Template, 1, 0, "img", 44)(6, TextAssignmentComponent_div_0_div_14_img_6_Template, 1, 0, "img", 45)(7, TextAssignmentComponent_div_0_div_14_img_7_Template, 1, 1, "img", 46)(8, TextAssignmentComponent_div_0_div_14_i_8_Template, 1, 0, "i", 47);
    i0.ɵɵelementStart(9, "div", 48)(10, "input", 49, 11);
    i0.ɵɵlistener("change", function TextAssignmentComponent_div_0_div_14_Template_input_change_10_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.encodeImageFileAsURL($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 50);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_14_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r6); const addAssignment_r8 = i0.ɵɵreference(11); return i0.ɵɵresetView(addAssignment_r8.click()); });
    i0.ɵɵelement(14, "i", 51);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(15, "div", 52)(16, "h5");
    i0.ɵɵtext(17, "Created By");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 14)(19, "div", 53);
    i0.ɵɵelement(20, "input", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 55);
    i0.ɵɵelement(22, "input", 56);
    i0.ɵɵtemplate(23, TextAssignmentComponent_div_0_div_14_em_23_Template, 2, 0, "em", 57);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 14)(25, "div", 53);
    i0.ɵɵelement(26, "ng-select", 58);
    i0.ɵɵtemplate(27, TextAssignmentComponent_div_0_div_14_em_27_Template, 2, 0, "em", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 53);
    i0.ɵɵelement(29, "ng-select", 59);
    i0.ɵɵtemplate(30, TextAssignmentComponent_div_0_div_14_em_30_Template, 2, 0, "em", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 60)(32, "select", 61)(33, "option", 62);
    i0.ɵɵtext(34, "Please Choose....");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(35, TextAssignmentComponent_div_0_div_14_option_35_Template, 2, 0, "option", 63)(36, TextAssignmentComponent_div_0_div_14_option_36_Template, 2, 0, "option", 64)(37, TextAssignmentComponent_div_0_div_14_option_37_Template, 2, 0, "option", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(38, TextAssignmentComponent_div_0_div_14_em_38_Template, 2, 0, "em", 57);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "div", 66)(40, "div", 67)(41, "input", 68);
    i0.ɵɵlistener("keypress", function TextAssignmentComponent_div_0_div_14_Template_input_keypress_41_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.validationService.numberOnlyValidate($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(42, TextAssignmentComponent_div_0_div_14_em_42_Template, 2, 0, "em", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(43, "app-treeview-contentfolder", 69);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "div", 14)(45, "div", 70);
    i0.ɵɵelement(46, "textarea", 71);
    i0.ɵɵtemplate(47, TextAssignmentComponent_div_0_div_14_em_47_Template, 2, 0, "em", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div", 72);
    i0.ɵɵelement(49, "tag-input", 73);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(50, "div", 74);
    i0.ɵɵelement(51, "app-other-link", 75);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div", 76);
    i0.ɵɵtemplate(53, TextAssignmentComponent_div_0_div_14_button_53_Template, 3, 0, "button", 77)(54, TextAssignmentComponent_div_0_div_14_button_54_Template, 2, 0, "button", 78);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r0.assignmentform);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", (ctx_r0.imagepath == undefined || (ctx_r0.imagepath == null ? null : ctx_r0.imagepath.length) == 0) && ctx_r0.textType == "assignment");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r0.imagepath == undefined || (ctx_r0.imagepath == null ? null : ctx_r0.imagepath.length) == 0) && ctx_r0.textType == "assessment");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.imagepath != undefined && (ctx_r0.imagepath == null ? null : ctx_r0.imagepath.length) != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.imagepath != undefined && (ctx_r0.imagepath == null ? null : ctx_r0.imagepath.length) != 0);
    i0.ɵɵadvance(15);
    i0.ɵɵproperty("ngIf", !ctx_r0.assignmentform.get("resourceName").valid && (ctx_r0.assignmentform.get("resourceName").dirty || ctx_r0.assignmentform.get("resourceName").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r0.gradeData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.assignmentform.get("grade").valid && (ctx_r0.assignmentform.get("grade").dirty || ctx_r0.assignmentform.get("grade").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.subjectData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.assignmentform.get("subject").valid && (ctx_r0.assignmentform.get("subject").dirty || ctx_r0.assignmentform.get("subject").touched));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.roleid != "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.roleid != "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.roleid == "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.assignmentform.get("access").valid && (ctx_r0.assignmentform.get("access").dirty || ctx_r0.assignmentform.get("access").touched));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r0.assignmentform.get("content_duration").valid && (ctx_r0.assignmentform.get("content_duration").dirty || ctx_r0.assignmentform.get("content_duration").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("treeviewHeight", 250)("content_id", ctx_r0.type == "add" ? "" : ctx_r0.editData == null ? null : ctx_r0.editData.content_id)("type", ctx_r0.type)("selectedbatch", ctx_r0.batchId);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r0.assignmentform.get("description").valid && (ctx_r0.assignmentform.get("description").dirty || ctx_r0.assignmentform.get("description").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("secondaryPlaceholder", "Enter tags")("placeholder", "Add tags")("editable", true)("clearOnBlur", true)("addOnPaste", true)("addOnBlur", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("arrayValue", ctx_r0.resourceArray);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.type == "add" || ctx_r0.type == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.type == "edit" && (ctx_r0.detailData == null ? null : ctx_r0.detailData.length) != 0);
} }
function TextAssignmentComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 90)(1, "app-tiny-mice", 91);
    i0.ɵɵlistener("emitEditorValue", function TextAssignmentComponent_div_0_div_15_Template_app_tiny_mice_emitEditorValue_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.getEditorValue($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("editorPatchValue", ctx_r0.editorVal != "" ? ctx_r0.editorVal : false)("height", 380);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_6_div_1_h6_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "h6", 107);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r15.question), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_6_div_1_h6_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "h6", 107);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const list_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, list_r15.subQuestions[0] == null ? null : list_r15.subQuestions[0].passage), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_6_div_1_h6_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "h6", 107);
} if (rf & 2) {
    const list_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHTML", ctx_r0.convertMarkdownToHtml(list_r15.question), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100)(1, "div", 101)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, TextAssignmentComponent_div_0_div_16_div_1_div_6_div_1_h6_4_Template, 2, 3, "h6", 102)(5, TextAssignmentComponent_div_0_div_16_div_1_div_6_div_1_h6_5_Template, 2, 3, "h6", 102)(6, TextAssignmentComponent_div_0_div_16_div_1_div_6_div_1_h6_6_Template, 1, 1, "h6", 102);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 103)(8, "img", 104);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_16_div_1_div_6_div_1_Template_img_click_8_listener() { const ctx_r15 = i0.ɵɵrestoreView(_r14); const list_r15 = ctx_r15.$implicit; const i_r17 = ctx_r15.index; const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.editdetail(list_r15, i_r17)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "img", 105);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_16_div_1_div_6_div_1_Template_img_click_9_listener() { const list_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.viewdetail(list_r15.question_type_id, list_r15)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span")(11, "i", 106);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_16_div_1_div_6_div_1_Template_i_click_11_listener() { const list_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.deleteContent(list_r15.question_id, list_r15)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const list_r15 = ctx.$implicit;
    const i_r17 = ctx.index;
    i0.ɵɵpropertyInterpolate1("id", "cfs_nopreview-", i_r17 + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i_r17 + 1, ". ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r15.question_type_id != "24" && list_r15.question_type_id != "55");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r15.question_type_id == "24" && (list_r15.subQuestions[0] == null ? null : list_r15.subQuestions[0].passage) && (list_r15.subQuestions[0] == null ? null : list_r15.subQuestions[0].passage) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r15.question_type_id == "55");
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_6_div_1_Template, 12, 6, "div", 99);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.detailData);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 127);
    i0.ɵɵelement(1, "span", 128);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, list_r20.question), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 129)(1, "div", 130)(2, "h2");
    i0.ɵɵtext(3, "Essay Prompt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵelement(5, "span", 128);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r0.convertMarkdownToHtml(list_r20.question), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 131);
    i0.ɵɵelement(1, "span", 132);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, list_r20.subQuestions[0] == null ? null : list_r20.subQuestions[0].passage), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 134)(1, "span", 135);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 136);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const j_r23 = ctx.index;
    const list_r20 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c14, item_r22.correctActive === 1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((j_r23 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 3, list_r20.options[j_r23].options), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_15_div_1_Template, 5, 7, "div", 133);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r20.answer);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 132);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r24), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_tbody_7_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 141);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r25 = ctx.index;
    const ctx_r25 = i0.ɵɵnextContext();
    const item_r27 = ctx_r25.$implicit;
    const j_r28 = ctx_r25.index;
    const i_r21 = i0.ɵɵnextContext(3).index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("name", "", i_r21, "choose", j_r28, "");
    i0.ɵɵproperty("checked", item_r27.correctActive == k_r25);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_tbody_7_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 132);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_tbody_7_tr_1_td_3_Template, 2, 4, "td", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r28 = ctx.index;
    const list_r20 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r20.options[j_r28].options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r20.answer);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_tbody_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_tbody_7_tr_1_Template, 4, 4, "tr", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r20.heading_option);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_tbody_8_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 142);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r29 = ctx.index;
    const j_r30 = i0.ɵɵnextContext().index;
    const i_r21 = i0.ɵɵnextContext(3).index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate3("id", "checkMulti", i_r21, "", j_r30, "", k_r29, "");
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_tbody_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 132);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_tbody_8_tr_1_td_3_Template, 2, 4, "td", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const list_r20 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, item_r31.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r20.answer);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_tbody_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_tbody_8_tr_1_Template, 4, 4, "tr", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r20.options);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 137)(1, "table", 138)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_th_6_Template, 2, 3, "th", 139);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_tbody_7_Template, 2, 1, "tbody", 25)(8, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_tbody_8_Template, 2, 1, "tbody", 25);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", list_r20.answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.question_type_id == 5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.question_type_id == 7);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_17_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 153);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const option_r32 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, option_r32.listOption), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 145)(1, "div", 146)(2, "h6", 147);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 148);
    i0.ɵɵelement(5, "div", 149);
    i0.ɵɵelementStart(6, "div", 150)(7, "span", 151);
    i0.ɵɵtext(8, "Select Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_17_div_1_span_9_Template, 2, 3, "span", 152);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const j_r34 = ctx.index;
    const i_r21 = i0.ɵɵnextContext(2).index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(j_r34 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("id", "", i_r21, "dropdownPreview", j_r34, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r33.options);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 143);
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_17_div_1_Template, 10, 5, "div", 144);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r20.answer);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 155)(1, "div", 146)(2, "h6", 147);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "span", 156);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    const j_r36 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(j_r36 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, item_r35.options[0].value), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 143);
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_18_div_1_Template, 6, 4, "div", 154);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r20.answer);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 158)(1, "label", 159)(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "span", 132);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const answer_r37 = ctx.$implicit;
    const i_r38 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Correct Answer ", i_r38 + 1, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, answer_r37.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_19_div_1_Template, 6, 4, "div", 157);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r20.answer);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 160);
    i0.ɵɵelement(1, "span", 132);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, list_r20.answer[0].correctAnswer), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 161)(1, "div", 130)(2, "h2");
    i0.ɵɵtext(3, "Sample Essay");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵelement(5, "span", 128);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r0.convertMarkdownToHtml(list_r20.answer[0].correctAnswer), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 160);
    i0.ɵɵelement(1, "span", 132);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, list_r20.answer[0].correctAnswer), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 165);
    i0.ɵɵelement(1, "h4", 166);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, list_r20.editor_answer), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 162);
    i0.ɵɵelement(1, "app-graph-component", 163);
    i0.ɵɵtemplate(2, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_23_div_2_Template, 3, 3, "div", 164);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext();
    const list_r20 = ctx_r38.$implicit;
    const i_r21 = ctx_r38.index;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r0.parseVal(list_r20.answer))("graphId", "preview" + i_r21)("questionType", list_r20.question_type_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.editor_answer != "");
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_24_h6_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 171)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r20.source);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_24_h6_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 171)(1, "b");
    i0.ɵɵtext(2, "Source");
    i0.ɵɵelementEnd()();
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_24_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 172)(1, "div", 173)(2, "div", 174)(3, "span", 175);
    i0.ɵɵelement(4, "img", 176);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "div", 177);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r40 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, option_r40.options), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_24_h6_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 171)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r20.target);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_24_h6_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 171)(1, "b");
    i0.ɵɵtext(2, "Target");
    i0.ɵɵelementEnd()();
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_24_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 172)(1, "div", 173)(2, "div", 174)(3, "span", 175);
    i0.ɵɵelement(4, "img", 176);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "div", 177);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ans_r41 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, ans_r41.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 167)(1, "div", 168);
    i0.ɵɵtemplate(2, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_24_h6_2_Template, 3, 1, "h6", 169)(3, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_24_h6_3_Template, 3, 0, "h6", 169)(4, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_24_div_4_Template, 7, 3, "div", 170);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 168);
    i0.ɵɵtemplate(6, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_24_h6_6_Template, 3, 1, "h6", 169)(7, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_24_h6_7_Template, 3, 0, "h6", 169)(8, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_24_div_8_Template, 7, 3, "div", 170);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r20.source != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.source == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r20.options);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r20.target != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.target == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r20.answer);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 134)(1, "span", 135);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 191);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const answer_r42 = ctx.$implicit;
    const k_r43 = ctx.index;
    const item_r44 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c14, answer_r42.correctActive === 1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((k_r43 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 3, item_r44.options[k_r43].options), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 190);
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_3_div_1_Template, 5, 7, "div", 133);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r44 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r44.answer);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 195);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const answer_r45 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, answer_r45), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_tbody_7_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 141);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r46 = ctx.index;
    const ctx_r46 = i0.ɵɵnextContext();
    const answer_r48 = ctx_r46.$implicit;
    const k_r49 = ctx_r46.index;
    const j_r50 = i0.ɵɵnextContext(3).index;
    const i_r21 = i0.ɵɵnextContext(2).index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate3("name", "", i_r21, "choose", k_r49, "passage", j_r50, "");
    i0.ɵɵproperty("checked", answer_r48.correctActive === l_r46);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_tbody_7_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 195);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_tbody_7_tr_1_td_3_Template, 2, 5, "td", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r49 = ctx.index;
    const item_r44 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, item_r44.options[k_r49].options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r44.answer);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_tbody_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_tbody_7_tr_1_Template, 4, 4, "tr", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r44 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r44.heading_option);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_tbody_8_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 142);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r51 = ctx.index;
    const k_r52 = i0.ɵɵnextContext().index;
    const j_r50 = i0.ɵɵnextContext(3).index;
    const i_r21 = i0.ɵɵnextContext(2).index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate4("id", "checkMultiPassage", i_r21, "", j_r50, "", k_r52, "", l_r51, "");
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_tbody_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 195);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_tbody_8_tr_1_td_3_Template, 2, 5, "td", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const answer_r53 = ctx.$implicit;
    const item_r44 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, answer_r53.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r44.answer);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_tbody_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_tbody_8_tr_1_Template, 4, 4, "tr", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r44 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r44.options);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 192)(1, "table", 193)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_th_6_Template, 2, 3, "th", 194);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_tbody_7_Template, 2, 1, "tbody", 25)(8, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_tbody_8_Template, 2, 1, "tbody", 25);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r44 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", item_r44.answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r44.question_type_id == 5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r44.question_type_id == 7);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 155)(1, "div", 146)(2, "h6", 147);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "span", 156);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ans_r54 = ctx.$implicit;
    const k_r55 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(k_r55 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, ans_r54.options[0].value), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 196);
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_5_div_1_Template, 6, 4, "div", 154);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r44 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r44.answer);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 198)(1, "label", 159)(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 199);
    i0.ɵɵelement(5, "span", 195);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const answer_r56 = ctx.$implicit;
    const i_r57 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Correct Answer ", i_r57 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 2, answer_r56.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_6_div_1_Template, 7, 4, "div", 197);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r44 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r44.answer);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 200);
    i0.ɵɵelement(1, "span", 195);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r44 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, item_r44.answer[0].correctAnswer), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_p_34_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_p_34_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ", ");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_p_34_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_p_34_span_2_span_2_Template, 2, 0, "span", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const skill_r58 = ctx.$implicit;
    const last_r59 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(skill_r58);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r59);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_p_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_p_34_span_1_Template, 2, 0, "span", 25)(2, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_p_34_span_2_Template, 3, 2, "span", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r44 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (item_r44 == null ? null : item_r44.skill.length) == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r44 == null ? null : item_r44.skill);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_p_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 201)(1, "div", 202)(2, "label")(3, "b");
    i0.ɵɵtext(4, "Explanation: ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "div", 203);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r44 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, item_r44.explanation), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 201)(1, "div", 202)(2, "label")(3, "b");
    i0.ɵɵtext(4, "Resource:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "div", 203);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r44 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, item_r44.resource), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 179);
    i0.ɵɵelement(1, "span", 180);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_3_Template, 2, 1, "div", 181)(4, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_4_Template, 9, 3, "div", 182)(5, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_5_Template, 2, 1, "div", 183)(6, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_6_Template, 2, 1, "div", 97)(7, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_7_Template, 3, 3, "div", 184);
    i0.ɵɵelementStart(8, "div", 74)(9, "div", 185)(10, "div", 186)(11, "div", 14)(12, "div", 187)(13, "label", 188)(14, "b");
    i0.ɵɵtext(15, "Subject:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "p");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 187)(19, "label", 188)(20, "b");
    i0.ɵɵtext(21, "Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "p");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 187)(25, "label", 188)(26, "b");
    i0.ɵɵtext(27, "Sub Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "p");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 187)(31, "label", 188)(32, "b");
    i0.ɵɵtext(33, "Skill:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(34, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_p_34_Template, 3, 2, "p", 25)(35, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_p_35_Template, 2, 0, "p", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 187)(37, "label", 188)(38, "b");
    i0.ɵɵtext(39, "Standard:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "p");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div", 187)(43, "label", 188)(44, "b");
    i0.ɵɵtext(45, "Difficulty:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "p");
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "div", 189)(49, "label", 188)(50, "b");
    i0.ɵɵtext(51, "Points:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "p");
    i0.ɵɵtext(53);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "div", 189)(55, "label", 188)(56, "b");
    i0.ɵɵtext(57, "Predicted Solving Time:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "p");
    i0.ɵɵtext(59);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵtemplate(60, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_60_Template, 7, 3, "div", 126)(61, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_div_61_Template, 7, 3, "div", 126);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    const list_r20 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 17, item_r44.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r44.question_type_id == 1 || item_r44.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r44.question_type_id == 5 || item_r44.question_type_id == 7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r44.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(19, _c15).indexOf(item_r44.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(20, _c17).indexOf(item_r44.question_type_id) > -1);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate((item_r44 == null ? null : item_r44.subject_name) ? item_r44 == null ? null : item_r44.subject_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r44 == null ? null : item_r44.question_topic) ? item_r44 == null ? null : item_r44.question_topic : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r44 == null ? null : item_r44.sub_topic) ? item_r44 == null ? null : item_r44.sub_topic : "-");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r44 == null ? null : item_r44.skill);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !list_r20.skill);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r44 == null ? null : item_r44.question_standard_name) ? item_r44 == null ? null : item_r44.question_standard_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r44 == null ? null : item_r44.level) == "1" ? "Easy" : (item_r44 == null ? null : item_r44.level) == "2" ? "Medium" : "Difficult");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r44 == null ? null : item_r44.points) ? item_r44 == null ? null : item_r44.points : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((item_r44 == null ? null : item_r44.predicted_solving_time) ? item_r44 == null ? null : item_r44.predicted_solving_time : "-");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r44.explanation != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r44.resource != "");
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 162);
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_div_1_Template, 62, 21, "div", 178);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r20.subQuestions);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_26_p_26_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_26_p_26_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ", ");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_26_p_26_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_26_p_26_span_2_span_2_Template, 2, 0, "span", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const skill_r60 = ctx.$implicit;
    const last_r61 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(skill_r60);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r61);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_26_p_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_26_p_26_span_1_Template, 2, 0, "span", 25)(2, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_26_p_26_span_2_Template, 3, 2, "span", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (list_r20 == null ? null : list_r20.skill.length) == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r20 == null ? null : list_r20.skill);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_26_p_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74)(1, "div", 185)(2, "div", 186)(3, "div", 14)(4, "div", 187)(5, "label", 188)(6, "b");
    i0.ɵɵtext(7, "Subject:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 187)(11, "label", 188)(12, "b");
    i0.ɵɵtext(13, "Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 187)(17, "label", 188)(18, "b");
    i0.ɵɵtext(19, "Sub Topic:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "p");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 187)(23, "label", 188)(24, "b");
    i0.ɵɵtext(25, "Skill:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_26_p_26_Template, 3, 2, "p", 25)(27, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_26_p_27_Template, 2, 0, "p", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 187)(29, "label", 188)(30, "b");
    i0.ɵɵtext(31, "Standard:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "p");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 187)(35, "label", 188)(36, "b");
    i0.ɵɵtext(37, "Difficulty:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "p");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 189)(41, "label", 188)(42, "b");
    i0.ɵɵtext(43, "Points:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "p");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "div", 189)(47, "label", 188)(48, "b");
    i0.ɵɵtext(49, "Predicted Solving Time:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "p");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate((list_r20 == null ? null : list_r20.subject_name) ? list_r20 == null ? null : list_r20.subject_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((list_r20 == null ? null : list_r20.question_topic) ? list_r20 == null ? null : list_r20.question_topic : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((list_r20 == null ? null : list_r20.sub_topic) ? list_r20 == null ? null : list_r20.sub_topic : "-");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", list_r20 == null ? null : list_r20.skill);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !list_r20.skill);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((list_r20 == null ? null : list_r20.question_standard_name) ? list_r20 == null ? null : list_r20.question_standard_name : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((list_r20 == null ? null : list_r20.level) == "1" ? "Easy" : (list_r20 == null ? null : list_r20.level) == "2" ? "Medium" : "Difficult");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((list_r20 == null ? null : list_r20.points) ? list_r20 == null ? null : list_r20.points : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((list_r20 == null ? null : list_r20.predicted_solving_time) ? list_r20 == null ? null : list_r20.predicted_solving_time : "-");
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 201)(1, "div", 202)(2, "label")(3, "b");
    i0.ɵɵtext(4, "Explanation:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "div", 203);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, list_r20.explanation), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 201)(1, "div", 202)(2, "label")(3, "b");
    i0.ɵɵtext(4, "Resource:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "div", 203);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, list_r20.resource), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 110)(1, "div", 111)(2, "div", 112)(3, "div", 113)(4, "h5", 114);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 115)(7, "img", 104);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_Template_img_click_7_listener() { const ctx_r18 = i0.ɵɵrestoreView(_r18); const list_r20 = ctx_r18.$implicit; const i_r21 = ctx_r18.index; const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.editdetail(list_r20, i_r21)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "img", 105);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_Template_img_click_8_listener() { const list_r20 = i0.ɵɵrestoreView(_r18).$implicit; const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.viewdetail(list_r20.question_type_id, list_r20)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span")(10, "i", 106);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_Template_i_click_10_listener() { const list_r20 = i0.ɵɵrestoreView(_r18).$implicit; const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.deleteContent(list_r20.question_id, list_r20)); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(11, "div", 116);
    i0.ɵɵtemplate(12, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_12_Template, 3, 3, "div", 117)(13, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_13_Template, 6, 1, "div", 118)(14, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_14_Template, 3, 3, "div", 119);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_15_Template, 2, 1, "div", 98)(16, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_16_Template, 9, 3, "div", 120)(17, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_17_Template, 2, 1, "div", 121)(18, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_18_Template, 2, 1, "div", 121)(19, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_19_Template, 2, 1, "div", 97)(20, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_20_Template, 3, 3, "div", 122)(21, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_21_Template, 6, 1, "div", 123)(22, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_22_Template, 3, 3, "div", 122)(23, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_23_Template, 3, 5, "div", 124)(24, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_24_Template, 9, 6, "div", 125)(25, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_25_Template, 2, 1, "div", 124)(26, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_26_Template, 52, 9, "div", 97)(27, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_27_Template, 7, 3, "div", 126)(28, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_div_28_Template, 7, 3, "div", 126);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    i0.ɵɵpropertyInterpolate1("id", "cfs-", i_r21 + 1, "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i_r21 + 1);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", list_r20.question_type_id != 24 && list_r20.question_type_id != 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.question_type_id == 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.question_type_id == 24 && (list_r20.subQuestions[0] == null ? null : list_r20.subQuestions[0].passage) != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.question_type_id == 1 || list_r20.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.question_type_id == 5 || list_r20.question_type_id == 7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.question_type_id == 9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(20, _c15).indexOf(list_r20.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(21, _c16).indexOf(list_r20.question_type_id) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.question_type_id == 55);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.question_type_id == 28);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.question_type_id == 40 || list_r20.question_type_id == 41);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.question_type_id == 16);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.question_type_id == 24);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.question_type_id != 24 && list_r20.question_type_id != "55");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.explanation != "" && list_r20.question_type_id != "24" && list_r20.question_type_id != "55");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.resource != "" && list_r20.question_type_id != "24");
} }
function TextAssignmentComponent_div_0_div_16_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 108);
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_div_7_div_1_Template, 29, 22, "div", 109);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.detailData);
} }
function TextAssignmentComponent_div_0_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 94)(2, "h4", 95);
    i0.ɵɵtext(3, "Questions & Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 96);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_16_div_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(3); ctx_r0.showPreview = !ctx_r0.showPreview; return i0.ɵɵresetView(ctx_r0.showpre()); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, TextAssignmentComponent_div_0_div_16_div_1_div_6_Template, 2, 1, "div", 97)(7, TextAssignmentComponent_div_0_div_16_div_1_div_7_Template, 2, 1, "div", 98);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c14, ctx_r0.showPreview));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", !ctx_r0.showPreview ? "Show" : "Hide", " Preview");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.showPreview);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showPreview);
} }
function TextAssignmentComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TextAssignmentComponent_div_0_div_16_div_1_Template, 8, 6, "div", 92);
    i0.ɵɵelementStart(2, "i", 93);
    i0.ɵɵlistener("click", function TextAssignmentComponent_div_0_div_16_Template_i_click_2_listener() { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.windowScrollUp()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.detailData.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c13, ctx_r0.showScroll));
} }
function TextAssignmentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    i0.ɵɵtemplate(3, TextAssignmentComponent_div_0_h4_3_Template, 3, 3, "h4", 16)(4, TextAssignmentComponent_div_0_h4_4_Template, 2, 0, "h4", 17);
    i0.ɵɵelementStart(5, "label", 18);
    i0.ɵɵtext(6, "All fields marked with ");
    i0.ɵɵelementStart(7, "span", 19);
    i0.ɵɵtext(8, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, " are required");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(10, TextAssignmentComponent_div_0_div_10_Template, 7, 3, "div", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 14)(12, "div", 21)(13, "div", 22);
    i0.ɵɵtemplate(14, TextAssignmentComponent_div_0_div_14_Template, 55, 29, "div", 23)(15, TextAssignmentComponent_div_0_div_15_Template, 2, 2, "div", 24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(16, TextAssignmentComponent_div_0_div_16_Template, 3, 4, "div", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.openContent);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.openContent);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r0.openContent);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r0.openContent);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.openContent);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.openContent);
} }
function TextAssignmentComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 210)(1, "span", 135);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 211);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r63 = ctx.$implicit;
    const i_r64 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c14, list_r63.active == 1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((i_r64 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("id", "optionId" + i_r64);
} }
function TextAssignmentComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 204)(1, "h4", 205);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 206)(4, "div", 159);
    i0.ɵɵtemplate(5, TextAssignmentComponent_ng_template_1_div_5_Template, 4, 5, "div", 207);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 208)(7, "button", 209);
    i0.ɵɵlistener("click", function TextAssignmentComponent_ng_template_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r62); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.close()); });
    i0.ɵɵtext(8, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.quesId == "1" ? "Multi choice Standard" : "Multi Selection");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.answerIndex);
} }
function TextAssignmentComponent_ng_template_3_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 214);
} if (rf & 2) {
    const i_r66 = ctx.index;
    i0.ɵɵpropertyInterpolate1("id", "answerId", i_r66, "");
} }
function TextAssignmentComponent_ng_template_3_tbody_11_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 141);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r67 = ctx.index;
    const ctx_r67 = i0.ɵɵnextContext();
    const list_r69 = ctx_r67.$implicit;
    const j_r70 = ctx_r67.index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "choose", j_r70, "");
    i0.ɵɵproperty("checked", list_r69.correctActive === i_r67);
} }
function TextAssignmentComponent_ng_template_3_tbody_11_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 214);
    i0.ɵɵtemplate(2, TextAssignmentComponent_ng_template_3_tbody_11_tr_1_td_2_Template, 2, 3, "td", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r70 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("id", "optionId" + j_r70);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fullData.answer);
} }
function TextAssignmentComponent_ng_template_3_tbody_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, TextAssignmentComponent_ng_template_3_tbody_11_tr_1_Template, 3, 2, "tr", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fullData.heading_option);
} }
function TextAssignmentComponent_ng_template_3_tbody_12_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 142);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r71 = ctx.index;
    const j_r72 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "check", j_r72, "", i_r71, "");
} }
function TextAssignmentComponent_ng_template_3_tbody_12_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 214);
    i0.ɵɵtemplate(2, TextAssignmentComponent_ng_template_3_tbody_12_tr_1_td_2_Template, 2, 3, "td", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r72 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("id", "optionId" + j_r72);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fullData.answer);
} }
function TextAssignmentComponent_ng_template_3_tbody_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, TextAssignmentComponent_ng_template_3_tbody_12_tr_1_Template, 3, 2, "tr", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fullData.options);
} }
function TextAssignmentComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 204)(1, "h4", 205);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 206)(4, "div", 212)(5, "table", 138)(6, "thead")(7, "tr")(8, "th");
    i0.ɵɵtext(9, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, TextAssignmentComponent_ng_template_3_th_10_Template, 1, 2, "th", 213);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, TextAssignmentComponent_ng_template_3_tbody_11_Template, 2, 1, "tbody", 25)(12, TextAssignmentComponent_ng_template_3_tbody_12_Template, 2, 1, "tbody", 25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 208)(14, "button", 209);
    i0.ɵɵlistener("click", function TextAssignmentComponent_ng_template_3_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r65); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.close()); });
    i0.ɵɵtext(15, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.quesId == "5" ? "Match Table Standard" : "Match Table Labels");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r0.fullData.answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.quesId == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.quesId == "7");
} }
function TextAssignmentComponent_ng_template_5_div_4_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 221);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const option_r74 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, option_r74.listOption), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_ng_template_5_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 145)(1, "div", 216)(2, "h6", 147);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 148);
    i0.ɵɵelement(5, "div", 217);
    i0.ɵɵelementStart(6, "div", 218)(7, "span", 219);
    i0.ɵɵtext(8, "Select Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, TextAssignmentComponent_ng_template_5_div_4_div_1_span_9_Template, 2, 3, "span", 220);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r75 = ctx.$implicit;
    const j_r76 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(j_r76 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "dropdown", j_r76, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", item_r75.options);
} }
function TextAssignmentComponent_ng_template_5_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 159);
    i0.ɵɵtemplate(1, TextAssignmentComponent_ng_template_5_div_4_div_1_Template, 10, 4, "div", 144);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fullData.answer);
} }
function TextAssignmentComponent_ng_template_5_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 223)(1, "div", 146)(2, "h6", 147);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "span", 224);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r77 = ctx.$implicit;
    const j_r78 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(j_r78 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, item_r77.options[0].value), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_ng_template_5_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 159);
    i0.ɵɵtemplate(1, TextAssignmentComponent_ng_template_5_div_5_div_1_Template, 6, 4, "div", 222);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fullData.answer);
} }
function TextAssignmentComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 204)(1, "h4", 205);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 206);
    i0.ɵɵtemplate(4, TextAssignmentComponent_ng_template_5_div_4_Template, 2, 1, "div", 215)(5, TextAssignmentComponent_ng_template_5_div_5_Template, 2, 1, "div", 215);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 208)(7, "button", 209);
    i0.ɵɵlistener("click", function TextAssignmentComponent_ng_template_5_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r73); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.close()); });
    i0.ɵɵtext(8, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.quesId == "9" ? "Text Drop Down" : "Text Entry");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.quesId == "9");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.quesId == "10");
} }
function TextAssignmentComponent_ng_template_7_h6_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 171)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.fullData.source);
} }
function TextAssignmentComponent_ng_template_7_h6_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 171)(1, "b");
    i0.ɵɵtext(2, "Source");
    i0.ɵɵelementEnd()();
} }
function TextAssignmentComponent_ng_template_7_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 228)(1, "div", 174)(2, "span", 175);
    i0.ɵɵelement(3, "img", 229);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "div", 177);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r80 = ctx.$implicit;
    i0.ɵɵproperty("cdkDragDisabled", true);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, list_r80.options), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_ng_template_7_h6_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 171)(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.fullData.target);
} }
function TextAssignmentComponent_ng_template_7_h6_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 171)(1, "b");
    i0.ɵɵtext(2, "Target");
    i0.ɵɵelementEnd()();
} }
function TextAssignmentComponent_ng_template_7_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 228)(1, "div", 174)(2, "span", 175);
    i0.ɵɵelement(3, "img", 229);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "div", 230);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r81 = ctx.$implicit;
    i0.ɵɵproperty("cdkDragDisabled", true);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, list_r81.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 204)(1, "h4", 205);
    i0.ɵɵtext(2, "Match & Order > Sort List");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 206)(4, "div", 225)(5, "h6")(6, "b");
    i0.ɵɵtext(7, "Question:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "span", 132);
    i0.ɵɵpipe(9, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 226);
    i0.ɵɵtemplate(11, TextAssignmentComponent_ng_template_7_h6_11_Template, 3, 1, "h6", 169)(12, TextAssignmentComponent_ng_template_7_h6_12_Template, 3, 0, "h6", 169)(13, TextAssignmentComponent_ng_template_7_div_13_Template, 6, 4, "div", 227);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 226);
    i0.ɵɵtemplate(15, TextAssignmentComponent_ng_template_7_h6_15_Template, 3, 1, "h6", 169)(16, TextAssignmentComponent_ng_template_7_h6_16_Template, 3, 0, "h6", 169)(17, TextAssignmentComponent_ng_template_7_div_17_Template, 6, 4, "div", 227);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 208)(19, "button", 209);
    i0.ɵɵlistener("click", function TextAssignmentComponent_ng_template_7_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r79); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.close()); });
    i0.ɵɵtext(20, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(9, 7, ctx_r0.fullData.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fullData.source != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fullData.source == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fullData.options);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.fullData.target != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fullData.target == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fullData.answer);
} }
function TextAssignmentComponent_ng_template_9_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 132);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r0.fullData.question), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_ng_template_9_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 132);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r0.convertMarkdownToHtml(ctx_r0.fullData.question), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_ng_template_9_div_10_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 132);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.convertMarkdownToHtml(ctx_r0.fullData.answer[0].correctAnswer), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_ng_template_9_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 233)(1, "h6")(2, "b");
    i0.ɵɵtext(3, "Sample Essay:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, TextAssignmentComponent_ng_template_9_div_10_span_4_Template, 1, 1, "span", 231);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.quesId == "55");
} }
function TextAssignmentComponent_ng_template_9_div_11_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 132);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const answer_r83 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, answer_r83.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_ng_template_9_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h6")(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, TextAssignmentComponent_ng_template_9_div_11_div_1_span_4_Template, 2, 3, "span", 231);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r84 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Answer ", i_r84 + 1, ":");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.quesId == "20");
} }
function TextAssignmentComponent_ng_template_9_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 233);
    i0.ɵɵtemplate(1, TextAssignmentComponent_ng_template_9_div_11_div_1_Template, 5, 2, "div", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fullData.answer);
} }
function TextAssignmentComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 204)(1, "h4", 205);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 206)(4, "div", 159)(5, "h6")(6, "b");
    i0.ɵɵtext(7, "Question:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, TextAssignmentComponent_ng_template_9_span_8_Template, 2, 3, "span", 231)(9, TextAssignmentComponent_ng_template_9_span_9_Template, 1, 1, "span", 231);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, TextAssignmentComponent_ng_template_9_div_10_Template, 5, 1, "div", 232)(11, TextAssignmentComponent_ng_template_9_div_11_Template, 2, 1, "div", 232);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 208)(13, "button", 209);
    i0.ɵɵlistener("click", function TextAssignmentComponent_ng_template_9_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r82); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.close()); });
    i0.ɵɵtext(14, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.quesId == "20" ? "Free Text" : "Essay Writing");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r0.quesId == "20");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.quesId == "55");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fullData.answer[0].correctAnswer != "" && ctx_r0.quesId == "55");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.quesId == "20");
} }
function TextAssignmentComponent_ng_template_11_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 205);
    i0.ɵɵtext(1, "Highlight > Sentence and Responce");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 204);
    i0.ɵɵtemplate(1, TextAssignmentComponent_ng_template_11_h4_1_Template, 2, 0, "h4", 234);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 206)(3, "div", 159)(4, "h6")(5, "b");
    i0.ɵɵtext(6, "Question:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(7, "span", 132);
    i0.ɵɵpipe(8, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 225)(10, "h6")(11, "b");
    i0.ɵɵtext(12, "Highlighted Paragraph:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(13, "span", 132);
    i0.ɵɵpipe(14, "sanitizeHtml");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 208)(16, "button", 209);
    i0.ɵɵlistener("click", function TextAssignmentComponent_ng_template_11_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r85); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.close()); });
    i0.ɵɵtext(17, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.quesId == "28");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(8, 3, ctx_r0.fullData.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(14, 5, ctx_r0.fullData.answer[0].correctAnswer), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_ng_template_13_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 159)(1, "h6")(2, "b");
    i0.ɵɵtext(3, "Answer:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 235);
    i0.ɵɵelement(5, "span", 236);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 1, ctx_r0.answerGraph), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r86 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 204)(1, "h4", 205);
    i0.ɵɵtext(2, "Graph Question");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 206)(4, "div", 159)(5, "h6")(6, "b");
    i0.ɵɵtext(7, "Question:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "span", 132);
    i0.ɵɵpipe(9, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 225)(11, "h6")(12, "b");
    i0.ɵɵtext(13, "Graph Answer:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(14, "app-graph-component", 163);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, TextAssignmentComponent_ng_template_13_div_15_Template, 7, 3, "div", 215);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 208)(17, "button", 209);
    i0.ɵɵlistener("click", function TextAssignmentComponent_ng_template_13_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r86); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.close()); });
    i0.ɵɵtext(18, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(9, 6, ctx_r0.fullData.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r0.graphValue)("graphId", "preview")("questionType", ctx_r0.quesId);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.answerGraph != "");
} }
function TextAssignmentComponent_ng_template_15_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 205);
    i0.ɵɵtext(1, "Passage with Questions");
    i0.ɵɵelementEnd();
} }
function TextAssignmentComponent_ng_template_15_div_3_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 245)(1, "span", 135);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 246);
    i0.ɵɵpipe(4, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r88 = ctx.$implicit;
    const j_r89 = ctx.index;
    const list_r90 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c14, list_r90.answer[j_r89].correctActive === 1));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((j_r89 + 1 + 9).toString(36).toUpperCase());
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 3, item_r88.options), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_ng_template_15_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 159);
    i0.ɵɵtemplate(1, TextAssignmentComponent_ng_template_15_div_3_div_6_div_1_Template, 5, 7, "div", 244);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r90 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r90.options);
} }
function TextAssignmentComponent_ng_template_15_div_3_div_7_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 195);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r91 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r91), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_ng_template_15_div_3_div_7_tbody_7_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 141);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r92 = ctx.index;
    const ctx_r92 = i0.ɵɵnextContext();
    const item_r94 = ctx_r92.$implicit;
    const j_r95 = ctx_r92.index;
    const i_r96 = i0.ɵɵnextContext(3).index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("name", "", i_r96, "choose", j_r95, "");
    i0.ɵɵproperty("checked", item_r94.correctActive === k_r92);
} }
function TextAssignmentComponent_ng_template_15_div_3_div_7_tbody_7_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 195);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, TextAssignmentComponent_ng_template_15_div_3_div_7_tbody_7_tr_1_td_3_Template, 2, 4, "td", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r95 = ctx.index;
    const list_r90 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, list_r90.options[j_r95].options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r90.answer);
} }
function TextAssignmentComponent_ng_template_15_div_3_div_7_tbody_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, TextAssignmentComponent_ng_template_15_div_3_div_7_tbody_7_tr_1_Template, 4, 4, "tr", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r90 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r90.heading_option);
} }
function TextAssignmentComponent_ng_template_15_div_3_div_7_tbody_8_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "input", 142);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r97 = ctx.index;
    const j_r98 = i0.ɵɵnextContext().index;
    const i_r96 = i0.ɵɵnextContext(3).index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate3("id", "checkPassage", i_r96, "", j_r98, "", k_r97, "");
} }
function TextAssignmentComponent_ng_template_15_div_3_div_7_tbody_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 195);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, TextAssignmentComponent_ng_template_15_div_3_div_7_tbody_8_tr_1_td_3_Template, 2, 4, "td", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r99 = ctx.$implicit;
    const list_r90 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, item_r99.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r90.answer);
} }
function TextAssignmentComponent_ng_template_15_div_3_div_7_tbody_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tbody");
    i0.ɵɵtemplate(1, TextAssignmentComponent_ng_template_15_div_3_div_7_tbody_8_tr_1_Template, 4, 4, "tr", 140);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r90 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r90.options);
} }
function TextAssignmentComponent_ng_template_15_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 247)(1, "table", 138)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, TextAssignmentComponent_ng_template_15_div_3_div_7_th_6_Template, 2, 3, "th", 194);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, TextAssignmentComponent_ng_template_15_div_3_div_7_tbody_7_Template, 2, 1, "tbody", 25)(8, TextAssignmentComponent_ng_template_15_div_3_div_7_tbody_8_Template, 2, 1, "tbody", 25);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r90 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", list_r90.answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r90.question_type_id == 5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r90.question_type_id == 7);
} }
function TextAssignmentComponent_ng_template_15_div_3_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 155)(1, "div", 146)(2, "h6", 147);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "span", 156);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r100 = ctx.$implicit;
    const j_r101 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(j_r101 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 2, item_r100.options[0].value), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_ng_template_15_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 248);
    i0.ɵɵtemplate(1, TextAssignmentComponent_ng_template_15_div_3_div_8_div_1_Template, 6, 4, "div", 154);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r90 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r90.answer);
} }
function TextAssignmentComponent_ng_template_15_div_3_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 250)(1, "label", 159)(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 251);
    i0.ɵɵelement(5, "span", 195);
    i0.ɵɵpipe(6, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const answer_r102 = ctx.$implicit;
    const i_r103 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Correct Answer ", i_r103 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 2, answer_r102.correctAnswer), i0.ɵɵsanitizeHtml);
} }
function TextAssignmentComponent_ng_template_15_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtemplate(1, TextAssignmentComponent_ng_template_15_div_3_div_9_div_1_Template, 7, 4, "div", 249);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r90 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", list_r90.answer);
} }
function TextAssignmentComponent_ng_template_15_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 238)(1, "div", 239)(2, "h6", 240);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "span", 241);
    i0.ɵɵpipe(5, "sanitizeHtml");
    i0.ɵɵtemplate(6, TextAssignmentComponent_ng_template_15_div_3_div_6_Template, 2, 1, "div", 215)(7, TextAssignmentComponent_ng_template_15_div_3_div_7_Template, 9, 3, "div", 242)(8, TextAssignmentComponent_ng_template_15_div_3_div_8_Template, 2, 1, "div", 243)(9, TextAssignmentComponent_ng_template_15_div_3_div_9_Template, 2, 1, "div", 97);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r90 = ctx.$implicit;
    const i_r96 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i_r96 + 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(5, 6, list_r90.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r90.question_type_id == 1 || list_r90.question_type_id == 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r90.question_type_id == 5 || list_r90.question_type_id == 7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r90.question_type_id == 10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(8, _c15).indexOf(list_r90.question_type_id) > -1);
} }
function TextAssignmentComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 204);
    i0.ɵɵtemplate(1, TextAssignmentComponent_ng_template_15_h4_1_Template, 2, 0, "h4", 234);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 206);
    i0.ɵɵtemplate(3, TextAssignmentComponent_ng_template_15_div_3_Template, 10, 9, "div", 237);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 208)(5, "button", 209);
    i0.ɵɵlistener("click", function TextAssignmentComponent_ng_template_15_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r87); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.close()); });
    i0.ɵɵtext(6, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.quesId == "24");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.fullData.subQuestions);
} }
function TextAssignmentComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r104 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 204)(1, "h4", 205);
    i0.ɵɵtext(2, "Delete Question");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 252)(4, "div", 74)(5, "h5");
    i0.ɵɵtext(6, "Are you sure want to delete this question ?");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 253)(8, "button", 209);
    i0.ɵɵlistener("click", function TextAssignmentComponent_ng_template_17_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r104); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.questionDelete()); });
    i0.ɵɵtext(9, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 254);
    i0.ɵɵlistener("click", function TextAssignmentComponent_ng_template_17_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r104); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeQuestion()); });
    i0.ɵɵtext(11, "Cancel");
    i0.ɵɵelementEnd()();
} }
function TextAssignmentComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r105 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 204)(1, "h5", 255);
    i0.ɵɵtext(2, "Assign Content");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 206)(4, "div", 14)(5, "div", 256)(6, "h5")(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, "?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 253)(11, "button", 257);
    i0.ɵɵlistener("click", function TextAssignmentComponent_ng_template_19_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r105); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.dontAssign()); });
    i0.ɵɵtext(12, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 258);
    i0.ɵɵlistener("click", function TextAssignmentComponent_ng_template_19_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r105); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.assignContent()); });
    i0.ɵɵtext(14, "Yes");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Do you want to assign this content to the Class ", ctx_r0.contentCreatedForm != "class" ? "or Content Folder" : "", "");
} }
function TextAssignmentComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r106 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-confirm-content-assign", 259);
    i0.ɵɵlistener("closePopUp", function TextAssignmentComponent_ng_template_21_Template_app_confirm_content_assign_closePopUp_0_listener() { i0.ɵɵrestoreView(_r106); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeAssignPopUp()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("isEssay", ctx_r0.isSingleQnsWithFeedbackType ? "1" : "0")("classData", ctx_r0.classDetails)("contentDetails", ctx_r0.assignData);
} }
export class TextAssignmentComponent {
    onWindowScroll() {
        if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
            this.showScroll = true;
        }
        else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
            this.showScroll = false;
        }
    }
    constructor(commondata, router, route, creator, auth, formBuilder, toastr, sanitizer, newSubject, config, common, classService, validationService, modalService) {
        this.commondata = commondata;
        this.router = router;
        this.route = route;
        this.creator = creator;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.newSubject = newSubject;
        this.config = config;
        this.common = common;
        this.classService = classService;
        this.validationService = validationService;
        this.modalService = modalService;
        this.showPage = false;
        this.editorVal = '';
        this.getTag = [];
        this.showPreview = true;
        this.detailData = [];
        this.resourceArray = [];
        this.mathDelayer = false;
        this.classDetails = [];
        this.contentCreatedForm = '';
        this.batchId = [];
        this.manageClass = true;
        this.showScrollHeight = 300;
        this.hideScrollHeight = 10;
        this.webhost = this.config.getimgUrl();
        this.roleid = this.auth.getRoleId();
        this.username = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
        this.textType = this.auth.getSessionData('textType');
        this.openContent = false;
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.manageClass = this.auth.manageClass;
        this.assignmentform = this.formBuilder.group({
            created: ['', Validators.required],
            resourceName: ['', Validators.required],
            grade: ['', Validators.required],
            subject: ['', Validators.required],
            description: '',
            tag: '',
            content_duration: '0',
            access: ['1', Validators.required],
        });
        this.allowChange = true;
        this.newSubject.allowSchoolChange(this.allowChange);
        if (this.type == 'edit') {
            const data = JSON.parse(this.auth.getSessionData('editor'));
            this.listDetails(data);
        }
        else if (this.type == 'qEdit') {
            this.showPage = true;
            this.editData = JSON.parse(this.auth.getSessionData('textAssignValue'));
            this.contentName = this.editData.name;
            this.type = 'edit';
            this.openContent = true;
            this.gradeId = this.editData.grade_id;
            this.assignmentform.controls.created.patchValue(this.editData.created_by);
            this.assignmentform.controls.content_duration.patchValue(this.editData.content_duration ?? '0');
            this.batchId = this.editData.batch_id;
            this.assignmentform.controls.resourceName.patchValue(this.editData.name);
            if (this.editData.grade.length >= 3) {
                this.gradeSplit = [];
                const grade = this.editData.grade.split(',');
                for (let i = 0; i < grade.length; i++) {
                    this.gradeSplit.push(grade[i]);
                }
            }
            else {
                this.gradeSplit = [this.editData.grade];
            }
            if (this.editData.subject.length >= 3) {
                this.subjectSplit = [];
                const subject = this.editData.subject.split(',');
                for (let i = 0; i < subject.length; i++) {
                    this.subjectSplit.push(subject[i]);
                }
            }
            else {
                this.subjectSplit = [this.editData.subject];
            }
            this.assignmentform.controls.grade.patchValue(this.gradeSplit);
            this.assignmentform.controls.subject.patchValue(this.subjectSplit);
            this.assignmentform.controls.description.patchValue(this.editData.description);
            this.assignmentform.controls.access.patchValue(this.editData.access);
            if (this.editData.tags != null) {
                for (let i = 0; i < this.editData.tags.length; i++) {
                    this.getTag.push({ display: this.editData.tags[i], value: this.editData.tags[i] });
                }
            }
            this.assignmentform.controls.tag.patchValue(this.getTag);
            if (this.editData.profile_url != '') {
                this.imagepath = this.editData.profile_url;
            }
            this.imagepaththumb = this.editData.profile_thumb_url;
            this.listDetails(this.editData);
        }
        else {
            this.showPage = true;
            this.assignmentform.controls.created.patchValue(this.username);
            this.assignmentform.controls.resourceName.patchValue('');
            this.assignmentform.controls.grade.patchValue(null);
            this.assignmentform.controls.subject.patchValue(null);
            this.assignmentform.controls.description.patchValue('');
            this.batchId = [];
            this.resourceArray = [];
            this.assignmentform.controls.access.patchValue(this.auth.getRoleId() == '6' ? '4' : '1');
            this.assignmentform.controls.tag.patchValue('');
        }
        this.contentCreatedForm = this.auth.getSessionData('assignedForm');
    }
    ngOnInit() {
        this.commondata.showLoader(false);
        this.gradeList();
        this.subjectList();
    }
    windowScrollUp() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
            console.error(error, 'error');
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
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.classService.subjectList(data).subscribe((successData) => {
            this.subjectListSuccess(successData);
        }, (error) => {
            console.log(error, 'error_Subject');
        });
    }
    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
    }
    encodeImageFileAsURL(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            const imgDetails = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                const pic = imgDetails.type.split('/');
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
            uploadtype: 'teacher'
        };
        this.common.fileUpload(data).subscribe((successData) => {
            this.uploadSuccess(successData);
        }, (error) => {
            console.log(error, 'wrongFormat');
        });
    }
    uploadSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.imagepath = successData.ResponseObject.imagepath[0].original_image_url;
            this.imagepaththumb = successData.ResponseObject.imagepath[0].resized_url;
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    assign(value) {
        if (this.assignmentform.valid) {
            this.editorVal = this.content?.content;
            this.tagArray = [];
            const tags = this.assignmentform.controls.tag.value;
            console.log(tags, 'tags');
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
            const filteredResourceLink = this.resourceArray.filter((item) => item.link !== '');
            const checkForValidResourceLink = filteredResourceLink.some((item) => item.name == '');
            if (!checkForValidResourceLink) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.auth.getSessionData('school_id'),
                    name: this.assignmentform.controls.resourceName.value,
                    description: this.assignmentform.controls.description.value,
                    grade: this.assignmentform.controls.grade.value,
                    subject: this.assignmentform.controls.subject.value,
                    access: this.assignmentform.controls.access.value,
                    file_path: [],
                    tags: this.tagArray,
                    profile_url: this.imagepath,
                    profile_thumb_url: this.imagepaththumb,
                    content_format: '3',
                    content_type: this.textType == 'assignment' ? '2' : '3',
                    status: '1',
                    answers: [],
                    file_text: this.editorVal ? this.editorVal : '',
                    links: filteredResourceLink,
                    annotation: [],
                    assign: '0',
                    classdetails: [],
                    editor_type: '',
                    corporate_id: this.roleid == 6 ? this.auth.getSessionData('corporate_id') : undefined,
                    batch_id: this.viewEdit,
                    content_duration: this.assignmentform.controls.content_duration.value != '' ? this.assignmentform.controls.content_duration.value : '0'
                };
                if (value == 'add') {
                    const editData = JSON.parse(this.auth.getSessionData('editresources'));
                    data['content_id'] = editData.content_id;
                    this.creator.editAssignResourse(data).subscribe((successData) => {
                        this.assignSuccess(successData);
                    }, (error) => {
                        console.log(error, 'error_assign');
                    });
                }
                else if (value == 'edit') {
                    data['content_id'] = this.editData.content_id;
                    this.creator.editAssignResourse(data).subscribe((successData) => {
                        this.assignSuccess(successData);
                    }, (error) => {
                        console.log(error, 'error_assign');
                    });
                }
            }
            else {
                this.resourceArray.forEach(item => item.error = item.name == '' && item.link != '');
                setTimeout(() => {
                    const element = document.getElementById('otherLink');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
                this.toastr.error('Name is mandatory for each additional resource links');
            }
        }
        else {
            this.validationService.validateAllFormFields(this.assignmentform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    assignSuccess(successData) {
        if (successData.IsSuccess) {
            this.assignData = successData.Contentdetails;
            console.log(this.assignData, 'assign');
            this.modalRef = this.modalService.open(this.assignContentToClass, { size: 'md', backdrop: 'static' });
            this.toastr.success('Content added successfully');
            this.auth.removeSessionData('editresources');
        }
        else {
            this.toastr.error(successData.ResponseObject);
        }
    }
    draft(value) {
        const batchId = this.viewEdit;
        let corporate;
        if (this.roleid == 6) {
            corporate = this.auth.getSessionData('corporate_id');
        }
        else {
            corporate = undefined;
        }
        if (this.assignmentform.valid) {
            this.editorVal = this.content?.content;
            this.tagArray = [];
            const tags = this.assignmentform.controls.tag.value;
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
            console.log(tags, 'tags');
            const filteredResourceLink = this.resourceArray.filter((item) => item.link !== '' && item.name !== '');
            const checkForValidResourceLink = filteredResourceLink.some((item) => item.name == '');
            if (!checkForValidResourceLink) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.auth.getSessionData('school_id'),
                    name: this.assignmentform.controls.resourceName.value,
                    description: this.assignmentform.controls.description.value,
                    grade: this.assignmentform.controls.grade.value,
                    subject: this.assignmentform.controls.subject.value,
                    access: this.assignmentform.controls.access.value,
                    file_path: [],
                    tags: this.tagArray,
                    profile_url: this.imagepath,
                    profile_thumb_url: this.imagepaththumb,
                    content_format: '3',
                    content_type: this.textType == 'assignment' ? '2' : '3',
                    status: '5',
                    answers: [],
                    file_text: this.editorVal ? this.editorVal : '',
                    links: filteredResourceLink,
                    annotation: [],
                    assign: '0',
                    classdetails: [],
                    editor_type: '',
                    corporate_id: corporate,
                    batch_id: batchId,
                    content_duration: this.assignmentform.controls.content_duration.value != '' ? this.assignmentform.controls.content_duration.value : '0'
                };
                if (value != 'edit') {
                    const editData = JSON.parse(this.auth.getSessionData('editresources'));
                    data['content_id'] = editData.content_id;
                    this.creator.editDraftResourse(data).subscribe((successData) => {
                        this.draftSuccess(successData);
                    }, (error) => {
                        console.log(error, 'error_draft');
                    });
                }
                else if (value == 'edit') {
                    data['content_id'] = this.editData.content_id;
                    this.creator.editDraftResourse(data).subscribe((successData) => {
                        this.draftSuccess(successData);
                    }, (error) => {
                        console.log(error, 'error_draft');
                    });
                }
            }
            else {
                this.resourceArray.forEach(item => item.error = item.name == '' && item.link != '');
                setTimeout(() => {
                    const element = document.getElementById('otherLink');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
                this.toastr.error('Name is mandatory for each additional resource links');
            }
        }
        else {
            this.validationService.validateAllFormFields(this.assignmentform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    draftSuccess(successData) {
        if (successData.IsSuccess) {
            this.draftData = successData.ResponseObject;
            this.router.navigate(['/repository/content-home']);
            this.toastr.success('Draft Added');
            this.auth.removeSessionData('editresources');
        }
    }
    saveAndExit() {
        const getDetails = JSON.parse(this.auth.getSessionData('editresources'));
        this.viewEdit = this.treeviewCompoent.batchid;
        console.log(this.viewEdit, 'view');
        console.log(getDetails, 'dasda');
        if (getDetails.status == '1') {
            this.assign('edit');
        }
        else if (getDetails.status == '5') {
            this.draft('edit');
        }
    }
    get isSingleQnsWithFeedbackType() {
        return this.detailData && Array.isArray(this.detailData) ? this.detailData.some(qns => qns.question_type_id === '55') : false;
    }
    assignNext(type, buttonClickedFrom) {
        this.viewEdit = buttonClickedFrom == 'nextButton' ? this.treeviewCompoent.batchid : this.editData.batch_id;
        let corporates;
        if (this.roleid == 6) {
            corporates = this.auth.getSessionData('corporate_id');
        }
        else {
            corporates = undefined;
        }
        if (this.assignmentform.valid) {
            if (buttonClickedFrom != 'nextButton') {
                this.editorVal = this.content?.content;
            }
            this.tagArray = [];
            const tags = this.assignmentform.controls.tag.value;
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
            const filteredResourceLink = this.resourceArray.filter((item) => item.link !== '');
            const checkForValidResourceLink = filteredResourceLink.some((item) => item.name == '');
            if (!checkForValidResourceLink) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.auth.getSessionData('school_id'),
                    name: this.assignmentform.controls.resourceName.value,
                    description: this.assignmentform.controls.description.value,
                    grade: this.assignmentform.controls.grade.value,
                    subject: this.assignmentform.controls.subject.value,
                    access: this.assignmentform.controls.access.value,
                    file_path: [],
                    tags: this.tagArray,
                    profile_url: this.imagepath,
                    profile_thumb_url: this.imagepaththumb,
                    content_format: '3',
                    content_type: this.textType == 'assignment' ? '2' : '3',
                    status: '1',
                    answers: [],
                    file_text: this.editorVal ? this.editorVal : '',
                    links: filteredResourceLink,
                    annotation: [],
                    assign: '0',
                    classdetails: [],
                    editor_type: '',
                    corporate_id: corporates,
                    batch_id: this.viewEdit,
                    content_duration: this.assignmentform.controls.content_duration.value != '' ? this.assignmentform.controls.content_duration.value : '0'
                };
                if (type != 'edit') {
                    this.creator.addAssignResourse(data).subscribe((successData) => {
                        this.assignNextSuccess(successData, buttonClickedFrom);
                    }, (error) => {
                        console.error(error, 'assign_Error');
                    });
                }
                else if (type == 'edit') {
                    data['content_id'] = this.editData.content_id;
                    this.creator.editAssignResourse(data).subscribe((successData) => {
                        this.assignNextSuccess(successData, buttonClickedFrom);
                    }, (error) => {
                        console.error(error, 'assign_Error');
                    });
                }
            }
            else {
                this.resourceArray.forEach(item => item.error = item.name == '' && item.link != '');
                setTimeout(() => {
                    const element = document.getElementById('otherLink');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
                this.toastr.error('Name is mandatory for each additional resource links');
            }
        }
        else {
            this.validationService.validateAllFormFields(this.assignmentform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    assignNextSuccess(successData, buttonClickedFrom) {
        if (successData.IsSuccess) {
            this.assignDataValue = successData.Contentdetails;
            console.log(this.assignDataValue, 'this.assignDataValue');
            if (!this.assignDataValue) {
                console.error('assignDataValue is undefined from successData.Contentdetails');
                return;
            }
            if (buttonClickedFrom == 'backButton') {
                this.back();
            }
            else if (buttonClickedFrom == 'nextButton') {
                this.openContent = true;
                // this.auth.setSessionData('cfs_question_no', '');
                this.auth.setSessionData('textAssignValue', JSON.stringify(this.assignDataValue));
                this.auth.setSessionData('editresources', JSON.stringify(this.assignDataValue));
                this.listDetails(this.assignDataValue);
            }
            else if (buttonClickedFrom == 'addQuestion') {
                this.auth.setSessionData('cfs_question_no', this.detailData.length == 0 ? '1' : this.detailData.length + 1);
                this.auth.setSessionData('content_subject', this.assignDataValue.subject);
                this.auth.setSessionData('qnsList', JSON.stringify(this.detailData));
                this.selectQuestion();
            }
            this.showpre();
        }
        else {
            this.toastr.error(successData.ResponseObject);
        }
    }
    back() {
        this.router.navigate(['content-text-resource/text-assignment/edit']);
        this.editData = JSON.parse(this.auth.getSessionData('editresources'));
        this.editorVal = this.content?.content;
        this.openContent = false;
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
    selectQuestion() {
        this.editorVal = this.content?.content;
        this.auth.setSessionData('textAssignContent', JSON.stringify(this.editorVal));
        this.router.navigate(['content-text-resource/add-questions/add']);
    }
    listDetails(val) {
        if (!val) {
            console.error('listDetails called with undefined value');
            return;
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: val.content_id,
            content_format: '3',
            content_type: val.content_type,
            school_id: this.auth.getSessionData('school_id')
        };
        this.creator.repositoryDetail(data).subscribe((successData) => {
            this.detailsSuccess(successData);
        }, (error) => {
            console.log(error, 'error_contentDetails');
        });
    }
    detailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.editData = successData.ResponseObject;
            this.detailData = successData.ResponseObject.questions;
            this.showPage = true;
            if (this.type == 'edit') {
                this.batchId = this.editData.batch_id;
                this.contentName = this.editData.name;
                this.gradeId = this.editData.grade_id;
                this.assignmentform.controls.created.patchValue(this.editData.created_by);
                this.assignmentform.controls.content_duration.patchValue(this.editData.content_duration ?? '0');
                this.assignmentform.controls.resourceName.patchValue(this.editData.name);
                if (this.editData.grade.length >= 3) {
                    this.gradeSplit = [];
                    const grade = this.editData.grade.split(',');
                    for (let i = 0; i < grade.length; i++) {
                        this.gradeSplit.push(grade[i]);
                    }
                }
                else {
                    this.gradeSplit = [this.editData.grade];
                }
                if (this.editData.subject.length >= 3) {
                    this.subjectSplit = [];
                    const subject = this.editData.subject.split(',');
                    for (let i = 0; i < subject.length; i++) {
                        this.subjectSplit.push(subject[i]);
                    }
                }
                else {
                    this.subjectSplit = [this.editData.subject];
                }
                this.assignmentform.controls.grade.patchValue(this.gradeSplit);
                this.assignmentform.controls.subject.patchValue(this.subjectSplit);
                this.assignmentform.controls.description.patchValue(this.editData.description);
                this.assignmentform.controls.access.patchValue(this.editData.access);
                if (this.editData.file_text != '') {
                    this.editorVal = this.editData.file_text;
                }
                console.log(this.editorVal, 'dasdass');
                if (this.editData.tags != null && this.editData.tags != '') {
                    this.getTag = [];
                    const tagValue = this.editData.tags.split(',');
                    for (let i = 0; i < tagValue.length; i++) {
                        this.getTag.push({ display: tagValue[i], value: tagValue[i] });
                    }
                }
                else {
                    this.getTag = [];
                }
                console.log(this.getTag, 'getTag');
                this.assignmentform.controls.tag.patchValue(this.getTag);
                if (this.editData.profile_url != '') {
                    this.imagepath = this.editData.profile_url;
                }
                this.imagepaththumb = this.editData.profile_thumb_url;
                this.detailData = this.editData.questions;
                this.resourceArray = this.editData.links ? this.editData.links : [];
            }
            console.log(this.editData, 'editData');
            this.editorVal = this.editData.file_text != '' ? this.editData.file_text : '';
            setTimeout(() => {
                if (this.detailData && Array.isArray(this.detailData)) {
                    for (let i = 0; i < this.detailData.length; i++) {
                        if (document.getElementById('question' + i)) {
                            document.getElementById('question' + i).innerHTML =
                                this.detailData[i].question_type_id != '24' ? this.detailData[i].question : this.detailData[i].subQuestions[0]?.passage;
                        }
                    }
                }
            }, 1000);
            this.showpre();
            this.clickEvent();
        }
    }
    deleteImg() {
        this.imagepath = [];
        this.myInputVariable.nativeElement.value = '';
    }
    editdetail(data, index) {
        console.log(data, 'editQuestionData');
        this.auth.setSessionData('cfs_question_no', index + 1);
        this.auth.setSessionData('questionID', data.question_type_id);
        this.auth.setSessionData('content_subject', this.editData.subject);
        this.auth.setSessionData('questionData', JSON.stringify(data));
        this.router.navigate(['content-text-resource/question-paper/edit']);
    }
    deleteContent(id, data) {
        if (data.question_type_id != '24') {
            this.fullData = [id];
        }
        else {
            let subQuestion;
            subQuestion = data.subQuestions;
            this.passsageQuestion = [];
            subQuestion.forEach((item) => {
                this.passsageQuestion.push(item.question_id);
            });
            this.fullData = this.passsageQuestion;
        }
        this.modalRef = this.modalService.open(this.deleteQuestion);
    }
    questionDelete() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            question_id: this.fullData
        };
        this.creator.contentDelete(data).subscribe((successData) => {
            this.deleteContentSuccess(successData);
        }, (error) => {
            console.error(error, 'delete_question');
        });
    }
    deleteContentSuccess(successData) {
        this.fullData = '';
        this.toastr.success(successData.ResponseObject);
        this.listDetails(this.editData);
        this.modalRef.close();
    }
    viewdetail(id, data) {
        if (id == '1' || id == '2') {
            this.answerIndex = [];
            this.fullData = data;
            this.quesId = id;
            for (let i = 0; i < this.fullData.options.length; i++) {
                this.answerIndex.push({ options: this.fullData.options[i].options, active: this.fullData.answer[i].correctActive });
            }
            for (let j = 0; j < this.fullData.answer.length; j++) {
                this.answerIndex[j].active = this.fullData.answer[j].correctActive;
            }
            setTimeout(() => {
                for (let i = 0; i < this.fullData.options.length; i++) {
                    document.getElementById('optionId' + i).innerHTML = this.fullData.options[i].options;
                }
            }, 100);
            this.modalRef = this.modalService.open(this.multiChoiceDetail, data);
        }
        else if (id == '5' || id == '7') {
            this.fullData = data;
            this.quesId = id;
            setTimeout(() => {
                for (let i = 0; i < this.fullData.answer.length; i++) {
                    document.getElementById('answerId' + i).innerHTML = this.fullData.answer[i];
                }
                for (let i = 0; i < this.fullData.options.length; i++) {
                    document.getElementById('optionId' + i).innerHTML = this.fullData.options[i].options;
                }
                if (id == '7') {
                    for (let i = 0; i < this.fullData.heading_option.length; i++) {
                        const row = this.fullData.heading_option[i].correctActive;
                        const column = this.fullData.heading_option[i].correctAnswer;
                        const id = row.toString() + column.toString();
                        if (document.getElementById('check' + id)) {
                            document.getElementById('check' + id).setAttribute('checked', 'true');
                        }
                    }
                }
            }, 100);
            this.modalRef = this.modalService.open(this.matchTableDetail, data);
        }
        else if (id == '9' || id == '10') {
            this.fullData = data;
            this.quesId = id;
            this.modalRef = this.modalService.open(this.dropDownDetail, data);
            setTimeout(() => {
                for (let i = 0; i < this.fullData.answer.length; i++) {
                    for (let j = 0; j < this.fullData.answer[i].options.length; j++) {
                        if (this.fullData.answer[i].options[j].selected == 'true') {
                            // document.getElementById('dropdown' + i).setAttribute('innerHTML', this.fullData.answer[i].options[j].listOption);
                            document.getElementById('dropdown' + i).innerHTML = this.fullData.answer[i].options[j].listOption;
                        }
                    }
                }
            }, 500);
        }
        else if (id == '24') {
            this.fullData = data;
            this.quesId = id;
            this.modalRef = this.modalService.open(this.passage, data);
            setTimeout(() => {
                for (let i = 0; i < this.fullData.subQuestions.length; i++) {
                    if (this.fullData.subQuestions[i].question_type_id == 7) {
                        for (let j = 0; j < this.fullData.subQuestions[i].heading_option.length; j++) {
                            let index = i;
                            const row = this.fullData.subQuestions[i].heading_option[j].correctActive;
                            const column = this.fullData.subQuestions[i].heading_option[j].correctAnswer;
                            const final = index.toString() + row.toString() + column.toString();
                            if (document.getElementById('checkPassage' + final)) {
                                document.getElementById('checkPassage' + final).setAttribute('checked', 'true');
                            }
                        }
                    }
                }
            }, 100);
        }
        else if (['20', '21', '22', '55'].indexOf(id) > -1) {
            this.fullData = data;
            this.quesId = id;
            this.modalRef = this.modalService.open(this.textDetail, data);
        }
        else if (id == '28') {
            this.fullData = data;
            this.quesId = id;
            this.modalRef = this.modalService.open(this.highlightDetail, data);
        }
        else if (id == '40' || id == '41') {
            this.fullData = data;
            this.quesId = id;
            this.answerGraph = data.editor_answer;
            this.graphValue = parse(data.answer[0].correctAnswer);
            this.modalRef = this.modalService.open(this.graphDetail, { size: "lg" });
        }
        else if (id == '16') {
            this.sortIndex = [];
            this.fullData = data;
            this.quesId = id;
            // for (let j = 0; j < this.fullData.answer.length; j++) {
            //   if (this.fullData.answer[j].correctAnswer != '') {
            //     this.sortIndex[j].active = j;
            //   }
            // }
            // setTimeout( () => {
            //   for (let i = 0; i < this.fullData.options.length; i++) {
            //     document.getElementById('optionId' + i).innerHTML = this.fullData.answer[i].correctAnswer;
            //   }
            // } , 100);
            this.modalRef = this.modalService.open(this.matchOrderDetail, data);
        }
        this.clickEvent();
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
        this.clickEvent();
    }
    closeQuestion() {
        this.modalRef.close();
        this.fullData = '';
    }
    parseVal(value) {
        this.graphValue = parse(value[0].correctAnswer);
        return this.graphValue;
    }
    getEditorValue(event) {
        this.content = event;
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
        this.auth.removeSessionData('assignedForm');
    }
    showpre() {
        if (!this.showPreview) {
            setTimeout(() => {
                for (let i = 0; i < this.detailData.length; i++) {
                    // if (this.detailData[i].question_type_id != '24') {
                    //     // document.getElementById('question' + i).innerHTML = this.detailData[i].question;
                    //     document.getElementById('question' + i).innerHTML = this.detailData[i].question_type_id == '55' ?
                    //         this.convertMarkdownToHtml(this.detailData[i].question) : this.detailData[i].question;
                    // } else if (this.detailData[i].question_type_id == '24') {
                    //     document.getElementById('question' + i).innerHTML = this.detailData[i].editor_context;
                    // }
                }
                this.clickEvent();
                const questionNumber = this.auth.getSessionData('cfs_question_no') ?? '0';
                console.log(questionNumber, 'questionNumber');
                const id = 'cfs_nopreview-' + questionNumber;
                if (questionNumber != '' && document.getElementById(id)) {
                    setTimeout(() => {
                        document.getElementById(id).scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest',
                            inline: 'nearest'
                        });
                    }, 200);
                }
            }, 100);
        }
        else {
            setTimeout(() => {
                if (this.detailData && Array.isArray(this.detailData)) {
                    for (let i = 0; i < this.detailData.length; i++) {
                        if (this.detailData[i].question_type_id == 7) {
                            for (let j = 0; j < this.detailData[i].heading_option.length; j++) {
                                const index = i;
                                const row = this.detailData[i].heading_option[j].correctActive;
                                const column = this.detailData[i].heading_option[j].correctAnswer;
                                const id = index.toString() + row.toString() + column.toString();
                                if (document.getElementById('checkMulti' + id)) {
                                    document.getElementById('checkMulti' + id).setAttribute('checked', 'true');
                                }
                            }
                        }
                        else if (this.detailData[i].question_type_id == 24) {
                            for (let j = 0; j < this.detailData[i].subQuestions.length; j++) {
                                if (this.detailData[i].subQuestions[j].question_type_id == 7) {
                                    for (let k = 0; k < this.detailData[i].subQuestions[j].heading_option.length; k++) {
                                        const index = i;
                                        const id = j;
                                        const row = this.detailData[i].subQuestions[j].heading_option[k].correctActive;
                                        const column = this.detailData[i].subQuestions[j].heading_option[k].correctAnswer;
                                        const final = index.toString() + id.toString() + row.toString() + column.toString();
                                        if (document.getElementById('checkMultiPassage' + final)) {
                                            document.getElementById('checkMultiPassage' + final).setAttribute('checked', 'true');
                                        }
                                    }
                                }
                            }
                        }
                        else if (this.detailData[i].question_type_id == 9) {
                            for (let j = 0; j < this.detailData[i].answer.length; j++) {
                                for (let k = 0; k < this.detailData[i].answer[j].options.length; k++) {
                                    console.log(this.detailData[i].answer[j].options[k].selected, 'selected');
                                    if (this.detailData[i].answer[j].options[k].selected == 'true') {
                                        if (document.getElementById(i + 'dropdownPreview' + j)) {
                                            document.getElementById(i + 'dropdownPreview' + j).innerHTML = this.detailData[i].answer[j].options[k].listOption;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.clickEvent();
                const questionNumber = this.auth.getSessionData('cfs_question_no') ?? '0';
                const id = 'cfs-' + questionNumber;
                if (questionNumber != '' && document.getElementById(id)) {
                    setTimeout(() => {
                        document.getElementById(id).scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest',
                            inline: 'nearest'
                        });
                    }, 200);
                }
            }, 1000);
        }
    }
    convertMarkdownToHtml(markdown) {
        markdown = markdown.replace(/^'+|'+$/g, '');
        let html = markdown.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        html = html.replace(/\n/g, '<br>');
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
    static { this.ɵfac = function TextAssignmentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TextAssignmentComponent)(i0.ɵɵdirectiveInject(i1.CommonDataService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.CreatorService), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i5.FormBuilder), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i7.DomSanitizer), i0.ɵɵdirectiveInject(i8.NewsubjectService), i0.ɵɵdirectiveInject(i9.ConfigurationService), i0.ɵɵdirectiveInject(i10.CommonService), i0.ɵɵdirectiveInject(i11.ClassService), i0.ɵɵdirectiveInject(i12.ValidationService), i0.ɵɵdirectiveInject(i13.NgbModal)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TextAssignmentComponent, selectors: [["app-text-assignment"]], viewQuery: function TextAssignmentComponent_Query(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵviewQuery(TreeviewComponent, 5);
            i0.ɵɵviewQuery(TreeviewContentfolderComponent, 5);
            i0.ɵɵviewQuery(TreeviewComponent, 5);
            i0.ɵɵviewQuery(_c12, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.multiChoiceDetail = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.matchTableDetail = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropDownDetail = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textDetail = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.highlightDetail = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.matchOrderDetail = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteQuestion = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.passage = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.graphDetail = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignContentToClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeviewComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeviewCompoent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.child = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addBranchTemp = _t.first);
        } }, hostBindings: function TextAssignmentComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function TextAssignmentComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, i0.ɵɵresolveWindow);
        } }, decls: 23, vars: 1, consts: [["multiChoiceDetail", ""], ["matchTableDetail", ""], ["dropDownDetail", ""], ["matchOrder", ""], ["text", ""], ["highlight", ""], ["graphDetail", ""], ["passage", ""], ["deleteQuestion", ""], ["assignContentToClass", ""], ["assignTemplate", ""], ["addAssignment", "", "myInput", ""], ["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-md-5"], ["class", "text-uppercase", 4, "ngIf"], ["class", "font-weight-bold", "style", "font-size: 20px", 4, "ngIf"], [1, "text-muted"], [1, "text-danger"], ["class", "pdf-assign-btn col-md-7", 4, "ngIf"], [1, "col-sm-12"], [1, "card", "tab2-card"], ["class", "card-body tab2-card", 4, "ngIf"], ["class", "p-2", 4, "ngIf"], [4, "ngIf"], [1, "text-uppercase"], ["class", "color-primary", 4, "ngIf"], [1, "color-primary"], [1, "font-weight-bold", 2, "font-size", "20px"], [1, "pdf-assign-btn", "col-md-7"], ["class", "btn btn-primary pull-right ml-3", 3, "click", 4, "ngIf"], ["class", "btn btn-primary pull-right ml-3", 3, "disabled", "click", 4, "ngIf"], ["class", "pull-right", "src", "assets/images/pdf-icons/floppy-disk.png", "alt", "", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "pull-right", "mr-3", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-left", "fa-1x"], [1, "btn", "btn-primary", "pull-right", "ml-3", 3, "click"], [1, "btn", "btn-primary", "pull-right", "ml-3", 3, "click", "disabled"], ["src", "assets/images/pdf-icons/floppy-disk.png", "alt", "", 1, "pull-right", 3, "click"], [1, "card-body", "tab2-card"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "col-md-12", "d-flex", "mb-4"], [1, "col-sm-12", "col-md-4", "px-0"], [1, "image-container-left"], ["src", "assets/images/ristaschool/assignment.png", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/assessment.png", "alt", "", 4, "ngIf"], ["alt", "", 3, "src", 4, "ngIf"], ["class", "fa fa-times close-button", "title", "close", 3, "click", 4, "ngIf"], [1, "profileUrl"], ["type", "file", "accept", ".png, .jpeg, .jpg", 1, "custom-upload-input", 2, "display", "none", 3, "change"], ["type", "button", "title", "upload Image", 1, "btn", "btn-light", "btn-circle", "border-rista", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-upload", "fa-2x", "mb-3"], [1, "container", "col-sm-12", "col-md-8"], [1, "col-md-4", "form-group"], ["formControlName", "created", "id", "validationCustom1", "type", "text", "placeholder", "Created", "required", "", "readonly", "", 1, "form-control"], [1, "col-md-8", "form-group"], ["formControlName", "resourceName", "id", "validationCustom12", "placeholder", "Resource Name*", "required", "", "type", "text", 1, "form-control"], ["class", "error", 4, "ngIf"], ["bindLabel", "grade_name", "bindValue", "grade_id", "formControlName", "grade", "placeholder", "Select Grade*", "typeToSearchText", "", "multiple", "true", 3, "items"], ["bindLabel", "subject_name", "bindValue", "subject_id", "formControlName", "subject", "placeholder", "Select Subject*", "typeToSearchText", "", "multiple", "true", 3, "items"], [1, "form-group", "col-md-4"], ["formControlName", "access", 1, "form-control"], ["value", "", "hidden", "", "selected", ""], ["value", "1", 4, "ngIf"], ["value", "2", 4, "ngIf"], ["value", "4", 4, "ngIf"], [1, "row", "d-flex", "align-items-center", "mb-3"], [1, "col-md-4", "mb-0", "form-group"], ["formControlName", "content_duration", "placeholder", "Content Duration (Minutes)", "type", "text", "maxlength", "5", 1, "form-control", 3, "keypress"], [3, "treeviewHeight", "content_id", "type", "selectedbatch"], [1, "form-group", "col-md-12"], ["name", "", "id", "", "placeholder", "Enter Description", "formControlName", "description", 1, "form-control", 2, "width", "100%", "height", "100px"], [1, "col-md-6"], ["formControlName", "tag", "theme", "bootstrap", 3, "secondaryPlaceholder", "placeholder", "editable", "clearOnBlur", "addOnPaste", "addOnBlur"], [1, "col-12"], [3, "arrayValue"], [1, "col-md-12", "mt-5"], ["class", "btn btn-primary pull-right", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary mr-2 pull-right", 3, "click", 4, "ngIf"], ["src", "assets/images/ristaschool/assignment.png", "alt", ""], ["src", "assets/images/ristaschool/assessment.png", "alt", ""], ["alt", "", 3, "src"], ["title", "close", 1, "fa", "fa-times", "close-button", 3, "click"], [1, "error"], ["value", "1"], ["value", "2"], ["value", "4"], [1, "btn", "btn-primary", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-right", "fa-1x"], [1, "btn", "btn-outline-primary", "mr-2", "pull-right", 3, "click"], [1, "p-2"], [3, "emitEditorValue", "editorPatchValue", "height"], ["class", "row", 4, "ngIf"], ["title", "Scroll To Top", "aria-hidden", "true", 1, "cursor", "color-primary", "fa", "fa-3x", "fa-chevron-circle-up", "scroll-to-top", 3, "click", "ngClass"], [1, "col-12", "mt-5", "mb-3", "justify-content-between", "d-flex"], [1, "letter"], [1, "btn", "btn-primary", 3, "click", "ngClass"], ["class", "col-12", 4, "ngIf"], ["class", "col-12 mt-2", 4, "ngIf"], ["class", "col-12 d-flex mt-4 p-2 question-view", 3, "id", 4, "ngFor", "ngForOf"], [1, "col-12", "d-flex", "mt-4", "p-2", "question-view", 3, "id"], [1, "col-md-10", "d-flex", "align-self-center", "pt-3"], ["class", "letter ml-2", 3, "innerHTML", 4, "ngIf"], [1, "col-md-2", "cursor", "d-flex", "justify-content-center", "align-self-center"], ["alt", "", "src", "assets/images/pdf-icons/Icon awesome-pencil-alt@2x.png", "title", "Edit-Question", 1, "view-detail-icon1", "pull-right", "mr-2", 3, "click"], ["alt", "", "src", "assets/images/ristaschool/eye.png", "title", "Question-Preview", 1, "view-detail-icon", "pull-right", "mr-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash", "float-right", "delete-detail-icon", "letter", "fa-2x", 2, "cursor", "pointer", 3, "click"], [1, "letter", "ml-2", 3, "innerHTML"], [1, "col-12", "mt-2"], ["class", "col-12 card", 3, "id", 4, "ngFor", "ngForOf"], [1, "col-12", "card", 3, "id"], [1, "card-body", "pb-4"], [1, "row", "mt-2", "justify-content-between"], [1, "px-2", 2, "width", "5% !important"], [1, "mb-0", "question-no"], [1, "cursor", "d-flex", "justify-content-center", 2, "width", "15%"], [1, "mt-3", "align-self-center", "col-12"], ["class", "editor_bullet", 4, "ngIf"], ["class", "mt-3 editor_bullet col-md-12 px-0", 4, "ngIf"], ["class", "overflow-auto p-3 editor_bullet", "style", "max-height: 40vh; border: 3px solid #e6baea !important;border-radius: 8px", 4, "ngIf"], ["class", "col-12 mt-5 table-flexible", 4, "ngIf"], ["class", "col-8 mt-5", 4, "ngIf"], ["class", "col-12 mt-3 editor_bullet", 4, "ngIf"], ["class", "mt-3 editor_bullet col-md-12", 4, "ngIf"], ["class", "col-12 mt-3", 4, "ngIf"], ["class", "col-12 mt-3 d-flex", 4, "ngIf"], ["class", "col-md-12 mt-4 d-flex", 4, "ngIf"], [1, "editor_bullet"], [1, "mb-0", "overflow-auto", 3, "innerHTML"], [1, "mt-3", "editor_bullet", "col-md-12", "px-0"], [1, "essay-box", "m-0"], [1, "overflow-auto", "p-3", "editor_bullet", 2, "max-height", "40vh", "border", "3px solid #e6baea !important", "border-radius", "8px"], [3, "innerHTML"], ["class", "mb-2 multiSelectCard d-flex align-items-center p-2", 4, "ngFor", "ngForOf"], [1, "mb-2", "multiSelectCard", "d-flex", "align-items-center", "p-2"], [1, "multichoice-option1", "mr-2", 3, "ngClass"], [1, "ml-2", "paragraph-space", 3, "innerHTML"], [1, "col-12", "mt-5", "table-flexible"], [1, "table", "table-bordered", "text-center", "div-disable"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["type", "radio", 1, "radio_animated", 3, "checked", "name"], ["type", "checkbox", 3, "id"], [1, "col-8", "mt-5"], ["class", "col-md-12 mb-3 d-flex", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-3", "d-flex"], [1, "question-no-small"], [1, "mb-0"], [1, "col-md-11"], ["data-toggle", "dropdown", 1, "col-md-12", "innerhtml-margin-clear", "p-2", "dropdown-border", "dropdown-toggle", "d-flex", "justify-content-between", 3, "id"], [1, "col-md-11", "dropdown-menu"], [1, "dropdown-item", "dropdown-link"], ["class", "dropdown-item dropdown-link innerhtml-margin-clear", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "dropdown-item", "dropdown-link", "innerhtml-margin-clear", 3, "innerHTML"], ["class", "mb-3 d-flex", 4, "ngFor", "ngForOf"], [1, "mb-3", "d-flex"], [1, "form-span", "ml-3", 3, "innerHTML"], ["class", "col-12 px-0 my-3 editor_bullet", 4, "ngFor", "ngForOf"], [1, "col-12", "px-0", "my-3", "editor_bullet"], [1, "col-12", "px-0"], [1, "col-12", "mt-3", "editor_bullet"], [1, "mt-3", "editor_bullet", "col-md-12"], [1, "col-12", "mt-3"], [3, "editMode", "editPatchValue", "graphId", "questionType"], ["class", "col-md-12 mt-4 editor_bullet", 4, "ngIf"], [1, "col-md-12", "mt-4", "editor_bullet"], [1, "graphEditorDiv", 3, "innerHTML"], [1, "col-12", "mt-3", "d-flex"], [1, "col-6"], ["class", "text-center", 4, "ngIf"], ["class", "col-12 form-group", 4, "ngFor", "ngForOf"], [1, "text-center"], [1, "col-12", "form-group"], [1, "input-group", "mb-3", "mt-3", "inputMenu"], [1, "input-group-prepend"], [1, "input-group-text"], ["src", "assets/images/pdf-icons/equal@2x.png", 1, "img-fluid", 2, "width", "25px", "height", "25px"], [1, "w-75", "p-3", "border", "border-dark", 3, "innerHTML"], ["class", "my-3", 4, "ngFor", "ngForOf"], [1, "my-3"], [1, "col-12", "mt-3", 3, "innerHTML"], ["class", "mt-2", 4, "ngIf"], ["class", "col-12 table-flexible", 4, "ngIf"], ["class", "col-7 mt-2", 4, "ngIf"], ["class", "col-md-12 mt-2 form-span editor_bullet", 4, "ngIf"], [1, "card", "explanation"], [1, "card-body"], [1, "col-4", "mb-3"], [1, "m-0"], [1, "col-4"], [1, "mt-2"], [1, "ml-3", "paragraph-space", 3, "innerHTML"], [1, "col-12", "table-flexible"], [1, "table", "table-bordered", "text-center", "col-12", "mt-2"], ["class", "innerhtml-margin-clear", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "innerhtml-margin-clear", 3, "innerHTML"], [1, "col-7", "mt-2"], ["class", "col-12 my-3", 4, "ngFor", "ngForOf"], [1, "col-12", "my-3"], [1, "form-span", "editor_bullet"], [1, "col-md-12", "mt-2", "form-span", "editor_bullet"], [1, "col-md-12", "mt-4", "d-flex"], [1, "col-md-12", "px-0"], [1, "explanation", "innerhtml-margin-clear", 3, "innerHTML"], [1, "modal-header"], [1, "modal-title", "letter"], [1, "modal-body"], ["class", "mb-2 multiSelectCard d-flex p-2", 4, "ngFor", "ngForOf"], [1, "modal-footer", "d-flex", "justify-content-right"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "mb-2", "multiSelectCard", "d-flex", "p-2"], [1, "ml-3", "mt-2", "paragraph-space", 3, "id"], [1, "col-12", "table-flexible", "px-0"], ["class", "innerhtml-margin-clear", 3, "id", 4, "ngFor", "ngForOf"], [1, "innerhtml-margin-clear", 3, "id"], ["class", "col-12 px-0", 4, "ngIf"], [1, "col-md-1", "question-no-small"], ["data-toggle", "dropdown", 1, "col-md-12", "bg-white", "innerhtml-margin-clear", "p-2", "dropdown-border", "dropdown-toggle", "d-flex", "justify-content-between", 3, "id"], [1, "col-md-12", "dropdown-menu"], [1, "dropdown-item", "dropdown-link", "overflow-auto"], ["class", "dropdown-item overflow-auto dropdown-link innerhtml-margin-clear", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "dropdown-item", "overflow-auto", "dropdown-link", "innerhtml-margin-clear", 3, "innerHTML"], ["class", "col-md-12 px-0 mb-3 d-flex justify-content-around", 4, "ngFor", "ngForOf"], [1, "col-md-12", "px-0", "mb-3", "d-flex", "justify-content-around"], [1, "col-md-10", "overflow-auto", "form-span", 3, "innerHTML"], [1, "col-12", "mt-2", "px-0"], [1, "col-12", "form-group", "mt-2", "px-0"], ["cdkDrag", "", "class", "input-group mb-3 mt-3 inputMenu", 3, "cdkDragDisabled", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "input-group", "mb-3", "mt-3", "inputMenu", 3, "cdkDragDisabled"], ["alt", "Pdf", "src", "assets/images/pdf-icons/equal@2x.png", 1, "img-fluid", 2, "width", "25px", "height", "25px"], [1, "w-75", "px-3", "pt-4", "pb-3", "border", "border-dark", 3, "innerHTML"], [3, "innerHTML", 4, "ngIf"], ["class", "col-12 px-0 mt-2", 4, "ngIf"], [1, "col-12", "px-0", "mt-2"], ["class", "modal-title letter", 4, "ngIf"], [1, "graphEditorDiv"], [1, "mb-0", 3, "innerHTML"], ["class", "mb-5", 4, "ngFor", "ngForOf"], [1, "mb-5"], [1, "question-no-small", "mb-3", 2, "background-color", "#bc46c7"], [1, "mb-0", 2, "color", "white"], [1, "mb-3", 3, "innerHTML"], ["class", "table-flexible", 4, "ngIf"], ["class", "col-10 justify-content-end", 4, "ngIf"], ["class", "mb-2 multiSelectCard question-page d-flex p-2", 4, "ngFor", "ngForOf"], [1, "mb-2", "multiSelectCard", "question-page", "d-flex", "p-2"], [1, "mt-1", "ml-2", "paragraph-space", 3, "innerHTML"], [1, "table-flexible"], [1, "col-10", "justify-content-end"], ["class", "col-12 px-0 my-3", 4, "ngFor", "ngForOf"], [1, "col-12", "px-0", "my-3"], [1, "form-span"], [1, "modal-body", "d-flex", "justify-content-right"], [1, "modal-footer"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "contenttext", "text-center", "mb-0"], [1, "col-md-12"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [3, "closePopUp", "isEssay", "classData", "contentDetails"]], template: function TextAssignmentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TextAssignmentComponent_div_0_Template, 17, 6, "div", 12)(1, TextAssignmentComponent_ng_template_1_Template, 9, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, TextAssignmentComponent_ng_template_3_Template, 16, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(5, TextAssignmentComponent_ng_template_5_Template, 9, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(7, TextAssignmentComponent_ng_template_7_Template, 21, 9, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(9, TextAssignmentComponent_ng_template_9_Template, 15, 5, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(11, TextAssignmentComponent_ng_template_11_Template, 18, 7, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(13, TextAssignmentComponent_ng_template_13_Template, 19, 8, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(15, TextAssignmentComponent_ng_template_15_Template, 7, 2, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor)(17, TextAssignmentComponent_ng_template_17_Template, 12, 0, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor)(19, TextAssignmentComponent_ng_template_19_Template, 15, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor)(21, TextAssignmentComponent_ng_template_21_Template, 1, 3, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showPage);
        } }, dependencies: [i14.NgClass, i14.NgForOf, i14.NgIf, i5.ɵNgNoValidate, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.DefaultValueAccessor, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.MaxLengthValidator, i5.FormGroupDirective, i5.FormControlName, i15.NgSelectComponent, i16.TagInputComponent, i17.CdkDrag, i18.GraphComponentComponent, i19.TinyMiceComponent, i20.ConfirmContentAssignComponent, i21.TreeviewContentfolderComponent, i22.OtherLinkComponent, i23.SanitizeHtmlPipe], styles: [".custom-upload-input[_ngcontent-%COMP%] {\n  color: transparent;\n}\n\n.custom-upload-input[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-upload-input[_ngcontent-%COMP%]::before {\n  content: 'Choose files';\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.custom-upload-input[_ngcontent-%COMP%]:hover::before {\n  border-color: black;\n}\n\n.custom-upload-input[_ngcontent-%COMP%]:active {\n  outline: 0;\n}\n\n.custom-upload-input[_ngcontent-%COMP%]:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\n.telemedicineaAddAvailability[_ngcontent-%COMP%] {\n  .buttonStyle {\n    width: 109px;\n    border-radius: 3px;\n    background: forestgreen;\n    color: white;\n  }\n\n  .timer {\n    margin-top: -31px;\n    width: 134px;\n  }\n\n\n  .BtnNonSelected {\n    background: white;\n    color: deepskyblue;\n    width: 115px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .BtnSelected {\n    background: #007bff;\n    color: white;\n    width: 115px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .badge {\n    width: 115px;\n    font-size: 14px;\n    height: 28px;\n    padding: 7px;\n  }\n}\n\n.scroll-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 45px;\n  right: 20px;\n  opacity: 0;\n  transition: all .2s ease-in-out;\n}\n\n.show-scroll[_ngcontent-%COMP%] {\n  opacity: 1;\n}"] }); }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TextAssignmentComponent, factory: TextAssignmentComponent.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextAssignmentComponent, [{
        type: Injectable
    }, {
        type: Component,
        args: [{ selector: 'app-text-assignment', template: "<div class=\"container-fluid\" *ngIf=\"showPage\">\n    <div class=\"row\">\n        <div class=\"col-md-5\">\n            <h4 class=\"text-uppercase\" *ngIf=\"!openContent\">{{type + ' ' + textType}} {{type == 'edit' ? '-' : ''}}   <span *ngIf=\"type == 'edit'\" class=\"color-primary\">{{contentName}}</span></h4>\n            <h4 *ngIf=\"openContent\" class=\"font-weight-bold\" style=\"font-size: 20px\">Add Description</h4>\n            <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n        </div>\n        <div class=\"pdf-assign-btn col-md-7\" *ngIf=\"openContent\">\n            <button class=\"btn btn-primary pull-right ml-3\" *ngIf=\"!isSingleQnsWithFeedbackType\" (click)=\"assignNext('edit', 'addQuestion')\">Add Questions</button>\n            <button *ngIf=\"type == 'edit' || type != 'edit'\" (click)=\"assign(type != 'edit' ? 'add' : 'edit')\" [disabled]=\"detailData.length == 0\" class=\"btn btn-primary pull-right ml-3\">Publish</button>\n            <img *ngIf=\"type == 'edit' || type != 'edit'\" class=\"pull-right\" (click)=\"draft(type != 'edit' ? 'add' : 'edit')\" src=\"assets/images/pdf-icons/floppy-disk.png\" alt=\"\">\n            <button class=\"btn btn-primary pull-right mr-3\" (click)=\"assignNext('edit', 'backButton')\"><i class=\"fa fa-long-arrow-left fa-1x\" aria-hidden=\"true\"></i> Back</button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-body tab2-card\" *ngIf=\"!openContent\">\n                    <form [formGroup]=\"assignmentform\" class=\"needs-validation user-add\">\n                        <div class=\"col-md-12 d-flex mb-4\">\n                            <div class=\"col-sm-12 col-md-4 px-0\">\n                                <div class=\"image-container-left\">\n                                    <img *ngIf=\"(imagepath == undefined || imagepath?.length == 0) && this.textType == 'assignment'\" src=\"assets/images/ristaschool/assignment.png\" alt=\"\">\n                                    <img *ngIf=\"(imagepath == undefined || imagepath?.length == 0) && this.textType == 'assessment'\" src=\"assets/images/ristaschool/assessment.png\" alt=\"\">\n                                    <img  *ngIf=\"imagepath != undefined && imagepath?.length != 0\"  [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + imagepath)\" alt=\"\">\n                                    <i *ngIf=\"imagepath != undefined && imagepath?.length != 0\" class=\"fa fa-times close-button\" title=\"close\" (click)=\"deleteImg()\" ></i>\n                                    <div class=\"profileUrl\">\n                                        <input style=\"display: none\" type=\"file\" class=\"custom-upload-input\" (change)=\"encodeImageFileAsURL($event)\" #addAssignment #myInput accept=\".png, .jpeg, .jpg\">\n                                        <button type=\"button\" class=\"btn btn-light btn-circle border-rista\" title=\"upload Image\" (click)=\"addAssignment.click()\"> <i class=\"fa fa-upload fa-2x mb-3\" aria-hidden=\"true\"></i> </button>\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"container col-sm-12 col-md-8\">\n                                <h5>Created By</h5>\n                                <div class=\"row\">\n                                    <div class=\"col-md-4 form-group\">\n                                        <input class=\"form-control\" formControlName=\"created\" id=\"validationCustom1\"\n                                               type=\"text\" placeholder=\"Created\" required readonly>\n                                    </div>\n                                    <div class=\"col-md-8 form-group\">\n                                        <input class=\"form-control\" formControlName=\"resourceName\" id=\"validationCustom12\"\n                                               placeholder=\"Resource Name*\" required type=\"text\">\n                                        <em class=\"error\" *ngIf=\"!assignmentform.get('resourceName').valid && (assignmentform.get('resourceName').dirty || assignmentform.get('resourceName').touched)\">Resource Name is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div  class=\"col-md-4 form-group\">\n                                        <ng-select [items]=\"gradeData\"\n                                                   bindLabel=\"grade_name\"\n                                                   bindValue=\"grade_id\"\n                                                   formControlName=\"grade\"\n                                                   placeholder=\"Select Grade*\"\n                                                   typeToSearchText=\"\"\n                                                   multiple=\"true\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\" *ngIf=\"!assignmentform.get('grade').valid && (assignmentform.get('grade').dirty || assignmentform.get('grade').touched)\">Grade is required</em>\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                        <ng-select [items]=\"subjectData\"\n                                                   bindLabel=\"subject_name\"\n                                                   bindValue=\"subject_id\"\n                                                   formControlName=\"subject\"\n                                                   placeholder=\"Select Subject*\"\n                                                   typeToSearchText=\"\"\n                                                   multiple=\"true\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\" *ngIf=\"!assignmentform.get('subject').valid && (assignmentform.get('subject').dirty || assignmentform.get('subject').touched)\">Subject is required</em>\n                                    </div>\n                                    <div class=\"form-group col-md-4\">\n                                        <select class=\"form-control\" formControlName=\"access\">\n                                            <option value=\"\" hidden selected>Please Choose....</option>\n                                            <option *ngIf=\"roleid != '6'\" value=\"1\">Access to all within Org</option>\n                                            <option *ngIf=\"roleid != '6'\" value=\"2\">Access only for you</option>\n                                            <option *ngIf=\"roleid == '6'\" value=\"4\">Access within corporate</option>\n                                        </select>\n                                        <em class=\"error\" *ngIf=\"!assignmentform.get('access').valid && (assignmentform.get('access').dirty || assignmentform.get('access').touched)\">Access is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row d-flex align-items-center mb-3\">\n                                    <div class=\"col-md-4 mb-0 form-group\">\n                                        <input class=\"form-control\" formControlName=\"content_duration\" (keypress)=\"validationService.numberOnlyValidate($event)\"\n                                               placeholder=\"Content Duration (Minutes)\" type=\"text\" maxlength=\"5\">\n                                        <em class=\"error\" *ngIf=\"!assignmentform.get('content_duration').valid && (assignmentform.get('content_duration').dirty || assignmentform.get('content_duration').touched)\">Content Duration is required</em>\n                                    </div>\n\n                                    <app-treeview-contentfolder [treeviewHeight]=\"250\"\n                                                                [content_id]=\"type == 'add' ?  '' : editData?.content_id\"\n                                                                [type]=\"type\" [selectedbatch]=\"batchId\">\n                                    </app-treeview-contentfolder>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"form-group col-md-12\">\n                                        <textarea class=\"form-control\" name=\"\" id=\"\" placeholder=\"Enter Description\" formControlName=\"description\" style=\"width: 100%; height: 100px\"></textarea>\n                                        <em class=\"error\" *ngIf=\"!assignmentform.get('description').valid && (assignmentform.get('description').dirty || assignmentform.get('description').touched)\">Description is required</em>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <tag-input formControlName=\"tag\"\n                                                   [secondaryPlaceholder]=\"'Enter tags'\"\n                                                   [placeholder]=\"'Add tags'\"\n                                                   [editable]='true'\n                                                   [clearOnBlur]=\"true\"\n                                                   [addOnPaste]=\"true\"\n                                                   [addOnBlur]=\"true\"\n                                                   theme='bootstrap'\n                                        ></tag-input>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-12\">\n                            <app-other-link [arrayValue]=\"resourceArray\"></app-other-link>\n                        </div>\n                    </form>\n                    <div class=\"col-md-12 mt-5\">\n                        <button *ngIf=\"type == 'add' || type == 'edit'\" class=\"btn btn-primary pull-right\" (click)=\"assignNext(type, 'nextButton')\">Next <i class=\"fa fa-long-arrow-right fa-1x\" aria-hidden=\"true\"></i></button>\n                        <button *ngIf=\"type == 'edit' && detailData?.length != 0\" class=\"btn btn-outline-primary mr-2 pull-right\" (click)=\"saveAndExit()\">Save</button>\n                    </div>\n                </div>\n                <div class=\"p-2\" *ngIf=\"openContent\">\n                    <app-tiny-mice (emitEditorValue)=\"getEditorValue($event)\"\n                                   [editorPatchValue]=\"editorVal != '' ? editorVal : false\"\n                                   [height]=\"380\"\n                    ></app-tiny-mice>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"openContent\">\n        <div class=\"row\" *ngIf=\"detailData.length != 0\">\n            <div class=\"col-12 mt-5 mb-3 justify-content-between d-flex\">\n                <h4 class=\"letter\">Questions & Answer</h4>\n                <button class=\"btn btn-primary\" [ngClass]=\"{'selectColor' : showPreview}\" (click)=\"showPreview = !showPreview;showpre()\">{{!showPreview ? 'Show' : 'Hide'}} Preview</button>\n            </div>\n            <div *ngIf=\"!showPreview\" class=\"col-12\">\n                <div id=\"cfs_nopreview-{{i + 1}}\" *ngFor=\"let list of detailData; let i = index\" class=\"col-12 d-flex mt-4 p-2 question-view\">\n                    <div class=\"col-md-10 d-flex align-self-center pt-3\">\n                        <span>{{i+1}}. </span>\n                        <h6 *ngIf=\"list.question_type_id != '24' && list.question_type_id != '55'\" class=\"letter ml-2\" [innerHTML]=\"list.question | sanitizeHtml\"></h6>\n                        <h6 *ngIf=\"list.question_type_id == '24' && list.subQuestions[0]?.passage && list.subQuestions[0]?.passage != ''\"\n                            class=\"letter ml-2\" [innerHTML]=\"list.subQuestions[0]?.passage | sanitizeHtml\"></h6>\n                        <h6 *ngIf=\"list.question_type_id == '55'\" class=\"letter ml-2\" [innerHTML]=\"convertMarkdownToHtml(list.question)\"></h6>\n                    </div>\n                    <div class=\"col-md-2 cursor d-flex justify-content-center align-self-center\">\n                        <img (click)=\"editdetail(list, i)\" alt=\"\" class=\"view-detail-icon1 pull-right mr-2\" src=\"assets/images/pdf-icons/Icon awesome-pencil-alt@2x.png\" title=\"Edit-Question\">\n                        <img (click)=\"viewdetail(list.question_type_id, list)\" alt=\"\" class=\"view-detail-icon pull-right mr-2\" src=\"assets/images/ristaschool/eye.png\" title=\"Question-Preview\">\n                        <span><i class=\"fa fa-trash float-right delete-detail-icon letter fa-2x\" aria-hidden=\"true\" (click)=\"deleteContent(list.question_id, list)\" style=\"cursor:pointer\"></i></span>\n                    </div>\n                </div>\n<!--                <div class=\"container\">-->\n<!--                    <div class=\"col-12 text-right\">-->\n<!--                        <pagination-controls class=\"pagination1\" (pageChange)=\"onPageChange($event)\"-->\n<!--                                             previousLabel=\"Previous\"-->\n<!--                                             nextLabel=\"Next\"-->\n<!--                                             autoHide=\"true\"-->\n<!--                                             maxSize=\"8\"-->\n<!--                        ></pagination-controls>-->\n<!--                    </div>-->\n<!--                </div>-->\n            </div>\n            <div *ngIf=\"showPreview\" class=\"col-12 mt-2\">\n                <div id=\"cfs-{{i + 1}}\" *ngFor=\"let list of detailData; let i = index\" class=\"col-12 card\">\n                    <div class=\"card-body pb-4\">\n                        <div class=\"row mt-2 justify-content-between\">\n                            <div class=\"px-2\" style=\"width: 5% !important;\">\n                                <h5 class=\"mb-0 question-no\">{{i + 1}}</h5>\n                            </div>\n\n                            <div class=\"cursor d-flex justify-content-center\" style=\"width: 15%\">\n                                <img (click)=\"editdetail(list, i)\" alt=\"\" class=\"view-detail-icon1 pull-right mr-2\" src=\"assets/images/pdf-icons/Icon awesome-pencil-alt@2x.png\" title=\"Edit-Question\">\n                                <img (click)=\"viewdetail(list.question_type_id, list)\" alt=\"\" class=\"view-detail-icon pull-right mr-2\" src=\"assets/images/ristaschool/eye.png\" title=\"Question-Preview\">\n                                <span><i class=\"fa fa-trash float-right delete-detail-icon letter fa-2x\" aria-hidden=\"true\" (click)=\"deleteContent(list.question_id, list)\" style=\"cursor:pointer\"></i></span>\n                            </div>\n                        </div>\n\n                        <div class=\"mt-3 align-self-center col-12\">\n                            <div class=\"editor_bullet\" *ngIf=\"list.question_type_id != 24 && list.question_type_id != 55\"><span [innerHTML]=\"list.question | sanitizeHtml\" class=\"mb-0 overflow-auto\"></span></div>\n                            <div class=\"mt-3 editor_bullet col-md-12 px-0\" *ngIf=\"list.question_type_id == 55\">\n                                <div class=\"essay-box m-0\">\n                                    <h2>Essay Prompt</h2>\n                                    <p>\n                                        <span [innerHTML]=\"convertMarkdownToHtml(list.question)\" class=\"mb-0 overflow-auto\"></span>\n                                    </p>\n                                </div>\n                            </div>\n                            <div class=\"overflow-auto p-3 editor_bullet\" style=\"max-height: 40vh; border: 3px solid #e6baea !important;border-radius: 8px\"\n                                 *ngIf=\"list.question_type_id == 24 && list.subQuestions[0]?.passage != ''\"><span [innerHTML]=\"list.subQuestions[0]?.passage | sanitizeHtml\"></span></div>\n                        </div>\n\n                        <!--                    ////multiple choice preview-->\n                        <div class=\"col-12 mt-2\" *ngIf=\"list.question_type_id == 1 || list.question_type_id == 2\">\n                            <div *ngFor=\"let item of list.answer; let j = index\" class=\"mb-2 multiSelectCard d-flex align-items-center p-2\">\n                                <!-- [ngClass]=\"{'question-page-selected' : item.correctActive === 1}\" -->\n                                <span [ngClass]=\"{'selectColor' : item.correctActive === 1}\" class=\"multichoice-option1 mr-2\">{{((j+1) + 9).toString(36).toUpperCase()}}</span>\n                                <span class=\"ml-2 paragraph-space\" [innerHTML]=\"list.options[j].options  | sanitizeHtml\"></span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"list.question_type_id == 5 || list.question_type_id == 7\" class=\"col-12 mt-5 table-flexible\">\n                            <table class=\"table table-bordered text-center div-disable\">\n                                <thead>\n                                <tr>\n                                    <th>Questions</th>\n                                    <th *ngFor=\"let item of list.answer; let j=index\" [innerHTML]=\"item | sanitizeHtml\"></th>\n                                </tr>\n                                </thead>\n                                <tbody *ngIf=\"list.question_type_id == 5\">\n                                <tr *ngFor=\"let item of list.heading_option; let j=index\">\n                                    <td [innerHTML]=\"list.options[j].options | sanitizeHtml\"></td>\n                                    <td *ngFor=\"let answer of list.answer; let k=index\">\n                                        <input [checked]=\"item.correctActive == k\" class=\"radio_animated\" name=\"{{i}}choose{{j}}\" type=\"radio\">\n                                    </td>\n                                </tr>\n                                </tbody>\n                                <tbody *ngIf=\"list.question_type_id == 7\">\n                                <tr *ngFor=\"let item of list.options; let j=index\">\n                                    <td [innerHTML]=\"item.options | sanitizeHtml\"></td>\n                                    <td *ngFor=\"let chk of list.answer; let k=index\">\n                                        <input id=\"checkMulti{{i}}{{j}}{{k}}\" type=\"checkbox\">\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"col-8 mt-5\" *ngIf=\"list.question_type_id == 9\">\n                            <div *ngFor=\"let item of list.answer; let j = index\" class=\"col-md-12 mb-3 d-flex\">\n                                <div class=\"question-no-small\">\n                                    <h6 class=\"mb-0\">{{j+1}}</h6>\n                                </div>\n                                <div class=\"col-md-11\">\n                                    <div class=\"col-md-12 innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\" data-toggle=\"dropdown\" id=\"{{i}}dropdownPreview{{j}}\"></div>\n                                    <div class=\"col-md-11 dropdown-menu\">\n                                        <span class=\"dropdown-item dropdown-link\">Select Answer</span>\n                                        <span *ngFor=\"let option of item.options; let k = index\" [innerHTML]=\"option.listOption | sanitizeHtml\" class=\"dropdown-item dropdown-link innerhtml-margin-clear\"></span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-8 mt-5\" *ngIf=\"list.question_type_id == 10\">\n                            <div *ngFor=\"let item of list.answer; let j = index\" class=\"mb-3 d-flex\">\n                                <div class=\"question-no-small\">\n                                    <h6 class=\"mb-0\">{{j+1}}</h6>\n                                </div>\n                                <span [innerHTML]=\"item.options[0].value  | sanitizeHtml\" class=\"form-span ml-3\"></span>\n                            </div>\n                        </div>\n                        <div class=\"col-12\" *ngIf=\"['20'].indexOf(list.question_type_id) > -1\">\n                            <div class=\"col-12 px-0 my-3 editor_bullet\" *ngFor=\"let answer of list.answer; let i = index\">\n                                <label class=\"col-12 px-0\"><b>Correct Answer {{i + 1}}</b></label>\n                                <span [innerHTML]=\"answer.correctAnswer | sanitizeHtml\"></span>\n                            </div>\n                        </div>\n                        <div class=\"col-12 mt-3 editor_bullet\" *ngIf=\"['21', '22'].indexOf(list.question_type_id) > -1\">\n                            <span [innerHTML]=\"list.answer[0].correctAnswer | sanitizeHtml\"></span>\n                        </div>\n                        <div class=\"mt-3 editor_bullet col-md-12\" *ngIf=\"list.question_type_id == 55\">\n                            <div class=\"essay-box m-0\">\n                                <h2>Sample Essay</h2>\n                                <p>\n                                    <span [innerHTML]=\"convertMarkdownToHtml(list.answer[0].correctAnswer)\" class=\"mb-0 overflow-auto\"></span>\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"col-12 mt-3 editor_bullet\" *ngIf=\"list.question_type_id == 28\">\n                            <span [innerHTML]=\"list.answer[0].correctAnswer | sanitizeHtml\"></span>\n                        </div>\n                        <div *ngIf=\"list.question_type_id == 40 || list.question_type_id == 41\" class=\"col-12 mt-3\">\n                            <app-graph-component [editMode]=\"false\" [editPatchValue]=\"parseVal(list.answer)\" [graphId]=\"'preview'+i\" [questionType]=\"list.question_type_id\"></app-graph-component>\n                            <div *ngIf=\"list.editor_answer != ''\" class=\"col-md-12 mt-4 editor_bullet\">\n                                <h4 [innerHTML]=\"list.editor_answer | sanitizeHtml\" class=\"graphEditorDiv\"></h4>\n                            </div>\n                        </div>\n                        <div *ngIf=\"list.question_type_id == 16\" class=\"col-12 mt-3 d-flex\">\n                            <div class=\"col-6\">\n                                <h6 *ngIf=\"list.source != ''\" class=\"text-center\"><b>{{list.source}}</b></h6>\n                                <h6 *ngIf=\"list.source == ''\" class=\"text-center\"><b>Source</b></h6>\n                                <!--                            <span [innerHTML]=\"option.options[k]\" *ngFor=\"let option of list.options; let k = index\"></span>-->\n                                <div *ngFor=\"let option of list.options; let k = index\" class=\"col-12 form-group\">\n                                    <div class=\"input-group mb-3 mt-3 inputMenu\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\"><img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\" style=\"width: 25px; height: 25px;\"></span>\n                                        </div>\n                                        <div [innerHTML]=\"option.options | sanitizeHtml\"  class=\"w-75 p-3 border border-dark\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-6\">\n                                <h6 *ngIf=\"list.target != ''\" class=\"text-center\"><b>{{list.target}}</b></h6>\n                                <h6 *ngIf=\"list.target == ''\" class=\"text-center\"><b>Target</b></h6>\n                                <!--                            <span [innerHTML]=\"ans.correctAnswer[k]\" *ngFor=\"let ans of list.answer; let k = index\" class=\"\"></span>-->\n                                <div *ngFor=\"let ans of list.answer; let k = index\" class=\"col-12 form-group\">\n                                    <div class=\"input-group mb-3 mt-3 inputMenu\">\n                                        <div class=\"input-group-prepend\">\n                                            <span class=\"input-group-text\"><img class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\" style=\"width: 25px; height: 25px;\"></span>\n                                        </div>\n                                        <div [innerHTML]=\"ans.correctAnswer | sanitizeHtml\" class=\"w-75 p-3 border border-dark\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-12 mt-3\" *ngIf=\"list.question_type_id == 24\">\n                            <div *ngFor=\"let item of list.subQuestions; let j = index\" class=\"my-3\">\n                                <span [innerHTML]=\"item.question | sanitizeHtml\" class=\"col-12 mt-3\"></span>\n                                <div *ngIf=\"item.question_type_id == 1 || item.question_type_id == 2\" class=\"mt-2\">\n                                    <div *ngFor=\"let answer of item.answer; let k=index\" class=\"mb-2 multiSelectCard d-flex align-items-center p-2\">\n                                        <span [ngClass]=\"{'selectColor' : answer.correctActive === 1}\" class=\"multichoice-option1 mr-2\">{{((k+1) + 9).toString(36).toUpperCase()}}</span>\n                                        <span class=\"ml-3 paragraph-space\" [innerHTML]=\"item.options[k].options  | sanitizeHtml\"></span>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"item.question_type_id == 5 || item.question_type_id == 7\" class=\"col-12 table-flexible\">\n                                    <table class=\"table table-bordered text-center col-12 mt-2\">\n                                        <thead>\n                                        <tr>\n                                            <th>Questions</th>\n                                            <th *ngFor=\"let answer of item.answer; let k=index\" [innerHTML]=\"answer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></th>\n                                        </tr>\n                                        </thead>\n                                        <tbody *ngIf=\"item.question_type_id == 5\">\n                                        <tr  *ngFor=\"let answer of item.heading_option; let k=index\">\n                                            <td [innerHTML]=\"item.options[k].options | sanitizeHtml\" class=\"innerhtml-margin-clear\"></td>\n                                            <td *ngFor=\"let term of item.answer; let l=index\">\n                                                <input [checked]=\"answer.correctActive === l\" class=\"radio_animated\" name=\"{{i}}choose{{k}}passage{{j}}\" type=\"radio\">\n                                            </td>\n                                        </tr>\n                                        </tbody>\n                                        <tbody *ngIf=\"item.question_type_id == 7\">\n                                        <tr  *ngFor=\"let answer of item.options; let k=index\">\n                                            <td [innerHTML]=\"answer.options | sanitizeHtml\" class=\"innerhtml-margin-clear\"></td>\n                                            <td *ngFor=\"let chk of item.answer; let l=index\">\n                                                <input id=\"checkMultiPassage{{i}}{{j}}{{k}}{{l}}\" type=\"checkbox\">\n                                            </td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div *ngIf=\"item.question_type_id == 10\" class=\"col-7 mt-2\">\n                                    <div *ngFor=\"let ans of item.answer; let k = index\" class=\"mb-3 d-flex\">\n                                        <div class=\"question-no-small\">\n                                            <h6 class=\"mb-0\">{{k+1}}</h6>\n                                        </div>\n                                        <span [innerHTML]=\"ans.options[0].value | sanitizeHtml\" class=\"form-span ml-3\"></span>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-12\" *ngIf=\"['20'].indexOf(item.question_type_id) > -1\">\n                                    <div class=\"col-12 my-3\" *ngFor=\"let answer of item.answer; let i = index\">\n                                        <label class=\"col-12 px-0\"><b>Correct Answer {{i + 1}}</b></label>\n                                        <div class=\"form-span editor_bullet\">\n                                            <span [innerHTML]=\"answer.correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"['55'].indexOf(item.question_type_id) > -1\" class=\"col-md-12 mt-2 form-span editor_bullet\">\n                                    <span [innerHTML]=\"item.answer[0].correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></span>\n                                </div>\n<!--                                <div class=\"col-12 mt-3 d-flex\" *ngIf=\"item.question_type_id == 16\">-->\n<!--                                    <div class=\"col-6\">-->\n<!--                                        <h6 class=\"text-center\" *ngIf=\"item.source != ''\"><b>{{item.source}}</b></h6>-->\n<!--                                        <h6 class=\"text-center\" *ngIf=\"item.source == ''\"><b>Source</b></h6>-->\n<!--                                        &lt;!&ndash;                            <span [innerHTML]=\"option.options[k]\" *ngFor=\"let option of list.options; let k = index\"></span>&ndash;&gt;-->\n<!--                                        <div class=\"col-12 form-group\" *ngFor=\"let option of item.options; let k = index\">-->\n<!--                                            <div class=\"input-group mb-3 mt-3 inputMenu\" cdkDrag  [cdkDragDisabled]=\"true\">-->\n<!--                                                <div class=\"input-group-prepend\">-->\n<!--                                                    <span class=\"input-group-text\"><img src=\"assets/images/pdf-icons/equal@2x.png\" class=\"img-fluid\" style=\"width: 25px; height: 25px;\"></span>-->\n<!--                                                </div>-->\n<!--                                                <div class=\"w-75 p-3 border border-dark\">{{option.options}}-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                    <div class=\"col-6\">-->\n<!--                                        <h6 class=\"text-center\" *ngIf=\"item.target != ''\"><b>{{item.target}}</b></h6>-->\n<!--                                        <h6 class=\"text-center\" *ngIf=\"item.target == ''\"><b>Target</b></h6>-->\n<!--                                        &lt;!&ndash;                            <span [innerHTML]=\"ans.correctAnswer[k]\" *ngFor=\"let ans of item.answer; let k = index\" class=\"\"></span>&ndash;&gt;-->\n<!--                                        <div class=\"col-12 form-group\" *ngFor=\"let ans of item.answer; let k = index\">-->\n<!--                                            <div class=\"input-group mb-3 mt-3 inputMenu\" cdkDrag  [cdkDragDisabled]=\"true\">-->\n<!--                                                <div class=\"input-group-prepend\">-->\n<!--                                                    <span class=\"input-group-text\"><img src=\"assets/images/pdf-icons/equal@2x.png\" class=\"img-fluid\" style=\"width: 25px; height: 25px;\"></span>-->\n<!--                                                </div>-->\n<!--                                                <div class=\"w-75 p-3 border border-dark\">{{ans.correctAnswer}}-->\n<!--                                                </div>-->\n<!--                                            </div>-->\n<!--                                        </div>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n\n                                <div class=\"col-12\">\n                                    <div class=\"card explanation\">\n                                        <div class=\"card-body\">\n                                            <div class=\"row\">\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Subject:</b></label>\n                                                    <p>{{item?.subject_name ? item?.subject_name  : '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Topic:</b></label>\n                                                    <p>{{item?.question_topic ? item?.question_topic : '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Sub Topic:</b></label>\n                                                    <p>{{item?.sub_topic ? item?.sub_topic : '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Skill:</b></label>\n                                                    <p *ngIf=\"item?.skill\">\n                                                        <span *ngIf=\"item?.skill.length == 0\">-</span>\n                                                        <span *ngFor=\"let skill of item?.skill; let last = last\">{{skill}}<span *ngIf=\"!last\">, </span></span>\n                                                    </p>\n                                                    <p *ngIf=\"!list.skill\">-</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Standard:</b></label>\n                                                    <p>{{item?.question_standard_name ? item?.question_standard_name : '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4 mb-3\">\n                                                    <label class=\"m-0\"><b>Difficulty:</b></label>\n                                                    <p>{{item?.level == '1' ? 'Easy' : item?.level == '2' ? 'Medium' : 'Difficult'}}</p>\n                                                </div>\n                                                <div class=\"col-4\">\n                                                    <label class=\"m-0\"><b>Points:</b></label>\n                                                    <p>{{item?.points ? item?.points :  '-'}}</p>\n                                                </div>\n                                                <div class=\"col-4\">\n                                                    <label class=\"m-0\"><b>Predicted Solving Time:</b></label>\n                                                    <p>{{item?.predicted_solving_time ? item?.predicted_solving_time : '-'}}</p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div *ngIf=\"item.explanation != ''\" class=\"col-md-12 mt-4 d-flex\">\n                                    <div class=\"col-md-12 px-0\">\n                                        <label><b>Explanation: </b></label>\n                                        <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"item.explanation | sanitizeHtml\"></div>\n                                    </div>\n                                </div>\n\n                                <div *ngIf=\"item.resource != ''\" class=\"col-md-12 mt-4 d-flex\">\n                                    <div class=\"col-md-12 px-0\">\n                                        <label><b>Resource:</b></label>\n                                        <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"item.resource | sanitizeHtml\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-12\" *ngIf=\"list.question_type_id != 24 && list.question_type_id != '55'\">\n                            <div class=\"card explanation\">\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-4 mb-3\">\n                                            <label class=\"m-0\"><b>Subject:</b></label>\n                                            <p>{{list?.subject_name ? list?.subject_name  : '-'}}</p>\n                                        </div>\n                                        <div class=\"col-4 mb-3\">\n                                            <label class=\"m-0\"><b>Topic:</b></label>\n                                            <p>{{list?.question_topic ? list?.question_topic : '-'}}</p>\n                                        </div>\n                                        <div class=\"col-4 mb-3\">\n                                            <label class=\"m-0\"><b>Sub Topic:</b></label>\n                                            <p>{{list?.sub_topic ? list?.sub_topic : '-'}}</p>\n                                        </div>\n                                        <div class=\"col-4 mb-3\">\n                                            <label class=\"m-0\"><b>Skill:</b></label>\n                                            <p *ngIf=\"list?.skill\">\n                                                <span *ngIf=\"list?.skill.length == 0\">-</span>\n                                                <span *ngFor=\"let skill of list?.skill; let last = last\">{{skill}}<span *ngIf=\"!last\">, </span></span>\n                                            </p>\n                                            <p *ngIf=\"!list.skill\">-</p>\n                                        </div>\n                                        <div class=\"col-4 mb-3\">\n                                            <label class=\"m-0\"><b>Standard:</b></label>\n                                            <p>{{list?.question_standard_name ? list?.question_standard_name : '-'}}</p>\n                                        </div>\n                                        <div class=\"col-4 mb-3\">\n                                            <label class=\"m-0\"><b>Difficulty:</b></label>\n                                            <p>{{list?.level == '1' ? 'Easy' : list?.level == '2' ? 'Medium' : 'Difficult'}}</p>\n                                        </div>\n                                        <div class=\"col-4\">\n                                            <label class=\"m-0\"><b>Points:</b></label>\n                                            <p>{{list?.points ? list?.points :  '-'}}</p>\n                                        </div>\n                                        <div class=\"col-4\">\n                                            <label class=\"m-0\"><b>Predicted Solving Time:</b></label>\n                                            <p>{{list?.predicted_solving_time ? list?.predicted_solving_time : '-'}}</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"list.explanation != '' && list.question_type_id != '24' && list.question_type_id != '55'\" class=\"col-md-12 mt-4 d-flex\">\n                            <div class=\"col-md-12 px-0\">\n                                <label><b>Explanation:</b></label>\n                                <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"list.explanation | sanitizeHtml\"></div>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"list.resource != '' && list.question_type_id != '24'\" class=\"col-md-12 mt-4 d-flex\">\n                            <div class=\"col-md-12 px-0\">\n                                <label><b>Resource:</b> </label>\n                                <div class=\"explanation innerhtml-margin-clear\" [innerHTML]=\"list.resource | sanitizeHtml\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <i [ngClass]=\"{'show-scroll': showScroll}\" (click)=\"windowScrollUp()\" title=\"Scroll To Top\"\n           class=\"cursor color-primary fa fa-3x fa-chevron-circle-up scroll-to-top\" aria-hidden=\"true\"></i>\n    </div>\n</div>\n\n<ng-template #multiChoiceDetail let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">{{quesId == '1' ? 'Multi choice Standard' : 'Multi Selection'}}</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-12 px-0\">\n            <div *ngFor=\"let list of answerIndex; let i=index\" class=\"mb-2 multiSelectCard d-flex p-2\">\n                <span [ngClass]=\"{'selectColor' : list.active == 1}\" class=\"multichoice-option1 mr-2\">{{((i+1) + 9).toString(36).toUpperCase()}}</span>\n                <span class=\"ml-3 mt-2 paragraph-space\" id=\"{{'optionId'+i}}\"></span>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer d-flex justify-content-right\">\n        <button (click)=\"close()\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #matchTableDetail let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">{{quesId == '5' ? 'Match Table Standard' : 'Match Table Labels'}}</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-12 table-flexible px-0\">\n            <table class=\"table table-bordered text-center div-disable\">\n                <thead>\n                <tr>\n                    <th>Questions</th>\n                    <th *ngFor=\"let list of fullData.answer; let i=index\" class=\"innerhtml-margin-clear\" id=\"answerId{{i}}\"></th>\n                </tr>\n                </thead>\n                <tbody *ngIf=\"quesId == '5'\">\n                <tr  *ngFor=\"let list of fullData.heading_option; let j=index\">\n                    <td class=\"innerhtml-margin-clear\" id=\"{{'optionId'+j}}\"></td>\n                    <td *ngFor=\"let item of fullData.answer; let i=index\">\n                        <input [checked]=\"list.correctActive === i\" class=\"radio_animated\" name=\"choose{{j}}\" type=\"radio\">\n                    </td>\n                </tr>\n                </tbody>\n                <tbody *ngIf=\"quesId == '7'\">\n                <tr  *ngFor=\"let list of fullData.options; let j=index\">\n                    <td class=\"innerhtml-margin-clear\" id=\"{{'optionId'+j}}\"></td>\n                    <td *ngFor=\"let item of fullData.answer; let i=index\">\n                        <input id=\"check{{j}}{{i}}\" type=\"checkbox\">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"modal-footer d-flex justify-content-right\">\n        <button (click)=\"close()\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #dropDownDetail let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">{{quesId == '9' ? 'Text Drop Down' : 'Text Entry'}}</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-12 px-0\" *ngIf=\"quesId == '9'\">\n            <div *ngFor=\"let item of fullData.answer; let j = index\" class=\"col-md-12 mb-3 d-flex\">\n                <div class=\"col-md-1 question-no-small\">\n                    <h6 class=\"mb-0\">{{j+1}}</h6>\n                </div>\n                <div class=\"col-md-11\">\n                    <div class=\"col-md-12 bg-white innerhtml-margin-clear p-2 dropdown-border dropdown-toggle d-flex justify-content-between\" data-toggle=\"dropdown\" id=\"dropdown{{j}}\"></div>\n                    <div class=\"col-md-12 dropdown-menu\">\n                        <span class=\"dropdown-item dropdown-link overflow-auto\">Select Answer</span>\n                        <span *ngFor=\"let option of item.options; let k = index\" [innerHTML]=\"option.listOption | sanitizeHtml\" class=\"dropdown-item overflow-auto dropdown-link innerhtml-margin-clear\"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"this.quesId == '10'\" class=\"col-12 px-0\">\n            <div *ngFor=\"let item of fullData.answer; let j = index\" class=\"col-md-12 px-0 mb-3 d-flex justify-content-around\">\n                <div class=\"question-no-small\">\n                    <h6 class=\"mb-0\">{{j+1}}</h6>\n                </div>\n                <span [innerHTML]=\"item.options[0].value | sanitizeHtml\" class=\"col-md-10 overflow-auto form-span\"></span>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer d-flex justify-content-right\">\n        <button (click)=\"close()\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #matchOrder let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Match & Order > Sort List</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-12 mt-2 px-0\">\n            <h6><b>Question:</b></h6>\n            <span [innerHTML]=\"fullData.question | sanitizeHtml\" ></span>\n        </div>\n        <div class=\"col-12 form-group mt-2 px-0\">\n            <h6 *ngIf=\"fullData.source != ''\" class=\"text-center\"><b>{{fullData.source}}</b></h6>\n            <h6 *ngIf=\"fullData.source == ''\" class=\"text-center\"><b>Source</b></h6>\n            <div *ngFor=\"let list of fullData.options;\" [cdkDragDisabled]=\"true\"  cdkDrag  class=\"input-group mb-3 mt-3 inputMenu\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><img alt=\"Pdf\" class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\" style=\"width: 25px; height: 25px;\"></span>\n                </div>\n                <div [innerHTML]=\"list.options | sanitizeHtml\" class=\"w-75 p-3 border border-dark\"></div>\n            </div>\n        </div>\n        <div class=\"col-12 form-group mt-2 px-0\">\n            <h6 *ngIf=\"fullData.target != ''\" class=\"text-center\"><b>{{fullData.target}}</b></h6>\n            <h6 *ngIf=\"fullData.target == ''\" class=\"text-center\"><b>Target</b></h6>\n            <div *ngFor=\"let list of fullData.answer;\" [cdkDragDisabled]=\"true\"  cdkDrag  class=\"input-group mb-3 mt-3 inputMenu\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><img alt=\"Pdf\" class=\"img-fluid\" src=\"assets/images/pdf-icons/equal@2x.png\" style=\"width: 25px; height: 25px;\"></span>\n                </div>\n                <div [innerHTML]=\"list.correctAnswer | sanitizeHtml\" class=\"w-75 px-3 pt-4 pb-3 border border-dark\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer d-flex justify-content-right\">\n        <button (click)=\"close()\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #text let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">{{quesId == '20' ? 'Free Text' : 'Essay Writing'}}</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-12 px-0\">\n            <h6><b>Question:</b></h6>\n            <span *ngIf=\"quesId == '20'\" [innerHTML]=\"fullData.question | sanitizeHtml\"></span>\n            <span *ngIf=\"quesId == '55'\" [innerHTML]=\"convertMarkdownToHtml(fullData.question)\"></span>\n        </div>\n        <div class=\"col-12 px-0 mt-2\" *ngIf=\"fullData.answer[0].correctAnswer != '' && quesId == '55'\">\n            <h6><b>Sample Essay:</b></h6>\n            <span *ngIf=\"quesId == '55'\" [innerHTML]=\"convertMarkdownToHtml(fullData.answer[0].correctAnswer)\"></span>\n        </div>\n\n        <div class=\"col-12 px-0 mt-2\" *ngIf=\"quesId == '20'\">\n            <div *ngFor=\"let answer of fullData.answer;let i = index\">\n                <h6><b>Answer {{i + 1}}:</b></h6>\n                <span *ngIf=\"quesId == '20'\" [innerHTML]=\"answer.correctAnswer | sanitizeHtml\"></span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal-footer d-flex justify-content-right\">\n        <button (click)=\"close()\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #highlight let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 *ngIf=\"quesId == '28'\" class=\"modal-title letter\">Highlight > Sentence and Responce</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-12 px-0\">\n            <h6><b>Question:</b></h6>\n            <span [innerHTML]=\"fullData.question | sanitizeHtml\"></span>\n        </div>\n        <div class=\"col-12 mt-2 px-0\">\n            <h6><b>Highlighted Paragraph:</b></h6>\n            <span [innerHTML]=\"fullData.answer[0].correctAnswer | sanitizeHtml\"></span>\n        </div>\n    </div>\n    <div class=\"modal-footer d-flex justify-content-right\">\n        <button (click)=\"close()\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #graphDetail let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Graph Question</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-12 px-0\">\n            <h6><b>Question:</b></h6>\n            <span [innerHTML]=\"fullData.question | sanitizeHtml\"></span>\n        </div>\n        <div class=\"col-12 mt-2 px-0\">\n            <h6><b>Graph Answer:</b></h6>\n            <app-graph-component [editMode]=\"false\" [editPatchValue]=\"graphValue\" [graphId]=\"'preview'\" [questionType]=\"quesId\"></app-graph-component>\n        </div>\n        <div *ngIf=\"answerGraph != ''\" class=\"col-12 px-0\">\n            <h6><b>Answer:</b></h6>\n            <div class=\"graphEditorDiv\">\n                <span [innerHTML]=\"answerGraph | sanitizeHtml\" class=\"mb-0\"></span>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer d-flex justify-content-right\">\n        <button (click)=\"close()\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #passage let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 *ngIf=\"quesId == '24'\" class=\"modal-title letter\">Passage with Questions</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div *ngFor=\"let list of fullData.subQuestions; let i = index\" class=\"mb-5\">\n            <div class=\"question-no-small mb-3\" style=\"background-color: #bc46c7\">\n                <h6 class=\"mb-0\" style=\"color: white\">{{i+1}}</h6>\n            </div>\n            <span [innerHTML]=\"list.question | sanitizeHtml\" class=\"mb-3\"></span>\n            <div class=\"col-12 px-0\" *ngIf=\"list.question_type_id == 1 || list.question_type_id == 2\">\n                <div *ngFor=\"let item of list.options; let j=index\" class=\"mb-2 multiSelectCard question-page d-flex p-2\">\n                    <span [ngClass]=\"{'selectColor' : list.answer[j].correctActive === 1}\" class=\"multichoice-option1 mr-2\">{{((j+1) + 9).toString(36).toUpperCase()}}</span>\n                    <span [innerHTML]=\"item.options | sanitizeHtml\" class=\"mt-1 ml-2 paragraph-space\"></span>\n                </div>\n            </div>\n            <div *ngIf=\"list.question_type_id == 5 || list.question_type_id == 7\" class=\"table-flexible\">\n                <table class=\"table table-bordered text-center div-disable\">\n                    <thead>\n                    <tr>\n                        <th>Questions</th>\n                        <th *ngFor=\"let item of list.answer; let j=index\" [innerHTML]=\"item | sanitizeHtml\" class=\"innerhtml-margin-clear\"></th>\n                    </tr>\n                    </thead>\n                    <tbody *ngIf=\"list.question_type_id == 5\">\n                    <tr *ngFor=\"let item of list.heading_option; let j=index\">\n                        <td [innerHTML]=\"list.options[j].options | sanitizeHtml\" class=\"innerhtml-margin-clear\"></td>\n                        <td *ngFor=\"let ans of list.answer; let k=index\">\n                            <input [checked]=\"item.correctActive === k\" class=\"radio_animated\" name=\"{{i}}choose{{j}}\" type=\"radio\">\n                        </td>\n                    </tr>\n                    </tbody>\n                    <tbody *ngIf=\"list.question_type_id == 7\">\n                    <tr  *ngFor=\"let item of list.options; let j=index\">\n                        <td [innerHTML]=\"item.options | sanitizeHtml\" class=\"innerhtml-margin-clear\"></td>\n                        <td *ngFor=\"let ans of list.answer; let k=index\">\n                            <input id=\"checkPassage{{i}}{{j}}{{k}}\" type=\"checkbox\">\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div *ngIf=\"list.question_type_id == 10\" class=\"col-10 justify-content-end\">\n                <div *ngFor=\"let item of list.answer; let j = index\" class=\"mb-3 d-flex\">\n                    <div class=\"question-no-small\">\n                        <h6 class=\"mb-0\">{{j+1}}</h6>\n                    </div>\n                    <span [innerHTML]=\"item.options[0].value | sanitizeHtml\" class=\"form-span ml-3\"></span>\n                </div>\n            </div>\n            <div class=\"col-12\" *ngIf=\"['20'].indexOf(list.question_type_id) > -1\">\n                <div class=\"col-12 px-0 my-3\" *ngFor=\"let answer of list.answer; let i = index\">\n                    <label class=\"col-12 px-0\"><b>Correct Answer {{i + 1}}</b></label>\n                    <div class=\"form-span\">\n                        <span [innerHTML]=\"answer.correctAnswer | sanitizeHtml\" class=\"innerhtml-margin-clear\"></span>\n                    </div>\n                </div>\n            </div>\n<!--            <div *ngIf=\"list.question_type_id == 16\" class=\"col-10 justify-content-end\">-->\n<!--                <div class=\"col-12 form-group mt-2\">-->\n<!--                    <h6 class=\"text-center\" *ngIf=\"list.source != ''\"><b>{{list.source}}</b></h6>-->\n<!--                    <h6 class=\"text-center\" *ngIf=\"list.source == ''\"><b>Source</b></h6>-->\n<!--                    <div class=\"input-group mb-3 mt-3 inputMenu\" cdkDrag  *ngFor=\"let list of list.options;\"  [cdkDragDisabled]=\"true\">-->\n<!--                        <div class=\"input-group-prepend\">-->\n<!--                            <span class=\"input-group-text\"><img src=\"assets/images/pdf-icons/equal@2x.png\" class=\"img-fluid\" style=\"width: 25px; height: 25px;\"></span>-->\n<!--                        </div>-->\n<!--                        <div class=\"w-75 p-3 border border-dark\">{{list.options}}-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--                <div class=\"col-12 form-group mt-2\">-->\n<!--                    <h6 class=\"text-center\" *ngIf=\"list.target != ''\"><b>{{list.target}}</b></h6>-->\n<!--                    <h6 class=\"text-center\" *ngIf=\"list.target == ''\"><b>Target</b></h6>-->\n<!--                    <div class=\"input-group mb-3 mt-3 inputMenu\" cdkDrag  *ngFor=\"let list of list.answer;\"  [cdkDragDisabled]=\"true\">-->\n<!--                        <div class=\"input-group-prepend\">-->\n<!--                            <span class=\"input-group-text\"><img src=\"assets/images/pdf-icons/equal@2x.png\" class=\"img-fluid\" style=\"width: 25px; height: 25px;\"></span>-->\n<!--                        </div>-->\n<!--                        <div class=\"w-75 p-3 border border-dark\">{{list.correctAnswer}}-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--&lt;!&ndash;                <div *ngFor=\"let item of list.answer; let j = index\" class=\"mb-3 d-flex\">&ndash;&gt;-->\n<!--&lt;!&ndash;                    <div class=\"question-no-small\">&ndash;&gt;-->\n<!--&lt;!&ndash;                        <h6 class=\"mb-0\">{{j+1}}</h6>&ndash;&gt;-->\n<!--&lt;!&ndash;                    </div>&ndash;&gt;-->\n<!--&lt;!&ndash;                    <span class=\"form-control ml-3\" [innerHTML]=\"item.value\"></span>&ndash;&gt;-->\n<!--&lt;!&ndash;                </div>&ndash;&gt;-->\n<!--            </div>-->\n        </div>\n\n    </div>\n    <div class=\"modal-footer d-flex justify-content-right\">\n        <button (click)=\"close()\" class=\"btn btn-primary\" type=\"button\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #deleteQuestion let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">Delete Question</h4>\n    </div>\n    <div class=\"modal-body d-flex justify-content-right\">\n        <div class=\"col-12\">\n            <h5>Are you sure want to delete this question ?</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"questionDelete()\" class=\"btn btn-primary\" type=\"button\">Confirm</button>\n        <button class=\"btn btn-outline-primary\" (click)=\"closeQuestion()\">Cancel</button>\n    </div>\n</ng-template>\n\n<ng-template #assignContentToClass let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Assign Content</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5>\n                    <span>Do you want to assign this content to the Class {{contentCreatedForm != 'class' ? 'or Content Folder' : ''}}</span>?</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"dontAssign()\">No</button>\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"assignContent()\">Yes</button>\n    </div>\n</ng-template>\n\n<ng-template #assignTemplate let-c=\"close\" let-d=\"dismiss\">\n    <app-confirm-content-assign\n            [isEssay]=\"isSingleQnsWithFeedbackType ? '1' : '0'\"\n            [classData]=\"classDetails\"\n            [contentDetails]=\"assignData\"\n            (closePopUp)=\"closeAssignPopUp()\"\n    >\n    </app-confirm-content-assign>\n</ng-template>\n", styles: [".custom-upload-input {\n  color: transparent;\n}\n\n.custom-upload-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.custom-upload-input::before {\n  content: 'Choose files';\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n\n.container {\n  display: block;\n}\n\n.custom-upload-input:hover::before {\n  border-color: black;\n}\n\n.custom-upload-input:active {\n  outline: 0;\n}\n\n.custom-upload-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\n.telemedicineaAddAvailability {\n  .buttonStyle {\n    width: 109px;\n    border-radius: 3px;\n    background: forestgreen;\n    color: white;\n  }\n\n  .timer {\n    margin-top: -31px;\n    width: 134px;\n  }\n\n\n  .BtnNonSelected {\n    background: white;\n    color: deepskyblue;\n    width: 115px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .BtnSelected {\n    background: #007bff;\n    color: white;\n    width: 115px;\n    border-color: deepskyblue;\n    border-radius: 10px;\n    border-width: 1px;\n  }\n\n  .badge {\n    width: 115px;\n    font-size: 14px;\n    height: 28px;\n    padding: 7px;\n  }\n}\n\n.scroll-to-top {\n  position: fixed;\n  bottom: 45px;\n  right: 20px;\n  opacity: 0;\n  transition: all .2s ease-in-out;\n}\n\n.show-scroll {\n  opacity: 1;\n}\n"] }]
    }], () => [{ type: i1.CommonDataService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.CreatorService }, { type: i4.AuthService }, { type: i5.FormBuilder }, { type: i6.ToastrService }, { type: i7.DomSanitizer }, { type: i8.NewsubjectService }, { type: i9.ConfigurationService }, { type: i10.CommonService }, { type: i11.ClassService }, { type: i12.ValidationService }, { type: i13.NgbModal }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }], multiChoiceDetail: [{
            type: ViewChild,
            args: ['multiChoiceDetail']
        }], matchTableDetail: [{
            type: ViewChild,
            args: ['matchTableDetail']
        }], dropDownDetail: [{
            type: ViewChild,
            args: ['dropDownDetail']
        }], textDetail: [{
            type: ViewChild,
            args: ['text']
        }], highlightDetail: [{
            type: ViewChild,
            args: ['highlight']
        }], matchOrderDetail: [{
            type: ViewChild,
            args: ['matchOrder']
        }], deleteQuestion: [{
            type: ViewChild,
            args: ['deleteQuestion']
        }], passage: [{
            type: ViewChild,
            args: ['passage']
        }], graphDetail: [{
            type: ViewChild,
            args: ['graphDetail']
        }], assignContentToClass: [{
            type: ViewChild,
            args: ['assignContentToClass']
        }], assignTemplate: [{
            type: ViewChild,
            args: ['assignTemplate']
        }], treeviewComponent: [{
            type: ViewChild,
            args: [TreeviewComponent, { static: false }]
        }], treeviewCompoent: [{
            type: ViewChild,
            args: [TreeviewContentfolderComponent, { static: false }]
        }], child: [{
            type: ViewChild,
            args: [TreeviewComponent, { static: false }]
        }], addBranchTemp: [{
            type: ViewChild,
            args: ['addBranch']
        }], onWindowScroll: [{
            type: HostListener,
            args: ['window:scroll', []]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TextAssignmentComponent, { className: "TextAssignmentComponent" }); })();
//# sourceMappingURL=text-assignment.component.js.map