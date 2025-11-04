import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddGradeComponent } from './add-grade/add-grade.component';
import { ListGradeComponent } from './list-grade/list-grade.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-grade',
                component: ListGradeComponent,
                data: {
                    title: "Grade List",
                    breadcrumb: "Grade List"
                }
            },
            {
                path: 'create-grade/:type',
                component: AddGradeComponent,
                data: {
                    title: "Grade",
                    breadcrumb: "Add Grade"
                }
            }
        ]
    }
];
export class GradeRoutingModule {
    static { this.ɵfac = function GradeRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GradeRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GradeRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GradeRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GradeRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=grade-routing.module.js.map