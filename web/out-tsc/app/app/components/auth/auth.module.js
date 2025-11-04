import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../shared/shared.module';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { SelectionComponent } from './selection/selection.component';
import { StudentAnnotationComponent } from './student-annotation/student-annotation.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TagInputModule } from 'ngx-chips';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonDataService } from '../../shared/service/common-data.service';
import { SubjectServices } from '../../shared/service/subject.services';
import { CommonService } from '../../shared/service/common.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { HandwrittingComponent } from './handwritting/handwritting.component';
import { RegistrationComponent } from './registration/registration.component';
import { GraphComponentComponent } from './graph-component/graph-component.component';
import { TinyMiceComponent } from './tiny-mice/tiny-mice.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { TeacherRegistrationComponent } from './teacher-registration/teacher-registration.component';
import { CreatorRegistrationComponent } from './creator-registration/creator-registration.component';
import { StudentGraphComponent } from './student-graph/student-graph.component';
import { RemoveStudentAnnotationComponent } from './remove-student-annotation/remove-student-annotation.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { AnnotationComponent } from './annotation/annotation.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ParentRegistrationComponent } from './parent-registration/parent-registration.component';
import { IpadQuestionViewComponent } from './ipad-question-view/ipad-question-view.component';
import { ConfirmContentAssignComponent } from './confirm-content-assign/confirm-content-assign.component';
import { TreeviewContentfolderComponent } from './treeview-contentfolder/treeview-contentfolder.component';
import { TreeviewModule } from '@soy-andrey-semyonov/ngx-treeview';
import { StudentScratchComponent } from './student-scratch/student-scratch.component';
import { SourceLinkComponent } from './source-link/source-link.component';
import { StudentWebAnnotationComponent } from './student-web-annotation/student-web-annotation.component';
import { TableComponent } from './table/table.component';
import { OtherLinkComponent } from './other-link/other-link.component';
import { InboxChatComponent } from './inbox-chat/inbox-chat.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { TutorconnectComponent } from './tutorconnect/tutorconnect.component';
import * as i0 from "@angular/core";
const customDefaultOptions = {
    scrollThrottlingTime: 0,
    scrollDebounceTime: 0,
    scrollAnimationTime: 750,
    checkResizeInterval: 1000,
    resizeBypassRefreshThreshold: 5,
    modifyOverflowStyleOfParentScroll: true,
    stripedTable: false
};
export class AuthModule {
    static { this.ɵfac = function AuthModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AuthModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [CommonDataService, SubjectServices, CommonService, DatePipe,
            { provide: 'virtual-scroller-default-options', useValue: customDefaultOptions },
            { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
        ], imports: [CommonModule,
            AuthRoutingModule,
            ReactiveFormsModule,
            NgbModule,
            PdfViewerModule,
            CarouselModule,
            SharedModule,
            TagInputModule,
            NgbTimepickerModule,
            AngularMyDatePickerModule,
            InfiniteScrollModule,
            DragDropModule,
            NgSelectModule,
            FormsModule,
            EditorModule,
            PipesModule,
            ColorPickerModule,
            TreeviewModule,
            NgMultiSelectDropDownModule,
            MatChipsModule,
            MatFormFieldModule,
            MatIconModule,
            LoginComponent,
            ForgotComponent,
            ConfirmPasswordComponent,
            SelectionComponent,
            TutorconnectComponent,
            TinyMiceComponent,
            TableComponent,
            OtherLinkComponent,
            SourceLinkComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthModule, [{
        type: NgModule,
        args: [{
                declarations: [ConfirmContentAssignComponent,
                    StudentAnnotationComponent, HandwrittingComponent, RegistrationComponent, AnnotationComponent, StudentScratchComponent,
                    GraphComponentComponent, TeacherRegistrationComponent, CreatorRegistrationComponent,
                    StudentGraphComponent, RemoveStudentAnnotationComponent, ParentRegistrationComponent, IpadQuestionViewComponent,
                    ConfirmContentAssignComponent, TreeviewContentfolderComponent, StudentWebAnnotationComponent, InboxChatComponent],
                imports: [
                    CommonModule,
                    AuthRoutingModule,
                    ReactiveFormsModule,
                    NgbModule,
                    PdfViewerModule,
                    CarouselModule,
                    SharedModule,
                    TagInputModule,
                    NgbTimepickerModule,
                    AngularMyDatePickerModule,
                    InfiniteScrollModule,
                    DragDropModule,
                    NgSelectModule,
                    FormsModule,
                    EditorModule,
                    PipesModule,
                    ColorPickerModule,
                    TreeviewModule,
                    NgMultiSelectDropDownModule,
                    MatChipsModule,
                    MatFormFieldModule,
                    MatIconModule,
                    LoginComponent,
                    ForgotComponent,
                    ConfirmPasswordComponent,
                    SelectionComponent,
                    TutorconnectComponent,
                    TinyMiceComponent,
                    TableComponent,
                    OtherLinkComponent,
                    SourceLinkComponent
                ],
                providers: [CommonDataService, SubjectServices, CommonService, DatePipe,
                    { provide: 'virtual-scroller-default-options', useValue: customDefaultOptions },
                    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
                ],
                exports: [
                    GraphComponentComponent,
                    TinyMiceComponent,
                    AnnotationComponent,
                    ConfirmContentAssignComponent,
                    TreeviewContentfolderComponent,
                    StudentWebAnnotationComponent,
                    StudentAnnotationComponent,
                    TableComponent,
                    OtherLinkComponent,
                    SourceLinkComponent,
                    InboxChatComponent,
                    TutorconnectComponent
                ],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA,
                    NO_ERRORS_SCHEMA
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AuthModule, { declarations: [ConfirmContentAssignComponent,
        StudentAnnotationComponent, HandwrittingComponent, RegistrationComponent, AnnotationComponent, StudentScratchComponent,
        GraphComponentComponent, TeacherRegistrationComponent, CreatorRegistrationComponent,
        StudentGraphComponent, RemoveStudentAnnotationComponent, ParentRegistrationComponent, IpadQuestionViewComponent,
        ConfirmContentAssignComponent, TreeviewContentfolderComponent, StudentWebAnnotationComponent, InboxChatComponent], imports: [CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        NgbModule,
        PdfViewerModule,
        CarouselModule,
        SharedModule,
        TagInputModule,
        NgbTimepickerModule,
        AngularMyDatePickerModule,
        InfiniteScrollModule,
        DragDropModule,
        NgSelectModule,
        FormsModule,
        EditorModule,
        PipesModule,
        ColorPickerModule,
        TreeviewModule,
        NgMultiSelectDropDownModule,
        MatChipsModule,
        MatFormFieldModule,
        MatIconModule,
        LoginComponent,
        ForgotComponent,
        ConfirmPasswordComponent,
        SelectionComponent,
        TutorconnectComponent,
        TinyMiceComponent,
        TableComponent,
        OtherLinkComponent,
        SourceLinkComponent], exports: [GraphComponentComponent,
        TinyMiceComponent,
        AnnotationComponent,
        ConfirmContentAssignComponent,
        TreeviewContentfolderComponent,
        StudentWebAnnotationComponent,
        StudentAnnotationComponent,
        TableComponent,
        OtherLinkComponent,
        SourceLinkComponent,
        InboxChatComponent,
        TutorconnectComponent] }); })();
//# sourceMappingURL=auth.module.js.map