import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolRoutingModule } from './School-routing.module';
import {ListSchoolComponent} from './list-School/list-School.component';
import {AddSchoolComponent} from './add-School/add-School.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../shared/shared.module';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [ListSchoolComponent, AddSchoolComponent],
    imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        SchoolRoutingModule,
        FormsModule,
        SharedModule,
        NgSelectModule
    ]
})
export class SchoolModule { }
