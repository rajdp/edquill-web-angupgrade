import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/book.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "../../../shared/service/auth.service";
import * as i5 from "../../../shared/service/common-data.service";
import * as i6 from "@angular/router";
import * as i7 from "@angular/common";
import * as i8 from "ngx-toastr";
import * as i9 from "../../../shared/service/common.service";
import * as i10 from "../../../shared/service/School.service";
import * as i11 from "../../../shared/service/newsubject.service";
import * as i12 from "../../corporateschool/emptyschool/emptyschool.component";
import * as i13 from "@angular/platform-browser";
import * as i14 from "../../../shared/service/creator.service";
import * as i15 from "ng2-pdf-viewer";
const _c0 = ["bulkModal"];
function ListBooksComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "h4", 6);
    i0.ɵɵtext(2, "Delete Books details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 7)(4, "div", 8)(5, "div", 9)(6, "div", 10)(7, "h5", 11);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(9, "div", 12)(10, "button", 13);
    i0.ɵɵlistener("click", function ListBooksComponent_ng_template_0_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵtext(11, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Are you sure you want to delete Books details '", ctx_r1.deleteUser.category_name, "'?");
} }
function ListBooksComponent_ng_template_2_label_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 28);
    i0.ɵɵtext(1, "Upload Excel");
    i0.ɵɵelementEnd();
} }
function ListBooksComponent_ng_template_2_label_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r1.filetype[0], ".", ctx_r1.filetype[1], "");
} }
function ListBooksComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "h4", 14);
    i0.ɵɵtext(2, "Bulk Upload");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 15)(4, "i", 16);
    i0.ɵɵlistener("click", function ListBooksComponent_ng_template_2_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 7)(6, "div", 9)(7, "div", 10)(8, "div", 17)(9, "div", 9)(10, "div", 18)(11, "div", 19);
    i0.ɵɵlistener("click", function ListBooksComponent_ng_template_2_Template_div_click_11_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.downloadExcel()); });
    i0.ɵɵtext(12, " Download Sample Excel ");
    i0.ɵɵelement(13, "i", 20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 21)(15, "input", 22, 2);
    i0.ɵɵlistener("click", function ListBooksComponent_ng_template_2_Template_input_click_15_listener() { i0.ɵɵrestoreView(_r3); const fileUploader_r4 = i0.ɵɵreference(16); return i0.ɵɵresetView(fileUploader_r4.value = null); })("change", function ListBooksComponent_ng_template_2_Template_input_change_15_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.readUrl($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(17, ListBooksComponent_ng_template_2_label_17_Template, 2, 0, "label", 23)(18, ListBooksComponent_ng_template_2_label_18_Template, 2, 2, "label", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 24)(20, "span", 25);
    i0.ɵɵtext(21, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "small");
    i0.ɵɵtext(23, "Note: Upload format should be same as Sample Excel Format");
    i0.ɵɵelementEnd()()()()()()();
    i0.ɵɵelementStart(24, "div", 12)(25, "div", 26)(26, "button", 27);
    i0.ɵɵlistener("click", function ListBooksComponent_ng_template_2_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onUploadFinished()); });
    i0.ɵɵtext(27, "Submit");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngIf", ctx_r1.filetype == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.filetype != "");
} }
function ListBooksComponent_div_4_a_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 36);
    i0.ɵɵtext(1, "Add Books");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/Books/create-Books/add");
} }
function ListBooksComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 29)(2, "div", 30)(3, "div", 9)(4, "div", 31)(5, "h5");
    i0.ɵɵtext(6, "Books Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 31)(8, "div", 26);
    i0.ɵɵtemplate(9, ListBooksComponent_div_4_a_9_Template, 2, 1, "a", 32);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 33)(11, "div", 34);
    i0.ɵɵelement(12, "div", 35);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r1.allowAdd);
} }
function ListBooksComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
const _c1 = ["viewPdf"];
function ViewComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "h4", 7);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 8)(7, "i", 9);
    i0.ɵɵlistener("click", function ViewComponent_ng_template_3_Template_i_click_7_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 10);
    i0.ɵɵelement(9, "pdf-viewer", 11);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.pdfName);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", ctx_r2.pdfTemplate);
} }
export class ListBooksComponent {
    // @ViewChild('ViewComponent') child: ViewComponent;
    constructor(bookService, config, confi, modalService, auth, commondata, route, firstcaps, toastr, common, schoolService, newSubject) {
        this.bookService = bookService;
        this.config = config;
        this.confi = confi;
        this.modalService = modalService;
        this.auth = auth;
        this.commondata = commondata;
        this.route = route;
        this.firstcaps = firstcaps;
        this.toastr = toastr;
        this.common = common;
        this.schoolService = schoolService;
        this.newSubject = newSubject;
        this.schoolDataList = 0;
        this.settings = {
            hideSubHeader: false,
            actions: {
                custom: [
                    {
                        name: 'editAction',
                        title: '<i class="fa  fa-pencil" title="Edit Book"></i>'
                    },
                    // {
                    //   name: 'viewAction',
                    //   title: '<i class="fa  fa-eye" title="View Answer Key"></i>',
                    //   type: 'custom',
                    //   renderComponent: ViewComponent,
                    //   onComponentInitFunction: (instance: any) =>  {
                    //     instance.save.subscribe(row => {
                    //     });
                    //   }
                    // },
                ],
                add: false,
                edit: false,
                delete: false,
                position: 'right',
            },
            columns: {
                name: {
                    title: 'Book Name',
                    type: 'custom',
                    renderComponent: ViewComponent,
                    onComponentInitFunction: (instance) => {
                        instance.save.subscribe(row => {
                        });
                    }
                },
                publication_code: {
                    title: 'Publication Code',
                },
                description: {
                    title: 'Description',
                    type: 'html',
                    valuePrepareFunction: (data) => {
                        return `<a title="${data}"> <span>${data.length > 20 ? data.substring(0, 20 - 1).concat('…') : data}</a>`;
                    }
                },
                access: {
                    title: 'Access Type'
                },
                status: {
                    title: 'Status'
                },
            },
        };
        this.webhost = this.confi.getimgUrl();
        this.allowAdd = true;
        this.allowEdit = true;
        config.backdrop = 'static';
        config.keyboard = false;
        this.roleid = this.auth.getRoleId();
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.auth.setSessionData('resourceAccess', false);
        this.auth.setSessionData('browseAll', false);
        this.auth.removeSessionData('classData');
        this.auth.removeSessionData('readonly_data');
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('readonly_startdate');
        this.auth.removeSessionData('backOption');
        this.auth.setSessionData('contentType', '');
        if (this.schoolStatus.length != 0) {
            this.newSubject.schoolChange.subscribe(params => {
                if (params != '') {
                    if (this.route.url.includes('list-Books')) {
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
    }
    ngOnInit() {
        this.allowDropDown = false;
        this.newSubject.allowSchoolChange(this.allowDropDown);
    }
    onCustomAction(event) {
        switch (event.action) {
            case 'editAction':
                if (this.allowEdit == true) {
                    if (event.data.access == 'Public') {
                        if (this.schoolid == event.data.school_id) {
                            this.auth.setSessionData('editBook', JSON.stringify(event.data));
                            this.route.navigate(['/Books/create-Books/edit']);
                        }
                        else {
                            this.toastr.error('You don\'t have permission to update book', 'Failed');
                        }
                    }
                    else {
                        this.auth.setSessionData('editBook', JSON.stringify(event.data));
                        this.route.navigate(['/Books/create-Books/edit']);
                    }
                }
                else if (this.allowEdit == false) {
                    this.toastr.error('You don\'t have permission to update book', 'Failed');
                }
                break;
            case 'viewAction':
                // this.viewComponet;
                break;
        }
    }
    showBulk() {
        this.filetype = '';
        this.schoolId = null;
        this.modalRef = this.modalService.open(this.bulkContent);
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
    open(content) {
        this.modalService.open(content);
    }
    init(id) {
        this.schoolid = id;
        if (this.roleid == '4') {
            this.teacherschool = JSON.parse(this.auth.getSessionData('rista_data1'));
            if (this.teacherschool.permissions[3].allowNav) {
                if (this.teacherschool.permissions[3].permission[0].status == 1) {
                    this.allowAdd = true;
                }
                else if (this.teacherschool.permissions[3].permission[0].status == 0) {
                    this.allowAdd = false;
                }
                if (this.teacherschool.permissions[3].permission[1].status == 1) {
                    this.allowEdit = true;
                }
                else if (this.teacherschool.permissions[3].permission[1].status == 0) {
                    this.allowEdit = false;
                }
                this.bookList();
            }
            else {
                this.route.navigate(['/home/list-home']);
            }
        }
        else {
            this.bookList();
        }
    }
    onSave() {
        this.modalRef.close();
    }
    close() {
        this.modalRef.close();
        this.schoolId = null;
        this.fileUploader = '';
        this.filetype = '';
    }
    bookList() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolid
        };
        if (this.auth.getRoleId() == '6') {
            data['coporate_id'] = this.auth.getSessionData('corporate_id');
        }
        this.bookService.getBookList(data).subscribe((successData) => {
            this.bookListSuccess(successData);
        }, (error) => {
            this.bookListFailure(error);
        });
    }
    bookListSuccess(successData) {
        if (successData.IsSuccess) {
            this.listData = successData.ResponseObject;
            this.listData.forEach((value, index, array) => {
                this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
                    'Inactive' : this.listData[index].status == 3 ? 'Suspended' : this.listData[index].status == 4 ? 'Deleted' : '';
            });
            this.listData.forEach((value, index, array) => {
                this.listData[index].access = this.listData[index].access == 1 ? 'Access to all within Org' : this.listData[index].access == 2 ? 'Access only for you' :
                    this.listData[index].access == 3 ? 'Public' : this.listData[index].access = this.listData[index].access == 4 ? '' : '';
            });
        }
    }
    bookListFailure(error) {
        console.log(error, 'error');
    }
    readUrl(event) {
        const file = event.target.files[0];
        this.filetype = event.target.files[0].name.split('.');
        if (event.srcElement.files[0].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || event.srcElement.files[0].type == 'application/vnd.ms-excel') {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                this.getUrl1 = [];
                this.url = event.target.result;
                this.getUrl = this.url.split(',');
                this.getUrl1.push(this.url.split(','));
                this.onUploadFinished1(this.getUrl, event);
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
    onUploadFinished1(event, fileEvent) {
        this.getUrl = event[1];
    }
    onUploadFinished() {
        if (this.schoolId != null) {
            this.commondata.showLoader(true);
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                file: this.getUrl,
                extension: this.filetype[1],
                upload_type: 'Excel',
                user_type: 'Book'
            };
            this.common.excelUpload(data).subscribe((successData) => {
                this.excelUpoadSuccess(successData);
            }, (error) => {
                this.excelUpoadFailure(error);
            });
            this.commondata.showLoader(true);
        }
        else {
            this.toastr.error('Select the Institution Name', 'Student');
        }
    }
    excelUpoadSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.getUrl = '';
            this.bulkInsert(successData.ResponseObject.upload_id);
            this.close();
            this.bookList();
            this.toastr.success(successData.ResponseObject.Message, 'Success!');
        }
        else {
            this.toastr.error(successData.ErrorObject, 'Failed!');
            this.commondata.showLoader(false);
        }
    }
    excelUpoadFailure(error) {
        console.log(error);
    }
    bulkInsert(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            upload_id: id,
            school_id: this.schoolId
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
            this.excelDownloadFailure(error);
        });
    }
    excelDownloadSuccess(successData) {
        if (successData.IsSuccess) {
            const url = this.webhost + '/' + successData.ResponseObject;
            window.open(url);
        }
    }
    excelDownloadFailure(error) {
        console.log(error);
    }
    static { this.ɵfac = function ListBooksComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListBooksComponent)(i0.ɵɵdirectiveInject(i1.BookService), i0.ɵɵdirectiveInject(i2.NgbModalConfig), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i7.TitleCasePipe), i0.ɵɵdirectiveInject(i8.ToastrService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i10.SchoolService), i0.ɵɵdirectiveInject(i11.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListBooksComponent, selectors: [["app-list-books"]], viewQuery: function ListBooksComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bulkContent = _t.first);
        } }, decls: 6, vars: 2, consts: [["content", ""], ["bulkModal", ""], ["fileUploader", ""], ["class", "container-fluid", 4, "ngIf"], [4, "ngIf"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "text-center", "mt-3"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["id", "modal-bulkUpload", 1, "modal-title"], [1, "text-right"], ["aria-hidden", "true", 1, "fa", "fa-close", 2, "cursor", "pointer", 3, "click"], [1, "card-body", "pt-2"], [1, "col-12", "text-right", 2, "padding-top", "25px"], [2, "cursor", "pointer", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-download", 2, "color", "#329688"], [1, "custom-file", 2, "margin-top", "19px"], ["type", "file", "id", "inputGroupFile02", "aria-describedby", "inputGroupFileAddon01", "accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel", "name", "file", 1, "custom-file-input", 3, "click", "change"], ["class", "custom-file-label", 4, "ngIf"], [1, "mt-3"], [2, "color", "firebrick"], [1, "btn-popup", "pull-right"], [1, "btn", "btn-primary", 3, "click"], [1, "custom-file-label"], [1, "card"], [1, "card-header"], [1, "col-6"], ["class", "btn btn-primary ml-3", 3, "routerLink", 4, "ngIf"], [1, "card-body"], ["id", "batchDelete", 1, "category-table", "custom-datatable", "transcation-datatable", "user-image"], [1, "table-responsive"], [1, "btn", "btn-primary", "ml-3", 3, "routerLink"]], template: function ListBooksComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListBooksComponent_ng_template_0_Template, 12, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, ListBooksComponent_ng_template_2_Template, 28, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(4, ListBooksComponent_div_4_Template, 13, 1, "div", 3)(5, ListBooksComponent_div_5_Template, 2, 0, "div", 4);
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", (ctx.schoolStatus == null ? null : ctx.schoolStatus.length) != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.schoolStatus == null ? null : ctx.schoolStatus.length) == 0);
        } }, dependencies: [i7.NgIf, i6.RouterLink, i12.EmptyschoolComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListBooksComponent, [{
        type: Component,
        args: [{ selector: 'app-list-books', template: "<!-- Container-fluid starts-->\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Delete Books details</h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h5 class=\"text-center mt-3\">Are you sure you want to delete Books details '{{deleteUser.category_name}}'?</h5>\n                </div>\n            </div>\n        </div>\n\n        <!-- Container-fluid Ends-->\n\n\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"onSave()\">Cancel</button>\n    </div>\n</ng-template>\n<ng-template #bulkModal let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-bulkUpload\">Bulk Upload</h4>\n        <p class=\"text-right\">\n            <i class=\"fa fa-close\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"close()\"></i>\n        </p>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card-body pt-2\">\n                    <div class=\"row\">\n\n                        <div class=\"col-12 text-right\" style=\"padding-top: 25px\">\n                            <div (click)=\"downloadExcel()\" style=\"cursor: pointer\"> Download Sample Excel <i class=\"fa fa-download\" aria-hidden=\"true\" style=\"color:#329688\"></i></div>\n                        </div>\n                        <div class=\"custom-file\" style=\"margin-top: 19px;\">\n                            <input #fileUploader type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\"\n                                   aria-describedby=\"inputGroupFileAddon01\" accept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\" name=\"file\"  (click)=\"fileUploader.value = null \" (change)=\"readUrl($event)\">\n                            <label *ngIf=\"filetype == ''\" class=\"custom-file-label\">Upload Excel</label>\n                            <label *ngIf=\"filetype != ''\" class=\"custom-file-label\">{{filetype[0]}}.{{filetype[1]}}</label>\n                        </div>\n                        <div class=\"mt-3\">\n                            <span style=\"color: firebrick\">*</span><small>Note: Upload format should be same as Sample Excel Format</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"btn-popup pull-right\">\n            <button class=\"btn btn-primary\" (click)=\"onUploadFinished()\">Submit</button>\n        </div>\n    </div>\n</ng-template>\n<div class=\"container-fluid\" *ngIf=\"schoolStatus?.length != 0\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <h5>Books Details</h5>\n                </div>\n                <div class=\"col-6\">\n                    <div class=\"btn-popup pull-right\">\n                        <a *ngIf=\"allowAdd\" class=\"btn btn-primary ml-3\" [routerLink]=\"'/Books/create-Books/add'\">Add Books</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div id=\"batchDelete\" class=\"category-table custom-datatable transcation-datatable user-image\">\n                <div class=\"table-responsive\">\n<!--                    <angular2-smart-table [settings]=\"settings\" [source]=\"listData\"  (custom)=\"onCustomAction($event)\"></angular2-smart-table>-->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"schoolStatus?.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n" }]
    }], () => [{ type: i1.BookService }, { type: i2.NgbModalConfig }, { type: i3.ConfigurationService }, { type: i2.NgbModal }, { type: i4.AuthService }, { type: i5.CommonDataService }, { type: i6.Router }, { type: i7.TitleCasePipe }, { type: i8.ToastrService }, { type: i9.CommonService }, { type: i10.SchoolService }, { type: i11.NewsubjectService }], { bulkContent: [{
            type: ViewChild,
            args: ['bulkModal']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListBooksComponent, { className: "ListBooksComponent" }); })();
export class ViewComponent {
    constructor(modalService, route, config, auth, sanitizer, confi, commonservice, creatorService) {
        this.modalService = modalService;
        this.route = route;
        this.config = config;
        this.auth = auth;
        this.sanitizer = sanitizer;
        this.confi = confi;
        this.commonservice = commonservice;
        this.creatorService = creatorService;
        this.save = new EventEmitter();
        config.backdrop = 'static';
        config.keyboard = false;
        this.webhost = this.confi.getimgUrl();
    }
    ngOnInit() {
    }
    viewdetailsList() {
        this.base64Books();
    }
    base64Books() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.rowData.content_id
        };
        this.creatorService.detaillist(data).subscribe((successData) => {
            this.contentDetailsSuccess(successData);
        }, (error) => {
            this.contentDetailsFailure(error);
        });
    }
    contentDetailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.bookBase64data = successData.ResponseObject;
            this.pdfName = '';
            let pdfdata;
            pdfdata = this.commonservice.convertBase64(this.bookBase64data.file_path);
            this.pdfName = pdfdata[0]?.image;
            this.pdfTemplate = this.webhost + '/' + pdfdata[0]?.original_image_url;
            this.modalRef = this.modalService.open(this.viewPdf, { size: 'xl' });
        }
    }
    contentDetailsFailure(error) {
        console.log(error, 'error');
    }
    open(content) {
        this.modalService.open(content);
    }
    close() {
        this.modalRef.close();
    }
    cancel() {
        this.modalRef.close();
    }
    static { this.ɵfac = function ViewComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ViewComponent)(i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i2.NgbModalConfig), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i13.DomSanitizer), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i14.CreatorService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ViewComponent, selectors: [["button-toggle"]], viewQuery: function ViewComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewPdf = _t.first);
        } }, inputs: { value: "value", rowData: "rowData" }, outputs: { save: "save" }, decls: 5, vars: 1, consts: [["viewPdf", ""], [1, "form-group"], ["data-toggle", "modal", "data-target", "#myModal", 1, "text-capitalize", "font-weight-bold", "table-name", 3, "click"], [1, "modal-body"], [1, "container-fluid"], [1, "row"], [1, "col-md-12", "modal-header"], [1, "modal-title"], [1, "text-right"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-lg", "mt-1", 2, "color", "#7F3486", "cursor", "pointer", "float", "right", 3, "click"], [1, "col-md-12"], [2, "display", "block", 3, "src"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "span", 2);
            i0.ɵɵlistener("click", function ViewComponent_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.viewdetailsList()); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(3, ViewComponent_ng_template_3_Template, 10, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.rowData.name);
        } }, dependencies: [i15.PdfViewerComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ViewComponent, [{
        type: Component,
        args: [{ selector: 'button-toggle', template: `
  
    <div class="form-group">
         <span class="text-capitalize font-weight-bold table-name" data-toggle="modal" data-target="#myModal" (click)="viewdetailsList()">{{rowData.name}}</span>
    </div>
    <ng-template #viewPdf let-c="close" let-d="dismiss">
      <div class="modal-body">
        <!-- Container-fluid starts-->
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 modal-header">
              <h4 class="modal-title">{{pdfName}}</h4>
              <p class="text-right">
                <i class="fa fa-close fa-lg mt-1" aria-hidden="true" style="color:#7F3486; cursor: pointer; float: right;" (click)="close()"></i>
                <!--                        <i class="fa fa-close fa-2x" aria-hidden="true" style="cursor:pointer" (click)="close()"></i>-->
              </p>
            </div>
            <div class="col-md-12">
              <pdf-viewer  [src]="pdfTemplate" style="display: block;"></pdf-viewer>
            </div>
          </div>
        </div>
        <!-- Container-fluid Ends-->
      </div>
    </ng-template>
  ` }]
    }], () => [{ type: i2.NgbModal }, { type: i6.Router }, { type: i2.NgbModalConfig }, { type: i4.AuthService }, { type: i13.DomSanitizer }, { type: i3.ConfigurationService }, { type: i9.CommonService }, { type: i14.CreatorService }], { value: [{
            type: Input
        }], rowData: [{
            type: Input
        }], save: [{
            type: Output
        }], viewPdf: [{
            type: ViewChild,
            args: ['viewPdf']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ViewComponent, { className: "ViewComponent" }); })();
//# sourceMappingURL=list-Books.component.js.map