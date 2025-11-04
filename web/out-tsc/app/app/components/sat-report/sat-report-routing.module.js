import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SatReportComponent } from './sat-report/sat-report.component';
import { QuestionReportComponent } from './question-report/question-report.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: '',
        component: SatReportComponent,
        data: {
            title: 'SAT Report',
            breadcrumb: 'SAT Report'
        }
    },
    {
        path: 'question',
        component: QuestionReportComponent,
        // data: {
        //   title: 'Question Report',
        //   breadcrumb: 'Question Report'
        // }
    }];
export class SatReportRoutingModule {
    static { this.ɵfac = function SatReportRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SatReportRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SatReportRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SatReportRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SatReportRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=sat-report-routing.module.js.map