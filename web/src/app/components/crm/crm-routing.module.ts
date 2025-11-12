import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmShellComponent } from './crm-shell/crm-shell.component';
import { CrmGuardiansComponent } from './guardians/guardians.component';
import { CrmFeesComponent } from './fees/fees.component';
import { CrmNotificationsComponent } from './notifications/notifications.component';
import { CrmReportCardsComponent } from './report-cards/report-cards.component';
import { CrmRegistrationsComponent } from './registrations/registrations.component';

const routes: Routes = [
  {
    path: '',
    component: CrmShellComponent,
    data: { breadcrumb: 'CRM' },
    children: [
      {
        path: '',
        redirectTo: 'registrations',
        pathMatch: 'full'
      },
      {
        path: 'registrations',
        component: CrmRegistrationsComponent,
        data: { breadcrumb: 'Registrations' }
      },
      {
        path: 'guardians',
        component: CrmGuardiansComponent,
        data: { breadcrumb: 'Guardians' }
      },
      {
        path: 'fees',
        component: CrmFeesComponent,
        data: { breadcrumb: 'Fees' }
      },
      {
        path: 'notifications',
        component: CrmNotificationsComponent,
        data: { breadcrumb: 'Notifications' }
      },
      {
        path: 'reports',
        component: CrmReportCardsComponent,
        data: { breadcrumb: 'Report Cards' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
