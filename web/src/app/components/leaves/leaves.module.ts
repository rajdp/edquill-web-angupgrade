import { NgModule } from '@angular/core';
import {CommonModule, TitleCasePipe} from '@angular/common';
import { LeavesRoutingModule } from './leaves-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DropzoneModule} from 'ngx-dropzone-wrapper';
import {NgSelectModule} from '@ng-select/ng-select';
import {AddHolidayComponent} from './add-holiday/add-holiday.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {AngularMyDatePickerModule} from '@nodro7/angular-mydatepicker';
import {TagInputModule} from 'ngx-chips';
import {CorporateschoolModule} from '../corporateschool/corporateschool.module';

@NgModule({
  declarations: [AddHolidayComponent],
    imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        LeavesRoutingModule,
        DropzoneModule,
        NgSelectModule,
        FormsModule,
        AngularMyDatePickerModule,
        TagInputModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        CorporateschoolModule,
    ],
    providers: [TitleCasePipe]
})
export class LeavesModule { }
