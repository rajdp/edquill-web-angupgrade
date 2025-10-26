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
  selector: 'app-add-testimony',
  templateUrl: './add-testimony.component.html',
  styleUrls: ['./add-testimony.component.scss']
})
export class AddTestimonyComponent implements OnInit {
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
  public editor: any;
  public imagepaththumb: any;
  public editData: any;
  testimonyForm: UntypedFormGroup;

  @ViewChild('myInput') myInputVariable: ElementRef<any>;

  constructor(public route: ActivatedRoute, private formBuilder: UntypedFormBuilder, public sanitizer: DomSanitizer, public datePipe: DatePipe,
              public common: CommonService, public commondata: CommonDataService, private toastr: ToastrService, public router: Router,
              public config: ConfigurationService, public auth: AuthService, public validationService: ValidationService) {
    this.route.params.forEach((params) => {
      this.type = params.type;
    });
    this.webhost = this.config.getimgUrl();
    this.testimonyForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      rating: 0,
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
      this.editData = JSON.parse(this.auth.getSessionData('editTestimony'));
      this.testimonyForm.controls.name.patchValue(this.editData.name);
      this.testimonyForm.controls.status.patchValue(this.editData.status);
      this.testimonyForm.controls.displayType.patchValue(this.editData.display_type);
      this.ratingFunction(parseInt(this.editData.rating));
      if (this.editData.image != '') {
        this.imagepath[0] = this.editData.image;
      }
      if (this.editData.status != '2') {
        if (this.editData.display_from != '') {
          const dateAndTime = this.editData.display_from.split(' ');
          console.log(dateAndTime[0], 'displayStart');
          const sdObject: IMyDateModel = {
            isRange: false,
            singleDate: {jsDate: new Date(dateAndTime[0]), formatted: dateAndTime[0]},
            dateRange: null
          };
          this.testimonyForm.controls.displayFrom.patchValue(sdObject);
          if (dateAndTime[1] != undefined) {
            const timeSeperation = dateAndTime[1].split(':');
            this.testimonyForm.controls.displayFromTime.patchValue({hour: parseInt(timeSeperation[0]),
              minute: parseInt(timeSeperation[1]),
              second: 0});
          }
        }

        if (this.editData.display_until != '') {
          const dateAndTime = this.editData.display_until.split(' ');
          const edObject: IMyDateModel = {
            isRange: false,
            singleDate: {jsDate: new Date(dateAndTime[0]), formatted: dateAndTime[0]},
            dateRange: null
          };
          this.testimonyForm.controls.displayUntil.patchValue(edObject);
          if (dateAndTime[1] != undefined) {
            const timeSeperation = dateAndTime[1].split(':');
            this.testimonyForm.controls.displayUntilTime.patchValue({hour: parseInt(timeSeperation[0]),
              minute: parseInt(timeSeperation[1]),
              second: 0});
          }
        }
      }
      // this.testimonyForm.controls.displayFrom.patchValue(this.editData.name);
      // this.testimonyForm.controls.displayUntil.patchValue(this.editData.name);
      setTimeout(() => {
        this.editor.setContent(this.editData.description);
        this.testimonyForm.controls.description.patchValue(this.editData.description);
      }, 2000);
    }
  }
  resetForm() {
    this.testimonyForm.reset();
    this.editor.setContent('');
    this.testimonyForm.controls.status.patchValue('1');
    this.testimonyForm.controls.rating.patchValue(0);
    this.resetStar();
    this.imagepath = [];
    this.myInputVariable.nativeElement.value = '';
  }

  addTestimony() {
    if (this.testimonyForm.valid) {
      let startDisplay = '';
      let endDisplay = '';
      const startDate = this.testimonyForm.controls.displayFrom.value;
      const endDate = this.testimonyForm.controls.displayUntil.value;
      const startTime = this.testimonyForm.controls.displayFromTime.value;
      const endTime = this.testimonyForm.controls.displayUntilTime.value;
      if (startDate !== '' && startDate != null && this.testimonyForm.controls.status.value == '1') {
        const time = this.testimonyForm.controls.displayFromTime.value;
        console.log(time, 'time');
        const date = this.testimonyForm.controls.displayFrom.value.singleDate.formatted;
        if (time == '') {
          startDisplay = this.datePipe.transform(date, 'yyyy-MM-dd');
        } else  {
          startDisplay = this.datePipe.transform(date, 'yyyy-MM-dd') + ' ' + (time.hour == '0' ? '00' : time.hour) + ':' + (time.minute == '0' ? '00' : time.minute);
        }
      }
      if (endDate !== '' && endDate != null && this.testimonyForm.controls.status.value == '1') {
        const time = this.testimonyForm.controls.displayUntilTime.value;
        const date = this.testimonyForm.controls.displayUntil.value.singleDate.formatted;
        if (time == '') {
          endDisplay = this.datePipe.transform(date, 'yyyy-MM-dd');
        } else  {
          endDisplay = this.datePipe.transform(date, 'yyyy-MM-dd') + ' ' + (time.hour == '0' ? '00' : time.hour) + ':' + (time.minute == '0' ? '00' : time.minute);
        }
      }
      const data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        description: this.testimonyForm.controls.description.value,
        name: this.testimonyForm.controls.name.value,
        status: this.testimonyForm.controls.status.value,
        display_type: this.testimonyForm.controls.displayType.value,
        rating: this.testimonyForm.controls.rating.value,
        display_from: startDisplay,
        display_until: endDisplay,
        image: this.imagepath[0] == undefined ? '' : this.imagepath[0],
      };
      this.commondata.showLoader(true);
      if (this.type == 'add') {
        this.common.testimonyAdd(data).subscribe((successData) => {
              this.bloggerAddSuccess(successData);
            },
            (error) => {
              console.log(error);
              this.toastr.error(error.ErrorObject);
              this.commondata.showLoader(false);
            });
      } else {
        data['id'] = this.editData.id;
        this.common.testimonyEdit(data).subscribe((successData) => {
              this.bloggerAddSuccess(successData);
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
  bloggerAddSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.toastr.success(successData.ResponseObject);
      this.router.navigate(['/testimonial/list-testimonial']);
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
      uploadtype: 'testimonial'
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
    // this.settings.loadingSpinner = false;
    if (successData.IsSuccess) {
      this.toastr.success(successData.ResponseObject.message);
      this.imagepath = [];
      this.imagepaththumb = [];
      // for (let i = 0; i < successData.ResponseObject.imagepath.length; i++) {
      //   this.imagepath.push(successData.ResponseObject.imagepath[i].original_image_url);
      //   this.imagepaththumb.push(successData.ResponseObject.imagepath[i].resized_url);
      // }
      successData.ResponseObject.imagepath.forEach((item) => {
        this.imagepath.push(item.original_image_url);
        this.imagepaththumb.push(item.resized_url);
      });
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
    this.testimonyForm.controls.description.patchValue(event.content);
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
  ratingFunction(rating) {
      this.resetStar();
      this.testimonyForm.controls.rating.patchValue(rating);
      for (let i = 1; i <= rating; i++) {
        document.getElementById('star' + i).setAttribute('style', 'color: yellow');
      }
  }
  resetStar() {
    for (let i = 1; i <= 5; i++) {
      document.getElementById('star' + i).setAttribute('style', 'color: black');
    }
  }

}
