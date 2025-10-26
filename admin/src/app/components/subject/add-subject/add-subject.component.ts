import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../../shared/service/auth.service';
import {CategoryService} from '../../../shared/service/category.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ActivatedRoute} from '@angular/router';
import {SchoolService} from '../../../shared/service/School.service';
import {SubjectServices} from '../../../shared/service/subject.services';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit, OnDestroy {
  public subjectform: UntypedFormGroup;
  public type: any;
  public editData: any;
  public recordBase64Url: any;
  public selectedSchool: any;
  public schoolData: any;
  public subject_id: any;
  public showSchoolSearch: boolean;
  public allowSelect: boolean;
  public schoolid: any = 0;

  constructor(public route: ActivatedRoute, private formBuilder: UntypedFormBuilder, public select: SchoolselectionService,
              public commondata: CommonDataService, private toastr: ToastrService, public subjectservice: SubjectServices,
              public auth: AuthService, public category: CategoryService, public brandservices: SchoolService,
              public router: Router, public validationService: ValidationService) {

    this.route.params.forEach((params) => {
      this.type = params.type;
    });

    this.subjectform = this.formBuilder.group({
      name: ['', Validators.required],
      description: '',
      status: ['', Validators.required],
      schoolId: ['', Validators.required],
    });

    this.select.selectSchool.subscribe((params) => {
      if (params != 0){
        if (this.router.url.includes('create-subject/add')){
          this.init(params);
        }else if (this.router.url.includes('create-subject/edit')){
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
    if (this.type == 'edit'){
      this.allowSelect = true;
      this.select.allowChangeSchool(this.allowSelect);
      this.editData = JSON.parse(this.auth.getSessionData('editsubject'));
      this.subject_id = this.editData.subject_id;
      this.subjectform.controls.name.patchValue(this.editData.subject_name);
      this.subjectform.controls.description.patchValue(this.editData.description);
      if (this.editData.status == 'Active'){
        this.subjectform.controls.status.patchValue(1);
      }else if (this.editData.status == 'Inactive'){
        this.subjectform.controls.status.patchValue(2);
      }
      if (this.editData.status == 'Suspended'){
        this.subjectform.controls.status.patchValue(3);
      }else if (this.editData.status == 'Deleted'){
        this.subjectform.controls.status.patchValue(4);
      }
      this.subjectform.controls.schoolId.patchValue(this.editData.school_id);

    } else{
      if (this.schoolid == 0){
        this.subjectform.controls.schoolId.patchValue(null);
      }else {
        this.subjectform.controls.schoolId.patchValue(this.schoolid);
      }
      this.subjectform.controls.name.patchValue('');
      this.subjectform.controls.description.patchValue('');
      this.subjectform.controls.status.patchValue('1');
    }
  }


  ngOnInit() {
    this.schoolList();
  }

  ngOnDestroy(): void {
    this.allowSelect = false;
    this.select.allowChangeSchool(this.allowSelect);
  }

  init(data){
    this.schoolid = this.auth.getSessionData('rista-school_id');
    if (this.schoolid != 0){
      this.schoolList();
      this.subjectform.controls.schoolId.patchValue(this.schoolid);
    }else {
      this.subjectform.controls.schoolId.patchValue(null);
      this.schoolList();
    }
  }

  addsubject(value) {
    if (this.subjectform.valid) {
      let id = [];
      id.push(this.subjectform.controls.schoolId.value);
      const data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        subject_name: this.subjectform.controls.name.value,
        description: this.subjectform.controls.description.value,
        status: this.subjectform.controls.status.value,
        school_id: id,
        subject_id: this.subject_id ?  this.subject_id : '',
      };
      if (value == 'add'){
      this.subjectservice.subjectAdd(data).subscribe((successData) => {
            this.addSubjectSuccess(successData);
          },
          (error) => {
            this.addSubjectFailure(error);
          });
    }else if (value == 'edit'){
        this.subjectservice.subjectEdit(data).subscribe((successData) => {
              this.addSubjectSuccess(successData);
            },
            (error) => {
              this.addSubjectFailure(error);
            });
      }
       }
    else {
        this.validationService.validateAllFormFields(this.subjectform);
        this.toastr.error('Please Fill All The Mandatory Fields');
      }
  }
  addSubjectSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.toastr.success(successData.ResponseObject, 'Subject');
      this.router.navigate(['/subject/list-subject']);
    } else{
      this.commondata.showLoader(false);
      this.toastr.error(successData.ErrorObject, 'Subject');
    }
  }
  addSubjectFailure(error) {
    console.log(error, 'error');
  }
  public numberPattern(event: any) {
    this.validationService.numberValidate1(event);
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
    }
    for (let i = 0; i < this.schoolData.length; i++) {
      this.selectedSchool.push({id: this.schoolData[i].school_id, name: this.schoolData[i].school_name});
    }

  }
  schoolListFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }
}
