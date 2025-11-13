import {AfterContentInit, ChangeDetectorRef, Component, inject, OnDestroy, OnInit, TemplateRef, ViewChild, ElementRef
} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {ClassService} from '../../../shared/service/class.service';
import {ContentService} from '../../../shared/service/content.service';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreatorService} from '../../../shared/service/creator.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {ValidationService} from '../../../shared/service/validation.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {parse, stringify} from 'flatted';
import {GraphComponentComponent} from '../../auth/graph-component/graph-component.component';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ContentdetailService} from '../../../shared/service/contentdetail.service';
import {BookService} from '../../../shared/service/book.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
    selector: 'app-question-page',
    templateUrl: './question-page.component.html',
    styleUrls: ['./question-page.component.scss'],
})

export class QuestionPageComponent implements OnInit , OnDestroy , AfterContentInit {
    public multipleChoice: FormGroup;
    public matchTable: FormGroup;
    public fillDropDown: FormGroup;
    public passage: FormGroup;
    public matchSort: FormGroup;
    public richText: FormGroup;
    public plainText: FormGroup;
    public shortText: FormGroup;
    public highlight: FormGroup;
    public textEntry: FormGroup;
    public graphForm: FormGroup;
    public addMultipleChoice: FormArray;
    public addMultipleChoose: FormArray;
    public addMultipleSource: FormArray;
    public addMultipleTarget: FormArray;
    public matchSortSource: FormArray;
    public matchSortTarget: FormArray;
    public addHints: FormArray;
    public addQuestionType: FormArray;
    public addMatchTableChoose: FormArray;
    public type: any;
    public contentQuestionList: any;
    public questionId: any;
    public options: any;
    public editData: any;
    public addNewChoiceValue: any = [];
    public addHintsValue: any = [];
    public correctChoiceValue: any = [];
    public correctChoiceMatchValue: any = [];
    public correctChoiceMatchValueSingle: any = [];
    public textType: any;
    public graphEditorAnswerVal: any = '';
    public questionData: any;
    public questionAnswer: any = [];
    public subQuestionAnswer: any = [];
    public chooseType: any;
    public optionArray: any = [];
    public chooseArray: any = [];
    public questionArray: any = [];
    public inputEditorArray: any = [];
    public chooseEditorArray: any = [];
    public passageMultiEditor: any = [];
    public subPassageMulti: any = [];
    public subPassageRow: any = [];
    public subPassageColumn: any = [];
    public passageQuestionEditor: any = [];
    public rowArray: any = [];
    strings: string[] = [];
    public match: any = [];
    public selectOptionHeader: any;
    public textbutton: boolean;
    public editorType: boolean;
    public noPush: boolean;
    public setAns: any;
    public multiSelect: any;
    public matchType: any;
    public questionValue: any;
    public questionArray1: any;
    public contextValue: any;
    public answerValue: any;
    public richPreviewValue: any;
    public plainPreviewValue: any;
    public shortPreviewValue: any;
    public answerRichValue: any;
    public answerHighlightValue: any;
    public answerHighlightValue1: any;
    public passageAnswer: any = [];
    public inputType: any = 'text';
    public fillValue: any;
    public valid: any;
    public graphPoints: number = 1;
    public multihight: boolean;
    public passageDeleteid: any;
    public passageDeleteData: any;
    private modalRef: NgbModalRef;
    public dropDownCount: number = 0;
    public inputCount: number = 0;
    public inputCountPassage: number = 0;
    public inputArray: any = [];
    public dropDownArray: any;
    public showTextEditor: any;
    public addDropDownArr: FormArray;
    public showForm = false;
    public mathDelayer = false;
    public textValue: any;
    public dropValue: any;
    public passageContent: any = '';
    public addPassageContent: any = '';
    public saveAndDuplicate = '';

    // /editor variables started
    public editorEvent: any = 'patchvalue';

    public markType = '';
    public highlightEditor1: any;
    public questIdNo: any;
    public quesNo: any;


    public sourceArr: any;
    public targetArr: any;
    public targetArr1: any;
    public showAnswer: boolean = false;
    public editPassageContent = false;

    public writingQuestionEditor: any = '';
    public writingAnswerEditor: any = '';
    public multiQuestionEditor: any = '';
    public multiFreeAnswerEditor: any = [];
    public textEntryPreview: any;
    public matchSortEditor: any = '';
    public answertValue: any;
    public answerKeyValue: any;
    public random: any;

    public graphQuestionEditor: any = '';
    public graphBoardValue: any;
    public graphBoardPreviewValue: any;
    public showPreview = true;


    public multioption: boolean;
    public multiselect: boolean;
    public explanationEditorValue: any = '';
    public explanationEditorContentValue: any = '';
    public resourceEditorValue: any = '';
    public resourceEditorContentValue: any = '';
    @ViewChild(GraphComponentComponent) childGraph: GraphComponentComponent;
    @ViewChild('deletePassageQuestion') deletePassageQuestion: TemplateRef<any>;
    @ViewChild('passageAdd') passageAdd: TemplateRef<any>;
    @ViewChild('skillInput') skillInput: ElementRef;

    public questionEditData: any;
    public hintArray: any = [];
    public hintArrayEditor: any = [];

    public commonNameForQuestionId: any;
    public commonPreview: any;
    public hintArray1: any;
    public listPassageDetails = [];
    public subjectData = [];
    public passageForm: FormGroup;
    public sideNavStatus: boolean;
    public maximumAllowedCount = 10;
    public repeatAnswerFreeText: FormArray;
    public book = inject(BookService);
    public standardListData = [];
    public questionTopicListData = [];
    public separatorKeysCodes = [ENTER, COMMA];
    public enteredSkillList = [];
    public subTopicListData = [];
    public totalSkillList = [];
    public passageType = '';
    public qnsNo = '1';

    constructor(public auth: AuthService, public cd: ChangeDetectorRef, public classService: ClassService, public contentService: ContentService,
                public config: ConfigurationService, public sanitizer: DomSanitizer, private formBuilder: FormBuilder, public creator: CreatorService,
                private toastr: ToastrService, public router: Router, public validationService: ValidationService, public route: ActivatedRoute,
                private modalService: NgbModal, public contentDetail: ContentdetailService) {
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.subjectList();
        this.commonService('questionStandard');
        this.hintArray.push({hint: ''});
        this.hintArrayEditor.push('');
        this.multihight = false;
        this.showTextEditor = 'text';
        this.editorType = true;
        // Try to get editData from multiple possible session keys
        let textAssignValueStr = this.auth.getSessionData('textAssignValue');
        let editResourcesStr = this.auth.getSessionData('editresources');
        
        if (textAssignValueStr) {
            try {
                this.editData = JSON.parse(textAssignValueStr);
            } catch (e) {
                console.error('Error parsing textAssignValue:', e);
                this.editData = {};
            }
        } else if (editResourcesStr) {
            try {
                this.editData = JSON.parse(editResourcesStr);
            } catch (e) {
                console.error('Error parsing editresources:', e);
                this.editData = {};
            }
        } else {
            this.editData = {};
        }
        console.log('editData on init:', this.editData);
        console.log('textAssignValue session:', textAssignValueStr);
        console.log('editresources session:', editResourcesStr);
        
        // If editData is still empty or missing content_id, try to get it from other sources
        if (!this.editData || !this.editData.content_id) {
            // Check if content_id is stored separately
            const contentIdFromSession = this.auth.getSessionData('content_id');
            if (contentIdFromSession) {
                if (!this.editData) {
                    this.editData = {};
                }
                this.editData.content_id = contentIdFromSession;
                console.log('Found content_id in session:', contentIdFromSession);
            }
        }
        
        this.questionId = this.auth.getSessionData('questionID');
        console.log(this.questionId, 'questionID');
        this.matchType = 'single';
        this.textType = this.auth.getSessionData('textType');
        this.textbutton = false;
        this.setQuestionTypeVariable();
        this.formSetValue();
        this.formPassageValue();
        if (this.questionId == '2') {
            this.multipleChoice.controls.multiResponse.patchValue(true);
        } else if (this.questionId == '24') {
            this.passageCREDService('list');
        }
        const qnsNo = this.auth.getSessionData('cfs_question_no') ?? '1';
        this.qnsNo = qnsNo != '' ? qnsNo : '1';
        console.log(this.qnsNo, 'cfs_question_no');
        if (this.type == 'edit') {
            this.questionEditData = JSON.parse(this.auth.getSessionData('questionData'));
            console.log(this.questionEditData, 'this.questionEditData');
            console.log('options:', this.questionEditData.options, 'type:', typeof this.questionEditData.options);
            console.log('answer:', this.questionEditData.answer, 'type:', typeof this.questionEditData.answer);
            console.log('heading_option:', this.questionEditData.heading_option, 'type:', typeof this.questionEditData.heading_option);
            // Ensure options and answer are arrays
            if (this.questionEditData.options && typeof this.questionEditData.options === 'string') {
                try {
                    this.questionEditData.options = JSON.parse(this.questionEditData.options);
                } catch (e) {
                    console.error('Error parsing options:', e);
                    this.questionEditData.options = [];
                }
            }
            if (this.questionEditData.answer && typeof this.questionEditData.answer === 'string') {
                try {
                    this.questionEditData.answer = JSON.parse(this.questionEditData.answer);
                } catch (e) {
                    console.error('Error parsing answer:', e);
                    this.questionEditData.answer = [];
                }
            }
            // Ensure heading_option is an array (for matchTable questions)
            if (this.questionEditData.heading_option && typeof this.questionEditData.heading_option === 'string') {
                try {
                    this.questionEditData.heading_option = JSON.parse(this.questionEditData.heading_option);
                } catch (e) {
                    console.error('Error parsing heading_option:', e);
                    this.questionEditData.heading_option = [];
                }
            }
            // Ensure heading_option is initialized if missing
            if (!this.questionEditData.heading_option) {
                this.questionEditData.heading_option = [];
            }
            this.patchInit();
            this.inputType = this.questionEditData.editor_type == 1 ? 'text' : 'math';
        }
        this.creator.contentView.subscribe((res: any) => {
            if (res == true) {
                this.sideNavStatus = res;
           } else if (res != true || res == '' || res == null) {
                this.sideNavStatus = res;
            }
         });
    }

    ngOnDestroy(): void {
        this.creator.changeViewList(false);
    }

    ngOnInit(): void {
        this.creator.changeViewList(true);
        this.contentQuestion();
        this.selectOptionHeader = 'edit';

        this.showTextEditor = 'eng';
        this.graphPoints = 1;

    }

    ngAfterContentInit(): void {

        let subjectValue: any = null;

        if (this.type == 'edit' && this.questionId != '24' && this.questionEditData.subject_id && this.questionEditData.subject_id != '') {
            subjectValue = this.questionEditData.subject_id;
        } else if (this.type == 'edit' && this.questionId == '24' && this.questionEditData.subQuestions[0]?.subject_id && this.questionEditData.subQuestions[0]?.subject_id != '') {
            subjectValue = this.questionEditData.subQuestions[0]?.subject_id;
        } else {
            const content_subject = this.auth.getSessionData('content_subject');
            console.log(content_subject, 'content_subject');
            let subject = [];
            if (content_subject != '') {
                subject = content_subject.split(',');
            } else {
                subject = [];
            }
            subjectValue = subject.length != 0 ? subject[0] : null;
        }
        let formControl: any;
        if (this.questionId != '24') {
            formControl = ['1', '2'].indexOf(this.questionId) > -1 ? this.multipleChoice : ['3', '5', '7'].indexOf(this.questionId) > -1 ?
                this.matchTable : this.questionId == '9' ? this.fillDropDown : this.questionId == '10' ? this.textEntry :
                    this.questionId == '16' ? this.matchSort : ['20', '55'].indexOf(this.questionId) > - 1  ? this.richText : this.graphForm;
        } else {
            formControl = this.passage['controls'].addQuestionType['controls'][0];
        }
        formControl.controls.subject_id.patchValue(subjectValue);
        this.commonService('questionTopic', formControl);
        if (this.type == 'edit') {
            this.patchForm();
        }

    }

    addOrEditPassage(type) {
        this.passageType = type;
        if (type == 'edit') {
            const findPassage = this.listPassageDetails.find(value => value.passage_id == this.passage.controls.passage_id.value);
            if (findPassage) {
                this.passageForm.controls.title.patchValue(findPassage.title);
                this.passageForm.controls.passageEditor.patchValue(findPassage.passage);
            }
        } else {
            this.formPassageValue();
            this.modalRef = this.modalService.open(this.passageAdd, {size: 'xl', backdrop: 'static'});
        }
    }

    close() {
            this.modalRef.close();
    }

    setQuestionTypeVariable() {
        if (this.questionId == '1' || this.questionId == '2') {
            this.commonNameForQuestionId = 'multipleChoiceQuestions';
            this.commonPreview = 'preview';
        } else if (this.questionId == '3') {
            this.commonNameForQuestionId = 'matchTableQuestionsSingle';
            this.commonPreview = 'preview';
        } else if (this.questionId == '5') {
            this.commonNameForQuestionId = 'matchTableQuestionsSingle';
            this.commonPreview = 'preview';
        } else if (this.questionId == '7') {
            this.commonNameForQuestionId = 'matchTableQuestionsMultiple';
            this.commonPreview = 'preview';
        } else if (this.questionId == '9') {
            this.commonNameForQuestionId = 'textDropDown';
            this.commonPreview = 'dropInputPreview';
        } else if (this.questionId == '10') {
            this.commonNameForQuestionId = 'textEntry';
            this.commonPreview = 'textInputPreview';
        } else if (this.questionId == '16') {
            this.commonNameForQuestionId = 'matchSortList';
            this.commonPreview = 'sortpreview';
        } else if (['20', '55'].indexOf(this.questionId) > -1) {
            this.commonNameForQuestionId = 'richText';
            this.commonPreview = 'richpreview';
        } else if (this.questionId == '21') {
            this.commonNameForQuestionId = 'plainText';
            this.commonPreview = 'plainpreview';
        } else if (this.questionId == '22') {
            this.commonNameForQuestionId = 'shortText';
            this.commonPreview = 'shortpreview';
        } else if (this.questionId == '24') {
            this.commonNameForQuestionId = 'passage';
            this.commonPreview = 'preview';
        } else if (this.questionId == '28') {
            this.commonNameForQuestionId = 'highlightSentence';
            this.commonPreview = 'highlightPreview';
        } else if (['40', '41'].indexOf(this.questionId) > -1) {
            this.commonNameForQuestionId = 'graphing';
            this.commonPreview = 'highlightPreview';
        }
    }

    patchForm() {
        if (this.questionId == '1' || this.questionId == '2') {

            this.addMultipleChoice = this.multipleChoice.get('addMultipleChoice') as FormArray;
            for (let i = this.addMultipleChoice.length; this.addMultipleChoice.length > 0; i--) {
                this.addMultipleChoice.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.options.length; i++) {
                this.addMultipleChoice.push(this.createMultiple());
            }
            this.explanationEditorValue = this.questionEditData.explanation;
            this.resourceEditorValue = this.questionEditData?.resource;
            this.multipleChoice.controls.level.patchValue(this.questionEditData?.level);
            this.multipleChoice.controls.question_topic_id.patchValue(this.questionEditData?.question_topic_id);
            this.enteredSkillList = this.questionEditData.skill ?? [];
            this.commonService('questionSubTopic', this.multipleChoice, this.questionEditData.question_sub_topic_id ?
                this.questionEditData.question_sub_topic_id : '');
            this.multipleChoice.controls.question_standard.patchValue(this.questionEditData?.question_standard);
            const predicted_solving_time = this.questionEditData?.predicted_solving_time ? this.questionEditData?.predicted_solving_time.split(':') : [];
            this.multipleChoice.controls.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
            this.multipleChoice.controls.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            this.multipleChoice.controls.points.patchValue(this.questionEditData.points);
            const res = this.questionEditData.multiple_response;
            this.multipleChoice.controls.multiResponse.patchValue(res != 0);
            this.multipleChoice.controls.autograde.patchValue(this.questionEditData.audo_grade != 0);
            for (let i = 0; i < this.questionEditData.options.length; i++) {
                // if (document.getElementById('myId' + i)){
                //     console.log(document.getElementById('myId' + i) , 'document');
                //     document.getElementById('myId' + i).innerHTML = this.questionEditData.options[i].options;
                // }
                this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['option'].patchValue(this.questionEditData.options[i].options);
                this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].patchValue(this.questionEditData.answer[i].correctActive);
                this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['selectOption'].patchValue(this.questionEditData.answer[i].correctAnswer);
            }
        } else if (this.questionId == '3' || this.questionId == '5' || this.questionId == '7') {
            this.addMultipleChoice = this.matchTable.get('addMultipleChoice') as FormArray;
            this.addMatchTableChoose = this.matchTable.get('addMatchTableChoose') as FormArray;
            for (let i = this.addMultipleChoice.length; this.addMultipleChoice.length > 0; i--) {
                this.addMultipleChoice.removeAt(i);
            }
            this.explanationEditorValue = this.questionEditData.explanation;
            this.resourceEditorValue = this.questionEditData?.resource;
            this.matchTable.controls.level.patchValue(this.questionEditData?.level);
            for (let i = 0; i < this.questionEditData.options.length; i++) {
                this.addMultipleChoice.push(this.createMatch());
            }
            for (let i = this.addMatchTableChoose.length; this.addMatchTableChoose.length > 0; i--) {
                this.addMatchTableChoose.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.answer.length; i++) {
                this.addMatchTableChoose.push(this.createMatchChoose());
            }
            for (let i = 0; i < this.questionEditData.options.length; i++) {
                if (document.getElementById('myId' + i)){
                    console.log(document.getElementById('myId' + i) , 'document');
                    document.getElementById('myId' + i).innerHTML = this.questionEditData.options[i].options;
                }
                this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['option'].patchValue(this.questionEditData.options[i].options);
            }
            for (let i = 0; i < this.questionEditData.answer.length; i++) {
                if (document.getElementById('columnId' + i)) {
                    document.getElementById('columnId' + i).innerHTML = this.questionEditData.answer[i];
                }
                this.matchTable['controls'].addMatchTableChoose['controls'][i]['controls']['option'].patchValue(this.questionEditData.answer[i]);
            }
            setTimeout(()=> {
                if (this.questionId == '3' || this.questionId == '5') {
                    for (let i = 0; i < this.questionEditData.heading_option.length; i++) {
                        this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['selectOption'].patchValue(this.questionEditData.heading_option[i].correctOption);
                        this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['active'].patchValue(this.questionEditData.heading_option[i].correctActive);
                        for (let j = 0 ; j < this.questionEditData.answer.length; j++) {
                            if (j == this.questionEditData.heading_option[i].correctActive) {
                                if (document.getElementById(i + 'chooseSingle' + j)) {
                                    document.getElementById(i + 'chooseSingle' + j).setAttribute('checked' , 'true');
                                }
                            }
                        }
                    }
                } else {
                    for (let i = 0; i < this.questionEditData.heading_option.length; i++) {
                        for (let j = 0; j < this.questionEditData.options.length; j++) {
                            if (this.questionEditData.heading_option[i].correctActive == j) {
                                for (let k = 0; k < this.questionEditData.answer.length; k++) {
                                    if (this.questionEditData.heading_option[i].correctAnswer == k) {
                                        document.getElementById(j + 'chooseMulti' + k).setAttribute('checked' , 'true');
                                        this.matchTable['controls'].addMultipleChoice['controls'][j]['controls']['selectOption'].patchValue(k);
                                        this.matchTable['controls'].addMultipleChoice['controls'][j]['controls']['active'].patchValue(j);
                                        this.correctChoiceMatchValue.push({
                                            correctOption: this.matchTable['controls'].addMultipleChoice['controls'][j]['controls']['option'].value,
                                            correctAnswer: this.matchTable['controls'].addMultipleChoice['controls'][j]['controls']['selectOption'].value,
                                            correctActive: this.matchTable['controls'].addMultipleChoice['controls'][j]['controls']['active'].value,
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }, 2000);
            this.matchTable.controls.question_topic_id.patchValue(this.questionEditData?.question_topic_id);
            this.enteredSkillList = this.questionEditData.skill ?? [];
            this.commonService('questionSubTopic', this.matchTable, this.questionEditData.question_sub_topic_id ?
                this.questionEditData.question_sub_topic_id : '');
            this.matchTable.controls.question_standard.patchValue(this.questionEditData?.question_standard);
            const predicted_solving_time = this.questionEditData?.predicted_solving_time ? this.questionEditData?.predicted_solving_time.split(':') : [];
            this.matchTable.controls.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
            this.matchTable.controls.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            this.matchTable.controls.explanation.patchValue(this.questionEditData.explanation);
            this.matchTable.controls.points.patchValue(this.questionEditData.points);
            const res = this.questionEditData.multiple_response;
            this.matchTable.controls.multiResponse.patchValue(res != 0);
            this.matchTable.controls.autograde.patchValue(this.questionEditData.audo_grade != 0);
        }
        else if (this.questionId == '9') {
            this.fillDropDown.controls.points.patchValue(this.questionEditData.points);
            this.fillDropDown.controls.explanation.patchValue(this.questionEditData.explanation);
            this.fillDropDown.controls.level.patchValue(this.questionEditData?.level);
            const hints = this.fillDropDown.get('addHints') as FormArray;
            for (let i = hints.length; hints.length > 0; i--) {
                hints.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.hint.length; i++) {
                hints.push(this.createHint());
            }
            for (let i = 0; i < this.fillDropDown['controls'].addHints['controls'].length; i++) {
                this.fillDropDown['controls'].addHints['controls'][i]['controls']['hint'].patchValue(this.questionEditData.hint[i].hint);
            }
            const dropOption = this.fillDropDown.controls.addDropDownOption as FormArray;
            for (let i = dropOption.length; dropOption.length > 0; i--){
                dropOption.removeAt(i);
            }
            if (this.questionEditData.answer.length != 0){
                this.dropDownCount = this.questionEditData.answer.length;
            }else {
                this.dropDownCount = 0;
            }
            if (this.questionEditData.editor_type == 1){
                this.showTextEditor = 'eng';
            }else {
                this.showTextEditor = 'math';
            }
            for (let i = 0; i < this.questionEditData.answer.length; i++){
                dropOption.push(this.createAddDropDownOption());
                for (let j = 0; j < this.questionEditData.answer[i].options.length; j++){
                    if (j !== 0){
                        this.fillDropDown['controls'].addDropDownOption['controls'][i]['controls']['options'].push(this.createAddDropDownOptionList());
                    }
                }
            }
            for (let i = 0; i < this.fillDropDown['controls'].addDropDownOption['controls'].length; i++){
                this.fillDropDown['controls'].addDropDownOption['controls'][i]['controls']['options'].patchValue(this.questionEditData.answer[i].options);
                for (let j = 0; j < this.fillDropDown['controls'].addDropDownOption['controls'][i]['controls'].options['controls'].length; j++){
                    this.fillDropDown['controls'].addDropDownOption['controls'][i]['controls'].options['controls'][j]['controls'].listOption.patchValue(this.questionEditData.answer[i].options[j].listOption);
                    this.fillDropDown['controls'].addDropDownOption['controls'][i]['controls'].options['controls'][j]['controls'].selected.patchValue(this.questionEditData.answer[i].options[j].selected);
                }
            }
            this.fillDropDown.controls.question_topic_id.patchValue(this.questionEditData?.question_topic_id);
            this.enteredSkillList = this.questionEditData.skill ?? [];
            this.commonService('questionSubTopic', this.fillDropDown, this.questionEditData.question_sub_topic_id ?
                this.questionEditData.question_sub_topic_id : '');
            this.fillDropDown.controls.question_standard.patchValue(this.questionEditData?.question_standard);
            const predicted_solving_time = this.questionEditData?.predicted_solving_time ? this.questionEditData?.predicted_solving_time.split(':') : [];
            this.fillDropDown.controls.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
            this.fillDropDown.controls.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            this.fillDropDown.controls.autograde.patchValue(this.questionEditData.audo_grade != 0);
        }
        else if (this.questionId == '10') {
            this.textEntry.controls.question_topic_id.patchValue(this.questionEditData?.question_topic_id);
            this.enteredSkillList = this.questionEditData.skill ?? [];
            this.commonService('questionSubTopic', this.textEntry, this.questionEditData.question_sub_topic_id ?
                this.questionEditData.question_sub_topic_id : '');
            this.textEntry.controls.question_standard.patchValue(this.questionEditData?.question_standard);
            const predicted_solving_time = this.questionEditData?.predicted_solving_time ? this.questionEditData?.predicted_solving_time.split(':') : [];
            this.textEntry.controls.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
            this.textEntry.controls.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            this.textEntry.controls.points.patchValue(this.questionEditData.points);
            this.textEntry.controls.level.patchValue(this.questionEditData?.level);
            this.textEntry.controls.explanation.patchValue(this.questionEditData.explanation);
            if (this.questionEditData.answer.length != 0){
                this.inputCount = this.questionEditData.answer.length;
            }else {
                this.inputCount = 0;
            }
            if (this.questionEditData.editor_type == 1){
                this.showTextEditor = 'eng';
            }else {
                this.showTextEditor = 'math';
            }
            const hints = this.textEntry.get('addHints') as FormArray;
            for (let i = hints.length; hints.length > 0; i--) {
                hints.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.hint.length; i++) {
                hints.push(this.createHint());
            }
            for (let i = 0; i < this.textEntry['controls'].addHints['controls'].length; i++) {
                this.textEntry['controls'].addHints['controls'][i]['controls']['hint'].patchValue(this.questionEditData.hint[i].hint);
            }
            this.textEntry.controls.autograde.patchValue(this.questionEditData.audo_grade != 0);
        }
        else if (this.questionId == '16') {
            this.matchSort.controls.question_topic_id.patchValue(this.questionEditData?.question_topic_id);
            this.enteredSkillList = this.questionEditData.skill ?? [];
            this.commonService('questionSubTopic', this.matchSort, this.questionEditData.question_sub_topic_id ?
                this.questionEditData.question_sub_topic_id : '');
            this.matchSort.controls.question_standard.patchValue(this.questionEditData?.question_standard);
            const predicted_solving_time = this.questionEditData?.predicted_solving_time ? this.questionEditData?.predicted_solving_time.split(':') : [];
            this.matchSort.controls.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
            this.matchSort.controls.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            this.matchSort.controls.question.patchValue(this.questionEditData.question);
            this.matchSort.controls.source.patchValue(this.questionEditData.source);
            this.matchSort.controls.level.patchValue(this.questionEditData?.level);
            this.matchSort.controls.target.patchValue(this.questionEditData.target);
            this.matchSort.controls.explanation.patchValue(this.questionEditData.explanation);
            this.matchSort.controls.points.patchValue(this.questionEditData.points);
            this.matchSort.controls.autograde.patchValue(this.questionEditData.audo_grade != 0);
            // this.inputType = this.questionEditData.editor_type == 1 ? 'text' : 'math';
            this.addMultipleChoice = this.matchSort.get('addMultipleChoice') as FormArray;
            this.addMultipleChoose = this.matchSort.get('addMultipleChoose') as FormArray;
            this.matchSortSource = this.matchSort.get('matchSortSource') as FormArray;
            this.matchSortTarget = this.matchSort.get('matchSortTarget') as FormArray;
            const hints = this.matchSort.get('addHints') as FormArray;
            for (let i = hints.length; hints.length > 0; i--) {
                hints.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.hint.length; i++) {
                hints.push(this.createHint());
            }
            for (let i = this.addMultipleChoice.length; this.addMultipleChoice.length > 0; i--) {
                this.addMultipleChoice.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.options.length; i++) {
                this.addMultipleChoice.push(this.createSort());
            }
            for (let i = this.addMultipleChoose.length; this.addMultipleChoose.length > 0; i--) {
                this.addMultipleChoose.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.answer.length; i++) {
                this.addMultipleChoose.push(this.createSortChoose());
            }
            for (let i = this.matchSortSource.length; this.matchSortSource.length > 0; i--) {
                this.matchSortSource.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.answer.length; i++) {
                this.matchSortSource.push(this.createSortSource());
            }
            for (let i = this.matchSortTarget.length; this.matchSortTarget.length > 0; i--) {
                this.matchSortTarget.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.answer.length; i++) {
                this.matchSortTarget.push(this.createSortTarget());
            }
            setTimeout (() => {
                for (let i = 0; i < this.questionEditData.options.length; i++) {
                    this.matchSort['controls'].addMultipleChoice['controls'][i]['controls']['option'].patchValue(this.questionEditData.options[i].options);
                    this.matchSort['controls'].matchSortSource['controls'][i]['controls']['option'].patchValue(this.questionEditData.options[i].options);
                }
                for (let i = 0; i < this.questionEditData.answer.length; i++) {
                    this.matchSort['controls'].addMultipleChoose['controls'][i]['controls']['selectOption'].patchValue(this.questionEditData.answer[i].correctAnswer);
                    this.matchSort['controls'].matchSortTarget['controls'][i]['controls']['selectOption'].patchValue(this.questionEditData.answer[i].correctAnswer);
                }
                for (let i = 0; i < this.questionEditData.hint.length; i++) {
                    this.matchSort['controls'].addHints['controls'][i]['controls']['hint'].patchValue(this.questionEditData.hint[i].hint);
                }
            },  1000);
        }
        else if (['20', '55'].indexOf(this.questionId) > -1) {
            this.richText.controls.question_topic_id.patchValue(this.questionEditData?.question_topic_id);
            this.enteredSkillList = this.questionEditData.skill ?? [];
            this.commonService('questionSubTopic', this.richText, this.questionEditData.question_sub_topic_id ?
                this.questionEditData.question_sub_topic_id : '');
            this.richText.controls.question_standard.patchValue(this.questionEditData?.question_standard);
            const predicted_solving_time = this.questionEditData?.predicted_solving_time ? this.questionEditData?.predicted_solving_time.split(':') : [];
            this.richText.controls.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
            this.richText.controls.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            this.richText.controls.points.patchValue(this.questionEditData.points);
            this.richText.controls.explanation.patchValue(this.questionEditData.explanation);
            this.richText.controls.level.patchValue(this.questionEditData?.level);
            this.richText.controls.autograde.patchValue(this.questionEditData.audo_grade != 0);
            if (this.questionId == '55') {
                this.richText.controls.scoring_instruction.patchValue(this.questionEditData?.scoring_instruction ?? '');
            }
            const hints = this.richText.get('addHints') as FormArray;
            for (let i = hints.length; hints.length > 0; i--) {
                hints.removeAt(i);
            }
            for (let i = 0; i < this.questionEditData.hint.length; i++) {
                hints.push(this.createHint());
            }
            for (let i = 0; i < this.richText['controls'].addHints['controls'].length; i++) {
                this.richText['controls'].addHints['controls'][i]['controls']['hint'].patchValue(this.questionEditData.hint[i].hint);
            }}
        else if (this.questionId == '24') {
            this.passage.controls.passage_id.patchValue(this.questionEditData.subQuestions[0].passage_id);
            this.listPassageDetails.forEach((items) => {
                if (items.passage_id ==  this.questionEditData.subQuestions[0]?.passage_id) {
                    this.passage.controls.editorContext.patchValue(items.passage);
                }
            });

            this.addQuestionType = this.passage.get('addQuestionType') as FormArray;
            for (let i = 0; i < this.questionEditData.subQuestions.length - 1; i++) {
                this.addQuestionType.push(this.createQuestionType());
            }
            for (let i = 0; i < this.questionEditData.subQuestions.length; i++) {
                this.multiSelect = this.passage['controls'].addQuestionType['controls'][i]['controls'];
                if (this.questionEditData.subQuestions[i].question_type_id == 1 || this.questionEditData.subQuestions[i].question_type_id == 2) {
                    for (let j = this.multiSelect.addMultipleChoice.length; this.multiSelect.addMultipleChoice.length > 0; j--) {
                        this.multiSelect.addMultipleChoice.removeAt(j);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].options.length; j++) {
                        this.multiSelect.addMultipleChoice.push(this.createMultiple());
                    }
                    this.multiSelect.selectType.patchValue('MultiChoice');
                    this.multiSelect.points.patchValue(this.questionEditData.subQuestions[i].points);
                    this.multiSelect.explanation.patchValue(this.questionEditData.subQuestions[i].explanation);
                    this.multiSelect.multiResponse.patchValue(this.questionEditData.subQuestions[i].multiple_response != 0);
                    this.multiSelect.level.patchValue(this.questionEditData.subQuestions[i].level);
                    this.multiSelect.autograde.patchValue(this.questionEditData.subQuestions[i].audo_grade != '0');
                    const hint = this.passage['controls'].addQuestionType['controls'][i]['controls'].addHints as FormArray;
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length - 1; j++) {
                        hint.push(this.createHint());
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length; j++) {
                        this.multiSelect.addHints['controls'][j]['controls']['hint'].patchValue(this.questionEditData.subQuestions[i].hint[j].hint);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].options.length; j++) {
                        this.multiSelect.addMultipleChoice['controls'][j]['controls']['option'].patchValue(this.questionEditData.subQuestions[i].options[j].options);
                        this.multiSelect.addMultipleChoice['controls'][j]['controls']['active'].patchValue(this.questionEditData.subQuestions[i].answer[j].correctActive);
                        this.multiSelect.addMultipleChoice['controls'][j]['controls']['selectOption'].patchValue(this.questionEditData.subQuestions[i].answer[j].correctAnswer);
                    }
                }
                else if (this.questionEditData.subQuestions[i].question_type_id == 5 || this.questionEditData.subQuestions[i].question_type_id == 7) {
                    for (let j = this.multiSelect.addMultipleChoice.length; this.multiSelect.addMultipleChoice.length > 0; j--) {
                        this.multiSelect.addMultipleChoice.removeAt(j);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].options.length; j++) {
                        this.multiSelect.addMultipleChoice.push(this.createMultiple());
                    }
                    for (let j = this.multiSelect.addMatchTableChoose.length; this.multiSelect.addMatchTableChoose.length > 0; j--) {
                        this.multiSelect.addMatchTableChoose.removeAt(j);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].answer.length; j++) {
                        this.multiSelect.addMatchTableChoose.push(this.createMatchChoose());
                    }
                    this.multiSelect.selectType.patchValue('TrueOrFalse');
                    if (this.questionEditData.subQuestions[i].editor_type == 1) {
                        this.multiSelect.chooseType.patchValue('text');
                    } else {
                        this.multiSelect.chooseType.patchValue('math');
                    }
                    this.multiSelect.points.patchValue(this.questionEditData.subQuestions[i].points);
                    this.multiSelect.explanation.patchValue(this.questionEditData.subQuestions[i].explanation);
                    this.multiSelect.multiResponse.patchValue(this.questionEditData.subQuestions[i].multiple_response != 0);
                    this.multiSelect.autograde.patchValue(this.questionEditData.subQuestions[i].audo_grade != 0);
                    this.multiSelect.level.patchValue(this.questionEditData.subQuestions[i].level);
                    const hint = this.passage['controls'].addQuestionType['controls'][i]['controls'].addHints as FormArray;
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length - 1; j++) {
                        hint.push(this.createHint());
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length; j++) {
                        this.multiSelect.addHints['controls'][j]['controls']['hint'].patchValue(this.questionEditData.subQuestions[i].hint[j].hint);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].options.length; j++) {
                        this.multiSelect.addMultipleChoice['controls'][j]['controls']['option'].patchValue(this.questionEditData.subQuestions[i].options[j].options);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].answer.length; j++) {
                        this.multiSelect.addMatchTableChoose['controls'][j]['controls']['option'].patchValue(this.questionEditData.subQuestions[i].answer[j]);
                    }
                    if (this.questionEditData.subQuestions[i].question_type_id == 5) {
                        for (let j = 0; j < this.questionEditData.subQuestions[i].heading_option.length; j++) {
                            for (let k = 0; k < this.questionEditData.subQuestions[i].options.length; k++) {
                                if (this.questionEditData.subQuestions[i].heading_option[j].correctActive == k) {
                                    this.multiSelect.addMultipleChoice['controls'][j]['controls']['active'].patchValue(k);
                                }
                            }
                            console.log(this.multiSelect.addMultipleChoice.value, 'dhshdhs');
                        }
                    }
                    else if (this.questionEditData?.subQuestions[i].question_type_id == 7) {
                        for (let j = 0; j < this.questionEditData?.subQuestions[i].heading_option.length; j++) {
                            for (let k = 0; k < this.questionEditData.subQuestions[i].options.length; k++) {
                                if (this.questionEditData.subQuestions[i].heading_option[j].correctActive == k) {
                                    for (let l = 0; l < this.questionEditData.subQuestions[i].answer.length; l++) {
                                        if (this.questionEditData.subQuestions[i].heading_option[j].correctAnswer == l) {
                                            this.multiSelect.addMultipleChoice['controls'][k]['controls']['selectOption'].patchValue(l);
                                            this.multiSelect.addMultipleChoice['controls'][k]['controls']['active'].patchValue(k);
                                            if (this.correctChoiceMatchValue[i] == null) {
                                                this.correctChoiceMatchValue[i] = {sub: []};
                                            }
                                            this.correctChoiceMatchValue[i].sub.push({
                                                correctOption: this.multiSelect.addMultipleChoice['controls'][k]['controls']['option'].value,
                                                correctAnswer: this.multiSelect.addMultipleChoice['controls'][k]['controls']['selectOption'].value,
                                                correctActive: this.multiSelect.addMultipleChoice['controls'][k]['controls']['active'].value,
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                    setTimeout(() => {
                        if (this.questionEditData.subQuestions[i].question_type_id == 5) {
                            for (let j = 0; j < this.questionEditData.subQuestions[i].heading_option.length; j++) {
                                for (let k = 0; k < this.questionEditData.subQuestions[i].options.length; k++) {
                                    if (this.questionEditData.subQuestions[i].heading_option[j].correctActive == k) {
                                        document.getElementById(i + 'passage' + j + 'chooseSingle' + k).setAttribute('checked' , 'true');
                                    }
                                }
                                console.log(this.multiSelect.addMultipleChoice.value, 'dhshdhs');
                            }
                        }
                        else if (this.questionEditData?.subQuestions[i].question_type_id == 7) {
                            for (let j = 0; j < this.questionEditData?.subQuestions[i].heading_option.length; j++) {
                                for (let k = 0; k < this.questionEditData.subQuestions[i].options.length; k++) {
                                    if (this.questionEditData.subQuestions[i].heading_option[j].correctActive == k) {
                                        for (let l = 0; l < this.questionEditData.subQuestions[i].answer.length; l++) {
                                            if (this.questionEditData.subQuestions[i].heading_option[j].correctAnswer == l) {
                                                document.getElementById(i + 'passage' + k + 'chooseMulti' + l).setAttribute('checked' , 'true');
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }, 2000);

                }
                else if (this.questionEditData.subQuestions[i].question_type_id == 10) {
                    this.multiSelect.selectType.patchValue('textEntry');
                    const hint = this.multiSelect.addHints as FormArray;
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length - 1; j++) {
                        hint.push(this.createHint());
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length; j++) {
                        this.multiSelect.addHints['controls'][j]['controls']['hint'].patchValue(this.questionEditData.subQuestions[i].hint[j].hint);
                    }
                    if (this.questionEditData.subQuestions[i].editor_type == 1) {
                        this.multiSelect.chooseType.patchValue('text');
                    } else {
                        this.multiSelect.chooseType.patchValue('math');
                    }
                    this.multiSelect.level.patchValue(this.questionEditData.subQuestions[i].level);
                    if (this.questionEditData.subQuestions[i].answer.length != 0){
                        this.inputCountPassage = this.questionEditData.subQuestions[i].answer.length;
                        if (this.questionEditData.subQuestions[i].editor_type == 1){
                            this.passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value = 'text';
                        }else {
                            this.passage['controls'].addQuestionType['controls'][i]['controls'].chooseType.value = 'math';
                        }
                    }else {
                        this.inputCountPassage = 0;
                    }
                    // setTimeout(() => {
                    //     this.inputArray = this.questionEditData.subQuestions[i].options;
                    // }, 1000);
                    // console.log(this.inputArray, 'this.inputArray[i].datas');
                    this.multiSelect.explanation.patchValue(this.questionEditData.subQuestions[i].explanation);
                    this.multiSelect.points.patchValue(this.questionEditData.subQuestions[i].points);
                    this.multiSelect.autograde.patchValue(this.questionEditData.subQuestions[i].audo_grade != 0);
                    if (this.selectOptionHeader == 'edit'){

                    }else {
                        this.questionArray[i].content = this.questionEditData.subQuestions[i].question;
                    }
                }
                else if (this.questionEditData.subQuestions[i].question_type_id == 20) {
                    this.multiSelect.selectType.patchValue('essay');
                    const hint = this.multiSelect.addHints as FormArray;
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length - 1; j++) {
                        hint.push(this.createHint());
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length; j++) {
                        this.multiSelect.addHints['controls'][j]['controls']['hint'].patchValue(this.questionEditData.subQuestions[i].hint[j].hint);
                    }
                    this.multiSelect.level.patchValue(this.questionEditData.subQuestions[i].level);
                    this.multiSelect.explanation.patchValue(this.questionEditData.subQuestions[i].explanation);
                    this.multiSelect.points.patchValue(this.questionEditData.subQuestions[i].points);
                    this.multiSelect.autograde.patchValue(this.questionEditData.subQuestions[i].audo_grade != 0);
                }
                else if (this.questionEditData.subQuestions[i].question_type_id == 16){
                    this.multiSelect.selectType.patchValue('sortList');
                    this.multiSelect.level.patchValue(this.questionEditData.subQuestions[i].level);
                    this.multiSelect.source.patchValue(this.questionEditData.subQuestions[i].source);
                    this.multiSelect.target.patchValue(this.questionEditData.subQuestions[i].target);
                    this.multiSelect.explanation.patchValue(this.questionEditData.subQuestions[i].explanation);
                    this.multiSelect.points.patchValue(this.questionEditData.subQuestions[i].points);
                    const hint = this.multiSelect.addHints as FormArray;
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length - 1; j++) {
                        hint.push(this.createHint());
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].hint.length; j++) {
                        this.multiSelect.addHints['controls'][j]['controls']['hint'].patchValue(this.questionEditData.subQuestions[i].hint[j].hint);
                    }
                    for (let j = this.multiSelect.addMultipleChoice.length; this.multiSelect.addMultipleChoice.length > 0; j--) {
                        this.multiSelect.addMultipleChoice.removeAt(j);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].options.length; j++) {
                        this.multiSelect.addMultipleChoice.push(this.createMultiple());
                    }
                    for (let j = this.multiSelect.addMultipleChoose.length; this.multiSelect.addMultipleChoose.length > 0; j--) {
                        this.multiSelect.addMultipleChoose.removeAt(j);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].answer.length; j++) {
                        this.multiSelect.addMultipleChoose.push(this.createSortChoose());
                    }
                    for (let j = this.multiSelect.addMultipleSource.length; this.multiSelect.addMultipleSource.length > 0; j--) {
                        this.multiSelect.addMultipleSource.removeAt(j);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].options.length; j++) {
                        this.multiSelect.addMultipleSource.push(this.createMultipleSource());
                    }
                    for (let j = this.multiSelect.addMultipleTarget.length; this.multiSelect.addMultipleTarget.length > 0; j--) {
                        this.multiSelect.addMultipleTarget.removeAt(j);
                    }
                    for (let j = 0; j < this.questionEditData.subQuestions[i].answer.length; j++) {
                        this.multiSelect.addMultipleTarget.push(this.createMultipleTarget());
                    }
                    // this.passageQuestionEditor[i].editor.setContent(this.questionEditData.subQuestions[i].question);
                    for (let j = 0; j < this.questionEditData.subQuestions[i].options.length; j++) {
                        this.multiSelect.addMultipleChoice['controls'][j]['controls']['option'].patchValue(this.questionEditData.subQuestions[i].options[j].options);
                        this.multiSelect.addMultipleSource['controls'][j]['controls']['option'].patchValue(this.questionEditData.subQuestions[i].options[j].options);
                    }
                    for (let k = 0; k < this.questionEditData.subQuestions[i].answer.length; k++) {
                        this.multiSelect.addMultipleChoose['controls'][k]['controls']['selectOption'].patchValue(this.questionEditData.subQuestions[i].answer[k].correctAnswer);
                        this.multiSelect.addMultipleTarget['controls'][k]['controls']['selectOption'].patchValue(this.questionEditData.subQuestions[i].answer[k].correctAnswer);
                    }
                }

                this.multiSelect.chooseType.patchValue(this.questionEditData.subQuestions[i].editor_type == 1 ? 'text' : 'math');
                this.multiSelect.question_topic_id.patchValue(this.questionEditData.subQuestions[i]?.question_topic_id);
                this.enteredSkillList = this.questionEditData.subQuestions[i].skill ?? [];
                this.commonService('questionSubTopic', this.passage['controls'].addQuestionType['controls'][i], this.questionEditData.subQuestions[i].question_sub_topic_id ?
                    this.questionEditData.subQuestions[i].question_sub_topic_id : '');
                this.multiSelect.question_standard.patchValue(this.questionEditData.subQuestions[i]?.question_standard);
                const predicted_solving_time = this.questionEditData.subQuestions[i]?.predicted_solving_time ? this.questionEditData.subQuestions[i]?.predicted_solving_time.split(':') : [];
                this.multiSelect.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
                this.multiSelect.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            }
        }
        else if (this.questionId == '28') {
            this.highlight.controls.points.patchValue(this.questionEditData.points);
            this.highlight.controls.level.patchValue(this.questionEditData?.level);
            this.highlight.controls.autograde.patchValue(this.questionEditData.audo_grade != 0);
        } else if (['40', '41'].indexOf(this.questionId) > -1) {

            this.graphForm.controls.question_topic_id.patchValue(this.questionEditData?.question_topic_id);
            this.enteredSkillList = this.questionEditData.skill ?? [];
            this.commonService('questionSubTopic', this.graphForm, this.questionEditData.question_sub_topic_id ?
                this.questionEditData.question_sub_topic_id : '');
            this.graphForm.controls.question_standard.patchValue(this.questionEditData?.question_standard);
            const predicted_solving_time = this.questionEditData?.predicted_solving_time ? this.questionEditData?.predicted_solving_time.split(':') : [];
            this.graphForm.controls.minutes.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[0] : '');
            this.graphForm.controls.seconds.patchValue(predicted_solving_time.length != 0 ? predicted_solving_time[1] : '');
            this.graphForm.controls.level.patchValue(this.questionEditData?.level);
            this.graphForm.controls.points.patchValue(this.questionEditData.points);
        }
    }

    passageSelect(event) {
        this.passageContent ? this.passageContent.editor.setContent('') : '';
        this.getPassageValue(event?.target.value);
    }

    getPassageValue(passageid, calledType = '') {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            passage_id: passageid
        };
        this.auth.postService(payload, 'content/listPassage').subscribe((successData: any) => {
            if (successData.IsSuccess) {
                const findPassage = successData.ResponseObject.find(value => value.passage_id == passageid);
                if (findPassage && findPassage != '') {
                    console.log(findPassage.passage, 'findPassage.passage');
                    this.passage.controls.passage_id.patchValue(findPassage.passage_id);
                    this.passage.controls.editorContext.patchValue(findPassage.passage);
                    this.passageContent ? this.passageContent.editor.setContent(findPassage.passage) : '';
                }
                if (calledType != '') {
                    this.listPassageDetails.unshift({
                        passage_id: findPassage.passage_id,
                        title: findPassage.title
                    });
                }
            }
        }, (error) => console.error(error, 'error_passgaeList'));
    }

    getPassageContent(event) {
        this.passageContent = event;
    }

    parseVal(val) {
        if (val != '' && val != null) {
            return parse(val);
        } else {
            return false;
        }
    }

    transform(v:any ): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(v);
    }

    async patchInit(){
        this.hintArray = this.questionEditData.hint ? this.questionEditData.hint : [];
        this.hintArray.push({hint: ''});
        if (this.questionId == '1' || this.questionId == '2') {
            this.questionValue = this.questionEditData.question;
            this.inputType = this.questionEditData.editor_type == 1 ? 'text' : 'math';
        } else if (this.questionId == '5' || this.questionId == '7') {
            this.questionValue = this.questionEditData.question;
            this.inputType = this.questionEditData.editor_type == 1 ? 'text' : 'math';
        } else if (this.questionId == '10'){
            this.inputArray = this.questionEditData.options;
        } else  if (this.questionId == '16'){
            this.questionValue = this.questionEditData.question;
        } else if (this.questionId == '24') {
            this.questionEditData.subQuestions.forEach((items, i) => {
                if (items.question_type_id == 10) {
                    this.inputArray[i] = {datas: items.options};
                    console.log(this.inputArray[i], 'this.inputArray[i]');
                } else if (items.question_type_id == '20') {
                    items.answer.forEach((answerData, index) => {
                        if (index == 0) {
                            this.passage['controls'].addQuestionType['controls'][i]['controls']['repeatAnswerFreeText']['controls'][index]['controls']['correct'].patchValue(answerData.correctAnswer);
                        } else {
                            this.addNewCorrectAnswerForFreeText(this.passage['controls'].addQuestionType['controls'][i]['controls']['repeatAnswerFreeText'], answerData.correctAnswer);
                        }
                    });
                }
            });
        } else if (this.questionId == '40' || this.questionId == '41'){
            this.graphBoardValue = parse(this.questionEditData.answer[0].correctAnswer);
        } else if (this.questionId == '55') {
            this.writingQuestionEditor = this.questionEditData.question;
            this.writingAnswerEditor = this.questionEditData.answer[0].correctAnswer;
        } else if (this.questionId == '20') {
            this.questionEditData.answer.forEach((items, index) => {
                if (index == 0) {
                    this.richText.get('repeatAnswerFreeText')['controls'][index]['controls']['correct'].patchValue(items.correctAnswer);
                } else {
                    this.addNewCorrectAnswerForFreeText(this.richText.get('repeatAnswerFreeText'), items.correctAnswer);
                }
            });
        }
    }


    onEditorReady(event: any): void {
        console.log(Array.from(event.ui.componentFactory.names()));

        const toolbarItems = Array.from(event.ui.componentFactory.names());
        console.log(toolbarItems, 'toolbarss');
        // // this.editorConfig.toolbar.items = [];
        // console.log(this.editorConfig.toolbar.items ,'item')
        // toolbarItems.forEach((item) => {
        //     console.log(item ,'item')
        //     this.editorConfig.toolbar.items.push(item);
        // });
        // console.log(this.editorConfig);
    }

    // Create passage

    shuffle(arra1) {
        var ctr = arra1.length, temp, index;

// While there are elements in the array
        while (ctr > 0) {
// Pick a random index
            index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
            ctr--;
// And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }

    selectHeader(type) {
        console.log(type, 'preview');
        if (type == 'preview') {
            for (let i = 0; i < this.multipleChoice['controls'].addMultipleChoice['controls'].length; i++) {
                this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['previewActive'].patchValue('');
            }

            console.log(this.matchTable.get('addMatchTableChoose')['controls'], 'dasdasd');

            this.optionArray.forEach( (item , index) => {
                if (document.getElementById('myIdd' + index) != null){
                    document.getElementById('myIdd' + index).innerHTML = item.options;
                }
            });
            this.chooseArray.forEach( (item , index) => {
                document.getElementById('columnIdd' + index).innerHTML = item;
            });
            this.hintArray1 = JSON.stringify(this.hintArray);
            if (this.questionId == '24') {
                console.log(this.passage.get('addQuestionType')['controls'], 'sdsadasdsadasdsadsada');
                this.passage.get('addQuestionType')['controls'].forEach((items, index) => {
                    console.log(items, 'items');
                    if (items.controls.selectType.value == 'TrueOrFalse') {
                        console.log('functionCalled');

                        setTimeout(()=> {
                            if (!items.controls.multiResponse.value) {
                                items.get('addMultipleChoice')['controls'].forEach((items1, index1) => {
                                    items.get('addMatchTableChoose')['controls'].forEach((items2, index2) => {
                                            document.getElementById(index + 'passage' + index1 + 'chooseSingle' + index2).setAttribute('checked' , 'true');
                                    });
                                });
                                // for (let j = 0; j < this.questionEditData.subQuestions[i].heading_option.length; j++) {
                                //     for (let k = 0; k < this.questionEditData.subQuestions[i].options.length; k++) {
                                //         if (this.questionEditData.subQuestions[i].heading_option[j].correctActive == k) {
                                //             document.getElementById(i + 'passage' + j + 'chooseSingle' + k).setAttribute('checked' , 'true');
                                //         }
                                //     }
                                //     console.log(this.multiSelect.addMultipleChoice.value, 'dhshdhs');
                                // }
                            }
                            else if (items.controls.multiResponse.value) {
                                items.get('addMultipleChoice')['controls'].forEach((items1, index1) => {
                                    items.get('addMatchTableChoose')['controls'].forEach((items2, index2) => {
                                            document.getElementById(index + 'passage' + index1 + 'chooseMulti' + index2).setAttribute('checked' , 'true');
                                    });
                                });
                                // for (let j = 0; j < this.questionEditData?.subQuestions[i].heading_option.length; j++) {
                                //     for (let k = 0; k < this.questionEditData.subQuestions[i].options.length; k++) {
                                //         if (this.questionEditData.subQuestions[i].heading_option[j].correctActive == k) {
                                //             for (let l = 0; l < this.questionEditData.subQuestions[i].answer.length; l++) {
                                //                 if (this.questionEditData.subQuestions[i].heading_option[j].correctAnswer == l) {
                                //                     document.getElementById(i + 'passage' + k + 'chooseMulti' + l).setAttribute('checked' , 'true');
                                //                 }
                                //             }
                                //         }
                                //     }
                                // }
                            }
                        }, 2000);
                    }
                });
            }
        }
        else if (type == 'sortpreview') {
            for (let i = 0; i < this.matchSort['controls'].addMultipleChoice['controls'].length; i++) {
                for (let j = 0; j < this.matchSort['controls'].addMultipleChoose['controls'].length; j++) {
                    this.matchSort['controls'].matchSortSource['controls'][i]['controls']['option'].patchValue( this.matchSort['controls'].addMultipleChoice['controls'][i]['controls']['option'].value);
                    this.matchSort['controls'].matchSortTarget['controls'][j]['controls']['selectOption'].patchValue( this.matchSort['controls'].addMultipleChoose['controls'][j]['controls']['selectOption'].value);
                }
            }
            this.sourceArr = [];
            this.targetArr = [];
            this.targetArr1 = [];
            for (let i = 0; i < this.matchSort.get('matchSortSource')['controls'].length; i++) {

                this.sourceArr.push(
                    {
                        value : this.matchSort.get('matchSortSource')['controls'][i]['controls'].option.value ,
                        index: i ,
                    });
            }
            for (let i = 0; i < this.matchSort.get('matchSortTarget')['controls'].length; i++) {

                this.targetArr.push(
                    {
                        value : this.matchSort.get('matchSortTarget')['controls'][i]['controls'].selectOption.value ,
                        index: i ,
                        valid: '0'
                    });
                this.targetArr1.push(
                    {
                        value : this.matchSort.get('matchSortTarget')['controls'][i]['controls'].selectOption.value ,
                        index: i ,
                        valid: '0'
                    });
            }

            this.targetArr = this.shuffle(this.targetArr);


        } else if (type == 'textpreview') {
            // this.child.manuallTrigger();
        }
        else if (type == 'edit'){
            console.log(this.fillDropDown.get('addDropDownOption')['controls'], 'dasdasd');
            if (['20', '55'].indexOf(this.questionId) > -1){
                this.richPreviewValue = this.contextValue;
                this.answerRichValue = this.answerValue;
            }else if (this.questionId == '21'){
                this.plainPreviewValue = this.contextValue;
                this.answerRichValue = this.answerValue;
            }else if (this.questionId == '22'){
                this.shortPreviewValue = this.contextValue;
                this.answerRichValue = this.answerValue;
            }else if (this.questionId == '28'){
                this.richPreviewValue = this.contextValue;
            }
        }
        else if (type == 'richpreview') {
            setTimeout(() => {
                if (this.questionId == '20') {
                    if (this.type == 'add'){
                        this.richPreviewValue = this.contextValue;
                        this.answerHighlightValue1.setContent(this.writingAnswerEditor.content);
                    }else if (this.type == 'edit'){
                        if (this.writingQuestionEditor.content == ''){
                            this.richPreviewValue = this.questionEditData.question;
                            this.answerHighlightValue1.setContent(this.questionEditData.answer[0]?.correctAnswer);
                            // this.answerHighlightValue1 = this.questionEditData.answer[0]?.correctAnswer;
                        } else {
                            this.richPreviewValue = this.writingQuestionEditor.content;
                            this.answerHighlightValue1.setContent(this.writingAnswerEditor.content);
                        }
                    }
                    this.selectOptionHeader = 'richpreview';
                    console.log(this.answerHighlightValue1, 'answerhihgr');
                }
            }, 1000);

        }
        else if (type == 'plainpreview') {
            this.selectOptionHeader = 'plainpreview';
            if (this.type == 'add'){
            this.plainPreviewValue = this.contextValue;
            }else if (this.type == 'edit'){
                if (this.writingQuestionEditor.content == ''){
                    this.plainPreviewValue = this.questionEditData.question;
                }else {
                    this.plainPreviewValue = this.writingQuestionEditor.content;
                }
            }
        }
        else if (type == 'shortpreview') {
            this.selectOptionHeader = 'shortpreview';
            if (this.type == 'add'){
                this.shortPreviewValue = this.contextValue;
            }else if (this.type == 'edit'){
                if (this.writingQuestionEditor.content == ''){
                    this.shortPreviewValue = this.questionEditData.question;
                }else {
                    this.shortPreviewValue = this.writingQuestionEditor.content;
                }
            }
        }
        else if (type == 'highligthPreview'){
            this.selectOptionHeader = 'highligthPreview';
            this.answerKeyValue = this.answerHighlightValue;
            if (this.type == 'add'){
                this.answertValue = this.contextValue;
            }else if (this.type == 'edit'){
                if (this.writingQuestionEditor.content == ''){
                    this.answertValue = this.questionEditData.question;
                }else {
                    this.answertValue = this.writingQuestionEditor.content;
                }
            }
        } else if (type == 'textInputPreview') {
            this.selectOptionHeader = 'textInputPreview';
            if (this.type == 'add'){
                this.textValue = this.contextValue;
            }else if (this.type == 'edit'){
                if (this.textEntryPreview.content == ''){
                    this.textValue = this.questionEditData.question;
                }else {
                    this.textValue = this.textEntryPreview.content;
                }
            }
            this.inputArray.forEach((items, index) => {
                document.getElementById('text-input' + index).innerHTML = items.options[0].value;
            });
        } else if (type == 'dropInputPreview') {
            this.selectOptionHeader = 'dropInputPreview';
            if (this.type == 'add'){
                this.dropValue = this.contextValue;
            }else if (this.type == 'edit'){
                if (this.questionValue.content == ''){
                    this.dropValue = this.questionEditData.question;
                }else {
                    this.dropValue = this.questionValue.content;
                }
            }
            this.fillDropDown['controls'].addDropDownOption.value.forEach((items, index) => {
                let valueNotSelected = true;
                items.options.forEach((items1) => {
                    if (items1.selected == 'true') {
                        valueNotSelected = false;
                        document.getElementById('dropdownPre' + index).innerHTML = items1.listOption;
                    }
                    if (valueNotSelected) {
                        document.getElementById('dropdownPre' + index).innerHTML = 'Select Answer';
                    }
                });
            });
        }
        window.scrollTo({top: 0, behavior: 'smooth'});
        this.editPassageContent = false;
        this.selectOptionHeader = type;
        this.clickEvent();
    }

    cancelAction(){
        if (this.type == 'add'){
            this.router.navigate(['/content-text-resource/add-questions/add']);
        } else if (this.type == 'edit'){
            this.auth.setSessionData('cfs_question_no', '0');
            this.router.navigate(['/content-text-resource/text-assignment/qEdit']);
        }
    }

    selectionHeaderPassage(type) {
        this.selectOptionHeader = type;
        this.multihight = false;
        this.clickEvent();

        // hide passage in match sort list
        // this.sourcePassageArr = [];
        // this.targetPassageArr = [];
        // this.targetPassageArr1 = [];
        // let myIndex : number = 0;
        // for (let i = 0; i < this.passage['controls'].addQuestionType['controls'].length; i++) {
        //     if (this.passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'sortList') {
        //         this.targetPassageArr1[myIndex] = [];
        //         this.targetPassageArr[myIndex] = [];
        //         this.sourcePassageArr[myIndex] = [];
        //         this.multiSelect = this.passage['controls'].addQuestionType['controls'][i]['controls'] as FormArray;
        //         for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
        //             for (let j = 0; j < this.multiSelect.addMultipleChoose['controls'].length; j++) {
        //                 this.multiSelect.addMultipleSource['controls'][i]['controls']['option'].patchValue( this.multiSelect.addMultipleChoice['controls'][i]['controls']['option'].value);
        //                 this.multiSelect.addMultipleTarget['controls'][j]['controls']['selectOption'].patchValue( this.multiSelect.addMultipleChoose['controls'][j]['controls']['selectOption'].value);
        //             }
        //         }
        //
        //         console.log( this.multiSelect.addMultipleSource['controls']);
        //         console.log( this.multiSelect.addMultipleTarget['controls']);
        //         let sourceQue =  this.multiSelect.addMultipleSource['controls'];
        //         let sourceQue1 =  this.multiSelect.addMultipleTarget['controls'];
        //         console.log(sourceQue , 'queeee');
        //         console.log(sourceQue1 , 'queeee1111');
        //         for (let i = 0; i < this.multiSelect.addMultipleSource['controls'].length; i++) {
        //             this.sourcePassageArr[myIndex].push({
        //                 value : this.multiSelect.addMultipleSource['controls'][i]['controls'].option.value ,
        //                 index: i ,
        //             });
        //             // this.sourcePassageArr.push(
        //             //     {
        //             //         value : this.multiSelect.addMultipleSource['controls'][i]['controls'].option.value ,
        //             //         index: i ,
        //             //     });
        //         }
        //
        //
        //         for (let i = 0; i < this.multiSelect.addMultipleTarget['controls'].length; i++) {
        //             this.targetPassageArr[myIndex].push({
        //                     value : this.multiSelect.addMultipleTarget['controls'][i]['controls'].selectOption.value ,
        //                     index: i ,
        //                     valid: '0'
        //                 });
        //             this.targetPassageArr1[myIndex].push({
        //                     value : this.multiSelect.addMultipleTarget['controls'][i]['controls'].selectOption.value ,
        //                     index: i ,
        //                     valid: '0'
        //                 });
        //         }
        //
        //         myIndex += 1;
        //     }
        // }
        // this.targetPassageArr = this.shuffle(this.targetPassageArr);
        //
        // console.log(this.sourcePassageArr, 'sourcePassageArr');
        // console.log(this.targetPassageArr, 'targetPassageArr');
        // console.log(this.targetPassageArr1, 'targetPassageArr1');
    }
    appendPreviewInput() {
        // let val = this.editorEvent.split(' ');
        // this.inputCount = 0;
        // this.dropDownCount = 0;
        // this.inputArray = [];
        // this.dropDownArray = [];
        // val.forEach((item , index) => {
        //     if(item == 'class="inputValue"'){
        //         this.inputCount += 1;
        //         this.inputArray.push({id : index + '-input' , index , value: 'a'});
        //     }else if(item == 'class="dropDownValue"'){
        //         this.dropDownCount += 1;
        //         this.dropDownArray.push({id : index + '-drop' , index , value: 'a'});
        //     }
        // });
        //
        // console.log(this.dropDownCount ,'dropDownCount')
        // console.log(this.addDropDownArr.controls.length ,'controls length')
        // if (this.addDropDownArr.controls.length == 0){
        //     for(let i= 0; i < this.dropDownCount; i++){
        //         this.addDropDownArr.push(this.createAddDropDownOption());
        //     }
        //     if (this.dropDownCount == 0 && this.addDropDownArr.controls.length){
        //         this.addDropDownArr.removeAt(0);
        //
        //     }
        // }else {
        //     let dif =this.dropDownArray.length - this.addDropDownArr.controls.length;
        //     console.log(dif ,'dif')
        //     for(let i= 0; i < dif; i++){
        //         this.addDropDownArr.push(this.createAddDropDownOption());
        //     }
        //     console.log(Math.sign(dif) , 'Math.sign(dif)');
        //     if (Math.sign(dif) == -1){
        //         for(let i= 0; i < Math.abs(dif); i++){
        //             this.addDropDownArr.removeAt(i);
        //         }
        //     }
        //
        // }

    }


    // number Validation
    numberValidate(event) {
        this.validationService.numberValidate(event);
    }

    contentQuestion() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.contentService.contentQuestion(data).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.contentQuestionList = successData.ResponseObject;
                }
            },
            (error) => {
                console.error(error, 'question_type');
            });
    }

    addChoice(type) {
        if (type == 'addMultipleChoice') {
            this.addMultipleChoice = this.multipleChoice.get('addMultipleChoice') as FormArray;
            this.addMultipleChoice.push(this.createMultiple());
        } else if (type == 'addMultipleHint') {
            this.addHints = this.multipleChoice.get('addHints') as FormArray;
            this.addHints.push(this.createHint());
        } else if (type == 'addMatchTable') {
            this.addMultipleChoice = this.matchTable.get('addMultipleChoice') as FormArray;
            this.addMultipleChoice.push(this.createMatch());
        } else if (type == 'matchTableChoose') {
            this.addMatchTableChoose = this.matchTable.get('addMatchTableChoose') as FormArray;
            this.addMatchTableChoose.push(this.createMatchChoose());
        } else if (type == 'addMatchTableHint') {
            this.addHints = this.matchTable.get('addHints') as FormArray;
            this.addHints.push(this.createHint());
        } else if (type == 'addMultipleSort') {
            this.addMultipleChoice = this.matchSort.get('addMultipleChoice') as FormArray;
            this.addMultipleChoice.push(this.createSort());
            this.addMultipleChoose = this.matchSort.get('addMultipleChoose') as FormArray;
            this.addMultipleChoose.push(this.createSortChoose());
            this.matchSortSource = this.matchSort.get('matchSortSource') as FormArray;
            this.matchSortSource.push(this.createSortSource());
            this.matchSortTarget = this.matchSort.get('matchSortTarget') as FormArray;
            this.matchSortTarget.push(this.createSortTarget());
        } else if (type == 'addSortHint') {
            this.addHints = this.matchSort.get('addHints') as FormArray;
            this.addHints.push(this.createHint());
        } else if (type == 'addRichHint') {
            this.addHints = this.richText.get('addHints') as FormArray;
            this.addHints.push(this.createHint());
        } else if (type == 'addPlainHint') {
            this.addHints = this.plainText.get('addHints') as FormArray;
            this.addHints.push(this.createHint());
        } else if (type == 'addShortHint') {
            this.addHints = this.shortText.get('addHints') as FormArray;
            this.addHints.push(this.createHint());
        } else if (type == 'addTextHint') {
            this.addHints = this.textEntry.get('addHints') as FormArray;
            this.addHints.push(this.createHint());
        } else if (type == 'addDropHint') {
            this.addHints = this.fillDropDown.get('addHints') as FormArray;
            this.addHints.push(this.createHint());
        }
        else if (type == 'addMore') {
            this.addQuestionType = this.passage.get('addQuestionType') as FormArray;
            this.addQuestionType.push(this.createQuestionType());
        } else if (type == 'addfillChoice') {
            this.addMultipleChoice = this.fillDropDown.get('addMultipleChoice') as FormArray;
            this.addMultipleChoice.push(this.createMatch());
        }
    }

    addDropDownFormArr(value){
        value.push(this.createAddDropDownOptionList());
        this.addDropDownArr = this.fillDropDown.controls.addDropDownOption as FormArray;
    }
    deleteDropDownFormArr(control , index){
        control.removeAt(index);
        this.addDropDownArr = this.fillDropDown.controls.addDropDownOption as FormArray;
    }
    getRandom() {
        return Math.random();
    }

    addChoicePassage(type, id) {
        this.random = this.getRandom();
        if (type == 'passageAddChoice') {
            this.addMultipleChoice = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleChoice as FormArray;
            this.addMultipleChoice.push(this.createMultiple());
        } else if (type == 'passageAddTableChoose') {
            this.addMultipleChoice = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMatchTableChoose as FormArray;
            this.addMultipleChoice.push(this.createMatchChoose());
        } else if (type == 'passageAddHint') {
            this.addHints = this.passage['controls'].addQuestionType['controls'][id]['controls'].addHints as FormArray;
            this.addHints.push(this.createHint());
        } else if (type == 'passageSort') {
            this.addMultipleChoice = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleChoice as FormArray;
            this.addMultipleChoice.push(this.createMultiple());
            this.addMultipleChoose = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleChoose as FormArray;
            this.addMultipleChoose.push(this.createSortChoose());
            this.addMultipleSource = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleSource as FormArray;
            this.addMultipleSource.push(this.createMultipleSource());
            this.addMultipleTarget =  this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleTarget as FormArray;
            this.addMultipleTarget.push(this.createMultipleTarget());
        }

    }

    deleteChoicePassage(type, id, index) {
        if (type == 'deletePassageChoice') {
            const control = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleChoice as FormArray;
            control.removeAt(index);
        } else if (type == 'deletePassageMatch') {
            const control = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMatchTableChoose as FormArray;
            control.removeAt(index);
        } else if (type == 'deletePassageHints') {
            const control = this.passage['controls'].addQuestionType['controls'][id]['controls'].addHints as FormArray;
            control.removeAt(index);
        } else if (type == 'deletePassageSort') {
            const control = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleChoice as FormArray;
            control.removeAt(index);
            const control1 = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleChoose as FormArray;
            control1.removeAt(index);
            const control2 = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleSource as FormArray;
            control2.removeAt(index);
            const control3 = this.passage['controls'].addQuestionType['controls'][id]['controls'].addMultipleTarget as FormArray;
            control3.removeAt(index);
        }
    }

    createQuestionType(): FormGroup {
        return this.formBuilder.group({
            addMultipleChoose: this.formBuilder.array([this.createSortChoose(), this.createSortChoose(), this.createSortChoose(), this.createSortChoose()]),
            addMultipleChoice: this.formBuilder.array([this.createMultiple(), this.createMultiple(), this.createMultiple(), this.createMultiple()]),
            addMultipleSource: this.formBuilder.array([this.createMultipleSource()]),
            addMultipleTarget: this.formBuilder.array([this.createMultipleTarget(), this.createMultipleTarget(), this.createMultipleTarget(), this.createMultipleTarget()]),
            addMatchTableChoose: this.formBuilder.array([this.createMatchChoose('True'), this.createMatchChoose('False')]),
            addHints: this.formBuilder.array([this.createHint()]),
            explanation: '',
            question: '',
            target: '',
            source: '',
            points: '1',
            chooseType: 'text',
            multiResponse: false,
            autograde: true,
            selectType: 'select',
            ignoreCase: '',
            level: '2',
            minutes: '',
            seconds: '',
            subject_id: null,
            question_topic_id: null,
            question_sub_topic_id: null,
            question_standard: null,
            repeatAnswerFreeText: this.formBuilder.array([this.createNewCorrectAnswer()])
        });
    }

    // Create Multiple Choice-Standard and Multi Selection
    createMultiple(): FormGroup {
        return this.formBuilder.group({
            option: '',
            selectOption: '',
            active: '',
            previewActive: ''
        });
    }

    // create Hint
    createHint(): FormGroup {
        return this.formBuilder.group({
            hint: ['', Validators.required]
        });
    }
    // create addDropDownOption
    createAddDropDownOption(): FormGroup {

        return this.formBuilder.group({
            options: this.formBuilder.array([this.createAddDropDownOptionList()]),
        });
    }
    createAddDropDownOptionList(): FormGroup {
        this.showForm = true;
        return this.formBuilder.group({
            listOption: [''],
            selected: ['false']
        });
    }

    // Create Match Table-Standard and Match Table-Labels
    createMatch(): FormGroup {
        return this.formBuilder.group({
            option: '',
            selectOption: '',
            active: ''
        });
    }

    createMatchChoose(optionvalue = ''): FormGroup {
        return this.formBuilder.group({
            option: optionvalue,
            selectOption: '',
            active: ''
        });
    }

    // Create Match & Sort List
    createSort(): FormGroup {
        return this.formBuilder.group({
            option: '',
            // selectOption: '',
            //   previewActive: ''
        });
    }

    createSortChoose(): FormGroup {
        return this.formBuilder.group({
            option: '',
            selectOption: '',
        });
    }

    createSortSource(): FormGroup {
        return this.formBuilder.group({
            option: '',
            // selectOption: '',
            //   previewActive: ''
        });
    }

    createSortTarget(): FormGroup {
        return this.formBuilder.group({
            // option: '',
            selectOption: '',
            //   previewActive: ''
        });
    }
    createMultipleSource(): FormGroup {
        return this.formBuilder.group({
            option: '',
            // selectOption: '',
            //   previewActive: ''
        });
    }

    createMultipleTarget(): FormGroup {
        return this.formBuilder.group({
            // option: '',
            selectOption: '',
            //   previewActive: ''
        });
    }
    // deleted all questions
    deletePassageSection(data, id) {
        this.passageDeleteData = data;
        this.passageDeleteid = id;
        this.modalRef = this.modalService.open(this.deletePassageQuestion);
    }

    deletePassage(data, id){
        data.splice(id, 1);
        if (this.type == 'edit' && this.questionEditData.subQuestions[id]?.question_id) {
            this.questionDelete(id);
            this.questionEditData.subQuestions.splice(id, 1);
        }
        this.modalRef.close();
    }

    closeQuestion(){
        this.passageDeleteData = '';
        this.passageDeleteid = '';
        this.modalRef.close();
    }

    deleted(type, index){
        if (type == 'deleteMultiple') {
            const control = this.multipleChoice.controls.addMultipleChoice as FormArray;
            control.removeAt(index);
        } else if (type == 'deleteMultipleHint') {
            const control = this.multipleChoice.controls.addHints as FormArray;
            control.removeAt(index);
        } else if (type == 'deleteMatchTable') {
            const control = this.matchTable.controls.addMultipleChoice as FormArray;
            control.removeAt(index);
        } else if (type == 'deleteMatchTableChoose') {
            const control = this.matchTable.controls.addMatchTableChoose as FormArray;
            control.removeAt(index);
        } else if (type == 'deleteMatchTableHint') {
            const control = this.matchTable.controls.addHints as FormArray;
            control.removeAt(index);
        } else if (type == 'deleteSort') {
            const control = this.matchSort.controls.addMultipleChoice as FormArray;
            const controlAnswer = this.matchSort.controls.addMultipleChoose as FormArray;
            const controlSource = this.matchSort.controls.matchSortSource as FormArray;
            const controlTarget = this.matchSort.controls.matchSortTarget as FormArray;
            control.removeAt(index);
            controlAnswer.removeAt(index);
            controlSource.removeAt(index);
            controlTarget.removeAt(index);
        } else if (type == 'deleteSortHint') {
            const control = this.matchSort.controls.addHints as FormArray;
            control.removeAt(index);
        } else if (type == 'deleteRichHint') {
            const control = this.richText.controls.addHints as FormArray;
            control.removeAt(index);
        } else if (type == 'deleteTextHint') {
            const control = this.textEntry.controls.addHints as FormArray;
            control.removeAt(index);
        } else if (type == 'deletePlainHint') {
            const control = this.plainText.controls.addHints as FormArray;
            control.removeAt(index);
        } else if (type == 'deleteShortHint') {
            const control = this.shortText.controls.addHints as FormArray;
            control.removeAt(index);
        }
    }

    multipleResponse(type, eve) {
        if (type == 'multipleChoiceCheck') {
            this.multipleChoice.controls.multiResponse.patchValue(eve.target.checked);
            if (eve.target.checked == true) {
                this.questionId = 2;
                for (let i = 0; i < this.multipleChoice['controls'].addMultipleChoice['controls'].length; i++) {
                    this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].patchValue('');
                }
            } else {
                this.questionId = 1;
                for (let i = 0; i < this.multipleChoice['controls'].addMultipleChoice['controls'].length; i++) {
                    this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].patchValue('');
                }
            }
        } else if (type == 'matchTableCheck') {
            this.multipleChoice.controls.multiResponse.patchValue(eve.target.checked);
            if (eve.target.checked == true) {
                this.questionId = 7;
                // for (let i = 0; i < this.matchTable['controls'].addMatchTableChoose['controls'].length; i++) {
                //   this.matchTable['controls'].addMatchTableChoose['controls'][i]['controls']['selectOption'].patchValue('');
                // }
            } else {
                this.questionId = 5;
                // for (let i = 0; i < this.matchTable['controls'].addMatchTableChoose['controls'].length; i++) {
                //   this.matchTable['controls'].addMatchTableChoose['controls'][i]['controls']['selectOption'].patchValue('');
                // }
            }
        } else if (type == 'passageMultipleChoice') {
                this.passage['controls'].addQuestionType['controls'][0]['controls'].multiResponse.patchValue(eve.target.checked);
        }
    }

    getAddChoiceAnswer(eve, index, type) {
        if (type == 'multipleChoiceChoose') {
            if (this.multipleChoice.controls.multiResponse.value == true) {
                this.multipleChoice['controls'].addMultipleChoice['controls'][index]['controls']['selectOption'].patchValue(eve.target.checked ? 'on' : '');
                this.multipleChoice['controls'].addMultipleChoice['controls'][index]['controls']['active'].patchValue(eve.target.checked ? 1 : 0);
            } else {
                for (let i = 0; i < this.multipleChoice['controls'].addMultipleChoice['controls'].length; i++) {
                    this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['active'].patchValue(0);
                    this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['selectOption'].patchValue('');
                    if (index == i) {
                        this.multipleChoice['controls'].addMultipleChoice['controls'][index]['controls']['selectOption'].patchValue(eve.target.value);
                        this.multipleChoice['controls'].addMultipleChoice['controls'][index]['controls']['active'].patchValue(1);
                    }
                }
            }
        } else if (type == 'multipleChoiceChoosePreview') {
            if (this.multipleChoice.controls.multiResponse.value == true) {
                this.multipleChoice['controls'].addMultipleChoice['controls'][index]['controls']['previewActive'].patchValue(1);
            } else {
                for (let i = 0; i < this.multipleChoice['controls'].addMultipleChoice['controls'].length; i++) {
                    this.multipleChoice['controls'].addMultipleChoice['controls'][i]['controls']['previewActive'].patchValue(0);
                    if (index == i) {
                        this.multipleChoice['controls'].addMultipleChoice['controls'][index]['controls']['previewActive'].patchValue(1);
                    }
                }
            }
        } else if (type == 'matchTableChooseSingle') {
            for (let i = 0; i < this.matchTable['controls'].addMultipleChoice['controls'].length; i++) {
                if (index == i) {
                    if (this.inputType == 'math') {
                        this.matchTable['controls'].addMultipleChoice['controls'][index]['controls']['selectOption'].patchValue(this.optionArray[eve].options);
                    } else {
                        this.matchTable['controls'].addMultipleChoice['controls'][index]['controls']['selectOption'].patchValue(this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['option'].value);
                    }
                    this.matchTable['controls'].addMultipleChoice['controls'][index]['controls']['active'].patchValue(eve);
                }
            }

        } else if (type == 'matchTableChooseMultiple') {
            for (let i = 0; i < this.matchTable['controls'].addMultipleChoice['controls'].length; i++) {
                if (index == i) {
                    this.noPush = false;
                    this.matchTable['controls'].addMultipleChoice['controls'][index]['controls']['selectOption'].patchValue(eve);
                    this.matchTable['controls'].addMultipleChoice['controls'][index]['controls']['active'].patchValue(index);
                    for (let j = 0; j < this.correctChoiceMatchValue.length; j++) {
                        if (this.correctChoiceMatchValue[j].correctAnswer == eve && this.correctChoiceMatchValue[j].correctActive == index) {
                            this.noPush = true;
                            this.correctChoiceMatchValue.forEach((item, index) => {
                                if ( j == index){
                                    // this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['option'].patchValue('');
                                    this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['selectOption'].patchValue('');
                                    this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['active'].patchValue('');
                                }
                            });
                            this.correctChoiceMatchValue.splice(j, 1);
                        }
                    }
                    if (this.noPush == false) {
                        this.correctChoiceMatchValue.push({
                            correctOption: this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['option'].value,
                            correctAnswer: this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['selectOption'].value,
                            correctActive: this.matchTable['controls'].addMultipleChoice['controls'][i]['controls']['active'].value,
                        });
                    }
                }
            }
        } else if (type == 'matchSortChoose') {
            for (let i = 0; i < this.matchSort['controls'].addMultipleChoice['controls'].length; i++) {
                if (index == i) {
                    this.matchSort['controls'].addMultipleChoice['controls'][index]['controls']['selectOption'].patchValue(eve.target.innerText);
                }
            }
        }
    }

    getChoiceAnswerPassage(eve, index, id, type) {
        this.multiSelect = this.passage['controls'].addQuestionType['controls'][index]['controls'] as FormArray;
        if (type == 'multipleChoiceChoose') {
            if (this.multiSelect.multiResponse.value == true) {
                this.multiSelect.addMultipleChoice['controls'][id]['controls']['selectOption'].patchValue(this.multiSelect.addMultipleChoice['controls'][id]['controls']['option'].value);
                this.multiSelect.addMultipleChoice['controls'][id]['controls']['active'].patchValue(eve.target.checked ? 1 : 0);
                this.multiSelect.addMultipleChoice['controls'][id]['controls']['previewActive'].patchValue(eve.target.checked ? 1 : 0);
            } else {
                for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['active'].patchValue(0);
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['selectOption'].patchValue('');
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['previewActive'].patchValue(0);
                    if (id == i) {
                        this.multiSelect.addMultipleChoice['controls'][id]['controls']['selectOption'].patchValue(this.multiSelect.addMultipleChoice['controls'][id]['controls']['option'].value);
                        this.multiSelect.addMultipleChoice['controls'][id]['controls']['active'].patchValue(1);
                        this.multiSelect.addMultipleChoice['controls'][id]['controls']['previewActive'].patchValue(1);
                    }
                }
            }
        } else if (type == 'multipleChoiceChoosePreview') {
            this.multihight = true;
            if (this.multiSelect.multiResponse.value == true) {
                this.multiSelect.addMultipleChoice['controls'][id]['controls']['previewActive'].patchValue(1);
            } else {
                for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['previewActive'].patchValue(0);
                    if (id == i) {
                        this.multiSelect.addMultipleChoice['controls'][id]['controls']['previewActive'].patchValue(1);
                    }
                }
            }
        }
        else if (type == 'matchTableChooseSingle') {
            for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                if (eve == i) {
                    this.multiSelect.addMultipleChoice['controls'][eve]['controls']['selectOption'].patchValue(this.multiSelect.addMultipleChoice['controls'][eve]['controls']['option'].value);
                    this.multiSelect.addMultipleChoice['controls'][eve]['controls']['active'].patchValue(id);
                }
            }
        } else if (type == 'matchTableChooseMulti') {
            for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                if (id == i) {
                    this.noPush = false;
                    this.multiSelect.addMultipleChoice['controls'][id]['controls']['selectOption'].patchValue(id);
                    this.multiSelect.addMultipleChoice['controls'][id]['controls']['active'].patchValue(eve);
                    if (this.correctChoiceMatchValue[index] != null) {
                        for (let j = 0; j < this.correctChoiceMatchValue[index].sub.length; j++) {
                            if (this.correctChoiceMatchValue[index].sub[j].correctAnswer == id && this.correctChoiceMatchValue[index].sub[j].correctActive == eve) {
                                this.noPush = true;
                                this.correctChoiceMatchValue[index].sub.splice(j, 1);
                            }
                        }
                    } else {
                        console.log(this.correctChoiceMatchValue[index], 'in');
                        this.correctChoiceMatchValue[index] = {sub: []};
                    }
                    if (this.noPush == false) {
                        this.correctChoiceMatchValue[index].sub.push({
                            correctOption: this.passage['controls'].addQuestionType['controls'][index]['controls'].chooseType.value == 'math' ? this.rowArray[i] : this.multiSelect.addMultipleChoice['controls'][i]['controls']['option'].value ,
                            correctAnswer: this.multiSelect.addMultipleChoice['controls'][i]['controls']['selectOption'].value,
                            correctActive: this.multiSelect.addMultipleChoice['controls'][i]['controls']['active'].value,
                        });
                    }
                }
            }
        }
    }

    multipleResponsePassage(type, eve, index) {
        if (type == 'multipleChoiceCheck') {
            this.multiSelect = this.passage['controls'].addQuestionType['controls'][index]['controls'] as FormArray;
            if (eve.target.checked == true) {
                for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['active'].patchValue('');
                }
            } else {
                for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['active'].patchValue('');
                }
            }
        } else if (type == 'matchTableCheck') {
            this.multiSelect = this.passage['controls'].addQuestionType['controls'][index]['controls'] as FormArray;
            if (eve.target.checked == true) {
                for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['active'].patchValue('');
                }
            } else {
                this.correctChoiceMatchValue[index].sub = [];
                for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['active'].patchValue('');
                }
            }
        }
    }

    getMatchSortValue(event, index, type) {
        if (type == 'text'){
            for (let i = 0; i < this.matchSort['controls'].addMultipleChoice['controls'].length; i++) {
                if (index === i) {
                    this.matchSort['controls'].addMultipleChoose['controls'][i]['controls']['selectOption'].patchValue(event.target.value);
                    this.matchSort['controls'].addMultipleChoice['controls'][i]['controls']['option'].patchValue(event.target.value);
                    this.matchSort['controls'].matchSortTarget['controls'][i]['controls']['selectOption'].patchValue(event.target.value);
                    this.matchSort['controls'].matchSortSource['controls'][i]['controls']['option'].patchValue(event.target.value);
                }
            }
        }else if (type == 'math'){
            for (let i = 0; i < this.matchSort['controls'].addMultipleChoice['controls'].length; i++) {
                if (index === i) {
                    document.getElementById('matchSortDrop' + index).innerHTML = event.content;
                    this.matchSort['controls'].addMultipleChoose['controls'][i]['controls']['selectOption'].patchValue(event.content);
                    this.matchSort['controls'].addMultipleChoice['controls'][i]['controls']['option'].patchValue(event.content);
                    this.matchSort['controls'].matchSortTarget['controls'][i]['controls']['selectOption'].patchValue(event.content);
                    this.matchSort['controls'].matchSortSource['controls'][i]['controls']['option'].patchValue(event.content);
                }
            }
        }
        this.clickEvent();
    }

    getPassageSortValue(event, index, id, type) {
        this.multiSelect = this.passage['controls'].addQuestionType['controls'][index]['controls'] as FormArray;
        console.log(event);
        if (type == 'text') {
            for (let i = 0; i < this.multiSelect.addMultipleChoose['controls'].length; i++) {
                if (id === i) {
                    this.multiSelect.addMultipleChoose['controls'][i]['controls']['selectOption'].patchValue(event.target.value);
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['option'].patchValue(event.target.value);
                    this.multiSelect.addMultipleTarget['controls'][i]['controls']['selectOption'].patchValue(event.target.value);
                    this.multiSelect.addMultipleSource['controls'][i]['controls']['option'].patchValue(event.target.value);
                }
            }
        } else if (type == 'math'){
            for (let i = 0; i < this.multiSelect.addMultipleChoose['controls'].length; i++) {
                if (id === i) {
                    this.multiSelect.addMultipleChoose['controls'][i]['controls']['selectOption'].patchValue(event.content);
                    this.multiSelect.addMultipleChoice['controls'][i]['controls']['option'].patchValue(event.content);
                    this.multiSelect.addMultipleTarget['controls'][i]['controls']['selectOption'].patchValue(event.content);
                    this.multiSelect.addMultipleSource['controls'][i]['controls']['option'].patchValue(event.content);
                }
            }
        }

    }

    updateGraphValue(type){
        this.childGraph.submitValue();
        this.saveQuestions(type, 'same');
    }

    checkPassageType(type, redirectType) {
        if (this.questionId == '24') {
            if (this.editPassageContent) {
                this.passageCREDService('edit');
                this.editPassageContent = !this.editPassageContent;
                setTimeout(() => {
                    this.saveQuestions(type, redirectType);
                }, 500);
            } else {
                this.saveQuestions(type, redirectType);
            }
        } else {
            this.saveQuestions(type, redirectType);
        }
    }

    saveQuestions(type, redirectType) {
        this.questionAnswer = []; // Reset questionAnswer at start
        this.subQuestionAnswer = [];
        this.valid = false;
        let graph: any;
        let hintFinalArrayValue = [];
        this.hintArray.forEach((item) => {
            if (item.hint != ''){
                hintFinalArrayValue.push(item);
            }
        });
        console.log('saveQuestions called with type:', type, 'questionId:', this.questionId, 'commonNameForQuestionId:', this.commonNameForQuestionId);
        if (type == 'multipleChoiceQuestions') {
            if (this.multiQuestionEditor.content != '' || this.type == 'edit') {
                const dropdownAnswer1 = this.multipleChoice['controls'].addMultipleChoice.value;
                for (let i = 0; i < dropdownAnswer1.length; i ++ ){
                    this.multioption = true;
                    if (dropdownAnswer1[i].option == ''){
                        this.multioption = false;
                        break;
                    }
                }
                for (let i = 0; i < dropdownAnswer1.length; i ++ ){
                    this.multiselect = false;
                    if (typeof (dropdownAnswer1[i].active) == 'number'){
                        this.multiselect = true;
                        break;
                    }
                }
                if (dropdownAnswer1.length >= 2) {
                    if (this.multioption){
                        if (this.multiselect){
                            if (this.multipleChoice.controls.points.value != '' && this.multipleChoice.controls.points.value != '0'){
                                this.valid = true;
                                if (this.type == 'add'){
                                    this.questIdNo = '';
                                }else if (this.type == 'edit'){
                                    this.questIdNo = this.questionEditData.question_id;
                                }
                                for (let i = 0; i < this.multipleChoice['controls'].addMultipleChoice['controls'].length; i++) {
                                    this.addNewChoiceValue.push({
                                        options: this.multipleChoice.get('addMultipleChoice')['controls'][i]['controls']['option'].value,
                                        isSelected: ''
                                    });
                                }
                                for (let k = 0; k < this.multipleChoice['controls'].addMultipleChoice['controls'].length; k++) {
                                    this.correctChoiceValue.push({
                                        correctAnswer: this.multipleChoice['controls'].addMultipleChoice['controls'][k]['controls']['active'].value == 1 ?
                                            this.multipleChoice.get('addMultipleChoice')['controls'][k]['controls']['option'].value : '',
                                        correctActive: this.multipleChoice['controls'].addMultipleChoice['controls'][k]['controls']['active'].value
                                    });
                                }
                                const minutes = this.multipleChoice.controls.minutes.value != '' ? this.multipleChoice.controls.minutes.value : '00';
                                const seconds = this.multipleChoice.controls.seconds.value != '' ? this.multipleChoice.controls.seconds.value : '00';
                                this.questionAnswer.push({
                                    question_type_id: this.questionId,
                                    question: this.multiQuestionEditor.content,
                                    editor_type: this.inputType == 'math' ? 3 : 1,
                                    options: this.addNewChoiceValue,
                                    answer: this.correctChoiceValue,
                                    heading_option: [],
                                    multiple_response: this.multipleChoice.controls.multiResponse.value == false ? 0 : 1,
                                    autograde: this.multipleChoice.controls.autograde.value == false ? 0 : 1,
                                    points: this.multipleChoice.controls.points.value,
                                    exact_match: 0,
                                    hint: hintFinalArrayValue,
                                    explanation: this.explanationEditorValue,
                                    resource: this.resourceEditorValue,
                                    word_limit: '',
                                    scoring_instruction: '',
                                    source: '',
                                    target: '',
                                    question_id: this.questIdNo,
                                    subject_id: this.multipleChoice.controls.subject_id.value ?? '',
                                    question_topic_id: this.multipleChoice.controls.question_topic_id.value ?? '',
                                    skill: this.enteredSkillList,
                                    predicted_solving_time: minutes + ':' + seconds,
                                    question_standard: this.multipleChoice.controls.question_standard.value ?? '',
                                    question_sub_topic_id: this.multipleChoice.controls.question_sub_topic_id.value ?? '',
                                    level : this.multipleChoice.controls.level.value
                                });
                            }else {
                                this.toastr.error('Kindly enter valid points for the question');
                            }
                        }else {
                            this.toastr.error('Please select the option');
                        }
                    }else {
                        this.toastr.error('Please Enter all the option');
                    }
                } else {
                    this.toastr.error('More than one option is needed');
                }
            }else {
                this.valid = false;
                this.toastr.error('Please Fill the question');
            }
        }
        else if (type == 'matchTableQuestionsSingle') {
            this.correctChoiceMatchValue = [];
            this.correctChoiceValue = [];
            this.addNewChoiceValue = []
            if (this.multiQuestionEditor.content != '' || this.type == 'edit') {
                if (this.type == 'add'){
                    this.questIdNo = '';
                }else if (this.type == 'edit'){
                    this.questIdNo = this.questionEditData.question_id;
                }
                const dropdownAnswer1 = this.matchTable['controls'].addMultipleChoice.value;
                for (let i = 0; i < dropdownAnswer1.length; i ++ ){
                    this.multioption = true;
                    if ( dropdownAnswer1[i].option == ''){
                        this.multioption = false;
                        break;
                    }
                }
                for (let i = 0; i < dropdownAnswer1.length; i ++ ){
                    this.multiselect = true;
                    if ( typeof (dropdownAnswer1[i].active) != 'number'){
                        this.multiselect = false;
                        break;
                    }
                }
                let stemValueEnteredOrNot = true;
                for (let k = 0; k < this.matchTable['controls'].addMatchTableChoose['controls'].length; k++) {
                    if (this.matchTable['controls'].addMatchTableChoose['controls'][k]['controls']['option'].value == '') {
                        stemValueEnteredOrNot = false;
                        break;
                    }
                }

                if (this.multioption){
                    if (stemValueEnteredOrNot) {
                        if (this.multiselect){
                            if (this.matchTable.controls.points.value != '' && this.matchTable.controls.points.value != '0'){
                                this.valid = true;
                                for (let i = 0; i < this.matchTable['controls'].addMultipleChoice['controls'].length; i++) {
                                    this.addNewChoiceValue.push({
                                        options: this.matchTable.get('addMultipleChoice')['controls'][i]['controls']['option'].value,
                                        isSelected: ''
                                    });
                                }
                                for (let k = 0; k < this.matchTable['controls'].addMatchTableChoose['controls'].length; k++) {
                                    this.correctChoiceValue.push(
                                        this.matchTable['controls'].addMatchTableChoose['controls'][k]['controls']['option'].value,
                                    );
                                }
                                for (let l = 0; l < this.matchTable['controls'].addMultipleChoice['controls'].length; l++) {
                                    this.correctChoiceMatchValue.push({
                                        correctOption: this.matchTable['controls'].addMultipleChoice['controls'][l]['controls']['option'].value,
                                        correctAnswer: this.matchTable['controls'].addMultipleChoice['controls'][l]['controls']['selectOption'].value,
                                        correctActive: this.matchTable['controls'].addMultipleChoice['controls'][l]['controls']['active'].value
                                    });
                                }
                                const minutes = this.matchTable.controls.minutes.value != '' ? this.matchTable.controls.minutes.value : '00';
                                const seconds = this.matchTable.controls.seconds.value != '' ? this.matchTable.controls.seconds.value : '00';
                                console.log(this.correctChoiceMatchValue, 'this.correctChoiceMatchValue');
                                this.questionAnswer.push({
                                    question_type_id: this.questionId,
                                    question: this.multiQuestionEditor.content,
                                    editor_type: this.inputType == 'math' ? 3 : 1,
                                    options: this.addNewChoiceValue,
                                    answer: this.correctChoiceValue,
                                    heading_option: this.correctChoiceMatchValue,
                                    multiple_response: this.matchTable.controls.multiResponse.value == false ? 0 : 1,
                                    autograde: this.matchTable.controls.autograde.value == false ? 0 : 1,
                                    points: this.matchTable.controls.points.value,
                                    exact_match: 0,
                                    hint: hintFinalArrayValue,
                                    explanation: this.explanationEditorValue,
                                    resource: this.resourceEditorValue,
                                    word_limit: '',
                                    scoring_instruction: '',
                                    source: '',
                                    target: '',
                                    level: this.matchTable.controls.level.value,
                                    question_id: this.questIdNo,
                                    subject_id: this.matchTable.controls.subject_id.value ?? '',
                                    question_topic_id: this.matchTable.controls.question_topic_id.value ?? '',
                                    skill: this.enteredSkillList,
                                    predicted_solving_time: minutes + ':' + seconds,
                                    question_standard: this.matchTable.controls.question_standard.value ?? '',
                                    question_sub_topic_id: this.matchTable.controls.question_sub_topic_id.value ?? '',
                                });
                            }else {
                                this.toastr.error('Kindly enter valid points for the question');
                            }
                        }else {
                            this.toastr.error('Please Select the correct answer for all the option');
                        }
                    } else {
                        this.toastr.error('Please enter all stems value');
                    }
                }else {
                    this.toastr.error('Please enter all the option');
                }
            }else {
                this.valid = false;
                this.toastr.error('Please Fill the question');
            }
        }
        else if (type == 'matchTableQuestionsMultiple') {
            // this.correctChoiceMatchValue = [];
            this.correctChoiceValue = [];
            this.addNewChoiceValue = [];
            if (this.multiQuestionEditor.content != '' || this.type == 'edit') {
                if (this.type == 'add'){
                    this.questIdNo = '';
                }else if (this.type == 'edit'){
                    this.questIdNo = this.questionEditData.question_id;
                }
                const dropdownAnswer1 = this.matchTable['controls'].addMultipleChoice.value;
                for (let i = 0; i < dropdownAnswer1.length; i ++ ){
                    this.multioption = true;
                    if (dropdownAnswer1[i].option == ''){
                        this.multioption = false;
                        break;
                    }
                }
                console.log(this.addNewChoiceValue, 'this.addNewChoiceValue');
                console.log(this.correctChoiceMatchValue, 'this.correctChoiceMatchValue');
                let checked = true;
                if (this.multioption){
                    if (this.correctChoiceMatchValue.length != 0){
                        if (this.matchTable.controls.points.value != '' && this.matchTable.controls.points.value != '0'){
                            this.valid = true;
                            for (let i = 0; i < this.matchTable['controls'].addMultipleChoice['controls'].length; i++) {
                                this.addNewChoiceValue.push({
                                    options: this.matchTable.get('addMultipleChoice')['controls'][i]['controls']['option'].value,
                                    isSelected: ''
                                });
                            }
                            for (let k = 0; k < this.matchTable['controls'].addMatchTableChoose['controls'].length; k++) {
                                this.correctChoiceValue.push(
                                    this.matchTable['controls'].addMatchTableChoose['controls'][k]['controls']['option'].value,
                                );
                            }
                            console.log(this.addNewChoiceValue, 'lValeu');
                            for (let i = 0; i < this.addNewChoiceValue.length; i++) {
                                if (!checked) {
                                    break;
                                }
                                checked = false;
                                for (let j = 0; j < this.correctChoiceMatchValue.length; j++) {
                                    if (i == this.correctChoiceMatchValue[j].correctActive) {
                                        checked = true;
                                        break;
                                    }
                                }
                            }
                            if (!checked) {
                                this.valid = false;
                                this.toastr.error('Please select the option for every row');
                            }

                            const minutes = this.matchTable.controls.minutes.value != '' ? this.matchTable.controls.minutes.value : '00';
                            const seconds = this.matchTable.controls.seconds.value != '' ? this.matchTable.controls.seconds.value : '00';
                            this.questionAnswer.push({
                                question_type_id: this.questionId,
                                editor_context: this.contextValue,
                                question: this.multiQuestionEditor.content,
                                options: this.addNewChoiceValue,
                                editor_type: this.inputType == 'math' ? 3 : 1,
                                answer: this.correctChoiceValue,
                                heading_option: this.correctChoiceMatchValue,
                                multiple_response: this.matchTable.controls.multiResponse.value == false ? 0 : 1,
                                autograde: this.matchTable.controls.autograde.value == false ? 0 : 1,
                                points: this.matchTable.controls.points.value,
                                exact_match: 0,
                                hint: hintFinalArrayValue,
                                explanation: this.explanationEditorValue,
                                resource: this.resourceEditorValue,
                                word_limit: '',
                                scoring_instruction: '',
                                source: '',
                                target: '',
                                question_id: this.questIdNo,
                                level: this.matchTable.controls.level.value,
                                subject_id: this.matchTable.controls.subject_id.value ?? '',
                                question_topic_id: this.matchTable.controls.question_topic_id.value ?? '',
                                skill: this.enteredSkillList,
                                question_standard: this.matchTable.controls.question_standard.value ?? '',
                                predicted_solving_time: minutes + ':' + seconds,
                                question_sub_topic_id: this.matchTable.controls.question_sub_topic_id.value ?? ''
                            });
                        }else {
                            this.toastr.error('Kindly enter valid points for the question');
                        }
                    }else {
                        this.toastr.error('Please select the option');
                    }
                }else {
                    this.toastr.error('Please enter all the option');
                }
            }else {
                this.valid = false;
                this.toastr.error('Please Fill the question');
            }
        }
        else if (type == 'matchSortList') {
            if (this.matchSortEditor.content != '' || this.type == 'edit') {
                if (this.type == 'add'){
                    this.questIdNo = '';
                }else if (this.type == 'edit'){
                    this.questIdNo = this.questionEditData.question_id;
                }
                const matchorder = this.matchSort['controls'].addMultipleChoose.value;
                for (let i = 0 ; i < matchorder.length; i ++){
                    this.multioption = true;
                    if (matchorder[i].selectOption == ''){
                        this.multioption = false;
                        break;
                    }
                }
                if (this.multioption){
                    if (this.matchSort.controls.points.value != '' && this.matchSort.controls.points.value != '0'){
                        this.valid = true;
                        for (let i = 0; i < this.matchSort['controls'].addMultipleChoice['controls'].length; i++) {
                            this.addNewChoiceValue.push({
                                options: this.matchSort.get('addMultipleChoice')['controls'][i]['controls']['option'].value
                            });
                        }
                        for (let k = 0; k < this.matchSort['controls'].addMultipleChoose['controls'].length; k++) {
                            this.correctChoiceValue.push({
                                correctAnswer: this.matchSort['controls'].addMultipleChoose['controls'][k]['controls']['selectOption'].value,
                                correctActive: ''
                            });
                        }
                        const minutes = this.matchSort.controls.minutes.value != '' ? this.matchSort.controls.minutes.value : '00';
                        const seconds = this.matchSort.controls.seconds.value != '' ? this.matchSort.controls.seconds.value : '00';

                        this.questionAnswer.push({
                            question_type_id: this.questionId,
                            editor_context: this.contextValue,
                            question: this.matchSortEditor.content,
                            options: this.addNewChoiceValue,
                            answer: this.correctChoiceValue,
                            editor_type: this.inputType == 'math' ? 3 : 1,
                            heading_option: [],
                            multiple_response: this.matchSort.controls.multiResponse.value == false ? 0 : 1,
                            autograde: this.matchSort.controls.autograde.value == false ? 0 : 1,
                            points: this.matchSort.controls.points.value,
                            exact_match: 0,
                            hint: hintFinalArrayValue,
                            explanation: this.explanationEditorValue,
                            resource: this.resourceEditorValue,
                            word_limit: '',
                            scoring_instruction: '',
                            source: this.matchSort.controls.source.value,
                            target: this.matchSort.controls.target.value,
                            question_id: this.questIdNo,
                            level: this.matchSort.controls.level.value,
                            subject_id: this.matchSort.controls.subject_id.value ?? '',
                            question_topic_id: this.matchSort.controls.question_topic_id.value ?? '',
                            skill: this.enteredSkillList,
                            question_standard: this.matchSort.controls.question_standard.value ?? '',
                            predicted_solving_time: minutes + ':' + seconds,
                            question_sub_topic_id: this.matchSort.controls.question_sub_topic_id.value ?? ''
                        });
                    }else {
                        this.toastr.error('Kindly enter valid points for the question');
                    }
                }else {
                    this.toastr.error('Please enter for all the option');
                }
            }else {
                this.valid = false;
                this.toastr.error('Please Fill the question');
            }
        } else if (type == 'richText') {
            if (this.type == 'add'){
                this.questIdNo = '';
            }else if (this.type == 'edit'){
                this.questIdNo = this.questionEditData.question_id;
            }
            if ((this.questionId == '20' && !this.multiFreeAnswerEditor.some(code => code.content == '') && this.writingQuestionEditor.content != '') ||
                (this.questionId == '55' && this.writingQuestionEditor)){
                    if (this.richText.controls.points.value != '' && this.richText.controls.points.value != '0'){
                        if (this.questionId == '20') {
                            for (let i = this.richText.get('repeatAnswerFreeText')['controls'].length ; i >= 1; i--) {
                                this.correctChoiceValue.push({
                                    correctAnswer : this.richText.get('repeatAnswerFreeText')['controls'][i - 1]['controls']['correct'].value,
                                    correctActive: '',
                                });
                            }
                        } else {
                            this.correctChoiceValue.push({
                                correctAnswer : this.writingAnswerEditor,
                                correctActive: '',
                            });
                        }
                        this.valid = true;
                        const minutes = this.richText.controls.minutes.value != '' ? this.richText.controls.minutes.value : '00';
                        const seconds = this.richText.controls.seconds.value != '' ? this.richText.controls.seconds.value : '00';

                        this.questionAnswer.push({
                            question_type_id: this.questionId,
                            editor_context: this.questionId == '20' ? this.contextValue : this.writingQuestionEditor,
                            options: [{isSelected: ''}],
                            multiple_response: '',
                            exact_match: '',
                            word_limit: '',
                            scoring_instruction: this.questionId == '55' ? this.richText.controls.scoring_instruction.value : '',
                            source: '',
                            target: '',
                            question: this.questionId == '20' ? this.writingQuestionEditor.content : this.writingQuestionEditor,
                            answer: this.correctChoiceValue,
                            points: this.richText.controls.points.value,
                            autograde: this.richText.controls.autograde.value == false ? 0 : 1,
                            hint: hintFinalArrayValue,
                            explanation: this.explanationEditorValue,
                            resource: this.resourceEditorValue,
                            question_id: this.questIdNo,
                            level: this.richText.controls.level.value,
                            subject_id: this.richText.controls.subject_id.value ?? '',
                            question_topic_id: this.richText.controls.question_topic_id.value ?? '',
                            skill: this.enteredSkillList,
                            question_standard: this.richText.controls.question_standard.value ?? '',
                            predicted_solving_time: minutes + ':' + seconds,
                            question_sub_topic_id: this.richText.controls.question_sub_topic_id.value ?? ''
                        });
                    }else {
                        this.toastr.error('Kindly enter valid points for the question');
                    }
                // } else {
                //     this.toastr.error('Sample Essay greater than or equal to ' + this.minimunWordValidation + ' words');
                // }
            }else {
                this.valid = false;
                if (this.questionId == '55') {
                    this.toastr.error('Please Fill the question');
                } else {
                    this.toastr.error('Please Fill the question & answer');
                }
            }
        }
        else if (type == 'plainText') {
            if (this.type == 'add'){
                this.questIdNo = '';
            }else if (this.type == 'edit'){
                this.questIdNo = this.questionEditData.question_id;
            }
            if (this.writingAnswerEditor.content != '' && this.writingQuestionEditor.content != '') {
                this.correctChoiceValue.push({
                    correctAnswer : this.writingAnswerEditor.content,
                    correctActive: '',
                });
                this.valid = true;
                this.questionAnswer.push({
                    question_type_id: this.questionId,
                    editor_context: this.contextValue,
                    options: [],
                    multiple_response: '',
                    exact_match: '',
                    word_limit: '',
                    scoring_instruction: '',
                    source: '',
                    target: '',
                    question: this.writingQuestionEditor.content,
                    answer: this.correctChoiceValue,
                    points: this.plainText.controls.points.value,
                    autograde: this.plainText.controls.autograde.value == false ? 0 : 1,
                    hint: hintFinalArrayValue,
                    explanation: this.explanationEditorValue,
                    resource: this.resourceEditorValue,
                    question_id: this.questIdNo,
                    level: this.plainText.controls.level.value
                });
            }else {
                this.valid = false;
                this.toastr.error('Please Fill the question & answer');
            }
        }
        else if (type == 'graphing') {
            if (this.graphQuestionEditor.content != '' && this.graphBoardValue) {
                let points: any;
                points = this.graphPoints;
                if (points != '' && points != '0'){
                    let objects = {};
                    for (let el in this.graphBoardValue.objects) {
                        let inherits = [];
                        this.graphBoardValue.objects[el].inherits.forEach((item) => {
                            inherits.push({name: item.name});
                        });
                        objects[el] = {
                            elType: this.graphBoardValue.objects[el].elType,
                            coords: this.graphBoardValue.objects[el].coords,
                            name: this.graphBoardValue.objects[el].name,
                            inherits,
                            parents: this.graphBoardValue.objects[el].parents,
                            splinePoints: this.graphBoardValue.objects[el].splinePoints,
                            quadraticform: this.graphBoardValue.objects[el].quadraticform,
                        };
                    }
                    let objectsArr = [];
                    objectsArr.push(objects);
                    console.log(objectsArr , 'objectsArr');
                    graph = {
                        attr: this.graphBoardValue.attr,
                        objects: objects
                    };
                    this.correctChoiceValue.push({
                        correctAnswer : stringify(graph),
                        correctActive: '',
                    });
                    this.valid = true;
                    const minutes = this.graphForm.controls.minutes.value != '' ? this.graphForm.controls.minutes.value : '00';
                    const seconds = this.graphForm.controls.seconds.value != '' ? this.graphForm.controls.seconds.value : '00';

                    this.questionAnswer.push({
                        question_type_id: this.questionId,
                        editor_context: '',
                        options: [],
                        multiple_response: '',
                        exact_match: '',
                        word_limit: '',
                        scoring_instruction: '',
                        source: '',
                        target: '',
                        question: this.graphQuestionEditor.content,
                        answer: this.correctChoiceValue,
                        hint: hintFinalArrayValue,
                        editor_answer: this.graphEditorAnswerVal.content,
                        explanation: this.explanationEditorValue,
                        resource: this.resourceEditorValue,
                        autograde: 0,
                        question_id: this.questionEditData?.question_id,
                        points: this.graphForm.controls.points.value,
                        subject_id: this.graphForm.controls.subject_id.value ?? '',
                        question_topic_id: this.graphForm.controls.question_topic_id.value ?? '',
                        skill: this.enteredSkillList,
                        predicted_solving_time: minutes + ':' + seconds,
                        question_standard: this.graphForm.controls.question_standard.value ?? '',
                        question_sub_topic_id: this.graphForm.controls.question_sub_topic_id.value ?? '',
                        level: this.graphForm.controls.level.value
                    });
                }else {
                    this.toastr.error('Kindly enter valid points for the question');
                }
            }else {
                this.valid = false;
                this.toastr.error('Please Fill the question & answer');
            }
        }
        else if (type == 'shortText') {
            if (this.type == 'add'){
                this.questIdNo = '';
            }else if (this.type == 'edit'){
                this.questIdNo = this.questionEditData.question_id;
            }
            if (this.writingAnswerEditor.content != '' && this.writingQuestionEditor.content != '') {
                this.correctChoiceValue.push({
                    correctAnswer : this.writingAnswerEditor.content,
                    correctActive: '',
                });
                this.valid = true;
                this.questionAnswer.push({
                    question_type_id: this.questionId,
                    editor_context: this.contextValue,
                    options: [],
                    multiple_response: '',
                    exact_match: '',
                    word_limit: '',
                    scoring_instruction: '',
                    source: '',
                    target: '',
                    question: this.writingQuestionEditor.content,
                    answer: this.correctChoiceValue,
                    points: this.shortText.controls.points.value,
                    hint: hintFinalArrayValue,
                    explanation: this.explanationEditorValue,
                    resource: this.resourceEditorValue,
                    level: this.shortText.controls.level.value,
                    autograde: this.shortText.controls.autograde.value == false ? 0 : 1,
                    question_id: this.questIdNo
                });
            }else {
                this.valid = false;
                this.toastr.error('Please Fill the question & answer');
            }
        }
        else if (type == 'textEntry') {
            if (this.type == 'add'){
                this.questIdNo = '';
            }else if (this.type == 'edit') {
                this.questIdNo = this.questionEditData.question_id;
            }
            if (this.textEntryPreview.content != '' && this.inputArray.length > 0) {
                for (let i = 0; i < this.inputArray.length; i++){
                    if (this.inputArray[i].options[0].value != ''){
                       this.multioption = true;
                    }else {
                        this.multioption = false;
                        break;
                    }
                }
                if (this.multioption){
                    if (this.textEntry.controls.points.value != '' && this.textEntry.controls.points.value != '0'){
                        this.valid = true;
                        for (let j = 0; j < this.textEntry['controls'].addHints['controls'].length; j++) {
                            this.addHintsValue.push({
                                hint: this.textEntry['controls'].addHints['controls'][j]['controls']['hint'].value
                            });
                        }
                        this.inputArray.forEach((item) => {
                            item.correctAnswer = item.value;
                            item.correctActive = '';
                        });

                        const minutes = this.textEntry.controls.minutes.value != '' ? this.textEntry.controls.minutes.value : '00';
                        const seconds = this.textEntry.controls.seconds.value != '' ? this.textEntry.controls.seconds.value : '00';

                        this.questionAnswer.push({
                            question_type_id: this.questionId,
                            editor_context: this.textEntryPreview.content,
                            question: this.textEntryPreview.content,
                            answer: this.inputArray,
                            multiple_response: '',
                            points: this.textEntry.controls.points.value,
                            editor_type: this.showTextEditor == 'eng' ? '1' : this.showTextEditor == 'math' ? '3' : '',
                            exact_match: '',
                            hint: hintFinalArrayValue,
                            explanation: this.explanationEditorValue,
                            resource: this.resourceEditorValue,
                            autograde: this.textEntry.controls.autograde.value == false ? 0 : 1,
                            word_limit: '',
                            options: this.inputArray,
                            scoring_instruction: '',
                            source: '',
                            target: '',
                            question_id: this.questIdNo,
                            level: this.textEntry.controls.level.value,
                            subject_id: this.textEntry.controls.subject_id.value ?? '',
                            question_topic_id: this.textEntry.controls.question_topic_id.value ?? '',
                            skill: this.enteredSkillList,
                            question_standard: this.textEntry.controls.question_standard.value ?? '',
                            predicted_solving_time: minutes + ':' + seconds,
                            question_sub_topic_id: this.textEntry.controls.question_sub_topic_id.value ?? ''
                        });
                    }else {
                        this.toastr.error('Kindly enter valid points for the question');
                    }
                }else {
                    this.toastr.error('Please Fill the answer');
                }
            }else {
                this.valid = false;
                this.toastr.error('Please Fill the question & Add input');
            }
        }
        else if (type == 'highligthPreview') {
            if (this.type == 'add'){
                this.questIdNo = '';
            }else if (this.type == 'edit') {
                this.questIdNo = this.questionEditData.question_id;
                if (this.writingQuestionEditor.content == '') {
                    this.writingQuestionEditor.content = this.questionEditData.question;
                }
                if (this.writingAnswerEditor.content == ''){
                    this.writingAnswerEditor.content = this.questionEditData.options[0].options;
                }
            }
                if (this.highlightEditor1.getContent() != '' && this.writingAnswerEditor.content != '' && this.writingQuestionEditor.content !=''){
                this.correctChoiceValue.push({
                    correctAnswer : this.highlightEditor1.getContent(),
                    correctActive: '',
                });
                if (this.highlight.controls.points.value != '' && this.highlight.controls.points.value != '0'){
                    this.valid = true;
                    this.questionAnswer.push({
                        question_type_id: this.questionId,
                        editor_context: this.writingQuestionEditor.content,
                        // this.writingQuestionEditor
                        // options: this.answerHighlightValue,
                        options: [{options: this.writingAnswerEditor.content, isSelected: ''}],
                        multiple_response: '',
                        exact_match: '',
                        word_limit: '',
                        scoring_instruction: '',
                        source: '',
                        target: '',
                        question: this.writingQuestionEditor.content,
                        answer: this.correctChoiceValue,
                        points: this.highlight.controls.points.value,
                        autograde: this.highlight.controls.autograde.value == false ? 0 : 1,
                        hint: hintFinalArrayValue,
                        explanation: this.explanationEditorValue,
                        resource: this.resourceEditorValue,
                        question_id: this.questIdNo,
                        level: this.highlight.controls.level.value
                    });
                }else {
                    this.toastr.error('Kindly enter valid points for the question');
                }
            }else {
                this.valid = false;
                this.toastr.error('Please fill all the mandatory field');
            }
        }
        else if (type == 'textDropDown') {
            if (this.type == 'add'){
                this.questIdNo = '';
            }else if (this.type == 'edit') {
                this.questIdNo = this.questionEditData.question_id;
            }
            if (this.questionValue.content != '' && this.fillDropDown['controls'].addDropDownOption.value.length > 0) {
                const dropdownAnswer1 = this.fillDropDown['controls'].addDropDownOption.value;
                let correctAnswer = true;
                let selectAnswer = false;
                let dropDownLength = true;
                for (let i = 0; i < dropdownAnswer1.length; i ++ ){
                    for (let k = 0; k < dropdownAnswer1[i].options.length; k++){
                        if (dropdownAnswer1[i].options[k].listOption == ''){
                            correctAnswer = false;
                            break;
                        }
                    }
                }
                for (let j = 0; j < dropdownAnswer1.length; j ++ ){
                    for (let l = 0; l < dropdownAnswer1[j].options.length; l++){
                        if (dropdownAnswer1[j].options.length == 1){
                            dropDownLength = false;
                            break;
                        }
                    }
                }
                for (let i = 0; i < dropdownAnswer1.length; i ++ ){
                    if (!selectAnswer && i != 0) {
                        break;
                    }
                    for (let k = 0; k < dropdownAnswer1[i].options.length; k++){
                        selectAnswer = false;
                        if (dropdownAnswer1[i].options[k].selected == 'true'){
                            selectAnswer = true;
                            break;
                        }
                    }
                }
                if (dropDownLength){
                    if (correctAnswer){
                        if (selectAnswer) {
                            if (this.fillDropDown.controls.points.value != '' && this.fillDropDown.controls.points.value != '0'){
                                this.valid = true;
                                for (let j = 0; j < this.fillDropDown['controls'].addHints['controls'].length; j++) {
                                    this.addHintsValue.push({
                                        hint: this.fillDropDown['controls'].addHints['controls'][j]['controls']['hint'].value
                                    });
                                }
                                const dropdownAnswer = this.fillDropDown['controls'].addDropDownOption.value;
                                dropdownAnswer.forEach((item) => {
                                    item.isSelected = '';
                                    item.options.forEach((item1) => {
                                        item1.correctAnswer = item1.listOption;
                                        item1.correctActive = item1.selected;
                                    });
                                });

                                const minutes = this.fillDropDown.controls.minutes.value != '' ? this.fillDropDown.controls.minutes.value : '00';
                                const seconds = this.fillDropDown.controls.seconds.value != '' ? this.fillDropDown.controls.seconds.value : '00';

                                this.questionAnswer.push({
                                    question_type_id: this.questionId,
                                    editor_context: this.questionValue.content,
                                    question: this.questionValue.content,
                                    answer: dropdownAnswer,
                                    multiple_response: '',
                                    points: this.fillDropDown.controls.points.value,
                                    editor_type: this.showTextEditor == 'eng' ? '1' : this.showTextEditor == 'math' ? '3' : '',
                                    exact_match: '',
                                    hint: hintFinalArrayValue,
                                    explanation: this.explanationEditorValue,
                                    resource: this.resourceEditorValue,
                                    autograde: this.fillDropDown.controls.autograde.value == false ?  0 : 1,
                                    word_limit: '',
                                    options: dropdownAnswer,
                                    scoring_instruction: '',
                                    source: '',
                                    target: '',
                                    question_id: this.questIdNo,
                                    level: this.fillDropDown.controls.level.value,
                                    subject_id: this.fillDropDown.controls.subject_id.value ?? '',
                                    question_topic_id: this.fillDropDown.controls.question_topic_id.value ?? '',
                                    skill: this.enteredSkillList,
                                    question_standard: this.fillDropDown.controls.question_standard.value ?? '',
                                    predicted_solving_time: minutes + ':' + seconds,
                                    question_sub_topic_id: this.fillDropDown.controls.question_sub_topic_id.value ?? ''
                                });
                            }else {
                                this.toastr.error('Kindly enter valid points for the question');
                            }
                        }else {
                            this.toastr.error('Please select one option for each dropdown');
                        }
                    }else {
                        this.toastr.error('Please enter all the option');
                    }
                }else {
                    this.toastr.error('Need atleast two option for each DropDown');
                }
            }else {
                this.valid = false;
                this.toastr.error('Please Fill the question & Add Dropdown');
            }
        }
        else if (type == 'passage') {
            let allowQuestion: boolean;
            let checked = true;
            allowQuestion = true;
            this.questIdNo = [];
            if (this.type == 'add'){
                this.quesNo = '';
            }else if (this.type == 'edit'){
                this.quesNo = this.questionEditData.question_id;
            }
            if (this.passage.controls.editorContext.value != ''){
                for (let i = 0; i < this.passage['controls'].addQuestionType['controls'].length; i++) {
                    this.multiSelect = this.passage['controls'].addQuestionType['controls'][i]['controls'];
                    if (this.type == 'add'){
                        this.questIdNo[i] = '';
                    }else if (this.type == 'edit') {
                        this.quesNo = this.questionEditData.question_no;
                        if (this.questionEditData.subQuestions[i]) {
                            this.questIdNo[i] = this.questionEditData.subQuestions[i].question_id;
                        } else {
                            this.questIdNo[i] = 0;
                        }
                    }
                    if (this.passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'MultiChoice') {
                        if (allowQuestion){
                            if (this.passageQuestionEditor[i].content != ''){
                                const dropdownAnswer1 = this.multiSelect.addMultipleChoice.value;
                                console.log(dropdownAnswer1, 'dropdownAnswer1');
                                for (let i = 0; i < dropdownAnswer1.length; i ++ ){
                                    this.multioption = true;
                                    if (dropdownAnswer1[i].option == ''){
                                        this.multioption = false;
                                        break;
                                    }
                                }
                                console.log(dropdownAnswer1, 'dropdownAnswer1');
                                for (let i = 0; i < dropdownAnswer1.length; i ++ ){
                                    this.multiselect = false;
                                    if (dropdownAnswer1[i].active == 1){
                                        this.multiselect = true;
                                        break;
                                    }
                                }
                                for (let j = 0; j < this.multiSelect.addMultipleChoice['controls'].length; j++) {
                                    this.addNewChoiceValue.push({
                                        options: this.multiSelect.addMultipleChoice['controls'][j]['controls']['option'].value,
                                        isSelected: ''
                                    });
                                }

                                for (let j = 0; j < this.multiSelect.addHints['controls'].length; j++) {
                                    this.addHintsValue.push({
                                        hint: this.multiSelect.addHints['controls'][j]['controls']['hint'].value
                                    });
                                }
                                for (let j = 0; j < this.multiSelect.addMultipleChoice['controls'].length; j++) {
                                    this.correctChoiceValue.push({
                                        correctAnswer: this.multiSelect.addMultipleChoice['controls'][j]['controls']['active'].value == '1' ?
                                            this.multiSelect.addMultipleChoice['controls'][j]['controls']['option'].value : '',
                                        correctActive: this.multiSelect.addMultipleChoice['controls'][j]['controls']['active'].value
                                    });
                                }
                                if (this.multioption){
                                    if (this.multiselect){
                                        if (this.multiSelect.points.value != '' && this.multiSelect.points.value != '0'){
                                            const minutes = this.multiSelect.minutes.value != '' ? this.multiSelect.minutes.value : '00';
                                            const seconds = this.multiSelect.seconds.value != '' ? this.multiSelect.seconds.value : '00';
                                            this.subQuestionAnswer.push({
                                                question_type_id: this.multiSelect.multiResponse.value == false ? 1 : 2,
                                                question: this.passageQuestionEditor[i].content,
                                                options: this.addNewChoiceValue,
                                                answer: this.correctChoiceValue,
                                                heading_option: [],
                                                multiple_response: this.multiSelect.multiResponse.value == false ? 0 : 1,
                                                autograde: this.multiSelect.autograde.value == false ? 0 : 1,
                                                points: this.multiSelect.points.value,
                                                exact_match: 0,
                                                hint: this.addHintsValue,
                                                explanation: this.multiSelect.explanation.value,
                                                word_limit: '',
                                                scoring_instruction: '',
                                                source: '',
                                                target: '',
                                                editor_type: this.multiSelect.chooseType.value == 'text' ? 1 : 3,
                                                question_id: this.questIdNo[i],
                                                level : this.multiSelect.level.value,
                                                subject_id: this.multiSelect.subject_id.value ?? '',
                                                question_topic_id: this.multiSelect.question_topic_id.value ?? '',
                                                skill: this.enteredSkillList,
                                                predicted_solving_time: minutes + ':' + seconds,
                                                question_standard: this.multiSelect.question_standard.value ?? '',
                                                question_sub_topic_id: this.multiSelect.question_sub_topic_id.value ?? '',
                                            });
                                            this.valid = true;
                                        } else {
                                            allowQuestion = false;
                                            this.valid = false;
                                            this.toastr.error('Kindly enter valid points for multi choice question');
                                            break;
                                        }
                                    } else {
                                        allowQuestion = false;
                                        this.valid = false;
                                        this.toastr.error('Please select the correct answer for multi choice question');
                                        break;
                                    }
                                } else {
                                    allowQuestion = false;
                                    this.valid = false;
                                    this.toastr.error('Please enter all the option for multi choice question');
                                    break;
                                }
                            }else {
                                allowQuestion = false;
                                this.valid = false;
                                this.toastr.error('Please fill the question for multi choice type');
                                break;
                            }
                        }else {
                            allowQuestion = false;
                            this.valid = false;
                            this.toastr.error('Please fill all the mandatory fields');
                            break;
                        }

                    }
                    else if (this.passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'TrueOrFalse') {
                        if (this.multiSelect.multiResponse.value == false) {
                            this.correctChoiceMatchValueSingle = [];
                            console.log(this.multiSelect.addMultipleChoice['controls'].length, 'length');
                            for (let l = 0; l < this.multiSelect.addMultipleChoice['controls'].length; l++) {
                                this.correctChoiceMatchValueSingle.push({
                                    correctOption: this.multiSelect.addMultipleChoice['controls'][l]['controls']['option'].value,
                                    correctAnswer: this.multiSelect.addMultipleChoice['controls'][l]['controls']['selectOption'].value,
                                    correctActive: this.multiSelect.addMultipleChoice['controls'][l]['controls']['active'].value
                                });
                            }
                        }
                        let dropdownAnswer1 = [];
                        dropdownAnswer1 = this.multiSelect.addMultipleChoice.value;
                        console.log(dropdownAnswer1, 'dropdownAnswer1');
                        console.log(this.correctChoiceMatchValue, 'correctChoiceMatchValue');
                        let optionEntered: boolean = true;
                        this.multiselect = this.multiSelect.multiResponse.value;
                        for (let i = 0; i < dropdownAnswer1.length; i ++ ){
                            this.multioption = true;
                            if ( dropdownAnswer1[i].option == ''){
                                this.multioption = false;
                                break;
                            }
                        }
                        console.log(this.correctChoiceMatchValueSingle, 'dropdownAnswer1');

                        this.multiSelect['addMatchTableChoose'].value.every((items) => {
                            console.log(items, 'items');
                            if (items.option.trim() == '') {
                                optionEntered = false;
                                return false;
                            }
                            return true;
                        });
                        if (this.multiSelect.multiResponse.value == false) {
                            for (let i = 0; i < this.correctChoiceMatchValueSingle.length; i ++ ){
                                this.multiselect = true;
                                if ( typeof (this.correctChoiceMatchValueSingle[i].correctActive) != 'number'){
                                    this.multiselect = false;
                                    break;
                                }
                            }
                        }

                        if (allowQuestion){
                            if (this.passageQuestionEditor[i].content != ''){
                                if (this.multioption){
                                    if (optionEntered){
                                        if (this.multiselect){
                                            if (this.multiSelect.points.value != '' && this.multiSelect.points.value != '0'){
                                                this.valid = true;
                                                for (let j = 0; j < this.multiSelect.addMultipleChoice['controls'].length; j++) {
                                                    this.addNewChoiceValue.push({
                                                        options: this.multiSelect.addMultipleChoice['controls'][j]['controls']['option'].value,
                                                        isSelected: ''
                                                    });
                                                }
                                                for (let j = 0; j < this.multiSelect.addHints['controls'].length; j++) {
                                                    this.addHintsValue.push({
                                                        hint: this.multiSelect.addHints['controls'][j]['controls']['hint'].value
                                                    });
                                                }
                                                for (let k = 0; k < this.multiSelect.addMatchTableChoose['controls'].length; k++) {
                                                    this.correctChoiceValue.push(
                                                        this.multiSelect.addMatchTableChoose['controls'][k]['controls']['option'].value,
                                                    );
                                                }
                                                if (this.multiSelect.multiResponse.value == true) {
                                                    for (let x = 0; x < this.addNewChoiceValue.length; x++) {
                                                        if (!checked) {
                                                            break;
                                                        }
                                                        checked = false;
                                                        console.log(this.correctChoiceMatchValue, 'this.correctChoiceMatchValue');
                                                        if (this.correctChoiceMatchValue.length != 0) {
                                                            for (let j = 0; j < this.correctChoiceMatchValue[i].sub.length; j++) {
                                                                if (x == this.correctChoiceMatchValue[i].sub[j].correctActive) {
                                                                    checked = true;
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (!checked) {
                                                        this.valid = false;
                                                        this.toastr.error('Please select the option for every row');
                                                        break;
                                                    }
                                                }
                                                const minutes = this.multiSelect.minutes.value != '' ? this.multiSelect.minutes.value : '00';
                                                const seconds = this.multiSelect.seconds.value != '' ? this.multiSelect.seconds.value : '00';
                                                this.subQuestionAnswer.push({
                                                    question_type_id: this.multiSelect.multiResponse.value == false ? 5 : 7,
                                                    question: this.passageQuestionEditor[i].content,
                                                    options: this.addNewChoiceValue,
                                                    answer: this.correctChoiceValue,
                                                    heading_option: this.multiSelect.multiResponse.value == true ? this.correctChoiceMatchValue[i].sub : this.correctChoiceMatchValueSingle,
                                                    multiple_response: this.multiSelect.multiResponse.value == false ? 0 : 1,
                                                    autograde: this.multiSelect.autograde.value == false ? 0 : 1,
                                                    points: this.multiSelect.points.value,
                                                    exact_match: 0,
                                                    hint: this.addHintsValue,
                                                    explanation: this.multiSelect.explanation.value,
                                                    word_limit: '',
                                                    scoring_instruction: '',
                                                    source: '',
                                                    target: '',
                                                    editor_type: this.multiSelect.chooseType.value == 'text' ? 1 : 3,
                                                    question_id: this.questIdNo[i],
                                                    level : this.multiSelect.level.value,
                                                    subject_id: this.multiSelect.subject_id.value ?? '',
                                                    question_topic_id: this.multiSelect.question_topic_id.value ?? '',
                                                    skill: this.enteredSkillList,
                                                    predicted_solving_time: minutes + ':' + seconds,
                                                    question_standard: this.multiSelect.question_standard.value ?? '',
                                                    question_sub_topic_id: this.multiSelect.question_sub_topic_id.value ?? '',
                                                });
                                            } else {
                                                allowQuestion = false;
                                                this.valid = false;
                                                this.toastr.error('Kindly enter valid points for True or False type question');
                                                break;
                                            }
                                        } else {
                                            allowQuestion = false;
                                            this.valid = false;
                                            this.toastr.error('Please select the option for True or False type');
                                            break;
                                        }
                                    } else {
                                        this.valid = false;
                                        allowQuestion = false;
                                        this.toastr.error('Please enter the multiple choice answer');
                                        break;
                                    }
                                } else {
                                    allowQuestion = false;
                                    this.valid = false;
                                    this.toastr.error('Please enter all the option for True or False type');
                                    break;
                                }

                            }else {
                                allowQuestion = false;
                                this.valid = false;
                                this.toastr.error('Please fill the question for True or False type');
                                break;
                            }
                        }
                        else {
                            allowQuestion = false;
                            this.valid = false;
                            this.toastr.error('Please fill all the mandatory fields');
                            break;
                        }
                    }
                    else if (this.passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'textEntry') {
                        for(let k = 0 ; k < this.inputArray[i].datas.length ; k ++){
                            this.multioption = true;
                            if (this.inputArray[i].datas[k].options[0].value == ''){
                                this.multioption = false;
                                break;
                            }
                        }
                        if (allowQuestion){
                            if (this.questionArray[i].content != '' && this.inputArray[i].datas.length > 0){
                                if (this.multioption){
                                    if (this.multiSelect.points.value != '' && this.multiSelect.points.value != '0'){
                                        for (let j = 0; j < this.multiSelect.addHints['controls'].length; j++) {
                                            this.addHintsValue.push({
                                                hint: this.multiSelect.addHints['controls'][j]['controls']['hint'].value
                                            });
                                        }
                                        this.valid = true;
                                        this.inputArray[i].datas.forEach((item) => {
                                            item.correctAnswer = item.value;
                                            item.correctActive = '';
                                        });
                                        const minutes = this.multiSelect.minutes.value != '' ? this.multiSelect.minutes.value : '00';
                                        const seconds = this.multiSelect.seconds.value != '' ? this.multiSelect.seconds.value : '00';

                                        this.subQuestionAnswer.push({
                                            question_type_id: 10,
                                            question: this.questionArray[i].content,
                                            answer: this.inputArray[i].datas,
                                            multiple_response: this.multiSelect.multiResponse.value == false ? 0 : 1,
                                            autograde: this.multiSelect.autograde.value == false ? 0 : 1,
                                            points: this.multiSelect.points.value,
                                            exact_match: this.multiSelect.ignoreCase.value == false ? 0 : 1,
                                            hint: this.addHintsValue,
                                            explanation: this.multiSelect.explanation.value,
                                            word_limit: '',
                                            options: this.inputArray[i].datas,
                                            scoring_instruction: '',
                                            source: '',
                                            target: '',
                                            editor_type: this.multiSelect.chooseType.value == 'text' ? 1 : 3,
                                            question_id: this.questIdNo[i],
                                            level : this.multiSelect.level.value,
                                            subject_id: this.multiSelect.subject_id.value ?? '',
                                            question_topic_id: this.multiSelect.question_topic_id.value ?? '',
                                            skill: this.enteredSkillList,
                                            predicted_solving_time: minutes + ':' + seconds,
                                            question_standard: this.multiSelect.question_standard.value ?? '',
                                            question_sub_topic_id: this.multiSelect.question_sub_topic_id.value ?? '',
                                        });
                                    }else {
                                        this.valid = false;
                                        allowQuestion = false;
                                        this.toastr.error('Kindly enter valid points for Text-Entry type question');
                                        break;
                                    }
                                }else {
                                    allowQuestion = false;
                                    this.valid = false;
                                    this.toastr.error('Please enter all the option for Text Entry type');
                                    break;
                                }
                            }else {
                                allowQuestion = false;
                                this.valid = false;
                                this.toastr.error('Please Fill the question & Add text entry input');
                                break;
                            }

                        }else {
                            allowQuestion = false;
                            this.valid = false;
                            this.toastr.error('Please fill all the mandatory fields');
                            break;
                        }
                    }
                    else if (this.passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'essay') {
                        for (let j = 0; j < this.multiSelect.addHints['controls'].length; j++) {
                            this.addHintsValue.push({
                                hint: this.multiSelect.addHints['controls'][j]['controls']['hint'].value
                            });
                        }
                        const checkAllAnswerEntered = !this.multiFreeAnswerEditor.some(code => code.content == '');
                        const answer = [];
                        this.multiFreeAnswerEditor.forEach(items => answer.push({correctAnswer : items.content}));
                        if (checkAllAnswerEntered) {
                            this.valid = true;
                            const minutes = this.multiSelect.minutes.value != '' ? this.multiSelect.minutes.value : '00';
                            const seconds = this.multiSelect.seconds.value != '' ? this.multiSelect.seconds.value : '00';
                            this.subQuestionAnswer.push({
                                question_type_id: 20,
                                question: this.passageQuestionEditor[i].content,
                                options: [],
                                answer,
                                heading_option: [],
                                multiple_response: 0,
                                points: this.multiSelect.points.value,
                                exact_match: 0,
                                hint: this.addHintsValue,
                                explanation: this.multiSelect.explanation.value,
                                autograde: this.multiSelect.autograde.value == false ? 0 : 1,
                                word_limit: '',
                                scoring_instruction: '',
                                source: '',
                                target: '',
                                editor_type: 3,
                                question_id: this.questIdNo[i],
                                level : this.multiSelect.level.value,
                                subject_id: this.multiSelect.subject_id.value ?? '',
                                question_topic_id: this.multiSelect.question_topic_id.value ?? '',
                                skill: this.enteredSkillList,
                                predicted_solving_time: minutes + ':' + seconds,
                                question_standard: this.multiSelect.question_standard.value ?? '',
                                question_sub_topic_id: this.multiSelect.question_sub_topic_id.value ?? '',
                            });
                        }
                        else {
                            this.toastr.error('Please fill the Answer');
                            this.valid = false;
                        }
                    }
                    else if (this.passage['controls'].addQuestionType['controls'][i]['controls'].selectType.value == 'sortList') {
                        for (let i = 0; i < this.multiSelect.addMultipleChoice['controls'].length; i++) {
                            this.addNewChoiceValue.push({
                                options: this.multiSelect.addMultipleChoice['controls'][i]['controls']['option'].value
                            });
                        }
                        for (let j = 0; j < this.multiSelect.addHints['controls'].length; j++) {
                            this.addHintsValue.push({
                                hint: this.multiSelect.addHints['controls'][j]['controls']['hint'].value
                            });
                        }
                        for (let k = 0; k < this.multiSelect.addMultipleChoose['controls'].length; k++) {
                            this.correctChoiceValue.push({
                                correctAnswer: this.multiSelect.addMultipleChoose['controls'][k]['controls']['selectOption'].value,
                                correctActive: ''
                            });
                        }
                        if (this.passageQuestionEditor[i].content != ''){
                            this.valid = true;
                            const minutes = this.multiSelect.minutes.value != '' ? this.multiSelect.minutes.value : '00';
                            const seconds = this.multiSelect.seconds.value != '' ? this.multiSelect.seconds.value : '00';
                            this.subQuestionAnswer.push({
                                question_type_id: 16,
                                question: this.passageQuestionEditor[i].content,
                                answer: this.correctChoiceValue,
                                multiple_response: '',
                                points: this.multiSelect.points.value,
                                editor_type: this.multiSelect.chooseType.value,
                                exact_match: '',
                                hint: this.addHintsValue,
                                explanation: this.multiSelect.explanation.value,
                                word_limit: '',
                                options: this.addNewChoiceValue,
                                scoring_instruction: '',
                                source: this.multiSelect.source.value,
                                target: this.multiSelect.target.value,
                                question_id: this.questIdNo[i],
                                level : this.multiSelect.level.value,
                                subject_id: this.multiSelect.subject_id.value ?? '',
                                question_topic_id: this.multiSelect.question_topic_id.value ?? '',
                                skill: this.enteredSkillList,
                                predicted_solving_time: minutes + ':' + seconds,
                                question_standard: this.multiSelect.question_standard.value ?? '',
                                question_sub_topic_id: this.multiSelect.question_sub_topic_id.value ?? '',
                            });
                        }else {
                            this.valid = false;
                            this.toastr.error('Please fill the question & sort list');
                        }
                    }
                    this.addNewChoiceValue = [];
                    this.addHintsValue = [];
                    this.correctChoiceValue = [];
                    this.correctChoiceMatchValueSingle = [];
                }
                if (this.subQuestionAnswer.length != 0 || this.multiSelect.selectType.value != 'select'){
                    // this.listPassageDetails.forEach((items) => {
                    //     if (this.passage.controls.passage_id.value == items.passage_id) {
                    //         this.passage.controls.editorContext.patchValue(items.passage);
                    //     }
                    // });
                    this.questionAnswer = [{
                        question_type_id: this.questionId,
                        question_no: this.quesNo,
                        editor_context: this.passage.controls.editorContext.value,
                        passage_id: this.passage.controls.passage_id.value,
                        subQuestions: this.subQuestionAnswer
                    }];
                }else {
                    this.toastr.error('Select atleast one type of question for passage');
                }
            }else {
                this.toastr.error('Please select the editor Content');
            }
        } else {
            // Type not recognized
            console.error('Question type not recognized:', type);
            this.toastr.error('Question type not recognized. Please try again.');
            this.valid = false;
        }
        console.log(this.questionAnswer, 'this.questionAnswer');
        console.log('this.valid:', this.valid, 'type:', type);
        console.log('editData:', this.editData);
        if (this.valid){
            // Get content_id from editData, handling different possible field names
            const contentId = this.editData?.content_id || this.editData?.contentId || this.editData?.id || '';
            
            if (!contentId) {
                console.error('Content ID is missing. editData:', this.editData);
                this.toastr.error('Content ID is missing. Please go back and try again.');
                this.valid = false;
                return;
            }
            
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                content_id: contentId,
                questions: this.questionAnswer,
                content_format: '3'
                // board: graph.objects
            };
            console.log(data, 'data');
            if (this.type == 'add') {
                this.creator.addQuestions(data).subscribe((successData) => {
                    this.saveQuestionsSuccess(successData, redirectType);
                }, (error) => {
                    console.error(error, 'error_question');
                    this.saveQuestionsFailure();
                });
            } else if (this.type == 'edit') {
                this.creator.editQuestion(data).subscribe((successData) => {
                    this.saveQuestionsSuccess(successData, redirectType);
                }, (error) => {
                    console.error(error, 'error_question');
                    this.saveQuestionsFailure();

                });
            }
        } else {
            this.questionAnswer = [];
            this.addNewChoiceValue = [];
            this.correctChoiceValue = [];
            this.addHintsValue = [];
        }
    }

    saveQuestionsSuccess(successData, redirectType) {
        if (successData.IsSuccess) {
            this.questionData = successData.ResponseObject;
            this.toastr.success(this.questionData);
            const qnsNo = parseInt(this.qnsNo) + 1;
            this.qnsNo = qnsNo.toString();
            if (redirectType == 'same'){
                window.scrollTo({top: 0, behavior: 'smooth'});
                this.auth.setSessionData('cfs_question_no', this.qnsNo);
                this.formSetValue(redirectType);
            } else if (redirectType == 'list') {
                this.auth.setSessionData('cfs_question_no', this.qnsNo);
                this.router.navigate(['/content-text-resource/add-questions/add']);
            } else {
                // Ensure session data is preserved before navigating
                if (this.editData && this.editData.content_id) {
                    this.auth.setSessionData('textAssignValue', JSON.stringify(this.editData));
                    this.auth.setSessionData('editresources', JSON.stringify(this.editData));
                }
                this.router.navigate(['content-text-resource/text-assignment/qEdit']);
            }
        }
    }

    saveQuestionsFailure() {
        this.questionAnswer = [];
        this.addNewChoiceValue = [];
        this.correctChoiceValue = [];
        this.addHintsValue = [];
    }

    // Match & Order > Sort List start

    dropped(event: CdkDragDrop<string[]>) {
        const controlmultiple = <any> this.matchSort.get('addMultipleChoice');
        moveItemInArray(controlmultiple.controls, event.previousIndex, event.currentIndex);
    }

    droppedCorrect(event: CdkDragDrop<string[]>) {
        const control = <any> this.matchSort.get('addMultipleChoose');
        moveItemInArray(control.controls, event.previousIndex, event.currentIndex);
    }

    // droppedSource(event: CdkDragDrop<string[]>) {
    //     let control = <any> this.matchSort.get('matchSortSource');
    //     moveItemInArray(control.data, event.previousIndex, event.currentIndex);
    // }

    droppedTarget(event: CdkDragDrop<string[]>) {
        // let control = <any> this.matchSort.get('matchSortSource');
        const control = <any>this.targetArr;
        moveItemInArray(control, event.previousIndex, event.currentIndex);
    }

    checkAnswer(){
        this.targetArr1.forEach( (item , index) => {
            if (item.value == this.targetArr[index].value){
                this.targetArr[index].valid = '1';
            } else {
                this.targetArr[index].valid = '2';
            }
        });
    }

    // checkPassageAnswer(){
    //     this.targetPassageArr1.forEach( (item , index) => {
    //         if (item.value == this.targetPassageArr[index].value){
    //             this.targetPassageArr[index].valid = '1';
    //         }else {
    //             this.targetPassageArr[index].valid = '2';
    //
    //         }
    //     });
    //
    // }

    // Match & Order > Sort List End

    droppedPassage(event: CdkDragDrop<string[]>, id) {
        this.multiSelect = this.passage['controls'].addQuestionType['controls'][id]['controls'] as FormArray;
        const control = <any> this.multiSelect.addMultipleChoose;
        const controlmultiple = <any> this.multiSelect.addMultipleChoice;
        moveItemInArray(control.controls, event.previousIndex, event.currentIndex);
        moveItemInArray(controlmultiple.controls, event.previousIndex, event.currentIndex);
    }

    droppedCorrectPassage(event: CdkDragDrop<string[]>, id) {
        this.multiSelect = this.passage['controls'].addQuestionType['controls'][id]['controls'] as FormArray;
        const control = <any> this.multiSelect.addMultipleChoose;
        moveItemInArray(control.controls, event.previousIndex, event.currentIndex);
    }

// Text Entry Code Start Here

    textarea(type) {
        if (type == 'selected') {
            this.textbutton = true;
        } else if (type == 'unselected') {
            this.textbutton = false;
        }
    }

    keyupPassageHandlerFunction(event, id){
        this.random = this.getRandom();
        this.passageQuestionEditor[id] = event;
        this.questionArray[id] = event;
        this.questionArray1 = event.content;
        this.fillValue = event.content;
        let val = event.content.split(' ');
        this.inputCountPassage = 0;
        if (this.inputArray[id]) {

        } else {
            this.inputArray[id] = {datas: []};
        }
        this.dropDownArray = [];
        val.forEach((item , index) => {
            if (item == 'class="inputValue"'){
                this.inputCountPassage += 1;
                if (this.inputCountPassage > this.inputArray[id].datas.length) {
                    this.inputArray[id].datas.push({options: [{id: index + '-input', index, value: ''}], isSelected: ''});
                }
            }
        });
        const spl = this.inputArray[id].datas.length - this.inputCountPassage;
        if (spl > 0) {
            this.inputArray[id].datas.splice(this.inputArray[id].datas.length - 1, spl);
        }
    }

    clickEvent(){
        if (!this.mathDelayer) {
            this.mathDelayer = true;
            setTimeout( () => {
                document.getElementById('myDiv').click();
            } , 1000);
        }
        setTimeout(() => {
            this.mathDelayer = false;
        }, 1500);
    }

    keyupHandlerFunction(event){
        this.contextValue = event.content;
        this.fillValue = event.content;
        this.textEntryPreview = event;
        this.questionValue = event;
        let val = event.content.split(' ');
        this.inputCount = 0;
        this.dropDownCount = 0;
        this.dropDownArray = [];
        if (this.inputArray){
        }else {
            this.inputArray = [];
        }
        val.forEach((item , index) => {
            if (item == 'class="inputValue"'){
                this.inputCount += 1;
                if (this.inputCount > this.inputArray.length){
                    this.inputArray.push({options: [{id : index + '-input' , index , value: ''}], isSelected: ''});
                }
            }else if (item == 'class="dropDownValue"'){
                this.dropDownCount += 1;
                this.dropDownArray.push({options: [{id : index + '-input' , index , value: ''}], isSelected: ''});
            }
        });

        const spl = this.inputArray.length - this.inputCount;
        if (spl != 0) {
            this.inputArray.splice(this.inputArray.length - 1, spl);
        }
        if (this.addDropDownArr.controls.length == 0){
            for (let i = 0; i < this.dropDownCount; i++){
                this.addDropDownArr.push(this.createAddDropDownOption());
            }
            if (this.dropDownCount == 0 && this.addDropDownArr.controls.length){
                this.addDropDownArr.removeAt(0);

            }
        } else {
            const dif = this.dropDownArray.length - this.addDropDownArr.controls.length;
            for (let i = 0; i < dif; i++){
                this.addDropDownArr.push(this.createAddDropDownOption());
            }
            if (Math.sign(dif) == -1){
                for (let i = 0; i < Math.abs(dif); i++){
                    this.addDropDownArr.removeAt(this.addDropDownArr.length - 1);
                }
            }
        }
    }

    getRandrom(){
        return Math.random() + 'editor';
    }

    getRandromGraph(){
        if (this.graphBoardValue?.container){
            return this.graphBoardValue.container;
        } else {
            return Math.random() + 'box1';
        }
    }

    getRandromPreviewGraph(){
        if (this.graphBoardPreviewValue?.container){
            return this.graphBoardPreviewValue.container;
        } else{
            return Math.random() + 'box1';
        }
    }


    patchEditor(array , index , index2 , event){
        // array.value  ==
        Object.keys(array.controls).forEach(key => {
            console.log(key , 'kkey');
            if (key == index){
                // this.fillDropDown['controls'].addDropDownOption['controls'][0]['controls'].option1['controls'][0]['controls'].value
                console.log(array.controls[key] , 'kkeys');

                this.fillDropDown['controls'].addDropDownOption['controls'][index2]['controls'].options['controls'][key]['controls'].listOption.patchValue(event.content);
            }
        });

        console.log(this.fillDropDown  ,  'fillDropDown');
    }

    submitInput(array , index , index2){
        // array.value  ==
        console.log(array ,'arrr')
        console.log( this.fillDropDown['controls'].addDropDownOption['controls'][0]['controls'].options['controls'][0]['controls'].selected.value  ,'s');
        Object.keys(array.controls).forEach(key => {
            console.log(key , 'kkey');
            if (key == index){
                // this.fillDropDown['controls'].addDropDownOption['controls'][0]['controls'].option1['controls'][0]['controls'].value
                console.log(array.controls[key] , 'kkeys');

                this.fillDropDown['controls'].addDropDownOption['controls'][index2]['controls'].options['controls'][key]['controls'].selected.patchValue('true');
            }else{
                this.fillDropDown['controls'].addDropDownOption['controls'][index2]['controls'].options['controls'][key]['controls'].selected.patchValue('false');

                // array.control.patchValue(false);
            }
        });
        console.log(array  ,  'array');
        console.log(index  ,  'index');
        console.log(this.inputArray  ,  'arrr');
        console.log(this.dropDownArray  ,  'dropDownArray');
    }

    appendInput1() {
        // var container = document.getElementById('container_input');
        // // container.innerHTML = '';
        // container.innerHTML = this.setAns;
        // console.log(container , 'container');
        // this.setAns.forEach((item, index) => {
        //     if (item == '$') {
        //         var container = document.getElementById('container_input');
        //         var input = document.createElement('input');
        //         input.type = 'text';
        //         input.id = 'question-' + index;
        //         input.name = 'question-' + index;
        //         input.setAttribute('value', '');
        //         console.log(input, 'input');
        //         container.appendChild(input);
        //     } else if (item != '' && item != ' $ ') {
        //         var container = document.getElementById('container_input');
        //         var dateSpan = document.createElement('span');
        //         dateSpan.id = 'question-' + index;
        //         dateSpan.className = 'ml-2';
        //
        //         dateSpan.innerHTML = item;
        //         console.log(input, 'input');
        //         container.appendChild(dateSpan);
        //     }
        // });
        // return input;
    }


    changeInput() {
        let arr = [];
        this.setAns = '';
        let value = this.textEntry.controls.text.value;
        this.setAns = value.split(' ');
        console.log(this.setAns, 'arr');
        this.appendInput();
        // this.setAns = this.textEntry.controls.text.value.replace("$", '<input placeholder="kkk">');
    }

    appendInput() {
        var container = document.getElementById('container_input');
        container.innerHTML = '';
        this.setAns.forEach((item, index) => {
            if (item == '$') {
                var container = document.getElementById('container_input');
                var input = document.createElement('input');
                input.type = 'text';
                input.id = 'question-' + index;
                input.name = 'question-' + index;
                input.setAttribute('value', '');
                console.log(input, 'input');
                container.appendChild(input);
            } else if (item != '' && item != ' $ ') {
                var container = document.getElementById('container_input');
                var dateSpan = document.createElement('span');
                dateSpan.id = 'question-' + index;
                dateSpan.className = 'ml-2';

                dateSpan.innerHTML = item;
                console.log(input, 'input');
                container.appendChild(dateSpan);
            }
        });
        // return input;
    }

    getEmitedValue(event){
        this.markType = event;
        console.log(event , 'evet emited');
    }
    getEmitedPrevValue(event){
        // this.markType = event;
        console.log(event , 'evet getEmitedPrevValue emited');
    }
    getGraphValue(event){
        this.graphBoardValue = event;
        console.log(event , 'evet emited d');
        console.log(typeof event , 'typeee of evet emited d');
        console.log(this.graphBoardValue , 'graphBoardValuevalue');
    }
    getGraphPrevewValue(event){
        this.graphBoardPreviewValue = '';
        this.graphBoardPreviewValue = event;
        console.log(event , 'evet  getGraphPrevewValue emited d');
        console.log(typeof event , 'typeee  getGraphPrevewValueof evet emited d');
    }

    getGraphQuestionValue(event , questionid){
        this.graphQuestionEditor = event;
    }
    getGraphEditorAnswerValue(event) {
        this.graphEditorAnswerVal = event;
    }

    getPassageAddEditorValue(event) {
        this.addPassageContent = event;
        // this.passageContent = event;
        this.passageForm.controls.passageEditor.patchValue(event.content)
    }

    getEditorValue(event){
        this.multiQuestionEditor = event;
        this.editorEvent = event.content;
        this.fillValue = event.content;
        this.keyupHandlerFunction(event);
    }

    getPassageInputEditorValue(event, id){
        // this.editorEvent = event;
        this.keyupPassageHandlerFunction(event, id);
    }
    getEditorValue1(event , data){
        console.log(event , 'eventttt');
        data.options[0].value = event.content;
        // data.value = this.fillValue;
        // this.editorEvent = event;
        // this.keyupHandlerFunction(event);
    }

    getResourceEditor(event) {
        this.resourceEditorContentValue = event.editor;
        this.resourceEditorValue = event.content;
    }

    getExplanationEditor(event) {
        this.explanationEditorContentValue = event.editor;
        this.explanationEditorValue = event.content;
    }

    getPassageExplanationEditor(event, index) {
        this.passage['controls'].addQuestionType['controls'][index]['controls'].explanation.patchValue(event.content);
    }

    getHintEditor(event, index) {
        this.hintArrayEditor[index] = event.editor;
        this.hintArray[index].hint = event.content;
    }

    getPassageHintEditor(event, passageIndex, hintIndex) {
        this.passage['controls'].addQuestionType['controls'][passageIndex]['controls'].addHints['controls'][hintIndex]['controls'].hint.patchValue(event.content);
    }

    getEditorMultipleChoice(event) {
        this.multiQuestionEditor = event;
        this.questionValue = event.content;
    }

    getEditorMatchSort(event) {
        this.matchSortEditor = event;
        this.questionValue = event.content;
    }

    multiAnswerFreeText(event, index, reverseIndex, passageIndex = 0) {
        if (this.questionId == '24') {
            if (this.passage['controls'].addQuestionType['controls'][passageIndex]['controls']['repeatAnswerFreeText']['controls'][index]) {
                console.log('service Called')
                this.multiFreeAnswerEditor[reverseIndex - 1] = event;
                this.passage['controls'].addQuestionType['controls'][passageIndex]['controls']['repeatAnswerFreeText']['controls'][index]?.controls['correct'].patchValue(event.content);
            }
        } else {
            if (this.richText['controls'].repeatAnswerFreeText['controls'][index]) {
                this.multiFreeAnswerEditor[reverseIndex - 1] = event;
                this.richText['controls'].repeatAnswerFreeText['controls'][index]?.controls['correct'].patchValue(event.content);
            }
        }
        console.log(this.multiFreeAnswerEditor)
    }

    getEditorContextValue(event, id, type){
        this.EditorkeyupHandlerFunction(event, id, type);
    }

    getFreeText() {
        console.log('FunctionCalled');
        if (this.answerHighlightValue1){
            this.answerHighlightValue1.setContent(this.writingAnswerEditor.content);
            console.log(this.answerHighlightValue1, 'highLight');
        }
    }

    getEditorContextValue1(event, id, type){
        if (this.highlightEditor1){
            this.highlightEditor1.setContent(event.content);
        }
        // this.answerValue = event.content;
        this.EditorkeyupHandlerFunction(event, id, type);
        // this.highlightEditor1.setContent(event.content);
    }

    async getEditorContextValue2(event, id, type){
        this.highlightEditor1 = await event.editor;
        this.EditorkeyupHandlerFunction(event, id, type);
    }

    EditorkeyupHandlerFunction(event, id, type){
        if (type == 'editorContext') {
            this.writingQuestionEditor = event;
            this.contextValue = event.content;
            this.richPreviewValue = event.content;
            if (['20', '55'].indexOf(this.questionId) > -1){
                this.richPreviewValue = event.content;
            }else if (this.questionId == '21') {
                this.plainPreviewValue = event.content;
            }else if (this.questionId == '22') {
                this.shortPreviewValue = event.content;
            }else if (this.questionId == '9' || this.questionId == '10'){
                this.fillValue = event.content;
            } else if (this.questionId == '24'){
                this.contextValue = event.content;
            }else if (this.questionId == '28'){
                this.answertValue = event.content;
            }
        }
        else if (type == 'question') {
            this.multiQuestionEditor = event;
            this.questionValue = event;
            this.keyupHandlerFunction(event);
        }
        else if (type == 'answer') {
            this.writingAnswerEditor = event;
            this.answerValue = event.content;
            console.log(this.answerValue, 'answervalue');
            this.answerHighlightValue1 = event.editor;
        }else if (type == 'highlight'){
            this.answerHighlightValue = event.content;
        }
    }

    cfsDropdownPreview(id, val) {
        document.getElementById('dropdownPre' + id).innerHTML = val;
        this.clickEvent();
    }

    changeEditor(event){
        console.log(event.target.value , 'event.target.value');
        console.log(event , 'value');
        this.showTextEditor = event.target.value;
        console.log(this.showTextEditor , 'this.showTextEditor');
    }

    selectedEditorType(event, calledFrom = '', formControl?) {
        if (calledFrom == '') {
            this.inputType = event.target.checked ? 'math' : 'text';
        } else if (calledFrom == 'showTextEditor') {
            this.showTextEditor = event.target.checked ? 'math' : 'eng';
        } else if (['passageEditor', 'passageEditor_eng'].indexOf(calledFrom) > - 1) {
            console.log(formControl, 'formControl_chooseType');
            console.log(event.target.checked, 'checked');
            formControl.controls.chooseType.patchValue(event.target.checked ? 'math' : calledFrom == 'passageEditor_eng' ? 'eng' : 'text');
        }
    }

    questionDelete(id){
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            question_id: [this.questionEditData.subQuestions[id].question_id],
        };
        console.log(data, 'data');
        this.creator.contentDelete(data).subscribe((successData) => {
                console.log(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    async getOptionValue(event, id, type, index) {
        console.log(event, 'event');
        let val = event.content;
        if (type == 'option') {
            this.inputEditorArray[index] = event.editor;
            this.optionArray[index] = {options: val, isSelected: ''};
            if (id == '1' || id == '2') {
                this.multipleChoice.get('addMultipleChoice')['controls'][index]['controls']['option'].patchValue(val);
            } else {
                this.matchTable.get('addMultipleChoice')['controls'][index]['controls']['option'].patchValue(val);
            }
            if (document.getElementById('myId' + index)){
                console.log(document.getElementById('myId' + index) , 'document');
                document.getElementById('myId' + index).innerHTML = val;
            }
            if (this.questionEditData) {
                if (this.questionEditData.options[index].options != val) {
                    this.clickEvent();
                } else if (this.questionEditData.options.length == index + 1) {
                    this.clickEvent();
                }
            } else {
                this.clickEvent();
            }
        } else if (type == 'chooseType') {
            this.chooseArray[index] = val;
            this.chooseEditorArray[index] = event;
            this.matchTable.get('addMatchTableChoose')['controls'][index]['controls']['option'].patchValue(val);
            console.log(this.chooseArray, 'chooseArrya');
            if (document.getElementById('columnId' + index)) {
                document.getElementById('columnId' + index).innerHTML = val;
            }
            if (this.questionEditData) {
                if (this.questionEditData.answer[index] != val) {
                    this.clickEvent();
                } else if (this.questionEditData.answer.length == index + 1) {
                    this.clickEvent();
                }
            } else {
                this.clickEvent();
            }
        }
    }
    getPassageOptionValue(event, id, type, index, add , array) {
        let val = event.content;
        if (type == 'multiOption') {
            this.subPassageMulti[index] = event;
            Object.keys(array.controls).forEach(key => {
                if (key == index){
                    this.passage['controls'].addQuestionType['controls'][add]['controls'].addMultipleChoice['controls'][index]['controls'].option.patchValue(event.content);
                }
            });
            this.passageMultiEditor[add] = {sub: this.subPassageMulti};
            if (document.getElementById('multiOptionId' + add.toString() + index.toString())){
                console.log(document.getElementById('multiOptionId' + add.toString() + index.toString()) , 'document');
                document.getElementById('multiOptionId' + add.toString() + index.toString()).innerHTML = event.content;
            }
            if (this.questionEditData) {
                if (this.questionEditData.subQuestions[add].options[index].options != val) {
                    this.clickEvent();
                } else if (this.questionEditData.subQuestions[add].options.length == index + 1) {
                    this.clickEvent();
                }
            } else {
                this.clickEvent();
            }
        } else if (type == 'chooseRow') {
            this.subPassageRow[index] = event;
            Object.keys(array.controls).forEach(key => {
                if (key == index){
                    this.passage['controls'].addQuestionType['controls'][add]['controls'].addMultipleChoice['controls'][index]['controls'].option.patchValue(event.content);
                }
            });
            console.log(this.passage['controls'].addQuestionType['controls'][add]['controls'].addMultipleChoice['controls'], 'patch');
            this.passageMultiEditor[add] = {row: this.subPassageRow, column: ''};
            if (this.questionEditData) {
                if (this.questionEditData.subQuestions[add].options[index].options != val) {
                    this.clickEvent();
                } else if (this.questionEditData.subQuestions[add].options.length == index + 1) {
                    this.clickEvent();
                }
            } else {
                this.clickEvent();
            }
        } else if (type == 'chooseColumn') {
            this.subPassageColumn[index] = event;
            Object.keys(array.controls).forEach(key => {
                if (key == index){
                    this.passage['controls'].addQuestionType['controls'][add]['controls'].addMatchTableChoose['controls'][index]['controls'].option.patchValue(event.content);
                }
            });
            this.passageMultiEditor[add].column = this.subPassageColumn;
            if (this.questionEditData) {
                if (this.questionEditData.subQuestions[add].answer[index] != val) {
                    this.clickEvent();
                } else if (this.questionEditData.subQuestions[add].answer.length == index + 1) {
                    this.clickEvent();
                }
            } else {
                this.clickEvent();
            }
            // if (document.getElementById('columnId' + add.toString() + index.toString())) {
            //     document.getElementById('columnId' + add.toString() + index.toString()).innerHTML = event.content;
            // }
        } else if (type == 'sortChoose') {
            Object.keys(array.controls).forEach(key => {
                console.log(key , 'kkey');
                if (key == index){
                    // this.fillDropDown['controls'].addDropDownOption['controls'][0]['controls'].option1['controls'][0]['controls'].value
                    console.log(array.controls[key] , 'kkeys');
                    this.passage['controls'].addQuestionType['controls'][add]['controls'].addMultipleChoice['controls'][index]['controls'].option.patchValue(event.content);
                    this.passage['controls'].addQuestionType['controls'][add]['controls'].addMultipleChoose['controls'][index]['controls'].selectOption.patchValue(event.content);
                }
            });
            if (document.getElementById('input' + add.toString() + 'math' + index.toString())) {
                document.getElementById('input' + add.toString() + 'math' + index.toString()).innerHTML = event.content;
            }
        } else if (type == 'question') {
            this.passageQuestionEditor[add] = event;
            this.questionArray[add] = val;
        }
    }

    // getPassageEssayValue(event, index) {
    //     this.passageAnswer[index] = [{correctAnswer: event.content}];
    // }

    addHintsArray() {
        this.hintArray.push({hint: ''});
    }

    removeHintArray(index){
        this.hintArray.splice(index, 1);
    }

    createNewCorrectAnswer(value = '') {
        return this.formBuilder.group({
            correct: value,
        });
    }

    addNewCorrectAnswerForFreeText(data, value = '') {
        this.repeatAnswerFreeText = data as FormArray;
        this.repeatAnswerFreeText.insert(0, this.createNewCorrectAnswer(value));
    }

    deleteCorrectAnswerForFreeText(array, index, reverseIndex, passageIndex = 0) {
        this.repeatAnswerFreeText = array as FormArray;
        this.repeatAnswerFreeText.removeAt(index);
        if (this.type == 'edit' && this.questIdNo == '20') {
            this.questionEditData.answer.splice(reverseIndex - 1, 1);
        } else if (this.type == 'edit' && this.questIdNo == '24') {
            this.questionEditData.subQuestions[passageIndex].answer.splice(reverseIndex - 1, 1);
        }
        this.multiFreeAnswerEditor.splice(reverseIndex - 1, 1);
    }

    passageCREDService(type) {
        if (type == 'add' && !this.passageForm.valid) {
            this.toastr.error('Kindly Fill all the fields');
            return false;
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };

        if (type == 'add' || type == 'edit') {
            data['title'] = this.passageForm.controls.title.value;
            data['passage'] = type == 'add' ? this.addPassageContent.content : this.passageContent.content;
            data['status'] = '1';
            type == 'edit' ? data['passage_id'] = this.passage.controls.passage_id.value : '';
        } else if (type == 'list' && this.type == 'edit') {
            this.questionEditData = JSON.parse(this.auth.getSessionData('questionData'));
            data['passage_id'] = this.passage.controls.passage_id.value == '' ? (this.questionEditData.subQuestions[0]?.passage_id ?? '') : this.passage.controls.passage_id.value;
        }

        this.contentDetail.passageAllService(data, type).subscribe((successData) => {
                this.passageCREDSuccess(successData, type);
            },
            (error) => {
                console.error(error, 'error');
            });
    }

    passageCREDSuccess(successData, type) {
        if (successData.IsSuccess) {
            if (type == 'list') {
                this.listPassageDetails = successData.ResponseObject;
                const passage_id = this.passage.controls.passage_id.value == '' ? (this.questionEditData?.subQuestions[0]?.passage_id ?? '') : this.passage.controls.passage_id.value;
                console.log(passage_id, 'passage_id');
                const findPassage = this.listPassageDetails.find(value => value.passage_id == passage_id);
                if (findPassage && findPassage != '') {
                    console.log(findPassage.passage, 'findPassage.passage');
                    this.passageContent ? this.passageContent.editor.setContent(findPassage.passage) : '';
                    this.passage.controls.editorContext.patchValue(findPassage.passage);
                }
            } else {
                this.toastr.success(successData.ResponseObject);
                if (type == 'add') {
                    this.passage.controls.passage_id.patchValue(successData?.passage_id ?? '');
                    this.modalRef.close();
                    this.formPassageValue();
                }
                console.log(this.passage.controls.passage_id.value, 'vasasdasda');
                if (this.type == 'add') {
                    this.getPassageValue(this.passage.controls.passage_id.value ?? '', type);
                } else {
                    this.passageCREDService('list');
                }
            }
        }
    }

    wordCount(variableName = ''): number {
        const value = variableName == 'question' ? this.writingQuestionEditor : this.writingAnswerEditor;
        return value ? value.trim().split(/\s+/).length : 0;
    }

    formSetValue(redirectType?){

        this.questionAnswer = [];
        this.addNewChoiceValue = [];
        this.correctChoiceValue = [];
        this.addHintsValue = [];
        this.multiFreeAnswerEditor = [];
        this.enteredSkillList = [];
        if (this.questionId == '24') {
            const selectedValue =  redirectType == 'same' ?
                this.passage['controls'].addQuestionType['controls'][0]['controls'].selectType.value : 'MultiChoice';

            this.passage = this.formBuilder.group({
                editorContext: '',
                question: '',
                points: '1',
                explanation: '',
                passage_id: '',
                addQuestionType: this.formBuilder.array([this.createQuestionType()])
            });

            this.passage['controls'].addQuestionType['controls'][0]['controls'].selectType.patchValue(selectedValue);

            this.formPassageValue();

        } else if ((this.questionId == '40' || this.questionId == '41') && redirectType == 'same') {
            this.saveAndDuplicate = 'called';
        }
        // Multiple Choice-Standard and Multi Selection
        this.graphForm = this.formBuilder.group({
            level: '2',
            points: '1',
            minutes: '',
            seconds: '',
            subject_id: null,
            question_topic_id: null,
            question_sub_topic_id: null,
            question_standard: null
        });

        this.multipleChoice = this.formBuilder.group({
            type: 'text',
            editorContext: '',
            question: '',
            points: '1',
            explanation: '',
            multiResponse: this.questionId == '2',
            autograde: true,
            level: '2',
            minutes: '',
            seconds: '',
            subject_id: null,
            question_topic_id: null,
            question_sub_topic_id: null,
            question_standard: null,
            addMultipleChoice: this.formBuilder.array([this.createMultiple(), this.createMultiple(), this.createMultiple(), this.createMultiple()]),
        });
        // Match Table-Standard and Match Table-Labels
        this.correctChoiceMatchValue = [];
        this.matchTable = this.formBuilder.group({
            type: 'text',
            editorContext: '',
            question: '',
            points: '1',
            explanation: '',
            multiResponse: this.questionId == '7',
            autograde: true,
            level: '2',
            minutes: '',
            seconds: '',
            subject_id: null,
            question_topic_id: null,
            question_sub_topic_id: null,
            question_standard: null,
            addMultipleChoice: this.formBuilder.array([this.createMatch(), this.createMatch(), this.createMatch(), this.createMatch()]),
            addMatchTableChoose: this.formBuilder.array([this.createMatchChoose('True'), this.createMatchChoose('False')]),
        });
        // Fill in the Blanks > Text Drop Down
        this.fillDropDown = this.formBuilder.group({
            type: 'text',
            editorContext: '',
            question: '',
            points: '1',
            explanation: '',
            autograde: true,
            level: '2',
            minutes: '',
            seconds: '',
            subject_id: null,
            question_topic_id: null,
            question_sub_topic_id: null,
            question_standard: null,
            addMultipleChoice: this.formBuilder.array([this.createMatch(), this.createMatch()]),
            addHints: this.formBuilder.array([this.createHint()]),
            addDropDownOption: this.formBuilder.array([])
        });

        this.addDropDownArr = this.fillDropDown.controls.addDropDownOption as FormArray;
        // this.addDropDownArr.push(this.createAddDropDownOption());
        this.matchSort = this.formBuilder.group({
            type: 'text',
            editorContext: '',
            question: '',
            points: '1',
            explanation: '',
            source: '',
            target: '',
            multiResponse: false,
            level: '2',
            autograde: true,
            minutes: '',
            seconds: '',
            subject_id: null,
            question_topic_id: null,
            question_sub_topic_id: null,
            question_standard: null,
            addMultipleChoice: this.formBuilder.array([this.createSort(), this.createSort(), this.createSort(), this.createSort()]),
            addMultipleChoose: this.formBuilder.array([this.createSortChoose(), this.createSortChoose(), this.createSortChoose(), this.createSortChoose()]),
            matchSortSource: this.formBuilder.array([this.createSortSource(), this.createSortSource(), this.createSortSource(), this.createSortSource()]),
            matchSortTarget: this.formBuilder.array([this.createSortTarget(), this.createSortTarget(), this.createSortTarget(), this.createSortTarget()]),
            addHints: this.formBuilder.array([this.createHint()])
        });
        this.richText = this.formBuilder.group({
            editorContext: '',
            answer: '',
            question: '',
            points: this.questionId == '20' ? '1' : '35',
            explanation: '',
            autograde: this.questionId == '20',
            level: '2',
            minutes: '',
            seconds: '',
            scoring_instruction: '',
            subject_id: null,
            question_topic_id: null,
            question_sub_topic_id: null,
            question_standard: null,
            addHints: this.formBuilder.array([this.createHint()]),
            repeatAnswerFreeText: this.formBuilder.array([this.createNewCorrectAnswer()])
        });
        this.plainText = this.formBuilder.group({
            editorContext: '',
            answer: '',
            question: '',
            points: '',
            explanation: '',
            autograde: false,
            level: '2',
            addHints: this.formBuilder.array([this.createHint()])
        });
        this.shortText = this.formBuilder.group({
            editorContext: '',
            answer: '',
            question: '',
            points: '',
            explanation: '',
            autograde: false,
            level: '2',
            addHints: this.formBuilder.array([this.createHint()])
        });
        this.highlight = this.formBuilder.group({
            points: '1',
            autograde: false,
            level: '2'
        });
        this.textEntry = this.formBuilder.group({
            editorContext: '',
            question: '',
            points: '1',
            explanation: '',
            text: '',
            autograde: true,
            setCorrectAnswer: '',
            level: '2',
            addHints: this.formBuilder.array([this.createHint()])
        });
        this.inputArray = [];
        this.hintArrayEditor.length != 0 ? this.emptyEditorArrayValue(this.hintArrayEditor) : '';
        this.inputEditorArray.length != 0 ? this.emptyEditorArrayValue(this.inputEditorArray) : '';
        this.hintArray = [];
        this.hintArray.push({hint: ''});
        this.hintArrayEditor = [];
        this.hintArrayEditor.push('');
        this.graphEditorAnswerVal != '' ? this.graphEditorAnswerVal.editor.setContent('') : '';
        this.graphQuestionEditor != '' ? this.graphQuestionEditor.editor.setContent('') : '';
        this.writingAnswerEditor != '' ? this.writingAnswerEditor.editor.setContent('') : '';
        this.writingQuestionEditor != '' ? this.writingQuestionEditor.editor.setContent('') : '';
        this.matchSortEditor != '' ? this.matchSortEditor.editor.setContent('') : '';
        this.multiQuestionEditor != '' ? this.multiQuestionEditor.editor.setContent('') : '';
        this.explanationEditorContentValue != '' ? this.explanationEditorContentValue.setContent('') : '';
        this.resourceEditorContentValue != '' ? this.resourceEditorContentValue.setContent('') : '';
        this.explanationEditorValue != '' ? this.explanationEditorValue = '' : '';
        this.resourceEditorValue != '' ? this.resourceEditorValue = '' : '';
    }

    emptyEditorArrayValue(array) {
        array.forEach((items) => {
            if (items != '') {
                items.setContent('');
            }
        });
    }

    formPassageValue() {
        this.passageForm = this.formBuilder.group({
            title: ['', Validators.required],
            passageEditor: ['', Validators.required]
        });
        this.addPassageContent != '' ? this.addPassageContent.editor.setContent('') : '';
    }

    onChipInput(event): void {
        console.log(event, 'event');
    }

    addSkill(event, calledFrom = '') {
        console.log(event, 'add');
        console.log(calledFrom, 'calledFrom');
        let valueEntered: any;
        let valueEnteredWithOutLowercase: any;
        if (calledFrom == '') {
            const input = event.target as HTMLInputElement;
            valueEntered = input.value.trim().toLowerCase();
            valueEnteredWithOutLowercase = input.value.trim();
        } else {
            valueEntered = event.skill.toLowerCase();
            valueEnteredWithOutLowercase = event.skill;
        }
        console.log(this.enteredSkillList)
        const checkSkillAlreadyExist = this.enteredSkillList.some((value) => value.trim().toLowerCase() == valueEntered);
        if (!checkSkillAlreadyExist && valueEnteredWithOutLowercase != '') {
            this.enteredSkillList.push(valueEnteredWithOutLowercase);
            if (this.skillInput) {
                this.skillInput.nativeElement.value = '';
                this.totalSkillList = [];
            }
            console.log(this.enteredSkillList, 'enteredSkil');
        }
    }

    removeSkill(index): void {
        this.enteredSkillList.splice(index, 1);
        console.log(this.enteredSkillList, 'removeSkill');
    }

    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.book.subjectList(data).subscribe((successData) => {
                this.subjectListSuccess(successData);
            },
            (error) => {
                console.log(error, 'error');
            });
    }

    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
    }

    subjectChanged(event, formControl, servcieType) {
        if (event) {
            this.questionTopicListData = [];
            this.subTopicListData = [];
            formControl.controls.question_topic_id.patchValue(null);
            formControl.controls.question_sub_topic_id.patchValue(null);
            this.selectChanged(event, formControl, servcieType);
        }
    }

    selectChanged(event, formControl, servcieType) {
        console.log(event, 'dasda');
        if (event) {
            this.commonService(servcieType, formControl);
        }
    }

    serachSkill(event) {
        console.log(event.target.value);
        if (event.target.value.trim() != '') {
            const payload = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                skill: event.target.value.trim()
            };
            this.auth.postService(payload, 'content/questionSkill').subscribe((successData: any) => {
                console.log(successData);
                this.totalSkillList = successData.IsSuccess ? successData.ResponseObject : [];
            }, (error => console.error(error, 'question_skill')));
        }
    }

    commonService(type, formControl?, patchValue = '') {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };

        if (type == 'questionSubTopic') {
            payload['topic_id'] = formControl.controls.question_topic_id.value ?? '';
        } else if (type == 'questionTopic') {
            payload['subject_id'] = formControl.controls.subject_id.value ?? '';
        }
        const url = 'content/' + type;
        this.auth.postService(payload, url).subscribe((successData: any) => {
            if (type == 'questionStandard') {
                this.standardListData = successData.IsSuccess ? successData.ResponseObject : [];
            } else if (type == 'questionTopic') {
                this.questionTopicListData = successData.IsSuccess ? successData.ResponseObject : [];
            } else {
                this.subTopicListData = successData.IsSuccess ? successData.ResponseObject : [];
                formControl.controls.question_sub_topic_id.patchValue(patchValue != '' ? patchValue : null);
            }
        }, (error) => console.error(error, 'error_standardList'));
    }
}
