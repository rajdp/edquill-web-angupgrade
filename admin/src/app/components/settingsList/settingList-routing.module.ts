import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListSettingsComponent} from './list-settings/list-settings.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-Settings',
        component: ListSettingsComponent,
        data: {
          title: 'Settings List',
          breadcrumb: 'Settings List'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingListRoutingModule { }
