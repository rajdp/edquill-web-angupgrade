import { Component, ViewChild } from '@angular/core';
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
import * as i12 from "@ng-select/ng-select";
const _c0 = ["myInput"];
function AddSchoolComponent_h5_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 39);
    i0.ɵɵtext(1, "Add Institution");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_h5_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 39);
    i0.ɵɵtext(1, "Edit Institution");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_em_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Institution Name is required");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_em_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Address 1 is required");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_em_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "City is required");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_em_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "State is required");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_em_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Country is required");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_em_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Postal Code is required");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_em_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "status is required");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_div_90_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 44);
} if (rf & 2) {
    const file_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + file_r1), i0.ɵɵsanitizeUrl);
} }
function AddSchoolComponent_div_90_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 45);
    i0.ɵɵlistener("click", function AddSchoolComponent_div_90_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteImg()); });
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtemplate(1, AddSchoolComponent_div_90_img_1_Template, 1, 1, "img", 42)(2, AddSchoolComponent_div_90_i_2_Template, 1, 0, "i", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.imagepath != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.imagepath != "");
} }
function AddSchoolComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵelement(1, "hr");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_div_92_em_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_div_92_em_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Last name is required");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_div_92_input_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 56);
} }
function AddSchoolComponent_div_92_input_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 57);
} }
function AddSchoolComponent_div_92_em_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_div_92_em_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Invalid Email-Id");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_div_92_em_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 40);
    i0.ɵɵtext(1, "Contact Number is required");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "h5", 39)(2, "b");
    i0.ɵɵtext(3, "Admin Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 8)(5, "label", 47)(6, "span");
    i0.ɵɵtext(7, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, " Admin First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 10);
    i0.ɵɵelement(10, "input", 48);
    i0.ɵɵtemplate(11, AddSchoolComponent_div_92_em_11_Template, 2, 0, "em", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 8)(13, "label", 49)(14, "span");
    i0.ɵɵtext(15, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16, " Admin Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 10);
    i0.ɵɵelement(18, "input", 50);
    i0.ɵɵtemplate(19, AddSchoolComponent_div_92_em_19_Template, 2, 0, "em", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 8)(21, "label", 51)(22, "span");
    i0.ɵɵtext(23, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24, " Admin Email Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 10);
    i0.ɵɵtemplate(26, AddSchoolComponent_div_92_input_26_Template, 1, 0, "input", 52)(27, AddSchoolComponent_div_92_input_27_Template, 1, 0, "input", 53)(28, AddSchoolComponent_div_92_em_28_Template, 2, 0, "em", 12)(29, AddSchoolComponent_div_92_em_29_Template, 2, 0, "em", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div", 8)(31, "label", 54)(32, "span");
    i0.ɵɵtext(33, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(34, " Contact Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 10)(36, "input", 55);
    i0.ɵɵlistener("keypress", function AddSchoolComponent_div_92_Template_input_keypress_36_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.numberPattern($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(37, AddSchoolComponent_div_92_em_37_Template, 2, 0, "em", 12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngIf", !ctx_r1.schoolform.get("first_name").valid && (ctx_r1.schoolform.get("first_name").dirty || ctx_r1.schoolform.get("first_name").touched));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r1.schoolform.get("last_name").valid && (ctx_r1.schoolform.get("last_name").dirty || ctx_r1.schoolform.get("last_name").touched));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.type == "add");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "edit");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.schoolform.get("email_id").hasError("required") && (ctx_r1.schoolform.get("email_id").dirty || ctx_r1.schoolform.get("email_id").touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.schoolform.get("email_id").hasError("pattern"));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r1.schoolform.get("mobile").valid && (ctx_r1.schoolform.get("mobile").dirty || ctx_r1.schoolform.get("mobile").touched));
} }
function AddSchoolComponent_button_94_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 58);
    i0.ɵɵlistener("click", function AddSchoolComponent_button_94_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addschool("add")); });
    i0.ɵɵtext(1, "Save");
    i0.ɵɵelementEnd();
} }
function AddSchoolComponent_button_95_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 58);
    i0.ɵɵlistener("click", function AddSchoolComponent_button_95_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addschool("edit")); });
    i0.ɵɵtext(1, "Update");
    i0.ɵɵelementEnd();
} }
export class AddSchoolComponent {
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
        this.countryList();
        this.corporatedetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.webhost = this.config.getimgUrl();
        this.imagepath = [];
        this.imagepaththumb = [];
        this.schoolform = this.formBuilder.group({
            first_name: [''],
            last_name: [''],
            email_id: [''],
            mobile: [''],
            schoolName: ['', Validators.required],
            address1: ['', Validators.required],
            address2: '',
            city: ['', Validators.required],
            state: ['', Validators.required],
            country: ['', Validators.required],
            postalCode: ['', Validators.required],
            taxId: '',
            documentUpload: '',
            isgroup1: '',
            isgroup2: '',
            status: ['1', Validators.required],
        });
        if (this.type == 'edit') {
            this.editData = JSON.parse(this.auth.getSessionData('editschool'));
            this.stateList(this.editData.country_id);
            this.school_id = this.editData.school_id;
            this.status = this.editData.status;
            this.schoolform.controls.first_name.patchValue(this.editData.first_name);
            this.schoolform.controls.last_name.patchValue(this.editData.last_name);
            this.schoolform.controls.email_id.patchValue(this.editData.email_id);
            this.schoolform.controls.mobile.patchValue(this.editData.mobile);
            this.schoolform.controls.schoolName.patchValue(this.editData.name);
            this.schoolform.controls.address1.patchValue(this.editData.address_1);
            this.schoolform.controls.address2.patchValue(this.editData.address_2);
            this.schoolform.controls.city.patchValue(this.editData.city);
            this.schoolform.controls.state.patchValue(this.editData.state_id);
            this.schoolform.controls.country.patchValue(this.editData.country_id);
            this.schoolform.controls.postalCode.patchValue(this.editData.postal_code);
            if (this.editData.status == 'Active') {
                this.schoolform.controls.status.patchValue(1);
            }
            else if (this.editData.status == 'Suspended') {
                this.schoolform.controls.status.patchValue(2);
            }
            if (this.editData.has_branch == 1) {
                this.schoolform.controls.isgroup1.patchValue(true);
                this.branchSelect = true;
            }
            else if (this.editData.has_branch == 0) {
                this.schoolform.controls.isgroup1.patchValue(false);
                this.branchSelect = false;
            }
            this.schoolform.controls.taxId.patchValue(this.editData.tax_id);
            this.imagepath.push(this.editData.profile_url);
            this.imagepaththumb.push(this.editData.profile_thumb_url);
        }
        else {
            this.stateList('231');
            this.schoolform.controls.first_name.patchValue('');
            this.schoolform.controls.last_name.patchValue('');
            this.schoolform.controls.email_id.patchValue('');
            this.schoolform.controls.mobile.patchValue('');
            this.schoolform.controls.schoolName.patchValue('');
            this.schoolform.controls.address1.patchValue('');
            this.schoolform.controls.address2.patchValue('');
            this.schoolform.controls.city.patchValue('');
            this.schoolform.controls.state.patchValue(null);
            this.schoolform.controls.country.patchValue('231');
            this.schoolform.controls.postalCode.patchValue('');
            this.schoolform.controls.taxId.patchValue('');
            this.schoolform.controls.isgroup1.patchValue('');
            this.schoolform.controls.status.patchValue('1');
            this.imagepath = '';
            this.imagepaththumb = '';
        }
    }
    ngOnInit() {
        this.commondata.showLoader(false);
        this.corporateSchoolControl = true;
        this.brandservices.changeSideCorporateSchoolList(this.corporateSchoolControl);
    }
    ngOnDestroy() {
        this.corporateSchoolControl = false;
        this.brandservices.changeSideCorporateSchoolList(this.corporateSchoolControl);
    }
    list(value) {
    }
    deleteImg() {
        this.imagepath = [];
        this.clearUploadfilename();
    }
    clearUploadfilename() {
        this.myInputVariable.nativeElement.value = '';
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
                branch_name: this.auth.getSessionData('corporate_id'),
                tax_id: this.schoolform.controls.taxId.value ? this.schoolform.controls.taxId.value : '',
                profile_url: this.imagepath.toString(),
                profile_thumb_url: this.imagepaththumb.toString(),
                school_id: this.school_id ? this.school_id : '',
                status: this.schoolform.controls.status.value
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
            this.toastr.error('Please fill all the mandatory fields');
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
    stateList(id) {
        const countryVal = this.schoolform.controls.country.value;
        this.schoolform.controls.state.patchValue(null);
        const data = {
            platform: 'web',
            country_id: id,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.getStateList(data).subscribe((successData) => {
            this.stateListSuccess(successData);
        }, (error) => {
            this.stateListFailure(error);
        });
    }
    stateListSuccess(successData) {
        if (successData.IsSuccess) {
            this.stateListData = successData.ResponseObject;
        }
    }
    stateListFailure(error) {
        console.log(error, 'error');
    }
    countryList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.getCountryList(data).subscribe((successData) => {
            this.countryListSuccess(successData);
        }, (error) => {
            this.countryListFailure(error);
        });
    }
    countryListSuccess(successData) {
        if (successData.IsSuccess) {
            this.countryListData = successData.ResponseObject;
        }
    }
    countryListFailure(error) {
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
            // this.embryologylistFailure(error);
        });
    }
    uploadSuccess(successData) {
        // this.settings.loadingSpinner = false;
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.imagepath = [];
            // if (typing == 1) {
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
        //   this.schoolform.controls.isgroup2.patchValue(false);
        //   this.branchSelect = eve.target.checked;
        // }else if ( type == 'false'){
        //   this.branchSelect = false;
        //   this.unChecked = 'false';
        //   this.schoolform.controls.isgroup1.patchValue(false);
        //   this.schoolform.controls.isgroup2.patchValue(true);
        // }
    }
    static { this.ɵfac = function AddSchoolComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddSchoolComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.CommonDataService), i0.ɵɵdirectiveInject(i4.ToastrService), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.SchoolService), i0.ɵɵdirectiveInject(i7.DomSanitizer), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i8.ValidationService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i10.ConfigurationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddSchoolComponent, selectors: [["app-add-school"]], viewQuery: function AddSchoolComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
        } }, decls: 96, vars: 17, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header"], ["class", "text-capitalize", 4, "ngIf"], [1, "card-body", "tab2-card"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom4", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "schoolName", "id", "validationCustom4", "type", "text", "placeholder", "Institution Name", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom5", 1, "col-xl-3", "col-md-4"], ["formControlName", "address1", "id", "validationCustom5", "type", "text", "placeholder", "Address1", "required", "", 1, "form-control"], ["for", "validationCustom6", 1, "col-xl-3", "col-md-4", 2, "position", "relative", "left", "8px"], ["formControlName", "address2", "id", "validationCustom6", "type", "text", "placeholder", "Address2", 1, "form-control"], ["for", "validationCustom7", 1, "col-xl-3", "col-md-4"], ["formControlName", "city", "id", "validationCustom7", "type", "text", "placeholder", "City", "required", "", 1, "form-control"], [1, "col-xl-3", "col-md-4"], ["bindLabel", "name", "bindValue", "state_id", "formControlName", "state", "placeholder", "Please Select", 3, "items"], ["bindLabel", "name", "bindValue", "country_id", "formControlName", "country", "placeholder", "Please Select", 3, "change", "items"], ["for", "validationCustom10", 1, "col-xl-3", "col-md-4"], ["formControlName", "postalCode", "id", "validationCustom10", "type", "text", "placeholder", "Enter Zip", "minlength", "3", "maxlength", "9", "required", "", 1, "form-control"], [1, "form-group", "row", "mb-3"], ["for", "validationCustom13", 1, "col-xl-3", "col-md-4", 2, "position", "relative", "left", "8px"], ["formControlName", "taxId", "id", "validationCustom13", "type", "text", "placeholder", "Tax ID", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "1"], ["value", "2"], [1, "col-xl-3", "col-md-4", 2, "position", "relative", "left", "8px"], [1, "col-xl-6", "col-md-4"], ["type", "file", 1, "custom-upload-input", 3, "change"], [1, "col-xl-3", "col-md-4", 2, "position", "relative", "left", "25%"], ["class", "files-list fit-img", 4, "ngFor", "ngForOf"], ["class", "col-md-12", 4, "ngIf"], [4, "ngIf"], [1, "pull-right"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "text-capitalize"], [1, "error"], [1, "files-list", "fit-img"], ["class", "w-95", "alt", "", 3, "src", 4, "ngIf"], ["class", "fa fa-times", "style", "position: relative; right: 26px; bottom: 85px; cursor: pointer;  background: #eeeeee;\n       padding: 10px; border-radius: 45px;", "title", "close", 3, "click", 4, "ngIf"], ["alt", "", 1, "w-95", 3, "src"], ["title", "close", 1, "fa", "fa-times", 2, "position", "relative", "right", "26px", "bottom", "85px", "cursor", "pointer", "background", "#eeeeee", "padding", "10px", "border-radius", "45px", 3, "click"], [1, "col-md-12"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], ["formControlName", "first_name", "id", "validationCustom0", "type", "text", "placeholder", "First Name", "required", "", 1, "form-control"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["formControlName", "last_name", "id", "validationCustom1", "type", "text", "placeholder", "Last Name", "required", "", 1, "form-control"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["class", "form-control ", "formControlName", "email_id", "id", "validationCustom2", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "type", "email", "placeholder", "Email", "required", "", 4, "ngIf"], ["readonly", "", "class", "form-control ", "formControlName", "email_id", "id", "validationCustom22", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "type", "email", "placeholder", "Email", "required", "", 4, "ngIf"], ["for", "validationCustom3", 1, "col-xl-3", "col-md-4"], ["formControlName", "mobile", "id", "validationCustom3", "type", "text", "placeholder", "Contact Number", "maxlength", "15", "minlength", "10", "required", "", 1, "form-control", 3, "keypress"], ["formControlName", "email_id", "id", "validationCustom2", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "type", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["readonly", "", "formControlName", "email_id", "id", "validationCustom22", "pattern", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$", "type", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AddSchoolComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵtemplate(5, AddSchoolComponent_h5_5_Template, 2, 0, "h5", 5)(6, AddSchoolComponent_h5_6_Template, 2, 0, "h5", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 6)(8, "form", 7)(9, "div", 8)(10, "label", 9)(11, "span");
            i0.ɵɵtext(12, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, " Institution Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 10);
            i0.ɵɵelement(15, "input", 11);
            i0.ɵɵtemplate(16, AddSchoolComponent_em_16_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 8)(18, "label", 13)(19, "span");
            i0.ɵɵtext(20, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(21, " Address 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 10);
            i0.ɵɵelement(23, "input", 14);
            i0.ɵɵtemplate(24, AddSchoolComponent_em_24_Template, 2, 0, "em", 12);
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
            i0.ɵɵtemplate(39, AddSchoolComponent_em_39_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "div", 8)(41, "label", 19)(42, "span");
            i0.ɵɵtext(43, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(44, " State");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "div", 10);
            i0.ɵɵelement(46, "ng-select", 20);
            i0.ɵɵtemplate(47, AddSchoolComponent_em_47_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(48, "div", 8)(49, "label", 19)(50, "span");
            i0.ɵɵtext(51, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(52, " Country");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "div", 10)(54, "ng-select", 21);
            i0.ɵɵlistener("change", function AddSchoolComponent_Template_ng_select_change_54_listener($event) { return ctx.stateList($event.country_id); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(55, AddSchoolComponent_em_55_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "div", 8)(57, "label", 22)(58, "span");
            i0.ɵɵtext(59, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(60, " Zip ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "div", 10);
            i0.ɵɵelement(62, "input", 23);
            i0.ɵɵtemplate(63, AddSchoolComponent_em_63_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(64, "div", 24)(65, "label", 25);
            i0.ɵɵtext(66, " Tax ID ");
            i0.ɵɵelementStart(67, "small");
            i0.ɵɵtext(68, "(optional)");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(69, "div", 10);
            i0.ɵɵelement(70, "input", 26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(71, "div", 8)(72, "label", 19)(73, "span");
            i0.ɵɵtext(74, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(75, " Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "div", 10)(77, "select", 27)(78, "option", 28);
            i0.ɵɵtext(79, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "option", 29);
            i0.ɵɵtext(81, "Suspended");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(82, AddSchoolComponent_em_82_Template, 2, 0, "em", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(83, "div", 8)(84, "label", 30);
            i0.ɵɵtext(85, " Profile Photo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "div", 31)(87, "input", 32);
            i0.ɵɵlistener("change", function AddSchoolComponent_Template_input_change_87_listener($event) { return ctx.encodeImageFileAsURL($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(88, "div", 8)(89, "div", 33);
            i0.ɵɵtemplate(90, AddSchoolComponent_div_90_Template, 3, 2, "div", 34);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(91, AddSchoolComponent_div_91_Template, 2, 0, "div", 35)(92, AddSchoolComponent_div_92_Template, 38, 7, "div", 36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(93, "div", 37);
            i0.ɵɵtemplate(94, AddSchoolComponent_button_94_Template, 2, 0, "button", 38)(95, AddSchoolComponent_button_95_Template, 2, 0, "button", 38);
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
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("items", ctx.stateListData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolform.get("state").hasError("required") && (ctx.schoolform.get("state").dirty || ctx.schoolform.get("state").touched));
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("items", ctx.countryListData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.schoolform.get("country").valid && (ctx.schoolform.get("country").dirty || ctx.schoolform.get("country").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.schoolform.get("postalCode").valid && (ctx.schoolform.get("postalCode").dirty || ctx.schoolform.get("postalCode").touched));
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("ngIf", !ctx.schoolform.get("status").valid && (ctx.schoolform.get("status").dirty || ctx.schoolform.get("status").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.imagepath);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "add");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "add");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.type == "add");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit");
        } }, dependencies: [i11.NgForOf, i11.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.FormGroupDirective, i2.FormControlName, i12.NgSelectComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddSchoolComponent, [{
        type: Component,
        args: [{ selector: 'app-add-school', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <h5 class=\"text-capitalize\" *ngIf=\"type == 'add'\">Add Institution</h5>\n                    <h5 class=\"text-capitalize\" *ngIf=\"type == 'edit'\">Edit Institution</h5>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"schoolform\" class=\"needs-validation user-add\" >\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom4\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Institution Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control \" formControlName=\"schoolName\" id=\"validationCustom4\"\n                                       type=\"text\" placeholder=\"Institution Name\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!schoolform.get('schoolName').valid && (schoolform.get('schoolName').dirty || schoolform.get('schoolName').touched)\">Institution Name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom5\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Address 1</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"address1\" id=\"validationCustom5\"\n                                       type=\"text\" placeholder=\"Address1\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!schoolform.get('address1').valid && (schoolform.get('address1').dirty || schoolform.get('address1').touched)\">Address 1 is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom6\" style=\"position: relative;left: 8px\" class=\"col-xl-3 col-md-4\">\n                                Address 2 <small>(optional)</small></label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"address2\" id=\"validationCustom6\"\n                                       type=\"text\"placeholder=\"Address2\" >\n<!--                                <em class=\"error\" *ngIf=\"!schoolform.get('address2').valid && (schoolform.get('address2').dirty || schoolform.get('address2').touched)\">Address 2 is required</em>-->\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom7\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                City</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"city\" id=\"validationCustom7\"\n                                       type=\"text\" placeholder=\"City\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!schoolform.get('city').valid && (schoolform.get('city').dirty || schoolform.get('city').touched)\">City is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span>*</span>\n                                State</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <ng-select [items]=\"stateListData\"\n                                           bindLabel=\"name\"\n                                           bindValue=\"state_id\"\n                                           formControlName=\"state\"\n                                           placeholder=\"Please Select\"\n                                >\n                                </ng-select>\n                                <em class=\"error\" *ngIf=\"schoolform.get('state').hasError('required') && (schoolform.get('state').dirty || schoolform.get('state').touched)\">State is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Country</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <ng-select [items]=\"countryListData\"\n                                           bindLabel=\"name\"\n                                           bindValue=\"country_id\"\n                                           formControlName=\"country\"\n                                           placeholder=\"Please Select\"\n                                           (change)=\"stateList($event.country_id)\"\n                                >\n                                </ng-select>\n                                <em class=\"error\" *ngIf=\"!schoolform.get('country').valid && (schoolform.get('country').dirty || schoolform.get('country').touched)\">Country is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom10\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Zip </label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"postalCode\" id=\"validationCustom10\"\n                                       type=\"text\" placeholder=\"Enter Zip\" minlength=\"3\" maxlength=\"9\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!schoolform.get('postalCode').valid && (schoolform.get('postalCode').dirty || schoolform.get('postalCode').touched)\">Postal Code is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row mb-3\">\n                            <label for=\"validationCustom13\" style=\"position: relative;left: 8px\" class=\"col-xl-3 col-md-4\">\n                                Tax ID <small>(optional)</small></label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"taxId\" id=\"validationCustom13\"\n                                       type=\"text\" placeholder=\"Tax ID\">\n<!--                                <em class=\"error\" *ngIf=\"!schoolform.get('taxId').valid && (schoolform.get('taxId').dirty || schoolform.get('taxId').touched)\">Tax ID is required</em>-->\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Status</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control\" formControlName=\"status\">\n                                    <option value=\"1\">Active</option>\n                                    <option value=\"2\">Suspended</option>\n                                    <!--                                    <option value=\"3\">payment pending</option>-->\n                                </select>\n                                <em class=\"error\" *ngIf=\"!schoolform.get('status').valid && (schoolform.get('status').dirty || schoolform.get('status').touched)\">status is required</em>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\" style=\"position: relative;left: 8px\"> Profile Photo</label>\n                            <div class=\"col-xl-6 col-md-4\">\n                                <input type=\"file\" class=\"custom-upload-input\" (change)=\"encodeImageFileAsURL($event)\" >\n                            </div>\n\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-xl-3 col-md-4\"  style=\"position: relative;left: 25%\">\n                                <div class=\"files-list fit-img\" *ngFor=\"let file of imagepath;let i= index\">\n                                    <img *ngIf=\"imagepath != ''\"  [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + file)\"  class=\"w-95\" alt=\"\">\n                                    <i *ngIf=\"imagepath != ''\" class=\"fa fa-times\" style=\"position: relative; right: 26px; bottom: 85px; cursor: pointer;  background: #eeeeee;\n       padding: 10px; border-radius: 45px;\" title=\"close\" (click)=\"deleteImg()\" ></i>\n                                </div>\n                            </div>\n                        </div>\n\n                            <div class=\"col-md-12\" *ngIf=\"type == 'add'\">\n                                <hr>\n                            </div>\n                            <div *ngIf=\"type == 'add'\">\n<!--                                <div class=\"card-header\" style=\"position: relative; right: 22px\">-->\n                                <h5 class=\"text-capitalize\"><b>Admin Details</b></h5>\n<!--                                </div>-->\n                                <div class=\"form-group row\">\n                                    <label for=\"validationCustom0\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                        Admin First Name</label>\n                                    <div class=\"col-xl-8 col-md-7\">\n                                        <input class=\"form-control \" formControlName=\"first_name\" id=\"validationCustom0\"\n                                               type=\"text\" placeholder=\"First Name\" required=\"\">\n                                        <em class=\"error\" *ngIf=\"!schoolform.get('first_name').valid && (schoolform.get('first_name').dirty || schoolform.get('first_name').touched)\">First name is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                        Admin Last Name</label>\n                                    <div class=\"col-xl-8 col-md-7\">\n                                        <input class=\"form-control \" formControlName=\"last_name\" id=\"validationCustom1\"\n                                               type=\"text\" placeholder=\"Last Name\" required=\"\">\n                                        <em class=\"error\" *ngIf=\"!schoolform.get('last_name').valid && (schoolform.get('last_name').dirty || schoolform.get('last_name').touched)\">Last name is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label for=\"validationCustom2\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                        Admin Email Address</label>\n                                    <div class=\"col-xl-8 col-md-7\">\n                                        <input *ngIf=\"type == 'add'\"  class=\"form-control \" formControlName=\"email_id\" id=\"validationCustom2\" pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$\"\n                                               type=\"email\" placeholder=\"Email\" required=\"\">\n                                        <input *ngIf=\"type == 'edit'\" readonly class=\"form-control \" formControlName=\"email_id\" id=\"validationCustom22\" pattern=\"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$\"\n                                               type=\"email\" placeholder=\"Email\" required=\"\">\n                                        <em class=\"error\" *ngIf=\"schoolform.get('email_id').hasError('required') && (schoolform.get('email_id').dirty || schoolform.get('email_id').touched)\">Email is required</em>\n                                        <em class=\"error\" *ngIf=\"schoolform.get('email_id').hasError('pattern')\">Invalid Email-Id</em>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label for=\"validationCustom3\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                        Contact Number</label>\n                                    <div class=\"col-xl-8 col-md-7\">\n                                        <input class=\"form-control \" formControlName=\"mobile\" id=\"validationCustom3\"\n                                               type=\"text\" placeholder=\"Contact Number\" (keypress)=\"numberPattern($event)\" maxlength=\"15\" minlength=\"10\" required=\"\">\n                                        <em class=\"error\" *ngIf=\"!schoolform.get('mobile').valid && (schoolform.get('mobile').dirty || schoolform.get('mobile').touched)\">Contact Number is required</em>\n                                    </div>\n                                </div>\n                            </div>\n                    </form>\n                    <div class=\"pull-right\">\n                        <button type=\"button\" *ngIf=\"type == 'add'\" (click)=\"addschool('add')\"  class=\"btn btn-primary\">Save</button>\n                        <button type=\"button\" *ngIf=\"type == 'edit'\" (click)=\"addschool('edit')\"  class=\"btn btn-primary\">Update</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Container-fluid Ends-->\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.CommonDataService }, { type: i4.ToastrService }, { type: i5.AuthService }, { type: i6.SchoolService }, { type: i7.DomSanitizer }, { type: i1.Router }, { type: i8.ValidationService }, { type: i9.CommonService }, { type: i10.ConfigurationService }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddSchoolComponent, { className: "AddSchoolComponent" }); })();
//# sourceMappingURL=add-School.component.js.map