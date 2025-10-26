import { NgModule } from '@angular/core';
import {CommonModule, TitleCasePipe} from '@angular/common';
import {ListGradeComponent} from './list-grade/list-grade.component';
import {AddGradeComponent} from './add-grade/add-grade.component';
import { GradeRoutingModule } from './grade-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DropzoneModule} from 'ngx-dropzone-wrapper';
import {NgSelectModule} from '@ng-select/ng-select';
import {CorporateschoolModule} from '../corporateschool/corporateschool.module';
import { Angular2SmartTableModule} from 'angular2-smart-table';
import {AuthModule} from '../auth/auth.module';


@NgModule({
  declarations: [ListGradeComponent, AddGradeComponent],
    imports: [
        CommonModule,
        NgbModule,
        Angular2SmartTableModule,
        ReactiveFormsModule,
        GradeRoutingModule,
        DropzoneModule,
        NgSelectModule,
        FormsModule,
        CorporateschoolModule,
        AuthModule
    ],
    providers: [TitleCasePipe]
})
export class GradeModule { }
