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
import * as i17 from "../../auth/confirm-content-assign/confirm-content-assign.component";
const _c0 = ["myInput"];
const _c1 = ["pdf"];
const _c2 = ["assignContentToClass"];
const _c3 = ["assignTemplate"];
function AddAssignmentComponent_img_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 62);
} }
function AddAssignmentComponent_img_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 63);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.webhost + "/" + ctx_r1.imagepath), i0.ɵɵsanitizeUrl);
} }
function AddAssignmentComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 64);
    i0.ɵɵlistener("click", function AddAssignmentComponent_i_27_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteImg()); });
    i0.ɵɵelementEnd();
} }
function AddAssignmentComponent_em_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 65);
    i0.ɵɵtext(1, "resource Name is required");
    i0.ɵɵelementEnd();
} }
function AddAssignmentComponent_em_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 65);
    i0.ɵɵtext(1, "Grade is required");
    i0.ɵɵelementEnd();
} }
function AddAssignmentComponent_em_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 65);
    i0.ɵɵtext(1, "Subject is required");
    i0.ɵɵelementEnd();
} }
function AddAssignmentComponent_em_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 65);
    i0.ɵɵtext(1, "access is required");
    i0.ɵɵelementEnd();
} }
function AddAssignmentComponent_em_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 65);
    i0.ɵɵtext(1, "Description is required");
    i0.ɵɵelementEnd();
} }
function AddAssignmentComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 67);
    i0.ɵɵtext(3, "\u00D7");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r5.tag_name);
} }
function AddAssignmentComponent_div_73_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 71);
} }
function AddAssignmentComponent_div_73_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 64);
    i0.ɵɵlistener("click", function AddAssignmentComponent_div_73_i_3_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r6); const i_r7 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deletePdf(i_r7)); });
    i0.ɵɵelementEnd();
} }
function AddAssignmentComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 68)(1, "div", 69);
    i0.ɵɵtemplate(2, AddAssignmentComponent_div_73_img_2_Template, 1, 0, "img", 70)(3, AddAssignmentComponent_div_73_i_3_Template, 1, 0, "i", 25);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hidden", ctx_r1.pdfpath == "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath != "");
} }
function AddAssignmentComponent_div_74_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 73);
} }
function AddAssignmentComponent_div_74_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 64);
    i0.ɵɵlistener("click", function AddAssignmentComponent_div_74_i_3_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r8); const i_r9 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteLink(i_r9)); });
    i0.ɵɵelementEnd();
} }
function AddAssignmentComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 68)(1, "div", 69);
    i0.ɵɵtemplate(2, AddAssignmentComponent_div_74_img_2_Template, 1, 0, "img", 72)(3, AddAssignmentComponent_div_74_i_3_Template, 1, 0, "i", 25);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("hidden", ctx_r1.pdflinks == "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.pdflinks != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdflinks != "");
} }
function AddAssignmentComponent_ng_template_75_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 82)(1, "input", 83, 4);
    i0.ɵɵlistener("change", function AddAssignmentComponent_ng_template_75_div_13_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.encodePdfFileAsURL($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 84);
    i0.ɵɵlistener("click", function AddAssignmentComponent_ng_template_75_div_13_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r11); const hiddenfileinput_r12 = i0.ɵɵreference(2); return i0.ɵɵresetView(hiddenfileinput_r12.click()); });
    i0.ɵɵtext(4, "Upload PDF");
    i0.ɵɵelementEnd()();
} }
function AddAssignmentComponent_ng_template_75_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 82)(1, "button", 85);
    i0.ɵɵlistener("click", function AddAssignmentComponent_ng_template_75_div_14_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onsave()); });
    i0.ɵɵtext(2, "Link");
    i0.ɵɵelementEnd()();
} }
function AddAssignmentComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74)(1, "div", 6)(2, "h3", 75);
    i0.ɵɵtext(3, "Add Assignment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 76)(5, "i", 77);
    i0.ɵɵlistener("click", function AddAssignmentComponent_ng_template_75_Template_i_click_5_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onsave()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 6)(7, "div", 44)(8, "div", 78)(9, "h4", 79);
    i0.ɵɵtext(10, "Upload");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 80);
    i0.ɵɵtext(12, "Upload resources as a Image, Video, Voice or PDF Format and proceed to assign it to your Students.");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, AddAssignmentComponent_ng_template_75_div_13_Template, 5, 0, "div", 81)(14, AddAssignmentComponent_ng_template_75_div_14_Template, 3, 0, "div", 81);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngIf", ctx_r1.pdflinks == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfpath == "");
} }
function AddAssignmentComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 86)(1, "div", 87)(2, "div", 88);
    i0.ɵɵelement(3, "input", 89);
    i0.ɵɵelementStart(4, "div", 90)(5, "span", 91)(6, "i", 92);
    i0.ɵɵlistener("click", function AddAssignmentComponent_div_85_Template_i_click_6_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addarray()); });
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const i_r15 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r15);
} }
function AddAssignmentComponent_ng_template_89_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55)(1, "h5", 93);
    i0.ɵɵtext(2, "Assign Content");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 94)(4, "div", 6)(5, "div", 44)(6, "h5")(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, "?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 60)(11, "button", 95);
    i0.ɵɵlistener("click", function AddAssignmentComponent_ng_template_89_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.dontAssign()); });
    i0.ɵɵtext(12, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 96);
    i0.ɵɵlistener("click", function AddAssignmentComponent_ng_template_89_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assignContent()); });
    i0.ɵɵtext(14, "Yes");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Do you want to assign this content to the Class ", ctx_r1.contentCreatedForm != "class" ? "or Content Folder" : "", "");
} }
function AddAssignmentComponent_ng_template_91_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-confirm-content-assign", 97);
    i0.ɵɵlistener("closePopUp", function AddAssignmentComponent_ng_template_91_Template_app_confirm_content_assign_closePopUp_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeAssignPopUp()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("classData", ctx_r1.classDetails)("contentDetails", ctx_r1.assignData);
} }
export class AddAssignmentComponent {
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
            // other options are here...
        };
        this.pdflinks = [];
        this.getTag = [];
        this.tagArray = [];
        this.classDetails = [];
        this.contentCreatedForm = '';
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
        // if (this.getpdfpath.length)
        // const pdf = this.getpdfpath.split(',');
        console.log(this.pdfpath, 'pdfpath');
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.assignmentForm = this.formBuilder.group({
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
            this.assignmentForm.controls.created.patchValue(this.editData.created_by);
            this.assignmentForm.controls.resourceName.patchValue(this.editData.name);
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
            this.assignmentForm.controls.grade.patchValue(this.gradeSplit);
            this.assignmentForm.controls.subject.patchValue(this.subjectSplit);
            this.assignmentForm.controls.description.patchValue(this.editData.description);
            this.assignmentForm.controls.access.patchValue(this.editData.access);
            if (this.editData.tags.length > 1) {
                // const tag = this.editData.tags.split(',');
                for (let i = 0; i < this.editData.tags.length; i++) {
                    // this.getTag[j].display.tag[i];
                    // this.getTag[j].value.tag[i];
                    this.getTag.push({ display: this.editData.tags[i], value: this.editData.tags[i] });
                }
            }
            else {
                this.getTag = [{
                        display: this.assignmentForm.controls.tag.value,
                        value: this.assignmentForm.controls.tag.value
                    }];
            }
            console.log(this.getTag, 'taggg');
            this.assignmentForm.controls.tag.patchValue(this.getTag);
            this.pdfpath = this.editData.file_path;
            this.pdflinks = this.editData.links;
            if (this.editData.profile_url != '') {
                this.imagepath = this.editData.profile_url;
            }
            this.imagepaththumb = this.editData.profile_thumb_url;
        }
        else {
            this.assignmentForm.controls.created.patchValue(this.username);
            this.assignmentForm.controls.resourceName.patchValue('');
            this.assignmentForm.controls.grade.patchValue(null);
            this.assignmentForm.controls.subject.patchValue(null);
            this.assignmentForm.controls.description.patchValue('');
            this.assignmentForm.controls.access.patchValue('');
            this.assignmentForm.controls.tag.patchValue('');
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
        this.repeatlink = this.assignmentForm.get('repeatlink');
        this.repeatlink.push(this.addlink());
    }
    submitlink() {
        let list;
        for (let i = 0; i < this.assignmentForm['controls'].repeatlink.value.length; i++) {
            list = {
                options: this.assignmentForm['controls'].repeatlink['controls'][i]['controls']['link'].value,
            };
            this.pdflinks.push(list.options);
        }
        console.log(this.pdflinks);
    }
    createlink() {
        return this.formBuilder.group({
            addlink: ''
        });
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
            this.subjectListFailure(error);
        });
    }
    subjectListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
    }
    subjectListFailure(error) {
        console.log(error, 'error');
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
            this.gradeListFailure(error);
        });
    }
    gradeListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
        }
    }
    gradeListFailure(error) {
        console.log(error, 'error');
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
            this.tagListFailure(error);
        });
    }
    tagListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.tagData = successData.ResponseObject;
        }
    }
    tagListFailure(error) {
        console.log(error, 'error');
    }
    assign(value) {
        console.log(this.assignmentForm, 'valueee');
        console.log(this.assignmentForm.valid, 'validdd');
        if (this.assignmentForm.valid) {
            this.tagArray = [];
            const tags = this.assignmentForm.controls.tag.value;
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                name: this.assignmentForm.controls.resourceName.value,
                description: this.assignmentForm.controls.description.value,
                grade: this.assignmentForm.controls.grade.value,
                subject: this.assignmentForm.controls.subject.value,
                access: this.assignmentForm.controls.access.value,
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
            this.validationService.validateAllFormFields(this.assignmentForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    assignSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.assignData = successData.ResponseObject;
            console.log(this.assignData, 'this.assignData');
            // this.router.navigate(['/repository/content-home']);
            this.toastr.success(successData.ResponseObject);
            this.auth.removeSessionData('pdf-links');
            this.auth.removeSessionData('pdf-path');
            this.modalRef = this.modalService.open(this.assignContentToClass, { size: 'md', backdrop: 'static' });
        }
    }
    assignFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject);
    }
    assignContent() {
        this.modalRef.close();
        this.classDetails = JSON.parse(this.auth.getSessionData('card-data'));
        this.modalRef = this.modalService.open(this.assignTemplate, { size: 'xl', backdrop: 'static' });
    }
    draft(value) {
        console.log(this.assignmentForm.controls.tag.value, 'before');
        if (this.assignmentForm.valid) {
            this.tagArray = [];
            const tags = this.assignmentForm.controls.tag.value;
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
            console.log(this.tagArray, 'afterrr');
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                name: this.assignmentForm.controls.resourceName.value,
                description: this.assignmentForm.controls.description.value,
                grade: this.assignmentForm.controls.grade.value,
                subject: this.assignmentForm.controls.subject.value,
                access: this.assignmentForm.controls.access.value,
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
            this.validationService.validateAllFormFields(this.assignmentForm);
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
            this.uploadFailure(error);
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
        let images = [];
        let imageLength = event.target.files.length;
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const pdfDetails = event.target.files[i];
            console.log(pdfDetails, 'IMGDETAILS');
            const reader = new FileReader();
            reader.onload = (event) => {
                let uploadTypeList = event.target.result.split(',');
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
            this.pdfuploadFailure(error);
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
    pdfuploadFailure(error) {
        console.log(error, 'error');
    }
    uploadFailure(error) {
        console.log(error, 'error');
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
    }
    deleteLink(id) {
        this.pdflinks.splice(id, 1);
        console.log(this.pdflinks, 'pdfpath');
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
    closeAssignPopUp() {
        this.auth.removeSessionData('assignedForm');
        this.modalRef.close();
    }
    dontAssign() {
        this.modalRef.close();
        if (this.auth.getSessionData('assignedForm') == 'class') {
            this.auth.removeSessionData('content_assign');
            this.router.navigate(['class/topicsAndCurriculum/1']);
        }
        else if (this.auth.getSessionData('assignedForm') == 'content-Folder') {
            this.router.navigate(['class/view-assign/2']);
        }
        else if (this.auth.getSessionData('assignedForm') == 'classRoom') {
            this.router.navigate(['classroom/list-classroom']);
        }
        else {
            this.router.navigate(['repository/content-home']);
        }
        this.auth.setSessionData('resourceAccess', false);
        this.auth.removeSessionData('assignedForm');
    }
    static { this.ɵfac = function AddAssignmentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddAssignmentComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.ClassService), i0.ɵɵdirectiveInject(i4.CreatorService), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i7.CommonService), i0.ɵɵdirectiveInject(i8.AuthService), i0.ɵɵdirectiveInject(i9.SchoolService), i0.ɵɵdirectiveInject(i10.DomSanitizer), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i11.ValidationService), i0.ɵɵdirectiveInject(i12.ConfigurationService), i0.ɵɵdirectiveInject(i13.NgbModal), i0.ɵɵdirectiveInject(i14.DatePipe)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddAssignmentComponent, selectors: [["app-add-assignment"]], viewQuery: function AddAssignmentComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.Content = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignContentToClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignTemplate = _t.first);
        } }, decls: 93, vars: 25, consts: [["addAssignment", ""], ["pdf", ""], ["assignContentToClass", ""], ["assignTemplate", ""], ["hiddenfileinput", ""], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header"], [1, "col-md-6"], [1, "text-capitalize"], [1, "text-muted"], [1, "text-danger"], [1, "pdf-assign-btn", "col-md-6"], [1, "btn", "btn-primary", "pull-right", "ml-3", 3, "click"], ["src", "assets/images/pdf-icons/floppy-disk.png", "alt", "", 1, "pull-right", "ml-3", 3, "click"], [1, "btn", "btn-primary", "pull-right", "ml-3"], [1, "card-body", "tab2-card"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "container", "col-md-12", "d-flex", "mb-4"], [1, "col-sm-12", "col-md-4", "px-0"], [1, "image-container-left"], ["src", "assets/images/ristaschool/assignment.png", "class", "w-100", "alt", "", 4, "ngIf"], ["alt", "", 3, "src", 4, "ngIf"], ["class", "fa fa-times close-button", "title", "close", 3, "click", 4, "ngIf"], [1, "profileUrl"], ["type", "file", "accept", ".png, .jpeg, .jpg", 1, "custom-upload-input", 2, "display", "none", 3, "change"], ["type", "button", "title", "upload Image", 1, "btn", "btn-light", "btn-circle", "border-rista", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-upload", "fa-2x", "mb-3"], [1, "container", "col-sm-12", "col-md-8"], [1, "col-md-4", "form-group"], ["formControlName", "created", "id", "validationCustom1", "type", "text", "placeholder", "Created", "required", "", "readonly", "", 1, "form-control"], [1, "col-md-8", "form-group"], ["formControlName", "resourceName", "id", "validationCustom12", "type", "text", "placeholder", "Resource Name", "required", "", 1, "form-control", 3, "readOnly"], ["class", "error", 4, "ngIf"], ["bindLabel", "grade_name", "bindValue", "grade_id", "formControlName", "grade", "placeholder", "Select Grade", "typeToSearchText", "", "multiple", "true", 3, "items"], ["bindLabel", "subject_name", "bindValue", "subject_id", "formControlName", "subject", "placeholder", "Select Subject", "typeToSearchText", "", "multiple", "true", 3, "items"], [1, "form-group", "col-md-4"], ["formControlName", "access", 1, "form-control"], ["value", "1"], ["value", "2"], [1, "form-group", "col-md-12"], ["name", "", "id", "", "placeholder", "Enter Description", "formControlName", "description", 2, "width", "100%", "height", "100px", "padding", "4px"], [1, "col-md-12"], ["formControlName", "tag", "theme", "bootstrap", 3, "keyup", "secondaryPlaceholder", "placeholder", "editable", "clearOnBlur", "addOnPaste", "addOnBlur"], ["class", "chip mr-1 mb-1", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mt-5"], [2, "color", "black", "font-weight", "bold"], [1, "btn", "btn-secondary", "pull-right", 3, "click"], [1, "row", "d-flex"], ["class", "form-group col-md-3", 3, "hidden", 4, "ngFor", "ngForOf"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["data-dismiss", "modal", 1, "fa", "fa-close", 2, "cursor", "pointer"], [3, "formGroup"], ["class", "modal-body", "formArrayName", "repeatlink", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["src", "assets/images/ristaschool/assignment.png", "alt", "", 1, "w-100"], ["alt", "", 3, "src"], ["title", "close", 1, "fa", "fa-times", "close-button", 3, "click"], [1, "error"], [1, "chip", "mr-1", "mb-1"], ["onclick", "this.parentElement.style.display='none'", 1, "closebtn"], [1, "form-group", "col-md-3", 3, "hidden"], [1, "delete-icon"], ["src", "assets/images/ristaschool/pdfimage.png", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/pdfimage.png", "alt", ""], ["src", "assets/images/ristaschool/link.png", "alt", "", 4, "ngIf"], ["src", "assets/images/ristaschool/link.png", "alt", ""], [1, "modal-body", "mb-5"], [1, "col-md-11", "px-3", "py-2"], [1, "col-md-1", "pull-right"], ["aria-hidden", "true", 1, "fa", "fa-close", "pull-right", 2, "cursor", "pointer", 3, "click"], [2, "min-height", "120px"], [2, "text-align", "center", "margin-top", "2rem", "font-weight", "bold"], [2, "text-align", "center"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["accept", ".pdf", "type", "file", "multiple", "", 2, "display", "none", 3, "change"], ["type", "file", "aria-describedby", "inputGroupFileAddon01", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-toggle", "modal", "data-target", "#myModal", "data-dismiss", "bulkmodal", 1, "btn", "btn-primary", "mt-3", 3, "click"], ["formArrayName", "repeatlink", 1, "modal-body"], [3, "formGroupName"], [1, "input-group"], ["type", "link", "formControlName", "link", "aria-label", "Recipient's username", "placeholder", "Add Link here", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], [1, "fa", "fa-plus", 3, "click"], [1, "contenttext", "text-center", "mb-0"], [1, "modal-body"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [3, "closePopUp", "classData", "contentDetails"]], template: function AddAssignmentComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "div", 6)(6, "div", 10)(7, "h5", 11);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "label", 12);
            i0.ɵɵtext(10, "All fields marked with ");
            i0.ɵɵelementStart(11, "span", 13);
            i0.ɵɵtext(12, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, " are required");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "div", 14)(15, "button", 15);
            i0.ɵɵlistener("click", function AddAssignmentComponent_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.assign(ctx.type)); });
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "img", 16);
            i0.ɵɵlistener("click", function AddAssignmentComponent_Template_img_click_17_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.draft(ctx.type)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "button", 17);
            i0.ɵɵtext(19, "Add Question");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(20, "div", 18)(21, "form", 19)(22, "div", 20)(23, "div", 21)(24, "div", 22);
            i0.ɵɵtemplate(25, AddAssignmentComponent_img_25_Template, 1, 0, "img", 23)(26, AddAssignmentComponent_img_26_Template, 1, 1, "img", 24)(27, AddAssignmentComponent_i_27_Template, 1, 0, "i", 25);
            i0.ɵɵelementStart(28, "div", 26)(29, "input", 27, 0);
            i0.ɵɵlistener("change", function AddAssignmentComponent_Template_input_change_29_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.encodeImageFileAsURL($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "button", 28);
            i0.ɵɵlistener("click", function AddAssignmentComponent_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r1); const addAssignment_r4 = i0.ɵɵreference(30); return i0.ɵɵresetView(addAssignment_r4.click()); });
            i0.ɵɵelement(32, "i", 29);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(33, "div", 30)(34, "h5");
            i0.ɵɵtext(35, "Created By");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div", 6)(37, "div", 31);
            i0.ɵɵelement(38, "input", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "div", 33);
            i0.ɵɵelement(40, "input", 34);
            i0.ɵɵtemplate(41, AddAssignmentComponent_em_41_Template, 2, 0, "em", 35);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(42, "div", 6)(43, "div", 31);
            i0.ɵɵelement(44, "ng-select", 36);
            i0.ɵɵtemplate(45, AddAssignmentComponent_em_45_Template, 2, 0, "em", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "div", 31);
            i0.ɵɵelement(47, "ng-select", 37);
            i0.ɵɵtemplate(48, AddAssignmentComponent_em_48_Template, 2, 0, "em", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "div", 38)(50, "select", 39)(51, "option", 40);
            i0.ɵɵtext(52, "Public");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "option", 41);
            i0.ɵɵtext(54, "Private");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(55, AddAssignmentComponent_em_55_Template, 2, 0, "em", 35);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "div", 6)(57, "div", 42);
            i0.ɵɵelement(58, "textarea", 43);
            i0.ɵɵtemplate(59, AddAssignmentComponent_em_59_Template, 2, 0, "em", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "div", 44)(61, "tag-input", 45);
            i0.ɵɵlistener("keyup", function AddAssignmentComponent_Template_tag_input_keyup_61_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.tagList()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(62, AddAssignmentComponent_div_62_Template, 4, 1, "div", 46);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(63, "div", 6)(64, "div", 47)(65, "h4", 48);
            i0.ɵɵtext(66, "Assignment Files");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "div", 47)(68, "button", 49);
            i0.ɵɵlistener("click", function AddAssignmentComponent_Template_button_click_68_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.showModal()); });
            i0.ɵɵtext(69, "Add More");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(70, "hr");
            i0.ɵɵelementStart(71, "div", 44)(72, "div", 50);
            i0.ɵɵtemplate(73, AddAssignmentComponent_div_73_Template, 4, 3, "div", 51)(74, AddAssignmentComponent_div_74_Template, 4, 3, "div", 51);
            i0.ɵɵelementEnd()()()()()()()();
            i0.ɵɵtemplate(75, AddAssignmentComponent_ng_template_75_Template, 15, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(77, "div", 52)(78, "div", 53)(79, "div", 54)(80, "div", 55)(81, "h4", 56);
            i0.ɵɵtext(82, "Add Link");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(83, "i", 57);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "form", 58);
            i0.ɵɵtemplate(85, AddAssignmentComponent_div_85_Template, 7, 1, "div", 59);
            i0.ɵɵelementStart(86, "div", 60)(87, "button", 61);
            i0.ɵɵlistener("click", function AddAssignmentComponent_Template_button_click_87_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.submitlink()); });
            i0.ɵɵtext(88, "Submit");
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵtemplate(89, AddAssignmentComponent_ng_template_89_Template, 15, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(91, AddAssignmentComponent_ng_template_91_Template, 1, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("", ctx.type, " Assignment");
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.type == "add" ? "Publish" : "Update");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("formGroup", ctx.assignmentForm);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.imagepath);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.imagepath);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.imagepath);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("readOnly", ctx.type == "edit");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.assignmentForm.get("resourceName").valid && (ctx.assignmentForm.get("resourceName").dirty || ctx.assignmentForm.get("resourceName").touched));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("items", ctx.gradeData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.assignmentForm.get("grade").valid && (ctx.assignmentForm.get("grade").dirty || ctx.assignmentForm.get("grade").touched));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("items", ctx.subjectData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.assignmentForm.get("subject").valid && (ctx.assignmentForm.get("subject").dirty || ctx.assignmentForm.get("subject").touched));
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", !ctx.assignmentForm.get("access").valid && (ctx.assignmentForm.get("access").dirty || ctx.assignmentForm.get("access").touched));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.assignmentForm.get("description").valid && (ctx.assignmentForm.get("description").dirty || ctx.assignmentForm.get("description").touched));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("secondaryPlaceholder", "Enter tags")("placeholder", "Add tags")("editable", true)("clearOnBlur", true)("addOnPaste", true)("addOnBlur", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.tagData);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngForOf", ctx.pdfpath);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.pdflinks);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("formGroup", ctx.assignmentForm);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.assignmentForm.get("repeatlink")["controls"]);
        } }, dependencies: [i14.NgForOf, i14.NgIf, i15.NgSelectComponent, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i16.TagInputComponent, i2.FormGroupDirective, i2.FormControlName, i2.FormGroupName, i2.FormArrayName, i17.ConfirmContentAssignComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddAssignmentComponent, [{
        type: Component,
        args: [{ selector: 'app-add-assignment', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h5 class=\"text-capitalize\">{{type}} Assignment</h5>\n                            <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                        </div>\n                        <div class=\"pdf-assign-btn col-md-6\">\n                            <button class=\"btn btn-primary pull-right ml-3\" (click)=\"assign(type)\">{{type == 'add' ? 'Publish' : 'Update'}}</button>\n                            <img (click)=\"draft(type)\" class=\"pull-right ml-3\" src=\"assets/images/pdf-icons/floppy-disk.png\" alt=\"\">\n                            <button class=\"btn btn-primary pull-right ml-3\">Add Question</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-body tab2-card\">\n                    <form [formGroup]=\"assignmentForm\" class=\"needs-validation user-add\">\n                        <div class=\"container col-md-12 d-flex mb-4\">\n                            <div class=\"col-sm-12 col-md-4 px-0\">\n                                <div class=\"image-container-left\">\n                                    <img *ngIf=\"!imagepath\" src=\"assets/images/ristaschool/assignment.png\" class=\"w-100\" alt=\"\">\n                                    <img  *ngIf=\"imagepath\"  [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + imagepath)\" alt=\"\">\n                                    <i *ngIf=\"imagepath\" class=\"fa fa-times close-button\" title=\"close\" (click)=\"deleteImg()\"></i>\n                                    <div class=\"profileUrl\">\n                                        <input style=\"display: none\" type=\"file\" class=\"custom-upload-input\" (change)=\"encodeImageFileAsURL($event)\" #addAssignment accept=\".png, .jpeg, .jpg\">\n                                        <button type=\"button\" class=\"btn btn-light btn-circle border-rista\" title=\"upload Image\" (click)=\"addAssignment.click()\"> <i class=\"fa fa-upload fa-2x mb-3\" aria-hidden=\"true\"></i> </button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"container col-sm-12 col-md-8\">\n                                <h5>Created By</h5>\n                                <div class=\"row\">\n                                    <div class=\"col-md-4 form-group\">\n                                        <input class=\"form-control\" formControlName=\"created\" id=\"validationCustom1\"\n                                               type=\"text\" placeholder=\"Created\" required=\"\" readonly>\n                                    </div>\n                                    <div class=\"col-md-8 form-group\">\n                                        <input class=\"form-control\" formControlName=\"resourceName\" id=\"validationCustom12\"\n                                               type=\"text\" placeholder=\"Resource Name\" required=\"\" [readOnly]=\"type == 'edit'\">\n                                        <em class=\"error\" *ngIf=\"!assignmentForm.get('resourceName').valid && (assignmentForm.get('resourceName').dirty || assignmentForm.get('resourceName').touched)\">resource Name is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div  class=\"col-md-4 form-group\">\n                                        <ng-select [items]=\"gradeData\"\n                                                   bindLabel=\"grade_name\"\n                                                   bindValue=\"grade_id\"\n                                                   formControlName=\"grade\"\n                                                   placeholder=\"Select Grade\"\n                                                   typeToSearchText=\"\"\n                                                   multiple=\"true\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\" *ngIf=\"!assignmentForm.get('grade').valid && (assignmentForm.get('grade').dirty || assignmentForm.get('grade').touched)\">Grade is required</em>\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                        <ng-select [items]=\"subjectData\"\n                                                   bindLabel=\"subject_name\"\n                                                   bindValue=\"subject_id\"\n                                                   formControlName=\"subject\"\n                                                   placeholder=\"Select Subject\"\n                                                   typeToSearchText=\"\"\n                                                   multiple=\"true\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\" *ngIf=\"!assignmentForm.get('subject').valid && (assignmentForm.get('subject').dirty || assignmentForm.get('subject').touched)\">Subject is required</em>\n                                    </div>\n                                    <div class=\"form-group col-md-4\">\n                                        <select class=\"form-control\" formControlName=\"access\">\n                                            <option value=\"1\">Public</option>\n                                            <option value=\"2\">Private</option>\n                                        </select>\n                                        <em class=\"error\" *ngIf=\"!assignmentForm.get('access').valid && (assignmentForm.get('access').dirty || assignmentForm.get('access').touched)\">access is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"form-group col-md-12\">\n                                        <textarea name=\"\" id=\"\" placeholder=\"Enter Description\" formControlName=\"description\" style=\"width: 100%; height: 100px; padding: 4px\"></textarea>\n                                        <em class=\"error\" *ngIf=\"!assignmentForm.get('description').valid && (assignmentForm.get('description').dirty || assignmentForm.get('description').touched)\">Description is required</em>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <tag-input\n                                                formControlName=\"tag\"\n                                                [secondaryPlaceholder]=\"'Enter tags'\"\n                                                [placeholder]=\"'Add tags'\"\n                                                [editable]='true'\n                                                [clearOnBlur]=\"true\"\n                                                [addOnPaste]=\"true\"\n                                                [addOnBlur]=\"true\"\n                                                theme='bootstrap'\n                                                (keyup)=\"tagList()\"\n                                        ></tag-input>\n                                    </div>\n                                    <div *ngFor=\"let list of tagData\" class=\"chip mr-1 mb-1\">{{list.tag_name}}<span class=\"closebtn\" onclick=\"this.parentElement.style.display='none'\">&times;</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6 mt-5\">\n                                <h4 style=\"color: black; font-weight: bold\">Assignment Files</h4>\n                            </div>\n                            <div class=\"col-md-6 mt-5\">\n                                <button (click)=\"showModal()\" class=\"btn btn-secondary pull-right\">Add More</button>\n                            </div>\n                        </div>\n                        <hr>\n                        <div class=\"col-md-12\">\n                            <div class=\"row d-flex\">\n                                <div class=\"form-group col-md-3\" *ngFor=\"let file of pdfpath; let i= index\" [hidden]=\"pdfpath == ''\">\n                                    <div class=\"delete-icon\">\n                                        <img *ngIf=\"pdfpath != ''\" src=\"assets/images/ristaschool/pdfimage.png\" alt=\"\">\n                                        <i *ngIf=\"pdfpath != ''\" class=\"fa fa-times close-button\" title=\"close\" (click)=\"deletePdf(i)\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-md-3\" *ngFor=\"let file of pdflinks; let i= index\" [hidden]=\"pdflinks == ''\">\n                                    <div class=\"delete-icon\">\n                                        <img *ngIf=\"pdflinks != ''\" src=\"assets/images/ristaschool/link.png\" alt=\"\">\n                                        <i *ngIf=\"pdflinks != ''\" class=\"fa fa-times close-button\" title=\"close\" (click)=\"deleteLink(i)\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #pdf let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body mb-5\">\n        <div class=\"row\">\n            <h3 class=\"col-md-11 px-3 py-2\">Add Assignment</h3>\n            <div class=\"col-md-1 pull-right\">\n                <i class=\"fa fa-close pull-right\" aria-hidden=\"true\" style=\"cursor:pointer\" (click)=\"onsave()\"></i>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div style=\"min-height: 120px\">\n                    <h4 style=\"text-align: center;margin-top: 2rem; font-weight: bold\">Upload</h4>\n                    <p style=\"text-align: center\">Upload resources as a Image, Video, Voice or PDF Format and proceed to assign it to your Students.</p>\n                </div>\n                <div *ngIf=\"pdflinks == ''\" class=\"d-flex justify-content-center\">\n                    <input accept=\".pdf\" style=\"display: none\" type=\"file\" multiple (change)=\"encodePdfFileAsURL($event)\" #hiddenfileinput>\n                    <button class=\"btn btn-primary\" type=\"file\" aria-describedby=\"inputGroupFileAddon01\"\n                            (click)=\"hiddenfileinput.click()\">Upload PDF</button>\n                </div>\n                <div *ngIf=\"pdfpath == ''\" class=\"d-flex justify-content-center\">\n                    <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" data-dismiss=\"bulkmodal\"  (click)=\"onsave()\" class=\"btn btn-primary mt-3\">Link</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--    </div>-->\n    <!-- Container-fluid Ends-->\n</ng-template>\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Link</h4>\n                <i class=\"fa fa-close\" style=\"cursor: pointer\" data-dismiss=\"modal\"></i>\n            </div>\n            <form [formGroup]=\"assignmentForm\">\n                <div class=\"modal-body\" formArrayName=\"repeatlink\" *ngFor=\"let list of assignmentForm.get('repeatlink')['controls']; let i=index\">\n                    <div [formGroupName]=\"i\">\n                        <div class=\"input-group\">\n                            <input type=\"link\" formControlName=\"link\" class=\"form-control\" aria-label=\"Recipient's username\" placeholder=\"Add Link here\" aria-describedby=\"basic-addon2\">\n                            <div class=\"input-group-append\">\n                                <span class=\"input-group-text\" id=\"basic-addon2\">\n                                    <i  class=\"fa fa-plus\"  (click)=\"addarray()\"></i>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"submitlink()\">Submit</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #assignContentToClass let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Assign Content</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5>\n                    <span>Do you want to assign this content to the Class {{contentCreatedForm != 'class' ? 'or Content Folder' : ''}}</span>?</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"dontAssign()\">No</button>\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"assignContent()\"\n        >Yes</button>\n    </div>\n</ng-template>\n\n<ng-template #assignTemplate let-c=\"close\" let-d=\"dismiss\">\n    <app-confirm-content-assign\n            [classData]=\"classDetails\"\n            [contentDetails]=\"assignData\"\n            (closePopUp)=\"closeAssignPopUp()\"\n    >\n    </app-confirm-content-assign>\n</ng-template>\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.ClassService }, { type: i4.CreatorService }, { type: i5.CommonDataService }, { type: i6.ToastrService }, { type: i7.CommonService }, { type: i8.AuthService }, { type: i9.SchoolService }, { type: i10.DomSanitizer }, { type: i1.Router }, { type: i11.ValidationService }, { type: i12.ConfigurationService }, { type: i13.NgbModal }, { type: i14.DatePipe }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }], Content: [{
            type: ViewChild,
            args: ['pdf']
        }], assignContentToClass: [{
            type: ViewChild,
            args: ['assignContentToClass']
        }], assignTemplate: [{
            type: ViewChild,
            args: ['assignTemplate']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddAssignmentComponent, { className: "AddAssignmentComponent" }); })();
//# sourceMappingURL=add-assignment.component.js.map