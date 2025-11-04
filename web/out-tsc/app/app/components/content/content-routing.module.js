import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentCategoryComponent } from './content-category/content-category.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentSeoComponent } from './content-seo/content-seo.component';
import { ContentCategoryAddComponent } from './content-category/content-category-add/content-category-add.component';
import { ContentAddComponent } from './content-list/content-add/content-add.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: 'category/list',
        component: ContentCategoryComponent
    }, {
        path: 'content-list/list',
        component: ContentListComponent
    }, {
        path: 'seo/list',
        component: ContentSeoComponent
    }, {
        path: 'category/:type',
        component: ContentCategoryAddComponent
    }, {
        path: 'content-list/:type',
        component: ContentAddComponent
    }];
export class ContentRoutingModule {
    static { this.ɵfac = function ContentRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ContentRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ContentRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=content-routing.module.js.map