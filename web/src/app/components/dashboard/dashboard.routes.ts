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
      },
      {
        path: 'admin',
        loadChildren: () => import('../admin/admin-dashboard/admin-dashboard.routes').then(m => m.ADMIN_DASHBOARD_ROUTES),
        data: {
          title: 'Admin Dashboard',
          breadcrumb: 'Admin Dashboard'
        }
      }
    ]
  }
];
