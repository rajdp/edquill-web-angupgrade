import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../../shared/service/auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ActivatedRoute} from '@angular/router';
import {SubjectServices} from '../../../shared/service/subject.services';
import {BookService} from '../../../shared/service/book.service';
import {SchoolService} from '../../../shared/service/School.service';
import {GradeService} from '../../../shared/service/grade.service';
import {CommonService} from '../../../shared/service/common.service';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-Books.component.html',
  styleUrls: ['./add-Books.component.scss']
})
export class AddBooksComponent implements OnInit, OnDestroy {
  public booksform: UntypedFormGroup;
  public type: any;
  public editData: any;
  public recordBase64Url: any;
  public selectedSchool: any;
  public schoolData: any;
  public gradeData: any;
  public subjectData: any;
  public pdfpath: any;
  public pdfName: any;
  public pdfTemplate: any;
  public answerpdfpath: any;
  public answerpdfName: any;
  public answerpdfTemplate: any;
  public webhost: any;
  public response: any;
  private modalRef: NgbModalRef;
  public allowSelect: boolean;
  public showSchoolSearch: boolean;
  public showAnswerPdf: boolean;
  public schoolid: any;
  public getNewlinks: any = [];
  public videoArray: any = [];
  @ViewChild('viewPdf') viewPdf: TemplateRef<any>;
  @ViewChild('attachments') attachment: any;
  @ViewChild('attachments1') attachment1: any;
  public listData: any;
  constructor(public route: ActivatedRoute, private formBuilder: UntypedFormBuilder, public subjectservice: SubjectServices, public newSubject: SchoolselectionService,
              public commondata: CommonDataService, private toastr: ToastrService, public gradeService: GradeService,
              public auth: AuthService, public book: BookService, public brandservices: SchoolService, public common: CommonService,
              public router: Router, public validationService: ValidationService, public confi: ConfigurationService, private modalService: NgbModal) {
    this.webhost = this.confi.getimgUrl();
    this.route.params.forEach((params) => {
      this.type = params.type;
    });
    this.booksform = this.formBuilder.group({
      publicationCode: '',
      name: ['', Validators.required],
      description: '',
      status: ['', Validators.required],
      bookType: ['', Validators.required],
      access: '1',
      schoolId: ['', Validators.required],
      gradeName: '',
      subjectName: '',
      downloadContent: '',
      resourcesLink: '',
    });

    this.newSubject.selectSchool.subscribe((params) => {
      if (params != 0){
        if (this.router.url.includes('create-Books/add')){
          this.init(params);
        }else if (this.router.url.includes('create-Books/edit')){
          this.init(params);
        }
      }else {
        this.init(params);
      }
    });
    this.newSubject.searchSchool.subscribe((params) => {
      if (params != true){
        this.showSchoolSearch = false;
      }else if (params == true){
        this.showSchoolSearch = true;
      }
    });

    if ( this.type == 'edit'){
      this.allowSelect = true;
      this.newSubject.allowChangeSchool(this.allowSelect);
      this.editData = JSON.parse(this.auth.getSessionData('editBook'));
      this.booksform.controls.publicationCode.patchValue(this.editData.publication_code);
      this.showAnswerPdf = this.editData.content_type != '1';
      this.booksform.controls.name.patchValue(this.editData.name);
      this.booksform.controls.description.patchValue(this.editData.description);
      if (this.editData.status == 'Active'){
        this.booksform.controls.status.patchValue(1);
      }else if (this.editData.status == 'Inactive'){
      this.booksform.controls.status.patchValue(2);
      }
      if (this.editData.status == 'Suspended'){
        this.booksform.controls.status.patchValue(3);
      }else if (this.editData.status == 'Deleted'){
        this.booksform.controls.status.patchValue(4);
      }
      this.institutionSelection(this.editData.school_id);
      this.booksform.controls.schoolId.patchValue(this.editData.school_id);
      this.booksform.controls.subjectName.patchValue(this.editData.subject);
      this.booksform.controls.gradeName.patchValue(this.editData.grade);
      this.booksform.controls.bookType.patchValue(this.editData.content_type);
      if (this.editData.access == 'Private(within institution)'){
        this.booksform.controls.access.patchValue(1);
      }
      else if (this.editData.access == 'Private (only you)'){
        this.booksform.controls.access.patchValue(2);
      }
      else if (this.editData.access == 'Public'){
        this.booksform.controls.access.patchValue(3);
      }
      if (this.editData.links != '') {
        const links = this.editData.links;
        for (let i = 0 ; i < links.length; i++) {
          this.getNewlinks.push({display: links[i], value: links[i]});
        }
      }
      this.booksform.controls.resourcesLink.patchValue(this.getNewlinks);
      if (this.editData.download == '1'){
        this.booksform.controls.downloadContent.patchValue(true);
      }else if (this.editData.download == '0'){
        this.booksform.controls.downloadContent.patchValue(false);
      }
      this.pdfpath = this.editData.file_path;
      if (this.editData.file_path.length != 0){
        this.pdfName = this.editData.file_path[0].image;
        this.pdfTemplate = this.webhost + '/' + this.editData.file_path[0].original_image_url;
      }else {
        this.pdfName = '';
        this.pdfTemplate = '';
      }
      this.bookBase();
    } else{
      this.showAnswerPdf = false;
      if (this.schoolid == 0){
          this.booksform.controls.schoolId.patchValue(null);
      }else {
          this.booksform.controls.schoolId.patchValue(this.schoolid);
      }
      this.booksform.controls.publicationCode.patchValue('');
      this.booksform.controls.bookType.patchValue('1');
      this.booksform.controls.access.patchValue('1');
      this.booksform.controls.name.patchValue('');
      this.booksform.controls.description.patchValue('');
      this.booksform.controls.status.patchValue('1');
      this.booksform.controls.gradeName.patchValue(null);
      this.booksform.controls.subjectName.patchValue(null);
      this.booksform.controls.resourcesLink.patchValue('');
    }
  }


  ngOnInit() {
    // this.schoolList();
  }

  ngOnDestroy(): void {
    this.allowSelect = false;
    this.newSubject.allowChangeSchool(this.allowSelect);
  }

  init(data){
      this.schoolid = data;
    if (data != 0){
      this.schoolList();
      this.institutionSelection(data);
      this.booksform.controls.schoolId.patchValue(data);
      this.booksform.controls.gradeName.patchValue(null);
      this.booksform.controls.subjectName.patchValue(null);
    }else {
      this.booksform.controls.schoolId.patchValue(null);
      this.booksform.controls.gradeName.patchValue(null);
      this.booksform.controls.subjectName.patchValue(null);
      this.schoolList();
    }
  }

  typeSelection(event){
    console.log(event.target.value, 'target calue');
    this.showAnswerPdf = event.target.value != '1';
  }

  bookBase() {
    this.commondata.showLoader(true);
    const data = {
      platform: 'web',
      type: 'list',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: this.editData.school_id,
      content_id: this.editData.content_id
    };
    this.book.getBookList(data).subscribe( (successData) => {
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
      this.pdfpath = this.listData?.file_path;
      this.pdfName = this.listData?.file_path[0].image;
      this.answerpdfpath = this.listData?.answerkey_path;
      this.answerpdfName = this.listData?.answerkey_path[0]?.image;
      if (this.listData.base64_data){
        this.pdfTemplate = this.listData.base64_data == ''  ? this.webhost + '/' + this.listData.file_path[0]?.original_image_url : this.common.convertBase64PdfPath(this.listData.base64_data);
      }else{
        this.pdfTemplate = this.webhost + '/' + this.listData.file_path[0]?.original_image_url;
      }
      this.answerpdfTemplate = this.webhost + '/' + this.listData.answerkey_path[0]?.original_image_url;
    }
  }
  bookListFailure(error) {
    this.commondata.showLoader(false);
  }
  institutionSelection(id){
    this.booksform.controls.gradeName.patchValue(null);
    this.booksform.controls.subjectName.patchValue(null);
    this.gradeList(id);
    this.subjectList(id);
  }
  addbooks(valve) {
    if ( this.booksform.controls.resourcesLink.value != '') {
      this.videoArray = [];
      const video = this.booksform.controls.resourcesLink.value;
      for (let i = 0; i < video.length; i++) {
        this.videoArray.push(video[i].value);
      }
    }
    if (this.booksform.valid) {
      if (this.pdfpath != undefined){
      this.commondata.showLoader(true);
        if (!this.showAnswerPdf){
          this.answerpdfpath = [];
        }
      const data = {
        platform: 'web',
        role_id: this.auth.getSessionData('rista-roleid'),
        user_id: this.auth.getSessionData('rista-userid'),
        publication_code: this.booksform.controls.publicationCode.value,
        name: this.booksform.controls.name.value,
        description: this.booksform.controls.description.value,
        status: this.booksform.controls.status.value,
        school_id: this.booksform.controls.schoolId.value,
        grade: this.booksform.controls.gradeName.value == null ? [] : this.booksform.controls.gradeName.value,
        subject: this.booksform.controls.subjectName.value == null ? [] : this.booksform.controls.subjectName.value,
        content_type: this.booksform.controls.bookType.value,
        access: this.booksform.controls.access.value,
        file_path: this.pdfpath,
        links: this.booksform.controls.resourcesLink.value != '' ? this.videoArray : [],
        download: this.booksform.controls.downloadContent.value == true ? '1' : '0',
        answerkey_path: this.answerpdfpath,
        corporate_id: '0'
      };
      if (valve == 'add'){
      this.book.addBook(data).subscribe((successData) => {
            this.addBookSuccess(successData);
          },
          (error) => {
            this.addBookFailure(error);
          });
    }else if (valve == 'edit'){
        data['content_id'] = this.editData.content_id;
        this.book.editBook(data).subscribe((successData) => {
              this.addBookSuccess(successData);
            },
            (error) => {
              this.addBookFailure(error);
            });
      }
    }else {
      this.toastr.error('Please Upload Pdf to add books', 'Books');
    }
      }else {
      this.validationService.validateAllFormFields(this.booksform);
      this.toastr.error('Please Fill All The Mandatory Fields');
    }
  }
  addBookSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.toastr.success(successData.ResponseObject, 'Books');
      this.router.navigate(['/Books/list-Books']);
    } else{
      this.commondata.showLoader(false);
      this.toastr.error(successData.ErrorObject, 'Books');
    }
  }
  addBookFailure(error) {
  }
  public numberPattern(event: any) {
    this.validationService.numberValidate1(event);
  }
  schoolList() {
    this.commondata.showLoader(false);
    let schooltype: any;
    if (this.type == 'add'){
      schooltype = 'active';
    }else{
      schooltype = 'inactive';
    }
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      type: schooltype
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
      this.schoolData = successData.ResponseObject;
      this.selectedSchool = [];
    }
    for (let i = 0; i < this.schoolData.length; i++) {
      this.selectedSchool.push({id: this.schoolData[i].school_id, name: this.schoolData[i].school_name});
    }

  }
  schoolListFailure(error) {
    this.commondata.showLoader(false);
  }

  gradeList(id) {
    this.commondata.showLoader(true);
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: id,
      type: 'active'
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
      this.gradeData = successData.ResponseObject;
      this.gradeData.forEach((value, index, array) => {
        this.gradeData[index].status = this.gradeData[index].status == 1 ? 'Active' : this.gradeData[index].status == 2 ?
            'Inactive' : this.gradeData[index].status == 3 ? 'Suspended' : this.gradeData[index].status == 4 ? 'Deleted' : '' ;
      });
    }
  }
  gradeListFailure(error) {
    this.commondata.showLoader(false);
  }
  subjectList(id) {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: id,
      type: 'active'
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
      this.subjectData = successData.ResponseObject;

    }
  }
  subjectListFailure(error) {
  }

  encodePdfFileAsURL(event: any, type) {
    let images = [];
    let imageLength = event.target.files.length;
    for (let i = 0; i < event.target.files.length; i++) {
      const getUrlEdu = '';
      const pdfDetails = event.target.files[0];
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
            this.onUploadKYCFinishedpdf(images, type);
          }
        } else {
          this.toastr.error('PDF are the required file format');
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }

  }
  onUploadKYCFinishedpdf(getUrlEdu, type){
    let pdftype: any;
    if (type == '1'){
      pdftype = 'content';
    }else {
      pdftype = 'answerkey';
    }
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      image_path: getUrlEdu,
      uploadtype: pdftype
    };
    this.common.fileUpload(data).subscribe(
        (successData) => {
          this.pdfuploadSuccess(successData, type);
        },
        (error) => {
          this.pdfuploadFailure(error);
        }
    );
  }
  pdfuploadSuccess(successData, type) {
    if (successData.IsSuccess) {
      this.toastr.success(successData.ResponseObject.message);
      this.response = successData.ResponseObject;
      if (type == '1'){
        this.pdfpath = [];
        this.pdfpath.push(this.response.imagepath[0]);
        this.pdfName = this.response.imagepath[0].image;
        if (this.response.imagepath[0].base64_data){
          this.pdfTemplate = this.response.imagepath[0].base64_data == ''  ? this.webhost + '/' + this.response.imagepath[0]?.original_image_url : this.common.convertBase64PdfPath(this.response.imagepath[0].base64_data);
        }else{
          this.pdfTemplate = this.webhost + '/' + this.response.imagepath[0]?.original_image_url;
        }
      }else {
        this.answerpdfpath = [];
        this.answerpdfpath.push(this.response.imagepath[0]);
        this.answerpdfName = this.response.imagepath[0].image;
        if (this.response.imagepath[0].base64_data){
          this.answerpdfTemplate = this.response.imagepath[0].base64_data == ''  ? this.webhost + '/' + this.response.imagepath[0]?.original_image_url : this.common.convertBase64PdfPath(this.response.imagepath[0].base64_data);
        }else{
          this.answerpdfTemplate = this.webhost + '/' + this.response.imagepath[0]?.original_image_url;
        }
      }
    } else {
      this.toastr.error('Invalid File Format');
    }
  }
  pdfuploadFailure(error) {
    this.toastr.error('Invalid File Format');
  }
  deletePdf(id, type){
    if (type == 1){
      this.attachment.nativeElement.value = '';
      this.pdfpath.splice(id, 1);
    }else {
      this.answerpdfpath = [];
      this.attachment1.nativeElement.value = '';
    }
  }
  viewDetail(data) {
    this.pdfName = data.image;
    this.pdfTemplate = this.webhost + '/' + data.original_image_url;
    this.modalRef = this.modalService.open(this.viewPdf, {size: 'xl'});
  }
  close() {
    this.modalRef.close();
  }
}
