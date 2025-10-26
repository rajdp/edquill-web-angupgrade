import {Component, OnDestroy, OnInit, TemplateRef, ViewChild, DoCheck} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {DomSanitizer} from '@angular/platform-browser';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {EnvironmentService} from 'src/app/environment.service';
import {Subscription} from 'rxjs';
import { dateOptions } from 'src/app/shared/data/config';
import { AuthService } from 'src/app/shared/service/auth.service';
import { urls } from 'src/app/shared/utils/urls';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit, OnDestroy, DoCheck {
  public bloggerList = [];
  public rows = [];
  public selectedBlogDetail: any;
  public deleteDetail: any;
  public detailIndex: any;
  public recordPerPage = 10;
  public searchedValue = '';
  public statusList = [{value: 'Active', id: 'A'}, {value: 'Suspended', id: 'I'}];
  public selectedStatus = [];
  public selectedCategory = [];
  public categoryListData = [];
  @ViewChild('blogDetail') blogDetail: TemplateRef<any>;
  @ViewChild('deleteBlogger') deleteBlogger: TemplateRef<any>;
  private modalRef: NgbModalRef;
  private contentList: Subscription;
  @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;
  constructor(public auth: AuthService, private modalService: NgbModal, public toastr: ToastrService, private datePipe: DatePipe,
              public router: Router, public sanitizer: DomSanitizer, public env: EnvironmentService) {
    if (this.router.url.includes('content-list')) {
      this.getBlogDetails();
      this.getCategoryList();
    }
  }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    setTimeout(() => {
        if (this.table) {
            this.table.recalculate();
        }
    }, 0)
  }

  ngOnDestroy(): void {
    this.auth.setSessionData('contentListSearchValue', JSON.stringify({
      category_id: this.selectedCategory,
      status: this.selectedStatus,
      searchValue: this.searchedValue
    }));
    if (this.contentList) {
      this.contentList.unsubscribe();
    }
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
    console.log(successData, 'successData');
    this.categoryListData = successData.IsSuccess ? successData.ResponseObject : [];
    const getContentListSearch: any = JSON.parse(this.auth.getSessionData('contentListSearchValue'));
    this.selectedCategory = getContentListSearch.category_id;
    this.selectedStatus = getContentListSearch.status;
    this.searchedValue = getContentListSearch.searchValue;
    this.searchList();
    console.log(getContentListSearch, 'getContentListSearch');
    console.log(this.categoryListData, 'categoryListData');
  }

  searchBlog(event) {
    const searchValued = event.target.value;
    const temp = this.bloggerList.filter(search => {
      return search.name.toLowerCase().indexOf(searchValued) !== -1 || !searchValued;
    });
    this.rows = temp;
  }

  searchList() {
    let arrayValue = [];
    arrayValue = this.bloggerList;
    if (this.selectedCategory.length != 0) {
      arrayValue = arrayValue.filter(o1 => this.selectedCategory.some(o2 => o1.category_id === o2));
      console.log(arrayValue, 'arrayValue');
    } else {
      arrayValue = this.bloggerList;
    }
    console.log(arrayValue, 'aaraay2');
    this.selectedStatus.length != 0 ? arrayValue = arrayValue.filter(o1 => this.selectedStatus.some(o2 => o1.status === o2)) : '';
    console.log(arrayValue, 'status');
    const searchValued = this.searchedValue;
    arrayValue = arrayValue.filter(search => {
      return search.name.toLowerCase().indexOf(searchValued) !== -1 || !searchValued;
    });
    this.rows = arrayValue;
    console.log(arrayValue, 'aara');
  }

  getBlogDetails() {
    const data = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId(),
      school_id: this.auth.getSessionData('school_id')
    };
    this.auth.postService(data, urls.contentList).subscribe(
      (successData) => {
        this.bloggerListSuccess(successData);
      },
      (error) => {
        console.error(error, 'booking error');
      }
    );
  }

  bloggerListSuccess(successData) {
    if (successData.IsSuccess) {
      this.rows = successData.ResponseObject;
      this.bloggerList = successData.ResponseObject;
      this.bloggerList.forEach((item) => {
        if (item.display_from != '') {
          const displayStart = item.display_from.split(' ');
          const date = this.datePipe.transform(displayStart[0], 'MM-dd-yyyy');
          item.display_from = date + ' ' + displayStart[1];
        }
        if (item.display_until != '') {
          const displayEnd = item.display_until.split(' ');
          const date = this.datePipe.transform(displayEnd[0], 'MM-dd-yyyy');
          item.display_until = date + ' ' + displayEnd[1];
        }
        const created = item.created_date.split(' ');
        item.converted_created_date = this.datePipe.transform(created[0], dateOptions.dateFormat);
      });
    } else {
      this.rows = [];
      this.bloggerList = [];
    }
  }

  showBlogDetail(detail) {
    this.selectedBlogDetail = detail;
    this.modalRef = this.modalService.open(this.blogDetail, {size: 'lg', backdrop: 'static', centered: true});
    console.log(this.selectedBlogDetail, 'details');
  }

  addViewCount() {
    const data = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId(),
      school_id: this.auth.getSessionData('school_id'),
      content_id: this.selectedBlogDetail.content_id,
      views: this.selectedBlogDetail.views
    };
    this.auth.postService(data, urls.viewCount).subscribe((successData) => {
      console.log(successData);
    }, error => {
      console.error(error);
    });
  }

  editBlog(data) {
    this.modalRef ? this.modalRef.close() : '';
    sessionStorage.setItem('editBlog', JSON.stringify(data));
    this.router.navigate(['/content/content-list/edit']);
  }

  openDeleteDialog(detail, index) {
    this.deleteDetail = detail;
    this.detailIndex = index;
    this.modalRef = this.modalService.open(this.deleteBlogger, {size: 'xl', backdrop: 'static', centered: true});
  }

  deleteBlog(detail, index) {
    const data = {
      platform: 'web',
      role_id: this.auth.getRoleId(),
      user_id: this.auth.getUserId(),
      school_id: this.auth.getSessionData('school_id'),
      content_id: detail.content_id
    };
    this.auth.postService(data, urls.deleteBlogger).subscribe((successData) => {
      this.bloggerDeleteSuccess(successData);
    }, error => {
      console.error(error);
      this.modalRef.close();
    });
  }

  bloggerDeleteSuccess(successData) {
    if (successData.IsSuccess) {
      this.toastr.success(successData.ResponseObject);
      this.modalRef.close();
      this.getBlogDetails();
    }
  }

  close() {
    this.modalRef.close();
  }
  onImageError(event: any) {
    event.target.src = 'assets/images/blog/08.jpg';
  }
}
