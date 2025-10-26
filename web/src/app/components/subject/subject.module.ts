import { NgModule } from '@angular/core';
import {CommonModule, TitleCasePipe} from '@angular/common';
import { SubjectRoutingModule } from './subject-routing.module';
import {ListSubjectComponent} from './list-subject/list-subject.component';
import {AddSubjectComponent} from './add-subject/add-subject.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {CorporateschoolModule} from '../corporateschool/corporateschool.module';
import {Angular2SmartTableModule} from 'angular2-smart-table';
import {AuthModule} from '../auth/auth.module';


@NgModule({
  declarations: [ListSubjectComponent, AddSubjectComponent],
    imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        SubjectRoutingModule,
        NgSelectModule,
        FormsModule,
        CorporateschoolModule,
        Angular2SmartTableModule,
        AuthModule
    ],
    providers: [TitleCasePipe]
})
export class SubjectModule { }
