import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalAnnouncementRoutingModule } from './global-announcement-routing.module';
import { GlobalAnnouncementListComponent } from './global-announcement/global-announcement-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from "../auth/auth.module";
import {CorporateschoolModule} from "../corporateschool/corporateschool.module";
import { GlobalAnnouncementAddComponent } from './global-announcement-add/global-announcement-add.component';
import {AngularMyDatePickerModule} from "@nodro7/angular-mydatepicker";


@NgModule({
  declarations: [
    GlobalAnnouncementListComponent,
    GlobalAnnouncementAddComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        GlobalAnnouncementRoutingModule,
        AuthModule,
        CorporateschoolModule,
        AngularMyDatePickerModule
    ]
})
export class GlobalAnnouncementModule { }
