import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "@angular/forms";
import * as i3 from "../../../shared/service/auth.service";
import * as i4 from "../../../shared/service/contentdetail.service";
import * as i5 from "ngx-toastr";
import * as i6 from "@angular/common";
import * as i7 from "@angular/router";
import * as i8 from "../../auth/tiny-mice/tiny-mice.component";
import * as i9 from "@swimlane/ngx-datatable";
import * as i10 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["deletePassageConfirmation"];
const _c1 = ["viewPassage"];
const _c2 = ["passageAddOrEdit"];
function PassageComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function PassageComponent_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addOrEditPassage("add", "")); });
    i0.ɵɵtext(1, "Add Reading Passage");
    i0.ɵɵelementEnd();
} }
function PassageComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const row_r3 = ctx.row;
    i0.ɵɵtextInterpolate1("", row_r3 == null ? null : row_r3.title, " ");
} }
function PassageComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const row_r4 = ctx.row;
    i0.ɵɵtextInterpolate1("", row_r4 == null ? null : row_r4.created_by_name, " ");
} }
function PassageComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "customDateFormat");
} if (rf & 2) {
    const row_r5 = ctx.row;
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(1, 1, row_r5.created_date), " ");
} }
function PassageComponent_ng_template_19_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 23);
    i0.ɵɵlistener("click", function PassageComponent_ng_template_19_i_1_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r8); const row_r7 = i0.ɵɵnextContext().row; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addOrEditPassage("edit", row_r7)); });
    i0.ɵɵelementEnd();
} }
function PassageComponent_ng_template_19_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 24);
    i0.ɵɵlistener("click", function PassageComponent_ng_template_19_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r9); const row_r7 = i0.ɵɵnextContext().row; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openModel(row_r7, "delete")); });
    i0.ɵɵelementEnd();
} }
function PassageComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 20);
    i0.ɵɵlistener("click", function PassageComponent_ng_template_19_Template_i_click_0_listener() { const row_r7 = i0.ɵɵrestoreView(_r6).row; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openModel(row_r7, "view")); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(1, PassageComponent_ng_template_19_i_1_Template, 1, 0, "i", 21)(2, PassageComponent_ng_template_19_i_2_Template, 1, 0, "i", 22);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.addORUpdate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.addORUpdate);
} }
function PassageComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "h4", 26);
    i0.ɵɵtext(2, "Delete Reading Passage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 27);
    i0.ɵɵlistener("click", function PassageComponent_ng_template_20_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 28)(5, "h5");
    i0.ɵɵtext(6, "Are you sure want to delete the ");
    i0.ɵɵelementStart(7, "span", 29);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, " passage?");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 30)(11, "div", 31)(12, "button", 32);
    i0.ɵɵlistener("click", function PassageComponent_ng_template_20_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(13, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 33);
    i0.ɵɵlistener("click", function PassageComponent_ng_template_20_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.passageCREDService("delete")); });
    i0.ɵɵtext(15, "Yes");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.passageDetails == null ? null : ctx_r1.passageDetails.title);
} }
function PassageComponent_ng_template_22_em_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 45);
    i0.ɵɵtext(1, "Title is required");
    i0.ɵɵelementEnd();
} }
function PassageComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "h4", 34)(2, "b", 35);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "i", 27);
    i0.ɵɵlistener("click", function PassageComponent_ng_template_22_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 28)(6, "div", 7)(7, "div", 12)(8, "form", 36)(9, "div", 37)(10, "label", 38)(11, "span", 39);
    i0.ɵɵtext(12, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " Passage Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 40);
    i0.ɵɵelement(15, "input", 41);
    i0.ɵɵtemplate(16, PassageComponent_ng_template_22_em_16_Template, 2, 0, "em", 42);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 37)(18, "label", 43)(19, "span", 39);
    i0.ɵɵtext(20, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21, " Passage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 40)(23, "app-tiny-mice", 44);
    i0.ɵɵlistener("emitEditorValue", function PassageComponent_ng_template_22_Template_app_tiny_mice_emitEditorValue_23_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorValue($event)); });
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(24, "div", 30)(25, "div", 31)(26, "button", 32);
    i0.ɵɵlistener("click", function PassageComponent_ng_template_22_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.formSetValue()); });
    i0.ɵɵtext(27, "Reset");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 33);
    i0.ɵɵlistener("click", function PassageComponent_ng_template_22_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.passageCREDService(ctx_r1.type)); });
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.type, " Reading Passage");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.passageForm);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r1.passageForm.get("title").valid && (ctx_r1.passageForm.get("title").dirty || ctx_r1.passageForm.get("title").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.type == "add" ? false : ctx_r1.passageDetails == null ? null : ctx_r1.passageDetails.passage)("height", 300)("readonly", false)("id", "passageId")("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.type == "add" ? "Submit" : "Update");
} }
function PassageComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "h4", 46)(2, "b");
    i0.ɵɵtext(3, "Preview Passage");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "i", 27);
    i0.ɵɵlistener("click", function PassageComponent_ng_template_24_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 28)(6, "div", 4)(7, "div", 47)(8, "label", 48)(9, "b");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 12);
    i0.ɵɵelement(12, "div", 49);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 30)(14, "div", 31)(15, "button", 32);
    i0.ɵɵlistener("click", function PassageComponent_ng_template_24_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(16, "Close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.passageDetails == null ? null : ctx_r1.passageDetails.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r1.passageDetails == null ? null : ctx_r1.passageDetails.passage, i0.ɵɵsanitizeHtml);
} }
export class PassageComponent {
    constructor(modalService, formBuilder, auth, content, toastr) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.content = content;
        this.toastr = toastr;
        this.type = 'Add';
        this.editorValue = '';
        this.listPassageDetails = [];
        this.addORUpdate = true;
        this.formSetValue();
        this.passageDetails = { title: '', passage: '' };
        // if (this.auth.getRoleId() == '4') {
        //     this.schoolListDetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        //     this.addORUpdate = this.schoolListDetails.permissions[4].permission[0].status == 1;
        // } else {
        //     this.addORUpdate = true;
        // }
        this.addORUpdate = this.auth.manageOwnContent;
    }
    ngOnInit() {
        this.passageCREDService('list');
    }
    addOrEditPassage(type, event) {
        console.log(event, 'dsadas');
        this.type = type;
        if (type == 'edit') {
            this.getPassageValue(event.passage_id, 'edit');
        }
        else {
            this.formSetValue();
            this.modalRef = this.modalService.open(this.passageAddOrEdit, { size: 'xl', backdrop: 'static' });
        }
    }
    getPassageValue(passageid, calledType = '') {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            passage_id: passageid
        };
        this.auth.postService(payload, 'content/listPassage').subscribe((successData) => {
            if (successData.IsSuccess) {
                const findPassage = successData.ResponseObject.find(value => value.passage_id == passageid);
                findPassage && findPassage != '' ? this.passageDetails = findPassage : '';
                if (calledType == 'edit') {
                    this.passageForm.controls.title.patchValue(findPassage.title);
                    this.passageForm.controls.passageEditor.patchValue(findPassage.passage);
                    this.editorValue = findPassage.passage;
                    this.passageDetails = findPassage;
                    this.modalRef = this.modalService.open(this.passageAddOrEdit, { size: 'xl', backdrop: 'static' });
                }
                else {
                    this.modalRef = this.modalService.open(this.viewPassage, { size: 'xl' });
                }
            }
        }, (error) => console.error(error, 'error_passgaeList'));
    }
    getEditorValue(event) {
        console.log(event, 'event');
        this.editorValue = event.editor;
        this.passageForm.controls.passageEditor.patchValue(event.content);
    }
    openModel(event, type) {
        if (type == 'delete') {
            this.passageDetails = event;
            this.modalRef = this.modalService.open(this.deletePassageConfirmation, { size: 'md' });
        }
        else {
            this.getPassageValue(event.passage_id, 'view');
        }
    }
    passageCREDService(type) {
        console.log(this.passageForm.valid, 'validData');
        if ((type == 'add' || type == 'edit') && !this.passageForm.valid) {
            this.toastr.error('Kindly Fill all the fields');
            return false;
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        if (type == 'add' || type == 'edit') {
            data['title'] = this.passageForm.controls.title.value;
            data['passage'] = this.passageForm.controls.passageEditor.value;
            data['status'] = '1';
            type == 'edit' ? data['passage_id'] = this.passageDetails.passage_id : '';
        }
        else if (type == 'delete') {
            data['passage_id'] = this.passageDetails.passage_id;
        }
        this.content.passageAllService(data, type).subscribe((successData) => {
            this.passageCREDSuccess(successData, type);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    passageCREDSuccess(successData, type) {
        console.log(successData, type, 'successData');
        if (successData.IsSuccess) {
            if (type == 'list') {
                this.listPassageDetails = successData.ResponseObject;
            }
            else {
                this.toastr.success(successData.ResponseObject);
                this.passageCREDService('list');
                this.modalRef.close();
            }
        }
    }
    close() {
        this.modalRef.close();
    }
    formSetValue() {
        this.passageForm = this.formBuilder.group({
            title: ['', Validators.required],
            passageEditor: ['', Validators.required]
        });
        this.editorValue != '' ? this.editorValue.setContent('') : '';
    }
    static { this.ɵfac = function PassageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PassageComponent)(i0.ɵɵdirectiveInject(i1.NgbModal), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.ContentdetailService), i0.ɵɵdirectiveInject(i5.ToastrService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PassageComponent, selectors: [["app-passage"]], viewQuery: function PassageComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deletePassageConfirmation = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewPassage = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.passageAddOrEdit = _t.first);
        } }, decls: 26, vars: 9, consts: [["table", ""], ["deletePassageConfirmation", ""], ["passageAddOrEdit", ""], ["viewPassage", ""], [1, "container-fluid"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-12", "my-4"], [1, "btn-popup", "pull-right"], [1, "btn", "cancel", "mr-3", 3, "routerLink"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "col-12"], [1, "bootstrap", 3, "columnMode", "rows", "loadingIndicator", "headerHeight", "footerHeight", "limit", "rowHeight"], ["name", "Passage Title", 1, "contenttext"], ["ngx-datatable-cell-template", ""], ["name", "Created By", 1, "contenttext"], ["name", "Created Date", 1, "contenttext"], ["name", "Action", 1, "contenttext"], [1, "btn", "btn-primary", 3, "click"], ["title", "View Reading Passage", "aria-hidden", "true", 1, "fa", "fa-eye", "text-warning", "cursor", "mr-3", 2, "font-size", "20px", 3, "click"], ["class", "fa fa-pencil text-primary cursor mr-3", "aria-hidden", "true", "style", "font-size: 20px", "title", "Edit Reading Passage", 3, "click", 4, "ngIf"], ["class", "fa fa-trash text-danger cursor mr-2", "title", "Delete Reading Passage", "aria-hidden", "true", "style", "font-size: 20px", 3, "click", 4, "ngIf"], ["aria-hidden", "true", "title", "Edit Reading Passage", 1, "fa", "fa-pencil", "text-primary", "cursor", "mr-3", 2, "font-size", "20px", 3, "click"], ["title", "Delete Reading Passage", "aria-hidden", "true", 1, "fa", "fa-trash", "text-danger", "cursor", "mr-2", 2, "font-size", "20px", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title20", 1, "modal-title", "w-100", "letter"], ["aria-hidden", "true", "title", "Close", 1, "fa", "fa-close", "fa-lg", "mt-1", "cursor", "color-primary", 2, "float", "right", 3, "click"], [1, "modal-body"], [1, "color-primary", "font-weight-bold"], [1, "modal-footer"], [1, "col-12", "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "ml-2", 3, "click"], ["id", "modal-basic-title202", 1, "modal-title", "w-100", "letter"], [1, "text-capitalize"], [3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-2", "col-md-3", 2, "font-size", "15px"], [2, "color", "red"], [1, "col-xl-9", "col-md-10"], ["formControlName", "title", "id", "validationCustom0", "type", "text", "placeholder", "Title", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom1", 1, "col-xl-2", "col-md-3", 2, "font-size", "15px"], [3, "emitEditorValue", "editorPatchValue", "height", "readonly", "id", "showDropBtn", "showInputBtn"], [1, "error"], ["id", "modal-basic-view", 1, "modal-title", "w-100", "letter"], [1, "col-12", "text-center"], [2, "font-size", "20px"], [1, "innerImages6", "scrollPanel2", "mt-3", 3, "innerHTML"]], template: function PassageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9)(6, "button", 10);
            i0.ɵɵtext(7, "Content Library");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, PassageComponent_button_8_Template, 2, 0, "button", 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 12)(10, "ngx-datatable", 13, 0)(12, "ngx-datatable-column", 14);
            i0.ɵɵtemplate(13, PassageComponent_ng_template_13_Template, 1, 1, "ng-template", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "ngx-datatable-column", 16);
            i0.ɵɵtemplate(15, PassageComponent_ng_template_15_Template, 1, 1, "ng-template", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "ngx-datatable-column", 17);
            i0.ɵɵtemplate(17, PassageComponent_ng_template_17_Template, 2, 3, "ng-template", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "ngx-datatable-column", 18);
            i0.ɵɵtemplate(19, PassageComponent_ng_template_19_Template, 3, 2, "ng-template", 15);
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵtemplate(20, PassageComponent_ng_template_20_Template, 16, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(22, PassageComponent_ng_template_22_Template, 30, 10, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(24, PassageComponent_ng_template_24_Template, 17, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("routerLink", "/repository/content-home");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.addORUpdate);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("columnMode", "force")("rows", ctx.listPassageDetails)("loadingIndicator", true)("headerHeight", 40)("footerHeight", 40)("limit", 10)("rowHeight", "auto");
        } }, dependencies: [i6.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.FormGroupDirective, i2.FormControlName, i7.RouterLink, i8.TinyMiceComponent, i9.DatatableComponent, i9.DataTableColumnDirective, i9.DataTableColumnCellDirective, i10.CustomDateFormatPipe], styles: ["ngx-datatable[_ngcontent-%COMP%] {\n    .datatable-header {\n        padding: 0.25rem !important;\n    }\n    &.bootstrap {\n      .datatable-header, .datatable-body {\n        border-bottom: none !important;\n    }\n    }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PassageComponent, [{
        type: Component,
        args: [{ selector: 'app-passage', template: "<div class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-12 my-4\">\n                    <div class=\"btn-popup pull-right\">\n                        <button class=\"btn cancel mr-3\" [routerLink]=\"'/repository/content-home'\">Content Library</button>\n                        <button class=\"btn btn-primary\" *ngIf=\"addORUpdate\" (click)=\"addOrEditPassage('add', '')\">Add Reading Passage</button>\n                    </div>\n                </div>\n\n                <div class=\"col-12\">\n                    <ngx-datatable #table class=\"bootstrap\" [columnMode]=\"'force'\" [rows]=\"listPassageDetails\"\n                                   [loadingIndicator]=\"true\"  [headerHeight]=\"40\" [footerHeight]=\"40\" [limit]=\"10\"\n                                   [rowHeight]=\"'auto'\">\n\n                        <ngx-datatable-column class=\"contenttext\" name=\"Passage Title\">\n                            <ng-template ngx-datatable-cell-template let-row=\"row\">{{row?.title}}\n                            </ng-template>\n                        </ngx-datatable-column>\n\n                        <ngx-datatable-column class=\"contenttext\" name=\"Created By\">\n                            <ng-template ngx-datatable-cell-template let-row=\"row\">{{row?.created_by_name}}\n                            </ng-template>\n                        </ngx-datatable-column>\n\n                        <ngx-datatable-column class=\"contenttext\" name=\"Created Date\">\n                            <ng-template ngx-datatable-cell-template let-row=\"row\">{{row.created_date | customDateFormat}}\n                            </ng-template>\n                        </ngx-datatable-column>\n\n                        <ngx-datatable-column class=\"contenttext\" name=\"Action\">\n                            <ng-template ngx-datatable-cell-template let-row=\"row\">\n                                    <i class=\"fa fa-eye text-warning cursor mr-3\" title=\"View Reading Passage\" (click)=\"openModel(row, 'view')\" aria-hidden=\"true\"\n                                       style=\"font-size: 20px\"></i>\n                                    <i class=\"fa fa-pencil text-primary cursor mr-3\" aria-hidden=\"true\" (click)=\"addOrEditPassage('edit', row)\" style=\"font-size: 20px\"\n                                       title=\"Edit Reading Passage\" *ngIf=\"addORUpdate\"></i>\n                                    <i class=\"fa fa-trash text-danger cursor mr-2\" title=\"Delete Reading Passage\"\n                                       aria-hidden=\"true\" style=\"font-size: 20px\" *ngIf=\"addORUpdate\" (click)=\"openModel(row, 'delete')\"></i>\n\n                            </ng-template>\n                        </ngx-datatable-column>\n\n                    </ngx-datatable>\n                </div>\n\n            </div>\n        </div>\n\n\n    </div>\n</div>\n\n<ng-template #deletePassageConfirmation let-c=\"close\" let-d=\"dismiss\" let-data>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title w-100 letter\" id=\"modal-basic-title20\">Delete Reading Passage</h4>\n        <i class=\"fa fa-close fa-lg mt-1 cursor color-primary\" aria-hidden=\"true\" style=\"float: right;\" \n            title=\"Close\" (click)=\"close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <h5>Are you sure want to delete the <span class=\"color-primary font-weight-bold\">{{passageDetails?.title}}</span> passage?</h5>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"col-12 d-flex justify-content-end\">\n            <button class=\"btn cancel\" (click)=\"close()\" type=\"button\">No</button>\n            <button class=\"btn btn-primary ml-2\" type=\"button\" (click)=\"passageCREDService('delete')\" >Yes</button>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #passageAddOrEdit let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title w-100 letter\" id=\"modal-basic-title202\"><b class=\"text-capitalize\">{{type}} Reading Passage</b>\n        </h4>\n        <i class=\"fa fa-close fa-lg mt-1 cursor color-primary\" aria-hidden=\"true\"\n            title=\"Close\" style=\"float: right;\" (click)=\"close()\"></i>\n    </div>\n\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <form [formGroup]=\"passageForm\">\n                    <div class=\"form-group row\">\n                        <label for=\"validationCustom0\" class=\"col-xl-2 col-md-3\"\n                               style=\"font-size:15px\"><span style=\"color:red;\">*</span>\n                            Passage Title</label>\n                        <div class=\"col-xl-9 col-md-10\">\n                            <input class=\"form-control\" formControlName=\"title\" id=\"validationCustom0\" type=\"text\"\n                                   placeholder=\"Title\" required=\"\">\n                            <em class=\"error\"\n                                *ngIf=\"!passageForm.get('title').valid && (passageForm.get('title').dirty || passageForm.get('title').touched)\">Title\n                                is required</em>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"validationCustom1\" class=\"col-xl-2 col-md-3\"\n                               style=\"font-size:15px\"><span style=\"color:red;\">*</span>\n                            Passage</label>\n                        <div class=\"col-xl-9 col-md-10\">\n                            <app-tiny-mice (emitEditorValue)=\"getEditorValue($event)\"\n                                           [editorPatchValue]=\"type == 'add' ? false : passageDetails?.passage\"\n                                           [height]=\"300\" [readonly]=\"false\"\n                                           [id]=\"'passageId'\" [showDropBtn]=\"false\" [showInputBtn]=\"false\">\n                            </app-tiny-mice>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"col-12 d-flex justify-content-end\">\n            <button class=\"btn cancel\" (click)=\"formSetValue()\" type=\"button\">Reset</button>\n            <button class=\"btn btn-primary ml-2\" (click)=\"passageCREDService(type)\" type=\"button\">{{type == 'add' ? 'Submit' : 'Update'}}</button>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #viewPassage let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title w-100 letter\" id=\"modal-basic-view\"><b>Preview Passage</b></h4>\n        <i class=\"fa fa-close fa-lg mt-1 cursor color-primary\" aria-hidden=\"true\" title=\"Close\"\n            style=\"float: right;\" (click)=\"close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"col-12 text-center\">\n                <label style=\"font-size: 20px;\"><b>{{passageDetails?.title}}</b></label>\n            </div>\n            <div class=\"col-12\">\n                <div class=\"innerImages6 scrollPanel2 mt-3\" [innerHTML]=\"passageDetails?.passage\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"col-12 d-flex justify-content-end\">\n            <button class=\"btn cancel\" (click)=\"close()\" type=\"button\">Close</button>\n        </div>\n    </div>\n</ng-template>\n", styles: ["ngx-datatable {\n    .datatable-header {\n        padding: 0.25rem !important;\n    }\n    &.bootstrap {\n      .datatable-header, .datatable-body {\n        border-bottom: none !important;\n    }\n    }\n}"] }]
    }], () => [{ type: i1.NgbModal }, { type: i2.FormBuilder }, { type: i3.AuthService }, { type: i4.ContentdetailService }, { type: i5.ToastrService }], { deletePassageConfirmation: [{
            type: ViewChild,
            args: ['deletePassageConfirmation']
        }], viewPassage: [{
            type: ViewChild,
            args: ['viewPassage']
        }], passageAddOrEdit: [{
            type: ViewChild,
            args: ['passageAddOrEdit']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PassageComponent, { className: "PassageComponent" }); })();
//# sourceMappingURL=passage.component.js.map