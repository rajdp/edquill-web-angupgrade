import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RequestCorporateRoutingModule} from './request-corporate-routing.module';
import {RequestComponent} from './request/request.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DropzoneModule} from 'ngx-dropzone-wrapper';
import {NgSelectModule} from '@ng-select/ng-select';
import {AngularMyDatePickerModule} from '@nodro7/angular-mydatepicker';
import {CorporateschoolModule} from '../corporateschool/corporateschool.module';
import { DownloadApprovalComponent } from './download-approval/download-approval.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [RequestComponent, DownloadApprovalComponent],
    imports: [
        CommonModule,
        RequestCorporateRoutingModule,
        NgxDatatableModule,
        FormsModule,
        NgbModule,
        DropzoneModule,
        NgSelectModule,
        AngularMyDatePickerModule,
        CorporateschoolModule,
        ReactiveFormsModule,
        InfiniteScrollModule
    ]
})
export class RequestCorporateModule { }
