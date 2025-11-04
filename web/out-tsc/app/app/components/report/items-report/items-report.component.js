import { Component, Input, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AnswerSheetComponent } from '../../studentlogin/answer-sheet/answer-sheet.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/report.service";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "@angular/platform-browser";
import * as i5 from "@angular/common";
import * as i6 from "@angular/router";
import * as i7 from "../../../shared/service/common-data.service";
import * as i8 from "@ng-bootstrap/ng-bootstrap";
import * as i9 from "ngx-toastr";
import * as i10 from "../../../shared/service/teacher.service";
import * as i11 from "../../../shared/service/validation.service";
import * as i12 from "@angular/forms";
import * as i13 from "../../../shared/service/common.service";
import * as i14 from "../../../shared/service/contentdetail.service";
import * as i15 from "../../../shared/service/creator.service";
import * as i16 from "../../../shared/service/nav.service";
import * as i17 from "@ng-select/ng-select";
import * as i18 from "../../studentlogin/answer-sheet/answer-sheet.component";
import * as i19 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
const _c0 = ["contentnow"];
const _c1 = ["viewStudentDetails"];
function ItemsReportComponent_div_28_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24)(1, "div", 25)(2, "h3", 26);
    i0.ɵɵtext(3, "Question : ");
    i0.ɵɵelement(4, "span", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "hr")(6, "p", 28);
    i0.ɵɵpipe(7, "sanitizeHtml");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", ctx_r1.hoverTitle.sub_question_no, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(7, 2, ctx_r1.hoverTitle.question), i0.ɵɵsanitizeHtml);
} }
function ItemsReportComponent_div_28_div_4_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    i0.ɵɵpropertyInterpolate("value", i_r5 + 1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.heading);
} }
function ItemsReportComponent_div_28_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "select", 30);
    i0.ɵɵlistener("change", function ItemsReportComponent_div_28_div_4_Template_select_change_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeSec($event)); });
    i0.ɵɵelementStart(2, "option", 31);
    i0.ɵɵtext(3, "All Section");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ItemsReportComponent_div_28_div_4_option_4_Template, 2, 2, "option", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.sectionIndex);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.sectionList);
} }
function ItemsReportComponent_div_28_table_6_th_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 38);
    i0.ɵɵlistener("click", function ItemsReportComponent_div_28_table_6_th_4_Template_th_click_0_listener() { const item_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.clickEvent(item_r7)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r7.sub_question_no);
} }
function ItemsReportComponent_div_28_table_6_tr_5_td_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 43);
} }
function ItemsReportComponent_div_28_table_6_tr_5_td_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 44);
} }
function ItemsReportComponent_div_28_table_6_tr_5_td_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 45);
} }
function ItemsReportComponent_div_28_table_6_tr_5_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, ItemsReportComponent_div_28_table_6_tr_5_td_3_span_1_Template, 1, 0, "span", 40)(2, ItemsReportComponent_div_28_table_6_tr_5_td_3_span_2_Template, 1, 0, "span", 41)(3, ItemsReportComponent_div_28_table_6_tr_5_td_3_span_3_Template, 1, 0, "span", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r10.status == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r10.status == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r10.status == "3");
} }
function ItemsReportComponent_div_28_table_6_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 39);
    i0.ɵɵlistener("click", function ItemsReportComponent_div_28_table_6_tr_5_Template_td_click_1_listener() { const table_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.studentCorrectionDetail(table_r9)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ItemsReportComponent_div_28_table_6_tr_5_td_3_Template, 4, 3, "td", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const table_r9 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", table_r9.student_name, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", table_r9.question[ctx_r1.sectionIndex - 1] == null ? null : table_r9.question[ctx_r1.sectionIndex - 1].section);
} }
function ItemsReportComponent_div_28_table_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 34)(1, "thead")(2, "th", 35);
    i0.ɵɵtext(3, "Student Name");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ItemsReportComponent_div_28_table_6_th_4_Template, 2, 1, "th", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, ItemsReportComponent_div_28_table_6_tr_5_Template, 4, 2, "tr", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.questionStatus[0] == null ? null : ctx_r1.questionStatus[0].question[ctx_r1.sectionIndex - 1] == null ? null : ctx_r1.questionStatus[0].question[ctx_r1.sectionIndex - 1].section);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.questionStatus);
} }
function ItemsReportComponent_div_28_table_7_th_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 38);
    i0.ɵɵlistener("click", function ItemsReportComponent_div_28_table_7_th_4_Template_th_click_0_listener() { const item_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.clickEvent(item_r12)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r12.sub_question_no);
} }
function ItemsReportComponent_div_28_table_7_tr_5_td_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 43);
} }
function ItemsReportComponent_div_28_table_7_tr_5_td_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 44);
} }
function ItemsReportComponent_div_28_table_7_tr_5_td_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 45);
} }
function ItemsReportComponent_div_28_table_7_tr_5_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, ItemsReportComponent_div_28_table_7_tr_5_td_3_span_1_Template, 1, 0, "span", 40)(2, ItemsReportComponent_div_28_table_7_tr_5_td_3_span_2_Template, 1, 0, "span", 41)(3, ItemsReportComponent_div_28_table_7_tr_5_td_3_span_3_Template, 1, 0, "span", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r15.status == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r15.status == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r15.status == "3");
} }
function ItemsReportComponent_div_28_table_7_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 39);
    i0.ɵɵlistener("click", function ItemsReportComponent_div_28_table_7_tr_5_Template_td_click_1_listener() { const table_r14 = i0.ɵɵrestoreView(_r13).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.studentCorrectionDetail(table_r14)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ItemsReportComponent_div_28_table_7_tr_5_td_3_Template, 4, 3, "td", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const table_r14 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", table_r14.student_name, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", table_r14.question[0] == null ? null : table_r14.question[0].section);
} }
function ItemsReportComponent_div_28_table_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 34)(1, "thead")(2, "th", 35);
    i0.ɵɵtext(3, "Student Name");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ItemsReportComponent_div_28_table_7_th_4_Template, 2, 1, "th", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, ItemsReportComponent_div_28_table_7_tr_5_Template, 4, 2, "tr", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.questionStatus[0] == null ? null : ctx_r1.questionStatus[0].question[0] == null ? null : ctx_r1.questionStatus[0].question[0].section);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.questionStatus);
} }
function ItemsReportComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    i0.ɵɵtemplate(3, ItemsReportComponent_div_28_div_3_Template, 8, 4, "div", 20)(4, ItemsReportComponent_div_28_div_4_Template, 5, 2, "div", 21);
    i0.ɵɵelementStart(5, "div", 22);
    i0.ɵɵtemplate(6, ItemsReportComponent_div_28_table_6_Template, 6, 2, "table", 23)(7, ItemsReportComponent_div_28_table_7_Template, 6, 2, "table", 23);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.showQuestion && ctx_r1.hoverTitle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.sectionList.length > 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.sectionIndex != "all");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.sectionIndex == "all");
} }
function ItemsReportComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 47)(2, "button", 48);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.message);
} }
function ItemsReportComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49)(1, "h4", 50);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 51);
    i0.ɵɵlistener("click", function ItemsReportComponent_ng_template_30_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 52);
    i0.ɵɵelement(5, "app-answer-sheet", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.studentName.student_name, " - Report");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("answerShow", true)("contentId", ctx_r1.contentId)("contentFormat", ctx_r1.contentFormat)("is_test", ctx_r1.is_test)("classId", ctx_r1.classId)("studentReportId", ctx_r1.studentId)("backStatus", false)("studentContentId", ctx_r1.studentContentId);
} }
export class ItemsReportComponent {
    constructor(auth, report, confi, sanitizer, datePipe, route, commondata, modalService, toastr, teacher, validationService, formBuilder, common, contentDetail, creatorService, navService) {
        this.auth = auth;
        this.report = report;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.datePipe = datePipe;
        this.route = route;
        this.commondata = commondata;
        this.modalService = modalService;
        this.toastr = toastr;
        this.teacher = teacher;
        this.validationService = validationService;
        this.formBuilder = formBuilder;
        this.common = common;
        this.contentDetail = contentDetail;
        this.creatorService = creatorService;
        this.navService = navService;
        this.sectionList = [];
        this.missedWorkStudentNoRecord = false;
        this.missedWorkNoRecord = false;
        this.functionCalled = false;
        this.sectionIndex = 1;
        this.dragQuestionsList = [];
        this.questionStatusAlt = [];
        this.showQuestion = false;
        this.is_test = '0';
        this.harizontalScroll = true;
        this.roleId = this.auth.getRoleId();
        this.recordsperpage = 10;
        this.pageOffSet = 0;
        this.pageno = 1;
        this.webhost = this.confi.getimgUrl();
        this.studentReport = this.formBuilder.group({
            className: '',
            contentName: '',
            studentName: '',
            submitted: '',
            contentType: '2'
        });
        this.reportData = JSON.parse(this.auth.getSessionData('Individual-items-Report'));
        this.studentReport.controls.className.patchValue(this.reportData.class_id);
        this.studentReport.controls.submitted.patchValue(this.reportData.status);
        this.studentReport.controls.contentName.patchValue(this.reportData.content_id);
        this.classID = this.reportData.class_id;
        this.selectContentFormate = this.reportData.content_format;
    }
    ngOnInit() {
        this.creatorService.changeViewList(true);
        this.navService.collapseSidebar = true;
        this.classDetails();
        if (this.showContent == 'Assignment') {
            this.studentReport.controls.contentType.patchValue('2');
        }
        else if (this.showContent == 'Assessment') {
            this.studentReport.controls.contentType.patchValue('3');
        }
    }
    ngOnDestroy() {
        this.creatorService.changeViewList(false);
        this.navService.collapseSidebar = false;
    }
    numberValidate(event) {
        this.validationService.numberValidate(event);
    }
    setPage(pageInfo) {
        this.pageno = pageInfo.offset + 1;
        this.pageOffSet = pageInfo.offset;
    }
    close() {
        this.modalRef.close('modalContentnow');
        this.notifyType = '';
    }
    onSave() {
        this.modalRef.close('viewStudentDetails');
    }
    closeAnswer() {
        this.modalRef.close('viewStudentDetails');
    }
    classDetails() {
        if (this.auth.getRoleId() == '2') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                teacher_id: '0',
            };
            this.report.getMissedWorkClassList(data).subscribe((successData) => {
                this.classDetailsSuccess(successData);
            }, (error) => {
                this.classDetailsFailure(error);
            });
        }
        else {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                teacher_id: this.auth.getUserId(),
            };
            this.report.getMissedWorkClassList(data).subscribe((successData) => {
                this.classDetailsSuccess(successData);
            }, (error) => {
                this.classDetailsFailure(error);
            });
        }
    }
    classDetailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.classList = successData.ResponseObject;
            // this.studentReport.controls.className.patchValue(this.classList[0].class_id);
            this.studentDetails();
            // this.StudentQuestionStatus();
            // this.StudentQuestionList();
        }
    }
    selectClass() {
        this.studentDetails();
        this.StudentQuestionStatus();
        // this.StudentQuestionList();
    }
    classDetailsFailure(error) {
        console.log(error, 'error');
    }
    studentDetails() {
        if (this.studentReport.controls.className.value != '') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                content_id: this.studentReport.controls.contentName.value,
                class_id: this.studentReport.controls.className.value,
                class_content_id: this.reportData.class_content_id
            };
            this.report.getItemWiseStudentList(data).subscribe((successData) => {
                this.studentDetailsSuccess(successData);
            }, (error) => {
                this.studentDetailsFailure(error);
            });
        }
        else {
            this.missedWorkStudentNoRecord = false;
        }
    }
    studentDetailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.missedWorkStudentNoRecord = true;
            this.studentList = successData.ResponseObject;
            this.studentList.unshift({ student_id: '', student_name: 'All' });
            this.StudentQuestionStatus();
            // this.StudentQuestionList();
        }
        else {
            this.missedWorkNoRecord = false;
            this.missedWorkStudentNoRecord = false;
            this.message = 'No Records found';
            this.StudentQuestionStatus();
            // this.StudentQuestionList();
        }
    }
    studentDetailsFailure(error) {
        console.log(error, 'error');
    }
    StudentQuestionList() {
        // if (this.studentReport.controls.contentName.value != '') {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.studentReport.controls.className.value,
            // student_id: this.studentReport.controls.studentName.value,
            // student_id: '',
            type: this.studentReport.controls.submitted.value,
            content_id: this.studentReport.controls.contentName.value,
            content_format: this.selectContentFormate
        };
        this.report.getStudentQuestionList(data).subscribe((successData) => {
            this.StudentQuestionListSuccess(successData);
        }, (error) => {
            this.StudentQuestionListFailure(error);
        });
        // }else {
        //   this.missedWorkStudentNoRecord = false;
        // }
    }
    StudentQuestionListSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'valuee');
            this.missedWorkNoRecord = true;
            this.rows = successData.ResponseObject;
            // if (this.rows.length > 0) {
            //   this.hoverTitle = this.rows[0];
            //   this.showQuestion = true;
            // }
        }
        else {
            this.missedWorkNoRecord = false;
            this.message = 'No Records found';
        }
    }
    StudentQuestionListFailure(error) {
        console.log(error, 'error');
    }
    StudentQuestionStatus() {
        // if (this.studentReport.controls.contentName.value != '') {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.studentReport.controls.className.value,
            student_id: this.studentReport.controls.studentName.value,
            type: this.studentReport.controls.submitted.value,
            content_id: this.studentReport.controls.contentName.value,
            content_format: this.selectContentFormate,
            class_content_id: this.reportData.class_content_id
        };
        this.report.getStudentQuestionStatus(data).subscribe((successData) => {
            this.StudentQuestionStatusSuccess(successData);
        }, (error) => {
            this.StudentQuestionStatusFailure(error);
        });
        // }else {
        //   this.missedWorkStudentNoRecord = false;
        // }
    }
    StudentQuestionStatusSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'valuee');
            this.sectionIndex = 1;
            this.showQuestion = true;
            this.missedWorkNoRecord = true;
            this.sectionList = [];
            this.questionStatus = successData.ResponseObject;
            this.questionStatusAlt = JSON.parse(JSON.stringify(successData.ResponseObject));
            successData.ResponseObject[0].question.forEach((item) => {
                this.sectionList.push({ heading: item.heading });
            });
            this.hoverTitle = this.questionStatus[0].question[this.sectionIndex - 1]?.section[0];
        }
        else {
            this.missedWorkNoRecord = false;
            this.message = 'No Records found';
        }
        this.functionCalled = true;
    }
    StudentQuestionStatusFailure(error) {
        console.log(error, 'error');
    }
    // splitTitleCode(value , id){
    //   let el = document.getElementById(id);
    //   console.log(el ,'el')
    //   let endNum = value.length - 4;
    //   return value.slice(3 ,endNum);
    // }
    clickEvent(data) {
        console.log(data, 'data');
        this.hoverTitle = data;
        this.showQuestion = true;
        // setTimeout( () =>{
        // document.getElementById('myDiv').click();
        // } , 1000);
    }
    studentCorrectionDetail(data) {
        console.log(data, 'data');
        this.studentName = data;
        this.contentId = data.content_id;
        this.contentFormat = data.content_format;
        this.classId = data.class_id;
        this.studentId = data.student_id;
        this.studentContentId = data.student_content_id;
        this.is_test = data?.is_test ?? '0';
        this.modalRef = this.modalService.open(this.viewStudentDetails, { size: 'xl', windowClass: 'answer-sheet' });
    }
    changeSec(event) {
        if (event.target.value != 'all') {
            this.questionStatus = JSON.parse(JSON.stringify(this.questionStatusAlt));
            this.sectionIndex = parseInt(event.target.value);
            this.hoverTitle = this.questionStatus[0]?.question[this.sectionIndex - 1]?.section[0];
        }
        else {
            this.sectionIndex = 'all';
            this.questionStatus.forEach((item) => {
                item.question = [{ section: [] }];
            });
            this.questionStatusAlt.forEach((data, i) => {
                data.question.forEach((item, j) => {
                    item.section.forEach((val) => {
                        this.questionStatus[i].question[0].section.push(val);
                    });
                });
            });
            this.hoverTitle = this.questionStatus[0]?.question[0]?.section[0];
        }
    }
    static { this.ɵfac = function ItemsReportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ItemsReportComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ReportService), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.DomSanitizer), i0.ɵɵdirectiveInject(i5.DatePipe), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i7.CommonDataService), i0.ɵɵdirectiveInject(i8.NgbModal), i0.ɵɵdirectiveInject(i9.ToastrService), i0.ɵɵdirectiveInject(i10.TeacherService), i0.ɵɵdirectiveInject(i11.ValidationService), i0.ɵɵdirectiveInject(i12.FormBuilder), i0.ɵɵdirectiveInject(i13.CommonService), i0.ɵɵdirectiveInject(i14.ContentdetailService), i0.ɵɵdirectiveInject(i15.CreatorService), i0.ɵɵdirectiveInject(i16.NavService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ItemsReportComponent, selectors: [["app-items-report"]], viewQuery: function ItemsReportComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(AnswerSheetComponent, 5);
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(DatatableComponent, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.answerCom = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContentnow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewStudentDetails = _t.first);
        } }, inputs: { studentView: "studentView", showContent: "showContent", timeView: "timeView" }, decls: 32, vars: 5, consts: [["viewStudentDetails", ""], [1, "container-fluid", "missed-work-report"], [3, "formGroup"], [1, "row", "mt-1"], [1, "form-group", "mb-0", "col-md-3", "px-0"], [1, "col-xl-12", "col-md-12"], [2, "visibility", "hidden"], ["type", "text", "placeholder", "Class Name", "readonly", "", 1, "form-control", 3, "value"], ["bindLabel", "student_name", "bindValue", "student_id", "formControlName", "studentName", "placeholder", "Student List", 3, "change", "items"], [1, "col-md-6", "d-flex", "justify-content-end"], [1, "p-2"], [1, "ml-3"], [1, "fa", "fa-square", "never-bg", "p-1"], [1, "fa", "fa-square", "in-correct-bg", "p-1"], [1, "fa", "fa-square", "completed-color-bg", "p-1"], ["class", "row mt-3", 4, "ngIf"], ["class", "row d-flex justify-content-center list-card mt-3", 4, "ngIf"], [1, "row", "mt-3"], [1, "col-12", "card", "p-3"], [1, "row", "d-flex", "justify-content-center"], ["class", "col-12 my-3", 4, "ngIf"], ["class", "col-md-12 d-flex justify-content-end", 4, "ngIf"], [1, "col-12", "mt-2", "table-responsive-ipad"], ["class", "table table-bordered", 4, "ngIf"], [1, "col-12", "my-3"], [1, "col-12", "py-3", "form-span"], [1, "letter"], [3, "innerHTML"], [1, "innerhtml-margin-clear", "mb-0", 3, "innerHTML"], [1, "col-md-12", "d-flex", "justify-content-end"], [1, "form-span", 3, "change", "value"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "table", "table-bordered"], ["title", "Student Name", 1, "cursor"], ["class", "cursor color-primary", "data-html", "true", "placement", "top", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["data-html", "true", "placement", "top", 1, "cursor", "color-primary", 3, "click"], [1, "cursor", "table-name", 3, "click"], ["class", "never", 4, "ngIf"], ["class", "in-correct", 4, "ngIf"], ["class", "completed-color", 4, "ngIf"], [1, "never"], [1, "in-correct"], [1, "completed-color"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-3"], [1, "col-12"], [1, "nodataList"], [1, "modal-header", "align-items-center"], [1, "modal-title", "font-weight-bold"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body"], [3, "answerShow", "contentId", "contentFormat", "is_test", "classId", "studentReportId", "backStatus", "studentContentId"]], template: function ItemsReportComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section", 1)(1, "form", 2)(2, "div", 3)(3, "div", 4)(4, "label", 5)(5, "span", 6);
            i0.ɵɵtext(6, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(7, " Class Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵelement(9, "input", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 4)(11, "label", 5)(12, "span", 6);
            i0.ɵɵtext(13, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(14, " Student List");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 5)(16, "ng-select", 8);
            i0.ɵɵlistener("change", function ItemsReportComponent_Template_ng_select_change_16_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.StudentQuestionStatus()); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(17, "div", 9)(18, "p", 10)(19, "small", 11);
            i0.ɵɵelement(20, "i", 12);
            i0.ɵɵtext(21, " - Not Started");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "small", 11);
            i0.ɵɵelement(23, "i", 13);
            i0.ɵɵtext(24, " - In Correct");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "small", 11);
            i0.ɵɵelement(26, "i", 14);
            i0.ɵɵtext(27, " - Correct");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(28, ItemsReportComponent_div_28_Template, 8, 4, "div", 15)(29, ItemsReportComponent_div_29_Template, 4, 1, "div", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(30, ItemsReportComponent_ng_template_30_Template, 6, 9, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.studentReport);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("value", ctx.reportData.class_name);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("items", ctx.studentList);
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("ngIf", ctx.missedWorkNoRecord && ctx.functionCalled);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.missedWorkNoRecord);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i12.ɵNgNoValidate, i12.NgSelectOption, i12.ɵNgSelectMultipleOption, i12.NgControlStatus, i12.NgControlStatusGroup, i12.FormGroupDirective, i12.FormControlName, i17.NgSelectComponent, i18.AnswerSheetComponent, i19.SanitizeHtmlPipe], styles: ["table[_ngcontent-%COMP%]{\n  margin-bottom: 0 !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ItemsReportComponent, [{
        type: Component,
        args: [{ selector: 'app-items-report', template: "<section class=\" container-fluid missed-work-report\">\n    <form [formGroup]=\"studentReport\">\n        <div class=\"row mt-1\">\n            <div class=\"form-group mb-0 col-md-3 px-0\">\n                <label class=\"col-xl-12 col-md-12\"><span style=\"visibility: hidden\">*</span>\n                    Class Name</label>\n                <div class=\"col-xl-12 col-md-12\">\n                    <input type=\"text\" placeholder=\"Class Name\" readonly class=\"form-control\" [value]=\"reportData.class_name\">\n                </div>\n            </div>\n            <div class=\"form-group mb-0 col-md-3 px-0\">\n                <label class=\"col-xl-12 col-md-12\"><span style=\"visibility: hidden\">*</span>\n                    Student List</label>\n                <div class=\"col-xl-12 col-md-12\">\n                    <ng-select (change)=\"StudentQuestionStatus()\"\n                                [items]=\"studentList\"\n                               bindLabel=\"student_name\"\n                               bindValue=\"student_id\"\n                               formControlName=\"studentName\"\n                               placeholder=\"Student List\">\n                    </ng-select>\n                </div>\n            </div>\n            <div class=\"col-md-6 d-flex justify-content-end\">\n                <p class=\"p-2\">\n                    <small class=\"ml-3\"><i class=\"fa fa-square never-bg p-1\"></i> - Not Started</small>\n                    <small class=\"ml-3\"><i class=\"fa fa-square in-correct-bg p-1\"></i> - In Correct</small>\n                    <small class=\"ml-3\"><i class=\"fa fa-square completed-color-bg p-1\"></i> - Correct</small>\n                    <!--                        <small class=\"ml-3\"><i class=\"fa fa-square not-applicable p-1\"></i> - N/A</small>-->\n                </p>\n            </div>\n<!--            <div class=\"form-group col-6 col-md-2\">-->\n<!--                <label class=\"col-xl-12 col-md-12\">Status</label>-->\n<!--                <select class=\"custom-select col-md-12\" formControlName=\"submitted\">-->\n<!--                    <option value=\"\">All</option>-->\n<!--                    <option value=\"1\" >Not Started</option>-->\n<!--                    <option value=\"2\" >In Progress</option>-->\n<!--                    <option value=\"3\" >Completed</option>-->\n<!--                </select>-->\n<!--            </div>-->\n        </div>\n    </form>\n<!--    <div class=\"row\" *ngIf=\"!functionCalled\" id=\"custom-pdf-loader\" style=\"height: 50vh;\">-->\n<!--        <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">-->\n<!--    </div>-->\n    <div *ngIf=\"missedWorkNoRecord && functionCalled\" class=\"row mt-3\">\n        <div class=\"col-12 card p-3\">\n<!--            <div class=\"row\">-->\n<!--                <div class=\"col-12 d-flex justify-content-end\">-->\n<!--                    -->\n<!--                </div>-->\n<!--            </div>-->\n            <div class=\"row d-flex justify-content-center\">\n                <div *ngIf=\"showQuestion && hoverTitle\" class=\"col-12 my-3\">\n                    <div class=\"col-12 py-3 form-span\">\n                        <h3 class=\"letter\">Question : <span [innerHTML]=\"hoverTitle.sub_question_no\"></span></h3>\n                        <hr>\n                        <p [innerHTML]=\"hoverTitle.question | sanitizeHtml\" class=\"innerhtml-margin-clear mb-0\"></p>\n                    </div>\n                </div>\n                <div *ngIf=\"sectionList.length > 1\" class=\"col-md-12 d-flex justify-content-end\">\n                    <select (change)=\"changeSec($event)\" [value]=\"sectionIndex\" class=\"form-span\">\n                        <option value=\"all\">All Section</option>\n                        <option *ngFor=\"let item of sectionList; let i = index\" value=\"{{i + 1}}\">{{item.heading}}</option>\n                    </select>\n                </div>\n                <div class=\"col-12 mt-2 table-responsive-ipad\">\n                    <table *ngIf=\"sectionIndex != 'all'\" class=\"table table-bordered\">\n                        <thead>\n                            <th class=\"cursor\" title=\"Student Name\">Student Name</th>\n                            <th (click)=\"clickEvent(item)\" *ngFor=\"let item of questionStatus[0]?.question[sectionIndex - 1]?.section\" class=\"cursor color-primary\" data-html=\"true\" placement=\"top\">{{item.sub_question_no}}</th>\n                        </thead>\n                        <tr *ngFor=\"let table of questionStatus; let i=index;\">\n                            <td class=\"cursor table-name\" (click)=\"studentCorrectionDetail(table)\"> {{table.student_name}}</td>\n                            <td *ngFor=\"let item of table.question[sectionIndex - 1]?.section\">\n<!--                                <span class=\"not-applicable cursor\" *ngIf=\"item.status == '0' || item.status == ''\"></span>-->\n                                <span class=\"never\" *ngIf=\"item.status == '1'\"></span>\n                                <span class=\"in-correct\" *ngIf=\"item.status == '2'\"></span>\n                                <span class=\"completed-color\" *ngIf=\"item.status == '3'\"></span>\n                            </td>\n                        </tr>\n                    </table>\n                    <table *ngIf=\"sectionIndex == 'all'\" class=\"table table-bordered\">\n                        <thead>\n                        <th class=\"cursor\" title=\"Student Name\">Student Name</th>\n                        <th (click)=\"clickEvent(item)\" *ngFor=\"let item of questionStatus[0]?.question[0]?.section\" class=\"cursor color-primary\" data-html=\"true\" placement=\"top\">{{item.sub_question_no}}</th>\n                        </thead>\n                        <tr *ngFor=\"let table of questionStatus; let i=index;\">\n                            <td (click)=\"studentCorrectionDetail(table)\" class=\"cursor table-name\"> {{table.student_name}}</td>\n                            <td *ngFor=\"let item of table.question[0]?.section\">\n                                <!--                                <span class=\"not-applicable cursor\" *ngIf=\"item.status == '0' || item.status == ''\"></span>-->\n                                <span *ngIf=\"item.status == '1'\" class=\"never\"></span>\n                                <span *ngIf=\"item.status == '2'\" class=\"in-correct\"></span>\n                                <span *ngIf=\"item.status == '3'\" class=\"completed-color\"></span>\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-center list-card mt-3\" *ngIf=\"!missedWorkNoRecord\">\n        <div class=\"col-12\">\n            <button class=\"nodataList\">{{message}}</button>\n        </div>\n    </div>\n</section>\n<ng-template #viewStudentDetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title font-weight-bold\">{{studentName.student_name}} - Report</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid Ends-->\n        <app-answer-sheet [answerShow]=\"true\" [contentId]=\"contentId\" [contentFormat]=\"contentFormat\"\n                          [is_test]=\"is_test\"\n                          [classId]=\"classId\" [studentReportId]=\"studentId\" [backStatus]=\"false\" [studentContentId]=\"studentContentId\"></app-answer-sheet>\n    </div>\n</ng-template>\n<!--<ng-template #tipContent><p [innerHTML]=\"hoverTitle | sanitizeHtml\"></p></ng-template>-->\n\n\n", styles: ["table{\n  margin-bottom: 0 !important;\n}"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.ReportService }, { type: i3.ConfigurationService }, { type: i4.DomSanitizer }, { type: i5.DatePipe }, { type: i6.Router }, { type: i7.CommonDataService }, { type: i8.NgbModal }, { type: i9.ToastrService }, { type: i10.TeacherService }, { type: i11.ValidationService }, { type: i12.FormBuilder }, { type: i13.CommonService }, { type: i14.ContentdetailService }, { type: i15.CreatorService }, { type: i16.NavService }], { studentView: [{
            type: Input
        }], showContent: [{
            type: Input
        }], timeView: [{
            type: Input
        }], answerCom: [{
            type: ViewChild,
            args: [AnswerSheetComponent, { static: false }]
        }], modalContentnow: [{
            type: ViewChild,
            args: ['contentnow']
        }], table: [{
            type: ViewChild,
            args: [DatatableComponent]
        }], viewStudentDetails: [{
            type: ViewChild,
            args: ['viewStudentDetails']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ItemsReportComponent, { className: "ItemsReportComponent" }); })();
//# sourceMappingURL=items-report.component.js.map