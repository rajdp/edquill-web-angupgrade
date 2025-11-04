import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { TeacherAvailabilityService } from '../../../shared/service/teacher-availability.service';
import { AuthService } from '../../../shared/service/auth.service';
import { CommonService } from '../../../shared/service/common.service';
import { TeacherService } from '../../../shared/service/teacher.service';

interface AvailabilityEntry {
  id: number;
  teacher_id: number;
  is_recurring: number;
  day_of_week?: string | null;
  date?: string | null;
  recurrence_end?: string | null;
  start_time_local: string;
  end_time_local: string;
  spans_midnight?: number;
  timezone: string;
  notes?: string | null;
  updated_at?: string | null;
  created_at?: string | null;
  first_name?: string;
  last_name?: string;
}

@Component({
  selector: 'app-teacher-availability',
  templateUrl: './teacher-availability.component.html',
  styleUrls: ['./teacher-availability.component.scss']
})
export class TeacherAvailabilityComponent implements OnInit, OnDestroy {
  availabilityForm: FormGroup;
  filterForm: FormGroup;
  availability: AvailabilityEntry[] = [];
  teacherOptions: { id: number; name: string }[] = [];
  timezoneOptions: { id: string; label: string; value: string }[] = [];
  timezoneLabelMap = new Map<string, string>();
  dayOptions = [
    { label: 'Monday', value: 'Mon' },
    { label: 'Tuesday', value: 'Tue' },
    { label: 'Wednesday', value: 'Wed' },
    { label: 'Thursday', value: 'Thu' },
    { label: 'Friday', value: 'Fri' },
    { label: 'Saturday', value: 'Sat' },
    { label: 'Sunday', value: 'Sun' }
  ];

  isAdmin = false;
  isLoading = false;
  isSubmitting = false;
  editingId: number | null = null;
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private availabilityService: TeacherAvailabilityService,
    private auth: AuthService,
    private commonService: CommonService,
    private teacherService: TeacherService,
    private toastr: ToastrService
  ) {
    this.availabilityForm = this.fb.group({
      teacher_id: [''],
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

  ngOnInit(): void {
    this.isAdmin = this.auth.getRoleId() === '2';

    const teacherControl = this.availabilityForm.get('teacher_id');
    if (this.isAdmin) {
      teacherControl?.setValidators([Validators.required]);
      teacherControl?.updateValueAndValidity({ emitEvent: false });
    } else {
      teacherControl?.clearValidators();
      teacherControl?.updateValueAndValidity({ emitEvent: false });
    }
    this.handleRecurringToggle();
    this.loadTimezones();

    if (this.isAdmin) {
      this.loadTeachers();
    }

    this.refreshAvailability();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  refreshAvailability(): void {
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
    } else {
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

  submitAvailability(): void {
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

  startEdit(entry: AvailabilityEntry): void {
    this.editingId = entry.id;
    this.availabilityForm.patchValue({
      teacher_id: entry.teacher_id ?? '',
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

  cancelEdit(): void {
    this.resetForm();
  }

  deleteAvailability(entry: AvailabilityEntry): void {
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

  applyFilters(): void {
    if (!this.isAdmin) {
      return;
    }
    this.refreshAvailability();
  }

  clearFilters(): void {
    if (!this.isAdmin) {
      return;
    }
    this.filterForm.reset({ teacher_id: '', day_of_week: '', start_date: '', end_date: '' });
    this.refreshAvailability();
  }

  getTimezoneLabel(value: string): string {
    return this.timezoneLabelMap.get(value) || value;
  }

  displayType(entry: AvailabilityEntry): string {
    return entry.is_recurring ? 'Recurring' : 'Specific Date';
  }

  displaySchedule(entry: AvailabilityEntry): string {
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

  teacherName(entry: AvailabilityEntry): string {
    if (!this.isAdmin) {
      return '';
    }
    const parts = [entry.first_name, entry.last_name].filter(Boolean);
    return parts.join(' ');
  }

  trackById(index: number, entry: AvailabilityEntry): number {
    return entry.id;
  }

  private loadTimezones(): void {
    const data = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId()
    };

    const sub = this.commonService.timeZone(data).subscribe({
      next: (response: any) => {
        if (response.IsSuccess) {
          this.timezoneOptions = (response.ResponseObject || []).map(option => {
            const label = option.time_zone || option.name || option.label;
            const value = this.extractTimezoneValue(label);
            this.timezoneLabelMap.set(value, label);
            return { id: option.id ?? label, label, value };
          });

          if (!this.timezoneOptions.length) {
            this.applyTimezoneFallback();
          }

          const defaultTimezone = this.auth.getSessionData('time_zone') || this.timezoneOptions[0]?.value;
          if (defaultTimezone) {
            this.availabilityForm.patchValue({ timezone: this.extractTimezoneValue(defaultTimezone) });
          }
        } else {
          this.applyTimezoneFallback(true);
        }
      },
      error: () => {
        this.applyTimezoneFallback(true);
      }
    });

    this.subscriptions.push(sub);
  }

  private loadTeachers(): void {
    const payload = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId(),
      school_id: this.auth.getSessionData('school_id')
    };

    const sub = this.teacherService.teacherList(payload).subscribe({
      next: (response: any) => {
        if (response.IsSuccess) {
          this.teacherOptions = (response.ResponseObject || []).map(item => ({
            id: item.user_id,
            name: `${item.first_name || ''} ${item.last_name || ''}`.trim() || item.email_id
          }));

          if (this.isAdmin) {
            const currentValue = this.availabilityForm.get('teacher_id')?.value;
            if (!currentValue && this.teacherOptions.length === 1) {
              this.availabilityForm.patchValue({ teacher_id: this.teacherOptions[0].id });
            }
          }
        }
      },
      error: () => this.toastr.warning('Unable to load teacher list.', 'Teacher Availability')
    });

    this.subscriptions.push(sub);
  }

  private buildPayload(): any | null {
    const raw = this.availabilityForm.value;
    const isRecurring = !!raw.is_recurring;

    if (this.isAdmin && !raw.teacher_id) {
      this.toastr.error('Select a teacher for this availability block.', 'Validation error');
      return null;
    }

    if (!raw.start_time || !raw.end_time || !raw.timezone) {
      this.toastr.error('Fill in start time, end time, and timezone.', 'Validation error');
      return null;
    }

    if (!isRecurring && !raw.date) {
      this.toastr.error('Select a date for this availability block.', 'Validation error');
      return null;
    }

    if (isRecurring && !raw.day_of_week) {
      this.toastr.error('Select a day of week for recurring availability.', 'Validation error');
      return null;
    }

    const payload: any = {
      start_time: raw.start_time,
      end_time: raw.end_time,
      timezone: raw.timezone,
      is_recurring: isRecurring ? 1 : 0,
      notes: raw.notes?.trim() || null
    };

    if (this.isAdmin) {
      payload.teacher_id = Number(raw.teacher_id);
    }

    if (isRecurring) {
      payload.day_of_week = raw.day_of_week;
      payload.date = raw.date || null;
      payload.recurrence_end = raw.recurrence_end || null;
    } else {
      payload.date = raw.date;
      payload.recurrence_end = null;
      payload.day_of_week = null;
    }

    return payload;
  }

  private sanitizeFilters(filters: any): any {
    const cleaned: Record<string, string> = {};
    Object.keys(filters || {}).forEach(key => {
      const value = filters[key];
      if (value !== undefined && value !== null && value !== '') {
        cleaned[key] = value;
      }
    });
    return cleaned;
  }

  private markFormTouched(): void {
    Object.keys(this.availabilityForm.controls).forEach(control => {
      this.availabilityForm.get(control)?.markAsTouched();
    });
  }

  private resetForm(): void {
    this.editingId = null;
    const currentTimezone = this.availabilityForm.get('timezone')?.value || (this.timezoneOptions[0]?.value || 'UTC');
    const currentTeacher = this.isAdmin ? (this.availabilityForm.get('teacher_id')?.value || '') : '';

    this.availabilityForm.reset({
      teacher_id: currentTeacher,
      is_recurring: false,
      date: '',
      day_of_week: 'Mon',
      start_time: '',
      end_time: '',
      timezone: currentTimezone,
      recurrence_end: '',
      notes: ''
    });
  }

  private handleRecurringToggle(): void {
    const control = this.availabilityForm.get('is_recurring');
    if (!control) {
      return;
    }

    this.applyRecurringValidators(!!control.value);

    const sub = control.valueChanges.subscribe((isRecurring: boolean) => {
      this.applyRecurringValidators(!!isRecurring);
    });

    this.subscriptions.push(sub);
  }

  private applyRecurringValidators(isRecurring: boolean): void {
    const dateCtrl = this.availabilityForm.get('date');
    const dayCtrl = this.availabilityForm.get('day_of_week');

    if (isRecurring) {
      dateCtrl?.clearValidators();
      dayCtrl?.setValidators([Validators.required]);
    } else {
      dayCtrl?.clearValidators();
      dateCtrl?.setValidators([Validators.required]);
    }

    dateCtrl?.updateValueAndValidity();
    dayCtrl?.updateValueAndValidity();
  }

  private formatTime(time: string, timezone: string, spansMidnight = false): string {
    if (!time) {
      return '—';
    }
    const truncated = this.formatTimeForInput(time);
    return spansMidnight ? `${truncated} (+1 day)` : truncated;
  }

  private formatTimeForInput(time: string): string {
    return time ? time.slice(0, 5) : '';
  }

  private buildRecurrenceRange(entry: AvailabilityEntry): string {
    if (!entry.date && !entry.recurrence_end) {
      return '';
    }
    const start = entry.date ? new Date(entry.date).toLocaleDateString() : 'from now';
    const end = entry.recurrence_end ? new Date(entry.recurrence_end).toLocaleDateString() : 'no end date';
    return ` • ${start} → ${end}`;
  }

  private extractTimezoneValue(label: string): string {
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

  private applyTimezoneFallback(showWarning = false): void {
    if (showWarning) {
      this.toastr.warning('Unable to load time zones from the server. Default list applied.', 'Timezone');
    }

    const fallbackZones = this.getFallbackTimezones();
    this.timezoneOptions = fallbackZones;
    this.timezoneLabelMap.clear();

    fallbackZones.forEach(zone => this.timezoneLabelMap.set(zone.value, zone.label));

    const defaultZone = fallbackZones[0]?.value ?? 'UTC';
    this.availabilityForm.patchValue({ timezone: defaultZone });
  }

  private getFallbackTimezones(): { id: string; label: string; value: string }[] {
    const builtIn: string[] = (typeof Intl !== 'undefined' && (Intl as any).supportedValuesOf)
      ? (Intl as any).supportedValuesOf('timeZone') ?? []
      : [];

    const preferred = [
      'UTC',
      'America/New_York',
      'America/Chicago',
      'America/Denver',
      'America/Los_Angeles',
      'America/Toronto',
      'Europe/London',
      'Europe/Berlin',
      'Europe/Paris',
      'Asia/Kolkata',
      'Asia/Singapore',
      'Asia/Tokyo',
      'Australia/Sydney'
    ];

    const merged = [...preferred, ...builtIn].filter((zone, index, self) => self.indexOf(zone) === index);

    return merged.map(zone => ({
      id: zone,
      label: zone,
      value: zone
    }));
  }

  private resolveError(error: any): string {
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
}
