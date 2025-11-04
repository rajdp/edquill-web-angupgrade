import {Component, HostListener, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import {NgbModalConfig, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {ClassroomService} from '../../../shared/service/classroom.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';
import {NavService} from '../../../shared/service/nav.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../../shared/service/validation.service';
import {EnvironmentService} from '../../../environment.service';
import {CreatorService} from '../../../shared/service/creator.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {MatCheckboxChange} from '@angular/material/checkbox';

interface ContentNode {
    text: string;
    value: string;
    children?: ContentNode[];
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    parent?: ContentNode | null;
    content_type?: string;
    content_format?: string;
    allow_autograde?: string;
    without_question?: string;
}

@Component({
    selector: 'app-list-classroom',
    templateUrl: './list-classroom.component.html',
    styleUrls: ['./list-classroom.component.scss']
})
export class ListClassroomComponent implements OnInit {
    private modalRef: NgbModalRef;
    public closeResult: string;
    public manageContentFolder = true;
    // public editContentFolder = true;
    // public editContent = true;
    // public classContentFolder = false;
    public teacherschool: any;
    public schoolData: any;
    public schoolStatus: any;
    public allowSelect: boolean;
    public getScreenHeight: any;
    public filterType: any = 'Latest';
    public contentDetails: any = {};
    public multiContent = [];
    public isEssay = '0';
    public formSubmitted = true;
    public selectedBatchForDelete: any;
    public calledValue = '';
    public addItemsData: any;
    public treeControl = new NestedTreeControl<ContentNode>((node) => node.children || []);
    public dataSource = new MatTreeNestedDataSource<ContentNode>();
    public folderNodePredicate = (_: number, node: ContentNode) => this.getNodeType(node) !== 'file';
    public fileNodePredicate = (_: number, node: ContentNode) => this.getNodeType(node) === 'file';
    public expandAll = false;
    private fullBranchListData: ContentNode[] = [];
    public contentData: any = {};
    public selectedContent: any;
    public schoolId = '';
    public roleId = '';
    // Tab management
    public activeTab: 'library' | 'folder' = 'folder';

    @ViewChild('assignContent') assignContent: TemplateRef<any>;
    @ViewChild('deleteBatch') deleteBatch: TemplateRef<any>;
    @ViewChild('addBranch') addBranchTemp: TemplateRef<any>;
    @ViewChild('viewContent') viewContent: TemplateRef<any>;

    public showLoader = true;
    public branchListData: ContentNode[] = [];
    public branchForm: FormGroup;
    public env = inject(EnvironmentService);
    private creatorService = inject(CreatorService);
    public classDetails: any = [];

    constructor(public config: NgbModalConfig, public navService: NavService, public formBuilder: FormBuilder,
                public auth: AuthService, public commondata: CommonDataService, private modalService: NgbModal,
                public route: Router, public toastr: ToastrService, public newSubject: NewsubjectService,
                public classroom: ClassroomService, public validationService: ValidationService) {
        config.backdrop = 'static';
        config.keyboard = false;
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.classDetails = this.auth.getSessionData('content_assign') ? JSON.parse(this.auth.getSessionData('card-data')) : [];
        this.auth.setSessionData('resourceAccess', false);
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('readonly_startdate');
        if (this.schoolStatus.length != 0) {
            this.newSubject.schoolChange.subscribe(params => {
                if (params != '') {
                    if (this.route.url.includes('list-classroom')) {
                        this.init();
                    }
                } else {
                    this.init();
                }
            });
        }
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
        this.navService.MENUITEMS.forEach((items) => {
            if (items.title == 'Content Library') {
                this.newSubject.highListSideBarMenu(items);
            }
        });
    }

    ngOnInit() {
        this.auth.removeSessionData('backOption');
        this.getScreenHeight = window.innerHeight;
        this.resetForm();
    }

    switchTab(tab: 'library' | 'folder') {
        if (this.activeTab !== tab) {
            if (tab === 'library') {
                // Navigate to Content Library view
                this.route.navigate(['/repository/content-home']);
            } else {
                // Content Folder - stay on current page
                this.activeTab = tab;
            }
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize($event: Event): void {
        this.getScreenHeight = window.innerHeight;
    }

    init() {
        this.roleId = this.auth.getRoleId();
        if (this.auth.getRoleId() == '4') {
            this.teacherschool = JSON.parse(this.auth.getSessionData('rista_data1'));
            // this.addContentFolder = this.teacherschool.permissions[5].permission[0].status == 1;
            // this.classContentFolder = this.teacherschool.permissions[6].permission[0].status == 0;
            // this.editContentFolder = this.teacherschool.permissions[5].permission[2].status == 1;
            // this.editContent = this.teacherschool.permissions[4].permission[1].status == 1;
        } else {
            // this.addContentFolder = true;
            // this.classContentFolder = false;
            // this.editContentFolder = true;
            // this.editContent = true;
        }
        this.manageContentFolder = this.auth.manageOwnContent;
        this.schoolId = this.auth.getSessionData('school_id');
        this.getBranchList();
    }

    getBranchList() {
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            type: '1',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            sort_type: this.filterType == 'Latest' ? '1' : this.filterType == 'Oldest' ? '2' : this.filterType == 'A - Z' ? '3' : '4',
            corporate_id: this.auth.getRoleId() == '2' || this.auth.getRoleId() == '4' ? '0' : this.auth.getSessionData('corporate_id'),
            class_id: '',
        };
        this.classroom.batchList(data).subscribe((successData) => {
                this.branchListSuccess(successData);
            },
            (error) => {
                console.error(error, 'error');
                this.commondata.showLoader(false);
            });
    }

    branchListSuccess(successData) {
        if (!successData.IsSuccess) {
            return;
        }

        this.commondata.showLoader(false);
        this.showLoader = false;
        const responseNodes = (successData.ResponseObject || []) as ContentNode[];
        this.fullBranchListData = this.cloneNodes(responseNodes);
        this.applyTreeData(this.cloneNodes(responseNodes));
    }

    resetForm() {
        this.branchForm = this.formBuilder.group({
            batchname: ['', Validators.required]
        });
    }

    addItem(item, type, typeOfFunction, event?) {
        this.calledValue = typeOfFunction;
        this.formSubmitted = true;
        this.resetForm();
        if (typeOfFunction == 'add') {
            if (type == 'parent') {
                this.addItemsData = {parent_batch_id: '0', batch_id: item.value};
            } else {
                this.addItemsData = {parent_batch_id: item.value.split('/')[0], batch_id: item.value.split('/')[1]};
            }
        } else {
            this.addItemsData = item;
            this.branchForm.controls.batchname.patchValue(item.text);
        }
        this.modalRef = this.modalService.open(this.addBranchTemp, {size: 'lg', backdrop: 'static'});
        if (event) {
            event.stopPropagation();
        }
    }

    private applyTreeData(data: ContentNode[]): void {
        this.branchListData = data || [];
        this.initializeNodes(this.branchListData, null);
        this.dataSource.data = this.branchListData;
        if (this.expandAll) {
            this.treeControl.expandAll();
        } else {
            this.treeControl.collapseAll();
        }
    }

    private initializeNodes(nodes: ContentNode[], parent: ContentNode | null): void {
        nodes.forEach((node) => {
            node.parent = parent;
            node.checked = false;
            node.indeterminate = false;
            if (this.hasChildren(node)) {
                this.initializeNodes(node.children!, node);
            }
        });
    }

    private cloneNodes(nodes: ContentNode[] = []): ContentNode[] {
        return nodes.map((node) => ({
            ...node,
            parent: null,
            children: node.children ? this.cloneNodes(node.children) : []
        }));
    }

    public hasChildren(node: ContentNode): boolean {
        return Array.isArray(node.children) && node.children.length > 0;
    }

    onFolderSelectionChange(node: ContentNode, change: MatCheckboxChange): void {
        this.propagateSelectionToChildren(node, change.checked);
        this.updateParentSelection(node.parent ?? null);
    }

    onFileSelectionChange(node: ContentNode, change: MatCheckboxChange): void {
        node.checked = change.checked;
        node.indeterminate = false;
        this.updateParentSelection(node.parent ?? null);
    }

    private propagateSelectionToChildren(node: ContentNode, checked: boolean): void {
        node.checked = checked;
        node.indeterminate = false;
        if (this.hasChildren(node)) {
            node.children!.forEach((child) => this.propagateSelectionToChildren(child, checked));
        }
    }

    private updateParentSelection(node: ContentNode | null): void {
        if (!node) {
            return;
        }
        if (!this.hasChildren(node)) {
            node.indeterminate = false;
            this.updateParentSelection(node.parent ?? null);
            return;
        }

        const children = node.children!;
        const allChecked = children.every((child) => child.checked);
        const someChecked = children.some((child) => child.checked || child.indeterminate);

        node.checked = allChecked;
        node.indeterminate = !allChecked && someChecked;

        this.updateParentSelection(node.parent ?? null);
    }

    private collectSelectedContent(node: ContentNode): void {
        if (this.getNodeType(node) === 'file' && node.checked) {
            const valueParts = node.value?.split('/') ?? [];
            this.multiContent.push({
                name: node.text,
                content_id: valueParts[0],
                content_type: node.content_type ?? valueParts[2],
                allow_autograde: node.allow_autograde ?? '',
                without_question: node.without_question ?? '',
                content_format: node.content_format ?? valueParts[3]
            });
        }

        if (this.hasChildren(node)) {
            node.children!.forEach((child) => this.collectSelectedContent(child));
        }
    }

    checkSubjectWithTeacherSubject(totalValue) {
        const userDetails = JSON.parse(this.auth.getSessionData('userDetails'));
        const selectedSchool = JSON.parse(this.auth.getSessionData('rista_data1'));
        if (this.auth.getRoleId() == '4' && totalValue[1] == 'file' && selectedSchool?.individual_teacher == 0) {
            if (totalValue.length == 6) {
                const subject = totalValue[5].split(',');
                const assignedSubjects = selectedSchool.subject || [];
                return subject.some(folderSubject => assignedSubjects.includes(folderSubject));
            }
        }
        return true;
    }

    close(event) {
        this.auth.removeSessionData('assignedForm');
        this.modalRef.close();
        if (event) {
            this.multiContent = [];
            this.getBranchList();
        }
    }

    multiAssignContent() {
        this.multiContent = [];
        this.dataSource.data.forEach((node) => this.collectSelectedContent(node));
        this.multiContent = Array.from(new Map(this.multiContent.map((item) => [item.content_id, item])).values());
        if (this.multiContent.length != 0) {
            this.auth.setSessionData('assignedForm', this.auth.getSessionData('content_assign') ?? 'classRoom');
            this.modalRef = this.modalService.open(this.assignContent, {size: 'xl'});
        } else {
            this.toastr.error('Please select content to Assign');
        }
    }

    addBranchDetails() {
        if (this.branchForm.valid) {
            this.formSubmitted = true;
            this.commondata.showLoader(false);
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                batch_name: this.branchForm.controls.batchname.value,
                status: '1',
                school_id: this.auth.getSessionData('school_id'),
                batch_id: this.calledValue == 'add' ? this.addItemsData.batch_id : this.addItemsData.value.split('/')[0]
            };

            if (this.auth.getRoleId() == '6') {
                data['corporate_id'] = this.auth.getSessionData('corporate_id');
            }
            if (this.calledValue == 'add') {
                data['parent_batch_id'] = this.addItemsData.parent_batch_id;
                this.classroom.classRoomAdd(data).subscribe((successData) => {
                        this.branchSuccess(successData);
                    },
                    (error) => {
                        console.log(error, 'error');
                    });
            } else {
                this.classroom.classRoomEdit(data).subscribe((successData) => {
                        this.branchSuccess(successData, data);
                    },
                    (error) => {
                        console.log(error, 'error');
                    });
            }
        } else {
            this.validationService.validateAllFormFields(this.branchForm);
            this.formSubmitted = false;
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }

    branchSuccess(successData, data?) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            // this.totalBatchIds = [];
            // this.newBatchId = successData.batch_id;
            // this.batchDetails = successData.batch_detais[0].children;
            this.showLoader = true;
            // if (this.batchDetails.length != 0) {
            //     this.batchDetails.forEach((items) => {
            //         this.findOpenFolderId(items, successData.batch_detais[0]);
            //     });
            // } else {
            //     this.totalBatchIds = [this.newBatchId];
            // }
            if (this.calledValue == 'add') {
                this.toastr.success('Content Folder Added Successfully');
            } else {
                this.toastr.success('Content Folder Updated Successfully');
            }
            this.modalRef.close();
            // console.log(this.totalBatchIds, 'totalBatchIds');
            this.branchForm.controls.batchname.patchValue('');
            setTimeout (() => {
                this.getBranchList();
            }, 2000);
        } else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, 'Content Folder');
        }
    }

    batchDeletePopUp(item, event) {
        this.selectedBatchForDelete = item;
        this.modalRef = this.modalService.open(this.deleteBatch, {size: 'md', backdrop: 'static'});
        if (event) {
            event.stopPropagation();
        }
    }

    deleteBatchService() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            batch_id: this.selectedBatchForDelete.value.split('/')[0],
            parent_batch_id : this.selectedBatchForDelete.value.split('/')[2]
        };
        this.classroom.classRoomDelete(data).subscribe((successData) => {
                this.deleteBranchSuccess(successData);
            },
            (error) => {
                console.log(error, 'error');
            });
    }

    deleteBranchSuccess(successData) {
        if (successData.IsSuccess) {
            this.modalRef.close();
            // this.totalBatchIds = [];
            // this.newBatchId = successData.batch_id;
            // this.batchDetails = successData.batch_detais.length != 0 ? successData.batch_detais[0].children : [];
            // this.showLoader = true;
            // if (this.batchDetails.length != 0) {
            //     this.batchDetails.forEach((items) => {
            //         this.findOpenFolderId(items, successData.batch_detais[0]);
            //     });
            // } else {
            //     this.totalBatchIds = [this.newBatchId];
            // }
            setTimeout (() => {
                this.getBranchList();
            }, 2000);
            this.toastr.success('Content Folder Deleted Successfully');
        }
    }

    // expandOrCollapseAll() {
    //     this.expandAll = !this.expandAll;
    //     this.branchListData.forEach((items) => {
    //         setTimeout(() => {
    //             console.log(this.expandAll)
    //             this.updateChildrenValue(items, 'collapsed', this.expandAll);
    //         }, 100);
    //     });
    // }

    // expandOrCollapseAll() {
    //     this.expandAll = !this.expandAll;
    //     let delay = 5; // Initial delay
    //     this.branchListData.forEach((items, index) => {
    //         setTimeout(() => {
    //             console.log(this.expandAll);
    //             this.updateChildrenValue(items, 'collapsed', this.expandAll, '', delay);
    //         }, delay * index); // Increase delay for each item
    //     });
    // }
    //
    //
    // updateChildrenValue(value, key, keyValue, calledFor = '', delay: number = 20) {
    //     setTimeout(() => {
    //         value[key] = key == 'collapsed' ? (calledFor != '' ? keyValue : !keyValue) : keyValue;
    //         if (value.children) {
    //             value.children.forEach((items, index) => {
    //                 const delayChildren: any = delay + 5 * index;
    //                 this.updateChildrenValue(items, key, keyValue, delayChildren);
    //             });
    //         }
    //     }, delay);
    // }

    expandOrCollapseAll(): void {
        this.expandAll = !this.expandAll;
        if (this.expandAll) {
            this.treeControl.expandAll();
        } else {
            this.treeControl.collapseAll();
        }
    }

    onSearch(event: Event) {
        const term = (event.target as HTMLInputElement).value.trimStart();
        if (term) {
            const normalizedTerm = term.toLowerCase();
            const filtered = this.filterNestedArray(this.cloneNodes(this.fullBranchListData), normalizedTerm);
            this.applyTreeData(filtered);
        } else {
            this.applyTreeData(this.cloneNodes(this.fullBranchListData));
        }
    }

    private filterNestedArray(data: ContentNode[], searchTerm: string): ContentNode[] {
        const results: ContentNode[] = [];

        data.forEach((item) => {
            const type = this.getNodeType(item);
            const childrenMatches = this.hasChildren(item) ? this.filterNestedArray(this.cloneNodes(item.children!), searchTerm) : [];
            const labelMatches = type !== 'file' && item.text?.toLowerCase().includes(searchTerm);

            if (labelMatches) {
                results.push({
                    ...item,
                    children: item.children ? this.cloneNodes(item.children) : []
                });
            } else if (type !== 'file' && childrenMatches.length > 0) {
                results.push({
                    ...item,
                    children: childrenMatches
                });
            }
        });

        return results;
    }

    private getNodeType(node: ContentNode): string {
        if (!node?.value) {
            return '';
        }
        const segments = node.value.split('/');
        return segments[1] || '';
    }

    previewOrEditContent(event, type) {
        this.selectedContent = event;
        const contentValue = event.value.split('/');
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: contentValue[0],
            content_type: contentValue[2],
            content_format: contentValue[3],
            school_id: this.auth.getSessionData('school_id'),
        };
        this.auth.setSessionData('editor', JSON.stringify(data));
        this.creatorService.repositoryDetail(data).subscribe((successData) => {
                this.detailsSuccess(successData, data, type);
            },
            (error) => {
                console.error(error, 'error_lisDetails');
            });
    }

    detailsSuccess(successData, value, type) {
        this.contentData = successData;
        if (successData.IsSuccess) {
            this.auth.setSessionData('editresources', JSON.stringify(successData.ResponseObject));
            this.auth.setSessionData('assignedForm', 'classRoom');
            this.auth.setSessionData('editContentFromClassRoom', 'classRoom');
            if (type == 'edit') {
                if (value.content_type == '1') {
                    this.route.navigate([value.content_format != '3' ? 'repository/add-resources/edit' : 'content-text-resource/text-resource/edit']);
                } else if (value.content_type == '2') {
                    this.auth.setSessionData(value.content_format == 3 ? 'textType' : 'upload-type', 'assignment');
                    this.route.navigate([value.content_format != '3' ? 'repository/create-assessment/edit' : 'content-text-resource/text-assignment/edit']);
                } else if (value.content_type == '3') {
                    this.auth.setSessionData(value.content_format == 3 ? 'textType' : 'upload-type', 'assessment');
                    this.route.navigate([value.content_format != '3' ? 'repository/create-assessment/edit' : 'content-text-resource/text-assignment/edit']);
                }
            } else {
                if (value.content_type == '1') {
                    this.auth.setSessionData('preview_page', value.content_format != '3' ? 'create_resources' : 'text_resources');
                } else if (value.content_type == '2') {
                    this.auth.setSessionData('preview_page', value.content_format != '3' ? 'create_assignments' : 'text_assignments');
                } else if (value.content_type == '3') {
                    this.auth.setSessionData('preview_page', value.content_format != '3' ? 'create_assessments' : 'text_assessments');
                }
                this.auth.setSessionData('preview', 'content-folder');
                this.modalRef = this.modalService.open(this.viewContent, {size: 'xl', backdrop: 'static', windowClass: 'classRoom_popup'});
            }
        }
    }

    closePopUp() {
        this.modalRef?.close();
    }
}
