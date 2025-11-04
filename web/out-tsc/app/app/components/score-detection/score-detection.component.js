import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "src/app/shared/service/student.service";
import * as i2 from "src/app/shared/service/auth.service";
import * as i3 from "src/app/shared/service/common-data.service";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
function ScoreDetectionComponent_div_1_tr_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 14);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r1 == null ? null : data_r1.section);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r1 == null ? null : data_r1.raw_score);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r1 == null ? null : data_r1.section_score);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r1 == null ? null : data_r1.max_score);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r1 == null ? null : data_r1.percentage);
} }
function ScoreDetectionComponent_div_1_div_41_tr_27_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "i", 18);
    i0.ɵɵelementEnd();
} }
function ScoreDetectionComponent_div_1_div_41_tr_27_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "i", 19);
    i0.ɵɵelementEnd();
} }
function ScoreDetectionComponent_div_1_div_41_tr_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ScoreDetectionComponent_div_1_div_41_tr_27_td_7_Template, 2, 0, "td", 17)(8, ScoreDetectionComponent_div_1_div_41_tr_27_td_8_Template, 2, 0, "td", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data1_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r3 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data1_r2 == null ? null : data1_r2.answer);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data1_r2 == null ? null : data1_r2.student_answer);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (data1_r2 == null ? null : data1_r2.result) == 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (data1_r2 == null ? null : data1_r2.result) == 0);
} }
function ScoreDetectionComponent_div_1_div_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "p", 8);
    i0.ɵɵtext(2, "Correct: ");
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "p", 8);
    i0.ɵɵtext(6, "Wrong: ");
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10, "Skipped: ");
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p", 16);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "table", 9)(16, "thead", 10)(17, "tr")(18, "th");
    i0.ɵɵtext(19, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Input");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th");
    i0.ɵɵtext(25, "Result");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "tbody");
    i0.ɵɵtemplate(27, ScoreDetectionComponent_div_1_div_41_tr_27_Template, 9, 5, "tr", 12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(data_r4 == null ? null : data_r4.correct);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(data_r4 == null ? null : data_r4.wrong);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(data_r4 == null ? null : data_r4.skipped);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r4 == null ? null : data_r4.section_heading);
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngForOf", data_r4 == null ? null : data_r4.student_answers);
} }
function ScoreDetectionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "p", 8);
    i0.ɵɵtext(6, "Student Name: ");
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 7)(10, "p", 8);
    i0.ɵɵtext(11, "Test: ");
    i0.ɵɵelementStart(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 7)(15, "p", 8);
    i0.ɵɵtext(16, "Test Date: ");
    i0.ɵɵelementStart(17, "strong");
    i0.ɵɵtext(18, "-");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(19, "div", 4)(20, "div", 5)(21, "div", 6)(22, "div", 4)(23, "table", 9)(24, "thead", 10)(25, "tr")(26, "th", 11);
    i0.ɵɵtext(27, "Section");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th");
    i0.ɵɵtext(29, "Raw Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "th");
    i0.ɵɵtext(31, "Section Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "th");
    i0.ɵɵtext(33, "Max Score");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "th");
    i0.ɵɵtext(35, "Percentage");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "tbody");
    i0.ɵɵtemplate(37, ScoreDetectionComponent_div_1_tr_37_Template, 11, 5, "tr", 12);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(38, "div", 4)(39, "div", 5)(40, "div", 6);
    i0.ɵɵtemplate(41, ScoreDetectionComponent_div_1_div_41_Template, 28, 5, "div", 13);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r4.scoreData == null ? null : ctx_r4.scoreData.student_name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r4.scoreData == null ? null : ctx_r4.scoreData.name);
    i0.ɵɵadvance(24);
    i0.ɵɵproperty("ngForOf", ctx_r4.overallData);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r4.answerData);
} }
function ScoreDetectionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 21)(2, "button", 22);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r4.errorStatus);
} }
export class ScoreDetectionComponent {
    constructor(student, auth, commondata, route) {
        this.student = student;
        this.auth = auth;
        this.commondata = commondata;
        this.route = route;
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
    }
    ngOnInit() {
        this.contentScoreDetails();
    }
    contentScoreDetails() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_content_id: this.type
        };
        console.log(data, 'data');
        this.student.contentScore(data).subscribe((successData) => {
            this.contentScoreSuccess(successData);
        }, (error) => {
            this.contentScoreFailure(error);
        });
    }
    contentScoreSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            let data = successData.ResponseObject;
            this.scoreData = data[0];
            this.overallData = data[0]?.overall_score;
            this.answerData = data[0]?.answer_details;
            this.contentScoreStatus = true;
            this.commondata.showLoader(false);
        }
        else {
            this.contentScoreStatus = false;
            this.errorStatus = successData.errorObject;
        }
    }
    contentScoreFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }
    static { this.ɵfac = function ScoreDetectionComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScoreDetectionComponent)(i0.ɵɵdirectiveInject(i1.StudentService), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.CommonDataService), i0.ɵɵdirectiveInject(i4.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScoreDetectionComponent, selectors: [["app-score-detection"]], decls: 3, vars: 2, consts: [[1, "container-fluid"], ["class", "row", 4, "ngIf"], ["class", "row d-flex justify-content-center list-card mt-5", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "card"], [1, "row", "p-3"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "m-0"], [1, "table", "table-bordered", "text-center", "m-0"], [1, "thead-light"], [1, "pl-0", 2, "border-left", "none"], [4, "ngFor", "ngForOf"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "col-3"], [1, "text-center", "p-2", "bg-primary"], [4, "ngIf"], [1, "fa", "fa-check", "text-success"], [1, "fa", "fa-times", "text-danger"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-5"], [1, "col-4"], [1, "nodataList"]], template: function ScoreDetectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, ScoreDetectionComponent_div_1_Template, 42, 4, "div", 1)(2, ScoreDetectionComponent_div_2_Template, 4, 1, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.contentScoreStatus);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.contentScoreStatus);
        } }, dependencies: [i5.NgForOf, i5.NgIf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScoreDetectionComponent, [{
        type: Component,
        args: [{ selector: 'app-score-detection', template: "<div class=\"container-fluid\">\n    <div class=\"row\" *ngIf=\"contentScoreStatus\">\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"row p-3\">\n                    <div class=\"col-12 col-md-6 col-lg-4\">\n                        <p class=\"m-0\">Student Name: <strong>{{scoreData?.student_name}}</strong></p>\n                    </div>\n                    <div class=\"col-12 col-md-6 col-lg-4\">\n                        <p class=\"m-0\">Test: <strong>{{scoreData\n                            ?.name}}</strong></p>\n                    </div>\n                    <div class=\"col-12 col-md-6 col-lg-4\">\n                        <p class=\"m-0\">Test Date: <strong>-</strong></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"row p-3\">\n                    <div class=\"col-12\">\n                        <table class=\"table table-bordered text-center m-0\">\n                            <thead class=\"thead-light\">\n                            <tr>\n                                <th class=\"pl-0\" style=\"border-left: none\">Section</th>\n                                <th>Raw Score</th>\n                                <th>Section Score</th>\n                                <th>Max Score</th>\n                                <th>Percentage</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let data of overallData\">\n                                <td class=\"pl-0\" style=\"border-left: none\">{{data?.section}}</td>\n                                <td>{{data?.raw_score}}</td>\n                                <td>{{data?.section_score}}</td>\n                                <td>{{data?.max_score}}</td>\n            \n                                <td class=\"d-flex justify-content-center align-items-center\">{{data?.percentage}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"row p-3\">\n                    <div class=\"col-3\" *ngFor=\"let data of answerData\">\n                        <p class=\"m-0\">Correct: <strong>{{data?.correct}}</strong></p>\n                        <p class=\"m-0\">Wrong: <strong>{{data?.wrong}}</strong></p>\n                        <p>Skipped: <strong>{{data?.skipped}}</strong></p>\n                        <p class=\"text-center p-2 bg-primary\">{{data?.section_heading}}</p>\n                        <table class=\"table table-bordered text-center m-0\">\n                            <thead class=\"thead-light\">\n                            <tr>\n                                <th>No</th>\n                                <th>Answer</th>\n                                <th>Input</th>\n                                <th>Result</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let data1 of data?.student_answers; let i = index;\">\n                                    <td>{{i+1}}</td>\n                                    <td>{{data1?.answer}}</td>\n                                    <td>{{data1?.student_answer}}</td>\n                                    <td *ngIf=\"data1?.result == 1\"><i class=\"fa fa-check text-success\"></i></td>\n                                    <td *ngIf=\"data1?.result == 0\"><i class=\"fa fa-times text-danger\"></i></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"!contentScoreStatus\">\n        <div class=\"col-4\">\n            <button class=\"nodataList\">{{errorStatus}}</button>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.StudentService }, { type: i2.AuthService }, { type: i3.CommonDataService }, { type: i4.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScoreDetectionComponent, { className: "ScoreDetectionComponent" }); })();
//# sourceMappingURL=score-detection.component.js.map