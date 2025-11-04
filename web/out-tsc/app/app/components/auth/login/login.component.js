import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild, SecurityContext } from '@angular/core';
import { Validators } from '@angular/forms';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SessionConstants } from '../../../shared/data/sessionConstants';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
import * as i3 from "../../../shared/service/login.service";
import * as i4 from "../../../environment.service";
import * as i5 from "../../../shared/service/common-data.service";
import * as i6 from "../../../shared/service/common.service";
import * as i7 from "ngx-device-detector";
import * as i8 from "@angular/platform-browser";
import * as i9 from "../../../shared/service/student.service";
import * as i10 from "../../../shared/service/auth.service";
import * as i11 from "../../../shared/service/configuration.service";
import * as i12 from "ngx-toastr";
import * as i13 from "../../../shared/service/validation.service";
import * as i14 from "@ng-bootstrap/ng-bootstrap";
import * as i15 from "../../../shared/service/School.service";
import * as i16 from "../../../shared/service/newsubject.service";
import * as i17 from "@angular/common";
import * as i18 from "@ng-select/ng-select";
const _c0 = ["tcupdate"];
function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "img", 9);
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_3_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵtext(1, " Your email address is required. ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_3_div_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵtext(1, " Enter a valid email address. ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_3_div_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵtext(1, " A password is required to sign in. ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 10)(2, "article", 11)(3, "div", 12)(4, "div")(5, "span", 13);
    i0.ɵɵtext(6, "Welcome back");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 14);
    i0.ɵɵtext(8, "Keep your institution moving forward.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 15);
    i0.ɵɵtext(10, " Access the EdQuill enterprise platform to manage classes, content, assessments and communication at scale. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "ul", 16)(12, "li", 17);
    i0.ɵɵelement(13, "i", 18);
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15, "Unified dashboard with performance analytics for every role.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "li", 17);
    i0.ɵɵelement(17, "i", 18);
    i0.ɵɵelementStart(18, "span");
    i0.ɵɵtext(19, "Secure single sign-on with Google or enterprise credentials.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "li", 17);
    i0.ɵɵelement(21, "i", 18);
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23, "Real-time collaboration tools for teachers, graders and learners.");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(24, "div", 19);
    i0.ɵɵelement(25, "img", 20);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(26, "div", 21)(27, "div", 22)(28, "div", 23)(29, "h1", 24);
    i0.ɵɵtext(30, "Sign in");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "p", 15);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 25)(34, "button", 26);
    i0.ɵɵelement(35, "div", 27)(36, "div", 28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 29)(38, "span", 30);
    i0.ɵɵtext(39, "Or continue with email");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "form", 31)(41, "div", 32);
    i0.ɵɵelement(42, "input", 33);
    i0.ɵɵelementStart(43, "label", 34);
    i0.ɵɵtext(44, "Work email");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(45, LoginComponent_Conditional_3_div_45_Template, 2, 0, "div", 35)(46, LoginComponent_Conditional_3_div_46_Template, 2, 0, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "div", 36);
    i0.ɵɵelement(48, "input", 37);
    i0.ɵɵelementStart(49, "label", 38);
    i0.ɵɵtext(50, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "button", 39);
    i0.ɵɵlistener("click", function LoginComponent_Conditional_3_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.conps = !ctx_r1.conps); });
    i0.ɵɵelement(52, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(53, LoginComponent_Conditional_3_div_53_Template, 2, 0, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "div", 40)(55, "div", 41)(56, "input", 42);
    i0.ɵɵlistener("change", function LoginComponent_Conditional_3_Template_input_change_56_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setRemeberMe($event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "label", 43);
    i0.ɵɵtext(58, "Remember me");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(59, "a", 44);
    i0.ɵɵtext(60, "Forgot password?");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "button", 45);
    i0.ɵɵlistener("click", function LoginComponent_Conditional_3_Template_button_click_61_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.login()); });
    i0.ɵɵtext(62, " Sign in ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(63, "div", 46);
    i0.ɵɵtext(64, " By signing in you agree to the EdQuill ");
    i0.ɵɵelementStart(65, "a", 47);
    i0.ɵɵtext(66, "Terms");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(67, " and ");
    i0.ɵɵelementStart(68, "a", 48);
    i0.ɵɵtext(69, "Privacy Policy");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(70, ". ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_13_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(25);
    i0.ɵɵpropertyInterpolate1("alt", "", ctx_r1.siteName, " brand");
    i0.ɵɵproperty("src", "assets/images/" + ctx_r1.logo, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("Access your ", ctx_r1.siteName, " workspace with your enterprise credentials.");
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("data-login_uri", ctx_r1.backEndURLSignIn);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.loginForm);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-invalid", ((tmp_7_0 = ctx_r1.loginForm.get("userName")) == null ? null : tmp_7_0.invalid) && (((tmp_7_0 = ctx_r1.loginForm.get("userName")) == null ? null : tmp_7_0.dirty) || ((tmp_7_0 = ctx_r1.loginForm.get("userName")) == null ? null : tmp_7_0.touched)));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (tmp_8_0 = ctx_r1.loginForm.get("userName")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["required"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_9_0 = ctx_r1.loginForm.get("userName")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["email"]);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-invalid", ((tmp_10_0 = ctx_r1.loginForm.get("password")) == null ? null : tmp_10_0.invalid) && (((tmp_10_0 = ctx_r1.loginForm.get("password")) == null ? null : tmp_10_0.dirty) || ((tmp_10_0 = ctx_r1.loginForm.get("password")) == null ? null : tmp_10_0.touched)));
    i0.ɵɵproperty("type", ctx_r1.conps ? "password" : "text");
    i0.ɵɵadvance(4);
    i0.ɵɵclassMap(ctx_r1.conps ? "bi bi-eye-slash" : "bi bi-eye");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_13_0 = ctx_r1.loginForm.get("password")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors["required"]);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("routerLink", "/forgotPassword/content");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.loginForm.invalid);
} }
function LoginComponent_Conditional_4_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵtext(1, " First name is required. ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_4_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵtext(1, " Last name is required. ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_4_div_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵtext(1, " Gender selection is required. ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_4_div_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵtext(1, " A valid email address is required. ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 21)(2, "div", 22)(3, "div", 23)(4, "h2", 50);
    i0.ɵɵtext(5, "Student registration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 15);
    i0.ɵɵtext(7, "Connect with your learning workspace using your class code or Google account.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 25)(9, "button", 51);
    i0.ɵɵelement(10, "div", 27)(11, "div", 28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 29)(13, "span", 30);
    i0.ɵɵtext(14, "Or complete the form below");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "form", 52)(16, "div", 53)(17, "div", 54)(18, "div", 32);
    i0.ɵɵelement(19, "input", 55);
    i0.ɵɵelementStart(20, "label", 56);
    i0.ɵɵtext(21, "First name *");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(22, LoginComponent_Conditional_4_div_22_Template, 2, 0, "div", 35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 54)(24, "div", 32);
    i0.ɵɵelement(25, "input", 57);
    i0.ɵɵelementStart(26, "label", 58);
    i0.ɵɵtext(27, "Last name *");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(28, LoginComponent_Conditional_4_div_28_Template, 2, 0, "div", 35);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "div", 32)(30, "select", 59)(31, "option", 60);
    i0.ɵɵtext(32, "Select an option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "option", 61);
    i0.ɵɵtext(34, "Male");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "option", 62);
    i0.ɵɵtext(36, "Female");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "option", 63);
    i0.ɵɵtext(38, "Prefer not to disclose");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "label", 64);
    i0.ɵɵtext(40, "Gender *");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(41, LoginComponent_Conditional_4_div_41_Template, 2, 0, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "div", 32);
    i0.ɵɵelement(43, "input", 65);
    i0.ɵɵelementStart(44, "label", 66);
    i0.ɵɵtext(45, "Email address *");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(46, LoginComponent_Conditional_4_div_46_Template, 2, 0, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "div", 32)(48, "input", 67);
    i0.ɵɵlistener("keypress", function LoginComponent_Conditional_4_Template_input_keypress_48_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "label", 68);
    i0.ɵɵtext(50, "Mobile number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "small", 69);
    i0.ɵɵtext(52, "Used for class notifications and reminders");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "div", 70)(54, "h5", 71);
    i0.ɵɵtext(55, "Choose your class");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(56, "ng-select", 72);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "button", 45);
    i0.ɵɵlistener("click", function LoginComponent_Conditional_4_Template_button_click_57_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitRegisterForm()); });
    i0.ɵɵtext(58, " Complete registration ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(59, "div", 73)(60, "a", 74);
    i0.ɵɵelement(61, "i", 75);
    i0.ɵɵtext(62, "Back to sign in ");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵattribute("data-login_uri", ctx_r1.backEndURLRegisterSignIn);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.registerForm);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ((tmp_4_0 = ctx_r1.registerForm.get("first_name")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.registerForm.get("first_name")) == null ? null : tmp_4_0.touched));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ((tmp_5_0 = ctx_r1.registerForm.get("last_name")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.registerForm.get("last_name")) == null ? null : tmp_5_0.touched));
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngIf", ((tmp_6_0 = ctx_r1.registerForm.get("gender")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.registerForm.get("gender")) == null ? null : tmp_6_0.touched));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ((tmp_7_0 = ctx_r1.registerForm.get("email_id")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.registerForm.get("email_id")) == null ? null : tmp_7_0.touched));
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("items", ctx_r1.gradeList);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.registerForm.invalid);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", "/auth/login");
} }
function LoginComponent_section_5_em_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 102);
    i0.ɵɵtext(1, "User name is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_section_5_em_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 102);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 76)(1, "div", 77)(2, "div", 78)(3, "h2");
    i0.ɵɵtext(4, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 79)(6, "div", 80)(7, "h3", 81);
    i0.ɵɵtext(8, "Login");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 82)(10, "form", 83)(11, "div", 84)(12, "input", 85, 1);
    i0.ɵɵlistener("keypress", function LoginComponent_section_5_Template_input_keypress_12_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.enterKey($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, LoginComponent_section_5_em_14_Template, 2, 0, "em", 86);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 84)(16, "div", 87)(17, "input", 88);
    i0.ɵɵlistener("keypress", function LoginComponent_section_5_Template_input_keypress_17_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.enterKey($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 89)(19, "span", 90)(20, "i", 91);
    i0.ɵɵlistener("click", function LoginComponent_section_5_Template_i_click_20_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.conps = !ctx_r1.conps); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(21, LoginComponent_section_5_em_21_Template, 2, 0, "em", 86);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 92)(23, "div", 93)(24, "input", 94);
    i0.ɵɵlistener("click", function LoginComponent_section_5_Template_input_click_24_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.rememberList($event, "4")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "label", 95);
    i0.ɵɵtext(26, "Remember me");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "a", 96);
    i0.ɵɵtext(28, "Forgot password");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "div", 97)(30, "button", 98);
    i0.ɵɵlistener("click", function LoginComponent_section_5_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.login()); });
    i0.ɵɵtext(31, "Login");
    i0.ɵɵelement(32, "i", 99);
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(33, "div", 100);
    i0.ɵɵelement(34, "img", 101);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("formGroup", ctx_r1.studentForm);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.studentForm.get("userName").valid && (ctx_r1.studentForm.get("userName").dirty || ctx_r1.studentForm.get("userName").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r1.conps ? "password" : "text");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.conps ? "fa fa-eye-slash" : "fa fa-eye");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.studentForm.get("password").valid && (ctx_r1.studentForm.get("password").dirty || ctx_r1.studentForm.get("password").touched));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("routerLink", "/forgotPassword/student");
} }
function LoginComponent_section_6_em_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 102);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_section_6_em_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 102);
    i0.ɵɵtext(1, "Last name is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_section_6_em_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 102);
    i0.ɵɵtext(1, "Gender is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_section_6_em_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 102);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_section_6_em_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 102);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_section_6_em_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 102);
    i0.ɵɵtext(1, "Confirm Password is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_section_6_div_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 119)(1, "em", 125);
    i0.ɵɵtext(2, "Enter same password as above");
    i0.ɵɵelementEnd()();
} }
function LoginComponent_section_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 76)(1, "div", 77)(2, "div", 78)(3, "div", 79)(4, "div", 103)(5, "h4", 104);
    i0.ɵɵtext(6, "Student Register");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 105)(8, "div", 106);
    i0.ɵɵelement(9, "div", 27)(10, "div", 28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 107)(12, "p");
    i0.ɵɵtext(13, "or Sign in with Email");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 82)(15, "form", 83)(16, "div", 84);
    i0.ɵɵelement(17, "input", 108);
    i0.ɵɵtemplate(18, LoginComponent_section_6_em_18_Template, 2, 0, "em", 86);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 84);
    i0.ɵɵelement(20, "input", 109);
    i0.ɵɵtemplate(21, LoginComponent_section_6_em_21_Template, 2, 0, "em", 86);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 84)(23, "select", 110)(24, "option", 111);
    i0.ɵɵtext(25, "Select Gender *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 61);
    i0.ɵɵtext(27, "Male");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 62);
    i0.ɵɵtext(29, "Female");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 63);
    i0.ɵɵtext(31, "Do not want to disclose");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(32, LoginComponent_section_6_em_32_Template, 2, 0, "em", 86);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 84);
    i0.ɵɵelement(34, "input", 112);
    i0.ɵɵtemplate(35, LoginComponent_section_6_em_35_Template, 2, 0, "em", 86);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 84)(37, "input", 113);
    i0.ɵɵlistener("keypress", function LoginComponent_section_6_Template_input_keypress_37_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.numberValidate($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 84);
    i0.ɵɵelement(39, "ng-select", 114);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 84)(41, "div", 87);
    i0.ɵɵelement(42, "input", 115);
    i0.ɵɵelementStart(43, "div", 116);
    i0.ɵɵlistener("click", function LoginComponent_section_6_Template_div_click_43_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.conps = !ctx_r1.conps); });
    i0.ɵɵelementStart(44, "span", 117);
    i0.ɵɵelement(45, "i", 118);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "div", 119);
    i0.ɵɵtemplate(47, LoginComponent_section_6_em_47_Template, 2, 0, "em", 86);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "div", 84)(49, "div", 87);
    i0.ɵɵelement(50, "input", 120);
    i0.ɵɵelementStart(51, "div", 116);
    i0.ɵɵlistener("click", function LoginComponent_section_6_Template_div_click_51_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.conps1 = !ctx_r1.conps1); });
    i0.ɵɵelementStart(52, "span", 121);
    i0.ɵɵelement(53, "i", 118);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(54, LoginComponent_section_6_em_54_Template, 2, 0, "em", 86)(55, LoginComponent_section_6_div_55_Template, 3, 0, "div", 122);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "div", 123)(57, "button", 124);
    i0.ɵɵlistener("click", function LoginComponent_section_6_Template_button_click_57_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitRegisterForm()); });
    i0.ɵɵtext(58, "Submit");
    i0.ɵɵelement(59, "i", 99);
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(60, "div", 100);
    i0.ɵɵelement(61, "img", 101);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵattribute("data-login_uri", ctx_r1.backEndURLRegisterSignIn);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.registerForm);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.registerForm.get("first_name").valid && (ctx_r1.registerForm.get("first_name").dirty || ctx_r1.registerForm.get("first_name").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.registerForm.get("last_name").valid && (ctx_r1.registerForm.get("last_name").dirty || ctx_r1.registerForm.get("last_name").touched));
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", !ctx_r1.registerForm.get("gender").valid && (ctx_r1.registerForm.get("gender").dirty || ctx_r1.registerForm.get("gender").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.registerForm.get("email_id").valid && (ctx_r1.registerForm.get("email_id").dirty || ctx_r1.registerForm.get("email_id").touched));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("items", ctx_r1.gradeList);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r1.conps ? "password" : "text");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.conps ? "fa fa-eye-slash" : "fa fa-eye");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.registerForm.get("password").valid && (ctx_r1.registerForm.get("password").dirty || ctx_r1.registerForm.get("password").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r1.conps1 ? "password" : "text");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r1.conps1 ? "fa fa-eye-slash" : "fa fa-eye");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.registerForm.get("confirmpassword").valid && (ctx_r1.registerForm.get("confirmpassword").dirty || ctx_r1.registerForm.get("confirmpassword").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.checkPasswords());
} }
function LoginComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 126)(1, "h4", 127);
    i0.ɵɵtext(2, "Terms & Conditions and Privacy Policy");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 128)(4, "div", 76)(5, "div", 129)(6, "div", 130)(7, "input", 131);
    i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_ng_template_7_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.checkterms, $event) || (ctx_r1.checkterms = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9, "I accept ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 132)(11, "span", 133);
    i0.ɵɵtext(12, "Terms & Conditions");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14, " and ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "a", 134);
    i0.ɵɵtext(16, "Privacy Policy");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(17, "div", 135)(18, "button", 136);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_7_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.confirmtermDetails()); });
    i0.ɵɵtext(19, "Submit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.checkterms);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("disabled", ctx_r1.checkterms == undefined || !ctx_r1.checkterms);
} }
export class LoginComponent {
    constructor(formBuilder, activateRoute, loginService, env, commondata, common, deviceService, domSanitizer, student, authService, config, router, toastr, validation, modalService, schoolService, behavior, renderer) {
        this.formBuilder = formBuilder;
        this.activateRoute = activateRoute;
        this.loginService = loginService;
        this.env = env;
        this.commondata = commondata;
        this.common = common;
        this.deviceService = deviceService;
        this.domSanitizer = domSanitizer;
        this.student = student;
        this.authService = authService;
        this.config = config;
        this.router = router;
        this.toastr = toastr;
        this.validation = validation;
        this.modalService = modalService;
        this.schoolService = schoolService;
        this.behavior = behavior;
        this.renderer = renderer;
        this.conps = true;
        this.conps1 = true;
        this.settingData = [];
        this.timeZoneList = [];
        this.backEndURLSignIn = '';
        this.backEndURLRegisterSignIn = '';
        this.classCode = '';
        this.gradeList = [];
        this.siteName = '';
        this.googleSignID = '';
        this.studentRegistrationToken = '';
        this.activateRoute.params.forEach((params) => {
            console.log(params, 'params');
            this.type = params.type;
            this.remember = false;
            console.log(this.type, 'type');
            this.googleSignID = params.providerId ?? '';
            console.log(this.googleSignID, 'googleSignID');
            this.studentRegistrationToken = this.type == 'googleStudentRegister' ? params.classCode ?? '' : '';
            this.classCode = this.type == 'googleStudentRegister' ? '' : params.classCode ? params.classCode : '';
            this.classCode != '' ? localStorage.setItem('studentClassCode', this.classCode) : '';
            console.log(this.classCode, 'classCode');
        });
        this.backEndURLSignIn = this.env.apiHost + 'user/googleLogin';
        this.backEndURLRegisterSignIn = this.env.apiHost + 'user/googleRegister';
        console.log(this.backEndURLSignIn, this.backEndURLRegisterSignIn, 'backEndURL');
        if (localStorage.getItem('studentClassCode') == 'undefined' || localStorage.getItem('studentClassCode') == null) {
            this.enrollCode = '';
            console.log(this.enrollCode, 'enrollcodeEmpty');
        }
        else {
            this.enrollCode = localStorage.getItem('studentClassCode');
            console.log(this.enrollCode, 'enrollcodeAnswer');
        }
        const url = window.location.href;
        console.log(url, 'url');
        if (url.toString().indexOf('xtracurriculum') > -1) {
            this.logo = 'xtraCurriculum.png';
            this.siteName = 'XtraCurriculum';
        }
        else if (url.toString().indexOf('safeteen') > -1) {
            this.logo = 'safeTeensOrg.png';
            this.siteName = 'SafeTeensOrg';
        }
        else if (url.toString().indexOf('elevenace') > -1) {
            this.logo = 'elevenAce.png';
        }
        else if (url.toString().indexOf('uniqprep') > -1) {
            this.logo = 'uniqprep.png';
            this.siteName = 'Uniqprep';
        }
        else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('uthkal') > -1 || url.toString().indexOf('edquill') > -1 || url.toString().indexOf('edveda') > -1) {
            this.logo = 'EdQuill_2.png';
            this.siteName = 'EdQuill';
        }
        this.conps = true;
        this.conps1 = true;
        this.loginForm = this.formBuilder.group({
            userName: '',
            password: '',
            checkbox: '',
        });
        this.studentForm = this.formBuilder.group({
            userName: null,
            password: '',
            checkbox3: '',
        });
        this.formresetValue();
        if (this.authService.getSessionData('username') != '') {
            this.loginForm.controls.userName.patchValue(this.authService.getSessionData('username'));
            this.loginForm.controls.password.patchValue(this.authService.getSessionData('password'));
            this.loginForm.controls.checkbox.patchValue(this.authService.getSessionData('checked'));
        }
        if (this.googleSignID != '' && this.googleSignID != 'error') {
            this.validGoogleAccountSignIn('signIn');
        }
        else if (this.googleSignID == 'error') {
            this.toastr.error('Something went wrong. Please try again after sometime or contact Administrator');
        }
        else if (!['userExistsError', 'error', ''].includes(this.studentRegistrationToken)) {
            this.validGoogleAccountSignIn('newUser');
        }
        else if (['userExistsError', 'error'].indexOf(this.studentRegistrationToken) > -1) {
            this.toastr.error(this.studentRegistrationToken == 'userExistsError' ? 'User Already Exist' :
                'Something went wrong. Please try again after sometime or contact Administrator');
        }
    }
    ngOnInit() {
        this.loadGoogleSignInScript();
        if (this.classCode != '') {
            this.enrollClassLogin();
        }
        else {
            this.authService.checkAuthentication();
        }
    }
    loadGoogleSignInScript() {
        const script = this.renderer.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.defer = true;
        document.body.appendChild(script);
    }
    numberValidate(event) {
        this.validation.numberValidate(event);
    }
    onWindowResize() {
        this.mobileView = window.innerWidth <= 1100;
    }
    enrollClassLogin() {
        const data = {
            platform: 'web',
            class_code: this.classCode,
            timezone: 'Asia/Calcutta'
        };
        console.log(data, 'data');
        this.student.checkClassCode(data).subscribe((successData) => {
            this.checkClassCodeSuccess(successData);
        }, (error) => {
            console.log(error, 'error');
        });
    }
    checkClassCodeSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData, 'successData');
            this.gradeList = successData.ResponseObject.length != 0 ? successData.ResponseObject[0].grade_details : [];
            console.log(this.gradeList, 'gradeList');
        }
        else {
            this.toastr.error(successData.ErrorObject, '');
            this.router.navigate(['auth/login']);
        }
    }
    checkDeviceType() {
        console.log(this.deviceService.getDeviceInfo(), 'devicedetecteor');
        if (this.deviceService.getDeviceInfo().os == 'iOS' ||
            (this.deviceService.getDeviceInfo().os == 'Mac' && this.deviceService.isTablet())) {
            const urlString = 'https://apps.apple.com/us/app/edquill/id1584334449';
            const url = this.domSanitizer.sanitize(SecurityContext.RESOURCE_URL, this.domSanitizer.bypassSecurityTrustResourceUrl(urlString));
            window.open(url, '_self');
        }
    }
    setRemeberMe(value) {
        console.log(value, 'value');
        // localStorage.setItem('type1', type);
        this.authService.setSessionData('username', value ? this.loginForm.controls.userName.value : '');
        this.authService.setSessionData('password', value ? this.loginForm.controls.password.value : '');
        this.authService.setSessionData('checked', value);
        this.remember = value;
        console.log(this.remember, 'remeber');
    }
    rememberList(value, type) {
        // this.setRemeberMe(value.target.checked);
        // if (type == '1') {
        //     if (value.target.checked == true) {
        //         localStorage.setItem('type1', type);
        //         localStorage.setItem('username', this.adminForm.controls.userName.value);
        //         localStorage.setItem('password', this.adminForm.controls.password.value);
        //         localStorage.setItem('checked', value.target.checked);
        //         this.remember = true;
        //     } else {
        //         localStorage.setItem('username', '');
        //         localStorage.setItem('password', '');
        //         localStorage.setItem('checked', '');
        //         this.remember = false;
        //     }
        // }
        // if (type == '2') {
        //     if (value.target.checked == true) {
        //         localStorage.setItem('type2', type);
        //         localStorage.setItem('username1', this.contentForm.controls.userName.value);
        //         localStorage.setItem('password1', this.contentForm.controls.password.value);
        //         localStorage.setItem('checked1', value.target.checked);
        //         this.remember = true;
        //     } else {
        //         localStorage.setItem('username1', '');
        //         localStorage.setItem('password1', '');
        //         localStorage.setItem('checked1', '');
        //         this.remember = false;
        //     }
        // }
        // if (type == '3') {
        //     if (value.target.checked == true) {
        //         localStorage.setItem('type3', type);
        //         localStorage.setItem('username2', this.schoolForm.controls.userName.value);
        //         localStorage.setItem('password2', this.schoolForm.controls.password.value);
        //         localStorage.setItem('checked2', value.target.checked);
        //         this.remember = true;
        //     } else {
        //         localStorage.setItem('username2', '');
        //         localStorage.setItem('password2', '');
        //         localStorage.setItem('checked2', '');
        //         this.remember = false;
        //     }
        // }
        // if (type == '4') {
        //     if (value.target.checked == true) {
        //         localStorage.setItem('type4', type);
        //         localStorage.setItem('username3', this.studentForm.controls.userName.value);
        //         localStorage.setItem('password3', this.studentForm.controls.password.value);
        //         localStorage.setItem('checked3', value.target.checked);
        //         this.remember = true;
        //     } else {
        //         localStorage.setItem('username3', '');
        //         localStorage.setItem('password3', '');
        //         localStorage.setItem('checked3', '');
        //         this.remember = false;
        //     }
        // }
        // if (type == '7') {
        //     if (value.target.checked == true) {
        //         localStorage.setItem('type7', type);
        //         localStorage.setItem('username7', this.graderForm.controls.userName.value);
        //         localStorage.setItem('password7', this.graderForm.controls.password.value);
        //         localStorage.setItem('checked7', value.target.checked);
        //         this.remember = true;
        //     } else {
        //         localStorage.setItem('username7', '');
        //         localStorage.setItem('password7', '');
        //         localStorage.setItem('checked7', '');
        //         this.remember = false;
        //     }
        // }
    }
    enterKey(event) {
        if (event.key == 'Enter') {
            this.login();
        }
    }
    validGoogleAccountSignIn(type) {
        const data = {
            platform: 'web',
            google_token: type == 'signIn' ? this.googleSignID : this.studentRegistrationToken
        };
        type != 'signIn' ? data['class_code'] = this.enrollCode : '';
        this.authService.postService(data, type == 'signIn' ? 'user/googleAuthenticate' : 'student/googleRegister').subscribe((successData) => {
            if (successData.IsSuccess) {
                console.log(successData);
                this.loginSuccess(successData);
            }
            else {
                this.toastr.error(successData.ErrorObject);
            }
        }, (error) => {
            console.error(error, 'signIn_error');
        });
    }
    login() {
        if (this.loginForm.valid) {
            this.remember = this.loginForm.controls.checkbox.value == true || this.loginForm.controls.checkbox.value == 'true';
            console.log(this.remember, 'remeber');
            const data = {
                platform: 'web',
                username: this.loginForm.controls.userName.value,
                password: this.loginForm.controls.password.value,
                remember: this.remember
            };
            this.loginService.login(data).subscribe((successData) => {
                if (successData.IsSuccess) {
                    this.loginSuccess(successData);
                    console.log(successData);
                }
                else {
                    this.toastr.error(successData.ErrorObject);
                }
            }, (error) => {
                console.error(error, 'error_login');
            });
        }
        else {
            this.validation.validateAllFormFields(this.loginForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    loginSuccess(successData) {
        this.setRemeberMe(this.remember);
        if (successData.ResponseObject.user_role == '2') {
            this.loginAdminSuccess(successData);
        }
        else if (successData.ResponseObject.user_role == '3') {
            this.loginCreatorSuccess(successData);
        }
        else if (successData.ResponseObject.user_role == '4') {
            this.loginSchoolSuccess(successData);
        }
        else if (successData.ResponseObject.user_role == '5') {
            this.loginStudentSuccess(successData);
        }
        else if (successData.ResponseObject.user_role == '6') {
            this.loginCorporatesSuccess(successData);
        }
        else if (successData.ResponseObject.user_role == '7') {
            this.loginGraderSuccess(successData);
        }
    }
    loginAdminSuccess(successData) {
        this.admindata = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = this.admindata.user_id;
            this.roleId = this.admindata.user_role;
            this.authService.setToken(this.admindata.user_id, this.admindata.first_name, this.admindata.last_name, this.admindata.user_role, this.admindata.Accesstoken);
            this.authService.setSessionData('status', this.admindata.status);
            this.authService.setSessionData('default_password', this.admindata.default_password);
            this.authService.setSessionData('birthday', this.admindata.birthday);
            this.authService.setSessionData('email_id', this.admindata.email_id);
            this.authService.setSessionData('mobile', this.admindata.mobile);
            this.authService.setSessionData('profile_url', this.admindata.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.admindata.profile_thumb_url);
            this.authService.setSessionData('gender', this.admindata.gender);
            this.authService.setSessionData('location', this.admindata.location);
            this.authService.setSessionData('school_id', this.admindata.school_details[0].school_id);
            this.authService.setSessionData('school_name', this.admindata.school_details[0].name);
            this.authService.setSessionData('school_details', JSON.stringify(this.admindata.school_details));
            this.authService.setSessionData('resourceAccess', false);
            this.authService.setSessionData('rista_data1', JSON.stringify(this.admindata.school_details[0]));
            this.loginService.changeHomePage(this.admindata.user_role);
            // this.authService.setSessionData('preview_type', 'no');
            this.loginService.changeHomePage(this.admindata.user_role);
            this.settingList();
            this.getTimeZone();
            this.searchFunction();
            this.setCourseSearchValue();
            if (this.admindata.tc_status == '0') {
                this.modalRef = this.modalService.open(this.updateContent, { backdrop: 'static' });
            }
            else {
                if (this.admindata.school_details.length > 1) {
                    this.router.navigate(['/auth/select']);
                }
                else {
                    // this.toastr.success(successData.ResponseObject.message, 'Login');
                    setTimeout(() => {
                        this.admindata.school_details[0].allow_dashboard == '1' ? this.router.navigate(['/dashboard/default']) :
                            this.router.navigate(['/schedule/schedule-page']);
                    }, 700);
                    this.toastr.success(successData.ResponseObject.message, 'Login');
                }
            }
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }
    settingList() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.authService.getRoleId(),
            user_id: this.authService.getUserId(),
            school_id: this.authService.getSessionData('school_id'),
        };
        this.common.settingsDetails(data).subscribe((successData) => {
            this.listSuccess(successData, data);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    listSuccess(successData, data) {
        if (successData.IsSuccess) {
            this.settingData = successData.ResponseObject;
            this.authService.setSessionData('settingList', JSON.stringify(this.settingData));
            if (data.role_id != '5') {
                this.settingData.forEach((item) => {
                    if (item.name == 'date_format') {
                        this.behavior.changeDateFormat(item.date);
                    }
                    else if (item.name == 'timezone') {
                        this.timeZoneList.forEach((list) => {
                            if (item.value == list.id) {
                                const split = list.time_zone.split('(');
                                this.behavior.changeTimeZone(split[0]);
                            }
                        });
                    }
                });
            }
            this.authService.setSessionData('settingList', JSON.stringify(this.settingData));
        }
    }
    getTimeZone() {
        const data = {
            platform: 'web',
            role_id: this.authService.getRoleId(),
            user_id: this.authService.getUserId()
        };
        this.common.timeZone(data).subscribe((successData) => {
            this.timeZoneSuccess(successData);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    timeZoneSuccess(successData) {
        if (successData.IsSuccess) {
            this.timeZoneList = successData.ResponseObject;
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
    loginCreatorSuccess(successData) {
        this.creatorData = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = this.creatorData.user_id;
            this.roleId = this.creatorData.user_role;
            this.authService.setToken(this.creatorData.user_id, this.creatorData.first_name, this.creatorData.last_name, this.creatorData.user_role, this.creatorData.Accesstoken);
            this.authService.setSessionData('status', this.creatorData.status);
            this.authService.setSessionData('first_name', this.creatorData.first_name);
            this.authService.setSessionData('last_name', this.creatorData.last_name);
            this.authService.setSessionData('default_password', this.creatorData.default_password);
            this.authService.setSessionData('email_id', this.creatorData.email_id);
            this.authService.setSessionData('mobile', this.creatorData.mobile);
            this.authService.setSessionData('birthday', this.creatorData.birthday);
            this.authService.setSessionData('profile_url', this.creatorData.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.creatorData.profile_thumb_url);
            this.authService.setSessionData('gender', this.creatorData.gender);
            this.authService.setSessionData('location', this.creatorData.location);
            this.authService.setSessionData('school_id', this.creatorData.school_details[0].school_id);
            this.authService.setSessionData('creator_id', this.creatorData.school_idno);
            this.authService.setSessionData('address1', this.creatorData.address1);
            this.authService.setSessionData('address2', this.creatorData.address2);
            this.authService.setSessionData('city', this.creatorData.city);
            this.authService.setSessionData('statename', this.creatorData.state_name);
            this.authService.setSessionData('countryname', this.creatorData.country_name);
            this.authService.setSessionData('country', this.creatorData.country);
            this.authService.setSessionData('state', this.creatorData.state);
            this.authService.setSessionData('schooldetails', this.creatorData.school_details[0].name);
            this.authService.setSessionData('designation', this.creatorData.school_details[0].designation);
            this.authService.setSessionData('school_profile_url', this.creatorData.school_details[0].profile_url);
            this.authService.setSessionData('resourceAccess', false);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            this.searchFunction();
            this.loginService.changeHomePage(this.creatorData.user_role);
            if (this.creatorData.tc_status == '0') {
                this.modalRef = this.modalService.open(this.updateContent, { backdrop: 'static' });
            }
            else {
                if (this.creatorData.school_details.length > 1) {
                    this.router.navigate(['/auth/select']);
                }
                else {
                    this.router.navigate(['/repository/content-home']);
                }
                this.toastr.success(successData.ResponseObject.message, 'Login');
            }
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }
    loginSchoolSuccess(successData) {
        this.teacherdata = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = this.teacherdata.user_id;
            this.roleId = this.teacherdata.user_role;
            this.authService.setToken(this.teacherdata.user_id, this.teacherdata.first_name, this.teacherdata.last_name, this.teacherdata.user_role, this.teacherdata.Accesstoken);
            this.authService.setSessionData('status', this.teacherdata.status);
            this.authService.setSessionData('default_password', this.teacherdata.default_password);
            this.authService.setSessionData('email_id', this.teacherdata.email_id);
            this.authService.setSessionData('mobile', this.teacherdata.mobile);
            this.authService.setSessionData('birthday', this.teacherdata.birthday);
            this.authService.setSessionData('profile_url', this.teacherdata.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.teacherdata.profile_thumb_url);
            this.authService.setSessionData('gender', this.teacherdata.gender);
            this.authService.setSessionData('address1', this.teacherdata.address1);
            this.authService.setSessionData('address2', this.teacherdata.address2);
            this.authService.setSessionData('city', this.teacherdata.city);
            this.authService.setSessionData('statename', this.teacherdata.state_name);
            this.authService.setSessionData('countryname', this.teacherdata.country_name);
            this.authService.setSessionData('country', this.teacherdata.country);
            this.authService.setSessionData('state', this.teacherdata.state);
            this.authService.setSessionData('userDetails', JSON.stringify(this.teacherdata));
            this.authService.setSessionData('resourceAccess', false);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            ////Check Nav Permission////
            for (let i = 0; i < this.teacherdata.schoolDetails.length; i++) {
                for (let j = 0; j < this.teacherdata.schoolDetails[i].permissions.length; j++) {
                    this.teacherdata.schoolDetails[i].permissions[j].allowNav = false;
                    for (let k = 0; k < this.teacherdata.schoolDetails[i].permissions[j].permission.length; k++) {
                        if (this.teacherdata.schoolDetails[i].permissions[j].permission[k].status == 1) {
                            this.teacherdata.schoolDetails[i].permissions[j].allowNav = true;
                            break;
                        }
                    }
                }
            }
            this.authService.setSessionData('school_details', JSON.stringify(this.teacherdata.schoolDetails));
            this.authService.setSessionData('rista_data1', JSON.stringify(this.teacherdata.schoolDetails[0]));
            this.authService.setSessionData('school_id', this.teacherdata.schoolDetails[0].school_id);
            this.authService.setSessionData('school_name', this.teacherdata.schoolDetails[0].name);
            this.authService.setSessionData('teacher_type', this.teacherdata.schoolDetails[0].individual_teacher);
            this.authService.setSessionData('school_profile', this.teacherdata.schoolDetails[0].profile_url);
            this.settingList();
            this.loginService.changeHomePage(this.teacherdata.user_role);
            this.searchFunction();
            this.getTimeZone();
            if (this.teacherdata.tc_status == '0') {
                this.modalRef = this.modalService.open(this.updateContent, { backdrop: 'static' });
            }
            else {
                if (this.teacherdata.schoolDetails.length > 1) {
                    this.router.navigate(['/auth/select']);
                }
                else {
                    setTimeout(() => {
                        this.router.navigate(['/schedule/schedule-page']);
                    }, 700);
                    this.toastr.success(successData.ResponseObject.message, 'Login');
                }
            }
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }
    loginStudentSuccess(successData) {
        this.studentdata = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = this.studentdata.user_id;
            this.roleId = this.studentdata.user_role;
            this.authService.setToken(this.studentdata.user_id, this.studentdata.first_name, this.studentdata.last_name, this.studentdata.user_role, this.studentdata.Accesstoken);
            this.authService.setSessionData('status', this.studentdata.status);
            this.authService.setSessionData('default_password', this.studentdata.default_password);
            this.authService.setSessionData('email_id', this.studentdata.email_id);
            this.authService.setSessionData('mobile', this.studentdata.mobile);
            this.authService.setSessionData('birthday', this.studentdata.birthday);
            this.authService.setSessionData('profile_url', this.studentdata.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.studentdata.profile_thumb_url);
            this.authService.setSessionData('gender', this.studentdata.gender);
            this.authService.setSessionData('location', this.studentdata.location);
            this.loginService.changeHomePage(this.studentdata.user_role);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            this.authService.setSessionData('permission', JSON.stringify(this.studentdata.school_details));
            // this.loginService.changeHomePage(this.auth.getRoleId());
            this.authService.setSessionData('school_details', JSON.stringify(this.studentdata.school_details));
            this.authService.setSessionData('rista_data1', JSON.stringify(this.studentdata.school_details[0]));
            this.authService.setSessionData('school_id', this.studentdata.school_details[0].school_id);
            this.authService.setSessionData('school_profile', this.studentdata.school_details[0].profile_url);
            this.authService.setSessionData('school_name', this.studentdata.school_details[0].name);
            this.settingList();
            this.studentSearchFunction();
            setTimeout(() => {
                if (this.studentdata.tc_status == '0') {
                    this.modalRef = this.modalService.open(this.updateContent, { backdrop: 'static' });
                }
                else {
                    if (this.enrollCode == '' && this.studentdata.school_details.length > 1) {
                        this.router.navigate(['/auth/select']);
                    }
                    else {
                        if (this.enrollCode != '') {
                            this.router.navigate(['/studentlogin/enrollclass']);
                        }
                        else {
                            this.router.navigate(['/student/dashboard']);
                        }
                    }
                    this.toastr.success(successData.ResponseObject.message, 'Login');
                }
            }, 700);
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }
    loginCorporatesSuccess(successData) {
        const data = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = data.user_id;
            this.roleId = data.user_role;
            this.corporateId = data.corporate_id;
            this.authService.setToken(data.user_id, data.first_name, data.last_name, data.user_role, data.Accesstoken);
            this.authService.setSessionData('first_name', data.first_name);
            this.authService.setSessionData('last_name', data.last_name);
            this.authService.setSessionData('email_id', data.email_id);
            this.authService.setSessionData('mobile', data.mobile);
            this.authService.setSessionData('corporate_id', data.corporate_id);
            this.authService.setSessionData('corporate_code', data.corporate_code);
            this.authService.setSessionData('corporate_name', data.corporate_name);
            this.authService.setSessionData('school_profile', data.profile_url);
            this.authService.setSessionData('profile_url', data.profile_url);
            this.authService.setSessionData('resourceAccess', false);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            this.loginService.changeHomePage(data.user_role);
            this.searchFunction();
            this.schoolList();
            this.toastr.success('Logged in Successfully', 'Login');
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }
    loginGraderSuccess(successData) {
        this.gradedata = successData.ResponseObject;
        console.log(this.gradedata, 'gradedata');
        if (successData.IsSuccess) {
            this.userId = this.gradedata.user_id;
            this.roleId = this.gradedata.user_role;
            this.authService.setToken(this.gradedata.user_id, this.gradedata.first_name, this.gradedata.last_name, this.gradedata.user_role, this.gradedata.Accesstoken);
            this.authService.setSessionData('status', this.gradedata.status);
            this.authService.setSessionData('default_password', this.gradedata.default_password);
            this.authService.setSessionData('email_id', this.gradedata.email_id);
            this.authService.setSessionData('mobile', this.gradedata.mobile);
            this.authService.setSessionData('birthday', this.gradedata.birthday);
            this.authService.setSessionData('profile_url', this.gradedata.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.gradedata.profile_thumb_url);
            this.authService.setSessionData('gender', this.gradedata.gender);
            this.authService.setSessionData('location', this.gradedata.location);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            // this.authService.setSessionData('preview_type', 'no');
            this.searchFunction();
            ////Check Nav Permission////
            for (let i = 0; i < this.gradedata.schoolDetails.length; i++) {
                for (let j = 0; j < this.gradedata.schoolDetails[i].permissions.length; j++) {
                    this.gradedata.schoolDetails[i].permissions[j].allowNav = false;
                    for (let k = 0; k < this.gradedata.schoolDetails[i].permissions[j].permission.length; k++) {
                        if (this.gradedata.schoolDetails[i].permissions[j].permission[k].status == 1) {
                            this.gradedata.schoolDetails[i].permissions[j].allowNav = true;
                            break;
                        }
                    }
                }
            }
            this.authService.setSessionData('school_details', JSON.stringify(this.gradedata.schoolDetails));
            this.authService.setSessionData('rista_data1', JSON.stringify(this.gradedata.schoolDetails[0]));
            this.authService.setSessionData('school_id', this.gradedata.schoolDetails[0].school_id);
            this.authService.setSessionData('school_name', this.gradedata.schoolDetails[0].name);
            this.authService.setSessionData('teacher_type', this.gradedata.schoolDetails[0].individual_teacher);
            this.authService.setSessionData('school_profile', this.gradedata.schoolDetails[0].profile_url);
            this.loginService.changeHomePage(this.gradedata.user_role);
            this.searchFunction();
            this.loginService.changeHomePage(this.gradedata.user_role);
            this.gradedata.schoolDetails > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/student-content/list-content/old']);
            this.toastr.success(successData.ResponseObject.message);
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    schoolList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.roleId ? this.roleId : '',
            user_id: this.userId ? this.userId : '',
            corporate_id: this.corporateId ? this.corporateId : ''
        };
        this.schoolService.getSchoolList(data).subscribe((successData) => {
            this.schoolListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_schoolList');
        });
    }
    schoolListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.schoolData = successData.ResponseObject;
            this.authService.setSessionData('school_details', JSON.stringify(this.schoolData));
            this.authService.setSessionData('rista_data1', this.schoolData.length != 0 ?
                JSON.stringify(this.schoolData[this.schoolData.length - 1]) : JSON.stringify(this.schoolData));
            this.authService.setSessionData('school_id', this.schoolData.length != 0 ?
                this.schoolData[this.schoolData.length - 1]?.school_id : '');
            this.authService.setSessionData('school_profile', this.schoolData.length != 0 ?
                this.schoolData[this.schoolData.length - 1]?.profile_url : '');
            // this.authService.setSessionData('profile_url', this.schoolData.length != 0 ?
            //     this.schoolData[this.schoolData.length - 1]?.profile_url : '');
            this.authService.setSessionData('school_name', this.schoolData.length != 0 ?
                this.schoolData[this.schoolData.length - 1]?.name : '');
            this.schoolData.length > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/dashboard/default']);
            this.searchFunction();
        }
    }
    confirmtermDetails() {
        const data = {
            platform: 'web',
            role_id: this.roleId ? this.roleId : '',
            user_id: this.userId ? this.userId : '',
            status: this.checkterms ? '1' : '0',
        };
        this.loginService.tcUpdateList(data).subscribe((successData) => {
            this.getTcListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_TermLists');
        });
    }
    getTcListSuccess(successData) {
        this.modalRef.close();
        this.toastr.success('Logged in Successfully', 'Login');
        if (this.roleId == '2') {
            if (this.admindata.school_details.length > 1) {
                this.router.navigate(['/auth/select']);
            }
            else {
                this.admindata.school_details[0].allow_dashboard == '1' ? this.router.navigate(['/dashboard/default']) :
                    this.router.navigate(['/class/list-class']);
            }
        }
        else if (this.roleId == '3') {
            this.creatorData.school_details.length > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/repository/content-home']);
        }
        else if (this.roleId == '4') {
            this.teacherdata.schoolDetails.length > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/schedule/schedule-page']);
        }
        else if (this.roleId == '5') {
            if (this.enrollCode != '') {
                this.router.navigate(['/studentlogin/enrollclass']);
            }
            else {
                // this.studentdata.school_details.length > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/studentlogin/list-home']);
                this.studentdata.school_details.length > 1 ? this.router.navigate(['/auth/select']) :
                    this.router.navigate(['/student/dashboard']);
            }
        }
        else if (this.roleId == '7') {
            this.gradedata.schoolDetails.length > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/student-content/list-content/old']);
        }
    }
    searchFunction() {
        const classSearchData = [{
                curriculum_Folder: null,
                grade: [],
                subject: [],
                teacher: null,
                className: '',
                studentName: '',
                classDateStatus: '3',
                school_id: this.authService.getSessionData('school_id'),
                course_id: []
            }];
        this.authService.setSessionData(SessionConstants.classSearch, JSON.stringify(classSearchData));
        const classCurriculumData = [{
                list_type: '',
                curriculum_type: '2',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.classCurriculumSearch, JSON.stringify(classCurriculumData));
        const assignmentData = [{
                curriculum_Folder: undefined,
                teacher: undefined,
                className: '',
                assignmentDateStatus: 2,
                studentName: '',
                assignmentName: '',
                sortType: 1,
                sortButton: 'Sort by',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.assignSearch, JSON.stringify(assignmentData));
        const assessmentData = [{
                curriculum_Folder: undefined,
                teacher: undefined,
                className: '',
                assessmentDateStatus: 2,
                assessmentName: '',
                studentName: '',
                sortType: 1,
                sortButton: 'Sort by',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.assessSearch, JSON.stringify(assessmentData));
        const studentWorkData = [{
                curriculum_Folder: undefined,
                teacher: undefined,
                class: undefined,
                contentType: 2,
                studentName: '',
                contentName: '',
                date: '',
                teacherCorrectionStatus: '0',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.studentWorkSearch, JSON.stringify(studentWorkData));
        const directContentData = [{
                contentName: '',
                extact_Search: false,
                libary: '0',
                content_userid: '0',
                sortFilter: '0',
                type_id: 'list',
                grade_id: [],
                subject_id: [],
                tag_id: [],
                selectAuthored: '',
                selectDraft: '',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.directcontentSearch, JSON.stringify(directContentData));
        const contentData = [{
                contentName: '',
                extact_Search: false,
                libary: '0',
                content_userid: '0',
                sortFilter: '0',
                type_id: 'list',
                grade_id: [],
                subject_id: [],
                tag_id: [],
                selectAuthored: '',
                selectDraft: '',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.non_directcontentSearch, JSON.stringify(contentData));
    }
    studentSearchFunction() {
        const classSearchData = [{
                className: '',
                classDateStatus: '3',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.studentClassSearch, JSON.stringify(classSearchData));
        const resourceData = [{
                resourceName: '',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.studentResourceSearch, JSON.stringify(resourceData));
        const assignmentData = [{
                assignmentDateStatus: 3,
                assignmentName: '',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.studentAssignmentSearch, JSON.stringify(assignmentData));
        const assessmentData = [{
                assessmentDateStatus: 3,
                assessmentName: '',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.studentAssessmentSearch, JSON.stringify(assessmentData));
        const homeData = [{
                // Class Data //
                classDateStatus: '3',
                className: '',
                classButton: 'In Progress',
                classSortType: '0',
                classSortButton: 'Sort',
                // Assignment Data //
                assignmentDateStatus: '3',
                assignmentName: '',
                assignButton: 'In Progress',
                assignSortType: '0',
                assignSortButton: 'Sort',
                // Assessment Data //
                assessmentDateStatus: '3',
                assessmentName: '',
                assessButton: 'In Progress',
                assessSortButton: 'Sort',
                assessSortType: '0',
                school_id: this.authService.getSessionData('school_id')
            }];
        this.authService.setSessionData(SessionConstants.studentHomeSearch, JSON.stringify(homeData));
    }
    setCourseSearchValue() {
        const threeLevelFilter = ['contentListSearchValue', 'courseDetailsSearchValue'];
        const singleLevelInputFilter = ['courseCategory', 'courseCreator', 'contentCategory'];
        const singleLevelFilter = ['courseSeo', 'courseFaq'];
        threeLevelFilter.forEach((items) => {
            this.authService.setSessionData(items, JSON.stringify({
                category_id: [],
                status: [],
                searchValue: ''
            }));
        });
        const inputFilterSearch = {};
        singleLevelInputFilter.forEach((items1) => {
            inputFilterSearch[items1 + 'SearchValue'] = { searchValue: '' };
        });
        singleLevelFilter.forEach((items2) => {
            inputFilterSearch[items2 + 'SearchValue'] = { course_id: null };
        });
        inputFilterSearch['contentSeoSearchValue'] = { content_id: null };
        console.log(inputFilterSearch, 'input');
        this.authService.setSessionData('commonInputSearchValue', JSON.stringify(inputFilterSearch));
        this.authService.setSessionData('courseScheduleSearchValue', JSON.stringify({ course_id: '', searchValue: '' }));
    }
    goToRegister(value) {
        this.type = value;
        this.router.navigate(['/auth/login/' + '' + value]);
    }
    checkPasswords() {
        const pass = this.registerForm.controls.password.value;
        const confirmPass = this.registerForm.controls.confirmpassword.value;
        this.passwordValid = pass !== confirmPass;
        return this.passwordValid;
    }
    submitRegisterForm() {
        if (!this.registerForm.valid) {
            this.validation.validateAllFormFields(this.registerForm);
            this.toastr.error('Please fill all mandatory field');
        }
        else {
            if (this.checkPasswords()) {
                this.toastr.error('Password and Confirm password should be same');
            }
            else {
                const data = {
                    platform: 'web',
                    class_code: this.enrollCode,
                    email_id: this.registerForm.controls.email_id.value,
                    password: this.registerForm.controls.password.value,
                    first_name: this.registerForm.controls.first_name.value,
                    last_name: this.registerForm.controls.last_name.value,
                    gender: this.registerForm.controls.gender.value,
                    role_id: '5',
                    mobile: [this.registerForm.controls.mobile.value],
                    grade_id: this.registerForm.controls.grade_id.value ? this.registerForm.controls.grade_id.value : ''
                };
                console.log(data, 'RegisterData');
                this.student.enrollRegisterClass(data).subscribe((successData) => {
                    // this.enrollRegisterClassSuccess(successData);
                    if (successData.IsSuccess) {
                        localStorage.setItem('studentClassCode', successData.ResponseObject.class_code);
                    }
                    this.loginStudentSuccess(successData);
                }, (error) => {
                    this.enrollRegisterClassFailure(error);
                });
            }
        }
    }
    // enrollRegisterClassSuccess(successData) {
    //     if (successData.IsSuccess) {
    //         this.registerResponse = successData.ResponseObject;
    //         if (successData.IsSuccess) {
    //             this.userId = this.registerResponse.user_id;
    //             this.roleId = this.registerResponse.user_role;
    //             this.authService.setToken(this.registerResponse.user_id, this.registerResponse.first_name, this.registerResponse.last_name, this.registerResponse.user_role, this.registerResponse.Accesstoken);
    //             this.authService.setSessionData('status', this.registerResponse.status);
    //             this.authService.setSessionData('default_password', this.registerResponse.default_password);
    //             this.authService.setSessionData('email_id', this.registerResponse.email_id);
    //             this.authService.setSessionData('mobile', this.registerResponse.mobile);
    //             this.authService.setSessionData('birthday', this.registerResponse.birthday);
    //             this.authService.setSessionData('profile_url', this.registerResponse.profile_url);
    //             this.authService.setSessionData('profile_thumb_url', this.registerResponse.profile_thumb_url);
    //             this.authService.setSessionData('gender', this.registerResponse.gender);
    //             this.authService.setSessionData('location', this.registerResponse.location);
    //             this.loginService.changeHomePage(this.registerResponse.user_role);
    //             this.behavior.changeDateFormat('MM/dd/yyyy');
    //             this.setRemeberMe(this.remember);
    //             this.authService.setSessionData('permission', JSON.stringify(this.registerResponse.school_details));
    //             // this.loginService.changeHomePage(this.auth.getRoleId());
    //             this.authService.setSessionData('school_details', JSON.stringify(this.registerResponse.school_details));
    //             this.authService.setSessionData('rista_data1', JSON.stringify(this.registerResponse.school_details[0]));
    //             this.authService.setSessionData('school_id', this.registerResponse.school_details[0].school_id);
    //             this.authService.setSessionData('school_profile', this.registerResponse.school_details[0].profile_url);
    //             this.authService.setSessionData('school_name', this.registerResponse.school_details[0].name);
    //             this.authService.setSessionData('teacher_id', this.registerResponse.school_details[0].school_idno);
    //             this.studentSearchFunction();
    //             localStorage.setItem('studentClassCode', this.registerResponse.class_code);
    //             this.settingList();
    //             setTimeout(() => {
    //                 if (this.registerResponse.tc_status == '0') {
    //                     this.modalRef = this.modalService.open(this.updateContent, {backdrop: 'static'});
    //                 }
    //                 if (this.registerResponse.class_code != '') {
    //                     this.router.navigate(['/studentlogin/enrollclass']);
    //                 } else {
    //                     if (this.registerResponse.school_details > 1) {
    //                         this.router.navigate(['/auth/select']);
    //                     } else {
    //                         this.router.navigate(['/student/dashboard']);
    //                     }
    //                     this.toastr.success(successData.ResponseObject.message, 'Login');
    //                 }
    //             }, 700);
    //         } else {
    //             this.toastr.error(successData.ErrorObject, 'Login');
    //         }
    //         this.formresetValue();
    //     } else {
    //         this.toastr.error(successData.ErrorObject, '');
    //     }
    // }
    enrollRegisterClassFailure(error) {
        console.log(error, 'error');
    }
    formresetValue() {
        this.registerForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            gender: ['', Validators.required],
            mobile: '',
            grade_id: [null],
            email_id: ['', Validators.required],
            password: ['', Validators.required],
            confirmpassword: ['', Validators.required]
        });
    }
    static { this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.LoginService), i0.ɵɵdirectiveInject(i4.EnvironmentService), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i6.CommonService), i0.ɵɵdirectiveInject(i7.DeviceDetectorService), i0.ɵɵdirectiveInject(i8.DomSanitizer), i0.ɵɵdirectiveInject(i9.StudentService), i0.ɵɵdirectiveInject(i10.AuthService), i0.ɵɵdirectiveInject(i11.ConfigurationService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i12.ToastrService), i0.ɵɵdirectiveInject(i13.ValidationService), i0.ɵɵdirectiveInject(i14.NgbModal), i0.ɵɵdirectiveInject(i15.SchoolService), i0.ɵɵdirectiveInject(i16.NewsubjectService), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.updateContent = _t.first);
        } }, hostBindings: function LoginComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function LoginComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, i0.ɵɵresolveWindow);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 9, vars: 5, consts: [["tcupdate", ""], ["studentUserNameFocus", ""], ["id", "pre-loader", 4, "ngIf"], [1, "auth-shell"], [1, "container", "py-5", "py-lg-6"], [1, "row", "g-4", "align-items-center", "justify-content-center"], [1, "row", "justify-content-center", "g-4"], ["class", "container-fluid", 4, "ngIf"], ["id", "pre-loader"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", "Loading"], [1, "col-lg-5", "d-none", "d-lg-block"], [1, "auth-hero", "card", "border-0", "shadow-lg", "h-100"], [1, "card-body", "p-5", "d-flex", "flex-column", "justify-content-between"], [1, "badge", "rounded-pill", "text-bg-light", "mb-3"], [1, "fw-bold", "text-neutral-900"], [1, "text-neutral-600", "mb-4"], [1, "list-unstyled", "d-grid", "gap-3"], [1, "d-flex", "align-items-start", "gap-2"], [1, "bi", "bi-check-circle-fill", "text-success"], [1, "text-center", "mt-4"], [1, "img-fluid", "auth-hero__brand", 3, "src", "alt"], [1, "col-12", "col-lg-5"], [1, "card", "shadow-xl", "border-0"], [1, "card-body", "p-4", "p-md-5"], [1, "h3", "fw-bold", "text-neutral-900", "mb-1"], [1, "d-grid", "gap-3", "mb-4"], ["id", "googleSignInButton", "type", "button", 1, "btn", "btn-outline-primary", "btn-lg", "w-100"], ["id", "g_id_onload", "data-client_id", "854159816646-f2oidr960elk0akcu27dddb9dveoj9r3.apps.googleusercontent.com", "data-context", "use", "data-ux_mode", "popup", "data-auto_prompt", "false"], ["data-type", "standard", "data-shape", "rectangular", "data-theme", "outline", "data-text", "signin_with", "data-size", "large", "data-logo_alignment", "left", 1, "g_id_signin"], [1, "divider", "text-center", "text-neutral-500", "my-4"], [1, "divider__text"], ["novalidate", "", 1, "d-grid", "gap-3", 3, "formGroup"], [1, "form-floating"], ["type", "email", "id", "loginEmail", "placeholder", "name@company.com", "formControlName", "userName", "autocomplete", "username", 1, "form-control"], ["for", "loginEmail"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-floating", "position-relative"], ["id", "loginPassword", "placeholder", "Password", "formControlName", "password", "autocomplete", "current-password", 1, "form-control", "pe-5", 3, "type"], ["for", "loginPassword"], ["type", "button", "aria-label", "Toggle password visibility", 1, "btn", "btn-icon", "btn-link", "password-toggle", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "form-check"], ["type", "checkbox", "id", "rememberMe", "formControlName", "checkbox", 1, "form-check-input", 3, "change"], ["for", "rememberMe", 1, "form-check-label"], [1, "btn", "btn-link", "p-0", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "w-100", 3, "click", "disabled"], [1, "mt-4", "text-neutral-500", "small"], ["href", "https://edquill.com/terms_and_conditions.html", "target", "_blank", 1, "text-decoration-underline"], ["href", "https://edquill.com/privacy_policy.html", "target", "_blank", 1, "text-decoration-underline"], [1, "invalid-feedback"], [1, "h3", "fw-bold", "text-neutral-900", "mb-3"], ["id", "googleRegisterButton", "type", "button", 1, "btn", "btn-outline-primary", "btn-lg", "w-100"], [1, "d-grid", "gap-3", 3, "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], ["id", "studentFirstName", "type", "text", "placeholder", "First name", "formControlName", "first_name", 1, "form-control"], ["for", "studentFirstName"], ["id", "studentLastName", "type", "text", "placeholder", "Last name", "formControlName", "last_name", 1, "form-control"], ["for", "studentLastName"], ["id", "studentGender", "formControlName", "gender", 1, "form-select"], ["value", "", "disabled", ""], ["value", "male"], ["value", "female"], ["value", "n/a"], ["for", "studentGender"], ["id", "studentEmail", "type", "email", "placeholder", "Email", "formControlName", "email_id", "autocomplete", "off", 1, "form-control"], ["for", "studentEmail"], ["id", "studentPhone", "type", "tel", "maxlength", "10", "placeholder", "Mobile number", "formControlName", "mobile", 1, "form-control", 3, "keypress"], ["for", "studentPhone"], [1, "form-text"], [1, "form-section", "border", "rounded", "p-3", "bg-white"], [1, "h6", "fw-semibold", "mb-3"], ["bindLabel", "class_name", "bindValue", "class_code", "placeholder", "Select a class code", "formControlName", "class_code", 1, "login-select", 3, "items"], [1, "mt-4", "text-center"], [1, "btn", "btn-link", 3, "routerLink"], [1, "bi", "bi-arrow-left", "me-1"], [1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-5", "loginWith", "mt-2"], [1, "card"], [1, "card-body"], [1, "mb-3"], [1, "form-horizontal", "auth-form1"], [3, "formGroup"], [1, "form-group"], ["autofocus", "", "required", "true", "name", "login[username]", "type", "email", "placeholder", "User Name", "formControlName", "userName", "id", "exampleInputEmail21", "autocomplete", "off", 1, "form-control", 3, "keypress"], ["class", "error", 4, "ngIf"], [1, "input-group"], ["required", "true", "name", "login[password]", "type", "text", "formControlName", "password", "placeholder", "Password", "aria-label", "Recipient's username", "aria-describedby", "basic-addon1", "autocomplete", "off", 1, "form-control", 3, "keypress", "type"], [1, "input-group-append"], ["id", "basic-addon41", 1, "input-group-text"], ["aria-hidden", "true", 3, "click"], [1, "form-terms"], [1, "custom-control", "custom-checkbox", "mr-sm-2"], ["type", "checkbox", "id", "customControlAutosizing44", "formControlName", "checkbox3", 1, "custom-control-input", 3, "click"], ["for", "customControlAutosizing44", 1, "custom-control-label"], [1, "btn", "btn-default", "forgot-pass", 3, "routerLink"], [1, "form-button", "d-flex", "justify-content-between", "w-100"], [1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "ml-2", "fa", "fa-long-arrow-right", "fa-1x"], [1, "col-12", "col-md-5", "mt-2", "d-none", "d-md-block"], ["src", "assets/images/student-login2.png", "alt", "", 2, "width", "550px", "height", "500px"], [1, "error"], [1, "card-body", "google-sign", "p-4"], [1, "login-text", "mb-4"], [1, "d-flex", "justify-content-center", "google-sign"], [1, "col-6"], [1, "tp-login-mail", "text-center", "my-3"], ["autofocus", "", "formControlName", "first_name", "id", "validationCustom0", "type", "text", "placeholder", "First Name *", "required", "true", 1, "form-control"], ["formControlName", "last_name", "id", "validationCustom1", "type", "text", "placeholder", "Last Name *", "required", "true", 1, "form-control"], ["formControlName", "gender", "id", "validationCustom07", 1, "form-control"], ["value", "", "selected", ""], ["formControlName", "email_id", "id", "validationCustom5", "type", "email", "placeholder", "Email *", "autocomplete", "off", "required", "true", 1, "form-control"], ["formControlName", "mobile", "id", "validationCustom10", "type", "text", "maxlength", "10", "placeholder", "Mobile Number", 1, "form-control", 3, "keypress"], ["bindLabel", "grade_name", "bindValue", "grade_id", "formControlName", "grade_id", "placeholder", "Select Grade", "typeToSearchText", "", 1, "login-select", 3, "items"], ["type", "text", "formControlName", "password", "placeholder", "Password *", "autocomplete", "new-password", 1, "form-control", 3, "type"], [1, "input-group-append", "cursor", 3, "click"], ["id", "basic-addon7", 1, "input-group-text"], ["aria-hidden", "true", 1, "color-primary"], [1, "d-flex"], ["required", "true", "type", "text", "formControlName", "confirmpassword", "placeholder", "Confirm Password *", "aria-label", "Recipient's username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "type"], ["id", "basic-addon10", 1, "input-group-text"], ["class", "d-flex", 4, "ngIf"], [1, "form-button", "d-flex", "justify-content-end"], [1, "btn", "w-100", "btn-primary", 3, "click"], [1, "error", "help-block"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [1, "row"], [1, "col-12"], ["type", "checkbox", 1, "form-check-input", "text-center", 3, "ngModelChange", "ngModel"], ["href", "https://edquill.com/terms_and_conditions.html", "target", "_blank"], [2, "font-style", "italic", "text-decoration", "underline"], ["href", "https://edquill.com/privacy_policy.html", "target", "_blank", 2, "font-style", "italic", "text-decoration", "underline"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LoginComponent_div_0_Template, 2, 0, "div", 2);
            i0.ɵɵelementStart(1, "section", 3)(2, "div", 4);
            i0.ɵɵtemplate(3, LoginComponent_Conditional_3_Template, 71, 18, "div", 5)(4, LoginComponent_Conditional_4_Template, 63, 9, "div", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(5, LoginComponent_section_5_Template, 35, 7, "section", 7)(6, LoginComponent_section_6_Template, 62, 16, "section", 7)(7, LoginComponent_ng_template_7_Template, 20, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.commondata.loader.value);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(!ctx.type ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.type == "studentRegister" || ctx.type == "googleStudentRegister" ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "student");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "studentRegister" || ctx.type == "googleStudentRegister");
        } }, dependencies: [CommonModule, i17.NgIf, FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MaxLengthValidator, i1.NgModel, ReactiveFormsModule, i1.FormGroupDirective, i1.FormControlName, RouterModule, i2.RouterLink, NgbModalModule, NgSelectModule, i18.NgSelectComponent], styles: [".auth-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: radial-gradient(circle at top left, rgba(143, 0, 138, 0.12), transparent 45%),\n    radial-gradient(circle at bottom right, rgba(19, 201, 202, 0.1), transparent 40%),\n    #f8f9fb;\n  display: flex;\n  align-items: center;\n}\n\n.auth-hero[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  background:\n    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.65), transparent 60%),\n    linear-gradient(155deg, #f6e9ff 0%, #e6d9ff 45%, #dfe7ff 100%);\n  color: var(--neutral-800);\n  min-height: 520px;\n\n  .badge {\n    background: rgba(143, 0, 138, 0.12);\n    color: var(--color-primary);\n  }\n\n  h2 {\n    color: var(--neutral-900);\n  }\n\n  li {\n    font-size: 0.95rem;\n    color: var(--neutral-700);\n  }\n\n  .auth-hero__brand {\n    max-width: 220px;\n    filter: drop-shadow(0 12px 24px rgba(143, 0, 138, 0.18));\n  }\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n}\n\n.password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: var(--spacing-3);\n  transform: translateY(-50%);\n  color: var(--neutral-500);\n}\n\n.divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-3);\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n\n  &::before,\n  &::after {\n    content: '';\n    flex: 1 1 auto;\n    height: 1px;\n    background: var(--neutral-200);\n  }\n\n  &__text {\n    background: #fff;\n    padding: 0 var(--spacing-3);\n    white-space: nowrap;\n  }\n}\n\n.form-control.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.form-floating[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:not(:placeholder-shown)    ~ label[_ngcontent-%COMP%], \n.form-floating[_ngcontent-%COMP%]    > .form-select[_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n@media (max-width: 767.98px) {\n  .auth-shell[_ngcontent-%COMP%] {\n    padding: var(--spacing-4) var(--spacing-3);\n  }\n\n  .auth-hero[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NgbModalModule, NgSelectModule], template: "<div id=\"pre-loader\" *ngIf=\"commondata.loader.value\">\n  <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"Loading\" />\n</div>\n\n<section class=\"auth-shell\">\n  <div class=\"container py-5 py-lg-6\">\n    @if (!type) {\n      <div class=\"row g-4 align-items-center justify-content-center\">\n        <div class=\"col-lg-5 d-none d-lg-block\">\n          <article class=\"auth-hero card border-0 shadow-lg h-100\">\n            <div class=\"card-body p-5 d-flex flex-column justify-content-between\">\n              <div>\n                <span class=\"badge rounded-pill text-bg-light mb-3\">Welcome back</span>\n                <h2 class=\"fw-bold text-neutral-900\">Keep your institution moving forward.</h2>\n                <p class=\"text-neutral-600 mb-4\">\n                  Access the EdQuill enterprise platform to manage classes, content, assessments and communication at scale.\n                </p>\n                <ul class=\"list-unstyled d-grid gap-3\">\n                  <li class=\"d-flex align-items-start gap-2\">\n                    <i class=\"bi bi-check-circle-fill text-success\"></i>\n                    <span>Unified dashboard with performance analytics for every role.</span>\n                  </li>\n                  <li class=\"d-flex align-items-start gap-2\">\n                    <i class=\"bi bi-check-circle-fill text-success\"></i>\n                    <span>Secure single sign-on with Google or enterprise credentials.</span>\n                  </li>\n                  <li class=\"d-flex align-items-start gap-2\">\n                    <i class=\"bi bi-check-circle-fill text-success\"></i>\n                    <span>Real-time collaboration tools for teachers, graders and learners.</span>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"text-center mt-4\">\n                <img [src]=\"'assets/images/' + logo\" class=\"img-fluid auth-hero__brand\" alt=\"{{ siteName }} brand\" />\n              </div>\n            </div>\n          </article>\n        </div>\n\n        <div class=\"col-12 col-lg-5\">\n          <div class=\"card shadow-xl border-0\">\n            <div class=\"card-body p-4 p-md-5\">\n              <h1 class=\"h3 fw-bold text-neutral-900 mb-1\">Sign in</h1>\n              <p class=\"text-neutral-600 mb-4\">Access your {{ siteName }} workspace with your enterprise credentials.</p>\n\n              <div class=\"d-grid gap-3 mb-4\">\n                <button id=\"googleSignInButton\" class=\"btn btn-outline-primary btn-lg w-100\" type=\"button\">\n                  <div id=\"g_id_onload\"\n                       data-client_id=\"854159816646-f2oidr960elk0akcu27dddb9dveoj9r3.apps.googleusercontent.com\"\n                       data-context=\"use\"\n                       data-ux_mode=\"popup\"\n                       [attr.data-login_uri]=\"backEndURLSignIn\"\n                       data-auto_prompt=\"false\"></div>\n                  <div class=\"g_id_signin\"\n                       data-type=\"standard\"\n                       data-shape=\"rectangular\"\n                       data-theme=\"outline\"\n                       data-text=\"signin_with\"\n                       data-size=\"large\"\n                       data-logo_alignment=\"left\"></div>\n                </button>\n              </div>\n\n              <div class=\"divider text-center text-neutral-500 my-4\">\n                <span class=\"divider__text\">Or continue with email</span>\n              </div>\n\n              <form [formGroup]=\"loginForm\" novalidate class=\"d-grid gap-3\">\n                <div class=\"form-floating\">\n                  <input\n                    type=\"email\"\n                    class=\"form-control\"\n                    id=\"loginEmail\"\n                    placeholder=\"name@company.com\"\n                    formControlName=\"userName\"\n                    autocomplete=\"username\"\n                    [class.is-invalid]=\"loginForm.get('userName')?.invalid && (loginForm.get('userName')?.dirty || loginForm.get('userName')?.touched)\"\n                  />\n                  <label for=\"loginEmail\">Work email</label>\n                  <div class=\"invalid-feedback\" *ngIf=\"loginForm.get('userName')?.errors?.['required']\">\n                    Your email address is required.\n                  </div>\n                  <div class=\"invalid-feedback\" *ngIf=\"loginForm.get('userName')?.errors?.['email']\">\n                    Enter a valid email address.\n                  </div>\n                </div>\n\n                <div class=\"form-floating position-relative\">\n                  <input\n                    class=\"form-control pe-5\"\n                    [type]=\"conps ? 'password' : 'text'\"\n                    id=\"loginPassword\"\n                    placeholder=\"Password\"\n                    formControlName=\"password\"\n                    autocomplete=\"current-password\"\n                    [class.is-invalid]=\"loginForm.get('password')?.invalid && (loginForm.get('password')?.dirty || loginForm.get('password')?.touched)\"\n                  />\n                  <label for=\"loginPassword\">Password</label>\n                  <button type=\"button\" class=\"btn btn-icon btn-link password-toggle\" (click)=\"conps = !conps\" aria-label=\"Toggle password visibility\">\n                    <i [class]=\"conps ? 'bi bi-eye-slash' : 'bi bi-eye'\"></i>\n                  </button>\n                  <div class=\"invalid-feedback\" *ngIf=\"loginForm.get('password')?.errors?.['required']\">\n                    A password is required to sign in.\n                  </div>\n                </div>\n\n                <div class=\"d-flex align-items-center justify-content-between\">\n                  <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"rememberMe\" formControlName=\"checkbox\" (change)=\"setRemeberMe($event.target.checked)\" />\n                    <label class=\"form-check-label\" for=\"rememberMe\">Remember me</label>\n                  </div>\n                  <a class=\"btn btn-link p-0\" [routerLink]=\"'/forgotPassword/content'\">Forgot password?</a>\n                </div>\n\n                <button class=\"btn btn-primary btn-lg w-100\" type=\"submit\" (click)=\"login()\" [disabled]=\"loginForm.invalid\">\n                  Sign in\n                </button>\n              </form>\n\n              <div class=\"mt-4 text-neutral-500 small\">\n                By signing in you agree to the EdQuill\n                <a class=\"text-decoration-underline\" href=\"https://edquill.com/terms_and_conditions.html\" target=\"_blank\">Terms</a>\n                and\n                <a class=\"text-decoration-underline\" href=\"https://edquill.com/privacy_policy.html\" target=\"_blank\">Privacy Policy</a>.\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    }\n\n    @if (type == 'studentRegister' || type == 'googleStudentRegister') {\n      <div class=\"row justify-content-center g-4\">\n        <div class=\"col-12 col-lg-5\">\n          <div class=\"card shadow-xl border-0\">\n            <div class=\"card-body p-4 p-md-5\">\n              <h2 class=\"h3 fw-bold text-neutral-900 mb-3\">Student registration</h2>\n              <p class=\"text-neutral-600 mb-4\">Connect with your learning workspace using your class code or Google account.</p>\n\n              <div class=\"d-grid gap-3 mb-4\">\n                <button id=\"googleRegisterButton\" class=\"btn btn-outline-primary btn-lg w-100\" type=\"button\">\n                  <div id=\"g_id_onload\"\n                       data-client_id=\"854159816646-f2oidr960elk0akcu27dddb9dveoj9r3.apps.googleusercontent.com\"\n                       data-context=\"use\"\n                       data-ux_mode=\"popup\"\n                       [attr.data-login_uri]=\"backEndURLRegisterSignIn\"\n                       data-auto_prompt=\"false\"></div>\n\n                  <div class=\"g_id_signin\"\n                       data-type=\"standard\"\n                       data-shape=\"rectangular\"\n                       data-theme=\"outline\"\n                       data-text=\"signin_with\"\n                       data-size=\"large\"\n                       data-logo_alignment=\"left\"></div>\n                </button>\n              </div>\n\n              <div class=\"divider text-center text-neutral-500 my-4\">\n                <span class=\"divider__text\">Or complete the form below</span>\n              </div>\n\n              <form [formGroup]=\"registerForm\" class=\"d-grid gap-3\">\n                <div class=\"row g-3\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-floating\">\n                      <input class=\"form-control\" id=\"studentFirstName\" type=\"text\" placeholder=\"First name\" formControlName=\"first_name\" />\n                      <label for=\"studentFirstName\">First name *</label>\n                      <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('first_name')?.invalid && registerForm.get('first_name')?.touched\">\n                        First name is required.\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-floating\">\n                      <input class=\"form-control\" id=\"studentLastName\" type=\"text\" placeholder=\"Last name\" formControlName=\"last_name\" />\n                      <label for=\"studentLastName\">Last name *</label>\n                      <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('last_name')?.invalid && registerForm.get('last_name')?.touched\">\n                        Last name is required.\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"form-floating\">\n                  <select class=\"form-select\" id=\"studentGender\" formControlName=\"gender\">\n                    <option value=\"\" disabled>Select an option</option>\n                    <option value=\"male\">Male</option>\n                    <option value=\"female\">Female</option>\n                    <option value=\"n/a\">Prefer not to disclose</option>\n                  </select>\n                  <label for=\"studentGender\">Gender *</label>\n                  <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('gender')?.invalid && registerForm.get('gender')?.touched\">\n                    Gender selection is required.\n                  </div>\n                </div>\n\n                <div class=\"form-floating\">\n                  <input class=\"form-control\" id=\"studentEmail\" type=\"email\" placeholder=\"Email\" formControlName=\"email_id\" autocomplete=\"off\" />\n                  <label for=\"studentEmail\">Email address *</label>\n                  <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('email_id')?.invalid && registerForm.get('email_id')?.touched\">\n                    A valid email address is required.\n                  </div>\n                </div>\n\n                <div class=\"form-floating\">\n                  <input class=\"form-control\" id=\"studentPhone\" type=\"tel\" maxlength=\"10\" placeholder=\"Mobile number\" formControlName=\"mobile\" (keypress)=\"numberValidate($event)\" />\n                  <label for=\"studentPhone\">Mobile number</label>\n                  <small class=\"form-text\">Used for class notifications and reminders</small>\n                </div>\n\n                <div class=\"form-section border rounded p-3 bg-white\">\n                  <h5 class=\"h6 fw-semibold mb-3\">Choose your class</h5>\n                  <ng-select\n                    class=\"login-select\"\n                    [items]=\"gradeList\"\n                    bindLabel=\"class_name\"\n                    bindValue=\"class_code\"\n                    placeholder=\"Select a class code\"\n                    formControlName=\"class_code\"\n                  ></ng-select>\n                </div>\n\n                <button class=\"btn btn-primary btn-lg w-100\" type=\"submit\" (click)=\"submitRegisterForm()\" [disabled]=\"registerForm.invalid\">\n                  Complete registration\n                </button>\n              </form>\n\n              <div class=\"mt-4 text-center\">\n                <a class=\"btn btn-link\" [routerLink]=\"'/auth/login'\">\n                  <i class=\"bi bi-arrow-left me-1\"></i>Back to sign in\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    }\n  </div>\n</section>\n        <section class=\"container-fluid\" *ngIf=\"type == 'student'\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-12 col-md-5 loginWith mt-2\">\n                    <h2>Student</h2>\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h3 class=\"mb-3\">Login</h3>\n                            <div class=\"form-horizontal auth-form1\">\n                                <form [formGroup]=\"studentForm\">\n                                    <div class=\"form-group\">\n                                        <input #studentUserNameFocus (keypress)=\"enterKey($event)\" autofocus required=\"true\" name=\"login[username]\" type=\"email\"\n                                               class=\"form-control\" placeholder=\"User Name\" formControlName=\"userName\"\n                                               id=\"exampleInputEmail21\" autocomplete=\"off\">\n                                        <em class=\"error\" *ngIf=\"!studentForm.get('userName').valid && (studentForm.get('userName').dirty || studentForm.get('userName').touched)\">User name is required</em>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <div class=\"input-group\">\n                                            <input (keypress)=\"enterKey($event)\" required=\"true\"  name=\"login[password]\" type=\"text\" formControlName=\"password\"\n                                                   class=\"form-control\" placeholder=\"Password\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon1\" autocomplete=\"off\" [type]=\"conps ? 'password' : 'text'\">\n                                            <div class=\"input-group-append\">\n                                        <span class=\"input-group-text\" id=\"basic-addon41\">\n                                            <i [class]=\"conps ? 'fa fa-eye-slash' : 'fa fa-eye'\" aria-hidden=\"true\" (click)=\"conps = !conps\"></i>\n                                        </span>\n                                            </div>\n                                        </div>\n                                        <em class=\"error\" *ngIf=\"!studentForm.get('password').valid && (studentForm.get('password').dirty || studentForm.get('password').touched)\">Password is required</em>\n                                    </div>\n                                    <div class=\"form-terms\">\n                                        <div class=\"custom-control custom-checkbox mr-sm-2\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\"\n                                                   id=\"customControlAutosizing44\" (click)=\"rememberList($event, '4')\" formControlName=\"checkbox3\">\n                                            <label class=\"custom-control-label\"\n                                                   for=\"customControlAutosizing44\">Remember me</label>\n                                            <a [routerLink]=\"'/forgotPassword/student'\" class=\"btn btn-default forgot-pass\">Forgot password</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-button d-flex justify-content-between w-100\">\n                                        <button (click)=\"login()\"  class=\"btn btn-primary\">Login<i class=\"ml-2 fa fa-long-arrow-right fa-1x\" aria-hidden=\"true\"></i></button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-5 mt-2 d-none d-md-block\">\n                    <img src=\"assets/images/student-login2.png\" style=\"width: 550px; height: 500px\" alt=\"\">\n                </div>\n            </div>\n        </section>\n        <section class=\"container-fluid\" *ngIf=\"type == 'studentRegister' || type == 'googleStudentRegister'\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-12 col-md-5 loginWith mt-2\">\n                    <div class=\"card\">\n                        <div class=\"card-body google-sign p-4\">\n\n                            <h4 class=\"login-text mb-4\">Student Register</h4>\n\n                            <div class=\"d-flex justify-content-center google-sign\">\n                                <div class=\"col-6\">\n                                    <div id=\"g_id_onload\"\n                                         data-client_id=\"854159816646-f2oidr960elk0akcu27dddb9dveoj9r3.apps.googleusercontent.com\"\n                                         data-context=\"use\"\n                                         data-ux_mode=\"popup\"\n                                         [attr.data-login_uri]=\"backEndURLRegisterSignIn\"\n                                         data-auto_prompt=\"false\">\n                                    </div>\n\n                                    <div class=\"g_id_signin\"\n                                         data-type=\"standard\"\n                                         data-shape=\"rectangular\"\n                                         data-theme=\"outline\"\n                                         data-text=\"signin_with\"\n                                         data-size=\"large\"\n                                         data-logo_alignment=\"left\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"tp-login-mail text-center my-3\"><p>or Sign in with Email</p></div>\n\n                            <div class=\"form-horizontal auth-form1\">\n                                <form [formGroup]=\"registerForm\">\n                                    <div class=\"form-group\">\n                                        <input class=\"form-control\" autofocus formControlName=\"first_name\" id=\"validationCustom0\" type=\"text\" placeholder=\"First Name *\" required=\"true\">\n                                        <em class=\"error\" *ngIf=\"!registerForm.get('first_name').valid && (registerForm.get('first_name').dirty || registerForm.get('first_name').touched)\">First name is required</em>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input class=\"form-control\" formControlName=\"last_name\" id=\"validationCustom1\" type=\"text\" placeholder=\"Last Name *\" required=\"true\">\n                                        <em class=\"error\" *ngIf=\"!registerForm.get('last_name').valid && (registerForm.get('last_name').dirty || registerForm.get('last_name').touched)\">Last name is required</em>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <select class=\"form-control\" formControlName=\"gender\" id=\"validationCustom07\">\n                                                <option value=\"\" selected>Select Gender *</option>\n                                                <option value=\"male\">Male</option>\n                                                <option value=\"female\">Female</option>\n                                                <option value=\"n/a\">Do not want to disclose</option>\n                                        </select>\n                                        <em class=\"error\" *ngIf=\"!registerForm.get('gender').valid && (registerForm.get('gender').dirty || registerForm.get('gender').touched)\">Gender is required</em>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input class=\"form-control\" formControlName=\"email_id\" id=\"validationCustom5\"\n                                               type=\"email\" placeholder=\"Email *\" autocomplete=\"off\" required=\"true\">\n                                        <em class=\"error\"\n                                            *ngIf=\"!registerForm.get('email_id').valid && (registerForm.get('email_id').dirty || registerForm.get('email_id').touched)\">Email\n                                            is required</em>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input class=\"form-control\" formControlName=\"mobile\" id=\"validationCustom10\" type=\"text\" maxlength=\"10\" placeholder=\"Mobile Number\" (keypress)=\"numberValidate($event)\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <ng-select class=\"login-select\"\n                                                    [items]=\"gradeList\"\n                                                    bindLabel=\"grade_name\"\n                                                    bindValue=\"grade_id\"\n                                                    formControlName=\"grade_id\"\n                                                    placeholder=\"Select Grade\"\n                                                    typeToSearchText=\"\"\n                                        >\n                                        </ng-select>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <div class=\"input-group\">\n                                            <input type=\"text\" formControlName=\"password\" class=\"form-control\"\n                                                   placeholder=\"Password *\" autocomplete=\"new-password\"\n                                                   [type]=\"conps ? 'password' : 'text'\">\n                                            <div class=\"input-group-append cursor\" (click)=\"conps = !conps\">\n                                                <span class=\"input-group-text\" id=\"basic-addon7\">\n                                                    <i class=\"color-primary\" [class]=\"conps ? 'fa fa-eye-slash' : 'fa fa-eye'\" aria-hidden=\"true\"></i>\n                                                </span>\n                                            </div>\n                                        </div>\n                                        <div class=\"d-flex\">\n                                            <em class=\"error\" *ngIf=\"!registerForm.get('password').valid && (registerForm.get('password').dirty || registerForm.get('password').touched)\">Password is required</em>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <div class=\"input-group\">\n                                            <input required=\"true\" type=\"text\" formControlName=\"confirmpassword\"\n                                                   class=\"form-control\" placeholder=\"Confirm Password *\"\n                                                   aria-label=\"Recipient's username\" aria-describedby=\"basic-addon1\"\n                                                   [type]=\"conps1 ? 'password' : 'text'\">\n                                            <div class=\"input-group-append cursor\" (click)=\"conps1 = !conps1\">\n                                                <span class=\"input-group-text\" id=\"basic-addon10\">\n                                                    <i class=\"color-primary\" [class]=\"conps1 ? 'fa fa-eye-slash' : 'fa fa-eye'\"\n                                                       aria-hidden=\"true\" ></i>\n                                                </span>\n                                            </div>\n                                        </div>\n                                        <em class=\"error\" *ngIf=\"!registerForm.get('confirmpassword').valid &&\n                                        (registerForm.get('confirmpassword').dirty || registerForm.get('confirmpassword').touched)\">Confirm Password is required</em>\n                                        <div class=\"d-flex\" *ngIf=\"checkPasswords()\">\n                                            <em class=\"error help-block\">Enter same password as above</em>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-button d-flex justify-content-end\">\n                                        <button class=\"btn w-100 btn-primary\" (click)=\"submitRegisterForm()\">Submit<i class=\"ml-2 fa fa-long-arrow-right fa-1x\" aria-hidden=\"true\"></i></button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-5 mt-2 d-none d-md-block\">\n                    <img src=\"assets/images/student-login2.png\" style=\"width: 550px; height: 500px\" alt=\"\">\n                </div>\n            </div>\n        </section>\n<ng-template #tcupdate let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Terms & Conditions and Privacy Policy</h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <input type=\"checkbox\" class=\"form-check-input text-center\" [(ngModel)]=\"checkterms\" ><span>I accept </span><a href=\"https://edquill.com/terms_and_conditions.html\" target=\"_blank\"><span style=\"font-style: italic; text-decoration: underline;\">Terms & Conditions</span></a> <span> and </span> <a href=\"https://edquill.com/privacy_policy.html\" target=\"_blank\" style=\"font-style: italic; text-decoration: underline;\">Privacy Policy</a>\n                </div>\n            </div>\n        </div>\n\n        <!-- Container-fluid Ends-->\n\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"confirmtermDetails()\" [disabled]=\"checkterms == undefined || !checkterms\">Submit</button>\n    </div>\n</ng-template>\n", styles: [".auth-shell {\n  min-height: 100vh;\n  background: radial-gradient(circle at top left, rgba(143, 0, 138, 0.12), transparent 45%),\n    radial-gradient(circle at bottom right, rgba(19, 201, 202, 0.1), transparent 40%),\n    #f8f9fb;\n  display: flex;\n  align-items: center;\n}\n\n.auth-hero {\n  border-radius: var(--radius-lg);\n  background:\n    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.65), transparent 60%),\n    linear-gradient(155deg, #f6e9ff 0%, #e6d9ff 45%, #dfe7ff 100%);\n  color: var(--neutral-800);\n  min-height: 520px;\n\n  .badge {\n    background: rgba(143, 0, 138, 0.12);\n    color: var(--color-primary);\n  }\n\n  h2 {\n    color: var(--neutral-900);\n  }\n\n  li {\n    font-size: 0.95rem;\n    color: var(--neutral-700);\n  }\n\n  .auth-hero__brand {\n    max-width: 220px;\n    filter: drop-shadow(0 12px 24px rgba(143, 0, 138, 0.18));\n  }\n}\n\n.card {\n  border-radius: var(--radius-lg);\n}\n\n.password-toggle {\n  position: absolute;\n  top: 50%;\n  right: var(--spacing-3);\n  transform: translateY(-50%);\n  color: var(--neutral-500);\n}\n\n.divider {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-3);\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n\n  &::before,\n  &::after {\n    content: '';\n    flex: 1 1 auto;\n    height: 1px;\n    background: var(--neutral-200);\n  }\n\n  &__text {\n    background: #fff;\n    padding: 0 var(--spacing-3);\n    white-space: nowrap;\n  }\n}\n\n.form-control.is-invalid ~ .invalid-feedback {\n  display: block;\n}\n\n.form-floating > .form-control:not(:placeholder-shown) ~ label,\n.form-floating > .form-select ~ label {\n  font-weight: 500;\n}\n\n@media (max-width: 767.98px) {\n  .auth-shell {\n    padding: var(--spacing-4) var(--spacing-3);\n  }\n\n  .auth-hero {\n    min-height: auto;\n  }\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.ActivatedRoute }, { type: i3.LoginService }, { type: i4.EnvironmentService }, { type: i5.CommonDataService }, { type: i6.CommonService }, { type: i7.DeviceDetectorService }, { type: i8.DomSanitizer }, { type: i9.StudentService }, { type: i10.AuthService }, { type: i11.ConfigurationService }, { type: i2.Router }, { type: i12.ToastrService }, { type: i13.ValidationService }, { type: i14.NgbModal }, { type: i15.SchoolService }, { type: i16.NewsubjectService }, { type: i0.Renderer2 }], { updateContent: [{
            type: ViewChild,
            args: ['tcupdate']
        }], onWindowResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent" }); })();
//# sourceMappingURL=login.component.js.map