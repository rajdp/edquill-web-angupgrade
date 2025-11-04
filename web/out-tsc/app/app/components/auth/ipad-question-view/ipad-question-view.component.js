import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../shared/service/creator.service";
import * as i3 from "../../../shared/service/common.service";
import * as i4 from "../../../shared/service/common-data.service";
import * as i5 from "@angular/common";
import * as i6 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
const _c0 = a0 => ({ "div-disable": a0 });
function IpadQuestionViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "img", 8);
    i0.ɵɵelementEnd();
} }
function IpadQuestionViewComponent_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label")(1, "b");
    i0.ɵɵtext(2, "Your Answer");
    i0.ɵɵelementEnd()();
} }
function IpadQuestionViewComponent_div_5_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 10);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r1), i0.ɵɵsanitizeHtml);
} }
function IpadQuestionViewComponent_div_5_tr_10_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 16);
    i0.ɵɵlistener("click", function IpadQuestionViewComponent_div_5_tr_10_td_3_input_1_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r2); const k_r3 = i0.ɵɵnextContext().index; const j_r4 = i0.ɵɵnextContext().index; const ctx_r4 = i0.ɵɵnextContext(); const list_r6 = ctx_r4.$implicit; const i_r7 = ctx_r4.index; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.cfsGetChooseTable(list_r6, i_r7, j_r4, k_r3)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r3 = i0.ɵɵnextContext().index;
    const j_r4 = i0.ɵɵnextContext().index;
    const ctx_r4 = i0.ɵɵnextContext();
    const list_r6 = ctx_r4.$implicit;
    const i_r7 = ctx_r4.index;
    i0.ɵɵpropertyInterpolate2("id", "", j_r4, "chooseSingle", i_r7, "");
    i0.ɵɵpropertyInterpolate2("name", "", i_r7, "choosesingle", j_r4, "corect");
    i0.ɵɵproperty("checked", list_r6.student_answer[j_r4].isSelected === "" ? false : list_r6.student_answer[j_r4].isSelected == k_r3);
} }
function IpadQuestionViewComponent_div_5_tr_10_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 17);
    i0.ɵɵlistener("click", function IpadQuestionViewComponent_div_5_tr_10_td_3_input_2_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r9); const k_r3 = i0.ɵɵnextContext().index; const j_r4 = i0.ɵɵnextContext().index; const ctx_r4 = i0.ɵɵnextContext(); const list_r6 = ctx_r4.$implicit; const i_r7 = ctx_r4.index; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.cfsGetChooseTable(list_r6, i_r7, j_r4, k_r3)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r3 = i0.ɵɵnextContext().index;
    const j_r4 = i0.ɵɵnextContext().index;
    const ctx_r4 = i0.ɵɵnextContext();
    const list_r6 = ctx_r4.$implicit;
    const i_r7 = ctx_r4.index;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate2("id", "", j_r4, "chooseMulti", i_r7, "");
    i0.ɵɵproperty("checked", ctx_r7.splitMultiChoose(list_r6.student_answer[j_r4].isSelected, k_r3));
} }
function IpadQuestionViewComponent_div_5_tr_10_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, IpadQuestionViewComponent_div_5_tr_10_td_3_input_1_Template, 1, 7, "input", 14)(2, IpadQuestionViewComponent_div_5_tr_10_td_3_input_2_Template, 1, 4, "input", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r7.typeId == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r7.typeId == "7");
} }
function IpadQuestionViewComponent_div_5_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 10);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, IpadQuestionViewComponent_div_5_tr_10_td_3_Template, 3, 2, "td", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const list_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, item_r10.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r6.correct_answer);
} }
function IpadQuestionViewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "h3", 10);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementStart(3, "table", 11)(4, "thead")(5, "tr")(6, "th");
    i0.ɵɵtext(7, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, IpadQuestionViewComponent_div_5_th_8_Template, 2, 3, "th", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "tbody");
    i0.ɵɵtemplate(10, IpadQuestionViewComponent_div_5_tr_10_Template, 4, 4, "tr", 13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r6 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 4, list_r6.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, ctx_r7.showId == "4" || ctx_r7.showId == "3"));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", list_r6.correct_answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r6.student_answer);
} }
function IpadQuestionViewComponent_div_6_div_4_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 10);
    i0.ɵɵpipe(1, "sanitizeHtml");
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, item_r11), i0.ɵɵsanitizeHtml);
} }
function IpadQuestionViewComponent_div_6_div_4_tr_10_td_3_input_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 21);
} if (rf & 2) {
    const k_r12 = i0.ɵɵnextContext().index;
    const j_r13 = i0.ɵɵnextContext().index;
    const ctx_r13 = i0.ɵɵnextContext();
    const list_r15 = ctx_r13.$implicit;
    const i_r16 = ctx_r13.index;
    i0.ɵɵpropertyInterpolate2("name", "", i_r16, "choosesingle", j_r13, "corect");
    i0.ɵɵproperty("checked", list_r15.heading_option[j_r13].correctActive == k_r12.toString());
} }
function IpadQuestionViewComponent_div_6_div_4_tr_10_td_3_input_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 22);
} if (rf & 2) {
    const k_r12 = i0.ɵɵnextContext().index;
    const j_r13 = i0.ɵɵnextContext().index;
    const i_r16 = i0.ɵɵnextContext().index;
    i0.ɵɵpropertyInterpolate3("id", "chooseMultipass", i_r16, "", j_r13, "", k_r12, "");
} }
function IpadQuestionViewComponent_div_6_div_4_tr_10_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, IpadQuestionViewComponent_div_6_div_4_tr_10_td_3_input_1_Template, 1, 4, "input", 19)(2, IpadQuestionViewComponent_div_6_div_4_tr_10_td_3_input_2_Template, 1, 4, "input", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r7.typeId == "5");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r7.typeId == "7");
} }
function IpadQuestionViewComponent_div_6_div_4_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelement(1, "td", 10);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵtemplate(3, IpadQuestionViewComponent_div_6_div_4_tr_10_td_3_Template, 3, 2, "td", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const list_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 2, item_r17.options), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r15.correct_answer);
} }
function IpadQuestionViewComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "h3", 10);
    i0.ɵɵpipe(2, "sanitizeHtml");
    i0.ɵɵelementStart(3, "table", 18)(4, "thead")(5, "tr")(6, "th");
    i0.ɵɵtext(7, "Questions");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, IpadQuestionViewComponent_div_6_div_4_th_8_Template, 2, 3, "th", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "tbody");
    i0.ɵɵtemplate(10, IpadQuestionViewComponent_div_6_div_4_tr_10_Template, 4, 4, "tr", 13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r15 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 3, list_r15.question), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", list_r15.correct_answer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r15.student_answer);
} }
function IpadQuestionViewComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "label")(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(4, IpadQuestionViewComponent_div_6_div_4_Template, 11, 5, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Correct Answer", ctx_r7.showId, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r7.questionDetails);
} }
export class IpadQuestionViewComponent {
    constructor(route, creator, common, commondata) {
        this.route = route;
        this.creator = creator;
        this.common = common;
        this.commondata = commondata;
        this.totalAns = [];
        this.route.params.forEach((params) => {
            this.studentId = params.studentId;
            this.cId = params.cId;
            this.qId = params.qId;
            this.classId = params.classId;
            this.typeId = params.typeId;
            this.showId = params.showID;
            console.log(this.showId, 'showId');
        });
        console.log(this.typeId, 'typeId');
        this.SelectTypeId = '2';
        // this.data = [{
        //   name: 'a',
        //   id: 1
        // }, {
        //   name: 'b',
        //   id: 2
        // },
        //   {
        //     name: 'c',
        //     id: 3
        //   }, {
        //     name: 'd',
        //     id: 4
        //   },
        //   {
        //     name: 'e',
        //     id: 5
        //   }, {
        //     name: 'f',
        //     id: 6
        //   },
        //   {
        //     name: 'g',
        //     id: 7
        //   }, {
        //     name: 'h',
        //     id: 8
        //   },
        //   {
        //     name: 'i',
        //     id: 9
        //   }, {
        //     name: 'j',
        //     id: 10
        //   },
        //   {
        //     name: 'k',
        //     id: 11
        //   }, {
        //     name: 'l',
        //     id: 12
        //   },
        //   {
        //     name: 'm',
        //     id: 13
        //   }, {
        //     name: 'n',
        //     id: 14
        //   },
        //   {
        //     name: 'o',
        //     id: 15
        //   }, {
        //     name: 'p',
        //     id: 16
        //   }, {
        //     name: 'q',
        //     id: 17
        //   }, {
        //     name: 'r',
        //     id: 18
        //   },
        //   {
        //     name: 's',
        //     id: 19
        //   }, {
        //     name: 't',
        //     id: 20
        //   },
        //   {
        //     name: 'u',
        //     id: 21
        //   }, {
        //     name: 'v',
        //     id: 22
        //   },
        //   {
        //     name: 'w',
        //     id: 23
        //   }, {
        //     name: 'x',
        //     id: 24
        //   },
        //   {
        //     name: 'y',
        //     id: 25
        //   }, {
        //     name: 'z',
        //     id: 26
        //   }];
    }
    ngOnInit() {
        this.getViewScratchQuestions('2');
    }
    cfsGetChooseTable(item, index, row, column) {
        console.log(item, 'item');
        console.log(index, 'index');
        console.log(row, 'row');
        console.log(column, 'column');
        if (this.typeId == '5') {
            for (let i = 0; i < item.student_answer.length; i++) {
                if (i === row) {
                    item.student_answer[i].isSelected = column.toString();
                    console.log(item.student_answer[i].isSelected, 'coloumn');
                }
            }
            console.log(item.student_answer, 'add');
        }
        else if (this.typeId == '7') {
            for (let i = 0; i < item.student_answer.length; i++) {
                let val = '';
                if (item.student_answer[i].isSelected !== '') {
                    let value = item.student_answer[i].isSelected.toString();
                    let split = value.split(',');
                    let repeat = false;
                    for (let y = 0; y < split.length; y++) {
                        if (split[y] == column) {
                            split.splice(y, 1);
                            repeat = true;
                        }
                    }
                    if (repeat == true) {
                        val = split.join(',');
                    }
                    else {
                        val = item.student_answer[i].isSelected + ',' + column;
                    }
                }
                else {
                    val = column.toString();
                }
                if (i === row) {
                    item.student_answer[i].isSelected = val.toString();
                    console.log(item.student_answer[i].isSelected, 'ewfd');
                }
            }
        }
        this.answer = item.student_answer;
        console.log(this.answer, 'answer');
        this.getViewScratchQuestions('1');
    }
    splitMultiChoose(val, index) {
        let values = val.toString();
        let value = values.split(',');
        for (let i = 0; i < value.length; i++) {
            if (parseInt(value[i]) === parseInt(index)) {
                return true;
            }
        }
    }
    getViewScratchQuestions(id) {
        const data = {
            platform: 'web',
            student_id: this.studentId,
            question_id: this.qId,
            content_id: this.cId,
            class_id: this.classId,
            content_format: '3',
            type: id
        };
        if (id == '1') {
            data['student_answer'] = this.answer;
        }
        this.creator.viewScratchQuestions(data).subscribe((successData) => {
            this.viewScratchQuestionsSuccess(successData, id);
        }, (error) => {
            this.viewScratchQuestionsFailure(error);
        });
    }
    viewScratchQuestionsSuccess(successData, id) {
        if (successData.IsSuccess) {
            if (id == '2') {
                this.questionDetails = successData.ResponseObject;
                console.log(this.questionDetails, 'questions');
                if (this.showId == '3') {
                    this.totalAns = this.questionDetails;
                    setTimeout(() => {
                        for (let i = 0; i < this.totalAns.length; i++) {
                            for (let j = 0; j < this.totalAns[i].heading_option.length; j++) {
                                let index = i;
                                let row = this.totalAns[i].heading_option[j].correctActive;
                                let column = this.totalAns[i].heading_option[j].correctAnswer;
                                let final = index.toString() + row.toString() + column.toString();
                                document.getElementById('chooseMultipass' + final).setAttribute('checked', 'true');
                            }
                        }
                    }, 500);
                }
            }
        }
    }
    viewScratchQuestionsFailure(error) { }
    static { this.ɵfac = function IpadQuestionViewComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || IpadQuestionViewComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.CreatorService), i0.ɵɵdirectiveInject(i3.CommonService), i0.ɵɵdirectiveInject(i4.CommonDataService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: IpadQuestionViewComponent, selectors: [["app-ipad-question-view"]], decls: 7, vars: 4, consts: [["id", "pre-loader", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-12", "mt-4", "table-responsive-ipad"], [4, "ngIf"], ["class", "col-12 card p-3", 4, "ngFor", "ngForOf"], ["class", "col-12 mt-4 table-responsive-ipad", 4, "ngIf"], ["id", "pre-loader"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", ""], [1, "col-12", "card", "p-3"], [3, "innerHTML"], [1, "table", "table-bordered", "text-center", 3, "ngClass"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["class", "radio_animated", "type", "radio", 3, "checked", "id", "name", "click", 4, "ngIf"], ["type", "checkbox", 3, "checked", "id", "click", 4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "click", "checked", "id", "name"], ["type", "checkbox", 3, "click", "checked", "id"], [1, "table", "table-bordered", "text-center", "div-disable"], ["class", "radio_animated", "type", "radio", 3, "checked", "name", 4, "ngIf"], ["type", "checkbox", 3, "id", 4, "ngIf"], ["type", "radio", 1, "radio_animated", 3, "checked", "name"], ["type", "checkbox", 3, "id"]], template: function IpadQuestionViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, IpadQuestionViewComponent_div_0_Template, 2, 0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵtemplate(4, IpadQuestionViewComponent_label_4_Template, 3, 0, "label", 4)(5, IpadQuestionViewComponent_div_5_Template, 11, 8, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, IpadQuestionViewComponent_div_6_Template, 5, 2, "div", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.commondata.loader.value);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.showId == "3");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.questionDetails);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showId == "3");
        } }, dependencies: [i5.NgClass, i5.NgForOf, i5.NgIf, i6.SanitizeHtmlPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IpadQuestionViewComponent, [{
        type: Component,
        args: [{ selector: 'app-ipad-question-view', template: "<!--=================================\n preloader -->\n<div id=\"pre-loader\" *ngIf=\"commondata.loader.value\">\n    <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 mt-4 table-responsive-ipad\">\n            <label *ngIf=\"showId == '3'\"><b>Your Answer</b></label>\n            <div *ngFor=\"let list of questionDetails; let i = index\" class=\"col-12 card p-3\">\n                <h3 [innerHTML]=\"list.question | sanitizeHtml\"></h3>\n                <table class=\"table table-bordered text-center\" [ngClass]=\"{'div-disable' : (showId == '4') || (showId == '3')}\">\n                    <thead>\n                    <tr>\n                        <th>Questions</th>\n                        <th *ngFor=\"let item of list.correct_answer; let j=index\" [innerHTML]=\"item | sanitizeHtml\"></th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr  *ngFor=\"let item of list.student_answer; let j=index\">\n                        <td [innerHTML]=\"item.options | sanitizeHtml\"></td>\n                        <td *ngFor=\"let chk of list.correct_answer; let k=index\">\n                            <input (click)=\"cfsGetChooseTable(list, i, j, k)\" *ngIf=\"typeId == '5'\" [checked]=\"list.student_answer[j].isSelected === '' ? false : list.student_answer[j].isSelected == k\" class=\"radio_animated\" id=\"{{j}}chooseSingle{{i}}\" name=\"{{i}}choosesingle{{j}}corect\" type=\"radio\">\n                            <input (click)=\"cfsGetChooseTable(list, i, j, k)\" *ngIf=\"typeId == '7'\" [checked]=\"splitMultiChoose(list.student_answer[j].isSelected, k)\" id=\"{{j}}chooseMulti{{i}}\" type=\"checkbox\">\n<!--                            <input id=\"checkMulti{{i}}{{j}}{{k}}\" type=\"checkbox\">-->\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div class=\"col-12 mt-4 table-responsive-ipad\" *ngIf=\"showId == '3'\">\n            <label><b>Correct Answer{{showId}}</b></label>\n            <div *ngFor=\"let list of questionDetails; let i = index\" class=\"col-12 card p-3\">\n                <h3 [innerHTML]=\"list.question | sanitizeHtml\"></h3>\n                <table class=\"table table-bordered text-center div-disable\">\n                    <thead>\n                    <tr>\n                        <th>Questions</th>\n                        <th *ngFor=\"let item of list.correct_answer; let j=index\" [innerHTML]=\"item | sanitizeHtml\"></th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr  *ngFor=\"let item of list.student_answer; let j=index\">\n                        <td [innerHTML]=\"item.options | sanitizeHtml\"></td>\n                        <td *ngFor=\"let chk of list.correct_answer; let k=index\">\n                            <input *ngIf=\"typeId == '5'\" [checked]=\"list.heading_option[j].correctActive == k.toString()\" class=\"radio_animated\" name=\"{{i}}choosesingle{{j}}corect\" type=\"radio\">\n                            <input *ngIf=\"typeId == '7'\" id=\"chooseMultipass{{i}}{{j}}{{k}}\" type=\"checkbox\">\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.CreatorService }, { type: i3.CommonService }, { type: i4.CommonDataService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(IpadQuestionViewComponent, { className: "IpadQuestionViewComponent" }); })();
//# sourceMappingURL=ipad-question-view.component.js.map