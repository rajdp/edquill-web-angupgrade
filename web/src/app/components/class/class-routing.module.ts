import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddClassComponent} from './add-class/add-class.component';
import {ListClassComponent} from './list-class/list-class.component';
import {SubmitClassComponent} from './submit-class/submit-class.component';
import {ViewAssignComponent} from './view-assign/view-assign.component';
import {TopicsCurriculumComponent} from './topics-curriculum/topics-curriculum.component';
import {CourseScheduleAddComponent} from './course-schedule-add/course-schedule-add.component'
import {ClassOverviewComponent} from './class-overview/class-overview.component';

const routes: Routes = [
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
        path: 'overview/:id',
        component: ClassOverviewComponent,
        data: {
          title: 'Class Overview',
          breadcrumb: 'Class Overview'
        }
      },
      {
        path: 'schedule/:type',
        component: CourseScheduleAddComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
