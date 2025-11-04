import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonTable } from '../../../shared/tables/list';
import { TableSearch } from '../../../shared/pipes/table-search/table-search';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/pipes/table-search/table-search";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function TableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r1 = ctx.$implicit;
    i0.ɵɵclassMap(header_r1.HeaderClass);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(header_r1.Name);
} }
function TableComponent_td_6_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 9);
    i0.ɵɵlistener("input", function TableComponent_td_6_input_1_Template_input_input_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.filterFunction(ctx_r2.commonTableData[ctx_r2.TableType].Header)); });
    i0.ɵɵtwoWayListener("ngModelChange", function TableComponent_td_6_input_1_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2); const header_r4 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(header_r4.SearchValue, $event) || (header_r4.SearchValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtwoWayProperty("ngModel", header_r4.SearchValue);
    i0.ɵɵproperty("placeholder", header_r4.Name);
} }
function TableComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, TableComponent_td_6_input_1_Template, 1, 2, "input", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", header_r4.Name != "Actions");
} }
function TableComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 10)(2, "span", 11);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function TableComponent_tr_8_td_1_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵlistener("click", function TableComponent_tr_8_td_1_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r5); const column_r6 = i0.ɵɵnextContext().$implicit; const row_r7 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.emitValue(column_r6.EmitValue, row_r7)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r6 = i0.ɵɵnextContext().$implicit;
    const row_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", column_r6.Name == "Contact Number" && ctx_r2.TableType == "Student" ? row_r7[column_r6.ApiKey] : "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(column_r6.Name == "Contact Number" && ctx_r2.TableType == "Student" ? ctx_r2.showMobileNumber(row_r7[column_r6.ApiKey]) : row_r7[column_r6.ApiKey]);
} }
function TableComponent_tr_8_td_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r6 = i0.ɵɵnextContext().$implicit;
    const row_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", row_r7[column_r6.ApiKey]);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.showDescription(row_r7[column_r6.ApiKey]), "");
} }
function TableComponent_tr_8_td_1_p_3_span_1_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 15);
    i0.ɵɵlistener("click", function TableComponent_tr_8_td_1_p_3_span_1_i_1_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r8); const action_r9 = i0.ɵɵnextContext().$implicit; const row_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.emitValue(action_r9.EmitValue, row_r7)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate2("cursor ", action_r9.IconSrc, " ", action_r9.Class, "");
    i0.ɵɵproperty("title", action_r9.Title);
} }
function TableComponent_tr_8_td_1_p_3_span_1_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 20);
    i0.ɵɵlistener("click", function TableComponent_tr_8_td_1_p_3_span_1_img_2_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r10); const action_r9 = i0.ɵɵnextContext().$implicit; const row_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.emitValue(action_r9.EmitValue, row_r7)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("cursor ", action_r9.Class, "");
    i0.ɵɵproperty("src", action_r9.IconSrc, i0.ɵɵsanitizeUrl)("title", action_r9.Title);
} }
function TableComponent_tr_8_td_1_p_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, TableComponent_tr_8_td_1_p_3_span_1_i_1_Template, 1, 5, "i", 18)(2, TableComponent_tr_8_td_1_p_3_span_1_img_2_Template, 1, 5, "img", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", action_r9.IconType == "font");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", action_r9.IconType == "img");
} }
function TableComponent_tr_8_td_1_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtemplate(1, TableComponent_tr_8_td_1_p_3_span_1_Template, 3, 2, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.commonTableData[ctx_r2.TableType].Action);
} }
function TableComponent_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, TableComponent_tr_8_td_1_span_1_Template, 2, 2, "span", 12)(2, TableComponent_tr_8_td_1_span_2_Template, 2, 2, "span", 13)(3, TableComponent_tr_8_td_1_p_3_Template, 2, 1, "p", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r6 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("", column_r6.Class, " table-spacing");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r6.ApiKey != "Actions" && column_r6.ApiKey != "description");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r6.ApiKey == "description");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", column_r6.ApiKey == "Actions");
} }
function TableComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, TableComponent_tr_8_td_1_Template, 4, 6, "td", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.commonTableData[ctx_r2.TableType].Header);
} }
function TableComponent_nav_9_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 23)(1, "a", 24);
    i0.ɵɵlistener("click", function TableComponent_nav_9_li_8_Template_a_click_1_listener() { const page_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.setCurrentPage(page_r13)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const page_r13 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r2.currentPage === page_r13);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(page_r13);
} }
function TableComponent_nav_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nav", 21)(1, "ul", 22)(2, "li", 23)(3, "a", 24);
    i0.ɵɵlistener("click", function TableComponent_nav_9_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.firstPage()); });
    i0.ɵɵtext(4, "\u00AB");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "li", 23)(6, "a", 24);
    i0.ɵɵlistener("click", function TableComponent_nav_9_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.previousPage()); });
    i0.ɵɵtext(7, "<");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, TableComponent_nav_9_li_8_Template, 3, 3, "li", 25);
    i0.ɵɵelementStart(9, "li", 23)(10, "a", 24);
    i0.ɵɵlistener("click", function TableComponent_nav_9_Template_a_click_10_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.nextPage()); });
    i0.ɵɵtext(11, ">");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "li", 23)(13, "a", 24);
    i0.ɵɵlistener("click", function TableComponent_nav_9_Template_a_click_13_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.lastPage()); });
    i0.ɵɵtext(14, "\u00BB");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("disabled", ctx_r2.currentPage === 1);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("disabled", ctx_r2.currentPage === 1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.pages);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
} }
export class TableComponent {
    constructor(searchPipe) {
        this.searchPipe = searchPipe;
        this.TableType = '';
        this.TableArray = [];
        this.initialPage = 1; // Accept initial page from parent component
        this.clickValue = new EventEmitter();
        this.pageChange = new EventEmitter(); // Emit page changes
        this.commonTableData = CommonTable;
        this.currentPage = 1;
        this.pageSize = 10;
        this.arrayList = [];
        this.maxPagesToShow = 5;
    }
    ngOnInit() {
        this.commonTableData[this.TableType].Header.forEach(items => items.SearchValue = '');
        // Set current page from input if provided
        if (this.initialPage > 0) {
            this.currentPage = this.initialPage;
        }
    }
    ngOnChanges(changes) {
        console.log(this.TableArray, 'change');
        this.arrayList = this.TableArray ?? [];
    }
    showMobileNumber(value) {
        let returnValue = '-';
        value.every((items) => {
            if (items != '') {
                returnValue = items;
                return false;
            }
            return true;
        });
        return returnValue;
    }
    showDescription(value) {
        return value.length > 20 ? value.substring(0, 20 - 1).concat('…') : value != '' ? value : '-';
    }
    emitValue(type, data) {
        type.EmitValue != '' ? this.clickValue.emit({ emitType: type, emitData: data }) : '';
    }
    filterFunction(arrayValue) {
        console.log(this.TableArray, 'table');
        this.currentPage = 1;
        this.arrayList = this.searchPipe.transform(arrayValue, this.TableArray);
        console.log(this.arrayList, 'arrayValue');
    }
    get totalPages() {
        return Math.ceil(this.arrayList.length / this.pageSize);
    }
    get paginatedItems() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = Math.min(startIndex + this.pageSize, this.arrayList.length);
        return this.arrayList.slice(startIndex, endIndex);
    }
    get pages() {
        const totalPages = this.totalPages;
        const currentPage = this.currentPage;
        const maxPagesToShow = this.maxPagesToShow;
        if (totalPages <= maxPagesToShow) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        else {
            let startPage;
            let endPage;
            if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
                startPage = 1;
                endPage = maxPagesToShow;
            }
            else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
                startPage = totalPages - maxPagesToShow + 1;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - Math.floor(maxPagesToShow / 2);
                endPage = currentPage + Math.floor(maxPagesToShow / 2);
            }
            return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
        }
    }
    setCurrentPage(page) {
        this.currentPage = page;
        this.pageChange.emit(this.currentPage); // Emit page change
    }
    firstPage() {
        this.currentPage = 1;
        this.pageChange.emit(this.currentPage); // Emit page change
    }
    lastPage() {
        this.currentPage = this.totalPages;
        this.pageChange.emit(this.currentPage); // Emit page change
    }
    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.pageChange.emit(this.currentPage); // Emit page change
        }
    }
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.pageChange.emit(this.currentPage); // Emit page change
        }
    }
    static { this.ɵfac = function TableComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TableComponent)(i0.ɵɵdirectiveInject(i1.TableSearch)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["app-table"]], inputs: { TableType: "TableType", TableArray: "TableArray", initialPage: "initialPage" }, outputs: { clickValue: "clickValue", pageChange: "pageChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([TableSearch]), i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 10, vars: 5, consts: [[1, "col-md-12", "col-12", "table-responsive", "px-0"], [1, "table", "table-bordered", "table-striped", "table-hover", "mb-3"], [2, "background", "#cdd9f6"], [3, "class", 4, "ngFor", "ngForOf"], [1, "searchInput"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "mb-2", 4, "ngIf"], ["class", "form-control table-input", 3, "ngModel", "placeholder", "input", "ngModelChange", 4, "ngIf"], [1, "form-control", "table-input", 3, "input", "ngModelChange", "ngModel", "placeholder"], ["colspan", "12", 1, "text-center"], [1, "color-primary"], [3, "title", "click", 4, "ngIf"], [3, "title", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], [3, "click", "title"], [3, "title"], [1, "d-flex", "align-items-center"], [3, "class", "title", "click", 4, "ngIf"], ["alt", "", 3, "src", "title", "class", "click", 4, "ngIf"], ["alt", "", 3, "click", "src", "title"], [1, "mb-2"], [1, "pagination", "justify-content-end"], [1, "page-item"], [1, "page-link", "cursor", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "table", 1)(2, "thead", 2);
            i0.ɵɵtemplate(3, TableComponent_th_3_Template, 2, 4, "th", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "tbody")(5, "tr", 4);
            i0.ɵɵtemplate(6, TableComponent_td_6_Template, 2, 1, "td", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, TableComponent_tr_7_Template, 4, 0, "tr", 6)(8, TableComponent_tr_8_Template, 2, 1, "tr", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(9, TableComponent_nav_9_Template, 15, 9, "nav", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.commonTableData[ctx.TableType].Header);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.commonTableData[ctx.TableType].Header);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.arrayList.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.paginatedItems);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.arrayList.length != 0);
        } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, FormsModule, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel], styles: ["span[_ngcontent-%COMP%] {\n  i {\n    font-size: 20px;\n    color: #1e6bb8;\n  }\n  img {\n    font-size: 20px;\n    color: #1e6bb8;\n  }\n}\n\n.table-spacing[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n\n.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  //background-color: #cdd9f633;\n  background-color: white;\n}\n\n.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even) {\n  //background-color: #cdd9f633;\n  background-color: rgba(241, 244, 251, .5);\n}\n\n.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.searchInput[_ngcontent-%COMP%]:hover {\n  //background-color: #cdd9f633;\n  background-color: white;\n}\n\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(241, 244, 251, .5);\n}\n\n.table-input[_ngcontent-%COMP%] {\n  font-weight: 400;\n  line-height: normal;\n  padding: 0.375em 0.75em;\n  margin-bottom: 0;\n  width: 100%;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{ selector: 'app-table', standalone: true, imports: [CommonModule, FormsModule], providers: [TableSearch], template: "<div class=\"col-md-12 col-12 table-responsive px-0\">\n    <table class=\"table table-bordered table-striped table-hover mb-3\">\n        <thead style=\"background: #cdd9f6\">\n            <th class=\"{{header.HeaderClass}}\" *ngFor=\"let header of commonTableData[TableType].Header\">{{header.Name}}</th>\n        </thead>\n        <tbody>\n        <tr class=\"searchInput\">\n            <td *ngFor=\"let header of commonTableData[TableType].Header\">\n                <input (input)=\"filterFunction(commonTableData[TableType].Header)\" [(ngModel)]=\"header.SearchValue\" *ngIf=\"header.Name != 'Actions'\" class=\"form-control table-input\" [placeholder]=\"header.Name\">\n            </td>\n        </tr>\n        <tr *ngIf=\"arrayList.length == 0\">\n            <td colspan=\"12\" class=\"text-center\">\n                <span class=\"color-primary\">No Data Available!</span>\n            </td>\n        </tr>\n        <tr *ngFor=\"let row of paginatedItems;\">\n            <td class=\"{{column.Class}} table-spacing\" *ngFor=\"let column of commonTableData[TableType].Header\">\n                <span (click)=\"emitValue(column.EmitValue, row)\" [title]=\"column.Name == 'Contact Number' && TableType == 'Student' ? row[column.ApiKey] : ''\"\n                      *ngIf=\"column.ApiKey != 'Actions' && column.ApiKey != 'description'\">{{column.Name == 'Contact Number' && TableType == 'Student' ?\n                    showMobileNumber(row[column.ApiKey]) : row[column.ApiKey]}}</span>\n                <span [title]=\"row[column.ApiKey]\" *ngIf=\"column.ApiKey == 'description'\">\n                    {{showDescription(row[column.ApiKey])}}</span>\n                <p class=\"d-flex align-items-center\" *ngIf=\"column.ApiKey == 'Actions'\">\n                    <span *ngFor=\"let action of commonTableData[TableType].Action\">\n                        <i (click)=\"emitValue(action.EmitValue, row)\" *ngIf=\"action.IconType == 'font'\" class=\"cursor {{action.IconSrc}} {{action.Class}}\" [title]=\"action.Title\"></i>\n                        <img (click)=\"emitValue(action.EmitValue, row)\" *ngIf=\"action.IconType == 'img'\" [src]=\"action.IconSrc\" alt=\"\" [title]=\"action.Title\" class=\"cursor {{action.Class}}\">\n                    </span>\n                </p>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n    <nav *ngIf=\"arrayList.length != 0\" class=\"mb-2\">\n        <ul class=\"pagination justify-content-end\">\n            <li class=\"page-item\" [class.disabled]=\"currentPage === 1\">\n                <a class=\"page-link cursor\" (click)=\"firstPage()\">\u00AB</a>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"currentPage === 1\">\n                <a class=\"page-link cursor\" (click)=\"previousPage()\"><</a>\n            </li>\n            <li class=\"page-item\" *ngFor=\"let page of pages\" [class.active]=\"currentPage === page\">\n                <a class=\"page-link cursor\" (click)=\"setCurrentPage(page)\">{{ page }}</a>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"currentPage === totalPages\">\n                <a class=\"page-link cursor\" (click)=\"nextPage()\">></a>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"currentPage === totalPages\">\n                <a class=\"page-link cursor\" (click)=\"lastPage()\">\u00BB</a>\n            </li>\n        </ul>\n    </nav>\n</div>\n", styles: ["span {\n  i {\n    font-size: 20px;\n    color: #1e6bb8;\n  }\n  img {\n    font-size: 20px;\n    color: #1e6bb8;\n  }\n}\n\n.table-spacing {\n  vertical-align: middle;\n}\n\n\n.table-striped tbody tr:nth-of-type(odd) {\n  //background-color: #cdd9f633;\n  background-color: white;\n}\n\n.table-striped tbody tr:nth-of-type(even) {\n  //background-color: #cdd9f633;\n  background-color: rgba(241, 244, 251, .5);\n}\n\n.table-striped tbody tr.searchInput:hover {\n  //background-color: #cdd9f633;\n  background-color: white;\n}\n\n.table-hover tbody tr:hover {\n  background-color: rgba(241, 244, 251, .5);\n}\n\n.table-input {\n  font-weight: 400;\n  line-height: normal;\n  padding: 0.375em 0.75em;\n  margin-bottom: 0;\n  width: 100%;\n}\n"] }]
    }], () => [{ type: i1.TableSearch }], { TableType: [{
            type: Input
        }], TableArray: [{
            type: Input
        }], initialPage: [{
            type: Input
        }], clickValue: [{
            type: Output
        }], pageChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TableComponent, { className: "TableComponent" }); })();
//# sourceMappingURL=table.component.js.map