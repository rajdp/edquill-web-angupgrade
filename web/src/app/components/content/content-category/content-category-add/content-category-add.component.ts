import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { urls } from 'src/app/shared/utils/urls';
import {ToastrService} from 'ngx-toastr';
import {EnvironmentService} from 'src/app/environment.service';
import {DomSanitizer} from '@angular/platform-browser';
import { ValidationService } from 'src/app/shared/service/validation.service';

@Component({
  selector: 'app-content-category-add',
  templateUrl: './content-category-add.component.html',
  styleUrls: ['./content-category-add.component.scss']
})
export class ContentCategoryAddComponent implements OnInit, OnDestroy {
  categoryList: any = [];
  public recordBase64Url: any;
  public form: FormGroup;
  public categoryId = '';
  public type = 'add';
  public imagePath: any;
  public webhost: any;
  public errorMessage = '';
  public maximumCount = 100;
  public description: any = '';
  @ViewChild('myInput') myInputVariable: ElementRef<any>;

  constructor(public auth: AuthService, public fb: FormBuilder, public router: Router, public route: ActivatedRoute, public validationService: ValidationService,
              public toastr: ToastrService, public env: EnvironmentService, public sanitizer: DomSanitizer) {
      this.webhost = this.env.imgUrl;
      this.imagePath = '';

      this.route.params.forEach((params) => {
          this.type = params.type;
      });
      this.form = this.fb.group({
          category_name: ['', Validators.required],
          description: '',
          status: 'A',
          display_order: ['', Validators.required]
      });
      this.getCategoryList();
      setTimeout(() => {
              if (this.type == 'edit') {
                  this.maximumCount = parseInt(this.auth.getSessionData('content_category_maximumCount'));
                  this.getEditableform(JSON.parse(this.auth.getSessionData('edit_content_category_Data')));
              } else {
                  this.maximumCount = parseInt(this.auth.getSessionData('content_category_maximumCount')) + 1;
                  this.form.controls.display_order.patchValue(this.maximumCount);
              }
          }, 0
      );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.auth.removeSessionData('edit_content_category_Data');
  }

  getEditableform(item) {
      console.log(item, 'editvalueee');
      this.categoryId = item.category_id;
      this.form.controls.category_name.patchValue(item.category_name);
      this.form.controls.status.patchValue(item.status);
      this.description = item.description;
      this.form.controls.description.patchValue(item.description);
      this.imagePath = item.path;
      this.form.controls.display_order.patchValue(item.display_order ?? '');
  }

  editorValue(event) {
      this.form.controls.description.patchValue(event.content);
  }

  numberValidate(event) {
      this.validationService.numberOnlyValidate(event);
  }

  getCategoryList() {
      const data = {
          platform: 'web',
          role_id: this.auth.getRoleId(),
          user_id: this.auth.getUserId(),
          school_id: this.auth.getSessionData('school_id')
      };
      this.auth.postService(data, urls.contentCategoryList).subscribe(
          (successData) => {
              this.listSuccess(successData);
          },
          (error) => {
              console.error(error, 'booking error');
          }
      );
  }

  listSuccess(successData) {
      if (successData.IsSuccess) {
          this.categoryList = successData.ResponseObject;
      }
  }

  showErrorMessage() {
      const maximumAllowedNumber = this.maximumCount;
      const orderValue = parseInt(this.form.controls.display_order.value);
      if (this.form.controls.display_order.value == 0 && this.form.controls.display_order.value != '') {
          this.errorMessage = 'Display Order number should not be zero';
      } else if (this.form.controls.display_order.value != '') {
          this.errorMessage = orderValue > maximumAllowedNumber ?
              'Display order number should not be greater than' + ' ' + maximumAllowedNumber : '';
      } else if (this.form.controls.display_order.value == '') {
          this.errorMessage = '';
      }
      return this.errorMessage;
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
          uploadtype: 'content-category'
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
      }
  }

  deleteImg() {
      this.imagePath = '';
      this.myInputVariable.nativeElement.value = '';
  }

  addcategory() {
      if (this.form.valid) {
          if (this.errorMessage == '') {
              const data = {
                  platform: 'web',
                  role_id: this.auth.getRoleId(),
                  user_id: this.auth.getUserId(),
                  category_name: this.form.controls.category_name.value,
                  status: this.form.controls.status.value,
                  description: this.form.controls.description.value,
                  path: this.imagePath,
                  category_id: this.categoryId,
                  display_order: this.form.controls.display_order.value,
                  school_id: this.auth.getSessionData('school_id')
              };
              console.log(data, 'paylaod');
              this.auth.postService(data, this.categoryId == '' ? urls.contentCategoryAdd : urls.contentCategoryEdit).subscribe(
                  (successData) => {
                      this.categoryAddSuccess(successData);
                  },
                  (error) => {
                      console.error(error, 'category add error');
                  }
              );
          } else {
              this.toastr.error('Please enter valid display order number');
          }
      } else {
          this.validationService.validateAllFormFields(this.form);
          this.toastr.error('Please fill all Mandatory fields');
      }
  }

  categoryAddSuccess(successData) {
      if (successData.IsSuccess) {
          this.toastr.success(successData.ResponseObject);
          this.router.navigate(['/content/category/list']);
      } else {
          this.toastr.error(successData.ErrorObject);
      }
  }

}
