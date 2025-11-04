import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddContentComponent } from './add-Content/add-Content.component';
import { ListContentComponent } from './list-Content/list-Content.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-Content',
                component: ListContentComponent,
                data: {
                    title: "Content-Creator List",
                    breadcrumb: "Content-Creator List"
                }
            },
            {
                path: 'create-Content/:type',
                component: AddContentComponent,
                data: {
                    title: "Content-Creator",
                    breadcrumb: "Add Content-Creator"
                }
            }
        ]
    }
];
export class ContentRoutingModule {
    static { this.ɵfac = function ContentRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ContentRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ContentRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=Content-routing.module.js.map