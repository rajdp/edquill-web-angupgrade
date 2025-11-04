# 🧩 Product Requirements Document (PRD)
## Project: EdQuill LMS — CRM & Communication Features Extension
**Author:** Product Owner  
**Last Updated:** 2025-08-31

---

## 🎯 Objective
Enhance the existing EdQuill LMS platform with CRM functionality that allows the center to manage parent/adult communications, fee tracking and collection, automated notifications (SMS/email), and report card generation for students.

---

## 🧱 Existing System Overview

The current EdQuill LMS includes:
- **Lesson and content management**
- **Live/recorded class scheduling**
- **Student registration and roster management**
- **Homework assignment and completion tracking**
- **Grading and reporting tools**

Built with:
- **Frontend:** Angular
- **Backend:** PHP (codeigniter 4)
- **Database:** MySQL

---

## 🔧 New Modules to Be Added

### 1. 👪 CRM & Parent/Adult Contact Management

#### Requirements:
- Each student can be associated with:
  - **One or more parents/guardians** (minors)
  - **Self** (if adult)
- Store:
  - Full name, email, mobile number
  - Communication preference: SMS / Email / Both
  - Relation to student
- Tag parents for multiple students (siblings)
- Allow search/filter by student, parent, status

#### Deliverables:
- New `t_guardians` table (or equivalent)
- Admin UI to manage contacts (Angular)
- API endpoints to create/update/delete associations

---

### 2. 💰 Fees Management System

#### Requirements:
- Define **fee plans** per program (monthly, prepaid, pay-per-class)
- Link fee plan to each enrolled student
- Record:
  - Fee amount, payment due date, method
  - Actual payments (date, amount, receipt #)
  - Discounts or custom adjustments
- Track outstanding balances and generate invoices
- Support auto-payment flag

#### Deliverables:
- `t_fees_plans`, `t_payments`, `t_invoices` tables
- Fee setup/admin UI
- Payment entry/logging form
- Backend to calculate balances + generate invoice PDFs

---

### 3. 📣 SMS & Email Notifications

#### Requirements:
- Triggered notifications:
  - Class reminders (SMS/Email)
  - Homework deadlines
  - Payment reminders
  - Report card availability
- Manual campaigns:
  - "New program launch"
  - "Holiday reminder"
- Templates with dynamic fields:
  - `{student_name}`, `{class_date}`, `{amount_due}`
- Opt-out logic per contact

#### Integrations:
- **Email**: SendGrid (preferred), SMTP fallback
- **SMS**: Twilio or similar gateway

#### Deliverables:
- `t_notifications`, `t_templates`, `t_optouts` tables
- Angular UI to create templates and send test messages
- Backend scheduler or job runner (cron or queue)

---

### 4. 🧾 Exam Results & Digital Report Cards

#### Requirements:
- Admins can:
  - Enter or import exam results per student
  - Generate PDF report cards
  - Email/SMS link to parent to view/download
- Report card template includes:
  - Student details, subject-wise marks, teacher comments
  - Attendance (if tracked), grading scale

#### Deliverables:
- `t_exams`, `t_scores`, `t_report_cards` tables
- UI to input/edit/import marks
- Report card generation backend (PDF)
- Secure link (token/UUID) for parent view

---

## 🔒 Access Control & Roles

- **Admin**: Full access to CRM, fees, templates, report cards
- **Teacher**: Can enter grades, view student info, limited communication
- **Parent**: View reports, payment history (via parent portal)

---

## 🧪 QA & Testing Requirements

- Validate:
  - Notification logic triggers correctly
  - PDF generation accuracy
  - Permission roles (no parent can access another’s student)
- Use staging/test tenant before rollout

---

## 📆 Milestone Plan (Suggested)

| Week | Milestone |
|------|-----------|
| Week 1 | DB schema changes, contact/guardian UI |
| Week 2 | Fee plans, payment logging |
| Week 3 | SMS/email notification triggers |
| Week 4 | Exam results + PDF report card sharing |
| Week 5 | Testing, bug fixes, polish

---

## 📎 References

- Existing LMS code base (Angular + PHP + MySQL)
- SendGrid & Twilio API credentials
- Parent portal structure (if any)

---

## 📌 Notes

- All new features should integrate cleanly into existing student and class structure
- Avoid data duplication; reuse foreign keys where possible
- Consider future multi-tenant support (if not already enabled)

---
