import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SchoolService} from '../../../shared/service/School.service';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {DomSanitizer} from '@angular/platform-browser';
import {TitleCasePipe} from '@angular/common';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-School.component.html',
  styleUrls: ['./list-School.component.scss']
})
export class ListSchoolComponent implements OnInit, OnDestroy {
  public listData: any;
  public deleteUser: any;
  private modalRef: NgbModalRef;
  public closeResult: string;
  public imgUrl: any;
  public webhost: any;
  public viewDetail: any;
  public recordBase64Url: any;
  public item: any;
  public listData1: any;
  public hideSchool: boolean;
  @ViewChild('content') modalContent: TemplateRef<any>;
  @ViewChild('viewdetails') viewDetailsContent: TemplateRef<any>;

  constructor(public brandservices: SchoolService, public config: NgbModalConfig, public confi: ConfigurationService, public sanitizer: DomSanitizer,
              private modalService: NgbModal, public auth: AuthService, public commondata: CommonDataService, public route: Router,
              public firstcaps: TitleCasePipe, public select: SchoolselectionService) {
    this.imgUrl = this.confi.getimgUrl();
    this.schoolList();
    config.backdrop = 'static';
    config.keyboard = false;
    this.webhost = this.confi.getimgUrl();
    this.listData1 = [];
  }

  public settings = {
      hideSubHeader: false,
      actions: {
        custom: [
          {
            name: 'editAction',
            title: '<i class="fa  fa-pencil"></i>'
          },
          {
            name: 'deleteAction',
            title: '&nbsp;&nbsp;<i class="fa fa-trash" aria-hidden="true"></i>'
          }
        ],
        add: false,
        edit: false,
        delete: false,
        position: 'right',
      },


    columns: {
      name: {
        title: 'Institution Name',
        valuePrepareFunction: (data) => {
          return this.firstcaps.transform(data);
        }
      },
      address1: {
        title: 'Address1',
        valuePrepareFunction: (data) => {
          return this.firstcaps.transform(data);
        }
      },
      address2: {
        title: 'Address2',
        valuePrepareFunction: (data) => {
          return this.firstcaps.transform(data);
        }
      },
      email_id: {
        title: 'Email-id',
      },
      mobile: {
        title: 'Mobile'
      },
      status: {
        title: 'Status'
      }
    },
  };

  ngOnInit() {
    this.commondata.showLoader(false);
    this.hideSchool = false;
    this.select.hideChangeSchool(this.hideSchool);
  }

  ngOnDestroy(): void {
    this.hideSchool = true;
    this.select.hideChangeSchool(this.hideSchool);
  }

  onCustomAction(event) {
    switch ( event.action) {
      case 'editAction':
       this.auth.setSessionData('editBrand', JSON.stringify(event.data));
       this.route.navigate(['/School/create-School/edit']);
       break;

      case 'deleteAction':
        this.deleteUser = event.data;
        this.showModal();
    }
  }

  showModal() {
    this.modalRef = this.modalService.open(this.modalContent);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  viewDetails(item) {
    this.item = item;
    this.viewDetail = [];
    this.viewDetail = item;
    this.modalRef = this.modalService.open(this.viewDetailsContent);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.listData1.filter(function(d) {
      return d.school_name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.listData = temp;
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  open(content) {
    this.modalService.open(content);
  }

  close() {
    this.modalRef.close();
  }

  deleteConfirm(){
    this.commondata.showLoader(false);
    const data = {
      platform: 'web',
      selected_user_id: this.deleteUser.user_id,
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid')
    };
    this.brandservices.getSchoolList(data).subscribe( (successData) => {
          this.deleteConfirmSuccess(successData);
        },
        (error) => {
          this.deleteConfirmFailure(error);
        });
  }

  deleteConfirmSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.close();
    }
  }
  deleteConfirmFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }


  schoolList() {
    this.commondata.showLoader(false);
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid')
    };
    this.brandservices.getSchoolList(data).subscribe( (successData) => {
          this.schoolListSuccess(successData);
        },
        (error) => {
          this.schoolListFailure(error);
        });
  }
  schoolListSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.listData = successData.ResponseObject;
      this.listData1 = successData.ResponseObject;
      this.listData.forEach((value, index, array) => {
        this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
            'Inactive' : this.listData[index].status == 3 ? 'Suspended' : this.listData[index].status == 4 ? 'Deleted': '' ;
      });
    }
  }
  schoolListFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }
  editschool(rows){
    this.auth.setSessionData('editschool', JSON.stringify(rows));
    this.route.navigate(['/School/create-School/edit']);
    this.close();
  }
}

