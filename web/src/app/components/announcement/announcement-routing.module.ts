import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AnnouncementListComponent} from './announcement-list/announcement-list.component';

const routes: Routes = [{
    path: 'list',
    component: AnnouncementListComponent,
    data: {
        title: 'Announcement List',
        breadcrumb: 'Announcement List'
    }
}, {
    path: 'list/:type',
    component: AnnouncementListComponent,
    data: {
        title: 'Announcement List',
        breadcrumb: 'Announcement List'
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnnouncementRoutingModule {
}
