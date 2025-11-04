import { Component } from '@angular/core';
import { dateOptions } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/content.service";
import * as i2 from "../../../shared/service/auth.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@nodro7/angular-mydatepicker";
import * as i6 from "ngx-infinite-scroll";
const _c0 = a0 => ({ "active1": a0 });
function DownloadApprovalComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "div", 30)(2, "button", 31);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function DownloadApprovalComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵelement(1, "img", 33);
    i0.ɵɵelementEnd();
} }
function DownloadApprovalComponent_div_50_div_2_i_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 48);
    i0.ɵɵlistener("click", function DownloadApprovalComponent_div_50_div_2_i_18_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r6); const list_r7 = i0.ɵɵnextContext().$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.updateRequest(list_r7, "3")); });
    i0.ɵɵelementEnd();
} }
function DownloadApprovalComponent_div_50_div_2_i_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 49);
    i0.ɵɵlistener("click", function DownloadApprovalComponent_div_50_div_2_i_19_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r8); const list_r7 = i0.ɵɵnextContext().$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.updateRequest(list_r7, "2")); });
    i0.ɵɵelementEnd();
} }
function DownloadApprovalComponent_div_50_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38)(2, "div", 39)(3, "div", 40)(4, "h4")(5, "span", 41);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p")(8, "small", 42);
    i0.ɵɵtext(9, "Class Name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 43);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, "\u00A0 \u00A0 ");
    i0.ɵɵelementStart(13, "small", 42);
    i0.ɵɵtext(14, "Content Name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 44);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 45);
    i0.ɵɵtemplate(18, DownloadApprovalComponent_div_50_div_2_i_18_Template, 1, 0, "i", 46)(19, DownloadApprovalComponent_div_50_div_2_i_19_Template, 1, 0, "i", 47);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const list_r7 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(list_r7.student_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r7.class_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r7.content_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.filterType != "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.filterType != "3");
} }
function DownloadApprovalComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵlistener("scrolled", function DownloadApprovalComponent_div_50_Template_div_scrolled_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onScrollDown($event)); });
    i0.ɵɵelementStart(1, "div", 35);
    i0.ɵɵtemplate(2, DownloadApprovalComponent_div_50_div_2_Template, 20, 5, "div", 36);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("fromRoot", true)("infiniteScrollContainer", ".scrollPanel1")("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.requestData);
} }
export class DownloadApprovalComponent {
    constructor(content, auth) {
        this.content = content;
        this.auth = auth;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
        };
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
        };
        this.requestData = [];
        this.allRequestData = [];
        this.functionCalled = false;
        this.searchStudent = '';
        this.searchContent = '';
        this.startDate = '';
        this.endDate = '';
        this.filterType = '1';
    }
    ngOnInit() {
        this.requestList('1');
    }
    onScrollDown(event) {
        console.log(event);
    }
    updateRequest(item, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: item.content_id,
            class_id: item.class_id,
            student_id: item.student_id,
            answer_request: type
        };
        this.content.updateRequestList(data).subscribe((successData) => {
            this.updateListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_requestList');
        });
    }
    updateListSuccess(successData) {
        if (successData.IsSuccess) {
            this.requestList(this.filterType);
        }
    }
    requestList(type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type
        };
        this.content.answerKeyRequestList(data).subscribe((successData) => {
            this.requestListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_requestList');
        });
    }
    requestListSuccess(successData) {
        if (successData.IsSuccess) {
            this.listData = successData.ResponseObject;
            this.requestData = successData.ResponseObject.data;
            this.allRequestData = successData.ResponseObject.data;
            this.functionCalled = true;
            this.setFilter();
        }
    }
    setFilter() {
        this.requestData = this.allRequestData.filter((item) => {
            return item.student_name.toLowerCase().indexOf(this.searchStudent.toLowerCase()) !== -1 && item.content_name.toLowerCase().indexOf(this.searchContent.toLowerCase()) !== -1;
        });
        if (this.startDate != '' && this.endDate != '') {
            const sd = new Date(this.startDate);
            const ed = new Date(this.endDate);
            this.requestData = this.requestData.filter((item) => {
                const date = new Date(item.created_date);
                return sd <= date && date <= ed;
            });
        }
        else if (this.startDate != '') {
            const sd = new Date(this.startDate);
            this.requestData = this.requestData.filter((item) => {
                const date = new Date(item.created_date);
                return sd <= date;
            });
        }
        else if (this.endDate != '') {
            const ed = new Date(this.endDate);
            this.requestData = this.requestData.filter((item) => {
                const date = new Date(item.created_date);
                return date <= ed;
            });
        }
    }
    onDateChanged(event) {
        this.startDate = event.singleDate.formatted;
        this.setFilter();
    }
    onDateChanged1(event) {
        this.endDate = event.singleDate.formatted;
        this.setFilter();
    }
    static { this.ɵfac = function DownloadApprovalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DownloadApprovalComponent)(i0.ɵɵdirectiveInject(i1.ContentService), i0.ɵɵdirectiveInject(i2.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DownloadApprovalComponent, selectors: [["app-download-approval"]], decls: 51, vars: 19, consts: [["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], [1, "container-fluid"], [1, "row", "mb-3"], [1, "col-md-6", "btn-group"], [1, "btn", "btn-outline-primary", 3, "click", "ngClass"], [1, "badge", "badge-warning", "align-self-center"], [1, "badge", "badge-success", "align-self-center"], [1, "badge", "badge-danger", "align-self-center"], [1, "row", "mb-0"], [1, "form-group", "col-6", "col-md-3", "mb-0"], [1, "col-xl-12", "col-md-12", "form-group", "px-0", "mb-0"], [1, "input-group"], ["angular-mydatepicker", "", "name", "fromdate", "placeholder", "From Date", 1, "form-control", 3, "dateChanged", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar-o"], ["angular-mydatepicker", "", "name", "todate", "placeholder", "To Date", 1, "form-control", 3, "dateChanged", "options"], [1, "col-md-3"], [1, "btn-popup", "pull-right", "mb-0"], ["placeholder", "Search Student", "size", "50", "type", "text", 1, "form-control", 2, "height", "40px", 3, "input", "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["placeholder", "Search Content", "size", "50", "type", "text", 1, "form-control", 2, "height", "40px", 3, "input", "ngModelChange", "ngModel"], ["class", "row d-flex justify-content-center mt-5", 4, "ngIf"], ["id", "custom-pdf-loader", "style", "height: 60vh;", 4, "ngIf"], [1, "row", "list-card", "mt-3"], [1, "scrollPanel1"], ["class", "search-results col-md-12", "infiniteScroll", "", 3, "fromRoot", "infiniteScrollContainer", "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled", 4, "ngIf"], [1, "row", "d-flex", "justify-content-center", "mt-5"], [1, "col-4"], [1, "nodataList"], ["id", "custom-pdf-loader", 2, "height", "60vh"], ["alt", "", "src", "assets/images/pre-loader/loader-01.svg"], ["infiniteScroll", "", 1, "search-results", "col-md-12", 3, "scrolled", "fromRoot", "infiniteScrollContainer", "infiniteScrollDistance", "infiniteScrollThrottle"], [1, "col-md-12", "px-0"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-10"], [1, "t-period", "font-weight-bold", "color-primary"], [1, "font-weight-bold"], [1, "t-name", "capital", "font-weight-bold"], [1, "t-name", "font-weight-bold"], [1, "col-md-2", "d-flex", "justify-content-end", "align-self-center"], ["class", "fa fa-2x cursor fa-check mr-3 color-green", 3, "click", 4, "ngIf"], ["class", "fa fa-2x cursor fa-times mr-3 color-red", 3, "click", 4, "ngIf"], [1, "fa", "fa-2x", "cursor", "fa-check", "mr-3", "color-green", 3, "click"], [1, "fa", "fa-2x", "cursor", "fa-times", "mr-3", "color-red", 3, "click"]], template: function DownloadApprovalComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "button", 5);
            i0.ɵɵlistener("click", function DownloadApprovalComponent_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); ctx.filterType = "1"; return i0.ɵɵresetView(ctx.requestList("1")); });
            i0.ɵɵtext(4, "Pending \u00A0");
            i0.ɵɵelementStart(5, "span", 6);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵlistener("click", function DownloadApprovalComponent_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); ctx.filterType = "3"; return i0.ɵɵresetView(ctx.requestList("3")); });
            i0.ɵɵtext(8, "Approved \u00A0");
            i0.ɵɵelementStart(9, "span", 7);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "button", 5);
            i0.ɵɵlistener("click", function DownloadApprovalComponent_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r1); ctx.filterType = "2"; return i0.ɵɵresetView(ctx.requestList("2")); });
            i0.ɵɵtext(12, "Rejected \u00A0");
            i0.ɵɵelementStart(13, "span", 8);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "input", 13, 0);
            i0.ɵɵlistener("dateChanged", function DownloadApprovalComponent_Template_input_dateChanged_19_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDateChanged($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 14)(22, "button", 15);
            i0.ɵɵlistener("click", function DownloadApprovalComponent_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r1); const dp_r2 = i0.ɵɵreference(20); return i0.ɵɵresetView(dp_r2.toggleCalendar()); });
            i0.ɵɵelement(23, "i", 16);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(24, "div", 10)(25, "div", 11)(26, "div", 12)(27, "input", 17, 1);
            i0.ɵɵlistener("dateChanged", function DownloadApprovalComponent_Template_input_dateChanged_27_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDateChanged1($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 14)(30, "button", 15);
            i0.ɵɵlistener("click", function DownloadApprovalComponent_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r1); const dp1_r3 = i0.ɵɵreference(28); return i0.ɵɵresetView(dp1_r3.toggleCalendar()); });
            i0.ɵɵelement(31, "i", 16);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(32, "div", 18)(33, "div", 19)(34, "div", 12)(35, "input", 20);
            i0.ɵɵlistener("input", function DownloadApprovalComponent_Template_input_input_35_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.setFilter()); });
            i0.ɵɵtwoWayListener("ngModelChange", function DownloadApprovalComponent_Template_input_ngModelChange_35_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchStudent, $event) || (ctx.searchStudent = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div", 14)(37, "button", 21);
            i0.ɵɵelement(38, "i", 22);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(39, "div", 18)(40, "div", 19)(41, "div", 12)(42, "input", 23);
            i0.ɵɵlistener("input", function DownloadApprovalComponent_Template_input_input_42_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.setFilter()); });
            i0.ɵɵtwoWayListener("ngModelChange", function DownloadApprovalComponent_Template_input_ngModelChange_42_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchContent, $event) || (ctx.searchContent = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div", 14)(44, "button", 21);
            i0.ɵɵelement(45, "i", 22);
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵtemplate(46, DownloadApprovalComponent_div_46_Template, 4, 0, "div", 24)(47, DownloadApprovalComponent_div_47_Template, 2, 0, "div", 25);
            i0.ɵɵelementStart(48, "section", 26)(49, "div", 27);
            i0.ɵɵtemplate(50, DownloadApprovalComponent_div_50_Template, 3, 5, "div", 28);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c0, ctx.filterType == "1"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.listData.pending_count);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c0, ctx.filterType == "3"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.listData.accepted_count);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c0, ctx.filterType == "2"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.listData.rejected_count);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("options", ctx.myDpOptions);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("options", ctx.myDpOptions1);
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchStudent);
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchContent);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.requestData == "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.functionCalled);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.requestData != "");
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.AngularMyDatePickerDirective, i6.InfiniteScrollDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DownloadApprovalComponent, [{
        type: Component,
        args: [{ selector: 'app-download-approval', template: "<div class=\"container-fluid\">\n    <div class=\"row mb-3\">\n        <div class=\"col-md-6 btn-group\">\n            <button (click)=\"filterType = '1'; requestList('1')\" [ngClass]=\"{'active1': filterType == '1'}\" class=\"btn btn-outline-primary\">Pending &nbsp;<span class=\"badge badge-warning align-self-center\">{{listData.pending_count}}</span></button>\n            <button (click)=\"filterType = '3'; requestList('3')\" [ngClass]=\"{'active1': filterType == '3'}\" class=\"btn btn-outline-primary\">Approved &nbsp;<span class=\"badge badge-success align-self-center\">{{listData.accepted_count}}</span></button>\n            <button (click)=\"filterType = '2'; requestList('2')\"  [ngClass]=\"{'active1': filterType == '2'}\" class=\"btn btn-outline-primary\">Rejected &nbsp;<span class=\"badge badge-danger align-self-center\">{{listData.rejected_count}}</span></button>\n        </div>\n    </div>\n    <div class=\"row mb-0\">\n<!--        <div class=\"col-md-3 form-group align-self-center\">-->\n<!--            <select class=\"custom-select col-md-12\">-->\n<!--                <option value=\"0\">All</option>-->\n<!--            </select>-->\n<!--        </div>-->\n<!--        <div class=\"col-md-3 form-group align-self-center\">-->\n<!--            <select class=\"custom-select col-md-12\" id=\"content\">-->\n<!--                <option value=\"2\">Assignment</option>-->\n<!--                <option value=\"3\">Assessment</option>-->\n<!--            </select>-->\n<!--        </div>-->\n        <div class=\"form-group col-6 col-md-3 mb-0\">\n            <div class=\"col-xl-12 col-md-12 form-group px-0 mb-0\">\n                <div class=\"input-group\">\n                    <input #dp=\"angular-mydatepicker\" (dateChanged)=\"onDateChanged($event)\" [options]=\"myDpOptions\" angular-mydatepicker\n                           class=\"form-control\" name=\"fromdate\" placeholder=\"From Date\">\n                    <div class=\"input-group-append\">\n                        <button (click)=\"dp.toggleCalendar()\" class=\"btn btn-primary\" type=\"button\">\n                            <i class=\"fa fa-calendar-o\"></i>\n                        </button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group col-6 col-md-3 mb-0\">\n            <div class=\"col-xl-12 col-md-12 form-group px-0 mb-0\">\n                <div class=\"input-group\">\n                    <input #dp1=\"angular-mydatepicker\" (dateChanged)=\"onDateChanged1($event)\" [options]=\"myDpOptions1\"\n                           angular-mydatepicker class=\"form-control\" name=\"todate\" placeholder=\"To Date\"/>\n                    <div class=\"input-group-append\">\n                        <button (click)=\"dp1.toggleCalendar()\" class=\"btn btn-primary\" type=\"button\">\n                            <i class=\"fa fa-calendar-o\"></i>\n                        </button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"btn-popup pull-right mb-0\">\n                <div class=\"input-group\">\n                    <input (input)=\"setFilter()\" [(ngModel)]=\"searchStudent\" class=\"form-control\" placeholder=\"Search Student\" size=\"50\" style=\"height:40px\" type=\"text\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-primary\" type=\"submit\"><i aria-hidden=\"true\" class=\"fa fa-search\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"btn-popup pull-right mb-0\">\n                <div class=\"input-group\">\n                    <input (input)=\"setFilter()\" [(ngModel)]=\"searchContent\" class=\"form-control\" placeholder=\"Search Content\" size=\"50\" style=\"height:40px\" type=\"text\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-primary\" type=\"submit\"><i aria-hidden=\"true\" class=\"fa fa-search\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"requestData == ''\" class=\"row d-flex justify-content-center mt-5\">\n        <div class=\"col-4\">\n            <button class=\"nodataList\">No Data Available!</button>\n        </div>\n    </div>\n    <div *ngIf=\"!functionCalled\" id=\"custom-pdf-loader\" style=\"height: 60vh;\">\n        <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">\n    </div>\n    <section class=\"row list-card mt-3\">\n        <div class=\"scrollPanel1\">\n            <div (scrolled)=\"onScrollDown($event)\"\n                 *ngIf=\"requestData != ''\"\n                 [fromRoot]=\"true\"\n                 [infiniteScrollContainer]=\"'.scrollPanel1'\"\n                 [infiniteScrollDistance]=\"2\"\n                 [infiniteScrollThrottle]=\"50\"\n                 class=\"search-results col-md-12\"\n                 infiniteScroll>\n                <div class=\"col-md-12 px-0\">\n                    <div *ngFor=\"let list of requestData; let i = index\" class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n<!--                                <div class=\"col-1 d-flex justify-content-center align-items-center\">-->\n<!--                                    <figure *ngIf=\"this.list.student_profile == ''\">-->\n<!--                                        <img alt=\"\" class=\"rounded-circle img-50 border\" src=\"assets/images/digital-product/student.png\">-->\n<!--                                    </figure>-->\n<!--                                    <figure *ngIf=\"this.list.student_profile != ''\">-->\n<!--                                        <img class=\"rounded-circle img-50\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.student_profile)\" alt=\"\">-->\n<!--                                    </figure>-->\n<!--                                </div>-->\n                                <div class=\"col-md-10\">\n                                    <h4>\n                                        <span class=\"t-period font-weight-bold color-primary\">{{list.student_name}}</span>\n                                    </h4>\n                                    <p><small class=\"font-weight-bold\">Class Name: </small> <span class=\"t-name capital font-weight-bold\">{{list.class_name}}</span>&nbsp;\n                                        &nbsp; <small class=\"font-weight-bold\">Content Name: </small> <span class=\"t-name font-weight-bold\">{{list.content_name}}</span>\n                                    </p>\n                                </div>\n                                <div class=\"col-md-2 d-flex justify-content-end align-self-center\">\n                                    <i (click)=\"updateRequest(list, '3')\" *ngIf=\"filterType != '2'\" class=\"fa fa-2x cursor fa-check mr-3 color-green\"></i>\n                                    <i (click)=\"updateRequest(list, '2')\" *ngIf=\"filterType != '3'\" class=\"fa fa-2x cursor fa-times mr-3 color-red\"></i>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n" }]
    }], () => [{ type: i1.ContentService }, { type: i2.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DownloadApprovalComponent, { className: "DownloadApprovalComponent" }); })();
//# sourceMappingURL=download-approval.component.js.map