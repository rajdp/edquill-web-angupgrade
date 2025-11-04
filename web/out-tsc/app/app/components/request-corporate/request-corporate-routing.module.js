import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestComponent } from './request/request.component';
import { DownloadApprovalComponent } from './download-approval/download-approval.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: 'request',
        component: RequestComponent,
        data: {
            title: 'Corporate Access',
            data1: true,
            corporateTitle: 'Pending Approval',
            breadcrumb: 'Request Corporate'
        }
    },
    {
        path: 'download-request',
        component: DownloadApprovalComponent,
        data: {
            title: 'PDF download Request',
            adminTitle: 'PDF download Request',
            breadcrumb: 'Download Request'
        }
    },
];
export class RequestCorporateRoutingModule {
    static { this.ɵfac = function RequestCorporateRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RequestCorporateRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RequestCorporateRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RequestCorporateRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RequestCorporateRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=request-corporate-routing.module.js.map