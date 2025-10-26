import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import {SettingsListComponent} from './settings-list/settings-list.component';


const routes: Routes = [
  {
    path: 'profile/:type',
    component: ProfileComponent,
    data: {
      title: 'My Profile',
      breadcrumb: 'My Profile'
    }
  },
  {
    path: 'list',
    component: SettingsListComponent,
    data: {
      title: "Settings List",
      breadcrumb: "Settings List"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
