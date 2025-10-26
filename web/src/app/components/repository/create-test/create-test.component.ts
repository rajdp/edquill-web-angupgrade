import {Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, AbstractControl} from '@angular/forms';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from 'src/app/shared/service/auth.service';
import {ClassService} from 'src/app/shared/service/class.service';
import {CreatorService} from 'src/app/shared/service/creator.service';
import {ValidationService} from 'src/app/shared/service/validation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-create-test',
    templateUrl: './create-test.component.html',
    styleUrls: ['./create-test.component.scss']
})
export class CreateTestComponent implements OnInit {
    protected contentTestType: any;
    protected testForm: FormGroup;
    protected contentArray: FormArray;
    private modalRef: NgbModalRef;
    protected username: any;
    protected gradeData = [];
    protected subjectData = [];
    protected contentListData = [];
    protected editData: any;
    public gradeSplit: any;
    public subjectSplit: any;
    public contentCreatedForm = '';
    public classDetails: any = [];
    public assignData: any;
    public duplicateStatus = false;
    public contentData: any = {};
    public showLoader = false;
    public testTypeListData = [];
    public subjectListForModule = [{id: 'Reading & Writing', name: 'Reading & Writing'}, {id: 'Math', name: 'Math'}];

    @ViewChild('assignContentToClass') assignContentToClass: TemplateRef<any>;
    @ViewChild('assignTemplate') assignTemplate: TemplateRef<any>;
    @ViewChild('viewContent') viewContent: TemplateRef<any>;

    constructor(public formBuilder: FormBuilder, public auth: AuthService, public classService: ClassService, public creatorService: CreatorService,
                public validationService: ValidationService, public toastr: ToastrService, public router: Router, public activateRoute: ActivatedRoute, public modalService: NgbModal) {
        this.activateRoute.params.forEach((params) => {
            this.contentTestType = params.type;
        });
        this.username = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
        this.testForm = this.formBuilder.group({
            created: ['', Validators.required],
            resourceName: ['', Validators.required],
            grade: ['', Validators.required],
            subject: ['', Validators.required],
            contentDuration: [0, Validators.required],
            contentType: ['3', Validators.required],
            description: '',
            test_type: [null, Validators.required],
            contentArray: this.formBuilder.array([this.createContent()])
        });
    }

    ngOnInit(): void {
        this.testTypeList();
        this.gradeList();
        this.subjectList();
        this.contentList();
        this.testForm.controls.created.patchValue(this.username);
        if (this.contentTestType == 'edit') {
            this.editData = JSON.parse(this.auth.getSessionData('editTestDetails'));
            this.testForm.controls.resourceName.patchValue(this.editData.name);
            this.testForm.controls.description.patchValue(this.editData.description);
            this.testForm.controls.contentType.patchValue(this.editData.content_type);
            if (this.editData.grade.length >= 3) {
                this.gradeSplit = [];
                const grade = this.editData.grade.split(',');
                for (let i = 0; i < grade.length; i++) {
                    this.gradeSplit.push(grade[i]);
                }
            } else {
                this.gradeSplit = [this.editData.grade];
            }
            if (this.editData.subject.length >= 3) {
                this.subjectSplit = [];
                const subject = this.editData.subject.split(',');
                for (let i = 0; i < subject.length; i++) {
                    this.subjectSplit.push(subject[i]);
                }
            } else {
                this.subjectSplit = [this.editData.subject];
            }
            this.testForm.controls.grade.patchValue(this.gradeSplit);
            this.testForm.controls.subject.patchValue(this.subjectSplit);
            this.testForm.controls.test_type.patchValue(this.editData?.test_type_id ?? null);
            this.testForm.controls.contentDuration.patchValue(this.editData.content_duration);
            if (this.editData.contents.length != 0) {
                this.contentArray = this.testForm.get('contentArray') as FormArray;
                for (let i = this.contentArray.length; this.contentArray.length > 0; i--) {
                    this.contentArray.removeAt(i);
                }
                this.editData.contents.forEach((item, index) => {
                    this.contentArray.push(this.createContent());
                    this.testForm['controls'].contentArray['controls'][index]['controls']['moduleName'].patchValue(item.module_name);
                    this.testForm['controls'].contentArray['controls'][index]['controls']['subjectName'].patchValue(item.subject);
                    this.testForm['controls'].contentArray['controls'][index]['controls']['contentName'].patchValue(item.content_id);
                    this.testForm['controls'].contentArray['controls'][index]['controls']['contentDuration'].patchValue(item.solving_time);
                    this.testForm['controls'].contentArray['controls'][index]['controls']['status'].patchValue(item.status);
                    this.testForm['controls'].contentArray['controls'][index]['controls']['content_detail_id'].patchValue(item.content_detail_id);
                    this.testForm['controls'].contentArray['controls'][index]['controls']['timeInterval'].patchValue(item.interval_time);
                });
                setTimeout(() => {
                    this.calculateDuration();
                }, 500);
            }
        }
    }

    createContent(): FormGroup {
        if (this.contentTestType == 'add') {
            return this.formBuilder.group({
                moduleName: ['', Validators.required],
                subjectName: ['', Validators.required],
                contentName: [null, Validators.required],
                name: [''],
                contentDuration: ['', Validators.required],
                timeInterval: [0, Validators.required]
            });
        } else {
            return this.formBuilder.group({
                moduleName: ['', Validators.required],
                subjectName: ['', Validators.required],
                contentName: [null, Validators.required],
                name: [''],
                contentDuration: ['', Validators.required],
                timeInterval: [0, Validators.required],
                status: '1',
                content_detail_id: ''
            });
        }
    }

    testTypeList() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
        };
        this.auth.postService(payload, 'content/testType').subscribe((successData: any) => {
            console.log(successData, 'tets_type');
            this.testTypeListData = successData.IsSuccess ? successData.ResponseObject : [];
            const index = this.testTypeListData.findIndex((value => value.test_type_id == '1'));
            this.testTypeListData.splice(index, 1);
        }, (error => console.error(error, 'error_test_type')));
    }

    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.classService.gradeList(data).subscribe((successData) => {
                this.gradeListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error');
            });
    }

    gradeListSuccess(successData) {
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
        }
    }

    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.classService.subjectList(data).subscribe((successData) => {
                this.subjectListSuccess(successData);
            },
            (error) => {
                console.log(error, 'error_Subject');
            });
    }

    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
    }

    contentList() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_format: 3
        };
        this.creatorService.contentList(data).subscribe((successData) => {
                this.contentListSuccess(successData);
            },
            (error) => {
                console.error(error);
            });
    }

    contentListSuccess(successData) {
        if (successData.IsSuccess) {
            successData.ResponseObject.forEach((item) => {
                item.content_name_qns = item.name + ' ' + item.question_count + ' (Qns)';
            });
            this.contentListData = successData.ResponseObject;
        }
    }

    public numberPattern(event: any) {
        this.validationService.numberValidate1(event);
    }

    addContent(): void {
        if (this.testForm.get('contentArray').valid) {
            if (!this.duplicateStatus) {
                this.contentArray = this.testForm.get('contentArray') as FormArray;
                this.contentArray.push(this.createContent());
            } else {
                this.toastr.error('Do not enter the same module name and content');
            }
        } else {
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
        console.log(this.duplicateStatus, 'duplicateStatus');
    }

    removeContent(i) {
        if (this.contentTestType == 'add') {
            this.contentArray.removeAt(i);
        } else {
            const data = this.testForm.get('contentArray')['controls'];
            data.forEach((item, index) => {
                if (data[index]['controls']['content_detail_id'].value != '' && index == i) {
                    this.testForm['controls'].contentArray['controls'][index]['controls']['status'].patchValue('0');
                } else if (data[index]['controls']['content_detail_id'].value == '' && index == i) {
                    this.contentArray.removeAt(i);
                }
            });
        }
    }

    calculateDuration() {
        const contentData = this.testForm.get('contentArray')['controls'];
        let value = 0;
        contentData.forEach((item, index) => {
            value += parseInt(contentData[index]['controls']['contentDuration'].value) ?
                parseInt(contentData[index]['controls']['contentDuration'].value) + parseInt(contentData[index]['controls']['timeInterval'].value) : value != 0 ? value : 0;
        });
        this.testForm.controls.contentDuration.patchValue(value ? value : 0);
    }

    checkDuplicateValue(formControlName: string, currentItem: AbstractControl): any {
        const currentValue = currentItem.get(formControlName)?.value;
        const formArray = this.testForm.get('contentArray') as FormArray;

        const isDuplicate = formArray.controls.some(item => {
            return item !== currentItem && item.get(formControlName)?.value === currentValue;
        });

        return isDuplicate;
    }

    showContentName(i) {
        const contentId = this.testForm.get('contentArray')['controls'][i]['controls']['contentName'].value;
        const getContentData = this.contentListData.find(value => value.content_id == contentId);
        return getContentData?.name ?? '';
    }

    findDuplicateValue() {
        const contentData = this.testForm.get('contentArray')['controls'];
        const contentList = [];
        contentData.forEach((item, index) => {
            contentList.push({
                content_id: contentData[index]['controls']['contentName'].value,
            });
        });
        if (contentData.length > 1)  {
            const contentIds = contentList.map(item => item.content_id);
            const uniqueContentIds = new Set(contentIds);

            this.duplicateStatus = uniqueContentIds.size < contentIds.length;

        } else {
            this.duplicateStatus = false;
        }
        console.log(this.duplicateStatus, 'duplicateStatus');
    }

    checkDuplicateFieldsInFormArray(): boolean {
        const formArray = this.testForm.get('contentArray') as FormArray;
        const values = formArray.value;

        const contentNames = values.map((v: any) => v.contentName);
        // const moduleNames = values.map((v: any) => v.moduleName);

        const hasDuplicateContentName = contentNames.some((val, i) => contentNames.indexOf(val) !== i);
        // const hasDuplicateModuleName = moduleNames.some((val, i) => moduleNames.indexOf(val) !== i);

        // return hasDuplicateContentName || hasDuplicateModuleName;
        return hasDuplicateContentName;
    }

    saveAndExit() {
        if (this.testForm.valid) {
            if (!this.checkDuplicateFieldsInFormArray()) {
                const contentData = this.testForm.get('contentArray')['controls'];
                if (contentData.length == 4 && this.testForm.get('test_type').value == '2' || this.testForm.get('test_type').value == '3') {
                    const contentList = [];
                    const contentListLength = contentData.length - 1;
                    console.log(contentListLength);
                    const lastContentTimeValue = contentData[contentListLength]['controls']['timeInterval'].value;
                    console.log(lastContentTimeValue, 'lastContentTimeValue');
                    this.testForm.controls.contentDuration.patchValue(this.testForm.controls.contentDuration.value - parseInt(lastContentTimeValue));
                    contentData.forEach((item, index) => {
                        if (this.contentTestType == 'add') {
                            contentList.push({
                                content_id: contentData[index]['controls']['contentName'].value,
                                subject: contentData[index]['controls']['subjectName'].value,
                                module_name: contentData[index]['controls']['moduleName'].value,
                                solving_time: contentData[index]['controls']['contentDuration'].value,
                                interval_time: contentListLength == index ? 0 : contentData[index]['controls']['timeInterval'].value
                            });
                        } else {
                            contentList.push({
                                content_id: contentData[index]['controls']['contentName'].value,
                                subject: contentData[index]['controls']['subjectName'].value,
                                module_name: contentData[index]['controls']['moduleName'].value,
                                solving_time: contentData[index]['controls']['contentDuration'].value,
                                status: contentData[index]['controls']['status'].value,
                                content_detail_id: contentData[index]['controls']['content_detail_id'].value,
                                interval_time: contentListLength == index ? 0 : contentData[index]['controls']['timeInterval'].value
                            });
                        }
                    });

                    console.log( contentList[contentListLength], ' contentList[contentListLength]');
                    const data = {
                        platform: 'web',
                        role_id: this.auth.getRoleId(),
                        user_id: this.auth.getUserId(),
                        school_id: this.auth.getSessionData('school_id'),
                        name: this.testForm.controls.resourceName.value,
                        description: this.testForm.controls.description.value,
                        grade: this.testForm.controls.grade.value,
                        subject: this.testForm.controls.subject.value,
                        content_type: this.testForm.controls.contentType.value,
                        status: '1',
                        content_duration: this.testForm.controls.contentDuration.value,
                        contents: contentList,
                        test_type_id: this.testForm.controls.test_type.value ?? ''
                    };
                    let url = '';
                    if (this.contentTestType == 'add') {
                        url = 'content/addTest';
                    } else {
                        url = 'content/editTest';
                        data['content_id'] = this.editData.content_id;
                    }
                    this.auth.postService(data, url).subscribe((successData: any) => {
                        this.creatorSuccess(successData);
                    }, (error) => console.error(error));
                } else {
                    this.toastr.error('For SAT type test you have to add four content!');
                }
            } else {
                this.toastr.error('Duplicate Content and Module Name combination found!');
            }
        } else {
            this.validationService.validateAllFormFields(this.testForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }

    creatorSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.assignData = successData.Contentdetails;
            this.modalRef = this.modalService.open(this.assignContentToClass, {size: 'md', backdrop: 'static'});
        } else {
            this.toastr.error(successData.ErrorObject);
        }
    }

    dontAssign() {
        this.modalRef.close();
        if (this.auth.getSessionData('assignedForm') == 'class') {
            this.auth.removeSessionData('content_assign');
            this.router.navigate(['class/topicsAndCurriculum/1']);
        } else if (this.auth.getSessionData('assignedForm') == 'content-Folder') {
            this.router.navigate(['class/view-assign/2']);
        } else if (this.auth.getSessionData('assignedForm') == 'classRoom') {
            this.router.navigate(['classroom/list-classroom']);
        } else {
            this.router.navigate(['repository/content-home']);
        }
        this.auth.setSessionData('resourceAccess', false);
        this.auth.removeSessionData('assignedForm');
    }

    assignContent() {
        this.modalRef.close();
        this.classDetails = JSON.parse(this.auth.getSessionData('card-data'));
        this.modalRef = this.modalService.open(this.assignTemplate, {size: 'xl', backdrop: 'static'});
    }

    encodeImageFileAsURL(event) {
        console.log(event, 'event');
    }

    testTypeChanged(event) {
        console.log(event, 'event');
        if (event) {
            if (event.test_type_id == '3') {
                this.subjectListForModule.push({id: 'Grammar', name: 'Grammar'});
            } else {
                const findIndex = this.subjectListForModule.findIndex(value => value.id == 'Grammar');
                console.log(findIndex, 'findIndex');
                findIndex != -1 ? this.subjectListForModule.splice(findIndex, 1) : '';
                this.testForm.get('contentArray')['controls'].forEach((items) => {
                    items.value.subjectName = items.value.subjectName == 'Grammar' ? '' : items.value.subjectName;
                });
            }
        }
    }

    previewContent(event) {
        this.showLoader = true;
        const contentValue = this.contentListData.find(value => value.content_id == event);
        console.log(contentValue, 'contentValue');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: contentValue.content_id,
            content_type: contentValue.content_type,
            content_format: contentValue.content_format,
            school_id: this.auth.getSessionData('school_id'),
        };
        this.auth.setSessionData('editor', JSON.stringify(data));
        this.creatorService.repositoryDetail(data).subscribe((successData) => {
                this.detailsSuccess(successData, data);
            },
            (error) => {
                console.error(error, 'error_lisDetails');
            });
    }

    detailsSuccess(successData, value) {
        this.contentData = successData;
        if (successData.IsSuccess) {
            this.auth.setSessionData('editresources', JSON.stringify(successData.ResponseObject));
            this.auth.setSessionData('assignedForm', 'classRoom');
            this.auth.setSessionData('editContentFromClassRoom', 'classRoom');
            if (value.content_type == '1') {
                this.auth.setSessionData('preview_page', value.content_format != '3' ? 'create_resources' : 'text_resources');
            } else if (value.content_type == '2') {
                this.auth.setSessionData('preview_page', value.content_format != '3' ? 'create_assignments' : 'text_assignments');
            } else if (value.content_type == '3') {
                this.auth.setSessionData('preview_page', value.content_format != '3' ? 'create_assessments' : 'text_assessments');
            }
            this.auth.setSessionData('preview', 'content-folder');
            this.modalRef = this.modalService.open(this.viewContent, {size: 'xl', backdrop: 'static', windowClass: 'classRoom_popup'});
            this.showLoader = false;
        }
    }

    closeAssignPopUp() {
        this.auth.removeSessionData('assignedForm');
        this.modalRef.close();
    }

    closePopUp() {
        this.modalRef.close();
    }
}
