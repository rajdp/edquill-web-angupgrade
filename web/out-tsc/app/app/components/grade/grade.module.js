import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ListGradeComponent } from './list-grade/list-grade.component';
import { AddGradeComponent } from './add-grade/add-grade.component';
import { GradeRoutingModule } from './grade-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { AuthModule } from '../auth/auth.module';
import * as i0 from "@angular/core";
export class GradeModule {
    static { this.ɵfac = function GradeModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GradeModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GradeModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TitleCasePipe], imports: [CommonModule,
            NgbModule,
            Angular2SmartTableModule,
            ReactiveFormsModule,
            GradeRoutingModule,
            DropzoneModule,
            NgSelectModule,
            FormsModule,
            CorporateschoolModule,
            AuthModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GradeModule, [{
        type: NgModule,
        args: [{
                declarations: [ListGradeComponent, AddGradeComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    Angular2SmartTableModule,
                    ReactiveFormsModule,
                    GradeRoutingModule,
                    DropzoneModule,
                    NgSelectModule,
                    FormsModule,
                    CorporateschoolModule,
                    AuthModule
                ],
                providers: [TitleCasePipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GradeModule, { declarations: [ListGradeComponent, AddGradeComponent], imports: [CommonModule,
        NgbModule,
        Angular2SmartTableModule,
        ReactiveFormsModule,
        GradeRoutingModule,
        DropzoneModule,
        NgSelectModule,
        FormsModule,
        CorporateschoolModule,
        AuthModule] }); })();
//# sourceMappingURL=grade.module.js.map