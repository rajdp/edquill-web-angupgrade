import { Component, Injectable, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { TreeviewContentfolderComponent } from '../../auth/treeview-contentfolder/treeview-contentfolder.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/common-data.service";
import * as i2 from "@angular/router";
import * as i3 from "../../../shared/service/creator.service";
import * as i4 from "../../../shared/service/auth.service";
import * as i5 from "@angular/forms";
import * as i6 from "ngx-toastr";
import * as i7 from "@angular/platform-browser";
import * as i8 from "../../../shared/service/configuration.service";
import * as i9 from "../../../shared/service/common.service";
import * as i10 from "../../../shared/service/class.service";
import * as i11 from "../../../shared/service/validation.service";
import * as i12 from "../../../shared/service/newsubject.service";
import * as i13 from "@ng-bootstrap/ng-bootstrap";
import * as i14 from "src/app/shared/service/classroom.service";
import * as i15 from "@angular/common";
import * as i16 from "@ng-select/ng-select";
import * as i17 from "ngx-chips";
import * as i18 from "../../auth/tiny-mice/tiny-mice.component";
import * as i19 from "../../auth/confirm-content-assign/confirm-content-assign.component";
import * as i20 from "../../auth/treeview-contentfolder/treeview-contentfolder.component";
import * as i21 from "../../auth/other-link/other-link.component";
const _c0 = ["myInput"];
const _c1 = ["assignContentToClass"];
const _c2 = ["assignTemplate"];
const _c3 = ["addBranch"];
function TextResourceComponent_h4_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 20);
    i0.ɵɵtext(1, "ADD RESOURCES");
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_h4_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 20);
    i0.ɵɵtext(1, "EDIT RESOURCES - ");
    i0.ɵɵelementStart(2, "span", 21);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.contentName);
} }
function TextResourceComponent_h4_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 22);
    i0.ɵɵtext(1, "Add Description");
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function TextResourceComponent_button_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.assign("add")); });
    i0.ɵɵtext(1, "Publish");
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function TextResourceComponent_button_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.assign("edit")); });
    i0.ɵɵtext(1, "Publish");
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_img_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 24);
    i0.ɵɵlistener("click", function TextResourceComponent_img_18_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.draft("add")); });
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_img_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 24);
    i0.ɵɵlistener("click", function TextResourceComponent_img_19_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.draft("edit")); });
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function TextResourceComponent_button_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); ctx_r0.openContent = false; return i0.ɵɵresetView(ctx_r0.saveEditorVal()); });
    i0.ɵɵelement(1, "i", 26);
    i0.ɵɵtext(2, " Back");
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_div_21_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 63);
} }
function TextResourceComponent_div_21_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 64);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r0.sanitizer.bypassSecurityTrustResourceUrl(ctx_r0.webhost + "/" + ctx_r0.imagepath), i0.ɵɵsanitizeUrl);
} }
function TextResourceComponent_div_21_i_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 65);
    i0.ɵɵlistener("click", function TextResourceComponent_div_21_i_7_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.deleteImg()); });
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_div_21_em_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Resource Name is required");
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_div_21_em_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Grade is required");
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_div_21_em_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Subject is required");
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_div_21_option_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 67);
    i0.ɵɵtext(1, "Access to all within Org");
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_div_21_option_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 68);
    i0.ɵɵtext(1, "Access only for you");
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_div_21_option_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 69);
    i0.ɵɵtext(1, "Access within corporate");
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_div_21_em_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Access is required");
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_div_21_em_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 66);
    i0.ɵɵtext(1, "Description is required");
    i0.ɵɵelementEnd();
} }
function TextResourceComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "form", 28)(2, "div", 29)(3, "div", 30)(4, "div", 31);
    i0.ɵɵtemplate(5, TextResourceComponent_div_21_img_5_Template, 1, 0, "img", 32)(6, TextResourceComponent_div_21_img_6_Template, 1, 1, "img", 33)(7, TextResourceComponent_div_21_i_7_Template, 1, 0, "i", 34);
    i0.ɵɵelementStart(8, "div", 35)(9, "input", 36, 2);
    i0.ɵɵlistener("change", function TextResourceComponent_div_21_Template_input_change_9_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.encodeImageFileAsURL($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 37);
    i0.ɵɵlistener("click", function TextResourceComponent_div_21_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r7); const addAssignment_r9 = i0.ɵɵreference(10); return i0.ɵɵresetView(addAssignment_r9.click()); });
    i0.ɵɵelement(13, "i", 38);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(14, "div", 39)(15, "h5");
    i0.ɵɵtext(16, "Created By");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 4)(18, "div", 40);
    i0.ɵɵelement(19, "input", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 42);
    i0.ɵɵelement(21, "input", 43);
    i0.ɵɵtemplate(22, TextResourceComponent_div_21_em_22_Template, 2, 0, "em", 44);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 4)(24, "div", 40);
    i0.ɵɵelement(25, "ng-select", 45);
    i0.ɵɵtemplate(26, TextResourceComponent_div_21_em_26_Template, 2, 0, "em", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 40);
    i0.ɵɵelement(28, "ng-select", 46);
    i0.ɵɵtemplate(29, TextResourceComponent_div_21_em_29_Template, 2, 0, "em", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 47)(31, "select", 48)(32, "option", 49);
    i0.ɵɵtext(33, "Please Choose....");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(34, TextResourceComponent_div_21_option_34_Template, 2, 0, "option", 50)(35, TextResourceComponent_div_21_option_35_Template, 2, 0, "option", 51)(36, TextResourceComponent_div_21_option_36_Template, 2, 0, "option", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(37, TextResourceComponent_div_21_em_37_Template, 2, 0, "em", 44);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 53);
    i0.ɵɵelement(39, "app-treeview-contentfolder", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 4)(41, "div", 55);
    i0.ɵɵelement(42, "textarea", 56);
    i0.ɵɵtemplate(43, TextResourceComponent_div_21_em_43_Template, 2, 0, "em", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "div", 9);
    i0.ɵɵelement(45, "tag-input", 57);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(46, "div", 58);
    i0.ɵɵelement(47, "app-other-link", 59);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "div", 60)(49, "button", 61);
    i0.ɵɵlistener("click", function TextResourceComponent_div_21_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.textResoruceNext()); });
    i0.ɵɵtext(50, "Next ");
    i0.ɵɵelement(51, "i", 62);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r0.resourceform);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.imagepath == undefined || (ctx_r0.imagepath == null ? null : ctx_r0.imagepath.length) == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.imagepath != undefined && (ctx_r0.imagepath == null ? null : ctx_r0.imagepath.length) != 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.imagepath != undefined && (ctx_r0.imagepath == null ? null : ctx_r0.imagepath.length) != 0);
    i0.ɵɵadvance(15);
    i0.ɵɵproperty("ngIf", !ctx_r0.resourceform.get("resourceName").valid && (ctx_r0.resourceform.get("resourceName").dirty || ctx_r0.resourceform.get("resourceName").touched));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r0.gradeData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.resourceform.get("grade").valid && (ctx_r0.resourceform.get("grade").dirty || ctx_r0.resourceform.get("grade").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.subjectData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.resourceform.get("subject").valid && (ctx_r0.resourceform.get("subject").dirty || ctx_r0.resourceform.get("subject").touched));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.roleid != "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.roleid != "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.roleid == "6");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.resourceform.get("access").valid && (ctx_r0.resourceform.get("access").dirty || ctx_r0.resourceform.get("access").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("treeviewHeight", 250)("content_id", ctx_r0.type == "add" ? "" : ctx_r0.editData == null ? null : ctx_r0.editData.content_id)("type", ctx_r0.type)("selectedbatch", ctx_r0.type == "edit" ? ctx_r0.editData == null ? null : ctx_r0.editData.batch_id : ctx_r0.batchId);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r0.resourceform.get("description").valid && (ctx_r0.resourceform.get("description").dirty || ctx_r0.resourceform.get("description").touched));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("secondaryPlaceholder", "Enter tags")("placeholder", "Add tags")("editable", true)("clearOnBlur", true)("addOnPaste", true)("addOnBlur", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("arrayValue", ctx_r0.resourceArray);
} }
function TextResourceComponent_div_22_app_tiny_mice_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-tiny-mice", 72);
    i0.ɵɵlistener("emitEditorValue", function TextResourceComponent_div_22_app_tiny_mice_1_Template_app_tiny_mice_emitEditorValue_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.getHandwriting($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("editorPatchValue", ctx_r0.resourceVal == "" ? false : ctx_r0.resourceVal)("height", 300);
} }
function TextResourceComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70);
    i0.ɵɵtemplate(1, TextResourceComponent_div_22_app_tiny_mice_1_Template, 1, 2, "app-tiny-mice", 71);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showTextEditor == "1");
} }
function TextResourceComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 73)(1, "h5", 74);
    i0.ɵɵtext(2, "Assign Content");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 75)(4, "div", 4)(5, "div", 76)(6, "h5")(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, "?");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "div", 77)(11, "button", 78);
    i0.ɵɵlistener("click", function TextResourceComponent_ng_template_23_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.dontAssign()); });
    i0.ɵɵtext(12, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 79);
    i0.ɵɵlistener("click", function TextResourceComponent_ng_template_23_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.assignContent()); });
    i0.ɵɵtext(14, "Yes");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Do you want to assign this content to the Class ", ctx_r0.contentCreatedForm != "class" ? "or Content Folder" : "", "");
} }
function TextResourceComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-confirm-content-assign", 80);
    i0.ɵɵlistener("closePopUp", function TextResourceComponent_ng_template_25_Template_app_confirm_content_assign_closePopUp_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeAssignPopUp()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("classData", ctx_r0.classDetails)("contentDetails", ctx_r0.assignData);
} }
export class TextResourceComponent {
    constructor(commondata, router, route, creator, auth, formBuilder, toastr, sanitizer, config, common, classService, validationService, newSubject, modalService, branchService) {
        this.commondata = commondata;
        this.router = router;
        this.route = route;
        this.creator = creator;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.config = config;
        this.common = common;
        this.classService = classService;
        this.validationService = validationService;
        this.newSubject = newSubject;
        this.modalService = modalService;
        this.branchService = branchService;
        this.getTag = [];
        this.resourceVal = '';
        this.resourceArray = [];
        this.batchId = [];
        this.classDetails = [];
        this.contentCreatedForm = '';
        this.manageClass = true;
        this.webhost = this.config.getimgUrl();
        this.username = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
        this.roleid = this.auth.getRoleId();
        this.openContent = false;
        this.showTextEditor = '1';
        this.route.params.forEach((params) => {
            this.type = params.type;
            console.log(this.type, 'typeee');
        });
        this.manageClass = this.auth.manageClass;
        this.resourceform = this.formBuilder.group({
            created: ['', Validators.required],
            resourceName: ['', Validators.required],
            grade: ['', Validators.required],
            subject: ['', Validators.required],
            description: '',
            tag: '',
            access: ['1', Validators.required]
        });
        this.appendValue();
        this.allowChange = true;
        this.newSubject.allowSchoolChange(this.allowChange);
        if (this.type == 'edit') {
            const data = JSON.parse(this.auth.getSessionData('editor'));
            this.listDetails(data);
            console.log(this.editData, 'eddeydata');
            // this.editData = JSON.parse(this.auth.getSessionData('editresources'));
        }
        else {
            this.batchId = [];
            this.resourceform.controls.created.patchValue(this.username);
            this.resourceform.controls.resourceName.patchValue('');
            this.resourceform.controls.grade.patchValue(null);
            this.resourceform.controls.subject.patchValue(null);
            this.resourceform.controls.description.patchValue('');
            this.resourceArray = [];
            this.resourceform.controls.access.patchValue(this.auth.getRoleId() == '6' ? '4' : '1');
            this.resourceform.controls.tag.patchValue('');
        }
        this.contentCreatedForm = this.auth.getSessionData('assignedForm');
    }
    ngOnInit() {
        this.commondata.showLoader(false);
        this.gradeList();
        this.subjectList();
    }
    appendValue() {
        const clearGradeSelectValue = setInterval(() => {
            const element = document.getElementById('grade-ng-select');
            if (element != null) {
                const spanTag = document.createElement('span');
                spanTag.innerText = '*';
                spanTag.style.color = '#dc3545';
                spanTag.style.marginLeft = '3px';
                element.getElementsByClassName('ng-placeholder')[0].appendChild(spanTag);
                clearInterval(clearGradeSelectValue);
            }
        }, 0);
        const clearSubjectSelectValue = setInterval(() => {
            const element = document.getElementById('subject-ng-select');
            if (element != null) {
                const spanTag = document.createElement('span');
                spanTag.innerText = '*';
                spanTag.style.color = '#dc3545';
                spanTag.style.marginLeft = '3px';
                element.getElementsByClassName('ng-placeholder')[0].appendChild(spanTag);
                clearInterval(clearSubjectSelectValue);
            }
        }, 0);
    }
    gradeList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.classService.gradeList(data).subscribe((successData) => {
            this.gradeListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_grade');
        });
    }
    gradeListSuccess(successData) {
        if (successData.IsSuccess) {
            this.gradeData = successData.ResponseObject;
        }
    }
    subjectList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            type: 'active'
        };
        this.classService.subjectList(data).subscribe((successData) => {
            this.subjectListSuccess(successData);
        }, (error) => {
            console.error(error, 'error_subject');
        });
    }
    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.subjectData = successData.ResponseObject;
        }
    }
    listDetails(val) {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            content_id: val.content_id,
            content_format: '3',
            // content_type: this.textType == 'assignment' ? '2' : '3',
            content_type: val.content_type,
            school_id: this.auth.getSessionData('school_id')
        };
        this.creator.repositoryDetail(data).subscribe((successData) => {
            this.detailsSuccess(successData);
        }, (error) => {
            console.error(error, 'error_contentDetail');
        });
    }
    detailsSuccess(successData) {
        if (successData.IsSuccess) {
            this.editData = successData.ResponseObject;
            // this.detailData = successData.ResponseObject.questions;
            if (this.type == 'edit') {
                // this.editData = JSON.parse(this.auth.getSessionData('editresources'));
                console.log(this.editData, 'editData');
                this.batchId = this.editData.batch_id;
                this.contentName = this.editData.name;
                this.gradeId = this.editData.grade_id;
                this.resourceform.controls.created.patchValue(this.editData.created_by);
                this.resourceform.controls.resourceName.patchValue(this.editData.name);
                if (this.editData.grade.length >= 3) {
                    this.gradeSplit = [];
                    const grade = this.editData.grade.split(',');
                    for (let i = 0; i < grade.length; i++) {
                        this.gradeSplit.push(grade[i]);
                    }
                }
                else {
                    this.gradeSplit = [this.editData.grade];
                }
                if (this.editData.subject.length >= 3) {
                    this.subjectSplit = [];
                    const subject = this.editData.subject.split(',');
                    for (let i = 0; i < subject.length; i++) {
                        this.subjectSplit.push(subject[i]);
                    }
                }
                else {
                    this.subjectSplit = [this.editData.subject];
                }
                this.resourceform.controls.grade.patchValue(this.gradeSplit);
                this.resourceform.controls.subject.patchValue(this.subjectSplit);
                this.resourceform.controls.description.patchValue(this.editData.description);
                this.resourceArray = this.editData.links ? this.editData.links : [];
                this.resourceform.controls.access.patchValue(this.editData.access);
                this.showTextEditor = this.editData.editor_type;
                if (this.editData.file_text != '') {
                    // this.getEditorValue(this.editData.editor_type);
                    this.resourceVal = this.editData.file_text;
                }
                if (this.editData.tags != null) {
                    for (let i = 0; i < this.editData.tags.length; i++) {
                        this.getTag.push({ display: this.editData.tags[i], value: this.editData.tags[i] });
                    }
                }
                this.resourceform.controls.tag.patchValue(this.getTag);
                if (this.editData.profile_url != '') {
                    this.imagepath = this.editData.profile_url;
                }
                this.imagepaththumb = this.editData.profile_thumb_url;
            }
        }
    }
    encodeImageFileAsURL(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            const getUrlEdu = '';
            const imgDetails = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const url = event.target.result;
                const getUrl = url.split(',');
                const pic = imgDetails.type.split('/');
                if (pic[1] == 'jpeg' || pic[1] == 'png' || pic[1] == 'jpg') {
                    this.onUploadKYCFinished(getUrl, imgDetails);
                }
                else {
                    this.toastr.error('JPEG ,PNG & JPG are the required type');
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    }
    onUploadKYCFinished(getUrlEdu, imageList) {
        this.recordBase64Url = getUrlEdu[1];
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            image_path: [{
                    image: this.recordBase64Url,
                    size: imageList.size,
                    type: imageList.type,
                    name: imageList.name
                }],
            uploadtype: 'teacher'
        };
        this.common.fileUpload(data).subscribe((successData) => {
            this.uploadSuccess(successData);
        }, (error) => {
            console.error(error, 'error_uploadFile');
        });
    }
    uploadSuccess(successData) {
        // this.settings.loadingSpinner = false;
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.message);
            this.imagepath = successData.ResponseObject.imagepath[0].original_image_url;
            this.imagepaththumb = successData.ResponseObject.imagepath[0].resized_url;
            // if (typing == 1) {
            // for (let i = 0; i < successData.ResponseObject.imagepath.length; i++) {
            //   this.imagepath.push(successData.ResponseObject.imagepath[i].original_image_url);
            //   this.imagepaththumb.push(successData.ResponseObject.imagepath[i].resized_url);
            //
            // }
        }
        else {
            this.toastr.error('Invalid File Format');
        }
    }
    textResoruceNext() {
        if (this.resourceform.valid) {
            const filteredResourceLink = this.resourceArray.filter((item) => item.link !== '');
            const checkForValidResourceLink = filteredResourceLink.some((item) => item.name == '');
            if (!checkForValidResourceLink) {
                this.openContent = true;
                this.viewEdit = this.treeviewCompoent.batchid;
            }
            else {
                this.resourceArray.forEach(item => item.error = item.name == '' && item.link != '');
                setTimeout(() => {
                    const element = document.getElementById('otherLink');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
                this.toastr.error('Name is mandatory for each additional resource links');
            }
        }
        else {
            this.validationService.validateAllFormFields(this.resourceform);
            this.toastr.error('Please Fill All The Mandatory Fields');
        }
    }
    assign(value) {
        const batchId = this.viewEdit;
        let corporate;
        if (this.roleid == 6) {
            corporate = this.auth.getSessionData('corporate_id');
        }
        else {
            corporate = undefined;
        }
        if (this.content.content != '') {
            this.tagArray = [];
            const tags = this.resourceform.controls.tag.value;
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
            let content = '';
            if (this.showTextEditor == '1') {
                content = this.content.content;
            }
            else if (this.showTextEditor == '2') {
                content = JSON.stringify(this.content);
            }
            const filteredResourceLink = this.resourceArray.filter((item) => item.link !== '');
            const checkForValidResourceLink = filteredResourceLink.some((item) => item.name == '');
            if (!checkForValidResourceLink) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.auth.getSessionData('school_id'),
                    name: this.resourceform.controls.resourceName.value,
                    description: this.resourceform.controls.description.value,
                    grade: this.resourceform.controls.grade.value,
                    subject: this.resourceform.controls.subject.value,
                    access: this.resourceform.controls.access.value,
                    file_path: [],
                    tags: this.tagArray,
                    profile_url: this.imagepath,
                    profile_thumb_url: this.imagepaththumb,
                    content_format: '3',
                    content_type: '1',
                    status: '1',
                    answers: [],
                    file_text: content ? content : '',
                    links: filteredResourceLink,
                    annotation: [],
                    assign: '0',
                    classdetails: [],
                    editor_type: this.showTextEditor,
                    corporate_id: corporate,
                    batch_id: batchId
                };
                if (value != 'edit') {
                    this.creator.addAssignResourse(data).subscribe((successData) => {
                        this.assignSuccess(successData);
                    }, (error) => {
                        console.error(error, 'error_Add_assign');
                    });
                }
                else if (value == 'edit') {
                    data['content_id'] = this.editData.content_id;
                    this.creator.editAssignResourse(data).subscribe((successData) => {
                        this.assignSuccess(successData);
                    }, (error) => {
                        console.error(error, 'error_Update_assign');
                    });
                }
            }
            else {
                this.resourceArray.forEach(item => item.error = item.name == '' && item.link != '');
                setTimeout(() => {
                    const element = document.getElementById('otherLink');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
                this.toastr.error('Name is mandatory for each additional resource links');
            }
        }
        else {
            this.validationService.validateAllFormFields(this.resourceform);
            this.toastr.error('Please fill the mandatory fields');
        }
    }
    assignSuccess(successData) {
        if (successData.IsSuccess) {
            this.assignData = successData.Contentdetails;
            this.modalRef = this.modalService.open(this.assignContentToClass, { size: 'md', backdrop: 'static' });
            this.toastr.success('Content Published');
            this.auth.removeSessionData('editresources');
        }
        else if (!successData.IsSuccess) {
            this.toastr.error(successData.ResponseObject);
        }
    }
    draft(value) {
        const batchId = this.viewEdit;
        const corporate = this.roleid == 6 ? this.auth.getSessionData('corporate_id') : undefined;
        let content = '';
        if (this.content.content != '') {
            this.tagArray = [];
            const tags = this.resourceform.controls.tag.value;
            for (let i = 0; i < tags.length; i++) {
                this.tagArray.push(tags[i].value);
            }
            if (this.showTextEditor == '1') {
                content = this.content.content;
            }
            else if (this.showTextEditor == '2') {
                content = JSON.stringify(this.content);
            }
            const filteredResourceLink = this.resourceArray.filter((item) => item.link !== '');
            const checkForValidResourceLink = filteredResourceLink.some((item) => item.name == '');
            if (!checkForValidResourceLink) {
                const data = {
                    platform: 'web',
                    role_id: this.auth.getRoleId(),
                    user_id: this.auth.getUserId(),
                    school_id: this.auth.getSessionData('school_id'),
                    name: this.resourceform.controls.resourceName.value,
                    description: this.resourceform.controls.description.value,
                    grade: this.resourceform.controls.grade.value,
                    subject: this.resourceform.controls.subject.value,
                    access: this.resourceform.controls.access.value,
                    file_path: [],
                    tags: this.tagArray,
                    profile_url: this.imagepath,
                    profile_thumb_url: this.imagepaththumb,
                    content_format: '3',
                    content_type: '1',
                    status: '5',
                    answers: [],
                    file_text: content ? content : '',
                    links: filteredResourceLink,
                    annotation: [],
                    assign: '0',
                    classdetails: [],
                    editor_type: this.showTextEditor,
                    corporate_id: corporate,
                    batch_id: batchId
                };
                if (value != 'edit') {
                    this.creator.addDraftResourse(data).subscribe((successData) => {
                        this.draftSuccess(successData);
                    }, (error) => {
                        console.error(error, 'error_Add_draft');
                    });
                }
                else if (value == 'edit') {
                    data['content_id'] = this.editData.content_id;
                    this.creator.editDraftResourse(data).subscribe((successData) => {
                        this.draftSuccess(successData);
                    }, (error) => {
                        console.error(error, 'error_Update_draft');
                    });
                }
            }
            else {
                this.resourceArray.forEach(item => item.error = item.name == '' && item.link != '');
                setTimeout(() => {
                    const element = document.getElementById('otherLink');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
                this.toastr.error('Name is mandatory for each additional resource links');
            }
        }
        else {
            this.validationService.validateAllFormFields(this.resourceform);
            this.toastr.error('Please fill the mandatory fields');
        }
    }
    draftSuccess(successData) {
        if (successData.IsSuccess) {
            this.draftData = successData.ResponseObject;
            this.router.navigate(['/repository/content-home']);
            this.toastr.success('Draft Added');
            this.auth.removeSessionData('editresources');
        }
        else if (!successData.IsSuccess) {
            this.toastr.error(successData.ResponseObject);
        }
    }
    deleteImg() {
        this.imagepath = [];
        this.myInputVariable.nativeElement.value = '';
    }
    getHandwriting(content) {
        this.content = content;
    }
    saveEditorVal() {
        this.resourceVal = this.content.content;
    }
    getEditorValue(editorType) {
        let content = '';
        if (this.type == 'edit') {
            if (editorType == '1' && this.editData.editor_type == '1') {
                this.content = this.editData.file_text;
            }
            else if (editorType == '2' && this.editData.editor_type == '1') {
                this.content = JSON.parse(this.editData.file_text);
            }
            else if (editorType == '3' && this.editData.editor_type == '1') {
                this.content = this.editData.file_text;
            }
            else if (editorType == '1' && this.editData.editor_type == '2') {
                content = JSON.parse(this.editData.file_text);
                this.content = content['text/plain'];
            }
            else if (editorType == '2' && this.editData.editor_type == '2') {
                content = JSON.parse(this.editData.file_text);
                this.content = JSON.parse(this.editData.file_text);
            }
            else if (editorType == '3' && this.editData.editor_type == '2') {
                content = JSON.parse(this.editData.file_text);
                this.content = JSON.parse(this.editData['application/vnd.myscript.jiix']);
            }
            else if (editorType == '1' && this.editData.editor_type == '3') {
                content = JSON.parse(this.editData.file_text);
                this.content = this.editData.file_text['application/mathml+xml'];
            }
            else if (editorType == '2' && this.editData.editor_type == '3') {
                content = JSON.parse(this.editData.file_text);
                this.content = JSON.parse(this.editData.file_text);
            }
            else if (editorType == '3' && this.editData.editor_type == '3') {
                content = JSON.parse(this.editData.file_text);
                this.content = JSON.parse(this.editData['application/vnd.myscript.jiix']);
            }
        }
    }
    assignContent() {
        this.modalRef.close();
        this.classDetails = JSON.parse(this.auth.getSessionData('card-data'));
        this.modalRef = this.modalService.open(this.assignTemplate, { size: 'xl', backdrop: 'static' });
    }
    closeAssignPopUp() {
        this.auth.removeSessionData('assignedForm');
        this.modalRef.close();
    }
    dontAssign() {
        this.modalRef.close();
        if (this.auth.getSessionData('assignedForm') == 'class') {
            this.auth.removeSessionData('content_assign');
            this.router.navigate(['class/topicsAndCurriculum/1']);
        }
        else if (this.auth.getSessionData('assignedForm') == 'content-Folder') {
            this.router.navigate(['class/view-assign/2']);
        }
        else if (this.auth.getSessionData('assignedForm') == 'classRoom') {
            this.router.navigate(['classroom/list-classroom']);
        }
        else {
            this.router.navigate(['repository/content-home']);
        }
        this.auth.setSessionData('resourceAccess', false);
        this.auth.removeSessionData('assignedForm');
    }
    static { this.ɵfac = function TextResourceComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TextResourceComponent)(i0.ɵɵdirectiveInject(i1.CommonDataService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.CreatorService), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i5.FormBuilder), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i7.DomSanitizer), i0.ɵɵdirectiveInject(i8.ConfigurationService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i10.ClassService), i0.ɵɵdirectiveInject(i11.ValidationService), i0.ɵɵdirectiveInject(i12.NewsubjectService), i0.ɵɵdirectiveInject(i13.NgbModal), i0.ɵɵdirectiveInject(i14.ClassroomService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TextResourceComponent, selectors: [["app-text-resource"]], viewQuery: function TextResourceComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(TreeviewContentfolderComponent, 5);
            i0.ɵɵviewQuery(_c3, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myInputVariable = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignContentToClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeviewCompoent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addBranchTemp = _t.first);
        } }, decls: 27, vars: 10, consts: [["assignContentToClass", ""], ["assignTemplate", ""], ["addAssignment", "", "myInput", ""], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header"], [1, "row", "justify-content-end"], [1, "col-md-6"], ["class", "text-capitalize", 4, "ngIf"], ["class", "font-weight-bold", "style", "font-size: 20px", 4, "ngIf"], [1, "text-muted"], [1, "text-danger"], [1, "pdf-assign-btn", "col-md-6"], ["class", "btn btn-primary pull-right ml-3", 3, "click", 4, "ngIf"], ["class", "pull-right", "src", "assets/images/pdf-icons/floppy-disk.png", "alt", "", 3, "click", 4, "ngIf"], ["class", "btn btn-primary pull-right mr-3", 3, "click", 4, "ngIf"], ["class", "card-body tab2-card", 4, "ngIf"], ["class", "p-2", 4, "ngIf"], [1, "text-capitalize"], [1, "color-primary"], [1, "font-weight-bold", 2, "font-size", "20px"], [1, "btn", "btn-primary", "pull-right", "ml-3", 3, "click"], ["src", "assets/images/pdf-icons/floppy-disk.png", "alt", "", 1, "pull-right", 3, "click"], [1, "btn", "btn-primary", "pull-right", "mr-3", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-left", "fa-1x"], [1, "card-body", "tab2-card"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "col-md-12", "d-flex", "mb-4"], [1, "col-sm-12", "col-md-4", "px-0"], [1, "image-container-left"], ["src", "assets/images/ristaschool/resource.png", "alt", "", 4, "ngIf"], ["alt", "", 3, "src", 4, "ngIf"], ["class", "fa fa-times close-button", "title", "close", 3, "click", 4, "ngIf"], [1, "profileUrl"], ["type", "file", "accept", ".png, .jpeg, .jpg", 1, "custom-upload-input", 2, "display", "none", 3, "change"], ["type", "button", "title", "upload Image", 1, "btn", "btn-light", "btn-circle", "border-rista", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-upload", "fa-2x", "mb-3"], [1, "container", "col-sm-12", "col-md-8"], [1, "col-md-4", "form-group"], ["formControlName", "created", "id", "validationCustom1", "type", "text", "placeholder", "Created", "required", "", "readonly", "", 1, "form-control"], [1, "col-md-8", "form-group"], ["formControlName", "resourceName", "id", "validationCustom12", "type", "text", "placeholder", "Resource Name *", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["id", "grade-ng-select", "bindLabel", "grade_name", "bindValue", "grade_id", "formControlName", "grade", "placeholder", "Select Grade", "typeToSearchText", "", "multiple", "true", 3, "items"], ["id", "subject-ng-select", "bindLabel", "subject_name", "bindValue", "subject_id", "formControlName", "subject", "placeholder", "Select Subject", "typeToSearchText", "", "multiple", "true", 3, "items"], [1, "form-group", "col-md-4"], ["formControlName", "access", 1, "form-control"], ["value", "", "hidden", "", "selected", ""], ["value", "1", 4, "ngIf"], ["value", "2", 4, "ngIf"], ["value", "4", 4, "ngIf"], [1, "row", "d-flex", "align-items-center", "mb-3"], [3, "treeviewHeight", "content_id", "type", "selectedbatch"], [1, "form-group", "col-md-12"], ["name", "", "id", "", "placeholder", "Enter Description", "formControlName", "description", 1, "form-control", 2, "width", "100%", "height", "100px"], ["formControlName", "tag", "theme", "bootstrap", 3, "secondaryPlaceholder", "placeholder", "editable", "clearOnBlur", "addOnPaste", "addOnBlur"], [1, "col-12"], [3, "arrayValue"], [1, "col-md-12", "mt-5"], [1, "btn", "btn-primary", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-right", "fa-1x"], ["src", "assets/images/ristaschool/resource.png", "alt", ""], ["alt", "", 3, "src"], ["title", "close", 1, "fa", "fa-times", "close-button", 3, "click"], [1, "error"], ["value", "1"], ["value", "2"], ["value", "4"], [1, "p-2"], [3, "editorPatchValue", "height", "emitEditorValue", 4, "ngIf"], [3, "emitEditorValue", "editorPatchValue", "height"], [1, "modal-header"], [1, "contenttext", "text-center", "mb-0"], [1, "modal-body"], [1, "col-md-12"], [1, "modal-footer"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [3, "closePopUp", "classData", "contentDetails"]], template: function TextResourceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "div", 9);
            i0.ɵɵtemplate(7, TextResourceComponent_h4_7_Template, 2, 0, "h4", 10)(8, TextResourceComponent_h4_8_Template, 4, 1, "h4", 10)(9, TextResourceComponent_h4_9_Template, 2, 0, "h4", 11);
            i0.ɵɵelementStart(10, "label", 12);
            i0.ɵɵtext(11, "All fields marked with ");
            i0.ɵɵelementStart(12, "span", 13);
            i0.ɵɵtext(13, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(14, " are required");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 14);
            i0.ɵɵtemplate(16, TextResourceComponent_button_16_Template, 2, 0, "button", 15)(17, TextResourceComponent_button_17_Template, 2, 0, "button", 15)(18, TextResourceComponent_img_18_Template, 1, 0, "img", 16)(19, TextResourceComponent_img_19_Template, 1, 0, "img", 16)(20, TextResourceComponent_button_20_Template, 3, 0, "button", 17);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(21, TextResourceComponent_div_21_Template, 52, 25, "div", 18)(22, TextResourceComponent_div_22_Template, 2, 1, "div", 19);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(23, TextResourceComponent_ng_template_23_Template, 15, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(25, TextResourceComponent_ng_template_25_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.type == "add" && !ctx.openContent);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit" && !ctx.openContent);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.openContent);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.type != "edit" && ctx.openContent);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit" && ctx.openContent);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type != "edit" && ctx.openContent);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type == "edit" && ctx.openContent);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.openContent);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.openContent);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.openContent);
        } }, dependencies: [i15.NgIf, i5.ɵNgNoValidate, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.DefaultValueAccessor, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.FormGroupDirective, i5.FormControlName, i16.NgSelectComponent, i17.TagInputComponent, i18.TinyMiceComponent, i19.ConfirmContentAssignComponent, i20.TreeviewContentfolderComponent, i21.OtherLinkComponent], styles: [".container[_ngcontent-%COMP%] {\n  display: block;\n}"] }); }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TextResourceComponent, factory: TextResourceComponent.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextResourceComponent, [{
        type: Injectable
    }, {
        type: Component,
        args: [{ selector: 'app-text-resource', template: "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card tab2-card\">\n                <div class=\"card-header\">\n                    <div class=\"row justify-content-end\">\n                        <div class=\"col-md-6\">\n                            <h4 class=\"text-capitalize\" *ngIf=\"type == 'add' && !openContent\">ADD RESOURCES</h4>\n                            <h4 class=\"text-capitalize\" *ngIf=\"type == 'edit' && !openContent\">EDIT RESOURCES - <span class=\"color-primary\">{{contentName}}</span></h4>\n                            <h4 *ngIf=\"openContent\" class=\"font-weight-bold\" style=\"font-size: 20px\" >Add Description</h4>\n                            <label class=\"text-muted\">All fields marked with <span class=\"text-danger\">*</span> are required</label>\n                        </div>\n                        <div class=\"pdf-assign-btn col-md-6\">\n                            <button class=\"btn btn-primary pull-right ml-3\" *ngIf=\"type != 'edit' && openContent\" (click)=\"assign('add')\">Publish</button>\n                            <button class=\"btn btn-primary pull-right ml-3\" *ngIf=\"type == 'edit' && openContent\" (click)=\"assign('edit')\">Publish</button>\n                            <img *ngIf=\"type != 'edit' && openContent\" class=\"pull-right\" (click)=\"draft('add')\" src=\"assets/images/pdf-icons/floppy-disk.png\" alt=\"\">\n                            <img *ngIf=\"type == 'edit' && openContent\" class=\"pull-right\" (click)=\"draft('edit')\" src=\"assets/images/pdf-icons/floppy-disk.png\" alt=\"\">\n                            <button (click)=\"openContent = false; saveEditorVal()\" *ngIf=\"openContent\" class=\"btn btn-primary pull-right mr-3\"><i aria-hidden=\"true\" class=\"fa fa-long-arrow-left fa-1x\"></i> Back</button>\n                        </div>\n<!--                        <div class=\"col-4 col-xl-2 d-lg-block d-xl-none\" *ngIf=\"openContent\">-->\n<!--                                <select class=\"form-control\" *ngIf=\"type != 'edit'\"  [(ngModel)]=\"showTextEditor\" (change)=\"getEditorValue($event.target.value)\">-->\n<!--                                    <option value=\"1\">&#xf179; keyboard</option>-->\n<!--                                    <option value=\"2\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Text </option>-->\n<!--                                    <option value=\"3\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Maths</option>-->\n<!--                                </select>-->\n<!--                        </div>-->\n                    </div>\n                </div>\n                <div class=\"card-body tab2-card\" *ngIf=\"!openContent\">\n                    <form [formGroup]=\"resourceform\" class=\"needs-validation user-add\">\n                        <div class=\"col-md-12 d-flex mb-4\">\n                            <div class=\"col-sm-12 col-md-4 px-0\">\n                                <div class=\"image-container-left\">\n                                    <img *ngIf=\"(imagepath == undefined || imagepath?.length == 0)\" src=\"assets/images/ristaschool/resource.png\" alt=\"\">\n                                    <img  *ngIf=\"imagepath != undefined && imagepath?.length != 0\"  [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + imagepath)\" alt=\"\">\n                                    <i *ngIf=\"imagepath != undefined && imagepath?.length != 0\" class=\"fa fa-times close-button\" title=\"close\" (click)=\"deleteImg()\" ></i>\n                                    <div class=\"profileUrl\">\n                                        <input style=\"display: none\" type=\"file\" class=\"custom-upload-input\" (change)=\"encodeImageFileAsURL($event)\" #addAssignment #myInput accept=\".png, .jpeg, .jpg\">\n                                        <button type=\"button\" class=\"btn btn-light btn-circle border-rista\" title=\"upload Image\" (click)=\"addAssignment.click()\"> <i class=\"fa fa-upload fa-2x mb-3\" aria-hidden=\"true\"></i> </button>\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"container col-sm-12 col-md-8\">\n                                <h5>Created By</h5>\n                                <div class=\"row\">\n                                    <div class=\"col-md-4 form-group\">\n                                        <input class=\"form-control\" formControlName=\"created\" id=\"validationCustom1\"\n                                               type=\"text\" placeholder=\"Created\" required=\"\" readonly>\n                                    </div>\n                                    <div class=\"col-md-8 form-group\">\n                                        <input class=\"form-control\" formControlName=\"resourceName\" id=\"validationCustom12\"\n                                               type=\"text\" placeholder=\"Resource Name *\" required=\"\">\n                                        <em class=\"error\" *ngIf=\"!resourceform.get('resourceName').valid && (resourceform.get('resourceName').dirty || resourceform.get('resourceName').touched)\">Resource Name is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div  class=\"col-md-4 form-group\">\n                                        <ng-select id=\"grade-ng-select\"  [items]=\"gradeData\"\n                                                   bindLabel=\"grade_name\"\n                                                   bindValue=\"grade_id\"\n                                                   formControlName=\"grade\"\n                                                   placeholder=\"Select Grade\"\n                                                   typeToSearchText=\"\"\n                                                   multiple=\"true\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\" *ngIf=\"!resourceform.get('grade').valid && (resourceform.get('grade').dirty || resourceform.get('grade').touched)\">Grade is required</em>\n                                    </div>\n                                    <div class=\"col-md-4 form-group\">\n                                        <ng-select id=\"subject-ng-select\"  [items]=\"subjectData\"\n                                                   bindLabel=\"subject_name\"\n                                                   bindValue=\"subject_id\"\n                                                   formControlName=\"subject\"\n                                                   placeholder=\"Select Subject\"\n                                                   typeToSearchText=\"\"\n                                                   multiple=\"true\"\n                                        >\n                                        </ng-select>\n                                        <em class=\"error\" *ngIf=\"!resourceform.get('subject').valid && (resourceform.get('subject').dirty || resourceform.get('subject').touched)\">Subject is required</em>\n                                    </div>\n                                    <div class=\"form-group col-md-4\">\n                                        <select class=\"form-control\" formControlName=\"access\">\n                                            <option value=\"\" hidden selected>Please Choose....</option>\n                                            <option *ngIf=\"roleid != '6'\" value=\"1\">Access to all within Org</option>\n                                            <option *ngIf=\"roleid != '6'\" value=\"2\">Access only for you</option>\n                                            <option *ngIf=\"roleid == '6'\" value=\"4\">Access within corporate</option>\n                                        </select>\n                                        <em class=\"error\" *ngIf=\"!resourceform.get('access').valid && (resourceform.get('access').dirty || resourceform.get('access').touched)\">Access is required</em>\n                                    </div>\n                                </div>\n                                <div class=\"row d-flex align-items-center mb-3\">\n                                    <app-treeview-contentfolder [treeviewHeight]=\"250\"\n                                                                [content_id]=\"type == 'add' ?  '' : editData?.content_id\"\n                                            [type]=\"type\" [selectedbatch]=\"type == 'edit' ? editData?.batch_id : batchId\">\n                                    </app-treeview-contentfolder>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"form-group col-md-12\">\n                                        <textarea class=\"form-control\" name=\"\" id=\"\" placeholder=\"Enter Description\" formControlName=\"description\" style=\"width: 100%; height: 100px\"></textarea>\n                                        <em class=\"error\" *ngIf=\"!resourceform.get('description').valid && (resourceform.get('description').dirty || resourceform.get('description').touched)\">Description is required</em>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <tag-input formControlName=\"tag\"\n                                                   [secondaryPlaceholder]=\"'Enter tags'\"\n                                                   [placeholder]=\"'Add tags'\"\n                                                   [editable]='true'\n                                                   [clearOnBlur]=\"true\"\n                                                   [addOnPaste]=\"true\"\n                                                   [addOnBlur]=\"true\"\n                                                   theme='bootstrap'\n                                        ></tag-input>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-12\">\n                            <app-other-link [arrayValue]=\"resourceArray\"></app-other-link>\n                        </div>\n                    </form>\n                    <div class=\"col-md-12 mt-5\">\n                        <button class=\"btn btn-primary pull-right\" (click)=\"textResoruceNext()\">Next <i class=\"fa fa-long-arrow-right fa-1x\" aria-hidden=\"true\"></i></button>\n                    </div>\n                </div>\n                <div class=\"p-2\" *ngIf=\"openContent\">\n                    <app-tiny-mice\n                            (emitEditorValue)=\"getHandwriting($event)\"\n                            *ngIf=\"showTextEditor == '1'\"\n                            [editorPatchValue]=\"resourceVal == '' ? false : resourceVal\"\n                            [height]=\"300\"></app-tiny-mice>\n<!--                    <app-text-handwriting [editorTextHandwritingValue]=\"content\" (emitTextHandwriting)=\"getHandwriting($event)\" *ngIf=\"showTextEditor == '2'\"></app-text-handwriting>-->\n<!--                    <app-math-handwriting [editorMathHandwritingValue]=\"content\" (emitMathHandwriting)=\"getHandwriting($event)\" *ngIf=\"showTextEditor == '3'\"></app-math-handwriting>-->\n                    <!--<app-diagram-handwriting *ngIf=\"showTextEditor == '4'\"></app-diagram-handwriting>-->\n                    <!--<quill-editor [(ngModel)]=\"content\"></quill-editor>-->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #assignContentToClass let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h5 class=\"contenttext text-center mb-0\">Assign Content</h5>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5>\n                    <span>Do you want to assign this content to the Class {{contentCreatedForm != 'class' ? 'or Content Folder' : ''}}</span>?</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"dontAssign()\">No</button>\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"assignContent()\"\n        >Yes</button>\n    </div>\n</ng-template>\n\n<ng-template #assignTemplate let-c=\"close\" let-d=\"dismiss\">\n    <app-confirm-content-assign\n            [classData]=\"classDetails\"\n            [contentDetails]=\"assignData\"\n            (closePopUp)=\"closeAssignPopUp()\"\n    >\n    </app-confirm-content-assign>\n</ng-template>\n\n\n", styles: [".container {\n  display: block;\n}\n"] }]
    }], () => [{ type: i1.CommonDataService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.CreatorService }, { type: i4.AuthService }, { type: i5.FormBuilder }, { type: i6.ToastrService }, { type: i7.DomSanitizer }, { type: i8.ConfigurationService }, { type: i9.CommonService }, { type: i10.ClassService }, { type: i11.ValidationService }, { type: i12.NewsubjectService }, { type: i13.NgbModal }, { type: i14.ClassroomService }], { myInputVariable: [{
            type: ViewChild,
            args: ['myInput']
        }], assignContentToClass: [{
            type: ViewChild,
            args: ['assignContentToClass']
        }], assignTemplate: [{
            type: ViewChild,
            args: ['assignTemplate']
        }], treeviewCompoent: [{
            type: ViewChild,
            args: [TreeviewContentfolderComponent, { static: false }]
        }], addBranchTemp: [{
            type: ViewChild,
            args: ['addBranch']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TextResourceComponent, { className: "TextResourceComponent" }); })();
//# sourceMappingURL=text-resource.component.js.map