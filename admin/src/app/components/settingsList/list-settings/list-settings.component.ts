import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {TitleCasePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-settings.component.html',
  styleUrls: ['./list-settings.component.scss']
})
export class ListSettingsComponent implements OnInit, OnDestroy {
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
  public roleid: any;
  public schoolid: any;
  public pdfTemplate: any;
  public settingsform: UntypedFormGroup;
  public hideSchool: boolean;

  @ViewChild('content') content: TemplateRef<any>;

  constructor( public config: NgbModalConfig, public confi: ConfigurationService, private modalService: NgbModal, public select: SchoolselectionService,
               public auth: AuthService, public commondata: CommonDataService, public route: Router, public firstcaps: TitleCasePipe,
               public toastr: ToastrService, public common: CommonService, public formBuilder: UntypedFormBuilder ) {
    this.webhost = this.confi.getimgUrl();
    config.backdrop = 'static';
    config.keyboard = false;
    this.roleid = this.auth.getSessionData('rista-roleid');
    this.auth.setSessionData('rista-resourceAccess', false);
    this.auth.setSessionData('rista-browseAll', false);
    this.auth.removeSessionData('rista-classData');
    this.auth.removeSessionData('readonly_data');
    this.auth.removeSessionData('updatedStudent');
    this.auth.removeSessionData('readonly_startdate');
    this.auth.removeSessionData('rista-backOption');
    this.auth.setSessionData('rista-contentType', '');
    this.settingsform = this.formBuilder.group({
      name: [''],
      description: [''],
      value: '',
      id: ['', Validators.required]
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
        title: 'Name',
        type: 'html',
        valuePrepareFunction: (data) => {
          return `<a title="${data}"> <span>${data}</a>`;
        }
      },

      description: {
        title: 'Description',
        type: 'html',
        valuePrepareFunction: (data) => {
          return `<a title="${data}"> <span>${data}</a>`;
        }
      },
      value: {
        title: 'Value'
      },
    },
  };

  ngOnInit() {
    this.settingList();
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
        this.modalRef = this.modalService.open(this.content);
        this.settingsform.controls.name.patchValue(event.data.name);
        this.settingsform.controls.description.patchValue(event.data.description);
        this.settingsform.controls.value.patchValue(event.data.value);
        this.settingsform.controls.id.patchValue(event.data.id);
        this.modalRef.result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        break;
    }
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

  onSave() {
    this.modalRef.close();
  }
  close() {
    this.modalRef.close();
    this.schoolId = null;
    this.fileUploader = '';
    this.filetype = '';
  }
  settingList() {
    const data = {
      platform: 'web',
      type: 'list',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
    };
    this.common.settingsDetails(data).subscribe( (successData) => {
          this.listSuccess(successData);
        },
        (error) => {
          this.listFailure(error);
        });
  }
  listSuccess(successData) {
    if (successData.IsSuccess) {
      this.listData = successData.ResponseObject;
    }
  }
  listFailure(error) {
    console.log(error, 'error');
  }
  editsettings() {
    if (this.settingsform.controls.value.value != '') {
      const data = {
        platform: 'web',
        type: 'list',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        description: this.settingsform.controls.description.value,
        value: this.settingsform.controls.value.value,
        id: this.settingsform.controls.id.value,
      };
      this.common.editsettings(data).subscribe((successData) => {
            this.editSuccess(successData);
          },
          (error) => {
            this.editFailure(error);
          });
      } else {
      this.toastr.error('Kindly Fill Required Fields');

    }
  }
  editSuccess(successData) {
    if (successData.IsSuccess) {
      this.close();
      this.toastr.success(successData.ResponseObject);
      this.settingList();
    }
  }
  editFailure(error) {
    console.log(error, 'error');
  }
}

