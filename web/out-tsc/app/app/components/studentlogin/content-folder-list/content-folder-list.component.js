import { Component, ViewChild } from '@angular/core';
import { ColumnMode, SelectionType } from "@swimlane/ngx-datatable";
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/student.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../shared/service/auth.service";
import * as i4 from "@angular/router";
import * as i5 from "ngx-toastr";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
import * as i8 from "@ng-select/ng-select";
import * as i9 from "@swimlane/ngx-datatable";
const _c0 = ["viewContents"];
const _c1 = ["assignClass"];
const _c2 = ["deleteTemplate"];
function ContentFolderListComponent_div_16_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r2 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r2.category_name);
} }
function ContentFolderListComponent_div_16_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, "In-Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 26)(3, "input", 27);
    i0.ɵɵlistener("click", function ContentFolderListComponent_div_16_ng_template_5_Template_input_click_3_listener($event) { const row_r4 = i0.ɵɵrestoreView(_r3).row; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.statusChange($event, row_r4)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "span", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "label");
    i0.ɵɵtext(6, "Active");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r4 = ctx.row;
    i0.ɵɵclassMapInterpolate1("", row_r4.status == "2" ? "color-red" : "", " font-weight-bold mr-2");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", row_r4.status == "1");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("", row_r4.status == "1" ? "color-green" : "", " font-weight-bold ml-2");
} }
function ContentFolderListComponent_div_16_ng_template_7_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "ng-select", 35);
    i0.ɵɵlistener("change", function ContentFolderListComponent_div_16_ng_template_7_div_4_Template_ng_select_change_1_listener($event) { i0.ɵɵrestoreView(_r8); const row_r7 = i0.ɵɵnextContext().row; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.openAssignTemplate($event, row_r7)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r4.classList);
} }
function ContentFolderListComponent_div_16_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 29);
    i0.ɵɵlistener("click", function ContentFolderListComponent_div_16_ng_template_7_Template_i_click_0_listener() { const row_r7 = i0.ɵɵrestoreView(_r6).row; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.shareToClass(row_r7)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "i", 30);
    i0.ɵɵlistener("click", function ContentFolderListComponent_div_16_ng_template_7_Template_i_click_1_listener() { const row_r7 = i0.ɵɵrestoreView(_r6).row; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.viewAssignedContent(row_r7)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "i", 31);
    i0.ɵɵlistener("click", function ContentFolderListComponent_div_16_ng_template_7_Template_i_click_2_listener() { const row_r7 = i0.ɵɵrestoreView(_r6).row; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.editFolder(row_r7)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 32);
    i0.ɵɵlistener("click", function ContentFolderListComponent_div_16_ng_template_7_Template_i_click_3_listener() { const row_r7 = i0.ɵɵrestoreView(_r6).row; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.openDeleteTemplate(row_r7)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ContentFolderListComponent_div_16_ng_template_7_div_4_Template, 2, 1, "div", 33);
} if (rf & 2) {
    const row_r7 = ctx.row;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", row_r7.selected == true);
} }
function ContentFolderListComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "ngx-datatable", 19)(2, "ngx-datatable-column", 20);
    i0.ɵɵtemplate(3, ContentFolderListComponent_div_16_ng_template_3_Template, 2, 1, "ng-template", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ngx-datatable-column", 22);
    i0.ɵɵtemplate(5, ContentFolderListComponent_div_16_ng_template_5_Template, 7, 7, "ng-template", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ngx-datatable-column", 23);
    i0.ɵɵtemplate(7, ContentFolderListComponent_div_16_ng_template_7_Template, 5, 1, "ng-template", 24);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("columnMode", ctx_r4.columnMode.force)("footerHeight", 50)("headerHeight", 50)("limit", 10)("rows", ctx_r4.folderList);
    i0.ɵɵadvance();
    i0.ɵɵproperty("canAutoResize", true)("draggable", false)("width", 30);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("canAutoResize", true)("draggable", false)("width", 20);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("canAutoResize", true)("draggable", false)("width", 30);
} }
function ContentFolderListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36)(1, "div", 37)(2, "button", 38);
    i0.ɵɵtext(3, "No Folder Available!");
    i0.ɵɵelementEnd()()();
} }
function ContentFolderListComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "span", 40);
    i0.ɵɵtext(2, "Assign Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 41);
    i0.ɵɵlistener("click", function ContentFolderListComponent_ng_template_18_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r9); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 42)(5, "div", 2)(6, "div", 43)(7, "textarea", 44);
    i0.ɵɵtwoWayListener("ngModelChange", function ContentFolderListComponent_ng_template_18_Template_textarea_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r4 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r4.remarks, $event) || (ctx_r4.remarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(8, "div", 45)(9, "button", 46);
    i0.ɵɵlistener("click", function ContentFolderListComponent_ng_template_18_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r9); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.assignToContent()); });
    i0.ɵɵtext(10, "Assign");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.remarks);
} }
function ContentFolderListComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "h4", 47);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 41);
    i0.ɵɵlistener("click", function ContentFolderListComponent_ng_template_20_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r10); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 42)(5, "div", 2)(6, "div", 43)(7, "span", 48);
    i0.ɵɵtext(8, "Are you sure to delete this Content Folder?");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 49)(10, "button", 46);
    i0.ɵɵlistener("click", function ContentFolderListComponent_ng_template_20_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r10); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.deleteContent()); });
    i0.ɵɵtext(11, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 50);
    i0.ɵɵlistener("click", function ContentFolderListComponent_ng_template_20_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r10); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.modalRef.close()); });
    i0.ɵɵtext(13, "No");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.deleteDetail.category_name);
} }
export class ContentFolderListComponent {
    constructor(student, modalService, auth, router, toastr) {
        this.student = student;
        this.modalService = modalService;
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.folderList = [];
        this.folderListAlt = [];
        this.selectedFolder = [];
        this.classList = [];
        this.remarks = '';
        this.searchFolder = '';
        this.selectedClass = '';
        this.deleteDetail = '';
        this.selectionType = SelectionType;
        this.columnMode = ColumnMode;
    }
    ngOnInit() {
        this.contentFolderList();
        this.studentClassList();
    }
    updateFilter() {
        this.folderList = this.folderListAlt.filter((val) => {
            return val.category_name.toLowerCase().indexOf(this.searchFolder.toLowerCase()) > -1;
        });
    }
    contentFolderList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId()
        };
        this.student.folderList(data).subscribe((successData) => {
            this.folderListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_repositoryList');
        });
    }
    folderListSuccess(successData) {
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((items) => {
                items.selected = false;
            });
            this.folderList = successData.ResponseObject;
            this.folderListAlt = successData.ResponseObject;
            this.updateFilter();
        }
    }
    viewAssignedContent(detail) {
        this.auth.setSessionData('folder-detail', JSON.stringify(detail));
        this.router.navigate(['/studentlogin/content-details']);
    }
    editFolder(data) {
        this.auth.setSessionData('edit-student-folder', JSON.stringify(data));
        this.router.navigate(['/studentlogin/content-folder/edit']);
    }
    openDeleteTemplate(detail) {
        this.deleteDetail = detail;
        this.modalRef = this.modalService.open(this.deleteTemplate, { size: 'md' });
    }
    openAssignTemplate(detail, row) {
        console.log(detail, 'details');
        this.folderDetails = row;
        this.selectedClass = detail.class_id;
        this.modalRef = this.modalService.open(this.assignClass, { size: 'md' });
    }
    deleteContent() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            category_id: this.deleteDetail.category_id,
            status: '3'
        };
        this.student.editFolder(data).subscribe((successData) => {
            this.contentDeleteSuccess(successData);
        }, (error) => {
            console.error(error, 'error_repositoryList');
        });
    }
    contentDeleteSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.modalRef.close();
            this.contentFolderList();
        }
    }
    selectClass(event) {
        this.selectedClass = event.class_id;
    }
    studentClassList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            type: '1'
        };
        this.student.classList(data).subscribe((successData) => {
            this.classListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_classList');
        });
    }
    classListSuccess(successData) {
        if (successData.IsSuccess) {
            this.classList = successData.ResponseObject;
        }
    }
    assignToContent() {
        if (this.selectedClass != '') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                student_id: this.auth.getUserId(),
                class_id: this.selectedClass,
                category_id: this.folderDetails.category_id,
                remarks: this.remarks
            };
            this.student.shareRepository(data).subscribe((successData) => {
                this.shareRepositorySuccess(successData);
            }, (error) => {
                console.error(error, 'error_classList');
                this.shareRepositoryFailure(error);
            });
        }
        else {
            this.toastr.error('Please Select Class');
        }
    }
    shareRepositorySuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.modalRef.close();
            this.folderList.forEach((items) => {
                items.selected = false;
            });
            this.remarks = '';
            this.selectedClass = '';
        }
        else {
            this.shareRepositoryFailure(successData);
        }
    }
    shareRepositoryFailure(error) {
        this.toastr.error(error.ErrorObject);
        this.modalRef.close();
        this.folderList.forEach((items) => {
            items.selected = false;
        });
    }
    closeModalRefAlt() {
        this.modalRefAlt.close();
        this.remarks = '';
        this.selectedClass = '';
    }
    statusChange(event, detail) {
        console.log(event, 'event value');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            category_name: detail.category_name,
            category_id: detail.category_id,
            status: event.target.checked ? '1' : '2'
        };
        this.student.editFolder(data).subscribe((successData) => {
            this.statusChangeSuccess(successData);
        }, (error) => {
            console.error(error, 'error_editFolder');
        });
    }
    statusChangeSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.contentFolderList();
        }
    }
    shareToClass(detail) {
        this.folderList.forEach((items) => {
            items.selected = false;
        });
        detail.selected = true;
        // this.modalRef = this.modalService.open(this.assignClass, { size: 'md', backdrop: 'static' });
    }
    static { this.ɵfac = function ContentFolderListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentFolderListComponent)(i0.ɵɵdirectiveInject(i1.StudentService), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.ToastrService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContentFolderListComponent, selectors: [["app-content-folder-list"]], viewQuery: function ContentFolderListComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContents = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteTemplate = _t.first);
        } }, decls: 22, vars: 4, consts: [["assignClass", ""], ["deleteTemplate", ""], [1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "row", "mt-2", "px-3"], [1, "col-6"], [1, "col-6", "d-flex", "justify-content-end"], [1, "input-group"], ["placeholder", "Search Content Folder", "size", "50", "type", "text", 1, "form-control", 2, "height", "40px", 3, "input", "ngModelChange", "ngModel"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "btn-popup", "pull-right"], [1, "btn", "btn-primary", "ml-3", 3, "routerLink"], [1, "card-body"], ["class", "col-12 blogger-list", 4, "ngIf"], ["class", "row my-3 d-flex justify-content-center align-items-center", "style", "height: 50vh", 4, "ngIf"], [1, "col-12", "blogger-list"], ["rowHeight", "auto", 1, "bootstrap", "repository-table", 3, "columnMode", "footerHeight", "headerHeight", "limit", "rows"], ["name", "Folder", "prop", "category_name", 3, "canAutoResize", "draggable", "width"], ["ngx-datatable-cell-template", ""], ["name", "Status", 3, "canAutoResize", "draggable", "width"], ["name", "Action", 3, "canAutoResize", "draggable", "width"], ["ngx-datatable-cell-template", "", 1, "justify-content-center"], [1, "text-center", "mb-0", "font-weight-bold", 2, "color", "black"], [1, "toggle"], ["type", "checkbox", 3, "click", "checked"], [1, "slider", "round"], ["title", "Share to Class", 1, "fa", "fa-share-square-o", "color-primary", "align-self-center", "cursor", 2, "font-size", "20px", 3, "click"], ["title", "Assigned Contents", 1, "fa", "fa-folder", "color-primary", "ml-3", "align-self-center", "cursor", 2, "font-size", "20px", 3, "click"], ["title", "Edit", 1, "fa", "fa-pencil-square", "color-primary", "ml-3", "align-self-center", "cursor", 2, "font-size", "20px", 3, "click"], ["title", "Delete", 1, "fa", "fa-trash", "color-primary", "ml-3", "align-self-center", "cursor", 2, "font-size", "20px", 3, "click"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12"], ["appendTo", "body", "bindLabel", "class_name", "bindValue", "class_id", "dropdownPosition", "bottom", "placeholder", "Select Class", 3, "change", "items"], [1, "row", "my-3", "d-flex", "justify-content-center", "align-items-center", 2, "height", "50vh"], [1, "col-4", "text-center"], [1, "nodataList"], [1, "modal-header", "d-flex", "justify-content-between"], [1, "mb-0"], [1, "fa", "fa-times-circle", "cursor", 2, "font-size", "1.2rem", 3, "click"], [1, "modal-body", 2, "border", "0"], [1, "col-md-12", "mt-2"], ["cols", "30", "placeholder", "Enter Remarks here", "rows", "10", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-primary", "pull-right", 3, "click"], [1, "color-primary", "font-weight-bold"], [1, "color-grey"], [1, "col-12", "mt-5", "px-0"], [1, "btn", "btn-outline-primary", "mr-2", "pull-right", 3, "click"]], template: function ContentFolderListComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
            i0.ɵɵelement(4, "div", 6);
            i0.ɵɵelementStart(5, "div", 7)(6, "div", 6)(7, "div", 8)(8, "input", 9);
            i0.ɵɵlistener("input", function ContentFolderListComponent_Template_input_input_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateFilter()); });
            i0.ɵɵtwoWayListener("ngModelChange", function ContentFolderListComponent_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchFolder, $event) || (ctx.searchFolder = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 10)(10, "button", 11);
            i0.ɵɵelement(11, "i", 12);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(12, "div", 13)(13, "a", 14);
            i0.ɵɵtext(14, "Add Content Folder");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(15, "div", 15);
            i0.ɵɵtemplate(16, ContentFolderListComponent_div_16_Template, 8, 14, "div", 16)(17, ContentFolderListComponent_div_17_Template, 4, 0, "div", 17);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(18, ContentFolderListComponent_ng_template_18_Template, 11, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(20, ContentFolderListComponent_ng_template_20_Template, 14, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchFolder);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("routerLink", "/studentlogin/content-folder/add");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.folderList.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.folderList.length == 0);
        } }, dependencies: [i6.NgIf, i7.DefaultValueAccessor, i7.NgControlStatus, i4.RouterLink, i8.NgSelectComponent, i7.NgModel, i9.DatatableComponent, i9.DataTableColumnDirective, i9.DataTableColumnCellDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentFolderListComponent, [{
        type: Component,
        args: [{ selector: 'app-content-folder-list', template: "<div class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"row mt-2 px-3\">\n                <div class=\"col-6\">\n<!--                    <h5>Content Folder List</h5>-->\n                </div>\n                <div class=\"col-6 d-flex justify-content-end\">\n                    <div class=\"col-6\">\n                        <div class=\"input-group\">\n                            <input (input)=\"updateFilter()\" [(ngModel)]=\"searchFolder\" class=\"form-control\" placeholder=\"Search Content Folder\" size=\"50\" style=\"height:40px\" type=\"text\" >\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary\" type=\"submit\"><i aria-hidden=\"true\" class=\"fa fa-search\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"btn-popup pull-right\">\n                        <a [routerLink]=\"'/studentlogin/content-folder/add'\" class=\"btn btn-primary ml-3\">Add Content Folder</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div *ngIf=\"folderList.length != 0\" class=\"col-12 blogger-list\">\n                <ngx-datatable\n                        [columnMode]=\"columnMode.force\"\n                        [footerHeight]=\"50\"\n                        [headerHeight]=\"50\"\n                        [limit]=\"10\"\n                        [rows]=\"folderList\"\n                        class=\"bootstrap repository-table\"\n                        rowHeight=\"auto\"\n                >\n<!--                    <ngx-datatable-column-->\n<!--                            [canAutoResize]=\"false\"-->\n<!--                            [checkboxable]=\"true\"-->\n<!--                            [draggable]=\"false\"-->\n<!--                            [resizeable]=\"false\"-->\n<!--                            [sortable]=\"false\"-->\n<!--                            [width]=\"30\"-->\n<!--                    >-->\n<!--                    </ngx-datatable-column>-->\n                    <ngx-datatable-column [canAutoResize]=\"true\" [draggable]=\"false\" [width]=\"30\" name=\"Folder\" prop=\"category_name\">\n                        <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\" ngx-datatable-cell-template>\n                            <h6 class=\"text-center mb-0 font-weight-bold\" style=\"color: black\">{{row.category_name}}</h6>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column [canAutoResize]=\"true\" [draggable]=\"false\" [width]=\"20\" name=\"Status\">\n                        <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\" ngx-datatable-cell-template>\n<!--                            <select (change)=\"statusChange($event, row)\" [(ngModel)]=\"row.status\" class=\"form-control text-center col-12 d-flex justify-content-center\">-->\n<!--                                <option value=\"1\">Active</option>-->\n<!--                                <option value=\"2\">In-Active</option>-->\n<!--                            </select>-->\n<!--                            <div class=\"btn-group\">-->\n<!--                                <button class=\"{{row.status == '1' ? 'toggle-active' : 'toggle-outline-inactive'}}\">Active</button>-->\n<!--                                <button class=\"{{row.status == '2' ? 'toggle-inactive' : 'toggle-outline-active'}}\">In-Active</button>-->\n<!--                            </div>-->\n                            <label class=\"{{row.status == '2' ? 'color-red' : ''}} font-weight-bold mr-2\">In-Active</label>\n                            <label class=\"toggle\">\n                                <input (click)=\"statusChange($event, row)\" [checked]=\"row.status == '1'\" type=\"checkbox\">\n                                <span class=\"slider round\"></span>\n                            </label>\n                            <label class=\"{{row.status == '1' ? 'color-green' : ''}} font-weight-bold ml-2\">Active</label>\n                        </ng-template>\n                    </ngx-datatable-column>\n                    <ngx-datatable-column [canAutoResize]=\"true\" [draggable]=\"false\" [width]=\"30\" name=\"Action\">\n                        <ng-template class=\"justify-content-center\" let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\" ngx-datatable-cell-template>\n                            <i (click)=\"shareToClass(row)\" class=\"fa fa-share-square-o color-primary align-self-center cursor\" style=\"font-size: 20px\" title=\"Share to Class\"></i>\n                            <i (click)=\"viewAssignedContent(row)\" class=\"fa fa-folder color-primary ml-3 align-self-center cursor\" style=\"font-size: 20px\" title=\"Assigned Contents\"></i>\n                            <i (click)=\"editFolder(row)\" class=\"fa fa-pencil-square color-primary ml-3 align-self-center cursor\" style=\"font-size: 20px\" title=\"Edit\"></i>\n                            <i (click)=\"openDeleteTemplate(row)\" class=\"fa fa-trash color-primary ml-3 align-self-center cursor\" style=\"font-size: 20px\" title=\"Delete\"></i>\n                            <div *ngIf=\"row.selected == true\" class=\"col-md-12\">\n                                <ng-select (change)=\"openAssignTemplate($event, row)\"\n                                           [items]=\"classList\"\n                                            appendTo=\"body\"\n                                            bindLabel=\"class_name\"\n                                            bindValue=\"class_id\"\n                                            dropdownPosition=\"bottom\"\n                                            placeholder=\"Select Class\">\n                                </ng-select>\n                            </div>\n                        </ng-template>\n                    </ngx-datatable-column>\n                </ngx-datatable>\n            </div>\n            <div *ngIf=\"folderList.length == 0\" class=\"row my-3 d-flex justify-content-center align-items-center\" style=\"height: 50vh\">\n                <div class=\"col-4 text-center\">\n                    <button class=\"nodataList\">No Folder Available!</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #assignClass let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <span class=\"mb-0\">Assign Class</span><i (click)=\"this.modalRef.close()\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"col-md-12 mt-2\">\n                <textarea [(ngModel)]=\"this.remarks\" class=\"form-control\" cols=\"30\" placeholder=\"Enter Remarks here\" rows=\"10\"></textarea>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"assignToContent()\" class=\"btn btn-primary pull-right\">Assign</button>\n    </div>\n</ng-template>\n<ng-template #deleteTemplate let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <h4 class=\"color-primary font-weight-bold\">{{deleteDetail.category_name}}</h4><i (click)=\"this.modalRef.close()\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"col-md-12 mt-2\">\n                <span class=\"color-grey\">Are you sure to delete this Content Folder?</span>\n            </div>\n            <div class=\"col-12 mt-5 px-0\">\n                <button (click)=\"deleteContent()\" class=\"btn btn-primary pull-right\">Confirm</button>\n                <button (click)=\"modalRef.close()\" class=\"btn btn-outline-primary mr-2 pull-right\">No</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n\n<!--<ng-template #viewContents let-c=\"close\" let-d=\"dismiss\">-->\n<!--    <div class=\"modal-header d-flex justify-content-between\">-->\n<!--        <span class=\"mb-0\">Assigned Contents for <h4 class=\"color-primary font-weight-bold\">{{folderDetails.category_name}}</h4></span><i (click)=\"this.modalRef.close()\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>-->\n<!--    </div>-->\n<!--    <div class=\"modal-body\" style=\"border: 0\">-->\n<!--        <div class=\"container-fluid\">-->\n<!--            <div *ngFor=\"let item of assignedContentDetails; let i = index\" class=\"col-md-12 mb-2\">-->\n<!--                <div class=\"customize-card5 col-md-12 d-flex px-0\">-->\n<!--                    <div class=\"col-md-8 d-flex flex-wrap\">-->\n<!--                        <div class=\"col-md-12 d-flex flex-wrap\">-->\n<!--                            <span>Content Name: </span>&nbsp;&nbsp;&nbsp;<h4 class=\"mb-0 color-primary font-weight-bold\">{{item.name}}</h4>-->\n<!--                        </div>-->\n<!--                        <div class=\"col-md-3 mt-2\">-->\n<!--                            <span class=\"badge {{item.status == '1' ? 'badge-green' : 'badge-danger'}}\">{{item.status == '1' ? 'Active' : 'In-Active'}}</span>-->\n<!--                        </div>-->\n<!--                        <div *ngIf=\"item.grade_name != ''\" class=\"col-md-4 px-0 d-flex mt-2\">-->\n<!--                            <small class=\"color-grey mb-0 align-self-center\">Grade: </small>&nbsp;&nbsp;<span class=\"mb-0\">{{item.grade_name}}</span>-->\n<!--                        </div>-->\n<!--                        <div *ngIf=\"item.subject_name != ''\" class=\"col-md-5 d-flex pr-0 mt-2\">-->\n<!--                            <small class=\"color-grey mb-0 align-self-center\">Subject: </small>&nbsp;&nbsp;<span class=\"mb-0\">{{item.subject_name}}</span>-->\n<!--                        </div>-->\n<!--                    </div>-->\n<!--                    <div class=\"col-md-4 d-flex justify-content-end\">-->\n<!--                        <i aria-hidden=\"true\" class=\"fa fa-share-alt-square color-primary align-self-center cursor\" style=\"font-size: 2rem\"></i>-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div *ngIf=\"assignedContentDetails.length == 0\">-->\n<!--                <div class=\"nodataList col-6 d-flex justify-content-center my-3\">-->\n<!--                    <span>No Contents found</span>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--    </div>-->\n<!--</ng-template>-->\n" }]
    }], () => [{ type: i1.StudentService }, { type: i2.NgbModal }, { type: i3.AuthService }, { type: i4.Router }, { type: i5.ToastrService }], { viewContents: [{
            type: ViewChild,
            args: ['viewContents']
        }], assignClass: [{
            type: ViewChild,
            args: ['assignClass']
        }], deleteTemplate: [{
            type: ViewChild,
            args: ['deleteTemplate']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContentFolderListComponent, { className: "ContentFolderListComponent" }); })();
//# sourceMappingURL=content-folder-list.component.js.map