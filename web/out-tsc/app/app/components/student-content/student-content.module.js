import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentContentRoutingModule } from './student-content-routing.module';
import { ListContentComponent } from './list-content/list-content.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { StudentloginModule } from '../studentlogin/studentlogin.module';
import { AuthModule } from '../auth/auth.module';
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
export class StudentContentModule {
    static { this.ɵfac = function StudentContentModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentContentModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StudentContentModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            { provide: 'virtual-scroller-default-options', useValue: customDefaultOptions }
        ], imports: [CommonModule,
            StudentContentRoutingModule,
            NgSelectModule,
            FormsModule,
            InfiniteScrollModule,
            AngularMyDatePickerModule,
            PipesModule,
            StudentloginModule,
            AuthModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentContentModule, [{
        type: NgModule,
        args: [{
                declarations: [ListContentComponent],
                imports: [
                    CommonModule,
                    StudentContentRoutingModule,
                    NgSelectModule,
                    FormsModule,
                    InfiniteScrollModule,
                    AngularMyDatePickerModule,
                    PipesModule,
                    StudentloginModule,
                    AuthModule
                ],
                providers: [
                    { provide: 'virtual-scroller-default-options', useValue: customDefaultOptions }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StudentContentModule, { declarations: [ListContentComponent], imports: [CommonModule,
        StudentContentRoutingModule,
        NgSelectModule,
        FormsModule,
        InfiniteScrollModule,
        AngularMyDatePickerModule,
        PipesModule,
        StudentloginModule,
        AuthModule] }); })();
//# sourceMappingURL=student-content.module.js.map