import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {PipesModule} from '../../shared/pipes/pipes.module';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [AnnouncementListComponent],
    imports: [
        CommonModule,
        AnnouncementRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        PipesModule,
        AuthModule
    ]
})
export class AnnouncementModule { }
