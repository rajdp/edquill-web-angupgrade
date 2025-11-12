# 🧩 Product Requirements Document (PRD)
## Feature: School-Branded Student Self-Registration Portal
**Project:** EdQuill LMS/CRM  
**Author:** Product Owner  
**Date:** 2025-08-31  
**Status:** Ready for Development  

---

## 🎯 Objective
Enable each school on the EdQuill platform to host its own **branded self-registration page** (e.g., `schoolid.edquill.com`) where students (or parents, for minors) can register for available courses and enroll in them, submit necessary documents, and complete payment setup — all while integrating directly with EdQuill’s existing multi-tenant data structure.

---

## 🏗️ Architecture Context

- **Frontend:** Angular (reuse existing components where possible)
- **Backend:** Laravel/PHP (migrating from CodeIgniter 3)
- **Database:** MySQL (multi-tenant, database-per-school or shared schema with `corp_id`)
- **Hosting:** AWS EC2 / Multi-subdomain configuration (`*.edquill.com`)
- **DNS / Routing:** Wildcard subdomain setup via Nginx or Apache reverse proxy

---

## 🧱 Core Requirements

### 1. 🏫 Branded School Registration Page

#### URL Structure
Each school will have its own registration URL:
https://schoolid.edquill.com/register
In the in the `school` table, we can add an attribute schoolkey.  Internally we can use this to maintain a mapping of alphanumeric schoolkey value "abcschool" or "newarkacademy" to schoolid  

#### Branding
- Display school logo, name, contact info, and color theme.
- Configurable from the EdQuill Admin Panel (school admin can update logo/colors).

#### Frontend Requirements
- Responsive registration form
- Secure HTTPS access
- CAPTCHA or rate limiting to prevent spam
- Auto-timezone detection for timestamps
- Course catalog drawn from LMS (`tbl_course` + schedules) with per-program fee information

---

### 2. 👩‍🎓 Student Registration Form

#### Fields (Core)
| Section | Fields |
|----------|--------|
| **Student Info** | First Name, Last Name, Date of Birth, Email, Mobile Number, Address |
| **Parent/Guardian Info (if minor)** | Contact 1 Name, Email, Phone; Contact 2 (optional) |
| **Program Selection** | Dropdown with available programs/courses (fetched from `tbl_course` per school; shows description, fees, and linked schedules) |
| **Schedule Preference** | (optional) Preferred time/day if applicable |
| **Documents Upload** | (optional) PDF/JPG uploads (ID proof, transcript, etc.) |
| **Payment Setup** | Method (Credit Card / ACH / Manual); Initial payment or tokenization |
| **Agreements** | Checkbox to accept Terms & Conditions, Privacy Policy |

#### Behavior
- If **student age < 18**, parent info is required.
- Data validation with meaningful errors.
- Use reCAPTCHA or similar anti-spam mechanism.
- Support for multiple document uploads.

---

### 3. 💳 Payment Integration

#### Supported Options
- Integrate with existing **Forte** or **Stripe** setup.
- Student (or parent) can:
  - Enter payment info
  - Authorize autopay (if allowed)
  - Submit first payment (if applicable)

#### Payment Data
- Store securely (tokenized if possible)
- Log transaction in `t_payments` or similar table
- Notify admin upon new payment authorization

---

### 4. 📄 Confirmation & Follow-Up

After form submission:
- Display confirmation screen:
Thank you for registering!
A confirmation email has been sent with next steps.
- Send email (and optionally SMS) to:
- Student
- Parent (if applicable)
- School admin (for approval/review)

#### Confirmation Email Includes:
- Student name
- Selected program(s)
- Payment confirmation (if completed)
- Link to upload missing documents or schedule interview

---

### 5. 🔍 Admin & School Access

#### Admin Portal
- View all registrations by school
- Filter by status (Pending, Verified, Enrolled)
- Approve or reject enrollment
- Download registration data and uploaded documents
- Promote a reviewed registration into an active LMS student (creates student user, guardian contacts, and links them) via new API `POST /admin/self-registration/promote`
- Manage registrations in CRM view (new `CRM → Registrations` tab) with list filters, assignment, status transitions (`pending`, `in_review`, `needs_info`, `approved`, `rejected`, `converted`, `archived`), and internal/request/response notes
- Review uploaded documents, mark their review status, and trigger conversion directly from the detail drawer

#### School Portal
- Access via existing EdQuill admin login
- View:
- Student registrations
- Payment status
- Pending document verifications
- Trigger onboarding emails or assign class slots

---

## 🗄️ Database Schema Additions
Create or enhance tables as needed to capture course interested and supporting documentation provided by students.
If payment gateway is enabled, then we can show the option to input bank/credit card details.
---

## 🔒 Security & Compliance

- All form submissions use HTTPS
- CSRF tokens and backend validation
- reCAPTCHA to prevent bots
- GDPR/FERPA-compliant data handling
- Payment info tokenized — no raw card data stored

---

## 🧩 Integrations

| Feature | Integration |
|----------|--------------|
| Email Notifications | SendGrid |
| SMS Notifications | Twilio |
| Payment Processing | Forte or Stripe |
| Document Storage | AWS S3 or secure local storage |
| Tenant Routing | Subdomain-based multi-tenancy |

---

## 🧪 Testing Requirements

- ✅ Subdomain routing resolves correctly (`schoolid.edquill.com`)
- ✅ Registration form submits successfully
- ✅ Admin view displays new registrations
- ✅ reCAPTCHA validation prevents spam bots
- ✅ Payment flow completes securely
- ✅ Notifications sent to student, parent, admin
- ✅ Works for both adult and minor students
- ✅ CRM registrations tab lists submissions, supports status changes, notes, and promotion workflow
- ✅ All admin API calls must send the `Accesstoken` header (capital **A**) – using `accesstoken` fails authentication


## 🚫 Out of Scope (Phase 1)

- Student portal access post-registration
- Auto-class scheduling
- Document OCR or auto-verification
- Multi-language support

---

## 🔁 Registration Conversion (MVP Admin API)

- **Endpoint:** `POST /admin/self-registration/promote`
- **Auth:** Existing `Accesstoken` header (admin/staff roles)
- **Request Body:** `{"registration_id": 123, "notes": "Optional review note"}`
- **Effect:** Creates or reuses the student’s LMS account, syncs guardian contacts, links them to the student, marks the registration as `converted`, and returns the new entity IDs (including any generated password).
- **Usage:** Trigger after manual review/approval so the student can be onboarded using standard CRM tools.
- **UI:** CRM → Registrations tab surfaces this workflow with list filters, detail panel, and “Convert to Student” action.

---

## 🧭 Future Enhancements

- Auto-sync approved registrations with active student roster
- Integration with parent portal login
- Referral or promo code system
- Analytics dashboard for registration trends

---

## 📎 References
- Existing EdQuill LMS schema (`user`, `guardians`, `user_profile_details`, tbl_course,  )
- SendGrid & Forte integration keys
- Tenant routing configuration for subdomains
