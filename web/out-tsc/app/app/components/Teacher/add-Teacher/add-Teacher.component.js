import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { dateOptions, timeZone } from '../../../shared/data/config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "../../../shared/service/common-data.service";
import * as i4 from "ngx-toastr";
import * as i5 from "../../../shared/service/newsubject.service";
import * as i6 from "../../../shared/service/auth.service";
import * as i7 from "../../../shared/service/validation.service";
import * as i8 from "../../../shared/service/teacher.service";
import * as i9 from "../../../shared/service/common.service";
import * as i10 from "../../../shared/service/School.service";
import * as i11 from "@angular/platform-browser";
import * as i12 from "../../../shared/service/student.service";
import * as i13 from "../../../shared/service/configuration.service";
import * as i14 from "@angular/common";
import * as i15 from "@ng-select/ng-select";
import * as i16 from "@nodro7/angular-mydatepicker";
import * as i17 from "ng-multiselect-dropdown";
const _c0 = ["myInput"];
const _c1 = () => ({ standalone: true });
function AddTeacherComponent_em_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "First name is required");
    i0.ɵɵelementEnd();
} }
function AddTeacherComponent_em_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "Last name is required");
    i0.ɵɵelementEnd();
} }
function AddTeacherComponent_em_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function AddTeacherComponent_em_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "Invalid Email-Id");
    i0.ɵɵelementEnd();
} }
function AddTeacherComponent_em_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "Contact Number is required");
    i0.ɵɵelementEnd();
} }
function AddTeacherComponent_em_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "Teacher ID is required");
    i0.ɵɵelementEnd();
} }
function AddTeacherComponent_em_86_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "Please enter Valid Date");
    i0.ɵɵelementEnd();
} }
function AddTeacherComponent_em_99_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "Date of Birth is required");
    i0.ɵɵelementEnd();
} }
function AddTeacherComponent_option_166_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 71);
    i0.ɵɵtext(1, "Deleted");
    i0.ɵɵelementEnd();
} }
function AddTeacherComponent_em_167_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "status is required");
    i0.ɵɵelementEnd();
} }
function AddTeacherComponent_div_176_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 75);
} if (rf & 2) {
    const file_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r4.sanitizer.bypassSecurityTrustResourceUrl(ctx_r4.webhost + "/" + file_r4), i0.ɵɵsanitizeUrl);
} }
function AddTeacherComponent_div_176_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 76);
    i0.ɵɵlistener("click", function AddTeacherComponent_div_176_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.deleteImg()); });
    i0.ɵɵelementEnd();
} }
function AddTeacherComponent_div_176_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 72);
    i0.ɵɵtemplate(1, AddTeacherComponent_div_176_img_1_Template, 1, 1, "img", 73)(2, AddTeacherComponent_div_176_i_2_Template, 1, 0, "i", 74);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.imagepath != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.imagepath != "");
} }
function AddTeacherComponent_div_188_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 78)(1, "input", 79);
    i0.ɵɵtwoWayListener("ngModelChange", function AddTeacherComponent_div_188_div_4_Template_input_ngModelChange_1_listener($event) { const permission_r8 = i0.ɵɵrestoreView(_r7).$implicit; i0.ɵɵtwoWayBindingSet(permission_r8.checked, $event) || (permission_r8.checked = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function AddTeacherComponent_div_188_div_4_Template_input_change_1_listener($event) { const permission_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); ctx_r4.checkAllPermissionSelected(); return i0.ɵɵresetView(ctx_r4.checkContentFodler(permission_r8, $event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 80);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const permission_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "", permission_r8.description, "", i_r9, "");
    i0.ɵɵproperty("checked", permission_r8.checked)("ngModelOptions", i0.ɵɵpureFunction0(10, _c1));
    i0.ɵɵtwoWayProperty("ngModel", permission_r8.checked);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "", permission_r8.description, "", i_r9, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(permission_r8.description);
} }
function AddTeacherComponent_div_188_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div")(2, "h4");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AddTeacherComponent_div_188_div_4_Template, 4, 11, "div", 77);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    const first_r11 = ctx.first;
    const last_r12 = ctx.last;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("col-3 px-0 mt-1 ", (first_r11 || last_r12) && ctx_r4.showContent ? "" : !ctx_r4.showContent ? "" : "content-design-bottom", " ", last_r12 && ctx_r4.showContent ? "last_content_padding" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("", first_r11 && ctx_r4.showContent ? "content-design" : first_r11 && !ctx_r4.showContent ? "content-design-first" : "p-12", " ", last_r12 && ctx_r4.showContent ? "content-design-bottom" : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r10.group_name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r10.permission);
} }
function AddTeacherComponent_div_189_em_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 70);
    i0.ɵɵtext(1, "Subject is mandatory");
    i0.ɵɵelementEnd();
} }
function AddTeacherComponent_div_189_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81)(1, "div", 82)(2, "div", 83)(3, "div", 4)(4, "div", 84)(5, "label", 85)(6, "span", 86);
    i0.ɵɵtext(7, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "ng-multiselect-dropdown", 87);
    i0.ɵɵtemplate(10, AddTeacherComponent_div_189_em_10_Template, 2, 0, "em", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 88)(12, "label", 85);
    i0.ɵɵtext(13, "Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "ng-multiselect-dropdown", 87);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("settings", ctx_r4.subjectPermissionSettings)("data", ctx_r4.subjectData)("formControlName", "subject")("placeholder", "Select Subject");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r4.teacherForm.get("subject").valid && (ctx_r4.teacherForm.get("subject").dirty || ctx_r4.teacherForm.get("subject").touched));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("settings", ctx_r4.gradePermissionSettings)("data", ctx_r4.gradeData)("formControlName", "grade")("placeholder", "Select Grade");
} }
export class AddTeacherComponent {
    constructor(route, formBuilder, commondata, toastr, newSubject, auth, router, validationService, teacherService, common, brandservices, sanitizer, student, config, datePipe) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.commondata = commondata;
        this.toastr = toastr;
        this.newSubject = newSubject;
        this.auth = auth;
        this.router = router;
        this.validationService = validationService;
        this.teacherService = teacherService;
        this.common = common;
        this.brandservices = brandservices;
        this.sanitizer = sanitizer;
        this.student = student;
        this.config = config;
        this.datePipe = datePipe;
        this.setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getMonth() + 1 : new Date(this.setDate).getMonth(),
                day: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getDate() - 1 : new Date(this.setDate).getMonth() === (1 || 3 || 5 || 7 || 8 || 10 || 12) ? 31 : new Date(this.setDate).getMonth() === 2 ? 28 : 30,
            },
            calendarAnimation: {
                in: 4,
                out: 4
            }
        };
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableSince: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() + 1
            },
            calendarAnimation: {
                in: 4,
                out: 4
            }
        };
        this.gradeData = [];
        this.subjectData = [];
        this.subjectSettings = {};
        this.gradeSettings = {};
        this.subjectPermissionSettings = {};
        this.gradePermissionSettings = {};
        this.showContent = false;
        this.selectAllSelected = false;
        this.webhost = this.config.getimgUrl();
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        if (this.type == 'edit') {
            this.editData = JSON.parse(this.auth.getSessionData('editTeacher'));
        }
        this.gradeSettings = this.updateDropDownSettings('grade_id', 'grade_name', 'Search Grade', 'No grade available', 8);
        this.subjectSettings = this.updateDropDownSettings('subject_id', 'subject_name', 'Search Subject', 'No subject available', 8);
        this.subjectPermissionSettings = this.updateDropDownSettings('subject_id', 'subject_name', 'Search Subject', 'No subject available', 3);
        this.gradePermissionSettings = this.updateDropDownSettings('grade_id', 'grade_name', 'Search Grade', 'No grade available', 3);
        this.imagepath = [];
        this.imagepaththumb = [];
        this.teacherForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email_id: ['', [Validators.required, Validators.pattern(this.auth.emailValidatorPattern)]],
            mobile: ['', Validators.required],
            schoolId: ['', Validators.required],
            subject: '',
            grade: '',
            profile_subject: '',
            profile_grade: '',
            teacherId: [''],
            Designation: '',
            doj: '',
            dob: '',
            gender: '',
            address1: '',
            address2: '',
            city: '',
            state: '0',
            country: '231',
            postalCode: '',
            status: '1'
        });
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.router.url.includes('create-Teacher')) {
                    this.init(params);
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
        this.imagepath = [];
        this.imagepaththumb = [];
        this.PermissionTeacher(this.type == 'edit' ? this.editData.user_id : '');
    }
    ngOnInit() {
        if (this.type == 'edit') {
            this.allowSelect = true;
            this.newSubject.allowSchoolChange(this.allowSelect);
            this.teacherForm.controls.firstName.patchValue(this.editData.first_name);
            this.teacherForm.controls.lastName.patchValue(this.editData.last_name);
            this.teacherForm.controls.email_id.patchValue(this.editData.email_id);
            this.teacherForm.controls.mobile.patchValue(this.editData.mobile);
            this.teacherForm.controls.schoolId.patchValue(this.editData.school_name);
            this.teacherForm.controls.teacherId.patchValue(this.editData.school_idno);
            this.teacherForm.controls.Designation.patchValue(this.editData.designation);
            if (this.editData.gender != null) {
                this.teacherForm.controls.gender.patchValue(this.editData.gender.toLowerCase().trim());
            }
            this.teacherForm.controls.address1.patchValue(this.editData.address1);
            this.teacherForm.controls.address2.patchValue(this.editData.address2);
            this.teacherForm.controls.city.patchValue(this.editData.city);
            this.teacherForm.controls.country.patchValue(this.editData.country);
            this.teacherForm.controls.postalCode.patchValue(this.editData.postal_code);
            const status = this.editData.status;
            this.teacherForm.controls.status.patchValue(status == 'Active' ? 1 : status == 'Suspended' ? 2 :
                status == 'Disengaged' ? 3 : 4);
            if (this.editData.doj != '0000-00-00' && this.editData.doj != null) {
                const dob = this.editData.doj.split('-');
                const dobObject = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(dob[0]), parseInt(dob[1]) - 1, parseInt(dob[2])) },
                    dateRange: null
                };
                this.teacherForm.controls.doj.patchValue(dobObject);
            }
            else {
                this.teacherForm.controls.doj.patchValue(null);
            }
            if (this.editData.birthday != '0000-00-00' && this.editData.birthday != null && this.editData.birthday != '') {
                const dob1 = this.editData.birthday.split('-');
                const dobObject1 = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(dob1[0]), parseInt(dob1[1]) - 1, parseInt(dob1[2])) },
                    dateRange: null
                };
                this.teacherForm.controls.dob.patchValue(dobObject1);
            }
            else {
                this.teacherForm.controls.dob.patchValue(null);
            }
            if (this.editData.profile_url != '') {
                this.imagepath.push(this.editData.profile_url);
            }
            this.imagepaththumb.push(this.editData.profile_thumb_url);
        }
        else {
            this.allowSelect = false;
            this.newSubject.allowSchoolChange(this.allowSelect);
            this.teacherForm.reset();
            this.teacherForm.controls.schoolId.patchValue(this.auth.getSessionData('school_name'));
            this.teacherForm.controls.country.patchValue('231');
            this.teacherForm.controls.status.patchValue('1');
            this.teacherForm.controls.gender.patchValue('');
            this.imagepath = [];
            this.imagepaththumb = [];
            this.stateList('231');
        }
        this.commondata.showLoader(false);
    }
    patchNgDropDownValue(arrayValue, editArray, id, name, calledFrom = '') {
        let array = [];
        arrayValue.forEach((data) => {
            if (calledFrom != '') {
                array.push({
                    [id]: data[id],
                    [name]: data[name]
                });
            }
            else {
                editArray.forEach((items) => {
                    if (data[id] == items) {
                        array.push({
                            [id]: data[id],
                            [name]: data[name]
                        });
                    }
                });
            }
        });
        return array;
    }
    updateDropDownSettings(key, value, placeholder, noData, showCount) {
        return {
            singleSelection: false,
            idField: key,
            textField: value,
            enableCheckAll: true,
            selectAllText: 'Select all',
            unSelectAllText: 'UnSelect all',
            allowSearchFilter: true,
            clearSearchFilter: true,
            itemsShowLimit: showCount,
            searchPlaceholderText: placeholder,
            noDataAvailablePlaceholderText: noData,
            closeDropDownOnSelection: false
        };
    }
    datePattern(event) {
        this.validationService.dateValidation(event);
    }
    init(id) {
        // this.teacherForm.controls.subject.patchValue(null);
        // this.teacherForm.controls.grade.patchValue(null);
        this.schoolId = id;
        this.countryList();
        this.gradeList();
        this.subjectList();
    }
    addTeacher(value) {
        if (this.teacherForm.valid) {
            this.teacherPermission.forEach(items => items.permission.forEach(teacher => teacher.status = teacher.checked ? '1' : '0'));
            const profile_grade = this.teacherForm.controls.profile_grade.value ? this.teacherForm.controls.profile_grade.value.map(items => items.grade_id) : [];
            const profile_subject = this.teacherForm.controls.profile_subject.value ? this.teacherForm.controls.profile_subject.value.map(items => items.subject_id) : [];
            const gradeValue = this.teacherForm.controls.grade.value ? this.teacherForm.controls.grade.value : [];
            const allGradeSelected = this.gradeData.every((element) => gradeValue.some((gradeData) => element.grade_id == gradeData.grade_id));
            const grade = gradeValue && !allGradeSelected && this.showContent ? gradeValue.map(items => items.grade_id) :
                gradeValue && allGradeSelected && this.showContent ? ['0'] : [];
            const subjectValue = this.teacherForm.controls.subject.value ? this.teacherForm.controls.subject.value : [];
            const allSubjectSelected = this.subjectData.every((element) => subjectValue.some((subjectData) => element.subject_id == subjectData.subject_id));
            const subject = subjectValue && !allSubjectSelected && this.showContent ? subjectValue.map(items => items.subject_id) :
                subjectValue && allSubjectSelected && this.showContent ? ['0'] : [];
            this.commondata.showLoader(true);
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                first_name: this.teacherForm.controls.firstName.value,
                last_name: this.teacherForm.controls.lastName.value,
                email_id: this.teacherForm.controls.email_id.value,
                mobile: this.teacherForm.controls.mobile.value,
                school_id: this.schoolId,
                school_idno: this.teacherForm.controls.teacherId.value == null ? '' : this.teacherForm.controls.teacherId.value,
                designation: this.teacherForm.controls.Designation.value,
                doj: this.teacherForm.controls.doj.value == null ? '' : this.datePipe.transform(this.teacherForm.controls.doj.value.singleDate.jsDate, 'yyyy-MM-dd'),
                birthday: this.teacherForm.controls.dob.value == null ? '' : this.datePipe.transform(this.teacherForm.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd'),
                gender: this.teacherForm.controls.gender.value,
                address1: this.teacherForm.controls.address1.value,
                address2: this.teacherForm.controls.address2.value == null ? '' : this.teacherForm.controls.address2.value,
                city: this.teacherForm.controls.city.value,
                state: this.teacherForm.controls.state.value == null ? '' : this.teacherForm.controls.state.value,
                country: this.teacherForm.controls.country.value,
                postal_code: this.teacherForm.controls.postalCode.value,
                status: this.teacherForm.controls.status.value,
                subject,
                grade,
                profile_url: this.imagepath.toString(),
                profile_thumb_url: this.imagepaththumb.toString(),
                profile_subject,
                profile_grade,
                permission: this.teacherPermission
            };
            console.log(data, 'payload');
            if (value == 'add') {
                this.teacherService.teacherAdd(data).subscribe((successData) => {
                    this.addTeacherSuccess(successData);
                }, (error) => {
                    this.addTeacherFailure(error);
                });
            }
            else if (value == 'edit') {
                data['selected_user_id'] = this.editData.user_id;
                this.teacherService.teacherEdit(data).subscribe((successData) => {
                    this.addTeacherSuccess(successData);
                }, (error) => {
                    this.addTeacherFailure(error);
                });
            }
        }
        else {
            this.validationService.validateAllFormFields(this.teacherForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    addTeacherSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success(successData.ResponseObject, 'Teacher');
            this.router.navigate(['/users/user-list']);
        }
        else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, '');
        }
    }
    addTeacherFailure(error) {
        console.log(error, 'error');
        this.commondata.showLoader(false);
        this.toastr.error(error.ResponseObject, 'Teacher');
    }
    numberPattern(event) {
        this.validationService.numberValidate1(event);
    }
    encodeImageFileAsURL(event) {
        for (let i = 0; i < event.target.files.length; i++) {
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
        this.commondata.showLoader(true);
        this.common.fileUpload(data).subscribe((successData) => {
            this.uploadSuccess(successData);
        }, (error) => {
            this.commondata.showLoader(false);
            console.error(error, 'error_fileUpload');
        });
    }
    uploadSuccess(successData) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.imagepath = [];
            this.imagepaththumb = [];
            console.log(successData.ResponseObject.imagepath, 'ImageUpload');
            this.imagepath.push(successData.ResponseObject.imagepath[0].original_image_url);
            this.imagepaththumb.push(successData.ResponseObject.imagepath[0].resized_url);
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    deleteImg() {
        this.imagepath = [];
        this.reset();
    }
    reset() {
        console.log(this.myInputVariable.nativeElement.files);
        this.myInputVariable.nativeElement.value = '';
        console.log(this.myInputVariable.nativeElement.files);
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
            console.error(error, 'error_country');
        });
    }
    countryListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.countryListData = successData.ResponseObject;
            console.log(this.countryListData, 'Country');
            if (this.type == 'edit') {
                this.stateList(this.editData.country);
            }
        }
    }
    stateList(id) {
        this.teacherForm.controls.state.patchValue(null);
        const data = {
            platform: 'web',
            country_id: id,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.getStateList(data).subscribe((successData) => {
            this.stateListSuccess(successData);
        }, (error) => {
            console.error(error, 'error-state');
        });
    }
    stateListSuccess(successData) {
        if (successData.IsSuccess) {
            this.stateListData = successData.ResponseObject;
            if (this.type == 'edit') {
                this.stateListData.forEach((value) => {
                    if (value.state_id == this.editData.state) {
                        this.teacherForm.controls.state.patchValue(value.state_id);
                    }
                });
            }
        }
    }
    PermissionTeacher(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            teacher_id: id,
            school_id: this.schoolId
        };
        this.teacherService.PermissionTeacher(data).subscribe((successData) => {
            this.PermissionTeacherSuccess(successData);
        }, (error) => {
            console.error(error, 'permission');
        });
    }
    PermissionTeacherSuccess(successData) {
        console.log(successData, 'teacherPermission');
        if (successData.IsSuccess) {
            this.teacherPermission = successData.ResponseObject.Permission;
            this.teacherPermission.forEach((teacher) => {
                teacher.permission.forEach((permission) => {
                    permission.checked = permission.status == '1';
                    if (permission.id == '6') {
                        this.showContent = permission.checked;
                        this.updateSubjectFormField(permission.checked);
                    }
                });
            });
            this.checkAllPermissionSelected();
        }
        else {
            this.teacherPermission = [];
            this.toastr.error(successData.ErrorObject);
        }
        console.log(this.teacherPermission, 'teacherPermission');
    }
    checkContentFodler(data, checkedStatus) {
        if (data.id == '6') {
            this.showContent = checkedStatus;
            this.updateSubjectFormField(checkedStatus);
        }
    }
    checkDoj(eve) {
        if (eve.value != '') {
            this.teacherForm.controls.doj.setValidators([Validators.required]);
            this.teacherForm.controls.doj.updateValueAndValidity();
        }
        else {
            this.teacherForm.controls.doj.clearValidators();
            this.teacherForm.controls.doj.setValidators(null);
            this.teacherForm.controls.doj.updateValueAndValidity();
        }
    }
    // grade list
    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            type: 'active',
            school_id: this.schoolId
        };
        this.student.getgradeList(data).subscribe((successData) => {
            this.gradeListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_grade');
        });
    }
    gradeListSuccess(successData) {
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
            const profileGrade = this.patchNgDropDownValue(this.gradeData, this.editData.profile_grade, 'grade_id', 'grade_name');
            const checkAllGradeSelected = this.editData.grade_id.length == 1 ? this.editData.grade_id[0] == '0' ? this.editData.grade_id[0] : '' : '';
            const grade = this.patchNgDropDownValue(this.gradeData, this.editData.grade_id, 'grade_id', 'grade_name', checkAllGradeSelected);
            this.teacherForm.controls.profile_grade.patchValue(profileGrade.length != 0 ? profileGrade : '');
            this.teacherForm.controls.grade.patchValue(grade.length != 0 ? grade : '');
        }
    }
    // subject list
    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId,
            type: 'active'
        };
        this.teacherService.subjectList(data).subscribe((successData) => {
            this.subjectListSuccess(successData);
        });
    }
    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
            if (this.type == 'edit') {
                const profileSubject = this.patchNgDropDownValue(this.subjectData, this.editData.profile_subject, 'subject_id', 'subject_name');
                const checkAllSubjectSelected = this.editData.subject.length == 1 ? this.editData.subject[0] == '0' ? this.editData.subject[0] : '' : '';
                const subject = this.patchNgDropDownValue(this.subjectData, this.editData.subject, 'subject_id', 'subject_name', checkAllSubjectSelected);
                this.teacherForm.controls.profile_subject.patchValue(profileSubject.length != 0 ? profileSubject : '');
                this.teacherForm.controls.subject.patchValue(subject.length != 0 ? subject : '');
            }
        }
    }
    selectAll(event) {
        this.teacherPermission.forEach(teacher => teacher.permission.forEach((permission) => {
            permission.checked = event.target.checked;
            permission.status = event.target.checked ? '1' : '0';
        }));
        this.showContent = event.target.checked;
        console.log(this.teacherPermission, 'permsiion');
    }
    checkAllPermissionSelected() {
        let allchecked = true;
        this.teacherPermission.every(teacher => {
            const checkCondition = teacher.permission.some((code) => !code.checked);
            if (checkCondition) {
                allchecked = false;
            }
            return true;
        });
        this.selectAllSelected = allchecked;
    }
    updateSubjectFormField(checkedStatus) {
        if (checkedStatus) {
            this.teacherForm.controls.subject.setValidators([Validators.required]);
            this.teacherForm.controls.subject.updateValueAndValidity();
        }
        else {
            this.teacherForm.controls.subject.clearValidators();
            this.teacherForm.controls.subject.setValidators(null);
            this.teacherForm.controls.subject.updateValueAndValidity();
        }
    }
    static { this.ɵfac = function AddTeacherComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddTeacherComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.CommonDataService), i0.ɵɵdirectiveInject(i4.ToastrService), i0.ɵɵdirectiveInject(i5.NewsubjectService), i0.ɵɵdirectiveInject(i6.AuthService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i7.ValidationService), i0.ɵɵdirectiveInject(i8.TeacherService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i10.SchoolService), i0.ɵɵdirectiveInject(i11.DomSanitizer), i0.ɵɵdirectiveInject(i12.StudentService), i0.ɵɵdirectiveInject(i13.ConfigurationService), i0.ɵɵdirectiveInject(i14.DatePipe)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddTeacherComponent, selectors: [["app-add-teacher"]], viewQuery: function AddTeacherComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
        } }, decls: 193, vars: 32, consts: [["dp", "angular-mydatepicker"], ["dp1", "angular-mydatepicker"], ["myInput", ""], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header", "p-3"], [1, "text-capitalize"], [1, "text-muted"], [1, "text-danger"], [1, "card-body", "p-3", "tab2-card"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "firstName", "id", "validationCustom0", "type", "text", "placeholder", "First Name", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["formControlName", "lastName", "id", "validationCustom1", "type", "text", "placeholder", "Last Name", "required", "", 1, "form-control"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["formControlName", "email_id", "id", "validationCustom2", "type", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["for", "validationCustom3", 1, "col-xl-3", "col-md-4"], ["formControlName", "mobile", "id", "validationCustom3", "type", "text", "placeholder", "Contact Number", "maxlength", "15", "minlength", "10", "required", "", 1, "form-control", 3, "keypress"], ["for", "validationCustom4", 1, "col-xl-3", "col-md-4"], [2, "visibility", "hidden"], ["formControlName", "teacherId", "id", "validationCustom4", "type", "text", "placeholder", "Teacher ID", 1, "form-control"], [1, "col-xl-3", "col-md-4"], [1, "p-0", 3, "settings", "data", "formControlName", "placeholder"], ["formControlName", "Designation", "id", "validationCustom5", "type", "text", "placeholder", "Designation", 1, "form-control"], [1, "col-xl-3", "col-md-4", 2, "position", "relative", "left", "9px"], [1, "col-xl-8", "col-md-7", "mb-0", "form-group"], [1, "input-group"], ["name", "mydate", "placeholder", "mm/dd/yyyy", "formControlName", "doj", "angular-mydatepicker", "", 1, "form-control", 3, "keypress", "click", "inputFieldChanged", "options"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 2, "padding", "6px 18px", 3, "click"], [1, "fa", "fa-calendar-o"], ["name", "mydate", "placeholder", "mm/dd/yyyy", "formControlName", "dob", "angular-mydatepicker", "", 1, "form-control", 3, "keypress", "click", "options"], ["for", "validationCustom7", 1, "col-xl-3", "col-md-4"], ["formControlName", "gender", "id", "validationCustom7", 1, "form-control"], ["value", ""], ["value", "male"], ["value", "female"], ["value", "n/a"], ["for", "validationCustom8", 1, "col-xl-3", "col-md-4"], ["formControlName", "address1", "id", "validationCustom8", "type", "text", "placeholder", "Address1", 1, "form-control"], ["for", "validationCustom9", 1, "col-xl-3", "col-md-4", 2, "position", "relative", "left", "9px"], ["formControlName", "address2", "id", "validationCustom9", "type", "text", "placeholder", "Address2", 1, "form-control"], ["for", "validationCustom10", 1, "col-xl-3", "col-md-4"], ["formControlName", "city", "id", "validationCustom10", "type", "text", "placeholder", "City", 1, "form-control"], ["bindLabel", "name", "bindValue", "state_id", "formControlName", "state", "placeholder", "Please Select", 3, "items"], ["bindLabel", "name", "bindValue", "country_id", "formControlName", "country", "placeholder", "Please Select", 3, "change", "items"], ["for", "validationCustom13", 1, "col-xl-3", "col-md-4"], ["multiple", "", "formControlName", "postalCode", "id", "validationCustom13", "type", "text", "placeholder", "Enter Zip", "minlength", "3", "maxlength", "9", 1, "form-control", 3, "keypress"], ["formControlName", "status", 1, "form-control"], ["value", "1"], ["value", "2"], ["value", "4", 4, "ngIf"], ["type", "file", "accept", ".png, .jpeg, .jpg", 1, "custom-upload-input", 3, "change"], [1, "col-xl-3", "col-md-4", 2, "position", "relative", "left", "25%"], ["class", "files-list fit-image", 4, "ngFor", "ngForOf"], [1, "col-12", "mt-4"], [2, "color", "#000", "font-weight", "800"], [1, "col-md-12", "mb-3", "d-flex"], ["type", "checkbox", "id", "selectAll", 1, "cursor", 3, "ngModelChange", "change", "ngModelOptions", "ngModel", "checked"], ["for", "selectAll", 1, "cursor", "mb-0", "ml-2"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "col-12", 4, "ngIf"], [1, "pull-right"], ["type", "button", 1, "btn", "btn-primary", "mt-3", 3, "click"], [1, "error"], ["value", "4"], [1, "files-list", "fit-image"], ["alt", "", 3, "src", 4, "ngIf"], ["class", "fa fa-times", "style", "position: relative; right: 26px; bottom: 85px; cursor: pointer;  background: #eeeeee;\n       padding: 10px; border-radius: 45px;", "title", "close", 3, "click", 4, "ngIf"], ["alt", "", 3, "src"], ["title", "close", 1, "fa", "fa-times", 2, "position", "relative", "right", "26px", "bottom", "85px", "cursor", "pointer", "background", "#eeeeee", "padding", "10px", "border-radius", "45px", 3, "click"], ["class", "d-flex my-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "my-2"], ["type", "checkbox", 1, "cursor", 3, "ngModelChange", "change", "checked", "ngModelOptions", "ngModel", "id"], [1, "cursor", "mb-0", "ml-2", 3, "for"], [1, "col-12"], [1, "card", "resource-link-card", "mb-0", 2, "border", "1px solid #8f008a80", "border-top-left-radius", "0", "border-top-right-radius", "0", "border-top", "0"], [1, "card-body"], [1, "col-4", "px-2", "form-group", "mb-0"], [1, "font-weight-bold", "mb-1"], [1, "mr-1", "text-danger"], [1, "inbox-dropdown", 3, "settings", "data", "formControlName", "placeholder"], [1, "col-4", "px-2", "form-group"]], template: function AddTeacherComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵtemplate(21, AddTeacherComponent_em_21_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 13)(23, "label", 18)(24, "span");
            i0.ɵɵtext(25, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(26, " Last Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 15);
            i0.ɵɵelement(28, "input", 19);
            i0.ɵɵtemplate(29, AddTeacherComponent_em_29_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "div", 13)(31, "label", 20)(32, "span");
            i0.ɵɵtext(33, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(34, " Email Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 15);
            i0.ɵɵelement(36, "input", 21);
            i0.ɵɵtemplate(37, AddTeacherComponent_em_37_Template, 2, 0, "em", 17)(38, AddTeacherComponent_em_38_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "div", 13)(40, "label", 22)(41, "span");
            i0.ɵɵtext(42, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(43, " Contact Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "div", 15)(45, "input", 23);
            i0.ɵɵlistener("keypress", function AddTeacherComponent_Template_input_keypress_45_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.numberPattern($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(46, AddTeacherComponent_em_46_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "div", 13)(48, "label", 24)(49, "span", 25);
            i0.ɵɵtext(50, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(51, " Teacher ID");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "div", 15);
            i0.ɵɵelement(53, "input", 26);
            i0.ɵɵtemplate(54, AddTeacherComponent_em_54_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(55, "div", 13)(56, "label", 27)(57, "span", 25);
            i0.ɵɵtext(58, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(59, " Grade");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "div", 15);
            i0.ɵɵelement(61, "ng-multiselect-dropdown", 28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(62, "div", 13)(63, "label", 27)(64, "span", 25);
            i0.ɵɵtext(65, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(66, " Subject");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "div", 15);
            i0.ɵɵelement(68, "ng-multiselect-dropdown", 28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(69, "div", 13)(70, "label", 24)(71, "span", 25);
            i0.ɵɵtext(72, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(73, " Designation");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "div", 15);
            i0.ɵɵelement(75, "input", 29);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(76, "div", 13)(77, "label", 30);
            i0.ɵɵtext(78, " Date Of Joining");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "div", 31)(80, "div", 32)(81, "input", 33, 0);
            i0.ɵɵlistener("keypress", function AddTeacherComponent_Template_input_keypress_81_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.datePattern($event)); })("click", function AddTeacherComponent_Template_input_click_81_listener() { i0.ɵɵrestoreView(_r1); const dp_r2 = i0.ɵɵreference(82); return i0.ɵɵresetView(dp_r2.toggleCalendar()); })("inputFieldChanged", function AddTeacherComponent_Template_input_inputFieldChanged_81_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.checkDoj($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(83, "div", 34)(84, "button", 35);
            i0.ɵɵlistener("click", function AddTeacherComponent_Template_button_click_84_listener() { i0.ɵɵrestoreView(_r1); const dp_r2 = i0.ɵɵreference(82); return i0.ɵɵresetView(dp_r2.toggleCalendar()); });
            i0.ɵɵelement(85, "i", 36);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(86, AddTeacherComponent_em_86_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(87, "div", 13)(88, "label", 27)(89, "span", 25);
            i0.ɵɵtext(90, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(91, " Date Of Birth");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "div", 31)(93, "div", 32)(94, "input", 37, 1);
            i0.ɵɵlistener("keypress", function AddTeacherComponent_Template_input_keypress_94_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.datePattern($event)); })("click", function AddTeacherComponent_Template_input_click_94_listener() { i0.ɵɵrestoreView(_r1); const dp1_r3 = i0.ɵɵreference(95); return i0.ɵɵresetView(dp1_r3.toggleCalendar()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "div", 34)(97, "button", 35);
            i0.ɵɵlistener("click", function AddTeacherComponent_Template_button_click_97_listener() { i0.ɵɵrestoreView(_r1); const dp1_r3 = i0.ɵɵreference(95); return i0.ɵɵresetView(dp1_r3.toggleCalendar()); });
            i0.ɵɵelement(98, "i", 36);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(99, AddTeacherComponent_em_99_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(100, "div", 13)(101, "label", 38)(102, "span", 25);
            i0.ɵɵtext(103, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(104, " Gender");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(105, "div", 15)(106, "select", 39)(107, "option", 40);
            i0.ɵɵtext(108, "Select Gender");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(109, "option", 41);
            i0.ɵɵtext(110, "Male");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(111, "option", 42);
            i0.ɵɵtext(112, "Female");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(113, "option", 43);
            i0.ɵɵtext(114, "Do not want to disclose");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(115, "div", 13)(116, "label", 44)(117, "span", 25);
            i0.ɵɵtext(118, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(119, " Address 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(120, "div", 15);
            i0.ɵɵelement(121, "input", 45);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(122, "div", 13)(123, "label", 46);
            i0.ɵɵtext(124, " Address 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(125, "div", 15);
            i0.ɵɵelement(126, "input", 47);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(127, "div", 13)(128, "label", 48)(129, "span", 25);
            i0.ɵɵtext(130, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(131, " City");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(132, "div", 15);
            i0.ɵɵelement(133, "input", 49);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(134, "div", 13)(135, "label", 27)(136, "span", 25);
            i0.ɵɵtext(137, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(138, " State");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(139, "div", 15);
            i0.ɵɵelement(140, "ng-select", 50);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(141, "div", 13)(142, "label", 27)(143, "span", 25);
            i0.ɵɵtext(144, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(145, " Country");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(146, "div", 15)(147, "ng-select", 51);
            i0.ɵɵlistener("change", function AddTeacherComponent_Template_ng_select_change_147_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.stateList($event.country_id)); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(148, "div", 13)(149, "label", 52)(150, "span", 25);
            i0.ɵɵtext(151, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(152, " Zip ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(153, "div", 15)(154, "input", 53);
            i0.ɵɵlistener("keypress", function AddTeacherComponent_Template_input_keypress_154_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.numberPattern($event)); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(155, "div", 13)(156, "label", 27)(157, "span");
            i0.ɵɵtext(158, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(159, " Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(160, "div", 15)(161, "select", 54)(162, "option", 55);
            i0.ɵɵtext(163, "Active");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(164, "option", 56);
            i0.ɵɵtext(165, "Suspended");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(166, AddTeacherComponent_option_166_Template, 2, 0, "option", 57);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(167, AddTeacherComponent_em_167_Template, 2, 0, "em", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(168, "div", 13)(169, "label", 27);
            i0.ɵɵtext(170, "Profile Photo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(171, "div", 15)(172, "input", 58, 2);
            i0.ɵɵlistener("change", function AddTeacherComponent_Template_input_change_172_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.encodeImageFileAsURL($event)); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(174, "div", 13)(175, "div", 59);
            i0.ɵɵtemplate(176, AddTeacherComponent_div_176_Template, 3, 2, "div", 60);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(177, "div", 4)(178, "div", 61)(179, "h3", 62);
            i0.ɵɵtext(180, "Permissions");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(181, "hr");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(182, "div", 4)(183, "div", 63)(184, "input", 64);
            i0.ɵɵtwoWayListener("ngModelChange", function AddTeacherComponent_Template_input_ngModelChange_184_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.selectAllSelected, $event) || (ctx.selectAllSelected = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("change", function AddTeacherComponent_Template_input_change_184_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.selectAll($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(185, "label", 65)(186, "b");
            i0.ɵɵtext(187, "Select All");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(188, AddTeacherComponent_div_188_Template, 5, 10, "div", 66)(189, AddTeacherComponent_div_189_Template, 15, 9, "div", 67);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(190, "div", 68)(191, "button", 69);
            i0.ɵɵlistener("click", function AddTeacherComponent_Template_button_click_191_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.addTeacher(ctx.type)); });
            i0.ɵɵtext(192);
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.type, " Teacher");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.teacherForm);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.teacherForm.get("firstName").valid && (ctx.teacherForm.get("firstName").dirty || ctx.teacherForm.get("firstName").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.teacherForm.get("lastName").valid && (ctx.teacherForm.get("lastName").dirty || ctx.teacherForm.get("lastName").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.teacherForm.get("email_id").hasError("required") && (ctx.teacherForm.get("email_id").dirty || ctx.teacherForm.get("email_id").touched));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.teacherForm.get("email_id").hasError("pattern"));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.teacherForm.get("mobile").valid && (ctx.teacherForm.get("mobile").dirty || ctx.teacherForm.get("mobile").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", !ctx.teacherForm.get("teacherId").valid && (ctx.teacherForm.get("teacherId").dirty || ctx.teacherForm.get("teacherId").touched));
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("settings", ctx.gradeSettings)("data", ctx.gradeData)("formControlName", "profile_grade")("placeholder", "Select Grade");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("settings", ctx.subjectSettings)("data", ctx.subjectData)("formControlName", "profile_subject")("placeholder", "Select Subject");
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("options", ctx.myDpOptions);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", !ctx.teacherForm.get("doj").valid && (ctx.teacherForm.get("doj").dirty || ctx.teacherForm.get("doj").touched));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("options", ctx.myDpOptions1);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", !ctx.teacherForm.get("dob").valid && (ctx.teacherForm.get("dob").dirty || ctx.teacherForm.get("dob").touched));
            i0.ɵɵadvance(41);
            i0.ɵɵproperty("items", ctx.stateListData);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("items", ctx.countryListData);
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("ngIf", ctx.type == "edit");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.teacherForm.get("status").valid && (ctx.teacherForm.get("status").dirty || ctx.teacherForm.get("status").touched));
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngForOf", ctx.imagepath);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(31, _c1));
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectAllSelected);
            i0.ɵɵproperty("checked", ctx.selectAllSelected);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.teacherPermission);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showContent);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.type == "add" ? "Save" : "Update");
        } }, dependencies: [i14.NgForOf, i14.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName, i15.NgSelectComponent, i16.AngularMyDatePickerDirective, i2.NgModel, i17.MultiSelectComponent], styles: [".custom-upload-input[_ngcontent-%COMP%] {\n  color: transparent;\n}\n.custom-upload-input[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input[_ngcontent-%COMP%]::before {\n  content: 'Choose files';\n  color: black;\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n.custom-upload-input[_ngcontent-%COMP%]:hover::before {\n  border-color: black;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active {\n  outline: 0;\n}\n.custom-upload-input[_ngcontent-%COMP%]:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\n.content-design[_ngcontent-%COMP%] {\n  margin: 0 0 0 15px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border: 1px solid #8f008a80;\n  border-bottom: 0 !important;\n  padding: 12px;\n  background: #fffbfe;\n}\n\n.content-design-first[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  padding: 8px;\n}\n\n.content-design-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #8f008a80;\n}\n\n.content-design-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #8f008a80;\n}\n\n.last_content_padding[_ngcontent-%COMP%] {\n  padding-right: 15px !important;\n}\n\n.p-12[_ngcontent-%COMP%] {\n  padding: 12px;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddTeacherComponent, [{
        type: Component,
        args: [{ selector: 'app-add-teacher', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header p-3\">\n                    <h5 class=\"text-capitalize\">{{type}} Teacher</h5>\n                    <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                </div>\n                <div class=\"card-body p-3 tab2-card\">\n                    <form [formGroup]=\"teacherForm\" class=\"needs-validation user-add\" novalida>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom0\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                First Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control \" formControlName=\"firstName\" id=\"validationCustom0\"\n                                       type=\"text\" placeholder=\"First Name\" required>\n                                <em class=\"error\" *ngIf=\"!teacherForm.get('firstName').valid && (teacherForm.get('firstName').dirty || teacherForm.get('firstName').touched)\">First name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom1\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Last Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"lastName\" id=\"validationCustom1\"\n                                       type=\"text\" placeholder=\"Last Name\" required>\n                                <em class=\"error\" *ngIf=\"!teacherForm.get('lastName').valid && (teacherForm.get('lastName').dirty || teacherForm.get('lastName').touched)\">Last name is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom2\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Email Address</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control \" formControlName=\"email_id\" id=\"validationCustom2\"\n                                       type=\"email\" placeholder=\"Email\" required>\n                                <em class=\"error\" *ngIf=\"teacherForm.get('email_id').hasError('required') && (teacherForm.get('email_id').dirty || teacherForm.get('email_id').touched)\">Email is required</em>\n                                <em class=\"error\" *ngIf=\"teacherForm.get('email_id').hasError('pattern')\">Invalid Email-Id</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom3\" class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Contact Number</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"mobile\" id=\"validationCustom3\"\n                                       type=\"text\" placeholder=\"Contact Number\" (keypress)=\"numberPattern($event)\" maxlength=\"15\" minlength=\"10\" required=\"\">\n                                <em class=\"error\" *ngIf=\"!teacherForm.get('mobile').valid && (teacherForm.get('mobile').dirty || teacherForm.get('mobile').touched)\">Contact Number is required</em>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom4\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Teacher ID</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"teacherId\" id=\"validationCustom4\"\n                                       type=\"text\" placeholder=\"Teacher ID\">\n                                <em class=\"error\" *ngIf=\"!teacherForm.get('teacherId').valid && (teacherForm.get('teacherId').dirty || teacherForm.get('teacherId').touched)\">Teacher ID is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Grade</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <ng-multiselect-dropdown class=\"p-0\"\n                                                         [settings]=\"gradeSettings\"\n                                                         [data]=\"gradeData\"\n                                                         [formControlName]=\"'profile_grade'\"\n                                                         [placeholder]=\"'Select Grade'\">\n                                </ng-multiselect-dropdown>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Subject</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <ng-multiselect-dropdown class=\"p-0\"\n                                                         [settings]=\"subjectSettings\"\n                                                         [data]=\"subjectData\"\n                                                         [formControlName]=\"'profile_subject'\"\n                                                         [placeholder]=\"'Select Subject'\">\n                                </ng-multiselect-dropdown>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom4\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Designation</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"Designation\" id=\"validationCustom5\"\n                                       type=\"text\" placeholder=\"Designation\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\" style=\"position: relative;left: 9px\">\n                                Date Of Joining</label>\n                            <div class=\"col-xl-8 col-md-7 mb-0 form-group\">\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" name=\"mydate\" placeholder=\"mm/dd/yyyy\" (keypress)=\"datePattern($event)\" (click)=\"dp.toggleCalendar()\"\n                                           formControlName=\"doj\" angular-mydatepicker #dp=\"angular-mydatepicker\" [options]=\"myDpOptions\" (inputFieldChanged)=\"checkDoj($event)\"/>\n                                    <div class=\"input-group-append\">\n                                        <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\" (click)=\"dp.toggleCalendar()\">\n                                            <i class=\"fa fa-calendar-o\"></i>\n                                        </button>\n                                    </div>\n\n                                </div>\n                                <em class=\"error\" *ngIf=\"!teacherForm.get('doj').valid && (teacherForm.get('doj').dirty || teacherForm.get('doj').touched)\">Please enter Valid Date</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Date Of Birth</label>\n                            <div class=\"col-xl-8 col-md-7 mb-0 form-group\">\n                                <div class=\"input-group\">\n                                    <input class=\"form-control\" name=\"mydate\" placeholder=\"mm/dd/yyyy\" (keypress)=\"datePattern($event)\" (click)=\"dp1.toggleCalendar()\"\n                                           formControlName=\"dob\" angular-mydatepicker #dp1=\"angular-mydatepicker\" [options]=\"myDpOptions1\"/>\n                                    <div class=\"input-group-append\">\n                                        <button style=\"padding: 6px 18px\" type=\"button\" class=\"btn btn-primary\" (click)=\"dp1.toggleCalendar()\">\n                                            <i class=\"fa fa-calendar-o\"></i>\n                                        </button>\n                                    </div>\n\n                                </div>\n                                <em class=\"error\" *ngIf=\"!teacherForm.get('dob').valid && (teacherForm.get('dob').dirty || teacherForm.get('dob').touched)\">Date of Birth is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom7\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Gender</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control\" formControlName=\"gender\" id=\"validationCustom7\">\n                                    <option value=\"\">Select Gender</option>\n                                    <option value=\"male\">Male</option>\n                                    <option value=\"female\">Female</option>\n                                    <option value=\"n/a\">Do not want to disclose</option>\n                                </select>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom8\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Address 1</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"address1\" id=\"validationCustom8\"\n                                       type=\"text\" placeholder=\"Address1\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom9\" class=\"col-xl-3 col-md-4\" style=\"position: relative;left: 9px\">\n                                Address 2</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"address2\" id=\"validationCustom9\"\n                                       type=\"text\" placeholder=\"Address2\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom10\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                City</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"city\" id=\"validationCustom10\"\n                                       type=\"text\" placeholder=\"City\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                State</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <ng-select [items]=\"stateListData\"\n                                           bindLabel=\"name\"\n                                           bindValue=\"state_id\"\n                                           formControlName=\"state\"\n                                           placeholder=\"Please Select\"\n                                >\n                                </ng-select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Country</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <ng-select [items]=\"countryListData\"\n                                           bindLabel=\"name\"\n                                           bindValue=\"country_id\"\n                                           formControlName=\"country\"\n                                           placeholder=\"Please Select\"\n                                           (change)=\"stateList($event.country_id)\"\n                                >\n                                </ng-select>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom13\" class=\"col-xl-3 col-md-4\"><span style=\"visibility: hidden\">*</span>\n                                Zip </label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" multiple formControlName=\"postalCode\" id=\"validationCustom13\"\n                                       type=\"text\" placeholder=\"Enter Zip\" (keypress)=\"numberPattern($event)\" minlength=\"3\" maxlength=\"9\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\"><span>*</span>\n                                Status</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <select class=\"form-control\" formControlName=\"status\">\n                                    <option value=\"1\">Active</option>\n                                    <option value=\"2\">Suspended</option>\n<!--                                    <option *ngIf=\"type =='edit'\" value=\"3\">Disengaged</option>-->\n                                    <option *ngIf=\"type =='edit'\" value=\"4\">Deleted</option>\n                                </select>\n                                <em class=\"error\" *ngIf=\"!teacherForm.get('status').valid && (teacherForm.get('status').dirty || teacherForm.get('status').touched)\">status is required</em>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-xl-3 col-md-4\">Profile Photo</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input #myInput type=\"file\" class=\"custom-upload-input\" (change)=\"encodeImageFileAsURL($event)\" accept=\".png, .jpeg, .jpg\" >\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-xl-3 col-md-4\"  style=\"position: relative;left: 25%\">\n                                <div  class=\"files-list fit-image\" *ngFor=\"let file of imagepath;let i= index\">\n                                    <img *ngIf=\"imagepath != ''\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + file)\" alt=\"\">\n                                    <i *ngIf=\"imagepath != ''\" class=\"fa fa-times\" style=\"position: relative; right: 26px; bottom: 85px; cursor: pointer;  background: #eeeeee;\n       padding: 10px; border-radius: 45px;\" title=\"close\" (click)=\"deleteImg()\" ></i>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-12 mt-4\">\n                                <h3 style=\"color: #000; font-weight: 800;\">Permissions</h3>\n                                <hr>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 mb-3 d-flex\">\n                                <input [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"selectAllSelected\" [checked]=\"selectAllSelected\" type=\"checkbox\" (change)=\"selectAll($event)\" class=\"cursor\" id=\"selectAll\">\n                                <label class=\"cursor mb-0 ml-2\" for=\"selectAll\"><b>Select All</b></label>\n                            </div>\n                            <div class=\"col-3 px-0 mt-1 {{(first || last) && showContent ? '' : !showContent ? '' : 'content-design-bottom'}} {{last && showContent ? 'last_content_padding' : ''}}\" *ngFor=\"let data of teacherPermission; let first = first; let last = last\">\n                                <div class=\"{{first && showContent ? 'content-design' : first && !showContent ? 'content-design-first' : 'p-12'}} {{last && showContent ? 'content-design-bottom' : ''}}\">\n                                    <h4>{{data.group_name}}</h4>\n                                    <div class=\"d-flex my-2\" *ngFor=\"let permission of data.permission; let i = index\">\n                                        <input [checked]=\"permission.checked\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"permission.checked\"\n                                               (change)=\"checkAllPermissionSelected();checkContentFodler(permission, $event.target.checked)\" type=\"checkbox\" class=\"cursor\" id=\"{{permission.description}}{{i}}\">\n                                        <label class=\"cursor mb-0 ml-2\" for=\"{{permission.description}}{{i}}\">{{permission.description}}</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"col-12\" *ngIf=\"showContent\">\n                                <div class=\"card resource-link-card mb-0\" style=\"border: 1px solid #8f008a80; border-top-left-radius: 0;border-top-right-radius:0;border-top: 0\">\n                                    <div class=\"card-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-4 px-2 form-group mb-0\">\n                                                <label class=\"font-weight-bold mb-1\"><span class=\"mr-1 text-danger\">*</span>Subject</label>\n                                                <ng-multiselect-dropdown class=\"inbox-dropdown\"\n                                                        [settings]=\"subjectPermissionSettings\"\n                                                        [data]=\"subjectData\"\n                                                        [formControlName]=\"'subject'\"\n                                                        [placeholder]=\"'Select Subject'\">\n                                                </ng-multiselect-dropdown>\n                                                <em class=\"error\" *ngIf=\"!teacherForm.get('subject').valid && (teacherForm.get('subject').dirty || teacherForm.get('subject').touched)\">Subject is mandatory</em>\n                                            </div>\n\n                                            <div class=\"col-4 px-2 form-group\">\n                                                <label class=\"font-weight-bold mb-1\">Grade</label>\n                                                <ng-multiselect-dropdown class=\"inbox-dropdown\"\n                                                        [settings]=\"gradePermissionSettings\"\n                                                        [data]=\"gradeData\"\n                                                        [formControlName]=\"'grade'\"\n                                                        [placeholder]=\"'Select Grade'\">\n                                                </ng-multiselect-dropdown>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                    <div class=\"pull-right\">\n                        <button type=\"button\" (click)=\"addTeacher(type)\" class=\"btn btn-primary mt-3\">{{type == 'add' ? 'Save' : 'Update'}}</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Container-fluid Ends-->\n", styles: [".custom-upload-input {\n  color: transparent;\n}\n.custom-upload-input::-webkit-file-upload-button {\n  visibility: hidden;\n}\n.custom-upload-input::before {\n  content: 'Choose files';\n  color: black;\n  display: inline-block;\n  background: #1d6aa5;\n  border-radius: 3px;\n  padding: 12px 15px;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 11pt;\n  color: #fff;\n}\n.custom-upload-input:hover::before {\n  border-color: black;\n}\n.custom-upload-input:active {\n  outline: 0;\n}\n.custom-upload-input:active::before {\n  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n}\n\n.content-design {\n  margin: 0 0 0 15px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border: 1px solid #8f008a80;\n  border-bottom: 0 !important;\n  padding: 12px;\n  background: #fffbfe;\n}\n\n.content-design-first {\n  margin-left: 15px;\n  padding: 8px;\n}\n\n.content-design-bottom {\n  border-bottom: 1px solid #8f008a80;\n}\n\n.content-design-bottom {\n  border-bottom: 1px solid #8f008a80;\n}\n\n.last_content_padding {\n  padding-right: 15px !important;\n}\n\n.p-12 {\n  padding: 12px;\n}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FormBuilder }, { type: i3.CommonDataService }, { type: i4.ToastrService }, { type: i5.NewsubjectService }, { type: i6.AuthService }, { type: i1.Router }, { type: i7.ValidationService }, { type: i8.TeacherService }, { type: i9.CommonService }, { type: i10.SchoolService }, { type: i11.DomSanitizer }, { type: i12.StudentService }, { type: i13.ConfigurationService }, { type: i14.DatePipe }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddTeacherComponent, { className: "AddTeacherComponent" }); })();
//# sourceMappingURL=add-Teacher.component.js.map