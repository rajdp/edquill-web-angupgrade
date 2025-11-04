import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { AuthModule } from '../auth/auth.module';
import * as i0 from "@angular/core";
export class AnnouncementModule {
    static { this.ɵfac = function AnnouncementModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AnnouncementModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AnnouncementModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            AnnouncementRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            NgSelectModule,
            PipesModule,
            AuthModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnnouncementModule, [{
        type: NgModule,
        args: [{
                declarations: [AnnouncementListComponent],
                imports: [
                    CommonModule,
                    AnnouncementRoutingModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NgSelectModule,
                    PipesModule,
                    AuthModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AnnouncementModule, { declarations: [AnnouncementListComponent], imports: [CommonModule,
        AnnouncementRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        PipesModule,
        AuthModule] }); })();
//# sourceMappingURL=announcement.module.js.map