import {
    Component,
    OnInit,
    TemplateRef,
    ViewChild,
    OnDestroy,
    ChangeDetectorRef,
    HostListener
} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {AssessmentService} from '../../../shared/service/assessment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ClassService} from '../../../shared/service/class.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {IAngularMyDpOptions} from '@nodro7/angular-mydatepicker';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {CreatorService} from '../../../shared/service/creator.service';
import {NavService} from '../../../shared/service/nav.service';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {DatePipe} from '@angular/common';
import {IMyDateModel} from '@nodro7/angular-mydatepicker';
import {ValidationService} from '../../../shared/service/validation.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {SessionConstants} from '../../../shared/data/sessionConstants';
import {dateOptions, timeZone} from '../../../shared/data/config';

@Component({
    selector: 'app-create-assessment',
    templateUrl: './content-home.component.html',
    styleUrls: ['./content-home.component.scss']
})

export class ContentHomeComponent implements OnInit, OnDestroy {
    private suppressDocumentClick = false;
    private readonly thumbnailFallbacks: Record<string, string> = {
        '1': 'assets/images/ristaschool/resource.png',
        '2': 'assets/images/ristaschool/option-writing-checkbox-concepts-survey.png',
        '3': 'assets/images/ristaschool/assessment.png',
        default: 'assets/images/ristaschool/resource.png'
    };
    public setDate = new Date().toLocaleString('en-US', {timeZone: timeZone.location});
    myDpOptions: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: dateOptions.pickerFormat,
        firstDayOfWeek: 'su',
        disableUntil: {
            year: new Date(this.setDate).getFullYear(),
            month: new Date(this.setDate).getMonth() + 1,
            day: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getDate() - 1 : -1,
        },
    };
    myDpOptions1: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: dateOptions.pickerFormat,
        firstDayOfWeek: 'su',
        disableUntil: {
            year: this.myDpOptions.disableUntil.year,
            month: this.myDpOptions.disableUntil.month,
            day: this.myDpOptions.disableUntil.day
        },
    };
    myDpOptions2: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: dateOptions.pickerFormat,
        firstDayOfWeek: 'su',
        disableUntil: {
            year: this.myDpOptions.disableUntil.year,
            month: this.myDpOptions.disableUntil.month,
            day: this.myDpOptions.disableUntil.day
        },
    };
    @ViewChild(HeaderComponent) header: HeaderComponent;
    public linkform: FormGroup;
    public repeatlink: FormArray;
    public assessmentUpload: boolean;
    private modalRef: NgbModalRef;
    public closeResult: string;
    public gradeData: any;
    public subjectData: any;
    public tagData: any;
    public contentdata: any = [];
    public detailData: any;
    public checkAutoRelease = true;
    public tagid: any = [];
    public gradeid: any = [];
    public subjectid: any = [];
    public pdfpath: any;
    public pdfpaththumb: any;
    public contentFormat: any;
    public checkQuestion: any;
    public webhost: any;
    public details: any;
    public libraryselection: any;
    public filterselection: any;
    public response: any;
    public teacherData: any = [];
    private teacherNameMap: Map<string, string> = new Map<string, string>();
    public typeid: any;
    public contentDetaildata: any;
    public sortfilter: any;
    public contentUserid: any;
    public sortdetails: boolean;
    public profileurl: any;
    public createdby: any;
    public gradename: any;
    public tags: any;
    public type: any;
    public noofquestions: any;
    public totalpoints: any;
    public description: any = '';
    public subjectname: any;
    public highlight: any;
    public submitType: any;
    public cclist: any;
    public showIcon: boolean;
    public exactSearch: boolean = false;
    public filtersExpanded = false;
    public contentUserId: any;
    public open: boolean;
    public pageNo: any = 1;
    public totalRecords: any;
    public threshhold: any;
    public choosedData: any;
    // Pagination properties
    public itemsPerPage: number = 10;
    public totalPages: number = 0;
    public paginationPages: number[] = [];
    public showPagination: boolean = true;
    // Tab management
    public activeTab: 'library' | 'folder' = 'library';
    public className: any;
    public classid: any;
    public contentName: any;
    public submitData: any;
    public listStudent: boolean;
    public meridian: boolean;
    public spinner: boolean;
    public classData: any = [];
    public classDataSample = [];
    public topicsData: any = [];
    public classDetails: any;
    public allStudent: any;
    public contentid: any;
    public studentid: any;
    public randomSize: any;
    public contentdatabackup: any;
    public contentType: any;
    public detailButtonPreview: boolean;
    public allowDropDown: boolean;
    public edit: any;
    public assignIcon = true;
    direction = '';
    public assignType: any;
    public previewType: any;
    // public contentIcon: boolean;
    public manageOwnContent = true;
    public manageInstitutionContent = true;
    public assignDirect: boolean;
    public studentData: any;
    public classDropDown: boolean;
    public schoolListDetails: any;
    public selector: string = '.content-results-wrapper';
    public tagname: any;
    public browseAllAssign: boolean;
    public resourcetype: boolean;
    public defaultShow: boolean;
    public firstAssign: boolean;
    public batchData: any;
    public showBatch: boolean;
    public assign: string;
    public batchid: any;
    public classbatchid: any;
    public endDate: any;
    public startdate: any;
    public end: any;
    public start: any;
    public searchKey: any = '';
    public roleid: any;
    public dateValidation: boolean;
    public selectAuthored: any = '';
    public selectDraft: any = '';
    public deleteValue: any;
    public backContentIcon = true;
    public searchTime: any;
    public allowScore: boolean;
    public releaseGrade: any;
    public isLoading: boolean = false;
    public sortListSubscription: any;
    public schoolStatus: any;
    public clearSession = true;
    public contentAssign = '';
    public showInformation = true;
    public model: { singleDate: { jsDate: Date }; isRange: boolean };
    @ViewChild('detailsTemplate') addDetails: TemplateRef<any>;
    @ViewChild('select') addAsset: TemplateRef<any>;
    @ViewChild('allCreateContent') createContentTemp: TemplateRef<any>;
    @ViewChild('createScratch') createScratchTemp: TemplateRef<any>;
    @ViewChild('resources') addResources: TemplateRef<any>;
    @ViewChild('assignment') addAssignment: TemplateRef<any>;
    @ViewChild('assessment') addAssessment: TemplateRef<any>;
    @ViewChild('assign') addAssign: TemplateRef<any>;
    @ViewChild('batchassign') adddirectAssign: TemplateRef<any>;
    @ViewChild('delete') deleteList: TemplateRef<any>;

    @ViewChild('hiddenBtn', {static: false}) myHiddenBtn;
    public selectedClassName = '';
    public neededButtonType = '';
    public showModal = false;
    public multiContentId = [];
    public downloadContentAvailable = false;
    public settingList: any = [];
    public isEssay = '';
    public showTimer = false;

    constructor(public auth: AuthService, public config: ConfigurationService, public assessment: AssessmentService, public route: ActivatedRoute, private formBuilder: FormBuilder,
                public sanitizer: DomSanitizer, private modalService: NgbModal, public router: Router, public classService: ClassService, public creatorService: CreatorService,
                public toastr: ToastrService, public common: CommonService, public commondata: CommonDataService, public navServices: NavService, public datePipe: DatePipe,
                public validationService: ValidationService, public cdr: ChangeDetectorRef, public newSubject: NewsubjectService) {
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.assessmentUpload = false;
        if (this.auth.getRoleId() != '3') {
            this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        }
        this.dateValidation = true;
        this.model = {isRange: false, singleDate: {jsDate: new Date()}};
        if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
            this.choosedData = JSON.parse(this.auth.getSessionData('card-data'));
        } else {
            this.choosedData = JSON.parse(this.auth.getSessionData('classbatch'));
        }
        this.contentAssign = this.auth.getSessionData('assignedForm');
        console.log(this.contentAssign, 'content');
        this.randomSize = true;
        this.pageNo = 1;
        this.sortdetails = false;
        this.listStudent = false;
        this.meridian = true;
        this.spinner = false;
        this.assignIcon = false;
        this.detailButtonPreview = false;
        this.webhost = this.config.getimgUrl();
        if (this.auth.getRoleId() == '3' || this.schoolStatus?.length != 0) {
            this.newSubject.schoolChange.subscribe((res: any) => {
                if (res != '') {
                    if (this.router.url.includes('content-home')) {
                        this.contentdata = [];
                        this.pageNo = 1;
                        this.init();
                    }
                } else {
                    this.init();
                }
            });
        }

        if (this.auth.getRoleId() == '2' || this.auth.getRoleId() == '6') {
            this.assignDirect = true;
            // this.allowCurriculum = true;
        } else if (this.auth.getRoleId() == '3') {
            this.assignIcon = true;
            this.showIcon = false;
            this.detailButtonPreview = true;
            // this.allowCurriculum = true;
        } else if (this.auth.getRoleId() == '4') {
            this.assignIcon = false;
            this.showIcon = true;
            this.assignDirect = true;
            this.schoolListDetails = JSON.parse(this.auth.getSessionData('rista_data1'));
            this.browseAllAssign = false;
        }
        if (this.auth.getSessionData('resourceAccess') == 'true') {
            console.log('resourceAccess');
            this.showIcon = true;
            this.assignIcon = true;
            this.assignDirect = false;
            this.backContentIcon = false;
            if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                this.className = this.choosedData[0].class_name;
                this.classid = this.choosedData[0].class_id;
            } else if (this.auth.getSessionData('batchassign') == '2') {
                this.className = this.choosedData.batch_name;
                this.classid = this.choosedData.batch_id;
            }
            console.log(this.className, 'className');
            this.browseAllAssign = false;
        } else if (this.auth.getSessionData('browseAll') == 'true') {
            this.browseAllAssign = true;
            this.assignDirect = false;
        } else {
            this.auth.removeSessionData('assignedForm');
        }
        this.linkform = this.formBuilder.group({
            classname: [''],
            startDate: '',
            endDate: '',
            startTime: '',
            endTime: '',
            radio: ['1'],
            typeSelection: ['n/a'],
            batch: [null],
            specificstudent: [[]],
            classSelect: [[]],
            topicSelect: [null],
            teacherSelect: [],
            releaseScore: '0',
            notes: '',
            downloadcontent: '',
            feedback: false,
            showTimer: false,
            workspace: false,
            dateRanges: this.formBuilder.array([])
        });
        const stObject = {hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00')};
        this.linkform.controls.startTime.patchValue(stObject);
        const etObject = {hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00')};
        this.linkform.controls.endTime.patchValue(etObject);
        this.cclist = [];
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('readonly_data');
        this.auth.removeSessionData('readonly_startdate');
    }

    public get activeFilterChips(): string[] {
        const chips: string[] = [];

        const search = this.searchKey?.trim();
        if (search) {
            chips.push(`Search: ${search}`);
        }

        const libraryMap: Record<string, string> = {
            '0': 'Entire Library',
            '1': 'Resource',
            '2': 'Assignment',
            '3': 'Assessment'
        };
        if (this.libraryselection && this.libraryselection !== '0') {
            chips.push(`Library: ${libraryMap[this.libraryselection] || 'Selected'}`);
        }

        const sortMap: Record<string, string> = {
            'AZ': 'A - Z',
            'ZA': 'Z - A',
            '-1': 'Popularity',
            '0': 'Recent'
        };
        if (this.sortfilter && this.sortfilter !== '0') {
            chips.push(`Sort: ${sortMap[this.sortfilter] || 'Custom'}`);
        }

        if (this.selectAuthored === 'active2') {
            chips.push('Authored by me');
        }

        if (this.selectDraft === 'active2') {
            chips.push('My drafts');
        }

        if (this.exactSearch) {
            chips.push('Exact search');
        }

        if (Array.isArray(this.gradeid) && this.gradeid.length) {
            const gradeIds = new Set(this.gradeid.map((id: any) => String(id)));
            const grades = Array.isArray(this.gradeData)
                ? this.gradeData
                    .filter(item => gradeIds.has(String(item.grade_id)))
                    .map(item => item.grade_name)
                : [];
            chips.push(`Grades: ${grades.length ? grades.join(', ') : this.gradeid.length}`);
        }

        if (Array.isArray(this.subjectid) && this.subjectid.length) {
            const subjectIds = new Set(this.subjectid.map((id: any) => String(id)));
            const subjects = Array.isArray(this.subjectData)
                ? this.subjectData
                    .filter(item => subjectIds.has(String(item.subject_id)))
                    .map(item => item.subject_name)
                : [];
            chips.push(`Subjects: ${subjects.length ? subjects.join(', ') : this.subjectid.length}`);
        }

        if (Array.isArray(this.tagid) && this.tagid.length) {
            const tagIds = new Set(this.tagid.map((id: any) => String(id)));
            const tags = Array.isArray(this.tagData)
                ? this.tagData
                    .filter(item => tagIds.has(String(item.tag_id)))
                    .map(item => item.tag_name)
                : [];
            chips.push(`Tags: ${tags.length ? tags.join(', ') : this.tagid.length}`);
        }

        return chips;
    }

    public get activeAdvancedFilterCount(): number {
        const ignoredMarkers = ['Search:', 'Library:', 'Sort:', 'Authored by me', 'My drafts', 'Exact search'];
        return this.activeFilterChips.filter(chip =>
            !ignoredMarkers.some(marker => chip === marker || chip.startsWith(marker))
        ).length;
    }

    public toggleFiltersPanel(): void {
        this.filtersExpanded = !this.filtersExpanded;
    }

    ngOnInit(): void {
        this.allowDropDown = false;
        this.newSubject.allowSchoolChange(this.allowDropDown);
        this.totalRecords = 0;
        this.threshhold = 0;
        this.contentdata = [];
        this.contentdatabackup = [];
        this.commondata.showLoader(false);

        this.auth.removeSessionData('backOption');
        if (this.auth.getRoleId() == '2' || this.auth.getRoleId() == '6') {
            this.classList();
            if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                this.liststudent();
            }
        } else if (this.auth.getRoleId() == '4') {
            if (this.auth.getSessionData('resourceAccess') == 'true') {
                if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                    this.classList();
                    this.liststudent();
                }
            }
        }
        this.teacherList();
        if (this.sortfilter == '0' || this.sortfilter == '-1' || this.sortfilter == 'AZ' || this.sortfilter == 'ZA') {
            this.contentUserid = '0';
        } else if (this.sortfilter != '0' && this.sortfilter != '-1' || this.sortfilter != 'AZ' || this.sortfilter != 'ZA') {
            this.contentUserid = this.sortfilter;
        }
        if (this.auth.getSessionData('resourceAccess') == 'true') {
            this.allowDropDown = true;
            this.newSubject.allowSchoolChange(this.allowDropDown);
        }

        this.neededButtonType = this.auth.getSessionData('return');
    }

    ngOnDestroy(): void {
        if (this.clearSession) {
            this.auth.setSessionData('resourceAccess', false);
        }
        this.auth.removeSessionData('allowCurriculum');
    }

    get dateRanges(): FormArray {
        return this.linkform.get('dateRanges') as FormArray;
    }

    addDatePicker(classData = {class_id: '', class_name: '', start_date: '', end_date: ''}) {

        const stObject = {hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00')};
        const etObject = {hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00')};
        return this.formBuilder.group({
            startDate: [null],
            endDate: [null],
            startTime: [stObject],
            endTime: [etObject],
            class_startDate: [classData.start_date],
            class_endDate: [classData.end_date],
            class_id: [classData.class_id],
            class_name: [classData.class_name]
        });
    }

    addClassDate(classData = {class_id: '', class_name: '', start_date: '', end_date: ''}) {
        this.dateRanges.push(this.addDatePicker(classData));
    }

    removeDatePicker(index: number) {
        this.dateRanges.removeAt(index);
    }

    init() {
        this.roleid = this.auth.getRoleId();
        this.schoolListDetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.manageOwnContent = this.auth.manageOwnContent;
        this.manageInstitutionContent = this.auth.manageInstitutionContent;
        // if (this.roleid == '4') {
            // if (this.schoolListDetails.permissions[4].permission[0].status == 1) {
            //     // this.contentIcon = true;
            // } else if (this.schoolListDetails.permissions[4].permission[0].status == 0) {
            //     // this.contentIcon = false;
            // }
            // if (this.schoolListDetails.permissions[4].permission[1].status == 1) {
            //     this.allowEdit = true;
            // } else if (this.schoolListDetails.permissions[4].permission[1].status == 0) {
            //     this.allowEdit = false;
            // }
            // if (this.schoolListDetails.individual_teacher != 0) {
            //     this.allowCurriculum = true;
            // } else {
            //     if (this.schoolListDetails.permissions[6].permission[3].status == 1) {
            //         this.allowCurriculum = true;
            //     } else if (this.schoolListDetails.permissions[6].permission[3].status == 0) {
            //         this.allowCurriculum = false;
            //     }
            // }
        // }
        if (this.auth.getSessionData('resourceAccess') == 'true') {
            this.libraryselection = this.auth.getSessionData('contentType');
        }
        this.settingList = JSON.parse(this.auth.getSessionData('settingList')) ?? [];
        console.log(this.settingList, 'settingList');
        this.getSearch_Filter();
        this.sortlist();
        this.subjectList();
        this.gradeList();
        this.tagList();
        this.classList();
    }

    onScrollDown(ev) {
        this.direction = 'down';
        this.pageNo++;
        this.sortlist();
    }

    onUp(ev) {
        this.direction = 'up';
    }

    loadNextPage() {
        this.pageNo++;
        this.sortlist();
        // Scroll to top of content list
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    loadPreviousPage() {
        if (this.pageNo > 1) {
            this.pageNo--;
            this.contentdata = []; // Clear current data
            this.sortlist();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    sortExact() {
        this.pageNo = 1;
        if (this.searchKey != '') {
            this.sortlist();
        }
        this.setSearch_Filter();
    }

    updateFilter(event) {
        this.searchKey = event;
        clearTimeout(this.searchTime);
        this.searchTime = setTimeout(() => {
            this.contentdata = []; // Clear existing data for new search
            this.pageNo = 1;
            this.sortlist();
            this.setSearch_Filter();
        }, 500); // Reduced from 1200ms to 500ms for better responsiveness
    }

    onDateChanged1(event: any): void {
        this.myDpOptions.disableSince = event.date;
    }

    enterList() {
        if (this.auth.getSessionData('batchassign') == '2') {
            this.router.navigate(['class/view-assign/2']);
        } else {
            this.classDetailService();
        }
    }

    classDetailService() {
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.choosedData[0].class_id
        };
        this.classService.classDetails(data).subscribe((successData) => {
                this.enterListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_enter');
            });
    }

    enterListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.auth.setSessionData('classView', true);
            this.detailData = successData.ResponseObject;
            this.auth.removeSessionData('content_assign');
            this.auth.setSessionData('card-data', JSON.stringify(this.detailData));
            this.auth.setSessionData('studentlist', JSON.stringify(this.detailData[0].students));
            this.auth.setSessionData('studentlist1', JSON.stringify(this.detailData[0].students));
            if (this.auth.getSessionData('resourceAccess') == 'true') {
                if (this.auth.getSessionData('batchassign') == '1') {
                    this.router.navigate(['/class/topicsAndCurriculum/1']);
                } else if (this.auth.getSessionData('batchassign') == '3') {
                    this.router.navigate(['class/topicsAndCurriculum/3']);
                }
            }
            this.auth.removeSessionData('assignedForm');
        }
    }

    classList() {
        const data = {
            platform: 'web',
            type: '5',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        this.classService.classesList(data).subscribe((successData) => {
                this.classListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_classLst');
            });
    }

    classListSuccess(successData) {
        if (successData.IsSuccess) {
            this.classData = successData.ResponseObject;
            this.classDataSample = successData.ResponseObject;
        }
    }

    topicsList(classID) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: classID,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classService.topicList(data).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    successData.ResponseObject.forEach((items) => {
                        items.disabled = false;
                    });
                    this.topicsData = successData.ResponseObject;
                }
            },
            (error) => {
                console.log(error, 'error_topicList');
            });
    }

    liststudent() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: [this.choosedData[0].class_id]
        };
        this.creatorService.classList(data).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.studentData = successData.ResponseObject;
                }
            },
            (error) => {
                console.error(error, 'error_studentList');
            });
    }

    disableTopicsByClass(selectedTopics: any[]): void {
        const selectedClassIds = new Set(selectedTopics.map(topic => topic.class_id));
        const selectedTopicIds = new Set(selectedTopics.map(topic => topic.topic_id));

        this.topicsData = this.topicsData.map(topic => {
            return {
                ...topic,
                // Disable topics with matching `class_id` if they are not selected
                disabled: selectedClassIds.has(topic.class_id) && !selectedTopicIds.has(topic.topic_id)
            };
        });
    }

    clearFormArray() {
        this.dateRanges.clear();
    }

    updateClassName() {
        this.selectedClassName = '';
        const classID = this.linkform.controls.classSelect.value;
        this.classData.forEach((items) => {
            if (classID.some((data => data == items.class_id))) {
                this.selectedClassName = this.selectedClassName == '' ? items.class_name :
                    this.selectedClassName + ', ' + items.class_name;
            }
        });
    }

    dummyStudent() {
        const classID = this.linkform.controls.classSelect.value;
        const selectedClass = [];
        this.classData.forEach((items) => {
            if (classID.some((data => data == items.class_id))) {
                selectedClass.push(items);
            }
        });
        if (classID.length != 0) {
            this.topicsList(classID);
        } else {
            this.linkform.controls.batch.patchValue(null);
        }
        selectedClass.forEach((item) => {
            const classIds = this.linkform.get('dateRanges').value.map(control => control.class_id);
            if (!classIds.includes(item.class_id)) {
                this.addClassDate(item);
                this.linkform.controls.specificstudent.patchValue([]);
                this.classbatchid = selectedClass[0].batch_id;
            }
        });

        this.linkform.get('dateRanges').value.forEach((control, index) => {
            const classId = control.class_id;
            const existsInEvent = selectedClass.some(item => item.class_id === classId);
            const formControlName = this.linkform['controls'].dateRanges['controls'][index]['controls'];
            if (!existsInEvent) {
                this.removeDatePicker(index);
            }
            selectedClass.forEach((items) => {
                if (items.class_id == classId) {
                    if (items.start_date != '0000-00-00') {
                        const sd = items.end_date.split('-');
                        const sdObject: IMyDateModel = {
                            isRange: false,
                            singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
                            dateRange: null
                        };
                        const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                        const dropped = dr1.split('-');
                        const droppedObject: IMyDateModel = {
                            isRange: false,
                            singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
                            dateRange: null
                        };
                        formControlName.startDate.patchValue(droppedObject);
                        this.myDpOptions2 = {};
                        this.myDpOptions2 = {
                            dateRange: false,
                            dateFormat: dateOptions.pickerFormat,
                            firstDayOfWeek: 'su',
                            disableUntil: {
                                year: this.myDpOptions.disableUntil.year,
                                month: this.myDpOptions.disableUntil.month,
                                day: this.myDpOptions.disableUntil.day
                            }
                        };
                        formControlName.class_startDate.patchValue(items.start_date);
                    } else {
                        const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                        const dropped = dr1.split('-');
                        const droppedObject: IMyDateModel = {
                            isRange: false,
                            singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
                            dateRange: null
                        };
                        formControlName.startDate.patchValue(droppedObject);
                    }
                    if (items.end_date != '0000-00-00') {
                        const sd = items.end_date.split('-');
                        const sdObject: IMyDateModel = {
                            isRange: false,
                            singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
                            dateRange: null
                        };
                        this.myDpOptions1 = {};
                        this.myDpOptions1 = {
                            dateRange: false,
                            dateFormat: dateOptions.pickerFormat,
                            firstDayOfWeek: 'su',
                            disableUntil: {
                                year: this.myDpOptions.disableUntil.year,
                                month: this.myDpOptions.disableUntil.month,
                                day: this.myDpOptions.disableUntil.day
                            }
                        };
                        formControlName.class_endDate.patchValue(items.end_date);
                    } else {
                        formControlName.endDate.patchValue(null);
                    }
                }
            });
        });
        const classIds = selectedClass.map(control => control.class_id);
        if (classIds.length != 0) {
            this.liststudent1(classIds);
        }
    }

    applyToAll(data) {
        console.log(data, 'data');
        this.linkform.get('dateRanges').value.forEach((control, index) => {
            const formControlName = this.linkform['controls'].dateRanges['controls'][index]['controls'];
            if (index != 0) {
                console.log('function');
                formControlName.startDate.patchValue(data.value.startDate);
                formControlName.endDate.patchValue(data.value.endDate);
                formControlName.startTime.patchValue(data.value.startTime);
                formControlName.endTime.patchValue(data.value.endTime);
            }
        });
    }

    teacherFilter(event) {
        console.log(event);
        this.linkform.controls.classSelect.patchValue([]);
        this.linkform.controls.specificstudent.patchValue([]);
        this.linkform.controls.topicSelect.patchValue(null);
        this.topicsData = [];
        this.studentData = [];
        this.linkform.controls.endDate.patchValue(null);
        if (event != undefined) {
            this.classData = this.classDataSample.filter((val) => {
                const teacher_id = val.teacher_id.split(',');
                return teacher_id.includes(event.teacher_id);
            });
        } else {
            this.classData = this.classDataSample;
        }
        console.log(this.classData, 'classData');
        console.log(this.classDataSample, 'classDataSample');
    }

    releaseScoreFilter(event) {
        this.checkAutoRelease = true;
        if (event.target.value == '1' && (this.multiContentId.length <= 1 || this.contentName)) {
            this.releaseScoreCheck();
        }
    }

    releaseScoreCheck() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.multiContentId.length == 1 && !this.contentName ? this.multiContentId[0].content_id : this.contentid
        };
        this.creatorService.releaseScoreCheck(data).subscribe((successData) => {
                this.releaseCheckSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_studentList');
            });
    }

    releaseCheckSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData, 'check success');
        } else {
            this.checkAutoRelease = false;
            setTimeout(() => {
                this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
                this.checkAutoRelease = true;
                this.cdr.detectChanges();
            }, 3000);
        }
    }

    liststudent1(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: id
        };
        this.creatorService.classList(data).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.studentData = successData.ResponseObject;
                    this.studentData = this.studentData.filter((value, index, self) =>
                        index === self.findIndex((t) => t.student_id === value.student_id));
                }
            },
            (error) => {
                console.error(error, 'error_studentList');
            });
    }

    detailpreviewlist(id, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.contentdata[id].content_id,
            content_format: this.contentdata[id].content_format,
            school_id: this.auth.getSessionData('school_id')
        };
        this.creatorService.detaillist(data).subscribe((successData) => {
                this.contentDetailsSuccess(successData, type, data);
            },
            (error) => {
                console.error(error, 'error_contentDetails');
            });
    }

    contentDetailsSuccess(successData, type, data) {
        if (successData.IsSuccess) {
            this.contentDetaildata = successData.ResponseObject;
            this.contentName = this.contentDetaildata.name;
            this.contentid = this.contentDetaildata.content_id;
            this.contentType = this.contentDetaildata.content_type;
            this.contentFormat = this.contentDetaildata.content_format;
            this.checkQuestion = this.contentDetaildata.without_question;
            this.profileurl = this.contentDetaildata.profile_url;
            this.createdby = this.resolveCreatorDisplayName(
                this.getCreatorIdCandidates(this.contentDetaildata),
                this.collectCreatorFallbackNames(this.contentDetaildata)
            );
            this.gradename = this.contentDetaildata.grade_name;
            this.subjectname = this.contentDetaildata.subject_name;
            this.tags = this.contentDetaildata.tags;
            this.noofquestions = this.contentDetaildata.no_of_questions;
            this.totalpoints = this.contentDetaildata.total_points;
            this.description = this.contentDetaildata.description;
            this.releaseGrade = this.contentDetaildata.allow_autograde;
            this.assignType = type;
            if (this.contentDetaildata.status == '1') {
                this.details = 'Published';
            } else if (this.contentDetaildata.status == '5') {
                this.details = 'Draft';
            }
            if (type == 'assign') {
                if (this.details != 'Draft') {
                    if (this.contentType == this.auth.getSessionData('contentType')) {
                        if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                            this.linkform.controls.downloadcontent.patchValue(this.contentDetaildata.download == '1');
                            this.linkform.controls.workspace.patchValue(false);
                            this.linkform.controls.feedback.patchValue(false);
                            this.linkform.controls.notes.patchValue('');
                            this.topicsList(this.classid);
                            this.linkform.controls.classname.patchValue(this.choosedData[0].class_name ? this.choosedData[0].class_name : '');
                            setTimeout(() => {
                                this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
                            });
                            this.modalRef = this.modalService.open(this.addAssign, {
                                centered: false,
                                scrollable: false,
                                windowClass: 'assignPopUp',
                                size: 'xl',
                                backdrop: 'static'
                            });
                            this.classDropDown = false;
                            this.resourcetype = true;
                            this.addClassDate();
                            this.defaultShow = true;
                            this.firstAssign = false;
                            this.assign = '1';
                            this.showBatch = false;
                            this.allowScore = true;
                            this.linkform.controls.classSelect.patchValue(this.choosedData[0].class_name ? [this.choosedData[0].class_id] : []);
                            // setTimeout(() => {
                            this.linkform.get('dateRanges').value.forEach((control, index) => {
                                const formControlName = this.linkform['controls'].dateRanges['controls'][index]['controls'];
                                formControlName.class_name.patchValue(this.choosedData[0].class_name ? this.choosedData[0].class_name : '');
                                formControlName.class_id.patchValue(this.choosedData[0].class_id ? this.choosedData[0].class_id : '');
                                if (this.choosedData[0].start_date != '0000-00-00') {
                                    const sd = this.choosedData[0].start_date.split('-');
                                    const sdObject: IMyDateModel = {
                                        isRange: false,
                                        singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
                                        dateRange: null
                                    };
                                    const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                                    const dropped = dr1.split('-');
                                    const droppedObject: IMyDateModel = {
                                        isRange: false,
                                        singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
                                        dateRange: null
                                    };
                                    formControlName.startDate.patchValue(droppedObject);
                                    this.myDpOptions1 = {};
                                    this.myDpOptions1 = {
                                        dateRange: false,
                                        dateFormat: dateOptions.pickerFormat,
                                        firstDayOfWeek: 'su',
                                        disableUntil: {
                                            year: parseInt(sd[0]),
                                            month: parseInt(sd[1]),
                                            day: parseInt(sd[2]) - 1
                                        },
                                    };
                                    formControlName.class_startDate.patchValue(this.choosedData[0].start_date);
                                } else {
                                    const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                                    const dropped = dr1.split('-');
                                    const droppedObject: IMyDateModel = {
                                        isRange: false,
                                        singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
                                        dateRange: null
                                    };
                                    formControlName.startDate.patchValue(droppedObject);
                                }
                                if (this.choosedData[0].end_date != '0000-00-00') {
                                    const sd = this.choosedData[0].end_date.split('-');
                                    const sdObject: IMyDateModel = {
                                        isRange: false,
                                        singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
                                        dateRange: null
                                    };
                                    this.myDpOptions1 = {};
                                    this.myDpOptions1 = {
                                        dateRange: false,
                                        dateFormat: dateOptions.pickerFormat,
                                        firstDayOfWeek: 'su',
                                        disableUntil: {
                                            year: this.myDpOptions.disableUntil.year,
                                            month: this.myDpOptions.disableUntil.month,
                                            day: this.myDpOptions.disableUntil.day
                                        },
                                    };
                                    formControlName.class_endDate.patchValue(this.choosedData[0].end_date);
                                } else {
                                    formControlName.endDate.patchValue(null);
                                }
                            });
                            // }, 1000)
                            this.allowScore = this.contentName ? this.releaseGrade == '1' && this.contentType != '1' && this.checkQuestion != 1
                                : this.settingList[2]?.value == 1 ?? true;
                        } else if (this.auth.getSessionData('batchassign') == '2') {
                            this.modalRef = this.modalService.open(this.adddirectAssign, {
                                size: 'lg',
                                backdrop: 'static'
                            });
                            this.assign = '2';
                            this.showBatch = true;
                            this.allowScore = this.contentName ? this.releaseGrade == '1' && this.contentType != '1' && this.checkQuestion != 1
                                : this.settingList[2]?.value == 1 ?? true;
                        }
                    } else {
                        this.toastr.error('Please assign Correct content type form Content-Library');
                    }
                } else {
                    this.toastr.error('Draft Content can\'t be assigned for class');
                }
            } else if (type == 'notassign') {
                if (this.details != 'Draft') {
                    if ((this.auth.getRoleId() == '2') || this.auth.getRoleId() == '6' || (this.auth.getRoleId() == '4') && (this.auth.getSessionData('teacher_type') == '0')) {
                        this.batchDataList();
                        this.classDropDown = true;
                        this.firstAssign = true;
                        this.linkform.controls.downloadcontent.patchValue(this.contentDetaildata.download == '1');
                        this.linkform.controls.workspace.patchValue(false);
                        this.linkform.controls.feedback.patchValue(false);
                        this.linkform.controls.startDate.patchValue('');
                        this.linkform.controls.endDate.patchValue('');
                        setTimeout(() => {
                            this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
                        });
                        this.cdr.detectChanges();
                        this.modalRef = this.modalService.open(this.addAssign, {
                            centered: false,
                            scrollable: false,
                            windowClass: 'assignPopUp',
                            size: 'xl',
                            backdrop: 'static'
                        });
                    } else if ((this.auth.getRoleId() == '4') && (this.auth.getSessionData('teacher_type') == '1')) {
                        this.firstAssign = false;
                        this.classDropDown = true;
                        this.resourcetype = true;
                        this.defaultShow = true;
                        this.assign = '1';
                        this.startdate = '';
                        this.endDate = '';
                        this.linkform.controls.downloadcontent.patchValue(this.contentDetaildata.download == '1');
                        this.linkform.controls.workspace.patchValue(false);
                        this.linkform.controls.feedback.patchValue(false);
                        this.linkform.controls.classSelect.patchValue([]);
                        this.linkform.controls.notes.patchValue('');
                        setTimeout(() => {
                            this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
                        });
                        this.cdr.detectChanges();
                        this.linkform.controls.radio.patchValue('1');
                        this.linkform.controls.startDate.patchValue('');
                        this.linkform.controls.endDate.patchValue('');
                        this.modalRef = this.modalService.open(this.addAssign, {
                            centered: false,
                            scrollable: false,
                            windowClass: 'assignPopUp',
                            size: 'xl',
                            backdrop: 'static'
                        });
                    }
                } else {
                    this.toastr.error('Draft Content can\'t be assigned for class');
                }
            } else if (type == 'browseAssign') {
                const classDetails = JSON.parse(this.auth.getSessionData('classData'));
                this.auth.setSessionData('browseContent_id', data.content_id);
                if (this.contentDetaildata.content_format == 1) {
                    classDetails.content_id.push(
                        {
                            type: 'pdf',
                            id: data.content_id,
                            name: this.contentDetaildata.file_path[0].image,
                            path: this.contentDetaildata.profile_url
                        });
                } else if (this.contentDetaildata.content_format == 2) {
                    classDetails.content_id.push(
                        {
                            id: data.content_id,
                            type: 'link',
                            name: this.contentDetaildata.links[0],
                            path: this.contentDetaildata.profile_url
                        });
                } else if (this.contentDetaildata.content_format == 3) {
                    classDetails.content_id.push(
                        {
                            id: data.content_id,
                            type: 'text',
                            name: this.contentDetaildata.file_text,
                            path: this.contentDetaildata.profile_url
                        });
                }
                this.auth.setSessionData('classData', JSON.stringify(classDetails));
                this.router.navigate(['/class/create-class/add']);
            }
        }
    }

    assignResource(index, type) {
        console.log(type, 'type');
        this.isEssay = this.contentdata[index].is_essay ?? '0';
        this.showTimer = this.isEssay == '1';
        this.detailpreviewlist(index, type);
        this.classList();
    }

    dateValidation1() {
        this.dateValidation = true;

        if (this.linkform.controls.dateRanges && this.linkform.controls.dateRanges.value) {
            this.dateValidation = !this.linkform.controls.dateRanges.value.some((control, index) => {
                const formControlName = this.linkform.controls.dateRanges['controls'][index]['controls'];

                const startDateControl = formControlName.startDate;
                const endDateControl = formControlName.endDate;

                if (startDateControl.value && endDateControl.value) {
                    const startdate = this.datePipe.transform(startDateControl.value.singleDate.jsDate, 'yyyy-MM-dd');
                    const st = startdate.split('-');
                    const endDate = this.datePipe.transform(endDateControl.value.singleDate.jsDate, 'yyyy-MM-dd');
                    const et = endDate.split('-');

                    if (st[0] === et[0]) {
                        if (st[1] === et[1]) {
                            return st[2] > et[2];
                        } else {
                            return st[1] > et[1];
                        }
                    } else {
                        return st[0] > et[0];
                    }
                } else {
                    return false;
                }
            });
        } else {
            this.dateValidation = true;
        }
    }

    submitAssign(type) {

        this.dateValidation1();
        const allstudent = this.linkform.controls.radio.value;
        if (this.auth.getSessionData('resourceAccess') == 'false') {
            this.classid = this.linkform.controls.classSelect.value;
            this.batchid = this.classbatchid;
        }
        const typeSelection = this.linkform.controls.typeSelection.value;
        if (allstudent == '1' || type == '2' || typeSelection == '2') {
            this.allStudent = '1';
            this.studentid = '';
        } else if (allstudent == '0') {
            this.allStudent = '0';
            const selectedIds = Array.isArray(this.linkform.controls.specificstudent.value)
                ? this.linkform.controls.specificstudent.value
                    .map((id: any) => id != null ? `${id}`.trim() : '')
                    .filter((id: string) => id.length > 0)
                : [];
            this.studentid = selectedIds;
        }
        if (this.auth.getSessionData('resourceAccess') == 'true') {
            if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                this.batchid = this.choosedData[0].batch_id;
            } else if (this.auth.getSessionData('batchassign') == '2') {
                this.batchid = this.classid;
            }
        } else {
            const batchValue = JSON.parse(this.auth.getSessionData('selectedbatchId'));
            this.batchid = batchValue ? (batchValue.length == 0 ? null : batchValue) : null;
        }
        console.log(this.batchid, 'sadasda00');
        if (this.startdate == undefined) {
            this.start = '';
        } else {
            this.start = this.startdate;
        }
        if (this.endDate == undefined) {
            this.end = '';
        } else {
            this.end = this.endDate;
        }

        const hasSpecificSelection = this.allStudent === '0' && Array.isArray(this.studentid) && this.studentid.length > 0;

        if (this.classid != null || this.batchid != null) {
            if ((this.allStudent == '0' && this.studentData.length != 0) || this.allStudent == '1') {
                if (hasSpecificSelection || this.allStudent == '1') {
                    if (this.dateValidation == true) {
                        let classDetails = [];
                        if (this.linkform.controls.typeSelection.value == '1' || this.resourcetype) {
                            this.linkform.get('dateRanges').value.forEach((control) => {
                                if (this.multiContentId.length > 1 && !this.contentName) {
                                    this.multiContentId.forEach((items) => {
                                        classDetails.push({
                                            content_id: items.content_id,
                                            class_id: control.class_id,
                                            start_date: control.startDate ? this.datePipe.transform(control.startDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
                                            end_date: control.endDate ? this.datePipe.transform(control.endDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
                                            start_time: control.startTime ? control.startTime : '',
                                            end_time: control.endTime ? control.endTime : '',
                                            all_student: this.allStudent,
                                            student_id: this.studentid,
                                            batch_id: this.batchid,
                                            auto_review: this.linkform.controls.releaseScore.value,
                                            notes: '',
                                            download: this.linkform.controls.downloadcontent.value ? '1' : '0',
                                            show_timer: this.showTimer ? this.linkform.controls.showTimer.value ? '1' : '0' : '1',
                                            allow_workspace : this.linkform.controls.workspace.value ? '1' : '0',
                                            allow_feedback : this.linkform.controls.feedback.value ? '1' : '0',
                                            topic_id: this.linkform.controls.topicSelect.value && this.linkform.controls.classSelect.value.length <= 1
                                                ? this.linkform.controls.topicSelect.value : ''
                                        });
                                    });
                                } else {
                                    classDetails.push({
                                        content_id: this.contentid,
                                        class_id: control.class_id,
                                        start_date: control.startDate ? this.datePipe.transform(control.startDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
                                        end_date: control.endDate ? this.datePipe.transform(control.endDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
                                        start_time: control.startTime ? control.startTime : '',
                                        end_time: control.endTime ? control.endTime : '',
                                        all_student: this.allStudent,
                                        student_id: this.studentid,
                                        batch_id: this.batchid,
                                        auto_review: this.linkform.controls.releaseScore.value,
                                        notes: '',
                                        download: this.linkform.controls.downloadcontent.value ? '1' : '0',
                                        show_timer: this.showTimer ? this.linkform.controls.showTimer.value ? '1' : '0' : '1',
                                        allow_workspace : this.linkform.controls.workspace.value ? '1' : '0',
                                        allow_feedback : this.linkform.controls.feedback.value ? '1' : '0',
                                        topic_id: this.linkform.controls.topicSelect.value && this.linkform.controls.classSelect.value.length <= 1
                                            ? this.linkform.controls.topicSelect.value : ''
                                    });
                                }
                            });
                        } else {
                            classDetails = [{
                                content_id: this.contentid,
                                class_id: this.classid,
                                start_date: '',
                                end_date: '',
                                start_time: '',
                                end_time: '',
                                all_student: this.allStudent,
                                student_id: this.studentid,
                                batch_id: this.batchid,
                                auto_review: this.linkform.controls.releaseScore.value,
                                notes: '',
                                download: this.linkform.controls.downloadcontent.value ? '1' : '0',
                                workspace : this.linkform.controls.workspace.value ? '1' : '0',
                                show_timer: this.showTimer ? this.linkform.controls.showTimer.value ? '1' : '0' : '1',
                                feedback: this.linkform.controls.feedback.value ? '1' : '0',
                                topic_id: this.linkform.controls.topicSelect.value && this.linkform.controls.classSelect.value.length <= 1
                                    ? this.linkform.controls.topicSelect.value : ''
                            }];
                        }
                        const data = {
                            platform: 'web',
                            role_id: this.auth.getRoleId(),
                            user_id: this.auth.getUserId(),
                            assign: this.assign,
                            school_id: this.auth.getSessionData('school_id'),
                            classdetails: classDetails,
                            classroomDetails: [{
                                content_id: [this.contentid],
                                batch_id: this.batchid,
                                start_date: '',
                                end_date: '',
                                start_time: '',
                                end_time: '',
                                // start_date: this.linkform.controls.startDate.value == null || this.linkform.controls.startDate.value == '' || this.showBatch == true ? '' : this.datePipe.transform(this.linkform.controls.startDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                                // end_date: this.linkform.controls.endDate.value == null || this.linkform.controls.endDate.value == '' || this.showBatch == true ? '' : this.datePipe.transform(this.linkform.controls.endDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                                // start_time: this.linkform.controls.startTime.value == null || this.showBatch == true ? '' : this.linkform.controls.startTime.value,
                                // end_time: this.linkform.controls.endTime.value == null || this.showBatch == true ? '' : this.linkform.controls.endTime.value,
                            }],
                            editor_type: ''
                        };
                        console.log(data, 'content_payload');
                        this.creatorService.addAssignResourse(data).subscribe((successData) => {
                            this.submitSuccess(successData);
                        }, (error) => {
                            console.error(error, 'error_submit');
                        });
                    } else {
                        this.toastr.error('End Date Should be greater than Start Date');
                    }
                } else {
                    this.toastr.error('Select Atleast one Student');
                }
            } else {
                this.toastr.error('No Student Available in this class please select all student');
            }
        } else {
            this.toastr.error('Please fill the mandatory field');
        }
    }

    submitSuccess(successData) {
        if (successData.IsSuccess) {
            this.submitData = successData.ResponseObject;
            this.showTimer = false;
            this.toastr.success('Class Resource Updated Successfully');
            this.auth.setSessionData('contentType', '');
            this.downloadContentAvailable = false;
            this.contentdata.forEach(item => item.checked = false);
            if (this.auth.getSessionData('resourceAccess') == 'true') {
                if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                    this.router.navigate(['/class/topicsAndCurriculum/1']);
                } else if (this.auth.getSessionData('batchassign') == '2') {
                    this.router.navigate(['class/view-assign/2']);
                }
            }
            this.linkform.reset();
            this.multiContentId = [];
            this.resourcetype = false;
            this.defaultShow = false;
            this.showBatch = false;
            this.clearFormArray();
            this.contentName = '';
            this.linkform.controls.classSelect.patchValue([]);
            this.linkform.controls.typeSelection.patchValue('n/a');
            this.linkform.controls.releaseScore.patchValue('0');
            this.linkform.controls.notes.patchValue('');
            this.linkform.controls.radio.patchValue('1');
            this.linkform.controls.batch.patchValue(null);
            this.linkform.controls.startDate.patchValue('');
            this.linkform.controls.endDate.patchValue('');
            const stObject = {hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00')};
            this.linkform.controls.startTime.patchValue(stObject);
            const etObject = {hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00')};
            this.linkform.controls.endTime.patchValue(etObject);
            this.modalRef.close();
            this.startdate = '';
            this.endDate = '';
            this.myDpOptions2 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su'
            };
            this.myDpOptions1 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su'
            };
            this.auth.setSessionData('resourceAccess', false);
        } else {
            this.toastr.error(successData.ErrorObject ? successData.ErrorObject : successData.ResponseObject);
            this.linkform.controls.startDate.patchValue(null);
            this.linkform.controls.endDate.patchValue(null);
            this.startdate = '';
            this.endDate = '';
            const stObject = {hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00')};
            this.linkform.controls.startTime.patchValue(stObject);
            const etObject = {hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00')};
            this.linkform.controls.endTime.patchValue(etObject);
            this.myDpOptions2 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su',
            };
            this.myDpOptions1 = {
                dateRange: false,
                dateFormat: dateOptions.pickerFormat,
                firstDayOfWeek: 'su',
            };
        }
    }

    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classService.subjectList(data).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.subjectData = successData.ResponseObject;
                }
            },
            (error) => {
                console.error(error, 'error_subjectList');
            });
    }

    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classService.gradeList(data).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.gradeData = successData.ResponseObject;
                }
            },
            (error) => {
                console.error(error, 'error_gradeList');
            });
    }

    teacherList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.classService.individualTeacherList(data).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.teacherData = successData.ResponseObject;
                    console.log(this.teacherData, 'teacherData');
                    this.buildTeacherNameLookup();
                    this.decorateContentCreatorNames();
                    if (this.contentDetaildata) {
                        this.createdby = this.resolveCreatorDisplayName(
                            this.getCreatorIdCandidates(this.contentDetaildata),
                            this.collectCreatorFallbackNames(this.contentDetaildata)
                        );
                    }
                }
            },
            (error) => {
                console.log(error, 'error');
            });
    }

    private buildTeacherNameLookup(): void {
        this.teacherNameMap.clear();
        if (!Array.isArray(this.teacherData)) {
            return;
        }

        this.teacherData.forEach((teacher) => {
            const teacherName = teacher?.teacher_name || teacher?.name || teacher?.user_name;
            if (!teacherName) {
                return;
            }

            const possibleIds = [teacher?.teacher_id, teacher?.user_id];
            possibleIds
                .filter((id) => id !== undefined && id !== null && id !== '')
                .forEach((id) => this.teacherNameMap.set(String(id), teacherName));
        });
    }

    private decorateContentCreatorNames(): void {
        if (!Array.isArray(this.contentdata) || !this.contentdata.length) {
            return;
        }

        this.contentdata.forEach((content) => {
            content.creatorDisplayName = this.resolveCreatorDisplayName(
                this.getCreatorIdCandidates(content),
                this.collectCreatorFallbackNames(content)
            );
        });
    }

    private normalizeCreatorId(value: any): string {
        if (value === undefined || value === null) {
            return '';
        }

        const normalized = String(value).trim();
        return normalized;
    }

    private getCreatorIdCandidates(source: any, ...additionalIds: any[]): string[] {
        const candidateValues = [
            ...additionalIds,
            source?.created_by,
            source?.createdBy,
            source?.creator_id,
            source?.creatorId,
            source?.created_user_id,
            source?.createdUserId,
            source?.user_id,
            source?.owner_id
        ];

        const normalized = candidateValues
            .map((value) => this.normalizeCreatorId(value))
            .filter((value) => !!value);

        return Array.from(new Set(normalized));
    }

    private collectCreatorFallbackNames(source: any): string[] {
        if (!source) {
            return [];
        }

        const candidateNames = [
            source?.creatorDisplayName,
            source?.created_by_name,
            source?.createdByName,
            source?.creator_name,
            source?.creatorName,
            source?.created_by_username,
            source?.createdUserName,
            source?.created_user_name,
            source?.owner_name,
            source?.user_name,
            source?.teacher_name,
            source?.created_by_full_name,
            source?.created_by_fullname
        ];

        const normalized = candidateNames
            .map((value) => typeof value === 'string' ? value.trim() : '')
            .filter((value) => !!value);

        return Array.from(new Set(normalized));
    }

    private resolveCreatorDisplayName(idCandidates: string[], fallbackNames: string[]): string {
        const directName = fallbackNames.find((name) => !!name);
        if (directName) {
            return directName;
        }

        for (const id of idCandidates) {
            if (this.teacherNameMap.has(id)) {
                const mappedName = this.teacherNameMap.get(id);
                if (mappedName && mappedName.trim()) {
                    return mappedName;
                }
            }
        }

        return idCandidates[0] ?? '';
    }

    tagList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classService.tagsList(data).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.tagData = successData.ResponseObject;
                }
            },
            (error) => {
                console.error(error, 'error_tagList');
            });
    }

    sortlist() {
        // Show loading indicator
        this.isLoading = true;
        
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            sort_by: this.sortfilter,
            content_user_id: this.contentUserId,
            type: this.typeid,
            page_no: this.pageNo,  // ✅ Fixed: was 'page', backend expects 'page_no'
            records_per_page: this.itemsPerPage,  // ✅ Fixed: was 'record_per_page', backend expects 'records_per_page'
            library: this.libraryselection,
            filter: this.filterselection,
            tags: this.tagid,
            grade: this.gradeid,
            subject: this.subjectid,
            exact_search: this.exactSearch == true ? 1 : 0,
            search_name: this.searchKey
        };
        
        console.log('🔍 PAGINATION DEBUG - Request Parameters:', {
            pageNo: this.pageNo,
            page_no: data.page_no,
            records_per_page: data.records_per_page,
            itemsPerPage: this.itemsPerPage,
            fullData: data
        });
        
        // Cancel any pending requests
        if (this.sortListSubscription) {
            this.sortListSubscription.unsubscribe();
        }
        
        if (this.auth.getRoleId() == '6') {
            data['corporate_id'] = this.auth.getSessionData('corporate_id');
            this.sortListSubscription = this.creatorService.sortmasterlist(data).subscribe((successData) => {
                    this.sortListSuccess(successData);
                    this.isLoading = false;
                },
                (error) => {
                    console.error(error, 'error_slotList');
                    this.isLoading = false;
                });
        } else {
            this.sortListSubscription = this.creatorService.sortmasterlist(data).subscribe((successData) => {
                    this.sortListSuccess(successData);
                    this.isLoading = false;
                },
                (error) => {
                    console.error(error, 'error_slotList');
                    this.isLoading = false;
                });
        }
    }

    sortListSuccess(successData) {
        console.log('📦 PAGINATION DEBUG - Response received:', {
            IsSuccess: successData.IsSuccess,
            itemsReturned: successData.ResponseObject?.length || 0,
            currentPage: this.pageNo,
            currentContentDataLength: this.contentdata.length
        });
        
        if (successData.IsSuccess) {
            let temp = successData.ResponseObject;
            
            console.log('✅ PAGINATION DEBUG - Processing response:', {
                tempLength: temp.length,
                pageNo: this.pageNo,
                willReplace: this.pageNo == 1,
                willAppend: this.pageNo > 1 && temp.length > 0
            });
            
            // For pagination: replace data on page 1, append on subsequent pages (for infinite scroll)
            if (this.pageNo == 1) {
                this.contentdata = successData.ResponseObject;
                console.log('🔄 PAGINATION DEBUG - Replaced data, new length:', this.contentdata.length);
            } else if (this.pageNo > 1 && temp.length > 0) {
                // Only append if using infinite scroll
                for (let entry of temp) {
                    this.contentdata.push(entry);
                }
                console.log('➕ PAGINATION DEBUG - Appended data, new length:', this.contentdata.length);
            }

            // Process each item
            for (let i = 0; i < this.contentdata.length; i++) {
                this.contentdata[i].checked = this.contentdata[i].checked ? this.contentdata[i].checked : false;
                this.contentdata[i].showDropdown = false; // Initialize dropdown state
                if (this.contentdata[i].status == '1') {
                    this.contentdata[i].details = 'Published';
                } else if (this.contentdata[i].status == '5') {
                    this.contentdata[i].details = 'Draft';
                }
            }
            
            // Update pagination calculations
            // Note: Backend returns items per page, we estimate total pages based on whether we got a full page
            if (temp.length < this.itemsPerPage) {
                // This is the last page
                this.totalPages = this.pageNo;
                console.log('📄 PAGINATION DEBUG - Last page detected, totalPages:', this.totalPages);
            } else if (temp.length === this.itemsPerPage) {
                // There might be more pages
                this.totalPages = this.pageNo + 1; // At least one more
                console.log('📄 PAGINATION DEBUG - More pages likely, totalPages:', this.totalPages);
            }
            
            this.decorateContentCreatorNames();

            this.totalRecords = this.contentdata.length;
            this.threshhold = this.totalRecords - 2;
            this.contentdatabackup = this.contentdata;
            this.updatePaginationPages();
            
            console.log('🎯 PAGINATION DEBUG - Final state:', {
                totalRecords: this.totalRecords,
                totalPages: this.totalPages,
                currentPage: this.pageNo,
                paginationPages: this.paginationPages,
                showPagination: this.showPagination,
                itemsPerPage: this.itemsPerPage
            });
            
            this.cdr.detectChanges();
        } else {
            console.log('❌ PAGINATION DEBUG - Response not successful');
        }
        this.cdr.detectChanges();
    }
    
    updatePaginationPages() {
        // Generate array of page numbers for pagination controls
        const maxPagesToShow = 5;
        const pages: number[] = [];
        
        if (this.totalPages <= maxPagesToShow) {
            // Show all pages
            for (let i = 1; i <= this.totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Show subset with current page in middle
            let startPage = Math.max(1, this.pageNo - 2);
            let endPage = Math.min(this.totalPages, startPage + maxPagesToShow - 1);
            
            // Adjust if we're near the end
            if (endPage - startPage < maxPagesToShow - 1) {
                startPage = Math.max(1, endPage - maxPagesToShow + 1);
            }
            
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
        }
        
        this.paginationPages = pages;
    }
    
    goToPage(page: number) {
        if (page >= 1 && page <= this.totalPages && page !== this.pageNo) {
            this.pageNo = page;
            this.contentdata = []; // Clear current data for clean page load
            this.sortlist();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    goToFirstPage() {
        this.goToPage(1);
    }
    
    goToLastPage() {
        this.goToPage(this.totalPages);
    }
    
    switchTab(tab: 'library' | 'folder') {
        if (this.activeTab !== tab) {
            console.log('📑 Switching to tab:', tab);
            
            if (tab === 'folder') {
                // Navigate to Content Folder view (classroom/folder organization)
                this.router.navigate(['/classroom/list-classroom']);
            } else {
                // Content Library - stay on current page and reload if needed
                this.activeTab = tab;
                if (this.contentdata.length === 0) {
                    this.contentdata = [];
                    this.pageNo = 1;
                    this.sortlist();
                }
            }
        }
    }

    toggleDropdown(index: number) {
        // Close all other dropdowns
        this.contentdata.forEach((item, i) => {
            if (i !== index) {
                item.showDropdown = false;
            }
        });
        
        // Toggle the clicked dropdown
        this.contentdata[index].showDropdown = !this.contentdata[index].showDropdown;
        
        // Prevent document click handler from immediately closing the dropdown
        this.suppressDocumentClick = true;
        setTimeout(() => {
            this.suppressDocumentClick = false;
        }, 100);
        
        this.cdr.detectChanges();
    }

    closeDropdown(index: number) {
        if (this.contentdata && this.contentdata[index]) {
            this.contentdata[index].showDropdown = false;
            this.cdr.detectChanges();
        }
    }
    
    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        if (this.suppressDocumentClick) {
            return;
        }
        const target = event.target as HTMLElement;
        // Don't close dropdown if clicking on the dropdown button or dropdown menu
        if (!target.closest('.content-card__dropdown-toggle') && 
            !target.closest('.dropdown-content') && 
            !target.closest('.dropdown')) {
            let shouldDetect = false;
            this.contentdata.forEach(item => {
                if (item.showDropdown) {
                    item.showDropdown = false;
                    shouldDetect = true;
                }
            });
            if (shouldDetect) {
                this.cdr.detectChanges();
            }
        }
    }
    
    listDetails(event, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: event.content_id,
            content_format: event.content_format,
            content_type: event.content_type,
            school_id: event.school_id
        };
        this.auth.setSessionData('editor', JSON.stringify(data));
        this.creatorService.repositoryDetail(data).subscribe((successData) => {
                this.detailsSuccess(successData, event, type);
            },
            (error) => {
                console.error(error, 'error_lisDetails');
            });
    }

    detailsSuccess(successData, event, type) {
        if (successData.IsSuccess) {
            this.detailData = successData.ResponseObject;
            console.log('detailsSuccess - event:', event, 'type:', type, 'previewType:', this.previewType);
            console.log('detailsSuccess - content_type:', event.content_type, 'content_format:', event.content_format);
            console.log('detailsSuccess - API response content_type:', this.detailData.content_type);
            
            // Use content_type from API response if not available in event
            const contentType = event.content_type || this.detailData.content_type;
            
            if (this.previewType == 'edit') {
                // this.auth.setSessionData('save-Question', JSON.stringify(this.detailData));
                if (contentType == '1') {
                    if (type == 'addPdf') {
                        console.log('Navigating to repository/add-resources/edit');
                        this.router.navigate(['repository/add-resources/edit']);
                    } else if (type == 'addText') {
                        console.log('Navigating to content-text-resource/text-resource/edit');
                        this.router.navigate(['content-text-resource/text-resource/edit']);
                    }
                } else if (contentType == '2') {
                    this.auth.setSessionData('upload-type', 'assignment');
                    if (type == 'addPdf') {
                        console.log('Navigating to repository/create-assessment/edit');
                        this.router.navigate(['repository/create-assessment/edit']);
                    } else if (type == 'addText') {
                        this.auth.setSessionData('textType', 'assignment');
                        console.log('Navigating to content-text-resource/text-assignment/edit');
                        this.router.navigate(['content-text-resource/text-assignment/edit']);
                    }
                } else if (contentType == '3') {
                    this.auth.setSessionData('upload-type', 'assessment');
                    if (type == 'addPdf') {
                        console.log('Navigating to repository/create-assessment/edit');
                        this.router.navigate(['repository/create-assessment/edit']);
                    } else if (type == 'addText') {
                        this.auth.setSessionData('textType', 'assessment');
                        console.log('Navigating to content-text-resource/text-assignment/edit');
                        this.router.navigate(['content-text-resource/text-assignment/edit']);
                    }
                }
            } else if (this.previewType == 'pdf') {
                this.auth.setSessionData('preview', 'repository');
                // Use content_type from API response if type is undefined
                const previewType = type || contentType;
                if (previewType == '1') {
                    this.auth.setSessionData('preview_page', 'create_resources');
                    this.router.navigate(['/repository/preview']);
                } else if (previewType == '2') {
                    this.auth.setSessionData('preview_page', 'create_assignments');
                    this.router.navigate(['/repository/preview']);
                } else if (previewType == '3') {
                    this.auth.setSessionData('preview_page', 'create_assessments');
                    this.router.navigate(['/repository/preview']);
                }
            } else if (this.previewType == 'text') {
                this.auth.setSessionData('preview', 'repository');
                // Use content_type from API response if type is undefined
                const previewType = type || contentType;
                if (previewType == '1') {
                    this.auth.setSessionData('preview_page', 'text_resources');
                    this.router.navigate(['/repository/preview']);
                } else if (previewType == '2') {
                    this.auth.setSessionData('preview_page', 'text_assignments');
                    this.router.navigate(['/repository/preview']);
                } else if (previewType == '3') {
                    this.auth.setSessionData('preview_page', 'text_assessments');
                    this.router.navigate(['/repository/preview']);
                }
            }
        }
    }

    testDtails(event) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: event.content_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.creatorService.testDetail(data).subscribe((successData) => {
                this.testSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_lisDetails');
            });
    }

    testSuccess(successData) {
        if (successData.IsSuccess) {
            this.auth.setSessionData('editTestDetails', JSON.stringify(successData.ResponseObject[0]));
            this.router.navigate(['repository/create-test/edit']);
        }
    }

    scratchTypeQuestions(value) {
        this.auth.setSessionData('textType', value);
        this.router.navigate(['content-text-resource/text-assignment/add']);
        this.close();
    }

    clearall() {
        this.clearSettedData();
        this.setSearch_Filter();
        this.sortlist();
    }

    clearSettedData() {
        this.libraryselection = '0';
        this.contentUserId = '0';
        this.sortfilter = '0';
        this.typeid = 'list';
        this.gradeid = [];
        this.subjectid = [];
        this.tagid = [];
        this.searchKey = '';
        this.exactSearch = false;
        this.selectAuthored = '';
        this.selectDraft = '';
    }

    callCurrentBtn(type) {
        this.contentdata = [];
        this.pageNo = 1;
        this.totalRecords = 0;
        this.threshhold = 0;
        if (type == 'authored') {
            if (this.selectAuthored == 'active2') {
                this.selectAuthored = '';
                this.contentUserId = '0';
            } else {
                this.selectAuthored = 'active2';
                this.contentUserId = this.auth.getUserId().toString();
            }
            // this.auth.setSessionData('ContentHome-AuthoredByMe', this.contentUserId);
            this.typeid = 'list';
            // this.auth.setSessionData('ContentHome-MyDraft', this.typeid);
            this.selectDraft = '';
        } else if (type == 'mydraft') {
            if (this.selectDraft == 'active2') {
                this.selectDraft = '';
                this.typeid = 'list';
            } else {
                this.selectDraft = 'active2';
                this.typeid = type;
            }
            this.contentUserId = '0';
            // this.auth.setSessionData('ContentHome-AuthoredByMe', this.contentUserId);
            // this.auth.setSessionData('ContentHome-MyDraft', this.typeid);
            this.selectAuthored = '';
        }
        this.setSearch_Filter();
        this.sortlist();
    }

    // mydraft(type) {
    //     this.contentdata = [];
    //     this.pageNo = 1;
    //     if (this.typeid == type) {
    //         this.typeid = 'list';
    //         this.auth.setSessionData('ContentHome-MyDraft', this.typeid);
    //     } else {
    //         this.typeid = type;
    //         this.auth.setSessionData('ContentHome-MyDraft', this.typeid);
    //     }
    //     // this.totalRecords = 0;
    //     // this.threshhold = 0;
    //     this.sortlist();
    // }

    selectedgrade(event) {
        this.contentdata = [];
        this.pageNo = 1;
        if (typeof event == 'undefined') {
            this.gradeid = [];
            // this.auth.setSessionData('ContentHome-Grade', JSON.stringify(this.gradeid));
        } else {
            this.gradeid = [];
            for (let i = 0; i < event.length; i++) {
                this.gradeid.push(event[i].grade_id);
            }
            // this.auth.setSessionData('ContentHome-Grade', JSON.stringify(this.gradeid));
        }
        this.setSearch_Filter();
        this.sortlist();
    }

    selectedsubject(event) {
        this.contentdata = [];
        this.pageNo = 1;
        if (typeof event == 'undefined') {
            this.subjectid = [];
            // this.auth.setSessionData('ContentHome-Subject', JSON.stringify(this.subjectid));
        } else {
            this.subjectid = [];
            for (let i = 0; i < event.length; i++) {
                this.subjectid.push(event[i].subject_id);
            }
            // this.auth.setSessionData('ContentHome-Subject', JSON.stringify(this.subjectid));
        }
        this.setSearch_Filter();
        this.sortlist();
    }

    selectedtag(event) {
        this.contentdata = [];
        this.pageNo = 1;
        if (typeof event == 'undefined') {
            this.tagid = [];
            // this.auth.setSessionData('ContentHome-Tag', JSON.stringify(this.tagid));
        } else {
            this.tagid = [];
            for (let i = 0; i < event.length; i++) {
                this.tagid.push(event[i].tag_name);
            }
            // this.auth.setSessionData('ContentHome-Tag', JSON.stringify(this.tagid));
        }
        this.setSearch_Filter();
        this.sortlist();
    }

    library(event) {
        this.libraryselection = event.target.value;
        this.setSearch_Filter();
        // this.auth.setSessionData('ContentHome-EntireLibrary', this.libraryselection);
        this.contentdata = [];
        this.pageNo = 1;
        this.sortlist();
    }

    sort(event) {
        if (event.target.value == '0' || event.target.value == '-1' || event.target.value == 'AZ' || event.target.value == 'ZA') {
            this.sortfilter = event.target.value;
            // this.auth.setSessionData('ContentHome-Sort', this.sortfilter);
            this.contentUserId = '0';
            // this.auth.setSessionData('ContentHome-AuthoredByMe', this.contentUserId);
        } else {
            this.sortfilter = event.target.value;
            this.contentUserId = event.target.value;
            // this.auth.setSessionData('ContentHome-Sort', this.contentUserId);
            // this.auth.setSessionData('ContentHome-AuthoredByMe', this.contentUserId);
        }

        this.highlight = '';
        this.contentdata = [];
        this.pageNo = 1;
        this.setSearch_Filter();
        this.sortlist();
    }

    detailPreview(data, type) {
        this.modalRef = this.modalService.open(this.addDetails, {size: 'lg', backdrop: 'static'});
        this.detailpreviewlist(data, 'details');
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    navigateToPreview(data) {
        if (data.content_format == '1') {
            this.PreviewPage(data, data.content_type);
        } else {
            this.PreviewText(data, data.content_type);
        }
    }

    showAdd() {
        this.modalRef = this.modalService.open(this.createContentTemp, {size: 'lg', backdrop: 'static'});
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    upload(type) {
        this.modalRef.close('addAsset');
        if (type == 'resource') {
            this.modalRef = this.modalService.open(this.addResources, {size: 'lg', backdrop: 'static'});
        } else if (type == 'assessment') {
            this.modalRef = this.modalService.open(this.addAssessment, {size: 'lg', backdrop: 'static'});
        } else if (type == 'assignment') {
            this.modalRef = this.modalService.open(this.addAssignment, {size: 'lg', backdrop: 'static'});
        }
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
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

    close() {
        this.modalRef.close();
    }

    close1() {
        this.contentName = '';
        this.showTimer = false;
        this.modalRef.close();
        this.linkform.reset();
        this.downloadContentAvailable = false;
        this.linkform.controls.classSelect.patchValue([]);
        this.linkform.controls.workspace.patchValue(false);
        this.linkform.controls.feedback.patchValue(false);
        this.linkform.controls.startTime.patchValue('');
        this.linkform.controls.endTime.patchValue('');
        this.clearFormArray();
        this.myDpOptions = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: new Date(this.setDate).getFullYear(),
                month: new Date(this.setDate).getMonth() + 1,
                day: new Date(this.setDate).getDate() != 1 ? new Date().getDate() - 1 : -1,
            },
        };
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: this.myDpOptions.disableUntil.year,
                month: this.myDpOptions.disableUntil.month,
                day: this.myDpOptions.disableUntil.day
            },
        };
        const stObject = {hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00')};
        this.linkform.controls.startTime.patchValue(stObject);
        const etObject = {hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00')};
        this.linkform.controls.endTime.patchValue(etObject);
        this.linkform.controls.releaseScore.patchValue('0');
        this.linkform.controls.radio.patchValue('1');
    }

    cancel() {
        this.linkform.reset();
        this.showTimer = false;
        this.contentName = '';
        this.resourcetype = false;
        this.allowScore = false;
        this.defaultShow = false;
        this.showBatch = false;
        this.downloadContentAvailable = false;
        this.linkform.controls.classSelect.patchValue([]);
        this.linkform.controls.workspace.patchValue(false);
        this.linkform.controls.feedback.patchValue(false);
        this.linkform.controls.notes.patchValue('');
        this.linkform.controls.typeSelection.patchValue('n/a');
        this.linkform.controls.releaseScore.patchValue('0');
        this.linkform.controls.radio.patchValue('1');
        this.linkform.controls.batch.patchValue(null);
        this.clearFormArray();
        const stObject = {hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00')};
        this.linkform.controls.startTime.patchValue(stObject);
        const etObject = {hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00')};
        this.linkform.controls.endTime.patchValue(etObject);
        this.modalRef.close();
        this.startdate = '';
        this.endDate = '';
    }

    editAction(event, type, modelOpen) {
        console.log('editAction called with:', event, 'type:', type, 'modelOpen:', modelOpen);
        this.clearSession = false;
        if (modelOpen == '1') {
            this.modalRef.close('detailsTemplate');
        }
        this.previewType = 'edit';
        this.auth.setSessionData('editresources', JSON.stringify(event));
        if(event.is_test == 1) {
            this.testDtails(event);
        } else {
            this.listDetails(event, type);
        }
    }

    PreviewPage(event, type) {
        console.log('PreviewPage called with:', event, 'type:', type);
        this.clearSession = false;
        this.previewType = 'pdf';
        this.auth.setSessionData('editresources', JSON.stringify(event));
        this.listDetails(event, type);
    }

    PreviewText(event, type) {
        console.log('PreviewText called with:', event, 'type:', type);
        this.clearSession = false;
        this.previewType = 'text';
        this.auth.setSessionData('editresources', JSON.stringify(event));
        this.listDetails(event, type);
    }

    getContentThumbnail(content: any): SafeUrl | string {
        return this.buildThumbnail(content?.profile_url, content?.content_type);
    }

    getDetailThumbnail(): SafeUrl | string {
        return this.buildThumbnail(this.profileurl, this.contentType);
    }

    private buildThumbnail(path: string | null | undefined, type: any): SafeUrl | string {
        const fallbackKey = type !== undefined && type !== null ? type.toString() : 'default';
        const fallback = this.thumbnailFallbacks[fallbackKey] || this.thumbnailFallbacks.default;

        if (!path) {
            return fallback;
        }

        const absoluteUrl = this.normalizeAssetPath(path);
        return this.sanitizer.bypassSecurityTrustUrl(absoluteUrl);
    }

    private normalizeAssetPath(path: string): string {
        if (/^https?:\/\//i.test(path)) {
            return encodeURI(path);
        }

        const base = (this.webhost || '').replace(/\/+$/, '');
        const sanitizedPath = path.replace(/^\/+/, '');
        return encodeURI(`${base}/${sanitizedPath}`);
    }

    encodePdfFileAsURL(event: any, type) {
        let images = [];
        const imageLength = event.target.files.length;
        for (let i = 0; i < event.target.files.length; i++) {
            const pdfDetails = event.target.files[i];
            const reader = new FileReader();
            reader.onload = (event: any) => {
                const uploadTypeList = event.target.result.split(',');
                images.push({
                    image: uploadTypeList[1],
                    size: pdfDetails.size,
                    type: pdfDetails.type,
                    name: pdfDetails.name
                });
                const pic = pdfDetails.type.split('/');
                if (pic[1] == 'pdf') {
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

    onUploadKYCFinishedpdf(getUrlEdu, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: getUrlEdu,
            uploadtype: 'content'
        };

        this.common.fileUpload(data).subscribe(
            (successData) => {
                this.pdfuploadSuccess(successData, type);
            },
            (error) => {
                console.error(error, 'error_pdfUpload');
            }
        );
    }

    pdfuploadSuccess(successData, type) {
        // this.settings.loadingSpinner = false;
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.pdfpath = [];
            this.pdfpaththumb = [];
            this.response = successData.ResponseObject;
            for (let i = 0; i < this.response.imagepath.length; i++) {
                this.pdfpath.push(this.response.imagepath[i]);
                this.pdfpaththumb.push(this.response.imagepath[i].resized_url);
            }
            this.auth.setSessionData('pdf', JSON.stringify(this.pdfpath));
            this.auth.setSessionData('pdf_thumb', JSON.stringify(this.pdfpaththumb));
            if (type == 'resource') {
                this.router.navigate(['repository/add-resources/add']);
            } else if (type == 'assessment') {
                this.router.navigate(['repository/create-assessment/add']);
                this.auth.setSessionData('upload-type', 'assessment');
            } else if (type == 'assignment') {
                this.router.navigate(['repository/create-assessment/add']);
                this.auth.setSessionData('upload-type', 'assignment');
            }
            this.modalRef.close();
        } else {
            this.toastr.error('Invalid File Format');
        }
    }

    checkValue(event: Event) {
        const target = event?.target as HTMLInputElement | null;
        if (target?.checked) {
            this.linkform.controls.radio.patchValue('0', {emitEvent: false});
            this.listStudent = true;
            if (!Array.isArray(this.linkform.controls.specificstudent.value)) {
                this.linkform.controls.specificstudent.patchValue([]);
            }
        }
    }

    checkValue1(event: Event) {
        const target = event?.target as HTMLInputElement | null;
        if (target?.checked) {
            this.linkform.controls.radio.patchValue('1', {emitEvent: false});
            this.listStudent = false;
            this.linkform.controls.specificstudent.patchValue([]);
        }
    }

    onDateChanged(event: IMyDateModel): void {
        this.myDpOptions1 = {};
        this.myDpOptions1 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: event.singleDate.date.year,
                month: event.singleDate.date.month,
                day: event.singleDate.date.day - 1
            },
        };
    }

    checkTimeDifference(formControl) {
        if (formControl.value.startDate && formControl.value.endDate) {
            if (formControl.value.startDate.singleDate.jsDate && formControl.value.endDate.singleDate.jsDate) {
                const startDate = this.datePipe.transform(formControl.value.startDate.singleDate.jsDate, 'yyyy-MM-dd');
                const endDate = this.datePipe.transform(formControl.value.endDate.singleDate.jsDate, 'yyyy-MM-dd');
                if (formControl.value.startTime && formControl.value.endTime) {
                    const startTime = parseInt(formControl.value.startTime.hour);
                    const startTimeHour = parseInt(formControl.value.startTime.minute);
                    const endTime = parseInt(formControl.value.endTime.hour);
                    const endTimeHour = parseInt(formControl.value.endTime.minute);
                    const totalStartTimeMins = (startTime * 60) + startTimeHour;
                    const totalendTimeHour = (endTime * 60) + endTimeHour;
                    if (startDate == endDate) {
                        return totalStartTimeMins >= totalendTimeHour;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    typeSelection() {
        const selectBox: any = document.getElementById('selectBox');
        const selectedValue = selectBox.options[selectBox.selectedIndex].value;
        console.log(selectedValue, 'selected');
        if (selectedValue == 1) {
            this.resourcetype = true;
            this.defaultShow = true;
            this.showBatch = false;
            this.assign = '1';
            this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
        } else if (selectedValue == 2) {
            this.linkform.controls.radio.patchValue('1');
            this.clearFormArray();
            this.resourcetype = false;
            this.defaultShow = true;
            this.showBatch = true;
            this.assign = '2';
            this.startdate = '';
            this.endDate = '';
            this.linkform.controls.classSelect.patchValue([]);
            this.linkform.controls.notes.patchValue('');
            const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
            const dropped = dr1.split('-');
            const droppedObject: IMyDateModel = {
                isRange: false,
                singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
                dateRange: null
            };
            this.linkform.controls.startDate.patchValue(droppedObject);
        }
        this.linkform.controls.workspace.patchValue(false);
        this.linkform.controls.feedback.patchValue(false);
        this.allowScore = this.contentName ? this.releaseGrade == '1' && this.resourcetype && this.contentType != '1' && this.checkQuestion != 1
            : this.settingList[2]?.value == 1 ?? true;
    }

    batchDataList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: '2'
        };
        this.classService.batchList(data).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.batchData = successData.ResponseObject;
                }
            },
            (error) => {
                console.error(error, 'error_batchData');
            });
    }

    removeSelectedMultiContent(data, index) {
        this.multiContentId.splice(index, 1);
        const contentIndex = this.contentdata.findIndex(x => x.content_id == data.content_id);
        this.isEssay = this.multiContentId.length == 1 && this.multiContentId.some(content => content.is_essay == '1') ? '1' : '0';
        this.showTimer = !(this.multiContentId.some(value => value.is_essay != '1'));
        this.contentdata[contentIndex].checked = false;
    }

    removeContent(value) {
        this.deleteValue = value;
        this.modalRef = this.modalService.open(this.deleteList, {size: 'md', backdrop: 'static'});
    }

    deleteContent(value) {
        console.log(value);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: value.content_id
        };
        this.creatorService.deleteContentRepository(data).subscribe((successData) => {
                this.deleteContentSuccess(successData, value);
            },
            (error) => {
                console.error(error, 'delete_content');
            });
    }

    deleteContentSuccess(successData, value) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.close();
            this.contentdata = [];
            this.pageNo = 1;
            this.sortlist();
        } else {
            this.deleteAssignedContent(value);
        }
    }

    deleteAssignedContent(value) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: value.content_id
        };
        this.creatorService.deleteAssignedContent(data).subscribe((successData) => {
                this.deleteAssignedContentSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_deleteAssignedContent');
            });
    }

    deleteAssignedContentSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.close();
            this.contentdata = [];
            this.pageNo = 1;
            this.sortlist();
        }
    }

    showInfo(id, i) {
        this.contentdata.forEach((item, index) => {
            item.showDetails = index == i ? !item.showDetails : false;
        });
    }

    setSearch_Filter() {
        let data: any;
        if (this.auth.getSessionData('resourceAccess') == 'true') {
            data = JSON.parse(this.auth.getSessionData(SessionConstants.non_directcontentSearch));
        } else {
            data = JSON.parse(this.auth.getSessionData(SessionConstants.directcontentSearch));
        }
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    items.libary = this.libraryselection;
                    items.content_userid = this.contentUserId;
                    items.sortFilter = this.sortfilter;
                    items.type_id = this.typeid;
                    items.grade_id = this.gradeid;
                    items.subject_id = this.subjectid;
                    items.tag_id = this.tagid;
                    items.contentName = this.searchKey;
                    items.extact_Search = this.exactSearch;
                    items.selectAuthored = this.selectAuthored;
                    items.selectDraft = this.selectDraft;
                } else {
                    const searchData = {
                        contentName: this.searchKey,
                        libary: this.libraryselection,
                        content_userid: this.contentUserId,
                        sortFilter: this.sortfilter,
                        type_id: this.typeid,
                        grade_id: this.gradeid,
                        subject_id: this.subjectid,
                        tag_id: this.tagid,
                        extact_Search: this.exactSearch,
                        selectAuthored: this.selectAuthored,
                        selectDraft: this.selectDraft,
                        school_id: this.auth.getSessionData('school_id')
                    };
                    data.push(searchData);
                }
            });
            data = data.filter((test, index, array) =>
                    index === array.findIndex((findTest) =>
                        findTest.school_id === test.school_id
                    )
            );
            this.auth.getSessionData('resourceAccess') == 'true' ? this.auth.setSessionData(SessionConstants.non_directcontentSearch, JSON.stringify(data)) :
                this.auth.setSessionData(SessionConstants.directcontentSearch, JSON.stringify(data));
        }
    }

    getSearch_Filter() {
        let data: any;
        if (this.auth.getSessionData('resourceAccess') == 'true') {
            data = JSON.parse(this.auth.getSessionData(SessionConstants.non_directcontentSearch));
        } else {
            data = JSON.parse(this.auth.getSessionData(SessionConstants.directcontentSearch));
        }
        data.every((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                this.libraryselection = items.libary;
                this.contentUserId = items.content_userid;
                this.sortfilter = items.sortFilter;
                this.typeid = items.type_id;
                this.gradeid = items.grade_id;
                this.subjectid = items.subject_id;
                this.tagid = items.tag_id;
                this.searchKey = items.contentName;
                this.exactSearch = items.extact_Search;
                this.selectAuthored = items.selectAuthored;
                this.selectDraft = items.selectDraft;
                return false;
            } else {
                this.clearSettedData();
            }
            return true;
        });
    }

    callCreateFrom() {
        this.modalRef.close('createContentTemp');
        this.modalRef = this.modalService.open(this.createScratchTemp, {size: 'lg', backdrop: 'static'});
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    selectOrUnSelectContentList(item, event) {
        console.log(item, event);
        if (event.target.checked) {
            item.checked = true;
            this.multiContentId.push({
                content_id: item.content_id,
                name: item.name,
                content_type: item.content_type,
                content_format: item.content_format,
                download: item?.download ? item.download : '0',
                is_essay: item?.is_essay ? item.is_essay : '0'
            });
        } else {
            item.checked = false;
            const index = this.multiContentId.findIndex(x => x.content_id == item.content_id);
            this.multiContentId.splice(index, 1);
        }
        const essayType = this.multiContentId.some(content => content.is_essay != '1');
        this.isEssay = !essayType ? '1' : '0';
        this.showTimer = !(this.multiContentId.some(value => value.is_essay != '1'));
        event.stopPropagation();
    }

    multiAssignOfContent() {
        this.downloadContentAvailable = this.multiContentId.some(code => code.download == '1');
        this.linkform.controls.downloadcontent.patchValue(this.downloadContentAvailable);
        const essayType = this.multiContentId.some(content => content.is_essay != '1');
        this.isEssay = !essayType ? '1' : '0';
        if (this.showIcon && this.assignIcon) {
            this.pathContentDetails('assign');
        } else if (this.assignDirect && this.manageOwnContent) {
            this.linkform.controls.typeSelection.patchValue('1');
            this.resourcetype = true;
            this.defaultShow = true;
            this.showBatch = false;
            this.assign = '1';
            this.pathContentDetails('notassign');
        }
    }

    pathContentDetails(type) {
        console.log(type)
        if (type == 'assign') {
            const contentType = this.auth.getSessionData('contentType');
            if (this.multiContentId.some((code) => code.content_type != contentType)) {
                this.toastr.error('Please assign Correct content type form Content-Library');
                return false;
            }
            if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                this.linkform.controls.notes.patchValue('');
                this.topicsList(this.classid);
                this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
                this.linkform.controls.classname.patchValue(this.choosedData[0].class_name ? this.choosedData[0].class_name : '');
                this.modalRef = this.modalService.open(this.addAssign, {
                    centered: false,
                    scrollable: false,
                    windowClass: 'assignPopUp',
                    size: 'xl',
                    backdrop: 'static'
                });
                this.classDropDown = false;
                this.resourcetype = true;
                this.addClassDate();
                this.defaultShow = true;
                this.firstAssign = false;
                this.assign = '1';
                this.showBatch = false;
                this.allowScore = true;
                this.linkform.controls.classSelect.patchValue(this.choosedData[0].class_name ? [this.choosedData[0].class_id] : []);
                // setTimeout(() => {
                this.linkform.get('dateRanges').value.forEach((control, index) => {
                    const formControlName = this.linkform['controls'].dateRanges['controls'][index]['controls'];
                    formControlName.class_name.patchValue(this.choosedData[0].class_name ? this.choosedData[0].class_name : '');
                    formControlName.class_id.patchValue(this.choosedData[0].class_id ? this.choosedData[0].class_id : '');
                    if (this.choosedData[0].start_date != '0000-00-00') {
                        const sd = this.choosedData[0].start_date.split('-');
                        const sdObject: IMyDateModel = {
                            isRange: false,
                            singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
                            dateRange: null
                        };
                        const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                        const dropped = dr1.split('-');
                        const droppedObject: IMyDateModel = {
                            isRange: false,
                            singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
                            dateRange: null
                        };
                        formControlName.startDate.patchValue(droppedObject);
                        this.myDpOptions1 = {};
                        this.myDpOptions1 = {
                            dateRange: false,
                            dateFormat: dateOptions.pickerFormat,
                            firstDayOfWeek: 'su',
                            disableUntil: {
                                year: parseInt(sd[0]),
                                month: parseInt(sd[1]),
                                day: parseInt(sd[2]) - 1
                            },
                        };
                        formControlName.class_startDate.patchValue(this.choosedData[0].start_date);
                    } else {
                        const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                        const dropped = dr1.split('-');
                        const droppedObject: IMyDateModel = {
                            isRange: false,
                            singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
                            dateRange: null
                        };
                        formControlName.startDate.patchValue(droppedObject);
                    }
                    if (this.choosedData[0].end_date != '0000-00-00') {
                        const sd = this.choosedData[0].end_date.split('-');
                        const sdObject: IMyDateModel = {
                            isRange: false,
                            singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
                            dateRange: null
                        };
                        this.myDpOptions1 = {};
                        this.myDpOptions1 = {
                            dateRange: false,
                            dateFormat: dateOptions.pickerFormat,
                            firstDayOfWeek: 'su',
                            disableUntil: {
                                year: this.myDpOptions.disableUntil.year,
                                month: this.myDpOptions.disableUntil.month,
                                day: this.myDpOptions.disableUntil.day
                            },
                        };
                        formControlName.class_endDate.patchValue(this.choosedData[0].end_date);
                    } else {
                        formControlName.endDate.patchValue(null);
                    }
                });
                // }, 1000)
                this.allowScore = this.contentName ? this.releaseGrade == '1' && this.resourcetype && this.contentType != '1' && this.checkQuestion != 1
                    : this.settingList[2]?.value == 1 ?? true;
            } else if (this.auth.getSessionData('batchassign') == '2') {
                this.modalRef = this.modalService.open(this.adddirectAssign, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.assign = '2';
                this.showBatch = true;
                this.allowScore = this.contentName ? this.releaseGrade == '1' && this.resourcetype && this.contentType != '1' && this.checkQuestion != 1
                    : this.settingList[2]?.value == 1 ?? true;
            }

        } else if (type == 'notassign') {
            if ((this.auth.getRoleId() == '2') || this.auth.getRoleId() == '6' || (this.auth.getRoleId() == '4') && (this.auth.getSessionData('teacher_type') == '0')) {
                this.batchDataList();
                this.classDropDown = true;
                this.firstAssign = true;
                this.linkform.controls.startDate.patchValue('');
                this.linkform.controls.endDate.patchValue('');
                this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
                this.allowScore = this.contentName ? this.releaseGrade == '1' && this.resourcetype && this.contentType != '1' && this.checkQuestion != 1
                    : this.settingList[2]?.value == 1 ?? true;
                this.modalRef = this.modalService.open(this.addAssign, {
                    centered: false,
                    scrollable: false,
                    windowClass: 'assignPopUp',
                    size: 'xl',
                    backdrop: 'static'
                });
            } else if ((this.auth.getRoleId() == '4') && (this.auth.getSessionData('teacher_type') == '1')) {
                this.firstAssign = false;
                this.classDropDown = true;
                this.resourcetype = true;
                this.defaultShow = true;
                this.assign = '1';
                this.startdate = '';
                this.endDate = '';
                this.linkform.controls.classSelect.patchValue([]);
                this.linkform.controls.notes.patchValue('');
                setTimeout(() => {
                    this.linkform.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
                });
                this.linkform.controls.radio.patchValue('1');
                this.linkform.controls.startDate.patchValue('');
                this.linkform.controls.endDate.patchValue('');
                this.allowScore = this.contentName ? this.releaseGrade == '1' && this.resourcetype && this.contentType != '1' && this.checkQuestion != 1
                    : this.settingList[2]?.value == 1 ?? true;
                this.cdr.detectChanges();
                this.modalRef = this.modalService.open(this.addAssign, {
                    centered: false,
                    scrollable: false,
                    windowClass: 'assignPopUp',
                    size: 'xl',
                    backdrop: 'static'
                });
            }
        }
    }
}
