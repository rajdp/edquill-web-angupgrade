import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {ForgotComponent} from './forgot/forgot.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../shared/shared.module';
import {ConfirmPasswordComponent} from './confirm-password/confirm-password.component';
import { AutofocusModule } from 'angular-autofocus-fix';
import {GraphComponentComponent} from './graph-component/graph-component.component';
import {TinyMiceComponent} from './tiny-mice/tiny-mice.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import {AngularMyDatePickerModule} from "angular-mydatepicker";
import {PipesModule} from "../../shared/pipes/pipes.module";


@NgModule({
  declarations: [LoginComponent, ForgotComponent, ConfirmPasswordComponent, GraphComponentComponent, TinyMiceComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        NgbModule,
        CarouselModule,
        SharedModule,
        AutofocusModule,
        EditorModule,
        FormsModule,
        AngularMyDatePickerModule,
        PipesModule
    ],
  exports: [
    GraphComponentComponent,
    TinyMiceComponent,
    // AnnotationComponent
  ],
})
export class AuthModule { }
