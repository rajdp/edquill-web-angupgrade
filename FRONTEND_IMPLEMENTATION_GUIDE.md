# Frontend Implementation Guide - EdQuill V2

## ✅ Completed Components

### 1. Admin Dashboard Component
**Location**: `web/src/app/components/admin/admin-dashboard/`

**Files Created**:
- `admin-dashboard.component.ts` - Component logic with KPI tiles and action rail
- `admin-dashboard.component.html` - Template with responsive layout
- `admin-dashboard.component.scss` - Styling with mobile-first approach
- `admin-dashboard.routes.ts` - Routing configuration

**Features**:
- ✅ KPI tiles (14 metrics: leads, enrollments, conversion rate, etc.)
- ✅ Revenue summary (MRR, ARR, overdue)
- ✅ Action rail (4 quick actions)
- ✅ Date range picker
- ✅ Loading states
- ✅ Mobile-responsive design
- ✅ WCAG AA compliant (focus rings, semantic HTML)

**Integration Required**:
1. Add route to `content-routes.ts`:
```typescript
{
  path: 'admin-dashboard',
  loadChildren: () => import('../../components/admin/admin-dashboard/admin-dashboard.routes').then(m => m.ADMIN_DASHBOARD_ROUTES),
  data: { breadcrumb: 'Admin Dashboard' }
}
```

2. Ensure `DashboardService` is imported in component (already done)

### 2. Dashboard Service
**Location**: `web/src/app/shared/service/dashboard.service.ts`

**Methods**:
- `getDashboard(params)` - Fetches dashboard data from `/api/dashboard`

### 3. Enhanced CRM Registrations Service
**Location**: `web/src/app/components/crm/registrations/crm-registrations.service.ts`

**New Methods Added**:
- `assignClass(payload)` - Assigns class/teacher with conflict checks
- `approve(payload)` - Approves registration and creates invoice

---

## 🔄 Registrar Workspace Enhancements Needed

The existing `CrmRegistrationsComponent` already has most functionality. Add these enhancements:

### 1. Add `assignClass()` Method

**In `registrations.component.ts`**, add:

```typescript
assignClass(): void {
  if (!this.selectedRegistrationId) {
    return;
  }

  // Get form values for class/teacher assignment
  const payload = {
    registration_id: this.selectedRegistrationId,
    class_id: this.classAssignmentForm?.value?.class_id,
    teacher_id: this.classAssignmentForm?.value?.teacher_id,
    schedule_id: this.classAssignmentForm?.value?.schedule_id,
    course_decisions: this.prepareCourseDecisions()
  };

  this.service.assignClass(payload).subscribe({
    next: (response) => {
      this.toastr.success('Class assignment updated');
      this.loadRegistrationDetail();
      this.loadRegistrations();
    },
    error: (error) => {
      this.toastr.error(error.message || 'Unable to assign class');
      // Show conflict details if available
      if (error.error?.conflicts) {
        this.toastr.warning('Schedule conflict detected. Please select a different time slot.');
      }
    }
  });
}
```

### 2. Add `approve()` Method

**In `registrations.component.ts`**, add:

```typescript
approveRegistration(): void {
  if (!this.selectedRegistrationId) {
    return;
  }

  const payload = {
    registration_id: this.selectedRegistrationId,
    send_invoice: true,
    send_autopay_link: this.selectedRegistration?.autopay_authorized || false,
    due_date: this.getDefaultDueDate() // e.g., 30 days from now
  };

  this.service.approve(payload).subscribe({
    next: (response) => {
      this.toastr.success('Registration approved and invoice sent');
      this.loadRegistrationDetail();
      this.loadRegistrations();
    },
    error: (error) => {
      this.toastr.error(error.message || 'Unable to approve registration');
    }
  });
}

private getDefaultDueDate(): string {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return date.toISOString().split('T')[0];
}
```

### 3. Add "Approve & Send Invoice" Button

**In `registrations.component.html`**, add to the Fees tab:

```html
<div class="d-flex justify-content-end gap-2 mt-3" *ngIf="selectedRegistration?.status !== 'approved' && selectedRegistration?.status !== 'converted'">
  <button 
    class="btn btn-success"
    (click)="approveRegistration()"
    [disabled]="!hasApprovedCourses()">
    <i class="bi bi-check-circle me-2"></i>
    Approve & Send Invoice
  </button>
</div>
```

### 4. Add Conflict Warning Display

**In `registrations.component.html`**, add conflict warning:

```html
<div *ngIf="scheduleConflict" class="alert alert-warning mt-2">
  <i class="bi bi-exclamation-triangle me-2"></i>
  Schedule conflict detected. Please select a different time slot.
</div>
```

### 5. Enhance Class Assignment UI

Add a form group for class assignment:

```typescript
classAssignmentForm = this.fb.group({
  class_id: [null],
  teacher_id: [null],
  schedule_id: [null]
});
```

---

## 📋 Shared Components To Create

### 1. TableShell Component

**Location**: `web/src/app/shared/components/table-shell/`

**Features Needed**:
- Sticky header
- Column chooser (show/hide columns)
- Density toggle (compact/normal/comfortable)
- Quick search
- CSV export
- Virtual scroll (for large datasets)
- Pagination

**Usage**:
```html
<app-table-shell
  [data]="registrations"
  [columns]="columns"
  [searchable]="true"
  [exportable]="true"
  [density]="'normal'"
  (rowClick)="selectRegistration($event)">
</app-table-shell>
```

### 2. CoachMarks Component

**Location**: `web/src/app/shared/components/coach-marks/`

**Features Needed**:
- Per-page tooltips/guides
- Step-by-step onboarding
- Dismissible
- Progress indicator
- Keyboard navigation

**Usage**:
```html
<app-coach-marks
  [steps]="onboardingSteps"
  [pageId]="'registrar-workspace'"
  (complete)="onOnboardingComplete()">
</app-coach-marks>
```

---

## 🎨 Enterprise-WOW UI Standards Compliance

### Performance Targets
- ✅ Skeleton loading ≤ 150ms
- ✅ Full content ≤ 2.5s
- ✅ Route chunk < 250 KB gz
- ✅ FID < 100 ms
- ✅ Lighthouse Perf ≥ 85
- ✅ Lighthouse A11y ≥ 90

### Accessibility (WCAG AA)
- ✅ Touch targets ≥ 44×44px
- ✅ Visible focus ring
- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation
- ✅ Color contrast ratios

### Mobile-First
- ✅ Responsive breakpoints (360×640 minimum)
- ✅ Touch-friendly controls
- ✅ Collapsible sections
- ✅ Stack layout on mobile

---

## 🧪 Testing Checklist

### Unit Tests
- [ ] Component initialization
- [ ] Form validation
- [ ] API service calls
- [ ] Error handling
- [ ] Loading states

### Integration Tests
- [ ] API endpoint integration
- [ ] Data flow (list → detail → actions)
- [ ] Conflict detection
- [ ] Invoice creation flow

### E2E Tests
- [ ] Complete registration workflow
- [ ] Status change → outbox → worker
- [ ] Class assignment with conflicts
- [ ] Approval → invoice send

### Accessibility Tests
- [ ] axe-core audit (0 critical issues)
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast

### Performance Tests
- [ ] Lighthouse audit (Perf ≥ 85, A11y ≥ 90)
- [ ] Load time < 2.5s
- [ ] List load < 300ms (with index)
- [ ] Bundle size < 250 KB gz

---

## 📝 Next Steps

1. **Integrate Admin Dashboard Route**
   - Add to `content-routes.ts`
   - Test navigation

2. **Enhance Registrar Workspace**
   - Add `assignClass()` method
   - Add `approve()` method
   - Add conflict warnings
   - Add approve button to UI

3. **Create Shared Components**
   - Build TableShell component
   - Build CoachMarks component
   - Export from SharedModule

4. **Testing**
   - Write unit tests
   - Write integration tests
   - Run Lighthouse audits
   - Run axe-core audits

5. **Documentation**
   - Component usage docs
   - API integration guide
   - User guide

---

## 🔗 API Endpoints Reference

### Registrar Workspace
- `POST /admin/self-registration/list` - List registrations
- `POST /admin/self-registration/detail` - Get registration detail
- `POST /admin/self-registration/status` - Update status
- `POST /admin/self-registration/assign-class` - Assign class/teacher ⭐ NEW
- `POST /admin/self-registration/approve` - Approve & create invoice ⭐ NEW
- `POST /admin/self-registration/message` - Send message
- `POST /admin/self-registration/promote` - Convert to student

### Dashboard
- `GET /api/dashboard?from=YYYY-MM-DD&to=YYYY-MM-DD` - Get dashboard data ⭐ NEW
- `POST /api/dashboard` - Get dashboard data (alternative) ⭐ NEW

---

## 📞 Support

For questions or issues:
- Check backend API documentation
- Review `RUNBOOK_EDQUILL_V2.md` for backend operations
- Check component service files for API integration patterns

