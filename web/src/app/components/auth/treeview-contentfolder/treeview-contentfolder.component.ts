import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, TemplateRef, ViewChild} from '@angular/core';
import {DefaultTreeviewI18n, DropdownTreeviewComponent, OrderDownlineTreeviewEventParser, TreeviewConfig,
    TreeviewEventParser, TreeviewI18n, TreeviewItem} from '@soy-andrey-semyonov/ngx-treeview';
import {ClassroomService} from '../../../shared/service/classroom.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {ProductTreeviewConfig} from '../../repository/add-resources/add-resources.component';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {ValidationService} from '../../../shared/service/validation.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-treeview-contentfolder',
    templateUrl: './treeview-contentfolder.component.html',
    styleUrls: ['./treeview-contentfolder.component.scss'],
    providers: [
        {provide: TreeviewEventParser, useClass: OrderDownlineTreeviewEventParser},
        {provide: TreeviewConfig, useClass: ProductTreeviewConfig},
        {
            provide: TreeviewI18n, useValue: Object.assign(new DefaultTreeviewI18n(), {
                getFilterPlaceholder(): string {
                    return 'Search Content Folder';
                }
            })
        }
    ]
})

export class TreeviewContentfolderComponent implements OnInit, OnChanges, OnDestroy {

    public branchForm: FormGroup;
    public items: any;
    public branchListData = [];
    public addItemsData: any;
    public batchid: string[] = [];
    private modalRef: NgbModalRef;
    public teacherschool: any;
    public calledValue = '';
    public formSubmitted = true;
    public previousFilterType = 'Latest';
    public newBatchId = '';
    public batchDetails: any = [];
    public selectedBatchForDelete: any;
    public selectedBacthName = [];
    configTree = TreeviewConfig.create({
        hasAllCheckBox: false,
        hasFilter: true,
        hasCollapseExpand: false,
        decoupleChildFromParent: true,
        maxHeight: 370
    });

    ContentFolderConfigTree = TreeviewConfig.create({
        hasAllCheckBox: false,
        hasFilter: true,
        hasCollapseExpand: true,
        decoupleChildFromParent: true,
        maxHeight: 370
    });

    classConfigTree = TreeviewConfig.create({
        hasAllCheckBox: false,
        hasFilter: true,
        hasCollapseExpand: false,
        decoupleChildFromParent: true,
        maxHeight: 370
    });
    public buttonClass = 'treeview-button';
    public manageContentFolder = true;
    public classContentFolder = false;
    // public contentEdit = true;
    public showLoader = true;
    @Input() type: any;
    @Input() selectedbatch = [];
    @Input() filterType: any = 'Latest';
    @Input() calledForm?: string = '';
    @Input() treeviewHeight?: number = 200;
    @Input() schoolId?: string = '';
    @Input() class_id?: string = '';
    @Input() content_id?: string = '';
    @Output() batchChange: EventEmitter<string[]> = new EventEmitter<string[]>();
    @ViewChild('addBranch') addBranchTemp: TemplateRef<any>;
    @ViewChild('preview') previewContentFolder: TemplateRef<any>;
    @ViewChild('deleteBatch') deleteBatch: TemplateRef<any>;
    @ViewChild(DropdownTreeviewComponent, {static: false}) child: DropdownTreeviewComponent;
    public valueCheckArray = [];
    public totalBatchIds = [];
    public schoolStoredInitially = '';

    constructor(public branchService: ClassroomService, public modalService: NgbModal, private toastr: ToastrService,
                public auth: AuthService, public commondata: CommonDataService, public validationService: ValidationService,
                public formBuilder: FormBuilder, public router: Router) {

        this.teacherschool = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.schoolStoredInitially = this.auth.getSessionData('school_id');
        if (this.auth.getRoleId() == '4') {
            this.manageContentFolder = this.auth.manageOwnContent;
            this.classContentFolder = this.auth.manageClass;
            // this.contentEdit = this.teacherschool.permissions[5].permission[2].status == 1;
        } else {
            this.manageContentFolder = true;
            this.classContentFolder = false;
        }
        this.resetForm();
    }

    ngOnInit(): void {
        this.setSelectedBatch(this.selectedbatch);
        if (this.schoolId) {
            this.schoolStoredInitially = this.schoolId;
        }
        this.getBranchList();
    }

    resetForm() {
        this.branchForm = this.formBuilder.group({
            batchname: ['', Validators.required]
        });
    }

    private updateDropdownButtonLabel(): void {
        if (this.child) {
            this.child.buttonLabel = this.batchid.length === 0 ? 'Select Content Folder' :
                `${this.batchid.length} Content Folder Selected`;
        }
        console.log('[Treeview] updateDropdownButtonLabel -> count:', this.batchid.length,
            'label:', this.child ? this.child.buttonLabel : 'Dropdown component not ready');
    }

    private emitBatchSelection(): void {
        console.log('[Treeview] emitBatchSelection ->', this.batchid);
        this.batchChange.emit([...this.batchid]);
    }

    private getBatchIdFromValue(value: any): string {
        if (value === undefined || value === null) {
            return '';
        }
        const parts = String(value).split('/');
        return parts.length > 0 ? parts[0].trim() : '';
    }

    private updateSelectedBatchNamesFromItems(): void {
        if (this.batchid.length === 0) {
            this.selectedBacthName = [];
            console.log('[Treeview] updateSelectedBatchNamesFromItems -> no selection');
            return;
        }
        if (!this.items || this.items.length === 0) {
            console.log('[Treeview] updateSelectedBatchNamesFromItems -> items not ready');
            return;
        }
        const selectedIds = new Set(this.batchid);
        const names: string[] = [];
        const traverse = (item: TreeviewItem) => {
            const batchId = this.getBatchIdFromValue(item.value);
            if (selectedIds.has(batchId) && item.value.split('/')[1] === 'folder') {
                names.push(' ' + ' ' + item.text + ' ' + ' ');
            }
            if (item.children && item.children.length) {
                item.children.forEach(traverse);
            }
        };
        this.items.forEach(traverse);
        this.selectedBacthName = Array.from(new Set(names));
        console.log('[Treeview] updateSelectedBatchNamesFromItems -> selected names:', this.selectedBacthName);
    }

    private extractBatchIdsFromEvent(event: any): string[] {
        if (!event) {
            return [];
        }
        if (Array.isArray(event)) {
            const ids = event.flatMap((item) => {
                if (item && typeof item === 'object' && item.value !== undefined) {
                    return [this.getBatchIdFromValue(item.value)];
                }
                if (item === null || item === undefined) {
                    return [];
                }
                return this.normalizeSelectedBatchValue(item);
            });
            return ids.filter((id) => id !== '');
        }
        if (typeof event === 'object' && event.value !== undefined) {
            const id = this.getBatchIdFromValue(event.value);
            return id ? [id] : [];
        }
        return this.normalizeSelectedBatchValue(event);
    }

    private handleBatchSelectionChange(): void {
        this.batchid = Array.from(new Set(this.batchid.filter((id) => id !== '' && id !== '0')));
        console.log('[Treeview] handleBatchSelectionChange -> normalized selection:', this.batchid);
        this.updateSelectedBatchNamesFromItems();
        this.updateDropdownButtonLabel();
        this.emitBatchSelection();
    }

    private normalizeSelectedBatchValue(selected: any): string[] {
        if (selected === undefined || selected === null) {
            console.log('[Treeview] normalizeSelectedBatchValue -> empty input', selected);
            return [];
        }

        const values = Array.isArray(selected) ? selected : [selected];
        const normalizedArray = values
            .map((entry) => this.resolveBatchSelectionEntry(entry))
            .filter((id) => id !== '' && id !== '0');

        console.log('[Treeview] normalizeSelectedBatchValue ->', selected, '=>', normalizedArray);
        return normalizedArray;
    }

    private resolveBatchSelectionEntry(entry: any): string {
        if (entry === undefined || entry === null) {
            return '';
        }

        if (typeof entry === 'object') {
            if (entry.value !== undefined) {
                return this.getBatchIdFromValue(entry.value);
            }

            if (entry.item && entry.item.value !== undefined) {
                return this.getBatchIdFromValue(entry.item.value);
            }

            if (entry.batch_id !== undefined) {
                return String(entry.batch_id).trim();
            }

            if (entry.id !== undefined) {
                return String(entry.id).trim();
            }
        }

        const selectedValue = String(entry).trim();

        if (selectedValue === '' || selectedValue === '0' || selectedValue === '[object Object]') {
            return '';
        }

        return selectedValue;
    }

    private setSelectedBatch(selected: any): void {
        const normalizedSelection = this.normalizeSelectedBatchValue(selected);
        this.batchid = Array.from(new Set(normalizedSelection));
        console.log('[Treeview] setSelectedBatch -> raw:', selected, 'normalized:', normalizedSelection);
        this.updateSelectedBatchNamesFromItems();
        this.updateDropdownButtonLabel();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.selectedbatch && !changes.selectedbatch.firstChange) {
            this.setSelectedBatch(changes.selectedbatch.currentValue);
            if (this.items && this.items.length) {
                this.items.forEach((item) => this.selectChildren(item));
            }
        }
        if (this.calledForm == 'contentFolder') {
            this.showLoader = true;
            this.totalBatchIds = [];
            if (this.previousFilterType != this.filterType) {
                this.previousFilterType = this.filterType;
                this.getBranchList();
            } else if (this.schoolId != this.schoolStoredInitially) {
                this.getBranchList();
                this.schoolStoredInitially = this.schoolId;
            } else {
                this.showLoader = false;
            }
            this.configTree.maxHeight = this.treeviewHeight - 250;
        } else {
            this.configTree.maxHeight = this.treeviewHeight;
        }
        if (this.calledForm === 'class' && changes.class_id && !changes.class_id.firstChange &&
            changes.class_id.currentValue !== changes.class_id.previousValue) {
            console.log('[Treeview] class_id changed, fetching branch list:', changes.class_id.currentValue);
            this.getBranchList();
        }
        if (this.calledForm === 'class' && changes.schoolId && !changes.schoolId.firstChange &&
            changes.schoolId.currentValue !== changes.schoolId.previousValue) {
            this.getBranchList();
        }
    }

    ngOnDestroy(): void {
        sessionStorage.removeItem('selectedbatchId');
        this.selectedbatch = [];
        this.batchid = [];
    }

    close() {
        this.formSubmitted = true;
        this.modalRef.close();
    }

    addItem(item, type, typeOfFunction) {
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
        console.log(this.addItemsData, 'addIte');
        console.log(item, 'hh');
        this.modalRef = this.modalService.open(this.addBranchTemp, {size: 'lg', backdrop: 'static'});
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
                this.branchService.classRoomAdd(data).subscribe((successData) => {
                        this.branchSuccess(successData);
                    },
                    (error) => {
                        console.log(error, 'error');
                    });
            } else {
                this.branchService.classRoomEdit(data).subscribe((successData) => {
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
            this.totalBatchIds = [];
            this.newBatchId = successData.batch_id;
            this.batchDetails = successData.batch_detais[0].children;
            this.showLoader = true;
            if (this.batchDetails.length != 0) {
                this.batchDetails.forEach((items) => {
                    this.findOpenFolderId(items, successData.batch_detais[0]);
                });
            } else {
                this.totalBatchIds = [this.newBatchId];
            }
            if (this.calledValue == 'add') {
                this.toastr.success('Content Folder Added Successfully');
            } else {
                this.toastr.success('Content Folder Updated Successfully');
            }
            this.modalRef.close();
            console.log(this.totalBatchIds, 'totalBatchIds');
            this.branchForm.controls.batchname.patchValue('');
            setTimeout (() => {
                this.getBranchList();
            }, 2000);
        } else {
            this.commondata.showLoader(false);
            this.toastr.error(successData.ErrorObject, 'Content Folder');
        }
    }

    findOpenFolderId(value, parentValue) {
        if (value.batch_id == this.newBatchId) {
            this.totalBatchIds = (parentValue.batch_id + '/' + value.batch_id).split('/');
        } else {
            value.appendedBatchValue = parentValue.batch_id + '/' + value.batch_id;
            if (value.children) {
                value.children.forEach((items) => {
                    if (items.batch_id == this.newBatchId) {
                        this.totalBatchIds = (value.appendedBatchValue + '/' + items.batch_id).split('/');
                    } else {
                        items.appendedBatchValue = value.appendedBatchValue + '/' + items.batch_id;
                        if (items.children) {
                            if (items.children.length != 0) {
                                this.findSecondOpenFolder(items);
                            }
                        }
                    }
                });
            }
        }
    }

    findSecondOpenFolder(secondFolderValue) {
        if (secondFolderValue.batch_id == this.newBatchId) {
            this.totalBatchIds = (secondFolderValue.appendedBatchValue + '/' + secondFolderValue.batch_id).split('/');
        } else {
            if (secondFolderValue.children) {
                secondFolderValue.children.forEach((items1) => {
                    if (items1.batch_id == this.newBatchId) {
                        this.totalBatchIds = (secondFolderValue.appendedBatchValue + '/' + items1.batch_id).split('/');
                    } else {
                        items1.appendedBatchValue = secondFolderValue.appendedBatchValue + '/' + items1.batch_id;
                        if (items1.children) {
                            if (items1.children.length != 0) {
                                this.findSecondOpenFolder(items1);
                            }
                        }
                    }
                });
            }
        }
    }

    batchDeletePopUp(item) {
        this.selectedBatchForDelete = item;
        this.modalRef = this.modalService.open(this.deleteBatch, {size: 'md', backdrop: 'static'});
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
        this.branchService.classRoomDelete(data).subscribe((successData) => {
                this.deleteBranchSuccess(successData);
            },
            (error) => {
                console.log(error, 'error');
            });
    }

    deleteBranchSuccess(successData) {
        if (successData.IsSuccess) {
            this.modalRef.close();
            this.totalBatchIds = [];
            this.newBatchId = successData.batch_id;
            this.batchDetails = successData.batch_detais.length != 0 ? successData.batch_detais[0].children : [];
            this.showLoader = true;
            if (this.batchDetails.length != 0) {
                this.batchDetails.forEach((items) => {
                    this.findOpenFolderId(items, successData.batch_detais[0]);
                });
            } else {
                this.totalBatchIds = [this.newBatchId];
            }
            setTimeout (() => {
                this.getBranchList();
            }, 2000);
            this.toastr.success('Content Folder Deleted Successfully');
        }
    }

    getBranchList() {
        console.log('[Treeview] Fetching branch list for school:', this.schoolId || this.auth.getSessionData('school_id'),
            'calledForm:', this.calledForm, 'class_id:', this.class_id);
        this.commondata.showLoader(true);
        const schoolId = this.schoolId || this.auth.getSessionData('school_id');
        const data = {
            platform: 'web',
            type: '1',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: schoolId,
            sort_type: this.filterType == 'Latest' ? '1' : this.filterType == 'Oldest' ? '2' : this.filterType == 'A - Z' ? '3' : '4',
            corporate_id: this.auth.getRoleId() == '2' || this.auth.getRoleId() == '4' ? '0' : this.auth.getSessionData('corporate_id')
        };
        this.calledForm == 'class' ? data['class_id'] = this.class_id : '';
        this.calledForm == '' && this.content_id != '' ? data['content_id'] = this.content_id ?? '' : ''
        this.branchService.batchList(data).subscribe((successData) => {
                this.branchListSuccess(successData);
            },
            (error) => {
                this.commondata.showLoader(false);
            });
    }

    branchListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.branchListData = successData.ResponseObject;
            console.log('[Treeview] Branch list response:', this.branchListData);
            this.items = [];
            this.branchListData.forEach((item) => {
                this.items.push(new TreeviewItem(item));
                this.valueCheckArray.push(new TreeviewItem(item));
            });
            console.log('[Treeview] Treeview items built:', this.items);
            this.items.forEach((item) => {
                this.selectChildren(item, item);
            });
            this.showLoader = false;
            this.handleBatchSelectionChange();
        } else {
            console.warn('[Treeview] Failed to load branch list:', successData);
        }
    }

    checkForFolderType(items) {
        let returnValue = true;
        if (items.children && this.calledForm == 'class') {
            returnValue = false;
        } else if (items.children && this.calledForm != 'contentFolder') {
            items.children.every((children) => {
                const value = children.value.split('/');
                if (value[1] == 'folder') {
                    returnValue = false;
                    return false;
                }
                return true;
            });

        } else if (!items.children) {
            returnValue = true;
        } else if (items.children && this.calledForm == 'contentFolder') {
            returnValue = false;
        }
        return returnValue;
    }

    onSelectedChange(event) {

        if (this.calledForm === 'class') {
            const selectedIds = this.extractBatchIdsFromEvent(event);
            console.log('[Treeview] onSelectedChange -> event:', event, 'extracted ids:', selectedIds);
            this.batchid = Array.from(new Set(selectedIds));
            this.updateSelectedBatchNamesFromItems();
            this.updateDropdownButtonLabel();
            this.emitBatchSelection();
        } else {
            this.updateDropdownButtonLabel();
        }
    }

    checkSubjectWithTeacherSubject(totalValue) {
        const userDetails = JSON.parse(this.auth.getSessionData('userDetails'));
        const selectedSchool = JSON.parse(this.auth.getSessionData('rista_data1'));
        if (this.auth.getRoleId() == '4' && totalValue[1] == 'file' && selectedSchool?.individual_teacher == 0) {
            if (totalValue.length == 6) {
                const subject = totalValue[5].split(',');
                const assignedSubjects = userDetails.subject || [];
                return subject.some(folderSubject => assignedSubjects.includes(folderSubject));
            }
        }
        return true;
    }

    selectCheckBox(value, event) {
        if (this.calledForm == 'class') {
            this.selectChildren(value, 'classCheck', value, event.target.checked);
        } else {
            this.items.forEach(item => {
                this.selectChildren(item, 'check', value, event.target.checked);
            });
        }
    }

    selectChildren(i: TreeviewItem, selectedForm?, value?, checked?) {
        if (selectedForm == 'check') {
            i.checked = value.value == i.value ? checked : i.checked;
            if (checked && value.value == i.value) {
                const batchValue = value.value.split('/');
                this.batchid.push(batchValue[0]);
                this.selectedBacthName.push(' ' + ' ' + value.text + ' ' + ' ');
                if (this.calledForm == 'contentLibrary' || this.calledForm == 'confirmPopUp') {
                    this.auth.setSessionData('selectedbatchId', JSON.stringify(this.batchid));
                }
            } else if (!checked && value.value == i.value) {
                this.batchid.forEach((batch, index) => {
                    const batchValue = value.value.split('/');
                    if (batch == batchValue[0]) {
                        this.batchid.splice(index, 1);
                        this.selectedBacthName.splice(index, 1);
                        if (this.calledForm == 'contentLibrary' || this.calledForm == 'confirmPopUp') {
                            this.auth.setSessionData('selectedbatchId', JSON.stringify(this.batchid));
                        }
                    }
                });
            }
            this.handleBatchSelectionChange();
        } else if (selectedForm == 'classCheck') {
            i.checked = checked;
            const batchValue = value.value.split('/');
            if (checked && batchValue[1] == 'folder') {
                this.batchid.push(batchValue[0]);
                this.selectedBacthName.push(' ' + ' ' + value.text + ' ' + ' ');
            } else if (!checked && batchValue[1] == 'folder') {
                this.batchid.forEach((batch, index) => {
                    if (batch == batchValue[0]) {
                        this.batchid.splice(index, 1);
                        this.selectedBacthName.splice(index, 1);
                    }
                });
            }
            this.handleBatchSelectionChange();
        } else {
            i.checked = false;
            if (this.calledForm == 'contentFolder' && this.totalBatchIds.length == 0) {
                i.collapsed = true;
            } else if (this.calledForm == 'contentFolder' && this.totalBatchIds.length != 0) {
                const batchValue = i.value.split('/');
                const valueAvailableOrNot = this.totalBatchIds.some((code) => code === batchValue[0]);
                i.collapsed = !valueAvailableOrNot;
            }
            if (this.type == 'edit') {
                this.selectCheckBoxFromList(i);
            }
        }
        if (i.children) {
            this.selectInsideChildren(i, selectedForm, value, checked);
        }
    }

    selectInsideChildren(item: TreeviewItem, selectedForm, value, checked) {
        item.children.forEach((i: TreeviewItem) => {
            if (selectedForm == 'check') {
                i.checked = value.value == i.value ? checked : i.checked;
                if (checked && value.value == i.value) {
                    const batchValue = value.value.split('/');
                    if (batchValue[0] != '' && batchValue[0] != '0') {
                        this.batchid.push(batchValue[0]);
                        this.selectedBacthName.push(' ' + ' ' + i.text + ' ' + ' ');
                        if (this.calledForm == 'contentLibrary' || this.calledForm == 'confirmPopUp') {
                            this.auth.setSessionData('selectedbatchId', JSON.stringify(this.batchid));
                        }
                    }
                } else if (!checked && value.value == i.value) {
                    this.batchid.forEach((batch, index) => {
                        const batchValue = value.value.split('/');
                        if (batch == batchValue[0]) {
                            this.batchid.splice(index, 1);
                            this.selectedBacthName.splice(index, 1);
                            if (this.calledForm == 'contentLibrary' || this.calledForm == 'confirmPopUp') {
                                this.auth.setSessionData('selectedbatchId', JSON.stringify(this.batchid));
                            }
                        }
                    });
                }
                this.handleBatchSelectionChange();
            } else if (selectedForm == 'classCheck') {
                i.checked = checked;
                const batchValue = i.value.split('/');
                if (checked && batchValue[1] == 'folder') {
                    this.batchid.push(batchValue[0]);
                    this.selectedBacthName.push(' ' + ' ' + i.text + ' ' + ' ');
                } else if (!checked && batchValue[1] == 'folder') {
                    this.batchid.forEach((batch, index) => {
                        if (batch == batchValue[0]) {
                            this.batchid.splice(index, 1);
                            this.selectedBacthName.splice(index, 1);
                        }
                    });
                }
                this.handleBatchSelectionChange();
            } else {
                i.collapsed = this.calledForm != 'contentFolder';
                if (this.calledForm == 'contentFolder' && this.totalBatchIds.length == 0) {
                    i.collapsed = true;
                } else if (this.calledForm == 'contentFolder' && this.totalBatchIds.length != 0) {
                    const batchValue = i.value.split('/');
                    const valueAvailableOrNot = this.totalBatchIds.some((code) => code === batchValue[0]);
                    i.collapsed = !valueAvailableOrNot;
                }
                i.checked = false;
                if (this.type == 'edit') {
                    this.selectCheckBoxFromList(i);
                }
            }
            if (i.children) {
                this.selectInsideChildren(i, selectedForm, value, checked);
            }
        });
    }

    selectCheckBoxFromList(value) {
        const batchValue = value.value.split('/');
        if (this.batchid && Array.isArray(this.batchid)) {
            this.batchid.every((items) => {
                if (items == batchValue[0]) {
                    value.checked = true;
                    this.selectedBacthName.push(' ' + ' ' + value.text + ' ' + ' ');
                    return false;
                }
                return true;
            });
        }
    }

    listDetails(event) {
        if (this.calledForm != 'class') {
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
            if (contentValue[2] == '1') {
                this.auth.setSessionData('preview_page', contentValue[3] == '1' ? 'create_resources' : 'text_resources');
            } else if (contentValue[2] == '2') {
                this.auth.setSessionData('preview_page', contentValue[3] == '1' ? 'create_assignments' : 'text_assignments');
            } else if (contentValue[2] == '3') {
                this.auth.setSessionData('preview_page', contentValue[3] == '1' ? 'create_assessments' : 'text_assessments');
            }
            this.auth.setSessionData('preview', 'content-folder');
            this.router.navigate(['repository/preview']);
        }
    }
}
