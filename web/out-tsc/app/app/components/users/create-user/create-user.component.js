import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "../../../shared/service/common-data.service";
import * as i4 from "ngx-toastr";
import * as i5 from "../../../shared/service/auth.service";
import * as i6 from "../../../shared/service/category.service";
import * as i7 from "../../../shared/service/validation.service";
import * as i8 from "@angular/common";
import * as i9 from "@ng-bootstrap/ng-bootstrap";
function CreateUserComponent_em_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function CreateUserComponent_em_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Last name is required");
    i0.ɵɵelementEnd();
} }
function CreateUserComponent_em_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Mobile is required");
    i0.ɵɵelementEnd();
} }
function CreateUserComponent_em_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function CreateUserComponent_em_79_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Role is required");
    i0.ɵɵelementEnd();
} }
function CreateUserComponent_em_87_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Location is required");
    i0.ɵɵelementEnd();
} }
export class CreateUserComponent {
    constructor(route, formBuilder, commondata, toastr, auth, category, router, validation, datePipe) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.commondata = commondata;
        this.toastr = toastr;
        this.auth = auth;
        this.category = category;
        this.router = router;
        this.validation = validation;
        this.datePipe = datePipe;
        this.accountForm = this.formBuilder.group({
            fname: ['', Validators.required],
            lname: ['', Validators.required],
            email: ['', Validators.required],
            mobile: ['', Validators.required],
            role: ['', Validators.required],
            gender: '',
            location: ['', Validators.required],
            dob: ''
        });
    }
    ngOnInit() {
        this.commondata.showLoader(false);
    }
    addUser() {
        if (this.accountForm.valid) {
            this.commondata.showLoader(true);
            const data = {
                platform: 'web',
                role_id: this.auth.getSessionData('go-roleid'),
                user_id: this.auth.getSessionData('go-userid'),
                first_name: this.accountForm.controls.fname.value,
                last_name: this.accountForm.controls.lname.value,
                email_id: this.accountForm.controls.email.value,
                mobile: this.accountForm.controls.mobile.value,
                user_type: this.accountForm.controls.role.value,
                location: this.accountForm.controls.location.value,
                birthday: this.accountForm.controls.dob.value == null ? '' : this.datePipe.transform(this.accountForm.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd'),
                gender: this.accountForm.controls.gender.value
            };
            this.category.getAddUser(data).subscribe((successData) => {
                this.addUserSuccess(successData);
            }, (error) => {
                this.addUserFailure(error);
            });
        }
        else {
            this.validation.validateAllFormFields(this.accountForm);
        }
    }
    addUserSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success(successData.ResponseObject, 'User');
            this.router.navigate(['/users/list-user']);
        }
        else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, 'User');
        }
    }
    addUserFailure(error) {
        console.log(error, 'error');
    }
    static { this.ɵfac = function CreateUserComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CreateUserComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.CommonDataService), i0.ɵɵdirectiveInject(i4.ToastrService), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.CategoryService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i7.ValidationService), i0.ɵɵdirectiveInject(i8.DatePipe)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CreateUserComponent, selectors: [["app-create-user"]], decls: 91, vars: 8, consts: [["d", "ngbDatepicker"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header"], [1, "text-capitalize"], [1, "card-body", "tab2-card"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "fname", "id", "validationCustom0", "type", "text", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["formControlName", "lname", "id", "validationCustom1", "type", "text", "required", "", 1, "form-control"], ["for", "validationCustom6", 1, "col-xl-3", "col-md-4"], [2, "visibility", "hidden"], ["formControlName", "gender", "id", "validationCustom6", 1, "form-control"], ["selected", "", "disabled", ""], ["value", "male"], ["value", "female"], [1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7", "form-group"], [1, "d-flex", "align-items-baseline"], ["placeholder", "yyyy-mm-dd", "name", "dp", "formControlName", "dob", "ngbDatepicker", "", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-calendar"], ["formControlName", "mobile", "id", "validationCustom3", "type", "text", "required", "", 1, "form-control"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["formControlName", "email", "id", "validationCustom2", "type", "text", "required", "", 1, "form-control"], ["for", "validationCustom5", 1, "col-xl-3", "col-md-4"], ["formControlName", "role", "id", "validationCustom5", 1, "form-control"], ["value", "1"], ["value", "2"], ["for", "validationCustom8", 1, "col-xl-3", "col-md-4"], ["formControlName", "location", "id", "validationCustom8", "type", "text", "required", "", 1, "form-control"], [1, "pull-right"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "error"]], template: function CreateUserComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h5", 6);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 7)(8, "form", 8)(9, "div", 9)(10, "label", 10)(11, "span");
            i0.ɵɵtext(12, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, " First Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 11);
            i0.ɵɵelement(15, "input", 12);
            i0.ɵɵtemplate(16, CreateUserComponent_em_16_Template, 2, 0, "em", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 9)(18, "label", 14)(19, "span");
            i0.ɵɵtext(20, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(21, " Last Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 11);
            i0.ɵɵelement(23, "input", 15);
            i0.ɵɵtemplate(24, CreateUserComponent_em_24_Template, 2, 0, "em", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div", 9)(26, "label", 16)(27, "span", 17);
            i0.ɵɵtext(28, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(29, " Gender");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div", 11)(31, "select", 18)(32, "option", 19);
            i0.ɵɵtext(33, "--Select--");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "option", 20);
            i0.ɵɵtext(35, "Male");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "option", 21);
            i0.ɵɵtext(37, "Female");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(38, "div", 9)(39, "label", 22)(40, "span", 17);
            i0.ɵɵtext(41, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(42, " DOB");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div", 23)(44, "div", 24);
            i0.ɵɵelement(45, "input", 25, 0);
            i0.ɵɵelementStart(47, "div", 26)(48, "button", 27);
            i0.ɵɵlistener("click", function CreateUserComponent_Template_button_click_48_listener() { i0.ɵɵrestoreView(_r1); const d_r2 = i0.ɵɵreference(46); return i0.ɵɵresetView(d_r2.toggle()); });
            i0.ɵɵelement(49, "i", 28);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(50, "div", 9)(51, "label", 14)(52, "span");
            i0.ɵɵtext(53, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(54, " Mobile");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "div", 11);
            i0.ɵɵelement(56, "input", 29);
            i0.ɵɵtemplate(57, CreateUserComponent_em_57_Template, 2, 0, "em", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(58, "div", 9)(59, "label", 30)(60, "span");
            i0.ɵɵtext(61, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(62, " Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "div", 11);
            i0.ɵɵelement(64, "input", 31);
            i0.ɵɵtemplate(65, CreateUserComponent_em_65_Template, 2, 0, "em", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(66, "div", 9)(67, "label", 32)(68, "span");
            i0.ɵɵtext(69, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(70, " Role");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "div", 11)(72, "select", 33)(73, "option", 19);
            i0.ɵɵtext(74, "--Select--");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "option", 34);
            i0.ɵɵtext(76, "Admin");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "option", 35);
            i0.ɵɵtext(78, "User");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(79, CreateUserComponent_em_79_Template, 2, 0, "em", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(80, "div", 9)(81, "label", 36)(82, "span");
            i0.ɵɵtext(83, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(84, " Location");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "div", 11);
            i0.ɵɵelement(86, "input", 37);
            i0.ɵɵtemplate(87, CreateUserComponent_em_87_Template, 2, 0, "em", 13);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(88, "div", 38)(89, "button", 39);
            i0.ɵɵlistener("click", function CreateUserComponent_Template_button_click_89_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addUser()); });
            i0.ɵɵtext(90, "Save");
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.type, " User");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.accountForm);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.accountForm.get("fname").valid && (ctx.accountForm.get("fname").dirty || ctx.accountForm.get("fname").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.accountForm.get("lname").valid && (ctx.accountForm.get("lname").dirty || ctx.accountForm.get("lname").touched));
            i0.ɵɵadvance(33);
            i0.ɵɵproperty("ngIf", !ctx.accountForm.get("mobile").valid && (ctx.accountForm.get("mobile").dirty || ctx.accountForm.get("mobile").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.accountForm.get("email").valid && (ctx.accountForm.get("email").dirty || ctx.accountForm.get("email").touched));
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("ngIf", !ctx.accountForm.get("role").valid && (ctx.accountForm.get("role").dirty || ctx.accountForm.get("role").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.accountForm.get("location").valid && (ctx.accountForm.get("location").dirty || ctx.accountForm.get("location").touched));
        } }, dependencies: [i8.NgIf, i9.NgbInputDatepicker, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.FormGroupDirective, i2.FormControlName] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateUserComponent, [{
        type: Component,
        args: [{ selector: 'app-create-user', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <h5 class=\"text-capitalize\"> {{type}} User</h5>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"accountForm\" class=\"needs-validation user-add\" novalida>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom0\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                First Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control \" formControlName=\"fname\" id=\"validationCustom0\"\n                                       type=\"text\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!accountForm.get('fname').valid && (accountForm.get('fname').dirty || accountForm.get('fname').touched)\">First name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span> Last\n                                Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"lname\" id=\"validationCustom1\"\n                                       type=\"text\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!accountForm.get('lname').valid && (accountForm.get('lname').dirty || accountForm.get('lname').touched)\">Last name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom6\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Gender</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control\" formControlName=\"gender\" id=\"validationCustom6\">\n                                    <option selected disabled>--Select--</option>\n                                    <option value=\"male\">Male</option>\n                                    <option value=\"female\">Female</option>\n                                </select>\n<!--                                <em class=\"error\" *ngIf=\"!accountForm.get('gender').valid && (accountForm.get('gender').dirty || accountForm.get('gender').touched)\">Gender is required</em>-->\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label  class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                DOB</label>\n                            <div class=\"col-xl-8 col-md-7 form-group\">\n                                <div class=\"d-flex align-items-baseline\">\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                       name=\"dp\"  formControlName=\"dob\" ngbDatepicker #d=\"ngbDatepicker\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></button>\n                                </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Mobile</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"mobile\" id=\"validationCustom3\"\n                                       type=\"text\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!accountForm.get('mobile').valid && (accountForm.get('mobile').dirty || accountForm.get('mobile').touched)\">Mobile is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom2\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Email</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"email\" id=\"validationCustom2\"\n                                       type=\"text\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!accountForm.get('email').valid && (accountForm.get('email').dirty || accountForm.get('email').touched)\">Email is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom5\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Role</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control\" formControlName=\"role\" id=\"validationCustom5\">\n                                    <option selected disabled>--Select--</option>\n                                    <option value=\"1\">Admin</option>\n                                    <option value=\"2\">User</option>\n                                </select>\n                                <em class=\"error\" *ngIf=\"!accountForm.get('role').valid && (accountForm.get('role').dirty || accountForm.get('role').touched)\">Role is required</em>\n                            </div>\n                        </div>\n\n\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom8\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Location</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"location\" id=\"validationCustom8\"\n                                       type=\"text\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!accountForm.get('location').valid && (accountForm.get('location').dirty || accountForm.get('location').touched)\">Location is required</em>\n                            </div>\n                        </div>\n                    </form>\n                    <div class=\"pull-right\">\n                        <button type=\"button\" (click)=\"addUser()\" class=\"btn btn-primary\">Save</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Container-fluid Ends-->\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.CommonDataService }, { type: i4.ToastrService }, { type: i5.AuthService }, { type: i6.CategoryService }, { type: i1.Router }, { type: i7.ValidationService }, { type: i8.DatePipe }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CreateUserComponent, { className: "CreateUserComponent" }); })();
//# sourceMappingURL=create-user.component.js.map