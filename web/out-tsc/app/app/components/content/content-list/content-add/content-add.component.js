import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { urls } from 'src/app/shared/utils/urls';
import { dateOptions } from 'src/app/shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "src/app/shared/service/auth.service";
import * as i2 from "ngx-toastr";
import * as i3 from "@angular/common";
import * as i4 from "src/app/environment.service";
import * as i5 from "@angular/router";
import * as i6 from "@angular/platform-browser";
import * as i7 from "@angular/forms";
import * as i8 from "src/app/shared/service/validation.service";
import * as i9 from "src/app/shared/service/common-data.service";
import * as i10 from "@ng-select/ng-select";
import * as i11 from "@nodro7/angular-mydatepicker";
import * as i12 from "../../../auth/tiny-mice/tiny-mice.component";
const _c0 = ["myInput"];
function ContentAddComponent_em_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 46);
    i0.ɵɵtext(1, "Title is required");
    i0.ɵɵelementEnd();
} }
function ContentAddComponent_em_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 46);
    i0.ɵɵtext(1, "Author Name is required");
    i0.ɵɵelementEnd();
} }
function ContentAddComponent_em_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 46);
    i0.ɵɵtext(1, "Category is required");
    i0.ɵɵelementEnd();
} }
function ContentAddComponent_div_52_em_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 46);
    i0.ɵɵtext(1, "Display Order Number is required");
    i0.ɵɵelementEnd();
} }
function ContentAddComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "label", 19)(2, "span");
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Display Order");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 15)(6, "input", 47);
    i0.ɵɵlistener("keypress", function ContentAddComponent_div_52_Template_input_keypress_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.numberValidate($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ContentAddComponent_div_52_em_7_Template, 2, 0, "em", 17);
    i0.ɵɵelementStart(8, "em", 46);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", !ctx_r2.blogForm.get("display_order").valid && (ctx_r2.blogForm.get("display_order").dirty || ctx_r2.blogForm.get("display_order").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.showErrorMessage());
} }
function ContentAddComponent_em_90_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 46);
    i0.ɵɵtext(1, "status is required");
    i0.ɵɵelementEnd();
} }
function ContentAddComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "label", 19)(2, "span", 23);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Display From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 48)(6, "div", 28)(7, "input", 49, 2);
    i0.ɵɵlistener("click", function ContentAddComponent_div_91_Template_input_click_7_listener() { i0.ɵɵrestoreView(_r5); const dp_r6 = i0.ɵɵreference(8); return i0.ɵɵresetView(dp_r6.toggleCalendar()); })("dateChanged", function ContentAddComponent_div_91_Template_input_dateChanged_7_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDateChanged($event, "displayUntil")); })("keypress", function ContentAddComponent_div_91_Template_input_keypress_7_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.datePattern($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 30)(10, "button", 31);
    i0.ɵɵlistener("click", function ContentAddComponent_div_91_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r5); const dp_r6 = i0.ɵɵreference(8); return i0.ɵɵresetView(dp_r6.toggleCalendar()); });
    i0.ɵɵelement(11, "i", 32);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 50);
    i0.ɵɵelement(13, "ngb-timepicker", 51);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("meridian", false)("seconds", false)("spinners", false);
} }
function ContentAddComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "label", 19)(2, "span", 23);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Display Until");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 48)(6, "div", 28)(7, "input", 52, 3);
    i0.ɵɵlistener("click", function ContentAddComponent_div_92_Template_input_click_7_listener() { i0.ɵɵrestoreView(_r7); const dp1_r8 = i0.ɵɵreference(8); return i0.ɵɵresetView(dp1_r8.toggleCalendar()); })("keypress", function ContentAddComponent_div_92_Template_input_keypress_7_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.datePattern($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 30)(10, "button", 53);
    i0.ɵɵlistener("click", function ContentAddComponent_div_92_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r7); const dp1_r8 = i0.ɵɵreference(8); return i0.ɵɵresetView(dp1_r8.toggleCalendar()); });
    i0.ɵɵelement(11, "i", 32);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 50);
    i0.ɵɵelement(13, "ngb-timepicker", 54);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("options", ctx_r2.myDpOptions1)("readOnly", ctx_r2.blogForm.controls.displayFrom.value == "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r2.validatorService.disableEndDateCondition("displayFrom", "displayUntil", ctx_r2.blogForm));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("meridian", false)("seconds", false)("spinners", false);
} }
function ContentAddComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55)(1, "label", 56)(2, "span", 38);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "Cover Image");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 57)(6, "i", 58);
    i0.ɵɵlistener("click", function ContentAddComponent_div_103_Template_i_click_6_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.deleteImg()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 59);
    i0.ɵɵelement(8, "img", 60);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.env.imgUrl + "/" + ctx_r2.imagePath), i0.ɵɵsanitizeUrl);
} }
function ContentAddComponent_button_112_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 61);
    i0.ɵɵlistener("click", function ContentAddComponent_button_112_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.reset()); });
    i0.ɵɵtext(1, "Reset");
    i0.ɵɵelementEnd();
} }
export class ContentAddComponent {
    constructor(auth, toastr, datePipe, env, router, sanitizer, route, formBuilder, validatorService, commonData) {
        this.auth = auth;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.env = env;
        this.router = router;
        this.sanitizer = sanitizer;
        this.route = route;
        this.formBuilder = formBuilder;
        this.validatorService = validatorService;
        this.commonData = commonData;
        this.myDpOptions = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat
        };
        this.myDpOptions1 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat
        };
        this.type = 'add';
        this.imagePath = '';
        this.categoryListData = [];
        this.maximumCount = 100;
        this.errorMessage = '';
        this.subjectList = [];
        this.description = '';
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.blogForm = this.formBuilder.group({
            name: ['', Validators.required],
            author: ['', Validators.required],
            description: ['', Validators.required],
            displayFrom: '',
            displayFromTime: '',
            displayUntil: '',
            displayUntilTime: '',
            redirect_url: '',
            location: '',
            timing: '',
            eventDate: '',
            category: [null, Validators.required],
            status: ['A', Validators.required],
            display_order: ['', Validators.required],
            subject_id: [null]
        });
        this.imagePath = '';
        this.getCategoryList();
        this.getSubjectList();
    }
    ngOnInit() {
        if (this.type == 'edit') {
            this.editData = JSON.parse(sessionStorage.getItem('editBlog'));
            console.log(this.editData, 'editData');
            this.blogForm.controls.name.patchValue(this.editData.name);
            this.blogForm.controls.author.patchValue(this.editData.author);
            this.blogForm.controls.category.patchValue(this.editData.category_id);
            this.blogForm.controls.redirect_url.patchValue(this.editData.redirect_url);
            this.blogForm.controls.status.patchValue(this.editData.status);
            this.blogForm.controls.description.patchValue(this.editData.long_description);
            this.description = this.editData.long_description;
            this.blogForm.controls.location.patchValue(this.editData.location ?? '');
            this.blogForm.controls.timing.patchValue(this.editData.timing ?? '');
            this.blogForm.controls.display_order.patchValue(this.editData.display_order ?? '');
            this.blogForm.controls.subject_id.patchValue(this.editData.subject_id ?? null);
            console.log(this.editData.eventDate, 'date');
            if (this.editData.eventDate != '0000-00-00' && this.editData.eventDate && this.editData.eventDate != '') {
                const eventDate = this.editData.eventDate.split('-');
                console.log(eventDate, 'eventDate');
                const dateObject = new Date(parseInt(eventDate[0]), parseInt(String(eventDate[1] - 1)), parseInt(eventDate[2]));
                const sdObject = {
                    isRange: false,
                    singleDate: { jsDate: dateObject },
                    dateRange: null
                };
                console.log(sdObject, 'sdObject');
                this.blogForm.controls.eventDate.patchValue(sdObject);
            }
            else {
                this.blogForm.controls.eventDate.patchValue('');
            }
            if (this.editData.status != 'I') {
                console.log(this.editData.display_from);
                if (this.editData.display_from != '') {
                    const dateAndTime = this.editData.display_from.split(' ');
                    const dateString = dateAndTime[0]; // Oct 23
                    const dateParts = dateString.split('-');
                    console.log(dateParts);
                    const dateObject = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
                    const sdObject = {
                        isRange: false,
                        singleDate: { jsDate: dateObject, formatted: dateAndTime[0] },
                        dateRange: null
                    };
                    console.log(sdObject);
                    this.blogForm.controls.displayFrom.patchValue(sdObject);
                    const dateOption = {
                        dateRange: false,
                        dateFormat: dateOptions.pickerFormat,
                        firstDayOfWeek: 'su',
                        disableUntil: {
                            year: parseInt(dateParts[2]),
                            month: parseInt(dateParts[0]),
                            day: parseInt(dateParts[1]) - 1
                        },
                    };
                    this.myDpOptions1 = dateOption;
                    console.log(dateOption, 'date');
                    if (dateAndTime[1] != undefined) {
                        const timeSeperation = dateAndTime[1].split(':');
                        this.blogForm.controls.displayFromTime.patchValue({
                            hour: parseInt(timeSeperation[0]),
                            minute: parseInt(timeSeperation[1]),
                            second: 0
                        });
                    }
                }
                if (this.editData.display_until != '') {
                    const dateAndTime = this.editData.display_until.split(' ');
                    const dateString = dateAndTime[0]; // Oct 23
                    const dateParts = dateString.split('-');
                    const dateObject = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
                    const edObject = {
                        isRange: false,
                        singleDate: { jsDate: dateObject, formatted: dateAndTime[0] },
                        dateRange: null
                    };
                    this.blogForm.controls.displayUntil.patchValue(edObject);
                    if (dateAndTime[1] != undefined) {
                        const timeSeperation = dateAndTime[1].split(':');
                        this.blogForm.controls.displayUntilTime.patchValue({
                            hour: parseInt(timeSeperation[0]),
                            minute: parseInt(timeSeperation[1]),
                            second: 0
                        });
                    }
                }
                if (this.editData.image != '') {
                    this.imagePath = this.editData.image;
                }
            }
            // this.blogForm.controls.displayFrom.patchValue(this.editData.name);
            // this.blogForm.controls.displayUntil.patchValue(this.editData.name);
        }
        setTimeout(_ => this.commonData.showLoader(false), 200);
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
        this.categoryListData = successData.IsSuccess ? successData.ResponseObject : [];
        this.type == 'edit' ? this.updateContentCount(this.editData.category_id, 'edit') : '';
        console.log(this.categoryListData, 'categoryListData');
    }
    numberValidate(event) {
        this.validatorService.numberOnlyValidate(event);
    }
    addBlog() {
        if (this.blogForm.valid) {
            if (this.errorMessage == '') {
                let startDisplay = '';
                let endDisplay = '';
                const startDate = this.blogForm.controls.displayFrom.value;
                const endDate = this.blogForm.controls.displayUntil.value;
                const startTime = this.blogForm.controls.displayFromTime.value;
                const endTime = this.blogForm.controls.displayUntilTime.value;
                console.log(this.blogForm.controls.displayFrom.value, this.blogForm.controls.displayFromTime.value, 'this.blogForm.controls.displayFrom.value');
                if (startDate !== '' && startDate != null && this.blogForm.controls.status.value == 'A') {
                    const time = this.blogForm.controls.displayFromTime.value;
                    const date = this.blogForm.controls.displayFrom.value.singleDate.jsDate;
                    if (time == '' || time == null) {
                        startDisplay = this.datePipe.transform(date, 'yyyy-MM-dd');
                    }
                    else {
                        startDisplay = this.datePipe.transform(date, 'yyyy-MM-dd') + ' ' + (time.hour == '0' ? '00' : time.hour) + ':' + (time.minute == '0' ? '00' : time.minute);
                    }
                }
                if (endDate !== '' && endDate != null && this.blogForm.controls.status.value == 'A') {
                    const time = this.blogForm.controls.displayUntilTime.value;
                    const date = this.blogForm.controls.displayUntil.value.singleDate.jsDate;
                    if (time == '' || time == null) {
                        endDisplay = this.datePipe.transform(date, 'yyyy-MM-dd');
                    }
                    else {
                        endDisplay = this.datePipe.transform(date, 'yyyy-MM-dd') + ' ' + (time.hour == '0' ? '00' : time.hour) + ':' + (time.minute == '0' ? '00' : time.minute);
                    }
                }
                const payload = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.auth.getSessionData('school_id'),
                    long_description: this.blogForm.controls.description.value,
                    name: this.blogForm.controls.name.value,
                    author: this.blogForm.controls.author.value,
                    status: this.blogForm.controls.status.value,
                    category_id: [this.blogForm.controls.category.value],
                    display_from: startDisplay,
                    display_until: endDisplay,
                    image: this.imagePath,
                    content_id: this.type == 'edit' ? this.editData.content_id : '',
                    redirect_url: this.blogForm.controls.redirect_url.value,
                    location: this.blogForm.controls.location.value,
                    timing: this.blogForm.controls.timing.value,
                    display_order: this.blogForm.controls.display_order.value,
                    eventDate: this.blogForm.controls.eventDate.value && this.blogForm.controls.eventDate.value != '' ?
                        this.datePipe.transform(this.blogForm.controls.eventDate.value.singleDate.jsDate, 'yyyy-MM-dd') : ''
                };
                // this.auth.getEntityId() == '2' ? payload['subject_id'] = this.blogForm.controls.subject_id.value ? [this.blogForm.controls.subject_id.value] : [] : '';
                console.log(payload, 'payload');
                const url = this.type == 'add' ? urls.contentAdd : urls.contentEdit;
                this.auth.postService(payload, url).subscribe((successData) => {
                    this.bloggerSuccess(successData);
                }, error => {
                    console.error(error);
                    this.toastr.error(error.response);
                });
            }
            else {
                this.toastr.error('Please enter valid display order number');
            }
        }
        else {
            this.validatorService.validateAllFormFields(this.blogForm);
            this.toastr.error('Please fill all Mandatory fields');
        }
    }
    bloggerSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.router.navigate(['/content/content-list/list']);
        }
        else {
            this.toastr.error(successData.ResponseObject);
        }
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
            uploadtype: 'content-list'
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
            console.log(this.imagePath, 'image');
        }
    }
    deleteImg() {
        this.imagePath = '';
        this.myInputVariable.nativeElement.value = '';
    }
    reset() {
        this.blogForm.reset();
        this.imagePath = '';
        this.editor.setContent('');
        this.blogForm.controls.status.patchValue('1');
    }
    datePattern(event) {
        if (event.charCode !== 0) {
            const pattern = /[0-9-]/;
            const inputChar = String.fromCharCode(event.charCode);
            if (!pattern.test(inputChar)) {
                event.preventDefault();
            }
        }
    }
    onDateChanged(event, endDateFormcontrol) {
        const dateObject = this.validatorService.validateEndDate(event, endDateFormcontrol, this.blogForm);
        this.myDpOptions1 = {};
        this.myDpOptions1 = dateObject;
    }
    categoryChange(categoryId) {
        if (this.type == 'add') {
            this.updateContentCount(categoryId, 'add');
        }
        else {
            if (this.editData.category_id == categoryId) {
                this.updateContentCount(categoryId, 'edit');
            }
            else {
                this.updateContentCount(categoryId, 'add');
            }
        }
    }
    updateContentCount(value, type) {
        console.log(value, 'categoryValue');
        this.categoryListData.forEach((items) => {
            const count = parseInt(items.content_count);
            console.log(count, 'count');
            if (items.category_id == value) {
                this.maximumCount = type == 'add' ? count + 1 : count;
                this.blogForm.controls.display_order.patchValue(type == 'add' ? this.maximumCount : this.editData.display_order);
            }
        });
        console.log(this.maximumCount, 'maximumCount');
        console.log(this.blogForm.controls.display_order.value, 'display_order_num');
    }
    none() {
        this.toastr.info('Please Fill Start Date');
    }
    showErrorMessage() {
        const maximumAllowedNumber = this.maximumCount;
        const orderValue = parseInt(this.blogForm.controls.display_order.value);
        if (this.blogForm.controls.display_order.value == 0 && this.blogForm.controls.display_order.value != '') {
            this.errorMessage = 'Display Order number should not be zero';
        }
        else if (this.blogForm.controls.display_order.value != '') {
            this.errorMessage = orderValue > maximumAllowedNumber ?
                'Display order number should not be greater than' + ' ' + maximumAllowedNumber : '';
        }
        else if (this.blogForm.controls.display_order.value == '') {
            this.errorMessage = '';
        }
        return this.errorMessage;
    }
    getSubjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.subjectList).subscribe((successData) => {
            this.subjectlistSuccess(successData);
        }, (error) => {
            console.error(error, 'booking error');
        });
    }
    subjectlistSuccess(successData) {
        if (successData.IsSuccess) {
            this.subjectList = successData.ResponseObject;
        }
    }
    editorValue(event) {
        this.blogForm.controls.description.patchValue(event.content);
    }
    static { this.ɵfac = function ContentAddComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentAddComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ToastrService), i0.ɵɵdirectiveInject(i3.DatePipe), i0.ɵɵdirectiveInject(i4.EnvironmentService), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i6.DomSanitizer), i0.ɵɵdirectiveInject(i5.ActivatedRoute), i0.ɵɵdirectiveInject(i7.FormBuilder), i0.ɵɵdirectiveInject(i8.ValidationService), i0.ɵɵdirectiveInject(i9.CommonDataService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContentAddComponent, selectors: [["app-content-add"]], viewQuery: function ContentAddComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
        } }, decls: 115, vars: 20, consts: [["dp2", "angular-mydatepicker"], ["myInput", ""], ["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], [1, "container-fluid"], [1, "col-md-12"], [1, "card", "tab2-card"], [1, "card-header"], [1, "text-capitalize"], [1, "text-muted"], [1, "text-danger"], [1, "card-body", "tab2-card"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom4", 1, "col-sm-2"], [1, "col-sm-10"], ["formControlName", "name", "id", "validationCustom4", "placeholder", "Enter Title", "required", "", "type", "text", 1, "form-control"], ["class", "error", 4, "ngIf"], ["formControlName", "author", "placeholder", "Enter Author Name", "required", "", "type", "text", 1, "form-control"], [1, "col-sm-2"], [1, "main-content"], [3, "emitEditorValue", "height", "editorPatchValue", "hideMatEditor"], ["bindLabel", "category_name", "bindValue", "category_id", "placeholder", "Select Content", "typeToSearchText", "", "formControlName", "category", 3, "change", "items", "clearable"], [2, "visibility", "hidden"], ["bindLabel", "subject_name", "bindValue", "subject_id", "placeholder", "Select Sub Category", "typeToSearchText", "", "formControlName", "subject_id", 3, "items", "clearable"], ["class", "form-group row", 4, "ngIf"], ["formControlName", "location", "placeholder", "Enter Location", "type", "text", 1, "form-control"], ["formControlName", "timing", "placeholder", "Enter Timing", "type", "text", 1, "form-control"], [1, "input-group", "col-md-6", "px-0"], ["angular-mydatepicker", "", "formControlName", "eventDate", "placeholder", "mm-dd-yyyy", 1, "form-control", 3, "click", "keypress", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar-o"], ["formControlName", "status", 1, "form-control"], ["value", "A"], ["value", "I"], [1, "form-group", "row", "mt-2"], [1, "col-sm-2", "col-form-label"], [1, "text-danger", "mr-1"], ["accept", ".png, .jpg, .jpeg,.webp", "type", "file", 1, "custom-upload-input", "col-md-12", "px-0", 3, "change"], [1, "color-grey", "mb-0", "font-weight-bold", 2, "font-size", "12px"], ["class", "form-group row col-12 d-flex", 4, "ngIf"], ["for", "validationCustom5", 1, "col-sm-2"], ["formControlName", "redirect_url", "id", "validationCustom5", "placeholder", "Enter Redirect Url", "type", "text", 1, "form-control"], [1, "pull-right"], ["class", "btn btn-outline-primary mr-2", "type", "button", 3, "click", 4, "ngIf"], [1, "error"], ["maxlength", "4", "formControlName", "display_order", "placeholder", "Enter Display Order Number", "type", "text", 1, "form-control", 3, "keypress"], [1, "col-sm-10", "d-flex"], ["angular-mydatepicker", "", "formControlName", "displayFrom", "name", "mydate", "placeholder", "mm-dd-yyyy", 1, "form-control", 3, "click", "dateChanged", "keypress", "options"], [1, "col-md-6"], ["formControlName", "displayFromTime", 1, "removeFieldSet", 3, "meridian", "seconds", "spinners"], ["angular-mydatepicker", "", "formControlName", "displayUntil", "name", "mydate", "placeholder", "mm-dd-yyyy", 1, "form-control", 3, "click", "keypress", "options", "readOnly"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["formControlName", "displayUntilTime", 1, "removeFieldSet", 3, "meridian", "seconds", "spinners"], [1, "form-group", "row", "col-12", "d-flex"], [1, "col-sm-2", "col-form-label", 2, "visibility", "hidden"], [1, "col-xl-10", "col-md-10", "px-0"], ["title", "close", 1, "fa", "fa-times-circle", "close-icon", 3, "click"], [1, "files-list", "fit-img2"], [1, "w-30", 3, "src"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", 3, "click"]], template: function ContentAddComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h5", 8);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "label", 9);
            i0.ɵɵtext(7, "All fields marked with ");
            i0.ɵɵelementStart(8, "span", 10);
            i0.ɵɵtext(9, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(10, " are required");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 11)(12, "form", 12)(13, "div", 13)(14, "label", 14)(15, "span");
            i0.ɵɵtext(16, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(17, " Title");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 15);
            i0.ɵɵelement(19, "input", 16);
            i0.ɵɵtemplate(20, ContentAddComponent_em_20_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 13)(22, "label", 14)(23, "span");
            i0.ɵɵtext(24, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(25, " Author Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "div", 15);
            i0.ɵɵelement(27, "input", 18);
            i0.ɵɵtemplate(28, ContentAddComponent_em_28_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "div", 13)(30, "label", 19)(31, "span");
            i0.ɵɵtext(32, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(33, " Description");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "div", 15)(35, "div", 20)(36, "app-tiny-mice", 21);
            i0.ɵɵlistener("emitEditorValue", function ContentAddComponent_Template_app_tiny_mice_emitEditorValue_36_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.editorValue($event)); });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(37, "div", 13)(38, "label", 19)(39, "span");
            i0.ɵɵtext(40, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(41, " Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 15)(43, "ng-select", 22);
            i0.ɵɵlistener("change", function ContentAddComponent_Template_ng_select_change_43_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.categoryChange($event.category_id)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(44, ContentAddComponent_em_44_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "div", 13)(46, "label", 19)(47, "span", 23);
            i0.ɵɵtext(48, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(49, " Sub-Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "div", 15);
            i0.ɵɵelement(51, "ng-select", 24);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(52, ContentAddComponent_div_52_Template, 10, 2, "div", 25);
            i0.ɵɵelementStart(53, "div", 13)(54, "label", 19)(55, "span", 23);
            i0.ɵɵtext(56, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(57, " Location");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "div", 15);
            i0.ɵɵelement(59, "input", 26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(60, "div", 13)(61, "label", 19)(62, "span", 23);
            i0.ɵɵtext(63, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(64, " Timing");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "div", 15);
            i0.ɵɵelement(66, "input", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "div", 13)(68, "label", 19)(69, "span", 23);
            i0.ɵɵtext(70, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(71, " Event Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "div", 15)(73, "div", 28)(74, "input", 29, 0);
            i0.ɵɵlistener("click", function ContentAddComponent_Template_input_click_74_listener() { i0.ɵɵrestoreView(_r1); const dp2_r4 = i0.ɵɵreference(75); return i0.ɵɵresetView(dp2_r4.toggleCalendar()); })("keypress", function ContentAddComponent_Template_input_keypress_74_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.datePattern($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "div", 30)(77, "button", 31);
            i0.ɵɵlistener("click", function ContentAddComponent_Template_button_click_77_listener() { i0.ɵɵrestoreView(_r1); const dp2_r4 = i0.ɵɵreference(75); return i0.ɵɵresetView(dp2_r4.toggleCalendar()); });
            i0.ɵɵelement(78, "i", 32);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(79, "div", 13)(80, "label", 19)(81, "span");
            i0.ɵɵtext(82, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(83, " Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "div", 15)(85, "select", 33)(86, "option", 34);
            i0.ɵɵtext(87, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(88, "option", 35);
            i0.ɵɵtext(89, "Suspended");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(90, ContentAddComponent_em_90_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(91, ContentAddComponent_div_91_Template, 14, 4, "div", 25)(92, ContentAddComponent_div_92_Template, 14, 6, "div", 25);
            i0.ɵɵelementStart(93, "div", 36)(94, "label", 37)(95, "span", 38);
            i0.ɵɵtext(96, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(97, "Cover Image");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(98, "div", 15)(99, "input", 39, 1);
            i0.ɵɵlistener("change", function ContentAddComponent_Template_input_change_99_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.encodeImageFileAsURL($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(101, "span", 40);
            i0.ɵɵtext(102, "Recommended Size: 1078 \u00D7 400 pixels");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(103, ContentAddComponent_div_103_Template, 9, 1, "div", 41);
            i0.ɵɵelementStart(104, "div", 13)(105, "label", 42)(106, "span", 23);
            i0.ɵɵtext(107, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(108, " Redirect Url");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(109, "div", 15);
            i0.ɵɵelement(110, "input", 43);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(111, "div", 44);
            i0.ɵɵtemplate(112, ContentAddComponent_button_112_Template, 2, 0, "button", 45);
            i0.ɵɵelementStart(113, "button", 31);
            i0.ɵɵlistener("click", function ContentAddComponent_Template_button_click_113_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addBlog()); });
            i0.ɵɵtext(114);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.type == "add" ? "Add" : "Edit", " Content");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.blogForm);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.blogForm.get("name").valid && (ctx.blogForm.get("name").dirty || ctx.blogForm.get("name").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.blogForm.get("author").valid && (ctx.blogForm.get("author").dirty || ctx.blogForm.get("author").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("height", 300)("editorPatchValue", ctx.type == "add" ? false : ctx.description)("hideMatEditor", true);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("items", ctx.categoryListData)("clearable", false);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.blogForm.get("category").valid && (ctx.blogForm.get("category").dirty || ctx.blogForm.get("category").touched));
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("items", ctx.subjectList)("clearable", false);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.blogForm.controls.category.value != "" && ctx.blogForm.controls.category.value != null);
            i0.ɵɵadvance(22);
            i0.ɵɵproperty("options", ctx.myDpOptions);
            i0.ɵɵadvance(16);
            i0.ɵɵproperty("ngIf", !ctx.blogForm.get("status").valid && (ctx.blogForm.get("status").dirty || ctx.blogForm.get("status").touched));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.blogForm.controls.status.value == "A");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.blogForm.controls.status.value == "A");
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngIf", ctx.imagePath != "");
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ctx.type == "add");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.type == "add" ? "Save" : "Update");
        } }, dependencies: [i3.NgIf, i7.ɵNgNoValidate, i7.NgSelectOption, i7.ɵNgSelectMultipleOption, i7.DefaultValueAccessor, i7.SelectControlValueAccessor, i7.NgControlStatus, i7.NgControlStatusGroup, i7.RequiredValidator, i7.MaxLengthValidator, i7.FormGroupDirective, i7.FormControlName, i10.NgSelectComponent, i11.AngularMyDatePickerDirective, i12.TinyMiceComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentAddComponent, [{
        type: Component,
        args: [{ selector: 'app-content-add', template: "<div class=\"container-fluid\">\n    <div class=\"col-md-12\">\n        <div class=\"card tab2-card\">\n            <div class=\"card-header\">\n                <h5 class=\"text-capitalize\">{{type == 'add' ? 'Add' : 'Edit'}} Content</h5>\n                <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n            </div>\n            <div class=\"card-body tab2-card\">\n                <form [formGroup]=\"blogForm\" class=\"needs-validation user-add\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2\" for=\"validationCustom4\"><span>*</span>\n                            Title</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control \" formControlName=\"name\" id=\"validationCustom4\"\n                                   placeholder=\"Enter Title\" required=\"\" type=\"text\">\n                            <em *ngIf=\"!blogForm.get('name').valid && (blogForm.get('name').dirty || blogForm.get('name').touched)\" class=\"error\">Title is required</em>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2\" for=\"validationCustom4\"><span>*</span>\n                            Author Name</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control \" formControlName=\"author\"\n                                   placeholder=\"Enter Author Name\" required=\"\" type=\"text\">\n                            <em *ngIf=\"!blogForm.get('author').valid && (blogForm.get('author').dirty || blogForm.get('author').touched)\" class=\"error\">Author Name is required</em>\n                        </div>\n                    </div>\n<!--                    <div class=\"form-group row\">-->\n<!--                        <label class=\"col-sm-2\"><span  style=\"visibility: hidden\">*</span>-->\n<!--                            Short Description</label>-->\n<!--                        <div class=\"col-sm-10\">-->\n<!--                            <textarea class=\"form-control\" cols=\"30\" formControlName=\"shortDescription\" placeholder=\"Enter Description Shortly\" rows=\"3\"></textarea>-->\n<!--                        </div>-->\n<!--                    </div>-->\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2\"><span>*</span>\n                            Description</label>\n                        <div class=\"col-sm-10\">\n                            <div class=\"main-content\">\n                                <app-tiny-mice [height]=\"300\" [editorPatchValue]=\"type == 'add' ? false : description\"\n                                               (emitEditorValue)=\"editorValue($event)\"\n                                               [hideMatEditor]=\"true\"></app-tiny-mice>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-2\"><span>*</span>\n                        Category</label>\n                        <div class=\"col-sm-10\">\n                          <ng-select\n                          [items]=\"categoryListData\"\n                          bindLabel=\"category_name\"\n                          bindValue=\"category_id\"\n                          placeholder=\"Select Content\"\n                          typeToSearchText=\"\"\n                          [clearable]=\"false\"\n                          (change)=\"categoryChange($event.category_id)\"\n                          formControlName=\"category\">\n                        </ng-select>\n                            <em *ngIf=\"!blogForm.get('category').valid && (blogForm.get('category').dirty || blogForm.get('category').touched)\" class=\"error\">Category is required</em>\n                        </div>\n                    </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-2\"><span style=\"visibility: hidden\">*</span>\n                      Sub-Category</label>\n                    <div class=\"col-sm-10\">\n                      <ng-select\n                        [items]=\"subjectList\"\n                        bindLabel=\"subject_name\"\n                        bindValue=\"subject_id\"\n                        placeholder=\"Select Sub Category\"\n                        typeToSearchText=\"\"\n                        [clearable]=\"false\"\n                        formControlName=\"subject_id\">\n                      </ng-select>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\" *ngIf=\"blogForm.controls.category.value != '' && blogForm.controls.category.value != null\">\n                    <label class=\"col-sm-2\"><span>*</span>\n                      Display Order</label>\n                    <div class=\"col-sm-10\">\n                      <input maxlength=\"4\" (keypress)=\"numberValidate($event)\" class=\"form-control\" formControlName=\"display_order\"\n                             placeholder=\"Enter Display Order Number\" type=\"text\">\n                      <em *ngIf=\"!blogForm.get('display_order').valid && (blogForm.get('display_order').dirty || blogForm.get('display_order').touched)\" class=\"error\">Display Order Number is required</em>\n                      <em class=\"error\">{{showErrorMessage()}}</em>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-2\"><span style=\"visibility: hidden\">*</span>\n                      Location</label>\n                    <div class=\"col-sm-10\">\n                      <input class=\"form-control\" formControlName=\"location\"\n                             placeholder=\"Enter Location\" type=\"text\">\n                    </div>\n                  </div>\n\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-2\"><span style=\"visibility: hidden\">*</span>\n                      Timing</label>\n                    <div class=\"col-sm-10\">\n                      <input class=\"form-control\" formControlName=\"timing\"\n                             placeholder=\"Enter Timing\" type=\"text\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-2\"><span style=\"visibility: hidden\">*</span>\n                      Event Date</label>\n                    <div class=\"col-sm-10\">\n                      <div class=\"input-group col-md-6 px-0\">\n                        <input (click)=\"dp2.toggleCalendar()\" #dp2=\"angular-mydatepicker\" (keypress)=\"datePattern($event)\" [options]=\"myDpOptions\"\n                               angular-mydatepicker class=\"form-control\" formControlName=\"eventDate\"\n                               placeholder=\"mm-dd-yyyy\"/>\n                        <div class=\"input-group-append\">\n                          <button (click)=\"dp2.toggleCalendar()\" class=\"btn btn-primary\" type=\"button\">\n                            <i class=\"fa fa-calendar-o\"></i>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-2\"><span>*</span>\n                            Status</label>\n                        <div class=\"col-sm-10\">\n                            <select class=\"form-control\" formControlName=\"status\">\n                                <option value=\"A\">Active</option>\n                                <option value=\"I\">Suspended</option>\n                            </select>\n                            <em *ngIf=\"!blogForm.get('status').valid && (blogForm.get('status').dirty || blogForm.get('status').touched)\" class=\"error\">status is required</em>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"blogForm.controls.status.value == 'A'\" class=\"form-group row\">\n                        <label class=\"col-sm-2\"><span style=\"visibility: hidden\">*</span>\n                            Display From</label>\n                        <div class=\"col-sm-10 d-flex\">\n                            <div class=\"input-group col-md-6 px-0\">\n                                <input  (click)=\"dp.toggleCalendar()\" #dp=\"angular-mydatepicker\" (dateChanged)=\"onDateChanged($event, 'displayUntil')\" (keypress)=\"datePattern($event)\" [options]=\"myDpOptions\"\n                                       angular-mydatepicker class=\"form-control\" formControlName=\"displayFrom\" name=\"mydate\"\n                                       placeholder=\"mm-dd-yyyy\"/>\n                                <div class=\"input-group-append\">\n                                    <button (click)=\"dp.toggleCalendar()\" class=\"btn btn-primary\" type=\"button\">\n                                        <i class=\"fa fa-calendar-o\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <ngb-timepicker [meridian]=\"false\" [seconds]=\"false\" [spinners]=\"false\" class=\"removeFieldSet\" formControlName=\"displayFromTime\"></ngb-timepicker>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"blogForm.controls.status.value == 'A'\" class=\"form-group row\">\n                        <label class=\"col-sm-2\"><span style=\"visibility: hidden\">*</span>\n                            Display Until</label>\n                        <div class=\"col-sm-10 d-flex\">\n                            <div class=\"input-group col-md-6 px-0\">\n                                <input  (click)=\"dp1.toggleCalendar()\" #dp1=\"angular-mydatepicker\" (keypress)=\"datePattern($event)\" [options]=\"myDpOptions1\" [readOnly]=\"blogForm.controls.displayFrom.value == ''\" angular-mydatepicker\n                                       class=\"form-control\" formControlName=\"displayUntil\" name=\"mydate\" placeholder=\"mm-dd-yyyy\"/>\n                                <div class=\"input-group-append\">\n                                    <button [disabled]=\"validatorService.disableEndDateCondition('displayFrom', 'displayUntil', blogForm)\"\n                                            (click)=\"dp1.toggleCalendar()\" class=\"btn btn-primary\" type=\"button\">\n                                        <i class=\"fa fa-calendar-o\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <ngb-timepicker [meridian]=\"false\" [seconds]=\"false\" [spinners]=\"false\" class=\"removeFieldSet\" formControlName=\"displayUntilTime\"></ngb-timepicker>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row mt-2\">\n                      <label class=\"col-sm-2 col-form-label\"><span class=\"text-danger mr-1\">*</span>Cover Image</label>\n                      <div class=\"col-sm-10\">\n                        <input #myInput (change)=\"encodeImageFileAsURL($event)\" accept=\".png, .jpg, .jpeg,.webp\" class=\"custom-upload-input col-md-12 px-0\" type=\"file\" >\n                        <span class=\"color-grey mb-0 font-weight-bold\" style=\"font-size: 12px\">Recommended Size: 1078 \u00D7 400 pixels</span>\n                      </div>\n                    </div>\n          \n                    <div class=\"form-group row col-12 d-flex\" *ngIf=\"imagePath != ''\">\n                      <label style=\"visibility: hidden\"  class=\"col-sm-2 col-form-label\"><span class=\"text-danger mr-1\">*</span>Cover Image</label>\n                      <div class=\"col-xl-10 col-md-10 px-0\">\n                        <i (click)=\"deleteImg()\" class=\"fa fa-times-circle close-icon\" title=\"close\"></i>\n                        <div class=\"files-list fit-img2\">\n                          <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl(env.imgUrl  + '/' + imagePath)\" class=\"w-30\">\n                        </div>\n                      </div>\n                    </div>\n\n                    <!-- <div class=\"form-group row\">\n                        <label class=\"col-sm-2\"><span style=\"visibility: hidden\">*</span>Cover Image</label>\n                        <div class=\"col-xl-6 col-md-4\">\n                            <input #myInput (change)=\"encodeImageFileAsURL($event)\" class=\"custom-upload-input col-md-12 px-0\" type=\"file\" >\n                            <span class=\"color-grey mb-0 font-weight-bold\" style=\"font-size: 12px\">Recommended Size: 1078 \u00D7 400 pixels</span>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group col-12 d-flex\" *ngIf=\"imagePath != ''\">\n                        <label style=\"visibility: hidden\" class=\"col-sm-2 col-form-label\"><span\n                                class=\"mr-1 text-danger\">*</span>Cover Image</label>\n                        <div class=\"col-xl-10 col-md-10 px-0\">\n                            <i (click)=\"deleteImg()\" class=\"fa fa-times-circle close-icon\" title=\"close\"></i>\n                            <div class=\"files-list fit-img2\">\n                                <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl(env.imgUrl + '/' + imagePath)\" class=\"w-30\" alt=\"\">\n                            </div>\n                        </div>\n                    </div> -->\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-2\" for=\"validationCustom5\"><span style=\"visibility: hidden\">*</span>\n                        Redirect Url</label>\n                      <div class=\"col-sm-10\">\n                          <input class=\"form-control \" formControlName=\"redirect_url\" id=\"validationCustom5\"\n                                 placeholder=\"Enter Redirect Url\" type=\"text\">\n                      </div>\n                    </div>\n                </form>\n                <div class=\"pull-right\">\n                    <button (click)=\"reset()\" *ngIf=\"type == 'add'\" class=\"btn btn-outline-primary mr-2\" type=\"button\">Reset</button>\n                    <button (click)=\"addBlog()\" class=\"btn btn-primary\" type=\"button\" >{{type == 'add' ? 'Save' : 'Update'}}</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.ToastrService }, { type: i3.DatePipe }, { type: i4.EnvironmentService }, { type: i5.Router }, { type: i6.DomSanitizer }, { type: i5.ActivatedRoute }, { type: i7.FormBuilder }, { type: i8.ValidationService }, { type: i9.CommonDataService }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContentAddComponent, { className: "ContentAddComponent" }); })();
//# sourceMappingURL=content-add.component.js.map