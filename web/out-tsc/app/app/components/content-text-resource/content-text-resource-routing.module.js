import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextResourceComponent } from './text-resource/text-resource.component';
import { TextAssignmentComponent } from './text-assignment/text-assignment.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { PassageComponent } from './passage/passage.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'text-resource/:type',
                component: TextResourceComponent,
                data: {
                    title: 'Content Text Resource',
                    breadcrumb: 'Content Text Resource'
                }
            },
            {
                path: 'text-assignment/:type',
                component: TextAssignmentComponent,
                data: {
                    title: '',
                    breadcrumb: ''
                }
            },
            {
                path: 'add-questions/:type',
                component: AddQuestionsComponent,
                data: {
                    title: 'Questions',
                    breadcrumb: 'Questions'
                }
            },
            {
                path: 'question-paper/:type',
                component: QuestionPageComponent,
                data: {
                    title: 'Question Paper',
                    breadcrumb: 'Question Paper'
                }
            }, {
                path: 'passage',
                component: PassageComponent,
                data: {
                    title: 'Reading Passage Details',
                    breadcrumb: 'Reading Passage Details'
                }
            }
        ]
    }
];
export class ContentTextResourceRoutingModule {
    static { this.ɵfac = function ContentTextResourceRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentTextResourceRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ContentTextResourceRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentTextResourceRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ContentTextResourceRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=content-text-resource-routing.module.js.map