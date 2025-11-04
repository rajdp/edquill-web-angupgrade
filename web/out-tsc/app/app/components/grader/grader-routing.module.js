import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentWorkComponent } from './student-work/student-work.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'student-work/:type',
                component: StudentWorkComponent,
                data: {
                    title: 'Student Work',
                    breadcrumb: 'Student Work'
                }
            }
        ]
    }
];
export class GraderRoutingModule {
    static { this.ɵfac = function GraderRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GraderRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GraderRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GraderRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GraderRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=grader-routing.module.js.map