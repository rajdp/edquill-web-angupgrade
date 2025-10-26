import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTestimonyComponent} from "./list-testimony/list-testimony.component";
import {AddTestimonyComponent} from "./add-testimony/add-testimony.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-testimonial',
        component: ListTestimonyComponent,
        data: {
          title: 'Testimonial List',
          breadcrumb: 'Testimonial List'
        }
      },
      {
        path: 'create-testimonial/:type',
        component: AddTestimonyComponent,
        data: {
          title: 'Create Testimonial',
          breadcrumb: 'Testimonial'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimonyRoutingModule { }
