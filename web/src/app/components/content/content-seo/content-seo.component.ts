import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { urls } from 'src/app/shared/utils/urls';
import { EnvironmentService } from 'src/app/environment.service';
import {ToastrService} from 'ngx-toastr';
import { ValidationService } from 'src/app/shared/service/validation.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-content-seo',
  templateUrl: './content-seo.component.html',
  styleUrls: ['./content-seo.component.scss']
})
export class ContentSeoComponent implements OnInit, OnDestroy {
  public active = 1;
  item: any;
  public columnSize = 12;
  public desktopView = window.screen.width > 768;
  public blogSeoData = [];
  public blogListData = [];
  public blogSeoSelected: any = '';
  public type = 'add';
  public buttonClicked = false;
  public seoFormGroup: FormGroup;
  @ViewChild('table') table: any;
  private contentSeo: Subscription;
  constructor(public auth: AuthService, public env: EnvironmentService, public builder: FormBuilder, public router: Router,
              public toastr: ToastrService, public validate: ValidationService) {
    this.columnSize = this.desktopView ? 12 : 6;
    this.getBlogList();
    this.setFormGroup();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    const getSearchValue = JSON.parse(this.auth.getSessionData('commonInputSearchValue'));
    if (getSearchValue) {
      getSearchValue['contentSeoSearchValue'].content_id = this.blogSeoSelected;
      this.auth.setSessionData('commonInputSearchValue', JSON.stringify(getSearchValue));
    }
    if (this.contentSeo) {
      this.contentSeo.unsubscribe();
    }
  }

  addOrEditButtonClicked() {
    this.buttonClicked = true;
    this.seoFormGroup.controls.status.enable({onlySelf: true});
  }

  cancelButtonClicked() {
    this.buttonClicked = false;
    this.seoFormGroup.controls.status.disable({onlySelf: true});
  }

  getBlogList() {
    const data = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId(),
      school_id: this.auth.getSessionData('school_id')
  };
    this.auth.postService(data, urls.contentList).subscribe((successData) => {
      this.blogListSuccess(successData);
    }, (error) => {
      console.error(error, ' error');
    });
  }

  blogListSuccess(successData) {
    console.log(successData, 'successData');
    this.blogListData = successData.IsSuccess ? successData.ResponseObject : [];
    let commonValue = [{ content_id: '0', name: 'Home', seo_id: '1'}, { content_id: '0', name: 'About Us', seo_id: '2'}, { content_id: '0', name: 'Courses', seo_id: '3'},
        { content_id: '0', name: 'Blog', seo_id: '4'},
        { content_id: '0', name: 'Join As Tutor', seo_id: '5'},
        { content_id: '0', name: 'Contact Us', seo_id: '6'},
        { content_id: '0', name: 'Parent Portal', seo_id: '7'}, 
        { content_id: '0', name: 'FAQ', seo_id: '8'}];
    this.blogListData = [...commonValue, ...this.blogListData];
   
    console.log(this.blogListData, 'dasdas');
    const getSearchValue = JSON.parse(this.auth.getSessionData('commonInputSearchValue'));
    console.log(getSearchValue, 'data');
    this.blogSeoSelected = getSearchValue['contentSeoSearchValue'].content_id;
    this.getListBlogDetails({content_id: this.blogSeoSelected ?? ''});
    console.log(this.blogListData, 'blogListData');
  }


  getListBlogDetails(eve, calledFrom = '') {
    console.log(eve.content_id);
    this.buttonClicked = false;
    this.setFormGroup();
    this.seoFormGroup.controls.status.disable({onlySelf: true});
    const data = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId(),
      school_id: this.auth.getSessionData('school_id'),
      content_id: eve.content_id,
      seo_id: eve.seo_id ?? '0'
    };
    console.log(data, 'data');
    this.auth.postService(data, urls.contentSeoList).subscribe((successData) => {
      this.listSuccess(successData, calledFrom);
    }, (error) => {
      console.error(error, 'booking error');
    });
  }

  listSuccess(successData, calledFrom) {
    console.log(successData, 'successData');
    this.blogSeoData = successData.IsSuccess ? successData.ResponseObject : [];
    this.type = this.blogSeoData.length == 0 ? 'add' : 'edit';
    Object.keys(this.seoFormGroup.controls).forEach(field => {
      this.seoFormGroup.controls[field].patchValue(this.blogSeoData.length == 0 && field != 'status' ? ''
        : this.blogSeoData.length == 0 && field == 'status' ? 'A' : this.blogSeoData[0][field]);
    });
    calledFrom == 'update' ? (successData.IsSuccess ? this.toastr.success('Seo Updated Successfully') : this.toastr.error(successData.ErrorObject)) : '';
  }

  submitSeoForm() {

    const data = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId(),
      school_id: this.auth.getSessionData('school_id'),
  };

    if (this.seoFormGroup.valid) {
      Object.keys(this.seoFormGroup.controls).forEach(field => {
        data[field] = this.seoFormGroup.controls[field].value;
      });
      data['content_id'] = this.blogSeoSelected;
      this.type == 'edit' ? data['seo_id'] = this.blogSeoData[0]['seo_id'] : '';
      console.log(data, 'data');

      this.auth.postService(data, this.type == 'add' ? urls.contentSeoAdd : urls.contentSeoEdit).subscribe((successData) => {
        this.addOrEditSuccess(successData);
      }, (error) => {
        console.error(error, 'addOrUpdateServiceFailed');
      });
    } else {
      this.validate.validateAllFormFields(this.seoFormGroup);
      this.toastr.error('Please Fill all the mandatory Field');
    }
  }

  addOrEditSuccess(successData) {
    console.log(successData, 'successData');
    if (successData.IsSuccess) {
      this.setFormGroup();
      this.buttonClicked = false;
      this.getListBlogDetails({content_id: this.blogSeoSelected}, 'update');
    } else {
      this.toastr.error(successData.ErrorObject);
    }

  }

  setFormGroup() {
    this.seoFormGroup = this.builder.group({
      meta_author: ['', Validators.required],
      meta_title: ['', Validators.required],
      meta_description: ['', Validators.required],
      meta_keywords: ['', Validators.required],
      meta_keyphrase: ['', Validators.required],
      meta_topic: ['', Validators.required],
      meta_subject: ['', Validators.required],
      meta_classification: ['', Validators.required],
      meta_robots: ['', Validators.required],
      meta_rating: ['', Validators.required],
      meta_audience: ['', Validators.required],
      og_title: ['', Validators.required],
      og_type: ['', Validators.required],
      og_site_name: ['', Validators.required],
      og_description: ['', Validators.required],
      og_site_url: ['', Validators.required],
      twitter_title: ['', Validators.required],
      twitter_site: ['', Validators.required],
      twitter_card: ['', Validators.required],
      twitter_description: ['', Validators.required],
      twitter_creator: ['', Validators.required],
      status: [{value: 'A', disabled: true}, Validators.required]
    });
  }
}
