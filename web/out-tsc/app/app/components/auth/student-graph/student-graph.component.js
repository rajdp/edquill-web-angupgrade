import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { parse, stringify } from 'flatted';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "@angular/router";
import * as i3 from "../../../shared/service/class.service";
import * as i4 from "../../../shared/service/configuration.service";
import * as i5 from "@angular/platform-browser";
import * as i6 from "@angular/forms";
import * as i7 from "../../../shared/service/creator.service";
import * as i8 from "ngx-toastr";
import * as i9 from "../../../shared/service/validation.service";
import * as i10 from "@angular/common";
import * as i11 from "../tiny-mice/tiny-mice.component";
import * as i12 from "../graph-component/graph-component.component";
import * as i13 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
function StudentGraphComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "button", 18);
    i0.ɵɵtext(2, "work space");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 18);
    i0.ɵɵtext(4, "Set Answer");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-controls", "#workspace")("data-target", "#workspace");
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-controls", "#answer")("data-target", "#answer");
} }
function StudentGraphComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Draw Type - ", ctx_r1.markType ? ctx_r1.markType : "None", "");
} }
function StudentGraphComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "button", 21);
    i0.ɵɵlistener("click", function StudentGraphComponent_div_0_div_16_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getGraphDetails("1")); });
    i0.ɵɵtext(2, "Submit");
    i0.ɵɵelementEnd()();
} }
function StudentGraphComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5);
    i0.ɵɵelement(2, "div", 6);
    i0.ɵɵpipe(3, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, StudentGraphComponent_div_0_div_4_Template, 5, 4, "div", 7);
    i0.ɵɵelementStart(5, "div", 8, 0)(7, "div", 9)(8, "app-tiny-mice", 10);
    i0.ɵɵlistener("emitEditorValue", function StudentGraphComponent_div_0_Template_app_tiny_mice_emitEditorValue_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getRoughWorkEvent($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 11, 1)(11, "div", 12)(12, "app-tiny-mice", 10);
    i0.ɵɵlistener("emitEditorValue", function StudentGraphComponent_div_0_Template_app_tiny_mice_emitEditorValue_12_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getNumericWorkSpaceValue($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(13, StudentGraphComponent_div_0_div_13_Template, 3, 1, "div", 13);
    i0.ɵɵelementStart(14, "div", 14)(15, "app-graph-component", 15);
    i0.ɵɵlistener("emitItem", function StudentGraphComponent_div_0_Template_app_graph_component_emitItem_15_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEmitedValue($event)); })("valueChange", function StudentGraphComponent_div_0_Template_app_graph_component_valueChange_15_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getGraphValue($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(16, StudentGraphComponent_div_0_div_16_Template, 3, 0, "div", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.question == "" || ctx_r1.question == undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 23, ctx_r1.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", false);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("editorPatchValue", false)("height", 150)("width", 600)("readonly", false)("id", "workspace")("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("editorPatchValue", false)("height", 150)("width", 600)("readonly", false)("id", "answer")("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.typeId != "3");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("editMode", ctx_r1.editMode)("editPatchValue", ctx_r1.studentAns1)("graphId", "studentAns1")("questionType", "40");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.typeId != "3");
} }
function StudentGraphComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 5);
    i0.ɵɵelement(2, "div", 6);
    i0.ɵɵpipe(3, "sanitizeHtml");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 22)(5, "div", 23)(6, "label");
    i0.ɵɵtext(7, "Correct Answer: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "app-graph-component", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 23)(10, "label");
    i0.ɵɵtext(11, "Student Answer: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "app-graph-component", 24);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", ctx_r1.question == "" || ctx_r1.question == undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(3, 10, ctx_r1.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r1.teacherAns)("graphId", "teacherAns")("questionType", ctx_r1.questionType);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("editMode", false)("editPatchValue", ctx_r1.studentAns)("graphId", "studentAns")("questionType", ctx_r1.questionType);
} }
export class StudentGraphComponent {
    constructor(auth, activateRoute, cd, classService, config, sanitizer, formBuilder, creator, toastr, router, validationService, route) {
        this.auth = auth;
        this.activateRoute = activateRoute;
        this.cd = cd;
        this.classService = classService;
        this.config = config;
        this.sanitizer = sanitizer;
        this.formBuilder = formBuilder;
        this.creator = creator;
        this.toastr = toastr;
        this.router = router;
        this.validationService = validationService;
        this.route = route;
        /// graphin varibales
        this.markType = '';
        this.activateRoute.params.forEach((params) => {
            this.studentId = params.studentId;
            this.contentId = params.cId;
            this.questionId = params.qId;
            this.class_id = params.classId;
            this.typeId = params.typeId;
            this.questionType = params.quesType;
            this.contentFormat = params.format;
        });
        router.events.subscribe((val) => {
            console.log(val instanceof NavigationEnd);
            console.log(val, 'val');
            if (val instanceof NavigationEnd) {
                let url = val.url.split('/');
                console.log(url, 'url');
                this.studentId = url[2];
                this.contentId = url[3];
                this.questionId = url[4];
                this.class_id = url[5];
                this.questionType = url[6];
                this.contentFormat = url[7];
                this.typeId = url[8];
                console.log(this.typeId, 'typeid');
            }
        });
        this.getGraphDetails(this.typeId);
    }
    ngOnInit() {
        // this.findPointsDuplicate();
        // this.activateRoute.params.forEach((params) => {
        //   this.studentId = params.studentId;
        //   this.contentId = params.cId;
        //   this.questionId = params.qId;
        //   this.class_id = params.classId;
        //   this.typeId = params.typeId;
        // });
        // let id = this.typeId == '1'  ? '2' : '3';
    }
    ngAfterContentInit() {
    }
    getGraphDetails(type) {
        let graph;
        if (this.studentAns1 && type == '1') {
            let objects = {};
            for (let el in this.studentAns1.objects) {
                let inherit = [];
                this.studentAns1.objects[el].inherits.forEach((item) => {
                    inherit.push({ name: item.name });
                });
                objects[el] = {
                    elType: this.studentAns1.objects[el].elType,
                    coords: this.studentAns1.objects[el].coords,
                    name: this.studentAns1.objects[el].name,
                    inherits: inherit,
                    parents: this.studentAns1.objects[el].parents,
                    splinePoints: this.studentAns1.objects[el].splinePoints,
                    quadraticform: this.studentAns1.objects[el].quadraticform,
                };
            }
            console.log(objects, 'objectss');
            let objectsArr = [];
            objectsArr.push(objects);
            console.log(objectsArr, 'objectsArr');
            graph = {
                attr: this.studentAns1.attr,
                objects: objects
            };
        }
        const data = {
            platform: 'ios',
            student_id: this.studentId,
            question_id: this.questionId,
            content_id: this.contentId,
            class_id: this.class_id,
            // graph_answer: this.studentAns2,
            content_format: this.contentFormat,
            answer: type != '3' && type != '2' ? [{ correctAnswer: stringify(graph), correctActive: '' }] : [{ correctAnswer: '', correctActive: '' }],
            student_answer: type != '3' && type != '2' ? [{ correctAnswer: stringify(graph), correctActive: '' }] : [{ correctAnswer: '', correctActive: '' }],
            type
        };
        this.creator.graphAnswer(data).subscribe((successData) => {
            this.saveGraphSuccess(successData, type);
        }, (error) => {
            this.saveGraphFailure(error);
        });
    }
    saveGraphSuccess(successData, type) {
        this.question = '';
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            console.log(type, 'type');
            // this.editPatchValue = false;
            this.question = successData.ResponseObject[0].question;
            if (type == '2') {
                this.studentAns1 = '';
                this.studentAns1 = successData.ResponseObject[0].student_answer != '' && parse(successData.ResponseObject[0]?.student_answer[0]?.correctAnswer) ? parse(successData.ResponseObject[0].student_answer[0].correctAnswer) : false;
                this.editMode = true;
            }
            else if (type == '1') {
                this.toastr.success('Updated Successfully');
                // setTimeout( ()=> {
                //   this.router.navigate(['/auth/login']);
                // } , 500);
            }
            else if (type == '3') {
                this.teacherAns = '';
                this.studentAns = '';
                console.log(successData.ResponseObject, 'sudas');
                this.studentAns = successData.ResponseObject[0].student_answer != '' ? parse(successData.ResponseObject[0].student_answer[0].correctAnswer) : '';
                this.teacherAns = successData.ResponseObject[0].correct_answer != '' ? parse(successData.ResponseObject[0].correct_answer) : '';
            }
        }
    }
    saveGraphFailure(error) {
        console.log(error, 'error');
    }
    getRoughWorkEvent(event) {
    }
    getNumericWorkSpaceValue(event) {
        if (event.content != '') {
            this.studentAns2 = event.content;
        }
    }
    // line drawing code  ended
    getEmitedValue(event) {
        this.markType = event;
        console.log(event, 'evet emited');
    }
    getGraphValue(event) {
        this.studentAns1 = event;
    }
    static { this.ɵfac = function StudentGraphComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentGraphComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.ClassService), i0.ɵɵdirectiveInject(i4.ConfigurationService), i0.ɵɵdirectiveInject(i5.DomSanitizer), i0.ɵɵdirectiveInject(i6.FormBuilder), i0.ɵɵdirectiveInject(i7.CreatorService), i0.ɵɵdirectiveInject(i8.ToastrService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i9.ValidationService), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentGraphComponent, selectors: [["app-student-graph"]], decls: 2, vars: 2, consts: [["workspace", ""], ["answer", ""], ["class", "container custom-scrollbar", 4, "ngIf"], [4, "ngIf"], [1, "container", "custom-scrollbar"], [1, "col-12", "mt-3", "customize-card3", 3, "hidden"], [3, "innerHTML"], ["class", "col-12 mt-3", 4, "ngIf"], ["id", "workspace", 1, "col-12", "mt-3", "collapse"], [1, "col-12", "d-flex", "justify-content-center"], [3, "emitEditorValue", "editorPatchValue", "height", "width", "readonly", "id", "showDropBtn", "showInputBtn"], ["id", "answer", 1, "col-12", "collapse"], [1, "col-12", "mt-2", "d-flex", "justify-content-center"], ["class", "col-12 mt-3 d-flex justify-content-center", 4, "ngIf"], [1, "col-12", "mt-0", "d-flex", "justify-content-center"], [3, "emitItem", "valueChange", "editMode", "editPatchValue", "graphId", "questionType"], ["class", "col-12 d-flex justify-content-center mt-3", 4, "ngIf"], [1, "col-12", "mt-3"], ["aria-expanded", "false", "data-toggle", "collapse", 1, "btn-sm", "btn-outline-primary", "mr-2"], [1, "col-12", "mt-3", "d-flex", "justify-content-center"], [1, "col-12", "d-flex", "justify-content-center", "mt-3"], [1, "btn", "btn-primary", "p-3", 3, "click"], [1, "col-md-12", "mt-3", "px-0", "d-flex"], [1, "col-md-6"], [3, "editMode", "editPatchValue", "graphId", "questionType"]], template: function StudentGraphComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, StudentGraphComponent_div_0_Template, 17, 25, "div", 2)(1, StudentGraphComponent_div_1_Template, 13, 12, "div", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.typeId != "3");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.typeId == "3");
        } }, dependencies: [i10.NgIf, i11.TinyMiceComponent, i12.GraphComponentComponent, i13.SanitizeHtmlPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentGraphComponent, [{
        type: Component,
        args: [{ selector: 'app-student-graph', template: "\n<div class=\"container custom-scrollbar\" *ngIf=\"typeId != '3'\">\n    <div [hidden]=\"question == '' || question == undefined\" class=\"col-12 mt-3 customize-card3\">\n        <div [innerHTML]=\"question | sanitizeHtml\"></div>\n    </div>\n    <div class=\"col-12 mt-3\" *ngIf=\"false\">\n        <button [attr.aria-controls]=\"'#workspace'\" [attr.data-target]=\"'#workspace'\" aria-expanded=\"false\" class=\"btn-sm btn-outline-primary mr-2\" data-toggle=\"collapse\">work space</button>\n        <button [attr.aria-controls]=\"'#answer'\" [attr.data-target]=\"'#answer'\" aria-expanded=\"false\" class=\"btn-sm btn-outline-primary mr-2\" data-toggle=\"collapse\">Set Answer</button>\n    </div>\n    <div class=\"col-12 mt-3 collapse\"  id=\"workspace\" #workspace>\n        <div class=\"col-12 d-flex justify-content-center\">\n            <app-tiny-mice (emitEditorValue)=\"getRoughWorkEvent($event)\"\n                           [editorPatchValue]=\"false\"\n                           [height]=\"150\"\n                           [width]=\"600\"\n                           [readonly]=\"false\"\n                           [id]=\"'workspace'\"\n                           [showDropBtn]=\"false\"\n                           [showInputBtn]=\"false\">\n            </app-tiny-mice>\n        </div>\n    </div>\n    <div class=\"col-12 collapse\"  id=\"answer\" #answer>\n        <div class=\"col-12 mt-2 d-flex justify-content-center\">\n            <app-tiny-mice (emitEditorValue)=\"getNumericWorkSpaceValue($event)\"\n                           [editorPatchValue]=\"false\"\n                           [height]=\"150\"\n                           [width]=\"600\"\n                           [readonly]=\"false\"\n                           [id]=\"'answer'\"\n                           [showDropBtn]=\"false\"\n                           [showInputBtn]=\"false\">\n            </app-tiny-mice>\n        </div>\n    </div>\n\n    <div class=\"col-12 mt-3 d-flex justify-content-center\" *ngIf=\"typeId != '3'\">\n        <h4>Draw Type - {{markType ? markType : 'None'}}</h4>\n    </div>\n    <div class=\"col-12 mt-0 d-flex justify-content-center\">\n        <app-graph-component [editMode]=\"editMode\"\n                             [editPatchValue]=\"studentAns1\"\n                             [graphId]=\"'studentAns1'\"\n                             [questionType]=\"'40'\"\n                             (emitItem)=\"getEmitedValue($event)\" (valueChange)=\"getGraphValue($event)\"\n        ></app-graph-component>\n    </div>\n\n\n    <div class=\"col-12 d-flex justify-content-center mt-3\" *ngIf=\"typeId != '3'\">\n        <button class=\"btn btn-primary p-3\" (click)=\"getGraphDetails('1')\">Submit</button>\n    </div>\n</div>\n\n<div *ngIf=\"typeId == '3'\">\n    <div [hidden]=\"question == '' || question == undefined\" class=\"col-12 mt-3 customize-card3\">\n        <div [innerHTML]=\"question | sanitizeHtml\"></div>\n    </div>\n    <div class=\"col-md-12 mt-3 px-0 d-flex\">\n        <div class=\"col-md-6 \">\n<!--            div-disable-->\n            <label>Correct Answer: </label>\n            <app-graph-component [editMode]=\"false\"\n                                 [editPatchValue]=\"teacherAns\"\n                                 [graphId]=\"'teacherAns'\"\n                                 [questionType]=\"questionType\"></app-graph-component>\n        </div>\n        <div class=\"col-md-6\">\n            <label>Student Answer: </label>\n            <app-graph-component [editMode]=\"false\"\n                                 [editPatchValue]=\"studentAns\"\n                                 [graphId]=\"'studentAns'\"\n                                 [questionType]=\"questionType\"></app-graph-component>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.ActivatedRoute }, { type: i0.ChangeDetectorRef }, { type: i3.ClassService }, { type: i4.ConfigurationService }, { type: i5.DomSanitizer }, { type: i6.FormBuilder }, { type: i7.CreatorService }, { type: i8.ToastrService }, { type: i2.Router }, { type: i9.ValidationService }, { type: i2.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentGraphComponent, { className: "StudentGraphComponent" }); })();
//# sourceMappingURL=student-graph.component.js.map