import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListCorrectionComponent } from './list-correction/list-correction.component';
import { CorrectionPageComponent } from './correction-page/correction-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-correction',
                component: ListCorrectionComponent,
                data: {
                    title: 'Assignment - Correction List',
                    breadcrumb: 'Assignment List'
                }
            },
            {
                path: 'correction-page',
                component: CorrectionPageComponent,
                data: {
                    title: 'Student Progress',
                    breadcrumb: 'Progress'
                }
            },
        ]
    }
];
export class AssignmentCorrectionRoutingModule {
    static { this.ɵfac = function AssignmentCorrectionRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AssignmentCorrectionRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AssignmentCorrectionRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AssignmentCorrectionRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AssignmentCorrectionRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=correction-routing.module.js.map