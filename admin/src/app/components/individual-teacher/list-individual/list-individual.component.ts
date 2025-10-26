import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, OnDestroy} from '@angular/core';
import {CategoryService} from '../../../shared/service/category.service';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {TeacherService} from '../../../shared/service/teacher.service';
import {DomSanitizer} from '@angular/platform-browser';
import {TitleCasePipe} from '@angular/common';
import {NavService} from '../../../shared/service/nav.service';
import {ToastrService} from 'ngx-toastr';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {CommonService} from '../../../shared/service/common.service';
import {SchoolService} from '../../../shared/service/School.service';
import {LoginService} from '../../../shared/service/login.service';
import {ValidationService} from '../../../shared/service/validation.service';
import {ViewCell} from 'ng2-smart-table';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-individual.component.html',
  styleUrls: ['./list-individual.component.scss']
})
export class ListIndividualComponent implements OnInit, OnDestroy {
  public itPassword: UntypedFormGroup;
  public listData: any;
  public deleteUser: any;
  private modalRef: NgbModalRef;
  public closeResult: string;
  public imgUrl: any;
  public rows: any;
  public viewdetail: any;
  public webhost: any;
  public openNav: boolean;
  public recordBase64Url: any;
  public filetype: any;
  public getUrl: any;
  public getUrl1: any;
  public url: any;
  public hideSchool: boolean;
  public message: any;
  public fileUploader: any;
  public teacherBlukEmail: any = [];
  public resetPassword: any;
  public schoolData: any;
  public schoollist: any;
  public schoolId: any;
  public schoolDataList: any = 0;
  public validators = [ this.must_be_email ];
  public conps: boolean;
  public conps1: boolean;
  public passwordValid: boolean;
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
  @ViewChild('bulkModal') bulkContent: TemplateRef<any>;
  @ViewChild('uploadMail') emailContent: TemplateRef<any>;
  @ViewChild('content') modalContent: TemplateRef<any>;
  @ViewChild('contentnow') modalContentnow: TemplateRef<any>;
  constructor(public nav: NavService, public category: CategoryService, public config: NgbModalConfig, public confi: ConfigurationService, private modalService: NgbModal,
              public auth: AuthService, public commondata: CommonDataService, public route: Router, public common: CommonService, public brandservices: SchoolService,
              public sanitizer: DomSanitizer, public firstcaps: TitleCasePipe, public toastr: ToastrService, public teacher: TeacherService,
              public formBuilder: UntypedFormBuilder, public loginService: LoginService, public validationService: ValidationService, public select: SchoolselectionService) {
    this.imgUrl = this.confi.getimgUrl();
    this.teacherList();
    config.backdrop = 'static';
    config.keyboard = false;
    this.webhost = this.confi.getimgUrl();
    this.openNav = false;
    this.conps = true;
    this.conps1 = true;
    this.itPassword = this.formBuilder.group({
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
            title: '<i class="fa  fa-pencil" title="Edit Private Tutor"></i>'
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
        school_name: {
        title: 'Institution Name',
        type: 'html',
            valuePrepareFunction: (data) => {
                return `<span class="text-capitalize">${data}</span>`;
            }
      },
        email_id: {
            title: 'Email-id'
        },
        status: {
            title: 'Status',
        },
    },
  };
  ngOnInit() {
      this.hideSchool = false;
      this.select.hideChangeSchool(this.hideSchool);
  }

  ngOnDestroy(): void {
      this.hideSchool = true;
      this.select.hideChangeSchool(this.hideSchool);
  }

  teacherList() {
      const data = {
          platform: 'web',
          role_id: this.auth.getSessionData('rista-roleid'),
          user_id: this.auth.getSessionData('rista-userid'),
      };
      this.teacher.individualList(data).subscribe( (successData) => {
          this.teacherListSuccess(successData);
          },
          (error) => {
          this.teacherListFailure(error);
      });
  }
    teacherListSuccess(successData) {
      if (successData.IsSuccess) {
          this.listData = successData.ResponseObject;
          console.log(this.listData, 'listData');
          this.listData.forEach((value, index, array) => {
              this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
                  'Inactive' : this.listData[index].status == 3 ? 'Suspended' : this.listData[index].status == 4 ? 'Deleted' : '' ;
          });
      }
  }
    teacherListFailure(error) {
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  open(content) {
      this.modalService.open(content);
  }
  close() {
      this.modalRef.close();
      this.schoolId = null;
      this.fileUploader = '';
      this.filetype = '';
      this.teacherBlukEmail = '';
  }

  editAction(rows){
    this.auth.setSessionData('editTeacher', JSON.stringify(rows.data));
    this.route.navigate(['/Individual-Teacher/create-individual/edit']);
    this.close();
  }
    encodeImageFileAsURL(event: any){
    for (let i = 0; i < event.target.files.length; i++) {
      const getUrlEdu = '';
      const imgDetails = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const url = event.target.result;
        const getUrl = url.split(',');
        this.onUploadKYCFinished(getUrl, imgDetails);
      };
      reader.readAsDataURL(event.target.files[i]);
    }
  }
  onUploadKYCFinished(getUrlEdu, data){
    this.recordBase64Url =  getUrlEdu[1];
    const imgData = [{
      image: this.recordBase64Url,
      size: data.size,
      type: data.type,
      name: data.name
    }];
  }

  checkPasswords() {
        const pass = this.itPassword.controls.password.value;
        const confirmPass = this.itPassword.controls.confirmpassword.value;
        if (pass === confirmPass) {
            this.passwordValid = false;
        } else {
            this.passwordValid = true;
        }
        return this.passwordValid;
    }
    cancel(){
        this.modalRef.close();
        this.itPassword.reset();
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
                if (this.itPassword.valid) {
                    if (this.passwordValid == false){
                        this.commondata.showLoader(true);
                        data['password'] = this.itPassword.controls.confirmpassword.value;
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
                    this.validationService.validateAllFormFields(this.itPassword);
                    this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }
    }
    changeSuccess(successData , type) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.message = successData.ResponseObject.message;
            this.route.navigate(['Individual-Teacher/list-individual']);
            if (type == 1){
                this.toastr.success('E-mail invite sent successfully for reset password ', 'Private-Teacher');
            }else {
                this.itPassword.reset();
                this.conps = true;
                this.conps1 = true;
                this.toastr.success(successData.ResponseObject.message, 'Private-Teacher');
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
            this.modalRef = this.modalService.open(this.modalContent);
        }else if (type == 'now'){
            this.modalRef = this.modalService.open(this.modalContentnow);
            this.itPassword.controls.email.patchValue(this.resetPassword.email_id);
        }
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
}

@Component({
    selector: 'button-toggle',
    template: `
  
    <div class="form-group">
      <!--<label class="mb-1">Featured</label><br>-->
         <span class="text-capitalize font-weight-bold table-name" data-toggle="modal" data-target="#myModal" (click)="viewdetailsList()">{{viewdetail.first_name}}</span>
    </div>
    <ng-template #viewdetails let-c="close" let-d="dismiss">
        <div class="modal-header">
            <h4 class="modal-title" id="modal-basic-title">{{viewdetail.first_name}}</h4>
            <!--        <app-feather-icons [icon]="'edit'" style="cursor: pointer;float: right;" (click)="editAction(rows)"></app-feather-icons>-->
            <i class="fa fa-close fa-lg mt-1" aria-hidden="true" style="color:#7F3486; cursor: pointer; float: right;" (click)="close()"></i>
        </div>
        <div class="modal-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card-body pt-2">
                            <div class="row d-flex flex-column">
                                <div class="mb-5 fit-image">
                                    <img *ngIf="viewdetail.profile_url != ''"
                                         [src]="sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + viewdetail.profile_url)" alt="">
                                    <img *ngIf="viewdetail.profile_url == '' && viewdetail.gender.toLowerCase().trim() == 'male'"
                                         src="assets/images/ristaschool/male.png" alt="">
                                    <img *ngIf="viewdetail.profile_url == '' && viewdetail.gender.toLowerCase().trim() == 'female'"
                                         src="assets/images/ristaschool/female1.png" alt="">
                                    <img *ngIf="viewdetail.profile_url == '' && viewdetail.gender.toLowerCase().trim() == 'n/a'"
                                         src="assets/images/ristaschool/Do not want to disclose.png" alt="">
                                    <img *ngIf="viewdetail.profile_url == '' && viewdetail.gender == ''"
                                         src="assets/images/ristaschool/Do not want to disclose.png" alt="">
                                </div>
                                <table class="capital">
                                    <tr>
                                        <td class="pl-4" style="width: 150px"><b>Institution Name:</b></td>
                                        <td>{{viewdetail.school_name}}</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-4"><b>Status:</b></td>
                                        <td class="badge badge-success" *ngIf="viewdetail.status == 'Active'">Active</td>
                                        <span class="badge  badge-danger" *ngIf="viewdetail.status == 'Inactive'">In-Active</span>
                                        <span class="badge badge-warning" *ngIf="viewdetail.status  == 'Suspended'">Suspended</span>
                                        <span class="badge badge-danger" *ngIf="viewdetail.status  == 'Deleted'">In-Active</span>
                                    </tr>
                                    <tr>
                                        <td class="pl-4"><b>Contact number:</b></td>
                                        <td>{{viewdetail.mobile}}</td>
                                    </tr>
                                    <tr *ngIf="viewdetail.address1 != '' && viewdetail.address1 != null">
                                        <td class="pl-4"><b>Address:</b></td>
                                        <td>{{viewdetail.address1}}</td>
                                    </tr>
                                    <tr *ngIf="viewdetail.address2 != ''">
                                        <td></td>
                                        <td>{{viewdetail.address2}}</td>
                                    </tr>
                                    <tr *ngIf="viewdetail.city != '' && viewdetail.city != null && viewdetail.state_name != ''">
                                        <td></td>
                                        <td>{{viewdetail.city}}<br>
                                            {{viewdetail.state_name}}<br>
                                            {{viewdetail.country_name}}
                                        </td>
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
            <button type="button" class="btn cancel" (click)="close()">Cancel</button>
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

    constructor(private modalService: NgbModal, public route: Router, public config: NgbModalConfig, public sanitizer : DomSanitizer,
                public confi: ConfigurationService, public auth: AuthService) {
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
    cancel(){
        this.modalRef.close();
    }
    editAction(rows){
        this.auth.setSessionData('editTeacher', JSON.stringify(rows));
        this.route.navigate(['/Individual-Teacher/create-individual/edit']);
        this.close();
    }
}
