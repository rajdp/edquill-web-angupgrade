import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListContentComponent } from './list-content/list-content.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-content/:type',
                component: ListContentComponent,
                data: {
                    title: 'Student-Work List',
                    breadcrumb: 'Student-Work'
                }
            },
        ]
    }
];
export class StudentContentRoutingModule {
    static { this.ɵfac = function StudentContentRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentContentRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StudentContentRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentContentRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StudentContentRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=student-content-routing.module.js.map