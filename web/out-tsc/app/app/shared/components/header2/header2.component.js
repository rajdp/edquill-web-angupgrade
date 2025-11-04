import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';
import * as i0 from "@angular/core";
import * as i1 from "../../service/nav.service";
import * as i2 from "../../service/subject.services";
import * as i3 from "../../service/creator.service";
import * as i4 from "@angular/router";
import * as i5 from "../../service/configuration.service";
import * as i6 from "../../service/auth.service";
import * as i7 from "@angular/common";
const _c0 = a0 => ({ active: a0 });
const _c1 = a0 => [a0];
const _c2 = (a0, a1) => ({ "menu-open": a0, "menu-close": a1 });
const _c3 = () => ({ exact: true });
function Header2Component_img_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 30);
} }
function Header2Component_img_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 31);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("src", ctx_r0.imgUrl + "/" + ctx_r0.profile, i0.ɵɵsanitizeUrl);
} }
function Header2Component_img_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 32);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.profile, i0.ɵɵsanitizeUrl);
} }
function Header2Component_li_44_a_1_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function Header2Component_li_44_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 39);
    i0.ɵɵlistener("click", function Header2Component_li_44_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r2); const menuItem_r3 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggletNavActive(menuItem_r3)); });
    i0.ɵɵelement(1, "app-feather-icons", 12);
    i0.ɵɵelementStart(2, "span", 40);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, Header2Component_li_44_a_1_i_4_Template, 1, 0, "i", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", menuItem_r3.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(menuItem_r3.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r3.children);
} }
function Header2Component_li_44_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 43)(1, "div", 44);
    i0.ɵɵelement(2, "img", 45);
    i0.ɵɵpipe(3, "lowercase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 46)(5, "h4", 4);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const menuItem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", !menuItem_r3.type ? null : i0.ɵɵpureFunction1(7, _c1, menuItem_r3.path));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("width", menuItem_r3.title == "Class" || menuItem_r3.title == "Report Card" ? "45" : "50");
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(3, 5, menuItem_r3.imgePath), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", menuItem_r3.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(menuItem_r3.title);
} }
function Header2Component_li_44_a_3_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function Header2Component_li_44_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 47);
    i0.ɵɵelement(1, "app-feather-icons", 12);
    i0.ɵɵtemplate(2, Header2Component_li_44_a_3_i_2_Template, 1, 0, "i", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("href", !menuItem_r3.type ? null : menuItem_r3.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", menuItem_r3.icon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r3.children);
} }
function Header2Component_li_44_a_4_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function Header2Component_li_44_a_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 48);
    i0.ɵɵelement(1, "app-feather-icons", 12);
    i0.ɵɵtemplate(2, Header2Component_li_44_a_4_i_2_Template, 1, 0, "i", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("href", !menuItem_r3.type ? null : menuItem_r3.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", menuItem_r3.icon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r3.children);
} }
function Header2Component_li_44_ul_5_li_1_a_1_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 58);
} }
function Header2Component_li_44_ul_5_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 55);
    i0.ɵɵlistener("click", function Header2Component_li_44_ul_5_li_1_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r4); const childrenItem_r5 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.toggletNavActive(childrenItem_r5)); });
    i0.ɵɵelement(1, "img", 56);
    i0.ɵɵpipe(2, "lowercase");
    i0.ɵɵtext(3);
    i0.ɵɵtemplate(4, Header2Component_li_44_ul_5_li_1_a_1_i_4_Template, 1, 0, "i", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(2, 4, childrenItem_r5.imgePath), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", childrenItem_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", childrenItem_r5.title, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenItem_r5.children);
} }
function Header2Component_li_44_ul_5_li_1_a_2_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 58);
} }
function Header2Component_li_44_ul_5_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 59);
    i0.ɵɵelement(1, "img", 56);
    i0.ɵɵpipe(2, "lowercase");
    i0.ɵɵtext(3);
    i0.ɵɵtemplate(4, Header2Component_li_44_ul_5_li_1_a_2_i_4_Template, 1, 0, "i", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", !childrenItem_r5.type ? null : i0.ɵɵpureFunction1(8, _c1, childrenItem_r5.path))("routerLinkActiveOptions", i0.ɵɵpureFunction0(10, _c3));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(2, 6, childrenItem_r5.imgePath), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", childrenItem_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", childrenItem_r5.title, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenItem_r5.children);
} }
function Header2Component_li_44_ul_5_li_1_a_3_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 58);
} }
function Header2Component_li_44_ul_5_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 60);
    i0.ɵɵelement(1, "img", 56);
    i0.ɵɵpipe(2, "lowercase");
    i0.ɵɵtext(3);
    i0.ɵɵtemplate(4, Header2Component_li_44_ul_5_li_1_a_3_i_4_Template, 1, 0, "i", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("href", !childrenItem_r5.type ? null : childrenItem_r5.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(8, _c3));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(2, 6, childrenItem_r5.imgePath), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", childrenItem_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", childrenItem_r5.title, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenItem_r5.children);
} }
function Header2Component_li_44_ul_5_li_1_a_4_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 58);
} }
function Header2Component_li_44_ul_5_li_1_a_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 61);
    i0.ɵɵelement(1, "img", 56);
    i0.ɵɵpipe(2, "lowercase");
    i0.ɵɵtext(3);
    i0.ɵɵtemplate(4, Header2Component_li_44_ul_5_li_1_a_4_i_4_Template, 1, 0, "i", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("href", !childrenItem_r5.type ? null : childrenItem_r5.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(2, 5, childrenItem_r5.imgePath), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", childrenItem_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", childrenItem_r5.title, "\n");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenItem_r5.children);
} }
function Header2Component_li_44_ul_5_li_1_ul_5_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 59);
    i0.ɵɵelement(1, "img", 56);
    i0.ɵɵpipe(2, "lowercase");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenSubItem_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", !childrenSubItem_r6.type ? null : i0.ɵɵpureFunction1(7, _c1, childrenSubItem_r6.path))("routerLinkActiveOptions", i0.ɵɵpureFunction0(9, _c3));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(2, 5, childrenSubItem_r6.imgePath), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", childrenSubItem_r6.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", childrenSubItem_r6.title, "\n");
} }
function Header2Component_li_44_ul_5_li_1_ul_5_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 60);
    i0.ɵɵelement(1, "img", 56);
    i0.ɵɵpipe(2, "lowercase");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenSubItem_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("href", !childrenSubItem_r6.type ? null : childrenSubItem_r6.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(7, _c3));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(2, 5, childrenSubItem_r6.imgePath), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", childrenSubItem_r6.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", childrenSubItem_r6.title, "\n");
} }
function Header2Component_li_44_ul_5_li_1_ul_5_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 61);
    i0.ɵɵelement(1, "img", 56);
    i0.ɵɵpipe(2, "lowercase");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenSubItem_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("href", !childrenSubItem_r6.type ? null : childrenSubItem_r6.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(2, 4, childrenSubItem_r6.imgePath), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", childrenSubItem_r6.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", childrenSubItem_r6.title, "\n");
} }
function Header2Component_li_44_ul_5_li_1_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtemplate(1, Header2Component_li_44_ul_5_li_1_ul_5_li_1_a_1_Template, 4, 10, "a", 51)(2, Header2Component_li_44_ul_5_li_1_ul_5_li_1_a_2_Template, 4, 8, "a", 52)(3, Header2Component_li_44_ul_5_li_1_ul_5_li_1_a_3_Template, 4, 6, "a", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenSubItem_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenSubItem_r6.type === "link");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenSubItem_r6.type === "extLink");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenSubItem_r6.type === "extTabLink");
} }
function Header2Component_li_44_ul_5_li_1_ul_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 62);
    i0.ɵɵtemplate(1, Header2Component_li_44_ul_5_li_1_ul_5_li_1_Template, 4, 3, "li", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", childrenItem_r5.children);
} }
function Header2Component_li_44_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 33);
    i0.ɵɵtemplate(1, Header2Component_li_44_ul_5_li_1_a_1_Template, 5, 6, "a", 50)(2, Header2Component_li_44_ul_5_li_1_a_2_Template, 5, 11, "a", 51)(3, Header2Component_li_44_ul_5_li_1_a_3_Template, 5, 9, "a", 52)(4, Header2Component_li_44_ul_5_li_1_a_4_Template, 5, 7, "a", 53)(5, Header2Component_li_44_ul_5_li_1_ul_5_Template, 2, 1, "ul", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r5 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, childrenItem_r5.active));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenItem_r5.type === "sub");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenItem_r5.type === "link");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenItem_r5.type === "extLink");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenItem_r5.type === "extTabLink");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenItem_r5.children);
} }
function Header2Component_li_44_ul_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 49);
    i0.ɵɵtemplate(1, Header2Component_li_44_ul_5_li_1_Template, 6, 8, "li", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c2, menuItem_r3.active, !menuItem_r3.active));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", menuItem_r3.children);
} }
function Header2Component_li_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 33);
    i0.ɵɵtemplate(1, Header2Component_li_44_a_1_Template, 5, 3, "a", 34)(2, Header2Component_li_44_a_2_Template, 7, 9, "a", 35)(3, Header2Component_li_44_a_3_Template, 3, 3, "a", 36)(4, Header2Component_li_44_a_4_Template, 3, 3, "a", 37)(5, Header2Component_li_44_ul_5_Template, 2, 5, "ul", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r3 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, menuItem_r3.active));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r3.type === "sub");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r3.type === "link");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r3.type === "extLink");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r3.type === "extTabLink");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r3.children);
} }
export class Header2Component {
    // @Output() rightSidebarEvent = new EventEmitter<boolean>();
    constructor(navServices, subject, creatorService, router, config, auth) {
        this.navServices = navServices;
        this.subject = subject;
        this.creatorService = creatorService;
        this.router = router;
        this.config = config;
        this.auth = auth;
        this.right_sidebar = false;
        this.open = false;
        this.openNav = false;
        this.schoolListCount = 1;
        this.imgUrl = this.config.getimgUrl();
        const url = window.location.href;
        if (url.toString().indexOf('xtracurriculum') > -1) {
            this.logo = 'xtraCurriculum.png';
        }
        else if (url.toString().indexOf('elevenace') > -1) {
            this.logo = 'elevenAce.png';
        }
        else if (url.toString().indexOf('uniqprep') > -1) {
            this.logo = 'uniqprep.png';
        }
        else if (url.toString().indexOf('safeteen') > -1) {
            this.logo = 'safeTeensOrg.png';
        }
        else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('uthkal') > -1 || url.toString().indexOf('edquill') > -1 || url.toString().indexOf('edveda') > -1) {
            this.logo = 'EdQuill.png';
            // this.logo = 'xtraCurriculum.png';
        }
        this.schoolListCount = JSON.parse(this.auth.getSessionData('school_details')).length;
        console.log(this.schoolListCount, 'sdasdas');
        this.creatorService.contentView.subscribe((res) => {
            if (res == true) {
                this.open = true;
                this.navServices.collapseSidebar = true;
            }
            else if (res != true || res == '' || res == null) {
                this.open = false;
                this.navServices.collapseSidebar = false;
            }
        });
        this.name = this.auth.getSessionData('firstname') + ' ' + this.auth.getSessionData('lastname');
        this.role = this.auth.getRoleId();
        if (this.role == 2) {
            this.schoolName = this.auth.getSessionData('school_name');
        }
        else if (this.role == 3) {
            this.schoolName = this.auth.getSessionData('schooldetails');
        }
        else if (this.role == 4) {
            this.schoolName = this.auth.getSessionData('school_name');
        }
        this.subject.profileList.subscribe((res) => {
            this.profile = res;
            let profilepic = this.profile.split('/');
            if (profilepic[0] == 'assets') {
                this.listCheck = true;
            }
            else if (profilepic[0] == 'uploads') {
                this.listCheck = false;
            }
            else {
                this.listCheck = false;
            }
        });
        // this.login.homeList.subscribe((res: any) => {
        //   this.homeListPage = res;
        // });
        this.navServices.items.subscribe(menuItems => {
            this.menuItems = menuItems;
            this.router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    menuItems.filter(items => {
                        if (items.path === event.url)
                            this.setNavActive(items);
                        if (!items.children)
                            return false;
                        items.children.filter(subItems => {
                            if (subItems.path === event.url)
                                this.setNavActive(subItems);
                            if (!subItems.children)
                                return false;
                            subItems.children.filter(subSubItems => {
                                if (subSubItems.path === event.url)
                                    this.setNavActive(subSubItems);
                            });
                        });
                    });
                }
            });
        });
    }
    collapseSidebar() {
        document.getElementById('mySidenav').style.width = '250px';
        document.getElementById('mySidenav').style.border = '1px solid #7F3486';
        // document.body.style.background = '#000000 !important';
        // this.open = !this.open;
        // this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
    }
    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
        document.getElementById('mySidenav').style.border = '0';
        // document.body.style.backgroundColor = '#ffffff !important';
    }
    right_side_bar() {
        this.right_sidebar = !this.right_sidebar;
        // this.rightSidebarEvent.emit(this.right_sidebar);
    }
    openMobileNav() {
        this.openNav = !this.openNav;
    }
    logout() {
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(['/auth/login']);
    }
    // Active Nave state
    setNavActive(item) {
        this.menuItems.filter(menuItem => {
            if (menuItem != item)
                menuItem.active = false;
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true;
            if (menuItem.children) {
                menuItem.children.filter(submenuItems => {
                    if (submenuItems.children && submenuItems.children.includes(item)) {
                        menuItem.active = true;
                        submenuItems.active = true;
                    }
                });
            }
        });
    }
    // Click Toggle menu
    toggletNavActive(item) {
        if (!item.active) {
            this.menuItems.forEach(a => {
                if (this.menuItems.includes(item))
                    a.active = false;
                if (!a.children)
                    return false;
                a.children.forEach(b => {
                    if (a.children.includes(item)) {
                        b.active = false;
                    }
                });
            });
        }
        item.active = !item.active;
    }
    //Fileupload
    readUrl(event) {
        if (event.target.files.length === 0)
            return;
        //Image upload validation
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        // Image upload
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            this.url = reader.result;
        };
    }
    ngOnInit() {
        this.subject.cast.subscribe(data => {
            this.profile = data;
            let profilepic = this.profile.split('/');
            if (profilepic[0] == 'assets') {
                this.listCheck = true;
            }
            else {
                this.listCheck = false;
            }
        });
        if (this.role == 4) {
            this.profile = this.auth.getSessionData('school_profile');
        }
        else {
            this.profile = this.auth.getSessionData('school_profile_url');
        }
    }
    static { this.ɵfac = function Header2Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Header2Component)(i0.ɵɵdirectiveInject(i1.NavService), i0.ɵɵdirectiveInject(i2.SubjectServices), i0.ɵɵdirectiveInject(i3.CreatorService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i5.ConfigurationService), i0.ɵɵdirectiveInject(i6.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Header2Component, selectors: [["app-header2"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 45, vars: 16, consts: [[1, "ipadViewNavBar"], [1, "page-main-header"], [1, "main-header-right", "row", "justify-content-between"], [1, "media-body", "text-right", "switch-sm"], [1, "mb-0"], ["alt", "", 1, "svg-icon", 2, "width", "auto", "height", "30px", 3, "src"], [1, "d-flex", "align-items-center", 3, "click"], ["src", "assets/images/ristaschool/school-default.png", "alt", "", "width", "35", 2, "border-radius", "0"], [1, "color-primary", "font-weight-bold", "mt-1", "ml-1", 2, "font-size", "16px"], [1, "d-lg-block", "mobile-toggle", "pull-right", "pt-0", 3, "click"], [1, "nav-menus", "d-flex", "align-items-end"], ["href", "javascript:void(0)", "toggleFullscreen", "", 1, "text-dark", "mr-3"], [3, "icon"], [1, "onhover-dropdown", "pb-1"], [1, "media", "align-items-center"], ["class", "align-self-center pull-right img-30 rounded-circle", "src", "assets/images/dashboard/default.png", "alt", "", 4, "ngIf"], ["class", "align-self-center pull-right img-30 rounded-circle", "style", "width: 30px; height: auto;", "alt", "", 3, "src", 4, "ngIf"], ["class", "img-30 rounded-circle", "style", "height: 30px", "alt", "", 3, "src", 4, "ngIf"], [1, "profile-dropdown", "onhover-show-div", "p-20", "profile-dropdown-hover"], [1, "my-1"], [1, "d-flex", "align-items-center", 3, "routerLink"], [1, "mr-2", 3, "icon"], ["id", "mySidenav", 1, "sidenav"], [1, "row", "d-flex", "align-items-center"], [1, "col-8", "px-3"], [3, "routerLink"], [1, "col-3", "px-2"], ["href", "javascript:void(0)", 1, "closebtn", 3, "click"], [1, "sidebar-menu-nav"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["src", "assets/images/dashboard/default.png", "alt", "", 1, "align-self-center", "pull-right", "img-30", "rounded-circle"], ["alt", "", 1, "align-self-center", "pull-right", "img-30", "rounded-circle", 2, "width", "30px", "height", "auto", 3, "src"], ["alt", "", 1, "img-30", "rounded-circle", 2, "height", "30px", 3, "src"], [3, "ngClass"], ["href", "javascript:void(0)", "class", "sidebar-header", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", "class", "my-2 sidebar-header d-flex align-items-center", 3, "routerLink", 4, "ngIf"], ["class", "sidebar-header", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "sidebar-header", 3, "href", 4, "ngIf"], ["class", "sidebar-submenu", 3, "ngClass", 4, "ngIf"], ["href", "javascript:void(0)", 1, "sidebar-header", 3, "click"], [1, "pl-2"], ["class", "fa fa-angle-right pull-right", 4, "ngIf"], [1, "fa", "fa-angle-right", "pull-right"], ["routerLinkActive", "active", 1, "my-2", "sidebar-header", "d-flex", "align-items-center", 3, "routerLink"], [2, "width", "25%", "text-align", "-webkit-center"], [3, "width", "src", "title"], [2, "width", "75%"], [1, "sidebar-header", 3, "href"], ["target", "_blank", 1, "sidebar-header", 3, "href"], [1, "sidebar-submenu", 3, "ngClass"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "sidebar-submenu", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], [3, "src", "title"], ["class", "fa fa-angle-down pull-right", 4, "ngIf"], [1, "fa", "fa-angle-down", "pull-right"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 3, "href"], [1, "sidebar-submenu"], [4, "ngFor", "ngForOf"]], template: function Header2Component_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "label", 4)(6, "a");
            i0.ɵɵelement(7, "img", 5);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(8, "div", 6);
            i0.ɵɵlistener("click", function Header2Component_Template_div_click_8_listener() { return ctx.schoolListCount > 1 ? ctx.router.navigate(["/auth/select"]) : ""; });
            i0.ɵɵelement(9, "img", 7);
            i0.ɵɵelementStart(10, "span", 8);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 9);
            i0.ɵɵlistener("click", function Header2Component_Template_div_click_12_listener() { return ctx.openMobileNav(); });
            i0.ɵɵelementStart(13, "ul", 10)(14, "li")(15, "a", 11);
            i0.ɵɵelement(16, "app-feather-icons", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "li", 13)(18, "div", 14);
            i0.ɵɵtemplate(19, Header2Component_img_19_Template, 1, 0, "img", 15)(20, Header2Component_img_20_Template, 1, 1, "img", 16)(21, Header2Component_img_21_Template, 1, 1, "img", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "ul", 18)(23, "li", 19)(24, "a", 20);
            i0.ɵɵelement(25, "app-feather-icons", 21);
            i0.ɵɵtext(26, "My Profile ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "li", 19)(28, "a", 20);
            i0.ɵɵelement(29, "app-feather-icons", 21);
            i0.ɵɵtext(30, "Change Password ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "li", 19)(32, "a", 6);
            i0.ɵɵlistener("click", function Header2Component_Template_a_click_32_listener() { return ctx.logout(); });
            i0.ɵɵelement(33, "app-feather-icons", 21);
            i0.ɵɵtext(34, "Logout ");
            i0.ɵɵelementEnd()()()()()()()()();
            i0.ɵɵelementStart(35, "div", 22)(36, "div", 23)(37, "div", 24)(38, "a", 25);
            i0.ɵɵelement(39, "img", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "div", 26)(41, "a", 27);
            i0.ɵɵlistener("click", function Header2Component_Template_a_click_41_listener() { return ctx.closeNav(); });
            i0.ɵɵtext(42, "\u00D7");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(43, "ul", 28);
            i0.ɵɵtemplate(44, Header2Component_li_44_Template, 6, 8, "li", 29);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵpropertyInterpolate1("src", "assets/images/", ctx.logo, "", i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.auth.getSchoolName());
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", "maximize-2");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.profile == "" || ctx.profile == null);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.profile != "" && ctx.profile != null && !ctx.listCheck);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.profile != "" && ctx.listCheck);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", ctx.auth.getRoleId() == "5" ? "/studentlogin/profile/view" : "/settings/profile/view");
            i0.ɵɵadvance();
            i0.ɵɵproperty("icon", "user");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", "/users/change-password");
            i0.ɵɵadvance();
            i0.ɵɵproperty("icon", "mail");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("icon", "log-out");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("routerLink", ctx.role == 5 ? "/student/dashboard" : "/dashboard/default");
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate1("src", "assets/images/", ctx.logo, "", i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.menuItems);
        } }, dependencies: [CommonModule, i7.NgClass, i7.NgForOf, i7.NgIf, i7.LowerCasePipe, RouterModule, i4.RouterLink, i4.RouterLinkActive, FeatherIconsComponent], styles: [".sidenav[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 0;\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  background-color: #ffffff;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 10px;\n}\n.sidebar-menu-nav[_ngcontent-%COMP%]{\n  padding: 5px !important;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  //padding: 4px 0 4px 0;\n  text-decoration: none;\n  font-size: 13px;\n  color: #000000;\n  display: block;\n  transition: 0.3s;\n}\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{\n  padding: 8px 0 8px 0;\n  text-decoration: none;\n  font-size: 13px;\n  color: #7F3486;\n  display: block;\n  transition: 0.3s;\n}\n.sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  //position: absolute;\n  //top: 0;\n  color: #7F3486;\n  //right: 25px;\n  font-size: 36px;\n  //margin-left: 50px;\n}\n\n\n@media screen and (max-height: 100vh) {\n  .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 13px;}\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Header2Component, [{
        type: Component,
        args: [{ selector: 'app-header2', standalone: true, imports: [CommonModule, RouterModule, FeatherIconsComponent], template: "<div class=\"ipadViewNavBar\">\n    <div class=\"page-main-header\">\n        <div class=\"main-header-right row justify-content-between\">\n            <div>\n                <div class=\"media-body text-right switch-sm\">\n                    <label class=\"mb-0\">\n                        <a>\n                            <img alt=\"\" class=\"svg-icon\" src=\"assets/images/{{logo}}\" style=\"width: auto; height: 30px;\">\n                        </a>\n                    </label>\n                </div>\n            </div>\n            <div class=\"d-flex align-items-center\" (click)=\"schoolListCount > 1 ? router.navigate(['/auth/select']) : ''\">\n                <img src=\"assets/images/ristaschool/school-default.png\" alt=\"\" width=\"35\"  style=\"border-radius: 0\">\n                <span class=\"color-primary font-weight-bold mt-1 ml-1\" style=\"font-size: 16px\">{{auth.getSchoolName()}}</span>\n            </div>\n            <div class=\"d-lg-block mobile-toggle pull-right pt-0\" (click)=\"openMobileNav()\">\n                <ul class=\"nav-menus d-flex align-items-end\">\n                    <li>\n                        <a href=\"javascript:void(0)\" class=\"text-dark mr-3\" toggleFullscreen>\n                            <app-feather-icons [icon]=\"'maximize-2'\"></app-feather-icons>\n                        </a>\n                    </li>\n                    <li class=\"onhover-dropdown pb-1\">\n                        <div class=\"media align-items-center\">\n                            <img class=\"align-self-center pull-right img-30 rounded-circle\" *ngIf=\"profile == '' || profile == null\" src=\"assets/images/dashboard/default.png\"  alt=\"\">\n                            <img class=\"align-self-center pull-right img-30 rounded-circle\" *ngIf=\"profile != '' && profile != null && !listCheck\" style=\"width: 30px; height: auto;\" src=\"{{imgUrl +'/'+ profile}}\"  alt=\"\">\n                            <img class=\"img-30 rounded-circle\" *ngIf=\"profile != '' && listCheck\" style=\"height: 30px\" [src]=\"profile\"  alt=\"\">\n                        </div>\n                        <ul class=\"profile-dropdown onhover-show-div p-20 profile-dropdown-hover\">\n                            <li class=\"my-1\"><a class=\"d-flex align-items-center\" [routerLink]=\"auth.getRoleId() == '5' ? '/studentlogin/profile/view' : '/settings/profile/view'\">\n                                <app-feather-icons class=\"mr-2\" [icon]=\"'user'\"></app-feather-icons>My Profile\n                            </a></li>\n                            <li class=\"my-1\"><a class=\"d-flex align-items-center\" [routerLink]=\"'/users/change-password'\">\n                                <app-feather-icons class=\"mr-2\" [icon]=\"'mail'\"></app-feather-icons>Change Password\n                            </a></li>\n                            <li class=\"my-1\"><a class=\"d-flex align-items-center\" (click)=\"logout()\">\n                                <app-feather-icons class=\"mr-2\" [icon]=\"'log-out'\"></app-feather-icons>Logout\n                            </a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"mySidenav\" class=\"sidenav\">\n    <div class=\"row d-flex align-items-center\">\n        <div class=\"col-8 px-3\">\n<!--            <a [routerLink]=\" role == 5 ? '/studentlogin/list-home' :'/dashboard/default'\">-->\n            <a [routerLink]=\" role == 5 ? '/student/dashboard' :'/dashboard/default'\">\n                <img alt=\"\" class=\"svg-icon\" src=\"assets/images/{{logo}}\" style=\"width: auto; height: 30px;\">\n            </a>\n        </div>\n        <div class=\"col-3 px-2\">\n            <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n        </div>\n    </div>\n    <ul class=\"sidebar-menu-nav\">\n        <li *ngFor=\"let menuItem of menuItems\" [ngClass]=\"{active: menuItem.active}\">\n            <!-- Sub -->\n            <a href=\"javascript:void(0)\" class=\"sidebar-header\" *ngIf=\"menuItem.type === 'sub'\"\n               (click)=\"toggletNavActive(menuItem)\">\n                <app-feather-icons [icon]=\"menuItem.icon\"></app-feather-icons><span class=\"pl-2\">{{menuItem.title}}</span>\n                <i class=\"fa fa-angle-right pull-right\" *ngIf=\"menuItem.children\"></i>\n            </a>\n            <!-- Link -->\n            <a [routerLink]=\"!menuItem.type ? null : [menuItem.path]\" routerLinkActive=\"active\" class=\"my-2 sidebar-header d-flex align-items-center\"\n               *ngIf=\"menuItem.type === 'link'\">\n                <div style=\"width: 25%;text-align: -webkit-center;\">\n                    <img width=\"{{menuItem.title == 'Class' || menuItem.title == 'Report Card' ? '45' : '50'}}\"\n                            src=\"{{menuItem.imgePath | lowercase}}\" title=\"{{menuItem.title}}\">\n                </div>\n                <div style=\"width: 75%\">\n                    <h4 class=\"mb-0\">{{menuItem.title}}</h4>\n                </div>\n            </a>\n            <!-- External Link -->\n            <a href=\"{{ !menuItem.type ? null : menuItem.path }}\" class=\"sidebar-header\" *ngIf=\"menuItem.type === 'extLink'\">\n                <app-feather-icons [icon]=\"menuItem.icon\"></app-feather-icons>\n                <i class=\"fa fa-angle-right pull-right\" *ngIf=\"menuItem.children\"></i>\n            </a>\n            <!-- External Tab Link -->\n            <a href=\"{{ !menuItem.type ? null : menuItem.path }}\" target=\"_blank\" class=\"sidebar-header\"\n               *ngIf=\"menuItem.type === 'extTabLink'\">\n                <app-feather-icons [icon]=\"menuItem.icon\"></app-feather-icons>\n                <i class=\"fa fa-angle-right pull-right\" *ngIf=\"menuItem.children\"></i>\n            </a>\n\n            <!-- 2nd Level Menu -->\n            <ul class=\"sidebar-submenu\" [ngClass]=\"{'menu-open': menuItem.active, 'menu-close': !menuItem.active }\"\n                *ngIf=\"menuItem.children\">\n                <li *ngFor=\"let childrenItem of menuItem.children\" [ngClass]=\"{active: childrenItem.active}\">\n                    <!-- Sub -->\n                    <a href=\"javascript:void(0)\" *ngIf=\"childrenItem.type === 'sub'\" (click)=\"toggletNavActive(childrenItem)\">\n                        <img src=\"{{childrenItem.imgePath | lowercase}}\" title=\"{{childrenItem.title}}\">{{childrenItem.title}}\n                        <i class=\"fa fa-angle-down pull-right\" *ngIf=\"childrenItem.children\"></i>\n                    </a>\n                    <!-- Link -->\n                    <a [routerLink]=\"!childrenItem.type ? null : [childrenItem.path]\" *ngIf=\"childrenItem.type === 'link'\"\n                       routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                        <img src=\"{{childrenItem.imgePath | lowercase}}\" title=\"{{childrenItem.title}}\">{{childrenItem.title}}\n                        <i class=\"fa fa-angle-down pull-right\" *ngIf=\"childrenItem.children\"></i>\n                    </a>\n                    <!-- External Link -->\n                    <a href=\"{{ !childrenItem.type ? null : childrenItem.path }}\" *ngIf=\"childrenItem.type === 'extLink'\"\n                       routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                        <img src=\"{{childrenItem.imgePath | lowercase}}\" title=\"{{childrenItem.title}}\">{{childrenItem.title}}\n                        <i class=\"fa fa-angle-down pull-right\" *ngIf=\"childrenItem.children\"></i>\n                    </a>\n                    <!-- External Tab Link -->\n                    <a href=\"{{ !childrenItem.type ? null : childrenItem.path }}\" target=\"_blank\"\n                       *ngIf=\"childrenItem.type === 'extTabLink'\">\n                        <img src=\"{{childrenItem.imgePath | lowercase}}\" title=\"{{childrenItem.title}}\">{{childrenItem.title}}\n<!--                        <i class=\"fa fa-circle\"></i>-->\n                        <!--                        <span>{{childrenItem.title}} <span-->\n                        <!--                            class=\"badge badge-{{childrenItem.badgeType}} pull-right\"-->\n                        <!--                            *ngIf=\"childrenItem.badgeType\">{{childrenItem.badgeValue}}</span></span>-->\n                        <i class=\"fa fa-angle-down pull-right\" *ngIf=\"childrenItem.children\"></i>\n                    </a>\n                    <!-- 3rd Level Menu -->\n                    <ul class=\"sidebar-submenu\" *ngIf=\"childrenItem.children\">\n                        <li *ngFor=\"let childrenSubItem of childrenItem.children\">\n                            <!-- Link -->\n                            <a [routerLink]=\"!childrenSubItem.type ? null : [childrenSubItem.path]\"\n                               *ngIf=\"childrenSubItem.type === 'link'\" routerLinkActive=\"active\"\n                               [routerLinkActiveOptions]=\"{exact: true}\">\n                                <img src=\"{{childrenSubItem.imgePath | lowercase}}\" title=\"{{childrenSubItem.title}}\">{{childrenSubItem.title}}\n<!--                                <i class=\"fa fa-circle\"></i>-->\n                                <!--                                <span> {{childrenSubItem.title}} <span-->\n                                <!--                                    class=\"badge badge-{{childrenSubItem.badgeType}} pull-right\"-->\n                                <!--                                    *ngIf=\"childrenSubItem.badgeType\">{{childrenSubItem.badgeValue}}</span> </span>-->\n                            </a>\n                            <!-- External Link -->\n                            <a href=\"{{ !childrenSubItem.type ? null : childrenSubItem.path }}\"\n                               *ngIf=\"childrenSubItem.type === 'extLink'\" routerLinkActive=\"active\"\n                               [routerLinkActiveOptions]=\"{exact: true}\">\n                                <img src=\"{{childrenSubItem.imgePath | lowercase}}\" title=\"{{childrenSubItem.title}}\">{{childrenSubItem.title}}\n<!--                                <i class=\"fa fa-circle\"></i>-->\n                                <!--                                <span>{{childrenSubItem.title}} <span-->\n                                <!--                                    class=\"badge badge-{{childrenSubItem.badgeType}} pull-right\"-->\n                                <!--                                    *ngIf=\"childrenSubItem.badgeType\">{{childrenSubItem.badgeValue}}</span></span>-->\n                            </a>\n                            <!-- External Tab Link -->\n                            <a href=\"{{ !childrenSubItem.type ? null : childrenSubItem.path }}\" target=\"_blank\"\n                               *ngIf=\"childrenSubItem.type === 'extTabLink'\">\n                                <img src=\"{{childrenSubItem.imgePath | lowercase}}\" title=\"{{childrenSubItem.title}}\">{{childrenSubItem.title}}\n<!--                                <i class=\"fa fa-circle\"></i>-->\n                                <!--                                <span>{{childrenSubItem.title}} <span-->\n                                <!--                                    class=\"badge badge-{{childrenSubItem.badgeType}} pull-right\"-->\n                                <!--                                    *ngIf=\"childrenSubItem.badgeType\">{{childrenSubItem.badgeValue}}</span></span>-->\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</div>\n", styles: [".sidenav {\n  height: 100vh;\n  width: 0;\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  background-color: #ffffff;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 10px;\n}\n.sidebar-menu-nav{\n  padding: 5px !important;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n.sidenav a {\n  //padding: 4px 0 4px 0;\n  text-decoration: none;\n  font-size: 13px;\n  color: #000000;\n  display: block;\n  transition: 0.3s;\n}\n.sidenav a:active{\n  padding: 8px 0 8px 0;\n  text-decoration: none;\n  font-size: 13px;\n  color: #7F3486;\n  display: block;\n  transition: 0.3s;\n}\n.sidenav .closebtn {\n  //position: absolute;\n  //top: 0;\n  color: #7F3486;\n  //right: 25px;\n  font-size: 36px;\n  //margin-left: 50px;\n}\n\n\n@media screen and (max-height: 100vh) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 13px;}\n}\n"] }]
    }], () => [{ type: i1.NavService }, { type: i2.SubjectServices }, { type: i3.CreatorService }, { type: i4.Router }, { type: i5.ConfigurationService }, { type: i6.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Header2Component, { className: "Header2Component" }); })();
//# sourceMappingURL=header2.component.js.map