import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/class.service";
import * as i3 from "../../../shared/service/creator.service";
import * as i4 from "../../../shared/service/content.service";
import * as i5 from "../../../shared/service/configuration.service";
import * as i6 from "@angular/platform-browser";
import * as i7 from "@angular/router";
import * as i8 from "@angular/common";
const _c0 = a0 => ({ "active2": a0 });
function AddQuestionsComponent_div_14_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function AddQuestionsComponent_div_14_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const list_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.questionType(list_r2.resource_type)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r2.questionsItems == list_r2.resource_type));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r2.resource_type);
} }
function AddQuestionsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AddQuestionsComponent_div_14_button_1_Template, 2, 4, "button", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.checkNeedToShow(list_r2));
} }
function AddQuestionsComponent_div_16_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 19);
    i0.ɵɵlistener("click", function AddQuestionsComponent_div_16_div_1_div_2_Template_div_click_1_listener() { const list_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.questionsSelected(list_r5)); });
    i0.ɵɵelementStart(2, "h5", 20);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "img", 21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r5.question_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + list_r5.image_path), i0.ɵɵsanitizeUrl);
} }
function AddQuestionsComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 7);
    i0.ɵɵtemplate(2, AddQuestionsComponent_div_16_div_1_div_2_Template, 5, 2, "div", 17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const details_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", details_r6.types);
} }
function AddQuestionsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, AddQuestionsComponent_div_16_div_1_Template, 3, 1, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const details_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.questionsItems == details_r6.resource_type);
} }
export class AddQuestionsComponent {
    constructor(auth, classService, creator, contentService, config, sanitizer, router, route) {
        this.auth = auth;
        this.classService = classService;
        this.creator = creator;
        this.contentService = contentService;
        this.config = config;
        this.sanitizer = sanitizer;
        this.router = router;
        this.route = route;
        this.showApiFeedBackTypeQns = true;
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.webhost = this.config.getimgUrl();
        if (this.type == 'add') {
            this.questionsItems = 'multipleChoice';
        }
        else if (this.type == 'edit') {
        }
    }
    ngOnInit() {
        const editData = JSON.parse(this.auth.getSessionData('editresources'));
        this.contentName = editData.name;
        this.contentQuestion();
        this.creator.changeViewList(true);
        const qnsList = JSON.parse(this.auth.getSessionData('qnsList'));
        this.showApiFeedBackTypeQns = qnsList ? qnsList.length == 0 : true;
        console.log(this.showApiFeedBackTypeQns);
    }
    ngOnDestroy() {
        this.creator.changeViewList(false);
    }
    checkNeedToShow(data) {
        return data.resource_type == 'Essay Writing' && data.types.some(qns => qns.question_type_id == '55') && !this.showApiFeedBackTypeQns;
    }
    backAction() {
        this.auth.setSessionData('cfs_question_no', '');
        this.router.navigate(['content-text-resource/text-assignment/qEdit']);
    }
    contentQuestion() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_format: '3'
        };
        this.contentService.contentQuestion(data).subscribe((successData) => {
            this.gradeListSuccess(successData);
        }, (error) => {
            this.gradeListFailure(error);
        });
    }
    gradeListSuccess(successData) {
        if (successData.IsSuccess) {
            this.contentQuestionList = successData.ResponseObject;
            this.questionsItems = this.contentQuestionList[0].resource_type;
        }
    }
    gradeListFailure(error) { }
    questionType(type) {
        this.questionsItems = type;
    }
    questionsSelected(value) {
        console.log(value, 'questionValue');
        this.auth.setSessionData('questionID', value.question_type_id);
        this.router.navigate(['/content-text-resource/question-paper/add']);
    }
    static { this.ɵfac = function AddQuestionsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddQuestionsComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ClassService), i0.ɵɵdirectiveInject(i3.CreatorService), i0.ɵɵdirectiveInject(i4.ContentService), i0.ɵɵdirectiveInject(i5.ConfigurationService), i0.ɵɵdirectiveInject(i6.DomSanitizer), i0.ɵɵdirectiveInject(i7.Router), i0.ɵɵdirectiveInject(i7.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddQuestionsComponent, selectors: [["app-add-questions"]], decls: 17, vars: 3, consts: [[1, "container-fluid"], [1, "row", "mb-1"], [1, "col-md-6", "align-self-center"], [1, "color-primary", "pull-left"], [1, "col-md-6"], [1, "btn", "btn-outline-primary", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-left", "fa-1x"], [1, "row"], [1, "col-3"], [1, "col-12", "mt-3"], [4, "ngFor", "ngForOf"], [1, "col-8"], ["class", "row", 4, "ngFor", "ngForOf"], ["class", "btn-dashboard w-100", 3, "ngClass", "click", 4, "ngIf"], [1, "btn-dashboard", "w-100", 3, "click", "ngClass"], ["class", "col-12", 4, "ngIf"], [1, "col-12"], ["class", "col-6 mt-3", 4, "ngFor", "ngForOf"], [1, "col-6", "mt-3"], [1, "question-card", "cursor", 3, "click"], [1, "letter"], ["alt", "Multiple Choice-Standard", 1, "w-100", 3, "src"]], template: function AddQuestionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4")(4, "span", 3);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(6, "div", 4)(7, "button", 5);
            i0.ɵɵlistener("click", function AddQuestionsComponent_Template_button_click_7_listener() { return ctx.backAction(); });
            i0.ɵɵelement(8, "i", 6);
            i0.ɵɵtext(9, " Back");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 7)(11, "div", 8)(12, "div", 7)(13, "div", 9);
            i0.ɵɵtemplate(14, AddQuestionsComponent_div_14_Template, 2, 1, "div", 10);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(15, "div", 11);
            i0.ɵɵtemplate(16, AddQuestionsComponent_div_16_Template, 2, 1, "div", 12);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.contentName);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngForOf", ctx.contentQuestionList);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.contentQuestionList);
        } }, dependencies: [i8.NgClass, i8.NgForOf, i8.NgIf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddQuestionsComponent, [{
        type: Component,
        args: [{ selector: 'app-add-questions', template: "<div class=\"container-fluid\">\n<!--    add questions side topics and inside images-->\n    <div class=\"row mb-1\">\n<!--        <div class=\"col-md-12\">-->\n            <div class=\"col-md-6 align-self-center\">\n                <h4><span class=\"color-primary pull-left\">{{contentName}}</span></h4>\n            </div>\n            <div class=\"col-md-6\">\n                <button class=\"btn btn-outline-primary pull-right\" (click)=\"backAction()\"><i class=\"fa fa-long-arrow-left fa-1x\" aria-hidden=\"true\"></i> Back</button>\n            </div>\n<!--        </div>-->\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3\">\n            <div class=\"row\">\n                <div class=\"col-12 mt-3\">\n                    <div *ngFor=\"let list of contentQuestionList\">\n                        <button *ngIf=\"!checkNeedToShow(list)\" class=\"btn-dashboard w-100\"  [ngClass]=\"{'active2': questionsItems == list.resource_type}\" (click)=\"questionType(list.resource_type)\">{{list.resource_type}}</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-8\">\n            <div class=\"row\" *ngFor=\"let details of contentQuestionList\">\n                <div class=\"col-12\" *ngIf=\"questionsItems == details.resource_type\">\n                    <div class=\"row\">\n                        <div class=\"col-6 mt-3\"  *ngFor=\"let list of details.types\">\n                            <div class=\"question-card cursor\" (click)=\"questionsSelected(list)\">\n                                <h5 class=\"letter\">{{list.question_type}}</h5>\n                                <img class=\"w-100\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + list.image_path)\" alt=\"Multiple Choice-Standard\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.ClassService }, { type: i3.CreatorService }, { type: i4.ContentService }, { type: i5.ConfigurationService }, { type: i6.DomSanitizer }, { type: i7.Router }, { type: i7.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddQuestionsComponent, { className: "AddQuestionsComponent" }); })();
//# sourceMappingURL=add-questions.component.js.map