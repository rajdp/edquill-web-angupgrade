import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../shared/service/login.service';
import {AuthService} from '../../../shared/service/auth.service';
import {Router} from '@angular/router';
import {ValidationService} from '../../../shared/service/validation.service';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {CommonDataService} from '../../../shared/service/common-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-confirm-password',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
    templateUrl: './confirm-password.component.html',
    styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {
    public message: any;
    public passwordValid: any;
    public token: any;
    public roleId: any;
    public setPassword: FormGroup;
    public conps = true;
    public conps1 = true;
    public logo: any;
    public functionCalled: any = false;

    constructor(private formBuilder: FormBuilder, public commondata: CommonDataService, public route: ActivatedRoute,
                private toastr: ToastrService, public loginService: LoginService, public authService: AuthService,
                public router: Router, public validation: ValidationService) {
        const url = window.location.href;
        if (url.toString().indexOf('xtracurriculum') > -1) {
            this.logo = 'xtraCurriculum_2.png';
        } else if (url.toString().indexOf('uniqprep') > -1) {
            this.logo = 'uniqprep.png';
        } else if (url.toString().indexOf('safeteen') > -1) {
            this.logo = 'safeTeensOrg_2.png';
        } else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('edquill') > -1 || url.toString().indexOf('edveda') > -1) {
            this.logo = 'EdQuill_2.png';
        }
        this.route.params.forEach((params) => {
            this.token = params.id;
        });
        this.createLoginForm();
    }

    createLoginForm() {
        this.setPassword = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            confirmPassword: ['', Validators.required],
        });
    }

    ngOnInit() {
    }

    // here we have the 'passwords' group
    checkPasswords() {
        const pass = this.setPassword.controls.password.value.toString();
        const confirmPass = this.setPassword.controls.confirmPassword.value.toString();
        this.passwordValid = pass !== confirmPass;
        return this.passwordValid;
    }

    checkConfirmPassword() {
        if (this.setPassword.controls.confirmPassword.value != '') {
            this.checkPasswords();
        }
    }

    update() {
        if (this.setPassword.valid && !this.passwordValid) {
            const data = {
                platform: 'web',
                email_id: this.setPassword.controls.userName.value,
                encoded_user_id: this.token,
                password: this.setPassword.controls.password.value
            };
            this.loginService.changePassword(data).subscribe((successData) => {
                    this.changeSuccess(successData);
                },
                (error) => {
                    console.error(error);
                });
        } else {
            this.toastr.error('Please Fill All The Fields', 'Error');
            this.validation.validateAllFormFields(this.setPassword);
        }
    }

    changeSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject, 'Account Activated');
            this.router.navigate(['/auth/login']);
        } else {
            this.toastr.error(successData.ErrorObject, '');
        }
    }
}
