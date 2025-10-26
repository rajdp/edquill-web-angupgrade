import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TeacherRoutingModule } from './Teacher-routing.module';
import {ListTeacherComponent} from './list-Teacher/list-Teacher.component';
import {ViewComponent} from './list-Teacher/list-Teacher.component';
import {AddTeacherComponent} from './add-Teacher/add-Teacher.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {TextMaskModule} from "angular2-text-mask";
import {TagInputModule} from "ngx-chips";
import {AngularMyDatePickerModule} from "angular-mydatepicker";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [ListTeacherComponent, AddTeacherComponent, ViewComponent],
    imports: [
        CommonModule,
        NgbModule,
        Ng2SmartTableModule,
        ReactiveFormsModule,
        TeacherRoutingModule,
        NgSelectModule,
        TextMaskModule,
        TagInputModule,
        FormsModule,
        AngularMyDatePickerModule,
        SharedModule
    ]
})
export class TeacherModule { }
