import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Navigation, Router} from '@angular/router';
import {forkJoin, Subscription} from 'rxjs';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClassService} from '../../../shared/service/class.service';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {CommonService} from '../../../shared/service/common.service';
import {ToastrService} from 'ngx-toastr';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {CreatorService} from '../../../shared/service/creator.service';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {IAngularMyDpOptions, IMyDateModel} from '@nodro7/angular-mydatepicker';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {StudentService} from 'src/app/shared/service/student.service';
import {ValidationService} from 'src/app/shared/service/validation.service';
import {EnvironmentService} from 'src/app/environment.service';
import {dateOptions, timeZone} from 'src/app/shared/data/config';

type CurriculumStatus = 'all' | 'in-progress' | 'completed' | 'not-started';
type ApiResponse<T = any> = {
    IsSuccess?: boolean;
    ResponseObject?: T;
    ResponseObject1?: T;
    ResponseCode?: string;
    Message?: string;
    ErrorObject?: any;
    Contentdetails?: any;
};

type LibraryContentItem = {
    content_id: string;
    name?: string;
    content_name?: string;
    subject_name?: string;
    content_format?: string;
    allow_autograde?: string;
    download?: string;
    [key: string]: any;
};

type LibraryDragPayload = {
    source: 'library';
    item: LibraryContentItem;
};

type AssignMode = 'library' | 'upload' | 'link' | 'scratch';

type AssignmentDraft = {
    id: string;
    content: LibraryContentItem;
    targetTopicId: string;
    targetTopicName: string;
    startDate?: string;
    endDate?: string;
    allowDownload: boolean;
    allowWorkspace: boolean;
    allowFeedback: boolean;
    autoReview: boolean;
    isSaving: boolean;
    error?: string;
};

type TimeStruct = { hour: number; minute: number; second: number };

@Component({
    selector: 'app-class-overview',
    templateUrl: './class-overview.component.html',
    styleUrls: ['./class-overview.component.scss']
})
export class ClassOverviewComponent implements OnInit, OnDestroy {
    isLoading = false;
    classId = '';
    classSummary: any;
    overview: any;
    curriculumStatus: CurriculumStatus = 'all';
    curriculumStatusOptions: Array<{ value: CurriculumStatus; label: string }> = [
        {value: 'all', label: 'All'},
        {value: 'in-progress', label: 'In-progress'},
        {value: 'completed', label: 'Completed'},
        {value: 'not-started', label: 'Not started'}
    ];
    curriculumItems: any[] = [];
    students: any[] = [];
    announcements: any[] = [];
    homeworkSubmissions: any[] = [];
    topics: any[] = [];
    resourceLinks: any[] = [];
    topicGroups: Array<any> = [];
    ungroupedCurriculum: any[] = [];
    isCurriculumLoading = false;
    topicForm: FormGroup;
    topicModalRef?: NgbModalRef;
    isEditingTopic = false;
    editingTopicId: string | number | null = null;
    readonly baseDropListId = 'overview-curriculum-drop';
    readonly libraryDropListId = 'overview-library-drop';
    assignMode: AssignMode = 'library';
    showAssignDrawer = false;
    isLibraryLoading = false;
    libraryItems: LibraryContentItem[] = [];
    libraryLoadError = '';
    librarySearchTerm = '';
    pendingAssignments: AssignmentDraft[] = [];
    uploadForm: FormGroup;
    resourceLinkForm: FormGroup;
    isFileUploading = false;
    uploadFileName = '';
    uploadPayload: any[] = [];
    uploadError = '';
    isDirectUploadSaving = false;
    resourceLinkError = '';
    isResourceLinkSaving = false;
    private draftCounter = 0;
    private libraryRequestSeq = 0;
    private readonly maxUploadSizeBytes = 25 * 1024 * 1024;
    public setDate = new Date().toLocaleString('en-US', {timeZone: timeZone.location});
    myDpOptions1: IAngularMyDpOptions = {
        dateRange: false,
        dateFormat: dateOptions.pickerFormat,
        firstDayOfWeek: 'su',
        disableUntil: {
            year: new Date(this.setDate).getFullYear(),
            month: new Date(this.setDate).getMonth() + 1,
            day: new Date(this.setDate).getDate() - 1
        },
        calendarAnimation: {
            in: 4,
            out: 4
        }
    };
    @ViewChild('createTopicModal', {static: true}) createTopicModal!: TemplateRef<any>;
    @ViewChild('addStudentModal', {static: true}) addStudentModal!: TemplateRef<any>;
    @ViewChild('addMultipleEmailDialog', {static: true}) addMultipleEmailDialog!: TemplateRef<any>;
    @ViewChild('announcementModal', {static: true}) announcementModal!: TemplateRef<any>;
    @ViewChild('teacherVersionModal', {static: true}) teacherVersionModal!: TemplateRef<any>;
    @ViewChild('editContentModal', {static: true}) editContentModal!: TemplateRef<any>;
    @ViewChild('deleteContentModal', {static: true}) deleteContentModal!: TemplateRef<any>;
    @ViewChild('directUploadInput', {static: false}) directUploadInput?: ElementRef<HTMLInputElement>;
    addStudentModalRef?: NgbModalRef;
    inviteByEmailModalRef?: NgbModalRef;
    announcementModalRef?: NgbModalRef;
    announcementForm: FormGroup;
    isPostingAnnouncement = false;
    announcementFormErrors = '';
    gradeData: any[] = [];
    isGradeListLoading = false;
    gradName: any;
    gradeValue: string[] = [];
    studentDataList: any[] = [];
    studentName: any[] = [];
    newlySelectedStuent: any[] = [];
    settings: any = {};
    isStudentListLoading = false;
    addStudentLoadError = '';
    addStudentError = '';
    isSubmittingStudents = false;
    addStudentEnabled = false;
    addStudentForm: FormGroup;
    studentEmailForm: FormGroup;
    studentAddedType: '0' | '1' = '0';
    effectiveStartDate: IMyDateModel | '' = '';
    showStudentEmailId = true;
    selectClassData: any;
    emailList: Array<{value: string; invalid: boolean}> = [];
    blukEmailValue: string[] = [];
    removable = true;
    validationEmail = false;
    separatorKeysCodes = [ENTER, COMMA];
    showBulkEmailLoader = false;
    teacherVersionUrl = '';
    teacherVersionModalRef?: NgbModalRef;
    editContentModalRef?: NgbModalRef;
    deleteContentModalRef?: NgbModalRef;
    pendingDeleteContent: any = null;
    isDeletingContent = false;
    editContentForm: FormGroup;
    editingContent: any = null;
    isSavingContentEdit = false;
    allowScore = false;
    isEssay: '0' | '1' = '0';
    contentFormat = '';
    showWorkspaceOptions = false;
    checkAutoRelease = true;
    private editingContentId = '';
    private readonly mediaBaseUrl: string;
    private subscriptions: Subscription[] = [];

    constructor(
        private route: ActivatedRoute,
        public router: Router,
        private classService: ClassService,
        public auth: AuthService,
        public commonData: CommonDataService,
        private commonService: CommonService,
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private modalService: NgbModal,
        private datePipe: DatePipe,
        private creatorService: CreatorService,
        private configService: ConfigurationService,
        private studentService: StudentService,
        private validationService: ValidationService,
        public env: EnvironmentService
    ) {
        this.topicForm = this.formBuilder.group({
            name: ['', Validators.required],
            startDate: [null],
            endDate: [null]
        });
        this.uploadForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: [''],
            topicId: [''],
            startDate: [''],
            endDate: [''],
            allowDownload: [true]
        });
        this.resourceLinkForm = this.formBuilder.group({
            title: ['', Validators.required],
            url: ['', Validators.required],
            description: [''],
            topicId: [''],
            startDate: [''],
            endDate: ['']
        });
        this.editContentForm = this.formBuilder.group({
            startDate: [''],
            endDate: [''],
            startTime: [''],
            endTime: [''],
            allowWorkspace: [false],
            allowFeedback: [false],
            autoReview: ['0']
        });
        this.announcementForm = this.formBuilder.group({
            message: ['', Validators.required]
        });
        this.setStudentForm();
        this.setStudentEmailForm();
        this.settings = {
            singleSelection: false,
            idField: 'student_id',
            textField: 'name_with_email',
            enableCheckAll: true,
            selectAllText: 'Select all',
            unSelectAllText: 'UnSelect all',
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 139,
            itemsShowLimit: 3,
            searchPlaceholderText: 'Search Student',
            noDataAvailablePlaceholderText: 'No data available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false
        };
        this.mediaBaseUrl = this.normalizeBaseUrl(this.configService.getimgUrl());
    }

    get canManageClass(): boolean {
        return !!this.auth.manageClass;
    }

    ngOnInit(): void {
        this.showStudentEmailId = typeof this.auth.showStudentEmailId === 'boolean' ? this.auth.showStudentEmailId : true;
        this.classId = this.route.snapshot.paramMap.get('id') || '';
        this.captureNavigationState(this.router.getCurrentNavigation());
        if (!this.overview) {
            this.restoreFromSession();
        }
        if (!this.overview) {
            this.loadClassOverview();
        } else {
            this.prepareViewModel();
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }

    onStatusChange(status: CurriculumStatus): void {
        this.curriculumStatus = status;
    }

    trackById(_: number, item: any): string | number {
        return item?.content_id || item?.id || item;
    }

    trackByTopic(_: number, topic: any): string | number {
        return topic?.topic_id || topic?.id || topic?.topic_name || topic?.name || topic?.topic || _;
    }

    getDropConnections(listId: string): string[] {
        const ids = [this.baseDropListId, ...this.topicGroups.map((group) => group.dropListId)];
        if (this.showAssignDrawer) {
            ids.push(this.libraryDropListId);
        }
        return ids.filter((id) => id && id !== listId);
    }

    openAssignDrawer(): void {
        this.showAssignDrawer = true;
        if (!this.libraryItems.length) {
            this.loadLibraryContents();
        }
    }

    closeAssignDrawer(): void {
        this.showAssignDrawer = false;
    }

    onLibrarySearch(term: string): void {
        this.librarySearchTerm = term;
        this.loadLibraryContents(term);
    }

    setAssignMode(mode: AssignMode): void {
        this.assignMode = mode;
        if (mode === 'library' && !this.libraryItems.length && !this.isLibraryLoading) {
            this.loadLibraryContents();
        }
        if (mode !== 'upload') {
            this.resetDirectUploadErrors(false);
        }
        if (mode !== 'link') {
            this.resourceLinkError = '';
        }
    }

    isAssignMode(mode: AssignMode): boolean {
        return this.assignMode === mode;
    }

    private loadLibraryContents(searchTerm: string = ''): void {
        const requestSeq = ++this.libraryRequestSeq;
        this.isLibraryLoading = true;
        this.libraryLoadError = '';
        const payload: any = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            search: searchTerm?.trim() || ''
        };
        const sub = this.creatorService.contentList(payload).subscribe({
            next: (response: ApiResponse<LibraryContentItem[]>) => {
                if (requestSeq !== this.libraryRequestSeq) {
                    return;
                }
                this.isLibraryLoading = false;
                const items = this.normalizeLibraryItems(this.extractLibraryItems(response));
                this.libraryItems = items;
            },
            error: () => {
                if (requestSeq !== this.libraryRequestSeq) {
                    return;
                }
                this.isLibraryLoading = false;
                this.libraryLoadError = 'Unable to load content library right now.';
            }
        });
        this.subscriptions.push(sub);
    }

    private extractLibraryItems(response: ApiResponse<LibraryContentItem[]>): LibraryContentItem[] {
        if (!response) {
            return [];
        }
        if (Array.isArray(response.ResponseObject)) {
            return response.ResponseObject;
        }
        if (Array.isArray(response.ResponseObject1)) {
            return response.ResponseObject1;
        }
        return [];
    }

    private normalizeLibraryItems(items: LibraryContentItem[]): LibraryContentItem[] {
        return (items || []).map((item) => ({
            ...item,
            content_name: item.content_name || item.name || 'Untitled content',
            subject_name: item.subject_name || item.subject || ''
        }));
    }

    triggerDirectUpload(): void {
        this.directUploadInput?.nativeElement.click();
    }

    onDirectUploadFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input?.files && input.files.length ? input.files[0] : null;
        if (!file) {
            return;
        }
        this.uploadError = '';
        if (file.size > this.maxUploadSizeBytes) {
            this.uploadError = 'File exceeds the 25 MB limit.';
            this.resetNativeFileInput();
            return;
        }
        const reader = new FileReader();
        this.isFileUploading = true;
        reader.onload = (loadEvent: ProgressEvent<FileReader>) => {
            const result = loadEvent.target?.result;
            if (!result || typeof result !== 'string') {
                this.uploadError = 'Unable to read the selected file.';
                this.isFileUploading = false;
                this.resetNativeFileInput();
                return;
            }
            const base64 = result.split(',')[1];
            if (!base64) {
                this.uploadError = 'Unsupported file format.';
                this.isFileUploading = false;
                this.resetNativeFileInput();
                return;
            }
            const payload = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                image_path: [{
                    image: base64,
                    size: file.size,
                    type: file.type,
                    name: file.name
                }],
                uploadtype: 'content'
            };
            const sub = this.commonService.fileUpload(payload).subscribe({
                next: (response: ApiResponse<any>) => {
                    this.isFileUploading = false;
                    this.resetNativeFileInput();
                    if (response?.IsSuccess && Array.isArray(response?.ResponseObject?.imagepath)) {
                        this.uploadPayload = response.ResponseObject.imagepath.map((item: any) => ({
                            ...item,
                            links: item?.links || []
                        }));
                        this.uploadFileName = file.name;
                        this.toastr.success(response?.ResponseObject?.message || 'File uploaded');
                    } else {
                        this.uploadError = response?.Message || 'Unable to upload file.';
                    }
                },
                error: () => {
                    this.isFileUploading = false;
                    this.resetNativeFileInput();
                    this.uploadError = 'Unable to upload file right now.';
                }
            });
            this.subscriptions.push(sub);
        };
        reader.onerror = () => {
            this.uploadError = 'Unable to read the selected file.';
            this.isFileUploading = false;
            this.resetNativeFileInput();
        };
        reader.readAsDataURL(file);
    }

    removeDirectUpload(): void {
        this.uploadPayload = [];
        this.uploadFileName = '';
        this.uploadError = '';
    }

    submitDirectUpload(): void {
        this.uploadError = '';
        if (this.uploadForm.invalid) {
            this.uploadForm.markAllAsTouched();
            return;
        }
        if (!this.uploadPayload.length) {
            this.uploadError = 'Upload a file before assigning.';
            return;
        }
        const {startDate, endDate} = this.uploadForm.value;
        if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
            this.uploadError = 'End date cannot be earlier than start date.';
            return;
        }
        const payload: any = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            name: (this.uploadForm.value.title || this.uploadFileName || '').trim(),
            description: (this.uploadForm.value.description || '').trim(),
            grade: this.resolveGradePayload(),
            subject: this.resolveSubjectPayload(),
            access: '1',
            file_path: this.uploadPayload,
            tags: [],
            profile_url: '',
            profile_thumb_url: '',
            content_format: '1',
            content_type: '1',
            status: '1',
            answers: [],
            file_text: '',
            links: [],
            annotation: [],
            assign: '0',
            classdetails: [],
            editor_type: '',
            download: this.uploadForm.value.allowDownload ? '1' : '0'
        };
        this.isDirectUploadSaving = true;
        const sub = this.creatorService.addAssignResourse(payload).subscribe({
            next: (response: ApiResponse<any>) => {
                this.isDirectUploadSaving = false;
                if (response?.IsSuccess && response?.Contentdetails) {
                    this.toastr.success('Content uploaded to the library. Assigning now...');
                    this.assignNewlyCreatedContent(response.Contentdetails, {
                        topicId: this.uploadForm.value.topicId || '',
                        startDate: this.uploadForm.value.startDate || '',
                        endDate: this.uploadForm.value.endDate || '',
                        allowDownload: !!this.uploadForm.value.allowDownload
                    });
                    this.uploadForm.reset({
                        title: '',
                        description: '',
                        topicId: '',
                        startDate: '',
                        endDate: '',
                        allowDownload: true
                    });
                    this.removeDirectUpload();
                } else {
                    this.uploadError = response?.Message || 'Unable to save content.';
                }
            },
            error: () => {
                this.isDirectUploadSaving = false;
                this.uploadError = 'Unable to save content.';
            }
        });
        this.subscriptions.push(sub);
    }

    submitResourceLink(): void {
        this.resourceLinkError = '';
        if (this.resourceLinkForm.invalid) {
            this.resourceLinkForm.markAllAsTouched();
            return;
        }
        const formValue = this.resourceLinkForm.value;
        if (formValue.startDate && formValue.endDate && new Date(formValue.endDate) < new Date(formValue.startDate)) {
            this.resourceLinkError = 'End date cannot be earlier than start date.';
            return;
        }
        const sanitizedUrl = this.sanitizeLink(formValue.url);
        const payload: any = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            name: formValue.title.trim(),
            description: (formValue.description || '').trim(),
            grade: this.resolveGradePayload(),
            subject: this.resolveSubjectPayload(),
            access: '1',
            file_path: [],
            tags: [],
            profile_url: '',
            profile_thumb_url: '',
            content_format: '2',
            content_type: '1',
            status: '1',
            answers: [],
            file_text: '',
            links: [{
                name: formValue.title.trim(),
                link: sanitizedUrl,
                description: (formValue.description || '').trim()
            }],
            annotation: [],
            assign: '0',
            classdetails: [],
            editor_type: '',
            download: '0'
        };
        this.isResourceLinkSaving = true;
        const sub = this.creatorService.addAssignResourse(payload).subscribe({
            next: (response: ApiResponse<any>) => {
                this.isResourceLinkSaving = false;
                if (response?.IsSuccess && response?.Contentdetails) {
                    this.toastr.success('Resource link saved. Assigning now...');
                    this.assignNewlyCreatedContent(response.Contentdetails, {
                        topicId: formValue.topicId || '',
                        startDate: formValue.startDate || '',
                        endDate: formValue.endDate || '',
                        allowDownload: false
                    });
                    this.resourceLinkForm.reset({
                        title: '',
                        url: '',
                        description: '',
                        topicId: '',
                        startDate: '',
                        endDate: ''
                    });
                } else {
                    this.resourceLinkError = response?.Message || 'Unable to save the resource link.';
                }
            },
            error: () => {
                this.isResourceLinkSaving = false;
                this.resourceLinkError = 'Unable to save the resource link.';
            }
        });
        this.subscriptions.push(sub);
    }

    startCreateFromScratch(type: 'assignment' | 'assessment'): void {
        this.persistEditContext();
        this.auth.setSessionData('textType', type);
        this.auth.setSessionData('assignedForm', 'class');
        this.auth.setSessionData('redirect-toassign', '2');
        this.router.navigate(['content-text-resource/text-assignment/add']);
    }

    private createAssignmentDraft(libraryItem: LibraryContentItem, topicId: string, topicName: string): AssignmentDraft {
        this.draftCounter += 1;
        return {
            id: `draft-${this.draftCounter}`,
            content: libraryItem,
            targetTopicId: topicId,
            targetTopicName: topicName,
            startDate: '',
            endDate: '',
            allowDownload: (libraryItem.download ?? '') === '1',
            allowWorkspace: false,
            allowFeedback: false,
            autoReview: (libraryItem.allow_autograde ?? '') === '1',
            isSaving: false
        };
    }

    private isLibraryPayload(payload: any): payload is LibraryDragPayload {
        return !!payload && payload.source === 'library' && !!payload.item;
    }

    private stageLibraryAssignment(payload: LibraryDragPayload, topicId: string, topicName: string): void {
        const normalizedTopicId = topicId?.toString() ?? '';
        const resolvedName = topicName || this.resolveTopicName(normalizedTopicId);
        const draft = this.createAssignmentDraft(payload.item, normalizedTopicId, resolvedName);
        this.pendingAssignments = [...this.pendingAssignments, draft];
        this.toastr.info(`Ready to assign "${draft.content.content_name}"`, 'Assignment staged', {
            timeOut: 2500
        });
    }

    removeDraft(draftId: string): void {
        this.pendingAssignments = this.pendingAssignments.filter((draft) => draft.id !== draftId);
    }

    onDraftTopicChange(draft: AssignmentDraft, topicId: string): void {
        const topicName = this.resolveTopicName(topicId);
        draft.targetTopicId = topicId;
        draft.targetTopicName = topicName;
    }

    private resolveTopicName(topicId: string): string {
        if (!topicId) {
            return 'Curriculum list';
        }
        const match = this.topics.find((topic) => (topic.topic_id ?? topic.id ?? '').toString() === topicId.toString());
        return match?.topic_name ?? match?.name ?? match?.topic ?? 'Selected topic';
    }

    matchesFilter(item: any): boolean {
        if (!item) {
            return false;
        }
        const status = this.resolveCurriculumStatus(item);
        switch (this.curriculumStatus) {
        case 'all':
            return true;
        case 'in-progress':
            return status === 'in-progress';
        case 'completed':
            return status === 'completed';
        case 'not-started':
            return status === 'not-started';
        default:
            return true;
        }
    }

    hasVisibleItems(collection: any[]): boolean {
        return Array.isArray(collection) && collection.some((item) => this.matchesFilter(item));
    }

    get topicDropListIds(): string[] {
        return this.topicGroups.map((group) => group.dropListId).filter((id) => !!id);
    }

    connectedDropListIds(excludeId?: string): string[] {
        return this.getDropConnections(excludeId ?? '');
    }

    openAddStudent(): void {
        if (!this.overview || !this.classId) {
            return;
        }
        this.selectClassData = this.buildSelectClassData();
        this.resetAddStudentState();
        if (!this.gradeData.length) {
            this.loadAddStudentGrades();
        }
        this.searchStudentList();
        this.addStudentModalRef = this.modalService.open(this.addStudentModal, {
            size: 'lg',
            backdrop: 'static',
            keyboard: false
        });
    }

    private buildSelectClassData(): any {
        const source = this.overview || this.classSummary || {};
        return {
            school_id: source.school_id || this.auth.getSessionData('school_id'),
            teacher_id: source.teacher_id || source.teacherId || this.auth.getUserId(),
            class_name: source.class_name || source.className || '',
            subject: source.subject || source.subject_name || '',
            start_date: source.start_date || source.startDate || '',
            end_date: source.end_date || source.endDate || '',
            start_time: source.start_time || source.startTime || '',
            end_time: source.end_time || source.endTime || '',
            meeting_link: source.meeting_link || '',
            meeting_id: source.meeting_id || '',
            passcode: source.passcode || '',
            class_code: source.class_code || source.classCode || '',
            status: source.status || '',
            class_id: this.classId
        };
    }

    removeStudent(student: any): void {
        const studentId = student?.user_id || student?.student_id;
        if (!studentId || !this.classId) {
            return;
        }
        const targetId = String(studentId);
        const confirmationMessage = `Remove ${student?.student_name || student?.name || 'this student'} from the class?`;
        if (!window.confirm(confirmationMessage)) {
            return;
        }
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.classId,
            student_id: studentId
        };
        this.isLoading = true;
        const sub = this.classService.deleteStudentList(payload).subscribe({
            next: (response: ApiResponse<string>) => {
                this.isLoading = false;
                if (response?.IsSuccess) {
                    this.students = this.students.filter((item) => {
                        const itemId = item?.user_id || item?.student_id;
                        return String(itemId) !== targetId;
                    });
                    this.toastr.success(response?.ResponseObject || 'Student removed');
                    this.loadClassOverview();
                } else {
                    this.toastr.error('Unable to remove student');
                }
            },
            error: () => {
                this.isLoading = false;
                this.toastr.error('Unable to remove student');
            }
        });
        this.subscriptions.push(sub);
    }

    submitTopic(): void {
        if (!this.classId) {
            return;
        }
        if (this.topicForm.invalid) {
            this.topicForm.markAllAsTouched();
            return;
        }
        const {name, startDate, endDate} = this.topicForm.value;
        if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
            this.toastr.error('End date cannot be earlier than start date');
            return;
        }
        const payload: any = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.classId,
            topic: name?.trim(),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            allow_workspace: '0',
            allow_feedback: '0'
        };
        if (startDate) {
            payload.start_date = this.datePipe.transform(startDate, 'yyyy-MM-dd');
        }
        if (endDate) {
            payload.end_date = this.datePipe.transform(endDate, 'yyyy-MM-dd');
        }
        if (this.isEditingTopic && this.editingTopicId) {
            payload.topic_id = this.editingTopicId;
            payload.type = '1';
            payload.status = '1';
        }
        this.isCurriculumLoading = true;
        const endpoint = this.isEditingTopic && this.editingTopicId ? 'classes/updateTopic' : 'classes/addTopic';
        const sub = this.classService.addTopic(payload, endpoint).subscribe({
            next: (response: ApiResponse<string>) => {
                this.isCurriculumLoading = false;
                if (response?.IsSuccess) {
                    this.toastr.success(response?.ResponseObject || (this.isEditingTopic ? 'Topic updated' : 'Topic created'));
                    this.topicModalRef?.close();
                    this.topicModalRef = undefined;
                    this.isEditingTopic = false;
                    this.editingTopicId = null;
                    this.fetchCurriculumData();
                } else {
                    this.toastr.error(response?.Message || `Unable to ${this.isEditingTopic ? 'update' : 'create'} topic`);
                }
            },
            error: () => {
                this.isCurriculumLoading = false;
                this.toastr.error(`Unable to ${this.isEditingTopic ? 'update' : 'create'} topic`);
            }
        });
        this.subscriptions.push(sub);
    }

    closeTopicModal(): void {
        this.topicModalRef?.dismiss();
        this.topicModalRef = undefined;
        this.isEditingTopic = false;
        this.editingTopicId = null;
    }

    openAnnouncementComposer(): void {
        if (!this.overview) {
            return;
        }
        this.auth.setSessionData('announcement-class', [this.classId]);
        this.router.navigate(['/announcement/list/add']);
    }

    openAnnouncementModal(): void {
        if (!this.overview || !this.classId) {
            return;
        }
        this.announcementForm.reset({
            message: ''
        });
        this.announcementFormErrors = '';
        this.isPostingAnnouncement = false;
        this.announcementModalRef = this.modalService.open(this.announcementModal, {
            size: 'lg',
            backdrop: 'static'
        });
    }

    closeAnnouncementModal(): void {
        this.announcementModalRef?.dismiss();
        this.announcementModalRef = undefined;
        this.announcementForm.reset();
        this.announcementFormErrors = '';
        this.isPostingAnnouncement = false;
    }

    submitAnnouncement(): void {
        if (this.announcementForm.invalid) {
            this.announcementFormErrors = 'Please enter a message';
            return;
        }

        const message = this.announcementForm.get('message')?.value?.trim();
        if (!message) {
            this.announcementFormErrors = 'Please enter a message';
            return;
        }

        this.isPostingAnnouncement = true;
        this.announcementFormErrors = '';

        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.classId,
            notes: message,
            status: '1'
        };

        // Using the class service to add class notes/announcement
        this.classService.getNotesList(payload).subscribe({
            next: (response: ApiResponse) => {
                this.isPostingAnnouncement = false;
                if (response?.IsSuccess) {
                    this.toastr.success('Announcement posted successfully');
                    this.closeAnnouncementModal();
                    // Reload class overview to get updated announcements
                    this.loadClassOverview();
                } else {
                    this.announcementFormErrors = response?.ErrorObject || 'Failed to post announcement';
                }
            },
            error: (error) => {
                this.isPostingAnnouncement = false;
                this.announcementFormErrors = 'Failed to post announcement. Please try again.';
                console.error('Error posting announcement:', error);
            }
        });
    }

    openAddTopic(): void {
        if (!this.classId) {
            return;
        }
        this.isEditingTopic = false;
        this.editingTopicId = null;
        this.topicForm.reset({
            name: '',
            startDate: null,
            endDate: null
        });
        this.topicModalRef = this.modalService.open(this.createTopicModal, {
            size: 'lg',
            backdrop: 'static',
            keyboard: false
        });
    }

    openEditTopic(topic: any): void {
        if (!topic) {
            return;
        }
        this.isEditingTopic = true;
        this.editingTopicId = topic?.topic_id ?? topic?.id ?? topic?.topicId ?? null;
        const name = (topic?.topic_name ?? topic?.name ?? topic?.topic ?? '').trim();
        this.topicForm.reset({
            name,
            startDate: this.prepareDateForInput(topic?.startRaw ?? topic?.start_date ?? topic?.from_date ?? ''),
            endDate: this.prepareDateForInput(topic?.endRaw ?? topic?.end_date ?? topic?.to_date ?? '')
        });
        this.topicModalRef = this.modalService.open(this.createTopicModal, {
            size: 'lg',
            backdrop: 'static',
            keyboard: false
        });
    }

    onUnassignedDrop(event: CdkDragDrop<any[]>): void {
        const payload = event.item?.data;
        if (!payload) {
            return;
        }
        if (this.isLibraryPayload(payload)) {
            this.stageLibraryAssignment(payload, '', 'Curriculum list');
            return;
        }
        const item = payload;
        const previousTopicId = item.topic_id || '';
        const previousTopicName = item.topic_name || '';
        if (event.previousContainer === event.container) {
            return;
        }
        this.setCurriculumTopic(item, '', '');
        this.insertCurriculumIntoTopic(item, '', event.currentIndex ?? 0);
        this.buildTopicGroups();
        this.persistCurriculumAssignment(item, '', previousTopicId, previousTopicName, event.currentIndex);
    }

    onTopicDrop(event: CdkDragDrop<any[]>, targetGroup: any): void {
        const payload = event.item?.data;
        if (!payload || !targetGroup) {
            return;
        }
        const targetTopicId = targetGroup?.topic_id ?? targetGroup?.id ?? targetGroup?.topicId ?? '';
        const targetTopicName = targetGroup?.topic_name ?? targetGroup?.name ?? targetGroup?.topic ?? '';
        if (this.isLibraryPayload(payload)) {
            this.stageLibraryAssignment(payload, targetTopicId?.toString() ?? '', targetTopicName);
            return;
        }
        const item = payload;
        const previousTopicId = item.topic_id || '';
        const previousTopicName = item.topic_name || '';

        if (event.previousContainer === event.container) {
            this.reorderCurriculumWithinTopic(targetTopicId, event.previousIndex, event.currentIndex);
            this.persistCurriculumAssignment(item, targetTopicId, previousTopicId, previousTopicName, event.currentIndex);
            return;
        }

        this.setCurriculumTopic(item, targetTopicId, targetTopicName);
        this.insertCurriculumIntoTopic(item, targetTopicId, event.currentIndex ?? 0);
        this.buildTopicGroups();
        this.persistCurriculumAssignment(item, targetTopicId, previousTopicId, previousTopicName, event.currentIndex);
    }

    openAddResourceLink(): void {
        this.persistEditContext();
        this.router.navigate(['/class/topicsAndCurriculum/3'], {queryParams: {section: 'links'}});
    }

    openHomeworkDetail(submission: any): void {
        if (!submission?.content_id) {
            return;
        }
        this.persistEditContext();
        this.auth.setSessionData('contentDetails', JSON.stringify(submission));
        this.router.navigate(['/class/topicsAndCurriculum/3'], {queryParams: {contentId: submission.content_id}});
    }

    hasContentActions(item: any): boolean {
        return !!item;
    }

    canGradeContent(item: any): boolean {
        const type = this.resolveContentType(item);
        return type === 'assignments' || type === 'assessments';
    }

    previewContent(item: any, mode: 'student' | 'teacher'): void {
        if (!item?.content_id) {
            this.toastr.error('Unable to open content preview.');
            return;
        }
        const type = this.resolveContentType(item);
        if (!type) {
            this.toastr.error('Unsupported content type for preview.');
            return;
        }
        const previewMode = mode === 'student' ? 'student_preview' : 'teacher_preview';
        if (mode === 'student') {
            this.auth.setSessionData('preview_type', 'yes');
            this.auth.setSessionData('showAnswer', 1);
        } else {
            this.auth.setSessionData('preview_type', 'no');
            this.auth.removeSessionData('showAnswer');
        }
        this.auth.setSessionData('return', type);
        this.auth.setSessionData('preview', previewMode);
        this.auth.setSessionData('backOption', 'available');
        this.auth.setSessionData('redirect-toassign', '2');

        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: item.content_id,
            content_format: item.content_format ?? '',
            content_type: this.resolveContentTypeCode(type),
            school_id: item.school_id || this.auth.getSessionData('school_id'),
            class_id: this.classId,
            teacher_id: item.teacher_id || this.overview?.teacher_id || this.auth.getUserId()
        };
        this.auth.setSessionData('editor', JSON.stringify(payload));
        const previewKey = `${this.isTextContent(item) ? 'text' : 'create'}_${type}`;
        this.auth.setSessionData('preview_page', previewKey);
        this.router.navigate(['repository/preview']);
    }

    openContentGrading(item: any): void {
        const type = this.resolveContentType(item);
        if (!type || type === 'resources') {
            this.toastr.info('Grading is only available for assignments and assessments.');
            return;
        }
        const returnKey = type === 'assessments' ? 'assessments' : 'assignments';
        this.auth.setSessionData('return', returnKey);
        this.auth.setSessionData('correction-return', returnKey);
        this.auth.setSessionData('classDetails', JSON.stringify(item));
        const route = returnKey === 'assessments' ? '/assessment-correction/correction-page' : '/assignment-correction/correction-page';
        this.router.navigate([route]);
    }

    openTeacherVersionPdf(item: any): void {
        const url = this.resolveTeacherVersionUrl(item?.teacher_version_path);
        if (!url) {
            this.toastr.error('Unable to load teacher version PDF.');
            return;
        }
        this.teacherVersionUrl = url;
        this.teacherVersionModalRef = this.modalService.open(this.teacherVersionModal, {size: 'xl', backdrop: 'static'});
    }

    openEditContent(item: any): void {
        if (!item) {
            return;
        }
        this.editingContent = item;
        this.editingContentId = item?.content_id ?? '';
        this.allowScore = item?.allow_autograde === '1' && item?.content_type !== '1' && item?.without_question !== 1;
        this.isEssay = (item?.is_essay ?? '0') === '1' ? '1' : '0';
        this.contentFormat = String(item?.content_format ?? '');
        this.showWorkspaceOptions = this.isTextContent(item);
        this.checkAutoRelease = true;
        const allowWorkspace = this.showWorkspaceOptions ? this.toBooleanFlag(item?.allow_workspace ?? item?.allowWorkspace) : false;
        const allowFeedback = this.showWorkspaceOptions ? this.toBooleanFlag(item?.allow_feedback ?? item?.allowFeedback) : false;
        this.editContentForm.reset({
            startDate: this.prepareDateForInput(item?.start_date ?? item?.startDate ?? ''),
            endDate: this.prepareDateForInput(item?.end_date ?? item?.endDate ?? ''),
            startTime: this.formatTimeForInput(item?.start_time ?? item?.startTime ?? ''),
            endTime: this.formatTimeForInput(item?.end_time ?? item?.endTime ?? ''),
            allowWorkspace,
            allowFeedback,
            autoReview: item?.auto_review ?? '0'
        });
        this.isSavingContentEdit = false;
        this.editContentModalRef = this.modalService.open(this.editContentModal, {size: 'lg', backdrop: 'static'});
        this.editContentModalRef.result.then(
            () => {
                this.editingContent = null;
                this.editingContentId = '';
                this.showWorkspaceOptions = false;
            },
            () => {
                this.editingContent = null;
                this.editingContentId = '';
                this.showWorkspaceOptions = false;
            }
        );
    }

    onAutoReviewChange(value: string): void {
        if (value === '1') {
            this.verifyAutoReleaseAvailability();
        }
    }

    saveContentEdits(): void {
        if (!this.editingContent) {
            return;
        }
        const formValue = this.editContentForm.value;
        const allowWorkspace = this.showWorkspaceOptions && !!formValue.allowWorkspace;
        const allowFeedback = this.showWorkspaceOptions && !!formValue.allowFeedback;
        const startDate = formValue.startDate ?? '';
        const endDate = formValue.endDate ?? '';
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            if (start > end) {
                this.toastr.error('End date should be after the start date.');
                return;
            }
        }
        const startTime = this.parseInputTime(formValue.startTime);
        const endTime = this.parseInputTime(formValue.endTime);
        if (startTime && endTime) {
            const startMinutes = startTime.hour * 60 + startTime.minute;
            const endMinutes = endTime.hour * 60 + endTime.minute;
            if (endMinutes <= startMinutes) {
                this.toastr.error('End time should be after the start time.');
                return;
            }
        }
        const classContentId = this.editingContent?.class_content_id ?? this.editingContent?.id ?? this.editingContent?.content_id;
        if (!classContentId) {
            this.toastr.error('Unable to determine content reference.');
            return;
        }
        const payload: any = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.editingContent?.content_id ?? '',
            class_id: this.classId,
            start_time: startTime ?? '',
            end_time: endTime ?? '',
            class_content_id: classContentId,
            auto_review: formValue.autoReview ?? '0',
            allow_workspace: allowWorkspace ? '1' : '0',
            allow_feedback: allowFeedback ? '1' : '0',
            start_date: startDate || '',
            end_date: endDate || ''
        };
        this.isSavingContentEdit = true;
        const sub = this.classService.editContentDetail(payload).subscribe({
            next: (response: ApiResponse<any>) => {
                this.isSavingContentEdit = false;
                if (response?.IsSuccess) {
                    const message = response?.ResponseObject || 'Content updated successfully.';
                    this.toastr.success(message);
                    this.editContentModalRef?.close();
                    this.editingContent = null;
                    this.editingContentId = '';
                    this.showWorkspaceOptions = false;
                    this.fetchCurriculumData();
                } else {
                    this.toastr.error(response?.Message || 'Unable to update content.');
                }
            },
            error: () => {
                this.isSavingContentEdit = false;
                this.toastr.error('Unable to update content.');
            }
        });
        this.subscriptions.push(sub);
    }

    openDeleteContent(item: any): void {
        if (!item) {
            return;
        }
        this.pendingDeleteContent = item;
        this.isDeletingContent = false;
        this.deleteContentModalRef = this.modalService.open(this.deleteContentModal, {size: 'md', backdrop: 'static'});
        this.deleteContentModalRef.result.then(
            () => {
                this.pendingDeleteContent = null;
                this.isDeletingContent = false;
            },
            () => {
                this.pendingDeleteContent = null;
                this.isDeletingContent = false;
            }
        );
    }

    confirmDeleteContent(): void {
        if (!this.pendingDeleteContent) {
            return;
        }
        const classContentId = this.pendingDeleteContent?.class_content_id ?? this.pendingDeleteContent?.id ?? this.pendingDeleteContent?.content_id;
        if (!classContentId) {
            this.toastr.error('Unable to determine content reference.');
            return;
        }
        const payload: any = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_content_id: [classContentId],
            content_id: this.pendingDeleteContent?.content_id ?? '',
            class_id: this.classId
        };
        this.isDeletingContent = true;
        const sub = this.classService.deleteContentDetail(payload).subscribe({
            next: (response: ApiResponse<any>) => {
                this.isDeletingContent = false;
                if (response?.IsSuccess) {
                    const message = response?.ResponseObject || 'Content deleted successfully.';
                    this.toastr.success(message);
                    this.deleteContentModalRef?.close();
                    this.pendingDeleteContent = null;
                    this.fetchCurriculumData();
                } else {
                    this.toastr.error(response?.Message || 'Unable to delete content.');
                }
            },
            error: () => {
                this.isDeletingContent = false;
                this.toastr.error('Unable to delete content.');
            }
        });
        this.subscriptions.push(sub);
    }

    moveContentToTopic(item: any, topic: any): void {
        const targetTopicId = topic?.topic_id ?? topic?.id ?? topic?.topicId ?? null;
        const targetTopicName = topic?.topic_name ?? topic?.name ?? topic?.topic ?? '';
        const previousTopicId = item?.topic_id ?? '';
        const previousTopicName = item?.topic_name ?? '';
        this.setCurriculumTopic(item, targetTopicId, targetTopicName);
        this.insertCurriculumIntoTopic(item, targetTopicId, Number.MAX_SAFE_INTEGER);
        this.buildTopicGroups();
        this.persistCurriculumAssignment(item, targetTopicId, previousTopicId, previousTopicName);
    }

    isSameTopic(item: any, topic: any): boolean {
        const itemTopicId = (item?.topic_id ?? '').toString();
        const targetTopicId = (topic?.topic_id ?? topic?.id ?? topic?.topicId ?? '').toString();
        return !!itemTopicId && itemTopicId === targetTopicId;
    }

    canMoveBetweenTopics(item: any, _group?: any): boolean {
        if (!this.topics?.length) {
            return false;
        }
        if (this.topics.length > 1) {
            return true;
        }
        const onlyTopicId = (this.topics[0]?.topic_id ?? this.topics[0]?.id ?? this.topics[0]?.topicId ?? '').toString();
        const itemTopicId = (item?.topic_id ?? '').toString();
        return itemTopicId !== onlyTopicId;
    }

    openContentReports(item: any): void {
        if (!item) {
            return;
        }
        const payload = {
            ...item,
            viewType: '3',
            manageClass: this.canManageClass
        };
        this.auth.setSessionData('report_type', 'all');
        this.auth.setSessionData('All-Reports', JSON.stringify(payload));
        this.auth.setSessionData('reportCalledFrom', 'class-detail');
        this.router.navigate(['/report/report']);
    }

    private captureNavigationState(navigation?: Navigation | null): void {
        const state = navigation?.extras?.state || history.state;
        if (state?.overview) {
            this.overview = state.overview;
        }
        if (state?.classSummary) {
            this.classSummary = state.classSummary;
        }
    }

    private restoreFromSession(): void {
        const cached = this.auth.getSessionData('card-data');
        if (cached) {
            try {
                const parsed = JSON.parse(cached);
                if (Array.isArray(parsed) && parsed.length) {
                    this.overview = parsed[0];
                }
            } catch (error) {
                console.error('Unable to parse cached class data', error);
            }
        }
    }

    private loadClassOverview(): void {
        const gradeId = this.classSummary?.grade_id || this.classSummary?.grade || '';
        if (!this.classId || !gradeId) {
            return;
        }
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.classId,
            grade: [gradeId],
            teacher_id: this.auth.getRoleId() === '4' ? this.auth.getUserId() : '0'
        };
        console.log('[ClassOverview] loadClassOverview payload', payload);
        this.isLoading = true;
        this.commonData.showLoader(true);
        const sub = this.classService.classDetails(payload).subscribe({
            next: (response: ApiResponse<any[]>) => {
                this.isLoading = false;
                this.commonData.showLoader(false);
                console.log('[ClassOverview] loadClassOverview response', response);
                if (response?.IsSuccess && Array.isArray(response?.ResponseObject) && response.ResponseObject.length) {
                    [this.overview] = response.ResponseObject;
                    this.prepareViewModel();
                    this.auth.setSessionData('card-data', JSON.stringify(response.ResponseObject));
                } else {
                    this.toastr.error('Unable to load class details');
                }
            },
            error: (error) => {
                this.isLoading = false;
                this.commonData.showLoader(false);
                console.error('[ClassOverview] loadClassOverview error', error);
                this.toastr.error('Unable to load class details');
            }
        });
        this.subscriptions.push(sub);
    }

    private prepareViewModel(): void {
        if (!this.overview) {
            return;
        }
        this.students = this.normalizeStudents(this.overview?.students || []);
        this.curriculumItems = this.normalizeCurriculum(this.overview?.curriculum || this.overview?.curriculum_list || []);
        this.homeworkSubmissions = this.normalizeHomework(this.overview?.homework_submissions || this.overview?.assignment_list || []);
        this.announcements = this.normalizeAnnouncements(this.overview?.announcement_list || this.overview?.announcements || []);
        this.topics = Array.isArray(this.overview?.topics) ? this.overview.topics : [];
        this.resourceLinks = Array.isArray(this.overview?.video_link) ? this.overview.video_link : (this.overview?.resource_links || []);
        this.buildTopicGroups();
        this.fetchCurriculumData();
    }

    resolveCurriculumStatus(item: any): CurriculumStatus {
        const status = item?.student_content_status || item?.status || item?.content_status;
        switch (status) {
        case '3':
        case '4':
        case '5':
        case '6':
        case 'completed':
            return 'completed';
        case '2':
        case 'in-progress':
        case 'pending':
            return 'in-progress';
        case '1':
        case 'not-started':
        case 'new':
            return 'not-started';
        default:
            return 'in-progress';
        }
    }

    getCurriculumStatusClass(item: any): string {
        const status = this.resolveCurriculumStatus(item) || 'in-progress';
        return `curriculum-card__status--${(status || 'in-progress').toLowerCase()}`;
    }

    private normalizeStudents(students: any[]): any[] {
        return students.map((student) => {
            const firstName = (student?.first_name || '').trim();
            const lastName = (student?.last_name || '').trim();
            const gradeDisplay = student?.grade_name || student?.grade || student?.gradeLevel || student?.grade_level || '';
            const studentId = student?.student_id || student?.user_id || student?.id || '';
            return {
                ...student,
                student_id: studentId,
                user_id: student?.user_id || studentId,
                displayName: [firstName, lastName].filter(Boolean).join(' ') || student?.student_name || student?.name || '',
                gradeDisplay
            };
        });
    }

    private normalizeCurriculum(items: any[]): any[] {
        return items.map((item) => ({
            ...item,
            class_content_id: item?.class_content_id ?? item?.id ?? item?.content_id,
            content_name: item?.content_name || item?.title || '',
            subject_name: item?.subject_name || item?.subject || '',
            due_date: item?.end_date || item?.due_date || item?.target_date || '',
            topic_id: item?.topic_id ?? item?.topicId ?? item?.topic_id_fk ?? item?.topic ?? '',
            topic_name: item?.topic_name ?? item?.topic ?? ''
        }));
    }

    private normalizeHomework(items: any[]): any[] {
        return items
            .map((item) => ({
                ...item,
                student_name: item?.student_name || item?.student || '',
                submitted_at: item?.submitted_at || item?.submission_date || item?.submitted_on || item?.created_at || ''
            }))
            .sort((a, b) => {
                const aDate = new Date(a.submitted_at).getTime();
                const bDate = new Date(b.submitted_at).getTime();
                return bDate - aDate;
            });
    }

    private normalizeAnnouncements(items: any[]): any[] {
        return items
            .map((item) => ({
                ...item,
                created_at: item?.created_at || item?.posted_at || ''
            }))
            .sort((a, b) => {
                const aDate = new Date(a.created_at).getTime();
                const bDate = new Date(b.created_at).getTime();
                return bDate - aDate;
            });
    }

    private fetchCurriculumData(): void {
        if (!this.classId) {
            return;
        }
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const schoolId = this.overview?.school_id || this.classSummary?.school_id || this.auth.getSessionData('school_id');
        const curriculumPayload = {
            platform: 'web',
            type: '0',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.classId,
            school_id: schoolId,
            timezone
        };
        const topicPayload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.classId,
            timezone
        };
        this.isCurriculumLoading = true;
        const sub = forkJoin({
            curriculum: this.classService.viewCurriculumList(curriculumPayload),
            topics: this.classService.topicList(topicPayload)
        }).subscribe({
            next: ({curriculum, topics}: { curriculum: ApiResponse<any[]>; topics: ApiResponse<any[]> }) => {
                const curriculumArray = this.extractResponseArray(curriculum, ['curriculum', 'curriculum_list', 'CurriculumList']);
                if (curriculumArray.length) {
                    this.curriculumItems = this.normalizeCurriculum(curriculumArray);
                }
                const topicsArray = this.extractResponseArray(topics, ['topics', 'topic_list', 'TopicList']);
                if (topicsArray.length) {
                    this.topics = topicsArray;
                }
                this.buildTopicGroups();
                this.isCurriculumLoading = false;
            },
            error: () => {
                this.isCurriculumLoading = false;
                this.toastr.error('Unable to load curriculum details');
            }
        });
        this.subscriptions.push(sub);
    }

    private buildTopicGroups(): void {
        const topics = this.ensureArray(this.topics);
        const curriculum = this.ensureArray(this.curriculumItems);
        curriculum.forEach((curriculumItem) => {
            curriculumItem.topic_id = curriculumItem?.topic_id ?? curriculumItem?.topicId ?? '';
            curriculumItem.topic_name = curriculumItem?.topic_name ?? curriculumItem?.topic ?? '';
        });

        const groupedKeys = new Set<string | number>();

        this.topicGroups = topics
            .map((topic, index) => {
                const topicId = topic?.topic_id ?? topic?.id ?? topic?.topicId ?? null;
                const topicName = (topic?.topic_name ?? topic?.name ?? topic?.topic ?? '').toString().trim().toLowerCase();

                const items = curriculum.filter((item) => {
                    const itemTopicId = item?.topic_id ?? item?.topicId ?? null;
                    const itemTopicName = (item?.topic_name ?? item?.topic ?? '').toString().trim().toLowerCase();
                    const matchesId = topicId !== null && itemTopicId !== null && topicId === itemTopicId;
                    const matchesName = topicName !== '' && itemTopicName !== '' && topicName === itemTopicName;
                    return matchesId || matchesName;
                });

                items.forEach((item) => {
                    const key = item?.content_id ?? item?.id ?? `${item?.content_name}-${item?.subject_name}`;
                    groupedKeys.add(key);
                });

                return {
                    ...topic,
                    items,
                    normalizedStart: this.normalizeDateValue(topic?.start_date ?? topic?.startDate ?? topic?.startdate ?? topic?.from_date ?? topic?.valid_from ?? ''),
                    normalizedEnd: this.normalizeDateValue(topic?.end_date ?? topic?.endDate ?? topic?.enddate ?? topic?.to_date ?? topic?.valid_to ?? ''),
                    startRaw: topic?.start_date ?? topic?.startDate ?? topic?.startdate ?? topic?.from_date ?? topic?.valid_from ?? '',
                    endRaw: topic?.end_date ?? topic?.endDate ?? topic?.enddate ?? topic?.to_date ?? topic?.valid_to ?? '',
                    dropListId: `topic-drop-${topicId ?? index}`
                };
            });

        this.topicGroups.sort((a, b) => {
            const aDate = a.startRaw ? new Date(a.startRaw).getTime() : Number.MAX_SAFE_INTEGER;
            const bDate = b.startRaw ? new Date(b.startRaw).getTime() : Number.MAX_SAFE_INTEGER;
            return aDate - bDate;
        });

        this.ungroupedCurriculum = curriculum.filter((item) => {
            const key = item?.content_id ?? item?.id ?? `${item?.content_name}-${item?.subject_name}`;
            return !groupedKeys.has(key);
        });
    }

    private ensureArray<T>(value: T | T[] | null | undefined): T[] {
        if (Array.isArray(value)) {
            return value;
        }
        if (!!value && typeof value === 'object' && 'length' in value) {
            return Array.from(value as any);
        }
        return [];
    }

    private extractResponseArray(response: ApiResponse<any>, candidates: Array<string | null>): any[] {
        if (!response) {
            return [];
        }
        if (Array.isArray(response.ResponseObject)) {
            return response.ResponseObject;
        }
        for (const candidate of candidates) {
            if (!candidate) {
                continue;
            }
            const candidateValue = (response as any)[candidate];
            if (Array.isArray(candidateValue)) {
                return candidateValue;
            }
            if (candidateValue && Array.isArray(candidateValue?.ResponseObject)) {
                return candidateValue.ResponseObject;
            }
        }
        if (Array.isArray(response.ResponseObject1)) {
            return response.ResponseObject1;
        }
        return [];
    }

    private normalizeDateValue(raw: any): string | null {
        if (!raw || raw === '0000-00-00') {
            return null;
        }
        const date = raw instanceof Date ? raw : new Date(raw);
        if (isNaN(date.getTime())) {
            return null;
        }
        return this.datePipe.transform(date, 'MMM d, y');
    }

    private prepareDateForInput(raw: any): string | null {
        if (!raw || raw === '0000-00-00') {
            return null;
        }
        const date = raw instanceof Date ? raw : new Date(raw);
        if (isNaN(date.getTime())) {
            return null;
        }
        return this.datePipe.transform(date, 'yyyy-MM-dd');
    }

    private resolveContentType(item: any): 'resources' | 'assignments' | 'assessments' | null {
        const rawType = String(item?.content_type ?? item?.contentType ?? item?.type ?? '').trim().toLowerCase();
        if (!rawType) {
            return null;
        }
        if (rawType === '1' || rawType === 'resource' || rawType === 'resources') {
            return 'resources';
        }
        if (rawType === '2' || rawType === 'assignment' || rawType === 'assignments') {
            return 'assignments';
        }
        if (rawType === '3' || rawType === 'assessment' || rawType === 'assessments' || rawType === 'assesment') {
            return 'assessments';
        }
        return null;
    }

    private resolveContentTypeCode(type: 'resources' | 'assignments' | 'assessments'): '1' | '2' | '3' {
        switch (type) {
        case 'resources':
            return '1';
        case 'assignments':
            return '2';
        case 'assessments':
        default:
            return '3';
        }
    }

    private isTextContent(item: any): boolean {
        const format = String(item?.content_format ?? '').trim().toLowerCase();
        return format === '3' || format === 'text' || format === 'txt';
    }

    private formatTimeForInput(raw: any): string {
        const parsed = this.parseTimeString(raw);
        if (!parsed) {
            return '';
        }
        const hour = parsed.hour.toString().padStart(2, '0');
        const minute = parsed.minute.toString().padStart(2, '0');
        return `${hour}:${minute}`;
    }

    private parseInputTime(value: any): TimeStruct | null {
        return this.parseTimeString(value);
    }

    private parseTimeString(raw: any): TimeStruct | null {
        if (!raw && raw !== 0) {
            return null;
        }
        if (typeof raw === 'object' && raw && typeof raw.hour === 'number' && typeof raw.minute === 'number') {
            return {
                hour: Math.max(0, Math.min(23, raw.hour)),
                minute: Math.max(0, Math.min(59, raw.minute)),
                second: typeof raw.second === 'number' ? Math.max(0, Math.min(59, raw.second)) : 0
            };
        }
        if (typeof raw !== 'string') {
            return null;
        }
        const trimmed = raw.trim();
        if (!trimmed) {
            return null;
        }
        const meridiemMatch = trimmed.match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?$/i);
        if (meridiemMatch) {
            let hour = parseInt(meridiemMatch[1], 10);
            const minute = parseInt(meridiemMatch[2], 10);
            const meridiem = meridiemMatch[3]?.toUpperCase();
            if (meridiem === 'PM' && hour < 12) {
                hour += 12;
            }
            if (meridiem === 'AM' && hour === 12) {
                hour = 0;
            }
            hour = Math.max(0, Math.min(23, hour));
            return {hour, minute: Math.max(0, Math.min(59, minute)), second: 0};
        }
        const twentyFourMatch = trimmed.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/);
        if (twentyFourMatch) {
            const hour = Math.max(0, Math.min(23, parseInt(twentyFourMatch[1], 10)));
            const minute = Math.max(0, Math.min(59, parseInt(twentyFourMatch[2], 10)));
            const second = twentyFourMatch[3] ? Math.max(0, Math.min(59, parseInt(twentyFourMatch[3], 10))) : 0;
            return {hour, minute, second};
        }
        return null;
    }

    private toBooleanFlag(value: any): boolean {
        if (typeof value === 'boolean') {
            return value;
        }
        if (typeof value === 'number') {
            return value === 1;
        }
        const normalized = String(value ?? '').trim().toLowerCase();
        return ['1', 'true', 'yes', 'y'].includes(normalized);
    }

    private resolveTeacherVersionUrl(data: any): string | null {
        if (!data) {
            return null;
        }
        const converted = this.commonService.convertBase64(data);
        const candidates: Array<string | null> = [];
        if (Array.isArray(converted) && converted.length) {
            converted.forEach((item) => {
                if (typeof item === 'string') {
                    candidates.push(item);
                } else if (item?.original_image_url) {
                    candidates.push(item.original_image_url);
                }
            });
        } else if (converted && typeof converted === 'object') {
            if (converted.original_image_url) {
                candidates.push(converted.original_image_url);
            }
        } else if (typeof converted === 'string') {
            candidates.push(converted);
        }
        if (typeof data === 'string') {
            candidates.push(data);
        }
        for (const candidate of candidates) {
            if (!candidate) {
                continue;
            }
            const url = this.buildMediaUrl(candidate);
            if (url) {
                return url;
            }
        }
        return null;
    }

    private verifyAutoReleaseAvailability(): void {
        if (!this.editingContentId) {
            return;
        }
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: this.editingContentId
        };
        const sub = this.creatorService.releaseScoreCheck(payload).subscribe({
            next: (response: ApiResponse<any>) => {
                if (!response?.IsSuccess) {
                    this.revertAutoReviewSelection();
                }
            },
            error: () => {
                this.revertAutoReviewSelection();
            }
        });
        this.subscriptions.push(sub);
    }

    private revertAutoReviewSelection(): void {
        this.checkAutoRelease = false;
        setTimeout(() => {
            this.editContentForm.patchValue({autoReview: '0'}, {emitEvent: false});
            this.checkAutoRelease = true;
        }, 3000);
    }

    private normalizeBaseUrl(url: string | null | undefined): string {
        if (!url) {
            return '';
        }
        return url.endsWith('/') ? url.slice(0, -1) : url;
    }

    private buildMediaUrl(path: string | null | undefined): string {
        if (!path) {
            return '';
        }
        const trimmed = path.trim();
        if (!trimmed) {
            return '';
        }
        if (/^https?:\/\//i.test(trimmed)) {
            return trimmed;
        }
        if (!this.mediaBaseUrl) {
            return trimmed;
        }
        return `${this.mediaBaseUrl}/${trimmed.replace(/^\/+/, '')}`;
    }

    assignDraft(draft: AssignmentDraft): void {
        if (draft.isSaving) {
            return;
        }
        draft.error = '';
        draft.isSaving = true;

        const startDate = draft.startDate ? this.formatDateForPayload(draft.startDate) : '';
        const endDate = draft.endDate ? this.formatDateForPayload(draft.endDate) : '';
        const topicId = draft.targetTopicId || '';
        const batchId = this.resolveBatchId();

        const classDetails = [{
            content_id: draft.content.content_id,
            class_id: this.classId,
            start_date: startDate,
            end_date: endDate,
            start_time: '',
            end_time: '',
            all_student: '1',
            student_id: '',
            batch_id: '',
            auto_review: draft.autoReview ? '1' : '0',
            notes: '',
            download: draft.allowDownload ? '1' : '0',
            allow_feedback: draft.allowFeedback ? '1' : '0',
            show_timer: '0',
            allow_workspace: draft.allowWorkspace ? '1' : '0',
            topic_id: topicId
        }];

        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            assign: '1',
            school_id: this.auth.getSessionData('school_id'),
            classdetails: classDetails,
            classroomDetails: [{
                content_id: draft.content.content_id,
                batch_id: batchId,
                start_date: '',
                end_date: '',
                start_time: '',
                end_time: ''
            }],
            editor_type: ''
        };

        const sub = this.creatorService.addAssignResourse(payload).subscribe({
            next: (response: ApiResponse<any>) => {
                draft.isSaving = false;
                if (response?.IsSuccess) {
                    this.toastr.success(`Assigned "${draft.content.content_name}" to the class`);
                    this.pendingAssignments = this.pendingAssignments.filter((item) => item.id !== draft.id);
                    this.fetchCurriculumData();
                } else {
                    draft.error = response?.Message || 'Unable to assign content right now.';
                    this.toastr.error(draft.error);
                }
            },
            error: () => {
                draft.isSaving = false;
                draft.error = 'Unable to assign content right now.';
                this.toastr.error(draft.error);
            }
        });
        this.subscriptions.push(sub);
    }

    private assignNewlyCreatedContent(contentDetails: any, options: {topicId: string; startDate?: string; endDate?: string; allowDownload?: boolean}): void {
        if (!contentDetails) {
            this.toastr.warning('Content saved but could not be assigned automatically. Please assign it from the library.');
            return;
        }
        const libraryItem: LibraryContentItem = {
            content_id: contentDetails.content_id || contentDetails.id || '',
            content_name: contentDetails.content_name || contentDetails.name || 'Untitled content',
            subject_name: contentDetails.subject_name || contentDetails.subject || '',
            content_format: contentDetails.content_format || '1',
            allow_autograde: contentDetails.allow_autograde,
            download: options.allowDownload ? '1' : '0'
        };
        if (!libraryItem.content_id) {
            this.toastr.warning('Content saved but could not be assigned automatically. Please assign it from the library.');
            return;
        }
        const topicId = options.topicId || '';
        const topicName = this.resolveTopicName(topicId);
        const draft = this.createAssignmentDraft(libraryItem, topicId, topicName);
        draft.startDate = options.startDate || '';
        draft.endDate = options.endDate || '';
        draft.allowDownload = options.allowDownload ?? true;
        draft.allowWorkspace = false;
        draft.allowFeedback = false;
        draft.autoReview = false;
        this.pendingAssignments = [...this.pendingAssignments, draft];
        this.assignDraft(draft);
    }

    private resolveGradePayload(): string[] {
        const grade = this.overview?.grade_id ?? this.overview?.grade ?? this.classSummary?.grade_id ?? '';
        if (!grade) {
            return [];
        }
        if (Array.isArray(grade)) {
            return grade.filter((item) => item !== null && item !== undefined && item !== '').map((value) => value.toString());
        }
        return [grade.toString()];
    }

    private resolveSubjectPayload(): string[] {
        const subject = this.overview?.subject_id ?? this.overview?.subject ?? this.classSummary?.subject_id ?? '';
        if (!subject) {
            return [];
        }
        if (Array.isArray(subject)) {
            return subject.filter((item) => item !== null && item !== undefined && item !== '').map((value) => value.toString());
        }
        return [subject.toString()];
    }

    private sanitizeLink(url: string): string {
        if (!url) {
            return '';
        }
        try {
            const normalized = new URL(url, url.startsWith('http://') || url.startsWith('https://') ? undefined : 'https://');
            return normalized.href;
        } catch {
            return url;
        }
    }

    private resetNativeFileInput(): void {
        if (this.directUploadInput?.nativeElement) {
            this.directUploadInput.nativeElement.value = '';
        }
    }

    private resetDirectUploadErrors(clearFile: boolean): void {
        this.uploadError = '';
        if (clearFile) {
            this.removeDirectUpload();
        }
    }

    private formatDateForPayload(value: string | IMyDateModel | '' | null | undefined): string {
        if (!value) {
            return '';
        }
        if (typeof value === 'string') {
            const date = new Date(value);
            if (isNaN(date.getTime())) {
                return '';
            }
            return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
        }
        const jsDate = value?.singleDate?.jsDate;
        if (jsDate) {
            return this.datePipe.transform(jsDate, 'yyyy-MM-dd') || '';
        }
        return '';
    }

    private resolveBatchId(): string {
        const fromOverview = this.overview?.batch_id || this.overview?.batchId;
        const fromSummary = this.classSummary?.batch_id;
        return fromOverview || fromSummary || '';
    }

    closeAddStudentModal(): void {
        this.addStudentModalRef?.dismiss();
        this.addStudentModalRef = undefined;
        this.resetAddStudentState();
    }

    addStudentClicked(): void {
        this.addStudentEnabled = !this.addStudentEnabled;
        if (this.addStudentEnabled) {
            this.setStudentForm();
        }
    }

    getGradeValue(event: any): void {
        if (!event || (Array.isArray(event) && !event.length)) {
            this.gradName = event;
            this.gradeValue = [];
            this.studentDataList = [];
            this.studentName = [];
            this.newlySelectedStuent = [];
            this.addStudentLoadError = '';
            this.searchStudentList();
            return;
        }
        const selections = Array.isArray(event) ? event : [event];
        this.gradName = selections;
        this.gradeValue = selections
            .map((item: any) => item?.grade_id ?? item)
            .filter((value) => value !== null && value !== undefined && value !== '')
            .map((value) => value.toString());
        this.searchStudentList();
    }

    searchStudentList(): void {
        this.isStudentListLoading = true;
        this.addStudentLoadError = '';
        const existingIds = new Set(
            this.students.map((student) => String(student?.user_id || student?.student_id || student?.id || ''))
        );
        const payload: any = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            end_date: this.formatDateForPayload(this.overview?.end_date || this.overview?.endDate || '')
        };
        if (this.gradeValue.length) {
            payload.grade_id = this.gradeValue;
        }
        const sub = this.classService.searchList(payload).subscribe({
            next: (response: ApiResponse<any[]>) => {
                this.isStudentListLoading = false;
                if (response?.IsSuccess && Array.isArray(response.ResponseObject)) {
                    const options = response.ResponseObject
                        .filter((student) => {
                            const studentId = String(student?.student_id || student?.user_id || '');
                            return !!studentId && !existingIds.has(studentId);
                        })
                        .map((student) => this.prepareStudentOption(student))
                        .sort((a, b) => a.name_with_email.localeCompare(b.name_with_email));
                    this.studentDataList = options;
                    this.studentName = this.studentName
                        .filter((item) => options.some((option) => option.student_id === item.student_id));
                    this.newlySelectedStuent = [...this.studentName];
                    if (!options.length) {
                        this.addStudentLoadError = 'No eligible students found for the selected grade.';
                    }
                } else {
                    this.studentDataList = [];
                    this.addStudentLoadError = response?.Message || 'Unable to load students right now.';
                }
            },
            error: () => {
                this.isStudentListLoading = false;
                this.studentDataList = [];
                this.addStudentLoadError = 'Unable to load students right now.';
            }
        });
        this.subscriptions.push(sub);
    }

    onItemSelect(event: any, select: 'single' | 'all'): void {
        if (select === 'all' && Array.isArray(event)) {
            event.forEach((item) => this.addSelectedStudent(item));
        } else {
            this.addSelectedStudent(event);
        }
        this.studentName = [...this.newlySelectedStuent];
    }

    onDeSelect(event: any): void {
        if (!event) {
            return;
        }
        this.newlySelectedStuent = this.newlySelectedStuent.filter((item) => item.student_id !== event.student_id);
        this.studentName = [...this.newlySelectedStuent];
    }

    onDeSelectAll(): void {
        this.newlySelectedStuent = [];
        this.studentName = [];
    }

    submitClass(type: number = 1): void {
        if (!this.overview || !this.classId) {
            return;
        }
        this.addStudentError = '';
        if (!this.newlySelectedStuent.length) {
            this.addStudentError = 'Please Select Student';
            this.toastr.error(this.addStudentError);
            return;
        }
        if (this.studentAddedType === '1' && !this.effectiveStartDate) {
            this.addStudentError = 'Please select effective start date';
            this.toastr.error(this.addStudentError);
            return;
        }
        const selectedStudents = this.newlySelectedStuent
            .map((student) => {
                const studentId = student?.student_id || student?.user_id || student?.id;
                if (!studentId) {
                    return null;
                }
                return {
                    student_id: studentId,
                    user_id: student?.user_id || studentId,
                    student_class_type: student?.student_class_type || '1',
                    first_name: student?.first_name || '',
                    last_name: student?.last_name || '',
                    email_id: student?.email_id || student?.email || '',
                    grade_id: student?.grade_id || student?.gradeId || student?.grade || '',
                    contact_no: student?.contact_no || student?.mobile || ''
                };
            })
            .filter((student) => !!student);
        if (!selectedStudents.length) {
            this.addStudentError = 'Unable to resolve selected students.';
            this.toastr.error(this.addStudentError);
            return;
        }
        const regularStart = this.selectClassData?.start_date || this.overview?.start_date || this.overview?.startDate || '';
        const regularEnd = this.selectClassData?.end_date || this.overview?.end_date || this.overview?.endDate || '';
        const formattedEffective = this.formatDateForPayload(this.effectiveStartDate);
        const startDate = this.studentAddedType === '0' ? regularStart : formattedEffective;
        const endDate = this.studentAddedType === '0' ? regularEnd : formattedEffective;
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.selectClassData?.school_id || this.auth.getSessionData('school_id'),
            teacher_id: this.selectClassData?.teacher_id || this.auth.getUserId(),
            class_name: this.selectClassData?.class_name || this.overview?.class_name || '',
            subject: this.selectClassData?.subject || this.overview?.subject || this.overview?.subject_name || '',
            start_date: this.formatDateForPayload(startDate || ''),
            end_date: this.formatDateForPayload(endDate || ''),
            start_time: this.selectClassData?.start_time || this.overview?.start_time || this.overview?.startTime || '',
            end_time: this.selectClassData?.end_time || this.overview?.end_time || this.overview?.endTime || '',
            grade: this.gradName === undefined ? '' : this.gradName,
            meeting_link: this.selectClassData?.meeting_link || '',
            meeting_id: this.selectClassData?.meeting_id || '',
            passcode: this.selectClassData?.passcode || '',
            class_code: this.selectClassData?.class_code || '',
            status: this.selectClassData?.status || '',
            class_id: this.classId,
            students: selectedStudents,
            is_makeup: this.studentAddedType ?? '0'
        };
        console.log('[ClassOverview] submitClass payload', payload);
        this.isSubmittingStudents = true;
        const sub = this.classService.submit(payload).subscribe({
            next: (response: ApiResponse<any>) => {
                this.isSubmittingStudents = false;
                console.log('[ClassOverview] submitClass response', response);
                if (response?.IsSuccess) {
                    const successMessage = Array.isArray(response?.ResponseObject) && response.ResponseObject.length
                        ? response.ResponseObject[0]
                        : (response?.ResponseObject || 'Student(s) added to class');
                    this.toastr.success(successMessage);
                    this.closeAddStudentModal();
                    this.loadClassOverview();
                } else {
                    this.addStudentError = response?.Message || response?.ErrorObject || 'Unable to add students right now.';
                    if (this.addStudentError) {
                        this.toastr.error(this.addStudentError);
                    }
                }
            },
            error: (error) => {
                this.isSubmittingStudents = false;
                console.error('[ClassOverview] submitClass error', error);
                this.addStudentError = 'Unable to add students right now.';
                this.toastr.error(this.addStudentError);
            }
        });
        this.subscriptions.push(sub);
    }

    addstudent(): void {
        if (!this.addStudentForm?.valid) {
            this.validationService.validateAllFormFields(this.addStudentForm);
            this.toastr.error('Please Fill All The Mandatory Fields');
            return;
        }
        const addresslist = [
            {address1: '', address2: '', city: '', state: '', country: '', postal_code: '', address_type: '2'},
            {address1: '', address2: '', city: '', state: '', country: '', postal_code: '', address_type: '3'}
        ];
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            first_name: this.addStudentForm.controls.first_name.value,
            last_name: this.addStudentForm.controls.last_name.value,
            gender: '',
            birthday: '',
            school_id: this.auth.getSessionData('school_id'),
            school_idno: '',
            grade_id: this.addStudentForm.controls.grade.value ?? '',
            email_id: this.addStudentForm.controls.email_id.value,
            mobile: [],
            batch_id: '',
            registration_date: '',
            dropped_date: '',
            address: addresslist,
            parent1_firstname: '',
            parent1_lastname: '',
            parent2_firstname: '',
            parent2_lastname: '',
            parent1_email_ids: [],
            parent2_email_ids: [],
            profile_url: '',
            profile_thumb_url: '',
            status: '1'
        };
        const sub = this.studentService.studentAdd(payload).subscribe({
            next: (response: ApiResponse<any>) => {
                if (response?.IsSuccess) {
                    this.toastr.success(response?.ResponseObject || 'Student added', 'Student');
                    this.addStudentEnabled = false;
                    this.setStudentForm();
                    this.searchStudentList();
                } else {
                    this.toastr.error(response?.ErrorObject || 'Unable to add student', 'Student');
                }
            },
            error: () => {
                this.toastr.error('Unable to add student right now.', 'Student');
            }
        });
        this.subscriptions.push(sub);
    }

    shareEmail(value: any, calledForm?: string): void {
        if (calledForm === 'addStudent') {
            this.addStudentModalRef?.close();
        }
        this.selectClassData = value || this.buildSelectClassData();
        this.emailList = [];
        this.blukEmailValue = [];
        this.validationEmail = false;
        this.setStudentEmailForm();
        this.inviteByEmailModalRef = this.modalService.open(this.addMultipleEmailDialog, {
            size: 'lg',
            backdrop: 'static',
            keyboard: false
        });
    }

    closeInviteEmailModal(): void {
        this.setStudentEmailForm();
        this.inviteByEmailModalRef?.close();
    }

    add(event: any): void {
        const value = (event?.value || '').trim();
        const entries = value ? value.split(/[ ,]+/) : [];
        const tokens = entries.length ? entries : value ? [value] : [];
        tokens.forEach((token: string) => {
            if (!token) {
                return;
            }
            if (this.validateEmail(token)) {
                this.emailList.push({value: token, invalid: false});
            } else {
                this.emailList.push({value: token, invalid: true});
                this.studentEmailForm.controls['emails'].setErrors({incorrectEmail: true});
            }
        });
        if (event?.input) {
            event.input.value = '';
        }
        this.emailList = this.removeDuplicates(this.emailList, 'value');
        this.validationEmail = this.emailList.every((item) => !item.invalid);
    }

    removeEmail(item: any): void {
        this.emailList = this.emailList.filter((email) => email !== item);
        this.validationEmail = this.emailList.every((entry) => !entry.invalid);
    }

    bulkMail(): void {
        const isMakeup = !!this.studentEmailForm.controls.is_makeup.value;
        const startDateControl = this.studentEmailForm.controls.start_date.value;
        if (!this.emailList.length) {
            this.toastr.error('Please enter Email-Id');
            return;
        }
        if (isMakeup && !startDateControl) {
            this.toastr.error('Please Enter MakeUp Class Start Date');
            this.validationService.validateAllFormFields(this.studentEmailForm);
            return;
        }
        if (!this.validationEmail) {
            this.toastr.error('Please fix invalid email IDs');
            return;
        }
        this.showBulkEmailLoader = true;
        this.blukEmailValue = this.emailList.map((item) => item.value);
        const formattedDate = isMakeup ? this.formatDateForPayload(startDateControl) : '';
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.selectClassData?.class_id || this.classId,
            student_id: [],
            email_id: this.blukEmailValue,
            message: this.studentEmailForm.controls.message.value,
            is_makeup: isMakeup ? '1' : '0',
            start_date: formattedDate,
            end_date: formattedDate
        };
        const sub = this.classService.bulkMail(payload).subscribe({
            next: (response: ApiResponse<any>) => {
                this.showBulkEmailLoader = false;
                if (response?.IsSuccess) {
                    this.toastr.success(response?.ResponseObject || 'Invitation sent');
                    this.closeInviteEmailModal();
                } else {
                    this.blukEmailValue = [];
                    this.toastr.error(response?.ErrorObject || response?.Message || 'Unable to send invite.');
                }
            },
            error: () => {
                this.showBulkEmailLoader = false;
                this.toastr.error('Unable to send invite right now.');
            }
        });
        this.subscriptions.push(sub);
    }

    private resetAddStudentState(): void {
        this.addStudentError = '';
        this.addStudentLoadError = '';
        this.isStudentListLoading = false;
        this.isSubmittingStudents = false;
        this.gradName = undefined;
        this.gradeValue = [];
        this.studentDataList = [];
        this.studentName = [];
        this.newlySelectedStuent = [];
        this.addStudentEnabled = false;
        this.studentAddedType = '0';
        this.effectiveStartDate = '';
        this.emailList = [];
        this.blukEmailValue = [];
        this.validationEmail = false;
        this.showBulkEmailLoader = false;
        this.setStudentForm();
        this.setStudentEmailForm();
    }

    private setStudentForm(): void {
        this.addStudentForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email_id: ['', [Validators.required, Validators.email]],
            grade: [null, Validators.required]
        });
    }

    private setStudentEmailForm(): void {
        this.studentEmailForm = this.formBuilder.group({
            emails: this.formBuilder.array([], [this.validateArrayNotEmpty.bind(this)]),
            message: [''],
            is_makeup: [false],
            start_date: ['']
        });
    }

    private addSelectedStudent(item: any): void {
        if (!item || !item.student_id) {
            return;
        }
        if (!this.newlySelectedStuent.some((student) => student.student_id === item.student_id)) {
            this.newlySelectedStuent.push(item);
        }
    }

    private prepareStudentOption(student: any): any {
        if (!student) {
            return student;
        }
        const studentId = String(student?.student_id || student?.user_id || student?.id || '');
        const userId = String(student?.user_id || student?.student_id || studentId);
        const firstName = student?.first_name || '';
        const lastName = student?.last_name || '';
        const displayName = student?.name || student?.student_name || [firstName, lastName].filter(Boolean).join(' ');
        const email = student?.email_id || student?.email || '';
        const gradeName = student?.grade_name || student?.grade || '';
        return {
            ...student,
            student_id: studentId,
            user_id: userId,
            name: displayName || studentId,
            student_name: displayName || studentId,
            grade_name: gradeName,
            email_id: email,
            name_with_email: this.buildStudentLabel({
                name: displayName || studentId,
                email,
                grade_name: gradeName,
                student_id: studentId
            })
        };
    }

    private buildStudentLabel(student: {name: string; email?: string; grade_name?: string; student_id: string}): string {
        const parts = [student.name];
        if (this.showStudentEmailId && student.email) {
            parts.push(`(${student.email})`);
        } else if (this.showStudentEmailId) {
            parts.push(`(${student.student_id})`);
        }
        if (student.grade_name) {
            parts.push(`- ${student.grade_name}`);
        }
        return parts.join(' ');
    }

    private removeDuplicates(originalArray: Array<{[key: string]: any}>, prop: string) {
        const lookupObject = originalArray.reduce((acc, item) => {
            acc[item[prop]] = item;
            return acc;
        }, {} as Record<string, any>);
        return Object.keys(lookupObject).map((key) => lookupObject[key]);
    }

    private validateArrayNotEmpty(control: FormControl) {
        if (control.value && control.value.length === 0) {
            return {
                validateArrayNotEmpty: {valid: false}
            };
        }
        return null;
    }

    private validateEmail(email: string): boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    private loadAddStudentGrades(): void {
        if (this.isGradeListLoading) {
            return;
        }
        this.isGradeListLoading = true;
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        const sub = this.classService.gradeList(payload).subscribe({
            next: (response: ApiResponse<any[]>) => {
                this.isGradeListLoading = false;
                if (response?.IsSuccess && Array.isArray(response.ResponseObject)) {
                    this.gradeData = response.ResponseObject;
                } else {
                    this.addStudentLoadError = response?.Message || 'Unable to load grades.';
                }
            },
            error: () => {
                this.isGradeListLoading = false;
                this.addStudentLoadError = 'Unable to load grades.';
            }
        });
        this.subscriptions.push(sub);
    }


    private setCurriculumTopic(item: any, topicId: string | number | null, topicName: string | null): void {
        if (!item) {
            return;
        }
        item.topic_id = topicId ? topicId.toString() : '';
        item.topic_name = topicName ?? '';
    }

    private persistCurriculumAssignment(item: any, targetTopicId: string | number | null, previousTopicId: string | number | null, previousTopicName: string | null, position?: number): void {
        const classContentId = item?.class_content_id ?? item?.id ?? item?.content_id;
        if (!classContentId) {
            console.warn('Cannot persist curriculum assignment: class_content_id is missing', item);
            this.toastr.error('Unable to update curriculum topic: Missing content ID');
            return;
        }
        const payload: any = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_content_id: classContentId,
            topic_id: targetTopicId ? targetTopicId : '0',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        if (typeof position === 'number' && position > -1) {
            payload.position = position + 1;
        }
        this.isCurriculumLoading = true;
        const sub = this.classService.moveTopic(payload).subscribe({
            next: (response: ApiResponse<any>) => {
                this.isCurriculumLoading = false;
                if (response?.IsSuccess) {
                    this.fetchCurriculumData();
                } else {
                    console.error('Failed to update curriculum topic:', response);
                    this.setCurriculumTopic(item, previousTopicId, previousTopicName);
                    this.buildTopicGroups();
                    const errorMsg = response?.ErrorObject || response?.Message || 'Unable to update curriculum topic';
                    this.toastr.error(errorMsg);
                }
            },
            error: (err) => {
                console.error('Error updating curriculum topic:', err);
                this.isCurriculumLoading = false;
                this.setCurriculumTopic(item, previousTopicId, previousTopicName);
                this.buildTopicGroups();
                this.toastr.error('Unable to update curriculum topic');
            }
        });
        this.subscriptions.push(sub);
    }

    private reorderCurriculumWithinTopic(topicId: string | number | null, previousIndex: number, currentIndex: number): void {
        if (previousIndex === currentIndex) {
            return;
        }
        const topicIdStr = topicId ? topicId.toString() : '';
        const allItems = this.curriculumItems.filter((curriculum) => (curriculum.topic_id ?? '').toString() === topicIdStr);
        if (!allItems.length) {
            return;
        }
        const visibleItems = allItems.filter((item) => this.matchesFilter(item));
        const itemToMove = visibleItems[previousIndex];
        if (!itemToMove) {
            return;
        }
        visibleItems.splice(previousIndex, 1);
        visibleItems.splice(currentIndex, 0, itemToMove);

        const merged: any[] = [];
        let visiblePointer = 0;
        allItems.forEach((item) => {
            if (this.matchesFilter(item)) {
                merged.push(visibleItems[visiblePointer++] ?? item);
            } else {
                merged.push(item);
            }
        });

        const indices: number[] = [];
        this.curriculumItems.forEach((curriculum, index) => {
            if ((curriculum.topic_id ?? '').toString() === topicIdStr) {
                indices.push(index);
            }
        });
        indices.forEach((originalIndex, idx) => {
            if (merged[idx]) {
                this.curriculumItems[originalIndex] = merged[idx];
            }
        });
        this.buildTopicGroups();
    }

    private insertCurriculumIntoTopic(item: any, targetTopicId: string | number | null, targetIndex: number): void {
        const targetIdStr = targetTopicId ? targetTopicId.toString() : '';
        const currentIndex = this.curriculumItems.findIndex((curriculum) => curriculum === item);
        if (currentIndex > -1) {
            this.curriculumItems.splice(currentIndex, 1);
        }
        const indices: number[] = [];
        this.curriculumItems.forEach((curriculum, index) => {
            if ((curriculum.topic_id ?? '').toString() === targetIdStr) {
                indices.push(index);
            }
        });
        if (!indices.length) {
            this.curriculumItems.push(item);
            return;
        }
        let insertAt: number;
        if (targetIndex >= indices.length) {
            insertAt = indices[indices.length - 1] + 1;
        } else {
            insertAt = indices[targetIndex];
        }
        this.curriculumItems.splice(insertAt, 0, item);
    }

    persistEditContext(): void {
        if (!this.overview) {
            return;
        }
        this.auth.setSessionData('card-data', JSON.stringify([this.overview]));
        this.auth.setSessionData('editclass', JSON.stringify([this.overview]));
        this.auth.setSessionData('updatedStudent', 1);
    }
}
