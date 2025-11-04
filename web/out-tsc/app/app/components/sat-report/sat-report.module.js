import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SatReportRoutingModule } from './sat-report-routing.module';
import { SatReportComponent } from './sat-report/sat-report.component';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { QuestionReportComponent } from './question-report/question-report.component';
import { AuthModule } from '../auth/auth.module';
import * as i0 from "@angular/core";
export class SatReportModule {
    static { this.ɵfac = function SatReportModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SatReportModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SatReportModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            SatReportRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            NgMultiSelectDropDownModule,
            NgApexchartsModule,
            NgSelectModule,
            SharedModule,
            PipesModule,
            AuthModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SatReportModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    SatReportComponent,
                    QuestionReportComponent
                ],
                imports: [
                    CommonModule,
                    SatReportRoutingModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NgMultiSelectDropDownModule,
                    NgApexchartsModule,
                    NgbCollapse,
                    NgSelectModule,
                    SharedModule,
                    PipesModule,
                    AuthModule
                ],
                exports: [SatReportComponent, QuestionReportComponent],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA,
                    NO_ERRORS_SCHEMA
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SatReportModule, { declarations: [SatReportComponent,
        QuestionReportComponent], imports: [CommonModule,
        SatReportRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgMultiSelectDropDownModule,
        NgApexchartsModule,
        NgbCollapse,
        NgSelectModule,
        SharedModule,
        PipesModule,
        AuthModule], exports: [SatReportComponent, QuestionReportComponent] }); })();
//# sourceMappingURL=sat-report.module.js.map