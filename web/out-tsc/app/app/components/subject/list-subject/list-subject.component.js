import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/category.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../shared/service/auth.service";
import * as i4 from "../../../shared/service/common-data.service";
import * as i5 from "@angular/router";
import * as i6 from "../../../shared/service/subject.services";
import * as i7 from "ngx-toastr";
import * as i8 from "../../../shared/service/common.service";
import * as i9 from "../../../shared/service/newsubject.service";
import * as i10 from "@angular/common";
import * as i11 from "../../corporateschool/emptyschool/emptyschool.component";
import * as i12 from "../../auth/table/table.component";
const _c0 = ["content"];
function ListSubjectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "h4", 4);
    i0.ɵɵtext(2, "Delete subject details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "h5", 9);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(9, "div", 10)(10, "button", 11);
    i0.ɵɵlistener("click", function ListSubjectComponent_ng_template_0_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵtext(11, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Are you sure you want to subject Books details '", ctx_r1.deleteUser.category_name, "'?");
} }
function ListSubjectComponent_div_2_a_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 21);
    i0.ɵɵtext(1, "Add Subject");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/subject/create-subject/add");
} }
function ListSubjectComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 12)(2, "div", 13)(3, "h5");
    i0.ɵɵtext(4, "Subject Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 14)(6, "div", 7)(7, "div", 15)(8, "div", 16);
    i0.ɵɵtemplate(9, ListSubjectComponent_div_2_a_9_Template, 2, 1, "a", 17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 18)(11, "div", 19)(12, "app-table", 20);
    i0.ɵɵlistener("clickValue", function ListSubjectComponent_div_2_Template_app_table_clickValue_12_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.emittedValue($event)); });
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r1.manageSubject);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("TableType", "Subject")("TableArray", ctx_r1.listData);
} }
function ListSubjectComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
export class ListSubjectComponent {
    constructor(category, config, modalService, auth, commondata, route, subjectservice, toastr, common, newSubject) {
        this.category = category;
        this.config = config;
        this.modalService = modalService;
        this.auth = auth;
        this.commondata = commondata;
        this.route = route;
        this.subjectservice = subjectservice;
        this.toastr = toastr;
        this.common = common;
        this.newSubject = newSubject;
        this.manageSubject = true;
        config.backdrop = 'static';
        config.keyboard = false;
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.teacherschool = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.auth.setSessionData('resourceAccess', false);
        this.auth.setSessionData('browseAll', false);
        this.auth.removeSessionData('classData');
        this.auth.removeSessionData('readonly_data');
        this.auth.removeSessionData('readonly_startdate');
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('editView');
        this.auth.setSessionData('contentType', '');
        if (this.schoolStatus.length != 0) {
            this.newSubject.schoolChange.subscribe(params => {
                if (params != '') {
                    if (this.route.url.includes('list-subject')) {
                        this.init();
                    }
                }
                else {
                    this.init();
                }
            });
        }
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
    }
    ngOnInit() {
        this.auth.removeSessionData('backOption');
    }
    init() {
        if (this.auth.getRoleId() == '4') {
            this.teacherschool = JSON.parse(this.auth.getSessionData('rista_data1'));
            if (this.teacherschool.permissions[2].allowNav) {
                this.subjectList();
            }
            else {
                this.route.navigate(['/home/list-home']);
            }
        }
        else {
            this.subjectList();
        }
        this.manageSubject = this.auth.manageClass;
    }
    emittedValue(event) {
        console.log(event, 'emiitedValue');
        if (event.emitType == 'edit') {
            if (this.manageSubject) {
                this.auth.setSessionData('editsubject', JSON.stringify(event.emitData));
                this.route.navigate(['/subject/create-subject/edit']);
            }
            else if (!this.manageSubject) {
                this.toastr.error('You don\'t have permission to update the subject details');
            }
        }
    }
    showModal() {
        this.modalRef = this.modalService.open(this.modalContent);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
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
    onSave() {
        this.modalRef.close();
    }
    subjectList() {
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.subjectservice.getSubjectList(data).subscribe((successData) => {
            this.subjectListSuccess(successData);
        }, (error) => {
            this.subjectListFailure(error);
        });
    }
    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.listData = successData.ResponseObject;
            this.listData.forEach((value, index, array) => {
                this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
                    'Suspended' : this.listData[index].status == 3 ? 'Disengaged' : this.listData[index].status == 4 ? 'Deleted' : '';
            });
        }
    }
    subjectListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }
    static { this.ɵfac = function ListSubjectComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListSubjectComponent)(i0.ɵɵdirectiveInject(i1.CategoryService), i0.ɵɵdirectiveInject(i2.NgbModalConfig), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.CommonDataService), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i6.SubjectServices), i0.ɵɵdirectiveInject(i7.ToastrService), i0.ɵɵdirectiveInject(i8.CommonService), i0.ɵɵdirectiveInject(i9.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListSubjectComponent, selectors: [["app-list-subject"]], viewQuery: function ListSubjectComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContent = _t.first);
        } }, decls: 4, vars: 2, consts: [["content", ""], ["class", "container-fluid", 4, "ngIf"], [4, "ngIf"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "text-center", "mt-3"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "col-12"], [1, "btn-popup", "pull-right"], ["class", "btn btn-primary", 3, "routerLink", 4, "ngIf"], ["id", "batchDelete", 1, "category-table", "custom-datatable", "transcation-datatable", "user-image"], [1, "table-responsive"], [3, "clickValue", "TableType", "TableArray"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function ListSubjectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListSubjectComponent_ng_template_0_Template, 12, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, ListSubjectComponent_div_2_Template, 13, 3, "div", 1)(3, ListSubjectComponent_div_3_Template, 2, 0, "div", 2);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length == 0);
        } }, dependencies: [i10.NgIf, i5.RouterLink, i11.EmptyschoolComponent, i12.TableComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListSubjectComponent, [{
        type: Component,
        args: [{ selector: 'app-list-subject', template: "<!-- Container-fluid starts-->\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Delete subject details</h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <h5 class=\"text-center mt-3\">Are you sure you want to subject Books details '{{deleteUser.category_name}}'?</h5>\n                </div>\n            </div>\n        </div>\n\n        <!-- Container-fluid Ends-->\n\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"onSave()\">Cancel</button>\n    </div>\n</ng-template>\n<div class=\"container-fluid\" *ngIf=\"schoolStatus.length != 0\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5>Subject Details</h5>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"btn-popup pull-right\">\n                        <a *ngIf=\"manageSubject\" class=\"btn btn-primary\" [routerLink]=\"'/subject/create-subject/add'\">Add Subject</a>\n                    </div>\n                </div>\n            </div>\n            <div id=\"batchDelete\" class=\"category-table custom-datatable transcation-datatable user-image\">\n                <div class=\"table-responsive\">\n                    <app-table [TableType]=\"'Subject'\" [TableArray]=\"listData\" (clickValue)=\"emittedValue($event)\" ></app-table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"schoolStatus.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n<!-- Container-fluid Ends-->\n" }]
    }], () => [{ type: i1.CategoryService }, { type: i2.NgbModalConfig }, { type: i2.NgbModal }, { type: i3.AuthService }, { type: i4.CommonDataService }, { type: i5.Router }, { type: i6.SubjectServices }, { type: i7.ToastrService }, { type: i8.CommonService }, { type: i9.NewsubjectService }], { modalContent: [{
            type: ViewChild,
            args: ['content']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListSubjectComponent, { className: "ListSubjectComponent" }); })();
//# sourceMappingURL=list-subject.component.js.map