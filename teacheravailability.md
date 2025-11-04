# 📘 Product Requirements Document (PRD)
## Feature: Teacher Availability Scheduling

**Project:** EdQuill LMS/CRM  
**Author:** Product Owner  
**Date:** 2025-08-31  
**Status:** Approved for Development

---

## 🎯 Objective

To enable teachers to set and manage their **availability schedule** for conducting 1:1 student sessions, allowing both teachers and admin users to coordinate live class scheduling based on real-time availability data.

---

## 🔧 Feature Scope

### 🧑‍🏫 Teacher View (Logged-In Teacher Portal)

#### Capabilities:
- View current availability calendar (week/month/day view)
- Set **recurring availability** by day of week (e.g., Every Monday 5–7 PM EST)
- Set **specific date overrides** (e.g., only available Sep 12, 3–6 PM)
- Define **time ranges** for each availability entry
- Support **multiple availability blocks per day**
- View in **local time zone (auto-detect or manually set)**

#### Example Use Cases:
- “Every Monday 5–7 PM”
- “Sep 15 only, 10–11 AM and 2–4 PM”
- “Available on Tuesdays this month, but not next month”

#### UX Expectations:
- Calendar or list-based UI
- Click + drag or select dropdowns for time ranges
- Mobile responsive layout

---

### 👩‍💼 Admin View (Backoffice/Admin Portal)

#### Capabilities:
- View **all teachers’ availability** (calendar or table)
- Filter by:
  - Teacher name
  - Date range
  - Day of week
- Export or download availability data
- Detect gaps or conflicts (optional future upgrade)

---

## 📂 Data Model Requirements

### New Tables / Fields

#### `t_teacher_availability`
| Field              | Type        | Description |
|-------------------|-------------|-------------|
| id                | INT         | Primary key |
| teacher_id        | INT         | FK to `t_users` or `t_teachers` |
| date              | DATE        | Specific date for the availability |
| day_of_week       | VARCHAR     | For recurring (Mon, Tue...) |
| start_time        | TIME        | Start of availability |
| end_time          | TIME        | End of availability |
| is_recurring      | BOOLEAN     | True if weekly recurrence |
| recurrence_end    | DATE (null) | Optional end date for recurring block |
| timezone          | VARCHAR     | e.g., `America/New_York` |
| created_at        | DATETIME    | Timestamp |
| updated_at        | DATETIME    | Timestamp |

---

## 🔌 API Requirements

### Endpoints (Laravel-style)
- `POST /api/availability` – Create availability entry
- `GET /api/availability?teacher_id=123` – Fetch availability
- `PUT /api/availability/{id}` – Update availability
- `DELETE /api/availability/{id}` – Delete availability
- `GET /api/availability/admin-view` – Fetch availability for all teachers (admin only)

---

## 🛠 Backend Logic

- Convert all availability to UTC for storage
- Convert to teacher/admin timezone on display
- Prevent overlapping availability blocks for same teacher/date/time
- Allow soft-deletion for auditing (optional)

---

## 🔐 Access Control

| Role     | Permissions |
|----------|-------------|
| Teacher  | CRUD only their own availability |
| Admin    | View all availability, but cannot modify teacher entries |

---

## 🧪 Testing Plan

- ✅ Teacher can add recurring weekly availability
- ✅ Teacher can override a specific date
- ✅ Admin can view all availability
- ✅ Time zone conversion works as expected
- ✅ Overlaps are prevented on backend

---

## 📆 Development Milestones

| Week | Task |
|------|------|
| Week 1 | Database schema + backend APIs |
| Week 2 | Teacher UI component |
| Week 3 | Admin dashboard integration |
| Week 4 | Time zone testing, QA, polish |

---

## 🚫 Out of Scope (for now)

- Automated class assignment based on availability
- Zoom/Google Meet linking
- Absence/leave requests (can be a future enhancement)

---

## 📎 Notes

- Consider modular availability scheduler component for reuse (e.g., in booking UI)
- Design for future recurring exceptions and blackout dates

