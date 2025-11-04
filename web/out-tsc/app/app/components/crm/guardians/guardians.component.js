import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../shared/service/crm.service";
import * as i3 from "../../../shared/service/auth.service";
import * as i4 from "../../../shared/service/student.service";
import * as i5 from "ngx-toastr";
import * as i6 from "@angular/common";
import * as i7 from "@ng-bootstrap/ng-bootstrap";
import * as i8 from "@ng-select/ng-select";
function CrmGuardiansComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵtext(1, " First name is required ");
    i0.ɵɵelementEnd();
} }
function CrmGuardiansComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r1 = ctx.item;
    i0.ɵɵtextInterpolate2(" ", item_r1.first_name, " ", item_r1.last_name, " ");
} }
function CrmGuardiansComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small", 51);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = ctx.item;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r2.first_name, " ", item_r2.last_name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.email);
} }
function CrmGuardiansComponent_option_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 52);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const studentId_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", studentId_r3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.getStudentName(studentId_r3), " ");
} }
function CrmGuardiansComponent_span_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 53);
} }
function CrmGuardiansComponent_tr_94_div_14_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 68);
    i0.ɵɵtext(1, "(Primary)");
    i0.ɵɵelementEnd();
} }
function CrmGuardiansComponent_tr_94_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 64);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, CrmGuardiansComponent_tr_94_div_14_div_1_span_2_Template, 2, 0, "span", 65);
    i0.ɵɵelementStart(3, "button", 66);
    i0.ɵɵlistener("click", function CrmGuardiansComponent_tr_94_div_14_div_1_Template_button_click_3_listener() { const student_r7 = i0.ɵɵrestoreView(_r6).$implicit; const guardian_r8 = i0.ɵɵnextContext(2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.removeGuardian(guardian_r8, student_r7.student_id)); });
    i0.ɵɵelement(4, "i", 67);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const student_r7 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", student_r7.student_name || ctx_r3.getStudentName(student_r7.student_id), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", student_r7.is_primary);
} }
function CrmGuardiansComponent_tr_94_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CrmGuardiansComponent_tr_94_div_14_div_1_Template, 5, 2, "div", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const guardian_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", guardian_r8.students);
} }
function CrmGuardiansComponent_tr_94_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 55);
    i0.ɵɵtext(1, "Not linked to any students yet");
    i0.ɵɵelementEnd();
} }
function CrmGuardiansComponent_tr_94_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 54);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 55);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td")(7, "div");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 55);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 56);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtemplate(14, CrmGuardiansComponent_tr_94_div_14_Template, 2, 1, "div", 57)(15, CrmGuardiansComponent_tr_94_ng_template_15_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td", 46)(18, "div", 58)(19, "button", 59);
    i0.ɵɵlistener("click", function CrmGuardiansComponent_tr_94_Template_button_click_19_listener() { const guardian_r8 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.editGuardian(guardian_r8)); });
    i0.ɵɵelement(20, "i", 60);
    i0.ɵɵtext(21, "Edit ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "button", 61);
    i0.ɵɵlistener("click", function CrmGuardiansComponent_tr_94_Template_button_click_22_listener() { const guardian_r8 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.removeGuardian(guardian_r8)); });
    i0.ɵɵelement(23, "i", 62);
    i0.ɵɵtext(24, "Delete ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const guardian_r8 = ctx.$implicit;
    const noStudents_r9 = i0.ɵɵreference(16);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", guardian_r8.first_name, " ", guardian_r8.last_name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", guardian_r8.relationship || "\u2014", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(guardian_r8.email || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(guardian_r8.phone || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Prefers: ", guardian_r8.communication_preference || "both", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", guardian_r8.students == null ? null : guardian_r8.students.length)("ngIfElse", noStudents_r9);
} }
function CrmGuardiansComponent_tr_95_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 69);
    i0.ɵɵtext(2, " No guardians found. Use the form to add a new contact. ");
    i0.ɵɵelementEnd()();
} }
function CrmGuardiansComponent_tr_96_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 70)(2, "div", 71)(3, "span", 72);
    i0.ɵɵtext(4, "Loading...");
    i0.ɵɵelementEnd()()()();
} }
export class CrmGuardiansComponent {
    constructor(fb, crmService, authService, studentService, toastr) {
        this.fb = fb;
        this.crmService = crmService;
        this.authService = authService;
        this.studentService = studentService;
        this.toastr = toastr;
        this.guardians = [];
        this.students = [];
        this.loading = false;
        this.saving = false;
        this.schoolId = null;
        this.filters = {
            search: ''
        };
        this.guardianForm = this.fb.group({
            id: [],
            first_name: ['', Validators.required],
            last_name: [''],
            email: ['', Validators.email],
            phone: [''],
            relationship: [''],
            communication_preference: ['both', Validators.required],
            notes: [''],
            student_ids: [[]],
            primary_student_id: [''],
            status: [1]
        });
    }
    ngOnInit() {
        this.schoolId = this.authService.getSessionData('school_id');
        this.loadStudents();
        this.loadGuardians();
    }
    loadGuardians() {
        if (!this.schoolId) {
            this.toastr.error('Missing school context for CRM');
            return;
        }
        this.loading = true;
        const payload = {
            school_id: this.schoolId,
            search: this.filters.search?.trim() || null
        };
        this.crmService.listGuardians(payload).subscribe({
            next: (response) => {
                this.loading = false;
                if (response?.IsSuccess) {
                    this.guardians = response.ResponseObject || [];
                }
                else {
                    this.guardians = [];
                    this.toastr.error(response?.ErrorObject || 'Unable to load guardians');
                }
            },
            error: () => {
                this.loading = false;
                this.toastr.error('Unable to load guardians');
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
    submitGuardian() {
        if (this.guardianForm.invalid || !this.schoolId) {
            this.guardianForm.markAllAsTouched();
            return;
        }
        this.saving = true;
        const formValue = this.guardianForm.value;
        const payload = {
            ...formValue,
            school_id: this.schoolId
        };
        this.crmService.saveGuardian(payload).subscribe({
            next: (response) => {
                if (response?.IsSuccess) {
                    const guardian = response.ResponseObject;
                    const guardianId = Number(guardian?.id ?? formValue.id);
                    const studentIds = Array.isArray(formValue.student_ids)
                        ? formValue.student_ids.filter((id) => !!id).map((id) => Number(id))
                        : [];
                    if (guardianId && studentIds.length > 0) {
                        this.assignStudents(guardianId, studentIds, formValue.primary_student_id ? Number(formValue.primary_student_id) : undefined);
                    }
                    else {
                        this.toastr.success('Guardian saved');
                        this.resetForm();
                        this.loadGuardians();
                    }
                }
                else {
                    this.toastr.error(response?.ErrorObject || 'Unable to save guardian');
                }
            },
            error: () => {
                this.toastr.error('Unable to save guardian');
            }
        }).add(() => {
            this.saving = false;
        });
    }
    assignStudents(guardianId, studentIds, primaryStudentId) {
        const payload = {
            guardian_id: guardianId,
            student_ids: studentIds,
            primary_student_id: primaryStudentId || studentIds[0],
            reset_existing: true
        };
        this.crmService.assignGuardian(payload).subscribe({
            next: (response) => {
                if (response?.IsSuccess) {
                    this.toastr.success('Guardian saved and linked to students');
                    this.resetForm();
                    this.loadGuardians();
                }
                else {
                    this.toastr.error(response?.ErrorObject || 'Guardian saved but failed to link students');
                }
            },
            error: () => {
                this.toastr.error('Guardian saved but failed to link students');
            }
        });
    }
    editGuardian(guardian) {
        this.guardianForm.patchValue({
            id: guardian.id,
            first_name: guardian.first_name,
            last_name: guardian.last_name,
            email: guardian.email,
            phone: guardian.phone,
            relationship: guardian.relationship,
            communication_preference: guardian.communication_preference || 'both',
            notes: guardian.notes,
            status: guardian?.status ?? 1,
            student_ids: guardian.students?.map((item) => item.student_id) || [],
            primary_student_id: guardian.students?.find((item) => item.is_primary)?.student_id || ''
        });
    }
    removeGuardian(guardian, studentId) {
        const confirmMessage = studentId
            ? 'Unlink this guardian from the selected student?'
            : 'Delete this guardian and all student associations?';
        if (!confirm(confirmMessage)) {
            return;
        }
        const payload = {
            guardian_id: guardian.id
        };
        if (studentId) {
            payload.student_id = studentId;
        }
        this.crmService.removeGuardian(payload).subscribe({
            next: (response) => {
                if (response?.IsSuccess) {
                    this.toastr.success(studentId ? 'Guardian unlinked' : 'Guardian removed');
                    this.loadGuardians();
                }
                else {
                    this.toastr.error(response?.ErrorObject || 'Unable to update guardian');
                }
            },
            error: () => {
                this.toastr.error('Unable to update guardian');
            }
        });
    }
    resetForm() {
        this.guardianForm.reset({
            communication_preference: 'both',
            status: 1,
            student_ids: [],
            primary_student_id: ''
        });
    }
    search() {
        this.loadGuardians();
    }
    clearSearch() {
        this.filters.search = '';
        this.loadGuardians();
    }
    getStudentName(studentId) {
        const match = this.students.find((item) => +item.id === +studentId);
        if (!match) {
            return `Student #${studentId}`;
        }
        return `${match.first_name ?? ''} ${match.last_name ?? ''}`.trim() || `Student #${studentId}`;
    }
    static { this.ɵfac = function CrmGuardiansComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CrmGuardiansComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.CrmService), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.StudentService), i0.ɵɵdirectiveInject(i5.ToastrService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CrmGuardiansComponent, selectors: [["app-crm-guardians"]], decls: 97, vars: 13, consts: [["noStudents", ""], [1, "row", "g-4"], [1, "col-lg-5"], [1, "card", "h-100"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-arrow-counterclockwise", "me-1"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], ["formControlName", "first_name", "placeholder", "Jane", 1, "form-control"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["formControlName", "last_name", "placeholder", "Doe", 1, "form-control"], [1, "row"], [1, "col-md-6", "mb-3"], ["formControlName", "email", "placeholder", "jane@example.com", "type", "email", 1, "form-control"], ["formControlName", "phone", "placeholder", "+1 555 123 4567", 1, "form-control"], ["formControlName", "relationship", "placeholder", "Mother / Father / Guardian", 1, "form-control"], ["formControlName", "communication_preference", 1, "form-select"], ["value", "both"], ["value", "email"], ["value", "sms"], ["formControlName", "notes", "rows", "2", "placeholder", "Internal notes (visible to staff only)", 1, "form-control"], ["bindLabel", "full_name", "bindValue", "id", "formControlName", "student_ids", "placeholder", "Select students", 3, "items", "multiple"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [1, "text-muted", "d-block", "mt-2"], ["formControlName", "primary_student_id", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "text-muted", "d-block", "mt-1"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "col-lg-7"], [1, "card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "input-group", "input-group-sm", "search-group"], ["placeholder", "Search by name, email, phone...", "name", "guardianSearch", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "table-hover", "mb-0"], [1, "text-end"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "invalid-feedback", "d-block"], [1, "d-flex", "flex-column"], [1, "text-muted"], [3, "value"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fw-semibold"], [1, "text-muted", "small"], [1, "text-muted", "small", "text-uppercase"], [4, "ngIf", "ngIfElse"], [1, "btn-group", "btn-group-sm"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-pencil-square", "me-1"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash", "me-1"], ["class", "badge bg-light text-dark me-1 mb-1", 4, "ngFor", "ngForOf"], [1, "badge", "bg-light", "text-dark", "me-1", "mb-1"], ["class", "ms-1 text-primary", 4, "ngIf"], ["type", "button", "ngbTooltip", "Unlink guardian", 1, "btn", "btn-link", "btn-sm", "text-danger", "ms-1", "p-0", "align-baseline", 3, "click"], [1, "bi", "bi-x-circle"], [1, "ms-1", "text-primary"], ["colspan", "4", 1, "text-center", "py-4", "text-muted"], ["colspan", "4", 1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"]], template: function CrmGuardiansComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h5", 5);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 6);
            i0.ɵɵlistener("click", function CrmGuardiansComponent_Template_button_click_6_listener() { return ctx.resetForm(); });
            i0.ɵɵelement(7, "i", 7);
            i0.ɵɵtext(8, " Reset ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 8)(10, "form", 9);
            i0.ɵɵlistener("ngSubmit", function CrmGuardiansComponent_Template_form_ngSubmit_10_listener() { return ctx.submitGuardian(); });
            i0.ɵɵelementStart(11, "div", 10)(12, "label", 11);
            i0.ɵɵtext(13, "First Name *");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "input", 12);
            i0.ɵɵtemplate(15, CrmGuardiansComponent_div_15_Template, 2, 0, "div", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 10)(17, "label", 11);
            i0.ɵɵtext(18, "Last Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(19, "input", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 15)(21, "div", 16)(22, "label", 11);
            i0.ɵɵtext(23, "Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(24, "input", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 16)(26, "label", 11);
            i0.ɵɵtext(27, "Phone");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(28, "input", 18);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "div", 15)(30, "div", 16)(31, "label", 11);
            i0.ɵɵtext(32, "Relationship");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(33, "input", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "div", 16)(35, "label", 11);
            i0.ɵɵtext(36, "Communication Preference");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "select", 20)(38, "option", 21);
            i0.ɵɵtext(39, "SMS & Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "option", 22);
            i0.ɵɵtext(41, "Email Only");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "option", 23);
            i0.ɵɵtext(43, "SMS Only");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(44, "div", 10)(45, "label", 11);
            i0.ɵɵtext(46, "Notes");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(47, "textarea", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "div", 10)(49, "label", 11);
            i0.ɵɵtext(50, "Linked Students");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "ng-select", 25);
            i0.ɵɵtemplate(52, CrmGuardiansComponent_ng_template_52_Template, 1, 2, "ng-template", 26)(53, CrmGuardiansComponent_ng_template_53_Template, 5, 3, "ng-template", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "small", 28);
            i0.ɵɵtext(55, " Select students this guardian should be linked to ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "div", 10)(57, "label", 11);
            i0.ɵɵtext(58, "Primary Student");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "select", 29)(60, "option", 30);
            i0.ɵɵtext(61, "Select primary contact student");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(62, CrmGuardiansComponent_option_62_Template, 2, 2, "option", 31);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "small", 32);
            i0.ɵɵtext(64, " Primary student will receive billing and urgent notifications. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(65, "div", 33)(66, "button", 34);
            i0.ɵɵtemplate(67, CrmGuardiansComponent_span_67_Template, 1, 0, "span", 35);
            i0.ɵɵtext(68);
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(69, "div", 36)(70, "div", 37)(71, "div", 38)(72, "h5", 5);
            i0.ɵɵtext(73, "Guardian Directory");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "div", 39)(75, "input", 40);
            i0.ɵɵtwoWayListener("ngModelChange", function CrmGuardiansComponent_Template_input_ngModelChange_75_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filters.search, $event) || (ctx.filters.search = $event); return $event; });
            i0.ɵɵlistener("keyup.enter", function CrmGuardiansComponent_Template_input_keyup_enter_75_listener() { return ctx.search(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "button", 41);
            i0.ɵɵlistener("click", function CrmGuardiansComponent_Template_button_click_76_listener() { return ctx.clearSearch(); });
            i0.ɵɵtext(77, "Clear");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(78, "button", 42);
            i0.ɵɵlistener("click", function CrmGuardiansComponent_Template_button_click_78_listener() { return ctx.search(); });
            i0.ɵɵtext(79, "Search");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(80, "div", 43)(81, "div", 44)(82, "table", 45)(83, "thead")(84, "tr")(85, "th");
            i0.ɵɵtext(86, "Guardian");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "th");
            i0.ɵɵtext(88, "Contact");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "th");
            i0.ɵɵtext(90, "Linked Students");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(91, "th", 46);
            i0.ɵɵtext(92, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(93, "tbody");
            i0.ɵɵtemplate(94, CrmGuardiansComponent_tr_94_Template, 25, 8, "tr", 47)(95, CrmGuardiansComponent_tr_95_Template, 3, 0, "tr", 48)(96, CrmGuardiansComponent_tr_96_Template, 5, 0, "tr", 48);
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            let tmp_2_0;
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.guardianForm.value.id ? "Edit Guardian" : "Add Guardian");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("formGroup", ctx.guardianForm);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ((tmp_2_0 = ctx.guardianForm.get("first_name")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.guardianForm.get("first_name")) == null ? null : tmp_2_0.invalid));
            i0.ɵɵadvance(36);
            i0.ɵɵproperty("items", ctx.students)("multiple", true);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngForOf", ctx.guardianForm.value.student_ids);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.saving);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.saving);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.guardianForm.value.id ? "Update Guardian" : "Create Guardian", " ");
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filters.search);
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("ngForOf", ctx.guardians);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.guardians.length && !ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.loading);
        } }, dependencies: [i6.NgForOf, i6.NgIf, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.FormGroupDirective, i1.FormControlName, i7.NgbTooltip, i8.NgSelectComponent, i8.NgOptionTemplateDirective, i8.NgLabelTemplateDirective], styles: [".search-group[_ngcontent-%COMP%] {\n  max-width: 340px;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 0.35rem 0.5rem;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrmGuardiansComponent, [{
        type: Component,
        args: [{ selector: 'app-crm-guardians', template: "<div class=\"row g-4\">\n  <div class=\"col-lg-5\">\n    <div class=\"card h-100\">\n      <div class=\"card-header d-flex justify-content-between align-items-center\">\n        <h5 class=\"mb-0\">{{ guardianForm.value.id ? 'Edit Guardian' : 'Add Guardian' }}</h5>\n        <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" (click)=\"resetForm()\">\n          <i class=\"bi bi-arrow-counterclockwise me-1\"></i>\n          Reset\n        </button>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"guardianForm\" (ngSubmit)=\"submitGuardian()\">\n          <div class=\"mb-3\">\n            <label class=\"form-label\">First Name *</label>\n            <input class=\"form-control\" formControlName=\"first_name\" placeholder=\"Jane\" />\n            <div class=\"invalid-feedback d-block\" *ngIf=\"guardianForm.get('first_name')?.touched && guardianForm.get('first_name')?.invalid\">\n              First name is required\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label class=\"form-label\">Last Name</label>\n            <input class=\"form-control\" formControlName=\"last_name\" placeholder=\"Doe\" />\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <label class=\"form-label\">Email</label>\n              <input class=\"form-control\" formControlName=\"email\" placeholder=\"jane@example.com\" type=\"email\" />\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label class=\"form-label\">Phone</label>\n              <input class=\"form-control\" formControlName=\"phone\" placeholder=\"+1 555 123 4567\" />\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <label class=\"form-label\">Relationship</label>\n              <input class=\"form-control\" formControlName=\"relationship\" placeholder=\"Mother / Father / Guardian\" />\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label class=\"form-label\">Communication Preference</label>\n              <select class=\"form-select\" formControlName=\"communication_preference\">\n                <option value=\"both\">SMS & Email</option>\n                <option value=\"email\">Email Only</option>\n                <option value=\"sms\">SMS Only</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label class=\"form-label\">Notes</label>\n            <textarea class=\"form-control\" formControlName=\"notes\" rows=\"2\" placeholder=\"Internal notes (visible to staff only)\"></textarea>\n          </div>\n\n          <div class=\"mb-3\">\n            <label class=\"form-label\">Linked Students</label>\n            <ng-select\n              [items]=\"students\"\n              bindLabel=\"full_name\"\n              bindValue=\"id\"\n              formControlName=\"student_ids\"\n              [multiple]=\"true\"\n              placeholder=\"Select students\"\n            >\n              <ng-template ng-label-tmp let-item=\"item\">\n                {{ item.first_name }} {{ item.last_name }}\n              </ng-template>\n              <ng-template ng-option-tmp let-item=\"item\">\n                <div class=\"d-flex flex-column\">\n                  <span>{{ item.first_name }} {{ item.last_name }}</span>\n                  <small class=\"text-muted\">{{ item.email }}</small>\n                </div>\n              </ng-template>\n            </ng-select>\n            <small class=\"text-muted d-block mt-2\">\n              Select students this guardian should be linked to\n            </small>\n          </div>\n\n          <div class=\"mb-3\">\n            <label class=\"form-label\">Primary Student</label>\n            <select class=\"form-select\" formControlName=\"primary_student_id\">\n              <option value=\"\">Select primary contact student</option>\n              <option *ngFor=\"let studentId of guardianForm.value.student_ids\" [value]=\"studentId\">\n                {{ getStudentName(studentId) }}\n              </option>\n            </select>\n            <small class=\"text-muted d-block mt-1\">\n              Primary student will receive billing and urgent notifications.\n            </small>\n          </div>\n\n          <div class=\"d-grid\">\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"saving\">\n              <span *ngIf=\"saving\" class=\"spinner-border spinner-border-sm me-2\"></span>\n              {{ guardianForm.value.id ? 'Update Guardian' : 'Create Guardian' }}\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-7\">\n    <div class=\"card\">\n      <div class=\"card-header d-flex align-items-center justify-content-between flex-wrap gap-2\">\n        <h5 class=\"mb-0\">Guardian Directory</h5>\n        <div class=\"input-group input-group-sm search-group\">\n          <input\n            class=\"form-control\"\n            placeholder=\"Search by name, email, phone...\"\n            [(ngModel)]=\"filters.search\"\n            name=\"guardianSearch\"\n            (keyup.enter)=\"search()\"\n          />\n          <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"clearSearch()\">Clear</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"search()\">Search</button>\n        </div>\n      </div>\n      <div class=\"card-body p-0\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover mb-0\">\n            <thead>\n              <tr>\n                <th>Guardian</th>\n                <th>Contact</th>\n                <th>Linked Students</th>\n                <th class=\"text-end\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let guardian of guardians\">\n                <td>\n                  <div class=\"fw-semibold\">\n                    {{ guardian.first_name }} {{ guardian.last_name }}\n                  </div>\n                  <div class=\"text-muted small\">\n                    {{ guardian.relationship || '\u2014' }}\n                  </div>\n                </td>\n                <td>\n                  <div>{{ guardian.email || '\u2014' }}</div>\n                  <div class=\"text-muted small\">{{ guardian.phone || '\u2014' }}</div>\n                  <div class=\"text-muted small text-uppercase\">\n                    Prefers: {{ guardian.communication_preference || 'both' }}\n                  </div>\n                </td>\n                <td>\n                  <div *ngIf=\"guardian.students?.length; else noStudents\">\n                    <div\n                      class=\"badge bg-light text-dark me-1 mb-1\"\n                      *ngFor=\"let student of guardian.students\"\n                    >\n                      {{ student.student_name || getStudentName(student.student_id) }}\n                      <span *ngIf=\"student.is_primary\" class=\"ms-1 text-primary\">(Primary)</span>\n                      <button\n                        class=\"btn btn-link btn-sm text-danger ms-1 p-0 align-baseline\"\n                        type=\"button\"\n                        (click)=\"removeGuardian(guardian, student.student_id)\"\n                        ngbTooltip=\"Unlink guardian\"\n                      >\n                        <i class=\"bi bi-x-circle\"></i>\n                      </button>\n                    </div>\n                  </div>\n                  <ng-template #noStudents>\n                    <span class=\"text-muted small\">Not linked to any students yet</span>\n                  </ng-template>\n                </td>\n                <td class=\"text-end\">\n                  <div class=\"btn-group btn-group-sm\">\n                    <button class=\"btn btn-outline-primary\" (click)=\"editGuardian(guardian)\">\n                      <i class=\"bi bi-pencil-square me-1\"></i>Edit\n                    </button>\n                    <button class=\"btn btn-outline-danger\" (click)=\"removeGuardian(guardian)\">\n                      <i class=\"bi bi-trash me-1\"></i>Delete\n                    </button>\n                  </div>\n                </td>\n              </tr>\n              <tr *ngIf=\"!guardians.length && !loading\">\n                <td colspan=\"4\" class=\"text-center py-4 text-muted\">\n                  No guardians found. Use the form to add a new contact.\n                </td>\n              </tr>\n              <tr *ngIf=\"loading\">\n                <td colspan=\"4\" class=\"text-center py-4\">\n                  <div class=\"spinner-border text-primary\" role=\"status\">\n                    <span class=\"visually-hidden\">Loading...</span>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".search-group {\n  max-width: 340px;\n}\n\n.badge {\n  font-weight: 500;\n  padding: 0.35rem 0.5rem;\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.CrmService }, { type: i3.AuthService }, { type: i4.StudentService }, { type: i5.ToastrService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CrmGuardiansComponent, { className: "CrmGuardiansComponent" }); })();
//# sourceMappingURL=guardians.component.js.map