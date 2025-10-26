import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule, TitleCasePipe} from '@angular/common';
import {Angular2SmartTableModule} from 'angular2-smart-table';
import { ContentTextResourceRoutingModule } from './content-text-resource-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {AngularMyDatePickerModule} from '@nodro7/angular-mydatepicker';
import {TagInputModule} from 'ngx-chips';
import {SharedModule} from '../../shared/shared.module';
import {TextResourceComponent} from './text-resource/text-resource.component';
import {TextAssignmentComponent} from './text-assignment/text-assignment.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import {AuthModule} from '../auth/auth.module';
import {HandwritingModule} from '../handwriting/handwriting.module';
import {PipesModule} from '../../shared/pipes/pipes.module';
import { TreeviewModule} from '@soy-andrey-semyonov/ngx-treeview';
import { PassageComponent } from './passage/passage.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
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
})
export class ContentTextResourceModule { }
