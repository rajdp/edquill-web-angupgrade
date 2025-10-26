import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/service/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ActivatedRoute} from '@angular/router';
import {TeacherService} from '../../../shared/service/teacher.service';
import {CommonService} from '../../../shared/service/common.service';
import {SchoolService} from '../../../shared/service/School.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {IAngularMyDpOptions, IMyDateModel} from '@nodro7/angular-mydatepicker';
import {DatePipe} from '@angular/common';
import {StudentService} from '../../../shared/service/student.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {dateOptions, timeZone} from '../../../shared/data/config';
import {IDropdownSettings} from 'ng-multiselect-dropdown/multiselect.model';

@Component({
    selector: 'app-add-teacher',
    templateUrl: './add-Teacher.component.html',
    styleUrls: ['./add-Teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {
    public setDate = new Date().toLocaleString('en-US', {timeZone: timeZone.location});
    myDpOptions: IAngularMyDpOptions = {
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
    myDpOptions1: IAngularMyDpOptions = {
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
    public teacherForm: FormGroup;
    public type: any;
    public editData: any;
    public recordBase64Url: any;
    public stateListData: any;
    public countryListData: any;
    public imagepath: any;
    public imagepaththumb: any;
    public schoolData: any;
    public webhost: any;
    public doj: any;
    public dob: any;
    public teacherPermission: any;
    public gradeData: any = [];
    public subjectData: any = [];
    public schoolId: any;
    public allowSelect: boolean;
    public subjectSettings: IDropdownSettings = {};
    public gradeSettings: IDropdownSettings = {};
    public subjectPermissionSettings: IDropdownSettings = {};
    public gradePermissionSettings: IDropdownSettings = {};
    public showContent = false;
    public selectAllSelected = false;

    @ViewChild('myInput') myInputVariable: ElementRef<any>;

    constructor(public route: ActivatedRoute, private formBuilder: FormBuilder,
                public commondata: CommonDataService, private toastr: ToastrService, public newSubject: NewsubjectService,
                public auth: AuthService, public router: Router, public validationService: ValidationService, public teacherService: TeacherService,
                public common: CommonService, public brandservices: SchoolService, public sanitizer: DomSanitizer, public student: StudentService, public config: ConfigurationService, public datePipe: DatePipe) {
        this.webhost = this.config.getimgUrl();
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        if (this.type == 'edit') {
            this.editData = JSON.parse(this.auth.getSessionData('editTeacher'));
        }
        this.gradeSettings = this.updateDropDownSettings('grade_id', 'grade_name', 'Search Grade', 'No grade available', 8);
        this.subjectSettings = this.updateDropDownSettings('subject_id', 'subject_name', 'Search Subject', 'No subject available',  8);
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
            } else {
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
                const dobObject: IMyDateModel = {
                    isRange: false,
                    singleDate: {jsDate: new Date(parseInt(dob[0]), parseInt(dob[1]) - 1, parseInt(dob[2]))},
                    dateRange: null
                };
                this.teacherForm.controls.doj.patchValue(dobObject);
            } else {
                this.teacherForm.controls.doj.patchValue(null);
            }
            if (this.editData.birthday != '0000-00-00' && this.editData.birthday != null && this.editData.birthday != '') {
                const dob1 = this.editData.birthday.split('-');
                const dobObject1: IMyDateModel = {
                    isRange: false,
                    singleDate: {jsDate: new Date(parseInt(dob1[0]), parseInt(dob1[1]) - 1, parseInt(dob1[2]))},
                    dateRange: null
                };
                this.teacherForm.controls.dob.patchValue(dobObject1);
            } else {
                this.teacherForm.controls.dob.patchValue(null);
            }
            if (this.editData.profile_url != '') {
                this.imagepath.push(this.editData.profile_url);
            }
            this.imagepaththumb.push(this.editData.profile_thumb_url);
        } else {
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
            } else {
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

    public datePattern(event: any) {
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
                    },
                    (error) => {
                        this.addTeacherFailure(error);
                    });
            } else if (value == 'edit') {
                data['selected_user_id'] = this.editData.user_id;
                this.teacherService.teacherEdit(data).subscribe((successData) => {
                        this.addTeacherSuccess(successData);
                    },
                    (error) => {
                        this.addTeacherFailure(error);
                    });
            }
        } else {
            this.validationService.validateAllFormFields(this.teacherForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }

    addTeacherSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success(successData.ResponseObject, 'Teacher');
            this.router.navigate(['/users/user-list']);
        } else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, '');
        }
    }

    addTeacherFailure(error) {
        console.log(error, 'error');
        this.commondata.showLoader(false);
        this.toastr.error(error.ResponseObject, 'Teacher');
    }

    public numberPattern(event: any) {
        this.validationService.numberValidate1(event);
    }

    encodeImageFileAsURL(event: any) {
        for (let i = 0; i < event.target.files.length; i++) {
            const imgDetails = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event: any) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                const pic = imgDetails.type.split('/');
                if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] == 'jpg') {
                    this.onUploadKYCFinished(getUrl, imgDetails);
                } else {
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
        this.common.fileUpload(data).subscribe(
            (successData) => {
                this.uploadSuccess(successData);
            },
            (error) => {
                this.commondata.showLoader(false);
                console.error(error, 'error_fileUpload');
            }
        );
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
        } else {
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
            },
            (error) => {
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
            },
            (error) => {
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
            },
            (error) => {
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
        } else {
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
        } else {
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
            },
            (error) => {
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
            })
        );
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
        } else {
            this.teacherForm.controls.subject.clearValidators();
            this.teacherForm.controls.subject.setValidators(null);
            this.teacherForm.controls.subject.updateValueAndValidity();
        }
    }
}

