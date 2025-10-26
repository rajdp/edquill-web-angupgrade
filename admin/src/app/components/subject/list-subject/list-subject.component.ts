import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CategoryService} from '../../../shared/service/category.service';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {SubjectServices} from '../../../shared/service/subject.services';
import {SchoolService} from '../../../shared/service/School.service';
import {TitleCasePipe, SlicePipe} from '@angular/common';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.scss']
})
export class ListSubjectComponent implements OnInit {
  public listData: any;
  public deleteUser: any;
  private modalRef: NgbModalRef;
  public closeResult: string;
  public imgUrl: any;
  public schoolData: any;
  public schoolDataList: any = 0;
  public showSchoolSearch: boolean;
  @ViewChild('content') modalContent: TemplateRef<any>;

  constructor(public category: CategoryService, public config: NgbModalConfig, public confi: ConfigurationService, private modalService: NgbModal, public auth: AuthService,
              public commondata: CommonDataService, public route: Router, public subjectservice: SubjectServices, public schoolService: SchoolService,
              public firstcaps: TitleCasePipe, public slicePipe: SlicePipe, public selectSchool: SchoolselectionService) {
    this.imgUrl = this.confi.getimgUrl();
    config.backdrop = 'static';
    config.keyboard = false;

    this.selectSchool.selectSchool.subscribe((params) => {
      if (params != 0){
        if (this.route.url.includes('list-subject')){
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
      actions: {
        custom: [
          {
            name: 'editAction',
            title: '<i class="fa  fa-pencil" title="Edit Subject"></i>'
          },
        ],
        add: false,
        edit: false,
        delete: false,
        position: 'right',
      },


    columns: {
      subject_name: {
        title: 'Subject Name',
      },
      description: {
        title: 'Description',
        type: 'html',
            valuePrepareFunction: (data) => {
              if (data){
                return `<a title="${data}"> <span>${data.length > 20 ? data.substring(0, 20 - 1).concat('…') : data}</a>`;
              } else {
              }
        }
      },
      school_name: {
        title: 'Institution Name',
        type: 'html',
        valuePrepareFunction: (data) => {
          return `<span class="text-capitalize">${data}</span>`;
        }
      },
      status: {
        title: 'Status',
        valuePrepareFunction: (data) => {
          return this.firstcaps.transform(data);
        }
      }
    },
  };

  ngOnInit() {
  }

  init(data){
    // this.schoolDataList = this.auth.getSessionData('rista-school_id');
    this.subjectList('init');
    this.schoolList();
  }

  onCustomAction(event) {
    switch ( event.action) {
      case 'editAction':
       this.auth.setSessionData('editsubject', JSON.stringify(event.data));
       this.route.navigate(['/subject/create-subject/edit']);
       break;
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
  subjectList(type) {
    let schoolid: any;
    if (type == 'init'){
      schoolid = this.auth.getSessionData('rista-school_id');
    }else {
      schoolid = this.schoolDataList;
    }
    this.commondata.showLoader(true);
    const data = {
      platform: 'web',
      type: 'list',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: schoolid
    };
    this.subjectservice.getSubjectList(data).subscribe( (successData) => {
          this.subjectListSuccess(successData);
        },
        (error) => {
          this.subjectListFailure(error);
        });
  }
  subjectListSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.listData = successData.ResponseObject;
      this.listData.forEach((value, index) => {
        this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
            'Inactive' : this.listData[index].status == 3 ? 'Suspended' : this.listData[index].status == 4 ? 'Deleted' : '' ;
      });
    }
  }
  subjectListFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }
  schoolList() {
    this.commondata.showLoader(false);
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
      this.commondata.showLoader(false);
      this.schoolData = successData.ResponseObject;
      this.schoolData.unshift({school_name: 'All Institution', school_id: 0});
    }
  }
  schoolListFailure(error) {
    this.commondata.showLoader(false);
    console.log(error, 'error');
  }
}

