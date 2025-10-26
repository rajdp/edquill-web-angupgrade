import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IAngularMyDpOptions, IMyDateModel} from "angular-mydatepicker";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {DatePipe} from "@angular/common";
import {CommonService} from "../../../shared/service/common.service";
import {CommonDataService} from "../../../shared/service/common-data.service";
import {ToastrService} from "ngx-toastr";
import {ConfigurationService} from "../../../shared/service/configuration.service";
import {AuthService} from "../../../shared/service/auth.service";
import {ValidationService} from "../../../shared/service/validation.service";

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    firstDayOfWeek: 'su',
    dateFormat: 'mm-dd-yyyy'
  };
  myDpOptions1: IAngularMyDpOptions = {
    dateRange: false,
    firstDayOfWeek: 'su',
    dateFormat: 'mm-dd-yyyy'
  };
  public type = 'add';
  public recordBase64Url: any;
  public imagepath = [];
  public webhost: any;
  public editData: any;
  public imagepaththumb: any;
  public editor: any;
  blogForm: UntypedFormGroup;

  @ViewChild('myInput') myInputVariable: ElementRef<any>;

  constructor(public route: ActivatedRoute, private formBuilder: UntypedFormBuilder, public sanitizer: DomSanitizer, public datePipe: DatePipe,
              public common: CommonService, public commondata: CommonDataService, private toastr: ToastrService, public router: Router,
              public config: ConfigurationService, public auth: AuthService, public validationService: ValidationService) {
    this.route.params.forEach((params) => {
      this.type = params.type;
    });
    this.webhost = this.config.getimgUrl();
    this.blogForm = this.formBuilder.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      largeDescription: ['', Validators.required],
      displayFrom: '',
      displayFromTime: '',
      displayUntil: '',
      displayUntilTime: '',
      displayType: ['1', Validators.required],
      status: ['1', Validators.required],
    });
    this.imagepath = [];
  }

  ngOnInit(): void {
    if (this.type == 'edit') {
      this.editData = JSON.parse(this.auth.getSessionData('editBlog'));
      this.blogForm.controls.name.patchValue(this.editData.name);
      this.blogForm.controls.author.patchValue(this.editData.author);
      this.blogForm.controls.displayType.patchValue(this.editData.display_type);
      this.blogForm.controls.status.patchValue(this.editData.status);
      if (this.editData.status != '2') {
        if (this.editData.display_from != '') {
          let dateAndTime = this.editData.display_from.split(' ');
          const sdObject: IMyDateModel = {
            isRange: false,
            singleDate: {jsDate: new Date(dateAndTime[0]), formatted: dateAndTime[0]},
            dateRange: null
          };
          this.blogForm.controls.displayFrom.patchValue(sdObject);
          if (dateAndTime[1] != undefined) {
              let timeSeperation = dateAndTime[1].split(':');
              this.blogForm.controls.displayFromTime.patchValue({hour: parseInt(timeSeperation[0]),
                  minute: parseInt(timeSeperation[1]),
                  second: 0});
          }
        }

        if (this.editData.display_until != '') {
          let dateAndTime = this.editData.display_until.split(' ');
          const edObject: IMyDateModel = {
            isRange: false,
            singleDate: {jsDate: new Date(dateAndTime[0]), formatted: dateAndTime[0]},
            dateRange: null
          };
          this.blogForm.controls.displayUntil.patchValue(edObject);
          if (dateAndTime[1] != undefined) {
              let timeSeperation = dateAndTime[1].split(':');
              this.blogForm.controls.displayUntilTime.patchValue({hour: parseInt(timeSeperation[0]),
                  minute: parseInt(timeSeperation[1]),
                  second: 0});
          }
        }
        if (this.editData.image != '') {
          this.imagepath[0] = this.editData.image;
        }
      }
      // this.blogForm.controls.displayFrom.patchValue(this.editData.name);
      // this.blogForm.controls.displayUntil.patchValue(this.editData.name);
      setTimeout(() => {
        this.editor.setContent(this.editData.long_description);
        this.blogForm.controls.largeDescription.patchValue(this.editData.long_description);
      }, 2000);
    }
  }

  addBlog() {
    if (this.blogForm.valid) {
      let startDisplay = '';
      let endDisplay = '';
      const startDate = this.blogForm.controls.displayFrom.value;
      const endDate = this.blogForm.controls.displayUntil.value;
      const startTime = this.blogForm.controls.displayFromTime.value;
      const endTime = this.blogForm.controls.displayUntilTime.value;
      console.log(this.blogForm.controls.displayFrom.value, this.blogForm.controls.displayFromTime.value, 'this.blogForm.controls.displayFrom.value');
      if (startDate !== '' && startDate != null && this.blogForm.controls.status.value == '1') {
        const time = this.blogForm.controls.displayFromTime.value;
        const date = this.blogForm.controls.displayFrom.value.singleDate.formatted;
          if (time == '' || time == null) {
              startDisplay = this.datePipe.transform(date, 'yyyy-MM-dd');
          } else  {
              startDisplay = this.datePipe.transform(date, 'yyyy-MM-dd') + ' ' + (time.hour == '0' ? '00' : time.hour) + ':' + (time.minute == '0' ? '00' : time.minute);
          }
      }
      if (endDate !== '' && endDate != null && this.blogForm.controls.status.value == '1') {
        const time = this.blogForm.controls.displayUntilTime.value;
        const date = this.blogForm.controls.displayUntil.value.singleDate.formatted;
          if (time == '' || time == null) {
              endDisplay = this.datePipe.transform(date, 'yyyy-MM-dd');
          } else  {
              endDisplay = this.datePipe.transform(date, 'yyyy-MM-dd') + ' ' + (time.hour == '0' ? '00' : time.hour) + ':' + (time.minute == '0' ? '00' : time.minute);
          }
      }
      const data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        long_description: this.blogForm.controls.largeDescription.value,
        name: this.blogForm.controls.name.value,
        author: this.blogForm.controls.author.value,
        status: this.blogForm.controls.status.value,
        display_type: this.blogForm.controls.displayType.value,
        display_from: startDisplay,
        display_until: endDisplay,
        image: this.imagepath[0] == undefined ? '' : this.imagepath[0],
      };
      this.commondata.showLoader(true);
      console.log(data, 'datda');
      if (this.type == 'add') {
          this.common.bloggerAdd(data).subscribe((successData) => {
                  this.bloggerSuccess(successData);
              },
              (error) => {
                  console.log(error);
                  this.toastr.error(error.ErrorObject);
                  this.commondata.showLoader(false);
              });
      } else {
          data['blog_id'] = this.editData.blog_id;
          this.common.bloggerEdit(data).subscribe((successData) => {
                  this.bloggerSuccess(successData);
              },
              (error) => {
                  console.log(error);
                  this.toastr.error(error.ErrorObject);
                  this.commondata.showLoader(false);
              });
      }
    } else {
      this.toastr.error('Please fill all Mandatory fields');
    }

  }
  bloggerSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.toastr.success(successData.ResponseObject);
      this.router.navigate(['/blog/list-blog']);
    }
  }

  encodeImageFileAsURL(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      const getUrlEdu = '';
      const imgDetails = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const url = event.target.result;
        const getUrl = url.split(',');
        const pic = imgDetails.type.split('/');

        if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] == 'jpg') {
          this.onUploadKYCFinished(getUrl, imgDetails);
        } else {
          this.toastr.error('JPEG ,PNG & JPG are the required type');
        }
      };
      reader.readAsDataURL(event.target.files[i]);
    }
  }

  onUploadKYCFinished(getUrlEdu, imageList) {
    this.recordBase64Url = getUrlEdu[1];
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      image_path: [{
        image: this.recordBase64Url,
        size: imageList.size,
        type: imageList.type,
        name: imageList.name
      }],
      uploadtype: 'blogger'
    };
    this.commondata.showLoader(true);
    this.common.fileUpload(data).subscribe(
        (successData) => {
          this.uploadSuccess(successData);
        },
        (error) => {
          this.uploadFailure(error);
        }
    );
  }

  uploadSuccess(successData) {
    this.commondata.showLoader(false);
    if (successData.IsSuccess) {
      this.toastr.success(successData.ResponseObject.message);
      this.deleteImg();
      this.imagepaththumb = [];
      successData.ResponseObject.imagepath.forEach((item) => {
        this.imagepath.push(item.original_image_url);
        this.imagepaththumb.push(item.resized_url);
      });
      console.log(this.imagepath, 'imgPath');
    }
  }

  uploadFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }
  deleteImg() {
    this.imagepath = [];
    this.myInputVariable.nativeElement.value = '';
  }
  getDescriptionValue(event) {
    this.editor = event.editor;
    this.blogForm.controls.largeDescription.patchValue(event.content);
  }
  reset() {
    this.blogForm.reset();
    this.imagepath = [];
    this.editor.setContent('');
    this.blogForm.controls.status.patchValue('1');
  }
  public datePattern(event: any) {
    this.validationService.dateValidation(event);
  }
  onDateChanged(event: IMyDateModel): void {
    let date = event.singleDate.formatted;
    this.myDpOptions1 = {
      dateRange: false,
      firstDayOfWeek: 'su',
      dateFormat: 'mm-dd-yyyy',
      disableUntil: {
        year: new Date(date).getFullYear(),
        month: new Date(date).getMonth() + 1,
        day: new Date(date).getDate() - 1
      },
    };
  }
  none() {
    this.toastr.info('Please Fill Start Date');
  }

}
