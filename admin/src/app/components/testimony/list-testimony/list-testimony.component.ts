import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../../shared/service/auth.service";
import {ToastrService} from "ngx-toastr";
import {CommonService} from "../../../shared/service/common.service";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {ConfigurationService} from "../../../shared/service/configuration.service";

@Component({
  selector: 'app-list-testimony',
  templateUrl: './list-testimony.component.html',
  styleUrls: ['./list-testimony.component.scss']
})
export class ListTestimonyComponent implements OnInit {
  public testimonyList = [];
  public webhost: any;
  public searchValue: any = '';
  public selectedTestimonyDetail: any;
  public deleteDetail: any;
  public detailIndex: any;
  @ViewChild('testimony') testimony: TemplateRef<any>;
  private modalRef: NgbModalRef;

  constructor(public auth: AuthService, public toastr: ToastrService, public common: CommonService, private datePipe: DatePipe, public router: Router,
              public sanitizer: DomSanitizer, public config: ConfigurationService, private modalService: NgbModal) {
    this.webhost = this.config.getimgUrl();
  }

  ngOnInit(): void {
    this.getTestimonyDetails();
  }

  searchTestimony(event) {
    this.searchValue = event.target.value;
    if (this.searchValue == '') {
      this.getTestimonyDetails();
    } else if (this.searchValue.length > 2) {
        setTimeout(() => {
            this.getTestimonyDetails();
        }, 1500);
    }
  }

  getTestimonyDetails() {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      search: this.searchValue
    };
    this.common.testimonyList(data).subscribe((successData) => {
          this.testimonyListSuccess(successData);
        },
        (error) => {
          console.log(error);
        });
  }
  testimonyListSuccess(successData) {
    if (successData.IsSuccess) {
      this.testimonyList = successData.ResponseObject;
      this.testimonyList.forEach((item) => {
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
      console.log(this.testimonyList, 'testimonyList');
    }
  }
  showTestimonyDetail(detail) {
    this.selectedTestimonyDetail = JSON.parse(JSON.stringify(detail));
    if (this.selectedTestimonyDetail.display_from != '') {
      const split = this.selectedTestimonyDetail.display_from.split(' ');
      this.selectedTestimonyDetail.display_from = split[0];
    }
    if (this.selectedTestimonyDetail.display_until != '') {
      const split = this.selectedTestimonyDetail.display_until.split(' ');
      this.selectedTestimonyDetail.display_until = split[0];
    }
    this.selectedTestimonyDetail.rating = parseInt(this.selectedTestimonyDetail.rating);
    console.log(this.selectedTestimonyDetail, 'this.selectedTestimonyDetail');
    this.modalRef = this.modalService.open(this.testimony, {size: 'md'});
  }

  editTestimony(data) {
    this.auth.setSessionData('editTestimony', JSON.stringify(data));
    this.router.navigate(['/testimonial/create-testimonial/edit']);
  }

}
