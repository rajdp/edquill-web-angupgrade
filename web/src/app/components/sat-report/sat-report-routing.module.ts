import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SatReportComponent } from './sat-report/sat-report.component';
import { QuestionReportComponent } from './question-report/question-report.component';

const routes: Routes = [{
  path: '',
  component: SatReportComponent,
  data: {
    title: 'SAT Report',
    breadcrumb: 'SAT Report'
  }
  },
  {
    path: 'question',
    component: QuestionReportComponent,
    // data: {
    //   title: 'Question Report',
    //   breadcrumb: 'Question Report'
    // }
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SatReportRoutingModule { }
