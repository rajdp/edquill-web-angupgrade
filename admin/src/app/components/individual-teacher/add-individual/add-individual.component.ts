import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../../shared/service/auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ActivatedRoute} from '@angular/router';
import {TeacherService} from '../../../shared/service/teacher.service';
import {CommonService} from '../../../shared/service/common.service';
import {SchoolService} from '../../../shared/service/School.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';
import {DatePipe} from '@angular/common';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-individual.component.html',
  styleUrls: ['./add-individual.component.scss']
})
export class AddIndividualComponent implements OnInit, OnDestroy {
  public setDate = new Date().toLocaleString('en-US', { timeZone: 'America/Kentucky/Monticello' });
  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'mm-dd-yyyy',
    firstDayOfWeek: 'su',
    disableUntil: {
      year: new Date(this.setDate).getFullYear(),
      month: new Date(this.setDate).getMonth() + 1,
      day: new Date(this.setDate).getDate() - 1
    },
  };
  myDpOptions1: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'mm-dd-yyyy',
      disableSince: {
          year: new Date(this.setDate).getFullYear(),
          month: new Date(this.setDate).getMonth() + 1,
          day: new Date(this.setDate).getDate() + 1
      },
  };
  public teacherForm: UntypedFormGroup;
  public type: any;
  public editData: any;
  public recordBase64Url: any;
  public stateListData: any;
  public countryListData: any;
  public imagepath: any;
  public imagepaththumb: any;
  public selectedSchool: any;
  public schoolData: any;
  public webhost: any;
  public doj: any;
  public dob: any;
  public teacherPermission: any;
  public hideSchool: boolean;

  public mask = {
    guide: false,
    showMask: false,
    mask: ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/ , '-', /\d/, /\d/, /\d/, /\d/]
  };

  @ViewChild('myInput') myInputVariable: ElementRef<any>;

  constructor(public route: ActivatedRoute, private formBuilder: UntypedFormBuilder,
              public commondata: CommonDataService, private toastr: ToastrService, public select: SchoolselectionService,
              public auth: AuthService, public router: Router, public validationService: ValidationService, public teacherService: TeacherService,
              public common: CommonService, public brandservices: SchoolService, public sanitizer: DomSanitizer, public config: ConfigurationService, public datePipe: DatePipe) {
    this.webhost = this.config.getimgUrl();
    this.route.params.forEach((params) => {
      this.type = params.type;
    });

    this.imagepath = [];
    this.imagepaththumb = [];
    this.teacherForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email_id: ['', Validators.required],
      mobile: ['', Validators.required],
      institution: '',
      doj: '',
      dob: '',
      gender: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: '231',
      postalCode: '',
      status: ['1', Validators.required],
      addStudent: '',
      updateStudent: '',
      addContent: '',
      updateContent: '',
      addSubject: '',
      updateSubject: '',
      addBooks: '',
      updateBooks: '',
      addContents: '',
      updateContents: '',
      addRoom: '',
      updateRoom: '',
      addClass: '',
      updateClass: '',
    });


    if ( this.type == 'edit'){
      this.editData = JSON.parse(this.auth.getSessionData('editTeacher'));
      this.teacherForm.controls.firstName.patchValue(this.editData.first_name);
      this.teacherForm.controls.lastName.patchValue(this.editData.last_name);
      this.teacherForm.controls.email_id.patchValue(this.editData.email_id);
      this.teacherForm.controls.mobile.patchValue(this.editData.mobile);
      this.teacherForm.controls.institution.patchValue(this.editData.school_name);
      if (this.editData.gender != null){
        this.teacherForm.controls.gender.patchValue(this.editData.gender.toLowerCase().trim());
      }else {
        this.teacherForm.controls.gender.patchValue('');
      }
      this.teacherForm.controls.address1.patchValue(this.editData.address1);
      this.teacherForm.controls.address2.patchValue(this.editData.address2);
      this.teacherForm.controls.city.patchValue(this.editData.city);
      if (this.editData.country != '0'){
      this.teacherForm.controls.country.patchValue(this.editData.country);
      }else {
        this.teacherForm.controls.country.patchValue('231');
      }
      this.teacherForm.controls.postalCode.patchValue(this.editData.postal_code);
      if (this.editData.status == 'Active'){
        this.teacherForm.controls.status.patchValue(1);
      }else if (this.editData.status == 'Inactive'){
        this.teacherForm.controls.status.patchValue(2);
      }
      if (this.editData.status == 'Suspended'){
        this.teacherForm.controls.status.patchValue(3);
      } else if (this.editData.status == 'Deleted'){
        this.teacherForm.controls.status.patchValue(4);
      }
      if ( this.editData.doj != '0000-00-00' && this.editData.doj != null){
        const dob = this.editData.doj.split('-');
        const dobObject: IMyDateModel = {isRange: false, singleDate: {jsDate: new Date(parseInt(dob[0]), parseInt(dob[1]) - 1, parseInt(dob[2]))}, dateRange: null};
        this.teacherForm.controls.doj.patchValue(dobObject);
      }else {
          this.teacherForm.controls.doj.patchValue(null);
      }
      if (this.editData.birthday != '0000-00-00' && this.editData.birthday != null){
      const dob1 = this.editData.birthday.split('-');
      const dobObject1: IMyDateModel = {isRange: false, singleDate: {jsDate: new Date(parseInt(dob1[0]), parseInt(dob1[1]) - 1, parseInt(dob1[2]))}, dateRange: null};
      this.teacherForm.controls.dob.patchValue(dobObject1);
      } else {
        this.teacherForm.controls.dob.patchValue(null);
      }
      if (this.editData.profile_url != ''){
        this.imagepath.push(this.editData.profile_url);
      }
      this.imagepaththumb.push(this.editData.profile_thumb_url);
      this.PermissionTeacher(this.editData.user_id);
    } else {
      this.teacherForm.reset();
      this.teacherForm.controls.country.patchValue('231');
      this.teacherForm.controls.status.patchValue('1');
      this.teacherForm.controls.gender.patchValue('');
      this.teacherForm.controls.addStudent.patchValue(1);
      this.teacherForm.controls.updateStudent.patchValue(1);
      this.teacherForm.controls.addContent.patchValue(1);
      this.teacherForm.controls.updateContent.patchValue(1);
      this.teacherForm.controls.addContents.patchValue(1);
      this.teacherForm.controls.updateContents.patchValue(1);
      this.teacherForm.controls.addSubject.patchValue(1);
      this.teacherForm.controls.updateSubject.patchValue(1);
      this.teacherForm.controls.addBooks.patchValue(1);
      this.teacherForm.controls.updateBooks.patchValue(1);
      this.teacherForm.controls.addRoom.patchValue(1);
      this.teacherForm.controls.updateRoom.patchValue(1);
      this.teacherForm.controls.addClass.patchValue(1);
      this.teacherForm.controls.updateClass.patchValue(1);
      this.imagepath = [];
      this.imagepaththumb = [];
      this.stateList('231');
    }

  }
  onDateChanged(event: IMyDateModel): void {
  }
  ngOnInit() {
      this.hideSchool = false;
      this.select.hideChangeSchool(this.hideSchool);
      this.commondata.showLoader(false);
      this.countryList();
      this.schoolList();
  }

  ngOnDestroy(): void {
    this.hideSchool = true;
    this.select.hideChangeSchool(this.hideSchool);
  }

  addTeacher(value) {
    if (this.teacherForm.valid) {
      let data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        first_name: this.teacherForm.controls.firstName.value,
        last_name: this.teacherForm.controls.lastName.value,
        email_id: this.teacherForm.controls.email_id.value,
        mobile: this.teacherForm.controls.mobile.value,
        institution: this.teacherForm.controls.institution.value == null ? this.teacherForm.controls.firstName.value : this.teacherForm.controls.institution.value,
        doj: this.teacherForm.controls.doj.value == null ? '' : this.datePipe.transform(this.teacherForm.controls.doj.value.singleDate.jsDate, 'yyyy-MM-dd'),
        birthday: this.teacherForm.controls.dob.value == null ? '' : this.datePipe.transform(this.teacherForm.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd'),
        gender: this.teacherForm.controls.gender.value,
        address1: this.teacherForm.controls.address1.value == null ? '' : this.teacherForm.controls.address1.value,
        address2: this.teacherForm.controls.address2.value == null ? '' : this.teacherForm.controls.address2.value,
        city: this.teacherForm.controls.city.value == null ? '' : this.teacherForm.controls.city.value,
        state: this.teacherForm.controls.state.value ? this.teacherForm.controls.state.value : '',
        country: this.teacherForm.controls.country.value,
        postal_code: this.teacherForm.controls.postalCode.value == null ? '' : this.teacherForm.controls.postalCode.value,
        status: this.teacherForm.controls.status.value,
        profile_url: this.imagepath.toString(),
        profile_thumb_url: this.imagepaththumb.toString(),
        permission: [{
          group_id: 1,
          group_name: 'Students',
          permission: [{
            id: 1,
            status: 1
          }, {
            id: 2,
            status: 1
          }, {
            id: 3,
            status: 1
          }]
        }, {
          group_id: 2,
          group_name: 'Content Creator',
          permission: [{
            id: 5,
            status: 1
          }, {
            id: 6,
            status: 1
          }, {
            id: 7,
            status: 1
          }]
        }, {
          group_id: 3,
          group_name: 'Subjects',
          permission: [{
            id: 9,
            status: 1
          }, {
            id: 10,
            status: 1
          }, {
            id: 11,
            status: 1
          }]
        }, {
          group_id: 4,
          group_name: 'Books',
          permission: [{
            id: 13,
            status: 1
          }, {
            id: 14,
            status: 1
          } , {
            id: 15,
            status: 1
          }]
        }, {
            group_id: 5,
            group_name: 'Content',
            permission: [{
                id: 17,
                status: 1
            }, {
                id: 18,
                status: 1
            }, {
              id: 19,
              status: 1
            }]
        }, {
          group_id: 6,
          group_name: 'Content Folder',
          permission: [{
            id: 21,
            status: 1
          }, {
            id: 23,
            status: 1
          }, {
            id: 24,
            status: 1
          }]
        }, {
          group_id: 7,
          group_name: 'Classes',
          permission: [{
            id: 25,
            status: 1
          }, {
            id: 27,
            status: 1
          }, {
            id: 26,
            status: 1
          }]
        }
        ]
      };
      if (value == 'add') {
        this.teacherService.teacherAdd(data).subscribe((successData) => {
              this.addTeacherSuccess(successData);
            },
            (error) => {
              this.addTeacherFailure(error);
            });
      }
      else  if (value == 'edit') {
        data['selected_user_id'] = this.editData.user_id;
        data['institution_id'] = this.editData.institution_id;
        this.teacherService.teacherEdit(data).subscribe((successData) => {
              this.addTeacherSuccess(successData);
            },
            (error) => {
              this.addTeacherFailure(error);
            });
      }
    } else {
      this.validationService.validateAllFormFields(this.teacherForm);
      this.toastr.error('Please Fill All The Mandatory Fields');
    }
  }

  addTeacherSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.toastr.success(successData.ResponseObject, 'Teacher');
      this.router.navigate(['/Individual-Teacher/list-individual']);
    } else{
      this.commondata.showLoader(false);
      this.toastr.error(successData.ErrorObject, '');
    }
  }
  addTeacherFailure(error) {
    console.log(error, 'error');
    this.commondata.showLoader(false);
    this.toastr.error(error.ResponseObject, 'Teacher');
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
            if ( this.schoolData[index].has_branch == 1){
                this.schoolData[index].name = this.schoolData[index].name + ' ' + '(' + this.schoolData[index].branch_name + ')';
            }
        });
        }
     for (let i = 0; i < this.schoolData.length; i++) {
        this.selectedSchool.push({id: this.schoolData[i].school_id, name: this.schoolData[i].school_name});
      }

    }
  schoolListFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }

  public numberPattern(event: any) {
    this.validationService.numberValidate1(event);
  }
  public datePattern(event: any) {
    this.validationService.dateValidation(event);
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
      uploadtype: 'teacher'
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
    } else {
      this.toastr.error('Invalid File Format');
    }
  }
  uploadFailure(error) {
      this.commondata.showLoader(false);
      console.log(error, 'error');
  }
  deleteImg(){
    this.imagepath = [];
    this.reset();
  }

  reset(){
    this.myInputVariable.nativeElement.value = '';
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
    this.teacherForm.controls.state.patchValue(null);
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
              this.teacherForm.controls.state.patchValue(value.state_id);
      }
    });
  }
    }
  }
  stateListFailure(error) {
    console.log(error, 'error');
  }
  PermissionTeacher(id){
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      teacher_id: id,
      school_id: this.editData.institution_id
    };
    this.teacherService.PermissionTeacher(data).subscribe( (successData) => {
          this.PermissionTeacherSuccess(successData);
        },
        (error) => {
          this.PermissionTeacherFailure(error);
        });
  }
  PermissionTeacherSuccess(successData){
    this.teacherPermission = successData.ResponseObject.Permission;
    this.teacherForm.controls.addStudent.patchValue(this.teacherPermission[0].permission[0].status);
    this.teacherForm.controls.updateStudent.patchValue(this.teacherPermission[0].permission[1].status);
    this.teacherForm.controls.addContent.patchValue(this.teacherPermission[1].permission[0].status);
    this.teacherForm.controls.updateContent.patchValue(this.teacherPermission[1].permission[1].status);
    this.teacherForm.controls.addSubject.patchValue(this.teacherPermission[2].permission[0].status);
    this.teacherForm.controls.updateSubject.patchValue(this.teacherPermission[2].permission[1].status);
    this.teacherForm.controls.addBooks.patchValue(this.teacherPermission[3].permission[0].status);
    this.teacherForm.controls.updateBooks.patchValue(this.teacherPermission[3].permission[1].status);
    this.teacherForm.controls.addContents.patchValue(this.teacherPermission[4].permission[0].status);
    this.teacherForm.controls.updateContents.patchValue(this.teacherPermission[4].permission[1].status);
    this.teacherForm.controls.addRoom.patchValue(this.teacherPermission[5].permission[0].status);
    this.teacherForm.controls.updateRoom.patchValue(this.teacherPermission[5].permission[2].status);
    this.teacherForm.controls.addClass.patchValue(this.teacherPermission[6].permission[0].status);
  }
  PermissionTeacherFailure(error){}
  checkValue(eve){
    if (eve.value != '' ) {
      this.teacherForm.controls.doj.setValidators([Validators.required]);
      this.teacherForm.controls.doj.updateValueAndValidity();

    }else {
      this.teacherForm.controls.doj.clearValidators();
      this.teacherForm.controls.doj.setValidators(null);
      this.teacherForm.controls.doj.updateValueAndValidity();
    }
  }
}

