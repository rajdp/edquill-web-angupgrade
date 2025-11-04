import { Component, Injectable, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { dateOptions } from '../../../shared/data/config';
import { TreeviewContentfolderComponent } from '../../auth/treeview-contentfolder/treeview-contentfolder.component';
import { TreeviewComponent, TreeviewConfig } from '@soy-andrey-semyonov/ngx-treeview';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "../../../shared/service/class.service";
import * as i4 from "../../../shared/service/creator.service";
import * as i5 from "../../../shared/service/common-data.service";
import * as i6 from "ngx-toastr";
import * as i7 from "../../../shared/service/common.service";
import * as i8 from "../../../shared/service/auth.service";
import * as i9 from "../../../shared/service/School.service";
import * as i10 from "@angular/platform-browser";
import * as i11 from "../../../shared/service/validation.service";
import * as i12 from "../../../shared/service/configuration.service";
import * as i13 from "@ng-bootstrap/ng-bootstrap";
import * as i14 from "@angular/common";
import * as i15 from "../../../shared/service/newsubject.service";
const _c0 = ["linkArray"];
const _c1 = ["myInput"];
const _c2 = ["pdf"];
const _c3 = ["viewPdf"];
const _c4 = ["attachments"];
const _c5 = ["attachments1"];
const _c6 = ["uploadPdf"];
const _c7 = ["assignContentToClass"];
const _c8 = ["assignTemplate"];
const _c9 = ["addBranch"];
const _c10 = () => [];
const _c11 = () => ({ standalone: true });
function AddResourcesComponent_div_0_h4_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 64);
    i0.ɵɵtext(1, "ADD RESOURCES");
    i0.ɵɵelementEnd();
} }
function AddResourcesComponent_div_0_h4_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 64);
    i0.ɵɵtext(1, "EDIT RESOURCES - ");
    i0.ɵɵelementStart(2, "span", 65);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.contentName);
} }
function AddResourcesComponent_div_0_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 66);
    i0.ɵɵlistener("click", function AddResourcesComponent_div_0_button_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.assign("add")); });
    i0.ɵɵtext(1, "Publish ");
    i0.ɵɵelementEnd();
} }
function AddResourcesComponent_div_0_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 66);
    i0.ɵɵlistener("click", function AddResourcesComponent_div_0_button_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.assign("edit")); });
    i0.ɵɵtext(1, "Publish ");
    i0.ɵɵelementEnd();
} }
function AddResourcesComponent_div_0_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 66);
    i0.ɵɵlistener("click", function AddResourcesComponent_div_0_button_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.assign("edit")); });
    i0.ɵɵtext(1, "Publish ");
    i0.ɵɵelementEnd();
} }
function AddResourcesComponent_div_0_img_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 67);
} }
function AddResourcesComponent_div_0_img_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 68);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + ctx_r1.imagepath), i0.ɵɵsanitizeUrl);
} }
function AddResourcesComponent_div_0_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 69);
    i0.ɵɵlistener("click", function AddResourcesComponent_div_0_i_27_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteImg()); });
    i0.ɵɵelementEnd();
} }
function AddResourcesComponent_div_0_em_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "Resource Name is required");
    i0.ɵɵelementEnd();
} }
function AddResourcesComponent_div_0_em_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "Grade is required");
    i0.ɵɵelementEnd();
} }
function AddResourcesComponent_div_0_em_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "Subject is required");
    i0.ɵɵelementEnd();
} }
function AddResourcesComponent_div_0_option_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 71);
    i0.ɵɵtext(1, "Access to all within Org");
    i0.ɵɵelementEnd();
} }
function AddResourcesComponent_div_0_option_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 72);
    i0.ɵɵtext(1, "Access only for you");
    i0.ɵɵelementEnd();
} }
function AddResourcesComponent_div_0_option_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 73);
    i0.ɵɵtext(1, "Access within corporate");
    i0.ɵɵelementEnd();
} }
function AddResourcesComponent_div_0_em_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "Access is required");
    i0.ɵɵelementEnd();
} }
function AddResourcesComponent_div_0_em_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "Description is required");
    i0.ɵɵelementEnd();
} }
function AddResourcesComponent_div_0_div_72_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 79);
    i0.ɵɵlistener("click", function AddResourcesComponent_div_0_div_72_i_4_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.editPrimaryLink()); });
    i0.ɵɵelementEnd();
} }
function AddResourcesComponent_div_0_div_72_app_source_link_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-source-link", 80);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("setHeight", false)("showWithIcon", false)("pdfPath", ctx_r1.pdfpath[0]);
} }
function AddResourcesComponent_div_0_div_72_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 81)(1, "input", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function AddResourcesComponent_div_0_div_72_div_6_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.editLinkVal, $event) || (ctx_r1.editLinkVal = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "i", 83);
    i0.ɵɵlistener("click", function AddResourcesComponent_div_0_div_72_div_6_Template_i_click_2_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.updatePrimaryLink("icon")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.editLinkVal);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c11));
} }
function AddResourcesComponent_div_0_div_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 74)(2, "h4", 75);
    i0.ɵɵtext(3, "Source Link");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AddResourcesComponent_div_0_div_72_i_4_Template, 1, 0, "i", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AddResourcesComponent_div_0_div_72_app_source_link_5_Template, 1, 3, "app-source-link", 77)(6, AddResourcesComponent_div_0_div_72_div_6_Template, 3, 3, "div", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.editSourceLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.editSourceLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.editSourceLink);
} }
function AddResourcesComponent_div_0_div_73_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 93)(1, "img", 94);
    i0.ɵɵlistener("click", function AddResourcesComponent_div_0_div_73_div_1_div_1_Template_img_click_1_listener() { i0.ɵɵrestoreView(_r11); const file_r12 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.viewDetail(file_r12)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "br");
    i0.ɵɵelementStart(3, "h6", 95);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const file_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", file_r12.image);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(file_r12.image);
} }
function AddResourcesComponent_div_0_div_73_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 87);
    i0.ɵɵtemplate(1, AddResourcesComponent_div_0_div_73_div_1_div_1_Template, 5, 2, "div", 88);
    i0.ɵɵelementStart(2, "div", 89)(3, "div", 84)(4, "button", 90);
    i0.ɵɵlistener("click", function AddResourcesComponent_div_0_div_73_div_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.pdfUpload()); });
    i0.ɵɵelement(5, "i", 91);
    i0.ɵɵtext(6, " Upload ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 84)(8, "button", 92);
    i0.ɵɵlistener("click", function AddResourcesComponent_div_0_div_73_div_1_Template_button_click_8_listener() { const file_r12 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.viewDetail(file_r12)); });
    i0.ɵɵtext(9, "Preview ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath.length > 0);
} }
function AddResourcesComponent_div_0_div_73_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "input", 96, 7);
    i0.ɵɵlistener("change", function AddResourcesComponent_div_0_div_73_div_2_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.encodePdfFileAsURL($event, 1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "img", 97);
    i0.ɵɵlistener("click", function AddResourcesComponent_div_0_div_73_div_2_Template_img_click_4_listener() { i0.ɵɵrestoreView(_r13); const hiddenfileinput_r14 = i0.ɵɵreference(3); return i0.ɵɵresetView(hiddenfileinput_r14.click()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "br");
    i0.ɵɵelementStart(6, "h6");
    i0.ɵɵtext(7, "Upload Files");
    i0.ɵɵelementEnd()();
} }
function AddResourcesComponent_div_0_div_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 84);
    i0.ɵɵtemplate(1, AddResourcesComponent_div_0_div_73_div_1_Template, 10, 1, "div", 85)(2, AddResourcesComponent_div_0_div_73_div_2_Template, 8, 0, "div", 86);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.pdfpath);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath.length == 0);
} }
function AddResourcesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15)(5, "div", 12)(6, "div", 16);
    i0.ɵɵtemplate(7, AddResourcesComponent_div_0_h4_7_Template, 2, 0, "h4", 17)(8, AddResourcesComponent_div_0_h4_8_Template, 4, 1, "h4", 17);
    i0.ɵɵelementStart(9, "label", 18);
    i0.ɵɵtext(10, "All fields marked with ");
    i0.ɵɵelementStart(11, "span", 19);
    i0.ɵɵtext(12, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " are required");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 20);
    i0.ɵɵtemplate(15, AddResourcesComponent_div_0_button_15_Template, 2, 0, "button", 21)(16, AddResourcesComponent_div_0_button_16_Template, 2, 0, "button", 21)(17, AddResourcesComponent_div_0_button_17_Template, 2, 0, "button", 21);
    i0.ɵɵelementStart(18, "button", 22);
    i0.ɵɵlistener("click", function AddResourcesComponent_div_0_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.draft(ctx_r1.type)); });
    i0.ɵɵtext(19, "Save As Draft ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(20, "div", 23)(21, "form", 24)(22, "div", 25)(23, "div", 26)(24, "div", 27);
    i0.ɵɵtemplate(25, AddResourcesComponent_div_0_img_25_Template, 1, 0, "img", 28)(26, AddResourcesComponent_div_0_img_26_Template, 1, 1, "img", 29)(27, AddResourcesComponent_div_0_i_27_Template, 1, 0, "i", 30);
    i0.ɵɵelementStart(28, "div", 31)(29, "input", 32, 6);
    i0.ɵɵlistener("change", function AddResourcesComponent_div_0_Template_input_change_29_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.encodeImageFileAsURL($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "button", 33);
    i0.ɵɵlistener("click", function AddResourcesComponent_div_0_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r1); const addResource_r7 = i0.ɵɵreference(30); return i0.ɵɵresetView(addResource_r7.click()); });
    i0.ɵɵelement(32, "i", 34);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(33, "div", 35)(34, "h5");
    i0.ɵɵtext(35, "Created By");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 12)(37, "div", 36);
    i0.ɵɵelement(38, "input", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "div", 38);
    i0.ɵɵelement(40, "input", 39);
    i0.ɵɵtemplate(41, AddResourcesComponent_div_0_em_41_Template, 2, 0, "em", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div", 12)(43, "div", 36);
    i0.ɵɵelement(44, "ng-select", 41);
    i0.ɵɵtemplate(45, AddResourcesComponent_div_0_em_45_Template, 2, 0, "em", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "div", 36);
    i0.ɵɵelement(47, "ng-select", 42);
    i0.ɵɵtemplate(48, AddResourcesComponent_div_0_em_48_Template, 2, 0, "em", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "div", 43)(50, "select", 44)(51, "option", 45);
    i0.ɵɵtext(52, "Please Choose *");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(53, AddResourcesComponent_div_0_option_53_Template, 2, 0, "option", 46)(54, AddResourcesComponent_div_0_option_54_Template, 2, 0, "option", 47)(55, AddResourcesComponent_div_0_option_55_Template, 2, 0, "option", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(56, AddResourcesComponent_div_0_em_56_Template, 2, 0, "em", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "div", 49);
    i0.ɵɵelement(58, "app-treeview-contentfolder", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "div", 12)(60, "div", 51);
    i0.ɵɵelement(61, "textarea", 52);
    i0.ɵɵtemplate(62, AddResourcesComponent_div_0_em_62_Template, 2, 0, "em", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "div", 53)(64, "div", 54);
    i0.ɵɵelement(65, "input", 55);
    i0.ɵɵelementStart(66, "label", 56);
    i0.ɵɵtext(67, "Download Content");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(68, "div", 57);
    i0.ɵɵelement(69, "tag-input", 58);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(70, "div", 59)(71, "div", 12);
    i0.ɵɵtemplate(72, AddResourcesComponent_div_0_div_72_Template, 7, 3, "div", 60)(73, AddResourcesComponent_div_0_div_73_Template, 3, 2, "div", 61);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(74, "div", 62);
    i0.ɵɵelement(75, "app-other-link", 63);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "add");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "edit");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "add" && ctx_r1.draftType == "update");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "edit" && ctx_r1.draftType == "publish");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "edit" && ctx_r1.draftType == "update");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r1.resourceform);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.imagepath);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.imagepath);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.imagepath);
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngIf", !ctx_r1.resourceform.get("resourceName").valid && (ctx_r1.resourceform.get("resourceName").dirty || ctx_r1.resourceform.get("resourceName").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r1.gradeData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.resourceform.get("grade").valid && (ctx_r1.resourceform.get("grade").dirty || ctx_r1.resourceform.get("grade").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r1.subjectData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.resourceform.get("subject").valid && (ctx_r1.resourceform.get("subject").dirty || ctx_r1.resourceform.get("subject").touched));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.roleid != "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.roleid != "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.roleid == "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.resourceform.get("access").valid && (ctx_r1.resourceform.get("access").dirty || ctx_r1.resourceform.get("access").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("treeviewHeight", 250)("content_id", ctx_r1.type == "add" ? "" : ctx_r1.editData == null ? null : ctx_r1.editData.content_id)("type", ctx_r1.type)("selectedbatch", ctx_r1.type == "edit" ? ctx_r1.editData == null ? null : ctx_r1.editData.batch_id : i0.ɵɵpureFunction0(33, _c10));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.resourceform.get("description").valid && (ctx_r1.resourceform.get("description").dirty || ctx_r1.resourceform.get("description").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("secondaryPlaceholder", "Enter tags")("placeholder", "Add tags")("editable", true)("clearOnBlur", true)("addOnPaste", true)("addOnBlur", true);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath[0].original_image_url == undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath[0].original_image_url != undefined);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("arrayValue", ctx_r1.resourceArray)("titleName", "Additional resource links");
} }
function AddResourcesComponent_ng_template_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 106)(1, "input", 96, 8);
    i0.ɵɵlistener("change", function AddResourcesComponent_ng_template_1_div_13_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.encodePdfFileAsURL($event, 1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 107);
    i0.ɵɵlistener("click", function AddResourcesComponent_ng_template_1_div_13_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r16); const hiddenfileinput_r17 = i0.ɵɵreference(2); return i0.ɵɵresetView(hiddenfileinput_r17.click()); });
    i0.ɵɵtext(4, "Upload PDF ");
    i0.ɵɵelementEnd()();
} }
function AddResourcesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 98)(1, "div", 12)(2, "h3", 99);
    i0.ɵɵtext(3, "Add Resources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 100)(5, "i", 101);
    i0.ɵɵlistener("click", function AddResourcesComponent_ng_template_1_Template_i_click_5_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onsave()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 12)(7, "div", 59)(8, "div", 102)(9, "h4", 103);
    i0.ɵɵtext(10, "Upload");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 104);
    i0.ɵɵtext(12, "Upload resources as a Image, Video, Voice or PDF Format and proceed to assign it to your Students.");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, AddResourcesComponent_ng_template_1_div_13_Template, 5, 0, "div", 105);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngIf", ctx_r1.pdflinks == "");
} }
function AddResourcesComponent_ng_template_3_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 116)(1, "div", 117)(2, "div", 118);
    i0.ɵɵelement(3, "input", 119);
    i0.ɵɵelementStart(4, "div", 120)(5, "span", 121)(6, "i", 122);
    i0.ɵɵlistener("click", function AddResourcesComponent_ng_template_3_div_6_Template_i_click_6_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addarray()); });
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const i_r20 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r20);
} }
function AddResourcesComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 108)(1, "div", 109)(2, "h4", 110);
    i0.ɵɵtext(3, "Add Link");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i", 111);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "form", 112);
    i0.ɵɵtemplate(6, AddResourcesComponent_ng_template_3_div_6_Template, 7, 1, "div", 113);
    i0.ɵɵelementStart(7, "div", 114)(8, "button", 115);
    i0.ɵɵlistener("click", function AddResourcesComponent_ng_template_3_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitlink()); });
    i0.ɵɵtext(9, "Submit ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.resourceform);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.resourceform.get("repeatlink")["controls"]);
} }
function AddResourcesComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 123)(1, "div", 11)(2, "div", 12)(3, "div", 124)(4, "h4", 110);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 125)(7, "i", 126);
    i0.ɵɵlistener("click", function AddResourcesComponent_ng_template_5_Template_i_click_7_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 59);
    i0.ɵɵelement(9, "pdf-viewer", 127);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.pdfName);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", ctx_r1.pdfTemplate);
} }
function AddResourcesComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 109)(1, "h5", 128);
    i0.ɵɵtext(2, "Upload PDF");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 123)(4, "div", 12)(5, "div", 59)(6, "h5");
    i0.ɵɵtext(7, "Are you sure want to upload because previously uploaded pdf & data will be removed");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(8, "div", 114)(9, "button", 129);
    i0.ɵɵlistener("click", function AddResourcesComponent_ng_template_7_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(10, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 96, 9);
    i0.ɵɵlistener("change", function AddResourcesComponent_ng_template_7_Template_input_change_11_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.encodePdfFileAsURL($event, 1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 107);
    i0.ɵɵlistener("click", function AddResourcesComponent_ng_template_7_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r22); const hiddenfileinput_r23 = i0.ɵɵreference(13); return i0.ɵɵresetView(hiddenfileinput_r23.click()); });
    i0.ɵɵtext(15, "Confirm ");
    i0.ɵɵelementEnd()();
} }
function AddResourcesComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 109)(1, "h5", 128);
    i0.ɵɵtext(2, "Assign Content");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 123)(4, "div", 12)(5, "div", 59)(6, "h5")(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, "? ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 114)(11, "button", 129);
    i0.ɵɵlistener("click", function AddResourcesComponent_ng_template_9_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.dontAssign()); });
    i0.ɵɵtext(12, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 130);
    i0.ɵɵlistener("click", function AddResourcesComponent_ng_template_9_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assignContent()); });
    i0.ɵɵtext(14, "Yes ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Do you want to assign this content to the Class ", ctx_r1.contentCreatedForm != "class" ? "or Content Folder" : "", "");
} }
function AddResourcesComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-confirm-content-assign", 131);
    i0.ɵɵlistener("closePopUp", function AddResourcesComponent_ng_template_11_Template_app_confirm_content_assign_closePopUp_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeAssignPopUp()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("classData", ctx_r1.classDetails)("contentDetails", ctx_r1.assignData);
} }
export class ProductTreeviewConfig extends TreeviewConfig {
    constructor() {
        super(...arguments);
        this.hasAllCheckBox = false;
        this.hasFilter = true;
        this.hasCollapseExpand = false;
        this.maxHeight = 400;
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵProductTreeviewConfig_BaseFactory; return function ProductTreeviewConfig_Factory(__ngFactoryType__) { return (ɵProductTreeviewConfig_BaseFactory || (ɵProductTreeviewConfig_BaseFactory = i0.ɵɵgetInheritedFactory(ProductTreeviewConfig)))(__ngFactoryType__ || ProductTreeviewConfig); }; })(); }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductTreeviewConfig, factory: ProductTreeviewConfig.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductTreeviewConfig, [{
        type: Injectable
    }], null, null); })();
export class AddResourcesComponent {
    constructor(route, formBuilder, classService, creator, commondata, toastr, common, auth, brandservices, sanitizer, router, validationService, config, modalService, datePipe, newSubject) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.classService = classService;
        this.creator = creator;
        this.commondata = commondata;
        this.toastr = toastr;
        this.common = common;
        this.auth = auth;
        this.brandservices = brandservices;
        this.sanitizer = sanitizer;
        this.router = router;
        this.validationService = validationService;
        this.config = config;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.newSubject = newSubject;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su'
        };
        this.pdflinks = [];
        this.answerpdfpath = [];
        this.resourceArray = [];
        this.getTag = [];
        this.tagArray = [];
        this.getNewlinks = [];
        this.classDetails = [];
        this.contentCreatedForm = '';
        this.batchid = [];
        this.showPage = false;
        this.value = 11;
        this.isEditLink = false;
        this.editSourceLink = false;
        this.editLinkVal = '';
        this.draftType = 'update';
        this.webhost = this.config.getimgUrl();
        this.roleid = this.auth.getRoleId();
        this.username = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
        this.pdfpath = [];
        this.answerpdfpath = [];
        this.pdfpaththumb = [];
        this.getpdfpath = JSON.parse(this.auth.getSessionData('pdf'));
        this.getlinks = JSON.parse(this.auth.getSessionData('links'));
        this.getpdfpaththumb = this.auth.getSessionData('pdf_path_thumb');
        this.contentCreatedForm = this.auth.getSessionData('assignedForm');
        if (this.getpdfpath != null) {
            for (let i = 0; i < this.getpdfpath.length; i++) {
                this.pdfpath.push(this.getpdfpath[i]);
                this.pdflinks = [];
            }
        }
        if (this.getlinks != null) {
            for (let i = 0; i < this.getlinks.length; i++) {
                this.pdflinks.push(this.getlinks[i]);
                this.pdfpath = [];
            }
        }
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.resourceform = this.formBuilder.group({
            created: [''],
            resourceName: ['', Validators.required],
            grade: ['', Validators.required],
            subject: ['', Validators.required],
            description: '',
            resourcesLink: '',
            tag: '',
            access: ['1', Validators.required],
            downloadContent: '',
            repeatlink: this.formBuilder.array([this.addlink()]),
        });
        this.branchForm = this.formBuilder.group({
            batchname: ['', Validators.required]
        });
        if (this.type == 'edit') {
            const detail = JSON.parse(this.auth.getSessionData('editor'));
            this.listDetails(detail);
        }
        else {
            this.showPage = true;
            this.resourceform.controls.created.patchValue(this.username);
            this.resourceform.controls.resourceName.patchValue('');
            this.resourceform.controls.grade.patchValue(null);
            this.resourceform.controls.subject.patchValue(null);
            this.resourceform.controls.description.patchValue('');
            this.resourceform.controls.resourcesLink.patchValue('');
            this.resourceform.controls.access.patchValue('');
            this.resourceform.controls.tag.patchValue('');
        }
    }
    ngOnInit() {
        this.allowSelect = true;
        this.newSubject.allowSchoolChange(this.allowSelect);
        this.gradeList();
        this.subjectList();
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
            console.error(error);
        });
    }
    detailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.editData = successData.ResponseObject;
            console.log(this.editData, 'editData');
            if (this.editData.details == 'Draft') {
                this.draftType = 'publish';
            }
            this.gradeId = this.editData.grade_id;
            this.contentName = this.editData.name;
            this.resourceform.controls.created.patchValue(this.editData.created_by);
            this.resourceform.controls.resourceName.patchValue(this.editData.name);
            if (this.editData.tags != '') {
                const tag = this.editData.tags.split(',');
                for (let i = 0; i < tag.length; i++) {
                    this.getTag.push({ display: tag[i], value: tag[i] });
                }
            }
            if (this.editData.grade != '') {
                this.gradeSplit = [];
                const grade = this.editData.grade.split(',');
                for (let i = 0; i < grade.length; i++) {
                    this.gradeSplit.push(grade[i]);
                }
            }
            if (this.editData.subject != '') {
                this.subjectSplit = [];
                const subject = this.editData.subject.split(',');
                for (let i = 0; i < subject.length; i++) {
                    this.subjectSplit.push(subject[i]);
                }
            }
            if (this.editData.links != '') {
                const links = this.editData.links;
                for (let i = 0; i < links.length; i++) {
                    this.getNewlinks.push({ display: links[i], value: links[i] });
                }
            }
            this.resourceform.controls.resourcesLink.patchValue(this.getNewlinks);
            if (this.editData.download == '1') {
                this.resourceform.controls.downloadContent.patchValue(true);
            }
            else if (this.editData.download == '0') {
                this.resourceform.controls.downloadContent.patchValue(false);
            }
            this.resourceform.controls.grade.patchValue(this.gradeSplit);
            this.resourceform.controls.subject.patchValue(this.subjectSplit);
            this.resourceform.controls.description.patchValue(this.editData.description);
            this.resourceform.controls.access.patchValue(this.editData.access);
            this.resourceform.controls.tag.patchValue(this.getTag);
            this.pdfpath = this.editData.file_path != '' ? this.common.convertBase64(this.editData.file_path) : [];
            this.resourceArray = this.pdfpath[0].links ? this.pdfpath[0].links : [];
            console.log(this.pdfpath, 'pafPath');
            // this.answerpdfpath = this.editData.answerKey_path != '' ? this.common.convertBase64(this.editData.answerKey_path) : [];
            this.pdflinks = this.editData.file_path;
            if (this.editData.profile_url != '') {
                this.imagepath = this.editData.profile_url;
                this.imagepaththumb = this.editData.profile_thumb_url;
            }
            this.showPage = true;
        }
    }
    addlink() {
        return this.formBuilder.group({
            link: ''
        });
    }
    addarray() {
        this.repeatlink = this.resourceform.get('repeatlink');
        this.repeatlink.push(this.addlink());
    }
    submitlink() {
        let list;
        for (let i = 0; i < this.resourceform['controls'].repeatlink.value.length; i++) {
            list = {
                options: this.resourceform['controls'].repeatlink['controls'][i]['controls']['link'].value,
            };
            if (list.options != '') {
                this.pdflinks.push(list.options);
            }
        }
        this.modalRef.close();
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
            console.error(error);
        });
    }
    subjectListSuccess(successData) {
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
            console.error(error);
        });
    }
    gradeListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
        }
    }
    assign(value) {
        console.log(this.treeviewCompoent, 'treeviewCompoent');
        const batchId = this.treeviewCompoent.batchid;
        if (this.resourceform.valid) {
            if (this.pdfpath != '' && this.pdfpath != 0) {
                this.tagArray = [];
                const tags = this.resourceform.controls.tag.value;
                for (let i = 0; i < tags.length; i++) {
                    this.tagArray.push(tags[i].value);
                }
                const updatedResourceLink = this.resourceArray.filter((item) => item.link != '');
                const nameNotEntered = updatedResourceLink.some((link) => link.name == '');
                if (!nameNotEntered) {
                    this.pdfpath[0].links = updatedResourceLink;
                    const data = {
                        platform: 'web',
                        role_id: this.auth.getRoleId(),
                        user_id: this.auth.getUserId(),
                        school_id: this.auth.getSessionData('school_id'),
                        name: this.resourceform.controls.resourceName.value,
                        description: this.resourceform.controls.description.value,
                        grade: this.resourceform.controls.grade.value,
                        subject: this.resourceform.controls.subject.value,
                        access: this.resourceform.controls.access.value,
                        file_path: this.pdfpath,
                        tags: this.tagArray,
                        profile_url: this.imagepath,
                        profile_thumb_url: this.imagepaththumb,
                        content_format: this.pdfpath != null ? '1' : '2',
                        content_type: '1',
                        status: '1',
                        answers: [],
                        file_text: '',
                        links: this.resourceArray,
                        annotation: [],
                        assign: '0',
                        classdetails: [],
                        editor_type: '',
                        corporate_id: this.roleid == 6 ? this.auth.getSessionData('corporate_id') : undefined,
                        download: this.resourceform.controls.downloadContent.value == true ? '1' : '0',
                        batch_id: batchId
                    };
                    if (value != 'edit') {
                        this.creator.addAssignResourse(data).subscribe((successData) => {
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
                this.toastr.error('Please Upload Pdf to add resource', 'Resource');
            }
        }
        else {
            this.validationService.validateAllFormFields(this.resourceform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    assignSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.assignData = successData.Contentdetails;
            this.toastr.success(successData.ResponseObject);
            this.auth.removeSessionData('links');
            this.auth.removeSessionData('pdf');
            this.auth.removeSessionData('editresources');
            this.modalRef = this.modalService.open(this.assignContentToClass, { size: 'md', backdrop: 'static' });
        }
        else if (!successData.IsSuccess) {
            this.toastr.error(successData.ResponseObject);
        }
    }
    assignFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject);
    }
    assignContent() {
        this.modalRef.close();
        this.classDetails = JSON.parse(this.auth.getSessionData('card-data'));
        this.modalRef = this.modalService.open(this.assignTemplate, { size: 'xl', backdrop: 'static' });
    }
    draft(value) {
        console.log(this.treeviewCompoent, 'treeviewCompoent');
        const batchId = this.treeviewCompoent.batchid;
        if (this.resourceform.valid) {
            if (this.pdfpath != '' && this.pdfpath != 0) {
                this.tagArray = [];
                const tags = this.resourceform.controls.tag.value;
                for (let i = 0; i < tags.length; i++) {
                    this.tagArray.push(tags[i].value);
                }
                if (this.resourceArray.length != 0) {
                    this.pdfpath[0].links = this.resourceArray;
                }
                else {
                    this.pdfpath[0].links = [];
                }
                this.pdfpath[0].links = this.pdfpath[0]?.links.filter((item) => item.link !== '');
                let nameNotEntered = false;
                this.pdfpath[0]?.links.every((items) => {
                    if (items.name == '') {
                        nameNotEntered = true;
                        return false;
                    }
                    return true;
                });
                if (!nameNotEntered) {
                    const data = {
                        platform: 'web',
                        role_id: this.auth.getRoleId(),
                        user_id: this.auth.getUserId(),
                        school_id: this.auth.getSessionData('school_id'),
                        name: this.resourceform.controls.resourceName.value,
                        description: this.resourceform.controls.description.value,
                        grade: this.resourceform.controls.grade.value,
                        subject: this.resourceform.controls.subject.value,
                        access: this.resourceform.controls.access.value,
                        file_path: this.pdfpath,
                        tags: this.tagArray,
                        profile_url: this.imagepath,
                        profile_thumb_url: this.imagepaththumb,
                        content_format: this.pdfpath != null ? '1' : '2',
                        content_type: '1',
                        status: '5',
                        answers: [],
                        file_text: '',
                        links: this.resourceform.controls.resourcesLink.value != '' ? this.resourceArray : [],
                        annotation: [],
                        assign: '0',
                        classdetails: [],
                        editor_type: '',
                        corporate_id: this.roleid == 6 ? this.auth.getSessionData('corporate_id') : undefined,
                        batch_id: batchId
                    };
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
                    this.toastr.error('Name is mandatory for each additional resource links');
                }
            }
            else {
                this.toastr.error('Please Upload Pdf to add resource', 'Resource');
            }
        }
        else {
            this.validationService.validateAllFormFields(this.resourceform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    draftSuccess(successData) {
        if (successData.IsSuccess) {
            this.draftData = successData.ResponseObject;
            this.router.navigate(['/repository/content-home']);
            this.toastr.success(successData.ResponseObject);
            this.auth.removeSessionData('links');
            this.auth.removeSessionData('pdf');
            this.auth.removeSessionData('editresources');
        }
        else if (!successData.IsSuccess) {
            this.toastr.error(successData.ResponseObject);
        }
    }
    draftFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject);
    }
    pdfUpload() {
        this.modalRef = this.modalService.open(this.uploadPdf, { size: 'md' });
    }
    encodeImageFileAsURL(event) {
        event.target.files = null;
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
            uploadtype: 'profile'
        };
        this.common.fileUpload(data).subscribe((successData) => {
            this.uploadSuccess(successData);
        }, (error) => {
            console.log(error, 'error');
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
            console.log(error, 'error');
        });
    }
    pdfuploadSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.response = successData.ResponseObject;
            this.pdfpath = [];
            for (let i = 0; i < this.response.imagepath.length; i++) {
                this.pdfpath.push(this.response.imagepath[i]);
            }
            this.modalRef.close('Content');
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    onsave() {
        this.modalRef.close();
    }
    deleteImg() {
        this.imagepath = '';
        this.clearUploadfilename();
    }
    deletePdf(id, type) {
        this.pdfpath.splice(id, 1);
        this.pdflinks = [];
        this.attachment.nativeElement.value = '';
    }
    clearUploadfilename() {
        this.myInputVariable.nativeElement.value = '';
    }
    editPrimaryLink() {
        this.editLinkVal = this.pdfpath[0].link;
        this.editSourceLink = true;
    }
    updatePrimaryLink(calledFrom) {
        if (this.editLinkVal != '') {
            this.pdfpath[0].link = this.editLinkVal.includes('http') ? this.editLinkVal : 'https://' + this.editLinkVal;
            this.editSourceLink = false;
        }
        else if (this.editLinkVal == '' && calledFrom == 'icon') {
            this.toastr.error('Sourec Link should not be empty');
        }
    }
    showModal() {
        this.modalRef = this.modalService.open(this.Content, { size: 'md', backdrop: 'static' });
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
    viewDetail(value) {
        this.pdfName = value.image;
        this.pdfTemplate = this.webhost + '/' + value.original_image_url;
        this.modalRef = this.modalService.open(this.viewPdf, { size: 'xl' });
    }
    close() {
        this.modalRef.close();
    }
    closeAssignPopUp() {
        this.auth.removeSessionData('assignedForm');
        this.modalRef.close();
    }
    dontAssign() {
        this.close();
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
    static { this.ɵfac = function AddResourcesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddResourcesComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.ClassService), i0.ɵɵdirectiveInject(i4.CreatorService), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i7.CommonService), i0.ɵɵdirectiveInject(i8.AuthService), i0.ɵɵdirectiveInject(i9.SchoolService), i0.ɵɵdirectiveInject(i10.DomSanitizer), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i11.ValidationService), i0.ɵɵdirectiveInject(i12.ConfigurationService), i0.ɵɵdirectiveInject(i13.NgbModal), i0.ɵɵdirectiveInject(i14.DatePipe), i0.ɵɵdirectiveInject(i15.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddResourcesComponent, selectors: [["app-add-resources"]], viewQuery: function AddResourcesComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TreeviewComponent, 5);
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
            i0.ɵɵviewQuery(TreeviewContentfolderComponent, 5);
            i0.ɵɵviewQuery(TreeviewComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeviewComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addLink = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.Content = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewPdf = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.attachment = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.attachment1 = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.uploadPdf = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignContentToClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addBranchTemp = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeviewCompoent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.child = _t.first);
        } }, decls: 13, vars: 1, consts: [["pdf", ""], ["linkArray", ""], ["viewPdf", ""], ["uploadPdf", ""], ["assignContentToClass", ""], ["assignTemplate", ""], ["addResource", ""], ["attachments", "", "hiddenfileinput", ""], ["hiddenfileinput", ""], ["attachmentsnew", "", "hiddenfileinput", ""], ["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card", "tab2-card"], [1, "card-header"], [1, "col-6"], ["class", "text-capitalize", 4, "ngIf"], [1, "text-muted"], [1, "text-danger"], [1, "pdf-assign-btn", "col-6"], ["class", "btn btn-primary pull-right ml-3", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "pull-right", 3, "click"], [1, "card-body", "tab2-card"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "col-12", "col-md-12", "d-flex", "mb-4"], [1, "col-12", "col-md-4", "px-0"], [1, "image-container-left"], ["src", "assets/images/ristaschool/resource.png", "alt", "", 4, "ngIf"], ["alt", "", 3, "src", 4, "ngIf"], ["class", "fa fa-times close-button", "title", "close", 3, "click", 4, "ngIf"], [1, "profileUrl"], ["type", "file", "accept", ".png, .jpeg, .jpg", 1, "custom-upload-input", 2, "display", "none", 3, "change"], ["typw", "button", "title", "upload Image", 1, "btn", "btn-light", "btn-circle", "border-rista", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-upload", "fa-2x", "mb-3"], [1, "container", "col-12", "col-md-8"], [1, "col-md-4", "form-group"], ["formControlName", "created", "id", "validationCustom1", "type", "text", "placeholder", "Created", "readonly", "", 1, "form-control"], [1, "col-md-8", "form-group"], ["formControlName", "resourceName", "id", "validationCustom12", "type", "text", "placeholder", "Resource Name *", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["bindLabel", "grade_name", "bindValue", "grade_id", "formControlName", "grade", "placeholder", "Select Grade *", "typeToSearchText", "", "multiple", "true", 3, "items"], ["bindLabel", "subject_name", "bindValue", "subject_id", "formControlName", "subject", "placeholder", "Select Subject *", "typeToSearchText", "", "multiple", "true", 3, "items"], [1, "form-group", "col-md-4"], ["formControlName", "access", 1, "form-control"], ["value", "", "hidden", "", "selected", ""], ["value", "1", 4, "ngIf"], ["value", "2", 4, "ngIf"], ["value", "4", 4, "ngIf"], [1, "row", "d-flex", "align-items-center", "mb-3"], [3, "treeviewHeight", "content_id", "type", "selectedbatch"], [1, "form-group", "col-md-12"], ["name", "", "id", "", "placeholder", "Enter Description", "formControlName", "description", 2, "width", "100%", "height", "100px", "padding", "4px"], [1, "col-md-6", "form-group", "align-self-center"], [1, "col-12", 2, "position", "relative", "font-size", "15px", "left", "0.4rem"], ["type", "checkbox", "id", "download", "formControlName", "downloadContent", 1, "form-check-input", "cursor"], ["for", "download"], [1, "col-md-6", "form-group"], ["formControlName", "tag", "theme", "bootstrap", 3, "secondaryPlaceholder", "placeholder", "editable", "clearOnBlur", "addOnPaste", "addOnBlur"], [1, "col-md-12"], ["class", "col-12", 4, "ngIf"], ["class", "col-md-6", 4, "ngIf"], [1, "mx-3"], ["id", "otherLink", 3, "arrayValue", "titleName"], [1, "text-capitalize"], [1, "color-primary"], [1, "btn", "btn-primary", "pull-right", "ml-3", 3, "click"], ["src", "assets/images/ristaschool/resource.png", "alt", ""], ["alt", "", 3, "src"], ["title", "close", 1, "fa", "fa-times", "close-button", 3, "click"], [1, "error"], ["value", "1"], ["value", "2"], ["value", "4"], [1, "col-md-12", "px-0", "d-flex", "justify-content-between"], [2, "color", "black", "font-weight", "bold"], ["class", "fa fa-edit f-22px ml-3 cursor", 3, "click", 4, "ngIf"], [3, "setHeight", "showWithIcon", "pdfPath", 4, "ngIf"], ["class", "col-md-12 d-flex justify-content-center align-items-center p-4 link-card", 4, "ngIf"], [1, "fa", "fa-edit", "f-22px", "ml-3", "cursor", 3, "click"], [3, "setHeight", "showWithIcon", "pdfPath"], [1, "col-md-12", "d-flex", "justify-content-center", "align-items-center", "p-4", "link-card"], ["type", "text", "placeholder", "Source Link", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "fa", "fa-check-circle", "color-green", "fa-2x", "ml-3", "cursor", 3, "click"], [1, "col-md-6"], ["class", "form-group card-resource ml-4", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "form-group", "card-resource", "ml-4"], ["class", "delete-icon w-100", 4, "ngIf"], [1, "row", "mt-5"], [1, "btn", "btn-primary", "col-md-12", 3, "click"], [1, "fa", "fa-upload"], [1, "btn", "btn-outline-primary", "col-md-12", 3, "click"], [1, "delete-icon", "w-100"], ["src", "assets/images/ristaschool/resource.png", "alt", "", 1, "img-path", 3, "click", "title"], [1, "mt-2", "classresource"], ["accept", ".pdf", "type", "file", 2, "display", "none", 3, "change"], ["src", "assets/images/pdf-icons/Group 15864@2x.png", "title", "Upload PDF", "alt", "", "type", "file", "aria-describedby", "inputGroupFileAddon01", 1, "img-path", "cursor", 3, "click"], [1, "modal-body", "mb-5"], [1, "col-md-11", "px-3", "py-2"], [1, "col-md-1", "pull-right"], ["aria-hidden", "true", 1, "fa", "fa-close", "pull-right", 2, "cursor", "pointer", 3, "click"], [2, "min-height", "120px"], [2, "text-align", "center", "margin-top", "2rem", "font-weight", "bold"], [2, "text-align", "center"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["type", "file", "aria-describedby", "inputGroupFileAddon01", 1, "btn", "btn-primary", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["data-dismiss", "modal", 1, "fa", "fa-close", 2, "cursor", "pointer"], [3, "formGroup"], ["class", "modal-body", "formArrayName", "repeatlink", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["formArrayName", "repeatlink", 1, "modal-body"], [3, "formGroupName"], [1, "input-group"], ["type", "link", "formControlName", "link", "aria-label", "Recipient's username", "placeholder", "Add Link here", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], [1, "fa", "fa-plus", 3, "click"], [1, "modal-body"], [1, "col-md-12", "modal-header"], [1, "text-right"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-2x", 2, "cursor", "pointer", 3, "click"], [2, "display", "block", "height", "100vh", 3, "src"], [1, "contenttext", "text-center", "mb-0"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [3, "closePopUp", "classData", "contentDetails"]], template: function AddResourcesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AddResourcesComponent_div_0_Template, 76, 34, "div", 10)(1, AddResourcesComponent_ng_template_1_Template, 14, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, AddResourcesComponent_ng_template_3_Template, 10, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(5, AddResourcesComponent_ng_template_5_Template, 10, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(7, AddResourcesComponent_ng_template_7_Template, 16, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(9, AddResourcesComponent_ng_template_9_Template, 15, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(11, AddResourcesComponent_ng_template_11_Template, 1, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showPage);
        } }, styles: [".container[_ngcontent-%COMP%] {\n  display: block;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddResourcesComponent, [{
        type: Component,
        args: [{ selector: 'app-add-resources', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\" *ngIf=\"showPage\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <h4 class=\"text-capitalize\" *ngIf=\"type == 'add'\">ADD RESOURCES</h4>\n                            <h4 class=\"text-capitalize\" *ngIf=\"type == 'edit'\">EDIT RESOURCES - <span\n                                    class=\"color-primary\">{{contentName}}</span></h4>\n                            <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are\n                                required</label>\n                        </div>\n                        <div class=\"pdf-assign-btn col-6\">\n                            <button class=\"btn btn-primary pull-right ml-3\"\n                                    *ngIf=\"type == 'add' && draftType == 'update'\" (click)=\"assign('add')\">Publish\n                            </button>\n                            <button class=\"btn btn-primary pull-right ml-3\"\n                                    *ngIf=\"type == 'edit' && draftType == 'publish'\" (click)=\"assign('edit')\">Publish\n                            </button>\n                            <button class=\"btn btn-primary pull-right ml-3\"\n                                    *ngIf=\"type == 'edit' && draftType == 'update'\" (click)=\"assign('edit')\">Publish\n                            </button>\n                            <button class=\"btn btn-primary pull-right\" (click)=\"draft(type)\">Save As Draft\n                            </button>\n<!--                            <img (click)=\"draft('add')\" *ngIf=\"type == 'add'\" class=\"pull-right\"-->\n<!--                                 src=\"assets/images/pdf-icons/floppy-disk.png\" alt=\"\">-->\n<!--                            <img (click)=\"draft('edit')\" *ngIf=\"type == 'edit'\" class=\"pull-right\"-->\n<!--                                 src=\"assets/images/pdf-icons/floppy-disk.png\" alt=\"\">-->\n                            <!--                            <input accept=\".pdf\" style=\"display: none\" type=\"file\" #attachments1 (change)=\"encodePdfFileAsURL($event, 2)\" #hiddenfileinput1>-->\n                            <!--                            <button class=\"btn btn-primary pull-right mr-3\" type=\"file\" aria-describedby=\"inputGroupFileAddon11\"-->\n                            <!--                                    (click)=\"hiddenfileinput1.click()\"><i class=\"fa fa-upload\"></i> Answer Key Upload</button>-->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"resourceform\" class=\"needs-validation user-add\">\n                        <div class=\"col-12 col-md-12 d-flex mb-4\">\n                            <div class=\"col-12 col-md-4 px-0\">\n                                <div class=\"image-container-left\">\n                                    <img *ngIf=\"!imagepath\" src=\"assets/images/ristaschool/resource.png\" alt=\"\">\n                                    <img *ngIf=\"imagepath\"\n                                         [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + imagepath)\"\n                                         alt=\"\">\n                                    <i *ngIf=\"imagepath\" class=\"fa fa-times close-button\" title=\"close\"\n                                       (click)=\"deleteImg()\"></i>\n                                    <div class=\"profileUrl\">\n                                        <input style=\"display: none\" type=\"file\" class=\"custom-upload-input\"\n                                               (change)=\"encodeImageFileAsURL($event)\" #addResource\n                                               accept=\".png, .jpeg, .jpg\">\n                                        <button typw=\"button\" class=\"btn btn-light btn-circle border-rista\"\n                                                title=\"upload Image\" (click)=\"addResource.click()\"><i\n                                                class=\"fa fa-upload fa-2x mb-3\" aria-hidden=\"true\"></i></button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"container col-12 col-md-8\">\n                                <h5>Created By</h5>\n                                <div class=\"row\">\n                                    <div class=\"col-md-4 form-group\">\n                                        <input class=\"form-control\" formControlName=\"created\" id=\"validationCustom1\"\n                                               type=\"text\" placeholder=\"Created\" readonly>\n                                    </div>\n                                    <div class=\"col-md-8 form-group\">\n                                        <input class=\"form-control\" formControlName=\"resourceName\"\n                                               id=\"validationCustom12\"\n                                               type=\"text\" placeholder=\"Resource Name *\" required=\"\">\n                                        <em class=\"error\"\n                                            *ngIf=\"!resourceform.get('resourceName').valid && (resourceform.get('resourceName').dirty || resourceform.get('resourceName').touched)\">Resource\n                                            Name is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-4 form-group\">\n                                        <ng-select [items]=\"gradeData\"\n                                                   bindLabel=\"grade_name\"\n                                                   bindValue=\"grade_id\"\n                                                   formControlName=\"grade\"\n                                                   placeholder=\"Select Grade *\"\n                                                   typeToSearchText=\"\"\n                                                   multiple=\"true\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\"\n                                            *ngIf=\"!resourceform.get('grade').valid && (resourceform.get('grade').dirty || resourceform.get('grade').touched)\">Grade\n                                            is required</em>\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                        <ng-select [items]=\"subjectData\"\n                                                   bindLabel=\"subject_name\"\n                                                   bindValue=\"subject_id\"\n                                                   formControlName=\"subject\"\n                                                   placeholder=\"Select Subject *\"\n                                                   typeToSearchText=\"\"\n                                                   multiple=\"true\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\"\n                                            *ngIf=\"!resourceform.get('subject').valid && (resourceform.get('subject').dirty || resourceform.get('subject').touched)\">Subject\n                                            is required</em>\n                                    </div>\n                                    <div class=\"form-group col-md-4\">\n                                        <select class=\"form-control\" formControlName=\"access\">\n                                            <option value=\"\" hidden selected>Please Choose *</option>\n                                            <option *ngIf=\"roleid != '6'\" value=\"1\">Access to all within Org</option>\n                                            <option *ngIf=\"roleid != '6'\" value=\"2\">Access only for you</option>\n                                            <option *ngIf=\"roleid == '6'\" value=\"4\">Access within corporate</option>\n                                            <!-- <option *ngIf=\"roleid != '6'\" value=\"3\">Public</option> -->\n                                        </select>\n                                        <em class=\"error\"\n                                            *ngIf=\"!resourceform.get('access').valid && (resourceform.get('access').dirty || resourceform.get('access').touched)\">Access\n                                            is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row d-flex align-items-center mb-3\">\n                                    <app-treeview-contentfolder [treeviewHeight]=\"250\"\n                                            [content_id]=\"type == 'add' ?  '' : editData?.content_id\"\n                                            [type]=\"type\" [selectedbatch]=\"type == 'edit' ? editData?.batch_id : []\">\n                                    </app-treeview-contentfolder>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"form-group col-md-12\">\n                                        <textarea name=\"\" id=\"\" placeholder=\"Enter Description\"\n                                                  formControlName=\"description\"\n                                                  style=\"width: 100%; height: 100px; padding: 4px\"></textarea>\n                                        <em class=\"error\"\n                                            *ngIf=\"!resourceform.get('description').valid && (resourceform.get('description').dirty || resourceform.get('description').touched)\">Description\n                                            is required</em>\n                                    </div>\n                                    <div class=\"col-md-6 form-group align-self-center\">\n                                        <div class=\"col-12\" style=\"position: relative; font-size: 15px; left: 0.4rem\">\n                                            <input type=\"checkbox\" class=\"form-check-input cursor\" id=\"download\"\n                                                   formControlName=\"downloadContent\"><label for=\"download\">Download\n                                            Content</label>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6 form-group\">\n                                        <tag-input\n                                                formControlName=\"tag\"\n                                                [secondaryPlaceholder]=\"'Enter tags'\"\n                                                [placeholder]=\"'Add tags'\"\n                                                [editable]='true'\n                                                [clearOnBlur]=\"true\"\n                                                [addOnPaste]=\"true\"\n                                                [addOnBlur]=\"true\"\n                                                theme='bootstrap'\n                                        ></tag-input>\n                                    </div>\n                                    <!--                                    <div style=\"max-height: 100px; overflow: hidden\" *ngFor=\"let list of tagData\" class=\"chip mr-1 mb-1\">{{list.tag_name}}<span class=\"closebtn\" onclick=\"this.parentElement.style.display='none'\">&times;</span>-->\n                                    <!--                                    </div>-->\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-12\" *ngIf=\"pdfpath[0].original_image_url == undefined\">\n                                    <div class=\"col-md-12 px-0 d-flex justify-content-between\">\n                                        <h4 style=\"color: black; font-weight: bold\">Source Link</h4>\n                                        <i *ngIf=\"!editSourceLink\" class=\"fa fa-edit f-22px ml-3 cursor\"\n                                           (click)=\"editPrimaryLink()\"></i>\n                                    </div>\n                                    <app-source-link [setHeight]=\"false\" [showWithIcon]=\"false\" *ngIf=\"!editSourceLink\"\n                                                     [pdfPath]=\"pdfpath[0]\"></app-source-link>\n\n                                    <div *ngIf=\"editSourceLink\"\n                                         class=\"col-md-12 d-flex justify-content-center align-items-center p-4 link-card\">\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editLinkVal\"\n                                               [ngModelOptions]=\"{standalone: true}\" placeholder=\"Source Link\">\n                                        <i class=\"fa fa-check-circle color-green fa-2x ml-3 cursor\"\n                                           (click)=\"updatePrimaryLink('icon')\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\" *ngIf=\"pdfpath[0].original_image_url != undefined\">\n                                    <div class=\"form-group card-resource ml-4\"\n                                         *ngFor=\"let file of pdfpath; let i= index\">\n                                        <div class=\"delete-icon w-100\" *ngIf=\"pdfpath.length > 0\">\n                                            <img class=\"img-path\" src=\"assets/images/ristaschool/resource.png\"\n                                                 title=\"{{file.image}}\" alt=\"\" (click)=\"viewDetail(file)\">\n                                            <!--                                        <i  class=\"fa fa-times close-button\" title=\"close\" (click)=\"deletePdf(i)\"></i>-->\n                                            <br/>\n                                            <h6 class=\"mt-2 classresource\">{{file.image}}</h6>\n                                        </div>\n                                        <div class=\"row mt-5\">\n                                            <div class=\"col-md-6\">\n                                                <button class=\"btn btn-primary col-md-12\" (click)=\"pdfUpload()\"><i\n                                                        class=\"fa fa-upload\"></i> Upload\n                                                </button>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <button class=\"btn btn-outline-primary col-md-12\"\n                                                        (click)=\"viewDetail(file)\">Preview\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"pdfpath.length == 0\">\n                                        <input accept=\".pdf\" style=\"display: none\" type=\"file\" #attachments\n                                               (change)=\"encodePdfFileAsURL($event, 1)\" #hiddenfileinput>\n                                        <img class=\"img-path cursor\" src=\"assets/images/pdf-icons/Group 15864@2x.png\"\n                                             title=\"Upload PDF\" alt=\"\" type=\"file\"\n                                             aria-describedby=\"inputGroupFileAddon01\"\n                                             (click)=\"hiddenfileinput.click()\"><br/>\n                                        <h6>Upload Files</h6>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"mx-3\">\n                            <app-other-link id=\"otherLink\" [arrayValue]=\"resourceArray\"\n                                            [titleName]=\"'Additional resource links'\"></app-other-link>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #pdf let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body mb-5\">\n        <div class=\"row\">\n            <h3 class=\"col-md-11 px-3 py-2\">Add Resources</h3>\n            <div class=\"col-md-1 pull-right\">\n                <i class=\"fa fa-close pull-right\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"onsave()\"></i>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div style=\"min-height: 120px\">\n                    <h4 style=\"text-align: center;margin-top: 2rem; font-weight: bold\">Upload</h4>\n                    <p style=\"text-align: center\">Upload resources as a Image, Video, Voice or PDF Format and proceed to\n                        assign it to your Students.</p>\n                </div>\n                <div *ngIf=\"pdflinks == ''\" class=\"d-flex justify-content-center\">\n                    <input accept=\".pdf\" style=\"display: none\" type=\"file\" (change)=\"encodePdfFileAsURL($event, 1)\"\n                           #hiddenfileinput>\n                    <button class=\"btn btn-primary\" type=\"file\" aria-describedby=\"inputGroupFileAddon01\"\n                            (click)=\"hiddenfileinput.click()\">Upload PDF\n                    </button>\n                </div>\n                <!--                <div *ngIf=\"pdfpath == ''\" class=\"d-flex justify-content-center\">-->\n                <!--                    <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" data-dismiss=\"bulkmodal\"  (click)=\"uploadlink()\" class=\"btn btn-primary mt-3\">Link</button>-->\n                <!--                </div>-->\n            </div>\n        </div>\n    </div>\n    <!--    </div>-->\n    <!-- Container-fluid Ends-->\n</ng-template>\n<ng-template #linkArray let-c=\"close\" let-d=\"dismiss\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Add Link</h4>\n            <i class=\"fa fa-close\" style=\"cursor: pointer\" data-dismiss=\"modal\"></i>\n        </div>\n        <form [formGroup]=\"resourceform\">\n            <div class=\"modal-body\" formArrayName=\"repeatlink\"\n                 *ngFor=\"let list of resourceform.get('repeatlink')['controls']; let i=index\">\n                <div [formGroupName]=\"i\">\n                    <div class=\"input-group\">\n                        <input type=\"link\" formControlName=\"link\" class=\"form-control\" aria-label=\"Recipient's username\"\n                               placeholder=\"Add Link here\" aria-describedby=\"basic-addon2\">\n                        <div class=\"input-group-append\">\n                                <span class=\"input-group-text\" id=\"basic-addon2\">\n                                    <i class=\"fa fa-plus\" (click)=\"addarray()\"></i>\n                                </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"submitlink()\">Submit\n                </button>\n            </div>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #viewPdf let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-12 modal-header\">\n                    <h4 class=\"modal-title\">{{pdfName}}</h4>\n                    <p class=\"text-right\">\n                        <i class=\"fa fa-close fa-2x\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"close()\"></i>\n                    </p>\n                </div>\n                <div class=\"col-md-12\">\n                    <pdf-viewer [src]=\"pdfTemplate\" style=\"display: block; height: 100vh;\"></pdf-viewer>\n                </div>\n            </div>\n        </div>\n        <!-- Container-fluid Ends-->\n    </div>\n</ng-template>\n<ng-template #uploadPdf let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Upload PDF</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5>Are you sure want to upload because previously uploaded pdf & data will be removed</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"close()\">Cancel</button>\n        <input accept=\".pdf\" style=\"display: none\" type=\"file\" #attachmentsnew (change)=\"encodePdfFileAsURL($event, 1)\"\n               #hiddenfileinput>\n        <button class=\"btn btn-primary\" type=\"file\" aria-describedby=\"inputGroupFileAddon01\"\n                (click)=\"hiddenfileinput.click()\">Confirm\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #assignContentToClass let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Assign Content</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5>\n                    <span>Do you want to assign this content to the Class {{contentCreatedForm != 'class' ? 'or Content Folder' : ''}}</span>?\n                </h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"dontAssign()\">No</button>\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"assignContent()\"\n        >Yes\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #assignTemplate let-c=\"close\" let-d=\"dismiss\">\n    <app-confirm-content-assign\n            [classData]=\"classDetails\"\n            [contentDetails]=\"assignData\"\n            (closePopUp)=\"closeAssignPopUp()\"\n    >\n    </app-confirm-content-assign>\n</ng-template>\n", styles: [".container {\n  display: block;\n}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.ClassService }, { type: i4.CreatorService }, { type: i5.CommonDataService }, { type: i6.ToastrService }, { type: i7.CommonService }, { type: i8.AuthService }, { type: i9.SchoolService }, { type: i10.DomSanitizer }, { type: i1.Router }, { type: i11.ValidationService }, { type: i12.ConfigurationService }, { type: i13.NgbModal }, { type: i14.DatePipe }, { type: i15.NewsubjectService }], { treeviewComponent: [{
            type: ViewChild,
            args: [TreeviewComponent, { static: false }]
        }], addLink: [{
            type: ViewChild,
            args: ['linkArray']
        }], myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }], Content: [{
            type: ViewChild,
            args: ['pdf']
        }], viewPdf: [{
            type: ViewChild,
            args: ['viewPdf']
        }], attachment: [{
            type: ViewChild,
            args: ['attachments']
        }], attachment1: [{
            type: ViewChild,
            args: ['attachments1']
        }], uploadPdf: [{
            type: ViewChild,
            args: ['uploadPdf']
        }], assignContentToClass: [{
            type: ViewChild,
            args: ['assignContentToClass']
        }], assignTemplate: [{
            type: ViewChild,
            args: ['assignTemplate']
        }], addBranchTemp: [{
            type: ViewChild,
            args: ['addBranch']
        }], treeviewCompoent: [{
            type: ViewChild,
            args: [TreeviewContentfolderComponent, { static: false }]
        }], child: [{
            type: ViewChild,
            args: [TreeviewComponent, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddResourcesComponent, { className: "AddResourcesComponent" }); })();
//# sourceMappingURL=add-resources.component.js.map