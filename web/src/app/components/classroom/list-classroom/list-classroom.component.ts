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
    public expandAll = true;
    private fullBranchListData: any;
    public contentData: any = {};
    public selectedContent: any;
    public schoolId = '';
    public roleId = '';

    @ViewChild('assignContent') assignContent: TemplateRef<any>;
    @ViewChild('deleteBatch') deleteBatch: TemplateRef<any>;
    @ViewChild('addBranch') addBranchTemp: TemplateRef<any>;
    @ViewChild('viewContent') viewContent: TemplateRef<any>;

    public showLoader = true;
    public branchListData: any = [];
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
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            successData.ResponseObject.forEach((items, index) => {
                items.checked = false;
                this.updateArrayValue(items, 0);
                const value = index == 0 ? 'first' : '';
                this.updateChildrenValue(items, 'collapsed', this.expandAll, value);
            });
            this.showLoader = false;
            this.fullBranchListData = successData.ResponseObject;
            this.branchListData = successData.ResponseObject;
            console.log(this.branchListData, 'branchListData');
        }
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

    updateArrayValue(value, indexLevel) {
        const index = indexLevel + 1;
        if (value.children) {
            value.children.forEach((items) => {
                items.paddingPercentage = index * 1.5;
                items.checked = false;
                if (items.children) {
                    this.updateArrayValue(items, index);
                }
            });
        }
    }

    preventProprgation(event) {
        event.stopPropagation();
    }

    checkBox(event, data) {
        console.log(event, data);
        if (data.children) {
            data.children.forEach((items) => {
                this.updateChildrenValue(items, 'checked', event.target.checked);
            });
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
        console.log(event, 'event');
        this.auth.removeSessionData('assignedForm');
        this.modalRef.close();
        if (event) {
            this.multiContent = [];
            this.getBranchList();
        }
    }

    multiAssignContent() {
        this.multiContent = [];
        this.branchListData.forEach((items) => {
            if (items.children) {
                this.pushMultiContent(items);
            }
        });
        setTimeout(() => {
            this.multiContent = this.multiContent.filter((data, i, a) => i === a.indexOf(a.find(f => f.content_id === data.content_id)));
            console.log(this.multiContent, 'sssss');
            if (this.multiContent.length != 0) {
                this.auth.setSessionData('assignedForm', this.auth.getSessionData('content_assign') ?? 'classRoom');
                this.modalRef = this.modalService.open(this.assignContent, {size: 'xl'});
            } else {
                this.toastr.error('Please select content to Assign');
            }
        }, 500);
    }

    pushMultiContent(value) {
        value.children.forEach((items) => {
            if (items.value.split('/')[1] == 'file' && items.checked) {
                this.multiContent.push({
                    name: items.text,
                    content_id: items.value.split('/')[0],
                    content_type: items.content_type,
                    allow_autograde: items.allow_autograde ?? '',
                    without_question: items.without_question ?? '',
                    content_format: items.content_format
                });
            }
            if (items.children) {
                this.pushMultiContent(items);
            }
        });
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

    async expandOrCollapseAll() {
        this.expandAll = !this.expandAll;
        if (!this.expandAll) {
            for (const item of this.branchListData) {
                await this.updateChildrenValue(item, 'collapsed', this.expandAll);
            }
        } else {
            this.getBranchList();
        }
    }

    async updateChildrenValue(value: any, key: string, keyValue: boolean,  calledFor = ''): Promise<void> {
        if (!value || typeof value !== 'object') return;

        value[key] = key == 'collapsed' ? (calledFor != '' ? keyValue : !keyValue) : keyValue;

        if (Array.isArray(value.children) && value.children.length > 0) {
            for (const child of value.children) {
                await this.updateChildrenValue(child, key, keyValue);
            }
        }

        // Add a small delay (optional) to control execution speed
        await new Promise(resolve => setTimeout(resolve, 15));
    }

    onSearch(event) {
        const arrayValue = this.fullBranchListData;
        if (event.target.value.trimStart() != '') {
            this.branchListData = this.filterNestedArray(arrayValue, event.target.value);
            console.log('Search Results:', this.branchListData);
        } else {
            this.branchListData = arrayValue;
        }
    }

    filterNestedArray(data: any[], searchTerm: string): any[] {
        return data.map((item) => {
                const type = item.value.split('/')[1]; // Determine if folder or file
                const children = item.children ? this.filterNestedArray(item.children, searchTerm) : [];

                if (type === 'folder' && item.text.toLowerCase().includes(searchTerm.toLowerCase())) {
                    // If the folder matches, include all its children (unfiltered)
                    return { ...item, children: item.children || [], collapsed: true  };
                }

                if (type === 'folder' && children.length > 0) {
                    // If folder has matching children, include the folder with filtered children
                    return { ...item, children, collapsed: true  };
                }

                if (type === 'file') {
                    // Files are never directly matched unless they're under a matching folder
                    return null;
                }

                return null; // Exclude items that don't match
            }).filter((item) => item !== null);
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
