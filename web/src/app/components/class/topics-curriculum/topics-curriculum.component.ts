import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {AssessmentService} from '../../../shared/service/assessment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ClassService} from '../../../shared/service/class.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {CreatorService} from '../../../shared/service/creator.service';
import {IAngularMyDpOptions, IMyDateModel} from '@nodro7/angular-mydatepicker';
import {DatePipe} from '@angular/common';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {SessionConstants} from '../../../shared/data/sessionConstants';
import {dateOptions, timeZone} from '../../../shared/data/config';
import {NavService} from '../../../shared/service/nav.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {forkJoin} from 'rxjs';

@Component({
    selector: 'app-topics-curriculum',
    templateUrl: './topics-curriculum.component.html',
    styleUrls: ['./topics-curriculum.component.scss'],
})
export class TopicsCurriculumComponent implements OnInit, OnDestroy {

    public setDate = new Date().toLocaleString('en-US', {timeZone: timeZone.location});
    myDpOptions1: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: dateOptions.pickerFormat,
        firstDayOfWeek: 'su',
        disableUntil: {
            year: new Date(this.setDate).getFullYear(),
            month: new Date(this.setDate).getMonth() + 1,
            day: new Date(this.setDate).getDate() != 1 ? new Date().getDate() - 1 : -1,
        },
    };
    myDpOptions2: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: dateOptions.pickerFormat,
        firstDayOfWeek: 'su',
        disableUntil: {
            year: new Date(this.setDate).getFullYear(),
            month: new Date(this.setDate).getMonth() + 1,
            day: new Date(this.setDate).getDate() != 1 ? new Date().getDate() - 1 : -1,
        },
    };
    public typeName = '';
    public choosedData: any;
    public className = '';
    public title = '';
    public viewType: any;
    public roleId: any = '';
    public contentForm: FormGroup;
    public webhost: any;
    public meridian: boolean;
    public spinner: boolean;
    public allowSelect: boolean;
    public classid: any;
    public viewtypehighlight: any;
    public dueButton: any;
    public type: any;
    public resourceList: any;
    public gridView: any;
    public showGrid: any;
    public curriculumList: any = [];
    public topicListData: any = [];
    public topicName = '';
    public modalRef: NgbModalRef;
    public newCurriculumList: any = [];
    public topicPopupType = '';
    public updateTopicId = '';
    public previewType: any;
    public viewer: any;
    public selectContent: any;
    public contentNameValue: any;
    public reportData: any;
    public editData: any;
    public contentname: any;
    public fromTime: any;
    public toTime: any;
    public dateValidation: boolean;
    public deleteDetail: any;
    public manageClass = true;
    public timeErr: any;
    public schoolId: any;
    public grade: any;
    public detailData: any;
    public teacherType: any = '1';
    public topicStartdate: any;
    public topicEnddate: any;
    public deleteType: any;
    public delTopicId: any;
    public collapse = 'Collapse All';
    public isCollapsed = false;
    public checkAutoRelease = true;
    public allowScore: boolean;
    public content_id = '';
    public contentFormat = '';
    public deleteData: any;
    public pdfTeacherVersion: any = [];
    public showOtherLinks = false;
    public linkData = [];
    public allowZoomApi = false;
    public showType = 'curriculum';
    public messageList: any = [];
    public toId: any = [];
    public messageCount = 0;
    public isEssay = '0';
    public curriculumStartDate: any;
    public curriculumEndDate: any;
    public curriculumStartTime: any;
    public curriculumEndTime: any;
    public pdfpath: any = [];
    public model: { singleDate: { jsDate: Date }; isRange: boolean };
    public selectContentType: any;
    selectedDeletePdf: any;
    public isDeleteLink = false;
    public showStudentList = false;

    @ViewChild('itemsReports') itemsReports: TemplateRef<any>;
    @ViewChild('reports') reports: TemplateRef<any>;
    @ViewChild('assign') addAssign: TemplateRef<any>;
    @ViewChild('content') deleteContent: TemplateRef<any>;
    @ViewChild('createTopicPopup') createTopicPopup: TemplateRef<any>;
    @ViewChild('teacherVersion') teacherVersion: TemplateRef<any>;
    @ViewChild('curriculum') curriculumPopUp: TemplateRef<any>;
    @ViewChild('uploadFileInput', {static: false}) uploadFileInput: ElementRef<HTMLInputElement>;
    @ViewChild('deleteDialog', {static: true}) deleteDialog: any;

    public contentTypleList = [{id: '1', value: 'Resource'}, {id: '2', value: 'Assignment'}, {
        id: '3',
        value: 'Assesment'
    }];
    public showContentCurriculumType = '';
    public multiContentId = [];
    public multiTopicId = [];
    public calledFrom = 'direct';
    private studentNameLookup = new Map<string, string>();

    constructor(public auth: AuthService, public assessment: AssessmentService, public router: Router, private formBuilder: FormBuilder, public route: ActivatedRoute, public newSubject: NewsubjectService,
                public sanitizer: DomSanitizer, public config: ConfigurationService, private modalService: NgbModal, public classService: ClassService, public datePipe: DatePipe,
                public toastr: ToastrService, public common: CommonService, public commondata: CommonDataService,
                public creatorService: CreatorService, public navservice: NavService) {
        this.roleId = this.auth.getRoleId();
        this.contentForm = this.formBuilder.group({
            startdate: [''],
            enddate: '',
            releaseScore: ['0'],
            feedback: false,
            workspace: false,
        });
        this.model = {isRange: false, singleDate: {jsDate: new Date()}};
        this.webhost = this.config.getimgUrl();
        this.route.params.forEach((params) => {
            this.viewType = params.id;
        });
        this.meridian = true;
        this.spinner = false;
        this.allowSelect = true;
        this.newSubject.allowSchoolChange(this.allowSelect);

        if (['1', '3', '4', '5'].includes(this.viewType)) {
            this.choosedData = JSON.parse(this.auth.getSessionData('card-data'));
            this.className = this.choosedData[0].class_name;
            this.typeName = 'Class Name';
            this.title = 'Topics';
            this.classid = this.choosedData[0].class_id;
            this.linkData = this.choosedData[0]?.video_link ? this.choosedData[0]?.video_link : [];
            console.log(this.choosedData[0], 'ssss');
            this.choosedData[0].students.forEach((items) => {
                const firstName = (items.first_name ?? '').trim();
                const lastName = (items.last_name ?? '').trim();
                const fullName = [firstName, lastName].filter(Boolean).join(' ').trim();
                items.name = fullName || (items.name ?? '');
                items.id = items.student_id;
                const lookupId = `${items.student_id ?? items.id ?? ''}`.trim();
                if (lookupId) {
                    this.studentNameLookup.set(lookupId, items.name);
                }
            });
            if (this.auth.getRoleId() != '2') {
                if (this.choosedData[0]?.teacher_ids) {
                    this.toId = this.choosedData[0]?.teacher_ids.filter((items) => {
                        return items != this.auth.getUserId();
                    });
                } else {
                    this.toId = [];
                }
            }
            console.log(this.toId, 'toId');
            ['4', '5'].includes(this.viewType) ? this.showType = 'inbox' : '';
        } else if (this.viewType == '2') {
            this.choosedData = JSON.parse(this.auth.getSessionData('classbatch'));
            this.className = this.choosedData.batch_name;
            this.typeName = 'Content Folder Name';
        }
        this.buildStudentLookupFromSession();

        const searchValue = JSON.parse(this.auth.getSessionData(SessionConstants.classCurriculumSearch));
        console.log(searchValue, 'searchValue');
        this.curriculumService(searchValue ? searchValue[0]?.curriculum_type ?? '2' : '2');

        this.schoolId = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.manageClass = this.auth.manageClass;
    }

    ngOnInit() {
        this.creatorService.changeViewList(true);
        this.navservice.collapseSidebar = true;
        if (this.auth.getRoleId() == '4') {
            this.listMessage();
        }
        if (this.choosedData[0]?.class_type == '1') {
            this.checkAllowZoomApi();
        }
    }

    ngOnDestroy() {
        this.creatorService.changeViewList(false);
        this.navservice.collapseSidebar = false;
        this.setSearch_Filter();
    }

    selectOrUnSelectContentList(item, event, type) {
        console.log(item)
        item.checked = event.target.checked;
        if (event.target.checked) {
            if (type == 'content') {
                if (item.topic_id == '0') {
                    this.multiContentId.push(item.class_content_id);
                } else if (item.topic_id != '0') {
                    const index = this.topicListData.findIndex(x => x.topic_id == item.topic_id);
                    this.topicListData[index].topicArray.forEach((content) => {
                        if (content.checked && !this.multiContentId.includes(content.class_content_id)) {
                            this.multiContentId.push(content.class_content_id);
                        }
                    });
                    this.topicListData[index].checked = !this.topicListData[index].topicArray.some((code) => !code.checked);
                    if (this.topicListData[index].checked) {
                        this.topicListData[index].topicArray.forEach((content) => {
                            const contentIndex = this.multiContentId.findIndex(x => x == content.class_content_id);
                            contentIndex != -1 ? this.multiContentId.splice(contentIndex, 1) : '';
                        });
                        this.multiTopicId.push(this.topicListData[index].topic_id);
                    }
                }
            } else {
                this.multiTopicId.push(item.topic_id);
                item.topicArray.forEach((content) => {
                    content.checked = true;
                    const contentIndex = this.multiContentId.findIndex(x => x == content.class_content_id);
                    contentIndex != -1 ? this.multiContentId.splice(contentIndex, 1) : '';
                });
            }
        } else {
            if (type == 'content') {
                if (item.topic_id == '0') {
                    const index = this.multiContentId.findIndex(x => x == item.class_content_id);
                    this.multiContentId.splice(index, 1);
                } else {
                    const topicIndex = this.topicListData.findIndex(x => x.topic_id == item.topic_id);
                    this.topicListData[topicIndex].checked = false;
                    this.topicListData[topicIndex].topicArray.forEach((content) => {
                        if (content.checked && !this.multiContentId.includes(content.class_content_id)) {
                            this.multiContentId.push(content.class_content_id);
                        } else if (!content.checked && (item.class_content_id == content.class_content_id)) {
                            const contentIndex = this.multiContentId.findIndex(x => x == item.class_content_id);
                            contentIndex != -1 ? this.multiContentId.splice(contentIndex, 1) : '';
                        }
                    });
                    const multiTopicIndex = this.multiTopicId.findIndex(x => x == this.topicListData[topicIndex].topic_id);
                    this.multiTopicId.splice(multiTopicIndex, 1);
                    console.log(this.multiContentId, 'multiContentId');
                    console.log(this.multiTopicId, 'multiTopicId');
                }
            } else {
                item.topicArray.forEach(content => content.checked = false);
                const index = this.multiTopicId.findIndex(x => x == item.topic_id);
                this.multiTopicId.splice(index, 1);
                const classContentId = item.topicArray.map((data) => data.class_content_id);
                this.multiContentId.filter((value) => !classContentId.includes(value));
                // this.multiContentId = filterClassContentId;
            }
        }
        event.stopPropagation();
    }

    openCurriculumPopUp() {
        this.showType = '';
        this.curriculumStartDate = '';
        const startDate = this.datePipe.transform(this.model.singleDate.jsDate, 'yyyy-MM-dd');
        const dropped = startDate.split('-');
        this.curriculumStartDate = {
            isRange: false,
            singleDate: {jsDate: new Date(parseInt(dropped[0]), parseInt(dropped[1]) - 1, parseInt(dropped[2]))},
            dateRange: null
        };
        this.curriculumStartTime = {hour: parseInt('00'), minute: parseInt('00'), second: parseInt('00')};
        this.curriculumEndTime = {hour: parseInt('23'), minute: parseInt('59'), second: parseInt('00')};
        this.modalRef = this.modalService.open(this.curriculumPopUp, {size: 'xl'});
    }

    listMessage() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.choosedData[0]?.class_id
        };
        this.auth.postService(payload, 'mailbox/listMessages').subscribe((successData: any) => {
            console.log(successData, 'successData');
            if (successData.IsSuccess) {
                successData.ResponseObject.forEach((item) => {
                    item.createdByMe = item.from_id == this.auth.getUserId();
                });
                this.messageList = successData.ResponseObject;
                this.messageCount = successData.NewMessage;
                console.log(this.messageList, 'messageList');
            }
        }, (error) => console.error(error, 'error_listMessage'));
    }

    setSearch_Filter() {
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.classCurriculumSearch));
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    items.list_type = '';
                    items.curriculum_type = this.viewtypehighlight;
                } else {
                    const searchData = {
                        list_type: '',
                        curriculum_type: this.viewtypehighlight,
                        school_id: this.auth.getSessionData('school_id'),
                    };
                    data.push(searchData);
                }
            });
            data = data.filter((test, index, array) =>
                    index === array.findIndex((findTest) =>
                        findTest.school_id === test.school_id
                    )
            );
            this.auth.setSessionData(SessionConstants.classCurriculumSearch, JSON.stringify(data));
        }
    }

    typeSelection(id) {
        this.viewtypehighlight = id;
        console.log(this.viewtypehighlight, 'viewtypehighlight');
        if (id == '0') {
            this.dueButton = 'All';
            this.curriculumService(id);
        } else if (id == '1') {
            this.dueButton = 'Upcoming';
            this.curriculumService(id);
        } else if (id == '2') {
            this.dueButton = 'In Progress';
            this.curriculumService(id);
        } else {
            this.dueButton = 'Completed';
            this.curriculumService(id);
        }
        this.setSearch_Filter();
    }

    curriculumService(id) {
        this.viewtypehighlight = id;
        id == '2' ? this.dueButton = 'In Progress' : id == '0' ? this.dueButton = 'All' : id == '3' ? this.dueButton = 'Completed' : id == '1' ?
            this.dueButton = 'Upcoming' : '';
        const data = {
            platform: 'web',
            type: id,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
            school_id: this.choosedData[0].school_id,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classService.viewCurriculumList(data).subscribe((successData) => {
                this.viewCurriculumListSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    viewCurriculumListSuccess(successData) {
        if (successData.IsSuccess) {
            this.curriculumList = successData.ResponseObject;
            this.resourceList = successData.ResponseObject;
            this.curriculumList.forEach((item) => {
                item.individual_count = Number(item.individual_count ?? 0);
                item.individual_students = item.individual_students ?? '';
                item.individual_student_names = this.formatIndividualStudents(item.individual_students);
            });
            this.getTopicList();
        }
    }

    // Topic list service

    getTopicList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classService.topicList(data).subscribe((successData) => {
                this.viewTopicListSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    private buildStudentLookupFromSession(): void {
        if (!this.choosedData) {
            return;
        }
        const candidates = Array.isArray(this.choosedData)
            ? this.choosedData[0]?.students ?? []
            : this.choosedData?.students ?? [];
        if (!Array.isArray(candidates)) {
            return;
        }
        candidates.forEach((student: any) => {
            const id = `${student?.student_id ?? student?.id ?? ''}`.trim();
            if (!id) {
                return;
            }
            const firstName = `${student?.first_name ?? ''}`.trim();
            const lastName = `${student?.last_name ?? ''}`.trim();
            const fallbackName = `${student?.name ?? ''}`.trim();
            const displayName = [firstName, lastName].filter(Boolean).join(' ').trim() || fallbackName || id;
            if (!this.studentNameLookup.has(id)) {
                this.studentNameLookup.set(id, displayName);
            }
        });
    }

    private formatIndividualStudents(raw: any): string {
        const names = this.extractStudentNames(raw);
        if (names.length === 0) {
            return '';
        }
        return Array.from(new Set(names.map((name) => name.trim()).filter(Boolean))).join(', ');
    }

    private extractStudentNames(raw: any): string[] {
        const resolvedNames: string[] = [];
        const seen = new Set<string>();

        const addName = (name: string) => {
            const trimmed = name.replace(/[\[\]"]/g, '').trim();
            if (!trimmed) {
                return;
            }
            if (!seen.has(trimmed)) {
                seen.add(trimmed);
                resolvedNames.push(trimmed);
            }
        };

        const resolveViaLookup = (token: string) => {
            const direct = this.studentNameLookup.get(token);
            if (direct) {
                addName(direct);
                return;
            }
            const normalized = token.replace(/\s+/g, ' ').trim();
            const normalizedHit = this.studentNameLookup.get(normalized);
            if (normalizedHit) {
                addName(normalizedHit);
                return;
            }
            addName(token);
        };

        const handleToken = (token: string) => {
            const cleaned = token.replace(/[[\]"']/g, '').trim();
            if (!cleaned) {
                return;
            }
            resolveViaLookup(cleaned);
        };

        const handleObject = (value: Record<string, any>) => {
            const nameCandidates = [
                value.full_name,
                value.fullName,
                value.display_name,
                value.displayName,
                value.student_name,
                value.studentName,
                value.name,
                `${value.first_name ?? ''} ${value.last_name ?? ''}`,
                `${value.firstname ?? ''} ${value.lastname ?? ''}`,
            ];
            const candidateName = nameCandidates.map((candidate) => (typeof candidate === 'string' ? candidate.trim() : '')).find((candidate) => candidate && candidate.length > 0);
            if (candidateName) {
                addName(candidateName);
            }
            const idCandidates = [
                value.student_id,
                value.studentId,
                value.id,
                value.ID,
                value.user_id,
                value.userId,
            ].map((candidate) => (candidate || candidate === 0) ? `${candidate}`.trim() : '');
            idCandidates.filter(Boolean).forEach(handleToken);
        };

        if (raw === null || raw === undefined) {
            return resolvedNames;
        }

        if (Array.isArray(raw)) {
            raw.forEach((item) => {
                if (item === null || item === undefined) {
                    return;
                }
                if (typeof item === 'object') {
                    handleObject(item as Record<string, any>);
                } else {
                    handleToken(`${item}`);
                }
            });
            return resolvedNames;
        }

        if (typeof raw === 'string') {
            const trimmed = raw.trim();
            if (!trimmed) {
                return resolvedNames;
            }
            try {
                const parsed = JSON.parse(trimmed);
                const nestedNames = this.extractStudentNames(parsed);
                nestedNames.forEach(addName);
                return resolvedNames;
            } catch {
                trimmed.split(/[,;|]/g).forEach((fragment) => handleToken(fragment));
                return resolvedNames;
            }
        }

        if (typeof raw === 'object') {
            handleObject(raw as Record<string, any>);
            return resolvedNames;
        }

        handleToken(`${raw}`);
        return resolvedNames;
    }

    viewTopicListSuccess(successData) {
        if (successData.IsSuccess) {
            this.topicListData = successData.ResponseObject;
            this.topicListData.forEach((items) => {
                items.topicArray = [];
                this.curriculumList.forEach((curriculum) => {
                    if (curriculum.topic_id == items.topic_id) {
                        items.contentCollapse = true;
                        items.topicArray.push(curriculum);
                    }
                });
            });
            this.newCurriculumList = [];
            this.curriculumList.forEach((item) => {
                if (item.topic_id == '0' || item.topic_id == '') {
                    this.newCurriculumList.push(item);
                }
            });
            console.log(this.topicListData, 'topicList');
            console.log(this.curriculumList, 'curriList');
        }
    }

    // Add Topic service
    addTopicService() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
            topic: this.topicPopupType != 'topic' ? this.topicName : '',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            start_date: this.topicPopupType == 'topic' ? '' : this.topicStartdate == '' ? '' : this.datePipe.transform(this.topicStartdate?.singleDate?.jsDate, 'yyyy-MM-dd'),
            end_date: this.topicPopupType == 'topic' ? '' : this.contentForm.controls.enddate.value == null ? '' : this.datePipe.transform(this.topicEnddate?.singleDate?.jsDate, 'yyyy-MM-dd'),
            allow_workspace: this.topicPopupType == 'topic' ? '0' : this.contentForm.controls.workspace.value ? '1' : '0',
            allow_feedback: this.topicPopupType == 'topic' ? '0' : this.contentForm.controls.feedback.value ? '1' : '0',
        };
        if (this.topicPopupType == 'edit' || this.topicPopupType == 'topic') {
            data['topic_id'] = this.topicPopupType == 'edit' ? this.updateTopicId : this.calledFrom == 'direct' ?
                [this.delTopicId] : this.multiTopicId;
            data['type'] = this.topicPopupType == 'edit' ? '1' : '2';
            data['status'] = '1';
        }

        const url = this.topicPopupType == 'add' ? 'classes/addTopic' : 'classes/updateTopic';
        this.classService.addTopic(data, url).subscribe((successData) => {
                this.addTopicSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    addTopicSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            this.calledFrom != 'direct' ? this.multiTopicId = [] : '';
            this.modalRef.close();
            this.getTopicList();
            this.curriculumService(this.viewtypehighlight);
        } else {
            this.toastr.error(successData.ErrorObject);
        }
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer !== event.container) {
            transferArrayItem(event.previousContainer.data, event.container.data,
                event.previousIndex, event.currentIndex);
        } else {
            if (event.previousIndex != event.currentIndex) {
                moveItemInArray(this.topicListData, event.previousIndex, event.currentIndex);
                const topicIdArr: [] = this.topicListData.map((item) => item.topic_id);
                this.updateTopicOrder(topicIdArr);
            }
        }
    }

    updateTopicOrder(topicIdArr) {
        // Intl.DateTimeFormat().resolvedOptions().timeZone
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
            topic_order: topicIdArr,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classService.updateTopicOrder(data).subscribe((successData) => {
                this.updateTopicOrderSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    updateTopicOrderSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject);
            // this.getTopicList();
        } else {
            this.toastr.error(successData.ResponseObject);
        }
    }

    createTopic(type, data) {
        console.log(data, 'dataa');
        this.topicPopupType = type;
        this.updateTopicId = data.topic_id;
        this.topicName = type == 'edit' ? data.topic : '';
        // Start Date Patch
        console.log(type, 'type');
        if (type == 'edit' && (data.start_date != null || data.end_date != null)) {
            if (data.start_date != '0000-00-00' && data.start_date) {
                const startDate = data.start_date.split('-');
                const sdObject: IMyDateModel = {
                    isRange: false,
                    singleDate: {jsDate: new Date(parseInt(startDate[0]), parseInt(startDate[1]) - 1, parseInt(startDate[2]))},
                    dateRange: null
                };
                this.topicStartdate = sdObject;
            } else {
                this.topicStartdate = '';
            }
            // End Date Patch
            if (data.end_date != '0000-00-00' && data.end_date) {
                const endDate = data.end_date.split('-');
                const sdObject: IMyDateModel = {
                    isRange: false,
                    singleDate: {jsDate: new Date(parseInt(endDate[0]), parseInt(endDate[1]) - 1, parseInt(endDate[2]))},
                    dateRange: null
                };
                this.topicEnddate = sdObject;
            } else {
                this.topicEnddate = '';
            }
        } else {
            this.topicStartdate = '';
            this.topicEnddate = '';
        }
        this.modalRef = this.modalService.open(this.createTopicPopup, {size: 'lg', backdrop: 'static'});
    }

    addContentResources(type) {
        this.auth.setSessionData('resourceAccess', true);
        this.auth.setSessionData('content_assign', 'class');
        this.auth.setSessionData('allowCurriculum', '1');
        this.auth.setSessionData('return', type);
        this.auth.setSessionData('batchassign', this.viewType);
        this.auth.setSessionData('assignedForm', this.viewType == '2' ? 'content-Folder' : 'class');
        if (type == 'resources') {
            ['1', '3', '4', '5'].includes(this.viewType) ? this.viewResource() : this.viewBatchResource();
            this.auth.setSessionData('contentType', 1);
        } else if (type == 'assignments') {
            ['1', '3', '4', '5'].includes(this.viewType) ? this.viewAssignment() : this.viewBatchAssignment();
            this.auth.setSessionData('contentType', 2);
        } else if (type == 'assessments') {
            ['1', '3', '4', '5'].includes(this.viewType) ? this.viewAssessment() : this.viewBatchAssessment();
            this.auth.setSessionData('contentType', 3);
        }
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.non_directcontentSearch));
        data.forEach((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                items.libary = this.auth.getSessionData('contentType');
            } else {
                const contentData = {
                    contentName: '',
                    extact_Search: false,
                    libary: this.auth.getSessionData('contentType'),
                    content_userid: '0',
                    sortFilter: '0',
                    type_id: 'list',
                    grade_id: [],
                    subject_id: [],
                    tag_id: [],
                    selectAuthored: '',
                    selectDraft: '',
                    school_id: this.auth.getSessionData('school_id')
                };
                data.push(contentData);
            }
            data = data.filter((test, index, array) =>
                    index === array.findIndex((findTest) =>
                        findTest.school_id === test.school_id
                    )
            );
            this.auth.setSessionData(SessionConstants.non_directcontentSearch, JSON.stringify(data));
        });
        this.router.navigate(['/repository/content-home']);
    }

    viewResource() {
        const data = {
            platform: 'web',
            type: this.viewtypehighlight,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
        };
        this.classService.viewResources(data).subscribe((successData) => {
                this.viewResourceSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    viewResourceSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
    }

    viewBatchResource() {
        const data = {
            platform: 'web',
            type: '0',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            batch_id: this.choosedData.batch_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.classService.viewBatchResources(data).subscribe((successData) => {
                this.viewBatchResourceSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    viewBatchResourceSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
    }

    viewAssessment() {
        const data = {
            platform: 'web',
            type: this.viewtypehighlight,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
        };
        this.classService.viewAssessments(data).subscribe((successData) => {
                this.viewAssessmentSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    viewAssessmentSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
    }


    viewAssignment() {
        const data = {
            platform: 'web',
            type: this.viewtypehighlight,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
        };
        this.classService.viewAssignments(data).subscribe((successData) => {
                this.viewAssignmentSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    viewAssignmentSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
    }

    viewBatchAssignment() {
        const data = {
            platform: 'web',
            type: '0',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            batch_id: this.choosedData.batch_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.classService.viewBatchAssignment(data).subscribe((successData) => {
                this.viewBatchAssignmentSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    viewBatchAssignmentSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
    }

    viewBatchAssessment() {
        const data = {
            platform: 'web',
            type: '0',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            batch_id: this.choosedData.batch_id,
            school_id: this.auth.getSessionData('school_id')
        };
        this.classService.viewBatchAssessment(data).subscribe((successData) => {
                this.viewBatchAssessmentSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    viewBatchAssessmentSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
        }
    }

    correctionPage(list, type) {
        this.auth.setSessionData('return', type);
        this.auth.setSessionData('correction-return', type);
        this.auth.setSessionData('classDetails', JSON.stringify(list));
        if (type == 'assessments') {
            this.router.navigate(['/assessment-correction/correction-page']);
        } else if (type == 'assignments') {
            this.router.navigate(['/assignment-correction/correction-page']);
        }
    }

    PreviewPage(event, type, view) {
        view == 'student_preview' ? this.auth.setSessionData('preview_type', 'yes') :
            this.auth.setSessionData('preview_type', 'no');
        this.auth.setSessionData('return', type);
        this.previewType = 'pdf';
        this.viewer = view;
        this.auth.setSessionData('editresources', JSON.stringify(event));
        this.listDetails(event, type);
    }

    PreviewText(event, type, view) {
        view == 'student_preview' ? this.auth.setSessionData('preview_type', 'yes') :
            this.auth.setSessionData('preview_type', 'no');
        this.auth.setSessionData('return', type);
        this.previewType = 'text';
        this.auth.setSessionData('editresources', JSON.stringify(event));
        this.listDetails(event, type);
        if (view == 'student_preview') {
            this.auth.setSessionData('showAnswer', 1);
        } else {
            this.auth.removeSessionData('showAnswer');
        }
    }

    openTeacherVersionPdf(data) {
        const pdf = this.common.convertBase64(data.teacher_version_path);
        this.pdfTeacherVersion = this.webhost + '/' + pdf[0].original_image_url;
        this.modalRef = this.modalService.open(this.teacherVersion, {size: 'xl'});
    }

    reportDetails(type, value) {
        this.selectContent = value.content_type == '2' ? 'Assignment' : value.content_type == '3' ? 'Assessment' : 'Resource';
        this.contentNameValue = value.content_id;
        let data: any;
        data = JSON.parse(this.auth.getSessionData('card-data'));
        this.auth.setSessionData('Individual-Class-Report', JSON.stringify(data[0]));
        this.auth.setSessionData('Individual-student-Report', JSON.stringify(value));
        this.modalRef = this.modalService.open(this.reports, {size: 'xl'});
    }

    itemsReportDetails(data) {
        this.auth.setSessionData('Individual-items-Report', JSON.stringify(data));
        this.reportData = JSON.parse(this.auth.getSessionData('Individual-items-Report'));
        this.modalRef = this.modalService.open(this.itemsReports, {size: 'xl'});
    }

    allReports(data, calledFrom = '') {
        if (calledFrom == '') {
            data['viewType'] = this.viewType;
            data['manageClass'] = this.manageClass;
        } else {
            data['content_format'] = '3';
            data['content_id'] = '0';
        }
        this.auth.setSessionData('report_type', calledFrom == '' ? 'all' : 'viewAnalytics');
        this.auth.setSessionData('All-Reports', JSON.stringify(data));
        this.auth.setSessionData('reportCalledFrom', 'class-detail');
        this.router.navigate(['/report/report']);
    }

    navigateToSATReport(calledFrom?) {
        this.auth.setSessionData('report_type', 'viewAnalytics');
        const satReportDetails = {
            class_id: this.choosedData[0].class_id,
            class_name: this.choosedData[0]?.class_name,
            student_id: this.auth.getRoleId() == '5' ? this.auth.getUserId() : '0',
            content_id: calledFrom ? calledFrom.content_id : '0',
            student_content_id: '0',
            test_type_id: calledFrom ? calledFrom?.test_type_id : '0'
        };
        this.auth.setSessionData('satReportData', JSON.stringify(satReportDetails));
        this.auth.setSessionData('reportCalledFrom', 'class');
        this.router.navigate(['sat-report']);
    }

    onDateChanged(event: IMyDateModel): void {
        this.myDpOptions2 = {};
        this.myDpOptions2 = {
            dateRange: false,
            dateFormat: dateOptions.pickerFormat,
            firstDayOfWeek: 'su',
            disableUntil: {
                year: event.singleDate.date.year,
                month: event.singleDate.date.month,
                day: event.singleDate.date.day - 1,
            },
        };
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

    editAction(id, data) {
        this.editData = data;
        this.contentname = data.content_name;
        this.modalRef = this.modalService.open(this.addAssign, {size: 'lg', backdrop: 'static'});
        const stTime1 = data.start_time.replace(' ', ':').split(':');
        if (parseInt(stTime1[0]) < 12 && stTime1[2] != 'AM') {
            stTime1[0] = parseInt(stTime1[0]) + 12;
            this.fromTime = {
                hour: parseInt(stTime1[0]), minute: parseInt(stTime1[1]), second: 0
            };
        } else {
            let newstart = stTime1[0];
            if (stTime1[2] == 'AM') {
                if (newstart == 12) {
                    stTime1[0] = 0;
                } else {
                    newstart = stTime1[0];
                }
            } else if (stTime1[2] == 'PM') {
                if (newstart == 12) {
                    stTime1[0] = 12;
                } else {
                    newstart = stTime1[0];
                }
            }
            this.fromTime = {
                hour: parseInt(stTime1[0]), minute: parseInt(stTime1[1]), second: 0
            };
        }
        const etTime1 = data.end_time.replace(' ', ':').split(':');
        if (parseInt(etTime1[0]) < 12 && etTime1[2] != 'AM') {
            etTime1[0] = parseInt(etTime1[0]) + 12;
            this.toTime = {
                hour: parseInt(etTime1[0]), minute: parseInt(etTime1[1]), second: 0
            };
        } else {
            this.toTime = {
                hour: parseInt(etTime1[0]), minute: parseInt(etTime1[1]), second: 0
            };
        }
        if (data.start_date != '0000-00-00') {
            const sd = data.start_date.split('-');
            const sdObject: IMyDateModel = {
                isRange: false,
                singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
                dateRange: null
            };
            this.contentForm.controls.startdate.patchValue(sdObject);
        } else {
            this.contentForm.controls.startdate.patchValue(null);
        }
        if (data.end_date != '0000-00-00') {
            const sd = data.end_date.split('-');
            const sdObject: IMyDateModel = {
                isRange: false,
                singleDate: {jsDate: new Date(parseInt(sd[0]), parseInt(sd[1]) - 1, parseInt(sd[2]))},
                dateRange: null
            };
            this.contentForm.controls.enddate.patchValue(sdObject);
        } else {
            this.contentForm.controls.enddate.patchValue(null);
        }
        this.contentForm.controls.workspace.patchValue(data.allow_workspace == '1');
        this.contentForm.controls.feedback.patchValue(data.allow_feedback == '1');
        this.allowScore = data.allow_autograde == '1' && data.content_type != '1' && data.without_question != 1;
        this.content_id = data.content_id;
        this.contentFormat = data.content_format;
        this.isEssay = data?.is_essay ?? '0';
        setTimeout(() => {
            this.contentForm.controls.releaseScore.patchValue(data.auto_review ?? '0');
        }, 0);
    }

    deleteAction(type, data) {
        this.deleteType = type;
        this.deleteData = data;
        this.delTopicId = data.topic_id;
        this.topicPopupType = type;
        this.calledFrom = 'direct';
        this.modalRef = this.modalService.open(this.deleteContent, {size: 'md', backdrop: 'static'});
    }

    deleteMultiContentOrTopic() {
        this.calledFrom = 'multi';
        this.modalRef = this.modalService.open(this.deleteContent, {size: 'md', backdrop: 'static'});
    }

    listView(id) {
        this.gridView = id;
        this.showGrid = id == 1;
    }

    releaseScoreFilter(event) {
        this.checkAutoRelease = true;
        if (event.target.value == '1') {
            this.releaseScoreCheck();
        }
    }

    releaseScoreCheck() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.content_id
        };
        this.creatorService.releaseScoreCheck(data).subscribe((successData) => {
                this.releaseCheckSuccess(successData);
            },
            (error) => {
                console.error(error, 'error_studentList');
            });
    }

    releaseCheckSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData, 'check success');
        } else {
            this.checkAutoRelease = false;
            setTimeout(() => {
                this.contentForm.controls.releaseScore.patchValue('0');
                this.checkAutoRelease = true;
            }, 3000);
        }
    }

    onSave() {
        this.modalRef.close();
        this.auth.removeSessionData('Individual-Class-Report');
    }

    moveToTopics(data, index, topicList, type) {
        if (type == 'curricullumList') {
            topicList.topicArray.push(data);
            this.newCurriculumList.splice(index, 1);
        } else {
            topicList.topicArray.push(data);
        }
        this.moveToTopicsService(data, topicList, 'add');
        console.log(this.topicListData, 'topicListData');
    }

    moveToTopicsService(curriculum, topic, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_content_id: curriculum.class_content_id,
            topic_id: type == 'add' ? topic.topic_id : '0',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.classService.moveTopic(data).subscribe((successData) => {
                this.moveTopicSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    moveTopicSuccess(successData) {
        if (successData.IsSuccess) {
            console.log(successData.ResponseObject, 'success');
            this.curriculumService(this.viewtypehighlight);
            // this.getTopicList();
        }
    }

    dateDifferent() {
        if (this.contentForm.controls.startdate.value != null && this.contentForm.controls.enddate.value != null) {
            const startdate = this.datePipe.transform(this.contentForm.controls.startdate.value.singleDate.jsDate, 'yyyy-MM-dd');
            const st = startdate.split('-');
            const endDate = this.datePipe.transform(this.contentForm.controls.enddate.value.singleDate.jsDate, 'yyyy-MM-dd');
            const et = endDate.split('-');
            if (st[0] == et[0]) {
                if (st[1] == et[1]) {
                    this.dateValidation = st[2] <= et[2];
                } else this.dateValidation = st[1] <= et[1];
            } else {
                this.dateValidation = true;
            }
        } else {
            this.dateValidation = true;
        }
    }

    contentClose() {
        this.fromTime = '';
        this.toTime = '';
        this.contentname = '';
        this.modalRef.close();
    }

    addCurriculum() {
        this.auth.setSessionData('resourceAccess', true);
        this.auth.setSessionData('allowCurriculum', '1');
        this.auth.setSessionData('batchassign', this.viewType);
        this.auth.setSessionData('assignedForm', this.viewType == '2' ? 'content-Folder' : 'class');
        this.curriculumService(this.viewtypehighlight);

        let data = JSON.parse(this.auth.getSessionData(SessionConstants.non_directcontentSearch));
        data.forEach((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                items.libary = this.auth.getSessionData('contentType');
            } else {
                const contentData = {
                    contentName: '',
                    extact_Search: false,
                    libary: this.auth.getSessionData('contentType'),
                    content_userid: '0',
                    sortFilter: '0',
                    type_id: 'list',
                    grade_id: [],
                    subject_id: [],
                    tag_id: [],
                    selectAuthored: '',
                    selectDraft: '',
                    school_id: this.auth.getSessionData('school_id')
                };
                data.push(contentData);
            }
            data = data.filter((test, index, array) =>
                    index == array.findIndex((findTest) =>
                        findTest.school_id === test.school_id
                    )
            );
            console.log(data, 'DATA');
            this.auth.setSessionData(SessionConstants.non_directcontentSearch, JSON.stringify(data));
        });
        this.router.navigate(['/repository/content-home']);
    }

    backAction() {
        this.navservice.collapseSidebar = false;
        if (this.viewType == '1') {
            this.enterList();
        } else if (this.viewType == '2') {
            this.router.navigate(['/classroom/list-classroom']);
        } else if (['3', '4'].includes(this.viewType)) {
            this.router.navigate(['/class/list-class']);
        } else if (this.viewType == '5') {
            this.router.navigate(['/schedule/schedule-page']);
        }
    }

    enterList() {
        if (this.choosedData[0].grade == '') {
            this.grade = [];
        } else {
            this.grade = [this.choosedData[0].grade];
        }
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.choosedData[0].school_id,
            class_id: this.choosedData[0].class_id,
            grade: this.grade
        };
        this.classService.classDetails(data).subscribe((successData) => {
                this.enterListSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    enterListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.detailData = successData.ResponseObject;
            this.auth.setSessionData('studentlist', JSON.stringify(this.detailData[0].students));
            this.auth.setSessionData('studentlist1', JSON.stringify(this.detailData[0].students));
            this.auth.setSessionData('card-data', JSON.stringify(this.detailData));
            if (this.roleId == '4') {
                this.teacherType = this.auth.getSessionData('teacher_type');
            } else {
                this.teacherType = '1';
            }
            let classReturn: any;
            classReturn = this.auth.getSessionData('class-curriculum');
            if (classReturn == 'true') {
                if (this.detailData[0].classDate_status == '2' || this.detailData[0].classDate_status == '5') {
                    if (!this.manageClass) {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('readonly_data', 'true');
                    } else {
                        this.auth.removeSessionData('readonly_startdate');
                        this.auth.removeSessionData('readonly_data');
                    }
                    if (this.detailData[0].class_status != '1') {
                        this.router.navigate(['/class/create-class/edit']);
                    } else {
                        this.router.navigate(['/class/create-class/edit']);
                        this.auth.setSessionData('editclass', JSON.stringify(this.detailData));
                        this.auth.setSessionData('updatedStudent', 1);
                    }
                } else if (this.detailData[0].classDate_status == '4' && this.detailData[0].class_status == '0' && this.roleId != '2') {
                    this.router.navigate(['/class/list-class']);
                } else if (this.detailData[0].classDate_status == '4' && (this.detailData[0].class_status == '1' || this.roleId == '2')) {
                    if (!this.manageClass) {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('readonly_data', 'true');
                    } else {
                        this.auth.setSessionData('readonly_startdate', 'yes');
                        this.auth.setSessionData('classView', false);
                        console.log('2', 'enter complete class');
                    }
                    this.router.navigate(['/class/create-class/addEdit']);
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
                    this.router.navigate(['/class/create-class/edit']);
                }
            } else {
                this.auth.setSessionData('classView', true);
                this.router.navigate(['/class/list-class']);
            }
        }
    }

    editContentDetails() {
        this.dateDifferent();
        if (this.dateValidation == true) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                content_id: this.editData.content_id,
                class_id: this.classid,
                start_time: this.fromTime == null ? '' : this.fromTime,
                end_time: this.toTime == null ? '' : this.toTime,
                class_content_id: this.editData.class_content_id,
                auto_review: this.contentForm.controls.releaseScore.value,
                allow_workspace: this.contentForm.controls.workspace.value ? '1' : '0',
                allow_feedback: this.contentForm.controls.feedback.value ? '1' : '0',
                start_date: this.contentForm.controls.startdate.value == null ? '' : this.datePipe.transform(this.contentForm.controls.startdate.value.singleDate.jsDate, 'yyyy-MM-dd'),
                end_date: this.contentForm.controls.enddate.value == null ? '' : this.datePipe.transform(this.contentForm.controls.enddate.value.singleDate.jsDate, 'yyyy-MM-dd'),
            };
            this.classService.editContentDetail(data).subscribe((successData) => {
                    this.editSuccess(successData);
                },
                (error) => {
                    console.log(error);
                });
        } else {
            this.toastr.error('End Date Should be greater than Start Date ');
        }
    }

    editSuccess(successData) {
        if (successData.IsSuccess) {
            this.deleteDetail = successData.ResponseObject;
            this.fromTime = '';
            this.toTime = '';
            this.contentname = '';
            this.toastr.success(successData.ResponseObject);
            this.modalRef.close();

            // if (this.auth.getSessionData('resourceReload') == '1'){
            //     this.viewResource();
            // }else if (this.auth.getSessionData('resourceReload') == '2'){
            //     this.viewAssignment();
            // }else if (this.auth.getSessionData('resourceReload') == '3'){
            //     this.viewAssessment();
            // }
            this.curriculumService(this.viewtypehighlight);
        }
    }

    listDetails(event, type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: event.content_id,
            content_format: event.content_format,
            content_type: type == 'resources' ? '1' : type == 'assignments' ? '2' : '3',
            school_id: event.school_id,
            class_id: this.choosedData[0]?.class_id,
            teacher_id: this.choosedData[0]?.teacher_id
        };
        this.auth.setSessionData('editor', JSON.stringify(data));
        this.auth.setSessionData('backOption', 'available');
        this.viewType == '2' ? this.auth.setSessionData('redirect-toassign', '1') :
            this.auth.setSessionData('redirect-toassign', '2');
        this.viewer == 'student_preview' || this.viewer == 'teacher_preview' ? this.auth.setSessionData('preview', this.viewer)
            : this.auth.removeSessionData('preview');
        this.previewType == 'pdf' ? this.auth.setSessionData('preview_page', 'create_' + type) :
            this.auth.setSessionData('preview_page', 'text_' + type);
        this.router.navigate(['repository/preview']);
    }

    update(type) {
        if (type == 'content') {
            if (['1', '3', '4', '5'].includes(this.viewType)) {
                this.deleteContentDetails();
            } else if (this.viewType == '2') {
                // this.deleteBatchContentDetails(del);
            }
        } else {
            this.addTopicService();
        }
    }

    deleteContentDetails() {
        console.log(this.resourceList, 'RESOURCE');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            // content_id: this.deleteData.content_id,
            // class_id: this.classid,
            class_content_id: this.calledFrom == 'direct'
                ? [this.deleteData.class_content_id ?? this.deleteData.id ?? 0]
                : this.multiContentId
        };
        this.classService.deleteContentDetail(data).subscribe((successData) => {
                this.deleteSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    deleteSuccess(successData) {
        if (successData.IsSuccess) {
            this.deleteDetail = successData.ResponseObject;
            this.calledFrom != 'direct' ? this.multiContentId = [] : '';
            this.calledFrom = 'direct';
            this.modalRef.close();
            // if (this.auth.getSessionData('resourceReroute') == '1') {
            //   this.viewResource();
            // } else if (this.auth.getSessionData('resourceReroute') == '2') {
            //   this.viewAssignment();
            // } else if (this.auth.getSessionData('resourceReroute') == '3') {
            //   this.viewAssessment();
            // }
            this.toastr.success(successData.ResponseObject);
            this.curriculumService(this.viewtypehighlight);
        }
    }

    deleteBatchContentDetails(id) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.resourceList[id].content_id,
            status: '2',
            batch_id: this.choosedData.batch_id
        };
        this.classService.deleteBatchContent(data).subscribe((successData) => {
                this.deleteBatchSuccess(successData);
            },
            (error) => {
                console.log(error);
            });
    }

    deleteBatchSuccess(successData) {
        if (successData.IsSuccess) {
            this.deleteDetail = successData.ResponseObject;
            this.modalRef.close();
            // if (this.auth.getSessionData('resourceReroute') == '1') {
            //   this.viewBatchResource();
            // } else if (this.auth.getSessionData('resourceReroute') == '2') {
            //   this.viewBatchAssignment();
            // } else if (this.auth.getSessionData('resourceReroute') == '3') {
            //   this.viewBatchAssessment();
            // }
            this.curriculumService(this.viewtypehighlight);
        }
    }

    checkAllowZoomApi() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.choosedData[0]?.school_id
        };
        this.classService.zoomPermission(data).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.allowZoomApi = successData.ResponseObject[0].value == '0';
                }
            },
            (error) => {
                console.error(error);
            });
    }

    updateClass() {
        const validResourceLinks = this.linkData.filter((item) => item.link && item.link.trim() !== '');
        const checkForValidResourceLink = validResourceLinks.some((item) => item.name == '');
        if (!checkForValidResourceLink) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.choosedData[0].school_id,
                name: this.choosedData[0]?.class_name,
                start_date: this.choosedData[0]?.start_date != '0000-00-00' && this.choosedData[0]?.start_date ? this.choosedData[0]?.start_date : '',
                end_date: this.choosedData[0]?.end_date != '0000-00-00' && this.choosedData[0]?.end_date ? this.choosedData[0]?.end_date : '',
                start_time: '',
                end_time: '',
                grade: this.choosedData[0]?.grade ? [this.choosedData[0]?.grade] : [],
                batch_id: this.choosedData[0]?.batch_id ? this.choosedData[0]?.batch_id : [],
                subject: this.choosedData[0]?.subject ? [this.choosedData[0]?.subject] : [],
                status: this.choosedData[0]?.status,
                tags: this.choosedData[0]?.tags,
                video_link: validResourceLinks,
                students: this.choosedData[0]?.students ? this.choosedData[0]?.students : [],
                teacher_id: this.auth.getRoleId() == '4' ? this.auth.getUserId() : '0',
                meeting_link: this.choosedData[0]?.meeting_link,
                meeting_id: this.choosedData[0]?.meeting_id,
                passcode: this.choosedData[0]?.passcode,
                profile_url: this.choosedData[0]?.profile_url,
                profile_thumb_url: this.choosedData[0]?.profile_thumb_url,
                file_path: [],
                links: [],
                file_text: '',
                content_type: '1',
                content_id: [],
                content_format: '1',
                annotation: [],
                answers: [],
                allow_zoom_api: this.allowZoomApi ? '0' : '1',
                availabilityDate: this.choosedData[0]?.availabilityDate,
                individual_teacher: this.teacherType,
                telephone_number: this.choosedData[0]?.telephone_number,
                class_id: this.choosedData[0]?.class_id,
                class_status: this.choosedData[0]?.class_status,
                class_type: this.choosedData[0]?.class_type,
                notes: this.choosedData[0]?.notes,
                announcement_type: this.choosedData[0]?.announcement_type ? this.choosedData[0]?.announcement_type : '',
                class_code: this.choosedData[0]?.class_code
            };
            console.log(data, 'data serv');
            this.classService.editClasses(data).subscribe((successData: any) => {
                    if (successData.IsSuccess) {
                        this.linkData = validResourceLinks;
                        this.choosedData[0].video_link = this.linkData;
                        this.auth.setSessionData('card-data', JSON.stringify(this.choosedData));
                        this.toastr.success('Resource Link updated successfully');
                    }
                },
                (error) => {
                    console.error(error);
                });
        } else {
            this.linkData.forEach(item => item.error = item.name == '' && item.link != '');
            setTimeout(() => {
                const element = document.getElementById('otherLink');
                if (element) {
                    element.scrollIntoView({behavior: 'smooth', block: 'start'});
                }
            }, 100);
            this.toastr.error('Name is mandatory for each additional resource links');
        }
    }

    openFileExplorer() {
        document.getElementById('uploadFileInput').click();
    }

    encodePdfFileAsURL(event: any) {
        const images = [];
        const imageLength = event.target.files.length;
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const pdfDetails = event.target.files[i];
            console.log(pdfDetails, 'IMGDETAILS');
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
                console.log(pic, 'Type');
                if (pic[1] == 'pdf') {
                    if (imageLength == images.length) {
                        this.onUploadKYCFinishedpdf(images);
                    }
                } else {
                    this.toastr.error('PDF are the required file format');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }

    onUploadKYCFinishedpdf(getUrlEdu) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: getUrlEdu,
            uploadtype: 'content'
        };
        console.log(data, 'dataaa');

        this.common.fileUpload(data).subscribe(
            (successData) => {
                this.pdfuploadSuccess(successData);
                console.log(successData, 'successData');
            },
            (error) => {
                console.error(error, 'wrongFormat');
            }
        );
    }

    pdfuploadSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            console.log(this.pdfpath, 'This imagepath');
            const imagePath = successData.ResponseObject.imagepath;
            imagePath.forEach((item) => {
                item.image = item.image.split('.')[0];
                item.links = [];
            });
            this.pdfpath = [...this.pdfpath, ...imagePath];
            console.log(this.pdfpath, 'pdfPath');
        } else {
            this.toastr.error('Invalid File Format');
        }
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

    deletePDf(index) {
        console.log(this.pdfpath);
        this.pdfpath.splice(index, 1);
        this.modalRef.close('deleteDialog');
        this.modalRef.close();
    }

    deleteLink() {
        this.pdfpath[this.selectedDeletePdf.pdfIndex].links.splice(this.selectedDeletePdf.linkIndex, 1);
        this.modalRef.close('deleteDialog');
    }

    forkJoinService() {

        const topicRequest = this.auth.postService({
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0].class_id,
            topic: '',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            start_date: '',
            end_date: '',
            topic_id: this.multiTopicId,
            type: '2',
            status: '1'
        }, 'classes/updateTopic');

        const contentRequest = this.auth.postService({
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_content_id: this.multiContentId
        }, 'content/deleteContent');

        const calledArray = this.multiTopicId.length != 0 && this.multiContentId.length != 0 ? [topicRequest, contentRequest] :
            this.multiTopicId.length != 0 && this.multiContentId.length == 0 ? [topicRequest] : [contentRequest];
        forkJoin(calledArray).subscribe(results => {
            if (results.every(result => result['IsSuccess'])) {
                console.log(results, 'resilts');
                this.calledFrom = 'direct';
                this.modalRef.close();
                this.toastr.success(this.multiTopicId.length != 0 && this.multiContentId.length != 0 ?
                    'Topic and Content Deleted Successfully' : this.multiTopicId.length != 0 ? 'Topic Deleted Successfully'
                        : 'Content Deleted Successfully');
                this.multiContentId = [];
                this.multiTopicId = [];
                this.curriculumService(this.viewtypehighlight);
            }
        });
    }

}
