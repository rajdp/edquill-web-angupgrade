import {Component, Input, OnChanges, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import {NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {StudentService} from '../../../shared/service/student.service';
import {DatePipe, TitleCasePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {TagInputModule} from 'ngx-chips';
import {CommonService} from '../../../shared/service/common.service';
import {SchoolService} from '../../../shared/service/School.service';
import {DomSanitizer} from '@angular/platform-browser';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {LoginService} from '../../../shared/service/login.service';
import {ValidationService} from '../../../shared/service/validation.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {IAngularMyDpOptions, IMyDateModel} from '@nodro7/angular-mydatepicker';
import {ContentdetailService} from '../../../shared/service/contentdetail.service';
import {ClassService} from '../../../shared/service/class.service';
import {TeacherService} from '../../../shared/service/teacher.service';
import {dateOptions} from '../../../shared/data/config';

TagInputModule.withDefaults({
    tagInput: {
        placeholder: 'Add a new tag',
        secondaryPlaceholder: 'Enter your EmailID'
    }
});


@Component({
    selector: 'app-list-student',
    templateUrl: './list-student.component.html',
    styleUrls: ['./list-student.component.scss'],
    providers: [TitleCasePipe]
})
export class ListTemplateComponent implements OnInit, OnChanges {
    myDpOptions1: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: dateOptions.pickerFormat,
        firstDayOfWeek: 'su'
    };
    public studentPassword: FormGroup;
    public studentClassChange: FormGroup;
    public listData: any;
    public deleteUser: any;
    private modalRef: NgbModalRef;
    public viewdetail: any;
    public closeResult: string;
    public imgUrl: any;
    public filetype: any;
    public contentType = 'Assessment';
    public contentData = [];
    public allContentData = [];
    public getUrl: any;
    public getUrl1: any;
    public specificData: any;
    public url: any;
    public email: any;
    public studentId: any;
    public classId: any = 0;
    public contentId: any = 0;
    public studentBlukEmail: any = [];
    public studentBlukEmailValue: any = [];
    public recordBase64Url: any;
    public fileUploader: any;
    public webHost: any;
    public schoolData: any;
    public rows: any;
    public schoolid: any;
    public roleid: any;
    public allClassList: any = [];
    public classStudentList: any = [];
    public listNotes = [];
    public listClass = [];
    public schoolChange: boolean = false;
    public allowSelect: boolean;
    public validators = [this.must_be_email];
    public errorMessages = {
        'must_be_email': 'Please Enter a valid email format only allowed'
    };
    public conps: boolean;
    public conps1: boolean;
    public resetPassword: any;
    public passwordValid: boolean;
    public message: any;
    public gradeData: any;
    public grade: any;
    public schoolId: any;
    public schoolStatus: any;
    public selectedToClass: any;
    public selectedFromClass: any;
    public student_id: any;

    public manageStudent = false;
    @ViewChild('allNotes') allNotes: TemplateRef<any>;

    @ViewChild('content') modalContent: TemplateRef<any>;
    @ViewChild('bulkmodal') bulkContent: TemplateRef<any>;
    @ViewChild('emailmodal') emailContent: TemplateRef<any>;
    @ViewChild('content1') modalContent1: TemplateRef<any>;
    @ViewChild('contentnow') modalContentnow: TemplateRef<any>;
    @ViewChild('studentChange') changeStudent: TemplateRef<any>;

    @Input() page?: any;

    constructor(public config: NgbModalConfig, public student: StudentService, public configurationService: ConfigurationService, public teacher: TeacherService,
                public confi: ConfigurationService, private modalService: NgbModal, public auth: AuthService, public common: CommonService, public sanitizer: DomSanitizer,
                public commondata: CommonDataService, public route: Router, public firstcaps: TitleCasePipe, public toastr: ToastrService, public school: SchoolService, public classes: ClassService,
                public formBuilder: FormBuilder, public loginService: LoginService, public validationService: ValidationService, public newSubject: NewsubjectService, public contentDetail: ContentdetailService,
                public datePipe: DatePipe) {
        this.imgUrl = this.confi.getimgUrl();
        this.roleid = this.auth.getRoleId();
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.studentClassChange = this.formBuilder.group({
            formClass: [null, Validators.required],
            toClass: [null, Validators.required],
            from_startdate: ['', Validators.required]
        });
        config.backdrop = 'static';
        config.keyboard = false;
        this.email = [];
        this.conps = true;
        this.conps1 = true;
        this.webHost = this.configurationService.getimgUrl();
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
        this.auth.setSessionData('resourceAccess', false);
        this.auth.setSessionData('browseAll', false);
        this.auth.removeSessionData('classData');
        this.auth.removeSessionData('readonly_data');
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('readonly_startdate');
        this.auth.removeSessionData('editView');
        this.auth.setSessionData('contentType', '');
        this.studentPassword = this.formBuilder.group({
            email: [''],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            confirmpassword: '',
        });
    }

    private must_be_email(control: FormControl) {
        var EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;
        if (control.value.length != '' && !EMAIL_REGEXP.test(control.value)) {
            return {'must_be_email': true};
        }
        return null;
    }

    ngOnInit() {
        this.auth.removeSessionData('backOption');
    }

    ngOnChanges() {
        this.init();
    }

    init() {
        this.schoolId = this.auth.getSessionData('school_id');
        this.manageStudent = this.auth.manageStudent;
        this.studentList();
        this.studentClassList(0);
    }

    emittedValue(event) {
        console.log(event, 'emiitedValue');
        if (event.emitType == 'mail' || event.emitType == 'now') {
            this.resetPassword = event.emitData;
            console.log(this.resetPassword, 'hgjhjh');
            this.showModal(event.emitType);
        } else if (event.emitType == 'edit') {
            this.editAction(event.emitData);
        } else if (event.emitType == 'tc') {
            this.classChange(event.emitData);
        } else if (event.emitType == 'Announcement') {
            this.getNotes(event.emitData.user_id, this.classId, this.contentId);
        } else if (event.emitType == 'name') {
            this.auth.setSessionData('student-profile-details', JSON.stringify(event.emitData));
            this.route.navigate(['studentlogin/profile-details']);
        }
    }

    editAction(rows) {
        if (this.manageStudent) {
            this.auth.setSessionData('UsersRedirection', 'Student');
            this.auth.setSessionData('editStudent', JSON.stringify(rows));
            this.route.navigate(['/student/create-student/edit']);
        } else {
            this.toastr.error('You don\'t have permission to update student details');
        }
    }

    onDateChanged(event) {
        console.log(event, 'event');
    }

    changeNotes(event, type) {
        if (type == 'class') {
            console.log(event, 'get eve');
            if (event?.class_id) {
                this.classId = event.class_id;
            } else {
                this.classId = 0;
                this.close();
            }
            this.contentData = [];
            this.contentId = 0;
            this.specificData = null;
        } else {
            if (event?.content_id) {
                this.contentId = event.content_id;
            } else {
                this.contentId = 0;
            }
        }
        this.getNotes(this.studentId, this.classId, this.contentId);
    }

    getNotes(studentId, classId, contentId) {
        this.studentId = studentId;
        console.log(this.classId, 'class id');
        console.log(this.contentId, 'content id');
        const key = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: contentId,
            student_id: studentId,
            class_id: classId,
            school_id: this.auth.getSessionData('school_id'),
        };
        this.contentDetail.notesList(key).subscribe((successData) => {
                this.notesListSuccess(successData, key);
            },
            (error) => {
                console.error(error, 'error_classList');
            });
    }

    notesListSuccess(successData, key) {
        if (successData.IsSuccess) {
            this.listNotes = successData.ResponseObject;
            if (key.class_id == 0 && key.content_id == 0) {
                this.listClass = [];
                this.listNotes.forEach((val) => {
                    if (this.listClass.length > 0) {
                        let occured = false;
                        this.listClass.forEach((item) => {
                            if (item.class_id == val.class_id) {
                                occured = true;
                            }
                        });
                        if (!occured) {
                            this.listClass.push({class_name: val.class_name, class_id: val.class_id});
                        }
                    } else {
                        this.listClass.push({class_name: val.class_name, class_id: val.class_id});
                    }
                });
                this.contentData = [];
                this.listNotes.forEach((val) => {
                    if (this.contentData.length > 0) {
                        let occured = false;
                        this.contentData.forEach((item) => {
                            if (item.content_id == val.content_id) {
                                occured = true;
                            }
                        });
                        if (!occured) {
                            this.contentData.push({content_name: val.content_name, content_id: val.content_id, class_id: val.class_id});
                        }
                    } else {
                        this.contentData.push({content_name: val.content_name, content_id: val.content_id, class_id: val.class_id});
                    }
                });
                this.allContentData = [...this.contentData];
                this.modalRef = this.modalService.open(this.allNotes, {size: 'md'});
            } else if (key.class_id != 0) {
                this.contentData = this.allContentData.filter((val) => {
                    return val.class_id == this.classId;
                });
                console.log(this.contentData, 'get content');
            }
        }
    }

    fromClass(event) {
        this.selectedFromClass = event;
    }

    selectedClass(event) {
        this.selectedToClass = event;
        if (event.status == '1') {
            const sd = event.start_date.split('-');
            const sdObject: IMyDateModel = {
                isRange: false,
                singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
                dateRange: null
            };
            this.myDpOptions1 = {};
            this.myDpOptions1 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su',
                disableUntil: {
                    year: parseInt(sd[0]),
                    month: parseInt(sd[1]),
                    day: parseInt(sd[2]) - 1
                },
            };
        }
    }

    submitChangeClass() {
        if (this.studentClassChange.controls.formClass.value == this.studentClassChange.controls.toClass.value) {
            this.toastr.error('From Class and To Class should be different');
            return false;
        }
        if (this.studentClassChange.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.schoolId,
                from_class: this.studentClassChange.controls.formClass.value,
                to_class: this.studentClassChange.controls.toClass.value,
                from_date: this.selectedToClass.start_date,
                end_date: this.selectedToClass.end_date,
                joining_date: this.studentClassChange.controls.from_startdate.value == null ? '' : this.datePipe.transform(this.studentClassChange.controls.from_startdate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                student_id: this.student_id,
                status: '1'
            };
            this.student.changeClass(data).subscribe((successData) => {
                    this.submitChangeSuccess(successData);
                },
                (error) => {
                    console.error(error, 'Submit_error');
                });
        } else {
            this.validationService.validateAllFormFields(this.studentClassChange);
            this.toastr.error('Please Select all the mandatory fields');
        }
    }

    submitChangeSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'dasd');
            this.toastr.success(successData.ResponseObject);
            this.studentClassChange.reset();
            this.modalRef.close();
        } else {
            this.toastr.error(successData.ErrorObject);
        }
    }

    studentList() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId
        };
        this.student.getStudentList(data).subscribe((successData) => {
                this.studentListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_studentList');
            });
    }

    studentListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.listData = successData.ResponseObject;
            this.listData.forEach((value, index, array) => {
                this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
                    'Suspended' : this.listData[index].status == 3 ? 'Disengaged' : this.listData[index].status == 4 ? 'Deleted' : '';
            });
        }
    }

    gradeList() {

        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId
        };
        this.student.getgradeList(data).subscribe((successData) => {
                this.gradeListSuccess(successData);
            },
            (error) => {
                console.error(error, 'gradeList');
            });
    }

    gradeListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;

        }
    }

    bulkModal() {
        this.filetype = '';
        this.grade = null;
        this.modalRef = this.modalService.open(this.bulkContent);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    emailModal() {
        this.studentBlukEmail = [];
        this.grade = null;
        this.gradeList();
        this.modalRef = this.modalService.open(this.emailContent);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    open(content) {
        this.modalService.open(content);
    }

    onSave() {
        this.modalRef.close();
        this.studentClassChange.reset();
    }

    close() {
        this.modalRef.close();
        this.studentClassChange.reset();
        this.fileUploader = '';
        this.filetype = '';
        this.studentBlukEmail = '';
        this.classId = 0;
        this.contentId = 0;
        this.contentData = [];
        this.listClass = [];
    }

    readUrl(event: any) {
        // if(this.schoolId != null){
        const file = event.target.files[0];
        // this.formattype = event.target.files[0].type.split('.');
        if (event.srcElement.files[0].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || event.srcElement.files[0].type == 'application/vnd.ms-excel') {
            this.filetype = event.target.files[0].name.split('.');
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event: any) => {
                this.getUrl1 = [];
                this.url = event.target.result;
                this.getUrl = this.url.split(',');
                this.getUrl1.push(this.url.split(','));
                this.onUploadFinished1(this.getUrl, event);
            };
            this.toastr.success('Excel Upload Successfully', 'Success!');
        } else {
            this.toastr.error('Only Excel Format is required', 'Failed');
            this.filetype = '';
        }
    }

    onUploadFinished1(event, fileEvent) {
        this.getUrl = event[1];
    }

    onUploadFinished(type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId,
            file: this.getUrl,
            extension: this.filetype[1],
            upload_type: 'Excel',
            user_type: 'Student',
        };
        this.common.excelUpload(data).subscribe(
            (successData) => {
                this.excelUpoadSuccess(successData, type);
            },
            (error) => {
                console.error(error, 'ExcelUpload');
            }
        );
    }

    excelUpoadSuccess(successData, type) {
        console.log(successData);
        if (successData.IsSuccess) {
            this.getUrl = '';
            // fileEvent = null;
            this.bulkInsert(type, successData.ResponseObject.upload_id);
            // this.fileUploader.nativeElement.value = '';
            this.toastr.success(successData.ResponseObject.Message, 'Success!');
        } else {
            this.toastr.error('Excel upload failed', 'Failed!');
        }
    }

    studentClassList(id) {

        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: id,
            school_id: this.schoolId
        };
        this.student.studentClassList(data).subscribe((successData) => {
                this.studentClassListSuccess(successData, id);
            },
            (error) => {
                console.error(error, 'error');
            });
    }

    studentClassListSuccess(successData, id) {
        if (successData.IsSuccess) {
            if (id == 0) {
                this.allClassList = successData.ResponseObject;
                this.allClassList.forEach((val) => {
                    val['fromClassLabel'] = val.class_name + '  -  ' + val.teacher_name;
                });
            } else {
                this.classStudentList = successData.ResponseObject;
            }
        }
    }

    bulkInsert(type, id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            upload_id: id,
            school_id: this.schoolId,
            grade_id: this.grade == null ? '' : this.grade
        };
        this.common.bulkInsert(data).subscribe(
            (successData) => {
                this.bulkInsertSuccess(type, successData);
            },
            (error) => {
                this.bulkInsertFailure(error);
            }
        );
    }

    bulkInsertSuccess(type, successData) {
        if (successData.IsSuccess) {
            this.close();
            this.studentList();
            if (type == 'upload') {
                this.toastr.success(successData.ResponseObject, 'Student');
            } else if (type == 'email') {
                this.toastr.success(successData.ResponseObject, 'Student');
            }
        } else if (!successData.IsSuccess) {
            if (type == 'upload') {
                this.toastr.error(successData.ErrorObject, 'Failure');
            } else if (type == 'email') {
                this.toastr.error('Email not sent', 'Failure');
            }
        }
    }

    bulkInsertFailure(error) {
        this.studentList();
        this.toastr.error('Excel upload failed', 'Failed!');
        console.log(error);
    }

    emailInviteUpload(type) {
        this.studentBlukEmail;
        for (let i = 0; i < this.studentBlukEmail.length; i++) {
            this.studentBlukEmailValue.push(this.studentBlukEmail[i].value);
        }
        if (this.grade != null) {
            if (this.studentBlukEmail.length != 0) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.schoolId,
                    email_id: this.studentBlukEmailValue,
                    format: 'Email',
                    user_type: 'Student',
                    grade_id: this.grade
                };
                this.common.emailInviteUpload(data).subscribe((successData) => {
                        this.emailInviteUploadSuccess(type, successData);
                    },
                    (error) => {
                        console.error(error, 'InviteEmail');
                    });
            } else {
                this.toastr.error('Enter Your Email Id', 'Failed!');
            }
        } else {
            this.toastr.error('Please Select the grade', 'Failed');
        }
    }

    emailInviteUploadSuccess(type, successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.bulkInsert(type, successData.ResponseObject.upload_id);
            // this.toastr.success('E-mail Invite Sent Sucessfully', 'Success!');
        } else {
            this.toastr.error(successData.ResponseObject, 'Failed!');
        }
    }

    downloadExcel() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            user_type: 'Student'

        };
        this.common.excelDownload(data).subscribe(
            (successData) => {
                this.excelDownloadSuccess(successData);
            },
            (error) => {
                console.error(error, 'ExcelDownload');
            }
        );
    }

    excelDownloadSuccess(successData) {
        if (successData.IsSuccess) {
            const url = this.webHost + '/' + successData.ResponseObject;
            window.open(url);
        }
    }

    checkPasswords() {
        const pass = this.studentPassword.controls.password.value;
        const confirmPass = this.studentPassword.controls.confirmpassword.value;
        this.passwordValid = pass !== confirmPass;
        return this.passwordValid;
    }

    cancel() {
        this.modalRef.close();
        this.studentPassword.reset();
    }

    change(type) {
        const data = {
            platform: 'web',
            role_id: this.resetPassword.role_id,
            email_id: this.resetPassword.email_id,
        };
        if (type == 1) {
            this.loginService.forgotPassword(data).subscribe((successData) => {
                    this.changeSuccess(successData, type);
                },
                (error) => {
                    console.error(error, 'change_password');
                });
        } else {
            if (this.studentPassword.valid) {
                if (this.passwordValid == false) {
                    this.commondata.showLoader(true);
                    data['password'] = this.studentPassword.controls.confirmpassword.value;
                    this.loginService.forgotPassword(data).subscribe((successData) => {
                            this.changeSuccess(successData, type);
                        },
                        (error) => {
                            console.error(error, 'change_password');
                        });
                } else {
                    this.toastr.error('Please enter same password in new and confirm password');
                }
            } else {
                this.validationService.validateAllFormFields(this.studentPassword);
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }
    }

    changeSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.message = successData.ResponseObject.message;
            this.route.navigate(['/users/user-list']);
            if (type == 1) {
                this.toastr.success('E-mail invite sent successfully for reset password ', 'Student');
            } else {
                this.studentPassword.reset();
                this.toastr.success(successData.ResponseObject.message, 'Student');
            }
            this.close();
        } else {
            this.commondata.showLoader(false);
        }
    }

    classChange(event) {
        this.student_id = event.user_id;
        this.studentClassList(event.user_id);
        this.modalRef = this.modalService.open(this.changeStudent, {size: 'lg'});
    }

    showModal(type) {
        if (!this.manageStudent) {
            this.toastr.error('You don\'t have permission to reset password for student');
        } else {
            if (type == 'mail') {
                this.modalRef = this.modalService.open(this.modalContent1);
            } else if (type == 'now') {
                this.modalRef = this.modalService.open(this.modalContentnow);
                this.studentPassword.controls.email.patchValue(this.resetPassword.email_id);
            }
            this.modalRef.result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
