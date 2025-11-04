import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CrmService } from '../../../shared/service/crm.service';
import { AuthService } from '../../../shared/service/auth.service';
import { StudentService } from '../../../shared/service/student.service';

interface NotificationTemplate {
  id: number;
  name: string;
  channel: string;
  subject?: string;
  body: string;
}

@Component({
  selector: 'app-crm-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class CrmNotificationsComponent implements OnInit {
  templateForm: FormGroup;
  queueForm: FormGroup;
  optoutForm: FormGroup;

  templates: NotificationTemplate[] = [];
  notifications: any[] = [];
  guardians: any[] = [];
  students: any[] = [];

  loadingTemplates = false;
  loadingNotifications = false;
  savingTemplate = false;
  queuing = false;
  updatingOptout = false;

  schoolId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private crmService: CrmService,
    private authService: AuthService,
    private studentService: StudentService,
    private toastr: ToastrService
  ) {
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

  ngOnInit(): void {
    this.schoolId = this.authService.getSessionData('school_id');
    this.loadTemplates();
    this.loadNotifications();
    this.loadGuardians();
    this.loadStudents();
  }

  loadTemplates(): void {
    if (!this.schoolId) {
      return;
    }

    this.loadingTemplates = true;
    this.crmService.listTemplates({ school_id: this.schoolId }).subscribe({
      next: (response: any) => {
        this.loadingTemplates = false;
        if (response?.IsSuccess) {
          this.templates = response.ResponseObject || [];
        } else {
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

  loadNotifications(): void {
    this.loadingNotifications = true;
    this.crmService.listNotifications({ school_id: this.schoolId }).subscribe({
      next: (response: any) => {
        this.loadingNotifications = false;
        if (response?.IsSuccess) {
          this.notifications = response.ResponseObject || [];
        } else {
          this.notifications = [];
        }
      },
      error: () => {
        this.loadingNotifications = false;
        this.notifications = [];
      }
    });
  }

  loadGuardians(): void {
    if (!this.schoolId) {
      return;
    }

    this.crmService.listGuardians({ school_id: this.schoolId }).subscribe({
      next: (response: any) => {
        if (response?.IsSuccess) {
          this.guardians = (response.ResponseObject || []).map((item: any) => ({
            ...item,
            full_name: `${item.first_name ?? ''} ${item.last_name ?? ''}`.trim()
          }));
        } else {
          this.guardians = [];
        }
      },
      error: () => {
        this.guardians = [];
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

  saveTemplate(): void {
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
      next: (response: any) => {
        if (response?.IsSuccess) {
          this.toastr.success('Template saved');
          this.templateForm.reset({ channel: 'both' });
          this.loadTemplates();
        } else {
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

  queueNotification(): void {
    if (this.queueForm.invalid) {
      this.queueForm.markAllAsTouched();
      return;
    }

    this.queuing = true;
    const variables = this.parseVariables(this.queueForm.value.variablesText);
    const payload: any = {
      template_id: this.queueForm.value.template_id,
      channel: this.queueForm.value.channel,
      recipient_type: this.queueForm.value.recipient_type,
      recipient_id: this.queueForm.value.recipient_id,
      student_id: this.queueForm.value.student_id,
      variables
    };

    this.crmService.queueNotification(payload).subscribe({
      next: (response: any) => {
        if (response?.IsSuccess) {
          this.toastr.success('Notification queued');
          this.queueForm.reset({ channel: 'email', recipient_type: 'guardian' });
          this.loadNotifications();
        } else {
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

  updateOptout(): void {
    if (this.optoutForm.invalid) {
      this.optoutForm.markAllAsTouched();
      return;
    }

    this.updatingOptout = true;
    this.crmService.setOptout(this.optoutForm.value).subscribe({
      next: (response: any) => {
        if (response?.IsSuccess) {
          const optedOut = this.optoutForm.value.opted_out;
          this.toastr.success(optedOut ? 'Contact opted out' : 'Contact opted back in');
        } else {
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

  private parseVariables(input: string): any {
    if (!input) {
      return {};
    }

    try {
      return JSON.parse(input);
    } catch (err) {
      const map: Record<string, string> = {};
      input.split(/\n|,/g).forEach((segment) => {
        const [key, value] = segment.split(/:|=/);
        if (key && value) {
          map[key.trim()] = value.trim();
        }
      });
      return map;
    }
  }
}
