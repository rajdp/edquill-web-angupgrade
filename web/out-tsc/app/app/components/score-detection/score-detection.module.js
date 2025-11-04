import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreDetectionRoutingModule } from './score-detection-routing.module';
import { ScoreDetectionComponent } from './score-detection.component';
import * as i0 from "@angular/core";
export class ScoreDetectionModule {
    static { this.ɵfac = function ScoreDetectionModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScoreDetectionModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ScoreDetectionModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ScoreDetectionRoutingModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScoreDetectionModule, [{
        type: NgModule,
        args: [{
                declarations: [ScoreDetectionComponent],
                imports: [
                    CommonModule,
                    ScoreDetectionRoutingModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ScoreDetectionModule, { declarations: [ScoreDetectionComponent], imports: [CommonModule,
        ScoreDetectionRoutingModule] }); })();
//# sourceMappingURL=score-detection.module.js.map