import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCorporatesComponent} from './add-corporates/add-corporates.component';
import {ListCorporatesComponent} from './list-corporates/list-corporates.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-corporates',
        component: ListCorporatesComponent,
        data: {
          title: 'Corporates List',
          breadcrumb: 'Corporates List'
        }
      },
      {
        path: 'create-corporates/:type',
        component: AddCorporatesComponent,
        data: {
          title: 'Corporates',
          breadcrumb: 'Add Corporates'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporatesRoutingModule { }
