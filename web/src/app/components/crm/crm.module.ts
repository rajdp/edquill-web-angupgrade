import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { CrmRoutingModule } from './crm-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CrmShellComponent } from './crm-shell/crm-shell.component';
import { CrmGuardiansComponent } from './guardians/guardians.component';
import { CrmFeesComponent } from './fees/fees.component';
import { CrmNotificationsComponent } from './notifications/notifications.component';
import { CrmReportCardsComponent } from './report-cards/report-cards.component';
import { CrmRegistrationsComponent } from './registrations/registrations.component';

@NgModule({
  declarations: [
    CrmShellComponent,
    CrmGuardiansComponent,
    CrmFeesComponent,
    CrmNotificationsComponent,
    CrmReportCardsComponent,
    CrmRegistrationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    SharedModule,
    CrmRoutingModule
  ]
})
export class CrmModule { }
