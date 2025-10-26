import { NgModule } from '@angular/core';
import {CommonModule, TitleCasePipe} from '@angular/common';
import {ListClassroomComponent} from './list-classroom/list-classroom.component';
import {AddClassroomComponent} from './add-classroom/add-classroom.component';
import { ClassroomRoutingModule } from './classroom-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DropzoneModule} from 'ngx-dropzone-wrapper';
import {NgSelectModule} from '@ng-select/ng-select';
import {CorporateschoolModule} from '../corporateschool/corporateschool.module';
import {AuthModule} from '../auth/auth.module';
import {ContentModule} from '../repository/repositery.module';

@NgModule({
  declarations: [ListClassroomComponent, AddClassroomComponent],
    imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        ClassroomRoutingModule,
        DropzoneModule,
        NgSelectModule,
        FormsModule,
        CorporateschoolModule,
        AuthModule,
        ContentModule
    ],
    providers: [TitleCasePipe]
})
export class ClassroomModule { }
