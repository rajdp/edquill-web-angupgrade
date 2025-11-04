import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: 'list',
        component: AnnouncementListComponent,
        data: {
            title: 'Announcement List',
            breadcrumb: 'Announcement List'
        }
    }, {
        path: 'list/:type',
        component: AnnouncementListComponent,
        data: {
            title: 'Announcement List',
            breadcrumb: 'Announcement List'
        }
    }];
export class AnnouncementRoutingModule {
    static { this.ɵfac = function AnnouncementRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AnnouncementRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AnnouncementRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnnouncementRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AnnouncementRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=announcement-routing.module.js.map