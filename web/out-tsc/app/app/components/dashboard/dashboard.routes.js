export const DASHBOARD_ROUTES = [
    {
        path: '',
        children: [
            {
                path: 'default',
                loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent),
                data: {
                    title: 'Dashboard',
                    breadcrumb: 'Dashboard'
                }
            }
        ]
    }
];
//# sourceMappingURL=dashboard.routes.js.map