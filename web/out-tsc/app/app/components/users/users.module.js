import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { UsersRoutingModule } from './users-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { StudentModule } from '../student/student.module';
import { TeacherModule } from '../Teacher/Teacher.module';
import { ContentModule } from '../Content-Creator/Content.module';
import { AdminModule } from '../admin/admin.module';
import * as i0 from "@angular/core";
export class UsersModule {
    static { this.ɵfac = function UsersModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UsersModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: UsersModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            NgbModule,
            StudentModule,
            TeacherModule,
            ContentModule,
            Angular2SmartTableModule,
            ReactiveFormsModule,
            UsersRoutingModule,
            FormsModule,
            AdminModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UsersModule, [{
        type: NgModule,
        args: [{
                declarations: [ListUserComponent, CreateUserComponent, ChangePasswordComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    StudentModule,
                    TeacherModule,
                    ContentModule,
                    Angular2SmartTableModule,
                    ReactiveFormsModule,
                    UsersRoutingModule,
                    FormsModule,
                    AdminModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UsersModule, { declarations: [ListUserComponent, CreateUserComponent, ChangePasswordComponent], imports: [CommonModule,
        NgbModule,
        StudentModule,
        TeacherModule,
        ContentModule,
        Angular2SmartTableModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        FormsModule,
        AdminModule] }); })();
//# sourceMappingURL=users.module.js.map