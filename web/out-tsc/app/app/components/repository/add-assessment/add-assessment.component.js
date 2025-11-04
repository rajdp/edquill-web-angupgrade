import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { dateOptions } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "../../../shared/service/class.service";
import * as i4 from "../../../shared/service/creator.service";
import * as i5 from "../../../shared/service/common-data.service";
import * as i6 from "ngx-toastr";
import * as i7 from "../../../shared/service/common.service";
import * as i8 from "../../../shared/service/auth.service";
import * as i9 from "../../../shared/service/School.service";
import * as i10 from "@angular/platform-browser";
import * as i11 from "../../../shared/service/validation.service";
import * as i12 from "../../../shared/service/configuration.service";
import * as i13 from "@ng-bootstrap/ng-bootstrap";
import * as i14 from "@angular/common";
import * as i15 from "@ng-select/ng-select";
import * as i16 from "ngx-chips";
const _c0 = ["myInput"];
const _c1 = ["pdf"];
function AddAssessmentComponent_img_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 60);
} }
function AddAssessmentComponent_img_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 61);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + ctx_r1.imagepath), i0.ɵɵsanitizeUrl);
} }
function AddAssessmentComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 62);
    i0.ɵɵlistener("click", function AddAssessmentComponent_i_27_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteImg()); });
    i0.ɵɵelementEnd();
} }
function AddAssessmentComponent_em_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 63);
    i0.ɵɵtext(1, "resource Name is required");
    i0.ɵɵelementEnd();
} }
function AddAssessmentComponent_em_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 63);
    i0.ɵɵtext(1, "Grade is required");
    i0.ɵɵelementEnd();
} }
function AddAssessmentComponent_em_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 63);
    i0.ɵɵtext(1, "Subject is required");
    i0.ɵɵelementEnd();
} }
function AddAssessmentComponent_em_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 63);
    i0.ɵɵtext(1, "access is required");
    i0.ɵɵelementEnd();
} }
function AddAssessmentComponent_em_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 63);
    i0.ɵɵtext(1, "Description is required");
    i0.ɵɵelementEnd();
} }
function AddAssessmentComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 65);
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r5.tag_name);
} }
function AddAssessmentComponent_div_73_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 69);
} }
function AddAssessmentComponent_div_73_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 62);
    i0.ɵɵlistener("click", function AddAssessmentComponent_div_73_i_3_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r6); const i_r7 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deletePdf(i_r7)); });
    i0.ɵɵelementEnd();
} }
function AddAssessmentComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66)(1, "div", 67);
    i0.ɵɵtemplate(2, AddAssessmentComponent_div_73_img_2_Template, 1, 0, "img", 68)(3, AddAssessmentComponent_div_73_i_3_Template, 1, 0, "i", 23);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hidden", ctx_r1.pdfpath == "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath != "");
} }
function AddAssessmentComponent_div_74_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 71);
} }
function AddAssessmentComponent_div_74_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 62);
    i0.ɵɵlistener("click", function AddAssessmentComponent_div_74_i_3_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r8); const i_r9 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteLink(i_r9)); });
    i0.ɵɵelementEnd();
} }
function AddAssessmentComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66)(1, "div", 67);
    i0.ɵɵtemplate(2, AddAssessmentComponent_div_74_img_2_Template, 1, 0, "img", 70)(3, AddAssessmentComponent_div_74_i_3_Template, 1, 0, "i", 23);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hidden", ctx_r1.pdflinks == "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.pdflinks != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdflinks != "");
} }
function AddAssessmentComponent_ng_template_75_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 80)(1, "input", 81, 2);
    i0.ɵɵlistener("change", function AddAssessmentComponent_ng_template_75_div_13_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.encodePdfFileAsURL($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 82);
    i0.ɵɵlistener("click", function AddAssessmentComponent_ng_template_75_div_13_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r11); const hiddenfileinput_r12 = i0.ɵɵreference(2); return i0.ɵɵresetView(hiddenfileinput_r12.click()); });
    i0.ɵɵtext(4, "Upload PDF");
    i0.ɵɵelementEnd()();
} }
function AddAssessmentComponent_ng_template_75_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 80)(1, "button", 83);
    i0.ɵɵlistener("click", function AddAssessmentComponent_ng_template_75_div_14_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onsave()); });
    i0.ɵɵtext(2, "Link");
    i0.ɵɵelementEnd()();
} }
function AddAssessmentComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 72)(1, "div", 4)(2, "h3", 73);
    i0.ɵɵtext(3, "Add Assessment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 74)(5, "i", 75);
    i0.ɵɵlistener("click", function AddAssessmentComponent_ng_template_75_Template_i_click_5_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onsave()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 4)(7, "div", 42)(8, "div", 76)(9, "h4", 77);
    i0.ɵɵtext(10, "Upload");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 78);
    i0.ɵɵtext(12, "Upload resources as a Image, Video, Voice or PDF Format and proceed to assign it to your Students.");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, AddAssessmentComponent_ng_template_75_div_13_Template, 5, 0, "div", 79)(14, AddAssessmentComponent_ng_template_75_div_14_Template, 3, 0, "div", 79);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngIf", ctx_r1.pdflinks == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath == "");
} }
function AddAssessmentComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 84)(1, "div", 85)(2, "div", 86);
    i0.ɵɵelement(3, "input", 87);
    i0.ɵɵelementStart(4, "div", 88)(5, "span", 89)(6, "i", 90);
    i0.ɵɵlistener("click", function AddAssessmentComponent_div_85_Template_i_click_6_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addarray()); });
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const i_r15 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r15);
} }
export class AddAssessmentComponent {
    constructor(route, formBuilder, classService, creator, commondata, toastr, common, auth, brandservices, sanitizer, router, validationService, config, modalService, datePipe) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.classService = classService;
        this.creator = creator;
        this.commondata = commondata;
        this.toastr = toastr;
        this.common = common;
        this.auth = auth;
        this.brandservices = brandservices;
        this.sanitizer = sanitizer;
        this.router = router;
        this.validationService = validationService;
        this.config = config;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su'
            // other options are here...
        };
        this.pdflinks = [];
        this.getTag = [];
        this.tagArray = [];
        this.webhost = this.config.getimgUrl();
        this.username = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
        this.pdfpath = [];
        this.pdfpaththumb = [];
        this.getpdfpath = JSON.parse(this.auth.getSessionData('pdf_path'));
        this.getlinks = JSON.parse(this.auth.getSessionData('pdf-links'));
        this.getpdfpaththumb = this.auth.getSessionData('pdf_path_thumb');
        console.log(this.getpdfpath, 'getpdfpath');
        console.log(this.getlinks, 'getlinks');
        if (this.getpdfpath != null) {
            for (let i = 0; i < this.getpdfpath.length; i++) {
                // this.getpdfpath[i].
                this.pdfpath.push(this.getpdfpath[i]);
                this.pdflinks = [];
            }
        }
        if (this.getlinks != null) {
            for (let i = 0; i < this.getlinks.length; i++) {
                this.pdflinks.push(this.getlinks[i]);
                this.pdfpath = [];
            }
        }
        console.log(this.pdfpath, 'pdfpath');
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.assesmentForm = this.formBuilder.group({
            created: ['', Validators.required],
            resourceName: ['', Validators.required],
            grade: ['', Validators.required],
            subject: ['', Validators.required],
            description: ['', Validators.required],
            tag: ['', Validators.required],
            access: ['', Validators.required],
            repeatlink: this.formBuilder.array([this.addlink()]),
        });
        if (this.type == 'edit') {
            this.editData = JSON.parse(this.auth.getSessionData('editresources'));
            this.gradeId = this.editData.grade_id;
            this.assesmentForm.controls.created.patchValue(this.editData.created_by);
            this.assesmentForm.controls.resourceName.patchValue(this.editData.name);
            if (this.editData.grade.length >= 3) {
                this.gradeSplit = [];
                const grade = this.editData.grade.split(',');
                for (let i = 0; i < grade.length; i++) {
                    this.gradeSplit.push(grade[i]);
                }
            }
            else {
                this.gradeSplit = [this.editData.grade];
            }
            if (this.editData.subject.length >= 3) {
                this.subjectSplit = [];
                const subject = this.editData.subject.split(',');
                for (let i = 0; i < subject.length; i++) {
                    this.subjectSplit.push(subject[i]);
                }
            }
            else {
                this.subjectSplit = [this.editData.subject];
            }
            this.assesmentForm.controls.grade.patchValue(this.gradeSplit);
            this.assesmentForm.controls.subject.patchValue(this.subjectSplit);
            this.assesmentForm.controls.description.patchValue(this.editData.description);
            this.assesmentForm.controls.access.patchValue(this.editData.access);
            if (this.editData.tags.length > 1) {
                for (let i = 0; i < this.editData.tags.length; i++) {
                    this.getTag.push({ display: this.editData.tags[i], value: this.editData.tags[i] });
                }
            }
            else {
                this.getTag = [{
                        display: this.assesmentForm.controls.tag.value,
                        value: this.assesmentForm.controls.tag.value
                    }];
            }
            console.log(this.getTag, 'taggg');
            this.assesmentForm.controls.tag.patchValue(this.getTag);
            this.pdfpath = this.editData.file_path;
            this.pdflinks = this.editData.links;
            if (this.editData.profile_url != '') {
                this.imagepath = this.editData.profile_url;
            }
            this.imagepaththumb = this.editData.profile_thumb_url;
        }
        else {
            this.assesmentForm.controls.created.patchValue(this.username);
            this.assesmentForm.controls.resourceName.patchValue('');
            this.assesmentForm.controls.grade.patchValue(null);
            this.assesmentForm.controls.subject.patchValue(null);
            this.assesmentForm.controls.description.patchValue('');
            this.assesmentForm.controls.access.patchValue('');
            this.assesmentForm.controls.tag.patchValue('');
        }
    }
    ngOnInit() {
        this.gradeList();
        this.subjectList();
    }
    addlink() {
        return this.formBuilder.group({
            link: ''
        });
    }
    addarray() {
        this.repeatlink = this.assesmentForm.get('repeatlink');
        this.repeatlink.push(this.addlink());
    }
    submitlink() {
        let list;
        for (let i = 0; i < this.assesmentForm['controls'].repeatlink.value.length; i++) {
            list = {
                options: this.assesmentForm['controls'].repeatlink['controls'][i]['controls']['link'].value,
            };
            this.pdflinks.push(list.options);
        }
        console.log(this.pdflinks);
    }
    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classService.subjectList(data).subscribe((successData) => {
            this.subjectListSuccess(successData);
        }, (error) => {
            console.error(error);
        });
    }
    subjectListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
    }
    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classService.gradeList(data).subscribe((successData) => {
            this.gradeListSuccess(successData);
        }, (error) => {
            console.error(error);
        });
    }
    gradeListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
        }
    }
    tagList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.common.tagList(data).subscribe((successData) => {
            this.tagListSuccess(successData);
        }, (error) => {
            console.error(error);
        });
    }
    tagListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.tagData = successData.ResponseObject;
        }
    }
    assign(value) {
        console.log(this.assesmentForm, 'valueee');
        console.log(this.assesmentForm.valid, 'validdd');
        if (this.assesmentForm.valid) {
            this.tagArray = [];
            const tags = this.assesmentForm.controls.tag.value;
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                name: this.assesmentForm.controls.resourceName.value,
                description: this.assesmentForm.controls.description.value,
                grade: this.assesmentForm.controls.grade.value,
                subject: this.assesmentForm.controls.subject.value,
                access: this.assesmentForm.controls.access.value,
                file_path: this.pdfpath,
                tags: this.tagArray,
                profile_url: this.imagepath,
                profile_thumb_url: this.imagepaththumb,
                content_format: '1',
                content_type: '1',
                status: '1',
                answers: [],
                file_text: '',
                links: this.pdflinks,
                annotation: [],
                assign: '0',
                classdetails: [],
                editor_type: ''
            };
            console.log(data, 'dataaaaam');
            if (value != 'edit') {
                this.creator.addAssignResourse(data).subscribe((successData) => {
                    this.assignSuccess(successData);
                }, (error) => {
                    this.assignFailure(error);
                });
            }
            else if (value == 'edit') {
                console.log(value, 'valueee');
                data['content_id'] = this.editData.content_id;
                this.creator.editAssignResourse(data).subscribe((successData) => {
                    this.assignSuccess(successData);
                }, (error) => {
                    this.assignFailure(error);
                });
            }
        }
        else {
            this.validationService.validateAllFormFields(this.assesmentForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    assignSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.assignData = successData.ResponseObject;
            console.log(this.assignData, 'this.assignData');
            this.router.navigate(['/repository/content-home']);
            this.toastr.success(successData.ResponseObject);
            this.auth.removeSessionData('pdf-links');
            this.auth.removeSessionData('pdf-path');
        }
    }
    assignFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject);
    }
    draft(value) {
        console.log(this.assesmentForm.controls.tag.value, 'before');
        if (this.assesmentForm.valid) {
            this.tagArray = [];
            const tags = this.assesmentForm.controls.tag.value;
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
            console.log(this.tagArray, 'afterrr');
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                name: this.assesmentForm.controls.resourceName.value,
                description: this.assesmentForm.controls.description.value,
                grade: this.assesmentForm.controls.grade.value,
                subject: this.assesmentForm.controls.subject.value,
                access: this.assesmentForm.controls.access.value,
                file_path: this.pdfpath,
                tags: this.tagArray,
                profile_url: this.imagepath,
                profile_thumb_url: this.imagepaththumb,
                content_format: '1',
                content_type: '1',
                status: '5',
                answers: [],
                file_text: '',
                links: this.pdflinks,
                annotation: [],
                assign: '0',
                classdetails: [],
                editor_type: ''
            };
            if (value != 'edit') {
                this.creator.addDraftResourse(data).subscribe((successData) => {
                    this.draftSuccess(successData);
                }, (error) => {
                    this.draftFailure(error);
                });
            }
            else if (value == 'edit') {
                data['content_id'] = this.editData.content_id;
                this.creator.editDraftResourse(data).subscribe((successData) => {
                    this.draftSuccess(successData);
                }, (error) => {
                    this.draftFailure(error);
                });
            }
        }
        else {
            this.validationService.validateAllFormFields(this.assesmentForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    draftSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.draftData = successData.ResponseObject;
            this.router.navigate(['/repository/content-home']);
            this.toastr.success(successData.ResponseObject);
            this.auth.removeSessionData('pdf-links');
            this.auth.removeSessionData('pdf-path');
        }
    }
    draftFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject);
    }
    encodeImageFileAsURL(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const imgDetails = event.target.files[0];
            console.log(imgDetails, 'IMGDETAILS');
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
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: [{
                    image: this.recordBase64Url,
                    size: imageList.size,
                    type: imageList.type,
                    name: imageList.name
                }],
            uploadtype: 'teacher'
        };
        this.common.fileUpload(data).subscribe((successData) => {
            this.uploadSuccess(successData);
            console.log(successData, 'successData');
        }, (error) => {
            console.log(error, 'wrongFormat');
        });
    }
    uploadSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            console.log(this.imagepath, 'This image');
            this.imagepath = successData.ResponseObject.imagepath[0].original_image_url;
            this.imagepaththumb = successData.ResponseObject.imagepath[0].resized_url;
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    encodePdfFileAsURL(event) {
        const images = [];
        const imageLength = event.target.files.length;
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const pdfDetails = event.target.files[i];
            console.log(pdfDetails, 'IMGDETAILS');
            const reader = new FileReader();
            reader.onload = (event) => {
                const uploadTypeList = event.target.result.split(',');
                images.push({
                    image: uploadTypeList[1],
                    size: pdfDetails.size,
                    type: pdfDetails.type,
                    name: pdfDetails.name
                });
                const pic = pdfDetails.type.split('/');
                console.log(pic, 'Type');
                if (pic[1] == 'pdf') {
                    if (imageLength == images.length) {
                        this.onUploadKYCFinishedpdf(images);
                    }
                }
                else {
                    this.toastr.error('PDF are the required file format');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }
    onUploadKYCFinishedpdf(getUrlEdu) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: getUrlEdu,
            uploadtype: 'content'
        };
        console.log(data, 'dataaa');
        this.common.fileUpload(data).subscribe((successData) => {
            this.pdfuploadSuccess(successData);
            console.log(successData, 'successData');
        }, (error) => {
            console.log(error, 'wrongFormat');
        });
    }
    pdfuploadSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            console.log(this.pdfpath, 'This imagepath');
            this.response = successData.ResponseObject;
            console.log(this.response.imagepath, 'imagge');
            for (let i = 0; i < this.response.imagepath.length; i++) {
                this.pdfpath.push(this.response.imagepath[i].original_image_url);
            }
            console.log(this.pdfpath, 'dtfyyff');
            this.modalRef.close('Content');
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    annotation() {
        console.log(this.pdfpath, 'beee');
        this.auth.setSessionData('pdf', JSON.stringify(this.pdfpath));
        this.auth.setSessionData('links', JSON.stringify(this.pdflinks));
        this.router.navigate(['/repository/create-assessment']);
    }
    onsave() {
        this.modalRef.close();
    }
    deleteImg() {
        this.imagepath = '';
        this.clearUploadfilename();
    }
    deletePdf(id) {
        this.pdfpath.splice(id, 1);
        console.log(this.pdfpath, 'pdfpath');
        this.pdflinks = '';
    }
    deleteLink(id) {
        this.pdflinks.splice(id, 1);
        console.log(this.pdflinks, 'pdfpath');
        this.pdfpath = '';
    }
    clearUploadfilename() {
        console.log(this.myInputVariable.nativeElement.files);
        this.myInputVariable.nativeElement.value = '';
        console.log(this.myInputVariable.nativeElement.files);
    }
    showModal() {
        this.modalRef = this.modalService.open(this.Content, { size: 'md', backdrop: 'static' });
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
    static { this.ɵfac = function AddAssessmentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddAssessmentComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.ClassService), i0.ɵɵdirectiveInject(i4.CreatorService), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i7.CommonService), i0.ɵɵdirectiveInject(i8.AuthService), i0.ɵɵdirectiveInject(i9.SchoolService), i0.ɵɵdirectiveInject(i10.DomSanitizer), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i11.ValidationService), i0.ɵɵdirectiveInject(i12.ConfigurationService), i0.ɵɵdirectiveInject(i13.NgbModal), i0.ɵɵdirectiveInject(i14.DatePipe)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddAssessmentComponent, selectors: [["app-add-assessment"]], viewQuery: function AddAssessmentComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.Content = _t.first);
        } }, decls: 89, vars: 25, consts: [["addAssessment", ""], ["pdf", ""], ["hiddenfileinput", ""], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header"], [1, "col-md-6"], [1, "text-capitalize"], [1, "text-muted"], [1, "text-danger"], [1, "pdf-assign-btn", "col-md-6"], [1, "btn", "btn-primary", "pull-right", "ml-3", 3, "click"], ["src", "assets/images/pdf-icons/floppy-disk.png", "alt", "", 1, "pull-right", "ml-3", 3, "click"], [1, "btn", "btn-primary", "pull-right", 3, "click"], [1, "card-body", "tab2-card"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "col-md-12", "d-flex", "mb-4"], [1, "col-sm-12", "col-md-4", "px-0"], [1, "image-container-left"], ["src", "assets/images/ristaschool/assessment.png", "class", "w-100", "alt", "", 4, "ngIf"], ["class", "w-100", "alt", "", 3, "src", 4, "ngIf"], ["class", "fa fa-times close-button", "title", "close", 3, "click", 4, "ngIf"], [1, "profileUrl"], ["type", "file", "accept", ".png, .jpeg, .jpg", 1, "custom-upload-input", 2, "display", "none", 3, "change"], ["type", "button", "title", "upload Image", 1, "btn", "btn-light", "btn-circle", "border-rista", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-upload", "fa-2x", "mb-3"], [1, "container", "col-sm-12", "col-md-8"], [1, "col-md-4", "form-group"], ["formControlName", "created", "id", "validationCustom1", "type", "text", "placeholder", "Created", "required", "", "readonly", "", 1, "form-control"], [1, "col-md-8", "form-group"], ["formControlName", "resourceName", "id", "validationCustom12", "type", "text", "placeholder", "Resource Name", "required", "", 1, "form-control", 3, "readOnly"], ["class", "error", 4, "ngIf"], ["bindLabel", "grade_name", "bindValue", "grade_id", "formControlName", "grade", "placeholder", "Select Grade", "typeToSearchText", "", "multiple", "true", 3, "items"], ["bindLabel", "subject_name", "bindValue", "subject_id", "formControlName", "subject", "placeholder", "Select Subject", "typeToSearchText", "", "multiple", "true", 3, "items"], [1, "form-group", "col-md-4"], ["formControlName", "access", 1, "form-control"], ["value", "1"], ["value", "2"], [1, "form-group", "col-md-12"], ["name", "", "id", "", "placeholder", "Enter Description", "formControlName", "description", 2, "width", "100%", "height", "100px", "padding", "4px"], [1, "col-md-12"], ["formControlName", "tag", "theme", "bootstrap", 3, "keyup", "secondaryPlaceholder", "placeholder", "editable", "clearOnBlur", "addOnPaste", "addOnBlur"], ["class", "chip mr-1 mb-1", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mt-5"], [2, "color", "black", "font-weight", "bold"], [1, "btn", "btn-secondary", "pull-right", 3, "click"], [1, "row", "d-flex"], ["class", "form-group col-md-4", 3, "hidden", 4, "ngFor", "ngForOf"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["data-dismiss", "modal", 1, "fa", "fa-close", 2, "cursor", "pointer"], [3, "formGroup"], ["class", "modal-body", "formArrayName", "repeatlink", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["src", "assets/images/ristaschool/assessment.png", "alt", "", 1, "w-100"], ["alt", "", 1, "w-100", 3, "src"], ["title", "close", 1, "fa", "fa-times", "close-button", 3, "click"], [1, "error"], [1, "chip", "mr-1", "mb-1"], ["onclick", "this.parentElement.style.display='none'", 1, "closebtn"], [1, "form-group", "col-md-4", 3, "hidden"], [1, "delete-icon"], ["src", "assets/images/ristaschool/assessment.png", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/assessment.png", "alt", ""], ["src", "assets/images/ristaschool/linkImage.png", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/linkImage.png", "alt", ""], [1, "modal-body", "mb-5"], [1, "col-md-11", "px-3", "py-2"], [1, "col-md-1", "pull-right"], ["aria-hidden", "true", 1, "fa", "fa-close", "pull-right", 2, "cursor", "pointer", 3, "click"], [2, "min-height", "120px"], [2, "text-align", "center", "margin-top", "2rem", "font-weight", "bold"], [2, "text-align", "center"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["accept", ".pdf", "type", "file", "multiple", "", 2, "display", "none", 3, "change"], ["type", "file", "aria-describedby", "inputGroupFileAddon01", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-toggle", "modal", "data-target", "#myModal", "data-dismiss", "bulkmodal", 1, "btn", "btn-primary", "mt-3", 3, "click"], ["formArrayName", "repeatlink", 1, "modal-body"], [3, "formGroupName"], [1, "input-group"], ["type", "link", "formControlName", "link", "aria-label", "Recipient's username", "placeholder", "Add Link here", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], [1, "fa", "fa-plus", 3, "click"]], template: function AddAssessmentComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div", 4)(6, "div", 8)(7, "h5", 9);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "label", 10);
            i0.ɵɵtext(10, "All fields marked with ");
            i0.ɵɵelementStart(11, "span", 11);
            i0.ɵɵtext(12, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, " are required");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "div", 12)(15, "button", 13);
            i0.ɵɵlistener("click", function AddAssessmentComponent_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.assign(ctx.type)); });
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "img", 14);
            i0.ɵɵlistener("click", function AddAssessmentComponent_Template_img_click_17_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.draft(ctx.type)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "button", 15);
            i0.ɵɵlistener("click", function AddAssessmentComponent_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.annotation()); });
            i0.ɵɵtext(19, "Add Question");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(20, "div", 16)(21, "form", 17)(22, "div", 18)(23, "div", 19)(24, "div", 20);
            i0.ɵɵtemplate(25, AddAssessmentComponent_img_25_Template, 1, 0, "img", 21)(26, AddAssessmentComponent_img_26_Template, 1, 1, "img", 22)(27, AddAssessmentComponent_i_27_Template, 1, 0, "i", 23);
            i0.ɵɵelementStart(28, "div", 24)(29, "input", 25, 0);
            i0.ɵɵlistener("change", function AddAssessmentComponent_Template_input_change_29_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.encodeImageFileAsURL($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "button", 26);
            i0.ɵɵlistener("click", function AddAssessmentComponent_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r1); const addAssessment_r4 = i0.ɵɵreference(30); return i0.ɵɵresetView(addAssessment_r4.click()); });
            i0.ɵɵelement(32, "i", 27);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(33, "div", 28)(34, "h5");
            i0.ɵɵtext(35, "Created By");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div", 4)(37, "div", 29);
            i0.ɵɵelement(38, "input", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "div", 31);
            i0.ɵɵelement(40, "input", 32);
            i0.ɵɵtemplate(41, AddAssessmentComponent_em_41_Template, 2, 0, "em", 33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(42, "div", 4)(43, "div", 29);
            i0.ɵɵelement(44, "ng-select", 34);
            i0.ɵɵtemplate(45, AddAssessmentComponent_em_45_Template, 2, 0, "em", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "div", 29);
            i0.ɵɵelement(47, "ng-select", 35);
            i0.ɵɵtemplate(48, AddAssessmentComponent_em_48_Template, 2, 0, "em", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "div", 36)(50, "select", 37)(51, "option", 38);
            i0.ɵɵtext(52, "Public");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "option", 39);
            i0.ɵɵtext(54, "Private");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(55, AddAssessmentComponent_em_55_Template, 2, 0, "em", 33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "div", 4)(57, "div", 40);
            i0.ɵɵelement(58, "textarea", 41);
            i0.ɵɵtemplate(59, AddAssessmentComponent_em_59_Template, 2, 0, "em", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "div", 42)(61, "tag-input", 43);
            i0.ɵɵlistener("keyup", function AddAssessmentComponent_Template_tag_input_keyup_61_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.tagList()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(62, AddAssessmentComponent_div_62_Template, 4, 1, "div", 44);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(63, "div", 4)(64, "div", 45)(65, "h4", 46);
            i0.ɵɵtext(66, "Assessment Files");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "div", 45)(68, "button", 47);
            i0.ɵɵlistener("click", function AddAssessmentComponent_Template_button_click_68_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.showModal()); });
            i0.ɵɵtext(69, "Add More");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(70, "hr");
            i0.ɵɵelementStart(71, "div", 42)(72, "div", 48);
            i0.ɵɵtemplate(73, AddAssessmentComponent_div_73_Template, 4, 3, "div", 49)(74, AddAssessmentComponent_div_74_Template, 4, 3, "div", 49);
            i0.ɵɵelementEnd()()()()()()()();
            i0.ɵɵtemplate(75, AddAssessmentComponent_ng_template_75_Template, 15, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(77, "div", 50)(78, "div", 51)(79, "div", 52)(80, "div", 53)(81, "h4", 54);
            i0.ɵɵtext(82, "Add Link");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(83, "i", 55);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "form", 56);
            i0.ɵɵtemplate(85, AddAssessmentComponent_div_85_Template, 7, 1, "div", 57);
            i0.ɵɵelementStart(86, "div", 58)(87, "button", 59);
            i0.ɵɵlistener("click", function AddAssessmentComponent_Template_button_click_87_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.submitlink()); });
            i0.ɵɵtext(88, "Submit");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("", ctx.type, " Assessment");
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.type == "add" ? "Publish" : "Update");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("formGroup", ctx.assesmentForm);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.imagepath);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.imagepath);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.imagepath);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("readOnly", ctx.type == "edit");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.assesmentForm.get("resourceName").valid && (ctx.assesmentForm.get("resourceName").dirty || ctx.assesmentForm.get("resourceName").touched));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("items", ctx.gradeData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.assesmentForm.get("grade").valid && (ctx.assesmentForm.get("grade").dirty || ctx.assesmentForm.get("grade").touched));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("items", ctx.subjectData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.assesmentForm.get("subject").valid && (ctx.assesmentForm.get("subject").dirty || ctx.assesmentForm.get("subject").touched));
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", !ctx.assesmentForm.get("access").valid && (ctx.assesmentForm.get("access").dirty || ctx.assesmentForm.get("access").touched));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.assesmentForm.get("description").valid && (ctx.assesmentForm.get("description").dirty || ctx.assesmentForm.get("description").touched));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("secondaryPlaceholder", "Enter tags")("placeholder", "Add tags")("editable", true)("clearOnBlur", true)("addOnPaste", true)("addOnBlur", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.tagData);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngForOf", ctx.pdfpath);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.pdflinks);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("formGroup", ctx.assesmentForm);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.assesmentForm.get("repeatlink")["controls"]);
        } }, dependencies: [i14.NgForOf, i14.NgIf, i15.NgSelectComponent, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i16.TagInputComponent, i2.FormGroupDirective, i2.FormControlName, i2.FormGroupName, i2.FormArrayName] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddAssessmentComponent, [{
        type: Component,
        args: [{ selector: 'app-add-assessment', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h5 class=\"text-capitalize\">{{type}} Assessment</h5>\n                            <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                        </div>\n                        <div class=\"pdf-assign-btn col-md-6\">\n                            <button class=\"btn btn-primary pull-right ml-3\" (click)=\"assign(type)\">{{type == 'add' ? 'Publish' : 'Update'}}</button>\n                            <img (click)=\"draft(type)\" class=\"pull-right ml-3\" src=\"assets/images/pdf-icons/floppy-disk.png\" alt=\"\">\n                            <button class=\"btn btn-primary pull-right\" (click)=\"annotation()\">Add Question</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"assesmentForm\" class=\"needs-validation user-add\">\n                        <div class=\"col-md-12 d-flex mb-4\">\n                            <div class=\"col-sm-12 col-md-4 px-0\">\n                                <div class=\"image-container-left\">\n                                    <img *ngIf=\"!imagepath\" src=\"assets/images/ristaschool/assessment.png\" class=\"w-100\" alt=\"\">\n                                    <img  *ngIf=\"imagepath\" class=\"w-100\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + imagepath)\" alt=\"\">\n                                    <i *ngIf=\"imagepath\" class=\"fa fa-times close-button\" title=\"close\" (click)=\"deleteImg()\" ></i>\n                                    <div class=\"profileUrl\">\n                                        <input style=\"display: none\" type=\"file\" class=\"custom-upload-input\" (change)=\"encodeImageFileAsURL($event)\" #addAssessment accept=\".png, .jpeg, .jpg\">\n                                        <button type=\"button\" class=\"btn btn-light btn-circle border-rista\" title=\"upload Image\" (click)=\"addAssessment.click()\"> <i class=\"fa fa-upload fa-2x mb-3\" aria-hidden=\"true\"></i> </button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"container col-sm-12 col-md-8\">\n                                <h5>Created By</h5>\n                                <div class=\"row\">\n                                    <div class=\"col-md-4 form-group\">\n                                        <input class=\"form-control\" formControlName=\"created\" id=\"validationCustom1\"\n                                               type=\"text\" placeholder=\"Created\" required=\"\" readonly>\n                                    </div>\n                                    <div class=\"col-md-8 form-group\">\n                                        <input class=\"form-control\" formControlName=\"resourceName\" id=\"validationCustom12\"\n                                               type=\"text\" placeholder=\"Resource Name\" required=\"\" [readOnly]=\"type == 'edit'\">\n                                        <em class=\"error\" *ngIf=\"!assesmentForm.get('resourceName').valid && (assesmentForm.get('resourceName').dirty || assesmentForm.get('resourceName').touched)\">resource Name is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div  class=\"col-md-4 form-group\">\n                                        <ng-select [items]=\"gradeData\"\n                                                   bindLabel=\"grade_name\"\n                                                   bindValue=\"grade_id\"\n                                                   formControlName=\"grade\"\n                                                   placeholder=\"Select Grade\"\n                                                   typeToSearchText=\"\"\n                                                   multiple=\"true\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\" *ngIf=\"!assesmentForm.get('grade').valid && (assesmentForm.get('grade').dirty || assesmentForm.get('grade').touched)\">Grade is required</em>\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                        <ng-select [items]=\"subjectData\"\n                                                   bindLabel=\"subject_name\"\n                                                   bindValue=\"subject_id\"\n                                                   formControlName=\"subject\"\n                                                   placeholder=\"Select Subject\"\n                                                   typeToSearchText=\"\"\n                                                   multiple=\"true\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\" *ngIf=\"!assesmentForm.get('subject').valid && (assesmentForm.get('subject').dirty || assesmentForm.get('subject').touched)\">Subject is required</em>\n                                    </div>\n                                    <div class=\"form-group col-md-4\">\n                                        <select class=\"form-control\" formControlName=\"access\">\n                                            <option value=\"1\">Public</option>\n                                            <option value=\"2\">Private</option>\n                                        </select>\n                                        <em class=\"error\" *ngIf=\"!assesmentForm.get('access').valid && (assesmentForm.get('access').dirty || assesmentForm.get('access').touched)\">access is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"form-group col-md-12\">\n                                        <textarea name=\"\" id=\"\" placeholder=\"Enter Description\" formControlName=\"description\" style=\"width: 100%; height: 100px; padding: 4px\"></textarea>\n                                        <em class=\"error\" *ngIf=\"!assesmentForm.get('description').valid && (assesmentForm.get('description').dirty || assesmentForm.get('description').touched)\">Description is required</em>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <tag-input\n                                                formControlName=\"tag\"\n                                                [secondaryPlaceholder]=\"'Enter tags'\"\n                                                [placeholder]=\"'Add tags'\"\n                                                [editable]='true'\n                                                [clearOnBlur]=\"true\"\n                                                [addOnPaste]=\"true\"\n                                                [addOnBlur]=\"true\"\n                                                theme='bootstrap'\n                                                (keyup)=\"tagList()\"\n                                        ></tag-input>\n                                    </div>\n                                    <div *ngFor=\"let list of tagData\" class=\"chip mr-1 mb-1\">{{list.tag_name}}<span class=\"closebtn\" onclick=\"this.parentElement.style.display='none'\">&times;</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6 mt-5\">\n                                <h4 style=\"color: black; font-weight: bold\">Assessment Files</h4>\n                            </div>\n                            <div class=\"col-md-6 mt-5\">\n                                <button (click)=\"showModal()\" class=\"btn btn-secondary pull-right\">Add More</button>\n                            </div>\n                        </div>\n                        <hr>\n                        <div class=\"col-md-12\">\n                            <div class=\"row d-flex\">\n                                <div class=\"form-group col-md-4\" *ngFor=\"let file of pdfpath; let i= index\" [hidden]=\"pdfpath == ''\">\n                                    <div class=\"delete-icon\">\n                                        <img *ngIf=\"pdfpath != ''\" src=\"assets/images/ristaschool/assessment.png\" alt=\"\">\n                                        <i *ngIf=\"pdfpath != ''\" class=\"fa fa-times close-button\" title=\"close\" (click)=\"deletePdf(i)\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-md-4\" *ngFor=\"let file of pdflinks; let i= index\" [hidden]=\"pdflinks == ''\">\n                                    <div class=\"delete-icon\">\n                                        <img *ngIf=\"pdflinks != ''\" src=\"assets/images/ristaschool/linkImage.png\" alt=\"\">\n                                        <i *ngIf=\"pdflinks != ''\" class=\"fa fa-times close-button\" title=\"close\" (click)=\"deleteLink(i)\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #pdf let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body mb-5\">\n        <div class=\"row\">\n            <h3 class=\"col-md-11 px-3 py-2\">Add Assessment</h3>\n            <div class=\"col-md-1 pull-right\">\n                <i class=\"fa fa-close pull-right\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"onsave()\"></i>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div style=\"min-height: 120px\">\n                    <h4 style=\"text-align: center;margin-top: 2rem; font-weight: bold\">Upload</h4>\n                    <p style=\"text-align: center\">Upload resources as a Image, Video, Voice or PDF Format and proceed to assign it to your Students.</p>\n                </div>\n                <div *ngIf=\"pdflinks == ''\" class=\"d-flex justify-content-center\">\n                    <input accept=\".pdf\" style=\"display: none\" type=\"file\" multiple (change)=\"encodePdfFileAsURL($event)\" #hiddenfileinput>\n                    <button class=\"btn btn-primary\" type=\"file\" aria-describedby=\"inputGroupFileAddon01\"\n                            (click)=\"hiddenfileinput.click()\">Upload PDF</button>\n                </div>\n                <div *ngIf=\"pdfpath == ''\" class=\"d-flex justify-content-center\">\n                    <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" data-dismiss=\"bulkmodal\"  (click)=\"onsave()\" class=\"btn btn-primary mt-3\">Link</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--    </div>-->\n    <!-- Container-fluid Ends-->\n</ng-template>\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Link</h4>\n                <i class=\"fa fa-close\" style=\"cursor: pointer\" data-dismiss=\"modal\"></i>\n            </div>\n            <form [formGroup]=\"assesmentForm\">\n                <div class=\"modal-body\" formArrayName=\"repeatlink\" *ngFor=\"let list of assesmentForm.get('repeatlink')['controls']; let i=index\">\n                    <div [formGroupName]=\"i\">\n                        <div class=\"input-group\">\n                            <input type=\"link\" formControlName=\"link\" class=\"form-control\" aria-label=\"Recipient's username\" placeholder=\"Add Link here\" aria-describedby=\"basic-addon2\">\n                            <div class=\"input-group-append\">\n                                <span class=\"input-group-text\" id=\"basic-addon2\">\n                                    <i  class=\"fa fa-plus\"  (click)=\"addarray()\"></i>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"submitlink()\">Submit</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n\n\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.ClassService }, { type: i4.CreatorService }, { type: i5.CommonDataService }, { type: i6.ToastrService }, { type: i7.CommonService }, { type: i8.AuthService }, { type: i9.SchoolService }, { type: i10.DomSanitizer }, { type: i1.Router }, { type: i11.ValidationService }, { type: i12.ConfigurationService }, { type: i13.NgbModal }, { type: i14.DatePipe }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }], Content: [{
            type: ViewChild,
            args: ['pdf']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddAssessmentComponent, { className: "AddAssessmentComponent" }); })();
//# sourceMappingURL=add-assessment.component.js.map