import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'add-holiday',
                component: AddHolidayComponent,
                data: {
                    title: "add-holiday",
                    breadcrumb: "Add Holiday"
                }
            },
        ]
    }
];
export class LeavesRoutingModule {
    static { this.ɵfac = function LeavesRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LeavesRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LeavesRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LeavesRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LeavesRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=leaves-routing.module.js.map