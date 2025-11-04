import { Component, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/student.service";
import * as i3 from "ngx-toastr";
import * as i4 from "@ng-bootstrap/ng-bootstrap";
import * as i5 from "../../../shared/service/class.service";
import * as i6 from "@angular/common";
import * as i7 from "@ng-select/ng-select";
import * as i8 from "../../../shared/pipes/custom-date-format.pipe";
const _c0 = ["upgrade"];
function UpgradeComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 16);
    i0.ɵɵlistener("click", function UpgradeComponent_tr_26_Template_tr_click_0_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; return i0.ɵɵresetView(item_r3.selected = !item_r3.selected); });
    i0.ɵɵelementStart(1, "td");
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
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "customDateFormat");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", item_r3.selected ? "table-success" : "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.first_name + " " + item_r3.last_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.email_id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.grade_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 6, item_r3.upgrade_date));
} }
function UpgradeComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18);
    i0.ɵɵtext(2, "No student available");
    i0.ɵɵelementEnd()();
} }
function UpgradeComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "h4", 20);
    i0.ɵɵtext(2, "Upgrade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 21);
    i0.ɵɵlistener("click", function UpgradeComponent_ng_template_28_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 22)(5, "div", 1)(6, "div")(7, "div", 23)(8, "span");
    i0.ɵɵtext(9, "Last Upgrade:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, "\u00A0 \u00A0 ");
    i0.ɵɵelementStart(11, "h4", 24);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p", 20);
    i0.ɵɵtext(14, "Are you sure ? Do you want to upgrade all student in this institution");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(15, "div", 25)(16, "button", 26);
    i0.ɵɵlistener("click", function UpgradeComponent_ng_template_28_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r4); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.upgradeSelectedStudent()); });
    i0.ɵɵtext(17, "Confirm");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r4.lastUpgrade);
} }
export class UpgradeComponent {
    constructor(auth, student, toastr, modalService, classes) {
        this.auth = auth;
        this.student = student;
        this.toastr = toastr;
        this.modalService = modalService;
        this.classes = classes;
        this.gradeData = [];
        this.listData = [];
        this.listDataAlt = [];
    }
    ngOnInit() {
        this.gradeList();
        this.studentList();
    }
    openUpgradeAlert() {
        this.lastUpgrade = this.listData[0].upgrade_date;
        this.modalRef = this.modalService.open(this.upgrade, { size: 'md', backdrop: 'static' });
    }
    upgradeSelectedStudent() {
        this.updateArr();
        const studentArray = [];
        this.listDataAlt.forEach((item) => {
            if (item.selected == true) {
                studentArray.push(item.user_id);
            }
        });
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: studentArray
        };
        this.student.studentUpgrade(data).subscribe((successData) => {
            this.gradingSuccess(successData);
        }, (error) => {
            console.log(error, 'error');
        });
    }
    gradingSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.close();
            this.studentList();
        }
    }
    studentList() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.student.getStudentList(data).subscribe((successData) => {
            this.studentListSuccess(successData);
        }, (error) => {
            console.log(error, 'error');
        });
    }
    studentListSuccess(successData) {
        if (successData.IsSuccess) {
            this.listData = successData.ResponseObject;
            this.listData.forEach((value, index) => {
                value.selected = false;
                this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
                    'Inactive' : this.listData[index].status == 3 ? 'Suspended' : this.listData[index].status == 4 ? 'Deleted' : '';
            });
            this.listDataAlt = JSON.parse(JSON.stringify(this.listData));
        }
    }
    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classes.gradeList(data).subscribe((successData) => {
            this.gradeListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_gradeList');
        });
    }
    gradeListSuccess(successData) {
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
        }
    }
    updateArr() {
        this.listDataAlt.forEach((item) => {
            this.listData.forEach((val) => {
                if (item.user_id == val.user_id) {
                    item.selected = val.selected;
                }
            });
        });
    }
    filterByGrade(event) {
        this.updateArr();
        if (event == undefined) {
            this.listData = this.listDataAlt;
        }
        else {
            this.listData = this.listDataAlt.filter((item) => {
                return item.grade_id == event.grade_id;
            });
        }
    }
    close() {
        this.modalRef.close();
    }
    static { this.ɵfac = function UpgradeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UpgradeComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.StudentService), i0.ɵɵdirectiveInject(i3.ToastrService), i0.ɵɵdirectiveInject(i4.NgbModal), i0.ɵɵdirectiveInject(i5.ClassService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UpgradeComponent, selectors: [["app-upgrade"]], viewQuery: function UpgradeComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.upgrade = _t.first);
        } }, decls: 30, vars: 4, consts: [["upgrade", ""], [1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "row", "px-3", "d-flex", "justify-content-between"], [1, "col-md-6", "px-0"], ["bindLabel", "grade_name", "bindValue", "grade_id", "placeholder", "Grade filter", "typeToSearchText", "", 1, "col-md-5", "px-0", 3, "change", "items"], [1, "btn", "btn-primary", 3, "click"], [1, "row", "px-3", "my-3", "table-responsive-xl"], [1, "table", "table-hover"], [1, "thead-dark"], ["scope", "col"], [3, "hidden"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "col-12 px-0", 4, "ngIf"], [3, "click", "ngClass"], [1, "col-12", "px-0"], [1, "d-flex", "justify-content-center", "align-items-center", "color-primary", "font-weight-bold", 2, "height", "30vh", "width", "100%"], [1, "modal-header", "d-flex", "justify-content-between"], [1, "mb-0"], [1, "fa", "fa-times-circle", "cursor", 2, "font-size", "1.2rem", 3, "click"], [1, "modal-body", 2, "border", "0"], [1, "d-flex"], [1, "font-weight-bold", "color-primary"], [1, "modal-footer"], [1, "btn", "btn-primary", "pull-right", 3, "click"]], template: function UpgradeComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h5");
            i0.ɵɵtext(4, "Upgrade Student");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "ng-select", 7);
            i0.ɵɵlistener("change", function UpgradeComponent_Template_ng_select_change_8_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.filterByGrade($event)); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "button", 8);
            i0.ɵɵlistener("click", function UpgradeComponent_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.openUpgradeAlert()); });
            i0.ɵɵtext(10, "Upgrade");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 9)(12, "table", 10)(13, "thead", 11)(14, "tr")(15, "th", 12);
            i0.ɵɵtext(16, "Student Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "th", 12);
            i0.ɵɵtext(18, "E-Mail");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "th", 12);
            i0.ɵɵtext(20, "Grade");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "th", 12);
            i0.ɵɵtext(22, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "th", 12);
            i0.ɵɵtext(24, "Last Upgrade");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(25, "tbody", 13);
            i0.ɵɵtemplate(26, UpgradeComponent_tr_26_Template, 12, 8, "tr", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(27, UpgradeComponent_div_27_Template, 3, 0, "div", 15);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(28, UpgradeComponent_ng_template_28_Template, 18, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("items", ctx.gradeData);
            i0.ɵɵadvance(17);
            i0.ɵɵproperty("hidden", ctx.listData.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.listData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.listData.length == 0);
        } }, dependencies: [i6.NgClass, i6.NgForOf, i6.NgIf, i7.NgSelectComponent, i8.CustomDateFormatPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UpgradeComponent, [{
        type: Component,
        args: [{ selector: 'app-upgrade', template: "<div class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5>Upgrade Student</h5>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row px-3 d-flex justify-content-between\">\n                <div class=\"col-md-6 px-0\">\n                    <ng-select  (change)=\"filterByGrade($event)\"\n                                [items]=\"gradeData\"\n                                bindLabel=\"grade_name\"\n                                bindValue=\"grade_id\"\n                                class=\"col-md-5 px-0\"\n                                placeholder=\"Grade filter\"\n                                typeToSearchText=\"\"\n                    >\n                    </ng-select>\n                </div>\n                <button (click)=\"openUpgradeAlert()\" class=\"btn btn-primary\">Upgrade</button>\n            </div>\n            <div class=\"row px-3 my-3 table-responsive-xl\">\n                <table class=\"table table-hover\">\n                    <thead class=\"thead-dark\">\n                    <tr>\n                        <th scope=\"col\">Student Name</th>\n                        <th scope=\"col\">E-Mail</th>\n                        <th scope=\"col\">Grade</th>\n                        <th scope=\"col\">Status</th>\n                        <th scope=\"col\">Last Upgrade</th>\n                    </tr>\n                    </thead>\n                    <tbody [hidden]=\"listData.length == 0\">\n                    <tr (click)=\"item.selected = !item.selected\" *ngFor=\"let item of listData; let i = index\" [ngClass]=\"item.selected ? 'table-success' : ''\">\n                        <td>{{item.first_name + ' ' + item.last_name}}</td>\n                        <td>{{item.email_id}}</td>\n                        <td>{{item.grade_name}}</td>\n                        <td>{{item.status}}</td>\n                        <td>{{item.upgrade_date | customDateFormat}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n                <div *ngIf=\"listData.length == 0\" class=\"col-12 px-0\">\n                    <div class=\"d-flex justify-content-center align-items-center color-primary font-weight-bold\" style=\"height: 30vh; width: 100%\">No student available</div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n<ng-template #upgrade let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <h4 class=\"mb-0\">Upgrade</h4><i (click)=\"close()\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div>\n                <div class=\"d-flex\">\n                    <span>Last Upgrade:</span>&nbsp; &nbsp; <h4 class=\"font-weight-bold color-primary\">{{this.lastUpgrade}}</h4>\n                </div>\n                <p class=\"mb-0\">Are you sure ? Do you want to upgrade all student in this institution</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"upgradeSelectedStudent()\" class=\"btn btn-primary pull-right\">Confirm</button>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.StudentService }, { type: i3.ToastrService }, { type: i4.NgbModal }, { type: i5.ClassService }], { upgrade: [{
            type: ViewChild,
            args: ['upgrade']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UpgradeComponent, { className: "UpgradeComponent" }); })();
//# sourceMappingURL=upgrade.component.js.map