import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {AuthService} from '../../../shared/service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {dateOptions, timeZone} from '../../../shared/data/config';
import {IAngularMyDpOptions, IMyDateModel} from '@nodro7/angular-mydatepicker';
import {ValidationService} from '../../../shared/service/validation.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-global-announcement-add',
  templateUrl: './global-announcement-add.component.html',
  styleUrls: ['./global-announcement-add.component.scss']
})
export class GlobalAnnouncementAddComponent implements OnInit, OnDestroy{

    public newSubject = inject(NewsubjectService);
    public auth = inject(AuthService);
    public router = inject(Router);
    public toastr = inject(ToastrService);
    public validation = inject(ValidationService);
    public announcementForm: FormGroup;
    public type = 'add';
    public datePipe = inject(DatePipe);
    public editData: any;
    public setDate = new Date().toLocaleString('en-US', {timeZone: timeZone.location});
    myDpOptions: IAngularMyDpOptions = {
        dateRange: false,
        firstDayOfWeek: 'su',
        dateFormat: dateOptions.pickerFormat,
        disableUntil: {
            year: new Date(this.setDate).getFullYear(),
            month: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getMonth() + 1 : new Date(this.setDate).getMonth(),
            day: new Date(this.setDate).getDate() != 1 ? new Date(this.setDate).getDate() - 1 : new Date(this.setDate).getMonth() === (1 || 3 || 5 || 7 || 8 || 10 || 12) ? 31 : new Date(this.setDate).getMonth() === 2 ? 28 : 30,
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

    constructor(private formBuilder: FormBuilder, public route: ActivatedRoute) {
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.newSubject.allowSchoolChange(true);

        this.announcementForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            fromDate: ['', Validators.required],
            toDate: ['', Validators.required],
            status: ['1', Validators.required],
            schoolId: '',
        });
    }

    ngOnInit() {
        if (this.type == 'edit') {
            this.editData = JSON.parse(this.auth.getSessionData('edit_global_announcement'));
            this.announcementForm.controls.title.patchValue(this.editData.title);
            this.announcementForm.controls.description.patchValue(this.editData.description);
            this.announcementForm.controls.status.patchValue(this.editData.status);
            if (this.editData.from_date != '0000-00-00') {
                const sd = this.editData.from_date.split('-');
                const sdObject: IMyDateModel = {
                    isRange: false,
                    singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
                    dateRange: null
                };
                this.announcementForm.controls.fromDate.patchValue(sdObject);
                console.log(this.announcementForm.controls.fromDate.value, 'fromDate');
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
            } else {
                this.announcementForm.controls.fromDate.patchValue(null);
            }
            if (this.editData.to_date != '0000-00-00') {
                const ed = this.editData.to_date.split('-');
                const edObject: IMyDateModel = {
                    isRange: false,
                    singleDate: {jsDate: new Date(parseInt(ed[0]), parseInt(ed[1]) - 1, parseInt(ed[2]))},
                    dateRange: null
                };
                this.announcementForm.controls.toDate.patchValue(edObject);
            } else {
                this.announcementForm.controls.toDate.patchValue(null);
            }
        }
    }

    ngOnDestroy(): void {
        this.newSubject.allowSchoolChange(false);
    }

    onDateChanged(event: IMyDateModel): void {
        this.myDpOptions1 = {};
        this.myDpOptions1 = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat,
            disableUntil: {
                year: event.singleDate.date.year,
                month: event.singleDate.date.month,
                day: event.singleDate.date.day - 1
            },
        };
    }

    addOrEditSubjectService() {
        if (this.announcementForm.valid) {
            const payload = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                title: this.announcementForm.controls.title.value,
                description: this.announcementForm.controls.description.value,
                from_date: !this.announcementForm.controls.fromDate.value ? '' : this.datePipe.transform(this.announcementForm.controls.fromDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                to_date: !this.announcementForm.controls.toDate.value ? '' : this.datePipe.transform(this.announcementForm.controls.toDate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                status: this.announcementForm.controls.status.value
            };

            this.type == 'edit' ? payload['id'] = this.editData.id : '';
            console.log(payload, 'payload');
            this.auth.postService(payload, this.type == 'add' ? 'school/addAnnouncement' : 'school/editAnnouncement').subscribe((successData: any) =>{
                console.log(successData, 'successData');
                if (successData.IsSuccess) {
                    this.router.navigate(['global-announcement/list']);
                    this.toastr.success(successData.ResponseObject);
                } else {
                    this.toastr.error(successData.ErrorObject);
                }
            }, (error) => console.error(error, 'error'));
        } else {
            this.toastr.error('Please Fill all the mandatory Fields');
            this.validation.validateAllFormFields(this.announcementForm);
        }
    }
}
