import { NgModule } from '@angular/core';
import {CommonModule, TitleCasePipe} from '@angular/common';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { AdminRoutingModule } from './admin-routing.module';
import {ListAdminComponent} from './list-admin/list-admin.component';
import {ViewComponent} from './list-admin/list-admin.component';
import {AddAdminComponent} from './add-admin/add-admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {AngularMyDatePickerModule} from '@nodro7/angular-mydatepicker';
import {TagInputModule} from 'ngx-chips';
import {SharedModule} from '../../shared/shared.module';
import {CorporateschoolModule} from '../corporateschool/corporateschool.module';
import {AuthModule} from '../auth/auth.module';

@NgModule({
  declarations: [ListAdminComponent, AddAdminComponent, ViewComponent],
    imports: [
        CommonModule,
        NgbModule,
        Angular2SmartTableModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        NgSelectModule,
        AngularMyDatePickerModule,
        TagInputModule,
        FormsModule,
        SharedModule,
        CorporateschoolModule,
        AuthModule
    ],
    providers: [TitleCasePipe],
    // entryComponents: [ViewComponent],
    exports: [
        ListAdminComponent
    ],
})
export class AdminModule { }
