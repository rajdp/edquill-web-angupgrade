import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {AuthService} from 'src/app/shared/service/auth.service';
import {StudentService} from 'src/app/shared/service/student.service';
import {parse} from 'flatted';

@Component({
    selector: 'app-question-report',
    templateUrl: './question-report.component.html',
    styleUrls: ['./question-report.component.scss']
})

export class QuestionReportComponent implements OnInit {
    protected studentAnswer = [];
    protected selectAllStudentDetails = false;
    public getData: any;
    public totalAns: any = [];
    public previousFeedBack = [];
    public selectedFeedBackIndex: any = '';
    public selectedPreviousStudentAnswer: any;
    convertedText: SafeHtml;
    public topicListData = [];
    public selectedTopic = [];
    public selectedSubTopic = [];
    public subTopicListData = [];
    public settings = {};
    public settings1 = {};
    @Input() selectedQuestion: any = 1;
    @Input() questionArray: any = {};
    @Input() showFullQuestion: any = false;
    @Input() topicId = '';
    @Input() subTopicId = '';
    @Input() selectedType = '';
    @Input() student_content_id = '';
    @Input() showAll = false;
    public questionNumberList = [];

    constructor(public sanitizer: DomSanitizer, public auth: AuthService, public student: StudentService, public cdr: ChangeDetectorRef) {
        this.getData = JSON.parse(this.auth.getSessionData('classDetails'));
        this.settings = {
            singleSelection: false,
            idField: 'question_topic_id',
            textField: 'question_topic',
            enableCheckAll: true,
            selectAllText: 'Select all',
            unSelectAllText: 'UnSelect all',
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 139,
            itemsShowLimit: 3,
            searchPlaceholderText: 'Search Topic',
            noDataAvailablePlaceholderText: 'No data available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
        };
        this.settings1 = {
            singleSelection: false,
            idField: 'question_sub_topic_id',
            textField: 'sub_topic',
            enableCheckAll: true,
            selectAllText: 'Select all',
            unSelectAllText: 'UnSelect all',
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 139,
            itemsShowLimit: 2,
            searchPlaceholderText: 'Search Sub Topic',
            noDataAvailablePlaceholderText: 'No data available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
        };
    }

    ngOnInit(): void {
        const studentAnswer = this.questionArray?.answers ? this.questionArray?.answers : [];
        studentAnswer.forEach((items) => {
            const objectValue = items.question_type_id == '24' ? items.subQuestions[0] : items;
            if (objectValue.question_topic_id) {
                const topicId = this.topicListData.some(code => code.question_topic_id == objectValue.question_topic_id);
                if (!topicId) {
                    this.topicListData.push({
                        question_topic_id: objectValue.question_topic_id,
                        question_topic: objectValue.question_topic
                    });
                }
            }
            if (objectValue.question_sub_topic_id) {
                const subTopicId = this.subTopicListData.some(code => code.question_sub_topic_id == objectValue.question_sub_topic_id);
                if (!subTopicId) {
                    this.subTopicListData.push({
                        question_sub_topic_id: objectValue.question_sub_topic_id,
                        sub_topic: objectValue.sub_topic
                    });
                }
            }
        });
        if ((this.topicId != '' && this.topicId) || this.showFullQuestion) {
            this.selectedTopic = !this.showFullQuestion && !this.showAll ? [this.topicListData.find(value => value.question_topic_id == this.topicId)] :
                // !this.showFullQuestion && this.showAll ? this.topicListData : [this.topicListData[0]];
                !this.showFullQuestion && this.showAll ? this.topicListData : this.topicListData;
        }
        if (this.subTopicId != '' && this.subTopicId) {
            this.selectedSubTopic = !this.showFullQuestion && !this.showAll ? [this.subTopicListData.find(value => value.question_sub_topic_id == this.subTopicId)] :
                // !this.showFullQuestion && this.showAll ? this.subTopicListData : [this.subTopicListData[0]];
                !this.showFullQuestion && this.showAll ? this.subTopicListData : this.subTopicListData;
        }
        console.log(this.selectedTopic, 'selectedTopic');
        console.log(this.selectedSubTopic, 'selectedSubTopic');
        this.selectAllStudentDetails = (this.showFullQuestion || !this.showFullQuestion) && this.showAll ;
        if (this.selectedType == 'subTopic') {
            this.updateStudentAnswer(this.selectedSubTopic, this.showAll ? 'all' : 'single',
                'subTopic', 'question_sub_topic_id', 'onInit');
        } else {
            this.updateStudentAnswer(this.selectedTopic, this.showAll ? 'all' : 'single',
                'topic', 'question_topic_id', 'onInit');
        }
        if (this.studentAnswer.some(code => code.question_type_id == '55')) {
            this.getFeedbackCount(this.studentAnswer[0]);
        }
    }

    updateStudentAnswer(value, type, calledFrom, keyName, onInit = '') {
        const studentAnswer = this.questionArray?.answers ? this.questionArray?.answers : [];
        type == 'all' ? calledFrom == 'topic' ? this.selectedTopic = value : this.selectedSubTopic = value : '';
        if (onInit == '') {
            this.selectedQuestion = 1;
        }
        const selectedArrayValue = calledFrom == 'topic' ? this.selectedTopic : this.selectedSubTopic;
        const updatedAnswer = [];
        studentAnswer.forEach((items) => {
            const objectValue = items.question_type_id == '24' ? items.subQuestions[0] : items;
            selectedArrayValue.forEach((data) => {
                if (data[keyName] == objectValue[keyName]) {
                    updatedAnswer.push(items);
                }
            });
        });
        this.studentAnswer = updatedAnswer;
        console.log(this.studentAnswer, 'studentAnswer');
        this.questionNumberList = [];
        this.studentAnswer.forEach((items, index) => this.questionNumberList.push({question_no: items.question_no, question_no_name: index + 1}));
        this.questionNumberList.sort((a, b) => a.question_no - b.question_no);
        if (!this.showFullQuestion && this.showAll) {
            const quesId = 'ques_no_cfs_' + this.selectedQuestion;
            setTimeout(() => {
                if (document.getElementById(quesId)) {
                    document.getElementById(quesId).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'start'
                    });
                }
            }, 0);
        }
    }

    selectQuestionStatus(event) {
        this.selectAllStudentDetails = event;
        this.selectedQuestion = 1;
    }

    getQuestionData(event) {
        if (event) {
            this.selectAllStudentDetails = false;
            this.cdr.checkNoChanges();
        } else {
            this.selectAllStudentDetails = true;
        }
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

    splitMultiChoose(val, index) {
        const value = val.split(',');
        for (let i = 0; i < value.length; i++) {
            if (parseInt(value[i]) === parseInt(index)) {
                return true;
            }
        }
    }

    patchCorrectMultiChoiceAnswer(data, index, secondIndex) {
        let patchValue = false;
        data.forEach((items) => {
            if (items.correctActive == secondIndex) {
                if (items.correctAnswer == index) {
                    patchValue = true;
                }
            }
        });
        return patchValue;
    }

    getFeedbackCount(data) {
        console.log(data, 'data');
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            question_id: data.question_id,
            student_content_id: this.student_content_id,
        };
        this.student.getOpenAiFeedbackCount(payload).subscribe((successData) => {
            this.getFeedbackCountSuccess(successData);
        }, (error) => console.error(error, 'error_APICount'));
    }

    getFeedbackCountSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((items, index) => items.index = index);
            this.previousFeedBack = successData.ResponseObject;
            if (this.previousFeedBack.length != 0) {
                this.selectedFeedBackIndex = this.previousFeedBack.length - this.previousFeedBack[0]?.index;
                this.selectedPreviousStudentAnswer = this.previousFeedBack[0];
                this.convertedText = this.convertMarkdownToHtml(this.previousFeedBack[0]?.feedback);
            }
        }
    }

    feedbackSelected(value) {
        console.log(value, 'value')
        if (value != '' && value != 'current') {
            console.log(value, 'seelee')
            this.selectedFeedBackIndex = this.previousFeedBack.length - value.index;
            this.selectedPreviousStudentAnswer = value;
            this.convertedText = this.convertMarkdownToHtml(value.feedback);
        } else if (value == 'current') {
            this.selectedFeedBackIndex = '';
            this.convertedText = '';
        }
    }

    getFeedbackLabel(feedback: any): { label: string } {
        const percentage = (feedback.student_score / feedback.total_score) * 100;
        if (percentage >= 60) {
            return {label: 'Exceptional'};
        } else if (percentage > 40 && percentage < 60) {
            return {label: 'Good'};
        } else {
            return {label: 'Improve'};
        }
    }

    parseVal(val) {
        if (val != '' && val != null) {
            return parse(val);
        } else {
            return false;
        }
    }
}
