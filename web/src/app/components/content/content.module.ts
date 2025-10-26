import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from '../auth/auth.module';
import {AngularMyDatePickerModule} from '@nodro7/angular-mydatepicker';
import {NgSelectModule} from '@ng-select/ng-select';
import {PipesModule} from '../../shared/pipes/pipes.module';

import { ContentRoutingModule } from './content-routing.module';
import { ContentCategoryComponent } from './content-category/content-category.component';
import { ContentCategoryAddComponent } from './content-category/content-category-add/content-category-add.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentAddComponent } from './content-list/content-add/content-add.component';
import { ContentSeoComponent } from './content-seo/content-seo.component';


@NgModule({
  declarations: [
    ContentCategoryComponent,
    ContentCategoryAddComponent,
    ContentListComponent,
    ContentAddComponent,
    ContentSeoComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    AngularMyDatePickerModule,
    AuthModule,
    PipesModule
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
  ]
})
export class ContentModule { }
