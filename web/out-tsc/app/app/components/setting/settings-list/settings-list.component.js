import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/book.service";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
const _c0 = ["content"];
function SettingsListComponent_ng_template_9_div_29_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", item_r3.category_id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.category_name);
} }
function SettingsListComponent_ng_template_9_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "label", 31);
    i0.ɵɵtext(2, "Contact Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 32)(4, "option", 33);
    i0.ɵɵtext(5, "--Select--");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, SettingsListComponent_ng_template_9_div_29_option_6_Template, 2, 2, "option", 34);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r3.products);
} }
function SettingsListComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "h5", 11);
    i0.ɵɵtext(2, "Add Physical Product");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 12);
    i0.ɵɵlistener("click", function SettingsListComponent_ng_template_9_Template_button_click_3_listener() { const modal_r2 = i0.ɵɵrestoreView(_r1).$implicit; return i0.ɵɵresetView(modal_r2.dismiss("Cross click")); });
    i0.ɵɵelementStart(4, "span", 13);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 14)(7, "form", 15)(8, "div", 16)(9, "div", 17)(10, "label", 18);
    i0.ɵɵtext(11, "Is Parent Category :");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "br");
    i0.ɵɵelementStart(13, "div", 19)(14, "label", 20);
    i0.ɵɵelement(15, "input", 21);
    i0.ɵɵtext(16, "Yes ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 19)(18, "label", 20);
    i0.ɵɵelement(19, "input", 22);
    i0.ɵɵtext(20, "No ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 17)(22, "label", 23);
    i0.ɵɵtext(23, "Category Name :");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(24, "input", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 17)(26, "label", 25);
    i0.ɵɵtext(27, "Description :");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(28, "input", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(29, SettingsListComponent_ng_template_9_div_29_Template, 7, 1, "div", 27);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "div", 28)(31, "button", 29);
    i0.ɵɵlistener("click", function SettingsListComponent_ng_template_9_Template_button_click_31_listener() { const modal_r2 = i0.ɵɵrestoreView(_r1).$implicit; return i0.ɵɵresetView(modal_r2.dismiss("Cross click")); });
    i0.ɵɵtext(32, "Close");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("formGroup", ctx_r3.addCategoryForm);
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("ngIf", ctx_r3.addCategoryForm.controls.is_parent.value == "no");
} }
export class SettingsListComponent {
    constructor(authService, settingsList, formBuilder) {
        this.authService = authService;
        this.settingsList = settingsList;
        this.formBuilder = formBuilder;
        this.products = [];
        this.settings = {
            hideSubHeader: true,
            mode: 'external',
            edit: {
                confirmSave: false,
            },
            actions: {
                position: 'right',
                edit: true
            },
            columns: {
                name: {
                    title: 'Name',
                    editable: false
                },
                value: {
                    title: 'Value',
                    editable: true
                }
            },
        };
        this.getSettingsList();
        this.addCategoryForm = this.formBuilder.group({
            is_parent: [''],
            category_name: [''],
            description: [''],
            parent_category: [''],
            is_edit: ['0'],
            category_id: ['0']
        });
    }
    getSettingsList() {
        const data = {
            user_id: this.authService.getUserId(),
            platform: 'web',
            role_id: this.authService.getRoleId()
        };
        this.settingsList.getSettingsList(data).subscribe((successData) => {
            this.getSettingsListSuccess(successData);
        }, (error) => {
            console.error(error);
        });
    }
    getSettingsListSuccess(successData) {
        if (successData.IsSuccess) {
            this.products = successData.ResponseObject;
        }
    }
    ngOnInit() {
    }
    static { this.ɵfac = function SettingsListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SettingsListComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.BookService), i0.ɵɵdirectiveInject(i3.FormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SettingsListComponent, selectors: [["app-settings-list"]], viewQuery: function SettingsListComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        } }, decls: 13, vars: 0, consts: [["content", ""], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "btn-popup", "pull-right"], ["id", "batchDelete", 1, "category-table", "custom-datatable"], [1, "table-responsive"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "f-w-600"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "needs-validation", 3, "formGroup"], [1, "form"], [1, "form-group"], [1, "mb-1"], [1, "form-check-inline"], [1, "form-check-label"], ["type", "radio", "formControlName", "is_parent", "value", "yes", 1, "form-check-input"], ["type", "radio", "formControlName", "is_parent", "value", "no", 1, "form-check-input"], ["for", "validationCustom01", 1, "mb-1"], ["formControlName", "category_name", "id", "validationCustom01", "type", "text", 1, "form-control"], ["for", "validationCustom02", 1, "mb-1"], ["formControlName", "description", "id", "validationCustom02", "type", "text", 1, "form-control"], ["class", "form-group row", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], [1, "form-group", "row"], [1, "col-xl-3", "col-md-4"], ["formControlName", "parent_category", "required", "", 1, "custom-select", "col-md-7"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SettingsListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h5");
            i0.ɵɵtext(6, "General List");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 6)(8, "div", 7);
            i0.ɵɵtemplate(9, SettingsListComponent_ng_template_9_Template, 33, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 8);
            i0.ɵɵelement(12, "div", 9);
            i0.ɵɵelementEnd()()()()()();
        } }, dependencies: [i4.NgForOf, i4.NgIf, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.RadioControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.FormGroupDirective, i3.FormControlName] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingsListComponent, [{
        type: Component,
        args: [{ selector: 'app-settings-list', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <h5>General List</h5>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"btn-popup pull-right\">\n                        <!--<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-original-title=\"test\"-->\n                                <!--data-target=\"#exampleModal\" (click)=\"open(content)\">Add Category</button>-->\n                        <ng-template #content let-modal>\n                            <div class=\"modal-header\">\n                                <h5 class=\"modal-title f-w-600\" id=\"exampleModalLabel\">Add Physical Product</h5>\n                                <button type=\"button\" class=\"close\" aria-label=\"Close\"\n                                        (click)=\"modal.dismiss('Cross click')\">\n                                    <span aria-hidden=\"true\">&times;</span>\n                                </button>\n                            </div>\n                            <div class=\"modal-body\">\n                                <form [formGroup]=\"addCategoryForm\" class=\"needs-validation\">\n                                    <div class=\"form\">\n                                        <div class=\"form-group\">\n                                            <label class=\"mb-1\">Is Parent Category :</label><br>\n                                            <div class=\"form-check-inline\">\n                                                <label class=\"form-check-label\">\n                                                    <input type=\"radio\" formControlName=\"is_parent\" class=\"form-check-input\" value=\"yes\">Yes\n                                                </label>\n                                            </div>\n                                            <div class=\"form-check-inline\">\n                                                <label class=\"form-check-label\">\n                                                    <input type=\"radio\" formControlName=\"is_parent\" class=\"form-check-input\" value=\"no\">No\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"validationCustom01\" class=\"mb-1\">Category Name :</label>\n                                            <input class=\"form-control\" formControlName=\"category_name\" id=\"validationCustom01\" type=\"text\">\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"validationCustom02\"  class=\"mb-1\">Description :</label>\n                                            <input class=\"form-control\" formControlName=\"description\" id=\"validationCustom02\" type=\"text\">\n                                        </div>\n                                        <div class=\"form-group row\" *ngIf=\"addCategoryForm.controls.is_parent.value == 'no'\">\n                                            <label class=\"col-xl-3 col-md-4\">Contact Category</label>\n                                            <select class=\"custom-select col-md-7\" formControlName=\"parent_category\" required=\"\">\n                                                <option value=\"\">--Select--</option>\n                                                <option *ngFor=\"let item of products\" value=\"{{item.category_id}}\">{{item.category_name}}</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\"\n                                        (click)=\"modal.dismiss('Cross click')\">Close</button>\n                            </div>\n                        </ng-template>\n                    </div>\n                    <div id=\"batchDelete\" class=\"category-table custom-datatable\">\n                        <div class=\"table-responsive\">\n<!--                            <angular2-smart-table [settings]=\"settings\" [source]=\"products\"></angular2-smart-table>-->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Container-fluid Ends-->\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.BookService }, { type: i3.FormBuilder }], { content: [{
            type: ViewChild,
            args: ['content']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SettingsListComponent, { className: "SettingsListComponent" }); })();
export class ButtonViewComponent {
    constructor() {
        this.save = new EventEmitter();
        this.status = false;
        // this.renderValue = this.value.toString().toUpperCase();
    }
    // onNoClick(value): void {
    //   this.dialogRef.close(value);
    // }
    statusListing(event) {
        this.status = !this.status;
        this.rowData.status = this.status;
        this.save.emit(this.rowData);
        // this.statusValue = event;
    }
    static { this.ɵfac = function ButtonViewComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ButtonViewComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonViewComponent, selectors: [["button-view"]], inputs: { value: "value", rowData: "rowData" }, outputs: { save: "save" }, decls: 4, vars: 0, consts: [[1, "form-group"], [1, "mb-1"]], template: function ButtonViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "label", 1);
            i0.ɵɵtext(2, "Featured");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "br");
            i0.ɵɵelementEnd();
        } }, styles: ["\n\n            .switch[_ngcontent-%COMP%] {\n                position: relative;\n                display: inline-block;\n                width: 90px;\n                height: 34px;\n            }\n\n            .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n                display: none;\n            }\n\n            .slider[_ngcontent-%COMP%] {\n                position: absolute;\n                cursor: pointer;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: #ca2222;\n                -webkit-transition: .4s;\n                transition: .4s;\n            }\n\n            .slider[_ngcontent-%COMP%]:before {\n                position: absolute;\n                content: \"\";\n                height: 26px;\n                width: 26px;\n                left: 4px;\n                bottom: 4px;\n                background-color: white;\n                -webkit-transition: .4s;\n                transition: .4s;\n            }\n\n            input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n                background-color: #2ab934;\n            }\n\n            input[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n                box-shadow: 0 0 1px #2196F3;\n            }\n\n            input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n                -webkit-transform: translateX(55px);\n                -ms-transform: translateX(55px);\n                transform: translateX(55px);\n            }\n\n            \n\n            .on[_ngcontent-%COMP%] {\n                display: none;\n            }\n\n            .on[_ngcontent-%COMP%], .off[_ngcontent-%COMP%] {\n                color: white;\n                position: absolute;\n                transform: translate(-50%, -50%);\n                top: 50%;\n                left: 50%;\n                font-size: 10px;\n                font-family: Verdana, sans-serif;\n            }\n\n            input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]   .on[_ngcontent-%COMP%] {\n                display: block;\n            }\n\n            input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]   .off[_ngcontent-%COMP%] {\n                display: none;\n            }\n\n            \n\n\n            \n\n            .slider.round[_ngcontent-%COMP%] {\n                border-radius: 34px;\n            }\n\n            .slider.round[_ngcontent-%COMP%]:before {\n                border-radius: 50%;\n            }\n\n            .btn-qooh-color[_ngcontent-%COMP%] {\n                background: blue;\n                color: #fff;\n            }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonViewComponent, [{
        type: Component,
        args: [{
                selector: 'button-view',
                template: `
        <div class="form-group">
            <label class="mb-1">Featured</label><br>
            <!--<label class="switch ml-2"><input type="checkbox" id="togBtn" [(ngModel)]="status" (change)="statusListing(status)"><div class="slider round"   >&lt;!&ndash;ADDED HTML &ndash;&gt;<span class="on" >ON</span><span class="off" >OFF</span>&lt;!&ndash;END&ndash;&gt;</div></label>-->
        </div>
        <style>
            /*//toogle button on off*/
            .switch {
                position: relative;
                display: inline-block;
                width: 90px;
                height: 34px;
            }

            .switch input {
                display: none;
            }

            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ca2222;
                -webkit-transition: .4s;
                transition: .4s;
            }

            .slider:before {
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                -webkit-transition: .4s;
                transition: .4s;
            }

            input:checked + .slider {
                background-color: #2ab934;
            }

            input:focus + .slider {
                box-shadow: 0 0 1px #2196F3;
            }

            input:checked + .slider:before {
                -webkit-transform: translateX(55px);
                -ms-transform: translateX(55px);
                transform: translateX(55px);
            }

            /*------ ADDED CSS ---------*/
            .on {
                display: none;
            }

            .on, .off {
                color: white;
                position: absolute;
                transform: translate(-50%, -50%);
                top: 50%;
                left: 50%;
                font-size: 10px;
                font-family: Verdana, sans-serif;
            }

            input:checked + .slider .on {
                display: block;
            }

            input:checked + .slider .off {
                display: none;
            }

            /*--------- END --------*/

            /* Rounded sliders */
            .slider.round {
                border-radius: 34px;
            }

            .slider.round:before {
                border-radius: 50%;
            }

            .btn-qooh-color {
                background: blue;
                color: #fff;
            }

        </style>
    `
            }]
    }], () => [], { value: [{
            type: Input
        }], rowData: [{
            type: Input
        }], save: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ButtonViewComponent, { className: "ButtonViewComponent" }); })();
//# sourceMappingURL=settings-list.component.js.map