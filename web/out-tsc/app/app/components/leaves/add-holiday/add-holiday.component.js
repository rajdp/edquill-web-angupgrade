import { Component, ViewChild, } from '@angular/core';
import { Validators } from '@angular/forms';
import { startOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, } from 'date-fns';
import { Subject } from 'rxjs';
import { CalendarView, } from 'angular-calendar';
import { dateOptions, timeZone } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "../../../shared/service/newsubject.service";
import * as i5 from "../../../shared/service/common-data.service";
import * as i6 from "../../../shared/service/common.service";
import * as i7 from "ngx-toastr";
import * as i8 from "../../../shared/service/auth.service";
import * as i9 from "../../../shared/service/validation.service";
import * as i10 from "../../../shared/service/book.service";
import * as i11 from "../../../shared/service/class.service";
import * as i12 from "@angular/common";
import * as i13 from "@nodro7/angular-mydatepicker";
import * as i14 from "angular-calendar";
import * as i15 from "../../corporateschool/emptyschool/emptyschool.component";
const _c0 = ["modalContent"];
const _c1 = ["customCellTemplate"];
function AddHolidayComponent_div_0_mwl_calendar_month_view_31_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mwl-calendar-month-view", 25);
    i0.ɵɵlistener("dayClicked", function AddHolidayComponent_div_0_mwl_calendar_month_view_31_Template_mwl_calendar_month_view_dayClicked_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dayClicked($event.day)); })("eventTimesChanged", function AddHolidayComponent_div_0_mwl_calendar_month_view_31_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.eventTimesChanged($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    const customCellTemplate_r4 = i0.ɵɵreference(3);
    i0.ɵɵproperty("@.disabled", true)("viewDate", ctx_r1.viewDate)("events", ctx_r1.caelenderEvents)("refresh", ctx_r1.refresh)("activeDayIsOpen", ctx_r1.activeDayIsOpen)("cellTemplate", customCellTemplate_r4);
} }
function AddHolidayComponent_div_0_mwl_calendar_week_view_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mwl-calendar-week-view", 26);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("viewDate", ctx_r1.viewDate)("events", ctx_r1.caelenderEvents)("refresh", ctx_r1.refresh);
} }
function AddHolidayComponent_div_0_mwl_calendar_day_view_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mwl-calendar-day-view", 26);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("viewDate", ctx_r1.viewDate)("events", ctx_r1.caelenderEvents)("refresh", ctx_r1.refresh);
} }
function AddHolidayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "h4", 9);
    i0.ɵɵtext(4, "Academic Calendar");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 10)(6, "button", 11);
    i0.ɵɵlistener("click", function AddHolidayComponent_div_0_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addHolidays()); });
    i0.ɵɵtext(7, "Add Holidays");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 12)(9, "div", 13)(10, "div", 14)(11, "div", 15)(12, "div", 16);
    i0.ɵɵtwoWayListener("viewDateChange", function AddHolidayComponent_div_0_Template_div_viewDateChange_12_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.viewDate, $event) || (ctx_r1.viewDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("viewDateChange", function AddHolidayComponent_div_0_Template_div_viewDateChange_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeOpenMonthViewDay("preview")); });
    i0.ɵɵtext(13, " Previous ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 17);
    i0.ɵɵtwoWayListener("viewDateChange", function AddHolidayComponent_div_0_Template_div_viewDateChange_14_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.viewDate, $event) || (ctx_r1.viewDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("viewDateChange", function AddHolidayComponent_div_0_Template_div_viewDateChange_14_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeOpenMonthViewDay("today")); });
    i0.ɵɵtext(15, " Today ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 18);
    i0.ɵɵtwoWayListener("viewDateChange", function AddHolidayComponent_div_0_Template_div_viewDateChange_16_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.viewDate, $event) || (ctx_r1.viewDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("viewDateChange", function AddHolidayComponent_div_0_Template_div_viewDateChange_16_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeOpenMonthViewDay("next")); });
    i0.ɵɵtext(17, " Next ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 19)(19, "h3", 9);
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "calendarDate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 20)(23, "div", 15)(24, "div", 21);
    i0.ɵɵlistener("click", function AddHolidayComponent_div_0_Template_div_click_24_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setView(ctx_r1.CalendarView.Month)); });
    i0.ɵɵtext(25, " Month ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 21);
    i0.ɵɵlistener("click", function AddHolidayComponent_div_0_Template_div_click_26_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setView(ctx_r1.CalendarView.Week)); });
    i0.ɵɵtext(27, " Week ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 21);
    i0.ɵɵlistener("click", function AddHolidayComponent_div_0_Template_div_click_28_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setView(ctx_r1.CalendarView.Day)); });
    i0.ɵɵtext(29, " Day ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "div", 22);
    i0.ɵɵtemplate(31, AddHolidayComponent_div_0_mwl_calendar_month_view_31_Template, 1, 6, "mwl-calendar-month-view", 23)(32, AddHolidayComponent_div_0_mwl_calendar_week_view_32_Template, 1, 3, "mwl-calendar-week-view", 24)(33, AddHolidayComponent_div_0_mwl_calendar_day_view_33_Template, 1, 3, "mwl-calendar-day-view", 24);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngClass", ctx_r1.currentCalendarshow === "preview" ? "btn btn-primary" : "btn btn-outline-primary")("view", ctx_r1.view);
    i0.ɵɵtwoWayProperty("viewDate", ctx_r1.viewDate);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.currentCalendarshow === "today" ? "btn btn-primary" : "btn btn-outline-primary");
    i0.ɵɵtwoWayProperty("viewDate", ctx_r1.viewDate);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.currentCalendarshow === "next" ? "btn btn-primary" : "btn btn-outline-primary")("view", ctx_r1.view);
    i0.ɵɵtwoWayProperty("viewDate", ctx_r1.viewDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(21, 19, ctx_r1.viewDate, ctx_r1.view + "ViewTitle", "en"));
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("active", ctx_r1.view === ctx_r1.CalendarView.Month);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.view === ctx_r1.CalendarView.Week);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.view === ctx_r1.CalendarView.Day);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", ctx_r1.view);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.CalendarView.Month);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.CalendarView.Week);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.CalendarView.Day);
} }
function AddHolidayComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
function AddHolidayComponent_ng_template_2_h5_4_span_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const item_r6 = ctx_r4.$implicit;
    const i_r7 = ctx_r4.index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r6.title, " ", i_r7 != 0 ? " , " : "", "");
} }
function AddHolidayComponent_ng_template_2_h5_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, AddHolidayComponent_ng_template_2_h5_4_span_1_p_1_Template, 2, 2, "p", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r7 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r7 == 0 || i_r7 === 1);
} }
function AddHolidayComponent_ng_template_2_h5_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r8 = i0.ɵɵnextContext(2).day;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(day_r8.events.length - 2 + " More");
} }
function AddHolidayComponent_ng_template_2_h5_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 30);
    i0.ɵɵtemplate(1, AddHolidayComponent_ng_template_2_h5_4_span_1_Template, 2, 1, "span", 31)(2, AddHolidayComponent_ng_template_2_h5_4_span_2_Template, 2, 1, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r8 = i0.ɵɵnextContext().day;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", day_r8.events);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", day_r8.events.length > 2);
} }
function AddHolidayComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "span", 28);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "calendarDate");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, AddHolidayComponent_ng_template_2_h5_4_Template, 3, 2, "h5", 29);
} if (rf & 2) {
    const day_r8 = ctx.day;
    const locale_r9 = ctx.locale;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(3, 2, day_r8.date, "monthViewDayNumber", locale_r9));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", day_r8.events.length > 0);
} }
function AddHolidayComponent_ng_template_4_em_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 48);
    i0.ɵɵtext(1, " Start Date is invalid ");
    i0.ɵɵelementEnd();
} }
function AddHolidayComponent_ng_template_4_em_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 48);
    i0.ɵɵtext(1, " Description is required ");
    i0.ɵɵelementEnd();
} }
function AddHolidayComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "h5", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 36);
    i0.ɵɵlistener("click", function AddHolidayComponent_ng_template_4_Template_i_click_3_listener() { const close_r11 = i0.ɵɵrestoreView(_r10).close; return i0.ɵɵresetView(close_r11()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "form", 37)(5, "div", 38)(6, "div", 13)(7, "div", 39)(8, "div", 40)(9, "label");
    i0.ɵɵtext(10, "Start Date ");
    i0.ɵɵelementStart(11, "span", 41);
    i0.ɵɵtext(12, "*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 40)(14, "input", 42, 2);
    i0.ɵɵlistener("dateChanged", function AddHolidayComponent_ng_template_4_Template_input_dateChanged_14_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDateChanged($event)); })("click", function AddHolidayComponent_ng_template_4_Template_input_click_14_listener() { i0.ɵɵrestoreView(_r10); const dp_r12 = i0.ɵɵreference(15); return i0.ɵɵresetView(dp_r12.toggleCalendar()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(16, AddHolidayComponent_ng_template_4_em_16_Template, 2, 0, "em", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 39)(18, "div", 40)(19, "label");
    i0.ɵɵtext(20, "End Date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 40)(22, "input", 44, 3);
    i0.ɵɵlistener("dateChanged", function AddHolidayComponent_ng_template_4_Template_input_dateChanged_22_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDateChanged1($event)); })("click", function AddHolidayComponent_ng_template_4_Template_input_click_22_listener() { i0.ɵɵrestoreView(_r10); const dp1_r13 = i0.ɵɵreference(23); return i0.ɵɵresetView(dp1_r13.toggleCalendar()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 45)(25, "div", 40)(26, "label");
    i0.ɵɵtext(27, "Enter Description ");
    i0.ɵɵelementStart(28, "span", 41);
    i0.ɵɵtext(29, "*");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "div", 40);
    i0.ɵɵelement(31, "input", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(32, AddHolidayComponent_ng_template_4_em_32_Template, 2, 0, "em", 43);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "div", 47)(34, "button", 11);
    i0.ɵɵlistener("click", function AddHolidayComponent_ng_template_4_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(!ctx_r1.updateLeaves ? ctx_r1.addLeavesSave() : ctx_r1.editHoliday(ctx_r1.updateLeavesId)); });
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", !ctx_r1.updateLeaves ? "Add" : "Edit", " Holiday");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r1.addLeaves);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.addLeaves.get("fromDate").invalid && (ctx_r1.addLeaves.get("fromDate").dirty || ctx_r1.addLeaves.get("fromDate").touched));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions1);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngIf", ctx_r1.addLeaves.get("leaves").invalid && (ctx_r1.addLeaves.get("leaves").dirty || ctx_r1.addLeaves.get("leaves").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", !ctx_r1.updateLeaves ? "Add" : "Update", "");
} }
const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};
export class AddHolidayComponent {
    constructor(route, formBuilder, modalService, newSubject, commondata, common, toastr, auth, router, validationService, book, classService, datePipe) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.newSubject = newSubject;
        this.commondata = commondata;
        this.common = common;
        this.toastr = toastr;
        this.auth = auth;
        this.router = router;
        this.validationService = validationService;
        this.book = book;
        this.classService = classService;
        this.datePipe = datePipe;
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() - 1
            },
        };
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: this.myDpOptions.disableUntil.year,
                month: this.myDpOptions.disableUntil.month,
                day: this.myDpOptions.disableUntil.day
            },
        };
        this.view = CalendarView.Month;
        this.CalendarView = CalendarView;
        this.viewDate1 = new Date();
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-pencil letter pl-1 pr-1" aria-hidden="true"></i>',
                a11yLabel: 'Edit',
                onClick: ({ event }) => {
                    this.patchHoliday(event);
                },
            },
            {
                label: '<i class="fa fa-trash letter pl-1 pr-1" aria-hidden="true"></i>',
                a11yLabel: 'Delete',
                onClick: ({ event }) => {
                    this.events = this.events.filter((iEvent) => iEvent !== event);
                    this.deleteHoliday(event);
                },
            },
        ];
        this.refresh = new Subject();
        this.events = [
            {
                start: subDays(startOfDay(new Date()), 1),
                end: addDays(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions,
                allDay: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
                draggable: true,
            },
            {
                start: startOfDay(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions,
            },
            {
                start: subDays(endOfMonth(new Date()), 3),
                end: addDays(endOfMonth(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue,
                allDay: true,
            },
            {
                start: addHours(startOfDay(new Date()), 2),
                end: addHours(new Date(), 2),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
                draggable: true,
            },
        ];
        this.caelenderEvents = [];
        this.currentCalendarshow = 'today';
        this.minDate = { year: 1970, month: 1, day: 1 };
        let date = new Date();
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        this.lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        this.addLeaves = this.formBuilder.group({
            fromDate: ['', Validators.required],
            toDate: '',
            leaves: ['', Validators.required]
        });
        this.auth.removeSessionData('readonly_startdate');
        if (this.schoolStatus.length != 0) {
            this.newSubject.schoolChange.subscribe(params => {
                if (params != '') {
                    if (this.router.url.includes('add-holiday')) {
                        this.leavesDetails();
                    }
                }
                else {
                    this.leavesDetails();
                }
            });
        }
        else {
        }
    }
    ngOnInit() {
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
        this.currentYear = this.datePipe.transform(new Date(), 'YYYY');
        this.auth.setSessionData('resourceAccess', false);
        this.auth.removeSessionData('backOption');
    }
    init(params) {
        this.schoolid = params;
        this.leavesDetails();
    }
    close() {
        this.modalRef.close();
    }
    dayClicked({ date, events }) {
        if (isSameMonth(date, this.viewDate)) {
            if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }
    eventTimesChanged({ event, newStart, newEnd, }) {
        this.events = this.events.map((iEvent) => {
            if (iEvent === event) {
                return {
                    ...event,
                    start: newStart,
                    end: newEnd,
                };
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }
    addHolidays() {
        this.updateLeaves = false;
        this.modalService.open(this.modalContent, { size: 'md', windowClass: 'addHolidayModel' });
    }
    handleEvent(action, event) {
        this.modalData = { event, action };
        this.modalService.open(this.modalContent, { size: 'md' });
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay(type) {
        this.currentCalendarshow = type;
        this.activeDayIsOpen = false;
        let date = this.viewDate;
        this.firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        this.lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        this.leavesDetails();
    }
    onDateChanged(event) {
        this.myDpOptions1 = {};
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: event.singleDate.date.year,
                month: event.singleDate.date.month,
                day: event.singleDate.date.day - 1
            },
        };
    }
    onDateChanged1(event) {
        this.myDpOptions1 = {};
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: event.singleDate.date.year,
                month: event.singleDate.date.month,
                day: event.singleDate.date.day - 1
            },
        };
    }
    addLeavesSave() {
        if (this.addLeaves.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                from_date: this.datePipe.transform(this.addLeaves.controls.fromDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                to_date: this.addLeaves.controls.toDate.value == '' ? '' : this.datePipe.transform(this.addLeaves.controls.toDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                festival_name: this.addLeaves.controls.leaves.value
            };
            this.classService.addLeavesDetails(data).subscribe((successData) => {
                this.addLeavesSuccess(successData);
            }, (error) => {
                this.addLeavesFailure(error);
            });
        }
        else {
            this.toastr.error('Please Enter required field');
        }
    }
    addLeavesSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.addLeaves.reset();
            this.modalService.dismissAll('a');
            this.leavesDetails();
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    addLeavesFailure(error) {
    }
    patchHoliday(eve) {
        const setDate = this.datePipe.transform(eve.start, 'yyyy-MM-dd');
        const sd = setDate.split('-');
        const sdObject = {
            isRange: false,
            singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
            dateRange: null
        };
        this.updateLeavesId = eve.id;
        this.addLeaves.controls.fromDate.patchValue(sdObject);
        this.addLeaves.controls.toDate.patchValue(sdObject);
        this.addLeaves.controls.leaves.patchValue(eve.title);
        this.updateLeaves = true;
        this.modalService.open(this.modalContent, { size: 'md' });
    }
    editHoliday(eiditId) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            id: eiditId,
            from_date: this.datePipe.transform(this.addLeaves.controls.fromDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
            to_date: this.addLeaves.controls.toDate.value == '' ? '' : this.datePipe.transform(this.addLeaves.controls.toDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
            festival_name: this.addLeaves.controls.leaves.value
        };
        this.classService.editLeavesDetails(data).subscribe((successData) => {
            this.editLeavesSuccess(successData);
        }, (error) => {
            this.editLeavesFailure(error);
        });
    }
    editLeavesSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.addLeaves.reset();
            this.modalService.dismissAll('a');
            this.leavesDetails();
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    editLeavesFailure(error) {
    }
    deleteHoliday(eve) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            id: eve.id,
            from_date: this.datePipe.transform(eve.start, 'yyyy-MM-dd'),
            to_date: this.datePipe.transform(eve.start, 'yyyy-MM-dd')
        };
        this.classService.deleteLeavesDetails(data).subscribe((successData) => {
            this.deleteLeavesSuccess(successData);
        }, (error) => {
            this.deleteLeavesFailure(error);
        });
    }
    deleteLeavesSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.activeDayIsOpen = false;
            this.leavesDetails();
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    deleteLeavesFailure(error) {
    }
    leavesDetails() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            from_date: this.datePipe.transform(this.firstDay, 'yyyy-MM-dd'),
            to_date: this.datePipe.transform(this.lastDay, 'yyyy-MM-dd'),
            // timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classService.LeavesDetailsList(data).subscribe((successData) => {
            this.leavesDetailsSuccess(successData);
        }, (error) => {
            this.leavesDetailsFailure(error);
        });
    }
    leavesDetailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.calendarDetails = successData.ResponseObject;
            let eventArr = [];
            this.calendarDetails?.forEach((item) => {
                if (this.datePipe.transform(this.viewDate1, 'yyyy-MM-dd') <= this.datePipe.transform(item.from_date, 'yyyy-MM-dd')) {
                    eventArr.push({
                        start: new Date(item.from_date),
                        end_date: item.to_date,
                        title: `${item.festival_name} `,
                        id: item.id,
                        school_id: item.school_id,
                        color: colors.red,
                        titleName: item.message,
                        actions: this.actions,
                        allDay: true,
                        resizable: {
                            beforeStart: true,
                            afterEnd: true,
                        },
                        draggable: false,
                    });
                }
                else {
                    eventArr.push({
                        start: new Date(item.from_date),
                        end_date: item.to_date,
                        title: `${item.festival_name} `,
                        id: item.id,
                        school_id: item.school_id,
                        color: colors.red,
                        titleName: item.message,
                        // actions: this.actions,
                        allDay: true,
                        resizable: {
                            beforeStart: true,
                            afterEnd: true,
                        },
                        draggable: false,
                    });
                }
            });
            this.caelenderEvents = eventArr;
            this.activeDayIsOpen = false;
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    leavesDetailsFailure(error) {
    }
    static { this.ɵfac = function AddHolidayComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddHolidayComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.NgbModal), i0.ɵɵdirectiveInject(i4.NewsubjectService), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i6.CommonService), i0.ɵɵdirectiveInject(i7.ToastrService), i0.ɵɵdirectiveInject(i8.AuthService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i9.ValidationService), i0.ɵɵdirectiveInject(i10.BookService), i0.ɵɵdirectiveInject(i11.ClassService), i0.ɵɵdirectiveInject(i12.DatePipe)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddHolidayComponent, selectors: [["app-list-holiday"]], viewQuery: function AddHolidayComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customCellTemplate = _t.first);
        } }, decls: 6, vars: 2, consts: [["customCellTemplate", ""], ["modalContent", ""], ["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], ["class", "container-fluid addHolidayModel", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid", "addHolidayModel"], [1, "row", "d-flex", "justify-content-between"], [1, "col-sm-6"], [1, "letter"], [1, "col-sm-6", "text-right", "mb-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "col-12", "active2", "p-3"], [1, "row"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 3, "viewDateChange", "ngClass", "view", "viewDate"], ["mwlCalendarToday", "", 3, "viewDateChange", "ngClass", "viewDate"], ["mwlCalendarNextView", "", 3, "viewDateChange", "ngClass", "view", "viewDate"], [1, "col-md-4", "text-center"], [1, "col-md-4", "text-right"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "col-12", "mt-3", 3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "cellTemplate", "dayClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", 4, "ngSwitchCase"], [3, "dayClicked", "eventTimesChanged", "viewDate", "events", "refresh", "activeDayIsOpen", "cellTemplate"], [3, "viewDate", "events", "refresh"], [1, "cal-cell-top"], [1, "cal-day-number"], ["style", "margin: 5px;", 4, "ngIf"], [2, "margin", "5px"], [4, "ngFor", "ngForOf"], ["class", "font-weight-bold letter", 4, "ngIf"], [1, "font-weight-bold", "letter"], [1, "modal-header", "align-items-center"], [1, "modal-title"], [1, "fa", "fa-close", "cursor", 3, "click"], [3, "formGroup"], [1, "modal-body"], [1, "col-md-6"], [1, "row-md-12"], [1, "text-danger"], ["formControlName", "fromDate", "placeholder", "Start Date *", "name", "dp", "angular-mydatepicker", "", 1, "form-control", 3, "dateChanged", "click", "options"], ["class", "errormessage", 4, "ngIf"], ["formControlName", "toDate", "placeholder", "End Date", "name", "dp", "angular-mydatepicker", "", 1, "form-control", 3, "dateChanged", "click", "options"], [1, "col-12", "mt-2"], ["type", "text", "formControlName", "leaves", "placeholder", "Enter Description *", 1, "form-control"], [1, "modal-footer", "text-right"], [1, "errormessage"]], template: function AddHolidayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AddHolidayComponent_div_0_Template, 34, 23, "div", 4)(1, AddHolidayComponent_div_1_Template, 2, 0, "div", 5)(2, AddHolidayComponent_ng_template_2_Template, 5, 6, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, AddHolidayComponent_ng_template_4_Template, 36, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length == 0);
        } }, dependencies: [i12.NgClass, i12.NgForOf, i12.NgIf, i12.NgSwitch, i12.NgSwitchCase, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i13.AngularMyDatePickerDirective, i14.ɵCalendarPreviousViewDirective, i14.ɵCalendarNextViewDirective, i14.ɵCalendarTodayDirective, i14.CalendarMonthViewComponent, i14.CalendarWeekViewComponent, i14.CalendarDayViewComponent, i15.EmptyschoolComponent, i14.ɵCalendarDatePipe], styles: [".custom-upload-input[_ngcontent-%COMP%] {\n  color: transparent;\n}\n.custom-upload-input[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input[_ngcontent-%COMP%]::before {\n  content: 'Choose files';\n  color: black;\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n.custom-upload-input[_ngcontent-%COMP%]:hover::before {\n  border-color: black;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active {\n  outline: 0;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n.form-control[readonly][_ngcontent-%COMP%]{\n  background: #fff;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddHolidayComponent, [{
        type: Component,
        args: [{ selector: 'app-list-holiday', template: "<!-- Container-fluid starts-->\n<div *ngIf=\"schoolStatus.length != 0\" class=\"container-fluid addHolidayModel\">\n    <div class=\"row d-flex justify-content-between\">\n        <div class=\"col-sm-6\">\n            <h4 class=\"letter\">Academic Calendar</h4>\n        </div>\n        <div class=\"col-sm-6 text-right mb-2\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addHolidays()\">Add Holidays</button>\n        </div>\n        <div class=\"col-12 active2 p-3\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"btn-group\">\n                        <div [ngClass]=\"currentCalendarshow === 'preview' ? 'btn btn-primary' : 'btn btn-outline-primary'\"\n                             mwlCalendarPreviousView\n                             [view]=\"view\"\n                             [(viewDate)]=\"viewDate\"\n                             (viewDateChange)=\"closeOpenMonthViewDay('preview')\">\n                            Previous\n                        </div>\n                        <div [ngClass]=\"currentCalendarshow === 'today' ? 'btn btn-primary' : 'btn btn-outline-primary'\"\n                             mwlCalendarToday\n                             [(viewDate)]=\"viewDate\"\n                             (viewDateChange)=\"closeOpenMonthViewDay('today')\">\n                            Today\n                        </div>\n                        <div [ngClass]=\"currentCalendarshow === 'next' ? 'btn btn-primary' : 'btn btn-outline-primary'\"\n                             mwlCalendarNextView\n                             [view]=\"view\"\n                             [(viewDate)]=\"viewDate\"\n                             (viewDateChange)=\"closeOpenMonthViewDay('next')\">\n                            Next\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 text-center\">\n                    <h3 class=\"letter\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n                </div>\n                <div class=\"col-md-4 text-right\">\n                    <div class=\"btn-group\">\n                        <div class=\"btn btn-outline-primary\"\n                             (click)=\"setView(CalendarView.Month)\"\n                             [class.active]=\"view === CalendarView.Month\">\n                            Month\n                        </div>\n                        <div class=\"btn btn-outline-primary\"\n                             (click)=\"setView(CalendarView.Week)\"\n                             [class.active]=\"view === CalendarView.Week\">\n                            Week\n                        </div>\n                        <div class=\"btn btn-outline-primary\"\n                             (click)=\"setView(CalendarView.Day)\"\n                             [class.active]=\"view === CalendarView.Day\">\n                            Day\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 mt-3\" [ngSwitch]=\"view\">\n                    <mwl-calendar-month-view\n                            *ngSwitchCase=\"CalendarView.Month\"\n                            [@.disabled]=\"true\"\n                            [viewDate]=\"viewDate\"\n                            [events]=\"caelenderEvents\"\n                            [refresh]=\"refresh\"\n                            [activeDayIsOpen]=\"activeDayIsOpen\"\n                            [cellTemplate]=\"customCellTemplate\"\n                            (dayClicked)=\"dayClicked($event.day)\"\n                            (eventTimesChanged)=\"eventTimesChanged($event)\">\n                    </mwl-calendar-month-view>\n                    <mwl-calendar-week-view\n                                *ngSwitchCase=\"CalendarView.Week\"\n                                [viewDate]=\"viewDate\"\n                                [events]=\"caelenderEvents\"\n                                [refresh]=\"refresh\"></mwl-calendar-week-view>\n                        <mwl-calendar-day-view\n                                *ngSwitchCase=\"CalendarView.Day\"\n                                [viewDate]=\"viewDate\"\n                                [events]=\"caelenderEvents\"\n                                [refresh]=\"refresh\"></mwl-calendar-day-view>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"schoolStatus.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n\n<ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\n    <div class=\"cal-cell-top\">\n        <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n    </div>\n    <h5 style=\"margin: 5px;\" *ngIf=\"day.events.length >0\">\n        <span *ngFor=\"let item of day.events;let i=index\">\n            <p class=\"font-weight-bold letter\" *ngIf=\"i== 0 || i === 1\">{{item.title}} {{i != 0 ? ' , ': ''}}</p>\n        </span>\n        <span *ngIf=\"day.events.length > 2\">{{day.events.length-2 + ' More'}}</span>\n    </h5>\n</ng-template>\n\n<!-- Container-fluid Ends-->\n<ng-template #modalContent  let-close=\"close\">\n    <div class=\"modal-header align-items-center\">\n        <h5 class=\"modal-title\">{{!updateLeaves ? 'Add' : 'Edit'}} Holiday</h5>\n        <i class=\"fa fa-close cursor\" (click)=\"close()\"></i>\n    </div>\n    <form [formGroup]=\"addLeaves\">\n        <div class=\"modal-body\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"row-md-12\">\n                        <label>Start Date <span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"row-md-12\">\n                        <input class=\"form-control\" formControlName=\"fromDate\" placeholder=\"Start Date *\"\n                               name=\"dp\" angular-mydatepicker #dp=\"angular-mydatepicker\"\n                               [options]=\"myDpOptions\" (dateChanged)=\"onDateChanged($event)\" (click)=\"dp.toggleCalendar()\"/>\n                    </div>\n                    <em class=\"errormessage\" *ngIf=\"addLeaves.get('fromDate').invalid && (addLeaves.get('fromDate').dirty || addLeaves.get('fromDate').touched)\">\n                        Start Date is invalid\n                    </em>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"row-md-12\">\n                        <label>End Date</label>\n                    </div>\n                    <div class=\"row-md-12\">\n                        <input class=\"form-control\" formControlName=\"toDate\" placeholder=\"End Date\"\n                               name=\"dp\" angular-mydatepicker #dp1=\"angular-mydatepicker\"\n                               [options]=\"myDpOptions1\" (dateChanged)=\"onDateChanged1($event)\" (click)=\"dp1.toggleCalendar()\"/>\n                    </div>\n                </div>\n                <div class=\"col-12 mt-2\">\n                    <div class=\"row-md-12\">\n                        <label>Enter Description <span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"row-md-12\">\n                        <input class=\"form-control\" type=\"text\" formControlName=\"leaves\" placeholder=\"Enter Description *\">\n                    </div>\n                    <em class=\"errormessage\" *ngIf=\"addLeaves.get('leaves').invalid && (addLeaves.get('leaves').dirty || addLeaves.get('leaves').touched)\">\n                        Description is required\n                    </em>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer text-right\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"!updateLeaves ? addLeavesSave() : editHoliday(updateLeavesId)\">\n                {{!updateLeaves ? 'Add' : 'Update'}}</button>\n        </div>\n    </form>\n</ng-template>\n", styles: [".custom-upload-input {\n  color: transparent;\n}\n.custom-upload-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input::before {\n  content: 'Choose files';\n  color: black;\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n.custom-upload-input:hover::before {\n  border-color: black;\n}\n.custom-upload-input:active {\n  outline: 0;\n}\n.custom-upload-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n.form-control[readonly]{\n  background: #fff;\n}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.NgbModal }, { type: i4.NewsubjectService }, { type: i5.CommonDataService }, { type: i6.CommonService }, { type: i7.ToastrService }, { type: i8.AuthService }, { type: i1.Router }, { type: i9.ValidationService }, { type: i10.BookService }, { type: i11.ClassService }, { type: i12.DatePipe }], { modalContent: [{
            type: ViewChild,
            args: ['modalContent', { static: true }]
        }], customCellTemplate: [{
            type: ViewChild,
            args: ['customCellTemplate', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddHolidayComponent, { className: "AddHolidayComponent" }); })();
//# sourceMappingURL=add-holiday.component.js.map