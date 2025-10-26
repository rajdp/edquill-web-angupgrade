import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../../shared/service/auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../../../shared/service/student.service';
import {CommonService} from '../../../shared/service/common.service';
import {SchoolService} from '../../../shared/service/School.service';
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {DomSanitizer} from '@angular/platform-browser';
import {DatePipe} from '@angular/common';
import {ClassroomService} from '../../../shared/service/classroom.service';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit, OnDestroy {
  public setDate = new Date().toLocaleString('en-US', { timeZone: 'America/Kentucky/Monticello' });
  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'mm-dd-yyyy',
    firstDayOfWeek: 'su',
    disableSince: {
      year: new Date(this.setDate).getFullYear(),
      month: new Date(this.setDate).getMonth() + 1,
      day: new Date(this.setDate).getDate() + 1
    },
  };
  myDpOptions1: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'mm-dd-yyyy',
    disableUntil: {
      year: new Date(this.setDate).getFullYear(),
      month: new Date(this.setDate).getMonth() + 1,
      day: new Date(this.setDate).getDate() - 1
    },
  };
  public studentform: UntypedFormGroup;
  public type: any;
  public editData: any;
  public recordBase64Url: any;
  public stateListData: any;
  public stateListData1: any;
  public countryListData: any;
  public schoolData: any;
  public gradeData: any;
  public showSchoolSearch: boolean;
  public imagepath: any;
  public imagepaththumb: any;
  public webhost: any;
  public selectedSchool: any;
  public batchlistData: any;
  public showDroppedDate: boolean;
  public allowSelect: boolean;
  public schoolid: any;

  @ViewChild('myInput') myInputVariable: ElementRef<any>;
  public model: { singleDate: { jsDate: Date }; isRange: boolean };
  constructor(public route: ActivatedRoute, private formBuilder: UntypedFormBuilder, public config: ConfigurationService,
              public commondata: CommonDataService, private toastr: ToastrService,  public sanitizer: DomSanitizer,
              public auth: AuthService, public student: StudentService, public common: CommonService, public select: SchoolselectionService,
              public router: Router, public validationService: ValidationService, public brandservices: SchoolService,
              public datePipe: DatePipe, public classroom: ClassroomService) {
    this.webhost = this.config.getimgUrl();
    this.imagepath = [];
    this.showDroppedDate = false;
    this.imagepaththumb = [];
    this.schoolid = 0;
    this.model = {isRange: false, singleDate: {jsDate: new Date()}};
    this.route.params.forEach((params) => {
      this.type = params.type;
    });

    this.studentform = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: '',
      dob: '',
      grade: ['', Validators.required],
      schoolId: ['', Validators.required],
      studentId: '',
      email_id: ['', Validators.required],
      mobile: '',
      mobile1: '',
      mobile2: '',
      parent1FirstName: '',
      parent1LastName: '',
      email_id1_p1: '',
      email_id2_p1: '',
      address1: '',
      address2: '',
      city: '',
      batchname: '',
      country: '231',
      postalCode: '',
      status: ['1', Validators.required],
      state: '',
      parent2FirstName: '',
      parent2LastName: '',
      email_id1_p2: '',
      email_id2_p2: '',
      addressp21: '',
      addressp22: '',
      city1: '',
      state1: '',
      country1: '231',
      postalCode1: '',
      registration_date: '',
      dropped_date: ''
    });

    this.select.selectSchool.subscribe((params) => {
      if (params != 0){
        if (this.router.url.includes('create-student/add')){
          this.init(params);
        }else if (this.router.url.includes('create-student/edit')){
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

    if (this.type == 'edit') {
      this.allowSelect = true;
      this.select.allowChangeSchool(this.allowSelect);
      this.editData = JSON.parse(this.auth.getSessionData('editStudent'));
      this.gradeList(this.editData.school_id);
      this.getBatchList(this.editData.school_id);
      this.studentform.controls.first_name.patchValue(this.editData.first_name);
      this.studentform.controls.last_name.patchValue(this.editData.last_name);
      if (this.editData.gender != null){
      this.studentform.controls.gender.patchValue(this.editData.gender.toLowerCase().trim());
      } else {
        this.studentform.controls.gender.patchValue('');
      }
      if (this.editData.grade_id == '0'){
        this.studentform.controls.grade.patchValue(null);
      }else {
        this.studentform.controls.grade.patchValue(this.editData.grade_id);
      }
      if (this.editData.batch_id == '0'){
        this.studentform.controls.batchname.patchValue(null);
      }else {
        this.studentform.controls.batchname.patchValue(this.editData.batch_id);
      }
      this.studentform.controls.schoolId.patchValue(this.editData.school_id);
      this.studentform.controls.studentId.patchValue(this.editData.school_idno);
      this.studentform.controls.email_id.patchValue(this.editData.email_id);
      this.studentform.controls.email_id1_p1.patchValue(this.editData.parent1_email_ids ? this.editData.parent1_email_ids[0] : '');
      this.studentform.controls.email_id2_p1.patchValue(this.editData.parent1_email_ids ? this.editData.parent1_email_ids[1] : '');
      this.studentform.controls.email_id1_p2.patchValue(this.editData.parent2_email_ids ? this.editData.parent2_email_ids[0] : '');
      this.studentform.controls.email_id2_p2.patchValue(this.editData.parent2_email_ids ? this.editData.parent2_email_ids[1] : '');
      this.studentform.controls.mobile.patchValue(this.editData.mobile ? this.editData.mobile[0] : '');
      this.studentform.controls.mobile1.patchValue(this.editData.mobile ? this.editData.mobile[1] : '');
      this.studentform.controls.mobile2.patchValue(this.editData.mobile ? this.editData.mobile[2] : '');
      this.studentform.controls.parent1FirstName.patchValue(this.editData.parent1_firstname);
      this.studentform.controls.parent1LastName.patchValue(this.editData.parent1_lastname);
      this.studentform.controls.parent2FirstName.patchValue(this.editData.parent2_firstname);
      this.studentform.controls.parent2LastName.patchValue(this.editData.parent2_lastname);
      if (this.editData.address && this.editData.address[0]) {
        this.stateList(this.editData.address[0].country_id);
        this.studentform.controls.address1.patchValue(this.editData.address[0].address1);
        this.studentform.controls.address2.patchValue(this.editData.address[0].address2);
      }
      if (this.editData.birthday != null && this.editData.birthday != '0000-00-00' && this.editData.birthday != ''){
        const dob = this.editData.birthday.split('-');
        const dobObject: IMyDateModel = {isRange: false, singleDate: {jsDate: new Date(parseInt(dob[0]), parseInt(dob[1]) - 1, parseInt(dob[2]))}, dateRange: null};
        this.studentform.controls.dob.patchValue(dobObject);
      }else {
        this.studentform.controls.dob.patchValue(null);
      }
      if (this.editData.registration_date != '0000-00-00' && this.editData.registration_date != null) {
        const registration = this.editData.registration_date.split('-');
        // tslint:disable-next-line:radix
        const dobObject: IMyDateModel = {
          isRange: false,
          singleDate: {jsDate: new Date(parseInt(registration[0]), parseInt(registration[1]) - 1, parseInt(registration[2]))},
          dateRange: null
        };
        this.studentform.controls.registration_date.patchValue(dobObject);
      } else {
        const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
        const dropped = dr1.split('-');
        // tslint:disable-next-line:radix
        const droppedObject: IMyDateModel = {
          isRange: false,
          singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
          dateRange: null
        };
        this.studentform.controls.registration_date.patchValue(droppedObject);
      }
      if (this.editData.dropped_date != '0000-00-00' && this.editData.dropped_date != null) {
        const dropped = this.editData.dropped_date.split('-');
        // tslint:disable-next-line:radix
        const dobObject: IMyDateModel = {
          isRange: false,
          singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
          dateRange: null
        };
        this.studentform.controls.dropped_date.patchValue(dobObject);
      } else {
        const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
        const dropped = dr1.split('-');
        const droppedObject: IMyDateModel = {
          isRange: false,
          singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
          dateRange: null
        };
        this.studentform.controls.dropped_date.patchValue(droppedObject);
      }
      if (this.editData.address && this.editData.address[0]) {
        if (this.editData.address[0].state_id == '0'){
          this.studentform.controls.state.patchValue(null);
        }else {
          this.studentform.controls.state.patchValue(this.editData.address[0].state_id);
        }
        if (this.editData.address[0].country_id == '0'){
          this.studentform.controls.country.patchValue('231');
        }else {
          this.studentform.controls.country.patchValue(this.editData.address[0].country_id);
        }
        this.studentform.controls.city.patchValue(this.editData.address[0].city);
        this.studentform.controls.postalCode.patchValue(this.editData.address[0].postal_code);
      }
      if (this.editData.address && this.editData.address.length > 1){
          this.stateList1(this.editData.address[1].country_id);
          this.studentform.controls.addressp21.patchValue(this.editData.address[1].address1);
          this.studentform.controls.addressp22.patchValue(this.editData.address[1].address2);
          this.studentform.controls.city1.patchValue(this.editData.address[1].city);
          if (this.editData.address[1].state_id == '0'){
            this.studentform.controls.state1.patchValue(null);
          }else {
            this.studentform.controls.state1.patchValue(this.editData.address[1].state_id);
          }
        if (this.editData.address[1].country_id == '0'){
          this.studentform.controls.country1.patchValue('231');
        }else {
          this.studentform.controls.country1.patchValue(this.editData.address[1].state_id);
        }
          this.studentform.controls.postalCode1.patchValue(this.editData.address[1].postal_code);
      }
      if (this.editData.status == 'Active'){
        this.studentform.controls.status.patchValue(1);
      }else if (this.editData.status == 'Inactive'){
        this.studentform.controls.status.patchValue(2);
        this.showDroppedDate = true;
      }
      if (this.editData.status == 'Suspended'){
        this.studentform.controls.status.patchValue(3);
        this.showDroppedDate = true;
      } else if (this.editData.status == 'Deleted'){
        this.studentform.controls.status.patchValue(4);
        this.showDroppedDate = true;
      }
      if (this.editData.profile_url != '') {
        this.imagepath.push(this.editData.profile_url);
      }
      this.imagepaththumb.push(this.editData.profile_thumb_url);
    } else{
      if (this.schoolid == 0){
        this.studentform.controls.schoolId.patchValue(null);
      }else{
        this.studentform.controls.schoolId.patchValue(this.schoolid);
      }
      this.stateList('231');
      this.stateList1('231');
      this.studentform.controls.first_name.patchValue('');
      this.studentform.controls.last_name.patchValue('');
      this.studentform.controls.gender.patchValue('');
      this.studentform.controls.dob.patchValue(null);
      this.studentform.controls.grade.patchValue(null);
      this.studentform.controls.batchname.patchValue(null);
      this.studentform.controls.studentId.patchValue('');
      this.studentform.controls.email_id.patchValue('');
      this.studentform.controls.mobile.patchValue('');
      this.studentform.controls.mobile1.patchValue('');
      this.studentform.controls.mobile2.patchValue('');
      this.studentform.controls.email_id1_p1.patchValue('');
      this.studentform.controls.email_id2_p1.patchValue('');
      this.studentform.controls.parent1FirstName.patchValue('');
      this.studentform.controls.parent1LastName.patchValue('');
      this.studentform.controls.address1.patchValue('');
      this.studentform.controls.address2.patchValue('');
      this.studentform.controls.city.patchValue('');
      this.studentform.controls.state.patchValue(null);
      this.studentform.controls.country.patchValue('231');
      this.studentform.controls.postalCode.patchValue('');
      this.studentform.controls.parent2FirstName.patchValue('');
      this.studentform.controls.parent2LastName.patchValue('');
      this.studentform.controls.email_id1_p2.patchValue('');
      this.studentform.controls.email_id2_p2.patchValue('');
      this.studentform.controls.addressp21.patchValue('');
      this.studentform.controls.addressp22.patchValue('');
      this.studentform.controls.city1.patchValue('');
      this.studentform.controls.state1.patchValue(null);
      this.studentform.controls.country1.patchValue('231');
      this.studentform.controls.postalCode1.patchValue('');
      this.studentform.controls.status.patchValue('1');
      const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
      const dropped = dr1.split('-');
      // tslint:disable-next-line:radix
      const droppedObject: IMyDateModel = {
        isRange: false,
        singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
        dateRange: null
      };
      this.studentform.controls.registration_date.patchValue(droppedObject);
      this.studentform.controls.dropped_date.patchValue(null);
      this.imagepath = [];
      this.imagepaththumb = [];
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
      this.studentform.controls.schoolId.patchValue(this.schoolid);
      this.gradeList(this.schoolid);
      this.getBatchList(this.schoolid);
      this.studentform.controls.grade.patchValue(null);
      this.studentform.controls.batchname.patchValue(null);
    }else {
      this.studentform.controls.grade.patchValue(null);
      this.studentform.controls.schoolId.patchValue(null);
      this.studentform.controls.batchname.patchValue(null);
      this.schoolList();
    }
  }
  public datePattern(event: any) {
    this.validationService.dateValidation(event);
  }
  statusChange(){
    var selectStudent : any = document.getElementById('selectStudent');
    var selectedStudentValue = selectStudent.options[selectStudent.selectedIndex].value;
    if (selectedStudentValue == 1){
      this.showDroppedDate = false;
      this.studentform.controls.dropped_date.setValidators(null);
      this.studentform.controls.dropped_date.updateValueAndValidity();

    }else {
      this.showDroppedDate = true;
      this.studentform.controls.dropped_date.setValidators(Validators.required);
      const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
      const dropped = dr1.split('-');
      const droppedObject: IMyDateModel = {
        isRange: false,
        singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
        dateRange: null
      };
      this.studentform.controls.dropped_date.patchValue(droppedObject);
    }
  }
  addstudent(value) {
    const addresslist = [];
    addresslist.push({
      address1: this.studentform.controls.address1.value,
      address2: this.studentform.controls.address2.value,
      city: this.studentform.controls.city.value,
      state: this.studentform.controls.state.value,
      country: this.studentform.controls.country.value,
      postal_code: this.studentform.controls.postalCode.value,
      address_type: '2'
        },
      {
        address1: this.studentform.controls.addressp21.value,
        address2: this.studentform.controls.addressp22.value,
        city: this.studentform.controls.city1.value,
        state: this.studentform.controls.state1.value,
        country: this.studentform.controls.country1.value,
        postal_code: this.studentform.controls.postalCode1.value,
        address_type: '3'
  }
        );
    if ( this.studentform.valid) {
      this.commondata.showLoader(true);
      let data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        first_name: this.studentform.controls.first_name.value,
        last_name: this.studentform.controls.last_name.value,
        gender: this.studentform.controls.gender.value,
        birthday: this.studentform.controls.dob.value == null ? '' : this.datePipe.transform(this.studentform.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd'),
        school_id: this.studentform.controls.schoolId.value,
        school_idno: this.studentform.controls.studentId.value,
        grade_id: this.studentform.controls.grade.value,
        email_id: this.studentform.controls.email_id.value,
        batch_id: this.studentform.controls.batchname.value == null ? '' : this.studentform.controls.batchname.value,
        registration_date: this.studentform.controls.registration_date.value == null ? '' : this.datePipe.transform(this.studentform.controls.registration_date.value.singleDate.jsDate, 'yyyy-MM-dd'),
        dropped_date: this.studentform.controls.dropped_date.value == null ? '' : this.datePipe.transform(this.studentform.controls.dropped_date.value.singleDate.jsDate, 'yyyy-MM-dd'),
        mobile: [this.studentform.controls.mobile.value, this.studentform.controls.mobile1.value, this.studentform.controls.mobile2.value],
        address: addresslist,
        parent1_firstname: this.studentform.controls.parent1FirstName.value,
        parent1_lastname: this.studentform.controls.parent1LastName.value,
        parent2_firstname: this.studentform.controls.parent2FirstName.value,
        parent2_lastname: this.studentform.controls.parent2LastName.value,
        parent1_email_ids: [this.studentform.controls.email_id1_p1.value, this.studentform.controls.email_id2_p1.value],
        parent2_email_ids: [this.studentform.controls.email_id1_p2.value, this.studentform.controls.email_id2_p2.value],
        profile_url: this.imagepath.toString(),
        profile_thumb_url: this.imagepaththumb.toString(),
          status: this.studentform.controls.status.value
      };
      if (value != 'edit') {
        this.student.studentAdd(data).subscribe((successData) => {
              this.addStudentSuccess(successData);
            },
            (error) => {
              this.addStudentFailure(error);
            });
      } else  if (value == 'edit') {
        data['selected_user_id'] = this.editData.user_id,
        this.student.studentEdit(data).subscribe((successData) => {
              this.addStudentSuccess(successData);
            },
            (error) => {
              this.addStudentFailure(error);
            });
      }
      }
    else {
      this.validationService.validateAllFormFields(this.studentform);
      this.toastr.error('Please Fill All The Mandatory Fields');
    }
  }

  addStudentSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.toastr.success(successData.ResponseObject, 'Student');
      this.router.navigate(['/student/list-student']);
    } else{
      this.commondata.showLoader(false);
      this.toastr.error(successData.ErrorObject, 'Student');
    }
  }
  addStudentFailure(error) {
    console.log(error, 'error');
  }
  getBatchList($event) {
    this.commondata.showLoader(true);
    const schoolId = $event;
    const data = {
      platform: 'web',
      type: 'list',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: schoolId,
    };
    this.classroom.batchList(data).subscribe( (successData) => {
          this.batchListSuccess(successData);
        },
        (error) => {
          this.batchListFailure(error);
        });
  }
  batchListSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.batchlistData = successData.ResponseObject;
      this.batchlistData.forEach((value, index, array) => {
        this.batchlistData[index].status = this.batchlistData[index].status == 1 ? 'Active' : this.batchlistData[index].status == 2 ?
            'Inactive' : this.batchlistData[index].status == 3 ? 'Suspended' : this.batchlistData[index].status == 4 ? 'Deleted': '' ;
      });
    }
  }
  batchListFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
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

  stateList(event) {
    this.stateListData = '';
    const countryVal = event;
    this.studentform.controls.state.patchValue(null);
    const data = {
      platform: 'web',
      country_id: countryVal,
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

    }
  }
  stateListFailure(error) {
    console.log(error, 'error');
  }

  stateList1(event) {

    this.stateListData1 = '';
    const selectedCountry = event;
    this.studentform.controls.state1.patchValue(null);
    const data = {
      platform: 'web',
      country_id: selectedCountry,
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid')
    };
    this.common.getStateList(data).subscribe( (successData) => {
          this.stateList1Success(successData);
        },
        (error) => {
          this.stateList1Failure(error);
        });
  }
  stateList1Success(successData) {
    if (successData.IsSuccess) {
      this.stateListData1 = successData.ResponseObject;
    }
  }
  stateList1Failure(error) {
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
    }
  }
  countryListFailure(error) {
    console.log(error, 'error');
  }
  gradeList($event) {
    const schoolId = $event;
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id : schoolId,
      type: 'active'
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
  checkValue(eve){
    if (this.type == 'add' ) {
    }else {
      this.studentform.controls.registration_date.clearValidators();
      this.studentform.controls.registration_date.setValidators(null);
      this.studentform.controls.registration_date.updateValueAndValidity();
    }
  }

  droppedDateCheckValue(eve){
    if (this.type == 'add' ) {
    }else {
      if (eve.value == ''){
        this.studentform.controls.dropped_date.setValidators(Validators.required);
        this.studentform.controls.dropped_date.updateValueAndValidity();
      }else {
        this.studentform.controls.dropped_date.clearValidators();
        this.studentform.controls.dropped_date.setValidators(null);
        this.studentform.controls.dropped_date.updateValueAndValidity();
      }
    }
  }
  public numberPattern(event: any) {
    this.validationService.numberValidate1(event);
  }
  encodeImageFileAsURL(event: any) {
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
      uploadtype: 'student'
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
    this.clearUploadfilename();
  }
  clearUploadfilename(){
    this.myInputVariable.nativeElement.value = '';
  }
}
