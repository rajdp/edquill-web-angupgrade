import { Component } from '@angular/core';
import { Validators } from "@angular/forms";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../shared/service/auth.service";
import * as i3 from "ngx-toastr";
import * as i4 from "@angular/forms";
import * as i5 from "../../../shared/service/student.service";
import * as i6 from "@angular/common";
function ContentFolderCreateComponent_h5_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 24);
    i0.ɵɵtext(1, "Add Content Folder");
    i0.ɵɵelementEnd();
} }
function ContentFolderCreateComponent_h5_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 24);
    i0.ɵɵtext(1, "Edit Content Folder");
    i0.ɵɵelementEnd();
} }
function ContentFolderCreateComponent_em_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 25);
    i0.ɵɵtext(1, "Name is required");
    i0.ɵɵelementEnd();
} }
function ContentFolderCreateComponent_em_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 25);
    i0.ɵɵtext(1, "Status is required");
    i0.ɵɵelementEnd();
} }
function ContentFolderCreateComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 26);
    i0.ɵɵlistener("click", function ContentFolderCreateComponent_button_38_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addFolder("add")); });
    i0.ɵɵtext(1, "Save");
    i0.ɵɵelementEnd();
} }
function ContentFolderCreateComponent_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 26);
    i0.ɵɵlistener("click", function ContentFolderCreateComponent_button_39_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addFolder("edit")); });
    i0.ɵɵtext(1, "Update");
    i0.ɵɵelementEnd();
} }
export class ContentFolderCreateComponent {
    constructor(route, router, auth, toastr, formBuilder, student) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.student = student;
        this.editData = '';
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.folderForm = this.formBuilder.group({
            name: ['', Validators.required],
            status: ['1', Validators.required],
        });
    }
    ngOnInit() {
        if (this.type == 'edit') {
            this.editData = JSON.parse(this.auth.getSessionData('edit-student-folder'));
            this.folderForm.controls.name.patchValue(this.editData.category_name);
            this.folderForm.controls.status.patchValue(this.editData.status);
        }
    }
    addFolder(type) {
        if (this.folderForm.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                student_id: this.auth.getUserId(),
                category_name: this.folderForm.controls.name.value,
                status: this.folderForm.controls.status.value
            };
            if (this.type == 'add') {
                this.student.addFolder(data).subscribe((successData) => {
                    this.folderSuccess(successData);
                }, (error) => {
                    console.error(error, 'error_addFolder');
                });
            }
            else {
                data['category_id'] = this.editData.category_id;
                this.student.editFolder(data).subscribe((successData) => {
                    this.folderSuccess(successData);
                }, (error) => {
                    console.error(error, 'error_editFolder');
                });
            }
        }
        else {
            this.toastr.error('Please Enter Mandatory Field');
        }
    }
    folderSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.router.navigate(['studentlogin/content-folder']);
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    static { this.ɵfac = function ContentFolderCreateComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentFolderCreateComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.ToastrService), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i5.StudentService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContentFolderCreateComponent, selectors: [["app-content-folder-create"]], decls: 40, vars: 7, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card", "tab2-card"], [1, "card-header", "pb-0"], ["class", "text-capitalize", 4, "ngIf"], [1, "text-muted"], [1, "text-danger"], [1, "card-body", "tab2-card"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "col-12", "d-flex", "mt-4", "justify-content-center"], ["for", "validationCustom1", 1, "col-12", "col-md-4", "col-xl-3"], [1, "col-12", "col-md-7", "col-xl-8"], ["formControlName", "name", "id", "validationCustom1", "placeholder", "Name", "required", "", "type", "text", 1, "form-control"], ["class", "error", 4, "ngIf"], [1, "form-group", "col-12", "d-flex", "justify-content-center"], ["for", "validationCustom5", 1, "col-12", "col-md-4", "col-xl-3"], ["formControlName", "status", "id", "validationCustom5", 1, "form-control"], ["disabled", "", "selected", ""], ["value", "1"], ["value", "2"], [1, "card-footer", "px-4", "py-3"], [1, "pull-right"], ["class", "btn btn-primary", "type", "button", 3, "click", 4, "ngIf"], [1, "text-capitalize"], [1, "error"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ContentFolderCreateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵtemplate(5, ContentFolderCreateComponent_h5_5_Template, 2, 0, "h5", 5)(6, ContentFolderCreateComponent_h5_6_Template, 2, 0, "h5", 5);
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
            i0.ɵɵtext(18, " Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 12);
            i0.ɵɵelement(20, "input", 13);
            i0.ɵɵtemplate(21, ContentFolderCreateComponent_em_21_Template, 2, 0, "em", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 15)(23, "label", 16)(24, "span");
            i0.ɵɵtext(25, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(26, " Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 12)(28, "select", 17)(29, "option", 18);
            i0.ɵɵtext(30, "--Select Status--");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "option", 19);
            i0.ɵɵtext(32, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "option", 20);
            i0.ɵɵtext(34, "In-Active");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(35, ContentFolderCreateComponent_em_35_Template, 2, 0, "em", 14);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(36, "div", 21)(37, "div", 22);
            i0.ɵɵtemplate(38, ContentFolderCreateComponent_button_38_Template, 2, 0, "button", 23)(39, ContentFolderCreateComponent_button_39_Template, 2, 0, "button", 23);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.type == "add");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.folderForm);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.folderForm.get("name").valid && (ctx.folderForm.get("name").dirty || ctx.folderForm.get("name").touched));
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("ngIf", !ctx.folderForm.get("status").valid && (ctx.folderForm.get("status").dirty || ctx.folderForm.get("status").touched));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.type == "add");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit");
        } }, dependencies: [i6.NgIf, i4.ɵNgNoValidate, i4.NgSelectOption, i4.ɵNgSelectMultipleOption, i4.DefaultValueAccessor, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.FormGroupDirective, i4.FormControlName] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentFolderCreateComponent, [{
        type: Component,
        args: [{ selector: 'app-content-folder-create', template: "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header pb-0\">\n                    <h5 *ngIf=\"type == 'add'\" class=\"text-capitalize\">Add Content Folder</h5>\n                    <h5 *ngIf=\"type == 'edit'\" class=\"text-capitalize\">Edit Content Folder</h5>\n                    <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"folderForm\" class=\"needs-validation user-add\">\n                        <div class=\"form-group col-12 d-flex mt-4 justify-content-center\">\n                            <label class=\"col-12 col-md-4 col-xl-3\" for=\"validationCustom1\"><span>*</span>\n                                Name</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <input class=\"form-control \" formControlName=\"name\" id=\"validationCustom1\"\n                                       placeholder=\"Name\" required=\"\" type=\"text\">\n                                <em *ngIf=\"!folderForm.get('name').valid && (folderForm.get('name').dirty || folderForm.get('name').touched)\" class=\"error\">Name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-12 d-flex justify-content-center\">\n                            <label class=\"col-12 col-md-4 col-xl-3\" for=\"validationCustom5\"><span>*</span>\n                                Status</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <select class=\"form-control\" formControlName=\"status\" id=\"validationCustom5\">\n                                    <option disabled selected>&#45;&#45;Select Status&#45;&#45;</option>\n                                    <option value=\"1\">Active</option>\n                                    <option value=\"2\">In-Active</option>\n                                </select>\n                                <em *ngIf=\"!folderForm.get('status').valid && (folderForm.get('status').dirty || folderForm.get('status').touched)\" class=\"error\">Status is required</em>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"card-footer px-4 py-3\">\n                    <div class=\"pull-right\">\n                        <button (click)=\"addFolder('add')\" *ngIf=\"type == 'add'\" class=\"btn btn-primary\" type=\"button\">Save</button>\n                        <button (click)=\"addFolder('edit')\" *ngIf=\"type == 'edit'\" class=\"btn btn-primary\" type=\"button\">Update</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.AuthService }, { type: i3.ToastrService }, { type: i4.FormBuilder }, { type: i5.StudentService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContentFolderCreateComponent, { className: "ContentFolderCreateComponent" }); })();
//# sourceMappingURL=content-folder-create.component.js.map