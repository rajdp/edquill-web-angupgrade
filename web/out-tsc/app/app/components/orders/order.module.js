import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipesModule } from "../../shared/pipes/pipes.module";
import * as i0 from "@angular/core";
export class OrderModule {
    static { this.ɵfac = function OrderModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OrderModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: OrderModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            OrderRoutingModule,
            FormsModule,
            NgSelectModule,
            NgxDatatableModule,
            ReactiveFormsModule,
            PipesModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    OrderListComponent
                ],
                imports: [
                    CommonModule,
                    OrderRoutingModule,
                    FormsModule,
                    NgSelectModule,
                    NgxDatatableModule,
                    ReactiveFormsModule,
                    PipesModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OrderModule, { declarations: [OrderListComponent], imports: [CommonModule,
        OrderRoutingModule,
        FormsModule,
        NgSelectModule,
        NgxDatatableModule,
        ReactiveFormsModule,
        PipesModule] }); })();
//# sourceMappingURL=order.module.js.map