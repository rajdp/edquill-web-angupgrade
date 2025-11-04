import { Component, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { NewsubjectService } from '../../../shared/service/newsubject.service';
import { AuthService } from '../../../shared/service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { dateOptions, timeZone } from '../../../shared/data/config';
import { ValidationService } from '../../../shared/service/validation.service';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@nodro7/angular-mydatepicker";
function GlobalAnnouncementAddComponent_em_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 32);
    i0.ɵɵtext(1, "Title is required");
    i0.ɵɵelementEnd();
} }
function GlobalAnnouncementAddComponent_em_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 32);
    i0.ɵɵtext(1, "Description is required");
    i0.ɵɵelementEnd();
} }
function GlobalAnnouncementAddComponent_em_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 32);
    i0.ɵɵtext(1, "From Date is required");
    i0.ɵɵelementEnd();
} }
function GlobalAnnouncementAddComponent_em_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 32);
    i0.ɵɵtext(1, "To Date is required");
    i0.ɵɵelementEnd();
} }
function GlobalAnnouncementAddComponent_option_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 33);
    i0.ɵɵtext(1, "Deleted");
    i0.ɵɵelementEnd();
} }
function GlobalAnnouncementAddComponent_em_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 32);
    i0.ɵɵtext(1, "Status is required");
    i0.ɵɵelementEnd();
} }
export class GlobalAnnouncementAddComponent {
    constructor(formBuilder, route) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.newSubject = inject(NewsubjectService);
        this.auth = inject(AuthService);
        this.router = inject(Router);
        this.toastr = inject(ToastrService);
        this.validation = inject(ValidationService);
        this.type = 'add';
        this.datePipe = inject(DatePipe);
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.myDpOptions = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat,
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getMonth() + 1 : new Date(this.setDate).getMonth(),
                day: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getDate() - 1 : new Date(this.setDate).getMonth() === (1 || 3 || 5 || 7 || 8 || 10 || 12) ? 31 : new Date(this.setDate).getMonth() === 2 ? 28 : 30,
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
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.newSubject.allowSchoolChange(true);
        this.announcementForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            fromDate: ['', Validators.required],
            toDate: ['', Validators.required],
            status: ['1', Validators.required],
            schoolId: '',
        });
    }
    ngOnInit() {
        if (this.type == 'edit') {
            this.editData = JSON.parse(this.auth.getSessionData('edit_global_announcement'));
            this.announcementForm.controls.title.patchValue(this.editData.title);
            this.announcementForm.controls.description.patchValue(this.editData.description);
            this.announcementForm.controls.status.patchValue(this.editData.status);
            if (this.editData.from_date != '0000-00-00') {
                const sd = this.editData.from_date.split('-');
                const sdObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                    dateRange: null
                };
                this.announcementForm.controls.fromDate.patchValue(sdObject);
                console.log(this.announcementForm.controls.fromDate.value, 'fromDate');
                this.myDpOptions1 = {};
                this.myDpOptions1 = {
                    dateRange: false,
                    dateFormat: dateOptions.pickerFormat,
                    firstDayOfWeek: 'su',
                    disableUntil: {
                        year: parseInt(sd[0]),
                        month: parseInt(sd[1]),
                        day: parseInt(sd[2]) - 1
                    },
                };
            }
            else {
                this.announcementForm.controls.fromDate.patchValue(null);
            }
            if (this.editData.to_date != '0000-00-00') {
                const ed = this.editData.to_date.split('-');
                const edObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(ed[0]), parseInt(ed[1]) - 1, parseInt(ed[2])) },
                    dateRange: null
                };
                this.announcementForm.controls.toDate.patchValue(edObject);
            }
            else {
                this.announcementForm.controls.toDate.patchValue(null);
            }
        }
    }
    ngOnDestroy() {
        this.newSubject.allowSchoolChange(false);
    }
    onDateChanged(event) {
        this.myDpOptions1 = {};
        this.myDpOptions1 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat,
            disableUntil: {
                year: event.singleDate.date.year,
                month: event.singleDate.date.month,
                day: event.singleDate.date.day - 1
            },
        };
    }
    addOrEditSubjectService() {
        if (this.announcementForm.valid) {
            const payload = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                title: this.announcementForm.controls.title.value,
                description: this.announcementForm.controls.description.value,
                from_date: !this.announcementForm.controls.fromDate.value ? '' : this.datePipe.transform(this.announcementForm.controls.fromDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                to_date: !this.announcementForm.controls.toDate.value ? '' : this.datePipe.transform(this.announcementForm.controls.toDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                status: this.announcementForm.controls.status.value
            };
            this.type == 'edit' ? payload['id'] = this.editData.id : '';
            console.log(payload, 'payload');
            this.auth.postService(payload, this.type == 'add' ? 'school/addAnnouncement' : 'school/editAnnouncement').subscribe((successData) => {
                console.log(successData, 'successData');
                if (successData.IsSuccess) {
                    this.router.navigate(['global-announcement/list']);
                    this.toastr.success(successData.ResponseObject);
                }
                else {
                    this.toastr.error(successData.ErrorObject);
                }
            }, (error) => console.error(error, 'error'));
        }
        else {
            this.toastr.error('Please Fill all the mandatory Fields');
            this.validation.validateAllFormFields(this.announcementForm);
        }
    }
    static { this.ɵfac = function GlobalAnnouncementAddComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GlobalAnnouncementAddComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GlobalAnnouncementAddComponent, selectors: [["app-global-announcement-add"]], decls: 74, vars: 11, consts: [["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header", "py-3"], [1, "text-capitalize"], [1, "text-muted", "mb-0"], [1, "text-danger"], [1, "card-body", "tab2-card"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "title", "id", "validationCustom1", "type", "text", "placeholder", "Title", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["formControlName", "description", "id", "validationCustom2", "type", "email", "placeholder", "Description", 1, "form-control"], [1, "d-flex", "align-items-baseline"], ["formControlName", "fromDate", "placeholder", "From Date", "name", "dp", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "dateChanged", "click", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar-o"], ["formControlName", "toDate", "placeholder", "To Date", "name", "dp1", "angular-mydatepicker", "", "autocomplete", "off", 1, "form-control", 3, "dateChanged", "click", "options"], ["for", "validationCustom5", 1, "col-xl-3", "col-md-4"], ["formControlName", "status", "id", "validationCustom5", 1, "form-control"], ["selected", "", "disabled", ""], ["value", "1"], ["value", "2"], ["value", "4", 4, "ngIf"], [1, "pull-right"], [1, "error"], ["value", "4"]], template: function GlobalAnnouncementAddComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "h5", 7);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "label", 8);
            i0.ɵɵtext(8, "All fields marked with ");
            i0.ɵɵelementStart(9, "span", 9);
            i0.ɵɵtext(10, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " are required");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 10)(13, "form", 11)(14, "div", 12)(15, "label", 13)(16, "span");
            i0.ɵɵtext(17, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(18, " Title");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 14);
            i0.ɵɵelement(20, "input", 15);
            i0.ɵɵtemplate(21, GlobalAnnouncementAddComponent_em_21_Template, 2, 0, "em", 16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 12)(23, "label", 17)(24, "span");
            i0.ɵɵtext(25, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(26, " Description");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 14);
            i0.ɵɵelement(28, "textarea", 18);
            i0.ɵɵtemplate(29, GlobalAnnouncementAddComponent_em_29_Template, 2, 0, "em", 16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "div", 12)(31, "label", 17)(32, "span");
            i0.ɵɵtext(33, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(34, " From Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 14)(36, "div", 19)(37, "input", 20, 0);
            i0.ɵɵlistener("dateChanged", function GlobalAnnouncementAddComponent_Template_input_dateChanged_37_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDateChanged($event)); })("click", function GlobalAnnouncementAddComponent_Template_input_click_37_listener() { i0.ɵɵrestoreView(_r1); const dp_r2 = i0.ɵɵreference(38); return i0.ɵɵresetView(dp_r2.toggleCalendar()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "div", 21)(40, "button", 22);
            i0.ɵɵlistener("click", function GlobalAnnouncementAddComponent_Template_button_click_40_listener() { i0.ɵɵrestoreView(_r1); const dp_r2 = i0.ɵɵreference(38); return i0.ɵɵresetView(dp_r2.toggleCalendar()); });
            i0.ɵɵelement(41, "i", 23);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(42, GlobalAnnouncementAddComponent_em_42_Template, 2, 0, "em", 16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(43, "div", 12)(44, "label", 17)(45, "span");
            i0.ɵɵtext(46, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(47, " To Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "div", 14)(49, "div", 19)(50, "input", 24, 1);
            i0.ɵɵlistener("dateChanged", function GlobalAnnouncementAddComponent_Template_input_dateChanged_50_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDateChanged($event)); })("click", function GlobalAnnouncementAddComponent_Template_input_click_50_listener() { i0.ɵɵrestoreView(_r1); const dp1_r3 = i0.ɵɵreference(51); return i0.ɵɵresetView(dp1_r3.toggleCalendar()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "div", 21)(53, "button", 22);
            i0.ɵɵlistener("click", function GlobalAnnouncementAddComponent_Template_button_click_53_listener() { i0.ɵɵrestoreView(_r1); const dp1_r3 = i0.ɵɵreference(51); return i0.ɵɵresetView(dp1_r3.toggleCalendar()); });
            i0.ɵɵelement(54, "i", 23);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(55, GlobalAnnouncementAddComponent_em_55_Template, 2, 0, "em", 16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "div", 12)(57, "label", 25)(58, "span");
            i0.ɵɵtext(59, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(60, " Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "div", 14)(62, "select", 26)(63, "option", 27);
            i0.ɵɵtext(64, "--Select--");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "option", 28);
            i0.ɵɵtext(66, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "option", 29);
            i0.ɵɵtext(68, "Suspended");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(69, GlobalAnnouncementAddComponent_option_69_Template, 2, 0, "option", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(70, GlobalAnnouncementAddComponent_em_70_Template, 2, 0, "em", 16);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(71, "div", 31)(72, "button", 22);
            i0.ɵɵlistener("click", function GlobalAnnouncementAddComponent_Template_button_click_72_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addOrEditSubjectService()); });
            i0.ɵɵtext(73);
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.type == "add" ? "Add" : "Edit", " Global Announcement");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.announcementForm);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.announcementForm.get("title").valid && (ctx.announcementForm.get("title").dirty || ctx.announcementForm.get("title").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.announcementForm.get("description").valid && (ctx.announcementForm.get("description").dirty || ctx.announcementForm.get("description").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("options", ctx.myDpOptions);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", !ctx.announcementForm.get("fromDate").valid && (ctx.announcementForm.get("fromDate").dirty || ctx.announcementForm.get("fromDate").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("options", ctx.myDpOptions);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", !ctx.announcementForm.get("toDate").valid && (ctx.announcementForm.get("toDate").dirty || ctx.announcementForm.get("toDate").touched));
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("ngIf", ctx.type == "edit");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.announcementForm.get("status").valid && (ctx.announcementForm.get("status").dirty || ctx.announcementForm.get("status").touched));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.type == "add" ? "Save" : "Update");
        } }, dependencies: [i3.NgIf, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.FormGroupDirective, i1.FormControlName, i4.AngularMyDatePickerDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalAnnouncementAddComponent, [{
        type: Component,
        args: [{ selector: 'app-global-announcement-add', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header py-3\">\n                    <h5 class=\"text-capitalize\">{{type == 'add' ? 'Add' : 'Edit'}} Global Announcement</h5>\n                    <label class=\"text-muted mb-0\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"announcementForm\" class=\"needs-validation user-add\" novalida>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Title</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"title\" id=\"validationCustom1\"\n                                       type=\"text\" placeholder=\"Title\" required>\n                                <em class=\"error\" *ngIf=\"!announcementForm.get('title').valid && (announcementForm.get('title').dirty || announcementForm.get('title').touched)\">Title is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom2\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Description</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <textarea class=\"form-control\" formControlName=\"description\" id=\"validationCustom2\"\n                                          type=\"email\" placeholder=\"Description\"></textarea>\n                                <em class=\"error\" *ngIf=\"!announcementForm.get('description').valid && (announcementForm.get('description').dirty || announcementForm.get('description').touched)\">Description is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom2\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                From Date</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <div class=\"d-flex align-items-baseline\">\n                                    <input class=\"form-control\"  formControlName=\"fromDate\" placeholder=\"From Date\"\n                                           name=\"dp\" angular-mydatepicker #dp=\"angular-mydatepicker\" autocomplete=\"off\"\n                                           [options]=\"myDpOptions\" (dateChanged)=\"onDateChanged($event)\" (click)=\"dp.toggleCalendar()\">\n                                    <div class=\"input-group-append\">\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                                            <i class=\"fa fa-calendar-o\"></i></button>\n                                    </div>\n                                </div>\n                                <em class=\"error\" *ngIf=\"!announcementForm.get('fromDate').valid && (announcementForm.get('fromDate').dirty || announcementForm.get('fromDate').touched)\">From Date is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom2\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                To Date</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <div class=\"d-flex align-items-baseline\">\n                                    <input class=\"form-control\"  formControlName=\"toDate\" placeholder=\"To Date\"\n                                           name=\"dp1\" angular-mydatepicker #dp1=\"angular-mydatepicker\" autocomplete=\"off\"\n                                           [options]=\"myDpOptions\" (dateChanged)=\"onDateChanged($event)\" (click)=\"dp1.toggleCalendar()\">\n                                    <div class=\"input-group-append\">\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp1.toggleCalendar()\">\n                                            <i class=\"fa fa-calendar-o\"></i></button>\n                                    </div>\n                                </div>\n                                <em class=\"error\" *ngIf=\"!announcementForm.get('toDate').valid && (announcementForm.get('toDate').dirty || announcementForm.get('toDate').touched)\">To Date is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom5\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Status</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control\" formControlName=\"status\" id=\"validationCustom5\">\n                                    <option selected disabled>&#45;&#45;Select&#45;&#45;</option>\n                                    <option value=\"1\">Active</option>\n                                    <option value=\"2\">Suspended</option>\n<!--                                    <option *ngIf=\"type =='edit'\" value=\"3\">Disengaged</option>-->\n                                    <option *ngIf=\"type =='edit'\" value=\"4\">Deleted</option>\n                                </select>\n                                <em class=\"error\" *ngIf=\"!announcementForm.get('status').valid && (announcementForm.get('status').dirty || announcementForm.get('status').touched)\">Status is required</em>\n                            </div>\n                        </div>\n                    </form>\n                    <div class=\"pull-right\">\n                        <button (click)=\"addOrEditSubjectService()\" type=\"button\" class=\"btn btn-primary\">{{type == 'add' ? 'Save' : 'Update'}}</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GlobalAnnouncementAddComponent, { className: "GlobalAnnouncementAddComponent" }); })();
//# sourceMappingURL=global-announcement-add.component.js.map