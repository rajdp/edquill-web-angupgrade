import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddBooksComponent } from './add-Books/add-Books.component';
import { ListBooksComponent } from './list-Books/list-Books.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-Books',
                component: ListBooksComponent,
                data: {
                    title: "Books List",
                    breadcrumb: "Books List"
                }
            },
            {
                path: 'create-Books/:type',
                component: AddBooksComponent,
                data: {
                    title: "Content",
                    breadcrumb: "Add Content"
                }
            }
        ]
    }
];
export class BooksRoutingModule {
    static { this.ɵfac = function BooksRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BooksRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: BooksRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BooksRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BooksRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=Books-routing.module.js.map