import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../shared/service/teacher-availability.service";
import * as i3 from "../../../shared/service/auth.service";
import * as i4 from "../../../shared/service/common.service";
import * as i5 from "../../../shared/service/teacher.service";
import * as i6 from "ngx-toastr";
import * as i7 from "@angular/common";
function TeacherAvailabilityComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1, "View availability across all teachers.");
    i0.ɵɵelementEnd();
} }
function TeacherAvailabilityComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1, "Manage when you are available for 1:1 sessions.");
    i0.ɵɵelementEnd();
} }
function TeacherAvailabilityComponent_section_6_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const teacher_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", teacher_r3.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(teacher_r3.name);
} }
function TeacherAvailabilityComponent_section_6_option_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", day_r4.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(day_r4.label);
} }
function TeacherAvailabilityComponent_section_6_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 11)(1, "form", 12);
    i0.ɵɵlistener("ngSubmit", function TeacherAvailabilityComponent_section_6_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.applyFilters()); });
    i0.ɵɵelementStart(2, "div", 13)(3, "div", 14)(4, "label", 15);
    i0.ɵɵtext(5, "Teacher");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "select", 16)(7, "option", 17);
    i0.ɵɵtext(8, "All Teachers");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, TeacherAvailabilityComponent_section_6_option_9_Template, 2, 2, "option", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 14)(11, "label", 19);
    i0.ɵɵtext(12, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "select", 20)(14, "option", 17);
    i0.ɵɵtext(15, "All Days");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, TeacherAvailabilityComponent_section_6_option_16_Template, 2, 2, "option", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 14)(18, "label", 21);
    i0.ɵɵtext(19, "Start Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "input", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 14)(22, "label", 23);
    i0.ɵɵtext(23, "End Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(24, "input", 24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 25)(26, "button", 26);
    i0.ɵɵtext(27, "Apply Filters");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 27);
    i0.ɵɵlistener("click", function TeacherAvailabilityComponent_section_6_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clearFilters()); });
    i0.ɵɵtext(29, "Clear");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.filterForm);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r1.teacherOptions);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r1.dayOptions);
} }
function TeacherAvailabilityComponent_section_7_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "label", 47);
    i0.ɵɵtext(2, "Date");
    i0.ɵɵelementStart(3, "span", 36);
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "input", 48);
    i0.ɵɵelementEnd();
} }
function TeacherAvailabilityComponent_section_7_div_9_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", day_r6.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(day_r6.label);
} }
function TeacherAvailabilityComponent_section_7_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "label", 19);
    i0.ɵɵtext(2, "Day of Week");
    i0.ɵɵelementStart(3, "span", 36);
    i0.ɵɵtext(4, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "select", 20);
    i0.ɵɵtemplate(6, TeacherAvailabilityComponent_section_7_div_9_option_6_Template, 2, 2, "option", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.dayOptions);
} }
function TeacherAvailabilityComponent_section_7_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "label", 49);
    i0.ɵɵtext(2, "Repeat Until");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 50);
    i0.ɵɵelementEnd();
} }
function TeacherAvailabilityComponent_section_7_option_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r7.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r7.label);
} }
function TeacherAvailabilityComponent_section_7_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function TeacherAvailabilityComponent_section_7_button_41_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cancelEdit()); });
    i0.ɵɵtext(1, "Cancel");
    i0.ɵɵelementEnd();
} }
function TeacherAvailabilityComponent_section_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 29)(1, "form", 30);
    i0.ɵɵlistener("ngSubmit", function TeacherAvailabilityComponent_section_7_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitAvailability()); });
    i0.ɵɵelementStart(2, "div", 13)(3, "div", 31)(4, "label", 32);
    i0.ɵɵelement(5, "input", 33);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Recurring weekly availability");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(8, TeacherAvailabilityComponent_section_7_div_8_Template, 6, 0, "div", 34)(9, TeacherAvailabilityComponent_section_7_div_9_Template, 7, 1, "div", 34)(10, TeacherAvailabilityComponent_section_7_div_10_Template, 4, 0, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 13)(12, "div", 14)(13, "label", 35);
    i0.ɵɵtext(14, "Start Time");
    i0.ɵɵelementStart(15, "span", 36);
    i0.ɵɵtext(16, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(17, "input", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 14)(19, "label", 38);
    i0.ɵɵtext(20, "End Time");
    i0.ɵɵelementStart(21, "span", 36);
    i0.ɵɵtext(22, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(23, "input", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 14)(25, "label", 40);
    i0.ɵɵtext(26, "Timezone");
    i0.ɵɵelementStart(27, "span", 36);
    i0.ɵɵtext(28, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "select", 41)(30, "option", 42);
    i0.ɵɵtext(31, "Select timezone");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(32, TeacherAvailabilityComponent_section_7_option_32_Template, 2, 2, "option", 18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "div", 13)(34, "div", 14)(35, "label", 43);
    i0.ɵɵtext(36, "Notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(37, "textarea", 44);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 25)(39, "button", 45);
    i0.ɵɵtext(40);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(41, TeacherAvailabilityComponent_section_7_button_41_Template, 2, 0, "button", 46);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.availabilityForm);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", !((tmp_2_0 = ctx_r1.availabilityForm.get("is_recurring")) == null ? null : tmp_2_0.value));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_3_0 = ctx_r1.availabilityForm.get("is_recurring")) == null ? null : tmp_3_0.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_4_0 = ctx_r1.availabilityForm.get("is_recurring")) == null ? null : tmp_4_0.value);
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("ngForOf", ctx_r1.timezoneOptions);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("disabled", ctx_r1.isSubmitting);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.editingId ? "Update Availability" : "Add Availability", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.editingId);
} }
function TeacherAvailabilityComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 51);
    i0.ɵɵtext(1, "Loading\u2026");
    i0.ɵɵelementEnd();
} }
function TeacherAvailabilityComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 51);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.availability.length, " entries");
} }
function TeacherAvailabilityComponent_div_14_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Use the form above to add your first block.");
    i0.ɵɵelementEnd();
} }
function TeacherAvailabilityComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52)(1, "p");
    i0.ɵɵtext(2, "No availability configured yet.");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, TeacherAvailabilityComponent_div_14_p_3_Template, 2, 0, "p", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.isAdmin);
} }
function TeacherAvailabilityComponent_table_15_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Teacher");
    i0.ɵɵelementEnd();
} }
function TeacherAvailabilityComponent_table_15_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 57);
    i0.ɵɵtext(1, "Actions");
    i0.ɵɵelementEnd();
} }
function TeacherAvailabilityComponent_table_15_tr_16_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.teacherName(entry_r9));
} }
function TeacherAvailabilityComponent_table_15_tr_16_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 57)(1, "button", 58);
    i0.ɵɵlistener("click", function TeacherAvailabilityComponent_table_15_tr_16_td_13_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r10); const entry_r9 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startEdit(entry_r9)); });
    i0.ɵɵtext(2, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 59);
    i0.ɵɵlistener("click", function TeacherAvailabilityComponent_table_15_tr_16_td_13_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r10); const entry_r9 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteAvailability(entry_r9)); });
    i0.ɵɵtext(4, "Delete");
    i0.ɵɵelementEnd()();
} }
function TeacherAvailabilityComponent_table_15_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, TeacherAvailabilityComponent_table_15_tr_16_td_1_Template, 2, 1, "td", 53);
    i0.ɵɵelementStart(2, "td");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, TeacherAvailabilityComponent_table_15_tr_16_td_13_Template, 5, 0, "td", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r9 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isAdmin);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.displayType(entry_r9));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.displaySchedule(entry_r9));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.getTimezoneLabel(entry_r9.timezone));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r9.notes || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(12, 7, entry_r9.updated_at || entry_r9.created_at, "medium"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isAdmin);
} }
function TeacherAvailabilityComponent_table_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 54)(1, "thead")(2, "tr");
    i0.ɵɵtemplate(3, TeacherAvailabilityComponent_table_15_th_3_Template, 2, 0, "th", 53);
    i0.ɵɵelementStart(4, "th");
    i0.ɵɵtext(5, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Timezone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Last Updated");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, TeacherAvailabilityComponent_table_15_th_14_Template, 2, 0, "th", 55);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "tbody");
    i0.ɵɵtemplate(16, TeacherAvailabilityComponent_table_15_tr_16_Template, 14, 10, "tr", 56);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.isAdmin);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", !ctx_r1.isAdmin);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.availability)("ngForTrackBy", ctx_r1.trackById);
} }
export class TeacherAvailabilityComponent {
    constructor(fb, availabilityService, auth, commonService, teacherService, toastr) {
        this.fb = fb;
        this.availabilityService = availabilityService;
        this.auth = auth;
        this.commonService = commonService;
        this.teacherService = teacherService;
        this.toastr = toastr;
        this.availability = [];
        this.teacherOptions = [];
        this.timezoneOptions = [];
        this.timezoneLabelMap = new Map();
        this.dayOptions = [
            { label: 'Monday', value: 'Mon' },
            { label: 'Tuesday', value: 'Tue' },
            { label: 'Wednesday', value: 'Wed' },
            { label: 'Thursday', value: 'Thu' },
            { label: 'Friday', value: 'Fri' },
            { label: 'Saturday', value: 'Sat' },
            { label: 'Sunday', value: 'Sun' }
        ];
        this.isAdmin = false;
        this.isLoading = false;
        this.isSubmitting = false;
        this.editingId = null;
        this.subscriptions = [];
        this.availabilityForm = this.fb.group({
            is_recurring: [false],
            date: [''],
            day_of_week: ['Mon'],
            start_time: ['', Validators.required],
            end_time: ['', Validators.required],
            timezone: ['', Validators.required],
            recurrence_end: [''],
            notes: ['']
        });
        this.filterForm = this.fb.group({
            teacher_id: [''],
            day_of_week: [''],
            start_date: [''],
            end_date: ['']
        });
    }
    ngOnInit() {
        this.isAdmin = this.auth.getRoleId() === '2';
        this.handleRecurringToggle();
        this.loadTimezones();
        if (this.isAdmin) {
            this.loadTeachers();
        }
        this.refreshAvailability();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    refreshAvailability() {
        this.isLoading = true;
        if (this.isAdmin) {
            const filters = this.sanitizeFilters(this.filterForm.value);
            const sub = this.availabilityService.adminList(filters).subscribe({
                next: (items) => {
                    this.availability = items || [];
                    this.isLoading = false;
                },
                error: (err) => {
                    this.isLoading = false;
                    this.toastr.error(this.resolveError(err), 'Failed to load availability');
                }
            });
            this.subscriptions.push(sub);
        }
        else {
            const sub = this.availabilityService.list().subscribe({
                next: (items) => {
                    this.availability = items || [];
                    this.isLoading = false;
                },
                error: (err) => {
                    this.isLoading = false;
                    this.toastr.error(this.resolveError(err), 'Failed to load availability');
                }
            });
            this.subscriptions.push(sub);
        }
    }
    submitAvailability() {
        if (this.isAdmin) {
            return;
        }
        this.markFormTouched();
        if (!this.availabilityForm.valid) {
            this.toastr.error('Please complete all required fields.', 'Validation error');
            return;
        }
        const payload = this.buildPayload();
        if (!payload) {
            return;
        }
        this.isSubmitting = true;
        const request$ = this.editingId
            ? this.availabilityService.update(this.editingId, payload)
            : this.availabilityService.create(payload);
        const sub = request$.subscribe({
            next: () => {
                this.isSubmitting = false;
                this.toastr.success('Availability saved successfully.');
                this.resetForm();
                this.refreshAvailability();
            },
            error: (err) => {
                this.isSubmitting = false;
                this.toastr.error(this.resolveError(err), 'Unable to save availability');
            }
        });
        this.subscriptions.push(sub);
    }
    startEdit(entry) {
        if (this.isAdmin) {
            return;
        }
        this.editingId = entry.id;
        this.availabilityForm.patchValue({
            is_recurring: entry.is_recurring === 1,
            date: entry.date ?? '',
            day_of_week: entry.day_of_week ?? 'Mon',
            start_time: this.formatTimeForInput(entry.start_time_local),
            end_time: this.formatTimeForInput(entry.end_time_local),
            timezone: entry.timezone,
            recurrence_end: entry.recurrence_end ?? '',
            notes: entry.notes ?? ''
        });
    }
    cancelEdit() {
        this.resetForm();
    }
    deleteAvailability(entry) {
        if (this.isAdmin) {
            return;
        }
        if (!confirm('Remove this availability block?')) {
            return;
        }
        const sub = this.availabilityService.remove(entry.id).subscribe({
            next: () => {
                this.toastr.success('Availability removed.');
                this.refreshAvailability();
            },
            error: (err) => this.toastr.error(this.resolveError(err), 'Unable to remove availability')
        });
        this.subscriptions.push(sub);
    }
    applyFilters() {
        if (!this.isAdmin) {
            return;
        }
        this.refreshAvailability();
    }
    clearFilters() {
        if (!this.isAdmin) {
            return;
        }
        this.filterForm.reset({ teacher_id: '', day_of_week: '', start_date: '', end_date: '' });
        this.refreshAvailability();
    }
    getTimezoneLabel(value) {
        return this.timezoneLabelMap.get(value) || value;
    }
    displayType(entry) {
        return entry.is_recurring ? 'Recurring' : 'Specific Date';
    }
    displaySchedule(entry) {
        if (entry.is_recurring) {
            const dayLabel = this.dayOptions.find(d => d.value === entry.day_of_week)?.label || entry.day_of_week;
            const start = this.formatTime(entry.start_time_local, entry.timezone);
            const end = this.formatTime(entry.end_time_local, entry.timezone, entry.spans_midnight === 1);
            const range = this.buildRecurrenceRange(entry);
            return `${dayLabel} • ${start} - ${end}${range}`;
        }
        const date = entry.date ? new Date(entry.date) : null;
        const formattedDate = date ? date.toLocaleDateString() : '—';
        const start = this.formatTime(entry.start_time_local, entry.timezone);
        const end = this.formatTime(entry.end_time_local, entry.timezone, entry.spans_midnight === 1);
        return `${formattedDate} • ${start} - ${end}`;
    }
    teacherName(entry) {
        if (!this.isAdmin) {
            return '';
        }
        const parts = [entry.first_name, entry.last_name].filter(Boolean);
        return parts.join(' ');
    }
    trackById(index, entry) {
        return entry.id;
    }
    loadTimezones() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        const sub = this.commonService.timeZone(data).subscribe({
            next: (response) => {
                if (response.IsSuccess) {
                    this.timezoneOptions = (response.ResponseObject || []).map(option => {
                        const label = option.time_zone || option.name || option.label;
                        const value = this.extractTimezoneValue(label);
                        this.timezoneLabelMap.set(value, label);
                        return { id: option.id, label, value };
                    });
                    const defaultTimezone = this.auth.getSessionData('time_zone') || this.timezoneOptions[0]?.value;
                    if (defaultTimezone) {
                        this.availabilityForm.patchValue({ timezone: this.extractTimezoneValue(defaultTimezone) });
                    }
                }
            },
            error: () => {
                this.toastr.warning('Unable to load time zones. Defaulting to UTC.', 'Timezone');
                this.timezoneOptions = [{ id: 'UTC', label: 'UTC', value: 'UTC' }];
                this.timezoneLabelMap.set('UTC', 'UTC');
                this.availabilityForm.patchValue({ timezone: 'UTC' });
            }
        });
        this.subscriptions.push(sub);
    }
    loadTeachers() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        const sub = this.teacherService.teacherList(payload).subscribe({
            next: (response) => {
                if (response.IsSuccess) {
                    this.teacherOptions = (response.ResponseObject || []).map(item => ({
                        id: item.user_id,
                        name: `${item.first_name || ''} ${item.last_name || ''}`.trim() || item.email_id
                    }));
                }
            },
            error: () => this.toastr.warning('Unable to load teacher list.', 'Teacher Availability')
        });
        this.subscriptions.push(sub);
    }
    buildPayload() {
        const raw = this.availabilityForm.value;
        const isRecurring = !!raw.is_recurring;
        if (!isRecurring && !raw.date) {
            this.toastr.error('Select a date for this availability block.', 'Validation error');
            return null;
        }
        if (isRecurring && !raw.day_of_week) {
            this.toastr.error('Select a day of week for recurring availability.', 'Validation error');
            return null;
        }
        const payload = {
            start_time: raw.start_time,
            end_time: raw.end_time,
            timezone: raw.timezone,
            is_recurring: isRecurring ? 1 : 0,
            notes: raw.notes?.trim() || null
        };
        if (isRecurring) {
            payload.day_of_week = raw.day_of_week;
            payload.date = raw.date || null;
            payload.recurrence_end = raw.recurrence_end || null;
        }
        else {
            payload.date = raw.date;
            payload.recurrence_end = null;
            payload.day_of_week = null;
        }
        return payload;
    }
    sanitizeFilters(filters) {
        const cleaned = {};
        Object.keys(filters || {}).forEach(key => {
            const value = filters[key];
            if (value !== undefined && value !== null && value !== '') {
                cleaned[key] = value;
            }
        });
        return cleaned;
    }
    markFormTouched() {
        Object.keys(this.availabilityForm.controls).forEach(control => {
            this.availabilityForm.get(control)?.markAsTouched();
        });
    }
    resetForm() {
        this.editingId = null;
        this.availabilityForm.reset({
            is_recurring: false,
            date: '',
            day_of_week: 'Mon',
            start_time: '',
            end_time: '',
            timezone: this.availabilityForm.get('timezone')?.value || (this.timezoneOptions[0]?.value || 'UTC'),
            recurrence_end: '',
            notes: ''
        });
    }
    handleRecurringToggle() {
        const control = this.availabilityForm.get('is_recurring');
        if (!control) {
            return;
        }
        this.applyRecurringValidators(!!control.value);
        const sub = control.valueChanges.subscribe((isRecurring) => {
            this.applyRecurringValidators(!!isRecurring);
        });
        this.subscriptions.push(sub);
    }
    applyRecurringValidators(isRecurring) {
        const dateCtrl = this.availabilityForm.get('date');
        const dayCtrl = this.availabilityForm.get('day_of_week');
        if (isRecurring) {
            dateCtrl?.clearValidators();
            dayCtrl?.setValidators([Validators.required]);
        }
        else {
            dayCtrl?.clearValidators();
            dateCtrl?.setValidators([Validators.required]);
        }
        dateCtrl?.updateValueAndValidity();
        dayCtrl?.updateValueAndValidity();
    }
    formatTime(time, timezone, spansMidnight = false) {
        if (!time) {
            return '—';
        }
        const truncated = this.formatTimeForInput(time);
        return spansMidnight ? `${truncated} (+1 day)` : truncated;
    }
    formatTimeForInput(time) {
        return time ? time.slice(0, 5) : '';
    }
    buildRecurrenceRange(entry) {
        if (!entry.date && !entry.recurrence_end) {
            return '';
        }
        const start = entry.date ? new Date(entry.date).toLocaleDateString() : 'from now';
        const end = entry.recurrence_end ? new Date(entry.recurrence_end).toLocaleDateString() : 'no end date';
        return ` • ${start} → ${end}`;
    }
    extractTimezoneValue(label) {
        if (!label) {
            return 'UTC';
        }
        const parenMatch = label.match(/\(([^)]+)\)/);
        if (parenMatch && parenMatch[1]) {
            return parenMatch[1].trim();
        }
        if (label.includes('-')) {
            return label.split('-').pop()?.trim() || label.trim();
        }
        return label.trim();
    }
    resolveError(error) {
        if (!error) {
            return 'Unexpected error';
        }
        if (typeof error === 'string') {
            return error;
        }
        if (error.error) {
            if (typeof error.error === 'string') {
                return error.error;
            }
            if (error.error?.ErrorObject) {
                return error.error.ErrorObject;
            }
            if (error.error?.message) {
                return error.error.message;
            }
        }
        return error.message || 'Unexpected error';
    }
    static { this.ɵfac = function TeacherAvailabilityComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TeacherAvailabilityComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.TeacherAvailabilityService), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.CommonService), i0.ɵɵdirectiveInject(i5.TeacherService), i0.ɵɵdirectiveInject(i6.ToastrService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TeacherAvailabilityComponent, selectors: [["app-teacher-availability"]], decls: 16, vars: 8, consts: [[1, "availability-wrapper"], [1, "page-header"], ["class", "subheading", 4, "ngIf"], ["class", "card filter-card", 4, "ngIf"], ["class", "card form-card", 4, "ngIf"], [1, "card", "table-card"], [1, "card-header"], ["class", "status", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "table table-striped", 4, "ngIf"], [1, "subheading"], [1, "card", "filter-card"], [1, "filter-form", 3, "ngSubmit", "formGroup"], [1, "row"], [1, "col"], ["for", "teacher_id"], ["id", "teacher_id", "formControlName", "teacher_id", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "day_of_week"], ["id", "day_of_week", "formControlName", "day_of_week", 1, "form-control"], ["for", "start_date"], ["id", "start_date", "type", "date", "formControlName", "start_date", 1, "form-control"], ["for", "end_date"], ["id", "end_date", "type", "date", "formControlName", "end_date", 1, "form-control"], [1, "actions"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [3, "value"], [1, "card", "form-card"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "col", "col-toggle"], [1, "checkbox"], ["type", "checkbox", "formControlName", "is_recurring"], ["class", "col", 4, "ngIf"], ["for", "start_time"], [1, "required"], ["id", "start_time", "type", "time", "formControlName", "start_time", "required", "", 1, "form-control"], ["for", "end_time"], ["id", "end_time", "type", "time", "formControlName", "end_time", "required", "", 1, "form-control"], ["for", "timezone"], ["id", "timezone", "formControlName", "timezone", "required", "", 1, "form-control"], ["value", "", "disabled", ""], ["for", "notes"], ["id", "notes", "rows", "2", "formControlName", "notes", "placeholder", "Optional context (e.g. Zoom prep time)", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", "class", "btn btn-light", 3, "click", 4, "ngIf"], ["for", "date"], ["id", "date", "type", "date", "formControlName", "date", "required", "", 1, "form-control"], ["for", "recurrence_end"], ["id", "recurrence_end", "type", "date", "formControlName", "recurrence_end", 1, "form-control"], [1, "status"], [1, "empty-state"], [4, "ngIf"], [1, "table", "table-striped"], ["class", "actions-col", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "actions-col"], ["type", "button", 1, "btn", "btn-link", 3, "click"], ["type", "button", 1, "btn", "btn-link", "text-danger", 3, "click"]], template: function TeacherAvailabilityComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h3");
            i0.ɵɵtext(3, "Teacher Availability");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, TeacherAvailabilityComponent_p_4_Template, 2, 0, "p", 2)(5, TeacherAvailabilityComponent_p_5_Template, 2, 0, "p", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, TeacherAvailabilityComponent_section_6_Template, 30, 3, "section", 3)(7, TeacherAvailabilityComponent_section_7_Template, 42, 8, "section", 4);
            i0.ɵɵelementStart(8, "section", 5)(9, "div", 6)(10, "h4");
            i0.ɵɵtext(11, "Availability Blocks");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, TeacherAvailabilityComponent_span_12_Template, 2, 0, "span", 7)(13, TeacherAvailabilityComponent_span_13_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(14, TeacherAvailabilityComponent_div_14_Template, 4, 1, "div", 8)(15, TeacherAvailabilityComponent_table_15_Template, 17, 4, "table", 9);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.isAdmin);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isAdmin);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isAdmin);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isAdmin);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.isLoading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isLoading && ctx.availability.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isLoading && !ctx.availability.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.availability.length);
        } }, dependencies: [i7.NgForOf, i7.NgIf, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.FormGroupDirective, i1.FormControlName, i7.DatePipe], styles: [".availability-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  h3 {\n    margin: 0;\n    font-weight: 600;\n  }\n\n  .subheading {\n    margin: 0.25rem 0 0;\n    color: #6c757d;\n  }\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);\n}\n\n.filter-form[_ngcontent-%COMP%], \nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n}\n\n.col-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 500;\n  display: block;\n  margin-bottom: 0.25rem;\n}\n\n.required[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  margin-left: 0.25rem;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n\n  input[type='checkbox'] {\n    width: 1rem;\n    height: 1rem;\n  }\n}\n\n.form-control[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.5rem;\n  border: 1px solid #cbd5e1;\n  font-size: 0.95rem;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n}\n\n.table-card[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 0.5rem;\n\n  th,\n  td {\n    padding: 0.75rem 0.5rem;\n    text-align: left;\n    border-bottom: 1px solid #eef2f7;\n    vertical-align: top;\n  }\n\n  th {\n    font-weight: 600;\n    color: #475569;\n  }\n\n  tbody tr:hover {\n    background: #f8fafc;\n  }\n}\n\n.actions-col[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.status[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n  padding: 1.5rem 0;\n}\n\n@media (max-width: 600px) {\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .actions-col[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 0.5rem;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TeacherAvailabilityComponent, [{
        type: Component,
        args: [{ selector: 'app-teacher-availability', template: "<div class=\"availability-wrapper\">\n  <div class=\"page-header\">\n    <h3>Teacher Availability</h3>\n    <p class=\"subheading\" *ngIf=\"isAdmin\">View availability across all teachers.</p>\n    <p class=\"subheading\" *ngIf=\"!isAdmin\">Manage when you are available for 1:1 sessions.</p>\n  </div>\n\n  <section *ngIf=\"isAdmin\" class=\"card filter-card\">\n    <form [formGroup]=\"filterForm\" (ngSubmit)=\"applyFilters()\" class=\"filter-form\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <label for=\"teacher_id\">Teacher</label>\n          <select id=\"teacher_id\" class=\"form-control\" formControlName=\"teacher_id\">\n            <option value=\"\">All Teachers</option>\n            <option *ngFor=\"let teacher of teacherOptions\" [value]=\"teacher.id\">{{ teacher.name }}</option>\n          </select>\n        </div>\n        <div class=\"col\">\n          <label for=\"day_of_week\">Day</label>\n          <select id=\"day_of_week\" class=\"form-control\" formControlName=\"day_of_week\">\n            <option value=\"\">All Days</option>\n            <option *ngFor=\"let day of dayOptions\" [value]=\"day.value\">{{ day.label }}</option>\n          </select>\n        </div>\n        <div class=\"col\">\n          <label for=\"start_date\">Start Date</label>\n          <input id=\"start_date\" type=\"date\" class=\"form-control\" formControlName=\"start_date\">\n        </div>\n        <div class=\"col\">\n          <label for=\"end_date\">End Date</label>\n          <input id=\"end_date\" type=\"date\" class=\"form-control\" formControlName=\"end_date\">\n        </div>\n      </div>\n      <div class=\"actions\">\n        <button type=\"submit\" class=\"btn btn-primary\">Apply Filters</button>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"clearFilters()\">Clear</button>\n      </div>\n    </form>\n  </section>\n\n  <section *ngIf=\"!isAdmin\" class=\"card form-card\">\n    <form [formGroup]=\"availabilityForm\" (ngSubmit)=\"submitAvailability()\" novalidate>\n      <div class=\"row\">\n        <div class=\"col col-toggle\">\n          <label class=\"checkbox\">\n            <input type=\"checkbox\" formControlName=\"is_recurring\">\n            <span>Recurring weekly availability</span>\n          </label>\n        </div>\n        <div class=\"col\" *ngIf=\"!(availabilityForm.get('is_recurring')?.value)\">\n          <label for=\"date\">Date<span class=\"required\">*</span></label>\n          <input id=\"date\" type=\"date\" class=\"form-control\" formControlName=\"date\" required>\n        </div>\n        <div class=\"col\" *ngIf=\"availabilityForm.get('is_recurring')?.value\">\n          <label for=\"day_of_week\">Day of Week<span class=\"required\">*</span></label>\n          <select id=\"day_of_week\" class=\"form-control\" formControlName=\"day_of_week\">\n            <option *ngFor=\"let day of dayOptions\" [value]=\"day.value\">{{ day.label }}</option>\n          </select>\n        </div>\n        <div class=\"col\" *ngIf=\"availabilityForm.get('is_recurring')?.value\">\n          <label for=\"recurrence_end\">Repeat Until</label>\n          <input id=\"recurrence_end\" type=\"date\" class=\"form-control\" formControlName=\"recurrence_end\">\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col\">\n          <label for=\"start_time\">Start Time<span class=\"required\">*</span></label>\n          <input id=\"start_time\" type=\"time\" class=\"form-control\" formControlName=\"start_time\" required>\n        </div>\n        <div class=\"col\">\n          <label for=\"end_time\">End Time<span class=\"required\">*</span></label>\n          <input id=\"end_time\" type=\"time\" class=\"form-control\" formControlName=\"end_time\" required>\n        </div>\n        <div class=\"col\">\n          <label for=\"timezone\">Timezone<span class=\"required\">*</span></label>\n          <select id=\"timezone\" class=\"form-control\" formControlName=\"timezone\" required>\n            <option value=\"\" disabled>Select timezone</option>\n            <option *ngFor=\"let item of timezoneOptions\" [value]=\"item.value\">{{ item.label }}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col\">\n          <label for=\"notes\">Notes</label>\n          <textarea id=\"notes\" rows=\"2\" class=\"form-control\" formControlName=\"notes\" placeholder=\"Optional context (e.g. Zoom prep time)\"></textarea>\n        </div>\n      </div>\n\n      <div class=\"actions\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isSubmitting\">\n          {{ editingId ? 'Update Availability' : 'Add Availability' }}\n        </button>\n        <button type=\"button\" class=\"btn btn-light\" *ngIf=\"editingId\" (click)=\"cancelEdit()\">Cancel</button>\n      </div>\n    </form>\n  </section>\n\n  <section class=\"card table-card\">\n    <div class=\"card-header\">\n      <h4>Availability Blocks</h4>\n      <span *ngIf=\"isLoading\" class=\"status\">Loading\u2026</span>\n      <span *ngIf=\"!isLoading && availability.length\" class=\"status\">{{ availability.length }} entries</span>\n    </div>\n\n    <div *ngIf=\"!isLoading && !availability.length\" class=\"empty-state\">\n      <p>No availability configured yet.</p>\n      <p *ngIf=\"!isAdmin\">Use the form above to add your first block.</p>\n    </div>\n\n    <table *ngIf=\"availability.length\" class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th *ngIf=\"isAdmin\">Teacher</th>\n        <th>Type</th>\n        <th>Schedule</th>\n        <th>Timezone</th>\n        <th>Notes</th>\n        <th>Last Updated</th>\n        <th *ngIf=\"!isAdmin\" class=\"actions-col\">Actions</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let entry of availability; trackBy: trackById\">\n        <td *ngIf=\"isAdmin\">{{ teacherName(entry) }}</td>\n        <td>{{ displayType(entry) }}</td>\n        <td>{{ displaySchedule(entry) }}</td>\n        <td>{{ getTimezoneLabel(entry.timezone) }}</td>\n        <td>{{ entry.notes || '\u2014' }}</td>\n        <td>{{ (entry.updated_at || entry.created_at) | date:'medium' }}</td>\n        <td *ngIf=\"!isAdmin\" class=\"actions-col\">\n          <button type=\"button\" class=\"btn btn-link\" (click)=\"startEdit(entry)\">Edit</button>\n          <button type=\"button\" class=\"btn btn-link text-danger\" (click)=\"deleteAvailability(entry)\">Delete</button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </section>\n</div>\n", styles: [".availability-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.page-header {\n  h3 {\n    margin: 0;\n    font-weight: 600;\n  }\n\n  .subheading {\n    margin: 0.25rem 0 0;\n    color: #6c757d;\n  }\n}\n\n.card {\n  padding: 1.25rem;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);\n}\n\n.filter-form,\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.row {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n}\n\n.col-toggle {\n  display: flex;\n  align-items: center;\n}\n\nlabel {\n  font-weight: 500;\n  display: block;\n  margin-bottom: 0.25rem;\n}\n\n.required {\n  color: #d32f2f;\n  margin-left: 0.25rem;\n}\n\n.checkbox {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n\n  input[type='checkbox'] {\n    width: 1rem;\n    height: 1rem;\n  }\n}\n\n.form-control,\nselect,\ntextarea {\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.5rem;\n  border: 1px solid #cbd5e1;\n  font-size: 0.95rem;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n.actions {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.btn {\n  padding: 0.5rem 1.25rem;\n  border-radius: 0.5rem;\n  font-weight: 500;\n}\n\n.table-card {\n  overflow-x: auto;\n}\n\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 0.5rem;\n\n  th,\n  td {\n    padding: 0.75rem 0.5rem;\n    text-align: left;\n    border-bottom: 1px solid #eef2f7;\n    vertical-align: top;\n  }\n\n  th {\n    font-weight: 600;\n    color: #475569;\n  }\n\n  tbody tr:hover {\n    background: #f8fafc;\n  }\n}\n\n.actions-col {\n  white-space: nowrap;\n}\n\n.status {\n  font-size: 0.85rem;\n  color: #64748b;\n}\n\n.empty-state {\n  text-align: center;\n  color: #6c757d;\n  padding: 1.5rem 0;\n}\n\n@media (max-width: 600px) {\n  .actions {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .actions-col {\n    display: flex;\n    gap: 0.5rem;\n  }\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.TeacherAvailabilityService }, { type: i3.AuthService }, { type: i4.CommonService }, { type: i5.TeacherService }, { type: i6.ToastrService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TeacherAvailabilityComponent, { className: "TeacherAvailabilityComponent" }); })();
//# sourceMappingURL=teacher-availability.component.js.map