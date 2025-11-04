import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DetailsComponent } from './details/details.component';
import { FaqComponent } from './faq/faq.component';
import { SeoComponent } from './seo/seo.component';
import { CourseDetailsAddComponent } from './details/course-details-add/course-details-add.component';
import { CourseCategoryAddComponent } from './category/course-category-add/course-category-add.component';
import { CourseFaqAddComponent } from "./faq/course-faq-add/course-faq-add.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: 'category/list',
        component: CategoryComponent
    }, {
        path: 'details/list',
        component: DetailsComponent
    }, {
        path: 'faq/list',
        component: FaqComponent
    }, {
        path: 'seo/list',
        component: SeoComponent
    }, {
        path: 'category/:type',
        component: CourseCategoryAddComponent
    }, {
        path: 'details/:type',
        component: CourseDetailsAddComponent
    }, {
        path: 'faq/:type',
        component: CourseFaqAddComponent
    }];
export class CourseRoutingModule {
    static { this.ɵfac = function CourseRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CourseRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CourseRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CourseRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CourseRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=course-routing.module.js.map