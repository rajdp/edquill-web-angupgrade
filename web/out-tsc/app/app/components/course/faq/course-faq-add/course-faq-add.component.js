import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { urls } from 'src/app/shared/utils/urls';
import * as i0 from "@angular/core";
import * as i1 from "../../../../shared/service/auth.service";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/router";
import * as i4 from "../../../../shared/service/validation.service";
import * as i5 from "ngx-toastr";
import * as i6 from "@angular/common";
import * as i7 from "@ng-select/ng-select";
import * as i8 from "../../../auth/tiny-mice/tiny-mice.component";
function CourseFaqAddComponent_em_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 24);
    i0.ɵɵtext(1, "Question is required");
    i0.ɵɵelementEnd();
} }
function CourseFaqAddComponent_em_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 24);
    i0.ɵɵtext(1, "Answer is required");
    i0.ɵɵelementEnd();
} }
export class CourseFaqAddComponent {
    constructor(auth, builder, route, router, validatorService, toastr) {
        this.auth = auth;
        this.builder = builder;
        this.route = route;
        this.router = router;
        this.validatorService = validatorService;
        this.toastr = toastr;
        this.type = 'add';
        this.courseListData = [];
        this.questionEditor = '';
        this.answerEditor = '';
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.declareFormGroup();
        this.getCourseList();
        if (this.type == 'edit') {
            this.patchFaqDetails();
        }
    }
    ngOnInit() {
    }
    declareFormGroup() {
        this.faqForm = this.builder.group({
            question: ['', Validators.required],
            answer: ['', Validators.required],
            status: ['A', Validators.required],
            course_id: [[], Validators.required]
        });
    }
    getCourseList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.courseList).subscribe((successData) => {
            this.courseListSuccess(successData);
        }, (error) => {
            console.error(error, ' error');
        });
    }
    courseListSuccess(successData) {
        console.log(successData, 'successData');
        this.courseListData = successData.IsSuccess ? successData.ResponseObject : [];
        console.log(this.courseListData, 'courseListData');
    }
    patchFaqDetails() {
        this.faqEditDetails = JSON.parse(this.auth.getSessionData('getFaqDetails'));
        this.faqForm.controls.course_id.patchValue(this.faqEditDetails.course_id);
        this.faqForm.controls.question.patchValue(this.faqEditDetails.title);
        this.questionEditor = this.faqEditDetails.title;
        this.faqForm.controls.answer.patchValue(this.faqEditDetails.answer);
        this.answerEditor = this.faqEditDetails.answer;
        this.faqForm.controls.status.patchValue(this.faqEditDetails.status);
    }
    editorQuestionValue(event) {
        this.faqForm.controls.question.patchValue(event.content);
    }
    editorAnswerValue(event) {
        this.faqForm.controls.answer.patchValue(event.content);
    }
    addFaqDetails() {
        if (this.faqForm.valid) {
            let data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                course_id: this.faqForm.controls.course_id.value,
                title: this.faqForm.controls.question.value ? this.faqForm.controls.question.value : '',
                answer: this.faqForm.controls.answer.value ? this.faqForm.controls.answer.value : '',
                status: this.faqForm.controls.status.value,
                school_id: this.auth.getSessionData('school_id')
            };
            if (this.type == 'edit') {
                data['id'] = this.faqEditDetails.id;
            }
            this.auth.postService(data, this.type == 'add' ? urls.addFaq : urls.updateFaq).subscribe((successData) => {
                this.addFaqSuccess(successData);
            }, (error) => {
                console.error(error, ' error');
            });
        }
        else {
            this.validatorService.validateAllFormFields(this.faqForm);
            this.toastr.error('Please fill all Mandatory fields');
        }
    }
    addFaqSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.router.navigate(['/course/faq/list']);
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    static { this.ɵfac = function CourseFaqAddComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CourseFaqAddComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.ValidationService), i0.ɵɵdirectiveInject(i5.ToastrService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CourseFaqAddComponent, selectors: [["app-course-faq-add"]], decls: 54, vars: 13, consts: [[1, "container-fluid", "card"], [1, "card-header", "my-2"], [1, "text-capitalize"], [1, "text-muted"], [1, "text-danger"], [1, "card-body"], [3, "formGroup"], [1, "form-group", "row", "mt-1"], [1, "col-sm-2", "col-form-label"], [1, "mr-1", "text-danger"], [1, "col-sm-10"], ["appendTo", "body", "formControlName", "course_id", "bindLabel", "course_name", "bindValue", "course_id", "placeholder", "Select course", "typeToSearchText", "", 3, "items", "clearable"], [1, "form-group", "row", "mt-2"], [1, "mr-1", 2, "visibility", "hidden"], [1, "main-content"], [3, "emitEditorValue", "height", "editorPatchValue", "hideMatEditor"], ["class", "error", 4, "ngIf"], ["formControlName", "status", 1, "form-control"], ["value", "A"], ["value", "I"], [1, "card-footer"], [1, "form-group", "row"], [1, "col-12"], [1, "float-right", "btn", "btn-primary", 3, "click"], [1, "error"]], template: function CourseFaqAddComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section")(1, "div", 0)(2, "div", 1)(3, "h5", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "label", 3);
            i0.ɵɵtext(6, "All fields marked with ");
            i0.ɵɵelementStart(7, "span", 4);
            i0.ɵɵtext(8, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(9, " are required");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 5)(11, "form", 6)(12, "div", 7)(13, "label", 8)(14, "span", 9);
            i0.ɵɵtext(15, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16, "Course Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 10);
            i0.ɵɵelement(18, "ng-select", 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "div", 12)(20, "label", 8)(21, "span", 13);
            i0.ɵɵtext(22, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(23, "Question");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 10)(25, "div", 14)(26, "app-tiny-mice", 15);
            i0.ɵɵlistener("emitEditorValue", function CourseFaqAddComponent_Template_app_tiny_mice_emitEditorValue_26_listener($event) { return ctx.editorQuestionValue($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(27, CourseFaqAddComponent_em_27_Template, 2, 0, "em", 16);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(28, "div", 12)(29, "label", 8)(30, "span", 13);
            i0.ɵɵtext(31, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(32, "Answer");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 10)(34, "div", 14)(35, "app-tiny-mice", 15);
            i0.ɵɵlistener("emitEditorValue", function CourseFaqAddComponent_Template_app_tiny_mice_emitEditorValue_35_listener($event) { return ctx.editorAnswerValue($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(36, CourseFaqAddComponent_em_36_Template, 2, 0, "em", 16);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(37, "div", 12)(38, "label", 8)(39, "span", 9);
            i0.ɵɵtext(40, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(41, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 10)(43, "div", 14)(44, "select", 17)(45, "option", 18);
            i0.ɵɵtext(46, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "option", 19);
            i0.ɵɵtext(48, "Suspended");
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelementStart(49, "div", 20)(50, "div", 21)(51, "div", 22)(52, "button", 23);
            i0.ɵɵlistener("click", function CourseFaqAddComponent_Template_button_click_52_listener() { return ctx.addFaqDetails(); });
            i0.ɵɵtext(53);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("", ctx.type == "add" ? "Add" : "Update", " FAQ");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.faqForm);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("items", ctx.courseListData)("clearable", false);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("height", 200)("editorPatchValue", ctx.type == "add" ? false : ctx.questionEditor)("hideMatEditor", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.faqForm.get("question").valid && (ctx.faqForm.get("question").dirty || ctx.faqForm.get("question").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("height", 200)("editorPatchValue", ctx.type == "add" ? false : ctx.answerEditor)("hideMatEditor", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.faqForm.get("answer").valid && (ctx.faqForm.get("answer").dirty || ctx.faqForm.get("answer").touched));
            i0.ɵɵadvance(17);
            i0.ɵɵtextInterpolate1("", ctx.type == "add" ? "Add" : "Update", " FAQ");
        } }, dependencies: [i6.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i7.NgSelectComponent, i8.TinyMiceComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CourseFaqAddComponent, [{
        type: Component,
        args: [{ selector: 'app-course-faq-add', template: "<section>\n  <div class=\"container-fluid card\">\n    <div class=\"card-header my-2\">\n      <h5 class=\"text-capitalize\">{{type == 'add' ? 'Add' : 'Update'}} FAQ</h5>\n      <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n    </div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"faqForm\">\n        <div class=\"form-group row mt-1\">\n          <label class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Course Name</label>\n          <div class=\"col-sm-10\">\n            <ng-select appendTo=\"body\" formControlName=\"course_id\"\n                      [items]=\"courseListData\"\n                       bindLabel=\"course_name\"\n                       bindValue=\"course_id\"\n                       placeholder=\"Select course\"\n                       typeToSearchText=\"\"\n                       [clearable]=\"false\">\n            </ng-select>\n          </div>\n        </div>\n        <div class=\"form-group row mt-2\">\n          <label  class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden;\" class=\"mr-1\">*</span>Question</label>\n          <div class=\"col-sm-10\">\n            <div class=\"main-content\">\n              <app-tiny-mice  [height]=\"200\" [editorPatchValue]=\"type == 'add' ? false : questionEditor\"\n              (emitEditorValue)=\"editorQuestionValue($event)\"\n              [hideMatEditor]=\"true\"></app-tiny-mice>\n<!--              <ck-editor name=\"editor1\" formControlName=\"question\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>-->\n              <em *ngIf=\"!faqForm.get('question').valid && (faqForm.get('question').dirty || faqForm.get('question').touched)\" class=\"error\">Question is required</em>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row mt-2\">\n          <label  class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden;\" class=\"mr-1\">*</span>Answer</label>\n          <div class=\"col-sm-10\">\n            <div class=\"main-content\">\n              <app-tiny-mice  [height]=\"200\" [editorPatchValue]=\"type == 'add' ? false : answerEditor\"\n              (emitEditorValue)=\"editorAnswerValue($event)\"\n              [hideMatEditor]=\"true\"></app-tiny-mice>\n<!--              <ck-editor name=\"editor1\" formControlName=\"answer\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor>-->\n              <em *ngIf=\"!faqForm.get('answer').valid && (faqForm.get('answer').dirty || faqForm.get('answer').touched)\" class=\"error\">Answer is required</em>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row mt-2\">\n          <label class=\"col-sm-2 col-form-label\"><span class=\"mr-1 text-danger\">*</span>Status</label>\n          <div class=\"col-sm-10\">\n            <div class=\"main-content\">\n              <select class=\"form-control\" formControlName=\"status\">\n                <option value=\"A\">Active</option>\n                <option value=\"I\">Suspended</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"card-footer\">\n      <div class=\"form-group row\">\n        <div class=\"col-12\">\n          <button class=\"float-right btn btn-primary\" (click)=\"addFaqDetails()\">{{type == 'add' ? 'Add' : 'Update'}} FAQ</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.FormBuilder }, { type: i3.ActivatedRoute }, { type: i3.Router }, { type: i4.ValidationService }, { type: i5.ToastrService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CourseFaqAddComponent, { className: "CourseFaqAddComponent" }); })();
//# sourceMappingURL=course-faq-add.component.js.map