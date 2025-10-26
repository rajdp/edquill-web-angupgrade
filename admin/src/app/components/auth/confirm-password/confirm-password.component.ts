import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../shared/service/login.service';
import {AuthService} from '../../../shared/service/auth.service';
import {Router} from '@angular/router';
import {ValidationService} from '../../../shared/service/validation.service';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {CommonDataService} from '../../../shared/service/common-data.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {
   public message: any;
   public passwordValid: any;
   public token: any;
   public loginForm: UntypedFormGroup;
   public conps: boolean;
   public conps1: boolean;

  constructor(private formBuilder: UntypedFormBuilder, public commondata: CommonDataService, public route: ActivatedRoute, private toastr: ToastrService, public loginService: LoginService, public authService: AuthService, public router: Router, public validation: ValidationService) {
    this.route.params.forEach((params) => {
        this.token = params.id;
        this.conps = true;
        this.conps1 = true;
    });

    this.createLoginForm();
  }

    owlcarousel = [
        {
            title: 'Welcome to EdQuill',
            desc: 'We focus on making all EdQuill events both \'New\' and \'News\'',
        },
        {
            title: 'Welcome to EdQuill',
            desc: 'We focus on making all EdQuill events both \'New\' and \'News\'',
        },
        {
            title: 'Welcome to EdQuill',
            desc: 'We focus on making all EdQuill events both \'New\' and \'News\'',
        }
    ];
  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: [''],
    });
  }



  ngOnInit() {
  }

    // here we have the 'passwords' group
    checkPasswords() {
        let pass = this.loginForm.controls.password.value;
        let confirmPass = this.loginForm.controls.confirmPassword.value;
        if (pass === confirmPass) {
            this.passwordValid = false;
        } else {
            this.passwordValid = true;
        }
        return this.passwordValid;
    }

    update(){
        if (this.loginForm.valid) {
            this.commondata.showLoader(true);
            const data = {
                platform: 'web',
                role_id: '1',
                email_id: this.loginForm.controls.userName.value,
                encoded_user_id: this.token,
                password: this.loginForm.controls.password.value
            };
            this.loginService.changePassword(data).subscribe((successData) => {
                    this.changeSuccess(successData);
                },
                (error) => {
                    this.changeFailure(error);
                });
        } else{
            this.validation.validateAllFormFields(this.loginForm);
        }
    }

    changeSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success(successData.ResponseObject.message, '');
            this.router.navigate(['/auth/login']);
        } else{
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, '');
        }
    }
    changeFailure(error) {
        console.log(error, 'error');
    }
}
