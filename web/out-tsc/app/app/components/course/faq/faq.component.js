import { Component } from '@angular/core';
import { urls } from '../../../shared/utils/urls';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/router";
import * as i4 from "../../../shared/service/newsubject.service";
import * as i5 from "@angular/common";
import * as i6 from "@ng-select/ng-select";
function FaqComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "button", 14);
    i0.ɵɵtext(2, "Add Course FAQ");
    i0.ɵɵelementEnd()();
} }
function FaqComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 16);
    i0.ɵɵelement(2, "img", 17);
    i0.ɵɵelementStart(3, "p")(4, "strong");
    i0.ɵɵtext(5, "No Data Found");
    i0.ɵɵelementEnd()()()();
} }
function FaqComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 18)(4, "div", 23)(5, "h4", 24);
    i0.ɵɵtext(6);
    i0.ɵɵelement(7, "span", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "p", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 26)(10, "p")(11, "i", 27);
    i0.ɵɵlistener("click", function FaqComponent_div_14_div_1_Template_i_click_11_listener() { const faq_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.editFaqDetails(faq_r2)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "p")(13, "span", 28);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const faq_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", i_r4 + 1, ". ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", faq_r2.title, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", faq_r2.answer, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", faq_r2.status == "A" ? "text-success" : "text-danger");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(faq_r2.status == "A" ? "Active" : "Suspended");
} }
function FaqComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, FaqComponent_div_14_div_1_Template, 15, 5, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.faqListDetails);
} }
export class FaqComponent {
    constructor(auth, builder, router, newService) {
        this.auth = auth;
        this.builder = builder;
        this.router = router;
        this.newService = newService;
        this.courseListData = [];
        this.courseFaqSelected = '';
        this.faqListDetails = [];
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        if (this.schoolStatus.length != 0) {
            this.newService.schoolChange.subscribe((res) => {
                if (res != '') {
                    if (this.router.url.includes('/course/faq/list')) {
                        this.getCourseList();
                    }
                }
                else {
                    this.getCourseList();
                }
            });
        }
        this.newService.allowSchoolChange(false);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        const getSearchValue = JSON.parse(this.auth.getSessionData('commonInputSearchValue'));
        if (getSearchValue) {
            getSearchValue['courseFaqSearchValue'].course_id = this.courseFaqSelected;
            this.auth.setSessionData('commonInputSearchValue', JSON.stringify(getSearchValue));
        }
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
        this.courseListData.unshift({ course_name: 'All Course', course_id: '' });
        const getSearchValue = JSON.parse(this.auth.getSessionData('commonInputSearchValue'));
        this.courseFaqSelected = getSearchValue['courseFaqSearchValue'].course_id ?? '';
        this.getFaqListData({ course_id: this.courseFaqSelected ?? '' });
    }
    getFaqListData(eve) {
        console.log(eve.course_id);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            course_id: eve == '' ? '' : eve.course_id
        };
        this.auth.postService(data, urls.faqList).subscribe((successData) => {
            this.getFaqListSuccess(successData);
        }, (error) => {
            console.error(error, ' error');
        });
    }
    getFaqListSuccess(successData) {
        this.faqListDetails = successData.IsSuccess ? successData.ResponseObject : [];
    }
    editFaqDetails(value) {
        this.router.navigate(['/course/faq/edit']);
        this.auth.setSessionData('getFaqDetails', JSON.stringify(value));
    }
    static { this.ɵfac = function FaqComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FaqComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FaqComponent, selectors: [["app-faq"]], decls: 15, vars: 6, consts: [[1, "row", "mt-3"], [1, "col-xl-12", "mb-30"], [1, "card"], [1, "card-header"], [1, "px-0"], [1, "card-body"], [1, "row", "mb-4"], [1, "col-4"], [2, "font-weight", "600"], ["bindLabel", "course_name", "bindValue", "course_id", "placeholder", "Select Course", "typeToSearchText", "", 3, "ngModelChange", "change", "items", "clearable", "ngModel"], ["class", "col-8 d-flex align-items-end justify-content-end", 4, "ngIf"], ["class", "row d-flex align-items-center justify-content-center my-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-8", "d-flex", "align-items-end", "justify-content-end"], ["routerLink", "/course/faq/add", 1, "btn", "btn-primary", "pull-right"], [1, "row", "d-flex", "align-items-center", "justify-content-center", "my-5"], [1, "col-6", "p-5", "text-center"], ["src", "assets/images/nodatafound.jpg", "alt", "No Data Found", "title", "No Data Found", 1, "w-50"], [1, "row"], ["class", "col-12 my-3", 4, "ngFor", "ngForOf"], [1, "col-12", "my-3"], [1, "card", "p-3"], [1, "car-body"], [1, "col-10", "col-lg-11"], [1, "d-flex"], [3, "innerHTML"], [1, "col-2", "col-lg-1", "text-center", "px-0"], ["aria-hidden", "true", "title", "Edit", 1, "fa", "fa-solid", "fa-2x", "fa-edit", "cursor", "text-right", 2, "color", "#00bfff", 3, "click"], [3, "ngClass"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
            i0.ɵɵtext(5, "Course FAQ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "label", 8);
            i0.ɵɵtext(10, "Select Course");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "ng-select", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function FaqComponent_Template_ng_select_ngModelChange_11_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.courseFaqSelected, $event) || (ctx.courseFaqSelected = $event); return $event; });
            i0.ɵɵlistener("change", function FaqComponent_Template_ng_select_change_11_listener($event) { return ctx.getFaqListData($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(12, FaqComponent_div_12_Template, 3, 0, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(13, FaqComponent_div_13_Template, 6, 0, "div", 11)(14, FaqComponent_div_14_Template, 2, 1, "div", 12);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("items", ctx.courseListData)("clearable", false);
            i0.ɵɵtwoWayProperty("ngModel", ctx.courseFaqSelected);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.courseFaqSelected);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.faqListDetails.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.faqListDetails.length != 0);
        } }, dependencies: [i5.NgClass, i5.NgForOf, i5.NgIf, i3.RouterLink, i2.NgControlStatus, i2.NgModel, i6.NgSelectComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FaqComponent, [{
        type: Component,
        args: [{ selector: 'app-faq', template: "<div class=\"row mt-3\">\n    <div class=\"col-xl-12 mb-30\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h5 class=\"px-0\">Course FAQ</h5>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row mb-4\">\n                    <div class=\"col-4\">\n                        <label style=\"font-weight: 600\">Select Course</label>\n                        <ng-select\n                                [items]=\"courseListData\"\n                                bindLabel=\"course_name\"\n                                bindValue=\"course_id\"\n                                placeholder=\"Select Course\"\n                                typeToSearchText=\"\"\n                                [clearable]=\"false\"\n                                [(ngModel)]=\"courseFaqSelected\"\n                                (change)=\"getFaqListData($event)\">\n                        </ng-select>\n                    </div>\n\n                    <div class=\"col-8 d-flex align-items-end justify-content-end\" *ngIf=\"courseFaqSelected\">\n                        <button class=\"btn btn-primary pull-right\" routerLink=\"/course/faq/add\">Add Course FAQ</button>\n                    </div>\n                </div>\n                <div class=\"row d-flex align-items-center justify-content-center my-5\" *ngIf=\"faqListDetails.length == 0\">\n                    <div class=\"col-6 p-5 text-center\">\n                        <img class=\"w-50\" src=\"assets/images/nodatafound.jpg\" alt=\"No Data Found\" title=\"No Data Found\"/>\n                        <p><strong>No Data Found</strong></p>\n                    </div>\n                </div>\n                <div class=\"row\" *ngIf=\"faqListDetails.length != 0\">\n                    <div class=\"col-12 my-3\" *ngFor=\"let faq of faqListDetails; let i = index;\">\n                        <div class=\"card p-3\">\n                            <div class=\"car-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-10 col-lg-11\">\n                                        <h4 class=\"d-flex\">{{i+1}}. <span [innerHTML]=\"faq.title\"></span></h4>\n                                        <p [innerHTML]=\"faq.answer\"></p>\n                                    </div>\n                                    <div class=\"col-2 col-lg-1 text-center px-0\">\n                                        <p><i class=\"fa fa-solid fa-2x fa-edit cursor text-right\" aria-hidden=\"true\" (click)=\"editFaqDetails(faq)\" style=\"color:#00bfff;\" title=\"Edit\"></i></p>\n                                        <p><span [ngClass]=\"faq.status == 'A' ? 'text-success' : 'text-danger'\">{{faq.status == 'A' ? 'Active' : 'Suspended'}}</span></p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.FormBuilder }, { type: i3.Router }, { type: i4.NewsubjectService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FaqComponent, { className: "FaqComponent" }); })();
//# sourceMappingURL=faq.component.js.map