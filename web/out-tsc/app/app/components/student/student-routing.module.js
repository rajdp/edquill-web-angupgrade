import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListTemplateComponent } from './list-student/list-student.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-student',
                component: ListTemplateComponent,
                data: {
                    title: 'Student List',
                    breadcrumb: 'student List'
                }
            },
            {
                path: 'create-student/:type',
                component: AddStudentComponent,
                data: {
                    title: 'Student',
                    breadcrumb: 'Add Student'
                }
            },
            {
                path: 'upgrade',
                component: UpgradeComponent,
                data: {
                    title: 'Upgrade',
                    breadcrumb: 'Upgrade'
                }
            }
        ]
    }
];
export class StudentRoutingModule {
    static { this.ɵfac = function StudentRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StudentRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StudentRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=student-routing.module.js.map