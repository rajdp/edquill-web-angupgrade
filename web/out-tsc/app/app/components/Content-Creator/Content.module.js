import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ContentRoutingModule } from './Content-routing.module';
import { ListContentComponent } from './list-Content/list-Content.component';
import { AddContentComponent } from './add-Content/add-Content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { TagInputModule } from 'ngx-chips';
import { SharedModule } from '../../shared/shared.module';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { AuthModule } from '../auth/auth.module';
import * as i0 from "@angular/core";
export class ContentModule {
    static { this.ɵfac = function ContentModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ContentModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TitleCasePipe], imports: [CommonModule,
            NgbModule,
            ReactiveFormsModule,
            ContentRoutingModule,
            NgSelectModule,
            AngularMyDatePickerModule,
            FormsModule,
            TagInputModule,
            SharedModule,
            CorporateschoolModule,
            Angular2SmartTableModule,
            AuthModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentModule, [{
        type: NgModule,
        args: [{
                declarations: [ListContentComponent, AddContentComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    ReactiveFormsModule,
                    ContentRoutingModule,
                    NgSelectModule,
                    AngularMyDatePickerModule,
                    FormsModule,
                    TagInputModule,
                    SharedModule,
                    CorporateschoolModule,
                    Angular2SmartTableModule,
                    AuthModule
                ],
                providers: [TitleCasePipe],
                exports: [
                    ListContentComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ContentModule, { declarations: [ListContentComponent, AddContentComponent], imports: [CommonModule,
        NgbModule,
        ReactiveFormsModule,
        ContentRoutingModule,
        NgSelectModule,
        AngularMyDatePickerModule,
        FormsModule,
        TagInputModule,
        SharedModule,
        CorporateschoolModule,
        Angular2SmartTableModule,
        AuthModule], exports: [ListContentComponent] }); })();
//# sourceMappingURL=Content.module.js.map