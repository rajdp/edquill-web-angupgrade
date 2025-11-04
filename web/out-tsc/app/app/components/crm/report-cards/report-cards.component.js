import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../shared/service/crm.service";
import * as i3 from "../../../shared/service/auth.service";
import * as i4 from "../../../shared/service/student.service";
import * as i5 from "ngx-toastr";
import * as i6 from "@angular/common";
function CrmReportCardsComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 40);
} }
function CrmReportCardsComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 41);
} }
function CrmReportCardsComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function CrmReportCardsComponent_button_30_Template_button_click_0_listener() { const exam_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onExamSelection(exam_r3.id)); });
    i0.ɵɵelementStart(1, "div", 43);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 44);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 44);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const exam_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(exam_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(exam_r3.term || "No term");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 3, exam_r3.exam_date));
} }
function CrmReportCardsComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtext(1, " No exams created yet. ");
    i0.ɵɵelementEnd();
} }
function CrmReportCardsComponent_option_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 46);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const exam_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", exam_r5.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(exam_r5.name);
} }
function CrmReportCardsComponent_option_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 46);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const student_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", student_r6.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(student_r6.full_name);
} }
function CrmReportCardsComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 23)(1, "td");
    i0.ɵɵelement(2, "input", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵelement(4, "input", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵelement(6, "input", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵelement(8, "input", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 51)(10, "button", 52);
    i0.ɵɵlistener("click", function CrmReportCardsComponent_tr_68_Template_button_click_10_listener() { const i_r8 = i0.ɵɵrestoreView(_r7).index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.removeScoreRow(i_r8)); });
    i0.ɵɵelement(11, "i", 53);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const scoreGroup_r9 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", scoreGroup_r9);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r3.scores.length === 1);
} }
function CrmReportCardsComponent_span_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 40);
} }
function CrmReportCardsComponent_span_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 40);
} }
function CrmReportCardsComponent_div_84_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 40);
} }
function CrmReportCardsComponent_div_84_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62)(1, "div", 63)(2, "div", 43);
    i0.ɵɵtext(3, "Share Token");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 44);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "date");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.existingReport.share_token);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Expires: ", i0.ɵɵpipeBind2(8, 2, ctx_r3.existingReport.expires_at, "short"), "");
} }
function CrmReportCardsComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 54)(2, "div")(3, "div", 43);
    i0.ɵɵtext(4, "Latest Report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 44);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 55);
    i0.ɵɵlistener("click", function CrmReportCardsComponent_div_84_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r10); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.downloadReport()); });
    i0.ɵɵelement(9, "i", 56);
    i0.ɵɵtext(10, "Download PDF ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(11, "hr");
    i0.ɵɵelementStart(12, "form", 57);
    i0.ɵɵlistener("ngSubmit", function CrmReportCardsComponent_div_84_Template_form_ngSubmit_12_listener() { i0.ɵɵrestoreView(_r10); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.shareReport()); });
    i0.ɵɵelementStart(13, "div", 25)(14, "label", 9);
    i0.ɵɵtext(15, "Expires At");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "input", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 59)(18, "button", 60);
    i0.ɵɵtemplate(19, CrmReportCardsComponent_div_84_span_19_Template, 1, 0, "span", 14);
    i0.ɵɵtext(20, " Create Share Link ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(21, CrmReportCardsComponent_div_84_div_21_Template, 9, 5, "div", 61);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Generated: ", i0.ɵɵpipeBind2(7, 5, ctx_r3.lastGeneratedReport.generated_at, "short"), "");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r3.shareForm);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", ctx_r3.sharingReport);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.sharingReport);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.existingReport);
} }
function CrmReportCardsComponent_ng_template_85_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 64);
    i0.ɵɵtext(1, "Generate a report to enable download and sharing.");
    i0.ɵɵelementEnd();
} }
export class CrmReportCardsComponent {
    constructor(fb, crmService, authService, studentService, toastr) {
        this.fb = fb;
        this.crmService = crmService;
        this.authService = authService;
        this.studentService = studentService;
        this.toastr = toastr;
        this.exams = [];
        this.students = [];
        this.existingReport = null;
        this.lastGeneratedReport = null;
        this.schoolId = null;
        this.loadingExams = false;
        this.savingExam = false;
        this.savingScores = false;
        this.generatingReport = false;
        this.sharingReport = false;
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
    ngOnInit() {
        this.schoolId = this.authService.getSessionData('school_id');
        this.loadExams();
        this.loadStudents();
        this.addScoreRow();
    }
    get scores() {
        return this.scoresForm.get('scores');
    }
    addScoreRow(score = {}) {
        this.scores.push(this.fb.group({
            id: [score.id || null],
            subject: [score.subject || '', Validators.required],
            max_score: [score.max_score || 100, Validators.required],
            score: [score.score || 0, Validators.required],
            teacher_comments: [score.teacher_comments || '']
        }));
    }
    removeScoreRow(index) {
        if (this.scores.length > 1) {
            this.scores.removeAt(index);
        }
    }
    loadExams() {
        if (!this.schoolId) {
            return;
        }
        this.loadingExams = true;
        this.crmService.listExams({ school_id: this.schoolId }).subscribe({
            next: (response) => {
                this.loadingExams = false;
                if (response?.IsSuccess) {
                    this.exams = response.ResponseObject || [];
                }
                else {
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
    loadStudents() {
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
            next: (response) => {
                if (response?.IsSuccess) {
                    this.students = (response.ResponseObject || []).map((item) => ({
                        ...item,
                        full_name: `${item.first_name ?? ''} ${item.last_name ?? ''}`.trim()
                    }));
                }
                else {
                    this.students = [];
                }
            },
            error: () => {
                this.students = [];
            }
        });
    }
    saveExam() {
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
            next: (response) => {
                if (response?.IsSuccess) {
                    this.toastr.success('Exam saved');
                    this.examForm.reset();
                    this.loadExams();
                }
                else {
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
    onExamSelection(examId) {
        const id = examId === '' ? null : Number(examId);
        this.scoresForm.patchValue({ exam_id: id });
        this.refreshScores();
    }
    onStudentSelection(studentId) {
        const id = studentId === '' ? null : Number(studentId);
        this.scoresForm.patchValue({ student_id: id });
        this.refreshScores();
    }
    refreshScores() {
        const examId = this.scoresForm.value.exam_id;
        const studentId = this.scoresForm.value.student_id;
        if (!examId || !studentId) {
            return;
        }
        this.crmService.getScores({ exam_id: examId, student_id: studentId }).subscribe({
            next: (response) => {
                this.scores.clear();
                const existing = response?.ResponseObject || [];
                if (existing.length) {
                    existing.forEach((score) => this.addScoreRow(score));
                }
                else {
                    this.addScoreRow();
                }
            },
            error: () => {
                this.scores.clear();
                this.addScoreRow();
            }
        });
    }
    saveScores() {
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
            next: (response) => {
                if (response?.IsSuccess) {
                    this.toastr.success('Scores saved');
                    this.refreshScores();
                }
                else {
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
    generateReport() {
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
            next: (response) => {
                if (response?.IsSuccess) {
                    this.lastGeneratedReport = response.ResponseObject;
                    this.shareForm.patchValue({ report_card_id: this.lastGeneratedReport.id });
                    this.toastr.success('Report generated');
                }
                else {
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
    shareReport() {
        if (this.shareForm.invalid) {
            this.shareForm.markAllAsTouched();
            return;
        }
        this.sharingReport = true;
        this.crmService.shareReport(this.shareForm.value).subscribe({
            next: (response) => {
                if (response?.IsSuccess) {
                    this.toastr.success('Share link created');
                    this.existingReport = response.ResponseObject;
                }
                else {
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
    downloadReport() {
        if (this.lastGeneratedReport?.pdf_path) {
            const url = `${this.authService.env.apiHost}${this.lastGeneratedReport.pdf_path}`;
            window.open(url, '_blank');
        }
    }
    static { this.ɵfac = function CrmReportCardsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CrmReportCardsComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.CrmService), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.StudentService), i0.ɵɵdirectiveInject(i5.ToastrService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CrmReportCardsComponent, selectors: [["app-crm-report-cards"]], decls: 87, vars: 16, consts: [["noReport", ""], [1, "row", "g-4"], [1, "col-lg-4"], [1, "card", "mb-4"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], ["formControlName", "name", "placeholder", "Fall Midterm", 1, "form-control"], ["formControlName", "term", "placeholder", "Fall 2025", 1, "form-control"], ["type", "date", "formControlName", "exam_date", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "card", "exam-list"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "card-body", "p-0"], [1, "list-group", "list-group-flush"], ["class", "list-group-item list-group-item-action", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["class", "list-group-item text-center text-muted", 4, "ngIf"], [1, "col-lg-8"], [3, "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], ["formControlName", "exam_id", 1, "form-select", 3, "change"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "student_id", 1, "form-select", 3, "change"], [1, "table-responsive", "mt-4"], [1, "table", "table-bordered", "align-middle"], [3, "formGroup", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], [1, "d-flex", "gap-2", "mt-3"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "card"], [4, "ngIf", "ngIfElse"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "spinner-border", "spinner-border-sm"], ["type", "button", 1, "list-group-item", "list-group-item-action", 3, "click"], [1, "fw-semibold"], [1, "text-muted", "small"], [1, "list-group-item", "text-center", "text-muted"], [3, "value"], ["formControlName", "subject", "placeholder", "Mathematics", 1, "form-control"], ["type", "number", "formControlName", "max_score", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "score", "min", "0", 1, "form-control"], ["formControlName", "teacher_comments", "placeholder", "Notes", 1, "form-control"], [1, "text-center"], ["type", "button", 1, "btn", "btn-link", "text-danger", 3, "click", "disabled"], [1, "bi", "bi-trash"], [1, "d-flex", "justify-content-between", "align-items-center"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], [1, "bi", "bi-download", "me-1"], [1, "row", "g-3", 3, "ngSubmit", "formGroup"], ["type", "date", "formControlName", "expires_at", 1, "form-control"], [1, "col-md-6", "d-flex", "align-items-end"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"], ["class", "mt-3", 4, "ngIf"], [1, "mt-3"], [1, "alert", "alert-info", "mb-0"], [1, "text-muted", "mb-0"]], template: function CrmReportCardsComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h5", 5);
            i0.ɵɵtext(5, "Create Exam");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 6)(7, "form", 7);
            i0.ɵɵlistener("ngSubmit", function CrmReportCardsComponent_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.saveExam()); });
            i0.ɵɵelementStart(8, "div", 8)(9, "label", 9);
            i0.ɵɵtext(10, "Exam Name *");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "input", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 8)(13, "label", 9);
            i0.ɵɵtext(14, "Term");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(15, "input", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 8)(17, "label", 9);
            i0.ɵɵtext(18, "Exam Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(19, "input", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "button", 13);
            i0.ɵɵtemplate(21, CrmReportCardsComponent_span_21_Template, 1, 0, "span", 14);
            i0.ɵɵtext(22, " Save Exam ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(23, "div", 15)(24, "div", 16)(25, "h6", 5);
            i0.ɵɵtext(26, "Exams");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(27, CrmReportCardsComponent_span_27_Template, 1, 0, "span", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 18)(29, "div", 19);
            i0.ɵɵtemplate(30, CrmReportCardsComponent_button_30_Template, 8, 5, "button", 20)(31, CrmReportCardsComponent_div_31_Template, 2, 0, "div", 21);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(32, "div", 22)(33, "div", 3)(34, "div", 4)(35, "h5", 5);
            i0.ɵɵtext(36, "Score Entry");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "div", 6)(38, "form", 23)(39, "div", 24)(40, "div", 25)(41, "label", 9);
            i0.ɵɵtext(42, "Exam *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "select", 26);
            i0.ɵɵlistener("change", function CrmReportCardsComponent_Template_select_change_43_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onExamSelection($event.target.value)); });
            i0.ɵɵelementStart(44, "option", 27);
            i0.ɵɵtext(45, "Select exam");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(46, CrmReportCardsComponent_option_46_Template, 2, 2, "option", 28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "div", 25)(48, "label", 9);
            i0.ɵɵtext(49, "Student *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "select", 29);
            i0.ɵɵlistener("change", function CrmReportCardsComponent_Template_select_change_50_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onStudentSelection($event.target.value)); });
            i0.ɵɵelementStart(51, "option", 27);
            i0.ɵɵtext(52, "Select student");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(53, CrmReportCardsComponent_option_53_Template, 2, 2, "option", 28);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(54, "div", 30)(55, "table", 31)(56, "thead")(57, "tr")(58, "th");
            i0.ɵɵtext(59, "Subject *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "th");
            i0.ɵɵtext(61, "Max Score *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "th");
            i0.ɵɵtext(63, "Score *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "th");
            i0.ɵɵtext(65, "Comments");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(66, "th");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "tbody");
            i0.ɵɵtemplate(68, CrmReportCardsComponent_tr_68_Template, 12, 2, "tr", 32);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(69, "button", 33);
            i0.ɵɵlistener("click", function CrmReportCardsComponent_Template_button_click_69_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addScoreRow()); });
            i0.ɵɵelement(70, "i", 34);
            i0.ɵɵtext(71, " Add Subject ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(72, "div", 35)(73, "button", 36);
            i0.ɵɵlistener("click", function CrmReportCardsComponent_Template_button_click_73_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.saveScores()); });
            i0.ɵɵtemplate(74, CrmReportCardsComponent_span_74_Template, 1, 0, "span", 14);
            i0.ɵɵtext(75, " Save Scores ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "button", 37);
            i0.ɵɵlistener("click", function CrmReportCardsComponent_Template_button_click_76_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.generateReport()); });
            i0.ɵɵtemplate(77, CrmReportCardsComponent_span_77_Template, 1, 0, "span", 14);
            i0.ɵɵtext(78, " Generate Report Card ");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(79, "div", 38)(80, "div", 4)(81, "h5", 5);
            i0.ɵɵtext(82, "Report Delivery");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(83, "div", 6);
            i0.ɵɵtemplate(84, CrmReportCardsComponent_div_84_Template, 22, 8, "div", 39)(85, CrmReportCardsComponent_ng_template_85_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            const noReport_r11 = i0.ɵɵreference(86);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.examForm);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("disabled", ctx.savingExam);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.savingExam);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.loadingExams);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.exams);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.exams.length && !ctx.loadingExams);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.scoresForm);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.exams);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.students);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngForOf", ctx.scores.controls);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.savingScores);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.savingScores);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.generatingReport);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.generatingReport);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.lastGeneratedReport)("ngIfElse", noReport_r11);
        } }, dependencies: [i6.NgForOf, i6.NgIf, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MinValidator, i1.FormGroupDirective, i1.FormControlName, i6.DatePipe], styles: [".exam-list[_ngcontent-%COMP%] {\n  max-height: 320px;\n  overflow-y: auto;\n}\n\ntable[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 120px;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrmReportCardsComponent, [{
        type: Component,
        args: [{ selector: 'app-crm-report-cards', template: "<div class=\"row g-4\">\n  <div class=\"col-lg-4\">\n    <div class=\"card mb-4\">\n      <div class=\"card-header\">\n        <h5 class=\"mb-0\">Create Exam</h5>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"examForm\" (ngSubmit)=\"saveExam()\">\n          <div class=\"mb-3\">\n            <label class=\"form-label\">Exam Name *</label>\n            <input class=\"form-control\" formControlName=\"name\" placeholder=\"Fall Midterm\" />\n          </div>\n          <div class=\"mb-3\">\n            <label class=\"form-label\">Term</label>\n            <input class=\"form-control\" formControlName=\"term\" placeholder=\"Fall 2025\" />\n          </div>\n          <div class=\"mb-3\">\n            <label class=\"form-label\">Exam Date</label>\n            <input class=\"form-control\" type=\"date\" formControlName=\"exam_date\" />\n          </div>\n          <button class=\"btn btn-primary w-100\" type=\"submit\" [disabled]=\"savingExam\">\n            <span *ngIf=\"savingExam\" class=\"spinner-border spinner-border-sm me-2\"></span>\n            Save Exam\n          </button>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"card exam-list\">\n      <div class=\"card-header d-flex justify-content-between align-items-center\">\n        <h6 class=\"mb-0\">Exams</h6>\n        <span *ngIf=\"loadingExams\" class=\"spinner-border spinner-border-sm\"></span>\n      </div>\n      <div class=\"card-body p-0\">\n        <div class=\"list-group list-group-flush\">\n          <button class=\"list-group-item list-group-item-action\" type=\"button\" *ngFor=\"let exam of exams\" (click)=\"onExamSelection(exam.id)\">\n            <div class=\"fw-semibold\">{{ exam.name }}</div>\n            <div class=\"text-muted small\">{{ exam.term || 'No term' }}</div>\n            <div class=\"text-muted small\">{{ exam.exam_date | date }}</div>\n          </button>\n          <div class=\"list-group-item text-center text-muted\" *ngIf=\"!exams.length && !loadingExams\">\n            No exams created yet.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-8\">\n    <div class=\"card mb-4\">\n      <div class=\"card-header\">\n        <h5 class=\"mb-0\">Score Entry</h5>\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"scoresForm\">\n          <div class=\"row g-3\">\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Exam *</label>\n              <select class=\"form-select\" formControlName=\"exam_id\" (change)=\"onExamSelection($event.target.value)\">\n                <option value=\"\" disabled>Select exam</option>\n                <option *ngFor=\"let exam of exams\" [value]=\"exam.id\">{{ exam.name }}</option>\n              </select>\n            </div>\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Student *</label>\n              <select class=\"form-select\" formControlName=\"student_id\" (change)=\"onStudentSelection($event.target.value)\">\n                <option value=\"\" disabled>Select student</option>\n                <option *ngFor=\"let student of students\" [value]=\"student.id\">{{ student.full_name }}</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"table-responsive mt-4\">\n            <table class=\"table table-bordered align-middle\">\n              <thead>\n                <tr>\n                  <th>Subject *</th>\n                  <th>Max Score *</th>\n                  <th>Score *</th>\n                  <th>Comments</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let scoreGroup of scores.controls; let i = index\" [formGroup]=\"scoreGroup\">\n                  <td><input class=\"form-control\" formControlName=\"subject\" placeholder=\"Mathematics\" /></td>\n                  <td><input class=\"form-control\" type=\"number\" formControlName=\"max_score\" min=\"0\" /></td>\n                  <td><input class=\"form-control\" type=\"number\" formControlName=\"score\" min=\"0\" /></td>\n                  <td><input class=\"form-control\" formControlName=\"teacher_comments\" placeholder=\"Notes\" /></td>\n                  <td class=\"text-center\">\n                    <button class=\"btn btn-link text-danger\" type=\"button\" (click)=\"removeScoreRow(i)\" [disabled]=\"scores.length === 1\">\n                      <i class=\"bi bi-trash\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <button class=\"btn btn-sm btn-outline-primary\" type=\"button\" (click)=\"addScoreRow()\">\n              <i class=\"bi bi-plus-lg me-1\"></i> Add Subject\n            </button>\n          </div>\n\n          <div class=\"d-flex gap-2 mt-3\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"saveScores()\" [disabled]=\"savingScores\">\n              <span *ngIf=\"savingScores\" class=\"spinner-border spinner-border-sm me-2\"></span>\n              Save Scores\n            </button>\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"generateReport()\" [disabled]=\"generatingReport\">\n              <span *ngIf=\"generatingReport\" class=\"spinner-border spinner-border-sm me-2\"></span>\n              Generate Report Card\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 class=\"mb-0\">Report Delivery</h5>\n      </div>\n      <div class=\"card-body\">\n        <div *ngIf=\"lastGeneratedReport; else noReport\">\n          <div class=\"d-flex justify-content-between align-items-center\">\n            <div>\n              <div class=\"fw-semibold\">Latest Report</div>\n              <div class=\"text-muted small\">Generated: {{ lastGeneratedReport.generated_at | date: 'short' }}</div>\n            </div>\n            <button class=\"btn btn-outline-success\" type=\"button\" (click)=\"downloadReport()\">\n              <i class=\"bi bi-download me-1\"></i>Download PDF\n            </button>\n          </div>\n          <hr />\n          <form [formGroup]=\"shareForm\" (ngSubmit)=\"shareReport()\" class=\"row g-3\">\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Expires At</label>\n              <input class=\"form-control\" type=\"date\" formControlName=\"expires_at\" />\n            </div>\n            <div class=\"col-md-6 d-flex align-items-end\">\n              <button class=\"btn btn-outline-primary\" type=\"submit\" [disabled]=\"sharingReport\">\n                <span *ngIf=\"sharingReport\" class=\"spinner-border spinner-border-sm me-2\"></span>\n                Create Share Link\n              </button>\n            </div>\n          </form>\n          <div *ngIf=\"existingReport\" class=\"mt-3\">\n            <div class=\"alert alert-info mb-0\">\n              <div class=\"fw-semibold\">Share Token</div>\n              <div>{{ existingReport.share_token }}</div>\n              <div class=\"text-muted small\">Expires: {{ existingReport.expires_at | date: 'short' }}</div>\n            </div>\n          </div>\n        </div>\n        <ng-template #noReport>\n          <p class=\"text-muted mb-0\">Generate a report to enable download and sharing.</p>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".exam-list {\n  max-height: 320px;\n  overflow-y: auto;\n}\n\ntable input {\n  min-width: 120px;\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.CrmService }, { type: i3.AuthService }, { type: i4.StudentService }, { type: i5.ToastrService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CrmReportCardsComponent, { className: "CrmReportCardsComponent" }); })();
//# sourceMappingURL=report-cards.component.js.map