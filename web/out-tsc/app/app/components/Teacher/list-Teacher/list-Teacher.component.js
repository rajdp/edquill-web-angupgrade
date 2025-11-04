import { Component, Input, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/category.service";
import * as i2 from "../../../shared/service/configuration.service";
import * as i3 from "../../../shared/service/common.service";
import * as i4 from "../../../shared/service/newsubject.service";
import * as i5 from "ngx-toastr";
import * as i6 from "../../../shared/service/teacher.service";
import * as i7 from "@angular/platform-browser";
import * as i8 from "@angular/common";
import * as i9 from "@ng-bootstrap/ng-bootstrap";
import * as i10 from "../../../shared/service/auth.service";
import * as i11 from "../../../shared/service/common-data.service";
import * as i12 from "@angular/router";
import * as i13 from "@angular/forms";
import * as i14 from "../../../shared/service/login.service";
import * as i15 from "../../../shared/service/validation.service";
import * as i16 from "ngx-chips";
import * as i17 from "../../corporateschool/emptyschool/emptyschool.component";
import * as i18 from "../../auth/table/table.component";
const _c0 = ["content"];
const _c1 = ["bulkmodal"];
const _c2 = ["emailmodal"];
const _c3 = ["content1"];
const _c4 = ["contentnow"];
const _c5 = ["viewdetails"];
const _c6 = () => [32, 188, 186, 13, 9];
function ListTeacherComponent_ng_template_0_label_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 27);
    i0.ɵɵtext(1, "Upload Excel");
    i0.ɵɵelementEnd();
} }
function ListTeacherComponent_ng_template_0_label_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r1.filetype[0], ".", ctx_r1.filetype[1], "");
} }
function ListTeacherComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "h3");
    i0.ɵɵtext(2, "Bulk Upload");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 10)(4, "i", 11);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_0_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 12)(6, "div", 13)(7, "div", 14)(8, "div", 15)(9, "div", 13)(10, "div", 16)(11, "div", 17);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_0_Template_div_click_11_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.downloadExcel()); });
    i0.ɵɵtext(12, " Download Sample Excel ");
    i0.ɵɵelement(13, "i", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 19)(15, "input", 20, 5);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_0_Template_input_click_15_listener() { i0.ɵɵrestoreView(_r1); const fileUploader_r3 = i0.ɵɵreference(16); return i0.ɵɵresetView(fileUploader_r3.value = null); })("change", function ListTeacherComponent_ng_template_0_Template_input_change_15_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.readUrl($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(17, ListTeacherComponent_ng_template_0_label_17_Template, 2, 0, "label", 21)(18, ListTeacherComponent_ng_template_0_label_18_Template, 2, 2, "label", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 22)(20, "span", 23);
    i0.ɵɵtext(21, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "small");
    i0.ɵɵtext(23, "Note: Upload format should be same as Sample Excel Format");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(24, "div", 24)(25, "div", 25)(26, "button", 26);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_0_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onUploadFinished("upload")); });
    i0.ɵɵtext(27, "Submit");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngIf", ctx_r1.filetype == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.filetype != "");
} }
function ListTeacherComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "h3");
    i0.ɵɵtext(2, "Email Invite");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 10)(4, "i", 11);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_2_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 28)(6, "div", 13)(7, "div", 14)(8, "div", 12)(9, "tag-input", 29, 6);
    i0.ɵɵtwoWayListener("ngModelChange", function ListTeacherComponent_ng_template_2_Template_tag_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.teacherBlukEmail, $event) || (ctx_r1.teacherBlukEmail = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(11, "div", 24)(12, "button", 30);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_2_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.emailInviteUpload("email")); });
    i0.ɵɵtext(13, "Submit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.teacherBlukEmail);
    i0.ɵɵproperty("errorMessages", ctx_r1.errorMessages)("validators", ctx_r1.validators)("editable", true)("separatorKeyCodes", i0.ɵɵpureFunction0(10, _c6))("placeholder", "Add email")("secondaryPlaceholder", "Enter email address")("clearOnBlur", true)("addOnPaste", true)("addOnBlur", true);
} }
function ListTeacherComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 32)(2, "div", 33)(3, "h5");
    i0.ɵɵtext(4, "Teacher Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 34)(6, "div", 35)(7, "div", 36)(8, "a", 37);
    i0.ɵɵlistener("click", function ListTeacherComponent_div_4_Template_a_click_8_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.auth.setSessionData("UsersRedirection", "Teacher")); });
    i0.ɵɵtext(9, "Add Teacher");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 38)(11, "button", 39);
    i0.ɵɵtext(12, "Invite ");
    i0.ɵɵelement(13, "i", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 41)(15, "a", 42);
    i0.ɵɵlistener("click", function ListTeacherComponent_div_4_Template_a_click_15_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.bulkModal()); });
    i0.ɵɵtext(16, "Bulk Upload");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "a", 42);
    i0.ɵɵlistener("click", function ListTeacherComponent_div_4_Template_a_click_17_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.emailModal()); });
    i0.ɵɵtext(18, "Invite By Email");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(19, "div", 43)(20, "div", 44)(21, "app-table", 45);
    i0.ɵɵlistener("clickValue", function ListTeacherComponent_div_4_Template_app_table_clickValue_21_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.emittedValue($event)); });
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("routerLink", "/Teacher/create-Teacher/add");
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("TableType", "Teacher")("TableArray", ctx_r1.listData);
} }
function ListTeacherComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
function ListTeacherComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "h4", 46)(2, "b");
    i0.ɵɵtext(3, "Reset Password Using E-Mail");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 12)(5, "div", 28)(6, "div", 13)(7, "div", 14)(8, "h5", 47);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(10, "div", 24)(11, "button", 48);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_6_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(12, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 49);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_6_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.change(1)); });
    i0.ɵɵtext(14, "Confirm");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("Are you sure want to reset password for ", ctx_r1.resetPassword.first_name, "");
} }
function ListTeacherComponent_ng_template_8_em_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 62);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function ListTeacherComponent_ng_template_8_em_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 62);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function ListTeacherComponent_ng_template_8_em_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 63);
    i0.ɵɵtext(1, "Minimum 5 characters required");
    i0.ɵɵelementEnd();
} }
function ListTeacherComponent_ng_template_8_em_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 62);
    i0.ɵɵtext(1, "Confirm Password is required");
    i0.ɵɵelementEnd();
} }
function ListTeacherComponent_ng_template_8_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "em", 63);
    i0.ɵɵtext(2, " Enter same password as above ");
    i0.ɵɵelementEnd()();
} }
function ListTeacherComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "h4", 46)(2, "b");
    i0.ɵɵtext(3, "Reset Password Now");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 12)(5, "div", 28)(6, "form", 50)(7, "div", 51);
    i0.ɵɵelement(8, "input", 52);
    i0.ɵɵtemplate(9, ListTeacherComponent_ng_template_8_em_9_Template, 2, 0, "em", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 51)(11, "div", 54);
    i0.ɵɵelement(12, "input", 55);
    i0.ɵɵelementStart(13, "div", 56)(14, "span", 57)(15, "i", 58);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_8_Template_i_click_15_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.conps = !ctx_r1.conps); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(16, ListTeacherComponent_ng_template_8_em_16_Template, 2, 0, "em", 53)(17, ListTeacherComponent_ng_template_8_em_17_Template, 2, 0, "em", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 51)(19, "div", 54);
    i0.ɵɵelement(20, "input", 60);
    i0.ɵɵelementStart(21, "div", 56)(22, "span", 61)(23, "i", 58);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_8_Template_i_click_23_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.conps1 = !ctx_r1.conps1); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(24, ListTeacherComponent_ng_template_8_em_24_Template, 2, 0, "em", 53)(25, ListTeacherComponent_ng_template_8_div_25_Template, 3, 0, "div", 8);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(26, "div", 24)(27, "button", 48);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_8_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancel()); });
    i0.ɵɵtext(28, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 49);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_8_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.change(2)); });
    i0.ɵɵtext(30, "Confirm");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.ntPassword);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.ntPassword.get("email").valid && (ctx_r1.ntPassword.get("email").dirty || ctx_r1.ntPassword.get("email").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r1.conps ? "password" : "text");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.conps ? "fa fa-eye-slash" : "fa fa-eye");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.ntPassword.get("password").hasError("required") && (ctx_r1.ntPassword.get("password").dirty || ctx_r1.ntPassword.get("password").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.ntPassword.get("password").hasError("minlength"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r1.conps1 ? "password" : "text");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.conps1 ? "fa fa-eye-slash" : "fa fa-eye");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.ntPassword.get("confirmpassword").hasError("required") && (ctx_r1.ntPassword.get("confirmpassword").dirty || ctx_r1.ntPassword.get("confirmpassword").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.checkPasswords());
} }
function ListTeacherComponent_ng_template_10_img_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 78);
} }
function ListTeacherComponent_ng_template_10_img_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 79);
} }
function ListTeacherComponent_ng_template_10_img_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 80);
} }
function ListTeacherComponent_ng_template_10_img_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 81);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + ctx_r1.viewdetail.profile_url), i0.ɵɵsanitizeUrl);
} }
function ListTeacherComponent_ng_template_10_td_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 82);
    i0.ɵɵtext(1, " Active ");
    i0.ɵɵelementEnd();
} }
function ListTeacherComponent_ng_template_10_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 83);
    i0.ɵɵtext(1, "Suspended");
    i0.ɵɵelementEnd();
} }
function ListTeacherComponent_ng_template_10_span_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 84);
    i0.ɵɵtext(1, "Disengaged");
    i0.ɵɵelementEnd();
} }
function ListTeacherComponent_ng_template_10_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 83);
    i0.ɵɵtext(1, "Deleted");
    i0.ɵɵelementEnd();
} }
function ListTeacherComponent_ng_template_10_td_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.viewdetail.address1);
} }
function ListTeacherComponent_ng_template_10_tr_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td");
    i0.ɵɵelementStart(2, "td");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.viewdetail.address2);
} }
function ListTeacherComponent_ng_template_10_tr_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td");
    i0.ɵɵelementStart(2, "td");
    i0.ɵɵtext(3);
    i0.ɵɵelement(4, "br");
    i0.ɵɵtext(5);
    i0.ɵɵelement(6, "br");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.viewdetail.city);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.viewdetail.state_name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.viewdetail.country_name, "");
} }
function ListTeacherComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "h4", 64);
    i0.ɵɵtext(2, "Teacher details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 65);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_10_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 12)(5, "div", 28)(6, "div", 13)(7, "div", 14)(8, "div", 15)(9, "div", 66)(10, "div", 67);
    i0.ɵɵtemplate(11, ListTeacherComponent_ng_template_10_img_11_Template, 1, 0, "img", 68)(12, ListTeacherComponent_ng_template_10_img_12_Template, 1, 0, "img", 69)(13, ListTeacherComponent_ng_template_10_img_13_Template, 1, 0, "img", 70)(14, ListTeacherComponent_ng_template_10_img_14_Template, 1, 1, "img", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "table", 72)(16, "tr")(17, "td", 73)(18, "b");
    i0.ɵɵtext(19, "Status:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(20, ListTeacherComponent_ng_template_10_td_20_Template, 2, 0, "td", 74)(21, ListTeacherComponent_ng_template_10_span_21_Template, 2, 0, "span", 75)(22, ListTeacherComponent_ng_template_10_span_22_Template, 2, 0, "span", 76)(23, ListTeacherComponent_ng_template_10_span_23_Template, 2, 0, "span", 75);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "tr")(25, "td", 73)(26, "b");
    i0.ɵɵtext(27, "Contact Number:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "td");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "tr")(31, "td", 77)(32, "b");
    i0.ɵɵtext(33, "Address:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(34, ListTeacherComponent_ng_template_10_td_34_Template, 2, 1, "td", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(35, ListTeacherComponent_ng_template_10_tr_35_Template, 4, 1, "tr", 8)(36, ListTeacherComponent_ng_template_10_tr_36_Template, 8, 3, "tr", 8);
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(37, "div", 24)(38, "button", 48);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_10_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(39, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "button", 49);
    i0.ɵɵlistener("click", function ListTeacherComponent_ng_template_10_Template_button_click_40_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.editAction(ctx_r1.viewdetail)); });
    i0.ɵɵtext(41, "Edit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", (ctx_r1.viewdetail.profile_url == "" || ctx_r1.viewdetail.profile_url == null) && ctx_r1.viewdetail.gender.toLowerCase() == "male");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.viewdetail.profile_url == "" || ctx_r1.viewdetail.profile_url == null) && ctx_r1.viewdetail.gender.toLowerCase() == "female");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.viewdetail.profile_url == "" || ctx_r1.viewdetail.profile_url == null) && (ctx_r1.viewdetail.gender.toLowerCase() == "n/a" || ctx_r1.viewdetail.gender == ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.profile_url != "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.status == "Active");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.status == "Suspended");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.status == "Disengaged");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.status == "Deleted");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.viewdetail.mobile);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.address1 != "" && ctx_r1.viewdetail.address1 != null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.address2 != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.viewdetail.city != "" && ctx_r1.viewdetail.city != null && ctx_r1.viewdetail.state_name != "");
} }
export class ListTeacherComponent {
    must_be_email(control) {
        var EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;
        if (control.value.length != "" && !EMAIL_REGEXP.test(control.value)) {
            return { "must_be_email": true };
        }
        return null;
    }
    constructor(category, configurationService, common, newSubject, toastr, teacher, sanitizer, firstcaps, config, confi, modalService, auth, commondata, route, formBuilder, loginService, validationService) {
        this.category = category;
        this.configurationService = configurationService;
        this.common = common;
        this.newSubject = newSubject;
        this.toastr = toastr;
        this.teacher = teacher;
        this.sanitizer = sanitizer;
        this.firstcaps = firstcaps;
        this.config = config;
        this.confi = confi;
        this.modalService = modalService;
        this.auth = auth;
        this.commondata = commondata;
        this.route = route;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.validationService = validationService;
        this.teacherBlukEmail = [];
        this.teacherBlukEmailValue = [];
        this.validators = [this.must_be_email];
        this.errorMessages = {
            'must_be_email': 'Please Enter a valid email format only allowed'
        };
        this.imgUrl = this.confi.getimgUrl();
        config.backdrop = 'static';
        config.keyboard = false;
        this.conps = true;
        this.conps1 = true;
        this.webhost = this.configurationService.getimgUrl();
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('readonly_startdate');
        this.auth.removeSessionData('editView');
        this.schoolId = this.auth.getSessionData('school_id');
        this.ntPassword = this.formBuilder.group({
            email: [''],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            confirmpassword: ''
        });
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
    }
    ngOnInit() {
        this.auth.removeSessionData('backOption');
    }
    ngOnChanges() {
        this.init(this.auth.getSessionData('school_id'));
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
    teacherList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId
        };
        this.teacher.teacherList(data).subscribe((successData) => {
            this.teacherListSuccess(successData);
        }, (error) => {
            this.teacherListFailure(error);
        });
    }
    teacherListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.listData = successData.ResponseObject;
            this.listData.forEach((value, index, array) => {
                this.listData[index].status = this.listData[index].status == '1' ? 'Active' : this.listData[index].status == '2' ?
                    'Suspended' : this.listData[index].status == '3' ? 'Disengaged' : this.listData[index].status == '4' ? 'Deleted' : '';
            });
        }
    }
    teacherListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }
    editAction(rows) {
        this.auth.setSessionData('UsersRedirection', 'Teacher');
        this.auth.setSessionData('editTeacher', JSON.stringify(rows));
        this.route.navigate(['/Teacher/create-Teacher/edit']);
    }
    init(id) {
        console.log(id, 'isddd');
        this.schoolId = id;
        this.teacherList();
    }
    close() {
        this.modalRef.close();
    }
    readUrl(event) {
        const file = event.target.files[0];
        if (event.srcElement.files[0].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || event.srcElement.files[0].type == 'application/vnd.ms-excel') {
            this.filetype = event.target.files[0].name.split('.');
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                this.getUrl1 = [];
                this.url = event.target.result;
                this.getUrl = this.url.split(',');
                this.getUrl1.push(this.url.split(','));
                this.onUploadFinished1(this.getUrl);
            };
            this.toastr.success('Excel Upload Successfully', 'Success!');
        }
        else {
            this.toastr.error('Only Excel Format is required', 'Failed');
            this.filetype = '';
        }
    }
    onUploadFinished1(event) {
        this.getUrl = event[1];
    }
    onUploadFinished(type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId,
            file: this.getUrl,
            extension: this.filetype[1],
            upload_type: 'Excel',
            user_type: 'Teacher'
        };
        this.common.excelUpload(data).subscribe((successData) => {
            this.excelUpoadSuccess(successData, type);
        }, (error) => {
            console.error(error, 'excelUpload');
        });
    }
    excelUpoadSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.getUrl = '';
            this.bulkInsert(type, successData.ResponseObject.upload_id);
            this.toastr.success(successData.ResponseObject.Message, 'Success!');
        }
        else {
            this.commondata.showLoader(false);
            this.toastr.error('Excel upload failed', 'Failed!');
        }
    }
    bulkInsert(type, id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            upload_id: id,
            school_id: this.schoolId
        };
        this.common.bulkInsert(data).subscribe((successData) => {
            this.bulkInsertSuccess(successData, type);
        }, (error) => {
            this.bulkInsertFailure(error);
        });
    }
    bulkInsertSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.close();
            this.teacherList();
            if (type == 'upload') {
                this.toastr.success(successData.ResponseObject, 'Teacher');
            }
            else if (type == 'email') {
                this.toastr.success(successData.ResponseObject, 'Teacher');
            }
        }
        else if (!successData.IsSuccess) {
            if (type == 'upload') {
                this.toastr.error(successData.ErrorObject, 'Failure');
            }
            else if (type == 'email') {
                this.toastr.error('Email not sent', 'Failure');
            }
        }
    }
    bulkInsertFailure(error) {
        this.teacherList();
        this.toastr.error('Excel upload failed', 'Failed!');
        console.log(error);
    }
    emailInviteUpload(type) {
        for (let i = 0; i < this.teacherBlukEmail.length; i++) {
            this.teacherBlukEmailValue.push(this.teacherBlukEmail[i].value);
        }
        if (this.teacherBlukEmail.length != 0) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.schoolId,
                email_id: this.teacherBlukEmailValue,
                format: 'Email',
                user_type: 'Teacher'
            };
            this.common.emailInviteUpload(data).subscribe((successData) => {
                this.emailInviteUploadSuccess(successData, type);
            }, (error) => {
                console.error(error, 'inviteEmail');
            });
        }
        else {
            this.toastr.error('Enter Your Email Id', 'Failed!');
        }
    }
    emailInviteUploadSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.bulkInsert(type, successData.ResponseObject.upload_id);
        }
        else {
            this.toastr.error(successData.ResponseObject, 'Failed!');
        }
    }
    downloadExcel() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            user_type: 'Teacher'
        };
        this.common.excelDownload(data).subscribe((successData) => {
            this.excelDownloadSuccess(successData);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    excelDownloadSuccess(successData) {
        if (successData.IsSuccess) {
            const url = this.webhost + '/' + successData.ResponseObject;
            window.open(url);
        }
    }
    bulkModal() {
        this.filetype = '';
        this.modalRef = this.modalService.open(this.bulkContent);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    emailModal() {
        this.teacherBlukEmail = [];
        this.modalRef = this.modalService.open(this.emailContent);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    checkPasswords() {
        const pass = this.ntPassword.controls.password.value;
        const confirmPass = this.ntPassword.controls.confirmpassword.value;
        this.passwordValid = pass !== confirmPass;
        return this.passwordValid;
    }
    cancel() {
        this.modalRef.close();
        this.ntPassword.reset();
    }
    change(type) {
        const data = {
            platform: 'web',
            role_id: this.resetPassword.role_id,
            email_id: this.resetPassword.email_id,
        };
        if (type == 1) {
            this.loginService.forgotPassword(data).subscribe((successData) => {
                this.changeSuccess(successData, type);
            }, (error) => {
                console.error(error, 'error');
            });
        }
        else {
            if (this.ntPassword.valid) {
                if (this.passwordValid == false) {
                    this.commondata.showLoader(true);
                    data['password'] = this.ntPassword.controls.confirmpassword.value;
                    this.loginService.forgotPassword(data).subscribe((successData) => {
                        this.changeSuccess(successData, type);
                    }, (error) => {
                        console.error(error, 'error');
                    });
                }
                else {
                    this.toastr.error('Please enter same password in new and confirm password');
                }
            }
            else {
                this.validationService.validateAllFormFields(this.ntPassword);
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }
    }
    changeSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.message = successData.ResponseObject.message;
            this.route.navigate(['/users/user-list']);
            if (type == 1) {
                this.toastr.success('E-mail invite sent successfully for reset password ', 'Teacher');
            }
            else {
                this.ntPassword.reset();
                this.toastr.success(successData.ResponseObject.message, 'Teacher');
            }
            this.close();
        }
        else {
            this.commondata.showLoader(false);
        }
    }
    showModal(type) {
        if (type == 'mail') {
            this.modalRef = this.modalService.open(this.modalContent1);
        }
        else if (type == 'now') {
            this.modalRef = this.modalService.open(this.modalContentnow);
            this.ntPassword.controls.email.patchValue(this.resetPassword.email_id);
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
    static { this.ɵfac = function ListTeacherComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListTeacherComponent)(i0.ɵɵdirectiveInject(i1.CategoryService), i0.ɵɵdirectiveInject(i2.ConfigurationService), i0.ɵɵdirectiveInject(i3.CommonService), i0.ɵɵdirectiveInject(i4.NewsubjectService), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.TeacherService), i0.ɵɵdirectiveInject(i7.DomSanitizer), i0.ɵɵdirectiveInject(i8.TitleCasePipe), i0.ɵɵdirectiveInject(i9.NgbModalConfig), i0.ɵɵdirectiveInject(i2.ConfigurationService), i0.ɵɵdirectiveInject(i9.NgbModal), i0.ɵɵdirectiveInject(i10.AuthService), i0.ɵɵdirectiveInject(i11.CommonDataService), i0.ɵɵdirectiveInject(i12.Router), i0.ɵɵdirectiveInject(i13.FormBuilder), i0.ɵɵdirectiveInject(i14.LoginService), i0.ɵɵdirectiveInject(i15.ValidationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListTeacherComponent, selectors: [["app-list-teacher"]], viewQuery: function ListTeacherComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
            i0.ɵɵviewQuery(_c5, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bulkContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.emailContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContent1 = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContentnow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewDetailsContent = _t.first);
        } }, inputs: { page: "page" }, features: [i0.ɵɵNgOnChangesFeature], decls: 12, vars: 2, consts: [["bulkmodal", ""], ["emailmodal", ""], ["content1", ""], ["contentnow", ""], ["viewdetails", ""], ["fileUploader", ""], ["email", "ngModel"], ["class", "container-fluid px-0", 4, "ngIf"], [4, "ngIf"], [1, "modal-header"], [1, "text-right"], ["aria-hidden", "true", 1, "fa", "fa-close", 2, "cursor", "pointer", 3, "click"], [1, "modal-body"], [1, "row"], [1, "col-sm-12"], [1, "card-body", "pt-2"], [1, "col-md-12", "text-right", "pull-right", 2, "padding-top", "25px"], [2, "cursor", "pointer", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-download", 2, "color", "#329688"], [1, "custom-file", 2, "margin-top", "19px"], ["type", "file", "id", "inputGroupFile02", "aria-describedby", "inputGroupFileAddon01", "accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel", "name", "file", 1, "custom-file-input", 3, "click", "change"], ["class", "custom-file-label", 4, "ngIf"], [1, "mt-3"], [2, "color", "firebrick"], [1, "modal-footer"], [1, "btn-popup", "pull-right"], [1, "btn", "btn-primary", 3, "click"], [1, "custom-file-label"], [1, "container-fluid"], ["name", "teacherBlukEmail", "theme", "bootstrap", "required", "", 3, "ngModelChange", "ngModel", "errorMessages", "validators", "editable", "separatorKeyCodes", "placeholder", "secondaryPlaceholder", "clearOnBlur", "addOnPaste", "addOnBlur"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "container-fluid", "px-0"], [1, "card", "pt-1"], [1, "card-header"], [1, "card-body"], [1, "row", "my-4"], [1, "col-12"], [1, "btn", "btn-primary", "pull-right", "ml-2", 3, "click", "routerLink"], [1, "dropdown", "pull-right"], [1, "btn", "btn-outline-primary"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc", "float-right", "ml-2"], [1, "dropdown-content", 2, "right", "1px"], [1, "cursor", 3, "click"], ["id", "batchDelete", 1, "category-table", "custom-datatable", "transcation-datatable", "user-image"], [1, "table-responsive"], [3, "clickValue", "TableType", "TableArray"], [1, "modal-title", "col-12", "text-center"], [1, "text-center", "mt-3"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "formGroup"], [1, "row", "form-group", "auth-form"], ["required", "", "readonly", "", "type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control"], ["class", "error", 4, "ngIf"], [1, "input-group"], ["required", "", "type", "text", "formControlName", "password", "placeholder", "Password", "aria-label", "Recipient's username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "type"], [1, "input-group-append"], ["id", "basic-addon3", 1, "input-group-text"], ["aria-hidden", "true", 2, "color", "#7F3486", 3, "click"], ["class", "error help-block", 4, "ngIf"], ["required", "", "type", "text", "formControlName", "confirmpassword", "placeholder", "Confirm Password", "aria-label", "Recipient's username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "type"], ["id", "basic-addon2", 1, "input-group-text"], [1, "error"], [1, "error", "help-block"], ["id", "modal-basic-title", 1, "modal-title"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-lg", "mt-1", 2, "color", "#7F3486", "cursor", "pointer", "float", "right", 3, "click"], [1, "row", "d-flex", "flex-column"], [1, "mb-5", "fit-image"], ["src", "assets/images/ristaschool/male.png", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/female1.png", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/Do not want to disclose.png", "alt", "", 4, "ngIf"], ["class", "card-img-top img-thumbnail", "alt", "", 3, "src", 4, "ngIf"], [1, "capital"], [1, "pl-4"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], [1, "pl-4", 2, "width", "150px"], ["src", "assets/images/ristaschool/male.png", "alt", ""], ["src", "assets/images/ristaschool/female1.png", "alt", ""], ["src", "assets/images/ristaschool/Do not want to disclose.png", "alt", ""], ["alt", "", 1, "card-img-top", "img-thumbnail", 3, "src"], [1, "badge", "badge-success"], [1, "badge", "badge-danger"], [1, "badge", "badge-warning"]], template: function ListTeacherComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListTeacherComponent_ng_template_0_Template, 28, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, ListTeacherComponent_ng_template_2_Template, 14, 11, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(4, ListTeacherComponent_div_4_Template, 22, 3, "div", 7)(5, ListTeacherComponent_div_5_Template, 2, 0, "div", 8)(6, ListTeacherComponent_ng_template_6_Template, 15, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(8, ListTeacherComponent_ng_template_8_Template, 31, 12, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(10, ListTeacherComponent_ng_template_10_Template, 42, 12, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length == 0);
        } }, dependencies: [i8.NgIf, i13.ɵNgNoValidate, i13.DefaultValueAccessor, i13.NgControlStatus, i13.NgControlStatusGroup, i13.RequiredValidator, i13.FormGroupDirective, i13.FormControlName, i12.RouterLink, i16.TagInputComponent, i13.NgModel, i17.EmptyschoolComponent, i18.TableComponent], styles: [".dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #8F008A;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListTeacherComponent, [{
        type: Component,
        args: [{ selector: 'app-list-teacher', template: "<ng-template #bulkmodal let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h3>Bulk Upload</h3>\n        <p class=\"text-right\">\n            <i class=\"fa fa-close\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"close()\"></i>\n        </p>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"card-body pt-2\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12 text-right pull-right\" style=\"padding-top: 25px\">\n                            <div (click)=\"downloadExcel()\" style=\"cursor: pointer\"> Download Sample Excel <i class=\"fa fa-download\" aria-hidden=\"true\" style=\"color:#329688\"></i></div>\n                        </div>\n\n                        <div class=\"custom-file\" style=\"margin-top: 19px;\">\n                            <input #fileUploader type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\"\n                                   aria-describedby=\"inputGroupFileAddon01\" accept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\" name=\"file\" (click)=\"fileUploader.value = null\" (change)=\"readUrl($event)\">\n                            <label *ngIf=\"filetype == ''\" class=\"custom-file-label\">Upload Excel</label>\n                            <label *ngIf=\"filetype != ''\" class=\"custom-file-label\">{{filetype[0]}}.{{filetype[1]}}</label>\n                        </div>\n                        <div class=\"mt-3\">\n                            <span style=\"color: firebrick\">*</span><small>Note: Upload format should be same as Sample Excel Format</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"btn-popup pull-right\">\n            <button class=\"btn btn-primary\" (click)=\"onUploadFinished('upload')\">Submit</button>\n        </div>\n    </div>\n</ng-template>\n<ng-template #emailmodal let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h3>Email Invite</h3>\n        <p class=\"text-right\">\n            <i class=\"fa fa-close\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"close()\"></i>\n        </p>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"modal-body\">\n                    <tag-input [(ngModel)]='teacherBlukEmail'\n                               name=\"teacherBlukEmail\"\n                               #email=\"ngModel\"\n                               [errorMessages]=\"errorMessages\"\n                               [validators]=\"validators\"\n                               [editable]='true'\n                               [separatorKeyCodes]=\"[32,188,186,13,9]\"\n                               [placeholder]=\"'Add email'\"\n                               [secondaryPlaceholder]=\"'Enter email address'\"\n                               [clearOnBlur]=\"true\"\n                               [addOnPaste]=\"true\"\n                               [addOnBlur]=\"true\"\n                               theme='bootstrap'\n                               required >\n                    </tag-input>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"emailInviteUpload('email')\">Submit</button>\n    </div>\n</ng-template>\n<div class=\"container-fluid px-0\" *ngIf=\"schoolStatus.length != 0\">\n    <div class=\"card pt-1\">\n        <div class=\"card-header\">\n            <h5>Teacher Details</h5>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row my-4\">\n                <div class=\"col-12\">\n                    <a class=\"btn btn-primary pull-right ml-2\" (click)=\"auth.setSessionData('UsersRedirection', 'Teacher')\" [routerLink]=\"'/Teacher/create-Teacher/add'\">Add Teacher</a>\n                    <div class=\"dropdown pull-right\">\n                        <button class=\"btn btn-outline-primary\">Invite <i class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i></button>\n                        <div class=\"dropdown-content\" style=\"right: 1px\">\n                            <a class=\"cursor\" (click)=\"bulkModal()\">Bulk Upload</a>\n                            <a class=\"cursor\" (click)=\"emailModal()\">Invite By Email</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div id=\"batchDelete\" class=\"category-table custom-datatable transcation-datatable user-image\">\n                <div class=\"table-responsive\">\n                    <app-table [TableType]=\"'Teacher'\" [TableArray]=\"listData\" (clickValue)=\"emittedValue($event)\"></app-table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"schoolStatus.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n<!-- Container-fluid Ends-->\n<ng-template #content1 let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Reset Password Using E-Mail</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <h5 class=\"text-center mt-3\">Are you sure want to reset password for {{resetPassword.first_name}}</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"change(1)\">Confirm</button>\n    </div>\n</ng-template>\n<ng-template #contentnow let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Reset Password Now</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <form [formGroup]=\"ntPassword\">\n                <div class=\"row form-group auth-form\">\n                    <input required=\"\" readonly class=\"form-control\" type=\"text\" placeholder=\"Email\" formControlName=\"email\">\n                    <em class=\"error\" *ngIf=\"!ntPassword.get('email').valid && (ntPassword.get('email').dirty || ntPassword.get('email').touched)\">Email is required</em>\n                </div>\n                <div class=\"row form-group auth-form\">\n                    <div class=\"input-group\">\n                        <input required=\"\" type=\"text\" formControlName=\"password\"\n                               class=\"form-control\" placeholder=\"Password\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon1\" [type]=\"conps ? 'password' : 'text'\">\n                        <div class=\"input-group-append\">\n                                     <span class=\"input-group-text\" id=\"basic-addon3\">\n                                            <i [class]=\"conps ? 'fa fa-eye-slash' : 'fa fa-eye'\" style=\"color: #7F3486\" aria-hidden=\"true\" (click)=\"conps = !conps\"></i>\n                                     </span>\n                        </div>\n                    </div>\n                    <em class=\"error\" *ngIf=\"ntPassword.get('password').hasError('required') && (ntPassword.get('password').dirty || ntPassword.get('password').touched)\">Password is required</em>\n                    <em *ngIf=\"ntPassword.get('password').hasError('minlength')\" class=\"error help-block\">Minimum 5 characters required</em>\n                </div>\n                <div class=\"row form-group auth-form\">\n                    <div class=\"input-group\">\n                        <input required=\"\" type=\"text\" formControlName=\"confirmpassword\"\n                               class=\"form-control\" placeholder=\"Confirm Password\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon1\" [type]=\"conps1 ? 'password' : 'text'\">\n                        <div class=\"input-group-append\">\n                           <span class=\"input-group-text\" id=\"basic-addon2\">\n                               <i [class]=\"conps1 ? 'fa fa-eye-slash' : 'fa fa-eye'\" style=\"color: #7F3486\" aria-hidden=\"true\" (click)=\"conps1 = !conps1\"></i>\n                           </span>\n                        </div>\n                    </div>\n                    <em class=\"error\" *ngIf=\"ntPassword.get('confirmpassword').hasError('required') && (ntPassword.get('confirmpassword').dirty || ntPassword.get('confirmpassword').touched)\">Confirm Password is required</em>\n                    <div *ngIf=\"checkPasswords()\">\n                        <em class=\"error help-block\">\n                            Enter same password as above\n                        </em>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"cancel()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"change(2)\">Confirm</button>\n    </div>\n</ng-template>\n\n<ng-template #viewdetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Teacher details</h4>\n        <i class=\"fa fa-close fa-lg mt-1\" aria-hidden=\"true\"\n           style=\"color:#7F3486; cursor: pointer; float: right;\" (click)=\"close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"card-body pt-2\">\n                        <div class=\"row d-flex flex-column\">\n                            <div class=\"mb-5 fit-image\">\n                                <img *ngIf=\"(viewdetail.profile_url == '' || viewdetail.profile_url == null) && viewdetail.gender.toLowerCase() == 'male'\"\n                                     src=\"assets/images/ristaschool/male.png\" alt=\"\">\n                                <img *ngIf=\"(viewdetail.profile_url == '' || viewdetail.profile_url == null) && viewdetail.gender.toLowerCase() == 'female'\"\n                                     src=\"assets/images/ristaschool/female1.png\" alt=\"\">\n                                <img *ngIf=\"(viewdetail.profile_url == '' || viewdetail.profile_url == null) && (viewdetail.gender.toLowerCase() == 'n/a'|| viewdetail.gender == '')\"\n                                     src=\"assets/images/ristaschool/Do not want to disclose.png\" alt=\"\">\n                                <img *ngIf=\"viewdetail.profile_url != ''\" class=\"card-img-top img-thumbnail\"\n                                     [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + viewdetail.profile_url)\"\n                                     alt=\"\">\n                            </div>\n                            <table class=\"capital\">\n                                <tr>\n                                    <td class=\"pl-4\"><b>Status:</b></td>\n                                    <td class=\"badge badge-success\" *ngIf=\"viewdetail.status == 'Active'\">\n                                        Active\n                                    </td>\n                                    <span class=\"badge badge-danger\" *ngIf=\"viewdetail.status == 'Suspended'\">Suspended</span>\n                                    <span class=\"badge badge-warning\" *ngIf=\"viewdetail.status == 'Disengaged'\">Disengaged</span>\n                                    <span class=\"badge badge-danger\" *ngIf=\"viewdetail.status == 'Deleted'\">Deleted</span>\n                                </tr>\n                                <tr>\n                                    <td class=\"pl-4\"><b>Contact Number:</b></td>\n                                    <td>{{viewdetail.mobile}}</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"pl-4\" style=\"width: 150px\"><b>Address:</b></td>\n                                    <td *ngIf=\"viewdetail.address1 != '' && viewdetail.address1 != null\">{{viewdetail.address1}}</td>\n                                </tr>\n                                <tr *ngIf=\"viewdetail.address2 != ''\">\n                                    <td></td>\n                                    <td>{{viewdetail.address2}}</td>\n                                </tr>\n                                <tr *ngIf=\"viewdetail.city != '' && viewdetail.city != null && viewdetail.state_name != ''\">\n                                    <td></td>\n                                    <td>{{viewdetail.city}}<br>\n                                        {{viewdetail.state_name}}<br>\n                                        {{viewdetail.country_name}}</td>\n                                </tr>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Container-fluid Ends-->\n\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editAction(viewdetail)\">Edit</button>\n    </div>\n</ng-template>\n", styles: [".dropdown-content a:hover {\n  color: #8F008A;\n}\n"] }]
    }], () => [{ type: i1.CategoryService }, { type: i2.ConfigurationService }, { type: i3.CommonService }, { type: i4.NewsubjectService }, { type: i5.ToastrService }, { type: i6.TeacherService }, { type: i7.DomSanitizer }, { type: i8.TitleCasePipe }, { type: i9.NgbModalConfig }, { type: i2.ConfigurationService }, { type: i9.NgbModal }, { type: i10.AuthService }, { type: i11.CommonDataService }, { type: i12.Router }, { type: i13.FormBuilder }, { type: i14.LoginService }, { type: i15.ValidationService }], { modalContent: [{
            type: ViewChild,
            args: ['content']
        }], bulkContent: [{
            type: ViewChild,
            args: ['bulkmodal']
        }], emailContent: [{
            type: ViewChild,
            args: ['emailmodal']
        }], modalContent1: [{
            type: ViewChild,
            args: ['content1']
        }], modalContentnow: [{
            type: ViewChild,
            args: ['contentnow']
        }], page: [{
            type: Input
        }], viewDetailsContent: [{
            type: ViewChild,
            args: ['viewdetails']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListTeacherComponent, { className: "ListTeacherComponent" }); })();
//# sourceMappingURL=list-Teacher.component.js.map