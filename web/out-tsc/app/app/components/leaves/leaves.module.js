import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { LeavesRoutingModule } from './leaves-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
import { TagInputModule } from 'ngx-chips';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import * as i0 from "@angular/core";
import * as i1 from "angular-calendar";
export class LeavesModule {
    static { this.ɵfac = function LeavesModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LeavesModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LeavesModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TitleCasePipe], imports: [CommonModule,
            NgbModule,
            ReactiveFormsModule,
            LeavesRoutingModule,
            DropzoneModule,
            NgSelectModule,
            FormsModule,
            AngularMyDatePickerModule,
            TagInputModule,
            CalendarModule.forRoot({
                provide: DateAdapter,
                useFactory: adapterFactory,
            }),
            CorporateschoolModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LeavesModule, [{
        type: NgModule,
        args: [{
                declarations: [AddHolidayComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    ReactiveFormsModule,
                    LeavesRoutingModule,
                    DropzoneModule,
                    NgSelectModule,
                    FormsModule,
                    AngularMyDatePickerModule,
                    TagInputModule,
                    CalendarModule.forRoot({
                        provide: DateAdapter,
                        useFactory: adapterFactory,
                    }),
                    CorporateschoolModule,
                ],
                providers: [TitleCasePipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LeavesModule, { declarations: [AddHolidayComponent], imports: [CommonModule,
        NgbModule,
        ReactiveFormsModule,
        LeavesRoutingModule,
        DropzoneModule,
        NgSelectModule,
        FormsModule,
        AngularMyDatePickerModule,
        TagInputModule, i1.CalendarModule, CorporateschoolModule] }); })();
//# sourceMappingURL=leaves.module.js.map