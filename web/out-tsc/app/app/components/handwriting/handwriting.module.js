import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { HandwritingRoutingModule } from './handwriting-routing.module';
import { TextHandwritingComponent } from './text-handwriting/text-handwriting.component';
import { DiagramHandwritingComponent } from './diagram-handwriting/diagram-handwriting.component';
import { MathHandwritingComponent } from './math-handwriting/math-handwriting.component';
import * as i0 from "@angular/core";
export class HandwritingModule {
    static { this.ɵfac = function HandwritingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HandwritingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HandwritingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TitleCasePipe], imports: [CommonModule,
            HandwritingRoutingModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HandwritingModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    TextHandwritingComponent,
                    DiagramHandwritingComponent,
                    MathHandwritingComponent
                ],
                imports: [
                    CommonModule,
                    HandwritingRoutingModule
                ],
                exports: [
                    TextHandwritingComponent,
                    DiagramHandwritingComponent,
                    MathHandwritingComponent
                ],
                providers: [TitleCasePipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HandwritingModule, { declarations: [TextHandwritingComponent,
        DiagramHandwritingComponent,
        MathHandwritingComponent], imports: [CommonModule,
        HandwritingRoutingModule], exports: [TextHandwritingComponent,
        DiagramHandwritingComponent,
        MathHandwritingComponent] }); })();
//# sourceMappingURL=handwriting.module.js.map