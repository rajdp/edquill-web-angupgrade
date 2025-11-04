import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Navigation, Router} from '@angular/router';
import {forkJoin, Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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

type CurriculumStatus = 'all' | 'in-progress' | 'completed' | 'not-started';
type ApiResponse<T = any> = {
    IsSuccess?: boolean;
    ResponseObject?: T;
    ResponseObject1?: T;
    ResponseCode?: string;
    Message?: string;
    ErrorObject?: any;
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
    showAssignDrawer = false;
    isLibraryLoading = false;
    libraryItems: LibraryContentItem[] = [];
    libraryLoadError = '';
    librarySearchTerm = '';
    pendingAssignments: AssignmentDraft[] = [];
    private draftCounter = 0;
    studentSearchFn = (term: string, item: any): boolean => {
        if (!term) {
            return true;
        }
        const normalized = term.trim().toLowerCase();
        if (!normalized) {
            return true;
        }
        const name = (item?.displayLabel || '').toLowerCase();
        const email = (item?.email_id || '').toLowerCase();
        const altEmail = (item?.email || '').toLowerCase();
        const grade = (item?.grade_name || '').toLowerCase();
        return name.includes(normalized) || email.includes(normalized) || altEmail.includes(normalized) || grade.includes(normalized);
    };
    @ViewChild('createTopicModal', {static: true}) createTopicModal!: TemplateRef<any>;
    @ViewChild('addStudentModal', {static: true}) addStudentModal!: TemplateRef<any>;
    @ViewChild('announcementModal', {static: true}) announcementModal!: TemplateRef<any>;
    @ViewChild('teacherVersionModal', {static: true}) teacherVersionModal!: TemplateRef<any>;
    @ViewChild('editContentModal', {static: true}) editContentModal!: TemplateRef<any>;
    @ViewChild('deleteContentModal', {static: true}) deleteContentModal!: TemplateRef<any>;
    addStudentModalRef?: NgbModalRef;
    announcementModalRef?: NgbModalRef;
    announcementForm: FormGroup;
    isPostingAnnouncement = false;
    announcementFormErrors = '';
    addStudentGrades: any[] = [];
    isGradeListLoading = false;
    selectedAddStudentGrades: Array<string | number> = [];
    studentOptions: any[] = [];
    allStudentOptions: any[] = [];
    selectedStudentIds: string[] = [];
    isStudentListLoading = false;
    addStudentLoadError = '';
    addStudentError = '';
    isSubmittingStudents = false;
    studentAddedType: '0' | '1' = '0';
    effectiveStartDate = '';
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
        private auth: AuthService,
        public commonData: CommonDataService,
        private commonService: CommonService,
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private modalService: NgbModal,
        private datePipe: DatePipe,
        private creatorService: CreatorService,
        private configService: ConfigurationService
    ) {
        this.topicForm = this.formBuilder.group({
            name: ['', Validators.required],
            startDate: [null],
            endDate: [null]
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
        this.mediaBaseUrl = this.normalizeBaseUrl(this.configService.getimgUrl());
    }

    get canManageClass(): boolean {
        return !!this.auth.manageClass;
    }

    ngOnInit(): void {
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

    private loadLibraryContents(searchTerm: string = ''): void {
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
                this.isLibraryLoading = false;
                const items = this.normalizeLibraryItems(this.extractLibraryItems(response));
                this.libraryItems = items;
            },
            error: () => {
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
        this.resetAddStudentState();
        if (!this.addStudentGrades.length) {
            this.loadAddStudentGrades();
        }
        this.loadAvailableStudents();
        this.addStudentModalRef = this.modalService.open(this.addStudentModal, {
            size: 'lg',
            backdrop: 'static',
            keyboard: false
        });
    }

    removeStudent(student: any): void {
        const studentId = student?.user_id || student?.student_id;
        if (!studentId || !this.classId) {
            return;
        }
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
                        return itemId !== studentId;
                    });
                    this.toastr.success(response?.ResponseObject || 'Student removed');
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
        this.isLoading = true;
        this.commonData.showLoader(true);
        const sub = this.classService.classDetails(payload).subscribe({
            next: (response: ApiResponse<any[]>) => {
                this.isLoading = false;
                this.commonData.showLoader(false);
                if (response?.IsSuccess && Array.isArray(response?.ResponseObject) && response.ResponseObject.length) {
                    [this.overview] = response.ResponseObject;
                    this.prepareViewModel();
                    this.auth.setSessionData('card-data', JSON.stringify(response.ResponseObject));
                } else {
                    this.toastr.error('Unable to load class details');
                }
            },
            error: () => {
                this.isLoading = false;
                this.commonData.showLoader(false);
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
            return {
                ...student,
                displayName: [firstName, lastName].filter(Boolean).join(' ') || student?.student_name || student?.name || '',
                user_id: student?.user_id || student?.student_id || student?.id,
                gradeDisplay
            };
        });
    }

    private normalizeCurriculum(items: any[]): any[] {
        return items.map((item) => ({
            ...item,
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

    private formatDateForPayload(value: string): string {
        if (!value) {
            return '';
        }
        const date = new Date(value);
        if (isNaN(date.getTime())) {
            return '';
        }
        return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
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

    onAddStudentGradesChanged(selected: string[] | null): void {
        this.selectedAddStudentGrades = Array.isArray(selected)
            ? selected.filter((value) => value !== null && value !== undefined && value !== '')
            : [];
        this.selectedAddStudentGrades = Array.from(new Set(this.selectedAddStudentGrades));
        this.selectedStudentIds = [];
        this.studentOptions = [];
        this.allStudentOptions = [];
        this.addStudentLoadError = '';
        this.loadAvailableStudents();
    }

    onSelectedStudentIdsChange(selected: any[] | null): void {
        const ids = Array.isArray(selected) ? selected : [];
        this.selectedStudentIds = ids
            .filter((value) => value !== null && value !== undefined && value !== '')
            .map((value) => String(value));
    }

    submitSelectedStudents(): void {
        if (!this.overview || !this.classId) {
            return;
        }
        this.addStudentError = '';
        if (!this.selectedStudentIds.length) {
            this.addStudentError = 'Select at least one student to continue.';
            return;
        }
        if (this.studentAddedType === '1' && !this.effectiveStartDate) {
            this.addStudentError = 'Select an effective start date for make-up students.';
            return;
        }

        const sourceOptions = this.allStudentOptions.length ? this.allStudentOptions : this.studentOptions;
        const selectedStudents = sourceOptions.filter((student) => {
            const id = String(student?.student_id || student?.user_id || '');
            return this.selectedStudentIds.includes(id);
        }).map((student) => ({
            ...student,
            student_id: student?.student_id || student?.user_id || '',
            user_id: student?.user_id || student?.student_id || '',
            student_name: student?.student_name || student?.name || [student?.first_name, student?.last_name].filter(Boolean).join(' ')
        }));

        if (!selectedStudents.length) {
            this.addStudentError = 'Unable to resolve selected students.';
            return;
        }

        const formatDate = (value: string): string => {
            if (!value) {
                return '';
            }
            const parsed = new Date(value);
            if (!isNaN(parsed.getTime())) {
                return this.datePipe.transform(parsed, 'yyyy-MM-dd') || '';
            }
            return value;
        };

        const regularStart = this.overview?.start_date || this.overview?.startDate || '';
        const regularEnd = this.overview?.end_date || this.overview?.endDate || '';
        const startDate = this.studentAddedType === '0' ? regularStart : this.effectiveStartDate;
        const endDate = this.studentAddedType === '0' ? regularEnd : this.effectiveStartDate;

        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.overview?.school_id || this.auth.getSessionData('school_id'),
            teacher_id: this.overview?.teacher_id || this.overview?.teacherId || this.auth.getUserId(),
            class_name: this.overview?.class_name || this.classSummary?.class_name || '',
            subject: this.overview?.subject || this.overview?.subject_name || this.classSummary?.subject || '',
            start_date: formatDate(startDate || ''),
            end_date: formatDate(endDate || ''),
            start_time: this.overview?.start_time || this.overview?.startTime || '',
            end_time: this.overview?.end_time || this.overview?.endTime || '',
            grade: this.selectedAddStudentGrades,
            meeting_link: this.overview?.meeting_link || '',
            meeting_id: this.overview?.meeting_id || '',
            passcode: this.overview?.passcode || '',
            class_code: this.overview?.class_code || '',
            status: this.overview?.status || '',
            class_id: this.classId,
            students: selectedStudents,
            is_makeup: this.studentAddedType ?? '0'
        };

        this.isSubmittingStudents = true;
        const sub = this.classService.submit(payload).subscribe({
            next: (response: ApiResponse<any>) => {
                this.isSubmittingStudents = false;
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
            error: () => {
                this.isSubmittingStudents = false;
                this.addStudentError = 'Unable to add students right now.';
                this.toastr.error(this.addStudentError);
            }
        });
        this.subscriptions.push(sub);
    }

    private resetAddStudentState(): void {
        this.addStudentError = '';
        this.addStudentLoadError = '';
        this.isStudentListLoading = false;
        this.isSubmittingStudents = false;
        this.selectedAddStudentGrades = [];
        this.studentOptions = [];
        this.allStudentOptions = [];
        this.selectedStudentIds = [];
        this.studentAddedType = '0';
        this.effectiveStartDate = '';
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
                    this.addStudentGrades = response.ResponseObject;
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

    private loadAvailableStudents(): void {
        this.isStudentListLoading = true;
        this.addStudentLoadError = '';
        const existingIds = new Set(
            this.students.map((student) => String(student?.user_id || student?.student_id || student?.id || ''))
        );
        const formatDate = (value: string): string => {
            if (!value) {
                return '';
            }
            const parsed = new Date(value);
            if (!isNaN(parsed.getTime())) {
                return this.datePipe.transform(parsed, 'yyyy-MM-dd') || '';
            }
            return value;
        };
        const payload: any = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            end_date: formatDate(this.overview?.end_date || this.overview?.endDate || '')
        };
        if (this.selectedAddStudentGrades.length) {
            payload.grade_id = this.selectedAddStudentGrades;
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
                        .map((student) => {
                            const studentId = student?.student_id || student?.user_id || '';
                            const firstName = student?.first_name || '';
                            const lastName = student?.last_name || '';
                            const displayName = student?.name || student?.student_name || [firstName, lastName].filter(Boolean).join(' ');
                            return {
                                ...student,
                                student_id: studentId,
                                displayLabel: displayName || studentId,
                                grade_name: student?.grade_name || student?.grade || '',
                                email_id: student?.email_id || student?.email || ''
                            };
                        })
                        .sort((a, b) => a.displayLabel.localeCompare(b.displayLabel));
                    this.allStudentOptions = options;
                    this.studentOptions = options;
                    const availableIds = new Set(options.map((option) => String(option.student_id)));
                    this.selectedStudentIds = this.selectedStudentIds.filter((id) => availableIds.has(id));
                    if (!options.length) {
                        this.addStudentLoadError = this.selectedAddStudentGrades.length
                            ? 'No eligible students found for the selected grade.'
                            : 'No eligible students available.';
                    } else {
                        this.addStudentLoadError = '';
                    }
                } else {
                    this.addStudentLoadError = response?.Message || 'Unable to load students right now.';
                }
            },
            error: () => {
                this.isStudentListLoading = false;
                this.addStudentLoadError = 'Unable to load students right now.';
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
                    this.setCurriculumTopic(item, previousTopicId, previousTopicName);
                    this.buildTopicGroups();
                    this.toastr.error('Unable to update curriculum topic');
                }
            },
            error: () => {
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
