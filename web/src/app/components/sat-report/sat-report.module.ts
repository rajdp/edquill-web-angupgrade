import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA} from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SatReportRoutingModule } from './sat-report-routing.module';
import { SatReportComponent } from './sat-report/sat-report.component';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import { QuestionReportComponent } from './question-report/question-report.component';
import {AuthModule} from '../auth/auth.module';

@NgModule({
  declarations: [
    SatReportComponent,
    QuestionReportComponent
  ],
    imports: [
        CommonModule,
        SatReportRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgMultiSelectDropDownModule,
        NgApexchartsModule,
        NgbCollapse,
        NgSelectModule,
        SharedModule,
        PipesModule,
        AuthModule
    ], 
    exports: [SatReportComponent, QuestionReportComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
]
})
export class SatReportModule { }
