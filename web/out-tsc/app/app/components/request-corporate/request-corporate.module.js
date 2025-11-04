import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestCorporateRoutingModule } from './request-corporate-routing.module';
import { RequestComponent } from './request/request.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import { DownloadApprovalComponent } from './download-approval/download-approval.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import * as i0 from "@angular/core";
export class RequestCorporateModule {
    static { this.ɵfac = function RequestCorporateModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RequestCorporateModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RequestCorporateModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            RequestCorporateRoutingModule,
            NgxDatatableModule,
            FormsModule,
            NgbModule,
            DropzoneModule,
            NgSelectModule,
            AngularMyDatePickerModule,
            CorporateschoolModule,
            ReactiveFormsModule,
            InfiniteScrollModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RequestCorporateModule, [{
        type: NgModule,
        args: [{
                declarations: [RequestComponent, DownloadApprovalComponent],
                imports: [
                    CommonModule,
                    RequestCorporateRoutingModule,
                    NgxDatatableModule,
                    FormsModule,
                    NgbModule,
                    DropzoneModule,
                    NgSelectModule,
                    AngularMyDatePickerModule,
                    CorporateschoolModule,
                    ReactiveFormsModule,
                    InfiniteScrollModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RequestCorporateModule, { declarations: [RequestComponent, DownloadApprovalComponent], imports: [CommonModule,
        RequestCorporateRoutingModule,
        NgxDatatableModule,
        FormsModule,
        NgbModule,
        DropzoneModule,
        NgSelectModule,
        AngularMyDatePickerModule,
        CorporateschoolModule,
        ReactiveFormsModule,
        InfiniteScrollModule] }); })();
//# sourceMappingURL=request-corporate.module.js.map