import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailboxComponent } from './mailbox/mailbox.component';
import { MailboxRoutingModule } from './mailbox-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { AuthModule } from "../auth/auth.module";
import { NgSelectModule } from "@ng-select/ng-select";
import * as i0 from "@angular/core";
export class MailboxModule {
    static { this.ɵfac = function MailboxModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MailboxModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MailboxModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            MailboxRoutingModule,
            ReactiveFormsModule,
            AuthModule,
            NgSelectModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MailboxModule, [{
        type: NgModule,
        args: [{
                declarations: [MailboxComponent],
                imports: [
                    CommonModule,
                    MailboxRoutingModule,
                    ReactiveFormsModule,
                    AuthModule,
                    NgSelectModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MailboxModule, { declarations: [MailboxComponent], imports: [CommonModule,
        MailboxRoutingModule,
        ReactiveFormsModule,
        AuthModule,
        NgSelectModule] }); })();
//# sourceMappingURL=mailbox.module.js.map