import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentCategoryComponent } from './content-category/content-category.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentSeoComponent } from './content-seo/content-seo.component';
import { ContentCategoryAddComponent } from './content-category/content-category-add/content-category-add.component';
import { ContentAddComponent } from './content-list/content-add/content-add.component';

const routes: Routes = [{
  path: 'category/list',
  component: ContentCategoryComponent
}, {
  path: 'content-list/list',
  component: ContentListComponent
}, {
  path: 'seo/list',
  component: ContentSeoComponent
}, {
  path: 'category/:type',
  component: ContentCategoryAddComponent
}, {
  path: 'content-list/:type',
  component: ContentAddComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
