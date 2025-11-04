import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { TeacherRoutingModule } from './Teacher-routing.module';
import { ListTeacherComponent } from './list-Teacher/list-Teacher.component';
import { AddTeacherComponent } from './add-Teacher/add-Teacher.component';
import { TeacherAvailabilityComponent } from './availability/teacher-availability.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { SharedModule } from '../../shared/shared.module';
import { TagInputModule } from 'ngx-chips';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { AuthModule } from '../auth/auth.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import * as i0 from "@angular/core";
export class TeacherModule {
    static { this.ɵfac = function TeacherModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TeacherModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TeacherModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [DatePipe, TitleCasePipe], imports: [CommonModule,
            NgbModule,
            ReactiveFormsModule,
            TeacherRoutingModule,
            NgSelectModule,
            AngularMyDatePickerModule,
            SharedModule,
            TagInputModule,
            FormsModule,
            CorporateschoolModule,
            Angular2SmartTableModule,
            AuthModule,
            NgMultiSelectDropDownModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TeacherModule, [{
        type: NgModule,
        args: [{
                declarations: [ListTeacherComponent, AddTeacherComponent, TeacherAvailabilityComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    ReactiveFormsModule,
                    TeacherRoutingModule,
                    NgSelectModule,
                    AngularMyDatePickerModule,
                    SharedModule,
                    TagInputModule,
                    FormsModule,
                    CorporateschoolModule,
                    Angular2SmartTableModule,
                    AuthModule,
                    NgMultiSelectDropDownModule
                ],
                providers: [DatePipe, TitleCasePipe],
                exports: [
                    ListTeacherComponent,
                    TeacherAvailabilityComponent
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TeacherModule, { declarations: [ListTeacherComponent, AddTeacherComponent, TeacherAvailabilityComponent], imports: [CommonModule,
        NgbModule,
        ReactiveFormsModule,
        TeacherRoutingModule,
        NgSelectModule,
        AngularMyDatePickerModule,
        SharedModule,
        TagInputModule,
        FormsModule,
        CorporateschoolModule,
        Angular2SmartTableModule,
        AuthModule,
        NgMultiSelectDropDownModule], exports: [ListTeacherComponent,
        TeacherAvailabilityComponent] }); })();
//# sourceMappingURL=Teacher.module.js.map