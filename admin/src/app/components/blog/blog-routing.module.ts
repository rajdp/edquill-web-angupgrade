import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBlogComponent} from "./list-blog/list-blog.component";
import {CreateBlogComponent} from "./create-blog/create-blog.component";


const routes: Routes = [
  {
    path : 'list-blog',
    component: ListBlogComponent,
    data: {
      title: 'Blog List',
      breadcrumb: 'Blog'
    }
  },
  {
    path : 'create-blog/:type',
    component: CreateBlogComponent,
    data: {
      title: 'Create Blog',
      breadcrumb: 'Create Blog'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
