import { Component, Input, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TitleCasePipe } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { Validators } from '@angular/forms';
import { dateOptions } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../shared/service/student.service";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "../../../shared/service/teacher.service";
import * as i5 from "../../../shared/service/auth.service";
import * as i6 from "../../../shared/service/common.service";
import * as i7 from "@angular/platform-browser";
import * as i8 from "../../../shared/service/common-data.service";
import * as i9 from "@angular/router";
import * as i10 from "@angular/common";
import * as i11 from "ngx-toastr";
import * as i12 from "../../../shared/service/School.service";
import * as i13 from "../../../shared/service/class.service";
import * as i14 from "@angular/forms";
import * as i15 from "../../../shared/service/login.service";
import * as i16 from "../../../shared/service/validation.service";
import * as i17 from "../../../shared/service/newsubject.service";
import * as i18 from "../../../shared/service/contentdetail.service";
import * as i19 from "@ng-select/ng-select";
import * as i20 from "@nodro7/angular-mydatepicker";
import * as i21 from "ngx-chips";
import * as i22 from "../../corporateschool/emptyschool/emptyschool.component";
import * as i23 from "../../auth/table/table.component";
import * as i24 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["allNotes"];
const _c1 = ["content"];
const _c2 = ["bulkmodal"];
const _c3 = ["emailmodal"];
const _c4 = ["content1"];
const _c5 = ["contentnow"];
const _c6 = ["studentChange"];
const _c7 = () => [32, 188, 186, 13, 9];
function ListTemplateComponent_ng_template_0_label_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 29);
    i0.ɵɵtext(1, "Upload Excel");
    i0.ɵɵelementEnd();
} }
function ListTemplateComponent_ng_template_0_label_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r1.filetype[0], " .", ctx_r1.filetype[1], "");
} }
function ListTemplateComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "h3");
    i0.ɵɵtext(2, "Bulk Upload");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 12)(4, "i", 13);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_0_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 14)(6, "div", 15)(7, "div", 16)(8, "div", 17)(9, "div", 15)(10, "div", 18)(11, "div", 19);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_0_Template_div_click_11_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.downloadExcel()); });
    i0.ɵɵtext(12, " Download Sample Excel ");
    i0.ɵɵelement(13, "i", 20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 21)(15, "input", 22, 6);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_0_Template_input_click_15_listener() { i0.ɵɵrestoreView(_r1); const fileUploader_r3 = i0.ɵɵreference(16); return i0.ɵɵresetView(fileUploader_r3.value = null); })("change", function ListTemplateComponent_ng_template_0_Template_input_change_15_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.readUrl($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(17, ListTemplateComponent_ng_template_0_label_17_Template, 2, 0, "label", 23)(18, ListTemplateComponent_ng_template_0_label_18_Template, 2, 2, "label", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 24)(20, "span", 25);
    i0.ɵɵtext(21, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "small");
    i0.ɵɵtext(23, "Note: Upload format should be same as Sample Excel Format");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(24, "div", 26)(25, "div", 27)(26, "button", 28);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_0_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onUploadFinished("upload")); });
    i0.ɵɵtext(27, "Submit");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngIf", ctx_r1.filetype == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.filetype != "");
} }
function ListTemplateComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "h3");
    i0.ɵɵtext(2, "Email Invite");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 12)(4, "i", 13);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_2_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 30)(6, "div", 15)(7, "div", 31)(8, "div", 32)(9, "label", 33)(10, "span", 34);
    i0.ɵɵtext(11, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, " Grade Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 16)(14, "ng-select", 35);
    i0.ɵɵtwoWayListener("ngModelChange", function ListTemplateComponent_ng_template_2_Template_ng_select_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.grade, $event) || (ctx_r1.grade = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(15, "div", 16)(16, "div", 14)(17, "tag-input", 36, 7);
    i0.ɵɵtwoWayListener("ngModelChange", function ListTemplateComponent_ng_template_2_Template_tag_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.studentBlukEmail, $event) || (ctx_r1.studentBlukEmail = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelement(19, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 26)(21, "button", 37);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_2_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.emailInviteUpload("email")); });
    i0.ɵɵtext(22, "Submit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("items", ctx_r1.gradeData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.grade);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.studentBlukEmail);
    i0.ɵɵproperty("errorMessages", ctx_r1.errorMessages)("validators", ctx_r1.validators)("editable", true)("separatorKeyCodes", i0.ɵɵpureFunction0(12, _c7))("placeholder", "Add email")("secondaryPlaceholder", "Enter email address")("clearOnBlur", true)("addOnPaste", true)("addOnBlur", true);
} }
function ListTemplateComponent_div_4_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49)(1, "button", 50);
    i0.ɵɵtext(2, "Invite ");
    i0.ɵɵelement(3, "i", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 52)(5, "a", 53);
    i0.ɵɵlistener("click", function ListTemplateComponent_div_4_div_10_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.bulkModal()); });
    i0.ɵɵtext(6, " Bulk Upload");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 53);
    i0.ɵɵlistener("click", function ListTemplateComponent_div_4_div_10_Template_a_click_7_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.emailModal()); });
    i0.ɵɵtext(8, " Invite By Email");
    i0.ɵɵelementEnd()()();
} }
function ListTemplateComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "h5");
    i0.ɵɵtext(4, "Student Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 41)(6, "div", 42)(7, "div", 43)(8, "a", 44);
    i0.ɵɵlistener("click", function ListTemplateComponent_div_4_Template_a_click_8_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.auth.setSessionData("UsersRedirection", "Student")); });
    i0.ɵɵtext(9, "Add Student");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, ListTemplateComponent_div_4_div_10_Template, 9, 0, "div", 45);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 46)(12, "div", 47)(13, "app-table", 48);
    i0.ɵɵlistener("clickValue", function ListTemplateComponent_div_4_Template_app_table_clickValue_13_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.emittedValue($event)); })("pageChange", function ListTemplateComponent_div_4_Template_app_table_pageChange_13_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onPageChange($event)); });
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("routerLink", "/student/create-student/add");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.manageStudent);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("TableType", "Student")("TableArray", ctx_r1.listData)("initialPage", ctx_r1.currentStudentListPage);
} }
function ListTemplateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
function ListTemplateComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "h4", 54)(2, "b");
    i0.ɵɵtext(3, "Reset Password Using E-Mail");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 14)(5, "div", 30)(6, "div", 15)(7, "div", 16)(8, "h5", 55);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(10, "div", 26)(11, "button", 37);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_6_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(12, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 56);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_6_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.change(1)); });
    i0.ɵɵtext(14, "Confirm");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("Are you sure want to reset password for ", ctx_r1.resetPassword.first_name, "");
} }
function ListTemplateComponent_ng_template_8_em_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 69);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function ListTemplateComponent_ng_template_8_em_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 69);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function ListTemplateComponent_ng_template_8_em_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "Minimum 5 characters required");
    i0.ɵɵelementEnd();
} }
function ListTemplateComponent_ng_template_8_em_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 69);
    i0.ɵɵtext(1, "Confirm Password is required");
    i0.ɵɵelementEnd();
} }
function ListTemplateComponent_ng_template_8_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "em", 70);
    i0.ɵɵtext(2, " Enter same password as above ");
    i0.ɵɵelementEnd()();
} }
function ListTemplateComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "h4", 54)(2, "b");
    i0.ɵɵtext(3, "Reset Password Now");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 14)(5, "div", 30)(6, "form", 57)(7, "div", 58);
    i0.ɵɵelement(8, "input", 59);
    i0.ɵɵtemplate(9, ListTemplateComponent_ng_template_8_em_9_Template, 2, 0, "em", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 58)(11, "div", 61);
    i0.ɵɵelement(12, "input", 62);
    i0.ɵɵelementStart(13, "div", 63)(14, "span", 64)(15, "i", 65);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_8_Template_i_click_15_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.conps = !ctx_r1.conps); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(16, ListTemplateComponent_ng_template_8_em_16_Template, 2, 0, "em", 60)(17, ListTemplateComponent_ng_template_8_em_17_Template, 2, 0, "em", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 58)(19, "div", 61);
    i0.ɵɵelement(20, "input", 67);
    i0.ɵɵelementStart(21, "div", 63)(22, "span", 68)(23, "i", 65);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_8_Template_i_click_23_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.conps1 = !ctx_r1.conps1); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(24, ListTemplateComponent_ng_template_8_em_24_Template, 2, 0, "em", 60)(25, ListTemplateComponent_ng_template_8_div_25_Template, 3, 0, "div", 10);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(26, "div", 26)(27, "button", 37);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_8_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancel()); });
    i0.ɵɵtext(28, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 56);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_8_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.change(2)); });
    i0.ɵɵtext(30, "Confirm");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.studentPassword);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentPassword.get("email").valid && (ctx_r1.studentPassword.get("email").dirty || ctx_r1.studentPassword.get("email").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r1.conps ? "password" : "text");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.conps ? "fa fa-eye-slash" : "fa fa-eye");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentPassword.get("password").hasError("required") && (ctx_r1.studentPassword.get("password").dirty || ctx_r1.studentPassword.get("password").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentPassword.get("password").hasError("minlength"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r1.conps1 ? "password" : "text");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.conps1 ? "fa fa-eye-slash" : "fa fa-eye");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.studentPassword.get("confirmpassword").hasError("required") && (ctx_r1.studentPassword.get("confirmpassword").dirty || ctx_r1.studentPassword.get("confirmpassword").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.checkPasswords());
} }
function ListTemplateComponent_ng_template_10_div_4_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.item;
    i0.ɵɵattribute("title", item_r11.class_name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r11.class_name);
} }
function ListTemplateComponent_ng_template_10_div_4_em_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 69);
    i0.ɵɵtext(1, "Select the From Class");
    i0.ɵɵelementEnd();
} }
function ListTemplateComponent_ng_template_10_div_4_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.item;
    i0.ɵɵattribute("title", item_r12.fromClassLabel);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r12 == null ? null : item_r12.fromClassLabel);
} }
function ListTemplateComponent_ng_template_10_div_4_em_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 69);
    i0.ɵɵtext(1, "Select the To Class");
    i0.ɵɵelementEnd();
} }
function ListTemplateComponent_ng_template_10_div_4_em_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 69);
    i0.ɵɵtext(1, "Please Enter Effective Date");
    i0.ɵɵelementEnd();
} }
function ListTemplateComponent_ng_template_10_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "form", 57)(2, "div", 32)(3, "label", 75)(4, "span", 34);
    i0.ɵɵtext(5, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " From Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 76)(8, "ng-select", 77);
    i0.ɵɵlistener("change", function ListTemplateComponent_ng_template_10_div_4_Template_ng_select_change_8_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectedClass($event)); });
    i0.ɵɵtemplate(9, ListTemplateComponent_ng_template_10_div_4_ng_template_9_Template, 2, 2, "ng-template", 78);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, ListTemplateComponent_ng_template_10_div_4_em_10_Template, 2, 0, "em", 60);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 32)(12, "label", 75)(13, "span", 34);
    i0.ɵɵtext(14, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15, " To Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 76)(17, "ng-select", 79);
    i0.ɵɵlistener("change", function ListTemplateComponent_ng_template_10_div_4_Template_ng_select_change_17_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectedClass($event)); });
    i0.ɵɵtemplate(18, ListTemplateComponent_ng_template_10_div_4_ng_template_18_Template, 2, 2, "ng-template", 78);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(19, ListTemplateComponent_ng_template_10_div_4_em_19_Template, 2, 0, "em", 60);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 32)(21, "label", 75)(22, "span", 34);
    i0.ɵɵtext(23, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24, " Effective Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 80)(26, "div", 81)(27, "input", 82, 8);
    i0.ɵɵlistener("dateChanged", function ListTemplateComponent_ng_template_10_div_4_Template_input_dateChanged_27_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDateChanged($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 63)(30, "button", 56);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_10_div_4_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r10); const dp2_r13 = i0.ɵɵreference(28); return i0.ɵɵresetView(dp2_r13.toggleCalendar()); });
    i0.ɵɵelement(31, "i", 83);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(32, ListTemplateComponent_ng_template_10_div_4_em_32_Template, 2, 0, "em", 60);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.studentClassChange);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("items", ctx_r1.classStudentList);
    i0.ɵɵattribute("title", ctx_r1.selectedFromClass == null ? null : ctx_r1.selectedFromClass.class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentClassChange.get("formClass").valid && (ctx_r1.studentClassChange.get("formClass").dirty || ctx_r1.studentClassChange.get("formClass").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("items", ctx_r1.allClassList);
    i0.ɵɵattribute("title", ctx_r1.selectedToClass == null ? null : ctx_r1.selectedToClass.fromClassLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentClassChange.get("toClass").valid && (ctx_r1.studentClassChange.get("toClass").dirty || ctx_r1.studentClassChange.get("toClass").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions1);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentClassChange.get("from_startdate").valid && (ctx_r1.studentClassChange.get("from_startdate").dirty || ctx_r1.studentClassChange.get("from_startdate").touched));
} }
function ListTemplateComponent_ng_template_10_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 84)(2, "div", 43)(3, "button", 85);
    i0.ɵɵtext(4, "Currently, Not enrolled for any classes!");
    i0.ɵɵelementEnd()()()();
} }
function ListTemplateComponent_ng_template_10_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_10_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitChangeClass()); });
    i0.ɵɵtext(1, "Save");
    i0.ɵɵelementEnd();
} }
function ListTemplateComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "h4", 71);
    i0.ɵɵtext(2, "Transfer Class");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵtemplate(4, ListTemplateComponent_ng_template_10_div_4_Template, 33, 9, "div", 72)(5, ListTemplateComponent_ng_template_10_div_5_Template, 5, 0, "div", 72);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 26)(7, "button", 73);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_10_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵtext(8, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, ListTemplateComponent_ng_template_10_button_9_Template, 2, 0, "button", 74);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.classStudentList != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.classStudentList == "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.classStudentList != "");
} }
function ListTemplateComponent_ng_template_12_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 93)(1, "ng-select", 94);
    i0.ɵɵlistener("change", function ListTemplateComponent_ng_template_12_div_6_Template_ng_select_change_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeNotes($event, "class")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.listClass);
} }
function ListTemplateComponent_ng_template_12_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 93)(1, "ng-select", 95);
    i0.ɵɵlistener("change", function ListTemplateComponent_ng_template_12_div_7_Template_ng_select_change_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeNotes($event, "content")); });
    i0.ɵɵtwoWayListener("ngModelChange", function ListTemplateComponent_ng_template_12_div_7_Template_ng_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.specificData, $event) || (ctx_r1.specificData = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.specificData);
    i0.ɵɵproperty("items", ctx_r1.contentData);
} }
function ListTemplateComponent_ng_template_12_div_9_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 104);
} }
function ListTemplateComponent_ng_template_12_div_9_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 105);
} }
function ListTemplateComponent_ng_template_12_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 96)(1, "div", 97)(2, "div", 98);
    i0.ɵɵtemplate(3, ListTemplateComponent_ng_template_12_div_9_i_3_Template, 1, 0, "i", 99)(4, ListTemplateComponent_ng_template_12_div_9_i_4_Template, 1, 0, "i", 100);
    i0.ɵɵelement(5, "p", 101);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 102)(7, "small", 103);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "customDateFormat");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const list_r18 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r18.notes_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r18.notes_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerText", list_r18.notes);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 4, list_r18.created_date));
} }
function ListTemplateComponent_ng_template_12_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 106)(1, "p", 103);
    i0.ɵɵtext(2, "No Records Found");
    i0.ɵɵelementEnd()();
} }
function ListTemplateComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 86)(1, "h4", 87);
    i0.ɵɵtext(2, "All Notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 88);
    i0.ɵɵlistener("click", function ListTemplateComponent_ng_template_12_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 14)(5, "div", 89);
    i0.ɵɵtemplate(6, ListTemplateComponent_ng_template_12_div_6_Template, 2, 1, "div", 90)(7, ListTemplateComponent_ng_template_12_div_7_Template, 2, 2, "div", 90);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 84);
    i0.ɵɵtemplate(9, ListTemplateComponent_ng_template_12_div_9_Template, 10, 6, "div", 91)(10, ListTemplateComponent_ng_template_12_div_10_Template, 3, 0, "div", 92);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.listClass.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.classId != 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.listNotes);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.listNotes.length == 0);
} }
TagInputModule.withDefaults({
    tagInput: {
        placeholder: 'Add a new tag',
        secondaryPlaceholder: 'Enter your EmailID'
    }
});
export class ListTemplateComponent {
    constructor(config, student, configurationService, teacher, confi, modalService, auth, common, sanitizer, commondata, route, firstcaps, toastr, school, classes, formBuilder, loginService, validationService, newSubject, contentDetail, datePipe) {
        this.config = config;
        this.student = student;
        this.configurationService = configurationService;
        this.teacher = teacher;
        this.confi = confi;
        this.modalService = modalService;
        this.auth = auth;
        this.common = common;
        this.sanitizer = sanitizer;
        this.commondata = commondata;
        this.route = route;
        this.firstcaps = firstcaps;
        this.toastr = toastr;
        this.school = school;
        this.classes = classes;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.validationService = validationService;
        this.newSubject = newSubject;
        this.contentDetail = contentDetail;
        this.datePipe = datePipe;
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su'
        };
        this.contentType = 'Assessment';
        this.contentData = [];
        this.allContentData = [];
        this.classId = 0;
        this.contentId = 0;
        this.studentBlukEmail = [];
        this.studentBlukEmailValue = [];
        this.allClassList = [];
        this.classStudentList = [];
        this.listNotes = [];
        this.listClass = [];
        this.schoolChange = false;
        this.validators = [this.must_be_email];
        this.errorMessages = {
            'must_be_email': 'Please Enter a valid email format only allowed'
        };
        this.manageStudent = false;
        this.currentStudentListPage = 1; // Track current pagination page
        this.imgUrl = this.confi.getimgUrl();
        this.roleid = this.auth.getRoleId();
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.studentClassChange = this.formBuilder.group({
            formClass: [null, Validators.required],
            toClass: [null, Validators.required],
            from_startdate: ['', Validators.required]
        });
        config.backdrop = 'static';
        config.keyboard = false;
        this.email = [];
        this.conps = true;
        this.conps1 = true;
        this.webHost = this.configurationService.getimgUrl();
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
        this.auth.setSessionData('resourceAccess', false);
        this.auth.setSessionData('browseAll', false);
        this.auth.removeSessionData('classData');
        this.auth.removeSessionData('readonly_data');
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('readonly_startdate');
        this.auth.removeSessionData('editView');
        this.auth.setSessionData('contentType', '');
        this.studentPassword = this.formBuilder.group({
            email: [''],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            confirmpassword: '',
        });
    }
    must_be_email(control) {
        var EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;
        if (control.value.length != '' && !EMAIL_REGEXP.test(control.value)) {
            return { 'must_be_email': true };
        }
        return null;
    }
    ngOnInit() {
        this.auth.removeSessionData('backOption');
        // Restore saved pagination page if available
        const savedPage = this.auth.getSessionData('student-list-current-page');
        if (savedPage) {
            this.currentStudentListPage = parseInt(savedPage, 10);
            this.auth.removeSessionData('student-list-current-page'); // Clear after using
        }
    }
    ngOnChanges() {
        this.init();
    }
    init() {
        this.schoolId = this.auth.getSessionData('school_id');
        this.manageStudent = this.auth.manageStudent;
        this.studentList();
        this.studentClassList(0);
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
        else if (event.emitType == 'tc') {
            this.classChange(event.emitData);
        }
        else if (event.emitType == 'Announcement') {
            this.getNotes(event.emitData.user_id, this.classId, this.contentId);
        }
        else if (event.emitType == 'name') {
            // Save current page before navigating
            this.auth.setSessionData('student-list-current-page', this.currentStudentListPage.toString());
            this.auth.setSessionData('student-profile-details', JSON.stringify(event.emitData));
            this.route.navigate(['studentlogin/profile-details']);
        }
    }
    onPageChange(page) {
        // Update current page when user changes pages
        this.currentStudentListPage = page;
    }
    editAction(rows) {
        if (this.manageStudent) {
            this.auth.setSessionData('UsersRedirection', 'Student');
            this.auth.setSessionData('editStudent', JSON.stringify(rows));
            this.route.navigate(['/student/create-student/edit']);
        }
        else {
            this.toastr.error('You don\'t have permission to update student details');
        }
    }
    onDateChanged(event) {
        console.log(event, 'event');
    }
    changeNotes(event, type) {
        if (type == 'class') {
            console.log(event, 'get eve');
            if (event?.class_id) {
                this.classId = event.class_id;
            }
            else {
                this.classId = 0;
                this.close();
            }
            this.contentData = [];
            this.contentId = 0;
            this.specificData = null;
        }
        else {
            if (event?.content_id) {
                this.contentId = event.content_id;
            }
            else {
                this.contentId = 0;
            }
        }
        this.getNotes(this.studentId, this.classId, this.contentId);
    }
    getNotes(studentId, classId, contentId) {
        this.studentId = studentId;
        console.log(this.classId, 'class id');
        console.log(this.contentId, 'content id');
        const key = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: contentId,
            student_id: studentId,
            class_id: classId,
            school_id: this.auth.getSessionData('school_id'),
        };
        this.contentDetail.notesList(key).subscribe((successData) => {
            this.notesListSuccess(successData, key);
        }, (error) => {
            console.error(error, 'error_classList');
        });
    }
    notesListSuccess(successData, key) {
        if (successData.IsSuccess) {
            this.listNotes = successData.ResponseObject;
            if (key.class_id == 0 && key.content_id == 0) {
                this.listClass = [];
                this.listNotes.forEach((val) => {
                    if (this.listClass.length > 0) {
                        let occured = false;
                        this.listClass.forEach((item) => {
                            if (item.class_id == val.class_id) {
                                occured = true;
                            }
                        });
                        if (!occured) {
                            this.listClass.push({ class_name: val.class_name, class_id: val.class_id });
                        }
                    }
                    else {
                        this.listClass.push({ class_name: val.class_name, class_id: val.class_id });
                    }
                });
                this.contentData = [];
                this.listNotes.forEach((val) => {
                    if (this.contentData.length > 0) {
                        let occured = false;
                        this.contentData.forEach((item) => {
                            if (item.content_id == val.content_id) {
                                occured = true;
                            }
                        });
                        if (!occured) {
                            this.contentData.push({ content_name: val.content_name, content_id: val.content_id, class_id: val.class_id });
                        }
                    }
                    else {
                        this.contentData.push({ content_name: val.content_name, content_id: val.content_id, class_id: val.class_id });
                    }
                });
                this.allContentData = [...this.contentData];
                this.modalRef = this.modalService.open(this.allNotes, { size: 'md' });
            }
            else if (key.class_id != 0) {
                this.contentData = this.allContentData.filter((val) => {
                    return val.class_id == this.classId;
                });
                console.log(this.contentData, 'get content');
            }
        }
    }
    fromClass(event) {
        this.selectedFromClass = event;
    }
    selectedClass(event) {
        this.selectedToClass = event;
        if (event.status == '1') {
            const sd = event.start_date.split('-');
            const sdObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                dateRange: null
            };
            this.myDpOptions1 = {};
            this.myDpOptions1 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su',
                disableUntil: {
                    year: parseInt(sd[0]),
                    month: parseInt(sd[1]),
                    day: parseInt(sd[2]) - 1
                },
            };
        }
    }
    submitChangeClass() {
        if (this.studentClassChange.controls.formClass.value == this.studentClassChange.controls.toClass.value) {
            this.toastr.error('From Class and To Class should be different');
            return false;
        }
        if (this.studentClassChange.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.schoolId,
                from_class: this.studentClassChange.controls.formClass.value,
                to_class: this.studentClassChange.controls.toClass.value,
                from_date: this.selectedToClass.start_date,
                end_date: this.selectedToClass.end_date,
                joining_date: this.studentClassChange.controls.from_startdate.value == null ? '' : this.datePipe.transform(this.studentClassChange.controls.from_startdate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                student_id: this.student_id,
                status: '1'
            };
            this.student.changeClass(data).subscribe((successData) => {
                this.submitChangeSuccess(successData);
            }, (error) => {
                console.error(error, 'Submit_error');
            });
        }
        else {
            this.validationService.validateAllFormFields(this.studentClassChange);
            this.toastr.error('Please Select all the mandatory fields');
        }
    }
    submitChangeSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'dasd');
            this.toastr.success(successData.ResponseObject);
            this.studentClassChange.reset();
            this.modalRef.close();
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    studentList() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId
        };
        this.student.getStudentList(data).subscribe((successData) => {
            this.studentListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_studentList');
        });
    }
    studentListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.listData = successData.ResponseObject;
            this.listData.forEach((value, index, array) => {
                this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
                    'Suspended' : this.listData[index].status == 3 ? 'Disengaged' : this.listData[index].status == 4 ? 'Deleted' : '';
            });
        }
    }
    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId
        };
        this.student.getgradeList(data).subscribe((successData) => {
            this.gradeListSuccess(successData);
        }, (error) => {
            console.error(error, 'gradeList');
        });
    }
    gradeListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
        }
    }
    bulkModal() {
        this.filetype = '';
        this.grade = null;
        this.modalRef = this.modalService.open(this.bulkContent);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    emailModal() {
        this.studentBlukEmail = [];
        this.grade = null;
        this.gradeList();
        this.modalRef = this.modalService.open(this.emailContent);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    open(content) {
        this.modalService.open(content);
    }
    onSave() {
        this.modalRef.close();
        this.studentClassChange.reset();
    }
    close() {
        this.modalRef.close();
        this.studentClassChange.reset();
        this.fileUploader = '';
        this.filetype = '';
        this.studentBlukEmail = '';
        this.classId = 0;
        this.contentId = 0;
        this.contentData = [];
        this.listClass = [];
    }
    readUrl(event) {
        // if(this.schoolId != null){
        const file = event.target.files[0];
        // this.formattype = event.target.files[0].type.split('.');
        if (event.srcElement.files[0].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || event.srcElement.files[0].type == 'application/vnd.ms-excel') {
            this.filetype = event.target.files[0].name.split('.');
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                this.getUrl1 = [];
                this.url = event.target.result;
                this.getUrl = this.url.split(',');
                this.getUrl1.push(this.url.split(','));
                this.onUploadFinished1(this.getUrl, event);
            };
            this.toastr.success('Excel Upload Successfully', 'Success!');
        }
        else {
            this.toastr.error('Only Excel Format is required', 'Failed');
            this.filetype = '';
        }
    }
    onUploadFinished1(event, fileEvent) {
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
            user_type: 'Student',
        };
        this.common.excelUpload(data).subscribe((successData) => {
            this.excelUpoadSuccess(successData, type);
        }, (error) => {
            console.error(error, 'ExcelUpload');
        });
    }
    excelUpoadSuccess(successData, type) {
        console.log(successData);
        if (successData.IsSuccess) {
            this.getUrl = '';
            // fileEvent = null;
            this.bulkInsert(type, successData.ResponseObject.upload_id);
            // this.fileUploader.nativeElement.value = '';
            this.toastr.success(successData.ResponseObject.Message, 'Success!');
        }
        else {
            this.toastr.error('Excel upload failed', 'Failed!');
        }
    }
    studentClassList(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: id,
            school_id: this.schoolId
        };
        this.student.studentClassList(data).subscribe((successData) => {
            this.studentClassListSuccess(successData, id);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    studentClassListSuccess(successData, id) {
        if (successData.IsSuccess) {
            if (id == 0) {
                this.allClassList = successData.ResponseObject;
                this.allClassList.forEach((val) => {
                    val['fromClassLabel'] = val.class_name + '  -  ' + val.teacher_name;
                });
            }
            else {
                this.classStudentList = successData.ResponseObject;
            }
        }
    }
    bulkInsert(type, id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            upload_id: id,
            school_id: this.schoolId,
            grade_id: this.grade == null ? '' : this.grade
        };
        this.common.bulkInsert(data).subscribe((successData) => {
            this.bulkInsertSuccess(type, successData);
        }, (error) => {
            this.bulkInsertFailure(error);
        });
    }
    bulkInsertSuccess(type, successData) {
        if (successData.IsSuccess) {
            this.close();
            this.studentList();
            if (type == 'upload') {
                this.toastr.success(successData.ResponseObject, 'Student');
            }
            else if (type == 'email') {
                this.toastr.success(successData.ResponseObject, 'Student');
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
        this.studentList();
        this.toastr.error('Excel upload failed', 'Failed!');
        console.log(error);
    }
    emailInviteUpload(type) {
        this.studentBlukEmail;
        for (let i = 0; i < this.studentBlukEmail.length; i++) {
            this.studentBlukEmailValue.push(this.studentBlukEmail[i].value);
        }
        if (this.grade != null) {
            if (this.studentBlukEmail.length != 0) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.schoolId,
                    email_id: this.studentBlukEmailValue,
                    format: 'Email',
                    user_type: 'Student',
                    grade_id: this.grade
                };
                this.common.emailInviteUpload(data).subscribe((successData) => {
                    this.emailInviteUploadSuccess(type, successData);
                }, (error) => {
                    console.error(error, 'InviteEmail');
                });
            }
            else {
                this.toastr.error('Enter Your Email Id', 'Failed!');
            }
        }
        else {
            this.toastr.error('Please Select the grade', 'Failed');
        }
    }
    emailInviteUploadSuccess(type, successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.bulkInsert(type, successData.ResponseObject.upload_id);
            // this.toastr.success('E-mail Invite Sent Sucessfully', 'Success!');
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
            user_type: 'Student'
        };
        this.common.excelDownload(data).subscribe((successData) => {
            this.excelDownloadSuccess(successData);
        }, (error) => {
            console.error(error, 'ExcelDownload');
        });
    }
    excelDownloadSuccess(successData) {
        if (successData.IsSuccess) {
            const url = this.webHost + '/' + successData.ResponseObject;
            window.open(url);
        }
    }
    checkPasswords() {
        const pass = this.studentPassword.controls.password.value;
        const confirmPass = this.studentPassword.controls.confirmpassword.value;
        this.passwordValid = pass !== confirmPass;
        return this.passwordValid;
    }
    cancel() {
        this.modalRef.close();
        this.studentPassword.reset();
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
                console.error(error, 'change_password');
            });
        }
        else {
            if (this.studentPassword.valid) {
                if (this.passwordValid == false) {
                    this.commondata.showLoader(true);
                    data['password'] = this.studentPassword.controls.confirmpassword.value;
                    this.loginService.forgotPassword(data).subscribe((successData) => {
                        this.changeSuccess(successData, type);
                    }, (error) => {
                        console.error(error, 'change_password');
                    });
                }
                else {
                    this.toastr.error('Please enter same password in new and confirm password');
                }
            }
            else {
                this.validationService.validateAllFormFields(this.studentPassword);
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
                this.toastr.success('E-mail invite sent successfully for reset password ', 'Student');
            }
            else {
                this.studentPassword.reset();
                this.toastr.success(successData.ResponseObject.message, 'Student');
            }
            this.close();
        }
        else {
            this.commondata.showLoader(false);
        }
    }
    classChange(event) {
        this.student_id = event.user_id;
        this.studentClassList(event.user_id);
        this.modalRef = this.modalService.open(this.changeStudent, { size: 'lg' });
    }
    showModal(type) {
        if (!this.manageStudent) {
            this.toastr.error('You don\'t have permission to reset password for student');
        }
        else {
            if (type == 'mail') {
                this.modalRef = this.modalService.open(this.modalContent1);
            }
            else if (type == 'now') {
                this.modalRef = this.modalService.open(this.modalContentnow);
                this.studentPassword.controls.email.patchValue(this.resetPassword.email_id);
            }
            this.modalRef.result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
    static { this.ɵfac = function ListTemplateComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListTemplateComponent)(i0.ɵɵdirectiveInject(i1.NgbModalConfig), i0.ɵɵdirectiveInject(i2.StudentService), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.TeacherService), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i1.NgbModal), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.CommonService), i0.ɵɵdirectiveInject(i7.DomSanitizer), i0.ɵɵdirectiveInject(i8.CommonDataService), i0.ɵɵdirectiveInject(i9.Router), i0.ɵɵdirectiveInject(i10.TitleCasePipe), i0.ɵɵdirectiveInject(i11.ToastrService), i0.ɵɵdirectiveInject(i12.SchoolService), i0.ɵɵdirectiveInject(i13.ClassService), i0.ɵɵdirectiveInject(i14.FormBuilder), i0.ɵɵdirectiveInject(i15.LoginService), i0.ɵɵdirectiveInject(i16.ValidationService), i0.ɵɵdirectiveInject(i17.NewsubjectService), i0.ɵɵdirectiveInject(i18.ContentdetailService), i0.ɵɵdirectiveInject(i10.DatePipe)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListTemplateComponent, selectors: [["app-list-student"]], viewQuery: function ListTemplateComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
            i0.ɵɵviewQuery(_c5, 5);
            i0.ɵɵviewQuery(_c6, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.allNotes = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bulkContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.emailContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContent1 = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContentnow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.changeStudent = _t.first);
        } }, inputs: { page: "page" }, features: [i0.ɵɵProvidersFeature([TitleCasePipe]), i0.ɵɵNgOnChangesFeature], decls: 14, vars: 2, consts: [["bulkmodal", ""], ["emailmodal", ""], ["content1", ""], ["contentnow", ""], ["studentChange", ""], ["allNotes", ""], ["fileUploader", ""], ["email", "ngModel"], ["dp2", "angular-mydatepicker"], ["class", "container-fluid px-0", 4, "ngIf"], [4, "ngIf"], [1, "modal-header"], [1, "text-right"], ["aria-hidden", "true", 1, "fa", "fa-close", 2, "cursor", "pointer", 3, "click"], [1, "modal-body"], [1, "row"], [1, "col-sm-12"], [1, "card-body", "pt-2"], [1, "col-md-12", "text-right", "pull-right", 2, "padding-top", "25px"], [2, "cursor", "pointer", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-download", 2, "color", "#329688"], [1, "custom-file", 2, "margin-top", "19px"], ["type", "file", "id", "inputGroupFile02", "aria-describedby", "inputGroupFileAddon01", "accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel", "name", "file", 1, "custom-file-input", 3, "click", "change"], ["class", "custom-file-label", 4, "ngIf"], [1, "mt-3"], [2, "color", "firebrick"], [1, "modal-footer"], [1, "btn-popup", "pull-right"], [1, "btn", "btn-primary", 3, "click"], [1, "custom-file-label"], [1, "container-fluid"], [1, "col-md-12", "pl-4", "pr-4", "pt-4"], [1, "form-group", "row"], [1, "col-md-12"], [1, "text-danger"], ["bindLabel", "grade_name", "bindValue", "grade_id", "placeholder", "Please Select", "typeToSearchText", "", 3, "ngModelChange", "items", "ngModel"], ["name", "studentBlukEmail", "theme", "bootstrap", "required", "", 3, "ngModelChange", "ngModel", "errorMessages", "validators", "editable", "separatorKeyCodes", "placeholder", "secondaryPlaceholder", "clearOnBlur", "addOnPaste", "addOnBlur"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "container-fluid", "px-0"], [1, "card", "pt-1"], [1, "card-header"], [1, "card-body"], [1, "row", "my-4"], [1, "col-12"], [1, "btn", "btn-primary", "pull-right", "ml-2", 3, "click", "routerLink"], ["class", "dropdown pull-right", 4, "ngIf"], ["id", "batchDelete", 1, "category-table", "custom-datatable", "transcation-datatable", "user-image"], [1, "table-responsive"], [3, "clickValue", "pageChange", "TableType", "TableArray", "initialPage"], [1, "dropdown", "pull-right"], [1, "btn", "btn-outline-primary"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc", "float-right", "ml-2"], [1, "dropdown-content", 2, "right", "1px"], [1, "cursor", 3, "click"], [1, "modal-title", "col-12", "text-center"], [1, "text-center", "mt-3"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "formGroup"], [1, "row", "form-group", "auth-form"], ["required", "", "readonly", "", "type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control"], ["class", "error", 4, "ngIf"], [1, "input-group"], ["required", "", "type", "text", "formControlName", "password", "placeholder", "Password", "aria-label", "Recipient's username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "type"], [1, "input-group-append"], ["id", "basic-addon3", 1, "input-group-text"], ["aria-hidden", "true", 2, "color", "#7F3486", 3, "click"], ["class", "error help-block", 4, "ngIf"], ["required", "", "type", "text", "formControlName", "confirmpassword", "placeholder", "Confirm Password", "aria-label", "Recipient's username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "type"], ["id", "basic-addon2", 1, "input-group-text"], [1, "error"], [1, "error", "help-block"], [1, "modal-title", "col-12", "font-weight-bold", "px-0"], ["class", "container-fluid", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "col-xl-2", "col-md-3", "align-self-center"], [1, "col-xl-10", "col-md-9"], ["bindLabel", "class_name", "bindValue", "class_id", "placeholder", "Please Select", "typeToSearchText", "", "formControlName", "formClass", "required", "", 3, "change", "items"], ["ng-option-tmp", ""], ["bindLabel", "fromClassLabel", "bindValue", "class_id", "placeholder", "Please Select", "typeToSearchText", "", "formControlName", "toClass", "required", "", 3, "change", "items"], [1, "col-xl-10", "col-md-9", "form-group"], [1, "d-flex", "align-items-baseline"], ["placeholder", "mm/dd/yyyy", "name", "dp2", "formControlName", "from_startdate", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "dateChanged", "options"], [1, "fa", "fa-calendar-o"], [1, "row", "d-flex", "justify-content-center"], [1, "nodataList"], [1, "modal-header", "align-items-center"], [1, "modal-title", "text-center"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "col-md-12", "d-flex", "justify-content-between"], ["class", "col-md-6", 4, "ngIf"], ["class", "col-10 mt-2", 4, "ngFor", "ngForOf"], ["class", "col-md-12 align-self-center my-2", 4, "ngIf"], [1, "col-md-6"], ["bindLabel", "class_name", "bindValue", "class_id", "placeholder", "Select Class", "typeToSearchText", "", 3, "change", "items"], ["bindLabel", "content_name", "bindValue", "content_id", "id", "contentDrop", "placeholder", "Select Content", "typeToSearchText", "", 3, "change", "ngModelChange", "ngModel", "items"], [1, "col-10", "mt-2"], [1, "row", "p-2", "border-secondary", "rounded", "grey-border"], [1, "col-9", "d-flex", 2, "word-wrap", "break-word"], ["class", "fa fa-envelope-square align-self-center mr-2 color-primary", 4, "ngIf"], ["class", "fa fa-bookmark align-self-center mr-2 color-secondary", 4, "ngIf"], [1, "mb-0", 3, "innerText"], [1, "col-3", "px-0", "align-self-center"], [1, "mb-0"], [1, "fa", "fa-envelope-square", "align-self-center", "mr-2", "color-primary"], [1, "fa", "fa-bookmark", "align-self-center", "mr-2", "color-secondary"], [1, "col-md-12", "align-self-center", "my-2"]], template: function ListTemplateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListTemplateComponent_ng_template_0_Template, 28, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, ListTemplateComponent_ng_template_2_Template, 23, 13, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(4, ListTemplateComponent_div_4_Template, 14, 5, "div", 9)(5, ListTemplateComponent_div_5_Template, 2, 0, "div", 10)(6, ListTemplateComponent_ng_template_6_Template, 15, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(8, ListTemplateComponent_ng_template_8_Template, 31, 12, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(10, ListTemplateComponent_ng_template_10_Template, 10, 3, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(12, ListTemplateComponent_ng_template_12_Template, 11, 4, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length == 0);
        } }, dependencies: [i10.NgForOf, i10.NgIf, i14.ɵNgNoValidate, i14.DefaultValueAccessor, i14.NgControlStatus, i14.NgControlStatusGroup, i14.RequiredValidator, i14.FormGroupDirective, i14.FormControlName, i9.RouterLink, i19.NgSelectComponent, i19.NgOptionTemplateDirective, i20.AngularMyDatePickerDirective, i14.NgModel, i21.TagInputComponent, i22.EmptyschoolComponent, i23.TableComponent, i24.CustomDateFormatPipe], styles: [".dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #8F008A;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListTemplateComponent, [{
        type: Component,
        args: [{ selector: 'app-list-student', providers: [TitleCasePipe], template: "<!-- Container-fluid starts-->\n<ng-template #bulkmodal let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h3>Bulk Upload</h3>\n        <p class=\"text-right\">\n            <i class=\"fa fa-close\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"close()\"></i>\n        </p>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"card-body pt-2\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12 text-right pull-right\" style=\"padding-top: 25px\">\n                            <div (click)=\"downloadExcel()\" style=\"cursor: pointer\"> Download Sample Excel <i\n                                    class=\"fa fa-download\" aria-hidden=\"true\" style=\"color:#329688\"></i></div>\n                        </div>\n\n                        <div class=\"custom-file\" style=\"margin-top: 19px;\">\n                            <input #fileUploader type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\"\n                                   aria-describedby=\"inputGroupFileAddon01\"\n                                   accept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\n                                   name=\"file\" (click)=\"fileUploader.value = null\" (change)=\"readUrl($event)\">\n                            <label *ngIf=\"filetype == ''\" class=\"custom-file-label\">Upload Excel</label>\n                            <label *ngIf=\"filetype != ''\" class=\"custom-file-label\">{{filetype[0]}}\n                                .{{filetype[1]}}</label>\n                        </div>\n                        <div class=\"mt-3\">\n                            <span style=\"color: firebrick\">*</span><small>Note: Upload format should be same as Sample\n                            Excel Format</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"btn-popup pull-right\">\n            <button class=\"btn btn-primary\" (click)=\"onUploadFinished('upload')\">Submit</button>\n        </div>\n    </div>\n</ng-template>\n<ng-template #emailmodal let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h3>Email Invite</h3>\n        <p class=\"text-right\">\n            <i class=\"fa fa-close\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"close()\"></i>\n        </p>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12 pl-4 pr-4 pt-4\">\n                <div class=\"form-group row\">\n                    <label class=\"col-md-12\"><span class=\"text-danger\">*</span>\n                        Grade Name</label>\n                    <div class=\"col-sm-12\">\n                        <ng-select [items]=\"gradeData\"\n                                   bindLabel=\"grade_name\"\n                                   bindValue=\"grade_id\"\n                                   placeholder=\"Please Select\"\n                                   typeToSearchText=\"\"\n                                   [(ngModel)]=\"grade\"\n                        >\n                        </ng-select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-12\">\n                <div class=\"modal-body\">\n                    <tag-input [(ngModel)]='studentBlukEmail'\n                               name=\"studentBlukEmail\"\n                               #email=\"ngModel\"\n                               [errorMessages]=\"errorMessages\"\n                               [validators]=\"validators\"\n                               [editable]='true'\n                               [separatorKeyCodes]=\"[32,188,186,13,9]\"\n                               [placeholder]=\"'Add email'\"\n                               [secondaryPlaceholder]=\"'Enter email address'\"\n                               [clearOnBlur]=\"true\"\n                               [addOnPaste]=\"true\"\n                               [addOnBlur]=\"true\"\n                               theme='bootstrap'\n                               required>\n                    </tag-input>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n        </div>\n        <!--        </form>-->\n\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"emailInviteUpload('email')\">Submit</button>\n    </div>\n</ng-template>\n<div class=\"container-fluid px-0\" *ngIf=\"schoolStatus.length != 0\">\n    <div class=\"card pt-1\">\n        <div class=\"card-header\">\n            <h5>Student Details</h5>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row my-4\">\n                <div class=\"col-12\">\n                    <a class=\"btn btn-primary pull-right ml-2\" (click)=\"this.auth.setSessionData('UsersRedirection', 'Student')\"\n                       [routerLink]=\"'/student/create-student/add'\">Add Student</a>\n\n                    <div class=\"dropdown pull-right\" *ngIf=\"manageStudent\">\n                        <button class=\"btn btn-outline-primary\">Invite <i class=\"fa fa-sort-desc float-right ml-2\" aria-hidden=\"true\"></i></button>\n                        <div class=\"dropdown-content\" style=\"right: 1px\">\n                            <a class=\"cursor\" (click)=\"bulkModal()\"> Bulk Upload</a>\n                            <a class=\"cursor\" (click)=\"emailModal()\"> Invite By Email</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div id=\"batchDelete\" class=\"category-table custom-datatable transcation-datatable user-image\">\n                <div class=\"table-responsive\">\n                    <app-table [TableType]=\"'Student'\" [TableArray]=\"listData\" [initialPage]=\"currentStudentListPage\" (clickValue)=\"emittedValue($event)\" (pageChange)=\"onPageChange($event)\"></app-table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"schoolStatus.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n<ng-template #content1 let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Reset Password Using E-Mail</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <h5 class=\"text-center mt-3\">Are you sure want to reset password\n                        for {{resetPassword.first_name}}</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"change(1)\">Confirm</button>\n    </div>\n</ng-template>\n<ng-template #contentnow let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Reset Password Now</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <form [formGroup]=\"studentPassword\">\n                <div class=\"row form-group auth-form\">\n                    <input required readonly class=\"form-control\" type=\"text\" placeholder=\"Email\"\n                           formControlName=\"email\">\n                    <em class=\"error\"\n                        *ngIf=\"!studentPassword.get('email').valid && (studentPassword.get('email').dirty || studentPassword.get('email').touched)\">Email\n                        is required</em>\n                </div>\n                <div class=\"row form-group auth-form\">\n                    <div class=\"input-group\">\n                        <input required type=\"text\" formControlName=\"password\"\n                               class=\"form-control\" placeholder=\"Password\" aria-label=\"Recipient's username\"\n                               aria-describedby=\"basic-addon1\" [type]=\"conps ? 'password' : 'text'\">\n                        <div class=\"input-group-append\">\n                                     <span class=\"input-group-text\" id=\"basic-addon3\">\n                                            <i [class]=\"conps ? 'fa fa-eye-slash' : 'fa fa-eye'\" style=\"color: #7F3486\"\n                                               aria-hidden=\"true\" (click)=\"conps = !conps\"></i>\n                                     </span>\n                        </div>\n                    </div>\n                    <em class=\"error\"\n                        *ngIf=\"studentPassword.get('password').hasError('required') && (studentPassword.get('password').dirty || studentPassword.get('password').touched)\">Password\n                        is required</em>\n                    <em *ngIf=\"studentPassword.get('password').hasError('minlength')\" class=\"error help-block\">Minimum 5\n                        characters required</em>\n                </div>\n                <div class=\"row form-group auth-form\">\n                    <div class=\"input-group\">\n                        <input required type=\"text\" formControlName=\"confirmpassword\"\n                               class=\"form-control\" placeholder=\"Confirm Password\" aria-label=\"Recipient's username\"\n                               aria-describedby=\"basic-addon1\" [type]=\"conps1 ? 'password' : 'text'\">\n                        <div class=\"input-group-append\">\n                           <span class=\"input-group-text\" id=\"basic-addon2\">\n                               <i [class]=\"conps1 ? 'fa fa-eye-slash' : 'fa fa-eye'\" style=\"color: #7F3486\"\n                                  aria-hidden=\"true\" (click)=\"conps1 = !conps1\"></i>\n                           </span>\n                        </div>\n                    </div>\n                    <em class=\"error\"\n                        *ngIf=\"studentPassword.get('confirmpassword').hasError('required') && (studentPassword.get('confirmpassword').dirty || studentPassword.get('confirmpassword').touched)\">Confirm\n                        Password is required</em>\n                    <div *ngIf=\"checkPasswords()\">\n                        <em class=\"error help-block\">\n                            Enter same password as above\n                        </em>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"cancel()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"change(2)\">Confirm</button>\n    </div>\n</ng-template>\n\n<ng-template #studentChange let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 font-weight-bold px-0\">Transfer Class</h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\" *ngIf=\"classStudentList != ''\">\n            <form [formGroup]=\"studentClassChange\">\n                <div class=\"form-group row\">\n                    <label class=\"col-xl-2 col-md-3 align-self-center\"><span class=\"text-danger\">*</span>\n                        From Class</label>\n                    <div class=\"col-xl-10 col-md-9\">\n                        <ng-select [items]=\"classStudentList\"\n                                   bindLabel=\"class_name\"\n                                   bindValue=\"class_id\"\n                                   placeholder=\"Please Select\"\n                                   typeToSearchText=\"\"\n                                   formControlName=\"formClass\"\n                                   (change)=\"selectedClass($event)\"\n                                   [attr.title]=\"selectedFromClass?.class_name\"\n                                   required\n                        >\n                            <ng-template ng-option-tmp let-item=\"item\">\n                                <div [attr.title]=\"item.class_name\">{{ item.class_name }}</div>\n                            </ng-template>\n                        </ng-select>\n                        <em class=\"error\"\n                            *ngIf=\"!studentClassChange.get('formClass').valid && (studentClassChange.get('formClass').dirty || studentClassChange.get('formClass').touched)\">Select\n                            the From Class</em>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-xl-2 col-md-3 align-self-center\"><span class=\"text-danger\">*</span>\n                        To Class</label>\n                    <div class=\"col-xl-10 col-md-9\">\n                        <ng-select [items]=\"allClassList\"\n                                   bindLabel=\"fromClassLabel\"\n                                   bindValue=\"class_id\"\n                                   placeholder=\"Please Select\"\n                                   typeToSearchText=\"\"\n                                   formControlName=\"toClass\"\n                                   (change)=\"selectedClass($event)\"\n                                   [attr.title]=\"selectedToClass?.fromClassLabel\"\n                                   required\n                        >\n                            <ng-template ng-option-tmp let-item=\"item\">\n                                <div [attr.title]=\"item.fromClassLabel\">{{ item?.fromClassLabel }}</div>\n                            </ng-template>\n                        </ng-select>\n                        <em class=\"error\"\n                            *ngIf=\"!studentClassChange.get('toClass').valid && (studentClassChange.get('toClass').dirty || studentClassChange.get('toClass').touched)\">Select\n                            the To Class</em>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-xl-2 col-md-3 align-self-center\"><span class=\"text-danger\">*</span>\n                        Effective Date</label>\n                    <div class=\"col-xl-10 col-md-9 form-group\">\n                        <div class=\"d-flex align-items-baseline\">\n                            <input class=\"form-control\" placeholder=\"mm/dd/yyyy\"\n                                   name=\"dp2\" formControlName=\"from_startdate\" angular-mydatepicker\n                                   #dp2=\"angular-mydatepicker\"\n                                   [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged($event)\" autocomplete=\"off\">\n                            <div class=\"input-group-append\">\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp2.toggleCalendar()\">\n                                    <i class=\"fa fa-calendar-o\"></i></button>\n                            </div>\n                        </div>\n                        <em *ngIf=\"!studentClassChange.get('from_startdate').valid && (studentClassChange.get('from_startdate').dirty || studentClassChange.get('from_startdate').touched)\"\n                            class=\"error\">Please Enter Effective Date</em>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"container-fluid\" *ngIf=\"classStudentList == ''\">\n            <div class=\"row d-flex justify-content-center\">\n                <div class=\"col-12\">\n                    <button class=\"nodataList\">Currently, Not enrolled for any classes!</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-outline-primary\" (click)=\"onSave()\">Close</button>\n        <button class=\"btn btn-primary\" *ngIf=\"classStudentList != ''\" (click)=\"submitChangeClass()\">Save</button>\n    </div>\n</ng-template>\n<ng-template #allNotes let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title text-center\">All Notes</h4>\n        <i (click)=\"close()\" class=\"fa fa-close cursor\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"col-md-12 d-flex justify-content-between\">\n            <div *ngIf=\"listClass.length != 0\" class=\"col-md-6\">\n                <ng-select (change)=\"changeNotes($event, 'class')\"\n                           [items]=\"listClass\"\n                           bindLabel=\"class_name\"\n                           bindValue=\"class_id\"\n                           placeholder=\"Select Class\"\n                           typeToSearchText=\"\"\n                >\n                </ng-select>\n            </div>\n            <div *ngIf=\"classId != 0\" class=\"col-md-6\">\n                <ng-select (change)=\"changeNotes($event, 'content')\"\n                           [(ngModel)]=\"specificData\"\n                           [items]=\"contentData\"\n                           bindLabel=\"content_name\"\n                           bindValue=\"content_id\"\n                           id=\"contentDrop\"\n                           placeholder=\"Select Content\"\n                           typeToSearchText=\"\"\n                >\n                </ng-select>\n            </div>\n        </div>\n        <div class=\"row d-flex justify-content-center\">\n            <div *ngFor=\"let list of listNotes; let i = index\" class=\"col-10 mt-2\">\n                <div class=\"row p-2 border-secondary rounded grey-border\">\n                    <div class=\"col-9 d-flex\" style=\"word-wrap: break-word\">\n                        <i *ngIf=\"list.notes_type == '2'\"\n                           class=\"fa fa-envelope-square align-self-center mr-2 color-primary\"></i>\n                        <i *ngIf=\"list.notes_type == '1'\"\n                           class=\"fa fa-bookmark align-self-center mr-2 color-secondary\"></i>\n                        <p [innerText]=\"list.notes\" class=\"mb-0\"></p>\n                    </div>\n                    <div class=\"col-3 px-0 align-self-center\">\n                        <small class=\"mb-0\">{{list.created_date | customDateFormat}}</small>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"listNotes.length == 0\" class=\"col-md-12 align-self-center my-2\">\n                <p class=\"mb-0\">No Records Found</p>\n            </div>\n            <!--            <div class=\"col-11 mt-2\">-->\n            <!--                <textarea [(ngModel)]=\"notes\" class=\"form-control\" placeholder=\"Enter Notes\" style=\"width: 100%; height: 100px; padding: 4px\"></textarea>-->\n            <!--            </div>-->\n            <!--            <div class=\"col-11 text-right mt-2\">-->\n            <!--                <button (click)=\"close()\" class=\"btn btn-outline-primary mr-2\" type=\"button\">Close</button>-->\n            <!--            </div>-->\n        </div>\n    </div>\n</ng-template>\n<!-- Container-fluid Ends-->\n", styles: [".dropdown-content a:hover {\n  color: #8F008A;\n}\n"] }]
    }], () => [{ type: i1.NgbModalConfig }, { type: i2.StudentService }, { type: i3.ConfigurationService }, { type: i4.TeacherService }, { type: i3.ConfigurationService }, { type: i1.NgbModal }, { type: i5.AuthService }, { type: i6.CommonService }, { type: i7.DomSanitizer }, { type: i8.CommonDataService }, { type: i9.Router }, { type: i10.TitleCasePipe }, { type: i11.ToastrService }, { type: i12.SchoolService }, { type: i13.ClassService }, { type: i14.FormBuilder }, { type: i15.LoginService }, { type: i16.ValidationService }, { type: i17.NewsubjectService }, { type: i18.ContentdetailService }, { type: i10.DatePipe }], { allNotes: [{
            type: ViewChild,
            args: ['allNotes']
        }], modalContent: [{
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
        }], changeStudent: [{
            type: ViewChild,
            args: ['studentChange']
        }], page: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListTemplateComponent, { className: "ListTemplateComponent" }); })();
//# sourceMappingURL=list-student.component.js.map