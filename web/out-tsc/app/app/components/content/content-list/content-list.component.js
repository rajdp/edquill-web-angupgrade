import { Component, ViewChild } from '@angular/core';
import { dateOptions } from 'src/app/shared/data/config';
import { urls } from 'src/app/shared/utils/urls';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as i0 from "@angular/core";
import * as i1 from "src/app/shared/service/auth.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "ngx-toastr";
import * as i4 from "@angular/common";
import * as i5 from "@angular/router";
import * as i6 from "@angular/platform-browser";
import * as i7 from "src/app/environment.service";
import * as i8 from "@swimlane/ngx-datatable";
import * as i9 from "@angular/forms";
import * as i10 from "@ng-select/ng-select";
const _c0 = ["blogDetail"];
const _c1 = ["deleteBlogger"];
const _c2 = () => ({ emptyMessage: "No Content found" });
function ContentListComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h6", 27);
    i0.ɵɵlistener("click", function ContentListComponent_ng_template_23_Template_h6_click_0_listener() { const row_r3 = i0.ɵɵrestoreView(_r2).row; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.showBlogDetail(row_r3)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r3 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r3.name);
} }
function ContentListComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r5 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r5.category_name);
} }
function ContentListComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r6 = ctx.row;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r6.converted_created_date);
} }
function ContentListComponent_ng_template_29_img_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 30);
} if (rf & 2) {
    const row_r7 = i0.ɵɵnextContext().row;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r3.env.imgUrl + "/" + row_r7.image, i0.ɵɵsanitizeUrl);
} }
function ContentListComponent_ng_template_29_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 31);
} }
function ContentListComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ContentListComponent_ng_template_29_img_0_Template, 1, 1, "img", 28)(1, ContentListComponent_ng_template_29_img_1_Template, 1, 0, "img", 29);
} if (rf & 2) {
    const row_r7 = ctx.row;
    i0.ɵɵproperty("ngIf", row_r7.image != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r7.image == "");
} }
function ContentListComponent_ng_template_31_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵtext(1, "Active");
    i0.ɵɵelementEnd();
} }
function ContentListComponent_ng_template_31_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵtext(1, "Suspended");
    i0.ɵɵelementEnd();
} }
function ContentListComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ContentListComponent_ng_template_31_span_0_Template, 2, 0, "span", 32)(1, ContentListComponent_ng_template_31_span_1_Template, 2, 0, "span", 33);
} if (rf & 2) {
    const row_r8 = ctx.row;
    i0.ɵɵproperty("ngIf", row_r8.status == "A");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", row_r8.status == "I");
} }
function ContentListComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " \u00A0\u00A0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span")(3, "i", 36);
    i0.ɵɵlistener("click", function ContentListComponent_ng_template_33_Template_i_click_3_listener() { const row_r10 = i0.ɵɵrestoreView(_r9).row; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.editBlog(row_r10)); });
    i0.ɵɵelementEnd()();
} }
function ContentListComponent_ng_template_34_span_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵtext(1, "Active");
    i0.ɵɵelementEnd();
} }
function ContentListComponent_ng_template_34_span_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵtext(1, "Suspended");
    i0.ɵɵelementEnd();
} }
function ContentListComponent_ng_template_34_div_75_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "div", 43)(2, "p");
    i0.ɵɵtext(3, "Display From");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 44)(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r3.selectedBlogDetail.display_from == "" ? "-" : ctx_r3.selectedBlogDetail.display_from);
} }
function ContentListComponent_ng_template_34_div_76_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "div", 43)(2, "p");
    i0.ɵɵtext(3, "Display Until");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 44)(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r3.selectedBlogDetail.display_until == "" ? "-" : ctx_r3.selectedBlogDetail.display_until);
} }
function ContentListComponent_ng_template_34_img_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 30);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r3.env.imgUrl + "/" + ctx_r3.selectedBlogDetail.image, i0.ɵɵsanitizeUrl);
} }
function ContentListComponent_ng_template_34_img_83_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 50);
} }
function ContentListComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37)(1, "h5", 38);
    i0.ɵɵtext(2, "Content Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 39);
    i0.ɵɵlistener("click", function ContentListComponent_ng_template_34_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 40)(5, "div", 41)(6, "div", 42)(7, "div", 43)(8, "p");
    i0.ɵɵtext(9, "Title");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 44)(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 42)(14, "div", 43)(15, "p");
    i0.ɵɵtext(16, "Author Name");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 44)(18, "p");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 42)(21, "div", 43)(22, "p");
    i0.ɵɵtext(23, "Description");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(24, "div", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 42)(26, "div", 43)(27, "p");
    i0.ɵɵtext(28, "Category");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 44)(30, "p");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "div", 42)(33, "div", 43)(34, "p");
    i0.ɵɵtext(35, "Display Order");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div", 44)(37, "p");
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(39, "div", 42)(40, "div", 43)(41, "p");
    i0.ɵɵtext(42, "Display Order");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "div", 44)(44, "p");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "div", 42)(47, "div", 43)(48, "p");
    i0.ɵɵtext(49, "Location");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "div", 44)(51, "p");
    i0.ɵɵtext(52);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "div", 42)(54, "div", 43)(55, "p");
    i0.ɵɵtext(56, "Timing");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "div", 44)(58, "p");
    i0.ɵɵtext(59);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(60, "div", 42)(61, "div", 43)(62, "p");
    i0.ɵɵtext(63, "Event Date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "div", 44)(65, "p");
    i0.ɵɵtext(66);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(67, "div", 42)(68, "div", 43)(69, "p");
    i0.ɵɵtext(70, "Status");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(71, "div", 44)(72, "p");
    i0.ɵɵtemplate(73, ContentListComponent_ng_template_34_span_73_Template, 2, 0, "span", 32)(74, ContentListComponent_ng_template_34_span_74_Template, 2, 0, "span", 33);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(75, ContentListComponent_ng_template_34_div_75_Template, 7, 1, "div", 46)(76, ContentListComponent_ng_template_34_div_76_Template, 7, 1, "div", 46);
    i0.ɵɵelementStart(77, "div", 42)(78, "div", 43)(79, "p");
    i0.ɵɵtext(80, "Cover Image");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(81, "div", 43);
    i0.ɵɵtemplate(82, ContentListComponent_ng_template_34_img_82_Template, 1, 1, "img", 28)(83, ContentListComponent_ng_template_34_img_83_Template, 1, 0, "img", 47);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(84, "div", 42)(85, "div", 43)(86, "p");
    i0.ɵɵtext(87, "Redirect Url");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(88, "div", 44)(89, "p");
    i0.ɵɵtext(90);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(91, "div", 48)(92, "button", 49);
    i0.ɵɵlistener("click", function ContentListComponent_ng_template_34_Template_button_click_92_listener() { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.editBlog(ctx_r3.selectedBlogDetail)); });
    i0.ɵɵtext(93, "Edit Content");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r3.selectedBlogDetail.name);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r3.selectedBlogDetail.author);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("innerHTML", ctx_r3.selectedBlogDetail.long_description == "" ? "---" : ctx_r3.selectedBlogDetail.long_description, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r3.selectedBlogDetail.category_name);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r3.selectedBlogDetail.category_name);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r3.selectedBlogDetail.display_order);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r3.selectedBlogDetail.location == "" ? "-" : ctx_r3.selectedBlogDetail.location);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r3.selectedBlogDetail.timing == "" ? "-" : ctx_r3.selectedBlogDetail.timing);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r3.selectedBlogDetail.created_date == "" ? "-" : ctx_r3.selectedBlogDetail.created_date);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r3.selectedBlogDetail.status == "A");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedBlogDetail.status == "I");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedBlogDetail.status == "A");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedBlogDetail.status == "A");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r3.selectedBlogDetail.image != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedBlogDetail.image == "");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r3.selectedBlogDetail.redirect_url == "" ? "-" : ctx_r3.selectedBlogDetail.redirect_url);
} }
function ContentListComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 51)(1, "h5", 38);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 40)(4, "div", 52);
    i0.ɵɵtext(5, " Are you sure ? Do you want to delete this Content ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 53)(7, "button", 54);
    i0.ɵɵlistener("click", function ContentListComponent_ng_template_36_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r12); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.deleteBlog(ctx_r3.deleteDetail, ctx_r3.detailIndex)); });
    i0.ɵɵtext(8, "Delete");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.deleteDetail.name);
} }
export class ContentListComponent {
    constructor(auth, modalService, toastr, datePipe, router, sanitizer, env) {
        this.auth = auth;
        this.modalService = modalService;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.router = router;
        this.sanitizer = sanitizer;
        this.env = env;
        this.bloggerList = [];
        this.rows = [];
        this.recordPerPage = 10;
        this.searchedValue = '';
        this.statusList = [{ value: 'Active', id: 'A' }, { value: 'Suspended', id: 'I' }];
        this.selectedStatus = [];
        this.selectedCategory = [];
        this.categoryListData = [];
        if (this.router.url.includes('content-list')) {
            this.getBlogDetails();
            this.getCategoryList();
        }
    }
    ngOnInit() {
    }
    ngDoCheck() {
        setTimeout(() => {
            if (this.table) {
                this.table.recalculate();
            }
        }, 0);
    }
    ngOnDestroy() {
        this.auth.setSessionData('contentListSearchValue', JSON.stringify({
            category_id: this.selectedCategory,
            status: this.selectedStatus,
            searchValue: this.searchedValue
        }));
        if (this.contentList) {
            this.contentList.unsubscribe();
        }
    }
    getCategoryList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.contentCategoryList).subscribe((successData) => {
            this.blogListSuccess(successData);
        }, (error) => {
            console.error(error, ' error');
        });
    }
    blogListSuccess(successData) {
        console.log(successData, 'successData');
        this.categoryListData = successData.IsSuccess ? successData.ResponseObject : [];
        const getContentListSearch = JSON.parse(this.auth.getSessionData('contentListSearchValue'));
        this.selectedCategory = getContentListSearch.category_id;
        this.selectedStatus = getContentListSearch.status;
        this.searchedValue = getContentListSearch.searchValue;
        this.searchList();
        console.log(getContentListSearch, 'getContentListSearch');
        console.log(this.categoryListData, 'categoryListData');
    }
    searchBlog(event) {
        const searchValued = event.target.value;
        const temp = this.bloggerList.filter(search => {
            return search.name.toLowerCase().indexOf(searchValued) !== -1 || !searchValued;
        });
        this.rows = temp;
    }
    searchList() {
        let arrayValue = [];
        arrayValue = this.bloggerList;
        if (this.selectedCategory.length != 0) {
            arrayValue = arrayValue.filter(o1 => this.selectedCategory.some(o2 => o1.category_id === o2));
            console.log(arrayValue, 'arrayValue');
        }
        else {
            arrayValue = this.bloggerList;
        }
        console.log(arrayValue, 'aaraay2');
        this.selectedStatus.length != 0 ? arrayValue = arrayValue.filter(o1 => this.selectedStatus.some(o2 => o1.status === o2)) : '';
        console.log(arrayValue, 'status');
        const searchValued = this.searchedValue;
        arrayValue = arrayValue.filter(search => {
            return search.name.toLowerCase().indexOf(searchValued) !== -1 || !searchValued;
        });
        this.rows = arrayValue;
        console.log(arrayValue, 'aara');
    }
    getBlogDetails() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.contentList).subscribe((successData) => {
            this.bloggerListSuccess(successData);
        }, (error) => {
            console.error(error, 'booking error');
        });
    }
    bloggerListSuccess(successData) {
        if (successData.IsSuccess) {
            this.rows = successData.ResponseObject;
            this.bloggerList = successData.ResponseObject;
            this.bloggerList.forEach((item) => {
                if (item.display_from != '') {
                    const displayStart = item.display_from.split(' ');
                    const date = this.datePipe.transform(displayStart[0], 'MM-dd-yyyy');
                    item.display_from = date + ' ' + displayStart[1];
                }
                if (item.display_until != '') {
                    const displayEnd = item.display_until.split(' ');
                    const date = this.datePipe.transform(displayEnd[0], 'MM-dd-yyyy');
                    item.display_until = date + ' ' + displayEnd[1];
                }
                const created = item.created_date.split(' ');
                item.converted_created_date = this.datePipe.transform(created[0], dateOptions.dateFormat);
            });
        }
        else {
            this.rows = [];
            this.bloggerList = [];
        }
    }
    showBlogDetail(detail) {
        this.selectedBlogDetail = detail;
        this.modalRef = this.modalService.open(this.blogDetail, { size: 'lg', backdrop: 'static', centered: true });
        console.log(this.selectedBlogDetail, 'details');
    }
    addViewCount() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.selectedBlogDetail.content_id,
            views: this.selectedBlogDetail.views
        };
        this.auth.postService(data, urls.viewCount).subscribe((successData) => {
            console.log(successData);
        }, error => {
            console.error(error);
        });
    }
    editBlog(data) {
        this.modalRef ? this.modalRef.close() : '';
        sessionStorage.setItem('editBlog', JSON.stringify(data));
        this.router.navigate(['/content/content-list/edit']);
    }
    openDeleteDialog(detail, index) {
        this.deleteDetail = detail;
        this.detailIndex = index;
        this.modalRef = this.modalService.open(this.deleteBlogger, { size: 'xl', backdrop: 'static', centered: true });
    }
    deleteBlog(detail, index) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: detail.content_id
        };
        this.auth.postService(data, urls.deleteBlogger).subscribe((successData) => {
            this.bloggerDeleteSuccess(successData);
        }, error => {
            console.error(error);
            this.modalRef.close();
        });
    }
    bloggerDeleteSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.modalRef.close();
            this.getBlogDetails();
        }
    }
    close() {
        this.modalRef.close();
    }
    onImageError(event) {
        event.target.src = 'assets/images/blog/08.jpg';
    }
    static { this.ɵfac = function ContentListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentListComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i3.ToastrService), i0.ɵɵdirectiveInject(i4.DatePipe), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i6.DomSanitizer), i0.ɵɵdirectiveInject(i7.EnvironmentService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContentListComponent, selectors: [["app-content-list"]], viewQuery: function ContentListComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(DatatableComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.blogDetail = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteBlogger = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
        } }, decls: 38, vars: 18, consts: [["table", ""], ["blogDetail", ""], ["deleteBlogger", ""], [1, "row"], [1, "col-xl-12", "mb-30"], [1, "card", "card-statistics", "h-100"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between"], [1, "px-0"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "card-body"], [1, "form-group", "col-4", "my-3"], ["placeholder", "Select Category", "bindLabel", "category_name", "bindValue", "category_id", 3, "ngModelChange", "change", "multiple", "ngModel", "items"], ["placeholder", "Select Status", "bindLabel", "value", "bindValue", "id", 3, "ngModelChange", "change", "multiple", "ngModel", "items"], [1, "form-group", "col-4", "mt-2", "my-3"], [1, "input-group"], ["type", "text", "size", "50", "placeholder", "Search Category", 1, "form-control", 2, "height", "40px", 3, "input", "ngModelChange", "ngModel"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "bootstrap", "expandable", "ngx-datatable-design", 2, "font-size", "12px", "border", "1px solid #d1d4d7", "border-radius", "2px", 3, "externalSorting", "rows", "headerHeight", "limit", "footerHeight", "rowHeight", "scrollbarH", "columnMode", "messages"], ["name", "Title", "prop", "name"], ["ngx-datatable-cell-template", ""], ["name", "Category", "prop", "category_name"], ["name", "Created Date", "prop", "converted_created_date"], ["name", "Cover Image"], ["name", "Status", "prop", "status"], ["name", "Action", "prop", "batch"], [1, "blue-color", "cursor", 3, "click"], ["class", "img-thumbnail", "alt", "Cover Image", 3, "src", 4, "ngIf"], ["alt", "", "src", "assets/images/blog/08.jpg", "class", "img-thumbnail", 4, "ngIf"], ["alt", "Cover Image", 1, "img-thumbnail", 3, "src"], ["alt", "", "src", "assets/images/blog/08.jpg", 1, "img-thumbnail"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], [1, "badge", "badge-success"], [1, "badge", "badge-danger"], ["aria-hidden", "true", "title", "Edit Content Details", 1, "fa", "fa-pencil-square", "fa-2x", "fa-edit", "cursor", 2, "color", "#00bfff", 3, "click"], [1, "modal-header", "align-items-center"], [1, "contenttext", "text-center", "mb-0"], ["aria-hidden", "true", 1, "fa", "fa", "fa-times-circle", "pull-right", "cursor", "color-red-icon", 3, "click"], [1, "modal-body"], [1, "container-fluid"], [1, "row", "mt-3"], [1, "col-4"], [1, "col-8"], [1, "col-8", 3, "innerHTML"], ["class", "row mt-3", 4, "ngIf"], ["alt", "Card image cap", "class", "card-img-top blogger-detail-img", "src", "assets/images/blog/08.jpg", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-primary", "my-1", "float-left", "float-sm-right", 3, "click"], ["alt", "Card image cap", "src", "assets/images/blog/08.jpg", 1, "card-img-top", "blogger-detail-img"], [1, "modal-header"], [1, "col-12"], [1, "modal-footer", "d-flex", "justify-content-end"], [1, "btn", "btn-primary", 3, "click"]], template: function ContentListComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "h5", 7);
            i0.ɵɵtext(5, "Content List");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 8);
            i0.ɵɵtext(7, "Add Content");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 9)(9, "div", 3)(10, "div", 10)(11, "ng-select", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function ContentListComponent_Template_ng_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("change", function ContentListComponent_Template_ng_select_change_11_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.searchList()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 10)(13, "ng-select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function ContentListComponent_Template_ng_select_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("change", function ContentListComponent_Template_ng_select_change_13_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.searchList()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "div", 13)(15, "div", 14)(16, "input", 15);
            i0.ɵɵlistener("input", function ContentListComponent_Template_input_input_16_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.searchList()); });
            i0.ɵɵtwoWayListener("ngModelChange", function ContentListComponent_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchedValue, $event) || (ctx.searchedValue = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 16)(18, "button", 17);
            i0.ɵɵelement(19, "i", 18);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(20, "ngx-datatable", 19, 0)(22, "ngx-datatable-column", 20);
            i0.ɵɵtemplate(23, ContentListComponent_ng_template_23_Template, 2, 1, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "ngx-datatable-column", 22);
            i0.ɵɵtemplate(25, ContentListComponent_ng_template_25_Template, 2, 1, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "ngx-datatable-column", 23);
            i0.ɵɵtemplate(27, ContentListComponent_ng_template_27_Template, 2, 1, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "ngx-datatable-column", 24);
            i0.ɵɵtemplate(29, ContentListComponent_ng_template_29_Template, 2, 2, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "ngx-datatable-column", 25);
            i0.ɵɵtemplate(31, ContentListComponent_ng_template_31_Template, 2, 2, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "ngx-datatable-column", 26);
            i0.ɵɵtemplate(33, ContentListComponent_ng_template_33_Template, 4, 0, "ng-template", 21);
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵtemplate(34, ContentListComponent_ng_template_34_Template, 94, 16, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(36, ContentListComponent_ng_template_36_Template, 9, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("routerLink", "/content/content-list/add");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("multiple", true);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedCategory);
            i0.ɵɵproperty("items", ctx.categoryListData);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("multiple", true);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedStatus);
            i0.ɵɵproperty("items", ctx.statusList);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchedValue);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("externalSorting", false)("rows", ctx.rows)("headerHeight", 50)("limit", ctx.recordPerPage)("footerHeight", 50)("rowHeight", "auto")("scrollbarH", false)("columnMode", "force")("messages", i0.ɵɵpureFunction0(17, _c2));
        } }, dependencies: [i4.NgIf, i5.RouterLink, i8.DatatableComponent, i8.DataTableColumnDirective, i8.DataTableColumnCellDirective, i9.DefaultValueAccessor, i9.NgControlStatus, i9.NgModel, i10.NgSelectComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentListComponent, [{
        type: Component,
        args: [{ selector: 'app-content-list', template: "<!-- main body -->\n  <div class=\"row\">\n    <div class=\"col-xl-12 mb-30\">\n      <div class=\"card card-statistics h-100\">\n        <div class=\"card-header d-flex align-items-center justify-content-between\">\n            <h5 class=\"px-0\">Content List</h5>\n            <button class=\"btn btn-primary\" [routerLink]=\"'/content/content-list/add'\">Add Content</button>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"form-group col-4 my-3\">\n                <ng-select [multiple]=\"true\" placeholder=\"Select Category\" [(ngModel)]=\"selectedCategory\"\n                           [items]=\"categoryListData\" (change)=\"searchList()\"\n                           bindLabel=\"category_name\" bindValue=\"category_id\"></ng-select>\n              </div>\n              <div class=\"form-group col-4 my-3\">\n                <ng-select [multiple]=\"true\" placeholder=\"Select Status\" [(ngModel)]=\"selectedStatus\"\n                           [items]=\"statusList\" (change)=\"searchList()\"\n                           bindLabel=\"value\" bindValue=\"id\"></ng-select>\n              </div>\n              <div class=\"form-group col-4 mt-2 my-3\">\n                <div class=\"input-group\">\n                    <input (input)=\"searchList()\" type=\"text\" class=\"form-control\" style=\"height:40px\" size=\"50\" placeholder=\"Search Category\" [(ngModel)]=\"searchedValue\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-primary\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n                    </div>\n                </div>\n              </div>\n            </div>\n            <ngx-datatable #table\n            style=\"font-size: 12px;border: 1px solid #d1d4d7; border-radius: 2px\"\n                          class=\"bootstrap expandable ngx-datatable-design\"\n                           [externalSorting]=\"false\" [rows]=\"rows\"\n                           [headerHeight]=\"50\"\n                           [limit]=\"recordPerPage\"\n                           [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\n                           [scrollbarH]=\"false\"\n                           [columnMode]=\"'force'\"\n                           [messages]=\"{emptyMessage: 'No Content found'}\"\n            >\n              <ngx-datatable-column name=\"Title\" prop=\"name\">\n                <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\" ngx-datatable-cell-template let-expanded=\"expanded\">\n                  <h6 (click)=\"showBlogDetail(row)\" class=\"blue-color cursor\">{{row.name}}</h6>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"Category\" prop=\"category_name\">\n                <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\" ngx-datatable-cell-template let-expanded=\"expanded\">\n                  <h6>{{row.category_name}}</h6>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"Created Date\" prop=\"converted_created_date\">\n                <ng-template let-row=\"row\" let-rowIndex=\"rowIndex\" let-value=\"value\" ngx-datatable-cell-template let-expanded=\"expanded\">\n                  <p>{{row.converted_created_date}}</p>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"Cover Image\">\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                  <img *ngIf=\"row.image != ''\" class=\"img-thumbnail\" [src]=\"env.imgUrl + '/' + row.image\"  alt=\"Cover Image\" />\n                  <img alt=\"\" *ngIf=\"row.image == ''\"  src=\"assets/images/blog/08.jpg\" class=\"img-thumbnail\">\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"Status\" prop=\"status\">\n                <ng-template let-row=\"row\" let-value=\"value\" let-expanded=\"expanded\" ngx-datatable-cell-template>\n                  <span class=\"badge badge-success\" *ngIf=\"row.status == 'A'\">Active</span>\n                  <span class=\"badge badge-danger\" *ngIf=\"row.status == 'I'\">Suspended</span>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"Action\" prop=\"batch\">\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n  \n                  <span> &nbsp;&nbsp;</span>\n                  <span>\n                      <i class=\"fa fa-pencil-square fa-2x fa-edit cursor\" aria-hidden=\"true\" (click)=\"editBlog(row)\" style=\"color:#00bfff;\" title=\"Edit Content Details\"></i>\n                    </span>\n                </ng-template>\n              </ngx-datatable-column>\n            </ngx-datatable>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-template #blogDetail let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header align-items-center\">\n      <h5 class=\"contenttext text-center mb-0\">Content Details</h5>\n      <i class=\"fa fa fa-times-circle pull-right cursor color-red-icon\" aria-hidden=\"true\" (click)=\"close()\"></i>\n    </div>\n      <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n          <div class=\"row mt-3\">\n            <div class=\"col-4\">\n              <p>Title</p>\n            </div>\n            <div class=\"col-8\">\n              <p>{{selectedBlogDetail.name}}</p>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-4\">\n              <p>Author Name</p>\n            </div>\n            <div class=\"col-8\">\n              <p>{{selectedBlogDetail.author}}</p>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-4\">\n              <p>Description</p>\n            </div>\n            <div class=\"col-8\" [innerHTML]=\"selectedBlogDetail.long_description == '' ? '---' : selectedBlogDetail.long_description\">\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-4\">\n              <p>Category</p>\n            </div>\n            <div class=\"col-8\">\n              <p>{{selectedBlogDetail.category_name}}</p>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-4\">\n              <p>Display Order</p>\n            </div>\n            <div class=\"col-8\">\n              <p>{{selectedBlogDetail.category_name}}</p>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-4\">\n              <p>Display Order</p>\n            </div>\n            <div class=\"col-8\">\n              <p>{{selectedBlogDetail.display_order}}</p>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-4\">\n              <p>Location</p>\n            </div>\n            <div class=\"col-8\">\n              <p>{{selectedBlogDetail.location == '' ? '-' : selectedBlogDetail.location}}</p>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-4\">\n              <p>Timing</p>\n            </div>\n            <div class=\"col-8\">\n              <p>{{selectedBlogDetail.timing == '' ? '-' : selectedBlogDetail.timing}}</p>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-4\">\n              <p>Event Date</p>\n            </div>\n            <div class=\"col-8\">\n              <p>{{selectedBlogDetail.created_date == '' ? '-' : selectedBlogDetail.created_date}}</p>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-4\">\n              <p>Status</p>\n            </div>\n            <div class=\"col-8\">\n              <p><span class=\"badge badge-success\" *ngIf=\"selectedBlogDetail.status == 'A'\">Active</span>\n                <span class=\"badge badge-danger\" *ngIf=\"selectedBlogDetail.status == 'I'\">Suspended</span></p>\n            </div>\n          </div>\n          <div class=\"row mt-3\" *ngIf=\"selectedBlogDetail.status == 'A'\">\n            <div class=\"col-4\">\n              <p>Display From</p>\n            </div>\n            <div class=\"col-8\">\n              <p>{{selectedBlogDetail.display_from == '' ? '-' : selectedBlogDetail.display_from}}</p>\n            </div>\n          </div>\n          <div class=\"row mt-3\" *ngIf=\"selectedBlogDetail.status == 'A'\">\n            <div class=\"col-4\">\n              <p>Display Until</p>\n            </div>\n            <div class=\"col-8\">\n              <p>{{selectedBlogDetail.display_until == '' ? '-' : selectedBlogDetail.display_until}}</p>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-4\">\n              <p>Cover Image</p>\n            </div>\n            <div class=\"col-4\">\n              <img *ngIf=\"selectedBlogDetail.image != ''\" class=\"img-thumbnail\" [src]=\"env.imgUrl + '/' + selectedBlogDetail.image\"  alt=\"Cover Image\" />\n              <img *ngIf=\"selectedBlogDetail.image == ''\" alt=\"Card image cap\" class=\"card-img-top blogger-detail-img\"  src=\"assets/images/blog/08.jpg\">\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-4\">\n              <p>Redirect Url</p>\n            </div>\n            <div class=\"col-8\">\n              <p>{{selectedBlogDetail.redirect_url == '' ? '-' : selectedBlogDetail.redirect_url}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    <div class=\"modal-footer\">\n      <button (click)=\"editBlog(selectedBlogDetail)\" class=\"btn btn-primary my-1 float-left float-sm-right\">Edit Content</button>\n    </div>\n  </ng-template>\n  <ng-template #deleteBlogger let-c=\"close\" let-d=\"dismiss\">\n          <div class=\"modal-header\">\n              <h5 class=\"contenttext text-center mb-0\">{{this.deleteDetail.name}}</h5>\n          </div>\n          <div class=\"modal-body\">\n              <div class=\"col-12\">\n                  Are you sure ? Do you want to delete this Content\n              </div>\n          </div>\n      <div class=\"modal-footer d-flex justify-content-end\">\n          <button (click)=\"deleteBlog(deleteDetail, detailIndex)\" class=\"btn btn-primary\">Delete</button>\n      </div>\n  </ng-template>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.NgbModal }, { type: i3.ToastrService }, { type: i4.DatePipe }, { type: i5.Router }, { type: i6.DomSanitizer }, { type: i7.EnvironmentService }], { blogDetail: [{
            type: ViewChild,
            args: ['blogDetail']
        }], deleteBlogger: [{
            type: ViewChild,
            args: ['deleteBlogger']
        }], table: [{
            type: ViewChild,
            args: [DatatableComponent, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContentListComponent, { className: "ContentListComponent" }); })();
//# sourceMappingURL=content-list.component.js.map