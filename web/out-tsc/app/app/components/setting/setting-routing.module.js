import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SettingsListComponent } from './settings-list/settings-list.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: 'profile/:type',
        component: ProfileComponent,
        data: {
            title: 'My Profile',
            breadcrumb: 'My Profile'
        }
    },
    {
        path: 'list',
        component: SettingsListComponent,
        data: {
            title: 'General List',
            breadcrumb: 'General List'
        }
    },
];
export class SettingRoutingModule {
    static { this.ɵfac = function SettingRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SettingRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SettingRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SettingRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=setting-routing.module.js.map