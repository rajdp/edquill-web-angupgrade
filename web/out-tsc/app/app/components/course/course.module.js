import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { CategoryComponent } from './category/category.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FaqComponent } from './faq/faq.component';
import { SeoComponent } from './seo/seo.component';
import { CourseDetailsAddComponent } from './details/course-details-add/course-details-add.component';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { AuthModule } from '../auth/auth.module';
import { CourseCategoryAddComponent } from './category/course-category-add/course-category-add.component';
import { CourseFaqAddComponent } from './faq/course-faq-add/course-faq-add.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
export class CourseModule {
    static { this.ɵfac = function CourseModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CourseModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CourseModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            CourseRoutingModule,
            NgxDatatableModule,
            FormsModule,
            ReactiveFormsModule,
            NgSelectModule,
            AngularMyDatePickerModule,
            AuthModule,
            PipesModule,
            NgbModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CourseModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    CategoryComponent,
                    DetailsComponent,
                    FaqComponent,
                    SeoComponent,
                    CourseCategoryAddComponent,
                    CourseDetailsAddComponent,
                    CourseFaqAddComponent,
                ],
                imports: [
                    CommonModule,
                    CourseRoutingModule,
                    NgxDatatableModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NgSelectModule,
                    AngularMyDatePickerModule,
                    AuthModule,
                    PipesModule,
                    NgbModule
                ],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA,
                    NO_ERRORS_SCHEMA
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CourseModule, { declarations: [CategoryComponent,
        DetailsComponent,
        FaqComponent,
        SeoComponent,
        CourseCategoryAddComponent,
        CourseDetailsAddComponent,
        CourseFaqAddComponent], imports: [CommonModule,
        CourseRoutingModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        AngularMyDatePickerModule,
        AuthModule,
        PipesModule,
        NgbModule] }); })();
//# sourceMappingURL=course.module.js.map