import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentHomeComponent} from './content-home/content-home.component';
import {AddResourcesComponent} from './add-resources/add-resources.component';
import {CreateAssessmentComponent} from './create-assessment/create-assessment.component';
import {PreviewComponent} from './preview/preview.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'content-home',
        component: ContentHomeComponent,
        data: {
          title: 'Content-Library',
          breadcrumb: 'Content-Library'
        }
      },
      {
        path: 'content-home/:type',
        component: ContentHomeComponent,
        data: {
          title: 'Content-Library',
          breadcrumb: 'Content-Library/:type'
        }
      },
      {
        path: 'add-resources/:type',
        component: AddResourcesComponent,
        data: {
          title: 'add-resources',
          breadcrumb: 'Repository/add-resources'
        }
      },
      {
        path: 'create-assessment/:type',
        component: CreateAssessmentComponent,
        data: {
          breadcrumb: 'Create-Assessment'
        }
      },
      {
        path: 'preview',
        component: PreviewComponent,
        data: {
          title: 'Preview',
          breadcrumb: 'Preview'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentsRoutingModule { }
