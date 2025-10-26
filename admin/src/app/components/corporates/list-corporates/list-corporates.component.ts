import {Component, OnInit, TemplateRef, ViewChild, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {ContentService} from '../../../shared/service/content.service';
import {TitleCasePipe} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import {SchoolService} from '../../../shared/service/School.service';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../../shared/service/admin.service';
import {LoginService} from '../../../shared/service/login.service';
import {ValidationService} from '../../../shared/service/validation.service';
import {CorporatesService} from '../../../shared/service/corporates.service';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-corporates.component.html',
  styleUrls: ['./list-corporates.component.scss']
})
export class ListCorporatesComponent implements OnInit, OnDestroy {
  public listData: any;
  public corporatePassword: UntypedFormGroup;
  private modalRef: NgbModalRef;
  public closeResult: string;
  public imgUrl: any;
  public webhost: any;
  public viewdetail: any;
  public filetype: any;
  public schoolId: any;
  public contentBlukEmail: any = [];
  public getUrl: any;
  public getUrl1: any;
  public url: any;
  public webHost: any;
  public email: any;
  public schoolData: any;
  public schoolDataList: any = 0;
  public rows: any;
  public resetPassword: any;
  public validators = [ this.must_be_email ];
  public conps: boolean;
  public conps1: boolean;
  public passwordValid: boolean;
  public hideSchool: boolean;
  public errorMessages = {
    'must_be_email': 'Please Enter a valid email format only allowed'
  };
  public message: any;
  private must_be_email(control: UntypedFormControl) {
    var EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;
    if (control.value.length != "" && !EMAIL_REGEXP.test(control.value)) {
      return { "must_be_email": true };
    }
    return null;
  }

  @ViewChild('bulkmodal') bulkContent: TemplateRef<any>;
  @ViewChild('emailmodal') emailContent: TemplateRef<any>;
  @ViewChild('content') modalContent: TemplateRef<any>;
  @ViewChild('contentnow') modalContentnow: TemplateRef<any>;

  constructor(public contentService: ContentService, public config: NgbModalConfig, public confi: ConfigurationService, public validationService: ValidationService,
              private modalService: NgbModal, public auth: AuthService, public commondata: CommonDataService, public route: Router, public select: SchoolselectionService,
              public  firstcaps: TitleCasePipe, public sanitizer: DomSanitizer, public toastr: ToastrService, public common: CommonService,
              public brandservices: SchoolService, public admin: AdminService, public loginService: LoginService, private formBuilder: UntypedFormBuilder, public corporate: CorporatesService ) {
    config.backdrop = 'static';
    this.getcorporateList();
    config.keyboard = false;
    this.conps = true;
    this.conps1 = true;
    this.corporatePassword = this.formBuilder.group({
      email: [''],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      confirmpassword: ''
    });
  }

  public settings = {
      hideSubHeader: false,
      actions: {
        custom: [
          {
            name: 'editAction',
            title: '&nbsp;<i class="fa  fa-pencil" title="Edit Admin"></i>'
          },
          {
            name: 'resetpassword',
            title: '&nbsp;<img src="assets/images/Group 17247.png" alt="" title="Reset Password By Mail" aria-hidden="true"></img>'
          },
          {
            name: 'resetpasswordnow',
            title: '<img src="assets/images/Group 17248.png" alt="" title="Reset Password Now" aria-hidden="true"></img>'
          }
        ],
        add: false,
        edit: false,
        delete: false,
        position: 'right',
      },


    columns: {
      // value: {
      //   title: 'First Name',
      //   type: 'custom',
      //   renderComponent: ViewComponent,
      //   onComponentInitFunction: (instance: any) =>  {
      //     instance.save.subscribe(row => {
      //     });
      //   }
      // },
      corporate_name: {
        title: 'Corporate Name',
        valuePrepareFunction: (data) => {
          return this.firstcaps.transform(data);
        }
      },
      first_name: {
        title: 'First Name'
      },
      last_name: {
        title: 'Last Name'
      },
      email_id: {
        title: 'Email Id'
      },
      mobile: {
        title: 'Contact Number'
      },
      status: {
        title: 'Status'
      },

    },
  };
  ngOnInit() {
    // this.schoolList();
    this.hideSchool = false;
    this.select.hideChangeSchool(this.hideSchool);
  }
  ngOnDestroy(): void {
    this.hideSchool = true;
    this.select.hideChangeSchool(this.hideSchool);
  }
  getcorporateList() {
    this.commondata.showLoader(false);
    const data = {
      platform: 'web',
      type: 'list',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
    };
    this.corporate.getcorporatesList(data).subscribe( (successData) => {
          this.listSuccess(successData);
        },
        (error) => {
          this.listFailure(error);
        });
  }
  listSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.listData = successData.ResponseObject;
      this.listData.forEach((value, index, array) => {
            this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
                'Inactive' : this.listData[index].status == 3 ? 'Suspended' : this.listData[index].status == 4 ? 'Deleted': '' ;
        });
    }
  }
  listFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }

  onCustomAction(event) {
    switch ( event.action) {
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

  open(content) {
    this.modalService.open(content);
  }
  close() {
    this.modalRef.close();
    this.schoolId = null;
    this.getUrl = '';
    this.filetype = '';
    this.contentBlukEmail = '';
  }
  cancel(){
      this.modalRef.close();
      this.corporatePassword.reset();
  }
  editAction(rows){
    this.auth.setSessionData('editcorporate', JSON.stringify(rows.data));
    this.route.navigate(['/corporates/create-corporates/edit']);
    this.close();
  }

  change(type) {
    const data = {
      platform: 'web',
      role_id: this.resetPassword.role_id,
      email_id: this.resetPassword.email_id,
    };
    if (type == 1){
      this.loginService.forgotPassword(data).subscribe((successData) => {
            this.changeSuccess(successData , type);
          },
          (error) => {
            this.changeFailure(error);
          });
    }else {
      if (this.corporatePassword.valid) {
        if (this.passwordValid == false){
          this.commondata.showLoader(true);
          data['password'] = this.corporatePassword.controls.confirmpassword.value;
          this.loginService.forgotPassword(data).subscribe((successData) => {
                this.changeSuccess(successData, type);
              },
              (error) => {
                this.changeFailure(error);
              });
        }else {
          this.toastr.error('Please enter same password in new and confirm password');
        }
      }else {
        this.validationService.validateAllFormFields(this.corporatePassword);
        this.toastr.error('Please Fill All The Mandatory Fields');
      }
    }
  }
  changeSuccess(successData , type) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.message = successData.ResponseObject.message;
      this.route.navigate(['corporates/list-corporates']);
      if (type == 1){
        this.toastr.success('E-mail invite sent successfully for reset password ', 'Corporate');
      }else {
        this.corporatePassword.reset();
        this.conps = true;
        this.conps1 = true;
        this.toastr.success(successData.ResponseObject.message, 'Corporate');
      }
      this.close();
    } else{
      this.commondata.showLoader(false);
    }
  }
  changeFailure(error) {
    console.log(error, 'error');
  }

  checkPasswords() {
    const pass = this.corporatePassword.controls.password.value;
    const confirmPass = this.corporatePassword.controls.confirmpassword.value;
    if (pass === confirmPass) {
      this.passwordValid = false;
    } else {
      this.passwordValid = true;
    }
    return this.passwordValid;
  }
  showModal(type) {
      if (type == 'mail'){
          this.modalRef = this.modalService.open(this.modalContent);
      }else if (type == 'now'){
          this.modalRef = this.modalService.open(this.modalContentnow);
          this.corporatePassword.controls.email.patchValue(this.resetPassword.email_id);
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
            return  `with: ${reason}`;
        }
    }
}

