import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {TemplateService} from '../../../shared/service/template.service';
import {StudentService} from '../../../shared/service/student.service';
import {TitleCasePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { TagInputModule } from 'ngx-chips';
import {CommonService} from '../../../shared/service/common.service';
import {SchoolService} from '../../../shared/service/School.service';
import {DomSanitizer} from '@angular/platform-browser';
import {UntypedFormControl, UntypedFormGroup, UntypedFormBuilder , Validators} from '@angular/forms';
import {LoginService} from '../../../shared/service/login.service';
import {ValidationService} from '../../../shared/service/validation.service';
import {ViewCell} from 'ng2-smart-table';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

TagInputModule.withDefaults({
  tagInput: {
    placeholder: 'Add a new tag',
    secondaryPlaceholder: 'Enter your EmailID'
  }
});


@Component({
  selector: 'app-list-template',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss'],
  providers: [TitleCasePipe]
})
export class ListTemplateComponent implements OnInit {
  public studentPassword: UntypedFormGroup;
  public listData: any;
  public deleteUser: any;
  private modalRef: NgbModalRef;
  public viewdetail: any;
  public closeResult: string;
  public imgUrl: any;
  public filetype: any;
  public getUrl: any;
  public getUrl1: any;
  public url: any;
  public email: any;
  public studentBlukEmail: any = [];
  public studentBlukEmailValue: any = [];
  public recordBase64Url: any;
  public fileUploader: any;
  public webHost: any;
  public schoolData: any;
  public schoolId: any;
  public schoolDataList: any = 0;
  public rows: any;
  public schoollist: any;
  public conps: boolean;
  public conps1: boolean;
  public resetPassword: any;
  public passwordValid: boolean;
  public message: any;
  public gradeData: any;
  public grade: any;
  public showSchoolSearch: boolean = true;
  public validators = [ this.must_be_email ];
  public errorMessages = {
    'must_be_email': 'Please enter a valid email ID'
  };
  private must_be_email(control: UntypedFormControl) {
    var EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;
    if (control.value.length != "" && !EMAIL_REGEXP.test(control.value)) {
      return { "must_be_email": true };
    }
    return null;
  }

  @ViewChild('content') modalContent: TemplateRef<any>;
  @ViewChild('bulkmodal') bulkContent: TemplateRef<any>;
  @ViewChild('emailmodal') emailContent: TemplateRef<any>;
  @ViewChild('content1') modalContent1: TemplateRef<any>;
  @ViewChild('contentnow') modalContentnow: TemplateRef<any>;

  constructor( public config: NgbModalConfig, public templateservice: TemplateService, public student: StudentService, public configurationService: ConfigurationService,
               public confi: ConfigurationService, private modalService: NgbModal, public auth: AuthService, public common: CommonService, public sanitizer: DomSanitizer,
               public commondata: CommonDataService, public route: Router, public firstcaps: TitleCasePipe, public toastr: ToastrService, public school: SchoolService,
               public formBuilder: UntypedFormBuilder, public loginService: LoginService, public validationService: ValidationService,
               public selectSchool: SchoolselectionService) {
    this.imgUrl = this.confi.getimgUrl();
    config.backdrop = 'static';
    config.keyboard = false;
    this.conps = true;
    this.conps1 = true;
    this.email = [];
    this.webHost = this.configurationService.getimgUrl();
    this.studentPassword = this.formBuilder.group({
      email: [''],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      confirmpassword: ''
    });
    this.selectSchool.selectSchool.subscribe((params) => {
      if (params != 0){
        if (this.route.url.includes('list-student')){
          this.init(params);
        }
      }else {
        this.init(params);
      }
    });
    this.selectSchool.searchSchool.subscribe((params) => {
      let schoolid: any;
      schoolid = this.auth.getSessionData('rista-school_id');
      if (schoolid != 0){
        this.showSchoolSearch = false;
      }else if (schoolid == 0){
        this.showSchoolSearch = true;
        this.schoolDataList = 0;
      }
    });
  }

  public settings = {
      hideSubHeader: false,
    pager:
        {
          perPage: 10
        },
      actions: {
        custom: [
          {
            name: 'editAction',
            title: '<i class="fa  fa-pencil" title="Edit Student"></i>'
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
      first_name: {
        title: 'First Name',
        type: 'custom',
        renderComponent: ViewComponent,
        onComponentInitFunction: (instance: any) =>  {
          instance.save.subscribe(row => {
          });
        }
      },
      last_name: {
        title: 'Last Name',
        valuePrepareFunction: (data) => {
          return this.firstcaps.transform(data);
        }
      },
      grade_name: {
        title: 'Grade',
        valuePrepareFunction: (data) => {
          return this.firstcaps.transform(data);
        }
      },
      email_id: {
      title: 'E-Mail'
    },
      mobile: {
        title: 'Contact Number',
        type: 'html',
        valuePrepareFunction: (data) => {
          for (let i = 0 ; i < data.length; i++){
            if (data[i] != ''){
              return `<a title="${data}">${ data[0] }`;
            } else {
            }
          }
        }
      },
      status: {
        title: 'Status',
      },
    },
  };

  ngOnInit() {
  }
  init(data){
    // this.schoolDataList = this.auth.getSessionData('rista-school_id');
    this.studentList('init');
    this.schoolList('1');
  }

  editAction(rows){
    this.auth.setSessionData('editStudent', JSON.stringify(rows.data));
    this.route.navigate(['/student/create-student/edit']);
    this.close();
  }
  schoolList(type) {
    this.commondata.showLoader(false);
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),

    };
    this.school.getSchoolList(data).subscribe( (successData) => {
          this.schoolListSuccess(successData, type);
        },
        (error) => {
          this.schoolListFailure(error);
        });
  }
  schoolListSuccess(successData, type) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      if (type == '1'){
      this.schoolData = successData.ResponseObject;
      this.schoolData.unshift({school_name: 'All Institution', school_id: 0});
    } else if ( type == '2'){
        this.schoollist = successData.ResponseObject;
      }
    }
  }
  schoolListFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }
  studentList(type) {
    let schoolid: any;
    if (type == 'init'){
      schoolid = this.auth.getSessionData('rista-school_id')
    }else {
      schoolid = this.schoolDataList;
    }
    this.commondata.showLoader(true);
    const data = {
      platform: 'web',
      type: 'list',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: schoolid
    };
    this.student.getStudentList(data).subscribe( (successData) => {
          this.studentListSuccess(successData);
        },
        (error) => {
          this.studentListFailure(error);
        });
  }
  studentListSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.listData = successData.ResponseObject;
      this.listData.forEach((value, index, array) => {
        this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
            'Inactive' : this.listData[index].status == 3 ? 'Suspended' : this.listData[index].status == 4 ? 'Deleted': '' ;
      });
    }
  }
  studentListFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }
  bulkModal() {
    this.filetype = '';
    this.schoolId = null;
    this.grade = null;
    this.modalRef = this.modalService.open(this.bulkContent);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.schoolList('2');
  }
  emailModal() {
    this.studentBlukEmail = [];
    this.grade = null;
    this.modalRef = this.modalService.open(this.emailContent);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.schoolList('2');
  }
  onCustomAction(event) {
    switch ( event.action) {
      case 'editAction':
        this.auth.setSessionData('editStudent', JSON.stringify(event.data));
        this.route.navigate(['/student/create-student/edit']);
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

  onSave() {
    this.modalRef.close();
    this.emailInviteUpload('email');
  }
  close() {
    this.modalRef.close();
    this.schoolId = null;
    this.fileUploader = '';
    this.filetype = '';
    this.studentBlukEmail = '';
  }
  deleteConfirm(){
    this.commondata.showLoader(true);
    const data = {
      platform: 'web',
      selected_user_id: this.deleteUser.user_id,
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid')
    };
    this.templateservice.getTemplateList(data).subscribe( (successData) => {
          this.deleteConfirmSuccess(successData);
        },
        (error) => {
          this.deleteConfirmFailure(error);
        });
  }
  deleteConfirmSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
    }
  }
  deleteConfirmFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }
  readUrl(event: any) {
    const file = event.target.files[0];
    if (event.srcElement.files[0].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || event.srcElement.files[0].type == 'application/vnd.ms-excel') {
      this.filetype = event.target.files[0].name.split('.');
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        this.getUrl1 = [];
        this.url = event.target.result;
        this.getUrl = this.url.split(',');
        this.getUrl1.push(this.url.split(','));
        this.onUploadFinished1(this.getUrl, event);
      };
      reader.onerror = function (error) {
      };
      this.toastr.success('Excel Upload Successfully' , 'Success!');
    } else {
      this.toastr.error('Only Excel Format is required', 'Failed');
      this.filetype = '';
    }
  }
  onUploadFinished1(event, fileEvent){
    this.getUrl = event[1];

  }
  onUploadFinished(type) {
    if (this.schoolId != null) {
      this.commondata.showLoader(true);
      const data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
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
            this.excelUpoadFailure(error);
          }
      );
    } else {
        this.toastr.error('Select the Institution Name', 'Student');
    }
  }
  excelUpoadSuccess(successData, type) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.getUrl = '';
      this.bulkInsert(type, successData.ResponseObject.upload_id);
      this.toastr.success(successData.ResponseObject.Message , 'Success!');
    } else {
      this.commondata.showLoader(false);
      this.toastr.error('Excel upload failed', 'Failed!');
    }
  }

  excelUpoadFailure(error) {
    console.log(error);
  }
  gradeList(event) {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: this.auth.getSessionData('rista-school_id')
    };
    this.student.getgradeList(data).subscribe( (successData) => {
          this.gradeListSuccess(successData);
        },
        (error) => {
          this.gradeListFailure(error);
        });
  }
  gradeListSuccess(successData) {
    if (successData.IsSuccess) {
      this.gradeData = successData.ResponseObject;
    }
  }
  gradeListFailure(error) {
    console.log(error, 'error');
  }
  bulkInsert(type, id) {
    this.commondata.showLoader(true);
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      upload_id: id,
      school_id: this.schoolId,
      grade_id: this.grade == null ? '' : this.grade
    };
    this.common.bulkInsert(data).subscribe(
        (successData) => {
          this.bulkInsertSuccess(successData, type);
        },
        (error) => {
          this.bulkInsertFailure(error, type);
        }
    );
  }
  bulkInsertSuccess(successData, type) {
    if (successData.IsSuccess) {
      this.close();
      this.studentList('init');
      this.commondata.showLoader(true);
      if (type == 'upload'){
      this.toastr.success(successData.ResponseObject, 'Student');
      } else if ( type == 'email'){
        this.toastr.success(successData.ResponseObject, 'Student');
      }
    } else if (!successData.IsSuccess) {
      if (type == 'upload'){
        this.toastr.error(successData.ErrorObject, 'Failure');
      } else if ( type == 'email'){
        this.toastr.error('Email not sent', 'Student');
      }
    }
    this.commondata.showLoader(false);
  }
  bulkInsertFailure(error, type) {
    console.log(error);
    this.commondata.showLoader(false);
  }

  emailInviteUpload(type) {
    this.studentBlukEmail;
    for (let i = 0; i < this.studentBlukEmail.length; i++){
      this.studentBlukEmailValue.push(this.studentBlukEmail[i].value);
    }
    if (this.schoolId != null) {
      if (this.grade != null){
        if (this.studentBlukEmail.length != 0){
          const data = {
            platform: 'web',
            role_id: this.auth.getSessionData('rista-roleid'),
            user_id: this.auth.getSessionData('rista-userid'),
            email_id: this.studentBlukEmailValue,
            format: 'Email',
            user_type: 'Student',
            grade_id: this.grade
          };
          this.common.emailInviteUpload(data).subscribe( (successData) => {
                this.emailInviteUploadSuccess(successData, type);
              },
              (error) => {
                this.emailInviteUploadFailure(error);
              });
        }else{
          this.toastr.error('Enter Your Email Id', 'Failed!');
        }
      }else {
        this.toastr.error('Please Select the grade', 'Failed');
      }
    } else {
      this.toastr.error('Select the Institution Name', 'Failed!');
    }
  }
  emailInviteUploadSuccess(successData, type) {
    if (successData.IsSuccess) {
      this.bulkInsert(type, successData.ResponseObject.upload_id);
    }else{
      this.toastr.error(successData.ResponseObject, 'Failed!');
    }
  }
  emailInviteUploadFailure(error){
  }
  downloadExcel() {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      user_type: 'Student'

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
      const url = this.webHost + '/' + successData.ResponseObject;
      window.open(url);
    }
  }
  excelDownloadFailure(error) {
    console.log(error);
  }
  checkPasswords() {
    const pass = this.studentPassword.controls.password.value;
    const confirmPass = this.studentPassword.controls.confirmpassword.value;
    if (pass === confirmPass) {
      this.passwordValid = false;
    } else {
      this.passwordValid = true;
    }
    return this.passwordValid;
  }
  cancel(){
    this.modalRef.close();
    this.studentPassword.reset();
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
      if (this.studentPassword.valid) {
        if (this.passwordValid == false){
          this.commondata.showLoader(true);
          data['password'] = this.studentPassword.controls.confirmpassword.value;
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
        this.validationService.validateAllFormFields(this.studentPassword);
        this.toastr.error('Please Fill All The Mandatory Fields');
      }
    }
  }
  changeSuccess(successData , type) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.message = successData.ResponseObject.message;
      this.route.navigate(['student/list-student']);
      if (type == 1){
        this.toastr.success('E-mail invite sent successfully for reset password ', 'Student');
      }else {
        this.studentPassword.reset();
        this.conps = true;
        this.conps1 = true;
        this.toastr.success(successData.ResponseObject.message, 'Student');
      }
      this.close();
    } else{
      this.commondata.showLoader(false);
    }
  }
  changeFailure(error) {
    console.log(error, 'error');
  }
  showModal(type) {
    if (type == 'mail'){
      this.modalRef = this.modalService.open(this.modalContent1);
    }else if (type == 'now'){
      this.modalRef = this.modalService.open(this.modalContentnow);
      this.studentPassword.controls.email.patchValue(this.resetPassword.email_id);
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


// view content

@Component({
  selector: 'button-toggle',
  template: `
  
    <div class="form-group">
      <!--<label class="mb-1">Featured</label><br>-->
         <span class="text-capitalize font-weight-bold table-name" data-toggle="modal" data-target="#myModal" (click)="viewdetailsList()">{{viewdetail.first_name}}</span>
    </div>
    <ng-template #viewdetails let-c="close" let-d="dismiss">
      <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">Student details</h4>
        <i class="fa fa-close fa-lg mt-1" aria-hidden="true" style="color:#7F3486; cursor: pointer; float: right;" (click)="close()"></i>
      </div>
      <div class="modal-body">
        <!-- Container-fluid starts-->
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="card-body pt-2">
                <div class="row d-flex flex-column">
                  <div class="mb-4 fit-image">
                    <img *ngIf="viewdetail.profile_url != ''"
                         [src]="sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + viewdetail.profile_url)" alt="">
                    <img *ngIf="(viewdetail.profile_url == '' || viewdetail.profile_url == null) && viewdetail.gender.toLowerCase() == 'male'"
                         src="assets/images/ristaschool/male.png" alt="">
                    <img *ngIf="(viewdetail.profile_url == '' || viewdetail.profile_url == null) && viewdetail.gender.toLowerCase() == 'female'"
                         src="assets/images/ristaschool/female1.png" alt="">
                    <img *ngIf="(viewdetail.profile_url == '' || viewdetail.profile_url == null) && (viewdetail.gender.toLowerCase() == 'n/a' || viewdetail.gender == '')"
                         src="assets/images/ristaschool/Do not want to disclose.png" alt="">
                  </div>
                  <table class="capital mb-3">
                    <tr>
                      <td class="pl-4"><b>Status:</b></td>
                      <td class="badge badge-success" *ngIf="viewdetail.status == 'Active'">Active</td>
                      <span class="badge  badge-danger" *ngIf="viewdetail.status == 'Inactive'">In-Active</span>
                      <span class="badge badge-warning" *ngIf="viewdetail.status  == 'Suspended'">Suspended</span>
                      <span class="badge badge-danger" *ngIf="viewdetail.status  == 'Deleted'">In-Active</span>
                    </tr>
                    <tr>
                      <td class="pl-4"><b>Contact no:</b></td>
                      <td *ngIf="viewdetail.mobile[0] != ''">{{viewdetail.mobile[0]}}</td>
                    </tr>
                    <tr>
                      <td class="pl-4"><b>Grade:</b></td>
                      <td *ngIf="viewdetail.grade_name != ''">{{viewdetail.grade_name}}</td>
                    </tr>
                    <tr>
                      <td class="pl-4" style="width: 150px"><b>Parent Name:</b></td>
                      <td *ngIf="viewdetail.parent1_firstname != ''">{{viewdetail.parent1_firstname}}</td>
                    </tr>
                    <tr>
                      <td  class="pl-4" style="vertical-align: top"><b>Address:</b></td>
                      <td *ngIf="viewdetail.address[0].address1 != ''">{{viewdetail.address[0].address1}}</td>
                    </tr>
                    <tr *ngIf="viewdetail.address[0].address2 != ''">
                      <td></td>
                      <td>{{viewdetail.address[0].address2}}</td>
                    </tr>
                    <tr *ngIf="viewdetail.address[0].address1 != ''">
                      <td></td>
                      <td>{{viewdetail.address[0].city}},{{viewdetail.address[0].state_name}}
                        <br>{{viewdetail.address[0].country_name}},{{viewdetail.address[0].postal_code}}</td>
                    </tr>
                  </table>

                  <table  class="capital" *ngIf="viewdetail.parent2_firstname != '' && viewdetail.address[1].address1 != ''
                                    && viewdetail.address[1].city != '' && viewdetail.address[1].country_name != ''
                                     && viewdetail.address[1].postal_code != '' && viewdetail.address[1].state_name != ''">
                    <tr>
                      <td class="pl-4" style="width: 150px"><b>Parent2 Name:</b></td>
                      <td>{{viewdetail.parent2_firstname}}</td>
                    </tr>
                    <tr>
                      <td  class="pl-4" style="vertical-align: top"><b>Address:</b></td>
                      <td>{{viewdetail.address[1].address1}}</td>
                    </tr>
                    <tr *ngIf="viewdetail.address[1].address2 != ''">
                      <td></td>
                      <td>{{viewdetail.address[1].address2}}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>{{viewdetail.address[1].city}},{{viewdetail.address[1].state_name}}
                        <br>{{viewdetail.address[1].country_name}},{{viewdetail.address[1].postal_code}}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Container-fluid Ends-->

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-primary" (click)="close()">Cancel</button>
        <button type="button" class="btn btn-primary" (click)="editAction(viewdetail)">Edit</button>
      </div>
    </ng-template>

  `
})

export class ViewComponent implements ViewCell, OnInit {
  status: any;
  private modalRef: NgbModalRef;
  viewdetail: any;
  webhost: any;
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();
  @ViewChild('viewdetails') viewDetailsContent: TemplateRef<any>;

  constructor(private modalService: NgbModal, public route: Router, public config: NgbModalConfig, public sanitizer: DomSanitizer,
              public auth: AuthService, public toastr: ToastrService, public confi: ConfigurationService) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.webhost = this.confi.getimgUrl();
  }

  ngOnInit() {
    this.viewdetail = this.rowData;
  }

  viewdetailsList() {
    this.modalRef = this.modalService.open(this.viewDetailsContent);
  }

  open(content) {
    this.modalService.open(content);
  }

  close() {
    this.modalRef.close();
  }

  cancel() {
    this.modalRef.close();
  }

  editAction(rows){
    this.auth.setSessionData('editStudent', JSON.stringify(rows));
    this.route.navigate(['/student/create-student/edit']);
    this.close();
  }
}
