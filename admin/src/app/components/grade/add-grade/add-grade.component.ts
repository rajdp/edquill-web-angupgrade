import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../../shared/service/auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ActivatedRoute} from '@angular/router';
import {GradeService} from '../../../shared/service/grade.service';
import {SchoolService} from '../../../shared/service/School.service';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.scss']
})
export class AddGradeComponent implements OnInit, OnDestroy {
  public gradeform: UntypedFormGroup;
  public type: any;
  public editData: any;
  public recordBase64Url: any;
  public selectedSchool: any;
  public schoolData: any;
  public grade_id: any;
  public schoolid: any = 0;
  public showSchoolSearch: boolean;
  public allowSelect: boolean;
  constructor(public route: ActivatedRoute, private formBuilder: UntypedFormBuilder, public select: SchoolselectionService,
              public commondata: CommonDataService, private toastr: ToastrService,
              public auth: AuthService, public gradeService: GradeService, public brandservices: SchoolService,
              public router: Router, public validationService: ValidationService) {

    this.route.params.forEach((params) => {
      this.type = params.type;
    });
    this.gradeform = this.formBuilder.group({
      gradename: ['', Validators.required],
      description: '',
      status: ['', Validators.required],
      schoolId: ['', Validators.required],
    });

    this.select.selectSchool.subscribe((params) => {
      if (params != 0){
        if (this.router.url.includes('create-grade/add')){
          this.init(params);
        }else if (this.router.url.includes('create-grade/edit')){
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
      this.editData = JSON.parse(this.auth.getSessionData('editgrade'));
      this.grade_id = this.editData.grade_id;
      this.gradeform.controls.gradename.patchValue(this.editData.grade_name);
      this.gradeform.controls.description.patchValue(this.editData.description);
      if (this.editData.status == 'Active'){
        this.gradeform.controls.status.patchValue(1);
      }else if (this.editData.status == 'Inactive'){
      this.gradeform.controls.status.patchValue(2);
      }
      if (this.editData.status == 'Suspended'){
        this.gradeform.controls.status.patchValue(3);
      }else if (this.editData.status == 'Deleted'){
        this.gradeform.controls.status.patchValue(4);
      }
      this.gradeform.controls.schoolId.patchValue(this.editData.school_id);

    } else{
      if (this.schoolid == 0){
        this.gradeform.controls.schoolId.patchValue(null);
      }else {
        this.gradeform.controls.schoolId.patchValue(this.schoolid);
      }
      this.gradeform.controls.gradename.patchValue('');
      this.gradeform.controls.description.patchValue('');
      this.gradeform.controls.status.patchValue('1');
    }
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.allowSelect = false;
    this.select.allowChangeSchool(this.allowSelect);
  }

  init(data){
    this.schoolid = this.auth.getSessionData('rista-school_id');
    if (this.schoolid != 0){
      this.schoolList();
      this.gradeform.controls.schoolId.patchValue(this.schoolid);
    }else {
      this.gradeform.controls.schoolId.patchValue(null);
      this.schoolList();
    }
  }

  addgrade(valve) {
    if (this.gradeform.valid) {
      this.commondata.showLoader(false);
      const data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        grade_name: this.gradeform.controls.gradename.value,
        description: this.gradeform.controls.description.value,
        status: this.gradeform.controls.status.value,
        school_id: this.gradeform.controls.schoolId.value,
        grade_id: this.grade_id ?  this.grade_id : '',
      };
      if (valve == 'add'){
      this.gradeService.gradeAdd(data).subscribe((successData) => {
            this.addgradeSuccess(successData);
          },
          (error) => {
            this.addgradeFailure(error);
          });
    }
      else if (valve == 'edit'){
        this.gradeService.gradeEdit(data).subscribe((successData) => {
              this.addgradeSuccess(successData);
            },
            (error) => {
              this.addgradeFailure(error);
            });
      }
      }else {
      this.validationService.validateAllFormFields(this.gradeform);
      this.toastr.error('Please Fill All The Mandatory Fields');
    }
  }
  addgradeSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.toastr.success(successData.ResponseObject, 'Grade');
      this.router.navigate(['/grade/list-grade']);
    } else{
      this.commondata.showLoader(false);
      this.toastr.error(successData.ErrorObject, 'Grade');
    }
  }
  addgradeFailure(error) {
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
