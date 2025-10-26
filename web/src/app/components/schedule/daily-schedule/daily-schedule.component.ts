import {ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    TemplateRef,
    ViewChild
} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {IAngularMyDpOptions, IMyDateModel} from '@nodro7/angular-mydatepicker';
import {ClassService} from '../../../shared/service/class.service';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {StudentService} from '../../../shared/service/student.service';
import {dateOptions, timeZone} from '../../../shared/data/config';
import {ZoomServiceService} from '../../../shared/service/zoom-service.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ContentdetailService} from '../../../shared/service/contentdetail.service';
import {Subscription} from 'rxjs';
import {SseClient} from 'ngx-sse-client';
import {EnvironmentService} from '../../../environment.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {urls} from '../../../shared/utils/urls';
import {ValidationService} from '../../../shared/service/validation.service';
declare var bootstrap: any; // Ensure Bootstrap is available

@Component({
    selector: 'app-daily-schedule',
    templateUrl: './daily-schedule.component.html',
    styleUrls: ['./daily-schedule.component.scss']
})
export class DailyScheduleComponent implements OnInit, OnChanges, OnDestroy {
    public setDate = new Date().toLocaleString('en-US', {timeZone: timeZone.location});
    myDpOptions: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: dateOptions.pickerFormat,
        calendarAnimation: {
            in: 4,
            out: 4
        },
        firstDayOfWeek: 'su'
    };
    public gradeData = [];
    public subjectData = [];
    public scheduleData = [];
    public scheduleDataAlt = [];
    public notesList = [];
    public classNotesList = [];
    public searchClass: any = '';
    public searchStudent: any = '';
    public searchTeacher: any = '';
    public contentNameValue: any = '';
    public classNotes: any = '';
    public customLoader = false;
    public studentEmailForm: FormGroup;
    public makeUpClass: FormGroup;
    public searchDate: IMyDateModel = {
        isRange: false,
        singleDate: {jsDate: new Date(this.setDate)}
    };
    public searchDate1: any;
    public currentDate: any;
    public viewdetail: any;
    public studentName: any;
    public classId: any;
    public selectedClass: any;
    public scheduleDetail: any;
    public studentDetail: any;
    public detailData: any;
    public schoolStatus: any;
    public manageClass = true;
    public teacherType: any;
    public settingValue = '0';
    public settingList = [];
    public emailList: any = [];
    removable = true;
    validationEmail = false;
    public separatorKeysCodes = [ENTER, COMMA];
    public blukEmailValue: any = [];
    public selectClassData: any;
    public classInfo: any;
    public roleId: any;
    public classDetails: any;
    public gradName: any;
    public recordLoader: boolean = false;
    public selectedStudent: any;
    @ViewChild('viewoveralldetails') viewoveralldetails: TemplateRef<any>;
    @ViewChild('zoomDialog') zoomDialog: TemplateRef<any>;
    @ViewChild('zoomDialog1') zoomDialog1: TemplateRef<any>;
    @ViewChild('meetingSelection') meetingSelection: TemplateRef<any>;
    @ViewChild('recordinglist') recordinglist: TemplateRef<any>;
    @ViewChild('reports') reports: TemplateRef<any>;
    @ViewChild('notes') notes: TemplateRef<any>;
    @ViewChild('writeNoteOpen') writeNoteOpen: TemplateRef<any>;
    @ViewChild('addMultipleEmailDialog') addMultipleEmailDialog: TemplateRef<any>;
    @ViewChild('showInform') showInform: TemplateRef<any>;
    @ViewChild('deleteClass') deleteClassDialog: TemplateRef<any>;
    @ViewChild('addStudentDialog') addStudentDialog: TemplateRef<any>;
    @ViewChild('confirmation') confirmation: TemplateRef<any>;
    @ViewChild('voidClass') voidClass: TemplateRef<any>;
    subs: Subscription[] = [];
    messageSubs: Subscription[] = [];
    public modalRef: NgbModalRef;
    @Input() page?: any;
    public editorValue: any;
    public videoSource: any = [];
    manageStudent = true;
    public studentDataList: any = [];
    public gradeValue: any;
    public settings = {};
    public newlySelectedStuent = [];
    private showEmailId = true;
    public selectedClassid: any;
    public makeUpClassSelected = false;
    public selectedFormakeUpClass: any = {};
    public voidClassData: any = {};
    public voidClassIndex: any = 0;
    public lesserThanCurrentDate = false;
    public addStudentEnabled = false;
    public addStudentForm: FormGroup;
    public studentAddedType = '0';
    public effectiveStartDate: any;
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

    constructor(public auth: AuthService, public commondata: CommonDataService, public classes: ClassService, public formBuilder: FormBuilder, public content: ContentdetailService,
                public datePipe: DatePipe, public toastr: ToastrService, public zoomService: ZoomServiceService, private sseClient: SseClient,
                private modalService: NgbModal, public student: StudentService, public route: Router, public newService: NewsubjectService,
                public env: EnvironmentService, public validationService: ValidationService, public cdr: ChangeDetectorRef) {
        this.roleId = this.auth.getRoleId();
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
        if (this.roleId != '5') {
            const settingData = this.auth.getSessionData('settingList');
            if (settingData) {
                this.settingList = JSON.parse(settingData);
                if (this.settingList && Array.isArray(this.settingList)) {
                    this.settingList.forEach((items) => {
                        if (items.name == 'teacher_zoom_view') {
                            this.settingValue = items.value;
                        }
                    });
                }
            }
        }
        const date = new Date(this.setDate);
        this.searchDate1 = {
            isRange: false,
            singleDate: {jsDate: new Date(this.setDate)}
        };
        this.searchDate1 = this.datePipe.transform(date, 'dd-MM-yyyy');
        this.currentDate = this.datePipe.transform(date, 'dd-MM-yyyy');
        console.log(this.currentDate, 'currentDate');
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.setMakeUpClassForm();
        this.setStudentEmailForm();
        this.setStudentForm();
        this.newService.schoolChange.subscribe((res: any) => {
            console.log(res, 'res');
            if (res != '') {
                if (this.route.url.includes('daily-schedule')) {
                    this.init();
                }
            } else {
                this.init();
            }
        });
    }

    ngOnInit(): void {
        // this.init();
    }

    ngOnChanges() {
        this.init();
    }

    ngOnDestroy(): void {
        this.auth.removeSessionData('classSelected_makeUp');
        this.auth.removeSessionData('studentSelected_makeUp');
        this.auth.removeSessionData('makeUpClass_calledFrom');
        this.subs ? this.subs.forEach(val => val.unsubscribe()) : '';
        this.messageSubs ? this.messageSubs.forEach(value => value.unsubscribe()) : '';
    }

    cardNavigation(item) {
        if (this.roleId == '5') {
            this.enterList(item);
        }
    }

    deleteClassModal(row) {
        this.classDetails = row;
        this.modalRef = this.modalService.open(this.deleteClassDialog);
    }

    get checkClassDeleteConditions() {
        return this.auth.getRoleId() == '2' || (this.auth.getRoleId() == '4' && this.auth.getSessionData('teacher_type') == '1');
    }

    getCommentListCount() {
        const class_id = this.scheduleData.map(items => items.class_id);
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
                        const index = this.scheduleData.findIndex(x => x.class_id === items.class_id);
                        this.scheduleData[index].new_comments = items.new_comments;
                    });
                }
            }));
        } else {
            this.subs.forEach(value => value.unsubscribe());
        }
    }

    getMessageListCount() {
        const class_id = this.scheduleData.map(items => items.class_id);
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
                            const index = this.scheduleData.findIndex(x => x.class_id === items.class_id);
                            if (index !== -1) {
                                this.scheduleData[index].newMessage = items.newMessage;
                            }
                        });
                    } catch (error) {
                        console.error('Failed to parse JSON:', error, cleanedData);
                    }
                }
            }));
        } else {
            this.messageSubs.forEach((value) => value.unsubscribe());
        }
    }


    enterList(item) {
        if (item.class_date_status == '1') {
            this.toastr.info('This Class Not Started');
        } else {
            this.auth.setSessionData('class-id', item.class_id);
            this.auth.setSessionData('schedule_id', item.schedule_id);
            this.route.navigate(['/studentlogin/class-detail']);
        }
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
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.toastr.success('Class deleted Successfully', 'Class');
            this.modalRef.close();
            this.getScheduleDetails();
        } else{
            this.toastr.error(successData.ResponseObject, 'Class');
        }
    }

    navigateOutsideRecording(data) {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', data.play_video);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    openRecordingList(classData) {
        this.selectedClass = classData;
        console.log(this.selectedClass, 'selectedClass');
        if (!this.recordLoader) {
            this.recordLoader = true;
            this.classDetailsService(classData, 'recording');
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
                this.videoSource = [];
                successData.ResponseObject.forEach((item) => {
                    this.videoSource.push(...item.meeting_recording);
                });
                this.modalRef = this.modalService.open(this.recordinglist, {size: 's'});
            }
        }, (error) => {
            this.commondata.showLoader(false);
        });
    }

    classDetailsService(value, type = '', event?) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: value.class_id,
            grade: [value.grade_id],
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        this.commondata.showLoader(true);
        if (this.roleId == '5') {
            data['student_id'] = this.auth.getUserId();
            this.classes.studentClassDetail(data).subscribe((successData) => {
                    this.enterListSuccess(successData, type, value);
                },
                (error) => {
                    console.error(error, 'error');
                });
        } else {
            this.classes.classDetails(data).subscribe((successData) => {
                    this.enterListSuccess(successData, type, value);
                },
                (error) => {
                    console.error(error, 'error');
                });
        }

        if (event) {
            event.stopPropagation();
        }
    }

    enterListSuccess(successData, type, classData) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            if (type == 'recording') {
                this.customLoader = false;
                this.recordLoader = false;
                this.selectedClass = successData.ResponseObject[0];
                this.getClassRecording(classData);
            } else if (type == 'inbox' || type == 'curriculum') {
                this.auth.setSessionData('card-data', JSON.stringify(successData.ResponseObject));
                this.route.navigate([ type == 'curriculum' ? '/class/topicsAndCurriculum/3' : '/class/topicsAndCurriculum/5']);
            }  else {
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
                        if (this.auth.getRoleId() == '4' && this.teacherType == '0') {
                            this.auth.setSessionData('readonly_data', 'true');
                        } else {
                            this.auth.removeSessionData('readonly_data');
                        }
                    }
                    this.route.navigate(['/class/create-class/edit']);
                }
            }
        }
    }

    curriculum(value) {
        console.log(value, 'value');
        if (['2', '4'].includes(this.roleId)) {
            this.classDetailsService(value, 'curriculum');
        } else {
            this.enterList(value);
        }
    }

    init() {
        this.subs ? this.subs.forEach(val => val.unsubscribe()) : '';
        this.messageSubs ? this.messageSubs.forEach(value => value.unsubscribe()) : '';
        if (this.auth.getRoleId() == '4') {
            this.teacherType = this.auth.getSessionData('teacher_type');
        }
        this.manageClass = this.auth.manageClass;
        this.manageStudent = this.auth.manageStudent;
        this.showEmailId = this.auth.showStudentEmailId;
        this.loadGradeList();
        this.getScheduleDetails();
    }

    closeOverAll() {
        this.modalRef.close('viewoveralldetails');
    }

    clickEve(item, type, event, data) {
        item.attendance = type == 'present' && event.target.checked ? '1' : type == 'absent' && event.target.checked ? '0' : '';
        const selectedStudent = data.student_details.filter(studentData => studentData.student_id == item.student_id);
        this.updateStudentAttendance(data, selectedStudent);
    }

    setFilter() {

        this.scheduleData = this.scheduleDataAlt.filter((val) => {
            if (val.class_name.toLowerCase().indexOf(this.searchClass.toLowerCase()) > -1
                && val.teacher_name.toLowerCase().indexOf(this.searchTeacher.toLowerCase()) > -1) {
                if (this.searchStudent == '') {
                    return true;
                } else {
                    let exist = false;
                    val.student_details.forEach((items) => {
                        if (items.student_name.toLowerCase().indexOf(this.searchStudent.toLowerCase()) > -1) {
                            exist = true;
                        }
                    });
                    return exist;
                }
            }
        });
    }

    onDateChanged(event: IMyDateModel) {
        this.searchDate1 = this.datePipe.transform(event.singleDate.jsDate, 'dd-MM-yyyy');
        this.searchDate = event;
        const currentDate = new Date(new Date().toLocaleString('en-US', { timeZone: timeZone.location }));
        const makeupDate = new Date(event.singleDate.jsDate);
        this.lesserThanCurrentDate = currentDate < makeupDate;
        console.log(!this.lesserThanCurrentDate)
        this.getScheduleDetails();
    }

    redirectToAnnouncement(value, event, type = '') {
        console.log(value, 'redirectedValue');
        if (this.auth.getRoleId() == '5') {
            this.auth.setSessionData('class-id', value.class_id);
            this.auth.setSessionData('schedule_id', value.schedule_id);
            this.route.navigate(['/studentlogin/class-detail/' + type]);
            event.stopPropagation();
        } else {
            console.log(value, 'value');
            this.auth.setSessionData('announcement-class', [value.class_id]);
            this.route.navigate(['/announcement/list/add']);
            event.stopPropagation();
        }
    }

    getScheduleDetails(classId = '', scheduleId = '') {
        const date = this.datePipe.transform(this.searchDate.singleDate.jsDate, 'dd-MM-yyyy');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            date
        };
        this.classes.overallClassAttendance(data).subscribe((successData) => {
            this.overallClassAttendanceSuccess(successData, classId, scheduleId);
        }, (error) => {
            this.scheduleData = [];
            console.log(error);
        });
    }

    overallClassAttendanceSuccess(successData, classId, scheduleId) {
        if (successData.IsSuccess) {
            console.log(successData, 'schoolListDetails');
            successData.ResponseObject.forEach(items => {
                items.new_comments = 0;
                items.newMessage = 0;
                items.student_details.forEach(student => {
                    if (student.makeup_class_id != '') {
                        const currentDate = new Date(new Date().toLocaleString('en-US', { timeZone: timeZone.location }));
                        const makeupDate = new Date(student.makeup_class_date);
                        student.allow_void_class = currentDate < makeupDate;
                        console.log(student.allow_void_class, student, 'student.allow_void_class');
                    } else {
                        student.allow_void_class = false;
                    }
                });
                items.student_details.sort((a, b) => a.student_name.localeCompare(b.student_name));
            });
            console.log(successData.ResponseObject, 'ResponseObject');
            this.scheduleDataAlt = successData.ResponseObject;
            this.subs.forEach(val => val.unsubscribe());
            this.messageSubs.forEach(value => value.unsubscribe());
            this.sortByTime();
            this.scheduleData = JSON.parse(JSON.stringify(this.scheduleDataAlt));
            this.auth.getRoleId() != '5' ? this.getCommentListCount() : '';
            if (['4', '5'].includes(this.auth.getRoleId())) {
                this.getMessageListCount();
            }
            this.makeUpClassSelected = !!this.auth.getSessionData('classSelected_makeUp');
            if (this.makeUpClassSelected) {
                this.selectedClass = JSON.parse(this.auth.getSessionData('classSelected_makeUp'));
                this.selectedStudent = this.auth.getSessionData('studentSelected_makeUp');
            }
            if (scheduleId != '' && classId != '') {
                setTimeout(() => {
                    const id = 'class_' + classId + 'schedule_' + scheduleId;
                    console.log(id, 'id_name');
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollTo({ behavior: 'smooth', top: element.scrollHeight });
                        const collapse = document.getElementById('schedule_' + scheduleId);
                        collapse.click();
                    }
                }, 100);
            } else {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        } else {
            this.scheduleData = [];
        }
    }

    confirmationForMakeUpClass(data) {
        this.selectedFormakeUpClass = data;
        this.modalRef = this.modalService.open(this.confirmation);
    }

    addMakeUpClass(event, classData) {
        this.makeUpClassSelected = true;
        classData.absent_date = this.searchDate;
        classData.student_name = event.student_name;
        this.auth.setSessionData('classSelected_makeUp', JSON.stringify(classData));
        this.auth.setSessionData('studentSelected_makeUp', event.student_id);
        this.selectedClass = classData;
        this.selectedStudent = event.student_id;
        this.myDpOptions = {
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
            }
        };
        this.searchDate = {
            isRange: false,
            singleDate: {jsDate: new Date(this.setDate)}
        };
        this.searchDate1 = this.datePipe.transform(this.searchDate.singleDate.jsDate, 'dd-MM-yyyy');
        this.getScheduleDetails();
    }

    submitMakeUpClass(event) {
        if (this.selectedClass.class_id == event.class_id) {
            this.toastr.error('From Class and To Class should be different');
            return false;
        }
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            to_class: event.class_id,
            from_class: this.selectedClass.class_id,
            absent_date: this.selectedClass.absent_date ?
                this.datePipe.transform(this.selectedClass.absent_date.singleDate.jsDate, 'yyyy-MM-dd') : '',
            start_date: this.searchDate ?
                this.datePipe.transform(this.searchDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
            end_date: this.searchDate ?
                this.datePipe.transform(this.searchDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
            student_id: this.selectedStudent,
            status: '1'
        };
        this.auth.postService(payload, urls.makeUpClass).subscribe((successData: any) => {
            if (successData.IsSuccess) {
                const selectedClass: any = this.auth.getSessionData('classSelected_makeUp');
                this.auth.removeSessionData('classSelected_makeUp');
                this.auth.removeSessionData('studentSelected_makeUp');
                this.modalRef.close();
                console.log(event.class_id, 'selectedClass.class_id');
                console.log(event.schedule_id, 'schedule_id');
                this.makeUpClassSelected = false;
                this.myDpOptions = { ...this.myDpOptions, disableUntil: { year: 0, month: 0, day: 0 } };
                this.cdr.detectChanges();
                this.getScheduleDetails(event.class_id, event.schedule_id);
                this.toastr.success(successData.ResponseObject);
            } else {
                this.toastr.error(successData.ErrorObject);
            }
        }, (error) => console.error(error, 'makeUp_error'));
    }

    updateStudentAttendance(item, attendence) {
        console.log(item);
        console.log(attendence, 'attendence');
        const date1 = this.searchDate.singleDate.jsDate;
        const date = this.datePipe.transform(date1, 'dd-MM-yyyy');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: item.class_id,
            date,
            attendence,
            start_date: item.start_date,
            start_time: item.start_time,
            end_time: item.end_time,
            slot_day: item.slot_days == 'Monday' ? '1' : item.slot_days == 'Tuesday' ? '2' : item.slot_days == 'Wednesday' ? '3' : item.slot_days == 'Thursday' ? '4' : item.slot_days == 'Friday' ? '5' : item.slot_days == 'Saturday' ? '6' : '7',
            type: 'add'
        };
        this.classes.updateAttendance(data).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    // this.toastr.success(successData.ResponseObject, 'Success');
                } else {
                    this.toastr.error(successData.ErrorObject, 'Failed');
                }
            },
            (error) => {
                console.log(error);
            });
    }

    getStudentFullDetail(item) {
        console.log(item, 'datum');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'list'
        };
        this.student.getStudentList(data).subscribe((successData) => {
                this.studentFullDetailSuccess(successData, item);
            },
            (error) => {
                console.log(error);
            });
    }

    studentFullDetailSuccess(successData, item) {
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((val) => {
                if (val.user_id == item.student_id) {
                    this.viewdetail = val;
                    this.studentName = item.student_name;
                }
            });
            this.modalRef = this.modalService.open(this.viewoveralldetails, {size: 'xl'});
            console.log(this.viewdetail, 'viewDetail');
        }
    }

    getMeetingLink(datum, index) {
        console.log(datum, 'datum');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: datum.class_id,
            class_type: datum.availabilityDate[index].class_type,
            allow_zoom_api: datum.allow_zoom_api,
            notes: datum.notes == undefined ? [] : datum.notes,
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
                this.navigateOutsideZoom(successData.ResponseObject);
            } else if (datum.allow_zoom_api == '1') {
                if (this.settingValue == '2') {
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

    navigateOutsideZoom(data) {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        // if (this.selectedClass.allow_zoom_api == '0') {
        //     link.setAttribute('href', data.meeting_link);
        // } else {
        //     //role id 4 is teacher
        //     if (this.auth.getRoleId() == '4') {
        //         link.setAttribute('href', data.teacher_link);
        //     } else if (this.auth.getRoleId() == '5') {
        //         link.setAttribute('href', data.student_link);
        //     }
        // }
        if (this.selectedClass.allow_zoom_api == '0') {
            link.setAttribute('href', data.meeting_link);
            console.log(data.meeting_link, 'data.meeting_link');
        } else {
            link.setAttribute('href', data.teacher_link);
        }
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    openZoomDialog(data) {
        if (!this.customLoader) {
            this.customLoader = true;
            this.selectedClass = data;
            if (data.availabilityDate.length == 0) {
                this.modalRef = this.modalService.open(this.zoomDialog1, {size: 's'});
            } else {
                if (this.selectedClass.allow_zoom_api == '0') {
                    this.navigateOutsideZoom(data.availabilityDate[0]);
                } else {
                    this.getMeetingLink(data, 0);
                }
            }
            this.customLoader = false;
        }
    }

    allReports(data) {
        data.viewType = '1';
        data.manageClass = true;
        data.content_id = '0';
        data.test_type_id = '0';
        this.auth.setSessionData('report_type', 'reportFromSchedule');
        this.auth.setSessionData('reportCalledFrom', 'schedule');
        this.auth.setSessionData('All-Reports', JSON.stringify(data));
        this.route.navigate(['/report/report']);
    }

    reportDetails(data) {
        this.auth.setSessionData('Individual-Class-Report', JSON.stringify(data));
        this.modalRef = this.modalService.open(this.reports, {size: 'xl'});
        this.contentNameValue = '';
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

    onItemSelect(event, select) {
        console.log(event, 'event');
        this.studentDataList.forEach((item) => {
            if (select == 'single'){
                if (item.student_id == event.student_id) {
                    this.newlySelectedStuent.push(item);
                }
            } else {
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
            event.forEach(item => this.gradeValue.push(item.grade_id));
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
                end_date: this.scheduleData[this.selectedClassid].end_date,
                grade_id: this.gradeValue,
            };
            this.classes.searchList(data).subscribe((successData) => {
                    this.searchStudentListSuccess(successData, id);
                },
                (error) => {
                    console.error(error);
                });
        } else {
            this.studentDataList = [];
        }
    }

    searchStudentListSuccess(successData, id) {
        if (successData.IsSuccess) {
            this.studentDataList = successData.ResponseObject;
            const { studentDataList, scheduleData } = this;
            const studentData = scheduleData[this.selectedClassid].student_details;
            this.studentDataList = studentDataList.filter(
                o1 => !studentData?.some(o2 => o1.student_id === o2.student_id)
            );
            this.studentDataList.forEach((list) => {
                if (this.auth.getRoleId() == '4' && !this.showEmailId) {
                    list.name_with_email = list.name + (list.grade_name != '' ? '  - ' + list.grade_name : '');
                } else {
                    list.name_with_email = list.name + ' ( ' + (list.student_id)  + ' ) ' + (list.grade_name != '' ? '  - ' + list.grade_name : '');
                }
            });
            console.log(this.studentDataList, 'studentDataList');
            if (id == 2) {
                this.studentName = [];
            }
        }
    }

    loadGradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.student.getgradeList(data).subscribe((successData) => {
                this.gradeListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_gradeList');
            });
    }

    gradeListSuccess(successData) {
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
            console.log(this.gradeData, 'gradeData loaded');
        }
    }

    submitClass() {
        if (this.newlySelectedStuent.length != 0) {
            if (this.studentAddedType == '0' || (this.studentAddedType == '1' && this.effectiveStartDate)) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.auth.getSessionData('school_id'),
                    teacher_id: this.selectClassData.teacher_id,
                    class_name: this.selectClassData.class_name,
                    subject: this.selectClassData.subject,
                    start_date: this.studentAddedType == '0' ? this.selectClassData.start_date : (this.effectiveStartDate ?
                        this.datePipe.transform(this.effectiveStartDate.singleDate.jsDate, 'yyyy-MM-dd') : ''),
                    end_date: this.studentAddedType == '0' ? this.selectClassData.end_date : (this.effectiveStartDate ?
                        this.datePipe.transform(this.effectiveStartDate.singleDate.jsDate, 'yyyy-MM-dd') : ''),
                    start_time: this.selectClassData?.class_start_time,
                    end_time: this.selectClassData?.class_end_time,
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
                        this.submitClassSuccess(successData);
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

    submitClassSuccess(successData) {
        if (successData.IsSuccess) {
            this.newlySelectedStuent = [];
            this.gradName = undefined;
            this.auth.removeSessionData('class-curriculum');
            this.effectiveStartDate = null;
            const redirectSchedulePage = !!this.auth.getSessionData('enterThroughSchedule');
            this.modalRef.close();
            this.toastr.success(successData.ResponseObject, 'Class');
            this.auth.removeSessionData('editView');
            if (redirectSchedulePage == true) {
                this.auth.removeSessionData('enterThroughSchedule');
            }
            this.enterClass(this.selectedClassid, 'addStudent');
        } else {
            this.toastr.error(successData.ResponseObject);
        }
    }

    submitClassFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject);
    }

    enterClass(id, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.scheduleData[id].class_id,
            grade: [this.scheduleData[id].grade_id],
            teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0'
        };
        this.commondata.showLoader(true);
        this.classes.classDetails(data).subscribe((successData) => {
                this.enterClassSuccess(successData, type);
            },
            (error) => {
                console.log(error);
            });
    }

    enterClassSuccess(successData, type) {
        this.commondata.showLoader(false);
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            if (type == 'notes') {
                this.classNotesList = successData.ResponseObject[0].notes;
            } else if (type == 'addStudent') {
                const studentData = this.scheduleData[this.selectedClassid]?.student_details;

                successData.ResponseObject[0]?.students.forEach(items => {
                    if (!studentData?.some(code => code.student_id === items.user_id)) {
                        const studentDetails = {
                            student_id: items.user_id,
                            student_name: items.first_name + ' ' + items.last_name,
                            student_grade_name: items.grade_name,
                            attendance: '',
                            makeup_class_id: '',
                            makeup_class_name: '',
                            makeup_class_date: '',
                            student_class_type: items.student_class_type
                        };
                        studentData?.push(studentDetails);
                    }
                });
            } else {
                this.detailData = successData.ResponseObject;
                this.auth.setSessionData('classView', true);
                this.auth.setSessionData('enterThroughSchedule', true);
                this.auth.setSessionData('studentlist', JSON.stringify(this.detailData[0].students));
                this.auth.setSessionData('studentlist1', JSON.stringify(this.detailData[0].students));
                this.auth.setSessionData('card-data', JSON.stringify(this.detailData));
                this.auth.setSessionData('editclass', JSON.stringify(successData.ResponseObject));
                this.auth.setSessionData('updatedStudent', 1);
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
                } else if (this.detailData[0].classDate_status == '4' && this.detailData[0].class_status == '0') {
                    this.route.navigate(['/class/list-class']);
                } else if (this.detailData[0].classDate_status == '4' && this.detailData[0].class_status == '1') {
                    if (!this.manageClass) {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('readonly_data', 'true');
                    } else {
                        this.auth.removeSessionData('readonly_startdate');
                        this.auth.removeSessionData('readonly_data');
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
                        if (this.auth.getRoleId() == '4' && this.teacherType == '0') {
                            this.auth.setSessionData('readonly_data', 'true');
                        } else {
                            this.auth.removeSessionData('readonly_data');
                        }
                    }
                    this.route.navigate(['/class/create-class/edit']);
                }
            }
        }
    }

    openNotes(scheduleData, studentData) {
        this.scheduleDetail = scheduleData;
        this.studentDetail = studentData;
        this.scheduleNotesList();
        this.modalRef = this.modalService.open(this.notes, {size: 'lg'});
    }

    sortByTime() {
        this.scheduleDataAlt.forEach((items) => {
            const splitMeridian = items.start_time.split(' ');
            const splitTime = splitMeridian[0].split(':');
            if (splitMeridian[1] == 'AM' && splitTime[0] == '12') {
                const convert = '0' + '.' + splitTime[1];
                items.convertedTime = parseFloat(convert);
            } else if (splitMeridian[1] == 'PM' && parseInt(splitTime[0]) < 12) {
                const add12 = parseInt(splitTime[0]) + 12;
                const convert = add12.toString() + '.' + splitTime[1];
                items.convertedTime = parseFloat(convert);
            } else {
                splitMeridian[0] = splitMeridian[0].replace(':', '.');
                items.convertedTime = parseFloat(splitMeridian[0]);
            }
        });
        this.scheduleDataAlt.sort((a, b) => a.convertedTime - b.convertedTime);
    }

    scheduleNotesList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.scheduleDetail.class_id,
            content_id: '0',
            student_id: this.studentDetail.student_id
        };
        this.classes.scheduleNotesList(data).subscribe((successData) => {
                this.scheduleNotesListSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    scheduleNotesListSuccess(successData) {
        if (successData.IsSuccess) {
            this.notesList = successData.ResponseObject;
        }
    }

    addNotes() {
        if (this.classNotes != '') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                class_id: this.scheduleDetail.class_id,
                student_id: this.studentDetail.student_id,
                content_id: '0',
                notes: this.classNotes.replace(/\r?\n/g, '<br />'),
                type: '1'
            };
            this.classes.addScheduleNotes(data).subscribe((successData) => {
                    this.addScheduleNoteSuccess(successData, data);
                },
                (error) => {
                    console.log(error);
                });
        } else {
            this.toastr.error('Please enter notes');
        }
    }

    deleteNotes(item) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.scheduleDetail.class_id,
            schedule_id: this.scheduleDetail.schedule_id,
            student_id: this.studentDetail.student_id,
            id: item.id
        };
        this.content.notesDelete(data).subscribe((successData) => {
                this.addScheduleNoteSuccess(successData, data);
            },
            (error) => {
                console.log(error);
            });
    }

    addScheduleNoteSuccess(successData, data) {
        if (successData.IsSuccess) {
            if (data.type == '1') {
                this.editorValue != '' ? this.editorValue.setContent('') : '';
                this.classNotes = '';
            }
            this.scheduleNotesList();
        }
    }

    getEditorValue(event) {
        this.editorValue = event.editor;
        this.classNotes = event.content;
    }

    openClassNotes(i, value) {
        this.modalRef = this.modalService.open(this.writeNoteOpen, {size: 'lg'});
        this.classNotes = '';
        this.classId = value.class_id;
        this.enterClass(i, 'notes');
    }

    addClassNote() {
        if (this.classNotes == '') {
            this.toastr.error('Notes should not be empty');
            return false;
        }
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.classId,
            note: this.classNotes.replace(/\r?\n/g, '<br />'),
            status: '1',
            add_date: this.currentDate
        };
        this.classes.getNotesList(data).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.classNotesList = successData.ResponseObject;
                    this.editorValue != '' ? this.editorValue.setContent('') : '';
                    this.classNotes = '';
                } else {
                    this.toastr.error(successData.ErrorObject);
                }
            },
            (error) => {
            });
    }

    deleteClassNote(value) {
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
                    this.classNotesList = successData.ResponseObject;
                } else {
                    this.toastr.error(successData.ErrorObject);
                }
            },
            (error) => {
                this.commondata.showLoader(false);
            });
    }

    showInformation(data) {
        this.classInfo = data;
        this.modalRef = this.modalService.open(this.showInform, {size: 'sm'});
    }

    closeStudentModRef() {
        this.modalRef.close();
        this.gradName = undefined;
        this.newlySelectedStuent = [];
        // this.schoolDataList = [];
    }

    shareEmail(value, calledForm = '') {
        console.log(value);
        if (calledForm == 'addStudent') {
            this.modalRef.close('addStudentDialog');
        }
        this.emailList = [];
        this.blukEmailValue = [];
        this.selectClassData = value;
        this.modalRef = this.modalService.open(this.addMultipleEmailDialog, {size: 'lg'});
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
            if (!items.invalid) {
                return true;
            }
            return false;
        });
        console.log(this.emailList, 'emailListOveral');
    }

    removeDuplicates(originalArray, prop) {
        const newArray = [];
        const lookupObject = {};

        for (var i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }

        for (i in lookupObject) {
            newArray.push(lookupObject[i]);
        }
        return newArray;
    }

    removeEmail(data: any): void {
        if (this.emailList.indexOf(data) >= 0) {
            this.emailList.splice(this.emailList.indexOf(data), 1);
        }
        const validation = this.emailList;
        this.validationEmail = validation.every((items) => {
            if (!items.invalid) {
                return true;
            }
            return false;
        });
    }

    bulkMail() {
        if (this.emailList.length != 0) {
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
                email_id: this.blukEmailValue
            };
            this.classes.bulkMail(data).subscribe((successData) => {
                    this.bulkMailSuccess(successData);
                },
                (error) => {
                    this.bulkMailFailure(error);
                });
        } else {
            this.toastr.error('Enter emailId is required');
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
    }

    bulkMailFailure(error) {
        console.log(error, 'error');
        this.toastr.error(error.ResponseObject, 'Class');
    }

    private validateArrayNotEmpty(c: FormControl) {
        if (c.value && c.value.length === 0) {
            return {
                validateArrayNotEmpty: {valid: false},
            };
        }
        return null;
    }

    voidFunctionCalled(data, index) {
        this.voidClassData = data;
        this.voidClassIndex = index;
        console.log(this.voidClass, 'voidClass');
        this.modalRef = this.modalService.open(this.voidClass);
    }

    deleteStudentList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.voidClassData.student_details[this.voidClassIndex].makeup_class_id,
            student_id: this.voidClassData.student_details[this.voidClassIndex].student_id,
            make_up: '1'
        };
        this.classes.deleteStudentList(data).subscribe((successData) => {
                this.deleteStudentListSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    deleteStudentListSuccess(successData) {
        if (successData.IsSuccess) {
            this.modalRef.close();
            this.toastr.success(successData.ResponseObject);
            this.getScheduleDetails(this.voidClassData.class_id, this.voidClassData.schedule_id);
        } else {
            this.toastr.error(successData.ResponseObject);
        }
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
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject, 'Student');
            this.searchStudentList(1);
            this.addStudentEnabled = false;
        } else {
            this.toastr.error(successData.ErrorObject, 'Student');
        }
    }

    private validateEmail(email) {
        var re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}
