import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentCorrectionRoutingModule } from './correction-routing.module';
import { ListCorrectionComponent } from './list-correction/list-correction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CorrectionPageComponent } from './correction-page/correction-page.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SharedModule } from '../../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import { ReportModule } from '../report/report.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgApexchartsModule } from "ng-apexcharts";
import * as i0 from "@angular/core";
export class AssignmentCorrectionModule {
    static { this.ɵfac = function AssignmentCorrectionModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AssignmentCorrectionModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AssignmentCorrectionModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            NgbModule,
            ReactiveFormsModule,
            FormsModule,
            AssignmentCorrectionRoutingModule,
            NgSelectModule,
            PdfViewerModule,
            SharedModule,
            AuthModule,
            PipesModule,
            CorporateschoolModule,
            ReportModule,
            NgxPaginationModule,
            InfiniteScrollModule,
            NgApexchartsModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AssignmentCorrectionModule, [{
        type: NgModule,
        args: [{
                declarations: [ListCorrectionComponent, CorrectionPageComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    ReactiveFormsModule,
                    FormsModule,
                    AssignmentCorrectionRoutingModule,
                    NgSelectModule,
                    PdfViewerModule,
                    SharedModule,
                    AuthModule,
                    PipesModule,
                    CorporateschoolModule,
                    ReportModule,
                    NgxPaginationModule,
                    InfiniteScrollModule,
                    NgApexchartsModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AssignmentCorrectionModule, { declarations: [ListCorrectionComponent, CorrectionPageComponent], imports: [CommonModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        AssignmentCorrectionRoutingModule,
        NgSelectModule,
        PdfViewerModule,
        SharedModule,
        AuthModule,
        PipesModule,
        CorporateschoolModule,
        ReportModule,
        NgxPaginationModule,
        InfiniteScrollModule,
        NgApexchartsModule] }); })();
//# sourceMappingURL=correction.module.js.map