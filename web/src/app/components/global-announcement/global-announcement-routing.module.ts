import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GlobalAnnouncementListComponent} from './global-announcement/global-announcement-list.component';
import {GlobalAnnouncementAddComponent} from './global-announcement-add/global-announcement-add.component';

const routes: Routes = [{
  path: 'list',
  component: GlobalAnnouncementListComponent
}, {
  path: 'create-announcement/:type',
  component: GlobalAnnouncementAddComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalAnnouncementRoutingModule { }
