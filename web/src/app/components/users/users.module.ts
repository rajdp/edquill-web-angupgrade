import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { UsersRoutingModule } from './users-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ChangePasswordComponent} from './change-password/change-password.component';
import { QuickCreateUserComponent } from './quick-create-user/quick-create-user.component';
import {StudentModule} from '../student/student.module';
import {TeacherModule} from '../Teacher/Teacher.module';
import {ContentModule} from '../Content-Creator/Content.module';
import {AdminModule} from '../admin/admin.module';

@NgModule({
  declarations: [ListUserComponent, CreateUserComponent, ChangePasswordComponent, QuickCreateUserComponent],
    imports: [
        CommonModule,
        NgbModule,
        StudentModule,
        TeacherModule,
        ContentModule,
        Angular2SmartTableModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        FormsModule,
        AdminModule
    ]
})
export class UsersModule { }
