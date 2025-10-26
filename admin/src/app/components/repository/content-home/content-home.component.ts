import {
    Component,
    ElementRef,
    OnInit,
    TemplateRef,
    ViewChild,
    AfterViewInit,
    OnDestroy,
    ChangeDetectorRef
} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {NavService} from '../../../shared/service/nav.service';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {DatePipe} from '@angular/common';
import {ValidationService} from '../../../shared/service/validation.service';
import {ClassService} from '../../../shared/service/class.service';
import {SchoolselectionService} from '../../../shared/service/schoolselection.service';
import {AdmincreatorService} from '../../../shared/service/admincreator.service';
import {CommonService} from '../../../shared/service/common.service';

@Component({
    selector: 'app-create-assessment',
    templateUrl: './content-home.component.html',
    styleUrls: ['./content-home.component.scss']
})

export class ContentHomeComponent implements OnInit, OnDestroy {
    @ViewChild(HeaderComponent) header: HeaderComponent;
    public linkform: UntypedFormGroup;
    public repeatlink: UntypedFormArray;
    public assessmentUpload: boolean;
    private modalRef: NgbModalRef;
    public closeResult: string;
    public gradeData: any;
    public subjectData: any;
    public schoolId: any;
    public tagData: any;
    public contentdata: any;
    public detailData: any;
    public tagid: any = [];
    public gradeid: any = [];
    public subjectid: any = [];
    public pdfpath: any;
    public pdfpaththumb: any;
    public webhost: any;
    public details: any;
    public libraryselection: any;
    public filterselection: any;
    public response: any;
    public pdflinks: any = [];
    public typeid: any;
    public contentDetaildata: any;
    public sortfilter: any;
    public contentUserid: any;
    public sortdetails: boolean;
    public profileurl: any;
    public createdby: any;
    public gradename: any;
    public tags: any;
    public type: any;
    public noofquestions: any;
    public totalpoints: any;
    public description: any;
    public subjectname: any;
    public highlight: any;
    public submitType: any;
    public cclist: any;
    public gradeName: any;
    public subjectName: any;
    public tagName: any;
    public deleteMessage: any;
    public contentUserId: any;
    public open: boolean;
    public pageNo: any = 1;
    public totalRecords: any;
    public threshhold: any;
    public choosedData: any;
    public className: any;
    public contentName: any;
    public spinner: boolean;
    public classData: any;
    public classDetails: any;
    public contentid: any;
    public randomSize: any;
    public contentdatabackup: any;
    public contentType: any;
    public typeName: any = '';
    public allowDropDown: boolean;
    public edit: any;
    throttle = 300;
    scrollDistance = 1;
    scrollUpDistance = 2;
    direction = '';
    modalOpen = false;
    public assignType: any;
    public previewType: any;
    public allowDeletecontent: boolean = false;
    public selector: string = '.scrollPanel';
    public tagname: any;
    public schoolid: any;
    public batchData: any;
    public assign: string;
    public end: any;
    public start: any;
    public searchKey: any = '';
    public roleid: any;
    public dateValidation: boolean;
    public selectAuthored: any = '';
    public selectDraft: any = '';
    public deleteValue: any;
    public searchTime: any;
    public exactSearch: boolean = false;
    public model: { singleDate: { jsDate: Date }; isRange: boolean };
    @ViewChild('detailsTemplate') addDetails: TemplateRef<any>;
    @ViewChild('select') addAsset: TemplateRef<any>;
    @ViewChild('resources') addResources: TemplateRef<any>;
    @ViewChild('assignment') addAssignment: TemplateRef<any>;
    @ViewChild('assessment') addAssessment: TemplateRef<any>;
    @ViewChild('linkArray') addLink: TemplateRef<any>;
    @ViewChild('assign') addAssign: TemplateRef<any>;
    @ViewChild('batchassign') adddirectAssign: TemplateRef<any>;
    @ViewChild('delete') deleteList: TemplateRef<any>;

    constructor(public auth: AuthService, public config: ConfigurationService, public route: ActivatedRoute, private formBuilder: UntypedFormBuilder, public classService: ClassService,
                public sanitizer: DomSanitizer, private modalService: NgbModal, public router: Router, public creatorService: AdmincreatorService,
                public toastr: ToastrService, public common: CommonService, public commondata: CommonDataService, public navServices: NavService, public datePipe: DatePipe,
                public validationService: ValidationService , public cdr: ChangeDetectorRef, public select: SchoolselectionService) {
        this.route.params.forEach((params) => {
            this.type = params.type;
        });
        this.assessmentUpload = false;
        this.model = {isRange: false, singleDate: {jsDate: new Date()}};
        this.randomSize = true;
        this.pageNo = 1;
        this.sortdetails = false;
        this.webhost = this.config.getimgUrl();
        this.typeName = '';
        this.roleid = this.auth.getSessionData('rista-roleid');
        this.select.selectSchool.subscribe((res: any) => {
            if (res != 0){
                if (this.router.url.includes('content-home')) {
                    this.contentdata = [];
                    this.pageNo = 1;
                    this.init(res);
                }
            } else {
                this.init(res);
            }
        });
        this.typeid = 'list';
        this.cclist = [];
    }

    ngOnInit(): void {
        this.allowDropDown = false;
        this.select.allowChangeSchool(this.allowDropDown);
        this.totalRecords = 0;
        this.threshhold = 0;
        this.sortfilter = '0';
        this.contentUserId = '0';
        this.typeid = 'list';
        this.open = true;
        this.select.changeSideViewList(this.open);
        this.navServices.collapseSidebar = true;
        this.contentdata = [];
        this.contentdatabackup = [];
        this.commondata.showLoader(false);
        if (this.sortfilter == '0' || this.sortfilter == '-1'){
            this.contentUserid = '0';
        }else if (this.sortfilter != '0' && this.sortfilter != '-1' ){
            this.contentUserid = this.sortfilter;
        }
    }

    ngOnDestroy(): void {
        this.open = false;
        this.select.changeSideViewList(this.open);
        this.navServices.collapseSidebar = false;
        // this.auth.setSessionData('rista-contentType', '');
    }
    init(id){
        this.schoolId = this.auth.getSessionData('rista-school_id');
        this.selectAuthored = '';
        this.selectDraft = '';
        this.clearall();
        this.subjectList();
        this.gradeList();
        this.tagList();
        this.contentCreators();
    }
    onScrollDown(ev) {
        this.direction = 'down';
        this.pageNo ++;
        this.sortlist();
    }

    onUp(ev) {
        this.direction = 'up';
    }


    toggleModal() {
        this.modalOpen = !this.modalOpen;
    }

    //serach filter sort

    updateFilter(event) {
        this.searchKey = event;
        clearTimeout(this.searchTime);
        this.searchTime = setTimeout(() => {
          this.sortlist();
        }, 1200);
        this.pageNo = 1;
    }

    sortExact() {
        this.pageNo = 1;
        if (this.searchKey != '') {
            this.sortlist();
        }
    }
    addlink(): UntypedFormGroup {
        return this.formBuilder.group({
            link: ['', Validators.required]
        });
    }

    contentCreators(){
        const data = {
            platform: 'web',
            role_id: this.auth.getSessionData('rista-roleid'),
            user_id: this.auth.getSessionData('rista-userid'),
            school_id: this.schoolId
        };
        this.creatorService.contentCreatorList(data).subscribe( (successData) => {
                this.contentCreatorListSuccess(successData);
            },
            (error) => {
                this.contentCreatorListFailure(error);
            });
    }

    contentCreatorListSuccess(successData) {
        if (successData.IsSuccess) {
            this.cclist = successData.ResponseObject;
        }
    }

    contentCreatorListFailure(error) {
        console.log(error, 'error');
    }

    contentList(){
        const data = {
            platform: 'web',
            role_id: this.auth.getSessionData('rista-roleid'),
            user_id: this.auth.getSessionData('rista-userid'),
            school_id: this.schoolId,
            type: this.typeid,
            page: '1',
            record_per_page: '10',
            library: this.libraryselection,
            filter: this.filterselection,
            tags: this.tagid,
            grade: this.gradeid,
            subject: this.subjectid,
        };
        this.creatorService.contentList(data).subscribe( (successData) => {
                this.contentCreatorSuccess(successData);
            },
            (error) => {
                this.contentCreatorFailure(error);
            });
    }
    contentCreatorSuccess(successData) {
        if (successData.IsSuccess) {
            this.contentdata = successData.ResponseObject;
            for (let i = 0; i < this.contentdata.length; i++ ){
                if (this.contentdata[i].status == '1'){
                    this.details = 'Published';
                }else if (this.contentdata[i].status == '5'){
                    this.details = 'Draft';
                }
            }
        }
    }

    contentCreatorFailure(error) {
        console.log(error, 'error');
    }
    detailpreviewlist(id, type){
        const data = {
            platform: 'web',
            role_id: this.auth.getSessionData('rista-roleid'),
            user_id: this.auth.getSessionData('rista-userid'),
            content_id: this.contentdata[id].content_id
        };
        this.creatorService.detaillist(data).subscribe( (successData) => {
                this.contentDetailsSuccess(successData, type,  data);
            },
            (error) => {
                this.contentDetailsFailure(error);
            });
    }
    contentDetailsSuccess(successData, type, data) {
        if (successData.IsSuccess) {
            this.contentDetaildata = successData.ResponseObject;
            this.contentName = this.contentDetaildata.name;
            this.contentid = this.contentDetaildata.content_id;
            this.contentType = this.contentDetaildata.content_type;
            this.profileurl = this.contentDetaildata.profile_url;
            this.createdby = this.contentDetaildata.created_by;
            this.gradename = this.contentDetaildata.grade_name;
            this.subjectname = this.contentDetaildata.subject_name;
            this.tags = this.contentDetaildata.tags;
            this.noofquestions = this.contentDetaildata.no_of_questions;
            this.totalpoints = this.contentDetaildata.total_points;
            this.description = this.contentDetaildata.description;
            this.assignType = type;
            if (this.contentDetaildata.status == '1'){
                this.details = 'Published';
            }else if (this.contentDetaildata.status == '5'){
                this.details = 'Draft';
            }
        }
    }
    contentDetailsFailure(error) {
        console.log(error, 'error');
    }
    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getSessionData('rista-roleid'),
            user_id: this.auth.getSessionData('rista-userid'),
            school_id: this.schoolId,
        };
        this.classService.subjectList(data).subscribe( (successData) => {
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

    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getSessionData('rista-roleid'),
            user_id: this.auth.getSessionData('rista-userid'),
            school_id: this.schoolId,
        };
        this.classService.gradeList(data).subscribe( (successData) => {
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
    tagList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getSessionData('rista-roleid'),
            user_id: this.auth.getSessionData('rista-userid'),
            school_id: this.schoolId,
        };
        this.classService.tagsList(data).subscribe( (successData) => {
                this.tagListSuccess(successData);
            },
            (error) => {
                this.tagListFailure(error);
            });
    }
    tagListSuccess(successData) {
        if (successData.IsSuccess) {
            this.tagData = successData.ResponseObject;
        }
    }
    tagListFailure(error) {
        console.log(error, 'error');
    }
    sortlist(){
        this.libraryselection = this.auth.getSessionData('rista-ContentHome-EntireLibrary') ? this.auth.getSessionData('rista-ContentHome-EntireLibrary') : '0';
        this.contentUserId = this.auth.getSessionData('rista-ContentHome-AuthoredByMe') ? this.auth.getSessionData('rista-ContentHome-AuthoredByMe') : '0';
        this.sortfilter = this.auth.getSessionData('rista-ContentHome-Sort') ? this.auth.getSessionData('rista-ContentHome-Sort') : '0';
        this.typeid = this.auth.getSessionData('rista-ContentHome-MyDraft') ? this.auth.getSessionData('rista-ContentHome-MyDraft') : 'list';
        this.gradeid = JSON.parse(this.auth.getSessionData('rista-ContentHome-Grade')) ? JSON.parse(this.auth.getSessionData('rista-ContentHome-Grade')) : [];
        this.gradeName = JSON.parse(this.auth.getSessionData('rista-ContentHome-Grade')) ? JSON.parse(this.auth.getSessionData('rista-ContentHome-Grade')) : null;
        this.subjectid = JSON.parse(this.auth.getSessionData('rista-ContentHome-Subject')) ? JSON.parse(this.auth.getSessionData('rista-ContentHome-Subject')) : [];
        this.subjectName = JSON.parse(this.auth.getSessionData('rista-ContentHome-Subject')) ? JSON.parse(this.auth.getSessionData('rista-ContentHome-Subject')) : null;
        this.tagid = JSON.parse(this.auth.getSessionData('rista-ContentHome-Tag')) ? JSON.parse(this.auth.getSessionData('rista-ContentHome-Tag')) : [];
        this.tagName = JSON.parse(this.auth.getSessionData('rista-ContentHome-Tag')) ? JSON.parse(this.auth.getSessionData('rista-ContentHome-Tag')) : null;
        const data = {
            platform: 'web',
            role_id: this.auth.getSessionData('rista-roleid'),
            user_id: this.auth.getSessionData('rista-userid'),
            school_id: this.schoolId,
            sort_by: this.sortfilter,
            content_user_id: this.contentUserId,
            type: this.typeid,
            page: this.pageNo,
            record_per_page: '12',
            library: this.libraryselection,
            filter: this.filterselection,
            tags: this.tagid,
            grade: this.gradeid,
            subject: this.subjectid,
            search_name: this.searchKey == undefined ? '' : this.searchKey,
            exact_search: this.exactSearch == true ? 1 : 0
        };
        this.creatorService.sortmasterlist(data).subscribe( (successData) => {
                this.sortListSuccess(successData);
            },
            (error) => {
                this.sortListFailure(error);
            });
    }
    sortListSuccess(successData) {
        if (successData.IsSuccess) {
            let temp  = successData.ResponseObject;

            if (this.searchKey.length > 0 && this.pageNo == 1){
                this.contentdata = successData.ResponseObject;
                // this.totalRecords = 0;

            }
            if (this.searchKey.length == 0 && this.pageNo == 1){
                this.contentdata = successData.ResponseObject;
                // this.totalRecords = 0;
            }

            if (this.pageNo > 1 && temp.length > 0){
                for (let entry of temp) {
                    this.contentdata.push(entry);
                }
            }

            for (let i = 0; i < this.contentdata.length; i++ ){
                if (this.contentdata[i].status == '1'){
                    this.contentdata[i].details = 'Published';
                }else if (this.contentdata[i].status == '5'){
                    this.contentdata[i].details = 'Draft';
                }
            }
            this.totalRecords = this.contentdata.length;
            this.threshhold = this.totalRecords - 2;
            this.contentdatabackup = this.contentdata;
            this.cdr.detectChanges();
        }
        this.cdr.detectChanges();
    }
    sortListFailure(error) {
        console.log(error, 'error');
    }
    listDetails(event, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getSessionData('rista-roleid'),
            user_id: this.auth.getSessionData('rista-userid'),
            content_id: event.content_id,
            content_format: event.content_format,
            content_type: event.content_type,
            school_id: event.school_id
        };
        this.auth.setSessionData('rista-editor', JSON.stringify(data));
        if (this.previewType == 'edit') {
            if (event.content_type == '1') {
                if (type == 'addPdf') {
                    this.router.navigate(['repository/add-resources/edit']);
                }else if (type == 'addText'){
                    this.router.navigate(['content-text-resource/text-resource/edit']);
                }
            } else if (event.content_type == '2') {
                this.auth.setSessionData('rista-upload-type', 'assignment');
                if (type == 'addPdf') {
                    this.router.navigate(['repository/create-assessment/edit']);
                }else if (type == 'addText') {
                    this.auth.setSessionData('rista-textType', 'assignment');
                    this.router.navigate(['content-text-resource/text-assignment/edit']);
                }
            } else if (event.content_type == '3') {
                this.auth.setSessionData('rista-upload-type', 'assessment');
                if (type == 'addPdf') {
                    this.router.navigate(['repository/create-assessment/edit']);
                }else if (type == 'addText'){
                    this.auth.setSessionData('rista-textType', 'assessment');
                    this.router.navigate(['content-text-resource/text-assignment/edit']);
                }
            }
        } else if (this.previewType == 'pdf') {
            this.auth.setSessionData('rista-preview', 'repository');
            if (type == '1'){
                this.auth.setSessionData('preview_page', 'create_resources');
                this.router.navigate(['repository/preview']);
            }else if (type == '2'){
                this.auth.setSessionData('preview_page', 'create_assignments');
                this.router.navigate(['repository/preview']);
            }else if (type == '3'){
                this.auth.setSessionData('preview_page', 'create_assessments');
                this.router.navigate(['repository/preview']);
            }
        }
        else if (this.previewType == 'text') {
            this.auth.setSessionData('rista-preview', 'repository');
            if (type == '1'){
                this.auth.setSessionData('preview_page', 'text_resources');
                this.router.navigate(['repository/preview']);
            }else if (type == '2'){
                this.auth.setSessionData('preview_page', 'text_assignments');
                this.router.navigate(['repository/preview']);
            }else if (type == '3'){
                this.auth.setSessionData('preview_page', 'text_assessments');
                this.router.navigate(['repository/preview']);
            }
        }
        this.creatorService.repositoryDetail(data).subscribe( (successData) => {
                this.detailsSuccess(successData, event, type);
            },
            (error) => {
                this.detailsFailure(error);
            });
    }
    detailsSuccess(successData, event, type) {
        if (successData.IsSuccess) {
            this.detailData = successData.ResponseObject;
        }
    }
    detailsFailure(error) {
        console.log(error, 'error');
    }

    scrollEnd(event){
        event.refresh;
        if (event.endIndex < 0 || this.threshhold <= 0) {

            this.contentdata = [];
            // this.sortlist();
        } else {
            if (event.endIndex >= this.threshhold) {
                this.pageNo ++;
                this.sortlist();
            }
        }
    }

    clearall(){
        this.gradeName = [];
        this.subjectName = [];
        this.tagName = [];
        this.tagid = [];
        this.gradeid = [];
        this.subjectid = [];
        this.pageNo = 1;
        this.contentdata = [];
        this.searchKey = '';
        this.auth.removeSessionData('rista-ContentHome-EntireLibrary');
        this.auth.removeSessionData('rista-ContentHome-AuthoredByMe');
        this.auth.removeSessionData('rista-ContentHome-Sort');
        this.auth.removeSessionData('rista-ContentHome-MyDraft');
        this.auth.removeSessionData('rista-ContentHome-Grade');
        this.auth.removeSessionData('rista-ContentHome-Subject');
        this.auth.removeSessionData('rista-ContentHome-Tag');
        this.sortlist();
    }
    authorizedBy(){
        this.contentdata = [];
        this.pageNo = 1;
        this.totalRecords = 0;
        this.threshhold = 0;
        if (this.contentUserId == this.auth.getUserId()) {
            this.contentUserId = '0';
            this.auth.setSessionData('rista-ContentHome-AuthoredByMe', this.contentUserId);
        } else {
            this.contentUserId = this.auth.getUserId().toString();
            this.auth.setSessionData('rista-ContentHome-AuthoredByMe', this.contentUserId);

        }

        this.sortlist();
    }
    callCurrentBtn(type){
        this.contentdata = [];
        this.pageNo = 1;
        this.totalRecords = 0;
        this.threshhold = 0;
        if (type == 'authored'){
            if ( this.selectAuthored == 'active2'){
                this.selectAuthored = '';
                this.contentUserId = '0';
            }else {
                this.selectAuthored = 'active2';
                this.contentUserId = this.auth.getUserId().toString();
            }
            this.auth.setSessionData('rista-ContentHome-AuthoredByMe', this.contentUserId);
            this.typeid = 'list';
            this.auth.setSessionData('rista-ContentHome-MyDraft', this.typeid);
            this.selectDraft = '';
        }else if (type == 'mydraft'){
            if (this.selectDraft == 'active2'){
                this.selectDraft = '';
                this.typeid = 'list';
            }else {
                this.selectDraft = 'active2';
                this.typeid = type;
            }
            this.contentUserId = '0';
            this.auth.setSessionData('rista-ContentHome-AuthoredByMe', this.contentUserId);
            this.auth.setSessionData('rista-ContentHome-MyDraft', this.typeid);
            this.selectAuthored = '';
        }
        this.sortlist();
    }
    mydraft(type){
        this.contentdata = [];
        this.pageNo = 1;
        if (this.typeid == type) {
            this.typeid = 'list';
            this.auth.setSessionData('rista-ContentHome-MyDraft', this.typeid);
        } else {
            this.typeid = type;
            this.auth.setSessionData('rista-ContentHome-MyDraft', this.typeid);
        }
        // this.totalRecords = 0;
        // this.threshhold = 0;
        this.sortlist();
    }
    selectedgrade(event){
        this.contentdata = [];
        this.pageNo = 1;
        if (typeof event == 'undefined') {
            this.gradeid = [];
            this.auth.setSessionData('rista-ContentHome-Grade', JSON.stringify(this.gradeid));
        } else {
            this.gradeid = [];
            for (let i = 0; i < event.length ; i++){
                this.gradeid.push(event[i].grade_id);
            }
            this.auth.setSessionData('rista-ContentHome-Grade', JSON.stringify(this.gradeid));
        }
        // this.totalRecords = 0;
        // this.threshhold = 0;
        this.sortlist();
    }
    selectedsubject(event){
        this.contentdata = [];
        this.pageNo = 1;
        if (typeof event == 'undefined') {
            this.subjectid = [];
            this.auth.setSessionData('rista-ContentHome-Subject', JSON.stringify(this.subjectid));
        } else {
            this.subjectid = [];
            for (let i = 0 ; i < event.length ; i++){
                this.subjectid.push(event[i].subject_id);
            }
            this.auth.setSessionData('rista-ContentHome-Subject', JSON.stringify(this.subjectid));
        }
        this.sortlist();
    }
    selectedtag(event){
        this.contentdata = [];
        this.pageNo = 1;
        if (typeof event == 'undefined') {
            this.tagid = [];
            this.auth.setSessionData('rista-ContentHome-Tag', JSON.stringify(this.tagid));
        } else {
            this.tagid = [];
            for (let i = 0 ; i < event.length ; i++){
                this.tagid.push(event[i].tag_name);
            }
            this.auth.setSessionData('rista-ContentHome-Tag', JSON.stringify(this.tagid));
        }
        this.sortlist();
    }
    library(event){
        this.libraryselection = event.target.value;
        this.auth.setSessionData('rista-ContentHome-EntireLibrary', this.libraryselection);
        this.contentdata = [];
        this.pageNo = 1;
        this.sortlist();
    }
    sort(event){
        if (event.target.value == '0' || event.target.value == '-1') {
            this.sortfilter = event.target.value;
            this.auth.setSessionData('rista-ContentHome-Sort', this.sortfilter);
            this.contentUserId = '0';
            this.auth.setSessionData('rista-ContentHome-AuthoredByMe', this.contentUserId);
        } else {
            this.contentUserId = event.target.value;
            this.auth.setSessionData('rista-ContentHome-Sort', this.contentUserId);
            this.auth.setSessionData('rista-ContentHome-AuthoredByMe', this.contentUserId);
        }

        this.highlight = '';
        this.contentdata = [];
        this.pageNo = 1;
        this.sortlist();
    }
    detailPreview(data, type){
        this.modalRef = this.modalService.open(this.addDetails, { size: 'lg', backdrop: 'static' });
        this.detailpreviewlist(data, 'details' );
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    showAdd(){
        if (this.schoolId == 0){
            this.toastr.error('Please select a school for creating content');
        }else {
            this.modalRef = this.modalService.open(this.addAsset, { size: 'lg', backdrop: 'static' });
            this.modalRef.result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }
    upload(type){
        this.modalRef.close('addAsset');
        if (type == 'resource'){
            this.modalRef = this.modalService.open(this.addResources, { size: 'lg', backdrop: 'static' });
        } else if (type == 'assessment') {
            this.modalRef = this.modalService.open(this.addAssessment, { size: 'lg', backdrop: 'static' });
        } else if (type == 'assignment') {
            this.modalRef = this.modalService.open(this.addAssignment, { size: 'lg', backdrop: 'static' });
        }
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
    close() {
        this.modalRef.close();
        this.allowDeletecontent = false;
    }
    editAction(event, type, modelOpen){
        if (this.schoolId == 0){
            this.toastr.error('Please select a school for editing content');
        }else {
            if (modelOpen == '1') {
                this.modalRef.close('detailsTemplate');
            }
            this.previewType = 'edit';
            this.auth.setSessionData('editresources', JSON.stringify(event));
            this.listDetails(event, type);
        }
    }
    PreviewPage(event, type){
        this.previewType = 'pdf';
        this.auth.setSessionData('editresources', JSON.stringify(event));
        this.listDetails(event, type);
    }
    PreviewText(event, type){
        this.previewType = 'text';
        this.auth.setSessionData('editresources', JSON.stringify(event));
        this.listDetails(event, type);
    }
    encodePdfFileAsURL(event: any, type) {
        let images = [];
        let imageLength = event.target.files.length;
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const pdfDetails = event.target.files[i];
            const reader = new FileReader();
            reader.onload = (event: any) => {
                let uploadTypeList = event.target.result.split(',');
                images.push({image: uploadTypeList[1],
                    size: pdfDetails.size,
                    type: pdfDetails.type,
                    name: pdfDetails.name});
                const pic = pdfDetails.type.split('/');
                if (pic[1] == 'pdf' ){
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
    onUploadKYCFinishedpdf(getUrlEdu, type){
        const data = {
            platform: 'web',
            role_id: this.auth.getSessionData('rista-roleid'),
            user_id: this.auth.getSessionData('rista-userid'),
            image_path: getUrlEdu,
            uploadtype: 'content'
        };

        this.common.fileUpload(data).subscribe(
            (successData) => {
                this.pdfuploadSuccess(successData, type);
            },
            (error) => {
                this.pdfuploadFailure(error);
            }
        );
    }
    pdfuploadSuccess(successData, type) {
        // this.settings.loadingSpinner = false;
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.pdfpath = [];
            this.pdfpaththumb = [];
            this.response = successData.ResponseObject;
            for (let i = 0; i < this.response.imagepath.length; i++) {
                this.pdfpath.push(this.response.imagepath[i]);
                this.pdfpaththumb.push(this.response.imagepath[i].resized_url);
            }
            this.auth.setSessionData('pdf', JSON.stringify(this.pdfpath));
            this.auth.setSessionData('pdf_thumb', JSON.stringify(this.pdfpaththumb));
            if (type == 'resource') {
                this.router.navigate(['repository/add-resources/add']);
            } else if (type == 'assessment') {
                this.router.navigate(['repository/create-assessment/add']);
                this.auth.setSessionData('rista-upload-type', 'assessment');
            } else if (type == 'assignment') {
                this.router.navigate(['repository/create-assessment/add']);
                this.auth.setSessionData('rista-upload-type', 'assignment');
            }
            this.modalRef.close();
        } else {
            this.toastr.error('Invalid File Format');
        }
    }
    pdfuploadFailure(error) {
        console.log(error, 'error');
    }
    openText(type){
        if (type == 'assignment'){
            this.auth.setSessionData('rista-textType', 'assignment');
            this.router.navigate(['content-text-resource/text-assignment/add']);
            this.close();
        }else if (type == 'assessment'){
            this.auth.setSessionData('rista-textType', 'assessment');
            this.router.navigate(['content-text-resource/text-assignment/add']);
            this.close();
        }
    }
    batchDataList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getSessionData('rista-roleid'),
            user_id: this.auth.getSessionData('rista-userid'),
            school_id: this.schoolId,
            type: '2'
        };
        this.classService.batchList(data).subscribe( (successData) => {
                this.batchListSuccess(successData);
            },
            (error) => {
                this.batchListFailure(error);
            });
    }
    batchListSuccess(successData) {
        if (successData.IsSuccess) {
            this.batchData = successData.ResponseObject;
        }
    }
    batchListFailure(error) {
        console.log(error, 'error');
    }
    removeContent(value){
        this.deleteValue = value;
        this.deleteMessage = 'Are you sure you want to delete the' + ' ' + this.deleteValue.name ;
        this.modalRef = this.modalService.open(this.deleteList, { size: 'md', backdrop: 'static' });
    }
    deleteContent(value){
        const data = {
            platform: 'web',
            role_id: this.auth.getSessionData('rista-roleid'),
            user_id: this.auth.getSessionData('rista-userid'),
            content_id : value.content_id
        };
        this.creatorService.deleteContentRepository(data).subscribe( (successData) => {
                this.deleteContentSuccess(successData, value);
            },
            (error) => {
                this.deleteContentFailure(error);
            });
    }
    deleteContentSuccess(successData, value) {
        if (successData.IsSuccess) {
            this.close();
            this.contentdata = [];
            this.deleteAssignedContent(value);
        }else{
            if (this.allowDeletecontent){
                this.deleteAssignedContent(value);
                this.allowDeletecontent = false;
            }else {
                this.deleteMessage = ' This ' + successData.ResponseObject + ' to an class . Are you still want to delete ';
                this.allowDeletecontent = true;
            }
        }
    }
    deleteContentFailure(error) {
        console.log(error, 'error');
    }
    deleteAssignedContent(value){
        const data = {
            platform: 'web',
            role_id: this.auth.getSessionData('rista-roleid'),
            user_id: this.auth.getSessionData('rista-userid'),
            content_id : value.content_id
        };
        this.creatorService.deleteAssignedContent(data).subscribe( (successData) => {
                this.deleteAssignedContentSuccess(successData);
            },
            (error) => {
                this.deleteAssignedContentFailure(error);
            });
    }
    deleteAssignedContentSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.close();
            this.contentdata = [];
            this.pageNo = 1;
            this.sortlist();
        }
    }
    deleteAssignedContentFailure(error) {
        console.log(error, 'error');
    }
}
