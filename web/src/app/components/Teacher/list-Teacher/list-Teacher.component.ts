import {Component, Input, OnChanges, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CategoryService} from '../../../shared/service/category.service';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import {NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {TitleCasePipe} from '@angular/common';
import {TeacherService} from '../../../shared/service/teacher.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import {LoginService} from '../../../shared/service/login.service';
import {ValidationService} from '../../../shared/service/validation.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';

@Component({
    selector: 'app-list-teacher',
    templateUrl: './list-Teacher.component.html',
    styleUrls: ['./list-Teacher.component.scss']
})
export class ListTeacherComponent implements OnInit, OnChanges {
    public ntPassword: FormGroup;
    public listData: any;
    public deleteUser: any;
    private modalRef: NgbModalRef;
    public closeResult: string;
    public viewdetail: any;
    public rows: any;
    public webhost: any;
    public imgUrl: any;
    public teacherBlukEmail: any = [];
    public teacherBlukEmailValue: any = [];
    public getUrl: any;
    public getUrl1: any;
    public url: any;
    public email: any;
    public conps: boolean;
    public conps1: boolean;
    public resetPassword: any;
    public message: any;
    public passwordValid: boolean;
    public allowSelect: boolean;
    public filetype: any;
    public schoolId: any;
    public schoolStatus: any;
    public currentTeacherListPage = 1; // Track current pagination page
    public savedTeacherFilters: any = {}; // Track saved filters
    public validators = [this.must_be_email];
    public errorMessages = {
        'must_be_email': 'Please Enter a valid email format only allowed'
    };

    private must_be_email(control: FormControl) {
        var EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;
        if (control.value.length != "" && !EMAIL_REGEXP.test(control.value)) {
            return {"must_be_email": true};
        }
        return null;
    }

    @ViewChild('content') modalContent: TemplateRef<any>;
    @ViewChild('bulkmodal') bulkContent: TemplateRef<any>;
    @ViewChild('emailmodal') emailContent: TemplateRef<any>;
    @ViewChild('content1') modalContent1: TemplateRef<any>;
    @ViewChild('contentnow') modalContentnow: TemplateRef<any>;
    @Input() page?: any;
    @ViewChild('viewdetails') viewDetailsContent: TemplateRef<any>;


    constructor(public category: CategoryService, public configurationService: ConfigurationService, public common: CommonService, public newSubject: NewsubjectService,
                public toastr: ToastrService, public teacher: TeacherService, public sanitizer: DomSanitizer, public firstcaps: TitleCasePipe,
                public config: NgbModalConfig, public confi: ConfigurationService, private modalService: NgbModal, public auth: AuthService,
                public commondata: CommonDataService, public route: Router, public formBuilder: FormBuilder, public loginService: LoginService, public validationService: ValidationService) {
        this.imgUrl = this.confi.getimgUrl();
        config.backdrop = 'static';
        config.keyboard = false;
        this.conps = true;
        this.conps1 = true;
        this.webhost = this.configurationService.getimgUrl();
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('readonly_startdate');
        this.auth.removeSessionData('editView');
        this.schoolId = this.auth.getSessionData('school_id');
        this.ntPassword = this.formBuilder.group({
            email: [''],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            confirmpassword: ''
        });
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));

        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
    }

    ngOnInit() {
        this.auth.removeSessionData('backOption');
        // Restore saved pagination page if available
        const savedPage = this.auth.getSessionData('teacher-list-current-page');
        if (savedPage) {
            this.currentTeacherListPage = parseInt(savedPage, 10);
        }
        // Restore saved filters if available
        const savedFilters = this.auth.getSessionData('teacher-list-filters');
        if (savedFilters) {
            try {
                this.savedTeacherFilters = JSON.parse(savedFilters);
            } catch (e) {
                this.savedTeacherFilters = {};
            }
        }
    }

    ngOnChanges() {
        this.init(this.auth.getSessionData('school_id'));
    }

    emittedValue(event) {
        console.log(event, 'emiitedValue');
        if (event.emitType == 'mail' || event.emitType == 'now') {
            this.resetPassword = event.emitData;
            console.log(this.resetPassword, 'hgjhjh');
            this.showModal(event.emitType);
        } else if (event.emitType == 'edit') {
            this.editAction(event.emitData);
        } else if (event.emitType == 'name') {
            // Save current page and filters before navigating
            this.saveStateBeforeNavigation();
            this.viewdetail = event.emitData;
            this.modalRef = this.modalService.open(this.viewDetailsContent);
        }
    }

    onPageChange(page: number) {
        // Update current page when user changes pages
        this.currentTeacherListPage = page;
    }

    onFilterChange(filters: any) {
        // Update saved filters whenever filter changes in table
        this.savedTeacherFilters = filters;
    }

    saveStateBeforeNavigation() {
        // Save current page
        this.auth.setSessionData('teacher-list-current-page', this.currentTeacherListPage.toString());
        // Save current filters
        this.auth.setSessionData('teacher-list-filters', JSON.stringify(this.savedTeacherFilters));
    }

    teacherList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolId
        };
        this.teacher.teacherList(data).subscribe((successData) => {
                this.teacherListSuccess(successData);
            },
            (error) => {
                this.teacherListFailure(error);
            });
    }

    teacherListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.listData = successData.ResponseObject;
            this.listData.forEach((value, index, array) => {
                this.listData[index].status = this.listData[index].status == '1' ? 'Active' : this.listData[index].status == '2' ?
                    'Suspended' : this.listData[index].status == '3' ? 'Disengaged' : this.listData[index].status == '4' ? 'Deleted' : '';
            });
        }
    }

    teacherListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }

    editAction(rows) {
        // Save current page and filters before navigating to edit
        this.saveStateBeforeNavigation();
        this.auth.setSessionData('UsersRedirection', 'Teacher');
        this.auth.setSessionData('editTeacher', JSON.stringify(rows));
        this.route.navigate(['/Teacher/create-Teacher/edit']);
    }

    init(id) {
        console.log(id, 'isddd');
        this.schoolId = id;
        this.teacherList();
    }

    close() {
        this.modalRef.close();
    }

    readUrl(event: any) {
        const file = event.target.files[0];
        if (event.srcElement.files[0].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || event.srcElement.files[0].type == 'application/vnd.ms-excel') {
            this.filetype = event.target.files[0].name.split('.');
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event: any) => {
                this.getUrl1 = [];
                this.url = event.target.result;
                this.getUrl = this.url.split(',');
                this.getUrl1.push(this.url.split(','));
                this.onUploadFinished1(this.getUrl);
            };
            this.toastr.success('Excel Upload Successfully', 'Success!');
        } else {
            this.toastr.error('Only Excel Format is required', 'Failed');
            this.filetype = '';
        }
    }

    onUploadFinished1(event) {
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
            user_type: 'Teacher'
        };
        this.common.excelUpload(data).subscribe(
            (successData) => {
                this.excelUpoadSuccess(successData, type);
            },
            (error) => {
                console.error(error, 'excelUpload');
            }
        );
    }

    excelUpoadSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.getUrl = '';
            this.bulkInsert(type, successData.ResponseObject.upload_id);
            this.toastr.success(successData.ResponseObject.Message, 'Success!');
        } else {
            this.commondata.showLoader(false);
            this.toastr.error('Excel upload failed', 'Failed!');
        }
    }

    bulkInsert(type, id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            upload_id: id,
            school_id: this.schoolId
        };
        this.common.bulkInsert(data).subscribe(
            (successData) => {
                this.bulkInsertSuccess(successData, type);
            },
            (error) => {
                this.bulkInsertFailure(error);
            }
        );
    }

    bulkInsertSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.close();
            this.teacherList();
            if (type == 'upload') {
                this.toastr.success(successData.ResponseObject, 'Teacher');
            } else if (type == 'email') {
                this.toastr.success(successData.ResponseObject, 'Teacher');
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
        this.teacherList();
        this.toastr.error('Excel upload failed', 'Failed!');
        console.log(error);
    }

    emailInviteUpload(type) {
        for (let i = 0; i < this.teacherBlukEmail.length; i++) {
            this.teacherBlukEmailValue.push(this.teacherBlukEmail[i].value);
        }
        if (this.teacherBlukEmail.length != 0) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.schoolId,
                email_id: this.teacherBlukEmailValue,
                format: 'Email',
                user_type: 'Teacher'
            };
            this.common.emailInviteUpload(data).subscribe((successData) => {
                    this.emailInviteUploadSuccess(successData, type);
                },
                (error) => {
                    console.error(error, 'inviteEmail');
                });
        } else {
            this.toastr.error('Enter Your Email Id', 'Failed!');
        }
    }

    emailInviteUploadSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.bulkInsert(type, successData.ResponseObject.upload_id);
        } else {
            this.toastr.error(successData.ResponseObject, 'Failed!');
        }
    }

    downloadExcel() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            user_type: 'Teacher'
        };
        this.common.excelDownload(data).subscribe(
            (successData) => {
                this.excelDownloadSuccess(successData);
            },
            (error) => {
                console.error(error, 'error');
            }
        );
    }

    excelDownloadSuccess(successData) {
        if (successData.IsSuccess) {
            const url = this.webhost + '/' + successData.ResponseObject;
            window.open(url);
        }
    }

    bulkModal() {
        this.filetype = '';
        this.modalRef = this.modalService.open(this.bulkContent);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    emailModal() {
        this.teacherBlukEmail = [];
        this.modalRef = this.modalService.open(this.emailContent);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    checkPasswords() {
        const pass = this.ntPassword.controls.password.value;
        const confirmPass = this.ntPassword.controls.confirmpassword.value;
        this.passwordValid = pass !== confirmPass;
        return this.passwordValid;
    }

    cancel() {
        this.modalRef.close();
        this.ntPassword.reset();
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
                    console.error(error, 'error');
                });
        } else {
            if (this.ntPassword.valid) {
                if (this.passwordValid == false) {
                    this.commondata.showLoader(true);
                    data['password'] = this.ntPassword.controls.confirmpassword.value;
                    this.loginService.forgotPassword(data).subscribe((successData) => {
                            this.changeSuccess(successData, type);
                        },
                        (error) => {
                            console.error(error, 'error');
                        });
                } else {
                    this.toastr.error('Please enter same password in new and confirm password');
                }
            } else {
                this.validationService.validateAllFormFields(this.ntPassword);
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
                this.toastr.success('E-mail invite sent successfully for reset password ', 'Teacher');
            } else {
                this.ntPassword.reset();
                this.toastr.success(successData.ResponseObject.message, 'Teacher');
            }
            this.close();
        } else {
            this.commondata.showLoader(false);
        }
    }

    showModal(type) {
        if (type == 'mail') {
            this.modalRef = this.modalService.open(this.modalContent1);
        } else if (type == 'now') {
            this.modalRef = this.modalService.open(this.modalContentnow);
            this.ntPassword.controls.email.patchValue(this.resetPassword.email_id);
        }
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
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
