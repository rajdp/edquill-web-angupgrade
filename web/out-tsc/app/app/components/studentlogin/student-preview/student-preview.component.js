import { Component, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/common.service";
import * as i3 from "../../../shared/service/student.service";
import * as i4 from "../../../shared/service/configuration.service";
import * as i5 from "@angular/platform-browser";
import * as i6 from "@ng-bootstrap/ng-bootstrap";
import * as i7 from "@angular/router";
import * as i8 from "../../../shared/service/creator.service";
import * as i9 from "../../../shared/service/nav.service";
import * as i10 from "ngx-toastr";
import * as i11 from "../../../shared/service/newsubject.service";
import * as i12 from "@angular/common";
import * as i13 from "../../auth/annotation/annotation.component";
const _c0 = ["content"];
function StudentPreviewComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function StudentPreviewComponent_div_0_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.otherlink()); });
    i0.ɵɵtext(1, "Resources");
    i0.ɵɵelementEnd();
} }
function StudentPreviewComponent_div_0_a_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 12);
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("download", ctx_r1.downloadTemplateName)("href", ctx_r1.pdfTemplate, i0.ɵɵsanitizeUrl);
} }
function StudentPreviewComponent_div_0_div_11_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 25);
} }
function StudentPreviewComponent_div_0_div_11_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 26);
} }
function StudentPreviewComponent_div_0_div_11_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 27);
} }
function StudentPreviewComponent_div_0_div_11_div_1_img_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 28);
} }
function StudentPreviewComponent_div_0_div_11_div_1_img_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 29);
} }
function StudentPreviewComponent_div_0_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "a", 17)(2, "div", 18)(3, "div", 19);
    i0.ɵɵtemplate(4, StudentPreviewComponent_div_0_div_11_div_1_img_4_Template, 1, 0, "img", 20)(5, StudentPreviewComponent_div_0_div_11_div_1_img_5_Template, 1, 0, "img", 21)(6, StudentPreviewComponent_div_0_div_11_div_1_img_6_Template, 1, 0, "img", 22)(7, StudentPreviewComponent_div_0_div_11_div_1_img_7_Template, 1, 0, "img", 23)(8, StudentPreviewComponent_div_0_div_11_div_1_img_8_Template, 1, 0, "img", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 17);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", ctx_r1.pdfPath[0].link)("href", ctx_r1.pdfPath[0].link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.pdfPath[0].type == "document");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfPath[0].type == "audio");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfPath[0].type == "video");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfPath[0].type == "ppt");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfPath[0].type == "Others");
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", ctx_r1.pdfPath[0].link)("href", ctx_r1.pdfPath[0].link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.pdfPath[0].name);
} }
function StudentPreviewComponent_div_0_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "app-annotation", 30);
    i0.ɵɵlistener("annotate", function StudentPreviewComponent_div_0_div_11_div_2_Template_app_annotation_annotate_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.getAreaInfo($event)); })("deleteAnnotation", function StudentPreviewComponent_div_0_div_11_div_2_Template_app_annotation_deleteAnnotation_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.getDeleteAction($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("getAnnotate", ctx_r1.areaInfo)("userType", ctx_r1.userType)("pdfPath", ctx_r1.pdfTemplate)("toolAlignCenter", true)("toolHide", false);
} }
function StudentPreviewComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, StudentPreviewComponent_div_0_div_11_div_1_Template, 11, 10, "div", 15)(2, StudentPreviewComponent_div_0_div_11_div_2_Template, 2, 5, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isPdfAvailable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isPdfAvailable);
} }
function StudentPreviewComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "div", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("innerHtml", ctx_r1.showcontent, i0.ɵɵsanitizeHtml);
} }
function StudentPreviewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h3")(4, "b", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 4)(7, "button", 6);
    i0.ɵɵlistener("click", function StudentPreviewComponent_div_0_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.backAction()); });
    i0.ɵɵtext(8, "Back");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, StudentPreviewComponent_div_0_button_9_Template, 2, 0, "button", 7)(10, StudentPreviewComponent_div_0_a_10_Template, 2, 2, "a", 8);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, StudentPreviewComponent_div_0_div_11_Template, 3, 2, "div", 9)(12, StudentPreviewComponent_div_0_div_12_Template, 2, 1, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.questionData.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", (ctx_r1.linkdata == null ? null : ctx_r1.linkdata.length) != "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.questionData == null ? null : ctx_r1.questionData.download) != "0");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.questionData == null ? null : ctx_r1.questionData.content_format) == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.questionData == null ? null : ctx_r1.questionData.content_format) == "3" && (ctx_r1.questionData == null ? null : ctx_r1.questionData.content_type) == "1");
} }
function StudentPreviewComponent_ng_template_1_div_5_hr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function StudentPreviewComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 16)(2, "a", 38)(3, "span", 39);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, StudentPreviewComponent_ng_template_1_div_5_hr_5_Template, 1, 0, "hr", 40);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const last_r7 = ctx.last;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("href", item_r6.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("title", item_r6.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r6.name != "" ? item_r6.name : item_r6.link);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r7);
} }
function StudentPreviewComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "h4", 33);
    i0.ɵɵtext(2, "Resources");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 34)(4, "div", 2);
    i0.ɵɵtemplate(5, StudentPreviewComponent_ng_template_1_div_5_Template, 6, 4, "div", 35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 36)(7, "button", 37);
    i0.ɵɵlistener("click", function StudentPreviewComponent_ng_template_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSave()); });
    i0.ɵɵtext(8, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.linkdata);
} }
export class StudentPreviewComponent {
    constructor(auth, common, student, confi, sanitizer, modalService, route, creator, navServices, toastr, newSubject) {
        this.auth = auth;
        this.common = common;
        this.student = student;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.route = route;
        this.creator = creator;
        this.navServices = navServices;
        this.toastr = toastr;
        this.newSubject = newSubject;
        this.areaInfo = [];
        this.totalAns = [];
        this.isPdfAvailable = true;
        this.userType = 'student';
        this.getData = JSON.parse(this.auth.getSessionData('classDetails'));
        this.functionCalled = false;
        this.studentsAnswerList();
        this.delAnnotation = false;
        this.webhost = this.confi.getimgUrl();
    }
    ngOnInit() {
        this.allowSelect = true;
        this.newSubject.allowSchoolChange(this.allowSelect);
    }
    OnDestroy() {
        this.auth.removeSessionData('classDetails');
    }
    getAreaInfo(event) {
        this.areaInfo = event;
        this.saveAnnotationDetails();
    }
    getDeleteAction(event) {
        this.delAnnotation = event;
    }
    backAction() {
        let classid;
        classid = this.auth.getSessionData('class-id');
        this.auth.setSessionData('class-id', classid);
        this.saveAnnotationDetails();
        this.route.navigate(['/studentlogin/class-detail']);
    }
    studentsAnswerList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.getData.content_id,
            content_format: this.getData.content_format,
            class_id: this.auth.getSessionData('class-id'),
            student_id: this.auth.getUserId(),
            student_content_id: this.getData?.student_content_id ? this.getData?.student_content_id : ''
        };
        this.student.questionList(data).subscribe((successData) => {
            this.questionListSuccess(successData);
        }, (error) => {
            this.questionListFailure(error);
        });
    }
    questionListSuccess(successData) {
        if (successData.IsSuccess) {
            //// sidenav closes///
            // this.openmenu = true;
            // this.creator.changeViewList(this.openmenu);
            // this.navServices.collapseSidebar = true;
            //// sidenav closes///
            this.questionData = successData.ResponseObject;
            this.linkdata = this.questionData?.links;
            this.totalAns = [];
            this.areaInfo = [...this.questionData.annotation];
            this.pdfPath = this.common.convertBase64(this.questionData.file_path);
            if (this.pdfPath[0]?.original_image_url != undefined) {
                this.pdfTemplate = this.webhost + '/' + this.pdfPath[0]?.original_image_url;
                this.isPdfAvailable = true;
            }
            else {
                this.isPdfAvailable = false;
            }
            this.downloadTemplateName = this.questionData.name + '.pdf';
            this.showcontent = this.questionData?.file_text;
            this.getStudentDetails();
        }
    }
    questionListFailure(error) {
        console.log(error, 'error');
    }
    onSave() {
        this.modalRef.close();
    }
    getStudentDetails() {
        var decodedStringBtoA = this.auth.getAccessToken() + '|' + this.auth.getUserId() + '|' + this.getData.content_id + '|' + this.auth.getSessionData('class-id');
        var encodedStringBtoA = btoa(decodedStringBtoA);
        var encodedStringBtoA1 = btoa(encodedStringBtoA);
        const data = {
            platform: 'web',
            authorization_key: encodedStringBtoA1,
            student_content_id: this.getData.student_content_id ? this.getData.student_content_id : ''
        };
        this.creator.getStudDetail(data).subscribe((successData) => {
            this.getStudDetailSuccess(successData);
        }, (error) => {
            this.getStudDetailFailure(error);
        });
    }
    getStudDetailSuccess(successData) {
        if (successData.IsSuccess) {
            this.detailData = successData.ResponseObject;
            this.areaInfo = [...this.detailData.annotation];
            this.functionCalled = true;
        }
    }
    getStudDetailFailure(error) {
        console.log(error, 'error');
    }
    saveAnnotationDetails() {
        let annotationValues = this.areaInfo;
        annotationValues = annotationValues.filter(f => f.isDelete === false);
        const data = {
            platform: 'web',
            student_id: this.auth.getUserId(),
            annotation: annotationValues,
            content_id: this.getData.content_id,
            student_content_id: this.detailData.student_content_id,
            class_id: this.auth.getSessionData('class-id')
        };
        this.creator.saveAnnotation(data).subscribe((successData) => {
            this.saveAnnotationSuccess(successData);
        }, (error) => {
            this.saveAnnotationFailure(error);
        });
    }
    saveAnnotationSuccess(successData) {
        if (successData.IsSuccess) {
        }
    }
    saveAnnotationFailure(error) {
        console.log(error, 'error');
    }
    otherlink() {
        this.modalRef = this.modalService.open(this.link);
    }
    static { this.ɵfac = function StudentPreviewComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentPreviewComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.CommonService), i0.ɵɵdirectiveInject(i3.StudentService), i0.ɵɵdirectiveInject(i4.ConfigurationService), i0.ɵɵdirectiveInject(i5.DomSanitizer), i0.ɵɵdirectiveInject(i6.NgbModal), i0.ɵɵdirectiveInject(i7.Router), i0.ɵɵdirectiveInject(i8.CreatorService), i0.ɵɵdirectiveInject(i9.NavService), i0.ɵɵdirectiveInject(i10.ToastrService), i0.ɵɵdirectiveInject(i11.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentPreviewComponent, selectors: [["app-student-preview"]], viewQuery: function StudentPreviewComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.link = _t.first);
        } }, decls: 3, vars: 1, consts: [["content", ""], ["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-md-6"], [1, "contenttext"], [1, "btn", "btn-outline-primary", "pull-right", 3, "click"], ["class", "btn btn-primary pull-right mr-2", 3, "click", 4, "ngIf"], ["class", "pull-right", 3, "download", "href", 4, "ngIf"], ["class", "row mt-4", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "btn", "btn-primary", "pull-right", "mr-2", 3, "click"], [1, "pull-right", 3, "download", "href"], ["title", "Download PDF", "aria-hidden", "true", 1, "fa", "fa-download", "color-primary", "icon"], [1, "row", "mt-4"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12"], ["target", "_blank", 3, "title", "href"], [1, "col-md-12", "flex-center", "flex-wrap", "link-card", 2, "height", "70vh"], [1, "col-md-12", "d-flex", "justify-content-center"], ["class", "size-120px", "src", "assets/images/icons/doc-icon.png", "alt", "doc", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/audio-icon.png", "alt", "mp3", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/video-icon.png", "alt", "mp4", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/ppt-icon.png", "alt", "ppt", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/others-icon.png", "alt", "others", 4, "ngIf"], ["src", "assets/images/icons/doc-icon.png", "alt", "doc", 1, "size-120px"], ["src", "assets/images/icons/audio-icon.png", "alt", "mp3", 1, "size-120px"], ["src", "assets/images/icons/video-icon.png", "alt", "mp4", 1, "size-120px"], ["src", "assets/images/icons/ppt-icon.png", "alt", "ppt", 1, "size-120px"], ["src", "assets/images/icons/others-icon.png", "alt", "others", 1, "size-120px"], [3, "annotate", "deleteAnnotation", "getAnnotate", "userType", "pdfPath", "toolAlignCenter", "toolHide"], [1, "col-12", "card", "mt-4", "p-3", 3, "innerHtml"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title", "font-weight-bold"], [1, "modal-body"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "cancel", 3, "click"], ["target", "_blank", 1, "cursor", 3, "href"], [2, "overflow", "scroll", "overflow-y", "hidden", 3, "title"], [4, "ngIf"]], template: function StudentPreviewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, StudentPreviewComponent_div_0_Template, 13, 5, "div", 1)(1, StudentPreviewComponent_ng_template_1_Template, 9, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.functionCalled == true);
        } }, dependencies: [i12.NgForOf, i12.NgIf, i13.AnnotationComponent], styles: [".selectColor[_ngcontent-%COMP%]{\n  background: purple;\n  color: #fff;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 24px; border: 1px solid #8F008A; border-radius: 4px; padding: 6px;\n  margin-right: 12px;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentPreviewComponent, [{
        type: Component,
        args: [{ selector: 'app-student-preview', template: "<div *ngIf=\"functionCalled == true\" class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h3><b class=\"contenttext\">{{questionData.name}}</b></h3>\n        </div>\n        <div class=\"col-md-6\">\n            <button class=\"btn btn-outline-primary pull-right\" (click)=\"backAction()\">Back</button>\n            <button *ngIf=\"linkdata?.length != '0'\" class=\"btn btn-primary pull-right mr-2\"\n                (click)=\"otherlink()\">Resources</button>\n            <!-- <a *ngIf=\"questionData?.download != '0'\" [href]=\"pdfTemplate\" [download]=\"downloadTemplateName\" class=\"btn btn-outline-primary pull-right mr-2\">Download Pdf</a> -->\n            <a class=\"pull-right\" *ngIf=\"questionData?.download != '0'\" [download]=\"downloadTemplateName\" [href]=\"pdfTemplate\">\n                <i class=\"fa fa-download color-primary icon\" title=\"Download PDF\" aria-hidden=\"true\"></i>\n            </a>\n        </div>\n    </div>\n    <div class=\"row mt-4\" *ngIf=\"questionData?.content_format == '1'\">\n        <div class=\"col-md-12\" *ngIf=\"!isPdfAvailable\">\n            <a [title]=\"pdfPath[0].link\" [href]=\"pdfPath[0].link\" target=\"_blank\">\n                <div class=\"col-md-12 flex-center flex-wrap link-card\" style=\"height: 70vh\">\n                    <div class=\"col-md-12 d-flex justify-content-center\">\n                        <img *ngIf=\"pdfPath[0].type == 'document'\" class=\"size-120px\"\n                            src=\"assets/images/icons/doc-icon.png\" alt=\"doc\">\n                        <img *ngIf=\"pdfPath[0].type == 'audio'\" class=\"size-120px\"\n                            src=\"assets/images/icons/audio-icon.png\" alt=\"mp3\">\n                        <img *ngIf=\"pdfPath[0].type == 'video'\" class=\"size-120px\"\n                            src=\"assets/images/icons/video-icon.png\" alt=\"mp4\">\n                        <img *ngIf=\"pdfPath[0].type == 'ppt'\" class=\"size-120px\" src=\"assets/images/icons/ppt-icon.png\"\n                            alt=\"ppt\">\n                        <img *ngIf=\"pdfPath[0].type == 'Others'\" class=\"size-120px\"\n                            src=\"assets/images/icons/others-icon.png\" alt=\"others\">\n                    </div>\n                    <a [title]=\"pdfPath[0].link\" [href]=\"pdfPath[0].link\" target=\"_blank\">{{pdfPath[0].name}}</a>\n                </div>\n            </a>\n        </div>\n        <div class=\"col-md-12\" *ngIf=\"isPdfAvailable\">\n            <app-annotation [getAnnotate]=\"areaInfo\" [userType]=\"userType\" (annotate)=\"getAreaInfo($event)\"\n                (deleteAnnotation)=\"getDeleteAction($event)\" [pdfPath]=\"pdfTemplate\" [toolAlignCenter]=\"true\"\n                [toolHide]=\"false\">\n            </app-annotation>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"questionData?.content_format == '3' && questionData?.content_type == '1'\">\n        <div class=\"col-12 card mt-4 p-3\" innerHtml=\"{{showcontent}}\">\n        </div>\n    </div>\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title font-weight-bold\" id=\"modal-basic-title\">Resources</h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\" *ngFor=\"let item of linkdata; let last = last\">\n                <div class=\"col-md-12\">\n                    <a class=\"cursor\" href=\"{{item.link}}\" target=\"_blank\">\n                        <span style=\"overflow: scroll; overflow-y: hidden\" title=\"{{item.name}}\">{{item.name != '' ?\n                            item.name : item.link}}</span>\n                    </a>\n                    <hr *ngIf=\"!last\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn cancel\" (click)=\"onSave()\">Cancel</button>\n    </div>\n</ng-template>", styles: [".selectColor{\n  background: purple;\n  color: #fff;\n}\n\n.icon {\n  font-size: 24px; border: 1px solid #8F008A; border-radius: 4px; padding: 6px;\n  margin-right: 12px;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.CommonService }, { type: i3.StudentService }, { type: i4.ConfigurationService }, { type: i5.DomSanitizer }, { type: i6.NgbModal }, { type: i7.Router }, { type: i8.CreatorService }, { type: i9.NavService }, { type: i10.ToastrService }, { type: i11.NewsubjectService }], { link: [{
            type: ViewChild,
            args: ['content']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentPreviewComponent, { className: "StudentPreviewComponent" }); })();
//# sourceMappingURL=student-preview.component.js.map