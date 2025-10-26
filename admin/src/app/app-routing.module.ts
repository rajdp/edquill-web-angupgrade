import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { content } from './shared/routes/content-routes';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import {ForgotComponent} from './components/auth/forgot/forgot.component';
import {AuthGuardService} from './shared/service/authgaurd';
import {ConfirmPasswordComponent} from './components/auth/confirm-password/confirm-password.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [AuthGuardService],
    component: ContentLayoutComponent,
    children: content
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'auth/login/:type',
    component: LoginComponent,
  },
  {
    path: 'auth/forgotPassword',
    component: ForgotComponent,
  },
  {
    path: 'auth/forgotPassword/:id',
    component: ForgotComponent,
  },
  {
    path: 'auth/setPassword/:id',
    component: ConfirmPasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: true
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
