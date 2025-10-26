import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  TemplateRef
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {UntypedFormArray, FormBuilder, UntypedFormGroup} from '@angular/forms';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import {AuthService} from '../../../shared/service/auth.service';
import {AdmincreatorService} from '../../../shared/service/admincreator.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {ClassService} from '../../../shared/service/class.service';
import {ToastrService} from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {NavService} from '../../../shared/service/nav.service';
import {CommonDataService} from '../../../shared/service/common-data.service';

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss']
})
export class AnnotationComponent implements OnInit {
  @ViewChild('canvas', {static: false}) canvas: ElementRef;
  @Input() toolHide: boolean;
  @Input() toolAlignCenter: boolean;
  @Input() userType: any;
  @Input() getAnnotate: any;
  @Input() getDragQues: any;
  @Input() pdfPath: any;
  @Output() annotate = new EventEmitter<any>();
  @Output() deleteAnnotation = new EventEmitter<any>();

  public model = {
    editorData: ''
  };

  rect: Rectangle = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
  lastMousePosition: Position = { x: 0, y: 0 };
  canvasPosition: Position = { x: 0, y: 0 };
  mousePosition: Position = { x: 0, y: 0 };
  mouseDownFlag: boolean = false;
  pagePosition: Position = { x: 0, y: 0 };
  show: boolean = false;
  public shapesType: any = 'select';
  public pointerType: any;
  public teacherCorrection: boolean;
  public elem: any;
  public scale: any;
  public globalPdfViewerPath: any;
  public globaTextLayerPath: any;
  public queNum: any;
  public sliceNo: any;
  public showInput: any;
  public textValue: any;
  public inputElement: any;
  public graphShow: any;
  public pageVariable: any = 1;
  public deleteAnnatation: boolean;
  public mathEditor: boolean;
  public headingSame: boolean = false;
  public headingEmpty: boolean = false;
  public functionCalled: boolean = false;
  public editGraphMode: boolean = false;

  cnv;
  pdfBody;
  ctx;
  element = null;
  dataPageNumber: number;

  areaInfo: AreaInfo[] = [];
  indexOfPage: number = 1;
  showPopup: boolean = false;
  listRectangleId: string = '';

  public multiform: UntypedFormGroup;
  public graphform: UntypedFormGroup;
  public repeatlink: UntypedFormArray;
  public icons: any;
  public subtype: any;
  public pdfTemplate: any;
  // public element = null;
  public count = 0;
  public selectderArray = [];
  public webhost: any;
  public closeResult: string;
  public options: any;
  public choices: any = [];
  public hide: boolean;
  public changeInput: boolean = false;
  public quesNoChanged: boolean = false;
  public sliced: boolean = false;
  public schoolId: any;
  public gradeData: any;
  public subjectData: any;
  public rectElem: any;
  public svgColor: any;
  public zoom = 1.0;
  // public repeatgraph: FormArray;
  public alphabets: any;
  public optradio: boolean;
  public editData: any;
  public getTag: any = [];
  public detailData: any = [];
  public secHeadingArray: any = [];
  public gradeSplit: any;
  public subjectSplit: any;
  public totalsub: any = [];
  public teachername: any;
  public imagepath: any;
  public imagepaththumb: any;
  public recordBase64Url: any;
  public type: any;
  public selectedDeleteIcon: boolean = false;
  public dragCount: any = [];
  public buffer: any;
  public strPath: any;
  public textPosition: any;
  public dragpaths: any;
  public showdropdown: boolean;
  public queDrag: boolean;
  public savaText: boolean;
  public dragPageNumber: any;
  public openmenu: boolean;
  public dragQuestionsList : any = [];
  public textFontSize: any;
  public originalSize = false;
  public dragButton: any;
  public markType: any;
  public filterListChoices: any;
  public selectedPageAnnatation: any;
  public deleteID: any;
  public disable: boolean;
  public currentPage: number = 1;
  public selectedQueNum : number;
  public itemSelect: any = [];
  public redoListArray: any = [];
  public graphBoardValue: any;
  public getpdf: any;
  public customPdfLoader: boolean = true;
  private modalRef: NgbModalRef;
  private cx: CanvasRenderingContext2D;
  @ViewChild('deleteSvgDraw') deleteSvgDraw: TemplateRef<any>;
  @ViewChild('class') deleteClass: TemplateRef<any>;

  constructor(private sanitized: DomSanitizer, public auth: AuthService, public creator: AdmincreatorService, private modalService: NgbModal,
              public activateRoute: ActivatedRoute, public confi: ConfigurationService, public classService: ClassService,
              public toastr: ToastrService, public common: CommonDataService, public validationService: ValidationService, public router: Router, public navServices: NavService) {
    // this.pdfTemplate = this.webhost + '/' + this.getpdf.original_image_url;
    // alert(this.userType)


    this.preventScroll();
    this.disable = true;
    this.showInput = true;
    this.savaText = false;
    this.queDrag = false;
    this.deleteAnnatation = false;
    this.toolAlignCenter = false;
    this.textFontSize = '16';
    this.queNum = [];
    this.webhost = this.confi.getimgUrl();

    this.teacherCorrection = this.type == 'student';
  }

  ngOnInit() {
    this.areaInfo = this.getAnnotate;
    this.dragQuestionsList = this.getDragQues;
    this.pdfTemplate = this.pdfPath;
    this.svgColor = this.userType == 'student' ? '#00CED1' : '#ff0000';
  }
  preventScroll() {
    document.body.style.overflow = 'hidden';
  }
  allowScroll() {
    document.body.style.overflow = 'scroll';
  }

  onEditorReady(event: any): void {
    const toolbarItems = Array.from(event.ui.componentFactory.names());
  }

  subCkedi(){

    let a = document.getElementById('ckEditorVal')
    let b = document.getElementById('ckEditorVal').innerHTML;
  }
  ////Annatation  Start///

  onDrop(event){
  }


  incrementZoom(amount: number) {
    this.zoom += amount;
  }
  tools(type, pointerType){
    this.elem.style.cursor = pointerType;
    if (this.shapesType === type){
      this.shapesType = '';

    }else{
      this.shapesType = type;
      // this.elem.style.cursor = pointerType;

    }
    // this.shapesType = type;
    this.elem.style.cursor = pointerType;
    // document.getElementById("customText").remove();
  }


  mouseEvent(event) {

    // this.elem.style.cursor = 'crosshair'
    if (event.type === 'click') {
      this.dragpaths = this.composedPath(event.target);
      let drageventPath = this.dragpaths.find(p => p.className == 'page');
      //this.dragPageNumber = parseInt(drageventPath.getAttribute('data-page-number')); // get id of page
    }

    if (this.queDrag) {

      if ($('#drag' + this.selectedQueNum).length == 0) {
        // Exists.
        this.dragpaths = this.composedPath(event.target);
        let drageventPath = this.dragpaths.find(p => p.className == 'page');

        if (drageventPath) {
          this.dragPageNumber = parseInt(drageventPath.getAttribute('data-page-number'));
          // get id of page
          let dragtoDrawRectangle = document.getElementById('pdf-page').getElementsByTagName('svg');
          let dragpageOffset = dragtoDrawRectangle[this.dragPageNumber - 1].getBoundingClientRect();
          this.pagePosition = {
            x: dragpageOffset.left,
            y: dragpageOffset.top
          };

          this.lastMousePosition = {
            x: event.clientX - this.pagePosition.x,
            y: event.clientY - this.pagePosition.y
          }
          if (event.type === 'mousemove') {

            // document.getElementById(this.selectedQueNum + 'dropId').style.position = 'fixed';
          }
          if (event.type == 'mouseup') {
            document.getElementById(this.selectedQueNum + 'dropId').style.position = 'absolute';
            this.queNum.push(event.target.innerText);
            document.getElementById(this.selectedQueNum + 'dropId').style.transform = 'none';
            this.dragButton = document.createElement('span');
            this.dragButton.id = 'drag' + this.selectedQueNum;
            this.dragButton.style.position = 'absolute';
            this.dragButton.style.left = this.lastMousePosition.x + 'px';
            this.dragButton.style.top = this.lastMousePosition.y + 'px';
            this.dragButton.style.fontSize = '14px';
            this.dragButton.style.width = '27px';
            this.dragButton.style.background = "#e6baea";
            this.dragButton.style.padding = "6px";
            this.dragButton.style.borderRadius = "4px";
            this.dragButton.style.textAlign = "center";
            this.dragButton.innerHTML = this.selectedQueNum;
            this.dragQuestionsList.push({
              id: this.selectedQueNum + 'dropId' ,
              text: this.selectedQueNum,
              pageNumber: this.pageVariable,
              dragButton: {
                id: 'drag' + this.selectedQueNum,
                x: this.lastMousePosition.x,
                y: this.lastMousePosition.y
              }
            });
            this.dragpaths.find(p => p.className == 'page').appendChild(this.dragButton);
            this.queDrag = false;
          }
        }
      } else if ($('#drag' + this.selectedQueNum).length > 0) {
        const dragList = [];
        this.dragQuestionsList.forEach((item) => {
          if (item.id !== this.selectedQueNum + 'dropId') {
            dragList.push(item);
          }
        });
        this.dragQuestionsList = dragList;
        let elem = document.getElementById('drag'+ this.selectedQueNum);
        elem.remove();
      }
    }


    if (!this.showPopup && this.shapesType != undefined && this.shapesType != '' && this.shapesType != 'select') {


      if (event.type === 'mousemove') {
        this.mousePosition = {
          x: event.clientX - this.pagePosition.x,
          y: event.clientY - this.pagePosition.y,
        };

        if (this.mouseDownFlag) {
          let width = (this.mousePosition.x / this.scale) - (this.lastMousePosition.x  / this.scale);
          let height = (this.mousePosition.y/ this.scale)  - (this.lastMousePosition.y  / this.scale);
          this.rect = {
            x1: (this.lastMousePosition.x  / this.scale),
            y1: (this.lastMousePosition.y  / this.scale),
            x2: (this.mousePosition.x /  this.scale),
            y2: (this.mousePosition.y/ this.scale) ,
            d: '',
            text: '',
            width: width,
            height: height
          };

          if (this.element != null) {
            this.element.style.width = width + 'px';
            this.element.style.height = height + 'px';
            if (this.rect.width > 0 && this.rect.height > 0  && this.shapesType != 'path') {
              document.getElementById('pdf-page').getElementsByTagName('svg')[this.dataPageNumber - 1].appendChild(this.element);
            }else if ( this.shapesType == 'path') {
              document.getElementById('pdf-page').getElementsByTagName('svg')[this.dataPageNumber - 1].appendChild(this.element);
            }
          }
          if(this.shapesType == 'path') {
            this.mousePosition = {
              x: (event.clientX - this.pagePosition.x) / this.scale ,
              y: (event.clientY - this.pagePosition.y) / this.scale,
            };
            this.appendToBuffer(this.mousePosition);
            this.updateSvgPath();
          }
        }

      }

      if (event.type === 'mousedown') {


        this.mouseDownFlag = true;
        let path = this.composedPath(event.target);
        let eventPath = path.find(p => p.className == 'page');

        if (typeof eventPath !== 'undefined') {
          this.dataPageNumber = parseInt(eventPath.getAttribute('data-page-number')); // get id of page
          let toDrawRectangle = document.getElementById('pdf-page').getElementsByTagName('svg');
          let pageOffset = toDrawRectangle[this.dataPageNumber - 1].getBoundingClientRect();
          this.pagePosition = {
            x: pageOffset.left,
            y: pageOffset.top
          };

          this.lastMousePosition = {
            x: event.clientX - this.pagePosition.x,
            y: event.clientY - this.pagePosition.y
          }


          // let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;
          // let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

          if(this.shapesType != 'text') {
            let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

            this.element = document.createElementNS("http://www.w3.org/2000/svg", this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType);
            this.element.setAttribute("stroke-width", "2");
            this.element.setAttribute("stroke", this.svgColor);
            this.element.setAttribute("fill", "none");
          }


          if(this.shapesType == 'rect') {
            let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

            this.element.id = 'rect-' + rectId;
            this.element.setAttribute("x", this.lastMousePosition.x / this.scale);
            this.element.setAttribute("y", this.lastMousePosition.y / this.scale);

          }

          if(this.shapesType == 'circle'){
            let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

            this.element.id = 'circle-' + rectId;
            this.element.setAttribute("cx", (this.lastMousePosition.x / this.scale));
            this.element.setAttribute("cy", (this.lastMousePosition.y / this.scale));
            this.element.setAttribute("r", (this.lastMousePosition.x / this.scale) - (this.lastMousePosition.y / this.scale));
          }

          if(this.shapesType == 'path'){
            let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

            this.element.id = 'path-' + rectId;
            this.strPath = "M" + (this.lastMousePosition.x / this.scale) + " " + (this.lastMousePosition.y / this.scale);
            this.element.setAttribute("d", this.strPath);
          }

          if(this.shapesType == 'rectMask'){
            let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

            this.element.id = 'rectMask-' + rectId;
            this.element.setAttribute("stroke-width", "0");
            this.element.setAttribute("fill", "#fff");
            this.element.setAttribute("x", (this.lastMousePosition.x / this.scale));
            this.element.setAttribute("y", (this.lastMousePosition.y / this.scale));

          }

          if(this.shapesType == 'highlight'){
            let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

            this.element.id = 'highlight-' + rectId;
            this.element.setAttribute("stroke-width", "0");
            // this.element.setAttribute("fill", "yellow");
            this.element.setAttribute("fill", this.svgColor);
            this.element.setAttribute("fill-opacity", "0.2");
            this.element.setAttribute("x", (this.lastMousePosition.x / this.scale));
            this.element.setAttribute("y", (this.lastMousePosition.y / this.scale));

          }

          if(this.shapesType == 'line'){
            let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

            this.element.id = 'line-' + rectId;
            this.element.setAttribute("x2", (this.lastMousePosition.x / this.scale));
            this.element.setAttribute("y2", (this.lastMousePosition.y / this.scale));

          }

          if(this.shapesType == 'text') {
            let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

            if (document.getElementById("customText") != null) {
              if ($('input[name="customText"]').val() == '') {
                document.getElementById("customText").remove();
                this.showInput = true;
              } else{
                this.showInput = false;
              }
            }

            if (this.showInput) {
              this.inputElement = document.createElement("INPUT");
              this.inputElement.id = 'customText';
              this.inputElement.className = 'form-control';
              this.inputElement.setAttribute("type", "text");
              this.inputElement.setAttribute("name", "customText");
              this.inputElement.setAttribute("Placeholder", "Text");
              // this.inputElement.setAttribute('x', (this.lastMousePosition.x / this.scale));
              // this.inputElement.setAttribute('y', (this.lastMousePosition.x / this.scale));
              this.lastMousePosition = {
                x: event.clientX - this.pagePosition.x,
                y: event.clientY - this.pagePosition.y
              }

              this.inputElement.style.left = (this.lastMousePosition.x).toString() + 'px';
              this.inputElement.style.top = (this.lastMousePosition.y).toString() + 'px';
              this.inputElement.style.width = '200px';
              // this.inputElement.style.hieght = '80px';
              this.inputElement.style.position = 'absolute';
              // this.inputElement.style.display = 'block';

              this.textPosition = {
                x : this.lastMousePosition.x / this.scale,
                y : this.lastMousePosition.y / this.scale,
              }

              let paths = this.composedPath(event.target);
              this.inputElement.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
              paths.find(p => p.className == 'page').appendChild(this.inputElement);


            }
          }


          if(!this.showInput){
            let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

            this.textValue = $('input[name="customText"]').val();
            this.element = document.createElementNS("http://www.w3.org/2000/svg", this.shapesType);
            this.element.id = 'text-' + rectId;
            this.element.setAttribute("fill", this.svgColor);
            this.element.setAttribute("x", this.textPosition.x);
            this.element.setAttribute("y", this.textPosition.y);
            this.element.setAttribute("stroke-width", "none");
            this.element.setAttribute("stroke", "none");
            // this.element.style.fontSize = this.textFontSize + 'px';
            this.element.style.fontSize = this.textFontSize + 'px';
            this.element.appendChild(document.createTextNode(this.textValue));
            this.rect.x1 = this.textPosition.x;
            this.rect.y1 = this.textPosition.y;
            this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
            path.find(p => p.className == 'page').children[1].appendChild(this.element);
            document.getElementById("customText").remove();

          }



        }
        if (this.element){
          this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';

        }

      }

      if (event.type === 'mouseup') {
        this.mouseDownFlag = false;
        this.buffer = [];
        this.rect.d = this.strPath;
        this.rect.text = this.textValue;


        if(this.shapesType == 'text'){
          if(this.showInput) {
            document.getElementById('customText').focus();
          } else{
            this.save();
            this.showInput = true;
          }
        }else{
          if(this.rect.x1 !== 0 && this.rect.x1 != this.rect.x2){
            this.save();
          }
          // if (this.shapesType == 'rect'){
          //     if(this.rect.x1 !== 0 ){
          //         this.save();
          //     }
          // }else if (this.shapesType == 'path'){
          //     if(this.rect.x1 !==  this.rect.x2){
          //         this.save();
          //     }
          // }

        }
      }
    }

  }

  backToQuestion(){
    this.selectedDeleteIcon = false;
    this.deleteAnnatation = false;
    this.deleteAnnotation.emit(this.deleteAnnatation);
    const emitter = this.areaInfo.filter((value) => {
      return value.isTeacherCorrection == true && value.isDelete == false;
    });
    this.annotate.emit(emitter);
  }

  deleteSvg(){
    // alert('delete')
    this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
      if (value.isTeacherCorrection) {
        // return value.pageNumber == this.currentPage;
        return value.pageNumber == this.pageVariable;
      }
    });
    this.itemSelect = this.selectedPageAnnatation;
    this.deleteAnnatation = true;
    this.deleteAnnotation.emit(this.deleteAnnatation);
  }
  deleteAction(){
    this.modalRef = this.modalService.open(this.deleteClass, { size: 'md', backdrop: 'static' });
  }


  deleteAllAnnotation(){

    for (let i = 0; i < this.areaInfo.length; i++) {
      if (this.areaInfo[i].isTeacherCorrection) {
      this.areaInfo[i].isDelete = true;
      // this.areaInfo.splice(i, 1);
      this.redoListArray.push(this.areaInfo[i]);
      document.getElementById(this.areaInfo[i].rectangleId).remove();
      }
    }

    this.areaInfo = [];
    this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
      if (value.isTeacherCorrection) {
        return value.pageNumber == this.pageVariable;
      }
    });

    this.itemSelect = this.selectedPageAnnatation;
    this.close();
  }
  close() {
    this.modalRef.close();
  }
  deleteCurrentPageAnnotation(){
    for (let i = 0; i < this.areaInfo.length; i++) {
      if (this.pageVariable == this.areaInfo[i].pageNumber && this.areaInfo[i].isTeacherCorrection) {
        this.areaInfo[i].isDelete = true;
        // this.areaInfo.splice(i, 1);
        this.redoListArray.push(this.areaInfo[i]);
        document.getElementById(this.areaInfo[i].rectangleId).remove();
      }
    }
    this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
      if (value.isTeacherCorrection) {
        return value.pageNumber == this.pageVariable;
      }
    });

    this.itemSelect = this.selectedPageAnnatation;

    this.close();
  }



  saveAnnatation(){
    ////write code for save

    this. backToQuestion();
  }

  getAveragePoint(offset) {
    const len = this.buffer.length;
    if (len % 2 === 1 || len >= 8) {
      let totalX = 0;
      let totalY = 0;
      let pt;
      let i;
      let count = 0;
      for (i = offset; i < len; i++) {
        count++;
        pt = this.buffer[i];
        totalX += pt.x;
        totalY += pt.y;
      }
      return {
        x: totalX / count,
        y: totalY / count
      };
    }
    return null;
  }

  updateSvgPath() {

    let pt = this.getAveragePoint(0);
    if (pt) {
      // Get the smoothed part of the path that will not change
      this.strPath += ' L' + pt.x + ' ' + pt.y;

      // Get the last part of the path (close to the current mouse position)
      // This part will change if the mouse moves again
      let tmpPath = '';
      for (let offset = 10; offset < this.buffer.length; offset += 5) {
        pt = this.getAveragePoint(offset);
        tmpPath += ' L' + pt.x + ' ' + pt.y;
      }

      // Set the complete current path coordinates
      this.element.setAttribute('d', this.strPath + tmpPath);
    }
  }

  // added new div with rects when pages rendered

  appendToBuffer(pt) {
    this.buffer.push(pt);
    while (this.buffer.length > 8) {
      this.buffer.shift();
    }
  }

  textRender(event){
    let path = this.composedPath(event.source.textLayerDiv);
    path.find(p => p.className == 'page').appendChild(event.source.textLayerDiv);
  }

  pagechanging(event) {
    // this.currentPage = event;
    if (this.deleteAnnatation){
      this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
        if (value.isTeacherCorrection) {
          return value.pageNumber == event;
        }
      });
      this.itemSelect = this.selectedPageAnnatation;
    }

  }

  removeAnnatation(event){

    for (let i = 0; i < this.areaInfo.length; i++) {
      if (event.rectangleId == this.areaInfo[i].rectangleId) {
        this.areaInfo[i].isDelete = true;
        // this.areaInfo.splice(i, 1);
        this.redoListArray.push(this.areaInfo[i]);
      }
    }
    let joinString = event.rectangleId;
    // setTimeout(() => {
    document.getElementById(joinString).remove();
    // }, 100);

    this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
      if (value.isTeacherCorrection) {
        return value.pageNumber == this.pageVariable;
      }
    });

    this.itemSelect = this.selectedPageAnnatation;

  }

  undoDeleteAnnatation(event){
    for (let i = 0; i < this.redoListArray.length; i++) {
      if (event.rectangleId == this.redoListArray[i].rectangleId) {
        // this.areaInfo.splice(i, 1);

        this.redoPageRendered(this.redoListArray[i]);
        this.redoListArray.splice(i , 1);

      }
    }

    for (let i = 0; i < this.areaInfo.length; i++) {
      if (event.rectangleId == this.areaInfo[i].rectangleId) {
        this.areaInfo[i].isDelete = false;
        // this.areaInfo.splice(i, 1);
        // this.redoListArray.slice(i , 1);
      }
    }

    this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
      if (value.isTeacherCorrection) {
        return value.pageNumber == this.pageVariable;
      }
    });

    this.itemSelect = this.selectedPageAnnatation;

  }


  addQuestionButtonInPdf(value){
    if (this.dragQuestionsList){
      this.dragQuestionsList.forEach( (item) => {
        this.dragButton = document.createElement('span');
        this.dragButton.id = item.dragButton.id;
        this.dragButton.style.transform = 'scale(' + this.zoom.toString() + ') rotate(0) translate(0, 0)';

        ///
        this.dragButton.style.left = (item.dragButton.x / this.zoom) + 'px';
        this.dragButton.style.top = (item.dragButton.y / this.zoom) + 'px';
        this.dragButton.style.fontSize = (14 / this.zoom).toString() + 'px';
        this.dragButton.style.width = (27 / this.zoom).toString() + 'px';
        this.dragButton.style.background = "#e6baea";
        this.dragButton.style.padding = (6 / this.zoom).toString() + 'px';
        this.dragButton.style.borderRadius = (4 / this.zoom).toString() + 'px';
        this.dragButton.style.textAlign = "center";
        this.dragButton.style.position = 'absolute';

        this.dragButton.innerHTML = item.text;
        let path = document.getElementsByClassName('page')[item.pageNumber - 1];
        path.appendChild(this.dragButton);
      });
    }
    // }
  }

  redoPageRendered(value) {
    let path = document.getElementsByClassName('page')[value.pageNumber - 1];
    let path1 = document.getElementsByClassName('page')[value.pageNumber - 1].getAttribute('data-page-number');

    $('.textLayer').addClass('disable-textLayer');

    // let rectId = document.getElementById('pdf-page').getElementsByTagName(value.shape == 'rectMask' ? 'rect' : value.shape == 'highlight' ? 'rect' : value.shape).length + 1;
    let rectId = value.rectangleId;
    let rect = document.createElementNS("http://www.w3.org/2000/svg", value.shape == 'rectMask' ? 'rect' : value.shape == 'highlight' ? 'rect' : value.shape);

    rect.setAttribute("stroke-width", "2");
    rect.setAttribute("stroke", "red");
    // rect.setAttribute("fill", "none");
    rect.setAttribute("fill", "none");
    rect.style.width = value.rect.width + 'px';
    rect.style.height = value.rect.height + 'px';

    if (value.shape == 'rect') {
      // rect.id = 'rect-' + rectId;
      rect.id = rectId;
      rect.setAttribute("x", value.rect.x1.toString());
      rect.setAttribute("y", value.rect.y1.toString());
    }
    if (value.shape == 'circle') {
      // rect.id = 'circle-' + rectId;
      rect.id = rectId;
      rect.setAttribute("cx", value.rect.x1.toString());
      rect.setAttribute("cy", value.rect.y1.toString());
      rect.setAttribute("r", '50');
    }

    if (value.shape == 'path') {
      // rect.id = 'path-' + rectId;
      rect.id = rectId;
      rect.setAttribute("d", value.rect.d);
    }
    if (value.shape == 'text') {
      // rect.id = 'text-' + rectId;
      rect.id = rectId;
      rect.setAttribute("fill", "red");
      rect.setAttribute("stroke-width", "none");
      rect.setAttribute("stroke", "none");
      rect.setAttribute("x", value.rect.x1.toString());
      rect.setAttribute("y", value.rect.y1.toString());
      rect.appendChild(document.createTextNode(value.rect.text.toString()));
      rect.style.fontSize = value.fontSize + 'px';
    }

    if (value.shape == 'rectMask') {
      // rect.id = 'rectMask-' + rectId;
      rect.id = rectId;

      rect.setAttribute("fill", "#fff");
      rect.setAttribute("stroke-width", "0");
      rect.setAttribute("x", value.rect.x1.toString());
      rect.setAttribute("y", value.rect.y1.toString());

    }

    if (value.shape == 'highlight') {
      // rect.id = 'highlight-' + rectId;
      rect.id =  rectId;
      rect.setAttribute("stroke-width", "0");
      // rect.setAttribute("fill", "yellow");
      rect.setAttribute("fill", value.color);
      rect.setAttribute("fill-opacity", "0.2");
      rect.setAttribute("x", value.rect.x1.toString());
      rect.setAttribute("y", value.rect.y1.toString());

    }
    rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';

    // path.children[1].appendChild(rect);
    // let pagePath = path.find(p => p.className == 'page');
    let lengthofChilds = path.children.length;
    for(let i=0; i< lengthofChilds;i ++){
      if(path.children[i].tagName == 'svg'){
        rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
        path.children[i].appendChild(rect);
      }
    }
  }


  hoverRemoveItemEnter(event){
    this.globalPdfViewerPath.find(p => p.className == 'page').appendChild(this.elem);
    $('.textLayer').addClass('disable-textLayer');

    this.rectElem = this.areaInfo.forEach((value) => {

      let eventsvgPath = document.getElementById(event.rectangleId);
      let valuesvgPath = document.getElementById(value.rectangleId);
      if (value.pageNumber == event.pageNumber ) {

        if(eventsvgPath == valuesvgPath){
          let rect = valuesvgPath;
          if (rect){
            if (value.shape == 'rect') {
              rect.style.animation = 'blinkStroke 0.8s infinite'

              rect.setAttribute("stroke-width", "2");
              rect.setAttribute("stroke", value.color);
              rect.setAttribute("fill", "none");
            }
            if (value.shape == 'circle') {
              rect.style.animation = 'blinkStroke 0.8s infinite'

              rect.setAttribute("stroke-width", "2");
              rect.setAttribute("stroke", value.color);
              rect.setAttribute("fill", "none");
            }

            if (value.shape == 'path') {
              rect.style.animation = 'blinkStroke 0.8s infinite'

              rect.setAttribute("stroke-width", "2");
              rect.setAttribute("stroke", value.color);
              rect.setAttribute("fill", "none");
            }
            if (value.shape == 'text') {
              rect.style.animation = 'blinkFill 0.8s infinite'

              rect.setAttribute("fill", value.color);
              rect.setAttribute("stroke-width", "none");
              rect.setAttribute("stroke", "none");
              // rect.setAttribute("x", value.rect.x1.toString());
              // rect.setAttribute("y", value.rect.y1.toString());
              // rect.appendChild(document.createTextNode(value.rect.text.toString()));
              // rect.style.fontSize = value.fontSize + 'px';
            }

            if (value.shape == 'rectMask') {
              rect.style.animation = 'blinkFill 0.8s infinite'

              // rect.setAttribute("fill", "#fff");
              rect.setAttribute("fill", value.color);
              rect.setAttribute("stroke-width", "0");


            }

            if (value.shape == 'highlight') {
              rect.style.animation = 'blinkFill 0.8s infinite'

              rect.setAttribute("stroke-width", "0");
              // rect.setAttribute("fill", "yellow");
              rect.setAttribute('fill', value.color);
              rect.setAttribute("fill-opacity", "0.2");

            }
          }

        }

      }
    });

  }

  hoverLeaveRemoveItemEnter(event){
    this.globalPdfViewerPath.find(p => p.className == 'page').appendChild(this.elem);

    $('.textLayer').addClass('disable-textLayer');

    this.rectElem = this.areaInfo.forEach((value, index, arr) => {
      let eventsvgPath = document.getElementById(event.rectangleId);
      let valuesvgPath = document.getElementById(value.rectangleId);

      if (value.pageNumber == event.pageNumber ) {

        if(eventsvgPath == valuesvgPath){
          let rect = valuesvgPath;
          if(rect){
            rect.style.animation = '';

            if (value.shape == 'rect') {
              rect.setAttribute("stroke-width", "2");
              // rect.setAttribute("stroke", "red");
              rect.setAttribute("stroke", value.color);
              rect.setAttribute("fill", "none");
            }
            if (value.shape == 'circle') {
              rect.setAttribute("stroke-width", "2");
              rect.setAttribute("stroke", value.color);
              rect.setAttribute("fill", "none");
            }

            if (value.shape == 'path') {
              rect.setAttribute("stroke-width", "2");
              rect.setAttribute("stroke", value.color);
              rect.setAttribute("fill", "none");
            }
            if (value.shape == 'text') {
              rect.setAttribute("fill", value.color);
              // rect.setAttribute("stroke-width", );
              rect.setAttribute("stroke-width", 'none');
              rect.setAttribute("stroke", "none");
              // rect.setAttribute("x", value.rect.x1.toString());
              // rect.setAttribute("y", value.rect.y1.toString());
              // rect.appendChild(document.createTextNode(value.rect.text.toString()));
              // rect.style.fontSize = value.fontSize + 'px';
            }

            if (value.shape == 'rectMask') {
              rect.setAttribute("fill", "#fff");
              // rect.setAttribute("fill", "#fff");
              rect.setAttribute("stroke-width", "0");


            }

            if (value.shape == 'highlight') {
              rect.setAttribute("stroke-width", "0");
              // rect.setAttribute("fill", "yellow");
              rect.setAttribute("fill", value.color);
              rect.setAttribute("fill-opacity", "0.2");

            }
          }

        }

      }
    });

  }

  pageRendered(event) {
    this.scale = event.source.scale;

    this.elem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.elem.style.position = 'absolute';
    this.elem.style.left = 0 + 'px';
    this.elem.style.top = 0 + 'px';
    this.elem.style.right = 0 + 'px';
    this.elem.style.bottom = 0 + 'px';
    this.elem.style.cursor = 'auto';
    this.elem.style.width = event.source.width + 'px';
    this.elem.style.height = event.source.height + 'px';
    let path = this.composedPath(event.source.div);
    this.globalPdfViewerPath = path;
    path.find(p => p.className == 'page').appendChild(this.elem);
    this.rectElem = this.areaInfo.forEach((value, index, arr) => {
      if(value.pageNumber == event.pageNumber && !value.isDelete) {
        let rectId = value.rectangleId;
        let rect = document.createElementNS("http://www.w3.org/2000/svg", value.shape == 'rectMask' ? 'rect' : value.shape == 'highlight' ? 'rect' : value.shape);

        rect.setAttribute("stroke-width", "2");
        rect.setAttribute("stroke", value.color);
        // rect.setAttribute("fill", "none");
        rect.setAttribute("fill", "none");
        rect.style.width = value.rect.width + 'px';
        rect.style.height = value.rect.height + 'px';

        if (value.shape == 'rect') {
          // rect.id = 'rect-' + rectId;
          rect.id = rectId;
          rect.setAttribute("x", value.rect.x1.toString());
          rect.setAttribute("y", value.rect.y1.toString());
        }
        if (value.shape == 'circle') {
          // rect.id = 'circle-' + rectId;
          rect.id = rectId;
          rect.setAttribute("cx", value.rect.x1.toString());
          rect.setAttribute("cy", value.rect.y1.toString());
          rect.setAttribute("r", '50');
        }

        if (value.shape == 'path') {
          // rect.id = 'path-' + rectId;
          rect.id = rectId;
          rect.setAttribute("d", value.rect.d);
        }
        if (value.shape == 'text') {
          // rect.id = 'text-' + rectId;
          rect.id = rectId;
          rect.setAttribute("fill", value.color);
          rect.setAttribute("stroke-width", "none");
          rect.setAttribute("stroke", "none");
          rect.setAttribute("x", value.rect.x1.toString());
          rect.setAttribute("y", value.rect.y1.toString());
          //
          // rect.style.left = value.rect.x1 + 'px';
          // rect.style.top = value.rect.y1 + 'px';
          rect.appendChild(document.createTextNode(value.rect.text.toString()));
          rect.style.fontSize = value.fontSize + 'px';
        }

        if (value.shape == 'rectMask') {
          // rect.id = 'rectMask-' + rectId;
          rect.id = rectId;

          rect.setAttribute("fill", "#fff");
          rect.setAttribute("stroke-width", "0");
          rect.setAttribute("x", value.rect.x1.toString());
          rect.setAttribute("y", value.rect.y1.toString());

        }

        if (value.shape == 'highlight') {
          rect.id = rectId;
          // rect.id = 'highlight-' + rectId;
          rect.setAttribute("stroke-width", "0");
          // rect.setAttribute("fill", "yellow");
          rect.setAttribute("fill", value.color);
          rect.setAttribute("fill-opacity", "0.2");
          rect.setAttribute("x", value.rect.x1.toString());
          rect.setAttribute("y", value.rect.y1.toString());

        }


        //get to-draw-rectangle div and add rectangle
        rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';

        let pagePath = path.find(p => p.className == 'page');
        let lengthofChilds = path.find(p => p.className == 'page').children.length;
        for(let i=0; i< lengthofChilds;i ++){
          if(pagePath.children[i].tagName == 'svg'){
            rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
            pagePath.children[i].appendChild(rect);
          }
        }
        // path.find(p => p.className == 'page').appendChild(rect);
      }

    });
    this.addQuestionButtonInPdf(event);
  }

  composedPath(el) {

    // el.style.position = 'relative';
    // el.style.zIndex = '1';
    let path = [];
    while (el) {
      path.push(el);
      if (el.tagName === 'HTML') {
        path.push(document);
        path.push(window);
        return path;
      }
      el = el.parentElement;
    }
  }


  getStyle() {
    if (this.showPopup) {
      return "block";
    } else {
      return "none";
    }
  }

  save() {
    let path = document.getElementById(this.element.id);

    if (path){
      this.areaInfo.push({
        rectangleId: this.element.id,
        pageNumber: this.dataPageNumber,
        rect: this.rect,
        isDelete: false,
        isTeacherCorrection: true,
        shape: this.shapesType,
        color: this.svgColor,
        fontSize: this.textFontSize
      });
      const emitter = this.areaInfo.filter((value) => {
        return value.isTeacherCorrection == true && value.isDelete == false;
      });
      this.annotate.emit(emitter);
      this.showPopup = false;
      this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };

      this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
        if (value.isTeacherCorrection) {
          return value.pageNumber == this.pageVariable;
        }
      });
      this.itemSelect = this.selectedPageAnnatation;
    }else{
    }


  }

  cancel() {
    let rectId = this.element.getAttribute('id');
    $('#' + rectId).remove();
    this.showPopup = false;
    this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
  }

  delete(list: AreaInfo) {
    document.getElementById(list.rectangleId).remove();
    this.areaInfo.find(f => f.rectangleId === list.rectangleId).isDelete = true;
    this.areaInfo = this.areaInfo.filter(f => f.isDelete === false);
  }
  pdfLoadedComplete(){
    this.common.showLoader(false);
  }

  progressing(){
    this.common.showLoader(true);
  }


  moveTo(list: AreaInfo) {
    if (this.listRectangleId != '') {
      if (document.getElementById(this.listRectangleId)) {
        document.getElementById(this.listRectangleId).style.background = 'transparent';
        document.getElementById(this.listRectangleId).style.opacity = '1';
      }
    }
    if (this.listRectangleId !== list.rectangleId) {
      document.getElementById(list.rectangleId).scrollIntoView({ block: 'start', behavior: 'smooth' });
      document.getElementById(list.rectangleId).style.background = 'red';
      document.getElementById(list.rectangleId).style.opacity = '0.4';
      this.listRectangleId = list.rectangleId;
    }
  }

  callBackFn(pdf: any) {
    // alert('s');
    this.customPdfLoader = false;
    this.allowScroll();
    // do anything with "pdf"
  }

  onerror(error){
    this.customPdfLoader = false;
    console.log(error ,'errr');
    console.log(error.name ,'errr');
    this.toastr.error(error.name);
  }


  dragQueCount(event){
    this.selectedQueNum = event.target.innerText;
    if(event.type === 'mousedown') {
      // alert('down');
      this.queDrag = true;
      // let elem = document. getElementById('dropId');
      // elem.remove();
    }
    // if(event.type === 'mouseup'){
    //     // alert('up')
    //     this.queNum.push(event.target.innerText);
    //     document.getElementById('dropId').style.transform = 'none';
    //
    //     this.dragButton = document.createElement('span');
    //     this.dragButton.id = 'drag';
    //     this.dragButton.style.position = 'absolute';
    //     this.dragButton.style.right = this.lastMousePosition.x + 'px';
    //     this.dragButton.style.top = this.lastMousePosition.y + 'px';
    //     this.dragButton.style.fontSize = '14px';
    //     this.dragButton.style.width = '27px';
    //     this.dragButton.style.background = "#e6baea";
    //     this.dragButton.style.padding = "6px";
    //     this.dragButton.style.borderRadius = "4px";
    //     this.dragButton.style.textAlign = "center";
    //     this.dragButton.innerHTML = event.target.innerText;
    //
    //
    //     this.dragpaths.find(p => p.className == 'page').appendChild(this.dragButton);
    //     this.queDrag = false;
    // }

  }
}
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
