import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddClassComponent } from './add-class/add-class.component';
import { ListClassComponent } from './list-class/list-class.component';
import { SubmitClassComponent } from './submit-class/submit-class.component';
import { ViewAssignComponent } from './view-assign/view-assign.component';
import { TopicsCurriculumComponent } from './topics-curriculum/topics-curriculum.component';
import { CourseScheduleAddComponent } from './course-schedule-add/course-schedule-add.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-class',
                component: ListClassComponent,
                data: {
                    title: 'Class List',
                    breadcrumb: 'Class List'
                }
            },
            {
                path: 'create-class/:type',
                component: AddClassComponent,
                data: {
                    title: 'Class',
                    breadcrumb: 'Add Class'
                }
            },
            {
                path: 'submit-class/:id',
                component: SubmitClassComponent,
                data: {
                    title: 'Class',
                    breadcrumb: 'Add Class'
                }
            },
            {
                path: 'view-assign/:id',
                component: ViewAssignComponent,
                data: {
                    title: 'Class',
                    status: true,
                    secondtitle: 'Content Folder'
                }
            },
            {
                path: 'topicsAndCurriculum/:id',
                component: TopicsCurriculumComponent,
                data: {
                    title: 'Class',
                    status: true,
                    secondtitle: 'Create Topics'
                }
            },
            {
                path: 'schedule/:type',
                component: CourseScheduleAddComponent
            }
        ]
    }
];
export class ClassRoutingModule {
    static { this.ɵfac = function ClassRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ClassRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ClassRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClassRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ClassRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=class-routing.module.js.map