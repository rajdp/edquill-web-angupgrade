import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrmShellComponent } from './crm-shell/crm-shell.component';
import { CrmGuardiansComponent } from './guardians/guardians.component';
import { CrmFeesComponent } from './fees/fees.component';
import { CrmNotificationsComponent } from './notifications/notifications.component';
import { CrmReportCardsComponent } from './report-cards/report-cards.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        component: CrmShellComponent,
        data: { breadcrumb: 'CRM' },
        children: [
            {
                path: '',
                redirectTo: 'guardians',
                pathMatch: 'full'
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
export class CrmRoutingModule {
    static { this.ɵfac = function CrmRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CrmRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CrmRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrmRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CrmRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=crm-routing.module.js.map