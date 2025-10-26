import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { AuthService} from '../../../shared/service/auth.service';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {CareersService} from '../../../shared/service/careers.service';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-careers-list',
  templateUrl: './careers-list.component.html',
  styleUrls: ['./careers-list.component.scss']
})
export class CareersListComponent implements OnInit {
  public careerData: any;
  public allCareerData: any;
  public type: any;
  public careersEditId: any;
  public careersform: UntypedFormGroup;
  private modalRef: NgbModalRef;
  @ViewChild('addJob') addJob: TemplateRef<any>;
  constructor(private modalService: NgbModal, public auth: AuthService, public formBuilder: UntypedFormBuilder, public careersService: CareersService, private toastr: ToastrService,
              private router: Router) {
    this.careersform = this.formBuilder.group({
      publicationCode: '',
      title: ['', Validators.required],
      description: '',
      department: '',
      basic_qualification: '',
      prefered_qualification: '',
      address1: '',
      address2: '',
      status: ['', Validators.required],
    });
    this.careersList();
  }
  ngOnInit() {
  }
  close() {
    this.modalRef.close();
  }
  careersList() {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid')
    };
    this.careersService.getCareersList(data).subscribe((successData) => {
          this.careersSuccess(successData);
        },
        (error) => {
          console.error(error, 'error_contentCreator');
        });
  }

  careersSuccess(successData) {
    if (successData.IsSuccess) {
      this.careerData = successData.ResponseObject;
      this.allCareerData = successData.ResponseObject;
      console.log(this.careerData, 'this.careerData');
      // for (let i = 0; i < this.contentdata.length; i++) {
      //   if (this.contentdata[i].status == '1') {
      //     this.details = 'Published';
      //   } else if (this.contentdata[i].status == '5') {
      //     this.details = 'Draft';
      //   }
      // }
    }
  }
  filterCareer(event) {
    console.log(event.target.value, 'val');
    let val = event.target.value;
    if (val == 'All') {
      this.careerData = this.allCareerData;
    } else if (val == 'Active') {
      this.careerData = this.allCareerData.filter((item) => {
        return item.status == '1';
      });
    } else if (val == 'Inactive') {
      this.careerData = this.allCareerData.filter((item) => {
        return item.status == '2';
      });
    }
  }
  addJobDetails(type, value){
    this.modalRef = this.modalService.open(this.addJob, {size: 'xl'});
    this.type = type;
    if (this.type == 'edit'){
      this.careersEditId = value.id;
      this.careersform.controls.title.patchValue(value.title);
      this.careersform.controls.department.patchValue(value.department);
      this.careersform.controls.address1.patchValue(value.address1);
      this.careersform.controls.address2.patchValue(value.address2);
      this.careersform.controls.description.patchValue(value.description);
      this.careersform.controls.basic_qualification.patchValue(value.basic_qualification);
      this.careersform.controls.prefered_qualification.patchValue(value.prefered_qualification);
      this.careersform.controls.status.patchValue(value.status);
    } else {
      this.careersform.reset();
    }
    console.log(value, 'value');
    console.log(this.careersEditId, 'id');
  }
  setJobList(type){
    console.log(type, 'test');
    if (this.careersform.valid){
      const data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        title: this.careersform.controls.title.value,
        department: this.careersform.controls.department.value,
        address1: this.careersform.controls.address1.value,
        address2: this.careersform.controls.address2.value,
        description: this.careersform.controls.description.value,
        basic_qualification: this.careersform.controls.basic_qualification.value,
        prefered_qualification: this.careersform.controls.prefered_qualification.value,
        status: this.careersform.controls.status.value,
      };
      if (type == 'add'){
        this.careersService.addCareersList(data).subscribe((successData) => {
              this.addcareersSuccess(successData);
            },
            (error) => {
              console.error(error, 'error_contentCreator');
            });
      } else if (type == 'edit') {
        data['id'] = this.careersEditId;
        this.careersService.editCareersList(data).subscribe((successData) => {
              this.editcareersSuccess(successData);
            },
            (error) => {
              console.error(error, 'error_contentCreator');
            });
      }
    }else{
  this.toastr.error('Please Fill all Mandatory Field');
}
  }
  addcareersSuccess(successData) {
    if (successData.IsSuccess) {
      this.toastr.success(successData.ResponseObject);
      this.careersList();
      this.close();
    }else{
      this.toastr.error(successData.ErrorObject);
    }
  }
  editcareersSuccess(successData) {
    if (successData.IsSuccess) {
      this.toastr.success(successData.ResponseObject);
      this.careersList();
      this.close();
    }else {
      this.toastr.error(successData.ErrorObject);
    }
  }

  viewMore(list, type) {
    this.auth.setSessionData('careers-list', JSON.stringify(list));
    if (type == 'view') {
      this.router.navigate(['/careers/application']);
    } else if (type == 'details') {
      this.router.navigate(['/careers/resume-details']);
    }
  }
}
