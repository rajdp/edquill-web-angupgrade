import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScoreDetectionComponent } from './score-detection.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'score-details/:type',
                component: ScoreDetectionComponent,
                data: {
                    title: "Score Details",
                    breadcrumb: "Score Details"
                }
            }
        ]
    }
];
export class ScoreDetectionRoutingModule {
    static { this.ɵfac = function ScoreDetectionRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScoreDetectionRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ScoreDetectionRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScoreDetectionRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ScoreDetectionRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=score-detection-routing.module.js.map