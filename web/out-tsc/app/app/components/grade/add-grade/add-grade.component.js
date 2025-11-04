import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "../../../shared/service/common-data.service";
import * as i4 from "ngx-toastr";
import * as i5 from "../../../shared/service/newsubject.service";
import * as i6 from "../../../shared/service/auth.service";
import * as i7 from "../../../shared/service/grade.service";
import * as i8 from "../../../shared/service/School.service";
import * as i9 from "../../../shared/service/validation.service";
import * as i10 from "../../../shared/service/common.service";
import * as i11 from "@angular/common";
function AddGradeComponent_em_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 28);
    i0.ɵɵtext(1, "Grade is required");
    i0.ɵɵelementEnd();
} }
function AddGradeComponent_em_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Sort Order is required, Enter ", ctx_r0.gradeCount, " less then or equall value only accepted.");
} }
function AddGradeComponent_em_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 28);
    i0.ɵɵtext(1, "Status is required");
    i0.ɵɵelementEnd();
} }
export class AddGradeComponent {
    constructor(route, formBuilder, commondata, toastr, newSubject, auth, gradeService, brandservices, router, validationService, common) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.commondata = commondata;
        this.toastr = toastr;
        this.newSubject = newSubject;
        this.auth = auth;
        this.gradeService = gradeService;
        this.brandservices = brandservices;
        this.router = router;
        this.validationService = validationService;
        this.common = common;
        this.gradeCount = parseInt(this.auth.getSessionData('gradeCount'));
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.router.url.includes('create-grade')) {
                    this.init(params);
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
        this.gradeform = this.formBuilder.group({
            gradename: ['', Validators.required],
            description: '',
            sortNo: ['', Validators.required],
            status: ['', Validators.required],
            schoolId: '',
        });
        if (this.type == 'edit') {
            this.gradeCount = parseInt(this.auth.getSessionData('gradeCount'));
            console.log(this.gradeCount, 'sort');
            this.allowSelect = true;
            this.newSubject.allowSchoolChange(this.allowSelect);
            this.editData = JSON.parse(this.auth.getSessionData('editgrade'));
            this.grade_id = this.editData.grade_id;
            this.gradeform.controls.gradename.patchValue(this.editData.grade_name);
            this.gradeform.controls.sortNo.patchValue(this.editData.sorting_no);
            console.log(this.gradeform.controls.sortNo.value, 'sort');
            this.gradeform.controls.description.patchValue(this.editData.description);
            if (this.editData.status == 'Active') {
                this.gradeform.controls.status.patchValue(1);
            }
            else if (this.editData.status == 'Suspended') {
                this.gradeform.controls.status.patchValue(2);
            }
            if (this.editData.status == 'Suspended') {
                this.gradeform.controls.status.patchValue(3);
            }
            else if (this.editData.status == 'Deleted') {
                this.gradeform.controls.status.patchValue(4);
            }
            this.gradeform.controls.schoolId.patchValue(this.editData.school_name);
        }
        else {
            let count = parseInt(this.auth.getSessionData('gradeCount'));
            this.gradeCount = count + 1;
            this.allowSelect = false;
            this.newSubject.allowSchoolChange(this.allowSelect);
            this.gradeform.controls.gradename.patchValue('');
            this.gradeform.controls.description.patchValue('');
            this.gradeform.controls.status.patchValue('1');
            this.gradeform.controls.sortNo.patchValue(this.gradeCount);
            this.gradeform.controls.schoolId.patchValue(this.auth.getSessionData('school_name'));
            console.log(this.gradeform.controls.sortNo.value, 'sort');
        }
    }
    init(id) {
        this.schoolid = id;
    }
    ngOnInit() {
    }
    addgrade(valve) {
        if (this.gradeCount >= this.gradeform.controls.sortNo.value) {
            if (this.gradeform.valid) {
                this.commondata.showLoader(false);
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    grade_name: this.gradeform.controls.gradename.value,
                    description: this.gradeform.controls.description.value,
                    sorting_no: this.gradeform.controls.sortNo.value.toString(),
                    status: this.gradeform.controls.status.value,
                    school_id: this.schoolid,
                    grade_id: this.grade_id ? this.grade_id : '',
                };
                if (valve == 'add') {
                    this.gradeService.gradeAdd(data).subscribe((successData) => {
                        this.addgradeSuccess(successData);
                    }, (error) => {
                        this.addgradeFailure(error);
                    });
                }
                else if (valve == 'edit') {
                    this.gradeService.gradeEdit(data).subscribe((successData) => {
                        this.addgradeSuccess(successData);
                    }, (error) => {
                        this.addgradeFailure(error);
                    });
                }
            }
            else {
                this.validationService.validateAllFormFields(this.gradeform);
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }
        else {
            this.toastr.error('Sort Order is required, Enter ' + this.gradeCount + ' less then or equall value only accepted.');
        }
    }
    addgradeSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success(successData.ResponseObject, 'Grade');
            this.router.navigate(['/grade/list-grade']);
        }
        else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, 'Grade');
        }
    }
    addgradeFailure(error) {
        console.log(error, 'error');
    }
    numberPattern(event) {
        this.validationService.numberValidate1(event);
    }
    static { this.ɵfac = function AddGradeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddGradeComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.CommonDataService), i0.ɵɵdirectiveInject(i4.ToastrService), i0.ɵɵdirectiveInject(i5.NewsubjectService), i0.ɵɵdirectiveInject(i6.AuthService), i0.ɵɵdirectiveInject(i7.GradeService), i0.ɵɵdirectiveInject(i8.SchoolService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i9.ValidationService), i0.ɵɵdirectiveInject(i10.CommonService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddGradeComponent, selectors: [["app-add-grade"]], decls: 56, vars: 6, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header"], [1, "text-capitalize"], [1, "text-muted"], [1, "text-danger"], [1, "card-body", "tab2-card"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "gradename", "id", "validationCustom1", "type", "text", "placeholder", "Enter Grade", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], [2, "visibility", "hidden"], ["rows", "3", "formControlName", "description", "id", "validationCustom2", "type", "email", "placeholder", "Description", 1, "form-control"], ["for", "validationCustom3", 1, "col-xl-3", "col-md-4"], ["formControlName", "sortNo", "id", "validationCustom3", "type", "text", "placeholder", "Sort Order", "maxlength", "15", "required", "", 1, "form-control", 3, "keypress"], ["for", "validationCustom5", 1, "col-xl-3", "col-md-4"], ["formControlName", "status", "id", "validationCustom5", 1, "form-control"], ["selected", "", "disabled", ""], ["value", "1"], ["value", "2"], ["value", "4"], [1, "pull-right"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "error"]], template: function AddGradeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "label", 6);
            i0.ɵɵtext(8, "All fields marked with ");
            i0.ɵɵelementStart(9, "span", 7);
            i0.ɵɵtext(10, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " are required");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 8)(13, "form", 9)(14, "div", 10)(15, "label", 11)(16, "span");
            i0.ɵɵtext(17, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(18, " Grade ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 12);
            i0.ɵɵelement(20, "input", 13);
            i0.ɵɵtemplate(21, AddGradeComponent_em_21_Template, 2, 0, "em", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 10)(23, "label", 15)(24, "span", 16);
            i0.ɵɵtext(25, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(26, " Description");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 12);
            i0.ɵɵelement(28, "textarea", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "div", 10)(30, "label", 18)(31, "span");
            i0.ɵɵtext(32, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(33, " Sort Order");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "div", 12)(35, "input", 19);
            i0.ɵɵlistener("keypress", function AddGradeComponent_Template_input_keypress_35_listener($event) { return ctx.numberPattern($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(36, AddGradeComponent_em_36_Template, 2, 1, "em", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "div", 10)(38, "label", 20)(39, "span");
            i0.ɵɵtext(40, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(41, " Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 12)(43, "select", 21)(44, "option", 22);
            i0.ɵɵtext(45, "--Select--");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "option", 23);
            i0.ɵɵtext(47, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "option", 24);
            i0.ɵɵtext(49, "Suspended");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "option", 25);
            i0.ɵɵtext(51, "Deleted");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(52, AddGradeComponent_em_52_Template, 2, 0, "em", 14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(53, "div", 26)(54, "button", 27);
            i0.ɵɵlistener("click", function AddGradeComponent_Template_button_click_54_listener() { return ctx.addgrade(ctx.type); });
            i0.ɵɵtext(55);
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.type, " Grade");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.gradeform);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.gradeform.get("gradename").valid && (ctx.gradeform.get("gradename").dirty || ctx.gradeform.get("gradename").touched));
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngIf", !ctx.gradeform.get("sortNo").valid && (ctx.gradeform.get("sortNo").dirty || ctx.gradeform.get("sortNo").touched) && ctx.gradeCount >= ctx.gradeform.controls.sortNo.value);
            i0.ɵɵadvance(16);
            i0.ɵɵproperty("ngIf", !ctx.gradeform.get("status").valid && (ctx.gradeform.get("status").dirty || ctx.gradeform.get("status").touched));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.type == "add" ? "Save" : "Update");
        } }, dependencies: [i11.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName], styles: [".custom-upload-input[_ngcontent-%COMP%] {\n  color: transparent;\n}\n.custom-upload-input[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input[_ngcontent-%COMP%]::before {\n  content: 'Choose files';\n  color: black;\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n.custom-upload-input[_ngcontent-%COMP%]:hover::before {\n  border-color: black;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active {\n  outline: 0;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddGradeComponent, [{
        type: Component,
        args: [{ selector: 'app-add-grade', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <h5 class=\"text-capitalize\">{{type}} Grade</h5>\n                    <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"gradeform\" class=\"needs-validation user-add\" novalida>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Grade </label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"gradename\" id=\"validationCustom1\"\n                                       type=\"text\" placeholder=\"Enter Grade\" required>\n                                <em class=\"error\" *ngIf=\"!gradeform.get('gradename').valid && (gradeform.get('gradename').dirty || gradeform.get('gradename').touched)\">Grade is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom2\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Description</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <textarea class=\"form-control \" rows=\"3\" formControlName=\"description\" id=\"validationCustom2\"\n                                          type=\"email\" placeholder=\"Description\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom3\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Sort Order</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control \" formControlName=\"sortNo\" id=\"validationCustom3\"\n                                       type=\"text\" placeholder=\"Sort Order\" (keypress)=\"numberPattern($event)\" maxlength=\"15\" required>\n                                <em class=\"error\" *ngIf=\"!gradeform.get('sortNo').valid && (gradeform.get('sortNo').dirty || gradeform.get('sortNo').touched) && (gradeCount >= gradeform.controls.sortNo.value)\">Sort Order is required, Enter {{gradeCount}} less then or equall value only accepted.</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom5\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Status</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control\" formControlName=\"status\" id=\"validationCustom5\">\n                                    <option selected disabled>&#45;&#45;Select&#45;&#45;</option>\n                                    <option value=\"1\">Active</option>\n                                    <option value=\"2\">Suspended</option>\n<!--                                    <option value=\"3\">Disengaged</option>-->\n                                    <option value=\"4\">Deleted</option>\n                                </select>\n                                <em class=\"error\" *ngIf=\"!gradeform.get('status').valid && (gradeform.get('status').dirty || gradeform.get('status').touched)\">Status is required</em>\n                            </div>\n                        </div>\n<!--                        <div class=\"form-group row\">-->\n<!--                            <label class=\"col-xl-3 col-md-4\"><span>*</span>-->\n<!--                                Institution Name</label>-->\n<!--                            <div class=\"col-xl-8 col-md-7\">-->\n<!--                                <input readonly class=\"form-control\" formControlName=\"schoolId\" id=\"validationCustom8\"-->\n<!--                                       type=\"text\" placeholder=\"Institution Name\" required=\"\">-->\n<!--                            </div>-->\n<!--                        </div>-->\n                    </form>\n                    <div class=\"pull-right\">\n                        <button type=\"button\" (click)=\"addgrade(type)\" class=\"btn btn-primary\">{{type == 'add' ? 'Save' : 'Update'}}</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Container-fluid Ends-->\n", styles: [".custom-upload-input {\n  color: transparent;\n}\n.custom-upload-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input::before {\n  content: 'Choose files';\n  color: black;\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n.custom-upload-input:hover::before {\n  border-color: black;\n}\n.custom-upload-input:active {\n  outline: 0;\n}\n.custom-upload-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.CommonDataService }, { type: i4.ToastrService }, { type: i5.NewsubjectService }, { type: i6.AuthService }, { type: i7.GradeService }, { type: i8.SchoolService }, { type: i1.Router }, { type: i9.ValidationService }, { type: i10.CommonService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddGradeComponent, { className: "AddGradeComponent" }); })();
//# sourceMappingURL=add-grade.component.js.map