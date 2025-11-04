import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CrmService } from '../../../shared/service/crm.service';
import { AuthService } from '../../../shared/service/auth.service';
import { StudentService } from '../../../shared/service/student.service';

interface FeePlan {
  id?: number;
  name: string;
  plan_type: string;
  amount: number;
  billing_cycle_days?: number | null;
  auto_payment_enabled?: number;
  description?: string;
}

interface StudentOverview {
  assignments: Array<{
    plan: FeePlan;
    assignment: any;
    expected: number;
    paid?: number;
    balance?: number;
  }>;
  payments: Array<any>;
  total_paid: number;
  overall_balance: number;
}

@Component({
  selector: 'app-crm-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.scss']
})
export class CrmFeesComponent implements OnInit {
  planForm: FormGroup;
  assignmentForm: FormGroup;
  paymentForm: FormGroup;
  invoiceForm: FormGroup;

  feePlans: FeePlan[] = [];
  students: any[] = [];
  overview: StudentOverview | null = null;
  selectedStudentId: number | null = null;

  loadingPlans = false;
  loadingOverview = false;
  savingPlan = false;
  savingAssignment = false;
  savingPayment = false;
  savingInvoice = false;

  schoolId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private crmService: CrmService,
    private authService: AuthService,
    private studentService: StudentService,
    private toastr: ToastrService
  ) {
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

  ngOnInit(): void {
    this.schoolId = this.authService.getSessionData('school_id');
    this.loadFeePlans();
    this.loadStudents();
  }

  loadFeePlans(): void {
    if (!this.schoolId) {
      return;
    }

    this.loadingPlans = true;
    this.crmService.listFeePlans({ school_id: this.schoolId }).subscribe({
      next: (response: any) => {
        this.loadingPlans = false;
        if (response?.IsSuccess) {
          this.feePlans = response.ResponseObject || [];
        } else {
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

  loadStudents(): void {
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
      next: (response: any) => {
        if (response?.IsSuccess) {
          this.students = (response.ResponseObject || []).map((item: any) => ({
            ...item,
            full_name: `${item.first_name ?? ''} ${item.last_name ?? ''}`.trim()
          }));
        } else {
          this.students = [];
        }
      },
      error: () => {
        this.students = [];
      }
    });
  }

  savePlan(): void {
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
      next: (response: any) => {
        if (response?.IsSuccess) {
          this.toastr.success('Fee plan saved');
          this.planForm.reset({ plan_type: 'monthly', amount: 0, auto_payment_enabled: false });
          this.loadFeePlans();
        } else {
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

  assignPlan(): void {
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
      next: (response: any) => {
        if (response?.IsSuccess) {
          this.toastr.success('Plan assignment saved');
          this.assignmentForm.reset({ status: 'active' });
          if (this.selectedStudentId) {
            this.loadOverview(this.selectedStudentId);
          }
        } else {
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

  loadOverview(studentId: number | null): void {
    if (!studentId) {
      this.overview = null;
      return;
    }

    this.selectedStudentId = studentId;
    this.loadingOverview = true;

    this.crmService.studentOverview({ student_id: studentId }).subscribe({
      next: (response: any) => {
        this.loadingOverview = false;
        if (response?.IsSuccess) {
          this.overview = response.ResponseObject || null;
          const assignments = this.overview?.assignments || [];

          const feePlanOptions = assignments.map((item: any) => ({
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
        } else {
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

  recordPayment(): void {
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
      next: (response: any) => {
        if (response?.IsSuccess) {
          this.toastr.success('Payment recorded');
          const studentId = this.paymentForm.value.student_id;
          this.paymentForm.reset({ student_id: studentId, payment_date: '', amount: '' });
          if (this.selectedStudentId) {
            this.loadOverview(this.selectedStudentId);
          }
        } else {
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

  generateInvoice(): void {
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
      next: (response: any) => {
        if (response?.IsSuccess) {
          this.toastr.success('Invoice generated');
          if (this.selectedStudentId) {
            this.loadOverview(this.selectedStudentId);
          }
        } else {
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

  onSelectStudent(studentId: number | string | null): void {
    const id = studentId === null || studentId === '' ? null : Number(studentId);
    this.paymentForm.patchValue({ student_id: id });
    this.invoiceForm.patchValue({ student_id: id });
    this.assignmentForm.patchValue({ student_id: id });
    this.loadOverview(id);
  }

  getStudentName(studentId: number | null): string {
    if (!studentId) {
      return '';
    }
    const match = this.students.find((item) => +item.id === +studentId);
    return match ? match.full_name : `Student #${studentId}`;
  }
}
