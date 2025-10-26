import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {EnvironmentService} from 'src/app/environment.service';
import {urls} from 'src/app/shared/utils/urls';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ValidationService } from 'src/app/shared/service/validation.service';
import { dateOptions } from 'src/app/shared/data/config';
import { CommonDataService } from 'src/app/shared/service/common-data.service';

@Component({
  selector: 'app-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.scss']
})
export class ContentAddComponent {
  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    firstDayOfWeek: 'su',
    dateFormat: dateOptions.pickerFormat
  };
  myDpOptions1: IAngularMyDpOptions = {
    dateRange: false,
    firstDayOfWeek: 'su',
    dateFormat: dateOptions.pickerFormat
  };
  public type = 'add';
  public recordBase64Url: any;
  public imagePath: any = '';
  public editData: any;
  public editor: any;
  blogForm: FormGroup;
  public categoryListData = [];
  public maximumCount = 100;
  public errorMessage = '';
  public subjectList = [];
  public description: any = '';

  @ViewChild('myInput') myInputVariable: ElementRef<any>;

  constructor(public auth: AuthService, public toastr: ToastrService, private datePipe: DatePipe, public env: EnvironmentService,
              public router: Router, public sanitizer: DomSanitizer, public route: ActivatedRoute, public formBuilder: FormBuilder,
              public validatorService: ValidationService, public commonData: CommonDataService) {
    this.route.params.forEach((params) => {
      this.type = params.type;
    });
    this.blogForm = this.formBuilder.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      displayFrom: '',
      displayFromTime: '',
      displayUntil: '',
      displayUntilTime: '',
      redirect_url: '',
      location: '',
      timing: '',
      eventDate: '',
      category: [null, Validators.required],
      status: ['A', Validators.required],
      display_order: ['', Validators.required],
      subject_id: [null]
    });
    this.imagePath = '';
    this.getCategoryList();
    this.getSubjectList();
  }

  ngOnInit(): void {
    if (this.type == 'edit') {
      this.editData = JSON.parse(sessionStorage.getItem('editBlog'));
      console.log(this.editData, 'editData');
      this.blogForm.controls.name.patchValue(this.editData.name);
      this.blogForm.controls.author.patchValue(this.editData.author);
      this.blogForm.controls.category.patchValue(this.editData.category_id);
      this.blogForm.controls.redirect_url.patchValue(this.editData.redirect_url);
      this.blogForm.controls.status.patchValue(this.editData.status);
      this.blogForm.controls.description.patchValue(this.editData.long_description);
      this.description = this.editData.long_description;
      this.blogForm.controls.location.patchValue(this.editData.location ?? '');
      this.blogForm.controls.timing.patchValue(this.editData.timing ?? '');
      this.blogForm.controls.display_order.patchValue(this.editData.display_order ?? '');
      this.blogForm.controls.subject_id.patchValue(this.editData.subject_id ?? null);
      console.log(this.editData.eventDate, 'date');
      if (this.editData.eventDate != '0000-00-00' && this.editData.eventDate && this.editData.eventDate != '') {
        const eventDate = this.editData.eventDate.split('-');
        console.log(eventDate, 'eventDate');
        const dateObject = new Date(parseInt(eventDate[0]), parseInt(String(eventDate[1] - 1)), parseInt(eventDate[2]));
        const sdObject: IMyDateModel = {
          isRange: false,
          singleDate: {jsDate: dateObject},
          dateRange: null
        };
        console.log(sdObject, 'sdObject');
        this.blogForm.controls.eventDate.patchValue(sdObject);
      } else {
        this.blogForm.controls.eventDate.patchValue('');
      }
      if (this.editData.status != 'I') {
        console.log(this.editData.display_from);
        if (this.editData.display_from != '') {
          const dateAndTime = this.editData.display_from.split(' ');
          const dateString = dateAndTime[0]; // Oct 23
          const dateParts = dateString.split('-');
          console.log(dateParts);
          const dateObject = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
          const sdObject: IMyDateModel = {
            isRange: false,
            singleDate: {jsDate: dateObject, formatted: dateAndTime[0]},
            dateRange: null
          };
          console.log(sdObject);
          this.blogForm.controls.displayFrom.patchValue(sdObject);
          const dateOption =  {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
              year: parseInt(dateParts[2]),
              month: parseInt(dateParts[0]),
              day: parseInt(dateParts[1]) - 1
            },
          };
          this.myDpOptions1 = dateOption;
          console.log(dateOption, 'date')

          if (dateAndTime[1] != undefined) {
            const timeSeperation = dateAndTime[1].split(':');
            this.blogForm.controls.displayFromTime.patchValue({
              hour: parseInt(timeSeperation[0]),
              minute: parseInt(timeSeperation[1]),
              second: 0
            });
          }
        }

        if (this.editData.display_until != '') {
          const dateAndTime = this.editData.display_until.split(' ');
          const dateString = dateAndTime[0]; // Oct 23
          const dateParts = dateString.split('-');
          const dateObject = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
          const edObject: IMyDateModel = {
            isRange: false,
            singleDate: {jsDate: dateObject, formatted: dateAndTime[0]},
            dateRange: null
          };
          this.blogForm.controls.displayUntil.patchValue(edObject);
          if (dateAndTime[1] != undefined) {
            const timeSeperation = dateAndTime[1].split(':');
            this.blogForm.controls.displayUntilTime.patchValue({
              hour: parseInt(timeSeperation[0]),
              minute: parseInt(timeSeperation[1]),
              second: 0
            });
          }
        }
        if (this.editData.image != '') {
          this.imagePath = this.editData.image;
        }
      }
      // this.blogForm.controls.displayFrom.patchValue(this.editData.name);
      // this.blogForm.controls.displayUntil.patchValue(this.editData.name);
    }
    setTimeout(_ => this.commonData.showLoader(false), 200);
  }

  getCategoryList() {
    const data = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId(),
      school_id: this.auth.getSessionData('school_id')
    };
    this.auth.postService(data, urls.contentCategoryList).subscribe((successData) => {
      this.blogListSuccess(successData);
    }, (error) => {
      console.error(error, ' error');
    });
  }

  blogListSuccess(successData) {
    this.categoryListData = successData.IsSuccess ? successData.ResponseObject : [];
    this.type == 'edit' ? this.updateContentCount(this.editData.category_id, 'edit') : '';
    console.log(this.categoryListData, 'categoryListData');
  }

  numberValidate(event) {
    this.validatorService.numberOnlyValidate(event);
  }

  addBlog() {
    if (this.blogForm.valid) {
      if (this.errorMessage == '') {
        let startDisplay = '';
        let endDisplay = '';
        const startDate = this.blogForm.controls.displayFrom.value;
        const endDate = this.blogForm.controls.displayUntil.value;
        const startTime = this.blogForm.controls.displayFromTime.value;
        const endTime = this.blogForm.controls.displayUntilTime.value;
        console.log(this.blogForm.controls.displayFrom.value, this.blogForm.controls.displayFromTime.value, 'this.blogForm.controls.displayFrom.value');
        if (startDate !== '' && startDate != null && this.blogForm.controls.status.value == 'A') {
          const time = this.blogForm.controls.displayFromTime.value;
          const date = this.blogForm.controls.displayFrom.value.singleDate.jsDate;
          if (time == '' || time == null) {
            startDisplay = this.datePipe.transform(date, 'yyyy-MM-dd');
          } else {
            startDisplay = this.datePipe.transform(date, 'yyyy-MM-dd') + ' ' + (time.hour == '0' ? '00' : time.hour) + ':' + (time.minute == '0' ? '00' : time.minute);
          }
        }
        if (endDate !== '' && endDate != null && this.blogForm.controls.status.value == 'A') {
          const time = this.blogForm.controls.displayUntilTime.value;
          const date = this.blogForm.controls.displayUntil.value.singleDate.jsDate;
          if (time == '' || time == null) {
            endDisplay = this.datePipe.transform(date, 'yyyy-MM-dd');
          } else {
            endDisplay = this.datePipe.transform(date, 'yyyy-MM-dd') + ' ' + (time.hour == '0' ? '00' : time.hour) + ':' + (time.minute == '0' ? '00' : time.minute);
          }
        }
        const payload = {
          platform: 'web',
          role_id: this.auth.getRoleId(),
          user_id: this.auth.getUserId(),
          school_id: this.auth.getSessionData('school_id'),
          long_description: this.blogForm.controls.description.value,
          name: this.blogForm.controls.name.value,
          author: this.blogForm.controls.author.value,
          status: this.blogForm.controls.status.value,
          category_id: [this.blogForm.controls.category.value],
          display_from: startDisplay,
          display_until: endDisplay,
          image: this.imagePath,
          content_id: this.type == 'edit' ? this.editData.content_id : '',
          redirect_url: this.blogForm.controls.redirect_url.value,
          location: this.blogForm.controls.location.value,
          timing: this.blogForm.controls.timing.value,
          display_order: this.blogForm.controls.display_order.value,
          eventDate: this.blogForm.controls.eventDate.value && this.blogForm.controls.eventDate.value != '' ?
            this.datePipe.transform(this.blogForm.controls.eventDate.value.singleDate.jsDate, 'yyyy-MM-dd') : ''
        };
        // this.auth.getEntityId() == '2' ? payload['subject_id'] = this.blogForm.controls.subject_id.value ? [this.blogForm.controls.subject_id.value] : [] : '';
        console.log(payload, 'payload');
        const url = this.type == 'add' ? urls.contentAdd : urls.contentEdit;
        this.auth.postService(payload, url).subscribe((successData) => {
          this.bloggerSuccess(successData);
        }, error => {
          console.error(error);
          this.toastr.error(error.response);
        });
      } else {
        this.toastr.error('Please enter valid display order number');
      }
    } else {
      this.validatorService.validateAllFormFields(this.blogForm);
      this.toastr.error('Please fill all Mandatory fields');
    }
  }

  bloggerSuccess(successData) {
    if (successData.IsSuccess) {
      this.toastr.success(successData.ResponseObject);
      this.router.navigate(['/content/content-list/list']);
    } else {
      this.toastr.error(successData.ResponseObject);
    }
  }

  encodeImageFileAsURL(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
        const imgDetails = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event: any) => {
            const url = event.target.result;
            const getUrl = url.split(',');
            const pic = imgDetails.type.split('/');

            if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] == 'jpg' || pic[1] === 'webp') {
                this.onUploadComplete(getUrl, imgDetails);
            } else {
                this.toastr.error('JPEG ,PNG, JPG  & WEBP are the required type');
            }
        };
        reader.readAsDataURL(event.target.files[i]);
    }
}

onUploadComplete(imagePath, imageList) {
    this.recordBase64Url = imagePath[1];
    const data = {
        platform: 'web',
        role_id: this.auth.getRoleId(),
        user_id: this.auth.getUserId(),
        image_path: [{
            image: this.recordBase64Url,
            size: imageList.size,
            type: imageList.type,
            name: imageList.name
        }],
        uploadtype: 'content-list'
    };
    this.auth.postService(data, urls.fileUpload).subscribe((successData) => {
        this.uploadSuccess(successData);
    }, error => {
        console.error(error, 'error');
    });
}

uploadSuccess(successData) {
    if (successData.IsSuccess) {
        this.toastr.success(successData.ResponseObject.message);
        this.deleteImg();
        this.imagePath = successData.ResponseObject.imagepath[0]?.original_image_url;
        console.log(this.imagePath, 'image');
    }
}

deleteImg() {
    this.imagePath = '';
    this.myInputVariable.nativeElement.value = '';
}

  reset() {
    this.blogForm.reset();
    this.imagePath = '';
    this.editor.setContent('');
    this.blogForm.controls.status.patchValue('1');
  }

  public datePattern(event: any) {
    if (event.charCode !== 0) {
      const pattern = /[0-9-]/;
      const inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
  }

  onDateChanged(event: IMyDateModel, endDateFormcontrol): void {

    const dateObject = this.validatorService.validateEndDate(event, endDateFormcontrol, this.blogForm);
    this.myDpOptions1 = {};
    this.myDpOptions1 = dateObject;
  }

  categoryChange(categoryId) {
      if (this.type == 'add') {
          this.updateContentCount(categoryId, 'add');
      } else {
        if (this.editData.category_id == categoryId) {
          this.updateContentCount(categoryId, 'edit');
        } else {
          this.updateContentCount(categoryId, 'add');
        }
      }
  }

  updateContentCount(value, type) {
    console.log(value, 'categoryValue');
    this.categoryListData.forEach((items) => {
      const count = parseInt(items.content_count);
      console.log(count, 'count');
      if (items.category_id == value) {
        this.maximumCount = type == 'add' ? count + 1 : count;
        this.blogForm.controls.display_order.patchValue(type == 'add' ? this.maximumCount : this.editData.display_order);
      }
    });
    console.log(this.maximumCount, 'maximumCount');
    console.log(this.blogForm.controls.display_order.value, 'display_order_num');
  }

  none() {
    this.toastr.info('Please Fill Start Date');
  }

  showErrorMessage() {
      const maximumAllowedNumber = this.maximumCount;
      const orderValue = parseInt(this.blogForm.controls.display_order.value);
      if (this.blogForm.controls.display_order.value == 0 && this.blogForm.controls.display_order.value != '') {
          this.errorMessage = 'Display Order number should not be zero';
      } else if (this.blogForm.controls.display_order.value != '') {
        this.errorMessage = orderValue > maximumAllowedNumber ?
          'Display order number should not be greater than' + ' '  + maximumAllowedNumber : '';
      } else if (this.blogForm.controls.display_order.value == '') {
        this.errorMessage = '';
      }
      return this.errorMessage;
  }

  getSubjectList() {
    const data = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId(),
      school_id: this.auth.getSessionData('school_id')
    };
    this.auth.postService(data, urls.subjectList).subscribe(
      (successData) => {
        this.subjectlistSuccess(successData);
      },
      (error) => {
        console.error(error, 'booking error');
      }
    );
  }

  subjectlistSuccess(successData) {
    if (successData.IsSuccess) {
      this.subjectList = successData.ResponseObject;
    }
  }

  editorValue(event) {
      this.blogForm.controls.description.patchValue(event.content);
  }
}
