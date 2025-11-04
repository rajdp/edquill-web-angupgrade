import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalAnnouncementListComponent } from './global-announcement/global-announcement-list.component';
import { GlobalAnnouncementAddComponent } from './global-announcement-add/global-announcement-add.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: 'list',
        component: GlobalAnnouncementListComponent
    }, {
        path: 'create-announcement/:type',
        component: GlobalAnnouncementAddComponent
    }];
export class GlobalAnnouncementRoutingModule {
    static { this.ɵfac = function GlobalAnnouncementRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GlobalAnnouncementRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GlobalAnnouncementRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalAnnouncementRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GlobalAnnouncementRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=global-announcement-routing.module.js.map