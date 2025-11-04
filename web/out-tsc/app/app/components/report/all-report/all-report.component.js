import { Component, inject } from '@angular/core';
import { CreatorService } from '../../../shared/service/creator.service';
import { NavService } from '../../../shared/service/nav.service';
import * as i0 from "@angular/core";
import * as i1 from "src/app/shared/service/auth.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "../../sat-report/sat-report/sat-report.component";
import * as i5 from "../missed-work-report/missed-work-report.component";
import * as i6 from "../items-report/items-report.component";
function AllReportComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 6);
    i0.ɵɵlistener("click", function AllReportComponent_li_4_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.reportTab("reports")); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3, "Reports");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("nav-link ", ctx_r1.tabShow == "reports" ? "active" : "", "");
} }
function AllReportComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 6);
    i0.ɵɵlistener("click", function AllReportComponent_li_5_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.reportTab("reports")); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3, "Class Reports");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("nav-link ", ctx_r1.tabShow == "reports" ? "active" : "", "");
} }
function AllReportComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 6);
    i0.ɵɵlistener("click", function AllReportComponent_li_10_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.reportTab("itemized")); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3, "Itemized Reports");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("nav-link ", ctx_r1.tabShow == "itemized" ? "active" : "", "");
} }
function AllReportComponent_section_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "div", 10)(2, "div", 11);
    i0.ɵɵelement(3, "app-missed-work-report", 12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("classShow", true)("showContent", ctx_r1.classOrScheduleReport ? "other" : ctx_r1.selectContent)("studentView", false)("timeView", ctx_r1.classOrScheduleReport)("calledForm", ctx_r1.classOrScheduleReport ? "class" : "")("contentNameValue", ctx_r1.contentNameValue);
} }
function AllReportComponent_section_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "div", 10)(2, "div", 11);
    i0.ɵɵelement(3, "app-items-report", 13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("showContent", "other")("studentView", false)("timeView", true);
} }
function AllReportComponent_section_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "div", 14);
    i0.ɵɵelement(2, "app-sat-report");
    i0.ɵɵelementEnd()();
} }
export class AllReportComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.tabShow = 'reports';
        this.showAllTab = false;
        this.creatorService = inject(CreatorService);
        this.navService = inject(NavService);
        this.classOrScheduleReport = false;
        this.reportType = '';
        this.reportDetails = JSON.parse(this.auth.getSessionData('All-Reports'));
        if (this.auth.getSessionData('report_type')) {
            this.showAllTab = this.auth.getSessionData('report_type') == 'all';
            this.reportType = this.auth.getSessionData('report_type');
            this.classOrScheduleReport = ['reportFromSchedule', 'reportFromClass'].includes(this.auth.getSessionData('report_type'));
        }
        console.log(this.showAllTab, 'showAllTab');
        console.log(this.classOrScheduleReport, 'classOrScheduleReport');
        this.tabShow = (this.showAllTab || this.reportDetails) && this.reportType != 'viewAnalytics' ? 'reports' : 'viewAnalytics';
        console.log(this.tabShow, 'tabShow');
        console.log(this.reportDetails, 'rd');
        console.log(this.auth.getSessionData('reportCalledFrom'));
    }
    ngOnInit() {
        this.reportTab(this.tabShow);
        this.creatorService.changeViewList(true);
        this.navService.collapseSidebar = true;
    }
    ngOnDestroy() {
        this.creatorService.changeViewList(false);
        this.navService.collapseSidebar = false;
    }
    reportTab(type) {
        if (type == 'reports') {
            let data;
            data = JSON.parse(this.auth.getSessionData('card-data'));
            if (this.classOrScheduleReport) {
                this.auth.setSessionData('Individual-Class-Report', JSON.stringify(this.reportDetails));
                this.contentNameValue = '';
            }
            else {
                console.log(this.reportDetails, 'reportDetails');
                this.selectContent = this.reportDetails.content_type == '2' ? 'Assignment' : this.reportDetails.content_type == '3' ? 'Assessment' : 'Resource';
                this.contentNameValue = this.reportDetails.content_id;
                this.auth.setSessionData('Individual-Class-Report', JSON.stringify(data[0]));
                this.auth.setSessionData('Individual-student-Report', JSON.stringify(this.reportDetails));
            }
            this.tabShow = type;
        }
        else if (type == 'itemized') {
            this.auth.setSessionData('Individual-items-Report', JSON.stringify(this.reportDetails));
            this.reportData = JSON.parse(this.auth.getSessionData('Individual-items-Report'));
            this.tabShow = type;
        }
        else {
            const satReportDetails = {
                class_id: this.reportDetails?.class_id,
                class_name: this.reportDetails?.class_name,
                student_id: this.auth.getRoleId() == '5' ? this.auth.getUserId() : '0',
                content_id: this.reportDetails ? this.reportDetails?.content_id : '0',
                student_content_id: '0',
                test_type_id: this.reportDetails?.test_type_id ?? '0'
            };
            this.auth.setSessionData('satReportData', JSON.stringify(satReportDetails));
            const reportCalledFrom = this.auth.getSessionData('reportCalledFrom') ?? '';
            const routeTo = reportCalledFrom != '' ? reportCalledFrom : 'classDetails';
            this.auth.setSessionData('reportCalledFrom', routeTo);
            this.tabShow = type;
        }
    }
    backToClass() {
        const reportCalledFrom = this.auth.getSessionData('reportCalledFrom');
        if (reportCalledFrom == 'list') {
            this.router.navigate(['/class/list-class']);
        }
        else if (reportCalledFrom == 'schedule') {
            this.router.navigate(['/schedule/schedule-page']);
        }
        else if (['assessment_correction', 'assignment_correction'].includes(reportCalledFrom)) {
            const studentContent = JSON.parse(this.auth.getSessionData('correction_student-content'));
            const redirect = this.auth.getSessionData('correction_return');
            this.auth.setSessionData('student-content', JSON.stringify(studentContent));
            this.auth.setSessionData('correction-return', redirect);
            if (reportCalledFrom == 'assessment_correction') {
                this.router.navigate(['assessment-correction/correction-page']);
            }
            else {
                this.router.navigate(['assignment-correction/correction-page']);
            }
        }
        else {
            this.router.navigate([this.auth.getRoleId() == '5' ? 'studentlogin/class-detail' : 'class/topicsAndCurriculum/3']);
        }
    }
    static { this.ɵfac = function AllReportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AllReportComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AllReportComponent, selectors: [["app-all-report"]], decls: 17, vars: 9, consts: [[1, "pt-1"], [1, "row", "mt-3"], [1, "col-12", "d-flex"], [1, "nav", "nav-tabs", "mb-0", "color-primary", "col-12"], ["class", "nav-item cursor", 4, "ngIf"], [1, "nav-item", "cursor"], ["aria-current", "page", 3, "click"], [1, "btn", "btn-outline-primary", "pull-right", "button-absolute", "col-2", 3, "click"], [1, "fa", "fa-long-arrow-left", "mr-1"], [4, "ngIf"], [1, "row"], [1, "col-12"], [3, "classShow", "showContent", "studentView", "timeView", "calledForm", "contentNameValue"], [1, "card", "p-3", 3, "showContent", "studentView", "timeView"], [1, "col-12", "card", "p-3"]], template: function AllReportComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "ul", 3);
            i0.ɵɵtemplate(4, AllReportComponent_li_4_Template, 4, 3, "li", 4)(5, AllReportComponent_li_5_Template, 4, 3, "li", 4);
            i0.ɵɵelementStart(6, "li", 5)(7, "a", 6);
            i0.ɵɵlistener("click", function AllReportComponent_Template_a_click_7_listener() { return ctx.reportTab("viewAnalytics"); });
            i0.ɵɵelementStart(8, "b");
            i0.ɵɵtext(9, "View Analytics");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(10, AllReportComponent_li_10_Template, 4, 3, "li", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 7);
            i0.ɵɵlistener("click", function AllReportComponent_Template_button_click_11_listener() { return ctx.backToClass(); });
            i0.ɵɵelement(12, "i", 8);
            i0.ɵɵtext(13, "Back To Class");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(14, AllReportComponent_section_14_Template, 4, 6, "section", 9)(15, AllReportComponent_section_15_Template, 4, 3, "section", 9)(16, AllReportComponent_section_16_Template, 3, 0, "section", 9);
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.showAllTab);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.classOrScheduleReport);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("nav-link ", ctx.tabShow == "viewAnalytics" ? "active" : "", "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.showAllTab);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.tabShow == "reports" && (ctx.reportDetails == null ? null : ctx.reportDetails.viewType) != "2");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tabShow == "itemized" && (ctx.reportDetails == null ? null : ctx.reportDetails.viewType) != "2");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tabShow == "viewAnalytics" && ((ctx.reportDetails == null ? null : ctx.reportDetails.content_format) == "3" || ctx.classOrScheduleReport));
        } }, dependencies: [i3.NgIf, i4.SatReportComponent, i5.MissedWorkReportComponent, i6.ItemsReportComponent], styles: [".nav-tabs[_ngcontent-%COMP%] {\n\n  border-bottom: 1px solid #8F008A;\n\n  .nav-link {\n    margin-bottom: -2px;\n    &:hover {\n      border: 1px solid #8F008A;\n      border-bottom: none #fff;\n    }\n  }\n\n  .nav-link.active, .nav-tabs .nav-item.show .nav-link {\n    color: #8F008A;\n    background-color: #fff;\n    border: 1px solid #8F008A;\n    border-bottom: none #fff;\n  }\n}\n\n.button-absolute[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: 17px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #8f008a;\n  border-top: 0 solid #8f008a !important;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AllReportComponent, [{
        type: Component,
        args: [{ selector: 'app-all-report', template: "<section class=\"pt-1\">\n    <div class=\"row mt-3\">\n        <div class=\"col-12 d-flex\">\n            <ul class=\"nav nav-tabs mb-0 color-primary col-12\">\n                <li class=\"nav-item cursor\" *ngIf=\"showAllTab\">\n                    <a (click)=\"reportTab('reports')\" aria-current=\"page\" class=\"nav-link {{tabShow == 'reports' ? 'active' : ''}}\"><b>Reports</b></a>\n                </li>\n                <li class=\"nav-item cursor\" *ngIf=\"classOrScheduleReport\">\n                    <a (click)=\"reportTab('reports')\" aria-current=\"page\" class=\"nav-link {{tabShow == 'reports' ? 'active' : ''}}\"><b>Class Reports</b></a>\n                </li>\n                <li class=\"nav-item cursor\">\n                    <a (click)=\"reportTab('viewAnalytics')\" aria-current=\"page\" class=\"nav-link {{tabShow == 'viewAnalytics' ? 'active' : ''}}\"><b>View Analytics</b></a>\n                </li>\n                <li class=\"nav-item cursor\" *ngIf=\"showAllTab\">\n                    <a (click)=\"reportTab('itemized')\" aria-current=\"page\" class=\"nav-link {{tabShow == 'itemized' ? 'active' : ''}}\"><b>Itemized Reports</b></a>\n                </li>\n            </ul>\n\n            <button (click)=\"backToClass()\" class=\"btn btn-outline-primary pull-right button-absolute col-2\"><i class=\"fa fa-long-arrow-left mr-1\"></i>Back To Class</button>\n        </div>\n    </div>\n</section>\n\n<section *ngIf=\"tabShow == 'reports' && reportDetails?.viewType != '2'\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n<!--            <app-missed-work-report *ngIf=\"!classOrScheduleReport\" class=\"card p-3\" [classShow]=\"true\" [showContent]=\"selectContent\" [studentView]=\"false\"-->\n<!--                                    [timeView]=\"false\" [contentNameValue]=\"contentNameValue\">-->\n<!--            </app-missed-work-report>-->\n\n            <app-missed-work-report\n                    [classShow]=\"true\" [showContent]=\"classOrScheduleReport ? 'other' : selectContent\" [studentView]=\"false\"\n                    [timeView]=\"classOrScheduleReport\" [calledForm]=\"classOrScheduleReport ? 'class' : ''\" [contentNameValue]=\"contentNameValue\">\n            </app-missed-work-report>\n        </div>\n    </div>\n</section>\n<section *ngIf=\"tabShow == 'itemized' && reportDetails?.viewType != '2'\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <app-items-report class=\"card p-3\" [showContent]=\"'other'\" [studentView]=\"false\" [timeView]=\"true\">\n            </app-items-report>\n        </div>\n    </div>\n</section>\n<section *ngIf=\"tabShow == 'viewAnalytics' && (reportDetails?.content_format == '3' || classOrScheduleReport)\">\n    <div class=\"col-12 card p-3\">\n        <app-sat-report></app-sat-report>\n    </div>\n</section>\n", styles: [".nav-tabs {\n\n  border-bottom: 1px solid #8F008A;\n\n  .nav-link {\n    margin-bottom: -2px;\n    &:hover {\n      border: 1px solid #8F008A;\n      border-bottom: none #fff;\n    }\n  }\n\n  .nav-link.active, .nav-tabs .nav-item.show .nav-link {\n    color: #8F008A;\n    background-color: #fff;\n    border: 1px solid #8F008A;\n    border-bottom: none #fff;\n  }\n}\n\n.button-absolute {\n  position: absolute;\n  top: -8px;\n  right: 17px;\n}\n\n.card {\n  border: 1px solid #8f008a;\n  border-top: 0 solid #8f008a !important;\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AllReportComponent, { className: "AllReportComponent" }); })();
//# sourceMappingURL=all-report.component.js.map