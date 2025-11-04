import { Component, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/student.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../shared/service/auth.service";
import * as i4 from "../../../environment.service";
import * as i5 from "@angular/router";
import * as i6 from "ngx-toastr";
import * as i7 from "../../../shared/service/configuration.service";
import * as i8 from "@angular/common";
import * as i9 from "@angular/forms";
import * as i10 from "@ng-select/ng-select";
import * as i11 from "ng2-pdf-viewer";
const _c0 = ["preview"];
const _c1 = ["shareTemplate"];
function AssignedContentComponent_div_16_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "small", 30);
    i0.ɵɵtext(2, "Grade: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "\u00A0\u00A0");
    i0.ɵɵelementStart(4, "span", 31);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r3.grade_name);
} }
function AssignedContentComponent_div_16_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "small", 30);
    i0.ɵɵtext(2, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "\u00A0\u00A0");
    i0.ɵɵelementStart(4, "span", 31);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r3.subject_name);
} }
function AssignedContentComponent_div_16_ng_select_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ng-select", 33);
    i0.ɵɵlistener("change", function AssignedContentComponent_div_16_ng_select_15_Template_ng_select_change_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.openShareTemplate($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("items", ctx_r3.classList);
} }
function AssignedContentComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "span");
    i0.ɵɵtext(5, "Content Name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, "\u00A0\u00A0\u00A0");
    i0.ɵɵelementStart(7, "h4", 22);
    i0.ɵɵlistener("click", function AssignedContentComponent_div_16_Template_h4_click_7_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.previewContent(item_r3)); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 23)(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, AssignedContentComponent_div_16_div_12_Template, 6, 1, "div", 24)(13, AssignedContentComponent_div_16_div_13_Template, 6, 1, "div", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 26);
    i0.ɵɵtemplate(15, AssignedContentComponent_div_16_ng_select_15_Template, 1, 1, "ng-select", 27);
    i0.ɵɵelementStart(16, "i", 28);
    i0.ɵɵlistener("click", function AssignedContentComponent_div_16_Template_i_click_16_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.showClassDropdown(item_r3)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(item_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("badge ", item_r3.status == "1" ? "badge-green" : "badge-danger", "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.status == "1" ? "Active" : "In-Active");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.grade_name != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.subject_name != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r3.isShowClass);
} }
function AssignedContentComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 35)(2, "span");
    i0.ɵɵtext(3, "No Contents found");
    i0.ɵɵelementEnd()()();
} }
function AssignedContentComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 36)(1, "h4", 37);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 38);
    i0.ɵɵlistener("click", function AssignedContentComponent_ng_template_18_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 39)(5, "div", 2)(6, "div", 40);
    i0.ɵɵelement(7, "pdf-viewer", 41);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.previewDetail.name);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("src", ctx_r3.pdfTemplate);
} }
function AssignedContentComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 36)(1, "span", 42);
    i0.ɵɵtext(2, "Share Content to ");
    i0.ɵɵelementStart(3, "span", 43);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "i", 38);
    i0.ɵɵlistener("click", function AssignedContentComponent_ng_template_20_Template_i_click_5_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.modalRef.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 39)(7, "div", 2)(8, "div", 44)(9, "textarea", 45);
    i0.ɵɵtwoWayListener("ngModelChange", function AssignedContentComponent_ng_template_20_Template_textarea_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.remarks, $event) || (ctx_r3.remarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 46)(11, "button", 14);
    i0.ɵɵlistener("click", function AssignedContentComponent_ng_template_20_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.assignToClass()); });
    i0.ɵɵtext(12, "Assign");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("\u00A0", ctx_r3.shareClassDetail.class_name, "");
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.remarks);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary pull-right ", ctx_r3.env.deviceType() ? "py-0 border-radius-2" : "", "");
} }
export class AssignedContentComponent {
    constructor(student, modalService, auth, env, router, toastr, config) {
        this.student = student;
        this.modalService = modalService;
        this.auth = auth;
        this.env = env;
        this.router = router;
        this.toastr = toastr;
        this.config = config;
        this.assignedContentDetails = [];
        this.assignedContentDetailsAlt = [];
        this.remarks = '';
        this.searchContent = '';
        this.classList = [];
        this.folderDetail = JSON.parse(this.auth.getSessionData('folder-detail'));
        this.webhost = this.config.getimgUrl();
        console.log(this.folderDetail, 'folderDeatil');
    }
    ngOnInit() {
        this.viewAssignedContent();
        this.studentClassList();
    }
    previewContent(detail) {
        this.previewDetail = detail;
        this.pdfTemplate = this.webhost + '/' + this.previewDetail.file_path[0]?.original_image_url;
        this.modalRef = this.modalService.open(this.preview, { size: 'xl' });
    }
    showClassDropdown(detail) {
        this.assignedContentDetails.forEach((items) => {
            items.isShowClass = false;
        });
        detail.isShowClass = true;
        this.shareContentDetail = detail;
    }
    openShareTemplate(event) {
        if (event == undefined) {
            this.shareClassDetail = this.shareContentDetail = '';
        }
        else {
            this.shareClassDetail = event;
            this.modalRef = this.modalService.open(this.shareTemplate, { size: 'md' });
        }
    }
    viewAssignedContent() {
        let category;
        if (this.folderDetail.index == undefined) {
            category = this.folderDetail.category_id;
        }
        else {
            category = this.folderDetail.category_id[this.folderDetail.index];
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            category_id: category
        };
        this.student.folderContent(data).subscribe((successData) => {
            this.viewContentSuccess(successData);
        }, (error) => {
            console.error(error, 'error_folderContent');
        });
    }
    viewContentSuccess(successData) {
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((items) => {
                items.isShowClass = false;
            });
            this.assignedContentDetails = successData.ResponseObject;
            this.assignedContentDetailsAlt = JSON.parse(JSON.stringify(successData.ResponseObject));
        }
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
    assignToClass() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            repository_id: this.shareContentDetail.repository_id,
            class_id: this.shareClassDetail.class_id,
            remarks: this.remarks
        };
        this.student.shareRepository(data).subscribe((successData) => {
            this.shareRepositorySuccess(successData);
        }, (error) => {
            console.error(error, 'error_classList');
            this.shareRepositoryFailure(error);
        });
    }
    shareRepositorySuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.modalRef.close();
            this.assignedContentDetails.forEach((items) => {
                items.isShowClass = false;
            });
        }
        else {
            this.shareRepositoryFailure(successData);
        }
    }
    shareRepositoryFailure(error) {
        this.toastr.error(error.ErrorObject);
        this.modalRef.close();
    }
    updateFilter() {
        this.assignedContentDetails = this.assignedContentDetailsAlt.filter((val) => {
            return val.name.toLowerCase().indexOf(this.searchContent.toLowerCase()) > -1;
        });
    }
    back() {
        this.auth.removeSessionData('folder-detail');
        if (this.folderDetail.name == undefined) {
            this.router.navigate(['studentlogin/content-folder']);
        }
        else {
            this.router.navigate(['studentlogin/repository']);
        }
    }
    static { this.ɵfac = function AssignedContentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AssignedContentComponent)(i0.ɵɵdirectiveInject(i1.StudentService), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.EnvironmentService), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i7.ConfigurationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AssignedContentComponent, selectors: [["app-assigned-content"]], viewQuery: function AssignedContentComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.preview = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.shareTemplate = _t.first);
        } }, decls: 22, vars: 9, consts: [["preview", ""], ["shareTemplate", ""], [1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "row", "mt-2", "px-3"], [1, "col-6"], [1, "col-6", "d-flex", "justify-content-end"], [1, "input-group"], ["placeholder", "Search Content", "size", "50", "type", "text", 1, "form-control", 2, "height", "40px", 3, "ngModelChange", "input", "ngModel"], [1, "input-group-append"], ["type", "submit"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "btn-popup", "pull-right"], [3, "click"], [1, "card-body", "align-content-center", 2, "min-height", "80vh"], ["class", "col-md-12 mb-2", 4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center align-content-center", 4, "ngIf"], [1, "col-md-12", "mb-2"], [1, "customize-card5", "col-md-12", "d-flex", "px-0"], [1, "col-md-8", "d-flex", "flex-wrap"], [1, "col-md-12", "d-flex", "flex-wrap"], [1, "mb-0", "color-primary", "font-weight-bold", "cursor", 3, "click"], [1, "col-md-3", "mt-2"], ["class", "col-md-4 px-0 d-flex mt-2", 4, "ngIf"], ["class", "col-md-5 d-flex pr-0 mt-2", 4, "ngIf"], [1, "col-md-4", "d-flex", "justify-content-end"], ["bindLabel", "class_name", "bindValue", "class_id", "class", "flex-fill align-self-center mr-3", "placeholder", "Select Class *", 3, "items", "change", 4, "ngIf"], ["aria-hidden", "true", "title", "Share to Class", 1, "fa", "fa-share-alt-square", "color-primary", "align-self-center", "cursor", 2, "font-size", "2rem", 3, "click"], [1, "col-md-4", "px-0", "d-flex", "mt-2"], [1, "color-grey", "mb-0", "align-self-center"], [1, "mb-0"], [1, "col-md-5", "d-flex", "pr-0", "mt-2"], ["bindLabel", "class_name", "bindValue", "class_id", "placeholder", "Select Class *", 1, "flex-fill", "align-self-center", "mr-3", 3, "change", "items"], [1, "d-flex", "justify-content-center", "align-content-center"], [1, "nodataList", "col-6", "d-flex", "justify-content-center", "my-3"], [1, "modal-header", "d-flex", "justify-content-between"], [1, "color-primary", "font-weight-bold"], [1, "fa", "fa-times-circle", "cursor", 2, "font-size", "1.2rem", 3, "click"], [1, "modal-body", 2, "border", "0"], [1, "col-md-12"], [2, "display", "block", 3, "src"], [1, "mb-0", "d-flex", "flex-wrap", "font-weight-bold"], [1, "font-weight-bold", "color-primary"], [1, "col-md-12", "mt-2", "px-0"], ["cols", "30", "placeholder", "Enter Remarks here", "rows", "7", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"]], template: function AssignedContentComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
            i0.ɵɵelement(4, "div", 6);
            i0.ɵɵelementStart(5, "div", 7)(6, "div", 6)(7, "div", 8)(8, "input", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function AssignedContentComponent_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchContent, $event) || (ctx.searchContent = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("input", function AssignedContentComponent_Template_input_input_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateFilter()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 10)(10, "button", 11);
            i0.ɵɵelement(11, "i", 12);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(12, "div", 13)(13, "a", 14);
            i0.ɵɵlistener("click", function AssignedContentComponent_Template_a_click_13_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.back()); });
            i0.ɵɵtext(14, "Back");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(15, "div", 15);
            i0.ɵɵtemplate(16, AssignedContentComponent_div_16_Template, 17, 8, "div", 16)(17, AssignedContentComponent_div_17_Template, 4, 0, "div", 17);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(18, AssignedContentComponent_ng_template_18_Template, 8, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(20, AssignedContentComponent_ng_template_20_Template, 13, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchContent);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx.env.deviceType() ? "py-0 border-radius-2" : "", "");
            i0.ɵɵadvance(3);
            i0.ɵɵclassMapInterpolate1("btn btn-primary ml-3 ", ctx.env.deviceType() ? "py-0 border-radius-2" : "", "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.assignedContentDetails);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.assignedContentDetails.length == 0);
        } }, dependencies: [i8.NgForOf, i8.NgIf, i9.DefaultValueAccessor, i9.NgControlStatus, i10.NgSelectComponent, i9.NgModel, i11.PdfViewerComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AssignedContentComponent, [{
        type: Component,
        args: [{ selector: 'app-assigned-content', template: "<div class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"row mt-2 px-3\">\n                <div class=\"col-6\">\n                    <!--                    <h5>Content Folder List</h5>-->\n                </div>\n                <div class=\"col-6 d-flex justify-content-end\">\n                    <div class=\"col-6\">\n                        <div class=\"input-group\">\n                            <input class=\"form-control\" placeholder=\"Search Content\" [(ngModel)]=\"searchContent\" (input)=\"updateFilter()\" size=\"50\" style=\"height:40px\" type=\"text\" >\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary {{env.deviceType() ? 'py-0 border-radius-2' : ''}}\" type=\"submit\"><i aria-hidden=\"true\" class=\"fa fa-search\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"btn-popup pull-right\">\n                        <a (click)=\"back()\" class=\"btn btn-primary ml-3 {{env.deviceType() ? 'py-0 border-radius-2' : ''}}\">Back</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body align-content-center\" style=\"min-height: 80vh\">\n            <div *ngFor=\"let item of assignedContentDetails; let i = index\" class=\"col-md-12 mb-2\">\n                <div class=\"customize-card5 col-md-12 d-flex px-0\">\n                    <div class=\"col-md-8 d-flex flex-wrap\">\n                        <div class=\"col-md-12 d-flex flex-wrap\">\n                            <span>Content Name: </span>&nbsp;&nbsp;&nbsp;<h4 (click)=\"previewContent(item)\" class=\"mb-0 color-primary font-weight-bold cursor\">{{item.name}}</h4>\n                        </div>\n                        <div class=\"col-md-3 mt-2\">\n                            <span class=\"badge {{item.status == '1' ? 'badge-green' : 'badge-danger'}}\">{{item.status == '1' ? 'Active' : 'In-Active'}}</span>\n                        </div>\n                        <div *ngIf=\"item.grade_name != ''\" class=\"col-md-4 px-0 d-flex mt-2\">\n                            <small class=\"color-grey mb-0 align-self-center\">Grade: </small>&nbsp;&nbsp;<span class=\"mb-0\">{{item.grade_name}}</span>\n                        </div>\n                        <div *ngIf=\"item.subject_name != ''\" class=\"col-md-5 d-flex pr-0 mt-2\">\n                            <small class=\"color-grey mb-0 align-self-center\">Subject: </small>&nbsp;&nbsp;<span class=\"mb-0\">{{item.subject_name}}</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 d-flex justify-content-end\">\n                        <ng-select (change)=\"openShareTemplate($event)\"\n                                   *ngIf=\"item.isShowClass\"\n                                   [items]=\"classList\"\n                                   bindLabel=\"class_name\"\n                                   bindValue=\"class_id\"\n                                   class=\"flex-fill align-self-center mr-3\"\n                                   placeholder=\"Select Class *\"\n                        >\n                        </ng-select>\n                        <i (click)=\"showClassDropdown(item)\" aria-hidden=\"true\" title=\"Share to Class\" class=\"fa fa-share-alt-square color-primary align-self-center cursor\" style=\"font-size: 2rem\"></i>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"assignedContentDetails.length == 0\" class=\"d-flex justify-content-center align-content-center\">\n                <div class=\"nodataList col-6 d-flex justify-content-center my-3\">\n                    <span>No Contents found</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #preview let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <h4 class=\"color-primary font-weight-bold\">{{previewDetail.name}}</h4><i (click)=\"this.modalRef.close()\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"col-md-12\">\n                <pdf-viewer  [src]=\"pdfTemplate\" style=\"display: block;\"></pdf-viewer>\n            </div>\n        </div>\n    </div>\n</ng-template>\n<ng-template #shareTemplate let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <span class=\"mb-0 d-flex flex-wrap font-weight-bold\">Share Content to <span class=\"font-weight-bold color-primary\">&nbsp;{{shareClassDetail.class_name}}</span></span><i (click)=\"this.modalRef.close()\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"col-md-12 mt-2 px-0\">\n                <textarea [(ngModel)]=\"this.remarks\" class=\"form-control\" cols=\"30\" placeholder=\"Enter Remarks here\" rows=\"7\"></textarea>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"assignToClass()\" class=\"btn btn-primary pull-right {{env.deviceType() ? 'py-0 border-radius-2' : ''}}\">Assign</button>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.StudentService }, { type: i2.NgbModal }, { type: i3.AuthService }, { type: i4.EnvironmentService }, { type: i5.Router }, { type: i6.ToastrService }, { type: i7.ConfigurationService }], { preview: [{
            type: ViewChild,
            args: ['preview']
        }], shareTemplate: [{
            type: ViewChild,
            args: ['shareTemplate']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AssignedContentComponent, { className: "AssignedContentComponent" }); })();
//# sourceMappingURL=assigned-content.component.js.map