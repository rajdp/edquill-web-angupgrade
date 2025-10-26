import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ForgotComponent} from './forgot/forgot.component';
import {ConfirmPasswordComponent} from './confirm-password/confirm-password.component';
import {TinyMiceComponent} from './tiny-mice/tiny-mice.component';

const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent ,
  // },
  {
    path: 'login/:type',
    component: LoginComponent ,
  },
  {
    path: 'forgotPassword',
    component: ForgotComponent,
  },
  {
    path: 'setPassword',
    component: ConfirmPasswordComponent,
  },
  {
    path : 'tinymice',
    component: TinyMiceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
