import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CrmService } from '../../../shared/service/crm.service';
import { AuthService } from '../../../shared/service/auth.service';
import { StudentService } from '../../../shared/service/student.service';

interface ExamItem {
  id: number;
  name: string;
  term?: string;
  exam_date?: string;
}

@Component({
  selector: 'app-crm-report-cards',
  templateUrl: './report-cards.component.html',
  styleUrls: ['./report-cards.component.scss']
})
export class CrmReportCardsComponent implements OnInit {
  examForm: FormGroup;
  scoresForm: FormGroup;
  shareForm: FormGroup;

  exams: ExamItem[] = [];
  students: any[] = [];
  existingReport: any = null;
  lastGeneratedReport: any = null;

  schoolId: string | null = null;
  loadingExams = false;
  savingExam = false;
  savingScores = false;
  generatingReport = false;
  sharingReport = false;

  constructor(
    private fb: FormBuilder,
    private crmService: CrmService,
    private authService: AuthService,
    private studentService: StudentService,
    private toastr: ToastrService
  ) {
    this.examForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
      term: [''],
      class_id: [''],
      exam_date: ['']
    });

    this.scoresForm = this.fb.group({
      exam_id: [null, Validators.required],
      student_id: [null, Validators.required],
      scores: this.fb.array([])
    });

    this.shareForm = this.fb.group({
      report_card_id: [null, Validators.required],
      expires_at: ['']
    });
  }

  ngOnInit(): void {
    this.schoolId = this.authService.getSessionData('school_id');
    this.loadExams();
    this.loadStudents();
    this.addScoreRow();
  }

  get scores(): FormArray {
    return this.scoresForm.get('scores') as FormArray;
  }

  addScoreRow(score: any = {}): void {
    this.scores.push(
      this.fb.group({
        id: [score.id || null],
        subject: [score.subject || '', Validators.required],
        max_score: [score.max_score || 100, Validators.required],
        score: [score.score || 0, Validators.required],
        teacher_comments: [score.teacher_comments || '']
      })
    );
  }

  removeScoreRow(index: number): void {
    if (this.scores.length > 1) {
      this.scores.removeAt(index);
    }
  }

  loadExams(): void {
    if (!this.schoolId) {
      return;
    }

    this.loadingExams = true;
    this.crmService.listExams({ school_id: this.schoolId }).subscribe({
      next: (response: any) => {
        this.loadingExams = false;
        if (response?.IsSuccess) {
          this.exams = response.ResponseObject || [];
        } else {
          this.exams = [];
          this.toastr.error(response?.ErrorObject || 'Unable to load exams');
        }
      },
      error: () => {
        this.loadingExams = false;
        this.exams = [];
        this.toastr.error('Unable to load exams');
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

  saveExam(): void {
    if (this.examForm.invalid || !this.schoolId) {
      this.examForm.markAllAsTouched();
      return;
    }

    this.savingExam = true;
    const payload = {
      ...this.examForm.value,
      school_id: this.schoolId
    };

    this.crmService.saveExam(payload).subscribe({
      next: (response: any) => {
        if (response?.IsSuccess) {
          this.toastr.success('Exam saved');
          this.examForm.reset();
          this.loadExams();
        } else {
          this.toastr.error(response?.ErrorObject || 'Unable to save exam');
        }
      },
      error: () => {
        this.toastr.error('Unable to save exam');
      }
    }).add(() => {
      this.savingExam = false;
    });
  }

  onExamSelection(examId: number | string): void {
    const id = examId === '' ? null : Number(examId);
    this.scoresForm.patchValue({ exam_id: id });
    this.refreshScores();
  }

  onStudentSelection(studentId: number | string): void {
    const id = studentId === '' ? null : Number(studentId);
    this.scoresForm.patchValue({ student_id: id });
    this.refreshScores();
  }

  refreshScores(): void {
    const examId = this.scoresForm.value.exam_id;
    const studentId = this.scoresForm.value.student_id;

    if (!examId || !studentId) {
      return;
    }

    this.crmService.getScores({ exam_id: examId, student_id: studentId }).subscribe({
      next: (response: any) => {
        this.scores.clear();
        const existing = response?.ResponseObject || [];
        if (existing.length) {
          existing.forEach((score: any) => this.addScoreRow(score));
        } else {
          this.addScoreRow();
        }
      },
      error: () => {
        this.scores.clear();
        this.addScoreRow();
      }
    });
  }

  saveScores(): void {
    if (this.scoresForm.invalid) {
      this.scoresForm.markAllAsTouched();
      return;
    }

    this.savingScores = true;
    const payload = {
      exam_id: this.scoresForm.value.exam_id,
      student_id: this.scoresForm.value.student_id,
      scores: this.scores.value
    };

    this.crmService.saveScores(payload).subscribe({
      next: (response: any) => {
        if (response?.IsSuccess) {
          this.toastr.success('Scores saved');
          this.refreshScores();
        } else {
          this.toastr.error(response?.ErrorObject || 'Unable to save scores');
        }
      },
      error: () => {
        this.toastr.error('Unable to save scores');
      }
    }).add(() => {
      this.savingScores = false;
    });
  }

  generateReport(): void {
    if (this.scoresForm.get('exam_id')?.invalid || this.scoresForm.get('student_id')?.invalid) {
      this.scoresForm.markAllAsTouched();
      return;
    }

    this.generatingReport = true;
    const payload = {
      exam_id: this.scoresForm.value.exam_id,
      student_id: this.scoresForm.value.student_id
    };

    this.crmService.generateReport(payload).subscribe({
      next: (response: any) => {
        if (response?.IsSuccess) {
          this.lastGeneratedReport = response.ResponseObject;
          this.shareForm.patchValue({ report_card_id: this.lastGeneratedReport.id });
          this.toastr.success('Report generated');
        } else {
          this.toastr.error(response?.ErrorObject || 'Unable to generate report');
        }
      },
      error: () => {
        this.toastr.error('Unable to generate report');
      }
    }).add(() => {
      this.generatingReport = false;
    });
  }

  shareReport(): void {
    if (this.shareForm.invalid) {
      this.shareForm.markAllAsTouched();
      return;
    }

    this.sharingReport = true;
    this.crmService.shareReport(this.shareForm.value).subscribe({
      next: (response: any) => {
        if (response?.IsSuccess) {
          this.toastr.success('Share link created');
          this.existingReport = response.ResponseObject;
        } else {
          this.toastr.error(response?.ErrorObject || 'Unable to create share link');
        }
      },
      error: () => {
        this.toastr.error('Unable to create share link');
      }
    }).add(() => {
      this.sharingReport = false;
    });
  }

  downloadReport(): void {
    if (this.lastGeneratedReport?.pdf_path) {
      const url = `${this.authService.env.apiHost}${this.lastGeneratedReport.pdf_path}`;
      window.open(url, '_blank');
    }
  }
}
