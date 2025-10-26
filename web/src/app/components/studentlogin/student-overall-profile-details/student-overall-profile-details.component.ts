import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {CategoryService} from '../../../shared/service/category.service';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {StudentService} from '../../../shared/service/student.service';
import {ValidationService} from '../../../shared/service/validation.service';
import {IAngularMyDpOptions} from '@nodro7/angular-mydatepicker';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {NavService} from '../../../shared/service/nav.service';
import {CreatorService} from '../../../shared/service/creator.service';
import {ClassService} from '../../../shared/service/class.service';
import {DatePipe} from '@angular/common';
import {timeZone} from '../../../shared/data/config';

@Component({
    selector: 'app-student-overall-profile-details',
    templateUrl: './student-overall-profile-details.component.html',
    styleUrls: ['./student-overall-profile-details.component.scss']
})

export class StudentOverallProfileDetailsComponent implements OnInit, OnDestroy {

    public dobDpOtions: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: 'mm/dd/yyyy',
        firstDayOfWeek: 'su',
        disableSince: {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate() + 1
        },
    };
    public myDpOptions2: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: 'mm/dd/yyyy',
        firstDayOfWeek: 'su'
    };
    public studentId: any;
    public studentProfileDetails = [];
    public imgUrl: any;
    public gradeData = [];
    public studentTableEdit = false;
    public imagepath: any[];
    public imagepaththumb: any[];
    public selectedParent = 1;
    public parentTableEdit = false;
    public studentForm: FormGroup;
    public stateListData: any = [];
    public countryListData = [];
    public studentFullClassListData = [];
    public modalRef: NgbModalRef;
    public classData: any;
    public attendanceListData = [];
    public classList = [];
    public selectedClassId = '';
    public serviceCalled = false;
    @ViewChild('viewoveralldetails') viewoveralldetails: TemplateRef<any>;
    public voidClassData: any = {};
    public voidClassIndex: any = 0;
    @ViewChild('voidClass') voidClass: TemplateRef<any>;
    public currentDate: any;
    public setDate = new Date().toLocaleString('en-US', {timeZone: timeZone.location});

    constructor(public auth: AuthService, public category: CategoryService, public confi: ConfigurationService, public toastr: ToastrService, private modalService: NgbModal,
                public student: StudentService, public validation: ValidationService, public common: CommonService, public classes: ClassService,
                private formBuilder: FormBuilder, public router: Router, public navServices: NavService,
                public creatorService: CreatorService, public datePipe: DatePipe) {
        this.studentId = JSON.parse(this.auth.getSessionData('student-profile-details')).user_id;
        this.studentDetails();
        this.studentForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email_id: ['', Validators.required],
            gender: [''],
            dob: [''],
            grade: ['', Validators.required],
            studentid: [''],
            mobile: [''],
            mobile1: [''],
            mobile2: [''],
            status: ['', Validators.required],
            registration_date: [''],
            parent1first_name: [''],
            parent2first_name: [''],
            parent1last_name: [''],
            parent2last_name: [''],
            parent1email_id1: [''],
            parent2email_id1: [''],
            parent1address1: '',
            parent2address1: '',
            parent1address2: '',
            parent2address2: '',
            parent1city: '',
            parent2city: '',
            parent1state: '',
            parent2state: '',
            parent1country: '',
            parent2country: '',

        });
        this.imgUrl = this.confi.getimgUrl();
        console.log(this.studentId, 'studentId');
        const date = new Date(this.setDate);
        this.currentDate = this.datePipe.transform(date, 'dd-MM-yyyy');
    }

    ngOnDestroy(): void {
        this.creatorService.changeViewList(false);
        this.navServices.collapseSidebar = false;
    }

    ngOnInit(): void {
        this.creatorService.changeViewList(true);
        this.navServices.collapseSidebar = true;
    }

    numberPattern(event: any) {
        this.validation.numberValidate1(event);
    }

    datePattern(event: any) {
        this.validation.dateValidation(event);
    }

    tabChange(id) {
        this.selectedParent = id;
        this.parentTableEdit = false;
    }

    backFunction() {
        this.router.navigate(['/users/user-list']);
    }

    encodeImageFileAsURL(event: any) {
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const imgDetails = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event: any) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                console.log(getUrl, 'geturl');
                const pic = imgDetails.type.split('/');
                console.log(pic, 'Type');

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
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: [{
                image: getUrlEdu[1],
                size: imageList.size,
                type: imageList.type,
                name: imageList.name
            }],
            uploadtype: 'student'
        };
        this.common.fileUpload(data).subscribe(
            (successData) => {
                this.uploadSuccess(successData);
                console.log(successData, 'successData');
            },
            (error) => {
                console.error(error, 'wrongFormat');
            }
        );
    }

    uploadSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.imagepath = [];
            this.imagepaththumb = [];
            this.imagepath.push(successData.ResponseObject.imagepath[0].original_image_url);
            this.imagepaththumb.push(successData.ResponseObject.imagepath[0].resized_url);
        } else {
            this.toastr.error('Invalid File Format');
        }
    }

    attendanceFilter(value) {
        console.log(value, 'class');
        this.attendanceList(value ? value.class_id : '');
    }

    gradeList() {

        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.student.getgradeList(data).subscribe((successData: any) => {
                console.log(successData, 'successData');
                if (successData.IsSuccess) {
                    this.gradeData = successData.ResponseObject;
                    // Check if studentProfileDetails exists and has data before accessing
                    if (this.studentProfileDetails && this.studentProfileDetails.length > 0) {
                        this.gradeData.forEach((items) => {
                            if (items.grade_id == this.studentProfileDetails[0].grade_id) {
                                this.studentProfileDetails[0].grade_name = items.grade_name;
                            }
                        });
                    }
                }
            },
            (error) => {
                console.error(error, 'error');
            });
    }

    studentNotifyStatus(classData, notifyType) {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.studentId,
            class_id: classData.class_id,
            notify_status: notifyType
        };
        this.student.studentNotifyStatus(payload).subscribe((successData) => {
                this.studentFullClassList();
            },
            (error) => {
                console.error(error, 'studentFullClassList');
            });
    }

    studentFullClassList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.studentId
        };
        console.log('Fetching class list with data:', data);
        this.student.getAllClassOfStudent(data).subscribe((successData) => {
                this.studentFullClassListSuccess(successData);
            },
            (error) => {
                console.error('Error fetching class list:', error);
                this.studentFullClassListData = [];
                this.classList = [];
            });
    }

    studentFullClassListSuccess(successData) {
        console.log(successData, 'studentFullClassListSuccess');
        if (successData.IsSuccess) {
            this.studentFullClassListData = successData.ResponseObject || [];
            this.classList = []; // Clear classList before populating
            this.studentFullClassListData.forEach((items) => {
                items.showText = true;
                this.classList.push(items);
            });
            this.classList.unshift({class_id: '', class_name: 'All Class'});
            console.log(this.classList, 'classList');
            console.log(this.studentFullClassListData, 'studentFullClassListData');
            this.attendanceList('');
        } else {
            console.error('Failed to load class list:', successData.ErrorObject);
            this.studentFullClassListData = [];
            this.classList = [];
        }
    }

    stateList(event) {
        this.stateListData = [];
        this.studentForm.controls['parent' + this.selectedParent + 'state'].patchValue(null);
        const countryVal = event;
        // console.log(this.studentform.controls.country.value, 'jhkj');
        const data = {
            platform: 'web',
            country_id: countryVal,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.student.stateList(data).subscribe((successData) => {
                this.stateListSuccess(successData);
            },
            (error) => {
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

    countryList() {

        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.student.countryList(data).subscribe((successData) => {
                this.countryListSuccess(successData);
            },
            (error) => {
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

    attendanceList(classId) {

        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: this.studentId,
            class_id: classId
        };
        this.student.studentAttendanceList(data).subscribe((successData) => {
                this.attendanceListSuccess(successData);
            },
            (error) => {
                console.error(error, 'AttendanceList');
            });
    }

    attendanceListSuccess(successData) {
        console.log(successData, 'attendanceListSuccess');
        if (successData.IsSuccess) {
            this.attendanceListData = successData.ResponseObject || [];
            console.log('Attendance records loaded:', this.attendanceListData.length);
            this.attendanceListData.forEach((student) => {
                if (student.makeup_class_id != '') {
                    const currentDate = new Date(new Date().toLocaleString('en-US', { timeZone: timeZone.location }));
                    const makeupDate = new Date(student.makeup_class_date);
                    student.allow_void_class = currentDate < makeupDate;
                    console.log(student.allow_void_class, 'student.allow_void_class');
                } else {
                    student.allow_void_class = false;
                }
            });
        } else {
            console.error('Failed to load attendance list:', successData.ErrorObject);
            this.attendanceListData = [];
        }
    }

    studentDetails() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            type: 'list',
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.studentId
        };
        this.student.getStudentList(data).subscribe((successData) => {
                this.studentProfileDetailsSuccess(successData);
            },
            (error) => {
                this.serviceCalled = false;
                console.error(error, 'error_studentDetails');
            });
    }

    studentProfileDetailsSuccess(successData) {
        console.log(successData, 'successData');
        this.studentProfileDetails = successData.ResponseObject;
        this.serviceCalled = true;
        this.gradeList();
        this.studentFullClassList();
        console.log(this.studentProfileDetails, 'studentProfileDetails');
    }

    closeOverAll() {
        this.modalRef.close('viewoveralldetails');
    }

    getStudentFullDetail(item) {
        this.classData = item;
        this.modalRef = this.modalService.open(this.viewoveralldetails, {size: 'xl', windowClass: 'reportcardContent'});
    }

    addMakeUpClass(event) {
        event.absent_date = {
            isRange: false,
            singleDate: {jsDate: new Date(event.date)}
        };
        event.student_name = this.studentProfileDetails[0]?.first_name + ' ' + this.studentProfileDetails[0]?.last_name;
        this.auth.setSessionData('makeUpClass_calledFrom', 'profile');
        this.auth.setSessionData('classSelected_makeUp', JSON.stringify(event));
        this.auth.setSessionData('studentSelected_makeUp', event.student_id);
        this.router.navigate(['/schedule/schedule-page']);
    }

    voidFunctionCalled(data, index) {
        console.log(data, 'attendance');
        this.voidClassData = data;
        this.voidClassIndex = index;
        this.modalRef = this.modalService.open(this.voidClass);
    }

    deleteStudentList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.voidClassData.makeup_class_id,
            student_id: this.studentId,
            make_up: '1'
        };
        this.classes.deleteStudentList(data).subscribe((successData) => {
                this.deleteStudentListSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    deleteStudentListSuccess(successData) {
        if (successData.IsSuccess) {
            this.modalRef.close();
            this.toastr.success(successData.ResponseObject);
            this.attendanceList('');
        } else {
            this.toastr.error(successData.ResponseObject);
        }
    }
}
