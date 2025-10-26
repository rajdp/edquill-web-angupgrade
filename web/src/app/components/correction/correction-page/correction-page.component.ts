import {Component, ElementRef, HostListener, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalConfig, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import {TeacherService} from '../../../shared/service/teacher.service';
import {ValidationService} from '../../../shared/service/validation.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NavService} from '../../../shared/service/nav.service';
import {CreatorService} from '../../../shared/service/creator.service';
import {parse, stringify} from 'flatted';
import {CommonService} from '../../../shared/service/common.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {jsPDF} from 'jspdf';
import {SseClient} from 'ngx-sse-client';
import {Subscription} from 'rxjs';
import {StudentService} from '../../../shared/service/student.service';
import {ContentdetailService} from '../../../shared/service/contentdetail.service';
import {TimeSpan} from '../../studentlogin/answering/answering.component';
import {
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexLegend,
    ApexPlotOptions,
    ApexXAxis,
    ApexYAxis
} from 'ng-apexcharts';
import {urls} from '../../../shared/utils/urls';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    plotOptions: ApexPlotOptions;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
};

@Component({
    selector: 'app-correction-page',
    templateUrl: './correction-page.component.html',
    styleUrls: ['./correction-page.component.scss']
})
export class CorrectionPageComponent implements OnInit, OnDestroy {
    public webhost: any;
    public filterForm: FormGroup;
    public classData: any;
    public studentData: any;
    public studentList: any;
    public correctionStudentList: any;
    public studentAnswer: any;
    public totalPoints: any;
    public totalFeedBack: any;
    public totalStudentFeedBack: any;
    public studentPoints: any;
    public pageType: any;
    public questionType: any;
    public redirect = '';
    public interval: any;
    public totalAns: any = [];
    public totalAnsSample: any = [];
    public releaseStudent: any = [];
    public releaseStudentContentId: any = [];
    public dragQuestion: any = [];
    public workAnnotate: any = [];
    public totalSheetInfo = [];
    public sheetIndex = 0;
    public workAnnotatePage: any = 0;
    public workAnnotatePDF: any;
    public invalidData: boolean;
    public dataMissing: boolean;
    public functionCalled: boolean;
    public showpdf: boolean;
    public showfeed = false;
    public answerSheet = false;
    public blink = true;
    public resetAnswer = false;
    public studentContentlist: any;
    public showstudentContentlist: boolean;
    public studentName: any;
    public anserPdfTemplate: any;
    public questionFilter = 'all';
    public roleId: any;

    rect: Rectangle = {x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0};
    lastMousePosition: Position = {x: 0, y: 0};
    canvasPosition: Position = {x: 0, y: 0};
    mousePosition: Position = {x: 0, y: 0};
    mouseDownFlag = false;
    pagePosition: Position = {x: 0, y: 0};
    show = false;
    public shapesType: any = 'select';
    public pointerType: any;
    public elem: any;
    public globalPdfViewerPath: any;
    public queNum: any;
    public showInput: any;
    public pendingCall: any;
    public scoreStatus: any;
    public pdfpath: any;
    public answerSheetPath: any;
    public inputElement: any;
    public pageVariable: any;
    public deleteAnnatation: boolean;
    public mathEditor: boolean;
    public roughArea = false;
    public invalidScore = false;
    public mathDelayer = false;
    public isPdfAvailable = true;
    public selector = '.scrollPanelCorrection';
    public page = 0;
    element = null;
    dataPageNumber: number;
    areaInfo: AreaInfo[] = [];
    sheetInfo: AreaInfo[] = [];
    subs: Subscription[] = [];
    showPopup = false;
    listRectangleId = '';
    public multiform: FormGroup;
    public repeatlink: FormArray;
    public icons: any;
    public pdfTemplate: any;
    public count = 0;
    public totalPointsArray = [];
    public studentPointsArray = [];
    public closeResult: string;
    public options: any;
    public hide: boolean;
    public schoolId: any;
    public gradeData: any;
    public subjectData: any;
    public svgColor: any;
    public zoom = 1.0;
    public alphabets: any;
    public editData: any;
    public getTag: any = [];
    public detailData: any = [];
    public gradeSplit: any;
    public subjectSplit: any;
    public uploadType: any;
    public tagArray: any;
    public subQuestion: any = [];
    public itemsList: any = [];
    public totalsub: any = [];
    public teachername: any;
    public imagepath: any;
    public imagepaththumb: any;
    public getpdf: any;
    public getlinks: any;
    public recordBase64Url: any;
    public type: any;
    public selectedDeleteIcon = false;
    public previewInfo: any = [];
    public buffer: any;
    public strPath: any;
    public textPosition: any;
    public dragpaths: any;
    public showdropdown: boolean;
    public queDrag: boolean;
    public savaText: boolean;
    public dragPageNumber: any;
    public dragQuestionsList: any = [];
    public textFontSize: any;
    public dragButton: any;
    public buttonName: any;
    public showingType: any;
    public submitType: any;
    public selectedPageAnnatation: any;
    public disable: boolean;
    public currentPage: number = 1;
    public selectedQueNum: number;
    public itemSelect: any = [];
    public redoListArray: any = [];
    public sectionFilterVal: any = 'all';
    public textValue: any;
    public showGrid: boolean;
    public allowSelect: boolean;
    public gridView: any;
    public studentListHighlight: any;
    public showPDFAnswer: boolean;
    public correctPdfPath: any = [];
    public correctAnswerKeyPath: any;
    public uploadAnswerPath: any = [];
    public jsPDF: jsPDF;
    public testStatus = '';
    @ViewChild('pdfPage') pdfPage: ElementRef<HTMLElement>;
    @ViewChild('class') deleteClass: TemplateRef<any>;
    @ViewChild('deleteAlert') deleteAlert: TemplateRef<any>;
    @ViewChild('workArea') workArea: TemplateRef<any>;
    @ViewChild('feedbackStatus') feedbackStatus: TemplateRef<any>;
    @ViewChild('loaderStatus') loaderStatus: TemplateRef<any>;
    @ViewChild('releaseScoreAlert') releaseScoreAlert: TemplateRef<any>;
    @ViewChild('deleteFeedBack') deleteFeedBack: TemplateRef<any>;
    public modalRef: NgbModalRef;
    convertedText: SafeHtml;
    public selectedFeedBackIndex: any = '';
    public selectedPreviousStudentAnswer: any;
    public previousFeedBack = [];
    public listPassageDetails = [];
    public contentTimeTaken = 0;
    public testContentDetail: any;
    public testContentData: any;
    public feedbackList = [];
    public totalIndivialScore = 5;
    public totalScore = 0;
    public score = 0;
    public chartOptions: Partial<ChartOptions>;
    public totalFeedBackCount = 0;
    public newFeedBackEntered = '';
    public feedbackListData = [];
    public selectedTeacherFeedback: any;
    public selectedVersion = 0;
    public totalFeedbackMaxHeight = 'auto';

    constructor(public config: NgbModalConfig, public confi: ConfigurationService, private sseClient: SseClient,
                public sanitizer: DomSanitizer, public teacher: TeacherService, private formBuilder: FormBuilder,
                private modalService: NgbModal, public auth: AuthService, public commondata: CommonDataService, public content: ContentdetailService,
                public navServices: NavService, public common: CommonService, public route: Router, private student: StudentService,
                public validationService: ValidationService, public toastr: ToastrService, public creator: CreatorService,
                public newSubject: NewsubjectService) {
        this.studentContentlist = this.auth.getSessionData('student-content');
        if (this.auth.getSessionData('correction-return')) {
            this.redirect = this.auth.getSessionData('correction-return');
        }
        this.showstudentContentlist = this.studentContentlist == 1;
        if (this.showstudentContentlist) {
            this.pageType = 2;
        } else {
            this.pageType = 1;
        }
        this.invalidData = false;
        this.showpdf = false;
        this.buttonName = 'Assessments and uploads';
        this.questionType = 4;
        this.showingType = 1;
        this.showPDFAnswer = false;
        this.webhost = this.confi.getimgUrl();
        this.filterForm = this.formBuilder.group({
            studentlist: '',
        });
        this.classData = JSON.parse(this.auth.getSessionData('classDetails'));
        this.studentName = this.classData.student_name;
        this.studentsDetails(this.classData, 0);
        this.auth.removeSessionData('readonly_data');
        this.studentContentlist = this.auth.getSessionData('student-content');
        this.showstudentContentlist = this.studentContentlist == 1;
        this.showInput = true;
        this.svgColor = '#ff0000';
        this.disable = true;
        this.showInput = true;
        this.savaText = false;
        this.queDrag = false;
        this.deleteAnnatation = false;
        this.textFontSize = '16';
        this.queNum = [];
        this.previewInfo = [];
        this.roleId = this.auth.getRoleId();
        this.creator.changeViewList(true);
    }

    @HostListener('window:resize')
    onResize() {
        this.updateContentHeight();
    }

    ngOnInit(): void {
        this.passageList();
        this.clickEvent();
        const myPics = document.getElementById('pdf-page1');
        this.listView(1);
        this.allowSelect = true;
        this.newSubject.allowSchoolChange(this.allowSelect);
        if (this.showstudentContentlist) {
            console.log(this.classData, 'classData');
            this.studentsAnswerList(this.classData, this.classData.status);
            this.scoreStatus = this.classData.status;
        } else {
            console.log(this.showstudentContentlist, 'showcontent');
        }
    }

    ngOnDestroy(): void {
        this.auth.removeSessionData('student-content');
        this.auth.removeSessionData('correction-return');
        this.creator.changeViewList(false);
        clearInterval(this.interval);
        this.subs.forEach((val) => {
            val.unsubscribe();
        });
    }

    updateContentHeight() {
        const availableHeight = window.innerHeight - (146);
        this.totalFeedbackMaxHeight = this.isSingleQnsWithFeedbackType ? `${availableHeight}px` : 'auto';
        console.log(this.totalFeedbackMaxHeight, 'totalFeedbackMaxHeight')
    }

    showAnswerPdf(event) {
        this.showPDFAnswer = !!event.target.checked;
        this.showCorrectPdf();
    }

    selectAnswerSheet(index) {
        this.blink = false;
        this.sheetIndex = index;
        this.answerSheetPath = this.webhost + '/' + this.uploadAnswerPath[index]?.original_image_url;
        console.log(this.totalSheetInfo[index], 'this.totalSheetInfo[index]');
        this.sheetInfo = [...this.totalSheetInfo[index]];
        this.showType('2');
    }

    showType(id) {
        this.showingType = id;
        if (id == '1') {
            this.buttonName = 'Assessments and uploads';
        } else if (id == '2') {
            this.buttonName = 'Answer sheet';
        } else if (id == '3') {
            this.buttonName = 'Show PDF';
        }
        this.showCorrectPdf();
    }

    feedbackSelected(value) {
        console.log(value, 'value');
        if (value != '' && value != 'current') {
            this.selectedFeedBackIndex = this.previousFeedBack.length - value.index;
            this.selectedPreviousStudentAnswer = value;
            this.selectedVersion = value.index;
            if (this.selectedPreviousStudentAnswer.version != 'V1') {
                this.convertedText = value?.feedback;
                this.updateFeedback();
            } else {
                this.convertedText = this.convertMarkdownToHtml(value.feedback);
            }
        } else if (value == 'current'){
            // this.selectedFeedBackIndex = '';
            // this.convertedText = '';
            this.selectedVersion = 0;
            this.selectedFeedBackIndex = this.previousFeedBack.length - 1;
            this.selectedPreviousStudentAnswer = this.previousFeedBack[0];
        }
    }

    get scorePercentage(): number {
        return (this.score / this.totalScore) * 100;
    }

    convertMarkdownToHtml(markdown: string, breakTagType = 'double'): SafeHtml {
        markdown = markdown.replace(/^'+|'+$/g, '');
        let html = markdown.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        html = html.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    getValue(value: string): string {
        if (!value) return '';
        const parts = value.split('_');
        const formatted = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
        return formatted;
    }

    updateFeedback() {
        this.feedbackList = this.getUpdatedConvertedFeedback(this.convertedText);
        this.totalScore = this.feedbackList.length * this.totalIndivialScore;
        this.score = 0;
        setTimeout(() => {
            this.feedbackList.forEach(feedback => this.score = this.score + feedback[1]?.score);
        }, 500);
        this.feedbackList.forEach(feedback => {
            feedback.collaspsed = true;
            feedback[1]?.feedback.forEach(items => items.collaspsed = true);
        });
        this.versionComparsionBarChart();
    }

    getUpdatedConvertedFeedback(value) {
        return Object.entries(value);
    }

    versionComparsionBarChart() {
        const seriesData = this.feedbackList.map((items) => {
            return {name: items[0], categories: this.getValue(items[0]), score: items[1]?.score ?? 0};
        });
        const previousFeedback = this.selectedFeedBackIndex == '' ? this.totalFeedBackCount - 1 :
            this.selectedFeedBackIndex == 1 ? this.previousFeedBack.length - 1 : this.selectedPreviousStudentAnswer.index + 1;
        let previousSeriesData = [];
        if (this.selectedFeedBackIndex != '' && this.selectedFeedBackIndex != 1) {
            const previousFeedBackList = this.getUpdatedConvertedFeedback(this.previousFeedBack[previousFeedback]?.feedback);
            previousSeriesData = previousFeedBackList.map((items: any) => {
                return {score: items[1]?.score ?? 0};
            });
        } else {
            seriesData.map(value => value.score).forEach(items => {
                previousSeriesData.push({score: 0});
            });
        }
        this.chartOptions = {
            series: [
                {
                    name: 'Current Version',
                    data: seriesData.map(value => value.score)
                },
                {
                    name: 'Previous Version',
                    data: previousSeriesData.map(value => value.score)
                }
            ],
            chart: {
                type: 'bar',
                height: 300,
                id: 'feedbackChart',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '40%'
                }
            },
            dataLabels: {
                enabled: true
            },
            xaxis: {
                categories: seriesData.map(value => value.categories)
            },
            yaxis: {
                min: 0,
                max: 5,
                tickAmount: 5,
                labels: {
                    formatter: val => val.toFixed(0)
                }
            },
            legend: {
                position: 'bottom'
            }
        };
    }

    getFeedbackCount(data) {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.studentAnswer.student_id,
            question_id: data.question_id,
            student_content_id: this.studentAnswer.student_content_id,
        };
        this.student.getOpenAiFeedbackCount(payload).subscribe((successData) => {
            this.getFeedbackCountSuccess(successData);
        }, (error) => console.error(error, 'error_APICount'));
    }

    getFeedbackCountSuccess(successData) {
        console.log(successData, 'successData_feed');
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((items, index) => {
                items.index = index;
                items.version_name = 'Version' + ' ' + (successData.ResponseObject.length - index);
            });
            this.previousFeedBack = successData.ResponseObject;
            this.totalFeedBackCount = successData.count ?? 0;
            if (this.previousFeedBack.length != 0) {
                this.selectedFeedBackIndex = this.previousFeedBack.length - this.previousFeedBack[0]?.index;
                this.selectedPreviousStudentAnswer = this.previousFeedBack[0];
                if (this.selectedPreviousStudentAnswer.version != 'V1') {
                    this.convertedText = this.previousFeedBack[0]?.feedback;
                    this.updateFeedback();
                } else {
                    this.convertedText = this.convertMarkdownToHtml(this.previousFeedBack[0]?.feedback);
                }
                if (this.isSingleQnsWithFeedbackType) {
                    this.totalAns.forEach(value => {
                        value.points = this.selectedFeedBackIndex != '' ? this.selectedPreviousStudentAnswer.total_score : value.points;
                        value.given_points = this.selectedFeedBackIndex != '' ? this.selectedPreviousStudentAnswer.student_score : value.given_points;
                    });
                    this.totalPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.points), 0);
                    this.studentPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
                }
            } else if (this.previousFeedBack.length != 0 && this.scoreStatus == 2) {
                this.selectedFeedBackIndex = '';
                this.convertedText = '';
            }
            console.log(this.selectedFeedBackIndex, 'selectedFeedBackIndex');
            this.updateContentHeight();
        }
    }

    showCorrectPdf() {
        if ((this.showingType == '1' || this.showingType == '2') && this.showPDFAnswer) {
            this.deleteAnnatation = true;
            setTimeout(() => {
                this.blink = true;
            }, 200);
        } else if (this.showingType == '3' && this.showPDFAnswer) {
            this.deleteAnnatation = false;
        } else if (this.showingType == '3' && !this.showPDFAnswer) {
            this.deleteAnnatation = false;
        } else if ((this.showingType == '1' || this.showingType == '2') && !this.showPDFAnswer) {
            this.deleteAnnatation = false;
            setTimeout(() => {
                this.blink = true;
            }, 200);
        }
    }

    back() {
        if (this.showstudentContentlist) {
            this.route.navigate(['/student-content/list-content/old']);
        } else {
            const datum = JSON.parse(this.auth.getSessionData('correctionDetail'));
            this.pageType = 1;
            this.studentsDetails(datum, 0);
        }
        this.sectionFilterVal = 'all';
        clearInterval(this.interval);
    }

    openRoughArea() {
        this.roughArea = !this.roughArea;
    }

    openWorkArea(item) {
        this.workAnnotate = [...item.workarea];
        this.workAnnotatePage = 0;
        if (this.workAnnotate.length != 0) {
            this.workAnnotate.forEach((val) => {
                if (val.pageNumber > this.workAnnotatePage) {
                    this.workAnnotatePage = val.pageNumber;
                }
            });
            this.jsPDF = new jsPDF();
            for (let i = 0; i < this.workAnnotatePage - 1; i++) {
                this.jsPDF.addPage();
            }
            this.workAnnotatePDF = this.jsPDF.output('datauristring');
            console.log(this.workAnnotatePDF, 'this.workAnnotatePDF');
        }
        this.modalRef = this.modalService.open(this.workArea, {size: 'xl', backdrop: 'static'});
    }

    showAnswerSheet() {
        this.answerSheet = !this.answerSheet;
        this.showpdf = true;
        this.buttonName = 'Hide PDF';
    }

    getSheetInfo(event) {
        this.sheetInfo = event;
        this.totalSheetInfo[this.sheetIndex] = this.sheetInfo;
        console.log(this.totalSheetInfo, 'this.totalSheetInfo');
        this.saveAnswerAnnotation();
    }

    openStudentFeedback() {
        this.showfeed = !this.showfeed;
    }

    moveToPendingAlert(value) {
        this.pendingCall = value;
        this.resetAnswer = false;
        this.modalRef = this.modalService.open(this.deleteAlert);
    }

    moveToPending() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.pendingCall != '' ? this.pendingCall.student_id : this.studentAnswer.student_id,
            student_content_id: this.pendingCall != '' ? this.pendingCall.student_content_id : this.studentAnswer.student_content_id,
            content_id: this.classData.content_id,
            class_id: this.classData.class_id,
            reset_answer: this.resetAnswer == true ? '1' : '0',
            teacher_feedback: this.pendingCall == '' ? this.totalFeedBack : this.pendingCall.teacher_feedback
        };
        if (this.testContentDetail) {
            data['is_test'] = '1';
        }
        this.teacher.changeToPending(data).subscribe((successData) => {
                this.moveToPendingSuccess(successData);
            },
            (error) => {
                console.error(error);
            });
    }

    moveToPendingSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.close();
            clearInterval(this.interval);
            if (this.showstudentContentlist) {
                this.route.navigate(['/student-content/list-content/old']);
            } else {
                this.pageType = 1;
                this.studentsDetails(this.classData, 0);
            }
        }
    }

    resetStudentAns(event) {
        this.resetAnswer = event.target.checked;
    }

    matchcase(val, match, questionId) {
        let value = [];
        if (val != '' && val != undefined && val != 'undefined' && val != null) {
            if (questionId != '54') {
                val.forEach((answer) => {
                    value.push(match ? answer.trim() : answer.trim().toLowerCase().split(' ').join(''));
                });
            } else {
                value = match ? val.trim() : val.trim().toLowerCase().split(' ').join('');
            }
        } else {
            value = val;
        }
        return value;
    }

    clickEvent() {
        if (!this.mathDelayer) {
            this.mathDelayer = true;
            setTimeout(() => {
                document.getElementById('myDiv').click();
            }, 1000);
        }
        setTimeout(() => {
            this.mathDelayer = false;
        }, 1500);
    }

    parseVal(val) {
        if (val != '' && val != null) {
            return parse(val);
        } else {
            return false;
        }
    }

    listView(id) {
        this.gridView = id;
        this.showGrid = id == 1;
    }

    studentsDetails(val, id) {
        this.auth.setSessionData('correctionDetail', JSON.stringify(val));
        this.studentListHighlight = id;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: val.content_id,
            content_format: val.content_format,
            class_id: val.class_id,
            type: id,
            class_content_id: val.class_content_id
        };
        this.teacher.studentList(data).subscribe((successData) => {
                this.detailsSuccess(successData, data);
            },
            (error) => {
                console.error(error, 'error');
            });
    }

    detailsSuccess(successData, data) {
        if (successData.IsSuccess) {
            this.correctionStudentList = [];
            this.studentList = successData.ResponseObject;
            this.studentList.forEach((item) => {
                item.checked = false;
                item.content_format = data.content_format;
                if (item.status != '1') {
                    this.correctionStudentList.push(item);
                }
            });
            if (this.pageType == 1) {
                $('#selectAll').prop('checked', false);
                $('#selectAllAlt').prop('checked', false);
                // sse client service call //
                this.subs.forEach((item) => {
                    item.unsubscribe();
                });
                this.sseClientService(data);
            }
        }
    }

    sseClientService(bodyValue) {
        const sseUrl = 'teacher/teacherassignStudentPrint';
        this.subs.push(this.sseClient.stream(sseUrl, {
            keepAlive: true, reconnectionDelay: 3_000,
            responseType: 'event'
        }, {body: bodyValue}, 'POST').subscribe((event) => {
            if (event.type === 'error') {
                const errorEvent = event as ErrorEvent;
                console.error(errorEvent, errorEvent.message);
            } else {
                const messageEvent = event as MessageEvent;
                console.log(typeof messageEvent.data, 'SSE client called');
                this.studentReportDetailsSSESuccess(messageEvent.data === 'No Records found' ? messageEvent.data : JSON.parse(messageEvent.data), bodyValue);
            }
        }));
    }

    studentReportDetailsSSESuccess(successData, bodyValue) {
        this.correctionStudentList = [];
        const updatedStudentList = successData;
        updatedStudentList.forEach((item, index) => {
            item.checked = this.studentList[index].checked;
        });
        this.studentList = [...updatedStudentList];
        for (let i = 0; i < this.studentList.length; i++) {
            this.studentList[i].content_format = bodyValue.content_format;
            if (this.studentList[i].status != '1') {
                this.correctionStudentList.push(this.studentList[i]);
            }
        }
    }

    navigateToSATReport(list) {
        const satReportDetails = {
            class_id: list?.class_id ?? '934',
            class_name: list?.class_name ?? '',
            student_id: list.student_id,
            content_id: list.content_id,
            student_content_id: list.student_content_id,
            test_type_id: list?.test_type_id ?? '0'
        };
        this.auth.setSessionData('satReportData', JSON.stringify(satReportDetails));
        this.auth.setSessionData('reportCalledFrom', 'assessment_correction');
        this.auth.setSessionData('correction_student-content', JSON.stringify(this.studentContentlist));
        this.auth.setSessionData('correction_return', this.redirect);
        this.route.navigate(['sat-report']);
    }

    studentsData() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.classData.class_id,
            content_id: this.classData.content_id
        };
        this.teacher.studentData(data).subscribe((successData) => {
                this.dataSuccess(successData);
            },
            (error) => {
                this.dataFailure(error);
            });
    }

    dataSuccess(successData) {
        if (successData.IsSuccess) {
            this.studentData = successData.ResponseObject;
        }
    }

    dataFailure(error) {
        console.log(error, 'error');
    }

    onScrollDown(event) {
        if ((this.page + 1) < this.totalAnsSample.length && this.sectionFilterVal == 'all') {
            this.page += 1;
            console.log(this.page, 'this.page');

            this.totalAns.push(this.totalAnsSample[this.page]);
            this.answerFiter();
            this.clickEvent();
        }
    }

    answerFiter() {
        this.totalAns.forEach((item) => {
            if (this.questionFilter == 'correct') {
                item.section.forEach((value) => {
                    value.isShow = value.points == value.given_points;
                });
            } else if (this.questionFilter == 'wrong') {
                item.section.forEach((value) => {
                    value.isShow = value.points != value.given_points;
                });
            } else {
                item.section.forEach((value) => {
                    value.isShow = true;
                });
            }
        });
    }

    passageList() {

        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.classData.content_id
        };

        this.content.passageAllService(data, 'list').subscribe((successData) => {
                this.passageListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error');
            });
    }

    passageListSuccess(successData) {
        this.listPassageDetails = successData.IsSuccess ? successData.ResponseObject : [];
        console.log(this.listPassageDetails, 'listPassageDetails');
        if (this.listPassageDetails.length != 0 ) {
            for (let i = 0; i < this.totalAns.length; i++) {
                if (this.totalAns[i].question_type_id == '24') {
                    for (let j = 0; j < this.totalAns[i].subQuestions.length; j++) {
                        const findIndex = this.listPassageDetails.length != 0 ?
                            this.listPassageDetails.findIndex(value => value.passage_id == this.totalAns[i].subQuestions[j].passage_id) : '';
                        this.totalAns[i].subQuestions[j].passage = findIndex != '' ? this.listPassageDetails[findIndex]?.passage ?? '' : this.totalAns[i].subQuestions[j].passage;
                    }
                }
            }
        }
    }

    studentsAnswerList(id, status, calledType = '') {
        this.functionCalled = false;
        this.scoreStatus = status;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.classData.content_id,
            // content_id: calledType == '' ? this.classData.content_id : id.content_id,
            content_format: this.classData.content_format,
            class_id: this.classData.class_id,
            student_id: calledType == '' ? id.student_id : this.testContentDetail.student_id,
            student_content_id: id.student_content_id
        };
        if (calledType == 'test') {
            data['is_test'] = '1';
            data['module_id'] = id.content_id;
        }
        this.teacher.studentAnswerList(data).subscribe((successData) => {
            this.answerListSuccess(successData, id, status, calledType);
        }, (error) => {
            console.error(error, 'answer_list');
        });
    }

    answerListSuccess(successData, id, status, calledType) {
        if (successData.IsSuccess) {
            this.subs.forEach((val) => {
                val.unsubscribe();
            });
            //// sidenav closes///
            // this.openmenu = true;
            // this.creator.changeViewList(this.openmenu);
            // this.navServices.collapseSidebar = true;
            //// sidenav closes///

            this.studentAnswer = successData.ResponseObject;
            this.studentAnswer['student_content_id'] = id.student_content_id;
            this.studentName = this.studentAnswer.student_name;
            this.totalAns = [];
            let pdfpath: any;
            pdfpath = this.common.convertBase64(this.studentAnswer?.file_path);
            this.correctPdfPath = this.common.convertBase64(this.studentAnswer?.file_path);
            this.uploadAnswerPath = this.common.convertBase64(this.studentAnswer.upload_answer);
            if (this.studentAnswer.answer_sheet_annotation.length === 0) {
                this.totalSheetInfo = [];
                this.uploadAnswerPath.forEach((item) => this.totalSheetInfo.push([]));
            } else {
                this.totalSheetInfo = this.studentAnswer.answer_sheet_annotation;
            }
            this.answerSheetPath = this.webhost + '/' + this.uploadAnswerPath[0]?.original_image_url;
            this.correctAnswerKeyPath = this.common.convertBase64(this.studentAnswer.answerkey_path);
            if (pdfpath.length != 0) {
                this.studentAnswer.annotation.forEach((item) => {
                    item.isTeacherCorrection = false;
                });
                this.studentAnswer.student_annotation.forEach((item) => {
                    item.isTeacherCorrection = false;
                });
                this.areaInfo = [...this.studentAnswer.student_annotation,
                    ...this.studentAnswer.teacher_annotation, ...this.studentAnswer.annotation];
                this.dragQuestion = [...this.studentAnswer.question_annotation];
                if (this.studentAnswer.answer_sheet_annotation.length != 0) {
                    this.sheetInfo = this.studentAnswer.answer_sheet_annotation[0];
                } else {
                    this.sheetInfo = [];
                }
                console.log(this.sheetInfo, 'sheetInfo');
                this.pdfpath = pdfpath[0];
                if (pdfpath[0].original_image_url != undefined) {
                    this.common.downloadfilewithbytes(this.webhost + '/' + pdfpath[0]?.original_image_url)
                        .subscribe((filebytes: ArrayBuffer) => {
                            this.pdfTemplate = filebytes;
                            this.functionCalled = true;
                            this.isPdfAvailable = true;
                        });
                } else {
                    this.functionCalled = true;
                    this.isPdfAvailable = false;
                }
                // this.pdfTemplate = this.webhost + '/' + this.pdfpath.original_image_url;
                this.correctAnswerKeyPath = this.common.convertBase64(this.studentAnswer.answerkey_path);
                // this.common.downloadfilewithbytes(this.webhost + '/' + this.uploadAnswerPath[0]?.original_image_url)
                //     .subscribe((filebytes: ArrayBuffer) => {
                //       this.answerSheetPath = filebytes;
                //     });
                this.anserPdfTemplate = this.webhost + '/' + this.correctAnswerKeyPath[0]?.original_image_url;
                // this.common.downloadfilewithbytes(this.webhost + '/' + this.correctAnswerKeyPath[0]?.original_image_url)
                //     .subscribe((filebytes: ArrayBuffer) => {
                //       this.anserPdfTemplate = filebytes;
                //     });
                if (this.studentAnswer.answers.length != 0) {
                    this.totalPoints = '';
                    this.totalPointsArray = [];
                    this.studentPoints = '';
                    this.totalFeedBack = '';
                    this.totalStudentFeedBack = '';
                    this.studentPointsArray = [];
                    for (let i = 0; i < this.studentAnswer.answers.length; i++) {
                        this.totalAns[i] = {heading: this.studentAnswer.answers[i].heading, section: []};
                        for (let x = 0; x < this.studentAnswer.answers[i].section.length; x++) {
                            for (let j = 0; j < this.studentAnswer.answers[i].section[x].sub_questions.length; j++) {
                                const val = this.studentAnswer.answers[i].section[x].sub_questions[j].match_case == '1';
                                this.studentAnswer.answers[i].section[x].sub_questions[j].match_case = val;
                                const questionTypeId = this.studentAnswer.answers[i].section[x].sub_questions[j].question_type_id;
                                if (this.studentAnswer.answers[i].section[x].sub_questions[j].auto_grade == '1' && (this.studentAnswer.status == '4' || this.studentAnswer.status == '2')) {
                                    const ans = this.studentAnswer.answers[i].section[x].sub_questions[j].answer;
                                    const student_ans = this.studentAnswer.answers[i].section[x].sub_questions[j].student_answer;
                                    if (this.studentAnswer.answers[i].section[x].sub_questions[j].question_type_id != '54') {
                                        const correctAnswer = this.matchcase(ans, val, questionTypeId);
                                        const studentAnswer = this.matchcase([student_ans], val, questionTypeId);
                                        const enteredAnswer = correctAnswer.every((answer) => {
                                            return !studentAnswer.some((code) => code == answer);
                                        });
                                        this.studentAnswer.answers[i].section[x].sub_questions[j].enteredAnswer = !enteredAnswer;
                                        if (!enteredAnswer) {
                                            this.studentAnswer.answers[i].section[x].sub_questions[j].given_points = this.studentAnswer.answers[i].section[x].sub_questions[j].points;
                                            this.studentAnswer.answers[i].section[x].sub_questions[j].correction_status = '1';
                                        }
                                    } else {
                                        let allCorrect = true;
                                        for (let y = 0; y < ans.length; y++) {
                                            if (this.matchcase(ans[y].value, val, questionTypeId) != this.matchcase(student_ans[y], val, questionTypeId)) {
                                                allCorrect = false;
                                            }
                                        }
                                        if (allCorrect) {
                                            this.studentAnswer.answers[i].section[x].sub_questions[j].given_points = this.studentAnswer.answers[i].section[x].sub_questions[j].points;
                                            this.studentAnswer.answers[i].section[x].sub_questions[j].correction_status = '1';
                                        }
                                    }
                                    // if (this.studentAnswer.answers[i].section[x].sub_questions[j].question_type_id != '54') {
                                    //   if (ans == student_ans || this.matchcase(ans) == this.matchcase(student_ans)) {
                                    //     this.studentAnswer.answers[i].section[x].sub_questions[j].given_points = this.studentAnswer.answers[i].section[x].sub_questions[j].points;
                                    //   }
                                    // }
                                } else if (this.studentAnswer.answers[i].section[x].sub_questions[j].auto_grade == '1' &&
                                    this.studentAnswer.status == '6' && this.studentAnswer.answers[i].section[x].sub_questions[j].question_type_id == '10') {
                                    const ans = this.studentAnswer.answers[i].section[x].sub_questions[j].answer;
                                    const student_ans = this.studentAnswer.answers[i].section[x].sub_questions[j].student_answer;
                                    const correctAnswer = this.matchcase(ans, val, questionTypeId);
                                    const studentAnswer = this.matchcase([student_ans], val, questionTypeId);
                                    const enteredAnswer = correctAnswer.every((answer) => {
                                        return !studentAnswer.some((code) => code == answer);
                                    });
                                    this.studentAnswer.answers[i].section[x].sub_questions[j].enteredAnswer = !enteredAnswer;
                                }
                                // auto grading ends //
                                this.totalPointsArray.push({point: parseFloat(this.studentAnswer.answers[i].section[x].sub_questions[j].points)});
                                this.studentPointsArray.push({point: parseFloat(this.studentAnswer.answers[i].section[x].sub_questions[j].given_points)});
                                this.totalAns[i].section.push(this.studentAnswer.answers[i].section[x].sub_questions[j]);
                            }
                        }
                        this.totalAns[i].section.forEach((item) => {
                            item.maxValErr = false;
                            item.isShow = true;
                        });
                        this.totalFeedBack = this.studentAnswer.feedback;
                        this.totalStudentFeedBack = this.studentAnswer.student_feedback;
                        if (this.studentAnswer.status == '2' || this.studentAnswer.status == '4') {
                            this.totalPoints = this.totalPointsArray.reduce((acc, value) => acc += value.point, 0);
                            this.studentPoints = this.studentPointsArray.reduce((acc, value) => acc += value.point, 0);
                        } else {
                            this.totalPoints = this.studentAnswer.points;
                            this.studentPoints = this.studentAnswer.earned_points;
                        }
                    }
                    this.totalAnsSample = this.totalAns;
                    this.page = 0;
                    this.totalAns = [];
                    this.totalAns.push(this.totalAnsSample[this.page]);
                    if (this.totalAnsSample.length > 1 && this.totalAnsSample[this.page].section.length < 3) {
                        this.page += 1;
                        this.totalAns.push(this.totalAnsSample[this.page]);
                    }
                    if (this.scoreStatus != 2 && this.scoreStatus != 3) {
                        this.interval = setInterval(() => {
                            this.saveAnswer(2, 1, false);
                        }, 60000);
                    }
                } else {
                    this.showingType = '1';
                    this.buttonName = 'Assessments and uploads';
                    this.studentPoints = this.studentAnswer.earned_points;
                    this.totalPoints = this.studentAnswer.points;
                    this.totalFeedBack = this.studentAnswer.feedback;
                    this.totalStudentFeedBack = this.studentAnswer.student_feedback;
                }
                this.pageType = 2;
                if (this.pageType == 2) {
                    this.clickEvent();
                    this.filterForm.controls.studentlist.patchValue(this.studentAnswer.student_id);
                }
            } else {
                this.totalAns = this.studentAnswer.answers;
                this.totalAnsSample = this.studentAnswer.answers;
                this.pageType = 2;
                if (this.studentAnswer.answers.some(code => code.question_type_id == '55')) {
                    this.getFeedbackCount(this.studentAnswer.answers[0]);
                }
                if (['2', '3', '4'].includes(this.studentAnswer.status)) {
                    this.autoGradeScratch(this.totalAns);
                }
                this.contentTimeTaken = this.studentAnswer.content_time_taken && this.studentAnswer.content_time_taken != '' &&
                    this.studentAnswer.content_time_taken != '0' ? parseInt(this.studentAnswer.content_time_taken) : 0;
                this.filterForm.controls.studentlist.patchValue(this.studentAnswer.student_id);
                this.totalFeedBack = this.studentAnswer.feedback;
                this.totalStudentFeedBack = this.studentAnswer.student_feedback;
                if (this.isSingleQnsWithFeedbackType) {
                    this.totalAns.forEach(value => {
                        value.points = this.selectedFeedBackIndex != '' ? this.selectedPreviousStudentAnswer.total_score : value.points;
                        value.given_points = this.selectedFeedBackIndex != '' ? this.selectedPreviousStudentAnswer.student_score : value.given_points;
                    });
                }
                this.totalPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.points), 0);
                this.studentPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
                this.totalAns.forEach((item) => {
                    item.maxValErr = false;
                    item.isShow = true;
                });

                this.commonPatchValue(this.totalAns);
                if (successData.ResponseObject.is_test == '1' && calledType == '') {
                    this.getTestContentDetails(id, successData.ResponseObject, status);
                }
                this.getFeedBackList();
            }
        }
    }

    changeQuestionListFromTest(event) {
        console.log(event, 'event');
        // this.modalRef = this.modalService.open(this.feedbackStatus , {backdrop : 'static'});
        this.studentsAnswerList(event, this.testStatus, 'test');
    }

    saveFeedback() {
        if (this.newFeedBackEntered.trim() != '') {
            const payload = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                student_content_id: this.studentAnswer.student_content_id,
                school_id: this.auth.getSessionData('school_id'),
                feedback: this.newFeedBackEntered,
                version: this.selectedFeedBackIndex
            };
            this.auth.postService(payload, urls.addOverallFeedback).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.newFeedBackEntered = '';
                    this.toastr.success(successData.ResponseObject);
                    this.getFeedBackList();
                } else {
                    this.toastr.error(successData.ErrorObject);
                }
            });
        } else {
            this.toastr.error('Overall Feedback should not be empty');
        }
    }

    deleteConfirmation(value) {
        this.selectedTeacherFeedback = value;
        this.modalRef = this.modalService.open(this.deleteFeedBack);
    }

    updateOrDeleteFeedback(type, id) {
        // type -2 -> Update // type -4 -> Delete
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_content_id: this.studentAnswer.student_content_id,
            school_id: this.auth.getSessionData('school_id'),
            type,
            id
        };
        this.auth.postService(payload, urls.updateOverallFeedback).subscribe((successData: any) => {
            if (successData.IsSuccess) {
                this.modalRef?.close();
                this.toastr.success(successData.ResponseObject);
                this.getFeedBackList();
            } else {
                this.toastr.error(successData.ErrorObject);
            }
        });
    }

    getFeedBackList() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_content_id: this.studentAnswer.student_content_id,
            school_id: this.auth.getSessionData('school_id'),
        };
        this.auth.postService(payload, urls.getOverallFeedback).subscribe((successData: any) => {
            if (successData.IsSuccess) {
                this.feedbackListData = successData.IsSuccess ? successData.ResponseObject : [];
                console.log(this.feedbackListData, 'feedbackListData');
            }
        });
    }

    getTestContentDetails(id, value, status) {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.classData.content_id,
            student_content_id: id.student_content_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.creator.testDetail(payload).subscribe((successData) => {
                this.testSuccess(successData, value, status);
            },
            (error) => {
                console.error(error, 'error_lisDetails');
            });
    }

    testSuccess(successData, value, status) {
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'successData.ResponseObject');
            successData.ResponseObject[0]?.contents.forEach(item => item.name = item.subject + ' - ' + item.module_name);
            this.testContentDetail = successData.ResponseObject[0];
            this.studentsAnswerList(this.testContentDetail?.contents[0], status, 'test');
            this.testContentData = this.testContentDetail?.contents[0]?.content_id;
        }
    }

    commonPatchValue(arrayValue) {
        setTimeout(() => {
            for (let i = 0; i < arrayValue.length; i++) {
                if (arrayValue[i].question_type_id == 7) {
                    for (let j = 0; j < arrayValue[i].heading_option.length; j++) {
                        const index = i;
                        const row = arrayValue[i].heading_option[j].correctActive;
                        const column = arrayValue[i].heading_option[j].correctAnswer;
                        const final = index.toString() + row.toString() + column.toString();
                        document.getElementById('chooseMultipass' + final).setAttribute('checked', 'true');
                    }
                } else if (arrayValue[i].question_type_id == 9) {
                    for (let j = 0; j < arrayValue[i].answer.length; j++) {
                        for (let k = 0; k < arrayValue[i].answer[j].options.length; k++) {
                            if (arrayValue[i].answer[j].options[k].selected == 'true') {
                                document.getElementById(i + 'dropdownCorrect' + j).innerHTML = arrayValue[i].answer[j].options[k].listOption;
                            }
                        }
                    }
                    for (let j = 0; j < arrayValue[i].student_answer.length; j++) {
                        const val = arrayValue[i].student_answer[j].isSelected;
                        if (val !== '') {
                            document.getElementById(i + 'dropdownStudent' + j).innerHTML = arrayValue[i].answer[j].options[val].listOption;
                        } else {
                            document.getElementById(i + 'dropdownStudent' + j).innerHTML = 'Student Not Answered';
                        }
                    }
                }
                if (arrayValue[i].question_type_id == 24) {
                    for (let j = 0; j < arrayValue[i].subQuestions.length; j++) {
                        for (let k = 0; k < arrayValue[i].subQuestions[j].heading_option.length; k++) {
                            const index1 = i;
                            const id = j;
                            const row1 = arrayValue[i].subQuestions[j].heading_option[k].correctActive;
                            const column1 = arrayValue[i].subQuestions[j].heading_option[k].correctAnswer;
                            const final1 = index1.toString() + id.toString() + row1.toString() + column1.toString();
                            document.getElementById('chooseMultipass1' + final1)?.setAttribute('checked', 'true');
                        }
                        const findIndex = this.listPassageDetails.findIndex(value => value.passage_id == arrayValue[i].subQuestions[j].passage_id);
                        arrayValue[i].subQuestions[j].passage = this.listPassageDetails[findIndex]?.passage ?? '';
                    }
                }
            }
            this.clickEvent();
        }, 3000);
    }

    get isSingleQnsWithFeedbackType(): boolean {
        return this.totalAns.length === 1 && this.totalAns.some(qns => qns.question_type_id === '55');
    }

    checkEnteredAnswer(value) {
        let correctAnswer: any;
        if (value.question_type_id == '1') {
            if (value.student_answer.length != 0) {
                correctAnswer = value.answer.every((items, index) => {
                    return !(items.correctActive == '1' && value.student_answer[index].isSelected == '');
                });
            } else {
                correctAnswer = false;
            }
            value.given_points = correctAnswer ? value.points : 0;
        } else if (value.question_type_id == '2') {
            if (value.student_answer.length != 0) {
                correctAnswer = value.answer.every((items, index) => {
                    return !((items.correctActive == '1' && value.student_answer[index].isSelected == '') || (items.correctActive == '' && value.student_answer[index].isSelected != ''));
                });
            } else {
                correctAnswer = false;
            }
            value.given_points = correctAnswer ? value.points : 0;
        } else if (value.question_type_id == '5') {
            correctAnswer = value.student_answer.every((items, index) => {
                return items.isSelected == value.heading_option[index].correctActive.toString();
            });
            value.given_points = correctAnswer ? value.points : 0;
        } else if (value.question_type_id == '7') {
            let pushArrayValue = [];
            value.student_answer.forEach((item) => {
                const splitedValue = item.isSelected != '' ? item.isSelected.split(',') : [];
                splitedValue.forEach((splitForEach) => {
                    pushArrayValue.push({
                        question: item.options,
                        isSelected: splitForEach
                    });
                });
            });
            const result = pushArrayValue.filter((o1) => {
                return !value.heading_option.some((o2) => {
                    return o1.question == o2.correctOption && o1.isSelected == o2.correctAnswer;
                });
            });
            correctAnswer = pushArrayValue.length == value.heading_option.length && result.length == 0;
            value.given_points = correctAnswer ? value.points : 0;
        } else if (value.question_type_id == '9') {
            correctAnswer = value.student_answer.every((item) => {
                return !(item.isSelected == '' || item.options[item.isSelected].selected != 'true');
            });
            value.given_points = correctAnswer ? value.points : 0;
        } else if (value.question_type_id == '10') {
            correctAnswer = value.student_answer.every((items) => {
                const enteredValue = items.options[0]?.value.trim().toLowerCase().split(' ').join('');
                return !(items.isSelected == '' || enteredValue != items.isSelected.trim().toLowerCase().split(' ').join(''));
            });
            value.given_points = correctAnswer ? value.points : 0;
        } else if (value.question_type_id == '16') {
            correctAnswer = value.answer.every((items, index) => {
                return items.correctAnswer == value.student_answer[index].options;
            });
            value.given_points = correctAnswer ? value.points : 0;
        } else if (value.question_type_id == '20') {
            if (value.student_answer[0]?.isSelected) {
                const enteredValue = value.student_answer[0]?.isSelected.trim().toLowerCase().split(' ').join('');
                correctAnswer = value.answer.some(answer => answer.correctAnswer.trim().toLowerCase().split(' ').join('') == enteredValue);
            } else {
                correctAnswer = false;
            }
            value.given_points = correctAnswer ? value.points : 0;
        }
    }

    getElapsedOverAllTime(): TimeSpan {
        let totalSeconds = this.contentTimeTaken;
        let hours: any = 0;
        let minutes: any = 0;
        let seconds: any = 0;
        if (totalSeconds >= 3600) {
            hours = Math.floor(totalSeconds / 3600);
            totalSeconds -= 3600 * hours;
        }

        if (totalSeconds >= 60) {
            minutes = Math.floor(totalSeconds / 60);
            totalSeconds -= 60 * minutes;
        }

        seconds = totalSeconds;
        seconds = seconds <= 9 ? '0' + seconds : seconds;
        hours = hours <= 9 ? '0' + hours : hours;
        minutes = minutes <= 9 ? '0' + minutes : minutes;
        return {
            hours,
            minutes,
            seconds
        };
    }

    getElapsedTime(value): TimeSpan {
        const timeTaken = value.question_type_id != '24' ? value.time_taken && value.time_taken != '' ? (value.time_taken ?? 0) : 0
            : value.subQuestions[0]?.time_taken && value.subQuestions[0]?.time_taken != '' ? (value.subQuestions[0]?.time_taken ?? 0) : 0;
        let totalSeconds = parseInt(timeTaken);
        let hours: any = 0;
        let minutes: any = 0;
        let seconds: any = 0;
        if (totalSeconds >= 3600) {
            hours = Math.floor(totalSeconds / 3600);
            totalSeconds -= 3600 * hours;
        }

        if (totalSeconds >= 60) {
            minutes = Math.floor(totalSeconds / 60);
            totalSeconds -= 60 * minutes;
        }

        seconds = totalSeconds;
        seconds = seconds <= 9 ? '0' + seconds : seconds;
        hours = hours <= 9 ? '0' + hours : hours;
        minutes = minutes <= 9 ? '0' + minutes : minutes;
        return {
            hours,
            minutes,
            seconds
        };
    }

    autoGradeScratch(arrayValue) {
        arrayValue.forEach((value) => {
            if (value.question_type_id != '24' && (this.studentAnswer.status == '2' ||
                    (['3', '4'].includes(this.studentAnswer.status) && value.correction_status == '0'))) {
                this.checkEnteredAnswer(value);
            } else if (value.question_type_id == '24') {
                value.subQuestions.forEach((sub) => {
                    if ((this.studentAnswer.status == '2' || (['3', '4'].includes(this.studentAnswer.status) && sub.correction_status == '0'))) {
                        this.checkEnteredAnswer(sub);
                    }
                });
                value.given_points = value.subQuestions.reduce((acc, val) => acc += parseFloat(val.given_points), 0);
            }
        });
    }

    async saveAnswer(id, type, loader) {
        this.commondata.showLoader(loader);

        let pdfpath: any;
        let filterArr: any = [];
        pdfpath = this.common.convertBase64(this.studentAnswer.file_path);
        if (pdfpath.length == 1 && this.totalAnsSample.length != 0 && this.sectionFilterVal == 'all') {
            for (let i = 0; i < this.totalAns.length; i++) {
                this.totalAnsSample[i] = this.totalAns[i];
            }
        }
        // this.areaInfo = this.areaInfo.filter(value => value.isTeacherCorrection == true);
        this.invalidData = false;
        this.dataMissing = false;

        this.invalidScore = parseInt(this.studentPoints) > parseInt(this.totalPoints);
        let contentFormat = 1;
        if (type != 3 && type != 4) {
            if (pdfpath.length == 1) {
                contentFormat = 1;
                for (let i = 0; i < this.studentAnswer.answers.length; i++) {
                    for (let x = 0; x < this.studentAnswer.answers[i].section.length; x++) {
                        for (let j = 0; j < this.studentAnswer.answers[i].section[x].sub_questions.length; j++) {
                            const ans = this.studentAnswer.answers[i].section[x].sub_questions[j];
                            for (let k = 0; k < this.totalAnsSample[i].section.length; k++) {
                                if (this.totalAnsSample[i].section[k].sub_question_no == ans.sub_question_no) {
                                    if (this.totalAnsSample[i].section[k].givenpoints != undefined) {
                                        ans.given_points = this.totalAnsSample[i].section[k].givenpoints;
                                    }
                                    if (this.totalAnsSample[i].section[k].feedback != undefined) {
                                        ans.feedback = this.totalAnsSample[i].section[k].feedback;
                                    }
                                }
                                if (this.totalAnsSample[i].section[k].maxValErr == true) {
                                    this.invalidData = true;
                                }
                            }
                        }
                    }
                }

                filterArr = parse(stringify(this.studentAnswer.answers));

                filterArr = filterArr.filter((val) => {
                    val.section = val.section.filter((item) => {
                        item.sub_questions = item.sub_questions.filter((sub) => {
                            if (sub.correction_status == '1') {
                                sub.correction_status = '2';
                                return true;
                            } else {
                                return false;
                            }
                        });
                        return item.sub_questions.length !== 0;
                    });
                    return val.section.length !== 0;
                });
                this.totalAns.forEach((val) => {
                    val.section.forEach((item) => {
                        if (item.correction_status == '1') {
                            item.correction_status = '2';
                        }
                    });
                });
                console.log(filterArr, 'filtered array');
                console.log(this.studentAnswer.answers, 'studentAnswer.answers array');
                if (filterArr.length == 0 && !loader && contentFormat != 3) {
                    return false;
                }
            } else if (pdfpath.length == 0) {
                contentFormat = 3;
                this.studentAnswer.answers = this.totalAns;
                for (let i = 0; i < this.studentAnswer.answers.length; i++) {
                    console.log(this.studentAnswer.answers[i].given_points, 'this.studentAnswer.answers[i].given_points');
                    if (this.studentAnswer.answers[i].given_points === '') {
                        this.dataMissing = true;
                    }
                    if (this.studentAnswer.answers[i].maxValErr == true) {
                        this.dataMissing = true;
                    }
                }
            }
        }
        if (((!this.invalidData && !this.dataMissing && !this.invalidScore) || id == 2) && (type != 3 && type != 4)) {
            let answers: any;
            if (contentFormat == 3) {
                const keyName = ['editor_context', 'question', 'level', 'passage_id', 'passage_title', 'passage', 'resource',
                    'question_topic', 'sub_topic',  'question_standard_name', 'subject_name', 'answer_instructions',
                    'rough_image_url', 'rough_image_thumb_url', 'student_answer_image', 'jiixdata', 'roughdata',
                    'student_roughdata', 'multiple_response', 'exact_match', 'hint', 'explanation', 'word_limit',
                    'scoring_instruction', 'source', 'target', 'has_sub_question', 'editor_answer', 'editor_type'];

                const removeKeys = (obj) => {
                    keyName.forEach((key) => {
                        if (key in obj) {
                            delete obj[key];
                        }
                    });
                    return obj;
                };
                answers = this.studentAnswer.answers .map((question) => {
                    const newQuestion = JSON.parse(JSON.stringify(question));
                    if (newQuestion.question_type_id == '24') {
                        delete newQuestion.editor_context;
                        newQuestion.subQuestions = newQuestion.subQuestions.map(subQ => removeKeys(subQ));
                    } else {
                        removeKeys(newQuestion);
                    }
                    return newQuestion;
                });
            } else {
                answers = filterArr;
            }
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                student_id: this.studentAnswer.student_id,
                content_id: this.studentAnswer.content_id,
                student_content_id: this.studentAnswer.student_content_id,
                content_format: contentFormat,
                class_id: this.classData.class_id,
                type: id,
                answers,
                points: this.totalPoints,
                feedback: this.totalFeedBack,
                earned_points: this.studentPoints,
            };

            if (this.testContentDetail) {
                data['is_test'] = '1';
                data['module_id'] = this.testContentData;
            }
            this.teacher.saveCorrection(data).subscribe((successData) => {
                    this.correctionSuccess(successData, data, type, loader, pdfpath, id);
                },
                (error) => {
                    this.correctionFailure(error);
                });
        } else if (type == 3 || type == 4) {
            if (!this.invalidScore) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    student_id: this.studentAnswer.student_id,
                    content_id: this.studentAnswer.content_id,
                    student_content_id: this.studentAnswer.student_content_id,
                    class_id: this.classData.class_id,
                    type: id,
                    answers: [],
                    points: this.totalPoints,
                    feedback: this.totalFeedBack,
                    earned_points: this.studentPoints
                };
                if (this.testContentDetail) {
                    data['is_test'] = '1';
                    data['module_id'] = this.testContentData;
                }
                this.teacher.saveCorrection(data).subscribe((successData) => {
                        this.correctionSuccess(successData, data, type, loader, pdfpath, id);
                    },
                    (error) => {
                        this.correctionFailure(error);
                    });
            } else if (loader) {
                this.commondata.showLoader(false);
                if (type == 2 || type == 3) {
                    this.toastr.error('Invalid obtained points', 'Release Score failed');
                } else {
                    this.toastr.error('Invalid obtained points', 'Saving correction failed');
                }
            }
        } else if (this.invalidData == true && loader) {
            this.commondata.showLoader(false);
            if (type == 2 || type == 3) {
                this.toastr.error('Invalid correction', 'Release Score failed');
            } else {
                this.toastr.error('Invalid correction', 'Saving correction failed');
            }
        } else if (this.dataMissing === true && loader) {
            this.commondata.showLoader(false);
            if (type == 2 || type == 3) {
                this.toastr.error('Please correct all the questions', 'Release Score failed');
            } else {
                this.toastr.error('Please correct all the questions', 'Saving correction failed');
            }
        } else if (this.invalidScore) {
            this.commondata.showLoader(false);
            if (type == 2 || type == 3) {
                this.toastr.error('Obtained points must be lesser than Total points', 'Release Score failed');
            } else {
                this.toastr.error('Obtained points must be lesser than Total points', 'Saving correction failed');
            }
        }
    }

    correctionSuccess(successData, data, type, loader, pdfpath, id) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            this.studentList.forEach((item) => {
                if (item.student_id === data.student_id) {
                    item.saved = true;
                }
            });
            if (this.studentAnswer.answers && pdfpath.length == 1) {
                this.studentAnswer.answers.forEach((value) => {
                    value.section.forEach((sec) => {
                        sec.sub_questions.forEach((item) => {
                            if (item.answer_attended == '1') {
                                item.answer_attended = '2';
                            }
                        });
                    });
                });
            }
            if (loader) {
                if (this.testContentDetail) {
                    if ([2, 3].indexOf(type) > - 1) {

                    } else {
                        const testDetailsIndex = this.testContentDetail.contents.findIndex((value) => value.content_id == this.testContentData);
                        console.log(testDetailsIndex, 'index');
                        if (testDetailsIndex == this.testContentDetail.contents.length - 1) {
                            this.toastr.success(successData.ResponseObject, 'Saved');
                            if (this.showstudentContentlist) {
                                this.route.navigate(['/student-content/list-content/old']);
                                this.auth.removeSessionData('student-content');
                            } else {
                                this.pageType = 1;
                                const datum = JSON.parse(this.auth.getSessionData('correctionDetail'));
                                this.studentsDetails(datum, 0);
                                this.sectionFilterVal = 'all';
                            }
                            clearInterval(this.interval);
                        } else {
                            if (id == 1) {
                                this.testContentData = this.testContentDetail?.contents[testDetailsIndex + 1].content_id;
                                window.scrollTo({top: 0, behavior: 'smooth'});
                                this.studentsAnswerList(this.testContentDetail?.contents[testDetailsIndex + 1], this.testStatus, 'test');
                            } else {
                                this.toastr.success(successData.ResponseObject, 'Saved');
                                if (this.showstudentContentlist) {
                                    this.route.navigate(['/student-content/list-content/old']);
                                    this.auth.removeSessionData('student-content');
                                } else {
                                    this.pageType = 1;
                                    const datum = JSON.parse(this.auth.getSessionData('correctionDetail'));
                                    this.studentsDetails(datum, 0);
                                    this.sectionFilterVal = 'all';
                                }
                                clearInterval(this.interval);
                            }
                        }
                    }
                } else {
                    if (type == 2 || type == 3) {
                        this.releaseScore();
                    } else {
                        this.toastr.success(successData.ResponseObject, 'Saved');
                    }
                    if (this.showstudentContentlist) {
                        this.route.navigate(['/student-content/list-content/old']);
                        this.auth.removeSessionData('student-content');
                    } else {
                        this.pageType = 1;
                        const datum = JSON.parse(this.auth.getSessionData('correctionDetail'));
                        this.studentsDetails(datum, 0);
                        this.sectionFilterVal = 'all';
                    }
                    clearInterval(this.interval);
                }
            }
        }
    }

    correctionFailure(error) {
        this.commondata.showLoader(false);
        this.toastr.error(error, 'Failed');
    }

    saveAndRelease(id) {
        this.releaseStudent = [];
        this.releaseStudentContentId = [];
        if (id == 1) {
            this.studentList.forEach((item) => {
                if (item.checked == true) {
                    this.releaseStudent.push(item.student_id);
                    this.releaseStudentContentId.push(item.student_content_id);
                }
            });
            this.releaseScore();
        } else if ([2, 3].indexOf(id) > -1) {
            if (this.testContentDetail) {
                this.modalRef = this.modalService.open(this.releaseScoreAlert);
            } else {
                this.saveAnswer(1, id, true);
                this.releaseStudent.push(this.studentAnswer.student_id);
                this.releaseStudentContentId.push(this.studentAnswer.student_content_id);
            }
        }
    }

    async submitAllTestAndReleaseScore() {
        this.modalRef.close();
        this.releaseStudent.push(this.studentAnswer.student_id);
        this.releaseStudentContentId.push(this.studentAnswer.student_content_id);
        this.modalRef = this.modalService.open(this.loaderStatus);
        const promises = [];
        for (const content of this.testContentDetail.contents) {
            promises.push(this.studentsAnswerListForTest(content, this.classData.status));
        }
        await Promise.all(promises);
        await this.releaseScore();
        await this.modalRef?.close();
    }

    studentsAnswerListForTest(id, status): Promise<void> {
        return new Promise((resolve, reject) => {
            this.functionCalled = false;
            this.scoreStatus = status;
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                content_id: this.classData.content_id,
                content_format: this.classData.content_format,
                class_id: this.classData.class_id,
                student_id: this.testContentDetail.student_id,
                student_content_id: id.student_content_id,
                is_test: '1',
                module_id: id.content_id
            };
            this.teacher.studentAnswerList(data).subscribe((successData) => {
                this.answerListSuccessForTest(successData, id, resolve, reject);
            }, (error) => {
                reject('Question list API failed');
            });
        });
    }

    answerListSuccessForTest(successData, id, resolve, reject) {
        if (successData.IsSuccess) {
            this.subs.forEach(val => val.unsubscribe());

            const studentAnswer = successData.ResponseObject;
            studentAnswer['student_content_id'] = id.student_content_id;
            this.studentName = studentAnswer.student_name;
            let pdfpath: any;
            pdfpath = this.common.convertBase64(studentAnswer?.file_path);
            if (pdfpath.length != 0) {

            } else {
                this.pageType = 2;
                let studentPoints = 0;
                let answers = [];
                let totalFeedBack = '';
                const totalPoints = studentAnswer.answers.reduce((acc, value) => acc += parseFloat(value.points), 0);
                if (this.testContentData == studentAnswer.answers[0]?.content_id) {
                    answers = this.totalAns;
                    studentPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
                    totalFeedBack = this.totalFeedBack;
                } else {
                    answers = studentAnswer.answers;
                    totalFeedBack = studentAnswer.feedback;
                    if (['2', '3', '4'].includes(studentAnswer.status)) {
                        this.autoGradeScratch(answers);
                    }
                }
                this.filterForm.controls.studentlist.patchValue(studentAnswer.student_id);
                const totalStudentFeedBack = studentAnswer.student_feedback;
                studentAnswer.answers.forEach((item) => {
                    item.maxValErr = false;
                    item.isShow = true;
                });
                studentPoints = studentAnswer.answers.reduce((acc, value) => acc += parseFloat(value.given_points), 0);

                const data = {
                    answers,
                    points: totalPoints,
                    feedback: totalFeedBack,
                    earned_points: studentPoints,
                };
                console.log(data, 'answer_service_payload');
                this.saveAnswerForTest(1, 2, false, resolve, reject, id, data);
            }
        } else {
            reject();
        }
    }

    async saveAnswerForTest(id, type, loader, resolve, reject, value, dataValue) {
        let dataMissing = false;
        const invalidScore = parseInt(this.studentPoints) > parseInt(this.totalPoints);
        for (let i = 0; i < dataValue.answers.length; i++) {
            if (dataValue.answers[i].given_points === '') {
                dataMissing = true;
            }
            if (dataValue.answers[i].maxValErr == true) {
                dataMissing = true;
            }
        }
        const keyName = ['editor_context', 'question', 'level', 'passage_id', 'passage_title', 'passage', 'resource',
            'question_topic', 'sub_topic',  'question_standard_name', 'subject_name', 'answer_instructions',
            'rough_image_url', 'rough_image_thumb_url', 'student_answer_image', 'jiixdata', 'roughdata',
            'student_roughdata', 'multiple_response', 'exact_match', 'hint', 'explanation', 'word_limit',
            'scoring_instruction', 'source', 'target', 'has_sub_question', 'editor_answer', 'editor_type'];

        const removeKeys = (obj) => {
            keyName.forEach((key) => {
                if (key in obj) {
                    delete obj[key];
                }
            });
            return obj;
        };
        const answers = dataValue.answers.map((question) => {
            const newQuestion = JSON.parse(JSON.stringify(question));
            if (newQuestion.question_type_id == '24') {
                delete newQuestion.editor_context;
                newQuestion.subQuestions = newQuestion.subQuestions.map(subQ => removeKeys(subQ));
            } else {
                removeKeys(newQuestion);
            }
            return newQuestion;
        });
        if (((!dataMissing && !invalidScore) || id == 2) && (type != 3 && type != 4)) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                student_id: this.studentAnswer.student_id,
                content_id: this.testContentDetail.content_id,
                student_content_id: this.studentAnswer.student_content_id,
                content_format: '3',
                class_id: this.classData.class_id,
                type: id,
                // answers: dataValue.answers,
                answers,
                points: dataValue.points,
                feedback: dataValue.feedback,
                earned_points: dataValue.earned_points,
                is_test: '1',
                module_id: value.content_id
            };
            this.teacher.saveCorrection(data).subscribe((successData) => {
                    resolve();
                },
                (error) => {
                    reject();
                });
        } else if (loader) {
            if (type == 2 || type == 3) {
                this.toastr.error('Invalid correction', 'Release Score failed');
            } else {
                this.toastr.error('Invalid correction', 'Saving correction failed');
            }
            reject();
        } else if (this.dataMissing === true && loader) {
            if (type == 2 || type == 3) {
                this.toastr.error('Please correct all the questions', 'Release Score failed');
            } else {
                this.toastr.error('Please correct all the questions', 'Saving correction failed');
            }
            reject();
        } else if (this.invalidScore) {
            if (type == 2 || type == 3) {
                this.toastr.error('Obtained points must be lesser than Total points', 'Release Score failed');
            } else {
                this.toastr.error('Obtained points must be lesser than Total points', 'Saving correction failed');
            }
            reject();
        }
    }

    releaseScore() {
        if (this.releaseStudent.length > 0) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                student_id: this.releaseStudent,
                content_id: this.studentAnswer && !this.testContentDetail ? this.studentAnswer.content_id : this.classData.content_id,
                student_content_id: this.releaseStudentContentId,
                class_id: this.classData.class_id,
                release_score: '1'
            };
            this.teacher.releaseScore(data).subscribe((successData) => {
                    this.releaseScoreSuccess(successData);
                },
                (error) => {
                    this.toastr.error(error, 'Failed');
                });
        } else {
            this.toastr.error('Select atleast one student');
        }
    }

    releaseScoreSuccess(successData) {
        if (successData.IsSuccess) {
            if (this.pageType == 1) {
                const datum = JSON.parse(this.auth.getSessionData('correctionDetail'));
                this.studentsDetails(datum, 0);
            } else {
                if (this.showstudentContentlist) {
                    this.route.navigate(['/student-content/list-content/old']);
                    this.auth.removeSessionData('student-content');
                } else {
                    this.pageType = 1;
                    const datum = JSON.parse(this.auth.getSessionData('correctionDetail'));
                    this.studentsDetails(datum, 0);
                    this.sectionFilterVal = 'all';
                }
                clearInterval(this.interval);
            }
            this.toastr.success(successData.ResponseObject, 'Score released');
        }
    }

    saveCorrectionAnnotation() {
        const val = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.studentAnswer.school_id,
            content_id: this.studentAnswer.content_id,
            class_id: this.classData.class_id,
            student_id: this.studentAnswer.student_id,
            student_content_id: this.studentAnswer.student_content_id,
            annotation: this.areaInfo,
            type: '1'
        };
        this.teacher.saveTeacherCorrectionAnnotation(val).subscribe((successData) => {
                this.AnnotateSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    AnnotateSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData.isSuccess);
        }
    }

    saveAnswerAnnotation() {
        const val = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.studentAnswer.school_id,
            content_id: this.studentAnswer.content_id,
            class_id: this.classData.class_id,
            student_id: this.studentAnswer.student_id,
            student_content_id: this.studentAnswer.student_content_id,
            answer_sheet_annotation: this.totalSheetInfo,
        };
        this.teacher.saveAnswerSheetAnnotation(val).subscribe((successData) => {
                this.answerSheetSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    answerSheetSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData.isSuccess);
        }
    }

    /// number validation///

    numberValidate(event) {
        this.validationService.numberValidate(event);
    }

    filterQues(event) {
        this.questionFilter = event.target.value;
        if (event.target.value == 'all') {
            if (this.correctPdfPath?.length == 0) {
                this.totalAns.forEach((item) => {
                    item.isShow = true;
                });
            } else {
                console.log('pdf type');
                this.totalAns.forEach((value) => {
                    value.section.forEach((item) => {
                        item.isShow = true;
                    });
                });
            }
        } else if (event.target.value == 'correct') {
            if (this.correctPdfPath?.length == 0) {
                this.totalAns.forEach((item) => {
                    if (item.given_points != '0') {
                        item.isShow = true;
                    } else {
                        item.isShow = false;
                    }
                });
            } else {
                console.log('pdf type');
                this.correctFilter();
            }
            console.log(this.totalAns, 'totalAns');
        } else if (event.target.value == 'wrong') {
            if (this.correctPdfPath?.length == 0) {
                this.totalAns.forEach((item) => {
                    if (item.given_points == '0') {
                        item.isShow = true;
                    } else {
                        item.isShow = false;
                    }
                });
            } else {
                console.log('pdf type');
                this.wrongFilter();
            }
        }
    }

    correctFilter() {
        this.totalAns.forEach((value, index) => {
            let len = 0;
            value.section.forEach((item) => {
                if (item.given_points != '0') {
                    len += 1;
                    item.isShow = true;
                } else {
                    item.isShow = false;
                }
            });
            if (len < 3 && this.totalAns.length < this.totalAnsSample.length && index == (this.totalAns.length - 1) && this.sectionFilterVal == 'all') {
                this.page += 1;
                this.totalAns.push(this.totalAnsSample[this.page]);
                this.correctFilter();
            }
        });
    }

    wrongFilter() {
        this.totalAns.forEach((value, index) => {
            let len = 0;
            value.section.forEach((item) => {
                if (item.given_points == '0') {
                    len += 1;
                    item.isShow = true;
                } else {
                    item.isShow = false;
                }
            });
            if (len < 3 && this.totalAns.length < this.totalAnsSample.length && index == (this.totalAns.length - 1) && this.sectionFilterVal == 'all') {
                this.page += 1;
                this.totalAns.push(this.totalAnsSample[this.page]);
                this.wrongFilter();
            }
        });
    }

    markValidation(event, high, i, j, type) {
        let val = parseFloat(event.target.value);
        let pt = parseFloat(high);
        if (val > pt) {
            if (type == 'scratch') {
                this.totalAns[i].maxValErr = true;
            } else if (type == 'passage') {
                this.totalAns[i].subQuestions[j].maxValErr = true;
            } else {
                this.totalAns[i].section[j].maxValErr = true;
            }
        } else {
            if (type == 'scratch') {
                this.totalAns[i].maxValErr = false;
            } else if (type == 'passage') {
                this.totalAns[i].subQuestions[j].maxValErr = false;
            } else {
                this.totalAns[i].section[j].maxValErr = false;
            }
        }
    }

    listSelect(event, id) {
        this.studentList[id].checked = !event;
    }

    deSelect(event) {
        if (event.target.checked) {
            this.studentList.forEach((item) => {
                if (item.status == 5 || item.status == 3 || item.status == 4) {
                    item.checked = true;
                }
            });
        } else {
            this.studentList.forEach((item) => {
                item.checked = false;
            });
        }

    }

    sectionFilter(event) {
        const scroll = document.getElementById('scrollinnnersection');
        scroll.scrollTo(0, 0);
        if (event.target.value == 'all') {
            this.page = 0;
            this.totalAns = [];
            if (this.totalAnsSample.length > 2) {
                for (let i = 0; i < 3; i++) {
                    this.page = i;
                    this.totalAns.push(this.totalAnsSample[this.page]);
                }
            } else {
                this.totalAns = [...this.totalAnsSample];
            }
        } else {
            this.totalAns = [this.totalAnsSample[parseInt(event.target.value)]];
        }
        this.answerFiter();
    }

    givePoints(val, item, type, index, id) {
        item.correction_status = '1';
        if (val == 'true') {
            item.given_points = item.points;
        } else {
            if (this.correctPdfPath?.length == 0 && item.question_type_id == '55') {
                item.given_points = this.previousFeedBack[0]?.student_score ?? 0;
            } else {
                item.given_points = 0;
            }
        }
        if (type == 'scratch') {
            item.correction_status = '2';
            this.studentPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
        } else if (type == 'pdf') {
            let count = 0;
            for (let i = 0; i < this.totalAns.length; i++) {
                for (let j = 0; j < this.totalAns[i].section.length; j++) {
                    count += 1;
                    if (index == i && id == j) {
                        this.studentPointsArray[count - 1].point = parseFloat(item.given_points);
                    }
                }
            }
            this.studentPoints = this.studentPointsArray.reduce((acc, value) => acc += value.point, 0);
        } else {
            item.correction_status = '2';
            this.totalAns[index].given_points = this.totalAns[index].subQuestions.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
            this.studentPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
        }
    }

    getFeedbackLabel(feedback: any): { label: string } {
        if (feedback.student_score >= 30) {
            return { label: 'Exceptional'};
        } else if (feedback.student_score > 20 && feedback.student_score <= 29) {
            return { label: 'Good'};
        } else {
            return { label: 'Improve'};
        }
    }

    getPoints(event, index, id, type) {
        if (type == 'scratch') {
            if (event.target.value != '') {
                this.totalAns[index].correction_status = '2';
                this.totalAns[index].given_points = parseFloat(event.target.value);
                this.studentPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
            }
        } else if (type == 'passage') {
            if (event.target.value != '') {
                this.totalAns[index].correction_status = '2';
                this.totalAns[index].subQuestions[id].given_points = parseFloat(event.target.value);
                this.totalAns[index].given_points = this.totalAns[index].subQuestions.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
                this.studentPoints = this.totalAns.reduce((acc, value) => acc += parseFloat(value.given_points), 0);
            }
        } else {
            if (event.target.value != '') {
                this.totalAns[index].section[id].givenpoints = event.target.value;
                this.totalAns[index].section[id].correction_status = '1';
                let count = 0;
                for (let i = 0; i < this.totalAns.length; i++) {
                    for (let j = 0; j < this.totalAns[i].section.length; j++) {
                        count += 1;
                        if (index == i && id == j) {
                            this.studentPointsArray[count - 1].point = parseFloat(event.target.value);
                        }
                    }
                }
                this.studentPoints = this.studentPointsArray.reduce((acc, value) => acc += value.point, 0);
            }
        }
    }

    getFeedback(event, i, j) {
        this.totalAns[i].section[j].feedback = event.target.value;
        this.totalAns[i].section[j].correction_status = '1';
    }

    cfsGetFeedback(event, i) {
        this.totalAns[i].feedback = event.target.value;
    }

    cfsGetPassageFeedback(event, i, j) {
        this.totalAns[i].subQuestions[j].feedback = event.target.value;
    }

    getDelete(event) {
        this.deleteAnnatation = event;
    }

    getAnnotation(event) {
        this.areaInfo = event;
        this.saveCorrectionAnnotation();
        let other = [...this.studentAnswer.annotation, ...this.studentAnswer.student_annotation];
        other.forEach((item) => {
            item.isTeacherCorrection = false;
        });
        this.areaInfo = [...this.areaInfo, ...other];
    }

    pdfshow() {
        this.showpdf = !this.showpdf;
        if (this.showpdf == true) {
            this.buttonName = 'Hide PDF';
        } else {
            this.buttonName = 'Show PDF';
            this.answerSheet = false;
        }
    }

    splitMultiChoose(val, index) {
        if (val != '') {
            val = val.toString();
            let value = val.split(',');
            for (let i = 0; i < value.length; i++) {
                if (value[i] == index) {
                    return true;
                }
            }
        } else {
            return false;
        }

    }

    close() {
        this.modalRef.close();
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
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
