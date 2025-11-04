import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { SchedulesRoutingModule } from './schedule-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { TagInputModule } from 'ngx-chips';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';
import { StudentloginModule } from '../studentlogin/studentlogin.module';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { ReportModule } from '../report/report.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { CustomMaterialModule } from 'src/app/material.module';
import { AuthModule } from '../auth/auth.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import * as i0 from "@angular/core";
import * as i1 from "angular-calendar";
export class ScheduleModule {
    static { this.ɵfac = function ScheduleModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScheduleModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ScheduleModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TitleCasePipe], imports: [CommonModule,
            NgbModule,
            ReactiveFormsModule,
            SchedulesRoutingModule,
            DropzoneModule,
            NgSelectModule,
            FormsModule,
            AngularMyDatePickerModule,
            TagInputModule,
            CalendarModule.forRoot({
                provide: DateAdapter,
                useFactory: adapterFactory,
            }),
            CorporateschoolModule,
            CustomMaterialModule,
            StudentloginModule,
            ReportModule,
            PipesModule,
            AuthModule,
            NgMultiSelectDropDownModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScheduleModule, [{
        type: NgModule,
        args: [{
                declarations: [MyScheduleComponent, DailyScheduleComponent, SchedulePageComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    ReactiveFormsModule,
                    SchedulesRoutingModule,
                    DropzoneModule,
                    NgSelectModule,
                    FormsModule,
                    AngularMyDatePickerModule,
                    TagInputModule,
                    CalendarModule.forRoot({
                        provide: DateAdapter,
                        useFactory: adapterFactory,
                    }),
                    CorporateschoolModule,
                    CustomMaterialModule,
                    StudentloginModule,
                    ReportModule,
                    PipesModule,
                    AuthModule,
                    NgMultiSelectDropDownModule
                ],
                providers: [TitleCasePipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ScheduleModule, { declarations: [MyScheduleComponent, DailyScheduleComponent, SchedulePageComponent], imports: [CommonModule,
        NgbModule,
        ReactiveFormsModule,
        SchedulesRoutingModule,
        DropzoneModule,
        NgSelectModule,
        FormsModule,
        AngularMyDatePickerModule,
        TagInputModule, i1.CalendarModule, CorporateschoolModule,
        CustomMaterialModule,
        StudentloginModule,
        ReportModule,
        PipesModule,
        AuthModule,
        NgMultiSelectDropDownModule] }); })();
//# sourceMappingURL=schedule.module.js.map