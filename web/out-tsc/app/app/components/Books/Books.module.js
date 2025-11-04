import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { BooksRoutingModule } from './Books-routing.module';
import { ListBooksComponent } from './list-Books/list-Books.component';
import { ViewComponent } from './list-Books/list-Books.component';
import { AddBooksComponent } from './add-Books/add-Books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TagInputModule } from 'ngx-chips';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import { SharedModule } from '../../shared/shared.module';
import { TreeviewModule } from '@soy-andrey-semyonov/ngx-treeview';
import { AuthModule } from '../auth/auth.module';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import * as i0 from "@angular/core";
export class BooksModule {
    static { this.ɵfac = function BooksModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BooksModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: BooksModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TitleCasePipe], imports: [CommonModule,
            NgbModule,
            ReactiveFormsModule,
            BooksRoutingModule,
            DropzoneModule,
            NgSelectModule,
            FormsModule,
            PdfViewerModule,
            TagInputModule,
            CorporateschoolModule,
            SharedModule,
            TreeviewModule,
            AuthModule,
            Angular2SmartTableModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BooksModule, [{
        type: NgModule,
        args: [{
                declarations: [ListBooksComponent, AddBooksComponent,
                    ViewComponent
                ],
                imports: [
                    CommonModule,
                    NgbModule,
                    ReactiveFormsModule,
                    BooksRoutingModule,
                    DropzoneModule,
                    NgSelectModule,
                    FormsModule,
                    PdfViewerModule,
                    TagInputModule,
                    CorporateschoolModule,
                    SharedModule,
                    TreeviewModule,
                    AuthModule,
                    Angular2SmartTableModule
                ],
                providers: [TitleCasePipe],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BooksModule, { declarations: [ListBooksComponent, AddBooksComponent,
        ViewComponent], imports: [CommonModule,
        NgbModule,
        ReactiveFormsModule,
        BooksRoutingModule,
        DropzoneModule,
        NgSelectModule,
        FormsModule,
        PdfViewerModule,
        TagInputModule,
        CorporateschoolModule,
        SharedModule,
        TreeviewModule,
        AuthModule,
        Angular2SmartTableModule] }); })();
//# sourceMappingURL=Books.module.js.map