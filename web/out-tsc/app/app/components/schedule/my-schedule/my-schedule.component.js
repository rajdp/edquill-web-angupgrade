import { Component, Input, ViewChild, } from '@angular/core';
import { startOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { CalendarView, } from 'angular-calendar';
import { dateOptions } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../shared/service/newsubject.service";
import * as i4 from "../../../shared/service/common-data.service";
import * as i5 from "../../../shared/service/common.service";
import * as i6 from "ngx-toastr";
import * as i7 from "../../../shared/service/auth.service";
import * as i8 from "../../../shared/service/validation.service";
import * as i9 from "../../../shared/service/book.service";
import * as i10 from "../../../shared/service/class.service";
import * as i11 from "@angular/common";
import * as i12 from "@angular/forms";
import * as i13 from "@ng-select/ng-select";
import * as i14 from "angular-calendar";
import * as i15 from "../../corporateschool/emptyschool/emptyschool.component";
const _c0 = ["customCellTemplate"];
function MyScheduleComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "ng-select", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function MyScheduleComponent_div_0_div_2_Template_ng_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.selectTeacher, $event) || (ctx_r2.selectTeacher = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function MyScheduleComponent_div_0_div_2_Template_ng_select_change_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.scheduleDetails("teacher")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r2.teacherData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.selectTeacher);
} }
function MyScheduleComponent_div_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.item;
    i0.ɵɵproperty("title", item_r4.class_name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.class_name);
} }
function MyScheduleComponent_div_0_mwl_calendar_month_view_29_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mwl-calendar-month-view", 25);
    i0.ɵɵlistener("dayClicked", function MyScheduleComponent_div_0_mwl_calendar_month_view_29_Template_mwl_calendar_month_view_dayClicked_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.dayClicked($event.day)); })("eventClicked", function MyScheduleComponent_div_0_mwl_calendar_month_view_29_Template_mwl_calendar_month_view_eventClicked_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.handleEvent("Clicked", $event.event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    const customCellTemplate_r6 = i0.ɵɵreference(3);
    i0.ɵɵproperty("@.disabled", true)("viewDate", ctx_r2.viewDate)("events", ctx_r2.caelenderEvents)("refresh", ctx_r2.refresh)("activeDayIsOpen", ctx_r2.activeDayIsOpen)("cellTemplate", customCellTemplate_r6);
} }
function MyScheduleComponent_div_0_mwl_calendar_week_view_30_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mwl-calendar-week-view", 26);
    i0.ɵɵlistener("eventClicked", function MyScheduleComponent_div_0_mwl_calendar_week_view_30_Template_mwl_calendar_week_view_eventClicked_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.handleEvent("Clicked", $event.event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("viewDate", ctx_r2.viewDate)("events", ctx_r2.caelenderDayEvents)("refresh", ctx_r2.refresh)("dayStartHour", 8)("dayEndHour", 20);
} }
function MyScheduleComponent_div_0_mwl_calendar_day_view_31_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mwl-calendar-day-view", 26);
    i0.ɵɵlistener("eventClicked", function MyScheduleComponent_div_0_mwl_calendar_day_view_31_Template_mwl_calendar_day_view_eventClicked_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.handleEvent("Clicked", $event.event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("viewDate", ctx_r2.viewDate)("events", ctx_r2.caelenderDayEvents)("refresh", ctx_r2.refresh)("dayStartHour", 8)("dayEndHour", 20);
} }
function MyScheduleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4);
    i0.ɵɵtemplate(2, MyScheduleComponent_div_0_div_2_Template, 2, 2, "div", 5);
    i0.ɵɵelementStart(3, "div", 6)(4, "ng-select", 7);
    i0.ɵɵtwoWayListener("ngModelChange", function MyScheduleComponent_div_0_Template_ng_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.selectClass, $event) || (ctx_r2.selectClass = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function MyScheduleComponent_div_0_Template_ng_select_change_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.scheduleDetails("class")); });
    i0.ɵɵtemplate(5, MyScheduleComponent_div_0_ng_template_5_Template, 2, 2, "ng-template", 8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 9)(7, "div", 10)(8, "div", 11)(9, "div", 12)(10, "div", 13);
    i0.ɵɵtwoWayListener("viewDateChange", function MyScheduleComponent_div_0_Template_div_viewDateChange_10_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.viewDate, $event) || (ctx_r2.viewDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("viewDateChange", function MyScheduleComponent_div_0_Template_div_viewDateChange_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeOpenMonthViewDay("preview")); });
    i0.ɵɵtext(11, " Previous ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 14);
    i0.ɵɵtwoWayListener("viewDateChange", function MyScheduleComponent_div_0_Template_div_viewDateChange_12_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.viewDate, $event) || (ctx_r2.viewDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("viewDateChange", function MyScheduleComponent_div_0_Template_div_viewDateChange_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeOpenMonthViewDay("today")); });
    i0.ɵɵtext(13, " Today ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 15);
    i0.ɵɵtwoWayListener("viewDateChange", function MyScheduleComponent_div_0_Template_div_viewDateChange_14_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.viewDate, $event) || (ctx_r2.viewDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("viewDateChange", function MyScheduleComponent_div_0_Template_div_viewDateChange_14_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeOpenMonthViewDay("next")); });
    i0.ɵɵtext(15, " Next ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 16)(17, "h3", 17);
    i0.ɵɵtext(18);
    i0.ɵɵpipe(19, "calendarDate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 18)(21, "div", 12)(22, "div", 19);
    i0.ɵɵlistener("click", function MyScheduleComponent_div_0_Template_div_click_22_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setView(ctx_r2.CalendarView.Month)); });
    i0.ɵɵtext(23, " Month ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 19);
    i0.ɵɵlistener("click", function MyScheduleComponent_div_0_Template_div_click_24_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setView(ctx_r2.CalendarView.Week)); });
    i0.ɵɵtext(25, " Week ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 19);
    i0.ɵɵlistener("click", function MyScheduleComponent_div_0_Template_div_click_26_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setView(ctx_r2.CalendarView.Day)); });
    i0.ɵɵtext(27, " Day ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 20);
    i0.ɵɵtemplate(29, MyScheduleComponent_div_0_mwl_calendar_month_view_29_Template, 1, 6, "mwl-calendar-month-view", 21)(30, MyScheduleComponent_div_0_mwl_calendar_week_view_30_Template, 1, 5, "mwl-calendar-week-view", 22)(31, MyScheduleComponent_div_0_mwl_calendar_day_view_31_Template, 1, 5, "mwl-calendar-day-view", 22);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.rollId != "4");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r2.classData);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.selectClass);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", ctx_r2.currentCalendarshow === "preview" ? "btn btn-primary" : "btn btn-outline-primary")("view", ctx_r2.view);
    i0.ɵɵtwoWayProperty("viewDate", ctx_r2.viewDate);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.currentCalendarshow === "today" ? "btn btn-primary" : "btn btn-outline-primary");
    i0.ɵɵtwoWayProperty("viewDate", ctx_r2.viewDate);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.currentCalendarshow === "next" ? "btn btn-primary" : "btn btn-outline-primary")("view", ctx_r2.view);
    i0.ɵɵtwoWayProperty("viewDate", ctx_r2.viewDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(19, 22, ctx_r2.viewDate, ctx_r2.view + "ViewTitle", "en"));
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("active", ctx_r2.view === ctx_r2.CalendarView.Month);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r2.view === ctx_r2.CalendarView.Week);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r2.view === ctx_r2.CalendarView.Day);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", ctx_r2.view);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r2.CalendarView.Month);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r2.CalendarView.Week);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r2.CalendarView.Day);
} }
function MyScheduleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
function MyScheduleComponent_ng_template_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r9 = i0.ɵɵnextContext().day;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(day_r9.badgeTotal);
} }
function MyScheduleComponent_ng_template_2_small_5_span_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    const item_r11 = ctx_r9.$implicit;
    const i_r12 = ctx_r9.index;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4("", item_r11.teacher_name, " : ", item_r11.titleName, " at ", item_r11.slotstarttime + " " + item_r11.slotendtime, "", i_r12 != 0 ? " , " : "", "");
} }
function MyScheduleComponent_ng_template_2_small_5_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, MyScheduleComponent_ng_template_2_small_5_span_1_p_1_Template, 2, 4, "p", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r12 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r12 == 0 || i_r12 === 1 || i_r12 == 2);
} }
function MyScheduleComponent_ng_template_2_small_5_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r9 = i0.ɵɵnextContext(2).day;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", day_r9.events.length - 3 + " More", " ");
} }
function MyScheduleComponent_ng_template_2_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 32);
    i0.ɵɵtemplate(1, MyScheduleComponent_ng_template_2_small_5_span_1_Template, 2, 1, "span", 33)(2, MyScheduleComponent_ng_template_2_small_5_span_2_Template, 2, 1, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r9 = i0.ɵɵnextContext().day;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", day_r9.events);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", day_r9.events.length > 3);
} }
function MyScheduleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, MyScheduleComponent_ng_template_2_span_1_Template, 2, 1, "span", 28);
    i0.ɵɵelementStart(2, "span", 29);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "calendarDate");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, MyScheduleComponent_ng_template_2_small_5_Template, 3, 2, "small", 30);
} if (rf & 2) {
    const day_r9 = ctx.day;
    const locale_r13 = ctx.locale;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", day_r9.badgeTotal > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind3(4, 3, day_r9.date, "monthViewDayNumber", locale_r13), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", day_r9.events.length > 0);
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
export class MyScheduleComponent {
    constructor(route, modalService, newSubject, commondata, common, toastr, newService, auth, router, validationService, book, classService, datePipe) {
        this.route = route;
        this.modalService = modalService;
        this.newSubject = newSubject;
        this.commondata = commondata;
        this.common = common;
        this.toastr = toastr;
        this.newService = newService;
        this.auth = auth;
        this.router = router;
        this.validationService = validationService;
        this.book = book;
        this.classService = classService;
        this.datePipe = datePipe;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            disableUntil: {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate() - 1
            },
            firstDayOfWeek: 'su'
        };
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            disableUntil: {
                year: this.myDpOptions.disableUntil.year,
                month: this.myDpOptions.disableUntil.month,
                day: this.myDpOptions.disableUntil.day
            },
            firstDayOfWeek: 'su'
        };
        this.eventArr = [];
        this.manageClass = true;
        // view: CalendarView = CalendarView.Day;
        this.view = 'day';
        this.CalendarView = CalendarView;
        this.viewDate = new Date();
        this.actions = [];
        this.refresh = new Subject();
        this.events = [
            {
                start: subDays(startOfDay(new Date()), 1),
                end: addDays(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            },
            {
                start: startOfDay(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: subDays(endOfMonth(new Date()), 3),
                end: addDays(endOfMonth(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            },
            {
                start: addHours(startOfDay(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.caelenderEvents = [];
        this.caelenderDayEvents = [];
        this.currentCalendarshow = 'today';
        this.schoolid = this.auth.getSessionData('school_id');
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.teacherType = this.auth.getSessionData('teacher_type');
        this.schoolListDetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.rollId = this.auth.getRoleId();
        this.minDate = { year: 1970, month: 1, day: 1 };
        const date = new Date();
        this.firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        this.lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        if (this.auth.getRoleId() == '2' || this.auth.getRoleId() == '6') {
            this.schoolid = this.auth.getSessionData('school_id');
            this.teacherId = '0';
        }
        else if (this.auth.getRoleId() == '4') {
            this.schoolListDetails = JSON.parse(this.auth.getSessionData('rista_data1'));
            this.schoolid = this.schoolListDetails.school_id;
            this.teacherId = this.auth.getUserId();
        }
        this.manageClass = this.auth.manageClass;
        this.newService.schoolChange.subscribe((res) => {
            if (res != '') {
                if (this.router.url.includes('my-schedule')) {
                    this.init(this.auth.getSessionData('school_id'));
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
    }
    ngOnInit() {
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
        this.currentYear = this.datePipe.transform(new Date(), 'YYYY');
        console.log(this.currentYear, 'CY');
        this.auth.setSessionData('resourceAccess', false);
        this.auth.removeSessionData('backOption');
    }
    ngOnChanges() {
        this.init(this.auth.getSessionData('school_id'));
    }
    init(id) {
        if (this.auth.getRoleId() == '2' || this.auth.getRoleId() == '6') {
            this.selectTeacher = null;
            this.selectClass = null;
        }
        else {
            this.selectClass = null;
        }
        this.schoolid = id;
        this.classList();
        this.scheduleDetails('class');
        this.individualList();
    }
    classList() {
        const data = {
            platform: 'web',
            type: '5',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolid,
            teacher_id: this.teacherId == undefined ? '0' : this.teacherId
        };
        this.classService.classesList(data).subscribe((successData) => {
            this.classListSuccess(successData);
        }, (error) => {
            this.classListFailure(error);
        });
    }
    classListSuccess(successData) {
        if (successData.IsSuccess) {
            this.classData = successData.ResponseObject;
        }
    }
    classListFailure(error) {
        console.log(error, 'error');
    }
    individualList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolid,
        };
        this.classService.individualTeacherList(data).subscribe((successData) => {
            this.individualListSuccess(successData);
        }, (error) => {
            this.individualListFailure(error);
        });
    }
    individualListSuccess(successData) {
        if (successData.IsSuccess) {
            this.teacherData = successData.ResponseObject;
        }
    }
    individualListFailure(error) {
        console.log(error, 'error');
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
    handleEvent(action, event) {
        this.modalData = { event, action };
        const data = event['class_id'];
        this.enterList(data);
    }
    enterList(value) {
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolid,
            class_id: value,
        };
        this.classService.classDetails(data).subscribe((successData) => {
            this.enterListSuccess(successData);
        }, (error) => {
            console.error(error, 'class_details');
        });
    }
    enterListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.detailData = successData.ResponseObject;
            this.auth.setSessionData('classView', true);
            this.auth.setSessionData('studentlist', JSON.stringify(this.detailData[0].students));
            this.auth.setSessionData('studentlist1', JSON.stringify(this.detailData[0].students));
            this.auth.setSessionData('card-data', JSON.stringify(this.detailData));
            this.auth.setSessionData('editclass', JSON.stringify(successData.ResponseObject));
            this.auth.setSessionData('updatedStudent', 1);
            if (this.detailData[0].classDate_status == '2' || this.detailData[0].classDate_status == '5') {
                if (!this.manageClass) {
                    this.auth.setSessionData('readonly_startdate', 'yes');
                    this.auth.setSessionData('readonly_data', 'true');
                }
                else {
                    this.auth.removeSessionData('readonly_startdate');
                    this.auth.removeSessionData('readonly_data');
                }
                if (this.detailData[0].class_status != '1') {
                    this.router.navigate(['/class/create-class/edit']);
                }
                else {
                    this.router.navigate(['/class/create-class/addEdit']);
                    this.auth.setSessionData('editclass', JSON.stringify(this.detailData));
                    this.auth.setSessionData('updatedStudent', 1);
                }
            }
            else if (this.detailData[0].classDate_status == '4' && this.detailData[0].class_status == '0') {
                this.router.navigate(['/class/list-class']);
            }
            else if (this.detailData[0].classDate_status == '4' && this.detailData[0].class_status == '1') {
                if (this.manageClass) {
                    this.auth.setSessionData('readonly_startdate', 'yes');
                    this.auth.setSessionData('readonly_data', 'true');
                }
                else {
                    this.auth.removeSessionData('readonly_startdate');
                    this.auth.removeSessionData('readonly_data');
                }
                this.router.navigate(['/class/create-class/addEdit']);
                this.auth.setSessionData('editclass', JSON.stringify(this.detailData));
                this.auth.setSessionData('updatedStudent', 1);
            }
            else if (this.detailData[0].classDate_status == '3') {
                if (this.detailData[0].class_status == '1') {
                    this.auth.removeSessionData('readonly_startdate');
                    this.auth.removeSessionData('readonly_data');
                }
                else {
                    this.auth.setSessionData('readonly_startdate', 'yes');
                    if (this.auth.getRoleId() == '4' && this.teacherType == '0') {
                        this.auth.setSessionData('readonly_data', 'true');
                    }
                    else {
                        this.auth.removeSessionData('readonly_data');
                    }
                }
                this.router.navigate(['/class/create-class/edit']);
            }
        }
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay(type) {
        this.currentCalendarshow = type;
        this.activeDayIsOpen = false;
        const date = this.viewDate;
        this.firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        this.lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        this.scheduleDetails('class');
    }
    scheduleDetails(type) {
        if (this.auth.getRoleId() == '2' || this.auth.getRoleId() == '6') {
            if (this.selectTeacher != 'null' && this.selectTeacher != '') {
                this.teacherId = this.selectTeacher;
            }
            else {
                this.teacherId = '0';
            }
        }
        else {
            this.teacherId = this.auth.getUserId();
            this.selectTeacher = this.auth.getUserId();
        }
        if (type == 'teacher') {
            this.selectClass = null;
        }
        this.classList();
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolid,
            from_date: this.datePipe.transform(this.firstDay, 'yyyy-MM-dd'),
            to_date: this.datePipe.transform(this.lastDay, 'yyyy-MM-dd'),
            batch_id: '',
            class_name: '',
            availabilityDate: [],
            teacher_id: this.selectTeacher ? this.selectTeacher : '0',
            class_id: this.selectClass ? this.selectClass : '',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classService.slotList(data).subscribe((successData) => {
            this.scheduleDetailsSuccess(successData);
        }, (error) => {
            console.error(error, 'error_date');
        });
    }
    scheduleDetailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.calendarDetails = successData.ResponseObject;
            this.eventArr = [];
            let arr = [];
            this.calendarDetails.forEach((item) => {
                item.event_details.forEach((data) => {
                    // if (this.datePipe.transform(this.viewDate1, 'yyyy-MM-dd') <= this.datePipe.transform(item.date, 'yyyy-MM-dd')) {
                    let convertedStartTime = '';
                    let convertedEndTime = '';
                    if (data.slotstarttime || data.slotendtime) {
                        convertedStartTime = this.convertTo24HourFormat(data.slotstarttime);
                        convertedEndTime = this.convertTo24HourFormat(data.slotendtime);
                    }
                    else {
                        convertedStartTime = '';
                        convertedEndTime = '';
                    }
                    if (data.status == 1) {
                        arr.push({
                            start: new Date(item.date + ' ' + convertedStartTime),
                            end: new Date(item.date + ' ' + convertedEndTime),
                            title: `${data.message + ' at ' + data.slotstarttime + '-' + data.slotendtime + ' by ' + data.teacher_name}`,
                            actions: this.actions,
                            class_id: data.class_id,
                        });
                        this.eventArr.push({
                            start: new Date(item.date + ' ' + convertedStartTime),
                            end: new Date(item.date + ' ' + convertedEndTime),
                            slotdate: item.date,
                            slotstarttime: data.slotstarttime,
                            slotendtime: data.slotendtime,
                            teacherid: data.teacher_id,
                            teacher_name: data.teacher_name,
                            slotday: item.slotday,
                            slotselected: item.slotselected,
                            status: data.status,
                            title: `${data.message + ' at ' + data.slotstarttime + '-' + data.slotendtime + ' by ' + data.teacher_name}`,
                            color: colors.blue,
                            class_id: data.class_id,
                            titleName: data.message,
                            telephone_number: data.telephone_number,
                            allDay: true,
                            resizable: {
                                beforeStart: true,
                                afterEnd: true,
                            },
                            draggable: false,
                        });
                    }
                    else if (data.status == 2) {
                        this.eventArr.push({
                            start: new Date(item.date + ' ' + convertedStartTime),
                            end: new Date(item.date + ' ' + convertedEndTime),
                            slotdate: data.date,
                            slotday: item.slotday,
                            slotselected: item.slotselected,
                            telephone_number: data.telephone_number,
                            slotstarttime: data.slotstarttime,
                            slotendtime: data.slotendtime,
                            teacherid: data.teacher_id,
                            teacher_name: data.teacher_name,
                            status: data.status,
                            title: `${data.message + ' at ' + data.slotstarttime + '-' + data.slotendtime + ' by ' + data.teacher_name}`,
                            color: colors.red,
                            actions: this.actions,
                            titleName: data.message,
                            allDay: true,
                            resizable: {
                                beforeStart: true,
                                afterEnd: true,
                            },
                            draggable: false,
                        });
                    }
                });
            });
            this.caelenderDayEvents = arr;
            this.caelenderEvents = this.eventArr;
            this.activeDayIsOpen = false;
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    convertTo24HourFormat(time) {
        const [hours, minutes] = time.split(/[: ]/);
        const amPm = time.slice(-2);
        let hourNum = parseInt(hours);
        if (amPm === 'PM' && hourNum !== 12) {
            hourNum += 12;
        }
        if (amPm === 'AM' && hourNum === 12) {
            hourNum = 0;
        }
        return `${hourNum.toString().padStart(2, '0')}:${minutes.padStart(2, '0')}:00`;
    }
    static { this.ɵfac = function MyScheduleComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MyScheduleComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i3.NewsubjectService), i0.ɵɵdirectiveInject(i4.CommonDataService), i0.ɵɵdirectiveInject(i5.CommonService), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i3.NewsubjectService), i0.ɵɵdirectiveInject(i7.AuthService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i8.ValidationService), i0.ɵɵdirectiveInject(i9.BookService), i0.ɵɵdirectiveInject(i10.ClassService), i0.ɵɵdirectiveInject(i11.DatePipe)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyScheduleComponent, selectors: [["app-my-schedule"]], viewQuery: function MyScheduleComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.customCellTemplate = _t.first);
        } }, inputs: { page: "page" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 2, consts: [["customCellTemplate", ""], ["class", "container-fluid", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid"], [1, "row"], ["class", "col-12 col-sm-6 col-md-4 col-lg-3 form-group", 4, "ngIf"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3", "form-group"], ["bindLabel", "class_name", "bindValue", "class_id", "placeholder", "Select Class", "typeToSearchText", "", 3, "ngModelChange", "change", "items", "ngModel"], ["ng-option-tmp", ""], [1, "col-12", "active2", "p-3"], [1, "row", "d-flex", "justify-content-between"], [1, "col-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 3, "viewDateChange", "ngClass", "view", "viewDate"], ["mwlCalendarToday", "", 3, "viewDateChange", "ngClass", "viewDate"], ["mwlCalendarNextView", "", 3, "viewDateChange", "ngClass", "view", "viewDate"], [1, "col-4", "text-center"], [1, "letter"], [1, "col-md-4", "text-right"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "col-12", "mt-3", 3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "cellTemplate", "dayClicked", "eventClicked", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "dayStartHour", "dayEndHour", "eventClicked", 4, "ngSwitchCase"], ["bindLabel", "teacher_name", "bindValue", "teacher_id", "placeholder", "Select Teacher", "typeToSearchText", "", 3, "ngModelChange", "change", "items", "ngModel"], [3, "title"], [3, "dayClicked", "eventClicked", "viewDate", "events", "refresh", "activeDayIsOpen", "cellTemplate"], [3, "eventClicked", "viewDate", "events", "refresh", "dayStartHour", "dayEndHour"], [1, "cal-cell-top"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["style", "margin: 5px;", 4, "ngIf"], [1, "cal-day-badge"], [2, "margin", "5px"], [4, "ngFor", "ngForOf"], ["class", "letter", 4, "ngIf"]], template: function MyScheduleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MyScheduleComponent_div_0_Template, 32, 26, "div", 1)(1, MyScheduleComponent_div_1_Template, 2, 0, "div", 2)(2, MyScheduleComponent_ng_template_2_Template, 6, 7, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length == 0);
        } }, dependencies: [i11.NgClass, i11.NgForOf, i11.NgIf, i11.NgSwitch, i11.NgSwitchCase, i12.NgControlStatus, i13.NgSelectComponent, i13.NgOptionTemplateDirective, i12.NgModel, i14.ɵCalendarPreviousViewDirective, i14.ɵCalendarNextViewDirective, i14.ɵCalendarTodayDirective, i14.CalendarMonthViewComponent, i14.CalendarWeekViewComponent, i14.CalendarDayViewComponent, i15.EmptyschoolComponent, i14.ɵCalendarDatePipe], styles: [".custom-upload-input[_ngcontent-%COMP%] {\n  color: transparent;\n}\n.custom-upload-input[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input[_ngcontent-%COMP%]::before {\n  content: 'Choose files';\n  color: black;\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n.custom-upload-input[_ngcontent-%COMP%]:hover::before {\n  border-color: black;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active {\n  outline: 0;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n.form-control[readonly][_ngcontent-%COMP%]{\n  background: #fff;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyScheduleComponent, [{
        type: Component,
        args: [{ selector: 'app-my-schedule', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\" *ngIf=\"schoolStatus.length != 0\">\n    <div class=\"row\">\n<!--        <div class=\"col-4 col-lg-2\">-->\n<!--            <h4 class=\"letter\" *ngIf=\"rollId == '2' || rollId == '6'\">Schedule</h4>-->\n<!--            <h4 class=\"letter\" *ngIf=\"rollId == '4'\">My Schedule</h4>-->\n<!--        </div>-->\n        <div class=\"col-12 col-sm-6 col-md-4 col-lg-3 form-group\" *ngIf=\"rollId != '4'\">\n            <ng-select [items]=\"teacherData\"\n                       bindLabel=\"teacher_name\"\n                       bindValue=\"teacher_id\"\n                       [(ngModel)]=\"selectTeacher\"\n                       placeholder=\"Select Teacher\"\n                       typeToSearchText=\"\"\n                       (change)=\"scheduleDetails('teacher')\">\n            </ng-select>\n        </div>\n        <div class=\"col-12 col-sm-6 col-md-4 col-lg-3 form-group\">\n            <ng-select [items]=\"classData\"\n                       bindLabel=\"class_name\"\n                       bindValue=\"class_id\"\n                       [(ngModel)]=\"selectClass\"\n                       placeholder=\"Select Class\"\n                       typeToSearchText=\"\"\n                       (change)=\"scheduleDetails('class')\">\n                <ng-template ng-option-tmp let-item=\"item\">\n                    <div [title]=\"item.class_name\">{{item.class_name}}</div>\n                </ng-template>\n            </ng-select>\n        </div>\n        <div class=\"col-12 active2 p-3\">\n            <div class=\"row d-flex justify-content-between\">\n                <div class=\"col-4\">\n                    <div class=\"btn-group\">\n                        <div [ngClass]=\"currentCalendarshow === 'preview' ? 'btn btn-primary' : 'btn btn-outline-primary'\"\n                             mwlCalendarPreviousView\n                             [view]=\"view\"\n                             [(viewDate)]=\"viewDate\"\n                             (viewDateChange)=\"closeOpenMonthViewDay('preview')\">\n                            Previous\n                        </div>\n                        <div [ngClass]=\"currentCalendarshow === 'today' ? 'btn btn-primary' : 'btn btn-outline-primary'\"\n                             mwlCalendarToday\n                             [(viewDate)]=\"viewDate\"\n                             (viewDateChange)=\"closeOpenMonthViewDay('today')\">\n                            Today\n                        </div>\n                        <div [ngClass]=\"currentCalendarshow === 'next' ? 'btn btn-primary' : 'btn btn-outline-primary'\"\n                             mwlCalendarNextView\n                             [view]=\"view\"\n                             [(viewDate)]=\"viewDate\"\n                             (viewDateChange)=\"closeOpenMonthViewDay('next')\">\n                            Next\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-4 text-center\">\n                    <h3 class=\"letter\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n                </div>\n                <div class=\"col-md-4 text-right\">\n                    <div class=\"btn-group\">\n                        <div class=\"btn btn-outline-primary\"\n                             (click)=\"setView(CalendarView.Month)\"\n                             [class.active]=\"view === CalendarView.Month\">\n                            Month\n                        </div>\n                        <div class=\"btn btn-outline-primary\"\n                             (click)=\"setView(CalendarView.Week)\"\n                             [class.active]=\"view === CalendarView.Week\">\n                            Week\n                        </div>\n                        <div class=\"btn btn-outline-primary\"\n                             (click)=\"setView(CalendarView.Day)\"\n                             [class.active]=\"view === CalendarView.Day\">\n                            Day\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 mt-3\" [ngSwitch]=\"view\">\n                    <mwl-calendar-month-view\n                            *ngSwitchCase=\"CalendarView.Month\"\n                            [@.disabled]=\"true\"\n                            [viewDate]=\"viewDate\"\n                            [events]=\"caelenderEvents\"\n                            [refresh]=\"refresh\"\n                            [activeDayIsOpen]=\"activeDayIsOpen\"\n                            [cellTemplate]=\"customCellTemplate\"\n                            (dayClicked)=\"dayClicked($event.day)\"\n                            (eventClicked)=\"handleEvent('Clicked', $event.event)\">\n                    </mwl-calendar-month-view>\n                    <mwl-calendar-week-view\n                                *ngSwitchCase=\"CalendarView.Week\"\n                                [viewDate]=\"viewDate\"\n                                [events]=\"caelenderDayEvents\"\n                                [refresh]=\"refresh\"\n                                [dayStartHour]=\"8\"\n                                [dayEndHour]=\"20\"\n                                (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                                >\n                    </mwl-calendar-week-view>\n                    <mwl-calendar-day-view\n                                *ngSwitchCase=\"CalendarView.Day\"\n                                [viewDate]=\"viewDate\"\n                                [events]=\"caelenderDayEvents\"\n                                [refresh]=\"refresh\"\n                                [dayStartHour]=\"8\"\n                                [dayEndHour]=\"20\"\n                                (eventClicked)=\"handleEvent('Clicked', $event.event)\">\n                    </mwl-calendar-day-view>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"schoolStatus.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n<ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\n    <div class=\"cal-cell-top\">\n    <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\"\n    >{{ day.badgeTotal }}</span>\n        <span class=\"cal-day-number\">\n            {{ day.date | calendarDate:'monthViewDayNumber':locale }}\n        </span>\n    </div>\n    <small style=\"margin: 5px;\" *ngIf=\"day.events.length >0\">\n        <span *ngFor=\"let item of day.events;let i=index\">\n            <p *ngIf=\"i== 0 || i === 1 || i ==2 \" class=\"letter\">{{item.teacher_name}} : {{item.titleName}} at {{item.slotstarttime + ' ' + item.slotendtime}}{{i != 0 ? ' , ': ''}}</p>\n        </span>\n        <span *ngIf=\"day.events.length > 3\">\n                    {{day.events.length-3 + ' More'}}\n\n        </span>\n    </small>\n</ng-template>\n", styles: [".custom-upload-input {\n  color: transparent;\n}\n.custom-upload-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input::before {\n  content: 'Choose files';\n  color: black;\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n.custom-upload-input:hover::before {\n  border-color: black;\n}\n.custom-upload-input:active {\n  outline: 0;\n}\n.custom-upload-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n.form-control[readonly]{\n  background: #fff;\n}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.NgbModal }, { type: i3.NewsubjectService }, { type: i4.CommonDataService }, { type: i5.CommonService }, { type: i6.ToastrService }, { type: i3.NewsubjectService }, { type: i7.AuthService }, { type: i1.Router }, { type: i8.ValidationService }, { type: i9.BookService }, { type: i10.ClassService }, { type: i11.DatePipe }], { page: [{
            type: Input
        }], customCellTemplate: [{
            type: ViewChild,
            args: ['customCellTemplate', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MyScheduleComponent, { className: "MyScheduleComponent" }); })();
//# sourceMappingURL=my-schedule.component.js.map