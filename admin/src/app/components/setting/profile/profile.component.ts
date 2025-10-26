import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ToastrService} from 'ngx-toastr';
import {CategoryService} from '../../../shared/service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ValidationService} from '../../../shared/service/validation.service';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {SubjectServices} from '../../../shared/service/subject.services';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'mm-dd-yyyy',
    disableSince: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate() + 1
    },
  };
  public firstname: any;
  public lastname: any;
  public mobile: any;
  public role: any;
  public email: any;
  public birthday: any;
  public recordBase64Url: any;
  public profile: any;
  public  profile1: any;
  public imgUrl: any;
  public type: any;
  public gender: any;
  public location: any;
  public imageObject: any;
  public webhost: any;
  public image: any;
  public maxDate: any;
  public minDate: any;
  public editView: boolean;
  public listCheck: boolean;
  public accountForm: UntypedFormGroup;
  @ViewChild('carousel')
  carousel: any;
  constructor(public commondata: CommonDataService, public subjectList: SubjectServices, public route: ActivatedRoute, private formBuilder: UntypedFormBuilder, public subject: SubjectServices, public config: ConfigurationService, private toastr: ToastrService, public auth: AuthService, public category: CategoryService, public router: Router, public validation: ValidationService, public subjectservice: SubjectServices, public datePipe: DatePipe) {
    this.imgUrl = this.config.getimgUrl();
    this.recordBase64Url = '';
    this.subjectList.profileList.subscribe((res: any) => {
      this.profile = res;
      let profilepic = this.profile.split('/');
      if (profilepic[0] ==  'assets'){
        this.listCheck = true;
      } else if (profilepic[0] == 'uploads'){
        this.listCheck = false;

      }
    });

    const current = new Date();
    this.maxDate = {
      year: current.getFullYear() - 10,
      month: current.getMonth() + 1,
      day: current.getDate()
    };
    this.minDate = {year: 1970, month: 1, day: 1};

    this.firstname = this.auth.getSessionData('rista-firstname');
    this.lastname = this.auth.getSessionData('rista-lastname');
    this.role = this.auth.getSessionData('rista-user_role');
    this.mobile = this.auth.getSessionData('rista-mobile');
    this.email = this.auth.getSessionData('rista-email_id');
    this.birthday = this.auth.getSessionData('rista-birthday');
    this.gender = this.auth.getSessionData('rista-gender');
    this.profile = this.auth.getSessionData('rista-profile_url');
    let profilepic = this.profile.split('/');
    if (profilepic[0] ==  'assets'){
      this.listCheck = true;
    } else if (profilepic[0] == 'uploads') {
      this.listCheck = false;

    }

    this.updateUserProfile();
    this.editView = false;
    this.profile1 = [];
    this.accountForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      role: ['', Validators.required],
      gender: '',
      dob: ''
    });

    this.route.params.forEach((params) => {
      this.type = params.type;
    });
    this.imageObject = [{thumbImage: 'assets/images/Avatar1.png', id: '0'},
      {thumbImage: 'assets/images/Avatar2.png', id: '1'},
      {thumbImage: 'assets/images/Avatar3.png', id: '2'},
      {thumbImage: 'assets/images/Avatar4.png', id: '3'},
      {thumbImage: 'assets/images/Avatar5.png', id: '4'},
      {thumbImage: 'assets/images/Avatar6.png', id: '5'},
      {thumbImage: 'assets/images/Avatar7.png', id: '6'},
      {thumbImage: 'assets/images/Avatar8.png', id: '7'},
      {thumbImage: 'assets/images/Avatar9.png', id: '8'},
    ];
    if (this.editView){
      let editData = JSON.parse(this.auth.getSessionData('editUser'));
      let dob = editData.birthday.split('-');
      const dobObject: IMyDateModel = {isRange: false, singleDate: {jsDate: new Date(parseInt(dob[0]), parseInt(dob[1]) - 1, parseInt(dob[2]))}, dateRange: null};
      this.accountForm.controls.dob.patchValue(dobObject);
      this.accountForm.controls.fname.patchValue(editData.first_name);
      this.accountForm.controls.lname.patchValue(editData.last_name);
      this.accountForm.controls.email.patchValue(editData.email_id);
      this.accountForm.controls.mobile.patchValue(editData.mobile);
      this.accountForm.controls.gender.patchValue(editData.gender);
      this.accountForm.controls.location.patchValue(editData.location);
      this.accountForm.controls.dob.patchValue(dobObject);
      this.accountForm.controls.role.patchValue(this.role == 'User' ? 1 : 2);
    }
  }
  updateUserProfile(){
    //when the profile-url changes, update the user service

  }
  ngOnInit() {
    this.commondata.showLoader(false);
  }
  onDateChanged(event: IMyDateModel): void {
  }

  editPage(){
    this.editView = true;
    let dob = this.birthday.split('-');
    const dobObject1: IMyDateModel = {isRange: false, singleDate: {jsDate: new Date(parseInt(dob[0]), parseInt(dob[1]) - 1, parseInt(dob[2]))}, dateRange: null};
    this.accountForm.controls.fname.patchValue(this.firstname);
    this.accountForm.controls.lname.patchValue(this.lastname);
    this.accountForm.controls.email.patchValue(this.email);
    this.accountForm.controls.mobile.patchValue(this.mobile);
    this.accountForm.controls.gender.patchValue(this.gender);
    this.accountForm.controls.dob.patchValue(dobObject1);
    this.accountForm.controls.role.patchValue(this.role == 'User' ? 1 : 2);
  }
  encodeImageFileAsURL(event: any){
    for (let i = 0; i < event.target.files.length; i++) {
      const getUrlEdu = '';
      const imgDetails = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const url = event.target.result;
        const getUrl = url.split(',');
        const pic = imgDetails.type.split('/');
        if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] ==  'jpg' ){
          this.onUploadKYCFinished(getUrl, imgDetails);
        } else{
          this.toastr.error('JPEG ,PNG & JPG are the required type');
        }
      };
      reader.readAsDataURL(event.target.files[i]);
    }
  }
  onUploadKYCFinished(getUrlEdu, data){
    this.recordBase64Url =  getUrlEdu[1];
    let imgData = [{
      image: this.recordBase64Url,
      size: data.size,
      type: data.type,
      name: data.name
    }];
    this.getUrlImage(imgData);
  }
  saveProfile(){
    if (this.accountForm.valid){
      const data = {
        platform: 'web',
        role_id: this.auth.getRoleId(),
        user_id: this.auth.getUserId(),
        uploadtype: 'profile',
        first_name: this.accountForm.controls.fname.value,
        last_name: this.accountForm.controls.lname.value,
        gender: this.accountForm.controls.gender.value,
        mobile: this.accountForm.controls.mobile.value,
        birthday: this.accountForm.controls.dob.value == null ? '' : this.datePipe.transform(this.accountForm.controls.dob.value.singleDate.jsDate, 'yyyy-MM-dd'),
      };
      this.category.editProfile(data).subscribe(
          (successData) => {
            this.getEditSuccess(successData, data);
          },
          (error) => {
            this.getEditFailure(error);
          }
      );
    }else{
      this.toastr.error('Please Fill all Mandatory Field');
    }
  }
  getEditSuccess(successData, data){
    if (successData.IsSuccess) {
      this.editView = false;
      this.firstname = data.first_name;
      this.lastname = data.last_name;
      this.role = this.role == 'User' ? 1 : 2;
      this.mobile = data.mobile;
      this.birthday = data.birthday;
      this.gender = data.gender;
      this.auth.setSessionData('rista-mobile', data.mobile);
      this.auth.setSessionData('rista-birthday', data.birthday);
      this.auth.setSessionData('rista-gender', data.gender);
      this.auth.setSessionData('rista-firstname', data.first_name);
      this.auth.setSessionData('rista-lastname', data.last_name);
      this.toastr.success(successData.ResponseObject);
    }
  }
  getEditFailure(error){

  }
  getUrlImage(imgData) {
      const data = {
        platform: 'web',
        role_id: this.auth.getRoleId(),
        user_id: this.auth.getUserId(),
        image_path: imgData,
        uploadtype: 'profile'
      };
      this.category.getImgUrl(data).subscribe(
          (successData) => {
            this.getUrlImageSuccess(successData);
          },
          (error) => {
            this.getUrlImageFailure(error);
          }
      );
    }


  public  getUrlImageSuccess(successData) {
    if (successData.IsSuccess) {
       this.uploadImage(successData.ResponseObject.imagepath[0].original_image_url);
       this.auth.setSessionData('go-profile_url', successData.ResponseObject.imagepath[0].original_image_url);
       this.profile = successData.ResponseObject.imagepath[0].original_image_url;
       this.subject.changeProfile(successData.ResponseObject.imagepath[0].original_image_url);
    } else{
      this.toastr.error(successData.ErrorObject, '');
    }
  }
  public  getUrlImageFailure(error) {
    console.log(error);
  }


  getImage(image, value){
  this.profile = [];
  this.profile = value.thumbImage;
  this.listCheck = true;
  this.auth.setSessionData('avatarimg', this.profile);
  this.uploadImage(value.thumbImage);
  }
  uploadImage(imgData) {
    this.commondata.showLoader(true);
    const data = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId(),
      uploadtype: 'profile',
      imagepath: [{
        original_image_url: imgData,
        resized_url: ''
      }]

    };
    this.category.updateImgUrl(data).subscribe(
        (successData) => {
          this.uploadImageSuccess(successData, imgData);
        },
        (error) => {
          this.uploadImageFailure(error);
        }
    );
  }


  public  uploadImageSuccess(successData, imgData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.toastr.success(successData.ResponseObject, '');
      this.subjectservice.changeProfile(this.profile);
      this.auth.setSessionData('rista-profile_url', imgData);
    } else{
      this.commondata.showLoader(false);
      this.toastr.error(successData.ErrorObject, '');
    }
  }
  public  uploadImageFailure(error) {
    console.log(error);
  }
  public numberPattern(event: any) {
    this.validation.numberValidate1(event);
  }
}
