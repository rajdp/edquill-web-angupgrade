import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ExistingStudentProfile, SelfRegistrationService } from '../../shared/service/self-registration.service';
import { EnvironmentService } from '../../environment.service';

interface CourseSchedule {
  schedule_id: number;
  course_id: number;
  schedule_title: string;
  course_start_date: string | null;
  course_end_date: string | null;
  registration_start_date: string | null;
  registration_end_date: string | null;
  course_type: string | null;
  payment_type: string | null;
  payment_sub_type: string | null;
  location_id: number | null;
  cost: number | null;
  discount_amount: number | null;
  actual_cost: number | null;
  total_slots?: number | null;
  slots_booked?: number | null;
}

interface CourseOption {
  course_id: number;
  course_name: string;
  short_description?: string;
  description?: string;
  fees?: number | null;
  image_url?: string;
  button_label?: string;
  contact_info?: string;
  documentation_requirements?: string;
  schedules: CourseSchedule[];
}

interface DocumentPayload {
  name: string;
  type: string;
  size: number;
  content: string;
  course_id?: number;
  course_name?: string;
}

type ExistingStudentState = 'idle' | 'searching' | 'match' | 'none' | 'error';

@Component({
  selector: 'app-self-registration',
  templateUrl: './self-registration.component.html',
  styleUrls: ['./self-registration.component.scss']
})
export class SelfRegistrationComponent implements OnInit, OnDestroy {
  form: FormGroup;
  courses: CourseOption[] = [];
  coursesMap = new Map<number, CourseOption>();
  selectedSchedules: Record<number, number | null> = {};
  documents: DocumentPayload[] = [];
  loadingConfig = true;
  submitting = false;
  submissionCode: string | null = null;
  submissionStatus: string | null = null;
  schoolKey: string | null = null;
  branding: any = {};
  policies: any = {};
  schoolName = '';
  existingStudentState: ExistingStudentState = 'idle';
  existingStudentMatch: ExistingStudentProfile | null = null;
  existingStudentMessage = '';
  existingStudentError = '';
  lastLookupEmail: string | null = null;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private registrationService: SelfRegistrationService,
    private env: EnvironmentService
  ) {
    this.form = this.fb.group({
      student: this.fb.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', Validators.required],
        date_of_birth: [''],
        is_minor: [false],
        address: this.fb.group({
          line1: [''],
          line2: [''],
          city: [''],
          state: [''],
          postal_code: [''],
          country: ['']
        })
      }),
      guardian: this.fb.group({
        primary: this.fb.group({
          name: [''],
          email: ['', Validators.email],
          phone: ['']
        }),
        secondary: this.fb.group({
          name: [''],
          email: ['', Validators.email],
          phone: ['']
        })
      }),
      courses: [[], Validators.required],
      schedule_preference: [''],
      payment: this.fb.group({
        method: ['pending'],
        autopay: [false]
      }),
      agreements: this.fb.group({
        terms: [false, Validators.requiredTrue],
        privacy: [false, Validators.requiredTrue]
      })
    });
  }

  ngOnInit(): void {
    const routeKey = this.route.snapshot.paramMap.get('schoolKey');
    const queryKey = this.route.snapshot.queryParamMap.get('school');
    const currentHost = typeof window !== 'undefined' ? window.location.hostname : '';
    const envTenantKey = this.env.tenantKey;
    const derivedKey = envTenantKey ?? this.env.resolveTenantKey(currentHost);
    const localhostKey = !derivedKey && currentHost.endsWith('.localhost')
      ? currentHost.split('.')[0]
      : null;
    this.schoolKey = routeKey || queryKey || derivedKey || localhostKey;

    if (this.schoolKey) {
      this.env.setTenantKey(this.schoolKey);
    }

    if (!this.schoolKey) {
      this.loadingConfig = false;
      this.toastr.error('Missing school identifier. Add ?school=schoolkey or use the correct subdomain.');
      return;
    }

    this.loadConfiguration();
    this.registerMinorWatcher();
    this.registerCourseWatcher();
    this.registerEmailWatcher();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get studentGroup(): FormGroup {
    return this.form.get('student') as FormGroup;
  }

  get guardianPrimary(): FormGroup {
    return (this.form.get('guardian.primary') as FormGroup);
  }

  private loadConfiguration(): void {
    if (!this.schoolKey) {
      return;
    }

    this.loadingConfig = true;
    this.registrationService.loadConfiguration(this.schoolKey)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (config) => {
          this.loadingConfig = false;
          this.courses = (config.courses || []).map((course: CourseOption) => ({
            ...course,
            description: this.stripHtml(course.description),
            short_description: this.stripHtml(course.short_description),
            documentation_requirements: this.stripHtml(course.documentation_requirements),
            fees: course.fees !== undefined && course.fees !== null ? Number(course.fees) : null,
            schedules: (course.schedules || []).map((schedule: CourseSchedule) => ({
              ...schedule,
              cost: schedule.cost !== undefined && schedule.cost !== null ? Number(schedule.cost) : null,
              discount_amount: schedule.discount_amount !== undefined && schedule.discount_amount !== null ? Number(schedule.discount_amount) : null,
              actual_cost: schedule.actual_cost !== undefined && schedule.actual_cost !== null ? Number(schedule.actual_cost) : null
            }))
          }));
          this.coursesMap = new Map(this.courses.map(course => [course.course_id, course]));
          this.updateSelectedSchedules(this.form.get('courses')?.value || []);
          const school = config.school || {};
          const rawLogo = school.logo || school.branding?.logo || '';
          const logoSources = this.buildAssetUrl(rawLogo);
          const resolvedLogo = logoSources.primary;
          this.schoolName = school.name || '';
          this.branding = {
            ...(school.branding || {}),
            logo: resolvedLogo,
            logoFallback: logoSources.fallback,
            hero_title: (school.branding?.hero_title || school.name || 'Student Registration')
          };
          this.policies = school.policies || {};
        },
        error: (error) => {
          this.loadingConfig = false;
          this.toastr.error(error.message || 'Unable to load portal configuration');
        }
      });
  }

  private registerMinorWatcher(): void {
    this.studentGroup.get('is_minor')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(isMinor => {
        const nameControl = this.guardianPrimary.get('name');
        const emailControl = this.guardianPrimary.get('email');
        const phoneControl = this.guardianPrimary.get('phone');

        if (isMinor) {
          nameControl?.setValidators([Validators.required]);
          emailControl?.setValidators([Validators.required, Validators.email]);
          phoneControl?.setValidators([Validators.required]);
        } else {
          nameControl?.clearValidators();
          emailControl?.setValidators([Validators.email]);
          phoneControl?.clearValidators();
        }

        nameControl?.updateValueAndValidity();
        emailControl?.updateValueAndValidity();
        phoneControl?.updateValueAndValidity();
      });
  }

  private registerCourseWatcher(): void {
    this.form.get('courses')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((courseIds: number[]) => {
        this.updateSelectedSchedules(courseIds || []);
      });
  }

  private registerEmailWatcher(): void {
    const emailControl = this.studentGroup.get('email');
    if (!emailControl) {
      return;
    }

    emailControl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((rawValue: string) => {
        const normalized = (rawValue || '').trim().toLowerCase();

        if (!normalized) {
          this.clearExistingStudentMatch(false, 'idle');
          this.lastLookupEmail = null;
          return;
        }

        if (emailControl.invalid) {
          this.clearExistingStudentMatch(false, 'idle');
          return;
        }

        if (!this.schoolKey) {
          return;
        }

        if (this.lastLookupEmail === normalized && this.existingStudentState === 'match') {
          return;
        }

        this.lookupExistingStudent(normalized);
      });
  }

  private lookupExistingStudent(email: string): void {
    if (!this.schoolKey) {
      return;
    }

    this.existingStudentState = 'searching';
    this.existingStudentMessage = '';
    this.existingStudentError = '';

    this.registrationService.lookupExistingStudent(this.schoolKey, email)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.lastLookupEmail = email;
          if (response?.match_found && response.student) {
            this.existingStudentState = 'match';
            this.existingStudentMatch = response.student;
            this.existingStudentMessage = response.message || 'We found an existing profile. You can continue without retyping personal details.';
            this.applyExistingStudentProfile(response.student);
          } else {
            this.clearExistingStudentMatch(false, 'none');
            this.existingStudentMessage = response?.message || 'No existing student found for this email.';
          }
        },
        error: (error) => {
          this.clearExistingStudentMatch(false, 'error');
          this.existingStudentError = error?.message || 'Unable to verify existing student right now.';
        }
      });
  }

  private applyExistingStudentProfile(profile: ExistingStudentProfile): void {
    const studentPatch: any = {};
    if (profile.first_name !== undefined) {
      studentPatch.first_name = profile.first_name || '';
    }
    if (profile.last_name !== undefined) {
      studentPatch.last_name = profile.last_name || '';
    }
    if (profile.mobile !== undefined) {
      studentPatch.mobile = profile.mobile || '';
    }
    const normalizedDob = this.normalizeDateInput(profile.date_of_birth);
    if (normalizedDob) {
      studentPatch.date_of_birth = normalizedDob;
    }

    const addressPatch: any = {};
    if (profile.address) {
      const address = profile.address;
      if (address.line1 !== undefined) { addressPatch.line1 = address.line1 || ''; }
      if (address.line2 !== undefined) { addressPatch.line2 = address.line2 || ''; }
      if (address.city !== undefined) { addressPatch.city = address.city || ''; }
      if (address.state !== undefined) { addressPatch.state = address.state || ''; }
      if (address.postal_code !== undefined) { addressPatch.postal_code = address.postal_code || ''; }
      if (address.country !== undefined) { addressPatch.country = address.country || ''; }
    }
    if (Object.keys(addressPatch).length) {
      studentPatch.address = addressPatch;
    }

    if (Object.keys(studentPatch).length) {
      this.studentGroup.patchValue(studentPatch, { emitEvent: false });
    }

    const guardians = profile.guardians || [];
    const primary = guardians.find(g => (g.type || '').toLowerCase() === 'primary') || guardians[0];
    const secondary = guardians.find(g => (g.type || '').toLowerCase() === 'secondary') || guardians[1];

    if (primary) {
      this.form.get('guardian.primary')?.patchValue({
        name: primary.name || '',
        email: primary.email || '',
        phone: primary.phone || ''
      }, { emitEvent: false });
    }

    if (secondary) {
      this.form.get('guardian.secondary')?.patchValue({
        name: secondary.name || '',
        email: secondary.email || '',
        phone: secondary.phone || ''
      }, { emitEvent: false });
    }
  }

  clearExistingStudentMatch(resetValues = false, state: ExistingStudentState = 'none'): void {
    if (resetValues) {
      this.studentGroup.patchValue({
        first_name: '',
        last_name: '',
        mobile: '',
        date_of_birth: '',
        address: {
          line1: '',
          line2: '',
          city: '',
          state: '',
          postal_code: '',
          country: ''
        }
      }, { emitEvent: false });
      this.form.get('guardian.primary')?.reset();
      this.form.get('guardian.secondary')?.reset();
    }

    this.existingStudentMatch = null;
    this.existingStudentState = state;
    this.existingStudentMessage = '';
    this.existingStudentError = '';
  }

  dismissExistingStudentMatch(): void {
    this.clearExistingStudentMatch(true, 'none');
    this.lastLookupEmail = null;
  }

  get existingStudentActiveCourses(): string[] {
    if (!this.existingStudentMatch?.active_courses) {
      return [];
    }

    return this.existingStudentMatch.active_courses.map(course => {
      if (!course) {
        return '';
      }
      const base = course.course_name || 'Course';
      return course.schedule_title ? `${base} (${course.schedule_title})` : base;
    }).filter(Boolean);
  }

  private normalizeDateInput(value?: string | null): string {
    if (!value) {
      return '';
    }

    const asDate = new Date(value);
    if (isNaN(asDate.getTime())) {
      return '';
    }

    return asDate.toISOString().split('T')[0];
  }

  get selectedCourses(): CourseOption[] {
    const courseIds: number[] = this.form.get('courses')?.value || [];
    return courseIds
      .map(id => this.coursesMap.get(id))
      .filter((course): course is CourseOption => !!course);
  }

  private updateSelectedSchedules(courseIds: number[]): void {
    const currentSelections = { ...this.selectedSchedules };
    const nextSelections: Record<number, number | null> = {};

    courseIds.forEach(courseId => {
      const course = this.coursesMap.get(courseId);
      if (!course) {
        return;
      }

      const existing = currentSelections[courseId];
      if (existing && course.schedules.some(schedule => schedule.schedule_id === existing)) {
        nextSelections[courseId] = existing;
      } else if (course.schedules.length > 0) {
        nextSelections[courseId] = course.schedules[0].schedule_id;
      } else {
        nextSelections[courseId] = null;
      }
    });

    this.selectedSchedules = nextSelections;
  }

  onScheduleChange(courseId: number, scheduleId: string | number): void {
    const numericId = scheduleId === '' ? null : Number(scheduleId);
    this.selectedSchedules = {
      ...this.selectedSchedules,
      [courseId]: numericId
    };
  }

  onLogoError(): void {
    if (this.branding?.logoFallback && this.branding.logo !== this.branding.logoFallback) {
      this.branding.logo = this.branding.logoFallback;
    }
  }

  private buildAssetUrl(path?: string | null): { primary: string | null; fallback: string | null } {
    if (!path) {
      return { primary: null, fallback: null };
    }

    if (/^https?:\/\//i.test(path)) {
      return { primary: path, fallback: null };
    }

    const cleanedPath = path.startsWith('/') ? path.substring(1) : path;
    const base = this.env.apiHost.endsWith('/') ? this.env.apiHost : `${this.env.apiHost}/`;
    const primary = `${base}${cleanedPath}`;

    let fallback: string | null = null;
    if (/\/public\/?$/i.test(base) && cleanedPath.startsWith('uploads/')) {
      const altBase = base.replace(/\/public\/?$/i, '/');
      fallback = `${altBase}${cleanedPath}`;
    }

    return { primary, fallback };
  }

  private stripHtml(value?: string | null): string {
    if (!value) {
      return '';
    }

    if (typeof window === 'undefined' || !window.document) {
      return value.replace(/<[^>]+>/g, '').trim();
    }

    const div = window.document.createElement('div');
    div.innerHTML = value;
    return (div.textContent || div.innerText || '').trim();
  }

  onDocumentsSelected(event: Event, courseId?: number, courseName?: string): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }

    Array.from(input.files).forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        this.documents.push({
          name: file.name,
          type: file.type,
          size: file.size,
          content: result,
          course_id: courseId,
          course_name: courseName
        });
      };
      reader.readAsDataURL(file);
    });

    input.value = '';
  }

  getDocumentsForCourse(courseId: number): DocumentPayload[] {
    return this.documents.filter(doc => doc.course_id === courseId);
  }

  getGeneralDocuments(): DocumentPayload[] {
    return this.documents.filter(doc => !doc.course_id);
  }

  removeDocument(index: number): void {
    this.documents.splice(index, 1);
  }

  submit(): void {
    if (this.form.invalid || !this.schoolKey) {
      this.form.markAllAsTouched();
      this.toastr.error('Please complete required fields');
      return;
    }

    const formValue = this.form.value;
    const selectedCourseIds: number[] = formValue.courses || [];
    const coursePayload = selectedCourseIds.map(courseId => {
      const course = this.coursesMap.get(courseId);
      const selectedScheduleId = this.selectedSchedules[courseId] ?? null;
      const schedule = course?.schedules?.find(s => s.schedule_id === selectedScheduleId) || null;

      return {
        course_id: course?.course_id || courseId,
        course_name: course?.course_name || '',
        schedule_id: schedule?.schedule_id ?? null,
        schedule_title: schedule?.schedule_title ?? null,
        fee_amount: schedule?.actual_cost ?? course?.fees ?? null
      };
    });

    const existingStudentPayload = this.existingStudentMatch ? {
      matched: true,
      student_id: this.existingStudentMatch.student_id ?? null,
      email: this.existingStudentMatch.email ?? formValue.student.email,
      corp_id: this.existingStudentMatch.corp_id ?? null
    } : {
      matched: false
    };

    const payload = {
      school_key: this.schoolKey,
      student: {
        ...formValue.student,
        email: (formValue.student.email || '').trim(),
        mobile: (formValue.student.mobile || '').trim()
      },
      guardian: formValue.guardian,
      courses: coursePayload,
      schedule_preference: formValue.schedule_preference,
      payment: formValue.payment,
      documents: this.documents,
      agreements: formValue.agreements,
      existing_student: existingStudentPayload,
      context: {
        host: typeof window !== 'undefined' ? window.location.hostname : '',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        path: typeof window !== 'undefined' ? window.location.pathname : ''
      }
    };

    this.submitting = true;
    this.registrationService.submitRegistration(payload)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.submitting = false;
          this.submissionCode = response.registration_code;
          this.submissionStatus = response.status;
          this.toastr.success('Registration submitted successfully');
          this.form.disable();
        },
        error: (error) => {
          this.submitting = false;
          this.toastr.error(error.message || 'Unable to submit registration');
        }
      });
  }
}
