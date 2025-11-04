import { Component, ViewChild } from '@angular/core';
import { Validators } from "@angular/forms";
import { dateOptions } from "../../../shared/data/config";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "../../../shared/service/common-data.service";
import * as i5 from "ngx-toastr";
import * as i6 from "@angular/platform-browser";
import * as i7 from "../../../shared/service/auth.service";
import * as i8 from "../../../shared/service/student.service";
import * as i9 from "../../../shared/service/common.service";
import * as i10 from "../../../shared/service/validation.service";
import * as i11 from "../../../shared/service/School.service";
import * as i12 from "@angular/common";
import * as i13 from "../../../shared/service/classroom.service";
import * as i14 from "@nodro7/angular-mydatepicker";
import * as i15 from "@ng-select/ng-select";
const _c0 = ["myInput"];
function RegistrationComponent_div_0_em_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 59);
    i0.ɵɵtext(1, " DOB is invalid ");
    i0.ɵɵelementEnd();
} }
function RegistrationComponent_div_0_em_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 59);
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function RegistrationComponent_div_0_div_79_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 63);
} if (rf & 2) {
    const file_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + file_r4), i0.ɵɵsanitizeUrl);
} }
function RegistrationComponent_div_0_div_79_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 64);
    i0.ɵɵlistener("click", function RegistrationComponent_div_0_div_79_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteImg()); });
    i0.ɵɵelementEnd();
} }
function RegistrationComponent_div_0_div_79_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtemplate(1, RegistrationComponent_div_0_div_79_img_1_Template, 1, 1, "img", 61)(2, RegistrationComponent_div_0_div_79_i_2_Template, 1, 0, "i", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.imagepath != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.imagepath != "");
} }
function RegistrationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "h3", 9);
    i0.ɵɵtext(6, "Welcome to Student Registration!!!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "label", 10);
    i0.ɵɵtext(8, "All fields marked with ");
    i0.ɵɵelementStart(9, "span", 11);
    i0.ɵɵtext(10, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " are required");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 12)(13, "form", 13)(14, "div", 14)(15, "label", 15);
    i0.ɵɵtext(16, " First Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 16);
    i0.ɵɵelement(18, "input", 17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 14)(20, "label", 18);
    i0.ɵɵtext(21, " Last Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 16);
    i0.ɵɵelement(23, "input", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 14)(25, "label", 20);
    i0.ɵɵtext(26, " Email Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 16);
    i0.ɵɵelement(28, "input", 21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 14)(30, "label", 22);
    i0.ɵɵtext(31, " Gender");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 16)(33, "select", 23)(34, "option", 24);
    i0.ɵɵtext(35, "Select Gender");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 25);
    i0.ɵɵtext(37, "Male");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "option", 26);
    i0.ɵɵtext(39, "Female");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "option", 27);
    i0.ɵɵtext(41, "Do not want to disclose");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(42, "div", 14)(43, "label", 28);
    i0.ɵɵtext(44, " Date Of Birth");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "div", 29)(46, "div", 30)(47, "input", 31, 0);
    i0.ɵɵlistener("dateChanged", function RegistrationComponent_div_0_Template_input_dateChanged_47_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDateChanged($event)); })("keypress", function RegistrationComponent_div_0_Template_input_keypress_47_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.datePattern($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "div", 32)(50, "button", 33);
    i0.ɵɵlistener("click", function RegistrationComponent_div_0_Template_button_click_50_listener() { i0.ɵɵrestoreView(_r1); const dp_r3 = i0.ɵɵreference(48); return i0.ɵɵresetView(dp_r3.toggleCalendar()); });
    i0.ɵɵelement(51, "i", 34);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(52, RegistrationComponent_div_0_em_52_Template, 2, 0, "em", 35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "div", 14)(54, "label", 36);
    i0.ɵɵtext(55, " Institution Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "div", 16);
    i0.ɵɵelement(57, "input", 37);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "div", 14)(59, "label", 38);
    i0.ɵɵtext(60, " Contact Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "div", 16)(62, "input", 39);
    i0.ɵɵlistener("keypress", function RegistrationComponent_div_0_Template_input_keypress_62_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.numberPattern($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(63, "div", 14)(64, "label", 40)(65, "span");
    i0.ɵɵtext(66, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(67, " Password ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "div", 16);
    i0.ɵɵelement(69, "input", 41);
    i0.ɵɵtemplate(70, RegistrationComponent_div_0_em_70_Template, 2, 0, "em", 35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(71, "div", 14)(72, "label", 28);
    i0.ɵɵtext(73, "Profile Photo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "div", 42)(75, "input", 43, 1);
    i0.ɵɵlistener("change", function RegistrationComponent_div_0_Template_input_change_75_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.encodeImageFileAsURL($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(77, "div", 14)(78, "div", 44);
    i0.ɵɵtemplate(79, RegistrationComponent_div_0_div_79_Template, 3, 2, "div", 45);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(80, "div", 5)(81, "div", 6)(82, "h5", 46);
    i0.ɵɵtext(83, " Contact Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(84, "div", 14)(85, "label", 47);
    i0.ɵɵtext(86, " Contact Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "div", 16);
    i0.ɵɵelement(88, "input", 48);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(89, "div", 14)(90, "label", 49);
    i0.ɵɵtext(91, " Address 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "div", 16);
    i0.ɵɵelement(93, "input", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(94, "div", 14)(95, "label", 51);
    i0.ɵɵtext(96, " Address 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(97, "div", 16);
    i0.ɵɵelement(98, "input", 52);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(99, "div", 14)(100, "label", 53);
    i0.ɵɵtext(101, " City");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(102, "div", 16);
    i0.ɵɵelement(103, "input", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(104, "div", 14)(105, "label", 28);
    i0.ɵɵtext(106, " State");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(107, "div", 16);
    i0.ɵɵelement(108, "ng-select", 55);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(109, "div", 14)(110, "label", 28);
    i0.ɵɵtext(111, " Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(112, "div", 16)(113, "ng-select", 56);
    i0.ɵɵlistener("change", function RegistrationComponent_div_0_Template_ng_select_change_113_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.stateList($event.country_id)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(114, "div", 14)(115, "label", 40);
    i0.ɵɵtext(116, " ZIP ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(117, "div", 16);
    i0.ɵɵelement(118, "input", 57);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(119, "div", 58)(120, "button", 33);
    i0.ɵɵlistener("click", function RegistrationComponent_div_0_Template_button_click_120_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save()); });
    i0.ɵɵtext(121, "Save");
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("formGroup", ctx_r1.registrationform);
    i0.ɵɵadvance(34);
    i0.ɵɵproperty("options", ctx_r1.myDpOptions);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.registrationform.get("dob").invalid && (ctx_r1.registrationform.get("dob").dirty || ctx_r1.registrationform.get("dob").touched));
    i0.ɵɵadvance(18);
    i0.ɵɵproperty("ngIf", !ctx_r1.registrationform.get("password").valid && (ctx_r1.registrationform.get("password").dirty || ctx_r1.registrationform.get("password").touched));
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r1.imagepath);
    i0.ɵɵadvance(29);
    i0.ɵɵproperty("items", ctx_r1.stateListData);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("items", ctx_r1.countryListData);
} }
function RegistrationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65)(1, "div", 66)(2, "div", 67)(3, "div", 68)(4, "div", 69)(5, "div", 70)(6, "div", 71);
    i0.ɵɵelement(7, "img", 72);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 73)(9, "h5")(10, "em");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1("\"", ctx_r1.message, "\"");
} }
export class RegistrationComponent {
    constructor(route, formBuilder, config, commondata, toastr, sanitizer, auth, student, common, router, validationService, brandservices, datePipe, classroom) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.config = config;
        this.commondata = commondata;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.auth = auth;
        this.student = student;
        this.common = common;
        this.router = router;
        this.validationService = validationService;
        this.brandservices = brandservices;
        this.datePipe = datePipe;
        this.classroom = classroom;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            // other options are here...
        };
        this.message = '';
        this.webhost = this.config.getimgUrl();
        this.route.params.forEach((params) => {
            // this.type = params.type;
            // console.log(this.type);
            this.type = params.type;
            // if (this.token == undefined || this.token == ''){
            //   this.forgotList = false;
            // } else {
            //   this.forgotList = true;
            //
            // }
        });
        this.registrationform = this.formBuilder.group({
            first_name: '',
            last_name: '',
            gender: '',
            dob: '',
            schoolId: '',
            email_id: '',
            mobile: '',
            password: ['', Validators.required],
            parent1Name: '',
            address1: '',
            address2: '',
            city: '',
            // batchname: [''],
            state: '',
            country: '231',
            postalCode: '',
            parent2Name: '',
            // addressp21: '',
            // addressp22: '',
            // city1: '',
            // state1: '',
            // country1: '231',
            // postalCode1: '',
        });
        const current = new Date();
        this.maxDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
        this.imagepath = [];
        this.imagepaththumb = [];
        this.getDetail();
    }
    onDateChanged(event) {
    }
    ngOnInit() {
        setTimeout(() => {
            this.registrationform.controls.email_id.patchValue(this.responseDetail.email_id);
            this.registrationform.controls.schoolId.patchValue(this.responseDetail.school_name);
            this.registrationform.controls.state.patchValue(null);
            this.countryList();
            this.stateList('231');
        }, 500);
    }
    stateList(id) {
        this.stateListData = '';
        const countryVal = id;
        console.log(this.registrationform.controls.country.value, 'jhkj');
        const data = {
            platform: 'web',
            country_id: countryVal,
            role_id: '5',
            user_id: this.responseDetail.user_id,
        };
        this.common.getStateList(data).subscribe((successData) => {
            this.stateListSuccess(successData);
        }, (error) => {
            this.stateListFailure(error);
        });
    }
    stateListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.stateListData = successData.ResponseObject;
        }
    }
    stateListFailure(error) {
        console.log(error, 'error');
    }
    datePattern(event) {
        this.validationService.dateValidation(event);
    }
    countryList() {
        const data = {
            platform: 'web',
            role_id: '5',
            user_id: this.responseDetail.user_id,
        };
        this.common.getCountryList(data).subscribe((successData) => {
            this.countryListSuccess(successData);
        }, (error) => {
            this.countryListFailure(error);
        });
    }
    countryListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.countryListData = successData.ResponseObject;
        }
    }
    countryListFailure(error) {
        console.log(error, 'error');
    }
    getDetail() {
        const data = {
            platform: 'web',
            role_id: '5',
            user_id: this.type
        };
        this.common.studentRegis(data).subscribe((successData) => {
            this.detailSuccess(successData);
        }, (error) => {
            this.detailFailure(error);
        });
    }
    detailSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject);
            this.responseDetail = successData.ResponseObject[0];
        }
    }
    detailFailure(error) {
        this.toastr.error(error.ErrorObject);
        console.log(error, 'error');
    }
    save() {
        if (this.registrationform.valid) {
            const data = {
                platform: 'web',
                role_id: '5',
                user_id: this.responseDetail.user_id,
                email_id: this.registrationform.controls.email_id.value,
                school_name: this.registrationform.controls.schoolId.value,
                school_id: this.responseDetail.school_id,
                password: this.registrationform.controls.password.value,
                first_name: this.registrationform.controls.first_name.value,
                last_name: this.registrationform.controls.last_name.value,
                profile_url: this.imagepath,
                profile_thumb_url: this.imagepaththumb,
                birthday: this.registrationform.controls.dob.value == '' ? '' : this.datePipe.transform(this.registrationform.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd'),
                gender: this.registrationform.controls.gender.value,
                school_idno: this.responseDetail.school_idno,
                grade_id: this.responseDetail.grade_id,
                mobile: this.registrationform.controls.mobile.value,
                parent1_name: this.registrationform.controls.parent1Name.value,
                address: [{
                        address1: this.registrationform.controls.address1.value,
                        address2: this.registrationform.controls.address2.value,
                        state: this.registrationform.controls.state.value,
                        city: this.registrationform.controls.city.value,
                        country: this.registrationform.controls.country.value,
                        postal_code: this.registrationform.controls.postalCode.value
                    }]
            };
            this.common.saveRegistration(data).subscribe((successData) => {
                this.saveSuccess(successData);
            }, (error) => {
                this.saveFailure(error);
            });
        }
        else {
            this.validationService.validateAllFormFields(this.registrationform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    saveSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'csdv');
            this.toastr.success(successData.ResponseObject);
            // window.open('https://uthkal.com/web/#/auth/login', '_self');
            this.message = 'You have successfully registered. Please login through EdQuill App.';
        }
    }
    saveFailure(error) {
        this.toastr.error(error);
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
                console.log(getUrl, 'geturl');
                const pic = imgDetails.type.split('/');
                console.log(pic, 'Type');
                if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] == 'jpg') {
                    this.onUploadKYCFinished(getUrl, imgDetails);
                }
                else {
                    this.toastr.error('JPEG ,PNG & JPG are the required type');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }
    onUploadKYCFinished(getUrlEdu, imageList) {
        this.recordBase64Url = getUrlEdu[1];
        const data = {
            platform: 'web',
            role_id: '5',
            user_id: this.responseDetail.user_id,
            image_path: [{
                    image: this.recordBase64Url,
                    size: imageList.size,
                    type: imageList.type,
                    name: imageList.name
                }],
            uploadtype: 'student'
        };
        this.common.fileUpload(data).subscribe((successData) => {
            this.uploadSuccess(successData);
            console.log(successData, 'successData');
        }, (error) => {
            this.uploadFailure(error);
            console.log(error, 'wrongFormat');
        });
    }
    uploadSuccess(successData) {
        // this.settings.loadingSpinner = false;
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.imagepath = [];
            this.imagepaththumb = [];
            this.imagepath.push(successData.ResponseObject.imagepath[0].original_image_url);
            this.imagepaththumb.push(successData.ResponseObject.imagepath[0].resized_url);
            // if (typing == 1) {
            // for (let i = 0; i < successData.ResponseObject.imagepath.length; i++) {
            //   this.imagepath.push(successData.ResponseObject.imagepath[i].original_image_url);
            //   this.imagepaththumb.push(successData.ResponseObject.imagepath[i].resized_url);
            //
            // }
        }
        else {
            this.toastr.success(successData.ErrorObject);
        }
    }
    uploadFailure(error) {
        // this.toastr.error('Invalid File Format');
        console.log(error, 'error');
    }
    deleteImg() {
        this.imagepath = [];
        this.clearUploadfilename();
    }
    clearUploadfilename() {
        console.log(this.myInputVariable.nativeElement.files);
        this.myInputVariable.nativeElement.value = '';
        console.log(this.myInputVariable.nativeElement.files);
    }
    static { this.ɵfac = function RegistrationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RegistrationComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.CommonDataService), i0.ɵɵdirectiveInject(i5.ToastrService), i0.ɵɵdirectiveInject(i6.DomSanitizer), i0.ɵɵdirectiveInject(i7.AuthService), i0.ɵɵdirectiveInject(i8.StudentService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i10.ValidationService), i0.ɵɵdirectiveInject(i11.SchoolService), i0.ɵɵdirectiveInject(i12.DatePipe), i0.ɵɵdirectiveInject(i13.ClassroomService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegistrationComponent, selectors: [["app-registration"]], viewQuery: function RegistrationComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
        } }, decls: 2, vars: 2, consts: [["dp", "angular-mydatepicker"], ["myInput", ""], ["class", "container-fluid my-3", 4, "ngIf"], ["class", "page-wrapper", 4, "ngIf"], [1, "container-fluid", "my-3"], [1, "row"], [1, "col-12"], [1, "card", "tab2-card"], [1, "card-header"], [1, "text-capitalize", "pt-3", "pb-2"], [1, "text-muted"], [1, "text-danger"], [1, "card-body", "tab2-card"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-12", "col-md-4", "col-xl-3", "ml-1"], [1, "col-12", "col-md-7", "col-xl-8"], ["formControlName", "first_name", "id", "validationCustom0", "placeholder", "First Name", "type", "text", 1, "form-control"], ["for", "validationCustom1", 1, "col-12", "col-md-4", "col-xl-3", "ml-1"], ["formControlName", "last_name", "id", "validationCustom1", "placeholder", "Last Name", "type", "text", 1, "form-control"], ["for", "validationCustom5", 1, "col-12", "col-md-4", "col-xl-3", "ml-1"], ["formControlName", "email_id", "id", "validationCustom5", "placeholder", "Email", "type", "email", "readonly", "", 1, "form-control"], ["for", "validationCustom07", 1, "col-12", "col-md-4", "col-xl-3", "ml-1"], ["formControlName", "gender", "id", "validationCustom07", 1, "form-control"], ["disabled", "", "value", ""], ["value", "male"], ["value", "female"], ["value", "n/a"], [1, "col-12", "col-md-4", "col-xl-3", "ml-1"], [1, "col-12", "col-md-7", "col-xl-8", "form-group"], [1, "d-flex", "align-items-baseline"], ["angular-mydatepicker", "", "autocomplete", "off", "formControlName", "dob", "name", "dp", "placeholder", "mm/dd/yyyy", 1, "form-control", 3, "dateChanged", "keypress", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar-o"], ["class", "error", 4, "ngIf"], ["for", "validationCustom41", 1, "col-12", "col-md-4", "col-xl-3", "ml-1"], ["formControlName", "schoolId", "id", "validationCustom41", "placeholder", "Institution Name", "readonly", "", "type", "text", 1, "form-control"], ["for", "validationCustom6", 1, "col-12", "col-md-4", "col-xl-3", "ml-1"], ["formControlName", "mobile", "id", "validationCustom6", "maxlength", "15", "minlength", "10", "placeholder", "Contact Number", "type", "text", 1, "form-control", 3, "keypress"], ["for", "validationCustom13", 1, "col-12", "col-md-4", "col-xl-3", "ml-1"], ["formControlName", "password", "placeholder", "Enter password", "required", "", "type", "text", 1, "form-control"], [1, "col-12", "col-xl-8", "col-md-7"], ["accept", ".png, .jpeg, .jpg", "type", "file", 1, "custom-upload-input", 3, "change"], [1, "col-12", "col-md-4", "col-xl-3", 2, "position", "relative", "left", "25%"], ["class", "files-list fit-image", 4, "ngFor", "ngForOf"], [1, "text-capitalize"], ["for", "validationCustom7", 1, "col-12", "col-md-4", "col-xl-3", "ml-1"], ["formControlName", "parent1Name", "id", "validationCustom7", "placeholder", "Contact1 Name", "type", "text", 1, "form-control"], ["for", "validationCustom8", 1, "col-12", "col-md-4", "col-xl-3", "ml-1"], ["formControlName", "address1", "id", "validationCustom8", "placeholder", "Address1", "type", "text", 1, "form-control"], ["for", "validationCustom9", 1, "col-12", "col-md-4", "col-xl-3", "ml-1"], ["formControlName", "address2", "id", "validationCustom9", "placeholder", "Address2", "type", "text", 1, "form-control"], ["for", "validationCustom10", 1, "col-12", "col-md-4", "col-xl-3", "ml-1"], ["formControlName", "city", "id", "validationCustom10", "placeholder", "City", "type", "text", 1, "form-control"], ["bindLabel", "name", "bindValue", "state_id", "formControlName", "state", "placeholder", "Please Select", 3, "items"], ["bindLabel", "name", "bindValue", "country_id", "formControlName", "country", "placeholder", "Please Select", 3, "change", "items"], ["formControlName", "postalCode", "id", "validationCustom13", "placeholder", "Enter Zip", "type", "text", 1, "form-control"], [1, "pull-right"], [1, "error"], [1, "files-list", "fit-image"], ["alt", "", 3, "src", 4, "ngIf"], ["class", "fa fa-times", "style", "position: relative; right: 26px; bottom: 85px; cursor: pointer;  background: #eeeeee;\n       padding: 10px; border-radius: 45px;", "title", "close", 3, "click", 4, "ngIf"], ["alt", "", 3, "src"], ["title", "close", 1, "fa", "fa-times", 2, "position", "relative", "right", "26px", "bottom", "85px", "cursor", "pointer", "background", "#eeeeee", "padding", "10px", "border-radius", "45px", 3, "click"], [1, "page-wrapper"], [1, "authentication-box"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-6"], [1, "card", "text-center"], [1, "svg-icon", "d-flex", "justify-conent-center", "mb-0"], ["src", "assets/images/EdQuill.png", "alt", "", 2, "width", "140px", "height", "auto", "margin-bottom", "0"], [1, "card-body"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RegistrationComponent_div_0_Template, 122, 7, "div", 2)(1, RegistrationComponent_div_1_Template, 12, 1, "div", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.message == "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.message != "");
        } }, dependencies: [i12.NgForOf, i12.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName, i14.AngularMyDatePickerDirective, i15.NgSelectComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegistrationComponent, [{
        type: Component,
        args: [{ selector: 'app-registration', template: "<div class=\"container-fluid my-3\" *ngIf=\"message == ''\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <h3 class=\"text-capitalize pt-3 pb-2\">Welcome to Student Registration!!!</h3>\n                    <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"registrationform\" class=\"needs-validation user-add\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-12 col-md-4 col-xl-3 ml-1\" for=\"validationCustom0\">\n                                First Name</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <input class=\"form-control \" formControlName=\"first_name\" id=\"validationCustom0\"\n                                       placeholder=\"First Name\" type=\"text\">\n<!--                                <em *ngIf=\"!registrationform.get('first_name').valid && (registrationform.get('first_name').dirty || registrationform.get('first_name').touched)\" class=\"error\">First name is required</em>-->\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-12 col-md-4 col-xl-3 ml-1\" for=\"validationCustom1\">\n                                Last Name</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <input class=\"form-control\" formControlName=\"last_name\" id=\"validationCustom1\"\n                                       placeholder=\"Last Name\" type=\"text\">\n<!--                                <em *ngIf=\"!registrationform.get('last_name').valid && (registrationform.get('last_name').dirty || registrationform.get('last_name').touched)\" class=\"error\">Last name is required</em>-->\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-12 col-md-4 col-xl-3 ml-1\" for=\"validationCustom5\">\n                                Email Address</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <input class=\"form-control\" formControlName=\"email_id\" id=\"validationCustom5\"\n                                       placeholder=\"Email\" type=\"email\" readonly>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-12 col-md-4 col-xl-3 ml-1\" for=\"validationCustom07\">\n                                Gender</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <select class=\"form-control\"  formControlName=\"gender\" id=\"validationCustom07\">\n                                    <option disabled value=\"\">Select Gender</option>\n                                    <option value=\"male\">Male</option>\n                                    <option value=\"female\">Female</option>\n                                    <option value=\"n/a\">Do not want to disclose</option>\n                                </select>\n<!--                                <em *ngIf=\"!registrationform.get('gender').valid && (registrationform.get('gender').dirty || registrationform.get('gender').touched)\" class=\"error\">Gender is required</em>-->\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-12 col-md-4 col-xl-3 ml-1\">\n                                Date Of Birth</label>\n                            <div class=\"col-12 col-md-7 col-xl-8 form-group\">\n                                <div class=\"d-flex align-items-baseline\">\n                                    <input #dp=\"angular-mydatepicker\" (dateChanged)=\"onDateChanged($event)\" (keypress)=\"datePattern($event)\"\n                                           [options]=\"myDpOptions\"  angular-mydatepicker autocomplete=\"off\" class=\"form-control\"\n                                           formControlName=\"dob\" name=\"dp\" placeholder=\"mm/dd/yyyy\">\n                                    <div class=\"input-group-append\">\n                                        <button (click)=\"dp.toggleCalendar()\" class=\"btn btn-primary\" type=\"button\">\n                                            <i class=\"fa fa-calendar-o\"></i></button>\n                                    </div>\n                                </div>\n                                <em *ngIf=\"registrationform.get('dob').invalid && (registrationform.get('dob').dirty || registrationform.get('dob').touched)\" class=\"error\">\n                                    <!--                                    {{emailErrorMessage(pickerInput.value)}}-->\n                                    DOB is invalid\n                                </em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-12 col-md-4 col-xl-3 ml-1\" for=\"validationCustom41\">\n                                Institution Name</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <input class=\"form-control \" formControlName=\"schoolId\" id=\"validationCustom41\" placeholder=\"Institution Name\"\n                                       readonly type=\"text\">\n<!--                                <em *ngIf=\"!registrationform.get('schoolId').valid && (registrationform.get('schoolId').dirty || registrationform.get('schoolId').touched)\" class=\"error\">Institution Name is required</em>-->\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-12 col-md-4 col-xl-3 ml-1\" for=\"validationCustom6\">\n                                Contact Number</label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <input (keypress)=\"numberPattern($event)\" class=\"form-control \" formControlName=\"mobile\"\n                                       id=\"validationCustom6\" maxlength=\"15\" minlength=\"10\" placeholder=\"Contact Number\" type=\"text\">\n<!--                                <em *ngIf=\"!registrationform.get('mobile').valid && (registrationform.get('mobile').dirty || registrationform.get('mobile').touched)\" class=\"error\">Contact Number is required</em>-->\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-12 col-md-4 col-xl-3 ml-1\" for=\"validationCustom13\"><span>*</span>\n                                Password </label>\n                            <div class=\"col-12 col-md-7 col-xl-8\">\n                                <input class=\"form-control\" formControlName=\"password\"\n                                       placeholder=\"Enter password\" required=\"\" type=\"text\">\n                                <em *ngIf=\"!registrationform.get('password').valid && (registrationform.get('password').dirty || registrationform.get('password').touched)\" class=\"error\">Password is required</em>\n                            </div>\n                        </div>\n<!--                        <div class=\"form-group row\">-->\n<!--                            <label class=\"col-12 col-md-4 col-xl-3\"><span>*</span>-->\n<!--                                Status</label>-->\n<!--                            <div class=\"col-12 col-md-7 col-xl-8\">-->\n<!--                                <select class=\"form-control \" formControlName=\"status\">-->\n<!--                                    <option value=\"1\">Active</option>-->\n<!--                                    <option value=\"2\">Suspended</option>-->\n<!--                                    <option *ngIf=\"type =='edit'\" value=\"3\">Disengaged</option>-->\n<!--                                    <option *ngIf=\"type =='edit'\" value=\"4\">Deleted</option>-->\n<!--                                </select>-->\n<!--                                <em class=\"error\" *ngIf=\"!registrationform.get('status').valid && (registrationform.get('status').dirty || registrationform.get('status').touched)\">status is required</em>-->\n<!--                            </div>-->\n<!--                        </div>-->\n                        <div class=\"form-group row\">\n                            <label class=\"col-12 col-md-4 col-xl-3 ml-1\">Profile Photo</label>\n                            <div class=\"col-12 col-xl-8 col-md-7\">\n                                <input #myInput (change)=\"encodeImageFileAsURL($event)\" accept=\".png, .jpeg, .jpg\" class=\"custom-upload-input\" type=\"file\">\n                                <!--                                <em class=\"error\" *ngIf=\"!teacherForm.get('profile').valid && (teacherForm.get('profile').dirty || teacherForm.get('profile').touched)\">Profile photo is required</em>-->\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-12 col-md-4 col-xl-3\"  style=\"position: relative; left: 25%\">\n                                <div *ngFor=\"let file of imagepath;let i= index\" class=\"files-list fit-image\">\n                                    <img  *ngIf=\"imagepath != ''\"  [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + file)\" alt=\"\">\n                                    <i (click)=\"deleteImg()\" *ngIf=\"imagepath != ''\" class=\"fa fa-times\" style=\"position: relative; right: 26px; bottom: 85px; cursor: pointer;  background: #eeeeee;\n       padding: 10px; border-radius: 45px;\" title=\"close\" ></i>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <h5 class=\"text-capitalize\"> Contact Details</h5>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-12 col-md-4 col-xl-3 ml-1\" for=\"validationCustom7\">\n                                        Contact Name</label>\n                                    <div class=\"col-12 col-md-7 col-xl-8\">\n                                        <input class=\"form-control \" formControlName=\"parent1Name\" id=\"validationCustom7\"\n                                               placeholder=\"Contact1 Name\" type=\"text\">\n<!--                                        <em *ngIf=\"!registrationform.get('parent1Name').valid && (registrationform.get('parent1Name').dirty || registrationform.get('parent1Name').touched)\" class=\"error\">Parent 1 name is required</em>-->\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-12 col-md-4 col-xl-3 ml-1\" for=\"validationCustom8\">\n                                        Address 1</label>\n                                    <div class=\"col-12 col-md-7 col-xl-8\">\n                                        <input class=\"form-control\" formControlName=\"address1\" id=\"validationCustom8\"\n                                               placeholder=\"Address1\" type=\"text\">\n<!--                                        <em *ngIf=\"!registrationform.get('address1').valid && (registrationform.get('address1').dirty || registrationform.get('address1').touched)\" class=\"error\">Address 1 is required</em>-->\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-12 col-md-4 col-xl-3 ml-1\" for=\"validationCustom9\">\n                                        Address 2</label>\n                                    <div class=\"col-12 col-md-7 col-xl-8\">\n                                        <input class=\"form-control\" formControlName=\"address2\" id=\"validationCustom9\"\n                                               placeholder=\"Address2\" type=\"text\" >\n                                        <!--                        <em class=\"error\" *ngIf=\"!studentform.get('address2').valid && (studentform.get('address2').dirty || studentform.get('address2').touched)\">Address 2 is required</em>-->\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-12 col-md-4 col-xl-3 ml-1\" for=\"validationCustom10\">\n                                        City</label>\n                                    <div class=\"col-12 col-md-7 col-xl-8\">\n                                        <input class=\"form-control\" formControlName=\"city\" id=\"validationCustom10\"\n                                               placeholder=\"City\" type=\"text\">\n<!--                                        <em *ngIf=\"!registrationform.get('city').valid && (registrationform.get('city').dirty || registrationform.get('city').touched)\" class=\"error\">City is required</em>-->\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group row\">\n                                    <label class=\"col-12 col-md-4 col-xl-3 ml-1\">\n                                        State</label>\n                                    <div class=\"col-12 col-md-7 col-xl-8\">\n                                        <ng-select [items]=\"stateListData\"\n                                                   bindLabel=\"name\"\n                                                   bindValue=\"state_id\"\n                                                   formControlName=\"state\"\n                                                   placeholder=\"Please Select\"\n                                        >\n                                        </ng-select>\n<!--                                        <em *ngIf=\"!registrationform.get('state').valid && (registrationform.get('state').dirty || registrationform.get('state').touched)\" class=\"error\">State is required</em>-->\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-12 col-md-4 col-xl-3 ml-1\">\n                                        Country</label>\n                                    <div class=\"col-12 col-md-7 col-xl-8\">\n                                        <ng-select (change)=\"stateList($event.country_id)\"\n                                                   [items]=\"countryListData\"\n                                                   bindLabel=\"name\"\n                                                   bindValue=\"country_id\"\n                                                   formControlName=\"country\"\n                                                   placeholder=\"Please Select\"\n                                        >\n                                        </ng-select>\n<!--                                        <em *ngIf=\"!registrationform.get('country').valid && (registrationform.get('country').dirty || registrationform.get('country').touched)\" class=\"error\">Country is required</em>-->\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\">\n                                    <label class=\"col-12 col-md-4 col-xl-3 ml-1\" for=\"validationCustom13\">\n                                        ZIP </label>\n                                    <div class=\"col-12 col-md-7 col-xl-8\">\n                                        <input class=\"form-control\" formControlName=\"postalCode\" id=\"validationCustom13\"\n                                               placeholder=\"Enter Zip\" type=\"text\">\n<!--                                        <em *ngIf=\"!registrationform.get('postalCode').valid && (registrationform.get('postalCode').dirty || registrationform.get('postalCode').touched)\" class=\"error\">ZIP Code is required</em>-->\n                                    </div>\n                                </div>\n                            </div>\n<!--                            <div class=\"col-12 col-md-6\">-->\n<!--                                <h5 class=\"text-capitalize\"> Parent2 Details</h5>-->\n<!--                                <div class=\"form-group row\">-->\n<!--                                    <label class=\"col-12 col-md-4 col-xl-3\" for=\"validationCustom14\">-->\n<!--                                        Parent2 Name</label>-->\n<!--                                    <div class=\"col-12 col-md-7 col-xl-8\">-->\n<!--                                        <input class=\"form-control \" formControlName=\"parent2Name\" id=\"validationCustom14\"-->\n<!--                                               placeholder=\"Parent2 Name\" type=\"text\">-->\n<!--                                        <em *ngIf=\"!registrationform.get('parent2Name').valid && (registrationform.get('parent2Name').dirty || registrationform.get('parent2Name').touched)\" class=\"error\">Parent 1 name is required</em>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div class=\"form-group row\">-->\n<!--                                    <label class=\"col-12 col-md-4 col-xl-3\" for=\"validationCustom15\">-->\n<!--                                        Address 1</label>-->\n<!--                                    <div class=\"col-12 col-md-7 col-xl-8\">-->\n<!--                                        <input class=\"form-control\" formControlName=\"addressp21\" id=\"validationCustom15\"-->\n<!--                                               placeholder=\"Address1\" type=\"text\">-->\n<!--                                        <em *ngIf=\"!registrationform.get('addressp21').valid && (registrationform.get('addressp21').dirty || registrationform.get('addressp21').touched)\" class=\"error\">Address 1 is required</em>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div class=\"form-group row\">-->\n<!--                                    <label class=\"col-12 col-md-4 col-xl-3\" for=\"validationCustom16\">-->\n<!--                                        Address 2</label>-->\n<!--                                    <div class=\"col-12 col-md-7 col-xl-8\">-->\n<!--                                        <input class=\"form-control\" formControlName=\"addressp22\" id=\"validationCustom16\"-->\n<!--                                               placeholder=\"Address2\"type=\"text\">-->\n<!--                                        <em *ngIf=\"!registrationform.get('addressp22').valid && (registrationform.get('addressp22').dirty || registrationform.get('addressp22').touched)\" class=\"error\">Address 2 is required</em>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div class=\"form-group row\">-->\n<!--                                    <label class=\"col-12 col-md-4 col-xl-3\" for=\"validationCustom17\">-->\n<!--                                        City</label>-->\n<!--                                    <div class=\"col-12 col-md-7 col-xl-8\">-->\n<!--                                        <input class=\"form-control\" formControlName=\"city1\" id=\"validationCustom17\"-->\n<!--                                               placeholder=\"City\" type=\"text\">-->\n<!--                                        <em *ngIf=\"!registrationform.get('city1').valid && (registrationform.get('city1').dirty || registrationform.get('city1').touched)\" class=\"error\">City is required</em>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n\n<!--                                <div class=\"form-group row\">-->\n<!--                                    <label class=\"col-12 col-md-4 col-xl-3\">-->\n<!--                                        State</label>-->\n<!--                                    <div class=\"col-12 col-md-7 col-xl-8\">-->\n<!--                                        <ng-select [items]=\"stateListData1\"-->\n<!--                                                   bindLabel=\"name\"-->\n<!--                                                   bindValue=\"state_id\"-->\n<!--                                                   formControlName=\"state1\"-->\n<!--                                                   placeholder=\"Please Select\"-->\n<!--                                        >-->\n<!--                                        </ng-select>-->\n<!--                                        <em *ngIf=\"!registrationform.get('state1').valid && (registrationform.get('state1').dirty || registrationform.get('state1').touched)\" class=\"error\">State is required</em>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div class=\"form-group row\">-->\n<!--                                    <label class=\"col-12 col-md-4 col-xl-3\">-->\n<!--                                        Country</label>-->\n<!--                                    <div class=\"col-12 col-md-7 col-xl-8\">-->\n<!--                                        <ng-select (change)=\"stateList1($event.country_id)\"-->\n<!--                                                   [items]=\"countryListData\"-->\n<!--                                                   bindLabel=\"name\"-->\n<!--                                                   bindValue=\"country_id\"-->\n<!--                                                   formControlName=\"country1\"-->\n<!--                                                   placeholder=\"Please Select\"-->\n<!--                                        >-->\n<!--                                        </ng-select>-->\n\n<!--                                        <em *ngIf=\"!registrationform.get('country1').valid && (registrationform.get('country1').dirty || registrationform.get('country1').touched)\" class=\"error\">Country is required</em>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                                <div class=\"form-group row\">-->\n<!--                                    <label class=\"col-12 col-md-4 col-xl-3\" for=\"validationCustom20\">-->\n<!--                                        Zip </label>-->\n<!--                                    <div class=\"col-12 col-md-7 col-xl-8\">-->\n<!--                                        <input class=\"form-control\" formControlName=\"postalCode1\" id=\"validationCustom20\"-->\n<!--                                               placeholder=\"Enter Zip\" type=\"text\">-->\n<!--                                        <em *ngIf=\"!registrationform.get('postalCode1').valid && (registrationform.get('postalCode1').dirty || registrationform.get('postalCode1').touched)\" class=\"error\">ZIP Code is required</em>-->\n<!--                                    </div>-->\n<!--                                </div>-->\n<!--                            </div>-->\n\n\n                        </div>\n                    </form>\n                    <div class=\"pull-right\">\n                        <button class=\"btn btn-primary\" type=\"button\" (click)=\"save()\">Save</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"page-wrapper\" *ngIf=\"message != ''\">\n    <div class=\"authentication-box\">\n        <div class=\"container\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-12 col-md-6\">\n                    <div class=\"card text-center\">\n                        <div class=\"svg-icon d-flex justify-conent-center mb-0\">\n                            <img src=\"assets/images/EdQuill.png\" style=\"width: 140px; height: auto; margin-bottom: 0;\" alt=\"\">\n                        </div>\n                        <div class=\"card-body\">\n                            <h5><em>\"{{message}}\"</em></h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.ConfigurationService }, { type: i4.CommonDataService }, { type: i5.ToastrService }, { type: i6.DomSanitizer }, { type: i7.AuthService }, { type: i8.StudentService }, { type: i9.CommonService }, { type: i1.Router }, { type: i10.ValidationService }, { type: i11.SchoolService }, { type: i12.DatePipe }, { type: i13.ClassroomService }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegistrationComponent, { className: "RegistrationComponent" }); })();
//# sourceMappingURL=registration.component.js.map