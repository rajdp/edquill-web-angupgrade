import {Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {ToastrService} from 'ngx-toastr';
import {DatePipe} from '@angular/common';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-announcement-list',
    templateUrl: './announcement-list.component.html',
    styleUrls: ['./announcement-list.component.scss']
})
export class AnnouncementListComponent implements OnInit, OnDestroy {

    @ViewChild('deleteAnnouncement', {static: true}) deleteAnnouncement: TemplateRef<any>;
    public classListData = [];
    public announcementList = [];
    public selectedClass = [];
    public updatedAnnouncementList = [];
    public currentDate: any;
    public editorValue: any = '';
    public announcementPage = 'cancel';
    public announcementSend = '';
    public announcementCommentData = [];
    public modalRef: NgbModalRef;
    @Input() addAnnouncement: any;
    public deleteData: any;
    public type = '';
    public classPatch: any;

    constructor(public auth: AuthService, public toastr: ToastrService, public datePipe: DatePipe, private modalService: NgbModal,
                public commondata: CommonDataService, public route: ActivatedRoute) {
        this.currentDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
        this.route.params.forEach((params) => {
            this.type = params.type;
            this.classPatch = params.type ? [this.auth.getSessionData('announcement-class')] : [];
            console.log(this.classPatch, 'classPathch');
            console.log(this.type, 'type');
        });
    }

    ngOnInit(): void {
        this.getclassList();
    }

    ngOnDestroy(): void {
        if (this.auth.getSessionData('announcement-class')) {
            this.auth.removeSessionData('announcement-class');
        }
    }

    getEditorValue(event) {
        console.log(event.content, 'CONTENT');
        this.editorValue = event.editor;
        console.log(this.editorValue, 'this.editorValue');
        this.addAnnouncement = event.content;
    }

    onClose() {
        this.announcementPage = 'cancel';
    }

    announcementType() {
        this.commondata.showLoader(false);
        this.announcementPage = 'Add';
        this.addAnnouncement = '';
        setTimeout(function() {
            this.commondata ? this.commondata.showLoader(false) : '';
        }, 1000);
    }

    getclassList() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: '1',
            list_type: 'announcement',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
        this.auth.postService(payload, 'classes/list').subscribe((successData: any) => {
            this.classListData = successData.IsSuccess ? successData.ResponseObject : [];
            let class_id= [];
            if (this.auth.getSessionData('announcement-class')) {
                this.classListData.forEach((code) => {
                    if (code.class_id == this.auth.getSessionData('announcement-class')) {
                        class_id.push(code);
                    }
                });
                console.log(class_id, 'class_id');
                this.getclassAnnouncementList(class_id);
            } else {
                this.getclassAnnouncementList([]);
            }
        }, (error) => {
            console.error(error, 'erroR_clas');
        });
    }

    getclassAnnouncementList(event) {
        console.log(event, 'dasdas');
        this.selectedClass = event;
        const class_id = event.map((value) => {
            return value.class_id;
        });
        if (class_id.length != 0) {
            const payload = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                class_id
            };
            this.auth.postService(payload, 'classes/getClassNotes').subscribe((successData: any) => {
                this.updatedAnnouncementList = [];
                this.announcementList = successData.IsSuccess ? successData.ResponseObject : [];
                event.forEach((item) => {
                    const checkClassIdExistOrNot = this.updatedAnnouncementList.some((code => code.class_id == item.class_id));
                    if (!checkClassIdExistOrNot) {
                        this.updatedAnnouncementList.push({
                            class_id: item.class_id,
                            class_name: item.class_name,
                            announcement_type: item.announcement_type,
                            announcement_data: []
                        });
                    }
                });
                this.announcementList.forEach((items) => {
                    const getIndex = this.updatedAnnouncementList.map(announcement => announcement.class_id).indexOf(items.class_id);
                    const checkAnnouncementExistAlready = this.updatedAnnouncementList[getIndex].announcement_data.some((announcement) => announcement.id == items.id);
                    if (!checkAnnouncementExistAlready) {
                        items['comment'] = '';
                        this.updatedAnnouncementList[getIndex].announcement_data.push(items);
                    }
                });
                console.log(this.updatedAnnouncementList, 'updateA');
            }, (error) => {
                console.error(error, 'erroR_clas');
            });
        } else {
            this.announcementList = [];
            this.updatedAnnouncementList = [];
        }
    }

    checkValue(value, type) {
        console.log(value);
    }

    confirmItBeforeDeleteing(value) {
        this.deleteData = value;
        console.log(this.deleteData, 'deleteData');
        this.modalRef = this.modalService.open(this.deleteAnnouncement);
    }

    announcementDetails(value, type) {
        if (type == 'Add' || type == 'Edit') {
            if (this.addAnnouncement == '') {
                this.toastr.error('Announcement should not be empty');
                return false;
            }
        }
        const class_id = this.selectedClass.map((code) => {
            return code.class_id;
        });
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            type: type == 'Add' ? 'add' : 'edit',
            status: type == 'delete' ? '2' : '1',
            add_date: type == 'Add' ? this.currentDate : value.add_date,
            class_id: type == 'Add' ? class_id : [value.class_id],
            note: type == 'delete' ? value.note : this.addAnnouncement.replace(/\r?\n/g, '<br />')
        };
        if (type == 'Edit') {
            data['id'] = value.id;
        } else if (type == 'delete') {
            data['id'] = value.id;
        }

        this.auth.postService(data, 'classes/classAddNotes').subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    console.log(value, 'value111');
                    this.getclassAnnouncementList(this.selectedClass);
                    this.editorValue != '' ? this.editorValue.setContent('') : '';
                    this.addAnnouncement = '';
                    if (type == 'Edit' || type == 'Add') {
                        this.announcementPage = 'cancel';
                    } else if (type == 'delete') {
                        this.modalRef.close();
                    }
                } else {
                    this.toastr.error(successData.ErrorObject);
                }
            },
            (error) => {
            });
    }

    announcementEdit(data, type) {
        console.log(data, type);
        if (type == 'Edit') {
            this.commondata.showLoader(true);
            this.announcementPage = data.id;
            this.addAnnouncement = data.note;
            setTimeout(() => {
                this.commondata.showLoader(false);
            }, 2000);
        } else {
            this.commondata.showLoader(true);
            this.announcementPage = data.class_id;
            this.addAnnouncement != '' ? this.addAnnouncement.setContent('') : '';
            setTimeout(() => {
                this.commondata.showLoader(false);
            }, 2000);
        }
    }

    announcementView(value) {
        console.log(value);
        this.announcementSend = value.id;
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            note_id: value.id
        };
        this.auth.postService(data, 'classes/getAnnouncementComments').subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.announcementCommentData = successData.ResponseObject;
                    this.updateViewComment(value);
                    console.log(this.announcementCommentData, 'value111');
                } else {
                    this.toastr.error(successData.ErrorObject);
                }
            },
            (error) => {
            });
    }

    updateViewComment(value) {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            note_id: value.id
        };
        this.auth.postService(payload, 'classes/updateComments').subscribe((successData) => {
            console.log(successData, 'dsdasad');
        }, (error) => {
            console.error(error, 'error');
        });
    }

    announcementCommentDetails(value) {
        console.log(value);
        console.log(value.comment, 'comment');
        if (value.comment != '') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                note_id: value.id,
                comment: value.comment,
                status: '1'
            };
            this.auth.postService(data, 'classes/addAnnouncementComments').subscribe((successData: any) => {
                    if (successData.IsSuccess) {
                        this.announcementCommentData = successData.ResponseObject;
                        this.auth.getRoleId() == '4' ? this.getclassAnnouncementList(this.selectedClass) : '';
                        console.log(this.announcementCommentData, 'value111');
                    } else {
                        this.toastr.error(successData.ErrorObject);
                    }
                },
                (error) => {
                });
        } else {
            this.toastr.error('Please enter the Comment');
        }
    }
}
