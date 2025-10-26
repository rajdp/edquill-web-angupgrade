import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CareersListComponent} from './careers-list/careers-list.component';
import {ApplicationComponent} from './application/application.component';
import {ResumeDetailsComponent} from './resume-details/resume-details.component';

const routes: Routes = [
  {
    path: 'careers-list',
    component: CareersListComponent,
    data: {
      title: "Careers List",
      breadcrumb: "Careers List"
    }
  },
  {
    path: 'application',
    component: ApplicationComponent,

  }, {
    path: 'resume-details',
    component: ResumeDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersRoutingModule { }
