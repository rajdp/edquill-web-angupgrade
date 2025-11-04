import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MailboxComponent } from './mailbox/mailbox.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'inbox',
                component: MailboxComponent,
                data: {
                    title: 'Mail',
                    breadcrumb: 'Mail'
                }
            }
        ]
    }
];
export class MailboxRoutingModule {
    static { this.ɵfac = function MailboxRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MailboxRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MailboxRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MailboxRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MailboxRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=mailbox-routing.module.js.map