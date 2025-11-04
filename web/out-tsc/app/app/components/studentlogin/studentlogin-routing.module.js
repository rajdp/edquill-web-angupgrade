import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListHomeComponent } from './list-home/list-home.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AssingmentsComponent } from './assingments/assingments.component';
import { ReportsComponent } from './reports/reports.component';
import { StudentlistClassComponent } from './studentlist-class/studentlist-class.component';
import { AnsweringComponent } from './answering/answering.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { StudentPreviewComponent } from './student-preview/student-preview.component';
import { AnswerSheetComponent } from './answer-sheet/answer-sheet.component';
import { AnsweringGuard } from '../../shared/service/answering.guard';
import { ResourceComponent } from './resource/resource.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryAddComponent } from './repository-add/repository-add.component';
import { ContentFolderListComponent } from './content-folder-list/content-folder-list.component';
import { ContentFolderCreateComponent } from './content-folder-create/content-folder-create.component';
import { AssignedContentComponent } from './assigned-content/assigned-content.component';
import { EnrollclassComponent } from './enrollclass/enrollclass.component';
import { StudentOverallProfileDetailsComponent } from './student-overall-profile-details/student-overall-profile-details.component';
import { ViewPDFComponent } from './view-pdf/view-pdf.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-home',
                component: ListHomeComponent,
                data: {
                    title: 'Home List',
                    breadcrumb: 'Home List'
                }
            },
            {
                path: 'resource',
                component: ResourceComponent,
                data: {
                    title: 'Resource',
                    breadcrumb: 'Resource'
                }
            },
            {
                path: 'resource/:id',
                component: ResourceComponent,
                data: {
                    title: 'Resource',
                    breadcrumb: 'Resource'
                }
            },
            {
                path: 'assessment',
                component: AssessmentComponent,
                data: {
                    title: 'Assessment',
                    breadcrumb: 'assessment'
                }
            },
            {
                path: 'repository',
                component: RepositoryComponent,
                data: {
                    title: 'My Content',
                    breadcrumb: 'My Content'
                }
            },
            {
                path: 'repository/content/:type',
                component: RepositoryAddComponent,
                data: {
                    title: 'Create Content',
                    breadcrumb: 'Create Content'
                }
            },
            {
                path: 'content-folder',
                component: ContentFolderListComponent,
                data: {
                    title: 'My Folder',
                    breadcrumb: 'My Folder'
                }
            },
            {
                path: 'content-folder/:type',
                component: ContentFolderCreateComponent,
                data: {
                    title: 'Create Folder',
                    breadcrumb: 'Create Folder'
                }
            },
            {
                path: 'content-details',
                component: AssignedContentComponent,
                data: {
                    title: 'Assigned Contents',
                    breadcrumb: 'Assigned Contents'
                }
            },
            {
                path: 'assignment',
                component: AssingmentsComponent,
                data: {
                    title: 'Assignment',
                    breadcrumb: 'Assignment'
                }
            },
            {
                path: 'answering',
                component: AnsweringComponent,
                canDeactivate: [AnsweringGuard],
                data: {
                    title: 'answering',
                    breadcrumb: 'answering'
                }
            },
            {
                path: 'score-card',
                component: AnswerSheetComponent,
                data: {
                    title: 'score card',
                    breadcrumb: 'score'
                }
            },
            {
                path: 'reports',
                component: ReportsComponent,
                data: {
                    title: 'Report Card',
                    breadcrumb: 'Report Card'
                }
            },
            {
                path: 'enrollclass',
                component: EnrollclassComponent,
                data: {
                    title: 'Enroll Class',
                    breadcrumb: 'Enroll Class'
                }
            },
            {
                path: 'profile/:type',
                component: StudentProfileComponent,
                data: {
                    title: 'MY PROFILE',
                    breadcrumb: 'assessment'
                }
            },
            {
                path: 'list-class',
                component: StudentlistClassComponent,
                data: {
                    title: 'Class List',
                    breadcrumb: 'Class List'
                }
            },
            {
                path: 'class-detail',
                component: ClassDetailComponent,
                data: {
                    title: 'Class Details',
                    breadcrumb: 'Class Details'
                }
            },
            {
                path: 'class-detail/:type',
                component: ClassDetailComponent,
                data: {
                    title: 'Class Details',
                    breadcrumb: 'Class Details'
                }
            },
            {
                path: 'preview',
                component: StudentPreviewComponent,
                data: {
                    title: '',
                    breadcrumb: ''
                }
            },
            {
                path: 'profile-details',
                component: StudentOverallProfileDetailsComponent,
                data: {
                    title: 'Student Profile',
                    breadcrumb: 'Student Profile'
                }
            },
            {
                path: 'viewAnswerKeyPdf',
                component: ViewPDFComponent,
                data: {
                    title: 'View Answer Key & Explanation PDF',
                    breadcrumb: 'View Answer Key & Explanation PDF'
                }
            },
            // {
            //   path: 'dashboard',
            //   component: DashboardComponent,
            //   data: {
            //     title: 'Dashboard',
            //     breadcrumb: 'Dashboard'
            //   }
            // },
            {
                path: 'dashboard1',
                component: Dashboard1Component,
                data: {
                    title: 'Dashboard',
                    breadcrumb: 'Dashboard'
                }
            },
            {
                path: 'dashboard2',
                component: Dashboard2Component,
                data: {
                    title: 'Dashboard',
                    breadcrumb: 'Dashboard'
                }
            },
            {
                path: 'dashboard',
                component: Dashboard3Component,
                data: {
                    title: 'Dashboard',
                    breadcrumb: 'Dashboard'
                }
            }
        ]
    }
];
export class StudentloginRoutingModule {
    static { this.ɵfac = function StudentloginRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentloginRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StudentloginRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentloginRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StudentloginRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=studentlogin-routing.module.js.map