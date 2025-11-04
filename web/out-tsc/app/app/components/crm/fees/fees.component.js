import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../shared/service/crm.service";
import * as i3 from "../../../shared/service/auth.service";
import * as i4 from "../../../shared/service/student.service";
import * as i5 from "ngx-toastr";
import * as i6 from "@angular/common";
import * as i7 from "@ng-select/ng-select";
function CrmFeesComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 61);
} }
function CrmFeesComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 62);
} }
function CrmFeesComponent_div_49_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const plan_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", plan_r2.description, " ");
} }
function CrmFeesComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 63)(1, "div", 64)(2, "div")(3, "div", 65);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 66);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 67);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "number");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(10, CrmFeesComponent_div_49_div_10_Template, 2, 1, "div", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const plan_r2 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(plan_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(plan_r2.plan_type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind2(9, 4, plan_r2.amount, "1.2-2"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", plan_r2.description);
} }
function CrmFeesComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70);
    i0.ɵɵtext(1, " No plans defined yet ");
    i0.ɵɵelementEnd();
} }
function CrmFeesComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small", 46);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = ctx.item;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.full_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.email);
} }
function CrmFeesComponent_option_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 72);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const plan_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", plan_r4.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(plan_r4.name);
} }
function CrmFeesComponent_span_90_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 61);
} }
function CrmFeesComponent_option_105_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 72);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assignment_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", assignment_r5.assignment.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", assignment_r5.plan == null ? null : assignment_r5.plan.name, " ");
} }
function CrmFeesComponent_span_119_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 61);
} }
function CrmFeesComponent_option_133_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 72);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assignment_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", assignment_r6.assignment.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", assignment_r6.plan == null ? null : assignment_r6.plan.name, " ");
} }
function CrmFeesComponent_span_148_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 61);
} }
function CrmFeesComponent_span_154_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 62);
} }
function CrmFeesComponent_div_155_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77)(1, "div", 78)(2, "span", 65);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 76);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 67);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "number");
    i0.ɵɵpipe(10, "number");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const assignment_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(assignment_r7.plan == null ? null : assignment_r7.plan.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", assignment_r7.balance && assignment_r7.balance > 0 ? "bg-warning text-dark" : "bg-success");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Balance: $", i0.ɵɵpipeBind2(6, 5, assignment_r7.balance, "1.2-2"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" Expected: $", i0.ɵɵpipeBind2(9, 8, assignment_r7.expected, "1.2-2"), " \u00B7 Paid: $", i0.ɵɵpipeBind2(10, 11, assignment_r7.paid || 0, "1.2-2"), " ");
} }
function CrmFeesComponent_div_155_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80)(1, "div", 78)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 67);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 67);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const payment_r8 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("$", i0.ɵɵpipeBind2(4, 3, payment_r8.amount, "1.2-2"), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 6, payment_r8.payment_date));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(payment_r8.payment_method || "Unspecified method");
} }
function CrmFeesComponent_div_155_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CrmFeesComponent_div_155_div_9_div_1_Template, 10, 8, "div", 79);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 1, ctx_r8.overview.payments, 0, 5));
} }
function CrmFeesComponent_div_155_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 81);
    i0.ɵɵtext(1, "No payments recorded yet.");
    i0.ɵɵelementEnd();
} }
function CrmFeesComponent_div_155_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 16)(2, "div", 39)(3, "h6", 65);
    i0.ɵɵtext(4, "Active Assignments");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CrmFeesComponent_div_155_div_5_Template, 11, 14, "div", 73);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 39)(7, "h6", 65);
    i0.ɵɵtext(8, "Recent Payments");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CrmFeesComponent_div_155_div_9_Template, 3, 5, "div", 74)(10, CrmFeesComponent_div_155_ng_template_10_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(12, "hr");
    i0.ɵɵelementStart(13, "div", 75)(14, "div", 65);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 76);
    i0.ɵɵtext(18);
    i0.ɵɵpipe(19, "number");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const noPayments_r10 = i0.ɵɵreference(11);
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r8.overview.assignments);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r8.overview.payments == null ? null : ctx_r8.overview.payments.length)("ngIfElse", noPayments_r10);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Total Paid: $", i0.ɵɵpipeBind2(16, 6, ctx_r8.overview.total_paid, "1.2-2"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r8.overview.overall_balance > 0 ? "bg-danger" : "bg-success");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Outstanding Balance: $", i0.ɵɵpipeBind2(19, 9, ctx_r8.overview.overall_balance, "1.2-2"), " ");
} }
function CrmFeesComponent_ng_template_156_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 83);
    i0.ɵɵtext(1, " Select a student to view billing summary. ");
    i0.ɵɵelementEnd();
} }
function CrmFeesComponent_ng_template_156_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CrmFeesComponent_ng_template_156_div_0_Template, 2, 0, "div", 82);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r8.loadingOverview);
} }
export class CrmFeesComponent {
    constructor(fb, crmService, authService, studentService, toastr) {
        this.fb = fb;
        this.crmService = crmService;
        this.authService = authService;
        this.studentService = studentService;
        this.toastr = toastr;
        this.feePlans = [];
        this.students = [];
        this.overview = null;
        this.selectedStudentId = null;
        this.loadingPlans = false;
        this.loadingOverview = false;
        this.savingPlan = false;
        this.savingAssignment = false;
        this.savingPayment = false;
        this.savingInvoice = false;
        this.schoolId = null;
        this.planForm = this.fb.group({
            id: [],
            name: ['', Validators.required],
            plan_type: ['monthly', Validators.required],
            amount: [0, Validators.required],
            description: [''],
            billing_cycle_days: [null],
            auto_payment_enabled: [false]
        });
        this.assignmentForm = this.fb.group({
            id: [],
            student_id: [null, Validators.required],
            fee_plan_id: [null, Validators.required],
            start_date: ['', Validators.required],
            end_date: [''],
            custom_amount: [''],
            discount_amount: ['0'],
            status: ['active', Validators.required],
            auto_payment_override: ['']
        });
        this.paymentForm = this.fb.group({
            id: [],
            student_id: [null, Validators.required],
            student_fee_plan_id: [null],
            amount: ['', Validators.required],
            payment_date: ['', Validators.required],
            payment_method: [''],
            receipt_number: [''],
            notes: ['']
        });
        this.invoiceForm = this.fb.group({
            id: [],
            student_id: [null, Validators.required],
            student_fee_plan_id: [null, Validators.required],
            amount_due: ['', Validators.required],
            amount_paid: ['0'],
            due_date: ['', Validators.required],
            invoice_number: [''],
            status: ['sent'],
            issued_at: ['']
        });
    }
    ngOnInit() {
        this.schoolId = this.authService.getSessionData('school_id');
        this.loadFeePlans();
        this.loadStudents();
    }
    loadFeePlans() {
        if (!this.schoolId) {
            return;
        }
        this.loadingPlans = true;
        this.crmService.listFeePlans({ school_id: this.schoolId }).subscribe({
            next: (response) => {
                this.loadingPlans = false;
                if (response?.IsSuccess) {
                    this.feePlans = response.ResponseObject || [];
                }
                else {
                    this.feePlans = [];
                    this.toastr.error(response?.ErrorObject || 'Unable to load fee plans');
                }
            },
            error: () => {
                this.loadingPlans = false;
                this.toastr.error('Unable to load fee plans');
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
    savePlan() {
        if (this.planForm.invalid || !this.schoolId) {
            this.planForm.markAllAsTouched();
            return;
        }
        this.savingPlan = true;
        const payload = {
            ...this.planForm.value,
            amount: Number(this.planForm.value.amount || 0),
            billing_cycle_days: this.planForm.value.billing_cycle_days ? Number(this.planForm.value.billing_cycle_days) : null,
            auto_payment_enabled: this.planForm.value.auto_payment_enabled ? 1 : 0,
            school_id: this.schoolId
        };
        this.crmService.saveFeePlan(payload).subscribe({
            next: (response) => {
                if (response?.IsSuccess) {
                    this.toastr.success('Fee plan saved');
                    this.planForm.reset({ plan_type: 'monthly', amount: 0, auto_payment_enabled: false });
                    this.loadFeePlans();
                }
                else {
                    this.toastr.error(response?.ErrorObject || 'Unable to save plan');
                }
            },
            error: () => {
                this.toastr.error('Unable to save plan');
            }
        }).add(() => {
            this.savingPlan = false;
        });
    }
    assignPlan() {
        if (this.assignmentForm.invalid) {
            this.assignmentForm.markAllAsTouched();
            return;
        }
        this.savingAssignment = true;
        const payload = {
            ...this.assignmentForm.value,
            student_id: Number(this.assignmentForm.value.student_id),
            fee_plan_id: Number(this.assignmentForm.value.fee_plan_id),
            custom_amount: this.assignmentForm.value.custom_amount || null,
            discount_amount: this.assignmentForm.value.discount_amount || '0'
        };
        this.crmService.assignFeePlan(payload).subscribe({
            next: (response) => {
                if (response?.IsSuccess) {
                    this.toastr.success('Plan assignment saved');
                    this.assignmentForm.reset({ status: 'active' });
                    if (this.selectedStudentId) {
                        this.loadOverview(this.selectedStudentId);
                    }
                }
                else {
                    this.toastr.error(response?.ErrorObject || 'Unable to assign plan');
                }
            },
            error: () => {
                this.toastr.error('Unable to assign plan');
            }
        }).add(() => {
            this.savingAssignment = false;
        });
    }
    loadOverview(studentId) {
        if (!studentId) {
            this.overview = null;
            return;
        }
        this.selectedStudentId = studentId;
        this.loadingOverview = true;
        this.crmService.studentOverview({ student_id: studentId }).subscribe({
            next: (response) => {
                this.loadingOverview = false;
                if (response?.IsSuccess) {
                    this.overview = response.ResponseObject || null;
                    const assignments = this.overview?.assignments || [];
                    const feePlanOptions = assignments.map((item) => ({
                        id: item.assignment.id,
                        label: `${item.plan?.name || 'Plan'} (Balance: $${(item.balance ?? 0).toFixed(2)})`
                    }));
                    if (feePlanOptions.length) {
                        const defaultPlanId = feePlanOptions[0].id;
                        if (!this.paymentForm.get('student_fee_plan_id')?.value) {
                            this.paymentForm.patchValue({ student_fee_plan_id: defaultPlanId });
                        }
                        if (!this.invoiceForm.get('student_fee_plan_id')?.value) {
                            this.invoiceForm.patchValue({ student_fee_plan_id: defaultPlanId });
                        }
                    }
                }
                else {
                    this.overview = null;
                    this.toastr.error(response?.ErrorObject || 'Unable to load student overview');
                }
            },
            error: () => {
                this.loadingOverview = false;
                this.overview = null;
                this.toastr.error('Unable to load student overview');
            }
        });
    }
    recordPayment() {
        if (this.paymentForm.invalid) {
            this.paymentForm.markAllAsTouched();
            return;
        }
        this.savingPayment = true;
        const payload = {
            ...this.paymentForm.value,
            student_id: Number(this.paymentForm.value.student_id),
            student_fee_plan_id: this.paymentForm.value.student_fee_plan_id ? Number(this.paymentForm.value.student_fee_plan_id) : null,
            amount: Number(this.paymentForm.value.amount)
        };
        this.crmService.recordPayment(payload).subscribe({
            next: (response) => {
                if (response?.IsSuccess) {
                    this.toastr.success('Payment recorded');
                    const studentId = this.paymentForm.value.student_id;
                    this.paymentForm.reset({ student_id: studentId, payment_date: '', amount: '' });
                    if (this.selectedStudentId) {
                        this.loadOverview(this.selectedStudentId);
                    }
                }
                else {
                    this.toastr.error(response?.ErrorObject || 'Unable to record payment');
                }
            },
            error: () => {
                this.toastr.error('Unable to record payment');
            }
        }).add(() => {
            this.savingPayment = false;
        });
    }
    generateInvoice() {
        if (this.invoiceForm.invalid) {
            this.invoiceForm.markAllAsTouched();
            return;
        }
        this.savingInvoice = true;
        const payload = {
            ...this.invoiceForm.value,
            student_id: Number(this.invoiceForm.value.student_id),
            student_fee_plan_id: Number(this.invoiceForm.value.student_fee_plan_id),
            amount_due: Number(this.invoiceForm.value.amount_due),
            amount_paid: Number(this.invoiceForm.value.amount_paid || 0)
        };
        this.crmService.generateInvoice(payload).subscribe({
            next: (response) => {
                if (response?.IsSuccess) {
                    this.toastr.success('Invoice generated');
                    if (this.selectedStudentId) {
                        this.loadOverview(this.selectedStudentId);
                    }
                }
                else {
                    this.toastr.error(response?.ErrorObject || 'Unable to generate invoice');
                }
            },
            error: () => {
                this.toastr.error('Unable to generate invoice');
            }
        }).add(() => {
            this.savingInvoice = false;
        });
    }
    onSelectStudent(studentId) {
        const id = studentId === null || studentId === '' ? null : Number(studentId);
        this.paymentForm.patchValue({ student_id: id });
        this.invoiceForm.patchValue({ student_id: id });
        this.assignmentForm.patchValue({ student_id: id });
        this.loadOverview(id);
    }
    getStudentName(studentId) {
        if (!studentId) {
            return '';
        }
        const match = this.students.find((item) => +item.id === +studentId);
        return match ? match.full_name : `Student #${studentId}`;
    }
    static { this.ɵfac = function CrmFeesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CrmFeesComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.CrmService), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.StudentService), i0.ɵɵdirectiveInject(i5.ToastrService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CrmFeesComponent, selectors: [["app-crm-fees"]], decls: 158, vars: 23, consts: [["overviewPlaceholder", ""], ["noPayments", ""], [1, "row", "g-4"], [1, "col-lg-4"], [1, "card", "mb-4"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], ["formControlName", "name", "placeholder", "Monthly Tuition", 1, "form-control"], ["formControlName", "plan_type", 1, "form-select"], ["value", "monthly"], ["value", "prepaid"], ["value", "per_class"], [1, "row"], [1, "col-sm-6", "mb-3"], ["type", "number", "min", "0", "step", "0.01", "formControlName", "amount", 1, "form-control"], ["type", "number", "min", "0", "formControlName", "billing_cycle_days", 1, "form-control"], [1, "form-check", "form-switch", "mb-3"], ["type", "checkbox", "role", "switch", "formControlName", "auto_payment_enabled", "id", "autoPaySwitch", 1, "form-check-input"], ["for", "autoPaySwitch", 1, "form-check-label"], ["rows", "2", "formControlName", "description", "placeholder", "Optional notes for this plan", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "card", "plan-list-card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "card-body", "p-0"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["class", "list-group-item text-center text-muted", 4, "ngIf"], [1, "col-lg-8"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-2"], [1, "w-auto"], ["bindLabel", "full_name", "bindValue", "id", "placeholder", "Select a student", 3, "change", "items", "clearable"], ["ng-option-tmp", ""], [1, "row", "g-3"], [1, "col-md-6"], [1, "card", "h-100"], ["formControlName", "fee_plan_id", 1, "form-select"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", "formControlName", "start_date", 1, "form-control"], ["type", "number", "min", "0", "step", "0.01", "formControlName", "custom_amount", 1, "form-control"], [1, "text-muted"], ["type", "number", "min", "0", "step", "0.01", "formControlName", "discount_amount", 1, "form-control"], ["type", "submit", 1, "btn", "btn-outline-primary", "w-100", 3, "disabled"], [1, "card", "h-100", "mb-3"], ["formControlName", "student_fee_plan_id", 1, "form-select"], ["value", ""], ["type", "date", "formControlName", "payment_date", 1, "form-control"], ["formControlName", "payment_method", "placeholder", "Card / Cash / ACH", 1, "form-control"], ["type", "submit", 1, "btn", "btn-outline-success", "w-100", 3, "disabled"], ["type", "number", "min", "0", "step", "0.01", "formControlName", "amount_due", 1, "form-control"], ["type", "number", "min", "0", "step", "0.01", "formControlName", "amount_paid", 1, "form-control"], ["type", "date", "formControlName", "due_date", 1, "form-control"], ["type", "submit", 1, "btn", "btn-outline-secondary", "w-100", 3, "disabled"], [1, "card"], ["class", "card-body", 4, "ngIf", "ngIfElse"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "spinner-border", "spinner-border-sm"], [1, "list-group-item"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "fw-semibold"], [1, "text-muted", "small", "text-uppercase"], [1, "text-muted", "small"], ["class", "text-muted small mt-1", 4, "ngIf"], [1, "text-muted", "small", "mt-1"], [1, "list-group-item", "text-center", "text-muted"], [1, "d-flex", "flex-column"], [3, "value"], ["class", "assignment-tile", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "badge", 3, "ngClass"], [1, "assignment-tile"], [1, "d-flex", "justify-content-between"], ["class", "payment-item", 4, "ngFor", "ngForOf"], [1, "payment-item"], [1, "text-muted", "small", "mb-0"], ["class", "card-body text-center text-muted", 4, "ngIf"], [1, "card-body", "text-center", "text-muted"]], template: function CrmFeesComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h5", 6);
            i0.ɵɵtext(5, "Fee Plan Builder");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 7)(7, "form", 8);
            i0.ɵɵlistener("ngSubmit", function CrmFeesComponent_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.savePlan()); });
            i0.ɵɵelementStart(8, "div", 9)(9, "label", 10);
            i0.ɵɵtext(10, "Plan Name *");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "input", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 9)(13, "label", 10);
            i0.ɵɵtext(14, "Plan Type *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "select", 12)(16, "option", 13);
            i0.ɵɵtext(17, "Monthly");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "option", 14);
            i0.ɵɵtext(19, "Prepaid");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "option", 15);
            i0.ɵɵtext(21, "Per Class");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(22, "div", 16)(23, "div", 17)(24, "label", 10);
            i0.ɵɵtext(25, "Amount (USD)*");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(26, "input", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 17)(28, "label", 10);
            i0.ɵɵtext(29, "Billing Cycle (days)");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(30, "input", 19);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "div", 20);
            i0.ɵɵelement(32, "input", 21);
            i0.ɵɵelementStart(33, "label", 22);
            i0.ɵɵtext(34, "Enable Auto Payments");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "div", 9)(36, "label", 10);
            i0.ɵɵtext(37, "Description");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(38, "textarea", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "button", 24);
            i0.ɵɵtemplate(40, CrmFeesComponent_span_40_Template, 1, 0, "span", 25);
            i0.ɵɵtext(41, " Save Plan ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(42, "div", 26)(43, "div", 27)(44, "h6", 6);
            i0.ɵɵtext(45, "Available Plans");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(46, CrmFeesComponent_span_46_Template, 1, 0, "span", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "div", 29)(48, "div", 30);
            i0.ɵɵtemplate(49, CrmFeesComponent_div_49_Template, 11, 7, "div", 31)(50, CrmFeesComponent_div_50_Template, 2, 0, "div", 32);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(51, "div", 33)(52, "div", 4)(53, "div", 34)(54, "h5", 6);
            i0.ɵɵtext(55, "Student Billing Workspace");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "div", 35)(57, "ng-select", 36);
            i0.ɵɵlistener("change", function CrmFeesComponent_Template_ng_select_change_57_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onSelectStudent($event)); });
            i0.ɵɵtemplate(58, CrmFeesComponent_ng_template_58_Template, 5, 2, "ng-template", 37);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(59, "div", 7)(60, "div", 38)(61, "div", 39)(62, "div", 40)(63, "div", 5)(64, "h6", 6);
            i0.ɵɵtext(65, "Assign Plan");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(66, "div", 7)(67, "form", 8);
            i0.ɵɵlistener("ngSubmit", function CrmFeesComponent_Template_form_ngSubmit_67_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.assignPlan()); });
            i0.ɵɵelementStart(68, "div", 9)(69, "label", 10);
            i0.ɵɵtext(70, "Plan *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "select", 41)(72, "option", 42);
            i0.ɵɵtext(73, "Select plan");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(74, CrmFeesComponent_option_74_Template, 2, 2, "option", 43);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(75, "div", 9)(76, "label", 10);
            i0.ɵɵtext(77, "Start Date *");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(78, "input", 44);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "div", 9)(80, "label", 10);
            i0.ɵɵtext(81, "Custom Amount");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(82, "input", 45);
            i0.ɵɵelementStart(83, "small", 46);
            i0.ɵɵtext(84, "Leave blank to use plan default");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(85, "div", 9)(86, "label", 10);
            i0.ɵɵtext(87, "Discount");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(88, "input", 47);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "button", 48);
            i0.ɵɵtemplate(90, CrmFeesComponent_span_90_Template, 1, 0, "span", 25);
            i0.ɵɵtext(91, " Save Assignment ");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(92, "div", 39)(93, "div", 49)(94, "div", 5)(95, "h6", 6);
            i0.ɵɵtext(96, "Record Payment");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(97, "div", 7)(98, "form", 8);
            i0.ɵɵlistener("ngSubmit", function CrmFeesComponent_Template_form_ngSubmit_98_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.recordPayment()); });
            i0.ɵɵelementStart(99, "div", 9)(100, "label", 10);
            i0.ɵɵtext(101, "Applied Assignment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(102, "select", 50)(103, "option", 51);
            i0.ɵɵtext(104, "Unassigned");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(105, CrmFeesComponent_option_105_Template, 2, 2, "option", 43);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(106, "div", 9)(107, "label", 10);
            i0.ɵɵtext(108, "Amount *");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(109, "input", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "div", 9)(111, "label", 10);
            i0.ɵɵtext(112, "Payment Date *");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(113, "input", 52);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "div", 9)(115, "label", 10);
            i0.ɵɵtext(116, "Method");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(117, "input", 53);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "button", 54);
            i0.ɵɵtemplate(119, CrmFeesComponent_span_119_Template, 1, 0, "span", 25);
            i0.ɵɵtext(120, " Record Payment ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(121, "div", 40)(122, "div", 5)(123, "h6", 6);
            i0.ɵɵtext(124, "Invoice & Receipt");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(125, "div", 7)(126, "form", 8);
            i0.ɵɵlistener("ngSubmit", function CrmFeesComponent_Template_form_ngSubmit_126_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.generateInvoice()); });
            i0.ɵɵelementStart(127, "div", 9)(128, "label", 10);
            i0.ɵɵtext(129, "Assignment *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(130, "select", 50)(131, "option", 42);
            i0.ɵɵtext(132, "Select assignment");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(133, CrmFeesComponent_option_133_Template, 2, 2, "option", 43);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(134, "div", 16)(135, "div", 17)(136, "label", 10);
            i0.ɵɵtext(137, "Amount Due *");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(138, "input", 55);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(139, "div", 17)(140, "label", 10);
            i0.ɵɵtext(141, "Amount Paid");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(142, "input", 56);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(143, "div", 9)(144, "label", 10);
            i0.ɵɵtext(145, "Due Date *");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(146, "input", 57);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(147, "button", 58);
            i0.ɵɵtemplate(148, CrmFeesComponent_span_148_Template, 1, 0, "span", 25);
            i0.ɵɵtext(149, " Generate Invoice PDF ");
            i0.ɵɵelementEnd()()()()()()()();
            i0.ɵɵelementStart(150, "div", 59)(151, "div", 27)(152, "h5", 6);
            i0.ɵɵtext(153, "Billing Overview");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(154, CrmFeesComponent_span_154_Template, 1, 0, "span", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(155, CrmFeesComponent_div_155_Template, 20, 12, "div", 60);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(156, CrmFeesComponent_ng_template_156_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const overviewPlaceholder_r11 = i0.ɵɵreference(157);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.planForm);
            i0.ɵɵadvance(32);
            i0.ɵɵproperty("disabled", ctx.savingPlan);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.savingPlan);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.loadingPlans);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.feePlans);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.feePlans.length && !ctx.loadingPlans);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("items", ctx.students)("clearable", true);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("formGroup", ctx.assignmentForm);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.feePlans);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("disabled", ctx.savingAssignment);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.savingAssignment);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("formGroup", ctx.paymentForm);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.overview == null ? null : ctx.overview.assignments);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("disabled", ctx.savingPayment);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.savingPayment);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.invoiceForm);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.overview == null ? null : ctx.overview.assignments);
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("disabled", ctx.savingInvoice);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.savingInvoice);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.loadingOverview);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.overview && !ctx.loadingOverview)("ngIfElse", overviewPlaceholder_r11);
        } }, dependencies: [i6.NgClass, i6.NgForOf, i6.NgIf, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MinValidator, i1.FormGroupDirective, i1.FormControlName, i7.NgSelectComponent, i7.NgOptionTemplateDirective, i6.SlicePipe, i6.DecimalPipe, i6.DatePipe], styles: [".plan-list-card[_ngcontent-%COMP%] {\n  max-height: 340px;\n  overflow-y: auto;\n}\n\n.assignment-tile[_ngcontent-%COMP%], \n.payment-item[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 0.5rem;\n  padding: 0.75rem;\n  margin-bottom: 0.75rem;\n  background-color: #f8f9fa;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrmFeesComponent, [{
        type: Component,
        args: [{ selector: 'app-crm-fees', template: "<div class=\"row g-4\">\n  <div class=\"col-lg-4\">\n    <div class=\"card mb-4\">\n      <div class=\"card-header\">\n        <h5 class=\"mb-0\">Fee Plan Builder</h5>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"planForm\" (ngSubmit)=\"savePlan()\">\n          <div class=\"mb-3\">\n            <label class=\"form-label\">Plan Name *</label>\n            <input class=\"form-control\" formControlName=\"name\" placeholder=\"Monthly Tuition\" />\n          </div>\n\n          <div class=\"mb-3\">\n            <label class=\"form-label\">Plan Type *</label>\n            <select class=\"form-select\" formControlName=\"plan_type\">\n              <option value=\"monthly\">Monthly</option>\n              <option value=\"prepaid\">Prepaid</option>\n              <option value=\"per_class\">Per Class</option>\n            </select>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-6 mb-3\">\n              <label class=\"form-label\">Amount (USD)*</label>\n              <input class=\"form-control\" type=\"number\" min=\"0\" step=\"0.01\" formControlName=\"amount\" />\n            </div>\n            <div class=\"col-sm-6 mb-3\">\n              <label class=\"form-label\">Billing Cycle (days)</label>\n              <input class=\"form-control\" type=\"number\" min=\"0\" formControlName=\"billing_cycle_days\" />\n            </div>\n          </div>\n\n          <div class=\"form-check form-switch mb-3\">\n            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" formControlName=\"auto_payment_enabled\" id=\"autoPaySwitch\" />\n            <label class=\"form-check-label\" for=\"autoPaySwitch\">Enable Auto Payments</label>\n          </div>\n\n          <div class=\"mb-3\">\n            <label class=\"form-label\">Description</label>\n            <textarea class=\"form-control\" rows=\"2\" formControlName=\"description\" placeholder=\"Optional notes for this plan\"></textarea>\n          </div>\n\n          <button class=\"btn btn-primary w-100\" type=\"submit\" [disabled]=\"savingPlan\">\n            <span *ngIf=\"savingPlan\" class=\"spinner-border spinner-border-sm me-2\"></span>\n            Save Plan\n          </button>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"card plan-list-card\">\n      <div class=\"card-header d-flex justify-content-between align-items-center\">\n        <h6 class=\"mb-0\">Available Plans</h6>\n        <span *ngIf=\"loadingPlans\" class=\"spinner-border spinner-border-sm\"></span>\n      </div>\n      <div class=\"card-body p-0\">\n        <div class=\"list-group list-group-flush\">\n          <div class=\"list-group-item\" *ngFor=\"let plan of feePlans\">\n            <div class=\"d-flex justify-content-between align-items-start\">\n              <div>\n                <div class=\"fw-semibold\">{{ plan.name }}</div>\n                <div class=\"text-muted small text-uppercase\">{{ plan.plan_type }}</div>\n                <div class=\"text-muted small\">${{ plan.amount | number: '1.2-2' }}</div>\n              </div>\n            </div>\n            <div class=\"text-muted small mt-1\" *ngIf=\"plan.description\">\n              {{ plan.description }}\n            </div>\n          </div>\n          <div class=\"list-group-item text-center text-muted\" *ngIf=\"!feePlans.length && !loadingPlans\">\n            No plans defined yet\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-8\">\n    <div class=\"card mb-4\">\n      <div class=\"card-header d-flex justify-content-between align-items-center flex-wrap gap-2\">\n        <h5 class=\"mb-0\">Student Billing Workspace</h5>\n        <div class=\"w-auto\">\n          <ng-select\n            [items]=\"students\"\n            bindLabel=\"full_name\"\n            bindValue=\"id\"\n            placeholder=\"Select a student\"\n            [clearable]=\"true\"\n            (change)=\"onSelectStudent($event)\"\n          >\n            <ng-template ng-option-tmp let-item=\"item\">\n              <div class=\"d-flex flex-column\">\n                <span>{{ item.full_name }}</span>\n                <small class=\"text-muted\">{{ item.email }}</small>\n              </div>\n            </ng-template>\n          </ng-select>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row g-3\">\n          <div class=\"col-md-6\">\n            <div class=\"card h-100\">\n              <div class=\"card-header\">\n                <h6 class=\"mb-0\">Assign Plan</h6>\n              </div>\n              <div class=\"card-body\">\n                <form [formGroup]=\"assignmentForm\" (ngSubmit)=\"assignPlan()\">\n                  <div class=\"mb-3\">\n                    <label class=\"form-label\">Plan *</label>\n                    <select class=\"form-select\" formControlName=\"fee_plan_id\">\n                      <option value=\"\" disabled>Select plan</option>\n                      <option *ngFor=\"let plan of feePlans\" [value]=\"plan.id\">{{ plan.name }}</option>\n                    </select>\n                  </div>\n                  <div class=\"mb-3\">\n                    <label class=\"form-label\">Start Date *</label>\n                    <input class=\"form-control\" type=\"date\" formControlName=\"start_date\" />\n                  </div>\n                  <div class=\"mb-3\">\n                    <label class=\"form-label\">Custom Amount</label>\n                    <input class=\"form-control\" type=\"number\" min=\"0\" step=\"0.01\" formControlName=\"custom_amount\" />\n                    <small class=\"text-muted\">Leave blank to use plan default</small>\n                  </div>\n                  <div class=\"mb-3\">\n                    <label class=\"form-label\">Discount</label>\n                    <input class=\"form-control\" type=\"number\" min=\"0\" step=\"0.01\" formControlName=\"discount_amount\" />\n                  </div>\n                  <button class=\"btn btn-outline-primary w-100\" type=\"submit\" [disabled]=\"savingAssignment\">\n                    <span *ngIf=\"savingAssignment\" class=\"spinner-border spinner-border-sm me-2\"></span>\n                    Save Assignment\n                  </button>\n                </form>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <div class=\"card h-100 mb-3\">\n              <div class=\"card-header\">\n                <h6 class=\"mb-0\">Record Payment</h6>\n              </div>\n              <div class=\"card-body\">\n                <form [formGroup]=\"paymentForm\" (ngSubmit)=\"recordPayment()\">\n                  <div class=\"mb-3\">\n                    <label class=\"form-label\">Applied Assignment</label>\n                    <select class=\"form-select\" formControlName=\"student_fee_plan_id\">\n                      <option value=\"\">Unassigned</option>\n                      <option *ngFor=\"let assignment of overview?.assignments\" [value]=\"assignment.assignment.id\">\n                        {{ assignment.plan?.name }}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"mb-3\">\n                    <label class=\"form-label\">Amount *</label>\n                    <input class=\"form-control\" type=\"number\" min=\"0\" step=\"0.01\" formControlName=\"amount\" />\n                  </div>\n                  <div class=\"mb-3\">\n                    <label class=\"form-label\">Payment Date *</label>\n                    <input class=\"form-control\" type=\"date\" formControlName=\"payment_date\" />\n                  </div>\n                  <div class=\"mb-3\">\n                    <label class=\"form-label\">Method</label>\n                    <input class=\"form-control\" formControlName=\"payment_method\" placeholder=\"Card / Cash / ACH\" />\n                  </div>\n                  <button class=\"btn btn-outline-success w-100\" type=\"submit\" [disabled]=\"savingPayment\">\n                    <span *ngIf=\"savingPayment\" class=\"spinner-border spinner-border-sm me-2\"></span>\n                    Record Payment\n                  </button>\n                </form>\n              </div>\n            </div>\n\n            <div class=\"card h-100\">\n              <div class=\"card-header\">\n                <h6 class=\"mb-0\">Invoice & Receipt</h6>\n              </div>\n              <div class=\"card-body\">\n                <form [formGroup]=\"invoiceForm\" (ngSubmit)=\"generateInvoice()\">\n                  <div class=\"mb-3\">\n                    <label class=\"form-label\">Assignment *</label>\n                    <select class=\"form-select\" formControlName=\"student_fee_plan_id\">\n                      <option value=\"\" disabled>Select assignment</option>\n                      <option *ngFor=\"let assignment of overview?.assignments\" [value]=\"assignment.assignment.id\">\n                        {{ assignment.plan?.name }}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 mb-3\">\n                      <label class=\"form-label\">Amount Due *</label>\n                      <input class=\"form-control\" type=\"number\" min=\"0\" step=\"0.01\" formControlName=\"amount_due\" />\n                    </div>\n                    <div class=\"col-sm-6 mb-3\">\n                      <label class=\"form-label\">Amount Paid</label>\n                      <input class=\"form-control\" type=\"number\" min=\"0\" step=\"0.01\" formControlName=\"amount_paid\" />\n                    </div>\n                  </div>\n                  <div class=\"mb-3\">\n                    <label class=\"form-label\">Due Date *</label>\n                    <input class=\"form-control\" type=\"date\" formControlName=\"due_date\" />\n                  </div>\n                  <button class=\"btn btn-outline-secondary w-100\" type=\"submit\" [disabled]=\"savingInvoice\">\n                    <span *ngIf=\"savingInvoice\" class=\"spinner-border spinner-border-sm me-2\"></span>\n                    Generate Invoice PDF\n                  </button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header d-flex justify-content-between align-items-center\">\n        <h5 class=\"mb-0\">Billing Overview</h5>\n        <span *ngIf=\"loadingOverview\" class=\"spinner-border spinner-border-sm\"></span>\n      </div>\n      <div class=\"card-body\" *ngIf=\"overview && !loadingOverview; else overviewPlaceholder\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h6 class=\"fw-semibold\">Active Assignments</h6>\n            <div class=\"assignment-tile\" *ngFor=\"let assignment of overview.assignments\">\n              <div class=\"d-flex justify-content-between\">\n                <span class=\"fw-semibold\">{{ assignment.plan?.name }}</span>\n                <span class=\"badge\" [ngClass]=\"assignment.balance && assignment.balance > 0 ? 'bg-warning text-dark' : 'bg-success'\">\n                  Balance: ${{ assignment.balance | number: '1.2-2' }}\n                </span>\n              </div>\n              <div class=\"text-muted small\">\n                Expected: ${{ assignment.expected | number: '1.2-2' }} \u00B7 Paid: ${{ assignment.paid || 0 | number: '1.2-2' }}\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <h6 class=\"fw-semibold\">Recent Payments</h6>\n            <div *ngIf=\"overview.payments?.length; else noPayments\">\n              <div class=\"payment-item\" *ngFor=\"let payment of overview.payments | slice:0:5\">\n                <div class=\"d-flex justify-content-between\">\n                  <span>${{ payment.amount | number: '1.2-2' }}</span>\n                  <span class=\"text-muted small\">{{ payment.payment_date | date }}</span>\n                </div>\n                <div class=\"text-muted small\">{{ payment.payment_method || 'Unspecified method' }}</div>\n              </div>\n            </div>\n            <ng-template #noPayments>\n              <p class=\"text-muted small mb-0\">No payments recorded yet.</p>\n            </ng-template>\n          </div>\n        </div>\n        <hr />\n        <div class=\"d-flex justify-content-between align-items-center\">\n          <div class=\"fw-semibold\">Total Paid: ${{ overview.total_paid | number: '1.2-2' }}</div>\n          <div class=\"badge\" [ngClass]=\"overview.overall_balance > 0 ? 'bg-danger' : 'bg-success'\">\n            Outstanding Balance: ${{ overview.overall_balance | number: '1.2-2' }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #overviewPlaceholder>\n  <div class=\"card-body text-center text-muted\" *ngIf=\"!loadingOverview\">\n    Select a student to view billing summary.\n  </div>\n</ng-template>\n", styles: [".plan-list-card {\n  max-height: 340px;\n  overflow-y: auto;\n}\n\n.assignment-tile,\n.payment-item {\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 0.5rem;\n  padding: 0.75rem;\n  margin-bottom: 0.75rem;\n  background-color: #f8f9fa;\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.CrmService }, { type: i3.AuthService }, { type: i4.StudentService }, { type: i5.ToastrService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CrmFeesComponent, { className: "CrmFeesComponent" }); })();
//# sourceMappingURL=fees.component.js.map