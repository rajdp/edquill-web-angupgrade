import {
    Component,
    EventEmitter, HostListener,
    Input,
    OnDestroy,
    OnInit,
    Output,
    TemplateRef,
    ViewChild
} from '@angular/core';
import {NgbModal, NgbModalConfig, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {TeacherService} from '../../../shared/service/teacher.service';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {NavService} from '../../../shared/service/nav.service';
import {CommonService} from '../../../shared/service/common.service';
import {Router} from '@angular/router';
import {ValidationService} from '../../../shared/service/validation.service';
import {ToastrService} from 'ngx-toastr';
import {CreatorService} from '../../../shared/service/creator.service';
import {parse} from 'flatted';
import {jsPDF} from 'jspdf';
import {EnvironmentService} from '../../../environment.service';
import {StudentService} from '../../../shared/service/student.service';
import {ContentdetailService} from '../../../shared/service/contentdetail.service';
import {TimeSpan} from '../answering/answering.component';
import {ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexXAxis,
    ApexYAxis, ApexLegend} from 'ng-apexcharts';
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
    selector: 'app-answer-sheet',
    templateUrl: './answer-sheet.component.html',
    styleUrls: ['./answer-sheet.component.scss']
})
export class AnswerSheetComponent implements OnInit, OnDestroy {
    @Input() answerShow: boolean;
    @Input() contentId: any;
    @Input() contentFormat: any;
    @Input() classId: any;
    @Input() studentReportId: any;
    @Input() backStatus: any;
    @Input() studentContentId: any;
    @Input() is_test = '0';
    @Output() studentName = new EventEmitter<any>();

    public studentId: any;
    public scoreData: any;
    public studentAnswer: any;
    public contentTimeTaken = 0;
    public totalAns = [];
    public showpdf: any;
    public functionCalled = false;
    public questionEmpty = false;
    public hideAnswer = false;
    public mathDelayer = false;
    public isPdfAvailable: boolean = true;
    public blink = true;
    public areaInfo = [];
    public sheetInfo = [];
    public dragQuestion = [];
    public workAnnotate = [];
    public totalSheetInfo = [];
    public workAnnotatePage = 0;
    public sheetIndex = 0;
    public workAnnotatePDF: any;
    public jsPDF: jsPDF;
    public webhost: any;
    public buttonName: any;
    public showingType: any;
    public pdfTemplate: any;
    public answerSheetPath: any;
    public AnswerType: any;
    public correctPdfPath: any = [];
    public uploadAnswerPath: any;
    public showPDF = false;
    public showQuestion = false;
    public contentType = '';
    @ViewChild('workArea') workArea: TemplateRef<any>;
    @ViewChild('overallFeedback') overallFeedback: TemplateRef<any>;
    private modalRef: NgbModalRef;
    convertedText: SafeHtml;
    public selectedFeedBackIndex: any = '';
    public selectedPreviousStudentAnswer: any;
    public previousFeedBack = [];
    public listPassageDetails = [];
    public testContentDetail = [];
    public fullTestContentDetail: any;
    public testContentData: any;
    public contentName = '';
    public feedbackList = [];
    public totalIndivialScore = 5;
    public totalScore = 0;
    public score = 0;
    public chartOptions: Partial<ChartOptions>;
    public totalFeedBackCount = 0;
    public feedbackListData = [];
    public selectedVersion = 0;
    totalFeedbackMaxHeight = 'auto';

    constructor(public config: NgbModalConfig, public confi: ConfigurationService, public sanitizer: DomSanitizer, public teacher: TeacherService, private student: StudentService,
                private modalService: NgbModal, public auth: AuthService, public commondata: CommonDataService, public navServices: NavService, public common: CommonService,
                public route: Router, public env: EnvironmentService, public validationService: ValidationService,
                public toastr: ToastrService, public creator: CreatorService, public content: ContentdetailService) {
        this.backStatus = true;
        this.scoreData = JSON.parse(this.auth.getSessionData('student-card'));
        this.contentType = this.auth.getSessionData('ContentType');
        console.log(this.contentType, 'contentyPe');
        this.webhost = this.confi.getimgUrl();
        this.showpdf = true;
        this.buttonName = 'Question pdf';
        this.AnswerType = 'Hide answer';
        this.showingType = 1;
        this.creator.changeViewList(true);
    }

    ngOnDestroy(): void {
        this.creator.changeViewList(false);
    }

    @HostListener('window:resize')
    onResize() {
        this.updateContentHeight();
    }

    ngOnInit(): void {
        this.passageList();
        this.studentId = this.auth.getUserId();
        if (this.answerShow) {
            this.scoreData = {
                content_id: this.contentId,
                content_format: this.contentFormat,
                class_id: this.classId,
                student_content_id: this.studentContentId,
                is_test: this.is_test
            };
            this.studentId = this.studentReportId;
            this.backStatus = this.backStatus;
        }
        if (this.scoreData?.is_test == 1) {
            this.testDetails();
        } else {
            this.studentsAnswerList(this.scoreData);
        }
    }

    passageList() {

        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.scoreData?.content_id ?? ''
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
        if (this.listPassageDetails.length != 0) {
            for (let i = 0; i < this.totalAns.length; i++) {
                if (this.totalAns[i].question_type_id == '24') {
                    for (let j = 0; j < this.totalAns[i].subQuestions.length; j++) {
                        const findIndex = this.listPassageDetails.length != 0 ?
                            this.listPassageDetails.findIndex(value => value.passage_id == this.totalAns[i].subQuestions[j]?.passage_id) : '';
                        this.totalAns[i].subQuestions[j].passage = findIndex != '' ? this.listPassageDetails[findIndex].passage : this.totalAns[i].subQuestions[j].passage;
                    }
                    console.log(this.totalAns[i].subQuestions, 'subQuestions');
                }
            }
            console.log(this.listPassageDetails, 'listPassageDetails');
        }
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
        if (markdown) {
            markdown = markdown.replace(/^'+|'+$/g, '');
            let html = markdown.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
            html = html.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
            return this.sanitizer.bypassSecurityTrustHtml(html);
        } else {
            return '-';
        }
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
            feedback[1]?.feedback.forEach(items => items.collaspsed = true)
        });
        this.versionComparsionBarChart();
    }

    // scrollToFeedBack() {
    //     setTimeout(() => {
    //         document.getElementById('feedback_got').scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start',
    //             inline: 'start'
    //         });
    //     }, 0);
    // }

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

    getFeedbackLabel(feedback: any): { label: string } {
        if (feedback.student_score >= 30) {
            return { label: 'Exceptional'};
        } else if (feedback.student_score > 20 && feedback.student_score <= 29) {
            return { label: 'Good'};
        } else {
            return { label: 'Improve'};
        }
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
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((items, index) => {
                items.index = index;
                items.version_name = 'Version' + ' ' + (successData.ResponseObject.length - index);
            });
            this.previousFeedBack = successData.ResponseObject;
            if (this.previousFeedBack.length != 0) {
                this.selectedFeedBackIndex = this.previousFeedBack.length - this.previousFeedBack[0]?.index;
                this.selectedPreviousStudentAnswer = this.previousFeedBack[0];
                this.selectedVersion = 0;
                if (this.selectedPreviousStudentAnswer.version != 'V1') {
                    this.convertedText = this.previousFeedBack[0]?.feedback;
                    this.updateFeedback();
                } else {
                    this.convertedText = this.convertMarkdownToHtml(this.previousFeedBack[0]?.feedback);
                }
            }
            this.updateContentHeight();
        }
    }

    showOverallFeedback() {
        this.modalRef = this.modalService.open(this.overallFeedback, {size: 'xl', backdrop: 'static'});
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

    showPDFOrQns() {
        if (!this.showPDF) {
            this.showPDF = true;
            this.showQuestion = false;
        }
    }

    splitMultiChoose(val, index) {
        const value = val.split(',');
        for (let i = 0; i < value.length; i++) {
            if (parseInt(value[i]) === parseInt(index)) {
                return true;
            }
        }
    }

    selectAnswerSheet(index) {
        this.blink = false;
        this.sheetIndex = index;
        this.answerSheetPath = this.webhost + '/' + this.uploadAnswerPath[index]?.original_image_url;
        this.sheetInfo = [...this.totalSheetInfo[index]];
        this.showType('2');
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

    showType(id) {
        this.showingType = id;
        if (id == '1') {
            this.buttonName = 'Question pdf';
        } else if (id == '2') {
            this.buttonName = 'Answer sheet';
            setTimeout(() => {
                this.blink = true;
            }, 1000);
        } else if (id == '3') {
            this.buttonName = 'Show answer';
        }
    }

    HideAnswer() {
        this.hideAnswer = !this.hideAnswer;
        if (this.hideAnswer) {
            console.log('in');
            this.AnswerType = 'Show answer';
        } else if (!this.hideAnswer) {
            this.AnswerType = 'Hide answer';
        }
    }

    back() {
        if (this.scoreData.content_type == '2') {
            this.route.navigate(['/studentlogin/assignment']);
        } else if (this.scoreData.content_type == '3') {
            this.route.navigate(['/studentlogin/assessment']);
        }
    }

    changeView(event) {
        if (event.target.value == '1') {
            this.showPDF = true;
            this.showQuestion = false;
        } else if (event.target.value == '0') {
            this.showPDF = false;
            this.showQuestion = false;
        } else if (event.target.value == '2') {
            this.showQuestion = true;
            this.showPDF = false;
        }
    }

    changePDF(event) {
        console.log(event, 'event');
        console.log(event.target.value, 'target');
        if (event.target.value == 'all') {
            this.showType('1');
        } else {
            this.selectAnswerSheet(event.target.value);
        }
    }

    filterQues(event) {
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
                    item.isShow = item.given_points != '0';
                });
            } else {
                console.log('pdf type');
                this.totalAns.forEach((value) => {
                    value.section.forEach((item) => {
                        item.isShow = item.given_points != '0';
                    });
                });
            }
            console.log(this.totalAns, 'totalAns');
        } else if (event.target.value == 'wrong') {
            if (this.correctPdfPath?.length == 0) {
                this.totalAns.forEach((item) => {
                    item.isShow = item.given_points == '0';
                });
            } else {
                console.log('pdf type');
                this.totalAns.forEach((value) => {
                    value.section.forEach((item) => {
                        item.isShow = item.given_points == '0';
                    });
                });
            }
        }
    }

    studentsAnswerList(details) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.fullTestContentDetail ? this.fullTestContentDetail.content_id : details.content_id,
            content_format: details.content_format,
            class_id: this.scoreData?.class_id,
            student_id: this.studentId,
            student_content_id: details.student_content_id
        };
        if (this.fullTestContentDetail) {
            data['is_test'] = '1';
            data['module_id'] = details.content_id;
        }
        this.teacher.studentAnswerList(data).subscribe((successData) => {
                this.contentName = this.scoreData?.is_test == 1 ? this.scoreData?.content_name + ' - ' + details?.subject + ' - ' + details?.module_name : details.content_name;
                this.answerListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_answer_list');
            });
    }

    answerListSuccess(successData) {
        if (successData.IsSuccess) {
            this.studentAnswer = successData.ResponseObject;
            this.studentName.emit(this.studentAnswer.student_name);
            console.log(this.studentAnswer, 'studentAns');
            this.totalAns = [];
            this.correctPdfPath = this.common.convertBase64(this.studentAnswer?.file_path);
            this.studentAnswer.downloadPDF = this.studentAnswer?.answerkey_path ? this.common.convertBase64(this.studentAnswer?.answerkey_path) : [];
            this.uploadAnswerPath = this.common.convertBase64(this.studentAnswer?.upload_answer);
            if (this.studentAnswer.answer_sheet_annotation.length === 0) {
                this.uploadAnswerPath.forEach((item) => this.totalSheetInfo.push([]));
            } else {
                this.totalSheetInfo = this.studentAnswer.answer_sheet_annotation;
            }
            this.answerSheetPath = this.webhost + '/' + this.uploadAnswerPath[0]?.original_image_url;
            if (this.correctPdfPath.length != 0) {
                this.studentAnswer.annotation.forEach((item) => {
                    item.isTeacherCorrection = false;
                });
                this.areaInfo = [...this.studentAnswer.student_annotation,
                    ...this.studentAnswer.teacher_annotation, ...this.studentAnswer.annotation];
                console.log(this.areaInfo, 'annotationValue');
                this.dragQuestion = [...this.studentAnswer.question_annotation];
                if (this.correctPdfPath[0].original_image_url != undefined) {
                    this.pdfTemplate = this.webhost + '/' + this.correctPdfPath[0]?.original_image_url;
                    this.isPdfAvailable = true;
                } else {
                    this.isPdfAvailable = false;
                }
                if (this.studentAnswer.answers.length != 0) {
                    for (let i = 0; i < this.studentAnswer.answers.length; i++) {
                        this.totalAns[i] = {heading: this.studentAnswer.answers[i].heading, section: []};
                        for (let x = 0; x < this.studentAnswer.answers[i].section.length; x++) {
                            for (let j = 0; j < this.studentAnswer.answers[i].section[x].sub_questions.length; j++) {
                                const val = this.studentAnswer.answers[i].section[x].sub_questions[j].match_case === '1';
                                this.studentAnswer.answers[i].section[x].sub_questions[j].match_case = val;
                                const ans = this.studentAnswer.answers[i].section[x].sub_questions[j].answer;
                                const student_ans = this.studentAnswer.answers[i].section[x].sub_questions[j].student_answer;
                                const questionTypeId = this.studentAnswer.answers[i].section[x].sub_questions[j].question_type_id;
                                if (questionTypeId == '10') {
                                    const correctAnswer = this.matchcase(ans, val);
                                    const studentAnswer = this.matchcase([student_ans], val);
                                    const enteredAnswer = correctAnswer.every((answer) => {
                                        return !studentAnswer.some((code) => code == answer);
                                    });
                                    this.studentAnswer.answers[i].section[x].sub_questions[j].enteredAnswer = !enteredAnswer;
                                }
                                this.totalAns[i].section.push(this.studentAnswer.answers[i].section[x].sub_questions[j]);
                            }

                            this.totalAns[i].section.forEach((item) => {
                                item.maxValErr = false;
                                item.isShow = true;
                            });
                        }
                    }
                } else {
                    this.questionEmpty = true;
                    this.hideAnswer = true;
                }
            } else {
                this.totalAns = this.studentAnswer.answers;
                this.contentTimeTaken = this.studentAnswer.content_time_taken && this.studentAnswer.content_time_taken != '' &&
                        this.studentAnswer.content_time_taken != '0' ?  parseInt(this.studentAnswer.content_time_taken) : 0;
                if (this.studentAnswer.answers.some(code => code.question_type_id == '55')) {
                    this.getFeedbackCount(this.studentAnswer.answers[0]);
                }
                this.totalAns.forEach((item) => {
                    item.maxValErr = false;
                    item.isShow = true;
                });
                setTimeout(() => {
                    for (let i = 0; i < this.totalAns.length; i++) {
                        if (this.totalAns[i].question_type_id == 7) {
                            for (let j = 0; j < this.totalAns[i].heading_option.length; j++) {
                                const index = i;
                                const row = this.totalAns[i].heading_option[j].correctActive;
                                const column = this.totalAns[i].heading_option[j].correctAnswer;
                                const final = index.toString() + row.toString() + column.toString();
                                document.getElementById('chooseMultipass' + final).setAttribute('checked', 'true');
                            }
                        } else if (this.totalAns[i].question_type_id == 9) {
                            for (let j = 0; j < this.totalAns[i].student_answer.length; j++) {
                                const val = this.totalAns[i].student_answer[j].isSelected;
                                if (val != '') {
                                    document.getElementById(i + 'dropdown' + j).innerHTML = this.totalAns[i].student_answer[j].options[val].listOption;
                                } else {
                                    document.getElementById(i + 'dropdown' + j).innerHTML = 'Student Not Answered';
                                }
                            }
                            for (let j = 0; j < this.totalAns[i].answer.length; j++) {
                                for (let k = 0; k < this.totalAns[i].answer[j].options.length; k++) {
                                    if (this.totalAns[i].answer[j].options[k].selected == 'true') {
                                        document.getElementById(i + 'dropdownCorrect' + j).innerHTML = this.totalAns[i].answer[j].options[k].listOption;
                                    }
                                }
                            }
                        } else if (this.totalAns[i].question_type_id == 24) {
                            for (let j = 0; j < this.totalAns[i].subQuestions.length; j++) {
                                const findIndex = this.listPassageDetails.length != 0 ?
                                    this.listPassageDetails.findIndex(value => value.passage_id == this.totalAns[i].subQuestions[j].passage_id) : '';
                                this.totalAns[i].subQuestions[j].passage = findIndex != '' ? this.listPassageDetails[findIndex].passage : this.totalAns[i].subQuestions[j].passage;
                                if (this.totalAns[i].subQuestions[j].question_type_id == '7') {
                                    console.log(i, 'indsdas');
                                    for (let k = 0; k < this.totalAns[i].subQuestions[j].heading_option.length; k++) {
                                        const index1 = i;
                                        const id = j;
                                        const row1 = this.totalAns[i].subQuestions[j].heading_option[k].correctActive;
                                        const column1 = this.totalAns[i].subQuestions[j].heading_option[k].correctAnswer;
                                        const final1 = index1.toString() + id.toString() + row1.toString() + column1.toString();
                                        document.getElementById('chooseMultipass1' + final1)?.setAttribute('checked', 'true');
                                    }
                                }
                            }
                        }
                    }
                }, 500);
                this.getFeedBackList();
            }
            // this.studentsData();
            this.functionCalled = true;
            this.clickEvent();
        }
    }

    viewAnswerKeyPdf() {
        this.auth.setSessionData('view_pdf_url_details', JSON.stringify(this.studentAnswer));
        window.open(this.env.envProperties.envURL + '#/studentlogin/viewAnswerKeyPdf', '_blank');
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

    get showTimer(): boolean {
        return (this.totalAns.length === 1 && this.totalAns.some(qns => qns.question_type_id === '55')
            && this.studentAnswer?.show_answer == '1') || this.totalAns.some(qns => qns.question_type_id != '55');
    }

    getElapsedTime(value): TimeSpan {
        const timeTaken = value.question_type_id != '24' ? (value.time_taken && value.time_taken != '' ? value.time_taken : 0)
            : (value.subQuestions[0]?.time_taken && value.subQuestions[0]?.time_taken != '' ? value.subQuestions[0]?.time_taken : 0);
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

    get isSingleQnsWithFeedbackType(): boolean {
        return this.totalAns.length === 1 && this.totalAns.some(qns => qns.question_type_id === '55');
    }

    getElapsedOverAllTime(): TimeSpan {
        let totalSeconds = this.studentAnswer.content_time_taken && this.studentAnswer.content_time_taken != '' && this.studentAnswer.content_time_taken != '0'
            ?  parseInt(this.studentAnswer.content_time_taken) : 0;
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

    matchcase(val, match) {
        let value = [];
        if (val != '' && val != undefined && val != 'undefined' && val != null) {
            val.forEach((answer) => {
                value.push(match ? answer.trim() : answer.trim().toLowerCase().split(' ').join(''));
            });
        } else {
            value = val;
        }
        return value;
    }

    close() {
        this.modalRef.close();
    }

    closeOverAllFeedback(id) {
        this.modalRef.close(id);
    }

    testDetails() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.scoreData.content_id,
            student_content_id: this.scoreData.student_content_id,
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
            successData.ResponseObject[0]?.contents.forEach(item => item.name = item.subject + ' - ' + item.module_name);
            this.fullTestContentDetail = successData.ResponseObject[0];
            this.testContentDetail = successData.ResponseObject[0].contents;
            this.testContentData = this.testContentDetail[0].student_content_id;
            this.studentsAnswerList(this.testContentDetail[0]);
        }
    }

    updateContentHeight() {
        const availableHeight = window.innerHeight - (146);
        this.totalFeedbackMaxHeight = this.isSingleQnsWithFeedbackType ? `${availableHeight}px` : 'auto';
        console.log(this.totalFeedbackMaxHeight, 'totalFeedbackMaxHeight')
    }
}
