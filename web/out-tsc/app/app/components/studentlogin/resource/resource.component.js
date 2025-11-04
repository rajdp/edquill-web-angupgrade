import { Component, ViewChild } from '@angular/core';
import { SessionConstants } from '../../../shared/data/sessionConstants';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/student.service";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "@angular/platform-browser";
import * as i5 from "@angular/router";
import * as i6 from "ngx-toastr";
import * as i7 from "../../../shared/service/common.service";
import * as i8 from "../../../shared/service/newsubject.service";
import * as i9 from "@ng-bootstrap/ng-bootstrap";
import * as i10 from "../../../environment.service";
import * as i11 from "@angular/common";
import * as i12 from "@angular/forms";
import * as i13 from "../../auth/annotation/annotation.component";
import * as i14 from "../../../shared/pipes/sanitizer/SanitizeHtmlPipe.pipe";
const _c0 = ["content"];
const _c1 = a0 => ({ "height": a0 });
function ResourceComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div")(2, "div", 8)(3, "input", 9);
    i0.ɵɵlistener("input", function ResourceComponent_div_1_Template_input_input_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateFilter(ctx_r1.searchKey)); });
    i0.ɵɵtwoWayListener("ngModelChange", function ResourceComponent_div_1_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.searchKey, $event) || (ctx_r1.searchKey = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 10)(5, "button", 11);
    i0.ɵɵelement(6, "i", 12);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.mobileView ? "4" : "3", " btn-popup pull-right");
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.searchKey);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c1, ctx_r1.env.deviceType() ? "34px" : "40px"));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("btn btn-primary  ", ctx_r1.env.deviceType() ? "py-0 border-radius-2" : "", "");
} }
function ResourceComponent_div_2_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function ResourceComponent_div_2_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.otherlink()); });
    i0.ɵɵtext(1, "Resources");
    i0.ɵɵelementEnd();
} }
function ResourceComponent_div_2_a_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 19);
    i0.ɵɵelement(1, "i", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("download", ctx_r1.downloadTemplateName)("href", ctx_r1.pdfTemplate, i0.ɵɵsanitizeUrl);
} }
function ResourceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "h4");
    i0.ɵɵtext(2, "Resource Name: ");
    i0.ɵɵelementStart(3, "span", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtemplate(6, ResourceComponent_div_2_button_6_Template, 2, 0, "button", 15)(7, ResourceComponent_div_2_a_7_Template, 2, 2, "a", 16);
    i0.ɵɵelementStart(8, "button", 17);
    i0.ɵɵlistener("click", function ResourceComponent_div_2_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.pageType = 1); });
    i0.ɵɵtext(9, "Back");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.contentName);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (ctx_r1.linkdata == null ? null : ctx_r1.linkdata.length) != "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.contentResponse == null ? null : ctx_r1.contentResponse.download) != "0");
} }
function ResourceComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "button", 23);
    i0.ɵɵtext(3, "No Resource Available!");
    i0.ɵɵelementEnd()()();
} }
function ResourceComponent_section_4_div_14_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 39);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, list_r6.end_date, "MM/dd/yyyy"));
} }
function ResourceComponent_section_4_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵlistener("click", function ResourceComponent_section_4_div_14_Template_div_click_0_listener() { const list_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.viewResource(list_r6)); });
    i0.ɵɵelementStart(1, "div", 35)(2, "h5", 36)(3, "span", 37);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "p", 38)(6, "span", 39);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p", 38)(9, "span", 39)(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "p", 40);
    i0.ɵɵtemplate(13, ResourceComponent_section_4_div_14_span_13_Template, 3, 4, "span", 41);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const list_r6 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(list_r6.content_name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(list_r6.subject_name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(list_r6.class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r6.end_date != "0000-00-00");
} }
function ResourceComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 24)(1, "div", 25)(2, "div", 26)(3, "div", 27)(4, "div", 28)(5, "h5", 29);
    i0.ɵɵtext(6, "Resource");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h5", 30);
    i0.ɵɵtext(8, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h5", 30);
    i0.ɵɵtext(10, "Class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "h5", 31);
    i0.ɵɵtext(12, "End Date");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(13, "div", 32);
    i0.ɵɵtemplate(14, ResourceComponent_section_4_div_14_Template, 14, 4, "div", 33);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngForOf", ctx_r1.resourceList);
} }
function ResourceComponent_div_5_app_annotation_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-annotation", 45);
    i0.ɵɵlistener("annotate", function ResourceComponent_div_5_app_annotation_1_Template_app_annotation_annotate_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.getAreaInfo($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("getAnnotate", ctx_r1.areaInfo)("pdfPath", ctx_r1.pdfTemplate)("toolAlignCenter", true)("userType", "student");
} }
function ResourceComponent_div_5_div_2_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 55);
} }
function ResourceComponent_div_5_div_2_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 56);
} }
function ResourceComponent_div_5_div_2_img_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 57);
} }
function ResourceComponent_div_5_div_2_img_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 58);
} }
function ResourceComponent_div_5_div_2_img_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 59);
} }
function ResourceComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "a", 47)(2, "div", 48)(3, "div", 49)(4, "a", 47);
    i0.ɵɵtemplate(5, ResourceComponent_div_5_div_2_img_5_Template, 1, 0, "img", 50)(6, ResourceComponent_div_5_div_2_img_6_Template, 1, 0, "img", 51)(7, ResourceComponent_div_5_div_2_img_7_Template, 1, 0, "img", 52)(8, ResourceComponent_div_5_div_2_img_8_Template, 1, 0, "img", 53)(9, ResourceComponent_div_5_div_2_img_9_Template, 1, 0, "img", 54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "a", 47);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", ctx_r1.getpdf[0].link)("href", ctx_r1.getpdf[0].link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("title", ctx_r1.getpdf[0].link)("href", ctx_r1.getpdf[0].link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.getpdf[0].type == "document");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.getpdf[0].type == "audio");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.getpdf[0].type == "video");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.getpdf[0].type == "ppt");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.getpdf[0].type == "Others");
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", ctx_r1.getpdf[0].link)("href", ctx_r1.getpdf[0].link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.getpdf[0].name);
} }
function ResourceComponent_div_5_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62)(1, "div", 63)(2, "div", 64)(3, "h4", 65);
    i0.ɵɵtext(4, "Description:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 66);
    i0.ɵɵelement(6, "span", 67);
    i0.ɵɵpipe(7, "sanitizeHtml");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(7, 1, ctx_r1.cfsData), i0.ɵɵsanitizeHtml);
} }
function ResourceComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵtemplate(1, ResourceComponent_div_5_div_3_div_1_Template, 8, 3, "div", 61);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.cfsData != "");
} }
function ResourceComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ResourceComponent_div_5_app_annotation_1_Template, 1, 4, "app-annotation", 42)(2, ResourceComponent_div_5_div_2_Template, 12, 12, "div", 43)(3, ResourceComponent_div_5_div_3_Template, 2, 1, "div", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.functionCalled && !ctx_r1.cfs && !ctx_r1.showLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.functionCalled && !ctx_r1.cfs && ctx_r1.showLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.functionCalled && ctx_r1.cfs);
} }
function ResourceComponent_ng_template_6_div_5_hr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function ResourceComponent_ng_template_6_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74)(1, "div", 25)(2, "a", 75)(3, "span", 76);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, ResourceComponent_ng_template_6_div_5_hr_5_Template, 1, 0, "hr", 6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const last_r10 = ctx.last;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("href", item_r9.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", item_r9.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r9.name != "" ? item_r9.name : item_r9.link);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r10);
} }
function ResourceComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 68)(1, "h4", 69);
    i0.ɵɵtext(2, "Resources");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 70)(4, "div", 1);
    i0.ɵɵtemplate(5, ResourceComponent_ng_template_6_div_5_Template, 6, 4, "div", 71);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 72)(7, "button", 73);
    i0.ɵɵlistener("click", function ResourceComponent_ng_template_6_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵtext(8, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.linkdata);
} }
export class ResourceComponent {
    constructor(auth, student, confi, sanitizer, route, toastr, common, newSubject, modalService, env, router) {
        this.auth = auth;
        this.student = student;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.route = route;
        this.toastr = toastr;
        this.common = common;
        this.newSubject = newSubject;
        this.modalService = modalService;
        this.env = env;
        this.router = router;
        this.pageType = 1;
        this.cfs = false;
        this.resourceList = [];
        this.resourceListAlter = [];
        this.areaInfo = [];
        this.functionCalled = false;
        this.searchKey = '';
        this.linkdata = [];
        this.contentResponse = [];
        this.downloadTemplateName = '';
        this.showLink = false;
        this.getpdf = [];
        this.mobileView = false;
        this.id = '';
        this.webhost = this.confi.getimgUrl();
        this.mobileView = this.env.mobileView;
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.route.url.includes('resource')) {
                    this.init(params);
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
        setTimeout(() => {
            this.router.params.forEach((params) => {
                this.id = params.id ?? '';
                if (this.id != '') {
                    this.resourceList.forEach((items) => {
                        if (items.content_id == this.id) {
                            this.viewResource(items);
                        }
                    });
                }
            });
        }, 1000);
    }
    ngOnInit() {
        // this.pageType = 1;
        // this.resource(1);
    }
    init(id) {
        this.pageType = 1;
        this.getSearch_Filter();
        this.resource(1);
    }
    otherlink() {
        this.modalRef = this.modalService.open(this.link);
    }
    resource(id) {
        this.filterType = id;
        let data;
        data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
            type: id,
        };
        this.student.resourceList(data).subscribe((successData) => {
            this.resourceListSuccess(successData);
        }, (error) => {
            console.log(error, 'error');
        });
    }
    resourceListSuccess(successData) {
        if (successData.IsSuccess) {
            this.resourceList = successData.ResponseObject;
            console.log(this.resourceList, 'resource');
            this.resourceListAlter = successData.ResponseObject;
            this.assessmentSearch();
        }
    }
    viewResource(item) {
        this.contentName = item.content_name;
        console.log(item, 'items');
        if (item.content_format == '3') {
            this.cfs = true;
            this.cfsData = item.file_text;
            this.getData = item;
            this.linkdata = [];
            this.contentDetails();
        }
        else {
            this.cfs = false;
            this.getData = item;
            this.areaInfo = item.annotation;
            const path = this.common.convertBase64(item.file_path);
            console.log(path, 'path');
            if (path[0].original_image_url) {
                this.showLink = false;
            }
            else {
                this.showLink = true;
                this.getpdf = path;
            }
            this.contentDetails();
            this.linkdata = path[0].links ? path[0].links : [];
            console.log(this.linkdata, 'linkData');
            this.pdfTemplate = this.webhost + '/' + path[0].original_image_url;
        }
        this.functionCalled = true;
        this.pageType = 2;
    }
    saveAnnotation() {
        const data = {
            platform: 'web',
            student_id: this.auth.getUserId(),
            annotation: this.areaInfo,
            content_id: this.getData.content_id,
            student_content_id: this.getData.student_content_id,
            class_id: this.getData.class_id,
        };
        this.student.saveAnnotation(data).subscribe((successData) => {
            console.log(successData);
        }, (error) => {
            console.log(error);
        });
    }
    assessmentSearch() {
        if (this.searchKey != '') {
            this.updateFilter(this.searchKey);
        }
    }
    updateFilter(event) {
        const val = event.toLowerCase();
        const temp = this.resourceListAlter.filter(function (d) {
            return d.content_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.resourceList = temp;
        this.setSearch_Filter();
    }
    getAreaInfo(event) {
        console.log(event, 'areainfo');
        this.saveAnnotation();
    }
    setSearch_Filter() {
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.studentResourceSearch));
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    items.resourceName = this.searchKey;
                }
                else {
                    const searchData = {
                        resourceName: this.searchKey,
                        school_id: this.auth.getSessionData('school_id')
                    };
                    data.push(searchData);
                }
            });
            data = data.filter((test, index, array) => index === array.findIndex((findTest) => findTest.school_id === test.school_id));
            this.auth.setSessionData(SessionConstants.studentResourceSearch, JSON.stringify(data));
        }
    }
    getSearch_Filter() {
        const data = JSON.parse(this.auth.getSessionData(SessionConstants.studentResourceSearch));
        data.every((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                this.searchKey = items.resourceName;
                return false;
            }
            else {
                this.searchKey = '';
            }
            return true;
        });
    }
    onSave() {
        this.modalRef.close();
    }
    contentDetails() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.getData.content_id,
            content_format: this.getData.content_format,
            class_id: this.getData.class_id,
            student_id: this.auth.getUserId(),
            student_content_id: this.getData?.student_content_id ? this.getData?.student_content_id : ''
        };
        this.student.questionList(data).subscribe((successData) => {
            this.questionListSuccess(successData);
        }, (error) => {
            console.error(error, 'contentDetails');
        });
    }
    questionListSuccess(successData) {
        if (successData.IsSuccess) {
            this.contentResponse = successData.ResponseObject;
            this.linkdata = successData.ResponseObject.links ? successData.ResponseObject.links : [];
            this.downloadTemplateName = this.contentResponse['name'] + '.pdf';
            console.log(this.linkdata, 'linkDafra');
        }
    }
    static { this.ɵfac = function ResourceComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ResourceComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.StudentService), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.DomSanitizer), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i6.ToastrService), i0.ɵɵdirectiveInject(i7.CommonService), i0.ɵɵdirectiveInject(i8.NewsubjectService), i0.ɵɵdirectiveInject(i9.NgbModal), i0.ɵɵdirectiveInject(i10.EnvironmentService), i0.ɵɵdirectiveInject(i5.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ResourceComponent, selectors: [["app-resource"]], viewQuery: function ResourceComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.link = _t.first);
        } }, decls: 8, vars: 5, consts: [["content", ""], [1, "container-fluid"], ["class", "row justify-content-end", 4, "ngIf"], ["class", "row justify-content-between px-3", 4, "ngIf"], ["class", "row d-flex justify-content-center list-card mt-5", 4, "ngIf"], ["class", "row list-card mt-2 d-flex", 4, "ngIf"], [4, "ngIf"], [1, "row", "justify-content-end"], [1, "input-group"], ["placeholder", "Search by Resource name", "size", "50", "type", "text", 1, "form-control", 3, "input", "ngModelChange", "ngModel", "ngStyle"], [1, "input-group-append"], ["type", "submit"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "row", "justify-content-between", "px-3"], [1, "color-primary", "font-weight-bold"], ["class", "btn btn-primary pull-right mr-2", 3, "click", 4, "ngIf"], [3, "download", "href", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-primary", "pull-right", "mr-2", 3, "click"], [1, "btn", "btn-primary", "pull-right", "mr-2", 3, "click"], [3, "download", "href"], ["title", "Download PDF", "aria-hidden", "true", 1, "fa", "fa-download", "color-primary", "icon"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-5"], [1, "col-4"], [1, "nodataList"], [1, "row", "list-card", "mt-2", "d-flex"], [1, "col-md-12"], [1, "card", "col-md-12", "px-0"], [1, "col-md-12", "card-header", "px-0"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "col-md-4", "d-flex", "mb-0"], [1, "col-md-3", "d-flex", "mb-0"], [1, "col-md-2", "d-flex", "mb-0"], [1, "col-md-12", "px-0"], ["class", "card class-card class-hover px-0 mb-1-5", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "class-card", "class-hover", "px-0", "mb-1-5", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "py-2-5", "cursor"], [1, "col-md-4", "mb-0"], [1, "t-name", "font-weight-bold"], [1, "col-md-3", "mb-0"], [1, "font-weight-bold"], [1, "col-md-2", "mb-0"], ["class", "font-weight-bold", 4, "ngIf"], [3, "getAnnotate", "pdfPath", "toolAlignCenter", "userType", "annotate", 4, "ngIf"], ["class", "col-md-12 px-0 mt-4", 4, "ngIf"], ["class", "col-12 mt-2 p-2", 4, "ngIf"], [3, "annotate", "getAnnotate", "pdfPath", "toolAlignCenter", "userType"], [1, "col-md-12", "px-0", "mt-4"], ["target", "_blank", 3, "title", "href"], [1, "col-md-12", "flex-center", "flex-wrap", "link-card", 2, "height", "90vh"], [1, "col-md-12", "d-flex", "justify-content-center"], ["class", "size-120px", "src", "assets/images/icons/doc-icon.png", "alt", "doc", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/audio-icon.png", "alt", "mp3", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/video-icon.png", "alt", "mp4", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/ppt-icon.png", "alt", "ppt", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/others-icon.png", "alt", "others", 4, "ngIf"], ["src", "assets/images/icons/doc-icon.png", "alt", "doc", 1, "size-120px"], ["src", "assets/images/icons/audio-icon.png", "alt", "mp3", 1, "size-120px"], ["src", "assets/images/icons/video-icon.png", "alt", "mp4", 1, "size-120px"], ["src", "assets/images/icons/ppt-icon.png", "alt", "ppt", 1, "size-120px"], ["src", "assets/images/icons/others-icon.png", "alt", "others", 1, "size-120px"], [1, "col-12", "mt-2", "p-2"], ["class", "col-12 mt-3 px-0", 4, "ngIf"], [1, "col-12", "mt-3", "px-0"], [1, "card", 2, "border-bottom", "3px solid #e6baea !important", "border-right", "3px solid #e6baea !important"], [1, "card-body", "py-3", "px-4"], [1, "mb-3", "font-weight-bold"], [1, "ml-2"], [3, "innerHTML"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title", "font-weight-bold"], [1, "modal-body"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "cancel", 3, "click"], [1, "row"], ["target", "_blank", 1, "cursor", 3, "href"], [2, "overflow", "scroll", "overflow-y", "hidden", 3, "title"]], template: function ResourceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵtemplate(1, ResourceComponent_div_1_Template, 7, 10, "div", 2)(2, ResourceComponent_div_2_Template, 10, 3, "div", 3)(3, ResourceComponent_div_3_Template, 4, 0, "div", 4)(4, ResourceComponent_section_4_Template, 15, 1, "section", 5)(5, ResourceComponent_div_5_Template, 4, 3, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, ResourceComponent_ng_template_6_Template, 9, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 2);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.resourceList.length == 0 && ctx.pageType == 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.resourceList.length != 0 && ctx.pageType == 1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pageType == 2);
        } }, dependencies: [i11.NgForOf, i11.NgIf, i11.NgStyle, i12.DefaultValueAccessor, i12.NgControlStatus, i12.NgModel, i13.AnnotationComponent, i11.DatePipe, i14.SanitizeHtmlPipe], styles: [".icon[_ngcontent-%COMP%] {\n    font-size: 24px; border: 1px solid #8F008A; border-radius: 4px; padding: 6px;\n    margin-right: 12px;\n  }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResourceComponent, [{
        type: Component,
        args: [{ selector: 'app-resource', template: "<div class=\"container-fluid\">\n    <div *ngIf=\"pageType == 1\" class=\"row justify-content-end\">\n        <!--        <div class=\"group-btn col-md-9\">-->\n        <!--            <button (click)=\"resource(3)\" class=\"btn btn-outline-primary\" [ngClass]=\"{'active1': filterType == 3}\" type=\"button\">In progress</button>-->\n        <!--            &lt;!&ndash;            <button (click)=\"assessmentList(2, sortType)\" [ngClass]=\"{'active1': filterType == 2}\" class=\"btn btn-outline-primary\" type=\"button\">Upcoming</button>&ndash;&gt;-->\n        <!--            <button (click)=\"resource(4)\" class=\"btn btn-outline-primary\" [ngClass]=\"{'active1': filterType == 4}\" type=\"button\">Completed</button>-->\n        <!--            <button (click)=\"resource(1)\" class=\"btn btn-outline-primary\" [ngClass]=\"{'active1': filterType == 1}\" type=\"button\">All</button>-->\n        <!--        </div>-->\n        <div class=\"col-md-{{mobileView ? '4' : '3'}} btn-popup pull-right\">\n            <div class=\"input-group\">\n                <input (input)=\"updateFilter(searchKey)\" [(ngModel)]=\"searchKey\" class=\"form-control\"\n                    placeholder=\"Search by Resource name\" size=\"50\"\n                    [ngStyle]=\"{'height' : env.deviceType() ? '34px' : '40px'}\" type=\"text\">\n                <div class=\"input-group-append\">\n                    <button class=\"btn btn-primary  {{env.deviceType() ? 'py-0 border-radius-2' : ''}}\" type=\"submit\"><i\n                            aria-hidden=\"true\" class=\"fa fa-search\"></i>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"pageType == 2\" class=\"row justify-content-between px-3\">\n        <h4>Resource Name: <span class=\"color-primary font-weight-bold\">{{contentName}}</span></h4>\n        <div>\n            <button *ngIf=\"linkdata?.length != '0'\" class=\"btn btn-primary pull-right mr-2\"\n                (click)=\"otherlink()\">Resources</button>\n            <!-- <a *ngIf=\"contentResponse?.download != '0'\" [href]=\"pdfTemplate\" [download]=\"downloadTemplateName\"\n                class=\"btn btn-outline-primary pull-right mr-2\">Download Pdf</a> -->\n            <a *ngIf=\"contentResponse?.download != '0'\" [download]=\"downloadTemplateName\" [href]=\"pdfTemplate\">\n                <i class=\"fa fa-download color-primary icon\" title=\"Download PDF\" aria-hidden=\"true\"></i>\n            </a>\n            <button (click)=\"pageType = 1\" class=\"btn btn-outline-primary pull-right mr-2\" type=\"button\">Back</button>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"resourceList.length == 0 && pageType == 1\">\n        <div class=\"col-4\">\n            <button class=\"nodataList\">No Resource Available!</button>\n        </div>\n    </div>\n    <section *ngIf=\"resourceList.length != 0 && pageType == 1\" class=\"row list-card mt-2 d-flex\">\n        <div class=\"col-md-12\">\n            <div class=\"card col-md-12 px-0\">\n                <div class=\"col-md-12 card-header px-0\">\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                        <h5 class=\"col-md-4 d-flex mb-0\">Resource</h5>\n                        <h5 class=\"col-md-3 d-flex mb-0\">Subject</h5>\n                        <h5 class=\"col-md-3 d-flex mb-0\">Class</h5>\n                        <h5 class=\"col-md-2 d-flex mb-0\">End Date</h5>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12 px-0\">\n                <div (click)=\"viewResource(list)\" *ngFor=\"let list of resourceList\"\n                    class=\"card class-card class-hover px-0 mb-1-5\">\n                    <div class=\"d-flex justify-content-between align-items-center py-2-5 cursor\">\n                        <h5 class=\"col-md-4 mb-0\"><span class=\"t-name font-weight-bold\">{{list.content_name}}</span>\n                        </h5>\n                        <p class=\"col-md-3 mb-0\"><span class=\"font-weight-bold\">{{list.subject_name}}</span></p>\n                        <p class=\"col-md-3 mb-0\"><span\n                                class=\"font-weight-bold\"><strong>{{list.class_name}}</strong></span></p>\n                        <p class=\"col-md-2 mb-0\"><span *ngIf=\"list.end_date != '0000-00-00'\"\n                                class=\"font-weight-bold\">{{list.end_date|date:'MM/dd/yyyy'}}</span>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <div *ngIf=\"pageType == 2\">\n        <app-annotation (annotate)=\"getAreaInfo($event)\" *ngIf=\"functionCalled && !cfs && !showLink\"\n            [getAnnotate]=\"areaInfo\" [pdfPath]=\"pdfTemplate\" [toolAlignCenter]=\"true\"\n            [userType]=\"'student'\"></app-annotation>\n        <div class=\"col-md-12 px-0 mt-4\" *ngIf=\"functionCalled && !cfs && showLink\">\n            <a [title]=\"getpdf[0].link\" [href]=\"getpdf[0].link\" target=\"_blank\">\n                <div class=\"col-md-12 flex-center flex-wrap link-card\" style=\"height: 90vh\">\n                    <div class=\"col-md-12 d-flex justify-content-center\">\n                        <a [title]=\"getpdf[0].link\" [href]=\"getpdf[0].link\" target=\"_blank\">\n                            <img *ngIf=\"getpdf[0].type == 'document'\" class=\"size-120px\"\n                                src=\"assets/images/icons/doc-icon.png\" alt=\"doc\">\n                            <img *ngIf=\"getpdf[0].type == 'audio'\" class=\"size-120px\"\n                                src=\"assets/images/icons/audio-icon.png\" alt=\"mp3\">\n                            <img *ngIf=\"getpdf[0].type == 'video'\" class=\"size-120px\"\n                                src=\"assets/images/icons/video-icon.png\" alt=\"mp4\">\n                            <img *ngIf=\"getpdf[0].type == 'ppt'\" class=\"size-120px\"\n                                src=\"assets/images/icons/ppt-icon.png\" alt=\"ppt\">\n                            <img *ngIf=\"getpdf[0].type == 'Others'\" class=\"size-120px\"\n                                src=\"assets/images/icons/others-icon.png\" alt=\"others\">\n                        </a>\n                    </div>\n                    <a [title]=\"getpdf[0].link\" [href]=\"getpdf[0].link\" target=\"_blank\">{{getpdf[0].name}}</a>\n                </div>\n            </a>\n        </div>\n        <div *ngIf=\"functionCalled && cfs\" class=\"col-12 mt-2 p-2\">\n            <div class=\"col-12 mt-3 px-0\" *ngIf=\"cfsData != ''\">\n                <div class=\"card\"\n                    style=\"border-bottom: 3px solid #e6baea !important; border-right: 3px solid #e6baea !important\">\n                    <div class=\"card-body py-3 px-4\">\n                        <h4 class=\"mb-3 font-weight-bold\">Description:</h4>\n                        <div class=\"ml-2\">\n                            <span [innerHTML]=\"cfsData | sanitizeHtml\"></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title font-weight-bold\" id=\"modal-basic-title\">Resources</h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\" *ngFor=\"let item of linkdata; let last = last\">\n                <div class=\"col-md-12\">\n                    <a class=\"cursor\" href=\"{{item.link}}\" target=\"_blank\">\n                        <span style=\"overflow: scroll; overflow-y: hidden\" title=\"{{item.name}}\">{{item.name != '' ?\n                            item.name : item.link}}</span>\n                    </a>\n                    <hr *ngIf=\"!last\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"onSave()\">Cancel</button>\n    </div>\n</ng-template>\n", styles: [".icon {\n    font-size: 24px; border: 1px solid #8F008A; border-radius: 4px; padding: 6px;\n    margin-right: 12px;\n  }"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.StudentService }, { type: i3.ConfigurationService }, { type: i4.DomSanitizer }, { type: i5.Router }, { type: i6.ToastrService }, { type: i7.CommonService }, { type: i8.NewsubjectService }, { type: i9.NgbModal }, { type: i10.EnvironmentService }, { type: i5.ActivatedRoute }], { link: [{
            type: ViewChild,
            args: ['content']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ResourceComponent, { className: "ResourceComponent" }); })();
//# sourceMappingURL=resource.component.js.map