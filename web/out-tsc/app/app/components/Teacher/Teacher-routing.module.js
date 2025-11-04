import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddTeacherComponent } from './add-Teacher/add-Teacher.component';
import { ListTeacherComponent } from './list-Teacher/list-Teacher.component';
import { TeacherAvailabilityComponent } from './availability/teacher-availability.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-Teacher',
                component: ListTeacherComponent,
                data: {
                    title: 'Teacher List',
                    breadcrumb: 'Teacher List'
                }
            },
            {
                path: 'create-Teacher/:type',
                component: AddTeacherComponent,
                data: {
                    title: 'Teacher',
                    breadcrumb: 'Add Teacher'
                }
            },
            {
                path: 'availability',
                component: TeacherAvailabilityComponent,
                data: {
                    title: 'Teacher Availability',
                    breadcrumb: 'Availability'
                }
            }
        ]
    }
];
export class TeacherRoutingModule {
    static { this.ɵfac = function TeacherRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TeacherRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TeacherRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TeacherRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TeacherRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=Teacher-routing.module.js.map