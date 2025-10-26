import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../../shared/service/auth.service";
import {ToastrService} from "ngx-toastr";
import {CommonService} from "../../../shared/service/common.service";
import {DomSanitizer} from "@angular/platform-browser";
import {ConfigurationService} from "../../../shared/service/configuration.service";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})
export class ListBlogComponent implements OnInit {
  public bloggerList = [];
  public webhost: any;
  public searchValue: any = '';
  public selectedBlogDetail: any;
  public deleteDetail: any;
  public detailIndex: any;
  @ViewChild('blogDetail') blogDetail: TemplateRef<any>;
  @ViewChild('deleteBlogger') deleteBlogger: TemplateRef<any>;
  private modalRef: NgbModalRef;

  constructor(public auth: AuthService, public toastr: ToastrService, public common: CommonService, private datePipe: DatePipe, public router: Router,
              public sanitizer: DomSanitizer, public config: ConfigurationService, private modalService: NgbModal) {
    this.webhost = this.config.getimgUrl();
  }

  ngOnInit(): void {
    this.getBlogDetails();
  }

  searchBlog(event) {
    this.searchValue = event.target.value;
    if (this.searchValue == '') {
      this.getBlogDetails();
    } else if (this.searchValue.length > 2) {
      setTimeout(() => {
        this.getBlogDetails();
      }, 1000);
    }
  }

  getBlogDetails() {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      search: this.searchValue
    };
    this.common.bloggerList(data).subscribe((successData) => {
          this.bloggerListSuccess(successData);
        },
        (error) => {
          console.log(error);
        });
  }
  bloggerListSuccess(successData) {
    if (successData.IsSuccess) {
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
        let created = item.created_date.split( ' ');
        item.converted_created_date = this.datePipe.transform(created[0], 'MMM d, y');
      });
      console.log(this.bloggerList, 'bloggerList');
    }
  }
  showBlogDetail(detail) {
    this.selectedBlogDetail = detail;
    this.modalRef = this.modalService.open(this.blogDetail, {size: 'lg'});
  }
  addViewCount() {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      blog_id: this.selectedBlogDetail.blog_id,
      views: this.selectedBlogDetail.views,
    };
    this.common.bloggerViewCount(data).subscribe((successData) => {
          console.log(successData);
        },
        (error) => {
          console.log(error);
        });
  }
  editBlog(data) {
    this.auth.setSessionData('editBlog', JSON.stringify(data));
    this.router.navigate(['/blog/create-blog/edit']);
  }
  openDeleteDialog(detail, index) {
    this.deleteDetail = detail;
    this.detailIndex = index;
    this.modalRef = this.modalService.open(this.deleteBlogger);
  }
  deleteBlog(detail, index) {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      blog_id: detail.blog_id,
    };
    this.common.bloggerDelete(data).subscribe((successData) => {
          this.bloggerDeleteSuccess(successData);
        },
        (error) => {
          console.log(error);
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

}
