import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/category.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "../../../shared/service/newsubject.service";
import * as i5 from "../../../shared/service/auth.service";
import * as i6 from "../../../shared/service/common-data.service";
import * as i7 from "@angular/router";
import * as i8 from "@angular/common";
import * as i9 from "../../student/list-student/list-student.component";
import * as i10 from "../../Teacher/list-Teacher/list-Teacher.component";
import * as i11 from "../../Content-Creator/list-Content/list-Content.component";
import * as i12 from "../../admin/list-admin/list-admin.component";
function ListUserComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 6)(1, "a", 7);
    i0.ɵɵlistener("click", function ListUserComponent_li_4_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page = "Admin"); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3, "Admin");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("nav-link ", ctx_r1.page == "Admin" ? "active" : "", "");
} }
function ListUserComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 6)(1, "a", 7);
    i0.ɵɵlistener("click", function ListUserComponent_li_5_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page = "Student"); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3, "Student");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("nav-link ", ctx_r1.page == "Student" ? "active" : "", "");
} }
function ListUserComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 6)(1, "a", 8);
    i0.ɵɵlistener("click", function ListUserComponent_li_6_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page = "Teacher"); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3, "Teacher");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("nav-link ", ctx_r1.page == "Teacher" ? "active" : "", "");
} }
function ListUserComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 6)(1, "a", 8);
    i0.ɵɵlistener("click", function ListUserComponent_li_7_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page = "Creator"); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3, "Content-Creator");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("nav-link ", ctx_r1.page == "Creator" ? "active" : "", "");
} }
function ListUserComponent_app_list_admin_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-list-admin", 9);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("page", ctx_r1.schoolid);
} }
function ListUserComponent_app_list_student_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-list-student", 9);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("page", ctx_r1.schoolid);
} }
function ListUserComponent_app_list_teacher_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-list-teacher", 9);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("page", ctx_r1.schoolid);
} }
function ListUserComponent_app_list_creator_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-list-creator", 9);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("page", ctx_r1.schoolid);
} }
export class ListUserComponent {
    constructor(category, config, confi, newSubject, auth, commondata, route) {
        this.category = category;
        this.config = config;
        this.confi = confi;
        this.newSubject = newSubject;
        this.auth = auth;
        this.commondata = commondata;
        this.route = route;
        this.page = 'Student';
        this.schoolid = '';
        this.manageStudent = true;
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.route.url.includes('user-list')) {
                    this.init();
                }
            }
            else {
                this.init();
            }
        });
        if (this.auth.getSessionData('UsersRedirection')) {
            this.page = this.auth.getSessionData('UsersRedirection');
            this.auth.removeSessionData('UsersRedirection');
        }
    }
    ngOnInit() {
    }
    init() {
        this.manageStudent = this.auth.manageStudent || this.auth.showStudentEmailId;
        if (this.auth.getRoleId() == '4') {
            this.page = this.manageStudent ? 'Student' : '';
        }
        else if (this.auth.getRoleId() == '6') {
            this.page = 'Admin';
        }
        else {
            this.page = this.auth.getRoleId() != '2' ? 'Admin' : 'Student';
        }
        this.schoolid = this.auth.getSessionData('school_id');
    }
    static { this.ɵfac = function ListUserComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListUserComponent)(i0.ɵɵdirectiveInject(i1.CategoryService), i0.ɵɵdirectiveInject(i2.NgbModalConfig), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.NewsubjectService), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.CommonDataService), i0.ɵɵdirectiveInject(i7.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListUserComponent, selectors: [["app-list-user"]], decls: 12, vars: 8, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "user-card"], [1, "nav", "nav-tabs", "mb-0", "color-primary"], ["class", "nav-item cursor", 4, "ngIf"], [3, "page", 4, "ngIf"], [1, "nav-item", "cursor"], ["aria-current", "page", 3, "click"], [3, "click"], [3, "page"]], template: function ListUserComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ul", 3);
            i0.ɵɵtemplate(4, ListUserComponent_li_4_Template, 4, 3, "li", 4)(5, ListUserComponent_li_5_Template, 4, 3, "li", 4)(6, ListUserComponent_li_6_Template, 4, 3, "li", 4)(7, ListUserComponent_li_7_Template, 4, 3, "li", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, ListUserComponent_app_list_admin_8_Template, 1, 1, "app-list-admin", 5)(9, ListUserComponent_app_list_student_9_Template, 1, 1, "app-list-student", 5)(10, ListUserComponent_app_list_teacher_10_Template, 1, 1, "app-list-teacher", 5)(11, ListUserComponent_app_list_creator_11_Template, 1, 1, "app-list-creator", 5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.auth.getRoleId() == "6");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.manageStudent);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.auth.getRoleId() != "4");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.auth.getRoleId() != "4");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.page == "Admin" && ctx.auth.getRoleId() == "6");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.page == "Student" && ctx.manageStudent);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.page == "Teacher");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.page == "Creator");
        } }, dependencies: [i8.NgIf, i9.ListTemplateComponent, i10.ListTeacherComponent, i11.ListContentComponent, i12.ListAdminComponent], styles: [".nav-tabs[_ngcontent-%COMP%] {\n\n  border-bottom: 1px solid #8F008A;\n\n  .nav-link {\n    margin-bottom: -2px;\n    &:hover {\n      border: 1px solid #8F008A;\n      border-bottom: none #fff;\n    }\n  }\n\n  .nav-link.active, .nav-tabs .nav-item.show .nav-link {\n    color: #8F008A;\n    background-color: #fff;\n    border: 1px solid #8F008A;\n    border-bottom: none #fff;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListUserComponent, [{
        type: Component,
        args: [{ selector: 'app-list-user', template: "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12 user-card\">\n            <ul class=\"nav nav-tabs mb-0 color-primary\">\n                <li class=\"nav-item cursor\" *ngIf=\"auth.getRoleId() == '6'\">\n                    <a (click)=\"page = 'Admin'\" aria-current=\"page\" class=\"nav-link {{page == 'Admin' ? 'active' : ''}}\"><b>Admin</b></a>\n                </li>\n                <li class=\"nav-item cursor\" *ngIf=\"manageStudent\">\n                    <a (click)=\"page = 'Student'\" aria-current=\"page\" class=\"nav-link {{page == 'Student' ? 'active' : ''}}\"><b>Student</b></a>\n                </li>\n                <li class=\"nav-item cursor\" *ngIf=\"auth.getRoleId() != '4'\">\n                    <a (click)=\"page = 'Teacher'\" class=\"nav-link {{page == 'Teacher' ? 'active' : ''}}\"><b>Teacher</b></a>\n                </li>\n                <li class=\"nav-item cursor\" *ngIf=\"auth.getRoleId() != '4'\">\n                    <a (click)=\"page = 'Creator'\" class=\"nav-link {{page == 'Creator' ? 'active' : ''}}\"><b>Content-Creator</b></a>\n                </li>\n            </ul>\n\n                <app-list-admin [page]=\"schoolid\" *ngIf=\"page == 'Admin' && auth.getRoleId() == '6'\"></app-list-admin>\n                <app-list-student [page]=\"schoolid\" *ngIf=\"page == 'Student' && manageStudent\"></app-list-student>\n                <app-list-teacher [page]=\"schoolid\" *ngIf=\"page == 'Teacher'\"></app-list-teacher>\n                <app-list-creator [page]=\"schoolid\" *ngIf=\"page == 'Creator'\"></app-list-creator>\n        </div>\n    </div>\n</div>\n", styles: [".nav-tabs {\n\n  border-bottom: 1px solid #8F008A;\n\n  .nav-link {\n    margin-bottom: -2px;\n    &:hover {\n      border: 1px solid #8F008A;\n      border-bottom: none #fff;\n    }\n  }\n\n  .nav-link.active, .nav-tabs .nav-item.show .nav-link {\n    color: #8F008A;\n    background-color: #fff;\n    border: 1px solid #8F008A;\n    border-bottom: none #fff;\n  }\n}\n"] }]
    }], () => [{ type: i1.CategoryService }, { type: i2.NgbModalConfig }, { type: i3.ConfigurationService }, { type: i4.NewsubjectService }, { type: i5.AuthService }, { type: i6.CommonDataService }, { type: i7.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListUserComponent, { className: "ListUserComponent" }); })();
//# sourceMappingURL=list-user.component.js.map