import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingPipe } from './sorting/sorting.pipe';
import { SanitizeHtmlPipe } from './sanitizer/SanitizeHtmlPipe.pipe';
import { CustomDateFormatPipe } from './custom-date-format.pipe';
import { TableSearch } from './table-search/table-search';
import { TruncateHtmlPipe } from './truncate.pipe';
import * as i0 from "@angular/core";
export class PipesModule {
    static { this.ɵfac = function PipesModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PipesModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PipesModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PipesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SortingPipe,
                    SanitizeHtmlPipe,
                    TableSearch,
                    CustomDateFormatPipe,
                    TruncateHtmlPipe
                ],
                exports: [
                    SortingPipe,
                    SanitizeHtmlPipe,
                    CustomDateFormatPipe,
                    TruncateHtmlPipe
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PipesModule, { declarations: [SortingPipe,
        SanitizeHtmlPipe,
        TableSearch,
        CustomDateFormatPipe,
        TruncateHtmlPipe], imports: [CommonModule], exports: [SortingPipe,
        SanitizeHtmlPipe,
        CustomDateFormatPipe,
        TruncateHtmlPipe] }); })();
//# sourceMappingURL=pipes.module.js.map