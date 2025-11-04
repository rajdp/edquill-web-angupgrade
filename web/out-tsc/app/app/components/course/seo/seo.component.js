import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { urls } from 'src/app/shared/utils/urls';
import * as i0 from "@angular/core";
import * as i1 from "src/app/shared/service/auth.service";
import * as i2 from "src/app/environment.service";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "ngx-toastr";
import * as i6 from "src/app/shared/service/validation.service";
import * as i7 from "src/app/shared/service/newsubject.service";
import * as i8 from "@angular/common";
import * as i9 from "@ng-select/ng-select";
const _c0 = ["table"];
function SeoComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "button", 14);
    i0.ɵɵlistener("click", function SeoComponent_div_12_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addOrEditButtonClicked()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.type == "add" ? "Add" : "Edit", " Course SEO");
} }
function SeoComponent_div_13_em_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Author name is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Meta Title is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Meta Description is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Meta Keywords is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Meta Keyphrase is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Meta Topic is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Meta Subject is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Meta Classification is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Meta Robots is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Meta Rating is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_89_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Meta Audience is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_97_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Enter Open Graph Title is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_105_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Open Graph Type is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_113_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Open Graph Site Name is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_121_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Open Graph Description is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_129_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Open Graph Site Url is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_137_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Twitter Title is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_145_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Twitter Site Name is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_153_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Twitter Card Name is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_161_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Twitter Description Name is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_em_169_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 47);
    i0.ɵɵtext(1, "Twitter Creator Name is required");
    i0.ɵɵelementEnd();
} }
function SeoComponent_div_13_div_181_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 48)(1, "button", 49);
    i0.ɵɵlistener("click", function SeoComponent_div_13_div_181_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitSeoForm()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 50);
    i0.ɵɵlistener("click", function SeoComponent_div_13_div_181_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cancelButtonClicked()); });
    i0.ɵɵtext(4, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.type == "add" ? "Add" : "Update", " Course SEO");
} }
function SeoComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "form", 16)(2, "div", 17)(3, "label", 18);
    i0.ɵɵtext(4, "Meta Author Name ");
    i0.ɵɵelementStart(5, "span", 19);
    i0.ɵɵtext(6, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 20);
    i0.ɵɵelement(8, "input", 21);
    i0.ɵɵtemplate(9, SeoComponent_div_13_em_9_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 17)(11, "label", 18);
    i0.ɵɵtext(12, "Meta Title ");
    i0.ɵɵelementStart(13, "span", 19);
    i0.ɵɵtext(14, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 20);
    i0.ɵɵelement(16, "input", 23);
    i0.ɵɵtemplate(17, SeoComponent_div_13_em_17_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 17)(19, "label", 18);
    i0.ɵɵtext(20, "Meta Description ");
    i0.ɵɵelementStart(21, "span", 19);
    i0.ɵɵtext(22, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 20);
    i0.ɵɵelement(24, "input", 24);
    i0.ɵɵtemplate(25, SeoComponent_div_13_em_25_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 17)(27, "label", 18);
    i0.ɵɵtext(28, "Meta Keywords ");
    i0.ɵɵelementStart(29, "span", 19);
    i0.ɵɵtext(30, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 20);
    i0.ɵɵelement(32, "input", 25);
    i0.ɵɵtemplate(33, SeoComponent_div_13_em_33_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 17)(35, "label", 18);
    i0.ɵɵtext(36, "Meta Keyphrase ");
    i0.ɵɵelementStart(37, "span", 19);
    i0.ɵɵtext(38, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "div", 20);
    i0.ɵɵelement(40, "input", 26);
    i0.ɵɵtemplate(41, SeoComponent_div_13_em_41_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div", 17)(43, "label", 18);
    i0.ɵɵtext(44, "Meta Topic ");
    i0.ɵɵelementStart(45, "span", 19);
    i0.ɵɵtext(46, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 20);
    i0.ɵɵelement(48, "input", 27);
    i0.ɵɵtemplate(49, SeoComponent_div_13_em_49_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "div", 17)(51, "label", 18);
    i0.ɵɵtext(52, "Meta Subject ");
    i0.ɵɵelementStart(53, "span", 19);
    i0.ɵɵtext(54, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "div", 20);
    i0.ɵɵelement(56, "input", 28);
    i0.ɵɵtemplate(57, SeoComponent_div_13_em_57_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "div", 17)(59, "label", 18);
    i0.ɵɵtext(60, "Meta Classification ");
    i0.ɵɵelementStart(61, "span", 19);
    i0.ɵɵtext(62, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(63, "div", 20);
    i0.ɵɵelement(64, "input", 29);
    i0.ɵɵtemplate(65, SeoComponent_div_13_em_65_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(66, "div", 17)(67, "label", 18);
    i0.ɵɵtext(68, "Meta Robots ");
    i0.ɵɵelementStart(69, "span", 19);
    i0.ɵɵtext(70, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(71, "div", 20);
    i0.ɵɵelement(72, "input", 30);
    i0.ɵɵtemplate(73, SeoComponent_div_13_em_73_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(74, "div", 17)(75, "label", 18);
    i0.ɵɵtext(76, "Meta Rating ");
    i0.ɵɵelementStart(77, "span", 19);
    i0.ɵɵtext(78, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(79, "div", 20);
    i0.ɵɵelement(80, "input", 31);
    i0.ɵɵtemplate(81, SeoComponent_div_13_em_81_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(82, "div", 17)(83, "label", 18);
    i0.ɵɵtext(84, "Meta Audience ");
    i0.ɵɵelementStart(85, "span", 19);
    i0.ɵɵtext(86, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(87, "div", 20);
    i0.ɵɵelement(88, "input", 32);
    i0.ɵɵtemplate(89, SeoComponent_div_13_em_89_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(90, "div", 17)(91, "label", 18);
    i0.ɵɵtext(92, "Open Graph Title ");
    i0.ɵɵelementStart(93, "span", 19);
    i0.ɵɵtext(94, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(95, "div", 20);
    i0.ɵɵelement(96, "input", 33);
    i0.ɵɵtemplate(97, SeoComponent_div_13_em_97_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(98, "div", 17)(99, "label", 18);
    i0.ɵɵtext(100, "Open Graph Type ");
    i0.ɵɵelementStart(101, "span", 19);
    i0.ɵɵtext(102, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(103, "div", 20);
    i0.ɵɵelement(104, "input", 34);
    i0.ɵɵtemplate(105, SeoComponent_div_13_em_105_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(106, "div", 17)(107, "label", 18);
    i0.ɵɵtext(108, "Open Graph Site Name ");
    i0.ɵɵelementStart(109, "span", 19);
    i0.ɵɵtext(110, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(111, "div", 20);
    i0.ɵɵelement(112, "input", 35);
    i0.ɵɵtemplate(113, SeoComponent_div_13_em_113_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(114, "div", 17)(115, "label", 18);
    i0.ɵɵtext(116, "Open Graph Description ");
    i0.ɵɵelementStart(117, "span", 19);
    i0.ɵɵtext(118, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(119, "div", 20);
    i0.ɵɵelement(120, "input", 36);
    i0.ɵɵtemplate(121, SeoComponent_div_13_em_121_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(122, "div", 17)(123, "label", 18);
    i0.ɵɵtext(124, "Open Graph Site Url ");
    i0.ɵɵelementStart(125, "span", 19);
    i0.ɵɵtext(126, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(127, "div", 20);
    i0.ɵɵelement(128, "input", 37);
    i0.ɵɵtemplate(129, SeoComponent_div_13_em_129_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(130, "div", 17)(131, "label", 18);
    i0.ɵɵtext(132, "Twitter Title ");
    i0.ɵɵelementStart(133, "span", 19);
    i0.ɵɵtext(134, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(135, "div", 20);
    i0.ɵɵelement(136, "input", 38);
    i0.ɵɵtemplate(137, SeoComponent_div_13_em_137_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(138, "div", 17)(139, "label", 18);
    i0.ɵɵtext(140, "Twitter Site ");
    i0.ɵɵelementStart(141, "span", 19);
    i0.ɵɵtext(142, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(143, "div", 20);
    i0.ɵɵelement(144, "input", 39);
    i0.ɵɵtemplate(145, SeoComponent_div_13_em_145_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(146, "div", 17)(147, "label", 18);
    i0.ɵɵtext(148, "Twitter Card ");
    i0.ɵɵelementStart(149, "span", 19);
    i0.ɵɵtext(150, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(151, "div", 20);
    i0.ɵɵelement(152, "input", 40);
    i0.ɵɵtemplate(153, SeoComponent_div_13_em_153_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(154, "div", 17)(155, "label", 18);
    i0.ɵɵtext(156, "Twitter Description ");
    i0.ɵɵelementStart(157, "span", 19);
    i0.ɵɵtext(158, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(159, "div", 20);
    i0.ɵɵelement(160, "input", 41);
    i0.ɵɵtemplate(161, SeoComponent_div_13_em_161_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(162, "div", 17)(163, "label", 18);
    i0.ɵɵtext(164, "Twitter Creator ");
    i0.ɵɵelementStart(165, "span", 19);
    i0.ɵɵtext(166, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(167, "div", 20);
    i0.ɵɵelement(168, "input", 42);
    i0.ɵɵtemplate(169, SeoComponent_div_13_em_169_Template, 2, 0, "em", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(170, "div", 17)(171, "label", 18);
    i0.ɵɵtext(172, "Status ");
    i0.ɵɵelementStart(173, "span", 19);
    i0.ɵɵtext(174, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(175, "div", 20)(176, "select", 43)(177, "option", 44);
    i0.ɵɵtext(178, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(179, "option", 45);
    i0.ɵɵtext(180, "Suspended");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(181, SeoComponent_div_13_div_181_Template, 5, 1, "div", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.seoFormGroup);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("meta_author").valid && (ctx_r1.seoFormGroup.get("meta_author").dirty || ctx_r1.seoFormGroup.get("meta_author").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("meta_title").valid && (ctx_r1.seoFormGroup.get("meta_title").dirty || ctx_r1.seoFormGroup.get("meta_title").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("meta_description").valid && (ctx_r1.seoFormGroup.get("meta_description").dirty || ctx_r1.seoFormGroup.get("meta_description").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("meta_keywords").valid && (ctx_r1.seoFormGroup.get("meta_keywords").dirty || ctx_r1.seoFormGroup.get("meta_keywords").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("meta_keyphrase").valid && (ctx_r1.seoFormGroup.get("meta_keyphrase").dirty || ctx_r1.seoFormGroup.get("meta_keyphrase").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("meta_topic").valid && (ctx_r1.seoFormGroup.get("meta_topic").dirty || ctx_r1.seoFormGroup.get("meta_topic").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("meta_subject").valid && (ctx_r1.seoFormGroup.get("meta_subject").dirty || ctx_r1.seoFormGroup.get("meta_subject").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("meta_classification").valid && (ctx_r1.seoFormGroup.get("meta_classification").dirty || ctx_r1.seoFormGroup.get("meta_classification").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("meta_robots").valid && (ctx_r1.seoFormGroup.get("meta_robots").dirty || ctx_r1.seoFormGroup.get("meta_robots").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("meta_rating").valid && (ctx_r1.seoFormGroup.get("meta_rating").dirty || ctx_r1.seoFormGroup.get("meta_rating").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("meta_audience").valid && (ctx_r1.seoFormGroup.get("meta_audience").dirty || ctx_r1.seoFormGroup.get("meta_audience").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("og_title").valid && (ctx_r1.seoFormGroup.get("og_title").dirty || ctx_r1.seoFormGroup.get("og_title").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("og_type").valid && (ctx_r1.seoFormGroup.get("og_type").dirty || ctx_r1.seoFormGroup.get("og_type").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("og_site_name").valid && (ctx_r1.seoFormGroup.get("og_site_name").dirty || ctx_r1.seoFormGroup.get("og_site_name").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("og_description").valid && (ctx_r1.seoFormGroup.get("og_description").dirty || ctx_r1.seoFormGroup.get("og_description").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("og_site_url").valid && (ctx_r1.seoFormGroup.get("og_site_url").dirty || ctx_r1.seoFormGroup.get("og_site_url").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("twitter_title").valid && (ctx_r1.seoFormGroup.get("twitter_title").dirty || ctx_r1.seoFormGroup.get("twitter_title").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("twitter_site").valid && (ctx_r1.seoFormGroup.get("twitter_site").dirty || ctx_r1.seoFormGroup.get("twitter_site").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("twitter_card").valid && (ctx_r1.seoFormGroup.get("twitter_card").dirty || ctx_r1.seoFormGroup.get("twitter_card").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("twitter_description").valid && (ctx_r1.seoFormGroup.get("twitter_description").dirty || ctx_r1.seoFormGroup.get("twitter_description").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readOnly", ctx_r1.type == "edit" && !ctx_r1.buttonClicked);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.seoFormGroup.get("twitter_creator").valid && (ctx_r1.seoFormGroup.get("twitter_creator").dirty || ctx_r1.seoFormGroup.get("twitter_creator").touched));
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r1.buttonClicked);
} }
function SeoComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51)(1, "div", 52);
    i0.ɵɵelement(2, "img", 53);
    i0.ɵɵelementStart(3, "p")(4, "strong");
    i0.ɵɵtext(5, "No Data Found");
    i0.ɵɵelementEnd()()()();
} }
export class SeoComponent {
    constructor(auth, env, builder, router, toastr, validate, newService) {
        this.auth = auth;
        this.env = env;
        this.builder = builder;
        this.router = router;
        this.toastr = toastr;
        this.validate = validate;
        this.newService = newService;
        this.active = 1;
        this.columnSize = 12;
        this.desktopView = window.screen.width > 768;
        this.courseSeoData = [];
        this.courseListData = [];
        this.type = 'add';
        this.buttonClicked = false;
        this.setFormGroup();
        this.columnSize = this.desktopView ? 12 : 6;
        this.webhost = this.env.imgUrl;
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        if (this.schoolStatus.length != 0) {
            this.newService.schoolChange.subscribe((res) => {
                if (res != '') {
                    if (this.router.url.includes('/course/faq/list')) {
                        this.getCourseList();
                    }
                }
                else {
                    this.getCourseList();
                }
            });
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // const getSearchValue = JSON.parse(this.auth.getSessionStorage('commonInputSearchValue'));
        // if (getSearchValue) {
        //     getSearchValue['courseSeoSearchValue'].course_id = this.courseSeoSelected;
        //     // this.auth.setSessionStorage('commonInputSearchValue', JSON.stringify(getSearchValue));
        // }
    }
    addOrEditButtonClicked() {
        this.buttonClicked = true;
        this.seoFormGroup.controls.status.enable({ onlySelf: true });
    }
    cancelButtonClicked() {
        this.buttonClicked = false;
        this.seoFormGroup.controls.status.disable({ onlySelf: true });
    }
    getCourseList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.courseList).subscribe((successData) => {
            this.courseListSuccess(successData);
        }, (error) => {
            console.error(error, ' error');
        });
    }
    courseListSuccess(successData) {
        console.log(successData, 'successData');
        this.courseListData = successData.IsSuccess ? successData.ResponseObject : [];
        // const getSearchValue = JSON.parse(this.auth.getSessionStorage('commonInputSearchValue'));
        // this.courseSeoSelected = getSearchValue['courseSeoSearchValue'].course_id;
        this.getListCourseDetails({ course_id: this.courseSeoSelected ?? '' });
        console.log(this.courseListData, 'courseListData');
    }
    getListCourseDetails(eve) {
        console.log(eve.course_id);
        this.buttonClicked = false;
        this.setFormGroup();
        this.seoFormGroup.controls.status.disable({ onlySelf: true });
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            course_id: eve.course_id,
            school_id: this.auth.getSessionData('school_id')
        };
        console.log(data, 'data');
        this.auth.postService(data, urls.courseSeo).subscribe((successData) => {
            this.listSuccess(successData);
        }, (error) => {
            console.error(error, 'booking error');
        });
    }
    listSuccess(successData) {
        console.log(successData, 'successData');
        this.courseSeoData = successData.IsSuccess ? successData.ResponseObject : [];
        this.type = this.courseSeoData.length == 0 ? 'add' : 'edit';
        Object.keys(this.seoFormGroup.controls).forEach(field => {
            this.seoFormGroup.controls[field].patchValue(this.courseSeoData.length == 0 && field != 'status' ? ''
                : this.courseSeoData.length == 0 && field == 'status' ? 'A' : this.courseSeoData[0][field]);
        });
    }
    submitSeoForm() {
        const data = {};
        if (this.seoFormGroup.valid) {
            Object.keys(this.seoFormGroup.controls).forEach(field => {
                data[field] = this.seoFormGroup.controls[field].value;
            });
            data['course_id'] = this.courseSeoSelected;
            data['platform'] = 'web';
            data['role_id'] = this.auth.getRoleId();
            data['user_id'] = this.auth.getUserId();
            data['school_id'] = this.auth.getSessionData('school_id');
            this.type == 'edit' ? data['seo_id'] = this.courseSeoData[0]['seo_id'] : '';
            console.log(data, 'data');
            this.auth.postService(data, this.type == 'add' ? urls.addCourseSeo : urls.updateCourseSeo).subscribe((successData) => {
                this.addOrEditSuccess(successData);
            }, (error) => {
                console.error(error, 'addOrUpdateServiceFailed');
            });
        }
        else {
            this.validate.validateAllFormFields(this.seoFormGroup);
            this.toastr.error('Please Fill all the mandatory Field');
        }
    }
    addOrEditSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.setFormGroup();
            this.buttonClicked = false;
            this.getListCourseDetails({ course_id: this.courseSeoSelected });
            this.toastr.success(successData.ResponseObject);
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    setFormGroup() {
        this.seoFormGroup = this.builder.group({
            meta_author: ['', Validators.required],
            meta_title: ['', Validators.required],
            meta_description: ['', Validators.required],
            meta_keywords: ['', Validators.required],
            meta_keyphrase: ['', Validators.required],
            meta_topic: ['', Validators.required],
            meta_subject: ['', Validators.required],
            meta_classification: ['', Validators.required],
            meta_robots: ['', Validators.required],
            meta_rating: ['', Validators.required],
            meta_audience: ['', Validators.required],
            og_title: ['', Validators.required],
            og_type: ['', Validators.required],
            og_site_name: ['', Validators.required],
            og_description: ['', Validators.required],
            og_site_url: ['', Validators.required],
            twitter_title: ['', Validators.required],
            twitter_site: ['', Validators.required],
            twitter_card: ['', Validators.required],
            twitter_description: ['', Validators.required],
            twitter_creator: ['', Validators.required],
            status: [{ value: 'A', disabled: true }, Validators.required]
        });
    }
    static { this.ɵfac = function SeoComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SeoComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.EnvironmentService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.ValidationService), i0.ɵɵdirectiveInject(i7.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SeoComponent, selectors: [["app-seo"]], viewQuery: function SeoComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
        } }, decls: 15, vars: 6, consts: [[1, "row", "mt-3"], [1, "col-xl-12", "mb-30"], [1, "card"], [1, "card-header"], [1, "px-0"], [1, "card-body"], [1, "row", "mb-4"], [1, "col-4"], [2, "font-weight", "600"], ["bindLabel", "course_name", "bindValue", "course_id", "placeholder", "Select Course", "typeToSearchText", "", 3, "ngModelChange", "change", "items", "clearable", "ngModel"], ["class", "col-8 d-flex align-items-end justify-content-end", 4, "ngIf"], ["class", "col-12 my-4 mx-2", 4, "ngIf"], ["class", "row d-flex align-items-center justify-content-center my-5", 4, "ngIf"], [1, "col-8", "d-flex", "align-items-end", "justify-content-end"], [1, "btn", "btn-primary", "pull-right", 3, "click"], [1, "col-12", "my-4", "mx-2"], [3, "formGroup"], [1, "form-group", "row", "align-items-center", "my-4"], [1, "col-3", "mb-0"], [1, "text-danger"], [1, "col-9"], ["formControlName", "meta_author", "placeholder", "Enter Meta Author Name", 1, "form-control", 3, "readOnly"], ["class", "error", 4, "ngIf"], ["formControlName", "meta_title", "placeholder", "Enter Meta Title", 1, "form-control", 3, "readOnly"], ["formControlName", "meta_description", "placeholder", "Enter Meta Description", 1, "form-control", 3, "readOnly"], ["formControlName", "meta_keywords", "placeholder", "Enter Meta Keywords", 1, "form-control", 3, "readOnly"], ["formControlName", "meta_keyphrase", "placeholder", "Enter Meta Keyphrase", 1, "form-control", 3, "readOnly"], ["formControlName", "meta_topic", "placeholder", "Enter Meta Topic", 1, "form-control", 3, "readOnly"], ["formControlName", "meta_subject", "placeholder", "Enter Meta Subject", 1, "form-control", 3, "readOnly"], ["formControlName", "meta_classification", "placeholder", "Enter Meta Classification", 1, "form-control", 3, "readOnly"], ["formControlName", "meta_robots", "placeholder", "Enter Meta Robots", 1, "form-control", 3, "readOnly"], ["formControlName", "meta_rating", "placeholder", "Enter Meta Rating", 1, "form-control", 3, "readOnly"], ["formControlName", "meta_audience", "placeholder", "Enter Meta Audience", 1, "form-control", 3, "readOnly"], ["formControlName", "og_title", "placeholder", "Enter Open Graph Title", 1, "form-control", 3, "readOnly"], ["formControlName", "og_type", "placeholder", "Enter Open Graph Type", 1, "form-control", 3, "readOnly"], ["formControlName", "og_site_name", "placeholder", "Enter Open Graph Site Name", 1, "form-control", 3, "readOnly"], ["formControlName", "og_description", "placeholder", "Enter Open Graph Description", 1, "form-control", 3, "readOnly"], ["formControlName", "og_site_url", "placeholder", "Enter Open Graph Site Url", 1, "form-control", 3, "readOnly"], ["formControlName", "twitter_title", "placeholder", "Enter Twitter Title", 1, "form-control", 3, "readOnly"], ["formControlName", "twitter_site", "placeholder", "Enter Twitter Site", 1, "form-control", 3, "readOnly"], ["formControlName", "twitter_card", "placeholder", "Enter Twitter Card", 1, "form-control", 3, "readOnly"], ["formControlName", "twitter_description", "placeholder", "Enter Twitter Description", 1, "form-control", 3, "readOnly"], ["formControlName", "twitter_creator", "placeholder", "Enter Twitter Creator", 1, "form-control", 3, "readOnly"], ["formControlName", "status", 1, "form-control"], ["value", "A"], ["value", "I"], ["class", "col-12 pt-2", 4, "ngIf"], [1, "error"], [1, "col-12", "pt-2"], [1, "btn", "btn-primary", "pull-right", "ml-3", 3, "click"], [1, "btn", "btn-outline-primary", "pull-right", 3, "click"], [1, "row", "d-flex", "align-items-center", "justify-content-center", "my-5"], [1, "col-6", "p-5", "text-center"], ["src", "assets/images/nodatafound.jpg", "alt", "No Data Found", "title", "No Data Found", 1, "w-50"]], template: function SeoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
            i0.ɵɵtext(5, "Course SEO");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "label", 8);
            i0.ɵɵtext(10, "Select Course");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "ng-select", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function SeoComponent_Template_ng_select_ngModelChange_11_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.courseSeoSelected, $event) || (ctx.courseSeoSelected = $event); return $event; });
            i0.ɵɵlistener("change", function SeoComponent_Template_ng_select_change_11_listener($event) { return ctx.getListCourseDetails($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(12, SeoComponent_div_12_Template, 3, 1, "div", 10)(13, SeoComponent_div_13_Template, 182, 44, "div", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(14, SeoComponent_div_14_Template, 6, 0, "div", 12);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("items", ctx.courseListData)("clearable", false);
            i0.ɵɵtwoWayProperty("ngModel", ctx.courseSeoSelected);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.courseSeoSelected != undefined && ctx.courseSeoSelected != "" && !ctx.buttonClicked && (ctx.type == "add" && ctx.courseSeoData.length == 0 || ctx.type == "edit" && ctx.courseSeoData.length != 0));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.courseSeoSelected && (ctx.type == "add" && ctx.buttonClicked || ctx.type == "edit" && ctx.courseSeoData.length != 0));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.courseSeoData.length == 0 && !ctx.buttonClicked);
        } }, dependencies: [i8.NgIf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.NgModel, i3.FormGroupDirective, i3.FormControlName, i9.NgSelectComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeoComponent, [{
        type: Component,
        args: [{ selector: 'app-seo', template: "<div class=\"row mt-3\">\n    <div class=\"col-xl-12 mb-30\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h5 class=\"px-0\">Course SEO</h5>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row mb-4\">\n                    <div class=\"col-4\">\n                        <label style=\"font-weight: 600\">Select Course</label>\n                        <ng-select\n                                [items]=\"courseListData\"\n                                bindLabel=\"course_name\"\n                                bindValue=\"course_id\"\n                                placeholder=\"Select Course\"\n                                typeToSearchText=\"\"\n                                [clearable]=\"false\"\n                                [(ngModel)]=\"courseSeoSelected\"\n                                (change)=\"getListCourseDetails($event)\">\n                        </ng-select>\n                    </div>\n\n                    <div class=\"col-8 d-flex align-items-end justify-content-end\" *ngIf=\"courseSeoSelected != undefined && courseSeoSelected != '' && !buttonClicked && (type == 'add' && courseSeoData.length == 0 || type == 'edit' && courseSeoData.length != 0 )\">\n                        <button class=\"btn btn-primary pull-right\" (click)=\"addOrEditButtonClicked()\">{{type == 'add' ? 'Add' : 'Edit'}} Course SEO</button>\n                    </div>\n\n                    <div class=\"col-12 my-4 mx-2\" *ngIf=\"courseSeoSelected && (type == 'add' && buttonClicked || type == 'edit' && courseSeoData.length != 0 )\">\n                        <form [formGroup]=\"seoFormGroup\">\n\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Meta Author Name <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"meta_author\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Meta Author Name\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('meta_author').valid && (seoFormGroup.get('meta_author').dirty || seoFormGroup.get('meta_author').touched)\">Author name is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Meta Title <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"meta_title\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Meta Title\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('meta_title').valid && (seoFormGroup.get('meta_title').dirty || seoFormGroup.get('meta_title').touched)\">Meta Title is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Meta Description <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"meta_description\" [readOnly]=\"type == 'edit' && !buttonClicked\"  placeholder=\"Enter Meta Description\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('meta_description').valid && (seoFormGroup.get('meta_description').dirty || seoFormGroup.get('meta_description').touched)\">Meta Description is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Meta Keywords <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"meta_keywords\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Meta Keywords\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('meta_keywords').valid && (seoFormGroup.get('meta_keywords').dirty || seoFormGroup.get('meta_keywords').touched)\">Meta Keywords is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Meta Keyphrase <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"meta_keyphrase\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Meta Keyphrase\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('meta_keyphrase').valid && (seoFormGroup.get('meta_keyphrase').dirty || seoFormGroup.get('meta_keyphrase').touched)\">Meta Keyphrase is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Meta Topic <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"meta_topic\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Meta Topic\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('meta_topic').valid && (seoFormGroup.get('meta_topic').dirty || seoFormGroup.get('meta_topic').touched)\">Meta Topic is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Meta Subject <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"meta_subject\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Meta Subject\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('meta_subject').valid && (seoFormGroup.get('meta_subject').dirty || seoFormGroup.get('meta_subject').touched)\">Meta Subject is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Meta Classification <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"meta_classification\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Meta Classification\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('meta_classification').valid && (seoFormGroup.get('meta_classification').dirty || seoFormGroup.get('meta_classification').touched)\">Meta Classification is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Meta Robots <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"meta_robots\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Meta Robots\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('meta_robots').valid && (seoFormGroup.get('meta_robots').dirty || seoFormGroup.get('meta_robots').touched)\">Meta Robots is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Meta Rating <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"meta_rating\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Meta Rating\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('meta_rating').valid && (seoFormGroup.get('meta_rating').dirty || seoFormGroup.get('meta_rating').touched)\">Meta Rating is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Meta Audience <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"meta_audience\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Meta Audience\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('meta_audience').valid && (seoFormGroup.get('meta_audience').dirty || seoFormGroup.get('meta_audience').touched)\">Meta Audience is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Open Graph Title <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"og_title\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Open Graph Title\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('og_title').valid && (seoFormGroup.get('og_title').dirty || seoFormGroup.get('og_title').touched)\">Enter Open Graph Title is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Open Graph Type <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"og_type\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Open Graph Type\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('og_type').valid && (seoFormGroup.get('og_type').dirty || seoFormGroup.get('og_type').touched)\">Open Graph Type is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Open Graph Site Name <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"og_site_name\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Open Graph Site Name\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('og_site_name').valid && (seoFormGroup.get('og_site_name').dirty || seoFormGroup.get('og_site_name').touched)\">Open Graph Site Name is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Open Graph Description <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"og_description\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Open Graph Description\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('og_description').valid && (seoFormGroup.get('og_description').dirty || seoFormGroup.get('og_description').touched)\">Open Graph Description is required</em>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Open Graph Site Url <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"og_site_url\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Open Graph Site Url\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('og_site_url').valid && (seoFormGroup.get('og_site_url').dirty || seoFormGroup.get('og_site_url').touched)\">Open Graph Site Url is required</em>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Twitter Title <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"twitter_title\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Twitter Title\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('twitter_title').valid && (seoFormGroup.get('twitter_title').dirty || seoFormGroup.get('twitter_title').touched)\">Twitter Title is required</em>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Twitter Site <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"twitter_site\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Twitter Site\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('twitter_site').valid && (seoFormGroup.get('twitter_site').dirty || seoFormGroup.get('twitter_site').touched)\">Twitter Site Name is required</em>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Twitter Card <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"twitter_card\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Twitter Card\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('twitter_card').valid && (seoFormGroup.get('twitter_card').dirty || seoFormGroup.get('twitter_card').touched)\">Twitter Card Name is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Twitter Description <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"twitter_description\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Twitter Description\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('twitter_description').valid && (seoFormGroup.get('twitter_description').dirty || seoFormGroup.get('twitter_description').touched)\">Twitter Description Name is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Twitter Creator <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <input class=\"form-control\" formControlName=\"twitter_creator\" [readOnly]=\"type == 'edit' && !buttonClicked\" placeholder=\"Enter Twitter Creator\">\n                                    <em class=\"error\" *ngIf=\"!seoFormGroup.get('twitter_creator').valid && (seoFormGroup.get('twitter_creator').dirty || seoFormGroup.get('twitter_creator').touched)\">Twitter Creator Name is required</em>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group row align-items-center my-4\">\n                                <label class=\"col-3 mb-0\">Status <span class=\"text-danger\">*</span></label>\n                                <div class=\"col-9\">\n                                    <select class=\"form-control\" formControlName=\"status\">\n                                        <option value=\"A\">Active</option>\n                                        <option value=\"I\">Suspended</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </form>\n\n                        <div class=\"col-12 pt-2\" *ngIf=\"buttonClicked\">\n                            <button (click)=\"submitSeoForm()\" class=\"btn btn-primary pull-right ml-3\">{{type == 'add' ? 'Add' : 'Update'}} Course SEO</button>\n                            <button class=\"btn btn-outline-primary pull-right\" (click)=\"cancelButtonClicked()\">Cancel</button>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"row d-flex align-items-center justify-content-center my-5\" *ngIf=\"courseSeoData.length == 0 && !buttonClicked\">\n                    <div class=\"col-6 p-5 text-center\">\n                        <img class=\"w-50\" src=\"assets/images/nodatafound.jpg\" alt=\"No Data Found\" title=\"No Data Found\"/>\n                        <p><strong>No Data Found</strong></p>\n                    </div>\n                </div>\n                <!--<div class=\"row my-5\" *ngIf=\"rows.length != 0\">-->\n                <!--<div class=\"col-12\">-->\n                <!--<ngx-datatable #table-->\n                <!--style=\"font-size: 12px;border: 1px solid #d1d4d7; border-radius: 2px\"-->\n                <!--class=\"bootstrap ngx-datatable-design\"-->\n                <!--[externalSorting]=\"false\" [rows]=\"rows\"-->\n                <!--[headerHeight]=\"50\"-->\n                <!--[limit]=\"recordPerPage\"-->\n                <!--[footerHeight]=\"50\" [rowHeight]=\"'auto'\"-->\n                <!--[scrollbarH]=\"false\"-->\n                <!--[columnMode]=\"'force'\"-->\n                <!--[messages]=\"{emptyMessage: 'No Course Details found'}\"-->\n\n                <!--&gt;-->\n                <!--&lt;!&ndash; Row Detail Template &ndash;&gt;-->\n\n                <!--<ngx-datatable-column name=\"S.No\" prop=\"ShipmentId\" [width]=\"100\"-->\n                <!--&gt;-->\n                <!--<ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">-->\n                <!--<h5 class=\"blue-color cursor\">{{rowIndex + 1}}</h5>-->\n                <!--</ng-template>-->\n                <!--</ngx-datatable-column>-->\n\n                <!--<ngx-datatable-column name=\"Course Name\" prop=\"course_name\">-->\n                <!--<ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\" ngx-datatable-cell-template let-expanded=\"expanded\">-->\n                <!--<h6 class=\"blue-color cursor\">{{row.course_name}}</h6>-->\n                <!--</ng-template>-->\n                <!--</ngx-datatable-column>-->\n\n                <!--<ngx-datatable-column name=\"Schedule Name\" prop=\"schedule_title\">-->\n                <!--<ng-template let-row=\"row\" let-value=\"value\" let-expanded=\"expanded\" ngx-datatable-cell-template>-->\n                <!--{{row.schedule_title}}-->\n                <!--</ng-template>-->\n                <!--</ngx-datatable-column>-->\n\n                <!--<ngx-datatable-column name=\"Price\" prop=\"actual_cost\">-->\n                <!--<ng-template let-row=\"row\" let-value=\"value\" let-expanded=\"expanded\" ngx-datatable-cell-template>-->\n                <!--$ {{ConvertToInt(row.actual_cost)}}-->\n                <!--</ng-template>-->\n                <!--</ngx-datatable-column>-->\n\n                <!--<ngx-datatable-column name=\"Status\" prop=\"status\">-->\n                <!--<ng-template let-row=\"row\" let-value=\"value\" let-expanded=\"expanded\" ngx-datatable-cell-template>-->\n                <!--<span class=\"badge badge-success\" *ngIf=\"row.status == 'A'\">Active</span>-->\n                <!--<span class=\"badge badge-danger\" *ngIf=\"row.status == 'I'\">Suspended</span>-->\n                <!--</ng-template>-->\n                <!--</ngx-datatable-column>-->\n\n\n\n                <!--<ngx-datatable-column name=\"Action\" prop=\"batch\">-->\n                <!--<ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>-->\n                <!--<span>-->\n                <!--<i class=\"fa fa-solid fa-2x fa-eye cursor\" aria-hidden=\"true\" (click)=\"clickStopper($event);showCourseDetail(row)\" style=\"color:#00bfff;\" title=\"Preview Course Details\"></i>-->\n                <!--</span>-->\n                <!--<span> &nbsp;&nbsp;</span>-->\n                <!--<span>-->\n                <!--<i class=\"fa fa-solid fa-2x fa-edit cursor\" aria-hidden=\"true\" (click)=\"clickStopper($event);editCourseDetails(row)\" style=\"color:#00bfff;\" title=\"Edit Course Details\"></i>-->\n                <!--</span>-->\n                <!--</ng-template>-->\n                <!--</ngx-datatable-column>-->\n\n                <!--</ngx-datatable>-->\n                <!--</div>-->\n                <!--</div>-->\n            </div>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.EnvironmentService }, { type: i3.FormBuilder }, { type: i4.Router }, { type: i5.ToastrService }, { type: i6.ValidationService }, { type: i7.NewsubjectService }], { table: [{
            type: ViewChild,
            args: ['table']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SeoComponent, { className: "SeoComponent" }); })();
//# sourceMappingURL=seo.component.js.map