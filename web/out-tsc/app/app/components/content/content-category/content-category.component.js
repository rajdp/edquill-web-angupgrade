import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { urls } from 'src/app/shared/utils/urls';
import * as i0 from "@angular/core";
import * as i1 from "src/app/shared/service/auth.service";
import * as i2 from "@angular/router";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "src/app/environment.service";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/common";
import * as i7 from "@swimlane/ngx-datatable";
import * as i8 from "../../../shared/pipes/truncate.pipe";
const _c0 = ["categoryViewList"];
const _c1 = () => ["/content/category/add"];
const _c2 = () => ({ emptyMessage: "No Category found" });
function ContentCategoryComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h6", 26);
    i0.ɵɵlistener("click", function ContentCategoryComponent_ng_template_21_Template_h6_click_0_listener() { const row_r3 = i0.ɵɵrestoreView(_r2).row; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.showCategoryList(row_r3)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r3 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r3.category_name);
} }
function ContentCategoryComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 27);
    i0.ɵɵpipe(1, "truncateHtml");
} if (rf & 2) {
    const row_r5 = ctx.row;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", ctx_r3.auth.stripHtml(row_r5.description))("innerHTML", i0.ɵɵpipeBind2(1, 2, row_r5.description, 50), i0.ɵɵsanitizeHtml);
} }
function ContentCategoryComponent_ng_template_25_img_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 30);
} if (rf & 2) {
    const row_r6 = i0.ɵɵnextContext().row;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r3.env.imgUrl + "/" + row_r6.path, i0.ɵɵsanitizeUrl);
} }
function ContentCategoryComponent_ng_template_25_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 31);
} }
function ContentCategoryComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ContentCategoryComponent_ng_template_25_img_0_Template, 1, 1, "img", 28)(1, ContentCategoryComponent_ng_template_25_img_1_Template, 1, 0, "img", 29);
} if (rf & 2) {
    const row_r6 = ctx.row;
    i0.ɵɵproperty("ngIf", row_r6.path != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r6.path == "");
} }
function ContentCategoryComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const row_r7 = ctx.row;
    i0.ɵɵtextInterpolate1(" ", row_r7.display_order, " ");
} }
function ContentCategoryComponent_ng_template_29_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵtext(1, "Active");
    i0.ɵɵelementEnd();
} }
function ContentCategoryComponent_ng_template_29_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵtext(1, "Suspended");
    i0.ɵɵelementEnd();
} }
function ContentCategoryComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ContentCategoryComponent_ng_template_29_span_0_Template, 2, 0, "span", 32)(1, ContentCategoryComponent_ng_template_29_span_1_Template, 2, 0, "span", 33);
} if (rf & 2) {
    const row_r8 = ctx.row;
    i0.ɵɵproperty("ngIf", row_r8.status == "A");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r8.status == "I");
} }
function ContentCategoryComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 36);
    i0.ɵɵlistener("click", function ContentCategoryComponent_ng_template_31_Template_i_click_0_listener() { const row_r10 = i0.ɵɵrestoreView(_r9).row; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.getEditContent(row_r10)); });
    i0.ɵɵelementEnd();
} }
function ContentCategoryComponent_ng_template_32_img_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 30);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r3.env.imgUrl + "/" + ctx_r3.selectedCategoryList.path, i0.ɵɵsanitizeUrl);
} }
function ContentCategoryComponent_ng_template_32_img_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 47);
} }
function ContentCategoryComponent_ng_template_32_span_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵtext(1, "Active");
    i0.ɵɵelementEnd();
} }
function ContentCategoryComponent_ng_template_32_span_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵtext(1, "Suspended");
    i0.ɵɵelementEnd();
} }
function ContentCategoryComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37)(1, "h5", 38);
    i0.ɵɵtext(2, "Content Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 39);
    i0.ɵɵlistener("click", function ContentCategoryComponent_ng_template_32_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 40)(5, "div", 41)(6, "div", 42)(7, "div", 9)(8, "p");
    i0.ɵɵtext(9, "Category Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 15)(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 42)(14, "div", 9)(15, "p");
    i0.ɵɵtext(16, "Description");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(17, "div", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 42)(19, "div", 9)(20, "p");
    i0.ɵɵtext(21, "Cover Image");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 9);
    i0.ɵɵtemplate(23, ContentCategoryComponent_ng_template_32_img_23_Template, 1, 1, "img", 28)(24, ContentCategoryComponent_ng_template_32_img_24_Template, 1, 0, "img", 44);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 42)(26, "div", 9)(27, "p");
    i0.ɵɵtext(28, "Status");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 15)(30, "p");
    i0.ɵɵtemplate(31, ContentCategoryComponent_ng_template_32_span_31_Template, 2, 0, "span", 32)(32, ContentCategoryComponent_ng_template_32_span_32_Template, 2, 0, "span", 33);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(33, "div", 45)(34, "button", 46);
    i0.ɵɵlistener("click", function ContentCategoryComponent_ng_template_32_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.getEditContent(ctx_r3.selectedCategoryList)); });
    i0.ɵɵtext(35, "Edit Content Category");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r3.selectedCategoryList.category_name);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r3.selectedCategoryList.description == "" ? "---" : ctx_r3.selectedCategoryList.description, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r3.selectedCategoryList.path != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedCategoryList.path == "");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r3.selectedCategoryList.status == "A");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedCategoryList.status == "I");
} }
export class ContentCategoryComponent {
    constructor(auth, router, modalService, env, builder) {
        this.auth = auth;
        this.router = router;
        this.modalService = modalService;
        this.env = env;
        this.builder = builder;
        this.categoryListData = [];
        this.categoryListSearchData = [];
        this.searchedValue = '';
        this.getCategoryList();
    }
    ngOnInit() {
    }
    ngDoCheck() {
        setTimeout(() => {
            if (this.table) {
                this.table.recalculate();
            }
        }, 0);
    }
    ngOnDestroy() {
        console.log('OnDestro');
        this.auth.setInputSearchValue('contentCategory', this.searchedValue);
    }
    close() {
        this.modalRef.close();
    }
    getEditContent(row) {
        console.log(row, 'getEditContent');
        this.modalRef ? this.modalRef.close() : '';
        this.auth.setSessionData('edit_content_category_Data', JSON.stringify(row));
        this.router.navigate(['/content/category/edit']);
    }
    showCategoryList(detail) {
        console.log(detail, 'preview');
        this.selectedCategoryList = detail;
        this.modalRef = this.modalService.open(this.categoryViewList, { size: 'xl', backdrop: 'static', centered: true });
    }
    getCategoryList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.contentCategoryList).subscribe((successData) => {
            this.categorylistSuccess(successData);
        }, (error) => {
            console.error(error, 'booking error');
        });
    }
    categorylistSuccess(successData) {
        if (successData.IsSuccess) {
            this.categoryListData = successData.ResponseObject;
            this.categoryListSearchData = successData.ResponseObject;
            this.auth.setSessionData('content_category_maximumCount', this.categoryListData.length);
            this.searchedValue = this.auth.getInputSearchValue('contentCategory');
            this.searchFunction();
            console.log(this.searchedValue, 'sear');
        }
        else {
            this.categoryListData = [];
            this.categoryListSearchData = [];
        }
    }
    searchFunction() {
        const searchValued = this.searchedValue.toLowerCase();
        this.auth.setInputSearchValue('contentCategory', this.searchedValue);
        const temp = this.categoryListSearchData.filter(search => {
            return search.category_name.toLowerCase().indexOf(searchValued) !== -1 || !searchValued;
        });
        this.categoryListData = temp;
        console.log(this.categoryListData, 'categoryListSearchData');
    }
    static { this.ɵfac = function ContentCategoryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentCategoryComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.NgbModal), i0.ɵɵdirectiveInject(i4.EnvironmentService), i0.ɵɵdirectiveInject(i5.FormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContentCategoryComponent, selectors: [["app-content-category"]], viewQuery: function ContentCategoryComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(DatatableComponent, 5);
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.categoryViewList = _t.first);
        } }, decls: 34, vars: 19, consts: [["table", ""], ["categoryViewList", ""], [1, "row"], [1, "col-xl-12", "mb-30"], [1, "card"], [1, "card-header"], [1, "px-0"], [1, "card-body"], [1, "row", "mt-1", "mb-3"], [1, "col-4"], [1, "input-group"], ["type", "text", "size", "50", "placeholder", "Search Category", 1, "form-control", 2, "height", "40px", 3, "input", "ngModelChange", "ngModel"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "col-8"], [1, "btn", "btn-primary", "float-right", 3, "routerLink"], [1, "table-responsive"], [1, "bootstrap", "expandable", "ngx-datatable-design", 2, "font-size", "12px", "border", "1px solid #d1d4d7", "border-radius", "2px", 3, "externalSorting", "rows", "headerHeight", "limit", "footerHeight", "rowHeight", "scrollbarH", "columnMode", "messages"], ["name", "Category Name", "prop", "category_name", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Description", 3, "width"], ["name", "Cover Image", 3, "width"], ["name", "Display Order", "prop", "display_order", 3, "width"], ["name", "Status", "prop", "author", 3, "width"], ["name", "Action", "prop", "batch", 3, "width"], [1, "blue-color", "cursor", 3, "click"], [3, "title", "innerHTML"], ["class", "img-thumbnail", "alt", "Cover Image", 3, "src", 4, "ngIf"], ["alt", "", "src", "assets/images/blog/08.jpg", "class", "img-thumbnail", 4, "ngIf"], ["alt", "Cover Image", 1, "img-thumbnail", 3, "src"], ["alt", "", "src", "assets/images/blog/08.jpg", 1, "img-thumbnail"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], [1, "badge", "badge-success"], [1, "badge", "badge-danger"], ["aria-hidden", "true", "title", "Edit", 1, "fa", "fa-pencil-square", "fa-2x", "fa-edit", "cursor", "text-center", 2, "color", "#00bfff", 3, "click"], [1, "modal-header", "align-items-center"], [1, "contenttext", "text-center", "mb-0"], ["aria-hidden", "true", 1, "fa", "fa", "fa-times-circle", "pull-right", "cursor", "color-red-icon", 3, "click"], [1, "modal-body"], [1, "container-fluid"], [1, "row", "mt-3"], [1, "col-8", 3, "innerHTML"], ["alt", "Card image cap", "class", "card-img-top blogger-detail-img", "src", "assets/images/blog/08.jpg", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-primary", "my-1", "float-left", "float-sm-right", 3, "click"], ["alt", "Card image cap", "src", "assets/images/blog/08.jpg", 1, "card-img-top", "blogger-detail-img"]], template: function ContentCategoryComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h5", 6);
            i0.ɵɵtext(5, "Content Category List");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "input", 11);
            i0.ɵɵlistener("input", function ContentCategoryComponent_Template_input_input_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.searchFunction()); });
            i0.ɵɵtwoWayListener("ngModelChange", function ContentCategoryComponent_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchedValue, $event) || (ctx.searchedValue = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 12)(12, "button", 13);
            i0.ɵɵelement(13, "i", 14);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(14, "div", 15)(15, "button", 16);
            i0.ɵɵtext(16, "Add Content Category");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(17, "div", 17)(18, "ngx-datatable", 18, 0)(20, "ngx-datatable-column", 19);
            i0.ɵɵtemplate(21, ContentCategoryComponent_ng_template_21_Template, 2, 1, "ng-template", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "ngx-datatable-column", 21);
            i0.ɵɵtemplate(23, ContentCategoryComponent_ng_template_23_Template, 2, 5, "ng-template", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "ngx-datatable-column", 22);
            i0.ɵɵtemplate(25, ContentCategoryComponent_ng_template_25_Template, 2, 2, "ng-template", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "ngx-datatable-column", 23);
            i0.ɵɵtemplate(27, ContentCategoryComponent_ng_template_27_Template, 1, 1, "ng-template", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "ngx-datatable-column", 24);
            i0.ɵɵtemplate(29, ContentCategoryComponent_ng_template_29_Template, 2, 2, "ng-template", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "ngx-datatable-column", 25);
            i0.ɵɵtemplate(31, ContentCategoryComponent_ng_template_31_Template, 1, 0, "ng-template", 20);
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵtemplate(32, ContentCategoryComponent_ng_template_32_Template, 36, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchedValue);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(17, _c1));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("externalSorting", false)("rows", ctx.categoryListData)("headerHeight", 50)("limit", 10)("footerHeight", 50)("rowHeight", "auto")("scrollbarH", false)("columnMode", "force")("messages", i0.ɵɵpureFunction0(18, _c2));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("width", 250);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("width", 200);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("width", 150);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("width", 150);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("width", 80);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("width", 80);
        } }, dependencies: [i6.NgIf, i2.RouterLink, i7.DatatableComponent, i7.DataTableColumnDirective, i7.DataTableColumnCellDirective, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i8.TruncateHtmlPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentCategoryComponent, [{
        type: Component,
        args: [{ selector: 'app-content-category', template: "<!-- main body -->\n<div class=\"row\">\n    <div class=\"col-xl-12 mb-30\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h5 class=\"px-0\">Content Category List</h5>\n            </div>\n            <div class=\"card-body\">\n\n                <div class=\"row mt-1 mb-3\">\n                    <div class=\"col-4\">\n                        <div class=\"input-group\">\n                            <input (input)=\"searchFunction()\" type=\"text\" class=\"form-control\" style=\"height:40px\" size=\"50\" placeholder=\"Search Category\" [(ngModel)]=\"searchedValue\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-8\">\n                        <button class=\"btn btn-primary float-right\"\n                                [routerLink]=\"['/content/category/add']\">Add Content Category</button>\n                    </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <ngx-datatable #table\n                                   style=\"font-size: 12px;border: 1px solid #d1d4d7; border-radius: 2px\"\n                                   class=\"bootstrap expandable ngx-datatable-design\"\n                                   [externalSorting]=\"false\" [rows]=\"categoryListData\"\n                                   [headerHeight]=\"50\"\n                                   [limit]=\"10\"\n                                   [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\n                                   [scrollbarH]=\"false\"\n                                   [columnMode]=\"'force'\"\n                                   [messages]=\"{emptyMessage: 'No Category found'}\"\n                    >\n\n                        <ngx-datatable-column name=\"Category Name\" prop=\"category_name\" [width]=\"250\">\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <h6 (click)=\"showCategoryList(row)\" class=\"blue-color cursor\">{{row.category_name}}</h6>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"Description\" [width]=\"200\">\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <span [title]=\"auth.stripHtml(row.description)\" [innerHTML]=\"row.description | truncateHtml : 50\"></span>\n                            </ng-template>\n                        </ngx-datatable-column>\n\n                        <ngx-datatable-column name=\"Cover Image\" [width]=\"150\">\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <img *ngIf=\"row.path != ''\" class=\"img-thumbnail\" [src]=\"env.imgUrl + '/' + row.path\" alt=\"Cover Image\" />\n                                <img alt=\"\" *ngIf=\"row.path == ''\"  src=\"assets/images/blog/08.jpg\" class=\"img-thumbnail\">\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"Display Order\" prop=\"display_order\" [width]=\"150\">\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                {{row.display_order}}\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"Status\" prop=\"author\" [width]=\"80\">\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <span class=\"badge badge-success\" *ngIf=\"row.status == 'A'\">Active</span>\n                                <span class=\"badge badge-danger\" *ngIf=\"row.status == 'I'\">Suspended</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n\n                        <ngx-datatable-column name=\"Action\" prop=\"batch\" [width]=\"80\">\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <i class=\"fa fa-pencil-square fa-2x fa-edit cursor text-center\" aria-hidden=\"true\" (click)=\"getEditContent(row)\" style=\"color:#00bfff;\" title=\"Edit\"></i>\n                            </ng-template>\n                        </ngx-datatable-column>\n\n                    </ngx-datatable>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<ng-template #categoryViewList let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h5 class=\"contenttext text-center mb-0\">Content Category</h5>\n        <i class=\"fa fa fa-times-circle pull-right cursor color-red-icon\" aria-hidden=\"true\" (click)=\"close()\"></i>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"row mt-3\">\n              <div class=\"col-4\">\n                <p>Category Name</p>\n              </div>\n              <div class=\"col-8\">\n                <p>{{selectedCategoryList.category_name}}</p>\n              </div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-4\">\n                <p>Description</p>\n              </div>\n              <div class=\"col-8\" [innerHTML]=\"selectedCategoryList.description == '' ? '---' : selectedCategoryList.description\">\n              </div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-4\">\n                <p>Cover Image</p>\n              </div>\n              <div class=\"col-4\">\n                <img *ngIf=\"selectedCategoryList.path != ''\" class=\"img-thumbnail\" [src]=\"env.imgUrl + '/' + selectedCategoryList.path\"  alt=\"Cover Image\" />\n                <img *ngIf=\"selectedCategoryList.path == ''\" alt=\"Card image cap\" class=\"card-img-top blogger-detail-img\"  src=\"assets/images/blog/08.jpg\">\n              </div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-4\">\n                <p>Status</p>\n              </div>\n              <div class=\"col-8\">\n                <p><span class=\"badge badge-success\" *ngIf=\"selectedCategoryList.status == 'A'\">Active</span>\n                  <span class=\"badge badge-danger\" *ngIf=\"selectedCategoryList.status == 'I'\">Suspended</span></p>\n              </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"getEditContent(selectedCategoryList)\" class=\"btn btn-primary my-1 float-left float-sm-right\">Edit Content Category</button>\n      </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.NgbModal }, { type: i4.EnvironmentService }, { type: i5.FormBuilder }], { table: [{
            type: ViewChild,
            args: [DatatableComponent, { static: false }]
        }], categoryViewList: [{
            type: ViewChild,
            args: ['categoryViewList']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContentCategoryComponent, { className: "ContentCategoryComponent" }); })();
//# sourceMappingURL=content-category.component.js.map