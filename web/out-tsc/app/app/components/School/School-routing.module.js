import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddSchoolComponent } from './add-School/add-School.component';
import { ListSchoolComponent } from './list-School/list-School.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-School',
                component: ListSchoolComponent,
                data: {
                    title: 'Institution List',
                    breadcrumb: 'Institution List'
                }
            },
            {
                path: 'create-School/:type',
                component: AddSchoolComponent,
                data: {
                    title: 'Institution',
                    breadcrumb: 'Add Institution'
                }
            }
        ]
    }
];
export class SchoolRoutingModule {
    static { this.ɵfac = function SchoolRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SchoolRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SchoolRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchoolRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SchoolRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=School-routing.module.js.map