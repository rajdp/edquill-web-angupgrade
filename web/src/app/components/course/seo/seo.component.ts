import {Component, ViewChild} from '@angular/core';
import { EnvironmentService } from 'src/app/environment.service';
import {ToastrService} from 'ngx-toastr';
import { ValidationService } from 'src/app/shared/service/validation.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { NewsubjectService } from 'src/app/shared/service/newsubject.service';
import { urls } from 'src/app/shared/utils/urls';

@Component({
    selector: 'app-seo',
    templateUrl: './seo.component.html',
    styleUrls: ['./seo.component.scss']
})
export class SeoComponent {
    public active = 1;
    item: any;
    public columnSize = 12;
    public desktopView = window.screen.width > 768;
    public courseSeoData = [];
    public courseListData = [];
    public courseSeoSelected: any;
    public type = 'add';
    public buttonClicked = false;
    public seoFormGroup: FormGroup;
    @ViewChild('table') table: any;
    public webhost: any;
    public schoolStatus: any;

    constructor(public auth: AuthService, public env: EnvironmentService, public builder: FormBuilder, public router: Router,
                public toastr: ToastrService, public validate: ValidationService, public newService: NewsubjectService) {
        this.setFormGroup();
        this.columnSize = this.desktopView ? 12 : 6;
        this.webhost = this.env.imgUrl;
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        if (this.schoolStatus.length != 0) {
            this.newService.schoolChange.subscribe((res: any) => {
                if (res != '') {
                    if (this.router.url.includes('/course/faq/list')) {
                        this.getCourseList();
                    }
                } else {
                    this.getCourseList();
                }
            });
        }
    }


    ngOnInit() {
    }

    ngOnDestroy() {
        // const getSearchValue = JSON.parse(this.auth.getSessionStorage('commonInputSearchValue'));
        // if (getSearchValue) {
        //     getSearchValue['courseSeoSearchValue'].course_id = this.courseSeoSelected;
        //     // this.auth.setSessionStorage('commonInputSearchValue', JSON.stringify(getSearchValue));
        // }
    }

    addOrEditButtonClicked() {
        this.buttonClicked = true;
        this.seoFormGroup.controls.status.enable({onlySelf: true});
    }

    cancelButtonClicked() {
        this.buttonClicked = false;
        this.seoFormGroup.controls.status.disable({onlySelf: true});
    }

    getCourseList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.courseList).subscribe((successData) => {
            this.courseListSuccess(successData);
        }, (error) => {
            console.error(error, ' error');
        });
    }

    courseListSuccess(successData) {
        console.log(successData, 'successData');
        this.courseListData = successData.IsSuccess? successData.ResponseObject : [];
        // const getSearchValue = JSON.parse(this.auth.getSessionStorage('commonInputSearchValue'));
        // this.courseSeoSelected = getSearchValue['courseSeoSearchValue'].course_id;
        this.getListCourseDetails({course_id: this.courseSeoSelected ?? ''});
        console.log(this.courseListData, 'courseListData');
    }


    getListCourseDetails(eve) {
        console.log(eve.course_id);
        this.buttonClicked = false;
        this.setFormGroup();
        this.seoFormGroup.controls.status.disable({onlySelf: true});
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            course_id: eve.course_id,
            school_id: this.auth.getSessionData('school_id')
        };
        console.log(data, 'data');
        this.auth.postService(data, urls.courseSeo).subscribe((successData) => {
            this.listSuccess(successData);
        }, (error) => {
            console.error(error, 'booking error');
        });
    }

    listSuccess(successData) {
        console.log(successData, 'successData');
        this.courseSeoData = successData.IsSuccess? successData.ResponseObject : [];
        this.type = this.courseSeoData.length == 0 ? 'add' : 'edit';
        Object.keys(this.seoFormGroup.controls).forEach(field => {
            this.seoFormGroup.controls[field].patchValue(this.courseSeoData.length == 0 && field != 'status' ? ''
                : this.courseSeoData.length == 0 && field == 'status' ? 'A' : this.courseSeoData[0][field]);
        });
    }

    submitSeoForm() {

        const data = {};

        if (this.seoFormGroup.valid) {
            Object.keys(this.seoFormGroup.controls).forEach(field => {
                data[field] = this.seoFormGroup.controls[field].value;
            });
            data['course_id'] = this.courseSeoSelected;
            data['platform'] = 'web';
            data['role_id'] = this.auth.getRoleId();
            data['user_id'] = this.auth.getUserId();
            data['school_id'] = this.auth.getSessionData('school_id');
            this.type == 'edit' ? data['seo_id'] = this.courseSeoData[0]['seo_id'] : '';
            console.log(data, 'data');

            this.auth.postService(data, this.type == 'add' ? urls.addCourseSeo : urls.updateCourseSeo).subscribe((successData) => {
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
            this.getListCourseDetails({course_id: this.courseSeoSelected});
            this.toastr.success(successData.ResponseObject);
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
