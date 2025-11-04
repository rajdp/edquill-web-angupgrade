import { Component, Input, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/report.service";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "../../../shared/service/contentdetail.service";
import * as i5 from "ngx-toastr";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
import * as i8 from "../../auth/tiny-mice/tiny-mice.component";
import * as i9 from "@swimlane/ngx-datatable";
import * as i10 from "../answer-sheet/answer-sheet.component";
import * as i11 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["viewStudentDetails"];
const _c1 = ["notStarted"];
const _c2 = ["contentnow"];
const _c3 = ["writeNoteOpen"];
const _c4 = () => ["1", "2", "3", "5", "6,", "7"];
function StudentReportComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 44)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r2 = ctx.row;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r2.content_name);
} }
function StudentReportComponent_ngx_datatable_column_53_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r3 = ctx.row;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r3.content_type == "1" ? "Resource" : row_r3.content_type == "2" ? "Assignment" : "Assessment");
} }
function StudentReportComponent_ngx_datatable_column_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-datatable-column", 45);
    i0.ɵɵtemplate(1, StudentReportComponent_ngx_datatable_column_53_ng_template_1_Template, 3, 1, "ng-template", 37);
    i0.ɵɵelementEnd();
} }
function StudentReportComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r4 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate((row_r4 == null ? null : row_r4.start_date) != "0000-00-00" ? i0.ɵɵpipeBind1(2, 1, row_r4 == null ? null : row_r4.start_date) : "-");
} }
function StudentReportComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "customDateFormat");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r5 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r5.end_date != "0000-00-00" ? i0.ɵɵpipeBind1(2, 1, row_r5.end_date) : "-");
} }
function StudentReportComponent_ngx_datatable_column_58_ng_template_1_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 48);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r6 = i0.ɵɵnextContext().row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r6.student_score != "" ? row_r6.student_score : "0");
} }
function StudentReportComponent_ngx_datatable_column_58_ng_template_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 48);
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function StudentReportComponent_ngx_datatable_column_58_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, StudentReportComponent_ngx_datatable_column_58_ng_template_1_span_0_Template, 2, 1, "span", 47);
    i0.ɵɵtext(1, "/");
    i0.ɵɵelementStart(2, "span", 48);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, StudentReportComponent_ngx_datatable_column_58_ng_template_1_span_4_Template, 2, 0, "span", 47);
} if (rf & 2) {
    const row_r6 = ctx.row;
    i0.ɵɵproperty("ngIf", row_r6.content_type != "1");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(row_r6.total_score);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r6.content_type == "0");
} }
function StudentReportComponent_ngx_datatable_column_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-datatable-column", 46);
    i0.ɵɵtemplate(1, StudentReportComponent_ngx_datatable_column_58_ng_template_1_Template, 5, 3, "ng-template", 37);
    i0.ɵɵelementEnd();
} }
function StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 57);
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 58);
    i0.ɵɵlistener("click", function StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r7); const row_r8 = i0.ɵɵnextContext(2).row; const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.studentCorrectionDetail(row_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r8 = i0.ɵɵnextContext(2).row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r8.student_average_score);
} }
function StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 59);
    i0.ɵɵlistener("click", function StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r10); const row_r8 = i0.ɵɵnextContext(2).row; const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.studentCorrectionDetail(row_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r8 = i0.ɵɵnextContext(2).row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r8.student_average_score);
} }
function StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 60);
    i0.ɵɵlistener("click", function StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_4_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r11); const row_r8 = i0.ɵɵnextContext(2).row; const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.studentCorrectionDetail(row_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r8 = i0.ɵɵnextContext(2).row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r8.student_average_score);
} }
function StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵlistener("click", function StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r12); const row_r8 = i0.ɵɵnextContext(2).row; const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.studentNotAnswer(row_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r8 = i0.ɵɵnextContext(2).row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r8.student_average_score);
} }
function StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 62);
    i0.ɵɵlistener("click", function StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_6_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r13); const row_r8 = i0.ɵɵnextContext(2).row; const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.studentCorrectionDetail(row_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r8 = i0.ɵɵnextContext(2).row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r8.student_average_score);
} }
function StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_1_Template, 2, 0, "span", 51)(2, StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_2_Template, 2, 1, "span", 52)(3, StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_3_Template, 2, 1, "span", 53)(4, StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_4_Template, 2, 1, "span", 54)(5, StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_5_Template, 2, 1, "span", 55)(6, StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_span_6_Template, 2, 1, "span", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r8 = i0.ɵɵnextContext().row;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r8.status == "0" || row_r8.status == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r8.status == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r8.status == "2" || row_r8.status == "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r8.status == "3");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r8.status == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r8.status == "7");
} }
function StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function StudentReportComponent_ngx_datatable_column_59_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_0_Template, 7, 6, "div", 50)(1, StudentReportComponent_ngx_datatable_column_59_ng_template_1_div_1_Template, 2, 0, "div", 50);
} if (rf & 2) {
    const row_r8 = ctx.row;
    i0.ɵɵproperty("ngIf", row_r8.content_type != "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r8.content_type == "0");
} }
function StudentReportComponent_ngx_datatable_column_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-datatable-column", 49);
    i0.ɵɵtemplate(1, StudentReportComponent_ngx_datatable_column_59_ng_template_1_Template, 2, 2, "ng-template", 37);
    i0.ɵɵelementEnd();
} }
function StudentReportComponent_ng_template_61_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 66);
    i0.ɵɵlistener("click", function StudentReportComponent_ng_template_61_i_1_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r16); const row_r15 = i0.ɵɵnextContext().row; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(row_r15.status == "5" ? ctx_r8.studentNotAnswer(row_r15) : ctx_r8.studentCorrectionDetail(row_r15)); });
    i0.ɵɵelementEnd();
} }
function StudentReportComponent_ng_template_61_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 67);
    i0.ɵɵlistener("click", function StudentReportComponent_ng_template_61_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r17); const row_r15 = i0.ɵɵnextContext().row; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.notifyParent(row_r15)); });
    i0.ɵɵelementEnd();
} }
function StudentReportComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 63);
    i0.ɵɵlistener("click", function StudentReportComponent_ng_template_61_Template_i_click_0_listener() { const row_r15 = i0.ɵɵrestoreView(_r14).row; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.openNotes(ctx_r8.classData, row_r15)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(1, StudentReportComponent_ng_template_61_i_1_Template, 1, 0, "i", 64)(2, StudentReportComponent_ng_template_61_i_2_Template, 1, 0, "i", 65);
} if (rf & 2) {
    const row_r15 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(2, _c4).indexOf(row_r15.status) > -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r15.status == "4" || row_r15.status == "6");
} }
function StudentReportComponent_ng_template_62_div_6_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 89);
} }
function StudentReportComponent_ng_template_62_div_6_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 90);
} }
function StudentReportComponent_ng_template_62_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 79)(1, "div", 80)(2, "div", 81);
    i0.ɵɵtemplate(3, StudentReportComponent_ng_template_62_div_6_i_3_Template, 1, 0, "i", 82)(4, StudentReportComponent_ng_template_62_div_6_i_4_Template, 1, 0, "i", 83);
    i0.ɵɵelement(5, "span", 84);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 85)(7, "small", 86);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "customDateFormat");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 87)(11, "i", 88);
    i0.ɵɵlistener("click", function StudentReportComponent_ng_template_62_div_6_Template_i_click_11_listener() { const list_r20 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.deleteNotes(list_r20)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const list_r20 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", list_r20.notes_type == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r20.notes_type == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", list_r20.notes, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 4, list_r20.created_date));
} }
function StudentReportComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 68)(1, "h4", 69);
    i0.ɵɵtext(2, "Add Notes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 70);
    i0.ɵɵlistener("click", function StudentReportComponent_ng_template_62_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r18); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 71)(5, "div", 72);
    i0.ɵɵtemplate(6, StudentReportComponent_ng_template_62_div_6_Template, 12, 6, "div", 73);
    i0.ɵɵelementStart(7, "div", 74)(8, "app-tiny-mice", 75);
    i0.ɵɵlistener("emitEditorValue", function StudentReportComponent_ng_template_62_Template_app_tiny_mice_emitEditorValue_8_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.getEditorValue($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 76)(10, "button", 77);
    i0.ɵɵlistener("click", function StudentReportComponent_ng_template_62_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r18); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.addNotes("2")); });
    i0.ɵɵtext(11, "Send as Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 78);
    i0.ɵɵlistener("click", function StudentReportComponent_ng_template_62_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r18); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.addNotes("1")); });
    i0.ɵɵtext(13, "Add");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r8.showNotes);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editorPatchValue", false)("height", 300)("id", "addNotes")("showDropBtn", false)("showInputBtn", false);
} }
function StudentReportComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 68)(1, "h4", 91)(2, "b");
    i0.ɵɵtext(3, "Notify Contact");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 71)(5, "div", 4)(6, "h5", 92);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 93)(9, "button", 94);
    i0.ɵɵlistener("click", function StudentReportComponent_ng_template_64_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r21); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.close()); });
    i0.ɵɵtext(10, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 78);
    i0.ɵɵlistener("click", function StudentReportComponent_ng_template_64_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r21); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.confirmNotifiy()); });
    i0.ɵɵtext(12, "Confirm");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("Are You Sure want to notify ", ctx_r8.studentname[0].student_name, " contacts?");
} }
function StudentReportComponent_ng_template_66_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Assignment");
    i0.ɵɵelementEnd();
} }
function StudentReportComponent_ng_template_66_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Assessment");
    i0.ɵɵelementEnd();
} }
function StudentReportComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 68)(1, "h4", 91)(2, "b");
    i0.ɵɵtext(3, "Not Started");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(4, "div", 71)(5, "div", 4)(6, "h5", 92);
    i0.ɵɵtext(7, " Not submitted the ");
    i0.ɵɵtemplate(8, StudentReportComponent_ng_template_66_span_8_Template, 2, 0, "span", 50)(9, StudentReportComponent_ng_template_66_span_9_Template, 2, 0, "span", 50);
    i0.ɵɵtext(10, " yet.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 93)(12, "button", 95);
    i0.ɵɵlistener("click", function StudentReportComponent_ng_template_66_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r22); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.closeNotstarted()); });
    i0.ɵɵtext(13, "Ok");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r8.contentType == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r8.contentType == "3");
} }
function StudentReportComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 68)(1, "h4", 96);
    i0.ɵɵtext(2, "Student Answer Report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 70);
    i0.ɵɵlistener("click", function StudentReportComponent_ng_template_68_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r23); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 71);
    i0.ɵɵelement(5, "app-answer-sheet", 97);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("answerShow", true)("contentId", ctx_r8.contentId)("contentFormat", ctx_r8.contentFormat)("studentContentId", ctx_r8.studentContentId)("is_test", ctx_r8.is_test)("classId", ctx_r8.classData.class_id)("studentReportId", ctx_r8.studentId)("backStatus", false);
} }
export class StudentReportComponent {
    constructor(auth, report, modalService, contentDetail, toastr) {
        this.auth = auth;
        this.report = report;
        this.modalService = modalService;
        this.contentDetail = contentDetail;
        this.toastr = toastr;
        this.classData = [];
        this.studentId = '';
        this.contentData = [];
        this.contentFormatted = [];
        this.studentContentDetailsData = [];
        this.contentType = '2';
        this.contentId = '';
        this.contentFormat = '';
        this.studentContentId = '';
        this.editorValue = '';
        this.notes = '';
        this.searchContent = '';
        this.studentContentDetailsData1 = [];
        this.showNotes = [];
        this.is_test = '0';
    }
    ngOnInit() {
        console.log(this.classData, 'classData');
        this.studentDetails();
    }
    onSave() {
        this.modalRef.close('viewStudentDetails');
    }
    updateFilter(event) {
        const val = event.toLowerCase();
        const temp = this.studentContentDetailsData1.filter(function (d) {
            return d.content_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        console.log(temp, 'temp');
        this.studentContentDetailsData = temp;
    }
    openNotes(item, list) {
        item['content_id'] = list.content_id;
        item['student_id'] = list.student_id;
        item['content_type'] = list.content_type;
        console.log(item, 'item');
        console.log(list, 'list');
        this.getNotes(item);
        this.modalRef = this.modalService.open(this.writeNoteOpen, { size: 'md' });
    }
    notifyParent(data) {
        this.studentname = [data];
        this.modalRef = this.modalService.open(this.modalContentnow);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    studentNotAnswer(data) {
        this.modalRef = this.modalService.open(this.notStarted);
        this.studentname = [data];
    }
    closeNotstarted() {
        this.modalRef.close('notStarted');
    }
    studentCorrectionDetail(data) {
        console.log(data, 'data');
        this.contentId = data.content_id;
        this.contentFormat = data.content_format;
        this.studentContentId = data.student_content_id;
        this.is_test = data?.is_test ?? '0';
        this.modalRef = this.modalService.open(this.viewStudentDetails, { size: 'xl', windowClass: 'answer-sheet' });
    }
    studentContentDetails(event) {
        this.contentType = event.target.value;
        this.contentData = [];
        this.contentFormatted = [];
        this.studentDetails();
    }
    getNotes(item) {
        // this.notesData = item;
        // console.log(this.details, 'this.details');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: item.content_id,
            student_id: item.student_id,
            class_id: item.class_id,
            school_id: this.auth.getSessionData('school_id'),
        };
        this.contentDetail.notesList(data).subscribe((successData) => {
            this.notesListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_classList');
        });
    }
    notesListSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'get notes');
            this.showNotes = successData.ResponseObject;
        }
    }
    addNotes(type) {
        console.log(this.classData, 'ClassData');
        // this.notes = $('#addNotes').val();
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.classData.content_id,
            content_type: this.classData.content_type,
            student_id: this.studentId,
            class_id: this.classData.class_id,
            notes: this.notes,
            type,
            school_id: this.auth.getSessionData('school_id'),
        };
        this.contentDetail.notesAdd(data).subscribe((successData) => {
            this.addNotesSuccess(successData, data);
        }, (error) => {
            console.error(error, 'error_classList');
        });
    }
    addNotesSuccess(successData, data) {
        if (successData.IsSuccess) {
            if (data.type == '2') {
                this.toastr.success('Mail Sent Successfully');
            }
            this.editorValue != '' ? this.editorValue.setContent('') : '';
            this.notes = '';
            this.getNotes(this.classData);
            // $('#addNotes').val('');
            this.notes = '';
            // this.showNotes = successData.ResponseObject;
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    deleteNotes(item) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.classData.content_id,
            student_id: this.studentId,
            class_id: this.classData.class_id,
            school_id: this.auth.getSessionData('school_id'),
            id: item.id
        };
        this.contentDetail.notesDelete(data).subscribe((successData) => {
            this.deleteNotesSuccess(successData);
        }, (error) => {
            console.error(error, 'error_classList');
        });
    }
    deleteNotesSuccess(successData) {
        if (successData.IsSuccess) {
            this.getNotes(this.classData);
        }
    }
    getEditorValue(event) {
        this.editorValue = event.editor;
        this.notes = event.content;
    }
    studentDetails() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            teacher_id: '0',
            class_id: this.classData.class_id,
            content_type: this.contentType,
            content_id: this.contentData,
            date_filter: '2',
            from_date: null,
            to_date: null
        };
        this.report.getPerformanceContent(data).subscribe((successData) => {
            this.studentContentDetailsSuccess(successData);
        }, (error) => {
            console.error(error, 'StudentReportClass');
        });
    }
    studentContentDetailsSuccess(successData) {
        console.log(successData, 'successData');
        const selected = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.contentData = selected.map(item => item.content_id);
            this.contentFormatted = selected.map(item => item.content_format);
            this.studentReportDetails();
        }
        else {
            this.studentContentDetailsData = [];
            this.studentContentDetailsData1 = [];
            this.contentData = [];
            this.contentFormatted = [];
        }
    }
    studentReportDetails() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            teacher_id: '0',
            content_type: this.contentType,
            class_id: this.classData.class_id,
            student_id: this.studentId,
            type: '',
            performance: '',
            content_id: this.contentData,
            content_format: this.contentFormatted
        };
        this.report.getMissedWorkReport(data).subscribe((successData) => {
            this.studentReportDetailsSuccess(successData);
        }, (error) => {
            console.error(error, 'studentReprtError');
        });
    }
    studentReportDetailsSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.studentContentDetailsData = successData.ResponseObject?.data[0].content;
            this.studentContentDetailsData1 = successData.ResponseObject?.data[0].content;
            console.log(this.studentContentDetailsData, 'studentContentDetailsData');
            // for (let i = 0; i < this.rows.length; i++) {
            //   if (this.rows[i].content == ''){
            //   }else {
            //     this.contentDetailsData = this.rows[i].content;
            //   }
            // }
            // this.totalrecords = successData.ResponseObject?.data[0].count;
        }
        else {
            this.studentContentDetailsData = [];
            this.studentContentDetailsData1 = [];
            // this.contentDetailsData = [];
            // this.newrows = [];
            // console.log(this.contentDetailsData, 'this.message');
        }
    }
    //
    // studentReportDetailsFailure(error) {
    //   console.log(error, 'error');
    // }
    confirmNotifiy() {
        let notifyStudent = [];
        this.studentname.forEach((items) => {
            notifyStudent.push({
                class_id: items.class_id,
                content_id: items.content_id,
                student_id: items.student_id,
                student_content_id: items.student_content_id
            });
        });
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            notify: notifyStudent
        };
        console.log(data, 'dadass');
        this.contentDetail.notifiyParent(data).subscribe((successData) => {
            this.teacherNotifyParentSuccess(successData);
        }, (error) => {
            console.error(error, 'notify-parent');
        });
    }
    teacherNotifyParentSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData, 'response');
            this.toastr.success(successData.ResponseObject);
            this.close();
            this.studentReportDetails();
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    close() {
        this.modalRef.close(this.modalContentnow);
        this.editorValue != '' ? this.editorValue.setContent('') : '';
        this.notes = '';
        // this.notes = $('#addNotes').val('');
    }
    getDismissReason(reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    static { this.ɵfac = function StudentReportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentReportComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ReportService), i0.ɵɵdirectiveInject(i3.NgbModal), i0.ɵɵdirectiveInject(i4.ContentdetailService), i0.ɵɵdirectiveInject(i5.ToastrService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentReportComponent, selectors: [["app-student-report"]], viewQuery: function StudentReportComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewStudentDetails = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.notStarted = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContentnow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.writeNoteOpen = _t.first);
        } }, inputs: { classData: "classData", studentId: "studentId" }, decls: 70, vars: 12, consts: [["writeNoteOpen", ""], ["contentnow", ""], ["notStarted", ""], ["viewStudentDetails", ""], [1, "container-fluid"], [1, "row"], [1, "col-12", "d-flex", "flex-rows", "align-items-center", "justify-content-between"], [1, "form-group", "col-3", "col-md-3", "pl-0", "mb-0"], [1, "col-xl-12", "col-md-12", "pl-0", "font-weight-bold", 2, "font-size", "16px"], [1, "custom-select", "col-md-12", 3, "ngModelChange", "change", "ngModel"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "col-3", "col-md-3", "pr-0", "form-group"], [1, "col-xl-12", "col-md-12", "pl-0", "font-weight-bold", 2, "visibility", "hidden"], [1, "pull-right"], [1, "input-group"], ["type", "text", "size", "50", "placeholder", "Search Content", 1, "form-control", 2, "height", "40px", 3, "ngModelChange", "input", "ngModel"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary", 2, "padding", "6px 12px 6px 12px"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "col-12", "my-2", "py-2"], [1, "row", "align-items-center"], [1, "col-4"], [1, "col-8", "d-flex", "justify-content-end", "align-items-center"], [1, "px-3", "mb-0"], [1, "ml-3"], [1, "fa", "fa-square", "yet-to-start-color-bg", "p-1"], [1, "fa", "fa-square", "in-progress-color-bg", "p-1"], [1, "fa", "fa-square", "completed-color-bg", "p-1"], [1, "fa", "fa-square", "pending-color-bg", "p-1"], [1, "fa", "fa-square", "over-due-bg", "p-1"], [1, "fa", "fa-square", "never-bg", "p-1"], [1, "col-12"], [1, "bootstrap", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV"], ["name", "Content Name"], ["ngx-datatable-cell-template", ""], ["name", "Content Type", 4, "ngIf"], ["name", "Start Date"], ["name", "End Date"], ["name", "Score", 4, "ngIf"], ["name", "Percentage", 4, "ngIf"], ["name", "Action"], [1, "color-primary", "cursor"], ["name", "Content Type"], ["name", "Score"], ["style", "border: none; padding: 2px 8px", 4, "ngIf"], [2, "border", "none", "padding", "2px 8px"], ["name", "Percentage"], [4, "ngIf"], ["class", "cursor", 4, "ngIf"], ["class", "yet-to-start-color cursor", 3, "click", 4, "ngIf"], ["class", "in-progress-color cursor", 3, "click", 4, "ngIf"], ["class", "completed-color cursor", 3, "click", 4, "ngIf"], ["class", "never cursor", 3, "click", 4, "ngIf"], ["class", "pending-color cursor", 3, "click", 4, "ngIf"], [1, "cursor"], [1, "yet-to-start-color", "cursor", 3, "click"], [1, "in-progress-color", "cursor", 3, "click"], [1, "completed-color", "cursor", 3, "click"], [1, "never", "cursor", 3, "click"], [1, "pending-color", "cursor", 3, "click"], ["aria-hidden", "true", "title", "Add Notes", 1, "color-primary", "cursor", "fa", "fa-newspaper-o", "mr-2", 2, "font-size", "16px", 3, "click"], ["style", "font-size: 16px", "class", "color-primary fa fa-eye cursor mr-2", "title", "View Content", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["style", "font-size: 16px", "class", "color-primary fa fa-bell cursor", "title", "Notify Contact", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["title", "View Content", "aria-hidden", "true", 1, "color-primary", "fa", "fa-eye", "cursor", "mr-2", 2, "font-size", "16px", 3, "click"], ["title", "Notify Contact", "aria-hidden", "true", 1, "color-primary", "fa", "fa-bell", "cursor", 2, "font-size", "16px", 3, "click"], [1, "modal-header"], [1, "modal-title", "text-center"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body"], [1, "row", "px-3", "d-flex", "justify-content-center"], ["class", "col-12 mt-2", 4, "ngFor", "ngForOf"], [1, "col-12", "px-0", "mt-2"], [3, "emitEditorValue", "editorPatchValue", "height", "id", "showDropBtn", "showInputBtn"], [1, "col-12", "px-0", "text-right", "mt-2"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "col-12", "mt-2"], [1, "row", "border", "border-secondary", "rounded"], [1, "col-8", "d-flex", 2, "word-wrap", "break-word"], ["class", "fa fa-envelope-square align-self-center mr-2 color-primary", 4, "ngIf"], ["class", "fa fa-bookmark align-self-center mr-2 color-secondary", 4, "ngIf"], [1, "mb-0", "mt-3", 3, "innerHTML"], [1, "col-3", "px-0", "d-flex", "justify-content-end", "align-self-center"], [1, "mb-0"], [1, "col-1", "d-flex", "justify-content-end", "align-self-center"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-1x", "text-danger", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-envelope-square", "align-self-center", "mr-2", "color-primary"], [1, "fa", "fa-bookmark", "align-self-center", "mr-2", "color-secondary"], [1, "modal-title", "col-12", "text-center"], [1, "text-center"], [1, "modal-footer"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "modal-title"], [3, "answerShow", "contentId", "contentFormat", "studentContentId", "is_test", "classId", "studentReportId", "backStatus"]], template: function StudentReportComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "label", 8);
            i0.ɵɵtext(5, "Content Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "select", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function StudentReportComponent_Template_select_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.contentType, $event) || (ctx.contentType = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("change", function StudentReportComponent_Template_select_change_6_listener($event) { i0.ɵɵrestoreView(_r1); ctx.searchContent = ""; return i0.ɵɵresetView(ctx.studentContentDetails($event)); });
            i0.ɵɵelementStart(7, "option", 10);
            i0.ɵɵtext(8, "All");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "option", 11);
            i0.ɵɵtext(10, "Resource");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "option", 12);
            i0.ɵɵtext(12, "Assignment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "option", 13);
            i0.ɵɵtext(14, "Assessment");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(15, "div", 14)(16, "label", 15);
            i0.ɵɵtext(17, "Content Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 16)(19, "div", 17)(20, "input", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function StudentReportComponent_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchContent, $event) || (ctx.searchContent = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("input", function StudentReportComponent_Template_input_input_20_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateFilter(ctx.searchContent)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 19)(22, "button", 20);
            i0.ɵɵelement(23, "i", 21);
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(24, "div", 22)(25, "div", 23)(26, "div", 24)(27, "label", 8);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "div", 25)(30, "p", 26)(31, "small", 27);
            i0.ɵɵelement(32, "i", 28);
            i0.ɵɵtext(33, " - UpComing");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "small", 27);
            i0.ɵɵelement(35, "i", 29);
            i0.ɵɵtext(36, " - In Progress");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "small", 27);
            i0.ɵɵelement(38, "i", 30);
            i0.ɵɵtext(39, " - Completed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "small", 27);
            i0.ɵɵelement(41, "i", 31);
            i0.ɵɵtext(42, " - Pending");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "small", 27);
            i0.ɵɵelement(44, "i", 32);
            i0.ɵɵtext(45, " - Overdue");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "small", 27);
            i0.ɵɵelement(47, "i", 33);
            i0.ɵɵtext(48, " - Not Started");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(49, "div", 34)(50, "ngx-datatable", 35)(51, "ngx-datatable-column", 36);
            i0.ɵɵtemplate(52, StudentReportComponent_ng_template_52_Template, 3, 1, "ng-template", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(53, StudentReportComponent_ngx_datatable_column_53_Template, 2, 0, "ngx-datatable-column", 38);
            i0.ɵɵelementStart(54, "ngx-datatable-column", 39);
            i0.ɵɵtemplate(55, StudentReportComponent_ng_template_55_Template, 3, 3, "ng-template", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "ngx-datatable-column", 40);
            i0.ɵɵtemplate(57, StudentReportComponent_ng_template_57_Template, 3, 3, "ng-template", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(58, StudentReportComponent_ngx_datatable_column_58_Template, 2, 0, "ngx-datatable-column", 41)(59, StudentReportComponent_ngx_datatable_column_59_Template, 2, 0, "ngx-datatable-column", 42);
            i0.ɵɵelementStart(60, "ngx-datatable-column", 43);
            i0.ɵɵtemplate(61, StudentReportComponent_ng_template_61_Template, 3, 3, "ng-template", 37);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(62, StudentReportComponent_ng_template_62_Template, 14, 6, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(64, StudentReportComponent_ng_template_64_Template, 13, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(66, StudentReportComponent_ng_template_66_Template, 14, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(68, StudentReportComponent_ng_template_68_Template, 6, 8, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.contentType);
            i0.ɵɵadvance(14);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchContent);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("", ctx.contentType == "2" ? "Assignment" : ctx.contentType == "2" ? "Assessment" : ctx.contentType == "1" ? "Resource" : "All", " Type");
            i0.ɵɵadvance(22);
            i0.ɵɵproperty("rows", ctx.studentContentDetailsData)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("scrollbarV", false);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.contentType == "0");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.contentType != "1");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.contentType != "1");
        } }, dependencies: [i6.NgForOf, i6.NgIf, i7.NgSelectOption, i7.ɵNgSelectMultipleOption, i7.DefaultValueAccessor, i7.SelectControlValueAccessor, i7.NgControlStatus, i7.NgModel, i8.TinyMiceComponent, i9.DatatableComponent, i9.DataTableColumnDirective, i9.DataTableColumnCellDirective, i10.AnswerSheetComponent, i11.CustomDateFormatPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentReportComponent, [{
        type: Component,
        args: [{ selector: 'app-student-report', template: "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12 d-flex flex-rows align-items-center justify-content-between\">\n            <div class=\"form-group col-3 col-md-3 pl-0 mb-0\">\n                <label class=\"col-xl-12 col-md-12 pl-0 font-weight-bold\" style=\"font-size: 16px\">Content Type</label>\n                <select class=\"custom-select col-md-12\" [(ngModel)]=\"contentType\"  (change)=\"searchContent = '';studentContentDetails($event)\">\n                    <option value=\"0\">All</option>\n                    <option value=\"1\">Resource</option>\n                    <option value=\"2\">Assignment</option>\n                    <option value=\"3\">Assessment</option>\n                </select>\n            </div>\n\n            <div class=\"col-3 col-md-3 pr-0 form-group\">\n                <label class=\"col-xl-12 col-md-12 pl-0 font-weight-bold\" style=\"visibility: hidden\">Content Type</label>\n                <div class=\"pull-right\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" style=\"height:40px\" size=\"50\" placeholder=\"Search Content\" [(ngModel)]=\"searchContent\" (input)=\"updateFilter(searchContent)\">\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-primary\" style=\"padding: 6px 12px 6px 12px\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-12 my-2 py-2\">\n            <div class=\"row align-items-center\">\n                <div class=\"col-4\">\n                    <label style=\"font-size: 16px\" class=\"col-xl-12 col-md-12 pl-0 font-weight-bold\">{{contentType == '2' ? 'Assignment' : contentType == '2' ? 'Assessment' : contentType == '1' ? 'Resource' : 'All'}} Type</label>\n                </div>\n                <div class=\"col-8 d-flex justify-content-end align-items-center\">\n                    <p class=\"px-3 mb-0\">\n                        <small class=\"ml-3\"><i class=\"fa fa-square yet-to-start-color-bg p-1\"></i> - UpComing</small>\n                        <small class=\"ml-3\"><i class=\"fa fa-square in-progress-color-bg p-1\"></i> - In Progress</small>\n                        <small class=\"ml-3\"><i class=\"fa fa-square completed-color-bg p-1\"></i> - Completed</small>\n                        <small class=\"ml-3\"><i class=\"fa fa-square pending-color-bg p-1\"></i> - Pending</small>\n                        <small class=\"ml-3\"><i class=\"fa fa-square over-due-bg p-1\"></i> - Overdue</small>\n                        <small class=\"ml-3\"><i class=\"fa fa-square never-bg p-1\"></i> - Not Started</small>\n                    </p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-12\">\n            <ngx-datatable\n                    class=\"bootstrap\"\n                    [rows]=\"studentContentDetailsData\"\n                    [columnMode]=\"'force'\"\n                    [headerHeight]=\"50\"\n                    [footerHeight]=\"50\"\n                    [rowHeight]=\"50\"\n                    [scrollbarV]=\"false\"\n            >\n                <ngx-datatable-column name=\"Content Name\">\n                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                        <span class=\"color-primary cursor\"><strong>{{row.content_name}}</strong></span>\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Content Type\" *ngIf=\"contentType == '0'\">\n                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                        <span><strong>{{row.content_type == '1' ? 'Resource' : row.content_type == '2' ? 'Assignment' : 'Assessment'}}</strong></span>\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Start Date\">\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <span>{{row?.start_date != '0000-00-00' ? (row?.start_date | customDateFormat) : '-'}}</span>\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"End Date\">\n                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                        <span>{{row.end_date != '0000-00-00' ? (row.end_date | customDateFormat) : '-'}}</span>\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Score\" *ngIf=\"contentType != '1'\">\n                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                        <span *ngIf=\"row.content_type != '1'\" style=\"border: none; padding: 2px 8px\">{{row.student_score != '' ? row.student_score : '0'}}</span>/<span style=\"border: none; padding: 2px 8px\">{{row.total_score}}</span>\n                        <span *ngIf=\"row.content_type == '0'\" style=\"border: none; padding: 2px 8px\">-</span>\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Percentage\" *ngIf=\"contentType != '1'\">\n                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                        <div *ngIf=\"row.content_type != '1'\">\n                            <span *ngIf=\"row.status == '0' || row.status == ''\" class=\"cursor\">-</span>\n                            <span (click)=\"studentCorrectionDetail(row)\" *ngIf=\"row.status == '1'\" class=\"yet-to-start-color cursor\">{{row.student_average_score}}</span>\n                            <span (click)=\"studentCorrectionDetail(row)\" *ngIf=\"row.status == '2' || row.status == '6'\" class=\"in-progress-color cursor\">{{row.student_average_score}}</span>\n                            <span (click)=\"studentCorrectionDetail(row)\" *ngIf=\"row.status == '3'\" class=\"completed-color cursor\">{{row.student_average_score}}</span>\n                            <span (click)=\"studentNotAnswer(row)\" *ngIf=\"row.status == '5'\" class=\"never cursor\">{{row.student_average_score}}</span>\n                            <span (click)=\"studentCorrectionDetail(row)\" *ngIf=\"row.status == '7'\" class=\"pending-color cursor\">{{row.student_average_score}}</span>\n                        </div>\n                        <div *ngIf=\"row.content_type == '0'\">-</div>\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Action\">\n                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n\n                        <i (click)=\"openNotes(classData, row)\" style=\"font-size: 16px\" aria-hidden=\"true\" class=\"color-primary cursor fa fa-newspaper-o mr-2\" title=\"Add Notes\"></i>\n                        <i style=\"font-size: 16px\" *ngIf=\"['1', '2', '3', '5', '6,', '7'].indexOf(row.status) > -1 \" class=\"color-primary fa fa-eye cursor mr-2\" title=\"View Content\" aria-hidden=\"true\" (click)=\"row.status == '5' ? studentNotAnswer(row) : studentCorrectionDetail(row)\"></i>\n                        <i style=\"font-size: 16px\" class=\"color-primary fa fa-bell cursor\" title=\"Notify Contact\" aria-hidden=\"true\" *ngIf=\"row.status == '4' || row.status == '6'\" (click)=\"notifyParent(row)\"></i>\n\n                    </ng-template>\n                </ngx-datatable-column>\n            </ngx-datatable>\n        </div>\n    </div>\n</div>\n\n<ng-template #writeNoteOpen let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center\">Add Notes</h4>\n        <i (click)=\"close()\" class=\"fa fa-close cursor\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row px-3 d-flex justify-content-center\">\n            <div *ngFor=\"let list of showNotes; let i = index\" class=\"col-12 mt-2\">\n                <div class=\"row border border-secondary rounded\">\n                    <div class=\"col-8 d-flex\" style=\"word-wrap: break-word;\">\n                        <i *ngIf=\"list.notes_type == '2'\" class=\"fa fa-envelope-square align-self-center mr-2 color-primary\"></i>\n                        <i *ngIf=\"list.notes_type == '1'\" class=\"fa fa-bookmark align-self-center mr-2 color-secondary\"></i>\n                        <span [innerHTML]=\"list.notes\" class=\"mb-0 mt-3\"></span>\n                    </div>\n                    <div class=\"col-3 px-0 d-flex justify-content-end align-self-center\">\n                        <small class=\"mb-0\">{{list.created_date | customDateFormat}}</small>\n                    </div>\n                    <div class=\"col-1 d-flex justify-content-end align-self-center\">\n                        <i (click)=\"deleteNotes(list)\" aria-hidden=\"true\" class=\"fa fa-close fa-1x text-danger\" style=\"cursor:pointer\"></i>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 px-0 mt-2\">\n                <app-tiny-mice  (emitEditorValue)=\"getEditorValue($event)\"\n                                [editorPatchValue]=\"false\"\n                                [height]=\"300\"\n                                [id]=\"'addNotes'\"\n                                [showDropBtn]=\"false\"\n                                [showInputBtn]=\"false\">\n                </app-tiny-mice>\n            </div>\n            <div class=\"col-12 px-0 text-right mt-2\">\n                <button (click)=\"addNotes('2')\" class=\"btn btn-outline-primary mr-2\" type=\"button\">Send as Email</button>\n                <button (click)=\"addNotes('1')\" class=\"btn btn-primary\" type=\"button\">Add</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<ng-template #contentnow let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Notify Contact</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <h5 class=\"text-center\">Are You Sure want to notify {{studentname[0].student_name}} contacts?</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmNotifiy()\">Confirm</button>\n    </div>\n</ng-template>\n\n<ng-template #notStarted let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title col-12 text-center\"><b>Not Started</b></h4>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n            <h5 class=\"text-center\"> Not submitted the\n                <span *ngIf=\"this.contentType == '2'\">Assignment</span>\n                <span *ngIf=\"this.contentType == '3'\">Assessment</span> yet.</h5>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"closeNotstarted()\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #viewStudentDetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Student Answer Report</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\" ></i>\n    </div>\n    <div class=\"modal-body\">\n        <app-answer-sheet [answerShow]=\"true\" [contentId]=\"contentId\" [contentFormat]=\"contentFormat\" [studentContentId]=\"studentContentId\"\n                          [is_test]=\"is_test\"\n                          [classId]=\"classData.class_id\" [studentReportId]=\"studentId\" [backStatus]=\"false\" ></app-answer-sheet>\n    </div>\n</ng-template>\n\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.ReportService }, { type: i3.NgbModal }, { type: i4.ContentdetailService }, { type: i5.ToastrService }], { classData: [{
            type: Input
        }], studentId: [{
            type: Input
        }], viewStudentDetails: [{
            type: ViewChild,
            args: ['viewStudentDetails']
        }], notStarted: [{
            type: ViewChild,
            args: ['notStarted']
        }], modalContentnow: [{
            type: ViewChild,
            args: ['contentnow']
        }], writeNoteOpen: [{
            type: ViewChild,
            args: ['writeNoteOpen']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentReportComponent, { className: "StudentReportComponent" }); })();
//# sourceMappingURL=student-report.component.js.map