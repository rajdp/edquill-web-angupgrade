import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../shared/service/auth.service';
import { CommonDataService } from '../../../shared/service/common-data.service';

interface RoleOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-quick-create-user',
  templateUrl: './quick-create-user.component.html',
  styleUrls: ['./quick-create-user.component.scss']
})
export class QuickCreateUserComponent {
  form: FormGroup;
  submitting = false;

  roleOptions: RoleOption[] = [
    { value: '6', label: 'Owner / Corp Admin' },
    { value: '2', label: 'School Admin / Staff' },
    { value: '4', label: 'Teacher' },
    { value: '5', label: 'Student' },
    { value: '3', label: 'Parent / Guardian' },
  ];

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private commonData: CommonDataService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.auth.emailValidatorPattern)]],
      roleId: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get emailCtrl() {
    return this.form.get('email');
  }

  get passwordCtrl() {
    return this.form.get('password');
  }

  handleSubmit(): void {
    if (this.submitting) {
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.toastr.error('Please fill all required fields.', 'Quick Add User');
      return;
    }

    const payload = this.buildPayload();
    this.submitting = true;
    this.commonData.showLoader(true);

    this.auth.postService(payload, 'user/create').subscribe({
      next: (response: any) => {
        this.commonData.showLoader(false);
        this.submitting = false;

        const success = response?.IsSuccess ?? false;
        if (success) {
          const message = response?.ResponseObject?.message ?? 'User created successfully';
          this.toastr.success(message, 'Quick Add User');
          this.router.navigate(['/users/user-list']);
        } else {
          const errorMessage = response?.ErrorObject ?? 'Unable to create user.';
          this.toastr.error(errorMessage, 'Quick Add User');
        }
      },
      error: (error) => {
        this.commonData.showLoader(false);
        this.submitting = false;

        const errorMessage = error?.error?.ErrorObject
          ?? error?.error?.message
          ?? 'Unable to create user.';
        this.toastr.error(errorMessage, 'Quick Add User');
      },
    });
  }

  private buildPayload() {
    const schoolId = this.auth.getSessionData('school_id');
    const corporateId = this.auth.getSessionData('corporate_id');
    const normalizedSchoolId = schoolId && !['null', 'undefined', '0', ''].includes(schoolId) ? schoolId : null;
    const normalizedCorporateId = corporateId && !['null', 'undefined', '0', ''].includes(corporateId) ? corporateId : null;

    return {
      email_id: this.form.value.email.trim().toLowerCase(),
      password: this.form.value.password,
      role_id: Number(this.form.value.roleId),
      first_name: this.form.value.firstName.trim(),
      last_name: this.form.value.lastName.trim(),
      school_id: normalizedSchoolId,
      corporate_id: normalizedCorporateId,
    };
  }
}

