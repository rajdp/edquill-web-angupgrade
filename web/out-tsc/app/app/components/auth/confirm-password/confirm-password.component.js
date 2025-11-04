import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../shared/service/common-data.service";
import * as i3 from "@angular/router";
import * as i4 from "ngx-toastr";
import * as i5 from "../../../shared/service/login.service";
import * as i6 from "../../../shared/service/auth.service";
import * as i7 from "../../../shared/service/validation.service";
import * as i8 from "@angular/common";
function ConfirmPasswordComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵelement(1, "img", 31);
    i0.ɵɵelementEnd();
} }
function ConfirmPasswordComponent_em_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 32);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function ConfirmPasswordComponent_em_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 32);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function ConfirmPasswordComponent_em_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 33);
    i0.ɵɵtext(1, "Minimum 5 characters required");
    i0.ɵɵelementEnd();
} }
function ConfirmPasswordComponent_div_33_em_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 33);
    i0.ɵɵtext(1, " Enter Confirm Password ");
    i0.ɵɵelementEnd();
} }
function ConfirmPasswordComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ConfirmPasswordComponent_div_33_em_1_Template, 2, 0, "em", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.setPassword.controls["confirmPassword"].hasError("required"));
} }
function ConfirmPasswordComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "em", 33);
    i0.ɵɵtext(2, " Enter same password as above ");
    i0.ɵɵelementEnd()();
} }
export class ConfirmPasswordComponent {
    constructor(formBuilder, commondata, route, toastr, loginService, authService, router, validation) {
        this.formBuilder = formBuilder;
        this.commondata = commondata;
        this.route = route;
        this.toastr = toastr;
        this.loginService = loginService;
        this.authService = authService;
        this.router = router;
        this.validation = validation;
        this.conps = true;
        this.conps1 = true;
        this.functionCalled = false;
        const url = window.location.href;
        if (url.toString().indexOf('xtracurriculum') > -1) {
            this.logo = 'xtraCurriculum_2.png';
        }
        else if (url.toString().indexOf('uniqprep') > -1) {
            this.logo = 'uniqprep.png';
        }
        else if (url.toString().indexOf('safeteen') > -1) {
            this.logo = 'safeTeensOrg_2.png';
        }
        else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('edquill') > -1 || url.toString().indexOf('edveda') > -1) {
            this.logo = 'EdQuill_2.png';
        }
        this.route.params.forEach((params) => {
            this.token = params.id;
        });
        this.createLoginForm();
    }
    createLoginForm() {
        this.setPassword = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            confirmPassword: ['', Validators.required],
        });
    }
    ngOnInit() {
    }
    // here we have the 'passwords' group
    checkPasswords() {
        const pass = this.setPassword.controls.password.value.toString();
        const confirmPass = this.setPassword.controls.confirmPassword.value.toString();
        this.passwordValid = pass !== confirmPass;
        return this.passwordValid;
    }
    checkConfirmPassword() {
        if (this.setPassword.controls.confirmPassword.value != '') {
            this.checkPasswords();
        }
    }
    update() {
        if (this.setPassword.valid && !this.passwordValid) {
            const data = {
                platform: 'web',
                email_id: this.setPassword.controls.userName.value,
                encoded_user_id: this.token,
                password: this.setPassword.controls.password.value
            };
            this.loginService.changePassword(data).subscribe((successData) => {
                this.changeSuccess(successData);
            }, (error) => {
                console.error(error);
            });
        }
        else {
            this.toastr.error('Please Fill All The Fields', 'Error');
            this.validation.validateAllFormFields(this.setPassword);
        }
    }
    changeSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject, 'Account Activated');
            this.router.navigate(['/auth/login']);
        }
        else {
            this.toastr.error(successData.ErrorObject, '');
        }
    }
    static { this.ɵfac = function ConfirmPasswordComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ConfirmPasswordComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.CommonDataService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.ToastrService), i0.ɵɵdirectiveInject(i5.LoginService), i0.ɵɵdirectiveInject(i6.AuthService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i7.ValidationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfirmPasswordComponent, selectors: [["app-confirm-password"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 39, vars: 15, consts: [["id", "pre-loader", 4, "ngIf"], [1, "page-wrapper"], [1, "authentication-box"], [1, "container"], [1, "row"], [1, "col-12", "col-md-5", "p-0", "card-left", "d-none", "d-md-block"], [1, "card", "bg-primary", "mb-0"], [1, "svg-icon1", "d-flex", "justify-content-center"], ["alt", "", 1, "my-2", 3, "src"], [1, "col-12", "col-md-7", "p-0", "card-right"], [1, "card", "tab2-card", "p-4"], [1, "card-body"], [1, "login-text"], [1, "tab-pane", "fade", "active", "show", "mt-4"], ["autocomplete", "off", "novalidate", "", 1, "form-horizontal", "auth-form1", 3, "formGroup"], [1, "form-group"], ["autocomplete", "new-password", "formControlName", "userName", "type", "text", "placeholder", "Email", "id", "exampleInputEmail1", 1, "form-control"], ["class", "error", 4, "ngIf"], [1, "input-group"], ["autocomplete", "new-password", "required", "", "formControlName", "password", "type", "password", "placeholder", "Password", "aria-label", "Recipient's username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "input", "type"], [1, "input-group-append", "cursor", 3, "click"], ["id", "basic-addon3", 1, "input-group-text"], ["aria-hidden", "true"], ["class", "error help-block", 4, "ngIf"], ["autocomplete", "new-password", "formControlName", "confirmPassword", "required", "", "type", "password", "placeholder", "Confirm Password", "aria-label", "Recipient's username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "input", "type"], ["id", "basic-addon2", 1, "input-group-text"], [4, "ngIf"], [1, "form-button"], [1, "btn", "btn-primary", "w-100", 3, "click"], ["aria-hidden", "true", 1, "ml-2", "fa", "fa-long-arrow-right", "fa-1x"], ["id", "pre-loader"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", ""], [1, "error"], [1, "error", "help-block"]], template: function ConfirmPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ConfirmPasswordComponent_div_0_Template, 2, 0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
            i0.ɵɵelement(8, "img", 8);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h4", 12);
            i0.ɵɵtext(13, "Set Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 13)(15, "form", 14)(16, "div", 15);
            i0.ɵɵelement(17, "input", 16);
            i0.ɵɵtemplate(18, ConfirmPasswordComponent_em_18_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 15)(20, "div", 18)(21, "input", 19);
            i0.ɵɵlistener("input", function ConfirmPasswordComponent_Template_input_input_21_listener() { return ctx.checkConfirmPassword(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 20);
            i0.ɵɵlistener("click", function ConfirmPasswordComponent_Template_div_click_22_listener() { return ctx.conps = !ctx.conps; });
            i0.ɵɵelementStart(23, "span", 21);
            i0.ɵɵelement(24, "i", 22);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(25, ConfirmPasswordComponent_em_25_Template, 2, 0, "em", 17)(26, ConfirmPasswordComponent_em_26_Template, 2, 0, "em", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 15)(28, "div", 18)(29, "input", 24);
            i0.ɵɵlistener("input", function ConfirmPasswordComponent_Template_input_input_29_listener() { return ctx.checkPasswords(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div", 20);
            i0.ɵɵlistener("click", function ConfirmPasswordComponent_Template_div_click_30_listener() { return ctx.conps1 = !ctx.conps1; });
            i0.ɵɵelementStart(31, "span", 25);
            i0.ɵɵelement(32, "i", 22);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(33, ConfirmPasswordComponent_div_33_Template, 2, 1, "div", 26)(34, ConfirmPasswordComponent_div_34_Template, 3, 0, "div", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 27)(36, "button", 28);
            i0.ɵɵlistener("click", function ConfirmPasswordComponent_Template_button_click_36_listener() { return ctx.update(); });
            i0.ɵɵtext(37, "Submit");
            i0.ɵɵelement(38, "i", 29);
            i0.ɵɵelementEnd()()()()()()()()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.commondata.loader.value);
            i0.ɵɵadvance(8);
            i0.ɵɵpropertyInterpolate1("src", "assets/images/", ctx.logo, "", i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.setPassword);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.setPassword.get("userName").valid && (ctx.setPassword.get("userName").dirty || ctx.setPassword.get("userName").touched));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("type", ctx.conps ? "password" : "text");
            i0.ɵɵadvance(3);
            i0.ɵɵclassMap(ctx.conps ? "fa fa-eye-slash" : "fa fa-eye");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.setPassword.get("password").hasError("required") && (ctx.setPassword.get("password").dirty || ctx.setPassword.get("password").touched));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.setPassword.get("password").hasError("minlength"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("type", ctx.conps1 ? "password" : "text");
            i0.ɵɵadvance(3);
            i0.ɵɵclassMap(ctx.conps1 ? "fa fa-eye-slash" : "fa fa-eye");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.setPassword.controls["confirmPassword"].touched && !ctx.setPassword.controls["confirmPassword"].valid);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.passwordValid);
        } }, dependencies: [CommonModule, i8.NgIf, FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, ReactiveFormsModule, i1.FormGroupDirective, i1.FormControlName, RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmPasswordComponent, [{
        type: Component,
        args: [{ selector: 'app-confirm-password', standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule], template: "<!--=================================\n preloader -->\n<div id=\"pre-loader\" *ngIf=\"commondata.loader.value\">\n    <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">\n</div>\n<div class=\"page-wrapper\">\n    <div class=\"authentication-box\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12 col-md-5 p-0 card-left d-none d-md-block\">\n                    <div class=\"card bg-primary mb-0\">\n                        <div class=\"svg-icon1 d-flex justify-content-center\">\n                            <img alt=\"\" class=\"my-2\" src=\"assets/images/{{logo}}\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-7 p-0 card-right\">\n                    <div class=\"card tab2-card p-4\">\n                        <div class=\"card-body\">\n                            <h4 class=\"login-text\">Set Password</h4>\n                            <div class=\"tab-pane fade active show mt-4\">\n                                <form autocomplete=\"off\" [formGroup]=\"setPassword\"\n                                      class=\"form-horizontal auth-form1\" novalidate=\"\">\n                                    <div class=\"form-group\">\n                                        <input autocomplete=\"new-password\" formControlName=\"userName\" type=\"text\"\n                                               class=\"form-control\" placeholder=\"Email\"\n                                               id=\"exampleInputEmail1\">\n                                        <em class=\"error\" *ngIf=\"!setPassword.get('userName').valid && (setPassword.get('userName').dirty || setPassword.get('userName').touched)\">Email is required</em>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <div class=\"input-group\">\n                                            <input (input)=\"checkConfirmPassword()\" autocomplete=\"new-password\" required formControlName=\"password\" type=\"password\"\n                                                   class=\"form-control\" placeholder=\"Password\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon1\" [type]=\"conps ? 'password' : 'text'\">\n                                            <div class=\"input-group-append cursor\" (click)=\"conps = !conps\">\n                                                <span class=\"input-group-text\" id=\"basic-addon3\">\n                                                    <i [class]=\"conps ? 'fa fa-eye-slash' : 'fa fa-eye'\" aria-hidden=\"true\"></i>\n                                                </span>\n                                            </div>\n                                        </div>\n                                        <em class=\"error\" *ngIf=\"setPassword.get('password').hasError('required') && (setPassword.get('password').dirty || setPassword.get('password').touched)\">Password is required</em>\n                                        <em class=\"error help-block\" *ngIf=\"setPassword.get('password').hasError('minlength')\">Minimum 5 characters required</em>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <div class=\"input-group\">\n                                            <input (input)=\"checkPasswords()\" autocomplete=\"new-password\" formControlName=\"confirmPassword\" required type=\"password\"\n                                                   class=\"form-control\" placeholder=\"Confirm Password\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon1\" [type]=\"conps1 ? 'password' : 'text'\">\n                                            <div class=\"input-group-append cursor\" (click)=\"conps1 = !conps1\">\n                                                <span class=\"input-group-text\" id=\"basic-addon2\">\n                                                    <i [class]=\"conps1 ? 'fa fa-eye-slash' : 'fa fa-eye'\" aria-hidden=\"true\"></i>\n                                                </span>\n                                            </div>\n                                        </div>\n                                        <div *ngIf=\"setPassword.controls['confirmPassword'].touched && !setPassword.controls['confirmPassword'].valid\">\n                                            <em class=\"error help-block\" *ngIf=\"setPassword.controls['confirmPassword'].hasError('required') \" >\n                                                Enter Confirm Password\n                                            </em>\n                                        </div>\n                                        <div *ngIf=\"passwordValid\">\n                                            <em class=\"error help-block\">\n                                                Enter same password as above\n                                            </em>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-button\">\n                                        <button class=\"btn btn-primary w-100\" (click)=\"update()\">Submit<i class=\"ml-2 fa fa-long-arrow-right fa-1x\" aria-hidden=\"true\"></i></button>\n                                    </div>\n                                </form>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.CommonDataService }, { type: i3.ActivatedRoute }, { type: i4.ToastrService }, { type: i5.LoginService }, { type: i6.AuthService }, { type: i3.Router }, { type: i7.ValidationService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ConfirmPasswordComponent, { className: "ConfirmPasswordComponent" }); })();
//# sourceMappingURL=confirm-password.component.js.map