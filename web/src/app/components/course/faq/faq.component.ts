import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {FormBuilder} from '@angular/forms';
import {urls} from '../../../shared/utils/urls';
import {Router} from '@angular/router';
import {NewsubjectService} from '../../../shared/service/newsubject.service';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, OnDestroy {
    public courseListData = [];
    public courseFaqSelected: any = '';
    public faqListDetails = [];
    public schoolStatus: any;

    constructor(public auth: AuthService, public builder: FormBuilder, public router: Router, public newService: NewsubjectService) {
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
      this.newService.allowSchoolChange(false);
    }

    ngOnInit(): void {
    }

    ngOnDestroy() {
        const getSearchValue = JSON.parse(this.auth.getSessionData('commonInputSearchValue'));
        if (getSearchValue) {
          getSearchValue['courseFaqSearchValue'].course_id = this.courseFaqSelected;
          this.auth.setSessionData('commonInputSearchValue', JSON.stringify(getSearchValue));
        }
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
        this.courseListData.unshift({course_name: 'All Course', course_id: ''});
        const getSearchValue = JSON.parse(this.auth.getSessionData('commonInputSearchValue'));
        this.courseFaqSelected = getSearchValue['courseFaqSearchValue'].course_id ?? '';
        this.getFaqListData({course_id: this.courseFaqSelected ?? ''});
    }

    getFaqListData(eve) {
        console.log(eve.course_id);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            course_id: eve == '' ? '' : eve.course_id
        };
        this.auth.postService(data, urls.faqList).subscribe((successData) => {
            this.getFaqListSuccess(successData);
        }, (error) => {
            console.error(error, ' error');
        });
    }

    getFaqListSuccess(successData) {
        this.faqListDetails = successData.IsSuccess? successData.ResponseObject : [];
    }

    editFaqDetails(value) {
        this.router.navigate(['/course/faq/edit']);
        this.auth.setSessionData('getFaqDetails', JSON.stringify(value));
    }
}
