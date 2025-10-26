import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StudentRoutingModule } from './student-routing.module';
import {ListTemplateComponent} from './list-student/list-student.component';
import {AddStudentComponent} from './add-student/add-student.component';
import {ViewComponent} from './list-student/list-student.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {TagInputModule} from 'ngx-chips';
import {AngularMyDatePickerModule} from 'angular-mydatepicker';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [ListTemplateComponent, AddStudentComponent, ViewComponent],
    imports: [
        CommonModule,
        NgbModule,
        Ng2SmartTableModule,
        ReactiveFormsModule,
        StudentRoutingModule,
        NgSelectModule,
        TagInputModule,
        FormsModule,
        AngularMyDatePickerModule,
        SharedModule
    ]
})
export class StudentModule { }
