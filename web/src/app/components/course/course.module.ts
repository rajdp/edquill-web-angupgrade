import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseRoutingModule} from './course-routing.module';
import {CategoryComponent} from './category/category.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DetailsComponent} from './details/details.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FaqComponent} from './faq/faq.component';
import {SeoComponent} from './seo/seo.component';
import {CourseDetailsAddComponent} from './details/course-details-add/course-details-add.component';
import {AngularMyDatePickerModule} from '@nodro7/angular-mydatepicker';
import {AuthModule} from '../auth/auth.module';
import {CourseCategoryAddComponent} from './category/course-category-add/course-category-add.component';
import {CourseFaqAddComponent} from './faq/course-faq-add/course-faq-add.component';
import {PipesModule} from '../../shared/pipes/pipes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseWizardComponent } from './course-wizard/course-wizard.component';

@NgModule({
    declarations: [
        CategoryComponent,
        DetailsComponent,
        FaqComponent,
        SeoComponent,
        CourseCategoryAddComponent,
        CourseDetailsAddComponent,
        CourseFaqAddComponent,
        CourseWizardComponent,
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
})
export class CourseModule {
}
