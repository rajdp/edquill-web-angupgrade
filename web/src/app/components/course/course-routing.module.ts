import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {DetailsComponent} from './details/details.component';
import {FaqComponent} from './faq/faq.component';
import {SeoComponent} from './seo/seo.component';
import {CourseDetailsAddComponent} from './details/course-details-add/course-details-add.component';
import {CourseCategoryAddComponent} from './category/course-category-add/course-category-add.component';
import {CourseFaqAddComponent} from "./faq/course-faq-add/course-faq-add.component";
import {CourseWizardComponent} from "./course-wizard/course-wizard.component";

const routes: Routes = [{
    path: 'wizard',
    component: CourseWizardComponent
}, {
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
} , {
    path: 'category/:type',
    component: CourseCategoryAddComponent
}, {
    path: 'details/:type',
    component: CourseDetailsAddComponent
}, {
    path: 'faq/:type',
    component: CourseFaqAddComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseRoutingModule {
}
