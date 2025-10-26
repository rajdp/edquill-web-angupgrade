import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CareersRoutingModule } from './careers-routing.module';
import { SharedModule } from '../../shared/shared.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CareersListComponent} from './careers-list/careers-list.component';
import {AngularMyDatePickerModule} from 'angular-mydatepicker';
import {ApplicationComponent} from "./application/application.component";
import { ResumeDetailsComponent } from './resume-details/resume-details.component';

@NgModule({
  declarations: [CareersListComponent, ApplicationComponent, ResumeDetailsComponent],
    imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        CareersRoutingModule,
        SharedModule,
        Ng2SmartTableModule,
        FormsModule,
        AngularMyDatePickerModule
    ]
})
export class CareersModule { }
