import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../shared/service/crm.service";
import * as i3 from "../../../shared/service/auth.service";
import * as i4 from "../../../shared/service/student.service";
import * as i5 from "ngx-toastr";
import * as i6 from "@angular/common";
function CrmNotificationsComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 61);
} }
function CrmNotificationsComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 62);
} }
function CrmNotificationsComponent_button_42_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 63);
    i0.ɵɵlistener("click", function CrmNotificationsComponent_button_42_Template_button_click_0_listener() { const template_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.templateForm.patchValue(template_r3)); });
    i0.ɵɵelementStart(1, "div", 64);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 65);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "uppercase");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const template_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(template_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Channel: ", i0.ɵɵpipeBind1(5, 2, template_r3.channel), "");
} }
function CrmNotificationsComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵtext(1, " No templates available yet. ");
    i0.ɵɵelementEnd();
} }
function CrmNotificationsComponent_option_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 67);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const template_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", template_r5.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(template_r5.name);
} }
function CrmNotificationsComponent_div_76_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 67);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const guardian_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", guardian_r6.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", guardian_r6.full_name, " (", guardian_r6.email || guardian_r6.phone || "No contact", ")");
} }
function CrmNotificationsComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "label", 9);
    i0.ɵɵtext(2, "Guardian *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 68)(4, "option", 31);
    i0.ɵɵtext(5, "Select guardian");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CrmNotificationsComponent_div_76_option_6_Template, 2, 3, "option", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r3.guardians);
} }
function CrmNotificationsComponent_div_77_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 67);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const student_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", student_r7.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(student_r7.full_name);
} }
function CrmNotificationsComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "label", 9);
    i0.ɵɵtext(2, "Student *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 68)(4, "option", 31);
    i0.ɵɵtext(5, "Select student");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CrmNotificationsComponent_div_77_option_6_Template, 2, 2, "option", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r3.students);
} }
function CrmNotificationsComponent_option_84_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 67);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const student_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", student_r8.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(student_r8.full_name);
} }
function CrmNotificationsComponent_span_90_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 61);
} }
function CrmNotificationsComponent_ng_container_112_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 67);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const guardian_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", guardian_r9.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(guardian_r9.full_name);
} }
function CrmNotificationsComponent_ng_container_112_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CrmNotificationsComponent_ng_container_112_option_1_Template, 2, 2, "option", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.guardians);
} }
function CrmNotificationsComponent_ng_template_113_option_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 67);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const student_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", student_r10.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(student_r10.full_name);
} }
function CrmNotificationsComponent_ng_template_113_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CrmNotificationsComponent_ng_template_113_option_0_Template, 2, 2, "option", 32);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r3.students);
} }
function CrmNotificationsComponent_span_131_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 61);
} }
function CrmNotificationsComponent_span_137_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 62);
} }
function CrmNotificationsComponent_tr_154_pre_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre", 72);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "json");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, item_r11.payload));
} }
function CrmNotificationsComponent_tr_154_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "td", 69);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td")(7, "span", 70);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtemplate(14, CrmNotificationsComponent_tr_154_pre_14_Template, 3, 3, "pre", 71);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(3, 7, item_r11.recipient_type), " #", item_r11.recipient_id, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r11.channel);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", item_r11.status === "sent" ? "bg-success" : item_r11.status === "failed" ? "bg-danger" : "bg-secondary");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 9, item_r11.status), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r11.scheduled_at ? i0.ɵɵpipeBind2(12, 11, item_r11.scheduled_at, "short") : "Immediate");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r11.payload);
} }
function CrmNotificationsComponent_tr_156_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 73);
    i0.ɵɵtext(2, "No notifications queued yet.");
    i0.ɵɵelementEnd()();
} }
export class CrmNotificationsComponent {
    constructor(fb, crmService, authService, studentService, toastr) {
        this.fb = fb;
        this.crmService = crmService;
        this.authService = authService;
        this.studentService = studentService;
        this.toastr = toastr;
        this.templates = [];
        this.notifications = [];
        this.guardians = [];
        this.students = [];
        this.loadingTemplates = false;
        this.loadingNotifications = false;
        this.savingTemplate = false;
        this.queuing = false;
        this.updatingOptout = false;
        this.schoolId = null;
        this.templateForm = this.fb.group({
            id: [],
            name: ['', Validators.required],
            channel: ['both', Validators.required],
            subject: [''],
            body: ['', Validators.required]
        });
        this.queueForm = this.fb.group({
            template_id: [null, Validators.required],
            channel: ['email', Validators.required],
            recipient_type: ['guardian', Validators.required],
            recipient_id: [null, Validators.required],
            student_id: [null],
            variablesText: ['']
        });
        this.optoutForm = this.fb.group({
            contact_type: ['guardian', Validators.required],
            contact_id: [null, Validators.required],
            channel: ['email', Validators.required],
            opted_out: [false],
            reason: ['']
        });
    }
    ngOnInit() {
        this.schoolId = this.authService.getSessionData('school_id');
        this.loadTemplates();
        this.loadNotifications();
        this.loadGuardians();
        this.loadStudents();
    }
    loadTemplates() {
        if (!this.schoolId) {
            return;
        }
        this.loadingTemplates = true;
        this.crmService.listTemplates({ school_id: this.schoolId }).subscribe({
            next: (response) => {
                this.loadingTemplates = false;
                if (response?.IsSuccess) {
                    this.templates = response.ResponseObject || [];
                }
                else {
                    this.templates = [];
                    this.toastr.error(response?.ErrorObject || 'Unable to load templates');
                }
            },
            error: () => {
                this.loadingTemplates = false;
                this.toastr.error('Unable to load templates');
            }
        });
    }
    loadNotifications() {
        this.loadingNotifications = true;
        this.crmService.listNotifications({ school_id: this.schoolId }).subscribe({
            next: (response) => {
                this.loadingNotifications = false;
                if (response?.IsSuccess) {
                    this.notifications = response.ResponseObject || [];
                }
                else {
                    this.notifications = [];
                }
            },
            error: () => {
                this.loadingNotifications = false;
                this.notifications = [];
            }
        });
    }
    loadGuardians() {
        if (!this.schoolId) {
            return;
        }
        this.crmService.listGuardians({ school_id: this.schoolId }).subscribe({
            next: (response) => {
                if (response?.IsSuccess) {
                    this.guardians = (response.ResponseObject || []).map((item) => ({
                        ...item,
                        full_name: `${item.first_name ?? ''} ${item.last_name ?? ''}`.trim()
                    }));
                }
                else {
                    this.guardians = [];
                }
            },
            error: () => {
                this.guardians = [];
            }
        });
    }
    loadStudents() {
        if (!this.schoolId) {
            return;
        }
        const payload = {
            platform: 'web',
            role_id: this.authService.getRoleId(),
            user_id: this.authService.getUserId(),
            school_id: this.schoolId
        };
        this.studentService.getStudentList(payload).subscribe({
            next: (response) => {
                if (response?.IsSuccess) {
                    this.students = (response.ResponseObject || []).map((item) => ({
                        ...item,
                        full_name: `${item.first_name ?? ''} ${item.last_name ?? ''}`.trim()
                    }));
                }
                else {
                    this.students = [];
                }
            },
            error: () => {
                this.students = [];
            }
        });
    }
    saveTemplate() {
        if (this.templateForm.invalid || !this.schoolId) {
            this.templateForm.markAllAsTouched();
            return;
        }
        this.savingTemplate = true;
        const payload = {
            ...this.templateForm.value,
            school_id: this.schoolId
        };
        this.crmService.saveTemplate(payload).subscribe({
            next: (response) => {
                if (response?.IsSuccess) {
                    this.toastr.success('Template saved');
                    this.templateForm.reset({ channel: 'both' });
                    this.loadTemplates();
                }
                else {
                    this.toastr.error(response?.ErrorObject || 'Unable to save template');
                }
            },
            error: () => {
                this.toastr.error('Unable to save template');
            }
        }).add(() => {
            this.savingTemplate = false;
        });
    }
    queueNotification() {
        if (this.queueForm.invalid) {
            this.queueForm.markAllAsTouched();
            return;
        }
        this.queuing = true;
        const variables = this.parseVariables(this.queueForm.value.variablesText);
        const payload = {
            template_id: this.queueForm.value.template_id,
            channel: this.queueForm.value.channel,
            recipient_type: this.queueForm.value.recipient_type,
            recipient_id: this.queueForm.value.recipient_id,
            student_id: this.queueForm.value.student_id,
            variables
        };
        this.crmService.queueNotification(payload).subscribe({
            next: (response) => {
                if (response?.IsSuccess) {
                    this.toastr.success('Notification queued');
                    this.queueForm.reset({ channel: 'email', recipient_type: 'guardian' });
                    this.loadNotifications();
                }
                else {
                    this.toastr.error(response?.ErrorObject || 'Unable to queue notification');
                }
            },
            error: () => {
                this.toastr.error('Unable to queue notification');
            }
        }).add(() => {
            this.queuing = false;
        });
    }
    updateOptout() {
        if (this.optoutForm.invalid) {
            this.optoutForm.markAllAsTouched();
            return;
        }
        this.updatingOptout = true;
        this.crmService.setOptout(this.optoutForm.value).subscribe({
            next: (response) => {
                if (response?.IsSuccess) {
                    const optedOut = this.optoutForm.value.opted_out;
                    this.toastr.success(optedOut ? 'Contact opted out' : 'Contact opted back in');
                }
                else {
                    this.toastr.error(response?.ErrorObject || 'Unable to update preferences');
                }
            },
            error: () => {
                this.toastr.error('Unable to update preferences');
            }
        }).add(() => {
            this.updatingOptout = false;
        });
    }
    parseVariables(input) {
        if (!input) {
            return {};
        }
        try {
            return JSON.parse(input);
        }
        catch (err) {
            const map = {};
            input.split(/\n|,/g).forEach((segment) => {
                const [key, value] = segment.split(/:|=/);
                if (key && value) {
                    map[key.trim()] = value.trim();
                }
            });
            return map;
        }
    }
    static { this.ɵfac = function CrmNotificationsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CrmNotificationsComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.CrmService), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.StudentService), i0.ɵɵdirectiveInject(i5.ToastrService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CrmNotificationsComponent, selectors: [["app-crm-notifications"]], decls: 157, vars: 25, consts: [["studentOptions", ""], [1, "row", "g-4"], [1, "col-lg-4"], [1, "card", "mb-4"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], ["placeholder", "Payment Reminder", "formControlName", "name", 1, "form-control"], ["formControlName", "channel", 1, "form-select"], ["value", "both"], ["value", "email"], ["value", "sms"], ["placeholder", "Only for emails", "formControlName", "subject", 1, "form-control"], ["rows", "5", "formControlName", "body", "placeholder", "Hi {guardian_name}, ...", 1, "form-control"], [1, "text-muted"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "card", "template-list"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "card-body", "p-0"], [1, "list-group", "list-group-flush"], ["class", "list-group-item list-group-item-action", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["class", "list-group-item text-center text-muted", 4, "ngIf"], [1, "col-lg-8"], [1, "row", "g-3"], [1, "col-md-4"], ["formControlName", "template_id", 1, "form-select"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "recipient_type", 1, "form-select"], ["value", "guardian"], ["value", "student"], [1, "row", "g-3", "mt-1"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-6"], ["formControlName", "student_id", 1, "form-select"], ["value", ""], [1, "mt-3"], ["rows", "2", "formControlName", "variablesText", "placeholder", "JSON or key:value pairs (e.g. {\"amount_due\": \"125\"})", 1, "form-control"], ["type", "submit", 1, "btn", "btn-outline-primary", "mt-3", 3, "disabled"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit", "formGroup"], [1, "col-md-3"], ["formControlName", "contact_type", 1, "form-select"], ["formControlName", "contact_id", 1, "form-select"], [4, "ngIf", "ngIfElse"], [1, "col-md-2"], [1, "form-check", "form-switch"], ["type", "checkbox", "formControlName", "opted_out", "id", "optoutSwitch", 1, "form-check-input"], ["for", "optoutSwitch", 1, "form-check-label"], ["placeholder", "Reason (optional)", "formControlName", "reason", 1, "form-control", "mt-2"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-outline-secondary", 3, "disabled"], [1, "card"], [1, "table-responsive"], [1, "table", "table-striped", "mb-0"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "spinner-border", "spinner-border-sm"], ["type", "button", 1, "list-group-item", "list-group-item-action", 3, "click"], [1, "fw-semibold"], [1, "text-muted", "small"], [1, "list-group-item", "text-center", "text-muted"], [3, "value"], ["formControlName", "recipient_id", 1, "form-select"], [1, "text-uppercase"], [1, "badge", 3, "ngClass"], ["class", "payload-preview", 4, "ngIf"], [1, "payload-preview"], ["colspan", "5", 1, "text-center", "text-muted", "py-3"]], template: function CrmNotificationsComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h5", 5);
            i0.ɵɵtext(5, "Message Template");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 6)(7, "form", 7);
            i0.ɵɵlistener("ngSubmit", function CrmNotificationsComponent_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.saveTemplate()); });
            i0.ɵɵelementStart(8, "div", 8)(9, "label", 9);
            i0.ɵɵtext(10, "Template Name *");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "input", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 8)(13, "label", 9);
            i0.ɵɵtext(14, "Channel *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "select", 11)(16, "option", 12);
            i0.ɵɵtext(17, "SMS & Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "option", 13);
            i0.ɵɵtext(19, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "option", 14);
            i0.ɵɵtext(21, "SMS");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(22, "div", 8)(23, "label", 9);
            i0.ɵɵtext(24, "Subject");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(25, "input", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "div", 8)(27, "label", 9);
            i0.ɵɵtext(28, "Body *");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(29, "textarea", 16);
            i0.ɵɵelementStart(30, "small", 17);
            i0.ɵɵtext(31, " Use placeholders like {student_name}, {amount_due}, {class_date} ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "button", 18);
            i0.ɵɵtemplate(33, CrmNotificationsComponent_span_33_Template, 1, 0, "span", 19);
            i0.ɵɵtext(34, " Save Template ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(35, "div", 20)(36, "div", 21)(37, "h6", 5);
            i0.ɵɵtext(38, "Saved Templates");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(39, CrmNotificationsComponent_span_39_Template, 1, 0, "span", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "div", 23)(41, "div", 24);
            i0.ɵɵtemplate(42, CrmNotificationsComponent_button_42_Template, 6, 4, "button", 25)(43, CrmNotificationsComponent_div_43_Template, 2, 0, "div", 26);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(44, "div", 27)(45, "div", 3)(46, "div", 4)(47, "h5", 5);
            i0.ɵɵtext(48, "Send Notification");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "div", 6)(50, "form", 7);
            i0.ɵɵlistener("ngSubmit", function CrmNotificationsComponent_Template_form_ngSubmit_50_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.queueNotification()); });
            i0.ɵɵelementStart(51, "div", 28)(52, "div", 29)(53, "label", 9);
            i0.ɵɵtext(54, "Template *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "select", 30)(56, "option", 31);
            i0.ɵɵtext(57, "Select template");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(58, CrmNotificationsComponent_option_58_Template, 2, 2, "option", 32);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "div", 29)(60, "label", 9);
            i0.ɵɵtext(61, "Channel *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "select", 11)(63, "option", 13);
            i0.ɵɵtext(64, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "option", 14);
            i0.ɵɵtext(66, "SMS");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(67, "div", 29)(68, "label", 9);
            i0.ɵɵtext(69, "Recipient Type *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "select", 33)(71, "option", 34);
            i0.ɵɵtext(72, "Guardian");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "option", 35);
            i0.ɵɵtext(74, "Student");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(75, "div", 36);
            i0.ɵɵtemplate(76, CrmNotificationsComponent_div_76_Template, 7, 1, "div", 37)(77, CrmNotificationsComponent_div_77_Template, 7, 1, "div", 37);
            i0.ɵɵelementStart(78, "div", 38)(79, "label", 9);
            i0.ɵɵtext(80, "Related Student");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "select", 39)(82, "option", 40);
            i0.ɵɵtext(83, "Optional");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(84, CrmNotificationsComponent_option_84_Template, 2, 2, "option", 32);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(85, "div", 41)(86, "label", 9);
            i0.ɵɵtext(87, "Variables");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(88, "textarea", 42);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "button", 43);
            i0.ɵɵtemplate(90, CrmNotificationsComponent_span_90_Template, 1, 0, "span", 19);
            i0.ɵɵtext(91, " Queue Notification ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(92, "div", 3)(93, "div", 4)(94, "h5", 5);
            i0.ɵɵtext(95, "Opt-out Preferences");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(96, "div", 6)(97, "form", 44);
            i0.ɵɵlistener("ngSubmit", function CrmNotificationsComponent_Template_form_ngSubmit_97_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateOptout()); });
            i0.ɵɵelementStart(98, "div", 45)(99, "label", 9);
            i0.ɵɵtext(100, "Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(101, "select", 46)(102, "option", 34);
            i0.ɵɵtext(103, "Guardian");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "option", 35);
            i0.ɵɵtext(105, "Student");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(106, "div", 29)(107, "label", 9);
            i0.ɵɵtext(108, "Contact");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(109, "select", 47)(110, "option", 31);
            i0.ɵɵtext(111, "Select contact");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(112, CrmNotificationsComponent_ng_container_112_Template, 2, 1, "ng-container", 48)(113, CrmNotificationsComponent_ng_template_113_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(115, "div", 49)(116, "label", 9);
            i0.ɵɵtext(117, "Channel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "select", 11)(119, "option", 13);
            i0.ɵɵtext(120, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(121, "option", 14);
            i0.ɵɵtext(122, "SMS");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(123, "div", 45)(124, "div", 50);
            i0.ɵɵelement(125, "input", 51);
            i0.ɵɵelementStart(126, "label", 52);
            i0.ɵɵtext(127, "Opted Out");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(128, "input", 53);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(129, "div", 54)(130, "button", 55);
            i0.ɵɵtemplate(131, CrmNotificationsComponent_span_131_Template, 1, 0, "span", 19);
            i0.ɵɵtext(132, " Update Preference ");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(133, "div", 56)(134, "div", 21)(135, "h5", 5);
            i0.ɵɵtext(136, "Notification Activity");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(137, CrmNotificationsComponent_span_137_Template, 1, 0, "span", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(138, "div", 23)(139, "div", 57)(140, "table", 58)(141, "thead")(142, "tr")(143, "th");
            i0.ɵɵtext(144, "Recipient");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(145, "th");
            i0.ɵɵtext(146, "Channel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(147, "th");
            i0.ɵɵtext(148, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(149, "th");
            i0.ɵɵtext(150, "Scheduled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(151, "th");
            i0.ɵɵtext(152, "Payload");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(153, "tbody");
            i0.ɵɵtemplate(154, CrmNotificationsComponent_tr_154_Template, 15, 14, "tr", 59);
            i0.ɵɵpipe(155, "slice");
            i0.ɵɵtemplate(156, CrmNotificationsComponent_tr_156_Template, 3, 0, "tr", 60);
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            let tmp_15_0;
            const studentOptions_r12 = i0.ɵɵreference(114);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.templateForm);
            i0.ɵɵadvance(25);
            i0.ɵɵproperty("disabled", ctx.savingTemplate);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.savingTemplate);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.loadingTemplates);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.templates);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.templates.length && !ctx.loadingTemplates);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.queueForm);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.templates);
            i0.ɵɵadvance(18);
            i0.ɵɵproperty("ngIf", ctx.queueForm.value.recipient_type === "guardian");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.queueForm.value.recipient_type === "student");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.students);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.queuing);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.queuing);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.optoutForm);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngIf", ((tmp_15_0 = ctx.optoutForm.get("contact_type")) == null ? null : tmp_15_0.value) === "guardian")("ngIfElse", studentOptions_r12);
            i0.ɵɵadvance(18);
            i0.ɵɵproperty("disabled", ctx.updatingOptout);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.updatingOptout);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.loadingNotifications);
            i0.ɵɵadvance(17);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(155, 21, ctx.notifications, 0, 10));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.notifications.length && !ctx.loadingNotifications);
        } }, dependencies: [i6.NgClass, i6.NgForOf, i6.NgIf, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i6.UpperCasePipe, i6.JsonPipe, i6.SlicePipe, i6.TitleCasePipe, i6.DatePipe], styles: [".payload-preview[_ngcontent-%COMP%] {\n  max-height: 120px;\n  overflow: auto;\n  font-size: 0.75rem;\n  background: #f8f9fa;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n}\n\n.template-list[_ngcontent-%COMP%] {\n  max-height: 320px;\n  overflow-y: auto;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrmNotificationsComponent, [{
        type: Component,
        args: [{ selector: 'app-crm-notifications', template: "<div class=\"row g-4\">\n  <div class=\"col-lg-4\">\n    <div class=\"card mb-4\">\n      <div class=\"card-header\">\n        <h5 class=\"mb-0\">Message Template</h5>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"templateForm\" (ngSubmit)=\"saveTemplate()\">\n          <div class=\"mb-3\">\n            <label class=\"form-label\">Template Name *</label>\n            <input class=\"form-control\" placeholder=\"Payment Reminder\" formControlName=\"name\" />\n          </div>\n          <div class=\"mb-3\">\n            <label class=\"form-label\">Channel *</label>\n            <select class=\"form-select\" formControlName=\"channel\">\n              <option value=\"both\">SMS & Email</option>\n              <option value=\"email\">Email</option>\n              <option value=\"sms\">SMS</option>\n            </select>\n          </div>\n          <div class=\"mb-3\">\n            <label class=\"form-label\">Subject</label>\n            <input class=\"form-control\" placeholder=\"Only for emails\" formControlName=\"subject\" />\n          </div>\n          <div class=\"mb-3\">\n            <label class=\"form-label\">Body *</label>\n            <textarea class=\"form-control\" rows=\"5\" formControlName=\"body\" placeholder=\"Hi &#123;guardian_name&#125;, ...\"></textarea>\n            <small class=\"text-muted\">\n              Use placeholders like &#123;student_name&#125;, &#123;amount_due&#125;, &#123;class_date&#125;\n            </small>\n          </div>\n          <button class=\"btn btn-primary w-100\" type=\"submit\" [disabled]=\"savingTemplate\">\n            <span *ngIf=\"savingTemplate\" class=\"spinner-border spinner-border-sm me-2\"></span>\n            Save Template\n          </button>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"card template-list\">\n      <div class=\"card-header d-flex justify-content-between align-items-center\">\n        <h6 class=\"mb-0\">Saved Templates</h6>\n        <span *ngIf=\"loadingTemplates\" class=\"spinner-border spinner-border-sm\"></span>\n      </div>\n      <div class=\"card-body p-0\">\n        <div class=\"list-group list-group-flush\">\n          <button class=\"list-group-item list-group-item-action\" type=\"button\" *ngFor=\"let template of templates\" (click)=\"templateForm.patchValue(template)\">\n            <div class=\"fw-semibold\">{{ template.name }}</div>\n            <div class=\"text-muted small\">Channel: {{ template.channel | uppercase }}</div>\n          </button>\n          <div class=\"list-group-item text-center text-muted\" *ngIf=\"!templates.length && !loadingTemplates\">\n            No templates available yet.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-8\">\n    <div class=\"card mb-4\">\n      <div class=\"card-header\">\n        <h5 class=\"mb-0\">Send Notification</h5>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"queueForm\" (ngSubmit)=\"queueNotification()\">\n          <div class=\"row g-3\">\n            <div class=\"col-md-4\">\n              <label class=\"form-label\">Template *</label>\n              <select class=\"form-select\" formControlName=\"template_id\">\n                <option value=\"\" disabled>Select template</option>\n                <option *ngFor=\"let template of templates\" [value]=\"template.id\">{{ template.name }}</option>\n              </select>\n            </div>\n            <div class=\"col-md-4\">\n              <label class=\"form-label\">Channel *</label>\n              <select class=\"form-select\" formControlName=\"channel\">\n                <option value=\"email\">Email</option>\n                <option value=\"sms\">SMS</option>\n              </select>\n            </div>\n            <div class=\"col-md-4\">\n              <label class=\"form-label\">Recipient Type *</label>\n              <select class=\"form-select\" formControlName=\"recipient_type\">\n                <option value=\"guardian\">Guardian</option>\n                <option value=\"student\">Student</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row g-3 mt-1\">\n            <div class=\"col-md-6\" *ngIf=\"queueForm.value.recipient_type === 'guardian'\">\n              <label class=\"form-label\">Guardian *</label>\n              <select class=\"form-select\" formControlName=\"recipient_id\">\n                <option value=\"\" disabled>Select guardian</option>\n                <option *ngFor=\"let guardian of guardians\" [value]=\"guardian.id\">{{ guardian.full_name }} ({{ guardian.email || guardian.phone || 'No contact' }})</option>\n              </select>\n            </div>\n            <div class=\"col-md-6\" *ngIf=\"queueForm.value.recipient_type === 'student'\">\n              <label class=\"form-label\">Student *</label>\n              <select class=\"form-select\" formControlName=\"recipient_id\">\n                <option value=\"\" disabled>Select student</option>\n                <option *ngFor=\"let student of students\" [value]=\"student.id\">{{ student.full_name }}</option>\n              </select>\n            </div>\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Related Student</label>\n              <select class=\"form-select\" formControlName=\"student_id\">\n                <option value=\"\">Optional</option>\n                <option *ngFor=\"let student of students\" [value]=\"student.id\">{{ student.full_name }}</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"mt-3\">\n            <label class=\"form-label\">Variables</label>\n            <textarea\n              class=\"form-control\"\n              rows=\"2\"\n              formControlName=\"variablesText\"\n              placeholder='JSON or key:value pairs (e.g. &#123;\"amount_due\": \"125\"&#125;)'\n            ></textarea>\n          </div>\n\n          <button class=\"btn btn-outline-primary mt-3\" type=\"submit\" [disabled]=\"queuing\">\n            <span *ngIf=\"queuing\" class=\"spinner-border spinner-border-sm me-2\"></span>\n            Queue Notification\n          </button>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"card mb-4\">\n      <div class=\"card-header\">\n        <h5 class=\"mb-0\">Opt-out Preferences</h5>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"optoutForm\" (ngSubmit)=\"updateOptout()\" class=\"row g-3 align-items-end\">\n          <div class=\"col-md-3\">\n            <label class=\"form-label\">Type</label>\n            <select class=\"form-select\" formControlName=\"contact_type\">\n              <option value=\"guardian\">Guardian</option>\n              <option value=\"student\">Student</option>\n            </select>\n          </div>\n          <div class=\"col-md-4\">\n            <label class=\"form-label\">Contact</label>\n            <select class=\"form-select\" formControlName=\"contact_id\">\n              <option value=\"\" disabled>Select contact</option>\n              <ng-container *ngIf=\"optoutForm.get('contact_type')?.value === 'guardian'; else studentOptions\">\n                <option *ngFor=\"let guardian of guardians\" [value]=\"guardian.id\">{{ guardian.full_name }}</option>\n              </ng-container>\n              <ng-template #studentOptions>\n                <option *ngFor=\"let student of students\" [value]=\"student.id\">{{ student.full_name }}</option>\n              </ng-template>\n            </select>\n          </div>\n          <div class=\"col-md-2\">\n            <label class=\"form-label\">Channel</label>\n            <select class=\"form-select\" formControlName=\"channel\">\n              <option value=\"email\">Email</option>\n              <option value=\"sms\">SMS</option>\n            </select>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-check form-switch\">\n              <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"opted_out\" id=\"optoutSwitch\" />\n              <label class=\"form-check-label\" for=\"optoutSwitch\">Opted Out</label>\n            </div>\n            <input class=\"form-control mt-2\" placeholder=\"Reason (optional)\" formControlName=\"reason\" />\n          </div>\n          <div class=\"col-12\">\n            <button class=\"btn btn-outline-secondary\" type=\"submit\" [disabled]=\"updatingOptout\">\n              <span *ngIf=\"updatingOptout\" class=\"spinner-border spinner-border-sm me-2\"></span>\n              Update Preference\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header d-flex justify-content-between align-items-center\">\n        <h5 class=\"mb-0\">Notification Activity</h5>\n        <span *ngIf=\"loadingNotifications\" class=\"spinner-border spinner-border-sm\"></span>\n      </div>\n      <div class=\"card-body p-0\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped mb-0\">\n            <thead>\n              <tr>\n                <th>Recipient</th>\n                <th>Channel</th>\n                <th>Status</th>\n                <th>Scheduled</th>\n                <th>Payload</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of notifications | slice:0:10\">\n                <td>{{ item.recipient_type | titlecase }} #{{ item.recipient_id }}</td>\n                <td class=\"text-uppercase\">{{ item.channel }}</td>\n                <td>\n                  <span class=\"badge\" [ngClass]=\"item.status === 'sent' ? 'bg-success' : item.status === 'failed' ? 'bg-danger' : 'bg-secondary'\">\n                    {{ item.status | titlecase }}\n                  </span>\n                </td>\n                <td>{{ item.scheduled_at ? (item.scheduled_at | date: 'short') : 'Immediate' }}</td>\n                <td>\n                  <pre class=\"payload-preview\" *ngIf=\"item.payload\">{{ item.payload | json }}</pre>\n                </td>\n              </tr>\n              <tr *ngIf=\"!notifications.length && !loadingNotifications\">\n                <td colspan=\"5\" class=\"text-center text-muted py-3\">No notifications queued yet.</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".payload-preview {\n  max-height: 120px;\n  overflow: auto;\n  font-size: 0.75rem;\n  background: #f8f9fa;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n}\n\n.template-list {\n  max-height: 320px;\n  overflow-y: auto;\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.CrmService }, { type: i3.AuthService }, { type: i4.StudentService }, { type: i5.ToastrService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CrmNotificationsComponent, { className: "CrmNotificationsComponent" }); })();
//# sourceMappingURL=notifications.component.js.map