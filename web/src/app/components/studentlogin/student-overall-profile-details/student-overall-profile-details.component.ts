import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {CategoryService} from '../../../shared/service/category.service';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {StudentService} from '../../../shared/service/student.service';
import {ValidationService} from '../../../shared/service/validation.service';
import {IAngularMyDpOptions, IMyDateModel} from '@nodro7/angular-mydatepicker';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import {FormArray, FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {NavService} from '../../../shared/service/nav.service';
import {CreatorService} from '../../../shared/service/creator.service';
import {ClassService} from '../../../shared/service/class.service';
import {DatePipe} from '@angular/common';
import {timeZone} from '../../../shared/data/config';
import {CrmService} from '../../../shared/service/crm.service';
import {SubjectServices} from '../../../shared/service/subject.services';
import {forkJoin, Observable, of, throwError} from 'rxjs';
import {switchMap} from 'rxjs/operators';

interface SubjectSummaryView {
    subject_id?: string | number;
    subject_name: string;
    activeClasses: number;
    pastClasses: number;
    lastActivated: string | null;
    fee_display: string;
    deposit_display: string;
}

@Component({
    selector: 'app-student-overall-profile-details',
    templateUrl: './student-overall-profile-details.component.html',
    styleUrls: ['./student-overall-profile-details.component.scss']
})

export class StudentOverallProfileDetailsComponent implements OnInit, OnDestroy {

    public dobDpOtions: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: 'mm/dd/yyyy',
        firstDayOfWeek: 'su',
        disableSince: {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate() + 1
        },
    };
    public myDpOptions2: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: 'mm/dd/yyyy',
        firstDayOfWeek: 'su'
    };
    public studentId: any;
    public studentProfileDetails = [];
    public imgUrl: any;
    public gradeData = [];
    public studentTableEdit = false;
    public imagepath: any[];
    public imagepaththumb: any[];
    public selectedParent = 1;
    public parentTableEdit = false;
    public studentForm: FormGroup;
    public stateListData: any = [];
    public countryListData = [];
    public studentFullClassListData = [];
    public modalRef: NgbModalRef;
    public classData: any;
    public attendanceListData = [];
    public classList = [];
    public selectedClassId = '';
    public serviceCalled = false;
    public guardiansLoading = false;
    public guardianEdit = false;
    public guardianSaving = false;
    public guardianForm: FormGroup;
    private guardianSnapshot: any[] = [];
    public studentSaving = false;
    private studentSnapshot: any = null;
    public schoolId: string | null = null;
    @ViewChild('viewoveralldetails') viewoveralldetails: TemplateRef<any>;
    public voidClassData: any = {};
    public voidClassIndex: any = 0;
    @ViewChild('voidClass') voidClass: TemplateRef<any>;
    public currentDate: any;
    public setDate = new Date().toLocaleString('en-US', {timeZone: timeZone.location});
    public subjectSummaries: SubjectSummaryView[] = [];
    public activeClasses: any[] = [];
    public pastClasses: any[] = [];
    public feeOverview: any = null;
    public loadingFeeOverview = false;
    public feeOverviewError: string | null = null;
    private subjectFeeLoaded = false;
    private subjectFinancialMap: Map<string, {fee: number | null, deposit: number | null}> = new Map();

    constructor(public auth: AuthService, public category: CategoryService, public confi: ConfigurationService, public toastr: ToastrService, private modalService: NgbModal,
                public student: StudentService, public validation: ValidationService, public common: CommonService, public classes: ClassService, private crmService: CrmService,
                private subjectService: SubjectServices,
                private formBuilder: FormBuilder, public router: Router, public navServices: NavService,
                public creatorService: CreatorService, public datePipe: DatePipe) {
        this.studentId = JSON.parse(this.auth.getSessionData('student-profile-details')).user_id;
        this.schoolId = this.auth.getSessionData('school_id');
        this.studentDetails();
        this.studentForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email_id: ['', Validators.required],
            gender: [''],
            dob: [''],
            grade: ['', Validators.required],
            studentid: [''],
            mobile: [''],
            mobile1: [''],
            mobile2: [''],
            status: ['', Validators.required],
            registration_date: [''],
            parent1first_name: [''],
            parent2first_name: [''],
            parent1last_name: [''],
            parent2last_name: [''],
            parent1email_id1: [''],
            parent2email_id1: [''],
            parent1address1: '',
            parent2address1: '',
            parent1address2: '',
            parent2address2: '',
            parent1city: '',
            parent2city: '',
            parent1state: '',
            parent2state: '',
            parent1country: '',
            parent2country: '',

        });
        this.guardianForm = this.formBuilder.group({
            contacts: this.formBuilder.array([])
        });
        this.imgUrl = this.confi.getimgUrl();
        console.log(this.studentId, 'studentId');
        const date = new Date(this.setDate);
        this.currentDate = this.datePipe.transform(date, 'dd-MM-yyyy');
    }

    ngOnDestroy(): void {
        this.creatorService.changeViewList(false);
        this.navServices.collapseSidebar = false;
    }

    ngOnInit(): void {
        this.creatorService.changeViewList(true);
        this.navServices.collapseSidebar = true;
    }

    numberPattern(event: any) {
        this.validation.numberValidate1(event);
    }

    datePattern(event: any) {
        this.validation.dateValidation(event);
    }

    tabChange(id) {
        this.selectedParent = id;
        this.parentTableEdit = false;
    }

    backFunction() {
        this.router.navigate(['/users/user-list']);
    }

    encodeImageFileAsURL(event: any) {
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const imgDetails = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event: any) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                console.log(getUrl, 'geturl');
                const pic = imgDetails.type.split('/');
                console.log(pic, 'Type');

                if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] == 'jpg') {
                    this.onUploadKYCFinished(getUrl, imgDetails);
                } else {
                    this.toastr.error('JPEG ,PNG & JPG are the required type');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }

    onUploadKYCFinished(getUrlEdu, imageList) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: [{
                image: getUrlEdu[1],
                size: imageList.size,
                type: imageList.type,
                name: imageList.name
            }],
            uploadtype: 'student'
        };
        this.common.fileUpload(data).subscribe(
            (successData) => {
                this.uploadSuccess(successData);
                console.log(successData, 'successData');
            },
            (error) => {
                console.error(error, 'wrongFormat');
            }
        );
    }

    uploadSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.imagepath = [];
            this.imagepaththumb = [];
            this.imagepath.push(successData.ResponseObject.imagepath[0].original_image_url);
            this.imagepaththumb.push(successData.ResponseObject.imagepath[0].resized_url);
        } else {
            this.toastr.error('Invalid File Format');
        }
    }

    attendanceFilter(value) {
        console.log(value, 'class');
        this.attendanceList(value ? value.class_id : '');
    }

    gradeList() {

        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.student.getgradeList(data).subscribe((successData: any) => {
                console.log(successData, 'successData');
                if (successData.IsSuccess) {
                    this.gradeData = successData.ResponseObject;
                    // Check if studentProfileDetails exists and has data before accessing
                    if (this.studentProfileDetails && this.studentProfileDetails.length > 0) {
                        this.gradeData.forEach((items) => {
                            if (items.grade_id == this.studentProfileDetails[0].grade_id) {
                                this.studentProfileDetails[0].grade_name = items.grade_name;
                            }
                        });
                    }
                }
            },
            (error) => {
                console.error(error, 'error');
            });
    }

    studentNotifyStatus(classData, notifyType) {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.studentId,
            class_id: classData.class_id,
            notify_status: notifyType
        };
        this.student.studentNotifyStatus(payload).subscribe((successData) => {
                this.studentFullClassList();
            },
            (error) => {
                console.error(error, 'studentFullClassList');
            });
    }

    studentFullClassList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.studentId
        };
        console.log('Fetching class list with data:', data);
        this.student.getAllClassOfStudent(data).subscribe((successData) => {
                this.studentFullClassListSuccess(successData);
            },
            (error) => {
                console.error('Error fetching class list:', error);
                this.studentFullClassListData = [];
                this.classList = [];
            });
    }

    studentFullClassListSuccess(successData) {
        console.log(successData, 'studentFullClassListSuccess');
        if (successData.IsSuccess) {
            this.studentFullClassListData = successData.ResponseObject || [];
            this.classList = []; // Clear classList before populating
            this.studentFullClassListData.forEach((items) => {
                items.showText = true;
                this.classList.push(items);
            });
            this.classList.unshift({class_id: '', class_name: 'All Class'});
            console.log(this.classList, 'classList');
            console.log(this.studentFullClassListData, 'studentFullClassListData');
            this.splitClassesByStatus();
            this.loadSubjectFees();
            this.attendanceList('');
        } else {
            console.error('Failed to load class list:', successData.ErrorObject);
            this.studentFullClassListData = [];
            this.classList = [];
            this.splitClassesByStatus();
            this.computeSubjectSummaries();
        }
    }

    private splitClassesByStatus(): void {
        if (!Array.isArray(this.studentFullClassListData)) {
            this.activeClasses = [];
            this.pastClasses = [];
            return;
        }
        const active: any[] = [];
        const past: any[] = [];
        this.studentFullClassListData.forEach((classItem) => {
            if (this.isPastClass(classItem)) {
                past.push(classItem);
            } else {
                active.push(classItem);
            }
        });
        this.activeClasses = active;
        this.pastClasses = past;
    }

    private loadSubjectFees(): void {
        if (this.subjectFeeLoaded) {
            this.computeSubjectSummaries();
            return;
        }

        const payload = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };

        this.subjectService.getSubjectList(payload).subscribe({
            next: (response: any) => {
                if (response?.IsSuccess) {
                    const subjects = Array.isArray(response.ResponseObject) ? response.ResponseObject : [];
                    subjects.forEach((subject) => this.mapSubjectFinancials(subject));
                }
                this.subjectFeeLoaded = true;
                this.computeSubjectSummaries();
            },
            error: (error) => {
                console.error('Failed to load subject financial metadata', error);
                this.subjectFeeLoaded = true;
                this.computeSubjectSummaries();
            }
        });
    }

    private mapSubjectFinancials(subject: any): void {
        const entry = {
            fee: this.coerceNumber(subject?.fee_amount),
            deposit: this.coerceNumber(subject?.deposit_amount)
        };
        if (subject?.subject_id !== undefined && subject?.subject_id !== null) {
            this.subjectFinancialMap.set(`id_${subject.subject_id}`, entry);
        }
        if (subject?.subject_name) {
            this.subjectFinancialMap.set(`name_${subject.subject_name.toString().toLowerCase().trim()}`, entry);
        }
    }

    private resolveSubjectFinancials(subjectId: any, subjectName: string): {fee: number | null, deposit: number | null} | null {
        const idKey = subjectId !== undefined && subjectId !== null ? `id_${subjectId}` : null;
        const nameKey = subjectName ? `name_${subjectName.toLowerCase().trim()}` : null;
        if (idKey && this.subjectFinancialMap.has(idKey)) {
            return this.subjectFinancialMap.get(idKey) || null;
        }
        if (nameKey && this.subjectFinancialMap.has(nameKey)) {
            return this.subjectFinancialMap.get(nameKey) || null;
        }
        return null;
    }

    private computeSubjectSummaries(): void {
        if (!Array.isArray(this.studentFullClassListData)) {
            this.subjectSummaries = [];
            return;
        }

        const summaryMap = new Map<string, {
            subject_id?: string | number;
            subject_name: string;
            activeClasses: number;
            pastClasses: number;
            lastActivated: Date | null;
            fee: number | null;
            deposit: number | null;
        }>();

        this.studentFullClassListData.forEach((classItem) => {
            const subjectName = (classItem?.subject || classItem?.subject_name || 'Unassigned').toString();
            const subjectId = classItem?.subject_id ?? classItem?.category_id ?? null;
            const key = subjectId !== null && subjectId !== undefined ? `id_${subjectId}` : `name_${subjectName.toLowerCase()}`;

            if (!summaryMap.has(key)) {
                const financials = this.resolveSubjectFinancials(subjectId, subjectName);
                summaryMap.set(key, {
                    subject_id: subjectId ?? undefined,
                    subject_name: subjectName,
                    activeClasses: 0,
                    pastClasses: 0,
                    lastActivated: null,
                    fee: financials?.fee ?? null,
                    deposit: financials?.deposit ?? null
                });
            }

            const summary = summaryMap.get(key);
            if (!summary) {
                return;
            }

            if (this.isPastClass(classItem)) {
                summary.pastClasses += 1;
            } else {
                summary.activeClasses += 1;
            }

            const activationDate = this.extractActivationDate(classItem);
            if (activationDate) {
                if (!summary.lastActivated || activationDate > summary.lastActivated) {
                    summary.lastActivated = activationDate;
                }
            }
        });

        const summaries: SubjectSummaryView[] = [];
        summaryMap.forEach((value) => {
            summaries.push({
                subject_id: value.subject_id,
                subject_name: value.subject_name,
                activeClasses: value.activeClasses,
                pastClasses: value.pastClasses,
                lastActivated: value.lastActivated ? this.datePipe.transform(value.lastActivated, 'yyyy-MM-dd') : null,
                fee_display: this.formatCurrency(value.fee),
                deposit_display: this.formatCurrency(value.deposit)
            });
        });

        summaries.sort((a, b) => a.subject_name.localeCompare(b.subject_name));
        this.subjectSummaries = summaries;
    }

    private extractActivationDate(classItem: any): Date | null {
        const preferred = classItem?.joining_date && classItem.joining_date !== '0000-00-00' ? classItem.joining_date : classItem?.start_date;
        return this.parseDate(preferred);
    }

    private parseDate(value: any): Date | null {
        if (!value || value === '0000-00-00') {
            return null;
        }
        const date = new Date(value);
        if (isNaN(date.getTime())) {
            return null;
        }
        date.setHours(0, 0, 0, 0);
        return date;
    }

    private isPastClass(classData: any): boolean {
        const today = this.todayMidnight();
        const dropDate = this.parseDate(classData?.drafted_date);
        if (dropDate && dropDate.getTime() < today.getTime()) {
            return true;
        }
        const endDate = this.parseDate(classData?.end_date);
        if (endDate && endDate.getTime() < today.getTime()) {
            return true;
        }
        return false;
    }

    private todayMidnight(): Date {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return today;
    }

    private coerceNumber(value: any): number | null {
        if (value === null || value === undefined || value === '') {
            return null;
        }
        const numericValue = Number(value);
        if (isNaN(numericValue)) {
            return null;
        }
        return Number(numericValue.toFixed(2));
    }

    private formatCurrency(amount: number | null | undefined): string {
        if (amount === null || amount === undefined || isNaN(Number(amount))) {
            return '-';
        }
        return `$${Number(amount).toFixed(2)}`;
    }

    private loadFeeOverview(): void {
        if (!this.studentId) {
            this.feeOverview = null;
            this.feeOverviewError = null;
            return;
        }

        this.loadingFeeOverview = true;
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.studentId
        };

        this.crmService.studentOverview(payload).subscribe({
            next: (response: any) => {
                this.loadingFeeOverview = false;
                if (response?.IsSuccess) {
                    this.feeOverview = response.ResponseObject || null;
                    this.feeOverviewError = null;
                } else {
                    this.feeOverview = null;
                    this.feeOverviewError = response?.ErrorObject || 'Unable to load fee overview';
                }
            },
            error: (error) => {
                this.loadingFeeOverview = false;
                this.feeOverview = null;
                this.feeOverviewError = 'Unable to load fee overview';
                console.error('Failed to load fee overview', error);
            }
        });
    }

    get guardianContactsArray(): FormArray {
        return this.guardianForm.get('contacts') as FormArray;
    }

    loadGuardianContacts(showSpinner: boolean = true) {
        if (!this.schoolId) {
            return;
        }

        if (showSpinner) {
            this.guardiansLoading = true;
        }

        const payload = {
            school_id: this.schoolId,
            student_id: this.studentId
        };

        this.crmService.listGuardians(payload).subscribe({
            next: (response: any) => {
                this.guardiansLoading = false;
                const guardians = Array.isArray(response?.ResponseObject) ? response.ResponseObject : [];
                const filtered = guardians.filter((guardian) => this.guardianIsLinkedToStudent(guardian));
                this.guardianSnapshot = JSON.parse(JSON.stringify(filtered));
                this.populateGuardianForm(filtered);
            },
            error: () => {
                this.guardiansLoading = false;
                this.guardianSnapshot = [];
                this.populateGuardianForm([]);
                this.toastr.error('Unable to load guardian contacts');
            }
        });
    }

    private populateGuardianForm(guardians: any[]) {
        const contactsArray = this.guardianContactsArray;
        contactsArray.clear();

        const ordered = [...guardians].sort((a, b) => Number(this.guardianIsPrimary(b)) - Number(this.guardianIsPrimary(a)));

        for (let index = 0; index < 2; index++) {
            const source = ordered[index] ?? this.createFallbackContact(index);
            contactsArray.push(this.buildGuardianGroup(source, index === 0));
        }

        this.guardianEdit = false;
    }

    private createFallbackContact(index: number) {
        const profile = this.studentProfileDetails?.[0];
        if (!profile) {
            return {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                relationship: index === 0 ? 'Primary Contact' : 'Secondary Contact',
                communication_preference: 'both'
            };
        }

        const prefix = `parent${index + 1}`;
        const emails = profile[`${prefix}_email_ids`] || [];
        const mobiles = Array.isArray(profile.mobile) ? profile.mobile : [];

        return {
            first_name: profile[`${prefix}_firstname`] || '',
            last_name: profile[`${prefix}_lastname`] || '',
            email: emails[0] || '',
            phone: mobiles[index] || '',
            relationship: profile[`${prefix}_relationship`] || (index === 0 ? 'Primary Contact' : 'Secondary Contact'),
            communication_preference: 'both'
        };
    }

    private buildGuardianGroup(data: any, isPrimary: boolean): FormGroup {
        const firstNameValidators = isPrimary ? [Validators.required] : [];

        return this.formBuilder.group({
            id: [data?.id || null],
            first_name: [data?.first_name || '', firstNameValidators],
            last_name: [data?.last_name || ''],
            email: [data?.email || '', Validators.email],
            phone: [data?.phone || ''],
            relationship: [data?.relationship || (isPrimary ? 'Primary Contact' : 'Secondary Contact')],
            communication_preference: [data?.communication_preference || 'both'],
            is_primary: [isPrimary]
        });
    }

    private guardianIsLinkedToStudent(guardian: any): boolean {
        if (!guardian?.students) {
            return false;
        }
        return guardian.students.some((link) => Number(link.student_id) === Number(this.studentId));
    }

    private guardianIsPrimary(guardian: any): boolean {
        if (!guardian?.students) {
            return false;
        }
        return guardian.students.some((link) => Number(link.student_id) === Number(this.studentId) && Number(link.is_primary) === 1);
    }

    startGuardianEdit() {
        this.guardianEdit = true;
    }

    cancelGuardianEdit() {
        this.guardianEdit = false;
        this.populateGuardianForm(this.guardianSnapshot);
    }

    saveGuardianContacts() {
        if (!this.guardianEdit) {
            return;
        }

        if (this.guardianForm.invalid) {
            this.guardianForm.markAllAsTouched();
            this.toastr.error('Please complete required fields before saving');
            return;
        }

        const contactsArray = this.guardianContactsArray;
        const requests: Observable<any>[] = [];
        let resetApplied = false;

        contactsArray.controls.forEach((control, index) => {
            const value = control.value;
            const hasContent = this.hasGuardianContent(value);

            if (hasContent) {
                const payload = {
                    id: value.id,
                    school_id: this.auth.getSessionData('school_id'),
                    first_name: (value.first_name || '').trim(),
                    last_name: (value.last_name || '').trim(),
                    email: value.email ? value.email.trim() : null,
                    phone: value.phone ? value.phone.trim() : null,
                    relationship: value.relationship || (index === 0 ? 'Primary Contact' : 'Secondary Contact'),
                    communication_preference: value.communication_preference || 'both',
                    status: 1
                };

                const request = this.crmService.saveGuardian(payload).pipe(
                    switchMap((resp: any) => {
                        if (!resp?.IsSuccess) {
                            return throwError(() => resp?.ErrorObject || 'Failed to save guardian contact');
                        }
                        const guardian = resp.ResponseObject;
                        control.patchValue({id: guardian.id}, {emitEvent: false});
                        const assignPayload: any = {
                            guardian_id: guardian.id,
                            student_ids: [this.studentId],
                            primary_student_id: this.studentId,
                            is_primary: index === 0 ? 1 : 0
                        };
                        if (!resetApplied) {
                            assignPayload.reset_existing = true;
                            resetApplied = true;
                        }
                        return this.crmService.assignGuardian(assignPayload);
                    })
                );
                requests.push(request);
            } else if (value.id) {
                const removePayload = {
                    guardian_id: value.id,
                    student_id: this.studentId
                };
                requests.push(this.crmService.removeGuardian(removePayload));
            }
        });

        if (!requests.length) {
            this.guardianEdit = false;
            this.toastr.info('No contact changes to save');
            return;
        }

        this.guardianSaving = true;
        forkJoin(requests).subscribe({
            next: () => {
                this.guardianSaving = false;
                this.guardianEdit = false;
                this.toastr.success('Guardian contacts updated');
                this.loadGuardianContacts(false);
            },
            error: (error) => {
                this.guardianSaving = false;
                const message = typeof error === 'string' ? error : 'Unable to update guardian contacts';
                this.toastr.error(message);
            }
        });
    }

    public hasGuardianContent(value: any): boolean {
        if (!value) {
            return false;
        }
        return ['first_name', 'last_name', 'email', 'phone'].some((key) => (value[key] || '').toString().trim() !== '');
    }

    formatGuardianName(control: AbstractControl): string {
        const first = (control.get('first_name')?.value || '').trim();
        const last = (control.get('last_name')?.value || '').trim();
        return [first, last].filter(Boolean).join(' ').trim();
    }

    formatGuardianEmail(control: AbstractControl): string {
        const email = (control.get('email')?.value || '').trim();
        return email || '-';
    }

    formatGuardianPhone(control: AbstractControl): string {
        const phone = (control.get('phone')?.value || '').trim();
        return phone || '-';
    }

    formatCommunicationPreference(value: string): string {
        switch (value) {
            case 'email':
                return 'Email';
            case 'sms':
                return 'SMS';
            default:
                return 'SMS & Email';
        }
    }

    stateList(event) {
        this.stateListData = [];
        this.studentForm.controls['parent' + this.selectedParent + 'state'].patchValue(null);
        const countryVal = event;
        // console.log(this.studentform.controls.country.value, 'jhkj');
        const data = {
            platform: 'web',
            country_id: countryVal,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.student.stateList(data).subscribe((successData) => {
                this.stateListSuccess(successData);
            },
            (error) => {
                this.stateListFailure(error);
            });
    }

    stateListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.stateListData = successData.ResponseObject;

        }
    }

    stateListFailure(error) {
        console.log(error, 'error');
    }

    countryList() {

        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.student.countryList(data).subscribe((successData) => {
                this.countryListSuccess(successData);
            },
            (error) => {
                this.countryListFailure(error);
            });
    }

    countryListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.countryListData = successData.ResponseObject;

        }
    }

    countryListFailure(error) {
        console.log(error, 'error');
    }

    attendanceList(classId) {

        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            student_id: this.studentId,
            class_id: classId
        };
        this.student.studentAttendanceList(data).subscribe((successData) => {
                this.attendanceListSuccess(successData);
            },
            (error) => {
                console.error(error, 'AttendanceList');
            });
    }

    attendanceListSuccess(successData) {
        console.log(successData, 'attendanceListSuccess');
        if (successData.IsSuccess) {
            this.attendanceListData = successData.ResponseObject || [];
            console.log('Attendance records loaded:', this.attendanceListData.length);
            this.attendanceListData.forEach((student) => {
                if (student.makeup_class_id != '') {
                    const currentDate = new Date(new Date().toLocaleString('en-US', { timeZone: timeZone.location }));
                    const makeupDate = new Date(student.makeup_class_date);
                    student.allow_void_class = currentDate < makeupDate;
                    console.log(student.allow_void_class, 'student.allow_void_class');
                } else {
                    student.allow_void_class = false;
                }
            });
        } else {
            console.error('Failed to load attendance list:', successData.ErrorObject);
            this.attendanceListData = [];
        }
    }

    studentDetails() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            type: 'list',
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.studentId
        };
        this.student.getStudentList(data).subscribe((successData) => {
                this.studentProfileDetailsSuccess(successData);
            },
            (error) => {
                this.serviceCalled = false;
                console.error(error, 'error_studentDetails');
            });
    }

    studentProfileDetailsSuccess(successData) {
        console.log(successData, 'successData');
        this.studentProfileDetails = successData.ResponseObject || [];
        this.serviceCalled = true;
        this.populateStudentForm();
        this.studentSnapshot = this.studentForm.getRawValue();
        this.gradeList();
        this.studentFullClassList();
        console.log(this.studentProfileDetails, 'studentProfileDetails');
        this.loadGuardianContacts();
        this.loadFeeOverview();
    }

    closeOverAll() {
        this.modalRef.close('viewoveralldetails');
    }

    getStudentFullDetail(item) {
        this.classData = item;
        this.modalRef = this.modalService.open(this.viewoveralldetails, {size: 'xl', windowClass: 'reportcardContent'});
    }

    addMakeUpClass(event) {
        event.absent_date = {
            isRange: false,
            singleDate: {jsDate: new Date(event.date)}
        };
        event.student_name = this.studentProfileDetails[0]?.first_name + ' ' + this.studentProfileDetails[0]?.last_name;
        this.auth.setSessionData('makeUpClass_calledFrom', 'profile');
        this.auth.setSessionData('classSelected_makeUp', JSON.stringify(event));
        this.auth.setSessionData('studentSelected_makeUp', event.student_id);
        this.router.navigate(['/schedule/schedule-page']);
    }

    voidFunctionCalled(data, index) {
        console.log(data, 'attendance');
        this.voidClassData = data;
        this.voidClassIndex = index;
        this.modalRef = this.modalService.open(this.voidClass);
    }

    deleteStudentList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.voidClassData.makeup_class_id,
            student_id: this.studentId,
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
            this.attendanceList('');
        } else {
            this.toastr.error(successData.ResponseObject);
        }
    }

    startStudentEdit() {
        if (!this.studentProfileDetails?.length) {
            return;
        }
        this.studentSnapshot = this.studentForm.getRawValue();
        this.studentTableEdit = true;
        this.imagepath = [];
        this.imagepaththumb = [];
    }

    cancelStudentEdit() {
        this.studentTableEdit = false;
        if (this.studentSnapshot) {
            this.studentForm.reset(this.studentSnapshot);
        } else {
            this.populateStudentForm();
        }
        this.imagepath = [];
        this.imagepaththumb = [];
        this.studentForm.markAsPristine();
        this.studentForm.markAsUntouched();
    }

    saveStudentDetails() {
        if (!this.studentTableEdit) {
            return;
        }

        if (this.studentForm.invalid) {
            this.validation.validateAllFormFields(this.studentForm);
            this.toastr.error('Please complete required fields before saving');
            return;
        }

        const formValue = this.studentForm.value;
        const profile = this.studentProfileDetails?.[0] || {};
        const mobileArray = [
            (formValue.mobile || '').toString().trim(),
            (formValue.mobile1 || '').toString().trim(),
            (formValue.mobile2 || '').toString().trim()
        ];
        const parent1EmailsExisting = Array.isArray(profile.parent1_email_ids) ? profile.parent1_email_ids : [];
        const parent2EmailsExisting = Array.isArray(profile.parent2_email_ids) ? profile.parent2_email_ids : [];
        const parent1Emails = [
            (formValue.parent1email_id1 !== undefined && formValue.parent1email_id1 !== null && formValue.parent1email_id1 !== '') ?
                formValue.parent1email_id1.trim() :
                (parent1EmailsExisting[0] || '')
        ];
        if (parent1EmailsExisting.length > 1) {
            parent1Emails.push(parent1EmailsExisting[1]);
        }
        const parent2Emails = [
            (formValue.parent2email_id1 !== undefined && formValue.parent2email_id1 !== null && formValue.parent2email_id1 !== '') ?
                formValue.parent2email_id1.trim() :
                (parent2EmailsExisting[0] || '')
        ];
        if (parent2EmailsExisting.length > 1) {
            parent2Emails.push(parent2EmailsExisting[1]);
        }

        const addressList = this.buildAddressList(profile, formValue);

        const payload: any = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            selected_user_id: this.studentId,
            first_name: (formValue.first_name || '').trim(),
            last_name: (formValue.last_name || '').trim(),
            email_id: (formValue.email_id || '').trim(),
            gender: formValue.gender || '',
            birthday: this.formatDateForApi(formValue.dob),
            grade_id: formValue.grade || '',
            school_idno: (formValue.studentid || '').trim(),
            mobile: mobileArray,
            registration_date: this.formatDateForApi(formValue.registration_date),
            status: formValue.status || '',
            parent1_firstname: (formValue.parent1first_name || profile.parent1_firstname || '').trim(),
            parent1_lastname: (formValue.parent1last_name || profile.parent1_lastname || '').trim(),
            parent2_firstname: (formValue.parent2first_name || profile.parent2_firstname || '').trim(),
            parent2_lastname: (formValue.parent2last_name || profile.parent2_lastname || '').trim(),
            parent1_email_ids: parent1Emails,
            parent2_email_ids: parent2Emails,
            address: addressList,
            profile_url: (this.imagepath && this.imagepath.length > 0) ? this.imagepath[0] : (profile.profile_url || ''),
            profile_thumb_url: (this.imagepaththumb && this.imagepaththumb.length > 0) ? this.imagepaththumb[0] : (profile.profile_thumb_url || '')
        };

        this.studentSaving = true;
        this.student.studentEdit(payload).subscribe({
            next: (successData: any) => {
                this.studentSaving = false;
                if (successData?.IsSuccess) {
                    const message = successData.ResponseObject || 'Student details updated';
                    this.toastr.success(message);
                    this.studentTableEdit = false;
                    this.imagepath = [];
                    this.imagepaththumb = [];
                    this.studentDetails();
                } else {
                    this.toastr.error(successData?.ErrorObject || 'Unable to update student details');
                }
            },
            error: (error) => {
                console.error('Failed to update student details', error);
                this.studentSaving = false;
                this.toastr.error('Unable to update student details');
            }
        });
    }

    private populateStudentForm() {
        const profile = this.studentProfileDetails?.[0];
        this.studentForm.reset({
            first_name: '',
            last_name: '',
            email_id: '',
            gender: '',
            dob: null,
            grade: '',
            studentid: '',
            mobile: '',
            mobile1: '',
            mobile2: '',
            status: '',
            registration_date: null,
            parent1first_name: '',
            parent2first_name: '',
            parent1last_name: '',
            parent2last_name: '',
            parent1email_id1: '',
            parent2email_id1: '',
            parent1address1: '',
            parent2address1: '',
            parent1address2: '',
            parent2address2: '',
            parent1city: '',
            parent2city: '',
            parent1state: '',
            parent2state: '',
            parent1country: '',
            parent2country: ''
        });

        if (!profile) {
            this.studentForm.markAsPristine();
            this.studentForm.markAsUntouched();
            return;
        }

        const mobiles = Array.isArray(profile.mobile) ? profile.mobile : [];
        const parent1Emails = Array.isArray(profile.parent1_email_ids) ? profile.parent1_email_ids : [];
        const parent2Emails = Array.isArray(profile.parent2_email_ids) ? profile.parent2_email_ids : [];
        const addresses = Array.isArray(profile.address) ? profile.address : [];
        const address1 = addresses[0] || {};
        const address2 = addresses[1] || {};

        this.studentForm.patchValue({
            first_name: profile.first_name || '',
            last_name: profile.last_name || '',
            email_id: profile.email_id || '',
            gender: profile.gender || '',
            dob: this.buildDateModel(profile.birthday),
            grade: profile.grade_id && profile.grade_id !== '0' ? profile.grade_id : '',
            studentid: profile.school_idno || '',
            mobile: mobiles[0] || '',
            mobile1: mobiles[1] || '',
            mobile2: mobiles[2] || '',
            status: profile.status ? profile.status.toString() : '',
            registration_date: this.buildDateModel(profile.registration_date),
            parent1first_name: profile.parent1_firstname || '',
            parent1last_name: profile.parent1_lastname || '',
            parent2first_name: profile.parent2_firstname || '',
            parent2last_name: profile.parent2_lastname || '',
            parent1email_id1: parent1Emails[0] || '',
            parent2email_id1: parent2Emails[0] || '',
            parent1address1: address1.address1 || '',
            parent1address2: address1.address2 || '',
            parent1city: address1.city || '',
            parent1state: address1.state_id || '',
            parent1country: address1.country_id || '',
            parent2address1: address2.address1 || '',
            parent2address2: address2.address2 || '',
            parent2city: address2.city || '',
            parent2state: address2.state_id || '',
            parent2country: address2.country_id || ''
        });

        this.studentForm.markAsPristine();
        this.studentForm.markAsUntouched();
    }

    private buildDateModel(dateValue: string | null | undefined): IMyDateModel | null {
        if (!dateValue || dateValue === '0000-00-00') {
            return null;
        }
        const parts = dateValue.split('-');
        if (parts.length !== 3) {
            return null;
        }
        const year = Number(parts[0]);
        const month = Number(parts[1]) - 1;
        const day = Number(parts[2]);
        if (isNaN(year) || isNaN(month) || isNaN(day)) {
            return null;
        }
        const jsDate = new Date(year, month, day);
        if (isNaN(jsDate.getTime())) {
            return null;
        }
        return {
            isRange: false,
            singleDate: {jsDate},
            dateRange: null
        };
    }

    private formatDateForApi(value: any): string {
        if (!value) {
            return '';
        }
        if (value?.singleDate?.jsDate instanceof Date) {
            const formatted = this.datePipe.transform(value.singleDate.jsDate, 'yyyy-MM-dd');
            return formatted || '';
        }
        if (value instanceof Date) {
            const formatted = this.datePipe.transform(value, 'yyyy-MM-dd');
            return formatted || '';
        }
        return '';
    }

    private buildAddressList(profile: any, formValue: any): any[] {
        const addresses = Array.isArray(profile?.address) ? profile.address : [];
        const addressTypes = ['2', '3'];
        return [0, 1].map((index) => {
            const existing = addresses[index] || {};
            const isPrimary = index === 0;
            const address1Control = isPrimary ? formValue.parent1address1 : formValue.parent2address1;
            const address2Control = isPrimary ? formValue.parent1address2 : formValue.parent2address2;
            const cityControl = isPrimary ? formValue.parent1city : formValue.parent2city;
            const stateControl = isPrimary ? formValue.parent1state : formValue.parent2state;
            const countryControl = isPrimary ? formValue.parent1country : formValue.parent2country;
            return {
                address1: (address1Control !== undefined && address1Control !== null && address1Control !== '') ? address1Control : (existing.address1 || ''),
                address2: (address2Control !== undefined && address2Control !== null && address2Control !== '') ? address2Control : (existing.address2 || ''),
                city: (cityControl !== undefined && cityControl !== null && cityControl !== '') ? cityControl : (existing.city || ''),
                state: (stateControl !== undefined && stateControl !== null && stateControl !== '') ? stateControl : (existing.state_id || existing.state || ''),
                country: (countryControl !== undefined && countryControl !== null && countryControl !== '') ? countryControl : (existing.country_id || existing.country || ''),
                postal_code: existing.postal_code || '',
                address_type: existing.address_type || addressTypes[index] || '2'
            };
        });
    }

    viewClassDetails(classData) {
        console.log('Viewing class details:', classData);
        // Store class information in session
        this.auth.setSessionData('class-id', classData.class_id);
        // Set schedule_id to empty string if not available (backend will handle it)
        this.auth.setSessionData('schedule_id', classData.schedule_id || '');
        
        // Navigate to class details page
        this.router.navigate(['/studentlogin/class-detail']);
    }
}
