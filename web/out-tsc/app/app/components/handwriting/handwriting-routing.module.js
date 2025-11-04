import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextHandwritingComponent } from './text-handwriting/text-handwriting.component';
import { MathHandwritingComponent } from './math-handwriting/math-handwriting.component';
import { DiagramHandwritingComponent } from './diagram-handwriting/diagram-handwriting.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'text-handwriting',
                component: TextHandwritingComponent,
                data: {
                    title: '',
                    breadcrumb: ''
                }
            },
            {
                path: 'math-handwriting',
                component: MathHandwritingComponent,
                data: {
                    title: '',
                    breadcrumb: ''
                }
            },
            {
                path: 'diagram-handwriting',
                component: DiagramHandwritingComponent,
                data: {
                    title: '',
                    breadcrumb: ''
                }
            }
        ]
    }
];
export class HandwritingRoutingModule {
    static { this.ɵfac = function HandwritingRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HandwritingRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HandwritingRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HandwritingRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HandwritingRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=handwriting-routing.module.js.map