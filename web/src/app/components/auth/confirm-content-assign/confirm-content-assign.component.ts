import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IAngularMyDpOptions, IMyDateModel} from '@nodro7/angular-mydatepicker';
import {dateOptions, timeZone} from '../../../shared/data/config';
import {DatePipe} from '@angular/common';
import {AuthService} from '../../../shared/service/auth.service';
import {CreatorService} from '../../../shared/service/creator.service';
import {ClassService} from '../../../shared/service/class.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-confirm-content-assign',
    templateUrl: './confirm-content-assign.component.html',
    styleUrls: ['./confirm-content-assign.component.scss']
})
export class ConfirmContentAssignComponent implements OnInit {

    @Input() classData: any = [];
    @Input() isEssay: any = '0';
    @Input() contentDetails: any = {};
    @Input() multiContentId: any = [];
    @Output() closePopUp: any = new EventEmitter<any>();
    public setDate = new Date().toLocaleString('en-US', { timeZone: timeZone.location });
    public dateValidation: boolean = true;
    public showClassRelatedField = false;
    public showContentFolderRelatedField = false;
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
    public showStudentList: boolean;
    public assignForm: FormGroup;
    public studentData = [];
    public choosedData = [];
    public meridian = true;
    public spinner = false;
    public endDate: any;
    public startdate: any;
    public contentAssignedForm = '';
    public model: { singleDate: { jsDate: Date }; isRange: boolean };
    public assignType = '1';
    public classListData = [];
    public classDataSample = [];
    public teacherListData = [];
    public contentFolderListData = [];
    public releaseGrade: any = '';
    public contentType: any = '1';
    public checkQuestion: any = '0';
    public allowScore = false;
    public contentFormat = '1';
    public topicsData: any = [];
    public settingList: any = [];
    public downloadContentAvailable = false;
    public selectedClassName = '';

    constructor(public formBuilder: FormBuilder, public datePipe: DatePipe, public auth: AuthService, public creatorService: CreatorService,
                public classService: ClassService, public router: Router, public toastr: ToastrService) {
        this.model = {isRange: false, singleDate: {jsDate: new Date()}};
        this.contentAssignedForm = this.auth.getSessionData('assignedForm');
        this.assignForm = this.formBuilder.group({
            class: [''],
            radio: ['1'],
            downloadcontent: [''],
            releaseScore: ['0'],
            startDate: [''],
            endDate: [''],
            startTime: [''],
            endTime: [''],
            specificstudent: [''],
            typeSelection: [this.contentAssignedForm == 'classRoom' ? '1' : 'n/a'],
            contentFolder: [null],
            classSelect: [[]],
            teacherSelect: [null],
            topicSelect: [null],
            workspace: false,
            showTimer: false,
            feedback: false,
            dateRanges: this.formBuilder.array([])
        });
        this.settingList = JSON.parse(this.auth.getSessionData('settingList')) ?? [];
        console.log(this.settingList, 'settingList');
        this.showStudentList = false;
    }

    ngOnInit(): void {
        // Debug: Log contentDetails to see what's being passed
        console.log('confirm-content-assign ngOnInit - contentDetails:', this.contentDetails);
        console.log('confirm-content-assign ngOnInit - multiContentId:', this.multiContentId);
        
        // If contentDetails is empty but we have multiContentId, try to use that
        if ((!this.contentDetails || Object.keys(this.contentDetails).length === 0) && this.multiContentId.length > 0) {
            // multiContentId might already have content_id, so we can use it
            console.log('Using multiContentId as contentDetails source');
        }
        
        if (this.contentAssignedForm == 'class') {
            this.assignType = '1';
            this.showClassRelatedField = true;
            this.showContentFolderRelatedField = false;
            this.liststudent([this.classData[0].class_id]);
            this.topicsList([this.classData[0].class_id]);
            this.addClassDate();
            this.assignForm.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
            this.assignForm.controls.classSelect.patchValue(this.classData[0].class_name ? [this.classData[0].class_id] : []);
            this.patchValue();
        } else if (this.contentAssignedForm == 'content-Folder') {
            this.assignType = '2';
            this.contentFolderList();
            this.showContentFolderRelatedField = true;
            this.showClassRelatedField = false;
        } else {
            this.classData = [];
            this.classList();
            this.contentFolderList();
            this.assignForm.controls.releaseScore.patchValue(this.isEssay == '1' ? '1' : '0');
            const stObject = {hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00')};
            this.assignForm.controls.startTime.patchValue(stObject);
            const etObject = {hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00')};
            this.assignForm.controls.endTime.patchValue(etObject);
            if (this.contentAssignedForm == 'classRoom') {
                setTimeout(() => {
                    this.typeSelection();
                }, 0);
            }
        }
        this.teacherList();
        if (this.multiContentId.length == 0) {
            // Safely access contentDetails properties
            if (this.contentDetails) {
                this.contentType = this.contentDetails.content_type;
                this.releaseGrade = this.contentDetails.allow_autograde;
                this.checkQuestion = this.contentDetails.without_question;
                this.contentFormat = this.contentDetails.content_format;
                this.downloadContentAvailable = true;
                this.allowScore = this.releaseGrade == '1' && this.contentType != '1';
            } else {
                // Try to get from session if contentDetails is not available
                const editResources = this.auth.getSessionData('editresources');
                if (editResources) {
                    try {
                        const editData = JSON.parse(editResources);
                        this.contentType = editData?.content_type;
                        this.releaseGrade = editData?.allow_autograde;
                        this.checkQuestion = editData?.without_question;
                        this.contentFormat = editData?.content_format;
                        this.downloadContentAvailable = true;
                        this.allowScore = this.releaseGrade == '1' && this.contentType != '1';
                    } catch (e) {
                        console.error('Error parsing editresources in ngOnInit:', e);
                    }
                }
            }
        } else {
            this.downloadContentAvailable = this.multiContentId.some(code => code.download == '1');
            this.allowScore = this.settingList[2]?.value == 1 ?? true;
        }
    }

    get dateRanges(): FormArray {
        return this.assignForm.get('dateRanges') as FormArray;
    }

    addDatePicker(classData = {class_id: '', class_name: '', start_date: '', end_date: ''}) {

        const stObject = { hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00') };
        const etObject = { hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00') };
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

    removeSelectedMultiContent(data, index) {
        this.multiContentId.splice(index, 1);
    }

    addClassDate(classData = {class_id: '', class_name: '', start_date: '', end_date: ''}) {
        this.dateRanges.push(this.addDatePicker(classData));
    }

    removeDatePicker(index: number) {
        this.dateRanges.removeAt(index);
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

    onDateChanged1(event: any): void {
        this.myDpOptions.disableSince = event.date;
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
                this.topicsData = successData.ResponseObject;
            }}, (error) => {
                console.log(error, 'error_topicList');
        });
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
            this.showContentFolderRelatedField = false;
            this.showClassRelatedField = true;
            this.assignType = '1';
        } else if (selectedValue == 2) {
            this.assignForm.controls.radio.patchValue('1');
            this.clearFormArray();
            this.showContentFolderRelatedField = true;
            this.showClassRelatedField = false;
            this.assignType = '2';
            this.startdate = '';
            this.endDate = '';
            this.assignForm.controls.classSelect.patchValue([]);
            this.assignForm.controls.notes.patchValue('');
            const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
            const dropped = dr1.split('-');
            const droppedObject: IMyDateModel = {
                isRange: false,
                singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
                dateRange: null
            };
            this.assignForm.controls.startDate.patchValue(droppedObject);
        }
        this.assignForm.controls.workspace.patchValue(false);
        this.assignForm.controls.feedback.patchValue(false);
        this.allowScore = this.multiContentId.length == 0 ? this.releaseGrade == '1' && this.contentType != '1' :
            this.settingList[2]?.value == 1 ?? true;
    }

    clearFormArray() {
        this.dateRanges.clear();
    }

    applyToAll(data) {
        console.log(data, 'data');
        this.assignForm.get('dateRanges').value.forEach((control, index) => {
            const formControlName = this.assignForm['controls'].dateRanges['controls'][index]['controls'];
            if (index != 0) {
                console.log('function');
                formControlName.startDate.patchValue(data.value.startDate);
                formControlName.endDate.patchValue(data.value.endDate);
                formControlName.startTime.patchValue(data.value.startTime);
                formControlName.endTime.patchValue(data.value.endTime);
            }
        });
    }

    updateClassName() {
        this.selectedClassName = '';
        const classID = this.assignForm.controls.classSelect.value;
        this.classData.forEach((items) => {
            if (classID.some((data => data == items.class_id))) {
                this.selectedClassName = this.selectedClassName == '' ? items.class_name :
                    this.selectedClassName + ', ' + items.class_name;
            }
        });
    }

    selectStudent() {
        const classID = this.assignForm.controls.classSelect.value;
        console.log(classID, 'classID');
        const selectedClass = [];
        this.classListData.forEach((items) => {
            if (classID.some((data => data == items.class_id))) {
                selectedClass.push(items);
            }
        });
        if (classID.length != 0) {
            this.topicsList(classID);
        } else {
            this.assignForm.controls.batch.patchValue(null);
        }
        console.log(selectedClass, 'selectedClass');
        selectedClass.forEach((item) => {
            const classIds = this.assignForm.get('dateRanges').value.map(control => control.class_id);
            if (!classIds.includes(item.class_id)) {
                this.addClassDate(item);
                this.assignForm.controls.specificstudent.patchValue([]);
                // this.classbatchid = selectedClass[0].batch_id;
            }
        });

        this.assignForm.get('dateRanges').value.forEach((control, index) => {
            const classId = control.class_id;
            const existsInEvent = selectedClass.some(item => item.class_id === classId);
            const formControlName = this.assignForm['controls'].dateRanges['controls'][index]['controls'];
            if (!existsInEvent) {
                this.removeDatePicker(index);
            }
            selectedClass.forEach((items) => {
                if (items.class_id == classId) {
                    if (items.start_date != '0000-00-00') {
                        const sd = items.end_date.split('-');
                        const sdObject: IMyDateModel = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                            dateRange: null
                        };
                        const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                        const dropped = dr1.split('-');
                        const droppedObject: IMyDateModel = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
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
                            singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                            dateRange: null
                        };
                        formControlName.startDate.patchValue(droppedObject);
                    }
                    if (items.end_date != '0000-00-00') {
                        const sd = items.end_date.split('-');
                        const sdObject: IMyDateModel = {
                            isRange: false,
                            singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
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
            this.liststudent(classIds);
        }
    }

    // selectStudent(event) {
    //     console.log(event, 'get ev');
    //     if (event != undefined) {
    //         this.classData = [event];
    //         this.assignForm.controls.specificstudent.patchValue([]);
    //         // this.classbatchid = event.batch_id;
    //         if (event.start_date != '0000-00-00') {
    //             const sd = event.end_date.split('-');
    //             const sdObject: IMyDateModel = {
    //                 isRange: false,
    //                 singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
    //                 dateRange: null
    //             };
    //             const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
    //             const dropped = dr1.split('-');
    //             const droppedObject: IMyDateModel = {
    //                 isRange: false,
    //                 singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
    //                 dateRange: null
    //             };
    //             this.assignForm.controls.startDate.patchValue(droppedObject);
    //             this.myDpOptions2 = {};
    //             this.myDpOptions2 = {
    //                 dateRange: false,
    //                 dateFormat: dateOptions.pickerFormat,
    //                 firstDayOfWeek: 'su',
    //                 disableUntil: {
    //                     year: this.myDpOptions.disableUntil.year,
    //                     month: this.myDpOptions.disableUntil.month,
    //                     day: this.myDpOptions.disableUntil.day
    //                 }
    //             };
    //
    //             this.startdate = event.start_date;
    //         } else {
    //             const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
    //             const dropped = dr1.split('-');
    //             const droppedObject: IMyDateModel = {
    //                 isRange: false,
    //                 singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
    //                 dateRange: null
    //             };
    //             this.assignForm.controls.startDate.patchValue(droppedObject);
    //         }
    //         if (event.end_date != '0000-00-00') {
    //             const sd = event.end_date.split('-');
    //             const sdObject: IMyDateModel = {
    //                 isRange: false,
    //                 singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
    //                 dateRange: null
    //             };
    //             // this.linkform.controls.endDate.patchValue(sdObject);
    //             this.myDpOptions1 = {};
    //             this.myDpOptions1 = {
    //                 dateRange: false,
    //                 dateFormat: dateOptions.pickerFormat,
    //                 firstDayOfWeek: 'su',
    //                 disableUntil: {
    //                     year: this.myDpOptions.disableUntil.year,
    //                     month: this.myDpOptions.disableUntil.month,
    //                     day: this.myDpOptions.disableUntil.day
    //                 }
    //             };
    //             this.endDate = event.end_date;
    //         } else {
    //             this.assignForm.controls.endDate.patchValue(null);
    //         }
    //         const stObject = {hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00')};
    //         this.assignForm.controls.startTime.patchValue(stObject);
    //         const etObject = {hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00')};
    //         this.assignForm.controls.endTime.patchValue(etObject);
    //         // this.liststudent(event.class_id);
    //     } else {
    //         this.assignForm.controls.endDate.patchValue(null);
    //         this.assignForm.controls.specificstudent.patchValue([]);
    //         this.studentData = [];
    //         this.classData = [];
    //         this.startdate = '';
    //         this.endDate = '';
    //     }
    // }

    teacherFilter(event) {
        console.log(event);
        this.assignForm.controls.classSelect.patchValue([]);
        this.assignForm.controls.specificstudent.patchValue([]);
        this.studentData = [];
        this.assignForm.controls.endDate.patchValue(null);
        if (event != undefined) {
            this.classListData = this.classDataSample.filter((val) => {
                const teacher_id = val.teacher_id.split(',');
                return teacher_id.includes(event.teacher_id);
            });
        } else {
            this.classListData = this.classDataSample;
        }
        console.log(this.classListData, 'classListData');
        console.log(this.classDataSample, 'classDataSample');
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
            this.classListData = successData.ResponseObject;
            this.classDataSample = successData.ResponseObject;
        }
    }

    liststudent(classId) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: classId
        };
        this.creatorService.classList(data).subscribe((successData) => {
                this.studentListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_studentList');
            });
    }

    studentListSuccess(successData) {
        if (successData.IsSuccess) {
            this.studentData = successData.ResponseObject;
        }
    }

    teacherList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.classService.individualTeacherList(data).subscribe((successData) => {
                this.teacherListSuccess(successData);
            },
            (error) => {
                console.log(error, 'error');
            });
    }

    teacherListSuccess(successData) {
        if (successData.IsSuccess) {
            this.teacherListData = successData.ResponseObject;
        }
    }

    contentFolderList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: '2'
        };
        this.classService.batchList(data).subscribe((successData) => {
                this.contentFolderListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_batchData');
            });
    }

    contentFolderListSuccess(successData) {
        if (successData.IsSuccess) {
            this.contentFolderListData = successData.ResponseObject;
        }
    }

    dateValidation1() {
        if (this.assignForm.controls.startDate.value != null && this.assignForm.controls.endDate.value != null && this.assignForm.controls.startDate.value != '' && this.assignForm.controls.endDate.value != '') {
            const startdate = this.datePipe.transform(this.assignForm.controls.startDate.value.singleDate.jsDate, 'yyyy-MM-dd');
            const st = startdate.split('-');
            const endDate = this.datePipe.transform(this.assignForm.controls.endDate.value.singleDate.jsDate, 'yyyy-MM-dd');
            const et = endDate.split('-');
            if (st[0] == et [0]) {
                if (st[1] == et [1]) {
                    this.dateValidation = st[2] <= et [2];
                } else {
                    this.dateValidation = st[1] <= et [1];
                }
            } else {
                this.dateValidation = true;
            }
        } else {
            this.dateValidation = true;
        }
    }

    submitAssign(type) {
        // this.dateValidation1();
        const allstudent = this.assignForm.controls.radio.value;
        const typeSelection = this.assignForm.controls.typeSelection.value;
        let batchId = '';
        let classId = '';
        const assignedForm = this.auth.getSessionData('assignedForm');
        if (assignedForm == 'class') {
            if (this.auth.getSessionData('batchassign') == '1' || this.auth.getSessionData('batchassign') == '3') {
                batchId = this.classData[0].batch_id;
                classId = this.classData[0].class_id;
            } else if (this.auth.getSessionData('batchassign') == '2') {
                batchId = this.assignForm.controls.contentFolder.value;
                classId = '';
            }
        } else if (assignedForm == 'content-Folder') {
            batchId = this.assignForm.controls.contentFolder.value;
            classId = '';
        } else {
            if (typeSelection == '1') {
                batchId = this.classData.length != 0 ? this.classData[0].batch_id : '';
                classId = this.assignForm.controls.classSelect.value.length != 0 ? this.assignForm.controls.classSelect.value.length : '';
            } else {
                const batchValue = JSON.parse(this.auth.getSessionData('selectedbatchId'));
                batchId = batchValue ? (batchValue.length == 0  ? '' : batchValue) : '';
                classId = '';
            }
        }
        // Debug logging
        console.log('submitAssign - contentDetails:', this.contentDetails);
        console.log('submitAssign - multiContentId:', this.multiContentId);
        
        if (this.multiContentId.length == 0) {
            // Check if contentDetails exists and has content_id
            if (this.contentDetails && this.contentDetails.content_id) {
                this.multiContentId.push({
                    content_id: this.contentDetails.content_id
                });
            } else if (this.contentDetails && Object.keys(this.contentDetails).length > 0) {
                // contentDetails exists but might not have content_id directly
                // Check if it's nested or has a different structure
                const contentId = this.contentDetails.content_id || 
                                 this.contentDetails.id || 
                                 (this.contentDetails.Contentdetails && this.contentDetails.Contentdetails.content_id) ||
                                 (this.contentDetails.ResponseObject && this.contentDetails.ResponseObject.content_id);
                
                if (contentId) {
                    this.multiContentId.push({
                        content_id: contentId
                    });
                } else {
                    // Fall through to session data check
                }
            } else {
                // Try to get content_id from multiple session sources
                let contentId = null;
                
                // Try editresources first
                const editResources = this.auth.getSessionData('editresources');
                if (editResources) {
                    try {
                        const editData = JSON.parse(editResources);
                        if (editData && editData.content_id) {
                            contentId = editData.content_id;
                        }
                    } catch (e) {
                        console.error('Error parsing editresources:', e);
                    }
                }
                
                // Try textAssignValue if contentId not found
                if (!contentId) {
                    const textAssignValue = this.auth.getSessionData('textAssignValue');
                    if (textAssignValue) {
                        try {
                            const assignData = JSON.parse(textAssignValue);
                            if (assignData && assignData.content_id) {
                                contentId = assignData.content_id;
                            }
                        } catch (e) {
                            console.error('Error parsing textAssignValue:', e);
                        }
                    }
                }
                
                // Try editor session if contentId still not found
                if (!contentId) {
                    const editor = this.auth.getSessionData('editor');
                    if (editor) {
                        try {
                            const editorData = JSON.parse(editor);
                            if (editorData && editorData.content_id) {
                                contentId = editorData.content_id;
                            }
                        } catch (e) {
                            console.error('Error parsing editor:', e);
                        }
                    }
                }
                
                // If we found a contentId, use it
                if (contentId) {
                    this.multiContentId.push({
                        content_id: contentId
                    });
                } else {
                    console.error('content_id not found in contentDetails or any session data');
                    console.error('contentDetails:', this.contentDetails);
                    console.error('multiContentId:', this.multiContentId);
                    this.toastr.error('Content ID is missing. Please try again.');
                    return;
                }
            }
        }
        const allStudentValue = allstudent == '1' || type == '2' || typeSelection == '2' ? '1' : '0';
        const selectedStudentId = allstudent == '1' || type == '2' || typeSelection == '2' ? '' : this.assignForm.controls.specificstudent.value == '' ? [] : this.assignForm.controls.specificstudent.value
        if (classId != '' || batchId != '') {
            if ((allStudentValue == '0' && this.studentData.length != 0) || allStudentValue == '1') {
                if ((allStudentValue == '0' && selectedStudentId != '' && selectedStudentId != null) || allStudentValue == '1') {
                    if (this.dateValidation == true) {
                        let classDetails = [];
                        if (this.assignType == '1') {
                            this.multiContentId.forEach((content) => {
                                this.assignForm.get('dateRanges').value.forEach((control) => {
                                    classDetails.push({
                                        content_id: content.content_id,
                                        class_id: control.class_id,
                                        start_date: control.startDate ? this.datePipe.transform(control.startDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
                                        end_date: control.endDate ? this.datePipe.transform(control.endDate.singleDate.jsDate, 'yyyy-MM-dd') : '',
                                        start_time: control.startTime ? control.startTime : '',
                                        end_time: control.endTime ? control.endTime : '',
                                        all_student: allStudentValue,
                                        student_id: selectedStudentId,
                                        batch_id: '',
                                        auto_review: this.assignForm.controls.releaseScore.value,
                                        notes: '',
                                        download: this.assignForm.controls.downloadcontent.value ? '1' : '0',
                                        allow_feedback : this.assignForm.controls.showTimer.value ? '1' : '0',
                                        show_timer : this.assignForm.controls.feedback.value ? '1' : '0',
                                        allow_workspace : this.assignForm.controls.workspace.value ? '1' : '0',
                                        topic_id: this.assignForm.controls.classSelect.value.length <= 1 &&
                                        this.assignForm.controls.topicSelect.value ? this.assignForm.controls.topicSelect.value : ''
                                    });
                                });
                            });
                        } else {
                            // Get content_id from multiContentId if available, otherwise from contentDetails
                            const contentId = this.multiContentId.length > 0 && this.multiContentId[0].content_id 
                                ? this.multiContentId[0].content_id 
                                : (this.contentDetails && this.contentDetails.content_id ? this.contentDetails.content_id : '');
                            
                            if (!contentId) {
                                console.error('content_id is missing');
                                this.toastr.error('Content ID is missing. Please try again.');
                                return;
                            }
                            
                            classDetails = [{
                                content_id: contentId,
                                class_id: this.classData[0]?.class_id,
                                start_date: '',
                                end_date: '',
                                start_time: '',
                                end_time: '',
                                all_student: allStudentValue,
                                student_id: selectedStudentId,
                                batch_id: '',
                                auto_review: this.assignForm.controls.releaseScore.value,
                                notes: '',
                                download: this.assignForm.controls.downloadcontent.value ? '1' : '0',
                                allow_feedback : this.assignForm.controls.feedback.value ? '1' : '0',
                                show_timer : this.assignForm.controls.feedback.value ? '1' : '0',
                                allow_workspace : this.assignForm.controls.workspace.value ? '1' : '0',
                                topic_id: this.assignForm.controls.classSelect.value.length <= 1 &&
                                    this.assignForm.controls.topicSelect.value ? this.assignForm.controls.topicSelect.value : ''
                            }];
                        }
                        const data = {
                            platform: 'web',
                            role_id: this.auth.getRoleId(),
                            user_id: this.auth.getUserId(),
                            assign: this.assignType,
                            school_id: this.auth.getSessionData('school_id'),
                            classdetails: classDetails,
                            classroomDetails: [{
                                content_id: this.assignType == '1' 
                                    ? (this.multiContentId[0]?.content_id ?? '') 
                                    : [(this.contentDetails && this.contentDetails.content_id ? this.contentDetails.content_id : '')],
                                batch_id: batchId,
                                start_date: '',
                                end_date: '',
                                start_time: '',
                                end_time: '',
                            }],
                            editor_type: ''
                        };
                        this.creatorService.addAssignResourse(data).subscribe((successData) => {
                                this.submitSuccess(successData);
                            },
                            (error) => {
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
            // this.submitData = successData.ResponseObject;
            this.toastr.success('Class Resource Updated Successfully');
            this.auth.setSessionData('contentType', '');
            console.log(this.auth.getSessionData('assignedForm'), 'ristaAssigned');
            if (this.auth.getSessionData('assignedForm') == 'class') {
                this.auth.removeSessionData('content_assign');
                this.router.navigate(['class/topicsAndCurriculum/1']);
            } else if (this.auth.getSessionData('assignedForm') == 'content-Folder') {
                this.router.navigate(['class/view-assign/2']);
            } else if (this.auth.getSessionData('assignedForm') == 'classRoom') {
                const routedFrom = this.auth.getSessionData('editContentFromClassRoom') ?? '';
                if (routedFrom == 'classRoom') {
                    this.router.navigate(['classroom/list-classroom']);
                    this.auth.removeSessionData('editContentFromClassRoom');
                } else {
                    this.closePopUp.emit('assign');
                }
            } else {
                this.router.navigate(['repository/content-home']);
            }
            this.auth.setSessionData('resourceAccess', false);
            this.auth.removeSessionData('assignedForm');
        } else {
            this.toastr.error(successData.ErrorObject ? successData.ErrorObject : successData.ResponseObject);
            this.assignForm.controls.startDate.patchValue(null);
            this.assignForm.controls.endDate.patchValue(null);
            this.startdate = '';
            this.endDate = '';
            const stObject = {hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00')};
            this.assignForm.controls.startTime.patchValue(stObject);
            const etObject = {hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00')};
            this.assignForm.controls.endTime.patchValue(etObject);
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
        this.closePopUp.emit();
    }

    classDetailService() {
        // this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.classData[0].class_id
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
            // this.commondata.showLoader(false);
            this.auth.setSessionData('classView', true);
            this.auth.setSessionData('card-data', JSON.stringify(successData.ResponseObject));
            this.auth.setSessionData('studentlist', JSON.stringify(successData.ResponseObject[0].students));
            this.auth.setSessionData('studentlist1', JSON.stringify(successData.ResponseObject[0].students));
            if (this.auth.getSessionData('resourceAccess') == 'true') {
                if (this.auth.getSessionData('batchassign') == '1') {
                    this.router.navigate(['class/topicsAndCurriculum/1']);
                }else if (this.auth.getSessionData('batchassign') == '3'){
                    this.router.navigate(['class/topicsAndCurriculum/3']);
                }
            }
        }
    }

    close() {
        if (this.auth.getSessionData('assignedForm') == 'class') {
            this.router.navigate(['class/topicsAndCurriculum/1']);
        } else if (this.auth.getSessionData('assignedForm') == 'content-Folder') {
            this.router.navigate(['class/view-assign/2']);
        } else if (this.auth.getSessionData('assignedForm') == 'classRoom') {
            const routedFrom = this.auth.getSessionData('editContentFromClassRoom') ?? '';
            if (routedFrom == 'classRoom') {
                this.router.navigate(['classroom/list-classroom']);
                this.auth.removeSessionData('editContentFromClassRoom');
            } else {
                this.closePopUp.emit();
            }
        } else {
            this.router.navigate(['repository/content-home']);
        }
        this.auth.setSessionData('resourceAccess', false);
        this.auth.removeSessionData('assignedForm');
        this.closePopUp.emit();
    }

    patchValue() {
        console.log(this.classData, 'classData')
        this.assignForm.controls.class.patchValue(this.classData[0].class_name);
        this.assignForm.get('dateRanges').value.forEach((control, index) => {
            const formControlName = this.assignForm['controls'].dateRanges['controls'][index]['controls'];
            formControlName.class_name.patchValue(this.classData[0].class_name ? this.classData[0].class_name : '');
            formControlName.class_id.patchValue(this.classData[0].class_id ? this.classData[0].class_id : '');
            if (this.classData[0].start_date != '0000-00-00') {
                const sd = this.classData[0].start_date.split('-');
                const sdObject: IMyDateModel = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
                    dateRange: null
                };
                const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                const dropped = dr1.split('-');
                const droppedObject: IMyDateModel = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
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
                formControlName.class_startDate.patchValue(this.classData[0].start_date);
            } else {
                const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
                const dropped = dr1.split('-');
                const droppedObject: IMyDateModel = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2])) },
                    dateRange: null
                };
                formControlName.startDate.patchValue(droppedObject);
            }
            if (this.classData[0].end_date != '0000-00-00') {
                const sd = this.classData[0].end_date.split('-');
                const sdObject: IMyDateModel = {
                    isRange: false,
                    singleDate: { jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2])) },
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
                formControlName.class_endDate.patchValue(this.classData[0].end_date);
            } else {
                formControlName.endDate.patchValue(null);
            }
        });

        // if (this.classData[0].start_date != '0000-00-00') {
        //     const sd = this.classData[0].start_date.split('-');
        //     const sdObject: IMyDateModel = {
        //         isRange: false,
        //         singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
        //         dateRange: null
        //     };
        //     const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
        //     const dropped = dr1.split('-');
        //     const droppedObject: IMyDateModel = {
        //         isRange: false,
        //         singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
        //         dateRange: null
        //     };
        //     this.assignForm.controls.startDate.patchValue(droppedObject);
        //     this.myDpOptions1 = {};
        //     this.myDpOptions1 = {
        //         dateRange: false,
        //         dateFormat: dateOptions.pickerFormat,
        //         firstDayOfWeek: 'su',
        //         disableUntil: {
        //             year: parseInt(sd[0]),
        //             month: parseInt(sd[1]),
        //             day: parseInt(sd[2]) - 1
        //         },
        //     };
        //     this.startdate = this.classData[0].start_date;
        // } else {
        //     const dr1 = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
        //     const dropped = dr1.split('-');
        //     const droppedObject: IMyDateModel = {
        //         isRange: false,
        //         singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
        //         dateRange: null
        //     };
        //     this.assignForm.controls.startDate.patchValue(droppedObject);
        //     // this.linkform.controls.startDate.patchValue(null);
        // }
        // if (this.classData[0].end_date != '0000-00-00') {
        //     const sd = this.classData[0].end_date.split('-');
        //     const sdObject: IMyDateModel = {
        //         isRange: false,
        //         singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
        //         dateRange: null
        //     };
        //     // this.linkform.controls.endDate.patchValue(sdObject);
        //     this.myDpOptions1 = {};
        //     this.myDpOptions1 = {
        //         dateRange: false,
        //         dateFormat: dateOptions.pickerFormat,
        //         firstDayOfWeek: 'su',
        //         disableUntil: {
        //             year: this.myDpOptions.disableUntil.year,
        //             month: this.myDpOptions.disableUntil.month,
        //             day: this.myDpOptions.disableUntil.day
        //         },
        //     };
        //     this.endDate = this.classData[0].end_date;
        // } else {
        //     this.assignForm.controls.endDate.patchValue(null);
        // }
        const stObject = {hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00')};
        this.assignForm.controls.startTime.patchValue(stObject);
        const etObject = {hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00')};
        this.assignForm.controls.endTime.patchValue(etObject);
    }
}
