import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {AdmincreatorService} from '../../../shared/service/admincreator.service';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';
import {ClassService} from '../../../shared/service/class.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import {AuthService} from '../../../shared/service/auth.service';
import {SchoolService} from '../../../shared/service/School.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ValidationService} from '../../../shared/service/validation.service';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {DatePipe} from '@angular/common';
import {NavService} from '../../../shared/service/nav.service';

@Component({
  selector: 'app-add-resources',
  templateUrl: './add-resources.component.html',
  styleUrls: ['./add-resources.component.scss']
})
export class AddResourcesComponent implements OnInit, OnDestroy {
  public resourceform: UntypedFormGroup;
  public type: any;
  public draftType: any;
  public editData: any;
  private modalRef: NgbModalRef;
  public closeResult: string;
  public recordBase64Url: any;
  public imagepath: any;
  public imagepaththumb: any;
  public pdfpath: any;
  public pdfpaththumb: any;
  public getpdfpath: any;
  public getpdfpaththumb: any;
  public getlinks: any;
  public pdflinks: any = [];
  public repeatlink: UntypedFormArray;
  public webhost: any;
  public filetype: any;
  public url: any;
  public getUrl: any;
  public getUrl1: any;
  public spinner: boolean;
  public gradeData: any;
  public tagData: any;
  public gradeSplit: any;
  public subjectSplit: any;
  public subjectData: any;
  public gradeId: any;
  public username: any;
  public draftData: any;
  public assignData: any;
  public pdfName: any;
  public pdfTemplate: any;
  public response: any;
  public resourceArray: any;
  public getTag: any = [];
  public tagArray: any = [];
  public allowSelect: boolean;
  public open: boolean;

  @ViewChild('linkArray') addLink: TemplateRef<any>;
  @ViewChild('myInput') myInputVariable: ElementRef<any>;
  @ViewChild('pdf') Content: ElementRef<any>;
  @ViewChild('viewPdf') viewPdf: TemplateRef<any>;

  constructor(public route: ActivatedRoute, private formBuilder: UntypedFormBuilder, public classService: ClassService, public creator: AdmincreatorService,
              public commondata: CommonDataService, private toastr: ToastrService, public common: CommonService,
              public auth: AuthService, public brandservices: SchoolService, public sanitizer: DomSanitizer, public navServices: NavService,
              public router: Router, public validationService: ValidationService, public config: ConfigurationService,
              public modalService: NgbModal, public datePipe: DatePipe, public newSubject: SchoolselectionService) {
    this.draftType = 'update';
    this.webhost = this.config.getimgUrl();
    this.username = this.auth.getSessionData('rista-firstname') + ' ' + this.auth.getSessionData('rista-lastname');
    this.pdfpath = [];
    this.pdfpaththumb = [];
    this.getpdfpath = JSON.parse(this.auth.getSessionData('pdf'));
    this.getlinks = JSON.parse(this.auth.getSessionData('links'));
    this.getpdfpaththumb = this.auth.getSessionData('pdf_path_thumb');
    if (this.getpdfpath != null) {
        for (let i = 0; i < this.getpdfpath.length; i++) {
          this.pdfpath.push(this.getpdfpath[i]);
          this.pdflinks = [];
        }
    }
    if (this.getlinks != null) {
        for (let i = 0; i < this.getlinks.length; i++) {
            this.pdflinks.push(this.getlinks[i]);
            this.pdfpath = [];
        }
    }
    this.route.params.forEach((params) => {
      this.type = params.type;
    });
    this.resourceform = this.formBuilder.group({
      created: [''],
      resourceName: ['', Validators.required],
      grade: ['', Validators.required],
      subject: ['', Validators.required],
      description: '',
      resourcesLink: '',
      tag: '',
      access: ['1', Validators.required],
    });
    if ( this.type == 'edit'){
      const detail = JSON.parse(this.auth.getSessionData('rista-editor'));
      this.listDetails(detail);
    } else{
      this.resourceform.controls.created.patchValue(this.username);
      this.resourceform.controls.resourceName.patchValue('');
      this.resourceform.controls.grade.patchValue(null);
      this.resourceform.controls.subject.patchValue(null);
      this.resourceform.controls.description.patchValue('');
      this.resourceform.controls.resourcesLink.patchValue('');
      this.resourceform.controls.access.patchValue('');
      this.resourceform.controls.tag.patchValue('');
    }
  }

  ngOnInit(): void {
    this.allowSelect = true;
    this.newSubject.allowChangeSchool(this.allowSelect);
    this.gradeList();
    this.subjectList();
    this.open = true;
    this.newSubject.changeSideViewList(this.open);
    this.navServices.collapseSidebar = true;
  }
  ngOnDestroy(): void {
    this.open = false;
    this.newSubject.changeSideViewList(this.open);
    this.navServices.collapseSidebar = false;
  }

  listDetails(event) {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      content_id: event.content_id,
      content_format: event.content_format,
      content_type: event.content_type,
      school_id: event.school_id
    };
    this.creator.repositoryDetail(data).subscribe( (successData) => {
          this.detailsSuccess(successData);
        },
        (error) => {
          this.detailsFailure(error);
        });
  }
  detailsSuccess(successData) {
    if (successData.IsSuccess) {
      this.editData = successData.ResponseObject;
      if (this.editData.details == 'Draft') {
        this.draftType = 'publish';
      }
      this.gradeId = this.editData.grade_id;
      this.resourceform.controls.created.patchValue(this.editData.created_by);
      this.resourceform.controls.resourceName.patchValue(this.editData.name);
      if (this.editData.tags != '') {
        const tag = this.editData.tags.split(',');
        for (let i = 0 ; i < tag.length; i++) {
          this.getTag.push({display: tag[i], value: tag[i]});
        }
      }
      if (this.editData.grade != '') {
        this.gradeSplit = [];
        const grade = this.editData.grade.split(',');
        for (let i = 0; i < grade.length; i++) {
          this.gradeSplit.push(grade[i]);
        }
      }
      if (this.editData.subject != '') {
        this.subjectSplit = [];
        const subject = this.editData.subject.split(',');
        for (let i = 0; i < subject.length; i++) {
          this.subjectSplit.push(subject[i]);
        }
      }
      this.resourceform.controls.grade.patchValue(this.gradeSplit);
      this.resourceform.controls.subject.patchValue(this.subjectSplit);
      this.resourceform.controls.description.patchValue(this.editData.description);
      this.resourceform.controls.resourcesLink.patchValue(this.editData.links);
      this.resourceform.controls.access.patchValue(this.editData.access);
      this.resourceform.controls.tag.patchValue(this.getTag);
      this.pdfpath = this.editData.file_path != '' ? this.editData.file_path : [];
      this.pdflinks = this.editData.links;
      if (this.editData.profile_url != '') {
        this.imagepath = this.editData.profile_url;
        this.imagepaththumb = this.editData.profile_thumb_url;
      }
    }
  }
  detailsFailure(error) {
    console.log(error);
  }
  subjectList() {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: this.auth.getSessionData('rista-school_id'),
      type: 'active'
    };
    this.classService.subjectList(data).subscribe( (successData) => {
          this.subjectListSuccess(successData);
        },
        (error) => {
          this.subjectListFailure(error);
        });
  }
  subjectListSuccess(successData) {
    if (successData.IsSuccess) {
      this.subjectData = successData.ResponseObject;

    }
  }
  subjectListFailure(error) {
    console.log(error, 'error');
  }

  gradeList() {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: this.auth.getSessionData('rista-school_id'),
      type: 'active'
    };
    this.classService.gradeList(data).subscribe( (successData) => {
          this.gradeListSuccess(successData);
        },
        (error) => {
          this.gradeListFailure(error);
        });
  }
  gradeListSuccess(successData) {
    if (successData.IsSuccess) {
      this.gradeData = successData.ResponseObject;
    }
  }
  gradeListFailure(error) {
    console.log(error, 'error');
  }
  tagList() {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: this.auth.getSessionData('rista-school_id'),
    };
    this.common.tagList(data).subscribe( (successData) => {
          this.tagListSuccess(successData);
        },
        (error) => {
          this.tagListFailure(error);
        });
  }
  tagListSuccess(successData) {
    if (successData.IsSuccess) {
      this.tagData = successData.ResponseObject;
    }
  }
  tagListFailure(error) {
    console.log(error, 'error');
  }
  assign(value) {
    if (this.resourceform.valid) {
      this.tagArray = [];
      const tags = this.resourceform.controls.tag.value;
      for (let i = 0; i < tags.length; i++) {
        this.tagArray.push(tags[i].value);
      }
      this.resourceArray = [];
      const video = this.resourceform.controls.resourcesLink.value;
      if (video == ''){
        this.resourceArray = [];
      }else if (video != ''){
        for (let i = 0; i < video.length; i++) {
          this.resourceArray.push(video[i].value);
        }
      }
      const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: this.auth.getSessionData('rista-school_id'),
      name: this.resourceform.controls.resourceName.value,
      description: this.resourceform.controls.description.value,
      grade: this.resourceform.controls.grade.value,
      subject: this.resourceform.controls.subject.value,
      access: this.resourceform.controls.access.value,
      file_path: this.pdfpath,
      tags: this.tagArray,
      profile_url: this.imagepath,
      profile_thumb_url: this.imagepaththumb,
      content_format: this.pdfpath != null ? '1' : '2',
      content_type: '1',
      status: '1',
      answers: [],
      file_text: '',
      // links: this.pdflinks,
      links: this.resourceArray,
      annotation: [],
      assign: '0',
      classdetails: [],
        editor_type: ''
    };
    if (value != 'edit') {
      this.creator.addAssignResourse(data).subscribe((successData) => {
            this.assignSuccess(successData);
          },
          (error) => {
            this.assignFailure(error);
          });
    } else  if (value == 'edit') {
      data['content_id'] = this.editData.content_id;
      this.creator.editAssignResourse(data).subscribe((successData) => {
            this.assignSuccess(successData);
          },
          (error) => {
            this.assignFailure(error);
          });
    }
  }
  else {
  this.validationService.validateAllFormFields(this.resourceform);
  this.toastr.error('Please Fill All The Mandatory Fields');
}
  }
  assignSuccess(successData) {
    if (successData.IsSuccess) {
      this.assignData = successData.ResponseObject;
      this.router.navigate(['/repository/content-home']);
      this.toastr.success(successData.ResponseObject);
      this.auth.removeSessionData('links');
      this.auth.removeSessionData('pdf');
      this.auth.removeSessionData('editresources');
    } else if (!successData.IsSuccess) {
      this.toastr.error(successData.ResponseObject);
    }
  }
  assignFailure(error) {
    console.log(error, 'error');
    this.toastr.error(error.ResponseObject);
  }
  draft(value) {
    if ( this.resourceform.valid) {
      this.tagArray = [];
      const tags = this.resourceform.controls.tag.value;
      for (let i = 0; i < tags.length; i++) {
        this.tagArray.push(tags[i].value);
      }
      this.resourceArray = [];
      const video = this.resourceform.controls.resourcesLink.value;
      if (video == ''){
        this.resourceArray = [];
      }else if (video != ''){
        for (let i = 0; i < video.length; i++) {
          this.resourceArray.push(video[i].value);
        }
      }
      const data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        school_id: this.auth.getSessionData('rista-school_id'),
        name: this.resourceform.controls.resourceName.value,
        description: this.resourceform.controls.description.value,
        grade: this.resourceform.controls.grade.value,
        subject: this.resourceform.controls.subject.value,
        access: this.resourceform.controls.access.value,
        file_path: this.pdfpath,
        tags: this.tagArray,
        profile_url: this.imagepath,
        profile_thumb_url: this.imagepaththumb,
        content_format: this.pdfpath != null ? '1' : '2',
        content_type: '1',
        status: '5',
        answers: [],
        file_text: '',
        // links: this.pdflinks,
        links: this.resourceArray,
        annotation: [],
        assign: '0',
        classdetails: [],
        editor_type: ''
      };
      if (value != 'edit') {
        this.creator.addDraftResourse(data).subscribe((successData) => {
              this.draftSuccess(successData);
            },
            (error) => {
              this.draftFailure(error);
            });
      } else if (value == 'edit') {
        data['content_id'] = this.editData.content_id;
        this.creator.editDraftResourse(data).subscribe((successData) => {
              this.draftSuccess(successData);
            },
            (error) => {
              this.draftFailure(error);
            });
      }
    }
    else {
      this.validationService.validateAllFormFields(this.resourceform);
      this.toastr.error('Please Fill All The Mandatory Fields');
    }
  }
  draftSuccess(successData) {
    if (successData.IsSuccess) {
      this.draftData = successData.ResponseObject;
      this.router.navigate(['/repository/content-home']);
      this.toastr.success(successData.ResponseObject);
      this.auth.removeSessionData('links');
      this.auth.removeSessionData('pdf');
      this.auth.removeSessionData('editresources');
    } else if (!successData.IsSuccess) {
      this.toastr.error(successData.ResponseObject);
    }
  }
  draftFailure(error) {
    console.log(error, 'error');
    this.toastr.error(error.ResponseObject);
  }

  encodeImageFileAsURL(event: any) {
    event.target.files = null;
    for (let i = 0; i < event.target.files.length; i++) {
      const getUrlEdu = '';
      const imgDetails = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const url = event.target.result;
        const getUrl = url.split(',');
        const pic = imgDetails.type.split('/');

        if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] ==  'jpg' ){
          this.onUploadKYCFinished(getUrl, imgDetails);
        } else {
          this.toastr.error('JPEG ,PNG & JPG are the required type');
        }
      };
      reader.readAsDataURL(event.target.files[i]);
    }
  }
  onUploadKYCFinished(getUrlEdu, imageList){
    this.recordBase64Url =  getUrlEdu[1];
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      image_path: [{
        image: this.recordBase64Url,
        size: imageList.size,
        type: imageList.type,
        name: imageList.name
      }],
      uploadtype: 'profile'
    };
    this.common.fileUpload(data).subscribe(
        (successData) => {
          this.uploadSuccess(successData);
        },
        (error) => {
          this.uploadFailure(error);
        }
    );
  }
  uploadSuccess(successData) {
    if (successData.IsSuccess) {
      this.toastr.success(successData.ResponseObject.message);
      this.imagepath = successData.ResponseObject.imagepath[0].original_image_url;
      this.imagepaththumb = successData.ResponseObject.imagepath[0].resized_url;
    } else {
      this.toastr.error('Invalid File Format');
    }
  }
  encodePdfFileAsURL(event: any) {
    let images = [];
    let imageLength = event.target.files.length;
    for (let i = 0; i < event.target.files.length; i++) {
      const getUrlEdu = '';
      const pdfDetails = event.target.files[i];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        let uploadTypeList = event.target.result.split(',');
        images.push({image: uploadTypeList[1],
          size: pdfDetails.size,
          type: pdfDetails.type,
          name: pdfDetails.name});
        const pic = pdfDetails.type.split('/');
        if (pic[1] == 'pdf' ){
          if (imageLength == images.length) {
            this.onUploadKYCFinishedpdf(images);
          }
        } else {
          this.toastr.error('PDF are the required file format');
        }
      };
      reader.readAsDataURL(event.target.files[i]);
    }

  }
  onUploadKYCFinishedpdf(getUrlEdu){
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      image_path: getUrlEdu,
      uploadtype: 'content'
    };

    this.common.fileUpload(data).subscribe(
        (successData) => {
          this.pdfuploadSuccess(successData);
        },
        (error) => {
          this.pdfuploadFailure(error);
        }
    );
  }
  pdfuploadSuccess(successData) {
    if (successData.IsSuccess) {
      this.toastr.success(successData.ResponseObject.message);
      this.response = successData.ResponseObject;
      for (let i = 0; i < this.response.imagepath.length; i++) {
        this.pdfpath.push(this.response.imagepath[i]);
      }
      this.modalRef.close('Content');
    } else {
      this.toastr.error('Invalid File Format');
    }
  }
  pdfuploadFailure(error) {
    console.log(error, 'error');
  }
  uploadFailure(error) {
    console.log(error, 'error');
  }
  onsave() {
    this.modalRef.close();
  }
  deleteImg(){
    this.imagepath = '';
    this.clearUploadfilename();
  }
  deletePdf(id){
    this.pdfpath.splice(id, 1);
    this.pdflinks = [];
  }
  clearUploadfilename(){
    this.myInputVariable.nativeElement.value = '';
  }
  showModal() {
    this.modalRef = this.modalService.open(this.Content, { size: 'md', backdrop: 'static' });
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
  viewDetail(value) {
    this.pdfName = value.image;
    if (value.base64_data){
      this.pdfTemplate = value.base64_data == ''  ? this.webhost + '/' + value.original_image_url : this.common.convertBase64PdfPath(value.base64_data);
    }else{
      this.pdfTemplate = this.webhost + '/' + value.original_image_url;
    }
    this.modalRef = this.modalService.open(this.viewPdf, {size: 'xl'});
  }
  close() {
    this.modalRef.close();
  }
}
