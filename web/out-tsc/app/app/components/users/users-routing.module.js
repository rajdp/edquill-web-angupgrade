import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: 'user-list',
        component: ListUserComponent,
        data: {
            title: 'Users',
            breadcrumb: 'Users'
        }
    }, {
        path: 'change-password',
        component: ChangePasswordComponent,
        data: {
            title: 'Change Password',
            breadcrumb: 'Change Password'
        }
    }
];
export class UsersRoutingModule {
    static { this.ɵfac = function UsersRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UsersRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: UsersRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UsersRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UsersRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=users-routing.module.js.map