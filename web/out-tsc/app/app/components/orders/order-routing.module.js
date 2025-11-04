import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: 'list',
        component: OrderListComponent,
        data: {
            title: 'Order List',
            breadcrumb: 'Order List'
        }
    }];
export class OrderRoutingModule {
    static { this.ɵfac = function OrderRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OrderRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: OrderRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OrderRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=order-routing.module.js.map