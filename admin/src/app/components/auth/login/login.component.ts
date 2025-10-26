import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import {LoginService} from '../../../shared/service/login.service';
import {AuthService} from '../../../shared/service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {CommonDataService} from '../../../shared/service/common-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: UntypedFormGroup;
  public conps: boolean;
  public logo: any;
  public type: any;

  constructor(private formBuilder: UntypedFormBuilder, public loginService: LoginService, public commondata: CommonDataService, public activateRoute: ActivatedRoute,
              public authService: AuthService, public router: Router, private toastr: ToastrService, public validation: ValidationService) {
      this.activateRoute.params.forEach((params) => {
          this.type = params.type;
      });
      let url = window.location.href;
      if (url.toString().indexOf('xtracurriculum') > -1) {
          this.logo = 'xtraCurriculum_2.png';
      }  else if (url.toString().indexOf('elevenace') > -1) {
          this.logo = 'elevenAce.png';
      }  else if (url.toString().indexOf('uniqprep') > -1) {
          this.logo = 'uniqprep.png';
      } else if (url.toString().indexOf('safeteen') > -1) {
          this.logo = 'safeTeensOrg.png';
      } else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('edquill') > -1 || url.toString().indexOf('uthkal') > -1 || url.toString().indexOf('edveda') > -1) {
          this.logo = 'EdQuill_2.png';
      }
    this.createLoginForm();
    this.loginForm.controls.userName.patchValue(localStorage.getItem('username'));
    this.loginForm.controls.password.patchValue(localStorage.getItem('password'));
    this.conps = true;
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
      userName: ['sridhar.sivichandran@gmail.com'],
      password: ['123456'],
    });
  }



  ngOnInit() {
      this.authService.checkAuthentication();
      let list = localStorage.getItem('username');
  }

  rememberList(value){
      if (value.target.checked == true){
          localStorage.setItem('username', this.loginForm.controls.userName.value);
          localStorage.setItem('password', this.loginForm.controls.password.value);
      } else {
          localStorage.setItem('username', '');
          localStorage.setItem('password', '');
      }
   }
    login() {
        if (this.loginForm.valid) {
            this.commondata.showLoader(false);
            const data = {
                platform: 'web',
                role_id: this.type == undefined ? '1' : '8',
                username: this.loginForm.controls.userName.value,
                password: this.loginForm.controls.password.value
            };
            this.loginService.login(data).subscribe((successData) => {
                    this.loginSuccess(successData);
                    },
                (error) => {
                    this.loginFailure(error);

                });
        } else{
            this.validation.validateAllFormFields(this.loginForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    loginSuccess(successData) {
      let data = successData.ResponseObject;
      if (successData.IsSuccess) {
          this.commondata.showLoader(false);
          this.loginService.changeHomePage(data.user_role);
          if (this.type == undefined) {
              this.authService.setToken(data.user_id, data.first_name, data.last_name, data.user_role, data.Accesstoken);
              this.authService.setSessionData('rista-status', data.status);
              this.authService.setSessionData('rista-default_password', data.default_password);
              this.authService.setSessionData('rista-email_id', data.email_id);
              this.authService.setSessionData('rista-mobile', data.mobile);
              this.authService.setSessionData('rista-birthday', data.birthday);
              this.authService.setSessionData('rista-profile_url', data.profile_url);
              this.authService.setSessionData('rista-profile_thumb_url', data.profile_thumb_url);
              this.authService.setSessionData('rista-gender', data.gender);
              this.authService.setSessionData('rista-location', data.location);
              this.authService.setSessionData('rista-school_id', 0);
              this.authService.setSessionData('role', data.user_role);
              this.toastr.success(successData.ResponseObject.message, 'Login');
              this.router.navigate(['/dashboard/default']);
          } else {
              this.authService.setToken(data.user_id, data.first_name, data.last_name, data.user_role, data.Accesstoken);
              this.authService.setSessionData('rista-status', data.status);
              this.authService.setSessionData('rista-default_password', data.default_password);
              this.authService.setSessionData('rista-email_id', data.email_id);
              this.authService.setSessionData('rista-mobile', data.mobile);
              this.authService.setSessionData('rista-birthday', data.birthday);
              this.authService.setSessionData('rista-profile_url', data.profile_url);
              this.authService.setSessionData('rista-profile_thumb_url', data.profile_thumb_url);
              this.authService.setSessionData('rista-gender', data.gender);
              this.authService.setSessionData('rista-location', data.location);
              this.authService.setSessionData('rista-school_id', 0);
              this.authService.setSessionData('role', data.user_role);
              this.toastr.success(successData.ResponseObject.message, 'Login');
              this.router.navigate(['/blog/list-blog']);
          }
      } else{
          this.commondata.showLoader(false);
          this.toastr.error(successData.ErrorObject, 'Login');
      }
    }
    loginFailure(error) {
    }

}

