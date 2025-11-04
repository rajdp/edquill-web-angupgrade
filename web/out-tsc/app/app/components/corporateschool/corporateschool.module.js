import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateschoolRoutingModule } from './corporateschool-routing.module';
import { EmptyschoolComponent } from './emptyschool/emptyschool.component';
import * as i0 from "@angular/core";
export class CorporateschoolModule {
    static { this.ɵfac = function CorporateschoolModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CorporateschoolModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CorporateschoolModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            CorporateschoolRoutingModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CorporateschoolModule, [{
        type: NgModule,
        args: [{
                declarations: [EmptyschoolComponent],
                exports: [
                    EmptyschoolComponent
                ],
                imports: [
                    CommonModule,
                    CorporateschoolRoutingModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CorporateschoolModule, { declarations: [EmptyschoolComponent], imports: [CommonModule,
        CorporateschoolRoutingModule], exports: [EmptyschoolComponent] }); })();
//# sourceMappingURL=corporateschool.module.js.map