import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    inject,
    OnDestroy,
    OnInit,
    TemplateRef,
    ViewChild
} from '@angular/core';
import {
    ApexAxisChartSeries, ApexMarkers, ApexTitleSubtitle, ApexChart, ApexDataLabels, ApexPlotOptions, ApexYAxis,
    ApexLegend, ApexXAxis, ApexGrid, ApexFill, ApexStroke, ApexTooltip
} from 'ng-apexcharts';
import {AuthService} from '../../../shared/service/auth.service';
import {CreatorService} from '../../../shared/service/creator.service';
import {NavService} from '../../../shared/service/nav.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {TeacherService} from '../../../shared/service/teacher.service';
import {Router} from '@angular/router';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    stroke: ApexStroke;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    colors: string[];
    legend: ApexLegend;
    fill: ApexFill;
    grid: ApexGrid;
    plotOptions: ApexPlotOptions;
    toolTip: ApexTooltip;
    markers: ApexMarkers;
    title: ApexTitleSubtitle;
};

@Component({
    selector: 'app-sat-report',
    templateUrl: './sat-report.component.html',
    styleUrls: ['./sat-report.component.scss']
})

export class SatReportComponent implements OnInit, AfterViewInit, OnDestroy {
    public studentList = [];
    public settings1 = {};
    public settings2 = {
        singleSelection: false,
        idField: 'student_id',
        textField: 'student_name',
        enableCheckAll: true,
        selectAllText: 'Select all',
        unSelectAllText: 'UnSelect all',
        allowSearchFilter: true,
        limitSelection: -1,
        clearSearchFilter: true,
        maxHeight: 139,
        itemsShowLimit: 3,
        searchPlaceholderText: 'Search Student',
        noDataAvailablePlaceholderText: 'No student available',
        closeDropDownOnSelection: false,
        showSelectedItemsAtTop: false,
    };
    public settings3 = {
        singleSelection: false,
        idField: 'student_id',
        textField: 'student_name',
        enableCheckAll: true,
        selectAllText: 'Select all',
        unSelectAllText: 'UnSelect all',
        allowSearchFilter: true,
        limitSelection: -1,
        clearSearchFilter: true,
        maxHeight: 139,
        itemsShowLimit: 3,
        searchPlaceholderText: 'Search Student',
        noDataAvailablePlaceholderText: 'No student available',
        closeDropDownOnSelection: false,
        showSelectedItemsAtTop: false,
    };
    public selectClass = [];
    public contentSelected = [];
    public studentSelected = [];
    public chartOptions: Partial<ChartOptions>;
    public chartOptions1: Partial<ChartOptions>;
    public chartOptions2: Partial<ChartOptions>;
    public chartOptions3: Partial<ChartOptions>;
    public commonContentList = {content: [], sat: [], act: []};
    public contentList = [];
    public showTable = false;
    public showTable1 = false;
    public showTable2 = false;
    public showTable3 = false;
    public auth = inject(AuthService);
    public creatorService = inject(CreatorService);
    public navService = inject(NavService);
    public modalRef: NgbModalRef;
    public modalService = inject(NgbModal);
    public teacher = inject(TeacherService);
    public cdr = inject(ChangeDetectorRef);
    public router = inject(Router);
    public studentData: any;
    public selectedContent: any;
    @ViewChild('showQuestion') showQuestion: TemplateRef<any>;
    public selectedQuestion = 0;
    public questionArray = [];
    public totalReport = [];
    public questionAnalysisRecord = [];
    public selectedQuestionModule = [];
    public selectedErrorModule = [];
    public selectedTimeModule = [];
    public totalMasteryRecord = [];
    public dataloaded = false;
    public masteryContentSelected = [];
    public masteryStudentSelected = [];
    public masteryStudentList = [];
    public masteryData = [];
    public questionAnalysisContentSelected: any = {};
    public questionAnalysisStudentSelected = [];
    public questionAnalysisStudentList = [];
    protected readonly parseInt = parseInt;
    public studentQuestionListData = [];
    public questionAnalysisListData = [];
    public showAllQuestion = false;
    public overallSummary = [];
    public allowSingleSelectStudent = false;
    public summaryRecordListData = [];
    public questionAnalysisSetting = {
        singleSelection: true,
        idField: 'content_id',
        textField: 'content_name',
        allowSearchFilter: true,
        clearSearchFilter: true,
        maxHeight: 139,
        searchPlaceholderText: 'Search Content',
        noDataAvailablePlaceholderText: 'No Content available',
        closeDropDownOnSelection: false,
        showSelectedItemsAtTop: false,
    };
    protected tabShow = 'content';
    protected testTypeListData = [];
    public questionAnalysisSubjectList = [];
    public masterySubjectList = [];
    public commonSubjectList = [];
    public selectedTopicSubject = '';
    public selectedSubTopicSubject = '';
    public selectedTimeAnalysisSubject = '';
    public selectedErrorAnalysisSubject = '';
    public selectedMasterySubject = '';
    public selectedQuestionAnalysisSubject = '';
    public reportCalledFrom = '';
    public questionAnalysisModuleSetting = {
        singleSelection: true,
        idField: 'module_id',
        textField: 'module_name',
        allowSearchFilter: true,
        clearSearchFilter: true,
        maxHeight: 139,
        searchPlaceholderText: 'Search Module',
        noDataAvailablePlaceholderText: 'No Module available',
        closeDropDownOnSelection: false,
        showSelectedItemsAtTop: false,
    };
    public questionAnalysisModuleSelected: any = {};
    public errorAnalysisModuleSelected: any = {};
    public timeAnalysisModuleSelected: any = {};
    public showContentTypeTab = false;
    public nameOrContentSelected = false;
    @ViewChild('modalBody') modalBody: ElementRef;
    showScroll = false;
    showScrollHeight = 300;
    hideScrollHeight = 10;

    constructor() {
        this.settings1 = {
            singleSelection: false,
            idField: this.auth.getRoleId() == '5' ? 'student_content_id' : 'content_id',
            textField: 'content_name',
            enableCheckAll: true,
            selectAllText: 'Select all',
            unSelectAllText: 'UnSelect all',
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 139,
            itemsShowLimit: 2,
            searchPlaceholderText: 'Search Content',
            noDataAvailablePlaceholderText: 'No data available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
        };
        this.studentData = this.auth.getSessionData('satReportData') ? JSON.parse(this.auth.getSessionData('satReportData')) : null;
        console.log(this.studentData, 'studentData');
        this.testTypeList();
    }

    ngOnInit(): void {
        this.reportCalledFrom = this.auth.getSessionData('reportCalledFrom') ?? '';
        this.creatorService.changeViewList(true);
        this.navService.collapseSidebar = true;
    }

    ngAfterViewInit() {
        if (this.modalBody) {
            this.modalBody.nativeElement.addEventListener('scroll', () => this.onModalScroll());
        }
    }

    ngOnDestroy() {
        this.creatorService.changeViewList(false);
        this.navService.collapseSidebar = false;
    }

    studentSetting() {
        this.settings2 = {
            singleSelection: this.allowSingleSelectStudent,
            idField: 'student_id',
            textField: 'student_name',
            enableCheckAll: true,
            selectAllText: 'Select all',
            unSelectAllText: 'UnSelect all',
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 139,
            itemsShowLimit: 3,
            searchPlaceholderText: 'Search Student',
            noDataAvailablePlaceholderText: 'No data available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
        };
    }

    setSeriesAndCategories(objectName, keyId, keyName, calledBy = '') {
        const idArray = [];
        const isContentTab = this.tabShow === 'content';

        this.totalReport.forEach(content => {
            if (!isContentTab) {
                content.subject.forEach((subject) => {
                    const selectedSubject = calledBy == 'subTopic' ? this.selectedSubTopicSubject : calledBy == 'timeAnalysis' ? this.selectedTimeAnalysisSubject
                        : calledBy == 'errorAnalysis' ? this.selectedErrorAnalysisSubject : this.selectedTopicSubject;
                    // const selectedSubject = calledBy == 'question_topics' ? this.selectedTopicSubject : this.selectedSubTopicSubject;
                    if (selectedSubject == subject.subject_name) {
                        subject.modules.forEach((module) => {
                            module[objectName].forEach(item => {
                                idArray.push({id: item[keyId], name: item[keyName]});
                            });
                        });
                    }
                });
            } else {
                content[objectName].forEach(item => {
                    idArray.push({id: item[keyId], name: item[keyName]});
                });
            }
        });

        const uniqueTopics = idArray.filter((item, index, self) =>
            index === self.findIndex(obj => obj.id === item.id)
        );
        uniqueTopics.sort((a, b) => parseInt(a.id) - parseInt(b.id));

        let contentArray = [];
        if (!isContentTab) {
            this.totalReport.forEach((content) => {
                content.subject.forEach((subject) => {
                    const selectedSubject = objectName == 'question_topics' ? this.selectedTopicSubject : this.selectedSubTopicSubject;
                    if (selectedSubject == subject.subject_name) {
                        subject.modules.forEach((value, i) => {
                            contentArray.push({
                                content_id: value.module_id,
                                student_content_id: content.student_content_id,
                                content_name: value.module_name,
                                group: value.module_name + i
                            });
                        });
                    }
                });
            });
        } else {
            contentArray = this.totalReport.map((content, i) => ({
                content_id: content.content_id,
                student_content_id: content.student_content_id,
                content_name: content.content_name,
                group: content.content_name + i
            }));
        }
        const seriesStructure = [];
        contentArray.forEach((content: any) => {
            seriesStructure.push({
                name: content.group + '-' + 'Correct',
                group: content.group,
                type: isContentTab ? content.student_content_id : content.student_content_id + '-' + content.content_id,
                data: uniqueTopics.map(topic => ({
                    x: topic.name,
                    y: 0,
                    data: { topic_id: topic.id, topic_name: topic.name, content_id: content.content_id, content_name: content.content_name },
                    color: '#00E396'
                }))
            });
            seriesStructure.push({
                name: content.group + '-' + 'Incorrect',
                group: content.group,
                type: isContentTab ? content.student_content_id : content.student_content_id + '-' + content.content_id,
                data: uniqueTopics.map(topic => ({
                    x: topic.name,
                    y: 0,
                    data: { topic_id: topic.id, topic_name: topic.name, content_id: content.content_id, content_name: content.content_name },
                    color: '##ff0000'
                }))
            });
        });
        this.totalReport.forEach(content => {
            if (!isContentTab) {
                content.subject.forEach((subject) => {
                    const selectedSubject = objectName == 'question_topics' ? this.selectedTopicSubject : this.selectedSubTopicSubject;
                    if (selectedSubject == subject.subject_name) {
                        subject.modules.forEach((module) => {
                            const studentContentIdAndModuleId = content.student_content_id + '-' + module.module_id;
                            const topicItems = module[objectName];
                            topicItems.forEach(item => {
                                const topicName = item[keyName];
                                const correct = item.correct_answers || 0;
                                const total = item.total_questions || 0;
                                const incorrect = total - correct;
                                const correctAnswerPercentage = Math.round(correct / total * 100);
                                const inCorrectAnswerPercentage = Math.round(incorrect / total * 100);
                                seriesStructure.forEach(series => {
                                    if (series.type === studentContentIdAndModuleId) {
                                        const point = series.data.find(d => d.x === topicName);
                                        if (point) {
                                            const seriesName = series.name.split('-');
                                            if (seriesName.includes('Correct')) {
                                                point.y = correctAnswerPercentage;
                                            } else if (seriesName.includes('Incorrect')) {
                                                point.y = inCorrectAnswerPercentage;
                                            }
                                            point.data = {...item, content_id: module.module_id, student_content_id: content.student_content_id,  content_name: module.module_name};
                                        }
                                    }
                                });
                            });
                        });
                    }
                });
            } else {
                const studentContentId = content.student_content_id;
                const topicItems = content[objectName];
                topicItems.forEach(item => {
                    const topicName = item[keyName];
                    const correct = item.correct_answers || 0;
                    const total = item.total_questions || 0;
                    const incorrect = total - correct;
                    const correctAnswerPercentage = Math.round(correct / total * 100);
                    const inCorrectAnswerPercentage = Math.round(incorrect / total * 100);
                    seriesStructure.forEach(series => {
                        if (series.type === studentContentId) {
                            const point = series.data.find(d => d.x === topicName);
                            if (point) {
                                const seriesName = series.name.split('-');
                                if (seriesName[1] === 'Correct') {
                                    point.y = correctAnswerPercentage;
                                } else if (seriesName[1] === 'Incorrect') {
                                    point.y = inCorrectAnswerPercentage;
                                }
                                point.data = {...item, content_id: content.content_id, student_content_id: studentContentId,  content_name: content.content_name};
                            }
                        }
                    });
                });
            }
        });
        return {series: seriesStructure, categories: uniqueTopics};
    }

    tabSelected(value, calledBy) {
        if (['timeAnalysis', 'errorAnalysis', 'subTopic'].includes(calledBy)) {
            calledBy == 'timeAnalysis' ? this.selectedTimeAnalysisSubject = value : calledBy == 'errorAnalysis' ?
                this.selectedErrorAnalysisSubject = value : this.selectedSubTopicSubject = value;
            this.buildSubTopicOrTimeOrErrorAnalysisChartOptions(calledBy);
        } else if (calledBy == 'topic') {
            this.selectedTopicSubject = value;
            this.buildTopicChartOptions();
        } else if (calledBy == 'mastery') {
            this.selectedMasterySubject = value;
            this.createMasteryData();
        } else if (calledBy == 'questionAnalysis') {
            this.selectedQuestionAnalysisSubject = value;
            console.log(this.selectedQuestionAnalysisSubject, 'selectedQuestionAnalysisSubject');
            this.formQuestionAnalysisData();
        }
    }

    buildTopicChartOptions() {
        const topic = this.setSeriesAndCategories('question_topics', 'question_topic_id', 'question_topic');
        const topicSeries = topic.series;
        console.log(topicSeries, 'topicSeries');
        topicSeries.forEach(data => delete data.type);
        let filteredSeries: any;
        const isContentTab = this.tabShow === 'content';
        if (!isContentTab) {
            filteredSeries = topicSeries.filter((item, index, self) => index === self.findIndex(obj => obj.name === item.name));
        }
        this.chartOptions = {
            series: !isContentTab ? filteredSeries : topicSeries,
            toolTip: {
                custom({series, seriesIndex, dataPointIndex, w}) {
                    const data = w.config.series[seriesIndex].data[dataPointIndex];
                    const correctAnswerPercentage = Math.round(data.data.correct_answers / data.data.total_questions * 100);
                    const inCorrectAnswerPercentage = Math.round(( data.data.total_questions - data.data.correct_answers) / data.data.total_questions * 100);
                    return `
                        <div>
                            <div style="padding: 8px; background: #eceff1">
                                <strong>${data.x}</strong>
                            </div>
                            <div style="padding: 8px">
                                <span>${data.data.content_name}</span></br>
                                <span>Correct Answer - </span><span style="color: #00E396; font-weight: bold;">${data.data.correct_answers} (${correctAnswerPercentage}%)</span></br>
                                <span>Incorrect Answer - </span><span  style="color: #FF4560; font-weight: bold;">${data.data.total_questions - data.data.correct_answers}
                                    (${inCorrectAnswerPercentage}%)</span></br>
                            </div>
                        </div>
                    `;
                }
            },
            chart: {
                type: 'bar',
                height: 500,
                stacked: true,
                stackType: 'normal',
                events: {
                    dataPointSelection: ((e, chart, config) => {
                        const yValue = config.w.config.series[config.seriesIndex].data[config.dataPointIndex];
                        this.selectedContent = yValue.data;
                        this.selectedContent.showAll = false;
                        this.showTable = true;
                        this.showTable1 = false;
                        this.showTable2 = false;
                        this.showTable3 = false;
                        this.createStudentDataTable(yValue.data.question_data);
                        const id = this.selectedContent?.question_topic + this.selectedContent?.question_topic_id;
                        setTimeout(() => {
                            if (document.getElementById(id)) {
                                document.getElementById(id).scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'nearest',
                                    inline: 'nearest'
                                });
                            }
                        }, 500);
                    })
                },
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    barHeight: '100%',
                    columnWidth: this.totalReport.length <= 2 ? '25%' : (this.totalReport.length > 2 && this.totalReport.length <= 4) ? '50%' : '50%',
                    dataLabels: {
                        total: {
                            enabled: false,
                            style: {
                                fontSize: '12px',
                                fontWeight: 800
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: true,
                formatter: ((val) => {
                    return val.toString() + '%';
                })
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                type: 'category'
            },
            fill: {
                opacity: 1
            },
            colors: ['#00E396', '#ff0000'],
            legend: {
                show: false
            }
        };
    }

    buildSubTopicOrTimeOrErrorAnalysisChartOptions(calledBy, moduleChanged = '') {
        const subTopic = this.setSeriesAndCategories('question_sub_topics', 'question_sub_topic_id', 'sub_topic', calledBy);
        const subTopicSeries = subTopic.series;
        subTopicSeries.forEach(data => delete data.type);
        let filteredSeries: any;
        const isContentTab = this.tabShow === 'content';
        if (!isContentTab) {
            filteredSeries = subTopicSeries.filter((item, index, self) => index === self.findIndex(obj => obj.name === item.name));
        }
        if (calledBy == 'subTopic') {
            this.chartOptions1 = {
                series: !isContentTab ? filteredSeries : subTopicSeries,
                toolTip: {
                    custom({series, seriesIndex, dataPointIndex, w}) {
                        const data = w.config.series[seriesIndex].data[dataPointIndex];
                        const correctAnswerPercentage = Math.round(data.data.correct_answers / data.data.total_questions * 100);
                        const inCorrectAnswerPercentage = Math.round(( data.data.total_questions - data.data.correct_answers) / data.data.total_questions * 100);
                        return `
                        <div>
                            <div style="padding: 8px; background: #eceff1">
                                <strong>${data.x}</strong>
                            </div>
                            <div style="padding: 8px">
                                <span>${data.data.content_name}</span></br>
                                <span>Correct Answer - </span><span style="color: #00E396; font-weight: bold;">${data.data.correct_answers} (${correctAnswerPercentage}%)</span></br>
                                <span>Incorrect Answer - </span><span  style="color: #FF4560; font-weight: bold;">${data.data.total_questions - data.data.correct_answers}
                                    (${inCorrectAnswerPercentage}%)</span></br>
                            </div>
                        </div>
                    `;
                    }
                },
                chart: {
                    type: 'bar',
                    stacked: true,
                    height: 500,
                    events: {
                        dataPointSelection: ((e, chart, config) => {
                            const yValue = config.w.config.series[config.seriesIndex].data[config.dataPointIndex];
                            this.selectedContent = yValue.data;
                            this.selectedContent.showAll = false;
                            this.showTable1 = true;
                            this.showTable = false;
                            this.showTable2 = false;
                            this.showTable3 = false;
                            this.createStudentDataTable(yValue.data.question_data);
                            const id = this.selectedContent?.sub_topic + this.selectedContent?.question_sub_topic_id;
                            setTimeout(() => {
                                if (document.getElementById(id)) {
                                    document.getElementById(id).scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'nearest',
                                        inline: 'nearest'
                                    });
                                }
                            }, 500);
                        })
                    },
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        barHeight: '100%',
                        columnWidth: this.totalReport.length <= 2 ? '35%' : (this.totalReport.length > 2 && this.totalReport.length <= 4) ? '50%' : '50%',
                        dataLabels: {
                            total: {
                                enabled: false,
                                style: {
                                    fontSize: '12px',
                                    fontWeight: 800
                                }
                            }
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: ((val) => {
                        return val.toString() + '%';
                    }),
                    style: {
                        fontSize: '12px',
                        fontWeight: 'bold',
                        colors: ['#fff']
                    }
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    type: 'category'
                },
                fill: {
                    opacity: 1
                },
                colors: ['#00E396', '#ff0000'],
                legend: {
                    show: false
                }
            };
        } else {
            subTopic.categories.forEach((items) => {
                items.time_taken = 0;
                items.total_questions = 0;
                items.average_predicted_time = 0;
                items.predicted_time = 0;
                items.correct_answers = 0;
                items.wrong_answers = 0;
                items.question_data = [];
                this.totalReport.forEach((value) => {
                    if (!isContentTab) {
                        value.subject.forEach((subject) => {
                            const selectedSubject = calledBy == 'timeAnalysis' ? this.selectedTimeAnalysisSubject : this.selectedErrorAnalysisSubject;
                            if (selectedSubject == subject.subject_name) {
                                calledBy == 'errorAnalysis' ? this.selectedErrorModule = subject.modules :
                                    this.selectedTimeModule = subject.modules;
                                if (moduleChanged == '' && calledBy == 'errorAnalysis') {
                                    this.errorAnalysisModuleSelected = [subject.modules[0]] ?? [];
                                } else if (moduleChanged == '' && calledBy == 'timeAnalysis') {
                                    this.timeAnalysisModuleSelected = [subject.modules[0]] ?? [];
                                }
                                const selectedModuleValue = calledBy == 'errorAnalysis' ? this.errorAnalysisModuleSelected : this.timeAnalysisModuleSelected;
                                if (selectedModuleValue.length != 0) {
                                    subject.modules.forEach((module) => {
                                        if (module.module_id == selectedModuleValue[0]?.module_id) {
                                            module.question_sub_topics.forEach((subTopicData) => {
                                                if (items.id == subTopicData.question_sub_topic_id) {
                                                    subTopicData.question_data.forEach((data) => {
                                                        data.module_id = module.module_id;
                                                        data.module_name = module.module_name;
                                                        items.question_data.push(data);
                                                        const getTime = data.predicted_solving_time ? data.predicted_solving_time.split(':') : [];
                                                        subTopicData.predicted_solving_time = getTime.length != 0 ? (parseInt(getTime[0]) * 60 + parseInt(getTime[1])) : 0;
                                                    });
                                                    items.time_taken = items.time_taken + subTopicData.time_taken;
                                                    items.total_questions = items.total_questions + subTopicData.total_questions;
                                                    items.predicted_time = items.predicted_time + subTopicData.predicted_solving_time;
                                                    items.wrong_answers = items.wrong_answers + (parseInt(subTopicData.total_questions) - parseInt(subTopicData.correct_answers));
                                                    items.correct_answers = items.correct_answers + subTopicData.correct_answers;
                                                }
                                            });
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        value.question_sub_topics.forEach((subTopicData) => {
                            if (items.id == subTopicData.question_sub_topic_id) {
                                subTopicData.question_data.forEach((data) => {
                                    items.question_data.push(data);
                                    const getTime = data.predicted_solving_time ? data.predicted_solving_time.split(':') : [];
                                    subTopicData.predicted_solving_time = getTime.length != 0 ? (parseInt(getTime[0]) * 60 + parseInt(getTime[1])) : 0;
                                });
                                items.time_taken = items.time_taken + subTopicData.time_taken;
                                items.total_questions = items.total_questions + subTopicData.total_questions;
                                items.predicted_time = items.predicted_time + subTopicData.predicted_solving_time;
                                items.wrong_answers = items.wrong_answers + (parseInt(subTopicData.total_questions) - parseInt(subTopicData.correct_answers));
                                items.correct_answers = items.correct_answers + subTopicData.correct_answers;
                            }
                        });
                    }
                });
                items.average_error_percentage = Math.round((items.wrong_answers / items.total_questions) * 100);
                items.average_time_taken = Math.round(items.time_taken / items.total_questions);
                items.average_predicted_time = items.predicted_time == 0 ? 0 : Math.round((items.predicted_time / items.total_questions) * items.total_questions);
            });
            if (calledBy == 'timeAnalysis' && ((!isContentTab && this.timeAnalysisModuleSelected.length != 0) || isContentTab)) {
                this.chartOptions2 = {
                    series: [
                        {
                            name: 'Actual Time Taken',
                            data: subTopic.categories.map((value) => value.average_time_taken)
                        },
                        {
                            name: 'Predicted Solving Time',
                            data: subTopic.categories.map((value) => value.average_predicted_time)
                        }
                    ],
                    plotOptions: {
                        bar: {
                            columnWidth: '10%',
                            distributed: false,
                            dataLabels: {
                                position: 'top',
                            }
                        }
                    },
                    toolTip: {
                        y: {
                            formatter: function (val) {
                                return val + ' (Sec)';
                            }
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: ((val) => {
                            return val == 0 ? '' : val.toString();
                        }),
                        style: {
                            fontSize: '12px',
                            fontWeight: 'bold',
                            colors: ['#fff']
                        }
                    },
                    chart: {
                        height: 500,
                        type: 'bar',
                        toolbar: {
                            show: false
                        }
                    },
                    colors: ['#2082cc', '#00E396'],
                    stroke: {
                        curve: 'smooth'
                    },
                    grid: {
                        borderColor: '#f3f3f3',
                        yaxis: {
                            lines: {
                                show: true
                            }
                        },
                        padding: {
                            bottom: 50,
                        },
                        row: {
                            colors: ['#f3f3f3', 'transparent']
                        }
                    },
                    markers: {
                        size: 1
                    },
                    xaxis: {
                        categories: subTopic.categories.map(value => value.name),
                        labels: {
                            rotate: -45,
                            rotateAlways: true,
                            trim: false
                        }
                    },
                    yaxis: {
                        title: {
                            text: 'Seconds'
                        }
                    },
                    legend: {
                        show: false
                    }
                };
            } else {
                const colorString = [];
                subTopic.categories.map((value) => value.average_error_percentage).forEach((items) => {
                    if (items >= 90) {
                        colorString.push('#ff0000');
                    } else if (items > 80 && items <= 90) {
                        colorString.push('#ffc107');
                    } else if (items >= 50 && items <= 80) {
                        colorString.push('#28A745');
                    } else if (items < 50 || items == 0) {
                        colorString.push('#007bff');
                    }
                });

                this.chartOptions3 = {
                    series: [
                        {
                            name: 'Percentage',
                            data: subTopic.categories.map((value) => value.average_error_percentage)
                        }
                    ],
                    legend: {
                        show: false
                    },
                    chart: {
                        height: 450,
                        width: '100%',
                        type: 'bar',
                        events: {
                            dataPointSelection: ((e, chart, config) => {
                                this.selectedContent = subTopic.categories[config.dataPointIndex];
                                this.selectedContent.showAll = false;
                                this.selectedContent.sub_topic = subTopic.categories[config.dataPointIndex].name;
                                this.selectedContent.question_sub_topic_id = subTopic.categories[config.dataPointIndex].id;
                                this.selectedContent.content_name = subTopic.categories[config.dataPointIndex].question_data[0]?.content_name;
                                if (!isContentTab) {
                                    this.selectedContent.actual_content_id = subTopic.categories[config.dataPointIndex].question_data[0]?.content_id;
                                    this.selectedContent.content_id = subTopic.categories[config.dataPointIndex].question_data[0]?.module_id;
                                    this.selectedContent.module_name = subTopic.categories[config.dataPointIndex].question_data[0]?.module_name;
                                    // this.selectedContent.content_name = subTopic.categories[config.dataPointIndex].question_data[0]?.content_name + ' - '
                                    //     + this.selectedErrorAnalysisSubject + ' - ' + subTopic.categories[config.dataPointIndex].question_data[0]?.module_name;
                                }
                                this.showTable2 = true;
                                this.showTable = false;
                                this.showTable1 = false;
                                this.showTable3 = false;
                                this.createStudentDataTable(subTopic.categories[config.dataPointIndex].question_data);
                                const id = 'error_analysis_' + this.selectedContent?.sub_topic + this.selectedContent?.question_sub_topic_id;
                                setTimeout(() => {
                                    if (document.getElementById(id)) {
                                        document.getElementById(id).scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'nearest',
                                            inline: 'nearest'
                                        });
                                    }
                                }, 500);
                            })
                        },
                        toolbar: {
                            show: false
                        },
                    },
                    colors: colorString,
                    plotOptions: {
                        bar: {
                            columnWidth: '10%',
                            distributed: true,
                            dataLabels: {
                                position: 'top'
                            }
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: ((val) => {
                            return val + '%';
                        }),
                        offsetY: -20,
                        style: {
                            fontSize: '12px',
                            colors: ['#304758']
                        }
                    },
                    grid: {
                        show: true
                    },
                    xaxis: {
                        categories: subTopic.categories.map(value => value.name),
                        labels: {
                            rotate: -45,
                            rotateAlways: true,
                            trim: false
                        }
                    }
                };
            }
        }
    }

    // buildChartOptions() {
    //
    //     const topic = this.setSeriesAndCategories('question_topics', 'question_topic_id', 'question_topic');
    //     const subTopic = this.setSeriesAndCategories('question_sub_topics', 'question_sub_topic_id', 'sub_topic');
    //     const topicSeries = topic.series;
    //     const subTopicSeries = subTopic.series;
    //     console.log(topic, subTopic);
    //     topicSeries.forEach(data => delete data.type);
    //     subTopicSeries.forEach(data => delete data.type);
    //
    //     this.chartOptions = {
    //         series: topicSeries,
    //         toolTip: {
    //             custom({series, seriesIndex, dataPointIndex, w}) {
    //                 const data = w.config.series[seriesIndex].data[dataPointIndex];
    //                 const correctAnswerPercentage = Math.round(data.data.correct_answers / data.data.total_questions * 100);
    //                 const inCorrectAnswerPercentage = Math.round(( data.data.total_questions - data.data.correct_answers) / data.data.total_questions * 100);
    //                 return `
    //                     <div>
    //                         <div style="padding: 8px; background: #eceff1">
    //                             <strong>${data.x}</strong>
    //                         </div>
    //                         <div style="padding: 8px">
    //                             <span>${data.data.content_name}</span></br>
    //                             <span>Correct Answer - </span><span style="color: #00E396; font-weight: bold;">${data.data.correct_answers} (${correctAnswerPercentage}%)</span></br>
    //                             <span>Incorrect Answer - </span><span  style="color: #FF4560; font-weight: bold;">${data.data.total_questions - data.data.correct_answers}
    //                                 (${inCorrectAnswerPercentage}%)</span></br>
    //                         </div>
    //                     </div>
    //                 `;
    //             }
    //         },
    //         chart: {
    //             type: 'bar',
    //             height: 500,
    //             stacked: true,
    //             stackType: 'normal',
    //             events: {
    //                 dataPointSelection: ((e, chart, config) => {
    //                     const yValue = config.w.config.series[config.seriesIndex].data[config.dataPointIndex];
    //                     this.selectedContent = yValue.data;
    //                     this.selectedContent.showAll = false;
    //                     this.showTable = true;
    //                     this.showTable1 = false;
    //                     this.showTable2 = false;
    //                     this.showTable3 = false;
    //                     this.createStudentDataTable(yValue.data.question_data);
    //                     const id = this.selectedContent?.question_topic + this.selectedContent?.question_topic_id;
    //                     setTimeout(() => {
    //                         document.getElementById(id).scrollIntoView({
    //                             behavior: 'smooth',
    //                             block: 'nearest',
    //                             inline: 'nearest'
    //                         });
    //                     }, 500);
    //                 })
    //             },
    //             toolbar: {
    //                 show: false
    //             }
    //         },
    //         plotOptions: {
    //             bar: {
    //                 horizontal: false,
    //                 barHeight: '100%',
    //                 columnWidth: this.totalReport.length <= 2 ? '25%' : (this.totalReport.length > 2 && this.totalReport.length <= 4) ? '50%' : '100%',
    //                 dataLabels: {
    //                     total: {
    //                         enabled: false,
    //                         style: {
    //                             fontSize: '12px',
    //                             fontWeight: 800
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         dataLabels: {
    //             enabled: true,
    //             formatter: ((val) => {
    //                 return val.toString() + '%';
    //             })
    //         },
    //         stroke: {
    //             width: 1,
    //             colors: ['#fff']
    //         },
    //         xaxis: {
    //             type: 'category'
    //         },
    //         fill: {
    //             opacity: 1
    //         },
    //         colors: ['#00E396', '#ff0000'],
    //         legend: {
    //             show: false
    //         }
    //     };
    //
    //     this.chartOptions1 = {
    //         series: subTopicSeries,
    //         toolTip: {
    //             custom({series, seriesIndex, dataPointIndex, w}) {
    //                 const data = w.config.series[seriesIndex].data[dataPointIndex];
    //                 const correctAnswerPercentage = Math.round(data.data.correct_answers / data.data.total_questions * 100);
    //                 const inCorrectAnswerPercentage = Math.round(( data.data.total_questions - data.data.correct_answers) / data.data.total_questions * 100);
    //                 return `
    //                     <div>
    //                         <div style="padding: 8px; background: #eceff1">
    //                             <strong>${data.x}</strong>
    //                         </div>
    //                         <div style="padding: 8px">
    //                             <span>${data.data.content_name}</span></br>
    //                             <span>Correct Answer - </span><span style="color: #00E396; font-weight: bold;">${data.data.correct_answers} (${correctAnswerPercentage}%)</span></br>
    //                             <span>Incorrect Answer - </span><span  style="color: #FF4560; font-weight: bold;">${data.data.total_questions - data.data.correct_answers}
    //                                 (${inCorrectAnswerPercentage}%)</span></br>
    //                         </div>
    //                     </div>
    //                 `;
    //             }
    //         },
    //         chart: {
    //             type: 'bar',
    //             stacked: true,
    //             height: 500,
    //             events: {
    //                 dataPointSelection: ((e, chart, config) => {
    //                     const yValue = config.w.config.series[config.seriesIndex].data[config.dataPointIndex];
    //                     this.selectedContent = yValue.data;
    //                     this.selectedContent.showAll = false;
    //                     this.showTable1 = true;
    //                     this.showTable = false;
    //                     this.showTable2 = false;
    //                     this.showTable3 = false;
    //                     this.createStudentDataTable(yValue.data.question_data);
    //                     const id = this.selectedContent?.sub_topic + this.selectedContent?.question_sub_topic_id;
    //                     setTimeout(() => {
    //                         document.getElementById(id).scrollIntoView({
    //                             behavior: 'smooth',
    //                             block: 'nearest',
    //                             inline: 'nearest'
    //                         });
    //                     }, 500);
    //                 })
    //             },
    //             toolbar: {
    //                 show: false
    //             }
    //         },
    //         plotOptions: {
    //             bar: {
    //                 horizontal: false,
    //                 barHeight: '100%',
    //                 columnWidth: this.totalReport.length <= 2 ? '35%' : (this.totalReport.length > 2 && this.totalReport.length <= 4) ? '50%' : '100%',
    //                 dataLabels: {
    //                     total: {
    //                         enabled: false,
    //                         style: {
    //                             fontSize: '12px',
    //                             fontWeight: 800
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         dataLabels: {
    //             enabled: true,
    //             formatter: ((val) => {
    //                 return val.toString() + '%';
    //             }),
    //             style: {
    //                 fontSize: '12px',
    //                 fontWeight: 'bold',
    //                 colors: ['#fff']
    //             }
    //         },
    //         stroke: {
    //             width: 1,
    //             colors: ['#fff']
    //         },
    //         xaxis: {
    //             type: 'category'
    //         },
    //         fill: {
    //             opacity: 1
    //         },
    //         colors: ['#00E396', '#ff0000'],
    //         legend: {
    //             show: false
    //         }
    //     };
    //
    //     subTopic.categories.forEach((items) => {
    //         items.time_taken = 0;
    //         items.total_questions = 0;
    //         items.average_predicted_time = 0;
    //         items.predicted_time = 0;
    //         items.correct_answers = 0;
    //         items.wrong_answers = 0;
    //         items.question_data = [];
    //         this.totalReport.forEach((value) => {
    //             if (this.tabShow != 'content') {
    //                 value.subject.forEach((subject) => {
    //                     subject.modules.forEach((module) => {
    //                         module.question_sub_topics.forEach((subTopicData) => {
    //                             if (items.id == subTopicData.question_sub_topic_id) {
    //                                 subTopicData.question_data.forEach((data) => {
    //                                     items.question_data.push(data);
    //                                     const getTime = data.predicted_solving_time ? data.predicted_solving_time.split(':') : [];
    //                                     subTopicData.predicted_solving_time = getTime.length != 0 ? (parseInt(getTime[0]) * 60 + parseInt(getTime[1])) : 0;
    //                                 });
    //                                 items.time_taken = items.time_taken + subTopicData.time_taken;
    //                                 items.total_questions = items.total_questions + subTopicData.total_questions;
    //                                 items.predicted_time = items.predicted_time + subTopicData.predicted_solving_time;
    //                                 items.wrong_answers = items.wrong_answers + (parseInt(subTopicData.total_questions) - parseInt(subTopicData.correct_answers));
    //                                 items.correct_answers = items.correct_answers + subTopicData.correct_answers;
    //                             }
    //                         });
    //                     });
    //                 });
    //             } else {
    //                 value.question_sub_topics.forEach((subTopicData) => {
    //                     if (items.id == subTopicData.question_sub_topic_id) {
    //                         subTopicData.question_data.forEach((data) => {
    //                             items.question_data.push(data);
    //                             const getTime = data.predicted_solving_time ? data.predicted_solving_time.split(':') : [];
    //                             subTopicData.predicted_solving_time = getTime.length != 0 ? (parseInt(getTime[0]) * 60 + parseInt(getTime[1])) : 0;
    //                         });
    //                         items.time_taken = items.time_taken + subTopicData.time_taken;
    //                         items.total_questions = items.total_questions + subTopicData.total_questions;
    //                         items.predicted_time = items.predicted_time + subTopicData.predicted_solving_time;
    //                         items.wrong_answers = items.wrong_answers + (parseInt(subTopicData.total_questions) - parseInt(subTopicData.correct_answers));
    //                         items.correct_answers = items.correct_answers + subTopicData.correct_answers;
    //                     }
    //                 });
    //             }
    //         });
    //         items.average_error_percentage = Math.round((items.wrong_answers / items.total_questions) * 100);
    //         items.average_time_taken = Math.round(items.time_taken / items.total_questions);
    //         items.average_predicted_time = items.predicted_time == 0 ? 0 : Math.round((items.predicted_time / items.total_questions) * items.total_questions);
    //     });
    //
    //     this.chartOptions2 = {
    //         series: [
    //             {
    //                 name: 'Actual Time Taken',
    //                 data: subTopic.categories.map((value) => value.average_time_taken)
    //             },
    //             {
    //                 name: 'Predicted Solving Time',
    //                 data: subTopic.categories.map((value) => value.average_predicted_time)
    //             }
    //         ],
    //         plotOptions: {
    //             bar: {
    //                 columnWidth: '10%',
    //                 distributed: false,
    //                 dataLabels: {
    //                     position: 'top',
    //                 }
    //             }
    //         },
    //         toolTip: {
    //             y: {
    //                 formatter: function (val) {
    //                     return val + ' (Sec)';
    //                 }
    //             }
    //         },
    //         dataLabels: {
    //             enabled: true,
    //             formatter: ((val) => {
    //                 return val == 0 ? '' : val.toString();
    //             }),
    //             style: {
    //                 fontSize: '12px',
    //                 fontWeight: 'bold',
    //                 colors: ['#fff']
    //             }
    //         },
    //         chart: {
    //             height: 500,
    //             type: 'bar',
    //             toolbar: {
    //                 show: false
    //             }
    //         },
    //         colors: ['#2082cc', '#00E396'],
    //         stroke: {
    //             curve: 'smooth'
    //         },
    //         grid: {
    //             borderColor: '#f3f3f3',
    //             yaxis: {
    //                 lines: {
    //                     show: true
    //                 }
    //             },
    //             padding: {
    //                 bottom: 50,
    //             },
    //             row: {
    //                 colors: ['#f3f3f3', 'transparent']
    //             }
    //         },
    //         markers: {
    //             size: 1
    //         },
    //         xaxis: {
    //             categories: subTopic.categories.map(value => value.name),
    //             labels: {
    //                 rotate: -45,
    //                 rotateAlways: true,
    //                 trim: false
    //             }
    //         },
    //         yaxis: {
    //             title: {
    //                 text: 'Seconds'
    //             }
    //         },
    //         legend: {
    //             show: false
    //         }
    //     };
    //
    //     const colorString = [];
    //     subTopic.categories.map((value) => value.average_error_percentage).forEach((items) => {
    //         if (items >= 90) {
    //             colorString.push('#ff0000');
    //         } else if (items > 80 && items <= 90) {
    //             colorString.push('#ffc107');
    //         } else if (items >= 50 && items <= 80) {
    //             colorString.push('#28A745');
    //         } else if (items < 50 || items == 0) {
    //             colorString.push('#007bff');
    //         }
    //     });
    //
    //     this.chartOptions3 = {
    //         series: [
    //             {
    //                 name: 'Percentage',
    //                 data: subTopic.categories.map((value) => value.average_error_percentage)
    //             }
    //         ],
    //         legend: {
    //             show: false
    //         },
    //         chart: {
    //             height: 450,
    //             width: '100%',
    //             type: 'bar',
    //             events: {
    //                 dataPointSelection: ((e, chart, config) => {
    //                     this.selectedContent = subTopic.categories[config.dataPointIndex];
    //                     this.selectedContent.showAll = false;
    //                     this.selectedContent.sub_topic = subTopic.categories[config.dataPointIndex].name;
    //                     this.selectedContent.question_sub_topic_id = subTopic.categories[config.dataPointIndex].id;
    //                     this.selectedContent.content_name = subTopic.categories[config.dataPointIndex].question_data[0]?.content_name;
    //                     this.showTable2 = true;
    //                     this.showTable = false;
    //                     this.showTable1 = false;
    //                     this.showTable3 = false;
    //                     this.createStudentDataTable(subTopic.categories[config.dataPointIndex].question_data);
    //                     const id = 'error_analysis_' + this.selectedContent?.sub_topic + this.selectedContent?.question_sub_topic_id;
    //                     setTimeout(() => {
    //                         document.getElementById(id).scrollIntoView({
    //                             behavior: 'smooth',
    //                             block: 'nearest',
    //                             inline: 'nearest'
    //                         });
    //                     }, 500);
    //                 })
    //             },
    //             toolbar: {
    //                 show: false
    //             },
    //         },
    //         colors: colorString,
    //         plotOptions: {
    //             bar: {
    //                 columnWidth: '10%',
    //                 distributed: true,
    //                 dataLabels: {
    //                     position: 'top'
    //                 }
    //             }
    //         },
    //         dataLabels: {
    //             enabled: true,
    //             formatter: ((val) => {
    //                 return val + '%';
    //             }),
    //             offsetY: -20,
    //             style: {
    //                 fontSize: '12px',
    //                 colors: ['#304758']
    //             }
    //         },
    //         grid: {
    //             show: true
    //         },
    //         xaxis: {
    //             categories: subTopic.categories.map(value => value.name),
    //             labels: {
    //                 rotate: -45,
    //                 rotateAlways: true,
    //                 trim: false
    //             }
    //         }
    //     };
    //
    //     // this.dataloaded = true;
    // }

    openContent(value, calledBy = '') {
        console.log(value, calledBy);
        const isContentTab = this.tabShow === 'content';
        if (calledBy == '') {
            if (isContentTab) {
                this.selectedContent = {
                    student_content_id: this.selectedContent?.student_content_id ?? value.student_content_id,
                    content_id: this.selectedContent?.content_id ?? value.content_id,
                    content_name: this.selectedContent?.content_name ?? value.content_name,
                    // showAll: true
                };
            } else {
                this.selectedContent = {
                    student_content_id: value.student_content_id,
                    content_id: value.module_id,
                    content_name: value.module_name,
                    // showAll: true
                };
            }
        } else if (calledBy == 'graph') {
            const subjectName = this.showTable ? this.selectedTopicSubject : this.showTable1 ? this.selectedSubTopicSubject :
                this.showTable2 ? this.selectedErrorAnalysisSubject : this.showTable3 ? this.selectedMasterySubject : '';
            const data = {
                student_content_id: value.questionData[0]?.student_content_id,

                content_id: isContentTab ? this.selectedContent?.content_id ?? value.questionData[0]?.content_id :
                    this.selectedContent.module_id ? this.selectedContent.module_id : (this.selectedContent?.content_id ?? value.questionData[0]?.content_id),

                content_name: isContentTab ? this.selectedContent?.content_name ?? value.questionData[0]?.content_name :
                    this.selectedContent?.module_name ? (this.selectedContent?.content_name + ' - ' + subjectName + ' - ' + this.selectedContent?.module_name) :
                        this.selectedContent?.content_name ?? value.questionData[0]?.content_name,

                // showAll: true
            };
            this.selectedContent = {...this.selectedContent, ...data};
            value.student_content_id = value.questionData[0]?.student_content_id;
        } else {
            console.log(value.questionData, 'ques');
            this.selectedContent = {
                student_content_id: value.questionData[0]?.student_content_id,
                content_id: isContentTab ? this.questionAnalysisContentSelected[0]?.content_id :
                    value.questionData[0]?.module_id,
                content_name: isContentTab ? this.questionAnalysisContentSelected[0]?.content_name :
                    this.questionAnalysisContentSelected[0]?.content_name + ' - ' + this.selectedQuestionAnalysisSubject + ' - ' + value.questionData[0]?.module_name,
                // showAll: true
            };
            value.student_content_id = value.questionData[0]?.student_content_id;
        }
        this.showAllQuestion = true;
        this.nameOrContentSelected = true;
        console.log(this.selectedContent, 'selectedContent');
        this.studentsAnswerList(value, 1);
    }

    questionSelectedFromTable(index, calledBy = '') {
        if (this.studentQuestionListData.length <= 2) {
            this.showAllQuestion = false;
            this.studentsAnswerList(this.selectedContent, index, calledBy);
        }
    }

    studentsAnswerList(value, index, calledBy = '') {
        this.selectedQuestion = index;
        const isContentTab = this.tabShow === 'content';
        if (calledBy != '') {
            value.content_name = calledBy == 'questionAnalysis' && !isContentTab ?
                this.questionAnalysisContentSelected[0]?.content_name + ' - ' + this.selectedQuestionAnalysisSubject + ' - ' +
                value.module_name : this.questionAnalysisContentSelected[0]?.content_name;
            value.question_topic_id = '';
            value.showAll = true;
            this.selectedContent = value;
        }
        const content_id = calledBy == 'questionAnalysis' && !isContentTab ? value.module_id : calledBy != ''
            ? this.questionAnalysisContentSelected[0]?.content_id : this.selectedContent.content_id;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id,
            content_format: '3',
            class_id: this.studentData ? this.studentData.class_id : '',
            student_id: value.student_id ?? this.auth.getUserId(),
            student_content_id: value.student_content_id
        };
        this.teacher.studentAnswerList(data).subscribe((successData: any) => {
                console.log(successData, 'successData');
                this.questionArray = successData.IsSuccess ? successData.ResponseObject : [];
                this.modalRef = this.modalService.open(this.showQuestion, {size: 'xl'});
            },
            (error) => {
                console.error(error, 'student_answetlist');
            });
    }

    getContentList(calledFrom = '') {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getRoleId() == '5' ? this.auth.getUserId() : '',
            class_id: this.studentData ? this.studentData.class_id : '',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };
        this.auth.postService(payload, 'student/completedCfsContent').subscribe((successData: any) => {
            if (calledFrom != 'tabChanged') {
                const test_type_id = this.studentData?.test_type_id ?? '';
                if (test_type_id != '' && test_type_id != '0') {
                    this.tabShow = test_type_id == '1' ? 'content' : test_type_id == '2' ? 'sat' : 'act';
                } else {
                    Object.entries(successData.ResponseObject).every(items => {
                        console.log(items, 'key');
                        if (successData.ResponseObject[items[0]].length != 0) {
                            this.tabShow = items[0];
                            return false;
                        }
                        return true;
                    });
                }
            }
            this.commonContentList = successData.ResponseObject;
            this.testTypeListData.every(value => {
                if (this.commonContentList[value.test_type.toLowerCase()].length != 0) {
                    this.showContentTypeTab = true;
                    return false;
                }
                return true;
            });
            console.log(this.showContentTypeTab, 'showContentTypeTab');
            const content = successData.ResponseObject[this.tabShow];
            this.contentList = successData.IsSuccess ? successData.ResponseObject[this.tabShow] : [];
            // this.contentList = successData.IsSuccess ? successData.ResponseObject : [];

            //// OverAllSummary Code Start Here ////
            let overAllSummaryArray = [];
            if (this.auth.getRoleId() != '5') {
                content.forEach(({ content_id, student_details }) => {
                    student_details.forEach(({ student_id, student_name, student_content_id }) => {
                        student_content_id.forEach(id => {
                            const contentExists = overAllSummaryArray.some(
                                entry => entry.content_id === content_id && entry.student_id === student_id && entry.student_content_id === id
                            );

                            if (!contentExists) {
                                overAllSummaryArray.push({content_id, student_id, student_content_id: id});
                            }
                        });

                        const studentExists = this.studentList.some(s => s.student_id === student_id);
                        if (!studentExists) {
                            this.studentList.push({ student_id, student_name });
                        }
                    });
                });
            } else {
                overAllSummaryArray = content;
            }
            this.getReportList(overAllSummaryArray, 'overall');

            //// OverAllSummary Code End Here ////

            //// Common Graph like Topic, Subtopic, Error Analysis, Summary Table Code Start Here ////
            const keyName = this.auth.getRoleId() == '5' ? 'student_content_id' : 'content_id';
            if (this.studentData[keyName] == '0') {
                this.contentSelected = successData.IsSuccess ? content : [];
            } else {
                const selectedContent = content.find(items => items[keyName] == this.studentData[keyName]);
                // content.forEach((items) => {
                //     if (items[keyName] == this.studentData[keyName]) {
                //         this.contentSelected = [items];
                //     }
                // });
                if (selectedContent) {
                    this.contentSelected = [selectedContent];
                } else {
                    this.contentSelected = content.length != 0 ? [content[0]] : [];
                }
            }
            if (this.auth.getRoleId() != '5') {
                this.allowSingleSelectStudent = this.contentSelected.length > 1;
                this.studentSetting();
                let student: any;
                if (this.studentData.student_id != '0') {
                    student = this.studentList.find(value => value.student_id == this.studentData.student_id);
                }
                if (this.allowSingleSelectStudent) {
                    this.studentSelected = this.studentData.student_id == '0' ? [this.studentList[0]] : student;
                } else {
                    this.studentSelected = this.studentData.student_id == '0' ? this.studentList : [student];
                }
            }
            const commonGraphData = this.auth.getRoleId() != '5' ? this.formArrayValue(this.contentList, this.studentSelected)
                : this.contentSelected;

            const isContentTab = this.tabShow === 'content';
            !isContentTab ? this.getSubjectList(commonGraphData) : this.getReportList(commonGraphData);

            //// Common Graph like Topic, Subtopic, Error Analysis, Summary Table Code End Here ////

            //// Mastery Score Code Start Here ////

            if (this.auth.getRoleId() == '5') {
                this.masteryContentSelected = this.contentSelected.length != 0 ? [this.contentSelected[0]] : [];
                this.getSubjectList(this.masteryContentSelected, 'mastery');

            } else {
                /// Question Analysis Code Start Here ///
                const contentList = this.contentList[0];
                // delete contentList.student_details;
                this.questionAnalysisContentSelected = this.contentList.length != 0 ? [contentList] : [];
                this.questionAnalysisStudentList = this.formStudentList('questionAnalysis').studentList;
                /// Question Analysis Code End Here ///

                this.masteryContentSelected = this.contentSelected.length != 0 ? [this.contentSelected[0]] : [];
                this.masteryStudentList = this.formStudentList('mastery').studentList;
                setTimeout(() => {
                    let student: any;
                    let masteryStudent: any;
                    if (this.studentData.student_id != '0') {
                        student = this.questionAnalysisStudentList.find(value => value.student_id == this.studentData.student_id);
                        masteryStudent =  this.masteryStudentList.find(value => value.student_id == this.studentData.student_id);
                    }
                    this.questionAnalysisStudentSelected = this.studentData.student_id == '0' ? this.questionAnalysisStudentList : [student];

                    this.masteryStudentSelected = this.studentData.student_id == '0' ? this.masteryStudentList : [masteryStudent];
                    this.cdr.detectChanges();

                    const commonQuestionAnalysisData = this.formArrayValue(this.contentList, this.questionAnalysisStudentSelected, 'questionAnalysis');
                    const commonMasteryData = this.formArrayValue(this.contentList, this.masteryStudentSelected, 'mastery');
                    if (isContentTab) {
                        this.getReportList(commonQuestionAnalysisData, 'questionAnalysis');
                        this.getReportList(commonMasteryData, 'mastery');
                    } else {
                        this.getSubjectList(commonQuestionAnalysisData, 'questionAnalysis');
                        this.getSubjectList(commonMasteryData, 'mastery');
                    }
                }, 0);
            }

            //// Mastery Score Code End Here ////

        }, (error) => console.error(error, 'error_contentList'));
    }

    formArrayValue(arrayValue, studentSelected, calledBy = '') {
        const createNewObject = [];
        const contentSelected = calledBy == 'mastery' ? this.masteryContentSelected : calledBy == 'questionAnalysis' ?
            this.questionAnalysisContentSelected : this.contentSelected;
        arrayValue.forEach((value) => {
            contentSelected.forEach((content) => {
                if (value.content_id === content.content_id) {
                    studentSelected.forEach((student) => {

                        const matchedContent = this.contentList.find(contentValue => contentValue.content_id == content.content_id);
                        const matchedStudent = matchedContent.student_details.find(data => data.student_id === student.student_id);

                        if (!matchedStudent) return;

                        matchedStudent.student_content_id.forEach((id) => {
                            const alreadyExists = createNewObject.some((entry) =>
                                entry.content_id === content.content_id && entry.student_id === matchedStudent.student_id &&
                                    entry.student_content_id === id);

                            if (!alreadyExists) {
                                createNewObject.push({
                                    content_id: content.content_id,
                                    student_id: matchedStudent.student_id,
                                    student_content_id: id
                                });
                            }
                        });
                    });
                }
            });
        });
        return createNewObject;
    }

    mergeByIdAndSum(array: any[], idKey: string): any[] {
        const merged: { [key: string]: any } = {};

        array.forEach((item) => {
            const id = item[idKey];
            const studentId = item.student_id;
            // Enrich question_data with student info
            const enrichedQuestions = (item.question_data || []).map(q => ({
                ...q
            }));

            if (!merged[id]) {
                merged[id] = {
                    ...item,
                    correct_answers: item.correct_answers || 0,
                    total_questions: item.total_questions || 0,
                    time_taken: item.time_taken || 0,
                    percentage: parseFloat(item.percentage || '0'),
                    average_time_taken: item.average_time_taken || 0,
                    _total_weight: item.total_questions || 1,
                    _student_ids: new Set(studentId ? [studentId] : []),
                    question_data: enrichedQuestions
                };
            } else {
                const existing = merged[id];

                existing.correct_answers += item.correct_answers || 0;
                existing.total_questions += item.total_questions || 0;
                existing.time_taken += item.time_taken || 0;

                // Weighted average: percentage
                const weight1 = existing._total_weight;
                const weight2 = item.total_questions || 0;
                const totalWeight = weight1 + weight2;

                const percent1 = existing.percentage * weight1;
                const percent2 = parseFloat(item.percentage || '0') * weight2;
                existing.percentage = totalWeight ? (percent1 + percent2) / totalWeight : 0;

                // Weighted average: average_time_taken
                const time1 = existing.average_time_taken * weight1;
                const time2 = (item.average_time_taken || 0) * weight2;
                existing.average_time_taken = totalWeight ? (time1 + time2) / totalWeight : 0;

                existing._total_weight = totalWeight;

                // Merge enriched question_data
                existing.question_data = existing.question_data.concat(enrichedQuestions);

                // Add to student set
                if (studentId) {
                    existing._student_ids.add(studentId);
                }
            }
        });

        return Object.values(merged).map((item) => {
            item.percentage = parseFloat(item.percentage.toFixed(2));
            item.average_time_taken = Math.round(item.average_time_taken);
            item.student_count = item._student_ids.size;

            delete item._student_ids;
            delete item._total_weight;

            return item;
        });
    }

    openAccordian(index, arrayvalue) {
        arrayvalue.forEach((value, i) => value.showAccordian = index == i ? value.showAccordian = !value.showAccordian : false);
    }

    getSubjectList(contentArray = [], calledFrom = '') {
        let content = [];
        if (this.auth.getRoleId() == '5') {
            contentArray.forEach((items) => {
                this.contentList.forEach((value) => {
                    if (items.student_content_id == value.student_content_id) {
                        content.push({content_id: value.content_id, student_content_id: value.student_content_id});
                    }
                });
            });
        } else {
            content = contentArray;
        }
        if (content.length != 0) {
            const payload = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                class_id: this.studentData ? this.studentData.class_id : '',
                student_id: this.auth.getUserId(),
                content
            };
            this.auth.postService(payload, 'student/getModuleSubject').subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    if (calledFrom == '') {
                        this.commonSubjectList = successData.ResponseObject ?? [];

                        const getValidSubject = (selected: string) =>
                            this.commonSubjectList.includes(selected) ? selected : (this.commonSubjectList[0] ?? '');

                        this.selectedTopicSubject = getValidSubject(this.selectedTopicSubject);
                        this.selectedSubTopicSubject = getValidSubject(this.selectedSubTopicSubject);
                        this.selectedErrorAnalysisSubject = getValidSubject(this.selectedErrorAnalysisSubject);
                        this.selectedTimeAnalysisSubject = getValidSubject(this.selectedTimeAnalysisSubject);

                    } else if (calledFrom == 'questionAnalysis') {
                        this.questionAnalysisSubjectList = successData.ResponseObject ?? [];
                        const getValidSubject = (selected: string) =>
                            this.questionAnalysisSubjectList.includes(selected) ? selected : (this.questionAnalysisSubjectList[0] ?? '');
                        this.selectedQuestionAnalysisSubject = getValidSubject(this.selectedQuestionAnalysisSubject);
                    } else if (calledFrom == 'mastery') {
                        this.masterySubjectList = successData.ResponseObject ?? [];
                        const getValidSubject = (selected: string) =>
                            this.masterySubjectList.includes(selected) ? selected : (this.masterySubjectList[0] ?? '');
                        this.selectedMasterySubject = getValidSubject(this.selectedMasterySubject);
                    }
                    this.getReportList(contentArray, calledFrom);
                }
                this.cdr.detectChanges();
            }, (error) => console.error(error, 'error_reportList'));
        }
    }

    getReportList(contentArray = [], calledFrom = '') {
        let content = [];
        if (this.auth.getRoleId() == '5') {
            contentArray.forEach((items) => {
                this.contentList.forEach((value) => {
                    if (items.student_content_id == value.student_content_id) {
                        content.push({content_id: value.content_id, student_content_id: value.student_content_id});
                    }
                });
            });
        } else {
            content = contentArray;
        }
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            class_id: this.studentData ? this.studentData.class_id : '',
            student_id: this.auth.getUserId(),
            content,
            test_type_id: this.tabShow == 'content' ? '1' : this.tabShow == 'sat' ? '2' : '3'
        };
        this.auth.postService(payload, 'student/cfsReport').subscribe((successData: any) => {
            const isContentTab = this.tabShow === 'content';
            successData.ResponseObject.forEach(data => {
                let modules = [];
                if (!isContentTab) {
                    data.subject.forEach(subject => subject.modules.forEach(module => {
                        module.subject_name = subject.subject_name;
                        module.student_content_id = data.student_content_id;
                    }));
                    modules = data.subject.flatMap(sub => sub.modules);
                    data.modules = modules;
                } else {
                    modules = [data];
                }

                modules.forEach((moudle) => {
                    moudle.question_topics.forEach((topic) => {
                        topic.question_data.map(value => {
                            value.student_id = data.student_id;
                            value.student_name = data.student_name;
                            value.student_content_id = data.student_content_id;
                            value.content_id = data.content_id;
                            value.content_name = data.content_name;
                            if (!isContentTab) {
                                value.module_id = moudle.module_id;
                                value.module_name = moudle.module_name;
                            }
                        });
                    });

                    moudle.question_sub_topics.forEach(subTopic => {
                        subTopic.question_data.map(value => {
                            value.student_id = data.student_id;
                            value.student_name = data.student_name;
                            value.student_content_id = data.student_content_id;
                            value.content_id = data.content_id;
                            value.content_name = data.content_name;
                            if (!isContentTab) {
                                value.module_id = moudle.module_id;
                                value.module_name = moudle.module_name;
                            }
                        });
                    });
                });
            });

            if (calledFrom == '') {
                this.summaryRecordListData = successData.ResponseObject;
            }
            if (this.auth.getRoleId() != '5' && calledFrom != 'overall') {
                let newArray = [];
                const studentSelected = calledFrom == 'mastery' ? this.masteryStudentSelected : calledFrom == 'questionAnalysis' ?
                    this.questionAnalysisStudentSelected : this.studentSelected;
                const contentSelected = calledFrom == 'mastery' ? this.masteryContentSelected : calledFrom == 'questionAnalysis' ?
                    this.questionAnalysisContentSelected : this.contentSelected;
                this.updateCorrectOrIncorrect(calledFrom == '' ? this.summaryRecordListData : successData.ResponseObject);

                successData.ResponseObject.forEach((contentValue) => {
                    studentSelected.forEach((items) => {
                        if (items.student_id === contentValue.student_id) {
                            let studentObj = newArray.find(value => value.student_id === items.student_id);

                            if (!studentObj) {
                                studentObj = {
                                    student_id: items.student_id,
                                    student_name: items.student_name,
                                    data: []
                                };
                                newArray.push(studentObj);
                            }

                            const existingContent = studentObj.data.find(entry => entry.content_id === contentValue.content_id);

                            if (!existingContent) {
                                studentObj.data.push(contentValue);
                            } else {

                                const existingDate = new Date(existingContent.content_start_date).getTime();
                                const newDate = new Date(contentValue.content_start_date).getTime();
                                if (newDate > existingDate || (newDate == existingDate && existingContent.percentage < contentValue.percentage)) {
                                    const index = studentObj.data.indexOf(existingContent);
                                    studentObj.data[index] = contentValue;
                                }
                            }
                        }
                    });
                });
                let newMapped = [];
                newMapped = newArray.map(value => value.data).reduce((acc, curr) => acc.concat(curr), []);
                if (contentSelected.length == 1 && studentSelected.length > 1) {
                    const singleContentMultiStudent = [];
                    if (!isContentTab) {
                        newMapped.forEach(item => {
                            item.subject.forEach((subject) => {
                                subject.modules.forEach((module) => {
                                    const existing = singleContentMultiStudent.find(value => value.content_id === module.module_id);
                                    if (!existing) {
                                        singleContentMultiStudent.push({
                                            content_id: module.module_id,
                                            content_name: module.module_name,
                                            question_topics: [...module.question_topics],
                                            question_sub_topics: [...module.question_sub_topics],
                                            student_content_id: [item.student_content_id]
                                        });
                                    } else {
                                        existing.question_topics.push(...module.question_topics);
                                        existing.question_sub_topics.push(...module.question_sub_topics);
                                        existing.student_content_id.push(item.student_content_id);
                                    }
                                });
                            });
                            singleContentMultiStudent.forEach((newContentValue) => {
                                newContentValue.question_topics = this.mergeByIdAndSum(newContentValue.question_topics, 'question_topic_id');
                                newContentValue.question_sub_topics = this.mergeByIdAndSum(newContentValue.question_sub_topics, 'question_sub_topic_id');
                            });
                        });
                        successData.ResponseObject.forEach((value) => {
                            value.subject.forEach((subject) => {
                                singleContentMultiStudent.forEach((contentData) => {
                                    subject.modules.forEach((module) => {
                                        if (contentData.content_id == module.module_id) {
                                            module.question_topics = contentData.question_topics;
                                            module.question_sub_topics = contentData.question_sub_topics;
                                        }
                                    });
                                });
                            });
                        });
                    } else {
                        newMapped.forEach(({ content_id, content_name, question_topics, question_sub_topics, student_content_id }) => {
                            const existing = singleContentMultiStudent.find(item => item.content_id === content_id);

                            if (!existing) {
                                singleContentMultiStudent.push({
                                    content_id,
                                    content_name,
                                    question_topics: [...question_topics],
                                    question_sub_topics: [...question_sub_topics],
                                    student_content_id: [student_content_id]
                                });
                            } else {
                                existing.question_topics.push(...question_topics);
                                existing.question_sub_topics.push(...question_sub_topics);
                                existing.student_content_id.push(student_content_id);
                            }
                        });
                        singleContentMultiStudent.forEach((newContentValue) => {
                            newContentValue.question_topics = this.mergeByIdAndSum(newContentValue.question_topics, 'question_topic_id');
                            newContentValue.question_sub_topics = this.mergeByIdAndSum(newContentValue.question_sub_topics, 'question_sub_topic_id');
                        });
                        successData.ResponseObject = singleContentMultiStudent;
                    }
                } else {
                    successData.ResponseObject = newMapped;
                }
            }
            this.auth.getRoleId() != '5' && calledFrom != 'overall' ? '' : this.updateCorrectOrIncorrect(calledFrom == '' ? this.summaryRecordListData : successData.ResponseObject);
            if (calledFrom == '') {
                this.totalReport = successData.IsSuccess ? successData.ResponseObject : [];
                this.summaryRecordListData.sort((a, b) => {
                    const dateA = new Date(a.content_start_date).getTime();
                    const dateB = new Date(b.content_start_date).getTime();

                    if (dateA !== dateB) {
                        return dateB - dateA;
                    }
                    return b.percentage - a.percentage;
                });
                this.buildTopicChartOptions();
                this.buildSubTopicOrTimeOrErrorAnalysisChartOptions('subTopic');
                this.buildSubTopicOrTimeOrErrorAnalysisChartOptions('timeAnalysis');
                this.buildSubTopicOrTimeOrErrorAnalysisChartOptions('errorAnalysis');

                setTimeout(() => {
                    this.dataloaded = true;
                }, 300);
            } else if (calledFrom == 'overall') {
                this.overallSummary = successData.IsSuccess ? successData.ResponseObject : [];
                this.overallSummary.sort((a, b) => {
                    const dateA = new Date(a.content_start_date).getTime();
                    const dateB = new Date(b.content_start_date).getTime();

                    if (dateA !== dateB) {
                        return dateB - dateA;
                    }
                    return b.percentage - a.percentage;
                });
            } else if (calledFrom == 'questionAnalysis') {
                this.questionAnalysisRecord = successData.IsSuccess ? successData.ResponseObject : [];
                if (!isContentTab) {
                    this.questionAnalysisRecord.forEach((value) => {
                        value.subject.forEach(subjectValue => {
                            subjectValue.modules.forEach(moduleValue => {
                                moduleValue.question_sub_topics.forEach(subTopicValue => {
                                    subTopicValue.question_data.forEach(questionValue => {
                                        questionValue.module_id = moduleValue.module_id;
                                        questionValue.module_name = moduleValue.module_name;
                                    });
                                });
                            });
                        });
                    });
                }
                this.formQuestionAnalysisData();
            } else {
                this.totalMasteryRecord = successData.IsSuccess ? successData.ResponseObject : [];
                if (!isContentTab) {
                    this.totalMasteryRecord.forEach(value => {
                        value.subject.forEach(subject => {
                            subject.modules.forEach(module => {
                                module.question_sub_topics.forEach(subTopic => {
                                    subTopic.module_name = module.module_name;
                                    subTopic.module_id = module.module_id;
                                });
                            });
                        });
                    });
                }
                this.createMasteryData();
            }
        }, (error) => console.error(error, 'error_reportList'));
    }

    createMasteryData() {
        let contentData: any[] = [];
        const keyName = this.auth.getRoleId() != '5' ? 'content_id' : 'student_content_id';
        const isContentTab = this.tabShow === 'content';
        this.masteryContentSelected.forEach(masteryContent => {
            this.totalMasteryRecord.forEach(masteryRecord => {
                if (masteryContent[keyName] === masteryRecord[keyName] &&
                    !contentData.some(c => c[keyName] === masteryRecord[keyName])) {
                    if (!isContentTab) {
                        const subject = masteryRecord.subject.find(s => s.subject_name === this.selectedMasterySubject);
                        if (subject) {
                            subject.modules.forEach(module => {
                                module.question_sub_topics.forEach(subTopicValue => {
                                    subTopicValue.question_data.forEach(value => {
                                        value.module_id = module.module_id;
                                        value.module_name = module.module_name;
                                    });
                                });
                                contentData = contentData.concat(module.question_sub_topics);
                            });
                        }
                    } else {
                        contentData = contentData.concat(masteryRecord.question_sub_topics);
                    }
                }
            });
        });
        const formMasteryData = [];
        contentData.forEach(data => {
            const index = formMasteryData.findIndex(item => item.question_sub_topic_id === data.question_sub_topic_id);
            if (index === -1) {
                formMasteryData.push({
                    question_sub_topic_id: data.question_sub_topic_id,
                    question_sub_topic_name: data.sub_topic,
                    data: [data],
                    average_percentage: 0
                });
            } else {
                formMasteryData[index].data.push(data);
            }
        });
        formMasteryData.forEach((items) => {
            this.masteryContentSelected.forEach((value) => {
                const checkContentAlreadyExist = items.data.some((code) => code[keyName] == value[keyName]);
                if (!checkContentAlreadyExist) {
                    items.data.push({
                        student_content_id: '0',
                        content_id: value.content_id,
                        content_name: value.content_name,
                        percentage: '0', average_percentage: 0
                    });
                }
            });
        });

        formMasteryData.forEach((items) => {
            const valid = items.data.filter(d => d.student_content_id !== '0');
            const sum = valid.reduce((acc, d) => acc + parseInt(d.percentage), 0);
            items.average_percentage = valid.length ? sum / valid.length : 0;
        });

        this.masteryData =  formMasteryData.sort((a, b) => b.average_percentage - a.average_percentage);
    }

    onContentSelectionChange(event, calledFrom, calledBy = '') {
        if (calledFrom == 'all') {
            calledBy == 'mastery' ? this.masteryContentSelected = event : calledBy == 'questionAnalysis' ?
                this.questionAnalysisContentSelected = event : this.contentSelected = event;
        }
        const isContentTab = this.tabShow === 'content';
        const selectedContent = calledBy == 'mastery' ? this.masteryContentSelected : calledBy == 'questionAnalysis' ?
            this.questionAnalysisContentSelected :  this.contentSelected;
        if (calledBy == '') {
            this.showTable = this.showTable1 = this.showTable2 = false;
        } else {
            this.showTable3 = false;
        }
        if (this.auth.getRoleId() == '5') {
            this.getReportList(selectedContent, 'mastery');
        } else {
            const selectedStudent = calledBy == 'mastery' ? this.masteryStudentSelected : calledBy == 'questionAnalysis' ?
                this.questionAnalysisStudentSelected : this.studentSelected;
            const studentList = this.formStudentList(calledBy).studentList;
            if (calledBy == '') {
                this.allowSingleSelectStudent = this.contentSelected.length > 1;
                this.studentSetting();
            }
            setTimeout(() => {
                calledBy == 'mastery' ? this.masteryStudentSelected = studentList : calledBy == 'questionAnalysis' ?
                    this.questionAnalysisStudentSelected = studentList : this.studentSelected = studentList;
                let selectStudent = [];
                if (selectedStudent.length > 1 || selectedStudent.length == 0) {
                    selectStudent = studentList.length != 0 ? [studentList[0]] : [];
                } else if (selectedStudent.length == 1) {
                    const checkStudentAlreadyExist = selectedStudent.some(value =>
                        studentList.some(student =>  student.student_id == value.student_id)
                    );
                    selectStudent = checkStudentAlreadyExist ? selectedStudent : studentList.length != 0 ? [studentList[0]] : [];
                }
                calledBy == 'mastery' ? this.masteryStudentList = studentList : calledBy == 'questionAnalysis' ?
                    this.questionAnalysisStudentList = studentList : this.studentList = studentList;
                calledBy == 'mastery' ? this.masteryStudentSelected = selectStudent : calledBy == 'questionAnalysis' ?
                    this.questionAnalysisStudentSelected = selectedStudent : this.studentSelected = selectStudent;
                const commonGraphData = this.formArrayValue(this.contentList, selectStudent, calledBy);

                !isContentTab ? this.getSubjectList(commonGraphData, calledBy) : this.getReportList(commonGraphData, calledBy);
            }, 0);
        }
    }

    updateCorrectOrIncorrect(arrayValue) {
        const isContentTab = this.tabShow === 'content';

        arrayValue.forEach(data => {
            const modules = isContentTab ? [data] : data.subject.flatMap(sub => sub.modules);
            modules.forEach(module => {
                let correct = 0, incorrect = 0;
                module.question_topics.forEach(topic => {
                    const correctAns = parseInt(topic.correct_answers);
                    const totalQ = parseInt(topic.total_questions);
                    correct += correctAns;
                    incorrect += totalQ - correctAns;

                    topic.question_data.forEach(q => {
                        q.question_topic_id = topic.question_topic_id;
                        q.question_topic = topic.question_topic;
                    });
                });

                const total = correct + incorrect;
                module.correct_answer = correct;
                module.incorrect_answer = incorrect;
                module.correct_answer_percentage = Math.round((correct / total) * 100);
                module.incorrect_answer_percentage = Math.round((incorrect / total) * 100);
                module.percentage = Math.round((correct / total) * 100);

                module.question_sub_topics?.forEach(sub => {
                    sub.content_id = data.content_id;
                    sub.content_name = data.content_name;
                    sub.question_data.forEach(q => {
                        q.question_sub_topic_id = sub.question_sub_topic_id;
                        q.sub_topic = sub.sub_topic;
                    });
                });
            });

            if (!isContentTab) {
                // Subject-level aggregation
                data.subject.forEach(sub => {
                    const subModules = sub.modules;
                    const correct = subModules.reduce((acc, mod) => acc + (mod.correct_answer || 0), 0);
                    const incorrect = subModules.reduce((acc, mod) => acc + (mod.incorrect_answer || 0), 0);
                    const total = correct + incorrect;

                    sub.correct_answer = correct;
                    sub.incorrect_answer = incorrect;
                    sub.correct_answer_percentage = total ? Math.round((correct / total) * 100) : 0;
                    sub.incorrect_answer_percentage = total ? Math.round((incorrect / total) * 100) : 0;
                    sub.percentage = total ? Math.round((correct / total) * 100) : 0;

                    // Store only Reading & Writing and Math percentages
                    if (sub.subject_name === 'Reading & Writing') {
                        data.RW_Percentage = sub.percentage;
                    } else if (sub.subject_name === 'Math') {
                        data.Math_Percentage = sub.percentage;
                    }
                });

                const correct =  modules.map(num => num.correct_answer).reduce((acc, curr) => acc + curr, 0);
                const incorrect =  modules.map(num => num.incorrect_answer).reduce((acc, curr) => acc + curr, 0);
                const total = correct + incorrect;
                data.correct_answer = correct;
                data.incorrect_answer = incorrect;
                data.correct_answer_percentage = Math.round((correct / total) * 100);
                data.incorrect_answer_percentage = Math.round((incorrect / total) * 100);
                data.percentage = Math.round((correct / total) * 100);
            }
        });
    }

    onStudentChange(event, calledFrom, calledBy = '') {
        if (calledFrom == 'all') {
            calledBy == 'mastery' ? this.masteryStudentSelected = event : calledBy == 'questionAnalysis' ?
                this.questionAnalysisStudentSelected = event : this.studentSelected = event;
        }
        const isContentTab = this.tabShow === 'content';
        const studentSelected = calledBy == 'mastery' ? this.masteryStudentSelected : calledBy == 'questionAnalysis' ?
            this.questionAnalysisStudentSelected : this.studentSelected;
        const commonGraphData = this.formArrayValue(this.contentList, studentSelected, calledBy);
        if (calledBy == '') {
            this.showTable = this.showTable1 = this.showTable2 = false;
        } else {
            this.showTable3 = false;
        }
        !isContentTab ? this.getSubjectList(commonGraphData, calledBy) : this.getReportList(commonGraphData, calledBy);
    }

    // showAllSelected(event) {
    //     this.selectedContent.showAll = event.target.checked;
    //     let studentList = [];
    //     this.totalReport.forEach(items => {
    //         let selectAllData = [];
    //         if (this.tabShow !== 'content') {
    //             items.subject.forEach((subject) => {
    //                 const subjectSelected = this.showTable ? this.selectedTopicSubject : this.showTable1 ? this.selectedSubTopicSubject :
    //                     this.showTable2 ? this.selectedQuestionAnalysisSubject : this.showTable3 ? this.selectedMasterySubject : '';
    //                 console.log(subjectSelected, 'subjectSelected');
    //                 if (subject.subject_name == subjectSelected) {
    //                     subject.modules.forEach((module) => {
    //                         const totalData = this.selectedContent?.question_topic_id ? module.question_topics : module.question_sub_topics;
    //                         selectAllData.push(totalData);
    //                     });
    //                     const flatData = [].concat(...selectAllData);
    //                     console.log(flatData, 'flatData');
    //                     if (event.target.checked) {
    //                         studentList = [].concat(...flatData.map(value => value.question_data));
    //                     } else {
    //                         const id = this.selectedContent?.question_topic_id ? 'question_topic_id' : 'question_sub_topic_id';
    //                         studentList = [].concat(...flatData.filter((value) => value[id] == this.selectedContent[id]).map(data => data.question_data));
    //                     }
    //                     console.log(studentList, 'studentList');
    //                     this.createStudentDataTable(studentList, this.showTable3 ? 'mastery' : '');
    //                 }
    //             });
    //
    //         } else {
    //             const totalData = this.selectedContent?.question_topic_id ? items.question_topics : items.question_sub_topics;
    //             console.log(totalData, 'totalData');
    //             if (event.target.checked) {
    //                 studentList = totalData.map(value => value.question_data).flat();
    //             } else {
    //                 const id = this.selectedContent?.question_topic_id ? 'question_topic_id' : 'question_sub_topic_id';
    //                 studentList = totalData.filter((value) => value[id] == this.selectedContent[id]).map(data => data.question_data).flat();
    //             }
    //             console.log(studentList, 'studentList');
    //             this.createStudentDataTable(studentList, this.showTable3 ? 'mastery' : '');
    //         }
    //     });
    // }

    showAllSelected(event) {
        this.selectedContent.showAll = event.target.checked;
        let studentList: any[] = [];
        console.log(this.totalReport, 'totalReport');
        this.totalReport.forEach(items => {
            let selectAllData: any[] = [];

            const isContentTab = this.tabShow === 'content';
            const idKey = this.selectedContent?.question_topic_id ? 'question_topic_id' : 'question_sub_topic_id';
            if (!isContentTab) {
                items.subject.forEach(subject => {
                    const subjectSelected = this.showTable ? this.selectedTopicSubject : this.showTable1 ? this.selectedSubTopicSubject
                        : this.showTable2 ? this.selectedQuestionAnalysisSubject : this.showTable3 ? this.selectedMasterySubject : '';

                    if (subject.subject_name !== subjectSelected) return;

                    subject.modules.forEach(module => {
                        const data = this.selectedContent?.question_topic_id ? module.question_topics : module.question_sub_topics;
                        if (Array.isArray(data)) selectAllData.push(data);
                    });

                    const flatData = [].concat(...selectAllData);
                    studentList = event.target.checked ? [].concat(...flatData.map(v => v.question_data))
                        : [].concat(...flatData.filter(v => v[idKey] == this.selectedContent[idKey]).map(v => v.question_data));
                    this.createStudentDataTable(studentList, this.showTable3 ? 'mastery' : '');
                });

            } else {
                const totalData = this.selectedContent?.question_topic_id ? items.question_topics : items.question_sub_topics;
                console.log(totalData, 'totaldaa');
                if (!Array.isArray(totalData)) return;

                studentList = event.target.checked
                    ? [].concat(...totalData.map(v => v.question_data))
                    : [].concat(...totalData.filter(v => v[idKey] == this.selectedContent[idKey]).map(v => v.question_data));
                console.log(studentList, 'syuden');
                this.createStudentDataTable(studentList, this.showTable3 ? 'mastery' : '');
            }
        });
    }

    formQuestionAnalysisData(moduleSelected = '') {
        let studentList = [];
        const isContentTab = this.tabShow === 'content';
        if (this.questionAnalysisRecord.length != 0) {
            this.questionAnalysisRecord.forEach(items => {
                if (!isContentTab) {
                    items.subject.forEach((subject) => {
                        if (this.selectedQuestionAnalysisSubject == subject.subject_name) {
                            this.selectedQuestionModule = subject.modules;
                            if (moduleSelected == '') {
                                this.questionAnalysisModuleSelected = [subject.modules[0]] ?? [];
                            }
                            subject.modules.forEach((module) => {
                                if (module.module_id == this.questionAnalysisModuleSelected[0]?.module_id) {
                                    const totalData = module.question_sub_topics;
                                    studentList = totalData.map(value => value.question_data).flat();
                                    this.createStudentDataTable(studentList, 'questionAnalysis');
                                }
                            });
                        }
                    });
                } else {
                    const totalData = items.question_sub_topics;
                    studentList = totalData.map(value => value.question_data).flat();
                    this.createStudentDataTable(studentList, 'questionAnalysis');
                }
            });
        } else {
            this.questionAnalysisListData = [];
        }
    }

    createStudentDataTable(arrayValue, calledBy = '') {
        const studentListData = [];
        const studentSelected = calledBy == 'mastery' ? this.masteryStudentSelected : calledBy == 'questionAnalysis' ?
            this.questionAnalysisStudentSelected : this.studentSelected;
        const selectedStudentList = this.auth.getRoleId() != '5' ? studentSelected : [{
            student_id: this.auth.getUserId(),
            student_name: this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname')
        }];
        selectedStudentList.forEach((studentList) => {
            arrayValue.forEach((student) => {
                const isContentTab = this.tabShow === 'content';
                const checkCondition = isContentTab ? studentList.student_id == student.student_id : this.selectedContent ?
                    studentList.student_id == student.student_id && this.selectedContent?.content_id == student.module_id :
                    studentList.student_id == student.student_id;
                if (checkCondition) {
                    const checkStudentExist = studentListData.find((value) => value.student_id == student.student_id);
                    if (checkStudentExist) {
                        // Push only unique question_no values
                        const existingQuestions = new Set(checkStudentExist.questionData.map(q => q.question_no));
                        if (!existingQuestions.has(student.question_no)) {
                            checkStudentExist.questionData.push(student);
                        }
                    } else {
                        studentListData.push({
                            student_id: student.student_id,
                            student_name: student.student_name,
                            questionData: [student]
                        });
                    }
                }
            });
        });
        studentListData.forEach(items => items.questionData.sort((a, b) => parseInt(a.question_no) - parseInt(b.question_no)));
        this.studentQuestionListData = studentListData;
        studentListData.unshift({
            student_name: 'Total Incorrect Answer',
            student_id: '0',
            questionData: []
        });
        const incorrectSummary:
            { [questionNo: string]: { total_questions: number, total_correct_answer: number, total_in_correct_answer: number, question_no: string } } = {};

        studentListData.forEach((student) => {
            if (student.student_id !== '0') {
                student.questionData.forEach((question) => {
                    const qNo = question.question_no;
                    if (!incorrectSummary[qNo]) {
                        incorrectSummary[qNo] = { total_questions: 0, total_correct_answer: 0, total_in_correct_answer: 0 , question_no: question.question_no};
                    }

                    incorrectSummary[qNo].total_questions += 1;
                    if (question.is_correct === 'false') {
                        incorrectSummary[qNo].total_in_correct_answer += 1;
                    } else {
                        incorrectSummary[qNo].total_correct_answer += 1;
                    }
                });
            }
        });
        const totalRow = studentListData.find(student => student.student_id === '0');
        studentListData[1].questionData.forEach((value) => {
            Object.entries(incorrectSummary).forEach(([question_no, data]) => {
                if (value.question_no == data.question_no) {
                    totalRow.questionData.push({
                        total_questions: data.total_questions,
                        total_in_correct_answer : data.total_in_correct_answer,
                        total_correct_answer : data.total_correct_answer
                    });
                }
            });
        });
        calledBy == 'questionAnalysis' ? this.questionAnalysisListData = studentListData : this.studentQuestionListData = studentListData;
    }

    formStudentList(calledBy) {
        const studentList = [];
        const contentSelected = calledBy == 'mastery' ? this.masteryContentSelected : calledBy == 'questionAnalysis' ?
            this.questionAnalysisContentSelected : this.contentSelected;
        this.contentList.forEach(({ content_id, student_details }) => {
            contentSelected.forEach((items) => {
                if (items.content_id == content_id) {
                    student_details.forEach(({ student_id, student_name }) => {
                        const studentExists = studentList.some(s => s.student_id === student_id);
                        if (!studentExists) {
                            studentList.push({ student_id, student_name });
                        }
                    });
                }
            });
        });
        return {studentList};
    }

    showMasterData(selectedData, index) {
        this.masteryData.forEach((items, idnx) => {
            if (index == idnx) {
                items.showStudentData = !items.showStudentData;
            } else {
                items.showStudentData = false;
            }
        });
        this.selectedContent = selectedData;
        if (this.tabShow != 'content') {
            this.selectedContent.content_id = selectedData.module_id;
        }
        this.selectedContent.showAll = false;
        this.showTable = false;
        this.showTable1 = false;
        this.showTable2 = false;
        this.showTable3 = true;
        this.createStudentDataTable(selectedData.question_data, 'mastery');
        const id = 'master_analysis_' + this.selectedContent?.sub_topic + this.selectedContent?.question_sub_topic_id;

        setTimeout(() => {
            if (document.getElementById(id)) {
                document.getElementById(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'nearest'
                });
            }
        }, 500);
    }

    backToClass() {
        const reportCalledFrom = this.auth.getSessionData('reportCalledFrom') ?? '';
        if (reportCalledFrom == 'list') {
            this.router.navigate(['/class/list-class']);
        } else if (['assessment_correction', 'assignment_correction'].includes(reportCalledFrom)) {
            const studentContent = JSON.parse(this.auth.getSessionData('correction_student-content'));
            const redirect = this.auth.getSessionData('correction_return');
            this.auth.setSessionData('student-content', JSON.stringify(studentContent));
            this.auth.setSessionData('correction-return', redirect);
            if (reportCalledFrom == 'assessment_correction') {
                this.router.navigate(['assessment-correction/correction-page']);
            } else {
                this.router.navigate(['assignment-correction/correction-page']);
            }
        } else if (['assessment', 'assignment'].includes(reportCalledFrom)) {
            this.router.navigate(['studentlogin/' + reportCalledFrom]);
        } else if (reportCalledFrom == 'student-content') {
            this.router.navigate(['student-content/list-content/new']);
        } else if (reportCalledFrom != '') {
            this.router.navigate([this.auth.getRoleId() == '5' ? 'studentlogin/class-detail' : 'class/topicsAndCurriculum/3']);
        }
    }

    calculatePercentage(part, total) {
        if (total === 0) {
            return 'Cannot calculate percentage with a total of zero.';
        }
        const percentage = Math.round((part / total) * 100);
        return percentage;
    }

    close() {
        this.nameOrContentSelected = false;
        this.modalRef.close();
    }

    testTypeList() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
        };
        this.auth.postService(payload, 'content/testType').subscribe((successData: any) => {
            console.log(successData, 'tets_type');
            this.testTypeListData = successData.IsSuccess ? successData.ResponseObject : [];
            this.tabShow = this.testTypeListData[0]?.test_type.toLowerCase();
            this.getContentList();
        }, (error => {this.getContentList(); console.error(error, 'error_test_type')}));
    }

    callViewAnalytic(type) {
        this.tabShow = type.test_type.toLowerCase();
        console.log(type);
        this.studentList = [];
        this.totalReport = [];
        this.summaryRecordListData = [];
        this.questionAnalysisListData = [];
        this.overallSummary = [];
        this.masteryData = [];
        this.contentSelected = [];
        this.getContentList('tabChanged');
    }

    onModalScroll() {
        const scrollTop = this.modalBody.nativeElement.scrollTop;

        if (scrollTop > this.showScrollHeight) {
            this.showScroll = true;
        } else if (this.showScroll && scrollTop < this.hideScrollHeight) {
            this.showScroll = false;
        }
    }

    windowScrollUp() {
        if (this.modalBody) {
            this.modalBody.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}
