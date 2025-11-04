import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../shared/service/configuration.service";
import * as i3 from "../../../shared/service/validation.service";
import * as i4 from "../../../shared/service/auth.service";
import * as i5 from "../../../shared/service/common-data.service";
import * as i6 from "@angular/router";
import * as i7 from "../../../shared/service/newsubject.service";
import * as i8 from "@angular/common";
import * as i9 from "@angular/platform-browser";
import * as i10 from "ngx-toastr";
import * as i11 from "../../../shared/service/common.service";
import * as i12 from "../../../shared/service/School.service";
import * as i13 from "../../../shared/service/admin.service";
import * as i14 from "../../../shared/service/login.service";
import * as i15 from "@angular/forms";
import * as i16 from "../../corporateschool/emptyschool/emptyschool.component";
import * as i17 from "../../auth/table/table.component";
const _c0 = ["bulkmodal"];
const _c1 = ["emailmodal"];
const _c2 = ["content"];
const _c3 = ["contentnow"];
const _c4 = ["viewdetails"];
function ListAdminComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "h4", 6)(2, "b");
    i0.ɵɵtext(3, "Reset Password Using E-Mail");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 7)(5, "div", 8)(6, "div", 9)(7, "div", 10)(8, "h5", 11);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(10, "div", 12)(11, "button", 13);
    i0.ɵɵlistener("click", function ListAdminComponent_ng_template_0_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(12, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 14);
    i0.ɵɵlistener("click", function ListAdminComponent_ng_template_0_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.change(1)); });
    i0.ɵɵtext(14, "Confirm");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("Are you sure want to reset password for ", ctx_r1.resetPassword.first_name, "");
} }
function ListAdminComponent_ng_template_2_em_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 27);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function ListAdminComponent_ng_template_2_em_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 27);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function ListAdminComponent_ng_template_2_em_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 28);
    i0.ɵɵtext(1, "Minimum 5 characters required");
    i0.ɵɵelementEnd();
} }
function ListAdminComponent_ng_template_2_em_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 27);
    i0.ɵɵtext(1, "Confirm Password is required");
    i0.ɵɵelementEnd();
} }
function ListAdminComponent_ng_template_2_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "em", 28);
    i0.ɵɵtext(2, " Enter same password as above ");
    i0.ɵɵelementEnd()();
} }
function ListAdminComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "h4", 6)(2, "b");
    i0.ɵɵtext(3, "Reset Password Now");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 7)(5, "div", 8)(6, "form", 15)(7, "div", 16);
    i0.ɵɵelement(8, "input", 17);
    i0.ɵɵtemplate(9, ListAdminComponent_ng_template_2_em_9_Template, 2, 0, "em", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 16)(11, "div", 19);
    i0.ɵɵelement(12, "input", 20);
    i0.ɵɵelementStart(13, "div", 21)(14, "span", 22)(15, "i", 23);
    i0.ɵɵlistener("click", function ListAdminComponent_ng_template_2_Template_i_click_15_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.conps = !ctx_r1.conps); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(16, ListAdminComponent_ng_template_2_em_16_Template, 2, 0, "em", 18)(17, ListAdminComponent_ng_template_2_em_17_Template, 2, 0, "em", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 16)(19, "div", 19);
    i0.ɵɵelement(20, "input", 25);
    i0.ɵɵelementStart(21, "div", 21)(22, "span", 26)(23, "i", 23);
    i0.ɵɵlistener("click", function ListAdminComponent_ng_template_2_Template_i_click_23_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.conps1 = !ctx_r1.conps1); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(24, ListAdminComponent_ng_template_2_em_24_Template, 2, 0, "em", 18)(25, ListAdminComponent_ng_template_2_div_25_Template, 3, 0, "div", 4);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(26, "div", 12)(27, "button", 13);
    i0.ɵɵlistener("click", function ListAdminComponent_ng_template_2_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancel()); });
    i0.ɵɵtext(28, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 14);
    i0.ɵɵlistener("click", function ListAdminComponent_ng_template_2_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.change(2)); });
    i0.ɵɵtext(30, "Confirm");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.adminPassword);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.adminPassword.get("email").valid && (ctx_r1.adminPassword.get("email").dirty || ctx_r1.adminPassword.get("email").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r1.conps ? "password" : "text");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.conps ? "fa fa-eye-slash" : "fa fa-eye");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.adminPassword.get("password").hasError("required") && (ctx_r1.adminPassword.get("password").dirty || ctx_r1.adminPassword.get("password").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.adminPassword.get("password").hasError("minlength"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r1.conps1 ? "password" : "text");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.conps1 ? "fa fa-eye-slash" : "fa fa-eye");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.adminPassword.get("confirmpassword").hasError("required") && (ctx_r1.adminPassword.get("confirmpassword").dirty || ctx_r1.adminPassword.get("confirmpassword").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.checkPasswords());
} }
function ListAdminComponent_ng_template_4_img_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + ctx_r1.viewdetail.profile_url), i0.ɵɵsanitizeUrl);
} }
function ListAdminComponent_ng_template_4_img_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} }
function ListAdminComponent_ng_template_4_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 45);
} }
function ListAdminComponent_ng_template_4_img_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 46);
} }
function ListAdminComponent_ng_template_4_img_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 46);
} }
function ListAdminComponent_ng_template_4_td_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 47);
    i0.ɵɵtext(1, "Active");
    i0.ɵɵelementEnd();
} }
function ListAdminComponent_ng_template_4_span_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 48);
    i0.ɵɵtext(1, "Suspended");
    i0.ɵɵelementEnd();
} }
function ListAdminComponent_ng_template_4_span_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 49);
    i0.ɵɵtext(1, "Disengaged");
    i0.ɵɵelementEnd();
} }
function ListAdminComponent_ng_template_4_span_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 48);
    i0.ɵɵtext(1, "Deleted");
    i0.ɵɵelementEnd();
} }
function ListAdminComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "h4", 29)(2, "b");
    i0.ɵɵtext(3, "Admin details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "i", 30);
    i0.ɵɵlistener("click", function ListAdminComponent_ng_template_4_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 7)(6, "div", 8)(7, "div", 9)(8, "div", 10)(9, "div", 31)(10, "div", 32)(11, "div", 33);
    i0.ɵɵtemplate(12, ListAdminComponent_ng_template_4_img_12_Template, 1, 1, "img", 34)(13, ListAdminComponent_ng_template_4_img_13_Template, 1, 0, "img", 35)(14, ListAdminComponent_ng_template_4_img_14_Template, 1, 0, "img", 36)(15, ListAdminComponent_ng_template_4_img_15_Template, 1, 0, "img", 37)(16, ListAdminComponent_ng_template_4_img_16_Template, 1, 0, "img", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "table")(18, "tr")(19, "td", 38)(20, "b");
    i0.ɵɵtext(21, "First Name:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "td");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "tr")(25, "td", 38)(26, "b");
    i0.ɵɵtext(27, "Last Name:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "td");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "tr")(31, "td", 39)(32, "b");
    i0.ɵɵtext(33, "E-mail id:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "td");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "tr")(37, "td", 38)(38, "b");
    i0.ɵɵtext(39, "Contact Number:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "td");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "tr")(43, "td", 38)(44, "b");
    i0.ɵɵtext(45, "Institution Name:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "td");
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "tr")(49, "td", 39)(50, "b");
    i0.ɵɵtext(51, "Status:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(52, ListAdminComponent_ng_template_4_td_52_Template, 2, 0, "td", 40)(53, ListAdminComponent_ng_template_4_span_53_Template, 2, 0, "span", 41)(54, ListAdminComponent_ng_template_4_span_54_Template, 2, 0, "span", 42)(55, ListAdminComponent_ng_template_4_span_55_Template, 2, 0, "span", 41);
    i0.ɵɵelementEnd()()()()()()()();
    i0.ɵɵelementStart(56, "div", 12)(57, "button", 13);
    i0.ɵɵlistener("click", function ListAdminComponent_ng_template_4_Template_button_click_57_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(58, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "button", 14);
    i0.ɵɵlistener("click", function ListAdminComponent_ng_template_4_Template_button_click_59_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.editAction(ctx_r1.rows)); });
    i0.ɵɵtext(60, "Edit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.profile_url != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.profile_url == "" && ctx_r1.viewdetail.gender.toLowerCase().trim() == "male");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.profile_url == "" && ctx_r1.viewdetail.gender.toLowerCase().trim() == "female");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.profile_url == "" && ctx_r1.viewdetail.gender.toLowerCase().trim() == "n/a");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.profile_url == "" && ctx_r1.viewdetail.gender == "");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.viewdetail.first_name);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.viewdetail.last_name);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.viewdetail.email_id);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.viewdetail.mobile);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.viewdetail.school_name);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.status == "Active");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.status == "Suspended");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.status == "Disengaged");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.status == "Deleted");
} }
function ListAdminComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50)(1, "div", 51)(2, "div", 52)(3, "h5");
    i0.ɵɵtext(4, "Admin Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 53)(6, "div", 9)(7, "div", 54)(8, "div", 55)(9, "a", 56);
    i0.ɵɵtext(10, "Add Admin");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(11, "div", 57)(12, "div", 58)(13, "app-table", 59);
    i0.ɵɵlistener("clickValue", function ListAdminComponent_div_6_Template_app_table_clickValue_13_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.emittedValue($event)); });
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("routerLink", "/admin/create-admin/add");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("TableType", "Admin")("TableArray", ctx_r1.listData);
} }
function ListAdminComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
function ViewComponent_ng_template_3_img_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 25);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + ctx_r2.viewdetail.profile_url), i0.ɵɵsanitizeUrl);
} }
function ViewComponent_ng_template_3_img_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 26);
} }
function ViewComponent_ng_template_3_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 27);
} }
function ViewComponent_ng_template_3_img_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 28);
} }
function ViewComponent_ng_template_3_img_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 28);
} }
function ViewComponent_ng_template_3_td_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 29);
    i0.ɵɵtext(1, " Active ");
    i0.ɵɵelementEnd();
} }
function ViewComponent_ng_template_3_span_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵtext(1, "Suspended");
    i0.ɵɵelementEnd();
} }
function ViewComponent_ng_template_3_span_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1, "Disengaged");
    i0.ɵɵelementEnd();
} }
function ViewComponent_ng_template_3_span_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵtext(1, "Deleted");
    i0.ɵɵelementEnd();
} }
function ViewComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "h4", 4)(2, "b");
    i0.ɵɵtext(3, "Admin details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "i", 5);
    i0.ɵɵlistener("click", function ViewComponent_ng_template_3_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "div", 11)(11, "div", 12);
    i0.ɵɵtemplate(12, ViewComponent_ng_template_3_img_12_Template, 1, 1, "img", 13)(13, ViewComponent_ng_template_3_img_13_Template, 1, 0, "img", 14)(14, ViewComponent_ng_template_3_img_14_Template, 1, 0, "img", 15)(15, ViewComponent_ng_template_3_img_15_Template, 1, 0, "img", 16)(16, ViewComponent_ng_template_3_img_16_Template, 1, 0, "img", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "table")(18, "tr")(19, "td", 17)(20, "b");
    i0.ɵɵtext(21, "First Name:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "td");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "tr")(25, "td", 17)(26, "b");
    i0.ɵɵtext(27, "Last Name:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "td");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "tr")(31, "td", 18)(32, "b");
    i0.ɵɵtext(33, "E-mail id:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "td");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "tr")(37, "td", 17)(38, "b");
    i0.ɵɵtext(39, "Contact Number:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "td");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "tr")(43, "td", 17)(44, "b");
    i0.ɵɵtext(45, "Institution Name:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "td");
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "tr")(49, "td", 18)(50, "b");
    i0.ɵɵtext(51, "Status:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(52, ViewComponent_ng_template_3_td_52_Template, 2, 0, "td", 19)(53, ViewComponent_ng_template_3_span_53_Template, 2, 0, "span", 20)(54, ViewComponent_ng_template_3_span_54_Template, 2, 0, "span", 21)(55, ViewComponent_ng_template_3_span_55_Template, 2, 0, "span", 20);
    i0.ɵɵelementEnd()()()()()()()();
    i0.ɵɵelementStart(56, "div", 22)(57, "button", 23);
    i0.ɵɵlistener("click", function ViewComponent_ng_template_3_Template_button_click_57_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵtext(58, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "button", 24);
    i0.ɵɵlistener("click", function ViewComponent_ng_template_3_Template_button_click_59_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editAction(ctx_r2.viewdetail)); });
    i0.ɵɵtext(60, "Edit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngIf", ctx_r2.viewdetail.profile_url != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewdetail.profile_url == "" && ctx_r2.viewdetail.gender.toLowerCase().trim() == "male");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewdetail.profile_url == "" && ctx_r2.viewdetail.gender.toLowerCase().trim() == "female");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewdetail.profile_url == "" && ctx_r2.viewdetail.gender.toLowerCase().trim() == "n/a");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewdetail.profile_url == "" && ctx_r2.viewdetail.gender == "");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r2.viewdetail.first_name);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.viewdetail.last_name);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.viewdetail.email_id);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.viewdetail.mobile);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.viewdetail.school_name);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r2.viewdetail.status == "Active");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewdetail.status == "Suspended");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewdetail.status == "Disengaged");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewdetail.status == "Deleted");
} }
export class ListAdminComponent {
    constructor(config, confi, validationService, modalService, auth, commondata, route, newSubject, firstcaps, sanitizer, toastr, common, brandservices, admin, loginService, formBuilder) {
        this.config = config;
        this.confi = confi;
        this.validationService = validationService;
        this.modalService = modalService;
        this.auth = auth;
        this.commondata = commondata;
        this.route = route;
        this.newSubject = newSubject;
        this.firstcaps = firstcaps;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.common = common;
        this.brandservices = brandservices;
        this.admin = admin;
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.contentBlukEmail = [];
        this.schoolDataList = 0;
        this.settings = {
            hideSubHeader: false,
            actions: {
                custom: [
                    {
                        name: 'editAction',
                        title: '&nbsp;<i class="fa  fa-pencil" title="Edit Admin"></i>'
                    },
                    {
                        name: 'resetpassword',
                        title: '&nbsp;<img src="assets/images/Group 17247.png" alt="" title="Reset Password By Mail" aria-hidden="true"></img>'
                    },
                    {
                        name: 'resetpasswordnow',
                        title: '<img src="assets/images/Group 17248.png" alt="" title="Reset Password Now" aria-hidden="true"></img>'
                    }
                ],
                add: false,
                edit: false,
                delete: false,
                position: 'right',
            },
            columns: {
                first_name: {
                    title: 'First Name',
                    type: 'custom',
                    renderComponent: ViewComponent,
                    onComponentInitFunction: (instance) => {
                        instance.save.subscribe(row => {
                        });
                    }
                },
                last_name: {
                    title: 'Last Name',
                    valuePrepareFunction: (data) => {
                        return this.firstcaps.transform(data);
                    }
                },
                email_id: {
                    title: 'Email-id'
                },
                school_name: {
                    title: 'Institution Name',
                    type: 'html',
                    valuePrepareFunction: (data) => {
                        return `<span class="text-capitalize">${data}</span>`;
                    }
                },
                status: {
                    title: 'Status'
                },
            },
        };
        config.backdrop = 'static';
        config.keyboard = false;
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        console.log(this.schoolStatus, 'this.schoolStatus');
        console.log(this.schoolStatus.length, 'this.schoolStatus');
        this.conps = true;
        this.conps1 = true;
        this.adminPassword = this.formBuilder.group({
            email: [''],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            confirmpassword: ''
        });
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.init(this.auth.getSessionData('school_id'));
    }
    init(data) {
        this.listAdmin('inst');
        this.schoolList();
    }
    checkPasswords() {
        const pass = this.adminPassword.controls.password.value;
        const confirmPass = this.adminPassword.controls.confirmpassword.value;
        this.passwordValid = pass !== confirmPass;
        return this.passwordValid;
    }
    emittedValue(event) {
        console.log(event, 'emiitedValue');
        if (event.emitType == 'mail' || event.emitType == 'now') {
            this.resetPassword = event.emitData;
            console.log(this.resetPassword, 'hgjhjh');
            this.showModal(event.emitType);
        }
        else if (event.emitType == 'edit') {
            this.editAction(event.emitData);
        }
        else if (event.emitType == 'name') {
            this.viewdetail = event.emitData;
            this.modalRef = this.modalService.open(this.viewDetailsContent);
        }
    }
    listAdmin(type) {
        console.log(type, 'type');
        let schoolid;
        if (type == 'inst') {
            schoolid = this.auth.getSessionData('school_id');
        }
        else {
            schoolid = this.schoolDataList;
        }
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: schoolid
        };
        this.admin.adminList(data).subscribe((successData) => {
            this.adminListSuccess(successData);
        }, (error) => {
            this.adminListFailure(error);
        });
    }
    adminListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.listData = successData.ResponseObject;
            this.listData.forEach((value, index, array) => {
                this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
                    'Suspended' : this.listData[index].status == 3 ? 'Disengaged' : this.listData[index].status == 4 ? 'Deleted' : '';
            });
        }
    }
    adminListFailure(error) {
        this.commondata.showLoader(false);
    }
    onCustomAction(event) {
        switch (event.action) {
            case 'editAction':
                this.editAction(event);
                break;
            case 'resetpassword':
                this.resetPassword = event.data;
                this.showModal('mail');
                break;
            case 'resetpasswordnow':
                this.resetPassword = event.data;
                this.showModal('now');
        }
    }
    open(content) {
        this.modalService.open(content);
    }
    close() {
        this.modalRef.close();
        this.schoolId = null;
        this.getUrl = '';
        this.filetype = '';
        this.contentBlukEmail = '';
    }
    cancel() {
        this.modalRef.close();
        this.adminPassword.reset();
    }
    editAction(rows) {
        this.auth.setSessionData('editAdmin', JSON.stringify(rows.data));
        this.route.navigate(['/admin/create-admin/edit']);
        this.close();
    }
    schoolList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.brandservices.getSchoolList(data).subscribe((successData) => {
            this.schoolListSuccess(successData);
        }, (error) => {
            this.schoolListFailure(error);
        });
    }
    schoolListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.schoolData = successData.ResponseObject;
            this.schoolData.unshift({ school_name: 'All Institution', school_id: 0 });
        }
    }
    schoolListFailure(error) {
        this.commondata.showLoader(false);
    }
    change(type) {
        const data = {
            platform: 'web',
            role_id: this.resetPassword.role,
            email_id: this.resetPassword.email_id,
        };
        if (type == 1) {
            this.loginService.forgotPassword(data).subscribe((successData) => {
                this.changeSuccess(successData, type);
            }, (error) => {
                this.changeFailure(error);
            });
        }
        else {
            if (this.adminPassword.valid) {
                if (this.passwordValid == false) {
                    data['password'] = this.adminPassword.controls.confirmpassword.value;
                    this.loginService.forgotPassword(data).subscribe((successData) => {
                        this.changeSuccess(successData, type);
                    }, (error) => {
                        this.changeFailure(error);
                    });
                }
                else {
                    this.toastr.error('Please enter same password in new and confirm password');
                }
            }
            else {
                this.validationService.validateAllFormFields(this.adminPassword);
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }
    }
    changeSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.message = successData.ResponseObject.message;
            this.route.navigate(['/users/list-user']);
            if (type == 1) {
                this.toastr.success('E-mail invite sent successfully for reset password ', 'Admin');
            }
            else {
                this.adminPassword.reset();
                this.conps = true;
                this.conps1 = true;
                this.toastr.success(successData.ResponseObject.message, 'Admin');
            }
            this.close();
        }
        else {
            this.commondata.showLoader(false);
        }
    }
    changeFailure(error) {
        console.log(error, 'error');
    }
    showModal(type) {
        if (type == 'mail') {
            this.modalRef = this.modalService.open(this.modalContent);
        }
        else if (type == 'now') {
            this.modalRef = this.modalService.open(this.modalContentnow);
            this.adminPassword.controls.email.patchValue(this.resetPassword.email_id);
        }
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
    static { this.ɵfac = function ListAdminComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListAdminComponent)(i0.ɵɵdirectiveInject(i1.NgbModalConfig), i0.ɵɵdirectiveInject(i2.ConfigurationService), i0.ɵɵdirectiveInject(i3.ValidationService), i0.ɵɵdirectiveInject(i1.NgbModal), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i7.NewsubjectService), i0.ɵɵdirectiveInject(i8.TitleCasePipe), i0.ɵɵdirectiveInject(i9.DomSanitizer), i0.ɵɵdirectiveInject(i10.ToastrService), i0.ɵɵdirectiveInject(i11.CommonService), i0.ɵɵdirectiveInject(i12.SchoolService), i0.ɵɵdirectiveInject(i13.AdminService), i0.ɵɵdirectiveInject(i14.LoginService), i0.ɵɵdirectiveInject(i15.FormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListAdminComponent, selectors: [["app-list-admin"]], viewQuery: function ListAdminComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bulkContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.emailContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContentnow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewDetailsContent = _t.first);
        } }, inputs: { page: "page" }, features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 2, consts: [["content", ""], ["contentnow", ""], ["viewdetails", ""], ["class", "container-fluid px-0", 4, "ngIf"], [4, "ngIf"], [1, "modal-header"], [1, "modal-title", "col-12", "text-center"], [1, "modal-body"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "text-center", "mt-3"], [1, "modal-footer"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "formGroup"], [1, "row", "form-group", "auth-form"], ["required", "", "readonly", "", "type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control"], ["class", "error", 4, "ngIf"], [1, "input-group"], ["required", "", "type", "text", "formControlName", "password", "placeholder", "Password", "aria-label", "Recipient's username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "type"], [1, "input-group-append"], ["id", "basic-addon3", 1, "input-group-text"], ["aria-hidden", "true", 2, "color", "#7F3486", 3, "click"], ["class", "error help-block", 4, "ngIf"], ["required", "", "type", "text", "formControlName", "confirmpassword", "placeholder", "Confirm Password", "aria-label", "Recipient's username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "type"], ["id", "basic-addon2", 1, "input-group-text"], [1, "error"], [1, "error", "help-block"], ["id", "modal-basic-title", 1, "modal-title", "col-11", "text-center"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-lg", "mt-1", 2, "color", "#7F3486", "cursor", "pointer", "float", "right", 3, "click"], [1, "card-body", "pt-2"], [1, "row", "d-flex", "flex-column"], [1, "mb-5", "fit-image"], ["alt", "", 3, "src", 4, "ngIf"], ["src", "assets/images/ristaschool/male.png", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/female1.png", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/Do not want to disclose.png", "alt", "", 4, "ngIf"], [1, "pl-4", "capital"], [1, "pl-4"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], ["alt", "", 3, "src"], ["src", "assets/images/ristaschool/male.png", "alt", ""], ["src", "assets/images/ristaschool/female1.png", "alt", ""], ["src", "assets/images/ristaschool/Do not want to disclose.png", "alt", ""], [1, "badge", "badge-success"], [1, "badge", "badge-danger"], [1, "badge", "badge-warning"], [1, "container-fluid", "px-0"], [1, "card", "pt-1"], [1, "card-header"], [1, "card-body"], [1, "col-12"], [1, "btn-popup", "pull-right"], [1, "btn", "btn-primary", 3, "routerLink"], ["id", "batchDelete", 1, "category-table", "custom-datatable", "transcation-datatable", "user-image"], [1, "table-responsive"], [3, "clickValue", "TableType", "TableArray"]], template: function ListAdminComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListAdminComponent_ng_template_0_Template, 15, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, ListAdminComponent_ng_template_2_Template, 31, 12, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(4, ListAdminComponent_ng_template_4_Template, 61, 14, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(6, ListAdminComponent_div_6_Template, 14, 3, "div", 3)(7, ListAdminComponent_div_7_Template, 2, 0, "div", 4);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", (ctx.schoolStatus == null ? null : ctx.schoolStatus.length) != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.schoolStatus == null ? null : ctx.schoolStatus.length) == 0);
        } }, dependencies: [i8.NgIf, i15.ɵNgNoValidate, i15.DefaultValueAccessor, i15.NgControlStatus, i15.NgControlStatusGroup, i15.RequiredValidator, i15.FormGroupDirective, i15.FormControlName, i6.RouterLink, i16.EmptyschoolComponent, i17.TableComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListAdminComponent, [{
        type: Component,
        args: [{ selector: 'app-list-admin', template: "<!-- Container-fluid starts-->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Reset Password Using E-Mail</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <h5 class=\"text-center mt-3\">Are you sure want to reset password for {{resetPassword.first_name}}</h5>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"change(1)\">Confirm</button>\n    </div>\n</ng-template>\n<ng-template #contentnow let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Reset Password Now</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <form [formGroup]=\"adminPassword\">\n                <div class=\"row form-group auth-form\">\n                    <input required=\"\" readonly class=\"form-control\" type=\"text\" placeholder=\"Email\" formControlName=\"email\">\n                        <em class=\"error\" *ngIf=\"!adminPassword.get('email').valid && (adminPassword.get('email').dirty || adminPassword.get('email').touched)\">Email is required</em>\n                </div>\n                <div class=\"row form-group auth-form\">\n                    <div class=\"input-group\">\n                        <input required=\"\" type=\"text\" formControlName=\"password\"\n                           class=\"form-control\" placeholder=\"Password\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon1\" [type]=\"conps ? 'password' : 'text'\">\n                                <div class=\"input-group-append\">\n                                     <span class=\"input-group-text\" id=\"basic-addon3\">\n                                            <i [class]=\"conps ? 'fa fa-eye-slash' : 'fa fa-eye'\" style=\"color: #7F3486\" aria-hidden=\"true\" (click)=\"conps = !conps\"></i>\n                                     </span>\n                                </div>\n                    </div>\n                    <em class=\"error\" *ngIf=\"adminPassword.get('password').hasError('required') && (adminPassword.get('password').dirty || adminPassword.get('password').touched)\">Password is required</em>\n                    <em *ngIf=\"adminPassword.get('password').hasError('minlength')\" class=\"error help-block\">Minimum 5 characters required</em>\n                </div>\n                <div class=\"row form-group auth-form\">\n                    <div class=\"input-group\">\n                        <input required=\"\" type=\"text\" formControlName=\"confirmpassword\"\n                               class=\"form-control\" placeholder=\"Confirm Password\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon1\" [type]=\"conps1 ? 'password' : 'text'\">\n                        <div class=\"input-group-append\">\n                           <span class=\"input-group-text\" id=\"basic-addon2\">\n                               <i [class]=\"conps1 ? 'fa fa-eye-slash' : 'fa fa-eye'\" style=\"color: #7F3486\" aria-hidden=\"true\" (click)=\"conps1 = !conps1\"></i>\n                           </span>\n                        </div>\n                    </div>\n                    <em class=\"error\" *ngIf=\"adminPassword.get('confirmpassword').hasError('required') && (adminPassword.get('confirmpassword').dirty || adminPassword.get('confirmpassword').touched)\">Confirm Password is required</em>\n                    <div *ngIf=\"checkPasswords()\">\n                        <em class=\"error help-block\">\n                            Enter same password as above\n                        </em>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"cancel()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"change(2)\">Confirm</button>\n    </div>\n</ng-template>\n\n<ng-template #viewdetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-11 text-center\" id=\"modal-basic-title\"><b>Admin details</b></h4>\n<!--        <div class=\"row\">-->\n<!--        <app-feather-icons  [icon]=\"'edit'\" style=\"cursor: pointer;float: right;\" (click)=\"editAction(rows)\"></app-feather-icons>-->\n        <i class=\"fa fa-close fa-lg mt-1\" aria-hidden=\"true\" style=\"color:#7F3486; cursor: pointer; float: right;\" (click)=\"close()\"></i>\n    </div>\n<!--    </div>-->\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"card-body pt-2\">\n                        <div class=\"row d-flex flex-column\">\n                            <div class=\"mb-5 fit-image\">\n                                <img *ngIf=\"viewdetail.profile_url != ''\"\n                                     [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + viewdetail.profile_url)\" alt=\"\">\n                                <img *ngIf=\"viewdetail.profile_url == '' && viewdetail.gender.toLowerCase().trim() == 'male'\"\n                                     src=\"assets/images/ristaschool/male.png\" alt=\"\">\n                                <img *ngIf=\"viewdetail.profile_url == '' && viewdetail.gender.toLowerCase().trim() == 'female'\"\n                                     src=\"assets/images/ristaschool/female1.png\" alt=\"\">\n                                <img *ngIf=\"viewdetail.profile_url == '' && viewdetail.gender.toLowerCase().trim() == 'n/a'\"\n                                     src=\"assets/images/ristaschool/Do not want to disclose.png\" alt=\"\">\n                                <img *ngIf=\"viewdetail.profile_url == '' && viewdetail.gender == ''\"\n                                     src=\"assets/images/ristaschool/Do not want to disclose.png\" alt=\"\">\n                            </div>\n                            <table>\n                                <tr>\n                                    <td class=\"pl-4 capital\" ><b>First Name:</b></td>\n                                    <td>{{viewdetail.first_name}}</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"pl-4 capital\"><b>Last Name:</b></td>\n                                    <td>{{viewdetail.last_name}}</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"pl-4\"><b>E-mail id:</b></td>\n                                    <td>{{viewdetail.email_id}}</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"pl-4 capital\"><b>Contact Number:</b></td>\n                                    <td>{{viewdetail.mobile}}</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"pl-4 capital\"><b>Institution Name:</b></td>\n                                    <td>{{viewdetail.school_name}}</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"pl-4\"><b>Status:</b></td>\n                                    <td class=\"badge badge-success\" *ngIf=\"viewdetail.status == 'Active'\">Active</td>\n                                    <span class=\"badge badge-danger\" *ngIf=\"viewdetail.status == 'Suspended'\">Suspended</span>\n                                    <span class=\"badge badge-warning\" *ngIf=\"viewdetail.status  == 'Disengaged'\">Disengaged</span>\n                                    <span class=\"badge badge-danger\" *ngIf=\"viewdetail.status  == 'Deleted'\">Deleted</span>\n                                </tr>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editAction(rows)\">Edit</button>\n    </div>\n</ng-template>\n\n<div class=\"container-fluid px-0\" *ngIf=\"schoolStatus?.length != 0\">\n    <div class=\"card pt-1\">\n        <div class=\"card-header\">\n            <h5>Admin Details</h5>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"btn-popup pull-right\">\n                        <a class=\"btn btn-primary\" [routerLink]=\"'/admin/create-admin/add'\">Add Admin</a>\n                </div>\n            </div>\n            </div>\n            <div id=\"batchDelete\" class=\"category-table custom-datatable transcation-datatable user-image\">\n                <div class=\"table-responsive\">\n                    <app-table [TableType]=\"'Admin'\" [TableArray]=\"listData\" (clickValue)=\"emittedValue($event)\"></app-table>\n                </div>\n            </div>\n    </div>\n</div>\n</div>\n<div *ngIf=\"schoolStatus?.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n<!-- Container-fluid Ends-->\n" }]
    }], () => [{ type: i1.NgbModalConfig }, { type: i2.ConfigurationService }, { type: i3.ValidationService }, { type: i1.NgbModal }, { type: i4.AuthService }, { type: i5.CommonDataService }, { type: i6.Router }, { type: i7.NewsubjectService }, { type: i8.TitleCasePipe }, { type: i9.DomSanitizer }, { type: i10.ToastrService }, { type: i11.CommonService }, { type: i12.SchoolService }, { type: i13.AdminService }, { type: i14.LoginService }, { type: i15.FormBuilder }], { bulkContent: [{
            type: ViewChild,
            args: ['bulkmodal']
        }], emailContent: [{
            type: ViewChild,
            args: ['emailmodal']
        }], modalContent: [{
            type: ViewChild,
            args: ['content']
        }], modalContentnow: [{
            type: ViewChild,
            args: ['contentnow']
        }], page: [{
            type: Input
        }], viewDetailsContent: [{
            type: ViewChild,
            args: ['viewdetails']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListAdminComponent, { className: "ListAdminComponent" }); })();
export class ViewComponent {
    constructor(modalService, route, config, sanitizer, confi, auth) {
        this.modalService = modalService;
        this.route = route;
        this.config = config;
        this.sanitizer = sanitizer;
        this.confi = confi;
        this.auth = auth;
        this.save = new EventEmitter();
        config.backdrop = 'static';
        config.keyboard = false;
        this.webhost = this.confi.getimgUrl();
    }
    ngOnInit() {
        this.viewdetail = this.rowData;
    }
    viewdetailsList() {
        this.modalRef = this.modalService.open(this.viewDetailsContent);
    }
    open(content) {
        this.modalService.open(content);
    }
    close() {
        this.modalRef.close();
    }
    cancel() {
        this.modalRef.close();
    }
    editAction(rows) {
        this.auth.setSessionData('editAdmin', JSON.stringify(rows));
        this.route.navigate(['/admin/create-admin/edit']);
        this.close();
    }
    static { this.ɵfac = function ViewComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ViewComponent)(i0.ɵɵdirectiveInject(i1.NgbModal), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i1.NgbModalConfig), i0.ɵɵdirectiveInject(i9.DomSanitizer), i0.ɵɵdirectiveInject(i2.ConfigurationService), i0.ɵɵdirectiveInject(i4.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ViewComponent, selectors: [["button-toggle"]], viewQuery: function ViewComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c4, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewDetailsContent = _t.first);
        } }, inputs: { value: "value", rowData: "rowData" }, outputs: { save: "save" }, decls: 5, vars: 1, consts: [["viewdetails", ""], [1, "form-group"], ["data-toggle", "modal", "data-target", "#myModal", 1, "text-capitalize", "font-weight-bold", "table-name", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title", "col-11", "text-center"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-lg", "mt-1", 2, "color", "#7F3486", "cursor", "pointer", "float", "right", 3, "click"], [1, "modal-body"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card-body", "pt-2"], [1, "row", "d-flex", "flex-column"], [1, "mb-5", "fit-image"], ["alt", "", 3, "src", 4, "ngIf"], ["src", "assets/images/ristaschool/male.png", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/female1.png", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/Do not want to disclose.png", "alt", "", 4, "ngIf"], [1, "pl-4", "capital"], [1, "pl-4"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["alt", "", 3, "src"], ["src", "assets/images/ristaschool/male.png", "alt", ""], ["src", "assets/images/ristaschool/female1.png", "alt", ""], ["src", "assets/images/ristaschool/Do not want to disclose.png", "alt", ""], [1, "badge", "badge-success"], [1, "badge", "badge-danger"], [1, "badge", "badge-warning"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "span", 2);
            i0.ɵɵlistener("click", function ViewComponent_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.viewdetailsList()); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(3, ViewComponent_ng_template_3_Template, 61, 14, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.viewdetail.first_name);
        } }, dependencies: [i8.NgIf], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ViewComponent, [{
        type: Component,
        args: [{
                selector: 'button-toggle',
                template: `

        <div class="form-group">
            <span class="text-capitalize font-weight-bold table-name" data-toggle="modal" data-target="#myModal"
                  (click)="viewdetailsList()">{{viewdetail.first_name}}</span>
        </div>
        <ng-template #viewdetails let-c="close" let-d="dismiss">
            <div class="modal-header">
                <h4 class="modal-title col-11 text-center" id="modal-basic-title"><b>Admin details</b></h4>
                <i class="fa fa-close fa-lg mt-1" aria-hidden="true"
                   style="color:#7F3486; cursor: pointer; float: right;" (click)="close()"></i>
            </div>
            <div class="modal-body">
                <!-- Container-fluid starts-->
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card-body pt-2">
                                <div class="row d-flex flex-column">
                                    <div class="mb-5 fit-image">
                                        <img *ngIf="viewdetail.profile_url != ''"
                                             [src]="sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + viewdetail.profile_url)"
                                             alt="">
                                        <img *ngIf="viewdetail.profile_url == '' && viewdetail.gender.toLowerCase().trim() == 'male'"
                                             src="assets/images/ristaschool/male.png" alt="">
                                        <img *ngIf="viewdetail.profile_url == '' && viewdetail.gender.toLowerCase().trim() == 'female'"
                                             src="assets/images/ristaschool/female1.png" alt="">
                                        <img *ngIf="viewdetail.profile_url == '' && viewdetail.gender.toLowerCase().trim() == 'n/a'"
                                             src="assets/images/ristaschool/Do not want to disclose.png" alt="">
                                        <img *ngIf="viewdetail.profile_url == '' && viewdetail.gender == ''"
                                             src="assets/images/ristaschool/Do not want to disclose.png" alt="">
                                    </div>
                                    <table>
                                        <tr>
                                            <td class="pl-4 capital"><b>First Name:</b></td>
                                            <td>{{viewdetail.first_name}}</td>
                                        </tr>
                                        <tr>
                                            <td class="pl-4 capital"><b>Last Name:</b></td>
                                            <td>{{viewdetail.last_name}}</td>
                                        </tr>
                                        <tr>
                                            <td class="pl-4"><b>E-mail id:</b></td>
                                            <td>{{viewdetail.email_id}}</td>
                                        </tr>
                                        <tr>
                                            <td class="pl-4 capital"><b>Contact Number:</b></td>
                                            <td>{{viewdetail.mobile}}</td>
                                        </tr>
                                        <tr>
                                            <td class="pl-4 capital"><b>Institution Name:</b></td>
                                            <td>{{viewdetail.school_name}}</td>
                                        </tr>
                                        <tr>
                                            <td class="pl-4"><b>Status:</b></td>
                                            <td class="badge badge-success" *ngIf="viewdetail.status == 'Active'">
                                                Active
                                            </td>
                                            <span class="badge badge-danger" *ngIf="viewdetail.status == 'Suspended'">Suspended</span>
                                            <span class="badge badge-warning" *ngIf="viewdetail.status == 'Disengaged'">Disengaged</span>
                                            <span class="badge badge-danger" *ngIf="viewdetail.status == 'Deleted'">Deleted</span>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Container-fluid Ends-->

            </div>
            <div class="modal-footer">
                <button type="button" class="btn cancel" (click)="close()">Cancel</button>
                <button type="button" class="btn btn-primary" (click)="editAction(viewdetail)">Edit</button>
            </div>
        </ng-template>
    `
            }]
    }], () => [{ type: i1.NgbModal }, { type: i6.Router }, { type: i1.NgbModalConfig }, { type: i9.DomSanitizer }, { type: i2.ConfigurationService }, { type: i4.AuthService }], { value: [{
            type: Input
        }], rowData: [{
            type: Input
        }], save: [{
            type: Output
        }], viewDetailsContent: [{
            type: ViewChild,
            args: ['viewdetails']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ViewComponent, { className: "ViewComponent" }); })();
//# sourceMappingURL=list-admin.component.js.map