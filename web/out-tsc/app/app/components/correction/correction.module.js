import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentCorrectionRoutingModule } from './correction-routing.module';
import { ListCorrectionComponent } from './list-correction/list-correction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CorrectionPageComponent } from './correction-page/correction-page.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { AuthModule } from '../auth/auth.module';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import { ReportModule } from '../report/report.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgApexchartsModule } from 'ng-apexcharts';
import * as i0 from "@angular/core";
export class AssessmentCorrectionModule {
    static { this.ɵfac = function AssessmentCorrectionModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AssessmentCorrectionModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AssessmentCorrectionModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            NgbModule,
            ReactiveFormsModule,
            FormsModule,
            AssessmentCorrectionRoutingModule,
            NgSelectModule,
            PdfViewerModule,
            SharedModule,
            PipesModule,
            AuthModule,
            CorporateschoolModule,
            ReportModule,
            InfiniteScrollModule,
            NgApexchartsModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AssessmentCorrectionModule, [{
        type: NgModule,
        args: [{
                declarations: [ListCorrectionComponent, CorrectionPageComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    ReactiveFormsModule,
                    FormsModule,
                    AssessmentCorrectionRoutingModule,
                    NgSelectModule,
                    PdfViewerModule,
                    SharedModule,
                    PipesModule,
                    AuthModule,
                    CorporateschoolModule,
                    ReportModule,
                    InfiniteScrollModule,
                    NgApexchartsModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AssessmentCorrectionModule, { declarations: [ListCorrectionComponent, CorrectionPageComponent], imports: [CommonModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        AssessmentCorrectionRoutingModule,
        NgSelectModule,
        PdfViewerModule,
        SharedModule,
        PipesModule,
        AuthModule,
        CorporateschoolModule,
        ReportModule,
        InfiniteScrollModule,
        NgApexchartsModule] }); })();
//# sourceMappingURL=correction.module.js.map