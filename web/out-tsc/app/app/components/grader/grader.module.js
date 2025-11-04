import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentWorkComponent } from './student-work/student-work.component';
import { StudentContentRoutingModule } from '../student-content/student-content-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GraderRoutingModule } from './grader-routing.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import * as i0 from "@angular/core";
const customDefaultOptions = {
    scrollThrottlingTime: 0,
    scrollDebounceTime: 0,
    scrollAnimationTime: 750,
    checkResizeInterval: 1000,
    resizeBypassRefreshThreshold: 5,
    modifyOverflowStyleOfParentScroll: true,
    stripedTable: false
};
export class GraderModule {
    static { this.ɵfac = function GraderModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GraderModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GraderModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            { provide: 'virtual-scroller-default-options', useValue: customDefaultOptions }
        ], imports: [CommonModule,
            StudentContentRoutingModule,
            NgSelectModule,
            GraderRoutingModule,
            FormsModule,
            InfiniteScrollModule,
            PipesModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GraderModule, [{
        type: NgModule,
        args: [{
                declarations: [StudentWorkComponent],
                imports: [
                    CommonModule,
                    StudentContentRoutingModule,
                    NgSelectModule,
                    GraderRoutingModule,
                    FormsModule,
                    InfiniteScrollModule,
                    PipesModule,
                ],
                providers: [
                    { provide: 'virtual-scroller-default-options', useValue: customDefaultOptions }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GraderModule, { declarations: [StudentWorkComponent], imports: [CommonModule,
        StudentContentRoutingModule,
        NgSelectModule,
        GraderRoutingModule,
        FormsModule,
        InfiniteScrollModule,
        PipesModule] }); })();
//# sourceMappingURL=grader.module.js.map