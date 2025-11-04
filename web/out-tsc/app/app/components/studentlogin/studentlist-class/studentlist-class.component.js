import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SessionConstants } from '../../../shared/data/sessionConstants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "../../../shared/service/nav.service";
import * as i5 from "../../../shared/service/auth.service";
import * as i6 from "../../../shared/service/common-data.service";
import * as i7 from "@angular/platform-browser";
import * as i8 from "@angular/router";
import * as i9 from "@angular/common";
import * as i10 from "ngx-toastr";
import * as i11 from "../../../shared/service/newsubject.service";
import * as i12 from "../../../shared/service/common.service";
import * as i13 from "../../../shared/service/class.service";
import * as i14 from "../../../environment.service";
const _c0 = ["throwError"];
const _c1 = a0 => ({ "active1": a0 });
const _c2 = a0 => ({ "height": a0 });
function StudentlistClassComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 16)(2, "button", 17);
    i0.ɵɵtext(3, "No Class Available !");
    i0.ɵɵelementEnd()()();
} }
function StudentlistClassComponent_section_22_div_2_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵtext(1, "Not Started");
    i0.ɵɵelementEnd();
} }
function StudentlistClassComponent_section_22_div_2_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵtext(1, "In-Progress");
    i0.ɵɵelementEnd();
} }
function StudentlistClassComponent_section_22_div_2_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 36);
    i0.ɵɵtext(1, "Completed");
    i0.ɵɵelementEnd();
} }
function StudentlistClassComponent_section_22_div_2_p_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "span", 27);
    i0.ɵɵtext(2, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(4, "span", 27);
    i0.ɵɵtext(5, "End: ");
    i0.ɵɵelementEnd()();
} }
function StudentlistClassComponent_section_22_div_2_p_20_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(", ", list_r4.start_time, "");
} }
function StudentlistClassComponent_section_22_div_2_p_20_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(", ", list_r4.end_time, "");
} }
function StudentlistClassComponent_section_22_div_2_p_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "span", 27);
    i0.ɵɵtext(2, "Start: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 28);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵtemplate(6, StudentlistClassComponent_section_22_div_2_p_20_span_6_Template, 2, 1, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " \u00A0 \u00A0 ");
    i0.ɵɵelementStart(8, "span", 27);
    i0.ɵɵtext(9, "End: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 28);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "date");
    i0.ɵɵtemplate(13, StudentlistClassComponent_section_22_div_2_p_20_span_13_Template, 2, 1, "span", 31);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const list_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 4, list_r4.start_date, "MM/dd/yyyy"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r4.start_time != "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(12, 7, list_r4.end_date, "MM/dd/yyyy"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", list_r4.end_time != "");
} }
function StudentlistClassComponent_section_22_div_2_span_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r5.dayFromInt(item_r7.slotday) + ": ", "", item_r7.slotstarttime + " - " + item_r7.slotendtime, "");
} }
function StudentlistClassComponent_section_22_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵlistener("click", function StudentlistClassComponent_section_22_div_2_Template_div_click_0_listener() { const ctx_r2 = i0.ɵɵrestoreView(_r2); const list_r4 = ctx_r2.$implicit; const i_r5 = ctx_r2.index; const ctx_r5 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r5.enterList(i_r5, list_r4)); });
    i0.ɵɵelementStart(1, "div")(2, "div", 2)(3, "div", 22)(4, "h4", 23);
    i0.ɵɵtemplate(5, StudentlistClassComponent_section_22_div_2_span_5_Template, 2, 0, "span", 24)(6, StudentlistClassComponent_section_22_div_2_span_6_Template, 2, 0, "span", 25)(7, StudentlistClassComponent_section_22_div_2_span_7_Template, 2, 0, "span", 26);
    i0.ɵɵelementStart(8, "span", 27);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p")(11, "span", 27);
    i0.ɵɵtext(12, "Subject: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 28);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15, " \u00A0 \u00A0 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 29)(17, "div", 2)(18, "div", 30);
    i0.ɵɵtemplate(19, StudentlistClassComponent_section_22_div_2_p_19_Template, 6, 0, "p", 31)(20, StudentlistClassComponent_section_22_div_2_p_20_Template, 14, 10, "p", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 32);
    i0.ɵɵtemplate(22, StudentlistClassComponent_section_22_div_2_span_22_Template, 2, 2, "span", 33);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const list_r4 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("card-body ", ctx_r5.env.deviceType() ? "px-2 py-3" : "", "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", list_r4.status == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r4.status == "2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r4.status == "3");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", list_r4.class_name, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(list_r4.subject_name);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", list_r4.start_date == "0000-00-00" && list_r4.end_date == "0000-00-00");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", list_r4.start_date != "0000-00-00" && list_r4.end_date != "0000-00-00");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", list_r4.availabilityDate);
} }
function StudentlistClassComponent_section_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 18)(1, "div", 19);
    i0.ɵɵtemplate(2, StudentlistClassComponent_section_22_div_2_Template, 23, 11, "div", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r5.choosedData);
} }
function StudentlistClassComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38)(1, "h4", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 40);
    i0.ɵɵlistener("click", function StudentlistClassComponent_ng_template_23_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 41)(5, "p", 42)(6, "b");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 43)(9, "div", 5)(10, "button", 44);
    i0.ɵɵlistener("click", function StudentlistClassComponent_ng_template_23_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r8); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onSave()); });
    i0.ɵɵtext(11, "ok");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.ErrorTitle);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r5.message);
} }
export class StudentlistClassComponent {
    constructor(formBuilder, config, confi, navServices, auth, commondata, modalService, sanitizer, route, firstcaps, toastr, newSubject, common, classes, datePipe, env) {
        this.formBuilder = formBuilder;
        this.config = config;
        this.confi = confi;
        this.navServices = navServices;
        this.auth = auth;
        this.commondata = commondata;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.firstcaps = firstcaps;
        this.toastr = toastr;
        this.newSubject = newSubject;
        this.common = common;
        this.classes = classes;
        this.datePipe = datePipe;
        this.env = env;
        this.webhost = this.confi.getimgUrl();
        config.backdrop = 'static';
        config.keyboard = false;
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.route.url.includes('list-class')) {
                    this.init(params);
                }
            }
            else {
                this.init(this.auth.getSessionData('school_id'));
            }
        });
    }
    ngOnInit() {
        this.navServices.collapseSidebar = true;
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
    }
    init(id) {
        this.getSearch_Filter();
        this.classList(this.classlisthighlight);
    }
    open(content) {
        this.modalService.open(content);
    }
    classSearch() {
        if (this.searchClass != '') {
            this.updateFilter(this.searchClass);
        }
    }
    onSave() {
        this.modalRef.close();
    }
    close() {
        this.modalRef.close();
    }
    classList(id) {
        this.setSearch_Filter(id);
        this.classlisthighlight = id;
        const data = {
            platform: 'web',
            type: id,
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            student_id: this.auth.getUserId(),
        };
        this.classes.studentClassDashboardList(data).subscribe((successData) => {
            this.classListSuccess(successData);
        }, (error) => {
            this.classListFailure(error);
        });
    }
    classListSuccess(successData) {
        if (successData.IsSuccess) {
            this.choosedData = successData.ResponseObject;
            this.choosedData1 = successData.ResponseObject;
            this.classSearch();
        }
    }
    classListFailure(error) {
        console.log(error, 'error');
    }
    updateFilter(event) {
        const val = event.toLowerCase();
        const temp = this.choosedData1.filter(function (d) {
            return d.class_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.choosedData = temp;
        this.setSearch_Filter(this.classlisthighlight);
    }
    enterList(id, event) {
        if (event.status == '3') {
            // this.toastr.error('This Class has already completed');
            this.message = 'This Class has already completed';
            this.ErrorTitle = event.class_name;
            this.modalRef = this.modalService.open(this.throwError, { size: 'md' });
        }
        else if (event.status == '1') {
            this.toastr.info('This Class Not Started');
        }
        else {
            this.auth.setSessionData('class-id', this.choosedData[id].class_id);
            this.auth.setSessionData('schedule_id', this.choosedData[id].schedule_id);
            this.route.navigate(['/studentlogin/class-detail']);
        }
    }
    dayFromInt(val) {
        return val == 1 ? 'MON' : val == 2 ? 'TUE' : val == 3 ? 'WED' : val == 4 ? 'THU' : val == 5 ? 'FRI' : val == 6 ? 'SAT' : 'SUN';
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
    setSearch_Filter(id) {
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.studentClassSearch));
        if (data != null) {
            data.forEach((items) => {
                if (items.school_id == this.auth.getSessionData('school_id')) {
                    items.classDateStatus = id;
                    items.className = this.searchClass;
                }
                else {
                    const searchData = {
                        className: this.searchClass,
                        classDateStatus: id,
                        school_id: this.auth.getSessionData('school_id')
                    };
                    data.push(searchData);
                }
            });
            data = data.filter((test, index, array) => index === array.findIndex((findTest) => findTest.school_id === test.school_id));
            this.auth.setSessionData(SessionConstants.studentClassSearch, JSON.stringify(data));
        }
    }
    getSearch_Filter() {
        let data = JSON.parse(this.auth.getSessionData(SessionConstants.studentClassSearch));
        data.every((items) => {
            if (items.school_id == this.auth.getSessionData('school_id')) {
                this.classlisthighlight = items.classDateStatus;
                this.searchClass = items.className;
                return false;
            }
            else {
                this.searchClass = '';
                this.classlisthighlight = '3';
            }
            return true;
        });
    }
    static { this.ɵfac = function StudentlistClassComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentlistClassComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.NgbModalConfig), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.NavService), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.CommonDataService), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i7.DomSanitizer), i0.ɵɵdirectiveInject(i8.Router), i0.ɵɵdirectiveInject(i9.TitleCasePipe), i0.ɵɵdirectiveInject(i10.ToastrService), i0.ɵɵdirectiveInject(i11.NewsubjectService), i0.ɵɵdirectiveInject(i12.CommonService), i0.ɵɵdirectiveInject(i13.ClassService), i0.ɵɵdirectiveInject(i9.DatePipe), i0.ɵɵdirectiveInject(i14.EnvironmentService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentlistClassComponent, selectors: [["app-list-studentlist"]], viewQuery: function StudentlistClassComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.throwError = _t.first);
        } }, decls: 25, vars: 40, consts: [["throwError", ""], [1, "container-fluid"], [1, "row"], [1, "group-btn", "col-8", "col-lg-9", "mt-2"], ["type", "button", 3, "click", "ngClass"], [1, "pull-right"], [1, "input-group"], ["type", "text", "size", "50", "placeholder", "Search Class", 1, "form-control", 3, "ngModelChange", "input", "ngStyle", "ngModel"], [1, "input-group-append"], ["type", "submit"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "col-12", "mt-2", "mb-2", "text-right"], ["type", "button", 3, "routerLink"], ["class", "row d-flex justify-content-center list-card mt-5", 4, "ngIf"], ["class", "row list-card", 4, "ngIf"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-5"], [1, "col-4"], [1, "nodataList"], [1, "row", "list-card"], [1, "col-md-12"], ["class", "card class-card class-hover", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "class-card", "class-hover", 3, "click"], [1, "col-md-6"], [1, "t-period"], ["class", "badge badge-secondary mr-2", 4, "ngIf"], ["class", "badge  badge-warning mr-2", 4, "ngIf"], ["class", "badge  badge-success mr-2", 4, "ngIf"], [1, "font-weight-bold"], [1, "t-name", "font-weight-bold"], [1, "col-md-6", "d-flex", 2, "justify-content", "flex-end"], [1, "col-md-12", "text-right"], [4, "ngIf"], [1, "col-12", "mt-2", "d-flex", "flex-wrap", "justify-content-end"], ["class", "badge ml-2 mb-1 p-2", "style", "background-color: #73b5a8; color: white;", 4, "ngFor", "ngForOf"], [1, "badge", "badge-secondary", "mr-2"], [1, "badge", "badge-warning", "mr-2"], [1, "badge", "badge-success", "mr-2"], [1, "badge", "ml-2", "mb-1", "p-2", 2, "background-color", "#73b5a8", "color", "white"], [1, "modal-header"], [1, "modal-title", "letter"], [1, "fa", "fa-close", "cursor", 3, "click"], [1, "modal-body", "text-center"], [1, "mb-0"], [1, "modal-footer"], [1, "btn", "btn-outline-primary", 3, "click"]], template: function StudentlistClassComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
            i0.ɵɵlistener("click", function StudentlistClassComponent_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.classList(3)); });
            i0.ɵɵtext(4, "In Progress");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 4);
            i0.ɵɵlistener("click", function StudentlistClassComponent_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.classList(2)); });
            i0.ɵɵtext(6, "Upcoming");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵlistener("click", function StudentlistClassComponent_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.classList(4)); });
            i0.ɵɵtext(8, "Completed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 4);
            i0.ɵɵlistener("click", function StudentlistClassComponent_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.classList(1)); });
            i0.ɵɵtext(10, "All");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div")(12, "div", 5)(13, "div", 6)(14, "input", 7);
            i0.ɵɵtwoWayListener("ngModelChange", function StudentlistClassComponent_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.searchClass, $event) || (ctx.searchClass = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("input", function StudentlistClassComponent_Template_input_input_14_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateFilter(ctx.searchClass)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 8)(16, "button", 9);
            i0.ɵɵelement(17, "i", 10);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(18, "div", 11)(19, "button", 12);
            i0.ɵɵtext(20, "Enroll Class");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(21, StudentlistClassComponent_div_21_Template, 4, 0, "div", 13)(22, StudentlistClassComponent_section_22_Template, 3, 1, "section", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(23, StudentlistClassComponent_ng_template_23_Template, 12, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵclassMapInterpolate1("btn btn-outline-primary ", ctx.env.deviceType() ? "border-radius-20" : "", "");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(30, _c1, ctx.classlisthighlight == "3"));
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn btn-outline-primary ", ctx.env.deviceType() ? "border-radius-20" : "", "");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(32, _c1, ctx.classlisthighlight == "2"));
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn btn-outline-primary ", ctx.env.deviceType() ? "border-radius-20" : "", "");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(34, _c1, ctx.classlisthighlight == "4"));
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn btn-outline-primary ", ctx.env.deviceType() ? "border-radius-20" : "", "");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(36, _c1, ctx.classlisthighlight == "1"));
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("col-4 col-lg-3 ", ctx.env.deviceType() ? "mt-2" : "", "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(38, _c2, ctx.env.deviceType() ? "34px" : "40px"));
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchClass);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx.env.deviceType() ? "py-0 border-radius-2" : "", "");
            i0.ɵɵadvance(3);
            i0.ɵɵclassMapInterpolate1("btn btn-outline-primary ", ctx.env.deviceType() ? "border-radius-20" : "", "");
            i0.ɵɵproperty("routerLink", "/studentlogin/enrollclass");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.choosedData == "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.choosedData != "");
        } }, dependencies: [i9.NgClass, i9.NgForOf, i9.NgIf, i9.NgStyle, i1.DefaultValueAccessor, i1.NgControlStatus, i8.RouterLink, i1.NgModel, i9.DatePipe], styles: [".nodataList[_ngcontent-%COMP%]{\n  background: #f8f8f9;\n  border: 2px solid #7F3486;\n  padding: 15px 25px;\n  text-align: center;\n  border-radius: 7px;\n  color:#7F3486;\n  width: 100%;\n  font-weight: bolder;\n  font-size: large;\n}\n\n.border-radius-20[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentlistClassComponent, [{
        type: Component,
        args: [{ selector: 'app-list-studentlist', template: "<!-- Container-fluid starts-->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"group-btn col-8 col-lg-9 mt-2\">\n            <button type=\"button\" [ngClass]=\"{'active1': classlisthighlight == '3'}\" class=\"btn btn-outline-primary {{env.deviceType() ? 'border-radius-20' : ''}}\" (click)=\"classList(3)\">In Progress</button>\n            <button type=\"button\" [ngClass]=\"{'active1': classlisthighlight == '2'}\" class=\"btn btn-outline-primary {{env.deviceType() ? 'border-radius-20' : ''}}\" (click)=\"classList(2)\">Upcoming</button>\n            <button type=\"button\" [ngClass]=\"{'active1': classlisthighlight == '4'}\" class=\"btn btn-outline-primary {{env.deviceType() ? 'border-radius-20' : ''}}\" (click)=\"classList(4)\">Completed</button>\n            <button type=\"button\" [ngClass]=\"{'active1': classlisthighlight == '1'}\" class=\"btn btn-outline-primary {{env.deviceType() ? 'border-radius-20' : ''}}\" (click)=\"classList(1)\">All</button>\n        </div>\n        <div class=\"col-4 col-lg-3 {{env.deviceType() ? 'mt-2' : ''}}\">\n            <div class=\"pull-right\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" [ngStyle]=\"{'height' : env.deviceType() ? '34px' : '40px'}\" size=\"50\" placeholder=\"Search Class\" [(ngModel)]=\"searchClass\" (input)=\"updateFilter(searchClass)\" >\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-primary {{env.deviceType() ? 'py-0 border-radius-2' : ''}}\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 mt-2 mb-2 text-right\">\n            <button type=\"button\" class=\"btn btn-outline-primary {{env.deviceType() ? 'border-radius-20' : ''}}\" [routerLink]=\"'/studentlogin/enrollclass'\">Enroll Class</button>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-center list-card mt-5\" *ngIf=\"choosedData==''\">\n        <div class=\"col-4\">\n            <button class=\"nodataList\">No Class Available !</button>\n        </div>\n    </div>\n    <section class=\"row list-card\" *ngIf=\"choosedData!=''\">\n        <div class=\"col-md-12\">\n            <div class=\"card class-card class-hover\" *ngFor=\"let list of choosedData; let i = index\" (click)=\"enterList(i, list)\">\n                <div class=\"card-body {{env.deviceType() ? 'px-2 py-3' : ''}}\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h4 class=\"t-period\"><span class=\"badge badge-secondary mr-2\" *ngIf=\"list.status == '1'\">Not Started</span>\n                                <span class=\"badge  badge-warning mr-2\" *ngIf=\"list.status == '2'\">In-Progress</span>\n                                <span class=\"badge  badge-success mr-2\" *ngIf=\"list.status == '3'\">Completed</span>\n                                <span class=\"font-weight-bold\">{{list.class_name}} </span>\n                            </h4>\n                            <p>\n                                <span class=\"font-weight-bold\">Subject: </span> <span class=\"t-name font-weight-bold\">{{list.subject_name}}</span> &nbsp; &nbsp;\n                            </p>\n                        </div>\n                        <div class=\"col-md-6 d-flex\" style=\"justify-content: flex-end\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12 text-right\">\n                                    <p *ngIf=\"list.start_date == '0000-00-00'&& list.end_date == '0000-00-00'\"><span class=\"font-weight-bold\">Start: </span>  &nbsp; &nbsp;\n                                        <span class=\"font-weight-bold\">End: </span>\n                                    </p>\n                                    <p *ngIf=\"list.start_date != '0000-00-00'&& list.end_date != '0000-00-00'\"><span class=\"font-weight-bold\">Start: </span> <span class=\"t-name font-weight-bold\">{{list.start_date|date:'MM/dd/yyyy'}}<span *ngIf=\"list.start_time != ''\">, {{list.start_time}}</span></span> &nbsp; &nbsp;\n                                        <span class=\"font-weight-bold\">End: </span> <span class=\"t-name font-weight-bold\">{{list.end_date|date:'MM/dd/yyyy'}}<span *ngIf=\"list.end_time != ''\">, {{list.end_time}}</span></span>\n                                    </p>\n                                </div>\n                                <div class=\"col-12 mt-2 d-flex flex-wrap justify-content-end\">\n                                    <span class=\"badge ml-2 mb-1 p-2\" style=\"background-color: #73b5a8; color: white;\" *ngFor=\"let item of list.availabilityDate\">{{dayFromInt(item.slotday) + ': '}}{{item.slotstarttime + ' - ' + item.slotendtime}}</span>\n                                </div>\n<!--                                <div class=\"col-12 mt-2\">-->\n<!--                                    <button type=\"button\" class=\"btn-sm-i btn-outline-primary pull-right\" [disabled]=\"classlisthighlight == '2'  || list.status == '1'\" (click)=\"enterList(i, list)\">Enter</button>-->\n<!--                                </div>-->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n<!-- Container-fluid Ends-->\n<ng-template #throwError>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title letter\">{{ErrorTitle}}</h4>\n        <i class=\"fa fa-close cursor\" (click)=\"onSave()\" ></i>\n    </div>\n    <div class=\"modal-body text-center\">\n        <p class=\"mb-0\"><b>{{message}}</b></p>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"pull-right\">\n            <button class=\"btn btn-outline-primary\" (click)=\"onSave()\">ok</button>\n        </div>\n    </div>\n</ng-template>\n", styles: [".nodataList{\n  background: #f8f8f9;\n  border: 2px solid #7F3486;\n  padding: 15px 25px;\n  text-align: center;\n  border-radius: 7px;\n  color:#7F3486;\n  width: 100%;\n  font-weight: bolder;\n  font-size: large;\n}\n\n.border-radius-20 {\n  border-radius: 20px !important;\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.NgbModalConfig }, { type: i3.ConfigurationService }, { type: i4.NavService }, { type: i5.AuthService }, { type: i6.CommonDataService }, { type: i2.NgbModal }, { type: i7.DomSanitizer }, { type: i8.Router }, { type: i9.TitleCasePipe }, { type: i10.ToastrService }, { type: i11.NewsubjectService }, { type: i12.CommonService }, { type: i13.ClassService }, { type: i9.DatePipe }, { type: i14.EnvironmentService }], { throwError: [{
            type: ViewChild,
            args: ['throwError']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentlistClassComponent, { className: "StudentlistClassComponent" }); })();
//# sourceMappingURL=studentlist-class.component.js.map