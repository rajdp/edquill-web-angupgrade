import { Component, ViewChild } from '@angular/core';
import { urls } from '../../../shared/utils/urls';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "@angular/router";
import * as i3 from "../../../shared/service/common-data.service";
import * as i4 from "../../../shared/service/newsubject.service";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
import * as i7 from "@swimlane/ngx-datatable";
import * as i8 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = () => ({ emptyMessage: "No Orders Available!" });
function OrderListComponent_ng_template_17_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 27);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "span", 27);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td")(8, "span", 27);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td")(11, "span", 27);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td")(14, "span", 27);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const orderData_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(orderData_r2.course_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(orderData_r2.schedule_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", orderData_r2.price, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(orderData_r2.quantity);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", orderData_r2.total_price, "");
} }
function OrderListComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "table", 24)(2, "thead", 25)(3, "th");
    i0.ɵɵtext(4, "Course Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Schedule Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Price");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "Quantity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Total Price");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "tbody");
    i0.ɵɵtemplate(14, OrderListComponent_ng_template_17_tr_14_Template, 16, 5, "tr", 26);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const row_r3 = ctx.row;
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngForOf", row_r3.cart_data);
} }
function OrderListComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r4 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", row_r4.payment_id, "");
} }
function OrderListComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r5 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r5.full_name);
} }
function OrderListComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r6 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r6.email_id);
} }
function OrderListComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r7 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r7.mobile && row_r7.mobile != "" ? row_r7.mobile : "-");
} }
function OrderListComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r8 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, row_r8.payment_date));
} }
function OrderListComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r9 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("$", row_r9.total, "");
} }
function OrderListComponent_ng_template_31_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1, "Success");
    i0.ɵɵelementEnd();
} }
function OrderListComponent_ng_template_31_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵtext(1, "Failed");
    i0.ɵɵelementEnd();
} }
function OrderListComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OrderListComponent_ng_template_31_span_0_Template, 2, 0, "span", 29)(1, OrderListComponent_ng_template_31_span_1_Template, 2, 0, "span", 30);
} if (rf & 2) {
    const row_r10 = ctx.row;
    i0.ɵɵproperty("ngIf", row_r10.payment_status == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r10.payment_status != "1");
} }
function OrderListComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("click", function OrderListComponent_ng_template_33_Template_span_click_0_listener() { const row_r12 = i0.ɵɵrestoreView(_r11).row; i0.ɵɵnextContext(); const table_r13 = i0.ɵɵreference(14); return i0.ɵɵresetView(table_r13.rowDetail.toggleExpandRow(row_r12)); });
    i0.ɵɵelement(1, "i", 34);
    i0.ɵɵelementEnd();
} }
export class OrderListComponent {
    constructor(auth, router, Common, newService) {
        this.auth = auth;
        this.router = router;
        this.Common = Common;
        this.newService = newService;
        this.orderListData = [];
        this.rows = [];
        this.recordPerPage = 10;
        this.searchedValue = '';
        this.schoolStatus = {};
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        if (this.schoolStatus.length != 0) {
            this.newService.schoolChange.subscribe((res) => {
                if (res != '') {
                    if (this.router.url.includes('list-class')) {
                        this.getOrderList();
                    }
                }
                else {
                    this.getOrderList();
                }
            });
        }
    }
    ngDoCheck() {
        setTimeout(() => {
            if (this.ngxTable) {
                this.ngxTable.recalculate();
            }
        }, 0);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.orderListPage) {
            this.orderListPage.unsubscribe();
        }
    }
    getOrderList() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.auth.postService(payload, urls.orderList).subscribe((successData) => {
            console.log(successData, 'subject_sucessData');
            successData.ResponseObject.forEach(data => data.full_name = data.first_name != '' && data.first_name ? (data.first_name + ' ' + data.last_name) : '-');
            this.orderListData = successData.IsSuccess ? successData.ResponseObject : [];
            this.rows = successData.IsSuccess ? successData.ResponseObject : [];
            console.log(this.rows, 'rows');
            this.searchList();
        }, error => {
            console.error(error, 'error');
        });
    }
    searchList() {
        let arrayValue = this.orderListData;
        const searchValued = this.searchedValue.trimStart();
        arrayValue = arrayValue.filter(search => {
            return search.payment_id.toLowerCase().indexOf(searchValued) !== -1 || search.full_name.toLowerCase().indexOf(searchValued) !== -1 || !searchValued;
        });
        this.rows = arrayValue;
        console.log(arrayValue, 'aara');
    }
    static { this.ɵfac = function OrderListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OrderListComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.CommonDataService), i0.ɵɵdirectiveInject(i4.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OrderListComponent, selectors: [["app-order-list"]], viewQuery: function OrderListComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(DatatableComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ngxTable = _t.first);
        } }, decls: 34, vars: 13, consts: [["table", ""], ["rowDetail", ""], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "col-12", "d-flex", "align-items-center"], [1, "px-0"], [1, "card-body"], [1, "form-group", "col-4"], ["type", "text", 1, "form-control", 2, "height", "36px", 3, "input", "ngModelChange", "ngModel", "placeholder"], [1, "bootstrap", "ngx-datatable-design", 2, "border", "1px solid #d1d4d7", "border-radius", "2px", 3, "externalSorting", "rows", "headerHeight", "limit", "footerHeight", "rowHeight", "scrollbarH", "columnMode", "messages"], [3, "rowHeight"], ["ngx-datatable-row-detail-template", ""], ["name", "Order Id", "prop", "payment_id"], ["ngx-datatable-cell-template", ""], ["name", "Student Name"], ["name", "Email-Id"], ["name", "Contact Number"], ["name", "Order Created Date"], ["name", "Total Amount"], ["name", "Payment Status"], ["name", "Action", "prop", "batch"], [1, "p-3", "ms-2", "me-4", "my-2", "table-responsive", "table"], [1, "col-12", "px-0", "table-bordered"], [2, "background", "#8F008A", "color", "#FFFFFF"], [4, "ngFor", "ngForOf"], [1, "primary-color"], [1, "text-capitalize"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], [1, "badge", "badge-success"], [1, "badge", "badge-danger"], [3, "click"], ["aria-hidden", "true", "title", "View Order Details", 1, "fa", "fa-eye", "color-primary", "cursor", "text-center", 2, "font-size", "20px"]], template: function OrderListComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 2)(5, "div", 6)(6, "h5", 7);
            i0.ɵɵtext(7, "Order List Details");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(8, "div", 8)(9, "div", 2)(10, "div", 9)(11, "input", 10);
            i0.ɵɵlistener("input", function OrderListComponent_Template_input_input_11_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.searchList()); });
            i0.ɵɵtwoWayListener("ngModelChange", function OrderListComponent_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchedValue, $event) || (ctx.searchedValue = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 3)(13, "ngx-datatable", 11, 0)(15, "ngx-datatable-row-detail", 12, 1);
            i0.ɵɵtemplate(17, OrderListComponent_ng_template_17_Template, 15, 1, "ng-template", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "ngx-datatable-column", 14);
            i0.ɵɵtemplate(19, OrderListComponent_ng_template_19_Template, 2, 1, "ng-template", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "ngx-datatable-column", 16);
            i0.ɵɵtemplate(21, OrderListComponent_ng_template_21_Template, 2, 1, "ng-template", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "ngx-datatable-column", 17);
            i0.ɵɵtemplate(23, OrderListComponent_ng_template_23_Template, 2, 1, "ng-template", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "ngx-datatable-column", 18);
            i0.ɵɵtemplate(25, OrderListComponent_ng_template_25_Template, 2, 1, "ng-template", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "ngx-datatable-column", 19);
            i0.ɵɵtemplate(27, OrderListComponent_ng_template_27_Template, 3, 3, "ng-template", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "ngx-datatable-column", 20);
            i0.ɵɵtemplate(29, OrderListComponent_ng_template_29_Template, 2, 1, "ng-template", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "ngx-datatable-column", 21);
            i0.ɵɵtemplate(31, OrderListComponent_ng_template_31_Template, 2, 2, "ng-template", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "ngx-datatable-column", 22);
            i0.ɵɵtemplate(33, OrderListComponent_ng_template_33_Template, 2, 0, "ng-template", 15);
            i0.ɵɵelementEnd()()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchedValue);
            i0.ɵɵproperty("placeholder", "Search using Student name or Order Id");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("externalSorting", false)("rows", ctx.rows)("headerHeight", 50)("limit", ctx.recordPerPage)("footerHeight", 50)("rowHeight", "auto")("scrollbarH", false)("columnMode", "force")("messages", i0.ɵɵpureFunction0(12, _c0));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("rowHeight", "auto");
        } }, dependencies: [i5.NgForOf, i5.NgIf, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i7.DatatableComponent, i7.DatatableRowDetailDirective, i7.DatatableRowDetailTemplateDirective, i7.DataTableColumnDirective, i7.DataTableColumnCellDirective, i8.CustomDateFormatPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderListComponent, [{
        type: Component,
        args: [{ selector: 'app-order-list', template: "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n          <div class=\"col-12 d-flex align-items-center\">\n            <h5 class=\"px-0\">Order List Details</h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"form-group col-4\">\n            <input (input)=\"searchList()\" [(ngModel)]=\"searchedValue\" style=\"height: 36px\" type='text' class=\"form-control\"\n                   [placeholder]=\"'Search using Student name or Order Id'\"/>\n          </div>\n          <div class=\"col-12\">\n            <ngx-datatable #table\n                           style=\"border: 1px solid #d1d4d7; border-radius: 2px\"\n                           class=\"bootstrap ngx-datatable-design\"\n                           [externalSorting]=\"false\" [rows]=\"rows\"\n                           [headerHeight]=\"50\"\n                           [limit]=\"recordPerPage\"\n                           [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\n                           [scrollbarH]=\"false\"\n                           [columnMode]=\"'force'\"\n                           [messages]=\"{emptyMessage: 'No Orders Available!'}\"\n            >\n              <!-- Row Detail Template -->\n              <ngx-datatable-row-detail  [rowHeight]=\"'auto'\" #rowDetail>\n                <ng-template let-row=\"row\" ngx-datatable-row-detail-template>\n                  <div class=\"p-3 ms-2 me-4 my-2 table-responsive table\">\n                    <table class=\"col-12 px-0 table-bordered\">\n                      <thead style=\"background: #8F008A; color: #FFFFFF\">\n                      <th>Course Name</th>\n                      <th>Schedule Name</th>\n                      <th>Price</th>\n                      <th>Quantity</th>\n                      <th>Total Price</th>\n                      </thead>\n                      <tbody>\n                      <tr *ngFor=\"let orderData of row.cart_data\">\n                        <td><span class=\"primary-color\">{{orderData.course_name}}</span></td>\n                        <td><span class=\"primary-color\">{{orderData.schedule_name}}</span></td>\n                        <td><span class=\"primary-color\">${{orderData.price}}</span></td>\n                        <td><span class=\"primary-color\">{{orderData.quantity}}</span></td>\n                        <td><span class=\"primary-color\">${{orderData.total_price}}</span></td>\n                      </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </ng-template>\n              </ngx-datatable-row-detail>\n\n              <ngx-datatable-column name=\"Order Id\" prop=\"payment_id\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  <span>  {{row.payment_id}}</span>\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Student Name\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  <span class=\"text-capitalize\">{{row.full_name}}</span>\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Email-Id\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  <span class=\"text-capitalize\">{{row.email_id}}</span>\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Contact Number\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  <span class=\"text-capitalize\">{{row.mobile && row.mobile != '' ? row.mobile : '-'}}</span>\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Order Created Date\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  <span>{{row.payment_date | customDateFormat }}</span>\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Total Amount\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  <span>${{row.total}}</span>\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Payment Status\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  <span class=\"badge badge-success\" *ngIf=\"row.payment_status == '1'\">Success</span>\n                  <span class=\"badge badge-danger\" *ngIf=\"row.payment_status != '1'\">Failed</span>\n                </ng-template>\n              </ngx-datatable-column>\n\n              <ngx-datatable-column name=\"Action\" prop=\"batch\">\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                    <span (click)=\"table.rowDetail.toggleExpandRow(row)\">\n                      <i style=\"font-size: 20px\" class=\"fa fa-eye color-primary cursor text-center\" aria-hidden=\"true\" title=\"View Order Details\"></i>\n                    </span>\n                </ng-template>\n              </ngx-datatable-column>\n\n            </ngx-datatable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.CommonDataService }, { type: i4.NewsubjectService }], { ngxTable: [{
            type: ViewChild,
            args: [DatatableComponent, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OrderListComponent, { className: "OrderListComponent" }); })();
//# sourceMappingURL=order-list.component.js.map