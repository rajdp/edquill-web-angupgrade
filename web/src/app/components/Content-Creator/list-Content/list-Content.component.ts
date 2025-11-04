import {Component, OnInit, TemplateRef, ViewChild, Input, OnChanges} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import {NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {ContentService} from '../../../shared/service/content.service';
import {TitleCasePipe} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import {SchoolService} from '../../../shared/service/School.service';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {LoginService} from '../../../shared/service/login.service';
import {ValidationService} from '../../../shared/service/validation.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';

@Component({
    selector: 'app-list-creator',
    templateUrl: './list-Content.component.html',
    styleUrls: ['./list-Content.component.scss']
})
export class ListContentComponent implements OnInit, OnChanges {
    public contentPassword: FormGroup;
    public listData: any;
    private modalRef: NgbModalRef;
    public closeResult: string;
    public imgUrl: any;
    public webhost: any;
    public viewdetail: any;
    public filetype: any;
    public contentBlukEmail: any = [];
    public contentBlukEmailValue: any = [];
    public getUrl: any;
    public getUrl1: any;
    public url: any;
    public webHost: any;
    public email: any;
    public schoolData: any;
    public schoolid: any;
    public rows: any;
    public roleid: any;
    public teacherschool: any;
    public allowEdit: boolean;
    public allowAdd: boolean;
    public allowreset: boolean;
    public validators = [this.must_be_email];
    public errorMessages = {
        'must_be_email': 'Please Enter a valid Email-id'
    };
    public resetPassword: any;
    public passwordValid: boolean;
    public message: any;
    public schoolId: any;
    public conps: boolean;
    public conps1: boolean;
    public allowSelect: boolean;
    public schoolStatus: any;
    public currentCreatorListPage = 1; // Track current pagination page
    public savedCreatorFilters: any = {}; // Track saved filters
    @ViewChild('viewdetails') viewDetailsContent: TemplateRef<any>;

    constructor(public contentService: ContentService, public config: NgbModalConfig, public confi: ConfigurationService, public newSubject: NewsubjectService,
                private modalService: NgbModal, public auth: AuthService, public commondata: CommonDataService, public route: Router,
                public  firstcaps: TitleCasePipe, public sanitizer: DomSanitizer, public toastr: ToastrService, public common: CommonService,
                public brandservices: SchoolService, public formBuilder: FormBuilder, public loginService: LoginService, public validationService: ValidationService) {
        this.imgUrl = this.confi.getimgUrl();
        config.backdrop = 'static';
        config.keyboard = false;
        this.allowAdd = true;
        this.allowEdit = true;
        this.conps = true;
        this.conps1 = true;
        this.email = [];
        this.contentPassword = this.formBuilder.group({
            email: [''],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            confirmpassword: ''
        });
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        console.log(this.schoolStatus, 'schoolStatus');
        this.roleid = this.auth.getRoleId();
        this.webhost = this.confi.getimgUrl();
        this.auth.setSessionData('resourceAccess', false);
        this.auth.setSessionData('browseAll', false);
        this.auth.removeSessionData('updatedStudent');
        this.auth.setSessionData('contentType', '');
        this.auth.removeSessionData('readonly_startdate');
        this.auth.removeSessionData('editView');
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
    }

    @ViewChild('bulkmodal') bulkContent: TemplateRef<any>;
    @ViewChild('emailmodal') emailContent: TemplateRef<any>;
    @ViewChild('content') modalContent: TemplateRef<any>;
    @ViewChild('contentnow') modalContentnow: TemplateRef<any>;
    @Input() page?: any;

    private must_be_email(control: FormControl) {
        var EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;
        if (control.value.length != "" && !EMAIL_REGEXP.test(control.value)) {
            return {"must_be_email": true};
        }
        return null;
    }

    ngOnInit() {
        this.auth.removeSessionData('backOption');
        // Restore saved pagination page if available
        const savedPage = this.auth.getSessionData('creator-list-current-page');
        if (savedPage) {
            this.currentCreatorListPage = parseInt(savedPage, 10);
        }
        // Restore saved filters if available
        const savedFilters = this.auth.getSessionData('creator-list-filters');
        if (savedFilters) {
            try {
                this.savedCreatorFilters = JSON.parse(savedFilters);
            } catch (e) {
                this.savedCreatorFilters = {};
            }
        }
    }

    ngOnChanges() {
      this.init(this.auth.getSessionData('school_id'));
    }

    init(res) {
        this.schoolId = res;
        if (this.roleid == '4' && this.auth.getSessionData('teacher_type') == '0') {
            this.teacherschool = JSON.parse(this.auth.getSessionData('rista_data1'));
            this.allowreset = this.auth.getSessionData('teacher_type') == '0';
            if (this.teacherschool.permissions[1].allowNav) {
                this.allowAdd = this.teacherschool.permissions[1].permission[0].status == 1;
                this.allowEdit = this.teacherschool.permissions[1].permission[1].status == 1;
                this.contentList();
            } else {
                this.route.navigate(['/home/list-home']);
            }
        } else if (this.roleid == '4' && this.auth.getSessionData('teacher_type') == '1') {
            this.route.navigate(['/home/list-home']);
        } else {
            this.contentList();
        }
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
        this.currentCreatorListPage = page;
    }

    onFilterChange(filters: any) {
        // Update saved filters whenever filter changes in table
        this.savedCreatorFilters = filters;
    }

    saveStateBeforeNavigation() {
        // Save current page
        this.auth.setSessionData('creator-list-current-page', this.currentCreatorListPage.toString());
        // Save current filters
        this.auth.setSessionData('creator-list-filters', JSON.stringify(this.savedCreatorFilters));
    }

    contentList() {
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.contentService.contentList(data).subscribe((successData) => {
                this.contentListSuccess(successData);
            },
            (error) => {
                this.contentListFailure(error);
            });
    }

    contentListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.listData = successData.ResponseObject;
            this.listData.forEach((value, index, array) => {
                this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
                    'Suspended' : this.listData[index].status == 3 ? 'Disengaged' : this.listData[index].status == 4 ? 'Deleted' : '';
            });
        }
    }

    contentListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }


    onCustomAction(event) {
        switch (event.action) {
            case 'editAction':
                this.editAction(event);
                break;
            case 'resetpassword':
                this.resetPassword = event.data;
                this.showModal('mail');
                break;
            case 'resetpasswordnow':
                this.resetPassword = event.data;
                this.showModal('now');
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
        this.contentBlukEmail = [];
        this.modalRef = this.modalService.open(this.emailContent);
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


    open(content) {
        this.modalService.open(content);
    }

    close() {
        this.modalRef.close();
        this.getUrl = '';
        this.filetype = '';
        this.contentBlukEmail = '';
    }

    editAction(rows) {
        if (this.allowEdit == true) {
            // Save current page and filters before navigating to edit
            this.saveStateBeforeNavigation();
            this.auth.setSessionData('UsersRedirection', 'Creator');
            this.auth.setSessionData('editContent', JSON.stringify(rows));
            this.route.navigate(['/Content-Creator/create-Content/edit']);
            this.close();
        } else if (this.allowEdit == false) {
            this.toastr.error('You don\'t have permission to update content-creator details');
        }
    }

    readUrl(event: any) {
        const file = event.target.files[0];
        this.filetype = event.target.files[0].name.split('.');
        if (event.srcElement.files[0].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || event.srcElement.files[0].type == 'application/vnd.ms-excel') {
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
            this.toastr.error('Only Excel Format Is Required', 'Failed');
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
            school_id: this.auth.getSessionData('school_id'),
            file: this.getUrl,
            extension: this.filetype[1] ? this.filetype[1] : '',
            upload_type: 'Excel',
            user_type: 'Contentcreator',
        };
        this.common.excelUpload(data).subscribe(
            (successData) => {
                this.excelUpoadSuccess(successData, type);
            },
            (error) => {
                this.excelUpoadFailure(error);
            }
        );
    }

    excelUpoadSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.getUrl = '';
            // fileEvent = null;
            this.bulkInsert(type, successData.ResponseObject.upload_id);
            // this.fileUploader.nativeElement.value = '';
            this.toastr.success(successData.ResponseObject.Message, 'Success!');
        } else {
            this.toastr.error('Excel upload failed', 'Failed!');
        }
    }

    excelUpoadFailure(error) {
        this.commondata.showLoader(false);
        console.log(error);
    }

    bulkInsert(type, id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            upload_id: id,
            school_id: this.auth.getSessionData('school_id'),
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
            this.contentList();
            if (type == 'upload') {
                this.toastr.success(successData.ResponseObject, 'ContentCreator');
            } else if (type == 'email') {
                this.toastr.success(successData.ResponseObject, 'ContentCreator');
            }
        } else if (!successData.IsSuccess) {
            if (type == 'upload') {
                this.toastr.error(successData.ErrorObject, 'Failure');
            } else if (type == 'email') {
                this.toastr.error('Email Not Sent', 'Failure');
            }
        }
    }

    bulkInsertFailure(error) {
        this.contentList();
        this.toastr.error('Excel upload failed', 'Failed!');
    }

    emailInviteUpload(type) {
        this.contentBlukEmail;
        for (let i = 0; i < this.contentBlukEmail.length; i++) {
            this.contentBlukEmailValue.push(this.contentBlukEmail[i].value);
        }
        if (this.contentBlukEmail.length != 0) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                email_id: this.contentBlukEmailValue,
                format: 'Email',
                user_type: 'Contentcreator'
            };
            this.common.emailInviteUpload(data).subscribe((successData) => {
                    this.emailInviteUploadSuccess(successData, type);
                },
                (error) => {
                    this.emailInviteUploadFailure(error);
                });
        } else {
            this.toastr.error('Enter Your Email Id', 'Failed!');
        }
    }

    emailInviteUploadSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.bulkInsert(type, successData.ResponseObject.upload_id);
            this.toastr.success('E-mail Invite Sent Sucessfully', 'Success!');
        } else {
            this.toastr.error(successData.ResponseObject, 'Failed!');
        }
    }

    emailInviteUploadFailure(error) {
    }

    downloadExcel() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            user_type: 'Contentcreator'

        };
        this.common.excelDownload(data).subscribe(
            (successData) => {
                this.excelDownloadSuccess(successData);
            },
            (error) => {
                this.excelDownloadFailure(error);
            }
        );
    }

    excelDownloadSuccess(successData) {
        if (successData.IsSuccess) {
            const url = this.webhost + '/' + successData.ResponseObject;
            window.open(url);
        }
    }

    excelDownloadFailure(error) {
        console.log(error);
    }

    checkPasswords() {
        const pass = this.contentPassword.controls.password.value;
        const confirmPass = this.contentPassword.controls.confirmpassword.value;
        if (pass === confirmPass) {
            this.passwordValid = false;
        } else {
            this.passwordValid = true;
        }
        return this.passwordValid;
    }

    cancel() {
        this.modalRef.close();
        this.contentPassword.reset();
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
                    this.changeFailure(error);
                });
        } else {
            if (this.contentPassword.valid) {
                if (this.passwordValid == false) {
                    this.commondata.showLoader(true);
                    data['password'] = this.contentPassword.controls.confirmpassword.value;
                    this.loginService.forgotPassword(data).subscribe((successData) => {
                            this.changeSuccess(successData, type);
                        },
                        (error) => {
                            this.changeFailure(error);
                        });
                } else {
                    this.toastr.error('Please enter same password in new and confirm password');
                }
            } else {
                this.validationService.validateAllFormFields(this.contentPassword);
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
                this.toastr.success('E-mail invite sent successfully for reset password ', 'Content-Creator');
            } else {
                this.contentPassword.reset();
                this.toastr.success(successData.ResponseObject.message, 'Content-Creator');
            }
            this.close();
        } else {
            this.commondata.showLoader(false);
        }
    }

    changeFailure(error) {
        console.log(error, 'error');
    }

    showModal(type) {
        if (this.allowreset) {
            this.toastr.error('You don\'t have permission to reset password for Content-Creator');
        } else {
            if (type == 'mail') {
                this.modalRef = this.modalService.open(this.modalContent);
            } else if (type == 'now') {
                this.modalRef = this.modalService.open(this.modalContentnow);
                this.contentPassword.controls.email.patchValue(this.resetPassword.email_id);
            }
            this.modalRef.result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }
}
