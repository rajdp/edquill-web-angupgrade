import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/School.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "@angular/platform-browser";
import * as i5 from "../../../shared/service/auth.service";
import * as i6 from "../../../shared/service/common.service";
import * as i7 from "../../../shared/service/common-data.service";
import * as i8 from "../../../shared/service/teacher.service";
import * as i9 from "@angular/router";
import * as i10 from "../../../shared/service/nav.service";
import * as i11 from "ngx-toastr";
import * as i12 from "../../../shared/service/creator.service";
import * as i13 from "../../../shared/service/class.service";
import * as i14 from "../../../shared/service/newsubject.service";
import * as i15 from "@angular/common";
import * as i16 from "../../corporateschool/emptyschool/emptyschool.component";
const _c0 = ["content"];
const _c1 = ["viewdetails"];
const _c2 = ["addAssetModal"];
const _c3 = ["assignment"];
function ListHomeComponent_section_1_button_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵelement(1, "i", 36);
    i0.ɵɵtext(2, " Add");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/class/create-class/add");
} }
function ListHomeComponent_section_1_div_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38)(2, "button", 39);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function ListHomeComponent_section_1_div_40_figure_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 48);
    i0.ɵɵelementEnd();
} }
function ListHomeComponent_section_1_div_40_figure_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const class_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + class_r5.profile_url), i0.ɵɵsanitizeUrl);
} }
function ListHomeComponent_section_1_div_40_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 46);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const class_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, class_r5.start_date, "MM/dd/yyyy"));
} }
function ListHomeComponent_section_1_div_40_span_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 46);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const class_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, class_r5.end_date, "MM/dd/yyyy"));
} }
function ListHomeComponent_section_1_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 11)(2, "div", 41)(3, "div", 9)(4, "div", 42);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_div_40_Template_div_click_4_listener() { const i_r4 = i0.ɵɵrestoreView(_r3).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.enterList(i_r4)); });
    i0.ɵɵtemplate(5, ListHomeComponent_section_1_div_40_figure_5_Template, 2, 0, "figure", 6)(6, ListHomeComponent_section_1_div_40_figure_6_Template, 2, 1, "figure", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 43)(8, "h4", 44)(9, "span", 45);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "br");
    i0.ɵɵelementStart(12, "small");
    i0.ɵɵtext(13, "Created By ");
    i0.ɵɵelementStart(14, "span", 46);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "p")(17, "small");
    i0.ɵɵtext(18, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 46);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "p")(22, "small");
    i0.ɵɵtext(23, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(24, ListHomeComponent_section_1_div_40_span_24_Template, 3, 4, "span", 47);
    i0.ɵɵtext(25, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(26, "small");
    i0.ɵɵtext(27, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(28, ListHomeComponent_section_1_div_40_span_28_Template, 3, 4, "span", 47);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const class_r5 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", class_r5.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", class_r5.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", class_r5.class_name, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(class_r5.teacher_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(class_r5.subject_name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", class_r5.start_date != "0000-00-00");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", class_r5.end_date != "0000-00-00");
} }
function ListHomeComponent_section_1_button_51_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_button_51_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.upload()); });
    i0.ɵɵelement(1, "i", 36);
    i0.ɵɵtext(2, " Add");
    i0.ɵɵelementEnd();
} }
function ListHomeComponent_section_1_div_78_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38)(2, "button", 39);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function ListHomeComponent_section_1_div_80_figure_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 53);
    i0.ɵɵelementEnd();
} }
function ListHomeComponent_section_1_div_80_figure_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assign_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + assign_r8.profile_url), i0.ɵɵsanitizeUrl);
} }
function ListHomeComponent_section_1_div_80_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "(PDF)");
    i0.ɵɵelementEnd();
} }
function ListHomeComponent_section_1_div_80_small_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "(TEXT)");
    i0.ɵɵelementEnd();
} }
function ListHomeComponent_section_1_div_80_span_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 46);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assign_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, assign_r8.start_date, "MM/dd/yyyy"));
} }
function ListHomeComponent_section_1_div_80_span_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 46);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assign_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, assign_r8.end_date, "MM/dd/yyyy"));
} }
function ListHomeComponent_section_1_div_80_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 11)(2, "div", 41)(3, "div", 9)(4, "div", 51);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_div_80_Template_div_click_4_listener() { const assign_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.Preview(assign_r8, assign_r8.content_type)); });
    i0.ɵɵtemplate(5, ListHomeComponent_section_1_div_80_figure_5_Template, 2, 0, "figure", 6)(6, ListHomeComponent_section_1_div_80_figure_6_Template, 2, 1, "figure", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 43)(8, "h4", 44)(9, "span", 45);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "b", 52);
    i0.ɵɵtemplate(12, ListHomeComponent_section_1_div_80_small_12_Template, 2, 0, "small", 6)(13, ListHomeComponent_section_1_div_80_small_13_Template, 2, 0, "small", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "br");
    i0.ɵɵelementStart(15, "small");
    i0.ɵɵtext(16, "Assigned By ");
    i0.ɵɵelementStart(17, "span", 46);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "p")(20, "small");
    i0.ɵɵtext(21, "Assigned To : ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 46);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "p")(25, "small");
    i0.ɵɵtext(26, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span", 46);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "p")(30, "small");
    i0.ɵɵtext(31, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(32, ListHomeComponent_section_1_div_80_span_32_Template, 3, 4, "span", 47);
    i0.ɵɵtext(33, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(34, "small");
    i0.ɵɵtext(35, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(36, ListHomeComponent_section_1_div_80_span_36_Template, 3, 4, "span", 47);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const assign_r8 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", assign_r8.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", assign_r8.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", assign_r8.content_name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", assign_r8.content_format == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", assign_r8.content_format == 3);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(assign_r8.teacher_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(assign_r8.class_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(assign_r8.subject_name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", assign_r8.start_date != "0000-00-00");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", assign_r8.end_date != "0000-00-00");
} }
function ListHomeComponent_section_1_button_91_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_button_91_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showAddAsset()); });
    i0.ɵɵelement(1, "i", 54);
    i0.ɵɵtext(2, " Add");
    i0.ɵɵelementEnd();
} }
function ListHomeComponent_section_1_div_118_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38)(2, "button", 39);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function ListHomeComponent_section_1_div_119_figure_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 56);
    i0.ɵɵelementEnd();
} }
function ListHomeComponent_section_1_div_119_figure_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assess_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + assess_r11.profile_url), i0.ɵɵsanitizeUrl);
} }
function ListHomeComponent_section_1_div_119_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "(PDF)");
    i0.ɵɵelementEnd();
} }
function ListHomeComponent_section_1_div_119_small_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "(TEXT)");
    i0.ɵɵelementEnd();
} }
function ListHomeComponent_section_1_div_119_span_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 46);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assess_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, assess_r11.start_date, "MM/dd/yyyy"));
} }
function ListHomeComponent_section_1_div_119_span_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 46);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assess_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, assess_r11.end_date, "MM/dd/yyyy"));
} }
function ListHomeComponent_section_1_div_119_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 11)(2, "div", 41)(3, "div", 9)(4, "div", 55);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_div_119_Template_div_click_4_listener() { const assess_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.Preview(assess_r11, assess_r11.content_type)); });
    i0.ɵɵtemplate(5, ListHomeComponent_section_1_div_119_figure_5_Template, 2, 0, "figure", 6)(6, ListHomeComponent_section_1_div_119_figure_6_Template, 2, 1, "figure", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 43)(8, "h4", 44)(9, "span", 45);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "b", 52);
    i0.ɵɵtemplate(12, ListHomeComponent_section_1_div_119_small_12_Template, 2, 0, "small", 6)(13, ListHomeComponent_section_1_div_119_small_13_Template, 2, 0, "small", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "br");
    i0.ɵɵelementStart(15, "small");
    i0.ɵɵtext(16, "Assigned By ");
    i0.ɵɵelementStart(17, "span", 46);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "p")(20, "small");
    i0.ɵɵtext(21, "Assigned To : ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 46);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "p")(25, "small");
    i0.ɵɵtext(26, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span", 46);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "p")(30, "small");
    i0.ɵɵtext(31, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(32, ListHomeComponent_section_1_div_119_span_32_Template, 3, 4, "span", 47);
    i0.ɵɵtext(33, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(34, "small");
    i0.ɵɵtext(35, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(36, ListHomeComponent_section_1_div_119_span_36_Template, 3, 4, "span", 47);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const assess_r11 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", assess_r11.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", assess_r11.profile_url != "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", assess_r11.content_name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", assess_r11.content_format == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", assess_r11.content_format == 3);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(assess_r11.teacher_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(assess_r11.class_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(assess_r11.subject_name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", assess_r11.start_date != "0000-00-00");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", assess_r11.end_date != "0000-00-00");
} }
function ListHomeComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div", 11)(5, "div", 12)(6, "div", 13)(7, "div", 14)(8, "h4");
    i0.ɵɵtext(9, "Classes");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 15);
    i0.ɵɵtemplate(11, ListHomeComponent_section_1_button_11_Template, 3, 1, "button", 16);
    i0.ɵɵelement(12, "i", 17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 18)(14, "div", 19)(15, "button", 20);
    i0.ɵɵelement(16, "i", 21);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 22)(19, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_19_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.classFilter("1")); });
    i0.ɵɵtext(20, "Upcoming Classes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_21_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.classFilter("2")); });
    i0.ɵɵtext(22, "In Progress Classes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_23_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.classFilter("3")); });
    i0.ɵɵtext(24, "Completed Classes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_25_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.classFilter("0")); });
    i0.ɵɵtext(26, "All Classes");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 19)(28, "button", 24);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 25)(31, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_31_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.classSort("1")); });
    i0.ɵɵtext(32, "Earliest First");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_33_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.classSort("2")); });
    i0.ɵɵtext(34, "Name A-Z");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_35_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.classSort("3")); });
    i0.ɵɵtext(36, "Name Z-A");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(37, "div", 26);
    i0.ɵɵtemplate(38, ListHomeComponent_section_1_div_38_Template, 4, 0, "div", 27);
    i0.ɵɵelementStart(39, "div", 9);
    i0.ɵɵtemplate(40, ListHomeComponent_section_1_div_40_Template, 29, 7, "div", 28);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(41, "div", 8)(42, "div", 9)(43, "div", 10)(44, "div", 11)(45, "div", 12)(46, "div", 13)(47, "div", 14)(48, "h4");
    i0.ɵɵtext(49, "Assignments");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "div", 15);
    i0.ɵɵtemplate(51, ListHomeComponent_section_1_button_51_Template, 3, 0, "button", 29);
    i0.ɵɵelement(52, "i", 17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "div", 18)(54, "div", 19)(55, "button", 30);
    i0.ɵɵelement(56, "i", 21);
    i0.ɵɵtext(57);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "div", 22)(59, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_59_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assignmentFilter("1")); });
    i0.ɵɵtext(60, "Upcoming Assignments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_61_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assignmentFilter("2")); });
    i0.ɵɵtext(62, "In Progress Assignments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_63_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assignmentFilter("3")); });
    i0.ɵɵtext(64, "Completed Assignments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_65_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assignmentFilter("0")); });
    i0.ɵɵtext(66, "All Assignments");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(67, "div", 19)(68, "button", 31);
    i0.ɵɵtext(69);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "div", 32)(71, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_71_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assignmentSort("1")); });
    i0.ɵɵtext(72, "Earliest First");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_73_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assignmentSort("2")); });
    i0.ɵɵtext(74, "Name A-Z");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_75_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assignmentSort("3")); });
    i0.ɵɵtext(76, "Name Z-A");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(77, "div", 26);
    i0.ɵɵtemplate(78, ListHomeComponent_section_1_div_78_Template, 4, 0, "div", 27);
    i0.ɵɵelementStart(79, "div", 9);
    i0.ɵɵtemplate(80, ListHomeComponent_section_1_div_80_Template, 37, 10, "div", 28);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(81, "div", 8)(82, "div", 9)(83, "div", 10)(84, "div", 11)(85, "div", 12)(86, "div", 13)(87, "div", 14)(88, "h4");
    i0.ɵɵtext(89, "Quiz");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(90, "div", 15);
    i0.ɵɵtemplate(91, ListHomeComponent_section_1_button_91_Template, 3, 0, "button", 29);
    i0.ɵɵelement(92, "i", 17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(93, "div", 18)(94, "div", 19)(95, "button", 20);
    i0.ɵɵelement(96, "i", 21);
    i0.ɵɵtext(97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(98, "div", 22)(99, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_99_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assessmentFilter("1")); });
    i0.ɵɵtext(100, "Upcoming Quiz");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_101_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assessmentFilter("2")); });
    i0.ɵɵtext(102, "In Progress Quiz");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(103, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_103_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assessmentFilter("3")); });
    i0.ɵɵtext(104, "Completed Quiz");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(105, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_105_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assessmentFilter("0")); });
    i0.ɵɵtext(106, "All Quiz");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(107, "div", 19)(108, "button", 33);
    i0.ɵɵtext(109);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(110, "div", 34)(111, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_111_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assessmentSort("1")); });
    i0.ɵɵtext(112, "Earliest First");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(113, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_113_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assessmentSort("2")); });
    i0.ɵɵtext(114, "Name A-Z");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(115, "a", 23);
    i0.ɵɵlistener("click", function ListHomeComponent_section_1_Template_a_click_115_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assessmentSort("3")); });
    i0.ɵɵtext(116, "Name Z-A");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(117, "div", 26);
    i0.ɵɵtemplate(118, ListHomeComponent_section_1_div_118_Template, 4, 0, "div", 27)(119, ListHomeComponent_section_1_div_119_Template, 37, 10, "div", 28);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", ctx_r1.allowClass);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.classbutton, " ");
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r1.sortButton);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r1.classesDetails == "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.classesDetails);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", ctx_r1.allowAdd);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.assignButton, " ");
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r1.assignSortButton);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r1.assignmentsDetails == "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.assignmentsDetails);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", ctx_r1.allowAdd);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.assessButton, " ");
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r1.assessSortButton);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r1.assessmentDetails == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.assessmentDetails);
} }
function ListHomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
function ListHomeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "h4", 58)(2, "b");
    i0.ɵɵtext(3, "Add Assessment");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "i", 59);
    i0.ɵɵlistener("click", function ListHomeComponent_ng_template_3_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 60)(6, "div", 9)(7, "div", 61);
    i0.ɵɵelement(8, "img", 62);
    i0.ɵɵelementStart(9, "h4", 63);
    i0.ɵɵtext(10, "Create From PDF");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "h5", 63);
    i0.ɵɵtext(12, "Upload Assessment as a PDF format and proceed to assign it to your students");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 64)(14, "input", 65, 2);
    i0.ɵɵlistener("change", function ListHomeComponent_ng_template_3_Template_input_change_14_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.encodePdfFileAsURL($event, "assessment")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 66);
    i0.ɵɵlistener("click", function ListHomeComponent_ng_template_3_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r12); const hiddenfileinput5_r13 = i0.ɵɵreference(15); return i0.ɵɵresetView(hiddenfileinput5_r13.click()); });
    i0.ɵɵtext(17, "Browse");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 67);
    i0.ɵɵelement(19, "img", 68);
    i0.ɵɵelementStart(20, "h4", 63);
    i0.ɵɵtext(21, "Create From Scratch");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "h5", 63);
    i0.ɵɵtext(23, "Write your assessment content and proceed to assign it to your student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 69);
    i0.ɵɵlistener("click", function ListHomeComponent_ng_template_3_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openText("assessment")); });
    i0.ɵɵtext(25, "Create Content");
    i0.ɵɵelementEnd()()()();
} }
function ListHomeComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "h4", 58)(2, "b");
    i0.ɵɵtext(3, "Add Assignment");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "i", 59);
    i0.ɵɵlistener("click", function ListHomeComponent_ng_template_5_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 60)(6, "div", 9)(7, "div", 61);
    i0.ɵɵelement(8, "img", 62);
    i0.ɵɵelementStart(9, "h4", 63);
    i0.ɵɵtext(10, "Create From PDF");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "h5", 63);
    i0.ɵɵtext(12, "Upload Assignment as a PDF format and proceed to assign it to your students");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 64)(14, "input", 65, 3);
    i0.ɵɵlistener("change", function ListHomeComponent_ng_template_5_Template_input_change_14_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.encodePdfFileAsURL($event, "assignment")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 70);
    i0.ɵɵlistener("click", function ListHomeComponent_ng_template_5_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r14); const hiddenfileinput_r15 = i0.ɵɵreference(15); return i0.ɵɵresetView(hiddenfileinput_r15.click()); });
    i0.ɵɵtext(17, "Browse");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 67);
    i0.ɵɵelement(19, "img", 68);
    i0.ɵɵelementStart(20, "h4", 63);
    i0.ɵɵtext(21, "Create From Scratch");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "h5", 63);
    i0.ɵɵtext(23, "Write your assignment content and proceed to assign it to your student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 64)(25, "button", 69);
    i0.ɵɵlistener("click", function ListHomeComponent_ng_template_5_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openText("assignment")); });
    i0.ɵɵtext(26, "Create Content");
    i0.ɵɵelementEnd()()()()();
} }
export class ListHomeComponent {
    constructor(brandservices, config, confi, sanitizer, modalService, auth, common, commondata, teacher, route, navServices, toastr, creatorService, classes, subject) {
        this.brandservices = brandservices;
        this.config = config;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.auth = auth;
        this.common = common;
        this.commondata = commondata;
        this.teacher = teacher;
        this.route = route;
        this.navServices = navServices;
        this.toastr = toastr;
        this.creatorService = creatorService;
        this.classes = classes;
        this.subject = subject;
        this.imgUrl = this.confi.getimgUrl();
        config.backdrop = 'static';
        config.keyboard = false;
        this.allowAdd = true;
        this.allowEdit = true;
        this.allowClass = true;
        this.webhost = this.confi.getimgUrl();
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.auth.setSessionData('resourceAccess', false);
        this.auth.setSessionData('browseAll', false);
        this.auth.removeSessionData('classData');
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('readonly_data');
        this.auth.removeSessionData('readonly_startdate');
        this.auth.removeSessionData('backOption');
        this.teacherType = this.auth.getSessionData('teacher_type');
        this.schoolID = this.auth.getSessionData('school_id');
        this.subject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.route.url.includes('list-home')) {
                    this.init(params);
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
    }
    ngOnInit() {
        this.commondata.showLoader(false);
        this.openmenu = false;
        this.schoolID = this.auth.getSessionData('school_id');
        // this.creatorService.changeViewList(this.openmenu);
        // this.navServices.collapseSidebar = false;
        this.allowDropDown = false;
        this.subject.allowSchoolChange(this.allowDropDown);
    }
    searchUpdate() {
        this.classType = '2';
        this.classbutton = 'In Progress';
        this.assignType = '2';
        this.assignButton = 'In Progress';
        this.assessType = '2';
        this.assessButton = 'In Progress';
        this.classSortType = '1';
        this.assignSortType = '1';
        this.assessSortType = '1';
        this.classClicked = '0';
        this.assignClicked = '0';
        this.assessClicked = '0';
        this.sortButton = 'Earliest';
        this.assignSortButton = 'Earliest';
        this.assessSortButton = 'Earliest';
    }
    close() {
        this.modalRef.close();
    }
    init(id) {
        this.schoolID = this.auth.getSessionData('school_id');
        this.searchUpdate();
        if (this.auth.getRoleId() == '6' && this.auth.getSessionData('school_name') == '') {
        }
        else {
            this.schoolListDetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        }
        this.dashboardClassList();
        this.dashboardAssignmentList();
        this.dashboardAssessmentList();
        if ((this.auth.getRoleId() == '4') && this.auth.getSessionData('teacher_type') == '0') {
            if (this.schoolListDetails.permissions[4].permission[0].status == 1) {
                this.allowAdd = true;
            }
            else if (this.schoolListDetails.permissions[4].permission[0].status == 0) {
                this.allowAdd = false;
            }
            if (this.schoolListDetails.permissions[4].permission[1].status == 1) {
                this.allowEdit = true;
            }
            else if (this.schoolListDetails.permissions[4].permission[1].status == 0) {
                this.allowEdit = false;
            }
            if (this.schoolListDetails.permissions[6].permission[0].status == 1) {
                this.allowClass = true;
            }
            else if (this.schoolListDetails.permissions[6].permission[0].status == 0) {
                this.allowClass = false;
            }
        }
        else {
            this.allowAdd = true;
            this.allowEdit = true;
            this.allowClass = true;
        }
    }
    showAddAsset() {
        this.modalRef = this.modalService.open(this.addAsset, { size: 'lg', backdrop: 'static' });
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    classFilter(type) {
        this.classClicked = '1';
        if (type == '0') {
            this.classType = '0';
            this.classbutton = 'All';
        }
        else if (type == '1') {
            this.classType = '1';
            this.classbutton = 'Upcoming';
        }
        else if (type == '2') {
            this.classType = '2';
            this.classbutton = 'In Progress';
        }
        else if (type == '3') {
            this.classType = '3';
            this.classbutton = 'Completed';
        }
        this.dashboardClassList();
    }
    classSort(type) {
        if (type == '1') {
            this.classSortType = '1';
            this.sortButton = 'Earliest';
        }
        else if (type == '2') {
            this.classSortType = '2';
            this.sortButton = 'Name A-Z';
        }
        else if (type == '3') {
            this.classSortType = '3';
            this.sortButton = 'Name Z-A';
        }
        this.dashboardClassList();
    }
    assignmentFilter(type) {
        this.assignClicked = '1';
        if (type == '0') {
            this.assignType = '0';
            this.assignButton = 'All ';
        }
        else if (type == '1') {
            this.assignType = '1';
            this.assignButton = 'Upcoming';
        }
        else if (type == '2') {
            this.assignType = '2';
            this.assignButton = 'In Progress';
        }
        else if (type == '3') {
            this.assignType = '3';
            this.assignButton = 'Completed';
        }
        this.dashboardAssignmentList();
    }
    assignmentSort(type) {
        if (type == '1') {
            this.assignSortType = '1';
            this.assignSortButton = 'Earliest';
        }
        else if (type == '2') {
            this.assignSortType = '2';
            this.assignSortButton = 'Name A-Z';
        }
        else if (type == '3') {
            this.assignSortType = '3';
            this.assignSortButton = 'Name Z-A';
        }
        this.dashboardAssignmentList();
    }
    assessmentFilter(type) {
        this.assessClicked = '1';
        if (type == '0') {
            this.assessType = '0';
            this.assessButton = 'All';
        }
        else if (type == '1') {
            this.assessType = '1';
            this.assessButton = 'Upcoming';
        }
        else if (type == '2') {
            this.assessType = '2';
            this.assessButton = 'In Progress';
        }
        else if (type == '3') {
            this.assessType = '3';
            this.assessButton = 'Completed';
        }
        this.dashboardAssessmentList();
    }
    assessmentSort(type) {
        if (type == '1') {
            this.assessSortType = '1';
            this.assessSortButton = 'Earliest';
        }
        else if (type == '2') {
            this.assessSortType = '2';
            this.assessSortButton = 'Name A-Z';
        }
        else if (type == '3') {
            this.assessSortType = '3';
            this.assessSortButton = 'Name Z-A';
        }
        this.dashboardAssessmentList();
    }
    upload() {
        this.modalRef = this.modalService.open(this.addAssignment, { size: 'lg', backdrop: 'static' });
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    showModal() {
        this.modalRef = this.modalService.open(this.modalContent);
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
    open(content) {
        this.modalService.open(content);
    }
    onSave() {
        this.modalRef.close();
    }
    openText(type) {
        if (type == 'assignment') {
            this.auth.setSessionData('textType', 'assignment');
            this.route.navigate(['content-text-resource/text-assignment/add']);
            this.close();
        }
        else if (type == 'assessment') {
            this.auth.setSessionData('textType', 'assessment');
            this.route.navigate(['content-text-resource/text-assignment/add']);
            this.close();
        }
    }
    deleteConfirm() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            selected_user_id: this.deleteUser.user_id,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.brandservices.getSchoolList(data).subscribe((successData) => {
            this.deleteConfirmSuccess(successData);
        }, (error) => {
            this.deleteConfirmFailure(error);
        });
    }
    deleteConfirmSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.onSave();
        }
    }
    deleteConfirmFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }
    dashboardClassList() {
        let teacherid = '';
        if (this.auth.getRoleId() == '2' || this.auth.getRoleId() == '6') {
            teacherid = '0';
        }
        else if (this.auth.getRoleId() == '4') {
            teacherid = this.auth.getUserId();
        }
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolID,
            teacher_id: teacherid,
            type: this.classType,
            sort: this.classSortType
        };
        this.teacher.classDashboardList(data).subscribe((successData) => {
            this.dashboardClassListSuccess(successData);
        }, (error) => {
            this.dashboardClassListFailure(error);
        });
    }
    dashboardClassListSuccess(successData) {
        if (successData.IsSuccess) {
            this.classesDetails = successData.ResponseObject;
            if (this.classClicked == '1') {
            }
            else {
                if (this.classType == '2' && this.classesDetails.length == 0) {
                    this.classType = '1';
                    this.classbutton = 'Upcoming';
                    this.dashboardClassList();
                }
                else if (this.classType == '1' && this.classesDetails.length == 0) {
                    this.classType = '0';
                    this.classbutton = 'All';
                    this.dashboardClassList();
                }
            }
        }
    }
    dashboardClassListFailure(error) {
        console.log(error, 'error');
    }
    dashboardAssignmentList() {
        let teacherid = '';
        if (this.auth.getRoleId() == '2' || this.auth.getRoleId() == '6') {
            teacherid = '0';
        }
        else if (this.auth.getRoleId() == '4') {
            teacherid = this.auth.getUserId();
        }
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolID,
            teacher_id: teacherid,
            type: this.assignType,
            sort: this.assignSortType
        };
        this.teacher.assignmentDashboardList(data).subscribe((successData) => {
            this.dashboardAssignmentSuccess(successData);
        }, (error) => {
            this.dashboardAssignmentFailure(error);
        });
    }
    dashboardAssignmentSuccess(successData) {
        if (successData.IsSuccess) {
            this.assignmentsDetails = successData.ResponseObject;
            if (this.assignClicked == '1') {
            }
            else {
                if (this.assignType == '2' && this.assignmentsDetails.length == 0) {
                    this.assignType = '1';
                    this.assignButton = 'Upcoming';
                    this.dashboardAssignmentList();
                }
                else if (this.assignType == '1' && this.assignmentsDetails.length == 0) {
                    this.assignType = '0';
                    this.assignButton = 'All';
                    this.dashboardAssignmentList();
                }
            }
        }
    }
    dashboardAssignmentFailure(error) {
        console.log(error, 'error');
    }
    dashboardAssessmentList() {
        let teacherid = '';
        if (this.auth.getRoleId() == '2' || this.auth.getRoleId() == '6') {
            teacherid = '0';
        }
        else if (this.auth.getRoleId() == '4') {
            teacherid = this.auth.getUserId();
        }
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolID,
            teacher_id: teacherid,
            type: this.assessType,
            sort: this.assessSortType
        };
        this.teacher.assessmentDashboardList(data).subscribe((successData) => {
            this.dashboardAssessmentSuccess(successData);
        }, (error) => {
            this.dashboardAssessmentFailure(error);
        });
    }
    dashboardAssessmentSuccess(successData) {
        this.assessmentDetails = successData.ResponseObject;
        if (successData.IsSuccess) {
            if (this.assessClicked == '1') {
            }
            else {
                if (this.assessType == '2' && this.assessmentDetails.length == 0) {
                    this.assessType = '1';
                    this.assessButton = 'Upcoming';
                    this.dashboardAssessmentList();
                }
                else if (this.assessType == '1' && this.assessmentDetails.length == 0) {
                    this.assessType = '0';
                    this.assessButton = 'All';
                    this.dashboardAssessmentList();
                }
            }
        }
    }
    dashboardAssessmentFailure(error) {
        console.log(error, 'error');
    }
    encodePdfFileAsURL(event, type) {
        let images = [];
        let imageLength = event.target.files.length;
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const pdfDetails = event.target.files[i];
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
            this.pdfuploadFailure(error);
        });
    }
    pdfuploadSuccess(successData, type) {
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
            if (type == 'assessment') {
                this.route.navigate(['repository/create-assessment/add']);
                this.auth.setSessionData('upload-type', 'assessment');
            }
            else if (type == 'assignment') {
                this.route.navigate(['repository/create-assessment/add']);
                this.auth.setSessionData('upload-type', 'assignment');
            }
            this.modalRef.close();
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    pdfuploadFailure(error) {
        console.log(error, 'error');
    }
    enterList(id) {
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolID,
            class_id: this.classesDetails[id].class_id,
            grade: [this.classesDetails[id].grade]
        };
        this.classes.classDetails(data).subscribe((successData) => {
            this.enterListSuccess(successData);
        }, (error) => {
            this.enterListFailure(error);
        });
    }
    enterListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.detailData = successData.ResponseObject;
            this.auth.setSessionData('classView', true);
            this.auth.setSessionData('studentlist', JSON.stringify(this.detailData[0].students));
            this.auth.setSessionData('studentlist1', JSON.stringify(this.detailData[0].students));
            this.auth.setSessionData('card-data', JSON.stringify(this.detailData));
            this.auth.setSessionData('editclass', JSON.stringify(successData.ResponseObject));
            this.auth.setSessionData('updatedStudent', 1);
            if (this.detailData[0].classDate_status == '2' || this.detailData[0].classDate_status == '5') {
                if (this.allowClass == false) {
                    this.auth.setSessionData('readonly_startdate', 'yes');
                    this.auth.setSessionData('readonly_data', 'true');
                }
                else {
                    this.auth.removeSessionData('readonly_startdate');
                    this.auth.removeSessionData('readonly_data');
                }
                if (this.detailData[0].class_status != '1') {
                    this.route.navigate(['/class/create-class/edit']);
                }
                else {
                    this.route.navigate(['/class/create-class/addEdit']);
                    this.auth.setSessionData('editclass', JSON.stringify(this.detailData));
                    this.auth.setSessionData('updatedStudent', 1);
                }
            }
            else if (this.detailData[0].classDate_status == '4') {
                this.route.navigate(['/class/list-class']);
            }
            else if (this.detailData[0].classDate_status == '3') {
                if (this.detailData[0].class_status == '1') {
                    this.auth.removeSessionData('readonly_startdate');
                    this.auth.removeSessionData('readonly_data');
                }
                else {
                    this.auth.setSessionData('readonly_startdate', 'yes');
                    if (this.auth.getRoleId() == '4' && this.teacherType == '0') {
                        this.auth.setSessionData('readonly_data', 'true');
                    }
                    else {
                        this.auth.removeSessionData('readonly_data');
                    }
                }
                this.route.navigate(['/class/create-class/edit']);
            }
        }
    }
    enterListFailure(error) {
        console.log(error, 'error');
    }
    Preview(event, type) {
        if (event.content_format == 1) {
            this.previewType = 'pdf';
        }
        else if (event.content_format == 3) {
            this.previewType = 'text';
        }
        this.auth.setSessionData('editresources', JSON.stringify(event));
        this.listDetails(event, type);
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
        if (this.previewType == 'pdf') {
            this.auth.setSessionData('preview', 'home');
            if (type == '1') {
                this.auth.setSessionData('preview_page', 'create_resources');
            }
            else if (type == '2') {
                this.auth.setSessionData('preview_page', 'create_assignments');
            }
            else if (type == '3') {
                this.auth.setSessionData('preview_page', 'create_assessments');
            }
            this.route.navigate(['repository/preview']);
        }
        else if (this.previewType == 'text') {
            this.auth.setSessionData('preview', 'home');
            this.auth.setSessionData('backOption', 'home');
            if (type == '1') {
                this.auth.setSessionData('preview_page', 'text_resources');
            }
            else if (type == '2') {
                this.auth.setSessionData('preview_page', 'text_assignments');
            }
            else if (type == '3') {
                this.auth.setSessionData('preview_page', 'text_assessments');
            }
            this.route.navigate(['repository/preview']);
            // this.route.navigate(['student-scratch/' + this.auth.getAccessToken() + '/' + this.auth.getUserId() + '/' + event.school_id + '/' + event.content_id + '/' + event.content_format + '/' + event.class_id + '/' + event.student_content_id + '/' + event.class_content_id + '/' + event.student_content_status]);
        }
    }
    static { this.ɵfac = function ListHomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListHomeComponent)(i0.ɵɵdirectiveInject(i1.SchoolService), i0.ɵɵdirectiveInject(i2.NgbModalConfig), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.DomSanitizer), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.CommonService), i0.ɵɵdirectiveInject(i7.CommonDataService), i0.ɵɵdirectiveInject(i8.TeacherService), i0.ɵɵdirectiveInject(i9.Router), i0.ɵɵdirectiveInject(i10.NavService), i0.ɵɵdirectiveInject(i11.ToastrService), i0.ɵɵdirectiveInject(i12.CreatorService), i0.ɵɵdirectiveInject(i13.ClassService), i0.ɵɵdirectiveInject(i14.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListHomeComponent, selectors: [["app-list-home"]], viewQuery: function ListHomeComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewDetailsContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addAsset = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addAssignment = _t.first);
        } }, decls: 7, vars: 2, consts: [["addAssetModal", ""], ["assignment", ""], ["hiddenfileinput5", ""], ["hiddenfileinput", ""], [1, "container-fluid"], ["class", "row list-card", 4, "ngIf"], [4, "ngIf"], [1, "row", "list-card"], [1, "col-12", "col-md-6", "col-lg-4", "mt-2"], [1, "row"], [1, "col-12", "mb-2"], [1, "card"], [1, "card-body", "small-screen-group-btn", "p-3"], [1, "row", "d-flex", "justify-content-between", "list-title"], [1, "col-7", "col-xl-6", "pt-2"], [1, "col-5", "col-xl-6", "d-flex", "justify-content-end"], ["type", "button", "class", "btn btn-primary mr-3", 3, "routerLink", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-ellipsis-v", "fa-2x", "mt-1"], [1, "row", "group-btn"], [1, "btn-group", "dropup"], ["data-toggle", "dropdown", 1, "col-12", "btn", "btn-primary", "dropdown-toggle"], ["aria-hidden", "true", 1, "fa", "fa-check-circle-o"], [1, "dropdown-menu"], [1, "dropdown-item", "dropdown-link", 3, "click"], ["type", "button", "id", "dropdownMenuButton", "aria-haspopup", "true", "aria-expanded", "false", "data-toggle", "dropdown", 1, "col-12", "btn", "btn-outline-primary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "col-12", "home-sec-scroll"], ["class", "row d-flex justify-content-center list-card mt-5", 4, "ngIf"], ["class", "col-12 mt-1", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-primary mr-3", 3, "click", 4, "ngIf"], ["data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle"], ["type", "button", "id", "dropdownMenuButton1", "aria-haspopup", "true", "aria-expanded", "false", "data-toggle", "dropdown", 1, "btn", "btn-outline-primary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenuButton2", "aria-haspopup", "true", "aria-expanded", "false", "data-toggle", "dropdown", 1, "col-12", "btn", "btn-outline-primary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton2", 1, "dropdown-menu"], ["type", "button", 1, "btn", "btn-primary", "mr-3", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "fa-hide"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-5"], [1, "col-8"], [1, "nodataList"], [1, "col-12", "mt-1"], [1, "card-body", "p-3"], ["title", "Enter Class", 1, "col-12", "mb-3", "school-img", "school-card-img", 3, "click"], [1, "col-12"], [1, "t-period"], [1, "font-weight-bold"], [1, "t-name", "font-weight-bold"], ["class", "t-name font-weight-bold", 4, "ngIf"], ["src", "assets/images/ristaschool/Mask Group 35.png", "alt", "", 1, "w-100"], ["alt", "", 1, "w-100", 3, "src"], ["type", "button", 1, "btn", "btn-primary", "mr-3", 3, "click"], ["title", "View Assignment", 1, "col-12", "mb-3", "school-img", "school-card-img", 3, "click"], [1, "contenttext"], ["src", "assets/images/ristaschool/option-writing-checkbox-concepts-survey.png", "alt", "", 1, "w-100"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "mr-2", "fa-hide"], ["title", "View Assessment", 1, "col-12", "mb-3", "school-img", "school-card-img", 3, "click"], ["src", "assets/images/ristaschool/assessment.png", "alt", "", 1, "w-100"], [1, "modal-header"], [1, "modal-title", "col-12", "text-center"], [1, "fa", "fa-close", 2, "cursor", "pointer", 3, "click"], [1, "modal-body"], [1, "col-6", "text-center", 2, "border-right", "1px solid #c4c4c4"], ["src", "assets/images/pdf-icons/Icon ionic-md-cloud-upload.png"], [1, "mt-3"], [1, "d-flex", "align-items-baseline"], ["accept", ".pdf", "type", "file", 2, "display", "none", 3, "change"], ["type", "file", "aria-describedby", "inputGroupFileAddon01", 1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"], [1, "col-6", "text-center"], ["src", "assets/images/pdf-icons/Icon material-library-books.png"], ["type", "button", 1, "btn", "btn-primary", "w-100", "mt-4", 3, "click"], ["type", "file", "aria-describedby", "inputGroupFileAddon01", 1, "btn", "btn-primary", "mt-4", "w-100", 3, "click"]], template: function ListHomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵtemplate(1, ListHomeComponent_section_1_Template, 120, 15, "section", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, ListHomeComponent_div_2_Template, 2, 0, "div", 6)(3, ListHomeComponent_ng_template_3_Template, 26, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(5, ListHomeComponent_ng_template_5_Template, 27, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length == 0);
        } }, dependencies: [i15.NgForOf, i15.NgIf, i9.RouterLink, i16.EmptyschoolComponent, i15.DatePipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListHomeComponent, [{
        type: Component,
        args: [{ selector: 'app-list-home', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n        <section class=\"row list-card\" *ngIf=\"schoolStatus.length != 0\">\n                <div class=\"col-12 col-md-6 col-lg-4 mt-2\">\n                        <div class=\"row\">\n                                <div class=\"col-12 mb-2\">\n                                        <div class=\"card\">\n                                                <div class=\"card-body small-screen-group-btn p-3\">\n                                                        <div class=\"row d-flex justify-content-between list-title\">\n                                                                <div class=\"col-7 col-xl-6 pt-2\">\n                                                                        <h4>Classes</h4>\n                                                                </div>\n                                                                <div class=\"col-5 col-xl-6 d-flex justify-content-end\">\n                                                                        <button *ngIf=\"allowClass\" type=\"button\"  class=\"btn btn-primary mr-3\" [routerLink]=\"'/class/create-class/add'\"><i class=\"fa fa-plus-circle fa-hide\" aria-hidden=\"true\"></i> Add</button>\n                                                                        <i class=\"fa fa-ellipsis-v fa-2x mt-1\" aria-hidden=\"true\"></i>\n                                                                </div>\n                                                        </div>\n                                                        <div class=\"row group-btn\">\n                                                                <div class=\"btn-group dropup\">\n                                                                        <button class=\"col-12 btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i> {{classbutton}} </button>\n                                                                            <div class=\"dropdown-menu\">\n                                                                                    <a class=\"dropdown-item dropdown-link\" (click)=\"classFilter('1')\">Upcoming Classes</a>\n                                                                                    <a class=\"dropdown-item dropdown-link\" (click)=\"classFilter('2')\">In Progress Classes</a>\n                                                                                    <a class=\"dropdown-item dropdown-link\" (click)=\"classFilter('3')\">Completed Classes</a>\n                                                                                    <a class=\"dropdown-item dropdown-link\" (click)=\"classFilter('0')\">All Classes</a>\n                                                                                </div>\n                                                                </div>\n                                                                <div class=\"btn-group dropup\">\n                                                                        <button type=\"button\" class=\"col-12 btn btn-outline-primary dropdown-toggle\" id=\"dropdownMenuButton\" aria-haspopup=\"true\" aria-expanded=\"false\" data-toggle=\"dropdown\">{{sortButton}}</button>\n                                                                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                                                                                <a class=\"dropdown-item dropdown-link\" (click)=\"classSort('1')\">Earliest First</a>\n                                                                                <a class=\"dropdown-item dropdown-link\" (click)=\"classSort('2')\">Name A-Z</a>\n                                                                                <a class=\"dropdown-item dropdown-link\" (click)=\"classSort('3')\">Name Z-A</a>\n                                                                        </div>\n                                                                </div>\n                                                        </div>\n                                                </div>\n                                        </div>\n                                </div>\n                                <div class=\"col-12 home-sec-scroll\">\n                                        <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"classesDetails==''\">\n                                                <div class=\"col-8\">\n                                                        <button class=\"nodataList\">No Data Available!</button>\n                                                </div>\n                                        </div>\n                                        <div class=\"row\">\n                                                <div class=\"col-12 mt-1\" *ngFor=\"let class of classesDetails ; let i = index\">\n                                                        <div class=\"card\">\n                                                                <div class=\"card-body p-3\">\n                                                                        <div class=\"row\">\n                                                                                <div class=\"col-12 mb-3 school-img school-card-img\" title=\"Enter Class\" (click)=\"enterList(i)\" >\n                                                                                        <figure *ngIf=\"class.profile_url == ''\">\n                                                                                                <img src=\"assets/images/ristaschool/Mask Group 35.png\" class=\"w-100\" alt=\"\">\n                                                                                        </figure>\n                                                                                        <figure *ngIf=\"class.profile_url != ''\">\n                                                                                                <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + class.profile_url)\" class=\"w-100\" alt=\"\">\n                                                                                        </figure>\n                                                                                </div>\n                                                                                <div class=\"col-12\">\n                                                                                        <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{class.class_name}} </span><br><small>Created By <span class=\"t-name font-weight-bold\">{{class.teacher_name}}</span></small> </h4>\n                                                                                        <p><small>Subject: </small> <span class=\"t-name font-weight-bold\">{{class.subject_name}}</span></p>\n                                                                                        <p><small>Start: </small> <span class=\"t-name font-weight-bold\" *ngIf=\"class.start_date != '0000-00-00'\">{{class.start_date|date:'MM/dd/yyyy'}}</span> &nbsp; &nbsp;\n                                                                                                <small>End: </small> <span class=\"t-name font-weight-bold\" *ngIf=\"class.end_date != '0000-00-00'\">{{class.end_date|date:'MM/dd/yyyy'}}</span>\n                                                                                        </p>\n                                                                                </div>\n                                                                        </div>\n                                                                </div>\n                                                        </div>\n                                                </div>\n                                        </div>\n                                </div>\n                        </div>\n                </div>\n                <div class=\"col-12 col-md-6 col-lg-4 mt-2\">\n                        <div class=\"row\">\n                                <div class=\"col-12 mb-2\">\n                                        <div class=\"card\">\n                                                <div class=\"card-body small-screen-group-btn p-3\">\n                                                        <div class=\"row d-flex justify-content-between list-title\">\n                                                                <div class=\"col-7 col-xl-6 pt-2\">\n                                                                        <h4>Assignments</h4>\n                                                                </div>\n                                                                <div class=\"col-5 col-xl-6 d-flex justify-content-end\">\n                                                                        <button *ngIf=\"allowAdd\" type=\"button\" class=\"btn btn-primary mr-3\" (click)=\"upload()\"><i class=\"fa fa-plus-circle fa-hide\" aria-hidden=\"true\"></i> Add</button>\n                                                                        <i class=\"fa fa-ellipsis-v fa-2x mt-1\" aria-hidden=\"true\"></i>\n                                                                </div>\n                                                        </div>\n                                        <div class=\"row group-btn\">\n                                                <div class=\"btn-group dropup\">\n                                                        <button class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i> {{assignButton}} </button>\n                                                        <div class=\"dropdown-menu\">\n                                                                <a class=\"dropdown-item dropdown-link\" (click)=\"assignmentFilter('1')\">Upcoming Assignments</a>\n                                                                <a class=\"dropdown-item dropdown-link\" (click)=\"assignmentFilter('2')\">In Progress Assignments</a>\n                                                                <a class=\"dropdown-item dropdown-link\" (click)=\"assignmentFilter('3')\">Completed Assignments</a>\n                                                                <a class=\"dropdown-item dropdown-link\" (click)=\"assignmentFilter('0')\">All Assignments</a>\n                                                        </div>\n                                                </div>\n                                            <div class=\"btn-group dropup\">\n                                                <button type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" id=\"dropdownMenuButton1\" aria-haspopup=\"true\" aria-expanded=\"false\" data-toggle=\"dropdown\">{{assignSortButton}}</button>\n                                                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n                                                    <a class=\"dropdown-item dropdown-link\" (click)=\"assignmentSort('1')\">Earliest First</a>\n                                                    <a class=\"dropdown-item dropdown-link\" (click)=\"assignmentSort('2')\">Name A-Z</a>\n                                                    <a class=\"dropdown-item dropdown-link\" (click)=\"assignmentSort('3')\">Name Z-A</a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                                </div>\n                                        </div>\n                                </div>\n                                <div class=\"col-12 home-sec-scroll\">\n                                        <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"assignmentsDetails==''\">\n                                                <div class=\"col-8\">\n                                                        <button class=\"nodataList\">No Data Available!</button>\n                                                </div>\n                                        </div>\n                                        <div class=\"row\">\n                                                <div class=\"col-12 mt-1\" *ngFor=\"let assign of assignmentsDetails\">\n                                                        <div class=\"card\">\n                                                                <div class=\"card-body p-3 \">\n                                                                        <div class=\"row\">\n                                                                                <div class=\"col-12 mb-3 school-img school-card-img\" title=\"View Assignment\" (click)=\"Preview(assign, assign.content_type)\">\n                                                                                        <figure *ngIf=\"assign.profile_url == ''\">\n                                                                                                <img src=\"assets/images/ristaschool/option-writing-checkbox-concepts-survey.png\" class=\"w-100\" alt=\"\">\n                                                                                        </figure>\n                                                                                        <figure *ngIf=\"assign.profile_url != ''\">\n                                                                                                <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + assign.profile_url)\" class=\"w-100\" alt=\"\">\n                                                                                        </figure>\n                                                                                </div>\n                                                                                <div class=\"col-12\">\n                                                                                        <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{assign.content_name}} </span><b class=\"contenttext\">\n                                                                                                <small *ngIf=\"assign.content_format == 1\">(PDF)</small>\n                                                                                                <small *ngIf=\"assign.content_format == 3\">(TEXT)</small></b><br><small>Assigned By <span class=\"t-name font-weight-bold\">{{assign.teacher_name}}</span></small> </h4>\n                                                                                        <p><small>Assigned To : </small> <span class=\"t-name font-weight-bold\">{{assign.class_name}}</span></p>\n                                                                                        <p><small>Subject: </small> <span class=\"t-name font-weight-bold\">{{assign.subject_name}}</span></p>\n                                                                                        <p><small>Start: </small> <span class=\"t-name font-weight-bold\" *ngIf=\"assign.start_date != '0000-00-00'\">{{assign.start_date|date:'MM/dd/yyyy'}}</span> &nbsp; &nbsp;\n                                                                                                <small>End: </small> <span class=\"t-name font-weight-bold\" *ngIf=\"assign.end_date != '0000-00-00'\">{{assign.end_date|date:'MM/dd/yyyy'}}</span>\n                                                                                        </p>\n\n                                                                                </div>\n                                                                        </div>\n                                                                </div>\n                                                        </div>\n                                                </div>\n                                        </div>\n\n                                </div>\n                        </div>\n                </div>\n                <div class=\"col-12 col-md-6 col-lg-4 mt-2\">\n                        <div class=\"row\">\n                                <div class=\"col-12 mb-2\">\n                                        <div class=\"card\">\n                                                <div class=\"card-body small-screen-group-btn p-3\">\n                                                        <div class=\"row d-flex justify-content-between list-title\">\n                                                                <div class=\"col-7 col-xl-6 pt-2\">\n                                                                        <h4>Quiz</h4>\n                                                                </div>\n                                                                <div class=\"col-5 col-xl-6 d-flex justify-content-end\">\n                                                                        <button *ngIf=\"allowAdd\" type=\"button\" class=\"btn btn-primary mr-3\" (click)=\"showAddAsset()\"><i class=\"fa fa-plus-circle mr-2 fa-hide\" aria-hidden=\"true\"></i> Add</button>\n                                                                        <i class=\"fa fa-ellipsis-v fa-2x mt-1\" aria-hidden=\"true\"></i>\n                                                                </div>\n                                                        </div>\n                                                        <div class=\"row group-btn\">\n                                                                <div class=\"btn-group dropup\">\n                                                                        <button class=\"col-12 btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i> {{assessButton}} </button>\n                                                                        <div class=\"dropdown-menu\">\n                                                                                <a class=\"dropdown-item dropdown-link\" (click)=\"assessmentFilter('1')\">Upcoming Quiz</a>\n                                                                                <a class=\"dropdown-item dropdown-link\" (click)=\"assessmentFilter('2')\">In Progress Quiz</a>\n                                                                                <a class=\"dropdown-item dropdown-link\" (click)=\"assessmentFilter('3')\">Completed Quiz</a>\n                                                                                <a class=\"dropdown-item dropdown-link\" (click)=\"assessmentFilter('0')\">All Quiz</a>\n                                                                        </div>\n                                                                </div>\n                                                            <div class=\"btn-group dropup\">\n                                                                <button type=\"button\" class=\"col-12 btn btn-outline-primary dropdown-toggle\" id=\"dropdownMenuButton2\" aria-haspopup=\"true\" aria-expanded=\"false\" data-toggle=\"dropdown\">{{assessSortButton}}</button>\n                                                                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\n                                                                    <a class=\"dropdown-item dropdown-link\" (click)=\"assessmentSort('1')\">Earliest First</a>\n                                                                    <a class=\"dropdown-item dropdown-link\" (click)=\"assessmentSort('2')\">Name A-Z</a>\n                                                                    <a class=\"dropdown-item dropdown-link\" (click)=\"assessmentSort('3')\">Name Z-A</a>\n                                                                </div>\n                                                            </div>\n                                                            </div>\n                                                </div>\n                                        </div>\n                                </div>\n                                <div class=\"col-12 home-sec-scroll\">\n                                        <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"assessmentDetails==''\">\n                                                <div class=\"col-8\">\n                                                        <button class=\"nodataList\">No Data Available!</button>\n                                                </div>\n                                        </div>\n                                        <div class=\"col-12 mt-1\" *ngFor=\"let assess of assessmentDetails\">\n                                                <div class=\"card\">\n                                                        <div class=\"card-body p-3 \">\n                                                                <div class=\"row\">\n                                                                        <div class=\"col-12 mb-3 school-img school-card-img\" title=\"View Assessment\" (click)=\"Preview(assess, assess.content_type)\">\n                                                                                <figure *ngIf=\"assess.profile_url == ''\">\n                                                                                        <img src=\"assets/images/ristaschool/assessment.png\" class=\"w-100\" alt=\"\">\n                                                                                </figure>\n                                                                                <figure *ngIf=\"assess.profile_url != ''\">\n                                                                                        <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + assess.profile_url)\" class=\"w-100\" alt=\"\">\n                                                                                </figure>\n                                                                        </div>\n                                                                        <div class=\"col-12\">\n                                                                                <h4 class=\"t-period\"><span class=\"font-weight-bold\">{{assess.content_name}} </span><b class=\"contenttext\">\n                                                                                        <small *ngIf=\"assess.content_format == 1\">(PDF)</small>\n                                                                                        <small *ngIf=\"assess.content_format == 3\">(TEXT)</small></b><br><small>Assigned By  <span class=\"t-name font-weight-bold\">{{assess.teacher_name}}</span></small> </h4>\n                                                                                <p><small>Assigned To : </small> <span class=\"t-name font-weight-bold\">{{assess.class_name}}</span></p>\n                                                                                <p><small>Subject: </small> <span class=\"t-name font-weight-bold\">{{assess.subject_name}}</span></p>\n                                                                                <p><small>Start: </small> <span class=\"t-name font-weight-bold\" *ngIf=\"assess.start_date != '0000-00-00'\">{{assess.start_date|date:'MM/dd/yyyy'}}</span> &nbsp; &nbsp;\n                                                                                        <small>End: </small> <span class=\"t-name font-weight-bold\" *ngIf=\"assess.end_date != '0000-00-00'\">{{assess.end_date|date:'MM/dd/yyyy'}}</span>\n                                                                                </p>\n                                                                        </div>\n                                                                </div>\n                                                        </div>\n                                                </div>\n                                        </div>\n                                </div>\n                        </div>\n                </div>\n        </section>\n</div>\n<div *ngIf=\"schoolStatus.length == 0\">\n        <app-emptyschool>\n        </app-emptyschool>\n</div>\n<!-- Container-fluid Ends-->\n\n\n<ng-template #addAssetModal let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n                <h4 class=\"modal-title col-12 text-center\"><b>Add Assessment</b></h4>\n                <i class=\"fa fa-close\" style=\"cursor: pointer\" (click)=\"close()\"></i>\n        </div>\n        <div class=\"modal-body\">\n                <div class=\"row\">\n                        <div class=\"col-6 text-center\" style=\"border-right: 1px solid #c4c4c4;\">\n                                <img src=\"assets/images/pdf-icons/Icon ionic-md-cloud-upload.png\">\n                                <h4 class=\"mt-3\">Create From PDF</h4>\n                                <h5 class=\"mt-3\">Upload Assessment as a PDF format and proceed to assign it to your students</h5>\n                                <div class=\"d-flex align-items-baseline\">\n                                        <input accept=\".pdf\" style=\"display: none\" type=\"file\" (change)=\"encodePdfFileAsURL($event, 'assessment')\" #hiddenfileinput5>\n                                        <button class=\"btn btn-primary w-100 mt-4\" type=\"file\" aria-describedby=\"inputGroupFileAddon01\"\n                                                (click)=\"hiddenfileinput5.click()\">Browse</button>\n                                </div>\n                        </div>\n                        <div class=\"col-6 text-center\">\n                                <img src=\"assets/images/pdf-icons/Icon material-library-books.png\">\n                                <h4 class=\"mt-3\">Create From Scratch</h4>\n                                <h5 class=\"mt-3\">Write your assessment content and proceed to assign it to your student</h5>\n                                <button type=\"button\"  (click)=\"openText('assessment')\" class=\"btn btn-primary w-100 mt-4\">Create Content</button>\n                        </div>\n                </div>\n        </div>\n</ng-template>\n<ng-template #assignment let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n                <h4 class=\"modal-title col-12 text-center\"><b>Add Assignment</b></h4>\n                <i class=\"fa fa-close\" style=\"cursor: pointer\" (click)=\"close()\"></i>\n        </div>\n        <div class=\"modal-body\">\n                <div class=\"row \">\n                        <div class=\"col-6 text-center\" style=\"border-right: 1px solid #c4c4c4;\">\n                                <img src=\"assets/images/pdf-icons/Icon ionic-md-cloud-upload.png\">\n                                <h4 class=\"mt-3\">Create From PDF</h4>\n                                <h5 class=\"mt-3\">Upload Assignment as a PDF format and proceed to assign it to your students</h5>\n                                <div class=\"d-flex align-items-baseline\">\n                                        <input accept=\".pdf\" style=\"display: none\" type=\"file\" (change)=\"encodePdfFileAsURL($event, 'assignment')\" #hiddenfileinput>\n                                        <button class=\"btn btn-primary mt-4 w-100\" type=\"file\" aria-describedby=\"inputGroupFileAddon01\"\n                                                (click)=\"hiddenfileinput.click()\">Browse</button>\n                                </div>\n                        </div>\n                        <div class=\"col-6 text-center\">\n                                <img src=\"assets/images/pdf-icons/Icon material-library-books.png\">\n                                <h4 class=\"mt-3\">Create From Scratch</h4>\n                                <h5 class=\"mt-3\">Write your assignment content and proceed to assign it to your student</h5>\n                                <div class=\"d-flex align-items-baseline\">\n                                        <button type=\"button\"  class=\"btn btn-primary w-100 mt-4\" (click)=\"openText('assignment')\">Create Content</button>\n                                </div>\n                        </div>\n                </div>\n        </div>\n</ng-template>\n\n" }]
    }], () => [{ type: i1.SchoolService }, { type: i2.NgbModalConfig }, { type: i3.ConfigurationService }, { type: i4.DomSanitizer }, { type: i2.NgbModal }, { type: i5.AuthService }, { type: i6.CommonService }, { type: i7.CommonDataService }, { type: i8.TeacherService }, { type: i9.Router }, { type: i10.NavService }, { type: i11.ToastrService }, { type: i12.CreatorService }, { type: i13.ClassService }, { type: i14.NewsubjectService }], { modalContent: [{
            type: ViewChild,
            args: ['content']
        }], viewDetailsContent: [{
            type: ViewChild,
            args: ['viewdetails']
        }], addAsset: [{
            type: ViewChild,
            args: ['addAssetModal']
        }], addAssignment: [{
            type: ViewChild,
            args: ['assignment']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListHomeComponent, { className: "ListHomeComponent" }); })();
//# sourceMappingURL=list-home.component.js.map