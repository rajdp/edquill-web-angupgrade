import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "@angular/forms";
import * as i3 from "../../shared/service/auth.service";
import * as i4 from "../../shared/service/student.service";
import * as i5 from "ngx-toastr";
import * as i6 from "@angular/router";
import * as i7 from "@angular/common";
const _c0 = ["loginTemplate"];
const _c1 = ["registerTemplate"];
const _c2 = ["userNameFocus"];
function EnrollclasscodeComponent_ng_template_23_em_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function EnrollclasscodeComponent_ng_template_23_em_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function EnrollclasscodeComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "h4", 24);
    i0.ɵɵtext(2, "Login");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 25);
    i0.ɵɵlistener("click", function EnrollclasscodeComponent_ng_template_23_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 26)(5, "div", 10)(6, "div", 11)(7, "div", 27)(8, "form", 28)(9, "div", 29);
    i0.ɵɵelement(10, "input", 30, 2);
    i0.ɵɵtemplate(12, EnrollclasscodeComponent_ng_template_23_em_12_Template, 2, 0, "em", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 29)(14, "div", 32);
    i0.ɵɵelement(15, "input", 33);
    i0.ɵɵelementStart(16, "div", 34)(17, "span", 35)(18, "i", 36);
    i0.ɵɵlistener("click", function EnrollclasscodeComponent_ng_template_23_Template_i_click_18_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.conps = !ctx_r2.conps); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(19, EnrollclasscodeComponent_ng_template_23_em_19_Template, 2, 0, "em", 31);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(20, "div", 37)(21, "button", 38);
    i0.ɵɵlistener("click", function EnrollclasscodeComponent_ng_template_23_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.newRegister()); });
    i0.ɵɵtext(22, "New Register");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 39);
    i0.ɵɵlistener("click", function EnrollclasscodeComponent_ng_template_23_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitLoginForm()); });
    i0.ɵɵtext(24, "Submit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("formGroup", ctx_r2.loginForm);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r2.loginForm.get("userName").valid && (ctx_r2.loginForm.get("userName").dirty || ctx_r2.loginForm.get("userName").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r2.conps ? "password" : "text");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r2.conps ? "fa fa-eye-slash" : "fa fa-eye");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.loginForm.get("password").valid && (ctx_r2.loginForm.get("password").dirty || ctx_r2.loginForm.get("password").touched));
} }
function EnrollclasscodeComponent_ng_template_25_em_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function EnrollclasscodeComponent_ng_template_25_em_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Last name is required");
    i0.ɵɵelementEnd();
} }
function EnrollclasscodeComponent_ng_template_25_em_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Gender is required");
    i0.ɵɵelementEnd();
} }
function EnrollclasscodeComponent_ng_template_25_em_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function EnrollclasscodeComponent_ng_template_25_em_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function EnrollclasscodeComponent_ng_template_25_div_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "em", 70);
    i0.ɵɵtext(2, " Enter same password as above ");
    i0.ɵɵelementEnd()();
} }
function EnrollclasscodeComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "h4", 24);
    i0.ɵɵtext(2, "Register");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 25);
    i0.ɵɵlistener("click", function EnrollclasscodeComponent_ng_template_25_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.exit()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 26)(5, "div", 10)(6, "div", 11)(7, "div", 27)(8, "form", 28)(9, "div", 41)(10, "label", 42)(11, "span");
    i0.ɵɵtext(12, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 43);
    i0.ɵɵelement(15, "input", 44);
    i0.ɵɵtemplate(16, EnrollclasscodeComponent_ng_template_25_em_16_Template, 2, 0, "em", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 41)(18, "label", 45)(19, "span");
    i0.ɵɵtext(20, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21, " Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 43);
    i0.ɵɵelement(23, "input", 46);
    i0.ɵɵtemplate(24, EnrollclasscodeComponent_ng_template_25_em_24_Template, 2, 0, "em", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 41)(26, "label", 47)(27, "span", 48);
    i0.ɵɵtext(28, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(29, " Gender");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 43)(31, "select", 49)(32, "option", 50);
    i0.ɵɵtext(33, "Select Gender");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 51);
    i0.ɵɵtext(35, "Male");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 52);
    i0.ɵɵtext(37, "Female");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "option", 53);
    i0.ɵɵtext(39, "Do not want to disclose");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(40, EnrollclasscodeComponent_ng_template_25_em_40_Template, 2, 0, "em", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 41)(42, "label", 54)(43, "span");
    i0.ɵɵtext(44, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(45, " Email Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "div", 43);
    i0.ɵɵelement(47, "input", 55);
    i0.ɵɵtemplate(48, EnrollclasscodeComponent_ng_template_25_em_48_Template, 2, 0, "em", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "div", 41)(50, "label", 56)(51, "span");
    i0.ɵɵtext(52, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(53, " Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "div", 43)(55, "div", 32);
    i0.ɵɵelement(56, "input", 57);
    i0.ɵɵelementStart(57, "div", 34)(58, "span", 58)(59, "i", 36);
    i0.ɵɵlistener("click", function EnrollclasscodeComponent_ng_template_25_Template_i_click_59_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.conps = !ctx_r2.conps); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(60, EnrollclasscodeComponent_ng_template_25_em_60_Template, 2, 0, "em", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "div", 41)(62, "label", 54)(63, "span");
    i0.ɵɵtext(64, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(65, " Confirm Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "div", 43)(67, "div", 32);
    i0.ɵɵelement(68, "input", 59);
    i0.ɵɵelementStart(69, "div", 34)(70, "span", 60)(71, "i", 61);
    i0.ɵɵlistener("click", function EnrollclasscodeComponent_ng_template_25_Template_i_click_71_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.conps1 = !ctx_r2.conps1); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(72, EnrollclasscodeComponent_ng_template_25_div_72_Template, 3, 0, "div", 62);
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(73, "div", 37)(74, "div", 63)(75, "div", 64)(76, "button", 65);
    i0.ɵɵlistener("click", function EnrollclasscodeComponent_ng_template_25_Template_button_click_76_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.exit()); });
    i0.ɵɵelement(77, "i", 66);
    i0.ɵɵtext(78, "Back to login ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(79, "div", 67)(80, "button", 68);
    i0.ɵɵlistener("click", function EnrollclasscodeComponent_ng_template_25_Template_button_click_80_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.formresetValue()); });
    i0.ɵɵtext(81, "Reset");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "button", 69);
    i0.ɵɵlistener("click", function EnrollclasscodeComponent_ng_template_25_Template_button_click_82_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitRegisterForm()); });
    i0.ɵɵtext(83, "Submit");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("formGroup", ctx_r2.registerForm);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r2.registerForm.get("first_name").valid && (ctx_r2.registerForm.get("first_name").dirty || ctx_r2.registerForm.get("first_name").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r2.registerForm.get("last_name").valid && (ctx_r2.registerForm.get("last_name").dirty || ctx_r2.registerForm.get("last_name").touched));
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngIf", !ctx_r2.registerForm.get("gender").valid && (ctx_r2.registerForm.get("gender").dirty || ctx_r2.registerForm.get("gender").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r2.registerForm.get("email_id").valid && (ctx_r2.registerForm.get("email_id").dirty || ctx_r2.registerForm.get("email_id").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("type", ctx_r2.conps ? "password" : "text");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r2.conps ? "fa fa-eye-slash" : "fa fa-eye");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.registerForm.get("password").valid && (ctx_r2.registerForm.get("password").dirty || ctx_r2.registerForm.get("password").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("type", ctx_r2.conps1 ? "password" : "text");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r2.conps1 ? "fa fa-eye-slash" : "fa fa-eye");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.checkPasswords());
} }
export class EnrollclasscodeComponent {
    constructor(modalService, formBuilder, auth, student, toastr, route, activateRoute) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.student = student;
        this.toastr = toastr;
        this.route = route;
        this.activateRoute = activateRoute;
        this.classCode = '';
        this.activateRoute.params.forEach((params) => {
            this.classCode = params.type;
            localStorage.setItem('studentClassCode', this.classCode);
        });
        if (this.auth.getAccessToken() === undefined || this.auth.getAccessToken() === '' || this.auth.getAccessToken() == null) {
            // this.route.navigate(['/enrollclasscode/' + this.classCode]);
        }
        else {
            // setTimeout(function(){
            if (this.auth.getRoleId() == '5') {
                this.route.navigate(['/studentlogin/enrollclass']);
            }
            else {
                // this.route.navigate(['/enrollclasscode/' + this.classCode]);
            }
            // },3000);
        }
        this.conps = true;
        this.conps1 = true;
        this.loginForm = this.formBuilder.group({
            userName: '',
            password: '',
        });
        this.formresetValue();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.userNameFocus.nativeElement.focus();
    }
    checkPasswords() {
        const pass = this.registerForm.controls.password.value;
        const confirmPass = this.registerForm.controls.confirmpassword.value;
        if (pass === confirmPass) {
            this.passwordValid = false;
        }
        else {
            this.passwordValid = true;
        }
        return this.passwordValid;
    }
    enrollClassLogin() {
        if (this.classCode == '' || this.classCode == 0 || this.classCode == null) {
            this.toastr.error('Please enter valid class code');
        }
        else {
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
    }
    checkClassCodeSuccess(successData) {
        if (successData.IsSuccess) {
            this.route.navigate(['/auth/login']);
            localStorage.setItem('studentClassCode', this.classCode);
        }
        else {
            this.toastr.error(successData.ErrorObject, '');
        }
    }
    close() {
        this.modalRef.close();
    }
    exit() {
        this.modalRef1.close();
    }
    submitLoginForm() {
        // {"platform":"web","role_id":"2","user_id":"3032","class_code":"4PGQADRU6W","email_id":"hemaramesh93@gmail.com","password":"123456"}
        if (this.loginForm.get('userName').value == '' || this.loginForm.get('password').value == '') {
            this.toastr.error('Please enter valid fields');
        }
        else {
            const data = {
                platform: 'web',
                class_code: this.classCode,
                email_id: this.loginForm.controls.userName.value,
                password: this.loginForm.controls.password.value
            };
            console.log(data, 'Logindata');
            this.student.enrollLoginClass(data).subscribe((successData) => {
                this.enrollLoginClassSuccess(successData);
            }, (error) => {
                this.enrollLoginClassFailure(error);
            });
        }
    }
    enrollLoginClassSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.error(successData.ResponseObject, '');
        }
        else {
            this.toastr.error(successData.ErrorObject, '');
        }
    }
    enrollLoginClassFailure(error) {
        console.log(error, 'Error');
    }
    newRegister() {
        //Register template
        this.formresetValue();
        this.modalRef1 = this.modalService.open(this.modalContent1, { size: 'lg', backdrop: 'static' });
        this.modalRef1.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    submitRegisterForm() {
        /* "platform": "web","class_code": "4PGQADRU6W","email_id": "example@gmail.com","password": "123456","first_name": "ABC","last_name": "TR","gender": "male",*/
        if (this.registerForm.get('email_id').value == '' || this.registerForm.get('password').value == '' || this.registerForm.get('first_name').value == '' || this.registerForm.get('last_name').value == '' ||
            this.registerForm.get('gender').value == '' || this.registerForm.get('confirmpassword').value == '') {
            this.toastr.error('Please fill all mandatory field');
        }
        else {
            const data = {
                platform: 'web',
                class_code: this.classCode,
                email_id: this.registerForm.controls.email_id.value,
                password: this.registerForm.controls.password.value,
                first_name: this.registerForm.controls.first_name.value,
                last_name: this.registerForm.controls.last_name.value,
                gender: this.registerForm.controls.gender.value,
                user_id: '0'
            };
            console.log(data, 'RegisterData');
            this.student.enrollRegisterClass(data).subscribe((successData) => {
                this.enrollRegisterClassSuccess(successData);
            }, (error) => {
                this.enrollRegisterClassFailure(error);
            });
        }
    }
    // gradeList() {
    //     const data = {
    //         platform: 'web',
    //         role_id: '2',
    //         user_id: '3032',
    //         school_id: '303',
    //         type: 'active'
    //     };
    //     this.student.getgradeList(data).subscribe((successData) => {
    //             this.gradeListSuccess(successData);
    //         },
    //         (error) => {
    //             this.gradeListFailure(error);
    //         });
    // }
    //
    // gradeListSuccess(successData) {
    //     console.log(successData, 'successData');
    //     if (successData.IsSuccess) {
    //         this.gradeData = successData.ResponseObject;
    //
    //     }
    // }
    //
    // gradeListFailure(error) {
    //     console.log(error, 'error');
    // }
    enrollRegisterClassSuccess(successData) {
        if (successData.IsSuccess) {
            this.response = successData.ResponseObject;
            this.toastr.success(successData.ResponseObject, '');
            this.route.navigate(['auth/login']);
            this.modalRef.close();
            this.modalRef1.close();
            this.formresetValue();
        }
        else {
            this.toastr.error(successData.ErrorObject, '');
        }
    }
    enrollRegisterClassFailure(error) {
        console.log(error, 'error');
    }
    formresetValue() {
        this.registerForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            gender: '',
            grade: ['', Validators.required],
            email_id: ['', Validators.required],
            password: ['', Validators.required],
            confirmpassword: ''
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
    static { this.ɵfac = function EnrollclasscodeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EnrollclasscodeComponent)(i0.ɵɵdirectiveInject(i1.NgbModal), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.StudentService), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i6.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EnrollclasscodeComponent, selectors: [["app-enrollclasscode"]], viewQuery: function EnrollclasscodeComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContent1 = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.userNameFocus = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 27, vars: 2, consts: [["loginTemplate", ""], ["registerTemplate", ""], ["userNameFocus", ""], [1, "page-wrapper", "auth-bg"], [1, "authentication-box"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-10", "p-0", "card-right"], [1, "card"], [1, "card-body"], [1, "container-fluid"], [1, "row"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "b-title"], ["alt", "", "src", "assets/images/EdQuill.png", 2, "width", "auto", "height", "32px"], [1, "col-12", "mt-2", "d-flex", "justify-content-around"], [1, "card", "col-12", "p-4"], ["maxlength", "10", "placeholder", "Enter the class code", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-6"], ["type", "button", 1, "btn", "btn-outline-primary", "py-1", "px-3", 3, "routerLink"], [1, "col-6", "text-right"], ["type", "button", 1, "btn", "btn-primary", "py-1", "px-3", 3, "click"], ["let", "", "c", "close"], [1, "modal-header"], [1, "r-title"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-lg", "mt-1", 2, "color", "#7F3486", "cursor", "pointer", "float", "right", 3, "click"], [1, "modal-body"], [1, "col-sm-12"], [3, "formGroup"], [1, "form-group"], ["autofocus", "", "required", "", "name", "login[username]", "type", "email", "placeholder", "Email", "autocomplete", "new-user", "formControlName", "userName", 1, "form-control"], ["class", "error", 4, "ngIf"], [1, "input-group"], ["required", "", "name", "login[password]", "type", "text", "formControlName", "password", "placeholder", "Password", "aria-label", "Recipient's username", "aria-describedby", "basic-addon1", "autocomplete", "new-pass", 1, "form-control", 3, "type"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], ["aria-hidden", "true", 3, "click"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-success-gradien", 3, "click"], [1, "error"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "first_name", "id", "validationCustom0", "type", "text", "placeholder", "First Name", "required", "", 1, "form-control"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["formControlName", "last_name", "id", "validationCustom1", "type", "text", "placeholder", "Last Name", "required", "", 1, "form-control"], ["for", "validationCustom07", 1, "col-xl-3", "col-md-4"], [2, "visibility", "hidden"], ["formControlName", "gender", "id", "validationCustom07", 1, "form-control"], ["value", ""], ["value", "male"], ["value", "female"], ["value", "n/a"], ["for", "validationCustom5", 1, "col-xl-3", "col-md-4"], ["formControlName", "email_id", "id", "validationCustom5", "type", "email", "placeholder", "Email", "autocomplete", "off", "required", "", 1, "form-control"], [1, "col-xl-3", "col-md-4"], ["type", "text", "formControlName", "password", "placeholder", "Password", "autocomplete", "new-password", 1, "form-control", 3, "type"], ["id", "basic-addon3", 1, "input-group-text"], ["required", "", "type", "text", "formControlName", "confirmpassword", "placeholder", "Confirm Password", "aria-label", "Recipient's username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "type"], ["id", "basic-addon4", 1, "input-group-text"], ["aria-hidden", "true", 2, "color", "#7F3486", 3, "click"], [4, "ngIf"], [1, "col-12", "d-flex"], [1, "col-4"], [1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-left", "fa-1x", "mr-2"], [1, "col-8", "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-danger-gradien", 3, "click"], ["type", "button", 1, "btn", "btn-success-gradien", "ml-2", 3, "click"], [1, "error", "help-block"]], template: function EnrollclasscodeComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "div", 9)(7, "div", 10)(8, "div", 11)(9, "div", 12)(10, "h6", 13);
            i0.ɵɵtext(11, "Enter the class code");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "img", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 15)(14, "div", 16)(15, "input", 17);
            i0.ɵɵtwoWayListener("ngModelChange", function EnrollclasscodeComponent_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.classCode, $event) || (ctx.classCode = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(16, "div", 11)(17, "div", 18)(18, "button", 19);
            i0.ɵɵtext(19, "Home");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 20)(21, "button", 21);
            i0.ɵɵlistener("click", function EnrollclasscodeComponent_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.enrollClassLogin()); });
            i0.ɵɵtext(22, "Submit ");
            i0.ɵɵelementEnd()()()()()()()()()()();
            i0.ɵɵtemplate(23, EnrollclasscodeComponent_ng_template_23_Template, 25, 6, "ng-template", 22, 0, i0.ɵɵtemplateRefExtractor)(25, EnrollclasscodeComponent_ng_template_25_Template, 84, 13, "ng-template", 22, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵtwoWayProperty("ngModel", ctx.classCode);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", "/auth/login");
        } }, dependencies: [CommonModule, i7.NgIf, FormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MaxLengthValidator, i2.NgModel, ReactiveFormsModule, i2.FormGroupDirective, i2.FormControlName, RouterModule, i6.RouterLink] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EnrollclasscodeComponent, [{
        type: Component,
        args: [{ selector: 'app-enrollclasscode', standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule], template: "<div class=\"page-wrapper auth-bg\">\n    <div class=\"authentication-box\">\n        <div class=\"container\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-12 col-md-10 p-0 card-right\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"container-fluid\">\n                                <div class=\"row\">\n                                    <div class=\"col-12 d-flex align-items-center justify-content-between\">\n                                        <h6 class=\"b-title\">Enter the class code</h6>\n                                        <img alt=\"\" src=\"assets/images/EdQuill.png\" style=\"width: auto; height: 32px;\">\n                                    </div>\n                                    <div class=\"col-12 mt-2 d-flex justify-content-around\">\n                                        <div class=\"card col-12 p-4\">\n                                            <input class=\"form-control\" [(ngModel)]=\"classCode\" maxlength=\"10\"\n                                                placeholder=\"Enter the class code\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <!-- <div class=\"col-6\">\n                                        <a title=\"Home-Page\" [routerLink]=\"'/auth/login'\">\n                                            <app-feather-icons [icon]=\"'home'\"></app-feather-icons>\n                                        </a>\n                                    </div> -->\n                                    <div class=\"col-6\">\n                                        <button type=\"button\" class=\"btn btn-outline-primary  py-1 px-3\"\n                                            [routerLink]=\"'/auth/login'\">Home</button>\n                                    </div>\n                                    <div class=\"col-6 text-right\">\n                                        <button type=\"button\" class=\"btn btn-primary py-1 px-3\"\n                                            (click)=\"enrollClassLogin()\">Submit\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--Login Template-->\n<ng-template #loginTemplate let c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"r-title\">Login</h4>\n        <i class=\"fa fa-close fa-lg mt-1\" aria-hidden=\"true\" style=\"color:#7F3486; cursor: pointer; float: right;\"\n            (click)=\"close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <form [formGroup]=\"loginForm\">\n                        <div class=\"form-group\">\n                            <input #userNameFocus autofocus required=\"\" name=\"login[username]\" type=\"email\" class=\"form-control\"\n                                placeholder=\"Email\" autocomplete=\"new-user\" formControlName=\"userName\">\n                            <em class=\"error\"\n                                *ngIf=\"!loginForm.get('userName').valid && (loginForm.get('userName').dirty || loginForm.get('userName').touched)\">Email\n                                is required</em>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <input required=\"\" name=\"login[password]\" type=\"text\" formControlName=\"password\"\n                                    class=\"form-control\" placeholder=\"Password\" aria-label=\"Recipient's username\"\n                                    aria-describedby=\"basic-addon1\" autocomplete=\"new-pass\"\n                                    [type]=\"conps ? 'password' : 'text'\">\n                                <div class=\"input-group-append\">\n                                    <span class=\"input-group-text\" id=\"basic-addon2\">\n                                        <i [class]=\"conps ? 'fa fa-eye-slash' : 'fa fa-eye'\" aria-hidden=\"true\"\n                                            (click)=\"conps = !conps\"></i>\n                                    </span>\n                                </div>\n                            </div>\n                            <em class=\"error\"\n                                *ngIf=\"!loginForm.get('password').valid && (loginForm.get('password').dirty || loginForm.get('password').touched)\">Password\n                                is required</em>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"newRegister()\">New Register</button>\n        <button type=\"button\" class=\"btn btn-success-gradien\" (click)=\"submitLoginForm()\">Submit</button>\n    </div>\n</ng-template>\n\n<!--Register Template-->\n<ng-template #registerTemplate let c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"r-title\">Register</h4>\n        <i class=\"fa fa-close fa-lg mt-1\" aria-hidden=\"true\" style=\"color:#7F3486; cursor: pointer; float: right;\"\n            (click)=\"exit()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <form [formGroup]=\"registerForm\">\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom0\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                First Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"first_name\" id=\"validationCustom0\"\n                                    type=\"text\" placeholder=\"First Name\" required=\"\">\n                                <em class=\"error\"\n                                    *ngIf=\"!registerForm.get('first_name').valid && (registerForm.get('first_name').dirty || registerForm.get('first_name').touched)\">First\n                                    name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Last Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control \" formControlName=\"last_name\" id=\"validationCustom1\"\n                                    type=\"text\" placeholder=\"Last Name\" required=\"\">\n                                <em class=\"error\"\n                                    *ngIf=\"!registerForm.get('last_name').valid && (registerForm.get('last_name').dirty || registerForm.get('last_name').touched)\">Last\n                                    name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom07\" class=\"col-xl-3 col-md-4\"><span\n                                    style=\"visibility: hidden\">*</span>\n                                Gender</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control\" formControlName=\"gender\" id=\"validationCustom07\">\n                                    <option value=\"\">Select Gender</option>\n                                    <option value=\"male\">Male</option>\n                                    <option value=\"female\">Female</option>\n                                    <option value=\"n/a\">Do not want to disclose</option>\n                                </select>\n                                <em class=\"error\"\n                                    *ngIf=\"!registerForm.get('gender').valid && (registerForm.get('gender').dirty || registerForm.get('gender').touched)\">Gender\n                                    is required</em>\n                            </div>\n                        </div>\n                        <!--                        <div class=\"form-group row\">-->\n                        <!--                            <label class=\"col-xl-3 col-md-4\"><span>*</span>-->\n                        <!--                                Grade</label>-->\n                        <!--                            <div class=\"col-xl-8 col-md-7\">-->\n                        <!--                                <ng-select [items]=\"gradeData\"-->\n                        <!--                                           bindLabel=\"grade_name\"-->\n                        <!--                                           bindValue=\"grade_id\"-->\n                        <!--                                           formControlName=\"grade\"-->\n                        <!--                                           placeholder=\"Please Select\"-->\n                        <!--                                           typeToSearchText=\"\"-->\n                        <!--                                >-->\n                        <!--                                </ng-select>-->\n                        <!--                                <em class=\"error\"-->\n                        <!--                                    *ngIf=\"!registerForm.get('grade').valid && (registerForm.get('grade').dirty || registerForm.get('grade').touched)\">Grade-->\n                        <!--                                    is required</em>-->\n                        <!--                            </div>-->\n                        <!--                        </div>-->\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom5\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Email Address</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"email_id\" id=\"validationCustom5\"\n                                    type=\"email\" placeholder=\"Email\" autocomplete=\"off\" required=\"\">\n                                <em class=\"error\"\n                                    *ngIf=\"!registerForm.get('email_id').valid && (registerForm.get('email_id').dirty || registerForm.get('email_id').touched)\">Email\n                                    is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Password</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <div class=\"input-group\">\n                                    <input type=\"text\" formControlName=\"password\" class=\"form-control\"\n                                        placeholder=\"Password\" autocomplete=\"new-password\"\n                                        [type]=\"conps ? 'password' : 'text'\">\n                                    <div class=\"input-group-append\">\n                                        <span class=\"input-group-text\" id=\"basic-addon3\">\n                                            <i [class]=\"conps ? 'fa fa-eye-slash' : 'fa fa-eye'\" aria-hidden=\"true\"\n                                                (click)=\"conps = !conps\"></i>\n                                        </span>\n                                    </div>\n                                </div>\n                                <em class=\"error\"\n                                    *ngIf=\"!registerForm.get('password').valid && (registerForm.get('password').dirty || registerForm.get('password').touched)\">Password\n                                    is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom5\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Confirm Password</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <div class=\"input-group\">\n                                    <input required=\"\" type=\"text\" formControlName=\"confirmpassword\"\n                                        class=\"form-control\" placeholder=\"Confirm Password\"\n                                        aria-label=\"Recipient's username\" aria-describedby=\"basic-addon1\"\n                                        [type]=\"conps1 ? 'password' : 'text'\">\n                                    <div class=\"input-group-append\">\n                                        <span class=\"input-group-text\" id=\"basic-addon4\">\n                                            <i [class]=\"conps1 ? 'fa fa-eye-slash' : 'fa fa-eye'\" style=\"color: #7F3486\"\n                                                aria-hidden=\"true\" (click)=\"conps1 = !conps1\"></i>\n                                        </span>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"checkPasswords()\">\n                                    <em class=\"error help-block\">\n                                        Enter same password as above\n                                    </em>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"col-12 d-flex\">\n            <div class=\"col-4\">\n                <button class=\"btn btn-primary\" (click)=\"exit()\">\n                    <i class=\"fa fa-long-arrow-left fa-1x mr-2\" aria-hidden=\"true\"></i>Back to login\n                </button>\n            </div>\n            <div class=\"col-8 d-flex justify-content-end\">\n                <button type=\"button\" class=\"btn btn-danger-gradien\" (click)=\"formresetValue()\">Reset</button>\n                <button class=\"btn btn-success-gradien ml-2\" (click)=\"submitRegisterForm()\"\n                    type=\"button\">Submit</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.NgbModal }, { type: i2.FormBuilder }, { type: i3.AuthService }, { type: i4.StudentService }, { type: i5.ToastrService }, { type: i6.Router }, { type: i6.ActivatedRoute }], { modalContent: [{
            type: ViewChild,
            args: ['loginTemplate']
        }], modalContent1: [{
            type: ViewChild,
            args: ['registerTemplate']
        }], userNameFocus: [{
            type: ViewChild,
            args: ["userNameFocus"]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EnrollclasscodeComponent, { className: "EnrollclasscodeComponent" }); })();
//# sourceMappingURL=enrollclasscode.component.js.map