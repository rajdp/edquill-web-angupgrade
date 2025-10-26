import {Component, HostListener, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormArray, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/service/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ValidationService} from '../../../shared/service/validation.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../../shared/service/book.service';
import {SchoolService} from '../../../shared/service/School.service';
import {CommonService} from '../../../shared/service/common.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {CreatorService} from '../../../shared/service/creator.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {ClassroomService} from '../../../shared/service/classroom.service';
import {TreeviewContentfolderComponent} from '../../auth/treeview-contentfolder/treeview-contentfolder.component';

@Component({
    selector: 'app-add-books',
    templateUrl: './add-Books.component.html',
    styleUrls: ['./add-Books.component.scss']
})
export class AddBooksComponent implements OnInit {
    public booksform: FormGroup;
    public branchForm: FormGroup;
    public type: any;
    public editData: any;
    public recordBase64Url: any;
    public schoolData: any;
    public book_id: any;
    public roleid: any;
    public gradeData: any;
    public subjectData: any;
    public schooldetails: any;
    public schoolid: any;
    public schoolName: any;
    public pdfpath: any;
    public pdfName: any;
    public pdfTemplate: any;
    public answerpdfpath: any;
    public answerpdfName: any;
    public webhost: any;
    public response: any;
    public videoArray: any;
    public teacherType: any;
    public uploadType = 'multi';
    public resourceType = '1';
    public getNewlinks: any = [];
    public allowDropDown: boolean;
    public showAnswerPdf: boolean;
    private modalRef: NgbModalRef;
    public bookBase64data: any;
    public showPage = false;
    public batchid = [];
    public items = [];
    public contentCreatedForm = '';
    public resourceLink: FormArray;
    public resourceData: any;
    public isDeleteLink: boolean = false;
    public isEditLink: boolean = false;
    public commonLinks = [];
    public editingIndex: any;

    @ViewChild('viewPdf') viewPdf: TemplateRef<any>;
    @ViewChild('attachments') attachment: any;
    @ViewChild('attachments1') attachment1: any;
    @ViewChild('deleteDialog') deleteDialog: any;
    @ViewChild('addBranch') addBranchTemp: TemplateRef<any>;
    @ViewChild(TreeviewContentfolderComponent, {static: false}) treeviewCompoent: TreeviewContentfolderComponent;
    @ViewChild('assignContentToClass') assignContentToClass: TemplateRef<any>;
    @ViewChild('assignTemplate') assignTemplate: TemplateRef<any>;
    @ViewChild('getLinkRedirection') getLinkRedirection: TemplateRef<any>;

    public files: any[] = [];
    selectedDeletePdf: any;
    public classDetails: any;
    public assignData: any;
    public resourceLinkList: any;
    public resourceLinkType: any;
    public linksType = ['video', 'audio', 'document', 'ppt', 'Others'];
    public linkUploadIndex = 0;
    public multiContentId = [];
    public manageClass = true;

    constructor(public route: ActivatedRoute, private formBuilder: FormBuilder, public modalService: NgbModal, public branchService: ClassroomService,
                public commondata: CommonDataService, public common: CommonService, public toastr: ToastrService,
                public auth: AuthService, public book: BookService, public brandservices: SchoolService, public newSubject: NewsubjectService,
                public router: Router, public validationService: ValidationService, public confi: ConfigurationService, public creatorService: CreatorService) {
        this.webhost = this.confi.getimgUrl();
        this.pdfpath = [];
        this.answerpdfpath = [];
        this.branchForm = this.formBuilder.group({
            batchname: ['', Validators.required]
        });

        console.log(this.resourceData, 'resourceData');
        this.roleid = this.auth.getRoleId();
        this.schooldetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        if (this.roleid == '2') {
            this.schoolid = this.auth.getSessionData('school_id');
            this.schoolName = this.auth.getSessionData('school_name');
        } else if (this.roleid == '4') {
            this.schoolid = this.schooldetails.school_id;
            this.schoolName = this.schooldetails.name;
        } else if (this.roleid == '6') {
            const schoolCorporate = JSON.parse(this.auth.getSessionData('school_details'));
            this.schoolid = schoolCorporate[0].school_id;
            this.schoolName = schoolCorporate[0].name;
        }
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.manageClass = this.auth.manageClass;
        this.booksform = this.formBuilder.group({
            publicationCode: '',
            name: this.uploadType == 'single' ? ['', Validators.required] : '',
            description: '',
            status: ['', Validators.required],
            schoolId: this.uploadType == 'single' ? ['', Validators.required] : '',
            grade: '',
            resourcesLink: '',
            subject: this.roleid == '4' ? ['', Validators.required] : '',
            bookType: this.uploadType == 'single' ? ['', Validators.required] : '',
            access: '1',
            downloadContent: '',
            resourceLink: this.formBuilder.array([this.addResLink()]),
        });
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.router.url.includes('create-Books')) {
                    this.init(params);
                }
            } else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });

        if (this.type == 'edit') {
            this.allowDropDown = true;
            this.showPage = true;
            this.newSubject.allowSchoolChange(this.allowDropDown);
            this.editData = JSON.parse(this.auth.getSessionData('editBook'));
            this.base64Books(this.editData.content_id);
            this.batchid = this.editData.batch_id;
            this.book_id = this.editData.book_id;
            this.booksform.controls.publicationCode.patchValue(this.editData.publication_code);
            this.booksform.controls.name.patchValue(this.editData.name);
            this.booksform.controls.grade.patchValue(this.editData.grade);
            this.booksform.controls.subject.patchValue(this.editData.subject);
            this.booksform.controls.description.patchValue(this.editData.description);
            if (this.editData.links != '') {
                const links = this.editData.links;
                for (let i = 0; i < links.length; i++) {
                    this.getNewlinks.push({display: links[i], value: links[i]});
                }
            }
            this.booksform.controls.resourcesLink.patchValue(this.getNewlinks);
            this.booksform.controls.status.patchValue(this.editData.status == 'Active' ? 1 : this.editData.status == 'Suspended' ? 2 :
                this.editData.status == 'Disengaged' ? 3 : 4);

            this.booksform.controls.schoolId.patchValue(this.editData.school_name);
            this.showAnswerPdf = this.editData.content_type != '1';
            this.booksform.controls.bookType.patchValue(this.editData.content_type);
            this.booksform.controls.access.patchValue(this.editData.access == 'Access to all within Org' ? 1 :
                this.editData.access == 'Access only for you' ? 2 : this.editData.access == 'Public' ? 3 : 4);

            this.booksform.controls.downloadContent.patchValue(this.editData.download == '1');
        } else {
            this.showPage = true;
            this.allowDropDown = false;
            this.showAnswerPdf = false;
            this.newSubject.allowSchoolChange(this.allowDropDown);
            this.booksform.controls.publicationCode.patchValue('');
            this.batchid = [];
            this.booksform.controls.grade.patchValue(null);
            this.booksform.controls.subject.patchValue(null);
            this.booksform.controls.name.patchValue('');
            this.booksform.controls.description.patchValue('');
            this.booksform.controls.resourcesLink.patchValue('');
            this.booksform.controls.status.patchValue('1');
            this.booksform.controls.schoolId.patchValue(this.schoolName);
            this.booksform.controls.bookType.patchValue('1');
            this.booksform.controls.access.patchValue(this.auth.getRoleId() == '6' ? '4' : '1');
        }
        this.contentCreatedForm = this.auth.getSessionData('assignedForm');
    }

    ngOnInit() {
        this.allowDropDown = false;
    }

    @HostListener('dragend', ['$event']) onDragEnd(event: any) {
        event.preventDefault();
        console.log(event, 'event drag end');
    }

    init(id) {
        this.teacherType = this.auth.getSessionData('teacher_type');
        this.schoolName = this.auth.getSessionData('school_name');
        this.schooldetails = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.schoolid = id;
        this.booksform.controls.schoolId.patchValue(this.auth.getSessionData('school_name'));
        this.booksform.controls.grade.patchValue(null);
        this.booksform.controls.subject.patchValue(null);
        this.subjectList();
        this.gradeList();
    }

    addResLink(): FormGroup {
        return this.formBuilder.group({
            link: '',
            type: null,
            name: ''
        });
    }

    addarray(): void {
        this.resourceLink = this.booksform.get('resourceLink') as FormArray;
        this.resourceLink.push(this.addResLink());
    }

    removeArray(index): void {
        this.resourceLink = this.booksform.get('resourceLink') as FormArray;
        this.resourceLink.removeAt(index);
    }

    deleteCommonLink(index) {
        this.commonLinks.splice(index, 1);
    }

    backAction() {
        this.router.navigate(['/Books/list-Books']);
    }

    openLinkPage(type, index) {
        if (type == '4') {
            this.resourceLinkType = index;
        } else {
            this.linkUploadIndex = index;
        }
        this.resourceLinkList = [];
        this.resourceLinkList = type;
        this.modalRef = this.modalService.open(this.getLinkRedirection, {size: 'xl', backdrop: 'static'});
    }

    getLinkDetails(value) {
        let valArr = value.resourceLink.filter((items) => {
            return items.link != '' && items.link != null && items.type != '' && items.type != null
        });
        if (this.resourceLinkList == '4') {
            valArr.forEach((items) => {
                items.link = items.link.includes('http') ? items.link : 'https://' + items.link;
                items.resource_type = this.resourceLinkType;
                items.name = '';
            });
            this.commonLinks = [...this.commonLinks, ...valArr];
        } else {
            valArr.forEach((items) => {
                items.link = items.link.includes('http') ? items.link : 'https://' + items.link;
            });
            this.pdfpath[this.linkUploadIndex].links = [...this.pdfpath[this.linkUploadIndex].links, ...valArr];
        }
        this.close();
    }

    editLink(id, index, detail) {
        this.isEditLink = true;
        this.booksform['controls'].resourceLink['controls'][0]['controls']['link'].patchValue(detail.link);
        this.booksform['controls'].resourceLink['controls'][0]['controls']['type'].patchValue(detail.type);
        this.editingIndex = {pdfIndex: id, linkIndex: index};
        this.modalRef = this.modalService.open(this.getLinkRedirection, {size: 'lg', backdrop: 'static'});
    }

    updateLink(value) {
        const editVal = value.resourceLink[0];
        editVal.link = editVal.link.includes('http') ? editVal.link : 'https://' + editVal.link;
        this.pdfpath[this.editingIndex.pdfIndex].links[this.editingIndex.linkIndex] = editVal;
        this.close();
    }

    validateLinks() {
        let valid = false;
        this.commonLinks.forEach((items) => {
            valid = items.name == '';
        });
        return !valid;
    }

    addbooks(valve) {
        const batchId = this.treeviewCompoent.batchid;
        if ((this.roleid == '4' && this.booksform.valid) || (this.roleid != '4' && (this.booksform.valid || this.uploadType == 'multi'))) {
            if ((this.pdfpath != undefined && this.pdfpath?.length != 0) || this.commonLinks.length != 0) {
                if (this.validateLinks()) {
                    if (this.type == 'add') {
                        if (this.roleid == '2') {
                            this.schoolid = this.auth.getSessionData('school_id');
                        } else if (this.roleid == '4') {
                            this.schoolid = this.schooldetails.school_id;
                        }
                        this.pdfpath.forEach(item => item.image = item.image + '.pdf');
                    } else if (this.type == 'edit') {
                        this.schoolid = this.editData.school_id;
                    }
                    if (this.booksform.controls.resourcesLink.value != '' && this.uploadType == 'single') {
                        this.videoArray = [];
                        const video = this.booksform.controls.resourcesLink.value;
                        for (let i = 0; i < video.length; i++) {
                            this.videoArray.push(video[i].value);
                        }
                    }

                    if (!this.showAnswerPdf) {
                        this.answerpdfpath = [];
                    }
                    this.commondata.showLoader(true);
                    const data = {
                        platform: 'web',
                        role_id: this.auth.getRoleId(),
                        user_id: this.auth.getUserId(),
                        publication_code: this.booksform.controls.publicationCode.value,
                        name: this.booksform.controls.name.value,
                        description: this.booksform.controls.description.value,
                        status: this.booksform.controls.status.value,
                        grade: this.booksform.controls.grade.value == null ? [] : this.booksform.controls.grade.value,
                        subject: this.booksform.controls.subject.value == null ? [] : this.booksform.controls.subject.value,
                        school_id: this.schoolid,
                        book_id: this.book_id ? this.book_id : '',
                        file_path: this.pdfpath,
                        answerkey_path: this.answerpdfpath,
                        content_type: this.uploadType == 'single' ? this.booksform.controls.bookType.value : undefined,
                        access: this.booksform.controls.access.value,
                        other_links: this.commonLinks,
                        download: this.booksform.controls.downloadContent.value == true ? '1' : '0',
                        type: this.uploadType == 'single' ? '1' : '2',
                        corporate_id: this.auth.getSessionData('corporate_id') == null ? '0' : this.auth.getSessionData('corporate_id'),
                        batch_id: batchId
                    };
                    if (valve == 'add') {
                        this.book.addBook(data).subscribe((successData) => {
                                this.addBookSuccess(successData);
                            },
                            (error) => {
                                this.pdfpath.map(file => file.image = file.image.split('.')[0]);
                                console.error(error, 'error');
                                this.toastr.error('Server error, Please contact admin');
                            });
                    } else if (valve == 'edit') {
                        data['content_id'] = this.editData.content_id;
                        this.book.editBook(data).subscribe((successData) => {
                                this.addBookSuccess(successData);
                            },
                            (error) => {
                                console.error(error);
                            });
                    }
                } else {
                    this.toastr.error('Please Add Content Name to Links', 'Content');
                }
            } else {
                console.log(this.commonLinks, 'commonLinks');
                this.toastr.error('Please Upload Pdf or Links to add Content', 'Content');
            }
        } else {
            this.validationService.validateAllFormFields(this.booksform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }

    addBookSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.toastr.success(successData.ResponseObject, 'Content');
            this.multiContentId = successData.content;
            this.modalRef = this.modalService.open(this.assignContentToClass, {size: 'md', backdrop: 'static'});
        } else {
            this.commondata.showLoader(false);
            this.pdfpath.map(file => file.image = file.image.split('.')[0]);
            this.toastr.error(successData.ErrorObject, 'Content');
        }
    }

    base64Books(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: id
        };
        this.creatorService.detaillist(data).subscribe((successData) => {
                this.contentDetailsSuccess(successData);
            },
            (error) => {
                console.log(error, 'error');
            });
    }

    contentDetailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.bookBase64data = successData.ResponseObject;
            this.pdfpath = this.common.convertBase64(this.bookBase64data.file_path);
            this.answerpdfpath = this.common.convertBase64(this.bookBase64data.answerkey_path);
            this.pdfName = this.pdfpath[0]?.image;
            this.answerpdfName = this.answerpdfpath[0]?.image;
        }
    }

    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolid,
            type: 'active'
        };
        this.book.gradeList(data).subscribe((successData) => {
                this.gradeListSuccess(successData);
            },
            (error) => {
                console.log(error, 'error');
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
            school_id: this.schoolid,
            type: 'active'
        };
        this.book.subjectList(data).subscribe((successData) => {
                this.subjectListSuccess(successData);
            },
            (error) => {
                console.log(error, 'error');
            });
    }

    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
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
                console.log(pic, 'picture')
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
            uploadtype: type == '1' ? 'content' : 'answerkey'
        };
        this.common.fileUpload(data).subscribe(
            (successData) => {
                this.pdfuploadSuccess(successData, type);
            },
            (error) => {
                this.toastr.error('Invalid File Format');
            }
        );
    }

    pdfuploadSuccess(successData, type) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.response = successData.ResponseObject;
            console.log(this.response, 'response11');
            if (type == '1') {
                this.pdfpath = [];
                this.pdfpath.push(this.response.imagepath[0]);
                this.pdfName = this.response.imagepath[0].image;
            } else if (type == '2') {
                this.answerpdfpath = [];
                this.answerpdfpath.push(this.response.imagepath[0]);
                this.answerpdfName = this.response.imagepath[0].image;
            } else if (type == '3') {
                this.response.imagepath.forEach((item) => {
                    item.resource_type = this.resourceType;
                    const name = item.image.split('.');
                    name.pop();
                    item.image = name.join('.');
                    item.links = [];
                });
                this.pdfpath = [...this.pdfpath, ...this.response.imagepath];
                console.log(this.pdfpath, 'pdfPath');
            }
        } else {
            this.toastr.error('Invalid File Format');
        }
    }

    deletePdf(id, type) {
        if (type == 1) {
            this.attachment.nativeElement.value = '';
            this.pdfpath.splice(id, 1);
        } else {
            this.answerpdfpath = [];
            this.attachment1.nativeElement.value = '';
        }
    }

    public numberPattern(event: any) {
        this.validationService.numberValidate1(event);
    }

    viewDetail(data) {
        this.pdfName = data.image;
        this.pdfTemplate = this.webhost + '/' + data.original_image_url;
        this.modalRef = this.modalService.open(this.viewPdf, {size: 'xl'});
    }

    close() {
        this.modalRef.close();
        this.isEditLink = false;
        const LinkArrayControl = <FormArray>this.booksform.controls['resourceLink'];
        LinkArrayControl.reset();
        for (let i = LinkArrayControl.length; i >= 1; i--) {
            LinkArrayControl.removeAt(i);
        }
    }

    uploadFile(event, type) {
        this.resourceType = type;
        this.encodePdfFileAsURL(event, '3');
    }

    onFileChange(pFileList: File[], type) {
        console.log(pFileList, 'pFileList');
        this.resourceType = type;
        this.files = [...pFileList];
        this.files.forEach((val) => {
            const split = val.image.split(',');
            val.image = split[1];
        });
        console.log(this.files, 'files');
        this.onUploadKYCFinishedpdf(this.files, 3);
    }

    deleteLink() {
        this.pdfpath[this.selectedDeletePdf.pdfIndex].links.splice(this.selectedDeletePdf.linkIndex, 1);
        this.close();
    }

    openConfirmDialog(pIndex: any, type): void {
        this.isDeleteLink = type == 'link';
        if (type != 'link') {
            this.selectedDeletePdf = {
                name: this.pdfpath[pIndex].image,
                index: pIndex
            };
        } else {
            this.selectedDeletePdf = pIndex;
        }
        this.modalRef = this.modalService.open(this.deleteDialog, {size: 's'});
    }

    deleteFromArray(index) {
        console.log(this.pdfpath);
        this.pdfpath.splice(index, 1);
        this.modalRef.close();
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
        this.modalRef?.close();
        this.auth.removeSessionData('assignedForm');
    }
}
