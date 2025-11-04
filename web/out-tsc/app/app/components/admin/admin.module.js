import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { AdminRoutingModule } from './admin-routing.module';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { ViewComponent } from './list-admin/list-admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { TagInputModule } from 'ngx-chips';
import { SharedModule } from '../../shared/shared.module';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import { AuthModule } from '../auth/auth.module';
import * as i0 from "@angular/core";
export class AdminModule {
    static { this.ɵfac = function AdminModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AdminModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TitleCasePipe], imports: [CommonModule,
            NgbModule,
            Angular2SmartTableModule,
            ReactiveFormsModule,
            AdminRoutingModule,
            NgSelectModule,
            AngularMyDatePickerModule,
            TagInputModule,
            FormsModule,
            SharedModule,
            CorporateschoolModule,
            AuthModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminModule, [{
        type: NgModule,
        args: [{
                declarations: [ListAdminComponent, AddAdminComponent, ViewComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    Angular2SmartTableModule,
                    ReactiveFormsModule,
                    AdminRoutingModule,
                    NgSelectModule,
                    AngularMyDatePickerModule,
                    TagInputModule,
                    FormsModule,
                    SharedModule,
                    CorporateschoolModule,
                    AuthModule
                ],
                providers: [TitleCasePipe],
                // entryComponents: [ViewComponent],
                exports: [
                    ListAdminComponent
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AdminModule, { declarations: [ListAdminComponent, AddAdminComponent, ViewComponent], imports: [CommonModule,
        NgbModule,
        Angular2SmartTableModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        NgSelectModule,
        AngularMyDatePickerModule,
        TagInputModule,
        FormsModule,
        SharedModule,
        CorporateschoolModule,
        AuthModule], exports: [ListAdminComponent] }); })();
//# sourceMappingURL=admin.module.js.map