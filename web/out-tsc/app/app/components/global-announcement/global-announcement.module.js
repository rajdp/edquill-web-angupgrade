import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalAnnouncementRoutingModule } from './global-announcement-routing.module';
import { GlobalAnnouncementListComponent } from './global-announcement/global-announcement-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from "../auth/auth.module";
import { CorporateschoolModule } from "../corporateschool/corporateschool.module";
import { GlobalAnnouncementAddComponent } from './global-announcement-add/global-announcement-add.component';
import { AngularMyDatePickerModule } from "@nodro7/angular-mydatepicker";
import * as i0 from "@angular/core";
export class GlobalAnnouncementModule {
    static { this.ɵfac = function GlobalAnnouncementModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GlobalAnnouncementModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GlobalAnnouncementModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule,
            GlobalAnnouncementRoutingModule,
            AuthModule,
            CorporateschoolModule,
            AngularMyDatePickerModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalAnnouncementModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    GlobalAnnouncementListComponent,
                    GlobalAnnouncementAddComponent
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    GlobalAnnouncementRoutingModule,
                    AuthModule,
                    CorporateschoolModule,
                    AngularMyDatePickerModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GlobalAnnouncementModule, { declarations: [GlobalAnnouncementListComponent,
        GlobalAnnouncementAddComponent], imports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        GlobalAnnouncementRoutingModule,
        AuthModule,
        CorporateschoolModule,
        AngularMyDatePickerModule] }); })();
//# sourceMappingURL=global-announcement.module.js.map