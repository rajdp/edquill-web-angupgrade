import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { ListSubjectComponent } from './list-subject/list-subject.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-subject',
                component: ListSubjectComponent,
                data: {
                    title: 'Subject List',
                    breadcrumb: 'Subject List'
                }
            },
            {
                path: 'create-subject/:type',
                component: AddSubjectComponent,
                data: {
                    title: 'Subject',
                    breadcrumb: 'Add Subject'
                }
            }
        ]
    }
];
export class SubjectRoutingModule {
    static { this.ɵfac = function SubjectRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubjectRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SubjectRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubjectRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SubjectRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=subject-routing.module.js.map