import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddIndividualComponent} from './add-individual/add-individual.component';
import {ListIndividualComponent} from './list-individual/list-individual.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-individual',
        component: ListIndividualComponent,
        data: {
          title: 'Private Tutor List',
          breadcrumb: 'Private Tutor List'
        }
      },
      {
        path: 'create-individual/:type',
        component: AddIndividualComponent,
        data: {
          title: 'Private Tutor',
          breadcrumb: 'Add Private Tutor'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualRoutingModule { }
