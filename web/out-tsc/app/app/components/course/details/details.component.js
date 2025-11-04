import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { urls } from 'src/app/shared/utils/urls';
import * as i0 from "@angular/core";
import * as i1 from "src/app/shared/service/auth.service";
import * as i2 from "src/app/shared/service/newsubject.service";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "src/app/environment.service";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
import * as i7 from "@angular/router";
import * as i8 from "src/app/shared/service/common-data.service";
import * as i9 from "@swimlane/ngx-datatable";
import * as i10 from "@ng-select/ng-select";
const _c0 = ["courseDetail"];
const _c1 = () => ["/course/details/add"];
const _c2 = () => ({ emptyMessage: "No Course Details found" });
function DetailsComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h6", 31);
    i0.ɵɵlistener("click", function DetailsComponent_ng_template_25_Template_h6_click_0_listener() { const row_r3 = i0.ɵɵrestoreView(_r2).row; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.showCourseDetail(row_r3)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r3 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r3.course_name);
} }
function DetailsComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const row_r5 = ctx.row;
    i0.ɵɵtextInterpolate1(" ", row_r5.display_order == "" ? "---" : row_r5.display_order, " ");
} }
function DetailsComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r6 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", row_r6.category_name.join(", "), " ");
} }
function DetailsComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r7 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", row_r7.subject_name.join(", "), "");
} }
function DetailsComponent_ng_template_33_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r8 = i0.ɵɵnextContext().row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("$ ", row_r8.fees, "");
} }
function DetailsComponent_ng_template_33_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "---");
    i0.ɵɵelementEnd();
} }
function DetailsComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DetailsComponent_ng_template_33_span_0_Template, 2, 1, "span", 32)(1, DetailsComponent_ng_template_33_span_1_Template, 2, 0, "span", 32);
} if (rf & 2) {
    const row_r8 = ctx.row;
    i0.ɵɵproperty("ngIf", row_r8.fees != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r8.fees == "");
} }
function DetailsComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r9 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r9.is_popular == "Y" ? "Yes" : "No");
} }
function DetailsComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r10 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r10.event == "1" ? "Yes" : "No");
} }
function DetailsComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 35);
} if (rf & 2) {
    const row_r11 = ctx.row;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r3.env.imgUrl + "/" + row_r11.path, i0.ɵɵsanitizeUrl);
} }
function DetailsComponent_ng_template_41_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1, "Approved");
    i0.ɵɵelementEnd();
} }
function DetailsComponent_ng_template_41_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵtext(1, "Ready for review");
    i0.ɵɵelementEnd();
} }
function DetailsComponent_ng_template_41_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 42);
    i0.ɵɵtext(1, "Draft");
    i0.ɵɵelementEnd();
} }
function DetailsComponent_ng_template_41_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 43);
    i0.ɵɵtext(1, "Rework");
    i0.ɵɵelementEnd();
} }
function DetailsComponent_ng_template_41_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 44);
    i0.ɵɵtext(1, "Cancelled");
    i0.ɵɵelementEnd();
} }
function DetailsComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DetailsComponent_ng_template_41_span_0_Template, 2, 0, "span", 36)(1, DetailsComponent_ng_template_41_span_1_Template, 2, 0, "span", 37)(2, DetailsComponent_ng_template_41_span_2_Template, 2, 0, "span", 38)(3, DetailsComponent_ng_template_41_span_3_Template, 2, 0, "span", 39)(4, DetailsComponent_ng_template_41_span_4_Template, 2, 0, "span", 40);
} if (rf & 2) {
    const row_r12 = ctx.row;
    i0.ɵɵproperty("ngIf", row_r12.status == "A");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r12.status == "P");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r12.status == "D");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r12.status == "R");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r12.status == "C");
} }
function DetailsComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 45);
    i0.ɵɵlistener("click", function DetailsComponent_ng_template_43_Template_i_click_0_listener() { const row_r14 = i0.ɵɵrestoreView(_r13).row; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.editCourseDetails(row_r14)); });
    i0.ɵɵelementEnd();
} }
function DetailsComponent_ng_template_44_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r16 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r16);
} }
function DetailsComponent_ng_template_44_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r17 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r17);
} }
function DetailsComponent_ng_template_44_p_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("$ ", ctx_r3.selectedCourseDetail.fees, "");
} }
function DetailsComponent_ng_template_44_p_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "---");
    i0.ɵɵelementEnd();
} }
function DetailsComponent_ng_template_44_span_86_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1, "Active");
    i0.ɵɵelementEnd();
} }
function DetailsComponent_ng_template_44_span_87_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 44);
    i0.ɵɵtext(1, "Suspended");
    i0.ɵɵelementEnd();
} }
function DetailsComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "h5", 47);
    i0.ɵɵtext(2, "Course Detail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 48);
    i0.ɵɵlistener("click", function DetailsComponent_ng_template_44_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r15); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 49)(5, "div", 50)(6, "div", 51)(7, "div", 52)(8, "p");
    i0.ɵɵtext(9, "Course Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 53)(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 51)(14, "div", 52)(15, "p");
    i0.ɵɵtext(16, "Category");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 53);
    i0.ɵɵtemplate(18, DetailsComponent_ng_template_44_span_18_Template, 2, 1, "span", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 51)(20, "div", 52)(21, "p");
    i0.ɵɵtext(22, "Subject");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 53);
    i0.ɵɵtemplate(24, DetailsComponent_ng_template_44_span_24_Template, 2, 1, "span", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 51)(26, "div", 52)(27, "p");
    i0.ɵɵtext(28, "Short Description");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(29, "div", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 51)(31, "div", 52)(32, "p");
    i0.ɵɵtext(33, "Description");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(34, "div", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 51)(36, "div", 52)(37, "p");
    i0.ɵɵtext(38, "Overview Content");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(39, "div", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 51)(41, "div", 52)(42, "p");
    i0.ɵɵtext(43, "Course Content");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(44, "div", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "div", 51)(46, "div", 52)(47, "p");
    i0.ɵɵtext(48, "Course Pre Requisites");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(49, "div", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "div", 51)(51, "div", 52)(52, "p");
    i0.ɵɵtext(53, "Other Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(54, "div", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "div", 51)(56, "div", 52)(57, "p");
    i0.ɵɵtext(58, "Lesson");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(59, "div", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "div", 51)(61, "div", 52)(62, "p");
    i0.ɵɵtext(63, "Author");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "div", 53)(65, "p");
    i0.ɵɵtext(66);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(67, "div", 51)(68, "div", 52)(69, "p");
    i0.ɵɵtext(70, "Fees");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(71, "div", 53);
    i0.ɵɵtemplate(72, DetailsComponent_ng_template_44_p_72_Template, 2, 1, "p", 32)(73, DetailsComponent_ng_template_44_p_73_Template, 2, 0, "p", 32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(74, "div", 51)(75, "div", 52)(76, "p");
    i0.ɵɵtext(77, "Cover Image");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(78, "div", 52);
    i0.ɵɵelement(79, "img", 35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(80, "div", 51)(81, "div", 52)(82, "p");
    i0.ɵɵtext(83, "Status");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(84, "div", 53)(85, "p");
    i0.ɵɵtemplate(86, DetailsComponent_ng_template_44_span_86_Template, 2, 0, "span", 36)(87, DetailsComponent_ng_template_44_span_87_Template, 2, 0, "span", 40);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(88, "div", 51)(89, "div", 52)(90, "p");
    i0.ɵɵtext(91, "Certified Course");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(92, "div", 53)(93, "p");
    i0.ɵɵtext(94);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(95, "div", 51)(96, "div", 52)(97, "p");
    i0.ɵɵtext(98, "Allow Multiple Schedule Select");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(99, "div", 53)(100, "p");
    i0.ɵɵtext(101);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(102, "div", 56)(103, "button", 57);
    i0.ɵɵlistener("click", function DetailsComponent_ng_template_44_Template_button_click_103_listener() { i0.ɵɵrestoreView(_r15); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.editCourseDetails(ctx_r3.selectedCourseDetail)); });
    i0.ɵɵtext(104, "Edit Course Detail");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r3.selectedCourseDetail.course_name);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r3.selectedCourseDetail.category_name);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r3.selectedCourseDetail.subject_name);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r3.selectedCourseDetail.short_description == "" ? "---" : ctx_r3.selectedCourseDetail.short_description, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r3.selectedCourseDetail.description == "" ? "---" : ctx_r3.selectedCourseDetail.description, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r3.selectedCourseDetail.overview_content == "" ? "---" : ctx_r3.selectedCourseDetail.overview_content, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r3.selectedCourseDetail.course_content == "" ? "---" : ctx_r3.selectedCourseDetail.course_content, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r3.selectedCourseDetail.prerequisites == "" ? "---" : ctx_r3.selectedCourseDetail.prerequisites, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r3.selectedCourseDetail.other_details == "" ? "---" : ctx_r3.selectedCourseDetail.other_details, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r3.selectedCourseDetail.lessons == "" ? "---" : ctx_r3.selectedCourseDetail.lessons, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r3.selectedCourseDetail.author == "" ? "---" : ctx_r3.selectedCourseDetail.author);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r3.selectedCourseDetail.author != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedCourseDetail.author == "");
    i0.ɵɵadvance(6);
    i0.ɵɵpropertyInterpolate2("src", "", ctx_r3.webhost, "", ctx_r3.selectedCourseDetail.path, "", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r3.selectedCourseDetail.status == "A");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedCourseDetail.status == "I");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r3.selectedCourseDetail.certified_course == "Y" ? "Yes" : "No");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r3.selectedCourseDetail.multiple_schedule == "Y" ? "Yes" : "No");
} }
export class DetailsComponent {
    constructor(auth, newService, modalService, env, datePipe, builder, router, _commondata) {
        this.auth = auth;
        this.newService = newService;
        this.modalService = modalService;
        this.env = env;
        this.datePipe = datePipe;
        this.builder = builder;
        this.router = router;
        this._commondata = _commondata;
        this.rows = [];
        this.active = 1;
        this.columnSize = 12;
        this.recordPerPage = 10;
        this.desktopView = window.screen.width > 768;
        this.courseDetailsListSearchData = [];
        this.selector = '.scrollPanel';
        this.count = 0;
        this.categoryList = [];
        this.selectedCategory = [];
        this.selectedCourseType = null;
        this.selectedStatus = [];
        this.courseTypeList = [{ value: 'All', id: 'All' }, { value: 'Certified Course', id: 'certified_course' }, { value: 'Popular', id: 'is_exclusive' }, { value: 'One-on-One', id: 'is_exclusive' }, { value: 'Webinar Event', id: 'event' }];
        this.courseStatus = [{ id: 'D', value: 'Draft' }, { id: 'P', value: 'Ready for review' }, { id: 'A', value: 'Approved' },
            { id: 'R', value: 'Rework' }, { id: 'C', value: 'Cancelled' }];
        this.searchedValue = '';
        this.columnSize = this.desktopView ? 12 : 6;
        this.webhost = this.env.imgUrl;
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        if (this.schoolStatus.length != 0) {
            this.newService.schoolChange.subscribe((res) => {
                if (res != '') {
                    if (this.router.url.includes('/course/details')) {
                        this.init();
                    }
                }
                else {
                    this.init();
                }
            });
        }
        this.newService.allowSchoolChange(false);
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
    init() {
        this.getListCourseDetails();
        this.getCategoryList();
    }
    ngOnDestroy() {
        this.auth.setSessionData('courseDetailsSearchValue', JSON.stringify({
            category_id: this.selectedCategory,
            status: this.selectedStatus,
            searchValue: this.searchedValue
        }));
    }
    showCourseDetail(detail) {
        console.log(detail, 'preview');
        this.selectedCourseDetail = detail;
        this.modalRef = this.modalService.open(this.courseDetail, { size: 'xl', backdrop: 'static', centered: true });
    }
    editCourseDetails(row) {
        console.log(row, 'getEditcourse');
        this.modalRef ? this.modalRef.close() : '';
        sessionStorage.getCourseDetails = JSON.stringify(row);
        this.router.navigate(['/course/details/edit']);
    }
    searchList() {
        let arrayValue = [];
        if (this.selectedCategory.length != 0) {
            this.courseDetailsListSearchData.forEach((items) => {
                this.selectedCategory.forEach((item1) => {
                    if (items.category_id.includes(item1)) {
                        const checkValueAlreadyExist = arrayValue.some((code => code.course_id == items.course_id));
                        if (!checkValueAlreadyExist) {
                            arrayValue.push(items);
                        }
                    }
                });
            });
        }
        else {
            arrayValue = this.courseDetailsListSearchData;
        }
        this.selectedStatus.length != 0 ? arrayValue = arrayValue.filter(o1 => this.selectedStatus.some(o2 => o1.status === o2)) : '';
        if (this.selectedCourseType && this.selectedCourseType != 'All') {
            arrayValue = arrayValue.filter((o1) => {
                const courseType = this.selectedCourseType;
                return courseType === 'event' ? o1[courseType] === '1' : o1[courseType] === 'Y';
            });
        }
        const searchValued = this.searchedValue;
        arrayValue = arrayValue.filter(search => {
            return search.course_name.toLowerCase().indexOf(searchValued) !== -1 || search.author.toLowerCase().indexOf(searchValued) !== -1 || search.lessons.toLowerCase().indexOf(searchValued) !== -1 || !searchValued;
        });
        this.rows = arrayValue;
        this.auth.setSessionData('courseDetailsSearchValue', JSON.stringify({
            category_id: this.selectedCategory,
            status: this.selectedStatus,
            searchValue: this.searchedValue
        }));
    }
    getListCourseDetails() {
        const data = {
            course_id: '',
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        console.log(data, 'data');
        this.auth.postService(data, urls.courseList).subscribe((successData) => {
            this.listSuccess(successData);
        }, (error) => {
            console.error(error, 'booking error');
        });
    }
    listSuccess(successData) {
        this.rows = successData.IsSuccess ? successData.ResponseObject : [];
        this.courseDetailsListSearchData = successData.IsSuccess ? successData.ResponseObject : [];
        this.auth.setSessionData('course_detail_maximumCount', this.courseDetailsListSearchData.length);
        console.log(this.rows, 'rowa');
    }
    getCategoryList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.categoryList).subscribe((successData) => {
            this.categoryList = successData.IsSuccess ? successData.ResponseObject : [];
            const getContentListSearch = JSON.parse(this.auth.getSessionData('contentListSearchValue'));
            this.selectedCategory = getContentListSearch?.category_id ?? [];
            this.selectedStatus = getContentListSearch?.status ?? [];
            this.searchedValue = getContentListSearch?.searchValue ?? '';
            this.searchList();
            console.log(this.categoryList, 'categoryLisy');
        }, (error) => {
            console.error(error, 'booking error');
        });
    }
    close() {
        this.modalRef.close();
    }
    static { this.ɵfac = function DetailsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DetailsComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.NewsubjectService), i0.ɵɵdirectiveInject(i3.NgbModal), i0.ɵɵdirectiveInject(i4.EnvironmentService), i0.ɵɵdirectiveInject(i5.DatePipe), i0.ɵɵdirectiveInject(i6.FormBuilder), i0.ɵɵdirectiveInject(i7.Router), i0.ɵɵdirectiveInject(i8.CommonDataService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetailsComponent, selectors: [["app-details"]], viewQuery: function DetailsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(DatatableComponent, 5);
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.courseDetail = _t.first);
        } }, decls: 46, vars: 24, consts: [["table", ""], ["courseDetail", ""], [1, "row"], [1, "col-xl-12", "mb-30"], [1, "card"], [1, "card-header"], [1, "col-6", "d-flex", "align-items-center"], [1, "px-0"], [1, "col-6"], [1, "btn", "btn-primary", "float-right", 3, "routerLink"], [1, "card-body"], [1, "form-group", "col-3", "my-3"], ["placeholder", "Select Category", "bindLabel", "category_name", "bindValue", "category_id", 3, "ngModelChange", "change", "multiple", "ngModel", "items"], [1, "form-group", "col-3", "mt-2", "my-3", "px-0"], ["type", "text", "placeholder", "Search using Course name, author or lessons", 1, "form-control", 2, "height", "36px", 3, "input", "ngModelChange", "ngModel"], [1, "form-group", "col-3", "my-3", "pr-0"], ["placeholder", "Select Course Type", "bindLabel", "value", "bindValue", "id", 3, "ngModelChange", "change", "multiple", "ngModel", "items", "clearable"], ["placeholder", "Select Status", "bindLabel", "value", "bindValue", "id", 3, "ngModelChange", "change", "multiple", "ngModel", "items"], [1, "col-12"], [1, "bootstrap", "ngx-datatable-design", 2, "border", "1px solid #d1d4d7", "border-radius", "2px", 3, "externalSorting", "rows", "headerHeight", "limit", "footerHeight", "rowHeight", "scrollbarH", "columnMode", "messages"], ["name", "Course Name", "prop", "course_name"], ["ngx-datatable-cell-template", ""], ["name", "Display Order", "prop", "display_order", 3, "width"], ["name", "Category", "prop", "category_name"], ["name", "Subject", "prop", "subject_name"], ["name", "Fee", "prop", "fees"], ["name", "Popular"], ["name", "Webinar"], ["name", "Cover Image"], ["name", "Status", "prop", "author"], ["name", "Action", "prop", "batch"], [1, "blue-color", "cursor", 3, "click"], [4, "ngIf"], [1, "badge", "badge-primary"], [1, "badge", "badge-warning"], ["alt", "Cover Image", 1, "img-thumbnail", 3, "src"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-secondary", 4, "ngIf"], ["class", "badge badge-info", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], [1, "badge", "badge-success"], [1, "badge", "badge-secondary"], [1, "badge", "badge-info"], [1, "badge", "badge-danger"], ["aria-hidden", "true", "title", "Edit Course Details", 1, "fa", "fa-pencil-square", "fa-2x", "fa-edit", "cursor", "text-center", 2, "color", "#00bfff", 3, "click"], [1, "modal-header", "align-items-center"], [1, "contenttext", "text-center", "mb-0"], ["aria-hidden", "true", 1, "fa", "fa", "fa-times-circle", "pull-right", "cursor", "color-red-icon", 3, "click"], [1, "modal-body"], [1, "container-fluid"], [1, "row", "mt-3"], [1, "col-4"], [1, "col-8"], [4, "ngFor", "ngForOf"], [1, "col-8", 3, "innerHTML"], [1, "modal-footer"], [1, "btn", "btn-primary", "my-1", "float-left", "float-sm-right", 3, "click"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 2)(5, "div", 6)(6, "h5", 7);
            i0.ɵɵtext(7, "Course Details");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 8)(9, "button", 9);
            i0.ɵɵtext(10, "Add Course");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(11, "div", 10)(12, "div", 2)(13, "div", 11)(14, "ng-select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function DetailsComponent_Template_ng_select_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("change", function DetailsComponent_Template_ng_select_change_14_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.searchList()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 13)(16, "input", 14);
            i0.ɵɵlistener("input", function DetailsComponent_Template_input_input_16_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.searchList()); });
            i0.ɵɵtwoWayListener("ngModelChange", function DetailsComponent_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchedValue, $event) || (ctx.searchedValue = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 15)(18, "ng-select", 16);
            i0.ɵɵtwoWayListener("ngModelChange", function DetailsComponent_Template_ng_select_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.selectedCourseType, $event) || (ctx.selectedCourseType = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("change", function DetailsComponent_Template_ng_select_change_18_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.searchList()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "div", 11)(20, "ng-select", 17);
            i0.ɵɵtwoWayListener("ngModelChange", function DetailsComponent_Template_ng_select_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("change", function DetailsComponent_Template_ng_select_change_20_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.searchList()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 18)(22, "ngx-datatable", 19, 0)(24, "ngx-datatable-column", 20);
            i0.ɵɵtemplate(25, DetailsComponent_ng_template_25_Template, 2, 1, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "ngx-datatable-column", 22);
            i0.ɵɵtemplate(27, DetailsComponent_ng_template_27_Template, 1, 1, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "ngx-datatable-column", 23);
            i0.ɵɵtemplate(29, DetailsComponent_ng_template_29_Template, 2, 1, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "ngx-datatable-column", 24);
            i0.ɵɵtemplate(31, DetailsComponent_ng_template_31_Template, 2, 1, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "ngx-datatable-column", 25);
            i0.ɵɵtemplate(33, DetailsComponent_ng_template_33_Template, 2, 2, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "ngx-datatable-column", 26);
            i0.ɵɵtemplate(35, DetailsComponent_ng_template_35_Template, 2, 1, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "ngx-datatable-column", 27);
            i0.ɵɵtemplate(37, DetailsComponent_ng_template_37_Template, 2, 1, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "ngx-datatable-column", 28);
            i0.ɵɵtemplate(39, DetailsComponent_ng_template_39_Template, 1, 1, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "ngx-datatable-column", 29);
            i0.ɵɵtemplate(41, DetailsComponent_ng_template_41_Template, 5, 5, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "ngx-datatable-column", 30);
            i0.ɵɵtemplate(43, DetailsComponent_ng_template_43_Template, 1, 0, "ng-template", 21);
            i0.ɵɵelementEnd()()()()()()()();
            i0.ɵɵtemplate(44, DetailsComponent_ng_template_44_Template, 105, 20, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(22, _c1));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("multiple", true);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedCategory);
            i0.ɵɵproperty("items", ctx.categoryList);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchedValue);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("multiple", false);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedCourseType);
            i0.ɵɵproperty("items", ctx.courseTypeList)("clearable", false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("multiple", true);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedStatus);
            i0.ɵɵproperty("items", ctx.courseStatus);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("externalSorting", false)("rows", ctx.rows)("headerHeight", 50)("limit", ctx.recordPerPage)("footerHeight", 50)("rowHeight", "auto")("scrollbarH", false)("columnMode", "force")("messages", i0.ɵɵpureFunction0(23, _c2));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("width", 150);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i7.RouterLink, i9.DatatableComponent, i9.DataTableColumnDirective, i9.DataTableColumnCellDirective, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i10.NgSelectComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetailsComponent, [{
        type: Component,
        args: [{ selector: 'app-details', template: "<!-- main body -->\n<div class=\"row\">\n    <div class=\"col-xl-12 mb-30\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <div class=\"row\">\n                    <div class=\"col-6 d-flex align-items-center\">\n                        <h5 class=\"px-0\">Course Details</h5>\n                    </div>\n                    <div class=\"col-6\">\n                        <button class=\"btn btn-primary float-right\"\n                                [routerLink]=\"['/course/details/add']\">Add Course</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"form-group col-3 my-3\">\n                        <ng-select [multiple]=\"true\" placeholder=\"Select Category\" [(ngModel)]=\"selectedCategory\"\n                                   [items]=\"categoryList\" (change)=\"searchList()\"\n                                   bindLabel=\"category_name\" bindValue=\"category_id\"></ng-select>\n                    </div>\n                    <div class=\"form-group col-3 mt-2 my-3 px-0\">\n                        <input style=\"height: 36px\" type='text' class=\"form-control\" (input)=\"searchList()\"\n                               placeholder='Search using Course name, author or lessons' [(ngModel)]=\"searchedValue\"  />\n                    </div>\n                    <div class=\"form-group col-3 my-3 pr-0\">\n                        <ng-select [multiple]=\"false\" placeholder=\"Select Course Type\" [(ngModel)]=\"selectedCourseType\"\n                                   [items]=\"courseTypeList\" (change)=\"searchList()\" [clearable]=\"false\"\n                                   bindLabel=\"value\" bindValue=\"id\"></ng-select>\n                    </div>\n                    <div class=\"form-group col-3 my-3\">\n                        <ng-select [multiple]=\"true\" placeholder=\"Select Status\" [(ngModel)]=\"selectedStatus\"\n                                   [items]=\"courseStatus\" (change)=\"searchList()\"\n                                   bindLabel=\"value\" bindValue=\"id\"></ng-select>\n                    </div>\n\n                    <div class=\"col-12\">\n                        <ngx-datatable #table\n                                       style=\"border: 1px solid #d1d4d7; border-radius: 2px\"\n                                       class=\"bootstrap ngx-datatable-design\"\n                                       [externalSorting]=\"false\" [rows]=\"rows\"\n                                       [headerHeight]=\"50\"\n                                       [limit]=\"recordPerPage\"\n                                       [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\n                                       [scrollbarH]=\"false\"\n                                       [columnMode]=\"'force'\"\n                                       [messages]=\"{emptyMessage: 'No Course Details found'}\"\n                        >\n                            <!-- Row Detail Template -->\n\n                            <ngx-datatable-column name=\"Course Name\" prop=\"course_name\">\n                                <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\" ngx-datatable-cell-template let-expanded=\"expanded\">\n                                    <h6 (click)=\"showCourseDetail(row)\" class=\"blue-color cursor\">{{row.course_name}}</h6>\n                                </ng-template>\n                            </ngx-datatable-column>\n                            <ngx-datatable-column name=\"Display Order\" prop=\"display_order\" [width]=\"150\">\n                                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                    {{row.display_order == '' ? '---' : row.display_order}}\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column name=\"Category\" prop=\"category_name\">\n                                <ng-template let-row=\"row\" let-value=\"value\" let-expanded=\"expanded\" ngx-datatable-cell-template>\n                                    <span>  {{row.category_name.join(', ')}} </span>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column name=\"Subject\" prop=\"subject_name\">\n                                <ng-template let-row=\"row\" let-value=\"value\" let-expanded=\"expanded\" ngx-datatable-cell-template>\n                                    <span>  {{row.subject_name.join(', ')}}</span>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column name=\"Fee\" prop=\"fees\">\n                                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                                    <span *ngIf=\"row.fees != ''\">$ {{row.fees}}</span><span *ngIf=\"row.fees == ''\">---</span>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column name=\"Popular\">\n                                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                    <span class=\"badge badge-primary\">{{row.is_popular == 'Y' ? 'Yes' : 'No'}}</span>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column name=\"Webinar\">\n                                <ng-template let-row=\"row\"  ngx-datatable-cell-template>\n                                    <span class=\"badge badge-warning\">{{row.event == '1' ? 'Yes' : 'No'}}</span>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column name=\"Cover Image\">\n                                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                                    <img class=\"img-thumbnail\"  [src]=\"env.imgUrl + '/' + row.path\" alt=\"Cover Image\" />\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column name=\"Status\" prop=\"author\">\n                                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                    <span class=\"badge badge-success\" *ngIf=\"row.status == 'A'\">Approved</span>\n                                    <span class=\"badge badge-warning\" *ngIf=\"row.status == 'P'\">Ready for review</span>\n                                    <span class=\"badge badge-secondary\" *ngIf=\"row.status == 'D'\">Draft</span>\n                                    <span class=\"badge badge-info\" *ngIf=\"row.status == 'R'\">Rework</span>\n                                    <span class=\"badge badge-danger\" *ngIf=\"row.status == 'C'\">Cancelled</span>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                            <ngx-datatable-column name=\"Action\" prop=\"batch\">\n                                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                                    <i class=\"fa fa-pencil-square fa-2x fa-edit cursor text-center\" aria-hidden=\"true\" (click)=\"editCourseDetails(row)\" style=\"color:#00bfff;\" title=\"Edit Course Details\"></i>\n                                </ng-template>\n                            </ngx-datatable-column>\n\n                        </ngx-datatable>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n<ng-template #courseDetail let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h5 class=\"contenttext text-center mb-0\">Course Detail</h5>\n        <i class=\"fa fa fa-times-circle pull-right cursor color-red-icon\" aria-hidden=\"true\" (click)=\"close()\"></i>\n    </div>\n    <div class= \"modal-body\">\n        <div class=\"container-fluid\">\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Course Name</p>\n                </div>\n                <div class=\"col-8\">\n                    <p>{{selectedCourseDetail.course_name}}</p>\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Category</p>\n                </div>\n                <div class=\"col-8\">\n                    <span *ngFor=\"let data of selectedCourseDetail.category_name\">{{data}}</span>\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Subject</p>\n                </div>\n                <div class=\"col-8\">\n                    <span *ngFor=\"let data of selectedCourseDetail.subject_name\">{{data}}</span>\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Short Description</p>\n                </div>\n                <div class=\"col-8\" [innerHTML]=\"selectedCourseDetail.short_description == '' ? '---' : selectedCourseDetail.short_description\">\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Description</p>\n                </div>\n                <div class=\"col-8\" [innerHTML]=\"selectedCourseDetail.description == '' ? '---' : selectedCourseDetail.description\">\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Overview Content</p>\n                </div>\n                <div class=\"col-8\" [innerHTML]=\"selectedCourseDetail.overview_content == '' ? '---' : selectedCourseDetail.overview_content\">\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Course Content</p>\n                </div>\n                <div class=\"col-8\" [innerHTML]=\"selectedCourseDetail.course_content == '' ? '---' : selectedCourseDetail.course_content\">\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Course Pre Requisites</p>\n                </div>\n                <div class=\"col-8\" [innerHTML]=\"selectedCourseDetail.prerequisites == '' ? '---' : selectedCourseDetail.prerequisites\">\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Other Details</p>\n                </div>\n                <div class=\"col-8\" [innerHTML]=\"selectedCourseDetail.other_details == '' ? '---' : selectedCourseDetail.other_details\">\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Lesson</p>\n                </div>\n                <div class=\"col-8\" [innerHTML]=\"selectedCourseDetail.lessons == '' ? '---' : selectedCourseDetail.lessons\">\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Author</p>\n                </div>\n                <div class=\"col-8\">\n                    <p>{{selectedCourseDetail.author == '' ? '---' : selectedCourseDetail.author}}</p>\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Fees</p>\n                </div>\n                <div class=\"col-8\">\n                    <p *ngIf=\"selectedCourseDetail.author != ''\">$ {{selectedCourseDetail.fees}}</p>\n                    <p *ngIf=\"selectedCourseDetail.author == ''\">---</p>\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Cover Image</p>\n                </div>\n                <div class=\"col-4\">\n                    <img class=\"img-thumbnail\" src=\"{{webhost}}{{selectedCourseDetail.path}}\"  alt=\"Cover Image\" />\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Status</p>\n                </div>\n                <div class=\"col-8\">\n                    <p><span class=\"badge badge-success\" *ngIf=\"selectedCourseDetail.status == 'A'\">Active</span>\n                        <span class=\"badge badge-danger\" *ngIf=\"selectedCourseDetail.status == 'I'\">Suspended</span></p>\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Certified Course</p>\n                </div>\n                <div class=\"col-8\">\n                    <p>{{selectedCourseDetail.certified_course == 'Y' ? 'Yes' : 'No'}}</p>\n                </div>\n            </div>\n            <div class=\"row mt-3\">\n                <div class=\"col-4\">\n                    <p>Allow Multiple Schedule Select</p>\n                </div>\n                <div class=\"col-8\">\n                    <p>{{selectedCourseDetail.multiple_schedule == 'Y' ? 'Yes' : 'No'}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"editCourseDetails(selectedCourseDetail)\" class=\"btn btn-primary my-1 float-left float-sm-right\">Edit Course Detail</button>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.NewsubjectService }, { type: i3.NgbModal }, { type: i4.EnvironmentService }, { type: i5.DatePipe }, { type: i6.FormBuilder }, { type: i7.Router }, { type: i8.CommonDataService }], { table: [{
            type: ViewChild,
            args: [DatatableComponent, { static: false }]
        }], courseDetail: [{
            type: ViewChild,
            args: ['courseDetail']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DetailsComponent, { className: "DetailsComponent" }); })();
//# sourceMappingURL=details.component.js.map