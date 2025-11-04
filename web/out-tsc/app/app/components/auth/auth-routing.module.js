import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { SelectionComponent } from './selection/selection.component';
import { StudentAnnotationComponent } from './student-annotation/student-annotation.component';
import { RegistrationComponent } from './registration/registration.component';
import { TinyMiceComponent } from './tiny-mice/tiny-mice.component';
import { TeacherRegistrationComponent } from './teacher-registration/teacher-registration.component';
import { CreatorRegistrationComponent } from './creator-registration/creator-registration.component';
import { StudentGraphComponent } from './student-graph/student-graph.component';
import { ParentRegistrationComponent } from './parent-registration/parent-registration.component';
import { IpadQuestionViewComponent } from './ipad-question-view/ipad-question-view.component';
import { StudentScratchComponent } from './student-scratch/student-scratch.component';
import { TutorconnectComponent } from "./tutorconnect/tutorconnect.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'login/:type',
        component: LoginComponent,
    },
    {
        path: 'login/googleSignIn/:providerId',
        component: LoginComponent,
    },
    {
        path: 'forgotPassword/:type',
        component: ForgotComponent,
    },
    {
        path: 'setPassword',
        component: ConfirmPasswordComponent,
    },
    {
        path: 'select',
        component: SelectionComponent
    },
    {
        path: 'student-annotation/:type/:id',
        component: StudentAnnotationComponent
    },
    // {
    //   path: 'source-link/:type/:id',
    //   component: SourceLinkComponent
    // },
    {
        // path: 'student-annotation/:type/:mode/:id',
        path: 'student-scratch/:accesstoken/:student_id/:school_id/:content_id/:content_format/:class_id/:student_content_id/:class_content_id/:student_content_status/:type',
        component: StudentScratchComponent
    },
    // {
    //   path: 'handwritting',
    //   component: HandwrittingComponent,
    // },
    {
        path: 'auth/welcomeStudent/:type',
        component: RegistrationComponent
    },
    {
        path: 'auth/welcomeTeacher/:type',
        component: TeacherRegistrationComponent
    },
    {
        path: 'auth/welcomeContentcreator/:type',
        component: CreatorRegistrationComponent
    },
    {
        path: 'graphing/:studentId/:cId/:qId/:classId/:quesType/:format/:typeId',
        component: StudentGraphComponent,
    },
    {
        path: 'tinymice',
        component: TinyMiceComponent,
    },
    {
        path: 'registration',
        component: ParentRegistrationComponent,
    },
    {
        path: 'auth/ipad-question-view/:studentId/:cId/:qId/:classId/:typeId/:showID',
        component: IpadQuestionViewComponent,
    },
    {
        path: 'tutorconnect/:enc_key',
        component: TutorconnectComponent
    }
];
export class AuthRoutingModule {
    static { this.ɵfac = function AuthRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AuthRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AuthRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=auth-routing.module.js.map