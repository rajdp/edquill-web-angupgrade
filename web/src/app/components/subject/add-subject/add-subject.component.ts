import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/service/auth.service';
import {CategoryService} from '../../../shared/service/category.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ActivatedRoute} from '@angular/router';
import {SchoolService} from '../../../shared/service/School.service';
import {SubjectServices} from '../../../shared/service/subject.services';
import {CommonService} from '../../../shared/service/common.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';

@Component({
    selector: 'app-add-subject',
    templateUrl: './add-subject.component.html',
    styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {
    public subjectform: FormGroup;
    public type: any;
    public editData: any;
    public recordBase64Url: any;
    public schoolData: any;
    public subject_id: any;
    public roleid: any;
    public schooldetails: any;
    public allowSelect: boolean;
    public manageSubject = true;
    public schoolName: any;

    constructor(public route: ActivatedRoute, private formBuilder: FormBuilder,
                public commondata: CommonDataService, private toastr: ToastrService, public subjectservice: SubjectServices,
                public auth: AuthService, public category: CategoryService, public brandservices: SchoolService, public common: CommonService,
                public router: Router, public validationService: ValidationService, public newSubject: NewsubjectService) {
        this.roleid = this.auth.getRoleId();
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.router.url.includes('create-subject')) {
                    this.init();
                }
            } else {
                this.init();
            }
        });
        this.subjectform = this.formBuilder.group({
            name: ['', Validators.required],
            description: '',
            fee_amount: ['', Validators.pattern(/^\d+(\.\d{1,2})?$/)],
            deposit_amount: ['', Validators.pattern(/^\d+(\.\d{1,2})?$/)],
            status: ['', Validators.required],
            schoolId: '',
        });


        if (this.type == 'edit') {
            this.allowSelect = true;
            this.newSubject.allowSchoolChange(this.allowSelect);
            this.editData = JSON.parse(this.auth.getSessionData('editsubject'));
            this.subject_id = this.editData.subject_id;
            this.subjectform.controls.name.patchValue(this.editData.subject_name);
            this.subjectform.controls.description.patchValue(this.editData.description);
            this.subjectform.controls.fee_amount.patchValue(this.formatAmountForForm(this.editData.fee_amount));
            this.subjectform.controls.deposit_amount.patchValue(this.formatAmountForForm(this.editData.deposit_amount));
            const status = this.editData.status;
            this.subjectform.controls.status.patchValue(status == 'Active' ? 1 : status == 'Suspended' ? 2 : status == 'Disengaged' ? 3 : 4);
            this.subjectform.controls.schoolId.patchValue(this.editData.school_name);

        } else {
            this.allowSelect = false;
            this.newSubject.allowSchoolChange(this.allowSelect);
            this.subjectform.controls.name.patchValue('');
            this.subjectform.controls.description.patchValue('');
            this.subjectform.controls.fee_amount.patchValue('');
            this.subjectform.controls.deposit_amount.patchValue('');
            this.subjectform.controls.status.patchValue('1');
            if (this.roleid == '2') {
                this.subjectform.controls.schoolId.patchValue(this.auth.getSessionData('school_name'));
            } else if (this.roleid == '4') {
                this.subjectform.controls.schoolId.patchValue(this.schooldetails.name);
            }
        }
    }

    ngOnInit() {
    }

    init() {
        this.schoolName = this.auth.getSessionData('school_name');
        this.schooldetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.manageSubject = this.auth.manageSubject;
        this.schoolList();
    }

    backAction() {
        this.router.navigate(['/subject/list-subject']);
    }

    addsubject() {
        if (this.subjectform.valid) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                subject_name: this.subjectform.controls.name.value,
                description: this.subjectform.controls.description.value,
                fee_amount: this.sanitizeAmountInput(this.subjectform.controls.fee_amount.value),
                deposit_amount: this.sanitizeAmountInput(this.subjectform.controls.deposit_amount.value),
                status: this.subjectform.controls.status.value,
                school_id: this.auth.getSessionData('school_id'),
                subject_id: this.subject_id ? this.subject_id : '',
            };
            if (this.type == 'add') {
                this.subjectservice.subjectAdd(data).subscribe((successData) => {
                        this.addSubjectSuccess(successData);
                    },
                    (error) => {
                        console.error(error, 'error');
                    });
            } else if (this.type == 'edit') {
                this.subjectservice.subjectEdit(data).subscribe((successData) => {
                        this.addSubjectSuccess(successData);
                    },
                    (error) => {
                        console.error(error, 'error');
                    });
            }
        } else {
            this.validationService.validateAllFormFields(this.subjectform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }

    addSubjectSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success(successData.ResponseObject, 'Subject');
            this.router.navigate(['/subject/list-subject']);
        } else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, 'Subject');
        }
    }

    public numberPattern(event: any) {
        this.validationService.numberValidate1(event);
    }

    private sanitizeAmountInput(rawValue: any): string | null {
        if (rawValue === null || rawValue === undefined || rawValue === '') {
            return null;
        }
        const numericValue = Number(rawValue);
        if (isNaN(numericValue)) {
            return null;
        }
        return numericValue.toFixed(2);
    }

    private formatAmountForForm(amount: any): string {
        if (amount === null || amount === undefined || amount === '') {
            return '';
        }
        const numericValue = Number(amount);
        if (isNaN(numericValue)) {
            return '';
        }
        return numericValue.toFixed(2);
    }

    schoolList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.brandservices.getSchoolList(data).subscribe((successData) => {
                this.schoolListSuccess(successData);
            },
            (error) => {
                this.schoolListFailure(error);
            });
    }

    schoolListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.schoolData = successData.ResponseObject;
        }
    }

    schoolListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }
}
