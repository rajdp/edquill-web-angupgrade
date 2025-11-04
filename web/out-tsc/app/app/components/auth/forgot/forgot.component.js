import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../shared/service/common-data.service";
import * as i3 from "../../../shared/service/category.service";
import * as i4 from "../../../shared/service/login.service";
import * as i5 from "../../../shared/service/auth.service";
import * as i6 from "@angular/router";
import * as i7 from "../../../shared/service/validation.service";
import * as i8 from "ngx-toastr";
import * as i9 from "@angular/common";
import * as i10 from "ngx-owl-carousel-o";
function ForgotComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "img", 9);
    i0.ɵɵelementEnd();
} }
function ForgotComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    i0.ɵɵelement(3, "img", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 14)(5, "h5")(6, "em");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 15)(9, "button", 16);
    i0.ɵɵtext(10, "Ok");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("src", "assets/images/", ctx_r0.logo, "", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("\"", ctx_r0.message, "\"");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", "/auth/login");
} }
function ForgotComponent_div_6_div_4_ng_container_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r2.title);
} }
function ForgotComponent_div_6_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ForgotComponent_div_6_div_4_ng_container_2_ng_template_1_Template, 3, 1, "ng-template", 25);
    i0.ɵɵelementContainerEnd();
} }
function ForgotComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "owl-carousel-o", 23);
    i0.ɵɵtemplate(2, ForgotComponent_div_6_div_4_ng_container_2_Template, 2, 0, "ng-container", 24);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("options", ctx_r0.owlcarouselOptions);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.owlcarousel);
} }
function ForgotComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    i0.ɵɵelement(3, "img", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ForgotComponent_div_6_div_4_Template, 3, 2, "div", 21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("src", "assets/images/", ctx_r0.logo, "", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.functionCalled);
} }
function ForgotComponent_div_7_form_6_em_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 39);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function ForgotComponent_div_7_form_6_em_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 39);
    i0.ɵɵtext(1, "Invalid Email-Id");
    i0.ɵɵelementEnd();
} }
function ForgotComponent_div_7_form_6_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 41);
    i0.ɵɵelement(2, "input", 42);
    i0.ɵɵelementStart(3, "a", 43);
    i0.ɵɵtext(4, "Back to Login");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", "/auth/login");
} }
function ForgotComponent_div_7_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 32)(1, "div", 33);
    i0.ɵɵelement(2, "input", 34);
    i0.ɵɵtemplate(3, ForgotComponent_div_7_form_6_em_3_Template, 2, 0, "em", 35)(4, ForgotComponent_div_7_form_6_em_4_Template, 2, 0, "em", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, ForgotComponent_div_7_form_6_div_5_Template, 5, 1, "div", 36);
    i0.ɵɵelementStart(6, "div", 15)(7, "button", 37);
    i0.ɵɵlistener("click", function ForgotComponent_div_7_form_6_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.change()); });
    i0.ɵɵtext(8, "Submit");
    i0.ɵɵelement(9, "i", 38);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formGroup", ctx_r0.loginForm);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.loginForm.get("userName").hasError("required") && (ctx_r0.loginForm.get("userName").dirty || ctx_r0.loginForm.get("userName").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.loginForm.get("userName").hasError("pattern"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.type != "grader" && ctx_r0.type != "corporate");
} }
function ForgotComponent_div_7_form_7_em_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 39);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function ForgotComponent_div_7_form_7_em_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, "Minimum 5 characters required");
    i0.ɵɵelementEnd();
} }
function ForgotComponent_div_7_form_7_div_7_em_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, " Enter Confirm Password ");
    i0.ɵɵelementEnd();
} }
function ForgotComponent_div_7_form_7_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ForgotComponent_div_7_form_7_div_7_em_1_Template, 2, 0, "em", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.forgotForm.controls["confirmpassword"].hasError("required"));
} }
function ForgotComponent_div_7_form_7_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "em", 49);
    i0.ɵɵtext(2, " Enter same password as above ");
    i0.ɵɵelementEnd()();
} }
function ForgotComponent_div_7_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 44)(1, "div", 33);
    i0.ɵɵelement(2, "input", 45);
    i0.ɵɵtemplate(3, ForgotComponent_div_7_form_7_em_3_Template, 2, 0, "em", 35)(4, ForgotComponent_div_7_form_7_em_4_Template, 2, 0, "em", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 33);
    i0.ɵɵelement(6, "input", 47);
    i0.ɵɵtemplate(7, ForgotComponent_div_7_form_7_div_7_Template, 2, 1, "div", 48)(8, ForgotComponent_div_7_form_7_div_8_Template, 3, 0, "div", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 15)(10, "button", 37);
    i0.ɵɵlistener("click", function ForgotComponent_div_7_form_7_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.update()); });
    i0.ɵɵtext(11, "Submit");
    i0.ɵɵelement(12, "i", 38);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formGroup", ctx_r0.forgotForm);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.forgotForm.get("password").hasError("required") && (ctx_r0.forgotForm.get("password").dirty || ctx_r0.forgotForm.get("password").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.forgotForm.get("password").hasError("minlength"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.forgotForm.controls["confirmpassword"].touched && !ctx_r0.forgotForm.controls["confirmpassword"].valid);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.checkPasswords());
} }
function ForgotComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27)(2, "div", 14)(3, "h4", 28);
    i0.ɵɵtext(4, "Forgot Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 29);
    i0.ɵɵtemplate(6, ForgotComponent_div_7_form_6_Template, 10, 4, "form", 30)(7, ForgotComponent_div_7_form_7_Template, 13, 5, "form", 31);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", !ctx_r0.forgotList);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.forgotList);
} }
export class ForgotComponent {
    constructor(formBuilder, commondata, category, loginService, authService, router, validation, route, toastr) {
        this.formBuilder = formBuilder;
        this.commondata = commondata;
        this.category = category;
        this.loginService = loginService;
        this.authService = authService;
        this.router = router;
        this.validation = validation;
        this.route = route;
        this.toastr = toastr;
        this.hostName = 'EdQuill';
        this.functionCalled = false;
        this.owlcarousel = [
            {
                title: 'Welcome to' + ' ' + this.hostName
            }
        ];
        this.owlcarouselOptions = {
            loop: true,
            items: 1,
            dots: true
        };
        const url = window.location.href;
        if (url.toString().indexOf('xtracurriculum') > -1) {
            this.logo = 'xtraCurriculum_2.png';
            this.hostName = 'XtraCurriculum';
        }
        else if (url.toString().indexOf('safeteen') > -1) {
            this.logo = 'safeTeensOrg.png';
            this.hostName = 'SafeTeens';
        }
        else if (url.toString().indexOf('uniqprep') > -1) {
            this.logo = 'uniqprep.png';
            this.hostName = 'Uniq Prep';
        }
        else if (url.toString().indexOf('elevenace') > -1) {
            this.logo = 'elevenAce.png';
            this.hostName = 'ElevenAce';
        }
        else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('edquill') > -1 || url.toString().indexOf('uthkal') > -1 || url.toString().indexOf('edveda') > -1) {
            this.logo = 'EdQuill_2.png';
            this.hostName = 'EdQuill';
        }
        this.createLoginForm();
        this.route.params.forEach((params) => {
            // this.type = params.type;
            console.log(this.type);
            this.token = params.id;
            // console.log(this.token);
            this.forgotList = !(this.token == undefined || this.token == '');
        });
        this.message = '';
        this.functionCalled = true;
    }
    createLoginForm() {
        this.loginForm = this.formBuilder.group({
            userName: ['']
        });
        this.forgotForm = this.formBuilder.group({
            // userName: [''],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            confirmpassword: [''],
        });
    }
    ngOnInit() {
        //   this.forgotForm.controls.userName.reset();
        this.forgotForm.controls.password.reset();
        this.forgotForm.controls.confirmpassword.reset();
        // if (this.type == 'admin') {
        //     this.roleid = '2';
        //     console.log(this.roleid, 'Admin Forgot Password');
        // } else if (this.type == 'content') {
        //     this.roleid = '3';
        //     console.log(this.roleid, 'Content-Creator Forgot Password');
        // } else if (this.type == 'teacher') {
        //     this.roleid = '4';
        //     console.log(this.roleid, 'Teacher Forgot Password');
        // } else if (this.type == 'student') {
        //     this.roleid = '5';
        //     console.log(this.roleid, 'Teacher Forgot Password');
        // } else if (this.type == 'corporate') {
        //     this.roleid = '6';
        //     console.log(this.roleid, 'Teacher Forgot Password');
        // } else if (this.type == 'grader') {
        //     this.roleid = '7';
        //     console.log(this.roleid, 'Teacher Forgot Password');
        // }
    }
    checkPasswords() {
        const pass = this.forgotForm.controls.password.value;
        const confirmPass = this.forgotForm.controls.confirmpassword.value;
        this.passwordValid = pass !== confirmPass;
        return this.passwordValid;
    }
    change() {
        if (this.loginForm.valid) {
            const data = {
                platform: 'web',
                email_id: this.loginForm.controls.userName.value
                // role_id: this.roleid
            };
            console.log(data, 'data');
            this.loginService.forgotPassword(data).subscribe((successData) => {
                this.changeSuccess(successData);
            }, (error) => {
                console.error(error);
            });
        }
        else {
            this.validation.validateAllFormFields(this.loginForm);
        }
    }
    changeSuccess(successData) {
        if (successData.IsSuccess) {
            this.message = successData.ResponseObject.message;
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Forgot password');
        }
    }
    update() {
        const pass = this.forgotForm.controls.password.value;
        const confirmpass = this.forgotForm.controls.confirmpassword.value;
        if (this.forgotForm.valid && pass == confirmpass) {
            const data = {
                platform: 'web',
                email_id: this.token,
                // email_id: this.forgotForm.controls.userName.value,
                // token: this.token,
                password: this.forgotForm.controls.password.value
            };
            this.loginService.changeForgotPassword(data).subscribe((successData) => {
                this.changeForgotSuccess(successData);
            }, (error) => {
                console.error(error);
            });
        }
        else {
            this.validation.validateAllFormFields(this.forgotForm);
        }
    }
    changeForgotSuccess(successData) {
        // this.forgotForm.controls.userName.reset();
        this.forgotForm.controls.password.reset();
        this.forgotForm.controls.confirmpassword.reset();
        if (successData.IsSuccess) {
            if (successData.ResponseObject.type != '5') {
                this.toastr.success(successData.ResponseObject.message, 'Success');
            }
            this.router.navigate(['/auth/login']);
            // if (successData.ResponseObject.type == '2') {
            //     this.router.navigate(['/auth/login/admin']);
            // } else if (successData.ResponseObject.type == '3') {
            //     this.router.navigate(['/auth/login/content-creator']);
            // } else if (successData.ResponseObject.type == '4') {
            //     this.router.navigate(['/auth/login/school']);
            // } else if (successData.ResponseObject.type == '5') {
            //     this.router.navigate(['/auth/login/student']);
            //     // this.toastr.success('Password Reset Successfully. Please login in app');
            // } else if (successData.ResponseObject.type == '6') {
            //     this.router.navigate(['/auth/login/corporate']);
            //     // this.toastr.success('Password Reset Successfully. Please login in app');
            // }
            this.toastr.success(successData.ResponseObject.message);
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Failed');
        }
    }
    static { this.ɵfac = function ForgotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ForgotComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.CommonDataService), i0.ɵɵdirectiveInject(i3.CategoryService), i0.ɵɵdirectiveInject(i4.LoginService), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i7.ValidationService), i0.ɵɵdirectiveInject(i6.ActivatedRoute), i0.ɵɵdirectiveInject(i8.ToastrService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ForgotComponent, selectors: [["app-forgot"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 8, vars: 4, consts: [["id", "pre-loader", 4, "ngIf"], [1, "page-wrapper"], [1, "authentication-box"], [1, "container"], [1, "row", "justify-content-center"], ["class", "col-12 col-md-6", 4, "ngIf"], ["class", "col-12 col-md-5 p-0 card-left", 4, "ngIf"], ["class", "col-12 col-md-7 p-0 card-right", 4, "ngIf"], ["id", "pre-loader"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", ""], [1, "col-12", "col-md-6"], [1, "card", "text-center"], [1, "svg-icon", "mb-0"], ["alt", "", 3, "src"], [1, "card-body"], [1, "form-button"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "col-12", "col-md-5", "p-0", "card-left"], [1, "card", "bg-primary", "mb-0", "p-2"], [1, "svg-icon1", "d-flex", "justify-content-center", 2, "min-height", "12rem"], ["alt", "", 1, "my-2", 2, "height", "auto", "object-fit", "contain", 3, "src"], ["class", "single-item", 4, "ngIf"], [1, "single-item"], [3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", 1, "item"], [1, "col-12", "col-md-7", "p-0", "card-right"], [1, "card", "tab2-card", "p-4"], [1, "login-text"], [1, "tab-pane", "fade", "active", "show", "mt-4"], ["class", "form-horizontal auth-form", "novalidate", "", 3, "formGroup", 4, "ngIf"], ["autocomplete", "off", "class", "form-horizontal auth-form", "novalidate", "", 3, "formGroup", 4, "ngIf"], ["novalidate", "", 1, "form-horizontal", "auth-form", 3, "formGroup"], [1, "form-group"], ["autofocus", "", "formControlName", "userName", "name", "login[username]", "type", "text", "placeholder", "Please Enter Email Id", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "id", "exampleInputEmail1", "autocomplete", "off", 1, "form-control"], ["class", "error", 4, "ngIf"], ["class", "form-terms", 4, "ngIf"], [1, "btn", "btn-primary", "w-100", 3, "click"], ["aria-hidden", "true", 1, "ml-2", "fa", "fa-long-arrow-right", "fa-1x"], [1, "error"], [1, "form-terms"], [1, "custom-control", "custom-checkbox", "mr-sm-2"], ["type", "checkbox", "id", "customControlAutosizing", 1, "custom-control-input"], [1, "btn", "btn-default", "forgot-pass", "italic_text", 3, "routerLink"], ["autocomplete", "off", "novalidate", "", 1, "form-horizontal", "auth-form", 3, "formGroup"], ["autocomplete", "new-password", "required", "", "formControlName", "password", "type", "password", "placeholder", "Password", "maxlength", "20", 1, "form-control"], ["class", "error help-block", 4, "ngIf"], ["autocomplete", "new-password", "required", "", "formControlName", "confirmpassword", "type", "password", "placeholder", "Confirm Password", "maxlength", "20", 1, "form-control"], [4, "ngIf"], [1, "error", "help-block"]], template: function ForgotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ForgotComponent_div_0_Template, 2, 0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵtemplate(5, ForgotComponent_div_5_Template, 11, 4, "div", 5)(6, ForgotComponent_div_6_Template, 5, 3, "div", 6)(7, ForgotComponent_div_7_Template, 8, 2, "div", 7);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.commondata.loader.value);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.message != "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.message == "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.message == "");
        } }, dependencies: [CommonModule, i9.NgForOf, i9.NgIf, FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MaxLengthValidator, i1.PatternValidator, ReactiveFormsModule, i1.FormGroupDirective, i1.FormControlName, RouterModule, i6.RouterLink, CarouselModule, i10.CarouselComponent, i10.CarouselSlideDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForgotComponent, [{
        type: Component,
        args: [{ selector: 'app-forgot', standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, CarouselModule], template: "<!--=================================\n preloader -->\n<div id=\"pre-loader\" *ngIf=\"commondata.loader.value\">\n    <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">\n</div>\n<div class=\"page-wrapper\">\n    <div class=\"authentication-box\">\n        <div class=\"container\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-12 col-md-6\" *ngIf=\"message != ''\">\n                    <div class=\"card text-center\">\n                        <div class=\"svg-icon mb-0\">\n                            <img alt=\"\" src=\"assets/images/{{logo}}\">\n                        </div>\n                        <div class=\"card-body\">\n                            <h5><em>\"{{message}}\"</em></h5>\n                            <div class=\"form-button\">\n                                <button class=\"btn btn-primary\" [routerLink]=\"'/auth/login'\">Ok</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-5 p-0 card-left\" *ngIf=\"message == ''\">\n                    <div class=\"card bg-primary mb-0 p-2\">\n                        <div class=\"svg-icon1 d-flex justify-content-center\" style=\"min-height: 12rem\">\n                            <img alt=\"\" class=\"my-2\" src=\"assets/images/{{this.logo}}\" style=\"height: auto; object-fit: contain\">\n                        </div>\n                        <div *ngIf=\"functionCalled\" class=\"single-item\">\n                            <owl-carousel-o [options]=\"owlcarouselOptions\">\n                                <ng-container *ngFor=\"let data of owlcarousel\">\n                                    <ng-template carouselSlide class=\"item\">\n                                        <div>\n                                            <h3>{{data.title}}</h3>\n                                        </div>\n                                    </ng-template>\n                                </ng-container>\n                            </owl-carousel-o>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-7 p-0 card-right\" *ngIf=\"message == ''\">\n                    <div class=\"card tab2-card p-4\">\n                        <div class=\"card-body\">\n                            <h4 class=\"login-text\">Forgot Password</h4>\n\n                            <div class=\"tab-pane fade active show mt-4\">\n                                <form [formGroup]=\"loginForm\"\n                                      class=\"form-horizontal auth-form\" novalidate=\"\" *ngIf=\"!forgotList\">\n                                    <div class=\"form-group\">\n                                        <input autofocus formControlName=\"userName\" name=\"login[username]\" type=\"text\"\n                                               class=\"form-control\" placeholder=\"Please Enter Email Id\" pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$\"\n                                               id=\"exampleInputEmail1\" autocomplete=\"off\">\n                                        <em class=\"error\" *ngIf=\"loginForm.get('userName').hasError('required') && (loginForm.get('userName').dirty || loginForm.get('userName').touched)\">Email is required</em>\n                                        <em class=\"error\" *ngIf=\"loginForm.get('userName').hasError('pattern')\">Invalid Email-Id</em>\n                                    </div>\n\n                                    <div class=\"form-terms\" *ngIf=\"type != 'grader' && type != 'corporate'\">\n                                        <div class=\"custom-control custom-checkbox mr-sm-2\">\n                                            <input type=\"checkbox\" class=\"custom-control-input\"\n                                                   id=\"customControlAutosizing\">\n                                            <a [routerLink]=\"'/auth/login'\"\n                                               class=\"btn btn-default forgot-pass italic_text\">Back to Login</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-button\">\n                                        <button class=\"btn btn-primary w-100\" (click)=\"change()\">Submit<i class=\"ml-2 fa fa-long-arrow-right fa-1x\" aria-hidden=\"true\"></i></button>\n                                    </div>\n                                </form>\n                                <form autocomplete=\"off\"\n                                      [formGroup]=\"forgotForm\"\n                                      class=\"form-horizontal auth-form\" novalidate=\"\" *ngIf=\"forgotList\">\n                                    <div class=\"form-group\">\n                                        <input autocomplete=\"new-password\" required=\"\" formControlName=\"password\"  type=\"password\"\n                                               class=\"form-control\" placeholder=\"Password\" maxlength=\"20\">\n                                        <em class=\"error\" *ngIf=\"forgotForm.get('password').hasError('required') && (forgotForm.get('password').dirty || forgotForm.get('password').touched)\">Password is required</em>\n                                        <em *ngIf=\"forgotForm.get('password').hasError('minlength')\" class=\"error help-block\">Minimum 5 characters required</em>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                        <input autocomplete=\"new-password\" required=\"\" formControlName=\"confirmpassword\"  type=\"password\"\n                                               class=\"form-control\" placeholder=\"Confirm Password\" maxlength=\"20\">\n                                        <div *ngIf=\"forgotForm.controls['confirmpassword'].touched && !forgotForm.controls['confirmpassword'].valid\">\n                                            <em class=\"error help-block\" *ngIf=\"forgotForm.controls['confirmpassword'].hasError('required') \" >\n                                                Enter Confirm Password\n                                            </em>\n\n                                        </div>\n                                        <div *ngIf=\"checkPasswords()\">\n                                            <em class=\"error help-block\">\n                                                Enter same password as above\n                                            </em>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-button\">\n                                        <button class=\"btn btn-primary w-100\" (click)=\"update()\">Submit<i class=\"ml-2 fa fa-long-arrow-right fa-1x\" aria-hidden=\"true\"></i></button>\n                                    </div>\n\n                                </form>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.CommonDataService }, { type: i3.CategoryService }, { type: i4.LoginService }, { type: i5.AuthService }, { type: i6.Router }, { type: i7.ValidationService }, { type: i6.ActivatedRoute }, { type: i8.ToastrService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ForgotComponent, { className: "ForgotComponent" }); })();
//# sourceMappingURL=forgot.component.js.map