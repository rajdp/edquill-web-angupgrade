import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GradeRoutingModule } from './grade-routing.module';
import {ListGradeComponent} from './list-grade/list-grade.component';
import {AddGradeComponent} from './add-grade/add-grade.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DropzoneModule} from 'ngx-dropzone-wrapper';
import {NgSelectModule} from '@ng-select/ng-select';


@NgModule({
  declarations: [ListGradeComponent, AddGradeComponent],
    imports: [
        CommonModule,
        NgbModule,
        Ng2SmartTableModule,
        ReactiveFormsModule,
        GradeRoutingModule,
        DropzoneModule,
        NgSelectModule,
        FormsModule
    ]
})
export class GradeModule { }
