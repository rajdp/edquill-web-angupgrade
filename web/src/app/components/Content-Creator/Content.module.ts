import { NgModule } from '@angular/core';
import {CommonModule, TitleCasePipe} from '@angular/common';
import { ContentRoutingModule } from './Content-routing.module';
import {ListContentComponent} from './list-Content/list-Content.component';
import {AddContentComponent} from './add-Content/add-Content.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {AngularMyDatePickerModule} from '@nodro7/angular-mydatepicker';
import {TagInputModule} from 'ngx-chips';
import {SharedModule} from '../../shared/shared.module';
import {CorporateschoolModule} from '../corporateschool/corporateschool.module';
import {Angular2SmartTableModule} from 'angular2-smart-table';
import {AuthModule} from '../auth/auth.module';

@NgModule({
    declarations: [ListContentComponent, AddContentComponent],
    imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        ContentRoutingModule,
        NgSelectModule,
        AngularMyDatePickerModule,
        FormsModule,
        TagInputModule,
        SharedModule,
        CorporateschoolModule,
        Angular2SmartTableModule,
        AuthModule
    ],
    providers: [TitleCasePipe],
    exports: [
        ListContentComponent
    ]
})
export class ContentModule { }
