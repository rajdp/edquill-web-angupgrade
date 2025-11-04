import { Component, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../shared/service/configuration.service";
import * as i3 from "../../../shared/service/auth.service";
import * as i4 from "../../../shared/service/common-data.service";
import * as i5 from "@angular/router";
import * as i6 from "@angular/common";
import * as i7 from "ngx-toastr";
import * as i8 from "../../../shared/service/newsubject.service";
import * as i9 from "../../../shared/service/common.service";
import * as i10 from "../../../shared/service/grade.service";
import * as i11 from "../../corporateschool/emptyschool/emptyschool.component";
import * as i12 from "../../auth/table/table.component";
const _c0 = ["bulkModal"];
function ListGradeComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "h4", 4);
    i0.ɵɵtext(2, "Delete Books details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "h5", 9);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(9, "div", 10)(10, "button", 11);
    i0.ɵɵlistener("click", function ListGradeComponent_ng_template_0_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵtext(11, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Are you sure you want to delete Books details '", ctx_r1.deleteUser.category_name, "'?");
} }
function ListGradeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 12)(2, "div", 13)(3, "h5");
    i0.ɵɵtext(4, "Grade Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 14)(6, "div", 7)(7, "div", 15)(8, "div", 16)(9, "button", 17);
    i0.ɵɵlistener("click", function ListGradeComponent_div_2_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addgrade()); });
    i0.ɵɵtext(10, "Add Grade");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(11, "div", 18)(12, "div", 19)(13, "app-table", 20);
    i0.ɵɵlistener("clickValue", function ListGradeComponent_div_2_Template_app_table_clickValue_13_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.emittedValue($event)); });
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("TableType", "Grade")("TableArray", ctx_r1.listData);
} }
function ListGradeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
export class ListGradeComponent {
    constructor(config, confi, auth, commondata, modalService, route, firstcaps, toastr, newSubject, common, gradeService) {
        this.config = config;
        this.confi = confi;
        this.auth = auth;
        this.commondata = commondata;
        this.modalService = modalService;
        this.route = route;
        this.firstcaps = firstcaps;
        this.toastr = toastr;
        this.newSubject = newSubject;
        this.common = common;
        this.gradeService = gradeService;
        this.webhost = this.confi.getimgUrl();
        config.backdrop = 'static';
        config.keyboard = false;
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('readonly_startdate');
        this.auth.removeSessionData('editView');
        if (this.schoolStatus.length != 0) {
            this.newSubject.schoolChange.subscribe(params => {
                if (params != '') {
                    if (this.route.url.includes('list-grade')) {
                        this.init(params);
                    }
                }
                else {
                    this.init(this.auth.getSessionData('school_id'));
                }
            });
        }
        else {
        }
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
    }
    ngOnInit() {
        this.auth.removeSessionData('backOption');
    }
    init(res) {
        this.schoolID = res;
        this.gradeList();
    }
    emittedValue(event) {
        console.log(event, 'emiitedValue');
        if (event.emitType == 'edit') {
            this.auth.setSessionData('editgrade', JSON.stringify(event.emitData));
            this.auth.setSessionData('gradeCount', this.listData.length);
            this.route.navigate(['/grade/create-grade/edit']);
        }
    }
    onSave() {
        this.modalRef.close();
    }
    close() {
        this.modalRef.close();
        this.schoolID = null;
        this.fileUploader = '';
        this.filetype = '';
    }
    gradeList() {
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolID,
        };
        this.gradeService.getgradeList(data).subscribe((successData) => {
            this.gradeListSuccess(successData);
        }, (error) => {
            console.error(error, 'error');
            this.commondata.showLoader(false);
        });
    }
    gradeListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.listData = successData.ResponseObject;
            this.listData.forEach((value, index) => {
                this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
                    'Suspended' : this.listData[index].status == 3 ? 'Suspended' : this.listData[index].status == 4 ? 'Deleted' : '';
            });
        }
    }
    readUrl(event) {
        const file = event.target.files[0];
        this.filetype = event.target.files[0].name.split('.');
        if (event.srcElement.files[0].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || event.srcElement.files[0].type == 'application/vnd.ms-excel') {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                this.getUrl1 = [];
                this.url = event.target.result;
                this.getUrl = this.url.split(',');
                this.getUrl1.push(this.url.split(','));
                this.onUploadFinished1(this.getUrl);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
            this.toastr.success('Excel Upload Successfully', 'Success!');
        }
        else {
            this.toastr.error('Only Excel Format Is Required', 'Failed');
            this.filetype = '';
        }
    }
    onUploadFinished1(event) {
        this.getUrl = event[1];
    }
    excelUpoadSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.getUrl = '';
            this.bulkInsert(successData.ResponseObject.upload_id);
            this.close();
            this.gradeList();
            this.toastr.success(successData.ResponseObject.Message, 'Success!');
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Failed!');
            this.commondata.showLoader(false);
        }
    }
    bulkInsert(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            upload_id: id,
            school_id: this.schoolID
        };
        this.common.bulkInsert(data).subscribe((successData) => {
            this.bulkInsertSuccess(successData);
        }, (error) => {
            this.bulkInsertFailure(error);
        });
    }
    bulkInsertSuccess(successData) {
        if (successData.IsSuccess) {
        }
    }
    bulkInsertFailure(error) {
        console.log(error);
    }
    downloadExcel() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            user_type: 'Book'
        };
        this.common.excelDownload(data).subscribe((successData) => {
            this.excelDownloadSuccess(successData);
        }, (error) => {
            console.error(error);
        });
    }
    excelDownloadSuccess(successData) {
        if (successData.IsSuccess) {
            const url = this.webhost + '/' + successData.ResponseObject;
            window.open(url);
        }
    }
    addgrade() {
        this.route.navigate(['/grade/create-grade/add']);
        this.auth.setSessionData('gradeCount', this.listData.length);
    }
    static { this.ɵfac = function ListGradeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListGradeComponent)(i0.ɵɵdirectiveInject(i1.NgbModalConfig), i0.ɵɵdirectiveInject(i2.ConfigurationService), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.CommonDataService), i0.ɵɵdirectiveInject(i1.NgbModal), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i6.TitleCasePipe), i0.ɵɵdirectiveInject(i7.ToastrService), i0.ɵɵdirectiveInject(i8.NewsubjectService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i10.GradeService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListGradeComponent, selectors: [["app-list-grade"]], viewQuery: function ListGradeComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bulkContent = _t.first);
        } }, decls: 4, vars: 2, consts: [["content", ""], ["class", "container-fluid", 4, "ngIf"], [4, "ngIf"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "text-center", "mt-3"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "col-md-12"], [1, "btn-popup", "pull-right"], [1, "btn", "btn-primary", "ml-3", 3, "click"], ["id", "batchDelete", 1, "category-table", "custom-datatable", "transcation-datatable", "user-image"], [1, "table-responsive"], [3, "clickValue", "TableType", "TableArray"]], template: function ListGradeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListGradeComponent_ng_template_0_Template, 12, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, ListGradeComponent_div_2_Template, 14, 2, "div", 1)(3, ListGradeComponent_div_3_Template, 2, 0, "div", 2);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length == 0);
        } }, dependencies: [i6.NgIf, i11.EmptyschoolComponent, i12.TableComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListGradeComponent, [{
        type: Component,
        args: [{ selector: 'app-list-grade', template: "<!-- Container-fluid starts-->\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Delete Books details</h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <h5 class=\"text-center mt-3\">Are you sure you want to delete Books details '{{deleteUser.category_name}}'?</h5>\n                </div>\n            </div>\n        </div>\n\n        <!-- Container-fluid Ends-->\n\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"onSave()\">Cancel</button>\n    </div>\n</ng-template>\n<div class=\"container-fluid\" *ngIf=\"schoolStatus.length != 0\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5>Grade Details</h5>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"btn-popup pull-right\">\n                        <button class=\"btn btn-primary ml-3\" (click)=\"addgrade()\">Add Grade</button>\n                    </div>\n                </div>\n            </div>\n            <div id=\"batchDelete\" class=\"category-table custom-datatable transcation-datatable user-image\">\n                <div class=\"table-responsive\">\n                    <app-table [TableType]=\"'Grade'\" [TableArray]=\"listData\" (clickValue)=\"emittedValue($event)\" ></app-table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"schoolStatus.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n<!-- Container-fluid Ends-->\n" }]
    }], () => [{ type: i1.NgbModalConfig }, { type: i2.ConfigurationService }, { type: i3.AuthService }, { type: i4.CommonDataService }, { type: i1.NgbModal }, { type: i5.Router }, { type: i6.TitleCasePipe }, { type: i7.ToastrService }, { type: i8.NewsubjectService }, { type: i9.CommonService }, { type: i10.GradeService }], { bulkContent: [{
            type: ViewChild,
            args: ['bulkModal']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListGradeComponent, { className: "ListGradeComponent" }); })();
//# sourceMappingURL=list-grade.component.js.map