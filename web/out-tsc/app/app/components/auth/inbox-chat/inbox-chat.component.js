import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { AuthService } from '../../../shared/service/auth.service';
import { EnvironmentService } from '../../../environment.service';
import { CommonService } from '../../../shared/service/common.service';
import { ToastrService } from 'ngx-toastr';
import { SseClient } from 'ngx-sse-client';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-multiselect-dropdown";
const _c0 = ["messageInput"];
const _c1 = ["messagerChat"];
const _c2 = () => ["application/document", "application/doc", "application/txt"];
const _c3 = () => ["image/jpg", "image/jpeg", "image/png"];
const _c4 = () => ({ standalone: true });
function InboxChatComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24)(1, "div", 25)(2, "p", 26);
    i0.ɵɵtext(3, "Conversation Not Started!");
    i0.ɵɵelementEnd()()();
} }
function InboxChatComponent_div_10_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 39);
} if (rf & 2) {
    const message_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("srcset", message_r3.profile_url);
} }
function InboxChatComponent_div_10_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 39);
} if (rf & 2) {
    const message_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("srcset", ctx_r3.env.imgUrl + "/" + message_r3.profile_url);
} }
function InboxChatComponent_div_10_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} if (rf & 2) {
    i0.ɵɵproperty("srcset", "assets/images/dashboard/default.png");
} }
function InboxChatComponent_div_10_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_6_0;
    const message_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", !message_r3.createdByMe ? "reply_message_other" : "reply_message_you");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", (tmp_6_0 = message_r3.parent_message_data) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "Files Uploaded", " ");
} }
function InboxChatComponent_div_10_div_15_div_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 52);
} }
function InboxChatComponent_div_10_div_15_div_2_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 53);
} }
function InboxChatComponent_div_10_div_15_div_2_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 54);
} }
function InboxChatComponent_div_10_div_15_div_2_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 55);
} }
function InboxChatComponent_div_10_div_15_div_2_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 56);
} }
function InboxChatComponent_div_10_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "a", 46);
    i0.ɵɵtemplate(2, InboxChatComponent_div_10_div_15_div_2_i_2_Template, 1, 0, "i", 47)(3, InboxChatComponent_div_10_div_15_div_2_i_3_Template, 1, 0, "i", 48)(4, InboxChatComponent_div_10_div_15_div_2_i_4_Template, 1, 0, "i", 49)(5, InboxChatComponent_div_10_div_15_div_2_i_5_Template, 1, 0, "i", 50)(6, InboxChatComponent_div_10_div_15_div_2_i_6_Template, 1, 0, "i", 51);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const attachment_r5 = ctx.$implicit;
    const message_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("href", ctx_r3.env.imgUrl + "/" + attachment_r5.attachment.original_image_url, i0.ɵɵsanitizeUrl)("ngClass", (message_r3 == null ? null : message_r3.createdByMe) ? "text-white" : "text-black")("title", attachment_r5.attachment.image);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", attachment_r5.attachment.type == "application/pdf");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", attachment_r5.attachment.type == "application/xlsx");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(9, _c2).includes(attachment_r5.attachment.type));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(10, _c3).includes(attachment_r5.attachment.type));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", attachment_r5.attachment.type == "application/msword");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", attachment_r5.attachment.image, " ");
} }
function InboxChatComponent_div_10_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵelement(1, "hr", 43);
    i0.ɵɵtemplate(2, InboxChatComponent_div_10_div_15_div_2_Template, 8, 11, "div", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", message_r3.attachments);
} }
function InboxChatComponent_div_10_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 58)(2, "button", 59);
    i0.ɵɵlistener("click", function InboxChatComponent_div_10_div_16_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r6); const message_r3 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.reply(message_r3)); });
    i0.ɵɵtext(3, "Reply");
    i0.ɵɵelementEnd()()();
} }
function InboxChatComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵlistener("click", function InboxChatComponent_div_10_Template_div_click_0_listener($event) { const message_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.routeToParentMessage(message_r3, $event)); });
    i0.ɵɵelementStart(1, "div", 28);
    i0.ɵɵtemplate(2, InboxChatComponent_div_10_img_2_Template, 1, 1, "img", 29)(3, InboxChatComponent_div_10_img_3_Template, 1, 1, "img", 29)(4, InboxChatComponent_div_10_img_4_Template, 1, 1, "img", 30);
    i0.ɵɵelementStart(5, "div", 31)(6, "div", 32)(7, "div", 33);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 34);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, InboxChatComponent_div_10_div_12_Template, 2, 2, "div", 35);
    i0.ɵɵelementStart(13, "div", 36);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, InboxChatComponent_div_10_div_15_Template, 3, 1, "div", 37)(16, InboxChatComponent_div_10_div_16_Template, 4, 0, "div", 38);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const message_r3 = ctx.$implicit;
    i0.ɵɵproperty("id", "message" + message_r3.message_id)("ngClass", (message_r3 == null ? null : message_r3.parent_message_id) ? "cursor" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", !(message_r3 == null ? null : message_r3.createdByMe) ? "left-msg" : "right-msg");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r3.profile_url != "" && message_r3.profile_url.split("/").includes("assets"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r3.profile_url != "" && !message_r3.profile_url.split("/").includes("assets"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r3.profile_url == "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(message_r3.from_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 12, message_r3.created_date, "MM/dd/yyyy, h:mm a"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", message_r3.parent_message_id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", message_r3.body, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r3.attachments.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r3.allowReply);
} }
function InboxChatComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62)(1, "div", 63)(2, "span", 64);
    i0.ɵɵtext(3, "\uD83D\uDCC4");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 65);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 66);
    i0.ɵɵlistener("click", function InboxChatComponent_div_14_div_1_Template_button_click_6_listener() { const ind_r8 = i0.ɵɵrestoreView(_r7).index; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.deleteUploadFiles(ind_r8)); });
    i0.ɵɵelementStart(7, "span", 67);
    i0.ɵɵtext(8, "\u00D7");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const f_r9 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(f_r9.image);
} }
function InboxChatComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtemplate(1, InboxChatComponent_div_14_div_1_Template, 9, 1, "div", 61);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.uploadMailFiles);
} }
function InboxChatComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 68)(1, "div", 69)(2, "div", 70)(3, "span", 71);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 66);
    i0.ɵɵlistener("click", function InboxChatComponent_div_15_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r10); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.clearReplyData()); });
    i0.ɵɵelementStart(6, "span", 72);
    i0.ɵɵtext(7, "\u00D7");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.messageData.body);
} }
function InboxChatComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74)(1, "div", 75);
    i0.ɵɵelement(2, "div", 76)(3, "div", 77);
    i0.ɵɵelementEnd()();
} }
function InboxChatComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtemplate(1, InboxChatComponent_div_16_div_1_Template, 4, 0, "div", 73);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.skeletonArray);
} }
function InboxChatComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 78)(1, "label", 79)(2, "b", 80);
    i0.ɵɵtext(3, "Student List");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "ng-multiselect-dropdown", 81);
    i0.ɵɵtwoWayListener("ngModelChange", function InboxChatComponent_div_21_Template_ng_multiselect_dropdown_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.selectedStudent, $event) || (ctx_r3.selectedStudent = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("settings", ctx_r3.settings)("data", ctx_r3.studentList)("ngModelOptions", i0.ɵɵpureFunction0(5, _c4));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.selectedStudent);
    i0.ɵɵproperty("placeholder", "Select Student");
} }
export class InboxChatComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.env = inject(EnvironmentService);
        this.common = inject(CommonService);
        this.toastr = inject(ToastrService);
        this.sseClient = inject(SseClient);
        this.cdr = inject(ChangeDetectorRef);
        this.showSkeletonLoader = false;
        this.messageList = [];
        this.sendMessageInbox = '';
        this.uploadMailFiles = [];
        this.skeletonArray = [];
        this.messageId = '';
        this.messageData = {};
        this.choosedData = {};
        this.arrayList = [];
        this.studentList = [];
        this.to_id = [];
        this.updateCount = new EventEmitter();
        this.maximumAllowedUploadedSize = 10;
        this.settings = {
            singleSelection: false,
            idField: 'user_id',
            textField: 'name',
            enableCheckAll: true,
            selectAllText: 'Select all',
            unSelectAllText: 'UnSelect all',
            allowSearchFilter: true,
            clearSearchFilter: true,
            itemsShowLimit: 3,
            searchPlaceholderText: 'Search Student',
            noDataAvailablePlaceholderText: 'No data available',
            closeDropDownOnSelection: false,
        };
        this.subs = [];
    }
    ngOnInit() {
        this.messageList = this.arrayList;
        if (this.auth.getRoleId() != '5') {
            this.choosedData[0]?.students.forEach((items) => items.name = items.first_name + ' ' + items.last_name);
            this.studentList = this.choosedData[0]?.students ?? [];
            this.selectedStudent = [...this.studentList];
        }
        setTimeout(() => {
            const element = document.getElementById('messagerChat');
            if (element) {
                element.scrollTo({ behavior: 'smooth', top: element.scrollHeight });
            }
        }, 0);
        this.listMessage();
        this.updateMessageCount();
    }
    deleteUploadFiles(index) {
        this.uploadMailFiles.splice(index, 1);
    }
    clearReplyData() {
        this.messageData = {};
        this.messageId = '';
        this.auth.getRoleId() != '5' ? this.selectedStudent = [...this.studentList] : '';
        this.messageInput.nativeElement.focus();
    }
    encodePdfFileAsURL(event) {
        const images = [];
        const fileSize = [];
        const imageLength = event.target.files.length;
        const max10MB = (1024 * 1024) * this.maximumAllowedUploadedSize;
        event.target.files.forEach((items, index) => this.skeletonArray.push(index));
        this.auth.setSessionData('sse_loader', 'true');
        this.showSkeletonLoader = true;
        for (let i = 0; i < event.target.files.length; i++) {
            const fileDetails = event.target.files[i];
            const checkForDuplicateFile = this.uploadMailFiles.some(items => items.image == fileDetails[i].image && items.size == fileDetails[i].size);
            fileSize.push(fileDetails.size);
            const isLastElement = fileSize.length - 1 === i;
            if (isLastElement) {
                const currentFilesize = fileSize.reduce((a, c) => a + c);
                const oldFilesize = this.uploadMailFiles.length == 0 ? 0 : this.uploadMailFiles.map(o => o.size).reduce((a, c) => a + c);
                const totalSize = currentFilesize + oldFilesize;
                if (max10MB >= totalSize) {
                    if (!checkForDuplicateFile) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            const uploadTypeList = event.target.result.split(',');
                            const pic = fileDetails.name.split('.').slice(-1)[0];
                            images.push({
                                image: uploadTypeList[1],
                                size: fileDetails.size,
                                type: ['xlsx', 'xls', 'csv'].includes(pic.toLowerCase()) ? 'application/xlsx' : fileDetails.type,
                                name: fileDetails.name,
                            });
                            const allowedTypes = ['pdf', 'doc', 'txt', 'docx', 'msword', 'xlsx', 'xls', 'csv', 'document', 'jpg', 'jpeg', 'png'];
                            if (allowedTypes.includes(pic.toLowerCase())) {
                                if (imageLength == images.length) {
                                    images.forEach((items) => {
                                        const name = items.name.split('.');
                                        name.pop();
                                        items.name = name.length > 1 ? name.join('.').toString() : name.toString();
                                    });
                                    setTimeout(() => {
                                        this.onUploadKYCFinishedpdf(images);
                                    }, 0);
                                }
                            }
                            else {
                                this.toastr.error('Pdf, Doc, Text, Excel and Docx are the required file format');
                                this.auth.setSessionData('sse_loader', 'false');
                                this.showSkeletonLoader = false;
                                this.skeletonArray = [];
                            }
                        };
                        reader.readAsDataURL(event.target.files[i]);
                    }
                    else {
                        this.toastr.error('File already exist. Please choose a different file');
                        this.auth.setSessionData('sse_loader', 'false');
                        this.showSkeletonLoader = false;
                        this.skeletonArray = [];
                        break;
                    }
                }
                else {
                    this.toastr.error('Total upload file size calculate must be less than ' + this.maximumAllowedUploadedSize + ' MB');
                    this.showSkeletonLoader = false;
                    this.auth.setSessionData('sse_loader', 'false');
                    this.skeletonArray = [];
                    break;
                }
            }
            else {
                this.auth.setSessionData('sse_loader', 'false');
                this.showSkeletonLoader = false;
                this.skeletonArray = [];
            }
        }
    }
    listMessage() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            class_id: this.choosedData[0]?.class_id,
            response_type: 'SSE'
        };
        console.log(payload, 'payload');
        this.subs.push(this.sseClient.stream('mailbox/listMessages', { keepAlive: true, reconnectionDelay: 2000, responseType: 'event' }, { body: payload }, 'POST').subscribe((event) => {
            if (event.type === 'error') {
                const errorEvent = event;
            }
            else if (event.type == 'message') {
                const data = JSON.parse(event.data);
                data.messageList.forEach((item) => {
                    let checkTeacherIdExist = true;
                    const checkStudentIdExist = this.studentList.length != 0 ? this.studentList?.some(student => student.user_id == item.from_id) : false;
                    if (this.auth.getRoleId() != '5') {
                        checkTeacherIdExist = this.choosedData[0]?.teacher_ids.some(teacher => teacher == item.from_id);
                    }
                    else if (this.auth.getRoleId() == '5') {
                        checkTeacherIdExist = this.choosedData[0]?.teacher_id.some(teacher => teacher == item.from_id);
                    }
                    item.createdByMe = item.from_id == this.auth.getUserId();
                    item.allowReply = !item.createdByMe && (checkStudentIdExist || checkTeacherIdExist);
                });
                this.messageList = data.messageList;
                this.messageList.forEach(item => {
                    if (item.parent_message_id) {
                        const getIndex = this.messageList.findIndex(index => index.message_id == item.parent_message_id);
                        item.parent_message_data = this.messageList[getIndex].body ?? '';
                    }
                    else {
                        item.parent_message_data = '';
                    }
                });
                this.cdr.detectChanges();
            }
        }));
    }
    updateMessageCount() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_id: this.choosedData[0]?.class_id,
            school_id: this.auth.getSessionData('school_id'),
            is_read: '1'
        };
        this.auth.postService(payload, 'mailbox/update').subscribe((successData) => {
            console.log(successData, 'successData');
            if (successData.IsSuccess) {
                this.updateCount.emit(0);
            }
        }, (error) => console.error(error, 'error_updateCount'));
    }
    routeToParentMessage(data, event) {
        console.log(data.parent_message_id);
        if (!data.parent_message_id) {
            event.stopPropagation();
            return;
        }
        const element = document.getElementById('message' + data.parent_message_id);
        console.log(element, 'eee');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    }
    sendMessage() {
        if (this.sendMessageInbox.trim() != '' || this.uploadMailFiles.length != 0) {
            const sendId = this.auth.getRoleId() == '4' ? [...this.selectedStudent.map(user => user.user_id), ...this.to_id] : this.to_id;
            const payload = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                body: this.sendMessageInbox,
                class_id: this.choosedData[0]?.class_id,
                attachment: this.uploadMailFiles,
                message_id: this.messageId ?? '',
                to_id: sendId
            };
            this.auth.postService(payload, 'mailbox/sendMessage').subscribe((successData) => {
                console.log(successData, 'successData');
                if (successData.IsSuccess) {
                    this.sendMessageInbox = '';
                    this.messageInput.nativeElement.value = '';
                    this.uploadMailFiles = [];
                    this.messageId = '';
                    if (this.auth.getRoleId() != '5') {
                        this.selectedStudent = [...this.studentList];
                    }
                    this.listMessage();
                    setTimeout(() => {
                        const element = document.getElementById('messagerChat');
                        if (element) {
                            console.log(element);
                            element.scrollTo({ behavior: 'smooth', top: element.scrollHeight });
                        }
                    }, 1000);
                }
            }, (error) => console.error(error, 'error_Message'));
        }
    }
    reply(data) {
        console.log(data, 'messageData');
        this.messageData = data;
        this.messageId = data.message_id;
        this.messageInput.nativeElement.focus();
        this.studentList.forEach((items) => {
            if (items.user_id == data.from_id) {
                this.selectedStudent = [];
                this.selectedStudent = [...[items]];
            }
        });
    }
    onUploadKYCFinishedpdf(getUrlEdu) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: getUrlEdu,
            uploadtype: 'mailbox'
        };
        this.common.fileUpload(data).subscribe((successData) => {
            this.pdfuploadSuccess(successData);
        }, (error) => {
            this.auth.setSessionData('sse_loader', 'false');
            this.showSkeletonLoader = false;
            this.skeletonArray = [];
            console.error(error);
        });
    }
    pdfuploadSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.uploadMailFiles = [...this.uploadMailFiles, ...successData.ResponseObject.imagepath];
            this.uploadMailFiles.map(items => items.sizeMb = ((items.size / 1048576).toFixed(2) + 'MB'));
            setTimeout(() => {
                this.messageInput.nativeElement.focus();
            }, 0);
            console.log(this.uploadMailFiles, 'response');
            this.showSkeletonLoader = false;
            this.auth.setSessionData('sse_loader', 'false');
            this.skeletonArray = [];
        }
        else {
            this.toastr.error(successData.ErrorObject.message);
            this.showSkeletonLoader = false;
            this.auth.setSessionData('sse_loader', 'false');
            this.skeletonArray = [];
        }
    }
    enterMessageValue(event) {
        this.sendMessageInbox = event;
    }
    ngAfterViewInit() {
        this.messageInput.nativeElement.focus();
    }
    ngOnDestroy() {
        this.subs.forEach((val) => {
            val.unsubscribe();
        });
        this.auth.setSessionData('sse_loader', 'false');
    }
    static { this.ɵfac = function InboxChatComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InboxChatComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InboxChatComponent, selectors: [["app-inbox-chat"]], viewQuery: function InboxChatComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.messageInput = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.messagerChat = _t.first);
        } }, inputs: { choosedData: "choosedData", arrayList: "arrayList", to_id: "to_id" }, outputs: { updateCount: "updateCount" }, decls: 30, vars: 11, consts: [["messageInput", ""], ["hiddenfileinput", ""], [1, "row"], [1, "col-md-12"], [1, "msger"], [1, "msger-header"], [1, "msger-header-title"], [1, "fas", "fa-comment-alt"], ["id", "messagerChat", 1, "msger-chat"], [1, "row", 2, "height", "max-content !important"], ["class", "col-12 pt-5", 4, "ngIf"], ["class", "col-12 my-2", 3, "id", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "msger-inputarea"], [1, "w-100", "custom-textarea-container", 3, "ngClass"], ["class", "row pb-1 px-1 pt-0", 4, "ngIf"], ["style", "padding: 0 5px !important", "class", "row py-0 px-1", 4, "ngIf"], ["colspan", "5", "maxlength", "500", "placeholder", "Enter your message...", 1, "message-input", "form-control", 3, "keydown.enter", "input", "ngClass"], [1, "col-12", "pb-0", "mt-1"], ["class", "col-6", 4, "ngIf"], ["accept", ".pdf, .doc, .txt, .docx, .xlsx, .xls, .csv, .jpg, .jpeg, .png", "multiple", "", "type", "file", 2, "display", "none", 3, "change"], ["title", "File Upload", "aria-describedby", "inputGroupFileAddon01", 1, "btn", "btn-sm", "btn-primary", "ml-2", "p-0", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-paperclip"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", "ml-2", "p-0", "px-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane-o"], [1, "col-12", "pt-5"], [1, "col-12", "mt-2", "card", "class-card1"], [1, "m-0", "text-center", "p-3"], [1, "col-12", "my-2", 3, "click", "id", "ngClass"], [1, "msg", 3, "ngClass"], ["class", "msg-img", "alt", "PI", 3, "srcset", 4, "ngIf"], ["class", "msg-img", "alt", "Default Image", 3, "srcset", 4, "ngIf"], [1, "msg-bubble"], [1, "msg-info"], [1, "msg-info-name"], [1, "msg-info-time"], ["class", "msg-text mb-2", 3, "ngClass", 4, "ngIf"], [1, "msg-text"], ["class", "row link", 4, "ngIf"], ["class", "row mt-2", 4, "ngIf"], ["alt", "PI", 1, "msg-img", 3, "srcset"], ["alt", "Default Image", 1, "msg-img", 3, "srcset"], [1, "msg-text", "mb-2", 3, "ngClass"], [1, "row", "link"], [1, "w-100", "bg-white"], ["class", "col-12 my-1", 4, "ngFor", "ngForOf"], [1, "col-12", "my-1"], ["target", "_blank", 3, "href", "ngClass", "title"], ["class", "fa fa-file-pdf-o mr-1", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-file-excel-o mr-1", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-file-o mr-1", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-picture-o mr-1", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-file-text-o mr-1", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-file-pdf-o", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-file-excel-o", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-file-o", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-picture-o", "mr-1"], ["aria-hidden", "true", 1, "fa", "fa-file-text-o", "mr-1"], [1, "row", "mt-2"], [1, "col-12", "text-right"], [1, "btn-sm", "btn-outline-primary", 3, "click"], [1, "row", "pb-1", "px-1", "pt-0"], ["class", "col-3 py-0 mt-1", 4, "ngFor", "ngForOf"], [1, "col-3", "py-0", "mt-1"], [1, "file-preview"], [1, "file-icon"], [1, "file-name"], [1, "remove-file", "cursor", 2, "font-size", "16px", 3, "click"], [1, "close-icon"], [1, "row", "py-0", "px-1", 2, "padding", "0 5px !important"], [1, "col-12", "py-0", "mt-1"], [1, "reply-preview"], [1, "reply-name"], [1, "reply_close_icon"], ["class", "col-3 py-0 my-2", 4, "ngFor", "ngForOf"], [1, "col-3", "py-0", "my-2"], [1, "skeleton-loader"], [1, "skeleton-icon"], [1, "skeleton-text"], [1, "col-6"], [1, "p-0", "mb-1", 2, "font-weight", "500"], [1, "p-0"], [1, "inbox-dropdown", "p-0", 3, "ngModelChange", "settings", "data", "ngModelOptions", "ngModel", "placeholder"]], template: function InboxChatComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "header", 5)(4, "div", 6);
            i0.ɵɵelement(5, "i", 7);
            i0.ɵɵtext(6, " Inbox ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "main", 8)(8, "div", 9);
            i0.ɵɵtemplate(9, InboxChatComponent_div_9_Template, 4, 0, "div", 10)(10, InboxChatComponent_div_10_Template, 17, 15, "div", 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "form", 12)(12, "div", 2)(13, "div", 13);
            i0.ɵɵtemplate(14, InboxChatComponent_div_14_Template, 2, 1, "div", 14)(15, InboxChatComponent_div_15_Template, 8, 1, "div", 15)(16, InboxChatComponent_div_16_Template, 2, 1, "div", 14);
            i0.ɵɵelementStart(17, "textarea", 16, 0);
            i0.ɵɵlistener("keydown.enter", function InboxChatComponent_Template_textarea_keydown_enter_17_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.sendMessage()); })("input", function InboxChatComponent_Template_textarea_input_17_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.enterMessageValue($event.target.value)); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "div", 17)(20, "div", 2);
            i0.ɵɵtemplate(21, InboxChatComponent_div_21_Template, 5, 6, "div", 18);
            i0.ɵɵelementStart(22, "div")(23, "input", 19, 1);
            i0.ɵɵlistener("change", function InboxChatComponent_Template_input_change_23_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.encodePdfFileAsURL($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "button", 20);
            i0.ɵɵlistener("click", function InboxChatComponent_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r1); const hiddenfileinput_r12 = i0.ɵɵreference(24); return i0.ɵɵresetView(hiddenfileinput_r12.click()); });
            i0.ɵɵelement(26, "i", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "button", 22);
            i0.ɵɵlistener("click", function InboxChatComponent_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.sendMessage()); });
            i0.ɵɵelement(28, "i", 23);
            i0.ɵɵtext(29, " Send");
            i0.ɵɵelementEnd()()()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ctx.messageList.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.messageList);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.messageId != "" ? "reply" : "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.uploadMailFiles.length != 0 && !ctx.showSkeletonLoader);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.messageId != "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showSkeletonLoader);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.messageId != "" ? "reply_textarea" : "");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.auth.getRoleId() != "5");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("col-", ctx.auth.getRoleId() != "5" ? "6" : "12", " text-right align-self-center");
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.ɵNgNoValidate, i2.NgControlStatus, i2.NgControlStatusGroup, i2.NgModel, i2.NgForm, i3.MultiSelectComponent, i1.DatePipe], styles: [".msger[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: space-between;\n  width: 100%;\n  height: calc(100% - 50px);\n  border: 2px solid #ddd;\n  border-radius: 5px;\n  background: #fff;\n  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);\n}\n\n.msger-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 2px solid #ddd;\n  background: #eee;\n  color: #666;\n}\n\n.msger-chat[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 10px;\n}\n\n.msger-chat[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.msger-chat[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #ddd;\n}\n\n.msger-chat[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #bdbdbd;\n}\n\n.msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 10px;\n}\n\n.msg[_ngcontent-%COMP%]:last-of-type {\n  margin: 0;\n}\n\n.msg-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n  box-shadow: 0 0 15px #1e1e2017;\n  border-radius: 50%;\n  cursor: default;\n}\n\n.msg-bubble[_ngcontent-%COMP%] {\n  max-width: 75%;\n  padding: 15px;\n  border-radius: 15px;\n  background: #ececec;\n}\n\n.msg-bubble1[_ngcontent-%COMP%] {\n  min-width: 465px;\n}\n\n.msg-bubble1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.msg-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.msg-info-name[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-weight: bold;\n}\n\n.msg-info-time[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n}\n\n.left-msg[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n}\n\n.right-msg[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n.right-msg[_ngcontent-%COMP%]   .msg-bubble[_ngcontent-%COMP%] {\n  background: #579ffb;\n  color: #fff;\n  border-bottom-right-radius: 0;\n}\n\n.right-msg[_ngcontent-%COMP%]   .msg-img[_ngcontent-%COMP%] {\n  margin: 0 0 0 10px;\n}\n\n.msger-inputarea[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-top: 2px solid #ddd;\n  background: #eee;\n}\n\n.msger-inputarea[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: none;\n  border-radius: 3px;\n  font-size: 1em;\n}\n\n.message-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #FFFFFF;\n  min-height: 100px;\n}\n\n.msger-send-btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  background: rgb(0, 196, 65);\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background 0.23s;\n}\n\n.msger-send-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(0, 180, 50);\n}\n\n.msger-chat[_ngcontent-%COMP%] {\n  background-color: #fcfcfe;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23dddddd' fill-opacity='0.4'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3Cpath id='path6_fill-copy' d='M284.37 16c.2.65.39 1.32.54 2H281.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06a5 5 0 0 1-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM246.18 27l16.37 4.91L278.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H246.9z'/%3E%3Cpath d='M159.5 21.02A9 9 0 0 0 151 15h-42a9 9 0 0 0-8.5 6.02 6 6 0 0 0 .02 11.96A8.99 8.99 0 0 0 109 45h42a9 9 0 0 0 8.48-12.02 6 6 0 0 0 .02-11.96zM151 17h-42a7 7 0 0 0-6.33 4h54.66a7 7 0 0 0-6.33-4zm-9.34 26a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-7a7 7 0 1 1 0-14h42a7 7 0 1 1 0 14h-9.34zM109 27a9 9 0 0 0-7.48 4H101a4 4 0 1 1 0-8h58a4 4 0 0 1 0 8h-.52a9 9 0 0 0-7.48-4h-42z'/%3E%3Cpath d='M39 115a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3-29v-2h8v-6H40a4 4 0 0 0-4 4v10H22l-1.33 4-.67 2h2.19L26 130h26l3.81-40H58l-.67-2L56 84H42v-6zm-4-4v10h2V74h8v-2h-8a2 2 0 0 0-2 2zm2 12h14.56l.67 2H22.77l.67-2H40zm13.8 4H24.2l3.62 38h22.36l3.62-38z'/%3E%3Cpath d='M129 92h-6v4h-6v4h-6v14h-3l.24 2 3.76 32h36l3.76-32 .24-2h-3v-14h-6v-4h-6v-4h-8zm18 22v-12h-4v4h3v8h1zm-3 0v-6h-4v6h4zm-6 6v-16h-4v19.17c1.6-.7 2.97-1.8 4-3.17zm-6 3.8V100h-4v23.8a10.04 10.04 0 0 0 4 0zm-6-.63V104h-4v16a10.04 10.04 0 0 0 4 3.17zm-6-9.17v-6h-4v6h4zm-6 0v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6 0v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6 4v-4h-4v8h1v-4h3zm7 24a12 12 0 0 0 11.83-10h7.92l-3.53 30h-32.44l-3.53-30h7.92A12 12 0 0 0 130 126z'/%3E%3Cpath d='M212 86v2h-4v-2h4zm4 0h-2v2h2v-2zm-20 0v.1a5 5 0 0 0-.56 9.65l.06.25 1.12 4.48a2 2 0 0 0 1.94 1.52h.01l7.02 24.55a2 2 0 0 0 1.92 1.45h4.98a2 2 0 0 0 1.92-1.45l7.02-24.55a2 2 0 0 0 1.95-1.52L224.5 96l.06-.25a5 5 0 0 0-.56-9.65V86a14 14 0 0 0-28 0zm4 0h6v2h-9a3 3 0 1 0 0 6H223a3 3 0 1 0 0-6H220v-2h2a12 12 0 1 0-24 0h2zm-1.44 14l-1-4h24.88l-1 4h-22.88zm8.95 26l-6.86-24h18.7l-6.86 24h-4.98zM150 242a22 22 0 1 0 0-44 22 22 0 0 0 0 44zm24-22a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-28.38 17.73l2.04-.87a6 6 0 0 1 4.68 0l2.04.87a2 2 0 0 0 2.5-.82l1.14-1.9a6 6 0 0 1 3.79-2.75l2.15-.5a2 2 0 0 0 1.54-2.12l-.19-2.2a6 6 0 0 1 1.45-4.46l1.45-1.67a2 2 0 0 0 0-2.62l-1.45-1.67a6 6 0 0 1-1.45-4.46l.2-2.2a2 2 0 0 0-1.55-2.13l-2.15-.5a6 6 0 0 1-3.8-2.75l-1.13-1.9a2 2 0 0 0-2.5-.8l-2.04.86a6 6 0 0 1-4.68 0l-2.04-.87a2 2 0 0 0-2.5.82l-1.14 1.9a6 6 0 0 1-3.79 2.75l-2.15.5a2 2 0 0 0-1.54 2.12l.19 2.2a6 6 0 0 1-1.45 4.46l-1.45 1.67a2 2 0 0 0 0 2.62l1.45 1.67a6 6 0 0 1 1.45 4.46l-.2 2.2a2 2 0 0 0 1.55 2.13l2.15.5a6 6 0 0 1 3.8 2.75l1.13 1.9a2 2 0 0 0 2.5.8zm2.82.97a4 4 0 0 1 3.12 0l2.04.87a4 4 0 0 0 4.99-1.62l1.14-1.9a4 4 0 0 1 2.53-1.84l2.15-.5a4 4 0 0 0 3.09-4.24l-.2-2.2a4 4 0 0 1 .97-2.98l1.45-1.67a4 4 0 0 0 0-5.24l-1.45-1.67a4 4 0 0 1-.97-2.97l.2-2.2a4 4 0 0 0-3.09-4.25l-2.15-.5a4 4 0 0 1-2.53-1.84l-1.14-1.9a4 4 0 0 0-5-1.62l-2.03.87a4 4 0 0 1-3.12 0l-2.04-.87a4 4 0 0 0-4.99 1.62l-1.14 1.9a4 4 0 0 1-2.53 1.84l-2.15.5a4 4 0 0 0-3.09 4.24l.2 2.2a4 4 0 0 1-.97 2.98l-1.45 1.67a4 4 0 0 0 0 5.24l1.45 1.67a4 4 0 0 1 .97 2.97l-.2 2.2a4 4 0 0 0 3.09 4.25l2.15.5a4 4 0 0 1 2.53 1.84l1.14 1.9a4 4 0 0 0 5 1.62l2.03-.87zM152 207a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-24 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm16 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm86-29a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1 246 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM275 214a29 29 0 0 0-57.97 0h57.96zM72.33 198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01 4.01 0 0 0 7.09 2.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99 1.99 0 0 1-2 2 2 2 0 0 1-1.66-.88zM75 176c.38 0 .74-.04 1.1-.12a4 4 0 0 0 6.19 2.4A13.94 13.94 0 0 1 84 185v24a6 6 0 0 1-6 6h-3v9a5 5 0 1 1-10 0v-9h-3a6 6 0 0 1-6-6v-24a14 14 0 0 1 14-14 5 5 0 0 0 5 5zm-17 15v12a1.99 1.99 0 0 0 1.22 1.84 2 2 0 0 0 2.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98 3.98 0 0 1-5.35 3.77 3.98 3.98 0 0 1-.65-.3V209a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6 6 0 0 1-5.2-3 7 7 0 0 1-6.47-4.88A12 12 0 0 0 58 185v6zm9 24v9a3 3 0 1 0 6 0v-9h-6z'/%3E%3Cpath d='M-17 191a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H4zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1-14 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM15 214a29 29 0 0 0-57.97 0h57.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  max-height: 50vh;\n}\n\n//.link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n//  color: #fff !important;\n//}\n//\n.link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n//  color: #fff !important;\n  text-decoration: underline !important;\n}\n\n.link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  //color: #fff;\n}\n\n.link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  //color: #fff !important;\n  text-decoration: underline !important;\n}\n\n\n.search-input[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 8px 10px;\n  border-radius: 4px;\n  border: none;\n\n  &:active {\n    border: none;\n    box-shadow: none;\n  }\n}\n\n.mail-input[_ngcontent-%COMP%] {\n  padding: 18px 12px;\n  border: none;\n  border-bottom: 1px solid #8F008A;\n  font-size: 14px;\n  width: 100%;\n\n  &:focus, &:active, &:focus-visible {\n    box-shadow: none;\n    border-bottom: 3px solid #8F008A;\n  }\n}\n\n.btn-outline[_ngcontent-%COMP%] {\n  color: #8F008A;\n  background: white;\n  padding: 8px 14px;\n  border-radius: 6px;\n  border: 1px solid lightgray;\n  box-shadow: 0 0 2px lightgray;\n\n  &:active, &:focus {\n    box-shadow: 1px 1px 12px lightgray;\n  }\n}\n\n.outline-no-border[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  font-weight: bold;\n}\n\n.btn-primary-alt[_ngcontent-%COMP%] {\n  color: white;\n  background: #8F008A;\n  font-weight: bold;\n  padding: 8px 14px;\n  border-radius: 6px;\n  border: 1px solid #8F008A;\n\n  &:active, &:focus {\n    box-shadow: 1px 1px 12px #8F008A;\n  }\n}\n\n.bottom-border[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 1px lightgrey;\n}\n\nng-select.ng-select-container[_ngcontent-%COMP%] {\n  border: none !important;\n  border-bottom: 1px solid #8F008A;\n  border-radius: 0;\n  padding: 24px 0;\n\n  i {\n    visibility: hidden;\n  }\n}\n\n.mail-drop[_ngcontent-%COMP%] {\n  .ng-select-container {\n    border: none !important;\n    border-bottom: 1px solid #8F008A !important;\n    border-radius: 0 !important;\n    padding: 24px 0 !important;\n  }\n\n}\n\n.fileItem-input[_ngcontent-%COMP%] {\n  width: calc(25% - 16px);\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n\n.fileItem[_ngcontent-%COMP%] {\n  width: calc(25% - 6px);\n  overflow: hidden;\n  min-height: 6rem;\n  height: fit-content;\n  margin: 3px;\n  padding: 10px;\n  display: flex;\n  align-content: center;\n  position: relative;\n  float: left;\n  border: 2px dashed #8F008A !important;\n  border-radius: 5px;\n  transition: .3s ease;\n  cursor: pointer;\n}\n\n.fileItem[_ngcontent-%COMP%]   .fa-trash-o[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: red;\n}\n\n.fileItem[_ngcontent-%COMP%]:hover   .fileItemIcon[_ngcontent-%COMP%]::before {\n  content: \"\\f00d\";\n  color: whitesmoke;\n}\n\n.fileItemIconDiv[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.fileItemIcon[_ngcontent-%COMP%]::before {\n  font-style: normal;\n  font-weight: 900;\n}\n\n.fileItemText[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  font-size: 8px;\n}\n\n.text-white[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n.text-black[_ngcontent-%COMP%] {\n  color: #8f008a !important\n}\n\n.text-black[_ngcontent-%COMP%]:hover {\n  color: #8f008a !important;\n  text-decoration: underline;\n  text-decoration-color: #8f008a !important;\n}\n\n\nhr[_ngcontent-%COMP%] {\n  margin: 12px 0 !important;\n}\n\n.custom-textarea-container[_ngcontent-%COMP%] {\n  border: 1px solid #333;\n  border-radius: 8px;\n  padding: 10px;\n  color: #fff;\n  font-family: Arial, sans-serif;\n  position: relative;\n}\n\n.file-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #333;\n  border-radius: 6px;\n  padding: 8px;\n}\n\n.reply-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #FFFFFF !important;\n  border-radius: 8px !important;\n  border-right: 3px solid #e6baea !important;\n  border-left: 10px solid #e6baea !important;\n  border-bottom: 1px solid #e6baea!important;\n  border-top: 2px solid #e6baea !important;\n  border-bottom-left-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n\n.reply_message_you[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-right: 3px solid #FFFF !important;\n  border-left: 10px solid #FFFF !important;\n  border-bottom: 1px solid #FFFF !important;\n  border-top: 2px solid #FFFF !important;\n  border-radius: 8px !important;\n}\n\n.reply_message_other[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-right: 3px solid #e6baea !important;\n  border-left: 10px solid #e6baea !important;\n  border-bottom: 1px solid #e6baea !important;\n  border-top: 2px solid #e6baea !important;\n  border-radius: 8px!important;\n}\n\n.reply_close_icon[_ngcontent-%COMP%] {\n  color: #8F008A !important;\n  border: 1.5px solid #8f008a !important;\n  cursor: pointer !important;\n  padding: 2px 6px !important;\n  border-radius: 50% !important;\n}\n\nreply_textarea[_ngcontent-%COMP%] {\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n  :focus {\n    box-shadow: none !important;\n  }\n}\n\n.reply[_ngcontent-%COMP%] {\n  .form-control:focus {\n    box-shadow: none !important;\n  }\n}\n\n.reply-name[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  color: #aaaaaa;\n  font-size: 14px;\n}\n\n.file-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 10px;\n}\n\n.file-name[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  color: #fff;\n  font-size: 14px;\n}\n\n.file-size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #bbb;\n  margin-left: 10px;\n}\n\n.remove-file[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #fff;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.skeleton-loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid #ddd;\n  border-radius: 5px !important;\n  background-color: #f9f9f9;\n  width: 300px;\n}\n\n.skeleton-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 50%;\n}\n\n.skeleton-text[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 10px;\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 5px;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  border: 1px solid #FFFFFF !important;\n  border-radius: 50% !important;\n  padding: 2px 6px !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InboxChatComponent, [{
        type: Component,
        args: [{ selector: 'app-inbox-chat', template: "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"msger\">\n            <header class=\"msger-header\">\n                <div class=\"msger-header-title\">\n                    <i class=\"fas fa-comment-alt\"></i> Inbox\n                </div>\n            </header>\n\n            <main class=\"msger-chat\" id=\"messagerChat\">\n                <div class=\"row\" style=\"height: max-content !important;\">\n                    <div class=\"col-12 pt-5\" *ngIf=\"messageList.length == 0\">\n                        <div class=\"col-12 mt-2 card class-card1\">\n                            <p class=\"m-0 text-center p-3\">Conversation Not Started!</p>\n                        </div>\n                    </div>\n                    <div (click)=\"routeToParentMessage(message, $event)\" [id]=\"'message' + message.message_id\"\n                         [ngClass]=\"message?.parent_message_id ? 'cursor' : ''\" class=\"col-12 my-2\" *ngFor=\"let message of messageList\">\n                        <div [ngClass]=\"!message?.createdByMe ? 'left-msg' : 'right-msg'\" class=\"msg\">\n                            <img *ngIf=\"message.profile_url != '' && message.profile_url.split('/').includes('assets')\" class=\"msg-img\" [srcset]=\"message.profile_url\" alt=\"PI\">\n                            <img *ngIf=\"message.profile_url != '' && !message.profile_url.split('/').includes('assets')\" class=\"msg-img\" [srcset]=\"env.imgUrl + '/' + message.profile_url\" alt=\"PI\">\n                            <img *ngIf=\"message.profile_url == ''\" class=\"msg-img\" [srcset]=\"'assets/images/dashboard/default.png'\" alt=\"Default Image\">\n                            <div class=\"msg-bubble\">\n                                <div class=\"msg-info\">\n                                    <div class=\"msg-info-name\">{{message.from_name}}</div>\n                                    <div class=\"msg-info-time\">{{message.created_date | date : 'MM/dd/yyyy, h:mm a'}}</div>\n                                </div>\n\n                                <div [ngClass]=\"!message.createdByMe ? 'reply_message_other'  : 'reply_message_you'\"  class=\"msg-text mb-2\" *ngIf=\"message.parent_message_id\">\n                                    {{message.parent_message_data ?? 'Files Uploaded'}}\n                                </div>\n\n                                <div class=\"msg-text\">\n                                    {{message.body}}\n                                </div>\n                                <div class=\"row link\" *ngIf=\"message.attachments.length != 0\">\n                                    <hr class=\"w-100 bg-white\">\n                                    <div class=\"col-12 my-1\" *ngFor=\"let attachment of message.attachments;\">\n                                        <a target=\"_blank\" [href]=\"env.imgUrl + '/' + attachment.attachment.original_image_url\"\n                                           [ngClass]=\"message?.createdByMe ? 'text-white' : 'text-black'\" [title]=\"attachment.attachment.image\">\n                                            <i *ngIf=\"attachment.attachment.type == 'application/pdf'\" class=\"fa fa-file-pdf-o mr-1\" aria-hidden=\"true\"></i>\n                                            <i *ngIf=\"attachment.attachment.type == 'application/xlsx'\" class=\"fa fa-file-excel-o mr-1\" aria-hidden=\"true\"></i>\n                                            <i *ngIf=\"['application/document', 'application/doc', 'application/txt'].includes(attachment.attachment.type)\"\n                                               class=\"fa fa-file-o mr-1\" aria-hidden=\"true\"></i>\n                                            <i *ngIf=\"['image/jpg', 'image/jpeg', 'image/png'].includes(attachment.attachment.type)\"\n                                               class=\"fa fa-picture-o mr-1\" aria-hidden=\"true\"></i>\n                                            <i *ngIf=\"attachment.attachment.type == 'application/msword'\" class=\"fa fa-file-text-o mr-1\" aria-hidden=\"true\"></i>\n                                            {{attachment.attachment.image}}\n                                        </a>\n                                    </div>\n                                </div>\n                                <div class=\"row mt-2\" *ngIf=\"message.allowReply\">\n                                    <div class=\"col-12 text-right\">\n                                        <button (click)=\"reply(message)\" class=\"btn-sm btn-outline-primary\">Reply</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </main>\n\n            <form class=\"msger-inputarea\">\n                <div class=\"row\">\n                    <div class=\"w-100 custom-textarea-container\" [ngClass]=\"messageId != ''? 'reply': ''\" >\n                        <div class=\"row pb-1 px-1 pt-0\" *ngIf=\"uploadMailFiles.length != 0 && !showSkeletonLoader\">\n                            <div class=\"col-3 py-0 mt-1\" *ngFor=\"let f of uploadMailFiles; let ind = index\">\n                                <div class=\"file-preview\">\n                                    <span class=\"file-icon\">\uD83D\uDCC4</span>\n                                    <span class=\"file-name\">{{f.image}}</span>\n                                    <button class=\"remove-file cursor\" style=\"font-size: 16px\" (click)=\"deleteUploadFiles(ind)\"><span class=\"close-icon\">\u00D7</span></button>\n                                </div>\n                            </div>\n                        </div>\n                        <div style=\"padding: 0 5px !important\" class=\"row py-0 px-1\" *ngIf=\"messageId != ''\">\n                            <div class=\"col-12 py-0 mt-1\">\n                                <div class=\"reply-preview\">\n                                    <span class=\"reply-name\">{{messageData.body}}</span>\n                                    <button class=\"remove-file cursor\" style=\"font-size: 16px\" (click)=\"clearReplyData()\"><span class=\"reply_close_icon\">\u00D7</span></button>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row pb-1 px-1 pt-0\" *ngIf=\"showSkeletonLoader\">\n                            <div class=\"col-3 py-0 my-2\" *ngFor=\"let f of skeletonArray\">\n                                <div class=\"skeleton-loader\">\n                                    <div class=\"skeleton-icon\"></div>\n                                    <div class=\"skeleton-text\"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <textarea (keydown.enter)=\"sendMessage()\" #messageInput class=\"message-input form-control\"\n                                  [ngClass]=\"messageId != ''? 'reply_textarea': ''\"  colspan=\"5\" maxlength=\"500\"\n                                  placeholder=\"Enter your message...\" (input)=\"enterMessageValue($event.target.value)\"></textarea>\n                    </div>\n                    <div class=\"col-12 pb-0 mt-1\">\n                        <div class=\"row\">\n                            <div class=\"col-6\" *ngIf=\"auth.getRoleId() != '5'\">\n                                <label style=\"font-weight: 500\" class=\"p-0 mb-1\"><b class=\"p-0\">Student List</b></label>\n                                <ng-multiselect-dropdown class=\"inbox-dropdown p-0\"\n                                                         [settings]=\"settings\"\n                                                         [data]=\"studentList\"\n                                                         [ngModelOptions]=\"{standalone: true}\"\n                                                         [(ngModel)]=\"selectedStudent\"\n                                                         [placeholder]=\"'Select Student'\">\n                                </ng-multiselect-dropdown>\n\n                            </div>\n                            <div class=\"col-{{auth.getRoleId() != '5' ? '6' : '12'}} text-right align-self-center\">\n                                <input #hiddenfileinput (change)=\"encodePdfFileAsURL($event)\" accept=\".pdf, .doc, .txt, .docx, .xlsx, .xls, .csv, .jpg, .jpeg, .png\" style=\"display: none\" multiple type=\"file\">\n                                <button class=\"btn btn-sm btn-primary ml-2 p-0\" title=\"File Upload\" (click)=\"hiddenfileinput.click()\" aria-describedby=\"inputGroupFileAddon01\"><i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i></button>\n                                <button type=\"submit\" class=\"btn btn-sm btn-primary ml-2 p-0 px-2\" (click)=\"sendMessage()\"><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i> Send</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </form>\n        </div>\n    </div>\n</div>\n", styles: [".msger {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: space-between;\n  width: 100%;\n  height: calc(100% - 50px);\n  border: 2px solid #ddd;\n  border-radius: 5px;\n  background: #fff;\n  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);\n}\n\n.msger-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 2px solid #ddd;\n  background: #eee;\n  color: #666;\n}\n\n.msger-chat {\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 10px;\n}\n\n.msger-chat::-webkit-scrollbar {\n  width: 6px;\n}\n\n.msger-chat::-webkit-scrollbar-track {\n  background: #ddd;\n}\n\n.msger-chat::-webkit-scrollbar-thumb {\n  background: #bdbdbd;\n}\n\n.msg {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 10px;\n}\n\n.msg:last-of-type {\n  margin: 0;\n}\n\n.msg-img {\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n  box-shadow: 0 0 15px #1e1e2017;\n  border-radius: 50%;\n  cursor: default;\n}\n\n.msg-bubble {\n  max-width: 75%;\n  padding: 15px;\n  border-radius: 15px;\n  background: #ececec;\n}\n\n.msg-bubble1 {\n  min-width: 465px;\n}\n\n.msg-bubble1 a:hover {\n  text-decoration: underline;\n}\n\n.msg-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.msg-info-name {\n  margin-right: 10px;\n  font-weight: bold;\n}\n\n.msg-info-time {\n  font-size: 0.85em;\n}\n\n.left-msg .msg-bubble {\n  border-bottom-left-radius: 0;\n}\n\n.right-msg {\n  flex-direction: row-reverse;\n}\n\n.right-msg .msg-bubble {\n  background: #579ffb;\n  color: #fff;\n  border-bottom-right-radius: 0;\n}\n\n.right-msg .msg-img {\n  margin: 0 0 0 10px;\n}\n\n.msger-inputarea {\n  padding: 10px;\n  border-top: 2px solid #ddd;\n  background: #eee;\n}\n\n.msger-inputarea * {\n  padding: 10px;\n  border: none;\n  border-radius: 3px;\n  font-size: 1em;\n}\n\n.message-input {\n  flex: 1;\n  background: #FFFFFF;\n  min-height: 100px;\n}\n\n.msger-send-btn {\n  margin-left: 10px;\n  background: rgb(0, 196, 65);\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background 0.23s;\n}\n\n.msger-send-btn:hover {\n  background: rgb(0, 180, 50);\n}\n\n.msger-chat {\n  background-color: #fcfcfe;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23dddddd' fill-opacity='0.4'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3Cpath id='path6_fill-copy' d='M284.37 16c.2.65.39 1.32.54 2H281.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06a5 5 0 0 1-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM246.18 27l16.37 4.91L278.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H246.9z'/%3E%3Cpath d='M159.5 21.02A9 9 0 0 0 151 15h-42a9 9 0 0 0-8.5 6.02 6 6 0 0 0 .02 11.96A8.99 8.99 0 0 0 109 45h42a9 9 0 0 0 8.48-12.02 6 6 0 0 0 .02-11.96zM151 17h-42a7 7 0 0 0-6.33 4h54.66a7 7 0 0 0-6.33-4zm-9.34 26a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-7a7 7 0 1 1 0-14h42a7 7 0 1 1 0 14h-9.34zM109 27a9 9 0 0 0-7.48 4H101a4 4 0 1 1 0-8h58a4 4 0 0 1 0 8h-.52a9 9 0 0 0-7.48-4h-42z'/%3E%3Cpath d='M39 115a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3-29v-2h8v-6H40a4 4 0 0 0-4 4v10H22l-1.33 4-.67 2h2.19L26 130h26l3.81-40H58l-.67-2L56 84H42v-6zm-4-4v10h2V74h8v-2h-8a2 2 0 0 0-2 2zm2 12h14.56l.67 2H22.77l.67-2H40zm13.8 4H24.2l3.62 38h22.36l3.62-38z'/%3E%3Cpath d='M129 92h-6v4h-6v4h-6v14h-3l.24 2 3.76 32h36l3.76-32 .24-2h-3v-14h-6v-4h-6v-4h-8zm18 22v-12h-4v4h3v8h1zm-3 0v-6h-4v6h4zm-6 6v-16h-4v19.17c1.6-.7 2.97-1.8 4-3.17zm-6 3.8V100h-4v23.8a10.04 10.04 0 0 0 4 0zm-6-.63V104h-4v16a10.04 10.04 0 0 0 4 3.17zm-6-9.17v-6h-4v6h4zm-6 0v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6 0v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6 4v-4h-4v8h1v-4h3zm7 24a12 12 0 0 0 11.83-10h7.92l-3.53 30h-32.44l-3.53-30h7.92A12 12 0 0 0 130 126z'/%3E%3Cpath d='M212 86v2h-4v-2h4zm4 0h-2v2h2v-2zm-20 0v.1a5 5 0 0 0-.56 9.65l.06.25 1.12 4.48a2 2 0 0 0 1.94 1.52h.01l7.02 24.55a2 2 0 0 0 1.92 1.45h4.98a2 2 0 0 0 1.92-1.45l7.02-24.55a2 2 0 0 0 1.95-1.52L224.5 96l.06-.25a5 5 0 0 0-.56-9.65V86a14 14 0 0 0-28 0zm4 0h6v2h-9a3 3 0 1 0 0 6H223a3 3 0 1 0 0-6H220v-2h2a12 12 0 1 0-24 0h2zm-1.44 14l-1-4h24.88l-1 4h-22.88zm8.95 26l-6.86-24h18.7l-6.86 24h-4.98zM150 242a22 22 0 1 0 0-44 22 22 0 0 0 0 44zm24-22a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-28.38 17.73l2.04-.87a6 6 0 0 1 4.68 0l2.04.87a2 2 0 0 0 2.5-.82l1.14-1.9a6 6 0 0 1 3.79-2.75l2.15-.5a2 2 0 0 0 1.54-2.12l-.19-2.2a6 6 0 0 1 1.45-4.46l1.45-1.67a2 2 0 0 0 0-2.62l-1.45-1.67a6 6 0 0 1-1.45-4.46l.2-2.2a2 2 0 0 0-1.55-2.13l-2.15-.5a6 6 0 0 1-3.8-2.75l-1.13-1.9a2 2 0 0 0-2.5-.8l-2.04.86a6 6 0 0 1-4.68 0l-2.04-.87a2 2 0 0 0-2.5.82l-1.14 1.9a6 6 0 0 1-3.79 2.75l-2.15.5a2 2 0 0 0-1.54 2.12l.19 2.2a6 6 0 0 1-1.45 4.46l-1.45 1.67a2 2 0 0 0 0 2.62l1.45 1.67a6 6 0 0 1 1.45 4.46l-.2 2.2a2 2 0 0 0 1.55 2.13l2.15.5a6 6 0 0 1 3.8 2.75l1.13 1.9a2 2 0 0 0 2.5.8zm2.82.97a4 4 0 0 1 3.12 0l2.04.87a4 4 0 0 0 4.99-1.62l1.14-1.9a4 4 0 0 1 2.53-1.84l2.15-.5a4 4 0 0 0 3.09-4.24l-.2-2.2a4 4 0 0 1 .97-2.98l1.45-1.67a4 4 0 0 0 0-5.24l-1.45-1.67a4 4 0 0 1-.97-2.97l.2-2.2a4 4 0 0 0-3.09-4.25l-2.15-.5a4 4 0 0 1-2.53-1.84l-1.14-1.9a4 4 0 0 0-5-1.62l-2.03.87a4 4 0 0 1-3.12 0l-2.04-.87a4 4 0 0 0-4.99 1.62l-1.14 1.9a4 4 0 0 1-2.53 1.84l-2.15.5a4 4 0 0 0-3.09 4.24l.2 2.2a4 4 0 0 1-.97 2.98l-1.45 1.67a4 4 0 0 0 0 5.24l1.45 1.67a4 4 0 0 1 .97 2.97l-.2 2.2a4 4 0 0 0 3.09 4.25l2.15.5a4 4 0 0 1 2.53 1.84l1.14 1.9a4 4 0 0 0 5 1.62l2.03-.87zM152 207a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-24 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm16 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm86-29a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1 246 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM275 214a29 29 0 0 0-57.97 0h57.96zM72.33 198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01 4.01 0 0 0 7.09 2.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99 1.99 0 0 1-2 2 2 2 0 0 1-1.66-.88zM75 176c.38 0 .74-.04 1.1-.12a4 4 0 0 0 6.19 2.4A13.94 13.94 0 0 1 84 185v24a6 6 0 0 1-6 6h-3v9a5 5 0 1 1-10 0v-9h-3a6 6 0 0 1-6-6v-24a14 14 0 0 1 14-14 5 5 0 0 0 5 5zm-17 15v12a1.99 1.99 0 0 0 1.22 1.84 2 2 0 0 0 2.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98 3.98 0 0 1-5.35 3.77 3.98 3.98 0 0 1-.65-.3V209a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6 6 0 0 1-5.2-3 7 7 0 0 1-6.47-4.88A12 12 0 0 0 58 185v6zm9 24v9a3 3 0 1 0 6 0v-9h-6z'/%3E%3Cpath d='M-17 191a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H4zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1-14 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM15 214a29 29 0 0 0-57.97 0h57.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  max-height: 50vh;\n}\n\n//.link a {\n//  color: #fff !important;\n//}\n//\n.link a:hover {\n//  color: #fff !important;\n  text-decoration: underline !important;\n}\n\n.link span {\n  cursor: pointer;\n  //color: #fff;\n}\n\n.link span:hover {\n  //color: #fff !important;\n  text-decoration: underline !important;\n}\n\n\n.search-input {\n  font-size: 12px;\n  padding: 8px 10px;\n  border-radius: 4px;\n  border: none;\n\n  &:active {\n    border: none;\n    box-shadow: none;\n  }\n}\n\n.mail-input {\n  padding: 18px 12px;\n  border: none;\n  border-bottom: 1px solid #8F008A;\n  font-size: 14px;\n  width: 100%;\n\n  &:focus, &:active, &:focus-visible {\n    box-shadow: none;\n    border-bottom: 3px solid #8F008A;\n  }\n}\n\n.btn-outline {\n  color: #8F008A;\n  background: white;\n  padding: 8px 14px;\n  border-radius: 6px;\n  border: 1px solid lightgray;\n  box-shadow: 0 0 2px lightgray;\n\n  &:active, &:focus {\n    box-shadow: 1px 1px 12px lightgray;\n  }\n}\n\n.outline-no-border {\n  box-shadow: none !important;\n  font-weight: bold;\n}\n\n.btn-primary-alt {\n  color: white;\n  background: #8F008A;\n  font-weight: bold;\n  padding: 8px 14px;\n  border-radius: 6px;\n  border: 1px solid #8F008A;\n\n  &:active, &:focus {\n    box-shadow: 1px 1px 12px #8F008A;\n  }\n}\n\n.bottom-border {\n  box-shadow: 0 1px 1px lightgrey;\n}\n\nng-select.ng-select-container {\n  border: none !important;\n  border-bottom: 1px solid #8F008A;\n  border-radius: 0;\n  padding: 24px 0;\n\n  i {\n    visibility: hidden;\n  }\n}\n\n.mail-drop {\n  .ng-select-container {\n    border: none !important;\n    border-bottom: 1px solid #8F008A !important;\n    border-radius: 0 !important;\n    padding: 24px 0 !important;\n  }\n\n}\n\n.fileItem-input {\n  width: calc(25% - 16px);\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n\n.fileItem {\n  width: calc(25% - 6px);\n  overflow: hidden;\n  min-height: 6rem;\n  height: fit-content;\n  margin: 3px;\n  padding: 10px;\n  display: flex;\n  align-content: center;\n  position: relative;\n  float: left;\n  border: 2px dashed #8F008A !important;\n  border-radius: 5px;\n  transition: .3s ease;\n  cursor: pointer;\n}\n\n.fileItem .fa-trash-o:hover {\n  transform: scale(1.1);\n  color: red;\n}\n\n.fileItem:hover .fileItemIcon::before {\n  content: \"\\f00d\";\n  color: whitesmoke;\n}\n\n.fileItemIconDiv {\n  text-align: center;\n}\n\n.fileItemIcon::before {\n  font-style: normal;\n  font-weight: 900;\n}\n\n.fileItemText {\n  text-align: center;\n  margin-top: 10px;\n  font-size: 8px;\n}\n\n.text-white {\n  color: #FFFFFF;\n}\n\n.text-black {\n  color: #8f008a !important\n}\n\n.text-black:hover {\n  color: #8f008a !important;\n  text-decoration: underline;\n  text-decoration-color: #8f008a !important;\n}\n\n\nhr {\n  margin: 12px 0 !important;\n}\n\n.custom-textarea-container {\n  border: 1px solid #333;\n  border-radius: 8px;\n  padding: 10px;\n  color: #fff;\n  font-family: Arial, sans-serif;\n  position: relative;\n}\n\n.file-preview {\n  display: flex;\n  align-items: center;\n  background-color: #333;\n  border-radius: 6px;\n  padding: 8px;\n}\n\n.reply-preview {\n  display: flex;\n  align-items: center;\n  background-color: #FFFFFF !important;\n  border-radius: 8px !important;\n  border-right: 3px solid #e6baea !important;\n  border-left: 10px solid #e6baea !important;\n  border-bottom: 1px solid #e6baea!important;\n  border-top: 2px solid #e6baea !important;\n  border-bottom-left-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n\n.reply_message_you {\n  padding: 8px;\n  border-right: 3px solid #FFFF !important;\n  border-left: 10px solid #FFFF !important;\n  border-bottom: 1px solid #FFFF !important;\n  border-top: 2px solid #FFFF !important;\n  border-radius: 8px !important;\n}\n\n.reply_message_other {\n  padding: 8px;\n  border-right: 3px solid #e6baea !important;\n  border-left: 10px solid #e6baea !important;\n  border-bottom: 1px solid #e6baea !important;\n  border-top: 2px solid #e6baea !important;\n  border-radius: 8px!important;\n}\n\n.reply_close_icon {\n  color: #8F008A !important;\n  border: 1.5px solid #8f008a !important;\n  cursor: pointer !important;\n  padding: 2px 6px !important;\n  border-radius: 50% !important;\n}\n\nreply_textarea {\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n  :focus {\n    box-shadow: none !important;\n  }\n}\n\n.reply {\n  .form-control:focus {\n    box-shadow: none !important;\n  }\n}\n\n.reply-name {\n  flex-grow: 1;\n  color: #aaaaaa;\n  font-size: 14px;\n}\n\n.file-icon {\n  font-size: 20px;\n  margin-right: 10px;\n}\n\n.file-name {\n  flex-grow: 1;\n  color: #fff;\n  font-size: 14px;\n}\n\n.file-size {\n  font-size: 12px;\n  color: #bbb;\n  margin-left: 10px;\n}\n\n.remove-file {\n  background: none;\n  border: none;\n  color: #fff;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.skeleton-loader {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border: 1px solid #ddd;\n  border-radius: 5px !important;\n  background-color: #f9f9f9;\n  width: 300px;\n}\n\n.skeleton-icon {\n  width: 40px;\n  height: 40px;\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 50%;\n}\n\n.skeleton-text {\n  flex-grow: 1;\n  height: 10px;\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 5px;\n}\n\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n\n.close-icon {\n  border: 1px solid #FFFFFF !important;\n  border-radius: 50% !important;\n  padding: 2px 6px !important;\n}\n"] }]
    }], () => [], { messageInput: [{
            type: ViewChild,
            args: ['messageInput']
        }], messagerChat: [{
            type: ViewChild,
            args: ['messagerChat', { static: false }]
        }], choosedData: [{
            type: Input
        }], arrayList: [{
            type: Input
        }], to_id: [{
            type: Input
        }], updateCount: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InboxChatComponent, { className: "InboxChatComponent" }); })();
//# sourceMappingURL=inbox-chat.component.js.map