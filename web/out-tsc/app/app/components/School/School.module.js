import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolRoutingModule } from './School-routing.module';
import { ListSchoolComponent } from './list-School/list-School.component';
import { AddSchoolComponent } from './add-School/add-School.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import * as i0 from "@angular/core";
export class SchoolModule {
    static { this.ɵfac = function SchoolModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SchoolModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SchoolModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            NgbModule,
            ReactiveFormsModule,
            SchoolRoutingModule,
            FormsModule,
            SharedModule,
            NgSelectModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchoolModule, [{
        type: NgModule,
        args: [{
                declarations: [ListSchoolComponent, AddSchoolComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    ReactiveFormsModule,
                    SchoolRoutingModule,
                    FormsModule,
                    SharedModule,
                    NgSelectModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SchoolModule, { declarations: [ListSchoolComponent, AddSchoolComponent], imports: [CommonModule,
        NgbModule,
        ReactiveFormsModule,
        SchoolRoutingModule,
        FormsModule,
        SharedModule,
        NgSelectModule] }); })();
//# sourceMappingURL=School.module.js.map