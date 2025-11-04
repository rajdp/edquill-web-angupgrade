import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { dateOptions } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/platform-browser";
import * as i4 from "../../../shared/service/common-data.service";
import * as i5 from "ngx-toastr";
import * as i6 from "../../../shared/service/newsubject.service";
import * as i7 from "../../../shared/service/auth.service";
import * as i8 from "../../../shared/service/category.service";
import * as i9 from "../../../shared/service/School.service";
import * as i10 from "../../../shared/service/validation.service";
import * as i11 from "../../../shared/service/content.service";
import * as i12 from "../../../shared/service/configuration.service";
import * as i13 from "../../../shared/service/common.service";
import * as i14 from "@angular/common";
import * as i15 from "@ng-select/ng-select";
import * as i16 from "@nodro7/angular-mydatepicker";
const _c0 = ["myInput"];
function AddContentComponent_em_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 60);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function AddContentComponent_em_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 60);
    i0.ɵɵtext(1, "Last name is required");
    i0.ɵɵelementEnd();
} }
function AddContentComponent_em_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 60);
    i0.ɵɵtext(1, "Contact Number is required");
    i0.ɵɵelementEnd();
} }
function AddContentComponent_input_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 61);
} }
function AddContentComponent_input_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 62);
} }
function AddContentComponent_em_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 60);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function AddContentComponent_em_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 60);
    i0.ɵɵtext(1, "Invalid Email-Id");
    i0.ɵɵelementEnd();
} }
function AddContentComponent_em_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 60);
    i0.ɵɵtext(1, "Enter Valid Date");
    i0.ɵɵelementEnd();
} }
function AddContentComponent_em_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 60);
    i0.ɵɵtext(1, "Date of Birth is required");
    i0.ɵɵelementEnd();
} }
function AddContentComponent_em_89_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 60);
    i0.ɵɵtext(1, "Gender is required");
    i0.ɵɵelementEnd();
} }
function AddContentComponent_option_150_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 63);
    i0.ɵɵtext(1, "Deleted");
    i0.ɵɵelementEnd();
} }
function AddContentComponent_em_151_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 60);
    i0.ɵɵtext(1, "status is required");
    i0.ɵɵelementEnd();
} }
function AddContentComponent_div_162_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 67);
} if (rf & 2) {
    const file_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r4.sanitizer.bypassSecurityTrustResourceUrl(ctx_r4.webhost + "/" + file_r4), i0.ɵɵsanitizeUrl);
} }
function AddContentComponent_div_162_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 68);
    i0.ɵɵlistener("click", function AddContentComponent_div_162_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.deleteImg()); });
    i0.ɵɵelementEnd();
} }
function AddContentComponent_div_162_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 64);
    i0.ɵɵtemplate(1, AddContentComponent_div_162_img_1_Template, 1, 1, "img", 65)(2, AddContentComponent_div_162_i_2_Template, 1, 0, "i", 66);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.imagepath != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.imagepath != "");
} }
export class AddContentComponent {
    constructor(route, formBuilder, sanitizer, commondata, toastr, newSubject, auth, category, brandservices, router, validationService, contentService, config, common, datePipe) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.commondata = commondata;
        this.toastr = toastr;
        this.newSubject = newSubject;
        this.auth = auth;
        this.category = category;
        this.brandservices = brandservices;
        this.router = router;
        this.validationService = validationService;
        this.contentService = contentService;
        this.config = config;
        this.common = common;
        this.datePipe = datePipe;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
        };
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableSince: {
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
                day: new Date().getDate() != 1 ? new Date().getDate() - 1 : -1
            },
        };
        this.webhost = this.config.getimgUrl();
        this.roleid = this.auth.getRoleId();
        this.schooldetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.allowAdd = true;
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.router.url.includes('create-Content')) {
                    this.init(params);
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
        this.imagepath = [];
        this.imagepaththumb = [];
        this.creatorForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email_id: ['', [Validators.required, Validators.pattern(this.auth.emailValidatorPattern)]],
            mobile: ['', Validators.required],
            schoolId: '',
            doj: '',
            dob: '',
            gender: '',
            designation: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            country: '231',
            postalCode: '',
            status: ['1', Validators.required]
        });
        if (this.type == 'edit') {
            this.allowSelect = true;
            this.newSubject.allowSchoolChange(this.allowSelect);
            this.editData = JSON.parse(this.auth.getSessionData('editContent'));
            this.creatorForm.controls.firstName.patchValue(this.editData.first_name);
            this.creatorForm.controls.lastName.patchValue(this.editData.last_name);
            this.creatorForm.controls.email_id.patchValue(this.editData.email_id);
            this.creatorForm.controls.mobile.patchValue(this.editData.mobile);
            this.creatorForm.controls.schoolId.patchValue(this.editData.school_name);
            this.creatorForm.controls.gender.patchValue(this.editData.gender.trim());
            this.creatorForm.controls.designation.patchValue(this.editData.designation);
            this.creatorForm.controls.address1.patchValue(this.editData.address1);
            this.creatorForm.controls.address2.patchValue(this.editData.address2);
            this.creatorForm.controls.city.patchValue(this.editData.city);
            this.creatorForm.controls.state.patchValue(this.editData.state);
            this.creatorForm.controls.country.patchValue(this.editData.country);
            this.creatorForm.controls.postalCode.patchValue(this.editData.postal_code);
            if (this.editData.status == 'Active') {
                this.creatorForm.controls.status.patchValue(1);
            }
            else if (this.editData.status == 'Suspended') {
                this.creatorForm.controls.status.patchValue(2);
            }
            else if (this.editData.status == 'Disengaged') {
                this.creatorForm.controls.status.patchValue(3);
            }
            else if (this.editData.status == 'Deleted') {
                this.creatorForm.controls.status.patchValue(4);
            }
            if (this.editData.doj != '0000-00-00' && this.editData.doj != null) {
                const dob = this.editData.doj.split('-');
                const dobObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(dob[0]), parseInt(dob[1]) - 1, parseInt(dob[2])) },
                    dateRange: null
                };
                this.creatorForm.controls.doj.patchValue(dobObject);
            }
            else {
                this.creatorForm.controls.doj.patchValue(null);
            }
            if (this.editData.birthday != '0000-00-00') {
                const dob1 = this.editData.birthday.split('-');
                const dobObject1 = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(dob1[0]), parseInt(dob1[1]) - 1, parseInt(dob1[2])) },
                    dateRange: null
                };
                this.creatorForm.controls.dob.patchValue(dobObject1);
            }
            else {
                this.creatorForm.controls.dob.patchValue(null);
            }
            if (this.editData.profile_url != '') {
                this.imagepath.push(this.editData.profile_url);
            }
            this.imagepaththumb.push(this.editData.profile_thumb_url);
        }
        else {
            this.allowSelect = false;
            this.newSubject.allowSchoolChange(this.allowSelect);
            this.creatorForm.reset();
            if (this.roleid == '2') {
                this.creatorForm.controls.schoolId.patchValue(this.auth.getSessionData('school_name'));
            }
            else if (this.roleid == '4') {
                this.creatorForm.controls.schoolId.patchValue(this.schooldetails.name);
            }
            this.creatorForm.controls.country.patchValue('231');
            this.creatorForm.controls.status.patchValue('1');
            this.creatorForm.controls.gender.patchValue('');
            this.imagepath = [];
            this.imagepaththumb = [];
            this.stateList('231');
        }
    }
    ngOnInit() {
        this.commondata.showLoader(false);
        if (this.roleid == '2') {
            this.schoolid = this.auth.getSessionData('school_id');
            this.email = true;
        }
        else if (this.roleid == '4') {
            this.schoolid = this.schooldetails.school_id;
            this.email = false;
        }
    }
    onDateChanged(event) {
    }
    init(id) {
        this.schoolid = id;
        this.teacherType = this.auth.getSessionData('teacher_type');
        this.schoolName = this.auth.getSessionData('school_name');
        this.teacherschool = JSON.parse(this.auth.getSessionData('rista_data1'));
        if (this.roleid == '4' && this.teacherType == '0') {
            this.allowAdd = this.teacherschool.permissions[1].permission[0].status == 1;
        }
        else if (this.roleid == '4' && this.teacherType == '1') {
            this.allowAdd = false;
        }
        else {
            this.allowAdd = true;
        }
        this.schoolList();
        this.countryList();
    }
    addContent(value) {
        if (this.creatorForm.valid) {
            this.commondata.showLoader(true);
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.schoolid,
                first_name: this.creatorForm.controls.firstName.value,
                last_name: this.creatorForm.controls.lastName.value,
                email_id: this.creatorForm.controls.email_id.value,
                mobile: this.creatorForm.controls.mobile.value,
                doj: this.creatorForm.controls.doj.value ? this.datePipe.transform(this.creatorForm.controls.doj.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                birthday: this.creatorForm.controls.dob.value ? this.datePipe.transform(this.creatorForm.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                gender: this.creatorForm.controls.gender.value,
                designation: this.creatorForm.controls.designation.value ? this.creatorForm.controls.designation.value : '',
                address1: this.creatorForm.controls.address1.value ? this.creatorForm.controls.address1.value : '',
                address2: this.creatorForm.controls.address2.value ? this.creatorForm.controls.address2.value : '',
                city: this.creatorForm.controls.city.value ? this.creatorForm.controls.city.value : '',
                state: this.creatorForm.controls.state.value ? this.creatorForm.controls.state.value : '',
                country: this.creatorForm.controls.country.value ? this.creatorForm.controls.country.value : '',
                postal_code: this.creatorForm.controls.postalCode.value ? this.creatorForm.controls.postalCode.value : '',
                status: this.creatorForm.controls.status.value,
                profile_url: this.imagepath.toString(),
                profile_thumb_url: this.imagepaththumb.toString(),
            };
            if (value == 'add') {
                this.contentService.contentAdd(data).subscribe((successData) => {
                    this.addContentSuccess(successData);
                }, (error) => {
                    this.addContentFailure(error);
                });
            }
            else if (value == 'edit') {
                data['selected_user_id'] = this.editData.user_id;
                this.contentService.contentEdit(data).subscribe((successData) => {
                    this.addContentSuccess(successData);
                }, (error) => {
                    this.addContentFailure(error);
                });
            }
        }
        else {
            this.validationService.validateAllFormFields(this.creatorForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    addContentSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success(successData.ResponseObject, 'Content-Creator');
            this.router.navigate(['/users/user-list']);
        }
        else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, 'Content-Creator');
        }
    }
    addContentFailure(error) {
        this.commondata.showLoader(false);
        this.toastr.error(error.ResponseObject, 'Content-Creator');
    }
    backAction() {
        this.router.navigate(['/users/user-list']);
    }
    numberPattern(event) {
        this.validationService.numberValidate1(event);
    }
    datePattern(event) {
        this.validationService.dateValidation(event);
    }
    encodeImageFileAsURL(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const imgDetails = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                const pic = imgDetails.type.split('/');
                if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] == 'jpg') {
                    this.onUploadKYCFinished(getUrl, imgDetails);
                }
                else {
                    this.toastr.error('JPEG ,PNG & JPG are the required type');
                }
                // tslint:disable-next-line:align
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
            uploadtype: 'Contentcreator'
        };
        this.commondata.showLoader(true);
        this.common.fileUpload(data).subscribe((successData) => {
            this.uploadSuccess(successData);
        }, (error) => {
            this.uploadFailure(error);
        });
    }
    uploadSuccess(successData) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.imagepath = [];
            this.imagepaththumb = [];
            this.imagepath.push(successData.ResponseObject.imagepath[0].original_image_url);
            this.imagepaththumb.push(successData.ResponseObject.imagepath[0].resized_url);
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    uploadFailure(error) {
        this.commondata.showLoader(false);
    }
    deleteImg() {
        this.imagepath = [];
        this.clearUploadfilename();
    }
    clearUploadfilename() {
        this.myInputVariable.nativeElement.value = '';
    }
    schoolList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.brandservices.getSchoolList(data).subscribe((successData) => {
            this.schoolListSuccess(successData);
        }, (error) => {
            this.schoolListFailure(error);
        });
    }
    schoolListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.schoolData = successData.ResponseObject;
            this.selectedSchool = [];
            this.schoolData.forEach((item, index) => {
                if (this.schoolData[index].has_branch == 1) {
                    this.schoolData[index].name = this.schoolData[index].name + ' ' + '(' + this.schoolData[index].branch_name + ')';
                }
            });
            for (let i = 0; i < this.schoolData.length; i++) {
                this.selectedSchool.push({ id: this.schoolData[i].school_id, name: this.schoolData[i].name });
            }
        }
    }
    schoolListFailure(error) {
        this.commondata.showLoader(false);
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
            if (this.type == 'edit') {
                this.stateList(this.editData.country);
            }
        }
    }
    countryListFailure(error) {
        console.log(error, 'error');
    }
    stateList(id) {
        const countryVal = this.creatorForm.controls.country.value;
        this.creatorForm.controls.state.patchValue(null);
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
            if (this.type == 'edit') {
                this.stateListData.forEach((value) => {
                    if (value.state_id == this.editData.state) {
                        this.creatorForm.controls.state.patchValue(value.state_id);
                    }
                });
            }
        }
    }
    stateListFailure(error) {
        console.log(error, 'error');
    }
    checkDoj(eve) {
        if (eve.value != '') {
            this.creatorForm.controls.doj.setValidators([Validators.required]);
            this.creatorForm.controls.doj.updateValueAndValidity();
        }
        else {
            this.creatorForm.controls.doj.clearValidators();
            this.creatorForm.controls.doj.setValidators(null);
            this.creatorForm.controls.doj.updateValueAndValidity();
        }
    }
    static { this.ɵfac = function AddContentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddContentComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.DomSanitizer), i0.ɵɵdirectiveInject(i4.CommonDataService), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.NewsubjectService), i0.ɵɵdirectiveInject(i7.AuthService), i0.ɵɵdirectiveInject(i8.CategoryService), i0.ɵɵdirectiveInject(i9.SchoolService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i10.ValidationService), i0.ɵɵdirectiveInject(i11.ContentService), i0.ɵɵdirectiveInject(i12.ConfigurationService), i0.ɵɵdirectiveInject(i13.CommonService), i0.ɵɵdirectiveInject(i14.DatePipe)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddContentComponent, selectors: [["app-add-Content"]], viewQuery: function AddContentComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
        } }, decls: 166, vars: 20, consts: [["dp", "angular-mydatepicker"], ["db", "angular-mydatepicker"], ["myInput", ""], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header"], [1, "text-capitalize"], [1, "text-muted"], [1, "text-danger"], [1, "card-body", "tab2-card"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "firstName", "id", "validationCustom0", "type", "text", "placeholder", "First Name", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["formControlName", "lastName", "id", "validationCustom1", "type", "text", "placeholder", "Last Name", "required", "", 1, "form-control"], ["for", "validationCustom3", 1, "col-xl-3", "col-md-4"], ["formControlName", "mobile", "id", "validationCustom3", "type", "text", "placeholder", "Contact Number", "maxlength", "15", "minlength", "10", "required", "", 1, "form-control", 3, "keypress"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["class", "form-control ", "formControlName", "email_id", "id", "validationCustom2", "type", "email", "placeholder", "Email", "required", "", 4, "ngIf"], ["readonly", "", "class", "form-control ", "formControlName", "email_id", "id", "validationCustom16", "type", "email", "placeholder", "Email", "required", "", 4, "ngIf"], [1, "col-xl-3", "col-md-4"], [2, "visibility", "hidden"], [1, "col-xl-8", "col-md-7", "form-group"], [1, "input-group"], ["name", "mydate", "placeholder", "mm/dd/yyyy", "formControlName", "doj", "angular-mydatepicker", "", 1, "form-control", 3, "inputFieldChanged", "keypress", "dateChanged", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar-o"], ["name", "mydate", "placeholder", "mm/dd/yyyy", "formControlName", "dob", "angular-mydatepicker", "", 1, "form-control", 3, "keypress", "dateChanged", "options"], ["for", "validationCustom7", 1, "col-xl-3", "col-md-4"], ["formControlName", "gender", "id", "validationCustom7", 1, "form-control"], ["value", ""], ["value", "male"], ["value", "female"], ["value", "n/a"], ["for", "validationCustom15", 1, "col-xl-3", "col-md-4"], ["formControlName", "designation", "id", "validationCustom15", "type", "text", "placeholder", "Designation", 1, "form-control"], ["for", "validationCustom8", 1, "col-xl-3", "col-md-4"], ["formControlName", "address1", "id", "validationCustom8", "type", "text", "placeholder", "Address1", 1, "form-control"], ["for", "validationCustom9", 1, "col-xl-3", "col-md-4"], ["formControlName", "address2", "id", "validationCustom9", "type", "text", "placeholder", "Address2", 1, "form-control"], ["for", "validationCustom10", 1, "col-xl-3", "col-md-4"], ["formControlName", "city", "id", "validationCustom10", "type", "text", "placeholder", "City", 1, "form-control"], ["bindLabel", "name", "bindValue", "state_id", "formControlName", "state", "placeholder", "Please Select", 3, "items"], ["bindLabel", "name", "bindValue", "country_id", "formControlName", "country", "placeholder", "Please Select", 3, "change", "items"], ["for", "validationCustom13", 1, "col-xl-3", "col-md-4"], ["formControlName", "postalCode", "id", "validationCustom13", "type", "text", "placeholder", "Enter Zip", "minlength", "3", "maxlength", "9", 1, "form-control", 3, "keypress"], ["formControlName", "status", 1, "form-control"], ["value", "1"], ["value", "2"], ["value", "4", 4, "ngIf"], ["type", "file", "accept", ".png, .jpeg, .jpg", 1, "custom-upload-input", 3, "change"], [1, "col-xl-3", "col-md-4", 2, "position", "relative", "left", "25%"], ["class", "files-list fit-image", 4, "ngFor", "ngForOf"], [1, "pull-right"], [1, "error"], ["formControlName", "email_id", "id", "validationCustom2", "type", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["readonly", "", "formControlName", "email_id", "id", "validationCustom16", "type", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["value", "4"], [1, "files-list", "fit-image"], ["alt", "", 3, "src", 4, "ngIf"], ["class", "fa fa-times", "style", "position: relative; right: 26px; bottom: 85px; cursor: pointer;  background: #eeeeee;\n       padding: 10px; border-radius: 45px;", "title", "close", 3, "click", 4, "ngIf"], ["alt", "", 3, "src"], ["title", "close", 1, "fa", "fa-times", 2, "position", "relative", "right", "26px", "bottom", "85px", "cursor", "pointer", "background", "#eeeeee", "padding", "10px", "border-radius", "45px", 3, "click"]], template: function AddContentComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "h5", 8);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "label", 9);
            i0.ɵɵtext(8, "All fields marked with ");
            i0.ɵɵelementStart(9, "span", 10);
            i0.ɵɵtext(10, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " are required");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 11)(13, "form", 12)(14, "div", 13)(15, "label", 14)(16, "span");
            i0.ɵɵtext(17, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(18, " First Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 15);
            i0.ɵɵelement(20, "input", 16);
            i0.ɵɵtemplate(21, AddContentComponent_em_21_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 13)(23, "label", 18)(24, "span");
            i0.ɵɵtext(25, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(26, " Last Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 15);
            i0.ɵɵelement(28, "input", 19);
            i0.ɵɵtemplate(29, AddContentComponent_em_29_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "div", 13)(31, "label", 20)(32, "span");
            i0.ɵɵtext(33, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(34, " Contact Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 15)(36, "input", 21);
            i0.ɵɵlistener("keypress", function AddContentComponent_Template_input_keypress_36_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.numberPattern($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(37, AddContentComponent_em_37_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "div", 13)(39, "label", 22)(40, "span");
            i0.ɵɵtext(41, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(42, " Email Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div", 15);
            i0.ɵɵtemplate(44, AddContentComponent_input_44_Template, 1, 0, "input", 23)(45, AddContentComponent_input_45_Template, 1, 0, "input", 24)(46, AddContentComponent_em_46_Template, 2, 0, "em", 17)(47, AddContentComponent_em_47_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(48, "div", 13)(49, "label", 25)(50, "span", 26);
            i0.ɵɵtext(51, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(52, "Date Of Joining");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "div", 27)(54, "div", 28)(55, "input", 29, 0);
            i0.ɵɵlistener("inputFieldChanged", function AddContentComponent_Template_input_inputFieldChanged_55_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.checkDoj($event)); })("keypress", function AddContentComponent_Template_input_keypress_55_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.datePattern($event)); })("dateChanged", function AddContentComponent_Template_input_dateChanged_55_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDateChanged($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "div", 30)(58, "button", 31);
            i0.ɵɵlistener("click", function AddContentComponent_Template_button_click_58_listener() { i0.ɵɵrestoreView(_r1); const dp_r2 = i0.ɵɵreference(56); return i0.ɵɵresetView(dp_r2.toggleCalendar()); });
            i0.ɵɵelement(59, "i", 32);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(60, AddContentComponent_em_60_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(61, "div", 13)(62, "label", 25)(63, "span", 26);
            i0.ɵɵtext(64, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(65, " Date Of Birth");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "div", 27)(67, "div", 28)(68, "input", 33, 1);
            i0.ɵɵlistener("keypress", function AddContentComponent_Template_input_keypress_68_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.datePattern($event)); })("dateChanged", function AddContentComponent_Template_input_dateChanged_68_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDateChanged($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "div", 30)(71, "button", 31);
            i0.ɵɵlistener("click", function AddContentComponent_Template_button_click_71_listener() { i0.ɵɵrestoreView(_r1); const db_r3 = i0.ɵɵreference(69); return i0.ɵɵresetView(db_r3.toggleCalendar()); });
            i0.ɵɵelement(72, "i", 32);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(73, AddContentComponent_em_73_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(74, "div", 13)(75, "label", 34)(76, "span", 26);
            i0.ɵɵtext(77, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(78, " Gender");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "div", 15)(80, "select", 35)(81, "option", 36);
            i0.ɵɵtext(82, "Select Gender");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(83, "option", 37);
            i0.ɵɵtext(84, "Male");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "option", 38);
            i0.ɵɵtext(86, "Female");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "option", 39);
            i0.ɵɵtext(88, "Do not want to disclose");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(89, AddContentComponent_em_89_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(90, "div", 13)(91, "label", 40)(92, "span", 26);
            i0.ɵɵtext(93, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(94, " Designation");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "div", 15);
            i0.ɵɵelement(96, "input", 41);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(97, "div", 13)(98, "label", 42)(99, "span", 26);
            i0.ɵɵtext(100, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(101, " Address 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(102, "div", 15);
            i0.ɵɵelement(103, "input", 43);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(104, "div", 13)(105, "label", 44)(106, "span", 26);
            i0.ɵɵtext(107, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(108, " Address 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(109, "div", 15);
            i0.ɵɵelement(110, "input", 45);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(111, "div", 13)(112, "label", 46)(113, "span", 26);
            i0.ɵɵtext(114, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(115, " City");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(116, "div", 15);
            i0.ɵɵelement(117, "input", 47);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(118, "div", 13)(119, "label", 25)(120, "span", 26);
            i0.ɵɵtext(121, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(122, " State");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(123, "div", 15);
            i0.ɵɵelement(124, "ng-select", 48);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(125, "div", 13)(126, "label", 25)(127, "span", 26);
            i0.ɵɵtext(128, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(129, " Country");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(130, "div", 15)(131, "ng-select", 49);
            i0.ɵɵlistener("change", function AddContentComponent_Template_ng_select_change_131_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.stateList($event.country_id)); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(132, "div", 13)(133, "label", 50)(134, "span", 26);
            i0.ɵɵtext(135, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(136, " Zip ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(137, "div", 15)(138, "input", 51);
            i0.ɵɵlistener("keypress", function AddContentComponent_Template_input_keypress_138_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.numberPattern($event)); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(139, "div", 13)(140, "label", 25)(141, "span");
            i0.ɵɵtext(142, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(143, " Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(144, "div", 15)(145, "select", 52)(146, "option", 53);
            i0.ɵɵtext(147, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(148, "option", 54);
            i0.ɵɵtext(149, "Suspended");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(150, AddContentComponent_option_150_Template, 2, 0, "option", 55);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(151, AddContentComponent_em_151_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(152, "div", 13)(153, "label", 25)(154, "span", 26);
            i0.ɵɵtext(155, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(156, "Profile Photo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(157, "div", 15)(158, "input", 56, 2);
            i0.ɵɵlistener("change", function AddContentComponent_Template_input_change_158_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.encodeImageFileAsURL($event)); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(160, "div", 13)(161, "div", 57);
            i0.ɵɵtemplate(162, AddContentComponent_div_162_Template, 3, 2, "div", 58);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(163, "div", 59)(164, "button", 31);
            i0.ɵɵlistener("click", function AddContentComponent_Template_button_click_164_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addContent(ctx.type)); });
            i0.ɵɵtext(165);
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.type, " Content-Creator");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.creatorForm);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.creatorForm.get("firstName").valid && (ctx.creatorForm.get("firstName").dirty || ctx.creatorForm.get("firstName").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.creatorForm.get("lastName").valid && (ctx.creatorForm.get("lastName").dirty || ctx.creatorForm.get("lastName").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.creatorForm.get("mobile").valid && (ctx.creatorForm.get("mobile").dirty || ctx.creatorForm.get("mobile").touched));
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.type == "add" || ctx.email);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit" && !ctx.email);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.creatorForm.get("email_id").hasError("required") && (ctx.creatorForm.get("email_id").dirty || ctx.creatorForm.get("email_id").touched));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.creatorForm.get("email_id").hasError("pattern"));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("options", ctx.myDpOptions);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", !ctx.creatorForm.get("doj").valid && (ctx.creatorForm.get("doj").dirty || ctx.creatorForm.get("doj").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("options", ctx.myDpOptions1);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", !ctx.creatorForm.get("dob").valid && (ctx.creatorForm.get("dob").dirty || ctx.creatorForm.get("dob").touched));
            i0.ɵɵadvance(16);
            i0.ɵɵproperty("ngIf", !ctx.creatorForm.get("gender").valid && (ctx.creatorForm.get("gender").dirty || ctx.creatorForm.get("gender").touched));
            i0.ɵɵadvance(35);
            i0.ɵɵproperty("items", ctx.stateListData);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("items", ctx.countryListData);
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("ngIf", ctx.type == "edit");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.creatorForm.get("status").valid && (ctx.creatorForm.get("status").dirty || ctx.creatorForm.get("status").touched));
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngForOf", ctx.imagepath);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", ctx.type == "add" ? "Save" : "Update", "Save");
        } }, dependencies: [i14.NgForOf, i14.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName, i15.NgSelectComponent, i16.AngularMyDatePickerDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddContentComponent, [{
        type: Component,
        args: [{ selector: 'app-add-Content', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <h5 class=\"text-capitalize\">{{type}} Content-Creator</h5>\n                    <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"creatorForm\" class=\"needs-validation user-add\">\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom0\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                First Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control \" formControlName=\"firstName\" id=\"validationCustom0\"\n                                       type=\"text\" placeholder=\"First Name\" required>\n                                <em class=\"error\" *ngIf=\"!creatorForm.get('firstName').valid && (creatorForm.get('firstName').dirty || creatorForm.get('firstName').touched)\">First name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Last Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control \" formControlName=\"lastName\" id=\"validationCustom1\"\n                                       type=\"text\" placeholder=\"Last Name\" required>\n                                <em class=\"error\" *ngIf=\"!creatorForm.get('lastName').valid && (creatorForm.get('lastName').dirty || creatorForm.get('lastName').touched)\">Last name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom3\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Contact Number</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control \" formControlName=\"mobile\" id=\"validationCustom3\"\n                                       type=\"text\" placeholder=\"Contact Number\" (keypress)=\"numberPattern($event)\" maxlength=\"15\" minlength=\"10\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!creatorForm.get('mobile').valid && (creatorForm.get('mobile').dirty || creatorForm.get('mobile').touched)\">Contact Number is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom2\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Email Address</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input *ngIf=\"type == 'add' || email\" class=\"form-control \" formControlName=\"email_id\" id=\"validationCustom2\"\n                                       type=\"email\" placeholder=\"Email\" required>\n                                <input *ngIf=\"type == 'edit' && !email\" readonly class=\"form-control \" formControlName=\"email_id\" id=\"validationCustom16\"\n                                       type=\"email\" placeholder=\"Email\" required>\n                                <em class=\"error\" *ngIf=\"creatorForm.get('email_id').hasError('required') && (creatorForm.get('email_id').dirty || creatorForm.get('email_id').touched)\">Email is required</em>\n                                <em class=\"error\" *ngIf=\"creatorForm.get('email_id').hasError('pattern')\">Invalid Email-Id</em>\n                            </div>\n                        </div>\n<!--                        <div class=\"form-group row\">-->\n<!--                            <label class=\"col-xl-3 col-md-4\"><span>*</span>-->\n<!--                                Institution Name</label>-->\n<!--                            <div class=\"col-xl-8 col-md-7\">-->\n<!--                                <input class=\"form-control\" formControlName=\"schoolId\" id=\"validationCustom21\"-->\n<!--                                       type=\"text\" placeholder=\"Institution Name\" required=\"\" readonly>-->\n<!--                            </div>-->\n<!--                        </div>-->\n                        <div class=\"form-group row \">\n                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>Date Of Joining</label>\n                            <div class=\"col-xl-8 col-md-7 form-group\">\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" name=\"mydate\" placeholder=\"mm/dd/yyyy\"\n                                           formControlName=\"doj\" angular-mydatepicker #dp=\"angular-mydatepicker\" [options]=\"myDpOptions\" (inputFieldChanged)=\"checkDoj($event)\" (keypress)=\"datePattern($event)\"\n                                           (dateChanged)=\"onDateChanged($event)\"/>\n                                    <div class=\"input-group-append\">\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                                            <i class=\"fa fa-calendar-o\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                                <em class=\"error\" *ngIf=\"!creatorForm.get('doj').valid && (creatorForm.get('doj').dirty || creatorForm.get('doj').touched)\">Enter Valid Date</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\" ><span style=\"visibility: hidden\">*</span>\n                                Date Of Birth</label>\n                            <div class=\"col-xl-8 col-md-7 form-group\">\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" name=\"mydate\" placeholder=\"mm/dd/yyyy\"\n                                           formControlName=\"dob\" angular-mydatepicker #db=\"angular-mydatepicker\" [options]=\"myDpOptions1\" (keypress)=\"datePattern($event)\"\n                                           (dateChanged)=\"onDateChanged($event)\"/>\n                                    <div class=\"input-group-append\">\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"db.toggleCalendar()\">\n                                            <i class=\"fa fa-calendar-o\"></i>\n                                        </button>\n                                    </div>\n\n                                </div>\n                                <em class=\"error\" *ngIf=\"!creatorForm.get('dob').valid && (creatorForm.get('dob').dirty || creatorForm.get('dob').touched)\">Date of Birth is required</em>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom7\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Gender</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control\"  formControlName=\"gender\" id=\"validationCustom7\">\n                                    <option value=\"\">Select Gender</option>\n                                    <option value=\"male\">Male</option>\n                                    <option value=\"female\">Female</option>\n                                    <option value=\"n/a\">Do not want to disclose</option>\n                                </select>\n                                <em class=\"error\" *ngIf=\"!creatorForm.get('gender').valid && (creatorForm.get('gender').dirty || creatorForm.get('gender').touched)\">Gender is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom15\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Designation</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"designation\" id=\"validationCustom15\"\n                                       type=\"text\" placeholder=\"Designation\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom8\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Address 1</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"address1\" id=\"validationCustom8\"\n                                       type=\"text\" placeholder=\"Address1\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom9\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Address 2</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"address2\" id=\"validationCustom9\"\n                                       type=\"text\"placeholder=\"Address2\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom10\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                City</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"city\" id=\"validationCustom10\"\n                                       type=\"text\" placeholder=\"City\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                State</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <ng-select [items]=\"stateListData\"\n                                           bindLabel=\"name\"\n                                           bindValue=\"state_id\"\n                                           formControlName=\"state\"\n                                           placeholder=\"Please Select\"\n                                >\n                                </ng-select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Country</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <ng-select [items]=\"countryListData\"\n                                           bindLabel=\"name\"\n                                           bindValue=\"country_id\"\n                                           formControlName=\"country\"\n                                           placeholder=\"Please Select\"\n                                           (change)=\"stateList($event.country_id)\">\n                                </ng-select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom13\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Zip </label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"postalCode\" id=\"validationCustom13\"\n                                       type=\"text\" placeholder=\"Enter Zip\" (keypress)=\"numberPattern($event)\" minlength=\"3\" maxlength=\"9\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Status</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control \" formControlName=\"status\">\n                                    <option value=\"1\">Active</option>\n                                    <option value=\"2\">Suspended</option>\n<!--                                    <option *ngIf=\"type =='edit'\" value=\"3\">Disengaged</option>-->\n                                    <option *ngIf=\"type =='edit'\" value=\"4\">Deleted</option>\n                                </select>\n                                <em class=\"error\" *ngIf=\"!creatorForm.get('status').valid && (creatorForm.get('status').dirty || creatorForm.get('status').touched)\">status is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4 \"><span style=\"visibility: hidden\">*</span>Profile Photo</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input #myInput type=\"file\" class=\"custom-upload-input\" (change)=\"encodeImageFileAsURL($event)\" accept=\".png, .jpeg, .jpg\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-xl-3 col-md-4\"  style=\"position: relative;left: 25%\">\n                                <div class=\"files-list fit-image\" *ngFor=\"let file of imagepath;let i= index\">\n                                    <img  *ngIf=\"imagepath != ''\"  [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + file)\" alt=\"\">\n                                    <i *ngIf=\"imagepath != ''\" class=\"fa fa-times\" style=\"position: relative; right: 26px; bottom: 85px; cursor: pointer;  background: #eeeeee;\n       padding: 10px; border-radius: 45px;\" title=\"close\" (click)=\"deleteImg()\" ></i>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                    <div class=\"pull-right\">\n                        <button type=\"button\" (click)=\"addContent(type)\" class=\"btn btn-primary\">{{type == 'add' ? 'Save' : 'Update'}}Save</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- <div class=\"row mt-4\" *ngIf=\"!allowAdd\">\n        <div class=\"col-md-12\">\n            <button class=\"btn btn-outline-primary pull-right\" (click)=\"backAction()\"><i class=\"fa fa-long-arrow-left fa-1x\" aria-hidden=\"true\"></i> Back</button>\n        </div>\n    </div> -->\n    <!-- <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"!allowAdd\">\n        <div class=\"col-8\">\n            <button class=\"nodataList\">You Don't Have Permission to add Content-Creator for {{schoolName}}</button>\n        </div>\n    </div> -->\n</div>\n<!-- Container-fluid Ends-->\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.DomSanitizer }, { type: i4.CommonDataService }, { type: i5.ToastrService }, { type: i6.NewsubjectService }, { type: i7.AuthService }, { type: i8.CategoryService }, { type: i9.SchoolService }, { type: i1.Router }, { type: i10.ValidationService }, { type: i11.ContentService }, { type: i12.ConfigurationService }, { type: i13.CommonService }, { type: i14.DatePipe }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddContentComponent, { className: "AddContentComponent" }); })();
//# sourceMappingURL=add-Content.component.js.map