import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { dateOptions } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "../../../shared/service/common-data.service";
import * as i4 from "ngx-toastr";
import * as i5 from "../../../shared/service/auth.service";
import * as i6 from "../../../shared/service/School.service";
import * as i7 from "../../../shared/service/validation.service";
import * as i8 from "../../../shared/service/admin.service";
import * as i9 from "../../../shared/service/configuration.service";
import * as i10 from "../../../shared/service/common.service";
import * as i11 from "@angular/common";
import * as i12 from "../../../shared/service/newsubject.service";
import * as i13 from "@nodro7/angular-mydatepicker";
const _c0 = ["myInput"];
function AddAdminComponent_em_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 44);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function AddAdminComponent_em_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 44);
    i0.ɵɵtext(1, "Last name is required");
    i0.ɵɵelementEnd();
} }
function AddAdminComponent_em_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 44);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function AddAdminComponent_em_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 44);
    i0.ɵɵtext(1, "Invalid Email-Id");
    i0.ɵɵelementEnd();
} }
function AddAdminComponent_em_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 44);
    i0.ɵɵtext(1, "Contact Number is required");
    i0.ɵɵelementEnd();
} }
function AddAdminComponent_em_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 44);
    i0.ɵɵtext(1, "Gender is required");
    i0.ɵɵelementEnd();
} }
function AddAdminComponent_em_75_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 44);
    i0.ɵɵtext(1, "Date of Birth is required");
    i0.ɵɵelementEnd();
} }
function AddAdminComponent_option_96_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 45);
    i0.ɵɵtext(1, "Deleted");
    i0.ɵɵelementEnd();
} }
function AddAdminComponent_em_97_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 44);
    i0.ɵɵtext(1, "status is required");
    i0.ɵɵelementEnd();
} }
export class AddAdminComponent {
    constructor(route, formBuilder, commondata, toastr, auth, brandservices, router, validationService, adminService, config, common, datePipe, newSubject) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.commondata = commondata;
        this.toastr = toastr;
        this.auth = auth;
        this.brandservices = brandservices;
        this.router = router;
        this.validationService = validationService;
        this.adminService = adminService;
        this.config = config;
        this.common = common;
        this.datePipe = datePipe;
        this.newSubject = newSubject;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            disableSince: {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate() + 1
            },
        };
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.adminForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email_id: ['', [Validators.required, Validators.pattern(this.auth.emailValidatorPattern)]],
            mobile: ['', Validators.required],
            schoolId: ['', Validators.required],
            status: '1',
            gender: '',
            dob: '',
            allowDash: '',
        });
        this.newSubject.schoolChange.subscribe((params) => {
            if (params != '') {
                if (this.router.url.includes('create-admin/add')) {
                    this.init(params);
                }
                else if (this.router.url.includes('create-admin/edit')) {
                    this.init(params);
                }
            }
            else {
                this.init(params);
            }
        });
        if (this.type == 'edit') {
            this.editData = JSON.parse(this.auth.getSessionData('editAdmin'));
            this.adminForm.controls.firstName.patchValue(this.editData.first_name);
            this.adminForm.controls.lastName.patchValue(this.editData.last_name);
            this.adminForm.controls.email_id.patchValue(this.editData.email_id);
            this.adminForm.controls.mobile.patchValue(this.editData.mobile);
            this.adminForm.controls.schoolId.patchValue(this.editData.school_id);
            this.editData.allow_dashboard == '1' ? this.adminForm.controls.allowDash.patchValue(true) :
                this.adminForm.controls.allowDash.patchValue(false);
            if (this.editData.status == 'Active') {
                this.adminForm.controls.status.patchValue(1);
            }
            else if (this.editData.status == 'Suspended') {
                this.adminForm.controls.status.patchValue(2);
            }
            if (this.editData.status == 'Suspended') {
                this.adminForm.controls.status.patchValue(3);
            }
            else if (this.editData.status == 'Deleted') {
                this.adminForm.controls.status.patchValue(4);
            }
            this.adminForm.controls.gender.patchValue(this.editData.gender);
            if (this.editData.birthday != '0000-00-00') {
                const ed = this.editData.birthday.split('-');
                const edObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(ed[0]), parseInt(ed[1]) - 1, parseInt(ed[2])) },
                    dateRange: null
                };
                this.adminForm.controls.dob.patchValue(edObject);
            }
            else {
                this.adminForm.controls.dob.patchValue(null);
            }
        }
        else {
            this.adminForm.reset();
            let schoolid = [];
            schoolid = [this.schoolid];
            if (this.schoolid == 0) {
                this.adminForm.controls.schoolId.patchValue(null);
            }
            else {
                this.adminForm.controls.schoolId.patchValue(schoolid);
            }
            this.adminForm.controls.firstName.patchValue('');
            this.adminForm.controls.lastName.patchValue('');
            this.adminForm.controls.email_id.patchValue('');
            this.adminForm.controls.mobile.patchValue('');
            this.adminForm.controls.status.patchValue('1');
            this.adminForm.controls.gender.patchValue('');
            this.adminForm.controls.dob.patchValue(null);
            this.adminForm.controls.allowDash.patchValue('');
        }
    }
    ngOnInit() {
        this.commondata.showLoader(false);
        // this.schoolList();
        this.allowDropDown = true;
        this.newSubject.allowSchoolChange(this.allowDropDown);
    }
    ngOnDestroy() {
        this.allowDropDown = false;
        this.newSubject.allowSchoolChange(this.allowDropDown);
    }
    datePattern(event) {
        this.validationService.dateValidation(event);
    }
    init(data) {
        this.schoolid = this.auth.getSessionData('school_id');
        if (this.schoolid != 0) {
            this.schoolList();
            this.adminForm.controls.schoolId.patchValue(this.schoolid);
        }
        else {
            this.adminForm.controls.schoolId.patchValue(null);
            this.schoolList();
        }
    }
    addAdmin(value) {
        if (this.adminForm.valid) {
            this.commondata.showLoader(true);
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                first_name: this.adminForm.controls.firstName.value,
                last_name: this.adminForm.controls.lastName.value,
                email_id: this.adminForm.controls.email_id.value,
                mobile: this.adminForm.controls.mobile.value,
                selected_school_id: this.adminForm.controls.schoolId.value,
                status: this.adminForm.controls.status.value,
                birthday: this.adminForm.controls.dob.value == null ? '' : this.datePipe.transform(this.adminForm.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd'),
                gender: this.adminForm.controls.gender.value,
                allow_dashboard: this.adminForm.controls.allowDash.value == true ? '1' : '0'
            };
            if (value == 'add') {
                this.adminService.adminAdd(data).subscribe((successData) => {
                    this.addAdminSuccess(successData);
                }, (error) => {
                    this.addAdminFailure(error);
                });
            }
            else if (value == 'edit') {
                data['selected_user_id'] = this.editData.user_id,
                    this.adminService.adminEdit(data).subscribe((successData) => {
                        this.addAdminSuccess(successData);
                    }, (error) => {
                        this.addAdminFailure(error);
                    });
            }
        }
        else {
            this.validationService.validateAllFormFields(this.adminForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    addAdminSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success(successData.ResponseObject, 'Admin');
            this.router.navigate(['/users/user-list']);
        }
        else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, 'Admin');
        }
    }
    addAdminFailure(error) {
        this.commondata.showLoader(false);
        this.toastr.error(error.ResponseObject, 'Admin');
    }
    numberPattern(event) {
        this.validationService.numberValidate1(event);
    }
    schoolList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            type: this.type == 'add' ? 'active' : 'inactive'
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
            this.selectedSchool = [];
            for (let i = 0; i < this.schoolData.length; i++) {
                this.selectedSchool.push({ id: this.schoolData[i].school_id, name: this.schoolData[i].school_name });
            }
        }
    }
    schoolListFailure(error) {
        this.commondata.showLoader(false);
    }
    onDateChanged(event) {
    }
    static { this.ɵfac = function AddAdminComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddAdminComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.CommonDataService), i0.ɵɵdirectiveInject(i4.ToastrService), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.SchoolService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i7.ValidationService), i0.ɵɵdirectiveInject(i8.AdminService), i0.ɵɵdirectiveInject(i9.ConfigurationService), i0.ɵɵdirectiveInject(i10.CommonService), i0.ɵɵdirectiveInject(i11.DatePipe), i0.ɵɵdirectiveInject(i12.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddAdminComponent, selectors: [["app-add-admin"]], viewQuery: function AddAdminComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
        } }, decls: 101, vars: 13, consts: [["db", "angular-mydatepicker"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header"], [1, "text-capitalize"], [1, "text-muted"], [1, "text-danger"], [1, "card-body", "tab2-card"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "firstName", "id", "validationCustom0", "type", "text", "placeholder", "First Name", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["formControlName", "lastName", "id", "validationCustom1", "type", "text", "placeholder", "Last Name", "required", "", 1, "form-control"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["formControlName", "email_id", "id", "validationCustom2", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "type", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["for", "validationCustom3", 1, "col-xl-3", "col-md-4"], ["formControlName", "mobile", "id", "validationCustom3", "type", "text", "placeholder", "Contact Number", "maxlength", "15", "minlength", "10", "required", "", 1, "form-control", 3, "keypress"], ["for", "validationCustom7", 1, "col-xl-3", "col-md-4"], [2, "visibility", "hidden"], ["formControlName", "gender", "id", "validationCustom7", 1, "form-control"], ["value", ""], ["value", "male"], ["value", "female"], ["value", "n/a"], [1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7", "form-group"], [1, "input-group"], ["name", "mydate", "placeholder", "mm/dd/yyyy", "formControlName", "dob", "angular-mydatepicker", "", 1, "form-control", 3, "keypress", "dateChanged", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar-o"], [1, "form-check-label"], [1, "col-xl-8", "col-md-7", 2, "position", "relative", "left", "1.5rem"], ["type", "checkbox", "formControlName", "allowDash", 1, "form-check-input"], ["formControlName", "status", 1, "form-control"], ["value", "1"], ["value", "2"], ["value", "4", 4, "ngIf"], [1, "pull-right"], [1, "error"], ["value", "4"]], template: function AddAdminComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h5", 6);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "label", 7);
            i0.ɵɵtext(8, "All fields marked with ");
            i0.ɵɵelementStart(9, "span", 8);
            i0.ɵɵtext(10, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " are required");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 9)(13, "form", 10)(14, "div", 11)(15, "label", 12)(16, "span");
            i0.ɵɵtext(17, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(18, " First Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 13);
            i0.ɵɵelement(20, "input", 14);
            i0.ɵɵtemplate(21, AddAdminComponent_em_21_Template, 2, 0, "em", 15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 11)(23, "label", 16)(24, "span");
            i0.ɵɵtext(25, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(26, " Last Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 13);
            i0.ɵɵelement(28, "input", 17);
            i0.ɵɵtemplate(29, AddAdminComponent_em_29_Template, 2, 0, "em", 15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "div", 11)(31, "label", 18)(32, "span");
            i0.ɵɵtext(33, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(34, " Email Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 13);
            i0.ɵɵelement(36, "input", 19);
            i0.ɵɵtemplate(37, AddAdminComponent_em_37_Template, 2, 0, "em", 15)(38, AddAdminComponent_em_38_Template, 2, 0, "em", 15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "div", 11)(40, "label", 20)(41, "span");
            i0.ɵɵtext(42, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(43, " Contact Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "div", 13)(45, "input", 21);
            i0.ɵɵlistener("keypress", function AddAdminComponent_Template_input_keypress_45_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.numberPattern($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(46, AddAdminComponent_em_46_Template, 2, 0, "em", 15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "div", 11)(48, "label", 22)(49, "span", 23);
            i0.ɵɵtext(50, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(51, " Gender");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "div", 13)(53, "select", 24)(54, "option", 25);
            i0.ɵɵtext(55, "Select Gender");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "option", 26);
            i0.ɵɵtext(57, "Male");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "option", 27);
            i0.ɵɵtext(59, "Female");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "option", 28);
            i0.ɵɵtext(61, "Do not want to disclose");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(62, AddAdminComponent_em_62_Template, 2, 0, "em", 15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(63, "div", 11)(64, "label", 29)(65, "span", 23);
            i0.ɵɵtext(66, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(67, " Date Of Birth");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "div", 30)(69, "div", 31)(70, "input", 32, 0);
            i0.ɵɵlistener("keypress", function AddAdminComponent_Template_input_keypress_70_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.datePattern($event)); })("dateChanged", function AddAdminComponent_Template_input_dateChanged_70_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDateChanged($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "div", 33)(73, "button", 34);
            i0.ɵɵlistener("click", function AddAdminComponent_Template_button_click_73_listener() { i0.ɵɵrestoreView(_r1); const db_r2 = i0.ɵɵreference(71); return i0.ɵɵresetView(db_r2.toggleCalendar()); });
            i0.ɵɵelement(74, "i", 35);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(75, AddAdminComponent_em_75_Template, 2, 0, "em", 15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(76, "div", 11)(77, "div", 29)(78, "label", 36)(79, "span", 23);
            i0.ɵɵtext(80, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(81, " Allow Dashboard");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(82, "div", 37);
            i0.ɵɵelement(83, "input", 38);
            i0.ɵɵtext(84, "Yes ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(85, "div", 11)(86, "label", 29)(87, "span");
            i0.ɵɵtext(88, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(89, " Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(90, "div", 13)(91, "select", 39)(92, "option", 40);
            i0.ɵɵtext(93, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(94, "option", 41);
            i0.ɵɵtext(95, "Suspended");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(96, AddAdminComponent_option_96_Template, 2, 0, "option", 42);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(97, AddAdminComponent_em_97_Template, 2, 0, "em", 15);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(98, "div", 43)(99, "button", 34);
            i0.ɵɵlistener("click", function AddAdminComponent_Template_button_click_99_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addAdmin(ctx.type)); });
            i0.ɵɵtext(100);
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.type, " Admin");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.adminForm);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.adminForm.get("firstName").valid && (ctx.adminForm.get("firstName").dirty || ctx.adminForm.get("firstName").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.adminForm.get("lastName").valid && (ctx.adminForm.get("lastName").dirty || ctx.adminForm.get("lastName").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.adminForm.get("email_id").hasError("required") && (ctx.adminForm.get("email_id").dirty || ctx.adminForm.get("email_id").touched));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.adminForm.get("email_id").hasError("pattern"));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.adminForm.get("mobile").valid && (ctx.adminForm.get("mobile").dirty || ctx.adminForm.get("mobile").touched));
            i0.ɵɵadvance(16);
            i0.ɵɵproperty("ngIf", !ctx.adminForm.get("gender").valid && (ctx.adminForm.get("gender").dirty || ctx.adminForm.get("gender").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("options", ctx.myDpOptions);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", !ctx.adminForm.get("dob").valid && (ctx.adminForm.get("dob").dirty || ctx.adminForm.get("dob").touched));
            i0.ɵɵadvance(21);
            i0.ɵɵproperty("ngIf", ctx.type == "edit");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.adminForm.get("status").valid && (ctx.adminForm.get("status").dirty || ctx.adminForm.get("status").touched));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", ctx.type == "add" ? "Save" : "Update", "Save");
        } }, dependencies: [i11.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.FormGroupDirective, i2.FormControlName, i13.AngularMyDatePickerDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddAdminComponent, [{
        type: Component,
        args: [{ selector: 'app-add-admin', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <h5 class=\"text-capitalize\">{{type}} Admin</h5>\n                    <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"adminForm\" class=\"needs-validation user-add\" novalida>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom0\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                               First Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control \" formControlName=\"firstName\" id=\"validationCustom0\"\n                                       type=\"text\" placeholder=\"First Name\" required>\n                                <em class=\"error\" *ngIf=\"!adminForm.get('firstName').valid && (adminForm.get('firstName').dirty || adminForm.get('firstName').touched)\">First name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Last Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input  class=\"form-control \" formControlName=\"lastName\" id=\"validationCustom1\"\n                                       type=\"text\" placeholder=\"Last Name\" required>\n                                <em class=\"error\" *ngIf=\"!adminForm.get('lastName').valid && (adminForm.get('lastName').dirty || adminForm.get('lastName').touched)\">Last name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom2\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                 Email Address</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"email_id\" id=\"validationCustom2\" pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$\"\n                                       type=\"email\" placeholder=\"Email\" required>\n                                <em class=\"error\" *ngIf=\"adminForm.get('email_id').hasError('required') && (adminForm.get('email_id').dirty || adminForm.get('email_id').touched)\">Email is required</em>\n                                <em class=\"error\" *ngIf=\"adminForm.get('email_id').hasError('pattern')\">Invalid Email-Id</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom3\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Contact Number</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control \" formControlName=\"mobile\" id=\"validationCustom3\"\n                                       type=\"text\" placeholder=\"Contact Number\" (keypress)=\"numberPattern($event)\" maxlength=\"15\" minlength=\"10\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!adminForm.get('mobile').valid && (adminForm.get('mobile').dirty || adminForm.get('mobile').touched)\">Contact Number is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom7\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Gender</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control\"  formControlName=\"gender\" id=\"validationCustom7\">\n                                    <option value=\"\">Select Gender</option>\n                                    <option value=\"male\">Male</option>\n                                    <option value=\"female\">Female</option>\n                                    <option value=\"n/a\">Do not want to disclose</option>\n                                </select>\n                                <em class=\"error\" *ngIf=\"!adminForm.get('gender').valid && (adminForm.get('gender').dirty || adminForm.get('gender').touched)\">Gender is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\" ><span style=\"visibility: hidden\">*</span>\n                                Date Of Birth</label>\n                            <div class=\"col-xl-8 col-md-7 form-group\">\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" name=\"mydate\" placeholder=\"mm/dd/yyyy\" (keypress)=\"datePattern($event)\"\n                                           formControlName=\"dob\" angular-mydatepicker #db=\"angular-mydatepicker\" [options]=\"myDpOptions\"\n                                           (dateChanged)=\"onDateChanged($event)\"/>\n                                    <div class=\"input-group-append\">\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"db.toggleCalendar()\">\n                                            <i class=\"fa fa-calendar-o\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                                <em class=\"error\" *ngIf=\"!adminForm.get('dob').valid && (adminForm.get('dob').dirty || adminForm.get('dob').touched)\">Date of Birth is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-xl-3 col-md-4\">\n                                <label class=\"form-check-label\"><span style=\"visibility: hidden\">*</span>\n                                    Allow Dashboard</label>\n                            </div>\n                            <div class=\"col-xl-8 col-md-7\" style=\"position: relative; left: 1.5rem\">\n                                <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"allowDash\">Yes\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Status</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control \" formControlName=\"status\">\n                                    <option value=\"1\">Active</option>\n                                    <option value=\"2\">Suspended</option>\n<!--                                    <option *ngIf=\"type == 'edit'\" value=\"3\">Suspended</option>-->\n                                    <option *ngIf=\"type == 'edit'\" value=\"4\">Deleted</option>\n                                </select>\n                                <em class=\"error\" *ngIf=\"!adminForm.get('status').valid && (adminForm.get('status').dirty || adminForm.get('status').touched)\">status is required</em>\n                            </div>\n                        </div>\n                    </form>\n                    <div class=\"pull-right\">\n                        <button type=\"button\" (click)=\"addAdmin(type)\" class=\"btn btn-primary\">{{type == 'add' ? 'Save' : 'Update'}}Save</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Container-fluid Ends-->\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.CommonDataService }, { type: i4.ToastrService }, { type: i5.AuthService }, { type: i6.SchoolService }, { type: i1.Router }, { type: i7.ValidationService }, { type: i8.AdminService }, { type: i9.ConfigurationService }, { type: i10.CommonService }, { type: i11.DatePipe }, { type: i12.NewsubjectService }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddAdminComponent, { className: "AddAdminComponent" }); })();
//# sourceMappingURL=add-admin.component.js.map