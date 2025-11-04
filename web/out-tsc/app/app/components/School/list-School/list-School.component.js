import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/School.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../shared/service/configuration.service";
import * as i4 from "@angular/platform-browser";
import * as i5 from "../../../shared/service/auth.service";
import * as i6 from "../../../shared/service/common-data.service";
import * as i7 from "@angular/router";
import * as i8 from "@angular/common";
import * as i9 from "../../../shared/components/feather-icons/feather-icons.component";
const _c0 = ["content"];
const _c1 = ["viewdetails"];
function ListSchoolComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "h4", 19);
    i0.ɵɵtext(2, "Delete School");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 20)(4, "div", 3)(5, "div", 6)(6, "div", 21)(7, "h5", 22);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(9, "div", 23)(10, "button", 24);
    i0.ɵɵlistener("click", function ListSchoolComponent_ng_template_0_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSave()); });
    i0.ɵɵtext(11, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Are you sure you want to delete School details '", ctx_r2.deleteUser.brand_name, "'?");
} }
function ListSchoolComponent_div_18_div_1_img_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 42);
} }
function ListSchoolComponent_div_18_div_1_img_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 43);
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + item_r5.profile_url), i0.ɵɵsanitizeUrl);
} }
function ListSchoolComponent_div_18_div_1_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 44);
    i0.ɵɵtext(2, "Institution: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r5.name);
} }
function ListSchoolComponent_div_18_div_1_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 45);
    i0.ɵɵtext(2, "E-mail: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 46);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r5.admin_details[0].email_id);
} }
function ListSchoolComponent_div_18_div_1_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 45);
    i0.ɵɵtext(2, "E-mail: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 47);
    i0.ɵɵlistener("click", function ListSchoolComponent_div_18_div_1_tr_18_Template_td_click_3_listener() { i0.ɵɵrestoreView(_r6); const item_r5 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.viewDetails(item_r5)); });
    i0.ɵɵtext(4);
    i0.ɵɵelement(5, "br", 48);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", item_r5.admin_details[0].email_id, ", ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", item_r5.admin_details.length - 1, " Admin...");
} }
function ListSchoolComponent_div_18_div_1_tr_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 38);
    i0.ɵɵtext(2, "Website: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 49)(4, "a", 50);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate("href", item_r5.school_website, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r5.school_website);
} }
function ListSchoolComponent_div_18_div_1_td_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 51);
    i0.ɵɵtext(1, "Active");
    i0.ɵɵelementEnd();
} }
function ListSchoolComponent_div_18_div_1_span_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 52);
    i0.ɵɵtext(1, "Suspended");
    i0.ɵɵelementEnd();
} }
function ListSchoolComponent_div_18_div_1_span_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 53);
    i0.ɵɵtext(1, "Disengaged");
    i0.ɵɵelementEnd();
} }
function ListSchoolComponent_div_18_div_1_span_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 52);
    i0.ɵɵtext(1, "Deleted");
    i0.ɵɵelementEnd();
} }
function ListSchoolComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27)(2, "app-feather-icons", 28);
    i0.ɵɵlistener("click", function ListSchoolComponent_div_18_div_1_Template_app_feather_icons_click_2_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.editschool(item_r5)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "table", 29)(4, "tr")(5, "td", 30)(6, "div", 31);
    i0.ɵɵlistener("click", function ListSchoolComponent_div_18_div_1_Template_div_click_6_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.viewDetails(item_r5)); });
    i0.ɵɵtemplate(7, ListSchoolComponent_div_18_div_1_img_7_Template, 1, 0, "img", 32)(8, ListSchoolComponent_div_18_div_1_img_8_Template, 1, 1, "img", 33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td")(10, "div", 34)(11, "div", 35)(12, "h4", 36);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 35)(15, "table");
    i0.ɵɵtemplate(16, ListSchoolComponent_div_18_div_1_tr_16_Template, 5, 1, "tr", 37)(17, ListSchoolComponent_div_18_div_1_tr_17_Template, 5, 1, "tr", 37)(18, ListSchoolComponent_div_18_div_1_tr_18_Template, 7, 2, "tr", 37);
    i0.ɵɵelementStart(19, "tr")(20, "td", 38);
    i0.ɵɵtext(21, "Contact: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "td");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(24, ListSchoolComponent_div_18_div_1_tr_24_Template, 6, 2, "tr", 37);
    i0.ɵɵelementStart(25, "tr")(26, "td", 38);
    i0.ɵɵtext(27, "Status:");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(28, ListSchoolComponent_div_18_div_1_td_28_Template, 2, 0, "td", 39)(29, ListSchoolComponent_div_18_div_1_span_29_Template, 2, 0, "span", 40)(30, ListSchoolComponent_div_18_div_1_span_30_Template, 2, 0, "span", 41)(31, ListSchoolComponent_div_18_div_1_span_31_Template, 2, 0, "span", 40);
    i0.ɵɵelementEnd()()()()()()()()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", "edit");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", item_r5.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r5.profile_url != "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r5.name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r5.name != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r5.admin_details.length == "1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r5.admin_details.length != "1");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r5.admin_details[0].mobile);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r5.school_website != "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", item_r5.status == "Active");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r5.status == "Suspended");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r5.status == "Disengaged");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r5.status == "Deleted");
} }
function ListSchoolComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, ListSchoolComponent_div_18_div_1_Template, 32, 13, "div", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.listData);
} }
function ListSchoolComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54)(1, "div", 55)(2, "button", 56);
    i0.ɵɵtext(3, "No Data Available!");
    i0.ɵɵelementEnd()()();
} }
function ListSchoolComponent_ng_template_20_img_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 69);
} }
function ListSchoolComponent_ng_template_20_img_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 70);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webhost + "/" + ctx_r2.viewDetail.profile_url), i0.ɵɵsanitizeUrl);
} }
function ListSchoolComponent_ng_template_20_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 64)(2, "b");
    i0.ɵɵtext(3, "Corporate: ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r2.viewDetail.corporate_name, ",");
} }
function ListSchoolComponent_ng_template_20_td_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 51);
    i0.ɵɵtext(1, "Active");
    i0.ɵɵelementEnd();
} }
function ListSchoolComponent_ng_template_20_span_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 52);
    i0.ɵɵtext(1, "Suspended");
    i0.ɵɵelementEnd();
} }
function ListSchoolComponent_ng_template_20_span_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 53);
    i0.ɵɵtext(1, "Disengaged");
    i0.ɵɵelementEnd();
} }
function ListSchoolComponent_ng_template_20_span_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 52);
    i0.ɵɵtext(1, "Deleted");
    i0.ɵɵelementEnd();
} }
function ListSchoolComponent_ng_template_20_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71)(1, "table")(2, "tr")(3, "td", 72)(4, "b");
    i0.ɵɵtext(5, "Name:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td", 73);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "tr")(9, "td", 64)(10, "b");
    i0.ɵɵtext(11, "E-mail:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "tr")(15, "td", 64)(16, "b");
    i0.ɵɵtext(17, "Contact:");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const view_r8 = ctx.$implicit;
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate2("", view_r8.first_name, " ", view_r8.last_name, "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(view_r8.email_id);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(view_r8.mobile);
} }
function ListSchoolComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "h4", 57)(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "i", 58);
    i0.ɵɵlistener("click", function ListSchoolComponent_ng_template_20_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSave()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 20)(6, "div", 3)(7, "div", 6)(8, "div", 21)(9, "div", 59)(10, "div", 35)(11, "div", 60);
    i0.ɵɵtemplate(12, ListSchoolComponent_ng_template_20_img_12_Template, 1, 0, "img", 61)(13, ListSchoolComponent_ng_template_20_img_13_Template, 1, 1, "img", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "table");
    i0.ɵɵtemplate(15, ListSchoolComponent_ng_template_20_tr_15_Template, 6, 1, "tr", 37);
    i0.ɵɵelementStart(16, "tr")(17, "td", 63)(18, "b");
    i0.ɵɵtext(19, "Address: ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td");
    i0.ɵɵtext(21);
    i0.ɵɵelement(22, "br");
    i0.ɵɵtext(23);
    i0.ɵɵelement(24, "br");
    i0.ɵɵtext(25);
    i0.ɵɵelement(26, "br");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "tr")(29, "td", 64)(30, "b");
    i0.ɵɵtext(31, "Status:");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(32, ListSchoolComponent_ng_template_20_td_32_Template, 2, 0, "td", 39)(33, ListSchoolComponent_ng_template_20_span_33_Template, 2, 0, "span", 40)(34, ListSchoolComponent_ng_template_20_span_34_Template, 2, 0, "span", 41)(35, ListSchoolComponent_ng_template_20_span_35_Template, 2, 0, "span", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div", 65)(37, "h5", 66)(38, "b");
    i0.ɵɵtext(39, "Admin Details");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(40, ListSchoolComponent_ng_template_20_div_40_Template, 20, 4, "div", 67);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementStart(41, "div", 23)(42, "button", 24);
    i0.ɵɵlistener("click", function ListSchoolComponent_ng_template_20_Template_button_click_42_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSave()); });
    i0.ɵɵtext(43, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "button", 68);
    i0.ɵɵlistener("click", function ListSchoolComponent_ng_template_20_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.editschool(ctx_r2.viewDetail); return i0.ɵɵresetView(ctx_r2.onSave()); });
    i0.ɵɵtext(45, "Edit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.viewDetail.school_name);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r2.viewDetail.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewDetail.profile_url != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.viewDetail.corporate_name != "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r2.viewDetail.address_1, ",");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.viewDetail.city, ",");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.viewDetail.state_name, ",");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.viewDetail.country_name, "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r2.viewDetail.status == "Active");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewDetail.status == "Suspended");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewDetail.status == "Disengaged");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.viewDetail.status == "Deleted");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r2.viewDetail.admin_details);
} }
export class ListSchoolComponent {
    constructor(brandservices, config, confi, sanitizer, modalService, auth, commondata, route) {
        this.brandservices = brandservices;
        this.config = config;
        this.confi = confi;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.auth = auth;
        this.commondata = commondata;
        this.route = route;
        this.settings = {
            hideSubHeader: false,
            actions: {
                custom: [
                    {
                        name: 'editAction',
                        title: '<i class="fa  fa-pencil"></i>'
                    },
                    {
                        name: 'deleteAction',
                        title: '&nbsp;&nbsp;<i class="fa fa-trash" aria-hidden="true"></i>'
                    }
                ],
                add: false,
                edit: false,
                delete: false,
                position: 'right',
            },
            columns: {
                name: {
                    title: 'Institution Name',
                },
                address1: {
                    title: 'Address1',
                },
                address2: {
                    title: 'Address2',
                },
                email_id: {
                    title: 'Email-id',
                },
                mobile: {
                    title: 'Mobile'
                },
                status: {
                    title: 'Status'
                }
            },
        };
        this.imgUrl = this.confi.getimgUrl();
        this.categoryList();
        config.backdrop = 'static';
        config.keyboard = false;
        this.webhost = this.confi.getimgUrl();
    }
    ngOnInit() {
        this.commondata.showLoader(false);
        this.corporateSchoolControl = true;
        this.brandservices.changeSideCorporateSchoolList(this.corporateSchoolControl);
    }
    ngOnDestroy() {
        this.corporateSchoolControl = false;
        this.brandservices.changeSideCorporateSchoolList(this.corporateSchoolControl);
    }
    showModal() {
        this.modalRef = this.modalService.open(this.modalContent);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    viewDetails(item) {
        this.viewDetail = [];
        this.viewDetail = item;
        this.modalRef = this.modalService.open(this.viewDetailsContent);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        const temp = this.listData1.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.listData = temp;
        console.log(this.listData, 'opo');
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
    open(content) {
        this.modalService.open(content);
    }
    onSave() {
        this.modalRef.close();
    }
    categoryList() {
        this.commondata.showLoader(false);
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        if (this.auth.getRoleId() == '6') {
            data['corporate_id'] = this.auth.getSessionData('corporate_id');
            this.brandservices.getSchoolList(data).subscribe((successData) => {
                this.categoryListSuccess(successData);
            }, (error) => {
                this.categoryListFailure(error);
            });
        }
        else {
            this.brandservices.getSchoolList(data).subscribe((successData) => {
                this.categoryListSuccess(successData);
            }, (error) => {
                this.categoryListFailure(error);
            });
        }
    }
    categoryListSuccess(successData) {
        console.log(successData, 'successData');
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.listData = successData.ResponseObject;
            this.listData1 = successData.ResponseObject;
            if (this.listData.length != 0) {
                if (this.auth.getSessionData('school_details') == undefined || this.auth.getSessionData('school_details') == null) {
                    this.auth.setSessionData('school_details', JSON.stringify(this.listData));
                    this.auth.setSessionData('rista_data1', JSON.stringify(this.listData[0]));
                    this.auth.setSessionData('school_id', this.listData[0]?.school_id);
                    this.auth.setSessionData('school_profile', this.listData[0]?.profile_url);
                    this.auth.setSessionData('school_name', this.listData[0]?.name);
                    this.auth.setSessionData('selected-name', '');
                }
            }
            this.listData.forEach((value, index, array) => {
                this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
                    'Suspended' : this.listData[index].status == 3 ? 'Disengaged' : this.listData[index].status == 4 ? 'Deleted' : '';
            });
        }
    }
    categoryListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }
    // encodeImageFileAsURL(event: any){
    //     for (let i = 0; i < event.target.files.length; i++) {
    //         const getUrlEdu = '';
    //         const imgDetails = event.target.files[0];
    //         const reader = new FileReader();
    //         reader.onload = (event: any) => {
    //             const url = event.target.result;
    //             const getUrl = url.split(',');
    //             this.onUploadKYCFinished(getUrl, imgDetails);
    //         };
    //         reader.readAsDataURL(event.target.files[i]);
    //     }
    // }
    // onUploadKYCFinished(getUrlEdu, data){
    //     this.recordBase64Url =  getUrlEdu[1];
    //     const imgData = [{
    //         image: this.recordBase64Url,
    //         size: data.size,
    //         type: data.type,
    //         name: data.name
    //     }];
    editschool(rows) {
        this.auth.setSessionData('editschool', JSON.stringify(rows));
        this.route.navigate(['/School/create-School/edit']);
        this.onSave();
    }
    static { this.ɵfac = function ListSchoolComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListSchoolComponent)(i0.ɵɵdirectiveInject(i1.SchoolService), i0.ɵɵdirectiveInject(i2.NgbModalConfig), i0.ɵɵdirectiveInject(i3.ConfigurationService), i0.ɵɵdirectiveInject(i4.DomSanitizer), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.CommonDataService), i0.ɵɵdirectiveInject(i7.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListSchoolComponent, selectors: [["app-list-school"]], viewQuery: function ListSchoolComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewDetailsContent = _t.first);
        } }, decls: 22, vars: 3, consts: [["content", ""], ["viewdetails", ""], [0, "xmlns", "text-transform", "http://www.w3.org/1999/xhtml"], [1, "container-fluid"], [1, "card", 2, "background-color", "#f4f4f4"], [1, "card-body"], [1, "row"], [1, "col-md-6"], [1, "btn-popup", "pull-left"], [1, "input-group"], ["type", "text", "size", "25", "placeholder", "Search Institution", 1, "form-control", 2, "height", "35px", 3, "input"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "btn-popup", "pull-right"], [1, "btn", "btn-primary", 3, "routerLink"], ["class", "row", 4, "ngIf"], ["class", "row d-flex justify-content-center", 4, "ngIf"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [1, "col-sm-12"], [1, "text-center", "mt-3"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["class", "col-md-6", "style", "padding-right: 4px; padding-left: 4px", 4, "ngFor", "ngForOf"], [1, "col-md-6", 2, "padding-right", "4px", "padding-left", "4px"], [1, "card", 2, "background-color", "white", "margin", "0 2px 8px 2px"], [2, "cursor", "pointer", "position", "absolute", "z-index", "5", "right", "15px", "top", "10px", 3, "click", "icon"], [1, "col-md-12"], [2, "width", "200px"], [1, "card", "col-md-4", "px-0", "imghvr-reveal-up", "school-img", "school-card-img1", 3, "click"], ["class", "card-img img-thumbnail", "src", "assets/images/ristaschool/school-default.png", "alt", "", 4, "ngIf"], ["class", "card-img img-thumbnail", "alt", "", 3, "src", 4, "ngIf"], [1, "card-body", "p-3", "pl-5"], [1, "row", "d-flex", "flex-column"], [1, "card-title", "mt-3", "capital", 2, "color", "purple"], [4, "ngIf"], [2, "color", "rgba(0,0,0,0.5)"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], ["src", "assets/images/ristaschool/school-default.png", "alt", "", 1, "card-img", "img-thumbnail"], ["alt", "", 1, "card-img", "img-thumbnail", 3, "src"], [1, "capital", 2, "color", "rgba(0,0,0,0.5)"], [2, "width", "70px", "color", "rgba(0,0,0,0.5)"], [2, "overflow", "hidden", "text-overflow", "ellipsis", "white-space", "nowrap", "max-width", "0"], [1, "table-size-words", "cursor", 3, "click"], [1, "break-size-show"], [2, "cursor", "pointer"], ["target", "_blank", 3, "href"], [1, "badge", "badge-success"], [1, "badge", "badge-danger"], [1, "badge", "badge-warning"], [1, "row", "d-flex", "justify-content-center"], [1, "col-4"], [1, "nodataList"], [1, "modal-title"], ["aria-hidden", "true", 1, "fa", "fa-close", "fa-lg", "mt-1", 2, "color", "#7F3486", "cursor", "pointer", "float", "right", 3, "click"], [1, "card-body", "pt-2"], [1, "mb-5", "fit-image"], ["src", "assets/images/ristaschool/school-default.png", "alt", "", "style", "border-radius: 0", 4, "ngIf"], ["style", "border-radius: 0", "alt", "", 3, "src", 4, "ngIf"], [1, "pl-4", 2, "vertical-align", "top", "width", "150px"], [1, "pl-4"], [1, "mt-3"], [1, "text-capitalize", 2, "text-align", "center"], ["class", "card", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["src", "assets/images/ristaschool/school-default.png", "alt", "", 2, "border-radius", "0"], ["alt", "", 2, "border-radius", "0", 3, "src"], [1, "card"], [1, "pl-4", 2, "width", "150px"], [1, "text-capitalize"]], template: function ListSchoolComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, ListSchoolComponent_ng_template_0_Template, 12, 1, "ng-template", 2, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "input", 10);
            i0.ɵɵlistener("input", function ListSchoolComponent_Template_input_input_9_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.updateFilter($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 11)(11, "button", 12);
            i0.ɵɵelement(12, "i", 13);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(13, "div", 7)(14, "div", 14)(15, "a", 15);
            i0.ɵɵtext(16, "Register Institution");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(17, "div", 3);
            i0.ɵɵtemplate(18, ListSchoolComponent_div_18_Template, 2, 1, "div", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(19, ListSchoolComponent_div_19_Template, 4, 0, "div", 17);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(20, ListSchoolComponent_ng_template_20_Template, 46, 13, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("routerLink", "/School/create-School/add");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.listData != "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.listData == "");
        } }, dependencies: [i8.NgForOf, i8.NgIf, i7.RouterLink, i9.FeatherIconsComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListSchoolComponent, [{
        type: Component,
        args: [{ selector: 'app-list-school', template: "<!-- Container-fluid starts-->\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" xmlns:text-transform=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Delete School</h4>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <h5 class=\"text-center mt-3\">Are you sure you want to delete School details '{{deleteUser.brand_name}}'?</h5>\n                </div>\n            </div>\n        </div>\n\n        <!-- Container-fluid Ends-->\n\n    </div>\n    <div class=\"modal-footer\">\n<!--        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteConfirm()\" >Delete</button>-->\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"onSave()\">Cancel</button>\n    </div>\n</ng-template>\n<div class=\"container-fluid\">\n    <div class=\"card\" style=\"background-color: #f4f4f4\">\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"btn-popup pull-left\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" style=\"height:35px\" size=\"25\" placeholder=\"Search Institution\" (input)=\"updateFilter($event)\">\n<!--                            <input type=\"text\" class=\"form-control\" style=\"height:45px\" size=\"50\" placeholder=\"Search Institution\" (input)=\"updateFilter($event)\">-->\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"btn-popup pull-right\">\n                        <a class=\"btn btn-primary\" [routerLink]=\"'/School/create-School/add'\">Register Institution</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"container-fluid\">\n                <div class=\"row\" *ngIf=\"listData != ''\">\n                    <div class=\"col-md-6\" style=\"padding-right: 4px; padding-left: 4px\" *ngFor=\"let item of listData\">\n                        <div class=\"card\" style=\"background-color: white; margin: 0 2px 8px 2px\">\n                            <app-feather-icons [icon]=\"'edit'\" style=\"cursor: pointer; position: absolute; z-index: 5; right: 15px; top: 10px\" (click)=\"editschool(item)\"></app-feather-icons>\n                            <table class=\"col-md-12\">\n                                <tr>\n                                    <td style=\"width: 200px\">\n                                        <div class=\"card col-md-4 px-0 imghvr-reveal-up school-img school-card-img1\" (click)=\"viewDetails(item)\">\n                                            <img *ngIf=\"item.profile_url == ''\" class=\"card-img img-thumbnail\"\n                                                 src=\"assets/images/ristaschool/school-default.png\" alt=\"\">\n                                            <img *ngIf=\"item.profile_url != ''\" class=\"card-img img-thumbnail\"\n                                                 [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + item.profile_url)\" alt=\"\">\n                                        </div>\n                                    </td>\n                                    <td><div class=\"card-body p-3 pl-5\">\n                                        <div class=\"row d-flex flex-column\">\n                                            <h4 class=\"card-title mt-3 capital\" style=\"color: purple\">{{item.name}}</h4>\n                                        </div>\n                                        <div class=\"row d-flex flex-column\">\n                                            <table>\n                                                <tr *ngIf=\"item.name != ''\" >\n                                                    <td class=\"capital\" style=\"color: rgba(0,0,0,0.5)\">Institution: </td>\n                                                    <td>{{item.name}}</td>\n                                                </tr>\n                                                <tr *ngIf=\"item.admin_details.length == '1'\">\n                                                    <td style=\"width: 70px;  color: rgba(0,0,0,0.5)\">E-mail: </td>\n                                                    <td style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 0\">{{item.admin_details[0].email_id}}</td>\n                                                </tr>\n                                                <tr *ngIf=\"item.admin_details.length != '1'\">\n                                                    <td style=\"width: 70px;  color: rgba(0,0,0,0.5)\">E-mail: </td>\n                                                    <td (click)=\"viewDetails(item)\" class=\"table-size-words cursor\">{{item.admin_details[0].email_id}}, <br class=\"break-size-show\">{{item.admin_details.length - 1}} Admin...</td>\n                                                </tr>\n                                                <tr>\n                                                    <td style=\"color: rgba(0,0,0,0.5)\">Contact: </td>\n                                                    <td>{{item.admin_details[0].mobile}}</td>\n                                                </tr>\n                                                <tr *ngIf=\"item.school_website != ''\">\n                                                    <td style=\"color: rgba(0,0,0,0.5)\">Website: </td>\n                                                    <td style=\"cursor: pointer\">\n                                                        <a href=\"{{item.school_website}}\" target=\"_blank\">{{item.school_website}}</a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td style=\"color: rgba(0,0,0,0.5)\">Status:</td>\n                                                    <td class=\"badge badge-success\" *ngIf=\"item.status == 'Active'\">Active</td>\n                                                    <span class=\"badge badge-danger\" *ngIf=\"item.status == 'Suspended'\">Suspended</span>\n                                                    <span class=\"badge badge-warning\" *ngIf=\"item.status == 'Disengaged'\">Disengaged</span>\n                                                    <span class=\"badge badge-danger\" *ngIf=\"item.status == 'Deleted'\">Deleted</span>\n                                                </tr>\n                                            </table>\n                                        </div>\n                                    </div>\n                                    </td>\n                                </tr>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row d-flex justify-content-center\" *ngIf=\"listData == ''\">\n                <div class=\"col-4\">\n                    <button  class=\"nodataList\" >No Data Available!</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Container-fluid Ends-->\n</div>\n<ng-template #viewdetails let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\" >\n        <h4 class=\"modal-title\" ><b>{{viewDetail.school_name}}</b></h4>\n        <i class=\"fa fa-close fa-lg mt-1\" aria-hidden=\"true\" style=\"color:#7F3486; cursor: pointer; float: right;\" (click)=\"onSave()\"></i>\n    </div>\n    <div class=\"modal-body\">\n        <!-- Container-fluid starts-->\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"card-body pt-2\">\n                        <div class=\"row d-flex flex-column\">\n                            <div class=\"mb-5 fit-image\">\n                                <img *ngIf=\"viewDetail.profile_url == ''\"\n                                     src=\"assets/images/ristaschool/school-default.png\" alt=\"\" style=\"border-radius: 0\">\n                                <img *ngIf=\"viewDetail.profile_url != ''\"\n                                     [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webhost + '/' + viewDetail.profile_url)\"  style=\"border-radius: 0\" alt=\"\">\n                            </div>\n                            <table>\n                                <tr *ngIf=\"viewDetail.corporate_name != ''\">\n                                    <td  class=\"pl-4\"><b>Corporate: </b></td>\n                                    <td>{{viewDetail.corporate_name}},</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"pl-4\" style=\"vertical-align: top; width: 150px\"><b>Address: </b></td>\n                                    <td>{{viewDetail.address_1}},<br>\n                                        {{viewDetail.city}},<br>\n                                        {{viewDetail.state_name}},<br>\n                                        {{viewDetail.country_name}}</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"pl-4\"><b>Status:</b></td>\n                                    <td class=\"badge badge-success\" *ngIf=\"viewDetail.status == 'Active'\">Active</td>\n                                    <span class=\"badge badge-danger\" *ngIf=\"viewDetail.status == 'Suspended'\">Suspended</span>\n                                    <span class=\"badge badge-warning\" *ngIf=\"viewDetail.status == 'Disengaged'\">Disengaged</span>\n                                    <span class=\"badge badge-danger\" *ngIf=\"viewDetail.status == 'Deleted'\">Deleted</span>\n                                </tr>\n                            </table>\n                            <div class=\"mt-3\">\n                                <h5 class=\"text-capitalize\" style=\"text-align: center\"><b>Admin Details</b></h5>\n                            </div>\n\n                            <div class=\"card\" *ngFor=\"let view of viewDetail.admin_details\">\n                                <table>\n                                    <tr>\n                                        <td class=\"pl-4\"style=\"width: 150px\"><b>Name:</b></td>\n                                        <td class=\"text-capitalize\">{{view.first_name}} {{view.last_name}}</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"pl-4\"><b>E-mail:</b></td>\n                                        <td>{{view.email_id}}</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"pl-4\"><b>Contact:</b></td>\n                                        <td>{{view.mobile}}</td>\n                                    </tr>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Container-fluid Ends-->\n\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"onSave()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editschool(viewDetail); onSave()\">Edit</button>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.SchoolService }, { type: i2.NgbModalConfig }, { type: i3.ConfigurationService }, { type: i4.DomSanitizer }, { type: i2.NgbModal }, { type: i5.AuthService }, { type: i6.CommonDataService }, { type: i7.Router }], { modalContent: [{
            type: ViewChild,
            args: ['content']
        }], viewDetailsContent: [{
            type: ViewChild,
            args: ['viewdetails']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListSchoolComponent, { className: "ListSchoolComponent" }); })();
//# sourceMappingURL=list-School.component.js.map