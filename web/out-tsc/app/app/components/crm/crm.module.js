import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CrmRoutingModule } from './crm-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CrmShellComponent } from './crm-shell/crm-shell.component';
import { CrmGuardiansComponent } from './guardians/guardians.component';
import { CrmFeesComponent } from './fees/fees.component';
import { CrmNotificationsComponent } from './notifications/notifications.component';
import { CrmReportCardsComponent } from './report-cards/report-cards.component';
import * as i0 from "@angular/core";
export class CrmModule {
    static { this.ɵfac = function CrmModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CrmModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CrmModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            NgSelectModule,
            SharedModule,
            CrmRoutingModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrmModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    CrmShellComponent,
                    CrmGuardiansComponent,
                    CrmFeesComponent,
                    CrmNotificationsComponent,
                    CrmReportCardsComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NgbModule,
                    NgSelectModule,
                    SharedModule,
                    CrmRoutingModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CrmModule, { declarations: [CrmShellComponent,
        CrmGuardiansComponent,
        CrmFeesComponent,
        CrmNotificationsComponent,
        CrmReportCardsComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgSelectModule,
        SharedModule,
        CrmRoutingModule] }); })();
//# sourceMappingURL=crm.module.js.map