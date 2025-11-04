import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/newsubject.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "../my-schedule/my-schedule.component";
import * as i6 from "../daily-schedule/daily-schedule.component";
function SchedulePageComponent_app_daily_schedule_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-daily-schedule", 12);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("page", ctx_r0.schoolid);
} }
function SchedulePageComponent_app_my_schedule_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-my-schedule", 12);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("page", ctx_r0.schoolid);
} }
export class SchedulePageComponent {
    constructor(auth, newSubject, route) {
        this.auth = auth;
        this.newSubject = newSubject;
        this.route = route;
        this.page = 'Attendance';
        this.schoolid = '';
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.route.url.includes('schedule-page')) {
                    this.schoolid = this.auth.getSessionData('school_id');
                }
            }
            else {
                this.schoolid = this.auth.getSessionData('school_id');
            }
        });
    }
    ngOnInit() {
    }
    static { this.ɵfac = function SchedulePageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SchedulePageComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.NewsubjectService), i0.ɵɵdirectiveInject(i3.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SchedulePageComponent, selectors: [["app-schedule-page"]], decls: 19, vars: 8, consts: [[1, "schedule-page", "container-fluid", "py-3"], [1, "card", "shadow-sm", "border-0"], [1, "card-header", "border-0", "pb-0"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-2"], [1, "h5", "mb-1"], [1, "text-neutral-600", "small", "mb-0"], ["role", "tablist", "aria-label", "Schedule view switcher", 1, "btn-group", "btn-group-sm", "schedule-toggle"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-list-task", "me-1"], [1, "bi", "bi-calendar3", "me-1"], [1, "card-body", "pt-3"], [3, "page", 4, "ngIf"], [3, "page"]], template: function SchedulePageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h2", 4);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 5);
            i0.ɵɵtext(8, " Switch between the daily schedule view and calendar timeline to stay on top of sessions. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 6)(10, "button", 7);
            i0.ɵɵlistener("click", function SchedulePageComponent_Template_button_click_10_listener() { return ctx.page = "Attendance"; });
            i0.ɵɵelement(11, "i", 8);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 7);
            i0.ɵɵlistener("click", function SchedulePageComponent_Template_button_click_13_listener() { return ctx.page = "Calendar"; });
            i0.ɵɵelement(14, "i", 9);
            i0.ɵɵtext(15, " Calendar ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(16, "div", 10);
            i0.ɵɵtemplate(17, SchedulePageComponent_app_daily_schedule_17_Template, 1, 1, "app-daily-schedule", 11)(18, SchedulePageComponent_app_my_schedule_18_Template, 1, 1, "app-my-schedule", 11);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.auth.getRoleId() == "2" ? "Daily Schedule" : "My Teaching Schedule", " ");
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("active", ctx.page === "Attendance");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.auth.getRoleId() == "2" ? "Schedule" : "My Schedule", " ");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.page === "Calendar");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.page === "Attendance");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.page === "Calendar");
        } }, dependencies: [i4.NgIf, i5.MyScheduleComponent, i6.DailyScheduleComponent], styles: [".schedule-page[_ngcontent-%COMP%] {\n  .card {\n    border-radius: var(--radius-lg);\n  }\n\n  .schedule-toggle {\n    .btn {\n      min-width: 8.5rem;\n      border-radius: var(--radius-md);\n      font-weight: 600;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      gap: var(--spacing-1);\n      transition: all var(--transition-base) ease;\n\n      i {\n        font-size: 1rem;\n      }\n\n      &.active {\n        background: var(--color-primary);\n        border-color: var(--color-primary);\n        color: #fff;\n        box-shadow: var(--shadow-sm);\n      }\n\n      &:hover:not(.active) {\n        background: rgba(143, 0, 138, 0.08);\n        border-color: var(--color-primary);\n        color: var(--color-primary);\n      }\n    }\n  }\n}\n\n@media (max-width: 575.98px) {\n  .schedule-page[_ngcontent-%COMP%] {\n    .schedule-toggle {\n      width: 100%;\n\n      .btn {\n        flex: 1 1 50%;\n      }\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchedulePageComponent, [{
        type: Component,
        args: [{ selector: 'app-schedule-page', template: "<div class=\"schedule-page container-fluid py-3\">\n  <section class=\"card shadow-sm border-0\">\n    <div class=\"card-header border-0 pb-0\">\n      <div class=\"d-flex flex-wrap align-items-center justify-content-between gap-2\">\n        <div>\n          <h2 class=\"h5 mb-1\">\n            {{ auth.getRoleId() == '2' ? 'Daily Schedule' : 'My Teaching Schedule' }}\n          </h2>\n          <p class=\"text-neutral-600 small mb-0\">\n            Switch between the daily schedule view and calendar timeline to stay on top of sessions.\n          </p>\n        </div>\n        <div class=\"btn-group btn-group-sm schedule-toggle\" role=\"tablist\" aria-label=\"Schedule view switcher\">\n          <button\n            type=\"button\"\n            class=\"btn btn-outline-primary\"\n            [class.active]=\"page === 'Attendance'\"\n            (click)=\"page = 'Attendance'\"\n          >\n            <i class=\"bi bi-list-task me-1\"></i>\n            {{ auth.getRoleId() == '2' ? 'Schedule' : 'My Schedule' }}\n          </button>\n          <button\n            type=\"button\"\n            class=\"btn btn-outline-primary\"\n            [class.active]=\"page === 'Calendar'\"\n            (click)=\"page = 'Calendar'\"\n          >\n            <i class=\"bi bi-calendar3 me-1\"></i>\n            Calendar\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body pt-3\">\n      <app-daily-schedule [page]=\"schoolid\" *ngIf=\"page === 'Attendance'\"></app-daily-schedule>\n      <app-my-schedule [page]=\"schoolid\" *ngIf=\"page === 'Calendar'\"></app-my-schedule>\n    </div>\n  </section>\n</div>\n", styles: [".schedule-page {\n  .card {\n    border-radius: var(--radius-lg);\n  }\n\n  .schedule-toggle {\n    .btn {\n      min-width: 8.5rem;\n      border-radius: var(--radius-md);\n      font-weight: 600;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      gap: var(--spacing-1);\n      transition: all var(--transition-base) ease;\n\n      i {\n        font-size: 1rem;\n      }\n\n      &.active {\n        background: var(--color-primary);\n        border-color: var(--color-primary);\n        color: #fff;\n        box-shadow: var(--shadow-sm);\n      }\n\n      &:hover:not(.active) {\n        background: rgba(143, 0, 138, 0.08);\n        border-color: var(--color-primary);\n        color: var(--color-primary);\n      }\n    }\n  }\n}\n\n@media (max-width: 575.98px) {\n  .schedule-page {\n    .schedule-toggle {\n      width: 100%;\n\n      .btn {\n        flex: 1 1 50%;\n      }\n    }\n  }\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.NewsubjectService }, { type: i3.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SchedulePageComponent, { className: "SchedulePageComponent" }); })();
//# sourceMappingURL=schedule-page.component.js.map