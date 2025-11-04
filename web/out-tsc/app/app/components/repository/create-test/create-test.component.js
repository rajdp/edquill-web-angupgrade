import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "src/app/shared/service/auth.service";
import * as i3 from "src/app/shared/service/class.service";
import * as i4 from "src/app/shared/service/creator.service";
import * as i5 from "src/app/shared/service/validation.service";
import * as i6 from "ngx-toastr";
import * as i7 from "@angular/router";
import * as i8 from "@ng-bootstrap/ng-bootstrap";
import * as i9 from "@angular/common";
import * as i10 from "@ng-select/ng-select";
import * as i11 from "../../auth/confirm-content-assign/confirm-content-assign.component";
import * as i12 from "../preview/preview.component";
const _c0 = ["assignContentToClass"];
const _c1 = ["assignTemplate"];
const _c2 = ["viewContent"];
function CreateTestComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵelement(1, "img", 48);
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_em_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, "Resource Name is required");
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_em_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, "Grade is required");
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_em_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, "Subject is required");
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_em_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, "Content Duration is required");
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_em_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, "Description is required");
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_em_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, " Test Type is required");
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_em_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, " Content Type is required");
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_div_68_div_1_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 72);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", data_r4.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r4.name);
} }
function CreateTestComponent_div_68_div_1_ng_option_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ng-option", 72)(1, "div", 73);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r6.content_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", item_r6.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r6.name, " - ", item_r6.question_count, "(Qns)");
} }
function CreateTestComponent_div_68_div_1_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 74);
    i0.ɵɵlistener("click", function CreateTestComponent_div_68_div_1_i_29_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r7); const content_r8 = i0.ɵɵnextContext(2).$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.previewContent(content_r8.get("contentName").value)); });
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_div_68_div_1_span_46_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 78);
    i0.ɵɵlistener("click", function CreateTestComponent_div_68_div_1_span_46_i_1_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r4 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r4.addContent()); });
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_div_68_div_1_span_46_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 79);
    i0.ɵɵlistener("click", function CreateTestComponent_div_68_div_1_span_46_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r10); const i_r11 = i0.ɵɵnextContext(3).index; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.removeContent(i_r11)); });
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_div_68_div_1_span_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 75);
    i0.ɵɵtemplate(1, CreateTestComponent_div_68_div_1_span_46_i_1_Template, 1, 0, "i", 76)(2, CreateTestComponent_div_68_div_1_span_46_i_2_Template, 1, 0, "i", 77);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r11 = i0.ɵɵnextContext(2).index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r11 == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r11 != 0);
} }
function CreateTestComponent_div_68_div_1_em_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, "Subject Name is required");
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_div_68_div_1_em_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, "Module Name is required");
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_div_68_div_1_em_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, "Content Name is required");
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_div_68_div_1_em_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, "Content is already selected");
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_div_68_div_1_em_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, "Duration (Min) is required");
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_div_68_div_1_em_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 49);
    i0.ɵɵtext(1, "Interval Between Content is required");
    i0.ɵɵelementEnd();
} }
function CreateTestComponent_div_68_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "div", 6)(2, "div", 53)(3, "label", 54);
    i0.ɵɵtext(4, "Subject Name");
    i0.ɵɵelementStart(5, "span", 55);
    i0.ɵɵtext(6, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "select", 56)(8, "option", 37);
    i0.ɵɵtext(9, "Please Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, CreateTestComponent_div_68_div_1_option_10_Template, 2, 2, "option", 57);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 58)(12, "label", 54);
    i0.ɵɵtext(13, "Module Name ");
    i0.ɵɵelementStart(14, "span", 10);
    i0.ɵɵtext(15, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(16, "input", 59);
    i0.ɵɵelementStart(17, "label", 60);
    i0.ɵɵtext(18, "Module Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 61)(20, "label", 54);
    i0.ɵɵtext(21, "Content Name");
    i0.ɵɵelementStart(22, "span", 55);
    i0.ɵɵtext(23, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 62)(25, "div")(26, "ng-select", 63);
    i0.ɵɵlistener("change", function CreateTestComponent_div_68_div_1_Template_ng_select_change_26_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.findDuplicateValue()); });
    i0.ɵɵtemplate(27, CreateTestComponent_div_68_div_1_ng_option_27_Template, 3, 4, "ng-option", 57);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 64);
    i0.ɵɵtemplate(29, CreateTestComponent_div_68_div_1_i_29_Template, 1, 0, "i", 65);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "div", 58)(31, "label", 54);
    i0.ɵɵtext(32, "Duration (Min)");
    i0.ɵɵelementStart(33, "span", 55);
    i0.ɵɵtext(34, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "input", 66);
    i0.ɵɵlistener("keypress", function CreateTestComponent_div_68_div_1_Template_input_keypress_35_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.numberPattern($event)); })("keyup", function CreateTestComponent_div_68_div_1_Template_input_keyup_35_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.calculateDuration()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "label", 60);
    i0.ɵɵtext(37, "Duration");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 67)(39, "span", 68)(40, "span")(41, "label", 54);
    i0.ɵɵtext(42, "Interval");
    i0.ɵɵelementStart(43, "span", 55);
    i0.ɵɵtext(44, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "input", 69);
    i0.ɵɵlistener("keypress", function CreateTestComponent_div_68_div_1_Template_input_keypress_45_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.numberPattern($event)); })("keyup", function CreateTestComponent_div_68_div_1_Template_input_keyup_45_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.calculateDuration()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(46, CreateTestComponent_div_68_div_1_span_46_Template, 3, 2, "span", 70);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(47, "div", 6)(48, "div", 71);
    i0.ɵɵtemplate(49, CreateTestComponent_div_68_div_1_em_49_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "div", 71);
    i0.ɵɵtemplate(51, CreateTestComponent_div_68_div_1_em_51_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "div", 71);
    i0.ɵɵtemplate(53, CreateTestComponent_div_68_div_1_em_53_Template, 2, 0, "em", 29)(54, CreateTestComponent_div_68_div_1_em_54_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "div", 71);
    i0.ɵɵtemplate(56, CreateTestComponent_div_68_div_1_em_56_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "div", 71);
    i0.ɵɵtemplate(58, CreateTestComponent_div_68_div_1_em_58_Template, 2, 0, "em", 29);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    const content_r8 = ctx_r11.$implicit;
    const i_r11 = ctx_r11.index;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroupName", i_r11);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", ctx_r4.subjectListForModule);
    i0.ɵɵadvance(15);
    i0.ɵɵclassMap(content_r8.get("contentName").value ? "col-11 pr-0" : "col-12");
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", ctx_r4.showContentName(i_r11));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r4.contentListData);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", content_r8.get("contentName").value);
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngIf", ctx_r4.testForm.get("test_type").value == "2" && ctx_r4.testForm.get("contentArray")["controls"].length < 4 || ctx_r4.testForm.get("test_type").value == "3");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !content_r8.get("subjectName").valid && (content_r8.get("subjectName").dirty || content_r8.get("subjectName").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !content_r8.get("moduleName").valid && (content_r8.get("moduleName").dirty || content_r8.get("moduleName").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !content_r8.get("contentName").valid && (content_r8.get("contentName").dirty || content_r8.get("contentName").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", content_r8.get("contentName").valid && ctx_r4.checkDuplicateValue("contentName", content_r8));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !content_r8.get("contentDuration").valid && (content_r8.get("contentDuration").dirty || content_r8.get("contentDuration").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !content_r8.get("timeInterval").valid && (content_r8.get("timeInterval").dirty || content_r8.get("timeInterval").touched));
} }
function CreateTestComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, CreateTestComponent_div_68_div_1_Template, 59, 15, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const content_r8 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.contentTestType == "add" || ctx_r4.contentTestType == "edit" && content_r8.get("status").value != 0);
} }
function CreateTestComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 80)(1, "h5", 81);
    i0.ɵɵtext(2, "Assign Content");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 82)(4, "div", 6)(5, "div", 7)(6, "h5")(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, "?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 83)(11, "button", 84);
    i0.ɵɵlistener("click", function CreateTestComponent_ng_template_73_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r13); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.dontAssign()); });
    i0.ɵɵtext(12, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 85);
    i0.ɵɵlistener("click", function CreateTestComponent_ng_template_73_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r13); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.assignContent()); });
    i0.ɵɵtext(14, "Yes");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Do you want to assign this content to the Class ", ctx_r4.contentCreatedForm != "class" ? "or Content Folder" : "", "");
} }
function CreateTestComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-confirm-content-assign", 86);
    i0.ɵɵlistener("closePopUp", function CreateTestComponent_ng_template_75_Template_app_confirm_content_assign_closePopUp_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.closeAssignPopUp()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("classData", ctx_r4.classDetails)("contentDetails", ctx_r4.assignData);
} }
function CreateTestComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 87)(1, "h4", 88);
    i0.ɵɵtext(2, "Preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 89);
    i0.ɵɵlistener("click", function CreateTestComponent_ng_template_77_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r15); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.closePopUp()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 90)(5, "app-preview", 91);
    i0.ɵɵlistener("closePopUp", function CreateTestComponent_ng_template_77_Template_app_preview_closePopUp_5_listener() { i0.ɵɵrestoreView(_r15); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.closePopUp()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("calledBy", "popUp")("contentData", ctx_r4.contentData);
} }
export class CreateTestComponent {
    constructor(formBuilder, auth, classService, creatorService, validationService, toastr, router, activateRoute, modalService) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.classService = classService;
        this.creatorService = creatorService;
        this.validationService = validationService;
        this.toastr = toastr;
        this.router = router;
        this.activateRoute = activateRoute;
        this.modalService = modalService;
        this.gradeData = [];
        this.subjectData = [];
        this.contentListData = [];
        this.contentCreatedForm = '';
        this.classDetails = [];
        this.duplicateStatus = false;
        this.contentData = {};
        this.showLoader = false;
        this.testTypeListData = [];
        this.subjectListForModule = [{ id: 'Reading & Writing', name: 'Reading & Writing' }, { id: 'Math', name: 'Math' }];
        this.activateRoute.params.forEach((params) => {
            this.contentTestType = params.type;
        });
        this.username = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
        this.testForm = this.formBuilder.group({
            created: ['', Validators.required],
            resourceName: ['', Validators.required],
            grade: ['', Validators.required],
            subject: ['', Validators.required],
            contentDuration: [0, Validators.required],
            contentType: ['3', Validators.required],
            description: '',
            test_type: [null, Validators.required],
            contentArray: this.formBuilder.array([this.createContent()])
        });
    }
    ngOnInit() {
        this.testTypeList();
        this.gradeList();
        this.subjectList();
        this.contentList();
        this.testForm.controls.created.patchValue(this.username);
        if (this.contentTestType == 'edit') {
            this.editData = JSON.parse(this.auth.getSessionData('editTestDetails'));
            this.testForm.controls.resourceName.patchValue(this.editData.name);
            this.testForm.controls.description.patchValue(this.editData.description);
            this.testForm.controls.contentType.patchValue(this.editData.content_type);
            if (this.editData.grade.length >= 3) {
                this.gradeSplit = [];
                const grade = this.editData.grade.split(',');
                for (let i = 0; i < grade.length; i++) {
                    this.gradeSplit.push(grade[i]);
                }
            }
            else {
                this.gradeSplit = [this.editData.grade];
            }
            if (this.editData.subject.length >= 3) {
                this.subjectSplit = [];
                const subject = this.editData.subject.split(',');
                for (let i = 0; i < subject.length; i++) {
                    this.subjectSplit.push(subject[i]);
                }
            }
            else {
                this.subjectSplit = [this.editData.subject];
            }
            this.testForm.controls.grade.patchValue(this.gradeSplit);
            this.testForm.controls.subject.patchValue(this.subjectSplit);
            this.testForm.controls.test_type.patchValue(this.editData?.test_type_id ?? null);
            this.testForm.controls.contentDuration.patchValue(this.editData.content_duration);
            if (this.editData.contents.length != 0) {
                this.contentArray = this.testForm.get('contentArray');
                for (let i = this.contentArray.length; this.contentArray.length > 0; i--) {
                    this.contentArray.removeAt(i);
                }
                this.editData.contents.forEach((item, index) => {
                    this.contentArray.push(this.createContent());
                    this.testForm['controls'].contentArray['controls'][index]['controls']['moduleName'].patchValue(item.module_name);
                    this.testForm['controls'].contentArray['controls'][index]['controls']['subjectName'].patchValue(item.subject);
                    this.testForm['controls'].contentArray['controls'][index]['controls']['contentName'].patchValue(item.content_id);
                    this.testForm['controls'].contentArray['controls'][index]['controls']['contentDuration'].patchValue(item.solving_time);
                    this.testForm['controls'].contentArray['controls'][index]['controls']['status'].patchValue(item.status);
                    this.testForm['controls'].contentArray['controls'][index]['controls']['content_detail_id'].patchValue(item.content_detail_id);
                    this.testForm['controls'].contentArray['controls'][index]['controls']['timeInterval'].patchValue(item.interval_time);
                });
                setTimeout(() => {
                    this.calculateDuration();
                }, 500);
            }
        }
    }
    createContent() {
        if (this.contentTestType == 'add') {
            return this.formBuilder.group({
                moduleName: ['', Validators.required],
                subjectName: ['', Validators.required],
                contentName: [null, Validators.required],
                name: [''],
                contentDuration: ['', Validators.required],
                timeInterval: [0, Validators.required]
            });
        }
        else {
            return this.formBuilder.group({
                moduleName: ['', Validators.required],
                subjectName: ['', Validators.required],
                contentName: [null, Validators.required],
                name: [''],
                contentDuration: ['', Validators.required],
                timeInterval: [0, Validators.required],
                status: '1',
                content_detail_id: ''
            });
        }
    }
    testTypeList() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
        };
        this.auth.postService(payload, 'content/testType').subscribe((successData) => {
            console.log(successData, 'tets_type');
            this.testTypeListData = successData.IsSuccess ? successData.ResponseObject : [];
            const index = this.testTypeListData.findIndex((value => value.test_type_id == '1'));
            this.testTypeListData.splice(index, 1);
        }, (error => console.error(error, 'error_test_type')));
    }
    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.classService.gradeList(data).subscribe((successData) => {
            this.gradeListSuccess(successData);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    gradeListSuccess(successData) {
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
        }
    }
    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.classService.subjectList(data).subscribe((successData) => {
            this.subjectListSuccess(successData);
        }, (error) => {
            console.log(error, 'error_Subject');
        });
    }
    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
    }
    contentList() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_format: 3
        };
        this.creatorService.contentList(data).subscribe((successData) => {
            this.contentListSuccess(successData);
        }, (error) => {
            console.error(error);
        });
    }
    contentListSuccess(successData) {
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((item) => {
                item.content_name_qns = item.name + ' ' + item.question_count + ' (Qns)';
            });
            this.contentListData = successData.ResponseObject;
        }
    }
    numberPattern(event) {
        this.validationService.numberValidate1(event);
    }
    addContent() {
        if (this.testForm.get('contentArray').valid) {
            if (!this.duplicateStatus) {
                this.contentArray = this.testForm.get('contentArray');
                this.contentArray.push(this.createContent());
            }
            else {
                this.toastr.error('Do not enter the same module name and content');
            }
        }
        else {
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
        console.log(this.duplicateStatus, 'duplicateStatus');
    }
    removeContent(i) {
        if (this.contentTestType == 'add') {
            this.contentArray.removeAt(i);
        }
        else {
            const data = this.testForm.get('contentArray')['controls'];
            data.forEach((item, index) => {
                if (data[index]['controls']['content_detail_id'].value != '' && index == i) {
                    this.testForm['controls'].contentArray['controls'][index]['controls']['status'].patchValue('0');
                }
                else if (data[index]['controls']['content_detail_id'].value == '' && index == i) {
                    this.contentArray.removeAt(i);
                }
            });
        }
    }
    calculateDuration() {
        const contentData = this.testForm.get('contentArray')['controls'];
        let value = 0;
        contentData.forEach((item, index) => {
            value += parseInt(contentData[index]['controls']['contentDuration'].value) ?
                parseInt(contentData[index]['controls']['contentDuration'].value) + parseInt(contentData[index]['controls']['timeInterval'].value) : value != 0 ? value : 0;
        });
        this.testForm.controls.contentDuration.patchValue(value ? value : 0);
    }
    checkDuplicateValue(formControlName, currentItem) {
        const currentValue = currentItem.get(formControlName)?.value;
        const formArray = this.testForm.get('contentArray');
        const isDuplicate = formArray.controls.some(item => {
            return item !== currentItem && item.get(formControlName)?.value === currentValue;
        });
        return isDuplicate;
    }
    showContentName(i) {
        const contentId = this.testForm.get('contentArray')['controls'][i]['controls']['contentName'].value;
        const getContentData = this.contentListData.find(value => value.content_id == contentId);
        return getContentData?.name ?? '';
    }
    findDuplicateValue() {
        const contentData = this.testForm.get('contentArray')['controls'];
        const contentList = [];
        contentData.forEach((item, index) => {
            contentList.push({
                content_id: contentData[index]['controls']['contentName'].value,
            });
        });
        if (contentData.length > 1) {
            const contentIds = contentList.map(item => item.content_id);
            const uniqueContentIds = new Set(contentIds);
            this.duplicateStatus = uniqueContentIds.size < contentIds.length;
        }
        else {
            this.duplicateStatus = false;
        }
        console.log(this.duplicateStatus, 'duplicateStatus');
    }
    checkDuplicateFieldsInFormArray() {
        const formArray = this.testForm.get('contentArray');
        const values = formArray.value;
        const contentNames = values.map((v) => v.contentName);
        // const moduleNames = values.map((v: any) => v.moduleName);
        const hasDuplicateContentName = contentNames.some((val, i) => contentNames.indexOf(val) !== i);
        // const hasDuplicateModuleName = moduleNames.some((val, i) => moduleNames.indexOf(val) !== i);
        // return hasDuplicateContentName || hasDuplicateModuleName;
        return hasDuplicateContentName;
    }
    saveAndExit() {
        if (this.testForm.valid) {
            if (!this.checkDuplicateFieldsInFormArray()) {
                const contentData = this.testForm.get('contentArray')['controls'];
                if (contentData.length == 4 && this.testForm.get('test_type').value == '2' || this.testForm.get('test_type').value == '3') {
                    const contentList = [];
                    const contentListLength = contentData.length - 1;
                    console.log(contentListLength);
                    const lastContentTimeValue = contentData[contentListLength]['controls']['timeInterval'].value;
                    console.log(lastContentTimeValue, 'lastContentTimeValue');
                    this.testForm.controls.contentDuration.patchValue(this.testForm.controls.contentDuration.value - parseInt(lastContentTimeValue));
                    contentData.forEach((item, index) => {
                        if (this.contentTestType == 'add') {
                            contentList.push({
                                content_id: contentData[index]['controls']['contentName'].value,
                                subject: contentData[index]['controls']['subjectName'].value,
                                module_name: contentData[index]['controls']['moduleName'].value,
                                solving_time: contentData[index]['controls']['contentDuration'].value,
                                interval_time: contentListLength == index ? 0 : contentData[index]['controls']['timeInterval'].value
                            });
                        }
                        else {
                            contentList.push({
                                content_id: contentData[index]['controls']['contentName'].value,
                                subject: contentData[index]['controls']['subjectName'].value,
                                module_name: contentData[index]['controls']['moduleName'].value,
                                solving_time: contentData[index]['controls']['contentDuration'].value,
                                status: contentData[index]['controls']['status'].value,
                                content_detail_id: contentData[index]['controls']['content_detail_id'].value,
                                interval_time: contentListLength == index ? 0 : contentData[index]['controls']['timeInterval'].value
                            });
                        }
                    });
                    console.log(contentList[contentListLength], ' contentList[contentListLength]');
                    const data = {
                        platform: 'web',
                        role_id: this.auth.getRoleId(),
                        user_id: this.auth.getUserId(),
                        school_id: this.auth.getSessionData('school_id'),
                        name: this.testForm.controls.resourceName.value,
                        description: this.testForm.controls.description.value,
                        grade: this.testForm.controls.grade.value,
                        subject: this.testForm.controls.subject.value,
                        content_type: this.testForm.controls.contentType.value,
                        status: '1',
                        content_duration: this.testForm.controls.contentDuration.value,
                        contents: contentList,
                        test_type_id: this.testForm.controls.test_type.value ?? ''
                    };
                    let url = '';
                    if (this.contentTestType == 'add') {
                        url = 'content/addTest';
                    }
                    else {
                        url = 'content/editTest';
                        data['content_id'] = this.editData.content_id;
                    }
                    this.auth.postService(data, url).subscribe((successData) => {
                        this.creatorSuccess(successData);
                    }, (error) => console.error(error));
                }
                else {
                    this.toastr.error('For SAT type test you have to add four content!');
                }
            }
            else {
                this.toastr.error('Duplicate Content and Module Name combination found!');
            }
        }
        else {
            this.validationService.validateAllFormFields(this.testForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    creatorSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.assignData = successData.Contentdetails;
            this.modalRef = this.modalService.open(this.assignContentToClass, { size: 'md', backdrop: 'static' });
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    dontAssign() {
        this.modalRef.close();
        if (this.auth.getSessionData('assignedForm') == 'class') {
            this.auth.removeSessionData('content_assign');
            this.router.navigate(['class/topicsAndCurriculum/1']);
        }
        else if (this.auth.getSessionData('assignedForm') == 'content-Folder') {
            this.router.navigate(['class/view-assign/2']);
        }
        else if (this.auth.getSessionData('assignedForm') == 'classRoom') {
            this.router.navigate(['classroom/list-classroom']);
        }
        else {
            this.router.navigate(['repository/content-home']);
        }
        this.auth.setSessionData('resourceAccess', false);
        this.auth.removeSessionData('assignedForm');
    }
    assignContent() {
        this.modalRef.close();
        this.classDetails = JSON.parse(this.auth.getSessionData('card-data'));
        this.modalRef = this.modalService.open(this.assignTemplate, { size: 'xl', backdrop: 'static' });
    }
    encodeImageFileAsURL(event) {
        console.log(event, 'event');
    }
    testTypeChanged(event) {
        console.log(event, 'event');
        if (event) {
            if (event.test_type_id == '3') {
                this.subjectListForModule.push({ id: 'Grammar', name: 'Grammar' });
            }
            else {
                const findIndex = this.subjectListForModule.findIndex(value => value.id == 'Grammar');
                console.log(findIndex, 'findIndex');
                findIndex != -1 ? this.subjectListForModule.splice(findIndex, 1) : '';
                this.testForm.get('contentArray')['controls'].forEach((items) => {
                    items.value.subjectName = items.value.subjectName == 'Grammar' ? '' : items.value.subjectName;
                });
            }
        }
    }
    previewContent(event) {
        this.showLoader = true;
        const contentValue = this.contentListData.find(value => value.content_id == event);
        console.log(contentValue, 'contentValue');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: contentValue.content_id,
            content_type: contentValue.content_type,
            content_format: contentValue.content_format,
            school_id: this.auth.getSessionData('school_id'),
        };
        this.auth.setSessionData('editor', JSON.stringify(data));
        this.creatorService.repositoryDetail(data).subscribe((successData) => {
            this.detailsSuccess(successData, data);
        }, (error) => {
            console.error(error, 'error_lisDetails');
        });
    }
    detailsSuccess(successData, value) {
        this.contentData = successData;
        if (successData.IsSuccess) {
            this.auth.setSessionData('editresources', JSON.stringify(successData.ResponseObject));
            this.auth.setSessionData('assignedForm', 'classRoom');
            this.auth.setSessionData('editContentFromClassRoom', 'classRoom');
            if (value.content_type == '1') {
                this.auth.setSessionData('preview_page', value.content_format != '3' ? 'create_resources' : 'text_resources');
            }
            else if (value.content_type == '2') {
                this.auth.setSessionData('preview_page', value.content_format != '3' ? 'create_assignments' : 'text_assignments');
            }
            else if (value.content_type == '3') {
                this.auth.setSessionData('preview_page', value.content_format != '3' ? 'create_assessments' : 'text_assessments');
            }
            this.auth.setSessionData('preview', 'content-folder');
            this.modalRef = this.modalService.open(this.viewContent, { size: 'xl', backdrop: 'static', windowClass: 'classRoom_popup' });
            this.showLoader = false;
        }
    }
    closeAssignPopUp() {
        this.auth.removeSessionData('assignedForm');
        this.modalRef.close();
    }
    closePopUp() {
        this.modalRef.close();
    }
    static { this.ɵfac = function CreateTestComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CreateTestComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.ClassService), i0.ɵɵdirectiveInject(i4.CreatorService), i0.ɵɵdirectiveInject(i5.ValidationService), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i7.Router), i0.ɵɵdirectiveInject(i7.ActivatedRoute), i0.ɵɵdirectiveInject(i8.NgbModal)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CreateTestComponent, selectors: [["app-create-test"]], viewQuery: function CreateTestComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignContentToClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContent = _t.first);
        } }, decls: 79, vars: 17, consts: [["addAssignment", "", "myInput", ""], ["assignContentToClass", ""], ["assignTemplate", ""], ["viewContent", ""], ["id", "pre-loader", 4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "text-uppercase", "font-weight-bold"], [1, "customLabel", "text-muted"], [1, "text-danger"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-body", "tab2-card", "p-3"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "col-md-12", "d-flex", "px-0"], [1, "col-sm-12", "col-md-4", "px-0"], [1, "image-container-left"], ["src", "assets/images/ristaschool/assessment.png", "alt", ""], [1, "profileUrl"], ["type", "file", "accept", ".png, .jpeg, .jpg", 1, "custom-upload-input", 2, "display", "none", 3, "change"], ["type", "button", "title", "upload Image", 1, "btn", "btn-light", "btn-circle", "border-rista", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-upload", "fa-2x", "mb-3"], [1, "col-sm-12", "col-md-8", "pr-0"], [1, "col-md-4", "form-group"], ["formControlName", "created", "type", "text", "autocomplete", "off", "placeholder", "Created", "required", "", "readonly", "", 1, "form-control"], [1, "col-md-8", "form-group"], ["formControlName", "resourceName", "autocomplete", "off", "required", "", "type", "text", 1, "form-control"], [1, "customLabel"], ["class", "error", 4, "ngIf"], ["bindLabel", "grade_name", "bindValue", "grade_id", "formControlName", "grade", "placeholder", "Select Grade", "typeToSearchText", "", "multiple", "true", 1, "custom", 3, "items"], ["bindLabel", "subject_name", "bindValue", "subject_id", "formControlName", "subject", "placeholder", "Select Subject", "typeToSearchText", "", "multiple", "true", 1, "custom", 3, "items"], ["formControlName", "contentDuration", "autocomplete", "off", "type", "text", "readonly", "", "required", "", 1, "form-control", 3, "keypress"], [1, "form-group", "col-md-12"], ["name", "", "id", "", "autocomplete", "off", "placeholder", "Enter Description", "formControlName", "description", 1, "form-control", 2, "width", "100%", "height", "100px"], ["bindLabel", "test_type", "bindValue", "test_type_id", "formControlName", "test_type", "placeholder", "Select Test Type", "typeToSearchText", "", 1, "custom", 3, "change", "items"], ["formControlName", "contentType", 1, "form-control"], ["value", "", "selected", "", "disabled", ""], ["value", "2"], ["value", "3"], [1, "col-12", "pt-4", "pb-3", "px-0"], [1, "resource-link-card"], [1, "col-12"], [1, "mb-3"], ["formArrayName", "contentArray", 4, "ngFor", "ngForOf"], [1, "col-md-12", "px-3"], [1, "btn", "btn-outline-primary", "pull-right", 3, "click"], ["id", "pre-loader"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", ""], [1, "error"], ["formArrayName", "contentArray"], [3, "formGroupName", 4, "ngIf"], [3, "formGroupName"], [1, "w-18", "form-group", "mb-1", "align-self-end"], [1, "font-weight-bold", "mb-1"], [1, "text-danger", "ml-1"], ["formControlName", "subjectName", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "w-15", "form-group", "mb-1", "align-self-end"], ["type", "text", "formControlName", "moduleName", "autocomplete", "off", "required", "", 1, "form-control"], [1, "custom-content-Label"], [1, "w-37", "form-group", "mb-1", "align-self-end"], [1, "row", "align-items-center"], ["formControlName", "contentName", "typeToSearchText", "", "placeholder", "Select Content", 1, "custom", 3, "change", "title"], [1, "ml-1"], ["style", "font-size: 16px", "class", "fa fa-eye cursor color-primary ml-1", 3, "click", 4, "ngIf"], ["formControlName", "contentDuration", "autocomplete", "off", "required", "", "type", "text", 1, "form-control", 3, "keypress", "keyup"], [1, "w-15", "form-group", "mb-1"], [1, "d-flex", "align-items-end"], ["formControlName", "timeInterval", "placeholder", "Interval *", "autocomplete", "off", "required", "", "type", "text", 1, "form-control", 3, "keypress", "keyup"], ["class", "h-100", 4, "ngIf"], [1, "w-20", "form-group"], [3, "value"], [3, "title"], [1, "fa", "fa-eye", "cursor", "color-primary", "ml-1", 2, "font-size", "16px", 3, "click"], [1, "h-100"], ["class", "fa fa-plus-circle fa-2x text-success pl-2 pt-1 cursor", "title", "Add Content", 3, "click", 4, "ngIf"], ["class", "fa fa-minus-circle fa-2x text-danger pl-2 pt-1 cursor", "title", "Delete Content", 3, "click", 4, "ngIf"], ["title", "Add Content", 1, "fa", "fa-plus-circle", "fa-2x", "text-success", "pl-2", "pt-1", "cursor", 3, "click"], ["title", "Delete Content", 1, "fa", "fa-minus-circle", "fa-2x", "text-danger", "pl-2", "pt-1", "cursor", 3, "click"], [1, "modal-header"], [1, "contenttext", "text-center", "mb-0"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [3, "closePopUp", "classData", "contentDetails"], [1, "modal-header", "align-items-center"], [1, "modal-title"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body", 2, "background", "#f8f8f9"], [3, "closePopUp", "calledBy", "contentData"]], template: function CreateTestComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, CreateTestComponent_div_0_Template, 2, 0, "div", 4);
            i0.ɵɵelementStart(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h4", 8);
            i0.ɵɵtext(5);
            i0.ɵɵpipe(6, "titlecase");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "label", 9);
            i0.ɵɵtext(8, "All fields marked with ");
            i0.ɵɵelementStart(9, "span", 10);
            i0.ɵɵtext(10, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " are required");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "div", 6)(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "form", 14)(17, "div", 15)(18, "div", 16)(19, "div", 17);
            i0.ɵɵelement(20, "img", 18);
            i0.ɵɵelementStart(21, "div", 19)(22, "input", 20, 0);
            i0.ɵɵlistener("change", function CreateTestComponent_Template_input_change_22_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.encodeImageFileAsURL($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "button", 21);
            i0.ɵɵlistener("click", function CreateTestComponent_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r1); const addAssignment_r2 = i0.ɵɵreference(23); return i0.ɵɵresetView(addAssignment_r2.click()); });
            i0.ɵɵelement(26, "i", 22);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(27, "div", 23)(28, "div", 6)(29, "div", 24);
            i0.ɵɵelement(30, "input", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "div", 26);
            i0.ɵɵelement(32, "input", 27);
            i0.ɵɵelementStart(33, "label", 28);
            i0.ɵɵtext(34, "Resource Name");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(35, CreateTestComponent_em_35_Template, 2, 0, "em", 29);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "div", 6)(37, "div", 24);
            i0.ɵɵelement(38, "ng-select", 30);
            i0.ɵɵtemplate(39, CreateTestComponent_em_39_Template, 2, 0, "em", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "div", 24);
            i0.ɵɵelement(41, "ng-select", 31);
            i0.ɵɵtemplate(42, CreateTestComponent_em_42_Template, 2, 0, "em", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div", 24)(44, "input", 32);
            i0.ɵɵlistener("keypress", function CreateTestComponent_Template_input_keypress_44_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.numberPattern($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(45, CreateTestComponent_em_45_Template, 2, 0, "em", 29);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "div", 6)(47, "div", 33);
            i0.ɵɵelement(48, "textarea", 34);
            i0.ɵɵtemplate(49, CreateTestComponent_em_49_Template, 2, 0, "em", 29);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "div", 6)(51, "div", 24)(52, "ng-select", 35);
            i0.ɵɵlistener("change", function CreateTestComponent_Template_ng_select_change_52_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.testTypeChanged($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(53, CreateTestComponent_em_53_Template, 2, 0, "em", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "div", 24)(55, "select", 36)(56, "option", 37);
            i0.ɵɵtext(57, "Please Select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "option", 38);
            i0.ɵɵtext(59, "Assignment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "option", 39);
            i0.ɵɵtext(61, "Assessment");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(62, CreateTestComponent_em_62_Template, 2, 0, "em", 29);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(63, "div", 40)(64, "div", 41)(65, "div", 42)(66, "h4", 43);
            i0.ɵɵtext(67, "Content");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(68, CreateTestComponent_div_68_Template, 2, 1, "div", 44);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(69, "div", 6)(70, "div", 45)(71, "button", 46);
            i0.ɵɵlistener("click", function CreateTestComponent_Template_button_click_71_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.saveAndExit()); });
            i0.ɵɵtext(72);
            i0.ɵɵelementEnd()()()()()()()();
            i0.ɵɵtemplate(73, CreateTestComponent_ng_template_73_Template, 15, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(75, CreateTestComponent_ng_template_75_Template, 1, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(77, CreateTestComponent_ng_template_77_Template, 6, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showLoader);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(6, 15, ctx.contentTestType), " Test");
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("formGroup", ctx.testForm);
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("ngIf", !ctx.testForm.get("resourceName").valid && (ctx.testForm.get("resourceName").dirty || ctx.testForm.get("resourceName").touched));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("items", ctx.gradeData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.testForm.get("grade").valid && (ctx.testForm.get("grade").dirty || ctx.testForm.get("grade").touched));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("items", ctx.subjectData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.testForm.get("subject").valid && (ctx.testForm.get("subject").dirty || ctx.testForm.get("subject").touched));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.testForm.get("contentDuration").valid && (ctx.testForm.get("contentDuration").dirty || ctx.testForm.get("contentDuration").touched));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.testForm.get("description").valid && (ctx.testForm.get("description").dirty || ctx.testForm.get("description").touched));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("items", ctx.testTypeListData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.testForm.get("test_type").valid && (ctx.testForm.get("test_type").dirty || ctx.testForm.get("test_type").touched));
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", !ctx.testForm.get("contentType").valid && (ctx.testForm.get("contentType").dirty || ctx.testForm.get("contentType").touched));
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.testForm.get("contentArray")["controls"]);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.contentTestType == "add" ? "Submit" : "Update");
        } }, dependencies: [i9.NgForOf, i9.NgIf, i10.NgSelectComponent, i10.NgOptionComponent, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName, i11.ConfirmContentAssignComponent, i12.PreviewComponent, i9.TitleCasePipe], styles: [".tri-state-toggle[_ngcontent-%COMP%] {\n  background: rgba(165, 170, 174, 0.25);\n  box-shadow: inset 0 2px 8px 0 rgba(165, 170, 174, 0.25);\n  border-radius: 24px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  transition: all 500ms ease;\n}\n\n.tri-state-toggle-button[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  background-color: transparent;\n  border: 0 solid transparent;\n  margin: 2px;\n  color: #727C8F;\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\n.tri-state-toggle-button.active[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-180deg, #fff 0%, #FAFAFA 81%, #F2F2F2 100%);\n  border: 1px solid rgba(207, 207, 207, 0.6);\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);\n  color: #26CDBE !important;\n  font-weight: 500 !important;\n  transition: all .2s ease-in !important;\n}\n\n.tri-state-toggle-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 9;\n  background: transparent;\n  border-radius: .25rem;\n  padding: .48rem .75rem\n}\n\n.form-group[_ngcontent-%COMP%]   .customLabel[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 28px;\n  top: 6px;\n  z-index: 1;\n  color: #999999;\n}\n\n.form-group[_ngcontent-%COMP%]   .custom-content-Label[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 28px;\n  top: 32px;\n  z-index: 1;\n  color: #999999;\n}\n\n.form-group[_ngcontent-%COMP%]   .customLabel[_ngcontent-%COMP%]::after, .form-group[_ngcontent-%COMP%]   .custom-content-Label[_ngcontent-%COMP%]::after {\n  content: \" *\";\n  color: red;\n}\n\ninput[required][_ngcontent-%COMP%]:valid    + .customLabel[_ngcontent-%COMP%], input[required][_ngcontent-%COMP%]:valid    + .custom-content-Label[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.custom[_ngcontent-%COMP%]     .ng-placeholder::after {\n  content: \" *\";\n  color: red;\n}\n\n.w-37[_ngcontent-%COMP%] {\n  width: 37% !important;\n  padding: 0 10px !important;\n}\n\n.w-20[_ngcontent-%COMP%] {\n  width: 20% !important;\n  padding: 0 15px !important;\n}\n\n.w-15[_ngcontent-%COMP%] {\n  width: 15% !important;\n  padding: 0 15px !important;\n}\n\n.w-18[_ngcontent-%COMP%] {\n  width: 18% !important;\n  padding: 0 15px !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateTestComponent, [{
        type: Component,
        args: [{ selector: 'app-create-test', template: "<script src=\"create-test.component.ts\"></script>\n<div id=\"pre-loader\" *ngIf=\"showLoader\">\n    <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h4 class=\"text-uppercase font-weight-bold\">{{contentTestType | titlecase}} Test</h4>\n            <label class=\"customLabel text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-body tab2-card p-3\">\n                    <form [formGroup]=\"testForm\" class=\"needs-validation user-add\">\n                        <div class=\"col-md-12 d-flex px-0\">\n                            <div class=\"col-sm-12 col-md-4 px-0\">\n                                <div class=\"image-container-left\">\n                                    <img src=\"assets/images/ristaschool/assessment.png\" alt=\"\">\n                                    <div class=\"profileUrl\">\n                                        <input style=\"display: none\" type=\"file\" class=\"custom-upload-input\" (change)=\"encodeImageFileAsURL($event)\" #addAssignment #myInput accept=\".png, .jpeg, .jpg\">\n                                        <button type=\"button\" class=\"btn btn-light btn-circle border-rista\" title=\"upload Image\" (click)=\"addAssignment.click()\"> <i class=\"fa fa-upload fa-2x mb-3\" aria-hidden=\"true\"></i> </button>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-sm-12 col-md-8 pr-0\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-4 form-group\">\n                                        <input class=\"form-control\" formControlName=\"created\"\n                                               type=\"text\" autocomplete=\"off\" placeholder=\"Created\" required readonly>\n                                    </div>\n                                    <div class=\"col-md-8 form-group\">\n                                        <input class=\"form-control\" formControlName=\"resourceName\"\n                                            autocomplete=\"off\" required type=\"text\">\n                                        <label class=\"customLabel\">Resource Name</label>\n                                        <em class=\"error\" *ngIf=\"!testForm.get('resourceName').valid && (testForm.get('resourceName').dirty || testForm.get('resourceName').touched)\">Resource Name is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-4 form-group\">\n                                        <ng-select class=\"custom\" [items]=\"gradeData\"\n                                                   bindLabel=\"grade_name\"\n                                                   bindValue=\"grade_id\"\n                                                   formControlName=\"grade\"\n                                                   placeholder=\"Select Grade\"\n                                                   typeToSearchText=\"\"\n                                                   multiple=\"true\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\" *ngIf=\"!testForm.get('grade').valid && (testForm.get('grade').dirty || testForm.get('grade').touched)\">Grade is required</em>\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                        <ng-select class=\"custom\" [items]=\"subjectData\"\n                                                   bindLabel=\"subject_name\"\n                                                   bindValue=\"subject_id\"\n                                                   formControlName=\"subject\"\n                                                   placeholder=\"Select Subject\"\n                                                   typeToSearchText=\"\"\n                                                   multiple=\"true\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\" *ngIf=\"!testForm.get('subject').valid && (testForm.get('subject').dirty || testForm.get('subject').touched)\">Subject is required</em>\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                        <input class=\"form-control\" formControlName=\"contentDuration\" (keypress)=\"numberPattern($event)\"\n                                            autocomplete=\"off\" type=\"text\" readonly required>\n                                        <em class=\"error\" *ngIf=\"!testForm.get('contentDuration').valid && (testForm.get('contentDuration').dirty || testForm.get('contentDuration').touched)\">Content Duration is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"form-group col-md-12\">\n                                        <textarea class=\"form-control\" name=\"\" id=\"\" autocomplete=\"off\" placeholder=\"Enter Description\" formControlName=\"description\" style=\"width: 100%; height: 100px\"></textarea>\n                                        <em class=\"error\" *ngIf=\"!testForm.get('description').valid && (testForm.get('description').dirty || testForm.get('description').touched)\">Description is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-4 form-group\">\n                                        <ng-select class=\"custom\" [items]=\"testTypeListData\"\n                                                   bindLabel=\"test_type\"\n                                                   bindValue=\"test_type_id\"\n                                                   formControlName=\"test_type\"\n                                                   placeholder=\"Select Test Type\"\n                                                   typeToSearchText=\"\"\n                                                   (change)=\"testTypeChanged($event)\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\" *ngIf=\"!testForm.get('test_type').valid && (testForm.get('test_type').dirty || testForm.get('test_type').touched)\">\n                                            Test Type is required</em>\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                        <select class=\"form-control\" formControlName=\"contentType\">\n                                            <option value=\"\" selected disabled>Please Select</option>\n                                            <option value=\"2\">Assignment</option>\n                                            <option value=\"3\">Assessment</option>\n                                        </select>\n                                        <em class=\"error\" *ngIf=\"!testForm.get('contentType').valid && (testForm.get('contentType').dirty || testForm.get('contentType').touched)\">\n                                            Content Type is required</em>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-12 pt-4 pb-3 px-0\">\n                            <div class=\"resource-link-card\">\n                                <div class=\"col-12\">\n                                    <h4 class=\"mb-3\">Content</h4>\n                                    <div formArrayName=\"contentArray\" *ngFor=\"let content of testForm.get('contentArray')['controls']; let i = index; let first = first; let last = last\">\n                                        <div [formGroupName]= \"i\" *ngIf=\"contentTestType == 'add' || (contentTestType == 'edit' && content.get('status').value != 0)\">\n                                            <div class=\"row\">\n                                                <div class=\"w-18 form-group mb-1 align-self-end\">\n                                                    <label class=\"font-weight-bold mb-1\">Subject Name<span class=\"text-danger ml-1\">*</span></label>\n                                                    <select class=\"form-control\" formControlName=\"subjectName\">\n                                                        <option value=\"\" selected disabled>Please Select</option>\n                                                        <option [value]=\"data.id\" *ngFor=\"let data of subjectListForModule\">{{data.name}}</option>\n                                                    </select>\n                                                </div>\n                                                <div class=\"w-15 form-group mb-1 align-self-end\">\n                                                    <label class=\"font-weight-bold mb-1\">Module Name <span class=\"text-danger\">*</span></label>\n                                                    <input type=\"text\" class=\"form-control\" formControlName=\"moduleName\" autocomplete=\"off\" required>\n                                                    <label class=\"custom-content-Label\">Module Name</label>\n                                                </div>\n                                                <div class=\"w-37 form-group mb-1 align-self-end\">\n                                                    <label class=\"font-weight-bold mb-1\">Content Name<span class=\"text-danger ml-1\">*</span></label>\n                                                    <div class=\"row align-items-center\">\n                                                        <div class=\"{{content.get('contentName').value ? 'col-11 pr-0' : 'col-12'}}\">\n                                                            <ng-select class=\"custom\" formControlName=\"contentName\"\n                                                                       [title]=\"showContentName(i)\"\n                                                                       typeToSearchText=\"\" (change)=\"findDuplicateValue()\"\n                                                                       placeholder=\"Select Content\">\n                                                                <ng-option *ngFor=\"let item of contentListData;\" [value]=\"item.content_id\">\n                                                                    <div [title]=\"item.name\">{{item.name}} - {{item.question_count}}(Qns)</div>\n                                                                </ng-option>\n                                                            </ng-select>\n                                                        </div>\n                                                        <div class=\"ml-1\">\n                                                            <i (click)=\"previewContent(content.get('contentName').value)\" *ngIf=\"content.get('contentName').value\" style=\"font-size: 16px\" class=\"fa fa-eye cursor color-primary ml-1\"></i>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"w-15 form-group mb-1 align-self-end\">\n                                                    <label class=\"font-weight-bold mb-1\">Duration (Min)<span class=\"text-danger ml-1\">*</span></label>\n                                                    <input class=\"form-control\" formControlName=\"contentDuration\" (keypress)=\"numberPattern($event)\" (keyup)=\"calculateDuration()\"\n                                                           autocomplete=\"off\" required type=\"text\">\n                                                    <label class=\"custom-content-Label\">Duration</label>\n                                                </div>\n                                                <div class=\"w-15 form-group mb-1\">\n                                                    <span class=\"d-flex align-items-end\">\n                                                        <span>\n                                                            <label class=\"font-weight-bold mb-1\">Interval<span class=\"text-danger ml-1\">*</span></label>\n                                                            <input class=\"form-control\" formControlName=\"timeInterval\" (keypress)=\"numberPattern($event)\"\n                                                               placeholder=\"Interval *\" autocomplete=\"off\" required type=\"text\" (keyup)=\"calculateDuration()\">\n                                                        </span>\n                                                        <span class=\"h-100\" *ngIf=\"(testForm.get('test_type').value == '2' && testForm.get('contentArray')['controls'].length < 4) ||\n                                                            testForm.get('test_type').value == '3'\">\n                                                            <i class=\"fa fa-plus-circle fa-2x text-success pl-2 pt-1 cursor\" title=\"Add Content\" (click)=\"addContent()\" *ngIf=\"i == 0\"></i>\n                                                            <i class=\"fa fa-minus-circle fa-2x text-danger pl-2 pt-1 cursor\" title=\"Delete Content\" (click)=\"removeContent(i)\" *ngIf=\"i != 0\"></i>\n                                                        </span>\n                                                    </span>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"w-20 form-group\">\n                                                    <em class=\"error\" *ngIf=\"!content.get('subjectName').valid && (content.get('subjectName').dirty || content.get('subjectName').touched)\">Subject Name is required</em>\n                                                </div>\n                                                <div class=\"w-20 form-group\">\n                                                    <em class=\"error\" *ngIf=\"!content.get('moduleName').valid && (content.get('moduleName').dirty || content.get('moduleName').touched)\">Module Name is required</em>\n<!--                                                    <em class=\"error\" *ngIf=\"content.get('moduleName').valid && checkDuplicateValue('moduleName', content)\">Module Name already exist</em>-->\n                                                </div>\n                                                <div class=\"w-20 form-group\">\n                                                    <em class=\"error\" *ngIf=\"!content.get('contentName').valid && (content.get('contentName').dirty || content.get('contentName').touched)\">Content Name is required</em>\n                                                    <em class=\"error\" *ngIf=\"content.get('contentName').valid && checkDuplicateValue('contentName', content)\">Content is already selected</em>\n                                                </div>\n                                                <div class=\"w-20 form-group\">\n                                                    <em class=\"error\" *ngIf=\"!content.get('contentDuration').valid && (content.get('contentDuration').dirty || content.get('contentDuration').touched)\">Duration (Min) is required</em>\n                                                </div>\n                                                <div class=\"w-20 form-group\">\n                                                    <em class=\"error\" *ngIf=\"!content.get('timeInterval').valid && (content.get('timeInterval').dirty || content.get('timeInterval').touched)\">Interval Between Content is required</em>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 px-3\">\n                            <button class=\"btn btn-outline-primary pull-right\" (click)=\"saveAndExit()\">{{contentTestType == 'add' ? 'Submit' : 'Update'}}</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #assignContentToClass let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Assign Content</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5>\n                    <span>Do you want to assign this content to the Class {{contentCreatedForm != 'class' ? 'or Content Folder' : ''}}</span>?</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"dontAssign()\">No</button>\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"assignContent()\"\n        >Yes</button>\n    </div>\n</ng-template>\n\n<ng-template #assignTemplate let-c=\"close\" let-d=\"dismiss\">\n    <app-confirm-content-assign\n            [classData]=\"classDetails\"\n            [contentDetails]=\"assignData\"\n            (closePopUp)=\"closeAssignPopUp()\"\n    >\n    </app-confirm-content-assign>\n</ng-template>\n\n<ng-template #viewContent>\n    <div class=\"modal-header align-items-center\">\n        <h4 class=\"modal-title\">Preview</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"closePopUp()\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"background: #f8f8f9;\">\n        <app-preview (closePopUp)=\"closePopUp()\" [calledBy]=\"'popUp'\" [contentData]=\"contentData\"></app-preview>\n    </div>\n</ng-template>\n", styles: [".tri-state-toggle {\n  background: rgba(165, 170, 174, 0.25);\n  box-shadow: inset 0 2px 8px 0 rgba(165, 170, 174, 0.25);\n  border-radius: 24px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  transition: all 500ms ease;\n}\n\n.tri-state-toggle-button {\n  border-radius: 24px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  background-color: transparent;\n  border: 0 solid transparent;\n  margin: 2px;\n  color: #727C8F;\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\n.tri-state-toggle-button.active {\n  background-image: linear-gradient(-180deg, #fff 0%, #FAFAFA 81%, #F2F2F2 100%);\n  border: 1px solid rgba(207, 207, 207, 0.6);\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);\n  color: #26CDBE !important;\n  font-weight: 500 !important;\n  transition: all .2s ease-in !important;\n}\n\n.tri-state-toggle-button:focus {\n  outline: none;\n}\n\n.form-group {\n  position: relative;\n}\n\n.form-group input {\n  position: relative;\n  z-index: 9;\n  background: transparent;\n  border-radius: .25rem;\n  padding: .48rem .75rem\n}\n\n.form-group .customLabel {\n  position: absolute;\n  left: 28px;\n  top: 6px;\n  z-index: 1;\n  color: #999999;\n}\n\n.form-group .custom-content-Label {\n  position: absolute;\n  left: 28px;\n  top: 32px;\n  z-index: 1;\n  color: #999999;\n}\n\n.form-group .customLabel::after, .form-group .custom-content-Label::after {\n  content: \" *\";\n  color: red;\n}\n\ninput[required]:valid + .customLabel, input[required]:valid + .custom-content-Label {\n  display: none;\n}\n\n.custom ::ng-deep .ng-placeholder::after {\n  content: \" *\";\n  color: red;\n}\n\n.w-37 {\n  width: 37% !important;\n  padding: 0 10px !important;\n}\n\n.w-20 {\n  width: 20% !important;\n  padding: 0 15px !important;\n}\n\n.w-15 {\n  width: 15% !important;\n  padding: 0 15px !important;\n}\n\n.w-18 {\n  width: 18% !important;\n  padding: 0 15px !important;\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.ClassService }, { type: i4.CreatorService }, { type: i5.ValidationService }, { type: i6.ToastrService }, { type: i7.Router }, { type: i7.ActivatedRoute }, { type: i8.NgbModal }], { assignContentToClass: [{
            type: ViewChild,
            args: ['assignContentToClass']
        }], assignTemplate: [{
            type: ViewChild,
            args: ['assignTemplate']
        }], viewContent: [{
            type: ViewChild,
            args: ['viewContent']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CreateTestComponent, { className: "CreateTestComponent" }); })();
//# sourceMappingURL=create-test.component.js.map