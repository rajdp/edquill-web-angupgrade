import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ClassRoutingModule } from './class-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListClassComponent } from './list-class/list-class.component';
import { AddClassComponent } from './add-class/add-class.component';
import { ViewAssignComponent } from './view-assign/view-assign.component';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { TagInputModule } from 'ngx-chips';
import { SubmitClassComponent } from './submit-class/submit-class.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ReportModule } from '../report/report.module';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StudentloginModule } from '../studentlogin/studentlogin.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { AuthModule } from '../auth/auth.module';
import { CustomMaterialModule } from 'src/app/material.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TopicsCurriculumComponent } from './topics-curriculum/topics-curriculum.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseScheduleAddComponent } from './course-schedule-add/course-schedule-add.component';
import * as i0 from "@angular/core";
import * as i1 from "angular-calendar";
import * as i2 from "ng-multiselect-dropdown";
export class ClassModule {
    static { this.ɵfac = function ClassModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ClassModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ClassModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TitleCasePipe], imports: [CommonModule,
            NgbModule,
            ReactiveFormsModule,
            ClassRoutingModule,
            DropzoneModule,
            NgSelectModule,
            FormsModule,
            AngularMyDatePickerModule,
            TagInputModule,
            NgxDatatableModule,
            CalendarModule.forRoot({
                provide: DateAdapter,
                useFactory: adapterFactory,
            }),
            ReportModule,
            CorporateschoolModule,
            InfiniteScrollModule,
            StudentloginModule,
            PdfViewerModule,
            PipesModule,
            AuthModule,
            CustomMaterialModule,
            NgMultiSelectDropDownModule.forRoot(),
            DragDropModule,
            NgbAccordionModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClassModule, [{
        type: NgModule,
        args: [{
                declarations: [ListClassComponent, AddClassComponent, SubmitClassComponent, ViewAssignComponent, TopicsCurriculumComponent, CourseScheduleAddComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    ReactiveFormsModule,
                    ClassRoutingModule,
                    DropzoneModule,
                    NgSelectModule,
                    FormsModule,
                    AngularMyDatePickerModule,
                    TagInputModule,
                    NgxDatatableModule,
                    CalendarModule.forRoot({
                        provide: DateAdapter,
                        useFactory: adapterFactory,
                    }),
                    ReportModule,
                    CorporateschoolModule,
                    InfiniteScrollModule,
                    StudentloginModule,
                    PdfViewerModule,
                    PipesModule,
                    AuthModule,
                    CustomMaterialModule,
                    NgMultiSelectDropDownModule.forRoot(),
                    DragDropModule,
                    NgbAccordionModule
                ],
                providers: [TitleCasePipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ClassModule, { declarations: [ListClassComponent, AddClassComponent, SubmitClassComponent, ViewAssignComponent, TopicsCurriculumComponent, CourseScheduleAddComponent], imports: [CommonModule,
        NgbModule,
        ReactiveFormsModule,
        ClassRoutingModule,
        DropzoneModule,
        NgSelectModule,
        FormsModule,
        AngularMyDatePickerModule,
        TagInputModule,
        NgxDatatableModule, i1.CalendarModule, ReportModule,
        CorporateschoolModule,
        InfiniteScrollModule,
        StudentloginModule,
        PdfViewerModule,
        PipesModule,
        AuthModule,
        CustomMaterialModule, i2.NgMultiSelectDropDownModule, DragDropModule,
        NgbAccordionModule] }); })();
//# sourceMappingURL=class.module.js.map