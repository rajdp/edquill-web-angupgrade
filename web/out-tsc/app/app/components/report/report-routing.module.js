import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssessmentSummaryComponent } from './assessment-summary/assessment-summary.component';
import { StudentGradeSummaryComponent } from './student-grade-summary/student-grade-summary.component';
import { GradeReportComponent } from './grade-report/grade-report.component';
import { MissedWorkReportComponent } from './missed-work-report/missed-work-report.component';
import { StudentPerformanceReportComponent } from './student-performance-report/student-performance-report.component';
import { ItemsReportComponent } from './items-report/items-report.component';
import { AllReportComponent } from './all-report/all-report.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'assessment-summary',
                component: AssessmentSummaryComponent,
                data: {
                    title: 'Reports / Assessment Summary',
                    breadcrumb: 'Assessment Summary'
                }
            },
            {
                path: 'student-grade-summary',
                component: StudentGradeSummaryComponent,
                data: {
                    title: 'Reports / Student Grade Summary',
                    breadcrumb: 'Student Grade Summary'
                }
            },
            {
                path: 'grade-report',
                component: GradeReportComponent,
                data: {
                    title: 'Reports / Grade Report',
                    breadcrumb: 'Grade Report'
                }
            },
            {
                path: 'missed-work-report',
                component: MissedWorkReportComponent,
                data: {
                    title: 'Reports / Student Work Report',
                    breadcrumb: 'Student Work Report'
                }
            },
            {
                path: 'student-performance-report',
                component: StudentPerformanceReportComponent,
                data: {
                    title: 'Reports / Student Performance Report',
                    breadcrumb: 'Student Performance Report'
                }
            },
            {
                path: 'items-report',
                component: ItemsReportComponent,
                data: {
                    title: 'Reports / Items Report',
                    breadcrumb: 'Items Report'
                }
            },
            {
                path: 'report',
                component: AllReportComponent,
                data: {
                    title: 'report',
                    breadcrumb: 'Report'
                }
            }
        ]
    }
];
export class ReportRoutingModule {
    static { this.ɵfac = function ReportRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReportRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ReportRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReportRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ReportRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=report-routing.module.js.map