import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddHomeComponent } from './add-home/add-home.component';
import { ListHomeComponent } from './list-home/list-home.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-home',
                component: ListHomeComponent,
                data: {
                    title: "Home List",
                    breadcrumb: "Home List"
                }
            },
            {
                path: 'create-home/:type',
                component: AddHomeComponent,
                data: {
                    title: "Home",
                    breadcrumb: "Add Home"
                }
            }
        ]
    }
];
export class HomeRoutingModule {
    static { this.ɵfac = function HomeRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HomeRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HomeRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=home-routing.module.js.map