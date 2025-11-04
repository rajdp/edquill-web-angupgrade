import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "../../../shared/service/common-data.service";
import * as i4 from "ngx-toastr";
import * as i5 from "../../../shared/service/auth.service";
import * as i6 from "../../../shared/service/School.service";
import * as i7 from "@angular/platform-browser";
import * as i8 from "../../../shared/service/validation.service";
import * as i9 from "../../../shared/service/common.service";
import * as i10 from "../../../shared/service/configuration.service";
import * as i11 from "@angular/common";
function AddHomeComponent_h5_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 40);
    i0.ɵɵtext(1, "Add School");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_h5_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 40);
    i0.ɵɵtext(1, "Edit School");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_em_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 52);
    i0.ɵɵtext(1, "Institution Name is required");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_em_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 52);
    i0.ɵɵtext(1, "Address 1 is required");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_em_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 52);
    i0.ɵɵtext(1, "City is required");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_em_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 52);
    i0.ɵɵtext(1, "State is required");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_em_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 52);
    i0.ɵɵtext(1, "Country is required");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_em_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 52);
    i0.ɵɵtext(1, "Postal Code is required");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_div_71_em_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 52);
    i0.ɵɵtext(1, "Branch is required");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "label", 53)(2, "span");
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Corporate Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 10);
    i0.ɵɵelement(6, "input", 54);
    i0.ɵɵtemplate(7, AddHomeComponent_div_71_em_7_Template, 2, 0, "em", 12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("required", ctx_r0.schoolform.controls.isgroup1.value == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.schoolform.get("branchName").valid && (ctx_r0.schoolform.get("branchName").dirty || ctx_r0.schoolform.get("branchName").touched));
} }
function AddHomeComponent_div_86_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 57);
} if (rf & 2) {
    const file_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.sanitizer.bypassSecurityTrustResourceUrl(ctx_r0.webhost + "/" + file_r2), i0.ɵɵsanitizeUrl);
} }
function AddHomeComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵtemplate(1, AddHomeComponent_div_86_img_1_Template, 1, 1, "img", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.imagepath != "");
} }
function AddHomeComponent_em_99_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 52);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_em_107_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 52);
    i0.ɵɵtext(1, "Last name is required");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_input_114_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 58);
} }
function AddHomeComponent_input_115_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 59);
} }
function AddHomeComponent_em_116_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 52);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_em_117_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 52);
    i0.ɵɵtext(1, "Invalid Email-Id");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_em_125_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 52);
    i0.ɵɵtext(1, "Contact Number is required");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_button_127_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 60);
    i0.ɵɵlistener("click", function AddHomeComponent_button_127_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.addschool("add")); });
    i0.ɵɵtext(1, "Save");
    i0.ɵɵelementEnd();
} }
function AddHomeComponent_button_128_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 60);
    i0.ɵɵlistener("click", function AddHomeComponent_button_128_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.addschool("edit")); });
    i0.ɵɵtext(1, "Update");
    i0.ɵɵelementEnd();
} }
export class AddHomeComponent {
    constructor(route, formBuilder, commondata, toastr, auth, brandservices, sanitizer, router, validationService, common, config) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.commondata = commondata;
        this.toastr = toastr;
        this.auth = auth;
        this.brandservices = brandservices;
        this.sanitizer = sanitizer;
        this.router = router;
        this.validationService = validationService;
        this.common = common;
        this.config = config;
        this.branchSelect = false;
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.webhost = this.config.getimgUrl();
        this.imagepath = [];
        this.imagepaththumb = [];
        this.schoolform = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email_id: ['', Validators.required],
            mobile: ['', Validators.required],
            schoolName: ['', Validators.required],
            address1: ['', Validators.required],
            address2: '',
            city: ['', Validators.required],
            state: ['', Validators.required],
            country: ['', Validators.required],
            postalCode: ['', Validators.required],
            branchName: '',
            taxId: '',
            documentUpload: '',
            isgroup1: '',
            isgroup2: ''
        });
        if (this.type == 'edit') {
            this.editData = JSON.parse(this.auth.getSessionData('editschool'));
            this.school_id = this.editData.school_id;
            this.status = this.editData.status;
            this.schoolform.controls.first_name.patchValue(this.editData.first_name);
            this.schoolform.controls.last_name.patchValue(this.editData.last_name);
            this.schoolform.controls.email_id.patchValue(this.editData.email_id);
            this.schoolform.controls.mobile.patchValue(this.editData.mobile);
            this.schoolform.controls.schoolName.patchValue(this.editData.name);
            this.schoolform.controls.address1.patchValue(this.editData.address1);
            this.schoolform.controls.address2.patchValue(this.editData.address2);
            this.schoolform.controls.city.patchValue(this.editData.city);
            this.schoolform.controls.state.patchValue(this.editData.state);
            this.schoolform.controls.country.patchValue(this.editData.country);
            this.schoolform.controls.postalCode.patchValue(this.editData.postal_code);
            if (this.editData.has_branch == 1) {
                this.schoolform.controls.isgroup1.patchValue(true);
                this.branchSelect = true;
            }
            else if (this.editData.has_branch == 0) {
                this.schoolform.controls.isgroup1.patchValue(false);
                this.branchSelect = false;
            }
            this.schoolform.controls.branchName.patchValue(this.editData.branch_name);
            this.schoolform.controls.taxId.patchValue(this.editData.tax_id);
            this.imagepath.push(this.editData.profile_url);
            this.imagepaththumb.push(this.editData.profile_thumb_url);
        }
        else {
            this.schoolform.controls.first_name.patchValue('');
            this.schoolform.controls.last_name.patchValue('');
            this.schoolform.controls.email_id.patchValue('');
            this.schoolform.controls.mobile.patchValue('');
            this.schoolform.controls.schoolName.patchValue('');
            this.schoolform.controls.address1.patchValue('');
            this.schoolform.controls.address2.patchValue('');
            this.schoolform.controls.city.patchValue('');
            this.schoolform.controls.state.patchValue('');
            this.schoolform.controls.country.patchValue('');
            this.schoolform.controls.postalCode.patchValue('');
            this.schoolform.controls.taxId.patchValue('');
            this.schoolform.controls.isgroup1.patchValue('');
            this.schoolform.controls.branchName.patchValue('');
            this.imagepath = '';
            this.imagepaththumb = '';
        }
    }
    ngOnInit() {
        this.commondata.showLoader(false);
    }
    addschool(value) {
        if (this.schoolform.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                first_name: this.schoolform.controls.first_name.value,
                last_name: this.schoolform.controls.last_name.value,
                email_id: this.schoolform.controls.email_id.value,
                mobile: this.schoolform.controls.mobile.value,
                name: this.schoolform.controls.schoolName.value,
                address1: this.schoolform.controls.address1.value,
                address2: this.schoolform.controls.address2.value,
                city: this.schoolform.controls.city.value,
                state: this.schoolform.controls.state.value,
                country: this.schoolform.controls.country.value,
                postal_code: this.schoolform.controls.postalCode.value,
                has_branch: this.schoolform.controls.isgroup1.value == true ? '1' : '0',
                branch_name: this.schoolform.controls.branchName.value,
                tax_id: this.schoolform.controls.taxId.value ? this.schoolform.controls.taxId.value : '',
                profile_url: this.imagepath.toString(),
                profile_thumb_url: this.imagepaththumb.toString(),
                school_id: this.school_id ? this.school_id : '',
                status: this.status ? this.status : ''
            };
            if (value == 'add') {
                this.brandservices.brandAdd(data).subscribe((successData) => {
                    this.addCategorySuccess(successData);
                }, (error) => {
                    this.addCategoryFailure(error);
                });
            }
            else if (value == 'edit') {
                this.brandservices.brandEdit(data).subscribe((successData) => {
                    this.addCategorySuccess(successData);
                }, (error) => {
                    this.addCategoryFailure(error);
                });
            }
        }
        else {
            this.validationService.validateAllFormFields(this.schoolform);
        }
    }
    addCategorySuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success(successData.ResponseObject, 'School');
            this.router.navigate(['/School/list-School']);
        }
        else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, 'School');
        }
    }
    addCategoryFailure(error) {
        console.log(error, 'error');
    }
    numberPattern(event) {
        this.validationService.numberValidate1(event);
    }
    encodeImageFileAsURL(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const imgDetails = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                this.onUploadKYCFinished(getUrl, imgDetails);
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }
    onUploadKYCFinished(getUrlEdu, imageList) {
        this.recordBase64Url = getUrlEdu[1];
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
            uploadtype: 'school'
        };
        this.common.fileUpload(data).subscribe((successData) => {
            this.uploadSuccess(successData);
        }, (error) => {
        });
    }
    uploadSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.imagepath = [];
            for (let i = 0; i < successData.ResponseObject.imagepath.length; i++) {
                this.imagepath.push(successData.ResponseObject.imagepath[i].original_image_url);
                this.imagepaththumb.push(successData.ResponseObject.imagepath[i].resized_url);
            }
        }
    }
    checkValue(eve) {
        if (eve.target.checked == true) {
            this.branchSelect = true;
            this.schoolform.controls.isgroup1.setValidators([Validators.required]);
            this.schoolform.controls.isgroup1.updateValueAndValidity();
        }
        else {
            this.schoolform.controls.isgroup1.clearValidators();
            this.schoolform.controls.isgroup1.setValidators(null);
            this.schoolform.controls.isgroup1.updateValueAndValidity();
            setTimeout(() => {
                this.branchSelect = false;
            }, 500);
        }
    }
    static { this.ɵfac = function AddHomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddHomeComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.CommonDataService), i0.ɵɵdirectiveInject(i4.ToastrService), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.SchoolService), i0.ɵɵdirectiveInject(i7.DomSanitizer), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i8.ValidationService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i10.ConfigurationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddHomeComponent, selectors: [["app-add-home"]], decls: 129, vars: 20, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header"], ["class", "text-capitalize", 4, "ngIf"], [1, "card-body", "tab2-card"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom4", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "schoolName", "id", "validationCustom4", "type", "text", "placeholder", "Institution Name", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom5", 1, "col-xl-3", "col-md-4"], ["formControlName", "address1", "id", "validationCustom5", "type", "text", "placeholder", "Address1", "required", "", 1, "form-control"], ["for", "validationCustom6", 1, "col-xl-3", "col-md-4", 2, "position", "relative", "left", "8px"], ["formControlName", "address2", "id", "validationCustom6", "placeholder", "Address2", "type", "text", 1, "form-control"], ["for", "validationCustom7", 1, "col-xl-3", "col-md-4"], ["formControlName", "city", "id", "validationCustom7", "type", "text", "placeholder", "City", "required", "", 1, "form-control"], ["for", "validationCustom8", 1, "col-xl-3", "col-md-4"], ["formControlName", "state", "id", "validationCustom8", "type", "text", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationCustom9", 1, "col-xl-3", "col-md-4"], ["formControlName", "country", "id", "validationCustom9", "placeholder", "Country", "required", "", "type", "text", 1, "form-control"], ["for", "validationCustom10", 1, "col-xl-3", "col-md-4"], ["formControlName", "postalCode", "id", "validationCustom10", "type", "text", "placeholder", "Enter Zip", "required", "", 1, "form-control"], [1, "col-xl-3", "col-md-4"], [1, "form-check-label", 2, "position", "relative", "left", "8px"], [1, "col-xl-8", "col-md-7", 2, "position", "relative", "left", "1.5rem"], ["type", "checkbox", "formControlName", "isgroup1", 1, "form-check-input", 3, "change"], ["class", "form-group row", 4, "ngIf"], [1, "form-group", "row", "mb-3"], ["for", "validationCustom13", 1, "col-xl-3", "col-md-4", 2, "position", "relative", "left", "8px"], ["formControlName", "taxId", "id", "validationCustom13", "type", "text", "placeholder", "Tax ID", 1, "form-control"], [1, "col-xl-3", "col-md-4", 2, "position", "relative", "left", "8px"], [1, "col-xl-6", "col-md-4"], ["type", "file", 1, "custom-upload-input", 3, "change"], [1, "col-xl-3", "col-md-4", 2, "position", "relative", "left", "25%"], ["class", "files-list", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "card-header", 2, "position", "relative", "right", "22px"], [1, "text-capitalize"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], ["formControlName", "first_name", "id", "validationCustom0", "type", "text", "placeholder", "First Name", "required", "", 1, "form-control"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["formControlName", "last_name", "id", "validationCustom1", "type", "text", "placeholder", "Last Name", "required", "", 1, "form-control"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["class", "form-control ", "formControlName", "email_id", "id", "validationCustom2", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "type", "email", "placeholder", "Email", "required", "", 4, "ngIf"], ["readonly", "", "class", "form-control ", "formControlName", "email_id", "id", "validationCustom22", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "type", "email", "placeholder", "Email", "required", "", 4, "ngIf"], ["for", "validationCustom3", 1, "col-xl-3", "col-md-4"], ["formControlName", "mobile", "id", "validationCustom3", "type", "text", "placeholder", "Contact Number", "maxlength", "10", "minlength", "10", "required", "", 1, "form-control", 3, "keypress"], [1, "pull-right"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "error"], ["for", "validationCustom12", 1, "col-xl-3", "col-md-4", 2, "position", "relative", "left", "8px"], ["formControlName", "branchName", "id", "validationCustom12", "type", "text", "placeholder", "Corporate Name", 1, "form-control", 3, "required"], [1, "files-list"], ["class", "w-100", "alt", "", 3, "src", 4, "ngIf"], ["alt", "", 1, "w-100", 3, "src"], ["formControlName", "email_id", "id", "validationCustom2", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "type", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["readonly", "", "formControlName", "email_id", "id", "validationCustom22", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "type", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AddHomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵtemplate(5, AddHomeComponent_h5_5_Template, 2, 0, "h5", 5)(6, AddHomeComponent_h5_6_Template, 2, 0, "h5", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 6)(8, "form", 7)(9, "div", 8)(10, "label", 9)(11, "span");
            i0.ɵɵtext(12, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, " Institution Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 10);
            i0.ɵɵelement(15, "input", 11);
            i0.ɵɵtemplate(16, AddHomeComponent_em_16_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 8)(18, "label", 13)(19, "span");
            i0.ɵɵtext(20, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(21, " Address 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 10);
            i0.ɵɵelement(23, "input", 14);
            i0.ɵɵtemplate(24, AddHomeComponent_em_24_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div", 8)(26, "label", 15);
            i0.ɵɵtext(27, " Address 2 ");
            i0.ɵɵelementStart(28, "small");
            i0.ɵɵtext(29, "(optional)");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "div", 10);
            i0.ɵɵelement(31, "input", 16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "div", 8)(33, "label", 17)(34, "span");
            i0.ɵɵtext(35, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(36, " City");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div", 10);
            i0.ɵɵelement(38, "input", 18);
            i0.ɵɵtemplate(39, AddHomeComponent_em_39_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "div", 8)(41, "label", 19)(42, "span");
            i0.ɵɵtext(43, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(44, " State");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "div", 10);
            i0.ɵɵelement(46, "input", 20);
            i0.ɵɵtemplate(47, AddHomeComponent_em_47_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(48, "div", 8)(49, "label", 21)(50, "span");
            i0.ɵɵtext(51, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(52, " Country");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "div", 10);
            i0.ɵɵelement(54, "input", 22);
            i0.ɵɵtemplate(55, AddHomeComponent_em_55_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "div", 8)(57, "label", 23)(58, "span");
            i0.ɵɵtext(59, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(60, " Zip ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "div", 10);
            i0.ɵɵelement(62, "input", 24);
            i0.ɵɵtemplate(63, AddHomeComponent_em_63_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(64, "div", 8)(65, "div", 25)(66, "label", 26);
            i0.ɵɵtext(67, " Is group of schools");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(68, "div", 27)(69, "input", 28);
            i0.ɵɵlistener("change", function AddHomeComponent_Template_input_change_69_listener($event) { return ctx.checkValue($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(70, "Yes ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(71, AddHomeComponent_div_71_Template, 8, 2, "div", 29);
            i0.ɵɵelementStart(72, "div", 30)(73, "label", 31);
            i0.ɵɵtext(74, " Tax ID ");
            i0.ɵɵelementStart(75, "small");
            i0.ɵɵtext(76, "(optional)");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(77, "div", 10);
            i0.ɵɵelement(78, "input", 32);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(79, "div", 8)(80, "label", 33);
            i0.ɵɵtext(81, " Profile Photo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(82, "div", 34)(83, "input", 35);
            i0.ɵɵlistener("change", function AddHomeComponent_Template_input_change_83_listener($event) { return ctx.encodeImageFileAsURL($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(84, "div", 8)(85, "div", 36);
            i0.ɵɵtemplate(86, AddHomeComponent_div_86_Template, 2, 1, "div", 37);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(87, "div", 38);
            i0.ɵɵelement(88, "hr");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "div", 39)(90, "h5", 40);
            i0.ɵɵtext(91, "Admin Details");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(92, "div", 8)(93, "label", 41)(94, "span");
            i0.ɵɵtext(95, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(96, " Admin First Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(97, "div", 10);
            i0.ɵɵelement(98, "input", 42);
            i0.ɵɵtemplate(99, AddHomeComponent_em_99_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(100, "div", 8)(101, "label", 43)(102, "span");
            i0.ɵɵtext(103, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(104, " Admin Last Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(105, "div", 10);
            i0.ɵɵelement(106, "input", 44);
            i0.ɵɵtemplate(107, AddHomeComponent_em_107_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(108, "div", 8)(109, "label", 45)(110, "span");
            i0.ɵɵtext(111, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(112, " Admin Email Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(113, "div", 10);
            i0.ɵɵtemplate(114, AddHomeComponent_input_114_Template, 1, 0, "input", 46)(115, AddHomeComponent_input_115_Template, 1, 0, "input", 47)(116, AddHomeComponent_em_116_Template, 2, 0, "em", 12)(117, AddHomeComponent_em_117_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(118, "div", 8)(119, "label", 48)(120, "span");
            i0.ɵɵtext(121, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(122, " Contact Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(123, "div", 10)(124, "input", 49);
            i0.ɵɵlistener("keypress", function AddHomeComponent_Template_input_keypress_124_listener($event) { return ctx.numberPattern($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(125, AddHomeComponent_em_125_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(126, "div", 50);
            i0.ɵɵtemplate(127, AddHomeComponent_button_127_Template, 2, 0, "button", 51)(128, AddHomeComponent_button_128_Template, 2, 0, "button", 51);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.type == "add");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.schoolform);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.schoolform.get("schoolName").valid && (ctx.schoolform.get("schoolName").dirty || ctx.schoolform.get("schoolName").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.schoolform.get("address1").valid && (ctx.schoolform.get("address1").dirty || ctx.schoolform.get("address1").touched));
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngIf", !ctx.schoolform.get("city").valid && (ctx.schoolform.get("city").dirty || ctx.schoolform.get("city").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.schoolform.get("state").valid && (ctx.schoolform.get("state").dirty || ctx.schoolform.get("state").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.schoolform.get("country").valid && (ctx.schoolform.get("country").dirty || ctx.schoolform.get("country").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.schoolform.get("postalCode").valid && (ctx.schoolform.get("postalCode").dirty || ctx.schoolform.get("postalCode").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.branchSelect);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngForOf", ctx.imagepath);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("ngIf", !ctx.schoolform.get("first_name").valid && (ctx.schoolform.get("first_name").dirty || ctx.schoolform.get("first_name").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.schoolform.get("last_name").valid && (ctx.schoolform.get("last_name").dirty || ctx.schoolform.get("last_name").touched));
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.type == "add");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolform.get("email_id").hasError("required") && (ctx.schoolform.get("email_id").dirty || ctx.schoolform.get("email_id").touched));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolform.get("email_id").hasError("pattern"));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.schoolform.get("mobile").valid && (ctx.schoolform.get("mobile").dirty || ctx.schoolform.get("mobile").touched));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.type == "add");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit");
        } }, dependencies: [i11.NgForOf, i11.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.FormGroupDirective, i2.FormControlName] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddHomeComponent, [{
        type: Component,
        args: [{ selector: 'app-add-home', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <h5 class=\"text-capitalize\" *ngIf=\"type == 'add'\">Add School</h5>\n                    <h5 class=\"text-capitalize\" *ngIf=\"type == 'edit'\">Edit School</h5>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"schoolform\" class=\"needs-validation user-add\" >\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom4\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Institution Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control \" formControlName=\"schoolName\" id=\"validationCustom4\"\n                                       type=\"text\" placeholder=\"Institution Name\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!schoolform.get('schoolName').valid && (schoolform.get('schoolName').dirty || schoolform.get('schoolName').touched)\">Institution Name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom5\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Address 1</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"address1\" id=\"validationCustom5\"\n                                       type=\"text\" placeholder=\"Address1\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!schoolform.get('address1').valid && (schoolform.get('address1').dirty || schoolform.get('address1').touched)\">Address 1 is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom6\" style=\"position: relative;left: 8px\" class=\"col-xl-3 col-md-4\">\n                                Address 2 <small>(optional)</small></label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"address2\" id=\"validationCustom6\"\n                                       placeholder=\"Address2\" type=\"text\" >\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom7\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                City</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"city\" id=\"validationCustom7\"\n                                       type=\"text\" placeholder=\"City\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!schoolform.get('city').valid && (schoolform.get('city').dirty || schoolform.get('city').touched)\">City is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom8\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                State</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"state\" id=\"validationCustom8\"\n                                       type=\"text\" placeholder=\"State\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!schoolform.get('state').valid && (schoolform.get('state').dirty || schoolform.get('state').touched)\">State is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom9\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Country</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"country\" id=\"validationCustom9\"\n                                       placeholder=\"Country\" required=\"\" type=\"text\">\n                                <em class=\"error\" *ngIf=\"!schoolform.get('country').valid && (schoolform.get('country').dirty || schoolform.get('country').touched)\">Country is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom10\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Zip </label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"postalCode\" id=\"validationCustom10\"\n                                       type=\"text\" placeholder=\"Enter Zip\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!schoolform.get('postalCode').valid && (schoolform.get('postalCode').dirty || schoolform.get('postalCode').touched)\">Postal Code is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-xl-3 col-md-4\">\n                            <label class=\"form-check-label \" style=\"position: relative;left: 8px\">\n                                Is group of schools</label>\n                            </div>\n                            <div class=\"col-xl-8 col-md-7\" style=\"position: relative; left: 1.5rem\">\n                                    <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"isgroup1\" (change)=\"checkValue($event)\" >Yes\n                        </div>\n                        </div>\n                        <div class=\"form-group row\" *ngIf=\"branchSelect\">\n                            <label for=\"validationCustom12\" style=\"position: relative;left: 8px\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Corporate Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"branchName\" id=\"validationCustom12\"\n                                       type=\"text\" placeholder=\"Corporate Name\" [required]=\"schoolform.controls.isgroup1.value == true\">\n\n                                <em class=\"error\" *ngIf=\"!schoolform.get('branchName').valid && (schoolform.get('branchName').dirty || schoolform.get('branchName').touched)\">Branch is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row mb-3\">\n                            <label for=\"validationCustom13\" style=\"position: relative;left: 8px\" class=\"col-xl-3 col-md-4\">\n                                Tax ID <small>(optional)</small></label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"taxId\" id=\"validationCustom13\"\n                                       type=\"text\" placeholder=\"Tax ID\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\" style=\"position: relative;left: 8px\"> Profile Photo</label>\n                            <div class=\"col-xl-6 col-md-4\">\n                                <input type=\"file\" class=\"custom-upload-input\" (change)=\"encodeImageFileAsURL($event)\" >\n                            </div>\n\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-xl-3 col-md-4\"  style=\"position: relative;left: 25%\">\n                                <div class=\"files-list\" *ngFor=\"let file of imagepath;let i= index\">\n                                <img  *ngIf=\"imagepath != ''\"  [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + file)\" class=\"w-100\"  alt=\"\">\n                            </div>\n                            </div>\n                        </div>\n\n                            <div class=\"col-md-12\">\n                                <hr>\n                            </div>\n                        <div class=\"card-header\" style=\"position: relative; right: 22px\">\n                            <h5 class=\"text-capitalize\">Admin Details</h5>\n                        </div>\n                            <div class=\"form-group row\">\n                                <label for=\"validationCustom0\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                    Admin First Name</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <input class=\"form-control \" formControlName=\"first_name\" id=\"validationCustom0\"\n                                           type=\"text\" placeholder=\"First Name\" required=\"\">\n                                    <em class=\"error\" *ngIf=\"!schoolform.get('first_name').valid && (schoolform.get('first_name').dirty || schoolform.get('first_name').touched)\">First name is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                    Admin Last Name</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <input class=\"form-control \" formControlName=\"last_name\" id=\"validationCustom1\"\n                                           type=\"text\" placeholder=\"Last Name\" required=\"\">\n                                    <em class=\"error\" *ngIf=\"!schoolform.get('last_name').valid && (schoolform.get('last_name').dirty || schoolform.get('last_name').touched)\">Last name is required</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label for=\"validationCustom2\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                    Admin Email Address</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <input *ngIf=\"type == 'add'\"  class=\"form-control \" formControlName=\"email_id\" id=\"validationCustom2\" pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$\"\n                                           type=\"email\" placeholder=\"Email\" required=\"\">\n                                    <input *ngIf=\"type == 'edit'\" readonly class=\"form-control \" formControlName=\"email_id\" id=\"validationCustom22\" pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$\"\n                                           type=\"email\" placeholder=\"Email\" required=\"\">\n                                    <em class=\"error\" *ngIf=\"schoolform.get('email_id').hasError('required') && (schoolform.get('email_id').dirty || schoolform.get('email_id').touched)\">Email is required</em>\n                                    <em class=\"error\" *ngIf=\"schoolform.get('email_id').hasError('pattern')\">Invalid Email-Id</em>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label for=\"validationCustom3\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                    Contact Number</label>\n                                <div class=\"col-xl-8 col-md-7\">\n                                    <input class=\"form-control \" formControlName=\"mobile\" id=\"validationCustom3\"\n                                           type=\"text\" placeholder=\"Contact Number\" (keypress)=\"numberPattern($event)\" maxlength=\"10\" minlength=\"10\" required=\"\">\n                                    <em class=\"error\" *ngIf=\"!schoolform.get('mobile').valid && (schoolform.get('mobile').dirty || schoolform.get('mobile').touched)\">Contact Number is required</em>\n                                </div>\n                            </div>\n                    </form>\n                    <div class=\"pull-right\">\n                        <button type=\"button\" *ngIf=\"type == 'add'\" (click)=\"addschool('add')\"  class=\"btn btn-primary\">Save</button>\n                        <button type=\"button\" *ngIf=\"type == 'edit'\" (click)=\"addschool('edit')\"  class=\"btn btn-primary\">Update</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Container-fluid Ends-->\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.CommonDataService }, { type: i4.ToastrService }, { type: i5.AuthService }, { type: i6.SchoolService }, { type: i7.DomSanitizer }, { type: i1.Router }, { type: i8.ValidationService }, { type: i9.CommonService }, { type: i10.ConfigurationService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddHomeComponent, { className: "AddHomeComponent" }); })();
//# sourceMappingURL=add-home.component.js.map