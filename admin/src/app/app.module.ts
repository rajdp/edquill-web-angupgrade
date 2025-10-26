import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './components/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './components/products/products.module';
import { SalesModule } from './components/sales/sales.module';
import { CouponsModule } from './components/coupons/coupons.module';
import { PagesModule } from './components/pages/pages.module';
import { MediaModule } from './components/media/media.module';
import { MenusModule } from './components/menus/menus.module';
import { VendorsModule } from './components/vendors/vendors.module';
import { UsersModule } from './components/users/users.module';
import { LocalizationModule } from './components/localization/localization.module';
import { CorporatesModule} from './components/corporates/corporates.module';
import { InvoiceModule } from './components/invoice/invoice.module';
import { SettingModule } from './components/setting/setting.module';
import { ReportsModule } from './components/reports/reports.module';
import { AuthModule } from './components/auth/auth.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {AuthGuardService} from './shared/service/authgaurd';
import {CommonDataService} from './shared/service/common-data.service';
import {SubjectServices} from './shared/service/subject.services';
import { CommonService} from './shared/service/common.service';
import { CorporatesService} from './shared/service/corporates.service';
import { NgSelectModule} from '@ng-select/ng-select';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { APP_INITIALIZER} from '@angular/core';
import {EnvironmentService} from './environment.service';
import * as moment from 'moment';
import {Injectable} from '@angular/core';
import {
    NgbDateParserFormatter,
    NgbModalModule,
    NgbModule,
    NgbDateStruct,
    NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import {TitleCasePipe, SlicePipe, DatePipe} from '@angular/common';
import {TagInputModule} from 'ngx-chips';
import {AngularMyDatePickerModule} from 'angular-mydatepicker';
import {ServerHttpInterceptor} from './shared/service/http.interceptor';
import { ListTestimonyComponent } from './components/testimony/list-testimony/list-testimony.component';
import { AddTestimonyComponent } from './components/testimony/add-testimony/add-testimony.component';
import { ListBlogComponent } from './components/blog/list-blog/list-blog.component';
import { CreateBlogComponent } from './components/blog/create-blog/create-blog.component';
import {PipesModule} from "./shared/pipes/pipes.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
@Injectable()
export class Momentatter extends NgbDateParserFormatter {
  readonly DT_FORMAT = 'MM/DD/YYYY';
  parse(value: string): NgbDateStruct {
    if (value) {
      value = value.trim();
      const mdt = moment(value, this.DT_FORMAT);
    }
    return null;
  }
  format(date: NgbDateStruct): string {
    if (!date) { return ''; }
    const mdt = moment([date.year, date.month - 1, date.day]);
    if (!mdt.isValid()) { return ''; }
    return mdt.format(this.DT_FORMAT);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ListTestimonyComponent,
    AddTestimonyComponent,
    ListBlogComponent,
    CreateBlogComponent,
  ],
    imports: [
        BrowserAnimationsModule,
        ToastrModule.forRoot(), // ToastrModule added
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        HttpClientModule,
        AppRoutingModule,
        DashboardModule,
        InvoiceModule,
        SettingModule,
        ReportsModule,
        AuthModule,
        SharedModule,
        LocalizationModule,
        ProductsModule,
        SalesModule,
        VendorsModule,
        CouponsModule,
        PagesModule,
        MediaModule,
        MenusModule,
        UsersModule,
        FormsModule,
        NgSelectModule,
        TextMaskModule,
        TagInputModule,
        AngularMyDatePickerModule,
        PdfViewerModule,
        CorporatesModule,
        ReactiveFormsModule,
        NgbTimepickerModule,
        PipesModule,
        NgxDatatableModule
    ],
  providers: [AuthGuardService, CommonDataService, SubjectServices, TitleCasePipe, SlicePipe, DatePipe, Title, CommonService,
    {provide: HTTP_INTERCEPTORS, useClass: ServerHttpInterceptor, multi: true},
    {provide: NgbDateParserFormatter, useValue: new Momentatter()},
    {
      provide: APP_INITIALIZER, useFactory: (envService: EnvironmentService) => () => envService.init(),
      deps: [EnvironmentService], multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
