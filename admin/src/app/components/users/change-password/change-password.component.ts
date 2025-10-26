import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../../shared/service/auth.service';
import {CategoryService} from '../../../shared/service/category.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {CommonDataService} from '../../../shared/service/common-data.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public accountForm: UntypedFormGroup;
  public conps: boolean;
  public conps1: boolean;

  constructor(private formBuilder: UntypedFormBuilder, public commondata: CommonDataService, private toastr: ToastrService, public auth: AuthService, public category: CategoryService, public router: Router, public validation: ValidationService) {
    this.accountForm = this.formBuilder.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.required],
    });
    this.conps = true;
    this.conps1 = true;
  }


  ngOnInit() {
    this.commondata.showLoader(false);
  }


  changePassword() {
    if ( this.accountForm.valid) {
      this.commondata.showLoader(true);
      const data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        password: this.accountForm.controls.password.value,
        confirm_password: this.accountForm.controls.confirmPassword.value
      };
      this.category.changePassword(data).subscribe((successData) => {
            this.changePasswordSuccess(successData);
          },
          (error) => {
            this.changePasswordFailure(error);
          });
    } else {
      this.validation.validateAllFormFields(this.accountForm);
    }
  }
  changePasswordSuccess(successData) {

    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.toastr.success(successData.ResponseObject.message, '');
      this.router.navigate(['/dashboard/default']);
    } else{
      this.commondata.showLoader(false);
      this.toastr.error(successData.ErrorObject, '');
    }
  }
  changePasswordFailure(error) {
    console.log(error, 'error');
  }


}
