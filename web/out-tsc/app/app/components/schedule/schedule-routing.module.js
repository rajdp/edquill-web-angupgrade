import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        children: [
            {
                path: 'my-schedule',
                component: MyScheduleComponent,
                data: {
                    title: 'My Schedule',
                    id: true,
                    adminTitle: 'Schedule',
                    breadcrumb: 'My Schedule'
                }
            },
            {
                path: 'daily-schedule',
                component: DailyScheduleComponent,
                data: {
                    title: 'Daily Schedule',
                    id: true,
                    adminTitle: 'Daily Schedule',
                    breadcrumb: 'Daily Schedule'
                }
            },
            {
                path: 'schedule-page',
                component: SchedulePageComponent,
                data: {
                    title: 'Schedule',
                    id: true,
                    adminTitle: 'Schedule',
                    breadcrumb: 'Schedule'
                }
            },
        ]
    }
];
export class SchedulesRoutingModule {
    static { this.ɵfac = function SchedulesRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SchedulesRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SchedulesRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forChild(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchedulesRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SchedulesRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=schedule-routing.module.js.map