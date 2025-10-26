import {Component, Injectable, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CreatorService} from '../../../shared/service/creator.service';
import {AuthService} from '../../../shared/service/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {DomSanitizer} from '@angular/platform-browser';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {CommonService} from '../../../shared/service/common.service';
import {ClassService} from '../../../shared/service/class.service';
import {ValidationService} from '../../../shared/service/validation.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {TreeviewContentfolderComponent} from '../../auth/treeview-contentfolder/treeview-contentfolder.component';
import {ClassroomService} from 'src/app/shared/service/classroom.service';

@Injectable()
@Component({
    selector: 'app-text-resource',
    templateUrl: './text-resource.component.html',
    styleUrls: ['./text-resource.component.scss']
})
export class TextResourceComponent implements OnInit {
    public resourceform: FormGroup;
    public content: any;
    public type: any;
    public assignData: any;
    public editData: any;
    public draftData: any;
    public webhost: any;
    public imagepath: any;
    public recordBase64Url: any;
    public imagepaththumb: any;
    public gradeData: any;
    public subjectData: any;
    public tagArray: any;
    public username: any;
    public gradeId: any;
    public gradeSplit: any;
    public subjectSplit: any;
    public getTag: any = [];
    public resourceVal: any = '';
    public openContent: boolean;
    public showTextEditor: any;
    public resourceArray = [];
    public roleid: any;
    public allowChange: boolean;
    public contentName: any;
    public viewEdit: any;
    public batchId = [];
    public classDetails: any = [];
    public contentCreatedForm = '';
    private modalRef: NgbModalRef;

    @ViewChild('myInput') myInputVariable: ElementRef<any>;
    @ViewChild('assignContentToClass') assignContentToClass: TemplateRef<any>;
    @ViewChild('assignTemplate') assignTemplate: TemplateRef<any>;
    @ViewChild(TreeviewContentfolderComponent, {static: false}) treeviewCompoent: TreeviewContentfolderComponent;
    @ViewChild('addBranch') addBranchTemp: TemplateRef<any>;
    public manageClass = true;


    constructor(public commondata: CommonDataService, public router: Router, public route: ActivatedRoute, public creator: CreatorService,
                public auth: AuthService, private formBuilder: FormBuilder, private toastr: ToastrService, public sanitizer: DomSanitizer,
                public config: ConfigurationService, public common: CommonService, public classService: ClassService, public validationService: ValidationService,
                public newSubject: NewsubjectService, private modalService: NgbModal, public branchService: ClassroomService) {
        this.webhost = this.config.getimgUrl();
        this.username = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
        this.roleid = this.auth.getRoleId();
        this.openContent = false;
        this.showTextEditor = '1';
        this.route.params.forEach((params) => {
            this.type = params.type;
            console.log(this.type, 'typeee');
        });
        this.manageClass = this.auth.manageClass;
        this.resourceform = this.formBuilder.group({
            created: ['', Validators.required],
            resourceName: ['', Validators.required],
            grade: ['', Validators.required],
            subject: ['', Validators.required],
            description: '',
            tag: '',
            access: ['1', Validators.required]
        });
        this.appendValue();
        this.allowChange = true;
        this.newSubject.allowSchoolChange(this.allowChange);
        if (this.type == 'edit') {
            const data = JSON.parse(this.auth.getSessionData('editor'));
            this.listDetails(data);
            console.log(this.editData, 'eddeydata');
            // this.editData = JSON.parse(this.auth.getSessionData('editresources'));
        } else {
            this.batchId = [];
            this.resourceform.controls.created.patchValue(this.username);
            this.resourceform.controls.resourceName.patchValue('');
            this.resourceform.controls.grade.patchValue(null);
            this.resourceform.controls.subject.patchValue(null);
            this.resourceform.controls.description.patchValue('');
            this.resourceArray = [];
            this.resourceform.controls.access.patchValue(this.auth.getRoleId() == '6' ? '4' : '1');
            this.resourceform.controls.tag.patchValue('');
        }
        this.contentCreatedForm = this.auth.getSessionData('assignedForm');
    }

    ngOnInit(): void {
        this.commondata.showLoader(false);
        this.gradeList();
        this.subjectList();
    }

    appendValue() {
        const clearGradeSelectValue = setInterval(() => {
            const element = document.getElementById('grade-ng-select');
            if (element != null) {
                const spanTag = document.createElement('span');
                spanTag.innerText = '*';
                spanTag.style.color = '#dc3545';
                spanTag.style.marginLeft = '3px';
                element.getElementsByClassName('ng-placeholder')[0].appendChild(spanTag);
                clearInterval(clearGradeSelectValue);
            }
        }, 0);
        const clearSubjectSelectValue = setInterval(() => {
            const element = document.getElementById('subject-ng-select');
            if (element != null) {
                const spanTag = document.createElement('span');
                spanTag.innerText = '*';
                spanTag.style.color = '#dc3545';
                spanTag.style.marginLeft = '3px';
                element.getElementsByClassName('ng-placeholder')[0].appendChild(spanTag);
                clearInterval(clearSubjectSelectValue);
            }
        }, 0);
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
                console.error(error, 'error_grade');
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
                console.error(error, 'error_subject');
            });
    }

    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
    }

    listDetails(val) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: val.content_id,
            content_format: '3',
            // content_type: this.textType == 'assignment' ? '2' : '3',
            content_type: val.content_type,
            school_id: this.auth.getSessionData('school_id')
        };
        this.creator.repositoryDetail(data).subscribe((successData) => {
                this.detailsSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_contentDetail');
            });
    }

    detailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.editData = successData.ResponseObject;
            // this.detailData = successData.ResponseObject.questions;
            if (this.type == 'edit') {
                // this.editData = JSON.parse(this.auth.getSessionData('editresources'));
                console.log(this.editData, 'editData');
                this.batchId = this.editData.batch_id;
                this.contentName = this.editData.name;
                this.gradeId = this.editData.grade_id;
                this.resourceform.controls.created.patchValue(this.editData.created_by);
                this.resourceform.controls.resourceName.patchValue(this.editData.name);
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
                this.resourceform.controls.grade.patchValue(this.gradeSplit);
                this.resourceform.controls.subject.patchValue(this.subjectSplit);
                this.resourceform.controls.description.patchValue(this.editData.description);

                this.resourceArray = this.editData.links ? this.editData.links : [];

                this.resourceform.controls.access.patchValue(this.editData.access);
                this.showTextEditor = this.editData.editor_type;
                if (this.editData.file_text != '') {
                    // this.getEditorValue(this.editData.editor_type);
                    this.resourceVal = this.editData.file_text;
                }
                if (this.editData.tags != null) {
                    for (let i = 0; i < this.editData.tags.length; i++) {
                        this.getTag.push({display: this.editData.tags[i], value: this.editData.tags[i]});
                    }
                }
                this.resourceform.controls.tag.patchValue(this.getTag);

                if (this.editData.profile_url != '') {
                    this.imagepath = this.editData.profile_url;
                }
                this.imagepaththumb = this.editData.profile_thumb_url;

            }
        }
    }

    encodeImageFileAsURL(event: any) {
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const imgDetails = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event: any) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                const pic = imgDetails.type.split('/');

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
        this.recordBase64Url = getUrlEdu[1];
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: [{
                image: this.recordBase64Url,
                size: imageList.size,
                type: imageList.type,
                name: imageList.name
            }],
            uploadtype: 'teacher'
        };
        this.common.fileUpload(data).subscribe(
            (successData) => {
                this.uploadSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_uploadFile');
            }
        );
    }

    uploadSuccess(successData) {
        // this.settings.loadingSpinner = false;
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.imagepath = successData.ResponseObject.imagepath[0].original_image_url;
            this.imagepaththumb = successData.ResponseObject.imagepath[0].resized_url;
            // if (typing == 1) {
            // for (let i = 0; i < successData.ResponseObject.imagepath.length; i++) {
            //   this.imagepath.push(successData.ResponseObject.imagepath[i].original_image_url);
            //   this.imagepaththumb.push(successData.ResponseObject.imagepath[i].resized_url);
            //
            // }
        } else {
            this.toastr.error('Invalid File Format');
        }
    }

    textResoruceNext() {
        if (this.resourceform.valid) {
            const filteredResourceLink = this.resourceArray.filter((item) => item.link !== '');
            const checkForValidResourceLink = filteredResourceLink.some((item) => item.name == '');

            if (!checkForValidResourceLink) {
                this.openContent = true;
                this.viewEdit = this.treeviewCompoent.batchid;
            } else {
                this.resourceArray.forEach(item => item.error = item.name == '' && item.link != '');
                setTimeout(() => {
                    const element = document.getElementById('otherLink');
                    if (element) {
                        element.scrollIntoView({behavior: 'smooth', block: 'start'});
                    }
                }, 100);
                this.toastr.error('Name is mandatory for each additional resource links');
            }
        } else {
            this.validationService.validateAllFormFields(this.resourceform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }

    assign(value) {
        const batchId = this.viewEdit;
        let corporate: any;
        if (this.roleid == 6) {
            corporate = this.auth.getSessionData('corporate_id');
        } else {
            corporate = undefined;
        }
        if (this.content.content != '') {
            this.tagArray = [];
            const tags = this.resourceform.controls.tag.value;
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
            let content = '';
            if (this.showTextEditor == '1') {
                content = this.content.content;

            } else if (this.showTextEditor == '2') {
                content = JSON.stringify(this.content);
            }
            const filteredResourceLink = this.resourceArray.filter((item) => item.link !== '');
            const checkForValidResourceLink = filteredResourceLink.some((item) => item.name == '');

            if (!checkForValidResourceLink) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.auth.getSessionData('school_id'),
                    name: this.resourceform.controls.resourceName.value,
                    description: this.resourceform.controls.description.value,
                    grade: this.resourceform.controls.grade.value,
                    subject: this.resourceform.controls.subject.value,
                    access: this.resourceform.controls.access.value,
                    file_path: [],
                    tags: this.tagArray,
                    profile_url: this.imagepath,
                    profile_thumb_url: this.imagepaththumb,
                    content_format: '3',
                    content_type: '1',
                    status: '1',
                    answers: [],
                    file_text: content ? content : '',
                    links: filteredResourceLink,
                    annotation: [],
                    assign: '0',
                    classdetails: [],
                    editor_type: this.showTextEditor,
                    corporate_id: corporate,
                    batch_id: batchId
                };
                if (value != 'edit') {
                    this.creator.addAssignResourse(data).subscribe((successData) => {
                            this.assignSuccess(successData);
                        },
                        (error) => {
                            console.error(error, 'error_Add_assign');
                        });
                } else if (value == 'edit') {
                    data['content_id'] = this.editData.content_id;
                    this.creator.editAssignResourse(data).subscribe((successData) => {
                            this.assignSuccess(successData);
                        },
                        (error) => {
                            console.error(error, 'error_Update_assign');
                        });
                }
            } else {
                this.resourceArray.forEach(item => item.error = item.name == '' && item.link != '');
                setTimeout(() => {
                    const element = document.getElementById('otherLink');
                    if (element) {
                        element.scrollIntoView({behavior: 'smooth', block: 'start'});
                    }
                }, 100);
                this.toastr.error('Name is mandatory for each additional resource links');
            }
        } else {
            this.validationService.validateAllFormFields(this.resourceform);
            this.toastr.error('Please fill the mandatory fields');
        }
    }

    assignSuccess(successData) {
        if (successData.IsSuccess) {
            this.assignData = successData.Contentdetails;
            this.modalRef = this.modalService.open(this.assignContentToClass, {size: 'md', backdrop: 'static'});
            this.toastr.success('Content Published');
            this.auth.removeSessionData('editresources');
        } else if (!successData.IsSuccess) {
            this.toastr.error(successData.ResponseObject);
        }
    }

    draft(value) {
        const batchId = this.viewEdit;
        const corporate = this.roleid == 6 ? this.auth.getSessionData('corporate_id') : undefined;
        let content = '';
        if (this.content.content != '') {
            this.tagArray = [];
            const tags = this.resourceform.controls.tag.value;
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
            if (this.showTextEditor == '1') {
                content = this.content.content;
            } else if (this.showTextEditor == '2') {
                content = JSON.stringify(this.content);
            }
            const filteredResourceLink = this.resourceArray.filter((item) => item.link !== '');
            const checkForValidResourceLink = filteredResourceLink.some((item) => item.name == '');

            if (!checkForValidResourceLink) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.auth.getSessionData('school_id'),
                    name: this.resourceform.controls.resourceName.value,
                    description: this.resourceform.controls.description.value,
                    grade: this.resourceform.controls.grade.value,
                    subject: this.resourceform.controls.subject.value,
                    access: this.resourceform.controls.access.value,
                    file_path: [],
                    tags: this.tagArray,
                    profile_url: this.imagepath,
                    profile_thumb_url: this.imagepaththumb,
                    content_format: '3',
                    content_type: '1',
                    status: '5',
                    answers: [],
                    file_text: content ? content : '',
                    links: filteredResourceLink,
                    annotation: [],
                    assign: '0',
                    classdetails: [],
                    editor_type: this.showTextEditor,
                    corporate_id: corporate,
                    batch_id: batchId
                };
                if (value != 'edit') {
                    this.creator.addDraftResourse(data).subscribe((successData) => {
                            this.draftSuccess(successData);
                        },
                        (error) => {
                            console.error(error, 'error_Add_draft');
                        });
                } else if (value == 'edit') {
                    data['content_id'] = this.editData.content_id;
                    this.creator.editDraftResourse(data).subscribe((successData) => {
                            this.draftSuccess(successData);
                        },
                        (error) => {
                            console.error(error, 'error_Update_draft');
                        });
                }
            } else {
                this.resourceArray.forEach(item => item.error = item.name == '' && item.link != '');
                setTimeout(() => {
                    const element = document.getElementById('otherLink');
                    if (element) {
                        element.scrollIntoView({behavior: 'smooth', block: 'start'});
                    }
                }, 100);
                this.toastr.error('Name is mandatory for each additional resource links');
            }
        } else {
            this.validationService.validateAllFormFields(this.resourceform);
            this.toastr.error('Please fill the mandatory fields');
        }
    }

    draftSuccess(successData) {
        if (successData.IsSuccess) {
            this.draftData = successData.ResponseObject;
            this.router.navigate(['/repository/content-home']);
            this.toastr.success('Draft Added');
            this.auth.removeSessionData('editresources');
        } else if (!successData.IsSuccess) {
            this.toastr.error(successData.ResponseObject);
        }
    }

    deleteImg() {
        this.imagepath = [];
        this.myInputVariable.nativeElement.value = '';
    }

    getHandwriting(content) {
        this.content = content;
    }

    saveEditorVal() {
        this.resourceVal = this.content.content;
    }

    getEditorValue(editorType) {
        let content = '';
        if (this.type == 'edit') {
            if (editorType == '1' && this.editData.editor_type == '1') {
                this.content = this.editData.file_text;
            } else if (editorType == '2' && this.editData.editor_type == '1') {
                this.content = JSON.parse(this.editData.file_text);
            } else if (editorType == '3' && this.editData.editor_type == '1') {
                this.content = this.editData.file_text;

            } else if (editorType == '1' && this.editData.editor_type == '2') {
                content = JSON.parse(this.editData.file_text);
                this.content = content['text/plain'];
            } else if (editorType == '2' && this.editData.editor_type == '2') {
                content = JSON.parse(this.editData.file_text);
                this.content = JSON.parse(this.editData.file_text);
            } else if (editorType == '3' && this.editData.editor_type == '2') {
                content = JSON.parse(this.editData.file_text);
                this.content = JSON.parse(this.editData['application/vnd.myscript.jiix']);
            } else if (editorType == '1' && this.editData.editor_type == '3') {
                content = JSON.parse(this.editData.file_text);
                this.content = this.editData.file_text['application/mathml+xml'];
            } else if (editorType == '2' && this.editData.editor_type == '3') {
                content = JSON.parse(this.editData.file_text);
                this.content = JSON.parse(this.editData.file_text);
            } else if (editorType == '3' && this.editData.editor_type == '3') {
                content = JSON.parse(this.editData.file_text);
                this.content = JSON.parse(this.editData['application/vnd.myscript.jiix']);
            }
        }
    }

    assignContent() {
        this.modalRef.close();
        this.classDetails = JSON.parse(this.auth.getSessionData('card-data'));
        this.modalRef = this.modalService.open(this.assignTemplate, {size: 'xl', backdrop: 'static'});
    }

    closeAssignPopUp() {
        this.auth.removeSessionData('assignedForm');
        this.modalRef.close();
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
}
