import {Component, ElementRef, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/shared/service/auth.service';
import {DatePipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Subject} from 'rxjs';
import {urls} from 'src/app/shared/utils/urls';
import {EnvironmentService} from 'src/app/environment.service';
import {DomSanitizer} from '@angular/platform-browser';
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';
import {ValidationService} from 'src/app/shared/service/validation.service';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {dateOptions} from 'src/app/shared/data/config';

@Component({
    selector: 'app-course-schedule-add',
    templateUrl: './course-schedule-add.component.html',
    styleUrls: ['./course-schedule-add.component.scss']
})
export class CourseScheduleAddComponent implements OnInit {
    myDpOptions: IAngularMyDpOptions = {
        dateRange: false,
        firstDayOfWeek: 'su',
        disableUntil: {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() - 1},
        dateFormat: dateOptions.pickerFormat,
        calendarAnimation: {
            in: 4,
            out: 4
        }
    };
    myDpOptions1: IAngularMyDpOptions = {
        dateRange: false,
        firstDayOfWeek: 'su',
        dateFormat: dateOptions.pickerFormat,
        disableUntil: {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() - 1},
        calendarAnimation: {
            in: 4,
            out: 4
        }
    };
    myDpOptions2: IAngularMyDpOptions = {
        dateRange: false,
        firstDayOfWeek: 'su',
        disableUntil: {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() - 1},
        dateFormat: dateOptions.pickerFormat,
        calendarAnimation: {
            in: 4,
            out: 4
        }
    };
    myDpOptions3: IAngularMyDpOptions = {
        dateRange: false,
        firstDayOfWeek: 'su',
        dateFormat: dateOptions.pickerFormat,
        disableUntil: {year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() - 1},
        calendarAnimation: {
            in: 4,
            out: 4
        }
    };

    courseScheduleDetails: FormGroup;
    slotform: FormGroup;
    public type = 'add';
    public courseEditDetails: any;
    public courseListData = [];
    public teacherListData = [];
    public recordBase64Url: any;
    public days = [
        {id: 1, day: 'Monday', status: 0, show: true},
        {id: 2, day: 'Tuesday', status: 0, show: true},
        {id: 3, day: 'Wednesday', status: 0, show: true},
        {id: 4, day: 'Thursday', status: 0, show: true},
        {id: 5, day: 'Friday', status: 0, show: true},
        {id: 6, day: 'Saturday', status: 0, show: true},
        {id: 7, day: 'Sunday', status: 0, show: true}
    ];
    public fromTime = {hour: 0, minute: 0, seconds: 0};
    public toTime = {hour: 23, minute: 59, seconds: 0};
    public timeErr = false;
    private modalRef: NgbModalRef;
    public meridian = true;
    public spinner = false;
    public startTime: any;
    public endTime: any;
    public scheduleTimeData = [];
    public scheduleTimeData1 = [];
    public oldScheduleTimeData = [];
    public closeResult: string;
    public daytype: any;
    public mondayTimings = [];
    public tuesdayTimings = [];
    public wednesDayTimingsday = [];
    public thursdayTimingsday = [];
    public fridayTimingsday = [];
    public saturdayTimingsday = [];
    public sundayTimingsday = [];
    public teacherNameList = [];
    public edquillTeacherId = [];
    @ViewChild('myInput') myInputVariable: ElementRef<any>;
    @ViewChild('addSlot') addSlot: TemplateRef<any>;
    @ViewChild('classCheck') classCheck: TemplateRef<any>;

    constructor(public auth: AuthService, public fb: FormBuilder, public datepipe: DatePipe, public route: ActivatedRoute, public validatorService: ValidationService,
                public router: Router, public toastr: ToastrService, public env: EnvironmentService, public sanitizer: DomSanitizer, public modalService: NgbModal) {
        this.declareFormGroup();
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.slotform = this.fb.group({
            teacher_id: [[], Validators.required],
        });
        this.getCourseList();
        this.getTeacherList();

    }

    refresh: Subject<any> = new Subject();

    ngOnInit() {
        if (this.type == 'edit') {
            this.patchcourseScheduleDetails();
        }
    }

    declareFormGroup() {
        this.courseScheduleDetails = this.fb.group({
            course_id: [null],
            schedule_title: ['', Validators.required],
            start_date: [''],
            end_date: [''],
            registration_start_date: ['', Validators.required],
            registration_end_date: ['', Validators.required],
            course_type: ['', Validators.required],
            amount: ['', Validators.required],
            discount: ['', Validators.required],
            actual_amount: ['', Validators.required],
            slot_available: ['', Validators.required],
            payment_type: ['', Validators.required],
            payment_recurring: '',
            status: ['1', Validators.required],
        });
    }

    close() {
        this.modalRef.close();
    }

    numberValidation(event) {
        this.validatorService.numberValidate(event);
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
                console.log(this.courseListData, 'courseListData');
            },
            (error) => {
                console.error(error, ' error');
            }
        );
    }

    getTeacherList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.teacherList).subscribe(
            (successData) => {
                this.teacherListSuccess(successData);
            },
            (error) => {
                console.error(error, ' error');
            }
        );
    }

    teacherListSuccess(successData) {
        console.log(successData, 'successData');
        this.teacherListData = successData.IsSuccess ? successData.ResponseObject : [];
        console.log(this.teacherListData, 'teacherListData');
    }

    calculateAmount() {
        const amount = this.courseScheduleDetails.controls.amount.value - this.courseScheduleDetails.controls.discount.value;
        this.courseScheduleDetails.controls.actual_amount.patchValue(amount);
    }

    patchcourseScheduleDetails() {
        this.courseEditDetails = JSON.parse(this.auth.getSessionData('editclass'));
        console.log(this.courseEditDetails, 'editCourseScheduleDetails');
        this.courseScheduleDetails.controls.course_id.patchValue(this.courseEditDetails[0].course_id ?
            this.courseEditDetails[0].course_id != '0' ? this.courseEditDetails[0].course_id : null : null);
        this.courseScheduleDetails.controls.schedule_title.patchValue(this.courseEditDetails[0].class_name);
        this.myDpOptions2 = {};
        this.myDpOptions2 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat
        };
        if (this.courseEditDetails[0].start_date != '0000-00-00' && this.courseEditDetails[0].start_date) {
            const csd = this.courseEditDetails[0].start_date.split('-');
            const csdObject: IMyDateModel = {
                isRange: false,
                singleDate: {jsDate: new Date(parseInt(csd[0]), parseInt(String(csd[1] - 1)), parseInt(csd[2]))},
                dateRange: null
            };
            this.myDpOptions3 = {};
            this.myDpOptions3 = {
                dateRange: false,
                firstDayOfWeek: 'su',
                dateFormat: dateOptions.pickerFormat,
                disableUntil: {
                    year: parseInt(csd[0]),
                    month: parseInt(csd[1]),
                    day: parseInt(csd[2]) - 1
                },
                calendarAnimation: {
                    in: 4,
                    out: 4
                }
            };
            this.courseScheduleDetails.controls.start_date.patchValue(csdObject);
        } else {
            this.courseScheduleDetails.controls.start_date.patchValue(null);
        }
        this.myDpOptions2 = {};
        this.myDpOptions2 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat,
            calendarAnimation: {
                in: 4,
                out: 4
            }
        };
        if (this.courseEditDetails[0].end_date != '0000-00-00' && this.courseEditDetails[0].end_date) {
            const ced = this.courseEditDetails[0].end_date.split('-');
            const cedObject: IMyDateModel = {
                isRange: false,
                singleDate: {jsDate: new Date(parseInt(ced[0]), parseInt(String(ced[1] - 1)), parseInt(ced[2]))},
                dateRange: null
            };
            this.courseScheduleDetails.controls.end_date.patchValue(cedObject);
        } else {
            this.courseScheduleDetails.controls.end_date.patchValue(null);
        }
        this.myDpOptions = {};
        this.myDpOptions = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat
        };
        if (this.courseEditDetails[0].registration_start_date != '0000-00-00' && this.courseEditDetails[0].registration_start_date) {
            const rsd = this.courseEditDetails[0].registration_start_date.split('-');
            const rsdObject: IMyDateModel = {
                isRange: false,
                singleDate: {jsDate: new Date(parseInt(rsd[0]), parseInt(String(rsd[1] - 1)), parseInt(rsd[2]))},
                dateRange: null
            };
            this.myDpOptions1 = {};
            this.myDpOptions1 = {
                dateRange: false,
                firstDayOfWeek: 'su',
                dateFormat: dateOptions.pickerFormat,
                disableUntil: {
                    year: parseInt(rsd[0]),
                    month: parseInt(rsd[1]),
                    day: parseInt(rsd[2]) - 1
                },
                calendarAnimation: {
                    in: 4,
                    out: 4
                }
            };
            this.courseScheduleDetails.controls.registration_start_date.patchValue(rsdObject);
        } else {
            this.courseScheduleDetails.controls.registration_start_date.patchValue(null);
        }
        if (this.courseEditDetails[0].registration_end_date != '0000-00-00' && this.courseEditDetails[0].registration_end_date) {
            const red = this.courseEditDetails[0].registration_end_date.split('-');
            const redObject: IMyDateModel = {
                isRange: false,
                singleDate: {jsDate: new Date(parseInt(red[0]), parseInt(String(red[1] - 1)), parseInt(red[2]))},
                dateRange: null
            };
            this.courseScheduleDetails.controls.registration_end_date.patchValue(redObject);
        } else {
            this.courseScheduleDetails.controls.registration_end_date.patchValue(null);
        }
        this.courseScheduleDetails.controls.course_type.patchValue(this.courseEditDetails[0].class_type ?? '');
        this.courseScheduleDetails.controls.amount.patchValue(this.courseEditDetails[0].cost ?? '');
        this.courseScheduleDetails.controls.discount.patchValue(this.courseEditDetails[0].discount_amount ?? '');
        this.courseScheduleDetails.controls.actual_amount.patchValue(this.courseEditDetails[0].actual_cost ?? '');
        this.courseScheduleDetails.controls.slot_available.patchValue(this.courseEditDetails[0].total_slots ?? '');
        this.courseScheduleDetails.controls.status.patchValue(this.courseEditDetails[0].status);
        this.courseScheduleDetails.controls.payment_type.patchValue(this.courseEditDetails[0].payment_type ?? '');
        if (this.courseScheduleDetails.controls.payment_type.value == 'R') {
            this.setFormValidation('payment_recurring');
        }
        this.courseScheduleDetails.controls.payment_recurring.patchValue(this.courseEditDetails[0].payment_sub_type ?? '');
        this.scheduleTimeData = this.courseEditDetails[0].availabilityDate;
        this.oldScheduleTimeData = this.courseEditDetails[0].availabilityDate;
        console.log(this.courseEditDetails[0].availabilityDate, 'this.courseEditDetails[0].sessions');
        this.getScheduleDayDetails();
        console.log(this.scheduleTimeData);
    }

    onDateChanged(event: IMyDateModel, endDateFormcontrol): void {

        const dateObject = this.validatorService.validateEndDate(event, endDateFormcontrol, this.courseScheduleDetails);
        console.log(dateObject, 'dateObjecte');
        if (endDateFormcontrol == 'registration_end_date') {
            this.myDpOptions1 = {};
            this.myDpOptions1 = dateObject;
        } else if (endDateFormcontrol == 'end_date') {
            this.myDpOptions3 = {};
            this.myDpOptions3 = dateObject;
        }
    }

    checkSelectedValue() {
        if (this.courseScheduleDetails.controls.payment_type.value == 'F') {
            this.removeFormValidation('payment_recurring');
        } else {
            this.setFormValidation('payment_recurring');
        }
    }

    setFormValidation(formControlName) {
        this.courseScheduleDetails.controls[formControlName].setValidators([Validators.required]);
        this.courseScheduleDetails.controls[formControlName].updateValueAndValidity();
    }

    removeFormValidation(formControlName) {
        this.courseScheduleDetails.controls[formControlName].clearValidators();
        this.courseScheduleDetails.controls[formControlName].setValidators(null);
        this.courseScheduleDetails.controls[formControlName].updateValueAndValidity();
    }

    addSlotDetails(type) {
        this.days.forEach((item) => {
            item.show = true;
            item.status = 0;
        });
        this.days[type - 1].show = false;
        this.scheduleTimeData = [];
        this.slotform.controls.teacher_id.patchValue([]);
        this.fromTime = {hour: 0, minute: 0, seconds: 0};
        this.toTime = {hour: 23, minute: 59, seconds: 0};
        this.modalRef = this.modalService.open(this.addSlot, {size: 'md', backdrop: 'static', centered: true});
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        this.daytype = type;
    }

    selectDate(id) {
        const timeValid = this.checkTime();
        if (!timeValid) {
            this.validatingTime(this.fromTime, this.toTime);
            console.log(this.days, 'this.days');
            for (let i = 0; i < this.days.length; i++) {
                if (this.days[i].id == id) {
                    if (this.days[i].status == 0) {
                        this.edquillTeacherId = [];
                        this.teacherListData.filter((data1) => {
                            this.slotform.controls.teacher_id.value.filter((data2) => {
                                if (data1.teacher_id == data2) {
                                    this.edquillTeacherId.push(data1.teacher_id);
                                }
                            });
                        });
                        this.scheduleTimeData.push(
                            {
                                slotday: this.days[i].id,
                                slotstarttime: this.startTime,
                                slotendtime: this.endTime,
                                teacher_name: this.slotform.controls.teacher_id.value,
                                teacher_id: this.edquillTeacherId
                            });
                        this.days[i].status = 1;
                    } else {
                        this.scheduleTimeData.forEach((item) => {
                            console.log(item, 'schedus slotday')
                            if (item.slotday == this.days[i].id) {
                                const index = this.scheduleTimeData.indexOf(item);
                                console.log(index, 'index');
                                this.scheduleTimeData.splice(index, 1);
                            }
                        });
                        this.days[i].status = 0;
                    }
                }
            }
            console.log(this.scheduleTimeData, 'schedule')
        }
    }

    teacherSelection(data) {
        this.teacherNameList = [];
        data.filter((data1) => {
            this.slotform.controls.teacher_id.value.filter((data2) => {
                if (data1.teacher_id == data2) {
                    this.teacherNameList.push(data1.teacher_name);
                }
            });
        });
    }

    checkTime() {
        if (this.fromTime == undefined || this.toTime == undefined) {
            this.timeErr = true;
        } else {
            const fromTime: any = this.fromTime.hour * 60;
            const fullFromTime = fromTime + this.fromTime.minute;
            const toTime: any = this.toTime.hour * 60;
            const fulltoTime = toTime + this.toTime.minute;
            this.timeErr = fulltoTime <= fullFromTime;
        }
        return this.timeErr;
    }

    submitSlot() {
        this.validatingTime(this.fromTime, this.toTime);
        /// checking time difference between two times
        const difference = this.getTimeDiference(this.fromTime, this.toTime);
        if (difference) {
            if (this.slotform.controls.teacher_id.value.length != '0') {
                this.edquillTeacherId = [];
                this.teacherListData.filter((data1) => {
                    this.slotform.controls.teacher_id.value.filter((data2) => {
                        if (data1.teacher_id == data2) {
                            this.edquillTeacherId.push(data1.teacher_id);
                        }
                    });
                });
                const firstSelectedDate = [{
                    slotday: this.daytype,
                    slotstarttime: this.startTime,
                    slotendtime: this.endTime,
                    teacher_name: this.slotform.controls.teacher_id.value,
                    teacher_id: this.edquillTeacherId
                }];
                const data21 = {
                    previous_availabilityDate: this.oldScheduleTimeData,
                    selected_availabilityDate: [...firstSelectedDate, ...this.scheduleTimeData]
                };
                this.auth.postService(data21, urls.availabilityTimeCheck).subscribe((successData) => {
                        this.timeListSuccess(successData);
                    },
                    (error) => {
                        console.log(error);
                    });
            } else {
                this.toastr.error('Please select the teacher for this slot');
            }
        } else {
            this.toastr.error('End-Time Should be greater than Start-Time', 'Failed');
        }
    }

    timeListSuccess(successData) {
        if (successData.IsSuccess) {
            this.scheduleTimeData.push({
                slotday: this.daytype,
                slotstarttime: this.startTime,
                slotendtime: this.endTime,
                teacher_name: this.slotform.controls.teacher_id.value,
                teacher_id: this.edquillTeacherId
            });
            this.getScheduleDayDetails();
            this.oldScheduleTimeData = this.scheduleTimeData1;
            this.toastr.success(successData.ResponseObject);
            this.close();
        } else {
            this.toastr.error(successData.ResponseObject);
            this.scheduleTimeData = [];
            this.days.forEach((items) => {
                items.status = 0;
            });
        }
    }

    getScheduleDayDetails() {
        this.scheduleTimeData.forEach((item, index) => {
            if (item.slotday == 1) {
                item.teacher_name = this.teacherNameList.length != 0 ? this.teacherNameList : item?.teacher_name;
                this.mondayTimings.push(item);
            } else if (item.slotday == 2) {
                item.teacher_name = this.teacherNameList.length != 0 ? this.teacherNameList : item?.teacher_name;
                this.tuesdayTimings.push(item);
            } else if (item.slotday == 3) {
                item.teacher_name = this.teacherNameList.length != 0 ? this.teacherNameList : item?.teacher_name;
                this.wednesDayTimingsday.push(item);
            } else if (item.slotday == 4) {
                item.teacher_name = this.teacherNameList.length != 0 ? this.teacherNameList : item?.teacher_name;
                this.thursdayTimingsday.push(item);
            } else if (item.slotday == 5) {
                item.teacher_name = this.teacherNameList.length != 0 ? this.teacherNameList : item?.teacher_name;
                this.fridayTimingsday.push(item);
            } else if (item.slotday == 6) {
                item.teacher_name = this.teacherNameList.length != 0 ? this.teacherNameList : item?.teacher_name;
                this.saturdayTimingsday.push(item);
            } else if (item.slotday == 7) {
                item.teacher_name = this.teacherNameList.length != 0 ? this.teacherNameList : item?.teacher_name;
                this.sundayTimingsday.push(item);
            }
            this.allSchduleData();
        });
        console.log(this.scheduleTimeData, 'All');
    }

    validatingTime(fromTime, endTIme) {
        const setTime = fromTime;
        const hr = setTime.hour < '10' ? '0' + setTime.hour : setTime.hour.toString();
        const mns = setTime.minute < '10' ? '0' + setTime.minute : setTime.minute.toString();
        let hours = hr[0] + hr[1];
        const min = mns[0] + mns[1];

        if (parseInt(hours) < 12) {
            if (hours == 0) {
                hours = 12;
            }
            this.startTime = hours + ':' + min + ' AM';
        } else if (parseInt(hours) > 12) {
            hours = hours - 12;
            hours = (hours < 10) ? '0' + hours : hours;
            this.startTime = hours + ':' + min + ' PM';
        } else {
            this.startTime = hours + ':' + min + ' PM';
        }
        const time1 = endTIme;
        const hr1 = time1.hour < '10' ? '0' + time1.hour : time1.hour.toString();
        const mns1 = time1.minute < '10' ? '0' + time1.minute : time1.minute.toString();
        let hours1 = hr1[0] + hr1[1];
        const min1 = mns1[0] + mns1[1];
        if (parseInt(hours1) < 12) {
            if (hours1 == 0) {
                hours1 = 12;
            }
            this.endTime = hours1 + ':' + min1 + ' AM';
        } else if (parseInt(hours1) > 12) {
            hours1 = hours1 - 12;
            hours1 = (hours1 < 10) ? '0' + hours1 : hours1;
            this.endTime = hours1 + ':' + min1 + ' PM';
        } else {
            this.endTime = hours1 + ':' + min1 + ' PM';
        }
    }

    getTimeDiference(fromtime, totime) {

        let startTime: any = parseInt(fromtime.hour) * 60;
        startTime = startTime + parseInt(fromtime.minute);
        let toTime: any = parseInt(totime.hour) * 60;
        toTime = toTime + parseInt(totime.minute);
        return (toTime - startTime) >= 1;
    }

    deleteTime(type, id, event) {
        console.log(this.scheduleTimeData, id, event);
        console.log(this.oldScheduleTimeData, ';oldSchedule')
        if (type == 'monday') {
            this.mondayTimings.splice(id, 1);
        } else if (type == 'tuesday') {
            this.tuesdayTimings.splice(id, 1);
        } else if (type == 'wednesday') {
            this.wednesDayTimingsday.splice(id, 1);
        } else if (type == 'thursday') {
            this.thursdayTimingsday.splice(id, 1);
        } else if (type == 'friday') {
            this.fridayTimingsday.splice(id, 1);
        } else if (type == 'saturday') {
            this.saturdayTimingsday.splice(id, 1);
        } else if (type == 'sunday') {
            this.sundayTimingsday.splice(id, 1);
        }
        this.oldScheduleTimeData.forEach((oldTime, index) => {
            if (oldTime.slotday == event.slotday && (oldTime.slotstarttime == event.slotstarttime) && (oldTime.slotendtime == event.slotendtime)) {
                const insturctorChecked = oldTime.teacher_name.some((element) => event.teacher_name.includes(element));
                console.log(insturctorChecked, 'insturctorChecked');
                if (insturctorChecked) {
                    this.oldScheduleTimeData.splice(index, 1);
                }
            }
        });
        console.log(this.oldScheduleTimeData, 'oldShedule')
        this.allSchduleData();
    }

    allSchduleData() {
        let arr = [];
        arr = arr.concat(this.mondayTimings);
        arr = arr.concat(this.tuesdayTimings);
        arr = arr.concat(this.wednesDayTimingsday);
        arr = arr.concat(this.thursdayTimingsday);
        arr = arr.concat(this.fridayTimingsday);
        arr = arr.concat(this.saturdayTimingsday);
        arr = arr.concat(this.sundayTimingsday);
        this.scheduleTimeData1 = arr;
        console.log(arr);

        console.log(this.scheduleTimeData1);
    }

    submitClass() {
        if (this.type == 'add' || this.type == 'edit') {
            if (this.courseScheduleDetails.valid) {
                let submit: boolean = false;
                submit = this.courseScheduleDetails.controls.start_date.value != null && this.courseScheduleDetails.controls.end_date.value != null && this.scheduleTimeData1.length != 0;
                if (!submit) {
                    this.modalRef = this.modalService.open(this.classCheck);
                } else {
                    this.addCourseScheduleDetails();
                }
            } else {
                this.validatorService.validateAllFormFields(this.courseScheduleDetails);
                this.toastr.error('Please Fill All The Mandatory Fields');
            }
        } else {
            this.addCourseScheduleDetails();
        }
    }

    addCourseScheduleDetails() {
        console.log(this.courseScheduleDetails, 'courseScheduleDetails');
        if (this.courseScheduleDetails.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                course_id: this.courseScheduleDetails.controls.course_id.value ?? '',
                name: this.courseScheduleDetails.controls.schedule_title.value,
                start_date: this.courseScheduleDetails.controls.start_date.value != '' && this.courseScheduleDetails.controls.start_date.value != '0000-00-00'
                    ? this.datepipe.transform(this.courseScheduleDetails.controls.start_date.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                end_date: this.courseScheduleDetails.controls.end_date.value != '' && this.courseScheduleDetails.controls.end_date.value != '0000-00-00' ? this.datepipe.transform(this.courseScheduleDetails.controls.end_date.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                registration_start_date: this.courseScheduleDetails.controls.registration_start_date.value != '' && this.courseScheduleDetails.controls.registration_start_date.value != '0000-00-00'
                    ? this.datepipe.transform(this.courseScheduleDetails.controls.registration_start_date.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                registration_end_date: this.courseScheduleDetails.controls.registration_end_date.value != '' && this.courseScheduleDetails.controls.registration_end_date.value != '0000-00-00'
                    ? this.datepipe.transform(this.courseScheduleDetails.controls.registration_end_date.value.singleDate.jsDate, 'yyyy-MM-dd') : '',
                payment_type: this.courseScheduleDetails.controls.payment_type.value,
                payment_sub_type: this.courseScheduleDetails.controls.payment_recurring.value,
                class_type: this.courseScheduleDetails.controls.course_type.value,
                cost: this.courseScheduleDetails.controls.amount.value,
                discount: this.courseScheduleDetails.controls.discount.value,
                total_slots: this.courseScheduleDetails.controls.slot_available.value,
                status: this.courseScheduleDetails.controls.status.value,
                availabilityDate: this.scheduleTimeData1,
                grade: [],
                batch_id: [],
                subject: [],
                tags: [],
                profile_url: '',
                profile_thumb_url: '',
                video_link: [],
                meeting_link: '',
                meeting_id: '',
                passcode: '',
                file_path: [],
                links: [],
                file_text: '',
                content_id: [],
                class_status: '0',
                telephone_number: '',
                class_id: '',
                notes: [],
            };
            console.log(data, 'data');
            if (this.type != 'add') {
                data['class_code'] = this.courseEditDetails[0].class_code;
                data['class_id'] = this.courseEditDetails[0].class_id;
            }
            console.log(data, 'scheduleData');
            const url = this.type == 'add' ? urls.addCourseSchedule : urls.updateCourseSchedule;
            this.auth.postService(data, url).subscribe(
                (successData) => {
                    this.addCourseScheduleSuccess(successData);
                },
                (error) => {
                    console.error(error, 'CourseSchedule error');
                }
            );
        } else {
            const findInvalidControls = () => {
                const invalid = [];
                const controls = this.courseScheduleDetails.controls;
                for (const name in controls) {
                    if (controls[name].invalid) {
                        invalid.push(name);
                    }
                }
                return invalid;
            };
            console.log('findInvalidControls', findInvalidControls());
            this.validatorService.validateAllFormFields(this.courseScheduleDetails);
            this.toastr.error('Please fill all Mandatory fields');
        }
    }

    addCourseScheduleSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success('Course Schedule Added Successfully');
            this.router.navigate(['/class/list-class']);
        } else {
            this.toastr.error(successData.ErrorObject);
        }
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
