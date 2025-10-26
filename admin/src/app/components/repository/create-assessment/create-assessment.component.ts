import {
    Component,
    ElementRef,
    OnInit,
    TemplateRef,
    ViewChild,
    AfterViewInit,
    HostListener,
    Input,
    Output,
    OnDestroy, ChangeDetectorRef
} from '@angular/core';
import {parse, stringify} from 'flatted';
import {AdmincreatorService} from '../../../shared/service/admincreator.service';
// import {Component, ElementRef, OnInit, OnDestroy, TemplateRef, ViewChild, HostListener,
        // ChangeDetectorRef} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ClassService} from '../../../shared/service/class.service';
import {UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import * as $ from 'jquery';
import {ValidationService} from '../../../shared/service/validation.service';
import {NavService} from '../../../shared/service/nav.service';
import {GraphComponentComponent} from '../../auth/graph-component/graph-component.component';
import {ViewEncapsulation} from '@angular/core';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';

@Component({
    selector: 'app-create-assessment',
    templateUrl: './create-assessment.component.html',
    styleUrls: ['./create-assessment.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CreateAssessmentComponent implements OnInit, OnDestroy {
    public model = {
        editorData: ''
    };
    editorConfig: any = {
        toolbar: {
            items: [
                'MathType', 'ChemType', 'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify', 'alignment', 'undo', 'redo', 'blockQuote', 'bold', 'imageTextAlternative', 'link', 'ckfinder', 'code', 'codeBlock', 'selectAll', 'fontBackgroundColor', 'fontColor', 'fontFamily', 'fontSize', 'heading', 'highlight:yellowMarker', 'highlight:greenMarker', 'highlight:pinkMarker', 'highlight:blueMarker', 'highlight:redPen', 'highlight:greenPen', 'removeHighlight', 'highlight', 'horizontalLine', 'htmlEmbed', 'uploadImage', 'imageUpload', 'insertImage', 'imageInsert', 'resizeImage:original', 'resizeImage:25', 'resizeImage:50', 'resizeImage:75', 'resizeImage', 'imageResize', 'imageStyle:full', 'imageStyle:side', 'indent', 'outdent', 'italic', 'linkImage', 'numberedList', 'bulletedList',  'mediaEmbed', 'pageBreak', 'removeFormat', 'specialCharacters', 'restrictedEditingException', 'strikethrough', 'subscript', 'superscript', 'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells', 'tableCellProperties', 'tableProperties', 'textPartLanguage', 'todoList', 'underline'
            ]
        },
        image: {
            toolbar: [
                'imageStyle:full',
                'imageStyle:side',
                '|',
                'imageTextAlternative'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells'
            ]
        },
    // This value must be kept in sync with the language defined in webpack.config.js.
        language: 'en'
    };
    editorConfigAlt = {
        image: {
            toolbar: [
                'imageStyle:full',
                'imageStyle:side',
                '|',
                'imageTextAlternative'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells'
            ]
        },
        // This value must be kept in sync with the language defined in webpack.config.js.
        language: 'en'
    };



    rect: Rectangle = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
    lastMousePosition: Position = { x: 0, y: 0 };
    canvasPosition: Position = { x: 0, y: 0 };
    mousePosition: Position = { x: 0, y: 0 };
    mouseDownFlag = false;
    pagePosition: Position = { x: 0, y: 0 };
    show = false;
    public shapesType: any = 'select';
    public pointerType: any;
    public elem: any;
    public scale: any;
    public globalPdfViewerPath: any;
    public globaTextLayerPath: any;
    public graphEditorAnswerValue: any;
    public queNum: any;
    public sliceNo: any;
    public showInput: any;
    public ransom: any;
    public textValue: any;
    public inputElement: any;
    public validated: any;
    public graphShow: any;
    public pageVariable: any;
    public deleteAnnatation: boolean;
    public mathEditor: boolean;
    public headingSame = false;
    public headingEmpty = false;
    public functionCalled = false;
    public graphDialog = false;
    public multiDialog = false;
    public trueDialog = false;
    public choiceDialog = false;
    public entryDialog = false;
    public essayDialog = false;
    public numericDialog = false;
    public blankDialog = false;
    public quesNoInvalid = false;
    public ExplanationPopupValue: any;
    public getNewlinks: any = [];

    cnv;
    pdfBody;
    ctx;
    element = null;
    dataPageNumber: number;

    areaInfo: AreaInfo[] = [];
    indexOfPage = 1;
    showPopup = false;
    listRectangleId = '';

  public multiform: UntypedFormGroup;
  public graphform: UntypedFormGroup;
  public repeatlink: UntypedFormArray;
  public allowSelect: boolean;
  public icons: any;
  public subtype: any;
  public pdfTemplate: any;
  public showpdf: any;
  // public element = null;
  public count = 0;
  public selectderArray = [];
  public webhost: any;
  public closeResult: string;
  public options: any;
  public choices: any = [];
  public hide: boolean;
  public changeInput = false;
  public quesNoChanged = false;
  public sliced = false;
  public schoolId: any;
  public gradeData: any;
  public subjectData: any;
  public rectElem: any;
  public svgColor: any;
  public zoom = 1.0;
  private modalRef: NgbModalRef;
  // private dialogRef: D;
    private cx: CanvasRenderingContext2D;
    public repeatplus: UntypedFormArray;
    public repeatchoose: UntypedFormArray;
    public repeatentry: UntypedFormArray;
    public repeatessay: UntypedFormArray;
    public repeatnumeric: UntypedFormArray;
    public repeattotalplus: UntypedFormArray;
    public repeatblanks: UntypedFormArray;
    // public repeatgraph: FormArray;
    public alphabets: any;
    public optradio: boolean;
    public editData: any;
    public getTag: any = [];
    public detailData: any = [];
    public secHeadingArray: any = [];
    public gradeSplit: any;
    public subjectSplit: any;
    public uploadType: any;
    public countList: any;
    public slicedQuesNo: any = 0;
    public sectionNo: any;
    public reloadQues: any;
    public sectionCount: any = 0;
    public spanQuesVal: any;
    public tagArray: any;
    public subQuestion: any = [];
    public subQuestionMulti: any = [];
    public subQuestionChoice: any = [];
    public subQuestionChoose: any = [];
    public subQuestionEntry: any = [];
    public subQuestionEssay: any = [];
    public subQuestionNumeric: any = [];
    public subQuestionGraph: any = [];
    public subQuestionBlanks: any = [];
    public itemsList: any = [];
    public totalsub: any = [];
    public fillInArray: any = [];
    public teachername: any;
    public delSection: any;
    public imagepath: any;
    public imagepaththumb: any;
    public getpdf: any;
    public getlinks: any;
    public recordBase64Url: any;
    public type: any;
    public selectedDeleteIcon = false;
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
    public dragQuestionsList: any = [];
    public textFontSize: any;
    public originalSize = false;
    public dragButton: any;
    public assessmentType: any;
    public draftAdd = 'update';
    public submitType: any;
    public markType: any;
    public editQuesNo: any;
    public editIndexValue: any;
    public filterListChoices: any;
    public InitialArrayLength: any;
    public selectedPageAnnatation: any;
    public deleteID: any;
    public disable: boolean;
    public currentPage = 1;
    public selectedQueNum: number;
    public itemSelect: any = [];
    public redoListArray: any = [];
    public numericQuestion: any = [];
    public numericAnswer: any = [];
    public numericExplain: any = [];
    public graphQuestion: any = [];
    public graphBoardValue: any;
    public resourceArray: any;
    public blankValid = true;
    public deleteFillBlanks = false;
    public customPdfLoader = true;
    public roleid: any;
    public pdfName: any;
    public allowChanged: boolean;
    public pdfChanged: boolean;
    public pdfpaththumb: any = [];
    public response: any;
    public answerpdfpath: any = [];

    @ViewChild('pdfPage') pdfPage: ElementRef<HTMLElement>;
    @ViewChild('canvas', {static: false}) canvas: ElementRef;
    @ViewChild('pencilCanvas', {static: false}) pencilCanvas: ElementRef;
    @ViewChild('multiChoice') multiChoice: TemplateRef<any>;
    @ViewChild('fillIn') fillIn: TemplateRef<any>;
    @ViewChild('dropdown') dropdown: TemplateRef<any>;
    @ViewChild('trueFalse') trueFalse: TemplateRef<any>;
    @ViewChild('essay') essay: TemplateRef<any>;
    @ViewChild('delete') deleted: TemplateRef<any>;
    @ViewChild('numeric') numericData: TemplateRef<any>;
    @ViewChild('graph') graph: TemplateRef<any>;
    @ViewChild('viewGraph') viewGraph: TemplateRef<any>;
    @ViewChild('deleteAlert') deleteAlert: TemplateRef<any>;
    @ViewChild('deleteSectionPopup') deleteSectionPopup: TemplateRef<any>;
    @ViewChild('deleteSvgDraw') deleteSvgDraw: TemplateRef<any>;
    @ViewChild('class') deleteClass: TemplateRef<any>;
    @ViewChild('viewExplain') viewExplain: TemplateRef<any>;
    @ViewChild(GraphComponentComponent) childGraph: GraphComponentComponent;
    @ViewChild('uploadPdf') uploadPdf: TemplateRef<any>;
    @ViewChild('attachments1') attachment1: any;
    @ViewChild('viewPdf') viewPdf: TemplateRef<any>;

    ///
    @HostListener('window:resize', ['$event'])
    onResize(event){
        const svg = document.getElementsByTagName('rect');
        console.log('Width: ' + event.target.innerWidth);
        console.log(svg , 'sbg');

    }

    constructor(public auth: AuthService, public creator: AdmincreatorService,
                public activateRoute: ActivatedRoute, private formBuilder: UntypedFormBuilder, public newSubject: SchoolselectionService,
                public sanitized: DomSanitizer, public confi: ConfigurationService,
                private modalService: NgbModal, public classService: ClassService,
                public toastr: ToastrService, public common: CommonService,
                private cdr: ChangeDetectorRef,
                public validationService: ValidationService, public router: Router, public navServices: NavService) {
        this.getIcons();
        this.mathEditor = false;
        this.roleid = this.auth.getSessionData('rista-roleid');
        this.activateRoute.params.forEach((params) => {
            this.assessmentType = params.type;
        });
        this.classList(1);
        this.teachername = this.auth.getSessionData('rista-firstname') + ' ' + this.auth.getSessionData('rista-lastname');
        if (this.assessmentType == 'add') {
            this.showdropdown = false;
            this.dragCount = [];
            this.getpdf = JSON.parse(this.auth.getSessionData('pdf'))[0];
            console.log(this.getpdf, 'this.getpdfthis.getpdf');
            this.areaInfo = [];
        } else if (this.assessmentType == 'edit') {
            const getAnnotation = JSON.parse(this.auth.getSessionData('rista-editor'));
            this.listDetails(getAnnotation);
        }
        this.uploadType = this.auth.getSessionData('rista-upload-type');
        this.getlinks = JSON.parse(this.auth.getSessionData('links'));
        this.hide = true;
        this.svgColor = '#ff0000';
        this.disable = true;
        this.showInput = true;
        this.savaText = false;
        this.queDrag = false;
        this.deleteAnnatation = false;
        this.textFontSize = '8';
        this.queNum = [];
        this.schoolId = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.webhost = this.confi.getimgUrl();
        this.strPath = '';
        this.multiform = this.formBuilder.group({
                classname: ['', Validators.required],
                tname: this.teachername,
                head: '',
                index: '',
                option: ['1', Validators.required],
                description: '',
                resourcesLink: '',
                tag: '',
                downloadContent: '',
                grade: ['', Validators.required],
                subject: ['', Validators.required],
                repeatlink: this.formBuilder.array([this.createlink()]),
                repeatplus: this.formBuilder.array([this.truelink()]),
                repeatblanks: this.formBuilder.array([this.createblanks()]),
                totalrepeatplus: this.formBuilder.array([this.addlink()]),
                repeatchoose: this.formBuilder.array([this.createchoose()]),
                repeatentry: this.formBuilder.array([this.createentry()]),
                repeatessay: this.formBuilder.array([this.createessay()]),
                repeatnumeric: this.formBuilder.array([this.createnumeric()]),
            });
        this.graphform = this.formBuilder.group({
            head: '',
            index: '',
            answer: '',
            question: '',
            explain: '',
            autograde: false,
            points: ['1', Validators.required],
            editorAnswer: ''
        });
        this.alphabets = [];
        this.buffer = [];

        for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
            console.log(String.fromCharCode(i));
            this.alphabets.push(String.fromCharCode(i));
        }
        this.itemsList = [{value: 'true'},
            {value: 'false'},
        ];
    }

    ngOnInit(): void {
        this.allowSelect = true;
        this.newSubject.allowChangeSchool(this.allowSelect);
        if (this.assessmentType == 'edit') {
            console.log('oninit in');
        } else {
            this.multiform.controls.classname.patchValue('');
            this.multiform.controls.description.patchValue('');
            this.multiform.controls.resourcesLink.patchValue('');
            this.multiform.controls.tag.patchValue('');
            this.multiform.controls.grade.patchValue('');
            this.multiform.controls.subject.patchValue('');
        }
        this.openmenu = true;
        this.newSubject.changeSideViewList(this.openmenu);
        this.navServices.collapseSidebar = true;
        this.gradeList();
        this.subjectList();
        this.classList(1);
        this.preventScroll();
    }


    ngOnDestroy(): void {
        this.allowScroll();
        this.openmenu = false;
        this.newSubject.changeSideViewList(this.openmenu);
        this.navServices.collapseSidebar = false;
    }

    onEditorReady(event: any): void {
        console.log(Array.from(event.ui.componentFactory.names()));

        const toolbarItems = Array.from(event.ui.componentFactory.names());
        console.log(toolbarItems , 'toolbarss');
        // // this.editorConfig.toolbar.items = [];
        // console.log(this.editorConfig.toolbar.items ,'item')
        // toolbarItems.forEach((item) => {
        //     console.log(item ,'item')
        //     this.editorConfig.toolbar.items.push(item);
        // });
        // console.log(this.editorConfig);
    }

    subCkedi(){

        const a = document.getElementById('ckEditorVal');
        const b = document.getElementById('ckEditorVal').innerHTML;
        console.log(a , 'a');
        console.log(b , 'a');
        console.log(this.model.editorData,  'dataa');
    }

    //// Annatation  Start///

    onDrop(event){
        console.log(event);
    }


    incrementZoom(amount: number) {
            this.zoom += amount;
    }
    tools(type, pointerType){
        this.elem.style.cursor = pointerType;
        if (this.shapesType === type){
            this.shapesType = '';
            this.allowScroll();

        }else{
            this.shapesType = type;
            // this.elem.style.cursor = pointerType;
            this.preventScroll();

        }
        // this.shapesType = type;
        this.elem.style.cursor = pointerType;
        // document.getElementById("customText").remove();
    }

    callBackFn(pdf: any) {
        console.log(pdf , 'pdf');
        this.customPdfLoader = false;
        this.allowScroll();
        // do anything with "pdf"
    }

    onerror(error){
        this.customPdfLoader = false;
        console.log(error , 'errr');
        console.log(error.name , 'errr');
        this.toastr.error(error.name);
    }
    mouseEvent(event) {

        // this.elem.style.cursor = 'crosshair'
        if (event.type === 'click') {
            console.log(event, 'event.type');
            this.dragpaths = this.composedPath(event.target);
            const drageventPath = this.dragpaths.find(p => p.className == 'page');
            // this.dragPageNumber = parseInt(drageventPath.getAttribute('data-page-number')); // get id of page
            // console.log(this.dragpaths, 'this.this.dragpaths');
            // console.log(drageventPath, 'this.dragPageNumber');
        }

        if (this.queDrag) {
            // console.log($('#drag' + this.selectedQueNum).length, 'length')

            if ($('#drag' + this.selectedQueNum).length == 0) {
                // Exists.
                this.dragpaths = this.composedPath(event.target);
                console.log(this.dragpaths, 'dragpaths');
                const drageventPath = this.dragpaths.find(p => p.className == 'page');

                if (drageventPath) {
                    this.dragPageNumber = parseInt(drageventPath.getAttribute('data-page-number'));
                    // get id of page
                    const dragtoDrawRectangle = document.getElementById('pdf-page').getElementsByTagName('svg');
                    const dragpageOffset = dragtoDrawRectangle[this.dragPageNumber - 1].getBoundingClientRect();
                    this.pagePosition = {
                        x: dragpageOffset.left,
                        y: dragpageOffset.top
                    };

                    this.lastMousePosition = {
                        x: event.clientX - this.pagePosition.x,
                        y: event.clientY - this.pagePosition.y
                    };
                    if (event.type === 'mousemove') {
                        console.log(this.lastMousePosition, 'qqq');

                        // document.getElementById(this.selectedQueNum + 'dropId').style.position = 'fixed';
                    }
                    if (event.type == 'mouseup') {
                        document.getElementById(this.selectedQueNum + 'dropId').style.position = 'absolute';
                        this.queNum.push(event.target.innerText);
                        document.getElementById(this.selectedQueNum + 'dropId').style.transform = 'none';

                        // console.log(event.target.innerText);
                        this.dragButton = document.createElement('span');
                        this.dragButton.id = 'drag' + this.selectedQueNum;
                        this.dragButton.style.position = 'absolute';
                        this.dragButton.style.left = this.lastMousePosition.x + 'px';
                        this.dragButton.style.top = this.lastMousePosition.y + 'px';
                        this.dragButton.style.fontSize = '14px';
                        this.dragButton.style.width = '27px';
                        this.dragButton.style.background = '#e6baea';
                        this.dragButton.style.padding = '6px';
                        this.dragButton.style.borderRadius = '4px';
                        this.dragButton.style.textAlign = 'center';
                        this.dragButton.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';

                        this.dragButton.innerHTML = this.selectedQueNum;


                        // console.log(this.dragpaths)

                        this.dragQuestionsList.push({
                            id: this.selectedQueNum + 'dropId' ,
                            text: this.selectedQueNum,
                            pageNumber: this.currentPage,
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
                // document.getElementById(this.selectedQueNum + 'dropId').style.position = 'fixed';

                const dragList = [];
                console.log(this.selectedQueNum + 'dropId' , 'this.selectedQueNum + \'dropId\'');
                this.dragQuestionsList.forEach((item) => {
                    console.log(item.id , 'id');
                    if (item.id !== this.selectedQueNum + 'dropId') {
                        dragList.push(item);
                    }
                });
                this.dragQuestionsList = dragList;
                const elem = document.getElementById('drag' + this.selectedQueNum);
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
                    const width = (this.mousePosition.x / this.scale) - (this.lastMousePosition.x  / this.scale);
                    const height = (this.mousePosition.y / this.scale)  - (this.lastMousePosition.y  / this.scale);
                    this.rect = {
                        x1: (this.lastMousePosition.x  / this.scale),
                        y1: (this.lastMousePosition.y  / this.scale),
                        x2: (this.mousePosition.x /  this.scale),
                        y2: (this.mousePosition.y / this.scale) ,
                        d: '',
                        text: '',
                        width,
                        height
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
                    if (this.shapesType == 'path') {
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
                const path = this.composedPath(event.target);
                const eventPath = path.find(p => p.className == 'page');

                if (typeof eventPath !== 'undefined') {
                    this.dataPageNumber = parseInt(eventPath.getAttribute('data-page-number')); // get id of page
                    const toDrawRectangle = document.getElementById('pdf-page').getElementsByTagName('svg');
                    const pageOffset = toDrawRectangle[this.dataPageNumber - 1].getBoundingClientRect();
                    this.pagePosition = {
                        x: pageOffset.left,
                        y: pageOffset.top
                    };

                    this.lastMousePosition = {
                        x: event.clientX - this.pagePosition.x,
                        y: event.clientY - this.pagePosition.y
                    };


                    // let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;
                    // let rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

                    if (this.shapesType != 'text') {
                        const rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

                        this.element = document.createElementNS('http://www.w3.org/2000/svg', this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType);
                        this.element.setAttribute('stroke-width', '2');
                        this.element.setAttribute('stroke', this.svgColor);
                        this.element.setAttribute('fill', 'none');
                    }


                    if (this.shapesType == 'rect') {
                            const rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

                            this.element.id = 'rect-' + rectId;
                            this.element.setAttribute('x', this.lastMousePosition.x / this.scale);
                            this.element.setAttribute('y', this.lastMousePosition.y / this.scale);

                        }

                    if (this.shapesType == 'circle'){
                            const rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

                            this.element.id = 'circle-' + rectId;
                            this.element.setAttribute('cx', (this.lastMousePosition.x / this.scale));
                            this.element.setAttribute('cy', (this.lastMousePosition.y / this.scale));
                            this.element.setAttribute('r', (this.lastMousePosition.x / this.scale) - (this.lastMousePosition.y / this.scale));

                            // console.log(this.lastMousePosition.x - this.lastMousePosition.y);
                        }

                    if (this.shapesType == 'path'){
                            const rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

                            this.element.id = 'path-' + rectId;
                            this.strPath = 'M' + (this.lastMousePosition.x / this.scale) + ' ' + (this.lastMousePosition.y / this.scale);
                            this.element.setAttribute('d', this.strPath);



                    }

                    if (this.shapesType == 'rectMask'){
                        const rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

                        this.element.id = 'rectMask-' + rectId;
                        this.element.setAttribute('stroke-width', '0');
                        this.element.setAttribute('fill', '#fff');
                        this.element.setAttribute('x', (this.lastMousePosition.x / this.scale));
                        this.element.setAttribute('y', (this.lastMousePosition.y / this.scale));

                    }

                    if (this.shapesType == 'highlight'){
                        const rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

                        this.element.id = 'highlight-' + rectId;
                        this.element.setAttribute('stroke-width', '0');
                        // this.element.setAttribute("fill", "yellow");
                        this.element.setAttribute('fill', this.svgColor);
                        this.element.setAttribute('fill-opacity', '0.2');
                        this.element.setAttribute('x', (this.lastMousePosition.x / this.scale));
                        this.element.setAttribute('y', (this.lastMousePosition.y / this.scale));

                    }

                    if (this.shapesType == 'line'){
                        const rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

                        this.element.id = 'line-' + rectId;
                        this.element.setAttribute('x2', (this.lastMousePosition.x / this.scale));
                        this.element.setAttribute('y2', (this.lastMousePosition.y / this.scale));

                    }

                    if (this.shapesType == 'text') {
                        const rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

                        if (document.getElementById('customText') != null) {
                            if ($('input[name="customText"]').val() == '') {
                                document.getElementById('customText').remove();
                                this.showInput = true;
                            } else{
                                this.showInput = false;
                            }
                        }

                        if (this.showInput) {
                            this.inputElement = document.createElement('INPUT');
                            this.inputElement.id = 'customText';
                            this.inputElement.className = 'form-control';
                            this.inputElement.setAttribute('type', 'text');
                            this.inputElement.setAttribute('name', 'customText');
                            this.inputElement.setAttribute('Placeholder', 'Text');
                            // this.inputElement.setAttribute('x', (this.lastMousePosition.x / this.scale));
                            // this.inputElement.setAttribute('y', (this.lastMousePosition.x / this.scale));
                            this.lastMousePosition = {
                                x: event.clientX - this.pagePosition.x,
                                y: event.clientY - this.pagePosition.y
                            };

                            this.inputElement.style.left = (this.lastMousePosition.x).toString() + 'px';
                            this.inputElement.style.top = (this.lastMousePosition.y).toString() + 'px';
                            this.inputElement.style.width = '200px';
                            // this.inputElement.style.hieght = '80px';
                            this.inputElement.style.position = 'absolute';
                            // this.inputElement.style.display = 'block';

                            this.textPosition = {
                                x : this.lastMousePosition.x / this.scale,
                                y : this.lastMousePosition.y / this.scale,
                            };

                            const paths = this.composedPath(event.target);
                            this.inputElement.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                            paths.find(p => p.className == 'page').appendChild(this.inputElement);


                        }
                    }


                    if (!this.showInput){
                            const rectId = document.getElementById('pdf-page').getElementsByTagName(this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType).length + 1;

                            this.textValue = $('input[name="customText"]').val();
                            this.element = document.createElementNS('http://www.w3.org/2000/svg', this.shapesType);
                            this.element.id = 'text-' + rectId;
                            this.element.setAttribute('fill', this.svgColor);
                            this.element.setAttribute('x', this.textPosition.x);
                            this.element.setAttribute('y', this.textPosition.y);
                            this.element.setAttribute('stroke-width', 'none');
                            this.element.setAttribute('stroke', 'none');
                            // this.element.style.fontSize = this.textFontSize + 'px';
                            this.element.style.fontSize = this.textFontSize + 'px';
                            this.element.appendChild(document.createTextNode(this.textValue));
                            this.rect.x1 = this.textPosition.x;
                            this.rect.y1 = this.textPosition.y;
                            this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                            path.find(p => p.className == 'page').children[1].appendChild(this.element);
                            document.getElementById('customText').remove();

                        }



                }
                if (this.element){
                    this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';

                }

            }

            if (event.type === 'mouseup') {
                // console.log('mouse up')
                this.mouseDownFlag = false;
                this.buffer = [];
                this.rect.d = this.strPath;
                this.rect.text = this.textValue;


                if (this.shapesType == 'text'){
                    if (this.showInput) {
                        document.getElementById('customText').focus();
                    } else{
                        this.save();
                        this.showInput = true;
                    }
                }else{
                    console.log(this.rect , 'this.rect');
                    console.log(this.areaInfo , 'before save');
                    if (this.rect.x1 !== 0 && this.rect.x1 != this.rect.x2){
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
        console.log(this.dragQuestionsList , 'dragQuestionsList');
        this.selectedDeleteIcon = false;
        this.deleteAnnatation = false;
    }

    deleteSvg(){
       this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
          return value.pageNumber == this.currentPage;
        });
       this.itemSelect = this.selectedPageAnnatation;
       this.deleteAnnatation = true;
    }


    deleteAllAnnotation(){

        for (let i = 0; i < this.areaInfo.length; i++) {
            // if (this.currentPage == this.areaInfo[i].pageNumber) {
                this.areaInfo[i].isDelete = true;
                // this.areaInfo.splice(i, 1);
                this.redoListArray.push(this.areaInfo[i]);
                document.getElementById(this.areaInfo[i].rectangleId).remove();
            // }
        }

        this.areaInfo = [];
        this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
            return value.pageNumber == this.currentPage;
        });

        this.itemSelect = this.selectedPageAnnatation;
        this.close();
    }
    deleteCurrentPageAnnotation(){
        console.log(this.currentPage , 'pageeee');

        for (let i = 0; i < this.areaInfo.length; i++) {
                if (this.currentPage == this.areaInfo[i].pageNumber) {
                this.areaInfo[i].isDelete = true;
                // this.areaInfo.splice(i, 1);
                this.redoListArray.push(this.areaInfo[i]);
                document.getElementById(this.areaInfo[i].rectangleId).remove();
            }
        }
        this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
            return value.pageNumber !== this.currentPage;
        });

        this.itemSelect = this.selectedPageAnnatation;

        this.close();
    }



    saveAnnatation(){
        //// write code for save

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
        const path = this.composedPath(event.source.textLayerDiv);
        path.find(p => p.className == 'page').appendChild(event.source.textLayerDiv);
    }

    pagechanging(event) {
        console.log(event);
        this.currentPage = event.pageNumber;
        if (this.deleteAnnatation){
            this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
                return value.pageNumber == this.currentPage;
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
        console.log(event, 'eventeventevent');
        const joinString = event.rectangleId;
        // setTimeout(() => {
        document.getElementById(joinString).remove();
        // }, 100);

        this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
            return value.pageNumber == this.currentPage;
        });

        console.log(this.selectedPageAnnatation , 'selected paginaion');
        this.itemSelect = this.selectedPageAnnatation;

    }

    undoDeleteAnnatation(event){
        console.log(event, 'eventeventevent in rec');

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
            return value.pageNumber == this.currentPage;
        });

        this.itemSelect = this.selectedPageAnnatation;

    }


    addQuestionButtonInPdf(value){
            // Exists.
            // this.dragpaths = this.composedPath(event.target);
            // let drageventPath = this.dragpaths.find(p => p.className == 'page');

            // if (drageventPath) {
        console.log(this.dragQuestionsList , 'list');
        if (this.dragQuestionsList){
            this.dragQuestionsList.forEach( (item) => {
                console.log($('#' + item.id + 'dropId').length , 'dropidleneth');
                console.log($('#drag' + item.dragButton.id).length , 'dragidleneth');
                if ($('#drag' + item.dragButton.id).length == 0){
                    document.getElementById(item.id).style.position = 'absolute';
                    document.getElementById(item.id).style.transform = 'none';
                    this.dragButton = document.createElement('span');
                    this.dragButton.id = item.dragButton.id;
                    this.dragButton.style.transform = 'scale(' + this.zoom.toString() + ') rotate(0) translate(0, 0)';
                    // this.dragButton.style.left = item.dragButton.x + 'px';
                    // this.dragButton.style.top = item.dragButton.y + 'px';
                    // this.dragButton.style.fontSize = '14px';
                    // this.dragButton.style.width = '27px';
                    // this.dragButton.style.background = "#e6baea";
                    // this.dragButton.style.padding = "6px";
                    // this.dragButton.style.borderRadius = "4px";
                    // this.dragButton.style.textAlign = "center";
                    ///
                    this.dragButton.style.left = (item.dragButton.x / this.scale) + 'px';
                    this.dragButton.style.top = (item.dragButton.y / this.scale) + 'px';
                    this.dragButton.style.fontSize = (14 / this.scale).toString() + 'px';
                    this.dragButton.style.width = (27 / this.scale).toString() + 'px';
                    this.dragButton.style.background = '#e6baea';
                    this.dragButton.style.padding = (6 / this.scale).toString() + 'px';
                    this.dragButton.style.borderRadius = (4 / this.scale).toString() + 'px';
                    this.dragButton.style.textAlign = 'center';
                    this.dragButton.style.position = 'absolute';
                    this.dragButton.innerHTML = item.text;
                    const path = document.getElementsByClassName('page')[item.pageNumber - 1];
                    // path.children[2].appendChild(this.dragButton);
                    path.appendChild(this.dragButton);
                    // this.dragpaths.find(p => p.className == 'page').appendChild(this.dragButton);
                    }else if ($('#drag' + item.dragButton.id).length > 0) {
                    // document.getElementById(this.selectedQueNum + 'dropId').style.position = 'fixed';

                    const dragList = [];
                    console.log(this.selectedQueNum + 'dropId' , 'this.selectedQueNum');
                    this.dragQuestionsList.forEach((item1: any) => {
                        console.log(item1.id , 'id');
                        if (item1.id !== item.id + 'dropId') {
                            dragList.push(item1);
                        }
                    });
                    const elem = document.getElementById('drag' + item.dragButton.id);
                    elem.remove();
                    this.dragQuestionsList = dragList;

                }
            });
        }
    }

    redoPageRendered(value) {
        const path = document.getElementsByClassName('page')[value.pageNumber - 1];
        const path1 = document.getElementsByClassName('page')[value.pageNumber - 1].getAttribute('data-page-number');

        $('.textLayer').addClass('disable-textLayer');

        // let rectId = document.getElementById('pdf-page').getElementsByTagName(value.shape == 'rectMask' ? 'rect' : value.shape == 'highlight' ? 'rect' : value.shape).length + 1;
        const rectId = value.rectangleId;
        const rect = document.createElementNS('http://www.w3.org/2000/svg', value.shape == 'rectMask' ? 'rect' : value.shape == 'highlight' ? 'rect' : value.shape);

        rect.setAttribute('stroke-width', '2');
        rect.setAttribute('stroke', 'red');
        // rect.setAttribute("fill", "none");
        rect.setAttribute('fill', 'none');
        rect.style.width = value.rect.width + 'px';
        rect.style.height = value.rect.height + 'px';

        if (value.shape == 'rect') {
            // rect.id = 'rect-' + rectId;
            rect.id = rectId;
            rect.setAttribute('x', value.rect.x1.toString());
            rect.setAttribute('y', value.rect.y1.toString());
        }
        if (value.shape == 'circle') {
            // rect.id = 'circle-' + rectId;
            rect.id = rectId;
            rect.setAttribute('cx', value.rect.x1.toString());
            rect.setAttribute('cy', value.rect.y1.toString());
            rect.setAttribute('r', '50');
        }

        if (value.shape == 'path') {
            // rect.id = 'path-' + rectId;
            rect.id = rectId;
            rect.setAttribute('d', value.rect.d);
        }
        if (value.shape == 'text') {
            // rect.id = 'text-' + rectId;
            rect.id = rectId;
            rect.setAttribute('fill', 'red');
            rect.setAttribute('stroke-width', 'none');
            rect.setAttribute('stroke', 'none');
            rect.setAttribute('x', value.rect.x1.toString());
            rect.setAttribute('y', value.rect.y1.toString());
            rect.appendChild(document.createTextNode(value.rect.text.toString()));
            rect.style.fontSize = value.fontSize + 'px';
        }

        if (value.shape == 'rectMask') {
            // rect.id = 'rectMask-' + rectId;
            rect.id = rectId;

            rect.setAttribute('fill', '#fff');
            rect.setAttribute('stroke-width', '0');
            rect.setAttribute('x', value.rect.x1.toString());
            rect.setAttribute('y', value.rect.y1.toString());

        }

        if (value.shape == 'highlight') {
            // rect.id = 'highlight-' + rectId;
            rect.id =  rectId;
            rect.setAttribute('stroke-width', '0');
            // rect.setAttribute("fill", "yellow");
            rect.setAttribute('fill', value.color);
            rect.setAttribute('fill-opacity', '0.2');
            rect.setAttribute('x', value.rect.x1.toString());
            rect.setAttribute('y', value.rect.y1.toString());

        }
        rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';

        // path.children[1].appendChild(rect);
        // let pagePath = path.find(p => p.className == 'page');
        const lengthofChilds = path.children.length;
        for (let i = 0; i < lengthofChilds; i ++){
            if (path.children[i].tagName == 'svg'){
                rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                path.children[i].appendChild(rect);
            }
        }
    }


    hoverRemoveItemEnter(event){
        console.log(event , 'evetn in hoverrr');
        // this.elem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // this.elem.style.position = 'absolute';
        // this.elem.style.left = 0 + 'px';
        // this.elem.style.top = 0 + 'px';
        // this.elem.style.right = 0 + 'px';
        // this.elem.style.bottom = 0 + 'px';
        // this.elem.style.cursor = 'auto';
        // this.elem.style.width = 100 + '%';
        // this.elem.style.height = 100 + '%';
        // let path = this.composedPath(event.source.div);
        // this.globalPdfViewerPath = path;
        this.globalPdfViewerPath.find(p => p.className == 'page').appendChild(this.elem);



        $('.textLayer').addClass('disable-textLayer');

        console.log(this.areaInfo , 'infro in hover');

        this.rectElem = this.areaInfo.forEach((value) => {

            console.log(value , 'value in hoverrrr loop');
            const eventsvgPath = document.getElementById(event.rectangleId);
            const valuesvgPath = document.getElementById(value.rectangleId);
            // console.log(eventsvgPath , 'eventsvgPath')
            // console.log(valuesvgPath, 'valuesvgPath')
            if (value.pageNumber == event.pageNumber ) {

                if (eventsvgPath == valuesvgPath){
                    const rect = valuesvgPath;

                    console.log(rect , 'rect in hover');


                    if (rect){
                        console.log(value , 'value in ove');
                        if (value.shape == 'rect') {
                            rect.style.animation = 'blinkStroke 0.8s infinite';

                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'circle') {
                            rect.style.animation = 'blinkStroke 0.8s infinite';

                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }

                        if (value.shape == 'path') {
                            rect.style.animation = 'blinkStroke 0.8s infinite';

                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'text') {
                            rect.style.animation = 'blinkFill 0.8s infinite';

                            rect.setAttribute('fill', value.color);
                            rect.setAttribute('stroke-width', 'none');
                            rect.setAttribute('stroke', 'none');
                            // rect.setAttribute("x", value.rect.x1.toString());
                            // rect.setAttribute("y", value.rect.y1.toString());
                            // rect.appendChild(document.createTextNode(value.rect.text.toString()));
                            // rect.style.fontSize = value.fontSize + 'px';
                        }

                        if (value.shape == 'rectMask') {
                            rect.style.animation = 'blinkFill 0.8s infinite';

                            // rect.setAttribute("fill", "#fff");
                            rect.setAttribute('fill', value.color);
                            rect.setAttribute('stroke-width', '0');


                        }

                        if (value.shape == 'highlight') {
                            rect.style.animation = 'blinkFill 0.8s infinite';

                            rect.setAttribute('stroke-width', '0');
                            // rect.setAttribute("fill", "yellow");
                            rect.setAttribute('fill', value.color);
                            rect.setAttribute('fill-opacity', '0.2');

                        }
                    }

                }

            }
        });

    }

    hoverLeaveRemoveItemEnter(event){

        console.log(event , 'evetn in leave mouse');
        // this.elem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // this.elem.style.position = 'absolute';
        // this.elem.style.left = 0 + 'px';
        // this.elem.style.top = 0 + 'px';
        // this.elem.style.right = 0 + 'px';
        // this.elem.style.bottom = 0 + 'px';
        // this.elem.style.cursor = 'auto';
        // this.elem.style.width = 100 + '%';
        // this.elem.style.height = 100 + '%';

        this.globalPdfViewerPath.find(p => p.className == 'page').appendChild(this.elem);

        $('.textLayer').addClass('disable-textLayer');

        this.rectElem = this.areaInfo.forEach((value, index, arr) => {
            const eventsvgPath = document.getElementById(event.rectangleId);
            const valuesvgPath = document.getElementById(value.rectangleId);

            if (value.pageNumber == event.pageNumber ) {

                if (eventsvgPath == valuesvgPath){
                    const rect = valuesvgPath;


                    console.log(rect , 'rect in leave');
                    if (rect){
                        rect.style.animation = '';

                        if (value.shape == 'rect') {
                            rect.setAttribute('stroke-width', '2');
                            // rect.setAttribute("stroke", "red");
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'circle') {
                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }

                        if (value.shape == 'path') {
                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'text') {
                            rect.setAttribute('fill', value.color);
                            // rect.setAttribute("stroke-width", );
                            rect.setAttribute('stroke-width', 'none');
                            rect.setAttribute('stroke', 'none');
                            // rect.setAttribute("x", value.rect.x1.toString());
                            // rect.setAttribute("y", value.rect.y1.toString());
                            // rect.appendChild(document.createTextNode(value.rect.text.toString()));
                            // rect.style.fontSize = value.fontSize + 'px';
                        }

                        if (value.shape == 'rectMask') {
                            rect.setAttribute('fill', '#fff');
                            // rect.setAttribute("fill", "#fff");
                            rect.setAttribute('stroke-width', '0');


                        }

                        if (value.shape == 'highlight') {
                            rect.setAttribute('stroke-width', '0');
                            // rect.setAttribute("fill", "yellow");
                            rect.setAttribute('fill', value.color);
                            rect.setAttribute('fill-opacity', '0.2');

                        }
                    }

                }

            }
        });

    }

    pageRendered(event) {
        this.scale = event.source.scale;

        this.elem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.elem.style.position = 'absolute';
        this.elem.style.left = 0 + 'px';
        this.elem.style.top = 0 + 'px';
        this.elem.style.right = 0 + 'px';
        this.elem.style.bottom = 0 + 'px';
        this.elem.style.cursor = 'auto';
        this.elem.style.width = event.source.width + 'px';
        this.elem.style.height = event.source.height + 'px';
        // this.elem.setAttribute('preserveAspectRatio' ,"xMidYMid meet");
        // this.elem.setAttribute("class", "annotationLayer");
        // this.elem.setAttribute("viewBox", "0 0 " +  parseInt(event.source.width).toString() + ' ' + parseInt(event.source.height).toString());

        const path = this.composedPath(event.source.div);
        this.globalPdfViewerPath = path;
        path.find(p => p.className == 'page').appendChild(this.elem);


        // var list = path.find(p => p.className == 'page');
        // console.log(list.childNodes ,'list.childNodes')
        // list.insertBefore(this.elem, list.childNodes[1]);

        // $('.textLayer').addClass('disable-textLayer');

        console.log(event , 'event');
        console.log(this.areaInfo , 'area info ');
        this.rectElem = this.areaInfo.forEach((value, index, arr) => {

            if (value.pageNumber == event.pageNumber && !value.isDelete) {
                // console.log(value ,'valuee')
                // let rectId = document.getElementById('pdf-page').getElementsByTagName(value.shape == 'rectMask' ? 'rect' : value.shape == 'highlight' ? 'rect' : value.shape).length + 1;
                const rectId = value.rectangleId;
                const rect = document.createElementNS('http://www.w3.org/2000/svg', value.shape == 'rectMask' ? 'rect' : value.shape == 'highlight' ? 'rect' : value.shape);

                rect.setAttribute('stroke-width', '2');
                rect.setAttribute('stroke', 'red');
                // rect.setAttribute("fill", "none");
                rect.setAttribute('fill', 'none');
                rect.style.width = value.rect.width + 'px';
                rect.style.height = value.rect.height + 'px';

                if (value.shape == 'rect') {
                    // rect.id = 'rect-' + rectId;
                    rect.id = rectId;
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
                }
                if (value.shape == 'circle') {
                    // rect.id = 'circle-' + rectId;
                    rect.id = rectId;
                    rect.setAttribute('cx', value.rect.x1.toString());
                    rect.setAttribute('cy', value.rect.y1.toString());
                    rect.setAttribute('r', '50');
                }

                if (value.shape == 'path') {
                    // rect.id = 'path-' + rectId;
                    rect.id = rectId;
                    rect.setAttribute('d', value.rect.d);
                }
                if (value.shape == 'text') {
                    // rect.id = 'text-' + rectId;
                    rect.id = rectId;
                    rect.setAttribute('fill', 'red');
                    rect.setAttribute('stroke-width', 'none');
                    rect.setAttribute('stroke', 'none');
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
                    //
                    // rect.style.left = value.rect.x1 + 'px';
                    // rect.style.top = value.rect.y1 + 'px';
                    rect.appendChild(document.createTextNode(value.rect.text.toString()));
                    rect.style.fontSize = value.fontSize + 'px';
                }

                if (value.shape == 'rectMask') {
                    // rect.id = 'rectMask-' + rectId;
                    rect.id = rectId;

                    rect.setAttribute('fill', '#fff');
                    rect.setAttribute('stroke-width', '0');
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());

                }

                if (value.shape == 'highlight') {
                    rect.id = rectId;
                    // rect.id = 'highlight-' + rectId;
                    rect.setAttribute('stroke-width', '0');
                    // rect.setAttribute("fill", "yellow");
                    rect.setAttribute('fill', value.color);
                    rect.setAttribute('fill-opacity', '0.2');
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());

                }


                // get to-draw-rectangle div and add rectangle
                rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';

                console.log(path.find(p => p.className == 'page').children[1] ,  'path.find(p => p.className == \'page\').children[1]');
                // path.find(p => p.className == 'page').children[1].appendChild(rect);

                const pagePath = path.find(p => p.className == 'page');
                const lengthofChilds = path.find(p => p.className == 'page').children.length;
                for (let i = 0; i < lengthofChilds; i ++){
                    if (pagePath.children[i].tagName == 'svg'){
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
        const path = [];
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
            return 'block';
        } else {
            return 'none';
        }
    }

    save() {

        console.log(this.element.id , 'idd in save');
        const path = document.getElementById(this.element.id);
        console.log(path , 'path');

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
            console.log(this.rect , 'this.rect');
            console.log(this.areaInfo , 'a save');
            this.showPopup = false;
            this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };

            this.selectedPageAnnatation =  this.areaInfo.filter((value, id, array) => {
                return value.pageNumber == this.currentPage;
            });
            this.itemSelect = this.selectedPageAnnatation;
        }else{
            console.log('no dom elemente');
        }


    }

    cancel() {
        const rectId = this.element.getAttribute('id');
        $('#' + rectId).remove();
        this.showPopup = false;
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
    }

    delete(list: AreaInfo) {
        document.getElementById(list.rectangleId).remove();
        this.areaInfo.find(f => f.rectangleId === list.rectangleId).isDelete = true;
        this.areaInfo = this.areaInfo.filter(f => f.isDelete === false);
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


    dragQueCount(event){
        console.log(event.target.innerText , 'event.target.innerText');
        this.selectedQueNum = event.target.innerText;
        if (event.type === 'mousedown') {
            console.log('mousedown');
            // alert('down');
            this.queDrag = true;
            // let elem = document. getElementById('dropId');
            // elem.remove();
        }
        // if(event.type === 'mouseup'){
        //     // alert('up')
        //     console.log('mouseup')
        //     this.queNum.push(event.target.innerText);
        //     document.getElementById('dropId').style.transform = 'none';
        //
        //     console.log(event , 'innertext');
        //     console.log(event.target.innerText , 'innertext');
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
        //     console.log(this.dragpaths)
        //     this.dragpaths.find(p => p.className == 'page').appendChild(this.dragButton);
        //     this.queDrag = false;
        // }

    }

    dragQuestionRevise(finalLength, changedQuesNo) {
        let id = 0;
        for (let z = 0; z < this.totalsub[this.sectionNo].section.length; z++) {
            if (changedQuesNo == this.totalsub[this.sectionNo].section[z].quesNo) {
                id += 1;
                const sub = (id + 9).toString(36).toLowerCase();
                if (this.InitialArrayLength == 1 && this.InitialArrayLength <= finalLength && id == 1) {
                    let changed = '';
                    if (finalLength == 1) {
                        changed = changedQuesNo;
                    } else {
                        changed = changedQuesNo + sub;
                    }
                    if (document.getElementById(this.sectionNo + 'drag' + this.editQuesNo)) {
                        document.getElementById(this.sectionNo + 'drag' + this.editQuesNo).innerText = changed;
                        document.getElementById(this.sectionNo + 'drag' + this.editQuesNo).id = this.sectionNo + 'drag' + changed;
                        this.dragQuestionsList.forEach((val) => {
                            if (val.id == this.editQuesNo + 'dropId' + this.sectionNo) {
                                val.id = changed + 'dropId' + this.sectionNo;
                                val.dragButton.id = this.sectionNo + 'drag' + changed;
                                val.text = changed;
                            }
                        });
                    }
                }
                else if (this.InitialArrayLength > finalLength) {
                    for (let j = 0; j < this.InitialArrayLength; j++) {
                        let alpha = ((j + 1) + 9).toString(36).toLowerCase();
                        if ((j + 1) > finalLength) {
                            if (document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + alpha)) {
                                for (let k = 0; k < this.dragQuestionsList.length; k++) {
                                    if (this.dragQuestionsList[k].id == this.editQuesNo + alpha + 'dropId' + this.sectionNo) {
                                        this.dragQuestionsList.splice(k, 1);
                                    }
                                }
                                document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + alpha).remove();
                            }
                        }
                        if (finalLength == 1) {
                            if (document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + 'a')) {
                                document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + 'a').innerText = changedQuesNo;
                                document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + 'a').id = this.sectionNo + 'drag' + changedQuesNo;
                                this.dragQuestionsList.forEach((val) => {
                                    if (val.id == this.editQuesNo + 'a' + 'dropId' + this.sectionNo) {
                                        val.id = changedQuesNo + 'dropId' + this.sectionNo;
                                        val.dragButton.id = this.sectionNo + 'drag' + changedQuesNo;
                                        val.text = changedQuesNo;
                                    }
                                });
                            }
                        } else {
                            if (document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + alpha)) {
                                document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + alpha).innerText = changedQuesNo + alpha;
                                document.getElementById(this.sectionNo + 'drag' + this.editQuesNo + alpha).id = this.sectionNo + 'drag' + changedQuesNo + alpha;
                                this.dragQuestionsList.forEach((val) => {
                                    if (val.id == this.editQuesNo + alpha + 'dropId' + this.sectionNo + 'a') {
                                        val.id = changedQuesNo + alpha + 'dropId' + this.sectionNo;
                                        val.dragButton.id = this.sectionNo + 'drag' + changedQuesNo + alpha;
                                        val.text = changedQuesNo + alpha;
                                    }
                                });
                            }
                        }
                    }
                }
            }
        }
    }

    //// Annatation  End///



    createlink(): UntypedFormGroup{
        const def = ['a', 'b', 'c', 'd'];
        return this.formBuilder.group({
            points: ['1', Validators.required],
            option: ['a b c d ', Validators.required],
            array: [def],
            subQuestion: '',
            correct: ['', Validators.required],
            sub : '',
            active: ['', Validators.required],
            question: '',
            explain: '',
            autograde: true,
        });
    }

    createchoose(): UntypedFormGroup{
        return this.formBuilder.group({
            optradio: ['', Validators.required],
            points1: ['1', Validators.required],
            question: '',
            explain: '',
            autograde: true,
        });
    }
    createnumeric(): UntypedFormGroup {
        return this.formBuilder.group({
            answer: ['', Validators.required],
            question: '',
            explain: '',
            autograde: false,
            points: ['1', Validators.required],
        });
    }
    createentry(): UntypedFormGroup{
        return this.formBuilder.group({
            correct: ['', Validators.required],
            matchCase: '',
            explain: '',
            points: ['1', Validators.required],
            question: '',
            autograde: false,
        });
    }
    createessay(): UntypedFormGroup{
        return this.formBuilder.group({
            lines: ['', Validators.required],
            points: ['1', Validators.required],
            question: '',
            explain: '',
            autograde: false,
        });
    }
    truelink(): UntypedFormGroup{
        return this.formBuilder.group({
            choice: '',
            points: ['1', Validators.required],
            optionList: '',
            answer: ['', Validators.required],
            question: '',
            explain: '',
            active: '',
            autograde: true,
            choiceList: this.formBuilder.array([this.addlink()])
        });
    }
    createblanks(): UntypedFormGroup{
        return this.formBuilder.group({
            choice: '',
            points: ['1', Validators.required],
            answer: '',
            explain: '',
            question: ['', Validators.required],
            autograde: true,
            blankList: '',
        });
    }
    addlink(): UntypedFormGroup {
        return this.formBuilder.group({
            choice: ['', Validators.required]
        });
    }
    addFillin(): UntypedFormGroup {
        return this.formBuilder.group({
            choice: ['', Validators.required]
        });
    }
    add(): void {
        this.ransom = this.getRandrom();
        this.repeatlink = this.multiform.get('repeatlink') as UntypedFormArray;
        this.repeatlink.push(this.createlink());
        this.hide = false;
    }
    addTrue(): void {
        this.ransom = this.getRandrom();
        this.repeatchoose = this.multiform.get('repeatchoose') as UntypedFormArray;
        this.repeatchoose.push(this.createchoose());
        this.hide = false;
    }
    addBlanks(): void {
        this.ransom = this.getRandrom();
        this.repeatblanks = this.multiform.get('repeatblanks') as UntypedFormArray;
        this.repeatblanks.push(this.createblanks());
        this.hide = false;
    }
    addEntry(): void {
        this.ransom = this.getRandrom();
        this.repeatentry = this.multiform.get('repeatentry') as UntypedFormArray;
        this.repeatentry.push(this.createentry());
        this.hide = false;
    }

    addEssay(): void {
        this.ransom = this.getRandrom();
        this.repeatessay = this.multiform.get('repeatessay') as UntypedFormArray;
        this.repeatessay.push(this.createessay());
        this.hide = false;
    }
    addNumeric(): void {
        this.ransom = this.getRandrom();
        this.repeatnumeric = this.multiform.get('repeatnumeric') as UntypedFormArray;
        this.repeatnumeric.push(this.createnumeric());
        this.hide = false;
    }
    plus(): void {
        this.ransom = this.getRandrom();
        this.repeatplus = (this.multiform.get('repeatplus') as UntypedFormArray);
        this.repeatplus.push(this.truelink());
        this.hide = false;
    }
    addPlus(value): void {
        value.push(this.addlink());
    }
    addFill(value): void {
        value.push(this.addFillin());
    }
    deletePdf(){
        this.answerpdfpath = [];
        this.attachment1.nativeElement.value = '';
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
    description(){
        const grade = this.multiform.controls.grade.value;
        const subject = this.multiform.controls.subject.value;
        const cname = this.multiform.controls.classname.value;
        if (grade != '' && subject != '' && cname != ''){
            this.disable = false;
            if (this.assessmentType == 'add') {
                if (this.functionCalled == false) {
                    this.draft('add');
                } else {
                    this.classList(2);
                }
            } else {
                this.classList(2);
            }
        }else {
            this.validationService.validateAllFormFields(this.multiform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    pdfUpload(){
        this.modalRef = this.modalService.open(this.uploadPdf, {size: 'md'});
    }
    encodeImageFileAsURL(event: any) {
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const imgDetails = event.target.files[0];
            // console.log(imgDetails, 'IMGDETAILS');
            const reader = new FileReader();
            reader.onload = (event: any) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                // console.log(getUrl, 'geturl');
                const pic = imgDetails.type.split('/');
                // console.log(pic, 'Type');

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
                // console.log(successData, 'successData');
            },
            (error) => {
                this.uploadFailure(error);
                console.log(error, 'wrongFormat');
            }
        );
    }
    uploadSuccess(successData) {
        // this.settings.loadingSpinner = false;
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            // console.log(this.imagepath, 'This image');
            this.imagepath = successData.ResponseObject.imagepath[0].original_image_url;
            this.imagepaththumb = successData.ResponseObject.imagepath[0].resized_url;
            // if (typing == 1) {
            // for (let i = 0; i < successData.ResponseObject.imagepath.length; i++) {
            //   this.imagepath.push(successData.ResponseObject.imagepath[i].original_image_url);
            //   this.imagepaththumb.push(successData.ResponseObject.imagepath[i].resized_url);
            //
            // }
        } else {
            this.toastr.error('Invalid File Format');
        }
    }
    uploadFailure(error) {
        // this.toastr.error('Invalid File Format');
        console.log(error, 'error');
    }
    encodePdfFileAsURL(event: any, type) {
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
                        this.onUploadKYCFinishedpdf(images, type);
                    }
                } else {
                    this.toastr.error('PDF are the required file format');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
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
        // this.settings.loadingSpinner = false;
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.pdfChanged = true;
            this.allowChanged = false;
            this.response = successData.ResponseObject;
            if (type == '1'){
                this.showpdf = [];
                this.pdfpaththumb = [];
                for (let i = 0; i < this.response.imagepath.length; i++) {
                    this.showpdf.push(this.response.imagepath[i]);
                    this.pdfpaththumb.push(this.response.imagepath[i].resized_url);
                }
                this.getpdf = this.showpdf[0];
                this.auth.setSessionData('pdf', JSON.stringify(this.showpdf));
                this.modalRef.close();
                // this.attachmentsnew.nativeElement.value = '';
            }else {
                console.log('in');
                this.answerpdfpath = [];
                // this.attachment1.nativeElement.value = '';
                this.answerpdfpath.push(this.response.imagepath[0]);
            }
            // this.auth.setSessionData('pdf_thumb', JSON.stringify(this.pdfpaththumb));
        } else {
            this.toastr.error('Invalid File Format');
        }
    }
    pdfuploadFailure(error) {
        console.log(error, 'error');
    }
    submitMulti(value) {
        console.log(this.numericQuestion, 'numericQuestion');
        console.log(this.multiform.controls.repeatlink, 'length of array');
        console.log(this.validated, 'vaild ');
        setTimeout( () => {
            if (this.multiform.controls.repeatlink.valid && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionMulti = [];
                let list;
                let changedQuesNo = this.countList;
                for (let i = 0; i < this.multiform.controls.repeatlink.value.length; i++) {
                    const list11 = ((i + 1) + 9).toString(36).toLowerCase();
                    list = {
                        options: this.multiform['controls'].repeatlink['controls'][i]['controls']['option'].value,
                        auto_grade: this.multiform['controls'].repeatlink['controls'][i]['controls']['autograde'].value == true ? '1' : '0',
                        points: this.multiform['controls'].repeatlink['controls'][i]['controls']['points'].value,
                        answer: this.multiform['controls'].repeatlink['controls'][i]['controls']['correct'].value,
                        array: this.multiform['controls'].repeatlink['controls'][i]['controls']['array'].value,
                        question: this.multiform['controls'].repeatlink['controls'][i]['controls']['question'].value,
                        answer_explanation: this.multiform['controls'].repeatlink['controls'][i]['controls']['explain'].value,
                        question_no: this.countList,
                        sub_question_no: this.hide == false ? this.countList + list11 : this.countList,
                        question_type_id: '1',
                        difficulty: '0',
                        allow_exact_match: '0',
                        allow_any_text: '0',
                        match_case: '0',
                        minimum_line: '0'
                    };
                    console.log(list, 'updatedList');
                    this.subQuestionMulti.push(list);
                    if (value == 'add') {
                        if (this.totalsub[this.sectionCount] == null) {
                            this.totalsub[this.sectionCount] = {heading: '', section: []};
                        }
                        console.log(this.totalsub, 'this.totalsub add');
                        this.totalsub[this.sectionCount].section.push({sub: list.sub_question_no,
                            answer: list.answer,
                            typeId: list.question_type_id,
                            quesNo: list.question_no,
                            autoGrade: list.auto_grade,
                            explain: list.answer_explanation,
                            matchCase: list.match_case,
                            option: list.options,
                            array: list.array,
                            question: list.question});
                        console.log(this.totalsub, 'this.totalsub add');
                    }
                }
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = {heading: '', section: []};
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: this.multiform.controls.repeatlink.value.length == 1 ? 0 : 1,
                        sub_questions: this.subQuestionMulti
                    });
                    console.log(this.subQuestion, 'subQuestion');
                } else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = {heading: this.secHeadingArray[i], section: []};
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: this.multiform.controls.repeatlink.value.length == 1 ? 0 : 1,
                                        sub_questions: this.subQuestionMulti
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    const list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({sub: list.sub_question_no,
                                        answer: list.answer,
                                        typeId: list.question_type_id,
                                        autoGrade: list.auto_grade,
                                        matchCase: list.match_case,
                                        explain: list.answer_explanation,
                                        editor: list?.editor_answer,
                                        quesNo: list.question_no,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question});
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatlink.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                    console.log(this.subQuestion, 'this.subQuestionEditqqqqq');
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseInt(a.quesNo) - parseInt(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseInt(a.sub_questions[0].question_no) - parseInt(b.sub_questions[0].question_no));
                }
                console.log(this.totalsub[this.sectionCount].section, 'after sorted');
                const controlmulti = this.multiform.controls.repeatlink as UntypedFormArray;
                for (let i = controlmulti.length; i >= 1; i--) {
                    controlmulti.reset();
                    this.multiform['controls'].repeatlink['controls'][0]['controls']['points'].patchValue('1');
                    this.multiform['controls'].repeatlink['controls'][0]['controls']['option'].patchValue('a b c ');
                    this.multiform['controls'].repeatlink['controls'][0]['controls']['array'].patchValue(['a', 'b', 'c']);
                    this.multiform['controls'].repeatlink['controls'][0]['controls']['autograde'].patchValue(true);
                    controlmulti.removeAt(i);
                }
                // if (this.quesNoChanged == false) {
                //     this.dragCount = [];
                //     for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                //         const num = i + 1;
                //         this.dragCount.push(num);
                //     }
                // }
                this.hide = true;
                this.multiDialog = false;
                this.clickEvent();

            } else {
                this.toastr.error('Enter all mandatory fields');
            }
        } , 500);
    }


    gettingChoiceList(event, id, option){
        console.log(id, 'id');
        console.log(option, 'option');
        for (let i = 0; i < this.multiform['controls'].repeatlink['controls'].length; i++) {
            if (id == i) {
                console.log(event.target.innerText, 'event.target.innerText');
                this.multiform['controls'].repeatlink['controls'][i]['controls']['correct'].patchValue(event.target.innerText);
                this.multiform['controls'].repeatlink['controls'][i]['controls']['active'].patchValue(option);
            }
        }
    }

    submitChoice(value) {
        setTimeout(() => {
            if (this.multiform['controls'].repeatplus.valid && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionChoice = [];
                let list;
                let changedQuesNo = this.countList;
                for (let i = 0; i < this.multiform['controls'].repeatplus.value.length; i++) {
                    // this.subDiv = document.getElementById('subChoice').innerText.toLowerCase();
                    let list11 = ((i+1) + 9).toString(36).toLowerCase();
                    list = {
                        options: '',
                        points: this.multiform['controls'].repeatplus['controls'][i]['controls']['points'].value,
                        auto_grade: this.multiform['controls'].repeatplus['controls'][i]['controls']['autograde'].value == true ? '1' : '0',
                        question_no: this.countList,
                        sub_question_no: this.hide == false ? this.countList + list11 : this.countList,
                        question_type_id: '9',
                        answer: this.multiform['controls'].repeatplus['controls'][i]['controls']['answer'].value,
                        difficulty: '0',
                        allow_exact_match: '0',
                        allow_any_text: '0',
                        match_case: '0',
                        minimum_line: '0',
                        array: this.multiform['controls'].repeatplus['controls'][i]['controls']['optionList'].value,
                        question: this.multiform['controls'].repeatplus['controls'][i]['controls']['question'].value,
                        answer_explanation: this.multiform['controls'].repeatplus['controls'][i]['controls']['explain'].value,
                    };
                    this.subQuestionChoice.push(list);
                    if (value == 'add') {
                        if (this.totalsub[this.sectionCount] == null) {
                            this.totalsub[this.sectionCount] = {heading: '', section: []};
                        }
                        this.totalsub[this.sectionCount].section.push({sub: list.sub_question_no,
                            answer: list.answer,
                            typeId: list.question_type_id,
                            quesNo: list.question_no,
                            autoGrade: list.auto_grade,
                            explain: list.answer_explanation,
                            matchCase: list.match_case,
                            option: list.array,
                            array: list.array,
                            question: list.question});
                        console.log(this.subQuestionChoice, 'this.subQuestionChoice');
                    }
                    console.log(this.totalsub, 'this.totalsub array value');
                }
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = {heading: '', section: []};
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: this.multiform['controls'].repeatplus.value.length == 1 ? 0 : 1,
                        sub_questions: this.subQuestionChoice
                    });
                    console.log(this.subQuestion, 'subQuestion');
                } else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = {heading: this.secHeadingArray[i], section: []};
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: this.multiform['controls'].repeatplus.value.length == 1 ? 0 : 1,
                                        sub_questions: this.subQuestionChoice
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    let list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({sub: list.sub_question_no,
                                        answer: list.answer,
                                        typeId: list.question_type_id,
                                        autoGrade: list.auto_grade,
                                        matchCase: list.match_case,
                                        explain: list.answer_explanation,
                                        editor: list?.editor_answer,
                                        quesNo: list.question_no,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question});
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatlink.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                    console.log(this.subQuestion, 'this.subQuestionEdit');
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseInt(a.quesNo) - parseInt(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseInt(a.sub_questions[0].question_no) - parseInt(b.sub_questions[0].question_no));
                }
                console.log(this.subQuestion, 'subQuestion');
                const controlPlus = <UntypedFormArray>this.multiform.controls['repeatplus'];
                for (let i = controlPlus.length; i >= 1; i--) {
                    const controls = controlPlus['controls'][0]['controls']['choiceList'];
                    for (let j = controls.length; j >= 1; j--) {
                        controls.removeAt(j);
                    }
                    controlPlus.reset();
                    this.multiform['controls'].repeatplus['controls'][0]['controls']['points'].patchValue('1');
                    this.multiform['controls'].repeatplus['controls'][0]['controls']['autograde'].patchValue(true);
                    controlPlus.removeAt(i);
                }
                this.hide = true;
                this.choiceDialog = false;
                this.clickEvent();
            } else {
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }, 500);
    }
    gettingQuestionChoiceList(id){
        for (let i = 0; i < this.multiform['controls'].repeatplus['controls'].length; i++) {
            if (id == i) {
                let arr = [];
                console.log(this.multiform['controls'].repeatplus['controls'][id]['controls']['choiceList']['controls'][0], 'enter as');
                for (let j = 0 ; j < this.multiform['controls'].repeatplus['controls'][id]['controls']['choiceList'].length; j++) {
                    arr.push(this.multiform['controls'].repeatplus['controls'][id]['controls']['choiceList']['controls'][j].value);
                }
                console.log(arr, 'choice');
                this.multiform['controls'].repeatplus['controls'][id]['controls']['optionList'].patchValue(arr);
                console.log(this.multiform['controls'].repeatplus['controls'][id]['controls']['optionList'].value, 'listData');
            }
        }
        // this.multiform['controls'].repeatplus['controls'][li]['controls']['optionList']['controls'][id]['controls'].patchValue(array.get('choiceList')['controls'][id]['controls'].value);
    }
    gettingChoiceAnswer(event, id) {
        console.log(event, 'event index');
        console.log(event.target, 'event index target');
        console.log(event.target.value);
        const val = this.multiform['controls'].repeatplus['controls'][id]['controls']['optionList'].value;
        for (let j = 0; j < val.length; j++) {
            if (event.target.value == val[j].choice) {
                this.multiform['controls'].repeatplus['controls'][id]['controls']['answer'].patchValue(val[j].choice);
                this.multiform['controls'].repeatplus['controls'][id]['controls']['active'].patchValue(j + 1);
                console.log(this.multiform['controls'].repeatplus['controls'][id]['controls']['answer'].value, 'ans value');
                console.log(this.multiform['controls'].repeatplus['controls'][id]['controls']['active'].value, 'active value');
            }
        }
        // for (let i = 0; i < this.multiform['controls'].repeatplus['controls'].length; i++) {
        //
        // }
    }
    submitchoose(value) {
        setTimeout(() => {
            if (this.multiform['controls'].repeatchoose.valid && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionChoose = [];
                let list;
                let changedQuesNo = this.countList;
                for (let i = 0; i < this.multiform['controls'].repeatchoose.value.length; i++) {
                    let list11 = ((i+1) + 9).toString(36).toLowerCase();
                    const trueVal = this.multiform['controls'].repeatchoose['controls'][i]['controls']['optradio'].value;
                    list = {
                        options: 'true, false',
                        points: this.multiform['controls'].repeatchoose['controls'][i]['controls']['points1'].value,
                        auto_grade: this.multiform['controls'].repeatchoose['controls'][i]['controls']['autograde'].value == true ? '1' : '0',
                        question: this.multiform['controls'].repeatchoose['controls'][i]['controls']['question'].value,
                        answer_explanation: this.multiform['controls'].repeatchoose['controls'][i]['controls']['explain'].value,
                        question_no: this.countList,
                        sub_question_no: this.hide == false ? this.countList + list11 : this.countList,
                        question_type_id: '3',
                        difficulty: '0',
                        allow_exact_match: '0',
                        allow_any_text: '0',
                        match_case: '0',
                        array: [],
                        minimum_line: '0',
                        answer: trueVal,
                    };
                    this.subQuestionChoose.push(list);
                    if (value == 'add') {
                        if (this.totalsub[this.sectionCount] == null) {
                            this.totalsub[this.sectionCount] = {heading: '', section: []};
                        }
                        this.totalsub[this.sectionCount].section.push({sub: list.sub_question_no,
                            answer: list.answer,
                            typeId: list.question_type_id,
                            autoGrade: list.auto_grade,
                            matchCase: list.match_case,
                            explain: list.answer_explanation,
                            quesNo: list.question_no,
                            option: list.options,
                            array: list.array,
                            question: list.question});
                        console.log(this.totalsub, 'this.totalsub add');
                    }
                }
                console.log(this.subQuestionChoose, 'subQuestionChoose');
                console.log(this.multiform['controls'].repeatchoose.value, 'subQuestionMulti');
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = {heading: '', section: []};
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: this.multiform['controls'].repeatchoose.value.length == 1 ? 0 : 1,
                        sub_questions: this.subQuestionChoose
                    });
                    console.log(this.subQuestion, 'subQuestion');
                } else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = {heading: this.secHeadingArray[i], section: []};
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: this.multiform['controls'].repeatchoose.value.length == 1 ? 0 : 1,
                                        sub_questions: this.subQuestionChoose
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    let list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({sub: list.sub_question_no,
                                        answer: list.answer,
                                        typeId: list.question_type_id,
                                        quesNo: list.question_no,
                                        autoGrade: list.auto_grade,
                                        explain: list.answer_explanation,
                                        editor: list?.editor_answer,
                                        matchCase: list.match_case,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question});
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatlink.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                    console.log(this.subQuestion, 'this.subQuestionEdit');
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseInt(a.quesNo) - parseInt(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseInt(a.sub_questions[0].question_no) - parseInt(b.sub_questions[0].question_no));
                }
                const controlChoose = <UntypedFormArray>this.multiform.controls['repeatchoose'];
                for (let i = controlChoose.length; i >= 1; i--) {
                    controlChoose.reset();
                    this.multiform['controls'].repeatchoose['controls'][0]['controls']['points1'].patchValue('1');
                    this.multiform['controls'].repeatchoose['controls'][0]['controls']['autograde'].patchValue(true);
                    controlChoose.removeAt(i);
                }
                this.hide = true;
                this.trueDialog = false;
                this.clickEvent();
            } else {
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }, 500);
    }
    uncheckFalse() {
        // document.getElementById('falseOption').checked = false;
    }
    submitEntry(value) {
        setTimeout(() => {
            if (this.multiform['controls'].repeatentry.valid && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionEntry = [];
                let list;
                let changedQuesNo = this.countList;
                for (let i = 0; i < this.multiform['controls'].repeatentry.value.length; i++) {
                    // this.subDiv = document.getElementById('subEntry').innerText.toLowerCase();
                    let list11 = ((i+1) + 9).toString(36).toLowerCase();

                    list = {
                        match_case: this.multiform['controls'].repeatentry['controls'][i]['controls']['matchCase'].value == true ? '1' : '0',
                        points: this.multiform['controls'].repeatentry['controls'][i]['controls']['points'].value,
                        answer: this.multiform['controls'].repeatentry['controls'][i]['controls']['correct'].value,
                        question: this.multiform['controls'].repeatentry['controls'][i]['controls']['question'].value,
                        answer_explanation: this.multiform['controls'].repeatentry['controls'][i]['controls']['explain'].value,
                        auto_grade: this.multiform['controls'].repeatentry['controls'][i]['controls']['autograde'].value == true ? '1' : '0',
                        question_no: this.countList,
                        sub_question_no: this.hide == false ? this.countList + list11 : this.countList,
                        question_type_id: '10',
                        difficulty: '0',
                        allow_exact_match: '0',
                        allow_any_text: '0',
                        minimum_line: '0',
                        array: [],
                        options: '',
                    };
                    this.subQuestionEntry.push(list);
                    if (value == 'add') {
                        if (this.totalsub[this.sectionCount] == null) {
                            this.totalsub[this.sectionCount] = {heading: '', section: []};
                        }
                        this.totalsub[this.sectionCount].section.push({sub: list.sub_question_no,
                            answer: list.answer,
                            typeId: list.question_type_id,
                            autoGrade: list.auto_grade,
                            explain: list.answer_explanation,
                            matchCase: list.match_case,
                            quesNo: list.question_no,
                            option: list.options,
                            array: list.array,
                            question: list.question});
                        console.log(this.totalsub, 'this.totalsub add');
                    }
                }
                // this.subQuestionMulti = list;
                console.log(this.subQuestionEntry, 'subQuestionEntry1');
                console.log(this.multiform['controls'].repeatentry.value, 'subQuestionEntry');
                // this.showdropdown = true;
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = {heading: '', section: []};
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: this.multiform['controls'].repeatentry.value.length == 1 ? 0 : 1,
                        sub_questions: this.subQuestionEntry
                    });
                    console.log(this.subQuestion, 'subQuestion');
                } else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = {heading: this.secHeadingArray[i], section: []};
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: this.multiform['controls'].repeatentry.value.length == 1 ? 0 : 1,
                                        sub_questions: this.subQuestionEntry
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    let list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({sub: list.sub_question_no,
                                        answer: list.answer,
                                        autoGrade: list.auto_grade,
                                        matchCase: list.match_case,
                                        typeId: list.question_type_id,
                                        explain: list.answer_explanation,
                                        quesNo: list.question_no,
                                        editor: list?.editor_answer,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question});
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatlink.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseInt(a.quesNo) - parseInt(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseInt(a.sub_questions[0].question_no) - parseInt(b.sub_questions[0].question_no));
                }
                console.log(this.subQuestion, 'subQuestion');
                const controlEntry = <UntypedFormArray>this.multiform.controls['repeatentry'];
                for (let i = controlEntry.length; i >= 1; i--) {
                    controlEntry.reset();
                    this.multiform['controls'].repeatentry['controls'][0]['controls']['points'].patchValue('1');
                    this.multiform['controls'].repeatentry['controls'][0]['controls']['autograde'].patchValue(false);
                    controlEntry.removeAt(i);
                }
                this.hide = true;
                this.entryDialog = false;
                this.clickEvent();
            } else {
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }, 500);
    }

    submitBlanks(value) {
        this.blankValid = true;
        console.log(this.fillInArray, 'this.fillInArray');
        for (let i = 0; i < this.fillInArray.length; i++) {
            if (this.fillInArray[i].input.length != 0) {
                this.fillInArray[i].input.forEach((val) => {
                    if (val.value == '') {
                        this.blankValid = false;
                    }
                });
            } else {
                this.blankValid = false;
            }
        }
        setTimeout(() => {
            if (this.multiform['controls'].repeatblanks.valid && this.blankValid && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionBlanks = [];
                let list;
                let changedQuesNo = this.countList;
                console.log(this.multiform['controls'].repeatblanks.value.length, 'blank array length');
                for (let i = 0; i < this.multiform['controls'].repeatblanks.value.length; i++) {
                    let list11 = ((i+1) + 9).toString(36).toLowerCase();

                    list = {
                        match_case: '0',
                        points: this.multiform['controls'].repeatblanks['controls'][i]['controls']['points'].value,
                        answer: this.fillInArray[i].input,
                        question: this.multiform['controls'].repeatblanks['controls'][i]['controls']['question'].value,
                        answer_explanation: this.multiform['controls'].repeatblanks['controls'][i]['controls']['explain'].value,
                        auto_grade: '0',
                        question_no: this.countList,
                        sub_question_no: this.hide == false ? this.countList + list11 : this.countList,
                        question_type_id: '54',
                        difficulty: '0',
                        allow_exact_match: '0',
                        allow_any_text: '0',
                        minimum_line: '0',
                        array: [],
                        options: '',
                    };
                    this.subQuestionBlanks.push(list);
                    if (value == 'add') {
                        if (this.totalsub[this.sectionCount] == null) {
                            this.totalsub[this.sectionCount] = {heading: '', section: []};
                        }
                        this.totalsub[this.sectionCount].section.push({sub: list.sub_question_no,
                            answer: list.answer,
                            typeId: list.question_type_id,
                            autoGrade: list.auto_grade,
                            matchCase: list.match_case,
                            explain: list.answer_explanation,
                            quesNo: list.question_no,
                            option: list.options,
                            array: list.array,
                            question: list.question});
                        console.log(this.totalsub, 'this.totalsub add');
                    }
                }
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = {heading: '', section: []};
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: this.multiform['controls'].repeatblanks.value.length == 1 ? 0 : 1,
                        sub_questions: this.subQuestionBlanks
                    });
                } else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = {heading: this.secHeadingArray[i], section: []};
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: this.multiform['controls'].repeatblanks.value.length == 1 ? 0 : 1,
                                        sub_questions: this.subQuestionBlanks
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    let list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({sub: list.sub_question_no,
                                        answer: list.answer,
                                        autoGrade: list.auto_grade,
                                        matchCase: list.match_case,
                                        typeId: list.question_type_id,
                                        explain: list.answer_explanation,
                                        quesNo: list.question_no,
                                        editor: list?.editor_answer,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question});
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatlink.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseInt(a.quesNo) - parseInt(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseInt(a.sub_questions[0].question_no) - parseInt(b.sub_questions[0].question_no));
                }
                console.log(this.subQuestion, 'subQuestion');
                const controlBlanks = <UntypedFormArray>this.multiform.controls['repeatblanks'];
                for (let i = controlBlanks.length; i >= 1; i--) {
                    controlBlanks.reset();
                    this.multiform['controls'].repeatblanks['controls'][0]['controls']['points'].patchValue('1');
                    this.multiform['controls'].repeatblanks['controls'][0]['controls']['autograde'].patchValue(false);
                    controlBlanks.removeAt(i);
                }
                this.hide = true;
                this.blankDialog = false;
                this.fillInArray = [];
                this.clickEvent();
            } else if (!this.blankValid) {
                this.toastr.error('Question and Answers are Mandatory Fields');
            }
            else {
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }, 500);
    }
    getSub(event){
        this.subtype = event.target.textContent;
        console.log(this.subtype, 'ssub');
    }
    deleteImg(){
        this.imagepath = '';
    }
    submitEssay(value) {
        setTimeout(() => {
            if (this.multiform['controls'].repeatessay.valid  && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionEssay = [];
                let list;
                let changedQuesNo = this.countList;
                console.log(this.multiform['controls'].repeatessay.value, 'listlist');
                for (let i = 0; i < this.multiform['controls'].repeatessay.value.length; i++) {
                    let list11 = ((i+1) + 9).toString(36).toLowerCase();
                    list = {
                        options: this.multiform['controls'].repeatessay['controls'][i]['controls']['lines'].value,
                        points: this.multiform['controls'].repeatessay['controls'][i]['controls']['points'].value,
                        question_no: this.countList,
                        sub_question_no: this.hide == false ? this.countList + list11 : this.countList,
                        question_type_id: '20',
                        answer: this.multiform['controls'].repeatessay['controls'][i]['controls']['lines'].value,
                        difficulty: '0',
                        allow_exact_match: '0',
                        allow_any_text: '0',
                        match_case: '0',
                        minimum_line: this.multiform['controls'].repeatessay['controls'][i]['controls']['lines'].value,
                        question: this.multiform['controls'].repeatessay['controls'][i]['controls']['question'].value,
                        answer_explanation: this.multiform['controls'].repeatessay['controls'][i]['controls']['explain'].value,
                        auto_grade: this.multiform['controls'].repeatessay['controls'][i]['controls']['autograde'].value == true ? '1' : '0',
                        array: []
                    };
                    this.subQuestionEssay.push(list);
                    if (value == 'add') {
                        if (this.totalsub[this.sectionCount] == null) {
                            this.totalsub[this.sectionCount] = {heading: '', section: []};
                        }
                        this.totalsub[this.sectionCount].section.push({sub: list.sub_question_no,
                            answer: list.answer,
                            typeId: list.question_type_id,
                            quesNo: list.question_no,
                            autoGrade: list.auto_grade,
                            explain: list.answer_explanation,
                            matchCase: list.match_case,
                            option: list.options,
                            array: list.array,
                            question: list.question});
                        console.log(this.totalsub, 'this.totalsub add');
                    }
                }
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = {heading: '', section: []};
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: this.multiform['controls'].repeatessay.value.length == 1 ? 0 : 1,
                        sub_questions: this.subQuestionEssay
                    });
                    console.log(this.subQuestion, 'subQuestion');
                } else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = {heading: this.secHeadingArray[i], section: []};
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: this.multiform['controls'].repeatessay.value.length == 1 ? 0 : 1,
                                        sub_questions: this.subQuestionEssay
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    let list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({sub: list.sub_question_no,
                                        answer: list.answer,
                                        typeId: list.question_type_id,
                                        quesNo: list.question_no,
                                        autoGrade: list.auto_grade,
                                        explain: list.answer_explanation,
                                        matchCase: list.match_case,
                                        editor: list?.editor_answer,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question});
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatlink.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseInt(a.quesNo) - parseInt(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseInt(a.sub_questions[0].question_no) - parseInt(b.sub_questions[0].question_no));
                }
                console.log(this.subQuestion, 'subQuestion');
                const controlEssay = <UntypedFormArray>this.multiform.controls['repeatessay'];
                for (let i = controlEssay.length; i >= 1; i--) {
                    controlEssay.reset();
                    this.multiform['controls'].repeatessay['controls'][0]['controls']['points'].patchValue('1');
                    this.multiform['controls'].repeatessay['controls'][0]['controls']['autograde'].patchValue(false);
                    controlEssay.removeAt(i);
                }
                this.hide = true;
                this.essayDialog = false;
                this.clickEvent();
            } else {
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }, 500);
    }
    submitNumeric(value) {
        setTimeout(() => {
            if (this.multiform['controls'].repeatnumeric.valid && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionNumeric = [];
                let list;
                let changedQuesNo = this.countList;
                console.log(this.multiform['controls'].repeatnumeric.value, 'listlist');
                for (let i = 0; i < this.multiform['controls'].repeatnumeric.value.length; i++) {
                    console.log(this.multiform['controls'].repeatnumeric['controls'][i]['controls']['answer'].value, 'during submit');
                    let list11 = ((i+1) + 9).toString(36).toLowerCase();
                    list = {
                        options: '',
                        points: this.multiform['controls'].repeatnumeric['controls'][i]['controls']['points'].value,
                        question_no: this.countList,
                        sub_question_no: this.hide == false ? this.countList + list11 : this.countList,
                        question_type_id: '30',
                        answer: this.multiform['controls'].repeatnumeric['controls'][i]['controls']['answer'].value,
                        difficulty: '0',
                        allow_exact_match: '0',
                        allow_any_text: '0',
                        match_case: '0',
                        minimum_line: '0',
                        question: this.multiform['controls'].repeatnumeric['controls'][i]['controls']['question'].value,
                        answer_explanation: this.multiform['controls'].repeatnumeric['controls'][i]['controls']['explain'].value,
                        auto_grade: '0',
                        array: []
                    };
                    this.subQuestionNumeric.push(list);
                    console.log(this.subQuestionNumeric, 'numeric');
                    if (value == 'add') {
                        if (this.totalsub[this.sectionCount] == null) {
                            this.totalsub[this.sectionCount] = {heading: '', section: []};
                        }
                        this.totalsub[this.sectionCount].section.push({sub: list.sub_question_no,
                            answer: list.answer,
                            typeId: list.question_type_id,
                            autoGrade: list.auto_grade,
                            explain: list.answer_explanation,
                            matchCase: list.match_case,
                            quesNo: list.question_no,
                            option: list.options,
                            array: list.array,
                            question: list.question});
                        console.log(this.totalsub, 'this.totalsub add');
                    }
                }
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = {heading: '', section: []};
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: this.multiform['controls'].repeatnumeric.value.length == 1 ? 0 : 1,
                        sub_questions: this.subQuestionNumeric
                    });
                    console.log(this.subQuestion, 'subQuestion');
                } else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = {heading: this.secHeadingArray[i], section: []};
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: this.multiform['controls'].repeatnumeric.value.length == 1 ? 0 : 1,
                                        sub_questions: this.subQuestionNumeric
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    let list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({sub: list.sub_question_no,
                                        answer: list.answer,
                                        typeId: list.question_type_id,
                                        autoGrade: list.auto_grade,
                                        editor: list?.editor_answer,
                                        matchCase: list.match_case,
                                        explain: list.answer_explanation,
                                        quesNo: list.question_no,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question});
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatlink.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseInt(a.quesNo) - parseInt(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseInt(a.sub_questions[0].question_no) - parseInt(b.sub_questions[0].question_no));
                }
                console.log(this.subQuestion, 'subQuestion');
                const controlNumeric = <UntypedFormArray>this.multiform.controls['repeatnumeric'];
                for (let i = controlNumeric.length; i >= 1; i--) {
                    controlNumeric.reset();
                    this.multiform['controls'].repeatnumeric['controls'][0]['controls']['points'].patchValue('1');
                    this.multiform['controls'].repeatnumeric['controls'][0]['controls']['autograde'].patchValue(true);
                    controlNumeric.removeAt(i);
                }
                this.hide = true;
                this.numericDialog = false;
                this.clickEvent();
            } else {
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }, 500);
    }
    clickEvent(){
        setTimeout( () => {
            document.getElementById('myDiv').click();
        } , 1000);
    }
    submitGraph(value) {
        setTimeout(() => {
            if (this.graphform.valid && this.graphBoardValue.attr && !this.quesNoInvalid) {
                this.showdropdown = true;
                this.subQuestionGraph = [];
                let list;
                let changedQuesNo = this.countList;
                const objects = {};
                for (const el in this.graphBoardValue.objects) {
                    const inherit = [];
                    this.graphBoardValue.objects[el].inherits.forEach((item) => {
                        inherit.push({name: item.name});
                    });
                    objects[el] = {
                        elType: this.graphBoardValue.objects[el].elType,
                        coords: this.graphBoardValue.objects[el].coords,
                        name: this.graphBoardValue.objects[el].name,
                        inherits : inherit,
                        parents: this.graphBoardValue.objects[el].parents,
                        splinePoints: this.graphBoardValue.objects[el].splinePoints,
                        quadraticform: this.graphBoardValue.objects[el].quadraticform,
                    };
                }
                const graph = {
                    attr: this.graphBoardValue.attr,
                    objects
                };
                console.log(graph, 'beforeStringify');
                this.graphform.controls.answer.patchValue(stringify(graph));
                console.log(this.graphform.controls.answer.value, 'afterStringify');
                // let list11 = ((i + 1) + 9).toString(36).toLowerCase();
                list = {
                    options: '',
                    points: this.graphform.controls.points.value,
                    question_no: this.countList,
                    sub_question_no: this.countList,
                    question_type_id: '40',
                    answer: this.graphform.controls.answer.value,
                    difficulty: '0',
                    allow_exact_match: '0',
                    allow_any_text: '0',
                    match_case: '0',
                    minimum_line: '0',
                    editor_answer: this.graphform.controls.editorAnswer.value,
                    question: this.graphform.controls.question.value,
                    answer_explanation: this.graphform.controls.explain.value,
                    auto_grade: '0',
                    array: []
                };
                this.subQuestionGraph.push(list);
                console.log(this.subQuestionGraph, 'numeric');
                if (value == 'add') {
                    if (this.totalsub[this.sectionCount] == null) {
                        this.totalsub[this.sectionCount] = {heading: '', section: []};
                    }
                    this.totalsub[this.sectionCount].section.push({sub: list.sub_question_no,
                        answer: list.answer,
                        typeId: list.question_type_id,
                        autoGrade: list.auto_grade,
                        matchCase: list.match_case,
                        explain: list.answer_explanation,
                        quesNo: list.question_no,
                        option: list.options,
                        array: list.array,
                        editor: list.editor_answer,
                        question: list.question});
                }
                // }
                if (value == 'add') {
                    if (this.subQuestion[this.sectionCount] == null) {
                        this.subQuestion[this.sectionCount] = {heading: '', section: []};
                    }
                    this.subQuestion[this.sectionCount].section.push({
                        has_sub_question: 0,
                        sub_questions: this.subQuestionGraph
                    });
                    console.log(this.subQuestion, 'subQuestion');
                } else if (value == 'edit') {
                    for (let i = 0; i < this.subQuestion.length; i++) {
                        if (this.sectionNo == i) {
                            this.totalsub[i] = {heading: this.secHeadingArray[i], section: []};
                            for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                                if (this.subQuestion[i].section[x].sub_questions[0].question_no == this.editQuesNo) {
                                    this.subQuestion[i].section[x] = {
                                        has_sub_question: 0,
                                        sub_questions: this.subQuestionGraph
                                    };
                                }
                                for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                    const list = this.subQuestion[i].section[x].sub_questions[j];
                                    this.totalsub[i].section.push({sub: list.sub_question_no,
                                        answer: list.answer,
                                        typeId: list.question_type_id,
                                        autoGrade: list.auto_grade,
                                        matchCase: list.match_case,
                                        editor: list?.editor_answer,
                                        quesNo: list.question_no,
                                        explain: list.answer_explanation,
                                        option: list.options,
                                        array: list.array,
                                        question: list.question});
                                }
                                this.dragQuestionRevise(this.multiform['controls'].repeatlink.value.length, changedQuesNo);
                            }
                        }
                    }
                    if (this.sectionCount != this.sectionNo) {
                        this.dragCount = [];
                        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                        }
                        for (let i = 0; i < this.reloadQues; i++) {
                            const num = i + 1;
                            this.dragCount.push(num);
                        }
                    }
                }
                for (let i = 0; i < this.totalsub.length; i++) {
                    this.totalsub[i].section.sort((a, b) => parseInt(a.quesNo) - parseInt(b.quesNo));
                }
                for (let i = 0; i < this.subQuestion.length; i++) {
                    this.subQuestion[i].section.sort((a, b) => parseInt(a.sub_questions[0].question_no) - parseInt(b.sub_questions[0].question_no));
                }
                console.log(this.subQuestion, 'subQuestion');
                // const controlGraph = <FormArray>this.multiform.controls['repeatgraph'];
                // for (let i = controlGraph.length; i >= 1; i--) {
                //     controlGraph.reset();
                //     this.multiform['controls'].repeatgraph['controls'][0]['controls']['points'].patchValue('1');
                //     this.multiform['controls'].repeatgraph['controls'][0]['controls']['autograde'].patchValue(true);
                //     controlGraph.removeAt(i);
                // }
                this.hide = true;
                this.graphDialog = false;
                this.clickEvent();
            } else {
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        }, 500);

    }
    updateGraphValue(type) {
        // this.childGraph.submitValue();
        this.submitGraph(type);
    }
    graphDetail(val) {
        this.graphShow = parse(val);
        this.modalRef = this.modalService.open(this.viewGraph,  {size: 'lg', backdrop: 'static'});
    }

    getEmitedValue(event){
        this.markType = event;
    }
    getGraphQuestionValue(event, id) {
        this.graphQuestion[id] = event;
        this.graphform.controls.question.patchValue(event.content);
    }
    getGraphAnswerValue(event) {
        this.graphBoardValue = event;
    }
    getEditorAnswerValue(event) {
        this.graphEditorAnswerValue = event;
        if (this.graphform.controls) {
            this.graphform.controls.editorAnswer.patchValue(event.content);
        }
    }
    getQuestionValue(event, id, formarray) {
        this.numericQuestion[id] = event;
        if (formarray[id]) {
            formarray[id]['controls']['question'].patchValue(event.content);
        }
    }
    getExplanationValue(event, id, formarray) {
        this.numericExplain[id] = event;
        if (formarray[id]) {
            formarray[id]['controls']['explain'].patchValue(event.content);
        }
    }
    getGraphExplain(event, id) {
        this.numericExplain[id] = event;
        if (this.graphform.controls) {
            this.graphform.controls.explain.patchValue(event.content);
        }
    }
    getFillinQuestionValue(event, id) {
        if (!this.deleteFillBlanks) {
            this.numericQuestion[id] = event;
            if (this.multiform.get('repeatblanks')['controls'][id]) {
                this.multiform.get('repeatblanks')['controls'][id]['controls']['question'].patchValue(this.numericQuestion[id].content);
            }
            // this.multiform?.controls?.repeatblanks[id]?.controls?.question.patchValue(event.content);
            let val = event.content.split(' ');
            let count = 0;
            if (this.fillInArray[id]) {
            } else {
                this.fillInArray[id] = {input: []};
            }
            val.forEach((item, index) => {
                if (item == 'class="inputValue"') {
                    count += 1;
                    if (count > this.fillInArray[id].input.length) {
                        this.fillInArray[id].input.push({id: index + '-input', index, value: ''});
                    }
                }
            });
            let spl = this.fillInArray[id].input.length - count;
            if (spl != 0) {
                this.fillInArray[id].input.splice(this.fillInArray[id].input.length - 1, spl);
            }
        }
    }

    getNumericAnswerValue(event, id) {
        this.numericAnswer[id] = event;
        if (this.multiform['controls']?.repeatnumeric['controls'][id]) {
            this.multiform['controls']?.repeatnumeric['controls'][id]['controls']['answer']?.patchValue(event.content);
        }
    }

    async editAction(no, id, event, data, section, index) {
        this.numericQuestion = [];
        this.numericExplain = [];
        this.deleteFillBlanks = false;
        // this.shapesType = '';
        this.fillInArray = [];
        this.submitType = 'edit';
        this.editIndexValue = index;
        this.editQuesNo = no;
        this.sectionNo = section;
        this.countList = no;
        if (id == '1') {
            this.multiDialog = true;
            this.showdropdown = true;
            const controlmulti = <UntypedFormArray>this.multiform.controls['repeatlink'];
            for (let i = controlmulti.length; i >= 0; i--) {
                controlmulti.reset();
                controlmulti.removeAt(i);
            }
            // this.countList = this.dragCount.length + 1;
        } else if (id == '3') {
            // this.countList = this.dragCount.length + 1;
            this.trueDialog = true;
            this.showdropdown = true;
            const controlChoose = <UntypedFormArray>this.multiform.controls['repeatchoose'];
            for (let i = controlChoose.length; i >= 0; i--) {
                controlChoose.reset();
                controlChoose.removeAt(i);
            }
        } else if (id == '9') {
            // this.countList = this.dragCount.length + 1;
            this.choiceDialog = true;
            this.showdropdown = true;
            const controlPlus = <UntypedFormArray>this.multiform.controls['repeatplus'];
            for (let i = controlPlus.length; i >= 0; i--) {
                controlPlus.reset();
                controlPlus.removeAt(i);
            }
        } else if (id == '10') {
            // this.countList = this.dragCount.length + 1;
            this.entryDialog = true;
            this.showdropdown = true;
            const controlEntry = <UntypedFormArray>this.multiform.controls['repeatentry'];
            for (let i = controlEntry.length; i >= 0; i--) {
                controlEntry.reset();
                controlEntry.removeAt(i);
            }
        } else if (id == '20') {
            // this.countList = this.dragCount.length + 1;
            this.essayDialog = true;
            this.showdropdown = true;
            const controlEssay = <UntypedFormArray>this.multiform.controls['repeatessay'];
            for (let i = controlEssay.length; i >= 0; i--) {
                controlEssay.removeAt(i);
            }
        } else if (id == '30') {
            // this.modalRef = this.modalService.open(this.numericData,  {size: 'md', backdrop: 'static'});
            this.numericDialog = true;
            this.showdropdown = true;
            const controlNumeric = <UntypedFormArray>this.multiform.controls['repeatnumeric'];
            for (let i = controlNumeric.length; i >= 0; i--) {
                controlNumeric.removeAt(i);
            }
        } else if (id == '40') {
            this.graphDialog = true;
            this.graphBoardValue = '';
            // this.modalRef = this.modalService.open(this.graph,  {size: 'lg', backdrop: 'static'});
            this.showdropdown = true;
        } else if (id == '54') {
            this.showdropdown = true;
            this.blankDialog = true;
            const controlBlanks = <UntypedFormArray>this.multiform.controls['repeatblanks'];
            for (let i = controlBlanks.length; i >= 0; i--) {
                controlBlanks.removeAt(i);
            }
        }
        let valid = 0;
        for (let i = 0; i < event.length; i++) {
            valid +=1;
            if (section == i) {
                for (let x = 0; x < event[i].section.length; x++) {
                    for (let j = 0; j < event[i].section[x].sub_questions.length; j++) {
                        if (no == event[i].section[x].sub_questions[j].question_no) {
                            this.InitialArrayLength = event[i].section[x].sub_questions.length;
                            if (event[i].section[x].sub_questions.length > 1) {
                                this.hide = false;
                            }
                            if (id == '1') {
                                this.repeatlink = this.multiform.get('repeatlink') as UntypedFormArray;
                                this.repeatlink.push(this.createlink());
                                this.multiform['controls'].repeatlink['controls'][j]['controls']['option'].patchValue(event[i].section[x].sub_questions[j].options);
                                this.multiform['controls'].repeatlink['controls'][j]['controls']['points'].patchValue(event[i].section[x].sub_questions[j].points);
                                this.multiform['controls'].repeatlink['controls'][j]['controls']['array'].patchValue(event[i].section[x].sub_questions[j].array);
                                this.multiform['controls'].repeatlink['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                this.multiform['controls'].repeatlink['controls'][j]['controls']['autograde'].patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                                this.multiform['controls'].repeatlink['controls'][j]['controls']['array'].value.forEach((val, activid) => {
                                    if(val == event[i].section[x].sub_questions[j].answer) {
                                        this.multiform['controls'].repeatlink['controls'][j]['controls']['active'].patchValue(activid);
                                        this.multiform['controls'].repeatlink['controls'][j]['controls']['correct'].patchValue(val);
                                    }
                                });

                            } else if (id == '3') {
                                this.repeatchoose = this.multiform.get('repeatchoose') as UntypedFormArray;
                                this.repeatchoose.push(this.createchoose());
                                this.multiform['controls'].repeatchoose['controls'][j]['controls']['optradio'].patchValue(event[i].section[x].sub_questions[j].answer);
                                this.multiform['controls'].repeatchoose['controls'][j]['controls']['points1'].patchValue(event[i].section[x].sub_questions[j].points);
                                this.multiform['controls'].repeatchoose['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                this.multiform['controls'].repeatchoose['controls'][j]['controls']['autograde'].patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                            } else if (id == '9') {
                                this.repeatplus = this.multiform.get('repeatplus') as UntypedFormArray;
                                this.repeatplus.push(this.truelink());
                                this.repeattotalplus = this.multiform['controls'].repeatplus['controls'][j]['controls']['choiceList']['controls'] as UntypedFormArray;
                                for (let k = 0 ; k < event[i].section[x].sub_questions[j].array.length - 1; k++) {
                                    this.repeattotalplus.push(this.addlink());
                                }
                                let answerOptionList = [];
                                for (let k = 0 ; k < event[i].section[x].sub_questions[j].array.length; k++) {
                                    const val = event[i].section[x].sub_questions[j].array[k].choice;
                                    this.repeattotalplus[k]['controls'].choice.patchValue(val);
                                    answerOptionList.push({choice: val});
                                }
                                this.multiform['controls'].repeatplus['controls'][j]['controls']['optionList']['controls'] = [];
                                this.multiform['controls'].repeatplus['controls'][j]['controls']['autograde'].patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                                this.multiform['controls'].repeatplus['controls'][j]['controls'].optionList.patchValue(answerOptionList);
                                for ( let z = 0; z < this.multiform['controls'].repeatplus['controls'][j]['controls']['optionList'].value.length; z++) {
                                    const correct = this.multiform['controls'].repeatplus['controls'][j]['controls']['optionList'].value[z];
                                    if (correct.choice == event[i].section[x].sub_questions[j].answer) {
                                        this.multiform['controls'].repeatplus['controls'][j]['controls']['active'].patchValue(z);
                                        this.multiform['controls'].repeatplus['controls'][j]['controls']['answer'].patchValue(event[i].section[x].sub_questions[j].answer);
                                    }
                                }
                                // this.multiform['controls'].repeatlink['controls'][j]['controls']['optionList']['controls'].forEach((val, activid) => {
                                //     console.log(val);
                                //     console.log(activid);
                                //     console.log(event[i].sub_questions[j].answer);
                                //     if (val == event[i].sub_questions[j].answer) {
                                //         this.multiform['controls'].repeatlink['controls'][j]['controls']['active'].patchValue(activid);
                                //         this.multiform['controls'].repeatlink['controls'][j]['controls']['answer'].patchValue(val);
                                //     }
                                // });
                                this.multiform['controls'].repeatplus['controls'][j]['controls']['points'].patchValue(event[i].section[x].sub_questions[j].points);
                                this.multiform['controls'].repeatplus['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                            } else if (id == '10') {
                                this.repeatentry = this.multiform.get('repeatentry') as UntypedFormArray;
                                this.repeatentry.push(this.createentry());
                                this.multiform['controls'].repeatentry['controls'][j]['controls']['correct'].patchValue(event[i].section[x].sub_questions[j].answer);
                                this.multiform['controls'].repeatentry['controls'][j]['controls']['points'].patchValue(event[i].section[x].sub_questions[j].points);
                                this.multiform['controls'].repeatentry['controls'][j]['controls']['matchCase'].patchValue(event[i].section[x].sub_questions[j].match_case == '1');
                                this.multiform['controls'].repeatentry['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                this.multiform['controls'].repeatentry['controls'][j]['controls']['autograde'].patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                            } else if (id == '20') {
                                this.repeatessay = this.multiform.get('repeatessay') as UntypedFormArray;
                                this.repeatessay.push(this.createessay());
                                this.multiform['controls'].repeatessay['controls'][j]['controls']['lines'].patchValue(event[i].section[x].sub_questions[j].minimum_line);
                                this.multiform['controls'].repeatessay['controls'][j]['controls']['points'].patchValue(event[i].section[x].sub_questions[j].points);
                                this.multiform['controls'].repeatessay['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                this.multiform['controls'].repeatessay['controls'][j]['controls']['autograde'].patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                            } else if (id == '30') {
                                this.repeatnumeric = this.multiform.get('repeatnumeric') as UntypedFormArray;
                                this.repeatnumeric.push(this.createnumeric());
                                this.multiform['controls'].repeatnumeric['controls'][j]['controls']['answer'].patchValue(event[i].section[x].sub_questions[j].answer);
                                this.multiform['controls'].repeatnumeric['controls'][j]['controls']['points'].patchValue(event[i].section[x].sub_questions[j].points);
                                this.multiform['controls'].repeatnumeric['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                this.multiform['controls'].repeatnumeric['controls'][j]['controls']['autograde'].patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                            } else if (id == '40') {
                                console.log(event[i].section[x].sub_questions[j].editor_answer, 'editorAns');
                                this.graphBoardValue = parse(event[i].section[x].sub_questions[j].answer);
                                this.graphform.controls.answer.patchValue(event[i].section[x].sub_questions[j].answer);
                                this.graphform.controls.points.patchValue(event[i].section[x].sub_questions[j].points);
                                this.graphform.controls.question.patchValue(event[i].section[x].sub_questions[j].question);
                                this.graphform.controls.editorAnswer.patchValue(event[i].section[x].sub_questions[j].editor_answer);
                                this.graphform.controls.autograde.patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                            } else if (id == '54') {
                                this.repeatblanks = this.multiform.get('repeatblanks') as UntypedFormArray;
                                this.repeatblanks.push(this.createblanks());
                                this.multiform['controls'].repeatblanks['controls'][j]['controls']['answer'].patchValue(event[i].section[x].sub_questions[j].answer);
                                this.multiform['controls'].repeatblanks['controls'][j]['controls']['points'].patchValue(event[i].section[x].sub_questions[j].points);
                                this.multiform['controls'].repeatblanks['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                this.multiform['controls'].repeatblanks['controls'][j]['controls']['autograde'].patchValue(event[i].section[x].sub_questions[j].auto_grade == '1');
                            }
                        }
                    }
                }
            }
        }
        if (valid == event.length){
            this.secondFunction(no, id, event, data, section, index);

        }



    }

    // 2. Create an async function
    async secondFunction(no, id, event, data, section, index) {
        // 3. Await for the first function to complete
        // let result = await this.firstFunction(no, id, event, data, section, index)
        this.patchNumereic(no, id, event, data, section, index);

    }



    async patchNumereic(no, id, event, data, section, index) {
        setTimeout(() => {
            for (let i = 0; i < event.length; i++) {
                if (section == i) {
                    for (let x = 0; x < event[i].section.length; x++) {
                        for (let j = 0; j < event[i].section[x].sub_questions.length; j++) {
                            if (no == event[i].section[x].sub_questions[j].question_no) {
                                if (id != '40') {
                                    console.log(this.numericQuestion[j], 'this.numericQuestion[j]');
                                    this.numericQuestion[j]?.editor.setContent(event[i].section[x].sub_questions[j].question);
                                    // this.numericQuestion[j]?.content = event[i].section[x].sub_questions[j].question;
                                } else {
                                    console.log(this.graphEditorAnswerValue ,'this.graphEditor');
                                    this.graphEditorAnswerValue.editor.setContent(event[i].section[x].sub_questions[j].editor_answer);
                                    this.graphQuestion[j].editor.setContent(event[i].section[x].sub_questions[j].question);
                                    this.graphQuestion[j].content = event[i].section[x].sub_questions[j].question;
                                }
                                if (id == '30') {
                                    this.numericAnswer[j].editor.setContent(event[i].section[x].sub_questions[j].answer);
                                    this.numericAnswer[j].content = event[i].section[x].sub_questions[j].question;
                                } else if (id == '54') {
                                    this.deleteFillBlanks = false;
                                    this.getFillinQuestionValue(this.numericQuestion[j], j);
                                }
                                this.numericExplain[j]?.editor.setContent(event[i].section[x].sub_questions[j].answer_explanation);
                                if (id == '1') {
                                    this.multiform['controls'].repeatlink['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                    this.multiform['controls'].repeatlink['controls'][j]['controls']['explain'].patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                } else if (id == '3') {
                                    this.multiform['controls'].repeatchoose['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                    this.multiform['controls'].repeatchoose['controls'][j]['controls']['explain'].patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                } else if (id == '9') {
                                    this.multiform['controls'].repeatplus['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                    this.multiform['controls'].repeatplus['controls'][j]['controls']['explain'].patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                } else if (id == '10') {
                                    this.multiform['controls'].repeatentry['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                    this.multiform['controls'].repeatentry['controls'][j]['controls']['explain'].patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                } else if (id == '20') {
                                    this.multiform['controls'].repeatessay['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                    this.multiform['controls'].repeatessay['controls'][j]['controls']['explain'].patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                } else if (id == '30') {
                                    this.multiform['controls'].repeatnumeric['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                    this.multiform['controls'].repeatnumeric['controls'][j]['controls']['answer'].patchValue(event[i].section[x].sub_questions[j].answer);
                                    this.multiform['controls'].repeatnumeric['controls'][j]['controls']['explain'].patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                } else if (id == '40') {
                                    this.graphform.controls.question.patchValue(event[i].section[x].sub_questions[j].question);
                                    this.graphform.controls.explain.patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                    this.graphform.controls.editorAnswer.patchValue(event[i].section[x].sub_questions[j].editor_answer);
                                } else if (id == '54') {
                                    console.log('end');
                                    this.multiform['controls'].repeatblanks['controls'][j]['controls']['question'].patchValue(event[i].section[x].sub_questions[j].question);
                                    this.fillInArray[j].input = event[i].section[x].sub_questions[j].answer;
                                    this.multiform['controls'].repeatblanks['controls'][j]['controls']['answer'].patchValue(event[i].section[x].sub_questions[j].answer);
                                    this.multiform['controls'].repeatblanks['controls'][j]['controls']['explain'].patchValue(event[i].section[x].sub_questions[j].answer_explanation);
                                }
                            }
                        }
                    }
                }
            }
        }, 3000);
    }
    deleteAlertView(no, section){
            this.modalRef = this.modalService.open(this.deleteAlert, {size: 'md', backdrop: 'static'});
            this.deleteID = no;
            this.delSection = section;
    }
    deleteSection(section) {
        // this.shapesType = '';
        this.modalRef = this.modalService.open(this.deleteSectionPopup, {size: 'md', backdrop: 'static'});
        this.delSection = section;
    }
    deleteSectionConfirm(section) {
        this.totalsub.splice(section, 1);
        this.subQuestion.splice(section, 1);
        this.secHeadingArray.splice(section, 1);
        this.modalRef.close();
        this.clickEvent();
    }
    deleteConfirm(no, section){
        this.deleteQues(no, section);
    }
    deleteCancel(){
      this.close();
    }
    deleteSub(array, id) {
        this.deleteFillBlanks = true;
        this.repeatlink = array as UntypedFormArray;
        this.repeatlink.removeAt(id);
        this.numericQuestion.splice(id, 1);
        if (array == this.multiform.get('repeatblanks')) {
            setTimeout(() => {
                const val =  this.fillInArray.filter( (item , index) => {
                    if (index == id){
                        item.input = [];
                    }
                    return index != id;
                });
                this.fillInArray = [];
                this.fillInArray = [...val];
                this.deleteFillBlanks = false;
                console.log(this.fillInArray, 'splice');
            }, 100);
            this.cdr.detectChanges();
        }
        if (array.length == 1) {
            this.hide = true;
        }
        this.cdr.detectChanges();

    }
    deleteQues(no, section) {
        // this.shapesType = '';
        this.sliced = false;
        console.log(this.totalsub, 'totsub');
        console.log(this.subQuestion, 'subQuestion');
        for (let i = 0; i < this.subQuestion.length; i++) {
            if (i == section) {
                for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                    if (this.sliced == false) {
                        this.sliceNo = x + 10;
                    }
                    for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                        if (no == this.subQuestion[i].section[x].sub_questions[j].sub_question_no) {
                            this.slicedQuesNo = this.subQuestion[i].section[x].sub_questions[j].question_no;
                            this.subQuestion[i].section[x].sub_questions.splice(j, 1);
                            this.sliceNo = x;
                            this.sliced = true;
                        }
                    }
                    if (this.subQuestion[i].section[x].sub_questions.length == 0) {
                        this.subQuestion[i].section.splice(x, 1);
                        this.sliceNo = -1;
                    }
                    if (this.sliceNo == x) {
                        if (this.subQuestion[i].section[x] != null) {
                            for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                                const sub = ((j + 1) + 9).toString(36).toLowerCase();
                                this.subQuestion[i].section[x].sub_questions[j].sub_question_no = this.subQuestion[i].section[x].sub_questions.length == 1 ? (this.slicedQuesNo) : (this.slicedQuesNo) + sub;
                                this.subQuestion[i].section[x].sub_questions[j].question_no = this.slicedQuesNo;
                            }
                        }
                    }
                }
            }
        }
        console.log(this.subQuestion, 'this.subQuestionssaa');
        for (let i = 0; i < this.subQuestion.length; i++) {
            if (this.subQuestion[i].section.length == 0) {
                this.subQuestion.splice(i, 1);
                this.secHeadingArray.splice(i, 1);
                if (this.subQuestion.length != 0) {
                    this.sectionCount -= 1;
                } else {
                    this.sectionCount = 0;
                }
            }
        }
        // for (let i = 0; i < this.totalsub.length; i++) {
        //     if (no == this.totalsub[i].sub) {
        //         this.totalsub.splice(i, 1);
        //     }
        // }
        this.totalsub = [];
        if (this.subQuestion.length != 0) {
            for (let i = 0; i < this.subQuestion.length; i++) {
                if (this.totalsub[i] == null) {
                    this.totalsub[i] = {heading: '', section: []};
                }
                for (let x = 0; x < this.subQuestion[i].section.length; x++) {
                    for (let j = 0; j < this.subQuestion[i].section[x].sub_questions.length; j++) {
                        const list = this.subQuestion[i].section[x].sub_questions[j];
                        this.totalsub[i].section.push({sub: list.sub_question_no,
                            answer: list.answer,
                            typeId: list.question_type_id,
                            autoGrade: list.auto_grade,
                            matchCase: list.match_case,
                            quesNo: list.question_no,
                            editor: list?.editor_answer,
                            option: list.options,
                            array: list.array,
                            question: list.question});
                    }
                }
            }
            console.log(this.subQuestion, 'this.subQuestionsss');
            console.log(section, 'sect no');
            console.log(this.sectionCount, 'sectioncount no');
            if (section != this.sectionCount) {
                this.dragCount = [];
                for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                    this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                }
                for (let i = 0; i < this.reloadQues; i++) {
                    const num = i + 1;
                    this.dragCount.push(num);
                }
            }
        }
        this.modalRef.close();
        this.clickEvent();
        console.log(this.subQuestion, 'subQuestion');
    }
    close() {
        this.modalRef.close();
    }
    closeDialog() {
        this.multiDialog = false;
        this.trueDialog = false;
        this.choiceDialog = false;
        this.entryDialog = false;
        this.essayDialog = false;
        this.numericDialog = false;
        this.graphDialog = false;
        this.blankDialog = false;
        this.hide = true;
        this.dragCount = [];
        if (this.subQuestion[this.sectionCount] != null) {
            console.log(this.subQuestion[this.sectionCount], 'in');
            for (let i = 0; i < this.countList - 1; i++) {
                const num = i + 1;
                this.dragCount.push(num);
            }
        }
        console.log(this.dragCount, 'this.dragCount');
        console.log(this.countList, 'count');
        this.numericQuestion = [];
        // const controlGraph = <FormArray> this.multiform.controls['repeatgraph'];
        // for (let i = controlGraph.length; i >= 1; i--) {
        //     controlGraph.reset();
        //     this.multiform['controls'].repeatgraph['controls'][0]['controls']['points'].patchValue('1');
        //     this.multiform['controls'].repeatgraph['controls'][0]['controls']['autograde'].patchValue(true);
        //     controlGraph.removeAt(i);
        // }
    }
    // getcheckedValue(){
    //     let list= [];
    //     for (let i = 0; i < this.multiform['controls'].repeatchoose.value.length; i++) {
    //         list.push({
    //             checkedValue: this.multiform['controls'].repeatchoose['controls'][i]['controls']['optradio'].value == true ? this.multiform['controls'].repeatchoose['controls'][i]['controls']['optradio'].value : false,
    //             points: this.multiform['controls'].repeatchoose['controls'][i]['controls']['points1'].value
    //         });
    //     }
    //     console.log(list, 'list');
    // }

    truefunction(id , index) {
        console.log(event, 'value');
        console.log(id, 'idid');
        for (let i = 0; i < this.multiform['controls'].repeatchoose['controls'].length; i++) {
            if (index == i) {
                // this.itemsList[index].radioSelected = id.radioSelected;
                this.multiform['controls'].repeatchoose['controls'][index]['controls']['optradio'].patchValue(id.target.checked);
                console.log( this.multiform['controls'].repeatchoose['controls'][index]['controls']['optradio'].value, 'correct');
            }
        }
    }
    falsefunction(id , value){
        console.log(id, value , 'Valueeee');
    }

    classList(id) {
        if (id == '1') {
            this.type = 'Description';
        } else if (id == '2') {
            this.type = 'Workspace';
            // this.description();
        } else if (id == '3') {
            this.type = 'Preview';
        }
    }
    deleteAction(){
        this.modalRef = this.modalService.open(this.deleteClass, { size: 'md', backdrop: 'static' });
    }
    getIcons() {
        const data = {
            platform: 'web',
            role_id: this.auth.getSessionData('rista-roleid'),
            user_id: this.auth.getSessionData('rista-userid'),
        };
        this.creator.iconList(data).subscribe( (successData) => {
                this.iconListSuccess(successData);
            },
            (error) => {
                this.iconListFailure(error);
            });
    }
    iconListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            console.log(successData, 'error');
            this.icons = successData.ResponseObject;
            console.log(this.icons, 'icons');
        }
    }
    iconListFailure(error) {
        console.log(error, 'error');
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
        console.log(successData, 'successData');
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
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
        }
    }
    gradeListFailure(error) {
        console.log(error, 'error');
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
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.editData = successData.ResponseObject;
            console.log('constructro');
            // this.auth.setSessionData('rista-editor', JSON.stringify(this.editData));
            this.areaInfo = this.editData.annotation;
            this.dragQuestionsList = this.editData.questionAnnotation;
            console.log(this.areaInfo, 'areaInfo');
            console.log(this.dragQuestionsList, 'dragQuestionsList');
            // this.detailData = [];
            this.showdropdown = true;
            if (this.editData.status == 5) {
                this.draftAdd = 'publish';
            }
            this.subQuestion = this.editData.answers;
            console.log(this.subQuestion, 'subQuestion');
            this.getpdf = this.editData.file_path[0];
            this.showpdf = this.editData.file_path;
            console.log(this.editData, 'answerq');
            for (let i = 0; i < this.editData.answers.length; i++) {
                // this.dragCount = [];
                this.sectionCount = i;
                this.totalsub[i] = {heading: '', section: []};
                this.secHeadingArray[i] = this.editData.answers[i].heading;
                for (let x = 0; x < this.editData.answers[i].section.length; x++) {
                    const ans = this.editData.answers[i].section[x];
                    const num = x + 1;
                    // this.dragCount.push(num);
                    // console.log(this.dragCount, 'arrayCount');
                    for (let j = 0; j < ans.sub_questions.length; j++) {
                        if (ans.sub_questions[j].question_type_id == '3') {
                            this.totalsub[i].section.push({answer: ans.sub_questions[j].answer,
                                sub: ans.sub_questions[j].sub_question_no,
                                typeId: ans.sub_questions[j].question_type_id,
                                autoGrade: ans.sub_questions[j].auto_grade,
                                matchCase: ans.sub_questions[j].match_case,
                                quesNo: ans.sub_questions[j].question_no,
                                explain: ans.sub_questions[j].answer_explanation,
                                question: ans.sub_questions[j].question,
                                array: ans.sub_questions[j].array});
                        } else {
                            this.totalsub[i].section.push({answer: ans.sub_questions[j].answer,
                                sub: ans.sub_questions[j].sub_question_no,
                                typeId: ans.sub_questions[j].question_type_id,
                                autoGrade: ans.sub_questions[j].auto_grade,
                                matchCase: ans.sub_questions[j].match_case,
                                explain: ans.sub_questions[j].answer_explanation,
                                editor: ans?.sub_questions[j]?.editor_answer,
                                quesNo: ans.sub_questions[j].question_no,
                                question: ans.sub_questions[j].question,
                                array: ans.sub_questions[j].array});
                        }
                    }
                    this.reloadQues = this.editData.answers[i].section[x].sub_questions[0].question_no;
                }
            }
            for (let i = 0; i < this.reloadQues; i++) {
                const num = i + 1;
                this.dragCount.push(num);
            }
            if (this.editData?.base64_data){
                this.pdfTemplate = this.editData.base64_data == ''  ? this.webhost + '/' + this.getpdf.original_image_url : this.common.convertBase64PdfPath(this.editData.base64_data);
            }else{
                this.pdfTemplate = this.webhost + '/' + this.getpdf.original_image_url;
            }
            this.multiform.controls.classname.patchValue(this.editData.name);
            this.multiform.controls.description.patchValue(this.editData.description);
            if (this.editData.links != '') {
                const links = this.editData.links;
                for (let i = 0 ; i < links.length; i++) {
                    this.getNewlinks.push({display: links[i], value: links[i]});
                }
            }
            this.multiform.controls.resourcesLink.patchValue(this.getNewlinks);
            if (this.editData.download == '1'){
                this.multiform.controls.downloadContent.patchValue(true);
            }else if (this.editData.download == '0'){
                this.multiform.controls.downloadContent.patchValue(false);
            }
            if (this.editData.tags != '') {
                const tag = this.editData.tags.split(',');
                for (let i = 0 ; i < tag.length; i++) {
                    this.getTag.push({display: tag[i], value: tag[i]});
                }
            }
            this.multiform.controls.tag.patchValue(this.getTag);
            if (this.editData.grade != '') {
                this.gradeSplit = [];
                const grade = this.editData.grade.split(',');
                // for (let i = 0; i < grade.length; i++) {
                //     this.gradeSplit.push(grade[i]);
                // }
                this.gradeSplit = [...grade];
            }
            if (this.editData.subject != '') {
                this.subjectSplit = [];
                const subject = this.editData.subject.split(',');
                for (let i = 0; i < subject.length; i++) {
                    this.subjectSplit.push(subject[i]);
                }
            }
            this.multiform.controls.grade.patchValue(this.gradeSplit);
            this.multiform.controls.subject.patchValue(this.subjectSplit);
            this.multiform.controls.option.patchValue(this.editData.access);
            this.clickEvent();
            console.log('finish');
        }
    }
    detailsFailure(error) {
        console.log(error, 'error');
    }

    assign(value) {
        this.headingSame = false;
        this.headingEmpty = false;
        if ( this.multiform.controls.tag.value != '') {
            this.tagArray = [];
            const tags = this.multiform.controls.tag.value;
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
        }
        if (this.subQuestion != []) {
            for (let i = 0; i < this.subQuestion.length; i++) {
                if (this.subQuestion.length > 1) {
                    if (this.secHeadingArray[i] != null && this.secHeadingArray[i] != '') {
                        this.subQuestion[i].heading = this.secHeadingArray[i];
                    }else if (this.secHeadingArray[i] == null || this.secHeadingArray[i] == '') {
                        document.getElementById('headingNull' + i).hidden = false;
                    }
                    if (document.getElementById('subHeading' + i).hidden == false) {
                        this.headingSame = true;
                    }
                    if (document.getElementById('headingNull' + i).hidden == false) {
                        this.headingEmpty = true;
                    }
                } else {
                    if (this.secHeadingArray[i] != null) {
                        this.subQuestion[i].heading = this.secHeadingArray[i];
                    }
                }
            }
        }

        let areaInfoData = this.areaInfo;
        console.log(this.areaInfo , 'areaInfo');
        areaInfoData =  areaInfoData.filter(item => !item.isDelete);
        // this.areaInfo = this.areaInfo.filter(item => !item.isDelete);
        console.log(areaInfoData , '3');
        this.resourceArray = [];
        const video = this.multiform.controls.resourcesLink.value;
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
            name: this.multiform.controls.classname.value,
            description: this.multiform.controls.description.value,
            grade: this.multiform.controls.grade.value,
            subject: this.multiform.controls.subject.value,
            school_id: this.auth.getSessionData('rista-school_id'),
            file_path: [this.getpdf],
            // links: this.getlinks == null ? [] : this.getlinks,
            links: this.resourceArray,
            file_text: '',
            content_type: this.uploadType == 'assessment' ? '3' : '2',
            tags: this.multiform.controls.tag.value != '' ? this.tagArray : [],
            // annotation: this.areaInfo,
            // annotation: [],
            annotation: areaInfoData,
            questionAnnotation: this.dragQuestionsList,
            // questionAnnotation: [],
            assign: '0',
            classdetails: [],
            content_format: this.getpdf != [] ? '1' : '2' ,
            status: '1',
            profile_url: this.imagepath,
            profile_thumb_url: this.imagepaththumb,
            access: this.multiform.controls.option.value,
            answers: this.subQuestion,
            editor_type: ''
        };
        console.log(data , 'dataa');
        if (this.headingEmpty == false) {
            if (this.headingSame == false) {
                if (this.uploadType == 'assessment') {
                    console.log(this.subQuestion, 'subQuestion');
                    if (value != 'edit') {
                        this.creator.assignAnnotation(data).subscribe( (successData) => {
                                this.assignSuccess(successData);
                            },
                            (error) => {
                                this.assignFailure(error);
                            });
                    } else if (value == 'edit') {
                        data['content_id'] = this.editData.content_id;
                        this.creator.editAssignResourse(data).subscribe( (successData) => {
                                this.assignSuccess(successData);
                            },
                            (error) => {
                                this.assignFailure(error);
                            });
                    }
                } else {
                    if (value != 'edit') {
                        this.creator.assignAnnotation(data).subscribe( (successData) => {
                                this.assignSuccess(successData);
                            },
                            (error) => {
                                this.assignFailure(error);
                            });
                    } else if (value == 'edit') {
                        data['content_id'] = this.editData.content_id;
                        this.creator.editAssignResourse(data).subscribe( (successData) => {
                                this.assignSuccess(successData);
                            },
                            (error) => {
                                this.assignFailure(error);
                            });
                    }
                }
            } else {
                this.toastr.error('Sub heading should not be same');
            }
        } else {
            this.toastr.error('Sub heading should not be Empty');
        }

    }
    assignSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            if (this.assessmentType == 'add') {
                this.toastr.success('Content Created Successfully');
            } else {
                this.toastr.success(successData.ResponseObject);
                this.auth.removeSessionData('rista-editor');
            }
            this.router.navigate(['repository/content-home']);
            console.log(successData, 'vetri');
        } else {
            this.toastr.error(successData.ResponseObject);
        }
    }
    assignFailure(error) {
        console.log(error, 'error');
        if (this.assessmentType == 'add') {
            this.toastr.error('Assessment publish failed');
        } else {
            this.toastr.error('Assessment update failed');
        }
    }
    draft(value) {
        this.headingSame = false;
        this.headingEmpty = false;
        console.log(this.subQuestion, 'subQuestion');
        if ( this.multiform.controls.tag.value != '') {
            this.tagArray = [];
            const tags = this.multiform.controls.tag.value;
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
        }
        if (this.subQuestion != []) {
            for (let i = 0; i < this.subQuestion.length; i++) {
                document.getElementById('headingNull' + i).hidden = true;
                if (this.subQuestion.length > 1) {
                    if (this.secHeadingArray[i] != null && this.secHeadingArray[i] != '') {
                        this.subQuestion[i].heading = this.secHeadingArray[i];
                    }else if (this.secHeadingArray[i] == null || this.secHeadingArray[i] == '') {
                        document.getElementById('headingNull' + i).hidden = false;
                    }
                    if (document.getElementById('subHeading' + i).hidden == false) {
                        this.headingSame = true;
                    }
                    if (document.getElementById('headingNull' + i).hidden == false) {
                        this.headingEmpty = true;
                    }
                } else {
                    if (this.secHeadingArray[i] != null) {
                        this.subQuestion[i].heading = this.secHeadingArray[i];
                    }
                }
            }
        }
        this.resourceArray = [];
        const video = this.multiform.controls.resourcesLink.value;
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
            name: this.multiform.controls.classname.value,
            description: this.multiform.controls.description.value,
            grade: this.multiform.controls.grade.value,
            subject: this.multiform.controls.subject.value,
            school_id: this.auth.getSessionData('rista-school_id'),
            file_path: [this.getpdf],
            // links: this.getlinks == null ? [] : this.getlinks,
            links: this.resourceArray,
            file_text: '',
            content_type: this.uploadType == 'assessment' ? '3' : '2',
            tags: this.multiform.controls.tag.value != '' ? this.tagArray : [] ,
            annotation: this.areaInfo,
            assign: '0',
            classdetails: [],
            content_format: this.getpdf != [] ? '1' : '2' ,
            status: '5',
            profile_url: this.imagepath,
            profile_thumb_url: this.imagepaththumb,
            access: this.multiform.controls.option.value,
            answers: this.subQuestion,
            editor_type: ''
        };
        if (this.headingEmpty == false) {
            if (this.headingSame == false) {
                if (value != 'edit') {
                    this.creator.addDraftResourse(data).subscribe( (successData) => {
                            this.draftSuccess(successData);
                        },
                        (error) => {
                            this.draftFailure(error);
                        });
                } else if (value == 'edit') {
                    data['content_id'] = this.editData.content_id;
                    this.creator.editDraftResourse(data).subscribe( (successData) => {
                            this.draftSuccess(successData);
                        },
                        (error) => {
                            this.draftFailure(error);
                        });
                }
            } else {
                this.toastr.error('Sub heading should not be same');
            }
        } else {
            this.toastr.error('Sub heading should not be empty');
        }
    }
    draftSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            if (this.assessmentType == 'add') {
                if (this.functionCalled == true) {
                    this.toastr.success('Draft created successfully');
                    this.router.navigate(['repository/content-home']);
                }
                console.log(successData.ResponseObject, 'see what');
                this.listDetails(successData.Contentdetails);
                this.functionCalled = true;
                this.classList(2);
            } else {
                this.toastr.success('Draft updated successfully');
                this.auth.removeSessionData('rista-editor');
                this.router.navigate(['repository/content-home']);
            }
            console.log(successData, 'vetri');
        } else {
            this.toastr.error(successData.ResponseObject);
        }
    }
    draftFailure(error) {
        console.log(error, 'error');
        if (this.assessmentType == 'add') {
            this.toastr.error('Draft creation failed');
        } else {
            this.toastr.error('Draft update failed');
        }
    }
    getRandrom(){
        return Math.random();
    }
    question(id) {
        this.deleteFillBlanks = false;
        this.quesNoInvalid = false;
        console.log(this.numericQuestion, 'numric');
        console.log(id, 'question Type');
        if (id == '1') {
            this.multiDialog = true;
            const controlmulti = <UntypedFormArray> this.multiform.controls['repeatlink'];
            for (let i = controlmulti.length; i >= 1; i--) {
                controlmulti.reset();
                this.multiform['controls'].repeatlink['controls'][0]['controls']['points'].patchValue('1');
                this.multiform['controls'].repeatlink['controls'][0]['controls']['autograde'].patchValue(true);
                this.multiform['controls'].repeatlink['controls'][0]['controls']['option'].patchValue('a b c d ');
                this.multiform['controls'].repeatlink['controls'][0]['controls']['array'].patchValue(['a', 'b', 'c', 'd']);
                controlmulti.removeAt(i);
            }
            console.log(this.multiDialog, 'multiDialog');
        } else if (id == '3') {
            this.trueDialog = true;
            const controlChoose = <UntypedFormArray> this.multiform.controls['repeatchoose'];
            for (let i = controlChoose.length; i >= 1; i--) {
                controlChoose.reset();
                this.multiform['controls'].repeatchoose['controls'][0]['controls']['points1'].patchValue('1');
                this.multiform['controls'].repeatchoose['controls'][0]['controls']['autograde'].patchValue(true);
                controlChoose.removeAt(i);
            }
        } else if (id == '9') {
            this.choiceDialog = true;
            const controlPlus = <UntypedFormArray> this.multiform.controls['repeatplus'];
            for (let i = controlPlus.length; i >= 1; i--) {
                const controls = controlPlus['controls'][0]['controls']['choiceList'];
                for (let j = controls.length; j >= 1; j--) {
                    controls.removeAt(j);
                }
                controlPlus.reset();
                this.multiform['controls'].repeatplus['controls'][0]['controls']['points'].patchValue('1');
                this.multiform['controls'].repeatplus['controls'][0]['controls']['autograde'].patchValue(true);
                controlPlus.removeAt(i);
            }

        } else if (id == '10') {
            this.entryDialog = true;
            const controlEntry = <UntypedFormArray> this.multiform.controls['repeatentry'];
            for (let i = controlEntry.length; i >= 1; i--) {
                controlEntry.reset();
                this.multiform['controls'].repeatentry['controls'][0]['controls']['points'].patchValue('1');
                this.multiform['controls'].repeatentry['controls'][0]['controls']['autograde'].patchValue(false);

                controlEntry.removeAt(i);
            }

        } else if (id == '20') {
            this.essayDialog = true;
            const controlEssay = <UntypedFormArray> this.multiform.controls['repeatessay'];
            for (let i = controlEssay.length; i >= 1; i--) {
                controlEssay.reset();
                this.multiform['controls'].repeatessay['controls'][0]['controls']['points'].patchValue('1');
                this.multiform['controls'].repeatessay['controls'][0]['controls']['autograde'].patchValue(false);

                controlEssay.removeAt(i);
            }
        } else if (id == '30') {
            this.numericDialog = true;
            const controlNumeric = <UntypedFormArray> this.multiform.controls['repeatnumeric'];
            for (let i = controlNumeric.length; i >= 1; i--) {
                controlNumeric.reset();
                this.multiform['controls'].repeatnumeric['controls'][0]['controls']['points'].patchValue('1');
                this.multiform['controls'].repeatnumeric['controls'][0]['controls']['autograde'].patchValue(false);
                controlNumeric.removeAt(i);
            }
        } else if (id == '40') {
            this.graphDialog = true;

        } else if (id == '54') {
            this.fillInArray = [];
            this.blankDialog = true;
            const controlBlanks = <UntypedFormArray> this.multiform.controls['repeatblanks'];
            for (let i = controlBlanks.length; i >= 1; i--) {
                controlBlanks.reset();
                this.multiform['controls'].repeatblanks['controls'][0]['controls']['points'].patchValue('1');
                this.multiform['controls'].repeatblanks['controls'][0]['controls']['autograde'].patchValue(false);
                controlBlanks.removeAt(i);
            }
        }
        this.hide = true;
        // this.shapesType = '';
        if (this.subQuestion.length != 0) {
            this.sectionCount = this.subQuestion.length - 1;
        }
        console.log(id);
        this.submitType = 'add';
        console.log(this.subQuestion, 'this.subQuestion');
        this.dragCount = [];
        console.log(this.sectionCount, 'this.sectionCount');
        if (this.subQuestion[this.sectionCount] != null) {
            if (this.subQuestion[this.sectionCount].section.length > 0) {
                console.log('in');
                for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
                    this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
                }
                for (let i = 0; i < this.reloadQues; i++) {
                    const num = i + 1;
                    this.dragCount.push(num);
                }
            }
        }
        console.log(this.dragCount, 'this.dragCount');
        this.countList = this.dragCount.length + 1;
        this.dragCount.push(this.countList);
        this.numericQuestion[0]?.editor.setContent('');
        if (id == '40') {
            this.graphQuestion[0]?.editor.setContent('');
            this.graphform.controls.question.patchValue('');
            this.graphform.controls.answer.patchValue('');
            this.graphBoardValue = '';
        }
        else if (id == '30') {
            this.numericAnswer[0]?.editor.setContent('');
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

    createSpace(id, event) {
        console.log(event, 'event');
        let list;
        if (this.choices != '') {
            this.choices = [];
        }
        if (event.key != 'Backspace') {
            this.multiform['controls'].repeatlink['controls'][id]['controls']['option'].patchValue(this.multiform['controls'].repeatlink['controls'][id]['controls']['option'].value + ' ');
        }
        this.options = this.multiform['controls'].repeatlink['controls'][id]['controls']['option'].value;
        const choose = this.options.split(' ');
        for (let i = 0; i < choose.length; i++) {
            if (choose[i] != null && choose[i] != '') {
                this.choices.push(choose[i]);
                console.log(this.choices, 'this.choices123');
                list = this.choices.filter((val, index) => this.choices.indexOf(val) == index);
                list.forEach((item) => {
                    this.filterListChoices = item.toString().length;
                });

                // this.filterListChoices = 'Not allowed duplicate options';
                console.log(this.filterListChoices, 'this.filterListChoices');
            }
        }
        for (let i = 0; i < this.multiform['controls'].repeatlink['controls'].length; i++) {
            if (id == i) {
                this.multiform['controls'].repeatlink['controls'][id]['controls']['array'].patchValue(list);
            } else {
            }
        }
    }
    subQues(id) {
        for (let i = 0; i < this.multiform['controls'].repeatlink['controls'].length; i++) {
            for (let j = 0; j < this.alphabets.length; j++) {
                if(id == j) {
                    this.multiform['controls'].repeatlink['controls'][id]['controls']['subQuestion'].patchValue(this.alphabets[j]);
                }
            }
        }
    }
    // question List


// number Validation
    numberValidate(event){
        this.validationService.numberValidate(event);
    }

    getOptionVal(event){
        console.log(event.target.value, 'gfjgdghdjhg');
    }

    removechoiceList(index){
        let remove4 = this.multiform.get('repeatplus') as UntypedFormArray;
        for (let i = 0; i < this.multiform['controls'].repeatplus['controls'].length; i++) {
            console.log(this.multiform['controls'].repeatplus['controls'][i]['controls'].optionList.length, 'choicerwrewtreytr');
            if(this.multiform['controls'].repeatplus['controls'][i]['controls'].choiceList.length > 1) {
                this.multiform['controls'].repeatplus['controls'][i]['controls'].choiceList.removeAt(index);
                this.multiform['controls'].repeatplus['controls'][i]['controls'].optionList.value.splice(index, 1);
            }

            // this.multiform['controls'].repeatplus['controls'][i]['controls']['optionList'].value.forEach((element, j)=>{
            //     if(this.multiform['controls'].repeatplus['controls'][i]['controls'].choiceList.length > 1) {
            //         if (j == index) {
            //             this.multiform['controls'].repeatplus['controls'][i]['controls']['optionList'].value.splice(index, 1);
            //         }
            //     }
            // });
        }
    }
    addSec() {
        if (this.subQuestion.length != 0) {
            this.sectionCount = this.subQuestion.length - 1;
            console.log(this.subQuestion, 'subQuesww');
            console.log(this.sectionCount, 'count');
            if (this.subQuestion[this.sectionCount] != null) {
                if (this.subQuestion[this.sectionCount].section.length != 0) {
                    this.dragCount = [];
                    this.sectionCount += 1;
                    console.log(this.sectionCount, 'count');
                    this.totalsub[this.sectionCount] = {heading: '', section: []};
                    this.subQuestion[this.sectionCount] = {heading: '', section: []};
                    this.secHeadingArray[this.sectionCount] = '';
                    console.log(this.subQuestion, 'this.subQuestion');
                }
            }
            setTimeout(() => document.getElementById('section' + this.sectionCount).focus());
        }
    }
    changeSpanTo() {
        this.changeInput = true;
        this.spanQuesVal = this.countList;
    }
    changeInputTo() {
        this.quesNoInvalid = false;
        this.changeInput = false;
        this.quesNoChanged = true;
        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
            console.log(this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no, 'ques');
            if (this.countList == this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no) {
                this.quesNoInvalid = true;
            }
        }
        this.dragCount = [];
        for (let i = 0; i < this.countList; i++) {
            const num = i + 1;
            this.dragCount.push(num);
        }
    }
    validation(id, value) {
        document.getElementById('subHeading' + id).hidden = true;
        document.getElementById('headingNull' + id).hidden = true;
        console.log(value, 'typedVal');
        console.log(id, 'id');
        console.log(this.secHeadingArray, 'this.secHeadingArray');
        for (let i = 0; i < this.secHeadingArray.length; i++) {
            if (value == '' && this.secHeadingArray.length > 1) {
                document.getElementById('headingNull' + id).hidden = false;
            }
            if (id != i) {
                console.log(i, 'ideee');
                if (value == this.secHeadingArray[i]) {
                    if (value != '') {
                        console.log('in');
                        console.log(id, 'viewId');
                        document.getElementById('subHeading' + id).hidden = false;
                    }
                }
            }
        }
    }
    changeSection(id, no) {
        this.quesNoInvalid = false;
        if (no == '40') {
            this.sectionCount = this.graphform.controls.head.value;
        } else {
            this.sectionCount = this.multiform.controls.head.value;
        }
        console.log(this.graphform.controls.head.value, 'selectbox val');
        document.getElementById(id).setAttribute('selected', this.sectionCount);
        console.log(this.sectionCount, 'sectionCount');
        this.dragCount = [];
        for (let i = 0; i < this.subQuestion[this.sectionCount].section.length; i++) {
            this.reloadQues = this.subQuestion[this.sectionCount].section[i].sub_questions[0].question_no;
        }
        for (let i = 0; i < this.reloadQues; i++) {
            const num = i + 1;
            this.dragCount.push(num);
        }
        this.countList = this.dragCount.length + 1;
    }
    preventScroll() {
        // document.body.style.overflow = 'hidden';
    }
    allowScroll() {
        // document.body.style.overflow = 'scroll';
    }
    disableSelect(id, event) {
        console.log(event);
    }
    openExplanationPopup(value) {
        this.ExplanationPopupValue = value;
        this.modalRef = this.modalService.open(this.viewExplain);
    }
}


//// Annatation ////
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








