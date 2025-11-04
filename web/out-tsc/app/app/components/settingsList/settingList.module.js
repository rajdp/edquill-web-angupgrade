import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { SettingListRoutingModule } from './settingList-routing.module';
import { ListSettingsComponent } from './list-settings/list-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TagInputModule } from 'ngx-chips';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { AuthModule } from '../auth/auth.module';
import * as i0 from "@angular/core";
export class SettingListModule {
    static { this.ɵfac = function SettingListModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SettingListModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SettingListModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TitleCasePipe], imports: [CommonModule,
            NgbModule,
            ReactiveFormsModule,
            SettingListRoutingModule,
            DropzoneModule,
            NgSelectModule,
            FormsModule,
            PdfViewerModule,
            TagInputModule,
            CorporateschoolModule,
            AngularMyDatePickerModule,
            Angular2SmartTableModule,
            AuthModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingListModule, [{
        type: NgModule,
        args: [{
                declarations: [ListSettingsComponent
                ],
                imports: [
                    CommonModule,
                    NgbModule,
                    ReactiveFormsModule,
                    SettingListRoutingModule,
                    DropzoneModule,
                    NgSelectModule,
                    FormsModule,
                    PdfViewerModule,
                    TagInputModule,
                    CorporateschoolModule,
                    AngularMyDatePickerModule,
                    Angular2SmartTableModule,
                    AuthModule
                ],
                providers: [TitleCasePipe],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SettingListModule, { declarations: [ListSettingsComponent], imports: [CommonModule,
        NgbModule,
        ReactiveFormsModule,
        SettingListRoutingModule,
        DropzoneModule,
        NgSelectModule,
        FormsModule,
        PdfViewerModule,
        TagInputModule,
        CorporateschoolModule,
        AngularMyDatePickerModule,
        Angular2SmartTableModule,
        AuthModule] }); })();
//# sourceMappingURL=settingList.module.js.map