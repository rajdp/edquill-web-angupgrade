
# EdQuill Multi-Tenant CRM/LMS — Product Requirements (PRD)

**Version:** 1.0
**Date:** Nov 8, 2025
**Owner:** RR / EdQuill
**Stack:** MySQL 8 · PHP (CodeIgniter 4) · Angular 18 (Bootstrap)
**Tenancy:** Multi-tenant (`corp_id`) + optional `school_id`

---

## 0) Executive Summary

Ship a **minimal-rewrite** layer of automation, analytics, and an **enterprise-grade UX** on top of existing EdQuill modules:

1. Add **event outbox** + **CI4 worker** (no core rewrites).
2. Implement best-practice flows for **Lead→Enrollment**, **Scheduling**, **Payments/AR**, **Learning/Mastery**, **Portal/Comms**.
3. Deliver **Onboarding Wizard**, **Coach-marks/Tooltips**, and a consistent **Bootstrap design system**.
4. Run **cleanup & performance** program to remove unused tables/columns and speed up hot paths.

**Goals:** higher adoption (portal), lower no-shows, improved on-time payments, demo-ready UI.
**Non-goals:** rewriting stable CRUD modules or changing core rules unless behind flags.

---

## 1) Personas

* **Owner/Admin:** multi-school KPIs, revenue, utilization.
* **School Manager:** enrollment, schedules, AR, messaging.
* **Teacher:** attendance, assignments, feedback.
* **Parent/Guardian:** portal, payments, schedule, messages.
* **Student:** schedule, homework, results, badges.

---

## 2) Scope

### 2.1 Foundations

* **Event Outbox** (`t_event_outbox`) + CLI worker.
* **Audit Log** (`t_audit_log`), **Feature Flags** (`t_feature_flag`).
* **Daily KPI Sinks** for fast dashboards (`t_marketing_kpi_daily`, `t_revenue_daily`).

### 2.2 Lead → Enrollment

* UUID onboarding links, staged nurture sequences, doc/e-sign placeholders.
* Conversion %, days-to-enroll, abandonment nudges.

### 2.3 Scheduling & Capacity

* Double-booking prevention (teacher/room).
* T-24h/T-2h reminders, make-up credits on no-shows.

### 2.4 Payments & AR

* Autopay orchestration, 3-step dunning, statements.
* Revenue/AR snapshots; receipts in portal.

### 2.5 Learning, Assessment & Mastery

* Dual scoring (AI + teacher), mastery overlay, diagnostic→plan, badges.
* **Essay revisions never lower score** (floor previous score).

### 2.6 Communication & Portal

* Template-driven omnichannel messaging with consent/quiet hours.
* Role-aware parent/student portal; adoption tracking.

### 2.7 Usability First

* **Onboarding Wizard**, **Coach-marks/Tooltips**, consistent **design system**.

---

## 3) Success Metrics (KPIs)

* **Portal MAU / Active Families ≥ 70%** within 60 days of rollout.
* **No-show rate ↓ 25%** within 90 days.
* **On-time pay % +15%** within 60 days.
* **Lead→Enroll +10%** relative lift; **Median days-to-enroll ↓ 20%**.
* **Performance:** p95 API < 300 ms; CLS < 0.1; Lighthouse Accessibility ≥ 90.

---

## 4) Functional Requirements

### 4.1 Multi-Tenancy & Scoping

* Every read/write scoped by `corp_id` and optional `school_id`.
* CI4 **Tenancy Filter** resolves subdomain → tenant context; Models inherit `BaseTenantModel` to auto-apply scoping.

### 4.2 Event Outbox + Worker

* **Triggers** enqueue rows on: lead stage change, enrollment created, invoice status change, attendance no_show, submission graded, and scheduled session reminders.
* **Worker** uses `FOR UPDATE SKIP LOCKED`, ≤50 events/batch, idempotent handlers, consent and quiet-hours checks.

### 4.3 Lead → Enrollment

* Stage **Offer Sent** → create UUID invite (+ doc placeholders + hosted checkout link).
* 3-step nurture for **Qualified**; 24h/7d invite nudges.
* KPI reports: conversion %, median days, abandon rate.

### 4.4 Scheduling & Capacity

* Unique constraints prevent teacher/room double-booking.
* Reminders T-24h & T-2h (email/SMS + ICS).
* No-show → auto make-up credit + self-reschedule link.

### 4.5 Payments & AR

* Autopay at due date (06:00 **school TZ**); tokenization only (Stripe/Forte).
* Dunning: T+0, T+3d, T+7d; step 3 can set portal limitation flag.
* Monthly statements; daily revenue/AR snapshots.

### 4.6 Learning & Mastery

* Store AI + teacher scores (with rubric/version).
* Policy in `t_mastery_policy`; update `t_mastery` on submission events.
* Diagnostic completion auto-assigns first 3 lessons.

### 4.7 Messaging & Portal

* Templates in DB with shortcodes (`{{student.first_name}}` etc.).
* Consent per channel; quiet hours 8am–8pm **school TZ**.
* Track opens/clicks; open/response rates in dashboard.

### 4.8 Onboarding Wizard & Coach-Marks

* Steps: **Brand/TZ → Programs/Pricing → Schedules/Rooms → Messaging/Consent → Payments → Portal Launch**.
* Persistent progress; page tours; “Don’t show again” per user.

---

## 5) Non-Functional Requirements

* **Performance:** covering indexes; seek+limit pagination; no `SELECT *` on hot paths; cache school settings (Redis).
* **Security:** RBAC, audit, pre-signed URLs for files, secret rotation.
* **Reliability:** idempotency keys; dead-letter policy; retries with backoff.
* **Accessibility:** WCAG AA; keyboard navigation; ARIA labels.
* **Observability:** Request IDs, structured logs, worker metrics (processed/sec, oldest event age).

---

## 6) Data Model Additions (Delta Only)

> Create **only if missing**. Keep existing tables intact.

* `t_event_outbox(corp_id, school_id, event_type, payload_json, created_at, processed_at)`
* `t_audit_log(corp_id, school_id, actor_user_id, entity_type, entity_id, action, before_json, after_json, created_at)`
* `t_feature_flag(corp_id, school_id, flag_key, flag_value)`
* `t_message_template(...)`, `t_message_log(...)`
* `t_marketing_kpi_daily(...)`, `t_revenue_daily(...)`, `t_dunning(...)`
* `t_uuid_invite(...)`
* `t_mastery(...)`, `t_mastery_policy(...)`

**Indexes to add on hot tables:**

```sql
ALTER TABLE t_lead       ADD INDEX ix_lead_tenant       (corp_id, school_id, created_at);
ALTER TABLE t_enrollment ADD INDEX ix_enroll_tenant     (corp_id, school_id, status, start_date);
ALTER TABLE t_session    ADD INDEX ix_session_tenant    (corp_id, school_id, starts_at);
ALTER TABLE t_invoice    ADD INDEX ix_invoice_tenant    (corp_id, school_id, status, due_date);
ALTER TABLE t_submission ADD INDEX ix_subm_tenant       (corp_id, school_id, submitted_at);
```

**Double-booking protection (if `teacher_id`/`room_id` present):**

```sql
ALTER TABLE t_session
  ADD UNIQUE KEY ux_teacher_slot (corp_id, school_id, teacher_id, starts_at, ends_at),
  ADD UNIQUE KEY ux_room_slot    (corp_id, school_id, room_id,    starts_at, ends_at);
```

---

## 7) Cleanup & Performance Program

### 7.1 Inventory & Telemetry

* Generate schema inventory (tables/cols/FKs/row counts/last write).
* Enable slow query log (≥200 ms) in staging; capture top offenders.

### 7.2 Deprecation Framework

Create:

```sql
CREATE TABLE IF NOT EXISTS t_schema_deprecations (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  object_type ENUM('table','column') NOT NULL,
  object_name VARCHAR(190) NOT NULL,
  status ENUM('planned','monitoring','blocked','safe_to_drop') NOT NULL DEFAULT 'planned',
  opened_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  safe_after TIMESTAMP NULL
);
```

* Mark suspected unused tables/columns as **planned**.
* Middleware logs accesses; if no hits for 30 days → **safe_to_drop**; else **blocked**.

### 7.3 Drop & Migrate

* For columns: backfill → mark read-only → drop after `safe_after`.
* For tables: create read-only view for 30 days → drop.

### 7.4 Performance Tactics

* Covering indexes; seek+limit pagination; avoid N+1.
* Denormalize daily KPIs; cache school settings (10-min TTL).
* CI checks fail PRs introducing full table scans on hot paths.

---

## 8) UX / UI Requirements (Usability First — **Enterprise WOW** Standards)

> **Prescriptive & non-negotiable** unless a feature flag states otherwise.

### 8.1 Design Principles

* One **primary action** per screen; secondary actions in kebab menu.
* Interaction feedback ≤ **100 ms**; skeleton visible ≤ **150 ms**; full content ≤ **2.5 s**.
* WCAG **AA**; keyboard navigation; mobile-first (360×640); touch targets ≥ **44×44px**.

### 8.2 Design System (Bootstrap) & Tokens

* 8-pt spacing grid; typography 12/14/16/20/28/36; line-height 1.4–1.6.
* CSS vars from `brand_theme_json`: `--brand-primary`, `--brand-surface`, `--brand-muted`, `--brand-accent`, `--brand-success`, `--brand-warning`, `--brand-danger`.
* Color contrast ≥ 4.5:1; optional dark mode via tokens.

### 8.3 Layout Patterns

* **Dashboard:** KPI cards (value, delta, sparkline); global date picker.
* **Master-Detail:** left filterable list; right tabbed detail.
* **Drawers for quick edits**; modals only for destructive/conflicting actions.
* **Wizard:** ≤6 steps; progress bar; save & exit/resume.

### 8.4 Navigation

* Top bar: product, global search (Ctrl+/), user menu.
* Left nav: icons+labels; collapse <1200px; breadcrumbs on detail pages.
* Optional command palette (flag) with “?” shortcut help.

### 8.5 Tables (mandatory **TableShell**)

* Sticky header, column chooser, density toggle, CSV export, quick search.
* Row hover affordance; click → detail; secondary actions in kebab.
* Bulk actions after selection; confirm destructive actions.
* Virtual scroll for >200 rows; server pagination; default page size 25; never fetch >1000 rows.

### 8.6 Forms

* Inline validation on blur + submit; helper text; never color-only errors.
* Phone mask, email pattern, date/time pickers, currency format.
* Progressive disclosure for dependent fields.
* Optimistic save spinner ≤ 400 ms; toast with undo when safe.

### 8.7 Wizards

* Left checklist; right form; context tips; sample data links; confirm on discard.

### 8.8 Dashboards & Cards

* KPI cards with “View details” links; charts w/ tooltips; ≤6 colors; no 3D; global date range remembered per user.

### 8.9 Loading/Errors/Empty States

* Skeletons within 150 ms; zero-state copy with primary CTA; inline errors + toast with request ID; retry action.

### 8.10 Motion

* 150–250 ms micro-interactions; 300–400 ms modals/drawers; respect `prefers-reduced-motion`.

### 8.11 Accessibility & i18n

* Visible focus ring; tab order; ARIA labels; `aria-live=polite` toasts; strings externalized; RTL-safe (flag).

### 8.12 Sales/Demo Polish

* **Demo mode:** seeded data; PII scrub; badge “Demo”.
* **Screenshot mode:** hide debug chrome; deterministic charts.
* **Guided tours**: 6–8 steps; completion badge.

### 8.13 Angular 18 Guardrails

* Standalone components; `OnPush`; signals for local UI; `track` on loops.
* Route-level code-splitting; `@defer` below the fold; QuickLink preloading.
* `NgOptimizedImage`; virtual scroll for big lists.
* Budgets: route chunk < **250 KB gz**; FID < **100 ms**; Lighthouse Perf ≥ **85**.

### 8.14 Microcopy Rules

* Buttons use verbs (“Send invite”); tooltips <80 chars; confirmation dialogs state consequence + undo if possible.

### 8.15 Theming/White-Label

* Fetch `brand_theme_json` once; set CSS vars; per-school logo/favicon; emails inherit palette.

### 8.16 QA Checklists (must pass)

**Screen:** primary action obvious; works at 360×640/≥1440; tab order; Enter submits; Esc cancels; contrast AA; empty state present.
**Flow:** wizard progress persists; recoverable errors; success toasts deep-link next step.
**Perf:** CLS < 0.1; no above-the-fold waterfalls.
**A11y:** axe-core 0 critical issues; flow completable by keyboard.

### 8.17 Golden-Path Flows

* **Lead→Invite:** ≤3 clicks; doc status badges; “Send nudge” visible at >24h pending.
* **Schedule Session:** filter teacher by skill+availability; inline conflict warnings; add ICS.
* **Attendance:** one-click present; late/no-show with reason tooltip; auto make-up prompt.
* **Invoice & Pay:** charge now / pay link; dunning state pill on parent profile.
* **Assign & Grade:** assign weakest 3 objectives; quick rubric; revision floor tooltip.

---

## 9) APIs & Integration (Illustrative)

**Headers:** `X-Corp-Id`, `X-School-Id` (Angular interceptor).

* `GET /api/exec/kpis?from&to` — tiles.
* `POST /api/enrollments/{id}/invite` — UUID invite link.
* `POST /api/messages/send` — channel+template+vars → logs `t_message_log`.
* `GET /api/flags` — per-school flags.
* `POST /api/autopay/run` — cron-secured enqueue.

---

## 10) Architecture & Services

**Backend (CI4)**

* Filters: `TenancyFilter`, `AuthFilter`.
* Models: extend `BaseTenantModel`.
* CLI: `outbox:worker`, `kpi:rollup`, `schema:inventory`.
* Services: `Handlers`, `Messenger`, `Invites`, `Billing`, `Makeup`, `TemplateRenderer`, `Flags`.

**Frontend (Angular 18)**

* Interceptors: `TenantInterceptor`, `AuthInterceptor`.
* Shared: `LocalTzPipe`, `NotifyService`, `TableShellComponent`, `WizardComponent`, `CoachMarksService`.
* Theming: `brand_theme_json` → CSS vars on `:root`.

---

## 11) Rollout Plan

**Sprint 1**

* Migrations for foundations; triggers on lead/enrollment/invoice/attendance.
* Deploy worker in **dry-run** (log only).
* Angular: interceptor + theme + TableShell; dashboard with dummy KPI tiles.

**Sprint 2**

* Enable **session reminders** + **autopay + dunning step 1** for 1 pilot school (flags).
* Populate KPI sinks nightly; validate dashboards.
* Wizard steps 1–3; tours for Leads & Sessions.

**Sprint 3**

* Mastery overlay for Math; essay revision floor.
* Full wizard (steps 4–6) + checklist; portal adoption campaign.
* Cleanup: first table/column set → `planned` → 30-day monitor → drop.

---

## 12) Acceptance Criteria (Definition of Done)

* Outbox triggers fire; worker processes with avg latency < 1 s.
* Zero double-booking incidents after constraints enabled.
* Reminders only within quiet hours and with consent.
* Autopay attempts logged; **on-time pay % increases** within 60 days.
* Wizard completion >80% for new schools; time-to-launch < 1 hour.
* Portal MAU ≥ 70% at day 60 (pilot).
* New endpoints p95 < 300 ms; Lighthouse A11y ≥ 90.
* First deprecation set safely dropped.

---

## 13) Risks & Mitigations

* **Message spam:** Strict consent checks, feature flags, dry-run logs.
* **Tenant scoping bugs:** E2E tests across corp/school matrix; header interceptor mandatory.
* **Cleanup data loss:** 30-day monitoring + read-only views before drop.
* **Payment retries:** Idempotency; webhook reconciliation; dead-letter queue.

---

## Appendix A — CI4 Migration (Foundations Skeleton)

```php
// app/Database/Migrations/2025-11-08-000001_Foundations.php
namespace App\Database\Migrations;
use CodeIgniter\Database\Migration;

class Foundations extends Migration {
  public function up() {
    // t_event_outbox, t_audit_log, t_feature_flag, t_message_template, t_message_log,
    // t_marketing_kpi_daily, t_revenue_daily, t_dunning, t_mastery, t_mastery_policy, t_uuid_invite
    // (Implement using safe IF NOT EXISTS; add tenant indexes as in section 6.)
  }
  public function down() {
    // Drop in reverse order (if exists)
  }
}
```

---

## Appendix B — MySQL Triggers (Enqueue Only)

```sql
DELIMITER $$
CREATE TRIGGER trg_lead_stage_outbox AFTER UPDATE ON t_lead
FOR EACH ROW BEGIN
  IF (OLD.stage <> NEW.stage) THEN
    INSERT INTO t_event_outbox(corp_id, school_id, event_type, payload_json)
    VALUES (NEW.corp_id, NEW.school_id, 'lead.stage.updated',
            JSON_OBJECT('lead_id', NEW.lead_id, 'old', OLD.stage, 'new', NEW.stage, 'ts', NOW()));
  END IF;
END$$

CREATE TRIGGER trg_enrollment_created_outbox AFTER INSERT ON t_enrollment
FOR EACH ROW BEGIN
  INSERT INTO t_event_outbox(corp_id, school_id, event_type, payload_json)
  VALUES (NEW.corp_id, NEW.school_id, 'enrollment.created',
          JSON_OBJECT('enrollment_id', NEW.enrollment_id, 'student_id', NEW.student_id, 'start_date', NEW.start_date));
END$$

CREATE TRIGGER trg_invoice_status_outbox AFTER UPDATE ON t_invoice
FOR EACH ROW BEGIN
  IF (OLD.status <> NEW.status) THEN
    INSERT INTO t_event_outbox(corp_id, school_id, event_type, payload_json)
    VALUES (NEW.corp_id, NEW.school_id, CONCAT('invoice.', NEW.status),
            JSON_OBJECT('invoice_id', NEW.invoice_id, 'parent_id', NEW.parent_id, 'due_date', NEW.due_date));
  END IF;
END$$

CREATE TRIGGER trg_attendance_no_show_outbox AFTER INSERT ON t_attendance
FOR EACH ROW BEGIN
  IF (NEW.status='no_show') THEN
    INSERT INTO t_event_outbox(corp_id, school_id, event_type, payload_json)
    VALUES (NEW.corp_id, NEW.school_id, 'attendance.no_show',
            JSON_OBJECT('session_id', NEW.session_id, 'student_id', NEW.student_id));
  END IF;
END$$
DELIMITER ;
```

---

## Appendix C — CI4 Worker (CLI) Skeleton

```php
// app/Commands/OutboxWorker.php
namespace App\Commands;
use CodeIgniter\CLI\BaseCommand; use Config\Database;

class OutboxWorker extends BaseCommand {
  protected $group='Workers'; protected $name='outbox:worker';
  protected $description='Processes t_event_outbox and runs automations';

  public function run(array $params) {
    $db = Database::connect();
    while (true) {
      $db->transStart();
      $rows = $db->query("
        SELECT * FROM t_event_outbox
        WHERE processed_at IS NULL
        ORDER BY id
        LIMIT 50
        FOR UPDATE SKIP LOCKED
      ")->getResultArray();

      foreach ($rows as $row) {
        try {
          $p = json_decode($row['payload_json'], true) ?: [];
          switch ($row['event_type']) {
            case 'lead.stage.updated': service('handlers')->leadStageUpdated($row,$p); break;
            case 'enrollment.created': service('handlers')->enrollmentCreated($row,$p); break;
            case 'invoice.open':       service('handlers')->invoiceOpen($row,$p); break;
            case 'invoice.paid':       service('handlers')->invoicePaid($row,$p); break;
            case 'attendance.no_show': service('handlers')->noShow($row,$p); break;
            case 'session.reminder':   service('handlers')->sessionReminder($row,$p); break;
          }
          $db->table('t_event_outbox')->where('id',$row['id'])->update(['processed_at'=>date('Y-m-d H:i:s')]);
        } catch (\Throwable $e) { log_message('error','Outbox error: '.$e->getMessage()); }
      }
      $db->transComplete();
      if (empty($rows)) usleep(250000); // 250ms
    }
  }
}
```

---

## Appendix D — Angular 18 Stubs

**Tenant Interceptor**

```ts
@Injectable() export class TenantInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const { corpId, schoolId } = getTenantFromHost(location.hostname);
    return next.handle(req.clone({ setHeaders: {
      'X-Corp-Id': String(corpId), 'X-School-Id': String(schoolId ?? '')
    }}));
  }
}
```

**Local TZ Pipe**

```ts
@Pipe({name:'localTz'}) export class LocalTzPipe implements PipeTransform {
  constructor(private cfg: SchoolConfigService) {}
  transform(utcIso: string, fmt='MMM d, h:mm a') { return dayjs(utcIso).tz(this.cfg.tz()).format(fmt); }
}
```

**TableShell (requirements)**
Sticky header, column chooser, density toggle, quick search, CSV export, `OnPush`, virtual scroll option.

**Wizard (requirements)**
≤6 steps, save/resume, contextual tips, sample data links, progress persisted per user.

**CoachMarksService (requirements)**
Per-route step JSON; “Don’t show again” stored per user; accessible focus management.

---

## Appendix E — Messaging Templates (Examples)

```
Purpose: session.reminder (email)
Subject: Reminder: {{student.first_name}}’s {{class.title}} on {{session.starts_at_local_fmt}}
Body:
Hi {{parent.first_name}},
This is a reminder for {{student.first_name}}’s {{class.title}} on {{session.starts_at_local_fmt}}.
Location: {{class.location_label}} | Join: {{session.join_link}}
Reply STOP to unsubscribe SMS.
```

---

## Appendix F — Handoff Checklist (for Coding Agent)

* [ ] Run migrations (Foundations) and add tenant indexes.
* [ ] Add triggers (enqueue only).
* [ ] Deploy `php spark outbox:worker` under Supervisor; start in dry-run.
* [ ] Implement handlers: lead stage, enrollment created, invoice open/paid, attendance no_show, session reminder.
* [ ] Seed default `t_message_template` + feature flags for the pilot school.
* [ ] Add Angular interceptor, ThemeService (CSS vars), TableShell, Wizard (steps 1–3), Coach-marks for Leads/Sessions.
* [ ] Enable features via flags; monitor KPIs and logs.
* [ ] Start cleanup program (inventory → planned → monitoring → safe_to_drop).

---

If you want, I can also generate the **actual CI4 migration file**, **Supervisor config**, and **Angular component files** as separate artifacts.
