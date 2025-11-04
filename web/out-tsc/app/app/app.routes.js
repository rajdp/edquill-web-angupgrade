import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ForgotComponent } from './components/auth/forgot/forgot.component';
import { ConfirmPasswordComponent } from './components/auth/confirm-password/confirm-password.component';
import { SelectionComponent } from './components/auth/selection/selection.component';
import { EnrollclasscodeComponent } from './components/enrollclasscode/enrollclasscode.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TutorconnectComponent } from './components/auth/tutorconnect/tutorconnect.component';
import { content } from './shared/routes/content-routes';
import { AuthGuardService } from './shared/service/authgaurd';
import { RoleGaurd } from './shared/service/roleGaurd';
export const appRoutes = [
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
        canActivate: [RoleGaurd],
        component: LoginComponent
    },
    {
        path: 'auth/login/googleSignIn/:providerId',
        component: LoginComponent
    },
    {
        path: 'auth/login/:type/:classCode',
        component: LoginComponent
    },
    {
        path: 'auth/login/:type/',
        canActivate: [RoleGaurd],
        component: LoginComponent
    },
    {
        path: 'enrollclasscode/:type',
        component: EnrollclasscodeComponent
    },
    {
        path: 'auth/forgotPassword',
        component: ForgotComponent
    },
    {
        path: 'auth/select',
        component: SelectionComponent
    },
    {
        path: 'auth/forgotPassword/:id',
        component: ForgotComponent
    },
    {
        path: 'auth/setPassword/:id',
        component: ConfirmPasswordComponent
    },
    {
        path: 'fortepayment',
        component: PaymentComponent
    },
    {
        path: 'tutorconnect/:enc_key',
        component: TutorconnectComponent
    }
];
//# sourceMappingURL=app.routes.js.map