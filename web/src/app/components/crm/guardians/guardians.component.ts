import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CrmService } from '../../../shared/service/crm.service';
import { AuthService } from '../../../shared/service/auth.service';
import { StudentService } from '../../../shared/service/student.service';

interface GuardianListItem {
  id: number;
  first_name: string;
  last_name?: string;
  email?: string;
  phone?: string;
  relationship?: string;
  communication_preference?: string;
  notes?: string;
  status?: number;
  students?: Array<{
    id: number;
    student_id: number;
    student_name?: string;
    student_email?: string;
    grade_id?: string | number | null;
    is_primary?: number;
  }>;
}

@Component({
  selector: 'app-crm-guardians',
  templateUrl: './guardians.component.html',
  styleUrls: ['./guardians.component.scss']
})
export class CrmGuardiansComponent implements OnInit {
  guardianForm: FormGroup;
  guardians: GuardianListItem[] = [];
  students: any[] = [];
  loading = false;
  saving = false;
  schoolId: string | null = null;
  filters = {
    search: ''
  };

  constructor(
    private fb: FormBuilder,
    private crmService: CrmService,
    private authService: AuthService,
    private studentService: StudentService,
    private toastr: ToastrService
  ) {
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

  ngOnInit(): void {
    this.schoolId = this.authService.getSessionData('school_id');
    this.loadStudents();
    this.loadGuardians();
  }

  loadGuardians(): void {
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
      next: (response: any) => {
        this.loading = false;
        if (response?.IsSuccess) {
          this.guardians = response.ResponseObject || [];
        } else {
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

  submitGuardian(): void {
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
      next: (response: any) => {
        if (response?.IsSuccess) {
          const guardian = response.ResponseObject;
          const guardianId = Number(guardian?.id ?? formValue.id);
          const studentIds = Array.isArray(formValue.student_ids)
            ? formValue.student_ids.filter((id: any) => !!id).map((id: any) => Number(id))
            : [];

          if (guardianId && studentIds.length > 0) {
            this.assignStudents(
              guardianId,
              studentIds,
              formValue.primary_student_id ? Number(formValue.primary_student_id) : undefined
            );
          } else {
            this.toastr.success('Guardian saved');
            this.resetForm();
            this.loadGuardians();
          }
        } else {
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

  assignStudents(guardianId: number, studentIds: number[], primaryStudentId?: number): void {
    const payload = {
      guardian_id: guardianId,
      student_ids: studentIds,
      primary_student_id: primaryStudentId || studentIds[0],
      reset_existing: true
    };

    this.crmService.assignGuardian(payload).subscribe({
      next: (response: any) => {
        if (response?.IsSuccess) {
          this.toastr.success('Guardian saved and linked to students');
          this.resetForm();
          this.loadGuardians();
        } else {
          this.toastr.error(response?.ErrorObject || 'Guardian saved but failed to link students');
        }
      },
      error: () => {
        this.toastr.error('Guardian saved but failed to link students');
      }
    });
  }

  editGuardian(guardian: GuardianListItem): void {
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

  removeGuardian(guardian: GuardianListItem, studentId?: number): void {
    const confirmMessage = studentId
      ? 'Unlink this guardian from the selected student?'
      : 'Delete this guardian and all student associations?';

    if (!confirm(confirmMessage)) {
      return;
    }

    const payload: any = {
      guardian_id: guardian.id
    };

    if (studentId) {
      payload.student_id = studentId;
    }

    this.crmService.removeGuardian(payload).subscribe({
      next: (response: any) => {
        if (response?.IsSuccess) {
          this.toastr.success(studentId ? 'Guardian unlinked' : 'Guardian removed');
          this.loadGuardians();
        } else {
          this.toastr.error(response?.ErrorObject || 'Unable to update guardian');
        }
      },
      error: () => {
        this.toastr.error('Unable to update guardian');
      }
    });
  }

  resetForm(): void {
    this.guardianForm.reset({
      communication_preference: 'both',
      status: 1,
      student_ids: [],
      primary_student_id: ''
    });
  }

  search(): void {
    this.loadGuardians();
  }

  clearSearch(): void {
    this.filters.search = '';
    this.loadGuardians();
  }

  getStudentName(studentId: number): string {
    const match = this.students.find((item) => +item.id === +studentId);
    if (!match) {
      return `Student #${studentId}`;
    }
    return `${match.first_name ?? ''} ${match.last_name ?? ''}`.trim() || `Student #${studentId}`;
  }
}
