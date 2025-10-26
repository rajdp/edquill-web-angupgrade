import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../../shared/service/auth.service';
import {CategoryService} from '../../../shared/service/category.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ActivatedRoute} from '@angular/router';
import {ContentService} from '../../../shared/service/content.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {CommonService} from '../../../shared/service/common.service';
import {SchoolService} from '../../../shared/service/School.service';
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';
import {DatePipe} from '@angular/common';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-Content.component.html',
  styleUrls: ['./add-Content.component.scss']
})
export class AddContentComponent implements OnInit, OnDestroy {
  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'mm-dd-yyyy',
    firstDayOfWeek: 'su',
  };
  myDpOptions1: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'mm-dd-yyyy',
    firstDayOfWeek: 'su',
    disableSince: {
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          day: new Date().getDate() + 1
      },
  };
  public creatorForm: UntypedFormGroup;
  public type: any;
  public editData: any;
  public doj: any;
  public dob: any;
  public recordBase64Url: any;
  public webhost: any;
  public imagepath: any;
  public imagepaththumb: any;
  public selectedSchool: any;
  public schoolData: any;
  public countryListData: any;
  public stateListData: any;
  public allowSelect: boolean;
  public showSchoolSearch: boolean;
    @ViewChild('myInput') myInputVariable: ElementRef<any>;
  public schoolid: any = 0;
  constructor(public route: ActivatedRoute, private formBuilder: UntypedFormBuilder,
              public commondata: CommonDataService, private toastr: ToastrService, public select: SchoolselectionService,
              public auth: AuthService, public category: CategoryService, public brandservices: SchoolService,
              public router: Router, public validationService: ValidationService, public contentService: ContentService,
              public sanitizer: DomSanitizer, public config: ConfigurationService, public common: CommonService, public datePipe: DatePipe) {
    this.webhost = this.config.getimgUrl();
    this.route.params.forEach((params) => {
      this.type = params.type;
    });

    this.imagepath = [];
    this.imagepaththumb = [];
    this.creatorForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email_id: ['', Validators.required],
      mobile: ['', Validators.required],
      schoolId: ['', Validators.required],
      doj: '',
      dob: '',
      gender: '',
      designation: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: '231',
      postalCode: '',
      status: ['1', Validators.required]
    });

    this.select.selectSchool.subscribe((params) => {
      if (params != 0){
        if (this.router.url.includes('create-Content/add')){
          this.init(params);
        }else if (this.router.url.includes('create-Content/edit')){
          this.init(params);
        }
      }else {
        this.init(params);
      }
    });

    this.select.searchSchool.subscribe((params) => {
      let schoolid: any;
      schoolid = this.auth.getSessionData('rista-school_id');
      if (schoolid != 0){
        this.showSchoolSearch = false;
      }else if (schoolid == 0){
        this.showSchoolSearch = true;
      }
    });

    if ( this.type == 'edit'){
      this.allowSelect = true;
      this.select.allowChangeSchool(this.allowSelect);
      this.editData = JSON.parse(this.auth.getSessionData('editContent'));
      this.creatorForm.controls.firstName.patchValue(this.editData.first_name);
      this.creatorForm.controls.lastName.patchValue(this.editData.last_name);
      this.creatorForm.controls.email_id.patchValue(this.editData.email_id);
      this.creatorForm.controls.mobile.patchValue(this.editData.mobile);
      this.creatorForm.controls.schoolId.patchValue(this.editData.school_id);
      if (this.editData.gender != null){
        this.creatorForm.controls.gender.patchValue(this.editData.gender.toLowerCase().trim());
      }else {
        this.creatorForm.controls.gender.patchValue('');
      }
      this.creatorForm.controls.designation.patchValue(this.editData.designation);
      this.creatorForm.controls.address1.patchValue(this.editData.address1);
      this.creatorForm.controls.address2.patchValue(this.editData.address2);
      this.creatorForm.controls.city.patchValue(this.editData.city);
      this.creatorForm.controls.state.patchValue(this.editData.state);
      if (this.editData.country != '0'){
        this.creatorForm.controls.country.patchValue(this.editData.country);
      }else {
        this.creatorForm.controls.country.patchValue('231');
      }
      this.creatorForm.controls.postalCode.patchValue(this.editData.postal_code);
      if (this.editData.status == 'Active'){
        this.creatorForm.controls.status.patchValue(1);
      }else if (this.editData.status == 'Inactive'){
        this.creatorForm.controls.status.patchValue(2);
      }
      if (this.editData.status == 'Suspended'){
        this.creatorForm.controls.status.patchValue(3);
      } else if (this.editData.status == 'Deleted'){
        this.creatorForm.controls.status.patchValue(4);
      }
      if (this.editData.doj != '0000-00-00' && this.editData.doj != null) {
        const dob = this.editData.doj.split('-');
        const dobObject: IMyDateModel = {isRange: false, singleDate: {jsDate: new Date(parseInt(dob[0]), parseInt(dob[1]) - 1, parseInt(dob[2]))}, dateRange: null};
        this.creatorForm.controls.doj.patchValue(dobObject);
      }else {
        this.creatorForm.controls.doj.patchValue(null);
      }
      if (this.editData.birthday != '' && this.editData.birthday != '0000-00-00'){
      const dob1 = this.editData.birthday.split('-');
      const dobObject1: IMyDateModel = {isRange: false, singleDate: {jsDate: new Date(parseInt(dob1[0]), parseInt(dob1[1]) - 1, parseInt(dob1[2]))}, dateRange: null};
      this.creatorForm.controls.dob.patchValue(dobObject1);
      }else {
        this.creatorForm.controls.dob.patchValue(null);
      }
      if (this.editData.profile_url != ''){
        this.imagepath.push(this.editData.profile_url);
      }
      this.imagepaththumb.push(this.editData.profile_thumb_url);

    } else{
      this.creatorForm.reset();
      if (this.schoolid == 0){
        this.creatorForm.controls.schoolId.patchValue(null);
      }else {
        this.creatorForm.controls.schoolId.patchValue(this.schoolid);
      }
      this.creatorForm.controls.country.patchValue('231');
      this.creatorForm.controls.status.patchValue('1');
      this.creatorForm.controls.gender.patchValue('');
      this.imagepath = [];
      this.imagepaththumb = [];
      this.stateList('231');
    }
  }
  onDateChanged(event: IMyDateModel): void {
  }

  ngOnInit() {
    this.commondata.showLoader(false);
    this.countryList();
  }
  ngOnDestroy(){
    this.allowSelect = false;
    this.select.allowChangeSchool(this.allowSelect);
  }

  init(data){
    this.schoolid = this.auth.getSessionData('rista-school_id');
    if (this.schoolid != 0){
      this.schoolList();
      this.creatorForm.controls.schoolId.patchValue(this.schoolid);
    }else {
      this.creatorForm.controls.schoolId.patchValue(null);
      this.schoolList();
    }
  }

  public datePattern(event: any) {
    this.validationService.dateValidation(event);
  }
  addContent(value) {
     if (this.creatorForm.valid) {
      this.commondata.showLoader(true);
      const data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        first_name: this.creatorForm.controls.firstName.value,
        last_name: this.creatorForm.controls.lastName.value,
        email_id: this.creatorForm.controls.email_id.value,
        mobile: this.creatorForm.controls.mobile.value,
        school_id: this.creatorForm.controls.schoolId.value,
        doj: this.creatorForm.controls.doj.value ? this.datePipe.transform(this.creatorForm.controls.doj.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
        birthday: this.creatorForm.controls.dob.value ? this.datePipe.transform(this.creatorForm.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
        gender: this.creatorForm.controls.gender.value,
        designation: this.creatorForm.controls.designation.value ? this.creatorForm.controls.designation.value : '',
        address1: this.creatorForm.controls.address1.value ? this.creatorForm.controls.address1.value : '',
        address2: this.creatorForm.controls.address2.value ? this.creatorForm.controls.address2.value : '',
        city: this.creatorForm.controls.city.value ? this.creatorForm.controls.city.value : '',
        state: this.creatorForm.controls.state.value ? this.creatorForm.controls.state.value : '',
        country: this.creatorForm.controls.country.value ? this.creatorForm.controls.country.value : '',
        postal_code: this.creatorForm.controls.postalCode.value ? this.creatorForm.controls.postalCode.value : '',
        status: this.creatorForm.controls.status.value,
        profile_url: this.imagepath.toString(),
        profile_thumb_url: this.imagepaththumb.toString(),
      };
      if (value == 'add'){
      this.contentService.contentAdd(data).subscribe((successData) => {
            this.addContentSuccess(successData);
          },
          (error) => {
            this.addContentFailure(error);
          });
      }
      else  if (value == 'edit') {
        data['selected_user_id'] = this.editData.user_id,
        this.contentService.contentEdit(data).subscribe((successData) => {
              this.addContentSuccess(successData);
            },
            (error) => {
              this.addContentFailure(error);
            });
      }
     }else {
       this.validationService.validateAllFormFields(this.creatorForm);
       this.toastr.error('Please Fill All The Mandatory Fields');
     }
  }
  addContentSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.toastr.success(successData.ResponseObject, 'Content-Creator');
      this.router.navigate(['Content-Creator/list-Content']);
    } else{
      this.commondata.showLoader(false);
      this.toastr.error(successData.ErrorObject, 'Content-Creator');
    }
  }
  addContentFailure(error) {
    console.log(error, 'error');
    this.commondata.showLoader(false);
    this.toastr.error(error.ResponseObject, 'Content-Creator');
  }
  public numberPattern(event: any) {
    this.validationService.numberValidate1(event);
  }
  encodeImageFileAsURL(event: any){
    for (let i = 0; i < event.target.files.length; i++) {
      const getUrlEdu = '';
      const imgDetails = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const url = event.target.result;
        const getUrl = url.split(',');
        const pic = imgDetails.type.split('/');
        if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] ==  'jpg' ){
          this.onUploadKYCFinished(getUrl, imgDetails);
        } else{
          this.toastr.error('JPEG ,PNG & JPG are the required type');
        }
      };
      reader.readAsDataURL(event.target.files[i]);
    }
  }
  onUploadKYCFinished(getUrlEdu, imageList){
    this.recordBase64Url =  getUrlEdu[1];
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      image_path: [{
        image: this.recordBase64Url,
        size: imageList.size,
        type: imageList.type,
        name: imageList.name
      }],
      uploadtype: 'Contentcreator'
    };
    this.commondata.showLoader(true);
    this.common.fileUpload(data).subscribe(
        (successData) => {
          this.uploadSuccess(successData);
        },
        (error) => {
          this.uploadFailure(error);
        }
    );
  }
  uploadSuccess(successData) {
    this.commondata.showLoader(false);
    if (successData.IsSuccess) {
      this.toastr.success(successData.ResponseObject.message);
      this.imagepath = [];
      this.imagepaththumb = [];
      this.imagepath.push(successData.ResponseObject.imagepath[0].original_image_url);
      this.imagepaththumb.push(successData.ResponseObject.imagepath[0].resized_url);
    }
    else {
      this.toastr.error('Invalid File Format');
    }
  }
  uploadFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }
  deleteImg(){
    this.imagepath = [];
    this.clearUploadfilename();
  }
  clearUploadfilename(){
      this.myInputVariable.nativeElement.value = '';
  }
  schoolList() {
    this.commondata.showLoader(false);
    let schooltype: any;
    if (this.type == 'add'){
      schooltype = 'active';
    }else{
      schooltype = 'list';
    }
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      type: schooltype
    };
    this.brandservices.getSchoolList(data).subscribe( (successData) => {
          this.schoolListSuccess(successData);
        },
        (error) => {
          this.schoolListFailure(error);
        });
  }
  schoolListSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.schoolData = successData.ResponseObject;
      this.selectedSchool = [];
      this.schoolData.forEach((item, index) => {
        if (this.schoolData[index].has_branch == 1){
          this.schoolData[index].name = this.schoolData[index].name + ' ' + '(' + this.schoolData[index].branch_name + ')';
        }
      });
      for (let i = 0; i < this.schoolData.length; i++) {
        this.selectedSchool.push({id: this.schoolData[i].school_id, name: this.schoolData[i].school_name});
      }

    }
  }
  schoolListFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }
  countryList() {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid')
    };
    this.common.getCountryList(data).subscribe( (successData) => {
          this.countryListSuccess(successData);
        },
        (error) => {
          this.countryListFailure(error);
        });
  }
  countryListSuccess(successData) {
    if (successData.IsSuccess) {
      this.countryListData = successData.ResponseObject;
      if ( this.type == 'edit') {
        this.stateList(this.editData.country);
      }
    }
  }
  countryListFailure(error) {
    console.log(error, 'error');
  }
  stateList(id) {
    const countryVal = this.creatorForm.controls.country.value;
    this.creatorForm.controls.state.patchValue(null);
    const data = {
      platform: 'web',
      country_id: id,
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid')
    };
    this.common.getStateList(data).subscribe( (successData) => {
          this.stateListSuccess(successData);
        },
        (error) => {
          this.stateListFailure(error);
        });
  }
  stateListSuccess(successData) {
    if (successData.IsSuccess) {
      this.stateListData = successData.ResponseObject;
      if ( this.type == 'edit') {
        this.stateListData.forEach((value) => {
          if (value.state_id == this.editData.state) {
            this.creatorForm.controls.state.patchValue(value.state_id);
          }
        });
      }
    }
  }
  stateListFailure(error) {
    console.log(error, 'error');
  }
  checkValue(eve){
    if (eve.value != '' ) {
      this.creatorForm.controls.doj.setValidators([Validators.required]);
      this.creatorForm.controls.doj.updateValueAndValidity();
    }else {
      this.creatorForm.controls.doj.clearValidators();
      this.creatorForm.controls.doj.setValidators(null);
      this.creatorForm.controls.doj.updateValueAndValidity();
    }
  }
}
