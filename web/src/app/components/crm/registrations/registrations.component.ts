import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrmRegistrationsService } from './crm-registrations.service';
import { EnvironmentService } from '../../../environment.service';

interface RegistrationSummary {
  id: number;
  student_first_name: string;
  student_last_name: string;
  email: string;
  mobile: string;
  status: string;
  submitted_at: string;
  assigned_name?: string;
  priority?: string;
  document_count?: number;
  course_count?: number;
}

interface WorkflowStep {
  id: string;
  label: string;
  description: string;
  complete: boolean;
  meta?: string;
}

type DocumentReviewSummaryStatus = 'none' | 'pending' | 'in_progress' | 'complete' | 'rejected';

interface DocumentWorkflow {
  document: any;
  status: 'pending' | 'approved' | 'rejected';
  steps: WorkflowStep[];
}

interface DocumentReviewSummary {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
  status: DocumentReviewSummaryStatus;
  description: string;
  meta: string;
}

interface AssignableUser {
  user_id: number;
  role_id: number;
  role_label: string;
  name: string;
  email?: string | null;
}

@Component({
  selector: 'app-crm-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class CrmRegistrationsComponent implements OnInit {
  filtersForm: FormGroup;
  statusForm: FormGroup;
  noteForm: FormGroup;
  summaryForm: FormGroup;
  studentDetailsForm: FormGroup;
  guardianDetailsForm: FormGroup;
  communicationForm: FormGroup;
  followUpForm: FormGroup;
  conversionForm: FormGroup;
  assignableUsers: AssignableUser[] = [];
  private assignableUserMap = new Map<number, AssignableUser>();

  registrations: RegistrationSummary[] = [];
  pagination = { total: 0, page: 1, limit: 25, pages: 0 };

  selectedRegistrationId: number | null = null;
  registrationDetail: any = null;

  workspaceOpen = false;
  workspaceTab: 'overview' | 'timeline' | 'messages' = 'overview';
  workflowSteps: WorkflowStep[] = [];
  documentWorkflows: DocumentWorkflow[] = [];
  documentReviewSummary: DocumentReviewSummary = {
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
    status: 'none',
    description: 'No documents submitted yet',
    meta: ''
  };
  documentReviewForms: { [documentId: number]: FormGroup } = {};
  documentReviewSaving: { [documentId: number]: boolean } = {};

  showSummaryEditor = false;
  showStudentEditor = false;
  showGuardianEditor = false;
  showMessageForm = true;

  listLoading = false;
  detailLoading = false;
  statusSaving = false;
  noteSaving = false;
  promoteSaving = false;
  summarySaving = false;
  studentSaving = false;
  guardiansSaving = false;
  messageSending = false;
  followUpSaving = false;
  assigneesLoading = false;
  assigneesError = '';

  readonly statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'in_review', label: 'In Review' },
    { value: 'needs_info', label: 'Needs Info' },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' },
    { value: 'converted', label: 'Converted' },
    { value: 'archived', label: 'Archived' }
  ];

  readonly priorityOptions = [
    { value: '', label: 'All priorities' },
    { value: 'normal', label: 'Normal' },
    { value: 'high', label: 'High' },
    { value: 'low', label: 'Low' }
  ];

  readonly noteTypes = [
    { value: 'internal', label: 'Internal' },
    { value: 'request', label: 'Request' },
    { value: 'response', label: 'Response' }
  ];

  readonly paymentMethodOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'card', label: 'Card' },
    { value: 'ach', label: 'ACH' },
    { value: 'cash', label: 'Cash' },
    { value: 'check', label: 'Check' },
    { value: 'waived', label: 'Waived' }
  ];

  readonly decisionOptions = [
    { value: 'pending', label: 'Select decision' },
    { value: 'approved', label: 'Approve and enroll' },
    { value: 'waitlisted', label: 'Waitlist' },
    { value: 'declined', label: 'Decline' }
  ];

  constructor(
    private fb: FormBuilder,
    private service: CrmRegistrationsService,
    private toastr: ToastrService,
    public env: EnvironmentService
  ) {
    this.filtersForm = this.fb.group({
      search: [''],
      status: [[]],
      priority: [''],
      page: [1],
      limit: [25]
    });

    this.statusForm = this.fb.group({
      status: [''],
      assigned_to_user_id: [''],
      priority: [''],
      note: [''],
      note_type: ['internal']
    });

    this.noteForm = this.fb.group({
      message: [''],
      note_type: ['internal']
    });

    this.summaryForm = this.fb.group({
      student_first_name: ['', [Validators.required]],
      student_last_name: ['', [Validators.required]],
      student_email: ['', [Validators.required, Validators.email]],
      student_mobile: [''],
      guardian1_name: [''],
      guardian1_email: ['', [Validators.email]],
      guardian1_phone: [''],
      guardian2_name: [''],
      guardian2_email: ['', [Validators.email]],
      guardian2_phone: ['']
    });

    this.studentDetailsForm = this.fb.group({
      student_mobile: ['', [Validators.maxLength(32)]],
      date_of_birth: [''],
      is_minor: [false],
      address_line1: ['', [Validators.maxLength(255)]],
      address_line2: ['', [Validators.maxLength(255)]],
      city: ['', [Validators.maxLength(100)]],
      state: ['', [Validators.maxLength(100)]],
      postal_code: ['', [Validators.maxLength(20)]],
      country: ['', [Validators.maxLength(100)]],
      schedule_preference: ['', [Validators.maxLength(255)]],
      payment_method: ['pending', [Validators.required]],
      payment_reference: ['', [Validators.maxLength(190)]],
      autopay_authorized: [false]
    });

    this.guardianDetailsForm = this.fb.group({
      guardian1_name: ['', [Validators.maxLength(150)]],
      guardian1_email: ['', [Validators.email]],
      guardian1_phone: ['', [Validators.maxLength(32)]],
      guardian2_name: ['', [Validators.maxLength(150)]],
      guardian2_email: ['', [Validators.email]],
      guardian2_phone: ['', [Validators.maxLength(32)]]
    });

    this.communicationForm = this.fb.group({
      channel: ['email', [Validators.required]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(3)]],
      send_copy: [false]
    });

    this.followUpForm = this.fb.group({
      action: ['', [Validators.required, Validators.minLength(3)]],
      owner: [''],
      due_date: ['']
    });

    this.conversionForm = this.fb.group({
      send_welcome_email: [true],
      notes: [''],
      course_decisions: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadAssignableUsers();
    this.loadRegistrations();
  }

  get selectedRegistration(): any {
    return this.registrationDetail?.registration;
  }

  get workflowProgress(): number {
    if (!this.workflowSteps.length) {
      return 0;
    }
    const completed = this.workflowSteps.filter(step => step.complete).length;
    return Math.round((completed / this.workflowSteps.length) * 100);
  }

  get courseDecisions(): FormArray {
    return this.conversionForm.get('course_decisions') as FormArray;
  }

  get isConverted(): boolean {
    return (this.selectedRegistration?.status || '').toLowerCase() === 'converted';
  }

  loadRegistrations(): void {
    this.listLoading = true;
    const filters = { ...this.filtersForm.value };
    if (Array.isArray(filters.status) && filters.status.length === 0) {
      delete filters.status;
    }
    if (!filters.priority) {
      delete filters.priority;
    }

    this.service.list(filters).subscribe({
      next: (response) => {
        this.registrations = response.items || [];
        this.pagination = response.pagination || this.pagination;
        this.listLoading = false;
        if (this.selectedRegistrationId) {
          const exists = this.registrations.some(r => r.id === this.selectedRegistrationId);
          if (!exists) {
            this.closeWorkspace();
          }
        }
      },
      error: (error) => {
        this.listLoading = false;
        this.toastr.error(error.message || 'Unable to load registrations');
      }
    });
  }

  onFilterSubmit(): void {
    this.filtersForm.patchValue({ page: 1 });
    this.loadRegistrations();
  }

  onPageChange(page: number): void {
    if (page < 1 || page > this.pagination.pages) {
      return;
    }
    this.filtersForm.patchValue({ page });
    this.loadRegistrations();
  }

  selectRegistration(registration: RegistrationSummary): void {
    if (!registration) {
      return;
    }
    this.selectedRegistrationId = registration.id;
    this.workspaceOpen = true;
    this.workspaceTab = 'overview';
    this.loadRegistrationDetail();
  }

  closeWorkspace(): void {
    this.workspaceOpen = false;
    this.selectedRegistrationId = null;
    this.registrationDetail = null;
    this.workflowSteps = [];
    this.documentWorkflows = [];
    this.documentReviewSummary = {
      total: 0,
      pending: 0,
      approved: 0,
      rejected: 0,
      status: 'none',
      description: 'No documents submitted yet',
      meta: ''
    };
    this.documentReviewForms = {};
    this.documentReviewSaving = {};
    this.showSummaryEditor = false;
    this.showStudentEditor = false;
    this.showGuardianEditor = false;
    this.courseDecisions.clear();
    this.conversionForm.get('send_welcome_email')?.setValue(true);
    this.conversionForm.get('notes')?.setValue('');
  }

  setWorkspaceTab(tab: 'overview' | 'timeline' | 'messages'): void {
    this.workspaceTab = tab;
  }

  loadRegistrationDetail(): void {
    if (!this.selectedRegistrationId) {
      return;
    }

    this.detailLoading = true;
    this.service.detail(this.selectedRegistrationId).subscribe({
      next: (detail) => {
        this.registrationDetail = detail;
        this.detailLoading = false;
        const assignedUserId = detail.registration.assigned_to_user_id
          ? String(detail.registration.assigned_to_user_id)
          : '';
        this.statusForm.patchValue({
          status: detail.registration.status,
          assigned_to_user_id: assignedUserId,
          priority: detail.registration.priority || ''
        });
        this.patchSummaryForm(detail);
        this.patchStudentForm(detail);
        this.patchGuardianForm(detail);
        this.resetCommunicationForm();
        this.rebuildDocumentWorkflows(detail?.documents || []);
        this.workflowSteps = this.buildWorkflowSteps(detail);
        this.buildCourseDecisionForm(detail);
      },
      error: (error) => {
        this.detailLoading = false;
        this.toastr.error(error.message || 'Unable to load details');
      }
    });
  }

  saveStatus(): void {
    if (!this.selectedRegistrationId) {
      return;
    }

    const payload = {
      registration_id: this.selectedRegistrationId,
      ...this.statusForm.value
    };

    if (payload.assigned_to_user_id) {
      const numericId = Number(payload.assigned_to_user_id);
      payload.assigned_to_user_id = Number.isNaN(numericId) || numericId <= 0 ? null : numericId;
    } else {
      payload.assigned_to_user_id = null;
    }

    this.statusSaving = true;
    this.service.updateStatus(payload).subscribe({
      next: () => {
        this.statusSaving = false;
        this.toastr.success('Registration updated');
        this.loadRegistrationDetail();
        this.loadRegistrations();
      },
      error: (error) => {
        this.statusSaving = false;
        this.toastr.error(error.message || 'Unable to update registration');
      }
    });
  }

  addNote(): void {
    if (!this.selectedRegistrationId) {
      return;
    }

    const message = (this.noteForm.value.message || '').trim();
    if (!message) {
      this.toastr.warning('Please enter a note before saving');
      return;
    }

    const payload = {
      registration_id: this.selectedRegistrationId,
      message,
      note_type: this.noteForm.value.note_type
    };

    this.noteSaving = true;
    this.service.addNote(payload).subscribe({
      next: (response) => {
        this.noteSaving = false;
        this.toastr.success('Note added');
        this.noteForm.reset({ message: '', note_type: 'internal' });
        if (this.registrationDetail) {
          this.registrationDetail.notes = response.notes;
        }
      },
      error: (error) => {
        this.noteSaving = false;
        this.toastr.error(error.message || 'Unable to add note');
      }
    });
  }

  scheduleFollowUp(): void {
    if (!this.selectedRegistrationId) {
      return;
    }

    if (this.followUpForm.invalid) {
      this.followUpForm.markAllAsTouched();
      return;
    }

    const { action, owner, due_date } = this.followUpForm.value;
    const parts = [`Follow-up: ${action}`];
    const ownerUser = this.findAssignableUser(owner);
    if (ownerUser) {
      parts.push(`Owner: ${ownerUser.name}`);
    } else if (owner) {
      parts.push(`Owner: ${owner}`);
    }
    if (due_date) {
      parts.push(`Due: ${due_date}`);
    }

    const payload = {
      registration_id: this.selectedRegistrationId,
      message: parts.join(' | '),
      note_type: 'internal'
    };

    this.followUpSaving = true;
    this.service.addNote(payload).subscribe({
      next: (response) => {
        this.followUpSaving = false;
        this.toastr.success('Follow-up logged');
        this.followUpForm.reset({ action: '', owner: '', due_date: '' });
        if (this.registrationDetail) {
          this.registrationDetail.notes = response.notes;
        }
      },
      error: (error) => {
        this.followUpSaving = false;
        this.toastr.error(error.message || 'Unable to log follow-up');
      }
    });
  }

  promoteRegistration(): void {
    if (!this.selectedRegistrationId) {
      return;
    }

    if (this.isConverted) {
      this.toastr.info('This registration has already been converted.');
      return;
    }

    const courseDecisions = this.prepareCourseDecisions();
    if (courseDecisions === null) {
      return;
    }

    const payload: any = {
      registration_id: this.selectedRegistrationId,
      send_welcome_email: this.conversionForm.value.send_welcome_email ? 1 : 0
    };

    const notes = (this.conversionForm.value.notes || '').trim();
    if (notes) {
      payload.notes = notes;
    }

    if (courseDecisions.length) {
      payload.course_decisions = courseDecisions;
    }

    this.promoteSaving = true;
    this.service.promote(payload).subscribe({
      next: (result) => {
        this.promoteSaving = false;
        this.toastr.success('Registration converted to active student');
        this.loadRegistrationDetail();
        this.loadRegistrations();
        this.conversionForm.get('notes')?.setValue('');
        if (result?.student_generated_password) {
          this.toastr.info('A temporary password was generated and will be sent to the student.', 'Password issued');
        }
      },
      error: (error) => {
        this.promoteSaving = false;
        this.toastr.error(error.message || 'Unable to convert registration');
      }
    });
  }

  documentUrl(path: string): string {
    if (!path) {
      return '';
    }
    if (path.startsWith('http')) {
      return path;
    }
    return `${this.env.apiHost}${path}`;
  }

  get timelineEntries(): Array<{ type: string; message: string; created_at: string }> {
    if (!this.registrationDetail) {
      return [];
    }

    const notes = (this.registrationDetail.notes || []).map((note: any) => ({
      type: note.note_type || 'note',
      message: note.message,
      created_at: note.created_at
    }));

    const history = (this.registrationDetail.history || []).map((entry: any) => ({
      type: entry.type || 'status',
      message: entry.message || '',
      created_at: entry.created_at || entry.timestamp
    }));

    const messages = (this.registrationDetail.messages || []).map((msg: any) => ({
      type: `message_${msg.channel || 'email'}`,
      message: `${(msg.channel || 'email').toUpperCase()} to ${msg.recipient}: ${msg.message}`,
      created_at: msg.sent_at
    }));

    return [...notes, ...history, ...messages]
      .filter(entry => !!entry.created_at)
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }

  toggleSummaryEditor(): void {
    this.showSummaryEditor = !this.showSummaryEditor;
    if (!this.showSummaryEditor && this.registrationDetail) {
      this.patchSummaryForm(this.registrationDetail);
    }
  }

  cancelSummaryEdit(): void {
    this.showSummaryEditor = false;
    if (this.registrationDetail) {
      this.patchSummaryForm(this.registrationDetail);
    }
  }

  saveSummary(): void {
    if (!this.registrationDetail || !this.selectedRegistrationId) {
      return;
    }

    if (this.summaryForm.invalid) {
      this.summaryForm.markAllAsTouched();
      this.toastr.error('Please fix validation issues before saving');
      return;
    }

    const payload = {
      registration_id: this.selectedRegistrationId,
      ...this.summaryForm.value
    };

    this.summarySaving = true;
    this.service.updateSummary(payload).subscribe({
      next: () => {
        this.summarySaving = false;
        this.toastr.success('Summary updated');
        this.showSummaryEditor = false;
        this.loadRegistrationDetail();
      },
      error: (error) => {
        this.summarySaving = false;
        this.toastr.error(error.message || 'Unable to update summary');
      }
    });
  }

  toggleStudentEditor(): void {
    this.showStudentEditor = !this.showStudentEditor;
    if (!this.showStudentEditor && this.registrationDetail) {
      this.patchStudentForm(this.registrationDetail);
    }
  }

  cancelStudentEdit(): void {
    this.showStudentEditor = false;
    if (this.registrationDetail) {
      this.patchStudentForm(this.registrationDetail);
    }
  }

  saveStudentDetails(): void {
    if (!this.registrationDetail || !this.selectedRegistrationId) {
      return;
    }

    if (this.studentDetailsForm.invalid) {
      this.studentDetailsForm.markAllAsTouched();
      this.toastr.error('Please fix validation issues before saving');
      return;
    }

    const formValue = this.studentDetailsForm.value;
    const payload: any = {
      registration_id: this.selectedRegistrationId,
      ...formValue,
      is_minor: formValue.is_minor ? 1 : 0,
      autopay_authorized: formValue.autopay_authorized ? 1 : 0
    };

    if (payload.payment_method) {
      payload.payment_method = (payload.payment_method as string).toLowerCase();
    }

    const normalizedDob = this.normalizeDatePayload(formValue.date_of_birth);
    if (normalizedDob) {
      payload.date_of_birth = normalizedDob;
    } else {
      delete payload.date_of_birth;
    }

    this.studentSaving = true;
    this.service.updateStudent(payload).subscribe({
      next: () => {
        this.studentSaving = false;
        this.toastr.success('Student details updated');
        this.showStudentEditor = false;
        this.loadRegistrationDetail();
      },
      error: (error) => {
        this.studentSaving = false;
        this.toastr.error(error.message || 'Unable to update student details');
      }
    });
  }

  toggleGuardianEditor(): void {
    this.showGuardianEditor = !this.showGuardianEditor;
    if (!this.showGuardianEditor && this.registrationDetail) {
      this.patchGuardianForm(this.registrationDetail);
    }
  }

  cancelGuardianEdit(): void {
    this.showGuardianEditor = false;
    if (this.registrationDetail) {
      this.patchGuardianForm(this.registrationDetail);
    }
  }

  saveGuardianDetails(): void {
    if (!this.registrationDetail || !this.selectedRegistrationId) {
      return;
    }

    if (this.guardianDetailsForm.invalid) {
      this.guardianDetailsForm.markAllAsTouched();
      this.toastr.error('Please fix validation issues before saving');
      return;
    }

    const payload = {
      registration_id: this.selectedRegistrationId,
      ...this.guardianDetailsForm.value
    };

    this.guardiansSaving = true;
    this.service.updateGuardians(payload).subscribe({
      next: () => {
        this.guardiansSaving = false;
        this.toastr.success('Guardian details updated');
        this.showGuardianEditor = false;
        this.loadRegistrationDetail();
      },
      error: (error) => {
        this.guardiansSaving = false;
        this.toastr.error(error.message || 'Unable to update guardian details');
      }
    });
  }

  toggleMessageForm(): void {
    this.showMessageForm = !this.showMessageForm;
    if (this.showMessageForm) {
      this.resetCommunicationForm();
    }
  }

  sendMessage(): void {
    if (!this.selectedRegistrationId) {
      return;
    }

    if (this.communicationForm.invalid) {
      this.communicationForm.markAllAsTouched();
      return;
    }

    const formValue = this.communicationForm.value;
    const payload: any = {
      registration_id: this.selectedRegistrationId,
      channel: formValue.channel,
      message: formValue.message,
      send_copy: formValue.send_copy ? 1 : 0
    };

    if (formValue.channel === 'email') {
      payload.subject = formValue.subject || `Message from ${this.env?.envProperties?.webHost || 'EdQuill'}`;
    }

    this.messageSending = true;
    this.service.sendMessage(payload).subscribe({
      next: (response) => {
        this.messageSending = false;
        this.toastr.success('Message sent successfully');
        if (this.registrationDetail) {
          this.registrationDetail.messages = response.messages || [];
        }
        this.resetCommunicationForm();
        this.showMessageForm = false;
      },
      error: (error) => {
        this.messageSending = false;
        this.toastr.error(error.message || 'Unable to send message');
      }
    });
  }

  private resetCommunicationForm(): void {
    const defaults = {
      channel: 'email',
      subject: '',
      message: '',
      send_copy: false
    };
    this.communicationForm.reset(defaults);
    this.communicationForm.patchValue(defaults);
  }

  private rebuildDocumentWorkflows(documents: any[]): void {
    const { workflows, summary } = this.createDocumentWorkflowState(documents);
    this.documentWorkflows = workflows;
    this.documentReviewSummary = summary;
    this.documentReviewForms = {};
    this.documentReviewSaving = {};

    workflows.forEach(workflow => {
      const documentId = this.resolveDocumentId(workflow.document);
      if (documentId <= 0) {
        return;
      }
      this.documentReviewForms[documentId] = this.fb.group({
        review_notes: [
          workflow.document?.review_notes || '',
          [Validators.maxLength(255)]
        ]
      });
    });
  }

  private createDocumentWorkflowState(documents: any[]): { workflows: DocumentWorkflow[]; summary: DocumentReviewSummary } {
    const normalizedDocuments = Array.isArray(documents) ? documents : [];
    const workflows: DocumentWorkflow[] = [];
    let pending = 0;
    let approved = 0;
    let rejected = 0;

    normalizedDocuments.forEach((doc: any) => {
      const status = (doc?.review_status || 'pending').toLowerCase();
      if (status === 'approved') {
        approved += 1;
      } else if (status === 'rejected') {
        rejected += 1;
      } else {
        pending += 1;
      }

      const normalizedStatus: DocumentWorkflow['status'] =
        status === 'approved' ? 'approved' : status === 'rejected' ? 'rejected' : 'pending';

      workflows.push({
        document: doc,
        status: normalizedStatus,
        steps: this.buildDocumentSteps(doc, normalizedStatus)
      });
    });

    const summary: DocumentReviewSummary = {
      total: normalizedDocuments.length,
      pending,
      approved,
      rejected,
      status: 'none',
      description: '',
      meta: ''
    };

    if (!normalizedDocuments.length) {
      summary.status = 'none';
      summary.description = 'No documents submitted yet';
      summary.meta = '';
    } else if (rejected > 0) {
      summary.status = 'rejected';
      summary.description = 'Document revisions required';
      summary.meta = `${rejected} rejected`;
    } else if (pending > 0) {
      summary.status = 'in_progress';
      summary.description = 'Document decisions pending';
      summary.meta = `${pending} awaiting decision`;
    } else {
      summary.status = 'complete';
      summary.description = 'All documents approved';
      summary.meta = `${approved} approved`;
    }

    return { workflows, summary };
  }

  private buildDocumentSteps(document: any, status: DocumentWorkflow['status']): WorkflowStep[] {
    const uploadedAt = this.formatDateLabel(document?.uploaded_at || document?.created_at);
    const reviewNotes = (document?.review_notes || '').trim();

    return [
      {
        id: 'uploaded',
        label: 'Uploaded',
        description: uploadedAt ? `Received ${uploadedAt}` : 'File received',
        complete: true,
        meta: document?.file_size ? this.formatFileSize(document.file_size) : ''
      },
      {
        id: 'decision',
        label: 'Decision',
        description: status === 'approved' ? 'Approved' : status === 'rejected' ? 'Rejected' : 'Decision pending',
        complete: status === 'approved',
        meta: reviewNotes
      }
    ];
  }

  documentReviewForm(documentId: number): FormGroup | null {
    return this.documentReviewForms[documentId] || null;
  }

  submitDocumentReview(workflow: DocumentWorkflow, status: 'pending' | 'approved' | 'rejected'): void {
    if (!this.selectedRegistrationId) {
      this.toastr.error('Select a registration first');
      return;
    }

    const documentId = this.resolveDocumentId(workflow.document);
    if (documentId <= 0) {
      this.toastr.error('Unable to determine document identifier');
      return;
    }

    const form = this.documentReviewForm(documentId);
    const notes = (form?.value?.review_notes || '').trim();

    this.documentReviewSaving[documentId] = true;

    const payload: any = {
      document_id: documentId,
      registration_id: this.selectedRegistrationId,
      status,
      notes
    };

    this.service.reviewDocument(payload).subscribe({
      next: (response) => {
        this.documentReviewSaving[documentId] = false;

        const documents = response?.documents || [];
        if (this.registrationDetail) {
          this.registrationDetail.documents = documents;
          if (Array.isArray(response?.notes)) {
            this.registrationDetail.notes = response.notes;
          }
        }

        this.rebuildDocumentWorkflows(documents);
        if (this.registrationDetail) {
          this.workflowSteps = this.buildWorkflowSteps(this.registrationDetail);
        }

        const message =
          status === 'approved'
            ? 'Document approved'
            : status === 'rejected'
            ? 'Document rejected'
            : 'Document reset to pending review';

        this.toastr.success(message);
      },
      error: (error) => {
        this.documentReviewSaving[documentId] = false;
        this.toastr.error(error.message || 'Unable to update document review');
      }
    });
  }

  private resolveDocumentId(document: any): number {
    if (!document) {
      return 0;
    }

    const candidates = [document.id, document.document_id, document.registration_document_id];
    for (const candidate of candidates) {
      const id = Number(candidate);
      if (Number.isFinite(id) && id > 0) {
        return id;
      }
    }

    return 0;
  }

  public documentId(workflow: DocumentWorkflow): number {
    return this.resolveDocumentId(workflow.document);
  }

  private loadAssignableUsers(): void {
    this.assigneesLoading = true;
    this.assigneesError = '';
    this.service.listAssignees().subscribe({
      next: (response) => {
        this.assigneesLoading = false;
        const users = Array.isArray(response?.users) ? response.users : [];
        this.setAssignableUsers(users);
      },
      error: (error) => {
        this.assigneesLoading = false;
        this.assigneesError = error.message || 'Unable to load eligible users';
        this.setAssignableUsers([]);
      }
    });
  }

  private setAssignableUsers(users: AssignableUser[]): void {
    this.assignableUsers = users;
    this.assignableUserMap.clear();
    users.forEach(user => {
      this.assignableUserMap.set(user.user_id, user);
    });
  }

  private findAssignableUser(value: any): AssignableUser | null {
    const numericId = Number(value);
    if (!Number.isFinite(numericId) || numericId <= 0) {
      return null;
    }
    return this.assignableUserMap.get(numericId) ?? null;
  }

  assigneeLabel(user: AssignableUser): string {
    return `${user.name} (${user.role_label})`;
  }

  documentStatusClass(status: DocumentWorkflow['status']): string {
    const normalized = (status || 'pending').toLowerCase();
    return `doc-status-${normalized}`;
  }

  documentStepClasses(step: WorkflowStep, status: DocumentWorkflow['status']): string {
    const classes = ['doc-step'];
    if (step.complete) {
      classes.push('complete');
    }
    if (status === 'rejected' && step.id === 'decision') {
      classes.push('rejected');
    }
    return classes.join(' ');
  }

  documentStepIcon(step: WorkflowStep, status: DocumentWorkflow['status']): string {
    if (status === 'rejected' && step.id === 'decision') {
      return 'bi-x-circle-fill';
    }
    return step.complete ? 'bi-check-circle-fill' : 'bi-circle';
  }

  private formatDateLabel(value: any): string {
    if (!value) {
      return '';
    }

    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      return '';
    }

    return parsed.toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  }

  private formatFileSize(value: any): string {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : Number(value);
    if (!Number.isFinite(numberValue) || numberValue <= 0) {
      return '';
    }

    const units = ['bytes', 'KB', 'MB', 'GB'];
    let size = numberValue;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex += 1;
    }

    return `${size.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
  }

  private buildCourseDecisionForm(detail: any): void {
    const courses = Array.isArray(detail?.courses) ? detail.courses : [];
    this.courseDecisions.clear();

    courses.forEach((course: any) => {
      const group = this.createCourseDecisionGroup(course);
      this.courseDecisions.push(group);
    });
  }

  private createCourseDecisionGroup(course: any): FormGroup {
    const availableSchedules = Array.isArray(course?.available_schedules) ? course.available_schedules : [];
    const defaultStatus = (course?.decision_status || 'pending').toLowerCase();
    const registrationCourseId = course?.registration_course_id ?? course?.id ?? null;
    const scheduleId = course?.approved_schedule_id ?? course?.schedule_id ?? null;
    const courseLabel =
      course?.course_name ||
      course?.catalog_course_name ||
      (`Course #${course?.course_id || registrationCourseId || ''}`).trim();

    const group = this.fb.group({
      registration_course_id: [registrationCourseId],
      course_id: [course?.course_id ?? null],
      course_label: [courseLabel],
      decision_status: [defaultStatus],
      approved_schedule_id: [scheduleId],
      approved_schedule_title: [course?.approved_schedule_title ?? course?.schedule_title ?? null],
      approved_schedule_start: [course?.approved_schedule_start ?? course?.course_start_date ?? null],
      approved_schedule_end: [course?.approved_schedule_end ?? course?.course_end_date ?? null],
      approved_fee_amount: [
        course?.approved_fee_amount ??
        course?.fee_amount ??
        course?.catalog_fees ??
        course?.available_schedules?.[0]?.cost ??
        null
      ],
      decision_notes: [course?.decision_notes ?? ''],
      available_schedules: [availableSchedules]
    });

    this.applyDecisionValidators(group);
    return group;
  }

  private applyDecisionValidators(group: FormGroup): void {
    const status = (group.get('decision_status')?.value || '').toLowerCase();
    const scheduleControl = group.get('approved_schedule_id');
    const feeControl = group.get('approved_fee_amount');
    const schedules = group.get('available_schedules')?.value || [];

    scheduleControl?.clearValidators();
    feeControl?.clearValidators();

    if (status === 'approved') {
      if (Array.isArray(schedules) && schedules.length > 0) {
        scheduleControl?.setValidators([Validators.required]);
      }
      feeControl?.setValidators([Validators.required, Validators.min(0)]);
    }

    scheduleControl?.updateValueAndValidity({ emitEvent: false });
    feeControl?.updateValueAndValidity({ emitEvent: false });
  }

  onDecisionChanged(index: number): void {
    const group = this.courseDecisions.at(index) as FormGroup;
    const statusControl = group.get('decision_status');
    const normalized = (statusControl?.value || '').toLowerCase();
    statusControl?.setValue(normalized, { emitEvent: false });

    this.applyDecisionValidators(group);

    if (normalized !== 'approved') {
      group.patchValue({
        approved_schedule_id: null,
        approved_schedule_title: null,
        approved_schedule_start: null,
        approved_schedule_end: null,
        approved_fee_amount: null
      }, { emitEvent: false });
    }
  }

  onScheduleSelected(index: number): void {
    const group = this.courseDecisions.at(index) as FormGroup;
    const scheduleId = group.get('approved_schedule_id')?.value;
    const schedules = group.get('available_schedules')?.value || [];

    const selected = schedules.find((schedule: any) => String(schedule?.schedule_id) === String(scheduleId));

    if (selected) {
      group.patchValue({
        approved_schedule_title: selected?.schedule_title ?? null,
        approved_schedule_start: selected?.course_start_date ?? null,
        approved_schedule_end: selected?.course_end_date ?? null,
      }, { emitEvent: false });
      if (selected?.cost !== null && selected?.cost !== undefined && selected?.cost !== '') {
        const parsedCost = Number(selected.cost);
        group.get('approved_fee_amount')?.setValue(Number.isNaN(parsedCost) ? group.get('approved_fee_amount')?.value : parsedCost, { emitEvent: false });
      }
    } else {
      group.patchValue({
        approved_schedule_title: null,
        approved_schedule_start: null,
        approved_schedule_end: null
      }, { emitEvent: false });
    }
  }

  public selectedSchedule(group: FormGroup | any): any | null {
    const schedules = group.get('available_schedules')?.value || [];
    const scheduleId = group.get('approved_schedule_id')?.value;
    return schedules.find((schedule: any) => String(schedule?.schedule_id) === String(scheduleId)) ?? null;
  }

  private prepareCourseDecisions(): any[] | null {
    if (!this.courseDecisions.length) {
      return [];
    }

    const prepared: any[] = [];

    for (let i = 0; i < this.courseDecisions.length; i++) {
      const group = this.courseDecisions.at(i) as FormGroup;
      const raw = group.getRawValue();
      const courseLabel = raw.course_label || `Course ${i + 1}`;
      const status = (raw.decision_status || '').toLowerCase();

      if (!raw.registration_course_id) {
        this.toastr.error(`Missing registration course identifier for ${courseLabel}`);
        return null;
      }

      if (!status || status === 'pending') {
        this.markCourseDecisionsTouched();
        this.toastr.error(`Choose a decision before converting ${courseLabel}`);
        return null;
      }

      if (status === 'approved') {
        const schedules = Array.isArray(raw.available_schedules) ? raw.available_schedules : [];
        if (schedules.length > 0 && !raw.approved_schedule_id) {
          this.markCourseDecisionsTouched();
          this.toastr.error(`Select a schedule for ${courseLabel} before approving`);
          return null;
        }
      }

      let feeValue: number | null = null;
      if (status === 'approved') {
        if (raw.approved_fee_amount !== null && raw.approved_fee_amount !== undefined && raw.approved_fee_amount !== '') {
          const parsed = Number(raw.approved_fee_amount);
          if (Number.isNaN(parsed)) {
            this.markCourseDecisionsTouched();
            this.toastr.error(`Enter a valid fee amount for ${courseLabel}`);
            return null;
          }
          feeValue = parsed;
        } else {
          this.markCourseDecisionsTouched();
          this.toastr.error(`Enter a fee amount for ${courseLabel}`);
          return null;
        }
      }

      prepared.push({
        registration_course_id: raw.registration_course_id,
        decision_status: status,
        approved_schedule_id: status === 'approved' ? (raw.approved_schedule_id || null) : null,
        approved_fee_amount: status === 'approved' ? feeValue : null,
        decision_notes: raw.decision_notes ? raw.decision_notes.trim() : null,
        approved_schedule_title: status === 'approved' ? (raw.approved_schedule_title ?? null) : null,
        approved_schedule_start: status === 'approved' ? (raw.approved_schedule_start ?? null) : null,
        approved_schedule_end: status === 'approved' ? (raw.approved_schedule_end ?? null) : null
      });
    }

    return prepared;
  }

  private markCourseDecisionsTouched(): void {
    this.courseDecisions.controls.forEach(control => (control as FormGroup).markAllAsTouched());
  }

  private patchSummaryForm(detail: any): void {
    const registration = detail?.registration || {};
    this.summaryForm.patchValue({
      student_first_name: registration.student_first_name || '',
      student_last_name: registration.student_last_name || '',
      student_email: registration.email || '',
      student_mobile: registration.mobile || '',
      guardian1_name: registration.guardian1_name || '',
      guardian1_email: registration.guardian1_email || '',
      guardian1_phone: registration.guardian1_phone || '',
      guardian2_name: registration.guardian2_name || '',
      guardian2_email: registration.guardian2_email || '',
      guardian2_phone: registration.guardian2_phone || ''
    });
  }

  private patchStudentForm(detail: any): void {
    const registration = detail?.registration || {};
    const paymentMethod = (registration.payment_method || 'pending').toLowerCase();
    this.studentDetailsForm.patchValue({
      student_mobile: registration.mobile || '',
      date_of_birth: this.normalizeDatePayload(registration.date_of_birth, true),
      is_minor: this.toBoolean(registration.is_minor),
      address_line1: registration.address_line1 || '',
      address_line2: registration.address_line2 || '',
      city: registration.city || '',
      state: registration.state || '',
      postal_code: registration.postal_code || '',
      country: registration.country || '',
      schedule_preference: registration.schedule_preference || '',
      payment_method: paymentMethod,
      payment_reference: registration.payment_reference || '',
      autopay_authorized: this.toBoolean(registration.autopay_authorized)
    });
  }

  private patchGuardianForm(detail: any): void {
    const registration = detail?.registration || {};
    this.guardianDetailsForm.patchValue({
      guardian1_name: registration.guardian1_name || '',
      guardian1_email: registration.guardian1_email || '',
      guardian1_phone: registration.guardian1_phone || '',
      guardian2_name: registration.guardian2_name || '',
      guardian2_email: registration.guardian2_email || '',
      guardian2_phone: registration.guardian2_phone || ''
    });
  }

  private buildWorkflowSteps(detail: any): WorkflowStep[] {
    const registration = detail?.registration || {};
    const status = (registration.status || 'pending').toLowerCase();
    const documents = detail?.documents || [];
    const documentSummary = this.documentReviewSummary;
    const paymentConfigured = registration.payment_method && registration.payment_method !== 'pending';
    const autopayReady = paymentConfigured && this.toBoolean(registration.autopay_authorized);

    return [
      {
        id: 'review',
        label: 'Review application',
        description: 'Verify submitted details and assign owner',
        complete: ['in_review', 'needs_info', 'approved', 'converted', 'archived', 'rejected'].includes(status),
        meta: registration.assigned_name || ''
      },
      {
        id: 'documents',
        label: 'Document verification',
        description: documentSummary.description || (documents.length ? `${documents.length} files uploaded` : 'Awaiting uploads'),
        complete: documentSummary.status === 'complete',
        meta: documentSummary.meta
      },
      {
        id: 'payment',
        label: 'Payment setup',
        description: paymentConfigured ? `Method: ${registration.payment_method}` : 'Select payment preference',
        complete: autopayReady,
        meta: autopayReady ? 'Autopay authorized' : ''
      },
      {
        id: 'conversion',
        label: 'Convert to student',
        description: 'Create LMS account and welcome student',
        complete: status === 'converted',
        meta: status === 'converted' ? 'Complete' : ''
      }
    ];
  }

  private toBoolean(value: any): boolean {
    if (value === null || value === undefined) {
      return false;
    }
    if (typeof value === 'string') {
      return ['1', 'true', 'yes', 'on'].includes(value.toLowerCase());
    }
    return !!value;
  }

  public isTruthy(value: any): boolean {
    return this.toBoolean(value);
  }

  private normalizeDatePayload(value: any, preserveEmpty = false): string | null {
    if (!value && value !== 0) {
      return preserveEmpty ? '' : null;
    }

    if (typeof value === 'string') {
      const trimmed = value.trim();
      if (trimmed === '' || trimmed === '0000-00-00') {
        return preserveEmpty ? '' : null;
      }
      if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
        const parsed = new Date(trimmed);
        if (!isNaN(parsed.getTime()) && parsed.getFullYear() > 1900) {
          return trimmed;
        }
        return preserveEmpty ? '' : null;
      }
      const parsed = new Date(trimmed);
      if (!isNaN(parsed.getTime()) && parsed.getFullYear() > 1900) {
        return parsed.toISOString().slice(0, 10);
      }
      return preserveEmpty ? trimmed : null;
    }

    if (value instanceof Date && !isNaN(value.getTime())) {
      return value.toISOString().slice(0, 10);
    }

    return preserveEmpty ? '' : null;
  }
}
