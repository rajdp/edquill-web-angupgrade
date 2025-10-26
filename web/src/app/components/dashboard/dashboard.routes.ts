import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        loadComponent: () =>
          import('./dashboard.component').then(m => m.DashboardComponent),
        data: {
          title: 'Dashboard',
          breadcrumb: 'Dashboard'
        }
      }
    ]
  }
];
