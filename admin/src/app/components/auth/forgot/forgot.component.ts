import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../shared/service/login.service';
import {AuthService} from '../../../shared/service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ValidationService} from '../../../shared/service/validation.service';
import {CategoryService} from '../../../shared/service/category.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  public message: any;
  public token: any;
  public logo: any;
  public passwordValid: boolean;
  public forgotList: boolean;
  public loginForm: UntypedFormGroup;
  public forgotForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder, public commondata: CommonDataService, public category: CategoryService,
              public loginService: LoginService, public authService: AuthService, public router: Router, public validation: ValidationService,
              public route: ActivatedRoute, private toastr: ToastrService) {
      let url = window.location.href;
      if (url.toString().indexOf('xtracurriculum') > -1) {
          this.logo = 'xtraCurriculum_2.png';
      }  else if (url.toString().indexOf('elevenace') > -1) {
          this.logo = 'elevenAce.png';
      } else if (url.toString().indexOf('uniqprep') > -1) {
          this.logo = 'uniqprep.png';
      } else if (url.toString().indexOf('safeteen') > -1) {
          this.logo = 'safeTeensOrg.png';
      } else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('uthkal') > -1 || url.toString().indexOf('edquill') > -1 || url.toString().indexOf('edveda') > -1) {
          this.logo = 'EdQuill_2.png';
      }
    this.createLoginForm();
    this.route.params.forEach((params) => {
          this.token = params.id;
          if (this.token == undefined || this.token == ''){
              this.forgotList = false;
          } else {
              this.forgotList = true;
          }
      });
    this.message = '';
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
      userName: ['', Validators.compose([Validators.required, Validators.pattern('^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')])]
    });
    this.forgotForm = this.formBuilder.group({
         userName: ['', Validators.compose([Validators.required, Validators.pattern('^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        confirmpassword: [''],
    });

  }



  ngOnInit() {
      this.forgotForm.controls.userName.reset();
      this.forgotForm.controls.password.reset();
      this.forgotForm.controls.confirmpassword.reset();
  }
    checkPasswords() {
        const pass = this.forgotForm.controls.password.value;
        const confirmPass = this.forgotForm.controls.confirmpassword.value;
        if (pass === confirmPass) {
            this.passwordValid = false;
        } else {
            this.passwordValid = true;
        }
        return this.passwordValid;
    }


    change(){
            if (this.loginForm.valid) {
                this.commondata.showLoader(true);
                const data = {
                    platform: 'web',
                    role_id: '1',
                    email_id: this.loginForm.controls.userName.value
                };
                this.loginService.forgotPassword(data).subscribe((successData) => {
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
            this.message = successData.ResponseObject.message;
        } else{
            this.commondata.showLoader(false);
            this.toastr.error('Please enter valid email-id', 'Unauthorized E-mail id');
        }
    }
    changeFailure(error) {
        this.toastr.error('Please enter valid email-id', 'Unauthorized E-mail id');
    }
    update(){
      const pass = this.forgotForm.controls.password.value;
      const confirmpass = this.forgotForm.controls.confirmpassword.value;
        if (this.forgotForm.valid && pass == confirmpass) {
            this.commondata.showLoader(true);
            const data = {
                platform: 'web',
                role_id: '1',
                email_id: this.forgotForm.controls.userName.value,
                token: this.token,
                password: this.forgotForm.controls.password.value
            };
            this.loginService.changeForgotPassword(data).subscribe((successData) => {
                    this.changeForgotSuccess(successData);
                },
                (error) => {
                    this.changeForgotFailure(error);
                });
        } else{
            this.validation.validateAllFormFields(this.forgotForm);
        }
    }

    changeForgotSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success('Password Updated Successfully' , 'Success!');
            this.router.navigate(['/auth/login']);
        } else{
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, '');
        }
    }
    changeForgotFailure(error) {
        console.log(error, 'error');
    }

}
