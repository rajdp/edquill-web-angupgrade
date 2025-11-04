import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListSettingsComponent } from './list-settings/list-settings.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-Settings',
                component: ListSettingsComponent,
                data: {
                    title: "General List",
                    breadcrumb: "General List"
                }
            },
        ]
    }
];
export class SettingListRoutingModule {
    static { this.ɵfac = function SettingListRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SettingListRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SettingListRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingListRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SettingListRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=settingList-routing.module.js.map