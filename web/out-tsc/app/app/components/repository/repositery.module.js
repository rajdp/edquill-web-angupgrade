import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ContentsRoutingModule } from './repository-routing.module';
import { ContentHomeComponent } from './content-home/content-home.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddResourcesComponent } from './add-resources/add-resources.component';
import { NgbProgressbarModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AddAssessmentComponent } from './add-assessment/add-assessment.component';
import { CreateAssessmentComponent } from './create-assessment/create-assessment.component';
import { AuthGuardService } from '../../shared/service/authgaurd';
import { CommonDataService } from '../../shared/service/common-data.service';
import { SubjectServices } from '../../shared/service/subject.services';
import { CommonService } from '../../shared/service/common.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PreviewComponent } from './preview/preview.component';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import { PreviewResolver } from './preview/preview.resolver';
import { TreeviewModule } from '@soy-andrey-semyonov/ngx-treeview';
import { AuthModule } from '../auth/auth.module';
import { CustomMaterialModule } from '../../material.module';
import { CreateTestComponent } from './create-test/create-test.component';
import * as i0 from "@angular/core";
import * as i1 from "@soy-andrey-semyonov/ngx-treeview";
import * as i2 from "@angular/common";
import * as i3 from "@ng-select/ng-select";
import * as i4 from "@angular/forms";
import * as i5 from "ngx-chips";
import * as i6 from "ng2-pdf-viewer";
import * as i7 from "../auth/confirm-content-assign/confirm-content-assign.component";
import * as i8 from "../auth/treeview-contentfolder/treeview-contentfolder.component";
import * as i9 from "../auth/other-link/other-link.component";
import * as i10 from "../auth/source-link/source-link.component";
export class ContentModule {
    static { this.ɵfac = function ContentModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ContentModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [AuthGuardService, CommonDataService, SubjectServices, CommonService, DatePipe, PreviewResolver], imports: [CommonModule,
            ContentsRoutingModule,
            NgSelectModule,
            FormsModule,
            TagInputModule,
            ReactiveFormsModule,
            DragDropModule,
            ReactiveFormsModule,
            PdfViewerModule,
            NgbTimepickerModule,
            AngularMyDatePickerModule,
            InfiniteScrollModule,
            SharedModule,
            PipesModule,
            NgxPaginationModule,
            CorporateschoolModule,
            NgbProgressbarModule,
            TreeviewModule.forRoot(),
            AuthModule,
            CustomMaterialModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentModule, [{
        type: NgModule,
        args: [{
                declarations: [ContentHomeComponent, AddResourcesComponent,
                    AddAssignmentComponent, AddAssessmentComponent, CreateAssessmentComponent, PreviewComponent, CreateTestComponent],
                imports: [
                    CommonModule,
                    ContentsRoutingModule,
                    NgSelectModule,
                    FormsModule,
                    TagInputModule,
                    ReactiveFormsModule,
                    DragDropModule,
                    ReactiveFormsModule,
                    PdfViewerModule,
                    NgbTimepickerModule,
                    AngularMyDatePickerModule,
                    InfiniteScrollModule,
                    SharedModule,
                    PipesModule,
                    NgxPaginationModule,
                    CorporateschoolModule,
                    NgbProgressbarModule,
                    TreeviewModule.forRoot(),
                    AuthModule,
                    CustomMaterialModule
                ],
                providers: [AuthGuardService, CommonDataService, SubjectServices, CommonService, DatePipe, PreviewResolver],
                exports: [
                    PreviewComponent
                ],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA,
                    NO_ERRORS_SCHEMA
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ContentModule, { declarations: [ContentHomeComponent, AddResourcesComponent,
        AddAssignmentComponent, AddAssessmentComponent, CreateAssessmentComponent, PreviewComponent, CreateTestComponent], imports: [CommonModule,
        ContentsRoutingModule,
        NgSelectModule,
        FormsModule,
        TagInputModule,
        ReactiveFormsModule,
        DragDropModule,
        ReactiveFormsModule,
        PdfViewerModule,
        NgbTimepickerModule,
        AngularMyDatePickerModule,
        InfiniteScrollModule,
        SharedModule,
        PipesModule,
        NgxPaginationModule,
        CorporateschoolModule,
        NgbProgressbarModule, i1.TreeviewModule, AuthModule,
        CustomMaterialModule], exports: [PreviewComponent] }); })();
i0.ɵɵsetComponentScope(AddResourcesComponent, function () { return [i2.NgForOf, i2.NgIf, i3.NgSelectComponent, i4.ɵNgNoValidate, i4.NgSelectOption, i4.ɵNgSelectMultipleOption, i4.DefaultValueAccessor, i4.CheckboxControlValueAccessor, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.NgModel, i5.TagInputComponent, i4.FormGroupDirective, i4.FormControlName, i4.FormGroupName, i4.FormArrayName, i6.PdfViewerComponent, i7.ConfirmContentAssignComponent, i8.TreeviewContentfolderComponent, i9.OtherLinkComponent, i10.SourceLinkComponent]; }, []);
//# sourceMappingURL=repositery.module.js.map