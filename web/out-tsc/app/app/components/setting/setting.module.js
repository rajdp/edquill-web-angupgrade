import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingRoutingModule } from './setting-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../../shared/shared.module';
import { SettingsListComponent } from './settings-list/settings-list.component';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { ButtonViewComponent } from './settings-list/settings-list.component';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { PipesModule } from '../../shared/pipes/pipes.module';
import * as i0 from "@angular/core";
export class SettingModule {
    static { this.ɵfac = function SettingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SettingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SettingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            NgbModule,
            ReactiveFormsModule,
            SettingRoutingModule,
            SharedModule,
            Angular2SmartTableModule,
            FormsModule,
            AngularMyDatePickerModule,
            NgSelectModule,
            PipesModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingModule, [{
        type: NgModule,
        args: [{
                declarations: [ProfileComponent, SettingsListComponent, ButtonViewComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    ReactiveFormsModule,
                    SettingRoutingModule,
                    SharedModule,
                    Angular2SmartTableModule,
                    FormsModule,
                    AngularMyDatePickerModule,
                    NgSelectModule,
                    PipesModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SettingModule, { declarations: [ProfileComponent, SettingsListComponent, ButtonViewComponent], imports: [CommonModule,
        NgbModule,
        ReactiveFormsModule,
        SettingRoutingModule,
        SharedModule,
        Angular2SmartTableModule,
        FormsModule,
        AngularMyDatePickerModule,
        NgSelectModule,
        PipesModule] }); })();
//# sourceMappingURL=setting.module.js.map