import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "../../../shared/service/common-data.service";
import * as i4 from "ngx-toastr";
import * as i5 from "../../../shared/service/newsubject.service";
import * as i6 from "../../../shared/service/auth.service";
import * as i7 from "../../../shared/service/classroom.service";
import * as i8 from "../../../shared/service/School.service";
import * as i9 from "../../../shared/service/validation.service";
import * as i10 from "../../../shared/service/common.service";
import * as i11 from "@angular/common";
function AddClassroomComponent_div_1_h5_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 27);
    i0.ɵɵtext(1, "Add Content Folder");
    i0.ɵɵelementEnd();
} }
function AddClassroomComponent_div_1_h5_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 27);
    i0.ɵɵtext(1, "Edit Content Folder");
    i0.ɵɵelementEnd();
} }
function AddClassroomComponent_div_1_em_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 28);
    i0.ɵɵtext(1, "Enter Content Folder Name");
    i0.ɵɵelementEnd();
} }
function AddClassroomComponent_div_1_option_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1, "Suspended");
    i0.ɵɵelementEnd();
} }
function AddClassroomComponent_div_1_option_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1, "Deleted");
    i0.ɵɵelementEnd();
} }
function AddClassroomComponent_div_1_em_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 28);
    i0.ɵɵtext(1, "Status is required");
    i0.ɵɵelementEnd();
} }
function AddClassroomComponent_div_1_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function AddClassroomComponent_div_1_button_38_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addClassRoom("add")); });
    i0.ɵɵtext(1, "Save");
    i0.ɵɵelementEnd();
} }
function AddClassroomComponent_div_1_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function AddClassroomComponent_div_1_button_39_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addClassRoom("edit")); });
    i0.ɵɵtext(1, "Update");
    i0.ɵɵelementEnd();
} }
function AddClassroomComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7);
    i0.ɵɵtemplate(4, AddClassroomComponent_div_1_h5_4_Template, 2, 0, "h5", 8)(5, AddClassroomComponent_div_1_h5_5_Template, 2, 0, "h5", 8);
    i0.ɵɵelementStart(6, "label", 9);
    i0.ɵɵtext(7, "All fields marked with ");
    i0.ɵɵelementStart(8, "span", 10);
    i0.ɵɵtext(9, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " are required");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 11)(12, "form", 12)(13, "div", 13)(14, "label", 14)(15, "span");
    i0.ɵɵtext(16, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, " Content Folder Name ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 15);
    i0.ɵɵelement(19, "input", 16);
    i0.ɵɵtemplate(20, AddClassroomComponent_div_1_em_20_Template, 2, 0, "em", 17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 13)(22, "label", 18)(23, "span");
    i0.ɵɵtext(24, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(25, " Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 15)(27, "select", 19)(28, "option", 20);
    i0.ɵɵtext(29, "--Select--");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 21);
    i0.ɵɵtext(31, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "option", 22);
    i0.ɵɵtext(33, "In-Active");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(34, AddClassroomComponent_div_1_option_34_Template, 2, 0, "option", 23)(35, AddClassroomComponent_div_1_option_35_Template, 2, 0, "option", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(36, AddClassroomComponent_div_1_em_36_Template, 2, 0, "em", 17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "div", 25);
    i0.ɵɵtemplate(38, AddClassroomComponent_div_1_button_38_Template, 2, 0, "button", 26)(39, AddClassroomComponent_div_1_button_39_Template, 2, 0, "button", 26);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "add");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "edit");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("formGroup", ctx_r1.classroomform);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r1.classroomform.get("batchname").valid && (ctx_r1.classroomform.get("batchname").dirty || ctx_r1.classroomform.get("batchname").touched));
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.classroomform.get("status").valid && (ctx_r1.classroomform.get("status").dirty || ctx_r1.classroomform.get("status").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "add");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "edit");
} }
function AddClassroomComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "div", 33)(2, "button", 34);
    i0.ɵɵlistener("click", function AddClassroomComponent_div_2_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.backAction()); });
    i0.ɵɵelement(3, "i", 35);
    i0.ɵɵtext(4, " Back");
    i0.ɵɵelementEnd()()();
} }
function AddClassroomComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36)(1, "div", 37)(2, "button", 38);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("You Don't Have Permission to add Classroom for ", ctx_r1.schoolName, "");
} }
export class AddClassroomComponent {
    constructor(route, formBuilder, commondata, toastr, newSubject, auth, classroom, brandservices, router, validationService, common) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.commondata = commondata;
        this.toastr = toastr;
        this.newSubject = newSubject;
        this.auth = auth;
        this.classroom = classroom;
        this.brandservices = brandservices;
        this.router = router;
        this.validationService = validationService;
        this.common = common;
        this.roleid = this.auth.getRoleId();
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.classroomform = this.formBuilder.group({
            batchname: ['', Validators.required],
            status: ['', Validators.required],
        });
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.router.url.includes('create-classroom')) {
                    this.init(params);
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
        if (this.type == 'edit') {
            this.allowSelect = true;
            this.newSubject.allowSchoolChange(this.allowSelect);
            this.editData = JSON.parse(this.auth.getSessionData('editclassroom'));
            this.batch_id = this.editData.batch_id;
            this.classroomform.controls.batchname.patchValue(this.editData.batch_name);
            if (this.editData.status == 'Active') {
                this.classroomform.controls.status.patchValue(1);
            }
            else if (this.editData.status == 'Inactive') {
                this.classroomform.controls.status.patchValue(2);
            }
            if (this.editData.status == 'Suspended') {
                this.classroomform.controls.status.patchValue(3);
            }
            else if (this.editData.status == 'Deleted') {
                this.classroomform.controls.status.patchValue(4);
            }
        }
        else {
            this.allowSelect = false;
            this.newSubject.allowSchoolChange(this.allowSelect);
            this.classroomform.controls.batchname.patchValue('');
            this.classroomform.controls.status.patchValue('1');
        }
    }
    ngOnInit() {
    }
    init(id) {
        this.teacherType = this.auth.getSessionData('teacher_type');
        this.schoolName = this.auth.getSessionData('school_name');
        this.schooldetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        if (this.roleid == '4' && this.teacherType == '0') {
            this.allowAdd = this.schooldetails.permissions[3].permission[0].status == 1;
        }
        else {
            this.allowAdd = !(this.roleid == '4' && this.teacherType == '1');
        }
        this.schoolid = id;
    }
    backAction() {
        if (this.teacherType == '0') {
            this.router.navigate(['/classroom/list-classroom']);
        }
        else {
            this.router.navigate(['/home/list-home']);
        }
    }
    addClassRoom(valve) {
        if (this.classroomform.valid) {
            this.commondata.showLoader(false);
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                batch_name: this.classroomform.controls.batchname.value,
                status: this.classroomform.controls.status.value,
                school_id: this.schoolid,
                batch_id: this.batch_id ? this.batch_id : '',
            };
            if (valve == 'add') {
                this.classroom.classRoomAdd(data).subscribe((successData) => {
                    this.classRoomSuccess(successData);
                }, (error) => {
                    this.classRoomFailure(error);
                });
            }
            else if (valve == 'edit') {
                this.classroom.classRoomEdit(data).subscribe((successData) => {
                    this.classRoomSuccess(successData);
                }, (error) => {
                    this.classRoomFailure(error);
                });
            }
        }
        else {
            this.validationService.validateAllFormFields(this.classroomform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    classRoomSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            if (this.type == 'add') {
                this.toastr.success('Content Folder Added Successfully');
            }
            else {
                this.toastr.success('Content Folder Updated Successfully');
            }
            this.router.navigate(['/classroom/list-classroom']);
        }
        else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, 'Content Folder');
        }
    }
    classRoomFailure(error) {
        console.log(error, 'error');
    }
    numberPattern(event) {
        this.validationService.numberValidate1(event);
    }
    static { this.ɵfac = function AddClassroomComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddClassroomComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.CommonDataService), i0.ɵɵdirectiveInject(i4.ToastrService), i0.ɵɵdirectiveInject(i5.NewsubjectService), i0.ɵɵdirectiveInject(i6.AuthService), i0.ɵɵdirectiveInject(i7.ClassroomService), i0.ɵɵdirectiveInject(i8.SchoolService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i9.ValidationService), i0.ɵɵdirectiveInject(i10.CommonService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddClassroomComponent, selectors: [["app-add-classroom"]], decls: 4, vars: 3, consts: [[1, "container-fluid"], ["class", "row", 4, "ngIf"], ["class", "row mt-4", 4, "ngIf"], ["class", "row d-flex justify-content-center list-card mt-5", 4, "ngIf"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header"], ["class", "text-capitalize", 4, "ngIf"], [1, "text-muted"], [1, "text-danger"], [1, "card-body", "tab2-card"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "batchname", "id", "validationCustom1", "type", "text", "placeholder", "Enter Content Folder Name", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom5", 1, "col-xl-3", "col-md-4"], ["formControlName", "status", "id", "validationCustom5", 1, "form-control"], ["selected", "", "disabled", ""], ["value", "1"], ["value", "2"], ["value", "3", 4, "ngIf"], ["value", "4", 4, "ngIf"], [1, "pull-right"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "text-capitalize"], [1, "error"], ["value", "3"], ["value", "4"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "row", "mt-4"], [1, "col-md-12"], [1, "btn", "btn-outline-primary", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-left", "fa-1x"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-5"], [1, "col-8"], [1, "nodataList"]], template: function AddClassroomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, AddClassroomComponent_div_1_Template, 40, 9, "div", 1)(2, AddClassroomComponent_div_2_Template, 5, 0, "div", 2)(3, AddClassroomComponent_div_3_Template, 4, 1, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.allowAdd);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.allowAdd);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.allowAdd);
        } }, dependencies: [i11.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.FormGroupDirective, i2.FormControlName], styles: [".custom-upload-input[_ngcontent-%COMP%] {\n  color: transparent;\n}\n.custom-upload-input[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input[_ngcontent-%COMP%]::before {\n  content: 'Choose files';\n  color: black;\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n.custom-upload-input[_ngcontent-%COMP%]:hover::before {\n  border-color: black;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active {\n  outline: 0;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddClassroomComponent, [{
        type: Component,
        args: [{ selector: 'app-add-classroom', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\" *ngIf=\"allowAdd\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <h5 *ngIf=\"type == 'add'\" class=\"text-capitalize\">Add Content Folder</h5>\n                    <h5 *ngIf=\"type == 'edit'\" class=\"text-capitalize\">Edit Content Folder</h5>\n                    <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"classroomform\" class=\"needs-validation user-add\" novalida>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Content Folder Name </label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"batchname\" id=\"validationCustom1\"\n                                       type=\"text\" placeholder=\"Enter Content Folder Name\" required=\"\">\n                                <em *ngIf=\"!classroomform.get('batchname').valid && (classroomform.get('batchname').dirty || classroomform.get('batchname').touched)\" class=\"error\">Enter Content Folder Name</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom5\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Status</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control\" formControlName=\"status\" id=\"validationCustom5\">\n                                    <option selected disabled>&#45;&#45;Select&#45;&#45;</option>\n                                    <option value=\"1\">Active</option>\n                                    <option value=\"2\">In-Active</option>\n                                    <option *ngIf=\"type =='edit'\" value=\"3\">Suspended</option>\n                                    <option *ngIf=\"type =='edit'\" value=\"4\">Deleted</option>\n                                </select>\n                                <em class=\"error\" *ngIf=\"!classroomform.get('status').valid && (classroomform.get('status').dirty || classroomform.get('status').touched)\">Status is required</em>\n                            </div>\n                        </div>\n                    </form>\n                    <div class=\"pull-right\">\n                        <button type=\"button\" *ngIf=\"type == 'add'\" (click)=\"addClassRoom('add')\"  class=\"btn btn-primary\">Save</button>\n                        <button type=\"button\" *ngIf=\"type == 'edit'\" (click)=\"addClassRoom('edit')\"  class=\"btn btn-primary\">Update</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row mt-4\" *ngIf=\"!allowAdd\">\n        <div class=\"col-md-12\">\n            <button class=\"btn btn-outline-primary pull-right\" (click)=\"backAction()\"><i class=\"fa fa-long-arrow-left fa-1x\" aria-hidden=\"true\"></i> Back</button>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"!allowAdd\">\n        <div class=\"col-8\">\n            <button class=\"nodataList\">You Don't Have Permission to add Classroom for {{schoolName}}</button>\n        </div>\n    </div>\n</div>\n<!-- Container-fluid Ends-->\n", styles: [".custom-upload-input {\n  color: transparent;\n}\n.custom-upload-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input::before {\n  content: 'Choose files';\n  color: black;\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n.custom-upload-input:hover::before {\n  border-color: black;\n}\n.custom-upload-input:active {\n  outline: 0;\n}\n.custom-upload-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.CommonDataService }, { type: i4.ToastrService }, { type: i5.NewsubjectService }, { type: i6.AuthService }, { type: i7.ClassroomService }, { type: i8.SchoolService }, { type: i1.Router }, { type: i9.ValidationService }, { type: i10.CommonService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddClassroomComponent, { className: "AddClassroomComponent" }); })();
//# sourceMappingURL=add-classroom.component.js.map