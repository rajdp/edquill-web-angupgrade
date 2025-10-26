import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../../shared/service/auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ActivatedRoute} from '@angular/router';
import {SchoolService} from '../../../shared/service/School.service';
import {ClassroomService} from '../../../shared/service/classroom.service';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.scss']
})
export class AddClassroomComponent implements OnInit, OnDestroy {
  public classroomform: UntypedFormGroup;
  public type: any;
  public editData: any;
  public recordBase64Url: any;
  public selectedSchool: any;
  public schoolData: any;
  public batch_id: any;
  public showSchoolSearch: boolean;
  public school_id: any = 0;
  public allowSelect: boolean;

  constructor(public route: ActivatedRoute, private formBuilder: UntypedFormBuilder, public select: SchoolselectionService,
              public commondata: CommonDataService, private toastr: ToastrService,
              public auth: AuthService, public classroom: ClassroomService, public brandservices: SchoolService,
              public router: Router, public validationService: ValidationService) {

    this.route.params.forEach((params) => {
      this.type = params.type;
    });
    this.classroomform = this.formBuilder.group({
      batchname: ['', Validators.required],
      status: ['', Validators.required],
      schoolId: ['']
    });

    this.select.selectSchool.subscribe((params) => {
      if (params != 0){
        if (this.router.url.includes('create-classroom/add')){
          this.init(params);
        }else if (this.router.url.includes('create-classroom/edit')){
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
      this.editData = JSON.parse(this.auth.getSessionData('editclassroom'));
      this.batch_id = this.editData.batch_id;
      this.classroomform.controls.batchname.patchValue(this.editData.batch_name);
      if (this.editData.status == 'Active'){
        this.classroomform.controls.status.patchValue(1);
      }else if (this.editData.status == 'Inactive'){
        this.classroomform.controls.status.patchValue(2);
      }
      if (this.editData.status == 'Suspended'){
        this.classroomform.controls.status.patchValue(3);
      }else if (this.editData.status == 'Deleted'){
        this.classroomform.controls.status.patchValue(4);
      }
      this.classroomform.controls.schoolId.patchValue(this.editData.school_id);
    } else{
      if (this.school_id == 0){
        this.classroomform.controls.schoolId.patchValue(null);
      }else {
        this.classroomform.controls.schoolId.patchValue(this.school_id);
      }
      this.classroomform.controls.batchname.patchValue('');
      this.classroomform.controls.status.patchValue('1');
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
    this.school_id = this.auth.getSessionData('rista-school_id');
    if (this.school_id != 0){
      this.schoolList();
      this.classroomform.controls.schoolId.patchValue(this.school_id);
    }else {
      this.classroomform.controls.schoolId.patchValue(null);
      this.schoolList();
    }
  }
  addClassRoom(valve) {
    if (this.classroomform.valid) {
      this.commondata.showLoader(false);
      const data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        batch_name: this.classroomform.controls.batchname.value,
        status: this.classroomform.controls.status.value,
        school_id: this.classroomform.controls.schoolId.value,
        batch_id: this.batch_id ?  this.batch_id : '',
      };
      if (valve == 'add'){
        this.classroom.classRoomAdd(data).subscribe((successData) => {
              this.classRoomSuccess(successData);
            },
            (error) => {
              this.classRoomFailure(error);
            });
      }
      else if (valve == 'edit'){
        this.classroom.classRoomEdit(data).subscribe((successData) => {
              this.classRoomSuccess(successData);
            },
            (error) => {
              this.classRoomFailure(error);
            });
      }
    }else {
      this.validationService.validateAllFormFields(this.classroomform);
      this.toastr.error('Please Fill All The Mandatory Fields');
    }
  }
  classRoomSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      if (this.type == 'add'){
        this.toastr.success('Content Folder Added Successfully');
      }else {
        this.toastr.success('Content Folder Updated Successfully');
      }
      this.router.navigate(['/classroom/list-classroom']);
    } else{
      this.commondata.showLoader(false);
      this.toastr.error(successData.ErrorObject);
    }
  }
  classRoomFailure(error) {
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
