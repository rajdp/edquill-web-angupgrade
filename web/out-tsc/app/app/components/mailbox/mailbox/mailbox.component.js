import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ngx-toastr";
import * as i3 from "@angular/common";
import * as i4 from "../../../shared/service/auth.service";
import * as i5 from "../../../shared/service/teacher.service";
import * as i6 from "../../auth/tiny-mice/tiny-mice.component";
import * as i7 from "@ng-select/ng-select";
const _c0 = a0 => ({ "bottom-border": a0 });
function MailboxComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "input", 20)(2, "i", 21);
    i0.ɵɵelementStart(3, "div", 22)(4, "a", 12);
    i0.ɵɵlistener("click", function MailboxComponent_div_3_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mailList("all")); });
    i0.ɵɵtext(5, "All");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 12);
    i0.ɵɵlistener("click", function MailboxComponent_div_3_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mailList("starred")); });
    i0.ɵɵtext(7, "Starred");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 12);
    i0.ɵɵlistener("click", function MailboxComponent_div_3_Template_a_click_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mailList("sent")); });
    i0.ɵɵtext(9, "Sent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 12);
    i0.ɵɵlistener("click", function MailboxComponent_div_3_Template_a_click_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mailList("drafts")); });
    i0.ɵɵtext(11, "Drafts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "a", 12);
    i0.ɵɵlistener("click", function MailboxComponent_div_3_Template_a_click_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mailList("trash")); });
    i0.ɵɵtext(13, "Trash");
    i0.ɵɵelementEnd()()();
} }
function MailboxComponent_i_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 23);
} }
function MailboxComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 24);
    i0.ɵɵlistener("click", function MailboxComponent_i_8_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateMail("starred", "1")); });
    i0.ɵɵelementEnd();
} }
function MailboxComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 25);
    i0.ɵɵlistener("click", function MailboxComponent_i_9_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateMail("starred", "0")); });
    i0.ɵɵelementEnd();
} }
function MailboxComponent_i_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 26);
    i0.ɵɵlistener("click", function MailboxComponent_i_10_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateMail("trash", "1")); });
    i0.ɵɵelementEnd();
} }
function MailboxComponent_i_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 27);
} }
function MailboxComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵlistener("click", function MailboxComponent_div_22_div_1_Template_div_click_0_listener() { const ctx_r6 = i0.ɵɵrestoreView(_r6); const list_r8 = ctx_r6.$implicit; const i_r9 = ctx_r6.index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectMailToView(list_r8, i_r9)); });
    i0.ɵɵelementStart(1, "div", 31);
    i0.ɵɵelement(2, "img", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 33)(4, "div", 34)(5, "h6", 35);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 36);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("font-weight-bold", list_r8.is_read == "0");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r8.from_name);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("font-weight-bold", list_r8.is_read == "0");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.getMessageTime(list_r8.created_date));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(list_r8.subject);
} }
function MailboxComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, MailboxComponent_div_22_div_1_Template, 11, 7, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.mailBoxList);
} }
function MailboxComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div", 38);
    i0.ɵɵelement(2, "i", 39);
    i0.ɵɵelementStart(3, "div", 40)(4, "span", 41);
    i0.ɵɵtext(5, "Select a mail to read");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("col-", ctx_r1.toggleNav ? "12" : "9", " px-0");
} }
function MailboxComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57)(1, "h5", 58);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "i", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.selectedMail.subject);
} }
function MailboxComponent_div_24_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60)(1, "h5", 61);
    i0.ɵɵtext(2, "Attachments");
    i0.ɵɵelementEnd()();
} }
function MailboxComponent_div_24_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 64)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 65);
    i0.ɵɵelement(4, "i", 66);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const items_r10 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(items_r10.name);
} }
function MailboxComponent_div_24_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtemplate(1, MailboxComponent_div_24_div_21_div_1_Template, 5, 1, "div", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.attachment);
} }
function MailboxComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵtemplate(1, MailboxComponent_div_24_div_1_Template, 4, 1, "div", 43);
    i0.ɵɵelementStart(2, "div", 44);
    i0.ɵɵelement(3, "img", 45);
    i0.ɵɵelementStart(4, "div", 46)(5, "div", 47)(6, "div", 48)(7, "h6", 49);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 50);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 51)(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 52)(15, "span");
    i0.ɵɵtext(16, "to me");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(17, "div", 53)(18, "p", 54);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(20, MailboxComponent_div_24_div_20_Template, 3, 0, "div", 55)(21, MailboxComponent_div_24_div_21_Template, 2, 1, "div", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("col-", ctx_r1.toggleNav ? "12" : "9", " px-0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedMail.subject != "");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.selectedMail.from_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("<", ctx_r1.selectedMail.from_email, ">");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getMessageTime(ctx_r1.selectedMail.created_date));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c0, ctx_r1.attachment.length != 0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.selectedMail.body);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.attachment.length != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.attachment.length != 0);
} }
function MailboxComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 67)(1, "form", 68)(2, "div", 69);
    i0.ɵɵelement(3, "ng-select", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 69);
    i0.ɵɵelement(5, "input", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 69);
    i0.ɵɵelement(7, "input", 72);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 73)(9, "app-tiny-mice", 74);
    i0.ɵɵlistener("emitEditorValue", function MailboxComponent_div_25_Template_app_tiny_mice_emitEditorValue_9_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorValue($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 75)(11, "button", 76);
    i0.ɵɵlistener("click", function MailboxComponent_div_25_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.composeMail = false); });
    i0.ɵɵtext(12, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 77);
    i0.ɵɵlistener("click", function MailboxComponent_div_25_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.sendMail()); });
    i0.ɵɵtext(14, "Send");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r1.mailForm);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r1.toList);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("editorPatchValue", false)("height", 200)("id", "mailbox")("showDropBtn", false)("showInputBtn", false);
} }
export class MailboxComponent {
    constructor(builder, toastr, datePipe, auth, teacher) {
        this.builder = builder;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.auth = auth;
        this.teacher = teacher;
        this.composeMail = false;
        this.toggleNav = false;
        this.selectedMail = undefined;
        this.mailBoxList = [];
        this.toList = [{ student_name: 'Raj', student_id: '1' }, { student_name: 'Sandy', student_id: '11' }, { student_name: 'kiran', student_id: '2' }, { student_name: 'Ranga rajan', student_id: '14' }];
        this.attachment = [{ name: 'life.pdf', original_image_url: '' }, { name: 'tech.pdf', original_image_url: '' },
            { name: 'stun.pdf', original_image_url: '' }, { name: 'lifeCare.pdf', original_image_url: '' }];
        this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        console.log(this.currentDate, 'currentDate');
        this.mailForm = this.builder.group({
            to: ['', Validators.required],
            subject: ['', Validators.required],
            title: ['', Validators.required],
            brief: ''
        });
    }
    ngOnInit() {
        this.mailList('all');
    }
    getEditorValue(event) {
        this.mailForm.controls.brief.patchValue(event.content);
    }
    selectMailToView(detail, index) {
        if (this.selectedIndex !== index) {
            this.selectedIndex = index;
            this.selectedMail = detail;
            if (detail.is_read === '0') {
                this.updateMail('seen', '1');
            }
        }
    }
    sendMail() {
        if (this.mailForm.valid) {
            const data = {
                title: this.mailForm.controls.title.value,
                subject: this.mailForm.controls.subject.value,
                to: this.mailForm.controls.to.value,
                brief: this.mailForm.controls.brief.value
            };
            console.log(data, 'data');
            this.toastr.success('Mail sent');
            this.composeMail = false;
        }
        else {
            this.toastr.error('Please fill Mandatory fields');
        }
    }
    mailList(type) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            type
        };
        this.teacher.mailBoxList(data).subscribe((successData) => {
            this.mailListSuccess(successData);
        }, (error) => {
            console.log(error, 'error');
        });
    }
    mailListSuccess(successData) {
        if (successData.IsSuccess) {
            this.mailBoxList = successData.ResponseObject;
        }
    }
    updateMail(type, value) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            message_id: this.selectedMail.message_id,
            is_trash: type == 'trash' ? value : this.selectedMail.is_trash,
            is_starred: type == 'starred' ? value : this.selectedMail.is_starred,
            is_read: type == 'seen' ? value : this.selectedMail.is_read
        };
        this.teacher.updateMail(data).subscribe((successData) => {
            this.updateMailSuccess(successData, type, value);
        }, (error) => {
            console.log(error, 'error');
        });
    }
    updateMailSuccess(successData, type, value) {
        if (successData.IsSuccess) {
            type === 'trash' ? this.selectedMail.is_trash = value : type === 'starred' ?
                this.selectedMail.is_starred = value : this.selectedMail.is_read = value;
            if (type == 'trash') {
                this.mailList('all');
                this.selectedMail = undefined;
                this.selectedIndex = undefined;
            }
        }
    }
    getMessageTime(data) {
        console.log(data, 'date');
        const split = data.split(' ');
        if (split[0] === this.currentDate) {
            // return split[1].split(':').splice(0, 2).join(':');
            return this.datePipe.transform(data, 'hh:mm a');
        }
        else {
            return this.datePipe.transform(split[0], 'dd MMM');
        }
    }
    static { this.ɵfac = function MailboxComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MailboxComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.ToastrService), i0.ɵɵdirectiveInject(i3.DatePipe), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i5.TeacherService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MailboxComponent, selectors: [["app-mailbox"]], decls: 26, vars: 13, consts: [[1, "container-fluid"], [1, "col-12", "px-0", "card"], [1, "card-header", "d-flex", "p-0", 2, "background", "#8F008A"], ["class", "col-3 py-2 d-flex justify-content-between dropleft", "style", "border-right: 1px solid white", 4, "ngIf"], [1, "d-flex", "dropleft"], [1, "fa", "fa-bars", "cursor", "mr-3", 2, "color", "white", "font-size", "20px", "align-self", "center", 3, "click"], ["class", "fa fa-reply cursor mr-3", "title", "Reply", "style", "color: white; font-size: 20px; align-self: center", 4, "ngIf"], ["class", "fa fa-star-o cursor mr-3", "title", "Mark as Important", "style", "color: white; font-size: 20px; align-self: center", 3, "click", 4, "ngIf"], ["class", "fa fa-star cursor mr-3", "title", "Mark as Unimportant", "style", "color: white; font-size: 20px; align-self: center", 3, "click", 4, "ngIf"], ["class", "fa fa-trash cursor mr-3", "title", "Move to Trash", "style", "color: white; font-size: 20px; align-self: center", 3, "click", 4, "ngIf"], ["class", "fa fa-ellipsis-v cursor mr-3 pt-1", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "style", "color: white; font-size: 20px; align-self: center", 4, "ngIf"], ["aria-labelledby", "dropdownMessage", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "btn-outline", "outline-no-border", 3, "click"], [1, "card-body", "p-0", "d-flex", 2, "min-height", "70vh"], ["class", "col-3 p-0", "style", "box-shadow: 2px 0 2px lightgrey; max-height: 70vh; overflow: scroll", 4, "ngIf"], ["style", "background: #fdfdfda8", 3, "class", 4, "ngIf"], ["style", "background: #fdfdfda8; max-height: 70vh; overflow: scroll", 3, "class", 4, "ngIf"], ["class", "col-9 px-0", "style", "background: #fdfdfda8;  max-height: 70vh; overflow: scroll", 4, "ngIf"], [1, "col-3", "py-2", "d-flex", "justify-content-between", "dropleft", 2, "border-right", "1px solid white"], ["type", "text", "placeholder", "Search mail", 1, "search-input", "col-10"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "fa", "fa-ellipsis-v", "cursor", 2, "color", "white", "font-size", "20px", "align-self", "center"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["title", "Reply", 1, "fa", "fa-reply", "cursor", "mr-3", 2, "color", "white", "font-size", "20px", "align-self", "center"], ["title", "Mark as Important", 1, "fa", "fa-star-o", "cursor", "mr-3", 2, "color", "white", "font-size", "20px", "align-self", "center", 3, "click"], ["title", "Mark as Unimportant", 1, "fa", "fa-star", "cursor", "mr-3", 2, "color", "white", "font-size", "20px", "align-self", "center", 3, "click"], ["title", "Move to Trash", 1, "fa", "fa-trash", "cursor", "mr-3", 2, "color", "white", "font-size", "20px", "align-self", "center", 3, "click"], ["data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "fa", "fa-ellipsis-v", "cursor", "mr-3", "pt-1", 2, "color", "white", "font-size", "20px", "align-self", "center"], [1, "col-3", "p-0", 2, "box-shadow", "2px 0 2px lightgrey", "max-height", "70vh", "overflow", "scroll"], ["class", "col-12 p-3 d-flex align-items-center cursor", "style", "box-shadow: 0 1px 1px lightgrey", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-12", "p-3", "d-flex", "align-items-center", "cursor", 2, "box-shadow", "0 1px 1px lightgrey", 3, "click"], [1, "col-2", "px-0"], ["src", "../../../../assets/images/Avatar1.png", "alt", "", 1, "rounded-circle", 2, "object-fit", "contain", "width", "32px", "height", "32px", "align-self", "center"], [1, "col-10", "px-0"], [1, "row", "px-3", "d-flex", "justify-content-between"], [1, "mb-0", "color-black"], [1, "mb-0", "align-self-center", "color-black", 2, "font-size", "12px"], [2, "background", "#fdfdfda8"], [1, "col-12", "d-flex", "flex-wrap", "justify-content-center", "align-content-center", 2, "min-height", "70vh"], [1, "fa", "fa-envelope-o", "cursor", 2, "font-size", "10.3rem", "color", "grey"], [1, "col-12", "mt-1", "d-flex", "justify-content-center"], [1, "color-grey"], [2, "background", "#fdfdfda8", "max-height", "70vh", "overflow", "scroll"], ["class", "col-12 py-3 d-flex justify-content-between align-items-center", "style", "box-shadow: 0 1px 1px lightgrey", 4, "ngIf"], [1, "col-12", "py-3", "d-flex", "justify-content-start", "align-items-center", 2, "box-shadow", "0 1px 1px lightgrey"], ["src", "../../../../assets/images/Avatar1.png", "alt", "", 1, "rounded-circle", 2, "object-fit", "contain", "width", "42px", "height", "42px", "align-self", "center"], [1, "flex-fill", "pl-3"], [1, "col-12", "px-0", "d-flex"], [1, "col-10", "px-0", "d-flex"], [1, "font-weight-bold", "mb-0", "color-black"], [1, "align-self-center"], [1, "col-2", "px-0", "d-flex", "justify-content-end"], [1, "col-12", "px-0"], [1, "col-12", "pt-3", "pb-5", 3, "ngClass"], [1, "color-black"], ["class", "col-12 py-3", 4, "ngIf"], ["class", "col-12 mb-3 d-flex flex-wrap justify-content-between", 4, "ngIf"], [1, "col-12", "py-3", "d-flex", "justify-content-between", "align-items-center", 2, "box-shadow", "0 1px 1px lightgrey"], [1, "font-weight-bold", "mb-0", 2, "font-size", "22px", "color", "black"], [1, "fa", "fa-print", "cursor", 2, "font-size", "1.3rem", "color", "grey"], [1, "col-12", "py-3"], [1, "font-weight-bold"], [1, "col-12", "mb-3", "d-flex", "flex-wrap", "justify-content-between"], ["class", "w-32 mb-2 d-flex justify-content-between p-3", "style", "background-color: lightgrey; border-radius: 4px", 4, "ngFor", "ngForOf"], [1, "w-32", "mb-2", "d-flex", "justify-content-between", "p-3", 2, "background-color", "lightgrey", "border-radius", "4px"], ["href", ""], [1, "fa", "fa-download", "color-black"], [1, "col-9", "px-0", 2, "background", "#fdfdfda8", "max-height", "70vh", "overflow", "scroll"], [3, "formGroup"], [1, "col-12", "my-2"], ["bindLabel", "student_name", "bindValue", "student_id", "formControlName", "to", "placeholder", "To *", "typeToSearchText", "", "multiple", "true", "searchable", "true", "clearable", "false", 1, "mail-drop", 3, "items"], ["type", "text", "placeholder", "Cc/ Bcc", "formControlName", "title", 1, "mail-input"], ["type", "text", "placeholder", "Subject", "formControlName", "subject", 1, "mail-input"], [1, "col-12", "mb-3", "mt-5"], [3, "emitEditorValue", "editorPatchValue", "height", "id", "showDropBtn", "showInputBtn"], [1, "col-12", "my-3", "d-flex", "justify-content-between"], [1, "btn-outline", 3, "click"], [1, "btn-primary-alt", 3, "click"]], template: function MailboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵtemplate(3, MailboxComponent_div_3_Template, 14, 0, "div", 3);
            i0.ɵɵelementStart(4, "div")(5, "div", 4)(6, "i", 5);
            i0.ɵɵlistener("click", function MailboxComponent_Template_i_click_6_listener() { return ctx.toggleNav = !ctx.toggleNav; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, MailboxComponent_i_7_Template, 1, 0, "i", 6)(8, MailboxComponent_i_8_Template, 1, 0, "i", 7)(9, MailboxComponent_i_9_Template, 1, 0, "i", 8)(10, MailboxComponent_i_10_Template, 1, 0, "i", 9)(11, MailboxComponent_i_11_Template, 1, 0, "i", 10);
            i0.ɵɵelementStart(12, "div", 11)(13, "a", 12);
            i0.ɵɵlistener("click", function MailboxComponent_Template_a_click_13_listener() { return ctx.updateMail("seen", "1"); });
            i0.ɵɵtext(14, "Mark as read");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "a", 12);
            i0.ɵɵlistener("click", function MailboxComponent_Template_a_click_15_listener() { return ctx.updateMail("seen", "0"); });
            i0.ɵɵtext(16, "Mark as unread");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "a", 12);
            i0.ɵɵlistener("click", function MailboxComponent_Template_a_click_17_listener() { return ctx.updateMail("trash", "1"); });
            i0.ɵɵtext(18, "Delete");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "button", 13);
            i0.ɵɵlistener("click", function MailboxComponent_Template_button_click_19_listener() { return ctx.composeMail = true; });
            i0.ɵɵtext(20, "Compose");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(21, "div", 14);
            i0.ɵɵtemplate(22, MailboxComponent_div_22_Template, 2, 1, "div", 15)(23, MailboxComponent_div_23_Template, 6, 3, "div", 16)(24, MailboxComponent_div_24_Template, 22, 13, "div", 17)(25, MailboxComponent_div_25_Template, 15, 7, "div", 18);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.toggleNav);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("col-", ctx.toggleNav ? "12" : "9", " py-2 d-flex justify-content-between");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.selectedMail != undefined);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedMail != undefined && (ctx.selectedMail == null ? null : ctx.selectedMail.is_starred) == "0");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedMail != undefined && (ctx.selectedMail == null ? null : ctx.selectedMail.is_starred) == "1");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedMail != undefined);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedMail != undefined);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngIf", !ctx.toggleNav);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.composeMail && ctx.selectedMail == undefined);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.composeMail && ctx.selectedMail != undefined);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.composeMail);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i6.TinyMiceComponent, i7.NgSelectComponent], styles: [".search-input[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 8px 10px;\n  border-radius: 4px;\n  border: none;\n  &:active {\n    border: none;\n    box-shadow: none;\n  }\n}\n.mail-input[_ngcontent-%COMP%] {\n  padding: 18px 12px;\n  border: none;\n  border-bottom: 1px solid #8F008A;\n  font-size: 14px;\n  width: 100%;\n  &:focus,&:active,&:focus-visible {\n    box-shadow: none;\n    border-bottom: 3px solid #8F008A;\n  }\n}\n.btn-outline[_ngcontent-%COMP%] {\n  color: #8F008A;\n  background: white;\n  padding: 8px 14px;\n  border-radius: 6px;\n  border: 1px solid lightgray;\n  box-shadow: 0 0 2px lightgray;\n  &:active, &:focus {\n    box-shadow: 1px 1px 12px lightgray;\n  }\n}\n.outline-no-border[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  font-weight: bold;\n}\n.btn-primary-alt[_ngcontent-%COMP%] {\n  color: white;\n  background: #8F008A;\n  font-weight: bold;\n  padding: 8px 14px;\n  border-radius: 6px;\n  border: 1px solid #8F008A;\n  &:active, &:focus {\n    box-shadow: 1px 1px 12px #8F008A;\n  }\n}\n.bottom-border[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 1px lightgrey;\n}\nng-select.ng-select-container[_ngcontent-%COMP%] {\n  border: none !important;\n  border-bottom: 1px solid #8F008A;\n  border-radius: 0;\n  padding: 24px 0;\n  i{\n    visibility: hidden;\n  }\n}\n.mail-drop[_ngcontent-%COMP%] {\n  .ng-select-container {\n    border: none !important;\n    border-bottom: 1px solid #8F008A !important;\n    border-radius: 0 !important;\n    padding: 24px 0 !important;\n  }\n\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MailboxComponent, [{
        type: Component,
        args: [{ selector: 'app-mailbox', template: "<div class=\"container-fluid\">\n    <div class=\"col-12 px-0 card\">\n        <div class=\"card-header d-flex p-0\" style=\"background: #8F008A\">\n            <div class=\"col-3 py-2 d-flex justify-content-between dropleft\" style=\"border-right: 1px solid white\" *ngIf=\"!toggleNav\">\n                <input type=\"text\" class=\"search-input col-10\" placeholder=\"Search mail\">\n                <i class=\"fa fa-ellipsis-v cursor\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: white; font-size: 20px; align-self: center\"></i>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                    <a class=\"dropdown-item\" (click)=\"mailList('all')\" href=\"#\">All</a>\n                    <a class=\"dropdown-item\" (click)=\"mailList('starred')\" href=\"#\">Starred</a>\n                    <a class=\"dropdown-item\" (click)=\"mailList('sent')\" href=\"#\">Sent</a>\n                    <a class=\"dropdown-item\" (click)=\"mailList('drafts')\" href=\"#\">Drafts</a>\n                    <a class=\"dropdown-item\" (click)=\"mailList('trash')\" href=\"#\">Trash</a>\n                </div>\n            </div>\n            <div class=\"col-{{toggleNav ? '12' : '9'}} py-2 d-flex justify-content-between\">\n                <div class=\"d-flex dropleft\">\n                    <i class=\"fa fa-bars cursor mr-3\" (click)=\"toggleNav = !toggleNav\" style=\"color: white; font-size: 20px; align-self: center\"></i>\n                    <i *ngIf=\"selectedMail != undefined\" class=\"fa fa-reply cursor mr-3\" title=\"Reply\" style=\"color: white; font-size: 20px; align-self: center\"></i>\n                    <i *ngIf=\"selectedMail != undefined && selectedMail?.is_starred == '0'\" (click)=\"updateMail('starred', '1')\" class=\"fa fa-star-o cursor mr-3\" title=\"Mark as Important\" style=\"color: white; font-size: 20px; align-self: center\"></i>\n                    <i *ngIf=\"selectedMail != undefined && selectedMail?.is_starred == '1'\" (click)=\"updateMail('starred', '0')\" class=\"fa fa-star cursor mr-3\" title=\"Mark as Unimportant\" style=\"color: white; font-size: 20px; align-self: center\"></i>\n                    <i *ngIf=\"selectedMail != undefined\" (click)=\"updateMail('trash', '1')\" class=\"fa fa-trash cursor mr-3\" title=\"Move to Trash\" style=\"color: white; font-size: 20px; align-self: center\"></i>\n                    <i *ngIf=\"selectedMail != undefined\" class=\"fa fa-ellipsis-v cursor mr-3 pt-1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color: white; font-size: 20px; align-self: center\"></i>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMessage\">\n                        <a class=\"dropdown-item\" (click)=\"updateMail('seen', '1')\" href=\"#\">Mark as read</a>\n                        <a class=\"dropdown-item\" (click)=\"updateMail('seen', '0')\" href=\"#\">Mark as unread</a>\n                        <a class=\"dropdown-item\" (click)=\"updateMail('trash', '1')\" href=\"#\">Delete</a>\n                    </div>\n                </div>\n                <button class=\"btn-outline outline-no-border\" (click)=\"composeMail = true\">Compose</button>\n            </div>\n        </div>\n        <div class=\"card-body p-0 d-flex\" style=\"min-height: 70vh\">\n            <div class=\"col-3 p-0\" style=\"box-shadow: 2px 0 2px lightgrey; max-height: 70vh; overflow: scroll\" *ngIf=\"!toggleNav\">\n                <div class=\"col-12 p-3 d-flex align-items-center cursor\" (click)=\"selectMailToView(list, i)\" style=\"box-shadow: 0 1px 1px lightgrey\" *ngFor=\"let list of mailBoxList; let i = index\">\n                    <div class=\"col-2 px-0\">\n                        <img src=\"../../../../assets/images/Avatar1.png\" alt=\"\" class=\"rounded-circle\" style=\"object-fit: contain; width: 32px; height: 32px; align-self: center\">\n                    </div>\n                    <div class=\"col-10 px-0\">\n                        <div class=\"row px-3 d-flex justify-content-between\">\n                            <h6 class=\"mb-0 color-black\" [class.font-weight-bold]=\"list.is_read == '0'\">{{list.from_name}}</h6>\n                            <p class=\"mb-0 align-self-center color-black\" style=\"font-size: 12px\" [class.font-weight-bold]=\"list.is_read == '0'\">{{this.getMessageTime(list.created_date)}}</p>\n                        </div>\n                        <small>{{list.subject}}</small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-{{toggleNav ? '12' : '9'}} px-0\" style=\"background: #fdfdfda8\" *ngIf=\"!composeMail && selectedMail == undefined\">\n                <div class=\"col-12 d-flex flex-wrap justify-content-center align-content-center\" style=\"min-height: 70vh\">\n                    <i class=\"fa fa-envelope-o cursor\" style=\"font-size: 10.3rem; color: grey\"></i>\n                    <div class=\"col-12 mt-1 d-flex justify-content-center\">\n                        <span class=\"color-grey\">Select a mail to read</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-{{toggleNav ? '12' : '9'}} px-0\" style=\"background: #fdfdfda8; max-height: 70vh; overflow: scroll\" *ngIf=\"!composeMail && selectedMail != undefined\">\n                <div class=\"col-12 py-3 d-flex justify-content-between align-items-center\" style=\"box-shadow: 0 1px 1px lightgrey\" *ngIf=\"selectedMail.subject != ''\">\n                    <h5 class=\"font-weight-bold mb-0\" style=\"font-size: 22px; color: black\">{{selectedMail.subject}}</h5>\n                    <i class=\"fa fa-print cursor\" style=\"font-size: 1.3rem; color: grey\"></i>\n                </div>\n                <div class=\"col-12 py-3 d-flex justify-content-start align-items-center\" style=\"box-shadow: 0 1px 1px lightgrey\">\n                    <img src=\"../../../../assets/images/Avatar1.png\" alt=\"\" class=\"rounded-circle\" style=\"object-fit: contain; width: 42px; height: 42px; align-self: center\">\n                    <div class=\"flex-fill pl-3\">\n                        <div class=\"col-12 px-0 d-flex\">\n                            <div class=\"col-10 px-0 d-flex\">\n                                <h6 class=\"font-weight-bold mb-0 color-black\">{{selectedMail.from_name}}</h6>\n                                <span class=\"align-self-center\">&lt;{{selectedMail.from_email}}&gt;</span>\n                            </div>\n                            <div class=\"col-2 px-0 d-flex justify-content-end\">\n                                <span>{{this.getMessageTime(selectedMail.created_date)}}</span>\n                            </div>\n                        </div>\n                        <div class=\"col-12 px-0\"><span>to me</span></div>\n                    </div>\n                </div>\n                <div class=\"col-12 pt-3 pb-5\" [ngClass]=\"{'bottom-border': attachment.length != 0}\">\n                    <p class=\"color-black\">{{selectedMail.body}}</p>\n                </div>\n                <div class=\"col-12 py-3\" *ngIf=\"attachment.length != 0\">\n                    <h5 class=\"font-weight-bold\">Attachments</h5>\n                </div>\n                <div class=\"col-12 mb-3 d-flex flex-wrap justify-content-between\" *ngIf=\"attachment.length != 0\">\n                    <div class=\"w-32 mb-2 d-flex justify-content-between p-3\" *ngFor=\"let items of attachment\" style=\"background-color: lightgrey; border-radius: 4px\">\n                        <span>{{items.name}}</span>\n                        <a href=\"\"><i class=\"fa fa-download color-black\"></i></a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-9 px-0\" style=\"background: #fdfdfda8;  max-height: 70vh; overflow: scroll\" *ngIf=\"composeMail\">\n                <form [formGroup]=\"mailForm\">\n                    <div class=\"col-12 my-2\">\n<!--                        <input type=\"text\" class=\"mail-input\" placeholder=\"To *\" formControlName=\"to\">-->\n                        <ng-select [items]=\"toList\"\n                                   bindLabel=\"student_name\"\n                                   bindValue=\"student_id\"\n                                   formControlName=\"to\"\n                                   class=\"mail-drop\"\n                                   placeholder=\"To *\"\n                                   typeToSearchText=\"\"\n                                   multiple=\"true\"\n                                   searchable=\"true\"\n                                   clearable=\"false\"\n                        >\n                        </ng-select>\n                    </div>\n                    <div class=\"col-12 my-2\">\n                        <input type=\"text\" class=\"mail-input\" placeholder=\"Cc/ Bcc\" formControlName=\"title\">\n                    </div>\n                    <div class=\"col-12 my-2\">\n                        <input type=\"text\" class=\"mail-input\" placeholder=\"Subject\" formControlName=\"subject\">\n                    </div>\n                    <div class=\"col-12 mb-3 mt-5\">\n                        <app-tiny-mice  (emitEditorValue)=\"getEditorValue($event)\"\n                                        [editorPatchValue]=\"false\"\n                                        [height]=\"200\"\n                                        [id]=\"'mailbox'\"\n                                        [showDropBtn]=\"false\"\n                                        [showInputBtn]=\"false\">\n                        </app-tiny-mice>\n                    </div>\n                    <div class=\"col-12 my-3 d-flex justify-content-between\">\n                        <button class=\"btn-outline\" (click)=\"composeMail = false\">Cancel</button>\n                        <button class=\"btn-primary-alt\" (click)=\"sendMail()\">Send</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n", styles: [".search-input {\n  font-size: 12px;\n  padding: 8px 10px;\n  border-radius: 4px;\n  border: none;\n  &:active {\n    border: none;\n    box-shadow: none;\n  }\n}\n.mail-input {\n  padding: 18px 12px;\n  border: none;\n  border-bottom: 1px solid #8F008A;\n  font-size: 14px;\n  width: 100%;\n  &:focus,&:active,&:focus-visible {\n    box-shadow: none;\n    border-bottom: 3px solid #8F008A;\n  }\n}\n.btn-outline {\n  color: #8F008A;\n  background: white;\n  padding: 8px 14px;\n  border-radius: 6px;\n  border: 1px solid lightgray;\n  box-shadow: 0 0 2px lightgray;\n  &:active, &:focus {\n    box-shadow: 1px 1px 12px lightgray;\n  }\n}\n.outline-no-border {\n  box-shadow: none !important;\n  font-weight: bold;\n}\n.btn-primary-alt {\n  color: white;\n  background: #8F008A;\n  font-weight: bold;\n  padding: 8px 14px;\n  border-radius: 6px;\n  border: 1px solid #8F008A;\n  &:active, &:focus {\n    box-shadow: 1px 1px 12px #8F008A;\n  }\n}\n.bottom-border {\n  box-shadow: 0 1px 1px lightgrey;\n}\nng-select.ng-select-container {\n  border: none !important;\n  border-bottom: 1px solid #8F008A;\n  border-radius: 0;\n  padding: 24px 0;\n  i{\n    visibility: hidden;\n  }\n}\n.mail-drop {\n  .ng-select-container {\n    border: none !important;\n    border-bottom: 1px solid #8F008A !important;\n    border-radius: 0 !important;\n    padding: 24px 0 !important;\n  }\n\n}"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.ToastrService }, { type: i3.DatePipe }, { type: i4.AuthService }, { type: i5.TeacherService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MailboxComponent, { className: "MailboxComponent" }); })();
//# sourceMappingURL=mailbox.component.js.map