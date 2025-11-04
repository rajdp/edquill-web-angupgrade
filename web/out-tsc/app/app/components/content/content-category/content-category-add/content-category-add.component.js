import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { urls } from 'src/app/shared/utils/urls';
import * as i0 from "@angular/core";
import * as i1 from "src/app/shared/service/auth.service";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/router";
import * as i4 from "src/app/shared/service/validation.service";
import * as i5 from "ngx-toastr";
import * as i6 from "src/app/environment.service";
import * as i7 from "@angular/platform-browser";
import * as i8 from "@angular/common";
import * as i9 from "../../../auth/tiny-mice/tiny-mice.component";
const _c0 = ["myInput"];
function ContentCategoryAddComponent_em_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 20);
    i0.ɵɵtext(1, "Category Name is required");
    i0.ɵɵelementEnd();
} }
function ContentCategoryAddComponent_em_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 20);
    i0.ɵɵtext(1, "Display Order Number is required");
    i0.ɵɵelementEnd();
} }
function ContentCategoryAddComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "label", 31)(2, "span", 32);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "Cover Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 33)(6, "i", 34);
    i0.ɵɵlistener("click", function ContentCategoryAddComponent_div_48_Template_i_click_6_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.deleteImg()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 35);
    i0.ɵɵelement(8, "img", 36);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + ctx_r2.imagePath), i0.ɵɵsanitizeUrl);
} }
export class ContentCategoryAddComponent {
    constructor(auth, fb, router, route, validationService, toastr, env, sanitizer) {
        this.auth = auth;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.validationService = validationService;
        this.toastr = toastr;
        this.env = env;
        this.sanitizer = sanitizer;
        this.categoryList = [];
        this.categoryId = '';
        this.type = 'add';
        this.errorMessage = '';
        this.maximumCount = 100;
        this.description = '';
        this.webhost = this.env.imgUrl;
        this.imagePath = '';
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.form = this.fb.group({
            category_name: ['', Validators.required],
            description: '',
            status: 'A',
            display_order: ['', Validators.required]
        });
        this.getCategoryList();
        setTimeout(() => {
            if (this.type == 'edit') {
                this.maximumCount = parseInt(this.auth.getSessionData('content_category_maximumCount'));
                this.getEditableform(JSON.parse(this.auth.getSessionData('edit_content_category_Data')));
            }
            else {
                this.maximumCount = parseInt(this.auth.getSessionData('content_category_maximumCount')) + 1;
                this.form.controls.display_order.patchValue(this.maximumCount);
            }
        }, 0);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.auth.removeSessionData('edit_content_category_Data');
    }
    getEditableform(item) {
        console.log(item, 'editvalueee');
        this.categoryId = item.category_id;
        this.form.controls.category_name.patchValue(item.category_name);
        this.form.controls.status.patchValue(item.status);
        this.description = item.description;
        this.form.controls.description.patchValue(item.description);
        this.imagePath = item.path;
        this.form.controls.display_order.patchValue(item.display_order ?? '');
    }
    editorValue(event) {
        this.form.controls.description.patchValue(event.content);
    }
    numberValidate(event) {
        this.validationService.numberOnlyValidate(event);
    }
    getCategoryList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.contentCategoryList).subscribe((successData) => {
            this.listSuccess(successData);
        }, (error) => {
            console.error(error, 'booking error');
        });
    }
    listSuccess(successData) {
        if (successData.IsSuccess) {
            this.categoryList = successData.ResponseObject;
        }
    }
    showErrorMessage() {
        const maximumAllowedNumber = this.maximumCount;
        const orderValue = parseInt(this.form.controls.display_order.value);
        if (this.form.controls.display_order.value == 0 && this.form.controls.display_order.value != '') {
            this.errorMessage = 'Display Order number should not be zero';
        }
        else if (this.form.controls.display_order.value != '') {
            this.errorMessage = orderValue > maximumAllowedNumber ?
                'Display order number should not be greater than' + ' ' + maximumAllowedNumber : '';
        }
        else if (this.form.controls.display_order.value == '') {
            this.errorMessage = '';
        }
        return this.errorMessage;
    }
    encodeImageFileAsURL(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            const imgDetails = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                const pic = imgDetails.type.split('/');
                if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] == 'jpg' || pic[1] === 'webp') {
                    this.onUploadComplete(getUrl, imgDetails);
                }
                else {
                    this.toastr.error('JPEG ,PNG, JPG  & WEBP are the required type');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }
    onUploadComplete(imagePath, imageList) {
        this.recordBase64Url = imagePath[1];
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: [{
                    image: this.recordBase64Url,
                    size: imageList.size,
                    type: imageList.type,
                    name: imageList.name
                }],
            uploadtype: 'content-category'
        };
        this.auth.postService(data, urls.fileUpload).subscribe((successData) => {
            this.uploadSuccess(successData);
        }, error => {
            console.error(error, 'error');
        });
    }
    uploadSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.deleteImg();
            this.imagePath = successData.ResponseObject.imagepath[0]?.original_image_url;
        }
    }
    deleteImg() {
        this.imagePath = '';
        this.myInputVariable.nativeElement.value = '';
    }
    addcategory() {
        if (this.form.valid) {
            if (this.errorMessage == '') {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    category_name: this.form.controls.category_name.value,
                    status: this.form.controls.status.value,
                    description: this.form.controls.description.value,
                    path: this.imagePath,
                    category_id: this.categoryId,
                    display_order: this.form.controls.display_order.value,
                    school_id: this.auth.getSessionData('school_id')
                };
                console.log(data, 'paylaod');
                this.auth.postService(data, this.categoryId == '' ? urls.contentCategoryAdd : urls.contentCategoryEdit).subscribe((successData) => {
                    this.categoryAddSuccess(successData);
                }, (error) => {
                    console.error(error, 'category add error');
                });
            }
            else {
                this.toastr.error('Please enter valid display order number');
            }
        }
        else {
            this.validationService.validateAllFormFields(this.form);
            this.toastr.error('Please fill all Mandatory fields');
        }
    }
    categoryAddSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.router.navigate(['/content/category/list']);
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    static { this.ɵfac = function ContentCategoryAddComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentCategoryAddComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.ValidationService), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.EnvironmentService), i0.ɵɵdirectiveInject(i7.DomSanitizer)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContentCategoryAddComponent, selectors: [["app-content-category-add"]], viewQuery: function ContentCategoryAddComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
        } }, decls: 66, vars: 10, consts: [["myInput", ""], [1, "container-fluid", "card"], [1, "card-header", "my-2"], [1, "text-capitalize"], [1, "text-muted"], [1, "text-danger"], [1, "card-body"], [1, "mt-3", 3, "formGroup"], [1, "form-group", "row", "mt-1"], [1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["formControlName", "category_name", "placeholder", "Category Name", 1, "form-control"], ["class", "error", 4, "ngIf"], [2, "visibility", "hidden"], [1, "main-content"], [3, "emitEditorValue", "height", "editorPatchValue", "hideMatEditor"], [1, "form-group", "row"], [1, "col-xl-2", "col-md-2"], [1, "col-xl-10", "col-md-10"], ["maxlength", "4", "formControlName", "display_order", "placeholder", "Enter Display Order Number", "type", "text", 1, "form-control", 3, "keypress"], [1, "error"], ["accept", ".png, .jpg, .jpeg,.webp", "type", "file", 1, "custom-upload-input", "col-md-12", "px-0", 3, "change"], [1, "color-grey", "mb-0", "font-weight-bold", 2, "font-size", "12px"], ["class", "form-group col-12 d-flex", 4, "ngIf"], ["formControlName", "status", 1, "form-control"], ["value", "A"], ["value", "I"], [1, "card-footer"], [1, "button", "float-right", "btn", "btn-primary", "mb-2", 3, "click"], ["routerLink", "/content/category/list", 1, "float-right", "btn", "cancel", "mb-2", "mr-2"], [1, "form-group", "col-12", "d-flex"], [1, "col-sm-2", "col-form-label", 2, "visibility", "hidden"], [1, "mr-1", "text-danger"], [1, "col-xl-10", "col-md-10", "px-0"], ["title", "close", 1, "fa", "fa-times-circle", "close-icon", 3, "click"], [1, "files-list", "fit-img2"], ["alt", "", 1, "w-30", 3, "src"]], template: function ContentCategoryAddComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section")(1, "div", 1)(2, "div", 2)(3, "h5", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "label", 4);
            i0.ɵɵtext(6, "All fields marked with ");
            i0.ɵɵelementStart(7, "span", 5);
            i0.ɵɵtext(8, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(9, " are required");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 6)(11, "form", 7)(12, "div", 8)(13, "label", 9)(14, "span", 5);
            i0.ɵɵtext(15, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16, " Category Name ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 10);
            i0.ɵɵelement(18, "input", 11);
            i0.ɵɵtemplate(19, ContentCategoryAddComponent_em_19_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 8)(21, "label", 9)(22, "span", 13);
            i0.ɵɵtext(23, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(24, " Description");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 10)(26, "div", 14)(27, "app-tiny-mice", 15);
            i0.ɵɵlistener("emitEditorValue", function ContentCategoryAddComponent_Template_app_tiny_mice_emitEditorValue_27_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.editorValue($event)); });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(28, "div", 16)(29, "label", 17)(30, "span", 5);
            i0.ɵɵtext(31, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(32, " Display Order");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 18)(34, "input", 19);
            i0.ɵɵlistener("keypress", function ContentCategoryAddComponent_Template_input_keypress_34_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.numberValidate($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(35, ContentCategoryAddComponent_em_35_Template, 2, 0, "em", 12);
            i0.ɵɵelementStart(36, "em", 20);
            i0.ɵɵtext(37);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(38, "div", 8)(39, "label", 9)(40, "span", 13);
            i0.ɵɵtext(41, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(42, " Cover Image");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div", 10)(44, "input", 21, 0);
            i0.ɵɵlistener("change", function ContentCategoryAddComponent_Template_input_change_44_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.encodeImageFileAsURL($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "span", 22);
            i0.ɵɵtext(47, "Recommended Size 1MB");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(48, ContentCategoryAddComponent_div_48_Template, 9, 1, "div", 23);
            i0.ɵɵelementStart(49, "div", 8)(50, "label", 9)(51, "span", 13);
            i0.ɵɵtext(52, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(53, " Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "div", 10)(55, "div", 14)(56, "select", 24)(57, "option", 25);
            i0.ɵɵtext(58, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "option", 26);
            i0.ɵɵtext(60, "Suspended");
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelementStart(61, "div", 27)(62, "button", 28);
            i0.ɵɵlistener("click", function ContentCategoryAddComponent_Template_button_click_62_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addcategory()); });
            i0.ɵɵtext(63);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "a", 29);
            i0.ɵɵtext(65, "Close");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("", ctx.type == "add" ? "Add" : "Update", " Category");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.form.get("category_name").valid && (ctx.form.get("category_name").dirty || ctx.form.get("category_name").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("height", 300)("editorPatchValue", ctx.type == "add" ? false : ctx.description)("hideMatEditor", true);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.form.get("display_order").valid && (ctx.form.get("display_order").dirty || ctx.form.get("display_order").touched));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.showErrorMessage());
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngIf", ctx.imagePath != "");
            i0.ɵɵadvance(15);
            i0.ɵɵtextInterpolate(ctx.categoryId == "" ? "Add Content" : "Update Content");
        } }, dependencies: [i8.NgIf, i3.RouterLink, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName, i9.TinyMiceComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentCategoryAddComponent, [{
        type: Component,
        args: [{ selector: 'app-content-category-add', template: "<section>\n    <div class=\"container-fluid card\">\n        <div class=\"card-header my-2\">\n            <h5 class=\"text-capitalize\">{{type == 'add' ? 'Add' : 'Update'}} Category</h5>\n            <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n        </div>\n        <div class=\"card-body\">\n            <form class=\"mt-3\" [formGroup]=\"form\">\n                <div class=\"form-group row mt-1\">\n                    <label class=\"col-sm-2 col-form-label\"><span class=\"text-danger\">*</span> Category Name </label>\n                    <div class=\"col-sm-10\">\n                        <input class=\"form-control\" formControlName=\"category_name\" placeholder=\"Category Name\">\n                        <em *ngIf=\"!form.get('category_name').valid && (form.get('category_name').dirty || form.get('category_name').touched)\"\n                            class=\"error\">Category Name is required</em>\n                    </div>\n                </div>\n                <div class=\"form-group row mt-1\">\n                    <label class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden\">*</span> Description</label>\n                    <div class=\"col-sm-10\">\n                        <div class=\"main-content\">\n                            <app-tiny-mice [height]=\"300\" [editorPatchValue]=\"type == 'add' ? false : description\"\n                                           (emitEditorValue)=\"editorValue($event)\"\n                                           [hideMatEditor]=\"true\"></app-tiny-mice>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label class=\"col-xl-2 col-md-2\"><span class=\"text-danger\">*</span>\n                        Display Order</label>\n                    <div class=\"col-xl-10 col-md-10\">\n                        <input maxlength=\"4\" (keypress)=\"numberValidate($event)\" class=\"form-control\"\n                               formControlName=\"display_order\"\n                               placeholder=\"Enter Display Order Number\" type=\"text\">\n                        <em *ngIf=\"!form.get('display_order').valid && (form.get('display_order').dirty || form.get('display_order').touched)\"\n                            class=\"error\">Display Order Number is required</em>\n                        <em class=\"error\">{{showErrorMessage()}}</em>\n                    </div>\n                </div>\n                <div class=\"form-group row mt-1\">\n                    <label class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden\">*</span> Cover Image</label>\n                    <div class=\"col-sm-10\">\n                        <input #myInput (change)=\"encodeImageFileAsURL($event)\" accept=\".png, .jpg, .jpeg,.webp\"\n                               class=\"custom-upload-input col-md-12 px-0\" type=\"file\">\n                        <span class=\"color-grey mb-0 font-weight-bold\"\n                              style=\"font-size: 12px\">Recommended Size 1MB</span>\n                    </div>\n                </div>\n                <div class=\"form-group col-12 d-flex\" *ngIf=\"imagePath != ''\">\n                    <label style=\"visibility: hidden\" class=\"col-sm-2 col-form-label\"><span\n                            class=\"mr-1 text-danger\">*</span>Cover Image</label>\n                    <div class=\"col-xl-10 col-md-10 px-0\">\n                        <i (click)=\"deleteImg()\" class=\"fa fa-times-circle close-icon\" title=\"close\"></i>\n                        <div class=\"files-list fit-img2\">\n                            <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost  + '/' + imagePath)\" class=\"w-30\" alt=\"\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group row mt-1\">\n                    <label class=\"col-sm-2 col-form-label\"><span style=\"visibility: hidden\">*</span> Status</label>\n                    <div class=\"col-sm-10\">\n                        <div class=\"main-content\">\n                            <select class=\"form-control\" formControlName=\"status\">\n                                <option value=\"A\">Active</option>\n                                <option value=\"I\">Suspended</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"card-footer\">\n            <button class=\"button float-right btn btn-primary mb-2\"\n                    (click)=\"addcategory()\">{{categoryId == '' ? 'Add Content' : 'Update Content'}}</button>\n            <a class=\"float-right btn cancel mb-2 mr-2\" routerLink=\"/content/category/list\">Close</a>\n        </div>\n    </div>\n</section>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.FormBuilder }, { type: i3.Router }, { type: i3.ActivatedRoute }, { type: i4.ValidationService }, { type: i5.ToastrService }, { type: i6.EnvironmentService }, { type: i7.DomSanitizer }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContentCategoryAddComponent, { className: "ContentCategoryAddComponent" }); })();
//# sourceMappingURL=content-category-add.component.js.map