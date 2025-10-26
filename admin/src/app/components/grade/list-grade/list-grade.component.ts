import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {TitleCasePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import {SchoolService} from '../../../shared/service/School.service';
import {GradeService} from '../../../shared/service/grade.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-grade.component.html',
  styleUrls: ['./list-grade.component.scss']
})
export class ListGradeComponent implements OnInit {
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

  constructor(public newSubject: NewsubjectService, public config: NgbModalConfig, public confi: ConfigurationService, private modalService: NgbModal,
              public auth: AuthService, public commondata: CommonDataService, public route: Router, public firstcaps: TitleCasePipe, public schoolSelect: SchoolselectionService,
              public toastr: ToastrService, public common: CommonService, public schoolService: SchoolService, public gradeService: GradeService) {
    this.webhost = this.confi.getimgUrl();
    config.backdrop = 'static';
    config.keyboard = false;
    this.schoolSelect.selectSchool.subscribe((params) => {
      if (params != 0){
        if (this.route.url.includes('list-grade')){
          this.init(params);
        }
      }else {
        this.init(params);
      }
    });
    this.schoolSelect.searchSchool.subscribe((params) => {
      let schoolid : any;
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
            title: '<i class="fa  fa-pencil" title="Edit Grade"></i>'
          },
        ],
        add: false,
        edit: false,
        delete: false,
        position: 'right',
      },


    columns: {
      grade_name: {
        title: 'Grade Name',
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
          return `<span class="text-capitalize cursor">${data}</span>`;
        }
      },
      status: {
        title: 'Status'
      },
    },
  };

  ngOnInit() {
  }

  init(data){
    // this.schoolDataList = this.auth.getSessionData('rista-school_id');
    this.gradeList('init');
    this.schoolList();
  }
  onCustomAction(event) {
    switch ( event.action) {
      case 'editAction':
       this.auth.setSessionData('editgrade', JSON.stringify(event.data));
       this.route.navigate(['/grade/create-grade/edit']);
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
    this.fileUploader = '';
    this.filetype = '';
  }


  gradeList(type) {
    let schoolid: any;
    if (type == 'init'){
      schoolid = this.auth.getSessionData('rista-school_id');
    }else{
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
    this.gradeService.getgradeList(data).subscribe( (successData) => {
          this.gradeListSuccess(successData);
        },
        (error) => {
          this.gradeListFailure(error);
        });
  }
  gradeListSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.listData = successData.ResponseObject;
      this.listData.forEach((value, index, array) => {
        this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
            'Inactive' : this.listData[index].status == 3 ? 'Suspended' : this.listData[index].status == 4 ? 'Deleted': '' ;
      });
    }
  }
  gradeListFailure(error) {
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
  readUrl(event: any) {
    // if (this.schoolId != null){
    const file = event.target.files[0];
    this.filetype = event.target.files[0].name.split('.');
    // this.formattype = event.target.files[0].type.split('.');
    if (event.srcElement.files[0].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || event.srcElement.files[0].type == 'application/vnd.ms-excel') {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        this.getUrl1 = [];
        this.url = event.target.result;
        this.getUrl = this.url.split(',');
        this.getUrl1.push(this.url.split(','));
        this.onUploadFinished1(this.getUrl, event);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
      // this.onUploadFinished(reader.result);
      this.toastr.success('Excel Upload Successfully' , 'Success!');
    } else {
      this.toastr.error('Only Excel Format Is Required', 'Failed');
      this.filetype = '';
    }
  }
  onUploadFinished1(event, fileEvent) {
    this.getUrl = event[1];
  }

  onUploadFinished() {
    if (this.schoolId != null ){
      this.commondata.showLoader(true);
      const data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        file: this.getUrl,
        extension: this.filetype[1],
        upload_type: 'Excel',
        user_type: 'Book'
      };
      this.common.excelUpload(data).subscribe(
          (successData) => {
            this.excelUpoadSuccess(successData);
          },
          (error) => {
            this.excelUpoadFailure(error);
          }
      );
      this.commondata.showLoader(true);
    }else {
      this.toastr.error('Select the Institution Name', 'Student');
    }
  }

  excelUpoadSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.getUrl = '';
      // fileEvent = null;
      this.bulkInsert(successData.ResponseObject.upload_id);
      // this.fileUploader.nativeElement.value = '';
      this.close();
      this.gradeList('init');
      this.toastr.success(successData.ResponseObject.Message , 'Success!');
    } else {
      this.toastr.error(successData.ErrorObject, 'Failed!');
      this.commondata.showLoader(false);
    }
  }

  excelUpoadFailure(error) {
    console.log(error);
  }

  bulkInsert(id) {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      upload_id: id,
      school_id: this.schoolId
    };
    this.common.bulkInsert(data).subscribe(
        (successData) => {
          this.bulkInsertSuccess(successData);
        },
        (error) => {
          this.bulkInsertFailure(error);
        }
    );
  }
  bulkInsertSuccess(successData) {
    if (successData.IsSuccess) {
    }
  }
  bulkInsertFailure(error) {
    console.log(error);
  }
  downloadExcel() {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      user_type: 'Book'

    };
    this.common.excelDownload(data).subscribe(
        (successData) => {
          this.excelDownloadSuccess(successData);
        },
        (error) => {
          this.excelDownloadFailure(error);
        }
    );
  }
  excelDownloadSuccess(successData) {
    if (successData.IsSuccess) {
      const url = this.webhost + '/' + successData.ResponseObject;
      window.open(url);
    }
  }
  excelDownloadFailure(error) {
    console.log(error);
  }

}

