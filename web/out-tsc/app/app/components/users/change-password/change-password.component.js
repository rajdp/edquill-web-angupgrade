import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../shared/service/common-data.service";
import * as i3 from "ngx-toastr";
import * as i4 from "../../../shared/service/auth.service";
import * as i5 from "../../../shared/service/category.service";
import * as i6 from "@angular/router";
import * as i7 from "../../../shared/service/validation.service";
import * as i8 from "../../../environment.service";
import * as i9 from "@angular/common";
function ChangePasswordComponent_em_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 24);
    i0.ɵɵtext(1, "Old Password is required");
    i0.ɵɵelementEnd();
} }
function ChangePasswordComponent_em_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 24);
    i0.ɵɵtext(1, "Minimum 5 characters required");
    i0.ɵɵelementEnd();
} }
function ChangePasswordComponent_em_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 24);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function ChangePasswordComponent_em_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 24);
    i0.ɵɵtext(1, "Minimum 5 characters required");
    i0.ɵɵelementEnd();
} }
function ChangePasswordComponent_em_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 24);
    i0.ɵɵtext(1, "Confirm Password is required");
    i0.ɵɵelementEnd();
} }
function ChangePasswordComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "em", 25);
    i0.ɵɵtext(2, " Enter same password as above ");
    i0.ɵɵelementEnd()();
} }
export class ChangePasswordComponent {
    constructor(formBuilder, commondata, toastr, auth, category, router, validation, env) {
        this.formBuilder = formBuilder;
        this.commondata = commondata;
        this.toastr = toastr;
        this.auth = auth;
        this.category = category;
        this.router = router;
        this.validation = validation;
        this.env = env;
        this.accountForm = this.formBuilder.group({
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            oldpassword: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            confirmPassword: ['', Validators.required],
        });
        this.conps = true;
        this.conps1 = true;
        this.conps2 = true;
    }
    ngOnInit() {
        this.commondata.showLoader(false);
    }
    changePassword() {
        const pass = this.accountForm.controls.password.value;
        const confirmpass = this.accountForm.controls.confirmPassword.value;
        if (this.accountForm.valid && pass == confirmpass) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                password: this.accountForm.controls.password.value,
                old_password: this.accountForm.controls.oldpassword.value,
                confirm_password: this.accountForm.controls.confirmPassword.value
            };
            this.category.changePassword(data).subscribe((successData) => {
                this.changePasswordSuccess(successData);
            }, (error) => {
                this.changePasswordFailure(error);
            });
        }
        else {
            this.validation.validateAllFormFields(this.accountForm);
        }
    }
    changePasswordSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success(successData.ResponseObject.message, '');
            this.roleId = this.auth.getRoleId();
            if (this.roleId == 2 || this.roleId == 4 || this.roleId == 6) {
                this.router.navigate(['home/list-home']);
            }
            else if (this.roleId == 3) {
                this.router.navigate(['repository/content-home']);
            }
            else if (this.roleId == 5) {
                // this.router.navigate(['studentlogin/list-home']);
                this.router.navigate(['/student/dashboard']);
            }
        }
        else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, '');
        }
    }
    changePasswordFailure(error) {
        console.log(error, 'error');
    }
    checkPasswords() {
        let pass = this.accountForm.controls.password.value;
        let confirmPass = this.accountForm.controls.confirmPassword.value;
        if (pass === confirmPass) {
            this.passwordValid = false;
        }
        else {
            this.passwordValid = true;
        }
        return this.passwordValid;
    }
    static { this.ɵfac = function ChangePasswordComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ChangePasswordComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.CommonDataService), i0.ɵɵdirectiveInject(i3.ToastrService), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i5.CategoryService), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i7.ValidationService), i0.ɵɵdirectiveInject(i8.EnvironmentService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 51, vars: 19, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom5", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], [1, "input-group"], ["formControlName", "oldpassword", "id", "validationCustom5", "type", "password", "placeholder", "Old Password", "maxlength", "20", "required", "", 1, "form-control", 3, "type"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text", 2, "cursor", "pointer"], ["aria-hidden", "true", 3, "click"], ["class", "error", 4, "ngIf"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], ["formControlName", "password", "id", "validationCustom0", "type", "password", "placeholder", "New Password", "maxlength", "20", "required", "", 1, "form-control", 3, "type"], ["id", "basic-addon32", 1, "input-group-text", 2, "cursor", "pointer"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["formControlName", "confirmPassword", "id", "validationCustom1", "type", "password", "placeholder", "Confirm Password", "required", "", 1, "form-control", 3, "type"], ["id", "basic-addon31", 1, "input-group-text", 2, "cursor", "pointer"], [4, "ngIf"], [1, "pull-right", "mt-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "error"], [1, "error", "help-block"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
            i0.ɵɵtext(6, "Change Password");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div")(8, "form", 5)(9, "div", 6)(10, "label", 7)(11, "span");
            i0.ɵɵtext(12, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, " Old Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 8)(15, "div", 9);
            i0.ɵɵelement(16, "input", 10);
            i0.ɵɵelementStart(17, "div", 11)(18, "span", 12)(19, "i", 13);
            i0.ɵɵlistener("click", function ChangePasswordComponent_Template_i_click_19_listener() { return ctx.conps = !ctx.conps; });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(20, ChangePasswordComponent_em_20_Template, 2, 0, "em", 14)(21, ChangePasswordComponent_em_21_Template, 2, 0, "em", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 6)(23, "label", 15)(24, "span");
            i0.ɵɵtext(25, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(26, " New Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 8)(28, "div", 9);
            i0.ɵɵelement(29, "input", 16);
            i0.ɵɵelementStart(30, "div", 11)(31, "span", 17)(32, "i", 13);
            i0.ɵɵlistener("click", function ChangePasswordComponent_Template_i_click_32_listener() { return ctx.conps1 = !ctx.conps1; });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(33, ChangePasswordComponent_em_33_Template, 2, 0, "em", 14)(34, ChangePasswordComponent_em_34_Template, 2, 0, "em", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "div", 6)(36, "label", 18)(37, "span");
            i0.ɵɵtext(38, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(39, " Confirm Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "div", 8)(41, "div", 9);
            i0.ɵɵelement(42, "input", 19);
            i0.ɵɵelementStart(43, "div", 11)(44, "span", 20)(45, "i", 13);
            i0.ɵɵlistener("click", function ChangePasswordComponent_Template_i_click_45_listener() { return ctx.conps2 = !ctx.conps2; });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(46, ChangePasswordComponent_em_46_Template, 2, 0, "em", 14)(47, ChangePasswordComponent_div_47_Template, 3, 0, "div", 21);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(48, "div", 22)(49, "button", 23);
            i0.ɵɵlistener("click", function ChangePasswordComponent_Template_button_click_49_listener() { return ctx.changePassword(); });
            i0.ɵɵtext(50, "Submit");
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵclassMapInterpolate1("card-body tab2-card ", ctx.env.deviceType() ? "pt-0" : "", "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.accountForm);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("type", ctx.conps ? "password" : "text");
            i0.ɵɵadvance(3);
            i0.ɵɵclassMap(ctx.conps ? "fa fa-eye-slash" : "fa fa-eye");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.accountForm.get("oldpassword").hasError("required") && (ctx.accountForm.get("oldpassword").dirty || ctx.accountForm.get("oldpassword").touched));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.accountForm.get("oldpassword").hasError("minlength"));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("type", ctx.conps1 ? "password" : "text");
            i0.ɵɵadvance(3);
            i0.ɵɵclassMap(ctx.conps1 ? "fa fa-eye-slash" : "fa fa-eye");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.accountForm.get("password").hasError("required") && (ctx.accountForm.get("password").dirty || ctx.accountForm.get("password").touched));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.accountForm.get("password").hasError("minlength"));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("type", ctx.conps2 ? "password" : "text");
            i0.ɵɵadvance(3);
            i0.ɵɵclassMap(ctx.conps2 ? "fa fa-eye-slash" : "fa fa-eye");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.accountForm.get("confirmPassword").valid && (ctx.accountForm.get("confirmPassword").dirty || ctx.accountForm.get("confirmPassword").touched));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.checkPasswords());
        } }, dependencies: [i9.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MaxLengthValidator, i1.FormGroupDirective, i1.FormControlName] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangePasswordComponent, [{
        type: Component,
        args: [{ selector: 'app-change-password', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <h5>Change Password</h5>\n                </div>\n                <div class=\"card-body tab2-card {{env.deviceType() ? 'pt-0' : ''}}\">\n                    <form [formGroup]=\"accountForm\" class=\"needs-validation user-add\" novalida>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom5\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Old Password</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <div class=\"input-group\">\n                                    <input class=\"form-control \" formControlName=\"oldpassword\" id=\"validationCustom5\"\n                                           type=\"password\" placeholder=\"Old Password\" maxlength=\"20\" required=\"\"\n                                           [type]=\"conps ? 'password' : 'text'\">\n                                    <div class=\"input-group-append\">\n                                                        <span class=\"input-group-text\" id=\"basic-addon2\"\n                                                              style=\"cursor: pointer\">\n                                                            <i [class]=\"conps ? 'fa fa-eye-slash' : 'fa fa-eye'\"\n                                                               aria-hidden=\"true\" (click)=\"conps = !conps\"></i>\n                                                        </span>\n                                    </div>\n                                </div>\n                                <em class=\"error\"\n                                    *ngIf=\"accountForm.get('oldpassword').hasError('required') && (accountForm.get('oldpassword').dirty || accountForm.get('oldpassword').touched)\">Old\n                                    Password is required</em>\n                                <em *ngIf=\"accountForm.get('oldpassword').hasError('minlength')\" class=\"error\">Minimum 5\n                                    characters required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom0\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                New Password</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <div class=\"input-group\">\n                                    <input class=\"form-control \" formControlName=\"password\" id=\"validationCustom0\"\n                                           type=\"password\" placeholder=\"New Password\" maxlength=\"20\" required=\"\"\n                                           [type]=\"conps1 ? 'password' : 'text'\">\n                                    <div class=\"input-group-append\">\n                                                        <span class=\"input-group-text\" id=\"basic-addon32\"\n                                                              style=\"cursor: pointer\">\n                                                            <i [class]=\"conps1 ? 'fa fa-eye-slash' : 'fa fa-eye'\"\n                                                               aria-hidden=\"true\" (click)=\"conps1 = !conps1\"></i>\n                                                        </span>\n                                    </div>\n                                </div>\n                                <em class=\"error\"\n                                    *ngIf=\"accountForm.get('password').hasError('required') && (accountForm.get('password').dirty || accountForm.get('password').touched)\">Password\n                                    is required</em>\n                                <em *ngIf=\"accountForm.get('password').hasError('minlength')\" class=\"error\">Minimum 5\n                                    characters required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Confirm Password</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" formControlName=\"confirmPassword\" id=\"validationCustom1\"\n                                           type=\"password\" placeholder=\"Confirm Password\" required=\"\"\n                                           [type]=\"conps2 ? 'password' : 'text'\">\n                                    <div class=\"input-group-append\">\n                                                        <span class=\"input-group-text\" id=\"basic-addon31\"\n                                                              style=\"cursor: pointer\">\n                                                            <i [class]=\"conps2 ? 'fa fa-eye-slash' : 'fa fa-eye'\"\n                                                               aria-hidden=\"true\" (click)=\"conps2 = !conps2\"></i>\n                                                        </span>\n                                    </div>\n                                </div>\n                                <em class=\"error\"\n                                    *ngIf=\"!accountForm.get('confirmPassword').valid && (accountForm.get('confirmPassword').dirty || accountForm.get('confirmPassword').touched)\">Confirm\n                                    Password is required</em>\n                                <div *ngIf=\"checkPasswords()\">\n                                    <em class=\"error help-block\">\n                                        Enter same password as above\n                                    </em>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                    <div class=\"pull-right mt-2\">\n                        <button type=\"button\" (click)=\"changePassword()\" class=\"btn btn-primary\">Submit</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Container-fluid Ends-->\n" }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.CommonDataService }, { type: i3.ToastrService }, { type: i4.AuthService }, { type: i5.CategoryService }, { type: i6.Router }, { type: i7.ValidationService }, { type: i8.EnvironmentService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ChangePasswordComponent, { className: "ChangePasswordComponent" }); })();
//# sourceMappingURL=change-password.component.js.map