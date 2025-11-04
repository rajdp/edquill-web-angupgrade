import { Component, ViewChild } from '@angular/core';
import { dateOptions } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "@angular/router";
import * as i4 from "../../../shared/service/common-data.service";
import * as i5 from "../../../shared/service/corporate.service";
import * as i6 from "ngx-toastr";
import * as i7 from "@angular/common";
import * as i8 from "../../../shared/service/School.service";
import * as i9 from "@angular/forms";
import * as i10 from "../../../shared/service/newsubject.service";
import * as i11 from "@swimlane/ngx-datatable";
import * as i12 from "@nodro7/angular-mydatepicker";
import * as i13 from "../../corporateschool/emptyschool/emptyschool.component";
const _c0 = ["content"];
const _c1 = ["editSchool"];
function RequestComponent_div_0_div_5_div_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r4 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r4.corporate_name);
} }
function RequestComponent_div_0_div_5_div_6_ng_template_6_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 24);
} }
function RequestComponent_div_0_div_5_div_6_ng_template_6_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 25);
} }
function RequestComponent_div_0_div_5_div_6_ng_template_6_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 26);
} }
function RequestComponent_div_0_div_5_div_6_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RequestComponent_div_0_div_5_div_6_ng_template_6_i_0_Template, 1, 0, "i", 21)(1, RequestComponent_div_0_div_5_div_6_ng_template_6_i_1_Template, 1, 0, "i", 22)(2, RequestComponent_div_0_div_5_div_6_ng_template_6_i_2_Template, 1, 0, "i", 23);
} if (rf & 2) {
    const value_r5 = ctx.value;
    i0.ɵɵproperty("ngIf", value_r5 == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", value_r5 == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", value_r5 == "3");
} }
function RequestComponent_div_0_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 16)(2, "ngx-datatable", 17);
    i0.ɵɵlistener("page", function RequestComponent_div_0_div_5_div_6_Template_ngx_datatable_page_2_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.setPage($event)); });
    i0.ɵɵelementStart(3, "ngx-datatable-column", 18);
    i0.ɵɵtemplate(4, RequestComponent_div_0_div_5_div_6_ng_template_4_Template, 2, 1, "ng-template", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ngx-datatable-column", 20);
    i0.ɵɵtemplate(6, RequestComponent_div_0_div_5_div_6_ng_template_6_Template, 3, 3, "ng-template", 19);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("rows", ctx_r1.listData)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("externalPaging", true)("count", ctx_r1.totalrecords)("offset", ctx_r1.pageOffSet)("limit", ctx_r1.recordsperpage);
} }
function RequestComponent_div_0_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28)(2, "button", 29);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.message);
} }
function RequestComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "button", 13);
    i0.ɵɵlistener("click", function RequestComponent_div_0_div_5_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addRequest()); });
    i0.ɵɵtext(5, "Add Request");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(6, RequestComponent_div_0_div_5_div_6_Template, 7, 9, "div", 14)(7, RequestComponent_div_0_div_5_div_7_Template, 4, 1, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.noRecord);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.noRecord);
} }
function RequestComponent_div_0_div_6_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r7 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r7.school_name);
} }
function RequestComponent_div_0_div_6_div_1_ng_template_6_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 24);
} }
function RequestComponent_div_0_div_6_div_1_ng_template_6_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 25);
} }
function RequestComponent_div_0_div_6_div_1_ng_template_6_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 26);
} }
function RequestComponent_div_0_div_6_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RequestComponent_div_0_div_6_div_1_ng_template_6_i_0_Template, 1, 0, "i", 21)(1, RequestComponent_div_0_div_6_div_1_ng_template_6_i_1_Template, 1, 0, "i", 22)(2, RequestComponent_div_0_div_6_div_1_ng_template_6_i_2_Template, 1, 0, "i", 23);
} if (rf & 2) {
    const value_r8 = ctx.value;
    i0.ɵɵproperty("ngIf", value_r8 == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", value_r8 == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", value_r8 == "3");
} }
function RequestComponent_div_0_div_6_div_1_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 32);
    i0.ɵɵlistener("click", function RequestComponent_div_0_div_6_div_1_ng_template_8_Template_i_click_0_listener() { const row_r10 = i0.ɵɵrestoreView(_r9).row; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.editRequest(row_r10)); });
    i0.ɵɵelementEnd();
} }
function RequestComponent_div_0_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 16)(2, "ngx-datatable", 17);
    i0.ɵɵlistener("page", function RequestComponent_div_0_div_6_div_1_Template_ngx_datatable_page_2_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.setPage($event)); });
    i0.ɵɵelementStart(3, "ngx-datatable-column", 30);
    i0.ɵɵtemplate(4, RequestComponent_div_0_div_6_div_1_ng_template_4_Template, 2, 1, "ng-template", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ngx-datatable-column", 20);
    i0.ɵɵtemplate(6, RequestComponent_div_0_div_6_div_1_ng_template_6_Template, 3, 3, "ng-template", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "ngx-datatable-column", 31);
    i0.ɵɵtemplate(8, RequestComponent_div_0_div_6_div_1_ng_template_8_Template, 1, 0, "ng-template", 19);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("rows", ctx_r1.listData)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("externalPaging", true)("count", ctx_r1.totalrecords)("offset", ctx_r1.pageOffSet)("limit", ctx_r1.recordsperpage);
} }
function RequestComponent_div_0_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28)(2, "button", 29);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.message);
} }
function RequestComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, RequestComponent_div_0_div_6_div_1_Template, 9, 9, "div", 14)(2, RequestComponent_div_0_div_6_div_2_Template, 4, 1, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.noRecord);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.noRecord);
} }
function RequestComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h5");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, RequestComponent_div_0_div_5_Template, 8, 2, "div", 8)(6, RequestComponent_div_0_div_6_Template, 3, 2, "div", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.auth.getRoleId() == "6" ? "Pending Approval Details" : "Corporate Access Details");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.adminPage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.corporatePage);
} }
function RequestComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "h4", 34)(2, "b");
    i0.ɵɵtext(3, "Enter Request Code");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 35)(5, "div", 36)(6, "div", 37)(7, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function RequestComponent_ng_template_1_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.requestCode, $event) || (ctx_r1.requestCode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(8, "div", 39)(9, "button", 40);
    i0.ɵɵlistener("click", function RequestComponent_ng_template_1_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(10, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 41);
    i0.ɵɵlistener("click", function RequestComponent_ng_template_1_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addRequestCode()); });
    i0.ɵɵtext(12, "Confirm");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.requestCode);
} }
function RequestComponent_ng_template_3_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "form", 54)(2, "div", 42)(3, "label", 55)(4, "span", 56);
    i0.ɵɵtext(5, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " Validity Date:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 57)(8, "div", 58);
    i0.ɵɵelement(9, "input", 59, 2);
    i0.ɵɵelementStart(11, "div", 60)(12, "button", 41);
    i0.ɵɵlistener("click", function RequestComponent_ng_template_3_div_31_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r13); const dp_r14 = i0.ɵɵreference(10); return i0.ɵɵresetView(dp_r14.toggleCalendar()); });
    i0.ɵɵelement(13, "i", 61);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.codeform);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions);
} }
function RequestComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "h4", 34)(2, "b");
    i0.ɵɵtext(3, "Enter Request Code");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 35)(5, "div", 36)(6, "div", 10)(7, "div", 16)(8, "div", 42)(9, "label", 43)(10, "span", 44);
    i0.ɵɵtext(11, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, "School Name:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 45)(14, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function RequestComponent_ng_template_3_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.schoolName, $event) || (ctx_r1.schoolName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(15, "div", 16)(16, "div", 42)(17, "label", 47)(18, "span", 44);
    i0.ɵɵtext(19, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20, " Status:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 45)(22, "select", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function RequestComponent_ng_template_3_Template_select_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.corporateStatuts, $event) || (ctx_r1.corporateStatuts = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function RequestComponent_ng_template_3_Template_select_change_22_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectStatus($event)); });
    i0.ɵɵelementStart(23, "option", 49);
    i0.ɵɵtext(24, "--Select--");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 50);
    i0.ɵɵtext(26, "Approved");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "option", 51);
    i0.ɵɵtext(28, "Pending");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "option", 52);
    i0.ɵɵtext(30, "rejected");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(31, RequestComponent_ng_template_3_div_31_Template, 14, 2, "div", 53);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "div", 39)(33, "button", 40);
    i0.ɵɵlistener("click", function RequestComponent_ng_template_3_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(34, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "button", 41);
    i0.ɵɵlistener("click", function RequestComponent_ng_template_3_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.editRequestDetail()); });
    i0.ɵɵtext(36, "Confirm");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.schoolName);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.corporateStatuts);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r1.selectApproved);
} }
function RequestComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
export class RequestComponent {
    constructor(auth, modalService, route, commondata, corporate, toastr, datePipe, brandservices, formBuilder, newSubject) {
        this.auth = auth;
        this.modalService = modalService;
        this.route = route;
        this.commondata = commondata;
        this.corporate = corporate;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.brandservices = brandservices;
        this.formBuilder = formBuilder;
        this.newSubject = newSubject;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate() - 1
            },
        };
        this.noRecord = false;
        this.selectApproved = false;
        this.codeform = this.formBuilder.group({
            date: ''
        });
        if (this.auth.getRoleId() == '2') {
            this.adminPage = true;
        }
        else if (this.auth.getRoleId() == '6') {
            this.corporatePage = true;
        }
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        if (this.schoolStatus.length != 0) {
            this.newSubject.schoolChange.subscribe(params => {
                if (params != '') {
                    if (this.route.url.includes('request')) {
                        this.init();
                    }
                }
                else {
                    this.init();
                }
            });
        }
    }
    ngOnInit() {
        this.corporateSchoolControl = true;
        this.brandservices.changeSideCorporateSchoolList(this.corporateSchoolControl);
    }
    ngOnDestroy() {
        this.corporateSchoolControl = false;
        this.brandservices.changeSideCorporateSchoolList(this.corporateSchoolControl);
    }
    init() {
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.recordsperpage = 10;
        this.pageOffSet = 0;
        this.pageno = 1;
        this.corporateStatuts = '';
        this.requestList();
    }
    addRequest() {
        this.modalRef = this.modalService.open(this.requestContent);
    }
    editRequest(eve) {
        this.modalRef = this.modalService.open(this.editSchool);
        this.schoolName = eve.school_name;
        this.schoolId = eve.school_id;
        this.corporateId = eve.corporate_id;
        this.corporateStatuts = eve.status;
        this.editStatus(this.corporateStatuts);
        if (eve.validity != '0000-00-00') {
            const ed = eve.validity.split('-');
            const edObject = {
                isRange: false,
                singleDate: { jsDate: new Date(parseInt(ed[0]), parseInt(ed[1]) - 1, parseInt(ed[2])) },
                dateRange: null
            };
            this.codeform.controls.date.patchValue(edObject);
        }
        else {
            this.codeform.controls.date.patchValue(null);
        }
    }
    close() {
        this.modalRef.close();
    }
    setPage(pageInfo) {
        console.log(pageInfo, 'inside');
        this.pageno = pageInfo.offset + 1;
        this.pageOffSet = pageInfo.offset;
    }
    selectStatus(eve) {
        this.selectApproved = eve.target.value == '1';
    }
    editStatus(value) {
        this.selectApproved = value == '1';
    }
    requestList() {
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
        };
        if (this.auth.getRoleId() == '2') {
            data['school_id'] = this.auth.getSessionData('school_id');
            this.corporate.getRequestList(data).subscribe((successData) => {
                this.requestListSuccess(successData);
            }, (error) => {
                this.commondata.showLoader(false);
                console.error(error, 'error');
            });
        }
        else if (this.auth.getRoleId() == '6') {
            data['corporate_id'] = this.auth.getSessionData('corporate_id');
            this.corporate.getRequestList(data).subscribe((successData) => {
                this.requestListSuccess(successData);
            }, (error) => {
                this.commondata.showLoader(false);
                console.error(error, 'error');
            });
        }
    }
    requestListSuccess(successData) {
        if (successData.IsSuccess) {
            this.noRecord = true;
            this.listData = successData.ResponseObject.data;
            this.totalrecords = successData.ResponseObject.count;
        }
        else {
            this.noRecord = false;
            this.message = successData.ResponseObject;
        }
    }
    addRequestCode() {
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            corporate_code: this.requestCode,
        };
        this.corporate.setRequestCode(data).subscribe((successData) => {
            this.requestCodeSuccess(successData);
        }, (error) => {
            this.commondata.showLoader(false);
            console.error(error, 'error');
        });
    }
    requestCodeSuccess(successData) {
        if (successData.IsSuccess) {
            this.close();
            this.toastr.success(successData.ResponseObject);
            this.noRecord = true;
            this.requestList();
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    editRequestDetail() {
        if (this.selectApproved) {
            if (this.codeform.controls.date.value == null) {
                this.toastr.error('Please Fill the mandatory field');
                return false;
            }
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId,
            corporate_id: this.corporateId,
            status: this.corporateStatuts,
            validity: this.codeform.controls.date.value == null ? '' : this.datePipe.transform(this.codeform.controls.date.value.singleDate.jsDate, 'yyyy-MM-dd')
        };
        this.corporate.editRequestDetails(data).subscribe((successData) => {
            this.editRequestSuccess(successData);
        }, (error) => {
            this.commondata.showLoader(false);
            console.error(error, 'error');
        });
    }
    editRequestSuccess(successData) {
        if (successData.IsSuccess) {
            this.close();
            this.toastr.success(successData.ResponseObject);
            this.noRecord = true;
            this.requestList();
        }
    }
    static { this.ɵfac = function RequestComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RequestComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.CommonDataService), i0.ɵɵdirectiveInject(i5.CorporateService), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i7.DatePipe), i0.ɵɵdirectiveInject(i8.SchoolService), i0.ɵɵdirectiveInject(i9.FormBuilder), i0.ɵɵdirectiveInject(i10.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RequestComponent, selectors: [["app-request"]], viewQuery: function RequestComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.requestContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editSchool = _t.first);
        } }, decls: 6, vars: 2, consts: [["content", ""], ["editSchool", ""], ["dp", "angular-mydatepicker"], ["class", "container-fluid missed-work-report", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid", "missed-work-report"], [1, "card"], [1, "card-header"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [1, "row"], [1, "col-md-12"], [1, "btn-popup", "pull-right"], [1, "btn", "btn-primary", 3, "click"], ["class", "row", 4, "ngIf"], ["class", "row d-flex justify-content-center list-card mt-3", 4, "ngIf"], [1, "col-12"], [1, "bootstrap", 3, "page", "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "externalPaging", "count", "offset", "limit"], ["name", "Corporate Name", "prop", "student_name"], ["ngx-datatable-cell-template", ""], ["name", "Status", "prop", "status"], ["class", "fa fa-check text-success fa-2x", "title", "Completed", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-clock-o text-warning fa-2x", "title", "Pending", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-times text-danger fa-2x", "title", "Rejected", "aria-hidden", "true", 4, "ngIf"], ["title", "Completed", "aria-hidden", "true", 1, "fa", "fa-check", "text-success", "fa-2x"], ["title", "Pending", "aria-hidden", "true", 1, "fa", "fa-clock-o", "text-warning", "fa-2x"], ["title", "Rejected", "aria-hidden", "true", 1, "fa", "fa-times", "text-danger", "fa-2x"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-3"], [1, "col-6"], [1, "nodataList"], ["name", "School Name", "prop", "school_name"], ["name", "Action"], ["title", "Edit", "aria-hidden", "true", 1, "fa", "fa-pencil", "text-primary", "fa-2x", "cursor", 3, "click"], [1, "modal-header"], [1, "modal-title", "col-12", "text-center"], [1, "modal-body"], [1, "container-fluid"], [1, "row", "form-group", "auth-form", "my-2"], ["type", "text", "placeholder", "Request Code", 1, "form-control", 2, "padding", "20px !important", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-4"], [2, "visibility", "hidden"], [1, "col-8"], ["type", "text", "placeholder", "Request Code", "id", "validationCustom0", "readonly", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "validationCustom1", 1, "col-4"], ["id", "validationCustom1", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", "", "hidden", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["class", "col-12", 4, "ngIf"], [3, "formGroup"], [1, "col-4"], [1, "text-danger"], [1, "col-8", "form-group"], [1, "input-group"], ["name", "fromdate", "placeholder", "mm-dd-yyyy", "formControlName", "date", "angular-mydatepicker", "", 1, "form-control", 3, "options"], [1, "input-group-append"], [1, "fa", "fa-calendar-o"]], template: function RequestComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RequestComponent_div_0_Template, 7, 3, "div", 3)(1, RequestComponent_ng_template_1_Template, 13, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, RequestComponent_ng_template_3_Template, 37, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(5, RequestComponent_div_5_Template, 2, 0, "div", 4);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length != 0);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length == 0);
        } }, dependencies: [i7.NgIf, i11.DatatableComponent, i11.DataTableColumnDirective, i11.DataTableColumnCellDirective, i9.ɵNgNoValidate, i9.NgSelectOption, i9.ɵNgSelectMultipleOption, i9.DefaultValueAccessor, i9.SelectControlValueAccessor, i9.NgControlStatus, i9.NgControlStatusGroup, i9.NgModel, i12.AngularMyDatePickerDirective, i13.EmptyschoolComponent, i9.FormGroupDirective, i9.FormControlName] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RequestComponent, [{
        type: Component,
        args: [{ selector: 'app-request', template: "<!-- Container-fluid starts-->\n<div *ngIf=\"schoolStatus.length != 0\" class=\"container-fluid missed-work-report\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5>{{auth.getRoleId() == '6' ? 'Pending Approval Details' : 'Corporate Access Details'}}</h5>\n        </div>\n        <div class=\"card-body\" *ngIf=\"adminPage\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"btn-popup pull-right\">\n                        <button class=\"btn btn-primary\" (click)=\"addRequest()\">Add Request</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"noRecord\">\n                <div class=\"col-12\">\n                    <ngx-datatable\n                            class=\"bootstrap\"\n                            [rows]=\"listData\"\n                            [columnMode]=\"'force'\"\n                            [headerHeight]=\"50\"\n                            [footerHeight]=\"50\"\n                            [rowHeight]=\"'auto'\"\n                            [externalPaging]=\"true\"\n                            [count]=\"totalrecords\"\n                            [offset]=\"pageOffSet\"\n                            [limit]=\"recordsperpage\"\n                            (page)='setPage($event)'>\n                        <ngx-datatable-column name=\"Corporate Name\" prop=\"student_name\">\n                            <ng-template ngx-datatable-cell-template let-row=\"row\">\n                                <h6>{{row.corporate_name}}</h6>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"Status\" prop=\"status\">\n                            <ng-template ngx-datatable-cell-template let-value=\"value\">\n                                <i class=\"fa fa-check text-success fa-2x\" title=\"Completed\" aria-hidden=\"true\" *ngIf=\"value == '1'\"></i>\n                                <i class=\"fa fa-clock-o text-warning fa-2x\" title=\"Pending\" aria-hidden=\"true\" *ngIf=\"value == '2'\"></i>\n                                <i class=\"fa fa-times text-danger fa-2x\" title=\"Rejected\" aria-hidden=\"true\" *ngIf=\"value == '3'\"></i>\n                            </ng-template>\n                        </ngx-datatable-column>\n                    </ngx-datatable>\n                </div>\n            </div>\n            <div class=\"row d-flex justify-content-center list-card mt-3\" *ngIf=\"!noRecord\">\n                <div class=\"col-6\">\n                    <button class=\"nodataList\">{{message}}</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\" *ngIf=\"corporatePage\">\n            <div class=\"row\" *ngIf=\"noRecord\">\n                <div class=\"col-12\">\n                    <ngx-datatable\n                            class=\"bootstrap\"\n                            [rows]=\"listData\"\n                            [columnMode]=\"'force'\"\n                            [headerHeight]=\"50\"\n                            [footerHeight]=\"50\"\n                            [rowHeight]=\"'auto'\"\n                            [externalPaging]=\"true\"\n                            [count]=\"totalrecords\"\n                            [offset]=\"pageOffSet\"\n                            [limit]=\"recordsperpage\"\n                            (page)='setPage($event)'>\n                        <ngx-datatable-column name=\"School Name\" prop=\"school_name\">\n                            <ng-template ngx-datatable-cell-template let-row=\"row\">\n                                <h6>{{row.school_name}}</h6>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"Status\" prop=\"status\">\n                            <ng-template ngx-datatable-cell-template let-value=\"value\">\n                                <i class=\"fa fa-check text-success fa-2x\" title=\"Completed\" aria-hidden=\"true\" *ngIf=\"value == '1'\"></i>\n                                <i class=\"fa fa-clock-o text-warning fa-2x\" title=\"Pending\" aria-hidden=\"true\" *ngIf=\"value == '2'\"></i>\n                                <i class=\"fa fa-times text-danger fa-2x\" title=\"Rejected\" aria-hidden=\"true\" *ngIf=\"value == '3'\"></i>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"Action\">\n                            <ng-template ngx-datatable-cell-template let-row=\"row\">\n                                <i class=\"fa fa-pencil text-primary fa-2x cursor\" title=\"Edit\" aria-hidden=\"true\" (click)=\"editRequest(row)\"></i>\n                            </ng-template>\n                        </ngx-datatable-column>\n                    </ngx-datatable>\n                </div>\n            </div>\n            <div class=\"row d-flex justify-content-center list-card mt-3\" *ngIf=\"!noRecord\">\n                <div class=\"col-6\">\n                    <button class=\"nodataList\">{{message}}</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Enter Request Code</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row form-group auth-form my-2\">\n                <input style=\"padding: 20px !important;\" class=\"form-control\" type=\"text\" placeholder=\"Request Code\" [(ngModel)]=\"requestCode\">\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addRequestCode()\">Confirm</button>\n    </div>\n</ng-template>\n<ng-template #editSchool let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Enter Request Code</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"form-group row\">\n                        <label for=\"validationCustom0\" class=\"col-4\"><span style=\"visibility: hidden\">*</span>School Name:</label>\n                        <div class=\"col-8\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Request Code\" [(ngModel)]=\"schoolName\" id=\"validationCustom0\" readonly>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12\">\n                    <div class=\"form-group row\">\n                        <label for=\"validationCustom1\" class=\"col-4\"><span style=\"visibility: hidden\">*</span>\n                            Status:</label>\n                        <div class=\"col-8\">\n                            <select class=\"form-control\" id=\"validationCustom1\" [(ngModel)]=\"corporateStatuts\" (change)=\"selectStatus($event)\">\n                                <option value=\"\" hidden>--Select--</option>\n                                <option value=\"1\">Approved</option>\n                                <option value=\"2\">Pending</option>\n                                <option value=\"3\">rejected</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                    <div class=\"col-12\" *ngIf=\"selectApproved\">\n                        <form [formGroup]=\"codeform\">\n                            <div class=\"form-group row\">\n                                <label class=\"col-4\"><span class=\"text-danger\">*</span>\n                                    Validity Date:</label>\n                                <div class=\"col-8 form-group\">\n                                    <div class=\"input-group\">\n                                        <input class=\"form-control\" name=\"fromdate\" placeholder=\"mm-dd-yyyy\" formControlName=\"date\" [options]=\"myDpOptions\" angular-mydatepicker #dp=\"angular-mydatepicker\">\n                                            <div class=\"input-group-append\">\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                                                    <i class=\"fa fa-calendar-o\"></i>\n                                                </button>\n                                            </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editRequestDetail()\">Confirm</button>\n    </div>\n</ng-template>\n\n<div *ngIf=\"schoolStatus.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n<!-- Container-fluid Ends-->\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.NgbModal }, { type: i3.Router }, { type: i4.CommonDataService }, { type: i5.CorporateService }, { type: i6.ToastrService }, { type: i7.DatePipe }, { type: i8.SchoolService }, { type: i9.FormBuilder }, { type: i10.NewsubjectService }], { requestContent: [{
            type: ViewChild,
            args: ['content']
        }], editSchool: [{
            type: ViewChild,
            args: ['editSchool']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RequestComponent, { className: "RequestComponent" }); })();
//# sourceMappingURL=request.component.js.map