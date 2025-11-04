import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "../../../shared/service/common-data.service";
import * as i4 from "ngx-toastr";
import * as i5 from "../../../shared/service/subject.services";
import * as i6 from "../../../shared/service/auth.service";
import * as i7 from "../../../shared/service/category.service";
import * as i8 from "../../../shared/service/School.service";
import * as i9 from "../../../shared/service/common.service";
import * as i10 from "../../../shared/service/validation.service";
import * as i11 from "../../../shared/service/newsubject.service";
import * as i12 from "@angular/common";
function AddSubjectComponent_div_1_em_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 29);
    i0.ɵɵtext(1, "Subject Name is required");
    i0.ɵɵelementEnd();
} }
function AddSubjectComponent_div_1_option_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1, "Disengaged");
    i0.ɵɵelementEnd();
} }
function AddSubjectComponent_div_1_option_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 31);
    i0.ɵɵtext(1, "Deleted");
    i0.ɵɵelementEnd();
} }
function AddSubjectComponent_div_1_em_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 29);
    i0.ɵɵtext(1, "Status is required");
    i0.ɵɵelementEnd();
} }
function AddSubjectComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "h5", 7);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "label", 8);
    i0.ɵɵtext(7, "All fields marked with ");
    i0.ɵɵelementStart(8, "span", 9);
    i0.ɵɵtext(9, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " are required");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 10)(12, "form", 11)(13, "div", 12)(14, "label", 13)(15, "span");
    i0.ɵɵtext(16, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, " Subject Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 14);
    i0.ɵɵelement(19, "input", 15);
    i0.ɵɵtemplate(20, AddSubjectComponent_div_1_em_20_Template, 2, 0, "em", 16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 12)(22, "label", 17)(23, "span", 18);
    i0.ɵɵtext(24, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(25, " Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 14);
    i0.ɵɵelement(27, "textarea", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 12)(29, "label", 20)(30, "span");
    i0.ɵɵtext(31, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(32, " Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 14)(34, "select", 21)(35, "option", 22);
    i0.ɵɵtext(36, "--Select--");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "option", 23);
    i0.ɵɵtext(38, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "option", 24);
    i0.ɵɵtext(40, "Suspended");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(41, AddSubjectComponent_div_1_option_41_Template, 2, 0, "option", 25)(42, AddSubjectComponent_div_1_option_42_Template, 2, 0, "option", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(43, AddSubjectComponent_div_1_em_43_Template, 2, 0, "em", 16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "div", 27)(45, "button", 28);
    i0.ɵɵlistener("click", function AddSubjectComponent_div_1_Template_button_click_45_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addsubject()); });
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r1.type == "add" ? "Add" : "Edit", " Subject");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("formGroup", ctx_r1.subjectform);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r1.subjectform.get("name").valid && (ctx_r1.subjectform.get("name").dirty || ctx_r1.subjectform.get("name").touched));
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.subjectform.get("status").valid && (ctx_r1.subjectform.get("status").dirty || ctx_r1.subjectform.get("status").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.type == "add" ? "Save" : "Update");
} }
function AddSubjectComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "div", 33)(2, "button", 34);
    i0.ɵɵlistener("click", function AddSubjectComponent_div_2_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.backAction()); });
    i0.ɵɵelement(3, "i", 35);
    i0.ɵɵtext(4, " Back");
    i0.ɵɵelementEnd()()();
} }
export class AddSubjectComponent {
    constructor(route, formBuilder, commondata, toastr, subjectservice, auth, category, brandservices, common, router, validationService, newSubject) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.commondata = commondata;
        this.toastr = toastr;
        this.subjectservice = subjectservice;
        this.auth = auth;
        this.category = category;
        this.brandservices = brandservices;
        this.common = common;
        this.router = router;
        this.validationService = validationService;
        this.newSubject = newSubject;
        this.manageSubject = true;
        this.roleid = this.auth.getRoleId();
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.router.url.includes('create-subject')) {
                    this.init();
                }
            }
            else {
                this.init();
            }
        });
        this.subjectform = this.formBuilder.group({
            name: ['', Validators.required],
            description: '',
            status: ['', Validators.required],
            schoolId: '',
        });
        if (this.type == 'edit') {
            this.allowSelect = true;
            this.newSubject.allowSchoolChange(this.allowSelect);
            this.editData = JSON.parse(this.auth.getSessionData('editsubject'));
            this.subject_id = this.editData.subject_id;
            this.subjectform.controls.name.patchValue(this.editData.subject_name);
            this.subjectform.controls.description.patchValue(this.editData.description);
            const status = this.editData.status;
            this.subjectform.controls.status.patchValue(status == 'Active' ? 1 : status == 'Suspended' ? 2 : status == 'Disengaged' ? 3 : 4);
            this.subjectform.controls.schoolId.patchValue(this.editData.school_name);
        }
        else {
            this.allowSelect = false;
            this.newSubject.allowSchoolChange(this.allowSelect);
            this.subjectform.controls.name.patchValue('');
            this.subjectform.controls.description.patchValue('');
            this.subjectform.controls.status.patchValue('1');
            if (this.roleid == '2') {
                this.subjectform.controls.schoolId.patchValue(this.auth.getSessionData('school_name'));
            }
            else if (this.roleid == '4') {
                this.subjectform.controls.schoolId.patchValue(this.schooldetails.name);
            }
        }
    }
    ngOnInit() {
    }
    init() {
        this.schoolName = this.auth.getSessionData('school_name');
        this.schooldetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.manageSubject = this.auth.manageSubject;
        this.schoolList();
    }
    backAction() {
        this.router.navigate(['/subject/list-subject']);
    }
    addsubject() {
        if (this.subjectform.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                subject_name: this.subjectform.controls.name.value,
                description: this.subjectform.controls.description.value,
                status: this.subjectform.controls.status.value,
                school_id: this.auth.getSessionData('school_id'),
                subject_id: this.subject_id ? this.subject_id : '',
            };
            if (this.type == 'add') {
                this.subjectservice.subjectAdd(data).subscribe((successData) => {
                    this.addSubjectSuccess(successData);
                }, (error) => {
                    console.error(error, 'error');
                });
            }
            else if (this.type == 'edit') {
                this.subjectservice.subjectEdit(data).subscribe((successData) => {
                    this.addSubjectSuccess(successData);
                }, (error) => {
                    console.error(error, 'error');
                });
            }
        }
        else {
            this.validationService.validateAllFormFields(this.subjectform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    addSubjectSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success(successData.ResponseObject, 'Subject');
            this.router.navigate(['/subject/list-subject']);
        }
        else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, 'Subject');
        }
    }
    numberPattern(event) {
        this.validationService.numberValidate1(event);
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
        }
    }
    schoolListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }
    static { this.ɵfac = function AddSubjectComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddSubjectComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.CommonDataService), i0.ɵɵdirectiveInject(i4.ToastrService), i0.ɵɵdirectiveInject(i5.SubjectServices), i0.ɵɵdirectiveInject(i6.AuthService), i0.ɵɵdirectiveInject(i7.CategoryService), i0.ɵɵdirectiveInject(i8.SchoolService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i10.ValidationService), i0.ɵɵdirectiveInject(i11.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddSubjectComponent, selectors: [["app-add-subject"]], decls: 3, vars: 2, consts: [[1, "container-fluid"], ["class", "row", 4, "ngIf"], ["class", "row mt-4", 4, "ngIf"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header"], [1, "text-capitalize"], [1, "text-muted"], [1, "text-danger"], [1, "card-body", "tab2-card"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "name", "id", "validationCustom1", "type", "text", "placeholder", "Name", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], [2, "visibility", "hidden"], ["formControlName", "description", "id", "validationCustom2", "type", "email", "placeholder", "Description", 1, "form-control"], ["for", "validationCustom5", 1, "col-xl-3", "col-md-4"], ["formControlName", "status", "id", "validationCustom5", 1, "form-control"], ["selected", "", "disabled", ""], ["value", "1"], ["value", "2"], ["value", "3", 4, "ngIf"], ["value", "4", 4, "ngIf"], [1, "pull-right"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "error"], ["value", "3"], ["value", "4"], [1, "row", "mt-4"], [1, "col-md-12"], [1, "btn", "btn-outline-primary", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-left", "fa-1x"]], template: function AddSubjectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, AddSubjectComponent_div_1_Template, 47, 7, "div", 1)(2, AddSubjectComponent_div_2_Template, 5, 0, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.manageSubject || ctx.type == "edit");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.manageSubject && ctx.type != "edit");
        } }, dependencies: [i12.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.FormGroupDirective, i2.FormControlName], styles: [".custom-upload-input[_ngcontent-%COMP%] {\n  color: transparent;\n}\n.custom-upload-input[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input[_ngcontent-%COMP%]::before {\n  content: 'Choose files';\n  color: black;\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n.custom-upload-input[_ngcontent-%COMP%]:hover::before {\n  border-color: black;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active {\n  outline: 0;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddSubjectComponent, [{
        type: Component,
        args: [{ selector: 'app-add-subject', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\" *ngIf=\"manageSubject || type == 'edit'\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <h5 class=\"text-capitalize\">{{type == 'add' ? 'Add' : 'Edit'}} Subject</h5>\n                    <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"subjectform\" class=\"needs-validation user-add\" novalida>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Subject Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control \" formControlName=\"name\" id=\"validationCustom1\"\n                                       type=\"text\" placeholder=\"Name\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!subjectform.get('name').valid && (subjectform.get('name').dirty || subjectform.get('name').touched)\">Subject Name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom2\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Description</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <textarea class=\"form-control \" formControlName=\"description\" id=\"validationCustom2\"\n                                          type=\"email\" placeholder=\"Description\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom5\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Status</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control\" formControlName=\"status\" id=\"validationCustom5\">\n                                    <option selected disabled>&#45;&#45;Select&#45;&#45;</option>\n                                    <option value=\"1\">Active</option>\n                                    <option value=\"2\">Suspended</option>\n                                    <option *ngIf=\"type =='edit'\" value=\"3\">Disengaged</option>\n                                    <option *ngIf=\"type =='edit'\" value=\"4\">Deleted</option>\n                                </select>\n                                <em class=\"error\" *ngIf=\"!subjectform.get('status').valid && (subjectform.get('status').dirty || subjectform.get('status').touched)\">Status is required</em>\n                            </div>\n                        </div>\n                    </form>\n                    <div class=\"pull-right\">\n                        <button type=\"button\" (click)=\"addsubject()\" class=\"btn btn-primary\">{{type == 'add' ? 'Save' : 'Update'}}</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row mt-4\" *ngIf=\"!manageSubject && type != 'edit'\">\n        <div class=\"col-md-12\">\n            <button class=\"btn btn-outline-primary pull-right\" (click)=\"backAction()\"><i class=\"fa fa-long-arrow-left fa-1x\" aria-hidden=\"true\"></i> Back</button>\n        </div>\n    </div>\n    <!-- <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"!allowAdd\">\n        <div class=\"col-8\">\n            <button class=\"nodataList\">You Don't Have Permission to add Subject for {{schoolName}}</button>\n        </div>\n    </div> -->\n</div>\n<!-- Container-fluid Ends-->\n", styles: [".custom-upload-input {\n  color: transparent;\n}\n.custom-upload-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input::before {\n  content: 'Choose files';\n  color: black;\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n.custom-upload-input:hover::before {\n  border-color: black;\n}\n.custom-upload-input:active {\n  outline: 0;\n}\n.custom-upload-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.CommonDataService }, { type: i4.ToastrService }, { type: i5.SubjectServices }, { type: i6.AuthService }, { type: i7.CategoryService }, { type: i8.SchoolService }, { type: i9.CommonService }, { type: i1.Router }, { type: i10.ValidationService }, { type: i11.NewsubjectService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddSubjectComponent, { className: "AddSubjectComponent" }); })();
//# sourceMappingURL=add-subject.component.js.map