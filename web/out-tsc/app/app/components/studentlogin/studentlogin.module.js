import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { StudentloginRoutingModule } from './studentlogin-routing.module';
import { ListHomeComponent } from './list-home/list-home.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { StudentlistClassComponent } from './studentlist-class/studentlist-class.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AssessmentComponent } from './assessment/assessment.component';
import { SharedModule } from '../../shared/shared.module';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { AssingmentsComponent } from './assingments/assingments.component';
import { ReportsComponent } from './reports/reports.component';
import { AnsweringComponent } from './answering/answering.component';
import { AuthModule } from '../auth/auth.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { StudentPreviewComponent } from './student-preview/student-preview.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AnswerSheetComponent } from './answer-sheet/answer-sheet.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxPaginationModule } from 'ngx-pagination';
import { OveralldetailsComponent } from './overalldetails/overalldetails.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AnsweringResolver } from './answering/answering.resolver';
import { ResourceComponent } from './resource/resource.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryAddComponent } from './repository-add/repository-add.component';
import { TagInputModule } from 'ngx-chips';
import { ContentFolderListComponent } from './content-folder-list/content-folder-list.component';
import { ContentFolderCreateComponent } from './content-folder-create/content-folder-create.component';
import { AssignedContentComponent } from './assigned-content/assigned-content.component';
import { EnrollclassComponent } from './enrollclass/enrollclass.component';
import { CustomMaterialModule } from 'src/app/material.module';
import { StudentOverallProfileDetailsComponent } from './student-overall-profile-details/student-overall-profile-details.component';
import { StudentReportComponent } from './student-report/student-report.component';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { ViewPDFComponent } from './view-pdf/view-pdf.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "@angular/forms";
import * as i4 from "../auth/other-link/other-link.component";
import * as i5 from "../auth/inbox-chat/inbox-chat.component";
import * as i6 from "../../shared/pipes/custom-date-format.pipe";
export class StudentloginModule {
    static { this.ɵfac = function StudentloginModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentloginModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StudentloginModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TitleCasePipe, AnsweringResolver], imports: [CommonModule,
            NgbModule,
            Angular2SmartTableModule,
            ReactiveFormsModule,
            StudentloginRoutingModule,
            NgSelectModule,
            FormsModule,
            AngularMyDatePickerModule,
            SharedModule,
            AuthModule,
            PipesModule,
            PdfViewerModule,
            DragDropModule,
            NgxPaginationModule,
            NgxDatatableModule,
            InfiniteScrollModule,
            TagInputModule,
            CustomMaterialModule,
            NgbAccordionModule,
            NgApexchartsModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentloginModule, [{
        type: NgModule,
        args: [{
                declarations: [ListHomeComponent, AssessmentComponent, StudentProfileComponent, AssingmentsComponent, ReportsComponent, StudentReportComponent,
                    StudentlistClassComponent, AnsweringComponent, ClassDetailComponent, StudentPreviewComponent, AnswerSheetComponent, OveralldetailsComponent,
                    ResourceComponent, RepositoryComponent, RepositoryAddComponent, ContentFolderListComponent, ContentFolderCreateComponent, AssignedContentComponent,
                    EnrollclassComponent, StudentOverallProfileDetailsComponent, ViewPDFComponent, DashboardComponent, Dashboard1Component, Dashboard2Component, Dashboard3Component],
                imports: [
                    CommonModule,
                    NgbModule,
                    Angular2SmartTableModule,
                    ReactiveFormsModule,
                    StudentloginRoutingModule,
                    NgSelectModule,
                    FormsModule,
                    AngularMyDatePickerModule,
                    SharedModule,
                    AuthModule,
                    PipesModule,
                    PdfViewerModule,
                    DragDropModule,
                    NgxPaginationModule,
                    NgxDatatableModule,
                    InfiniteScrollModule,
                    TagInputModule,
                    CustomMaterialModule,
                    NgbAccordionModule,
                    NgApexchartsModule,
                    // NinjaSplitterModule
                ],
                providers: [TitleCasePipe, AnsweringResolver],
                exports: [
                    OveralldetailsComponent,
                    AnswerSheetComponent,
                    StudentReportComponent
                ],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA,
                    NO_ERRORS_SCHEMA
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StudentloginModule, { declarations: [ListHomeComponent, AssessmentComponent, StudentProfileComponent, AssingmentsComponent, ReportsComponent, StudentReportComponent,
        StudentlistClassComponent, AnsweringComponent, ClassDetailComponent, StudentPreviewComponent, AnswerSheetComponent, OveralldetailsComponent,
        ResourceComponent, RepositoryComponent, RepositoryAddComponent, ContentFolderListComponent, ContentFolderCreateComponent, AssignedContentComponent,
        EnrollclassComponent, StudentOverallProfileDetailsComponent, ViewPDFComponent, DashboardComponent, Dashboard1Component, Dashboard2Component, Dashboard3Component], imports: [CommonModule,
        NgbModule,
        Angular2SmartTableModule,
        ReactiveFormsModule,
        StudentloginRoutingModule,
        NgSelectModule,
        FormsModule,
        AngularMyDatePickerModule,
        SharedModule,
        AuthModule,
        PipesModule,
        PdfViewerModule,
        DragDropModule,
        NgxPaginationModule,
        NgxDatatableModule,
        InfiniteScrollModule,
        TagInputModule,
        CustomMaterialModule,
        NgbAccordionModule,
        NgApexchartsModule], exports: [OveralldetailsComponent,
        AnswerSheetComponent,
        StudentReportComponent] }); })();
i0.ɵɵsetComponentScope(ClassDetailComponent, [i1.NgClass, i1.NgForOf, i1.NgIf, i2.NgbAccordionDirective, i2.NgbAccordionItem, i2.NgbAccordionHeader, i2.NgbAccordionToggle, i2.NgbAccordionBody, i2.NgbAccordionCollapse, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.OtherLinkComponent, i5.InboxChatComponent], [i1.TitleCasePipe, i1.DatePipe, i6.CustomDateFormatPipe]);
//# sourceMappingURL=studentlogin.module.js.map