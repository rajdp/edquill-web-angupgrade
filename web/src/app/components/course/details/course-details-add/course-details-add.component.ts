import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {urls} from '../../../../shared/utils/urls';
import {DomSanitizer} from '@angular/platform-browser';
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';
import {AuthService} from '../../../../shared/service/auth.service';
import {ValidationService} from '../../../../shared/service/validation.service';
import {EnvironmentService} from '../../../../environment.service';
import {dateOptions} from '../../../../shared/data/config';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-course-details-add',
    templateUrl: './course-details-add.component.html',
    styleUrls: ['./course-details-add.component.scss']
})

export class CourseDetailsAddComponent implements OnInit {

    CourseDetails: FormGroup;
    public type = 'add';
    public courseEditDetails: any;
    public categoryListData = [];
    public subjectListData = [];
    public gradeListData = [];
    public imagePath = '';
    public webhost: any;
    public recordBase64Url: any;
    public isWizardMode = false;
    private categoriesLoaded = false;
    private subjectsLoaded = false;
    public courseStatus = [{id: 'D', value: 'Draft'}, {id: 'P', value: 'Ready for review'}, {
        id: 'A',
        value: 'Approved'
    },
        {id: 'R', value: 'Rework'}, {id: 'C', value: 'Cancelled'}];
    myDpOptions: IAngularMyDpOptions = {
        dateRange: false,
        firstDayOfWeek: 'su',
        dateFormat: dateOptions.pickerFormat
    };
    public selectedToogleStatus = '-';
    protected previewFromArrayValue = [];
    myDpOptions1: IAngularMyDpOptions = {
        dateRange: false,
        firstDayOfWeek: 'su',
        dateFormat: dateOptions.pickerFormat
    };

    myDpOptions2: IAngularMyDpOptions = {
        dateRange: false,
        firstDayOfWeek: 'su',
        dateFormat: dateOptions.pickerFormat
    };

    myDpOptions3: IAngularMyDpOptions = {
        dateRange: false,
        firstDayOfWeek: 'su',
        dateFormat: dateOptions.pickerFormat
    };


    myDpOptions4: IAngularMyDpOptions = {
        dateRange: false,
        firstDayOfWeek: 'su',
        dateFormat: dateOptions.pickerFormat
    };

    myDpOptions5: IAngularMyDpOptions = {
        dateRange: false,
        firstDayOfWeek: 'su',
        dateFormat: dateOptions.pickerFormat
    };
    public errorMessage = '';
    public maximumCount = 100;
    @ViewChild('myInput') myInputVariable: ElementRef<any>;
    public fullSubjectList: any = [];
    public emittedEditorValue = {
        short_description: '',
        description: '',
        overview_content: '',
        course_content: '',
        prerequisites: '',
        other_details: '',
        lessons: ''
    };
    private modalRef: NgbModalRef;

    @ViewChild('scheduleConfirmation', {static: true}) scheduleConfirmation: TemplateRef<any>;


    constructor(public auth: AuthService, public fb: FormBuilder, public datepipe: DatePipe, public route: ActivatedRoute,
                public router: Router, public toastr: ToastrService, public env: EnvironmentService, public sanitizer: DomSanitizer,
                public validatorService: ValidationService, public modalService: NgbModal) {
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        
        // Check if coming from wizard
        this.isWizardMode = this.auth.getSessionData('wizard_return') === 'true';
        this.webhost = this.env.imgUrl;
        this.init();
        this.declareFormGroup();
    }

    ngOnInit() {
        setTimeout(() => {
            if (this.type == 'edit') {
                this.maximumCount = parseInt(this.auth.getSessionData('course_detail_maximumCount'));
                this.patchCourseDetails();
            } else {
                this.maximumCount = parseInt(this.auth.getSessionData('course_detail_maximumCount')) + 1;
                this.CourseDetails.controls.display_order.patchValue(this.maximumCount);
            }
        }, 200);
    }

    init() {
      this.getCategoryList();
      this.getGradeList();
      this.getSubjectList();
    }

    declareFormGroup() {

        this.CourseDetails = this.fb.group({
            course_id: '',
            course_name: ['', Validators.required],
            description: '',
            short_description: ['', Validators.required],
            category_id: [[], Validators.required],
            subject_id: [[], Validators.required],
            grade_id: [[]],
            lessons: '',
            overview_content: '',
            course_content: '',
            prerequisites: '',
            other_details: '',
            documentation_requirements: '',
            path: '',
            fees: '',
            author: '',
            contact_info: '',
            status: ['A', Validators.required],
            certified_course: false,
            multiple_schedule: true,
            is_popular: false,
            is_exclusive: false,
            is_webinar_event: false,
            // redirect_url: '',
            startDate: ['', Validators.required],
            endDate: '',
            registartionStartDate: [''],
            registartionEndDate: [''],
            courseStartDate: [''],
            courseEndDate: [''],
            course_type: [''],
            discount: '',
            actual_amount: '',
            slot_available: '',
            paid_fee_yes: [true, Validators.required],
            paid_fee_no: [false, Validators.required],
            // button_name: '',
            display_order: ['']
        });
    }

    numberValidate(event) {
        this.validatorService.numberOnlyValidate(event);
    }

    editorValue(event, forcontrolName) {
        this.CourseDetails.controls[forcontrolName].patchValue(event.content);
    }

    showErrorMessage() {
        const maximumAllowedNumber = this.maximumCount;
        const orderValue = parseInt(this.CourseDetails.controls.display_order.value);
        if (this.CourseDetails.controls.display_order.value == 0 && this.CourseDetails.controls.display_order.value != '') {
            this.errorMessage = 'Display Order number should not be zero';
        } else if (this.CourseDetails.controls.display_order.value != '') {
            this.errorMessage = orderValue > maximumAllowedNumber ?
                'Display order number should not be greater than' + ' ' + maximumAllowedNumber : '';
        } else if (this.CourseDetails.controls.display_order.value == '') {
            this.errorMessage = '';
        }
        return this.errorMessage;
    }

    checkbox(selectedFormControl, otherFormControl) {
        const paidSelection = this.CourseDetails.controls[selectedFormControl].value;
        this.CourseDetails.controls[otherFormControl].patchValue(!paidSelection);
        console.log(this.CourseDetails.controls[otherFormControl].value, 'other');
        console.log(this.CourseDetails.controls[selectedFormControl].value, 'selected');
        this.updateScheduleType(this.selectedToogleStatus, 'checkBox');
    }

    confirmScheduleChange(type) {
        if (this.type == 'edit' && (type == 'Yes' || type == 'No')) {
            this.modalRef = this.modalService.open(this.scheduleConfirmation);
        } else {
            this.updateScheduleType(type);
        }
    }

    close() {
        this.modalRef.close();
    }

    updateScheduleType(type, checkBoxType = '') {
        this.selectedToogleStatus = type;
        const formArrayValue = checkBoxType == '' ? ['course_type'] : [];
        const paidArrayValue = this.CourseDetails.controls.paid_fee_yes.value ?
            this.selectedToogleStatus == 'Yes' ? ['fees'] : ['fees', 'discount', 'actual_amount'] : [];
        console.log(paidArrayValue, 'padiArra');
        console.log(formArrayValue, 'formArray');
        const finalFormArrayValue = [...formArrayValue, ...paidArrayValue];
        console.log(finalFormArrayValue, 'finalArra');
        finalFormArrayValue.forEach((formcontrolName) => {
            if (this.selectedToogleStatus == 'No') {
                this.CourseDetails.controls[formcontrolName].setValidators([Validators.required]);
                this.CourseDetails.controls[formcontrolName].updateValueAndValidity();
            } else if (this.selectedToogleStatus == 'Yes') {
                this.CourseDetails.controls[formcontrolName].clearValidators();
                this.CourseDetails.controls[formcontrolName].updateValueAndValidity();
            }
        });
        if (this.selectedToogleStatus == 'No' && this.CourseDetails.controls.paid_fee_yes.value) {
            this.previewFromArrayValue = finalFormArrayValue;
        } else if (this.selectedToogleStatus == 'No' && !this.CourseDetails.controls.paid_fee_yes.value && this.previewFromArrayValue.length != 0) {
            this.previewFromArrayValue.forEach((formcontrolName) => {
                this.CourseDetails.controls[formcontrolName].clearValidators();
                this.CourseDetails.controls[formcontrolName].updateValueAndValidity();
            });
            this.previewFromArrayValue = [];
        }
    }

    onDateChanged(event: IMyDateModel, endDateFormcontrol): void {

        const dateObject = this.validatorService.validateEndDate(event, endDateFormcontrol, this.CourseDetails);
        console.log(dateObject, 'dateObjecte');
        if (endDateFormcontrol == 'courseEndDate') {
            this.myDpOptions5 = {};
            this.myDpOptions5 = dateObject;
        } else if (endDateFormcontrol == 'registartionEndDate') {
            this.myDpOptions3 = {};
            this.myDpOptions3 = dateObject;
        } else {
            this.myDpOptions1 = {};
            this.myDpOptions1 = dateObject;
        }
    }

    numberValidation(event) {
        this.validatorService.numberValidate(event);
    }

    calculateAmount() {
        const amount = this.CourseDetails.controls.fees.value - this.CourseDetails.controls.discount.value;
        this.CourseDetails.controls.actual_amount.patchValue(amount);
    }

    categoryChanged(data) {
        console.log(data, 'category');
        this.updateSubjectList(data);
    }

    updateSubjectList(data, type = '') {
        let subject = [];
        this.categoryListData.forEach((category) => {
            data.forEach((items) => {
                if ((type != '' && category.category_id == items) || (type == '' && category.category_id == items.category_id)) {
                    subject = [...category.subject_id, ...subject];
                }
            });
        });
        subject = [...new Set(subject)];
        const fullSubjectList = JSON.parse(this.fullSubjectList);
        if (subject.length != 0) {
            this.subjectListData = [];
            fullSubjectList.forEach((subjectData) => {
                if (subject.includes(subjectData.subject_id)) {
                    this.subjectListData.push(subjectData);
                }
            });
        } else {
            this.subjectListData = fullSubjectList;
        }
        if (!this.subjectListData.some(code => code.subject_id == this.CourseDetails.controls.subject_id.value)) {
            this.CourseDetails.controls.subject_id.patchValue([]);
        }
    }

    getCategoryList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            type: 'active',
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.categoryList).subscribe(
            (successData) => {
                this.categoryListSuccess(successData);
            },
            (error) => {
                console.error(error, ' error');
            }
        );
    }

    categoryListSuccess(successData) {
        this.categoryListData = successData.IsSuccess? successData.ResponseObject : [];
        console.log(this.maximumCount, 'maximumCount');
        this.categoriesLoaded = true;
        this.checkAndFilterSubjects();
    }

    getSubjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.subjectList).subscribe(
            (successData) => {
                this.subjectListSuccess(successData);
            },
            (error) => {
                console.error(error, ' error');
            }
        );
    }

    subjectListSuccess(successData) {
        this.subjectListData = successData.IsSuccess ? successData.ResponseObject : [];
        this.fullSubjectList = successData.IsSuccess ? JSON.stringify(successData.ResponseObject) : JSON.stringify([]);
        this.subjectsLoaded = true;
        this.checkAndFilterSubjects();
    }

    checkAndFilterSubjects() {
        // Only filter subjects when both categories and subjects are loaded
        if (this.type == 'edit' && this.categoriesLoaded && this.subjectsLoaded) {
            this.courseEditDetails = JSON.parse(sessionStorage.getItem('getCourseDetails'));
            if (this.courseEditDetails && this.courseEditDetails.category_id) {
                this.updateSubjectList(this.courseEditDetails.category_id, 'edit');
            }
        }
    }

    getGradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            type: 'active',
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.getGradeList).subscribe(
            (successData) => {
                this.gradeListSuccess(successData);
            },
            (error) => {
                console.error(error, ' error');
            }
        );
    }

    gradeListSuccess(successData) {
        this.gradeListData = successData.IsSuccess ? successData.ResponseObject : [];
    }

    patchCourseDetails() {
        this.courseEditDetails = JSON.parse(sessionStorage.getItem('getCourseDetails'));
        console.log(this.courseEditDetails, 'editCourseDetails');
        this.CourseDetails.controls.course_id.patchValue(this.courseEditDetails.course_id);
        this.CourseDetails.controls.course_name.patchValue(this.courseEditDetails.course_name);
        this.emittedEditorValue = {
            short_description: this.courseEditDetails.short_description,
            description: this.courseEditDetails.description,
            overview_content: this.courseEditDetails.overview_content,
            course_content: this.courseEditDetails.course_content,
            prerequisites: this.courseEditDetails.prerequisites,
            other_details: this.courseEditDetails.other_details,
            lessons: this.courseEditDetails.lessons
        };
        this.CourseDetails.controls.description.patchValue(this.courseEditDetails.description);
        this.CourseDetails.controls.short_description.patchValue(this.courseEditDetails.short_description);
        this.CourseDetails.controls.subject_id.patchValue(this.courseEditDetails.subject_id.length != 0 ? this.courseEditDetails.subject_id[0] : []);
        this.CourseDetails.controls.contact_info.patchValue(this.courseEditDetails.contact_info ?? '');
        this.CourseDetails.controls.documentation_requirements.patchValue(this.courseEditDetails.documentation_requirements ?? '');
        this.CourseDetails.controls.category_id.patchValue(this.courseEditDetails.category_id);
        this.CourseDetails.controls.grade_id.patchValue(this.courseEditDetails.grade_id.length != 0 ? this.courseEditDetails.grade_id : []);
        this.CourseDetails.controls.path.patchValue(this.courseEditDetails.path);
        this.CourseDetails.controls.fees.patchValue(this.courseEditDetails.fees);
        this.CourseDetails.controls.author.patchValue(this.courseEditDetails.author);
        this.CourseDetails.controls.status.patchValue(this.courseEditDetails.status);
        this.CourseDetails.controls.lessons.patchValue(this.courseEditDetails.lessons);
        this.CourseDetails.controls.overview_content.patchValue(this.courseEditDetails.overview_content);
        this.CourseDetails.controls.course_content.patchValue(this.courseEditDetails.course_content);
        this.CourseDetails.controls.prerequisites.patchValue(this.courseEditDetails.prerequisites);
        this.CourseDetails.controls.other_details.patchValue(this.courseEditDetails.other_details);
        this.CourseDetails.controls.overview_content.patchValue(this.courseEditDetails.overview_content);
        this.CourseDetails.controls.display_order.patchValue(this.courseEditDetails.display_order ?? '');
        this.imagePath = this.courseEditDetails.path;
        this.CourseDetails.controls.certified_course.patchValue(this.courseEditDetails.certified_course == 'Y');
        this.CourseDetails.controls.multiple_schedule.patchValue(this.courseEditDetails.multiple_schedule == 'Y');
        this.selectedToogleStatus = this.courseEditDetails.schedule == '1' ? 'Yes' : 'No';
        this.CourseDetails.controls.is_popular.patchValue(this.courseEditDetails.is_popular == 'Y');
        this.CourseDetails.controls.is_exclusive.patchValue(this.courseEditDetails.is_exclusive == 'Y');
        this.CourseDetails.controls.is_webinar_event.patchValue(this.courseEditDetails?.event == '1');
        // this.CourseDetails.controls.redirect_url.patchValue(this.courseEditDetails.redirect_url);
        // this.CourseDetails.controls.button_name.patchValue(this.courseEditDetails.button_name ?? '');
        this.CourseDetails.controls.paid_fee_yes.patchValue(this.courseEditDetails.fees != 0);
        this.CourseDetails.controls.course_type.patchValue(this.selectedToogleStatus == 'No' ? this.courseEditDetails.course_type : '');
        this.CourseDetails.controls.slot_available.patchValue(this.selectedToogleStatus == 'No' ? this.courseEditDetails.slot_available : '');
        this.CourseDetails.controls.discount.patchValue(this.selectedToogleStatus == 'No' ? this.courseEditDetails.discount_amount : 0);
        this.CourseDetails.controls.actual_amount.patchValue(this.selectedToogleStatus == 'No' ? this.courseEditDetails.cost : 0);
        if (this.selectedToogleStatus == 'No') {
            this.patchDate('registartionStartDate', this.courseEditDetails.registration_start_date ?? '', 'startDate', 'register');
            this.patchDate('registartionEndDate', this.courseEditDetails.registration_end_date ?? '', '', 'register');
            this.patchDate('courseStartDate', this.courseEditDetails.course_start_date ?? '', 'startDate', 'course');
            this.patchDate('courseEndDate', this.courseEditDetails.course_end_date ?? '', '', 'course');
        }
        if (this.courseEditDetails.validity_start_date != '0000-00-00' && this.courseEditDetails.validity_start_date
            && this.courseEditDetails.validity_start_date != '') {
            const rsd = this.courseEditDetails.validity_start_date.split('-');
            const rsdObject: IMyDateModel = {
                isRange: false,
                singleDate: {jsDate: new Date(parseInt(rsd[0]), parseInt(String(rsd[1] - 1)), parseInt(rsd[2]))},
                dateRange: null
            };
            this.CourseDetails.controls.startDate.patchValue(rsdObject);
            this.myDpOptions1 = {};
            this.myDpOptions1 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su',
                disableUntil: {
                    year: parseInt(rsd[0]),
                    month: parseInt(rsd[1]),
                    day: parseInt(rsd[2]) - 1
                },
            };
            console.log(dateOptions.pickerFormat, 'picke');
        } else {
            this.CourseDetails.controls.startDate.patchValue('');
        }

        if (this.courseEditDetails.validity_end_date != '0000-00-00' && this.courseEditDetails.validity_end_date
            && this.courseEditDetails.validity_end_date != '') {
            const rsd = this.courseEditDetails.validity_end_date.split('-');
            const rsdObject: IMyDateModel = {
                isRange: false,
                singleDate: {jsDate: new Date(parseInt(rsd[0]), parseInt(String(rsd[1] - 1)), parseInt(rsd[2]))},
                dateRange: null
            };
            this.CourseDetails.controls.endDate.patchValue(rsdObject);
        } else {
            this.CourseDetails.controls.endDate.patchValue('');
        }
    }

    patchDate(formControlName, date, type, calledFor) {
        if (date != '0000-00-00' && date != '') {
            const splitedDate = date.split('-');
            const splitedDateObject: IMyDateModel = {
                isRange: false,
                // singleDate: {jsDate: new Date(parseInt(splitedDate[0]), parseInt(String(splitedDate[1] == 1 ? 1 : splitedDate[1] - 1)), parseInt(splitedDate[2]))},
                singleDate: {jsDate: new Date(parseInt(splitedDate[0]), parseInt(String(splitedDate[1] - 1)), parseInt(splitedDate[2]))},
                dateRange: null
            };
            this.CourseDetails.controls[formControlName].patchValue(splitedDateObject);
            if (type == 'startDate') {
                const dateOption = {
                    dateRange: false,
                    dateFormat: dateOptions.pickerFormat,
                    firstDayOfWeek: 'su',
                    disableUntil: {
                        year: parseInt(splitedDate[0]),
                        month: parseInt(splitedDate[1]),
                        day: parseInt(splitedDate[2]) - 1
                    },
                };

                if (calledFor == 'course') {
                    this.myDpOptions5 = {};
                    this.myDpOptions5 = dateOption;
                } else if (calledFor == 'register') {
                    this.myDpOptions3 = {};
                    this.myDpOptions3 = dateOption;
                }
            }
        } else {
            this.CourseDetails.controls[formControlName].patchValue('');
        }
    }

    encodeImageFileAsURL(event: any) {
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const imgDetails = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event: any) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                const pic = imgDetails.type.split('/');

                if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] == 'jpg' || pic[1] === 'webp') {
                    this.onUploadComplete(getUrl, imgDetails);
                } else {
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
            uploadtype: 'course'
        };
        this.auth.postService(data, urls.fileUpload).subscribe((successData) => {
            this.uploadSuccess(successData);
        }, error => {
            console.log(error, 'error');
        });
    }

    uploadSuccess(successData) {
        if (successData.IsSuccess) {
            this.deleteImg();
            this.toastr.success(successData.ResponseObject.message);
            setTimeout(() => {
                this.imagePath = successData.ResponseObject.imagepath[0]?.original_image_url;
            }, 0);
        }
    }

    deleteImg() {
        this.imagePath = '';
        this.myInputVariable.nativeElement.value = '';
    }

    disableEndDateCondition(startDateFormControl, endDateFormControl) {
        const startDate = this.CourseDetails.controls[startDateFormControl].value ?? '';
        if (startDate == '') {
            this.CourseDetails.controls[endDateFormControl].disable({onlySelf: true});
        } else {
            this.CourseDetails.controls[endDateFormControl].enable({onlySelf: true});
        }
        return startDate == '';
    }

    addOrEditCourseDetails() {
        console.log(this.CourseDetails.valid, 'formValidation');
        console.log(this.imagePath != '', 'imagePath');
        Object.keys(this.CourseDetails.controls).forEach(key => {
            if (this.CourseDetails.get(key).errors) {
                console.log(this.CourseDetails.get(key).errors, key, 'ddadsas');
            }
        });
        if (this.CourseDetails.valid && this.imagePath != '') {
            if (this.errorMessage == '') {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.auth.getSessionData('school_id'),
                    course_name: this.CourseDetails.controls.course_name.value ? this.CourseDetails.controls.course_name.value : '',
                    description: this.CourseDetails.controls.description.value ? this.CourseDetails.controls.description.value : '',
                    short_description: this.CourseDetails.controls.short_description.value ? this.CourseDetails.controls.short_description.value : '',
                    overview_content: this.CourseDetails.controls.overview_content.value ? this.CourseDetails.controls.overview_content.value : '',
                    prerequisites: this.CourseDetails.controls.prerequisites.value ? this.CourseDetails.controls.prerequisites.value : '',
                    course_content: this.CourseDetails.controls.course_content.value ? this.CourseDetails.controls.course_content.value : '',
                    other_details: this.CourseDetails.controls.other_details.value ? this.CourseDetails.controls.other_details.value : '',
                    documentation_requirements: this.CourseDetails.controls.documentation_requirements.value ? this.CourseDetails.controls.documentation_requirements.value : '',
                    author: this.CourseDetails.controls.author.value ? this.CourseDetails.controls.author.value : '',
                    lessons: this.CourseDetails.controls.lessons.value ? this.CourseDetails.controls.lessons.value : '',
                    path: this.imagePath,
                    category_id: this.CourseDetails.controls.category_id.value,
                    display_order: this.CourseDetails.controls.display_order.value,
                    subject_id: [this.CourseDetails.controls.subject_id.value],
                    grade_id: this.CourseDetails.controls.grade_id.value ? this.CourseDetails.controls.grade_id.value : [],
                    status: this.CourseDetails.controls.status.value,
                    course_id: this.type == 'edit' ? this.courseEditDetails.course_id : '',
                    fees: this.CourseDetails.controls.paid_fee_yes.value ? this.CourseDetails.controls.fees.value : 0,
                    certified_course: this.CourseDetails.controls.certified_course.value == false ? 'N' : 'Y',
                    multiple_schedule: this.CourseDetails.controls.multiple_schedule.value == false ? 'N' : 'Y',
                    schedule: this.selectedToogleStatus == 'Yes' ? '1' : '0',
                    is_popular: this.CourseDetails.controls.is_popular.value == false ? 'N' : 'Y',
                    is_exclusive: this.CourseDetails.controls.is_exclusive.value == false ? 'N' : 'Y',
                    // redirect_url: this.CourseDetails.controls.redirect_url.value,
                    redirect_url: '',
                    // button_name: this.CourseDetails.controls.button_name.value,
                    button_name: '',
                    validity_start_date: this.CourseDetails.controls.startDate.value != '' ? this.datepipe.transform(this.CourseDetails.controls.startDate.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                    validity_end_date: this.CourseDetails.controls.endDate.value != '' ? this.datepipe.transform(this.CourseDetails.controls.endDate.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                    course_start_date: this.CourseDetails.controls.courseStartDate.value != '' ? this.datepipe.transform(this.CourseDetails.controls.courseStartDate.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                    course_end_date: this.CourseDetails.controls.courseEndDate.value != '' ? this.datepipe.transform(this.CourseDetails.controls.courseEndDate.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                    registration_start_date: this.CourseDetails.controls.registartionStartDate.value != '' ? this.datepipe.transform(this.CourseDetails.controls.registartionStartDate.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                    registration_end_date: this.CourseDetails.controls.registartionEndDate.value != '' ? this.datepipe.transform(this.CourseDetails.controls.registartionEndDate.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                    course_type: this.selectedToogleStatus == 'No' ? this.CourseDetails.controls.course_type.value : '',
                    cost: this.selectedToogleStatus == 'No' ? this.CourseDetails.controls.actual_amount.value != '' ? this.CourseDetails.controls.actual_amount.value : 0 : 0,
                    discount: this.selectedToogleStatus == 'No' ? this.CourseDetails.controls.discount.value != '' ? this.CourseDetails.controls.discount.value : 0 : 0,
                    total_slots: this.selectedToogleStatus == 'No' ? this.CourseDetails.controls.slot_available.value : '',
                    is_paid: this.CourseDetails.controls.paid_fee_yes.value ? '1' : '0',
                  event: this.CourseDetails.controls.is_webinar_event.value == false ? '0' : '1',
                  contact_info: this.CourseDetails.controls.contact_info.value
                };
                console.log(data, 'data');
                const url = this.type == 'add' ? urls.addCourseDetails : urls.updateCourseDetails;
                this.auth.postService(data, url).subscribe(
                    (successData) => {
                        this.addCourseSuccess(successData);
                    },
                    (error) => {
                        console.error(error, 'booking error');
                    }
                );
            } else {
                this.toastr.error('Please enter valid display order number');
            }
        } else {
            this.validatorService.validateAllFormFields(this.CourseDetails);
            this.toastr.error('Please fill all Mandatory fields');
        }
    }

    addCourseSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            
            // Return to wizard if in wizard mode
            if (this.isWizardMode) {
                this.router.navigate(['/course/wizard']);
            } else {
                this.router.navigate(['/course/details/list']);
            }
        } else {
            this.toastr.error(successData.ErrorObject);
        }
    }

    returnToWizard() {
        this.router.navigate(['/course/wizard']);
    }
}
