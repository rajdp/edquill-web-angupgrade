import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { ContentTextResourceRoutingModule } from './content-text-resource-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { TagInputModule } from 'ngx-chips';
import { SharedModule } from '../../shared/shared.module';
import { TextResourceComponent } from './text-resource/text-resource.component';
import { TextAssignmentComponent } from './text-assignment/text-assignment.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { AuthModule } from '../auth/auth.module';
import { HandwritingModule } from '../handwriting/handwriting.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { TreeviewModule } from '@soy-andrey-semyonov/ngx-treeview';
import { PassageComponent } from './passage/passage.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
export class ContentTextResourceModule {
    static { this.ɵfac = function ContentTextResourceModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentTextResourceModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ContentTextResourceModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TitleCasePipe], imports: [CommonModule,
            NgbModule,
            Angular2SmartTableModule,
            ReactiveFormsModule,
            ContentTextResourceRoutingModule,
            NgSelectModule,
            AngularMyDatePickerModule,
            FormsModule,
            TagInputModule,
            SharedModule,
            DragDropModule,
            AuthModule,
            HandwritingModule,
            PipesModule,
            TreeviewModule,
            NgxDatatableModule,
            MatChipsModule,
            MatFormFieldModule,
            MatIconModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentTextResourceModule, [{
        type: NgModule,
        args: [{
                declarations: [TextResourceComponent, TextAssignmentComponent, AddQuestionsComponent, QuestionPageComponent, PassageComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    Angular2SmartTableModule,
                    ReactiveFormsModule,
                    ContentTextResourceRoutingModule,
                    NgSelectModule,
                    AngularMyDatePickerModule,
                    FormsModule,
                    TagInputModule,
                    SharedModule,
                    DragDropModule,
                    AuthModule,
                    HandwritingModule,
                    PipesModule,
                    TreeviewModule,
                    NgxDatatableModule,
                    MatChipsModule,
                    MatFormFieldModule,
                    MatIconModule
                ],
                providers: [TitleCasePipe],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA,
                    NO_ERRORS_SCHEMA
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ContentTextResourceModule, { declarations: [TextResourceComponent, TextAssignmentComponent, AddQuestionsComponent, QuestionPageComponent, PassageComponent], imports: [CommonModule,
        NgbModule,
        Angular2SmartTableModule,
        ReactiveFormsModule,
        ContentTextResourceRoutingModule,
        NgSelectModule,
        AngularMyDatePickerModule,
        FormsModule,
        TagInputModule,
        SharedModule,
        DragDropModule,
        AuthModule,
        HandwritingModule,
        PipesModule,
        TreeviewModule,
        NgxDatatableModule,
        MatChipsModule,
        MatFormFieldModule,
        MatIconModule] }); })();
//# sourceMappingURL=content-text-resource.module.js.map