import {Component, ElementRef, EventEmitter, inject, Input, OnInit,
    Output, TemplateRef, ViewChild} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {AuthService} from '../../../shared/service/auth.service';
import {ClassService} from '../../../shared/service/class.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {parse} from 'flatted';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {TeacherService} from '../../../shared/service/teacher.service';
import {CommonService} from '../../../shared/service/common.service';
import {CreatorService} from '../../../shared/service/creator.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {NavService} from '../../../shared/service/nav.service';
import {ContentdetailService} from '../../../shared/service/contentdetail.service';

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})

export class PreviewComponent implements OnInit {
    rect: Rectangle = {x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0};
    lastMousePosition: Position = {x: 0, y: 0};
    canvasPosition: Position = {x: 0, y: 0};
    mousePosition: Position = {x: 0, y: 0};
    mouseDownFlag = false;
    public selectedDeleteIcon = false;
    public mathDelayer = false;
    public isPdfAvailable: boolean = true;
    public deleteAnnatation: boolean;
    pagePosition: Position = {x: 0, y: 0};
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
    public valueDrop: any;
    element = null;
    dataPageNumber: number;
    areaInfo: AreaInfo[] = [];
    showPopup = false;
    listRectangleId = '';
    public selectedPageAnnatation: any;
    public currentPage = 1;
    public multiform: FormGroup;
    public repeatlink: FormArray;
    public icons: any;
    public pdfTemplate: any;
    public allowDropDown: boolean;
    public count = 0;
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
    public svgColor: any;
    public zoom = 1.0;
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
    public dragButton: any;
    public showPdf: any;
    public previewPdf: boolean;
    public functionCalled: boolean = false;
    public questions = [];
    public fullData: any;
    public answerIndex: any;
    public quesId: any;
    public open: any;
    public backToResources: any;
    public redoListArray: any = [];
    public additionalLinks = [];
    public showAnswer = true;
    page = 1;
    public expandPdf: any = false;
    public showQuestion = false;
    public studentAnswer = '';

    @ViewChild('multiChoiceDetail') multiChoiceDetail: TemplateRef<any>;
    @ViewChild('viewGraph') viewGraph: TemplateRef<any>;
    @ViewChild('additionalResourceLink') additionalResourceLink: TemplateRef<any>;
    @ViewChild('matchTableDetail') matchTableDetail: TemplateRef<any>;
    @ViewChild('dropDownDetail') dropDownDetail: TemplateRef<any>;
    @ViewChild('pdfPage') pdfPage: ElementRef<HTMLElement>;
    @ViewChild('class') deleteClass: TemplateRef<any>;
    @ViewChild('viewExplain') viewExplain: TemplateRef<any>;
    @ViewChild('feedbackStatus') feedbackStatus: TemplateRef<any>;
    @Input() calledBy = 'routes';
    @Input() contentData: any = {};
    @Output() closePopUp: EventEmitter<any> = new EventEmitter();
    public allowContentEdit = false;
    public listPassageDetails = [];
    public content: any;
    public contentService = inject(ContentdetailService);
    protected testData: any;
    protected testDetails: any;
    protected testContentID: any;
    public responseData: any;

    constructor(public confi: ConfigurationService, public common: CommonDataService, public commonservice: CommonService, public auth: AuthService, public classService: ClassService,
                private modalService: NgbModal, public sanitized: DomSanitizer, public router: Router, public newSubject: NewsubjectService, public route: ActivatedRoute,
                public teacher: TeacherService, public creator: CreatorService, public navServices: NavService) {
        this.showPdf = this.auth.getSessionData('preview_page');
        this.previewType = this.auth.getSessionData('preview');
        this.backToResources = this.auth.getSessionData('backOption');
        this.previewPdf = false;
        this.svgColor = '#ff0000';
        this.showInput = true;
        this.savaText = false;
        this.queDrag = false;
        this.textFontSize = '8';
        this.deleteAnnatation = false;
        let value: any;
        value = this.auth.getSessionData('showAnswer');
        this.showAnswer = value != 1;
        this.valueDrop = 'Select the answer';
    }

    ngOnInit(): void {
        const data = JSON.parse(this.auth.getSessionData('editor'));
        console.log(data, 'data');
        const responseData = this.calledBy == 'routes' ? this.route.snapshot.data['list'] : this.contentData;
        console.log(responseData.ResponseObject, 'responseData');
        this.responseData = responseData.ResponseObject;
        if (this.calledBy == 'routes') {
            try {
                console.log(this.route.snapshot.data['list'], 'getData');
                this.detailsSuccess(this.route.snapshot.data['list'], data);
            } catch (e) {
                console.log(e, 'ee');
            }
        } else {
            this.detailsSuccess(this.contentData);
        }
        if (this.responseData.content_format == '3' && this.responseData?.is_test == 1) {
            this.testDetailsService(this.responseData);
        }
        if (this.responseData.content_format == '3') {
            this.passageList();
        }
        this.allowDropDown = true;
        this.newSubject.allowSchoolChange(this.allowDropDown);
        this.gradeList();
        this.open = true;
    }

    // tslint:disable-next-line:use-lifecycle-interface
    ngOnDestroy(): void {
        this.auth.removeSessionData('preview_type');
        this.auth.removeSessionData('showAnswer');
    }

    passageList() {

        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.responseData?.content_id ?? ''
        };

        this.contentService.passageAllService(data, 'list').subscribe((successData) => {
                this.passageListSuccess(successData);
            }, (error) => {
                console.error(error, 'error');
            });
    }

    passageListSuccess(successData) {
        this.listPassageDetails = successData.IsSuccess ? successData.ResponseObject : [];
        console.log(this.listPassageDetails, 'listPassageDetails');
        for (let i = 0; i < this.questions.length; i++) {
            if (this.questions[i].question_type_id == 24) {
                for (let j = 0; j < this.questions[i].subQuestions.length; j++) {
                    const findIndex = this.listPassageDetails.length != 0 ?
                        this.listPassageDetails.findIndex(value => value.passage_id == this.questions[i].subQuestions[j].passage_id) : '';
                    this.questions[i].subQuestions[j].passage = findIndex != '' ? this.listPassageDetails[findIndex].passage : this.questions[i].subQuestions[j].passage;
                    if (this.questions[i].subQuestions[j].question_type_id == 7) {
                        for (let k = 0; k < this.questions[i].subQuestions[j].heading_option.length; k++) {
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
    }

    wordCount(): number {
        return this.studentAnswer ? this.studentAnswer.trim().split(/\s+/).length : 0;
    }

    convertMarkdownToHtml(markdown: string, splitCount = 0): SafeHtml {
        markdown = markdown.replace(/^'+|'+$/g, '');
        let html = markdown.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        html = html.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
        if (splitCount != 0) {
            const words = html.split(' ');
            if (words.length > splitCount) {
                html = words.slice(0, splitCount).join(' ') + '......';
            }
        }
        return this.sanitized.bypassSecurityTrustHtml(html);
    }

    expandPdfSize(event) {
        this.expandPdf = event;
        console.log(this.expandPdf, 'expand');
        console.log(this.deleteAnnatation, 'dele');
    }

    hideQuestion() {
        this.showQuestion = !this.showQuestion;
    }

    // openExplanationPopup(value) {
    //   this.ExplanationPopupValue = value;
    //   this.modalRef = this.modalService.open(this.viewExplain);
    // }
    parseVal(val) {
        if (val != '' && val != null) {
            return parse(val);
        } else {
            return false;
        }
    }

    testDetailsService(event) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: event.content_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.creator.testDetail(data).subscribe((successData) => {
                this.testSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_lisDetails');
            });
    }

    testSuccess(successData) {
        if (successData.IsSuccess) {
            this.testData = successData.ResponseObject[0];
            this.testDetails = successData.ResponseObject[0].contents;
            this.testDetails.map(items => items.name = items.subject + ' - ' + items.module_name);
            this.testContentID = this.testDetails[0].content_id;
            this.callTestDetails();
        }
    }

    callTestDetails() {
        console.log(this.testContentID, 'testContentID');
        this.page = 1;
        this.modalRef = this.modalService.open(this.feedbackStatus , {backdrop : 'static', windowClass: 'miniLoader'});
        this.listDetails(this.testData);
    }

    testEdit(){
        this.auth.setSessionData('editTestDetails', JSON.stringify(this.testData));
        this.router.navigate(['repository/create-test/edit']);
    }

    listDetails(event) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.testContentID,
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

    detailsSuccess(successData, event?) {
        console.log(successData, 'suc');
        if (successData.IsSuccess) {
            this.detailData = successData.ResponseObject;
            console.log(this.detailData, 'detailssss');
            if (event) {
                this.detailData['class_id'] = event.class_id;
                this.detailData['teacher_id'] = event.teacher_id;
            }
            console.log(this.showPdf, 'showPDF');
            this.allowContentEdit = (this.auth.getRoleId() == '4' && this.detailData.edit_status == '1') || (this.auth.getRoleId() == '6' && this.detailData.edit_status != '0')
                || this.auth.getRoleId() == '2' && !(this.auth.getSessionData('school_id') != this.detailData.school_id && this.detailData.access == '3') && this.detailData.access != '4';
            console.log(this.allowContentEdit, 'allowContentEdit');
            if (this.showPdf == 'create_resources' || this.showPdf == 'create_assignments' || this.showPdf == 'create_assessments') {
                this.getpdf = this.commonservice.convertBase64(this.detailData?.file_path);
                console.log(this.getpdf, 'getPDF');
                this.webhost = this.confi.getimgUrl();
                this.additionalLinks = this.getpdf[0]?.links ? this.getpdf[0]?.links : [];
                console.log(this.additionalLinks, 'additionAlLinks');
                console.log('PDF URL:', this.webhost + '/' + this.getpdf[0]?.original_image_url);
                
                if (this.getpdf[0] && this.getpdf[0].original_image_url != undefined) {
                    console.log('Starting PDF download...');
                    
                    // Set a timeout to ensure we don't hang forever
                    const timeout = setTimeout(() => {
                        console.warn('PDF download timeout, setting isPdfAvailable to false');
                        this.isPdfAvailable = false;
                    }, 10000); // 10 second timeout
                    
                    this.commonservice.downloadfilewithbytes(this.webhost + '/' + this.getpdf[0]?.original_image_url)
                        .subscribe({
                            next: (filebytes: ArrayBuffer) => {
                                clearTimeout(timeout);
                                console.log('PDF download successful, size:', filebytes.byteLength);
                                this.pdfTemplate = filebytes;
                                this.isPdfAvailable = true;
                            },
                            error: (error) => {
                                clearTimeout(timeout);
                                console.error('Error loading PDF file:', error);
                                this.isPdfAvailable = false;
                            }
                        });
                } else {
                    console.log('No PDF file URL found, setting isPdfAvailable to false');
                    this.isPdfAvailable = false;
                }

                this.previewPdf = true;

                // Ensure annotation is always an array
                let annotation = this.detailData.annotation;
                if (typeof annotation === 'string') {
                    try {
                        annotation = JSON.parse(annotation);
                    } catch (e) {
                        console.error('Error parsing annotation:', e);
                        annotation = [];
                    }
                }
                if (!Array.isArray(annotation)) {
                    annotation = [];
                }
                
                // Ensure questionAnnotation is always an array
                let questionAnnotation = this.detailData.questionAnnotation;
                if (typeof questionAnnotation === 'string') {
                    try {
                        questionAnnotation = JSON.parse(questionAnnotation);
                    } catch (e) {
                        console.error('Error parsing questionAnnotation:', e);
                        questionAnnotation = [];
                    }
                }
                if (!Array.isArray(questionAnnotation)) {
                    questionAnnotation = [];
                }
                
                this.dragQuestionsList = questionAnnotation;
                annotation.forEach((value) => {
                    value.isTeacherCorrection = false;
                });
                this.areaInfo = annotation;
                if (this.auth.getRoleId() != '2' && this.previewType == 'student_preview') {
                    this.saveResourceAnnatation([], '2');
                } else {
                    this.functionCalled = true;
                }
                const allQuestions = this.detailData.answers;
                for (let i = 0; i < allQuestions.length; i++) {
                    allQuestions[i].section.sort((a, b) => parseFloat(a.sub_questions[0].question_no) - parseFloat(b.sub_questions[0].question_no));
                }
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
            } else if (this.showPdf == 'text_resources' || this.showPdf == 'text_assignments' || this.showPdf == 'text_assessments') {
                this.additionalLinks = this.detailData.links ? this.detailData.links : [];
                if (this.detailData.questions.length != 0) {
                    this.questions = this.detailData.questions;
                    console.log(this.questions, 'dasdasd');
                    setTimeout(() => {
                        for (let i = 0; i < this.questions.length; i++) {
                            if (this.questions[i].question_type_id == 7) {
                                for (let j = 0; j < this.questions[i].heading_option.length; j++) {
                                    const index = i;
                                    const row = this.questions[i].heading_option[j].correctActive;
                                    const column = this.questions[i].heading_option[j].correctAnswer;
                                    const id = index.toString() + row.toString() + column.toString();
                                    console.log(id, 'idValue');
                                    const getValue = document.getElementById('checkMulti' + id);
                                    console.log(getValue, 'getValue');
                                    if (getValue) {
                                        document.getElementById('checkMulti' + id).setAttribute('checked', 'true');
                                    }
                                }
                            } else if (this.questions[i].question_type_id == 24) {
                                for (let j = 0; j < this.questions[i].subQuestions.length; j++) {
                                    const findIndex = this.listPassageDetails.length != 0 ?
                                        this.listPassageDetails.findIndex(value => value.passage_id == this.questions[i].subQuestions[j].passage_id) : '';
                                    this.questions[i].subQuestions[j].passage = findIndex != '' ? this.listPassageDetails[findIndex].passage : this.questions[i].subQuestions[j].passage;
                                    if (this.questions[i].subQuestions[j].question_type_id == 7) {
                                        for (let k = 0; k < this.questions[i].subQuestions[j].heading_option.length; k++) {
                                            const index = i;
                                            const id = j;
                                            const row = this.questions[i].subQuestions[j].heading_option[k].correctActive;
                                            const column = this.questions[i].subQuestions[j].heading_option[k].correctAnswer;
                                            const final = index.toString() + id.toString() + row.toString() + column.toString();
                                            document.getElementById('checkMultiPassage' + final).setAttribute('checked', 'true');
                                        }
                                    }
                                }
                            } else if (this.questions[i].question_type_id == 9) {
                                for (let j = 0; j < this.questions[i].answer.length; j++) {
                                    for (let k = 0; k < this.questions[i].answer[j].options.length; k++) {
                                        if (this.questions[i].answer[j].options[k].selected == 'true') {
                                            if (document.getElementById(i + 'dropdown' + j)) {
                                                document.getElementById(i + 'dropdown' + j).innerHTML = this.questions[i].answer[j].options[k].listOption;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }, 1000);
                } else {
                    this.questions = [];
                }
                this.content = this.detailData.file_text;
                this.previewPdf = false;
                this.functionCalled = true;
            }
            this.clickEvent();
        }
        this.modalRef?.close();
        this.common.showLoader(false);
    }

    detailsFailure(error) {
        console.error(error, 'error');
        this.modalRef?.close();
    }

    clickEvent() {
        console.log(this.mathDelayer, 'dads');
        if (!this.mathDelayer) {
            this.mathDelayer = true;
            setTimeout(() => {
                console.log('click Event _called');
                document.getElementById('myDiv').click();
            }, 1000);
        }
        setTimeout(() => {
            this.mathDelayer = false;
        }, 1500);
    }

    getDeleteAction(event) {
        console.log(event);
        this.deleteAnnatation = event;
        console.log(this.deleteAnnatation);
    }

    getAreaInfo(event) {
        this.saveResourceAnnatation(event, '1');
        this.savedAnnotation = event;
    }

    // droppedCorrect(event: CdkDragDrop<string[]>, index) {
    //     let control = <any> this.totalAns[index].given_answer;
    //     moveItemInArray(control, event.previousIndex, event.currentIndex);
    // }
    saveResourceAnnatation(data, id) {
        const val = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.detailData.school_id,
            content_id: this.detailData.content_id,
            class_id: this.detailData.class_id,
            teacher_id: this.detailData.teacher_id,
            annotation: data,
            type: id
        };
        this.teacher.saveTeacherResourceAnnotation(val).subscribe((successData) => {
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
                for (let i = 0; i < successData.ResponseObject.length; i++) {
                    this.areaInfo.push(successData.ResponseObject[i]);
                }
            }
        }
    }

    resorceAnnotateFailure(error) {
        console.log(error);
        this.functionCalled = true; // Ensure functionCalled is set even on failure
    }

    graphDetail(val) {
        this.graphShow = parse(val);
        this.modalRef = this.modalService.open(this.viewGraph, {size: 'lg', backdrop: 'static'});
    }

    AdditionalSourecLink() {
        this.modalRef = this.modalService.open(this.additionalResourceLink);
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
        } else if (id == '9') {
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
            return `with: ${reason}`;
        }
    }

    onPageChange(data) {
        this.page = data;
        window.scrollTo(0, 0);
        setTimeout(() => {
            this.selectCheckBox();
        }, 1000);
        this.clickEvent();
    }

    selectCheckBox() {
        for (let i = 0; i < this.questions.length; i++) {
            if (this.questions[i].question_type_id == 7) {
                for (let j = 0; j < this.questions[i].heading_option.length; j++) {
                    const index = i;
                    const row = this.questions[i].heading_option[j].correctActive;
                    const column = this.questions[i].heading_option[j].correctAnswer;
                    const id = index.toString() + row.toString() + column.toString();
                    const getValue = document.getElementById('checkMulti' + id);
                    if (getValue) {
                        document.getElementById('checkMulti' + id).setAttribute('checked', 'true');
                    }
                }
            } else if (this.questions[i].question_type_id == 9) {
                for (let j = 0; j < this.questions[i].answer.length; j++) {
                    for (let k = 0; k < this.questions[i].answer[j].options.length; k++) {
                        if (this.questions[i].answer[j].options[k].selected == 'true') {
                            if (document.getElementById(i + 'dropdown' + j)) {
                                document.getElementById(i + 'dropdown' + j).innerHTML = this.questions[i].answer[j].options[k].listOption;
                            }
                        }
                    }
                }
            }
        }
    }

    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classService.gradeList(data).subscribe((successData) => {
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

    back() {
        if (this.auth.getSessionData('redirect-toassign') == '1') {
            this.router.navigate(['/class/view-assign/2']);
        } else if (this.auth.getSessionData('redirect-toassign') == '2') {
            this.router.navigate(['/class/topicsAndCurriculum/1']);
        }
        this.auth.removeSessionData('backOption');
    }

    previewback() {
        this.auth.removeSessionData('editor');
        if (this.previewType == 'repository') {
            this.router.navigate(['repository/content-home']);
        } else if (this.previewType == 'home') {
            this.router.navigate(['home/list-home']);
        }
    }

    editAction(){
        const value = JSON.parse(this.auth.getSessionData('editor'));
        if (value.content_type == '1') {
            this.router.navigate([value.content_format != '3' ? 'repository/add-resources/edit' : 'content-text-resource/text-resource/edit']);
        } else if (value.content_type == '2') {
            this.auth.setSessionData(value.content_format == 3 ? 'textType' : 'upload-type', 'assignment');
            this.router.navigate([value.content_format != '3' ? 'repository/create-assessment/edit' : 'content-text-resource/text-assignment/edit']);
        } else if (value.content_type == '3') {
            this.auth.setSessionData(value.content_format == 3 ? 'textType' : 'upload-type', 'assessment');
            this.router.navigate([value.content_format != '3' ? 'repository/create-assessment/edit' : 'content-text-resource/text-assignment/edit']);
        }
        this.closePopUp.emit();
    }

    deleteAction() {
        this.modalRef = this.modalService.open(this.deleteClass, {size: 'md', backdrop: 'static'});
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
