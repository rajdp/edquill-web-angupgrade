import {Component, ElementRef, OnInit, TemplateRef, ViewChild, OnDestroy} from '@angular/core';
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
  templateUrl: './add-Teacher.component.html',
  styleUrls: ['./add-Teacher.component.scss']
})
export class AddTeacherComponent implements OnInit, OnDestroy {
  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    firstDayOfWeek: 'su',
    dateFormat: 'mm-dd-yyyy',
    disableUntil: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate() - 1
    },
  };
  myDpOptions1: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'mm-dd-yyyy',
      disableSince: {
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          day: new Date().getDate() + 1
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
  public gradeData: any;
  public subjectData: any;
  public allowSelect: boolean;
  public schoolName: any;
  public schoolid: any;
  public showSchoolSearch: boolean;
  public mask = {
    guide: false,
    showMask: false,
    mask: ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/ , '-', /\d/, /\d/, /\d/, /\d/]
  };

  @ViewChild('myInput') myInputVariable: ElementRef<any>;

  constructor(public route: ActivatedRoute, private formBuilder: UntypedFormBuilder, public select: SchoolselectionService,
              public commondata: CommonDataService, private toastr: ToastrService,
              public auth: AuthService, public router: Router, public validationService: ValidationService, public teacherService: TeacherService,
              public common: CommonService, public brandservices: SchoolService, public sanitizer: DomSanitizer, public config: ConfigurationService, public datePipe: DatePipe) {
    this.webhost = this.config.getimgUrl();
    this.route.params.forEach((params) => {
      this.type = params.type;
    });
    this.imagepath = [];
    this.imagepaththumb = [];
    this.schoolid = 0;
    this.teacherForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email_id: ['', Validators.required],
      mobile: ['', Validators.required],
      schoolId: ['', Validators.required],
      subject: '',
      grade: '',
      teacherId: [''],
      Designation: '',
      doj: '',
      dob: '',
      gender: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: '231',
      postalCode: '',
      status: '1',
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
      addCurriculum: '',
      updateClass: '',
      selectAll: '',
    });

    this.select.selectSchool.subscribe((params) => {
      if (params != 0){
        if (this.router.url.includes('create-Teacher/add')){
          this.init(params);
        }else if (this.router.url.includes('create-Teacher/edit')){
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
      this.editData = JSON.parse(this.auth.getSessionData('editTeacher'));
      this.teacherForm.controls.firstName.patchValue(this.editData.first_name);
      this.teacherForm.controls.lastName.patchValue(this.editData.last_name);
      this.teacherForm.controls.email_id.patchValue(this.editData.email_id);
      this.teacherForm.controls.mobile.patchValue(this.editData.mobile);
      this.teacherForm.controls.schoolId.patchValue(this.editData.school_id);
      this.teacherForm.controls.teacherId.patchValue(this.editData.school_idno);
      this.teacherForm.controls.Designation.patchValue(this.editData.designation);
      if (this.editData.gender != null){
        this.teacherForm.controls.gender.patchValue(this.editData.gender.toLowerCase().trim());
      }else {
        this.teacherForm.controls.gender.patchValue('');
      }
      this.gradeList(this.editData.school_id);
      this.subjectList(this.editData.school_id);
      if (this.editData.grade_id == '0'){
        this.teacherForm.controls.grade.patchValue(null);
      }else {
        this.teacherForm.controls.grade.patchValue(this.editData.grade_id);
      }
      if (this.editData.subject == '0'){
        this.teacherForm.controls.subject.patchValue(null);
      }else {
        this.teacherForm.controls.subject.patchValue(this.editData.subject);
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
      else if (this.editData.status == 'Suspended'){
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
      if (this.editData.birthday != '0000-00-00' && this.editData.birthday != ''){
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
        if (this.schoolid == 0){
            this.teacherForm.controls.schoolId.patchValue(null);
        }else {
            this.teacherForm.controls.schoolId.patchValue(this.schoolid);
        }
        this.teacherForm.controls.country.patchValue('231');
        this.teacherForm.controls.status.patchValue('1');
        this.teacherForm.controls.gender.patchValue('');
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
      this.teacherForm.controls.grade.patchValue(null);
      this.teacherForm.controls.subject.patchValue(null);
      this.gradeList(this.schoolid);
      this.subjectList(this.schoolid);
      this.teacherForm.controls.schoolId.patchValue(this.schoolid);
    }else {
      this.teacherForm.controls.schoolId.patchValue(null);
      this.teacherForm.controls.grade.patchValue(null);
      this.teacherForm.controls.subject.patchValue(null);
      this.schoolList();
    }
  }
  public datePattern(event: any) {
    this.validationService.dateValidation(event);
  }
  addTeacher(value) {
    if (this.teacherForm.valid) {
      this.commondata.showLoader(true);
      let data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        first_name: this.teacherForm.controls.firstName.value,
        last_name: this.teacherForm.controls.lastName.value,
        email_id: this.teacherForm.controls.email_id.value,
        mobile: this.teacherForm.controls.mobile.value,
        school_id: this.teacherForm.controls.schoolId.value,
        school_idno: this.teacherForm.controls.teacherId.value == null ? '' : this.teacherForm.controls.teacherId.value ,
        designation: this.teacherForm.controls.Designation.value,
        doj: this.teacherForm.controls.doj.value == null ? '' : this.datePipe.transform(this.teacherForm.controls.doj.value.singleDate.jsDate, 'yyyy-MM-dd'),
        birthday: this.teacherForm.controls.dob.value == null ? '' :  this.datePipe.transform(this.teacherForm.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd'),
        gender: this.teacherForm.controls.gender.value,
        address1: this.teacherForm.controls.address1.value,
        address2: this.teacherForm.controls.address2.value == null ? '' : this.teacherForm.controls.address2.value,
        city: this.teacherForm.controls.city.value,
        state: this.teacherForm.controls.state.value ? this.teacherForm.controls.state.value : '',
        grade: this.teacherForm.controls.grade.value ? this.teacherForm.controls.grade.value : '',
        subject: this.teacherForm.controls.subject.value ? this.teacherForm.controls.subject.value : '',
        country: this.teacherForm.controls.country.value,
        postal_code: this.teacherForm.controls.postalCode.value,
        status: this.teacherForm.controls.status.value,
        profile_url: this.imagepath.toString(),
        profile_thumb_url: this.imagepaththumb.toString(),
        permission: [{
          group_id: 1,
          group_name: 'Students',
          permission: [{
            id: 1,
            status: this.teacherForm.controls.addStudent.value == true ? 1 : 0
          }, {
            id: 2,
            status: this.teacherForm.controls.updateStudent.value == true ? 1 : 0
          }, {
            id: 3,
            status: (this.teacherForm.controls.addStudent.value == true || this.teacherForm.controls.updateStudent.value == true) ? 1 : 0
          }]
        }, {
          group_id: 2,
          group_name: 'Content-Creator',
          permission: [{
            id: 5,
            status: this.teacherForm.controls.addContent.value == true ? 1 : 0
          }, {
            id: 6,
            status: this.teacherForm.controls.updateContent.value == true ? 1 : 0
          }, {
            id: 7,
            status: (this.teacherForm.controls.addContent.value == true || this.teacherForm.controls.updateContent.value == true) ? 1 : 0
          }]
        }, {
          group_id: 3,
          group_name: 'Subjects',
          permission: [{
            id: 9,
            status: this.teacherForm.controls.addSubject.value == true ? 1 : 0
          }, {
            id: 10,
            status: this.teacherForm.controls.updateSubject.value == true ? 1 : 0
          }, {
            id: 11,
            status: (this.teacherForm.controls.addSubject.value == true || this.teacherForm.controls.updateSubject.value == true) ? 1 : 0
          }]
        }, {
          group_id: 4,
          group_name: 'Books',
          permission: [{
            id: 13,
            status: this.teacherForm.controls.addBooks.value == true ? 1 : 0
          }, {
            id: 14,
            status: this.teacherForm.controls.updateBooks.value == true ? 1 : 0
          }, {
            id: 15,
            status: (this.teacherForm.controls.addBooks.value == true || this.teacherForm.controls.updateBooks.value == true) ? 1 : 0
          }]
        }, {
            group_id: 5,
            group_name: 'Content',
            permission: [{
                id: 17,
                status: this.teacherForm.controls.addContents.value == true ? 1 : 0
            }, {
                id: 18,
                status: this.teacherForm.controls.updateContents.value == true ? 1 : 0
            }, {
              id: 19,
              status: (this.teacherForm.controls.addContents.value == true || this.teacherForm.controls.updateContents.value == true) ? 1 : 0
            }]
        }, {
          group_id: 6,
          group_name: 'Classroom',
          permission: [{
            id: 21,
            status: this.teacherForm.controls.addRoom.value == true ? 1 : 0
          }, {
            id: 23,
            status: this.teacherForm.controls.updateRoom.value == true ? 1 : 0
          }, {
            id: 22,
            status: (this.teacherForm.controls.addRoom.value == true || this.teacherForm.controls.updateRoom.value == true) ? 1 : 0
          }]
        }, {
          group_id: 7,
          group_name: 'Classes',
          permission: [{
            id: 25,
            status: this.teacherForm.controls.addClass.value == true ? 1 : 0
          }, {
            id: 27,
            status: this.teacherForm.controls.updateClass.value == true ? 1 : 0
          }, {
            id: 26,
            status: (this.teacherForm.controls.addClass.value == true || this.teacherForm.controls.updateClass.value == true) ? 1 : 0
          }, {
            id: 29,
            status: this.teacherForm.controls.addCurriculum.value == true ? 1 : 0
          }]
        }
        ]
        // documentUpload: this.teacherForm.controls.documentUpload.value,
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
        data['selected_user_id'] = this.editData.user_id,
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
      this.router.navigate(['/Teacher/list-Teacher']);
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
      schooltype = 'inactive';
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
        this.selectedSchool.push({id: this.schoolData[i].school_id,
          name: this.schoolData[i].school_name,
          address_1: this.schoolData[i].address_1,
          address_2: this.schoolData[i].address_2,
          city: this.schoolData[i].city,
          country_id: this.schoolData[i].country_id,
          country_name: this.schoolData[i].country_name,
          postal_code: this.schoolData[i].postal_code,
          state_id: this.schoolData[i].state_id,
          state_name: this.schoolData[i].state_name});
      }
    }
  schoolListFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
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
      school_id: this.editData.school_id
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
    this.checkLoopPermission();
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
    this.teacherForm.controls.updateClass.patchValue(this.teacherPermission[6].permission[2].status);
    this.teacherForm.controls.addCurriculum.patchValue(this.teacherPermission[6].permission[3].status);
    if (this.teacherForm.controls.addClass.value == 1){
      this.selectClass();
    }
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
  checkValue2(){
    this.loopingPermission();
  }
  loopingPermission(){
    this.teacherPermission = [{
      permission: [{
        status: this.teacherForm.controls.addStudent.value == true ? 1 : 0
      }, {
        status: this.teacherForm.controls.updateStudent.value == true ? 1 : 0
      }]
    }, {
      permission: [{
        status: this.teacherForm.controls.addContent.value == true ? 1 : 0
      }, {
        status: this.teacherForm.controls.updateContent.value == true ? 1 : 0
      }]
    }, {
      permission: [{
        status: this.teacherForm.controls.addSubject.value == true ? 1 : 0
      }, {
        status: this.teacherForm.controls.updateSubject.value == true ? 1 : 0
      }]
    }, {
      permission: [{
        status: this.teacherForm.controls.addBooks.value == true ? 1 : 0
      }, {
        status: this.teacherForm.controls.updateBooks.value == true ? 1 : 0
      }]
    }, {
      permission: [{
        status: this.teacherForm.controls.addContents.value == true ? 1 : 0
      }, {
        status: this.teacherForm.controls.updateContents.value == true ? 1 : 0
      }]
    }, {
      permission: [{
        status: this.teacherForm.controls.addRoom.value == true ? 1 : 0
      }, {
        status: this.teacherForm.controls.updateRoom.value == true ? 1 : 0
      }]
    }, {
      permission: [{
        status: this.teacherForm.controls.addClass.value == true ? 1 : 0
      }, {
        status: this.teacherForm.controls.addCurriculum.value == true ? 1 : 0
      }]
    }
    ];
    this.checkLoopPermission();
  }

  checkLoopPermission(){
    for (let i = 0; i < this.teacherPermission.length; i++){
      this.teacherPermission[i].selectAll = true;
      for (let j = 0; j < this.teacherPermission[i].permission.length; j++){
        if (this.teacherPermission[i].permission[j].status == 0){
          this.teacherPermission[i].selectAll = false;
          break;
        }
      }
    }
    for (let i = 0; i < this.teacherPermission.length; i++){
      if (this.teacherPermission[i].selectAll == false){
        this.teacherForm.controls.selectAll.patchValue(0);
        break;
      }else {
        this.teacherForm.controls.selectAll.patchValue(1);
      }
    }
  }
  selectClass(){
    if (this.teacherForm.controls.addClass.value == 1 || this.teacherForm.controls.addClass.value == true){
      this.teacherForm.controls.addCurriculum.patchValue(1);
    }else{
      this.teacherForm.controls.addCurriculum.patchValue(0);
    }
  }
    selectCurriculum(){
      if (this.teacherForm.controls.addCurriculum.value == 0 || this.teacherForm.controls.addCurriculum.value == false){
          this.teacherForm.controls.addClass.patchValue(0);
      }
  }
  checkValue1(){
    if (this.teacherForm.controls.selectAll.value == true){
      this.teacherForm.controls.addStudent.patchValue(1);
      this.teacherForm.controls.updateStudent.patchValue(1);
      this.teacherForm.controls.addContent.patchValue(1);
      this.teacherForm.controls.updateContent.patchValue(1);
      this.teacherForm.controls.addSubject.patchValue(1);
      this.teacherForm.controls.updateSubject.patchValue(1);
      this.teacherForm.controls.addBooks.patchValue(1);
      this.teacherForm.controls.updateBooks.patchValue(1);
      this.teacherForm.controls.addContents.patchValue(1);
      this.teacherForm.controls.updateContents.patchValue(1);
      this.teacherForm.controls.addRoom.patchValue(1);
      this.teacherForm.controls.updateRoom.patchValue(1);
      this.teacherForm.controls.addClass.patchValue(1);
      this.teacherForm.controls.updateClass.patchValue(1);
      this.teacherForm.controls.addCurriculum.patchValue(1);
    }else {
      this.teacherForm.controls.addStudent.patchValue(0);
      this.teacherForm.controls.updateStudent.patchValue(0);
      this.teacherForm.controls.addContent.patchValue(0);
      this.teacherForm.controls.updateContent.patchValue(0);
      this.teacherForm.controls.addSubject.patchValue(0);
      this.teacherForm.controls.updateSubject.patchValue(0);
      this.teacherForm.controls.addBooks.patchValue(0);
      this.teacherForm.controls.updateBooks.patchValue(0);
      this.teacherForm.controls.addContents.patchValue(0);
      this.teacherForm.controls.updateContents.patchValue(0);
      this.teacherForm.controls.addRoom.patchValue(0);
      this.teacherForm.controls.updateRoom.patchValue(0);
      this.teacherForm.controls.addClass.patchValue(0);
      this.teacherForm.controls.updateClass.patchValue(0);
      this.teacherForm.controls.addCurriculum.patchValue(0);
    }
  }

  schoolSelection(event){
    if (event != undefined){
      this.gradeList(event.id);
      this.subjectList(event.id);
    }else if (event == undefined){
      this.teacherForm.controls.grade.patchValue(null);
      this.teacherForm.controls.subject.patchValue(null);
    }
  }
  // grade list
  gradeList(schoolid) {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: schoolid,
      type: 'active'
    };
    this.teacherService.gradeList(data).subscribe( (successData) => {
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

  subjectList(schoolid) {

    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: schoolid,
      type: 'active'
    };
    this.teacherService.subjectList(data).subscribe( (successData) => {
      this.subjectListSuccess(successData);
    });

  }
  subjectListSuccess(successData) {
    if (successData.IsSuccess) {
      this.subjectData = successData.ResponseObject;
    }
  }
}

