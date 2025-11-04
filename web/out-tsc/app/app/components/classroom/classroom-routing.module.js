import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddClassroomComponent } from './add-classroom/add-classroom.component';
import { ListClassroomComponent } from './list-classroom/list-classroom.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-classroom',
                component: ListClassroomComponent,
                data: {
                    title: 'Content Folder List',
                    breadcrumb: 'Content Folder List'
                }
            },
            {
                path: 'create-classroom/:type',
                component: AddClassroomComponent,
                data: {
                    title: 'Content Folder',
                    breadcrumb: 'Add Content Folder'
                }
            }
        ]
    }
];
export class ClassroomRoutingModule {
    static { this.ɵfac = function ClassroomRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ClassroomRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ClassroomRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClassroomRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ClassroomRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=classroom-routing.module.js.map