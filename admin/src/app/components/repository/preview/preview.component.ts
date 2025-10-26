import {Component, ElementRef, OnInit, TemplateRef, ViewChild, OnDestroy} from '@angular/core';
import * as $ from 'jquery';
import {UntypedFormArray, UntypedFormGroup} from '@angular/forms';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {parse} from 'flatted';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {AuthService} from '../../../shared/service/auth.service';
import {ClassService} from '../../../shared/service/class.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {TeacherService} from '../../../shared/service/teacher.service';
import {CommonService} from '../../../shared/service/common.service';
import {AdmincreatorService} from '../../../shared/service/admincreator.service';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  rect: Rectangle = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
  lastMousePosition: Position = { x: 0, y: 0 };
  canvasPosition: Position = { x: 0, y: 0 };
  mousePosition: Position = { x: 0, y: 0 };
  mouseDownFlag = false;
  public selectedDeleteIcon = false;
  public deleteAnnatation: boolean;
  pagePosition: Position = { x: 0, y: 0 };
  show = false;
  public globalPdfViewerPath: any;
  public shapesType: any = 'select';
  public pointerType: any;
  public elem: any;
  public scale: any;
  public queNum: any;
  public showInput: any;
  public textValue: any;
  public inputElement: any;
  public pageVariable: any;
  public ExplanationPopupValue: any;

  cnv;
  pdfBody;
  ctx;
  element = null;
  dataPageNumber: number;

  areaInfo: AreaInfo[] = [];
  indexOfPage = 1;
  showPopup = false;
  listRectangleId = '';
  public selectedPageAnnatation: any;
  public currentPage = 1;
  public multiform: UntypedFormGroup;
  public repeatlink: UntypedFormArray;
  public icons: any;
  public pdfTemplate: any;
  public allowDropDown: boolean;
  public count = 0;
  public selectderArray = [];
  public webhost: any;
  private modalRef: NgbModalRef;
  public closeResult: string;
  public options: any;
  public dragQuestionsList: any = [];
  public savedAnnotation: any = [];
  public selectedQueNum: number;
  public hide: boolean;
  public schoolId: any;
  public gradeData: any;
  public subjectData: any;
  public rectElem: any;
  public svgColor: any;
  public zoom = 1.0;
  private cx: CanvasRenderingContext2D;
  public alphabets: any;
  public questionEmpty = false;
  public editData: any;
  public graphShow: any;
  public detailData: any;
  public subjectSplit: any;
  public totalsub: any = [];
  public itemSelect: any = [];
  public teachername: any;
  public imagepath: any;
  public imagepaththumb: any;
  public getpdf: any;
  public getlinks: any;
  public recordBase64Url: any;
  public type: any;
  public previewType: any;
  public buffer: any;
  public strPath: any;
  public textPosition: any;
  public dragpaths: any;
  public queDrag: boolean;
  public savaText: boolean;
  public dragPageNumber: any;
  public textFontSize: any = '';
  public originalSize = false;
  public dragButton: any;
  public showPdf: any;
  public previewPdf: boolean;
  public functionCalled: boolean = false;
  public content: any;
  public questions: any;
  public fullData: any;
  public answerIndex: any;
  public quesId: any;
  public backToResources: any;
  public redoListArray: any = [];

  @ViewChild('multiChoiceDetail') multiChoiceDetail: TemplateRef<any>;
  @ViewChild('viewGraph') viewGraph: TemplateRef<any>;
  @ViewChild('matchTableDetail') matchTableDetail: TemplateRef<any>;
  @ViewChild('dropDownDetail') dropDownDetail: TemplateRef<any>;
  @ViewChild('pdfPage') pdfPage: ElementRef<HTMLElement>;
    @ViewChild('class') deleteClass: TemplateRef<any>;
    @ViewChild('viewExplain') viewExplain: TemplateRef<any>;

  constructor(public confi: ConfigurationService, public common: CommonDataService, public commonservice: CommonService, public auth: AuthService, public classService: ClassService,
              private modalService: NgbModal, public sanitized: DomSanitizer, public router: Router, public newSubject: SchoolselectionService,
              public teacher: TeacherService, public creator: AdmincreatorService) {
    const data = JSON.parse(this.auth.getSessionData('rista-editor'));
    this.listDetails(data);
    this.showPdf = this.auth.getSessionData('preview_page');
    this.previewType = this.auth.getSessionData('rista-preview');
    this.backToResources = this.auth.getSessionData('rista-backOption');
    this.previewPdf = false;
    this.svgColor = '#ff0000';
    this.showInput = true;
    this.savaText = false;
    this.queDrag = false;
    this.textFontSize = '8';
    this.deleteAnnatation = false;
  }

  ngOnInit(): void {
    this.allowDropDown = true;
    this.newSubject.allowChangeSchool(this.allowDropDown);
    this.gradeList();
  }
  OnDestroy(): void {
      this.allowDropDown = false;
      this.newSubject.allowChangeSchool(this.allowDropDown);
  }
    openExplanationPopup(value) {
      this.ExplanationPopupValue = value;
      this.modalRef = this.modalService.open(this.viewExplain);
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
                this.detailsSuccess(successData, event);
            },
            (error) => {
                this.detailsFailure(error);
            });
    }
    detailsSuccess(successData, event) {
        if (successData.IsSuccess) {
            this.detailData = successData.ResponseObject;
            this.detailData['class_id'] = event.class_id;
            this.detailData['teacher_id'] = event.teacher_id;
            if (this.showPdf == 'create_resources' || this.showPdf == 'create_assignments' || this.showPdf == 'create_assessments'){
                this.getpdf = this.detailData.file_path[0];
                this.webhost = this.confi.getimgUrl();
                if (this.detailData?.base64_data){
                    this.pdfTemplate = this.detailData.base64_data == ''  ? this.webhost + '/' + this.getpdf.original_image_url : this.commonservice.convertBase64PdfPath(this.detailData.base64_data);
                }else{
                    this.pdfTemplate = this.webhost + '/' + this.getpdf.original_image_url;
                }
                this.previewPdf = true;
                const annotation = this.detailData.annotation;
                this.dragQuestionsList = this.detailData.questionAnnotation;
                annotation.forEach((value) => {
                    value.isTeacherCorrection = false;
                });
                this.areaInfo = annotation;
                if (this.auth.getSessionData('rista-roleid') != '2' && this.previewType == 'student-preview') {
                    this.saveResourceAnnatation([], '2');
                } else {
                    this.functionCalled = true;
                }
                const allQuestions = this.detailData.answers;
                if (allQuestions.length > 0) {
                    for (let i = 0; i < allQuestions.length; i++) {
                        this.totalsub[i] = {heading: allQuestions[i].heading, section: []};
                        for (let x = 0; x < allQuestions[i].section.length; x++) {
                            for (let j = 0; j < allQuestions[i].section[x].sub_questions.length; j++) {
                                this.totalsub[i].section.push(allQuestions[i].section[x].sub_questions[j]);
                            }
                        }
                    }
                } else {
                    this.questionEmpty = true;
                }
            }else if (this.showPdf == 'text_resources' || this.showPdf == 'text_assignments' || this.showPdf == 'text_assessments'){
                if ( this.detailData.questions != []) {
                    this.questions = this.detailData.questions;
                    setTimeout(() => {
                        for (let i = 0; i < this.questions.length; i++) {
                            if (this.questions[i].question_type_id == 7) {
                                for (let j = 0; j < this.questions[i].heading_option.length; j++) {
                                    const index = i;
                                    const row = this.questions[i].heading_option[j].correctActive;
                                    const column = this.questions[i].heading_option[j].correctAnswer;
                                    const id = index.toString() + row.toString() + column.toString();
                                    document.getElementById('checkMulti' + id).setAttribute('checked', 'true');
                                }
                            } else if (this.questions[i].question_type_id == 24) {
                                for (let j = 0; j < this.questions[i].subQuestions.length; j++) {
                                    if (this.questions[i].subQuestions[j].question_type_id == 7) {
                                        for (let k = 0 ; k < this.questions[i].subQuestions[j].heading_option.length; k++) {
                                            const index = i;
                                            const id = j;
                                            const row = this.questions[i].subQuestions[j].heading_option[k].correctActive;
                                            const column = this.questions[i].subQuestions[j].heading_option[k].correctAnswer;
                                            const final = index.toString() + id.toString() + row.toString() + column.toString();
                                            document.getElementById('checkMultiPassage' + final).setAttribute('checked', 'true');
                                        }
                                    }
                                }
                            }
                        }
                    }, 100);
                }
                this.content = this.detailData.file_text;
                this.previewPdf = false;
            }
            this.clickEvent();
        }
    }
    detailsFailure(error) {
        console.log(error, 'error');
    }
    clickEvent(){
        setTimeout( () => {
            document.getElementById('myDiv').click();
        } , 1000);
    }
  getDeleteAction(event) {
      this.deleteAnnatation = event;
  }
  getAreaInfo(event) {
      this.saveResourceAnnatation(event, '1');
      this.savedAnnotation = event;
  }
  saveResourceAnnatation(data, id) {
      const val = {
          platform: 'web',
          role_id: this.auth.getSessionData('rista-roleid'),
          user_id: this.auth.getSessionData('rista-userid'),
          school_id: this.detailData.school_id,
          content_id: this.detailData.content_id,
          class_id: this.detailData.class_id,
          teacher_id: this.detailData.teacher_id,
          annotation: data,
          type: id
      };
      this.teacher.saveTeacherResourceAnnotation(val).subscribe( (successData) => {
              this.resorceAnnotateSuccess(successData, id);
          },
          (error) => {
              this.resorceAnnotateFailure(error);
          });
  }
  resorceAnnotateSuccess(successData, id) {
      this.functionCalled = true;
      if (successData.IsSuccess) {
          if (id == '2') {
              for(let i = 0; i < successData.ResponseObject.length; i++) {
                  this.areaInfo.push(successData.ResponseObject[i]);
              }
          }
      }
  }
  resorceAnnotateFailure(error) {
      console.log(error);
  }
  graphDetail(val) {
    this.graphShow = parse(val);
    this.modalRef = this.modalService.open(this.viewGraph,  {size: 'lg', backdrop: 'static'});
  }
  viewdetail(id, data) {
    if (id == '1' || id == '2') {
      this.answerIndex = [];
      this.fullData = data;
      this.quesId = id;
      for (let i = 0; i < this.fullData.options.length; i++) {
        this.answerIndex.push({options: this.fullData.options[i].options, active: ''});
      }
      for (let j = 0; j < this.fullData.answer.length; j++) {
        if (this.fullData.answer[j].correctAnswer != '') {
          this.answerIndex[j].active = j;
        }
      }
      this.modalRef = this.modalService.open(this.multiChoiceDetail, data);
    } else if (id == '5' || id == '7') {
      this.fullData = data;
      this.quesId = id;
      this.modalRef = this.modalService.open(this.matchTableDetail, data);
    } else if  (id == '9') {
      this.fullData = data;
      this.quesId = id;
      this.modalRef = this.modalService.open(this.dropDownDetail, data);
    }
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  close() {
    this.modalRef.close();
  }

  //// Annatation  Start///

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  gradeList() {
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      school_id: this.auth.getSessionData('rista-school_id'),
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
  previewback(){
      this.auth.removeSessionData('rista-editor');
      if (this.previewType == 'repository'){
      this.router.navigate(['repository/content-home']);
    }else if (this.previewType == 'home'){
      this.router.navigate(['home/list-home']);
    }
  }
    deleteAction(){
        this.modalRef = this.modalService.open(this.deleteClass, { size: 'md', backdrop: 'static' });
    }
}
// Annatation
interface Position {
  x: number;
  y: number;
}

interface Rectangle {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  d: string;
  text: any;
  width: number;
  height: number;
}

interface AreaInfo {
  rectangleId: string;
  pageNumber: number;
  rect: Rectangle;
  isDelete?: boolean;
  isTeacherCorrection?: boolean;
  shape: string;
  color: any;
  fontSize: any;
}
