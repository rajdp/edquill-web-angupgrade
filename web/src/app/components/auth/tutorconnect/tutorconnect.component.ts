import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, TemplateRef, Renderer2 } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../../shared/service/login.service';
import {AuthService} from '../../../shared/service/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ActivatedRoute} from '@angular/router';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {SchoolService} from '../../../shared/service/School.service';
import {SessionConstants} from '../../../shared/data/sessionConstants';
import {DeviceDetectorService} from 'ngx-device-detector';
import {CommonService} from '../../../shared/service/common.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {StudentService} from '../../../shared/service/student.service';
import {EnvironmentService} from '../../../environment.service';
import {urls} from '../../../shared/utils/urls';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NgbModalModule],
    templateUrl: './tutorconnect.component.html',
    styleUrls: ['./tutorconnect.component.scss']
})

export class TutorconnectComponent implements OnInit {

    public type: any;
    public checkbox: any;
    public conps = true;
    public conps1 = true;
    public remember: boolean;
    public userId: any;
    public checkterms: any;
    public roleId: any;
    public corporateId: any;
    public closeResult: string;
    @ViewChild('tcupdate') updateContent: TemplateRef<any>;
    private modalRef: NgbModalRef;
    public studentdata: any;
    public teacherdata: any;
    public admindata: any;
    public logo: any;
    public gradedata: any;
    private schoolData: any;
    private settingData = [];
    private timeZoneList = [];
    public passwordValid: boolean;
    public backEndURLSignIn = '';
    public loginForm: FormGroup;
    public creatorData: any;
    public gradeList = [];
    public user: any;
    public siteName = '';

    constructor(private formBuilder: FormBuilder, public activateRoute: ActivatedRoute, public loginService: LoginService, public env: EnvironmentService,
                public commondata: CommonDataService, public common: CommonService, private deviceService: DeviceDetectorService,
                public student: StudentService, public authService: AuthService, public config: ConfigurationService,
                public router: Router, private toastr: ToastrService, public validation: ValidationService, private modalService: NgbModal,
                public schoolService: SchoolService, public behavior: NewsubjectService, private renderer: Renderer2) {
        this.activateRoute.params.forEach((params) => {
            console.log(params, 'params');
            this.type = params.enc_key;
            this.remember = false;
            console.log('servuce')
            console.log(this.type, 'type');
        });
        localStorage.clear();
        const url = window.location.href;
        console.log(url, 'url');
        this.loginForm = this.formBuilder.group({
            userName: '',
            password: '',
            checkbox: '',
        });
        if (url.toString().indexOf('xtracurriculum') > -1) {
            this.logo = 'xtraCurriculum.png';
            this.siteName = 'XtraCurriculum';
        } else if (url.toString().indexOf('safeteen') > -1) {
            this.logo = 'safeTeensOrg.png';
            this.siteName = 'SafeTeensOrg';
        } else if (url.toString().indexOf('elevenace') > -1) {
            this.logo = 'elevenAce.png';
        } else if (url.toString().indexOf('uniqprep') > -1) {
            this.logo = 'uniqprep.png';
            this.siteName = 'Uniqprep';
        } else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('uthkal') > -1 || url.toString().indexOf('edquill') > -1 || url.toString().indexOf('edveda') > -1) {
            this.logo = 'EdQuill_2.png';
            this.siteName = 'EdQuill';
        }
    }

    ngOnInit() {
        this.userValidate();
        this.loadGoogleSignInScript();
    }

    loadGoogleSignInScript() {
        const script = this.renderer.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.defer = true;
        document.body.appendChild(script);
    }

    userValidate() {
        const payload = {
            platform: 'web',
            enc_key: this.type
        };
        this.authService.postService(payload, urls.validateUser).subscribe((successData: any) => {
            if (successData.IsSuccess) {
                this.loginSuccess(successData);
            } else {
                this.toastr.error(successData.ErrorObject);
                this.router.navigate(['/auth/login']);
            }
        });
    }

    loginSuccess(successData) {
        if (successData.ResponseObject.user_role == '2') {
            this.loginAdminSuccess(successData);
        } else if (successData.ResponseObject.user_role == '3') {
            this.loginCreatorSuccess(successData);
        } else if (successData.ResponseObject.user_role == '4') {
            this.loginSchoolSuccess(successData);
        } else if (successData.ResponseObject.user_role == '5') {
            this.loginStudentSuccess(successData);
        } else if (successData.ResponseObject.user_role == '6') {
            this.loginCorporatesSuccess(successData);
        } else if (successData.ResponseObject.user_role == '7') {
            this.loginGraderSuccess(successData);
        }
    }

    loginAdminSuccess(successData) {
        this.admindata = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = this.admindata.user_id;
            this.roleId = this.admindata.user_role;
            this.authService.setToken(this.admindata.user_id, this.admindata.first_name, this.admindata.last_name, this.admindata.user_role, this.admindata.Accesstoken);
            this.authService.setSessionData('status', this.admindata.status);
            this.authService.setSessionData('default_password', this.admindata.default_password);
            this.authService.setSessionData('birthday', this.admindata.birthday);
            this.authService.setSessionData('email_id', this.admindata.email_id);
            this.authService.setSessionData('mobile', this.admindata.mobile);
            this.authService.setSessionData('profile_url', this.admindata.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.admindata.profile_thumb_url);
            this.authService.setSessionData('gender', this.admindata.gender);
            this.authService.setSessionData('location', this.admindata.location);
            this.authService.setSessionData('school_id', this.admindata.school_details[0].school_id);
            this.authService.setSessionData('school_name', this.admindata.school_details[0].name);
            this.authService.setSessionData('school_details', JSON.stringify(this.admindata.school_details));
            this.authService.setSessionData('resourceAccess', false);
            this.authService.setSessionData('rista_data1', JSON.stringify(this.admindata.school_details[0]));
            this.loginService.changeHomePage(this.admindata.user_role);
            // this.authService.setSessionData('preview_type', 'no');
            this.loginService.changeHomePage(this.admindata.user_role);
            this.settingList();
            this.getTimeZone();
            this.searchFunction();
            this.setCourseSearchValue();
            if (this.admindata.tc_status == '0') {
                this.modalRef = this.modalService.open(this.updateContent, {backdrop: 'static'});
            } else {
                if (this.admindata.school_details.length > 1) {
                    this.router.navigate(['/auth/select']);
                } else {
                    // this.toastr.success(successData.ResponseObject.message, 'Login');
                    setTimeout(() => {
                        this.admindata.school_details[0].allow_dashboard == '1' ? this.router.navigate(['/dashboard/default']) :
                            this.router.navigate(['/schedule/schedule-page']);
                    }, 700);
                    this.toastr.success(successData.ResponseObject.message, 'Login');
                }
            }
        } else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }

    settingList() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.authService.getRoleId(),
            user_id: this.authService.getUserId(),
            school_id: this.authService.getSessionData('school_id'),
        };
        this.common.settingsDetails(data).subscribe((successData) => {
                this.listSuccess(successData, data);
            },
            (error) => {
                console.error(error, 'error');
            });
    }

    listSuccess(successData, data) {
        if (successData.IsSuccess) {
            this.settingData = successData.ResponseObject;
            this.authService.setSessionData('settingList', JSON.stringify(this.settingData));
            if (data.role_id != '5') {
                this.settingData.forEach((item) => {
                    if (item.name == 'date_format') {
                        this.behavior.changeDateFormat(item.date);
                    } else if (item.name == 'timezone') {
                        this.timeZoneList.forEach((list) => {
                            if (item.value == list.id) {
                                const split = list.time_zone.split('(');
                                this.behavior.changeTimeZone(split[0]);
                            }
                        });
                    }
                });
            }
            this.authService.setSessionData('settingList', JSON.stringify(this.settingData));
        }
    }

    getTimeZone() {
        const data = {
            platform: 'web',
            role_id: this.authService.getRoleId(),
            user_id: this.authService.getUserId()
        };
        this.common.timeZone(data).subscribe((successData) => {
                this.timeZoneSuccess(successData);
            },
            (error) => {
                console.error(error, 'error');
            });
    }

    timeZoneSuccess(successData) {
        if (successData.IsSuccess) {
            this.timeZoneList = successData.ResponseObject;
        }
    }

    loginCreatorSuccess(successData) {
        this.creatorData = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = this.creatorData.user_id;
            this.roleId = this.creatorData.user_role;
            this.authService.setToken(this.creatorData.user_id, this.creatorData.first_name, this.creatorData.last_name, this.creatorData.user_role, this.creatorData.Accesstoken);
            this.authService.setSessionData('status', this.creatorData.status);
            this.authService.setSessionData('first_name', this.creatorData.first_name);
            this.authService.setSessionData('last_name', this.creatorData.last_name);
            this.authService.setSessionData('default_password', this.creatorData.default_password);
            this.authService.setSessionData('email_id', this.creatorData.email_id);
            this.authService.setSessionData('mobile', this.creatorData.mobile);
            this.authService.setSessionData('birthday', this.creatorData.birthday);
            this.authService.setSessionData('profile_url', this.creatorData.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.creatorData.profile_thumb_url);
            this.authService.setSessionData('gender', this.creatorData.gender);
            this.authService.setSessionData('location', this.creatorData.location);
            this.authService.setSessionData('school_id', this.creatorData.school_details[0].school_id);
            this.authService.setSessionData('creator_id', this.creatorData.school_idno);
            this.authService.setSessionData('address1', this.creatorData.address1);
            this.authService.setSessionData('address2', this.creatorData.address2);
            this.authService.setSessionData('city', this.creatorData.city);
            this.authService.setSessionData('statename', this.creatorData.state_name);
            this.authService.setSessionData('countryname', this.creatorData.country_name);
            this.authService.setSessionData('country', this.creatorData.country);
            this.authService.setSessionData('state', this.creatorData.state);
            this.authService.setSessionData('schooldetails', this.creatorData.school_details[0].name);
            this.authService.setSessionData('designation', this.creatorData.school_details[0].designation);
            this.authService.setSessionData('school_profile_url', this.creatorData.school_details[0].profile_url);
            this.authService.setSessionData('resourceAccess', false);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            this.searchFunction();
            this.loginService.changeHomePage(this.creatorData.user_role);
            if (this.creatorData.tc_status == '0') {
                this.modalRef = this.modalService.open(this.updateContent, {backdrop: 'static'});
            } else {
                if (this.creatorData.school_details.length > 1) {
                    this.router.navigate(['/auth/select']);
                } else {
                    this.router.navigate(['/repository/content-home']);
                }
                this.toastr.success(successData.ResponseObject.message, 'Login');
            }
        } else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }

    loginSchoolSuccess(successData) {
        this.teacherdata = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = this.teacherdata.user_id;
            this.roleId = this.teacherdata.user_role;
            this.authService.setToken(this.teacherdata.user_id, this.teacherdata.first_name, this.teacherdata.last_name, this.teacherdata.user_role, this.teacherdata.Accesstoken);
            this.authService.setSessionData('status', this.teacherdata.status);
            this.authService.setSessionData('default_password', this.teacherdata.default_password);
            this.authService.setSessionData('email_id', this.teacherdata.email_id);
            this.authService.setSessionData('mobile', this.teacherdata.mobile);
            this.authService.setSessionData('birthday', this.teacherdata.birthday);
            this.authService.setSessionData('profile_url', this.teacherdata.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.teacherdata.profile_thumb_url);
            this.authService.setSessionData('gender', this.teacherdata.gender);
            this.authService.setSessionData('address1', this.teacherdata.address1);
            this.authService.setSessionData('address2', this.teacherdata.address2);
            this.authService.setSessionData('city', this.teacherdata.city);
            this.authService.setSessionData('statename', this.teacherdata.state_name);
            this.authService.setSessionData('countryname', this.teacherdata.country_name);
            this.authService.setSessionData('country', this.teacherdata.country);
            this.authService.setSessionData('state', this.teacherdata.state);
            this.authService.setSessionData('userDetails', JSON.stringify(this.teacherdata));
            this.authService.setSessionData('resourceAccess', false);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            ////Check Nav Permission////
            for (let i = 0; i < this.teacherdata.schoolDetails.length; i++) {
                for (let j = 0; j < this.teacherdata.schoolDetails[i].permissions.length; j++) {
                    this.teacherdata.schoolDetails[i].permissions[j].allowNav = false;
                    for (let k = 0; k < this.teacherdata.schoolDetails[i].permissions[j].permission.length; k++) {
                        if (this.teacherdata.schoolDetails[i].permissions[j].permission[k].status == 1) {
                            this.teacherdata.schoolDetails[i].permissions[j].allowNav = true;
                            break;
                        }
                    }
                }
            }
            this.authService.setSessionData('school_details', JSON.stringify(this.teacherdata.schoolDetails));
            this.authService.setSessionData('rista_data1', JSON.stringify(this.teacherdata.schoolDetails[0]));
            this.authService.setSessionData('school_id', this.teacherdata.schoolDetails[0].school_id);
            this.authService.setSessionData('school_name', this.teacherdata.schoolDetails[0].name);
            this.authService.setSessionData('teacher_type', this.teacherdata.schoolDetails[0].individual_teacher);
            this.authService.setSessionData('school_profile', this.teacherdata.schoolDetails[0].profile_url);
            this.settingList();
            this.loginService.changeHomePage(this.teacherdata.user_role);
            this.searchFunction();
            this.getTimeZone();
            if (this.teacherdata.tc_status == '0') {
                this.modalRef = this.modalService.open(this.updateContent, {backdrop: 'static'});
            } else {
                if (this.teacherdata.schoolDetails.length > 1) {
                    this.router.navigate(['/auth/select']);
                } else {
                    setTimeout(() => {
                        this.router.navigate(['/schedule/schedule-page']);
                    }, 700);
                    this.toastr.success(successData.ResponseObject.message, 'Login');
                }
            }
        } else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }

    loginStudentSuccess(successData) {
        this.studentdata = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = this.studentdata.user_id;
            this.roleId = this.studentdata.user_role;
            this.authService.setToken(this.studentdata.user_id, this.studentdata.first_name, this.studentdata.last_name, this.studentdata.user_role, this.studentdata.Accesstoken);
            this.authService.setSessionData('status', this.studentdata.status);
            this.authService.setSessionData('default_password', this.studentdata.default_password);
            this.authService.setSessionData('email_id', this.studentdata.email_id);
            this.authService.setSessionData('mobile', this.studentdata.mobile);
            this.authService.setSessionData('birthday', this.studentdata.birthday);
            this.authService.setSessionData('profile_url', this.studentdata.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.studentdata.profile_thumb_url);
            this.authService.setSessionData('gender', this.studentdata.gender);
            this.authService.setSessionData('location', this.studentdata.location);
            this.loginService.changeHomePage(this.studentdata.user_role);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            this.authService.setSessionData('permission', JSON.stringify(this.studentdata.school_details));
            // this.loginService.changeHomePage(this.auth.getRoleId());
            this.authService.setSessionData('school_details', JSON.stringify(this.studentdata.school_details));
            this.authService.setSessionData('rista_data1', JSON.stringify(this.studentdata.school_details[0]));
            this.authService.setSessionData('school_id', this.studentdata.school_details[0].school_id);
            this.authService.setSessionData('school_profile', this.studentdata.school_details[0].profile_url);
            this.authService.setSessionData('school_name', this.studentdata.school_details[0].name);
            this.settingList();
            this.studentSearchFunction();
            setTimeout(() => {
                if (this.studentdata.tc_status == '0') {
                    this.modalRef = this.modalService.open(this.updateContent, {backdrop: 'static'});
                } else {
                    if (this.studentdata.school_details.length > 1) {
                        this.router.navigate(['/auth/select']);
                    } else {
                        this.router.navigate(['/student/dashboard']);
                    }
                    this.toastr.success(successData.ResponseObject.message, 'Login');
                }
            }, 700);

        } else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }

    loginCorporatesSuccess(successData) {
        const data = successData.ResponseObject;
        if (successData.IsSuccess) {
            this.userId = data.user_id;
            this.roleId = data.user_role;
            this.corporateId = data.corporate_id;
            this.authService.setToken(data.user_id, data.first_name, data.last_name, data.user_role, data.Accesstoken);
            this.authService.setSessionData('first_name', data.first_name);
            this.authService.setSessionData('last_name', data.last_name);
            this.authService.setSessionData('email_id', data.email_id);
            this.authService.setSessionData('mobile', data.mobile);
            this.authService.setSessionData('corporate_id', data.corporate_id);
            this.authService.setSessionData('corporate_code', data.corporate_code);
            this.authService.setSessionData('corporate_name', data.corporate_name);
            this.authService.setSessionData('school_profile', data.profile_url);
            this.authService.setSessionData('profile_url', data.profile_url);
            this.authService.setSessionData('resourceAccess', false);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            this.loginService.changeHomePage(data.user_role);
            this.searchFunction();
            this.schoolList();
            this.toastr.success('Logged in Successfully', 'Login');
        } else {
            this.toastr.error(successData.ErrorObject, 'Login');
        }
    }

    loginGraderSuccess(successData) {
        this.gradedata = successData.ResponseObject;
        console.log(this.gradedata, 'gradedata');
        if (successData.IsSuccess) {
            this.userId = this.gradedata.user_id;
            this.roleId = this.gradedata.user_role;
            this.authService.setToken(this.gradedata.user_id, this.gradedata.first_name, this.gradedata.last_name, this.gradedata.user_role, this.gradedata.Accesstoken);
            this.authService.setSessionData('status', this.gradedata.status);
            this.authService.setSessionData('default_password', this.gradedata.default_password);
            this.authService.setSessionData('email_id', this.gradedata.email_id);
            this.authService.setSessionData('mobile', this.gradedata.mobile);
            this.authService.setSessionData('birthday', this.gradedata.birthday);
            this.authService.setSessionData('profile_url', this.gradedata.profile_url);
            this.authService.setSessionData('profile_thumb_url', this.gradedata.profile_thumb_url);
            this.authService.setSessionData('gender', this.gradedata.gender);
            this.authService.setSessionData('location', this.gradedata.location);
            this.behavior.changeDateFormat('MM/dd/yyyy');
            // this.authService.setSessionData('preview_type', 'no');
            this.searchFunction();

            ////Check Nav Permission////
            for (let i = 0; i < this.gradedata.schoolDetails.length; i++) {
                for (let j = 0; j < this.gradedata.schoolDetails[i].permissions.length; j++) {
                    this.gradedata.schoolDetails[i].permissions[j].allowNav = false;
                    for (let k = 0; k < this.gradedata.schoolDetails[i].permissions[j].permission.length; k++) {
                        if (this.gradedata.schoolDetails[i].permissions[j].permission[k].status == 1) {
                            this.gradedata.schoolDetails[i].permissions[j].allowNav = true;
                            break;
                        }
                    }
                }
            }
            this.authService.setSessionData('school_details', JSON.stringify(this.gradedata.schoolDetails));
            this.authService.setSessionData('rista_data1', JSON.stringify(this.gradedata.schoolDetails[0]));
            this.authService.setSessionData('school_id', this.gradedata.schoolDetails[0].school_id);
            this.authService.setSessionData('school_name', this.gradedata.schoolDetails[0].name);
            this.authService.setSessionData('teacher_type', this.gradedata.schoolDetails[0].individual_teacher);
            this.authService.setSessionData('school_profile', this.gradedata.schoolDetails[0].profile_url);
            this.loginService.changeHomePage(this.gradedata.user_role);
            this.searchFunction();
            this.loginService.changeHomePage(this.gradedata.user_role);
            this.gradedata.schoolDetails > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/student-content/list-content/old']);
            this.toastr.success(successData.ResponseObject.message);
        } else {
            this.toastr.error(successData.ErrorObject);
        }
    }

    schoolList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.roleId ? this.roleId : '',
            user_id: this.userId ? this.userId : '',
            corporate_id: this.corporateId ? this.corporateId : ''
        };
        this.schoolService.getSchoolList(data).subscribe((successData) => {
                this.schoolListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_schoolList');
            });
    }

    schoolListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.schoolData = successData.ResponseObject;
            this.authService.setSessionData('school_details', JSON.stringify(this.schoolData));
            this.authService.setSessionData('rista_data1', this.schoolData.length != 0 ?
                JSON.stringify(this.schoolData[this.schoolData.length - 1]) : JSON.stringify(this.schoolData));
            this.authService.setSessionData('school_id', this.schoolData.length != 0 ?
                this.schoolData[this.schoolData.length - 1]?.school_id : '');
            this.authService.setSessionData('school_profile', this.schoolData.length != 0 ?
                this.schoolData[this.schoolData.length - 1]?.profile_url : '');
            // this.authService.setSessionData('profile_url', this.schoolData.length != 0 ?
            //     this.schoolData[this.schoolData.length - 1]?.profile_url : '');
            this.authService.setSessionData('school_name', this.schoolData.length != 0 ?
                this.schoolData[this.schoolData.length - 1]?.name : '');
            this.schoolData.length > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/dashboard/default']);
            this.searchFunction();
        }
    }

    confirmtermDetails() {
        const data = {
            platform: 'web',
            role_id: this.roleId ? this.roleId : '',
            user_id: this.userId ? this.userId : '',
            status: this.checkterms ? '1' : '0',
        };
        this.loginService.tcUpdateList(data).subscribe((successData) => {
                this.getTcListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_TermLists');
            });
    }

    getTcListSuccess(successData) {
        this.modalRef.close();
        this.toastr.success('Logged in Successfully', 'Login');
        if (this.roleId == '2') {
            if (this.admindata.school_details.length > 1) {
                this.router.navigate(['/auth/select']);
            } else {
                this.admindata.school_details[0].allow_dashboard == '1' ? this.router.navigate(['/dashboard/default']) :
                    this.router.navigate(['/class/list-class']);
            }
        } else if (this.roleId == '3') {
            this.creatorData.school_details.length > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/repository/content-home']);
        } else if (this.roleId == '4') {
            this.teacherdata.schoolDetails.length > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/schedule/schedule-page']);
        } else if (this.roleId == '5') {
            this.studentdata.school_details.length > 1 ? this.router.navigate(['/auth/select']) :
                this.router.navigate(['/student/dashboard']);
        } else if (this.roleId == '7') {
            this.gradedata.schoolDetails.length > 1 ? this.router.navigate(['/auth/select']) : this.router.navigate(['/student-content/list-content/old']);
        }
    }

    searchFunction() {
        const classSearchData = [{
            curriculum_Folder: undefined,
            grade: [],
            subject: [],
            teacher: null,
            className: '',
            studentName: '',
            classDateStatus: '3',
            school_id: this.authService.getSessionData('school_id'),
            course_id: []
        }];
        this.authService.setSessionData(SessionConstants.classSearch, JSON.stringify(classSearchData));

        const classCurriculumData = [{
            list_type: '',
            curriculum_type: '2',
            school_id: this.authService.getSessionData('school_id')
        }];
        this.authService.setSessionData(SessionConstants.classCurriculumSearch, JSON.stringify(classCurriculumData));

        const assignmentData = [{
            curriculum_Folder: undefined,
            teacher: undefined,
            className: '',
            assignmentDateStatus: 2,
            studentName: '',
            assignmentName: '',
            sortType: 1,
            sortButton: 'Sort by',
            school_id: this.authService.getSessionData('school_id')
        }];
        this.authService.setSessionData(SessionConstants.assignSearch, JSON.stringify(assignmentData));

        const assessmentData = [{
            curriculum_Folder: undefined,
            teacher: undefined,
            className: '',
            assessmentDateStatus: 2,
            assessmentName: '',
            studentName: '',
            sortType: 1,
            sortButton: 'Sort by',
            school_id: this.authService.getSessionData('school_id')
        }];
        this.authService.setSessionData(SessionConstants.assessSearch, JSON.stringify(assessmentData));

        const studentWorkData = [{
            curriculum_Folder: undefined,
            teacher: undefined,
            class: undefined,
            contentType: 2,
            studentName: '',
            contentName: '',
            date: '',
            teacherCorrectionStatus: '0',
            school_id: this.authService.getSessionData('school_id')
        }];
        this.authService.setSessionData(SessionConstants.studentWorkSearch, JSON.stringify(studentWorkData));

        const directContentData = [{
            contentName: '',
            extact_Search: false,
            libary: '0',
            content_userid: '0',
            sortFilter: '0',
            type_id: 'list',
            grade_id: [],
            subject_id: [],
            tag_id: [],
            selectAuthored: '',
            selectDraft: '',
            school_id: this.authService.getSessionData('school_id')
        }];
        this.authService.setSessionData(SessionConstants.directcontentSearch, JSON.stringify(directContentData));

        const contentData = [{
            contentName: '',
            extact_Search: false,
            libary: '0',
            content_userid: '0',
            sortFilter: '0',
            type_id: 'list',
            grade_id: [],
            subject_id: [],
            tag_id: [],
            selectAuthored: '',
            selectDraft: '',
            school_id: this.authService.getSessionData('school_id')
        }];
        this.authService.setSessionData(SessionConstants.non_directcontentSearch, JSON.stringify(contentData));
    }

    studentSearchFunction() {
        const classSearchData = [{
            className: '',
            classDateStatus: '3',
            school_id: this.authService.getSessionData('school_id')
        }];
        this.authService.setSessionData(SessionConstants.studentClassSearch, JSON.stringify(classSearchData));

        const resourceData = [{
            resourceName: '',
            school_id: this.authService.getSessionData('school_id')
        }];
        this.authService.setSessionData(SessionConstants.studentResourceSearch, JSON.stringify(resourceData));

        const assignmentData = [{
            assignmentDateStatus: 3,
            assignmentName: '',
            school_id: this.authService.getSessionData('school_id')
        }];
        this.authService.setSessionData(SessionConstants.studentAssignmentSearch, JSON.stringify(assignmentData));

        const assessmentData = [{
            assessmentDateStatus: 3,
            assessmentName: '',
            school_id: this.authService.getSessionData('school_id')
        }];
        this.authService.setSessionData(SessionConstants.studentAssessmentSearch, JSON.stringify(assessmentData));

        const homeData = [{

            // Class Data //
            classDateStatus: '3',
            className: '',
            classButton: 'In Progress',
            classSortType: '0',
            classSortButton: 'Sort',

            // Assignment Data //
            assignmentDateStatus: '3',
            assignmentName: '',
            assignButton: 'In Progress',
            assignSortType: '0',
            assignSortButton: 'Sort',

            // Assessment Data //
            assessmentDateStatus: '3',
            assessmentName: '',
            assessButton: 'In Progress',
            assessSortButton: 'Sort',
            assessSortType: '0',
            school_id: this.authService.getSessionData('school_id')
        }];
        this.authService.setSessionData(SessionConstants.studentHomeSearch, JSON.stringify(homeData));
    }

    setCourseSearchValue() {
        const threeLevelFilter = ['contentListSearchValue', 'courseDetailsSearchValue'];
        const singleLevelInputFilter = ['courseCategory', 'courseCreator', 'contentCategory'];
        const singleLevelFilter = ['courseSeo', 'courseFaq'];
        threeLevelFilter.forEach((items) => {
            this.authService.setSessionData(items, JSON.stringify({
                category_id: [],
                status: [],
                searchValue: ''
            }));
        });
        const inputFilterSearch = {};
        singleLevelInputFilter.forEach((items1) => {
            inputFilterSearch[items1 + 'SearchValue'] = {searchValue: ''};
        });
        singleLevelFilter.forEach((items2) => {
            inputFilterSearch[items2 + 'SearchValue'] = {course_id: null};
        });
        inputFilterSearch['contentSeoSearchValue'] = {content_id: null};
        console.log(inputFilterSearch, 'input');
        this.authService.setSessionData('commonInputSearchValue', JSON.stringify(inputFilterSearch));
        this.authService.setSessionData('courseScheduleSearchValue', JSON.stringify({course_id: '', searchValue: ''}));
    }
}
