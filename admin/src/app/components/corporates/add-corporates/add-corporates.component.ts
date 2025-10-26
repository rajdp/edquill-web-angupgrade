import {Component, ElementRef, OnInit, TemplateRef, ViewChild, OnDestroy} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../../shared/service/auth.service';
import {CategoryService} from '../../../shared/service/category.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ActivatedRoute} from '@angular/router';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {CommonService} from '../../../shared/service/common.service';
import {SchoolService} from '../../../shared/service/School.service';
import {AdminService} from '../../../shared/service/admin.service';
import {DatePipe} from '@angular/common';
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';
import {CorporatesService} from '../../../shared/service/corporates.service';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-corporates.component.html',
  styleUrls: ['./add-corporates.component.scss']
})
export class AddCorporatesComponent implements OnInit, OnDestroy {
  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'mm-dd-yyyy',
    firstDayOfWeek: 'su',
    disableSince: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate() + 1
    },
  };
  public form: UntypedFormGroup;
  public type: any;
  public editData: any;
  public selectedSchool: any;
  public schoolData: any;
  public hideSchool: boolean;


    @ViewChild('myInput') myInputVariable: ElementRef<any>;
  constructor(public route: ActivatedRoute, private formBuilder: UntypedFormBuilder,
              public commondata: CommonDataService, private toastr: ToastrService,
              public auth: AuthService, public category: CategoryService, public brandservices: SchoolService, public select: SchoolselectionService,
              public router: Router, public validationService: ValidationService, public adminService: AdminService,
              public config: ConfigurationService, public common: CommonService, public datePipe: DatePipe, public corporate: CorporatesService) {
    this.route.params.forEach((params) => {
      this.type = params.type;
    });

    this.form = this.formBuilder.group({
        corporateName: ['', Validators.required],
        status: '1',
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        emailId: ['', Validators.required],
        mobile: ['', Validators.required]
    });


    if (this.type == 'edit') {
      this.editData = JSON.parse(this.auth.getSessionData('editcorporate'));
      this.form.controls.corporateName.patchValue(this.editData.corporate_name);
      this.form.controls.firstName.patchValue(this.editData.first_name);
      this.form.controls.lastName.patchValue(this.editData.last_name);
      this.form.controls.emailId.patchValue(this.editData.email_id);
      this.form.controls.mobile.patchValue(this.editData.mobile);
        if (this.editData.status == 'Active'){
          this.form.controls.status.patchValue(1);
        }else if (this.editData.status == 'Inactive'){
          this.form.controls.status.patchValue(2);
        }else if (this.editData.status == 'Suspended'){
          this.form.controls.status.patchValue(3);
        } else if (this.editData.status == 'Deleted'){
          this.form.controls.status.patchValue(4);
        }
      // } else {
      //   this.form.controls.firstName.patchValue('');
      //   this.form.controls.schoolId.patchValue(null);
      // }
    }
  }

  ngOnInit() {
    this.commondata.showLoader(false);
    this.hideSchool = false;
    this.select.hideChangeSchool(this.hideSchool);
  }
  ngOnDestroy(): void {
      this.hideSchool = true;
      this.select.hideChangeSchool(this.hideSchool);
  }
  list(value){
  }


  add(value) {
     if (this.form.valid) {
      this.commondata.showLoader(true);
      let corporateId;
      if(this.type == 'add'){
          corporateId = '';
      } else {
          corporateId = this.editData.corporate_id;
      }
      const data = {
          platform: 'web',
          role_id: this.auth.getSessionData('rista-roleid'),
          user_id: this.auth.getSessionData('rista-userid'),
          corporate_name: this.form.controls.corporateName.value,
          status: this.form.controls.status.value,
          corporate_id: corporateId,
          email_id: this.form.controls.emailId.value,
          mobile: this.form.controls.mobile.value,
          first_name: this.form.controls.firstName.value,
          last_name: this.form.controls.lastName.value
      };
      if (value == 'add'){
      this.corporate.corporateAdd(data).subscribe((successData) => {
            this.addListSuccess(successData);
          },
          (error) => {
            this.addListFailure(error);
          });
      }
      else  if (value == 'edit') {
        data['selected_user_id'] = this.editData.user_id,
        this.corporate.corporateEdit(data).subscribe((successData) => {
              this.addListSuccess(successData);
            },
            (error) => {
              this.addListFailure(error);
            });
      }
     }else {
       this.validationService.validateAllFormFields(this.form);
       this.toastr.error('Please Fill All The Mandatory Fields');
     }
  }
  addListSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.toastr.success(successData.ResponseObject, '');
      this.router.navigate(['corporates/list-corporates']);
    } else{
      this.commondata.showLoader(false);
      this.toastr.error(successData.ErrorObject, '');
    }
  }
  addListFailure(error) {
    console.log(error, 'error');
    this.commondata.showLoader(false);

    this.toastr.error(error.ResponseObject, '');
  }
  public numberPattern(event: any) {
    this.validationService.numberValidate1(event);
  }

}
