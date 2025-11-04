import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { StudentRoutingModule } from './student-routing.module';
import { ListTemplateComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TagInputModule } from 'ngx-chips';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { SharedModule } from '../../shared/shared.module';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import { ReportModule } from '../report/report.module';
import { StudentloginModule } from '../studentlogin/studentlogin.module';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { AuthModule } from '../auth/auth.module';
import { FormControlsModule } from '../../shared/modules/form-controls.module';
import * as i0 from "@angular/core";
export class StudentModule {
    static { this.ɵfac = function StudentModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StudentModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [DatePipe], imports: [CommonModule,
            NgbModule,
            Angular2SmartTableModule,
            ReactiveFormsModule,
            StudentRoutingModule,
            NgSelectModule,
            AngularMyDatePickerModule,
            FormsModule,
            SharedModule,
            TagInputModule,
            CorporateschoolModule,
            ReportModule,
            StudentloginModule,
            PipesModule,
            AuthModule,
            FormControlsModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentModule, [{
        type: NgModule,
        args: [{
                declarations: [ListTemplateComponent, AddStudentComponent, UpgradeComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    Angular2SmartTableModule,
                    ReactiveFormsModule,
                    StudentRoutingModule,
                    NgSelectModule,
                    AngularMyDatePickerModule,
                    FormsModule,
                    SharedModule,
                    TagInputModule,
                    CorporateschoolModule,
                    ReportModule,
                    StudentloginModule,
                    PipesModule,
                    AuthModule,
                    FormControlsModule
                ],
                providers: [DatePipe],
                exports: [
                    ListTemplateComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StudentModule, { declarations: [ListTemplateComponent, AddStudentComponent, UpgradeComponent], imports: [CommonModule,
        NgbModule,
        Angular2SmartTableModule,
        ReactiveFormsModule,
        StudentRoutingModule,
        NgSelectModule,
        AngularMyDatePickerModule,
        FormsModule,
        SharedModule,
        TagInputModule,
        CorporateschoolModule,
        ReportModule,
        StudentloginModule,
        PipesModule,
        AuthModule,
        FormControlsModule], exports: [ListTemplateComponent] }); })();
//# sourceMappingURL=student.module.js.map