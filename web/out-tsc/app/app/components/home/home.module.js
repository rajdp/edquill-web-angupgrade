import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ListHomeComponent } from './list-home/list-home.component';
import { AddHomeComponent } from './add-home/add-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import * as i0 from "@angular/core";
export class HomeModule {
    static { this.ɵfac = function HomeModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HomeModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            NgbModule,
            ReactiveFormsModule,
            HomeRoutingModule,
            FormsModule,
            CorporateschoolModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeModule, [{
        type: NgModule,
        args: [{
                declarations: [ListHomeComponent, AddHomeComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    ReactiveFormsModule,
                    HomeRoutingModule,
                    FormsModule,
                    CorporateschoolModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HomeModule, { declarations: [ListHomeComponent, AddHomeComponent], imports: [CommonModule,
        NgbModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        FormsModule,
        CorporateschoolModule] }); })();
//# sourceMappingURL=home.module.js.map