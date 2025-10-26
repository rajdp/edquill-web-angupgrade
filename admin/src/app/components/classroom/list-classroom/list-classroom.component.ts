import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { userListDB } from 'src/app/shared/tables/list-users';
import {BookService} from '../../../shared/service/book.service';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {TitleCasePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import {SchoolService} from '../../../shared/service/School.service';
import {ClassroomService} from '../../../shared/service/classroom.service';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-classroom.component.html',
  styleUrls: ['./list-classroom.component.scss']
})
export class ListClassroomComponent implements OnInit {
  public listData: any;
  public deleteUser: any;
  private modalRef: NgbModalRef;
  public closeResult: string;
  public filetype: any;
  public url: any;
  public getUrl: any;
  public getUrl1: any;
  public schoolData: any;
  public schoolId: any;
  public webhost: any;
  public fileUploader: any;
  public schoolDataList: any = 0;
  public showSchoolSearch: boolean;
  @ViewChild('bulkModal') bulkContent: TemplateRef<any>;

  constructor(public selectSchool: SchoolselectionService, public config: NgbModalConfig, public confi: ConfigurationService,
              public auth: AuthService, public commondata: CommonDataService, private modalService: NgbModal,
              public route: Router, public firstcaps: TitleCasePipe, public toastr: ToastrService,
              public common: CommonService, public schoolService: SchoolService, public classroom: ClassroomService) {
    this.webhost = this.confi.getimgUrl();
    config.backdrop = 'static';
    config.keyboard = false;

    this.selectSchool.selectSchool.subscribe((params) => {
      if (params != 0){
        if (this.route.url.includes('list-classroom')){
          this.init(params);
        }
      }else {
        this.init(params);
      }
    });
    this.selectSchool.searchSchool.subscribe((params) => {
      let schoolid: any;
      schoolid = this.auth.getSessionData('rista-school_id');
      if (schoolid != 0){
        this.showSchoolSearch = false;
      }else if (schoolid == 0){
        this.showSchoolSearch = true;
        this.schoolDataList = 0;
      }
    });
  }

  public settings = {
    hideSubHeader: false,
    columns: {
      batch_name: {
        title: 'Content Folder Name',
      },
      school_name: {
        title: 'Institution Name',
        type: 'html',
        valuePrepareFunction: (data) => {
          return `<span class="text-capitalize cursor">${data}</span>`;
        }
      },
      status: {
        title: 'Status',
      },
    },
    actions: {
      custom: [
        {
          name: 'editAction',
          title: '<i class="fa  fa-pencil ml-2" title="Edit Content Folder"></i>'
        },
      ],
      add: false,
      edit: false,
      delete: false,
      position: 'right',
    },

  };

  ngOnInit() {
  }

  init(data){
    // this.schoolDataList = this.auth.getSessionData('rista-school_id');
    this.schoolList();
    this.getBatchList('init');
  }
  onCustomAction(event) {
    switch ( event.action) {
      case 'editAction':
        this.auth.setSessionData('editclassroom', JSON.stringify(event.data));
        this.route.navigate(['/classroom/create-classroom/edit']);
        break;
    }
  }
  showBulk() {
    this.filetype = '';
    this.schoolId = null;
    this.modalRef = this.modalService.open(this.bulkContent);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  onSave() {
    this.modalRef.close();
  }
  close() {
    this.modalRef.close();
    this.schoolId = null;
  }


  getBatchList(type) {
    let schoolid: any;
    if (type == 'init'){
      schoolid = this.auth.getSessionData('rista-school_id');
    }else {
      schoolid = this.schoolDataList;
    }
    const data = {
      platform: 'web',
      type: '1',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: schoolid,
    };
    this.classroom.batchList(data).subscribe( (successData) => {
          this.batchListSuccess(successData);
        },
        (error) => {
          this.batchListFailure(error);
        });
  }
  batchListSuccess(successData) {
    if (successData.IsSuccess) {
      this.listData = successData.ResponseObject;
      this.listData.forEach((value, index, array) => {
        this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
            'Inactive' : this.listData[index].status == 3 ? 'Suspended' : this.listData[index].status == 4 ? 'Deleted': '' ;
      });
    }
  }
  batchListFailure(error) {
  }
  schoolList() {
    const data = {
      platform: 'web',
      type: 'list',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
    };
    this.schoolService.getSchoolList(data).subscribe( (successData) => {
          this.schoolListSuccess(successData);
        },
        (error) => {
          this.schoolListFailure(error);
        });
  }
  schoolListSuccess(successData) {
    if (successData.IsSuccess) {
      this.schoolData = successData.ResponseObject;
      this.schoolData.unshift({school_name: 'All Institution', school_id: 0});
    }
  }
  schoolListFailure(error) {
    console.log(error, 'error');
  }
}
