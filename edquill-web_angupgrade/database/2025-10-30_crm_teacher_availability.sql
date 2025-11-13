-- =====================================================================
--  EdQuill LMS / CRM
--  Schema updates for Teacher Availability and CRM contact reuse
--  Date: 2025-10-30
--
--  Guidelines
--    * Review foreign keys and adjust table names if they differ in your
--      environment (script assumes t_school, t_users, and t_students).
--    * Target server: MySQL 8.0+ (uses generated columns / JSON types).
--    * Execute during a maintenance window with a verified backup.
-- =====================================================================

START TRANSACTION;

-- ---------------------------------------------------------------------
-- Teacher availability scheduling
-- ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS t_teacher_availability (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  teacher_id INT UNSIGNED NOT NULL,
  school_id INT UNSIGNED NOT NULL,
  is_recurring TINYINT(1) NOT NULL DEFAULT 0,
  day_of_week ENUM('MON','TUE','WED','THU','FRI','SAT','SUN') NULL,
  availability_date DATE NULL,
  start_time_utc DATETIME NOT NULL,
  end_time_utc DATETIME NOT NULL,
  timezone VARCHAR(64) NOT NULL,
  recurrence_end DATE NULL,
  spans_midnight TINYINT(1) NOT NULL DEFAULT 0,
  notes VARCHAR(512) NULL,
  created_by INT UNSIGNED NULL,
  updated_by INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL,
  normalized_day_of_week VARCHAR(3) GENERATED ALWAYS AS (IFNULL(day_of_week, '')) STORED,
  normalized_availability_date DATE GENERATED ALWAYS AS (IFNULL(availability_date, DATE(start_time_utc))) STORED,
  PRIMARY KEY (id),
  UNIQUE KEY ux_teacher_availability_unique (
    teacher_id,
    school_id,
    is_recurring,
    normalized_day_of_week,
    normalized_availability_date,
    start_time_utc,
    end_time_utc
  ),
  KEY idx_teacher_availability_teacher (teacher_id),
  KEY idx_teacher_availability_school (school_id),
  KEY idx_teacher_availability_recurring (is_recurring, day_of_week),

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Optional reference table to normalize time zone labels
CREATE TABLE IF NOT EXISTS ref_timezones (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  timezone VARCHAR(64) NOT NULL,
  label VARCHAR(128) NOT NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (id),
  UNIQUE KEY ux_ref_timezones_timezone (timezone)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- CRM - Guardian contacts (reusable across modules)
-- ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS guardians (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  school_id BIGINT UNSIGNED NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NULL,
  email VARCHAR(190) NULL,
  phone VARCHAR(32) NULL,
  relationship VARCHAR(64) NULL,
  communication_preference ENUM('email','sms','both') NOT NULL DEFAULT 'both',
  notes TEXT NULL,
  status TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY ux_guardians_school_email (school_id, email),
  UNIQUE KEY ux_guardians_school_phone (school_id, phone),
  KEY idx_guardians_school (school_id),
  CONSTRAINT fk_guardians_school
    FOREIGN KEY (school_id) REFERENCES t_school(id)
      ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS student_guardians (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  student_id BIGINT UNSIGNED NOT NULL,
  guardian_id BIGINT UNSIGNED NOT NULL,
  is_primary TINYINT(1) NOT NULL DEFAULT 0,
  relationship_override VARCHAR(64) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY ux_student_guardians_unique (student_id, guardian_id),
  KEY idx_student_guardians_guardian (guardian_id),
  KEY idx_student_guardians_student (student_id),
  CONSTRAINT fk_student_guardians_guardian
    FOREIGN KEY (guardian_id) REFERENCES guardians(id)
      ON DELETE CASCADE,
  CONSTRAINT fk_student_guardians_student
    FOREIGN KEY (student_id) REFERENCES t_students(id)
      ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- CRM - Fee plans, student assignments, payments, invoices
-- ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS fee_plans (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  school_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(150) NOT NULL,
  plan_type ENUM('monthly','prepaid','per_class','custom') NOT NULL DEFAULT 'monthly',
  amount DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  billing_cycle_days INT UNSIGNED NULL,
  auto_payment_enabled TINYINT(1) NOT NULL DEFAULT 0,
  metadata JSON NULL,
  description TEXT NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_fee_plans_school (school_id),
  CONSTRAINT fk_fee_plans_school
    FOREIGN KEY (school_id) REFERENCES t_school(id)
      ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS student_fee_plans (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  student_id BIGINT UNSIGNED NOT NULL,
  fee_plan_id BIGINT UNSIGNED NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NULL,
  custom_amount DECIMAL(12,2) NULL,
  discount_amount DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  status ENUM('active','paused','ended') NOT NULL DEFAULT 'active',
  auto_payment_override TINYINT(1) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY ux_student_fee_plans_unique (student_id, fee_plan_id, start_date),
  KEY idx_student_fee_plans_student (student_id),
  KEY idx_student_fee_plans_plan (fee_plan_id),
  CONSTRAINT fk_student_fee_plans_student
    FOREIGN KEY (student_id) REFERENCES t_students(id)
      ON DELETE CASCADE,
  CONSTRAINT fk_student_fee_plans_plan
    FOREIGN KEY (fee_plan_id) REFERENCES fee_plans(id)
      ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS payments (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  student_id BIGINT UNSIGNED NOT NULL,
  fee_plan_id BIGINT UNSIGNED NULL,
  student_fee_plan_id BIGINT UNSIGNED NULL,
  amount DECIMAL(12,2) NOT NULL,
  payment_date DATETIME NOT NULL,
  payment_method VARCHAR(50) NULL,
  receipt_number VARCHAR(100) NULL,
  notes TEXT NULL,
  recorded_by BIGINT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY ux_payments_receipt (receipt_number),
  KEY idx_payments_student (student_id),
  KEY idx_payments_plan (student_fee_plan_id),
  CONSTRAINT fk_payments_student
    FOREIGN KEY (student_id) REFERENCES t_students(id)
      ON DELETE CASCADE,
  CONSTRAINT fk_payments_assignment
    FOREIGN KEY (student_fee_plan_id) REFERENCES student_fee_plans(id)
      ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS invoices (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  student_id BIGINT UNSIGNED NOT NULL,
  student_fee_plan_id BIGINT UNSIGNED NULL,
  amount_due DECIMAL(12,2) NOT NULL,
  amount_paid DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  due_date DATE NOT NULL,
  issued_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status ENUM('draft','sent','paid','void') NOT NULL DEFAULT 'sent',
  invoice_number VARCHAR(100) NULL,
  pdf_path VARCHAR(255) NULL,
  notes TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY ux_invoices_number (invoice_number),
  KEY idx_invoices_student (student_id),
  KEY idx_invoices_assignment (student_fee_plan_id),
  CONSTRAINT fk_invoices_student
    FOREIGN KEY (student_id) REFERENCES t_students(id)
      ON DELETE CASCADE,
  CONSTRAINT fk_invoices_assignment
    FOREIGN KEY (student_fee_plan_id) REFERENCES student_fee_plans(id)
      ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- CRM - Messaging (notifications & templates)
-- ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS notification_templates (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  school_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(150) NOT NULL,
  channel ENUM('email','sms','both') NOT NULL DEFAULT 'both',
  subject VARCHAR(200) NULL,
  body TEXT NOT NULL,
  placeholders JSON NULL,
  created_by BIGINT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY ux_templates_school_name (school_id, name),
  KEY idx_templates_school (school_id),
  CONSTRAINT fk_notification_templates_school
    FOREIGN KEY (school_id) REFERENCES t_school(id)
      ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS notifications (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  template_id BIGINT UNSIGNED NULL,
  school_id BIGINT UNSIGNED NOT NULL,
  recipient_type ENUM('student','guardian') NOT NULL DEFAULT 'guardian',
  recipient_id BIGINT UNSIGNED NOT NULL,
  student_id BIGINT UNSIGNED NULL,
  channel ENUM('email','sms') NOT NULL DEFAULT 'email',
  status ENUM('pending','queued','sent','failed','cancelled') NOT NULL DEFAULT 'pending',
  scheduled_at DATETIME NULL,
  sent_at DATETIME NULL,
  payload JSON NULL,
  error_message TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_notifications_school_status (school_id, status),
  KEY idx_notifications_recipient (recipient_type, recipient_id),
  CONSTRAINT fk_notifications_template
    FOREIGN KEY (template_id) REFERENCES notification_templates(id)
      ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS notification_optouts (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  contact_type ENUM('guardian','student') NOT NULL DEFAULT 'guardian',
  contact_id BIGINT UNSIGNED NOT NULL,
  channel ENUM('sms','email') NOT NULL DEFAULT 'email',
  reason VARCHAR(200) NULL,
  metadata JSON NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY ux_optouts_contact_channel (contact_type, contact_id, channel)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- CRM - Exams, scores, report cards
-- ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS exams (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  school_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(150) NOT NULL,
  term VARCHAR(60) NULL,
  class_id BIGINT UNSIGNED NULL,
  exam_date DATE NULL,
  created_by BIGINT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_exams_school (school_id),
  KEY idx_exams_term (school_id, term),
  CONSTRAINT fk_exams_school
    FOREIGN KEY (school_id) REFERENCES t_school(id)
      ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS exam_scores (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  exam_id BIGINT UNSIGNED NOT NULL,
  student_id BIGINT UNSIGNED NOT NULL,
  subject VARCHAR(120) NOT NULL,
  max_score DECIMAL(10,2) NOT NULL DEFAULT 100.00,
  score DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  teacher_comments TEXT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_exam_scores_exam_student (exam_id, student_id),
  CONSTRAINT fk_exam_scores_exam
    FOREIGN KEY (exam_id) REFERENCES exams(id)
      ON DELETE CASCADE,
  CONSTRAINT fk_exam_scores_student
    FOREIGN KEY (student_id) REFERENCES t_students(id)
      ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS report_cards (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  exam_id BIGINT UNSIGNED NOT NULL,
  student_id BIGINT UNSIGNED NOT NULL,
  status ENUM('draft','generated','shared') NOT NULL DEFAULT 'draft',
  generated_at DATETIME NULL,
  pdf_path VARCHAR(255) NULL,
  share_token VARCHAR(64) NULL,
  expires_at DATETIME NULL,
  metadata JSON NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY ux_report_cards_exam_student (exam_id, student_id),
  KEY idx_report_cards_share (share_token),
  CONSTRAINT fk_report_cards_exam
    FOREIGN KEY (exam_id) REFERENCES exams(id)
      ON DELETE CASCADE,
  CONSTRAINT fk_report_cards_student
    FOREIGN KEY (student_id) REFERENCES t_students(id)
      ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Optional migration helpers: seed guardians from existing student fields
-- (Adjust column names to match your t_students schema before running)
-- ---------------------------------------------------------------------

-- Example data migration (commented out by default):
-- INSERT INTO guardians (school_id, first_name, last_name, email, phone, relationship, communication_preference, status)
-- SELECT DISTINCT
--   ts.school_id,
--   NULLIF(TRIM(ts.parent1_firstname), ''),
--   NULLIF(TRIM(ts.parent1_lastname), ''),
--   NULLIF(TRIM(ts.parent1_email), ''),
--   NULLIF(TRIM(ts.parent1_phone), ''),
--   COALESCE(NULLIF(TRIM(ts.parent1_relationship), ''), 'Primary Contact'),
--   'both',
--   1
-- FROM t_students ts
-- WHERE COALESCE(ts.parent1_firstname, ts.parent1_lastname, ts.parent1_email, ts.parent1_phone) IS NOT NULL
-- ON DUPLICATE KEY UPDATE
--   first_name = VALUES(first_name),
--   last_name = VALUES(last_name),
--   phone = COALESCE(VALUES(phone), phone),
--   relationship = COALESCE(VALUES(relationship), relationship);

-- INSERT INTO student_guardians (student_id, guardian_id, is_primary)
-- SELECT ts.id, g.id, 1
-- FROM t_students ts
-- JOIN guardians g
--   ON g.school_id = ts.school_id
--  AND (g.email = NULLIF(TRIM(ts.parent1_email), '') OR g.phone = NULLIF(TRIM(ts.parent1_phone), ''))
-- ON DUPLICATE KEY UPDATE is_primary = VALUES(is_primary);

COMMIT;
