import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import {NgbModalConfig, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {DatePipe, TitleCasePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import {IAngularMyDpOptions, IMyDateModel} from '@nodro7/angular-mydatepicker';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClassService} from '../../../shared/service/class.service';
import {DomSanitizer} from '@angular/platform-browser';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {TeacherService} from '../../../shared/service/teacher.service';
import {SessionConstants} from '../../../shared/data/sessionConstants';
import {ZoomServiceService} from '../../../shared/service/zoom-service.service';
import {dateOptions, timeZone} from '../../../shared/data/config';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {StudentService} from 'src/app/shared/service/student.service';
import {ValidationService} from 'src/app/shared/service/validation.service';
import {EnvironmentService} from '../../../environment.service';
import {SseClient} from 'ngx-sse-client';
import {Subscription} from 'rxjs';
import {urls} from '../../../shared/utils/urls';

@Component({
    selector: 'app-list-class',
    templateUrl: './list-class.component.html',
    styleUrls: ['./list-class.component.scss']
})

export class ListClassComponent implements OnInit, OnDestroy {
    // myDpOptions: IAngularMyDpOptions = {
    //     dateRange: false,
    //     dateFormat:dateOptions.pickerFormat,
    //     // other options are here...
    // };
    public setDate = new Date().toLocaleString('en-US', {timeZone: timeZone.location});
    myDpOptions: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: dateOptions.pickerFormat,
        disableUntil: {
            year: new Date(this.setDate).getFullYear(),
            month: new Date(this.setDate).getMonth() + 1,
            day: new Date(this.setDate).getDate() - 1
        },
        calendarAnimation: {
            in: 4,
            out: 4
        },
        firstDayOfWeek: 'su'
    };
    myDpOptions1: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: dateOptions.pickerFormat,
        firstDayOfWeek: 'su',
        disableUntil: {
            year: new Date(this.setDate).getFullYear(),
            month: new Date(this.setDate).getMonth() + 1,
            day: new Date(this.setDate).getDate() - 1
        },
        calendarAnimation: {
            in: 4,
            out: 4
        }
    };
    myDpOptions2: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: dateOptions.pickerFormat,
        firstDayOfWeek: 'su',
        disableUntil: {
            year: new Date(this.setDate).getFullYear(),
            month: new Date(this.setDate).getMonth() + 1,
            day: new Date(this.setDate).getDate() - 1
        },
        calendarAnimation: {
            in: 4,
            out: 4
        }
    };
    public classform: FormGroup;
    public studentEmailForm: FormGroup;
    public studentClassChange: FormGroup;
    public makeUpClass: FormGroup;
    public listData: any;
    public deleteUser: any;
    public modalRef: NgbModalRef;
    public modalRef1: NgbModalRef;
    public closeResult: string;
    public filetype: any;
    public url: any;
    public getUrl: any;
    public getUrl1: any;
    public schoolData: any;
    public fileUploader: any;
    public schoolDataList: any = 0;
    public choosedData: any = [];
    public type: any;
    public allStudentList: any = [];
    public idData: any;
    public detailData: any;
    public studentData: any = [];
    public className: any;
    public idForClass: any;
    public classlisthighlight: any;
    public statusOptions = [
        { value: '3', label: 'Active' },
        { value: '2', label: 'Upcoming' },
        { value: '4', label: 'Completed' },
        { value: '1', label: 'All' },
        { value: '6', label: 'Draft' }
    ];
    public teacherType: any;
    public batchData: any;
    public gradeData: any;
    public subjectData: any;
    public selectCurriculumFolder: any;
    public selectGrade: any = [];
    public selectSubject: any = [];
    public settingList = [];
    public settingValue = '0';
    public allowSelect: boolean;
    public searchClass: any = '';
    public searchStudent: any = '';
    public searchText: any = '';
    public roleId: any;
    public userId: any;
    public schoolStatus: any;
    public showLoader: boolean;
    public classInfo: any;
    public classId: any = '';
    public showNotes: any;
    public notes: any = '';
    public editorValue: any;
    public studentShow = false;
    public teacherData: any = [];
    public selectTeacher = null;
    public selectCourse = [];
    public selector: string = '.scrollPanel4';
    public pageNo: any = 1;
    public direction = '';
    public searchTime: any;
    public contentNameValue: any;
    public selectedClass: any;
    public videoSource: any = [];
    public customLoader: boolean = false;
    public recordLoader: boolean = false;
    public allowTransfer: boolean;
    public gradName: any;
    public gradeValue: any;
    public studentDataList: any;
    public studentName: any;
    public getDeleteStudentData: any;
    public selectClassData: any;
    public newlySelectedStuent = [];
    public selectedClassid: any;
    public blukEmailValue: any = [];
    public emailList: any = [];
    removable = true;
    validationEmail = false;
    public separatorKeysCodes = [ENTER, COMMA];
    public selectedChangeStudent: any;
    public allClassList: any = [];
    public selectedToClass: any;
    public viewdetail: any;
    public settings = {};
    manageStudent = true;
    public manageClass = true;
    public showStudentEmailId = true;
    public showBulkEmailLoader = false;
    public courseListData = [];
    public filtersExpanded = false;

    @ViewChild('class') AddClass: TemplateRef<any>;
    @ViewChild('reports') reports: TemplateRef<any>;
    @ViewChild('showInform') showInform: TemplateRef<any>;
    @ViewChild('writeNoteOpen') writeNoteOpen: TemplateRef<any>;
    @ViewChild('zoomDialog') zoomDialog: TemplateRef<any>;
    @ViewChild('zoomDialog1') zoomDialog1: TemplateRef<any>;
    @ViewChild('meetingSelection') meetingSelection: TemplateRef<any>;
    @ViewChild('recordinglist') recordinglist: TemplateRef<any>;
    @ViewChild('video') video: TemplateRef<any>;
    @ViewChild('addStudentDialog') addStudentDialog: TemplateRef<any>;
    @ViewChild('addMultipleEmailDialog') addMultipleEmailDialog: TemplateRef<any>;
    @ViewChild('deleteStudentAlertDialog') deleteStudentAlertDialog: TemplateRef<any>;
    @ViewChild('mailbox') mailbox: TemplateRef<any>;
    @ViewChild('studentChange') changeStudent: TemplateRef<any>;
    @ViewChild('makeUpClassChange') makeUpClassChange: TemplateRef<any>;
    @ViewChild('viewoveralldetails') viewoveralldetails: TemplateRef<any>;
    @ViewChild('deleteClass') deleteClassDialog: TemplateRef<any>;
    public classDetails: any;
    subs: Subscription[] = [];
    messageSubs: Subscription[] = [];
    public addStudentEnabled = false;
    public addStudentForm: FormGroup;
    public studentAddedType = '0';
    public effectiveStartDate: any;
    selectedClassLabel: string = '';

    constructor(private formBuilder: FormBuilder, public config: NgbModalConfig, public confi: ConfigurationService, public teacher: TeacherService,
                public auth: AuthService, public commondata: CommonDataService, private modalService: NgbModal, public sanitizer: DomSanitizer,
                public route: Router, public firstcaps: TitleCasePipe, public toastr: ToastrService, public env: EnvironmentService,
                public newService: NewsubjectService, private sseClient: SseClient, public datePipe: DatePipe, public zoomService: ZoomServiceService,
                public common: CommonService, public classes: ClassService, public student: StudentService, public validationService: ValidationService) {
        this.roleId = this.auth.getRoleId();
        this.userId = this.auth.getUserId();
        if (this.roleId != '6') {
            this.settingList = JSON.parse(this.auth.getSessionData('settingList'));
            if (this.settingList) {
                this.settingList.forEach((items) => {
                    if (items.name == 'teacher_zoom_view') {
                        this.settingValue = items.value;
                    }
                });
            }
        }
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.classform = this.formBuilder.group({
            classname: ['', Validators.required],
            grade: ['', Validators.required],
            subject: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            startTime: ['', Validators.required],
            endTime: ['', Validators.required],
            describe: ['', Validators.required],
            tag: ['', Validators.required],
        });
        this.studentClassChange = this.formBuilder.group({
            toClass: [null, Validators.required],
            from_startdate: ['', Validators.required]
        });
        this.setMakeUpClassForm();
        this.setStudentEmailForm();
        this.setStudentForm();
        this.auth.setSessionData('resourceAccess', false);
        this.auth.setSessionData('browseAll', false);
        this.auth.removeSessionData('classData');
        this.auth.removeSessionData('readonly_data');
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('editView');
        this.auth.removeSessionData('readonly_startdate');
        this.auth.setSessionData('contentType', '');
        config.backdrop = 'static';
        config.keyboard = false;
        if (this.schoolStatus.length != 0) {
            this.newService.schoolChange.subscribe((res: any) => {
                if (res != '') {
                    if (this.route.url.includes('list-class')) {
                        this.init();
                    }
                } else {
                    this.init();
                }
            });
        }
        this.allowSelect = false;
        this.newService.allowSchoolChange(this.allowSelect);
        this.studentList();

        this.settings = {
            singleSelection: false,
            idField: 'student_id',
            textField: 'name_with_email',
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

    public get activeFilterChips(): string[] {
        const chips: string[] = [];

        const search = this.searchText?.trim();
        if (search) {
            chips.push(`Search: ${search}`);
        }

        const statusOption = this.statusOptions?.find(option => option.value === this.classlisthighlight);
        if (statusOption && this.classlisthighlight && this.classlisthighlight !== '3') {
            chips.push(`Status: ${statusOption.label}`);
        }

        if (this.selectCurriculumFolder) {
            const folder = Array.isArray(this.batchData)
                ? this.batchData.find(item => String(item.batch_id) === String(this.selectCurriculumFolder))
                : null;
            chips.push(`Folder: ${folder?.batch_name || 'Selected'}`);
        }

        if (Array.isArray(this.selectGrade) && this.selectGrade.length) {
            const gradeIds = new Set(this.selectGrade.map((id: any) => String(id)));
            const grades = Array.isArray(this.gradeData)
                ? this.gradeData
                    .filter(item => gradeIds.has(String(item.grade_id)))
                    .map(item => item.grade_name)
                : [];
            chips.push(`Grades: ${grades.length ? grades.join(', ') : this.selectGrade.length}`);
        }

        if (Array.isArray(this.selectSubject) && this.selectSubject.length) {
            const subjectIds = new Set(this.selectSubject.map((id: any) => String(id)));
            const subjects = Array.isArray(this.subjectData)
                ? this.subjectData
                    .filter(item => subjectIds.has(String(item.subject_id)))
                    .map(item => item.subject_name)
                : [];
            chips.push(`Subjects: ${subjects.length ? subjects.join(', ') : this.selectSubject.length}`);
        }

        if (this.selectTeacher) {
            const teacher = Array.isArray(this.teacherData)
                ? this.teacherData.find(item => String(item.teacher_id) === String(this.selectTeacher))
                : null;
            chips.push(`Teacher: ${teacher?.teacher_name || 'Selected'}`);
        }

        if (Array.isArray(this.selectCourse) && this.selectCourse.length) {
            const courseIds = new Set(this.selectCourse.map((id: any) => String(id)));
            const courses = Array.isArray(this.courseListData)
                ? this.courseListData
                    .filter(item => courseIds.has(String(item.course_id)))
                    .map(item => item.course_name)
                : [];
            chips.push(`Courses: ${courses.length ? courses.join(', ') : this.selectCourse.length}`);
        }

        return chips;
    }

    public get activeAdvancedFilterCount(): number {
        const basicPrefixes = ['Search:', 'Status:'];
        return this.activeFilterChips.filter(chip => !basicPrefixes.some(prefix => chip.startsWith(prefix))).length;
    }

    public toggleFiltersPanel(): void {
        this.filtersExpanded = !this.filtersExpanded;
    }

    setMakeUpClassForm() {
        this.makeUpClass = this.formBuilder.group({
            toClass: [null, Validators.required],
            from_Date: ['', Validators.required]
        });
    }

    setStudentEmailForm() {
        this.studentEmailForm = this.formBuilder.group({
            emails: this.formBuilder.array([], [this.validateArrayNotEmpty]),
            message: '',
            is_makeup: false,
            start_date: ''
        });
    }

    addStudentClicked() {
        this.addStudentEnabled = !this.addStudentEnabled;
        this.setStudentForm();
    }

    setStudentForm() {
        this.addStudentForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email_id: ['', Validators.required],
            grade: [null, Validators.required],
        });
    }

    add(event): void {
        const a = event.value.split(/[ ,]+/);
        console.log(a.length, 'event.value');
        if (a.length != 0) {
            for (let i = 0; i < a.length; i++) {
                if (this.validateEmail(a[i])) {
                    this.emailList.push({value: a[i], invalid: false});
                } else if (a[i] != '') {
                    this.emailList.push({value: a[i], invalid: true});
                    this.studentEmailForm.controls['emails'].setErrors({incorrectEmail: true});
                }
                console.log(this.emailList, 'emailList');
            }
        } else {
            if (a) {
                if (this.validateEmail(a)) {
                    this.emailList.push({value: a, invalid: false});
                } else if (a != '') {
                    this.emailList.push({value: a, invalid: true});
                    this.studentEmailForm.controls['emails'].setErrors({incorrectEmail: true});
                }
                console.log(this.emailList, 'emailList');
            }
        }
        if (event.input) {
            event.input.value = '';
        }
        this.emailList = this.removeDuplicates(this.emailList, 'value');
        const validation = this.emailList;
        this.validationEmail = validation.every((items) => {
            return !items.invalid;
        });
        console.log(this.emailList, 'emailListOveral');
    }

    redirectToAnnouncement(value, event) {
        console.log(value, 'value');
        this.auth.setSessionData('announcement-class', [value.class_id]);
        this.route.navigate(['/announcement/list/add']);
        event.stopPropagation();
    }

    getCommentListCount() {
        const class_id = this.choosedData.map(items => items.class_id);
        if (class_id.length != 0) {
            const payload = {
                platform: 'web',
                user_id: this.auth.getUserId(),
                role_id: this.auth.getRoleId(),
                class_id
            };
            this.subs.push(this.sseClient.stream('classes/getCommentCount', { keepAlive: true, reconnectionDelay: 2000,
                responseType: 'event' }, {body: payload}, 'POST').subscribe((event) => {
                if (event.type === 'error') {
                    const errorEvent = event as ErrorEvent;
                } else if (event.type == 'message') {
                    const messageEvent = event as MessageEvent;
                    const countArray = JSON.parse(messageEvent.data);
                    countArray.forEach((items) => {
                        const index = this.choosedData.findIndex(x => x.class_id === items.class_id);
                        this.choosedData[index].new_comments = items.new_comments;
                    });
                }
            }));
        } else {
            this.subs.forEach(sub => sub.unsubscribe());
        }
    }

    getMessageListCount() {
        const class_id = this.choosedData.map(items => items.class_id);
        if (class_id.length != 0) {
            const payload = {
                platform: 'web',
                user_id: this.auth.getUserId(),
                role_id: this.auth.getRoleId(),
                class_id
            };
            this.messageSubs.push(this.sseClient.stream('mailbox/getMessageCount', { keepAlive: true, reconnectionDelay: 2000,
                responseType: 'event' }, {body: payload}, 'POST').subscribe((event) => {
                if (event.type === 'error') {
                    const errorEvent = event as ErrorEvent;
                } else if (event.type == 'message') {
                    const messageEvent = event as MessageEvent;
                    let cleanedData = messageEvent.data.trim();
                    const validJSONEndIndex = cleanedData.lastIndexOf(']');
                    if (validJSONEndIndex !== -1) {
                        cleanedData = cleanedData.slice(0, validJSONEndIndex + 1);
                    }
                    try {
                        const messageCountArray = JSON.parse(cleanedData);
                        messageCountArray.forEach((items) => {
                            const index = this.choosedData.findIndex(x => x.class_id === items.class_id);
                            if (index !== -1) {
                                this.choosedData[index].newMessage = items.newMessage;
                            }
                        });
                    } catch (error) {
                        console.error('Failed to parse JSON:', error, cleanedData);
                    }
                }
            }));
        } else {
            this.messageSubs.forEach(message => message.unsubscribe());
        }
    }

    removeDuplicates(originalArray, prop) {
        var newArray = [];
        var lookupObject = {};

        for (var i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }

        for (i in lookupObject) {
            newArray.push(lookupObject[i]);
        }
        return newArray;
    }

    removeEmail(data: any): void {
        console.log('Removing ' + data);
        if (this.emailList.indexOf(data) >= 0) {
            this.emailList.splice(this.emailList.indexOf(data), 1);
        }
        console.log(this.emailList, 'emailListremove');
        const validation = this.emailList;
        this.validationEmail = validation.every((items) => {
            return !items.invalid;
        });
    }

    ngOnInit() {
        this.auth.removeSessionData('backOption');
    }

    ngOnDestroy(): void {
        this.setSearch_Filter(this.classlisthighlight);
        this.subs.forEach(val => val.unsubscribe());
        this.messageSubs.forEach(value => value.unsubscribe());
    }

    private validateArrayNotEmpty(c: FormControl) {
        if (c.value && c.value.length === 0) {
            return {
                validateArrayNotEmpty: {valid: false},
            };
        }
        return null;
    }

    private validateEmail(email) {

        // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    init() {
        this.getSearch_Filter();
        this.showLoader = false;
        if (this.auth.getRoleId() == '2') {
            this.teacherList();
        }
        this.teacherType = this.auth.getRoleId() == '4' ? this.auth.getSessionData('teacher_type') : '1';
        this.allowTransfer = this.auth.allowTransfer;
        this.manageStudent = this.auth.manageStudent;
        this.manageClass = this.auth.manageClass;
        this.showStudentEmailId = this.auth.showStudentEmailId;
        this.schoolIdNo();
        this.gradeList();
        this.subjectList();
        this.batchDataList();
        this.getCourseList();
    }

    checkClassDeleteConditions() {
        return this.auth.getRoleId() == '2' || (this.auth.getRoleId() == '4' && this.auth.getSessionData('teacher_type') == '1');
    }

    deleteClassModal(row) {
        this.classDetails = row;
        this.modalRef = this.modalService.open(this.deleteClassDialog);
    }

    deleteClassList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.classDetails.class_id,
        };
        this.classes.deleteclass(data).subscribe((successData) => {
                this.deleteClassSuccess(successData);
            },
            (error) => {
                console.error(error, 'class_delete');
            });
    }

    deleteClassSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success('Class deleted Successfully', 'Class');
            this.modalRef.close();
            const classIndex = this.choosedData.findIndex((x) => x.class_id == this.classDetails.class_id);
            console.log(classIndex, 'classIndex');
            this.choosedData.splice(classIndex, 1);
            this.classList(this.classlisthighlight);
        } else {
            this.toastr.error(successData.ResponseObject, 'Class');
        }
    }

    onItemSelect(event, select) {
        console.log(event, 'event');
        this.studentDataList.forEach((item) => {
            if (select == 'single') {
                if (item.student_id == event.student_id) {
                    this.newlySelectedStuent.push(item);
                }
            } else {
                // this.newlySelectedStuent = [];
                event.forEach((items1) => {
                    if (item.student_id == items1.student_id) {
                        this.newlySelectedStuent.push(item);
                    }
                });
            }
        });
        console.log(this.newlySelectedStuent, 'newlySelectedstudent');
    }

    onDeSelect(event) {
        console.log(event, 'eventt');
        this.newlySelectedStuent.forEach((item, index) => {
            if (event.student_id == item.student_id) {
                this.newlySelectedStuent.splice(index, 1);
            }
        });
        console.log(this.newlySelectedStuent, 'newlySelected');
    }

    onDeSelectAll() {
        console.log('evenn');
        this.newlySelectedStuent = [];
    }

    childCallfunction(event) {
        event.stopPropagation();
    }

    onSave() {
        this.modalRef.close();
        this.auth.removeSessionData('Individual-Class-Report');
    }

    close() {
        this.modalRef.close();
        this.fileUploader = '';
        this.filetype = '';
    }

    classChange(event, calledFrom) {
        console.log(event, 'class_ssss');
        this.selectedChangeStudent = event;
        this.studentClassList(event.user_id);
        if (calledFrom != 'makeUp') {
            this.studentClassChange.reset();
            this.modalRef = this.modalService.open(this.changeStudent, {size: 'lg'});
        } else {
            this.setMakeUpClassForm();
            this.modalRef = this.modalService.open(this.makeUpClassChange, {size: 'lg'});
        }
    }

    studentClassList(id) {

        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: '0',
            class_id: this.idForClass,
            school_id: this.auth.getSessionData('school_id')
        };
        this.student.studentClassList(data).subscribe((successData) => {
                this.studentClassListSuccess(successData, id);
            },
            (error) => {
                console.error(error, 'error');
            });
    }

    studentClassListSuccess(successData, id) {
        if (successData.IsSuccess) {
            this.allClassList = successData.ResponseObject;
            this.allClassList.forEach((val) => {
                val['fromClassLabel'] = val.class_name + '  -  ' + val.teacher_name;
            });
            console.log(this.allClassList, 'allClassList');
            // if (id == 0) {
            //     this.allClassList = successData.ResponseObject;
            //     this.allClassList.forEach((val) => {
            //         val['fromClassLabel'] = val.class_name + '  -  ' + val.teacher_name;
            //     });
            //     console.log(this.allClassList, 'allClassList');
            // } else {
            //     this.classStudentList = successData.ResponseObject;
            // }
        }
    }

    selectedClassDetails(event) {
        console.log(event, 'event');
        this.selectedToClass = event;
        if (event.status == '1') {
            const sd = event.start_date.split('-');
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
                calendarAnimation: {
                    in: 4,
                    out: 4
                }
            };
        }
    }

    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classes.gradeList(data).subscribe((successData) => {
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

    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };

        this.classes.subjectList(data).subscribe((successData) => {
                this.subjectListSuccess(successData);
            },
            (error) => {
                this.subjectListFailure(error);
            });
    }

    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
    }

    subjectListFailure(error) {
        console.log(error, 'error');
    }

    batchDataList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: '2',
            list_type: 'list'
        };
        this.classes.batchList(data).subscribe((successData) => {
                this.batchListSuccess(successData);
            },
            (error) => {
                this.batchListFailure(error);
            });
    }

    batchListSuccess(successData) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            this.batchData = successData.ResponseObject;
        }
    }

    batchListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }

    classList(id) {
        this.classlisthighlight = id;
        this.showLoader = true;
        const teacher_id = this.auth.getRoleId() == '4' ? this.auth.getUserId() : this.selectTeacher;
        // this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            type: id,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            teacher_id: teacher_id ? teacher_id : '0',
            grade: this.selectGrade ? this.selectGrade : [],
            subject: this.selectSubject ? this.selectSubject : [],
            classroom: this.selectCurriculumFolder ? this.selectCurriculumFolder : '',
            page_no: this.pageNo,
            records_per_page: '10',
            search: this.searchClass && this.searchClass != '' ? this.searchClass.trimStart() : '',
            student_search: this.searchStudent && this.searchStudent != '' ? this.searchStudent.trimStart() : '',
            course_id: this.auth.getRoleId() == '2' ? this.selectCourse : []
        };
        
        this.classes.classesList(data).subscribe((successData) => {
                this.classListSuccess(successData);
            },
            (error) => {
                this.classListFailure(error);
            });
    }

    classListSuccess(successData) {
        if (successData.IsSuccess) {
            const temp = successData.ResponseObject;
            
            // For first page (or when filters/search change), replace the data
            if (this.pageNo == 1) {
                this.choosedData = successData.ResponseObject;
                this.choosedData.forEach(element => {
                    element.checked = false;
                });
            }
            // For pagination (infinite scroll), append to existing data
            else if (this.pageNo > 1 && temp.length > 0) {
                for (let entry of temp) {
                    this.choosedData.push(entry);
                }
            }
            
            // Initialize comment and message counts
            this.choosedData.forEach(items => {
                items.new_comments = 0;
                items.newMessage = 0;
            });
            
            // Clean up existing subscriptions
            this.subs.forEach(val => val.unsubscribe());
            this.messageSubs.forEach(value => value.unsubscribe());
            
            this.showLoader = false;
            
            // Load comment and message counts if there's data
            if (this.choosedData.length != 0) {
                this.getCommentListCount();
                this.auth.getRoleId() == '4' ? this.getMessageListCount() : '';
            }
        }
    }

    resetSearch() {

        this.selectGrade = [];
        this.selectSubject = [];
        this.selectTeacher = null;
        this.searchClass = '';
        this.searchStudent = '';
        this.searchText = '';
        this.selectCurriculumFolder = null;
        this.classlisthighlight = 3;
        this.selectCourse = [];
        this.setSearch_Filter(this.classlisthighlight);
        this.pageNo = 1;
        this.classList(this.classlisthighlight);
    }

    classListFailure(error) {
        console.log(error, 'error');
    }

    teacherList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.classes.individualTeacherList(data).subscribe((successData) => {
                this.teacherListSuccess(successData);
            },
            (error) => {
                this.teacherListFailure(error);
            });
    }

    teacherListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.teacherData = successData.ResponseObject;
        }
    }

    teacherListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }

    updateFilter(event, type) {
        if (event.trim().length > 2 || event.trim().length == 0) {
            clearTimeout(this.searchTime);
            this.searchTime = setTimeout(() => {
                this.choosedData = []; // Clear previous data
                this.classList(this.classlisthighlight);
                this.setSearch_Filter(this.classlisthighlight);
            }, 1200);
        }
    }

    updateUnifiedSearch(event) {
        // Set both searchClass and searchStudent to the same value for unified search
        this.searchClass = event;
        this.searchStudent = event;
        
        if (event.trim().length > 2 || event.trim().length == 0) {
            clearTimeout(this.searchTime);
            this.searchTime = setTimeout(() => {
                this.pageNo = 1;
                this.choosedData = []; // Clear previous data
                this.classList(this.classlisthighlight);
                this.setSearch_Filter(this.classlisthighlight);
            }, 1200);
        }
    }

    schoolIdNo() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.classes.idList(data).subscribe((successData) => {
                this.idListSuccess(successData);
            },
            (error) => {
                this.idListFailure(error);
            });
    }

    idListSuccess(successData) {
        if (successData.IsSuccess) {
            this.idData = successData.ResponseObject;
            this.auth.setSessionData('teacher_id', this.idData[0]?.school_idno);
            this.classList(this.classlisthighlight);
        }
    }

    idListFailure(error) {
        console.log(error, 'error');
    }

    showInformation(data) {
        this.classInfo = data;
        this.modalRef = this.modalService.open(this.showInform, {size: 'sm'});
    }

    openClassOverview(id, event) {
        this.enterList(id, 'overview', event);
    }

    openStudentRoster(id, event) {
        this.enterList(id, 'yes', event);
    }

    enterList(id, type, event) {
        if (event && typeof event !== 'string' && typeof event.stopPropagation === 'function') {
            event.stopPropagation();
        }
        console.log(event, 'eventtt');
        this.selectedClassid = id;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.choosedData[id].class_id,
            grade: [this.choosedData[id].grade_id],
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        if (type == 'yes' || type == 'overview') {
            // this.commondata.showLoader(true);
            this.studentShow = this.choosedData[id].class_id;
            this.classes.classDetails(data).subscribe((successData) => {
                    this.enterListSuccess(successData, type);
                },
                (error) => {
                    this.enterListFailure(error);
                });
            this.choosedData.forEach((element, index) => {
                if (index == id) {
                    element.checked = !element.checked;
                } else {
                    element.checked = false;
                }
            });
        } else if (type == 'notes') {
            this.commondata.showLoader(true);
            this.classes.classDetails(data).subscribe((successData) => {
                    this.enterListSuccess(successData, type);
                },
                (error) => {
                    this.enterListFailure(error);
                });
        } else {
            this.commondata.showLoader(true);
            this.classes.classDetails(data).subscribe((successData) => {
                    this.enterListSuccess(successData, type);
                },
                (error) => {
                    this.enterListFailure(error);
                });
        }
    }

    enterListSuccess(successData, type) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess && successData.ResponseObject && successData.ResponseObject.length > 0) {
            this.className = successData.ResponseObject[0].class_name;
            this.idForClass = successData.ResponseObject[0].class_id;
            if (type == 'yes') {
                this.studentData = successData.ResponseObject[0].students;
                this.studentData.forEach((items) => {
                    items.selected = false;
                    items.student_name = items.first_name + ' ' + items.last_name;
                });
                this.studentData.sort((a, b) => a.student_name.localeCompare(b.student_name));
                this.choosedData[this.selectedClassid].no_of_students = this.studentData.length;
                console.log(this.studentData, 'studentData');
            } else if (type === 'overview') {
                this.auth.setSessionData('card-data', JSON.stringify(successData.ResponseObject));
                this.route.navigate(['/class/overview', this.idForClass], {
                    state: {
                        overview: successData.ResponseObject[0],
                        classSummary: this.choosedData[this.selectedClassid]
                    }
                });
            } else if (type == 'notes') {
                this.showNotes = successData.ResponseObject[0].notes;
            } else if (['inbox', 'curriculum'].includes(type)) {
                this.auth.setSessionData('card-data', JSON.stringify(successData.ResponseObject));
                this.route.navigate(['/class/topicsAndCurriculum/' + (type == 'curriculum' ? '3' : '4')]);
            } else {
                this.commondata.showLoader(false);
                this.detailData = successData.ResponseObject;
                this.auth.setSessionData('classView', true);
                this.auth.setSessionData('studentlist', JSON.stringify(this.detailData[0].students));
                this.auth.setSessionData('studentlist1', JSON.stringify(this.detailData[0].students));
                this.auth.setSessionData('card-data', JSON.stringify(this.detailData));
                this.auth.setSessionData('editclass', JSON.stringify(successData.ResponseObject));
                this.auth.setSessionData('updatedStudent', 1);
                this.auth.removeSessionData('enterThroughSchedule');
                if (this.detailData[0].classDate_status == '2' || this.detailData[0].classDate_status == '5') {
                    if (!this.manageClass) {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('readonly_data', 'true');
                    } else {
                        this.auth.removeSessionData('readonly_startdate');
                        this.auth.removeSessionData('readonly_data');
                    }
                    if (this.detailData[0].class_status != '1') {
                        this.route.navigate(['/class/create-class/edit']);
                    } else {
                        this.route.navigate(['/class/create-class/edit']);
                        this.auth.setSessionData('editclass', JSON.stringify(this.detailData));
                        this.auth.setSessionData('updatedStudent', 1);
                    }
                } else if (this.detailData[0].classDate_status == '4' && this.detailData[0].class_status == '0' && this.roleId != '2' && !this.manageClass) {
                    this.route.navigate(['/class/list-class']);
                } else if (this.detailData[0].classDate_status == '4' && (this.detailData[0].class_status == '1' || (this.roleId == '2' || this.manageClass))) {
                    console.log('1', 'enter logic');
                    if (!this.manageClass) {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('readonly_data', 'true');
                    } else {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('classView', false);
                        console.log('2', 'enter complete class');
                    }
                    this.route.navigate(['/class/create-class/addEdit']);
                    this.auth.setSessionData('editclass', JSON.stringify(this.detailData));
                    this.auth.setSessionData('updatedStudent', 1);
                } else if (this.detailData[0].classDate_status == '3') {
                    if (this.detailData[0].class_status == '1') {
                        this.auth.removeSessionData('readonly_startdate');
                        this.auth.removeSessionData('readonly_data');
                    } else {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        if (this.auth.checkTutorLogin) {
                            this.auth.setSessionData('readonly_data', 'true');
                        } else {
                            this.auth.removeSessionData('readonly_data');
                        }
                    }
                    this.route.navigate(['/class/create-class/edit']);
                }
            }
        } else {
            console.error('Class detail response error:', successData);
            this.toastr.error('Unable to load class details', 'Error');
        }
    }

    enterListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }

    specificMail(detail, index) {
        this.studentData.forEach((items, id) => items.selected = index === id);
        this.mailAlert(detail);
    }

    mailAlert(detail) {
        const checked: boolean = this.studentData.some((items) => items.selected === true);
        if (checked) {
            this.modalRef = this.modalService.open(this.mailbox, {size: 'lg'});
        } else {
            this.toastr.error('Please select students');
        }
    }

    getEditorValue(event) {
        this.editorValue = event.editor;
        this.notes = event.content;
    }

    selectAllStudent(event) {
        this.studentData.forEach((items) => {
            items.selected = event.target.checked;
        });
    }

    sendMail() {
        const studentId = [];
        this.studentData.forEach((items => {
            if (items.selectedMail === true) {
                studentId.push(items.user_id);
            }
        }));
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: studentId
        };
        console.log(data, 'data');
    }

    readUrl(event: any) {
        const file = event.target.files[0];
        this.filetype = event.target.files[0].name.split('.');
        if (event.srcElement.files[0].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || event.srcElement.files[0].type == 'application/vnd.ms-excel') {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event: any) => {
                this.getUrl1 = [];
                this.url = event.target.result;
                this.getUrl = this.url.split(',');
                this.getUrl1.push(this.url.split(','));
                this.onUploadFinished1(this.getUrl, event);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
            this.toastr.success('Excel Upload Successfully', 'Success!');
        } else {
            this.toastr.error('Only Excel Format Is Required', 'Failed');
            this.filetype = '';
        }
    }

    onUploadFinished1(event, fileEvent) {
        this.getUrl = event[1];
    }

    openNotes(i, value) {
        this.modalRef = this.modalService.open(this.writeNoteOpen, {size: 'xl'});
        this.classId = value.class_id;
        this.notes = '';
        this.enterList(i, 'notes', 'eve');
    }

    addNotes() {
        if (this.notes == '') {
            this.toastr.error('Notes should not be empty');
            return false;
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.classId,
            note: this.notes.replace(/\r?\n/g, '<br />'),
            status: '1',
            add_date: this.datePipe.transform(new Date(), 'dd-MM-yyyy')
        };
        this.classes.getNotesList(data).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.showNotes = successData.ResponseObject;
                    this.editorValue != '' ? this.editorValue.setContent('') : '';
                    this.notes = '';
                } else {
                    this.toastr.error(successData.ErrorObject);
                }
            },
            (error) => {
            });
    }

    deletedNotes(value) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.classId ? this.classId : '',
            note: value.note,
            status: '2',
            id: value.id,
            add_date: value.add_date
        };
        this.classes.getNotesList(data).subscribe((successData: any) => {
                this.commondata.showLoader(false);
                if (successData.IsSuccess) {
                    this.showNotes = successData.ResponseObject;
                } else {
                    this.toastr.error(successData.ErrorObject);
                }
            },
            (error) => {
                this.commondata.showLoader(false);
            });
    }

    onsave() {
        this.modalRef.close();
    }

    onScrollDown(ev) {
        this.direction = 'down';
        this.pageNo++;
        this.classList(this.classlisthighlight);
    }

    onUp(ev) {
        this.direction = 'up';
    }

    shareEmail(value, calledForm?) {
        console.log(value);
        if (calledForm == 'addStudent') {
            this.modalRef.close('addStudentDialog');
        }
        this.emailList = [];
        this.blukEmailValue = [];
        this.selectClassData = value;
        this.modalRef = this.modalService.open(this.addMultipleEmailDialog, {size: 'lg'});
    }

    // curicullum(value) {
    //     console.log(value, 'value');
    //     this.auth.setSessionData('card-data', JSON.stringify([value]));
    //     this.route.navigate(['/class/topicsAndCurriculum/3']);
    // }

    setSearch_Filter(id) {
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.classSearch));
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    items.studentName = this.searchStudent;
                    items.className = this.searchClass;
                    items.subject = this.selectSubject;
                    items.grade = this.selectGrade;
                    items.teacher = this.selectTeacher;
                    items.curriculum_Folder = this.selectCurriculumFolder;
                    items.classDateStatus = id;
                    items.course_id = this.selectCourse;
                } else {
                    const searchData = {
                        grade: this.selectGrade,
                        subject: this.selectSubject,
                        teacher: this.selectTeacher,
                        className: this.searchClass,
                        studentName: this.searchStudent,
                        curriculum_Folder: this.selectCurriculumFolder,
                        school_id: this.auth.getSessionData('school_id'),
                        classDateStatus: this.classlisthighlight,
                        course_id: this.selectCourse
                    };
                    data.push(searchData);
                }
            });
            data = data.filter((test, index, array) =>
                    index === array.findIndex((findTest) =>
                        findTest.school_id === test.school_id
                    )
            );
            this.auth.setSessionData(SessionConstants.classSearch, JSON.stringify(data));
        }
    }

    getSearch_Filter() {
        const data = JSON.parse(this.auth.getSessionData(SessionConstants.classSearch));
        const teacher_id = this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0';
        data.every((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                this.searchStudent = items.studentName || '';
                this.searchClass = items.className || '';
                this.searchText = items.className || items.studentName || '';
                this.selectSubject = items.subject || [];
                this.selectGrade = items.grade || [];
                this.selectTeacher = items.teacher;
                this.selectCurriculumFolder = items.curriculum_Folder;
                this.classlisthighlight = items.classDateStatus || '3';
                this.selectCourse = items.course_id || [];
                return false;
            } else {
                this.searchClass = '';
                this.searchStudent = '';
                this.searchText = '';
                this.selectGrade = [];
                this.selectSubject = [];
                this.selectTeacher = null;
                this.selectCurriculumFolder = null;
                this.classlisthighlight = '3';
                this.selectCourse = [];
            }
            return true;
        });
    }

    getClassDetails(classData, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: classData.class_id,
            grade: [classData.grade_id],
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        this.commondata.showLoader(true);
        this.classes.classDetails(data).subscribe((successData: any) => {
                this.commondata.showLoader(false);
                if (successData.IsSuccess) {
                    this.customLoader = false;
                    this.recordLoader = false;
                    console.log(successData, 'succ');
                    this.selectedClass = successData.ResponseObject[0];
                    if (type === 'call') {
                        this.selectedClass.allow_zoom_api = classData.allow_zoom_api;
                        const day = new Date().getDay();
                        const date = new Date();
                        var offset = -300; //Timezone offset for EST in minutes.
                        var estDate = new Date(date.getTime() + offset * 60 * 1000);
                        console.log(estDate, 'estDate');
                        console.log(new Date(), 'new Date()');
                        console.log(estDate.getUTCDay(), 'estDate.getUTCDay()');
                        /// day started from sunday => 0 , we are adding class in from the value 1 => monday .
                        const dayValue = estDate.getUTCDay() == 0 ? 7 : estDate.getUTCDay();
                        this.selectedClass.availabilityDate = this.selectedClass.availabilityDate.filter((item) => {
                            return item.slotday == dayValue;
                        });
                        console.log(this.selectedClass.availabilityDate, 'date');
                        if (this.selectedClass.availabilityDate.length == 0) {
                            this.modalRef = this.modalService.open(this.zoomDialog1, {size: 's'});
                        } else if (this.selectedClass.availabilityDate.length > 1) {
                            this.modalRef = this.modalService.open(this.meetingSelection, {size: 'lg'});
                            // if (this.roleId == '2') {
                            //     this.modalRef = this.modalService.open(this.meetingSelection, {size: 's'});
                            // } else if (this.roleId == '4') {
                            //     this.selectedClass.availabilityDate = this.selectedClass.availabilityDate.filter((item) => {
                            //         return this.userId == item.teacher_id;
                            //     });
                            // }
                        } else {
                            if (this.selectedClass.allow_zoom_api == '0') {
                                console.log(this.selectedClass.availabilityDate[0], 'this.selectedClass.availabilityDate[0]');
                                this.navigateOutsideZoom(this.selectedClass.availabilityDate[0]);
                            } else {
                                this.getMeetingLink(this.selectedClass, 0);
                            }
                        }
                    } else if (type === 'recording') {
                        // let recordings = [];
                        // this.selectedClass.availabilityDate.forEach( (item) => {
                        //     recordings.push(...item.meeting_recording);
                        // });
                        // this.videoSource = recordings;
                        this.getClassRecording(classData);
                    }
                }
            },
            (error) => {
                this.commondata.showLoader(false);
                this.customLoader = false;
                this.enterListFailure(error);
            });
    }

    chooseSchedule(datum, index) {
        if (datum.allow_zoom_api == '0') {
            this.navigateOutsideZoom(this.selectedClass.availabilityDate[index]);
        } else {
            this.getMeetingLink(datum, index);
        }
    }

    getMeetingLink(datum, index) {
        console.log(datum, 'datum');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            start_date: datum.start_date,
            end_date: datum.end_date,
            class_id: datum.class_id,
            class_type: datum.class_type,
            allow_zoom_api: datum.allow_zoom_api,
            notes: datum.notes,
            schedule_id: datum.availabilityDate[index].shechdule_id,
            slotday: datum.availabilityDate[index].slotday,
            slotstarttime: datum.availabilityDate[index].slotstarttime,
            slotendtime: datum.availabilityDate[index].slotendtime,
            slotselected: datum.availabilityDate[index].slotselected,
        };
        this.classes.zoomInstant(data).subscribe((successData: any) => {
            this.zoomInstantSuccess(successData, datum);
        }, (error) => {
            this.toastr.error(error.ErrorObject, 'Failed!');
            this.commondata.showLoader(false);
        });
    }

    zoomInstantSuccess(successData, datum) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'successData.ResponseObject');
            if (datum.allow_zoom_api == '0') {
                // this.navigateOutsideZoom(successData.ResponseObject);
            } else if (datum.allow_zoom_api == '1') {
                if (this.settingValue == '2') {
                    this.selectedClass.teacher_link = successData.ResponseObject.teacher_link;
                    console.log(this.selectedClass, 'selectedClass both');
                    this.modalRef = this.modalService.open(this.zoomDialog, {size: 's'});
                } else if (this.settingValue == '1') {
                    this.navigateOutsideZoom(successData.ResponseObject);
                } else if (this.settingValue == '0') {
                    this.zoomService.initZoomMeeting(datum);
                }
            }
        } else {
            this.toastr.error(successData.ErrorObject, 'Failed!');
        }
    }

    getClassRecording(classData) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: classData.class_id,
            grade: [classData.grade_id],
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        this.classes.recording(data).subscribe((successData: any) => {
            this.commondata.showLoader(false);
            if (successData.IsSuccess) {
                console.log(successData, 'successdatasdd');
                let recordings = [];
                successData.ResponseObject.forEach((item) => {
                    recordings.push(...item.meeting_recording);
                });
                this.videoSource = recordings;
                // this.videoSource = successData.ResponseObject;
                this.modalRef = this.modalService.open(this.recordinglist, {size: 's'});
            }
        }, (error) => {
            this.commondata.showLoader(false);
        });
    }

    openZoomDialog(classData) {
        this.selectedClass = classData;
        this.emailList = [];
        console.log(this.selectedClass, 'selectedClass');
        if (!this.customLoader) {
            this.customLoader = true;
            this.getClassDetails(classData, 'call');
        }
    }

    openRecordingList(classData) {
        this.selectedClass = classData;
        console.log(this.selectedClass, 'selectedClass');
        if (!this.recordLoader) {
            this.recordLoader = true;
            this.getClassDetails(classData, 'recording');
        }

    }

    navigateOutsideZoom(data) {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        if (this.selectedClass.allow_zoom_api == '0') {
            console.log(data.meeting_link, 'data.meeting_link');
            link.setAttribute('href', data.meeting_link);
        } else {
            console.log(data.teacher_link, 'data.teacher_link');
            link.setAttribute('href', data.teacher_link);
        }
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    videoTemplate(data) {
        this.modalRef1 = this.modalService.open(this.video, {size: 'lg'});
    }

    navigateOutsideRecording(data) {

        console.log(data, 'data');
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        // link.setAttribute('href', data.meeting_recording);
        link.setAttribute('href', data.play_video);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    addStudent(value, index) {
        console.log(value, 'list');
        this.selectedClassid = index;
        this.studentName = [];
        this.selectClassData = value;
        this.searchStudentList(1);
        this.modalRef = this.modalService.open(this.addStudentDialog, {
            size: 'lg',
            windowClass: 'customModalRef',
            scrollable: false
        });
    }

    getGradeValue(event) {
        console.log(event, 'event');
        if (typeof event == 'undefined') {
            this.gradeValue = [];
            this.searchStudentList(1);
        } else if (event.length == 0) {
            this.gradeValue = undefined;
            this.searchStudentList(2);
            this.studentDataList = [];
        } else {
            this.gradeValue = [];
            for (let i = 0; i < event.length; i++) {
                this.gradeValue.push(event[i].grade_id);
            }
            this.searchStudentList(1);
        }
    }

    searchStudentList(id) {
        if (this.gradeValue != '') {
            const data = {
                platform: 'web',
                type: 'list',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                end_date: this.choosedData[0].end_date,
                grade_id: this.gradeValue,
            };
            this.classes.searchList(data).subscribe((successData) => {
                    this.addstudentListSuccess(successData, id);
                },
                (error) => {
                    this.addstudentListFailure(error);
                });
        } else {
            this.studentDataList = [];
        }
    }

    addstudentListSuccess(successData, id) {
        if (successData.IsSuccess) {
            this.studentDataList = successData.ResponseObject;
            console.log(this.studentDataList, 'studentDataLIST');
            // this.studentName = undefined;
            const result1 = this.studentDataList;
            const result2 = this.studentData;
            this.studentDataList = result1.filter(function (o1) {
                return !result2?.some(function (o2) {
                    return o1.student_id === o2.student_id; // return the ones with equal id
                });
            });
            console.log(this.newlySelectedStuent, 'newlyAddeddd');
            this.studentDataList.forEach((list) => {
                if (!this.showStudentEmailId) {
                    list.name_with_email = list.name + (list.grade_name != '' ? '  - ' + list.grade_name : '');
                } else {
                    list.name_with_email = list.name + ' ( ' + (list.student_id)  + ' ) ' + (list.grade_name != '' ? '  - ' + list.grade_name : '');
                }
            });
            console.log(this.studentDataList, 'studentDataList');
            if (id == 2) {
                // this.studentDataList = [];
                this.studentName = [];
            }
        }
        // this.selectAllForDropdownItems(this.schoolDataList);
    }

    addstudentListFailure(error) {
        console.log(error, 'error');
    }

    closeStudentModRef() {
        this.modalRef.close();
        this.gradName = undefined;
        this.newlySelectedStuent = [];
        this.schoolDataList = [];
    }

    getStudentFullDetail(item) {
        this.allStudentList.forEach((val) => {
            if (val.user_id == item.user_id) {
                this.viewdetail = val;
                this.studentName = val.student_name;
            }
        });
        this.modalRef = this.modalService.open(this.viewoveralldetails, {size: 'xl'});
        console.log(this.viewdetail, 'viewDetail');
    }

    studentFullDetailSuccess(successData, item) {
        if (successData.IsSuccess) {

        }
    }

    editStudent(rows) {
        // if (this.manageStudent) {
        //
        // } else if (this.allowEdit == false) {
        //     this.toastr.error('You don\'t have permission to update student details');
        // }
        this.allStudentList.forEach((list) => {
            if (list.user_id == rows.user_id) {
                console.log(list, 'student pass data');
                this.auth.setSessionData('editStudent', JSON.stringify(list));
                this.auth.setSessionData('navigation', 'class');
                this.route.navigate(['/student/create-student/edit']);
            }
        });
    }

    studentList() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.student.getStudentList(data).subscribe((successData) => {
                this.studentListSuccess(successData);
            },
            (error) => {
                console.log(error, 'student list err');
            });
    }

    studentListSuccess(successData) {
        if (successData.IsSuccess) {
            this.allStudentList = successData.ResponseObject;
        }
    }

    deleteStudentAlert(value) {
        this.modalRef = this.modalService.open(this.deleteStudentAlertDialog, {size: 's'});
        this.getDeleteStudentData = value;
    }

    deleteStudentList(value) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.studentShow,
            student_id: value.user_id
        };
        this.classes.deleteStudentList(data).subscribe((successData) => {
                this.deleteStudentListSuccess(successData, value);
            },
            (error) => {
                console.log(error);
            });
    }

    deleteStudentListSuccess(successData, value) {
        if (successData.IsSuccess) {
            // this.studentData = [];
            this.studentData.forEach((item, index) => {
                console.log(item, 'items');
                if (item.user_id == value.user_id) {
                    this.studentData.splice(index, 1);
                }
            });
            console.log(this.studentData, 'studentDta');
            this.modalRef.close();
            this.toastr.success(successData.ResponseObject);
            this.enterList(this.selectedClassid, 'yes', 'eve');
            // this.classList(this.classlisthighlight);
        }
    }

    submitClass(type) {
        if (this.newlySelectedStuent.length != 0) {
            if (this.studentAddedType == '0' || (this.studentAddedType == '1' && this.effectiveStartDate)) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.selectClassData.school_id,
                    teacher_id: this.selectClassData.teacher_id,
                    class_name: this.selectClassData.class_name,
                    subject: this.selectClassData.subject,
                    start_date: this.studentAddedType == '0' ? this.selectClassData.start_date : (this.effectiveStartDate ?
                        this.datePipe.transform(this.effectiveStartDate.singleDate.jsDate, 'yyyy-MM-dd') : ''),
                    end_date: this.studentAddedType == '0' ? this.selectClassData.end_date : (this.effectiveStartDate ?
                        this.datePipe.transform(this.effectiveStartDate.singleDate.jsDate, 'yyyy-MM-dd') : ''),
                    start_time: this.selectClassData.start_time,
                    end_time: this.selectClassData.end_time,
                    grade: this.gradName == undefined ? '' : this.gradName,
                    meeting_link: this.selectClassData.meeting_link,
                    meeting_id: this.selectClassData.meeting_id,
                    passcode: this.selectClassData.passcode,
                    class_code: this.selectClassData.class_code,
                    status: this.selectClassData.status,
                    class_id: this.selectClassData.class_id,
                    students: this.newlySelectedStuent,
                    is_makeup: this.studentAddedType ?? '0'
                };
                this.classes.submit(data).subscribe((successData) => {
                        this.submitClassSuccess(successData, type);
                    },
                    (error) => {
                        this.submitClassFailure(error);
                    });
            } else {
                this.toastr.error('Please select effective start date');
            }
        } else {
            this.toastr.error('Please Select Student');
        }
    }

    submitClassSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.newlySelectedStuent = [];
            this.gradName = undefined;
            this.auth.setSessionData('submit-data', JSON.stringify(successData.ResponseObject[0]));
            this.auth.removeSessionData('updatedStudent');
            this.auth.removeSessionData('readonly_data');
            this.auth.removeSessionData('readonly_startdate');
            this.auth.removeSessionData('studentlist1');
            this.auth.removeSessionData('class-curriculum');
            const redirectSchedulePage = !!this.auth.getSessionData('enterThroughSchedule');
            this.studentAddedType = '0';
            this.effectiveStartDate = null;
            this.modalRef.close();
            if (type == '1') {
                this.toastr.success(successData.ResponseObject, 'Class');
                this.auth.removeSessionData('editView');
                if (redirectSchedulePage == true) {
                    this.auth.removeSessionData('enterThroughSchedule');
                    // this.route.navigate(['/schedule/schedule-page']);
                } else {
                    // this.route.navigate(['/class/list-class']);
                }
                this.studentData = [];
                this.enterList(this.selectedClassid, 'yes', 'eve');
            }
        } else {
            this.toastr.error(successData.ResponseObject);
        }
    }

    submitClassFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject);
    }

    bulkMail() {
        console.log(this.emailList, 'mail');
        const ismakeUpClass = this.studentEmailForm.controls.is_makeup.value;
        console.log(this.studentEmailForm.valid, 'emailVali');
        console.log(this.emailList.length != 0 && ((ismakeUpClass && this.studentEmailForm.valid) || !ismakeUpClass));
        const startDate = this.studentEmailForm.controls.start_date.value ?? '';
        if (this.emailList.length != 0 && ((ismakeUpClass && startDate != '') || !ismakeUpClass)) {
            this.showBulkEmailLoader = true;
            for (let i = 0; i < this.emailList.length; i++) {
                this.blukEmailValue.push(this.emailList[i].value);
            }
            console.log(this.blukEmailValue, 'emaildata');
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                class_id: this.selectClassData.class_id,
                student_id: [],
                email_id: this.blukEmailValue,
                message: this.studentEmailForm.controls.message.value,
                is_makeup: ismakeUpClass ? '1' : '0',
                start_date: ismakeUpClass ? startDate != '' && startDate
                    ? this.datePipe.transform(startDate.singleDate.jsDate, 'yyyy-MM-dd') : '' : '',
                end_date: ismakeUpClass ? startDate != '' && startDate
                    ? this.datePipe.transform(startDate.singleDate.jsDate, 'yyyy-MM-dd') : '' : '',
            };
            this.classes.bulkMail(data).subscribe((successData) => {
                    this.bulkMailSuccess(successData);
                },
                (error) => {
                    this.showBulkEmailLoader = false;
                    console.error(error, 'error');
                });
        } else {
            if (this.emailList.length == 0) {
                this.toastr.error('Please enter Email-Id');
            } else if (ismakeUpClass && startDate == '') {
                this.toastr.error('Please Enter MakeUp Class Start Date');
                this.validationService.validateAllFormFields(this.studentEmailForm);
            }
        }
    }

    bulkMailSuccess(successData) {
        if (successData.IsSuccess) {
            this.modalRef.close();
            this.toastr.success(successData.ResponseObject);
        } else {
            this.blukEmailValue = [];
            this.toastr.error(successData.ErrorObject);
        }
        this.showBulkEmailLoader = false;
    }

    submitChangeClass() {
        if (this.idForClass == this.studentClassChange.controls.toClass.value) {
            this.toastr.error('From Class and To Class should be different');
            return false;
        }
        console.log(this.studentClassChange.controls.from_startdate.value, 'startdata');
        if (this.studentClassChange.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                from_class: this.idForClass,
                to_class: this.studentClassChange.controls.toClass.value,
                from_date: this.selectedToClass.start_date,
                end_date: this.selectedToClass.end_date,
                joining_date: this.studentClassChange.controls.from_startdate.value == null ? '' : this.datePipe.transform(this.studentClassChange.controls.from_startdate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                student_id: this.selectedChangeStudent.user_id,
                status: '1'
            };
            this.student.changeClass(data).subscribe((successData) => {
                    this.submitMakeUpOrChangeSuccess(successData);
                },
                (error) => {
                    console.error(error, 'Submit_error');
                });
        } else {
            this.validationService.validateAllFormFields(this.studentClassChange);
            this.toastr.error('Please Select all the mandatory fields');
        }
    }

    submitMakeUpOrChangeSuccess(successData) {
        if (successData.IsSuccess) {
            this.onSelect(this.selectedChangeStudent, 'non_direct');
            console.log(successData.ResponseObject, 'dasd');
            this.toastr.success(successData.ResponseObject);
            this.removeAction([this.selectedChangeStudent]);
            this.modalRef.close();
        } else {
            this.toastr.error(successData.ErrorObject);
        }
    }

    onSelect(selected, type) {
        let selectedItem = [];
        if (type == 'direct') {
            // this.selected = selected.selected;
            selected.selected.forEach((item) => {
                selectedItem.push(item.user_id);
            });
        } else {
            let shiftSelected = [selected];
            // this.selected = shiftSelected;
            shiftSelected.forEach((item) => {
                selectedItem.push(item.user_id);
            });
        }
        // type == 'direct' ? selected.selected : selected;
        // this.selected = selected.selected;
        // selected.selected.forEach((item) => {
        //     selectedItem.push(item.user_id);
        // });
        this.studentData.forEach((item) => {
            item.isSelect = selectedItem.includes(item.user_id);
        });
    }

    removeAction(selected) {
        let data = [];
        //    this.selected = [];
        this.studentData.forEach((item, index) => {
            if (item.isSelect == false) {
                data.push(item);
            }
        });

        //    this.selected.filter((item) => {
        //         return item.isSelect == true;
        //     });
        //    this.selectedRows = selected;
        //     for (let j = 0; j < this.selectedRows.length; j++) {
        //         for (let k = 0; k < this.studentData.length; k++) {
        //             if (this.selectedRows[j].student_id == this.studentData[k].student_id) {
        //                 this.studentData[k].status = '0';
        //             }
        //         }
        //     }
        data.forEach((items) => items.student_name = items.first_name + ' ' + items.last_name);
        data.sort((a, b) => a.student_name.localeCompare(b.student_name));
        this.studentData = [...data];
        //    this.temp = data;
        this.auth.setSessionData('studentlist1', JSON.stringify(this.studentData));
        this.auth.setSessionData('studentlist', JSON.stringify(this.studentData));
    }

    closeOverAll() {
        this.modalRef.close('viewoveralldetails');
    }

    getCourseList() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(payload, urls.courseList).subscribe(
            (successData: any) => {
                this.courseListData = successData.IsSuccess ? successData.ResponseObject : [];
                this.courseListData.push({course_id: '0', course_name: 'Other Classes - Without Course', status: ''});
            },
            (error) => {
                console.error(error, ' error');
            }
        );
    }

    addClass() {
        if (this.auth.getRoleId() == '2') {
            this.route.navigate(['/class/schedule/add']);
        } else {
            this.route.navigate(['/class/create-class/add']);
        }
    }

    addstudent() {
        const addresslist = [{address1: '', address2: '', city: '', state: '', country: '', postal_code: '', address_type: '2'},
            {address1: '', address2: '', city: '', state: '', country: '', postal_code: '', address_type: '3'}];
        if (this.addStudentForm.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                first_name: this.addStudentForm.controls.first_name.value,
                last_name: this.addStudentForm.controls.last_name.value,
                gender: '',
                birthday: '',
                school_id: this.auth.getSessionData('school_id'),
                school_idno: '',
                grade_id: this.addStudentForm.controls.grade.value ?? '',
                email_id: this.addStudentForm.controls.email_id.value,
                mobile: [],
                batch_id: '',
                registration_date: '',
                dropped_date: '',
                address: addresslist,
                parent1_firstname: '',
                parent1_lastname: '',
                parent2_firstname: '',
                parent2_lastname: '',
                parent1_email_ids: [],
                parent2_email_ids: [],
                profile_url: '',
                profile_thumb_url: '',
                status: '1'
            };

            console.log(data, 'data');
            this.student.studentAdd(data).subscribe((successData) => {
                    this.addStudentSuccess(successData);
                },
                (error) => {
                    console.error(error, 'add_Student');
                });
        } else {
            this.validationService.validateAllFormFields(this.addStudentForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }

    addStudentSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject, 'Student');
            this.searchStudentList(1);
            this.addStudentEnabled = false;
        } else {
            this.toastr.error(successData.ErrorObject, 'Student');
        }
    }

    allReports(data) {
        data.viewType = '1';
        data.manageClass = true;
        data.content_id = '0';
        data.test_type_id = '0';
        this.auth.setSessionData('report_type', 'reportFromClass');
        this.auth.setSessionData('reportCalledFrom', 'list');
        this.auth.setSessionData('All-Reports', JSON.stringify(data));
        this.route.navigate(['/report/report']);
    }

    reportDetails(data) {
        this.auth.setSessionData('Individual-Class-Report', JSON.stringify(data));
        this.modalRef = this.modalService.open(this.reports, {size: 'xl'});
        this.contentNameValue = '';
    }

    navigateToSATReport(data) {
        const satReportDetails = {
            class_id: data.class_id,
            class_name: data?.class_name,
            student_id: this.auth.getRoleId() == '5' ? this.auth.getUserId() : '0',
            content_id: '0',
            student_content_id: '0',
            test_type_id: '0',
        };
        this.auth.setSessionData('satReportData', JSON.stringify(satReportDetails));
        this.auth.setSessionData('reportCalledFrom', 'list');
        this.route.navigate(['sat-report']);
    }
}
