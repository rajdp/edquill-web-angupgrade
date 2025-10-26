import {Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {BookService} from '../../../shared/service/book.service';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {TitleCasePipe, SlicePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import {SchoolService} from '../../../shared/service/School.service';
import {ViewCell} from 'ng2-smart-table';
import {DomSanitizer} from '@angular/platform-browser';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-Books.component.html',
  styleUrls: ['./list-Books.component.scss']
})
export class ListBooksComponent implements OnInit {
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
  public pdfTemplate: any;
  public fileUploader: any;
  public schoolDataList: any = 0;
  public showSchoolSearch: boolean = true;
  @ViewChild('bulkModal') bulkContent: TemplateRef<any>;
  @ViewChild('viewPdf') viewPdf: TemplateRef<any>;
  @ViewChild('pdfPage', {static: false}) pdfPage: ElementRef;

  constructor(public bookService: BookService, public config: NgbModalConfig, public confi: ConfigurationService, private modalService: NgbModal,
              public auth: AuthService, public commondata: CommonDataService, public route: Router, public firstcaps: TitleCasePipe,
              public toastr: ToastrService, public common: CommonService, public schoolService: SchoolService, public slice: SlicePipe,
              public selectSchool: SchoolselectionService) {
    this.webhost = this.confi.getimgUrl();
    config.backdrop = 'static';
    config.keyboard = false;

    this.selectSchool.selectSchool.subscribe((params) => {
      if (params != 0){
        if (this.route.url.includes('list-Books')){
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
            title: '<i class="fa  fa-pencil" title="Edit Book"></i>'
          },
        ],
        add: false,
        edit: false,
        delete: false,
        position: 'right',
      },


    columns: {
      name: {
        title: 'Book Name',
        type: 'custom',
        renderComponent: ViewComponent,
        onComponentInitFunction: (instance: any) =>  {
          instance.save.subscribe(row => {
          });
        }
      },
      publication_code: {
        title: 'Publication Code',
        type: 'html',
        valuePrepareFunction: (data) => {
          return `<span class="text-capitalize cursor">${data}</span>`;

        }
      },
      school_name: {
        title: 'Institution Name',
        type: 'html',
        valuePrepareFunction: (data) => {
          return `<span class="text-capitalize cursor">${data}</span>`;

        }
      },
      access: {
        title: 'Access Type',
        type: 'html',
        valuePrepareFunction: (data) => {
          return `<span class="text-capitalize cursor">${data}</span>`;
        }
      },
      status: {
        title: 'Status',
        type: 'html',
        valuePrepareFunction: (data) => {
          return `<span class="text-capitalize cursor">${data}</span>`;

        }
      },
    },
  };

  ngOnInit() {
  }
  init(data){
    // this.schoolDataList = this.auth.getSessionData('rista-school_id');
    this.bookList('init');
    this.schoolList();
  }
  onCustomAction(event) {
    switch ( event.action) {
      case 'editAction':
       this.auth.setSessionData('editBook', JSON.stringify(event.data));
       this.route.navigate(['/Books/create-Books/edit']);
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
  bookList(type) {
    let school: any;
    if (type == 'init'){
      school = this.auth.getSessionData('rista-school_id');
    }else {
      school = this.schoolDataList;
    }
    this.commondata.showLoader(true);
    const data = {
      platform: 'web',
      type: 'list',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: school
    };
    this.bookService.getBookList(data).subscribe( (successData) => {
          this.bookListSuccess(successData);
        },
        (error) => {
          this.bookListFailure(error);
        });
  }
  bookListSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.listData = successData.ResponseObject;
      this.listData.forEach((value, index, array) => {
        this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
            'Inactive' : this.listData[index].status == 3 ? 'Suspended' : this.listData[index].status == 4 ? 'Deleted' : '' ;
      });
      this.listData.forEach((value, index, array) => {
        this.listData[index].access = this.listData[index].access == 1 ? 'Private(within institution)' : this.listData[index].access == 2 ? 'Private (only you)' :
            this.listData[index].access == 3 ? 'Public' : '' ;
      });
    }
  }
  bookListFailure(error) {
    this.commondata.showLoader(false);
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
  }
  readUrl(event: any) {
    const file = event.target.files[0];
    this.filetype = event.target.files[0].name.split('.');
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
      };
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
      this.bulkInsert(successData.ResponseObject.upload_id);
      this.close();
      this.bookList('init');
      this.toastr.success(successData.ResponseObject.Message , 'Success!');
    } else {
      this.toastr.error(successData.ErrorObject, 'Failed!');
      this.commondata.showLoader(false);
    }
  }

  excelUpoadFailure(error) {
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
  }

}

@Component({
  selector: 'button-toggle',
  template: `
  
    <div class="form-group">
         <span class="text-capitalize font-weight-bold table-name" data-toggle="modal" data-target="#myModal" (click)="viewdetailsList()">{{rowData.name}}</span>
    </div>
    <ng-template #viewPdf let-c="close" let-d="dismiss">
      <div class="modal-body">
        <!-- Container-fluid starts-->
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 modal-header">
              <h4 class="modal-title">{{pdfName}}</h4>
              <p class="text-right">
                <i class="fa fa-close fa-lg mt-1" aria-hidden="true" style="color:#7F3486; cursor: pointer; float: right;" (click)="close()"></i>
                <!--                        <i class="fa fa-close fa-2x" aria-hidden="true" style="cursor:pointer" (click)="close()"></i>-->
              </p>
            </div>
            <div class="col-md-12">
              <pdf-viewer  [src]="pdfTemplate" style="display: block;"></pdf-viewer>
            </div>
          </div>
        </div>
        <!-- Container-fluid Ends-->
      </div>
    </ng-template>

  `
})

export class ViewComponent implements ViewCell, OnInit {
  status: any;
  private modalRef: NgbModalRef;
  viewdetail: any;
  webhost: any;
  pdfName: any;
  pdfTemplate: any;
  renderValue: string;
  public listData: any;
  public pdfpath: any;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();
  @ViewChild('viewPdf') viewPdf: TemplateRef<any>;

  constructor(private modalService: NgbModal, public route: Router, public config: NgbModalConfig, public bookService: BookService, public commondata: CommonDataService,
              public sanitizer: DomSanitizer, public confi: ConfigurationService, public auth: AuthService, public common: CommonService) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.webhost = this.confi.getimgUrl();
  }
  ngOnInit() {
  }
  viewdetailsList() {
    this.bookBase64();
  }
  open(content) {
    this.modalService.open(content);
  }
  close() {
    this.modalRef.close();
  }
  cancel(){
    this.modalRef.close();
  }

  bookBase64() {
    this.commondata.showLoader(true);
    const data = {
      platform: 'web',
      type: 'list',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: this.rowData.school_id,
      content_id: this.rowData.content_id
    };
    this.bookService.getBookList(data).subscribe( (successData) => {
          this.bookListSuccess(successData);
        },
        (error) => {
          this.bookListFailure(error);
        });
  }
  bookListSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.listData = successData.ResponseObject[0];
      this.pdfName = '';
      this.pdfName = this.listData.file_path[0]?.image;
      if (this.listData.base64_data){
        this.pdfTemplate = this.listData.base64_data == ''  ? this.webhost + '/' + this.listData.file_path[0]?.original_image_url : this.common.convertBase64PdfPath(this.listData.base64_data);
      }else{
        this.pdfTemplate = this.webhost + '/' + this.listData.file_path[0]?.original_image_url;
      }
      this.modalRef = this.modalService.open(this.viewPdf, {size: 'xl'});
    }
  }
  bookListFailure(error) {
    this.commondata.showLoader(false);
  }
}

