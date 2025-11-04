import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../shared/service/configuration.service";
import * as i3 from "@angular/common";
import * as i4 from "../../../shared/service/auth.service";
import * as i5 from "../../../shared/service/common-data.service";
import * as i6 from "@angular/router";
import * as i7 from "../../../shared/service/validation.service";
import * as i8 from "ngx-toastr";
import * as i9 from "../../../shared/service/common.service";
import * as i10 from "@angular/forms";
import * as i11 from "../../../shared/service/newsubject.service";
import * as i12 from "@ng-select/ng-select";
import * as i13 from "../../corporateschool/emptyschool/emptyschool.component";
import * as i14 from "@nodro7/angular-mydatepicker";
import * as i15 from "../../auth/table/table.component";
const _c0 = ["content"];
const _c1 = () => ["answer_key_upload", "allow_autoassign_student_for_class", "upgrade_date", "allow_autograde_settings", "date_format", "timezone", "zoom_user_email", "teacher_zoom_view", "student_zoom_view"];
const _c2 = () => ({ standalone: true });
function ListSettingsComponent_ng_template_0_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 30)(1, "input", 31, 1);
    i0.ɵɵlistener("dateChanged", function ListSettingsComponent_ng_template_0_div_26_Template_input_dateChanged_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDateChanged($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 32)(4, "button", 29);
    i0.ɵɵlistener("click", function ListSettingsComponent_ng_template_0_div_26_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); const dp_r4 = i0.ɵɵreference(2); return i0.ɵɵresetView(dp_r4.toggleCalendar()); });
    i0.ɵɵelement(5, "i", 33);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("options", ctx_r1.myDpOptions);
} }
function ListSettingsComponent_ng_template_0_input_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 34);
} }
function ListSettingsComponent_ng_template_0_select_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "select", 35)(1, "option", 36);
    i0.ɵɵtext(2, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 37);
    i0.ɵɵtext(4, "Suspended");
    i0.ɵɵelementEnd()();
} }
function ListSettingsComponent_ng_template_0_select_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "select", 35)(1, "option", 38);
    i0.ɵɵtext(2, "In-App");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 39);
    i0.ɵɵtext(4, "New Tab");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "option", 40);
    i0.ɵɵtext(6, "Both");
    i0.ɵɵelementEnd()();
} }
function ListSettingsComponent_ng_template_0_select_30_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 42);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", item_r5.date_id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r5.example, " \u00A0( Eg:\u00A0", item_r5.display_name, " )");
} }
function ListSettingsComponent_ng_template_0_select_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "select", 35);
    i0.ɵɵtemplate(1, ListSettingsComponent_ng_template_0_select_30_option_1_Template, 2, 3, "option", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.dateFormatList);
} }
function ListSettingsComponent_ng_template_0_div_31_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵlistener("click", function ListSettingsComponent_ng_template_0_div_31_div_1_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const i_r9 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteEmail(i_r9)); });
    i0.ɵɵelement(1, "i", 49);
    i0.ɵɵelementEnd();
} }
function ListSettingsComponent_ng_template_0_div_31_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵlistener("click", function ListSettingsComponent_ng_template_0_div_31_div_1_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.addEmail()); });
    i0.ɵɵelement(1, "i", 50);
    i0.ɵɵelementEnd();
} }
function ListSettingsComponent_ng_template_0_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function ListSettingsComponent_ng_template_0_div_31_div_1_Template_input_ngModelChange_1_listener($event) { const val_r7 = i0.ɵɵrestoreView(_r6).$implicit; i0.ɵɵtwoWayBindingSet(val_r7.value, $event) || (val_r7.value = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, ListSettingsComponent_ng_template_0_div_31_div_1_div_2_Template, 2, 0, "div", 47)(3, ListSettingsComponent_ng_template_0_div_31_div_1_div_3_Template, 2, 0, "div", 47);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const val_r7 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", val_r7.value);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(4, _c2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (i_r9 + 1 !== ctx_r1.userEmailList.length || ctx_r1.userEmailList.length == 10) && ctx_r1.userEmailList.length > 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r9 + 1 === ctx_r1.userEmailList.length && ctx_r1.userEmailList.length < 10);
} }
function ListSettingsComponent_ng_template_0_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43)(1, "small", 51);
    i0.ɵɵtext(2, "Maximum count reached");
    i0.ɵɵelementEnd()();
} }
function ListSettingsComponent_ng_template_0_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, ListSettingsComponent_ng_template_0_div_31_div_1_Template, 4, 5, "div", 44)(2, ListSettingsComponent_ng_template_0_div_31_div_2_Template, 3, 0, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.userEmailList);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.userEmailList.length > 10);
} }
function ListSettingsComponent_ng_template_0_ng_select_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ng-select", 52);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("items", ctx_r1.timeZoneList);
} }
function ListSettingsComponent_ng_template_0_em_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 53);
    i0.ɵɵtext(1, "Value is required");
    i0.ɵɵelementEnd();
} }
function ListSettingsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "h4", 5);
    i0.ɵɵtext(2, "Settings details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 6);
    i0.ɵɵlistener("click", function ListSettingsComponent_ng_template_0_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 7)(5, "div", 8)(6, "form", 9)(7, "div", 10)(8, "div", 11)(9, "div", 12)(10, "div", 13)(11, "label", 14);
    i0.ɵɵtext(12, " Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 15);
    i0.ɵɵelement(14, "input", 16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 13)(16, "label", 17);
    i0.ɵɵtext(17, " Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 15);
    i0.ɵɵelement(19, "textarea", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 19)(21, "label", 20);
    i0.ɵɵtext(22, " Value");
    i0.ɵɵelementStart(23, "span");
    i0.ɵɵtext(24, "*");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 15);
    i0.ɵɵtemplate(26, ListSettingsComponent_ng_template_0_div_26_Template, 6, 1, "div", 21)(27, ListSettingsComponent_ng_template_0_input_27_Template, 1, 0, "input", 22)(28, ListSettingsComponent_ng_template_0_select_28_Template, 5, 0, "select", 23)(29, ListSettingsComponent_ng_template_0_select_29_Template, 7, 0, "select", 23)(30, ListSettingsComponent_ng_template_0_select_30_Template, 2, 1, "select", 23)(31, ListSettingsComponent_ng_template_0_div_31_Template, 3, 2, "div", 24)(32, ListSettingsComponent_ng_template_0_ng_select_32_Template, 1, 1, "ng-select", 25)(33, ListSettingsComponent_ng_template_0_em_33_Template, 2, 0, "em", 26);
    i0.ɵɵelementEnd()()()()()()()();
    i0.ɵɵelementStart(34, "div", 27)(35, "button", 28);
    i0.ɵɵlistener("click", function ListSettingsComponent_ng_template_0_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(36, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "button", 29);
    i0.ɵɵlistener("click", function ListSettingsComponent_ng_template_0_Template_button_click_37_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.editsettings()); });
    i0.ɵɵtext(38, "Save");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.settingsform);
    i0.ɵɵadvance(20);
    i0.ɵɵproperty("ngIf", ctx_r1.settingsform.controls.name.value == "upgrade_date");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction0(9, _c1).indexOf(ctx_r1.settingsform.controls.name.value) == -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.settingsform.controls.name.value == "answer_key_upload" || ctx_r1.settingsform.controls.name.value == "allow_autoassign_student_for_class" || ctx_r1.settingsform.controls.name.value == "allow_autograde_settings");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.settingsform.controls.name.value == "student_zoom_view" || ctx_r1.settingsform.controls.name.value == "teacher_zoom_view");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.settingsform.controls.name.value == "date_format");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.settingsform.controls.name.value == "zoom_user_email");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.settingsform.controls.name.value == "timezone");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.settingsform.get("value").valid && (ctx_r1.settingsform.get("value").dirty || ctx_r1.settingsform.get("value").touched) && ctx_r1.settingsform.controls.name.value != "zoom_user_email");
} }
function ListSettingsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 54);
    i0.ɵɵelement(2, "div", 55);
    i0.ɵɵelementStart(3, "div", 56)(4, "div", 57)(5, "div", 58)(6, "app-table", 59);
    i0.ɵɵlistener("clickValue", function ListSettingsComponent_div_2_Template_app_table_clickValue_6_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.emittedValue($event)); });
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("TableType", "General")("TableArray", ctx_r1.listData);
} }
function ListSettingsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
export class ListSettingsComponent {
    constructor(config, confi, modalService, datePipe, auth, commondata, route, firstcaps, validationService, toastr, common, formBuilder, newSubject) {
        this.config = config;
        this.confi = confi;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.auth = auth;
        this.commondata = commondata;
        this.route = route;
        this.firstcaps = firstcaps;
        this.validationService = validationService;
        this.toastr = toastr;
        this.common = common;
        this.formBuilder = formBuilder;
        this.newSubject = newSubject;
        this.myDpOptions = {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: 'mm/dd/yyyy',
        };
        this.dateFormatList = [];
        this.timeZoneList = [];
        this.userEmailList = [];
        this.settings = {
            hideSubHeader: false,
            actions: {
                custom: [
                    {
                        name: 'editAction',
                        title: '<i class="fa  fa-pencil" title="Edit Book"></i>',
                        width: '10%'
                    },
                ],
                add: false,
                edit: false,
                delete: false,
                position: 'right',
            },
            columns: {
                name: {
                    title: 'Name',
                    type: 'html',
                    width: '30%',
                    valuePrepareFunction: (data) => {
                        return `<a title="${data}"> <span>${data}</a>`;
                    }
                },
                description: {
                    title: 'Description',
                    type: 'html',
                    width: '30%',
                    valuePrepareFunction: (data) => {
                        return `<a title="${data}"> <span>${data}</a>`;
                    }
                },
                value: {
                    title: 'Value',
                    width: '30%'
                },
            },
        };
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.getDateFormat();
        this.getTimeZone();
        if (this.schoolStatus.length != 0) {
            this.newSubject.schoolChange.subscribe(params => {
                if (params != '') {
                    if (this.route.url.includes('list-Settings')) {
                        this.init(params);
                    }
                }
                else {
                    this.init(this.auth.getSessionData('school_id'));
                }
            });
        }
        else {
        }
        this.webhost = this.confi.getimgUrl();
        config.backdrop = 'static';
        config.keyboard = false;
        this.roleid = this.auth.getRoleId();
        this.auth.setSessionData('resourceAccess', false);
        this.auth.setSessionData('browseAll', false);
        this.auth.removeSessionData('classData');
        this.auth.removeSessionData('readonly_data');
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('readonly_startdate');
        this.auth.removeSessionData('backOption');
        this.auth.setSessionData('contentType', '');
        this.settingsform = this.formBuilder.group({
            name: [''],
            description: [''],
            value: ['', Validators.required],
            id: ''
        });
    }
    ngOnInit() {
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
    }
    emittedValue(event) {
        console.log(event, 'emiitedValue');
        if (event.emitType == 'edit') {
            this.modalRef = this.modalService.open(this.content);
            this.settingsform.controls.name.patchValue(event.emitData.name);
            this.settingsform.controls.description.patchValue(event.emitData.description);
            if (event.emitData.name == 'file_size_restriction') {
                const split = event.emitData.value.split(' ');
                this.settingsform.controls.value.patchValue(parseInt(split[0]));
            }
            else if (event.emitData.name == 'date_format') {
                this.dateFormatList.forEach((item) => {
                    if (item.date_format == event.emitData.value) {
                        this.settingsform.controls.value.patchValue(item.date_id);
                    }
                });
            }
            else if (event.emitData.name == 'timezone') {
                this.timeZoneList.forEach((item) => {
                    if (item.time_zone == event.emitData.value) {
                        console.log(item.id, 'item.id');
                        this.settingsform.controls.value.patchValue(item.id);
                    }
                });
            }
            else if (event.emitData.name == 'zoom_user_email') {
                this.settingsform.controls.value.patchValue('');
                this.userEmailList = [];
                event.emitData.value.forEach((item) => {
                    this.userEmailList.push({ value: item });
                });
                console.log(this.userEmailList, 'this.userEmailList before');
            }
            else if (event.emitData.name == 'student_zoom_view' || event.emitData.name == 'teacher_zoom_view') {
                const val = event.data.value == 'In-App' ? '0' : event.data.value == 'New Tab' ? '1' : '2';
                this.settingsform.controls.value.patchValue(val);
            }
            else if (event.emitData.name == 'upgrade_date') {
                if (event.emitData.value != '') {
                    console.log(event.emitData.value, 'event.data.value');
                    const split = event.emitData.value.split('-');
                    const date = new Date(parseInt(split[2]), parseInt(split[0]) - 1, parseInt(split[1]));
                    console.log(date, 'date');
                    const dobObject = { isRange: false, singleDate: { jsDate: date, formatted: 'mm/dd/yyyy' }, dateRange: null };
                    console.log(dobObject, 'dobObject');
                    this.settingsform.controls.value.patchValue(dobObject);
                }
                else {
                    this.settingsform.controls.value.patchValue('');
                }
            }
            else {
                this.settingsform.controls.value.patchValue(event.emitData.value);
            }
            this.settingsform.controls.id.patchValue(event.emitData.id);
            this.modalRef.result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }
    init(id) {
        this.schoolid = id;
        this.settingList();
    }
    getDismissReason(reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    onSave() {
        this.modalRef.close();
    }
    close() {
        this.modalRef.close();
        this.schoolId = null;
        this.fileUploader = '';
        this.filetype = '';
    }
    getDateFormat() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.dateFormat(data).subscribe((successData) => {
            this.dateFormatSuccess(successData);
        }, (error) => {
            this.listFailure(error);
        });
    }
    dateFormatSuccess(successData) {
        if (successData.IsSuccess) {
            this.dateFormatList = successData.ResponseObject;
        }
    }
    getTimeZone() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.timeZone(data).subscribe((successData) => {
            this.timeZoneSuccess(successData);
        }, (error) => {
            this.listFailure(error);
        });
    }
    timeZoneSuccess(successData) {
        if (successData.IsSuccess) {
            this.timeZoneList = successData.ResponseObject;
        }
    }
    settingList() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.schoolid
        };
        this.common.settingsDetails(data).subscribe((successData) => {
            this.listSuccess(successData);
        }, (error) => {
            this.listFailure(error);
        });
    }
    listSuccess(successData) {
        if (successData.IsSuccess) {
            this.listData = successData.ResponseObject;
            this.auth.setSessionData('settingList', JSON.stringify(this.listData));
            this.listData.forEach((item) => {
                if (item.name == 'file_size_restriction') {
                    item.value = item.value.toString() + ' MB';
                }
                else if (item.name == 'answer_key_upload' || item.name == 'allow_autograde_settings' || item.name == 'allow_autoassign_student_for_class') {
                    item.value = item.value == '1' ? 'Active' : 'Suspended';
                }
                else if (item.name == 'date_format') {
                    this.dateFormatList.forEach((data) => {
                        if (item.value == data.date_id) {
                            item.value = data.date_format;
                        }
                    });
                }
                else if (item.name == 'timezone') {
                    this.timeZoneList.forEach((data) => {
                        if (item.value == data.id) {
                            item.value = data.time_zone;
                        }
                    });
                }
                else if (item.name == 'zoom_user_email') {
                }
                else if (item.name == 'student_zoom_view' || item.name == 'teacher_zoom_view') {
                    item.value = item.value == '0' ? 'In-App' : item.value == '1' ? 'New Tab' : 'Both In-App and New Tab';
                }
                else if (item.name == 'upgrade_date') {
                    if (item.value != '') {
                        item.value = this.datePipe.transform(item.value, 'mm/dd/yyyy');
                    }
                }
            });
        }
    }
    listFailure(error) {
        console.log(error, 'error');
    }
    editsettings() {
        let emailCheck = true;
        let settingName = this.settingsform.controls.name.value;
        if (settingName == 'zoom_user_email') {
            this.userEmailList.forEach((item) => {
                if (item.value == '') {
                    emailCheck = false;
                }
            });
        }
        if ((this.settingsform.controls.value.value != '' || settingName == 'zoom_user_email') && emailCheck) {
            let value = this.settingsform.controls.value.value;
            if (settingName == 'answer_key_upload' || settingName == 'allow_autoassign_student_for_class' || settingName == 'allow_autograde_settings') {
                value = value == 'Active' ? '1' : '0';
            }
            else if (settingName == 'zoom_user_email') {
                value = [];
                this.userEmailList.forEach((item) => {
                    value.push(item.value);
                });
                // value = this.userEmailList;
            }
            else if (settingName == 'upgrade_date') {
                value = this.datePipe.transform(this.settingsform.controls.value.value.singleDate.formatted, 'yyyy-MM-dd');
            }
            const data = {
                platform: 'web',
                type: 'list',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                description: this.settingsform.controls.description.value,
                value,
                id: this.settingsform.controls.id.value,
            };
            this.common.editsettings(data).subscribe((successData) => {
                this.editSuccess(successData);
            }, (error) => {
                this.editFailure(error);
            });
        }
        else {
            this.toastr.error('Kindly fill Required Fields');
        }
    }
    editSuccess(successData) {
        if (successData.IsSuccess) {
            if (this.settingsform.controls.name.value == 'date_format') {
                const index = this.dateFormatList.findIndex((item) => {
                    return item.date_id === this.settingsform.controls.value.value;
                });
                this.newSubject.changeDateFormat(this.dateFormatList[index].date_format);
            }
            else if (this.settingsform.controls.name.value == 'timezone') {
                this.timeZoneList.forEach((items) => {
                    if (this.settingsform.controls.value.value == items.id) {
                        let split = items.time_zone.split('(');
                        this.newSubject.changeTimeZone(split[0]);
                    }
                });
            }
            this.close();
            this.toastr.success(successData.ResponseObject);
            this.settingList();
        }
    }
    editFailure(error) {
        console.log(error, 'error');
    }
    patchEmailVal(event, index) {
        this.userEmailList[index].value = event.target.value;
    }
    deleteEmail(index) {
        this.userEmailList.splice(index, 1);
    }
    addEmail() {
        this.userEmailList.push({ value: '' });
    }
    datePattern(event) {
        this.validationService.dateValidation(event);
    }
    onDateChanged(event) {
    }
    static { this.ɵfac = function ListSettingsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListSettingsComponent)(i0.ɵɵdirectiveInject(i1.NgbModalConfig), i0.ɵɵdirectiveInject(i2.ConfigurationService), i0.ɵɵdirectiveInject(i1.NgbModal), i0.ɵɵdirectiveInject(i3.DatePipe), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i5.CommonDataService), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i3.TitleCasePipe), i0.ɵɵdirectiveInject(i7.ValidationService), i0.ɵɵdirectiveInject(i8.ToastrService), i0.ɵɵdirectiveInject(i9.CommonService), i0.ɵɵdirectiveInject(i10.FormBuilder), i0.ɵɵdirectiveInject(i11.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListSettingsComponent, selectors: [["app-list-settings"]], viewQuery: function ListSettingsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
        } }, decls: 4, vars: 2, consts: [["content", ""], ["dp", "angular-mydatepicker"], ["class", "container-fluid", 4, "ngIf"], [4, "ngIf"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-lg", "mt-1", 2, "color", "#7F3486", "cursor", "pointer", "float", "right", 3, "click"], [1, "modal-body"], [1, "container-fluid"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "row"], [1, "col-sm-12"], [1, "card-body", "pt-2"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-4", "col-md-4"], [1, "col-xl-8", "col-md-7"], ["formControlName", "name", "id", "validationCustom0", "type", "text", "placeholder", "First Name", "required", "", "readonly", "", 1, "form-control"], ["for", "validationCustom1", 1, "col-xl-4", "col-md-4"], ["id", "validationCustom1", "formControlName", "description", "type", "text", "placeholder", "Description", "required", "", 1, "form-control"], [1, "form-group", "row", "mb-0"], [1, "col-xl-4", "col-md-4"], ["class", "input-group col-md-12 px-0", 4, "ngIf"], ["class", "form-control", "formControlName", "value", "type", "text", "placeholder", "Value", "required", "", 4, "ngIf"], ["class", "form-control", "formControlName", "value", 4, "ngIf"], ["class", "col-12 px-0", 4, "ngIf"], ["bindLabel", "time_zone", "bindValue", "id", "formControlName", "value", "placeholder", "Select Zone", "typeToSearchText", "", 3, "items", 4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "input-group", "col-md-12", "px-0"], ["angular-mydatepicker", "", "formControlName", "value", "name", "value", "placeholder", "mm/dd/yyyy", 1, "form-control", 3, "dateChanged", "options"], [1, "input-group-append"], [1, "fa", "fa-calendar-o"], ["formControlName", "value", "type", "text", "placeholder", "Value", "required", "", 1, "form-control"], ["formControlName", "value", 1, "form-control"], ["value", "Active"], ["value", "Inactive"], ["value", "0"], ["value", "1"], ["value", "2"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-12", "px-0"], ["class", "col-12 px-0 d-flex mb-2", 4, "ngFor", "ngForOf"], [1, "col-12", "px-0", "d-flex", "mb-2"], ["placeholder", "Value", "type", "text", 1, "form-control", "col-10", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["class", "col-2 px-0 d-flex justify-content-end", 3, "click", 4, "ngIf"], [1, "col-2", "px-0", "d-flex", "justify-content-end", 3, "click"], [1, "fa", "fa-trash", "icon-border", 2, "font-size", "1.5rem"], [1, "fa", "fa-plus", "icon-border", 2, "font-size", "1.5rem"], [1, "color-red"], ["bindLabel", "time_zone", "bindValue", "id", "formControlName", "value", "placeholder", "Select Zone", "typeToSearchText", "", 3, "items"], [1, "error"], [1, "card"], [1, "card-header"], [1, "card-body"], ["id", "batchDelete", 1, ""], [1, "preliminary-table"], [3, "clickValue", "TableType", "TableArray"]], template: function ListSettingsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListSettingsComponent_ng_template_0_Template, 39, 10, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, ListSettingsComponent_div_2_Template, 7, 2, "div", 2)(3, ListSettingsComponent_div_3_Template, 2, 0, "div", 3);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length == 0);
        } }, dependencies: [i3.NgForOf, i3.NgIf, i10.ɵNgNoValidate, i10.NgSelectOption, i10.ɵNgSelectMultipleOption, i10.DefaultValueAccessor, i10.SelectControlValueAccessor, i10.NgControlStatus, i10.NgControlStatusGroup, i10.RequiredValidator, i10.FormGroupDirective, i10.FormControlName, i12.NgSelectComponent, i10.NgModel, i13.EmptyschoolComponent, i14.AngularMyDatePickerDirective, i15.TableComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListSettingsComponent, [{
        type: Component,
        args: [{ selector: 'app-list-settings', template: "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Settings details</h4>\n        <i class=\"fa fa-close fa-lg mt-1\" aria-hidden=\"true\" style=\"color:#7F3486; cursor: pointer; float: right;\" (click)=\"close()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n                <form [formGroup]=\"settingsform\" class=\"needs-validation user-add\">\n                    <div class=\"row\">\n\n                <div class=\"col-sm-12\">\n                    <div class=\"card-body pt-2\">\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom0\" class=\"col-xl-4 col-md-4\">\n                                 Name</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <input class=\"form-control\" formControlName=\"name\" id=\"validationCustom0\"\n                                       type=\"text\" placeholder=\"First Name\" required readonly>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"validationCustom1\" class=\"col-xl-4 col-md-4\">\n                                Description</label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <textarea class=\"form-control\" id=\"validationCustom1\" formControlName=\"description\"\n                                          type=\"text\" placeholder=\"Description\" required></textarea>\n                            </div>\n                        </div>\n                        <div class=\"form-group row mb-0\">\n                            <label class=\"col-xl-4 col-md-4\">\n                                Value<span>*</span></label>\n                            <div class=\"col-xl-8 col-md-7\">\n                                <div *ngIf=\"settingsform.controls.name.value == 'upgrade_date'\" class=\"input-group col-md-12 px-0\">\n                                    <!-- input box -->\n                                    <input #dp=\"angular-mydatepicker\" (dateChanged)=\"onDateChanged($event)\" [options]=\"myDpOptions\"\n                                           angular-mydatepicker class=\"form-control\" formControlName=\"value\" name=\"value\"\n                                           placeholder=\"mm/dd/yyyy\"/>\n                                    <div class=\"input-group-append\">\n                                        <button (click)=\"dp.toggleCalendar()\" class=\"btn btn-primary\" type=\"button\">\n                                            <i class=\"fa fa-calendar-o\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                                <input *ngIf=\"['answer_key_upload', 'allow_autoassign_student_for_class', 'upgrade_date' ,'allow_autograde_settings' ,'date_format' ,'timezone', 'zoom_user_email', 'teacher_zoom_view', 'student_zoom_view'].indexOf(settingsform.controls.name.value) == -1\" class=\"form-control\" formControlName=\"value\"\n                                       type=\"text\" placeholder=\"Value\" required>\n                                <select *ngIf=\"settingsform.controls.name.value == 'answer_key_upload' || settingsform.controls.name.value == 'allow_autoassign_student_for_class' || settingsform.controls.name.value == 'allow_autograde_settings'\" class=\"form-control\" formControlName=\"value\">\n                                    <option value=\"Active\">Active</option>\n                                    <option value=\"Inactive\">Suspended</option>\n                                </select>\n                                <select *ngIf=\"settingsform.controls.name.value == 'student_zoom_view' || settingsform.controls.name.value == 'teacher_zoom_view'\" class=\"form-control\" formControlName=\"value\">\n                                    <option value=\"0\">In-App</option>\n                                    <option value=\"1\">New Tab</option>\n                                    <option value=\"2\">Both</option>\n                                </select>\n                                <select *ngIf=\"settingsform.controls.name.value == 'date_format'\" class=\"form-control\" formControlName=\"value\">\n                                    <option *ngFor=\"let item of dateFormatList\" value=\"{{item.date_id}}\">{{item.example}} &nbsp;( Eg:&nbsp;{{item.display_name}} )</option>\n                                </select>\n                                <div *ngIf=\"settingsform.controls.name.value == 'zoom_user_email'\" class=\"col-12 px-0\">\n                                    <div *ngFor=\"let val of userEmailList; let i = index\" class=\"col-12 px-0 d-flex mb-2\">\n                                        <input  [(ngModel)]=\"val.value\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control col-10\" placeholder=\"Value\" type=\"text\">\n                                        <div (click)=\"deleteEmail(i)\" *ngIf=\"(i + 1 !== userEmailList.length || userEmailList.length == 10) && userEmailList.length > 1\" class=\"col-2 px-0 d-flex justify-content-end\">\n                                            <i class=\"fa fa-trash icon-border\" style=\"font-size: 1.5rem\"></i>\n                                        </div>\n                                        <div (click)=\"addEmail()\" *ngIf=\"i + 1 === userEmailList.length && userEmailList.length < 10\" class=\"col-2 px-0 d-flex justify-content-end\">\n                                            <i class=\"fa fa-plus icon-border\" style=\"font-size: 1.5rem\"></i>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"userEmailList.length > 10\" class=\"col-12 px-0\">\n                                        <small class=\"color-red\">Maximum count reached</small>\n                                    </div>\n                                </div>\n\n<!--                                <select *ngIf=\"settingsform.controls.name.value == 'timezone'\" class=\"form-control\" formControlName=\"value\">-->\n<!--                                    <option *ngFor=\"let item of timeZoneList\" value=\"{{item.id}}\">{{item.time_zone}}</option>-->\n<!--                                </select>-->\n                                <ng-select *ngIf=\"settingsform.controls.name.value == 'timezone'\"\n                                           [items]=\"timeZoneList\"\n                                            bindLabel=\"time_zone\"\n                                            bindValue=\"id\"\n                                            formControlName=\"value\"\n                                            placeholder=\"Select Zone\"\n                                            typeToSearchText=\"\"\n                                >\n                                </ng-select>\n                                <em *ngIf=\"!settingsform.get('value').valid && (settingsform.get('value').dirty || settingsform.get('value').touched) && settingsform.controls.name.value != 'zoom_user_email'\" class=\"error\">Value is required</em>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n             </div>\n           </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"close()\">Cancel</button>\n        <button type=\"button\" (click)=\"editsettings()\" class=\"btn btn-primary\">Save</button>\n    </div>\n</ng-template>\n\n<div *ngIf=\"schoolStatus.length != 0\" class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n        </div>\n        <div class=\"card-body\">\n            <div class=\"\" id=\"batchDelete\">\n                <div class=\"preliminary-table\">\n                    <app-table [TableType]=\"'General'\" [TableArray]=\"listData\" (clickValue)=\"emittedValue($event)\"></app-table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"schoolStatus.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n" }]
    }], () => [{ type: i1.NgbModalConfig }, { type: i2.ConfigurationService }, { type: i1.NgbModal }, { type: i3.DatePipe }, { type: i4.AuthService }, { type: i5.CommonDataService }, { type: i6.Router }, { type: i3.TitleCasePipe }, { type: i7.ValidationService }, { type: i8.ToastrService }, { type: i9.CommonService }, { type: i10.FormBuilder }, { type: i11.NewsubjectService }], { content: [{
            type: ViewChild,
            args: ['content']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListSettingsComponent, { className: "ListSettingsComponent" }); })();
//# sourceMappingURL=list-settings.component.js.map