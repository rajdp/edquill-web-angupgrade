import { NgModule } from '@angular/core';
import {CommonModule, DatePipe, TitleCasePipe} from '@angular/common';
import { TeacherRoutingModule } from './Teacher-routing.module';
import {ListTeacherComponent} from './list-Teacher/list-Teacher.component';
import {AddTeacherComponent} from './add-Teacher/add-Teacher.component';
import {TeacherAvailabilityComponent} from './availability/teacher-availability.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AngularMyDatePickerModule} from '@nodro7/angular-mydatepicker';
import {SharedModule} from '../../shared/shared.module';
import {TagInputModule} from 'ngx-chips';
import {CorporateschoolModule} from '../corporateschool/corporateschool.module';
import { Angular2SmartTableModule} from 'angular2-smart-table';
import {AuthModule} from '../auth/auth.module';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';

@NgModule({
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
})
export class TeacherModule { }
